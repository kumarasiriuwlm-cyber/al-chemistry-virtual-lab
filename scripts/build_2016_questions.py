#!/usr/bin/env python3
"""Build individually cropped 2016 Sinhala A/L Chemistry images from source PDFs."""
from pathlib import Path
import json, os, urllib.request
import fitz
from PIL import Image

ROOT=Path(__file__).resolve().parents[1]
OUT=ROOT/"past-papers"/"2016"
BASE="https://cdn.alevelapi.com/Prod/documents/2016/chemistry/"
NAMES={
"I":"2016-AL-CHEMISTRY-PART-I-MCQ-PAPER-SINHALA-MEDIUM-AlevelApi-PDF.pdf",
"II":"2016-AL-CHEMISTRY-PART-II-PAPER-SINHALA-MEDIUM-AlevelApi-PDF.pdf"
}
# Verified 1042 x 1474 PDF-raster coordinates (page, top-y).
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
(7,792),(7,834),(7,890),(7,960),(7,1024)
]
# A single essay question may span two distinct pages.
PART_II={
1:[(2,134,1350),(3,70,747)],
2:[(3,747,1340),(4,75,1348)],
3:[(5,70,1340),(6,70,1000)],
4:[(7,70,1340),(8,78,990)],
5:[(9,422,1350)],
6:[(10,70,1049)],
7:[(10,1049,1340),(11,70,918)],
8:[(11,968,1340),(12,70,1345)],
9:[(13,70,1350)],
10:[(14,70,1350)]
}
def get_pdf(part):
    name=NAMES[part]
    local=os.environ.get("CHEMISTRY_2016_PDF_DIR")
    if local and (Path(local)/name).is_file():
        return fitz.open(Path(local)/name)
    req=urllib.request.Request(BASE+name,headers={
        "User-Agent":"Mozilla/5.0 (educational Chemistry paper archive)",
        "Referer":"https://www.alevelapi.com/"})
    with urllib.request.urlopen(req,timeout=100) as response:
        data=response.read()
    if not data.startswith(b"%PDF"):
        raise ValueError("Source not a PDF: "+name)
    return fitz.open(stream=data,filetype="pdf")
def raster(part):
    result=[]
    for page in get_pdf(part):
        pix=page.get_pixmap(matrix=fitz.Matrix(1.75,1.75),
                            colorspace=fitz.csRGB,alpha=False)
        result.append(Image.frombytes("RGB",(pix.width,pix.height),pix.samples))
    return result
def clip(im,y1,y2):
    return im.crop((65,max(55,y1),961,min(im.height-80,y2)))
def join(parts):
    if len(parts)==1:return parts[0]
    w=max(p.width for p in parts)
    h=sum(p.height for p in parts)+16*(len(parts)-1)
    result=Image.new("RGB",(w,h),"white")
    y=0
    for part in parts:
        result.paste(part,((w-part.width)//2,y));y+=part.height+16
    return result
def save(im,path):
    path.parent.mkdir(parents=True,exist_ok=True)
    im.save(path,"WEBP",quality=93,method=6)
def main():
    pictures=raster("I")
    assert len(pictures)==10 and len(MCQ)==50
    rows=[]
    for n,(p,y) in enumerate(MCQ,1):
        if n<50 and MCQ[n][0]==p:end=MCQ[n][1]-2
        else:end=1350 if n<=40 else 1083
        if n==40:end=1340
        cropped=clip(pictures[p-1],y-3,end)
        if n>=41:
            # MCQs 41–50 depend on the common true/false interpretation table.
            cropped=join([clip(pictures[6],89,326),cropped])
        path=OUT/"I"/("q%02d.webp"%n)
        save(cropped,path)
        rows.append({"year":2016,"part":"I","number":n,"type":"mcq",
                     "image":path.relative_to(ROOT).as_posix(),"pdf_pages":[p]})
    pictures=raster("II")
    assert len(pictures)==15
    for n,sections in PART_II.items():
        cropped=join([clip(pictures[p-1],top,end) for p,top,end in sections])
        path=OUT/"II"/("q%02d.webp"%n)
        save(cropped,path)
        rows.append({"year":2016,"part":"II","number":n,
                     "type":"structured_essay" if n<=4 else "essay",
                     "image":path.relative_to(ROOT).as_posix(),
                     "pdf_pages":[p for p,_,_ in sections]})
    (OUT/"questions.json").write_text(json.dumps(rows,ensure_ascii=False,indent=2)+"\n",encoding="utf-8")
    print("Built 2016: 50 MCQ, 4 structured essay, 6 essay crops")
if __name__=="__main__":main()
