/* UNIT 11 • Chemical Kinetics • NIE Grade 13 Resource Book (2019), pp.1–74.
   Reuses the existing Pathum 6–10 scroll journey, checkpoint and Dev Mode engine.
   Original teaching notes, model quizzes and visualizations, NOT scanned text.
   Source: https://nie.lk/pdffiles/other/eGr13OM%20Physical%20Chemistry-Part%202.pdf
*/
(function(){
"use strict";
if(!window.OrganicUnits){return;}
var base=window.OrganicUnits;
var chapters=[
{
 n:["චාලක රසායනය හඳුනාගැනීම","Introduction to chemical kinetics","வேதி வினைவேகவியல் அறிமுகம்"],ref:"1.1",pages:"2–4",
 intro:"ප්‍රතික්‍රියාවක් සිදුවීමට හැකි වීම හා එය සිදුවන වේගය වෙනස් සංකල්ප දෙකකි. චාලක රසායනය වේගය හා යාන්ත්‍රණය විමසයි.",
 en:"Thermodynamic feasibility is distinct from reaction speed. Kinetics examines rates and pathways.",
 ta:"வினை நடைபெறக்கூடிய தன்மையும் அது நடைபெறும் வேகமும் வேறு; வேகவியல் வேகத்தையும் வழிமுறையையும் ஆராய்கிறது.",
 steps:[
 ["හැකියාව ≠ වේගය","ΔG ඍණ වීමෙන් නිශ්චිත කොන්දේසි යටතේ තාපගතිකව හිතකර බව කියවුණද, ප්‍රතික්‍රියාව ඉක්මනින් සිදුවන බව එයින් සහතික නොවේ. උදාහරණයක් ලෙස ගල්අඟුරු වාතයේ ඔක්සිජන් සමඟ සාමාන්‍ය කාමර උෂ්ණත්වයේදී ක්ෂණිකව දහනය නොවේ.","ΔG < 0 ≠ වේගවත් ප්‍රතික්‍රියාව"],
 ["කාලය ඇතුළත් කිරීම","ආරම්භක සාන්ද්‍රණය, නිෂ්පාදන ප්‍රමාණය හෝ වායු පරිමාව කාලය සමඟ වෙනස් වන ආකාරය නිරීක්ෂණය කිරීමෙන් ප්‍රතික්‍රියා ශීඝ්‍රතාවය හඳුනාගත හැකිය.","Rate = වෙනස ÷ කාලය"],
 ["වේගය සහ ප්‍රතික්‍රියා මාර්ගය","ප්‍රතික්‍රියා මාර්ගය (mechanism) මඟින් අවසන් ඵල ලැබෙන තුරු සිදුවන මූලික පියවර දක්වයි. එකම සමස්ත සමීකරණයට පියවර කිහිපයක් තිබිය හැක.","Reactants → intermediates → products"],
 ["දෛනික උදාහරණ","ආහාර නරක්වීම මන්දගාමී කිරීම, ඖෂධ පෙති දියවීම, ඉන්ධන දහනය පාලනය සහ විද්‍යාගාර ප්‍රතික්‍රියා නිරීක්ෂණය කිරීම වේගය පිළිබඳ යෙදුම් වේ.","උෂ්ණත්වය • සාන්ද්‍රණය • උත්ප්‍රේරක"]
 ],
 q:[
 ["චාලක රසායනය ප්‍රධාන වශයෙන් අධ්‍යයනය කරන්නේ?",["ප්‍රතික්‍රියා වේගය සහ යාන්ත්‍රණය","පරමාණුක ස්කන්ධ පමණි","සාමාන්‍ය තාපාංක පමණි","සමතුලිත නියතය පමණි"],0,"වේගය සහ යාන්ත්‍රණය යනු ප්‍රධාන අරමුණුය."],
 ["ΔG < 0 නම් ප්‍රතික්‍රියාව අනිවාර්යයෙන්ම?",["ක්ෂණිකව සිදුවේ","ඉක්මනින් සිදුවන බව නිශ්චිත නොවේ","සෑමවිටම උෂ්ණත්වය අඩු වේ","උත්ප්‍රේරක අවශ්‍ය නොවේ"],1,"තාපගතික හිතකර බව වේගය නියම නොකරයි."],
 ["ප්‍රතික්‍රියා වේගය සමඟ සෘජුව සම්බන්ධ ප්‍රමාණය?",["කාලය අනුව සාන්ද්‍රණ වෙනස","පාට පමණි","ආවර්තිතා කාණ්ඩය","පරමාණුක ක්‍රමාංකය"],0,"ප්‍රමාණයක් කාලය සමඟ වෙනස් වන වේගයයි."],
 ["ප්‍රතික්‍රියා යාන්ත්‍රණයක් යනු?",["මූලික පියවර අනුපිළිවෙළ","පමණක් සමස්ත සමීකරණය","නිෂ්පාදන වර්ණය","බන්ධන දිග සටහන"],0,"යාන්ත්‍රණය මූලික ප්‍රතික්‍රියා පියවර දක්වයි."],
 ["මන්දගාමී නරක්වීම සදහා සාමාන්‍ය උපක්‍රමය?",["සිසිල්ව තැබීම","උණු කිරීම","සාන්ද්‍රණය ඉහළ දැමීම","වැඩි මතුපිටක් ලබාදීම"],0,"බොහෝ නරක්වීම් ප්‍රතික්‍රියා සිසිල් උෂ්ණත්වයේදී මන්දගාමී වේ."]
 ],error:"ΔG හා activation energy එකම නොවේ. ස්වයංසිද්ධ වීම ප්‍රතික්‍රියාව ඉක්මන් වීමක් නොවේ."
},
{
 n:["ප්‍රතික්‍රියා වේගය","Rate of a reaction","வேதி வினைவேகம்"],ref:"1.2",pages:"5–8",
 intro:"කාල ඒකකයකදී ප්‍රතික්‍රියක සාන්ද්‍රණය අඩුවන හෝ ඵල සාන්ද්‍රණය වැඩිවන ප්‍රමාණය වේගයෙන් නිරූපණය කරමු.",
 en:"Measure concentration changes per unit time and distinguish average from instantaneous rates.",
 ta:"நேரத்திற்கு ஏற்ப செறிவு மாறும் அளவே வினைவேகம்; சராசரி மற்றும் உடனடி வேகங்களை வேறுபடுத்துக.",
 steps:[
 ["ප්‍රතික්‍රියක අඩුවීම","A → B දී [A] කාලය සමඟ අඩුවෙයි; ඒ නිසා −Δ[A]/Δt ලෙස වේගය ධන ලෙස ලියයි. සාමාන්‍ය ඒකක mol dm⁻³ s⁻¹ වේ.","r = −Δ[A]/Δt"],
 ["ඵල වැඩිවීම","B නිෂ්පාදනය වන විට එහි සාන්ද්‍රණ වෙනස ධන වේ. 1:1 A → B දී Δ[B]/Δt හා −Δ[A]/Δt සමාන වේ.","r = +Δ[B]/Δt"],
 ["මධ්‍යක වේගය","කාල පරාසයක් තුළ සිදුවූ සමස්ත සාන්ද්‍රණ වෙනස එම කාල පරාසයෙන් බෙදන්න. එය මුළු කාලපරාසයට අදාළ අගයකි.","r̄ = −([A]₂−[A]₁)/(t₂−t₁)"],
 ["ක්ෂණික වේගය","සාන්ද්‍රණ–කාල ප්‍රස්තාරයේ නිශ්චිත ස්ථානයක ස්පර්ශකයේ බෑවුමේ විශාලත්වය භාවිත කරන්න. ආරම්භක වේගය t = 0 හි වේ.","r(t) = −d[A]/dt"]
 ],
 q:[
 ["වේගයේ සාමාන්‍ය SI-ආශ්‍රිත ඒකකය?",["mol dm⁻³ s⁻¹","mol dm³","s mol⁻¹","mol² s"],0,"සාන්ද්‍රණය / කාලය ඒකකයයි."],
 ["A → B හි [A] අඩුවේ; r නිවැරදිව?",["−d[A]/dt","+d[A]/dt","−d[B]/dt","d[A]dt"],0,"ප්‍රතික්‍රියකය සඳහා ඍණ ලකුණ යොදන්න."],
 ["ප්‍රස්තාරයේ ස්පර්ශක බෑවුමෙන් ලැබෙන්නේ?",["ක්ෂණික වේගය","සමස්ත අණු ස්කන්ධය","ආවර්තිතාව","සියලු කාලවල සාමාන්‍යය"],0,"ඒ මොහොතේ වෙනස් වීමේ වේගයයි."],
 ["[A] 0.80 සිට 0.60 mol dm⁻³ දක්වා තත්පර 10කදී අඩුවේ. r̄?",["0.020 mol dm⁻³ s⁻¹","0.20 mol dm⁻³ s⁻¹","2.0 mol dm⁻³ s⁻¹","0.002 mol dm⁻³ s⁻¹"],0,"(0.80−0.60)/10 = 0.020."],
 ["ආරම්භක වේගය යනු?",["t=0 හි ස්පර්ශක බෑවුම","ප්‍රතික්‍රියා අවසානයේ වේගය","මධ්‍යය සාන්ද්‍රණය","උෂ්ණත්ව වෙනස"],0,"t=0 අසල gradient භාවිත කරයි."]
 ],error:"ප්‍රතික්‍රියකය සඳහා ඍණ ලකුණ නොදමා ඍණ වේගයක් ලිවීම පොදු වැරැද්දකි."
},
{
 n:["ස්ටොයිකියෝමිතිය සහ වේගය","Rate and stoichiometry","வினைவேகமும் விகிதச் சமன்பாடும்"],ref:"1.3",pages:"9–13",
 intro:"ප්‍රතික්‍රියක හා ඵල සඳහා වෙනස්වීම් වේග සමාන නොවිය හැකිය. සමස්ත වේගය නිර්වචනයේදී ස්ටොයිකියෝමිතීය සංගුණක භාවිත කරන්න.",
 en:"Normalize reactant and product concentration rates by stoichiometric coefficients.",
 ta:"வினைச் சமன்பாட்டில் உள்ள குணகங்களுக்கு ஏற்ப செறிவு மாற்ற வேகத்தைச் சரிசெய்க.",
 steps:[
 ["සාමාන්‍ය සමීකරණය","aA + bB → cC + dD දී [A],[B] අඩුවන සහ [C],[D] වැඩිවන වේග සංගුණකවලට බෙදූ පසු එකම r අගය ලැබේ.","r = −(1/a)d[A]/dt = (1/c)d[C]/dt"],
 ["හයිඩ්‍රජන් හා අයඩීන්","H₂ + I₂ → 2HI දී HI සෑදීමේ වේගය H₂ වැයවීමේ වේගයේ දෙගුණයකි. පසුගිය අනුපාතයට සංගුණක ඇතුළත් කළ යුතුය.","r = −d[H₂]/dt = ½ d[HI]/dt"],
 ["අගයන් ගණනය","2NO₂ → 2NO + O₂ දී O₂ සෑදීමේ වේගය 0.005 mol dm⁻³ s⁻¹ නම් NO₂ වැයවීම 0.010 mol dm⁻³ s⁻¹ වේ.","r = d[O₂]/dt = −½ d[NO₂]/dt"],
 ["ප්‍රස්තාර තුනක්","ප්‍රතික්‍රියකය පහළ යන වක්‍රයක් හා ඵල ඉහළ යන වක්‍රයක් දැක්වුණත් ඒවායේ බෑවුම් සංගුණක ගුණාකාරයට වෙනස් විය හැක.","stoichiometric rates ≠ raw gradients"]
 ],
 q:[
 ["2A → B හි A අඩුවීමේ වේගය 0.4 නම් B සෑදීමේ වේගය?",["0.2","0.4","0.8","1.6"],0,"r=−½d[A]/dt=d[B]/dt."],
 ["H₂ + I₂ → 2HI හි d[HI]/dt=0.06 නම් r?",["0.03","0.06","0.12","0.18"],0,"r=½×0.06."],
 ["2NO₂→2NO+O₂ හි නිවැරදි අනුපාතය?",["−½d[NO₂]/dt=d[O₂]/dt","−d[NO₂]/dt=d[O₂]/dt","2d[NO₂]/dt=d[O₂]/dt","d[O₂]/dt=−2d[NO₂]/dt"],0,"NO₂ සංගුණකය 2 යි."],
 ["aA → cC හි ප්‍රතික්‍රියා වේගය?",["−1/a d[A]/dt","−a d[A]/dt","c d[C]/dt","d[A]/dt"],0,"ස්ටොයිකියෝමිතීය සංගුණකයට බෙදයි."],
 ["අමු සාන්ද්‍රණ බෑවුම් සමාන නොවීමට හේතුව?",["සංගුණක වෙනස්වීම","කාල ඒකකය","සියලු ඵල වායු වීම","එකම තත්ත්වය"],0,"බෑවුම් සංගුණකවලට අනුකූලය."]
 ],error:"සංගුණකය ගුණ කළ යුතු තැන බෙදීම අමතක නොකරන්න; එකම r අගය ලැබිය යුතුය."
},
{
 n:["වේගය මැනීමේ පරීක්ෂණ","Experimental techniques","வினைவேகத்தை அளவிடும் முறைகள்"],ref:"1.4",pages:"14",
 intro:"පද්ධතිය අනුව නිශ්චිත භෞතික ප්‍රමාණයක් කාලය සමඟ මැනීමෙන් ප්‍රතික්‍රියා වේගය සොයාගන්නා ක්‍රම වෙනස් වේ.",
 en:"Gas volume, mass change, absorbance, and sampled concentration can monitor reaction progress.",
 ta:"வாயு கனஅளவு, நிறை, ஒளியுறிஞ்சல் மற்றும் செறிவு மாற்றம் மூலம் வேகத்தை அளவிடலாம்.",
 steps:[
 ["වායු පරිමාව","වායු නිපදවන ප්‍රතික්‍රියාවක gas syringe හෝ සුදුසු වායු එකතු කිරීමේ ක්‍රමයක් භාවිතයෙන් V–t ප්‍රස්තාරය ගත හැකිය.","dV(gas)/dt"],
 ["ස්කන්ධ අඩුවීම","විවෘත බඳුනෙන් වායුව පිටවීමේදී ස්කන්ධය අඩුවේ. ප්‍රමාණවත් නිරවද්‍යතාවයකින් යුතු තරාදියක reading–time දත්ත ගන්න.","−dm/dt"],
 ["වර්ණ/ආලෝක අවශෝෂණය","වර්ණවත් species ඇත්නම් සුදුසු වර්ණමානයක් මඟින් absorbance වෙනස මැනිය හැකි අතර Beer–Lambert නීතියට අනුකූල සීමාවේ [species] තක්සේරු කළ හැකිය.","A = εℓc"],
 ["සාම්පල ගැනීම","නියමිත වේලාවලදී සාම්පල ලබා ප්‍රතික්‍රියාව අත්හිටුවා titration හෝ වෙනත් විශ්ලේෂණයකින් සාන්ද්‍රණය මැනිය හැකිය. උපකරණ තෝරාගැනීමේදී අතුරු ප්‍රතික්‍රියා සලකන්න.","sample → quench → analyze"]
 ],
 q:[
 ["වායු නිපදවන ප්‍රතික්‍රියාවට සුදුසු මිනුම?",["Gas syringe පරිමාව","ලෝහ තදබව","විද්‍යුත් ආරෝපණය","අනු ලකුණ"],0,"පරිමාව කාලය අනුව මැනිය හැක."],
 ["වර්ණවත් species එකක් මැනීමට?",["Colorimetry","Weighing metal only","Thermometer only","Stopwatch only"],0,"Absorbance සාන්ද්‍රණයට සම්බන්ධ කළ හැක."],
 ["වායු පිටවෙන විවෘත පද්ධතියක?",["ස්කන්ධය අඩුවිය හැක","සෑමවිටම ස්කන්ධය වැඩිවේ","කිසි වෙනසක් නැත","අනිවාර්යයෙන් නිල් වේ"],0,"පිටවෙන වායුව නිසා බර අඩුවේ."],
 ["Beer–Lambert නීතියේ A?",["Absorbance","Area","Activation energy","Amount"],0,"A යනු ආලෝක අවශෝෂණයයි."],
 ["quench ක්‍රමයේ අරමුණ?",["සාම්පලයේ ප්‍රතික්‍රියාව නවත්වීම","ප්‍රතික්‍රියාව වේගවත් කිරීම","වායුව ලක්ෂණහීන කිරීම","පමණක් උෂ්ණත්වය වැඩි කිරීම"],0,"සාම්පලය ගත් මොහොතේ සංයුතිය රැකගැනීමට උත්සාහ කරයි."]
 ],error:"වායු එකතු කිරීමේ ක්‍රමයක් සියලු ප්‍රතික්‍රියා සඳහා සුදුසු නොවේ; වායුවේ ද්‍රාව්‍යතාව සහ ආරක්ෂාව බලන්න."
},
{
 n:["වේගයට බලපාන සාධක","Factors controlling reaction rate","வினைவேகத்தைப் பாதிக்கும் காரணிகள்"],ref:"1.5",pages:"15",
 intro:"සාන්ද්‍රණය, වායු පීඩනය, උෂ්ණත්වය, මතුපිට වර්ගඵලය සහ උත්ප්‍රේරක ප්‍රතික්‍රියාවේ වේගයට වෙනස් ආකාරවලින් බලපායි.",
 en:"Explore how concentration, gas pressure, temperature, surface area and catalysis influence rate.",
 ta:"செறிவு, அழுத்தம், வெப்பநிலை, பரப்பளவு, வினையூக்கி ஆகியவை வினைவேகத்தை மாற்றுகின்றன.",
 steps:[
 ["සාන්ද්‍රණය","වෙනත් කොන්දේසි ස්ථිර විට reactant සාන්ද්‍රණය වැඩි කිරීමෙන් අදාළ rate law අනුව වේගය වෙනස් වේ. අනුපාතය ප්‍රතික්‍රියාවේ order මත රඳා පවතී.","r = k[A]ᵐ[B]ⁿ"],
 ["වායු පීඩනය","නියත උෂ්ණත්වයේදී වායුමය reactants හි අර්ධ පීඩන වැඩිවීම සාන්ද්‍රණ ඉහළ යාමට සමාන බලපෑමක් ලබාදිය හැකිය.","[gas] = p/RT"],
 ["උෂ්ණත්වය","උෂ්ණත්වය ඉහළ යන විට Arrhenius සම්බන්ධතාවය අනුව බොහෝ ප්‍රතික්‍රියා සඳහා k වැඩිවෙයි.","k = A exp(−Ea/RT)"],
 ["මතුපිට හා උත්ප්‍රේරක","ඝන reactant කැබලි කුඩා කිරීමෙන් ලබාගත හැකි ස්පර්ශ මතුපිට වැඩිවේ. උත්ප්‍රේරක ප්‍රතික්‍රියාවට වෙනත් අඩු බාධක මාර්ගයක් සපයයි.","Surface ↑ • Ea(catalyzed) ↓"]
 ],
 q:[
 ["උෂ්ණත්වය වැඩි කළ විට බොහෝ විට k?",["වැඩි වේ","අඩු වේ","අනිවාර්යයෙන් 0","පමණක් ඍණ වේ"],0,"Arrhenius සම්බන්ධතාවය අනුව."],
 ["ඝන reactant කැබලි කුඩු කළහොත්?",["ස්පර්ශ මතුපිට වැඩිවේ","සම්පූර්ණ ස්කන්ධය වැඩිවේ","අණු වෙනස් වෙයි","හැමවිටම equilibrium constant වෙනස් වේ"],0,"සම්පූර්ණ නිරාවරණය මතුපිට වැඩිවේ."],
 ["උත්ප්‍රේරකයක ප්‍රධාන භූමිකාව?",["වෙනත් අඩු Ea මාර්ගයක්","ΔG වෙනස් කිරීම","K අගය වෙනස් කිරීම","ඵලයේ ස්කන්ධය වැඩි කිරීම"],0,"අනෙක් reaction pathway එකකි."],
 ["අදාළ rate law හි [A]⁰ නම් [A] දෙගුණ කළ විට වේගය?",["වෙනස් නොවේ","දෙගුණ වේ","සිව්ගුණ වේ","අඩක් වේ"],0,"Zero order dependence."],
 ["වායු සාන්ද්‍රණය p සමඟ සම්බන්ධ?",["p/RT","pRT","RT/p","p²RT"],0,"Ideal gas relation [gas]=p/RT."]
 ],error:"සාන්ද්‍රණය දෙගුණ කළ විට වේගය දෙගුණ වේ යැයි සෑම ප්‍රතික්‍රියාවකටම කියන්න බැහැ."
},
{
 n:["ඝට්ටන වාදය සහ Arrhenius","Collision theory and Arrhenius","மோதல் கோட்பாடும் ஆரேனியஸ் சமன்பாடும்"],ref:"1.6",pages:"16–25",
 intro:"ඵලදායී ඝට්ටනයක් සඳහා ප්‍රමාණවත් ශක්තිය සහ අවශ්‍ය නිවැරදි දිශාකරණය තිබිය යුතුය.",
 en:"Successful collisions require adequate energy and suitable orientation; temperature changes the fraction above Ea.",
 ta:"விளைபயன் மோதலுக்கு போதிய ஆற்றலும் சரியான திசையமைப்பும் வேண்டும்.",
 steps:[
 ["ඵලදායී ඝට්ටනය","අණු එකිනෙකට ගැටීම පමණක් ප්‍රමාණවත් නොවේ; E ≥ Ea සහ නිවැරදි orientation තිබිය යුතුය. සියලු ඝට්ටන ප්‍රතික්‍රියාවක් නොදෙයි.","Ecollision ≥ Ea"],
 ["සක්‍රීයකරණ ශක්තිය","ප්‍රතික්‍රියා මාර්ගයේ ශක්ති බාධකය Ea වේ. එය ΔH හෝ ΔG සමඟ ව්‍යාකූල නොකළ යුතුය.","Ea = E‡ − Ereactants"],
 ["Maxwell–Boltzmann ව්‍යාප්තිය","උෂ්ණත්වය වැඩිවන විට අධික ශක්ති ඇති අණු කොටස සාමාන්‍යයෙන් වැඩිවේ; වක්‍රයේ මුළු ප්‍රදේශය එකම සංඛ්‍යාව නියෝජනය කරන විට සමානය.","Fraction with E ≥ Ea ↑ as T ↑"],
 ["Arrhenius ප්‍රකාශය","k = A exp(−Ea/RT) හෝ ln k = ln A − Ea/(RT). ln k හා 1/T ප්‍රස්තාරයේ බෑවුම −Ea/R වේ.","ln k vs 1/T slope = −Ea/R"]
 ],
 q:[
 ["සාර්ථක ඝට්ටනයකට?",["E≥Ea සහ යෝග්‍ය දිශාව","E<Ea පමණක්","දිශාව වැදගත් නැත","හැම ගැටීමක්ම සාර්ථකයි"],0,"ශක්ති බාධකය සහ orientation දෙකම අවශ්‍යයි."],
 ["Arrhenius slope ln k vs 1/T?",["−Ea/R","+Ea/R","Ea R","1/Ea"],0,"ln k = ln A − Ea/R(1/T)."],
 ["Ea ඒකකය?",["J mol⁻¹","mol dm⁻³","s⁻¹","K"],0,"සක්‍රීයකරණ ශක්තිය මෝලයකට ශක්තියක්."],
 ["උෂ්ණත්වය වැඩිවන විට බොහෝ විට?",["k වැඩිවේ","Ea සැමවිටම අඩුවේ","ΔH=0 වෙයි","විභවය 0 වෙයි"],0,"k වැඩිවීම Ea අනිවාර්යයෙන් අඩුවීමක් නොවේ."],
 ["ln k = ln A − Ea/RT හි T?",["Kelvin","Celsius අංකය පමණක්","තත්පර","මෝල"],0,"T absolute temperature, K."]
 ],error:"බොහෝ අය Ea, ΔH හා molecular collision energy එකම ලෙස ගනී; Arrhenius T අනිවාර්යයෙන් K භාවිත කරන්න."
},
{
 n:["වේග නියම, පෙළ සහ අර්ධ ජීව කාලය","Rate laws, orders and half-life","வேகவிதி, வரிசை, அரைவாழ்நேரம்"],ref:"1.7",pages:"26–52",
 intro:"පරීක්ෂණ දත්ත මත වේග නියමය සොයාගෙන reaction order, k ඒකක, concentration-time graphs හා half-life වෙන්කර හඳුනාගන්න.",
 en:"Derive experimental rate laws and use zero-, first- and second-order integrated equations.",
 ta:"சோதனைத் தரவிலிருந்து வேகவிதி, வரிசை, k அலகு மற்றும் அரைவாழ்நேரம் காண்க.",
 steps:[
 ["පරීක්ෂණාත්මක වේග නියමය","r = k[A]ᵐ[B]ⁿ හි m හා n පරීක්ෂණ දත්තවලින් සොයාගන්නා අගය වේ. සාමාන්‍යයෙන් සමස්ත සමීකරණයේ සංගුණක වලට ඒවා සමාන යැයි උපකල්පනය කළ නොහැක.","overall order = m + n"],
 ["පෙළ 0, 1, 2 ප්‍රස්තාර","Zero order හි [A] = [A]₀−kt. First order හි ln[A]=ln[A]₀−kt. Second order (එකම A සම්බන්ධ) හි 1/[A]=1/[A]₀+kt.","[A] | ln[A] | 1/[A] vs t"],
 ["අර්ධ ජීව කාලය","පළමු පෙළ ප්‍රතික්‍රියාවේ t½ = ln2/k යන අගය ආරම්භක [A] මත රඳා නැත. ශූන්‍ය හා දෙවන පෙළ සඳහා එසේ නොවේ.","1st order: t½ = 0.693/k"],
 ["k ඒකක සහ initial rates","r ඒකක mol dm⁻³ s⁻¹ නම් k ඒකක order අනුව වෙනස් වේ: zero → mol dm⁻³ s⁻¹; first → s⁻¹; second → dm³ mol⁻¹ s⁻¹. එක් ප්‍රතික්‍රියකය පමණක් වෙනස් කළ initial rate data සසඳන්න.","order 2: k = r/[A]²"]
 ],
 q:[
 ["r = k[A]²[B] හි overall order?",["3","2","1","4"],0,"2+1=3."],
 ["පළමු පෙළ k ඒකක?",["s⁻¹","mol dm⁻³ s⁻¹","dm³ mol⁻¹ s⁻¹","mol² dm⁻³"],0,"First order k per time."],
 ["පළමු පෙළ ප්‍රතික්‍රියාවකට සෘජු ප්‍රස්තාරය?",["ln[A] vs t","[A]² vs t","1/[A] vs t","[A]¹ᐟ² vs t"],0,"ln[A] = ln[A]₀ − kt."],
 ["පළමු පෙළ t½?",["0.693/k","[A]₀/(2k)","1/(k[A]₀)","2k"],0,"පළමු පෙළට පමණක් මෙම ආකාරයයි."],
 ["Rate law exponents සොයාගන්නේ?",["පරීක්ෂණ දත්තවලින්","සෑමවිටම balancing coefficients වලින්","නිෂ්පාදන වර්ණයෙන්","රසායනික සංකේතයෙන්"],0,"Rate law පරීක්ෂණ මත රඳා පවතී."]
 ],error:"Rate-law පෙළ සෑමවිටම balancing coefficient නොවේ. First-order half-life නියත බව වෙනත් පෙළවලට නොයොදන්න."
},
{
 n:["ඝන ද්‍රව්‍යයේ මතුපිට බලපෑම","Effect of surface area","மேற்பரப்பின் விளைவு"],ref:"1.8",pages:"53",
 intro:"ඝන reactant එකක් ද්‍රාවණයක් සමඟ ප්‍රතික්‍රියා කරන විට නිරාවරණය වූ මතුපිට වර්ගඵලය වෙනස් කිරීමෙන් වේගය වෙනස් විය හැකිය.",
 en:"Finely divided solids expose more reactive surface than equal masses of large chunks.",
 ta:"பெரிய துண்டுகளை விட சிறுதுகள்கள் அதிக வினைப்பரப்பை வெளிப்படுத்துகின்றன.",
 steps:[
 ["කැබලි හා කුඩු","සමාන ස්කන්ධයක විශාල CaCO₃ කැබැල්ලකට වඩා කුඩා කැබලි බොහොමයක එකතුවට වැඩි සමස්ත නිරාවරණය මතුපිට තිබිය හැකිය.","Surface area ↑ → interface collisions ↑"],
 ["ඝන–ද්‍රව අතුරුමුහුණත","විෂමජාතික ප්‍රතික්‍රියාවක් බොහෝවිට අතුරුමුහුණතෙහි සිදුවන නිසා, reactant ද්‍රවය හා ස්පර්ශ වන ඝන මතුපිට ප්‍රමාණය වැදගත්ය.","Solid + solution → interface reaction"],
 ["සමාන ස්කන්ධ පරීක්ෂණය","ස්කන්ධය, සාන්ද්‍රණය, පරිමාව සහ උෂ්ණත්වය එකම තබා powder සහ lumps සැසඳීම නිවැරදි පාලිත පරීක්ෂණ සැලැස්මකි.","controlled variables: m, c, V, T"],
 ["ආහාර සහ ඖෂධ","ඖෂධ පෙති කුඩා කිරීම හෝ කුඩු කිරීමෙන් දියවීමේ වේගය වෙනස් විය හැකි නමුත් සියලු ඖෂධ කුඩු කිරීම ආරක්ෂිත නොවේ.","Powdered solid → larger exposed area"]
 ],
 q:[
 ["එකම CaCO₃ ස්කන්ධයක වැඩි මතුපිට?",["කුඩු","විශාල කැබැල්ල","දෙකම අනිවාර්යයෙන් සමානයි","අණුවක්"],0,"කුඩු ස්පර්ශ මතුපිට වැඩිකරයි."],
 ["Surface area පරීක්ෂණයේ ස්ථිර තබාගත යුත්තේ?",["උෂ්ණත්වය සහ සාන්ද්‍රණය","සියල්ල වෙනස් කරන්න","ස්කන්ධය වෙනස් කරන්න","කාල මිනුම ඉවත් කරන්න"],0,"කන්ට්‍රෝල් යෙදිය යුතුය."],
 ["ඝන–ද්‍රව ප්‍රතික්‍රියාවන් බොහෝවිට සිදුවන්නේ?",["අතුරුමුහුණත","ද්‍රාවණයෙන් පිටත","බඳුන තුළ සියලු ස්ථානවල එකම ලෙස","ආලෝකයෙන් පමණි"],0,"නිරාවරණය මතුපිට විශේෂය."],
 ["සමාන ඝන ස්කන්ධය කුඩු කළ විට?",["මුළු ස්කන්ධය එකමයි","මුළු ස්කන්ධය දෙගුණ වේ","රසායනික සූත්‍රය වෙනස් වේ","අනිවාර්යයෙන් නව ඵලයක් වේ"],0,"මතුපිට පමණක් වෙනස් වේ."],
 ["සාමාන්‍යයෙන් වැඩි මතුපිටින්?",["ආරම්භක වේගය වැඩි විය හැක","සමතුලිත නියතය වෙනස් වේ","ΔH නියතව අඩුවේ","උත්ප්‍රේරකයක් සෑදේ"],0,"Surface collision frequency වැඩිවිය හැක."]
 ],error:"එකම ස්කන්ධය සහ සමාන කොන්දේසි සසඳන බව පැහැදිලිව සඳහන් නොකර powder යනු අනිවාර්යයෙන් වේගවත් යැයි නොකියන්න."
},
{
 n:["උත්ප්‍රේරක සහ වේගය","Catalysis and rate","வினையூக்கமும் வேகமும்"],ref:"1.9",pages:"54–56",
 intro:"උත්ප්‍රේරකය වෙනත් ප්‍රතික්‍රියා මාර්ගයක් ලබාදීමෙන් වේගය වෙනස් කරයි. එය ප්‍රතික්‍රියා ඵලයේ තාපගතික තත්ත්වය නොවෙනස් කරයි.",
 en:"Catalysts change the pathway and activation barrier without changing equilibrium constants.",
 ta:"வினையூக்கி மாற்று வழியை வழங்கி ஆற்றல் தடையை குறைக்கும்; சமநிலை மாறிலியை மாற்றாது.",
 steps:[
 ["අඩු ශක්ති මාර්ගය","උත්ප්‍රේරකය ක්‍රියා කරන මාර්ගයේ activation energy අඩුවිය හැක. මෙය ΔH හෝ ΔG වෙනස් කිරීමක් නොවේ.","Ea(cat) < Ea(uncat)"],
 ["එකජාතික/විෂමජාතික","Homogeneous catalyst එක reactants සමඟ එකම අවස්ථාවේ පවතියි; heterogeneous catalyst වෙනත් අවස්ථාවක පවතී. පෘෂ්ඨයේ adsorption වැදගත් විය හැක.","homogeneous vs heterogeneous"],
 ["H₂O₂ වියෝජනය","දියර H₂O₂ තුළ MnO₂ වැනි උත්ප්‍රේරකයකින් O₂ බුබුළු නිර්මාණය වීම වේගවත් කළ හැක. මෙය නිවසේ අත්හදා බලන ක්‍රියාකාරකමක් නොවේ.","2H₂O₂ → 2H₂O + O₂"],
 ["සමතුලිතයට බලපෑම","ප්‍රතිවර්තන ප්‍රතික්‍රියාවක ඉදිරි හා පසුගාමී වේගයන් දෙකම ඉහළ කළ හැකි නමුත් එකම T හි equilibrium constant හෝ equilibrium composition වෙනස් නොවේ.","K unchanged at fixed T"]
 ],
 q:[
 ["උත්ප්‍රේරකයක් ප්‍රධාන වශයෙන්?",["අඩු Ea මාර්ගයක්","ΔH අඩු කරයි","K වෙනස් කරයි","අවසාන ඵල වෙනස් කරයි"],0,"වෙනත් kinetics pathway."],
 ["H₂O₂ → H₂O + O₂ සඳහා සාමාන්‍ය උත්ප්‍රේරක?",["MnO₂","NaCl පමණි","He","Ne"],0,"MnO₂ H₂O₂ වියෝජනය වේගවත් කළ හැක."],
 ["උත්ප්‍රේරකය සමතුලිත නියතයට?",["නියත T හි බලපාන්නේ නැත","සෑමවිටම දෙගුණ කරයි","ශූන්‍ය කරයි","ඍණ කරයි"],0,"K තාපගතික වශයෙන් තීරණය වේ."],
 ["Heterogeneous catalysis හි?",["විවිධ අවස්ථා","එකම අවස්ථාව පමණි","උෂ්ණත්වය නැත","ප්‍රතික්‍රියාව නැත"],0,"Catalyst හා reactants වෙනත් phases."],
 ["උත්ප්‍රේරකයකින්?",["සමතුලිතයට ළඟාවීමට ගතවන කාලය අඩුවිය හැක","උෂ්ණත්වය අනිවාර්යයෙන් 0 වෙනවා","ΔG ඉහළ යයි","ඵලයේ මෝල ද්විත්ව වේ"],0,"සාමාන්‍යයෙන් forward/reverse speed up."]
 ],error:"Catalyst එකක් equilibrium position හෝ K වෙනස් කරන බව ලිවීම වැරදි වේ; එය වේගය වෙනස් කරයි."
},
{
 n:["ප්‍රතික්‍රියා යාන්ත්‍රණ","Reaction mechanisms","வினை இயங்குமுறை"],ref:"1.10",pages:"57–69",
 intro:"මූලික පියවර, molecularity, මන්දගාමී පියවර, intermediate හා pre-equilibrium මගින් නිරීක්ෂිත rate law පැහැදිලි කරන්න.",
 en:"Connect elementary steps and intermediates to experimentally observed rate laws.",
 ta:"அடிப்படை படிகள், இடைநிலைச் சேர்மங்கள் மற்றும் மெதுவான படி மூலம் வேகவிதியை விளக்குக.",
 steps:[
 ["මූලික පියවර","Elementary step එකක molecularity එම පියවරට සෘජුව සම්බන්ධ particles ගණනයි. සමස්ත ප්‍රතික්‍රියාවේ order සමඟ molecularity ව්‍යාකූල නොකරන්න.","elementary: A + B → products"],
 ["අතරමැදිකයන්","Reaction intermediate එක පියවරකදී සෑදී පසුව වෙනත් පියවරකදී වැයවේ. සමස්ත සමීකරණයේදී එය ඉවත් විය යුතුය.","A→I→P; I = intermediate"],
 ["මන්දගාමී පියවර","සුදුසු යාන්ත්‍රණයක slow step වේගය පාලනය කරන විට එම elementary step මගින් rate law බොහෝවිට සොයාගත හැක. ඒත් තේරීම පරීක්ෂණ දත්ත සමඟ ගැළපිය යුතුය.","slow elementary step → rate limiting"],
 ["පූර්ව සමතුලිතය","Fast reversible pre-equilibrium එකක intermediate සාන්ද්‍රණය ඉහත සමතුලිත සම්බන්ධතාවයකින් ප්‍රතිස්ථාපනය කර ප්‍රතික්‍රියා වේග නියමය සොයයි.","Kpre = [I]/[A] (illustrative)"]
 ],
 q:[
 ["Elementary step molecularity යනු?",["සෘජුව සම්බන්ධ species ගණන","සමස්ත සමීකරණ පෙළ","නිෂ්පාදන අණුක ස්කන්ධය","සක්‍රීයකරණ ශක්තිය"],0,"එක් මූලික පියවරේ species ගණනයි."],
 ["Intermediate එකක්?",["පියවරක සෑදී පසුව වැයවේ","අනිවාර්යයෙන් අවසාන ඵලය","සෑමවිටම catalyst","ආරම්භක reactant පමණි"],0,"මුළු සමීකරණයෙන් අවලංගු විය යුතුය."],
 ["Observed rate law සම්බන්ධ?",["පරීක්ෂණ දත්ත","සමස්ත coefficients පමණි","බඳුනේ හැඩය","වර්ණය පමණි"],0,"යාන්ත්‍රණය නිරීක්ෂිත rate law සමඟ ගැළපිය යුතුය."],
 ["Slow rate-determining step?",["වේගයට ප්‍රධාන සීමාවක්","අනිවාර්යයෙන් ඉක්මන්ම","K අගය නියම කරයි","උෂ්ණත්වය අඩු කරයි"],0,"ඉතා මන්දගාමී මූලික පියවරයි."],
 ["A ⇌ I (fast), I → P (slow) දී?",["[I] pre-equilibrium මඟින් ප්‍රකාශ කළ හැක","සමස්ත order අනිවාර්යයෙන් 0","I අගය සැමවිටම ශූන්‍යයි","A අවසන් ඵලයයි"],0,"Fast equilibrium intermediate සම්බන්ධතාවයක් ලබාදිය හැක."]
 ],error:"Molecularity සලකන්නේ elementary step සඳහා පමණි; overall reaction එකට නොවේ. මන්දගාමී පියවර කිව හැක්කේ සාධක මතයි."
},
{
 n:["ශක්ති ප්‍රස්තාර සහ සක්‍රීයකරණ බාධක","Reaction energy profiles","வினை ஆற்றல் வரைபடங்கள்"],ref:"1.11",pages:"70–74",
 intro:"ප්‍රතික්‍රියා මාර්ගය ඔස්සේ potential energy වෙනස්වීම රූපගත කර, Ea forward/reverse, ΔH, හා catalyst බලපෑම වෙන්කර හඳුනාගන්න.",
 en:"Read energy profiles for activation barriers, reaction enthalpy and catalytic alternatives.",
 ta:"ஆற்றல் வரைபடத்தில் முன்/பின் செயலாக்க ஆற்றல், ΔH மற்றும் வினையூக்கியின் தாக்கத்தைக் காண்க.",
 steps:[
 ["ප්‍රතික්‍රියා ශක්ති බාධකය","Potential energy curve එකේ ප්‍රතික්‍රියක මට්ටමේ සිට transition state උපරිමය දක්වා වෙනස ඉදිරි activation energy වේ.","Ea,f = E‡ − ER"],
 ["තාපදායක / තාපාවශෝෂක","ඵලයේ ශක්ති මට්ටම අඩු නම් ΔH < 0 (තාපදායක); ඵලයේ ශක්තිය වැඩි නම් ΔH > 0 (තාපාවශෝෂක).","ΔH = EP − ER"],
 ["ප්‍රතිවර්තන බාධකය","එකම one-step energy profile එකක Ea,reverse = E‡ − EP; එබැවින් Ea,f−Ea,r = ΔH වේ.","Ea,f − Ea,r = ΔH"],
 ["උත්ප්‍රේරක සහ energy profile","Catalyst ඇති/නැති ප්‍රස්තාර දෙකේ reactant හා product ශක්ති මට්ටම් එකමයි. පමණක් alternative pathway හි උපරිම ශක්ති බාධකය වෙනස් වේ.","ΔH(cat) = ΔH(uncat)"]
 ],
 q:[
 ["Exothermic reaction එකක?",["ΔH<0","ΔH>0","Ea=0","K=0"],0,"ඵලයේ energy අඩුයි."],
 ["Ea,forward නිවැරදිව?",["E‡−ER","EP−ER","E‡−EP","ER−EP"],0,"Reactants සිට transition state."],
 ["ΔH සඳහා?",["EP−ER","E‡−ER","ER+EP","E‡+EP"],0,"Products minus reactants."],
 ["Ea,f − Ea,r?",["ΔH","−ΔH","0 සැමවිටම","RT"],0,"E‡−ER − (E‡−EP)=EP−ER."],
 ["Catalyst energy profile එකේ වෙනස් නොවන්නේ?",["ER සහ EP","Ea අනිවාර්යයෙන්","Pathway","Transition state"],0,"ආරම්භක සහ අවසාන energy එකමයි."]
 ],error:"ΔH සහ Ea වෙනස් ශක්ති පරාස දෙකකි; catalyst මඟින් ΔH වෙනස් නොවේ."
}
];
var EN_STEPS=[
["Thermodynamic favourability does not imply a high reaction rate.","Concentration or product amount is observed over time.","A mechanism consists of elementary steps and intermediates.","Food spoilage, combustion and tablets illustrate kinetic control."],
["Reactant concentration falls, so use a negative derivative.","Product concentrations rise as products form.","Average rate uses a finite time interval.","Instantaneous rate is the tangent gradient at a specified time."],
["Normalize each concentration change by its coefficient.","HI forms twice as fast as H₂ disappears in this equation.","Convert the oxygen production rate using stoichiometric coefficients.","Raw slopes can differ although the reaction rate is uniquely defined."],
["A gas syringe can track gas volume with time.","Mass may fall when gas escapes an open vessel.","Colorimetry can follow absorbance when conditions permit.","Quenched samples can be analyzed by titration."],
["Reaction order controls the influence of concentration.","Gas concentration follows p/RT for an ideal gas.","Temperature commonly increases the rate constant.","Surface area and catalysts can also change the rate."],
["Energy and orientation govern effective collisions.","Activation energy is a kinetic barrier, not the reaction enthalpy.","Heating increases the population above the energy barrier.","A plot of ln k against 1/T has slope −Ea/R."],
["Rate law exponents are obtained experimentally.","Zero-, first-, and second-order reactions have different straight-line plots.","First-order half-life is independent of initial concentration.","The units of k depend on overall reaction order."],
["Small particles expose more total surface area.","Heterogeneous reactions occur at interfaces.","Keep mass, temperature and concentration controlled.","Dissolution can be influenced by exposed area."],
["Catalysts offer an alternative lower-barrier route.","Homogeneous and heterogeneous catalysts differ by phase.","MnO₂ catalyzes decomposition of hydrogen peroxide.","Catalysts do not change the equilibrium constant at fixed temperature."],
["Molecularity applies to individual elementary steps.","Intermediates form and are then consumed.","A slow elementary step can limit the overall rate.","A fast pre-equilibrium can express an intermediate concentration."],
["Forward activation energy measures reactants to transition state.","Reaction enthalpy depends on product minus reactant energies.","Reverse activation energy measures products to the transition state.","Catalysts lower an alternative barrier without changing ΔH."]
];
var TA_STEPS=[
["வெப்பவியலில் சாதகமான வினை வேகமாக இருக்க வேண்டியதில்லை.","செறிவு அல்லது விளைபொருள் அளவு நேரத்தோடு கண்காணிக்கப்படுகிறது.","இயங்குமுறை அடிப்படை படிகளையும் இடைநிலைகளையும் கொண்டது.","உணவு கெடுதல், எரிதல் ஆகியவை வேகவியலுக்கான எடுத்துக்காட்டுகள்."],
["வினைபொருள் செறிவு குறைவதால் எதிர்மறைக் குறி பயன்படும்.","விளைபொருளின் செறிவு அதிகரிக்கிறது.","சராசரி வேகம் ஒரு நேர இடைவெளியைப் பயன்படுத்துகிறது.","உடனடி வேகம் வளைவின் தொடுகோடு சாய்வு."],
["ஒவ்வொரு செறிவு மாற்றமும் சமன்பாட்டுக் குணகத்தால் வகுக்கப்படுகிறது.","HI உருவாகும் வீதம் H₂ நுகர்வை விட இரண்டு மடங்கு.","வேகத்தை குணகங்களுடன் கணக்கிடுக.","மூல சாய்வுகள் வேறுபட்டாலும் ஒட்டுமொத்த வேகம் ஒன்றே."],
["வாயு அளவை நேரத்திற்கு எதிராக அளக்கலாம்.","வாயு வெளியேறும்போது திறந்த பாத்திரத்தின் நிறை குறையலாம்.","நிறமுள்ள பொருளின் ஒளியுறிஞ்சலைப் பயன்படுத்தலாம்.","மாதிரியை நிறுத்தி தரப்பகுப்பாய்வு செய்யலாம்."],
["வேகவிதியிலுள்ள வரிசை செறிவு விளைவைக் கட்டுப்படுத்துகிறது.","சீரிய வாயுவிற்கு செறிவு p/RT ஆகும்.","வெப்பநிலை உயர்வு பெரும்பாலும் k ஐ அதிகரிக்கும்.","மேற்பரப்பும் வினையூக்கியும் வேகத்தை மாற்றலாம்."],
["திறனுள்ள மோதலுக்கு போதிய ஆற்றலும் திசையும் வேண்டும்.","செயலாக்க ஆற்றல் என்பது வினையின் ஆற்றல் தடையாகும்.","வெப்பம் உயர்ந்தால் தடை மீறும் துகள்களின் பங்கு அதிகரிக்கும்.","ln k மற்றும் 1/T வரைபடச் சாய்வு −Ea/R."],
["வேகவிதியின் அடுக்குகள் சோதனை வழியே பெறப்படுகின்றன.","பூஜ்யம், முதல், இரண்டாம் வரிசைகளின் வரைபடங்கள் வேறுபடும்.","முதல் வரிசையின் அரைவாழ்நேரம் தொடக்கச் செறிவைச் சாராது.","k இன் அலகு வினை வரிசையைச் சாரும்."],
["சிறுதுகள்களுக்கு அதிக மொத்த மேற்பரப்பு உள்ளது.","பல்வேறு நிலைகளுக்கிடை எல்லையில் வினை நடைபெறலாம்.","நிறை, வெப்பநிலை, செறிவை நிலையாக வைத்திடுக.","கரைதல் வேகம் மேற்பரப்பால் பாதிக்கப்படலாம்."],
["வினையூக்கி குறைந்த ஆற்றல் தடையுடைய வழியை அளிக்கிறது.","ஒரே நிலை அல்லது பல நிலை வினையூக்கிகள் உள்ளன.","MnO₂, H₂O₂ சிதைவை வேகப்படுத்துகிறது.","நிலையான வெப்பநிலையில் சமநிலை மாறிலி மாறாது."],
["மூலக்கூறுத்தன்மை தனிப்பட்ட அடிப்படை படிக்கு உரியது.","இடைநிலைகள் உருவாகி பின்னர் நுகரப்படுகின்றன.","மெதுவான படி மொத்த வேகத்தை வரம்பிடலாம்.","வேகமான முன் சமநிலை இடைநிலைச் செறிவைத் தரலாம்."],
["முன்னோக்கு Ea, வினைபொருளிலிருந்து மாற்றுநிலைக்கான தடையாகும்.","ΔH என்பது விளைபொருள் மற்றும் வினைபொருள் ஆற்றல் வேறுபாடு.","பின்னோக்கு Ea மாற்றுநிலை மற்றும் விளைபொருள் ஆற்றல் வேறுபாடு.","வினையூக்கி ΔH ஐ மாற்றாமல் தடையைக் குறைக்கிறது."]
];
function index(lang){return lang==="si"?0:lang==="ta"?2:1;}
function esc(v){return String(v===undefined?"":v).replace(/[&<>"']/g,function(x){return {"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[x]})}
function units(){return chapters.map(function(c,i){return {name:c.n,ref:c.ref,pages:c.pages,intro:[c.intro,c.en,c.ta],steps:c.steps.map(function(s,j){return {t:[s[0],s[0].match(/[A-Za-z]/)?s[0]:["Concept "+(j+1),"Process "+(j+1),"Application "+(j+1),"Exam focus"][j],s[0]],d:[s[1],EN_STEPS[i][j],TA_STEPS[i][j]],eq:s[2]}}),qs:c.q.map(function(q){return [q[0],"Select the correct answer: "+c.n[1]+" • Question "+(j+1),"சரியான விடையைத் தேர்ந்தெடுக்கவும்",q[1],q[2],q[3]]})}})}
var U11=units();var gatePools={},gateUi={},examSelections={};
function done(){try{var x=JSON.parse(localStorage.getItem("chem-unit11-mastered")||"[]");var a=[];for(var i=0;i<chapters.length;i++){if(x.includes(i))a.push(i);else break}return a}catch(e){return []}}
function notes(){var obj={};["si","en","ta"].forEach(function(lang){var ix=index(lang);obj[lang]=U11.map(function(c){return {t:c.name[ix],b:c.steps.map(function(st){return st.d[ix]}),f:c.steps.map(function(st){return st.eq}).join(" • "),exam:[c.intro[ix]]}})});return obj}
function meta(){var obj={};["si","en","ta"].forEach(function(lang){var ix=index(lang);obj[lang]=U11.map(function(c){return c.steps.map(function(st){return st.t[ix]})})});return obj}
function ui(lang){var i=index(lang),txt={
si:{sub:"NIE 13 ශ්‍රේණිය 11 ඒකකය (මුද්‍රිත පිටු 1–74) පදනම් කරගත් සම්පූර්ණ ඉගෙනුම් ගමනකි. වේගය → ඝට්ටන → rate law → උත්ප්‍රේරක → යාන්ත්‍රණ → ශක්ති ප්‍රස්තාර.",guide:"ඉගෙනුම් ගමන — වේග මැනීම → ඝට්ටන → පෙළ/අර්ධ ජීව කාලය → යාන්ත්‍රණ",source:"NIE රසායන විද්‍යාව 13 ශ්‍රේණිය, භෞතික රසායනය II කොටස, 11 ඒකකය: චාලක රසායනය (2019; මුද්‍රිත පිටු 1–74). සටහන් මුල් කෘතිය නැවත ලියූ ඉගෙනුම් සාරාංශයකි."},
en:{sub:"A full 11-section learning journey following NIE Grade 13 Chemistry Unit 11: rates, collision theory, rate laws, catalysis, mechanisms and energy profiles.",guide:"Journey: measurement → collisions → orders and half-life → mechanisms",source:"NIE Grade 13 Chemistry Resource Book, Physical Chemistry Part II, Unit 11: Chemical Kinetics, 2019 edition, printed pp.1–74."},
ta:{sub:"NIE தரம் 13, அலகு 11 அடிப்படையில் வேகம், மோதல்கள், வேகவிதிகள், வினையூக்கிகள், இயங்குமுறை, ஆற்றல் வரைபடங்கள்.",guide:"கற்றல் பயணம்: அளவீடு → மோதல் → வரிசை → இயங்குமுறை",source:"NIE தரம் 13 இரசாயனவியல் வளநூல், அலகு 11, அச்சுப் பக்கங்கள் 1–74 (2019)."}
}[lang]||null;if(!txt){txt={sub:"NIE Grade 13 chemical kinetics.",guide:"Rates → mechanisms",source:"NIE Chemistry Unit 11."};}
return {title:"Unit 11 — "+["චාලක රසායනය","Chemical Kinetics","வேதி வினைவேகவியல்"][i],sub:txt.sub,guide:txt.guide,source:txt.source,sections:U11.map(function(c){return c.name[i]})}}
var pictures={
"11-0-3":["Alka-Seltzer tablet dissolving - wide.jpg","දියවන effervescent පෙත්තක CO₂ බුබුළු — ප්‍රතික්‍රියා වේගය දෘශ්‍යමාන වන උදාහරණයක්.","Mysterymanblue • Wikimedia Commons"],
"11-3-0":["HCl & magnesium.jpg","මැග්නීසියම් හා HCl අතර සැබෑ ප්‍රතික්‍රියාව; හයිඩ්‍රජන් බුබුළු මැනීමෙන් වේගය සලකා බලන්න.","Dr.T • Wikimedia Commons • CC BY-SA 3.0"],
"11-7-0":["Alka-Seltzer tablet breaking water surface.jpg","Effervescent පෙත්ත ජලයේ දියවීම: මතුපිට වර්ගඵලය සහ දියවීම සම්බන්ධ උදාහරණයක්.","Mysterymanblue • Wikimedia Commons"],
"11-8-2":["H2O2 catalytic decomposition.JPG","MnO₂ උත්ප්‍රේරකය හා H₂O₂ ඉතා තනුක ද්‍රාවණයෙන් O₂ බුබුළු නික්මීම.","Chemicalinterest • Wikimedia Commons • Public domain"],
"11-8-0":["Catalytic Converter.JPG","වාහන නිකාස පද්ධතියේ catalytic converter — විෂමජාතික උත්ප්‍රේරක යෙදුමක්.","Wikimedia Commons • CC BY-SA 3.0"]
};
var vids={0:"sxrPBaXDIxE",6:"UIRUpPdLzpg"};
function sectionMedia(i){var v=vids[i];return {images:[],videos:v?[{id:v,title:{si:i===0?"චාලක රසායනය — ඒකකය 11": "චාලක රසායනය — සම්පූර්ණ පුනරීක්ෂණය",en:"Chemical kinetics — Sinhala A/L lesson",ta:"வேதி வினைவேகவியல் — சிங்கள பாடம்"},channel:"Amila Dasanayake • verified YouTube"}]:[]}}
function svgLine(k,ord){var pts=[];for(var x=0;x<=100;x+=2){var t=x/25,val=ord===0?Math.max(0,1-k*.12*t):ord===2?1/(1+k*.9*t):Math.exp(-k*.8*t);pts.push((x===0?"M":"L")+(18+x*2.02).toFixed(1)+" "+(130-99*val).toFixed(1))}return pts.join(" ")}
function visual(i,j,label){
var c=U11[i],eq=c.steps[j].eq,graph=i===1||i===2||i===6||i===10||i===8,collisions=i===5||i===4,kind=i===6?"orders":i===8||i===10?"barrier":i===1||i===2?"rate":collisions?"collision":"formula";
var pic='<div class="k11Mini"><div class="k11Molecules"><span>A</span><span>B</span><span>C</span><span>D</span></div></div>';
if(graph){pic='<svg class="k11Plot" viewBox="0 0 245 155" role="img" aria-label="Interactive kinetic curve"><path d="M18 12 V130 H236" class="axes"/><path data-k11-curve d="'+svgLine(1,1)+'" class="curve"/>'+(kind==="barrier"?'<path d="M18 106 C50 105 72 26 112 26 S176 78 231 80" class="altCurve"/>':'')+'<text x="5" y="10">y</text><text x="228" y="148">t</text></svg>';}
if(collisions){pic='<div class="k11Particles"><b>A</b><b>B</b><b>A</b><b>B</b><b>A</b><b>B</b><div class="k11Barrier">Eₐ</div></div>'}
var input=(kind==="rate"||kind==="orders"||kind==="collision"||kind==="barrier")?'<label class="k11SliderLabel">'+(i===8||i===10?"උත්ප්‍රේරක බලපෑම":i===5?"උෂ්ණත්වය":i===6?"k — rate constant":"ප්‍රතික්‍රියා වේගය")+' <strong data-k11-value>50%</strong><input type="range" min="10" max="100" value="50" data-k11-slider aria-label="Change model rate"></label>':'';
return '<div class="k11Viz" data-k11-kind="'+kind+'"><div class="k11VizTop">⚗ චාලක රසායනය • '+esc(label)+'</div><div class="k11VizWindow">'+pic+'</div><div class="k11Formula">'+esc(eq)+'</div>'+input+'<small>අන්තර්ක්‍රියාකාරී සංකල්ප ආකෘතිය • සත්‍ය පරීක්ෂණ දත්ත නොවේ</small></div>';
}
function assessment(lang){var si=lang==="si",ta=lang==="ta",iq=index(lang),title=si?"ව්‍යුහගත හා රචනා පුහුණුව":ta?"கட்டமைப்பு மற்றும் கட்டுரை பயிற்சி":"Structured and essay practice";var written=[
["A→P ප්‍රතික්‍රියාවක් සඳහා [A]–t අගයන් ලබා දී ඇති විට මධ්‍යක හා ක්ෂණික වේග සොයාගන්න.","−Δ[A]/Δt සූත්‍රය හා ස්පර්ශක බෑවුම භාවිත කරන්න."],
["2NO₂→2NO+O₂ හි O₂ සෑදීමේ වේගය අනුව NO₂ වැයවීමේ වේගය සොයන්න.","r=d[O₂]/dt=−½d[NO₂]/dt."],
["තත්ත්ව වෙනස් නොකර surface area effect පරීක්ෂණයක් සැලසුම් කරන්න.","එකම ඝන ස්කන්ධය, c,V,T; powder හා lumps සැසඳීම."],
["පළමු පෙළ ප්‍රතික්‍රියාවේ k, t½, ln[A] ගණනය කරන්න.","ln[A]=ln[A]₀−kt; t½=0.693/k."],
["Initial rate දත්තවලින් r=k[A]ᵐ[B]ⁿ සොයාගන්න.","එක් සාන්ද්‍රණයක් පමණක් වෙනස් කළ trials සසඳන්න."],
["Arrhenius ln k හා 1/T ප්‍රස්තාරය විස්තර කරන්න.","slope = −Ea/R; Kelvin භාවිත කරන්න."],
["උත්ප්‍රේරක සහිත/රහිත energy profiles දෙක ඇඳ බලපෑම දක්වන්න.","Ea වෙනස් වුවද ΔH හා K නියත T හි නොවෙනස් වේ."],
["Fast pre-equilibrium සහ slow step යාන්ත්‍රණයක් විග්‍රහ කරන්න.","Intermediates ඉවත් කර rate law පරීක්ෂණ දත්ත සමඟ ගළපන්න."]
];
var mcq=U11.flatMap(function(c,i){return c.qs.map(function(q,j){return {i:i,j:j,q:q}})}),html="";
html+='<section class="k11Practice"><h2>'+title+'</h2><p>'+(si?"NIE සංකල්ප අනුව සකස් කළ නව ආදර්ශ ප්‍රශ්න. මුල් පසුගිය විභාග ප්‍රශ්න නොවේ.":ta?"NIE அடிப்படையிலான புதிய பயிற்சி வினாக்கள்.":"Original practice questions aligned with NIE, not copied exam papers.")+'</p>';
html+='<details class="k11AllQuiz"><summary>✓ '+(si?"බහුවරණ අභ්‍යාස 55ක්":ta?"55 பல்தேர்வு வினாக்கள்":"55 practice MCQs")+'</summary><div class="k11QuestionDeck">'+mcq.map(function(z,k){return '<div class="k11Question"><b>'+(k+1)+'. '+esc(z.q[0])+'</b>'+z.q[1].map(function(o,j){return '<button type="button" data-k11-answer="'+k+'-'+j+'">'+esc(o)+'</button>'}).join("")+'<p data-k11-feedback="'+k+'" hidden></p></div>'}).join("")+'</div></details>';
html+='<h3>'+(si?"ව්‍යුහගත ආදර්ශ ප්‍රශ්න":ta?"கட்டமைப்பு வினாக்கள்":"Structured model questions")+'</h3>'+written.slice(0,4).map(function(q,j){return '<details><summary>'+(j+1)+'. '+esc(q[0])+'</summary><p>'+esc(q[1])+'</p></details>'}).join("");
html+='<h3>'+(si?"රචනා ආදර්ශ ප්‍රශ්න":ta?"கட்டுரை வினாக்கள்":"Essay-style questions")+'</h3>'+written.slice(4).map(function(q,j){return '<details><summary>'+(j+1)+'. '+esc(q[0])+'</summary><p>'+esc(q[1])+'</p></details>'}).join("");
return html+'<p class="k11Source"><a href="https://nie.lk/pdffiles/other/eGr13OM%20Physical%20Chemistry-Part%202.pdf" target="_blank" rel="noopener noreferrer">NIE Grade 13 Resource Book ↗</a> · '+(si?"කොටස් 1.1–1.11, මුද්‍රිත පිටු 1–74":"Sections 1.1–1.11, pages 1–74")+'</p></section>';
}
function bind(){
document.querySelectorAll(".k11Viz [data-k11-slider]").forEach(function(slider){var host=slider.closest(".k11Viz");function update(){var v=Number(slider.value),kind=host.getAttribute("data-k11-kind"),label=host.querySelector("[data-k11-value]");if(label)label.textContent=v+"%";host.style.setProperty("--k11-speed",(0.6+v/42).toFixed(2)+"s");var curve=host.querySelector("[data-k11-curve]");if(curve)curve.setAttribute("d",svgLine(.2+v/35,kind==="orders"?2:1));var alt=host.querySelector(".altCurve");if(alt)alt.style.transform="translateY("+(v*.27-10).toFixed(0)+"px)"}slider.addEventListener("input",update);update()});
document.querySelectorAll("[data-k11-answer]").forEach(function(btn){btn.addEventListener("click",function(){var p=btn.getAttribute("data-k11-answer").split("-"),q=U11.flatMap(function(c){return c.qs})[+p[0]],parent=btn.closest(".k11Question"),feedback=parent.querySelector("[data-k11-feedback]");parent.querySelectorAll("button").forEach(function(b){b.disabled=true;b.classList.toggle("correct",Number(b.getAttribute("data-k11-answer").split("-")[1])===q[4])});if(+p[1]!==q[4])btn.classList.add("wrong");feedback.hidden=false;feedback.textContent=q[5]})});
}
function gates(which,sec,lang){var key=sec+"-"+lang;if(!gatePools[key]){var ix=index(lang),pool=U11[sec].qs.map(function(q){return [ix===0?q[0]:ix===1?q[1]:q[2],q[3],q[4],sec,q[5]]});for(var i=pool.length-1;i>0;i--){var j=Math.floor(Math.random()*(i+1)),x=pool[i];pool[i]=pool[j];pool[j]=x}gatePools[key]=pool}return gatePools[key]}
function getUi(){return gateUi}
function reset(){gatePools={};gateUi={}}
function deep(){return chapters.map(function(c,i){return [[c.steps[0][0],c.steps[0][1]],[c.steps[2][0],c.steps[2][1]],["විභාගයේ පොදු වැරදි",c.error]]})}
var saved={};["units","total","notes","meta","getDone","reset","gateUI","gateQuestions","ui","background","deep","sectionMedia","visual","assessments","bindAssessment"].forEach(function(key){saved[key]=base[key]});
base.units=function(which){return which===11?U11:saved.units(which)};
base.total=function(which){return which===11?chapters.length:saved.total(which)};
base.notes=function(which){return which===11?notes():saved.notes(which)};
base.meta=function(which){return which===11?meta():saved.meta(which)};
base.getDone=function(which){return which===11?done():saved.getDone(which)};
base.reset=function(which){return which===11?reset():saved.reset(which)};
base.gateUI=function(which){return which===11?getUi():saved.gateUI(which)};
base.gateQuestions=function(which,sec,lang){return which===11?gates(which,sec,lang):saved.gateQuestions(which,sec,lang)};
base.ui=function(which,lang){return which===11?ui(lang):saved.ui(which,lang)};
base.background=function(which,i){return which===11?"radial-gradient(circle at 20% 24%,rgba(237,112,50,.19),transparent 32%),radial-gradient(circle at 80% 75%,rgba(239,190,54,.17),transparent 30%)":saved.background(which,i)};
base.deep=function(which){return which===11?deep():saved.deep(which)};
base.sectionMedia=function(which,i){return which===11?sectionMedia(i):saved.sectionMedia(which,i)};
base.visual=function(which,i,j,label){return which===11?visual(i,j,label):saved.visual(which,i,j,label)};
base.assessments=function(which,lang){return which===11?assessment(lang):saved.assessments(which,lang)};
base.bindAssessment=function(which,render){return which===11?bind():saved.bindAssessment(which,render)};
Object.keys(pictures).forEach(function(k){var x=pictures[k];base.mediaMap[k]={file:x[0],caption:x[1],credit:x[2]}});
base.themes[11]=["#cf6331","#e8a83f","#4b88aa"];
window.Kinetics11={chapters:U11,bind:bind,validate:function(){var errors=[];if(U11.length!==11)errors.push("sections");U11.forEach(function(c,i){if(c.steps.length!==4||c.qs.length!==5)errors.push("chapter "+i);c.qs.forEach(function(q){if(q[3].length!==4||q[4]<0||q[4]>3)errors.push("quiz "+i)})});return errors}};
})();
