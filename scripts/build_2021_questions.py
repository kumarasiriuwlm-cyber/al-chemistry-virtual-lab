#!/usr/bin/env python3
"""Re-cut 2021(2022) A/L Sinhala Chemistry questions from the user's 17-page PDF.

The supplied PDF contains MCQs 1-50 and Essays 5-10, but does not contain
structured-essay Questions 1-4. Preserve the existing separately sourced
Sinhala Question 1-4 images in GitHub; do not fabricate those pages.
"""
from pathlib import Path
import hashlib, json, os, urllib.request
import fitz
from PIL import Image

ROOT=Path(__file__).resolve().parents[1]
OUT=ROOT/"past-papers"/"2021"
CHECKSUM="61c2f3f2b4b916ffa3e5f42cedb69ddea0d60af2549fc15bdbbae31e4502207b"
SOURCES=["https://govdoc.lk/downloadFile/3647","https://cdn.govdoc.lk/download/3647"]
MCQ={
1:[(1,678,882),(2,882,1046),(3,1046,1195),(4,1195,1317)],
2:[(5,190,409),(6,409,605),(7,605,697),(8,697,885),(9,885,1214),(10,1217,1310)],
3:[(11,200,493),(12,493,712),(13,715,951),(14,951,1205),(15,1208,1320)],
4:[(16,172,497),(17,497,696),(18,696,840),(19,840,989),(20,989,1167),(21,1167,1314)],
5:[(22,198,356),(23,356,448),(24,448,599),(25,599,748),(26,748,935),(27,935,1051),(28,1051,1180),(29,1180,1320)],
6:[(30,186,339),(31,685,854),(32,854,996),(33,996,1095),(34,1095,1225)],
7:[(35,188,348),(36,348,532),(37,532,686),(38,690,806),(39,810,1137),(40,1140,1282)],
8:[(41,438,542),(42,547,590),(43,591,642),(44,642,694),(45,694,749),(46,749,828),(47,831,873),(48,873,990),(49,990,1057),(50,1057,1114)]
}
ESSAY={
5:[(10,366,1423),(11,99,248)],
6:[(11,248,1160)],
7:[(12,96,1215)],
8:[(13,185,1215)],
9:[(14,99,1402),(15,95,478)],
10:[(15,478,1415),(16,94,1351)]
}

def get_pdf():
    src=os.environ.get("CHEMISTRY_2021_UPLOADED_PDF")
    if src:
        raw=Path(src).read_bytes()
    else:
        errors=[];raw=None
        for url in SOURCES:
            try:
                req=urllib.request.Request(url,headers={
                    "User-Agent":"Mozilla/5.0",
                    "Referer":"https://govdoc.lk/",
                    "Accept":"application/pdf,*/*"})
                with urllib.request.urlopen(req,timeout=110) as response:
                    candidate=response.read()
                digest=hashlib.sha256(candidate).hexdigest()
                if digest==CHECKSUM:
                    raw=candidate;break
                errors.append(url+": SHA256 mismatch "+digest)
            except Exception as exc:
                errors.append(url+": "+str(exc))
        if raw is None:
            raise RuntimeError("Cannot verify exact user-uploaded 2021 Sinhala PDF: "+repr(errors))
    if hashlib.sha256(raw).hexdigest()!=CHECKSUM:
        raise ValueError("Source is not identical to the uploaded Sinhala PDF")
    pdf=fitz.open(stream=raw,filetype="pdf")
    if len(pdf)!=17:raise ValueError("Expected the 17-page source")
    return pdf

def raster(page):
    pix=page.get_pixmap(matrix=fitz.Matrix(1.75,1.75),colorspace=fitz.csRGB,alpha=False)
    im=Image.frombytes("RGB",(pix.width,pix.height),pix.samples)
    if im.size!=(1042,1474):raise ValueError("Wrong 2021 raster dimensions: "+str(im.size))
    return im

def crop(im,top,bottom,page_no):
    if not 70<=top<bottom<=1430:raise ValueError((page_no,top,bottom))
    xlo,xhi=(140,916) if page_no<=8 else (58,975)
    return im.crop((xlo,top,xhi,bottom))

def join(images):
    gap=18;width=max(im.width for im in images)
    result=Image.new("RGB",(width,sum(im.height for im in images)+gap*(len(images)-1)+24),"white")
    y=12
    for im in images:
        result.paste(im,((width-im.width)//2,y))
        y+=im.height+gap
    return result

def save(im,part,num):
    path=OUT/part/f"q{num:02d}.webp"
    path.parent.mkdir(parents=True,exist_ok=True)
    im.save(path,"WEBP",quality=94,method=6)
    if path.stat().st_size<1900:raise ValueError("Suspect blank crop: "+str(path))
    return path

def main():
    pdf=get_pdf()
    pages={p:raster(pdf[p-1]) for p in {*MCQ,*(p for spans in ESSAY.values() for p,_,_ in spans)}}
    shared31=crop(pages[6],362,681,6)
    shared41=crop(pages[8],172,395,8)
    header41=crop(pages[8],396,437,8)
    rows=[];seen=set()
    for page,spans in MCQ.items():
        for num,top,bottom in spans:
            pieces=[crop(pages[page],top,bottom,page)]
            if 31<=num<=40:pieces.insert(0,shared31)
            if 41<=num<=50:pieces=[shared41,header41]+pieces
            p=save(join(pieces),"I",num)
            rows.append({"year":2021,"part":"I","number":num,"type":"mcq",
                "image":p.relative_to(ROOT).as_posix(),"pdf_pages":[page],
                "language":"si","source_type":"exact_uploaded_2021_sinhala_exam",
                "crop_status":"manually_measured"})
            seen.add(num)
    if seen!=set(range(1,51)):raise ValueError("Missing MCQs")
    for num in range(1,5):
        p=OUT/"II"/f"q{num:02d}.webp"
        if not p.is_file():raise FileNotFoundError("Missing preserved structured question "+str(p))
        rows.append({"year":2021,"part":"II","number":num,"type":"structured_essay",
            "image":p.relative_to(ROOT).as_posix(),"pdf_pages":[],
            "language":"si","source_type":"preserved_prior_sinhala_source_not_in_uploaded_pdf",
            "crop_status":"preserved_unchanged"})
    for num,spans in ESSAY.items():
        p=save(join([crop(pages[page],top,bottom,page) for page,top,bottom in spans]),"II",num)
        rows.append({"year":2021,"part":"II","number":num,"type":"essay",
            "image":p.relative_to(ROOT).as_posix(),"pdf_pages":[page for page,_,_ in spans],
            "language":"si","source_type":"exact_uploaded_2021_sinhala_exam",
            "crop_status":"manually_measured_all_continuations"})
    assert len(rows)==60
    assert sum(x["source_type"].startswith("exact_uploaded") for x in rows)==56
    for item in rows:
        path=ROOT/item["image"]
        with Image.open(path) as im:
            if im.width<750 or im.height<70:
                raise ValueError("Invalid crop dimensions "+str(path))
    OUT.mkdir(parents=True,exist_ok=True)
    (OUT/"questions.json").write_text(json.dumps(rows,ensure_ascii=False,indent=2)+"\n",encoding="utf-8")
    print("PASS: 50 cropped Sinhala MCQs + 6 essays; 4 original Sinhala structured questions preserved")
if __name__=="__main__":main()
