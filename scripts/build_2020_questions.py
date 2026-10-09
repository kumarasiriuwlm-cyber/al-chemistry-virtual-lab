#!/usr/bin/env python3
"""Publish 2020 Chemistry paper question crops (50 MCQs, 10 Part II)."""
from pathlib import Path
import json, os, urllib.request
import fitz
from PIL import Image
YEAR=2020
ROOT=Path(__file__).resolve().parents[1]
OUT=ROOT/"past-papers"/str(YEAR)
SOURCE={"I":"2020-AL-CHEMISTRY-PART-I-MCQ-PAPER-NEW-SYLLABUS-SINHALA-MEDIUM-AlevelApi-PDF.pdf","II":"https://cdn.alevelapi.com/Prod/documents/2020/online-view/2020-AL-CHEMISTRY-PART-II-PAPER-NEW-SYLLABUS-SINHALA-MEDIUM-AlevelApi-PDF-1.pdf"}
LOC=[[1,657],[1,909],[1,972],[1,1084],[1,1168],[2,94],[2,278],[2,441],[2,525],[2,656],[2,954],[3,95],[3,297],[3,402],[3,630],[3,814],[3,1020],[3,1246],[4,94],[4,423],[4,638],[4,876],[4,1052],[5,102],[5,312],[5,441],[5,641],[5,832],[5,1197],[6,104],[6,729],[6,873],[6,1112],[7,101],[7,321],[7,523],[7,702],[7,844],[7,1018],[7,1150],[8,382],[8,450],[8,618],[8,703],[8,786],[8,850],[8,925],[8,991],[8,1098],[8,1204]]
ESSAYS={"1":[[2,70,1070],[3,65,1070],[4,75,573]],"2":[[4,573,1070],[5,80,876]],"3":[[5,876,1070],[6,70,1070]],"4":[[7,75,1070],[8,70,1070]],"5":[[9,360,1070]],"6":[[10,75,1070]],"7":[[11,75,1070]],"8":[[12,78,1070]],"9":[[13,80,1070]],"10":[[14,75,1070]]}
def pages(part):
    name=SOURCE[part]
    base="https://cdn.alevelapi.com/Prod/documents/"+str(YEAR)+"/chemistry/"
    link=name if name.startswith("https://") else base+name
    local=os.environ.get("CHEMISTRY_"+str(YEAR)+"_PDF_DIR")
    f=Path(local)/name if local and not name.startswith("https://") else None
    if f and f.is_file():pdf=fitz.open(f)
    else:
        req=urllib.request.Request(link,headers={"User-Agent":"Mozilla/5.0","Referer":"https://www.alevelapi.com/"})
        with urllib.request.urlopen(req,timeout=110) as response:raw=response.read()
        if not raw.startswith(b"%PDF"):raise ValueError("Source is not PDF: "+link)
        pdf=fitz.open(stream=raw,filetype="pdf")
    results={}
    with pdf:
        for n,page in enumerate(pdf,1):
            scale=(1.35 if YEAR==2020 and part=="II" else 1.75)
            pix=page.get_pixmap(matrix=fitz.Matrix(scale,scale),colorspace=fitz.csRGB,alpha=False)
            results[n]=Image.frombytes("RGB",(pix.width,pix.height),pix.samples)
    return results
def crop(img,start,end,part):
    width=img.width
    a,b=(55,744) if width<900 else (67,955)
    lo=max(50,start);hi=min(img.height-88,end)
    if hi<=lo:raise ValueError("Bad crop boundary: "+str((start,end,img.size)))
    return img.crop((a,lo,b,hi))
def combine(items):
    if len(items)==1:return items[0]
    w=max(x.width for x in items)
    result=Image.new("RGB",(w,sum(x.height for x in items)+17*(len(items)-1)),"white")
    y=0
    for img in items:
        result.paste(img,((w-img.width)//2,y));y+=img.height+17
    return result
def save(pic,part,num):
    path=OUT/part/("q%02d.webp"%num)
    path.parent.mkdir(parents=True,exist_ok=True)
    pic.save(path,format="WEBP",quality=92,method=6)
    return path.relative_to(ROOT).as_posix()
def main():
    a=pages("I")
    b=pages("II")
    assert len(LOC)==50 and len(ESSAYS)==10
    rows=[]
    for index,(page,start) in enumerate(LOC):
        num=index+1
        end=(LOC[index+1][1]-4 if index<49 and LOC[index+1][0]==page else 1365)
        if YEAR==2020 and num==30:end=416
        if YEAR==2020 and num==50:end=1302
        if YEAR==2021 and num==30:end=590
        body=crop(a[page],start-3,end,"I")
        if YEAR==2020 and 31<=num<=40:body=combine([crop(a[6],415,714,"I"),body])
        if YEAR==2020 and 41<=num<=50:body=combine([crop(a[8],104,351,"I"),body])
        if YEAR==2021 and 31<=num<=40:body=combine([crop(a[6],300,610,"I"),body])
        if YEAR==2021 and 41<=num<=50:body=combine([crop(a[8],65,400,"I"),body])
        picpath=save(body,"I",num)
        rows.append({"year":YEAR,"part":"I","number":num,"type":"mcq","image":picpath,"pdf_pages":[page]})
    for key,sections in ESSAYS.items():
        num=int(key)
        body=combine([crop(b[p],start,end,"II") for p,start,end in sections])
        picpath=save(body,"II",num)
        rows.append({"year":YEAR,"part":"II","number":num,
                     "type":"structured_essay" if num<=4 else "essay",
                     "image":picpath,"pdf_pages":[p for p,_,_ in sections]})
    (OUT/"questions.json").write_text(json.dumps(rows,ensure_ascii=False,indent=2)+"\n",encoding="utf-8")
    print("Generated",YEAR,len(rows),"questions")
if __name__=="__main__":main()
