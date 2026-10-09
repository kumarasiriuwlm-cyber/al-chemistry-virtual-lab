#!/usr/bin/env python3
"""Publish exactly 50 MCQs and 10 complete Part II questions, 2018 Sinhala Chemistry."""
from pathlib import Path
import os,json,urllib.request
import fitz
from PIL import Image

ROOT=Path(__file__).resolve().parents[1]
OUT=ROOT/"past-papers"/"2018"
BASE="https://cdn.alevelapi.com/Prod/documents/2018/chemistry/"
PAPERS={
"I":"2018-AL-CHEMISTRY-PART-I-PAPER-AlevelApi.-com-PDF.pdf",
"II":"2018-AL-CHEMISTRY-PART-II-AlevelApi.-com-PDF.pdf"
}
# (number, one-based page, start-y); measured in 1042x1474 source rasters.
MCQ=[
(1,1,675),(2,1,739),(3,1,805),(4,1,978),(5,1,1162),(6,1,1267),
(7,2,68),(8,2,407),(9,2,643),(10,2,683),(11,2,951),(12,2,1110),
(13,3,78),(14,3,257),(15,3,437),(16,3,582),(17,3,761),(18,3,902),(19,3,1046),(20,3,1195),
(21,4,73),(22,4,476),(23,4,688),(24,4,931),
(25,5,130),(26,5,934),(27,5,1023),
(28,6,106),(29,6,417),(30,6,664),(31,6,1197),
(32,7,68),(33,7,266),(34,7,422),(35,7,556),(36,7,715),(37,7,876),(38,7,1045),(39,7,1217),
(40,8,82),(41,8,528),(42,8,594),(43,8,694),(44,8,769),(45,8,846),(46,8,919),
(47,8,999),(48,8,1077),(49,8,1139),(50,8,1216)
]
# Each item is one full question. Continuation sections are stitched into one image.
PART_II={
1:[(2,95,1370),(3,70,780)],
2:[(3,781,1370),(4,70,1370),(5,70,780)],
3:[(5,781,1370),(6,70,1370),(7,70,496)],
4:[(7,497,1370),(8,70,1370)],
5:[(9,410,1370)],
6:[(10,211,1370),(11,70,325)],
7:[(11,326,1370)],
8:[(12,70,1370),(13,70,760)],
9:[(13,760,1370),(14,70,1370)],
10:[(15,70,1370)]
}
def open_pdf(part):
    name=PAPERS[part]
    local=os.environ.get("CHEMISTRY_2018_PDF_DIR")
    if local and (Path(local)/name).is_file():
        return fitz.open(Path(local)/name)
    request=urllib.request.Request(BASE+name,headers={
        "User-Agent":"Mozilla/5.0 (Chemistry A-level educational archive)",
        "Referer":"https://www.alevelapi.com/"
    })
    with urllib.request.urlopen(request,timeout=110) as result:
        raw=result.read()
    if not raw.startswith(b"%PDF"):
        raise ValueError("PDF download failed: "+name)
    return fitz.open(stream=raw,filetype="pdf")
def rasterize(part):
    results=[]
    with open_pdf(part) as doc:
        for page in doc:
            pix=page.get_pixmap(matrix=fitz.Matrix(1.75,1.75),
                                colorspace=fitz.csRGB,alpha=False)
            results.append(Image.frombytes("RGB",(pix.width,pix.height),pix.samples))
    return results
def clip(im,y1,y2):
    return im.crop((63,max(50,y1),959,min(im.height-90,y2)))
def join(parts):
    if len(parts)==1:return parts[0]
    width=max(part.width for part in parts)
    canvas=Image.new("RGB",(width,sum(p.height for p in parts)+18*(len(parts)-1)),"white")
    y=0
    for part in parts:
        canvas.paste(part,((width-part.width)//2,y))
        y+=part.height+18
    return canvas
def save(image,path):
    path.parent.mkdir(parents=True,exist_ok=True)
    image.save(path,format="WEBP",quality=92,method=6)
def main():
    part_i=rasterize("I")
    assert len(part_i)==8 and len(MCQ)==50
    records=[]
    pre31=clip(part_i[5],875,1190)
    pre41=clip(part_i[7],220,518)
    for i,(num,page,start) in enumerate(MCQ):
        end=MCQ[i+1][2]-4 if i+1<len(MCQ) and MCQ[i+1][1]==page else 1370
        if num==30:end=873 # exclude MCQ 31–40 common instructions
        if num==40:end=217 # exclude MCQ 41–50 common instructions
        body=clip(part_i[page-1],start-2,end)
        if 31<=num<=39:body=join([pre31,body])
        if 41<=num<=50:body=join([pre41,body])
        path=OUT/"I"/f"q{num:02d}.webp"
        save(body,path)
        records.append({"year":2018,"part":"I","number":num,"type":"mcq",
                        "image":path.relative_to(ROOT).as_posix(),"pdf_pages":[page]})
    part_ii=rasterize("II")
    assert len(part_ii)>=15
    for num,sections in PART_II.items():
        image=join([clip(part_ii[p-1],top,bottom) for p,top,bottom in sections])
        path=OUT/"II"/f"q{num:02d}.webp"
        save(image,path)
        records.append({"year":2018,"part":"II","number":num,
                        "type":"structured_essay" if num<=4 else "essay",
                        "image":path.relative_to(ROOT).as_posix(),
                        "pdf_pages":[p for p,_,_ in sections]})
    OUT.mkdir(parents=True,exist_ok=True)
    (OUT/"questions.json").write_text(json.dumps(records,ensure_ascii=False,indent=2)+"\n",encoding="utf-8")
    print("Created 2018 question images: 50 MCQs, 4 structured essays and 6 essays")
if __name__=="__main__":
    main()
