/* Nested 2015 question-image tab inside Chemistry Exam Practice downloads. */
(function(){
"use strict";
var p=window.ChemistryPaperDownloads;
if(!p||typeof p.render!=="function")return;
var oldRender=p.render;
var area="papers",part="I",year=2015,activeLanguage="si";
var translations={
si:{p:"සම්පූර්ණ ප්‍රශ්න පත්‍ර බාගන්න",q:"2015–2018 එක් එක් ප්‍රශ්නය",title:"2015 විභාග ප්‍රශ්න — වෙන් කළ රූප",intro:"මුල් ප්‍රශ්න පත්‍රයෙන් වෙන් කළ ප්‍රශ්න 60ක්. ප්‍රශ්නයක් තට්ටු කළ විට එය නව ටැබයක විවෘත වේ.",one:"I පත්‍රය • බහුවරණ 50",two:"II පත්‍රය • රචනා 10",label:"ප්‍රශ්න අංක",open:"ප්‍රශ්නය බලන්න ↗",structured:"ව්‍යුහගත රචනා",essay:"රචනා",note:"මුල් 2015 ප්‍රශ්න පත්‍රය අනුව පමණි. Teachers’ Guide වර්ගීකරණය තවම කර නැත."},
en:{p:"Download full past papers",q:"2015–2018 individual questions",title:"2015 Chemistry — individual question crops",intro:"All 60 questions cut from the original paper. Tap a question to open the image in a new tab.",one:"Part I • 50 MCQs",two:"Part II • 10 essays",label:"Question",open:"Open question ↗",structured:"Structured essay",essay:"Essay",note:"Syllabus mapping to the Teachers’ Guide has not yet been completed."},
ta:{p:"முழு வினாத்தாள்கள்",q:"2015–2018 தனி வினாக்கள்",title:"2015 வேதியியல் — தனி வினாக்கள்",intro:"2015 ஆம் ஆண்டு அசல் வினாத்தாளின் 60 வினாக்கள். திறக்க ஒரு வினாவைத் தட்டவும்.",one:"பகுதி I • MCQ 50",two:"பகுதி II • கட்டுரை 10",label:"வினா",open:"வினாவைத் திற ↗",structured:"கட்டமைக்கப்பட்ட கட்டுரை",essay:"கட்டுரை",note:"ஆசிரியர் வழிகாட்டிக்கு ஏற்ப வகைப்படுத்தல் இன்னும் செய்யப்படவில்லை."}
};
var css=[
'.chem2015Nav{display:grid;grid-template-columns:1fr 1fr;gap:8px;padding:5px;border:1px solid #d5e7e3;background:#eff8f5;border-radius:15px;margin-bottom:18px}',
'.chem2015Nav button{border:0;border-radius:11px;background:transparent;color:#326b6b;font-size:12px;font-weight:850;min-height:53px;cursor:pointer;padding:9px}',
'.chem2015Nav button[aria-selected="true"]{background:#0b7570;color:#fff;box-shadow:0 4px 15px rgba(6,78,74,.15)}',
'.chem2015Header{padding:18px 20px;border-radius:17px;background:linear-gradient(135deg,#eaf8f3,#f3f8ff);border:1px solid #cbe7df;margin-bottom:16px}',
'.chem2015Header h2{font-size:clamp(18px,2.5vw,24px);color:#126a62;margin:0 0 6px}',
'.chem2015Header p,.chem2015Note{font-size:12px;line-height:1.85;color:#496d70;margin:0}',
'.chem2015PartNav{display:flex;flex-wrap:wrap;gap:10px;margin-bottom:16px}',
'.chem2015PartNav button{flex:1;border:1px solid #add9cf;color:#176d66;background:#fff;font-size:12px;font-weight:800;padding:11px;border-radius:999px;cursor:pointer}',
'.chem2015PartNav button[aria-selected="true"]{background:#166e69;color:#fff}',
'.chem2015Grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:12px}',
'.chem2015Item{display:block;text-decoration:none!important;color:#193b43!important;background:#fff;border:1px solid #d7e7e3;border-radius:15px;padding:12px;box-shadow:0 5px 18px rgba(10,54,64,.04);transition:transform .15s,border-color .15s}',
'.chem2015Item:hover,.chem2015Item:focus-visible{transform:translateY(-2px);border-color:#4eaea1;outline-offset:3px}',
'.chem2015Preview{display:block;height:95px;overflow:hidden;background:#f8fbfa;border:1px solid #e2ece9;border-radius:9px;margin-bottom:10px;position:relative}',
'.chem2015Preview img{display:block;width:100%;height:auto;object-fit:contain;object-position:top center}',
'.chem2015Preview:after{content:"";position:absolute;bottom:0;left:0;right:0;height:23px;background:linear-gradient(transparent,#f8fbfa)}',
'.chem2015Item strong{display:block;font-size:15px}',
'.chem2015Item small{display:block;color:#698385;font-size:10px;margin-top:3px}',
'.chem2015Open{color:#078179;display:block;margin-top:9px;font-size:12px;font-weight:850}',
'.chem2015Note{margin:16px 0 24px}',
'.chem2015Section [hidden]{display:none!important}',
'.chem2015Years{display:flex;gap:9px;flex-wrap:wrap;margin:0 0 15px}',
'.chem2015Years button{min-width:95px;border:1px solid #b5ded3;background:#fff;color:#176963;border-radius:12px;padding:10px 17px;font-size:14px;font-weight:900;cursor:pointer}',
'.chem2015Years button[aria-selected="true"]{background:#0b7570;color:#fff}',
'@media(max-width:720px){.chem2015Grid{grid-template-columns:repeat(2,minmax(0,1fr))}}',
'@media(max-width:490px){.chem2015Grid{gap:9px}.chem2015Item{padding:8px}.chem2015Preview{height:74px}.chem2015Item strong{font-size:13px}.chem2015Nav button{font-size:11px;line-height:1.5}}'
].join('');
if(!document.getElementById("chemistry-2015-css")){var st=document.createElement("style");st.id="chemistry-2015-css";st.textContent=css;document.head.appendChild(st)}
function cards(type,t){
var max=type==="I"?50:10,out="";
for(var i=1;i<=max;i++){
var n=String(i).padStart(2,"0");
var url="./past-papers/"+year+"/"+type+"/q"+n+".webp";
var kind=type==="I"?"MCQ":i<=4?t.structured:t.essay;
out+='<a class="chem2015Item" href="'+url+'" target="_blank" rel="noopener noreferrer"><span class="chem2015Preview"><img src="'+url+'" loading="lazy" decoding="async" alt=""></span><strong>'+t.label+' '+n+'</strong><small>'+year+' • '+type+' • '+kind+'</small><span class="chem2015Open">'+t.open+'</span></a>';
}
return out;
}
function questionMarkup(lang){
var t=translations[lang]||translations.si;
return '<div class="chem2015Header"><h2>📘 '+t.title.replace(/2015/g,String(year))+'</h2><p>'+t.intro.replace(/2015/g,String(year))+'</p></div><div class="chem2015Years" role="tablist" aria-label="Year"><button type="button" data-chem-year="2015" aria-selected="'+(year===2015)+'">2015</button><button type="button" data-chem-year="2016" aria-selected="'+(year===2016)+'">2016</button><button type="button" data-chem-year="2017" aria-selected="'+(year===2017)+'">2017</button><button type="button" data-chem-year="2018" aria-selected="'+(year===2018)+'">2018</button></div><div class="chem2015PartNav" role="tablist"><button type="button" data-2015-part="I" aria-selected="'+(part==="I")+'">'+t.one+'</button><button type="button" data-2015-part="II" aria-selected="'+(part==="II")+'">'+t.two+'</button></div><div class="chem2015Grid" id="chem2015PartOne" '+(part==="I"?'':'hidden')+'>'+cards("I",t)+'</div><div class="chem2015Grid" id="chem2015PartTwo" '+(part==="II"?'':'hidden')+'>'+cards("II",t)+'</div><p class="chem2015Note">'+t.note+(year===2018?'<br><a href="./2018-questions.html" target="_blank" rel="noopener noreferrer" style="display:inline-block;margin-top:9px;font-weight:850;color:#0c786f">'+(lang==="si"?"2018 සඳහා වෙනම පිටුව විවෘත කරන්න ↗":lang==="ta"?"2018 தனிப் பக்கத்தைத் திறக்கவும் ↗":"Open separate 2018 page ↗")+'</a>':'')+'</p>';
}
p.render=function(lang){
activeLanguage=lang;
var t=translations[lang]||translations.si;
return '<section class="chem2015Section"><div class="chem2015Nav" role="tablist"><button type="button" data-2015-view="papers" aria-selected="'+(area==="papers")+'">📥 '+t.p+'</button><button type="button" data-2015-view="questions" aria-selected="'+(area==="questions")+'">📘 '+t.q+'</button></div><div id="chem2015Papers" '+(area==="papers"?'':'hidden')+'>'+oldRender(lang)+'</div><div id="chem2015Questions" '+(area==="questions"?'':'hidden')+'>'+questionMarkup(lang)+'</div></section>';
};
p.bind=function(){
var root=document.querySelector(".chem2015Section");if(!root)return;
root.addEventListener("click",function(event){
var button=event.target.closest("button[data-2015-view],button[data-2015-part],button[data-chem-year]");
if(!button||!root.contains(button))return;
if(button.hasAttribute("data-2015-view")){
 area=button.getAttribute("data-2015-view");
 root.querySelectorAll("[data-2015-view]").forEach(function(x){x.setAttribute("aria-selected",x===button?"true":"false")});
 document.getElementById("chem2015Papers").hidden=area!=="papers";
 document.getElementById("chem2015Questions").hidden=area!=="questions";
}else if(button.hasAttribute("data-chem-year")){
 year=Number(button.getAttribute("data-chem-year"));
 document.getElementById("chem2015Questions").innerHTML=questionMarkup(activeLanguage);
}else if(button.hasAttribute("data-2015-part")){
 part=button.getAttribute("data-2015-part");
 root.querySelectorAll("[data-2015-part]").forEach(function(x){x.setAttribute("aria-selected",x===button?"true":"false")});
 document.getElementById("chem2015PartOne").hidden=part!=="I";
 document.getElementById("chem2015PartTwo").hidden=part!=="II";
}
});
};
})();
