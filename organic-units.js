/* Pathum Organic Learning Engine. Loaded before index.html's main application.
   Source: NIE Grade 12 Organic Chemistry Resource Book, printed pp.1–82.
   Original trilingual summaries and examination-style practice questions. */
(function(){
"use strict";
const U={7:window.U7_CHAPTERS||[],8:window.U8_CHAPTERS||[],9:window.U9_CHAPTERS||[],10:window.U10_CHAPTERS||[]};
const structured={7:window.U7_STRUCTURED||[],8:window.U8_STRUCTURED||[],9:window.U9_STRUCTURED||[],10:window.U10_STRUCTURED||[]};
const essays={7:window.U7_ESSAY||[],8:window.U8_ESSAY||[],9:window.U9_ESSAY||[],10:window.U10_ESSAY||[]};
const titles={
7:["කාබනික රසායන විද්‍යාවේ මූලික සංකල්ප","Fundamentals of Organic Chemistry","கரிம வேதியியலின் அடிப்படைக் கருத்துகள்"],
8:["හයිඩ්‍රොකාබන හා හැලජනීකෘත හයිඩ්‍රොකාබන","Hydrocarbons and Halogenated Hydrocarbons","ஐதரோகார்பன்களும் அலசனேற்றப்பட்ட ஐதரோகார்பன்களும்"],
9:["ඔක්සිජන් අන්තර්ගත කාබනික සංයෝග","Oxygen-Containing Organic Compounds","ஒட்சிசன் கொண்ட கரிமச் சேர்மங்கள்"],
10:["නයිට්‍රජන් අන්තර්ගත කාබනික සංයෝග","Nitrogen-Containing Organic Compounds","நைதரசன் கொண்ட கரிமச் சேர்மங்கள்"]
};
const ranges={7:"1–25",8:"26–53",9:"54–75",10:"76–82"};
const themes={7:["#8057c5","#b362cf","#39a6b6"],8:["#127c96","#23acb3","#e6a65a"],9:["#188980","#4dba96","#a6c94f"],10:["#af4b82","#db6e9a","#b488e6"]};
const symbol={7:["C","OH","C","C","C","cis","C*"],8:["CH₄","Cl•","C=C","OH","C≡C","⌬","NO₂","o/p","Nu⁻"],9:["OH","H₂O","[O]","PhOH","C=O","Ag","COOH","COCl","COOR","CONH₂"],10:["NH₂","Nu","N:","N₂⁺","N=N"]};
const lessonVideo={
7:{2:["94UlRbsIs-M","කාබනික සංයෝග IUPAC නාමකරණය","DP Education - A/L සිංහල මාධ්‍යය"],3:["ZtOFcV8lt-E","IUPAC නාමකරණය: කාර්ය කාණ්ඩ ප්‍රමුඛතාව","DP Education - A/L සිංහල මාධ්‍යය"],5:["H6rrspr5nNA","කාබනික සමාවයවිකතාව","DP Education - A/L සිංහල මාධ්‍යය"]},
8:{2:["Ms6qKZpjEJ0","ඇල්කීන ආකලන ප්‍රතික්‍රියා හා මාකොනිකොෆ් නීතිය","DP Education - A/L සිංහල මාධ්‍යය"],4:["PctI2lX4KbQ","ඇල්කයිනවල බ්‍රෝමීන්, HBr සහ ජල ආකලන","DP Education - A/L සිංහල මාධ්‍යය"],6:["XvM9f6aDjG4","බෙන්සීන්හි ඉලෙක්ට්‍රෝෆිලික ආදේශන හා නයිට්‍රොකරණය","DP Education - A/L සිංහල මාධ්‍යය"],7:["EOu6nnfhmXE","බෙන්සීන් වළල්ලේ සක්‍රීයකාරක හා යොමුකාරක කාණ්ඩ","Chemistry Made Easy"]},
9:{0:["sDlQhNFkDDg","ඇල්කොහොල්: ගුණ සහ ප්‍රතික්‍රියා","DP Education - A/L සිංහල මාධ්‍යය"],1:["SKXget9QJg8","ඇල්කොහොල් කාබනික පරිවර්තන","DP Education - A/L සිංහල මාධ්‍යය"]},
10:{0:["1DFjVl2F4rQ","නයිට්‍රජන් අන්තර්ගත කාබනික සංයෝග","Chemistry by Nilani Dias"],4:["3mQzjXEZ-Do","ඩයසෝනියම් ලවණ: ආදේශ හා azo coupling","CHEMISTRY NOTHING"]}
};
const realImages={
"7-0-0":["Ethyl alcohol usp grade.jpg","ඖෂධ හා විද්‍යාගාර භාවිතයේ එතනෝල් සහිත බෝතල්.","National Cancer Institute / Diane A. Reid • Public domain"],
"7-1-1":["Etanol.png","එතනෝල් අණුවේ ධ්‍රැවීයතාව සහ O–H කාණ්ඩය.","Pilroar • CC BY-SA 4.0"],
"7-6-0":["Etanol.jpg","අණුක ආකෘතියෙන් සහසංයුජ බන්ධන හා ත්‍රිමාණ සැකැස්ම සලකා බලන්න.","Dubaj • Public domain"],
"8-0-0":["Benzolflasche.jpg","බෙන්සීන් යථාර්ථ රසායනාගාර නියැදියක්; අධික විෂ/කාර්සිනොජනික අවදානම් සහිතය.","Robin Müller • CC BY-SA 3.0"],
"8-5-0":["Benzolflasche.jpg","බෙන්සීන් පදනම් කර ගත් ඇරෝමැටික සංයෝග පිළිබඳ සංකල්පය.","Robin Müller • CC BY-SA 3.0"],
"9-0-0":["Ethanol antiseptic.jpg","එතනෝල් අඩංගු සැබෑ නිෂ්පාදනයක්; –OH කාර්ය කාණ්ඩයේ භාවිතයන්.","VanHelsing.16 • Wikimedia Commons"],
"9-0-2":["Lab wash-bottles water EtOH.jpg","ජලය හා එතනෝල් සඳහා සලකුණු කළ විද්‍යාගාර සෝදන බෝතල්.","Masur • Public domain"],
"9-4-1":["Acetone Bottle.png","කීටෝනයක් වන ඇසිටෝන් සඳහා සත්‍ය බෝතල් ඡායාරූපය.","Antonkneeyo • CC BY-SA 4.0"],
"9-5-0":["Silver mirror chemistry.jpg","Tollens පරීක්ෂාවේ ධනාත්මක රිදී කැඩපත් නිරීක්ෂණය.","Wikimedia Commons"],
"9-5-1":["Fehling test.png","Fehling ද්‍රාවණයේ Cu₂O නිසා සිදුවන වර්ණ වෙනස.","Wikimedia Commons"],
"10-0-1":["Перегонка анилина.jpg","ඇනිලීන් පිරිසිදු කිරීමට භාවිත වූ සැබෑ රසායනාගාර ආසවන සැකසුම. මෙය අනතුරුදායක ද්‍රව්‍යයක් බැවින් අත්හදා නොබලන්න.","Helena260807 • Wikimedia Commons • CC BY-SA 4.0"],
"10-3-2":["Benzenediazonium cation.png","බෙන්සීන් ඩයසෝනියම් අයනයේ සත්‍ය ව්‍යුහ සටහන.","Wikimedia Commons"],
"10-4-3":["Azo-coupling-A-2D-skeletal.png","බෙන්සීන් ඩයසෝනියම් සහ ෆීනෝල් අතර azo coupling ප්‍රතික්‍රියා සටහන.","Ben Mills • Public domain"]
};
const gateState={},gatePools={},examState={};
function idx(lang){return lang==="si"?0:lang==="ta"?2:1}
function html(s){return String(s??"").replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]))}
function units(which){return U[which]||[]}
function total(which){return units(which).length}
function notes(which){const out={si:[],en:[],ta:[]};["si","en","ta"].forEach(l=>{const n=idx(l);out[l]=units(which).map(c=>({t:c.name[n],b:c.steps.map(s=>s.d[n]),f:c.steps.map(s=>s.eq).join(" • "),exam:[c.intro[n]]}))});return out}
function meta(which){const out={si:[],en:[],ta:[]};["si","en","ta"].forEach(l=>{const n=idx(l);out[l]=units(which).map(c=>c.steps.map(s=>s.t[n]))});return out}
function getDone(which){try{const d=JSON.parse(localStorage.getItem("chem-unit"+which+"-mastered")||"[]");if(!Array.isArray(d))return[];let good=[];for(let i=0;i<total(which);i++){if(d.includes(i))good.push(i);else break}return good}catch(e){return[]}}
function reset(which){Object.keys(gatePools).forEach(k=>{if(k.startsWith(which+"-"))delete gatePools[k]});gateState[which]={};delete examState[which]}
function gateUI(which){return gateState[which]||(gateState[which]={})}
function optionText(value,lang){
 if(lang==="si")return value;
 const terms={
 "දෙකම සමානයි":["Both equal","இரண்டும் சமம்"],"කිසිවක් නොවේ":["Neither","எதுவுமில்லை"],
 "සෘජු දාම":["Straight chain","நேர்ச் சங்கிலி"],"ශාඛිත දාම":["Branched chain","கிளைச் சங்கிலி"],"වළලු":["Ring","வளையம்"],"ඉහත සියල්ල":["All of the above","மேற்கண்ட அனைத்தும்"],
 "π නොමැති නිසා":["Because no π bond","π பிணைப்பு இல்லாததால்"],"කාබන් නොමැති නිසා":["Because there is no carbon","கார்பன் இல்லாததால்"],"වළලු නිසා":["Because of rings","வளையங்களால்"],"C=C එක පැත්තක H දෙකක් නිසා":["Two H atoms on one end of C=C","C=C இன் ஒரு முனையில் இரண்டு H இருப்பதால்"],
 "වැඩි වේ":["Increases","அதிகரிக்கிறது"],"අඩු වේ":["Decreases","குறைகிறது"],"වෙනස් නොවේ":["Unchanged","மாறாது"],"අනන්ත වේ":["Becomes infinite","முடிவிலியாகிறது"]
 };
 return terms[value]?terms[value][lang==="en"?0:1]:value;
}
function gateQuestions(which,sec,lang){const key=which+"-"+sec+"-"+lang;if(!gatePools[key]){const k=idx(lang),q=units(which)[sec].qs.map(x=>[x[k],x[3].map(v=>optionText(v,lang)),x[4],sec,x[5]]);for(let i=q.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));const t=q[i];q[i]=q[j];q[j]=t}gatePools[key]=q.slice(0,5)}return gatePools[key]}
function localMsg(which,lang,key){const messages={
si:{done:"පරීක්ෂාව සමත් — ඊළඟ කොටස විවෘතයි.",meta:"අහඹු බහුවරණ ප්‍රශ්න 5ක් • සමත් වීමට අවම 4/5",question:"ප්‍රශ්නය",answered:" පිළිතුරු ලබාදී ඇත",previous:"← පෙර",next:"ඊළඟ →",submit:"ප්‍රතිඵල බලන්න ✓",continue:"ඉගෙනුම් ගමන ඉදිරියට"},
en:{done:"Checkpoint passed — next section unlocked.",meta:"Five questions • score at least 4/5 to pass",question:"Question",answered:" answered",previous:"← Previous",next:"Next →",submit:"View result ✓",continue:"Learning journey continues"},
ta:{done:"மதிப்பீடு வெற்றி — அடுத்த பகுதி திறந்துள்ளது.",meta:"ஐந்து வினாக்கள் • குறைந்தது 4/5 வேண்டும்",question:"வினா",answered:" பதில்கள்",previous:"← முந்தையது",next:"அடுத்து →",submit:"முடிவைப் பார்க்க ✓",continue:"கற்றல் பயணம் தொடர்கிறது"}};
return messages[lang][key]}
function ui(which,lang){const n=idx(lang),name=titles[which][n],paragraph={si:"NIE 12 ශ්‍රේණියේ සම්පත් පොතේ අනුපිළිවෙළ, ප්‍රතික්‍රියා තත්ත්ව, රසායනික ව්‍යුහ හා ප්‍රධාන නිගමන අනුව සැකසූ කාබනික රසායන ඉගෙනුම් ගමනකි.",en:"An NIE Grade 12-aligned organic chemistry journey with mechanisms, reaction conditions, structural visuals and assessments.",ta:"NIE தரம் 12 வளநூல் அடிப்படையிலான கரிம வேதியியல் பாடப்பயணம்; வினைகள், நிபந்தனைகள் மற்றும் மதிப்பீடுகள்."},guide={si:"කාබනික ඉගෙනුම් ගමන — ව්‍යුහය → ක්‍රියාකාරී කාණ්ඩ → ප්‍රතික්‍රියා → ප්‍රශ්න",en:"Organic learning journey — structure → functional groups → reactions → assessments",ta:"கரிமக் கற்றல் — அமைப்பு → செயற்பாட்டுக் குழு → வினைகள் → மதிப்பீடு"},source={si:"ජාතික අධ්‍යාපන ආයතනය — 12 ශ්‍රේණිය, කාබනික රසායන විද්‍යා සම්පත් පොත (2019 මුද්‍රණය), "+which+" ඒකකය, මුද්‍රිත පිටු "+ranges[which]+".",en:"National Institute of Education, Grade 12 Chemistry Resource Book (2019), Unit "+which+", printed pages "+ranges[which]+".",ta:"NIE தரம் 12 இரசாயனவியல் வளநூல் (2019), அலகு "+which+", அச்சுப் பக்கங்கள் "+ranges[which]+"."};return{title:"Unit "+String(which).padStart(2,"0")+" — "+name,sub:paragraph[lang],guide:guide[lang],source:source[lang],sections:units(which).map(x=>x.name[n])}}
function background(which,i){const color=themes[which],a=i%2===0?20:74,b=i%2===0?80:18;function rgb(hex){const n=parseInt(hex.slice(1),16);return((n>>16)&255)+","+((n>>8)&255)+","+(n&255)}return"radial-gradient(circle at "+a+"% 26%,rgba("+rgb(color[0])+",.20),transparent 32%),radial-gradient(circle at "+b+"% 70%,rgba("+rgb(color[1])+",.14),transparent 29%)"}
const commonErrors={
 7:[
 "කාබන්හි සිව්සංයුජතාව හා දාම සෑදීම වෙන වෙනම ගුණ වේ. C=C බන්ධනයෙහි σ එකක් සහ π එකක් ඇති බව අමතක නොකරන්න.",
 "ඇල්ඩිහයිඩ් –CHO හා කීටෝන >C=O එකම ලෙස නොසලකන්න. ඇල්කොහොල් –OH සහ ෆීනෝල් –OH ද රසායනික හැසිරීමෙන් වෙනස් වේ.",
 "දිගම අඛණ්ඩ කාබන් දාමය තෝරන්න; රූපයේ තිරස්ව පෙනෙන දාමයම දිගම යැයි නොසලකන්න. ආදේශක අංක හා අකාරාදී පිළිවෙළ වෙන වෙනම භාවිත කරන්න.",
 "–COOH ප්‍රධාන කාර්ය කාණ්ඩය වූ විට –OH යනු hydroxy- ආදේශකයයි. දෙබන්ධන හා ප්‍රධාන කාර්ය කාණ්ඩයට අදාළ අංකනයේ ප්‍රමුඛතාව හොඳින් පරීක්ෂා කරන්න.",
 "එකම අණුක සූත්‍රය ඇති බව පමණක් ප්‍රමාණවත් නොවේ; ව්‍යුහික සමාවයවිකවල පරමාණු සම්බන්ධ වීමේ අනුපිළිවෙළ වෙනස් විය යුතුය.",
 "C=C ද්විත්ව බන්ධනයේ එක් එක් C ට එකිනෙකට වෙනස් කාණ්ඩ දෙකක් තිබීම අත්‍යවශ්‍යය. CH₂=CH₂ සඳහා cis/trans සමාවයවික නොමැත.",
 "ප්‍රතිරූපාවයවික යුගල දර්පණ ප්‍රතිබිම්බ වන අතර අධිස්ථාපනය කළ නොහැක. cis/trans යුගල සාමාන්‍යයෙන් enantiomers නොවේ."
 ],
 8:[
 "sp³ = 109.5°, sp² = 120°, sp = 180°. C=C හි σ 1 හා π 1, C≡C හි σ 1 හා π 2 ඇති බව වෙන්කර තබාගන්න.",
 "මෙතේන් ක්ලෝරිනීකරණයට UV අවශ්‍යය. ආරම්භක, ප්‍රචාරණ හා අවසන් පියවර තුනේ නිදහස් මුක්තඛණ්ඩ ගණන වෙනස් වේ; බහුආදේශිත ඵල ද ලැබිය හැක.",
 "අසමමිතික ඇල්කීනයකට HX ආකලනයේ ප්‍රධාන ඵලය carbocation ස්ථායීතාව අනුව සලකන්න. Br₂ ආකලනය හා HX ආකලනයේ අතරමැදි යාන්ත්‍රණ එකක් නොවේ.",
 "ශීතල තනුක ක්ෂාරීය KMnO₄ මඟින් vicinal diol සෑදිය හැක; උණු සාන්ද්‍ර/ආම්ලික තත්ත්ව සමාන ඵල නොදෙයි. ප්‍රශ්නයේ තත්ත්ව කියවන්න.",
 "Ethyne ජල ආකලනයෙන් ethanal ලැබුණත් propyne ජල ආකලනයෙන් ප්‍රධාන වශයෙන් propanone ලැබේ. ඇල්කයින දෙක සමාන ලෙස නොසලකන්න.",
 "බෙන්සීන්හි π ඉලෙක්ට්‍රෝන වළල්ල පුරා විස්ථානගතය. සාමාන්‍ය Br₂ ආකලන පරීක්ෂාව ඇල්කීනයක මෙන් නොසලකන්න; උත්ප්‍රේරකය සහ ආදේශය වැදගත්ය.",
 "Friedel–Crafts ප්‍රතික්‍රියා සඳහා සුදුසු නිර්ජලීය Lewis acid උත්ප්‍රේරකයක් අවශ්‍යය. ඇල්කයිලීකරණය හා ඇසිලීකරණය ඵල වෙනස් වේ.",
 "හැලජන කාණ්ඩ වළල්ල අක්‍රිය කරන නමුත් ortho/para යොමු කරයි. සියලු ඉලෙක්ට්‍රෝන ආකර්ෂක කාණ්ඩ meta යොමු කරයි යන සරල නියමය වැරදිය.",
 "ජලීය KOH යටතේ නියුක්ලියෝෆීල ආදේශය, ඇල්කොහොලීය KOH/උෂ්ණය යටතේ ඉවත්වීම ප්‍රවර්ධනය විය හැක; SN1 හා SN2 වේග නියම ද වෙනස්ය."
 ],
 9:[
 "ප්‍රාථමික/ද්විතීයික/තෘතීයික ඇල්කොහොල් වර්ග තීරණය වන්නේ –OH අමුණා ඇති C ට සම්බන්ධ C ගණනෙනි; –OH කාණ්ඩ ගණනෙන් නොවේ.",
 "Lucas පරීක්ෂාවේ tertiary alcohol ඉක්මනින් වළාකුළු ස්වභාවයක් දක්වයි; primary alcohol සාමාන්‍ය කාමර උෂ්ණත්වයේ සෙමින් ප්‍රතික්‍රියා කරයි. සම්බන්ධ තත්ත්ව සඳහන් කරන්න.",
 "ප්‍රාථමික ඇල්කොහොල් ආරක්ෂිත තත්ත්වවලදී aldehyde අවස්ථාවේ නවතාලිය හැකි වුවද තද ඔක්සිකරණය carboxylic acid දක්වා යයි; tertiary alcohol පහසුවෙන් ඔක්සිකරණය නොවේ.",
 "ෆීනෝල් NaOH සමඟ ලවණ සාදයි; සාමාන්‍ය අලිෆැටික ඇල්කොහොල් NaOH මඟින් සැලකිය යුතු ලෙස අයනීකරණය නොවේ. බ්‍රෝමීන් ජලය සමඟ phenol සුදු අවක්ෂේපයක් ලබා දෙයි.",
 "2,4-DNP පරීක්ෂාව ඇල්ඩිහයිඩ් හා කීටෝන දෙකටම ධන විය හැක. ඒවා එකිනෙක වෙන්කර ගැනීමට Tollens වැනි අමතර පරීක්ෂාවක් අවශ්‍යය.",
 "Tollens රිදී කැඩපත aldehyde හඳුනාගැනීමට යොදන අතර Fehling බොහෝ අලිෆැටික aldehydes සඳහා ධන වේ; benzaldehyde වැනි aromatic aldehydes සෑම විටම Fehling ධන නොවේ.",
 "කාබොක්සිලික් අම්ල NaHCO₃ සමඟ CO₂ නිකුත් කරයි; phenol සාමාන්‍යයෙන් එසේ නොකරයි. එස්ටරීකරණය සමතුලිත ප්‍රතික්‍රියාවකි.",
 "අම්ල ක්ලෝරයිඩවල ජලවිච්ඡේදනය ඉක්මන්ය. NH₃/amine සමඟ ක්‍රියාවලදී නිකුත් වන HCl අල්ලා ගැනීමට අමතර භාෂ්මය අවශ්‍ය විය හැක.",
 "ක්ෂාරීය එස්ටර ජලවිච්ඡේදනයේ කාබොක්සිලේට ලවණය නිපදවෙයි; අම්ලීය ජලවිච්ඡේදනය සමතුලිත වේ. LiAlH₄ මඟින් එස්ටර ඇල්කොහොල් බවට ඔක්සිහරණය වේ.",
 "ඇමයිඩයේ –NH₂ ඇමීනයක –NH₂ හා සමාන භාෂ්මිකතාවක් නොදක්වයි; N නිදහස් ඉලෙක්ට්‍රෝන යුගලය C=O සමඟ ප්‍රතිධ්වනි ස්ථායීකරණය වේ."
 ],
 10:[
 "ඇමීන 1°, 2°, 3° වර්ගීකරණය N ට සම්බන්ධ කාබනික කාණ්ඩ ගණනෙනි. ඇනිලීන් අලිෆැටික ඇමීනයක් නොව ඇරෝමැටික ඇමීනයකි.",
 "ඇමීන N හි නිදහස් ඉලෙක්ට්‍රෝන යුගලය නිසා නියුක්ලියෝෆීල වේ; primary amine හා carbonyl සංයෝගයෙන් imine සෑදිය හැකි නමුත් ester/amide නිපදවීම සමඟ එය පටලවා නොගන්න.",
 "ඇනිලීන්හි N නිදහස් යුගලය බෙන්සීන් වළල්ලට ප්‍රතිධ්වනි ලෙස දායක වන නිසා අලිෆැටික ඇමීනවලට වඩා අඩු භාෂ්මිකය. ඇමයිඩ ඊටත් වඩා දුබල භාෂ්ම වේ.",
 "ඇරෝමැටික ප්‍රාථමික ඇමීන සඳහා diazotization සාමාන්‍යයෙන් 0–5°C යටතේ සිදු කෙරේ. ඇලිෆැටික diazonium අයන ස්ථායී නොවන නිසා N₂ නිකුත් වීම වැදගත්ය.",
 "Ar–N₂⁺ ලවණ CuCl, CuBr, CuCN, KI, H₃PO₂ සහ ජලය සමඟ එකිනෙකට වෙනස් ආදේශ ඵල දෙයි. Azo coupling හි –N=N– සබැඳිය අලුතින් සෑදේ."
]};
function deep(which){return units(which).map((c,i)=>[[c.steps[0].t[0],c.steps[0].d[0]],[c.steps[2].t[0],c.steps[2].d[0]],["විභාගයේ පොදු වැරදි",(commonErrors[which]||[])[i]||c.qs[0][5]]])}
function sectionMedia(which,i){const v=lessonVideo[which]&&lessonVideo[which][i];return{images:[],videos:v?[{id:v[0],title:{si:v[1],en:v[1],ta:v[1]},channel:v[2]}]:[]}}
function mediaMap(){const result={};Object.keys(realImages).forEach(k=>{let x=realImages[k];result[k]={file:x[0],caption:x[1],credit:x[2]}});return result}
function visual(which,i,j,label){let s=units(which)[i].steps[j],sym=(symbol[which]||[])[i]||"C",eq=s.eq||"",split=eq.split(/→|⇌|⇒/),left=split[0].trim(),right=split.slice(1).join(" → ").trim(),isRing=which===8&&(i===5||i===6||i===7)||which===10&&(i===0||i===3||i===4),isChiral=which===7&&i===6,isGeometric=which===7&&i===5,isTest=which===9&&(i===4||i===5||i===3),isAzo=which===10&&i===4;
let molecule=isGeometric?'<div class="orgCisTrans"><div class="orgIsomer"><small>cis-but-2-ene</small><div class="orgDouble"><span class="c1">CH₃</span><span class="c2">CH₃</span><i>C═C</i><span class="c3">H</span><span class="c4">H</span></div></div><div class="orgIsomer"><small>trans-but-2-ene</small><div class="orgDouble"><span class="c1">CH₃</span><span class="c2">H</span><i>C═C</i><span class="c3">H</span><span class="c4">CH₃</span></div></div></div>':isRing?'<div class="orgBenzene"><i></i><b>⌬</b><em>'+html(sym)+'</em></div>':isChiral?'<div class="orgChiral"><span>F</span><span>Cl</span><b>C*</b><span>Br</span><span>H</span></div>':isTest?'<div class="orgTestTubes"><span class="tube"><i></i></span><span class="tube"><i></i></span><span class="tube"><i></i></span></div>':'<div class="orgBondModel"><div class="orgAtom orgAtomLeft">C</div><div class="orgBondLines"><i></i><i></i></div><div class="orgAtom orgAtomRight">'+html(sym)+'</div></div>';
return'<div class="orgVisual"><div class="orgVisualTop">'+(isAzo?"–N=N–":which===7?"කාබනික ව්‍යුහය":which===8?"බන්ධන හා ප්‍රතික්‍රියා":which===9?"කාබනික පරිවර්තනය":"නයිට්‍රජන් රසායනය")+'</div><div class="orgScene '+(isRing?"ringScene":"")+'">'+molecule+'<i class="orgMovingElectron"></i><i class="orgMovingElectron electronTwo"></i></div><div class="orgReaction"><span>'+html(left.slice(0,125))+'</span>'+(right?'<span class="orgReactionArrow">➜</span><span>'+html(right.slice(0,125))+'</span>':'')+'</div><div class="orgVisualFoot">'+html(label)+'</div></div>'}
function safety(which,lang){const m={si:"ආරක්ෂාව: බෙන්සීන්, බ්‍රෝමීන්, HCN, LiAlH₄, සාන්ද්‍ර අම්ල, ඩයසෝනියම් ලවණ හා අනෙකුත් විෂ/ප්‍රතික්‍රියාශීලී ද්‍රව්‍ය ස්වාධීනව භාවිත නොකරන්න. මෙහි ප්‍රතික්‍රියා අධ්‍යාපනික නිරූපණ පමණි.",en:"Safety: Reactions involving benzene, bromine, HCN, LiAlH₄, concentrated acids and diazonium salts are educational only. Do not attempt them unsupervised.",ta:"பாதுகாப்பு: பென்சீன், புரோமின், HCN, LiAlH₄, செறிந்த அமிலங்கள், டையசோனியம் உப்புகளை மேற்பார்வையின்றி பயன்படுத்த வேண்டாம்."};return'<div class="orgSafety">'+m[lang]+'</div>'}
function qPanel(which,lang){const E=examState[which]||(examState[which]={section:"all",answers:{},graded:false});const n=idx(lang),qs=units(which).flatMap((c,i)=>c.qs.map((q,j)=>({q,i,j}))).filter(q=>E.section==="all"||String(q.i)===E.section),done=qs.reduce((k,v)=>k+(E.answers[v.i+"."+v.j]===v.q[4]?1:0),0),filled=qs.every(v=>Number.isInteger(E.answers[v.i+"."+v.j]));let t={si:{title:"ඒකක අවසාන බහුවරණ ප්‍රශ්න පරීක්ෂාව",description:"අධ්‍යයනය කළ කොටස් සියල්ල හෝ එක් කොටසක් තෝරා ප්‍රශ්න විසඳන්න. පිළිතුරු දීමෙන් පසු ප්‍රතිඵල හා පැහැදිලි කිරීම් ලැබේ.",all:"සියලු කොටස්",check:"ලකුණු පරීක්ෂා කරන්න",reset:"නැවත උත්සාහ කරන්න"},en:{title:"Full unit multiple-choice assessment",description:"Choose all sections or an individual section, submit and review explanations.",all:"All sections",check:"Mark answers",reset:"Retry"},ta:{title:"முழு அலகு பல்தேர்வு மதிப்பீடு",description:"அனைத்துப் பிரிவுகளோ அல்லது ஒரு பிரிவோ தேர்ந்தெடுத்து விடையளிக்கவும்.",all:"அனைத்தும்",check:"மதிப்பிடுக",reset:"மீண்டும் முயல்க"}}[lang];
return'<section class="orgExamSection" id="orgExam-'+which+'"><h3>'+t.title+'</h3><p>'+t.description+'</p><div class="orgExamTools"><select data-org-ex-select="'+which+'"><option value="all" '+(E.section==="all"?"selected":"")+'>'+t.all+' · '+units(which).length*5+' MCQ</option>'+units(which).map((c,i)=>'<option value="'+i+'" '+(E.section===String(i)?"selected":"")+'>'+String(i+1).padStart(2,"0")+' — '+html(c.name[n])+'</option>').join("")+'</select><span>'+qs.length+' MCQ</span></div><div class="orgExamQuestions">'+qs.map((v,index)=>'<div class="orgExamQuestion"><strong>'+String(index+1).padStart(2,"0")+'. '+html(v.q[n])+'</strong><div class="orgExamChoices">'+v.q[3].map((o,k)=>{let val=E.answers[v.i+"."+v.j],cls=E.graded&&v.q[4]===k?"correct":E.graded&&val===k?"wrong":val===k?"selected":"";return'<button type="button" class="'+cls+'" data-org-ex-answer="'+which+'|'+v.i+'|'+v.j+'|'+k+'" '+(E.graded?"disabled":"")+'>'+String.fromCharCode(65+k)+'. '+html(optionText(o,lang))+'</button>'}).join("")+'</div>'+(E.graded?'<div class="orgExamExplanation">'+html(lang==='si'?v.q[5]:(lang==='en'?'Correct answer: ':'சரியான விடை: ')+optionText(v.q[3][v.q[4]],lang))+'</div>':'')+'</div>').join("")+'</div><div class="orgExamTools"><button class="btn primary" type="button" data-org-ex-submit="'+which+'" '+(!filled||E.graded?"disabled":"")+'>'+t.check+'</button><button type="button" class="btn outline" data-org-ex-reset="'+which+'">'+t.reset+'</button>'+(E.graded?'<strong>'+done+'/'+qs.length+' ('+Math.round(done/qs.length*100)+'%)</strong>':'')+'</div></section>'}
function assessments(which,lang){const n=idx(lang),si=lang==="si",ta=lang==="ta",heading=si?"ව්‍යුහගත හා රචනා ප්‍රශ්න":ta?"கட்டமைப்பு மற்றும் கட்டுரை வினாக்கள்":"Structured and essay questions";let banks=[{title:si?"ව්‍යුහගත ප්‍රශ්න":ta?"கட்டமைப்பு வினாக்கள்":"Structured questions",arr:structured[which]},{title:si?"රචනා ප්‍රශ්න":ta?"கட்டுரை வினாக்கள்":"Essay questions",arr:essays[which]}];return safety(which,lang)+qPanel(which,lang)+'<section class="orgWritten"><h3>'+heading+'</h3><p>'+(si?"NIE සම්පත් පොත මත පදනම් වූ නව ආදර්ශ ප්‍රශ්න; පසුගිය විභාග ප්‍රශ්න වචනානුසාරයෙන් උපුටාගෙන නැත.":ta?"NIE அடிப்படையிலான புதிய மாதிரி வினாக்கள்; கடந்தகாலத் தேர்வு வினாக்களின் நேரடி நகல்கள் அல்ல.":"Original model questions based on NIE learning outcomes, not reproduced past papers.")+'</p>'+banks.map(bank=>'<h4>'+bank.title+'</h4>'+bank.arr.map((q,j)=>'<details><summary>'+(j+1)+'. '+html(q[n===0?0:n===1?2:3])+'</summary><p>'+html(si?q[1]:(bank.arr===structured[which]?([7,8,9,10].includes(which)?units(which)[Math.min(j,units(which).length-1)].steps.map(st=>st.d[n]+' '+st.eq).join(' • '):q[n===1?2:3]):units(which).flatMap(c=>c.steps.map(st=>st.d[n]+' '+st.eq)).slice(0,12).join(' • ')))+'</p></details>').join("")).join("")+'</section>'}
function bindAssessment(which,render){const area=document.getElementById("orgExam-"+which);if(!area)return;const E=examState[which];const sel=area.querySelector("[data-org-ex-select]");if(sel)sel.onchange=function(){E.section=sel.value;E.answers={};E.graded=false;render()};
area.querySelectorAll("[data-org-ex-answer]").forEach(b=>b.onclick=function(){const p=b.getAttribute("data-org-ex-answer").split("|"),key=p[1]+"."+p[2],answer=+p[3];if(E.graded)return;E.answers[key]=answer;const thisQuestion=b.closest(".orgExamQuestion");thisQuestion.querySelectorAll("[data-org-ex-answer]").forEach(x=>x.classList.toggle("selected",x===b));const arr=units(which).flatMap((c,i)=>c.qs.map((q,j)=>({i,j}))).filter(x=>E.section==="all"||String(x.i)===E.section);const submit=area.querySelector("[data-org-ex-submit]");if(submit)submit.disabled=!arr.every(x=>Number.isInteger(E.answers[x.i+"."+x.j]))});
let sub=area.querySelector("[data-org-ex-submit]");if(sub)sub.onclick=function(){E.graded=true;render();setTimeout(()=>document.getElementById("orgExam-"+which)?.scrollIntoView({behavior:"smooth",block:"start"}),0)};
let res=area.querySelector("[data-org-ex-reset]");if(res)res.onclick=function(){E.answers={};E.graded=false;render();setTimeout(()=>document.getElementById("orgExam-"+which)?.scrollIntoView({behavior:"smooth",block:"start"}),0)};
}
function validate(){const problems=[];[7,8,9,10].forEach(u=>{if(!U[u].length)problems.push("Missing unit "+u);U[u].forEach((c,i)=>{if(c.steps.length!==4)problems.push("Steps "+u+"/"+i);if(c.qs.length!==5)problems.push("Questions "+u+"/"+i);c.qs.forEach((q,j)=>{if(q[3].length!==4||q[4]<0||q[4]>3)problems.push("Options "+u+"/"+i+"/"+j)});})});return problems}
window.OrganicUnits={units,total,notes,meta,getDone,reset,gateUI,gateQuestions,localMsg,ui,background,deep,sectionMedia,mediaMap:mediaMap(),visual,assessments,bindAssessment,validate,themes};
})();
