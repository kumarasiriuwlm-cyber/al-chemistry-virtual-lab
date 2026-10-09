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
1:[(1,678,742),(2,742,809),(3,810,990),(4,993,1150),(5,1154,1281),(6,1284,1368)],
2:[(7,91,441),(8,440,633),(9,633,711),(10,708,981),(11,988,1134),(12,1134,1368)],
3:[(13,91,257),(14,261,449),(15,450,582),(16,585,771),(17,776,897),(18,903,1040),(19,1046,1199),(20,1200,1366)],
4:[(21,90,470),(22,473,698),(23,699,926),(24,928,1308)],
5:[(25,92,935),(26,937,1055),(27,1057,1368)],
6:[(28,88,453),(29,454,670),(30,673,875),(31,1195,1368)],
7:[(32,88,282),(33,284,436),(34,437,559),(35,560,714),(36,719,869),(37,870,1046),(38,1047,1217),(39,1217,1368)],
8:[(40,88,237),(41,526,600),(42,602,697),(43,697,771),(44,771,840),(45,840,916),(46,915,990),(47,988,1072),(48,1071,1133),(49,1134,1213),(50,1212,1294)]}
II={
5:[(9,399,1369),(10,105,246)],
6:[(10,249,1375),(11,102,343)],
7:[(11,346,1363)],
8:[(12,98,1210),(13,99,773)],
9:[(13,777,1235),(14,95,1351)],
10:[(15,96,1291)]}

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
    return img.crop((159,top,1005,bottom))

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
    instructions31=crop(pics[6],886,1190)
    instructions41=crop(pics[8],242,525)
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
                  crop_status="measured_complete_question")
    for num,sections in II.items():
        path=OUT/"II"/f"q{num:02d}.webp"
        save(stitch([crop(pics[p],a,b) for p,a,b in sections]),path)
        changes[("II",num)]=dict(year=2018,part="II",number=num,type="essay",
                  image=path.relative_to(ROOT).as_posix(),
                  pdf_pages=[p for p,a,b in sections],
                  source_pdf="2018 GovDoc Sinhala scan (SHA256 verified)",
                  crop_status="joined_all_continuations")
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
