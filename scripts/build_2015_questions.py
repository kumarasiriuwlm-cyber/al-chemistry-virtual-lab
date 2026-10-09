#!/usr/bin/env python3
"""Generate 60 individual 2015 Sinhala A/L Chemistry question crops from original PDFs."""
from pathlib import Path
import json, os, urllib.request
import fitz
from PIL import Image

ROOT=Path(__file__).resolve().parents[1]
OUT=ROOT/"past-papers"/"2015"
LOCAL=os.environ.get("CHEMISTRY_2015_PDF_DIR")
BASE="https://cdn.alevelapi.com/Prod/documents/2015/chemistry/"
PDF={
"I":"2015-AL-CHEMISTRY-PART-I-MCQ-PAPER-SINHALA-MEDIUM-AlevelApi-PDF.pdf",
"II":"2015-AL-CHEMISTRY-PART-II-PAPER-SINHALA-MEDIUM-AlevelApi-PDF.pdf",
}
# Source renders: 1042 x 1474 pixels at 1.75x PDF scale.
# Entries are (1-based page, top pixel, height pixel).
MCQ=[
(1,611,70),(1,684,95),(1,784,130),(1,916,137),(1,1058,55),
(1,1118,117),(1,1240,135),(2,67,161),(2,233,134),(2,375,246),
(2,625,188),(2,818,101),(2,924,120),(2,1049,93),(2,1147,122),
(2,1275,105),(3,105,194),(3,305,243),(3,555,203),(3,762,55),
(3,822,144),(3,971,157),(3,1133,109),(3,1247,130),(4,95,321),
(4,427,555),(4,993,158),(4,1156,218),(5,75,410),(5,498,686),
(5,1195,179),(6,71,168),(6,244,115),(6,364,114),(6,484,115),
(6,602,137),(6,745,141),(6,891,114),(6,1009,169),(6,1175,136),
(7,345,55),(7,405,86),(7,496,55),(7,555,50),(7,607,50),
(7,660,69),(7,733,50),(7,785,68),(7,856,82),(7,944,65),
]
# Part II questions with multiple pages have their sections stitched into ONE image.
# Boundaries intentionally exclude the following question, headers, and formula sheet.
ESSAY={
1:[(2,135,1370),(3,70,1350)],
2:[(4,80,1360),(5,80,913)],
3:[(5,913,1350),(6,70,1340)],
4:[(7,90,1360),(8,65,990)],
5:[(9,400,1102)],
6:[(9,1102,1360),(10,65,695)],
7:[(10,695,1350)],
8:[(11,140,1335)],
9:[(12,90,980)],
10:[(13,90,1340)],
}
def get_doc(part):
    name=PDF[part]
    if LOCAL and (Path(LOCAL)/name).is_file():
        return fitz.open(Path(LOCAL)/name)
    req=urllib.request.Request(BASE+name,headers={
        "User-Agent":"Mozilla/5.0 (compatible; educational past-paper index)",
        "Referer":"https://www.alevelapi.com/"
    })
    with urllib.request.urlopen(req,timeout=90) as response:
        raw=response.read()
    if not raw.startswith(b"%PDF"):
        raise RuntimeError("Download is not a PDF: "+name)
    return fitz.open(stream=raw,filetype="pdf")

def raster(doc):
    pictures=[]
    for page in doc:
        pixels=page.get_pixmap(matrix=fitz.Matrix(1.75,1.75),
                              colorspace=fitz.csRGB,alpha=False)
        pictures.append(Image.frombytes("RGB",
                        (pixels.width,pixels.height),pixels.samples))
    return pictures

def crop(pictures,page,y1,y2):
    im=pictures[page-1]
    return im.crop((65,max(60,y1),960,min(im.height-95,y2)))

def save(im,path):
    path.parent.mkdir(parents=True,exist_ok=True)
    im.save(path,format="WEBP",quality=91,method=6)

def main():
    OUT.mkdir(parents=True,exist_ok=True)
    rows=[]
    pics=raster(get_doc("I"))
    if len(pics)!=8: raise ValueError("Part I pages: "+str(len(pics)))
    for n,(p,y,height) in enumerate(MCQ,1):
        img=crop(pics,p,y-2,y+height+2)
        save(img,OUT/"I"/f"q{n:02d}.webp")
        rows.append({"year":2015,"part":"I","number":n,"type":"mcq",
                     "image":f"past-papers/2015/I/q{n:02d}.webp",
                     "pdf_pages":[p]})
    pics=raster(get_doc("II"))
    if len(pics)!=14: raise ValueError("Part II pages: "+str(len(pics)))
    for n,sections in ESSAY.items():
        parts=[crop(pics,p,t,b) for p,t,b in sections]
        width=max(p.width for p in parts)
        height=sum(p.height for p in parts)+14*(len(parts)-1)
        image=Image.new("RGB",(width,height),"white")
        offset=0
        for part in parts:
            image.paste(part,(0,offset))
            offset+=part.height+14
        save(image,OUT/"II"/f"q{n:02d}.webp")
        rows.append({"year":2015,"part":"II","number":n,
                     "type":"structured_essay" if n<=4 else "essay",
                     "image":f"past-papers/2015/II/q{n:02d}.webp",
                     "pdf_pages":[s[0] for s in sections]})
    (OUT/"questions.json").write_text(
        json.dumps(rows,ensure_ascii=False,indent=2)+"\n",encoding="utf-8")
    print("Exported",len(rows),"individual original-question images")

if __name__=="__main__": main()
