#!/usr/bin/env python3
"""Re-cut 2018 Sinhala A/L Chemistry from the user's verified 20-page scan.
50 MCQs and all six full Section B/C essays are in the supplied PDF.
Section A is incomplete, so preserve the four complete structured essays
already published from the separate 2018 source. Do not erase watermarks.
"""
from pathlib import Path
import os, json, hashlib, urllib.request
import fitz
from PIL import Image

ROOT=Path(__file__).resolve().parents[1]
OUT=ROOT/"past-papers"/"2018"
PDF_SHA="f76573720d1791d4766843ed9e3bde2e500e0dcf5352e78938dabdea5e46fd90"
SOURCES=["https://govdoc.lk/downloadFile/2142","https://govdoc.lk/download/61cd7bff2660a"]
I={
1:[(1,669,742),(2,741,799),(3,798,977),(4,976,1141),(5,1140,1254),(6,1254,1337)],
2:[(7,92,419),(8,417,613),(9,612,695),(10,691,953),(11,952,1110),(12,1108,1333)],
3:[(13,91,263),(14,262,447),(15,445,586),(16,586,756),(17,755,898),(18,897,1039),(19,1039,1182),(20,1181,1336)],
4:[(21,91,483),(22,481,687),(23,684,916),(24,914,1313)],
5:[(25,92,915),(26,914,1037),(27,1036,1350)],
6:[(28,91,445),(29,444,647),(30,646,865),(31,1188,1339)],
7:[(32,89,273),(33,272,432),(34,430,543),(35,541,710),(36,709,862),(37,861,1034),(38,1032,1191),(39,1189,1336)],
8:[(40,91,233),(41,526,589),(42,589,685),(43,687,758),(44,759,830),(45,831,901),(46,902,974),(47,975,1054),(48,1055,1115),(49,1116,1190),(50,1191,1250)]}
II={
5:[(9,395,1351),(10,103,241)],
6:[(10,241,1360),(11,98,344)],
7:[(11,342,1336)],
8:[(12,99,1209),(13,98,756)],
9:[(13,755,1225),(14,98,1345)],
10:[(15,98,1328)]}

def pdf_source():
    local=os.environ.get("CHEMISTRY_2018_GOVDOC_PDF")
    if local:
        data=Path(local).read_bytes()
        digest=hashlib.sha256(data).hexdigest()
        if digest!=PDF_SHA: raise RuntimeError("Uploaded PDF checksum mismatch: "+digest)
        return fitz.open(stream=data,filetype="pdf")
    errors=[]
    for url in SOURCES:
        try:
            req=urllib.request.Request(url,headers={"User-Agent":"Mozilla/5.0","Referer":"https://govdoc.lk/","Accept":"application/pdf,*/*"})
            with urllib.request.urlopen(req,timeout=110) as response:
                data=response.read()
            digest=hashlib.sha256(data).hexdigest()
            if digest!=PDF_SHA: raise RuntimeError("Source SHA mismatch: "+digest)
            return fitz.open(stream=data,filetype="pdf")
        except Exception as error:
            errors.append(url+": "+str(error))
    raise RuntimeError("Cannot fetch SHA-pinned user-uploaded 2018 PDF: "+"; ".join(errors))

def raster(page):
    pix=page.get_pixmap(matrix=fitz.Matrix(1.75,1.75),colorspace=fitz.csRGB,alpha=False)
    img=Image.frombytes("RGB",(pix.width,pix.height),pix.samples)
    if img.size!=(1042,1474): raise RuntimeError("Unexpected source dimensions: "+str(img.size))
    return img

def crop(img,top,bottom):
    if not 65<=top<bottom<=1376: raise ValueError((top,bottom))
    return img.crop((76,top,956,bottom))

def stitch(parts):
    if len(parts)==1: return parts[0]
    width=max(im.width for im in parts)
    result=Image.new("RGB",(width,sum(im.height for im in parts)+18*(len(parts)-1)),"white")
    y=0
    for im in parts:
        result.paste(im,((width-im.width)//2,y))
        y+=im.height+18
    return result

def save(img,path):
    path.parent.mkdir(parents=True,exist_ok=True)
    img.save(path,"WEBP",quality=93,method=6)
    if path.stat().st_size<2500: raise RuntimeError("Suspect tiny crop: "+str(path))

def main():
    pdf=pdf_source()
    if len(pdf)!=20: raise RuntimeError("Expected the exact 20-page scanned PDF")
    pics={page:raster(pdf[page-1]) for page in range(1,16)}
    instructions31=crop(pics[6],871,1185)
    instructions41=crop(pics[8],242,523)
    changes={}
    for page,group in I.items():
        for num,a,b in group:
            pieces=[crop(pics[page],a,b)]
            sources=[page]
            if 31<=num<=40:
                pieces.insert(0,instructions31)
                sources=[6,page] if page!=6 else [6]
            if 41<=num<=50:
                pieces.insert(0,instructions41)
                sources=[8]
            path=OUT/"I"/f"q{num:02d}.webp"
            save(stitch(pieces),path)
            changes[("I",num)]=dict(year=2018,part="I",number=num,type="mcq",
                  image=path.relative_to(ROOT).as_posix(),pdf_pages=sources,
                  source_pdf="2018 GovDoc Sinhala scan (SHA256 verified)",
                  crop_status="visually_rechecked_full_question_edges")
    for num,sections in II.items():
        path=OUT/"II"/f"q{num:02d}.webp"
        save(stitch([crop(pics[p],a,b) for p,a,b in sections]),path)
        changes[("II",num)]=dict(year=2018,part="II",number=num,type="essay",
                  image=path.relative_to(ROOT).as_posix(),
                  pdf_pages=[p for p,a,b in sections],
                  source_pdf="2018 GovDoc Sinhala scan (SHA256 verified)",
                  crop_status="visually_rechecked_all_continuations")
    assert sorted(num for part,num in changes if part=="I")==list(range(1,51))
    assert sorted(num for part,num in changes if part=="II")==list(range(5,11))
    metadata=OUT/"questions.json"
    if not metadata.is_file(): raise RuntimeError("Existing metadata is missing")
    rows=json.loads(metadata.read_text(encoding="utf-8"))
    if len(rows)!=60 or sum(row["part"]=="II" and int(row["number"])<=4 for row in rows)!=4:
        raise RuntimeError("Must retain original four complete structured questions")
    rows=[changes.get((row["part"],int(row["number"])),row) for row in rows]
    metadata.write_text(json.dumps(rows,ensure_ascii=False,indent=2)+"\n",encoding="utf-8")
    print("PASS: 50 MCQ and 6 full essays re-cut; 4 structured essays preserved.")

if __name__=="__main__":
    main()
