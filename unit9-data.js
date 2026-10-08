/* NIE Grade 12 Unit 09, printed pages 54–75: Oxygen-containing organic compounds.
   Original Sinhala-first educational summaries and practice questions. */
(function(){
"use strict";
function N(n,ref,pages,intro,steps,quiz){return{name:n,ref,pages,intro,steps:steps.map(s=>({t:[s[0],s[3],s[5]],d:[s[1],s[4],s[6]],eq:s[2]})),qs:quiz.map(q=>q)}}
const C=[
N(["ඇල්කොහොල් වර්ගීකරණය හා භෞතික ගුණ","Alcohol classes and physical properties","ஆல்கஹால் வகைகளும் பௌதிகப் பண்புகளும்"],"3.1.1–3.1.2","55–56",
["මොනොහයිඩ්‍රික් ඇල්කොහොල් 1°, 2°, 3° ලෙස වර්ග කර H බන්ධන බලපෑම තේරුම් ගන්න.","Classify alcohols by the carbon bearing OH and interpret hydrogen bonding.","OH ஏந்திய கார்பனை வைத்து ஆல்கஹால்களை வகைப்படுத்துக."],
[
["මොනොහයිඩ්‍රික් ඇල්කොහොල්","කාබන් දාමයකට බැඳුණු –OH කාණ්ඩයක් ඇති සංයෝග මොනොහයිඩ්‍රික් ඇල්කොහොල් ලෙස හඳුන්වයි. –OH බැඳුණු කාබන්ට බැඳුණු වෙනත් කාබන් ගණන අනුව ප්‍රාථමික, ද්විතීයික හා තෘතීයික ලෙස වෙන් වේ.","1° RCH₂OH | 2° R₂CHOH | 3° R₃COH","Primary, secondary and tertiary","The number of carbon neighbours at the C–OH centre defines 1°, 2°, 3°.","முதன்மை, இரண்டாம், மூன்றாம்","OH கொண்ட C இன் அருகிலுள்ள C எண்ணிக்கை வகையை நிர்ணயிக்கிறது."],
["ඇල්කොහොල්හි ධ්‍රැවීයතාව","O–H හා C–O බන්ධන ධ්‍රැවීය වේ. –OH කාණ්ඩය නිසා ඇල්කොහොල් අණු අතර හයිඩ්‍රජන් බන්ධන සෑදේ; මේවා සමාන මවුලික ස්කන්ධ සහිත ඇල්කේනවලට වඩා ඉහළ තාපාංකයක් ලබාදෙයි.","R–O–H ⋯ O–R  (H bonding)","Alcohol hydrogen bonding","Intermolecular hydrogen bonding increases boiling points.","ஆல்கஹால் ஐதரசன் பிணைப்பு","இடைமூலக்கூறு H பிணைப்பால் கொதிநிலை அதிகரிக்கிறது."],
["ජල ද්‍රාව්‍යතාව","කෙටි දාම ඇල්කොහොල් ජලය සමඟ හයිඩ්‍රජන් බන්ධන සාදන නිසා හොඳින් දියවේ. ජලභීතික කාබන් දාමය දිගුවන විට ජල ද්‍රාව්‍යතාව සාමාන්‍යයෙන් අඩුවේ.","methanol ≈ ethanol: water-miscible","Solubility in water","Short-chain alcohols dissolve well; longer carbon chains reduce solubility.","நீரில் கரைதிறன்","குறுகிய சங்கிலி ஆல்கஹால் நன்றாகக் கரையும்."],
["ආම්ලිකතාව හා ඇල්කොක්සයිඩ","ඇල්කොහොල් දුර්වල අම්ල වේ; Na ලෝහය සමඟ H₂ නිදහස් කර සෝඩියම් ඇල්කොක්සයිඩ සාදයි. ක්‍රියාකාරකම් භෞතික විද්‍යාගාරයේ පාලනයකින් තොරව නොකරන්න.","2C₂H₅OH + 2Na → 2C₂H₅ONa + H₂","Sodium alkoxide formation","Alcohols react with sodium to give alkoxides and H₂.","சோடியம் அல்கொக்சைடு","Na உடன் ஆல்கஹால் வினைபுரிந்து H₂ விடுவிக்கும்."]
],[
["propan-2-ol කවර වර්ගයේද?","Class of propan-2-ol?","propan-2-ol வகை?",["primary","secondary","tertiary","phenol"],1,"–OH කාබන් වෙනත් C දෙකකට බැඳේ."],
["(CH₃)₃COH වර්ගය කුමක්ද?","Class of (CH₃)₃COH?","(CH₃)₃COH வகை?",["primary","secondary","aldehyde","tertiary"],3,"C–OH මධ්‍යස්ථානය C තුනකට බැඳේ."],
["ඇල්කොහොල් ඉහළ තාපාංකයට හේතුව?","Main cause of alcohol boiling points?","ஆல்கஹால் உயர்கொதிநிலை ஏன்?",["hydrogen bonds","ionic lattice","metallic bonds","free radicals"],0,"O–H නිසා අණු අතර H බන්ධන සෑදේ."],
["Na + ethanol සමඟ නිකුත් වන වායුව?","Gas released by Na and ethanol?","Na, ethanol வினை வாயு?",["O₂","CO₂","H₂","Cl₂"],2,"හයිඩ්‍රජන් වායුවයි."],
["දාම දිග වැඩි වන විට ඇල්කොහොල් ජල ද්‍රාව්‍යතාව?","Water solubility with increasing alkyl length?","சங்கிலி நீளத்தால் கரைதிறன்?",["increases always","generally decreases","unchanged","becomes ionic"],1,"කාබන් දාමයේ ජලභීතික කොටස වැඩි වේ."]
]),
N(["ඇල්කොහොල්: ආදේශය හා ඉවත්වීම","Alcohol substitution and dehydration","ஆல்கஹால் பதிலீடும் நீர்நீக்கமும்"],"3.1.3.1–3.1.3.3","56–58",
["O–H / C–O බන්ධනවලින් සිදුවන වෙනස් ප්‍රතික්‍රියා වෙන්කර හඳුනාගන්න.","Contrast conversion to haloalkanes and dehydration to alkenes.","C–O முறிவு மற்றும் நீர்நீக்க வினைகளை ஒப்பிடுக."],
[
["O–H හා C–O බන්ධන","ඇල්කොහොල් තුළ O–H බන්ධනයෙන් H⁺ ඉවත් කර ඇල්කොක්සයිඩ සෑදිය හැකිය. C–O බන්ධන ආශ්‍රිත ආදේශයේදී –OH සුදුසු ප්‍රෝටෝනීකරණය හෝ සක්‍රිය කිරීමෙන් ඉවත්වන කාණ්ඩයක් බවට පත් කළ යුතුය.","R–OH ⇌ R–O⁻ + H⁺ (ඉතා දුර්වල)","O–H versus C–O bond","Different reaction types involve cleavage of different bonds.","O–H, C–O வேறுபாடு","வேறுபட்ட பிணைப்பு முறிவு வேறு விளைவைத் தரும்."],
["HX මඟින් හැලයිඩ සෑදීම","ඇල්කොහොල් HBr/HCl සමඟ ප්‍රතික්‍රියා කර ඇල්කයිල් හැලයිඩයක් ලබාදිය හැකිය. ප්‍රාථමික/ද්විතීයික/තෘතීයික ව්‍යුහ අනුව ආදේශ යාන්ත්‍රණය වෙනස් විය හැකිය.","C₂H₅OH + HBr → C₂H₅Br + H₂O","Halide formation","Hydrogen halides convert alcohols into alkyl halides.","ஹைட்ரஜன் அலசனுடன் பதிலீடு","HX மூலம் அல்கைல் அலசன் உருவாகலாம்."],
["ලූකස් පරීක්ෂකය","සාන්ද්‍ර HCl හා ZnCl₂ ලූකස් පරීක්ෂකයයි. තෘතීයික ඇල්කොහොල් බොහෝවිට ඉක්මනින් අපැහැදිලි බවක් දක්වන අතර ද්විතීයික පසුව; ප්‍රාථමික සාමාන්‍ය කාමර උෂ්ණත්වයේ ඉතා මන්ද වේ.","Lucas: conc. HCl + ZnCl₂","Lucas reagent","Reaction rate usually 3° > 2° > 1° at room temperature.","லூகஸ் சோதனை","HCl/ZnCl₂; பொதுவாக 3° > 2° > 1°."],
["විජලනයෙන් ඇල්කීන","අම්ලීය තත්ත්ව හා උණුසුම යටතේ ඇල්කොහොල් වලින් H₂O ඉවත් වී ඇල්කීන සෑදිය හැකිය. ප්‍රතික්‍රියා තත්ත්ව හා substrate පරිස්සමෙන් සලකන්න.","CH₃CH₂OH —conc.H₂SO₄/heat→ CH₂=CH₂ + H₂O","Alcohol dehydration","Acid-catalysed dehydration forms an alkene.","ஆல்கஹால் நீர்நீக்கம்","அமிலம், வெப்பத்தில் அல்கீன் உருவாகும்."]
],[
["ලූකස් පරීක්ෂකයේ සංයෝගය?","Composition of Lucas reagent?","லூகஸ் கரைசல்?",["NaOH/Br₂","conc.HCl/ZnCl₂","H₂O/Ni","FeCl₃/H₂O"],1,"Lucas = සාන්ද්‍ර HCl හා ZnCl₂."],
["ethanol විජලනයේ ඵලය?","Dehydration product of ethanol?","ethanol நீர்நீக்க விளைவு?",["ethene","ethane","ethanal","ethanoic acid"],0,"H₂O ඉවත් වී ethene."],
["ලූකස් පරීක්ෂාවේ ඉක්මනින් ප්‍රතික්‍රියා වන්නේ?","Alcohol reacting fastest with Lucas reagent?","லூகஸ் சோதனையில் வேகமானது?",["primary","secondary","phenol","tertiary"],3,"ස්ථායී තෘතීයික carbocation පහසුවෙන් සාදයි."],
["C₂H₅OH + HBr මඟින්?","Product of ethanol + HBr?","ethanol + HBr விளைவு?",["ethanal","ethene","bromoethane","ethyne"],2,"–OH වෙනුවට Br ආදේශ වේ."],
["ඇල්කොහොල් විජලනයේ පිටවන කුඩා අණුව?","Molecule removed in dehydration?","நீர்நீக்கத்தில் நீங்குவது?",["NH₃","H₂O","HCl","CO₂"],1,"විජලනයෙන් ජල අණුව ඉවත්වෙයි."]
]),
N(["ඇල්කොහොල් ඔක්සිකරණය","Oxidation of primary, secondary and tertiary alcohols","முதன்மை, இரண்டாம், மூன்றாம் ஆல்கஹால் ஒட்சியேற்றம்"],"3.1.3.4","58–59",
["ඇල්කොහොල් වර්ගය අනුව ප්‍රධාන ඔක්සිකරණ ඵල නිවැරදිව හඳුනාගන්න.","Predict oxidation products from alcohol class.","ஆல்கஹால் வகைக்கேற்ப ஒட்சியேற்ற விளைவை கணிக்குக."],
[
["ප්‍රාථමික ඇල්කොහොල්","මෘදු ඔක්සිකරණය යටතේ ප්‍රාථමික ඇල්කොහොල් ඇල්ඩිහයිඩ බවටත් දිගටම ඔක්සිකරණයේදී කාබොක්සිලික් අම්ල බවටත් යා හැකිය. ඵල ලබාගැනීමේදී තත්ත්ව පාලනය වැදගත්ය.","RCH₂OH → RCHO → RCOOH","Primary alcohol oxidation","Primary alcohols can oxidize via aldehydes to acids.","முதன்மை ஆல்கஹால் ஒட்சியேற்றம்","அல்டிகைடு வழியாக அமிலமாக மாற்றம்."],
["ද්විතීයික ඇල්කොහොල්","ද්විතීයික ඇල්කොහොල් ඔක්සිකරණයෙන් කීටෝන ලැබේ. සාමාන්‍ය මෘදු ඔක්සිකාරක යටතේ ඊට පසුව පහසුවෙන් අම්ල බවට පත් නොවේ.","R₂CHOH + [O] → R₂CO + H₂O","Secondary alcohol oxidation","Secondary alcohols give ketones under common oxidants.","இரண்டாம் ஆல்கஹால் ஒட்சியேற்றம்","கீற்றோன் விளைவு உருவாகும்."],
["තෘතීයික ඇල්කොහොල්","–OH බැඳුණු C වෙත H පරමාණුවක් නොමැති නිසා සාමාන්‍ය මෘදු ඔක්සිකරණ තත්ත්වවල තෘතීයික ඇල්කොහොල් ප්‍රතික්‍රියා නොකරයි. දැඩි තත්ත්වයන්හි C–C බිඳීම සිදුවිය හැකි බැවින් 'කිසිවිටෙක' නොවේ.","R₃COH + mild [O] → no usual reaction","Tertiary alcohol behaviour","Tertiary alcohols generally resist mild oxidation.","மூன்றாம் ஆல்கஹால்","சாதாரண மெல்லிய ஒட்சியேற்றத்தில் வினை மிகக் குறைவு."],
["දෘශ්‍ය වර්ණ වෙනස්කම්","ආම්ලීකෘත K₂Cr₂O₇ ඔක්සිකරණයේදී තැඹිලි Cr₂O₇²⁻, හරිත Cr³⁺ බවට පත්විය හැකිය. වර්ණ වෙනස ඔක්සිකරණයක් සිදුවූ බවට සාක්ෂියකි.","Cr₂O₇²⁻ orange → Cr³⁺ green","Dichromate color","Acidified dichromate changes orange to green when reduced.","டைகுரோமேட் நிறமாற்றம்","செம்மஞ்சள் Cr₂O₇²⁻ பச்சை Cr³⁺ ஆக மாறும்."]
],[
["ප්‍රාථමික ඇල්කොහොල් පළමු ඔක්සිකරණ ඵලය?","First product from a primary alcohol?","முதன்மை ஆல்கஹாலின் முதல் விளைவு?",["ketone","aldehyde","alkane","ester"],1,"RCH₂OH → RCHO."],
["ද්විතීයික ඇල්කොහොල් ඵලය?","Product from secondary alcohol oxidation?","இரண்டாம் ஆல்கஹால் ஒட்சியேற்றம்?",["acid chloride","amine","ketone","ether"],2,"R₂CHOH → R₂CO."],
["තෘතීයික ඇල්කොහොල් මෘදු ඔක්සිකරණය?","Tertiary alcohol in mild oxidation?","மூன்றாம் ஆல்கஹால் மெல்லிய ஒட்சியேற்றம்?",["no usual reaction","aldehyde","ketone always","ester"],0,"C–OH කාබන්ට H නොමැත."],
["ආම්ලීකෘත dichromate ආරම්භ වර්ණය?","Initial dichromate colour?","டைகுரோமேட் ஆரம்ப நிறம்?",["blue","green","purple","orange"],3,"Cr₂O₇²⁻ තැඹිලි."],
["ප්‍රාථමික ඇල්කොහොල් සම්පූර්ණ ඔක්සිකරණ ඵලය?","Further oxidation of primary alcohol?","முதன்மை ஆல்கஹால் இறுதி விளைவு?",["aldehyde","carboxylic acid","ketone","ether"],1,"RCHO → RCOOH."]
]),
N(["ෆීනෝල්: ආම්ලිකතාව හා වළලු ප්‍රතික්‍රියා","Phenol acidity and ring reactions","பீனாலின் அமிலத்தன்மை, வளைய வினைகள்"],"3.2–3.3","59–61",
["ෆීනොක්සයිඩ ස්ථායීතාව හා බෙන්සීන් වළල්ලේ සක්‍රියකරණය තේරුම් ගන්න.","Explain phenoxide resonance and activated substitution.","பீனாக்சைடு ஒத்திசைவு, வளையப் பதிலீடு."],
[
["ෆීනෝල් සහ ඇල්කොහොල් වෙනස","ෆීනෝල්හි –OH කාණ්ඩය සෘජුව බෙන්සීන් වළල්ලට බැඳී ඇත. ෆීනොක්සයිඩ අයනයේ ආරෝපණය resonance මඟින් විස්ථානගත වන නිසා ෆීනෝල් සාමාන්‍ය ඇල්කොහොල්වලට වඩා ආම්ලික වේ.","C₆H₅OH ⇌ C₆H₅O⁻ + H⁺","Phenol versus alcohol","Phenoxide resonance makes phenol more acidic than alcohols.","பீனால் - ஆல்கஹால் வேறுபாடு","பீனாக்சைடு ஒத்திசைவால் பீனால் அதிக அமிலமானது."],
["NaOH සමඟ ප්‍රතික්‍රියාව","ෆීනෝල් NaOH සමඟ ප්‍රතික්‍රියා කර සෝඩියම් ෆීනොක්සයිඩ හා ජලය ලබාදෙයි. සාමාන්‍ය ඇල්කොහොල් NaOH ජලීය ද්‍රාවණයට සමාන ලෙස ප්‍රතික්‍රියා නොකරයි.","C₆H₅OH + NaOH → C₆H₅ONa + H₂O","Phenol with hydroxide","Phenol reacts with NaOH to form sodium phenoxide.","பீனால் + NaOH","சோடியம் பீனாக்சைடு, நீர் உருவாகும்."],
["Br₂ ජලය සමඟ ප්‍රතික්‍රියාව","–OH කාණ්ඩය වළල්ල සක්‍රිය කර ortho/para යොමුකරයි. ෆීනෝල් බ්‍රෝමීන් ජලය සමඟ ප්‍රතික්‍රියා කර සුදු 2,4,6-tribromophenol අවක්ෂේපයක් දිය හැකිය.","C₆H₅OH + 3Br₂ → C₆H₂Br₃OH + 3HBr","Bromine water test","Phenol readily forms a white 2,4,6-tribromophenol precipitate.","புரோமின் நீர் சோதனை","வெள்ளை 2,4,6-tribromophenol படிவு உருவாகும்."],
["ෆීනෝල් නයිට්‍රෝකරණය","ෆීනෝල්හි –OH වළල්ල සක්‍රිය කරන නිසා නයිට්‍රෝකරණය බෙන්සීන්ට වඩා පහසුය. තනුක HNO₃ දී ortho හා para nitrophenol මිශ්‍රණයක් සෑදිය හැකිය.","phenol + dilute HNO₃ → o-/p-nitrophenol","Phenol nitration","Phenol directs nitration mainly to ortho/para positions.","பீனால் நைட்ரேற்றம்","ortho, para nitrophenol உருவாகும்."]
],[
["ෆීනෝල් ඇල්කොහොල් වලට වඩා ආම්ලික වන්නේ?","Why is phenol more acidic than ethanol?","பீனால் ஏன் அதிக அமிலம்?",["ionic carbon","phenoxide resonance","benzene hydrogen","free radicals"],1,"phenoxide resonance මඟින් ස්ථායී වේ."],
["ෆීනෝල් + Br₂ ජලය → අවක්ෂේප වර්ණය?","Phenol + bromine water precipitate?","பீனால் + Br₂ படிவு நிறம்?",["blue","green","white","black"],2,"2,4,6-tribromophenol සුදු වේ."],
["ෆීනෝල් NaOH සමඟ දෙන ලවණය?","Salt from phenol + NaOH?","பீனால் + NaOH உப்பு?",["sodium phenoxide","sodium ethoxide","sodium chloride","sodium sulfate"],0,"Na phenoxide වේ."],
["ෆීනෝල්හි OH යොමුකරන්නේ?","Phenolic OH directs?","பீனால் OH இயக்கம்?",["meta","none","only 1","ortho/para"],3,"OH කාණ්ඩය ortho/para යොමුකරයි."],
["–OH බෙන්සීන් වළල්ලට සෘජු බැඳුණේ කුමකද?","OH directly bonded to benzene?","வளையத்தில் நேரடி OH?",["ethanol","phenol","propanol","ether"],1,"ෆීනෝල් වේ."]
]),
N(["කාබොනිල් සංයෝග: නියුක්ලියෝෆීල ආකලනය","Carbonyl compounds and nucleophilic addition","கார்போனில் சேர்மங்களின் நியூக்ளியோஃபிலிக் சேர்க்கை"],"3.4.1–3.4.4","61–65",
["ඇල්ඩිහයිඩ් හා කීටෝනවල C=O ධ්‍රැවීකරණය සහ ප්‍රතික්‍රියා හඳුනාගන්න.","Investigate carbonyl polarity, HCN and Grignard addition and 2,4-DNP.","C=O துருவம், HCN, Grignard, 2,4-DNP வினைகள்."],
[
["කාබොනිල් කාණ්ඩයේ ධ්‍රැවිකරණය","O, C ට වඩා විද්‍යුත් ඍණ බැවින් Cδ⁺=Oδ⁻ ලෙස ධ්‍රැවිකරණය වේ. CN⁻ වැනි නියුක්ලියෝෆීල C මත ප්‍රහාර දී C=O වෙත ආකලනය වේ.","R₂C=O + Nu⁻ → R₂C(O⁻)Nu","Nucleophilic carbonyl addition","Electrophilic carbonyl carbon is attacked by nucleophiles.","கார்போனில் நியூக்ளியோஃபிலிக் சேர்க்கை","δ⁺ கார்பனில் நியூக்ளியோஃபில் தாக்குகிறது."],
["HCN ආකලනය","ඇල්ඩිහයිඩ් හා කීටෝන HCN ආකලනයෙන් cyanohydrin සාදයි. CN⁻ නියුක්ලියෝෆීලය C=O හි C වෙත එක් වේ. HCN අතිශය විෂ බැවින් අත්හදා නොබලන්න.","CH₃CHO + HCN → CH₃CH(OH)CN","Cyanohydrin formation","HCN adds across carbonyl to form cyanohydrin.","சயனோஹைட்ரின் உருவாதல்","HCN சேர்ந்து –OH மற்றும் –CN கொண்ட சேர்மம் தரும்."],
["Grignard ප්‍රතික්‍රියාකාරක","RMgX ප්‍රතික්‍රියාකාරක C=O වෙත කාබන් කාණ්ඩයක් එක් කරයි. අම්ලීය ජලවිච්ඡේදනයෙන් ඇල්කොහොල් ලැබේ. formaldehyde → 1°, අනෙකුත් aldehyde → 2°, ketone → 3° ඇල්කොහොල්.","CH₃CHO + CH₃MgBr → CH₃CH(OMgBr)CH₃ → (H₃O⁺) propan-2-ol","Grignard addition","Organomagnesium reagents add carbon groups to carbonyls.","கிரின்யார்ட் சேர்க்கை","RMgX சேர்ந்து அமில நீராற்பகுப்பில் ஆல்கஹால் தரும்."],
["2,4-DNP අවක්ෂේප පරීක්ෂාව","2,4-dinitrophenylhydrazine (Brady ප්‍රතික්‍රියාකාරකය) ඇල්ඩිහයිඩ්/කීටෝන සමඟ කහ හෝ තැඹිලි hydrazone අවක්ෂේප සාදයි. මෙය carbonyl කාණ්ඩය හඳුනාගැනීමටය; දෙක වෙනකර හඳුනාගැනීමට නොවේ.","C=O + 2,4-DNP → hydrazone + H₂O","2,4-DNP test","Aldehydes and ketones both give hydrazones.","2,4-DNP சோதனை","அல்டிகைடு, கீற்றோன் இரண்டும் hydrazone படிவு தருகின்றன."]
],[
["HCN කාබොනිල් ආකලනයේ ඵලය?","HCN addition to carbonyl gives?","HCN சேர்க்கை விளைவு?",["amide","cyanohydrin","carboxylic acid","ester"],1,"C–CN හා C–OH අඩංගු ඵලයක්."],
["C=O හි නියුක්ලියෝෆීල ප්‍රහාරයට ලක්වන පරමාණුව?","Atom attacked in nucleophilic addition?","நியூக்ளியோஃபில் தாக்கும் அணு?",["oxygen","hydrogen","carbon","magnesium"],2,"Cδ⁺ නිසා carbonyl carbon."],
["2,4-DNP මඟින් හඳුනාගන්නේ?","2,4-DNP detects which group?","2,4-DNP கண்டறியும் குழு?",["carbonyl","alkyl halide","alkane","amine"],0,"ඇල්ඩිහයිඩ් සහ කීටෝන දෙකම."],
["propanone + CH₃MgBr/H₃O⁺ ඵලයේ ඇල්කොහොල් වර්ගය?","Ketone plus Grignard after workup gives?","கீற்றோன் + Grignard விளைவு?",["primary","secondary","aldehyde","tertiary"],3,"ketone C=O වෙත තවත් R කාණ්ඩයක් එක් වේ."],
["2,4-DNP අවක්ෂේපයේ පොදු වර්ණය?","Typical 2,4-DNP precipitate colour?","2,4-DNP படிவு நிறம்?",["blue","yellow/orange","green","violet"],1,"hydrazone කහ/තැඹිලි විය හැක."]
]),
N(["ඇල්ඩිහයිඩ් හඳුනාගැනීම සහ කාබොනිල් ඔක්සිහරණය","Aldehyde tests and carbonyl reductions","அல்டிகைடு சோதனை, கார்போனில் ஒடுக்கம்"],"3.4.5–3.4.7","65–68",
["Tollens, Fehling, NaBH₄/LiAlH₄ සහ Clemmensen ප්‍රතික්‍රියා වෙනස හඳුනාගන්න.","Distinguish oxidation tests and multiple reduction pathways.","Tollens, Fehling மற்றும் கார்போனில் ஒடுக்க வினைகளை வேறுபடுத்துக."],
[
["Tollens රිදී කැඩපත් පරීක්ෂාව","ඇල්ඩිහයිඩ් ammoniacal Ag⁺ අයන ඔක්සිහරණය කර ලෝහමය Ag ලබාදෙයි. ඒ නිසා පරීක්ෂණ නළයේ රිදී කැඩපතක් ඇතිවිය හැකිය. සාමාන්‍ය කීටෝන මෙයට ධන නොවේ.","RCHO + 2[Ag(NH₃)₂]⁺ → RCOO⁻ + 2Ag↓ (schematic)","Tollens silver mirror","Aldehydes reduce Ag⁺ to metallic silver.","Tollens வெள்ளிக் கண்ணாடி","அல்டிகைடுகள் Ag⁺ ஐ வெள்ளியாக ஒடுக்குகின்றன."],
["Fehling ගඩොල් රතු අවක්ෂේප","බොහෝ ඇලිෆැටික ඇල්ඩිහයිඩ් උණුසුම් Fehling ද්‍රාවණයේ Cu²⁺ ඔක්සිහරණය කර ගඩොල් රතු Cu₂O ලබාදෙයි. සියලු ඇරෝමැටික ඇල්ඩිහයිඩ් ධන යැයි නොසිතන්න.","Cu²⁺ → Cu₂O↓ (brick red)","Fehling test","Many aliphatic aldehydes yield brick-red Cu₂O.","Fehling சோதனை","பல அலிபாட்டிக் அல்டிகைடுகள் செங்கல் சிவப்பு Cu₂O தருகின்றன."],
["NaBH₄ / LiAlH₄ ඔක්සිහරණය","ඇල්ඩිහයිඩ් → ප්‍රාථමික ඇල්කොහොල්; කීටෝන → ද්විතීයික ඇල්කොහොල් ලෙස ඔක්සිහරණය කරයි. LiAlH₄, NaBH₄ ට වඩා ප්‍රබල ඔක්සිහාරකයකි.","RCHO → RCH₂OH | R₂CO → R₂CHOH","Hydride reduction","NaBH₄ and LiAlH₄ reduce carbonyls to alcohols.","ஹைட்ரைடு ஒடுக்கம்","அல்டிகைடு முதன்மை; கீற்றோன் இரண்டாம் ஆல்கஹால் ஆகும்."],
["Clemmensen ඔක්සිහරණය","Zn(Hg)/සාන්ද්‍ර HCl මඟින් ඇල්ඩිහයිඩ්/කීටෝන C=O කාණ්ඩය CH₂ බවට පත් කළ හැකිය. මෙය **ඔක්සිහරණය** ය; ඔක්සිකරණය නොවේ. ප්‍රතික්‍රියාකාරකය සහ ඵලය නිවැරදිව සම්බන්ධ කරන්න.","R₂C=O —Zn(Hg)/HCl→ R₂CH₂","Clemmensen reduction","Zn(Hg)/HCl reduces carbonyl to methylene.","Clemmensen ஒடுக்கம்","Zn(Hg)/HCl மூலம் C=O, CH₂ ஆக மாறுகிறது."]
],[
["Tollens ධන පරීක්ෂාවේ දැක්ම?","Observation for positive Tollens?","Tollens நேர்மறை விளைவு?",["green","silver mirror","purple","no change"],1,"Ag⁺ → Ag."],
["Fehling ධන ඵලයේ වර්ණය?","Positive Fehling precipitate?","Fehling படிவு நிறம்?",["blue","white","brick red","yellow"],2,"Cu₂O ගඩොල් රතු."],
["propanone + NaBH₄ → ?","NaBH₄ reduction of propanone?","propanone + NaBH₄?",["propan-2-ol","propanal","propanoic acid","propene"],0,"කීටෝන → 2° ඇල්කොහොල්."],
["Clemmensen ප්‍රතික්‍රියාකාරකය?","Reagent for Clemmensen reduction?","Clemmensen வினைப்பொருள்?",["K₂Cr₂O₇/H⁺","H₂/Ni","NaOH/H₂O","Zn(Hg)/HCl"],3,"Zn(Hg)/HCl."],
["Tollens ධන පරීක්ෂාවක් බහුලව දක්වන්නේ?","Compound usually positive with Tollens?","Tollens நேர்மறையாக இருப்பது?",["propanone","ethanal","ethene","ethane"],1,"ඇල්ඩිහයිඩ් ධන වේ."]
]),
N(["කාබොක්සිලික් අම්ල: ආම්ලිකතාව හා එස්ටරීකරණය","Carboxylic acid acidity and esterification","கார்பாக்சிலிக் அமிலம், எஸ்டர் உருவாக்கம்"],"3.5","68–72",
["–COOH ව්‍යුහය, carboxylate resonance, ලවණ, ආදේශ හා ඔක්සිහරණය විමසා බලන්න.","Examine acidity, carboxylate resonance and acyl reactions.","–COOH அமிலத்தன்மை, கார்பாக்சிலேட் ஒத்திசைவு."],
[
["කාබොක්සිලික් අම්ල ව්‍යුහය","–COOH කාණ්ඩය C=O හා O–H එකම C මත ඇති ව්‍යුහයකි. එහි ඇනායනය වන RCOO⁻ අයනයේ ආරෝපණය O දෙක අතර විස්ථානගත වීමෙන් අම්ල ස්ථායීතාව වැඩි වේ.","RCOOH ⇌ RCOO⁻ + H⁺","Carboxylic acid acidity","Charge delocalization stabilizes the carboxylate conjugate base.","கார்பாக்சிலிக் அமிலத்தன்மை","RCOO⁻ இல் மின்னூட்டம் இரு O அணுக்களில் பரவுகிறது."],
["NaOH හා කාබනේට්","කාබොක්සිලික් අම්ල NaOH සමඟ ලවණ හා ජලය දෙයි. NaHCO₃ සමඟ CO₂ වායුව නිදහස් වේ. ෆීනෝල් සමඟ වෙන්කිරීමට මෙය ප්‍රයෝජනවත්ය.","RCOOH + NaHCO₃ → RCOONa + CO₂↑ + H₂O","Bicarbonate test","Carboxylic acids liberate CO₂ from bicarbonate.","பைக்கார்பனேட் சோதனை","RCOOH + NaHCO₃ இல் CO₂ வெளியேறும்."],
["ඇල්කොහොල් සමඟ එස්ටරීකරණය","කාබොක්සිලික් අම්ල ඇල්කොහොල් සමඟ ආම්ලික උත්ප්‍රේරක හා උණුසුම යටතේ එස්ටර හා ජලය සෑදෙන සමතුලිත ප්‍රතික්‍රියාවකට ලක්වේ.","CH₃COOH + C₂H₅OH ⇌ CH₃COOC₂H₅ + H₂O","Fischer esterification","Acids react reversibly with alcohols to form esters.","எஸ்டர் உருவாக்கம்","அமிலம், ஆல்கஹால் சேர்ந்து எஸ்டர், நீர் தரும்."],
["LiAlH₄ ඔක්සිහරණය හා PCl₅","LiAlH₄, RCOOH → RCH₂OH කරයි. PCl₅ මගින් –COOH හි –OH වෙනුවට Cl ආදේශ කර RCOCl අම්ල ක්ලෝරයිඩයක් සෑදිය හැකිය.","RCOOH —LiAlH₄→ RCH₂OH | RCOOH + PCl₅ → RCOCl","Reduction and chloride formation","LiAlH₄ reduces acids; PCl₅ forms acyl chlorides.","அமில ஒடுக்கமும் குளோரைடு மாற்றமும்","LiAlH₄ ஆல்கஹால்; PCl₅ அசைல் குளோரைடு தரும்."]
],[
["RCOOH සමඟ NaHCO₃ පිටවන වායුව?","Gas from acid plus NaHCO₃?","அமிலம் + NaHCO₃ வாயு?",["H₂","O₂","CO₂","N₂"],2,"බුබුලු CO₂ නිසා වේ."],
["කාබොක්සිලික් අම්ලයේ සම්ප්‍රයුක්ත භෂ්මය?","Conjugate base of RCOOH?","RCOOH இன் இணைக் காரம்?",["RCOO⁻","RO⁻","RCHO","RCN"],0,"RCOO⁻ carboxylate ය."],
["RCOOH + ROH යටතේ ලැබෙන්නේ?","Products of acid plus alcohol?","அமிலம் + ஆல்கஹால் விளைவு?",["amide","alkene","alkyne","ester + water"],3,"එස්ටරීකරණයයි."],
["RCOOH + LiAlH₄ හි ඵලය?","LiAlH₄ reduces acids to?","LiAlH₄ ஒடுக்கம்?",["ketone","primary alcohol","alkene","amide"],1,"–COOH → –CH₂OH."],
["RCOOH + PCl₅ මඟින් ලැබෙන කාණ්ඩය?","Product class with PCl₅?","PCl₅ மூலம் கிடைப்பது?",["ether","aldehyde","acyl chloride","ketone"],2,"–COOH → –COCl."]
]),
N(["අම්ල ක්ලෝරයිඩ: නියුක්ලියෝෆීල ඇසිල් ආදේශ","Acyl chloride nucleophilic acyl substitution","அசைல் குளோரைடு மாற்று வினைகள்"],"3.6.1","72–73",
["–COCl හි ඉවත්වන Cl⁻ කාණ්ඩය හා විවිධ නියුක්ලියෝෆීල ඵල හඳුනාගන්න.","Compare hydrolysis, alcoholysis and aminolysis of acyl chlorides.","அசைல் குளோரைடு நீராற்பகுப்பு, எஸ்டர், அமைடு உருவாக்கம்."],
[
["ජලය සමඟ අම්ලය","අම්ල ක්ලෝරයිඩ ජලය සමඟ වේගයෙන් ප්‍රතික්‍රියා කර කාබොක්සිලික් අම්ල හා HCl සෑදේ. තෙතමනයේදී මේවා ප්‍රතික්‍රියාශීලී බැවින් සුරක්ෂිත අධීක්ෂණය අත්‍යවශ්‍යය.","RCOCl + H₂O → RCOOH + HCl","Acyl chloride hydrolysis","Water hydrolyses an acyl chloride to an acid.","அசைல் குளோரைடு நீராற்பகுப்பு","நீர் சேர்ந்து கார்பாக்சிலிக் அமிலம், HCl உருவாகும்."],
["NaOH සමඟ ලවණ","ජලීය NaOH සමඟ acyl chloride මඟින් carboxylate ලවණය, NaCl සහ H₂O ලැබේ.","RCOCl + 2NaOH → RCOONa + NaCl + H₂O","Hydrolysis in alkali","Aqueous alkali yields a carboxylate salt.","காரக் நீராற்பகுப்பு","NaOH மூலம் கார்பாக்சிலேட் உப்பு கிடைக்கும்."],
["ඇල්කොහොල් හා ෆීනෝල්","RCOCl ඇල්කොහොල් සමඟ එස්ටර ලබාදෙයි; ෆීනෝල් සමඟද අදාළ ester සෑදිය හැකිය. ප්‍රතික්‍රියාවේ HCl නිදහස් වේ.","CH₃COCl + C₂H₅OH → CH₃COOC₂H₅ + HCl","Alcoholysis and ester formation","Acyl chlorides react with alcohols to form esters.","எஸ்டர் உருவாக்கம்","அசைல் குளோரைடு + ஆல்கஹால் → எஸ்டர்."],
["NH₃ හා ඇමීන","RCOCl + NH₃ මඟින් primary amide; primary amine සමඟ N-substituted amide ලැබේ. HCl අවශෝෂණයට අතිරික්ත භෂ්මයක්/ඇමීනයක් අවශ්‍ය විය හැකිය.","RCOCl + 2NH₃ → RCONH₂ + NH₄Cl","Acyl chloride aminolysis","Ammonia/primary amines produce amides.","அமைடு உருவாக்கம்","NH₃ அல்லது அமீன் உடன் அமைடு உருவாகும்."]
],[
["RCOCl + H₂O ඵලය?","Acyl chloride hydrolysis gives?","RCOCl + H₂O?",["ketone","RCOOH + HCl","aldehyde","alkane"],1,"අම්ල හා HCl ලැබේ."],
["RCOCl + ethanol ඵල වර්ගය?","Acyl chloride with alcohol gives?","அசைல் குளோரைடு + ஆல்கஹால்?",["ester","amine","alkyne","alkene"],0,"එස්ටර සාදයි."],
["RCOCl + NH₃ මඟින් සාදන්නේ?","Product with ammonia?","RCOCl + NH₃?",["phenol","ether","amide","aldehyde"],2,"amides ලැබේ."],
["RCOCl + NaOH අධිකය සමඟ ලවණය?","Alkali product of acyl chloride?","RCOCl + NaOH உப்பு?",["R–X","R–OH","R–NH₂","RCOONa"],3,"carboxylate ලවණය වේ."],
["මෙම ප්‍රතික්‍රියා වර්ගය කුමක්ද?","Reaction class of acyl chlorides?","அசைல் குளோரைடு வினைவகை?",["electrophilic aromatic substitution","nucleophilic acyl substitution","free-radical addition","combustion"],1,"Nu ප්‍රහාරයෙන් Cl⁻ ඉවත්වේ."]
]),
N(["එස්ටර: ජලවිච්ඡේදනය හා ඔක්සිහරණය","Esters: hydrolysis and reduction","எஸ்டர் நீராற்பகுப்பும் ஒடுக்கமும்"],"3.6.2","73–74",
["එස්ටරවල අම්ලීය හා භාෂ්මීය ජලවිච්ඡේදනය සහ ඔක්සිහරණ ඵල සසඳන්න.","Compare reversible acid hydrolysis, base hydrolysis and LiAlH₄ reduction.","அமில, கார நீராற்பகுப்பு மற்றும் LiAlH₄ ஒடுக்கம்."],
[
["එස්ටර කාණ්ඩය","RCOOR′ යනු එස්ටරයකි. සාමාන්‍යයෙන් සමහර එස්ටරවලට විශේෂ පලතුරු සුවඳක් තිබිය හැකි නමුත් සුවඳ පමණක් රසායනික හඳුනාගැනීමක් නොවේ.","R–C(=O)–OR′","Ester structure","Esters have the –COOR′ acyl-oxygen linkage.","எஸ்டர் அமைப்பு","எஸ்டர் –COOR′ குழுவைக் கொண்டது."],
["අම්ලීය ජලවිච්ඡේදනය","තනුක අම්ල සහ H₂O යටතේ එස්ටර ජලවිච්ඡේදනයෙන් කාබොක්සිලික් අම්ල හා ඇල්කොහොල් ලැබේ. මෙය සමතුලිත ප්‍රතික්‍රියාවකි.","RCOOR′ + H₂O ⇌ RCOOH + R′OH","Acid hydrolysis","Acidic ester hydrolysis is reversible.","அமில நீராற்பகுப்பு","அமிலத்தில் எஸ்டர் அமிலம், ஆல்கஹால் தரும்."],
["භාෂ්මීය ජලවිච්ඡේදනය","NaOH යටතේ carboxylate ලවණ හා ඇල්කොහොල් ලැබේ; ලවණ සෑදීම නිසා ප්‍රතික්‍රියාව වඩා ප්‍රායෝගිකව එක දිශාවකට යයි. මෙය saponification ලෙසද හැඳින්වේ.","RCOOR′ + NaOH → RCOONa + R′OH","Saponification","Base hydrolysis yields carboxylate and alcohol.","கார நீராற்பகுப்பு","கார்பாக்சிலேட் உப்பும் ஆல்கஹாலும் உருவாகும்."],
["LiAlH₄ සහ Grignard","LiAlH₄ එස්ටර සම්බන්ධව ඇල්කොහොල් ඵල ලබාදෙයි. අතිරික්ත Grignard reagent සමඟ අදාළ තෘතීයික ඇල්කොහොල් ලැබිය හැකිය; කාබන් කාණ්ඩ ආකලන දෙක සිදු වීම වැදගත්ය.","RCOOR′ —LiAlH₄→ RCH₂OH + R′OH","Reduction and Grignard","LiAlH₄ produces alcohols; excess Grignard can give tertiary alcohols.","எஸ்டர் ஒடுக்கம்","LiAlH₄ ஆல்கஹால்கள் தரும்; Grignard மூலம் மூன்றாம் ஆல்கஹால்."]
],[
["එස්ටර සාමාන්‍ය කාණ්ඩය?","General ester structure?","எஸ்டர் குழு?",["RCONH₂","RCOOR′","RCOCl","RCOOH"],1,"–COOR′ වේ."],
["එස්ටර + NaOH ඵලය?","Base hydrolysis product?","எஸ்டர் + NaOH விளைவு?",["carboxylate + alcohol","acid only","alkene","amine"],0,"ලවණ හා ඇල්කොහොල්."],
["අම්ලීය එස්ටර ජලවිච්ඡේදනය?","Acid hydrolysis is generally?","அமில நீராற்பகுப்பு?",["always irreversible","combustion","reversible","polymerization"],2,"සමතුලිතව සිදුවිය හැකිය."],
["LiAlH₄ එස්ටරයෙන් ලබාදෙන ප්‍රධාන වර්ගය?","Ester with LiAlH₄ gives?","எஸ்டர் + LiAlH₄?",["alkyne","ketone","amide","alcohols"],3,"RCH₂OH හා R′OH."],
["එස්ටර භාෂ්මීය ජලවිච්ඡේදනයේ තවත් නම?","Alternative name for alkaline ester hydrolysis?","கார நீராற்பகுப்பு பெயர்?",["halogenation","saponification","nitration","diazotization"],1,"Saponification යනුවෙන්ද හැඳින්වේ."]
]),
N(["ඇමයිඩ: ජලවිච්ඡේදනය හා ඔක්සිහරණය","Amides: hydrolysis and reduction","அமைடு நீராற்பகுப்பும் ஒடுக்கமும்"],"3.6.3","74–75",
["–CONH₂ කාණ්ඩය සහ ප්‍රධාන ප්‍රතික්‍රියා අධ්‍යයනය කර ඇමීන සමඟ පටලවා නොගන්න.","Distinguish amides from amines; compare hydrolysis and reduction.","அமைடையும் அமீனையும் வேறுபடுத்தி வினைகளை அறிக."],
[
["ඇමයිඩ කාණ්ඩයේ ව්‍යුහය","RCONH₂ හි N, කාබොනිල් C සමඟ සම්බන්ධය. N හි lone pair, C=O සමඟ resonance සම්බන්ධතාවක යෙදෙන නිසා ඇමයිඩ සාමාන්‍ය ඇමීන තරම් භාෂ්මික නොවේ.","R–C(=O)–NH₂","Amide functional group","Amide nitrogen is attached to a carbonyl carbon.","அமைடு செயற்பாட்டுக் குழு","அமைடு N, கார்போனில் C உடன் இணைந்துள்ளது."],
["NaOH සමඟ උණු කිරීම","ප්‍රාථමික ඇමයිඩ ජලීය NaOH සමඟ උණු කිරීමෙන් අදාළ carboxylate ලවණ හා NH₃ ලැබේ. NH₃ තෙත් රතු ලිට්මස් නිල් කළ හැකිය.","RCONH₂ + NaOH → RCOONa + NH₃↑","Amide alkaline hydrolysis","Heating amides with NaOH can liberate NH₃.","கார நீராற்பகுப்பு","NaOH சூட்டில் கார்பாக்சிலேட், NH₃ கிடைக்கும்."],
["LiAlH₄ ඔක්සිහරණය","LiAlH₄ මඟින් කාබොනිල් C–O සම්බන්ධතාව ඔක්සිහරණය වී RCONH₂ → RCH₂NH₂ ලෙස ප්‍රාථමික ඇමීනයක් සෑදේ. ඇමයිඩය ඇමීනයක් බවට පරිවර්තනය මෙහි ප්‍රධාන කරුණයි.","RCONH₂ —LiAlH₄→ RCH₂NH₂","Amide reduction","LiAlH₄ turns a primary amide into a primary amine.","அமைடு ஒடுக்கம்","LiAlH₄ மூலம் முதன்மை அமீன் கிடைக்கும்."],
["ව්‍යුත්පන්න ප්‍රතික්‍රියා සිතියම","RCOCl → RCONH₂ → RCH₂NH₂ යන පරිවර්තනය සම්බන්ධ කරගන්න. RCOOR′ NaOH දී carboxylate දෙයි, RCONH₂ NaOH දී NH₃ දෙයි. ඵල වෙනස විභාගයට වැදගත්ය.","RCOCl → RCONH₂ → RCH₂NH₂","Reaction map","Acyl chloride forms amide, then reduction gives amine.","வினை மாற்றுச் சித்திரம்","அசைல் குளோரைடு → அமைடு → அமீன்."]
],[
["ඇමයිඩ ප්‍රධාන කාණ්ඩය?","Primary amide group?","அமைடு குழு?",["–NH₂ only","–CHO","–CONH₂","–COOH"],2,"–CONH₂ වේ."],
["RCONH₂ + NaOH උණු කිරීමේ වායුව?","Gas from heated primary amide + NaOH?","அமைடு + NaOH வாயு?",["NH₃","H₂","CO₂","Cl₂"],0,"ඇමෝනියා නිදහස් විය හැකිය."],
["RCONH₂ + LiAlH₄ ඵලය?","Reduction of primary amide gives?","அமைடு + LiAlH₄?",["carboxylic acid","ketone","ester","primary amine"],3,"–CONH₂ → –CH₂NH₂."],
["RCOCl + NH₃ ලබාදෙන වර්ගය?","Acyl chloride plus ammonia gives?","RCOCl + NH₃?",["ketone","amide","alkyne","ester"],1,"acyl chloride amide සාදයි."],
["ඇමයිඩ ඇමීනවලට වඩා අඩු භාෂ්මික වන්නේ?","Why are amides less basic?","அமைடு ஏன் குறைந்த காரம்?",["ionic lattices","triple bonds","lone-pair resonance","UV"],2,"N lone pair කාබොනිල් සමඟ විස්ථානගත වේ."]
])
];
window.U9_CHAPTERS=C;
window.U9_STRUCTURED=[
["ඇල්කොහොල් වර්ග සහ ඔක්සිකරණය","1°,2°,3° වර්ග සමඟ Na, HBr, Lucas, H₂SO₄, K₂Cr₂O₇ ප්‍රතික්‍රියා නිවැරදි ඵල දක්වන්න.","Describe classes, reactions and oxidation of alcohols.","ஆல்கஹால் வகைகளும் ஒட்சியேற்றமும்."],
["ෆීනෝල් ආම්ලිකතාව හා bromination","ෆීනොක්සයිඩ resonance, NaOH, Br₂ ජලය සහ HNO₃ ප්‍රතික්‍රියා සසඳන්න.","Explain phenol resonance and ring substitution.","பீனால் அமிலத்தன்மை, வளையப் பதிலீடு."],
["කාබොනිල් නියුක්ලියෝෆීල ආකලන","HCN, Grignard, 2,4-DNP හා NaBH₄ මඟින් aldehyde හා ketone ප්‍රතික්‍රියා වෙනස දක්වන්න.","Compare carbonyl additions and reductions.","கார்போனில் சேர்க்கையும் ஒடுக்கமும்."],
["ඇල්ඩිහයිඩ් හඳුනාගැනීම","Tollens silver mirror හා Fehling Cu₂O ගඩොල් රතු පරීක්ෂා, ධනාත්මක/ඍණාත්මක ඵල, සීමා සසඳන්න.","Explain aldehyde identification tests.","அல்டிகைடு கண்டறியும் சோதனைகள்."],
["කාබොක්සිලික් අම්ල ව්‍යුත්පන්න","RCOOH → RCOCl → RCONH₂, RCOOR′ සහ අදාළ hydrolysis/reduction ඵල සම්බන්ධ කරන්න.","Develop an acyl derivative conversion scheme.","கார்பாக்சிலிக் அமில வழிப்பொருள் மாற்றங்கள்."]
];
window.U9_ESSAY=[
["ඔක්සිජන් අඩංගු කාබනික සංයෝගවල කාර්ය කාණ්ඩ, ගුණ හා ප්‍රතික්‍රියා විස්තර කරන්න.","ඇල්කොහොල්, ෆීනෝල්, ඇල්ඩිහයිඩ්, කීටෝන, අම්ල, ඇසිල් ක්ලෝරයිඩ, එස්ටර, ඇමයිඩ වෙනස; පරීක්ෂණ, ප්‍රතික්‍රියාකාරක, ඵල ඇතුළත් කරන්න.","Explain oxygen functional groups, properties and reactions.","ஒட்சிசன் கொண்ட கரிமக் குழுக்களை விளக்குக."],
["ප්‍රතික්‍රියා ජාලයක් සකස් කර ඵල හා පරීක්ෂණ තර්ක කරන්න.","ethanol→ethanal→ethanoic acid→ester/acyl chloride→amide, and carbonyl reduction. Tollens, Fehling, 2,4-DNP හා Lucas tests යොදා වෙනස්කම් දක්වන්න.","Develop and justify a reaction-conversion network.","கரிம மாற்றச் சங்கிலியை உருவாக்குக."]
];
})();
