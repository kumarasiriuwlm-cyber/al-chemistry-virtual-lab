#!/usr/bin/env python3
"""Crop 2022(2023) Sinhala Chemistry from the user's SHA-pinned 14-page scan.
MCQs 1-50 and Essay Questions 5-10 occur in this PDF. Structured Essay
Questions 1-4 are absent; keep their previously published images unchanged.
"""
from pathlib import Path
import hashlib, json, os, urllib.request
import fitz
from PIL import Image
ROOT=Path(__file__).resolve().parents[1]
OUT=ROOT/"past-papers"/"2022"
SHA="c4793b5860387b82a4432e293b026735fc72bda66cc27d8c0498d71996d41544"
SOURCES=["https://govdoc.lk/downloadFile/6878",
         "https://govdoc.lk/download/63e5fc8861305",
         "https://cdn.govdoc.lk/download/6878"]
MCQ={
1:[(1,650,850),(2,850,1065),(3,1065,1220),(4,1220,1367)],
2:[(5,110,398),(6,398,545),(7,545,721),(8,721,816),(9,816,1002),(10,1002,1380)],
3:[(11,60,342),(12,342,615),(13,615,772),(14,772,1057),(15,1057,1390)],
4:[(16,110,285),(17,285,514),(18,514,714),(19,714,866),(20,866,969),(21,969,1156),(22,1156,1350)],
5:[(23,112,257),(24,257,628),(25,628,784),(26,784,1011),(27,1011,1168),(28,1168,1374)],
6:[(29,107,527),(30,527,744),(31,1058,1183),(32,1183,1369)],
7:[(33,104,325),(34,325,536),(35,536,673),(36,673,817),(37,817,937),(38,937,1121),(39,1121,1280)],
8:[(40,104,353),(41,615,702),(42,702,762),(43,762,834),(44,834,905),(45,905,992),(46,992,1051),(47,1051,1129),(48,1129,1204),(49,1204,1281),(50,1281,1357)]
}
ESSAYS={
5:[(9,532,1370),(10,105,520)],
6:[(10,520,1326)],
7:[(11,105,1360)],
8:[(12,148,1360)],
9:[(13,162,1370)],
10:[(14,112,1364)]
}
def source():
    local=os.environ.get("CHEMISTRY_2022_UPLOADED_PDF")
    if local:raw=Path(local).read_bytes()
    else:
        errors=[];raw=None
        for url in SOURCES:
            try:
                req=urllib.request.Request(url,headers={
                    "User-Agent":"Mozilla/5.0","Referer":"https://govdoc.lk/",
                    "Accept":"application/pdf,*/*"})
                with urllib.request.urlopen(req,timeout=120) as response:
                    candidate=response.read()
                digest=hashlib.sha256(candidate).hexdigest()
                if digest==SHA:
                    raw=candidate
                    break
                errors.append(url+": checksum "+digest)
            except Exception as e:
                errors.append(url+": "+str(e))
        if raw is None:
            raise RuntimeError("Cannot get exact user-provided Sinhala 2022 paper: "+repr(errors))
    if hashlib.sha256(raw).hexdigest()!=SHA:
        raise ValueError("2022 paper SHA256 mismatch; do not substitute another PDF")
    doc=fitz.open(stream=raw,filetype="pdf")
    if len(doc)!=14:raise ValueError("Expected original 14-page PDF")
    return doc
def render(page):
    pix=page.get_pixmap(matrix=fitz.Matrix(1.75,1.75),colorspace=fitz.csRGB,alpha=False)
    im=Image.frombytes("RGB",(pix.width,pix.height),pix.samples)
    if im.size!=(1042,1474):raise ValueError("Unexpected source page geometry "+str(im.size))
    return im
def crop(im,top,bottom):
    if not 45<=top<bottom<=1400:raise ValueError((top,bottom))
    return im.crop((81,top,968,bottom))
def join(parts):
    w=max(im.width for im in parts)
    out=Image.new("RGB",(w,sum(im.height for im in parts)+18*(len(parts)-1)+16),"white")
    y=8
    for im in parts:
        out.paste(im,((w-im.width)//2,y))
        y+=im.height+18
    return out
def save(im,part,num):
    p=OUT/part/f"q{num:02d}.webp"
    p.parent.mkdir(parents=True,exist_ok=True)
    im.save(p,"WEBP",quality=94,method=6)
    if p.stat().st_size<1700:raise ValueError("Suspiciously small crop "+str(p))
    return p.relative_to(ROOT).as_posix()
def main():
    pdf=source()
    pages={n:render(pdf[n-1]) for n in {*MCQ,*(p for spans in ESSAYS.values() for p,_,_ in spans)}}
    instruction31=crop(pages[6],751,1056)
    instruction41=crop(pages[8],350,576)
    columns41=crop(pages[8],577,617)
    records=[];seen=set()
    for page,spans in MCQ.items():
        for num,a,b in spans:
            pieces=[crop(pages[page],a,b)]
            if 31<=num<=40:pieces.insert(0,instruction31)
            if 41<=num<=50:pieces=[instruction41,columns41]+pieces
            image=save(join(pieces),"I",num)
            records.append({"year":2022,"part":"I","number":num,"type":"mcq",
                "language":"si","image":image,"pdf_pages":[page],
                "source_type":"uploaded_2022_sinhala_pdf",
                "crop_status":"manually_rechecked_full_question"})
            seen.add(num)
    if seen!=set(range(1,51)):raise ValueError("Missing or duplicated 2022 MCQs")
    for num in range(1,5):
        p=OUT/"II"/f"q{num:02d}.webp"
        if not p.is_file():raise FileNotFoundError("Expected existing structured essay: "+str(p))
        records.append({"year":2022,"part":"II","number":num,"type":"structured_essay",
            "image":p.relative_to(ROOT).as_posix(),"pdf_pages":[],
            "source_type":"preserved_separate_sinhala_source","language":"si",
            "crop_status":"preserved_unchanged_not_in_uploaded_pdf"})
    for num,spans in ESSAYS.items():
        image=save(join([crop(pages[p],a,b) for p,a,b in spans]),"II",num)
        records.append({"year":2022,"part":"II","number":num,"type":"essay",
            "language":"si","image":image,
            "pdf_pages":[p for p,_,_ in spans],
            "source_type":"uploaded_2022_sinhala_pdf",
            "crop_status":"verified_all_continuation_pages"})
    assert len(records)==60
    assert sum(x["source_type"]=="uploaded_2022_sinhala_pdf" for x in records)==56
    for item in records:
        with Image.open(ROOT/item["image"]) as im:
            if im.width<800 or im.height<75:
                raise ValueError("Suspect image dimension: "+item["image"])
    OUT.mkdir(parents=True,exist_ok=True)
    (OUT/"questions.json").write_text(json.dumps(records,ensure_ascii=False,indent=2)+"\n",encoding="utf-8")
    print("PASS 2022: 50 Sinhala MCQs, 6 Sinhala essays; 4 previously sourced structured images preserved")
if __name__=="__main__":main()
