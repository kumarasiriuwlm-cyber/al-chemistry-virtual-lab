/* Unit 12 • Chemical Equilibrium • connected to the established journey engine.
   Based on the NIE Sinhala Grade 13 Chemistry Resource Book, pp.77–232. */
(function(){
"use strict";
const source=window.U12_CHAPTERS,app=window.OrganicUnits;
if(!source||!app){console.error("Unit 12 source or journey engine missing");return}
const ix=l=>l==="si"?0:l==="ta"?2:1;
const esc=s=>String(s==null?"":s).replace(/[&<>"']/g,x=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[x]));
const captions={
si:["හැඳින්වීම","වැදගත් සංකල්පය","ගණනය හා සමීකරණය","යෙදුම / විභාග අවධානය"],
en:["Introduction","Key principle","Calculation and equations","Applications and practice"],
ta:["அறிமுகம்","முக்கிய கருத்து","கணக்கீடும் சமன்பாடும்","பயன்பாடுகள்"]
};
const optionSi={
equalRate:"වේග දෙක සමානයි",bothZero:"දෙකම ශූන්‍යයි",forwardFaster:"ඉදිරි වේගය වැඩියි",reverseFaster:"පසු වේගය වැඩියි",sameAmounts:"ප්‍රමාණ සමානයි",no:"නැත",yes:"ඔව්",always:"සෑමවිටම",never:"කිසිවිටෙකත් නැත",zero:"ශූන්‍යය",infinite:"අනන්තය",
onlySolids:"ඝන ද්‍රව්‍ය පමණි",noParticles:"අංශු නැත",equilibriumConcentrations:"සමතුලිත සාන්ද්‍රණ",initialOnly:"ආරම්භක අගයන් පමණි",randomValues:"අහඹු අගයන්",alwaysDouble:"සෑමවිටම දෙගුණ වේ",productsFavoured:"ඵල වාසිදායකයි",reactantsFavoured:"ප්‍රතික්‍රියක වාසිදායකයි",fastReaction:"වේගවත් ප්‍රතික්‍රියාවක්",zeroRate:"ශූන්‍ය වේගය",partialPressures:"අර්ධ පීඩන",pressureOnly:"පීඩනය පමණි",temperatureOnly:"උෂ්ණත්වය පමණි",massOnly:"ස්කන්ධය පමණි",gasOnly:"වායු පමණි",pureSolids:"ශුද්ධ ඝන",pureSolid:"ශුද්ධ ඝනය",pureSalt:"ශුද්ධ ලවණය",gases:"වායු",aqueousSpecies:"ජලීය අයන",atEquilibrium:"සමතුලිතයේ",forward:"ඉදිරි දිශාව",reverse:"පසුගාමී දිශාව",noReaction:"ප්‍රතික්‍රියා නැත",unstable:"අස්ථායී",rateConstant:"වේග නියතය",reject:"ප්‍රතික්ෂේප කරන්න",accept:"පිළිගන්න",double:"දෙගුණ කරන්න",ignoreUnits:"ඒකක නොසලකන්න",noShift:"දිශා වෙනසක් නැත",unchangedK:"K වෙනස් නොවේ",unchangedAlways:"වෙනස් නොවේ",doubleK:"K දෙගුණ වේ",negativeK:"ඍණ K",
base:"භෂ්මය",acid:"අම්ලය",oxidant:"ඔක්සිකාරකය",precipitate:"අවක්ෂේපය",electronAccept:"ඉලෙක්ට්‍රෝන යුගල ප්‍රතිග්‍රාහකයා",electronDonate:"ඉලෙක්ට්‍රෝන යුගල දායකයා",protonOnly:"ප්‍රෝටෝනය පමණි",neutralOnly:"උදාසීන පමණි",bothAcidBase:"අම්ලය හා භෂ්මය දෙකම",onlyAcid:"අම්ලය පමණි",onlyBase:"භෂ්මය පමණි",neither:"දෙකම නොවේ",strongerAcid:"වඩා ප්‍රබල අම්ලය",weakerAcid:"වඩා දුබල අම්ලය",neutralSalt:"උදාසීන ලවණය",moreSolid:"වැඩි ඝනයක්",basic:"භාෂ්මික",acidic:"ආම්ලික",neutral:"උදාසීන",metallic:"ලෝහමය",insoluble:"අද්‍රාව්‍ය",suppresses:"අඩු කරයි",enhancesAlways:"සෑමවිටම වැඩි කරයි",zeroForever:"සදාකාලික ශූන්‍යය",changesKa:"Ka වෙනස් කරයි",totalVolume:"අවසාන මුළු පරිමාව",above7:"7 ට වැඩියි",below7:"7 ට අඩුයි",exactly7:"හරියට 7 යි",alwaysZero:"සෑමවිටම ශූන්‍යයි",
burette:"බියුරෙට්ටුව",beaker:"බීකරය",thermometer:"උෂ්ණත්වමානය",funnel:"පුනීලය",pipette:"පයිපෙට්ටුව",manometer:"පීඩනමානය",balance:"තරාදිය",crucible:"කෲසිබලය",steepRegion:"ඉක්මන් pH වෙනස් ප්‍රදේශය",flaskColor:"ෆ්ලාස්කුවේ වර්ණය",buretteLength:"බියුරෙට්ටුවේ දිග",pH:"pH",pKa:"pKa",pKb:"pKb",weakAcidBase:"දුබල අම්ලය සහ සංයුග්මක භෂ්මය",strongAcidBase:"ප්‍රබල අම්ලය සහ භෂ්මය",strongAcidOnly:"ප්‍රබල අම්ලය පමණි",onlyWater:"ජලය පමණි",metalAndSalt:"ලෝහය හා ලවණය",
undersaturated:"අසන්තෘප්ත",exactlySaturated:"සන්තෘප්ත",decrease:"අඩුවේ",increase:"වැඩිවේ",increaseAlways:"සෑමවිටම වැඩිවේ",mixedConcentrations:"මිශ්‍රණයෙන් පසු සාන්ද්‍රණ",originalBeforeMix:"මිශ්‍රණයට පෙර සාන්ද්‍රණ",solidOnly:"ඝන පමණි",atomicNumber:"පරමාණුක ක්‍රමාංකය",colourOnly:"වර්ණය පමණි",timeOnly:"කාලය පමණි",volumeOnly:"පරිමාව පමණි",complete:"සම්පූර්ණයි",alwaysDry:"සෑමවිටම වියළියි",idealGas:"පරිපූර්ණ වායුව",containerColor:"බඳුනේ වර්ණය",stirringOnly:"කැලතීම පමණි",liquidVolumeOnly:"ද්‍රව පරිමාව පමණි",
triplePoint:"ත්‍රිත්ව ලක්ෂ්‍යය",criticalPoint:"විවේචනාත්මක ලක්ෂ්‍යය",freezingPoint:"හිමාංකය",originAlways:"මූල ලක්ෂ්‍යය",sublimation:"උත්ශ්‍රේණනය",condensation:"ඝනීභවනය",melting:"ද්‍රවීභවනය",freezing:"ඝන බවට පත්වීම",sublimates:"උත්ශ්‍රේණනය වේ",boilsAsLiquid:"ද්‍රව වී උතුරයි",meltsAsLiquid:"ද්‍රව ලෙස දියවේ",oxidizes:"ඔක්සිකරණය වේ",oxidized:"ඔක්සිකරණය කළ",vapour:"වාෂ්ප අවස්ථාව",salt:"ලවණය",
waterImmiscible:"ජලය සමඟ අමිශ්‍ර වාෂ්පශීලී",highlyWaterSoluble:"ජලයේ ඉතා ද්‍රාව්‍ය",nonvolatile:"වාෂ්පශීලී නොවන",belowBoth:"දෙකේම තාපාංකවලට අඩු",aboveBoth:"දෙකටම වඩා ඉහළ",always100:"සෑමවිටම 100 °C",condensed:"ඝනීභවනය කරයි",frozenOnly:"ශීත කරයි",leftUncaptured:"එලෙසම පිට කරයි",supervision:"අධීක්ෂණය සහිතව",homeAlone:"නිවසේ තනිව",sealedNoVent:"අවහිර කළ බඳුනක",bareHands:"අත් ආවරණ රහිතව",
separatoryFunnel:"වෙන්කිරීමේ පුනීලය",conserved:"සංරක්ෂණය වේ",unrelated:"සම්බන්ධ නැත",mol:"මෝල",buffer:"ස්වාරක්ෂක ද්‍රාවණය"
};
const opt=(token,lang)=>lang==="si"?(optionSi[token]||token):/^[a-z]+[A-Z]/.test(token)?token.replace(/([a-z])([A-Z])/g,"$1 $2").toLowerCase():token;
const shuf=(i,j)=>[0,1,2,3].map(k=>(k+(i+j)%4)%4);
const units=source.map((c,i)=>({
name:c.name,
ref:c.ref,pages:c.pages,
intro:[c.steps[0][1],c.steps[0][3],c.steps[0][4]],
steps:c.steps.map((st,j)=>({t:[st[0],captions.en[j],captions.ta[j]],d:[st[1],st[3],st[4]],eq:st[2]})),
qs:c.qs.map((q,j)=>{const list=q[2].split("|"),order=shuf(i,j);
return[q[0],q[1],c.name[2]+" — "+(j+1)+" : சரியான பதிலைத் தேர்ந்தெடுக்கவும்.",order.map(k=>list[k]),order.indexOf(q[3]),q[4]]})
}));
const saved={};["units","total","notes","meta","getDone","reset","gateUI","gateQuestions","ui","background","deep","sectionMedia","visual","assessments","bindAssessment"].forEach(k=>saved[k]=app[k]);
let pools={},state={};
function getDone(){try{let a=JSON.parse(localStorage.getItem("chem-unit12-mastered")||"[]"),done=[];if(!Array.isArray(a))return done;for(let k=0;k<units.length;k++){if(a.includes(k))done.push(k);else break}return done}catch(_){return[]}}
function notes(){let o={};["si","en","ta"].forEach(lang=>{let k=ix(lang);o[lang]=units.map(c=>({t:c.name[k],b:c.steps.map(st=>st.d[k]),f:c.steps.map(st=>st.eq).join(" • "),exam:[c.intro[k]]}))});return o}
function meta(){let o={};["si","en","ta"].forEach(lang=>{let k=ix(lang);o[lang]=units.map(c=>c.steps.map(st=>st.t[k]))});return o}
const dict={
si:{title:"රසායනික සමතුලිතතාව",sub:"13 ශ්‍රේණියේ NIE සම්පත් පොතේ 12 ඒකකය: ගතික සමතුලිතය, Kc/Kp, අම්ල–භෂ්ම, ස්වාරක්ෂක, ද්‍රාව්‍යතා ගුණිතය, වාෂ්ප පීඩනය හා ද්‍රව මිශ්‍රණ.",guide:"ඉගෙනුම් ගමන — ගතික සමතුලිතය → අයනික සමතුලිතය → ස්වාරක්ෂක → ද්‍රාව්‍යතාව → ද්‍රව/වාෂ්ප",source:"NIE රසායන විද්‍යා 13 ශ්‍රේණියේ සම්පත් පොත, භෞතික රසායනය II, ඒකක 12; මුද්‍රිත පිටු 77–232. සටහන් හා ප්‍රශ්න ඉගෙනුම් අරමුණින් නැවත සකසා ඇත."},
en:{title:"Chemical Equilibrium",sub:"NIE Grade 13 Chemistry Unit 12: dynamic equilibrium, equilibrium constants, ionic equilibria, buffers, Ksp, vapour pressure and binary solutions.",guide:"Journey — dynamic equilibrium → ionic equilibria → buffers → solubility → liquid and vapour",source:"NIE Grade 13 Chemistry Resource Book, Physical Chemistry Part II, Unit 12, printed pages 77–232. Original summaries and model questions."},
ta:{title:"வேதியியல் சமநிலை",sub:"NIE தரம் 13 அலகு 12: இயக்கச் சமநிலை, Kc/Kp, அமில-காரச் சமநிலை, தாங்கல் கரைசல்கள், Ksp மற்றும் ஆவி அழுத்தம்.",guide:"பயணம் — இயக்கச் சமநிலை → அயனிச் சமநிலை → தாங்கல் → கரைதிறன் → நிலைகள்",source:"NIE தரம் 13 இரசாயனவியல் வளநூல், அலகு 12, பக்கங்கள் 77–232. தனித்துவமான பாடச் சுருக்கங்களும் வினாக்களும்."}};
function ui(lang){const key=dict[lang]?lang:"en",t=dict[key];return{title:"Unit 12 — "+t.title,sub:t.sub,guide:t.guide,source:t.source,sections:units.map(c=>c.name[ix(key)])}}
function deep(){return source.map(c=>[[c.steps[0][0],c.steps[0][1]],[c.steps[2][0],c.steps[2][1]],["විභාග අවධානය",c.steps[3][1]]])}
function gate(which,sec,lang){const key=sec+"-"+lang;if(!pools[key]){let k=ix(lang);pools[key]=units[sec].qs.map(q=>[q[k],q[3].map(o=>opt(o,lang)),q[4],sec,q[5]])}return pools[key]}
const pictures={
0:["Cobalt chloride equilibrium.JPG","Co(II) chloride සමතුලිතතාවයේ රෝස හා නිල් වර්ණ ප්‍රතිචාරය","Chemicalinterest • Wikimedia Commons • Public domain"],
7:["Indicatoreuniversale.jpg","pH දර්ශකයක වර්ණ පරාසය","Wikimedia Commons"],
10:["Acid and Base Titration.jpg","අම්ල–භෂ්ම අනුමාපනයක සත්‍ය විද්‍යාගාර උපාංග","Kengksn • Wikimedia Commons • CC BY-SA 4.0"],
11:["Phenolphthalein in Flask.jpg","Phenolphthalein අම්ල–භෂ්ම දර්ශකයේ වර්ණ නිරීක්ෂණය","384 • Wikimedia Commons • CC BY-SA"],
13:["Silver chloride (AgCl).jpg","AgCl හි සුදු අවක්ෂේපය","Luisbrudna • Wikimedia Commons • CC BY-SA 4.0"],
16:["Water boiling.jpg","ජලය උතුරන විට ද්‍රව සහ වාෂ්ප අවස්ථා","Snehit Jamere • Wikimedia Commons • CC BY-SA 4.0"],
21:["Separatory funnel.jpg","ද්‍රව–ද්‍රව නිස්සාරණයට භාවිත වන වෙන්කිරීමේ පුනීලය","Rifleman 82 • Wikimedia Commons • Public domain"]
};
const videos={
0:["VIgwkPoijoU","රසායනික සමතුලිතතාව — හැඳින්වීම"],
12:["NlO9aT47RK4","ස්වාරක්ෂක ද්‍රාවණ — සිංහල පාඩම"],
13:["1ZR7oejsAmk","ද්‍රාව්‍යතා සමතුලිතතාව — සිංහල පාඩම"]
};
function sectionMedia(i){let photo=pictures[i],video=videos[i];return{images:photo?[{file:photo[0],alt:photo[1],caption:{si:photo[1],en:units[i].name[1],ta:units[i].name[2]},credit:photo[2]}]:[],videos:video?[{id:video[0],title:{si:video[1],en:"Additional Sinhala chemistry lesson",ta:"சிங்கள மொழி வேதியியல் பாடம்"},channel:"A/L Chemistry Sinhala • YouTube"}]:[]}}
function chart(kind){
const axes='<path d="M29 18V151H288" fill="none" stroke="#c6dafb" stroke-width="2"/>';
if(kind==="phase")return '<svg viewBox="0 0 310 178" aria-label="Pressure-temperature phase diagram">'+axes+'<path d="M30 144Q70 116 116 99M116 99L159 23M116 99Q212 78 265 28" fill="none" stroke="#ffafcd" stroke-width="3"/><text x="41" y="62">solid</text><text x="162" y="57">liquid</text><text x="216" y="130">gas</text><circle cx="116" cy="99" r="5" fill="#a7f8f7"/><text x="95" y="113">triple</text></svg>';
if(kind==="titrate")return '<svg viewBox="0 0 310 178" aria-label="pH titration curve">'+axes+'<path d="M30 143Q92 141 124 131T152 99T163 57T288 29" fill="none" stroke="#ff9bca" stroke-width="4"/><line x1="156" y1="22" x2="156" y2="150" stroke="#8be4ed" stroke-dasharray="5 5"/><text x="8" y="37">14</text><text x="14" y="100">7</text><text x="12" y="151">0</text><text x="231" y="172">V (mL)</text></svg>';
if(kind==="raoult")return '<svg viewBox="0 0 310 178" aria-label="Raoult law pressure and mole fraction">'+axes+'<path d="M30 134L281 42" fill="none" stroke="#91eff1" stroke-width="4"/><circle data-u12-dot cx="154" cy="89" r="7" fill="#ffb0d7"/><text x="10" y="13">P</text><text x="258" y="167">xA</text></svg>';
if(kind==="precip")return '<div class="u12Glass"><div class="u12Solution"><span>Ag⁺</span><span>Cl⁻</span><span>Ag⁺</span><span>Cl⁻</span><i data-u12-solid></i></div></div>';
if(kind==="partition")return '<div class="u12Layers"><div>Organic<br/><b>X　 X　 X</b></div><div>Aqueous<br/><b>X　 X</b></div></div>';
if(kind==="ph")return '<div class="u12Ph"><b data-u12-ph>pH 7</b><div class="u12Gradient"></div><small>0 · acid　　7 · neutral　　14 · base</small></div>';
if(kind==="buffer")return '<div class="u12Molecules"><b>HA</b><b>HA</b><em>⇌</em><b>A⁻</b><b>A⁻</b></div>';
return '<svg viewBox="0 0 310 178" aria-label="Concentration curves approach dynamic equilibrium">'+axes+'<path d="M30 34Q103 120 187 126T288 127" fill="none" stroke="#ffa6cb" stroke-width="4"/><path d="M30 146Q101 82 190 73T288 72" fill="none" stroke="#82eff5" stroke-width="4"/><text x="249" y="114" fill="#ffa6cb">A</text><text x="247" y="57" fill="#82eff5">B</text></svg>';
}
function kind(i){return i<6?"eq":i===10?"titrate":i===12?"buffer":i>=13&&i<=15?"precip":i>=16&&i<=18?"phase":i===19||i===20?"raoult":i===21?"partition":"ph"}
function visual(i,j,label){let t=kind(i);let input=t==="phase"?"":'<label class="u12Slider"> <span>'+(t==="ph"?"pH":t==="buffer"?"[A⁻]/[HA]":t==="precip"?"Qsp/Ksp":t==="raoult"?"xA":t==="partition"?"Kᴅ":"Q/K")+'</span><input data-u12-range type="range" min="0" max="100" value="50" aria-label="Change simulation input"/><strong data-u12-out>50%</strong></label>';
return '<div class="u12Visual" data-u12-kind="'+t+'"><div class="u12Eyebrow">✦ EQUILIBRIUM LAB</div><strong>'+esc(label)+'</strong><div class="u12Scene">'+chart(t)+'</div><p class="u12Eq">'+esc(units[i].steps[j].eq)+'</p>'+input+'<small>සංකල්පීය ආකෘතියක් පමණි • Conceptual illustration, not experimental data.</small></div>'}
function assessment(lang){let n=0,mode=lang==="si"?"si":lang==="ta"?"ta":"en";let t=mode==="si"?["බහුවරණ පුහුණුව","ව්‍යුහගත ප්‍රශ්න","රචනා ප්‍රශ්න"]:mode==="ta"?["பல்தேர்வு வினாக்கள்","கட்டமைப்பு வினாக்கள்","கட்டுரை வினாக்கள்"]:["MCQ practice","Structured practice","Essay practice"];
let questions=units.map((u,i)=>'<details class="u12QuizChapter"><summary>'+String(i+1).padStart(2,"0")+'　'+esc(u.name[ix(mode)])+' · 5 MCQ</summary><div class="u12QuizGrid">'+u.qs.map((q,j)=>{let text=q[ix(mode)];return '<article data-u12-quiz="'+i+'-'+j+'"><h4>'+esc(text)+'</h4>'+q[3].map((o,k)=>'<button type="button" data-u12-answer="'+i+'-'+j+'-'+k+'">'+String.fromCharCode(65+k)+'. '+esc(opt(o,mode))+'</button>').join("")+'<p class="u12Feedback" hidden></p></article>'}).join("")+'</div></details>').join("");
let structured=[[1,"Kc, Kp හා Δn ගණනය"],[4,"ICE වගුවකින් සමතුලිත සාන්ද්‍රණ"],[5,"Le Chatelier වෙනස්කම්"],[7,"Kw, pH, pOH"],[8,"Ka/Kb හා දුබල අම්ල"],[10,"අනුමාපන වක්‍ර හා equivalence"],[12,"ස්වාරක්ෂක pH"],[13,"Ksp සහ ද්‍රාව්‍යතාව"],[15,"pH හා selective precipitation"],[19,"Raoult partial pressures"]];
let essay=[[0,"ගතික සමතුලිතතාව හා ප්‍රතික්‍රියා දිශාව"],[7,"අයනික සමතුලිතතා හා pH"],[12,"ස්වාරක්ෂක සහ ද්‍රාව්‍යතා නියම"],[18,"අවස්ථා සටහන් හා තාපාංකය"],[21,"Raoult, steam distillation සහ විභාජන සංගුණකය"]];
const written=(a)=>a.map(([i,name],j)=>'<details class="u12Written"><summary>'+(j+1)+'. '+esc(name)+'</summary><p>'+esc(source[i].steps[0][1])+'</p><p><b>'+(mode==="si"?"පිළිතුරු පරීක්ෂා කරන්න: ":"Answer outline: ")+'</b>'+esc(source[i].steps.map(s=>s[2]).join(" • "))+'</p></details>').join("");
return '<section class="u12Practice"><h2>'+t[0]+' · 110</h2><p>'+(mode==="si"?"NIE පාඩම් කරුණු මත සකස් කළ නව ප්‍රශ්න. මුල් පසුගිය විභාග ප්‍රශ්න නොවේ.":"Original syllabus-based practice questions; not reproduced past papers.")+'</p>'+questions+'<h2>'+t[1]+' · 10</h2>'+written(structured)+'<h2>'+t[2]+' · 5</h2>'+written(essay)+'</section>'}
function bind(){
document.querySelectorAll(".u12Visual [data-u12-range]").forEach(slider=>{let root=slider.closest(".u12Visual"),t=root.dataset.u12Kind,output=root.querySelector("[data-u12-out]");let update=()=>{let v=+slider.value;if(output)output.textContent=t==="ph"?(v*14/100).toFixed(1):t==="raoult"?(v/100).toFixed(2):v+"%";if(t==="ph"){let p=root.querySelector("[data-u12-ph]");if(p)p.textContent="pH "+(v*14/100).toFixed(1)}if(t==="precip"){let p=root.querySelector("[data-u12-solid]");if(p)p.style.opacity=v<50?"0":String((v-45)/55)}if(t==="raoult"){let p=root.querySelector("[data-u12-dot]");if(p){p.setAttribute("cx",30+2.51*v);p.setAttribute("cy",134-.92*v)}}};slider.addEventListener("input",update);update()});
document.querySelectorAll("[data-u12-answer]").forEach(b=>b.addEventListener("click",()=>{let [i,j,k]=b.dataset.u12Answer.split("-").map(Number),q=units[i].qs[j],card=b.closest("[data-u12-quiz]"),out=card.querySelector(".u12Feedback");if(card.dataset.answered)return;card.dataset.answered="yes";card.querySelectorAll("button").forEach(btn=>{let choice=+btn.dataset.u12Answer.split("-")[2];btn.disabled=true;if(choice===q[4])btn.classList.add("correct");else if(btn===b)btn.classList.add("incorrect")});out.hidden=false;out.textContent=(k===q[4]?"✓ ":"✗ ")+q[5]}));
}
app.units=function(which){return which===12?units:saved.units(which)};
app.total=function(which){return which===12?units.length:saved.total(which)};
app.notes=function(which){return which===12?notes():saved.notes(which)};
app.meta=function(which){return which===12?meta():saved.meta(which)};
app.getDone=function(which){return which===12?getDone():saved.getDone(which)};
app.reset=function(which){if(which===12){pools={};state={};return}return saved.reset(which)};
app.gateUI=function(which){return which===12?state:saved.gateUI(which)};
app.gateQuestions=function(which,sec,lang){return which===12?gate(which,sec,lang):saved.gateQuestions(which,sec,lang)};
app.ui=function(which,lang){return which===12?ui(lang):saved.ui(which,lang)};
app.background=function(which,i){return which===12?"radial-gradient(circle at 15% 23%,rgba(232,80,151,.20),transparent 35%),radial-gradient(circle at 79% 70%,rgba(65,109,204,.15),transparent 32%)":saved.background(which,i)};
app.deep=function(which){return which===12?deep():saved.deep(which)};
app.sectionMedia=function(which,i){return which===12?sectionMedia(i):saved.sectionMedia(which,i)};
app.visual=function(which,i,j,label){return which===12?visual(i,j,label):saved.visual(which,i,j,label)};
app.assessments=function(which,lang){return which===12?assessment(lang):saved.assessments(which,lang)};
app.bindAssessment=function(which,render){return which===12?bind():saved.bindAssessment(which,render)};
app.themes[12]=["#d94f95","#5a77d2","#8fdef0"];
window.ChemicalEquilibrium12={units,validate(){const errors=window.U12_VALIDATE();units.forEach((u,i)=>{if(u.steps.length!==4||u.qs.length!==5)errors.push(i+" cardinality");u.qs.forEach((q,j)=>{if(q[3].length!==4||q[4]<0||q[4]>3)errors.push(i+"."+j+" answers")})});return errors},media:sectionMedia,visual,bind};
})();
