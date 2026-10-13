#!/usr/bin/env python3
"""Replace 2023 crops using verified 15-page 2023(2024) Sinhala photographed scan.
Restore all 50 MCQs and essays 5-10; preserve structured essays 1-4 from Paper II A.
"""
import os,json,hashlib,urllib.request
from pathlib import Path
import fitz,cv2,numpy as np
from PIL import Image
ROOT=Path(__file__).resolve().parents[1]
OUT=ROOT/"past-papers"/"2023"
URL="https://pastpapers.wiki/download/27227/2023-2024-a-l/70939/20232024-al-chemistry-paper-sinhala-medium.pdf"
SHA="6bbcbbbe492af8ddfd457bcf77b79205e2d9e9ac6d9ab1339bcbbac6c6e056d4"
FINGERPRINTS={
1:"fffefffaffde7d887c007ffc3f7c3fe038002000000020003e003e003c003e00",
2:"f70037003d0070007fc07f003fc03f4064807f981c5a3e817f817f81ff83ff8f",
8:"78003f803fc03ff40d007ff87ffe7ec078fc7fff7ef87f807eff7eff00c00000",
9:"9ffdfffcf00707f01fc03fc03f0c3e803f8808000f803ec01c003fff3fb03f8e",
13:"3fc51ff01fff3c0111860ffe0ffc0ff43df41ffe0ffe1fc03fe933080fb80f3d",
15:"3f403f807f003d8000003fc03ff83ffc3fe03fff3bff3f003a203cb23ffe03f0"}
MCQ={
1:(1,588,706),2:(1,705,910),3:(1,910,1039),4:(1,1039,1205),5:(1,1206,1382),
6:(2,44,309),7:(2,309,478),8:(2,478,669),9:(2,668,825),10:(2,824,1158),11:(2,1157,1357),
12:(3,48,388),13:(3,387,645),14:(3,645,763),15:(3,761,894),16:(3,892,1134),17:(3,1133,1381),
18:(4,45,474),19:(4,478,647),20:(4,650,993),21:(4,996,1310),
22:(5,45,225),23:(5,226,499),24:(5,502,738),25:(5,738,975),26:(5,976,1071),27:(5,1072,1330),
28:(6,40,339),29:(6,339,513),30:(6,515,812),31:(6,1180,1352),
32:(7,45,237),33:(7,237,377),34:(7,375,522),35:(7,520,694),36:(7,693,871),
37:(7,868,1007),38:(7,1005,1194),39:(7,1193,1350),40:(8,36,194),
41:(8,479,538),42:(8,538,597),43:(8,596,680),44:(8,680,734),45:(8,734,803),
46:(8,803,867),47:(8,866,977),48:(8,976,1044),49:(8,1043,1123),50:(8,1122,1200)}
ESSAY={5:[(9,367,1355)],6:[(10,40,1365)],7:[(11,46,1367)],
8:[(12,120,1220)],9:[(13,50,1352),(14,47,1206)],10:[(15,42,1368)]}
def fingerprint(page):
    pix=page.get_pixmap(matrix=fitz.Matrix(.7,.7),colorspace=fitz.csGRAY,alpha=False)
    im=Image.frombytes("L",(pix.width,pix.height),pix.samples)
    im=im.crop((int(im.width*.05),int(im.height*.05),int(im.width*.95),int(im.height*.95))).resize((16,16))
    values=list(im.getdata());mean=sum(values)/len(values)
    return int("".join("1" if v<mean else "0" for v in values),2)
def get_pdf():
    local=os.environ.get("CHEMISTRY_2023_PHOTO_PDF")
    if local:data=Path(local).read_bytes()
    else:
        req=urllib.request.Request(URL,headers={"User-Agent":"Mozilla/5.0","Referer":"https://pastpapers.wiki/","Accept":"application/pdf,*/*"})
        with urllib.request.urlopen(req,timeout=150) as response:data=response.read()
    if not data.startswith(b"%PDF"):raise ValueError("PDF source failed")
    doc=fitz.open(stream=data,filetype="pdf")
    if len(doc)!=15 or (round(doc[0].rect.width),round(doc[0].rect.height))!=(595,842):
        raise ValueError("Expected 15 pages in 595x842-point source")
    digest=hashlib.sha256(data).hexdigest()
    if digest!=SHA:
        for i,value in FINGERPRINTS.items():
            diff=(fingerprint(doc[i-1])^int(value,16)).bit_count()
            print("Visually verified source page",i,"distance",diff,flush=True)
            if diff>20:raise ValueError("Source does not match user's 2023(2024) PDF")
    print("Verified matching 15-page 2023 photographed Sinhala PDF, SHA256",digest,flush=True)
    return doc
def rectify(page):
    pix=page.get_pixmap(matrix=fitz.Matrix(1.75,1.75),colorspace=fitz.csRGB,alpha=False)
    im=Image.frombytes("RGB",(pix.width,pix.height),pix.samples)
    original=cv2.cvtColor(np.array(im),cv2.COLOR_RGB2BGR)
    grey=cv2.cvtColor(original,cv2.COLOR_BGR2GRAY)
    mask=cv2.adaptiveThreshold(cv2.GaussianBlur(grey,(5,5),0),255,cv2.ADAPTIVE_THRESH_GAUSSIAN_C,cv2.THRESH_BINARY_INV,31,15)
    mask=cv2.dilate(mask,np.ones((5,5),np.uint8),iterations=2)
    contours,_=cv2.findContours(mask,cv2.RETR_EXTERNAL,cv2.CHAIN_APPROX_SIMPLE)
    contours=sorted(contours,key=cv2.contourArea,reverse=True)
    corners=None
    for c in contours:
        if cv2.contourArea(c)<300000:break
        polygon=cv2.approxPolyDP(c,.02*cv2.arcLength(c,True),True)
        if len(polygon)==4:
            corners=polygon.reshape(4,2)
            break
    if corners is None:
        x,y,w,h=cv2.boundingRect(contours[0])
        corners=np.array([[x,y],[x+w,y],[x+w,y+h],[x,y+h]])
    pts=corners.astype("float32")
    summ=pts.sum(axis=1);diff=np.diff(pts,axis=1)[:,0]
    tl,tr,br,bl=pts[np.argmin(summ)],pts[np.argmin(diff)],pts[np.argmax(summ)],pts[np.argmax(diff)]
    src=np.array([tl,tr,br,bl],dtype="float32")
    width=int(max(np.linalg.norm(br-bl),np.linalg.norm(tr-tl)))
    height=int(max(np.linalg.norm(tr-br),np.linalg.norm(tl-bl)))
    target=np.array([[0,0],[width-1,0],[width-1,height-1],[0,height-1]],dtype="float32")
    warped=cv2.warpPerspective(original,cv2.getPerspectiveTransform(src,target),(width,height),borderValue=(255,255,255))
    final=cv2.resize(warped,(920,int(warped.shape[0]*920/warped.shape[1])),interpolation=cv2.INTER_CUBIC)
    return Image.fromarray(cv2.cvtColor(final,cv2.COLOR_BGR2RGB))
def clip(img,upper,lower):
    if not 0<=upper<lower<=img.height:raise ValueError("Cropping beyond page boundary "+str((img.height,upper,lower)))
    return img.crop((0,upper,img.width,lower))
def stack(parts):
    if len(parts)==1:return parts[0]
    width=max(x.width for x in parts)
    height=sum(x.height for x in parts)+14*(len(parts)-1)+12
    combined=Image.new("RGB",(width,height),"white");y=6
    for part in parts:
        combined.paste(part,((width-part.width)//2,y))
        y+=part.height+14
    return combined
def save(im,part,n):
    path=OUT/part/("q%02d.webp"%n)
    path.parent.mkdir(parents=True,exist_ok=True)
    im.save(path,"WEBP",quality=94,method=6)
    if path.stat().st_size<1800 or im.width<850 or im.height<40:
        raise ValueError("Crop is unexpectedly small: "+str(path))
    return path.relative_to(ROOT).as_posix()
def main():
    doc=get_pdf()
    pages={i:rectify(doc[i-1]) for i in range(1,16)}
    common31=clip(pages[6],815,1178)
    common41=clip(pages[8],196,478)
    manifest=OUT/"questions.json"
    original=json.loads(manifest.read_text(encoding="utf-8"))
    kept={row["number"]:row for row in original if row["part"]=="II" and row["number"]<=4}
    if set(kept)!=set(range(1,5)):raise ValueError("Cannot preserve structured essays 1-4")
    rows=[]
    for q,(page,upper,lower) in MCQ.items():
        parts=[clip(pages[page],upper,lower)]
        if 31<=q<=40:parts.insert(0,common31)
        if 41<=q<=50:parts.insert(0,common41)
        image=save(stack(parts),"I",q)
        rows.append(dict(year=2023,part="I",number=q,type="mcq",image=image,pdf_pages=[page],language="si",source_type="rectified_user_2023_15_page_scan",contains_answers=False))
    rows.extend(kept[q] for q in range(1,5))
    for q,spans in ESSAY.items():
        image=save(stack([clip(pages[p],upper,lower) for p,upper,lower in spans]),"II",q)
        rows.append(dict(year=2023,part="II",number=q,type="essay",image=image,pdf_pages=[p for p,_,_ in spans],language="si",source_type="rectified_user_2023_15_page_scan",contains_answers=False))
    if len(rows)!=60 or sum(x["part"]=="I" for x in rows)!=50 or sum(x["part"]=="II" for x in rows)!=10:
        raise ValueError("Expected exactly 50 MCQ and 10 Paper II records")
    manifest.write_text(json.dumps(rows,ensure_ascii=False,indent=2)+"\n",encoding="utf-8")
    print("PASS: Replaced 50 MCQs and 6 essays using new rectified scan, preserved all four structured essays",flush=True)
if __name__=="__main__":main()
