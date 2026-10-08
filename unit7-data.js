/* NIE Grade 12, Unit 07: Organic Chemistry fundamentals, printed pp. 1–25.
   Original learning notes/questions, not a reproduction of NIE pages. */
(function(){
"use strict";
function N(n,ref,pages,intro,steps,quiz){return{name:n,ref,pages,intro,steps:steps.map(function(s){return{t:[s[0],s[3],s[5]],d:[s[1],s[4],s[6]],eq:s[2]}}),qs:quiz.map(function(q){return[q[0],q[1],q[2],q[3],q[4],q[5]]})}}
const C=[
N(["කාබනික රසායනය හා කාබන්හි විශේෂත්වය","Organic chemistry and carbon","கரிம வேதியியலும் கார்பனின் தனித்தன்மையும்"],"1.1","2–3",
["කාබන් අඩංගු සංයෝගවල විශාල විවිධත්වය තේරුම් ගැනීමට බන්ධන ශක්තිය, සංයුජතාව සහ කාබන් දාම සෑදීම අධ්‍යයනය කරන්න.","Explore carbon valence, catenation and strong covalent bonds.","கார்பனின் நான்கு இணைதிறன், சங்கிலிகள், வலுவான பிணைப்புகளை அறிக."],
[
["දෛනික ජීවිතයේ කාබනික සංයෝග","ආහාරවල කාබෝහයිඩ්‍රේට්, ප්‍රෝටීන හා ලිපිඩ, ඉන්ධන, ඖෂධ සහ ප්ලාස්ටික්වල ප්‍රධාන කාබන් සංයෝග පවතී. කාබනික රසායනය මෙම සංයෝගවල ව්‍යුහය සහ ප්‍රතික්‍රියා අධ්‍යයනය කරයි.","ආහාර • ඉන්ධන • ඖෂධ • බහුඅවයවක","Organic compounds in daily life","Fuels, medicines, polymers and food contain organic compounds.","அன்றாடக் கரிமச் சேர்மங்கள்","உணவு, மருந்து, எரிபொருள், நெகிழியில் கரிமச் சேர்மங்கள் உள்ளன."],
["කාබන්හි සිව්සංයුජතාව","කාබන් පරමාණුවට සංයුජතා ඉලෙක්ට්‍රෝන හතරක් ඇති නිසා එයට සහසංයුජ බන්ධන හතරක් ඇති කළ හැකිය. C–H, C–C සහ අනෙකුත් විෂමපරමාණු බන්ධන එක්ව විවිධ අණු සෑදෙයි.","C valence = 4  |  CH₄","Carbon tetravalency","Carbon forms four covalent bonds using four valence electrons.","கார்பனின் நான்கு இணைதிறன்","கார்பன் நான்கு சகபிணைப்புகளை உருவாக்குகிறது."],
["කාබන් දාම සෑදීම","කාබන්–කාබන් බන්ධන ප්‍රබල බැවින් සෘජු දාම, ශාඛිත දාම සහ වළලු ඇති සංයෝග සාදයි. මෙය කාබන් දාමකරණය (catenation) ලෙස හැඳින්වේ.","C–C 346  |  C=C 610  |  C≡C 835 kJ mol⁻¹","Catenation","Strong C–C bonds allow chains, branches and rings.","கார்பன் சங்கிலியாக்கம்","வலுவான C–C பிணைப்புகள் சங்கிலி, கிளை, வளையம் உருவாக்கும்."],
["තනි, ද්විත්ව හා ත්‍රිත්ව බන්ධන","C–C, C=C සහ C≡C බන්ධන තුනේ බන්ධන ශක්ති අනුපිළිවෙළ වැඩි වන අතර බන්ධන දිග සාමාන්‍යයෙන් අඩුවෙයි. ද්විත්ව හා ත්‍රිත්ව බන්ධන නිසා අසංතෘප්ත සංයෝග සෑදේ.","C–C < C=C < C≡C (බන්ධන ශක්තිය)","Single, double, triple bonds","Multiple bonds increase bond order and generally shorten bonds.","ஒற்றை, இரட்டை, மும்மைப் பிணைப்புகள்","பிணைப்பு வரிசை உயரும்போது நீளம் குறைந்து வலிமை கூடும்."]
],[
["කාබන් පරමාණුවක සාමාන්‍ය සංයුජතාව කීයද?","What is the typical valency of carbon?","கார்பனின் இணைதிறன் என்ன?",["2","3","4","6"],2,"C පරමාණුව සාමාන්‍යයෙන් සහසංයුජ බන්ධන 4ක් සාදයි."],
["C–C හා C≡C අතර වැඩි බන්ධන ශක්තිය ඇත්තේ කුමකටද?","Which has greater bond energy, C–C or C≡C?","C–C அல்லது C≡C எது வலிமையானது?",["C–C","C≡C","දෙකම සමානයි","කිසිවක් නොවේ"],1,"ත්‍රිත්ව බන්ධනය සාමාන්‍යයෙන් ශක්තිමත් වේ."],
["කාබන් දාමකරණය හැඳින්වෙන්නේ කුමන නාමයෙන්ද?","What is chain formation by carbon called?","கார்பன் சங்கிலி உருவாக்கம் என்ன?",["catenation","hydration","hydrolysis","oxidation"],0,"Catenation යනු කාබන් පරමාණු එක්ව දාම සෑදීමයි."],
["කාබනික සංයෝගයක දාමයක් විය හැක්කේ කුමක්ද?","What carbon skeleton is possible?","சாத்தியமான கார்பன் அமைப்பு எது?",["සෘජු දාම","ශාඛිත දාම","වළලු","ඉහත සියල්ල"],3,"කාබන් සෘජු, ශාඛිත හා වළලු ආකාරයේ සැකිලි සෑදේ."],
["කාබන්හි සංයුජතා ඉලෙක්ට්‍රෝන ගණන කීයද?","How many carbon valence electrons?","கார்பனின் வெளிக்கூட்டு இலத்திரன்கள் எத்தனை?",["1","2","4","8"],2,"C හි පිටත කවචයට ඉලෙක්ට්‍රෝන 4කි."]
]),
N(["හයිඩ්‍රොකාබන හා ක්‍රියාකාරී කාණ්ඩ","Hydrocarbons and functional groups","ஐதரோகார்பன்களும் தொழிற்பாட்டுக் குழுக்களும்"],"1.2","3–6",
["අණුවේ ප්‍රධාන රසායනික හැසිරීම තීරණය කරන ක්‍රියාකාරී කාණ්ඩ වර්ග කරන්න.","Classify compounds by structural family and functional group.","செயற்பாட்டுக் குழுக்கள் மூலம் சேர்மங்களை வகைப்படுத்துக."],
[
["හයිඩ්‍රොකාබන වර්ගීකරණය","C හා H පමණක් අඩංගු සංයෝග හයිඩ්‍රොකාබන වේ. ඇලිෆැටික හයිඩ්‍රොකාබන ඇල්කේන, ඇල්කීන, ඇල්කයින වශයෙන්ද බෙන්සීන්-ආශ්‍රිත සංයෝග ඇරෝමැටික වශයෙන්ද වෙන්කර හඳුනාගන්න.","alkane CₙH₂ₙ₊₂ | alkene CₙH₂ₙ | alkyne CₙH₂ₙ₋₂","Hydrocarbon families","Alkanes are saturated; alkenes/alkynes unsaturated; benzene is aromatic.","ஐதரோகார்பன் வகைகள்","அல்கேன்கள் நிறைவுற்றவை; அல்கீன், அல்கைன் நிறைவுறாதவை."],
["ඔක්සිජන් ක්‍රියාකාරී කාණ්ඩ","–OH ඇල්කොහොල්, –O– ඊතර්, –CHO ඇල්ඩිහයිඩ්, >C=O කීටෝන, –COOH කාබොක්සිලික් අම්ල ලෙස හඳුනාගන්න. එකම කාබන් දාමයට වෙනස් කාණ්ඩයක් එක් කිරීමෙන් ගුණ වෙනස් වේ.","–OH | –O– | –CHO | >C=O | –COOH","Oxygen functional groups","Recognize alcohol, ether, aldehyde, ketone and carboxylic acid.","ஒட்சிசன் செயற்பாட்டுக் குழுக்கள்","–OH, –O–, –CHO, >C=O, –COOH ஆகிய குழுக்களை அடையாளம் காண்க."],
["කාබොක්සිලික් අම්ල ව්‍යුත්පන්න","–COCl අම්ල ක්ලෝරයිඩ, –COOR එස්ටර සහ –CONH₂ ඇමයිඩ කාබොක්සිලික් අම්ලයේ –OH වෙනුවට වෙනත් කාණ්ඩයක් ඇති වීමෙන් ලැබෙන ව්‍යුත්පන්න වේ.","–COCl | –COOR | –CONH₂","Acid derivatives","Acyl chlorides, esters and amides are related to carboxylic acids.","அமில வழிப்பொருட்கள்","அசைல் குளோரைடு, எஸ்டர், அமைடு ஆகியன அமில வழிப்பொருட்கள்."],
["නයිට්‍රජන් හා හැලජන කාණ්ඩ","–NH₂ ඇමීන, –C≡N නයිට්‍රයිල් හා –X ඇල්කයිල් හැලයිඩ කාණ්ඩ වේ. –NH₂ හා –CONH₂ එකිනෙකට වෙනස් බැවින් ඇමීන සහ ඇමයිඩ පටලවා නොගන්න.","R–NH₂ | R–C≡N | R–X","Nitrogen and halogen groups","Distinguish amines from amides, nitriles and alkyl halides.","நைதரசன், அலசன் குழுக்கள்","அமீன், அமைடு, நைட்ரைல், அல்கைல் அலசனை வேறுபடுத்துக."]
],[
["CH₃CH₂OH හි ක්‍රියාකාරී කාණ්ඩය කුමක්ද?","Functional group in CH₃CH₂OH?","CH₃CH₂OH இல் குழு என்ன?",["–COOH","–OH","–CHO","–NH₂"],1,"ඇල්කොහොල් හයිඩ්‍රොක්සිල් කාණ්ඩය –OH වේ."],
["–COOR කාණ්ඩයට අයත් සංයෝගය කුමක්ද?","Which family contains –COOR?","–COOR எந்த வகை?",["ester","amide","amine","aldehyde"],0,"–COOR එස්ටර කාණ්ඩයයි."],
["–CHO අඩංගු වන්නේ කුමන වර්ගයටද?","Which class includes –CHO?","–CHO எதைக் குறிக்கும்?",["ketone","ether","aldehyde","alkane"],2,"–CHO ඇල්ඩිහයිඩ් කාණ්ඩයයි."],
["–CONH₂ හා –NH₂ අතර වෙනස කුමක්ද?","Which group defines an amide?","அமைடை அடையாளம் காணும் குழு?",["–NH₂","–COOH","–O–","–CONH₂"],3,"–CONH₂ ඇමයිඩයකි; –NH₂ ඇමීනයක දක්නට ලැබේ."],
["ඇල්කයිල් හැලයිඩයක සාමාන්‍ය සූත්‍රය කුමක්ද?","General formula of an alkyl halide?","அல்கைல் அலசன் பொதுவடிவம்?",["R–X","R–OH","R–CHO","R–COOH"],0,"R–X තුළ X = F, Cl, Br හෝ I වේ."]
]),
N(["IUPAC: දාම, අංකනය හා ඇල්කේන","IUPAC: chains, numbering and alkanes","IUPAC: சங்கிலி, எண் இடல், அல்கேன்கள்"],"1.3.1–1.3.3","7–9",
["දිගම සුදුසු දාමය සහ අවම ස්ථාන අංක තෝරා නම ගොඩනගන පියවර ඉගෙන ගන්න.","Apply parent-chain selection and lowest locant rules.","முதன்மைச் சங்கிலி, குறைந்த இடஎண் விதிகளைப் பயன்படுத்துக."],
[
["මූලික දාම නාම","C පරමාණු 1–6 සඳහා meth-, eth-, prop-, but-, pent-, hex- යන මුලද සමඟ -ane යන ප්‍රත්‍යය යෙදේ. දාම දිග හඳුනාගැනීම මුල් පියවරයි.","CH₄ methane | C₂H₆ ethane | C₃H₈ propane","Parent-chain roots","Learn meth, eth, prop, but, pent, hex and -ane suffix.","அடிப்படை சங்கிலிப் பெயர்கள்","meth, eth, prop, but, pent, hex மற்றும் -ane பயன்படுத்துக."],
["ශාඛා හඳුනාගැනීම","ප්‍රධාන දාමයකින් H එකක් ඉවත් වීමෙන් methyl (–CH₃), ethyl (–C₂H₅) වැනි ඇල්කයිල් කාණ්ඩ ලැබේ. ශාඛා නම් ප්‍රධාන නමට පෙර යෙදේ.","–CH₃ methyl | –C₂H₅ ethyl","Alkyl substituents","Methyl and ethyl name groups attached to the parent chain.","கிளைத் தொகுதிகள்","மெதில், எதில் குழுக்கள் முதன்மைச் சங்கிலியுடன் இணைகின்றன."],
["අවම ස්ථාන අංක","ශාඛා බැඳෙන ස්ථානවලට හැකිතාක් අඩු අංක ලැබෙන අන්තයෙන් දාමය අංකනය කරන්න. උදාහරණය: 2-methylpentane, 4-methylpentane නොවේ.","CH₃CH(CH₃)CH₂CH₂CH₃ → 2-methylpentane","Lowest locants","Number from the end providing the lowest substituent locants.","குறைந்த இடஎண்","கிளைக்கு குறைந்த எண் வரும் முனையிலிருந்து எண்ணுக."],
["බහු ශාඛා හා අකාරාදී පිළිවෙළ","ශාඛා දෙකක් හෝ වැඩි ගණනක් තිබේ නම් 2,4-dimethyl වැනි di-, tri- යෙදේ. වෙනස් ආදේශක නම් අකාරාදී පිළිවෙළට ලියන්න.","4-ethyl-2-methylhexane","Multiple substituents","Use di/tri prefixes and alphabetize different substituents.","பல கிளைகள்","di-, tri- போன்ற முன்னொட்டுகளுடன் பெயரிடுக."]
],[
["CH₃CH₂CH₃ සඳහා IUPAC නම කුමක්ද?","IUPAC name of CH₃CH₂CH₃?","CH₃CH₂CH₃ பெயர்?",["ethane","methane","propane","butane"],2,"C පරමාණු 3 නිසා propane ය."],
["–CH₃ ආදේශක නම කුමක්ද?","Name of the –CH₃ substituent?","–CH₃ கிளையின் பெயர்?",["methyl","ethyl","propyl","butyl"],0,"–CH₃ = methyl."],
["CH₃CH(CH₃)CH₂CH₃ නම?","Name CH₃CH(CH₃)CH₂CH₃?","CH₃CH(CH₃)CH₂CH₃ பெயர்?",["3-methylbutane","2-methylbutane","2-ethylpropane","pentane"],1,"ආදේශකයට අවම ස්ථාන අංක 2 ලැබේ."],
["සමාන methyl කාණ්ඩ දෙකක් දක්වන උපසර්ගය?","Prefix for two identical methyl groups?","இரண்டு மெதில் குழுக்களுக்கு முன்னொட்டு?",["mono-","tetra-","tri-","di-"],3,"සමාන ආදේශක දෙකට di- යෙදේ."],
["කාබන් පහක මූලික දාමයේ නම?","Name for a five-carbon parent chain?","ஐந்து கார்பன் சங்கிலி?",["butane","hexane","pentane","ethane"],2,"pent- යනු 5 කි."]
]),
N(["IUPAC: ඇල්කීන, ඇල්කයින හා ප්‍රමුඛතාව","IUPAC: multiple bonds and priority","IUPAC: பல்பிணைப்புகள், முன்னுரிமை"],"1.3.4–1.3.6","10–20",
["බහුබන්ධන සහ කාර්ය කාණ්ඩ සඳහා නාමකරණ අංක තෝරාගන්න.","Name unsaturated compounds and rank principal functional groups.","பல்பிணைப்புகளுக்கும் பிரதான செயற்பாட்டுக் குழுக்களுக்கும் பெயரிடுக."],
[
["ඇල්කීන හා ඇල්කයින ප්‍රත්‍යය","C=C ඇති සංයෝගවලට -ene හා C≡C ඇති සංයෝගවලට -yne ප්‍රත්‍යය යෙදේ. බහුබන්ධනයට අවම අංක ලැබෙන ලෙස දාමය අංකනය කරන්න.","CH₂=CHCH₂CH₃ → but-1-ene","Alkene and alkyne suffixes","Use -ene for C=C and -yne for C≡C with bond locants.","அல்கீன், அல்கைன் பின்னொட்டுகள்","C=C க்கு -ene, C≡C க்கு -yne பயன்படும்."],
["ඇල්කොහොල්, ඇල්ඩිහයිඩ් හා කීටෝන","–OH සඳහා -ol, –CHO සඳහා -al, >C=O සඳහා -one යෙදේ. –CHO කාණ්ඩයේ කාබන්ට සාමාන්‍යයෙන් අංක 1 ලැබේ; >C=O කීටෝන දාමයේ ඇතුළත පිහිටිය යුතුය.","CH₃CH(OH)CH₃ → propan-2-ol","Oxygen-function suffixes","Alcohol -ol; aldehyde -al; ketone -one.","ஒட்சிசன் குழுக்களின் பின்னொட்டுகள்","-ol, -al, -one செயல்குழுவைப் பொறுத்து வரும்."],
["කාබොක්සිලික් අම්ල හා ඇමයිඩ","–COOH සඳහා -oic acid, –CONH₂ සඳහා -amide වේ. ප්‍රධාන කාර්ය කාණ්ඩයට ඉහළම ප්‍රමුඛතාව දී දාම අංකනය කර වෙනත් කාණ්ඩ උපසර්ග ලෙස යොදන්න.","CH₃CH₂COOH → propanoic acid","Acids and amides","Carboxylic acids use -oic acid; amides use -amide.","அமிலம், அமைடு பெயர்கள்","–COOH க்கு -oic acid; –CONH₂ க்கு -amide."],
["ක්‍රියාකාරී කාණ්ඩ ප්‍රමුඛතා අනුපිළිවෙළ","උදාහරණයක් ලෙස –COOH කාණ්ඩය –OH ට වඩා නාමකරණයේ ප්‍රධාන ප්‍රමුඛතාව ලබයි. –OH එවිට hydroxy- උපසර්ගයකි. ප්‍රධාන කාණ්ඩය සහ බහුබන්ධනය ඇතුළත් දිගම සුදුසු දාමය තෝරන්න.","HOCH₂CH₂COOH → 3-hydroxypropanoic acid","Principal functional-group priority","The highest-priority suffix determines numbering; other groups become prefixes.","செயற்பாட்டுக் குழு முன்னுரிமை","முதன்மை குழுவிற்கு குறைந்த இடஎண்; பிற குழுக்கள் முன்னொட்டுகளாகும்."]
],[
["C=C සඳහා යෙදෙන ප්‍රත්‍යය කුමක්ද?","Suffix used for C=C?","C=C இன் பின்னொட்டு?",["-ane","-ene","-yne","-al"],1,"C=C සඳහා -ene වේ."],
["CH₃CH₂CHO සඳහා නම?","IUPAC name of CH₃CH₂CHO?","CH₃CH₂CHO பெயர்?",["propanone","propanol","propanal","propanoic acid"],2,"–CHO ඇල්ඩිහයිඩ් කාණ්ඩයයි."],
["CH₃COCH₃ හි ප්‍රධාන කාණ්ඩය කුමක්ද?","Main group in CH₃COCH₃?","CH₃COCH₃ முக்கியக் குழு?",["ketone","aldehyde","acid","ether"],0,"කීටෝන කාණ්ඩය >C=O."],
["–COOH සඳහා ප්‍රධාන ප්‍රත්‍යය?","Suffix for –COOH?","–COOH பின்னொட்டு?",["-ol","-one","-amine","-oic acid"],3,"–COOH සඳහා -oic acid ය."],
["HOCH₂CH₂COOH හි ප්‍රධාන කාණ්ඩය?","Principal group in HOCH₂CH₂COOH?","HOCH₂CH₂COOH முதன்மைக் குழு?",["–OH","–COOH","C=C","–NH₂"],1,"කාබොක්සිලික් අම්ලය ප්‍රධාන කාණ්ඩයයි."]
]),
N(["ඝටනා සමාවයවිකතාව","Constitutional isomerism","அமைப்புச் சமபகுதியம்"],"1.4.1","21–23",
["අණුක සූත්‍රය එකම නමුත් බැඳීම් අනුපිළිවෙළ වෙනස් වන සමාවයවික හඳුනාගන්න.","Compare molecules with the same molecular formula but different connectivity.","ஒரே மூலக்கூற்று வாய்ப்பாட்டுடன் வேறு இணைப்பு அமைப்புகளை ஒப்பிடுக."],
[
["සමාවයවිකතාවේ අර්ථය","එකම අණුක සූත්‍රය ඇති විවිධ සංයෝග සමාවයවික වේ. ඝටනා සමාවයවිකතාවේ පරමාණු එකිනෙක සම්බන්ධ වන අනුපිළිවෙළ වෙනස්ය.","C₄H₁₀: n-butane / 2-methylpropane","Meaning of structural isomers","Same molecular formula, different atom connectivity.","அமைப்புச் சமபகுதியம்","ஒரே மூலக்கூற்று வாய்ப்பாட்டுடன் இணைப்பு முறை வேறுபடும்."],
["දාම සමාවයවිකතාව","ප්‍රධාන කාබන් සැකිල්ල සෘජු දාමය හෝ ශාඛිත දාමය වීමෙන් දාම සමාවයවිකතා ලැබේ. උදාහරණ ලෙස C₅H₁₂ සඳහා දාම සමාවයවික තුනකි.","C₅H₁₂ → pentane / methylbutane / dimethylpropane","Chain isomerism","Different carbon skeletons share the same formula.","சங்கிலிச் சமபகுதியம்","நேர்சங்கிலி அல்லது கிளைச்சங்கிலி அமைப்பு வேறுபடும்."],
["පිහිටුම් සමාවයවිකතාව","එකම කාබන් සැකිල්ලෙහි –OH හෝ බහුබන්ධනය වෙනස් ස්ථානවල පිහිටීමෙන් පිහිටුම් සමාවයවික ලැබේ.","CH₃CH₂CH₂OH ⇄ CH₃CH(OH)CH₃","Position isomerism","A group or multiple bond occupies a different position.","இடச் சமபகுதியம்","ஒரே சங்கிலியில் செயல்குழு அல்லது பிணைப்பின் இடம் மாறும்."],
["ක්‍රියාකාරී කාණ්ඩ සමාවයවිකතාව","එකම අණුක සූත්‍රයට ඇල්කොහොල් හා ඊතර්, හෝ ඇල්ඩිහයිඩ් හා කීටෝන ලෙස වෙනස් කාණ්ඩ තිබිය හැකිය. එවිට රසායනික හැසිරීමද වෙනස් වේ.","C₃H₆O → propanal / propanone","Functional-group isomerism","Compounds share formula but differ in functional group.","செயற்குழுச் சமபகுதியம்","ஒரே வாய்ப்பாடு; ஆனால் வேறு செயற்பாட்டுக் குழுக்கள்."]
],[
["C₄H₁₀ හි n-butane හා isobutane කවර සමාවයවිකද?","Type of isomerism for n-butane/isobutane?","n-butane மற்றும் isobutane வகை?",["chain","optical","geometrical","none"],0,"කාබන් සැකිල්ල වෙනස් නිසා දාම සමාවයවිකතාවයි."],
["propan-1-ol හා propan-2-ol කවර වර්ගයේද?","Isomerism between propan-1-ol and propan-2-ol?","propan-1-ol மற்றும் propan-2-ol?",["functional","position","optical","geometrical"],1,"–OH පිහිටීම වෙනස් වේ."],
["propanal සහ propanone කවර සමාවයවිකද?","Relationship of propanal/propanone?","propanal, propanone வகை?",["chain","position","functional group","enantiomers"],2,"–CHO හා >C=O වෙනස් කාර්ය කාණ්ඩ වේ."],
["සමාවයවික දෙකකට අනිවාර්යයෙන් සමාන වන්නේ කුමක්ද?","What must isomers share?","சமபகுதியங்களுக்கு ஒரேது எது?",["boiling point","reaction type","structure","molecular formula"],3,"අණුක සූත්‍රය එකම වේ."],
["C₅H₁₂ සඳහා දාම සමාවයවික ගණන?","How many constitutional chain isomers for C₅H₁₂?","C₅H₁₂ க்கு சங்கிலிச் சமபகுதியங்கள்?",["2","3","4","5"],1,"n-pentane, 2-methylbutane, 2,2-dimethylpropane."]
]),
N(["ජ්‍යාමිතික සමාවයවිකතාව","Geometrical stereoisomerism","வடிவியல் இடச்சமபகுதியம்"],"1.4.2","23–24",
["C=C නිසා භ්‍රමණය සීමා වීම සහ cis/trans වෙනස්කම් අවබෝධ කරගන්න.","Identify restricted rotation and cis/trans relationships.","C=C இல் சுழற்சி கட்டுப்பாட்டால் உருவாகும் cis/trans வேறுபாடு."],
[
["C=C අවට භ්‍රමණ සීමාව","ද්විත්ව බන්ධනය σ බන්ධනයකින් හා π බන්ධනයකින් සැදි බැවින් බන්ධනය වටා නිදහස් භ්‍රමණය නොහැකිය. එම නිසා එක් සම්බන්ධක පටිපාටියක වෙනස් ත්‍රිමාණ සැකසුම් පවතිය හැකිය.","C=C = 1σ + 1π","Restricted rotation","The π bond prevents free rotation about C=C.","C=C சுழற்சி கட்டுப்பாடு","π பிணைப்பு சுதந்திரச் சுழற்சியைத் தடுக்கிறது."],
["cis / trans පිහිටුම්","2-butene හි methyl කාණ්ඩ දෙක එක පැත්තේ නම් cis-2-butene, විරුද්ධ පැත්තේ නම් trans-2-butene වේ. දෙකේ සූත්‍රය සමාන වුවත් ත්‍රිමාණ සැකැස්ම වෙනස්ය.","cis-but-2-ene ≠ trans-but-2-ene","Cis and trans configurations","Identical groups are on the same or opposite sides of C=C.","cis மற்றும் trans","ஒத்த குழுக்கள் ஒரே பக்கம் அல்லது எதிர்ப்பக்கம் அமைந்துள்ளன."],
["අවශ්‍ය කොන්දේසිය","C=C හි සෑම කාබන් පරමාණුවකටම එකිනෙකට වෙනස් ආදේශක දෙක බැගින් තිබිය යුතුය. CH₂=CH₂ ට cis/trans සමාවයවිකතාව නොමැත.","CH₂=CH₂ → cis/trans නොමැත","Condition for geometrical isomerism","Each alkene carbon must carry two different groups.","வடிவியல் சமபகுதியத்தின் நிபந்தனை","ஒவ்வொரு C=C கார்பனுக்கும் வெவ்வேறு இரண்டு குழுக்கள் தேவை."],
["පරීක්ෂාවට උදාහරණ","but-2-ene ජ්‍යාමිතික සමාවයවික දක්වන නමුත් propene එසේ නොදක්වයි. අණු ඇඳ හෝ ආකෘතිය භ්‍රමණය නොකර සම්බන්ධක පිහිටීම් සසඳන්න.","CH₃–CH=CH–CH₃ : cis/trans","Worked comparison","But-2-ene shows cis/trans, whereas propene does not.","எடுத்துக்காட்டு ஒப்பீடு","but-2-ene இல் cis/trans உள்ளது; propene இல் இல்லை."]
],[
["C=C බැඳීමේ π බන්ධන ගණන කීයද?","Number of π bonds in C=C?","C=C இல் π பிணைப்புகள் எத்தனை?",["0","1","2","3"],1,"C=C යනු σ එකක් හා π එකකි."],
["cis-but-2-ene හි methyl කාණ්ඩ?","Methyl groups in cis-but-2-ene?","cis-but-2-ene இல் மெதில் குழுக்கள்?",["same side","opposite sides","absent","freely rotating"],0,"cis යනු එකම පැත්තේ පිහිටීමයි."],
["cis/trans පෙන්විය හැක්කේ කුමකටද?","Which can show cis/trans?","cis/trans காட்டுவது எது?",["ethene","propene","but-2-ene","methane"],2,"but-2-ene හි දෙපස වෙනස් ආදේශක ඇත."],
["propene ජ්‍යාමිතික සමාවයවික නොදක්වන්නේ ඇයි?","Why is propene not geometrically isomeric?","propene ஏன் cis/trans காட்டாது?",["π නොමැති නිසා","කාබන් නොමැති නිසා","වළලු නිසා","C=C එක පැත්තක H දෙකක් නිසා"],3,"terminal CH₂ හි එකම H දෙක නිසා අවශ්‍ය කොන්දේසිය නැත."],
["cis/trans අණු වල අණුක සූත්‍රය?","Formula for cis/trans isomers?","cis/trans மூலக்கூற்று வாய்ப்பாடு?",["same","different","always ionic","undefined"],0,"ඒවා ත්‍රිමාණ සමාවයවික වේ."]
]),
N(["ප්‍රතිරූපාවයවිකතාව හා දර්පණ ප්‍රතිබිම්බ","Optical isomerism and enantiomers","ஒளியியல் சமபகுதியமும் எதிருருவங்களும்"],"1.4.2","24–25",
["අසමමිතික කාබන් හා එකිනෙක මත නොඅධිස්ථාපනය වන දර්පණ ප්‍රතිබිම්බ පරීක්ෂා කරන්න.","Recognize chiral centers, mirror images and optical activity.","கைரல் மையம், கண்ணாடி எதிருருவம், ஒளியியல் செயற்பாடு."],
[
["අසමමිතික කාබන්","එකිනෙකට වෙනස් කාණ්ඩ හතරකට බැඳුණු sp³ කාබන් පරමාණුවක් අසමමිතික / chiral කාබන් මධ්‍යස්ථානයකි. ඒ වටා කාණ්ඩවල සැකසුම වැදගත්ය.","C*(H)(Cl)(Br)(F)","Chiral carbon","A tetrahedral carbon attached to four different groups can be chiral.","கைரல் கார்பன்","நான்கு வேறுபட்ட குழுக்களுடன் பிணைந்த கார்பன் கைரல் மையமாகும்."],
["ප්‍රතිරූපාවයවික යුගල","දර්පණ ප්‍රතිබිම්බ වූවත් එකිනෙක මත සම්පූර්ණයෙන් අධිස්ථාපනය කළ නොහැකි අණු enantiomers වේ. ඒවායේ ත්‍රිමාණ හැඩයන් වෙනස් වේ.","enantiomer A ⇄ mirror ⇄ enantiomer B","Enantiomer pair","Non-superimposable mirror-image molecules form an enantiomer pair.","எதிருருவச் சோடி","ஒன்றின் மீது ஒன்று பொருந்தாத கண்ணாடி எதிருருக்கள்."],
["තල ධ්‍රැවිත ආලෝකය","ප්‍රතිරූපාවයවික දෙක තල ධ්‍රැවිත ආලෝකය සමාන විශාලත්වයෙන් විරුද්ධ දිශාවලට භ්‍රමණය කරයි. මෙය ප්‍රකාශ ක්‍රියාකාරීතාවයේ ලක්ෂණයකි.","α(A) = −α(B) (එකම කොන්දේසි යටතේ)","Optical rotation","Enantiomers rotate plane-polarized light oppositely under equal conditions.","ஒளியியல் சுழற்சி","எதிருருவங்கள் தளமுனைவுற்ற ஒளியை எதிர்திசைகளில் சுழற்றுகின்றன."],
["cis/trans සහ enantiomers වෙනස","cis/trans වෙනස C=C අවට කාණ්ඩ පිහිටුමට සම්බන්ධය. ප්‍රතිරූපාවයවිකතාව දර්පණ ප්‍රතිබිම්බ නොඅධිස්ථාපනයට සම්බන්ධය. දෙකම ත්‍රිමාණ සමාවයවිකතාවට අයත්ය.","geometrical ≠ optical","Geometrical versus optical","Geometrical isomers differ around restricted bonds; enantiomers are chiral mirrors.","வடிவியல் - ஒளியியல் வேறுபாடு","cis/trans பிணைப்பைச் சாரும்; enantiomer கண்ணாடிப் படிமத்தைச் சாரும்."]
],[
["Chiral C මධ්‍යස්ථානයක කාණ්ඩ කොපමණ වෙනස් විය යුතුද?","How many different groups on a chiral C?","கைரல் C க்கு வேறுபட்ட குழுக்கள்?",["2","3","4","1"],2,"කාණ්ඩ හතරම වෙනස් විය යුතුය."],
["Enantiomers යනු කවරක්ද?","What are enantiomers?","enantiomers என்றால்?",["identical superimposable objects","non-superimposable mirror images","chain isomers","isotopes"],1,"එකිනෙක මත අධිස්ථාපනය කළ නොහැකි දර්පණ ප්‍රතිබිම්බ වේ."],
["Chiral carbon සාමාන්‍යයෙන් කවර ජ්‍යාමිතියකද?","Geometry of a simple chiral carbon?","கைரல் கார்பனின் வடிவம்?",["linear","square planar","bent","tetrahedral"],3,"sp³ කාබන් චතුස්තලීය වේ."],
["Enantiomers දෙකේ ආලෝක භ්‍රමණ දිශා?","Rotation direction for enantiomers?","எதிருருவங்களின் சுழற்சித் திசை?",["opposite","same always","zero always","unrelated"],0,"සමාන කොන්දේසි යටතේ භ්‍රමණ දිශා ප්‍රතිවිරුද්ධය."],
["cis/trans වර්ගයට මූලික හේතුව කුමක්ද?","Main origin of cis/trans isomerism?","cis/trans அடிப்படைக் காரணம்?",["C–H rotation","ionic bonds","restricted C=C rotation","hydrogen bonding"],2,"π බන්ධනය භ්‍රමණය සීමා කරයි."]
])
];
window.U7_CHAPTERS=C;
window.U7_STRUCTURED=[
["ක්‍රියාකාරී කාණ්ඩ සහ සමාවයවිකතාව හඳුනාගැනීම","–OH, –CHO, –COOH, –CONH₂, –NH₂ හඳුනාගැනීම සහ වර්ගීකරණය. C₃H₈O හි ඇල්කොහොල් හා ඊතර් සමාවයවිකතා සසඳන්න.","Identify the functional groups and explain isomerism.","செயற்பாட்டுக் குழுக்களையும் சமபகுதியத்தையும் விளக்குக."],
["ශාඛිත දාම සඳහා IUPAC නාමකරණය","දිගම දාමය තෝරා අංකනය කර 2-methylbutane, 3-ethylhexane වැනි සංයෝග නම් කරන්න.","Name branched molecules by IUPAC rules.","கிளைச் சங்கிலிகளுக்குப் பெயரிடுக."],
["කාණ්ඩ ප්‍රමුඛතාව හා නාමකරණය","–COOH, –OH, >C=O අතර ප්‍රමුඛතාව තෝරා අංක හා උපසර්ග ලියා පැහැදිලි කරන්න.","Explain priority and functional-group suffixes.","செயற்பாட்டுக் குழு முன்னுரிமையை விளக்குக."],
["ජ්‍යාමිතික සහ ප්‍රතිරූපාවයවිකතාව","but-2-ene හි cis/trans හැඩ ඇඳ chiral කාබන් සහ enantiomer වෙනස විස්තර කරන්න.","Compare cis/trans isomerism with enantiomerism.","வடிவியல், ஒளியியல் சமபகுதியங்களை ஒப்பிடுக."]
];
window.U7_ESSAY=[
["කාබනික රසායනයේ කාබන්හි සුවිශේෂත්වය, කාර්ය කාණ්ඩ හා IUPAC පද්ධතිය පැහැදිලි කරන්න.","සිව්සංයුජතාව, දාමකරණය, බන්ධන ශක්තිය, කාර්ය කාණ්ඩ, දිගම සුදුසු දාමය, අවම ස්ථාන අංක, ප්‍රමුඛතා අනුපිළිවෙළ සඳහන් කරන්න.","Explain carbon chemistry, functional groups and nomenclature.","கார்பனின் பண்புகள், குழுக்கள், IUPAC விதிகளை விளக்குக."],
["සමාවයවිකතාව වර්ගීකරණය කර සූත්‍ර සහිතව උදාහරණ දෙන්න.","දාම, පිහිටුම්, කාර්ය කාණ්ඩ, cis/trans සහ ප්‍රතිරූපාවයවිකතා අතර වෙනස්කම් උදාහරණ සමඟ ලියන්න.","Classify and illustrate structural and stereoisomerism.","அமைப்பு, இடவியல் சமபகுதியங்களை உதாரணங்களுடன் விளக்குக."]
];
})();
