#!/usr/bin/env python3
"""2016 Part I recut: exact question boundaries, preserve shared instructions.

Source: user's 25-page GovDoc Sinhala PDF, SHA-256 pinned for provenance.
Only overwrites past-papers/2016/I/q01.webp ... q50.webp.
Does NOT modify Part II, other years, or site layout.
"""
from pathlib import Path
import os, hashlib, urllib.request, json
import fitz
from PIL import Image

ROOT=Path(__file__).resolve().parents[1]
OUT=ROOT/"past-papers"/"2016"/"I"
SOURCE_URL="https://govdoc.lk/downloadFile/2194"
SOURCE_SHA="e8a763ce345828ce002eae6af87b4441270009ac4550dcf2fb5499b25b402e0d"
# (printed question number, exact source page, upper and lower pixel limits).
# Measured from the uploaded clean exam PDF at 1.75x source resolution.
LOC={
1:[(1,711,817),(2,817,899),(3,899,1135),(4,1135,1289),(5,1289,1364)],
2:[(6,110,198),(7,199,323),(8,325,411),(9,413,555),(10,556,689),
   (11,690,841),(12,840,953),(13,956,1080),(14,1081,1255),(15,1255,1365)],
3:[(16,115,229),(17,230,622),(18,622,817),(19,817,966),(20,967,1059),(21,1059,1245)],
4:[(22,115,334),(23,334,530),(24,530,674),(25,674,1041),(26,1041,1363)],
5:[(27,123,266),(28,266,478),(29,479,629),(30,629,879),(31,1194,1364)],
6:[(32,122,240),(33,240,389),(34,389,510),(35,511,632),(36,632,764),
   (37,762,907),(38,907,1030),(39,1029,1225),(40,1225,1365)],
7:[(41,411,465),(42,465,582),(43,582,689),(44,689,745),(45,745,805),
   (46,805,839),(47,839,904),(48,904,969),(49,969,1031),(50,1031,1102)]}

def read_pdf():
    local=os.environ.get("CHEMISTRY_2016_CLEAN_PDF")
    if local and Path(local).is_file():
        payload=Path(local).read_bytes()
    else:
        request=urllib.request.Request(SOURCE_URL,headers={"User-Agent":"Mozilla/5.0"})
        with urllib.request.urlopen(request,timeout=120) as response:
            payload=response.read()
    digest=hashlib.sha256(payload).hexdigest()
    if digest!=SOURCE_SHA:
        raise RuntimeError("Source PDF does not match uploaded 2016 PDF: "+digest)
    pdf=fitz.open(stream=payload,filetype="pdf")
    if len(pdf)!=25:raise RuntimeError("Expected 25-page original 2016 PDF")
    return pdf

def render_page(page):
    pix=page.get_pixmap(matrix=fitz.Matrix(1.75,1.75),
                        colorspace=fitz.csRGB,alpha=False)
    return Image.frombytes("RGB",(pix.width,pix.height),pix.samples)

def crop(img,y1,y2):
    assert 0<=y1<y2<=img.height,(y1,y2,img.size)
    return img.crop((64,y1,912,y2))

def join(parts):
    if len(parts)==1:return parts[0]
    w=max(image.width for image in parts)
    result=Image.new("RGB",(w,sum(image.height for image in parts)+14*(len(parts)-1)),"white")
    y=0
    for image in parts:
        result.paste(image,((w-image.width)//2,y))
        y+=image.height+14
    return result

def main():
    pdf=read_pdf()
    images={page:render_page(pdf[page-1]) for page in LOC}
    reference_31= crop(images[5],883,1192)
    reference_41= crop(images[7],120,412)
    entries=[]
    OUT.mkdir(parents=True,exist_ok=True)
    for page,questions in LOC.items():
        for num,top,bottom in questions:
            pieces=[]
            if 31<=num<=40:pieces.append(reference_31)
            if 41<=num<=50:pieces.append(reference_41)
            pieces.append(crop(images[page],top,bottom))
            out=OUT/("q%02d.webp"%num)
            join(pieces).save(out,format="WEBP",quality=94,method=6)
            entries.append((num,page,out))
    assert sorted(row[0] for row in entries)==list(range(1,51))
    # Keep the original 60-question database and its Part II entries.
    metadata=OUT.parent/"questions.json"
    if metadata.is_file():
        data=json.loads(metadata.read_text(encoding="utf-8"))
        assert len(data)==60
        for item in data:
            if item.get("part")=="I":
                q=int(item["number"])
                item["pdf_pages"]=[next(p for n,p,_ in entries if n==q)]
                item["source_pdf"]="2016 GovDoc Sinhala scanned exam (SHA-256 verified)"
                item["crop_status"]="manually_verified_question_interval"
        metadata.write_text(json.dumps(data,ensure_ascii=False,indent=2)+"\n",encoding="utf-8")
    print("SUCCESS: 50 corrected 2016 Part I images, no changes to Part II.")

if __name__=="__main__":main()
