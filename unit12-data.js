/* Pathum Unit 12 • Chemical Equilibrium
   Original instructional summaries organised against the supplied NIE Grade 13
   Sinhala Chemistry Resource Book (2019), printed pp. 77–232, §§2.1–2.7.
   All quiz questions are newly authored model items, not past-paper transcriptions. */
(function(){
"use strict";
function C(n,ref,pages,steps,qs){return{name:n,ref:ref,pages:pages,steps:steps,qs:qs}}
const C12=[
C(["භෞතික හා රසායනික ගතික සමතුලිතතාව","Physical and chemical dynamic equilibrium","இயற்பியல் மற்றும் வேதியியல் இயக்கச் சமநிலை"],"2.1.1–2.1.2","78–82",[
["ප්‍රතිවර්තන ක්‍රියාවලිය","ප්‍රතිවර්තන ක්‍රියාවලියක ඉදිරි හා පසුගාමී ක්‍රියාවන් එකම පද්ධතියක් තුළ සිදුවිය හැකිය. සංවෘත පද්ධතියක් තුළ සමතුලිතතාව ඇතිවීමට අවශ්‍ය කොන්දේසි සලකන්න.","A ⇌ B","A reversible process proceeds in both directions under appropriate conditions.","பொருத்தமான நிலைகளில் வினை இரு திசைகளிலும் நடைபெறலாம்."],
["ගතික සමතුලිතතාව","සමතුලිතයේදී ඉදිරි හා පසුගාමී වේග සමාන වුවත් අණුක මට්ටමේ ක්‍රියාවන් නතර නොවේ.","vforward = vreverse ≠ 0","At dynamic equilibrium, forward and reverse rates are equal and nonzero.","சமநிலையில் முன் மற்றும் பின் வினைவேகங்கள் சமம்; வினைகள் நிற்காது."],
["සාන්ද්‍රණ හා වේග ප්‍රස්තාර","සමතුලිතයට ළඟාවෙද්දී සාන්ද්‍රණ නියත අගයකට ළඟා වෙයි. සාන්ද්‍රණ සමාන වීම අවශ්‍ය නැත; නියත වීමයි වැදගත්.","d[A]/dt = d[B]/dt = 0 (net)","At equilibrium, macroscopic concentrations are constant but need not be equal.","சமநிலையில் செறிவுகள் மாறாமல் இருக்கும்; அவை ஒன்றுக்கொன்று சமமாக இருக்க வேண்டியதில்லை."],
["ජලයේ වාෂ්පීභවනය","වසා ඇති බඳුනක ජලය වාෂ්පීභවනය හා ඝනීභවනය සමාන වේගයකට ළඟා විය හැකිය. පෙනුමෙන් නොවෙනස්ව පවතින පද්ධතිය තුළ ක්‍රියාවන් සිදුවේ.","H₂O(l) ⇌ H₂O(g)","Evaporation and condensation continue at equal rates in a closed container.","மூடிய பாத்திரத்தில் ஆவியாதலும் திரவமாதலும் சம வேகத்தில் தொடர்கின்றன."]
],[
["සමතුලිතයේ ඉදිරි හා පසුගාමී වේග අතර සම්බන්ධතාව කුමක්ද?","How are the forward and reverse rates related at equilibrium?","equalRate|forwardFaster|reverseFaster|bothZero",0,"ගතික සමතුලිතතාවයේදී වේග දෙක සමාන වේ."],
["සමතුලිතයේ ප්‍රතික්‍රියාව නතර වෙයිද?","Does molecular activity cease at equilibrium?","no|yes|onlySolids|always",0,"ප්‍රතික්‍රියා දෙකම දිගටම සිදුවෙයි."],
["සමතුලිතයේ [A] සහ [B] අනිවාර්යයෙන් සමානද?","Must [A] and [B] be equal at equilibrium?","no|yes|zero|infinite",0,"සාන්ද්‍රණ නියත වුවත් සමාන විය යුතු නැත."],
["වසා ඇති බඳුනක ජල වාෂ්පය සම්බන්ධ සමතුලිතය කුමක්ද?","Which phase equilibrium applies to water in a sealed container?","H₂O(l) ⇌ H₂O(g)|H₂O → H₂ + O₂|H₂O → H⁺|2H₂O → H₂O₂",0,"වාෂ්පීභවනය හා ඝනීභවනයයි."],
["ගතික සමතුලිතතාවේ ප්‍රධාන ලක්ෂණය?","What is the defining condition of dynamic equilibrium?","equalRate|sameAmounts|bothZero|noParticles",0,"සමතුලිතතාව යනු වේග සමාන වීමයි."]
]),
C(["සමතුලිතතා නියමය හා Kc","Equilibrium law and Kc","சமநிலை விதியும் Kc மாறிலியும்"],"2.1.3–2.1.4","82–87",[
["සමතුලිතතා නියතයේ අර්ථය","නියත උෂ්ණත්වයකදී නියමිත ප්‍රතික්‍රියාවක සමතුලිත සාන්ද්‍රණවලින් සාදන අනුපාතයට නිශ්චිත අගයක් ඇත. සමීකරණය නිවැරදිව තුලනය කරන්න.","aA + bB ⇌ cC + dD","At fixed temperature the equilibrium constant uses equilibrium concentrations.","நிலையான வெப்பநிலையில் சமநிலைச் செறிவுகளின் விகிதம் மாறிலி."],
["Kc ප්‍රකාශනය","ඵල සාන්ද්‍රණ ගුණිතය ඉහළටත් ප්‍රතික්‍රියක සාන්ද්‍රණ ගුණිතය පහළටත් යොදන්න. සංගුණක ඝාත ලෙස යොදන්න.","Kc = [C]ᶜ[D]ᵈ / ([A]ᵃ[B]ᵇ)","Stoichiometric coefficients become powers in the equilibrium expression.","சமன்பாட்டுக் குணகங்கள் சமநிலைச் செறிவுகளின் அடுக்குகளாக அமையும்."],
["Kc හා වේග නියතය","Kc සහ චාලක රසායනයේ k එකම නියත නොවේ. Kc සමතුලිත සංයුතිය සම්බන්ධ කරන අතර k ප්‍රතික්‍රියා වේග නියමයට අයත් වේ.","Kc ≠ k(rate)","Equilibrium constants and rate constants are different quantities.","சமநிலை மாறிலியும் வேக மாறிலியும் வேறு."],
["උෂ්ණත්වය හා K","නියමිත සමීකරණයක් සඳහා K අගය වෙනස් කිරීමට උෂ්ණත්වය වෙනස් කිරීම වැදගත්ය. සාන්ද්‍රණ වෙනස් කළ විට නව සමතුලිතයක් ලැබුණත් එකම උෂ්ණත්වයේ K වෙනස් නොවේ.","K = f(T) for specified reaction","For a given equation, K changes with temperature, not merely concentration.","ஒரே வினைச் சமன்பாட்டில் வெப்பநிலையால் K மாறும்."]
],[
["N₂ + 3H₂ ⇌ 2NH₃ සඳහා Kc කුමක්ද?","Choose Kc for N₂ + 3H₂ ⇌ 2NH₃.","[NH₃]²/([N₂][H₂]³)|[N₂][H₂]³/[NH₃]²|[NH₃]/[H₂]|[N₂]/[NH₃]",0,"තුලිත සංගුණක 1,3,2 ඝාත වේ."],
["Kc හා k(rate) එකමද?","Are Kc and the rate constant identical?","no|yes|onlySolids|always",0,"ඒවා විවිධ නියත දෙකකි."],
["Kc ගණනයේ භාවිත කරන්නේ කුමන සාන්ද්‍රණද?","Which concentrations belong in Kc?","equilibriumConcentrations|initialOnly|randomValues|zero",0,"සමතුලිතයේ සාන්ද්‍රණ භාවිත කරයි."],
["එකම උෂ්ණත්වයේ [A] වෙනස් කිරීමෙන් K වෙනස්ද?","Does changing [A] at fixed T change K?","no|yes|alwaysDouble|zero",0,"K එකම T දී නියතයි."],
["2NO₂ ⇌ N₂O₄ සඳහා Kc කුමක්ද?","Choose Kc for 2NO₂ ⇌ N₂O₄.","[N₂O₄]/[NO₂]²|[NO₂]²/[N₂O₄]|[NO₂]/[N₂O₄]|[N₂O₄]²/[NO₂]",0,"නිෂ්පාදන ÷ ප්‍රතික්‍රියක ඝාත."],
]),
C(["ප්‍රතික්‍රියා ප්‍රමාණය, Kp සහ Kc","Extent of reaction, Kp and Kc","வினை நடைபெறும் அளவும் Kp, Kc தொடர்பும்"],"2.1.5–2.1.7","87–96",[
["K අගයේ විශාලත්වය","K ≫ 1 නම් සමතුලිතයේ ඵල සාපේක්ෂව වාසිදායක වන අතර K ≪ 1 නම් ප්‍රතික්‍රියක අධිපති වේ; K මගින් වේගය නියම නොවේ.","K ≫ 1 vs K ≪ 1","Large K generally favours products; small K favours reactants.","பெரிய K விளைபொருளையும் சிறிய K வினைபொருளையும் ஆதரிக்கும்."],
["වායු අර්ධ පීඩන","වායු පද්ධති සඳහා සමතුලිත අර්ධ පීඩනවලින් Kp ලිවිය හැකිය. ශුද්ධ ඝන හා ද්‍රව පීඩන K ප්‍රකාශනයට ඇතුළත් නොකරන්න.","Kp = Π(p products)^ν / Π(p reactants)^ν","Use equilibrium partial pressures for gases.","வாயுக்களின் சமநிலைப் பகுதி அழுத்தங்களைக் கொண்டு Kp கணக்கிடுக."],
["Kp–Kc සම්බන්ධය","පරිපූර්ණ වායු ලෙස සැලකූ විට Kp = Kc(RT)^(Δnගෑස්) වේ. මෙහි Δn යනු නිෂ්පාදන වායු සංගුණක එකතුව − ප්‍රතික්‍රියක වායු සංගුණක එකතුවයි.","Kp = Kc(RT)^(Δn₍gas₎)","For ideal gases use the change in gaseous stoichiometric moles.","சீரிய வாயுக்களுக்கு Kp = Kc(RT)^Δn ஆகும்."],
["ඒකක හා ගණනය","දෙන ලද පොතේ සාන්ද්‍රණ/පීඩන සම්මුති අනුව ඒකක සලකා බලන්න. Δn = 0 නම් Kp හා Kc ගණිතමය අගය සමාන වේ.","Δn = 0 ⇒ Kp = Kc","Check Δn and consistent pressure and concentration units.","Δn பூஜ்யமாக இருந்தால் Kp, Kc எண் மதிப்புகள் சமம்."]
],[
["N₂+3H₂⇌2NH₃ සඳහා Δn(gas)?","What is Δn(gas) for N₂+3H₂⇌2NH₃?","−2|+2|0|−1",0,"2−(1+3)=−2."],
["Δn=0 නම් Kp හා Kc සම්බන්ධය?","If Δn=0, how are Kp and Kc related?","Kp=Kc|Kp=0|Kc=0|Kp=RT",0,"(RT)^0 = 1."],
["K ≫ 1 මඟින් පැහැදිලි වන්නේ?","What does K much greater than one suggest?","productsFavoured|reactantsFavoured|fastReaction|zeroRate",0,"සමතුලිතයේ ඵල අධිපති වේ."],
["Kp සඳහා කුමන දත්තද?","Which data are used for Kp?","partialPressures|initialOnly|massOnly|temperatureOnly",0,"වායු අර්ධ පීඩන භාවිත වේ."],
["Kp හා Kc අතර සම්බන්ධය?","Select the Kp–Kc relation.","Kp=Kc(RT)^Δn|Kp=Kc+RT|Kp=Kc/Δn|Kp=Kc×Δn",0,"පරිපූර්ණ වායු සඳහා යෙදේ."]
]),
C(["විෂමජාතික හා බහුපියවර සමතුලිත","Heterogeneous and combined equilibria","பல்வேறு நிலை மற்றும் இணைந்த சமநிலைகள்"],"2.1.8–2.1.9","96–100",[
["විෂමජාතික සමතුලිතතාව","ඝන, ද්‍රව හා වායු අවස්ථා එකට පවතින සමතුලිතයක් විෂමජාතික වේ. ශුද්ධ ඝන හෝ ශුද්ධ ද්‍රවයේ ක්‍රියාකාරීත්වය 1 ලෙස සලකා එය K ප්‍රකාශනයෙන් ඉවත් කරයි.","CaCO₃(s) ⇌ CaO(s)+CO₂(g)","Pure solid and liquid activities are omitted from heterogeneous K expressions.","பல்வேறு நிலை சமநிலையில் தூய திண்ம/திரவ செயல்பாடு 1 ஆகும்."],
["CaCO₃ උදාහරණය","CaCO₃(s) ⇌ CaO(s)+CO₂(g) සඳහා Kp යනු නියමිත පීඩන සම්මුතියට අනුව CO₂ අර්ධ පීඩනයෙන් පමණක් තීරණය වේ.","Kp ∝ p(CO₂)","Only CO₂ gas appears in the heterogeneous equilibrium expression.","இந்த சமநிலையில் CO₂ பகுதி அழுத்தமே Kp இல் இடம்பெறும்."],
["සමීකරණය ආපසු හැරවීම","සමීකරණය ප්‍රතිවිරුද්ධ දිශාවට ලියන විට නව සමතුලිතතා නියතය මුල් අගයේ ප්‍රතිලෝමයයි.","Kreverse = 1/Kforward","Reversing the reaction reciprocates its equilibrium constant.","வினையைத் திருப்பினால் சமநிலை மாறிலி தலைகீழாகும்."],
["සමීකරණ එකතු කිරීම","පියවර කිහිපයක් එකතු කර සම්පූර්ණ ප්‍රතික්‍රියාව ලබාගත් විට ඒවායේ K අගයන් ගුණ කරයි. සමීකරණය n ගුණ කළහොත් Kⁿ වේ.","Ktotal = K₁K₂; K(n×rxn)=Kⁿ","Combining reactions multiplies the corresponding K values.","வினைகளை கூட்டினால் அவற்றின் K மதிப்புகள் பெருக்கப்படும்."]
],[
["CaCO₃(s) ⇌ CaO(s)+CO₂(g) සඳහා Kp හි අඩංගු වන්නේ?","Which species appears in Kp for CaCO₃ decomposition?","CO₂|CaCO₃|CaO|CaCO₃×CaO",0,"ශුද්ධ ඝන K හි නොයෙදේ."],
["K=4 ප්‍රතික්‍රියාව ආපසු හැරවූ විට K?","If K=4, what is K for the reverse reaction?","0.25|4|16|8",0,"Kreverse = 1/4."],
["සමීකරණය දෙගුණ කළ විට K?","If all reaction coefficients double, the new K is?","K²|2K|K/2|1/K",0,"සංගුණක දෙගුණ කිරීම K වර්ගයට පරිවර්තනය කරයි."],
["පියවර දෙකේ K₁=2 සහ K₂=3 නම් සමස්ත K?","If K₁=2 and K₂=3 for added reactions, Ktotal?","6|5|1|1.5",0,"Ktotal=K₁K₂."],
["විෂමජාතික K හි සාමාන්‍යයෙන් නොයෙදෙන්නේ?","What is normally omitted from heterogeneous K?","pureSolids|gases|aqueousSpecies|partialPressures",0,"ශුද්ධ ඝනවල ක්‍රියාකාරීත්වය 1 වේ."]
]),
C(["ප්‍රතික්‍රියා දිශාව, Q සහ ICE ගණනය","Reaction quotient Q and ICE tables","வினைத்திசை Q மற்றும் ICE கணக்கீடுகள்"],"2.1.10–2.1.11","100–110",[
["Q හි අර්ථය","Q යනු නියමිත මොහොතක ඇති සාන්ද්‍රණ/පීඩනවලින් K ආකාරයටම ලියන ප්‍රකාශනයයි. Q සහ K සසඳා ශුද්ධ ප්‍රතික්‍රියා දිශාව නිගමනය කළ හැකිය.","Q < K → forward","Q is calculated with current composition and compared with K.","தற்போதைய செறிவுகளை வைத்து Q கணக்கிட்டு K உடன் ஒப்பிடுக."],
["Q හා K සසඳීම","Q < K නම් ඉදිරි දිශාව, Q > K නම් පසුගාමී දිශාව වාසිදායකය. Q = K නම් පද්ධතිය සමතුලිතය.","Q > K → reverse; Q=K → equilibrium","Q less than K favours forward progress; Q greater than K favours reverse.","Q<K முன்திசை; Q>K பின்ன்திசை; Q=K சமநிலை."],
["ICE වගුව","ආරම්භක (I), වෙනස (C) හා සමතුලිත (E) සාන්ද්‍රණ සටහන් කර, stoichiometry අනුව ±x යොදා K ප්‍රකාශනයට ආදේශ කරන්න.","I → C → E","Track initial, change and equilibrium values with stoichiometry.","தொடக்கம், மாற்றம், சமநிலை செறிவுகளை அட்டவணையில் அமைக்கவும்."],
["සාධාරණ අගයක් තෝරන්න","ද්විතීයික සමීකරණයක ලැබෙන root අතරින් ඍණ සාන්ද්‍රණයකට හෝ ආරම්භක ප්‍රමාණය ඉක්මවන consumption එකකට හේතු වන root ප්‍රතික්ෂේප කරන්න.","0 ≤ x ≤ limiting initial amount","Reject mathematical roots that yield impossible negative concentrations.","எதிர்மறை செறிவு தரும் கணிதத் தீர்வுகளை நிராகரிக்கவும்."]
],[
["Q<K නම් ප්‍රතික්‍රියාවේ ශුද්ධ දිශාව?","If Q<K, what direction is favoured?","forward|reverse|atEquilibrium|noReaction",0,"ඵල වැඩි කිරීමෙන් Q ඉහළ යයි."],
["Q>K නම්?","If Q>K, which direction is favoured?","reverse|forward|atEquilibrium|bothZero",0,"ඵල අඩු කරන පසු දිශාව වාසිදායකයි."],
["Q=K නම්?","If Q=K, the mixture is?","atEquilibrium|forward|reverse|unstable",0,"සමතුලිත සංයුතියට ළඟා වී ඇත."],
["ICE යන්නෙහි E අකුරෙන් කියවෙන්නේ?","What does E stand for in an ICE table?","equilibriumConcentrations|initialOnly|rateConstant|pressureOnly",0,"E = equilibrium."],
["ICE ගණනයක ඍණ සාන්ද්‍රණ ලැබූ root එක?","What to do with a root giving negative concentration?","reject|accept|double|ignoreUnits",0,"එය භෞතික වශයෙන් අසම්භවයි."]
]),
C(["Le Chatelier මූලධර්මය","Le Chatelier's principle","லு ஷாத்லியே கோட்பாடு"],"2.1.12","110–117",[
["සංවේගයකට ප්‍රතිචාර","සමතුලිත පද්ධතියක සාන්ද්‍රණය, පීඩනය හෝ උෂ්ණත්වය වෙනස් කළ විට එම වෙනසට ප්‍රතිවිරුද්ධ බලපෑමක් ඇති කරවන දිශාවට ශුද්ධ ප්‍රතික්‍රියාව ගමන් කරයි.","perturbation → response","A system shifts in the direction that counteracts an imposed change.","சமநிலை அமைப்பு செய்யப்பட்ட மாற்றத்தை எதிர்க்கும் திசையில் நகரும்."],
["සාන්ද්‍රණ බලපෑම","A ⇌ B හි A එකතු කළ විට සාමාන්‍යයෙන් B නිෂ්පාදනයට වාසිදායකය. එම T හි K වෙනස් නොවේ.","A added → forward shift","Changing composition shifts equilibrium while K at fixed T stays the same.","செறிவு மாற்றம் சமநிலையை நகர்த்தும்; அதே வெப்பநிலையில் K மாறாது."],
["පීඩන බලපෑම","වායු සමතුලිතයක පීඩනය වැඩි කිරීමෙන් අඩු වායු මෝල සංඛ්‍යාවක් ඇති පැත්තට ශුද්ධ වෙනසක් ඇති විය හැකිය. දෙපස Δn = 0 නම් පීඩන බලපෑමක් නොවීමට හැක.","Δn(gas) < 0 favoured on compression","Compression often favours fewer gaseous moles.","அழுத்தம் அதிகரித்தால் குறைவான வாயு மோல்கள் உள்ள திசை ஆதரிக்கப்படும்."],
["තාපය සහ උත්ප්‍රේරක","තාපදායක ඉදිරි ප්‍රතික්‍රියාවකට උෂ්ණත්වය වැඩි කළ විට පසු දිශාවට වාසිදායකය; උත්ප්‍රේරකය සමතුලිත අගය නොව වෙනසට ළඟාවෙන වේගය වෙනස් කරයි.","exothermic forward + heat → reverse","Temperature changes K; a catalyst does not change K or equilibrium composition.","வெப்பநிலை K ஐ மாற்றலாம்; வினையூக்கி சமநிலை அமைப்பை மாற்றாது."]
],[
["N₂+3H₂⇌2NH₃ හි පීඩනය ඉහළ දැමූ විට වාසිදායක පැත්ත?","In ammonia synthesis, which side is favoured by compression?","productsFavoured|reactantsFavoured|bothZero|unchangedAlways",0,"වායු මෝල 4 සිට 2 දක්වා අඩුවේ."],
["උත්ප්‍රේරකයකින් K වෙනස්ද?","Does a catalyst alter K at fixed temperature?","no|yes|alwaysDouble|zero",0,"උත්ප්‍රේරකය සමතුලිතයට ළඟාවීමේ වේගය වෙනස් කරයි."],
["තාපදායක ඉදිරි ප්‍රතික්‍රියාවකට උෂ්ණත්වය ඉහළ දැමූ විට?","For exothermic forward reaction, heating favours which side?","reverse|forward|bothZero|never",0,"තාපය ඵල පැත්තේ ලෙස සලකන්න."],
["ඒකම T දී reactant එකතු කළ විට K?","At unchanged T, adding reactant changes K to?","unchangedK|doubleK|zero|negativeK",0,"K තීරණය කරන්නේ T ය."],
["වායු මෝල දෙපස සමාන නම් compression බලපෑම?","If gas mole numbers are equal, compression generally causes?","noShift|forward|reverse|complete",0,"Δn=0 නම් composition shift නැත."]
]),
C(["අම්ල, භෂ්ම හා සංයුග්මක යුගල","Acids, bases and conjugate pairs","அமிலங்கள், காரங்கள் மற்றும் இணை அமில-கார ஜோடிகள்"],"2.2.1–2.2.2","118–124",[
["Arrhenius සහ Brønsted–Lowry","Brønsted–Lowry අර්ථ දැක්වීමේදී අම්ලයක් H⁺ දායකයෙකු වන අතර භෂ්මයක් H⁺ ප්‍රතිග්‍රාහකයෙකි. Arrhenius ජලීය අර්ථ දැක්වීමෙන් මෙය පුළුල් වේ.","HA + B ⇌ A⁻ + BH⁺","Brønsted acids donate protons and bases accept them.","புரோன்ஸ்டெட் அமிலம் புரோட்டான் வழங்கும்; காரம் ஏற்கும்."],
["සංයුග්මක යුගල","අම්ලයක් H⁺ අහිමි කළ විට එහි සංයුග්මක භෂ්මය ලැබේ. භෂ්මයක් H⁺ ලබාගත් විට සංයුග්මක අම්ලය ලැබේ.","HA/A⁻ ; NH₄⁺/NH₃","A conjugate pair differs by one proton.","இணை அமில-கார ஜோடி ஒரு புரோட்டானால் வேறுபடும்."],
["ජලයේ ද්වියෝජක භාවය","ජලය අම්ලයක් හෝ භෂ්මයක් ලෙස හැසිරිය හැකිය. NH₃ සමඟ ප්‍රතික්‍රියාවේ H₂O H⁺ පරිත්‍යාග කරයි.","NH₃ + H₂O ⇌ NH₄⁺ + OH⁻","Water can act as a proton donor or acceptor.","நீர் சூழ்நிலையைப் பொறுத்து அமிலமாகவும் காரமாகவும் செயல்படும்."],
["Lewis අර්ථ දැක්වීම","Lewis අම්ලයක් ඉලෙක්ට්‍රෝන යුගල ප්‍රතිග්‍රාහකයක්; Lewis භෂ්මයක් ඉලෙක්ට්‍රෝන යුගල දායකයෙකි.","BF₃ ← :NH₃","Lewis acids accept electron pairs; Lewis bases donate them.","லூயிஸ் அமிலம் எலக்ட்ரான் ஜோடியை ஏற்கும்; காரம் வழங்கும்."]
],[
["NH₃ + H₂O ⇌ NH₄⁺+OH⁻ හි NH₃ කුමක්ද?","What role does NH₃ play?","base|acid|oxidant|precipitate",0,"NH₃ ප්‍රෝටෝනයක් ලබාගනී."],
["CH₃COOH හි සංයුග්මක භෂ්මය?","Conjugate base of CH₃COOH?","CH₃COO⁻|CH₃COOH₂⁺|CH₄|CO₂",0,"එක් H⁺ අහිමි වේ."],
["NH₄⁺ හි සංයුග්මක භෂ්මය?","Conjugate base of NH₄⁺?","NH₃|NH₂⁻|NO₃⁻|OH⁻",0,"NH₄⁺→NH₃+H⁺."],
["Lewis අම්ලය යනු?","A Lewis acid is an electron-pair...","electronAccept|electronDonate|protonOnly|neutralOnly",0,"Lewis අම්ලය ඉලෙක්ට්‍රෝන යුගල ප්‍රතිග්‍රාහකයෙකි."],
["H₂O කවර ආකාරයට හැසිරිය හැකිද?","What acid–base role can water play?","bothAcidBase|onlyAcid|onlyBase|neither",0,"ජලය amphiprotic වේ."]
]),
C(["ජලයේ Kw, pH හා pOH","Kw, pH and pOH","நீரின் Kw, pH மற்றும் pOH"],"2.2.3–2.2.5","124–131",[
["ජලයේ ස්වයං අයනීකරණය","ජලයේ අණු දෙකක් අතර ප්‍රෝටෝන හුවමාරුවෙන් H₃O⁺ සහ OH⁻ සෑදේ. 25 °C දී Kw ≈ 1.0×10⁻¹⁴ වේ.","2H₂O ⇌ H₃O⁺ + OH⁻","Water autoionizes; at 25 °C, Kw is approximately 10⁻¹⁴.","நீர் தானாக அயனியாகும்; 25°C இல் Kw சுமார் 10⁻¹⁴."],
["pH අර්ථය","ක්‍රියාකාරීත්ව පදනම සලකා dilute ජලීය ද්‍රාවණ සඳහා pH ≈ −log₁₀[H₃O⁺] ලෙස ගණනය කරයි.","pH ≈ −log₁₀[H₃O⁺]","For dilute aqueous solutions, pH follows negative log hydronium concentration.","நீர்த்த கரைசலில் pH ஹைட்ரோனியம் செறிவின் எதிர் மடக்கை."],
["pOH සහ pKw","pOH = −log[OH⁻]; pH + pOH = pKw. pKw =14 යන්න 25 °C දී පමණක් සාමාන්‍ය අගයකි.","pH + pOH = pKw = 14 at 25°C","The familiar sum of 14 applies at 25 °C; pKw varies with temperature.","pH+pOH=pKw; 25°C இல் pKw சுமார் 14."],
["සාන්ද්‍රණ ගණනය","25 °C දී [H₃O⁺] = 10⁻³ mol dm⁻³ ද්‍රාවණයක pH ≈3 යි. pH ඒකක රහිත ලඝුගණක පරිමාණයකි.","[H₃O⁺] = 10⁻³ ⇒ pH = 3","Calculate pH from concentration and interpret its logarithmic scale.","செறிவிலிருந்து pH ஐ மடக்கை முறையில் கணக்கிடுக."]
],[
["25°C දී Kw ආසන්න අගය?","Approximate Kw at 25°C?","10⁻¹⁴|10⁻⁷|10¹⁴|7",0,"25°C දී Kw ≈ 10⁻¹⁴."],
["[H₃O⁺]=10⁻⁵ නම් pH?","If [H₃O⁺]=10⁻⁵, pH?","5|9|14|−5",0,"pH = −log10⁻⁵ =5."],
["25°C දී pH=9 නම් pOH?","At 25°C, pH=9 means pOH=?","5|9|14|3",0,"pH+pOH=14."],
["25°C දී උදාසීන ද්‍රාවණයක pH?","What is neutral pH at 25°C?","7|0|14|1",0,"[H₃O⁺]=[OH⁻]=10⁻⁷."],
["උෂ්ණත්වය වෙනස් වූ විට pH+pOH නියත 14ද?","Is pH+pOH always exactly 14 at all temperatures?","no|yes|alwaysZero|alwaysDouble",0,"Kw උෂ්ණත්වය අනුව වෙනස් වේ."]
]),
C(["දුබල අම්ල, භෂ්ම, Ka සහ Kb","Weak acids/bases and Ka/Kb","பலவீன அமிலங்கள், காரங்கள் மற்றும் Ka/Kb"],"2.2.6–2.2.8","131–140",[
["දුබල අම්ල විඝටනය","CH₃COOH ජලයේ අර්ධ වශයෙන් අයනීකරණය වේ. ආසන්නව Ka = [H₃O⁺][A⁻]/[HA] ලෙස ලියයි.","HA + H₂O ⇌ H₃O⁺ + A⁻","Weak acids dissociate incompletely and have an ionization constant Ka.","பலவீன அமிலம் முழுமையாகப் பிரியாது; Ka மூலம் சமநிலை விவரிக்கப்படுகிறது."],
["ආසන්න pH ගණනය","ඉතා සුළු විඝටනයක් සඳහා monoprotic weak acid හි [H₃O⁺] ≈ √(Ka C) ලෙස ගත හැකිය. ආසන්නයට සුදුසු බව අවසානයේ පරීක්ෂා කරන්න.","[H₃O⁺] ≈ √(Ka C)","For a weak monoprotic acid, use the square-root approximation when valid.","சிறு அயனியாக்கம் என்றால் [H₃O⁺] ≈ √(Ka C)."],
["දුබල භෂ්ම විඝටනය","NH₃ වැනි දුබල භෂ්මයකදී Kb මඟින් OH⁻ නිපදවීම ගණනය කර pOH සහ පසුව pH සොයාගන්න.","NH₃ + H₂O ⇌ NH₄⁺ + OH⁻","Weak bases are described by Kb and often give pOH before pH.","பலவீன காரத்திற்கு Kb பயன்படும்; முதலில் pOH காணலாம்."],
["සංයුග්මක නියත","සංයුග්මක HA/A⁻ යුගලයක Ka×Kb = Kw වේ. මෙහි Kb අදාළ සංයුග්මක භෂ්මයට අයත් විය යුතුය.","Ka(HA) × Kb(A⁻) = Kw","For a conjugate acid–base pair, KaKb equals Kw.","இணை அமில-கார ஜோடிக்கு KaKb=Kw."]
],[
["HA හි සංයුග්මක A⁻ සඳහා සම්බන්ධය?","Ka(HA) and Kb(A⁻) satisfy?","KaKb=Kw|Ka+Kb=Kw|Ka/Kb=Kw|Ka=Kb",0,"සංයුග්මක යුගල සඳහා ගුණිතය Kw වේ."],
["දුබල අම්ලයක [H⁺] ආසන්නය?","Which weak-acid approximation is commonly used?","√(KaC)|Ka/C|C/Ka|Ka+C",0,"සුළු විඝටනයක් අනුමාන කළ විට."],
["NH₃ සඳහා සමතුලිතතා නියතය?","Which constant describes basic ionization of NH₃?","Kb|Ka(HCl)|Ksp|Kp",0,"NH₃ දුබල භෂ්මයකි."],
["Ka වැඩි වූ විට එකම සාන්ද්‍රණයේ අම්ලය සාමාන්‍යයෙන්?","Larger Ka generally indicates a...?","strongerAcid|weakerAcid|neutralSalt|moreSolid",0,"Ka වැඩි වීම වැඩි විඝටනයක් දක්වයි."],
["දුබල අම්ලයක සාන්ද්‍රණය C දෙගුණ කළ විට [H⁺] ආසන්නව?","If weak-acid C doubles, approximate [H⁺] scales by?","√2|2|4|0.5",0,"[H⁺]≈√(KaC)."]
]),
C(["ලවණ ජලවිච්ඡේදනය හා පොදු අයන ආචරණය","Salt hydrolysis and common-ion effect","உப்பின் நீராற்பகுப்பும் பொதுவான அயன் விளைவும்"],"2.2.9–2.2.10","140–155",[
["ලවණයේ අම්ල-භෂ්ම ස්වභාවය","CH₃COONa ද්‍රාවණය සාමාන්‍යයෙන් භෂ්මික වන්නේ CH₃COO⁻ ජලයෙන් H⁺ ලබාගෙන OH⁻ ලබාදෙන නිසාය. NH₄Cl ද්‍රාවණය ආම්ලිකයි.","CH₃COO⁻ + H₂O ⇌ CH₃COOH + OH⁻","Salt solution pH depends on hydrolysis of the constituent ions.","உப்புக் கரைசலின் pH அயன்களின் நீராற்பகுப்பைப் பொறுத்தது."],
["NH₄⁺ ජලවිච්ඡේදනය","දුබල භෂ්ම NH₃ හි සංයුග්මක අම්ලය වන NH₄⁺ ජලයට H⁺ දායකයෙකු ලෙස ක්‍රියා කරයි.","NH₄⁺ + H₂O ⇌ NH₃ + H₃O⁺","Ammonium ion is an acid and can lower pH.","அமோனியம் அயன் அமிலமாகச் செயல்பட்டு pH ஐக் குறைக்கலாம்."],
["පොදු අයන ආචරණය","CH₃COOH ද්‍රාවණයට CH₃COONa එක් කළ විට CH₃COO⁻ පොදු අයනය වැඩි වී අම්ල විඝටනය සීමා කරයි.","HA ⇌ H⁺+A⁻ ; add A⁻","Adding a common ion suppresses dissociation according to equilibrium.","பொதுவான அயனைச் சேர்த்தால் பிரிதல் குறையலாம்."],
["සංයුක්ත ගණනය","මිශ්‍රණයක මුළු අවසාන පරිමාවෙන් නව සාන්ද්‍රණ ගණනය කර, mass balance හා charge balance අවශ්‍ය විට සලකා බලන්න.","Cfinal = n/Vfinal","Use concentrations after mixing; retain charge and mass balance.","கலந்த பின் கிடைக்கும் மொத்தக் கனஅளவைப் பயன்படுத்தவும்."]
],[
["CH₃COONa(aq) සාමාන්‍යයෙන්?","CH₃COONa(aq) is generally...","basic|acidic|neutral|metallic",0,"CH₃COO⁻ ජලයෙන් H⁺ ලබාගනී."],
["NH₄Cl(aq) සාමාන්‍යයෙන්?","NH₄Cl(aq) is generally...","acidic|basic|neutral|insoluble",0,"NH₄⁺ ප්‍රෝටෝන දායකයෙකි."],
["දුබල අම්ලයට එහි ලවණය එක් කළ විට විඝටනය?","Adding its conjugate salt to a weak acid generally...","suppresses|enhancesAlways|zeroForever|changesKa",0,"පොදු අයන ආචරණයයි."],
["CH₃COOH/CH₃COONa මිශ්‍රණයේ පොදු අයනය?","Common ion in acetic acid/acetate mixture?","CH₃COO⁻|Na⁺ only|H₂O|OH⁻ only",0,"දෙකෙහිම acetate අයනය සම්බන්ධයි."],
["මිශ්‍රණයක් සඳහා සාන්ද්‍රණය ගණනයේ භාවිත වන V?","Which volume is used for mixture concentration?","totalVolume|initialOnly|gasOnly|zero",0,"අවසන් මුළු පරිමාවයි."]
]),
C(["පරිමාමිතික අනුමාපන හා pH වක්‍ර","Volumetric titrations and pH curves","கனஅளவு தரம்பார்த்தலும் pH வளைவுகளும்"],"2.2.11","155–164",[
["අනුමාපන උපාංග","බියුරෙට්ටුව, පයිපෙට්ටුව, කේතුකාකාර ෆ්ලාස්කුව හා සුදුසු දර්ශකයක් භාවිත කර acid–base titration සිදු කරයි. මෙහි විශ්වාසදායක මිනුම හා පුනරාවර්තනය වැදගත් වේ.","n(acid H⁺ equivalents)=n(base OH⁻ equivalents)","Volumetric titration uses accurate burette and pipette measurements.","அமில-கார தரம்பார்த்தலில் பியூரெட், பிப்பெட் பயன்படும்."],
["සමතුලිත හා අවසාන ලක්ෂ්‍ය","Equivalence point යනු stoichiometric equivalence ය. Indicator end point යනු වර්ණ වෙනස පෙනෙන මොහොතයි; ඒවා එකම නොවිය හැකිය.","equivalence point ≠ indicator end point","The equivalence point is stoichiometric; indicator endpoint is observational.","சமவிகிதப் புள்ளியும் நிறமாற்ற முடிவுப் புள்ளியும் வேறுபடலாம்."],
["ප්‍රබල අම්ල–ප්‍රබල භෂ්ම","25°C දී HCl–NaOH අනුමාපනයේ සමතුලිත ලක්ෂ්‍යයේ pH ≈ 7 වේ. T වෙනස් නම් neutral pH 7 යන අගය වෙනස් විය හැකිය.","H⁺ + OH⁻ → H₂O","A strong-acid strong-base equivalence point is near pH 7 at 25°C.","25°C இல் வலிய அமில-கார சமவிகிதப் புள்ளி pH சுமார் 7."],
["දුබල අම්ල–ප්‍රබල භෂ්ම","CH₃COOH–NaOH අනුමාපනයේ equivalence හි acetate hydrolysis නිසා pH > 7 විය හැකිය. Half-equivalence හි pH ≈ pKa යන මූලධර්මය යොදන්න.","half-equivalence: pH = pKa","A weak-acid strong-base titration has basic equivalence pH and pH=pKa at half equivalence.","பலவீன அமில-வலிய கார சமவிகிதப் புள்ளியில் pH 7 ஐ விட அதிகம்."]
],[
["HCl–NaOH equivalence pH (25°C)?","HCl/NaOH equivalence-point pH at 25°C?","7|3|9|14",0,"ප්‍රබල-ප්‍රබල පද්ධතියේ neutral pH=7."],
["CH₃COOH–NaOH equivalence pH?","For CH₃COOH/NaOH, equivalence pH is typically...","above7|below7|exactly7|alwaysZero",0,"Acetate hydrolysis නිසා භෂ්මික වේ."],
["Weak acid titration half-equivalence හි?","At half-equivalence of a weak acid, pH equals...","pKa|pKb|Kw|Ksp",0,"[A⁻]=[HA] නම් Henderson–Hasselbalch."],
["Endpoint සහ equivalence point එකම සංකල්පද?","Are endpoint and equivalence point the same concept?","no|yes|onlySolids|always",0,"වර්ණ වෙනස හා stoichiometric point වෙනස් විය හැකිය."],
["අනුමාපනදී ද්‍රාවණ පරිමාව නිරවද්‍යව මනින උපකරණය?","Which apparatus measures titrant volume accurately?","burette|beaker|thermometer|funnel",0,"බියුරෙට්ටුවෙහි මුල් හා අවසාන කියවීම් භාවිත කරයි."]
]),
C(["බහුප්‍රෝටික අම්ල හා දර්ශක","Polyprotic acids and acid–base indicators","பலபுரோட்டான் அமிலங்களும் குறிகாட்டிகளும்"],"2.2.12–2.2.13","164–167",[
["බහුප්‍රෝටික විඝටනය","H₂CO₃ වැනි ද්විප්‍රෝටික අම්ල අදියර දෙකකින් H⁺ දිය හැකිය; Ka₁ හා Ka₂ වෙනස් අගයන් වේ.","H₂A ⇌ HA⁻ + H⁺ ; HA⁻ ⇌ A²⁻+H⁺","Diprotic acids dissociate stepwise with distinct Ka values.","இருபுரோட்டான் அமிலங்கள் படிப்படியாகப் பிரிகின்றன."],
["Ka අනුපිළිවෙළ","සාමාන්‍යයෙන් පියවරෙන් පියවර H⁺ ඉවත් වීම අපහසු වන නිසා Ka₁ > Ka₂ වේ. මුල් විඝටනය පමණක් භාවිත කිරීමේ සීමාව සලකන්න.","Ka₁ > Ka₂ (commonly)","For many polyprotic acids, successive dissociation constants decrease.","பல அமிலங்களில் தொடர்ச்சியான Ka மதிப்புகள் குறைகின்றன."],
["දර්ශකයේ වර්ණය","අම්ල–භෂ්ම දර්ශකය දුබල අම්ල/භෂ්ම සමතුලිතතාවයකි. pH වෙනස් වීමෙන් HIn සහ In⁻ අනුපාතය වෙනස් වී වර්ණ වෙනස පෙනේ.","HIn ⇌ H⁺ + In⁻","Indicator color depends on the ratio of its acid and base forms.","குறிகாட்டியின் நிறம் அமில-கார வடிவங்களின் விகிதத்தைச் சாரும்."],
["නිවැරදි දර්ශක තේරීම","අනුමාපන වක්‍රයේ වේගවත් pH වෙනස ඇති කොටසට දර්ශක වර්ණ-පරිවර්තන පරාසය ගැළපෙන ලෙස තෝරන්න.","indicator range within steep pH region","Select an indicator whose transition interval lies in the steep titration region.","தரம்பார்த்தல் வளைவின் திடீர் pH மாற்றத்தில் குறிகாட்டி நிறம் மாற வேண்டும்."]
],[
["H₂CO₃ සඳහා ප්‍රධාන විඝටන අදියර ගණන?","How many main dissociation steps for H₂CO₃?","2|1|3|4",0,"H₂CO₃ ද්විප්‍රෝටික අම්ලයකි."],
["සාමාන්‍යයෙන් Ka₁ සහ Ka₂?","For most diprotic acids, which relation holds?","Ka₁>Ka₂|Ka₁<Ka₂|Ka₁=0|Ka₂=0",0,"පළමු විඝටනය පහසුයි."],
["Acid–base indicator සමතුලිතය?","Typical acid-base indicator equilibrium?","HIn⇌H⁺+In⁻|HIn→H₂|NaCl→Na|H₂O→O₂",0,"Indicator වර්ණ ආකාර දෙක සලකයි."],
["දර්ශකය තෝරාගන්නේ කුමකට අනුවද?","Indicator selection depends chiefly on...?","steepRegion|flaskColor|buretteLength|massOnly",0,"වර්ණ පරාසය titration jump සමඟ ගැළපිය යුතුය."],
["දර්ශක වර්ණ වෙනසට බලපාන ප්‍රධාන ගුණය?","Indicator color is primarily controlled by...?","pH|pressureOnly|massOnly|volumeOnly",0,"HIn/In⁻ අනුපාතය pH මත රඳා පවතී."]
]),
C(["ස්වාරක්ෂක ද්‍රාවණ","Buffer solutions","தாங்கல் கரைசல்கள்"],"2.3","168–174",[
["ස්වාරක්ෂකයේ අර්ථය","කුඩා අම්ලයක් හෝ භෂ්මයක් එක් කළ විට pH විශාල ලෙස වෙනස් වීම වළක්වන ද්‍රාවණයක් ස්වාරක්ෂකයකි. එයට සීමිත buffer capacity එකක් ඇත.","weak HA + A⁻","A buffer resists modest pH changes on added acid or base.","சிறிய அமிலம்/காரம் சேர்ப்பினும் pH மாற்றத்தைத் தணிப்பது தாங்கல் கரைசல்."],
["ආම්ලික ස්වාරක්ෂකය","දුබල අම්ලයක් හා එහි සංයුග්මක භෂ්මය (ලවණය) එකට තැබීමෙන් acidic buffer සෑදේ. CH₃COOH/CH₃COO⁻ උදාහරණයකි.","CH₃COOH / CH₃COO⁻","Weak acid plus conjugate base forms an acidic buffer.","பலவீன அமிலமும் இணை காரமும் அமிலத் தாங்கலை உருவாக்கும்."],
["Henderson–Hasselbalch","නිරූපණය සඳහා pH ≈ pKa + log([A⁻]/[HA]) යොදන්න. ද්‍රාවණය තනුක/අදාළ කොන්දේසි යටතේ ආසන්න බව සලකා බලන්න.","pH ≈ pKa + log([A⁻]/[HA])","Buffer pH depends on the conjugate base to weak acid ratio.","தாங்கலின் pH இணை காரம்/அமில விகிதத்தைச் சாரும்."],
["ස්වාරක්ෂක ධාරිතාව","එකම pH තිබුණත් සමස්ත ද්‍රව්‍ය ප්‍රමාණය වැඩි ස්වාරක්ෂකයක pH වෙනසට ප්‍රතිරෝධය වැඩිය. අම්ල/භෂ්ම අධික ප්‍රමාණයක් එක් කළහොත් pH වෙනස් වේ.","capacity depends on total buffer concentration","Buffer capacity is finite and depends on total buffer amount.","தாங்கல் திறன் வரையறுக்கப்பட்டது; மொத்த செறிவைப் பொறுத்தது."]
],[
["CH₃COOH/CH₃COONa යනු?","CH₃COOH/CH₃COONa is a...?","buffer|strongAcidOnly|precipitate|idealGas",0,"දුබල අම්ලය සහ එහි ලවණය."],
["[A⁻]=[HA] නම් pH?","For equal conjugate base and acid, pH approximately equals...?","pKa|pKb|14|Ksp",0,"log1=0."],
["Buffer එකක pH වෙනස්වීම සම්පූර්ණයෙන්ම නවත්වයිද?","Does a buffer prevent all pH changes under unlimited additions?","no|yes|infinite|alwaysZero",0,"Buffer capacity සීමිතයි."],
["Henderson-Hasselbalch සූත්‍රය?","Select the buffer formula.","pH=pKa+log([A⁻]/[HA])|pH=pKa×[HA]|pH=Ksp+[A⁻]|pH=pKb−[OH⁻]",0,"සංයුග්මක භෂ්මය/අම්ලය අනුපාතයයි."],
["ආම්ලික buffer එකක අවශ්‍ය මූලික යුගලය?","What pair composes a typical acidic buffer?","weakAcidBase|strongAcidBase|onlyWater|metalAndSalt",0,"දුබල අම්ලය හා සංයුග්මක භෂ්මයයි."]
]),
C(["ද්‍රාව්‍යතා සමතුලිත හා Ksp","Solubility equilibria and Ksp","கரைதிறன் சமநிலையும் Ksp மாறிலியும்"],"2.4.1–2.4.3","175–183",[
["සන්තෘප්ත ද්‍රාවණය","ස්වල්ප ද්‍රාව්‍ය අයනික ඝනයක් ජලයේ සන්තෘප්ත වීමේදී දියවීම හා අවක්ෂේප වීම ගතික සමතුලිත වේ.","AgCl(s) ⇌ Ag⁺ + Cl⁻","In a saturated solution dissolution and precipitation can balance.","நிறைவுற்ற கரைசலில் கரைதலும் வீழ்படிவும் சமநிலையில் உள்ளன."],
["ද්‍රාව්‍යතා ගුණිතය","AgCl සඳහා Ksp=[Ag⁺][Cl⁻]; CaF₂ සඳහා Ksp=[Ca²⁺][F⁻]². ශුද්ධ ඝනය Ksp හි නොයෙදේ.","Ksp(CaF₂)=[Ca²⁺][F⁻]²","Write Ksp from ions with their stoichiometric powers.","கரையும் அயன்களின் செறிவுகளை உரிய அடுக்குகளுடன் எழுதுக."],
["මෝලීය ද්‍රාව්‍යතාව","AgCl සරල පිරිසිදු ජලයක මෝලීය ද්‍රාව්‍යතාව s නම් [Ag⁺]=[Cl⁻]=s; Ksp=s². CaF₂ සඳහා Ksp=4s³.","Ksp(AgCl)=s² ; Ksp(CaF₂)=4s³","Express ion concentrations in terms of molar solubility s.","மோலார் கரைதிறன் s மூலம் அயன் செறிவை வெளிப்படுத்துக."],
["අයනික සහ අණුක ද්‍රාව්‍යතා","සියලු ද්‍රව්‍යවල ද්‍රාව්‍යතාව Ksp මඟින් විස්තර නොකෙරේ; එය විශේෂයෙන් ස්වල්ප ද්‍රාව්‍ය අයනික ඝන සඳහා වැදගත්ය.","Ksp: sparingly soluble ionic solid","Ksp is mainly used for sparingly soluble ionic solids.","Ksp மிகக் குறைவாக கரையும் அயனிப் பொருட்களுக்கு பொருந்தும்."]
],[
["AgCl සඳහා Ksp?","Ksp expression for AgCl?","[Ag⁺][Cl⁻]|[AgCl]|[Ag⁺]/[Cl⁻]|[Ag⁺]²",0,"1:1 විඝටනය."],
["CaF₂ සඳහා Ksp?","Ksp expression for CaF₂?","[Ca²⁺][F⁻]²|[Ca²⁺][F⁻]|[Ca²⁺]²[F⁻]|[CaF₂]",0,"F⁻ දෙකක් නිපදවයි."],
["AgCl පිරිසිදු ජලයේ s ද්‍රාව්‍යතාව නම් Ksp?","If AgCl solubility is s, Ksp=?","s²|s|4s³|2s",0,"[Ag⁺]=[Cl⁻]=s."],
["CaF₂ සඳහා Ksp සහ s සම්බන්ධය?","For CaF₂, how does Ksp depend on s?","4s³|s²|s³|2s",0,"[Ca²⁺]=s,[F⁻]=2s ⇒4s³."],
["Ksp හි ඝන ලවණ සාන්ද්‍රණය ඇතුළත්ද?","Does pure solid appear in Ksp?","no|yes|alwaysDouble|infinite",0,"ශුද්ධ ඝන අයන ක්‍රියාකාරීත්වය නියතයි."]
]),
C(["අයනික ගුණිතය, අවක්ෂේප හා පොදු අයනය","Ionic product, precipitation and common ions","அயனிப் பெருக்கல், வீழ்படிவு மற்றும் பொதுவான அயன்"],"2.4.4–2.4.5","183–191",[
["Qsp සහ Ksp","මිශ්‍රණයේ වත්මන් අයන සාන්ද්‍රණවලින් Qsp ගණනය කර Ksp සමඟ සසඳන්න. Qsp>Ksp නම් අවක්ෂේපය සෑදීම තාපගතිකව වාසිදායක වේ.","Qsp > Ksp → precipitate","Compare the ion product Qsp with Ksp to predict precipitation.","Qsp>Ksp என்றால் வீழ்படிவு உருவாகுவது சாதகமானது."],
["පරිමාවෙන් පසු සාන්ද්‍රණ","ලවණ ද්‍රාවණ දෙකක් මිශ්‍ර කළ පසු Qsp ගණනයට එක් එක් අයනයේ අවසාන මුළු පරිමාව අනුව තනුක වූ සාන්ද්‍රණ භාවිත කරන්න.","[ion]mixed = nion/Vtotal","Use concentrations after dilution from mixing.","கலந்த பிறகு மொத்தக் கனஅளவினால் செறிவைக் கணக்கிடுக."],
["පොදු අයන බලපෑම","AgCl සන්තෘප්ත ද්‍රාවණයකට Cl⁻ අයන එක් කළ විට AgCl හි මෝලීය ද්‍රාව්‍යතාව බොහෝවිට අඩුවේ.","AgCl(s) ⇌ Ag⁺ + Cl⁻","A common ion often suppresses the solubility of a sparingly soluble salt.","பொதுவான அயன் கரைதிறனைப் பொதுவாகக் குறைக்கும்."],
["වෙනත් බලපෑම්","සංකීර්ණ අයන සෑදීම, ආම්ලිකතාව සහ උෂ්ණත්වය නිසා සරල පොදු අයන අපේක්ෂාව වෙනස් විය හැකිය.","Ag⁺ + 2NH₃ ⇌ [Ag(NH₃)₂]⁺","Complexation can increase apparent solubility.","சிக்கலாயன் உருவாதல் கரைதிறனை மாற்றலாம்."]
],[
["Qsp>Ksp නම්?","If Qsp>Ksp, what is predicted?","precipitate|undersaturated|atEquilibrium|idealGas",0,"අතිසන්තෘප්ත ස්වභාවය නිසා ඝනයක් සෑදිය හැකිය."],
["Qsp<Ksp නම්?","If Qsp<Ksp, the solution is...?","undersaturated|precipitate|exactlySaturated|alwaysZero",0,"තවත් ඝනයක් දියවිය හැකිය."],
["AgCl ද්‍රාවණයට Cl⁻ එක් කළ විට සාමාන්‍යයෙන් s?","Adding Cl⁻ to saturated AgCl usually causes s to...?","decrease|increaseAlways|unchangedAlways|infinite",0,"පොදු අයන බලපෑමයි."],
["මිශ්‍රණයක Qsp සඳහා සාන්ද්‍රණ භාවිත කරන්නේ?","Which concentrations should be used after mixing?","mixedConcentrations|originalBeforeMix|solidOnly|randomValues",0,"අවසන් මුළු පරිමාව සලකා බලන්න."],
["Ag⁺ සමඟ NH₃ සංකීර්ණ අයනය?","Which complex can form from Ag⁺ and NH₃?","[Ag(NH₃)₂]⁺|[AgCl₂]²⁻|[AgF₄]³⁻|[Ag(H₂O)]⁰",0,"Diammine silver complex නිසා apparent solubility වෙනස් වේ."]
]),
C(["pH මඟින් ද්‍රාව්‍යතාව හා තෝරාගත් අවක්ෂේපණය","pH effects and selective precipitation","pH விளைவும் தேர்ந்தெடுத்த வீழ்படிவும்"],"2.4.6–2.4.7","191–198",[
["හයිඩ්‍රොක්සයිඩ අවක්ෂේප","M(OH)₂ හි Qsp=[M²⁺][OH⁻]² වේ. pH වැඩිවන විට [OH⁻] වැඩිවී ඝන හයිඩ්‍රොක්සයිඩ සෑදීම සිදුවිය හැකිය.","M(OH)₂(s) ⇌ M²⁺ + 2OH⁻","Metal hydroxide precipitation depends strongly on hydroxide concentration.","உலோக ஹைட்ராக்சைடு வீழ்படிவு OH⁻ செறிவைப் பொறுத்தது."],
["pH සහ OH⁻","25°C දී pOH=14−pH; [OH⁻]=10⁻ᵖᴼᴴ යොදා දෙන ලද ලෝහ අයනය සඳහා Qsp සොයාගන්න.","[OH⁻]≈10⁻⁽¹⁴⁻ᵖᴴ⁾ at 25°C","Convert pH to hydroxide concentration before computing Qsp.","25°C இல் pOH=14−pH மூலம் OH⁻ ஐக் கணக்கிடுக."],
["තෝරාගත් අවක්ෂේපණය","Ksp වෙනස් ලෝහ අයන දෙකක් අඩංගු ද්‍රාවණයක pH පාලනය කිරීමෙන් එකක් කලින් අවක්ෂේප කර වෙනත් අයනය ද්‍රාවණයේ තබාගත හැකිය.","critical [OH⁻]=√(Ksp/[M²⁺])","Choose pH windows that precipitate one cation before another.","pH ஐக் கட்டுப்படுத்தி ஒரு உலோக அயனைத் தேர்ந்து வீழ்படிவாக்கலாம்."],
["ප්‍රමාණාත්මක හා ගුණාත්මක","අවක්ෂේපය සෑදෙන පළමු අවස්ථාව හා සම්පූර්ණ අවක්ෂේපණයට අවශ්‍ය තත්ත්ව වෙනස් විය හැකිය. විශ්ලේෂණයේදී එය ගණනයෙන් තහවුරු කරන්න.","Qsp ≥ Ksp onset","Precipitation onset and near-complete separation are different conditions.","வீழ்படிவு தொடக்கமும் கிட்டத்தட்ட முழுமையான பிரிப்பும் வேறு."]
],[
["M(OH)₂ සඳහා Qsp?","Ion product for M(OH)₂?","[M²⁺][OH⁻]²|[M²⁺][OH⁻]|[M²⁺]²[OH⁻]|[M(OH)₂]",0,"OH⁻ සංගුණකය 2 යි."],
["25°C දී pH=10 නම් pOH?","At 25°C, if pH=10, pOH=?","4|10|14|7",0,"pH+pOH=14."],
["pH ඉහළ දැමූ විට [OH⁻]?","As pH increases at 25°C, [OH⁻] generally...?","increase|decrease|alwaysZero|unchangedAlways",0,"pOH අඩුවීම නිසා."],
["තෝරාගත් අවක්ෂේපණය සදහා පාලනය කළ හැක්කේ?","What can be controlled to achieve selective hydroxide precipitation?","pH|temperatureOnly|timeOnly|massOnly",0,"OH⁻ අගය pH මඟින් පාලනය වේ."],
["Qsp=Ksp යනු?","When Qsp=Ksp, the ionic system is...?","atEquilibrium|undersaturated|alwaysDry|idealGas",0,"සන්තෘප්ත සමතුලිතයයි."]
]),
C(["ද්‍රව–වාෂ්ප ගතික සමතුලිත","Liquid–vapour dynamic equilibrium","திரவ-ஆவி இயக்கச் சமநிலை"],"2.5.1–2.5.2","199–204",[
["සංවෘත බඳුනේ වාෂ්ප","සංවෘත බඳුනක ද්‍රවයෙහි අණු වාෂ්ප බවට පත්වන අතර වාෂ්ප අණු නැවත ඝනීභවනය වේ. සමතුලිතයේදී වේග සමාන වේ.","liquid ⇌ vapour","Evaporation and condensation balance in a closed vessel.","மூடிய பாத்திரத்தில் ஆவியாதலும் திரவமாதலும் சமநிலையை அடையும்."],
["සන්තෘප්ත වාෂ්ප පීඩනය","දෙන ලද උෂ්ණත්වයකදී සමතුලිත වාෂ්පයෙන් ඇතිවන පීඩනය සන්තෘප්ත වාෂ්ප පීඩනයයි; එය තාපය හා ද්‍රව්‍යයේ ස්වභාවය මත රඳා පවතී.","p = p* at vapour–liquid equilibrium","Saturated vapour pressure depends primarily on temperature and substance.","நிறைவுற்ற ஆவி அழுத்தம் வெப்பநிலையும் பொருளின் இயல்பும் சார்ந்தது."],
["පීඩන මැනීම","සුදුසු manometer හෝ පීඩන සංවේදකයකින් සමතුලිත පීඩනය මැනිය හැකිය. ආරම්භක වායු තිබේ නම් ඒවායේ අර්ධ පීඩනය වෙන්කර සලකා බලන්න.","Ptotal = Pvapour + Pother gases","Measure equilibrium vapour pressure with a suitable pressure device.","மனோமீட்டர் மூலம் சமநிலை ஆவி அழுத்தத்தை அளக்கலாம்."],
["පරිමාව වෙනස් කිරීම","සන්තෘප්ත සමතුලිතයේ ද්‍රවය තවම පවතින තාක්, එකම T දී බඳුනේ ඉඩ ප්‍රමාණය වෙනස් කිරීමෙන් පීඩනයේ ස්ථිර අගය බොහෝවිට නැවත ලැබේ.","p*(T) independent of headspace if liquid remains","At fixed temperature the saturated vapour pressure is maintained while liquid remains.","திரவம் மீதமிருக்கும் வரை நிலையான T இல் நிறைவுற்ற அழுத்தம் நிலையாகும்."]
],[
["සන්තෘප්ත වාෂ්ප පීඩනයට ප්‍රධාන බලපෑම?","Primary factor affecting saturated vapour pressure?","temperature|liquidVolumeOnly|containerColor|stirringOnly",0,"උෂ්ණත්වය ප්‍රධාන සාධකයකි."],
["සමතුලිතයේ වාෂ්පීභවනය හා ඝනීභවනයේ වේග?","Rates of evaporation and condensation at equilibrium?","equalRate|bothZero|forwardFaster|reverseFaster",0,"ගතික වේග දෙක සමාන වේ."],
["නියත T දී ද්‍රවය තවම ඇතිනම් saturated p?","At fixed T with liquid present, saturated vapour pressure is generally...?","unchangedK|alwaysZero|infinite|negativeK",0,"සන්තෘප්ත පීඩනය T මත රඳා පවතී."],
["වාෂ්ප පීඩනය මනින උපකරණයක්?","A suitable device to measure vapour pressure?","manometer|burette|pipette|thermometer",0,"Manometer පීඩනය මනියි."],
["Ptotal සඳහා Dalton සම්බන්ධතාව?","Which relation is valid for ideal gas mixture pressure?","Σpᵢ|Πpᵢ|ΣVᵢ|Ksp",0,"මුළු පීඩනය අර්ධ පීඩන එකතුවයි."]
]),
C(["වාෂ්ප පීඩනය, තාපාංකය හා ΔHvap","Vapour pressure, boiling and vaporization enthalpy","ஆவி அழுத்தம், கொதிநிலை மற்றும் ஆவியாதல் என்தால்பி"],"2.5.3–2.5.5","204–211",[
["උෂ්ණත්වය හා වාෂ්ප පීඩනය","උෂ්ණත්වය වැඩිවන විට සමතුලිත වාෂ්ප පීඩනය වැඩිවේ. එම සම්බන්ධතාව රේඛීය නොවන අතර ln p හා 1/T අතර ආසන්න සම්බන්ධයක් ගත හැකිය.","ln p ≈ −ΔHvap/(RT)+C","Vapour pressure generally increases with temperature.","வெப்பநிலை உயரும்போது ஆவி அழுத்தம் அதிகரிக்கிறது."],
["තාපාංකය","ද්‍රවයේ සන්තෘප්ත වාෂ්ප පීඩනය බාහිර පීඩනයට සමාන වූ විට තාපාංකය ලැබේ. බාහිර පීඩනය අඩු නම් තාපාංකය පහළ විය හැකිය.","p*(Tb) = Pexternal","Boiling occurs when equilibrium vapour pressure equals external pressure.","நிறைவுற்ற ஆவி அழுத்தம் வெளி அழுத்தத்திற்குச் சமமானபோது கொதிக்கும்."],
["වාෂ්පීභවන එන්තැල්පිය","ΔHvap ද්‍රවය වාෂ්ප බවට පත්කිරීම සඳහා අවශ්‍ය එන්තැල්පි වෙනසයි. ආසන්න පරාසයක Clausius–Clapeyron සම්බන්ධතාව යොදන්න.","ln(p₂/p₁)=−(ΔHvap/R)(1/T₂−1/T₁)","Clausius–Clapeyron relates vapour pressures at two temperatures.","கிளாசியஸ்–கிளாபிரான் சமன்பாடு இரண்டு வெப்பநிலைகளின் ஆவி அழுத்தங்களை இணைக்கிறது."],
["උෂ්ණත්ව ඒකක","වාෂ්ප පීඩන ගණනයේදී T කෙල්වින් වලින් සහ R, ΔHvap එකම ශක්ති ඒකක පද්ධතියකින් යොදන්න.","T in K, ΔHvap in J mol⁻¹","Use Kelvin and consistent energy units in logarithmic calculations.","கணக்கீடுகளில் கெல்வின் மற்றும் ஒரே ஆற்றல் அலகுகளைப் பயன்படுத்தவும்."]
],[
["ද්‍රවය උතුරන තත්ත්වය?","Condition for boiling?","p*=Pexternal|p*=0|Pexternal=0|Kp=Kc",0,"වාෂ්ප පීඩනය බාහිර පීඩනයට සමාන වේ."],
["බාහිර පීඩනය අඩුවූ විට සාමාන්‍ය තාපාංකය?","Lower external pressure generally makes boiling point...?","decrease|increase|unchangedAlways|infinite",0,"අඩු saturated pressure අගයක් අවශ්‍යයි."],
["T වැඩිවූ විට saturated vapour pressure?","When temperature increases, saturated vapour pressure normally...?","increase|decrease|alwaysZero|unchangedAlways",0,"වැඩි අණු වාෂ්ප වීම නිසා."],
["Clausius–Clapeyron හි භාවිත කළ යුතු T ඒකකය?","Temperature unit for Clausius-Clapeyron?","K|°C|s|mol",0,"නිරපේක්ෂ Kelvin භාවිත වේ."],
["ΔHvap සඳහා පොදු ඒකකය?","Common unit for molar enthalpy of vaporization?","kJ mol⁻¹|mol dm⁻³|s⁻¹|kPa s",0,"මෝලයකට එන්තැල්පි වෙනසයි."]
]),
C(["පදාර්ථ අවස්ථා රූපසටහන්","Phase diagrams of pure substances","தூய பொருட்களின் நிலை வரைபடங்கள்"],"2.5.6","211–217",[
["P–T අවස්ථා සටහන","පීඩනය සහ උෂ්ණත්වය අනුව ඝන, ද්‍රව සහ වායු අවස්ථා ස්ථායීව පවතින ප්‍රදේශ අවස්ථා සටහනක දැක්වේ.","solid | liquid | gas regions","A phase diagram maps stable phases in pressure–temperature space.","அழுத்தம்-வெப்பநிலை வரைபடம் நிலையான பொருள் நிலைகளை காட்டும்."],
["ත්‍රිත්ව ලක්ෂ්‍යය","ඝන, ද්‍රව හා වායු ත්‍රිත්වය එකවර සමතුලිතව පවතින උෂ්ණත්ව-පීඩන ලක්ෂ්‍යය ත්‍රිත්ව ලක්ෂ්‍යයයි.","solid ⇌ liquid ⇌ vapour","At the triple point, all three phases coexist at equilibrium.","மும்மை புள்ளியில் திண்மம், திரவம், வாயு மூன்றும் சமநிலையில் இருக்கும்."],
["විවේචනාත්මක ලක්ෂ්‍යය","දියර–වායු අවස්ථා සීමාව අවසන් වන ලක්ෂ්‍යය විවේචනාත්මක ලක්ෂ්‍යයයි. එයට ඉහළ තත්ත්වවල ද්‍රව/වායු වෙන්කරන සීමාව නොපවතී.","critical point (Tc,Pc)","The liquid–vapour coexistence curve terminates at the critical point.","திரவ-வாயு எல்லை முக்கிய புள்ளியில் முடிவடைகிறது."],
["උත්ශ්‍රේණනය","ඝන ද්‍රව්‍යයක් ද්‍රව බවට නොගොස් වායුවට පත්වීම උත්ශ්‍රේණනයයි; dry ice වැනි අවස්ථා රූපයෙන් එය විස්තර කළ හැකිය.","solid → gas (sublimation)","Sublimation is a direct solid-to-gas transition.","உருகாமல் திண்மத்திலிருந்து வாயுவாக மாறுவது பதங்கமாதல்."]
],[
["ත්‍රිත්ව ලක්ෂ්‍යයේ සමතුලිත අවස්ථා ගණන?","How many phases coexist at the triple point?","3|2|1|4",0,"ඝන, ද්‍රව හා වායු තුනම."],
["Liquid-vapour සීමාව අවසන් වන්නේ?","Where does liquid-vapour coexistence line terminate?","criticalPoint|triplePoint|freezingPoint|originAlways",0,"Critical point යි."],
["ඝන→වායු සෘජුව සිදුවීම?","Direct solid-to-gas transition is...?","sublimation|condensation|melting|freezing",0,"උත්ශ්‍රේණනය."],
["Phase diagram අක්ෂ සාමාන්‍යයෙන්?","Typical phase diagram axes are...?","P and T|pH and time|mass and density|Kc and Kp",0,"Pressure-temperature සටහනයි."],
["Dry ice සාමාන්‍ය පීඩනයේදී?","At ordinary pressure dry ice generally...?","sublimates|boilsAsLiquid|meltsAsLiquid|oxidizes",0,"CO₂ හි ද්‍රව අවස්ථාව එම පීඩනයේ ස්ථායී නොවේ."]
]),
C(["පරිපූර්ණ මිශ්‍රණ හා Raoult නියමය","Ideal liquid mixtures and Raoult's law","சீரிய திரவக் கலவைகளும் ராவுல்ட் விதியும்"],"2.6.1","217–223",[
["ද්විද්‍රව මිශ්‍රණය","ඉතා ළඟින් පවතින අන්තර්අණුක බල ඇති A,B ද්‍රව දෙකක් පරිපූර්ණ මිශ්‍රණයකට ආසන්න හැසිරීමක් දක්වයි. එක් එක් සංඝටකයේ වාෂ්ප පීඩනය සංයුතිය මත රඳා පවතී.","A(l)+B(l) ⇌ A(g)+B(g)","An ideal mixture obeys Raoult's law over its composition range.","சீரிய திரவக் கலவை ராவுல்ட் விதியைப் பின்பற்றும்."],
["Raoult නියමය","පරිපූර්ණ මිශ්‍රණයක A හි අර්ධ වාෂ්ප පීඩනය xA×p*A වේ. xA යනු ද්‍රව අවස්ථාවේ A හි මෝල භාගයයි.","pA = xA p*A","Each component's partial pressure equals mole fraction times pure vapour pressure.","ஒவ்வொரு பகுதி அழுத்தமும் மோல் பங்கு × தூய ஆவி அழுத்தம்."],
["මුළු පීඩනය","ද්විද්‍රව පද්ධතියක මුළු වාෂ්ප පීඩනය pA+pB වේ. xA+xB=1 යොදා ptotal හා සංයුතිය සම්බන්ධ කරගන්න.","P = xA p*A + (1−xA)p*B","Total vapour pressure is the sum of ideal partial pressures.","மொத்த ஆவி அழுத்தம் இரு பகுதி அழுத்தங்களின் கூட்டுத்தொகை."],
["වාෂ්ප සංයුතිය","වාෂ්පයේ මෝල භාගය yA = pA/Ptotal වේ. වැඩි වාෂ්පශීලී සංඝටකය වාෂ්ප අවස්ථාවේ සාපේක්ෂව වැඩි විය හැකිය.","yA = pA/Ptotal","Vapour composition usually differs from liquid composition.","ஆவி மோல் பங்கு பொதுவாக திரவ மோல் பங்கிலிருந்து வேறுபடும்."]
],[
["Raoult නියමය අනුව pA?","According to Raoult's law, pA=?","xA p*A|p*A/xA|xA+p*A|xA/p*A",0,"ද්‍රව මෝල භාගය × ශුද්ධ වාෂ්ප පීඩනය."],
["ද්විද්‍රව මිශ්‍රණයක xA+xB?","For a binary liquid mixture, xA+xB=?","1|2|0|100",0,"මෝල භාග එකතුව 1යි."],
["වාෂ්පයේ yA?","Vapour mole fraction yA is...?","pA/Ptotal|xA/Ptotal|Ptotal/pA|p*A/xA",0,"අර්ධ පීඩනය ÷ මුළු පීඩනය."],
["පරිපූර්ණ මිශ්‍රණයක Ptotal?","Total pressure of ideal binary solution?","xA p*A + xB p*B|p*A p*B|xA+xB|p*A−p*B",0,"Dalton සහ Raoult එකතු කිරීමයි."],
["A වඩා වාෂ්පශීලී නම් එහි vapour mole fraction සාමාන්‍යයෙන්?","More volatile component tends to be enriched in...?","vapour|pureSolid|precipitate|salt",0,"වැඩි vapour pressure නිසා."],
]),
C(["අමිශ්‍ර ද්‍රව පද්ධති හා වාෂ්ප ආසවනය","Immiscible liquids and steam distillation","கலக்காத திரவங்களும் நீராவி வடிகட்டலும்"],"2.6.2","223–228",[
["අමිශ්‍ර ද්‍රව","ද්‍රව දෙකක් එකිනෙකෙහි නොමිශ්‍ර හෝ ඉතා සුළු මිශ්‍ර වන විට ඒවා වෙන වෙනම අවස්ථා ලෙස පවතී. බොහෝවිට එක් එක් ද්‍රවයේ අර්ධ පීඩනය ශුද්ධ ද්‍රව වාෂ්ප පීඩනයට ආසන්නය.","Ptotal ≈ p*A + p*B","For nearly immiscible liquids, partial pressures approach pure-liquid vapour pressures.","கலக்காத திரவங்களில் மொத்த அழுத்தம் தனித்தனி ஆவி அழுத்தங்களின் கூட்டுத்தொகை."],
["අඩු උෂ්ණත්වයක උතුරවීම","අමිශ්‍ර ද්‍රව දෙකේ මුළු වාෂ්ප පීඩනය බාහිර පීඩනයට ළඟාවන විට ඒකාබද්ධ පද්ධතිය එක් එක් ශුද්ධ ද්‍රවයේ තාපාංකයට වඩා පහළ උෂ්ණත්වයක උතුරන්නට පුළුවනි.","p*A(T)+p*B(T)=Pext","Immiscible mixtures can boil below the pure-component boiling points.","இரு ஆவி அழுத்தங்கள் சேர்வதால் குறைந்த வெப்பநிலையில் கொதிக்கலாம்."],
["වාෂ්ප ආසවනය","උෂ්ණයට සංවේදී, ජලයට ඉතා සුළු මිශ්‍ර කාබනික ද්‍රව්‍ය වෙන්කර ගැනීමට steam distillation භාවිත කළ හැකිය. වාෂ්පය ඝනීභවනය කර ස්තර දෙක වෙන්කරයි.","steam → co-distillation → condensation","Steam distillation co-distils a water-insoluble volatile substance.","நீராவி வடிகட்டலில் கலக்காத ஆவிகள் ஒன்றாகச் செல்கின்றன."],
["ආරක්ෂිත යෙදුම","වීඩියෝ හා ඡායාරූප ඉගෙනුම් නිරූපණ පමණි. උණු බඳුන් සහ වාෂ්ප උපකරණ නිසි අධීක්ෂණයකින් තොරව භාවිත නොකළ යුතුය.","laboratory demonstration only","Hot steam and pressurised glassware require proper laboratory supervision.","சூடான நீராவி மற்றும் கண்ணாடி சாதனங்கள் மேற்பார்வை தேவைப்படும்."]
],[
["අමිශ්‍ර ද්‍රව දෙකක Ptotal ආසන්නව?","For two immiscible liquids, total vapour pressure is approximately?","p*A+p*B|p*A×p*B|p*A/p*B|0",0,"වෙන වෙනම වාෂ්ප පීඩන එකතුවයි."],
["Steam distillation සඳහා සුදුසු සංයෝගයක් සාමාන්‍යයෙන්?","Steam distillation is useful for a substance that is...?","waterImmiscible|highlyWaterSoluble|nonvolatile|pureSalt",0,"ජලයෙන් වෙන් වූ වාෂ්පශීලී ද්‍රව්‍යයි."],
["Immiscible liquids එකට උතුරන T සාමාන්‍යයෙන්?","Immiscible co-boiling temperature can be...?","belowBoth|aboveBoth|always100|alwaysZero",0,"අර්ධ පීඩන එකතුව Pext වෙයි."],
["ආසවනයේ වාෂ්පය පසුව?","After steam distillation the vapour is normally...?","condensed|oxidized|frozenOnly|leftUncaptured",0,"කන්ඩෙන්සරයෙහි ඝනීභවනය වේ."],
["Steam distillation හි ආරක්ෂිත ක්‍රියාත්මක කිරීම?","Steam distillation should be carried out with...?","supervision|homeAlone|sealedNoVent|bareHands",0,"උණු වාෂ්ප උපකරණ අනතුරුදායකය."]
]),
C(["විභාජන / ව්‍යාප්ති සංගුණකය","Partition or distribution coefficient","பகிர்வு/வினியோகக் குணகம்"],"2.7","229–232",[
["ද්‍රාවක දෙක අතර බෙදීම","එකිනෙකෙහි නොමිශ්‍ර ද්‍රාවක දෙකකට ද්‍රව්‍ය X එකතු කළ විට එය පද්ධතිය සමතුලිතයට ළඟා වන තුරු අවස්ථා දෙක අතර බෙදී යයි.","X(aq) ⇌ X(org)","A solute partitions between two immiscible solvents.","இரு கலக்காத கரைப்பான்களுக்கு இடையில் கரைபொருள் பகிரப்படுகிறது."],
["විභාජන සංගුණකය","එකම අණුක ස්වභාවයෙන් පවතින ද්‍රව්‍යය සඳහා නියත T දී සංයුති දෙකේ සමතුලිත සාන්ද්‍රණ අනුපාතය KD ලෙස ලියයි. සංඥාව යොදාගන්නා දිශාව පැහැදිලි කරන්න.","KD = [X]org / [X]aq","Define the partition coefficient as an equilibrium concentration ratio.","பகிர்வுக் குணகம் இரு நிலைகளின் சமநிலைச் செறிவு விகிதம்."],
["සංගුණක ගණනය","KD=4 සහ [X]aq=0.10 mol dm⁻³ නම් [X]org=0.40 mol dm⁻³ වේ. එක් එක් අවස්ථාවේ ද්‍රව්‍ය ප්‍රමාණය n=CV මඟින් සොයා mass balance යොදන්න.","KD=4, [X]aq=0.10 ⇒ [X]org=0.40","Use concentration ratios and total material balance.","செறிவு விகிதத்துடன் மொத்தப் பொருள் நிலுவையைக் கணக்கிடுக."],
["නිස්සාරණ යෙදුම","නිසි ද්‍රාවකයක් සහ වෙන්කිරීමේ පුනීලයක් යොදා ද්‍රව්‍යය එක් ස්තරයකින් තවත් ස්තරයකට මාරු කරගත හැකිය. ද්‍රාවක වර්ග, පරිමාව හා pH නිස්සාරණ කාර්යක්ෂමතාවයට බලපායි.","nX,total = CX,aqVaq + CX,orgVorg","Partitioning underpins solvent extraction and separatory funnels.","கரைப்பான் பிரித்தெடுப்பில் பகிர்வு சமநிலை பயன்படும்."]
],[
["KD ප්‍රකාශනය (org/aq ලෙස නිර්වචනය කළ විට)?","For KD defined organic/aqueous, expression?","[X]org/[X]aq|[X]aq/[X]org|[X]org+[X]aq|[X]org×[X]aq",0,"නිර්වචනයේ දක්වා ඇති අනුපිළිවෙළ අනුවයි."],
["KD=3 හා [X]aq=0.2 නම් [X]org?","If KD=3 and aqueous concentration is 0.2, organic concentration?","0.6|0.2|0.067|3.2",0,"3×0.2=0.6."],
["ස්තර දෙක වෙන්කිරීමට භාවිත කරන්නේ?","Apparatus used to separate two liquid layers?","separatoryFunnel|burette|crucible|balance",0,"Separatory funnel යොදයි."],
["විභාජන ගණනය සඳහා වැදගත් ගුණය?","What property matters for distribution calculations?","equilibriumConcentrations|atomicNumber|massOnly|colourOnly",0,"සමතුලිත සාන්ද්‍රණ අනුපාතයයි."],
["ද්‍රව්‍යයේ මුළු ප්‍රමාණය සම්බන්ධයෙන්?","For a closed two-phase partitioning system, total solute amount is...?","conserved|zero|alwaysDouble|unrelated",0,"n_total = C₁V₁+C₂V₂."]
])
];
window.U12_CHAPTERS=C12;
window.U12_VALIDATE=function(){let errors=[];if(C12.length!==22)errors.push("Expected 22 chapters");C12.forEach((c,i)=>{if(c.steps.length!==4)errors.push("Steps in "+i);if(c.qs.length!==5)errors.push("Questions in "+i);c.qs.forEach((q,j)=>{if(q.length!==5||q[2].split("|").length!==4||q[3]<0||q[3]>3)errors.push("Question "+i+"."+j)})});return errors};
})();