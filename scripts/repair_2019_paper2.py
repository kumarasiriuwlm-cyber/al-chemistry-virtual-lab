#!/usr/bin/env python3
"""Replace 2019 Sinhala Paper II questions 1-10, preserving all 50 existing MCQs.

Source must be a scanned copy visually matching user's 27-page 2019-ppr.pdf.
Questions can span pages. Only the existing Paper II image files are replaced.
"""
from pathlib import Path
import hashlib,json,os,urllib.request
import fitz
from PIL import Image
ROOT=Path(__file__).resolve().parents[1]
OUT=ROOT/"past-papers"/"2019"
UPLOAD_SHA="c6c0b0322377eeaef720c008399a62a711ef971130094ec532a1eb625adb0416"
URLS=[
 "https://drive.usercontent.google.com/download?id=1LJOeJALkvLW7LZSiYStsYCMt02-PMEsQ&export=download&confirm=t",
 "https://drive.google.com/uc?export=download&id=1LJOeJALkvLW7LZSiYStsYCMt02-PMEsQ",
]
EXPECTED={
 12:"7bc37fff3ff03ff03fc03fe6100000003ffe000000001efc1cf804781ffc3fff",
 13:"3fff1c40100014003ffe1df01ffe1ff01ff63ff8001000003f561c001f010007",
 14:"ffff3ffe3f803ff03ffe1e001f001f0000003ffe3fe03fc03ffc300600000003",
 15:"7fff3ffe36fc3ff00100100000003c000000000000077ff47ffc7fe800000003",
 17:"ffff3fff3ffe380002003c000200020002003fe03e2002203ff0004000000007",
 19:"7ff07fff7ffd700603c01ffe1fe01e001ffc1fff300206200fe01fa01e001fe3",
 22:"79c03ffd19e000c714101e001c0002033fbd3fff3ffd3fec0f7c0e380ffd1efd",
 23:"7ff01f033fe03fff3fff30af3fff30003fff3fff3ff81ffa0000000000000001",
 24:"7a00034001800200037802203ff13ffc3f803ffc3f030e001fff1ffd1c001bc3",
 25:"7fff1fff1ee11f831fc13fff3fff1ff300000000000000000000000000000000",
}
SPANS={
 1:[(12,167,1363),(13,83,1357)],
 2:[(14,90,1353),(15,92,965)],
 3:[(15,967,1362),(16,94,1357)],
 4:[(17,94,1355),(18,98,1356)],
 5:[(19,466,1364)],
 6:[(20,98,1359)],
 7:[(21,109,1359)],
 8:[(22,175,654)],
 9:[(22,657,1360),(23,105,1065)],
 10:[(24,103,1362),(25,106,697)]
}
def perceptual_hash(page):
    pix=page.get_pixmap(matrix=fitz.Matrix(.7,.7),colorspace=fitz.csGRAY,alpha=False)
    im=Image.frombytes("L",(pix.width,pix.height),pix.samples)
    im=im.crop((int(im.width*.045),int(im.height*.04),int(im.width*.94),int(im.height*.945))).resize((16,16))
    pixels=list(im.getdata());avg=sum(pixels)/len(pixels)
    return int("".join("1" if pixel<avg else "0" for pixel in pixels),2)
def verify(data):
    if not data.startswith(b"%PDF"):raise ValueError("Not a PDF")
    doc=fitz.open(stream=data,filetype="pdf")
    if len(doc)!=27:raise ValueError("Expected 27-page 2019 original-paper scan: "+str(len(doc)))
    if tuple(round(x) for x in (doc[0].rect.width,doc[0].rect.height))!=(595,842):
        raise ValueError("Unexpected page size")
    distances=[]
    for page,digest in EXPECTED.items():
        delta=(perceptual_hash(doc[page-1])^int(digest,16)).bit_count()
        print("2019 source visual match page",page,delta,"/256",flush=True)
        distances.append(delta)
    if max(distances)>28:
        raise ValueError("Found a different scan, refusing misaligned 2019 crops: "+str(distances))
    return doc
def source():
    local=os.environ.get("CHEMISTRY_2019_ORIGINAL_PDF")
    if local:
        data=Path(local).read_bytes()
        if hashlib.sha256(data).hexdigest()!=UPLOAD_SHA:raise ValueError("Local PDF not uploaded version")
        return verify(data)
    failures=[]
    for url in URLS:
        try:
            req=urllib.request.Request(url,headers={"User-Agent":"Mozilla/5.0","Accept":"application/pdf,*/*"})
            with urllib.request.urlopen(req,timeout=130) as response:data=response.read()
            doc=verify(data)
            print("Verified online 2019 Sinhala source",url,"SHA256",hashlib.sha256(data).hexdigest(),flush=True)
            return doc
        except Exception as exc:failures.append(url+": "+str(exc))
    raise RuntimeError("No source passed 2019 upload visual verification: "+"; ".join(failures))
def raster(page):
    pix=page.get_pixmap(matrix=fitz.Matrix(1.75,1.75),colorspace=fitz.csRGB,alpha=False)
    im=Image.frombytes("RGB",(pix.width,pix.height),pix.samples)
    if im.size!=(1042,1474):raise ValueError("Raster dimensions unexpectedly changed: "+str(im.size))
    return im
def join(parts):
    w=max(im.width for im in parts)
    result=Image.new("RGB",(w,sum(im.height for im in parts)+18*(len(parts)-1)+20),"white")
    y=10
    for part in parts:
        result.paste(part,((w-part.width)//2,y))
        y+=part.height+18
    return result
def main():
    doc=source()
    meta=OUT/"questions.json"
    original=json.loads(meta.read_text(encoding="utf-8"))
    if len(original)!=60 or sum(x["part"]=="I" for x in original)!=50 or sum(x["part"]=="II" for x in original)!=10:
        raise ValueError("Unrecognized original 2019 questions metadata")
    pages={p:raster(doc[p-1]) for spans in SPANS.values() for p,_,_ in spans}
    replacements={}
    for n,spans in SPANS.items():
        pieces=[pages[p].crop((76,a,970,b)) for p,a,b in spans]
        image=join(pieces)
        path=OUT/"II"/f"q{n:02d}.webp"
        path.parent.mkdir(parents=True,exist_ok=True)
        image.save(path,"WEBP",quality=94,method=6)
        if image.width<850 or image.height<120 or path.stat().st_size<5000:
            raise ValueError("Crop incomplete or blank: "+str(path))
        replacements[n]={"year":2019,"part":"II","number":n,
            "type":"structured_essay" if n<=4 else "essay",
            "image":path.relative_to(ROOT).as_posix(),
            "pdf_pages":[p for p,_,_ in spans],
            "language":"si","source_type":"original_sinhala_exam_question",
            "crop_status":"complete_question_checked_including_continuations",
            "contains_answers":False}
    output=[replacements[row["number"]] if row["part"]=="II" else row for row in original]
    meta.write_text(json.dumps(output,ensure_ascii=False,indent=2)+"\n",encoding="utf-8")
    print("PASS: replaced 2019 structured essay 1-4 and essay 5-10 with original questions, existing 50 MCQs untouched",flush=True)
if __name__=="__main__":main()
