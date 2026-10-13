#!/usr/bin/env python3
"""Safely replace 2018 Paper II Q1–Q10 from verified Sinhala scan, preserving all MCQs."""
from pathlib import Path
import hashlib,json,os,urllib.request
import fitz
from PIL import Image

ROOT=Path(__file__).resolve().parents[1]
OUT=ROOT/"past-papers"/"2018"
SOURCES=[
 "https://cdn.alevelapi.com/Prod/documents/2018/chemistry/2018-AL-CHEMISTRY-PART-II-AlevelApi.-com-PDF.pdf",
 "https://drive.usercontent.google.com/download?id=1nw0JPNIJ2wtlDi5-7RLs0VdHXy3dyiUT&export=download&confirm=t",
]
# Fingerprints of the user-uploaded, 27-page 2018-ppr.pdf scan.
EXPECTED={
 12:"f7c2fffe3ff03f803fe03d84000000003ffc000000003ff838f008303ff83ffe",
 15:"fffe00023ff83de43c003ff83ffe3ff3049efffc10001d0010001fe000000006",
 18:"ffe327c30406260606063606368626862406240e2606240637fe7ffc0003000f",
 19:"fffefffefffe47c0128000003ffe3fc63f803e803f8000041840184008003400",
 22:"f3803ff826183ffa3fc23ffa3f383e183bfe24183ffc3ff83f000d0000000000",
 25:"fffe7ffe7ffe7f803c043ffa3f803fe03fe001000000038003803ffc00040002",
}
# Original 27-page upload numbering. Each section is one complete question.
SPANS={
 1:[(12,170,1394),(13,101,785)],
 2:[(13,786,1394),(14,101,1394),(15,101,788)],
 3:[(15,789,1394),(16,100,1394),(17,101,533)],
 4:[(17,534,1394),(18,104,1392)],
 5:[(19,452,1394),(20,104,223)],
 6:[(20,236,1394),(21,101,338)],
 7:[(21,342,1394)],
 8:[(22,175,1394),(23,103,782)],
 9:[(23,784,1394),(24,103,1394)],
 10:[(25,104,1394)],
}
def hash_page(page):
    pix=page.get_pixmap(matrix=fitz.Matrix(.7,.7),colorspace=fitz.csGRAY,alpha=False)
    im=Image.frombytes("L",(pix.width,pix.height),pix.samples)
    im=im.crop((int(im.width*.045),int(im.height*.04),int(im.width*.94),int(im.height*.945))).resize((16,16))
    values=list(im.getdata());mean=sum(values)/len(values)
    return int("".join("1" if p<mean else "0" for p in values),2)
def checked_pdf(raw):
    if not raw.startswith(b"%PDF"):raise ValueError("Source isn't PDF")
    doc=fitz.open(stream=raw,filetype="pdf")
    offset=10 if len(doc)==16 else 0 if len(doc)==27 else None
    if offset is None:raise ValueError("Unexpected PDF page count: "+str(len(doc)))
    if int(doc[0].rect.width)!=595 or int(doc[0].rect.height)!=842:
        raise ValueError("Incorrect PDF geometry")
    for original_page,expected in EXPECTED.items():
        distance=(hash_page(doc[original_page-offset-1])^int(expected,16)).bit_count()
        print("Source comparison",original_page,"distance",distance,flush=True)
        if distance>30:raise ValueError("Source not visually equivalent to uploaded PDF")
    return doc,offset
def source():
    local=os.environ.get("CHEM_2018_PAPER2_LOCAL_PDF")
    if local:
        raw=Path(local).read_bytes()
        doc,offset=checked_pdf(raw)
        return doc,offset
    failures=[]
    for url in SOURCES:
        try:
            req=urllib.request.Request(url,headers={"User-Agent":"Mozilla/5.0","Accept":"application/pdf,*/*"})
            with urllib.request.urlopen(req,timeout=110) as response:raw=response.read()
            doc,offset=checked_pdf(raw)
            print("Verified source",url,hashlib.sha256(raw).hexdigest(),flush=True)
            return doc,offset
        except Exception as e:
            failures.append(url+": "+str(e))
    raise RuntimeError("No safe matching public source: "+"; ".join(failures))
def raster(page):
    pix=page.get_pixmap(matrix=fitz.Matrix(1.75,1.75),colorspace=fitz.csRGB,alpha=False)
    im=Image.frombytes("RGB",(pix.width,pix.height),pix.samples)
    if im.size!=(1042,1474):raise ValueError("Unexpected page image geometry "+str(im.size))
    return im
def combine(pieces):
    if len(pieces)==1:return pieces[0]
    width=max(im.width for im in pieces)
    out=Image.new("RGB",(width,sum(im.height for im in pieces)+18*(len(pieces)-1)+16),"white")
    y=8
    for im in pieces:
        out.paste(im,((width-im.width)//2,y))
        y+=im.height+18
    return out
def main():
    doc,offset=source()
    manifest=OUT/"questions.json"
    rows=json.loads(manifest.read_text(encoding="utf-8"))
    if len(rows)!=60 or sum(x["part"]=="I" for x in rows)!=50 or sum(x["part"]=="II" for x in rows)!=10:
        raise ValueError("Existing 2018 question bank is not as expected")
    pages={p:raster(doc[p-offset-1]) for spans in SPANS.values() for p,_,_ in spans}
    changes={}
    for num,spans in SPANS.items():
        bits=[pages[p].crop((48,top,915,bottom)) for p,top,bottom in spans]
        image=combine(bits)
        path=OUT/"II"/f"q{num:02d}.webp"
        path.parent.mkdir(parents=True,exist_ok=True)
        image.save(path,"WEBP",quality=94,method=6)
        if path.stat().st_size<3000 or image.width<850 or image.height<100:
            raise ValueError("Invalid question crop "+str(path))
        changes[num]={
          "year":2018,"part":"II","number":num,
          "type":"structured_essay" if num<=4 else "essay",
          "language":"si","image":path.relative_to(ROOT).as_posix(),
          "pdf_pages":[p for p,_,_ in spans],
          "source_pdf":"2018 complete Sinhala Paper II, visually matched to uploaded PDF",
          "crop_status":"complete question including page continuations"
        }
    new_rows=[changes[x["number"]] if x["part"]=="II" else x for x in rows]
    assert len(new_rows)==60
    manifest.write_text(json.dumps(new_rows,ensure_ascii=False,indent=2)+"\n",encoding="utf-8")
    print("PASS: 2018 II structured 1–4 and essay 5–10 replaced; all 50 MCQs unchanged",flush=True)
if __name__=="__main__":
    main()
