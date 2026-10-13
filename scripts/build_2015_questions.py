#!/usr/bin/env python3
"""Re-cut original 2015 A/L Chemistry from the user's improved aligned Sinhala PDF.
The public copy is visually identical to the user upload (verified on GitHub).
Never use the older two-file, misaligned source.
"""
from pathlib import Path
import os, json, hashlib, urllib.request
import fitz
from PIL import Image
ROOT=Path(__file__).resolve().parents[1]
OUT=ROOT/"past-papers"/"2015"
SHAS={
"a6cf3de0c5a2ada77cbacfddb3587be518ff3f0a6113a615ab6875b48b18cfe6",
"9c5282c249bff1d203fbf57f29fb600e011b34ba45c04953ed232eeb829ed114",
}
URLS=[
"https://drive.usercontent.google.com/download?id=1Hvj_g50LFuPUr8kiTQY7sGHGShPZBK1E&export=download&confirm=t",
"https://drive.google.com/uc?export=download&id=1Hvj_g50LFuPUr8kiTQY7sGHGShPZBK1E"
]
MCQ={
1:(1,629,704),2:(1,704,804),3:(1,804,945),4:(1,945,1086),5:(1,1086,1145),6:(1,1145,1274),7:(1,1274,1399),
8:(2,82,252),9:(2,252,389),10:(2,389,640),11:(2,640,842),12:(2,842,952),13:(2,952,1100),14:(2,1100,1184),15:(2,1184,1312),16:(2,1312,1390),
17:(3,81,318),18:(3,318,583),19:(3,583,773),20:(3,773,849),21:(3,849,997),22:(3,997,1140),23:(3,1140,1268),24:(3,1268,1401),
25:(4,80,463),26:(4,463,1010),27:(4,1010,1186),28:(4,1186,1394),
29:(5,80,500),30:(5,500,875),31:(5,1214,1396),
32:(6,79,259),33:(6,259,391),34:(6,391,515),35:(6,515,643),36:(6,643,772),37:(6,772,920),38:(6,920,1032),39:(6,1032,1226),40:(6,1226,1380),
41:(7,348,413),42:(7,413,517),43:(7,517,580),44:(7,580,631),45:(7,631,682),46:(7,682,747),47:(7,747,805),48:(7,805,892),49:(7,892,969),50:(7,969,1053)
}
ESSAY={
1:[(10,139,1343),(11,83,1345)],
2:[(12,90,1343),(13,96,915)],
3:[(13,915,1345),(14,85,1344)],
4:[(15,88,1343),(16,85,1344)],
5:[(17,422,1125)],
6:[(17,1125,1353),(18,82,700)],
7:[(18,700,1350)],
8:[(19,136,1352)],
9:[(20,103,913)],
10:[(21,96,1355)]
}
def source():
    local=os.environ.get("CHEMISTRY_2015_SINGLE_PDF")
    if local:
        data=Path(local).read_bytes()
    else:
        errors=[]
        data=None
        for url in URLS:
            try:
                req=urllib.request.Request(url,headers={"User-Agent":"Mozilla/5.0","Accept":"application/pdf,*/*"})
                with urllib.request.urlopen(req,timeout=90) as response:
                    sample=response.read()
                digest=hashlib.sha256(sample).hexdigest()
                if digest not in SHAS:
                    errors.append("Unexpected SHA256 "+digest)
                    continue
                data=sample
                break
            except Exception as exc:
                errors.append(str(exc))
        if data is None:
            raise RuntimeError("The verified clean 2015 PDF source is unavailable: "+repr(errors))
    digest=hashlib.sha256(data).hexdigest()
    if digest not in SHAS:
        raise ValueError("Refusing to process an unverified 2015 PDF: "+digest)
    doc=fitz.open(stream=data,filetype="pdf")
    if len(doc)!=23 or int(doc[0].rect.width)!=595 or int(doc[0].rect.height)!=842:
        raise ValueError("The 2015 PDF must be the exact aligned 23-page scan")
    print("Source confirmed: aligned Sinhala 2015 PDF; SHA256",digest,flush=True)
    return doc

def render(page):
    p=page.get_pixmap(matrix=fitz.Matrix(1.75,1.75),colorspace=fitz.csRGB,alpha=False)
    im=Image.frombytes("RGB",(p.width,p.height),p.samples)
    if im.size!=(1042,1474):
        raise ValueError("Wrong source geometry: "+str(im.size))
    return im
def crop(images,page,top,bottom):
    if not 70<=top<bottom<=1410:raise ValueError((page,top,bottom))
    # Wide enough to include the whole question number and both right columns.
    return images[page].crop((49 if page<=16 else 108,top,
                              925 if page<=16 else 988,bottom))
def stitch(parts):
    if len(parts)==1:return parts[0]
    width=max(im.width for im in parts)
    out=Image.new("RGB",(width,sum(im.height for im in parts)+16*(len(parts)-1)+16),"white")
    y=8
    for im in parts:
        out.paste(im,((width-im.width)//2,y))
        y+=im.height+16
    return out
def save(image,path):
    path.parent.mkdir(parents=True,exist_ok=True)
    image.save(path,"WEBP",quality=94,method=6)
    if path.stat().st_size<1700:raise ValueError("Suspiciously small crop: "+str(path))
def main():
    doc=source()
    wanted={v[0] for v in MCQ.values()}|{p for spans in ESSAY.values() for p,_,_ in spans}
    images={p:render(doc[p-1]) for p in wanted}
    common31=crop(images,5,885,1213)
    common41=crop(images,7,86,347)
    rows=[]
    for n in range(1,51):
        page,top,bottom=MCQ[n]
        bits=[crop(images,page,top,bottom)]
        if 31<=n<=40:bits.insert(0,common31)
        if 41<=n<=50:bits.insert(0,common41)
        path=OUT/"I"/f"q{n:02d}.webp"
        save(stitch(bits),path)
        rows.append(dict(year=2015,part="I",number=n,type="mcq",
                         image=path.relative_to(ROOT).as_posix(),language="si",
                         pdf_pages=[page],source_type="aligned_2015_sinhala_pdf"))
    for n in range(1,11):
        spans=ESSAY[n]
        path=OUT/"II"/f"q{n:02d}.webp"
        save(stitch([crop(images,p,a,b) for p,a,b in spans]),path)
        rows.append(dict(year=2015,part="II",number=n,
                         type="structured_essay" if n<=4 else "essay",
                         image=path.relative_to(ROOT).as_posix(),
                         pdf_pages=[p for p,a,b in spans],
                         language="si",source_type="aligned_2015_sinhala_pdf"))
    if len(rows)!=60:raise ValueError("Expected 60 full questions")
    for row in rows:
        with Image.open(ROOT/row["image"]) as im:
            if im.width<850 or im.height<42:
                raise ValueError("Bad crop dimensions: "+row["image"])
    (OUT/"questions.json").write_text(json.dumps(rows,ensure_ascii=False,indent=2)+"\n",encoding="utf-8")
    print("PASS: 50 complete Sinhala MCQ + 4 structured + 6 essay images")
if __name__=="__main__":
    main()
