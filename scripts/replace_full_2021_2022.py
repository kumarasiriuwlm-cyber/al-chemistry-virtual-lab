#!/usr/bin/env python3
"""Rebuild all 120 question images for 2021/2022 Sinhala A/L Chemistry.
The original 26/24-page exam papers are source-verified against user uploads.
"""
import os,json,hashlib,urllib.request
from pathlib import Path
import fitz
from PIL import Image

ROOT=Path(__file__).resolve().parents[1]
SOURCE={
 2021:("https://pastpapers.wiki/download/14272/2021-a-l-past-papers/52688/2021-al-chemistry-past-paper-sinhala-medium-2.pdf","ae38d71971f9399c45f0b3b9090e6ccbce969407558fbfd451d2b234bb6c77f4",26),
 2022:("https://pastpapers.wiki/download/22285/2022-a-l-past-papers/69984/gce-advanced-level-2022-chemistry-sinhala-medium-paper.pdf","f5d0772c343e557cbc17beda84e25da1c10c40171139c1bb4a0b62571975d9ec",24)}
FINGERPRINTS={
 2021:{1:"fffedffef3baf8127c007ffc366c60003f003c807c0038c0400000007f000000",2:"fe003c007e007f007fc03fc07ffe7fc07ffe7ffe7f00240024002400fffe4008",6:"fff07ff07fe01fd00f803fc02f7e700018607fe07fe07de07df0201000000000",8:"7fee3fe409001d307fb87ff87ffc7ffc7ffe7ff878007f0879f0000000000000",11:"fffefffef380f0ee7ffe7c007c0000007e007f007fc02f800100000001802000",13:"fffe7ffe300030003ff838401fe01fc43ff03fe0000000003ff03c003e02100e",18:"fff63f870c353e06047d6c04287c680600067ffe0002000200020006000e030e",21:"fffe3ffe3ffe3c000eb00bd81b981ffe7f003f803f803fc03ff83fe00000000c",25:"79043fe03ff83c063fc03ffc3ff83fe63fe03fe67f003ff83ffe000000000004"},
 2022:{1:"7ffe7fff7ffd799f7e007ff43f7e3000000038003ff43b80200000003f003f00",2:"7c000e003c003c003fff3c003ff83fff3cbc3fc03fc07fff1840085010001800",6:"7d8004c02108108831803dfe7ffe3fc03ff80fc00fc035ff3fff3f780f0024d8",8:"70003fa83f803fe03ff405003e5a7cfe7e0020fc3ffa3ff87efe3e587eff3800",11:"7fff7ffe3ff03ff03ff010061f060800100c1f0e180000001c000e401ffe1ffe",13:"7fe33ffe3ffe3ffe3ffe3ffe3ffe3dc0000000001c8008000000000000000000",18:"7fff5fff780f07e01fc03fc01a400fc01ff01fe21de81f021600060000000200",21:"7bc03ffd3e000300000b1ff81fff1fff1fdf14c105c119e10c630f8000030007",23:"7b803ffc3ffc1d633fff3fff38fd3fff3f371e023ff63fff0002000000000000"}}
MCQ={
 2021:{
 1:[(1,634,848),(2,848,1021),(3,1021,1191),(4,1191,1330)],
 2:[(5,109,355),(6,355,549),(7,549,660),(8,660,856),(9,856,1232),(10,1232,1355)],
 3:[(11,108,423),(12,423,670),(13,670,941),(14,941,1199),(15,1199,1361)],
 4:[(16,109,452),(17,452,652),(18,652,813),(19,813,984),(20,984,1190),(21,1190,1338)],
 5:[(22,110,286),(23,286,388),(24,388,540),(25,540,718),(26,718,923),(27,923,1069),(28,1069,1200),(29,1200,1398)],
 6:[(30,111,310),(31,651,853),(32,853,991),(33,991,1087),(34,1087,1227)],
 7:[(35,109,287),(36,287,482),(37,482,636),(38,636,789),(39,789,1142),(40,1142,1332)],
 8:[(41,385,490),(42,490,549),(43,549,610),(44,610,665),(45,665,728),(46,728,802),(47,802,858),(48,858,975),(49,975,1052),(50,1052,1114)]},
 2022:{
 1:[(1,650,850),(2,850,1065),(3,1065,1220),(4,1220,1367)],
 2:[(5,110,398),(6,398,545),(7,545,721),(8,721,816),(9,816,1002),(10,1002,1380)],
 3:[(11,60,342),(12,342,615),(13,615,772),(14,772,1057),(15,1057,1390)],
 4:[(16,110,285),(17,285,514),(18,514,714),(19,714,866),(20,866,969),(21,969,1156),(22,1156,1350)],
 5:[(23,112,257),(24,257,628),(25,628,784),(26,784,1011),(27,1011,1168),(28,1168,1374)],
 6:[(29,107,527),(30,527,744),(31,1058,1183),(32,1183,1369)],
 7:[(33,104,325),(34,325,536),(35,536,673),(36,673,817),(37,817,937),(38,937,1121),(39,1121,1280)],
 8:[(40,104,353),(41,613,703),(42,703,761),(43,761,832),(44,832,905),(45,905,991),(46,991,1051),(47,1051,1127),(48,1127,1203),(49,1203,1282),(50,1282,1356)]}}
PAPER_II={
 2021:{
 1:[(12,158,1372),(13,126,1374)],
 2:[(14,124,1373),(15,127,625)],
 3:[(15,627,1372),(16,129,1371),(17,126,522)],
 4:[(17,524,1375),(18,126,1356)],
 5:[(19,449,1364),(20,110,248)],
 6:[(20,250,1363)],
 7:[(21,117,1364)],
 8:[(22,177,1365)],
 9:[(23,112,1374),(24,110,473)],
 10:[(24,477,1374),(25,114,1352)]},
 2022:{
 1:[(11,154,1371),(12,120,1186)],
 2:[(13,122,1370),(14,115,977)],
 3:[(14,980,1370),(15,115,1358),(16,118,388)],
 4:[(16,389,1361),(17,120,1372)],
 5:[(18,451,1361),(19,126,508)],
 6:[(19,510,1305)],
 7:[(20,121,1374)],
 8:[(21,225,1333)],
 9:[(22,123,971)],
 10:[(23,125,1168)]}}

def get_source(year):
    url,checksum,total=SOURCE[year]
    path=os.environ.get("CHEMISTRY_{}_UPLOADED_PDF".format(year))
    if path:
        data=Path(path).read_bytes()
    else:
        req=urllib.request.Request(url,headers={"User-Agent":"Mozilla/5.0","Accept":"application/pdf,*/*","Referer":"https://pastpapers.wiki/"})
        with urllib.request.urlopen(req,timeout=150) as response:
            data=response.read()
    if not data.startswith(b"%PDF"):raise ValueError("Not a PDF")
    doc=fitz.open(stream=data,filetype="pdf")
    if len(doc)!=total or round(doc[0].rect.width)!=595 or round(doc[0].rect.height)!=842:
        raise ValueError("Source geometry or page-count mismatch for "+str(year))
    digest=hashlib.sha256(data).hexdigest()
    if digest!=checksum:
        for n,expected in FINGERPRINTS[year].items():
            pix=doc[n-1].get_pixmap(matrix=fitz.Matrix(.7,.7),colorspace=fitz.csGRAY,alpha=False)
            im=Image.frombytes("L",(pix.width,pix.height),pix.samples)
            im=im.crop((int(im.width*.05),int(im.height*.05),int(im.width*.95),int(im.height*.95))).resize((16,16))
            pixels=list(im.getdata())
            avg=sum(pixels)/len(pixels)
            actual=int("".join("1" if x<avg else "0" for x in pixels),2)
            distance=(actual^int(expected,16)).bit_count()
            print("Source page",n,"visual distance",distance,flush=True)
            if distance>27:raise ValueError("Incorrect source scan, refusing to alter published images")
    print("Verified exact equivalent Sinhala source",year,"pages",len(doc),"SHA256",digest,flush=True)
    return doc

def render(page):
    pix=page.get_pixmap(matrix=fitz.Matrix(1.75,1.75),colorspace=fitz.csRGB,alpha=False)
    image=Image.frombytes("RGB",(pix.width,pix.height),pix.samples)
    if image.size!=(1042,1474):raise ValueError("Unexpected rendered dimensions "+str(image.size))
    return image

def crop(im,a,b,year,part):
    if not 40<=a<b<=1400:raise ValueError((year,part,a,b))
    left,right=(77,943) if year==2021 else (88,957)
    if part=="II":left,right=70,962
    return im.crop((left,a,right,b))

def join(pieces):
    width=max(x.width for x in pieces)
    height=sum(x.height for x in pieces)+18*(len(pieces)-1)+20
    result=Image.new("RGB",(width,height),"white")
    y=10
    for piece in pieces:
        result.paste(piece,((width-piece.width)//2,y))
        y+=piece.height+18
    return result

def save(im,year,part,number):
    path=ROOT/"past-papers"/str(year)/part/("q%02d.webp"%number)
    path.parent.mkdir(parents=True,exist_ok=True)
    im.save(path,"WEBP",quality=94,method=6)
    if im.width<750 or im.height<80 or path.stat().st_size<1700:raise ValueError("Bad image "+str(path))
    return path.relative_to(ROOT).as_posix()

def rebuild(year):
    doc=get_source(year)
    pages=set(MCQ[year])|{p for spans in PAPER_II[year].values() for p,_,_ in spans}
    pics={n:render(doc[n-1]) for n in pages}
    if year==2021:
        common31=crop(pics[6],310,630,year,"I")
        common41=crop(pics[8],115,354,year,"I")
        col41=crop(pics[8],354,387,year,"I")
    else:
        common31=crop(pics[6],748,1059,year,"I")
        common41=crop(pics[8],349,572,year,"I")
        col41=crop(pics[8],572,614,year,"I")
    rows=[];seen=set()
    for page,groups in MCQ[year].items():
        for number,top,bottom in groups:
            pieces=[crop(pics[page],top,bottom,year,"I")]
            if 31<=number<=40:pieces.insert(0,common31)
            if 41<=number<=50:pieces=[common41,col41]+pieces
            path=save(join(pieces),year,"I",number)
            rows.append({"year":year,"part":"I","number":number,"type":"mcq","image":path,
                         "pdf_pages":[page],"language":"si","source_type":"full_original_sinhala_exam","contains_answers":False})
            seen.add(number)
    if seen!=set(range(1,51)):raise ValueError("Missing MCQ")
    for number,spans in PAPER_II[year].items():
        pieces=[crop(pics[page],a,b,year,"II") for page,a,b in spans]
        path=save(join(pieces),year,"II",number)
        rows.append({"year":year,"part":"II","number":number,"type":"structured_essay" if number<=4 else "essay",
                     "image":path,"pdf_pages":[p for p,_,_ in spans],"language":"si",
                     "source_type":"full_original_sinhala_exam","contains_answers":False})
    assert len(rows)==60
    assert sum(r["type"]=="mcq" for r in rows)==50
    assert sum(r["type"]=="structured_essay" for r in rows)==4
    assert sum(r["type"]=="essay" for r in rows)==6
    output=ROOT/"past-papers"/str(year)/"questions.json"
    output.write_text(json.dumps(rows,ensure_ascii=False,indent=2)+"\n",encoding="utf-8")
    print("PASS:",year,"50 MCQ, 4 structured essays, 6 essays from complete Sinhala PDF",flush=True)

if __name__=="__main__":
    for year in (2021,2022):rebuild(year)
