#!/usr/bin/env python3
"""Re-crop the user's exact 27-page Sinhala 2024 Past Papers Wiki scan.
Verify SHA-256 before publishing. Preserves complete options, tables, diagrams
and continuation pages; avoids the older AlevelApi paper extraction source.
"""
from pathlib import Path
import os,hashlib,json,urllib.request
import fitz
from PIL import Image

ROOT=Path(__file__).resolve().parents[1]
URL="https://pastpapers.wiki/download/37759/2024-a-l-sm-past-papers/101453/2024-al-chemistry-past-paper-sinhala-medium-past-papers-wiki.pdf"
SHA="0a52bc8abfe417c60e17167d13e3f0f0d0d122362b90fa04b98e67d2f7981586"
OUT=ROOT/"past-papers"/"2024"
MCQ={
1:(1,676,752),2:(1,752,992),3:(1,992,1062),4:(1,1062,1158),5:(1,1158,1305),6:(1,1305,1404),
7:(2,134,300),8:(2,300,485),9:(2,485,1030),10:(2,1030,1184),11:(2,1184,1340),12:(2,1340,1444),
13:(3,130,636),14:(3,636,891),15:(3,891,1156),16:(3,1156,1286),17:(3,1286,1428),
18:(4,130,366),19:(4,366,696),20:(4,696,1001),21:(4,1001,1375),
22:(5,135,343),23:(5,343,742),24:(5,742,1133),25:(5,1133,1442),
26:(6,134,343),27:(6,343,537),28:(6,537,991),29:(6,991,1156),30:(6,1156,1407),
31:(7,481,698),32:(7,698,884),33:(7,884,1201),34:(7,1201,1362),
35:(8,131,590),36:(8,590,731),37:(8,731,851),38:(8,851,1057),39:(8,1057,1240),40:(8,1240,1432),
41:(9,411,511),42:(9,511,633),43:(9,633,742),44:(9,742,789),45:(9,789,891),
46:(9,891,1006),47:(9,1006,1092),48:(9,1092,1181),49:(9,1181,1261),50:(9,1261,1345)}
PAPER_II={
1:[(12,190,1405),(13,112,1365)],
2:[(14,113,1410),(15,110,704)],
3:[(15,704,1410),(16,111,1405),(17,112,377)],
4:[(17,377,1405),(18,113,1391)],
5:[(19,482,1400)],6:[(20,122,1387)],7:[(21,117,1395)],8:[(22,208,1390)],
9:[(23,119,1390),(24,120,696)],
10:[(24,696,1391),(25,116,695)]}
def get_pdf():
    local=os.environ.get("CHEM_2024_UPLOADED_PDF")
    if local:
        data=Path(local).read_bytes()
    else:
        urls=[URL,"https://pastpapers.wiki/wp-admin/admin-ajax.php?action=wpfd&task=file.download&wpfd_category_id=37759&wpfd_file_id=101453"]
        problems=[]
        data=None
        for url in urls:
            try:
                req=urllib.request.Request(url,headers={"User-Agent":"Mozilla/5.0","Accept":"application/pdf,*/*","Referer":"https://pastpapers.wiki/"})
                with urllib.request.urlopen(req,timeout=150) as resp:maybe=resp.read()
                d=hashlib.sha256(maybe).hexdigest()
                if d!=SHA:
                    problems.append("SHA mismatch: "+d)
                    continue
                data=maybe
                break
            except Exception as exc:problems.append(str(exc))
        if data is None:raise RuntimeError("No verified uploaded PDF available: "+"; ".join(problems))
    actual=hashlib.sha256(data).hexdigest()
    if actual!=SHA:raise ValueError("Uploaded source mismatch: "+actual)
    doc=fitz.open(stream=data,filetype="pdf")
    if len(doc)!=27 or round(doc[0].rect.width)!=595 or round(doc[0].rect.height)!=842:
        raise ValueError("Expected uploaded 27-page 595x842-point PDF")
    print("VERIFIED exact uploaded 2024 Sinhala source SHA256",actual,flush=True)
    return doc
def render(doc,page):
    pix=doc[page-1].get_pixmap(matrix=fitz.Matrix(1.8,1.8),colorspace=fitz.csRGB,alpha=False)
    im=Image.frombytes("RGB",(pix.width,pix.height),pix.samples)
    if im.size!=(1071,1516):raise ValueError("Source page geometry changed")
    return im
def cut(image,top,bottom):
    if not 75<=top<bottom<=1460:raise ValueError("Invalid question crop")
    return image.crop((83,top,1018,bottom))
def combine(parts):
    if len(parts)==1:return parts[0]
    w=max(p.width for p in parts)
    h=sum(p.height for p in parts)+14*(len(parts)-1)+12
    out=Image.new("RGB",(w,h),"white");y=6
    for p in parts:
        out.paste(p,((w-p.width)//2,y))
        y+=p.height+14
    return out
def save(im,part,n):
    p=OUT/part/("q%02d.webp"%n)
    p.parent.mkdir(parents=True,exist_ok=True)
    im.save(p,"WEBP",quality=94,method=6)
    if p.stat().st_size<1700 or im.width<800 or im.height<45:
        raise ValueError("Question image failed size test: "+str(p))
    return p.relative_to(ROOT).as_posix()
def main():
    doc=get_pdf()
    nums={x[0] for x in MCQ.values()}|{p for spans in PAPER_II.values() for p,_,_ in spans}
    pages={n:render(doc,n) for n in nums}
    intro31=cut(pages[7],133,480)
    intro41=cut(pages[9],134,372)
    header41=cut(pages[9],373,411)
    rows=[]
    for q,(page,top,bottom) in MCQ.items():
        parts=[cut(pages[page],top,bottom)]
        if 31<=q<=34:parts.insert(0,intro31)
        if 41<=q<=50:parts=[intro41,header41]+parts
        path=save(combine(parts),"I",q)
        rows.append(dict(year=2024,part="I",number=q,type="mcq",image=path,language="si",pdf_pages=[page],
                         source_type="user_uploaded_2024_pastpapers_wiki_exact_scan",contains_answers=False))
    for q,spans in PAPER_II.items():
        path=save(combine([cut(pages[p],top,bottom) for p,top,bottom in spans]),"II",q)
        rows.append(dict(year=2024,part="II",number=q,type="structured_essay" if q<=4 else "essay",
                         image=path,language="si",pdf_pages=[p for p,_,_ in spans],
                         source_type="user_uploaded_2024_pastpapers_wiki_exact_scan",contains_answers=False))
    if len(rows)!=60 or len({(x["part"],x["number"]) for x in rows})!=60:
        raise ValueError("Expected exactly 50 MCQs + 10 essays")
    (OUT/"questions.json").write_text(json.dumps(rows,ensure_ascii=False,indent=2)+"\n",encoding="utf-8")
    print("PASS: all 60 complete Sinhala 2024 question images from exact uploaded PDF",flush=True)
if __name__=="__main__":main()
