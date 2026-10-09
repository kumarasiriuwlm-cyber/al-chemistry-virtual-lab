#!/usr/bin/env python3
"""Carefully cropped 2020 Sinhala A/L Chemistry questions, using the user's 24-page PDF."""
from pathlib import Path
import os,json,hashlib,urllib.request
import fitz
from PIL import Image

YEAR=2020
ROOT=Path(__file__).resolve().parents[1]
OUT=ROOT/"past-papers"/"2020"
SHA="ba12be17cd16f4d6b4396619ac01e1695a808b7c4e44398231b5e56ed9b0f2e6"
URLS=["https://govdoc.lk/downloadFile/2171",
      "https://govdoc.lk/download/61cd8a68e54a7",
      "https://cdn.govdoc.lk/download/2171",
      "https://cdn.govdoc.lk/download/61cd8a68e54a7"]
MCQ={
1:[(1,670,924),(2,924,995),(3,995,1104),(4,1104,1187),(5,1187,1351)],
2:[(6,120,300),(7,300,461),(8,461,552),(9,552,682),(10,682,924),(11,924,1360)],
3:[(12,117,309),(13,309,430),(14,430,659),(15,659,844),(16,844,1048),(17,1048,1272),(18,1272,1359)],
4:[(19,115,450),(20,450,667),(21,667,904),(22,904,1084),(23,1084,1361)],
5:[(24,118,334),(25,334,463),(26,463,653),(27,653,854),(28,854,1219),(29,1219,1361)],
6:[(30,125,435),(31,758,904),(32,904,1143),(33,1143,1361)],
7:[(34,115,339),(35,339,544),(36,544,724),(37,724,867),(38,867,1040),(39,1040,1182),(40,1182,1361)],
8:[(41,392,466),(42,466,634),(43,634,719),(44,719,804),(45,804,868),(46,868,944),(47,944,1008),(48,1008,1119),(49,1119,1225),(50,1225,1341)]}
STRUCT={
1:[(11,125,1382),(12,126,1382),(13,126,745)],
2:[(13,745,1382),(14,125,1127)],
3:[(14,1127,1382),(15,125,1382)],
4:[(16,125,1382),(17,125,1270)]}
ESSAY={5:[(18,445,1382)],6:[(19,112,1382)],7:[(20,110,1382)],
       8:[(21,128,1382)],9:[(22,110,1382)],10:[(23,110,1382)]}
def get_pdf():
    local=os.environ.get("CHEMISTRY_2020_UPLOADED_PDF")
    if local:
        raw=Path(local).read_bytes()
        if hashlib.sha256(raw).hexdigest()!=SHA: raise ValueError("Local 2020 source checksum mismatch")
    else:
        raw=None; errors=[]
        for url in URLS:
            try:
                req=urllib.request.Request(url,headers={"User-Agent":"Mozilla/5.0","Referer":"https://govdoc.lk/","Accept":"application/pdf,*/*"})
                with urllib.request.urlopen(req,timeout=110) as response: candidate=response.read()
                digest=hashlib.sha256(candidate).hexdigest()
                if digest==SHA:
                    raw=candidate;break
                errors.append(url+": incorrect checksum "+digest)
            except Exception as e:errors.append(url+": "+str(e))
        if raw is None:raise RuntimeError("Cannot download the exact user-uploaded 2020 Sinhala PDF. "+repr(errors))
    pdf=fitz.open(stream=raw,filetype="pdf")
    if len(pdf)!=24:raise RuntimeError("Unexpected number of source PDF pages")
    return pdf

def render(page):
    pix=page.get_pixmap(matrix=fitz.Matrix(1.75,1.75),colorspace=fitz.csRGB,alpha=False)
    im=Image.frombytes("RGB",(pix.width,pix.height),pix.samples)
    if im.width!=1042 or im.height not in (1473,1474):
        raise ValueError("Incorrect source scan dimensions: "+str(im.size))
    return im
def cut(im,a,b):
    if not 95<=a<b<=1385:raise ValueError((a,b))
    return im.crop((79,a,960,b))
def join(parts):
    if len(parts)==1:return parts[0]
    gap=18;width=max(im.width for im in parts)
    out=Image.new("RGB",(width,sum(im.height for im in parts)+gap*(len(parts)-1)),"white")
    y=0
    for im in parts:
        out.paste(im,((width-im.width)//2,y));y+=im.height+gap
    return out
def main():
    pdf=get_pdf()
    pages=set(MCQ)
    for collection in (STRUCT,ESSAY):
        for spans in collection.values():
            pages.update(p for p,_,_ in spans)
    pics={n:render(pdf[n-1]) for n in pages}
    inst31=cut(pics[6],431,756)
    inst41=cut(pics[8],114,359)
    hdr41=cut(pics[8],363,395)
    rows=[];seen=set()
    for page,spans in MCQ.items():
        for num,a,b in spans:
            parts=[cut(pics[page],a,b)]
            if 31<=num<=40:parts.insert(0,inst31)
            if 41<=num<=50:parts=[inst41,hdr41]+parts
            im=join(parts)
            if im.height<116:
                pad=Image.new("RGB",(im.width,116),"white")
                pad.paste(im,(0,(116-im.height)//2));im=pad
            path=OUT/"I"/f"q{num:02d}.webp"
            path.parent.mkdir(parents=True,exist_ok=True)
            im.save(path,"WEBP",quality=94,method=6)
            rows.append(dict(year=2020,part="I",number=num,type="mcq",language="si",
                    image=path.relative_to(ROOT).as_posix(),pdf_pages=[page],
                    source_type="original_paper",crop_status="manually_measured"))
            seen.add(num)
    if seen!=set(range(1,51)):raise ValueError("Missing MCQs")
    for kind,group in (("structured_essay",STRUCT),("essay",ESSAY)):
        for num,spans in group.items():
            im=join([cut(pics[page],a,b) for page,a,b in spans])
            path=OUT/"II"/f"q{num:02d}.webp"
            path.parent.mkdir(parents=True,exist_ok=True)
            im.save(path,"WEBP",quality=94,method=6)
            rows.append(dict(year=2020,part="II",number=num,type=kind,language="si",
                image=path.relative_to(ROOT).as_posix(),
                pdf_pages=[page for page,_,_ in spans],source_type="original_paper",
                crop_status="manually_measured_all_continuations"))
    if len(rows)!=60:raise ValueError("Expected 60 questions")
    for item in rows:
        with Image.open(ROOT/item["image"]) as im:
            if im.width<850 or im.height<75:raise ValueError("Suspect crop "+item["image"])
    OUT.mkdir(parents=True,exist_ok=True)
    (OUT/"questions.json").write_text(json.dumps(rows,ensure_ascii=False,indent=2)+"\n",encoding="utf-8")
    print("PASS: 50 Sinhala MCQs, 4 structured essays, 6 essays, from exact 2020 PDF")
if __name__=="__main__":main()
