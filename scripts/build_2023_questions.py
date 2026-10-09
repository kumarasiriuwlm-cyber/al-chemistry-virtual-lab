#!/usr/bin/env python3
"""Produce original individual 2023 A/L Chemistry questions for the existing website."""
from pathlib import Path
import os, json, urllib.request
import fitz
from PIL import Image
YEAR=2023
ROOT=Path(__file__).resolve().parents[1]
OUT=ROOT/"past-papers"/str(YEAR)
BASE="https://cdn.alevelapi.com/Prod/documents/"+str(YEAR)+"/chemistry/"
SOURCE={"I":str(YEAR)+"-AL-CHEMISTRY-PART-I-MCQ-PAPER-SINHALA-MEDIUM-AlevelApi-PDF.pdf",
        "II":str(YEAR)+"-AL-CHEMISTRY-PART-II-PAPER-SINHALA-MEDIUM-AlevelApi-PDF.pdf"}
MCQ=[[1,585],[1,694],[1,882],[1,1005],[1,1164],[2,105],[2,368],[2,523],[2,711],[2,847],[2,1176],[3,96],[3,422],[3,659],[3,780],[3,892],[3,1122],[4,112],[4,532],[4,703],[4,1043],[5,100],[5,280],[5,549],[5,765],[5,1017],[5,1111],[6,98],[6,395],[6,567],[6,1200],[7,101],[7,293],[7,426],[7,562],[7,719],[7,905],[7,1042],[7,1202],[8,104],[8,538],[8,592],[8,642],[8,727],[8,786],[8,845],[8,923],[8,1025],[8,1082],[8,1168]]
PREAMBLES=[[6,837,1179],[8,258,497]]
ESSAYS={"1":[[2,90,1350],[3,75,1345]],"2":[[4,87,1340],[5,85,328]],"3":[[5,334,1340],[6,85,1340]],"4":[[7,86,1340],[8,85,1340]],"5":[[9,260,1350]],"6":[[10,86,1340]],"7":[[11,80,1340]],"8":[[12,83,1340]],"9":[[13,86,1340],[14,80,1340]],"10":[[15,75,1340]]}
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
