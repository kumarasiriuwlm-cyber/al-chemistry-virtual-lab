#!/usr/bin/env python3
"""Export the 2019 new-syllabus Sinhala A/L Chemistry questions as separate WebP images."""
from pathlib import Path
import os,json,urllib.request
import fitz
from PIL import Image

ROOT=Path(__file__).resolve().parents[1]
OUT=ROOT/'past-papers'/'2019'
BASE='https://cdn.alevelapi.com/Prod/documents/2019/chemistry/'
PAPERS={
 'I':'2019-AL-CHEMISTRY-PART-I-MCQ-PAPER-NEW-SYLLABUS-SINHALA-MEDIUM-AlevelApi-PDF.pdf',
 'II':'2019-AL-CHEMISTRY-PART-II-PAPER-NEW-SYLLABUS-SINHALA-MEDIUM-AlevelApi-PDF-1.pdf'
}
# 1-based source page and vertical starting pixel, for 1042x1474 raster images.
MCQ=[
(1,1,721),(2,1,945),(3,1,1019),(4,1,1093),(5,1,1267),
(6,2,122),(7,2,391),(8,2,590),(9,2,758),(10,2,913),(11,2,1136),
(12,3,68),(13,3,231),(14,3,566),(15,3,753),(16,3,886),(17,3,987),(18,3,1226),
(19,4,90),(20,4,384),(21,4,651),(22,4,815),(23,4,1063),(24,4,1252),
(25,5,81),(26,5,237),(27,5,346),(28,5,792),(29,5,1022),(30,5,1176),
(31,6,401),(32,6,578),(33,6,739),(34,6,836),(35,6,1015),
(36,7,79),(37,7,260),(38,7,506),(39,7,767),(40,7,955),
(41,8,360),(42,8,421),(43,8,498),(44,8,551),(45,8,650),(46,8,725),(47,8,887),(48,8,942),(49,8,994),(50,8,1053)
]
ESSAYS={
1:[(2,130,1355),(3,74,1355)],
2:[(4,78,1355),(5,70,955)],
3:[(5,955,1358),(6,75,1355)],
4:[(7,76,1358),(8,75,1050)],
5:[(9,453,1365)],
6:[(10,80,1360)],
7:[(11,84,1360)],
8:[(12,155,645)],
9:[(12,645,1360),(13,79,1100)],
10:[(14,75,1360),(15,84,727)]
}
def raster(part):
 name=PAPERS[part]
 local=os.environ.get('CHEMISTRY_2019_PDF_DIR')
 if local and (Path(local)/name).is_file():
  pdf=fitz.open(Path(local)/name)
 else:
  request=urllib.request.Request(BASE+name,headers={
   'User-Agent':'Mozilla/5.0 (educational A/L Chemistry archive)',
   'Referer':'https://www.alevelapi.com/'})
  with urllib.request.urlopen(request,timeout=110) as response:
   raw=response.read()
  if not raw.startswith(b'%PDF'):
   raise ValueError('Downloaded content is not a PDF: '+name)
  pdf=fitz.open(stream=raw,filetype='pdf')
 imgs={}
 with pdf:
  for n,page in enumerate(pdf,1):
   pix=page.get_pixmap(matrix=fitz.Matrix(1.75,1.75),colorspace=fitz.csRGB,alpha=False)
   imgs[n]=Image.frombytes('RGB',(pix.width,pix.height),pix.samples)
 return imgs
def clip(im,y0,y1):
 return im.crop((75,max(50,y0),955,min(im.height-90,y1)))
def join(parts,gap=17):
 if len(parts)==1:return parts[0]
 w=max(p.width for p in parts)
 canvas=Image.new('RGB',(w,sum(p.height for p in parts)+gap*(len(parts)-1)),'white')
 y=0
 for part in parts:
  canvas.paste(part,((w-part.width)//2,y))
  y+=part.height+gap
 return canvas
def save(im,path):
 path.parent.mkdir(parents=True,exist_ok=True)
 im.save(path,format='WEBP',quality=93,method=6)
def main():
 pages_i=raster('I')
 pages_ii=raster('II')
 assert len(pages_i)==9 and len(pages_ii)==16,(len(pages_i),len(pages_ii))
 assert len(MCQ)==50 and len(ESSAYS)==10
 records=[]
 shared_31=clip(pages_i[6],93,397)
 shared_41=clip(pages_i[8],91,331)
 for idx,(q,page,start) in enumerate(MCQ):
  if idx+1<len(MCQ) and MCQ[idx+1][1]==page:
   end=MCQ[idx+1][2]-3
  else:
   end={1:1360,2:1360,3:1360,4:1360,5:1350,6:1358,7:1320,8:1123}.get(page,1360)
  if q==40:end=1305
  if q==50:end=1137
  crop=clip(pages_i[page],start-2,end)
  if 31<=q<=40:crop=join([shared_31,crop])
  if 41<=q<=50:crop=join([shared_41,crop])
  path=OUT/'I'/f'q{q:02d}.webp'
  save(crop,path)
  records.append({'year':2019,'part':'I','number':q,'type':'mcq',
   'image':path.relative_to(ROOT).as_posix(),'pdf_pages':[page],'syllabus':'new'})
 for q,spans in ESSAYS.items():
  image=join([clip(pages_ii[p],y0,y1) for p,y0,y1 in spans])
  path=OUT/'II'/f'q{q:02d}.webp'
  save(image,path)
  records.append({'year':2019,'part':'II','number':q,
   'type':'structured_essay' if q<=4 else 'essay',
   'image':path.relative_to(ROOT).as_posix(),
   'pdf_pages':[p for p,_,_ in spans],'syllabus':'new'})
 OUT.mkdir(parents=True,exist_ok=True)
 (OUT/'questions.json').write_text(json.dumps(records,ensure_ascii=False,indent=2)+'\n',encoding='utf-8')
 print('Exported 60 questions from 2019 new-syllabus PDFs')
if __name__=='__main__':
 main()
