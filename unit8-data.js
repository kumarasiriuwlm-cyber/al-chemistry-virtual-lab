/* NIE Grade 12, Unit 08, printed pp.26–53: Hydrocarbons and haloalkanes. */
(function(){
"use strict";
function N(n,ref,pages,intro,steps,quiz){return{name:n,ref,pages,intro,steps:steps.map(s=>({t:[s[0],s[3],s[5]],d:[s[1],s[4],s[6]],eq:s[2]})),qs:quiz.map(q=>q)}}
const C=[
N(["ඇල්කේන, ඇල්කීන, ඇල්කයින ව්‍යුහය","Structure and hybridization","அல்கேன்கள், அல்கீன்கள், அல்கைன்கள்"],"2.1","27–33",
["C–C බන්ධන වර්ග තුනේ σ/π සම්බන්ධතා, මුහුම්කරණය හා ජ්‍යාමිතිය සසඳන්න.","Compare sp³, sp² and sp hybridization and sigma/pi bonds.","sp³, sp², sp மற்றும் σ/π பிணைப்புகளை ஒப்பிடுக."],
[
["ඇල්කේනවල sp³ මුහුම්කරණය","මීතේන්හි C පරමාණුව sp³ මුහුම්කරණයට ලක්ව සමාන σ බන්ධන හතරක් සාදයි. H–C–H බන්ධන කෝණය 109.5° වන අතර ව්‍යුහය චතුස්තලීය වේ.","CH₄ • sp³ • 109.5°","sp³ alkane geometry","Methane is tetrahedral with four σ bonds and 109.5° angles.","sp³ அல்கேன் அமைப்பு","மீத்தேன் நான்முகி; 109.5° மற்றும் நான்கு σ பிணைப்புகள்."],
["ඇල්කීනවල sp² මුහුම්කරණය","එතීන්හි එක් C පරමාණුව sp² මුහුම්කරණයෙන් σ බන්ධන තුනක් සාදයි; ඉතිරි p කාක්ෂික දෙක පැත්තෙන් අතිච්ඡාදනය වී π බන්ධනය සෑදේ. කෝණ ආසන්නයෙන් 120° ය.","CH₂=CH₂ • 1σ + 1π • 120°","sp² alkene geometry","Ethene is planar; C=C comprises one σ and one π bond.","sp² அல்கீன் அமைப்பு","எதீன் தளவடிவம்; C=C இல் ஒரு σ, ஒரு π."],
["ඇල්කයිනවල sp මුහුම්කරණය","එතයින්හි C පරමාණු sp මුහුම් වන අතර එකිනෙකට ලම්භ p කාක්ෂික යුගල දෙකකින් π බන්ධන දෙකක් සෑදේ. ත්‍රිත්ව බන්ධනයේ σ එකක් හා π දෙකක් පවතී; කෝණය 180° වේ.","HC≡CH • 1σ + 2π • 180°","sp alkyne geometry","Ethyne has a linear structure with one σ and two π bonds.","sp அல்கைன் அமைப்பு","எதைன் நேர்கோடு; ஒரு σ, இரண்டு π; 180°."],
["භෞතික ගුණ හා ශාඛා","හයිඩ්‍රොකාබන බොහෝවිට ධ්‍රැවීය නොවන අතර දාම දිග වැඩි වන විට ලන්ඩන් විකිරණ බල වැඩි වී තාපාංකය ඉහළ යයි. එකම සූත්‍රයේ ශාඛා වැඩි වීමෙන් සාමාන්‍යයෙන් තාපාංකය අඩු වේ.","pentane 36°C | 2-methylbutane 28°C","Physical properties","Boiling point generally rises with chain length and falls on branching.","பௌதிக பண்புகள்","சங்கிலி நீளம் அதிகரிக்க கொதிநிலை உயரும்; கிளையால் குறையும்."]
],[
["මීතේන්හි C මුහුම්කරණය කුමක්ද?","Carbon hybridization in methane?","மீத்தேனின் கலப்பினம்?",["sp","sp²","sp³","dsp²"],2,"CH₄ හි sp³ වේ."],
["C=C බන්ධනයේ π බන්ධන ගණන?","How many π bonds in C=C?","C=C இல் π எத்தனை?",["0","1","2","3"],1,"C=C = 1σ + 1π."],
["එතයින් බන්ධන කෝණය?","Bond angle in ethyne?","எத்தைனில் பிணைப்புக் கோணம்?",["90°","109.5°","120°","180°"],3,"sp මුහුම්කරණය රේඛීය වේ."],
["ඇල්කේන සූත්‍රය කුමක්ද?","General formula of acyclic alkanes?","அல்கேன்களின் பொதுவாய்ப்பாடு?",["CₙH₂ₙ₊₂","CₙH₂ₙ","CₙH₂ₙ₋₂","CₙHₙ"],0,"අචක්‍රීය ඇල්කේන CₙH₂ₙ₊₂ වේ."],
["එකම සූත්‍රයේ ශාඛා වැඩිවන විට තාපාංකය?","Branching generally affects boiling point how?","கிளைகள் அதிகரித்தால் கொதிநிலை?",["වැඩි වේ","අඩු වේ","වෙනස් නොවේ","අනන්ත වේ"],1,"ස්පර්ශ පෘෂ්ඨය අඩු වීමෙන් ආකර්ෂණ බල සාමාන්‍යයෙන් අඩු වේ."]
]),
N(["ඇල්කේන හා නිදහස් මුක්තඛණ්ඩ ප්‍රතික්‍රියා","Alkane free-radical substitution","அல்கேன்களின் தனியுறுப்பு பதிலீடு"],"2.2.1","33–35",
["ඇල්කේන ක්ලෝරීනීකරණයේ ආරම්භ, ප්‍රචාරණ හා අවසාන පියවර හඳුනාගන්න.","Trace initiation, propagation and termination in chlorination.","குளோரினேற்றத்தின் தொடக்கம், வளர்ச்சி, முடிவு."],
[
["UV ආලෝකයෙන් ආරම්භය","ඇල්කේනවල C–H බන්ධන සාමාන්‍ය තත්ත්වයේ අඩු ප්‍රතික්‍රියාශීලී වේ. UV ආලෝකයෙන් Cl–Cl සමවිච්ඡේදනය වී ක්ලෝරීන් මුක්තඛණ්ඩ දෙකක් සෑදේ.","Cl₂ —hν→ 2Cl•","Initiation","UV light homolytically cleaves Cl₂ to chlorine radicals.","தொடக்கப் படி","UV ஒளியில் Cl₂ தனியுறுப்புகளாகப் பிரிகிறது."],
["දාම ප්‍රචාරණය I","Cl• මීතේන්හි H පරමාණුවක් ඉවත් කර HCl හා CH₃• සාදයි. ඉන්පසු CH₃• නැවත Cl₂ සමඟ ප්‍රතික්‍රියා කර CH₃Cl හා නව Cl• ලබා දෙයි.","Cl• + CH₄ → HCl + CH₃•","Propagation I","Chlorine radical abstracts H to create a methyl radical.","சங்கிலி வளர்ச்சி I","Cl• மீத்தேனிலிருந்து H நீக்கி CH₃• உருவாக்குகிறது."],
["දාම ප්‍රචාරණය II","අලුතින් Cl• නැවත ප්‍රතික්‍රියාවට ඇතුළු වන නිසා දාම ප්‍රතික්‍රියාව දිගටම සිදුවෙයි. මෙය නිදහස් මුක්තඛණ්ඩ ආදේශ ප්‍රතික්‍රියාවකි.","CH₃• + Cl₂ → CH₃Cl + Cl•","Propagation II","A new chlorine radical sustains the chain reaction.","சங்கிலி வளர்ச்சி II","புதிய Cl• தொடர்ச்சியாகப் பங்கெடுக்கிறது."],
["අවසාන පියවර හා බහුආදේශය","මුක්තඛණ්ඩ දෙකක් එක්ව ස්ථායී අණුවක් සෑදූ විට දාමය නතර වේ. H අඛණ්ඩව ප්‍රතිස්ථාපනය වීමෙන් CH₂Cl₂, CHCl₃ සහ CCl₄ ද ලැබිය හැකිය.","CH₃• + Cl• → CH₃Cl","Termination","Radical recombination ends chains; successive substitution is possible.","முடிவுப் படி","தனியுறுப்புகள் சேர்வதால் வினை நிற்கும்; மேலும் பதிலீடும் நிகழலாம்."]
],[
["Cl₂ සමවිච්ඡේදනයට පොදුවේ අවශ්‍ය වන්නේ?","Typical initiator for alkane chlorination?","Cl₂ பிரியத் தேவையானது?",["UV light","NaOH(aq)","H₂SO₄(aq)","ice"],0,"hν මගින් Cl• සාදයි."],
["Cl₂ —hν→ 2Cl• යනු කුමන පියවරද?","Cl₂ homolysis is which stage?","Cl₂ பிளவு எந்தப் படி?",["termination","initiation","oxidation","hydration"],1,"මුක්තඛණ්ඩ ආරම්භයේ සෑදේ."],
["CH₃• + Cl₂ → CH₃Cl + Cl• යනු?","Identify this radical step.","இந்த தனியுறுப்புப் படி என்ன?",["hydrolysis","termination","propagation","addition"],2,"Cl• නැවත සෑදීමෙන් දාමය පවත්වාගනී."],
["මෙහි ප්‍රතික්‍රියාකාරී අතරමැදි වන්නේ?","Reactive intermediate in alkane chlorination?","வினைத்திறன் இடைநிலை?",["carbocation","carbanion","water","free radical"],3,"CH₃• සහ Cl• මුක්තඛණ්ඩ වේ."],
["මීතේන් බහු ක්ලෝරීනීකරණයේ අවසාන හැකි ඵලය?","Fully chlorinated methane is?","முழுக் குளோரினேற்ற மீத்தேன்?",["CCl₄","CH₄","CH₂Cl₂","CH₃OH"],0,"H හතරම Cl මඟින් ප්‍රතිස්ථාපනය විය හැක."]
]),
N(["ඇල්කීන: HX හා බ්‍රෝමීන් ආකලනය","Alkene addition of HX and bromine","அல்கீன்: HX, Br₂ சேர்க்கை"],"2.2.2.1–2.2.2.2","35–37",
["π බන්ධනය කැඩී නව σ බන්ධන සෑදෙන විද්‍යුත්කාමී ආකලනය අධ්‍යයනය කරන්න.","Understand electrophilic addition and regiochemistry.","எலக்ட்ரோஃபிலிக் சேர்க்கையும் இடத்தேர்வும்."],
[
["π බන්ධන ප්‍රතික්‍රියාශීලීතාව","ඇල්කීනවල π ඉලෙක්ට්‍රෝන වලාකුළ H⁺ වැනි විද්‍යුත්කාමී අංශු ආකර්ෂණය කරයි. ආකලනයෙන් C=C බන්ධනය C–C බන්ධනයක් බවට පත්වී ආදේශක දෙකක් එක් වේ.","CH₂=CH₂ + HBr → CH₃CH₂Br","Alkene electrophilic addition","An electrophile attacks π electrons; the double bond becomes single.","அல்கீன் எலக்ட்ரோஃபிலிக் சேர்க்கை","π இலத்திரன்களைத் தாக்கி இரட்டைப் பிணைப்பு ஒற்றையாகிறது."],
["මාකොව්නිකොව් දිශානතිය","අසමමිතික ඇල්කීනයකට HX එකතු කිරීමේදී වැඩි ස්ථායී කාබොකැටායන අතරමැදිය සාමාන්‍යයෙන් ප්‍රමුඛ වේ. propene + HBr දී ප්‍රධාන ඵලය 2-bromopropane ය.","CH₃CH=CH₂ + HBr → CH₃CHBrCH₃","Markovnikov orientation","HBr addition to propene chiefly gives 2-bromopropane.","மார்க்கோவ்னிகோவ் விதி","propene + HBr இன் பிரதான விளைவு 2-bromopropane."],
["Br₂ වර්ණය අතුරුදහන් වීම","ඇල්කීන Br₂ සමඟ ආකලන ප්‍රතික්‍රියාවකට ලක්ව සාමාන්‍යයෙන් 1,2-dibromo ඵල දෙයි. Br₂ ද්‍රාවණයේ තැඹිලි-දුඹුරු පැහැය නැතිවීම අසංතෘප්ත බව පරීක්ෂා කිරීමට යොදාගත හැකිය.","CH₂=CH₂ + Br₂ → BrCH₂CH₂Br","Bromine test","Alkenes add bromine, decolourizing bromine solution.","புரோமின் சோதனை","Br₂ நிறம் மறைந்து இருபுரோமோ சேர்மம் உருவாகிறது."],
["අතරමැදි ව්‍යුහ හා ඵල","HX ආකලනය බොහෝ අවස්ථාවල කාබොකැටායන අතරමැදියක් හරහා පැහැදිලි කරයි. Br₂ ආකලනයේ චක්‍රීය bromonium අතරමැදියක් වැදගත් විය හැකිය. දෙක එකම යාන්ත්‍රණයක් නොවේ.","HX → carbocation | Br₂ → bromonium","Different addition mechanisms","HX and Br₂ can follow different intermediates.","வேறுபட்ட சேர்க்கை வழிகள்","HX மற்றும் Br₂ வேறுவேறு இடைநிலைகளைப் பின்பற்றலாம்."]
],[
["CH₂=CH₂ + Br₂ හි ඵලය?","Product of ethene plus bromine?","எதீன் + Br₂ விளைவு?",["CH₃CH₃","BrCH₂CH₂Br","CH₃Br","CH₂Br₂"],1,"ද්විබ්‍රෝමෝ ඵලය ලැබේ."],
["propene + HBr ප්‍රධාන ඵලය?","Major product of propene + HBr?","propene + HBr பிரதான விளைவு?",["1-bromopropane","propane","2-bromopropane","propanol"],2,"වඩා ස්ථායී ද්විතීයික කාබොකැටායන හරහා ඵල ලැබේ."],
["Br₂ ද්‍රාවණයේ තැඹිලි වර්ණය නැති කරන සංයෝගය?","Which rapidly decolourizes Br₂?","Br₂ நிறம் மறையச் செய்பது?",["ethene","ethane","methane","neon"],0,"ඇල්කීනවල π බන්ධනය Br₂ ආකලනයට ලක්වේ."],
["ආකලන ප්‍රතික්‍රියාවේ C=C පත්වන්නේ?","After alkene addition, C=C becomes?","சேர்க்கைக்குப் பின் C=C ஆகுவது?",["C≡C","C=C","ionic C","C–C"],3,"π බන්ධනය බිඳී σ බන්ධන එක්වෙයි."],
["HX ආකලනයේ මුල් විද්‍යුත්කාමී අංශුව?","Electrophilic species in HX addition?","HX சேர்க்கையில் எலக்ட்ரோஃபில்?",["Br⁻","H⁺","OH⁻","NH₃"],1,"H⁺ ප්‍රහාරයට π ඉලෙක්ට්‍රෝන යොමු වෙයි."]
]),
N(["ඇල්කීන: ජලය, H₂ හා KMnO₄","Alkene hydration, hydrogenation and oxidation","அல்கீன்: நீர், H₂, KMnO₄"],"2.2.2.3–2.2.2.5","37–39",
["ආකලන ප්‍රතික්‍රියාවල ප්‍රතික්‍රියාකාරක, කොන්දේසි හා වර්ණ වෙනස්කම් සසඳන්න.","Compare hydration, catalytic reduction and permanganate test.","நீரேற்றம், ஐதரசனேற்றம், பெர்மாங்கனேட் சோதனை."],
[
["H₂SO₄ ආකලනය හා ජලවිච්ඡේදනය","සීතල සාන්ද්‍ර H₂SO₄ ඇල්කීනයකට ආකලනය වී ඇල්කයිල් හයිඩ්‍රජන් සල්ෆේට් සෑදිය හැකිය. එය ජලවිච්ඡේදනය කිරීමෙන් අදාළ ඇල්කොහොල් ලබාගත හැකිය.","CH₂=CH₂ → C₂H₅OSO₃H → C₂H₅OH","Acid addition and hydrolysis","Sulfuric acid adds across C=C; hydrolysis yields an alcohol.","அமிலச் சேர்க்கை, நீராற்பகுப்பு","H₂SO₄ சேர்க்கைக்குப் பின் நீராற்பகுப்பில் ஆல்கஹால் கிடைக்கும்."],
["උත්ප්‍රේරිත H₂ ආකලනය","H₂, Ni/Pt/Pd උත්ප්‍රේරක යටතේ C=C බන්ධනයට ආකලනය වී ඇල්කේනය සාදයි. බන්ධනයේ අසංතෘප්ත බව අඩුවේ.","CH₂=CH₂ + H₂ —Ni→ CH₃CH₃","Hydrogenation","Catalytic hydrogen adds across C=C to form an alkane.","ஐதரசனேற்றம்","Ni/Pt/Pd இல் H₂ சேர்ந்து அல்கேன் உருவாகிறது."],
["ශීතල ක්ෂාරීය KMnO₄","තනුක, ශීතල, ක්ෂාරීය KMnO₄ මඟින් ඇල්කීනවලට –OH කාණ්ඩ දෙකක් එක්ව vicinal diol සෑදේ. දම් පැහැය අඩුවී දුඹුරු MnO₂ දැකිය හැකිය.","CH₂=CH₂ + [O] + H₂O → HOCH₂CH₂OH","Permanganate oxidation","Cold dilute alkaline KMnO₄ yields vicinal diols.","குளிர் KMnO₄ ஆக்சியேற்றம்","இரட்டை OH கொண்ட டையோல் உருவாகிறது."],
["තත්ත්ව නිවැරදිව තෝරන්න","H₂/Ni යනු ඔක්සිහරණය; Br₂ එකතු වීම හැලජන ආකලනය; KMnO₄ මඟින් ඔක්සිකරණයයි. ප්‍රශ්නවල උත්ප්‍රේරක, pH හා උෂ්ණත්වය ඉතා වැදගත්ය.","H₂/Ni → alkane | KMnO₄ → diol","Reaction conditions","Identical substrates give different products under different reagents.","வினை நிலைமைகள்","வெவ்வேறு வினைப்பொருட்கள் வெவ்வேறு விளைவுகளைக் கொடுக்கும்."]
],[
["ethene + H₂/Ni → ?","Product of ethene with H₂/Ni?","எதீன் + H₂/Ni?",["ethanol","ethyne","ethane","ethanal"],2,"උත්ප්‍රේරිත හයිඩ්‍රජනීකරණයෙන් ethane."],
["ශීතල ක්ෂාරීය KMnO₄ සමඟ ethene දෙන කාණ්ඩය?","Functional group formed by cold KMnO₄?","குளிர் KMnO₄ மூலம் உருவாகும் குழு?",["diol","alkyne","acid chloride","amine"],0,"vicinal diol ලබාදේ."],
["H₂SO₄ ආකලනයෙන් පසු ජලවිච්ඡේදනයේ ඵලය?","Hydrolysis after H₂SO₄ addition produces?","H₂SO₄ சேர்க்கைக்குப் பின் நீராற்பகுப்பு?",["alkane","alkyne","ketone","alcohol"],3,"ඇල්කොහොල් ලබාගත හැකිය."],
["H₂/Ni ප්‍රතික්‍රියාව කුමක්ද?","H₂/Ni is an example of?","H₂/Ni வினை வகை?",["esterification","hydrogenation","nitration","substitution"],1,"හයිඩ්‍රජනීකරණයයි."],
["තනුක KMnO₄ වර්ණය කුමක්ද?","Colour of aqueous KMnO₄?","KMnO₄ கரைசல் நிறம்?",["yellow","green","purple","colourless"],2,"MnO₄⁻ දම් පැහැතිය."]
]),
N(["ඇල්කයින ආකලනය හා අග්‍රස්ථ ආම්ලිකතාව","Alkyne additions and terminal acidity","அல்கைன் சேர்க்கை மற்றும் இறுதி அமிலத்தன்மை"],"2.2.3–2.2.4","39–41",
["C≡C බන්ධනයේ අනුක්‍රමික ආකලන, ජල ආකලන සහ අග්‍රස්ථ H ගුණ අධ්‍යයනය කරන්න.","Study triple-bond reactions and terminal acetylide formation.","மும்மைப் பிணைப்பின் சேர்க்கை, இறுதி H அமிலத்தன்மை."],
[
["Br₂ අනුක්‍රමික ආකලනය","ඇල්කයිනයකට Br₂ එකතු කළ විට පළමුව dibromoalkene ලැබිය හැකිය; අතිරික්ත Br₂ දී tetrabromoalkane ලැබේ. ආකලන ප්‍රමාණය ගණනය කිරීමට mol අනුපාත වැදගත්ය.","HC≡CH + 2Br₂ → CHBr₂CHBr₂","Sequential bromine addition","An alkyne can add two equivalents of Br₂.","தொடர் புரோமின் சேர்க்கை","அல்கைன் இரண்டு Br₂ சமவிகிதங்களைச் சேர்க்கும்."],
["HX හා H₂ ආකලනය","ඇල්කයිනයකට HX ආකලනය වී vinyl halide සහ අතිරික්ත HX දී geminal dihalide ලැබිය හැකිය. H₂/Ni මගින් සම්පූර්ණයෙන් ඇල්කේන බවට පත්වේ.","HC≡CH + 2H₂ —Ni→ CH₃CH₃","HX and hydrogen addition","HX yields haloalkenes/halides; full H₂ addition gives alkane.","HX மற்றும் H₂ சேர்க்கை","HX சேர்க்கை அலசன் சேர்மம்; H₂ அல்கேன் தரும்."],
["ජල ආකලනය","Hg²⁺/අම්ලීය තත්ත්ව යටතේ alkyne වෙත H₂O ආකලනය වී enol අතරමැදියක් සෑදෙයි; එය keto-enol tautomerism මඟින් කාබොනිල් සංයෝගයක් බවට පත්වේ.","HC≡CH + H₂O —Hg²⁺/H⁺→ CH₃CHO","Alkyne hydration","Hydration creates an enol which tautomerizes to a carbonyl compound.","அல்கைன் நீரேற்றம்","எனோல் உருவாகி கார்போனில் சேர்மமாக மாறும்."],
["අග්‍රස්ථ ඇල්කයින ආම්ලික H","sp මුහුම් C–H බන්ධනයේ H, ඇල්කේන/ඇල්කීන H වලට වඩා ආම්ලික වේ. NaNH₂ වැනි ප්‍රබල භෂ්මයක් එය ඉවත් කර acetylide ඇනායනය ලබාදිය හැකිය.","RC≡CH + NaNH₂ → RC≡C⁻Na⁺ + NH₃","Terminal alkyne acidity","Strong bases deprotonate terminal alkynes to acetylides.","இறுதி அல்கைன் அமிலத்தன்மை","NaNH₂ போன்ற வலுவான காரம் acetylide உருவாக்கும்."]
],[
["ඇල්කයිනයකට සම්පූර්ණ Br₂ ආකලනයට සමාන ප්‍රමාණ?","Equivalents of Br₂ for full alkyne addition?","முழுச் சேர்க்கைக்கு Br₂ சமவிகிதம்?",["1","2","3","4"],1,"π බන්ධන දෙක නිසා Br₂ දෙකක්."],
["HC≡CH + H₂O (Hg²⁺/H⁺) ප්‍රධාන ඵලය?","Hydration product of ethyne?","எத்தைன் நீரேற்ற விளைவு?",["ethanol","ethene","ethanal","ethane"],2,"enol tautomerism මඟින් ethanal."],
["අග්‍රස්ථ ඇල්කයිනයේ H ඉවත් කළ හැකි භෂ්මය?","Base suitable for terminal alkyne deprotonation?","இறுதி அல்கைன் H நீக்கும் காரம்?",["NaNH₂","H₂O","HCl","NH₄Cl"],0,"NaNH₂ ප්‍රබල භෂ්මයකි."],
["H₂/Ni සම්පූර්ණ ආකලනයෙන් ඇල්කයිනය?","Full catalytic hydrogenation yields?","முழு ஐதரசனேற்ற விளைவு?",["alkene only","carboxylic acid","phenol","alkane"],3,"අසංතෘප්තතාව අවසන් වේ."],
["ඇල්කයින C≡C හි π බන්ධන ගණන?","π bonds in C≡C?","C≡C இல் π எத்தனை?",["1","2","3","0"],1,"C≡C = 1σ + 2π."]
]),
N(["බෙන්සීන්: ව්‍යුහය හා ඇරෝමැටිකතාව","Benzene structure and aromatic stabilization","பென்சீன் அமைப்பு, அரோமாட்டிக் நிலைத்தன்மை"],"2.3","41–45",
["විස්ථානගත π ඉලෙක්ට්‍රෝන සහ බෙන්සීන්හි ස්ථායීතාව පැහැදිලි කරන්න.","Connect delocalization to aromatic stability.","பென்சீனின் பரவலான π இலத்திரன்கள், நிலைத்தன்மை."],
[
["sp² වළලු ව්‍යුහය","බෙන්සීන් C₆H₆ හි සෑම C පරමාණුවක්ම sp² වේ. වළල්ල තලීය වන අතර C පරමාණු හයම ඒකාකාර දිග C–C බන්ධන වලින් බැඳේ.","C₆H₆ • sp² • planar hexagon","Planar benzene ring","Six sp² carbon atoms form a planar six-membered ring.","தளப் பென்சீன் வளையம்","ஆறு sp² கார்பன்கள் தளவடிவ அறுகோணம் அமைக்கின்றன."],
["විස්ථානගත π ඉලෙක්ට්‍රෝන","p කාක්ෂික වළල්ල පුරා අතිච්ඡාදනය වී π ඉලෙක්ට්‍රෝන 6ක් විස්ථානගත වේ. ඒ නිසා තනි/ද්විත්ව බන්ධන ස්ථිර ස්ථානවලින් දක්වන්නේ සීමිත නිරූපණයකි.","6 π e⁻ • delocalization","Delocalized π cloud","Six π electrons are delocalized around the benzene ring.","பரவலான π இலத்திரன்கள்","6 π இலத்திரன்கள் வளையம் முழுவதும் பரவியுள்ளன."],
["ස්ථායීතාව හා ආදේශ ප්‍රවණතාව","බෙන්සීන් සාමාන්‍ය ඇල්කීන මෙන් Br₂ සමඟ පහසු ආකලනයක් නොදක්වයි. ඇරෝමැටික පද්ධතිය ආරක්ෂා වන විද්‍යුත්කාමී ආදේශ ප්‍රතික්‍රියා සාමාන්‍යයෙන් දැක්වේ.","benzene + Br₂ / FeBr₃ → bromobenzene + HBr","Preference for substitution","Electrophilic substitution preserves aromaticity.","பதிலீடு அதிகம் நிகழ்தல்","அரோமாட்டிசிட்டியை காக்க எலக்ட்ரோஃபிலிக் பதிலீடு நடைபெறும்."],
["කැකුලේ සහ ප්‍රතිධ්වනි ආකෘති","කැකුලේ ව්‍යුහ දෙක ප්‍රතිධ්වනි ආකෘති වේ; ඒවා වෙනස් අණු දෙකක් නොවේ. සැබෑ ව්‍යුහය ප්‍රතිධ්වනි දෙකේ සංයුක්ත නිරූපණයකි.","Kekulé forms ⇌ resonance hybrid","Resonance forms","Two Kekulé drawings represent one delocalized molecule.","ஒத்திசைவு வடிவங்கள்","கெகுலே வடிவங்கள் ஒரே மூலக்கூற்றின் ஒத்திசைவு வடிவங்களே."]
],[
["බෙන්සීන්හි C පරමාණු ගණන?","Number of carbons in benzene?","பென்சீனில் C எத்தனை?",["4","5","6","8"],2,"C₆H₆ වේ."],
["බෙන්සීන්හි π ඉලෙක්ට්‍රෝන ගණන?","Number of π electrons?","π இலத்திரன்கள் எத்தனை?",["4","6","8","10"],1,"π ඉලෙක්ට්‍රෝන 6කි."],
["බෙන්සීන්ගේ සාමාන්‍ය ප්‍රතික්‍රියා වර්ගය?","Typical benzene reaction?","பென்சீனின் வழக்கமான வினை?",["electrophilic substitution","easy addition","hydrolysis","polymerization"],0,"ඇරෝමැටිකතාව ආරක්ෂා වන ආදේශයයි."],
["බෙන්සීන්හි කාබන් මුහුම්කරණය?","Benzene carbon hybridization?","பென்சீன் C கலப்பினம்?",["sp","sp³","sp³d","sp²"],3,"බෙන්සීන්හි C පරමාණු sp² වේ."],
["කැකුලේ ආකෘති දෙක අර්ථ දක්වන්නේ?","Meaning of two Kekulé forms?","இரு கெகுலே வடிவங்கள்?",["different compounds","resonance structures","ions","isotopes"],1,"සැබෑ අණුවෙහි ප්‍රතිධ්වනි නිරූපණ වේ."]
]),
N(["බෙන්සීන් විද්‍යුත්කාමී ආදේශ","Electrophilic substitution of benzene","பென்சீன் எலக்ட்ரோஃபிலிக் பதிலீடு"],"2.4","45–49",
["නයිට්‍රෝකරණය, හැලජනීකරණය හා Friedel–Crafts ප්‍රතික්‍රියා වල ප්‍රතික්‍රියාකාරක හඳුනාගන්න.","Select electrophiles, catalysts and aromatic products.","நைட்ரேற்றம், அலசனேற்றம், Friedel–Crafts வினைகள்."],
[
["නයිට්‍රෝකරණය","සාන්ද්‍ර HNO₃ සහ සාන්ද්‍ර H₂SO₄ මිශ්‍රණය තුළ NO₂⁺ නයිට්‍රෝනියම් විද්‍යුත්කාමී අයනය සෑදේ. එය බෙන්සීන් සමඟ ප්‍රතික්‍රියා කර nitrobenzene සාදයි.","C₆H₆ + HNO₃ —H₂SO₄→ C₆H₅NO₂ + H₂O","Nitration","Concentrated HNO₃/H₂SO₄ generates NO₂⁺ for substitution.","நைட்ரேற்றம்","NO₂⁺ உருவாகி nitrobenzene தருகிறது."],
["Friedel–Crafts ඇල්කයිලීකරණය","ඇල්කයිල් හැලයිඩ හා නිර්ජලීය AlCl₃ යටතේ බෙන්සීන් වළල්ලට ඇල්කයිල් කාණ්ඩයක් එක් කළ හැකිය. ප්‍රතික්‍රියාවේ සීමා හා ප්‍රතිසංවිධාන හැකියාව සැලකිල්ලට ගන්න.","C₆H₆ + CH₃Cl —AlCl₃→ C₆H₅CH₃ + HCl","Friedel–Crafts alkylation","An alkyl halide and AlCl₃ introduce an alkyl group.","Friedel–Crafts அல்கைலேற்றம்","AlCl₃ உதவியுடன் அல்கைல் குழு சேர்க்கப்படுகிறது."],
["Friedel–Crafts ඇසිලීකරණය","ඇසිල් ක්ලෝරයිඩ හා AlCl₃ මඟින් acylium විද්‍යුත්කාමී අයනයක් හරහා වළල්ලට –COR කාණ්ඩයක් එක් වේ. කීටෝන ඵලය ලැබේ.","C₆H₆ + CH₃COCl —AlCl₃→ C₆H₅COCH₃ + HCl","Friedel–Crafts acylation","Acyl chloride/AlCl₃ gives an aryl ketone.","Friedel–Crafts அசைலேற்றம்","அசைல் குழு இணைந்து அரைல் கீற்றோன் உருவாகிறது."],
["Br₂ හා FeBr₃ ප්‍රතික්‍රියාව","බෙන්සීන් Br₂ සමඟ තනිව ඇල්කීන මෙන් වේගයෙන් ප්‍රතික්‍රියා නොකරයි. FeBr₃ වැනි ලුවිස් අම්ලයකින් Br⁺-සමාන විද්‍යුත්කාමී අංශුවක් සක්‍රිය වී bromobenzene සාදයි.","C₆H₆ + Br₂ —FeBr₃→ C₆H₅Br + HBr","Aromatic bromination","FeBr₃ activates bromine toward aromatic substitution.","அரோமாட்டிக் புரோமினேற்றம்","FeBr₃ முன்னிலையில் bromobenzene கிடைக்கிறது."]
],[
["බෙන්සීන් නයිට්‍රෝකරණයේ විද්‍යුත්කාමී අයනය?","Electrophile in nitration?","நைட்ரேற்ற எலக்ட்ரோஃபில்?",["NO₃⁻","NO₂⁺","NH₄⁺","OH⁻"],1,"NO₂⁺ නයිට්‍රෝනියම් ය."],
["Friedel–Crafts ඇල්කයිලීකරණ උත්ප්‍රේරකය?","Catalyst for Friedel–Crafts alkylation?","Friedel–Crafts வினை ஊக்கி?",["H₂O","NaCl","AlCl₃","NaOH"],2,"නිර්ජලීය AlCl₃ යොදාගනී."],
["CH₃COCl / AlCl₃ බෙන්සීන් සමඟ දෙන කාණ්ඩය?","Reaction of CH₃COCl/AlCl₃ adds which group?","CH₃COCl/AlCl₃ சேர்க்கும் குழு?",["–COCH₃","–OH","–NH₂","–COOH"],0,"ඇසිල් කාණ්ඩයකි."],
["බෙන්සීන් bromination සඳහා යෝග්‍ය සක්‍රියකාරකය?","Activator for benzene bromination?","பென்சீன் புரோமினேற்ற ஊக்கி?",["Ni","H₂SO₄(aq)","H₂O","FeBr₃"],3,"FeBr₃ යනු ලුවිස් අම්ල සක්‍රියකාරකයකි."],
["HNO₃ / H₂SO₄ මගින් බෙන්සීන් ඵලය?","Benzene with HNO₃/H₂SO₄ gives?","பென்சீன் + HNO₃/H₂SO₄?",["phenol","nitrobenzene","aniline","benzoic acid"],1,"NO₂ වළල්ලේ H වෙනුවට ආදේශ වේ."]
]),
N(["බෙන්සීන්හි යොමුකරණ බලපෑම","Ortho/meta/para directing effects","பென்சீனில் ortho/meta/para இயக்கம்"],"2.5","49–50",
["ආදේශකයක් දෙවන විද්‍යුත්කාමී ආදේශය යොමුකරන ස්ථානය හඳුනාගන්න.","Predict directing effects of existing substituents.","பதிலீட்டுக் குழுக்கள் அடுத்த இடத்தை இயக்குவது."],
[
["ඔර්තෝ, මෙටා, පැරා ස්ථාන","වළල්ලේ ආදේශක දෙකක් 1,2 පිහිටන්නේ ortho; 1,3 නම් meta; 1,4 නම් para ය. සූත්‍ර හඳුනාගැනීමේදී මෙම ස්ථාන අංක පුරුදු කරන්න.","ortho 1,2 | meta 1,3 | para 1,4","Ring positions","Ortho = 1,2; meta = 1,3; para = 1,4.","வளைய இடங்கள்","ortho 1,2; meta 1,3; para 1,4."],
["ඉලෙක්ට්‍රෝන දායක කාණ්ඩ","–OH, –NH₂, –OR හා ඇල්කයිල් වැනි කාණ්ඩ බොහෝවිට ortho/para යොමුකරයි. වළල්ලේ ඉලෙක්ට්‍රෝන ඝනත්වය වැඩි කිරීම සමඟ මෙම බලපෑම සම්බන්ධ වේ.","–OH → ortho / para","Electron-donating substituents","OH, NH₂ and many alkyl groups direct ortho/para.","இலத்திரன் வழங்கும் குழுக்கள்","–OH, –NH₂ பெரும்பாலும் ortho/para இயக்கும்."],
["ඉලෙක්ට්‍රෝන ආකර්ෂක කාණ්ඩ","–NO₂, –CHO, –COOH, –SO₃H වැනි කාණ්ඩ බොහෝවිට meta යොමුකරයි. ඒවා සාමාන්‍යයෙන් වළල්ලේ විද්‍යුත්කාමී ආදේශ වේගය අඩු කරයි.","–NO₂ → meta","Electron-withdrawing substituents","NO₂, CHO and COOH usually direct meta.","இலத்திரன் ஈர்க்கும் குழுக்கள்","–NO₂, –CHO, –COOH பெரும்பாலும் meta இயக்கும்."],
["හැලජන විශේෂත්වය","හැලජන වළල්ල අක්‍රියකාරී කළත් ඒවා resonance මඟින් ortho/para යොමුකරයි. මෙය සාමාන්‍ය ඉලෙක්ට්‍රෝන ආකර්ෂක කාණ්ඩවල meta යොමුකරණයෙන් වෙනස්ය.","–Cl / –Br → ortho / para (deactivating)","Halogen exception","Halogens are deactivating yet ortho/para directing.","அலசன்களின் விதிவிலக்கு","அலசன்கள் வினைவேகத்தைக் குறைத்தாலும் ortho/para இயக்கும்."]
],[
["1,3-ද්විආදේශිත බෙන්සීන් පිහිටීම?","1,3-disubstitution is called?","1,3 இடம் பெயர்?",["ortho","para","meta","ipso"],2,"1,3 = meta."],
["–OH බෙන්සීන්හි සාමාන්‍ය යොමුකරණය?","–OH directing positions?","–OH இயக்கும் இடங்கள்?",["ortho/para","meta","only para","none"],0,"–OH ortho/para යොමුකරයි."],
["–NO₂ ප්‍රධාන යොමුකරණය?","–NO₂ primarily directs?","–NO₂ இயக்கம்?",["ortho","para","ipso","meta"],3,"–NO₂ meta යොමුකරයි."],
["හැලජන කාණ්ඩයක වැදගත් විශේෂත්වය?","Halogen substituent is generally?","அலசன் குழுவின் தன்மை?",["meta activating","ortho/para deactivating","only para activating","no effect"],1,"හැලජන අක්‍රියකාරී නමුත් ortho/para යොමුකරයි."],
["1,4-ද්විආදේශිත වළල්ල කුමක්ද?","1,4 relationship is?","1,4 இடம்?",["meta","ortho","para","none"],2,"1,4 = para."]
]),
N(["ඇල්කයිල් හැලයිඩවල ආදේශ හා ඉවත්වීම","Haloalkane substitution and elimination","அல்கைல் அலசன்களின் பதிலீடும் நீக்கலும்"],"2.6–2.7","50–53",
["C–X ධ්‍රැවිකරණය, නියුක්ලියෝෆීල සහ SN1/SN2 පියවර සසඳන්න.","Understand C–X polarity, nucleophiles, SN1/SN2 and competing elimination.","C–X துருவம், SN1/SN2, நீக்க வினையை ஒப்பிடுக."],
[
["C–X බන්ධන ධ්‍රැවිකරණය","X වැඩි විද්‍යුත් ඍණතාවකින් යුක්ත බැවින් Cδ⁺–Xδ⁻ ලෙස බන්ධනය ධ්‍රැවිකරණය වේ. OH⁻, CN⁻ හා NH₃ වැනි නියුක්ලියෝෆීලවලට C වෙත ප්‍රහාර දිය හැකිය.","CH₃CH₂Br + OH⁻ → CH₃CH₂OH + Br⁻","Polar C–X and nucleophiles","Nucleophiles attack electrophilic carbon bonded to halogen.","C–X துருவம், நியூக்ளியோஃபில்","X உடன் இணைந்த C மீது நியூக்ளியோஃபில் தாக்கும்."],
["SN2 එක් පියවරේ ආදේශය","ප්‍රාථමික ඇල්කයිල් හැලයිඩ සාමාන්‍යයෙන් SN2 යාන්ත්‍රණයට සුදුසුය. නියුක්ලියෝෆීල ප්‍රහාරය හා leaving group ඉවත්වීම එකම පියවරක සිදුවෙයි.","SN2: Nu⁻ + R–X → R–Nu + X⁻","SN2 mechanism","Concerted substitution is favored for many primary haloalkanes.","SN2 வழிமுறை","ஒரே படியில் நுழைவும் வெளியேற்றமும் நடக்கும்."],
["SN1 පියවර දෙකේ ආදේශය","තෘතීයික හැලයිඩවල ස්ථායී කාබොකැටායන සෑදිය හැකි බැවින් SN1 වැඩි පහසු විය හැකිය. පළමුව C–X බිඳී carbocation සෑදී පසුව Nu ප්‍රහාර දේ.","SN1: R–X → R⁺ + X⁻ → R–Nu","SN1 mechanism","Ionization precedes nucleophilic capture of a carbocation.","SN1 வழிமுறை","முதலில் கார்போகேஷன் உருவாகி பின்னர் தாக்குதல் நடைபெறும்."],
["ජලීය හා ඇල්කොහොලීය KOH","ජලීය KOH ආදේශයෙන් ඇල්කොහොල් ඵලයට උපකාරී වන අතර ඇල්කොහොලීය KOH යටතේ β-H ඉවත් වී ඇල්කීන සෑදීම ප්‍රමුඛ විය හැකිය. උපස්ථරය හා තත්ත්වයන් බලපායි.","RCH₂CH₂X —KOH/ethanol→ RCH=CH₂","Substitution versus elimination","Aqueous hydroxide often favors substitution; alcoholic base favors elimination.","பதிலீடு அல்லது நீக்கம்","நீர்க் KOH பதிலீட்டை; ஆல்கஹாலிக் KOH நீக்கத்தை ஆதரிக்கும்."]
],[
["ප්‍රාථමික ඇල්කයිල් හැලයිඩයක සාමාන්‍ය යාන්ත්‍රණය?","Common mechanism for primary haloalkanes?","முதன்மை அல்கைல் அலசன் வழி?",["SN1","SN2","E1 only","addition"],1,"ප්‍රාථමික substrate සඳහා SN2 බොහෝවිට සුදුසුය."],
["SN1 පළමු පියවරේ සාදන්නේ කුමක්ද?","Intermediate in SN1?","SN1 இடைநிலை?",["carbocation","free radical","alkene","hydride"],0,"C–X බිඳී carbocation සෑදේ."],
["ජලීය KOH සමඟ bromoethane හි ප්‍රධාන ඵලය?","Bromoethane with aqueous KOH?","bromoethane + நீர்க் KOH?",["ethene","ethyne","ethanol","ethanal"],2,"OH⁻ ආදේශයෙන් ethanol."],
["ඇල්කොහොලීය KOH ප්‍රමුඛ කරන ප්‍රතික්‍රියාව?","Alcoholic KOH commonly favors?","ஆல்கஹாலிக் KOH ஆதரிப்பது?",["hydration","polymerization","nitration","elimination"],3,"β-H ඉවත්ව ඇල්කීන ලබාදේ."],
["හැලයිඩ leaving group ඉවත්වන්නේ?","Leaving halide leaves as?","வெளியேறும் அலசன்?",["X⁺","X⁻","X₂","H₂"],1,"X⁻ ලෙස ඉවත්වේ."]
])
];
window.U8_CHAPTERS=C;
window.U8_STRUCTURED=[
["ඇල්කේන, ඇල්කීන, ඇල්කයිනවල මුහුම්කරණය සසඳන්න.","sp³/sp²/sp, σ/π බන්ධන ගණන, 109.5°/120°/180° සහ උදාහරණ සමඟ සසඳන්න.","Compare structures and bonding of hydrocarbons.","ஐதரோகார்பன் பிணைப்புகளையும் அமைப்பையும் ஒப்பிடுக."],
["ඇල්කේන ක්ලෝරීනීකරණය පැහැදිලි කරන්න.","CH₄+Cl₂ / UV නිදහස් මුක්තඛණ්ඩ ආරම්භ, ප්‍රචාරණ, අවසාන පියවර සමඟ විස්තර කරන්න.","Explain radical chlorination.","அல்கேன் குளோரினேற்றம் விளக்குக."],
["ඇල්කීන සහ ඇල්කයින ආකලන ප්‍රතික්‍රියා සසඳන්න.","HX, Br₂, H₂/Ni, H₂SO₄/H₂O, KMnO₄ හා ඇල්කයින hydration සම්බන්ධ ප්‍රතික්‍රියා තත්ත්ව හා ඵල විස්තර කරන්න.","Compare additions and reagents.","சேர்க்கை வினைகளை ஒப்பிடுக."],
["බෙන්සීන් ප්‍රතික්‍රියා හා යොමුකරණය","π විස්ථානගතභාවය, නයිට්‍රෝකරණය, Friedel–Crafts හා ortho/meta/para යොමුකරණයට උදාහරණ දෙන්න.","Explain aromatic substitutions and directing groups.","பென்சீன் பதிலீடும் இயக்கக் குழுக்களும்."],
["SN1 හා SN2 යාන්ත්‍රණ වෙනස","අතරමැදි, පියවර ගණන, substrate preference, leaving group හා KOH ජලීය/ඇල්කොහොලීය වෙනස සසඳන්න.","Compare SN1, SN2 and elimination.","SN1, SN2, நீக்க வினையை ஒப்பிடுக."]
];
window.U8_ESSAY=[
["හයිඩ්‍රොකාබනවල ව්‍යුහය, ගුණ හා රසායනික ප්‍රතික්‍රියා සම්පූර්ණව විග්‍රහ කරන්න.","මුහුම්කරණය, බන්ධන කෝණ, තාපාංක ප්‍රවණතා, radical substitution, electrophilic addition, catalytic hydrogenation, permanganate oxidation සම්බන්ධ කරන්න.","Explain hydrocarbon structure and reaction pathways.","ஐதரோகார்பன் அமைப்புகளும் வினைகளும்."],
["බෙන්සීන් හා ඇල්කයිල් හැලයිඩවල යාන්ත්‍රණ සසඳන්න.","ඇරෝමැටික π ස්ථායීතාව, නයිට්‍රෝනියම්, Friedel–Crafts, ortho/meta/para හා SN1/SN2 සසඳන්න.","Discuss benzene chemistry and nucleophilic substitution.","பென்சீன் வேதியியலும் நியூக்ளியோஃபிலிக் பதிலீடும்."]
];
})();
