#!/usr/bin/env python3
"""Build 2017 Chemistry question images from the user's photographed GovDoc paper.
The source PDF is SHA-256 verified. Question boundaries were visually checked.
Keep all existing website filenames. No watermark editing or image substitution.
"""
from pathlib import Path
import os,json,hashlib,urllib.request
import fitz
from PIL import Image

ROOT=Path(__file__).resolve().parents[1]
OUT=ROOT/"past-papers"/"2017"
SOURCES=["https://govdoc.lk/download/61c2c6a980662",
         "https://govdoc.lk/downloadFile/1660"]
SOURCE_SHA="f5290885a46ed9f33e2a5c4f885324fba7e17e9baf9f7f1ec998f46f1d3f9f70"
# Page: (MCQ number, upper and lower raster coordinates) in 1042x1474 pixels.
I={
1:[(1,614,697),(2,697,882),(3,882,1070),(4,1070,1145),(5,1145,1240),(6,1240,1365)],
2:[(7,94,250),(8,250,410),(9,410,503),(10,503,681),(11,681,809),(12,809,890),(13,890,1055),(14,1055,1320)],
3:[(15,91,323),(16,323,452),(17,452,542),(18,542,812),(19,812,999),(20,999,1144),(21,1144,1270)],
4:[(22,91,240),(23,240,500),(24,500,839),(25,839,1167),(26,1167,1313)],
5:[(27,91,251),(28,251,822),(29,822,1106),(30,1106,1315)],
6:[(31,410,633),(32,634,857),(33,857,1016),(34,1016,1132),(35,1132,1241),(36,1241,1363)],
7:[(37,91,344),(38,344,527),(39,527,705),(40,705,845),(41,1102,1166),(42,1166,1241),(43,1241,1312)],
8:[(44,137,208),(45,208,281),(46,281,335),(47,335,405),(48,405,461),(49,461,506),(50,506,559)]}
II={
1:[(10,90,1336),(11,90,1336)],
2:[(12,90,1340),(13,92,906)],
3:[(13,908,1339),(14,90,1338),(15,90,396)],
4:[(15,396,1338),(16,90,1337)],
5:[(17,449,1290)],6:[(18,88,1330)],7:[(19,87,898)],
8:[(19,950,1257),(20,89,1322)],
9:[(21,89,914)],10:[(21,914,1323),(22,90,1280)]}

def get_pdf():
    local=os.environ.get("CHEMISTRY_2017_CLEAN_PDF")
    if local:
        data=Path(local).read_bytes()
        if hashlib.sha256(data).hexdigest()!=SOURCE_SHA:raise RuntimeError("Local PDF SHA mismatch")
        return fitz.open(stream=data,filetype="pdf")
    errors=[]
    for url in SOURCES:
        try:
            req=urllib.request.Request(url,headers={"User-Agent":"Mozilla/5.0","Accept":"application/pdf,*/*"})
            with urllib.request.urlopen(req,timeout=130) as response:data=response.read()
            if hashlib.sha256(data).hexdigest()!=SOURCE_SHA:raise ValueError("Source checksum mismatch")
            return fitz.open(stream=data,filetype="pdf")
        except Exception as e:errors.append(f"{url}: {e}")
    raise RuntimeError("Cannot obtain the verified 2017 PDF: "+"; ".join(errors))

def raster(page):
    pix=page.get_pixmap(matrix=fitz.Matrix(1.75,1.75),colorspace=fitz.csRGB,alpha=False)
    return Image.frombytes("RGB",(pix.width,pix.height),pix.samples)
def clip(img,a,b):
    assert img.size==(1042,1474),img.size
    assert 0<a<b<1474
    return img.crop((74,a,960,b))
def join(parts):
    if len(parts)==1:return parts[0]
    w=max(im.width for im in parts)
    result=Image.new("RGB",(w,sum(im.height for im in parts)+14*(len(parts)-1)),"white")
    y=0
    for im in parts:
        result.paste(im,((w-im.width)//2,y))
        y+=im.height+14
    return result
def save(image,path):
    path.parent.mkdir(parents=True,exist_ok=True)
    image.save(path,"WEBP",quality=93,method=6)

def main():
    pdf=get_pdf()
    assert len(pdf)==24, "Expected 24-page user-uploaded 2017 paper"
    pics={p:raster(pdf[p-1]) for p in range(1,23)}
    shared31=clip(pics[6],94,402)
    shared41=clip(pics[7],849,1070)
    records=[]
    for page,questions in I.items():
        for n,top,bottom in questions:
            sections=[]
            if 31<=n<=40:sections.append(shared31)
            if 41<=n<=50:sections.append(shared41)
            sections.append(clip(pics[page],top,bottom))
            path=OUT/"I"/f"q{n:02d}.webp"
            save(join(sections),path)
            pages=([6,page] if 31<=n<=40 else [7,page] if 41<=n<=50 else [page])
            records.append({"year":2017,"part":"I","number":n,"type":"mcq",
                            "image":path.relative_to(ROOT).as_posix(),"pdf_pages":pages})
    for n,sections in II.items():
        path=OUT/"II"/f"q{n:02d}.webp"
        save(join([clip(pics[p],a,b) for p,a,b in sections]),path)
        records.append({"year":2017,"part":"II","number":n,
                        "type":"structured_essay" if n<=4 else "essay",
                        "image":path.relative_to(ROOT).as_posix(),
                        "pdf_pages":[p for p,_,_ in sections]})
    assert sorted(x["number"] for x in records if x["part"]=="I")==list(range(1,51))
    assert sorted(x["number"] for x in records if x["part"]=="II")==list(range(1,11))
    OUT.mkdir(parents=True,exist_ok=True)
    (OUT/"questions.json").write_text(json.dumps(records,ensure_ascii=False,indent=2)+"\n",encoding="utf-8")
    print("PASS: 2017 Chemistry 50 MCQ, 4 structured, 6 essays (verified source).")
if __name__=="__main__":main()
