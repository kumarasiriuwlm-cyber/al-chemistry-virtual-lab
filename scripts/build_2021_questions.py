#!/usr/bin/env python3
"""Publish 2021 Chemistry paper question crops (50 MCQs, 10 Part II)."""
from pathlib import Path
import json, os, urllib.request
import fitz
from PIL import Image
YEAR=2021
ROOT=Path(__file__).resolve().parents[1]
OUT=ROOT/"past-papers"/str(YEAR)
SOURCE={"I":"2021-AL-CHEMISTRY-PART-I-MCQ-PAPER-SINHALA-MEDIUM-AlevelApi-PDF.pdf","II":"2021-AL-CHEMISTRY-PART-II-PAPER-SINHALA-MEDIUM-AlevelApi-PDF3.pdf"}
LOC=[[1,654],[1,843],[1,1005],[1,1173],[2,122],[2,349],[2,536],[2,642],[2,857],[2,1208],[3,117],[3,420],[3,686],[3,957],[3,1172],[4,119],[4,472],[4,673],[4,837],[4,952],[4,1140],[5,119],[5,313],[5,410],[5,568],[5,707],[5,920],[5,1054],[5,1186],[6,120],[6,666],[6,898],[6,1032],[6,1153],[7,114],[7,301],[7,510],[7,683],[7,876],[7,1172],[8,110],[8,477],[8,560],[8,637],[8,698],[8,775],[8,854],[8,932],[8,1012],[8,1088]]
ESSAYS={"1":[[2,110,1372],[3,70,1370]],"2":[[4,77,1370],[5,70,580]],"3":[[5,580,1370],[6,70,1370],[7,70,496]],"4":[[7,496,1370],[8,70,1370]],"5":[[9,440,1370],[10,70,210]],"6":[[10,210,1370]],"7":[[11,85,1370]],"8":[[12,150,1370]],"9":[[13,85,1370],[14,70,540]],"10":[[14,540,1370],[15,70,1370]]}
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
