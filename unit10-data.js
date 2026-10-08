/* NIE Grade 12 Unit 10, printed pages 76–82: Nitrogen-containing organic compounds.
   5 compact chapters closely follow §4.1–4.3 of the provided resource book. */
(function(){
"use strict";
function N(n,ref,pages,intro,steps,quiz){return{name:n,ref,pages,intro,steps:steps.map(s=>({t:[s[0],s[3],s[5]],d:[s[1],s[4],s[6]],eq:s[2]})),qs:quiz.map(q=>q)}}
const C=[
N(["ඇමීන වර්ගීකරණය සහ ඇනිලීන්","Amines and aniline: structures","அமீன்கள், அனிலீன் அமைப்பு"],"4.1.1–4.1.2","77–78",
["ඇමීන 1°, 2°, 3° ලෙස N මත බැඳුණු කාබන් කාණ්ඩ සංඛ්‍යාව අනුව වෙන්කර හඳුනාගන්න.","Distinguish aliphatic amines and aniline by nitrogen bonding.","N உடன் பிணைந்த கார்பன் குழுக்களால் அமீன்களை வகைப்படுத்துக."],
[
["ඇමීනයේ අර්ථය","NH₃ හි H පරමාණු ඇල්කයිල් හෝ ඇරිල් කාණ්ඩවලින් ප්‍රතිස්ථාපනය වූ සංයෝග ඇමීන ලෙස සැලකේ. –NH₂ ඇමීන සහ –CONH₂ ඇමයිඩ කාණ්ඩ දෙක වෙනස්ය.","RNH₂ | R₂NH | R₃N","What is an amine?","Amines derive from replacing ammonia hydrogens by alkyl/aryl groups.","அமீன் என்றால்","NH₃ இல் H க்கு பதிலாக அல்கைல்/அரைல் குழுக்கள் அமையும்."],
["ප්‍රාථමික ඇමීන","N පරමාණුවකට R කාණ්ඩ එකක් හා H දෙකක් බැඳී තිබේ නම් ප්‍රාථමික ඇමීනයක් වේ. උදාහරණ: methylamine CH₃NH₂, aniline C₆H₅NH₂.","CH₃NH₂ • C₆H₅NH₂","Primary amines","Primary amines have one carbon substituent at nitrogen.","முதன்மை அமீன்","N இற்கு ஒரு கார்பன் குழு, இரண்டு H உள்ளன."],
["ද්විතීයික හා තෘතීයික ඇමීන","ද්විතීයික ඇමීනයක N මත R කාණ්ඩ දෙකක් හා H එකකි; තෘතීයික ඇමීනයක R කාණ්ඩ තුනකි. ඇල්කොහොල් වර්ගීකරණයේ මෙන් C–OH මධ්‍යස්ථානය නොව මෙහි N මත කාණ්ඩ ගණන බලන්න.","(CH₃)₂NH: 2° | (CH₃)₃N: 3°","Secondary and tertiary amines","Secondary N has two carbon groups; tertiary N has three.","இரண்டாம், மூன்றாம் அமீன்கள்","N இல் இரண்டு அல்லது மூன்று கார்பன் குழுக்கள்."],
["ඇනිලීන් හා වළලු සක්‍රියතාව","ඇනිලීන්හි –NH₂ බෙන්සීන් වළල්ලට බැඳේ. –NH₂ විස්ථානගත ඉලෙක්ට්‍රෝන දායකත්වය නිසා ortho/para යොමුකරයි; Br₂ ජලය සමඟ සුදු 2,4,6-tribromoaniline සෑදිය හැකිය.","C₆H₅NH₂ + 3Br₂ → C₆H₂Br₃NH₂ + 3HBr","Aniline ring activation","Aniline activates the ring and forms 2,4,6-tribromoaniline with bromine water.","அனிலீன் வளைய வினை","–NH₂ வளையத்தைச் செயலூக்கி 2,4,6-tribromoaniline தரும்."]
],[
["CH₃NH₂ කවර වර්ගයේද?","Classification of CH₃NH₂?","CH₃NH₂ வகை?",["primary amine","secondary amine","amide","tertiary amine"],0,"N මත CH₃ එකක් පමණි."],
["(CH₃)₃N කවර වර්ගයේද?","Classification of (CH₃)₃N?","(CH₃)₃N வகை?",["primary","secondary","tertiary","amide"],2,"N මත R කාණ්ඩ තුනකි."],
["ඇනිලීන් අණුක සූත්‍රය?","Formula of aniline?","அனிலீன் வாய்ப்பாடு?",["C₆H₆","C₆H₅NH₂","CH₃NH₂","CH₃CONH₂"],1,"ඇනිලීන් = phenylamine."],
["ඇමීන හා ඇමයිඩ වෙන්කිරීමේ කාණ්ඩය?","Amide functional group?","அமைடு குழு?",["RNH₂","R₂NH","R₃N","RCONH₂"],3,"ඇමයිඩහි කාබොනිල් කාණ්ඩය පවතී."],
["ඇනිලීන් + Br₂ ජලය ඵලයේ අවක්ෂේප වර්ණය?","Aniline with bromine water precipitate?","அனிலீன் + Br₂ படிவு நிறம்?",["white","blue","green","purple"],0,"2,4,6-tribromoaniline සුදු පැහැතිය."]
]),
N(["ඇමීනවල නියුක්ලියෝෆීල ප්‍රතික්‍රියා","Nucleophilic reactions of primary amines","முதன்மை அமீன் நியூக்ளியோஃபிலிக் வினைகள்"],"4.1.3.1–4.1.3.3","78–79",
["N හි lone pair නිසා ඇමීනය නියුක්ලියෝෆීලයක් ලෙස හැසිරෙන ආකාරය විග්‍රහ කරන්න.","Follow alkylation, imine formation and acylation.","அல்கைலேற்றம், இமீன், அசைலேற்றம் வினைகளை அறிக."],
[
["ඇල්කයිල් හැලයිඩ සමඟ ආදේශය","ප්‍රාථමික ඇමීන R′X සමඟ ප්‍රතික්‍රියා කර ද්විතීයික ඇමීන සෑදිය හැකිය. තවදුරටත් ඇල්කයිලීකරණයෙන් තෘතීයික හා චතුර්ථක ඇමෝනියම් ඵලද ලැබිය හැකි නිසා ඵල මිශ්‍රණ සැලකිල්ලට ගන්න.","RNH₂ + R′X → RNHR′ (+ HX, overall)","Alkylation of amines","Nucleophilic N displaces halide; further alkylation can occur.","அமீன் அல்கைலேற்றம்","N தாக்கி அலசனை நீக்குகிறது; மீண்டும் அல்கைலேற்றம் நடக்கலாம்."],
["ඇල්ඩිහයිඩ් හා කීටෝන සමඟ ඝනීභවනය","ප්‍රාථමික ඇමීන කාබොනිල් කාණ්ඩ සමඟ ප්‍රතික්‍රියා කර ජලය ඉවත් කර imine (Schiff base) සෑදිය හැකිය. N මත H තිබීම මේ සඳහා වැදගත්ය.","RCHO + R′NH₂ ⇌ RCH=NR′ + H₂O","Carbonyl condensation to imines","Primary amines condense with aldehydes/ketones forming imines.","இமீன் உருவாக்கம்","முதன்மை அமீன் கார்போனிலுடன் சேர்ந்து இமீன், நீர் தரும்."],
["ඇසිල් ක්ලෝරයිඩ සමඟ ඇමයිඩ","ප්‍රාථමික ඇමීන RCOCl සමඟ නියුක්ලියෝෆීල ඇසිල් ආදේශයට ලක්ව N-substituted amide ලබාදෙයි. HCl නිදහස් විය හැකි බැවින් භෂ්මයක් භාවිත විය හැකිය.","RCOCl + 2R′NH₂ → RCONHR′ + R′NH₃Cl","Amide formation","Primary amines attack acyl chlorides to produce N-substituted amides.","அசைல் குளோரைடு வினை","அமீன் அசைல் குளோரைடுடன் அமைடு உருவாக்கும்."],
["ඇමීන නියුක්ලියෝෆීල වන්නේ ඇයි?","ඇමීනයේ N මත lone pair පවතින නිසා ඉලෙක්ට්‍රෝන හිඟ මධ්‍යස්ථාන වෙත ප්‍රහාර දිය හැකිය. ජලීය ද්‍රාවණයේ N, H⁺ ද පිළිගෙන ඇමෝනියම් අයනයක් සෑදිය හැකිය.","RNH₂ + H⁺ ⇌ RNH₃⁺","Nitrogen lone pair","The nitrogen lone pair supports nucleophilicity and basicity.","N தனி இலத்திரன் சோடி","N இன் தனி இலத்திரன் சோடி தாக்குதலிலும் காரத்தன்மையிலும் பங்கெடுக்கும்."]
],[
["ඇමීන නියුක්ලියෝෆීල වන්නේ?","Why are amines nucleophilic?","அமீன்கள் ஏன் நியூக்ளியோஃபில்?",["N lone pair","N–O triple bond","aromatic ring always","ionic lattice"],0,"N lone pair ප්‍රධාන හේතුවයි."],
["ප්‍රාථමික ඇමීන + ඇල්ඩිහයිඩ් ඝනීභවනයේ ඵලය?","Condensation of primary amine and aldehyde?","அமீன் + அல்டிகைடு விளைவு?",["ester","ketone","imine","alkane"],2,"Schiff base / imine ලැබේ."],
["ප්‍රාථමික ඇමීන + RCOCl ඵලය?","Primary amine plus acyl chloride gives?","அமீன் + அசைல் குளோரைடு?",["alcohol","N-substituted amide","alkyne","ether"],1,"ඇමයිඩ බන්ධනය සෑදෙයි."],
["ඇල්කයිලීකරණය දිගටම සිදුවීමෙන් අවසානයේ හැකි වන්නේ?","Further exhaustive alkylation can form?","முழு அல்கைலேற்ற விளைவு?",["carboxylate","phenol","alkene","quaternary ammonium"],3,"N මත R කාණ්ඩ හතරක් ඇති අයනයක් ලැබිය හැකිය."],
["RNH₂ + H⁺ ඵලය?","Protonation of RNH₂ gives?","RNH₂ + H⁺?",["RNH₃⁺","RNH⁻","RCOOH","RCOCl"],0,"අමෝනියම් අයනයයි."]
]),
N(["ඇමීන භාෂ්මිකතාව හා අනුරූපතා","Basicity: amines, aniline and amides","அமீன், அனிலீன், அமைடு காரத்தன்மை"],"4.2","79–80",
["N lone pair හි ප්‍රෝටෝන ග්‍රහණය සහ resonance බලපෑම සසඳන්න.","Compare aliphatic amines, aniline and amides as bases.","அமீன்களின் காரத்தன்மையை ஒப்பிடுக."],
[
["ඇමීන හා ඇල්කොහොල් භාෂ්මිකතාව","බොහෝ සරල ඇමීන ඇල්කොහොල්වලට වඩා භාෂ්මිකය. N, H⁺ ලබාගෙන RNH₃⁺ සාදන අතර N හි lone pair ප්‍රෝටෝනට පවතින පහසුකම වැදගත්ය.","RNH₂ + H₃O⁺ ⇌ RNH₃⁺ + H₂O","Amines as bases","Nitrogen lone pairs make many amines stronger bases than alcohols.","அமீன் காரத்தன்மை","N இன் தனி இலத்திரன் சோடி H⁺ ஐ ஏற்கிறது."],
["ඇලිෆැටික ඇමීන සහ ඇනිලීන්","ඇනිලීන්හි N lone pair බෙන්සීන් වළල්ල සමඟ resonance සම්බන්ධ වන නිසා එය ප්‍රෝටෝන ලබාගැනීමට අඩු පහසුය. එබැවින් සමාන තත්ත්වයේ බොහෝ ඇලිෆැටික ඇමීන ඇනිලීන්ට වඩා භාෂ්මිකය.","methylamine > aniline (aqueous basicity)","Aliphatic amines versus aniline","Aniline's lone pair is delocalized, weakening its basicity.","அலிபாட்டிக் அமீன் - அனிலீன்","அனிலீனில் N இன் ஜோடி வளையத்தில் பரவி காரத்தன்மை குறையும்."],
["ඇමයිඩ භාෂ්මිකතාව","ඇමයිඩ –CONH₂ හි N lone pair C=O සමඟ resonance පවතින නිසා ඇමීනවලට වඩා භාෂ්මිකතාව ඉතා අඩුය. –NH₂ පමණක් දැක ඇමයිඩය ඇමීනයක් ලෙස නොසලකන්න.","amine > amide (typical basicity)","Amines versus amides","Amide lone pairs delocalize into carbonyl, strongly lowering basicity.","அமீன் - அமைடு காரத்தன்மை","அமைடில் N ஜோடி C=O நோக்கிப் பரவி காரத்தன்மை குறைகிறது."],
["භාෂ්මිකතාවට බලපාන සාධක","ඇල්කයිල් කාණ්ඩ ඉලෙක්ට්‍රෝන දායක වුවද ජලයේ ස්ථායීකරණය, steric effects සහ solvation නිසා ඇමීන 1°/2°/3° සඳහා සරල සෑම තත්ත්වයකම එකම අනුපිළිවෙළක් නොපවතී.","basicity = lone pair + inductive + solvation","Basicity factors","Inductive effects, resonance and solvent control relative basicities.","காரத்தன்மைக் காரணிகள்","இலத்திரன் விளைவு, ஒத்திசைவு, கரைப்பான் ஆகியன முக்கியம்."]
],[
["ඇනිලීන් methylamine ට වඩා අඩු භාෂ්මික වන්නේ?","Why is aniline less basic than methylamine?","அனிலீன் ஏன் குறைந்த காரம்?",["no nitrogen","N lone-pair resonance","ionic lattice","more H atoms"],1,"lone pair බෙන්සීන් වළල්ලට විස්ථානගත වේ."],
["ඇමයිඩ ඇමීනට වඩා අඩු භාෂ්මික වන්නේ?","Why is an amide much less basic?","அமைடு ஏன் குறைந்த காரம்?",["carbonyl resonance","more carbon","always charged","no electrons"],0,"N lone pair C=O වෙත විස්ථානගත වේ."],
["ඇමීන ප්‍රෝටෝන ගත් විට සෑදෙන්නේ?","Protonated amine yields?","அமீன் H⁺ ஏற்றால்?",["alkyne","ester","ammonium ion","acid chloride"],2,"RNH₃⁺."],
["භාෂ්මිකතාව සරලව තීරණය කරන ප්‍රධාන අංගය?","Key feature for basicity?","காரத்தன்மை முதன்மைக் காரணம்?",["colour","molar mass only","boiling point only","available lone pair"],3,"ලබාගත හැකි N lone pair වැදගත්ය."],
["සමාන තත්ත්වයේ බහුලව වඩා භාෂ්මික කවරක්ද?","Often more basic in water?","நீரில் பொதுவாக அதிக காரம்?",["methylamine","aniline","acetamide","ethanol"],0,"methylamine හි N lone pair වඩා ලබාගත හැක."]
]),
N(["නයිට්‍රස් අම්ලය හා ඩයසෝනියම් ලවණ","Nitrous acid and diazonium salt formation","நைட்ரஸ் அமிலம், டையசோனியம் உப்புகள்"],"4.1.3.4, 4.3","79–80",
["ඇලිෆැටික හා ඇරෝමැටික ප්‍රාථමික ඇමීන NaNO₂/HCl සමඟ දෙන වෙනස් ඵල හඳුනාගන්න.","Distinguish unstable alkyl diazonium from aromatic diazonium at low temperature.","அலிபாட்டிக், அரோமாட்டிக் டையசோனியம் வேறுபாடு."],
[
["නයිට්‍රස් අම්ලය තැනීම","NaNO₂ සහ තනුක HCl මඟින් ප්‍රතික්‍රියා මිශ්‍රණය තුළ HNO₂ සාදාගත හැකිය. මෙම අම්ලය ප්‍රාථමික ඇමීන සමඟ ප්‍රතික්‍රියා කරයි.","NaNO₂ + HCl → HNO₂ + NaCl","In-situ nitrous acid","Nitrite with dilute HCl supplies nitrous acid.","நைட்ரஸ் அமிலம் உருவாக்கம்","NaNO₂, HCl மூலம் HNO₂ உருவாகிறது."],
["ඇලිෆැටික ප්‍රාථමික ඇමීන","ඇලිෆැටික 1° ඇමීන diazonium අතරමැදි ලබාදුන්නත් ඒවා අස්ථායී බැවින් සාමාන්‍යයෙන් N₂ වායුව නිදහස් කර ඇල්කොහොල් ඵල ලබාදේ.","RNH₂ + HNO₂ → ROH + N₂↑ + H₂O (overall)","Aliphatic primary amines","Unstable alkyl diazonium decomposes to alcohol and N₂.","அலிபாட்டிக் முதன்மை அமீன்","நிலையற்ற இடைநிலை N₂ விடுவித்து ஆல்கஹால் தரும்."],
["ඇනිලීන් ඩයසෝනීකරණය","ඇනිලීන් HNO₂/HCl සමඟ සාමාන්‍යයෙන් 0–5°C දී benzene diazonium chloride සෑදේ. අඩු උෂ්ණත්වය මෙහි සංරක්ෂණයට වැදගත්ය.","C₆H₅NH₂ + NaNO₂ + 2HCl → C₆H₅N₂⁺Cl⁻ + NaCl + 2H₂O","Aniline diazotization","Cold acidic nitrite yields benzenediazonium chloride.","அனிலீன் டையசோனியம்","0–5°C இல் பென்சீன் டையசோனியம் குளோரைடு உருவாகும்."],
["උෂ්ණත්වය හා ආරක්ෂාව","ඇරෝමැටික diazonium ලවණ ද්‍රාවණය අඩු උෂ්ණත්වයේ තරමක් ස්ථායී වන නමුත් උණුසුම් කළ විට වියෝජනය හෝ ආදේශය සිදුවිය හැකිය. වියළි diazonium ලවණ විශේෂයෙන් අනතුරුදායක බැවින් ප්‍රායෝගිකව අත්හදා නොබලන්න.","Ar–N₂⁺Cl⁻ • 0–5°C (solution)","Temperature and safety","Keep diazonium solutions cold; dry salts can be hazardous.","வெப்பநிலையும் பாதுகாப்பும்","டையசோனியம் கரைசலைக் குளிராக வைத்தல் அவசியம்."]
],[
["NaNO₂ + HCl මඟින් සෑදෙන අම්ලය?","Acid generated by NaNO₂/HCl?","NaNO₂ + HCl அமிலம்?",["HNO₃","H₂SO₄","HNO₂","H₃PO₄"],2,"nitrous acid HNO₂."],
["aniline diazotization උෂ්ණත්ව පරාසය?","Temperature for aniline diazotization?","அனிலீன் டையசோனியம் வெப்பம்?",["0–5°C","100°C","200°C","room heat"],0,"අඩු උෂ්ණත්වය අවශ්‍යය."],
["ඇලිෆැටික 1° ඇමීන + HNO₂ නිකුත් විය හැකි වායුව?","Gas from primary aliphatic amine and HNO₂?","அலிபாட்டிக் அமீன் + HNO₂ வாயு?",["O₂","H₂","Cl₂","N₂"],3,"N₂ වායුව නිදහස් වේ."],
["ඇනිලීන් diazotization හි ඵලය?","Primary product of aniline diazotization?","அனிலீன் டையசோனியம் விளைவு?",["phenol directly","benzenediazonium chloride","benzoic acid","benzene"],1,"ArN₂⁺Cl⁻."],
["ArN₂⁺ හි විශේෂයෙන් ප්‍රතික්‍රියාශීලී ඉවත්වන අණුව?","Readily lost stable gas from diazonium?","டையசோனியத்திலிருந்து வெளியேறும் வாயு?",["N₂","H₂","O₂","Cl₂"],0,"N₂ ඉවත් වීම ප්‍රතික්‍රියාවට අනුබල දෙයි."]
]),
N(["ඇරෝමැටික ඩයසෝනියම්: ආදේශය හා වර්ණක","Diazonium substitutions and azo coupling","டையசோனியம் பதிலீடும் அசோ இணைப்பும்"],"4.3.1–4.3.2","80–82",
["ඩයසෝනියම් කාණ්ඩය වෙනත් කාණ්ඩවලින් ආදේශ කිරීම සහ azo coupling වර්ණ හඳුනාගන්න.","Map ArN₂⁺ to phenol, halides, nitrile, benzene and azo dyes.","ArN₂⁺ மாற்றங்கள், அசோ நிறப்பொருள் வினைகள்."],
[
["ජලය හා H₃PO₂","ArN₂⁺ ද්‍රාවණය උණු කිරීමෙන් ArOH ෆීනෝල් ලැබිය හැකිය. H₃PO₂ යටතේ diazonium කාණ්ඩය H මඟින් ප්‍රතිස්ථාපනය වී ArH ලැබේ.","ArN₂⁺ —H₂O/heat→ ArOH | —H₃PO₂→ ArH","Phenol and hydrocarbon routes","Hydrolysis gives phenol; H₃PO₂ replaces diazonium with H.","பீனால் மற்றும் அரோமாட்டிக் H","நீரால் பீனால்; H₃PO₂ மூலம் H பதிலீடு."],
["CuCl/CuBr: හැලජන ආදේශය","CuCl හෝ CuBr සහිත Sandmeyer ප්‍රතික්‍රියාවෙන් Ar–Cl හෝ Ar–Br ලබාගත හැකිය. අදාළ Cu(I) හැලයිඩ නියෝජිතයි.","ArN₂⁺ + CuCl → ArCl + N₂ (schematic)","Sandmeyer halogenation","Cu(I) chloride/bromide give aryl halides.","Sandmeyer அலசனேற்றம்","CuCl அல்லது CuBr மூலம் அரைல் அலசன் உருவாகும்."],
["CuCN හා KI මඟින් ආදේශය","CuCN යටතේ Ar–CN නයිට්‍රයිල්; KI යටතේ Ar–I සෑදිය හැකිය. වළල්ලට වෙනත් කාණ්ඩ හඳුන්වාදීමේදී diazonium මාර්ගය ප්‍රයෝජනවත්ය.","ArN₂⁺ →(CuCN) ArCN | →(KI) ArI","Cyanide and iodide routes","CuCN gives aryl nitrile; KI gives aryl iodide.","CuCN, KI மாற்றங்கள்","CuCN அரைல் நைட்ரைல்; KI அரைல் அயோடைடு தரும்."],
["Azo coupling හා වර්ණක","ඩයසෝනියම් අයනය විද්‍යුත්කාමී අංශුවක් ලෙස ක්ෂාරීය ෆීනෝල් හෝ β-naphthol සමඟ වළලු ආදේශයකට ලක්ව –N=N– azo බන්ධනයක් සෑදේ. සාමාන්‍යයෙන් දෘශ්‍ය තැඹිලි හෝ රතු වර්ණක ලැබිය හැකිය.","Ar–N₂⁺ + phenoxide → Ar–N=N–Ar′","Azo coupling","Electrophilic coupling produces colored azo compounds.","அசோ இணைப்பு","–N=N– பிணைப்புடன் நிறமுள்ள அசோ சேர்மம் உருவாகும்."]
],[
["ArN₂⁺ + CuCl ඵල වර්ගය?","Diazonium plus CuCl gives?","ArN₂⁺ + CuCl விளைவு?",["ArOH","ArCl","ArI","ArNH₂"],1,"aryl chloride ලැබේ."],
["ArN₂⁺ + CuCN ඵල වර්ගය?","Diazonium plus CuCN yields?","ArN₂⁺ + CuCN?",["ArOH","ArI","ArCN","ArH"],2,"aryl nitrile ලැබේ."],
["ArN₂⁺ + H₃PO₂ හි ආදේශ වන්නේ?","Diazonium plus H₃PO₂ gives?","ArN₂⁺ + H₃PO₂?",["ArH","ArCN","ArOH","ArCl"],0,"diazonium කාණ්ඩය H මඟින් ආදේශ වේ."],
["Azo වර්ණක කාණ්ඩයේ සම්බන්ධය?","Characteristic azo linkage?","அசோ இணைப்புக் குழு?",["–C≡C–","–O–O–","–COO–","–N=N–"],3,"azo සම්බන්ධය –N=N– වේ."],
["ArN₂⁺ + උණු ජලය ප්‍රධාන ඵලය?","Hot water hydrolysis of diazonium gives?","சூடுநீர் + டையசோனியம்?",["ArCl","ArOH","ArCN","ArBr"],1,"ෆීනෝල් ලැබේ."]
])
];
window.U10_CHAPTERS=C;
window.U10_STRUCTURED=[
["ඇමීන 1°,2°,3° සහ ඇනිලීන්","N මත R කාණ්ඩ සංඛ්‍යාව අනුව වර්ගීකරණය, –NH₂ හා –CONH₂ වෙනස සහ Br₂ පරීක්ෂාව ලියන්න.","Classify amines and aniline reactions.","அமீன் வகைகள், அனிலீன் வினைகள்."],
["ඇමීන භාෂ්මිකතාව","ඇනිලීන් සහ methylamine අතර N lone pair resonance/inductive බලපෑම, amide අඩු භාෂ්මිකතාව විස්තර කරන්න.","Explain amine basicity trends.","அமீன் காரத்தன்மை ஒப்பீடு."],
["NaNO₂/HCl සමඟ 1° ඇමීන ප්‍රතික්‍රියා","ඇලිෆැටික 1° ඇමීන සහ ඇනිලීන් දෙන වෙනස් ඵල හා diazonium 0–5°C කොන්දේසි සසඳන්න.","Compare aliphatic and aromatic diazotization.","அலிபாட்டிக், அரோமாட்டிக் டையசோனியம் ஒப்பீடு."],
["ඩයසෝනියම් ආදේශ ප්‍රතික්‍රියා ජාලය","ArN₂⁺ වෙතින් ArOH, ArCl, ArBr, ArCN, ArI, ArH සහ azo dye සෑදීමේ ප්‍රතික්‍රියාකාරක හඳුනාගන්න.","Map diazonium substitution and coupling.","டையசோனியம் மாற்றப் பாதைகள்."]
];
window.U10_ESSAY=[
["නයිට්‍රජන් අන්තර්ගත කාබනික සංයෝගවල ඇමීන හා ඩයසෝනියම් රසායනය විග්‍රහ කරන්න.","ප්‍රාථමික/ද්විතීයික/තෘතීයික ඇමීන, භාෂ්මිකතාව, ඇනිලීන්, NaNO₂/HCl, diazonium substitutions, azo coupling සහ උෂ්ණත්ව කොන්දේසි දක්වන්න.","Explain amines, basicity and diazonium reactions.","அமீன் மற்றும் டையசோனியம் வேதியியலை விளக்குக."],
["ඇනිලීන් වෙතින් බෙන්සීන් ව්‍යුත්පන්න පරිවර්තන ක්‍රමයක් ගොඩනගන්න.","C₆H₅NH₂ → C₆H₅N₂⁺Cl⁻; CuCl/CuBr/CuCN/KI/H₃PO₂/H₂O මගින් ඵල ගණනය කර azo coupling දක්වන්න.","Design a conversion network from aniline.","அனிலீனிலிருந்து மாற்றுச் சங்கிலி அமைக்குக."]
];
})();
