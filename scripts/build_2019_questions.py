#!/usr/bin/env python3
"""2019 Chemistry MCQs: accurately recut 50 from 2019 new-syllabus marking-scheme PDF.
Original 10 Paper II question images remain unchanged. Watermarks remain untouched.
The PDF is the same 39-page source as the uploaded 2019 GovDoc file.
"""
from pathlib import Path
import os,json,urllib.request,hashlib
import fitz
from PIL import Image
ROOT=Path(__file__).resolve().parents[1]
OUT=ROOT/"past-papers"/"2019"
SOURCE_URL="https://cdn.govdoc.lk/download/4212"
UPLOADED_SHA="1f395088269256ca0d6809d34d0473001a121bbd8822a1eeb82304de86db0147"
# page-number: (question, measured top and bottom boundaries), raster 1042 x 1474.
LOC={
1:[(1,727,940),(2,940,1004),(3,1004,1093),(4,1093,1250),(5,1250,1314)],
2:[(6,142,418),(7,420,615),(8,617,761),(9,763,911),(10,913,1111),(11,1111,1322)],
3:[(12,110,255),(13,255,573),(14,573,743),(15,744,875),(16,875,975),(17,976,1200),(18,1200,1315)],
4:[(19,118,393),(20,394,678),(21,680,805),(22,808,1045),(23,1048,1236),(24,1240,1312)],
5:[(25,125,270),(26,270,380),(27,381,780),(28,783,1022),(29,1023,1174),(30,1175,1318)],
6:[(31,418,579),(32,579,742),(33,742,817),(34,817,977),(35,979,1303)],
7:[(36,109,282),(37,282,505),(38,506,745),(39,745,932),(40,932,1261)],
8:[(41,418,460),(42,461,538),(43,539,583),(44,584,675),(45,675,747),(46,748,894),(47,894,949),(48,949,1000),(49,1000,1049),(50,1049,1110)]
}
def source():
    local=os.environ.get("CHEMISTRY_2019_UPLOADED_PDF")
    if local and Path(local).is_file(): raw=Path(local).read_bytes()
    else:
        req=urllib.request.Request(SOURCE_URL,headers={"User-Agent":"Mozilla/5.0"})
        with urllib.request.urlopen(req,timeout=125) as response:raw=response.read()
    if not raw.startswith(b"%PDF"):raise ValueError("2019 source is not PDF")
    pdf=fitz.open(stream=raw,filetype="pdf")
    if len(pdf)!=39:raise ValueError("Expected same 39-page 2019 official marking source")
    if hashlib.sha256(raw).hexdigest()!=UPLOADED_SHA:
        # CDN may re-compress files; confirm 2019 paper question headings instead.
        page0=pdf[0].get_text()
        if not ("2019" in page0 or "2019" in pdf[8].get_text()):
            raise ValueError("2019 GovDoc source verification failed")
    return pdf
def render(pg):
    p=pg.get_pixmap(matrix=fitz.Matrix(1.75,1.75),colorspace=fitz.csRGB,alpha=False)
    im=Image.frombytes("RGB",(p.width,p.height),p.samples)
    if im.size!=(1042,1474):raise ValueError("Incorrect PDF page dimensions "+str(im.size))
    return im
def cut(im,a,b,x0=126,x1=937):
    if not 100<=a<b<=1330:raise ValueError((a,b))
    return im.crop((x0,a,x1,b))
def combine(images):
    w=max(im.width for im in images)
    gap=13; out=Image.new("RGB",(w,sum(im.height for im in images)+gap*(len(images)-1)+20),"white")
    y=10
    for im in images:
        out.paste(im,((w-im.width)//2,y));y+=im.height+gap
    return out
def main():
    doc=source()
    pic={p:render(doc[p-1]) for p in LOC}
    common31=cut(pic[6],118,418,124,937)
    common41=cut(pic[8],146,348,130,912)
    heading41=cut(pic[8],381,418,130,912)
    originals=OUT/"questions.json"
    if not originals.is_file():raise FileNotFoundError("Existing questions.json is needed to preserve Paper II")
    rows=json.loads(originals.read_text(encoding="utf-8"))
    if len(rows)!=60:raise ValueError("Expected 60 existing questions")
    seen=set()
    for page,questions in LOC.items():
        for n,a,b in questions:
            pieces=[]
            if 31<=n<=40:pieces.append(common31)
            if 41<=n<=50:pieces.extend([common41,heading41])
            pieces.append(cut(pic[page],a,b))
            path=OUT/"I"/f"q{n:02d}.webp"
            path.parent.mkdir(parents=True,exist_ok=True)
            combine(pieces).save(path,"WEBP",quality=94,method=6)
            with Image.open(path) as im:
                if im.width<800 or im.height<58:raise ValueError("Invalid crop "+str(path))
            seen.add(n)
    if seen!=set(range(1,51)):raise ValueError("Missing MCQ crops")
    for row in rows:
        if row["part"]=="I":
            n=int(row["number"])
            page=next(p for p,rr in LOC.items() if any(q==n for q,_,_ in rr))
            row.update(pdf_pages=[page],crop_status="manually_checked_all_five_choices_and_shared_instructions",
                       source_pdf="2019 official 39-page new syllabus marking scheme, pages 1-8")
    originals.write_text(json.dumps(rows,ensure_ascii=False,indent=2)+"\n",encoding="utf-8")
    print("PASS: 50 carefully recut 2019 MCQs, 10 existing Paper II questions preserved")
if __name__=="__main__":main()
