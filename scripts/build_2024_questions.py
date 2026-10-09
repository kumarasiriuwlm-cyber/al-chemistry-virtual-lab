#!/usr/bin/env python3
"""Produce original individual 2024 A/L Chemistry questions for the existing website."""
from pathlib import Path
import os, json, urllib.request
import fitz
from PIL import Image
YEAR=2024
ROOT=Path(__file__).resolve().parents[1]
OUT=ROOT/"past-papers"/str(YEAR)
BASE="https://cdn.alevelapi.com/Prod/documents/"+str(YEAR)+"/chemistry/"
SOURCE={"I":str(YEAR)+"-AL-CHEMISTRY-PART-I-MCQ-PAPER-SINHALA-MEDIUM-AlevelApi-PDF.pdf",
        "II":str(YEAR)+"-AL-CHEMISTRY-PART-II-PAPER-SINHALA-MEDIUM-AlevelApi-PDF.pdf"}
MCQ=[[1,637],[1,702],[1,931],[1,998],[1,1086],[1,1285],[2,93],[2,247],[2,469],[2,964],[2,1110],[2,1245],[3,106],[3,595],[3,837],[3,1077],[3,1200],[4,96],[4,316],[4,623],[4,974],[5,104],[5,301],[5,683],[5,1067],[6,93],[6,318],[6,536],[6,924],[6,1090],[7,461],[7,661],[7,829],[7,1144],[8,103],[8,533],[8,668],[8,799],[8,993],[8,1144],[9,375],[9,473],[9,577],[9,675],[9,754],[9,831],[9,947],[9,1024],[9,1112],[9,1190]]
PREAMBLES=[[7,89,443],[9,105,335]]
ESSAYS={"1":[[2,80,1340],[3,78,1340]],"2":[[4,85,1350],[5,75,630]],"3":[[5,650,1340],[6,75,1340],[7,77,355]],"4":[[7,365,1340],[8,75,1340]],"5":[[9,256,1340]],"6":[[10,75,1340]],"7":[[11,75,1340]],"8":[[12,72,1340]],"9":[[13,76,1340],[14,80,685]],"10":[[14,685,1340],[15,75,650]]}
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
