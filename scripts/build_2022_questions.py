#!/usr/bin/env python3
"""Produce original individual 2022 A/L Chemistry questions for the existing website."""
from pathlib import Path
import os, json, urllib.request
import fitz
from PIL import Image
YEAR=2022
ROOT=Path(__file__).resolve().parents[1]
OUT=ROOT/"past-papers"/str(YEAR)
BASE="https://cdn.alevelapi.com/Prod/documents/"+str(YEAR)+"/chemistry/"
SOURCE={"I":str(YEAR)+"-AL-CHEMISTRY-PART-I-MCQ-PAPER-SINHALA-MEDIUM-AlevelApi-PDF.pdf",
        "II":str(YEAR)+"-AL-CHEMISTRY-PART-II-PAPER-SINHALA-MEDIUM-AlevelApi-PDF.pdf"}
MCQ=[[1,635],[1,812],[1,1042],[1,1200],[2,106],[2,365],[2,527],[2,665],[2,766],[2,950],[3,108],[3,331],[3,609],[3,712],[3,1000],[4,87],[4,259],[4,486],[4,680],[4,833],[4,937],[4,1150],[5,105],[5,225],[5,590],[5,743],[5,967],[5,1135],[6,99],[6,513],[6,1073],[6,1191],[7,96],[7,287],[7,489],[7,637],[7,773],[7,909],[7,1135],[8,101],[8,579],[8,660],[8,714],[8,795],[8,870],[8,969],[8,1044],[8,1104],[8,1207],[8,1287]]
PREAMBLES=[[6,735,1054],[8,316,542]]
ESSAYS={"1":[[2,104,1370],[3,75,1320]],"2":[[4,98,1370],[5,78,960]],"3":[[5,960,1370],[6,75,1370],[7,85,388]],"4":[[7,388,1370],[8,75,1370]],"5":[[9,389,1370],[10,75,476]],"6":[[10,475,1370]],"7":[[11,75,1370]],"8":[[12,185,1370]],"9":[[13,90,1370]],"10":[[14,95,1210]]}
def raster(part):
    name=SOURCE[part]
    local=os.environ.get("CHEMISTRY_"+str(YEAR)+"_PDF_DIR")
    if local and (Path(local)/name).is_file():
        doc=fitz.open(Path(local)/name)
    else:
        req=urllib.request.Request(BASE+name,headers={"User-Agent":"Mozilla/5.0","Referer":"https://www.alevelapi.com/"})
        with urllib.request.urlopen(req,timeout=110) as result:raw=result.read()
        if not raw.startswith(b"%PDF"):raise ValueError("Invalid PDF: "+name)
        doc=fitz.open(stream=raw,filetype="pdf")
    pages={}
    with doc:
        for i,page in enumerate(doc,1):
            pix=page.get_pixmap(matrix=fitz.Matrix(1.75,1.75),colorspace=fitz.csRGB,alpha=False)
            pages[i]=Image.frombytes("RGB",(pix.width,pix.height),pix.samples)
    return pages
def clip(im,top,bottom):
    return im.crop((75,max(55,top),950,min(im.height-92,bottom)))
def combine(parts):
    if len(parts)==1:return parts[0]
    width=max(i.width for i in parts)
    result=Image.new("RGB",(width,sum(i.height for i in parts)+17*(len(parts)-1)),"white")
    y=0
    for im in parts:
        result.paste(im,((width-im.width)//2,y));y+=im.height+17
    return result
def save(img,part,num):
    dest=OUT/part/("q%02d.webp"%num)
    dest.parent.mkdir(parents=True,exist_ok=True)
    img.save(dest,format="WEBP",quality=92,method=6)
    return dest.relative_to(ROOT).as_posix()
def main():
    first=raster("I");second=raster("II")
    assert len(MCQ)==50 and len(ESSAYS)==10
    table31=clip(first[PREAMBLES[0][0]],PREAMBLES[0][1],PREAMBLES[0][2])
    table41=clip(first[PREAMBLES[1][0]],PREAMBLES[1][1],PREAMBLES[1][2])
    records=[]
    for i,(page,start) in enumerate(MCQ):
        num=i+1
        end=(MCQ[i+1][1]-4 if i<49 and MCQ[i+1][0]==page else 1370)
        if YEAR==2022 and num==30:end=730
        if YEAR==2022 and num==40:end=313
        if YEAR==2022 and num==50:end=1351
        if YEAR==2023 and num==30:end=1190
        if YEAR==2023 and num==40:end=253
        if YEAR==2024 and num==30:end=1360
        if YEAR==2024 and num==40:end=1350
        part=clip(first[page],start-3,end)
        if YEAR==2024 and num==30:
            part=combine([part,clip(first[7],80,450)])
        if 31<=num<=40:part=combine([table31,part])
        if 41<=num<=50:part=combine([table41,part])
        image=save(part,"I",num)
        records.append({"year":YEAR,"part":"I","number":num,"type":"mcq","image":image,
                        "pdf_pages":[page],"source":"Original Sinhala examination paper",
                        "classification_status":"not_started"})
    for key,spans in ESSAYS.items():
        num=int(key)
        image=combine([clip(second[p],top,bottom) for p,top,bottom in spans])
        path=save(image,"II",num)
        records.append({"year":YEAR,"part":"II","number":num,
                        "type":"structured_essay" if num<=4 else "essay",
                        "image":path,"pdf_pages":[p for p,_,_ in spans],
                        "classification_status":"not_started"})
    OUT.mkdir(parents=True,exist_ok=True)
    (OUT/"questions.json").write_text(json.dumps(records,ensure_ascii=False,indent=2)+"\n",encoding="utf-8")
    print(YEAR,"Exported",len(records),"individual-question images")
if __name__=="__main__":main()
