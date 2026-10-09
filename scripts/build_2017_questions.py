#!/usr/bin/env python3
"""Build 2017 Sinhala Chemistry Part I & II individual-question WebP images."""
from pathlib import Path
import os,json,urllib.request
import fitz
from PIL import Image

ROOT=Path(__file__).resolve().parents[1]
OUT=ROOT/"past-papers"/"2017"
BASE="https://cdn.alevelapi.com/Prod/documents/2017/chemistry/"
PDF={"I":"2017-AL-CHEMISTRY-PART-I-AlevelApi.-com-PDF.pdf",
     "II":"2017-AL-CHEMISTRY-PART-II-AlevelApi.-com-PDF.pdf"}
# (1-based PDF page, crop beginning in 1.75-scale pixel coordinates).
# Checked against original 2017 Sinhala examination pages.
MCQ=[
(1,608),(1,690),(1,868),(1,1070),(1,1114),(1,1234),
(2,91),(2,241),(2,398),(2,493),(2,671),(2,802),(2,876),(2,1052),
(3,78),(3,323),(3,446),(3,543),(3,795),(3,1010),(3,1150),
(4,91),(4,239),(4,503),(4,844),(4,1166),
(5,80),(5,270),(5,826),(5,1095),
(6,404),(6,676),(6,862),(6,1014),(6,1134),(6,1240),
(7,90),(7,332),(7,517),(7,704),(7,1082),(7,1147),(7,1212),
(8,139),(8,214),(8,284),(8,335),(8,406),(8,456),(8,506)]
ESSAYS={
1:[(2,121,1342),(3,76,1342)],
2:[(4,85,1342),(5,76,902)],
3:[(5,900,1342),(6,76,1342),(7,78,382)],
4:[(7,381,1342),(8,76,1336)],
5:[(9,447,1341)],
6:[(10,88,1341)],
7:[(11,86,899)],
8:[(11,962,1341),(12,86,1341)],
9:[(13,82,929)],
10:[(13,930,1341),(14,80,1335)]}
def get_pdf(part):
    name=PDF[part]; local=os.environ.get("CHEMISTRY_2017_PDF_DIR")
    if local and (Path(local)/name).is_file():
        return fitz.open(Path(local)/name)
    req=urllib.request.Request(BASE+name,headers={
        "User-Agent":"Mozilla/5.0 (compatible; ChemistryLearningArchive/1.0)",
        "Referer":"https://www.alevelapi.com/"})
    with urllib.request.urlopen(req,timeout=110) as response:
        content=response.read()
    if not content.startswith(b"%PDF"):raise ValueError("Invalid PDF: "+name)
    return fitz.open(stream=content,filetype="pdf")
def raster(part):
    images=[]
    with get_pdf(part) as pdf:
        for page in pdf:
            pix=page.get_pixmap(matrix=fitz.Matrix(1.75,1.75),
                                colorspace=fitz.csRGB,alpha=False)
            images.append(Image.frombytes("RGB",(pix.width,pix.height),pix.samples))
    return images
def clip(im,y1,y2):
    return im.crop((63,max(65,y1),963,min(im.height-100,y2)))
def stack(pieces):
    if len(pieces)==1:return pieces[0]
    width=max(p.width for p in pieces)
    out=Image.new("RGB",(width,sum(p.height for p in pieces)+18*(len(pieces)-1)),"white")
    y=0
    for p in pieces:
        out.paste(p,((width-p.width)//2,y));y+=p.height+18
    return out
def save(im,path):
    path.parent.mkdir(parents=True,exist_ok=True)
    im.save(path,format="WEBP",quality=92,method=6)
def main():
    pics=raster("I")
    assert len(pics)==8 and len(MCQ)==50
    records=[]
    for i,(p,start) in enumerate(MCQ):
        n=i+1
        end=MCQ[i+1][1]-3 if i+1<50 and MCQ[i+1][0]==p else 1350
        if n==40:end=836
        if n==43:end=1290
        if n==50:end=559
        crop=clip(pics[p-1],start-3,end)
        if 31<=n<=40:crop=stack([clip(pics[5],92,400),crop])
        if 41<=n<=50:crop=stack([clip(pics[6],836,1058),crop])
        path=OUT/"I"/("q%02d.webp"%n)
        save(crop,path)
        records.append({"year":2017,"part":"I","number":n,"type":"mcq",
                        "image":path.relative_to(ROOT).as_posix(),
                        "pdf_pages":[p] if n<=40 else ([7] if p==7 else [7,8])})
    pics=raster("II")
    assert len(pics)==15
    for n,spans in ESSAYS.items():
        crop=stack([clip(pics[p-1],start,end) for p,start,end in spans])
        path=OUT/"II"/("q%02d.webp"%n)
        save(crop,path)
        records.append({"year":2017,"part":"II","number":n,
                        "type":"structured_essay" if n<=4 else "essay",
                        "image":path.relative_to(ROOT).as_posix(),
                        "pdf_pages":[p for p,_,_ in spans]})
    OUT.mkdir(parents=True,exist_ok=True)
    (OUT/"questions.json").write_text(json.dumps(records,ensure_ascii=False,indent=2)+"\n",encoding="utf-8")
    print("Created 60 original 2017 A/L Chemistry question images")
if __name__=="__main__": main()
