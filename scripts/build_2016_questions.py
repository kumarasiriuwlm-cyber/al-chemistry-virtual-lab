#!/usr/bin/env python3
"""Replace 2016 cropped-question images from the user-supplied GovDoc/LOL.lk scan.
The PDF SHA-256 is pinned to the PDF verified locally on 2026-10-09.
Existing image paths remain unchanged, preserving all site links.
"""
from pathlib import Path
import hashlib, json, os, urllib.request
import fitz
from PIL import Image
ROOT=Path(__file__).resolve().parents[1]
OUT=ROOT/"past-papers"/"2016"
SOURCE_URL="https://govdoc.lk/downloadFile/2194"
EXPECTED_SHA256="e8a763ce345828ce002eae6af87b4441270009ac4550dcf2fb5499b25b402e0d"
MCQ=[
(1,692),(1,794),(1,876),(1,1102),(1,1248),
(2,82),(2,168),(2,292),(2,384),(2,534),
(2,660),(2,818),(2,936),(2,1064),(2,1224),
(3,78),(3,196),(3,594),(3,794),(3,968),(3,1040),
(4,62),(4,288),(4,482),(4,630),(4,1018),
(5,74),(5,224),(5,442),(5,598),(5,1190),
(6,82),(6,204),(6,356),(6,480),(6,602),
(6,724),(6,878),(6,1006),(6,1196),
(7,382),(7,452),(7,570),(7,670),(7,732),
(7,792),(7,834),(7,890),(7,960),(7,1024)]
ESSAYS={
1:[(2,134,1350),(3,70,747)],
2:[(3,747,1340),(4,75,1348)],
3:[(5,70,1340),(6,70,1000)],
4:[(7,70,1340),(8,78,990)],
5:[(9,422,1350)],
6:[(10,70,1049)],
7:[(10,1049,1340),(11,70,918)],
8:[(11,968,1340),(12,70,1345)],
9:[(13,70,1350)],
10:[(14,70,1350)]}
def get_pdf():
    local=os.environ.get("CHEMISTRY_2016_CLEAN_PDF")
    if local:
        data=Path(local).read_bytes()
    else:
        request=urllib.request.Request(SOURCE_URL,headers={"User-Agent":"Mozilla/5.0","Referer":"https://govdoc.lk/"})
        with urllib.request.urlopen(request,timeout=120) as response:
            data=response.read()
    digest=hashlib.sha256(data).hexdigest()
    if digest!=EXPECTED_SHA256:
        raise ValueError("Source PDF checksum mismatch; refusing to overwrite 2016 questions. Expected "+EXPECTED_SHA256+" but received "+digest)
    doc=fitz.open(stream=data,filetype="pdf")
    if len(doc)!=25: raise ValueError("Wrong 2016 PDF page count: "+str(len(doc)))
    return doc
def raster(pages):
    imgs=[]
    for page in pages:
        pix=page.get_pixmap(matrix=fitz.Matrix(1.75,1.75),colorspace=fitz.csRGB,alpha=False)
        imgs.append(Image.frombytes("RGB",(pix.width,pix.height),pix.samples))
    return imgs
def crop(im,a,b):
    lo=max(55,a);hi=min(im.height-80,b)
    if hi<=lo:raise ValueError("Invalid crop "+str((a,b)))
    return im.crop((65,lo,961,hi))
def join(images):
    if len(images)==1:return images[0]
    width=max(x.width for x in images)
    canvas=Image.new("RGB",(width,sum(x.height for x in images)+16*(len(images)-1)),"white")
    y=0
    for im in images:
        canvas.paste(im,(0,y));y+=im.height+16
    return canvas
def save(im,part,n):
    dst=OUT/part/f"q{n:02d}.webp"
    dst.parent.mkdir(parents=True,exist_ok=True)
    im.save(dst,format="WEBP",quality=93,method=6)
    return dst.relative_to(ROOT).as_posix()
def main():
    pdf=get_pdf()
    first=raster(pdf[:8])
    second=raster(pdf[8:23])
    assert len(first)==8 and len(second)==15
    rows=[]
    for i,(page,y) in enumerate(MCQ):
        num=i+1
        end=MCQ[i+1][1]-2 if i+1<len(MCQ) and MCQ[i+1][0]==page else (1350 if num<=40 else 1083)
        if num==40:end=1340
        pic=crop(first[page-1],y-3,end)
        if num>=41:pic=join([crop(first[6],89,326),pic])
        path=save(pic,"I",num)
        rows.append({"year":2016,"part":"I","number":num,"type":"mcq","image":path,"pdf_pages":[page],
                     "source":"GovDoc 2016 combined paper","source_sha256":EXPECTED_SHA256})
    for num,parts in ESSAYS.items():
        pic=join([crop(second[p-1],a,b) for p,a,b in parts])
        path=save(pic,"II",num)
        rows.append({"year":2016,"part":"II","number":num,"type":"structured_essay" if num<=4 else "essay",
                     "image":path,"pdf_pages":[8+p for p,_,_ in parts],
                     "source":"GovDoc 2016 combined paper","source_sha256":EXPECTED_SHA256})
    (OUT/"questions.json").write_text(json.dumps(rows,ensure_ascii=False,indent=2)+"\n",encoding="utf-8")
    print("Rebuilt 2016 from alternative original:",len(rows),"question images")
if __name__=="__main__":main()
