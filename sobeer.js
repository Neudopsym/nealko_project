var BARS=[
  {id:1,name:"Cafe v lese",district:"Vršovice",hood:"Praha 10",type:"Bar",serve:"Čepované",garden:"Ne",food:"Ne",craft:"Craft",beers:[{name:"Chříč Balanc 0% IPA",cat:"Craft",serve:"Čepované"},{name:"Paulaner Weissbier 0%",cat:"Tradiční",serve:"Lahvové"},{name:"Birell",cat:"Birell",serve:"Lahvové"}],hours:"Pondělí 16–2\nÚterý 16–2\nStředa 16–2\nČtvrtek 16–2\nPátek 16–2\nSobota 16–2\nNeděle 16–0",address:"Krymská 12, 101 00 Praha 10 – Vršovice",desc:"Moderní kulturní prostor a kavárna v srdci Vršovic, která kombinuje retro interiér s živým hudebním a společenským programem. Nabízí neformální atmosféru pro setkávání u kávy nebo drinku s možností návštěvy koncertů a performancí v podzemním klubu.",lat:50.0713476,lng:14.448464},
  {id:2,name:"Dejvická Sokolovna",district:"Dejvice",hood:"Praha 6",type:"Restaurace",serve:"Čepované",garden:"Ne",food:"Ano",craft:"Birell",beers:[{name:"Birell",cat:"Birell",serve:"Čepované"}],hours:"Pondělí 10:30–23\nÚterý 10:30–23\nStředa 10:30–0\nČtvrtek 10:30–15\nPátek 10:30–0\nSobota 11–23\nNeděle 11–22",address:"Dejvická 181/2, 160 00 Praha 6 – Dejvice",desc:"Moderní česká restaurace s více než stoletou tradicí, která se zaměřuje na poctivou domácí kuchyni a čepované tankové pivo. Nabízí neformální atmosféru klasické pivnice / hospody v příjemném moderním interiéru.",lat:50.0980662,lng:14.4047094},
  {id:3,name:"Automat Matuška Hradčanská",district:"Dejvice",hood:"Praha 6",type:"Bar",serve:"Čepované",garden:"Ano",food:"Ano",craft:"Craft",beers:[{name:"Bylinný Střízlivec",cat:"Craft",serve:"Čepované"},{name:"Preisler-Motuečka",cat:"Craft",serve:"Čepované"}],hours:"Pondělí 11:30–0\nÚterý 11:30–0\nStředa 11:30–0\nČtvrtek 11:30–0\nPátek 11:30–0\nSobota 12–0\nNeděle 12–22",address:"Dejvická 184/4, 160 00 Praha 6 – Dejvice",desc:"Moderní řemeslný výčep a bistro zaměřené na prezentaci piva z rodinného pivovaru Matuška a kvalitní street food. Nabízí minimalistický design s vysokým standardem servisu, kde se klade důraz na čerstvost piva a párování s moderní gastronomií.",lat:50.0980426,lng:14.4042846},
  {id:4,name:"Automat Matuška JZP",district:"Vinohrady",hood:"Praha 3",type:"Bar",serve:"Čepované",garden:"Ne",food:"Ano",craft:"Craft",beers:[{name:"Bylinný Střízlivec",cat:"Craft",serve:"Čepované"}],hours:"Pondělí 11:30–0\nÚterý 11:30–0\nStředa 11:30–0\nČtvrtek 11:30–0\nPátek 11:30–0\nSobota 12–0\nNeděle 12–22",address:"nám. J. z Poděbrad 16, 130 00 Praha 3 – Vinohrady",desc:"Mladší bratr dejvického Automatu. Moderní řemeslný výčep a bistro zaměřené na prezentaci piva z rodinného pivovaru Matuška a kvalitní street food. Nabízí minimalistický design s vysokým standardem servisu, kde se klade důraz na čerstvost piva a párování s moderní gastronomií.",lat:50.078140,lng:14.452252},
  {id:5,name:"Dva Kohouti",district:"Karlín",hood:"Praha 8",type:"Bar",serve:"Čepované",garden:"Ano",food:"Ano",craft:"Craft",beers:[{name:"Elektrárna Proovan IPA",cat:"Craft",serve:"Čepované"}],hours:"Pondělí 15–1\nÚterý 15–1\nStředa 15–1\nČtvrtek 15–1\nPátek 15–1\nSobota 12–1\nNeděle 12–22",address:"Sokolovská 81/55, 186 00 Praha 8 – Karlín",desc:"Inovativní koncept spojující řemeslný pivovar s výčepem přímo v srdci Karlína. Nabízí živou, neformální atmosféru s důrazem na čerstvě uvařené pivo a sdílený prostor, který se během dne mění z klidného dvora na rušné společenské centrum.s",lat:50.09349,lng:14.4468455},
  {id:6,name:"U Sadu",district:"Žižkov",hood:"Praha 3",type:"Hospoda",serve:"Lahvové",garden:"Ano",food:"Ano",craft:"Birell",beers:[{name:"Birell",cat:"Birell",serve:"Lahvové"}],hours:"Pondělí 8–2\nÚterý 8–4\nStředa 8–4\nČtvrtek 8–4\nPátek 8–4\nSobota 8–4\nNeděle 8–2",address:"Škroupovo nám. 1282/5, 130 00 Praha 3 – Žižkov",desc:"Tradiční žižkovská restaurace a bar s téměř nepřetržitým provozem, který je kultovním místem pražské undergroundové scény. Nabízí unikátní interiér plný historických artefaktů, širokou nabídku české i mezinárodní kuchyně včetně snídaní a výběr z čepovaných piv i belgických lahvových speciálů.",lat:50.0805308,lng:14.4492094},
  {id:7,name:"U Houdků",district:"Žižkov",hood:"Praha 3",type:"Hospoda",serve:"Čepované",garden:"Ano",food:"Ano",craft:"Birell",beers:[{name:"Birell",cat:"Birell",serve:"Čepované"}],hours:"Pondělí 11–0\nÚterý 11–0\nStředa 11–0\nČtvrtek 11–0\nPátek 11–0\nSobota 11–0\nNeděle 11–23",address:"Bořivojova 693/110, 130 00 Praha 3 – Žižkov",desc:"Tradiční pražská restaurace na Žižkově s historií sahající do roku 1923, která je vyhlášená nadstandardními porcemi klasické české kuchyně. Nabízí autentické prostředí staré Prahy a vyhledávanou letní zahrádku v klidném vnitrobloku.",lat:50.0824601,lng:14.445716},
  {id:8,name:"U Habásků",district:"Žižkov",hood:"Praha 3",type:"Hospoda",serve:"Lahvové",garden:"Ne",food:"Drobné občerstvení",craft:"Birell",beers:[{name:"Birell",cat:"Birell",serve:"Lahvové"}],hours:"Pondělí 16–0\nÚterý 16–0\nStředa 16–0\nČtvrtek 16–0\nPátek 16–2\nSobota 16–2\nNeděle 16–23",address:"Husinecká 29, 130 00 Praha 3 – Žižkov",desc:"Klasická žižkovská sousedská hospoda s domáckou atmosférou, která si zachovává ráz poctivého lokálního podniku. Nabízí tradicni výčep, jednoduchou kuchyni a klidné zázemí pro stálé hosty i návštěvníky hledající klid mimo hlavní turistické trasy.",lat:50.0858298,lng:14.4464288},
  {id:9,name:"Dno Pytle",district:"Vinohrady",hood:"Praha 2",type:"Hospoda",serve:"Čepované",garden:"Ne",food:"Drobné občerstvení",craft:"Craft",beers:[{name:"Podle aktuální nabídky",cat:"Craft",serve:"Čepované"},{name:"Podle aktuální nabídky",cat:"Craft",serve:"Lahvové"}],hours:"Pondělí 16–23\nÚterý 16–1\nStředa 16–1\nČtvrtek 16–1\nPátek 16–1\nSobota 18–1\nNeděle 18–23",address:"Vinohradská 63, 120 00 Praha 2 – Vinohrady",desc:"Moderní nekuřácká pivnice v centru Prahy zaměřená na prezentaci produktů z českých i zahraničních minipivovarů. Na osmi pípách nabízí pravidelně obměňovanou nabídku pivních speciálů, kterou doplňuje široký výběr lahvových piv a plechovek od různých craftových pivovarů a několik druhů kvalitních klobás na grilu.",lat:50.0771063,lng:14.4428117},
  {id:10,name:"Pivovar Uhříněves",district:"Uhříněves",hood:"Praha 22",type:"Restaurace",serve:"Čepované",garden:"Ano",food:"Ano",craft:"Craft",beers:[{name:"Alois Šofér",cat:"Craft",serve:"Čepované"},{name:"Alois Šofér",cat:"Craft",serve:"Lahvové"}],hours:"Pondělí 11–23\nÚterý 11–23\nStředa 11–23\nČtvrtek 11–23\nPátek 11–23\nSobota 11–23\nNeděle 11–22",address:"K Sokolovně 38, 104 00 Praha 22 – Uhříněves",desc:"Tradiční restaurace Pivovaru Uhříněves, která se zaměřuje na poctivou českou kuchyni a vlastní nepasterizovaná piva včetně nealko varianty. Nabízí prostorný rustikální interiér a klidnou venkovní zahrádku, ideální pro rodinné obědy i větší společenská setkání.",lat:50.0296992,lng:14.6049522},
  {id:11,name:"Fatfuck Vinohradská",district:"Vinohrady",hood:"Praha 2",type:"Restaurace",serve:"Čepované",garden:"Ano",food:"Ano",craft:"Craft",beers:[{name:"Alois Šofér",cat:"Craft",serve:"Čepované"}],hours:"Pondělí Zavřeno\nÚterý 12–22\nStředa 12–22\nČtvrtek 12–22\nPátek 12–22\nSobota 12–22\nNeděle 10–21",address:"Vinohradská 1241/67, 120 00 Praha 2 – Vinohrady",desc:"Moderní bistro na Vinohradech specializované na autentické „smashed“ burgery připravované z prémiových surovin. Nabízí minimalistický, dynamický koncept s důrazem na kvalitu masa a domácí dresinky, doplněný o čepované pivo z Pivovaru Uhříněves včetně jejich nealkoholického piva Alois Šofér.",lat:50.0771324,lng:14.4435489},
  {id:12,name:"Kasárny Karlín",district:"Karlín",hood:"Praha 8",type:"Bar",serve:"Čepované",garden:"Ano",food:"Ano",craft:"Tradiční",beers:[{name:"Bakalář nealko",cat:"Tradiční",serve:"Čepované"},{name:"Maisel´s IPA Alkoholfrei",cat:"Tradiční",serve:"Lahvové"}],hours:"Pondělí 11:30–16\nÚterý 11:30–22\nStředa 11:30–22\nČtvrtek 11:30–22\nPátek 11:30–22\nSobota 11:30–22\nNeděle 11:30–22",address:"Prvního pluku 20/2, 186 00 Praha 8 – Karlín",desc:"Kulturní oáza v srdci Karlína, kde se vojenská přísnost proměnila v uvolněný prostor pro film, hudbu a setkávání. Na rozlehlém nádvoří Kasáren chutná pivo nejlépe pod širým nebem, ať už sedíte u ohniště nebo v letním kině. K téhle unikátní industriální atmosféře si tu můžete vždycky dát poctivé nealko. Ideální bod pro dlouhé letní večery, kdy zážitek nepotřebuje žádná promile.",lat:50.090058,lng:14.443827},
  {id:13,name:"elpíčko",district:"Libeň",hood:"Praha 8",type:"Bar",serve:"Čepované",garden:"Ano",food:"Ano",craft:"Craft",beers:[{name:"Birell",cat:"Birell",serve:"Lahvové"},{name:"Vinohradská 12 nealko",cat:"Craft",serve:"Čepované"}],hours:"Pondělí 16–1\nÚterý 16–1\nStředa 16–1\nČtvrtek 16–1\nPátek 16–1\nSobota 16–1\nNeděle 16–23",address:"Zenklova 305/11, 180 00 Praha 8 – Libeň",desc:"Skutečná oáza uprostřed rustikální Palmovky. V létě nabízí velkorysou zahrádku pro nekonečný chill a v zimě stylový suterénní bar, kde pochopíš, proč je tohle místo legendou. V nabídce mají kromě birella nealko novinku z Vinohradského pivovaru. Je to ideální bod pro každého, kdo hledá poctivé pití a jedinečnou atmosféru.",lat:50.103903,lng:14.472795},
  {id:14,name:"Vršovická zahrada",district:"Vršovice",hood:"Praha 10",type:"Bar",serve:"Čepované",garden:"Ano",food:"Ano",craft:"Craft",beers:[{name:"Vinohradská 12 nealko",cat:"Craft",serve:"Čepované"},{name:"Vinohradská Hazy Galaxy IPA",cat:"Craft",serve:"Čepované"}],hours:"Pondělí 15–22\nÚterý 15–22\nStředa 15–22\nČtvrtek 15–22\nPátek 15–22\nSobota 15–22\nNeděle 15–22",address:"Francouzská 246/84, 101 00 Praha 10 – Vršovice",desc:"Venkovní bar ležící uprostřed komunitní zahrady přímo na zastávce MHD „Krymská“. Nabízí uvolněné prostředí pro relaxaci, sousedská setkávání, kulturní akce pod širým nebem a komunitní besedy či workshopy s tématikou udržitelnosti, doplněný o nealko nabídku z Vinohradského pivovaru včetně jejich Nealko 12 a Hazy Galaxy IPA.",lat:50.071759,lng:14.447624},
  {id:15,name:"Pivní jistota",district:"Dejvice",hood:"Praha 6",type:"Hospoda",serve:"Čepované",garden:"Ano",food:"Drobné občerstvení",craft:"Craft",beers:[{name:"Podle aktuální nabídky",cat:"Craft",serve:"Čepované"},{name:"Podle aktuální nabídky",cat:"Craft",serve:"Lahvové"}],hours:"Pondělí 15–23:59\nÚterý 15–23:59\nStředa 15–23:59\nČtvrtek 15–23:59\nPátek 15–23:59\nSobota 15–23:59\nNeděle 15–22",address:"Kyjevská 3, 160 00 Praha 6 – Dejvice",desc:"Moderní pivotéka a bar v Dejvicích jen pár kroků od \"kulaťáku\" a metra Dejvická zaměřený na řemeslná piva včetně nealka z českých i zahraničních pivovarů. Nabízí široký výběr na čepu i v lahvích s neustále se měnící nabídkou.",lat:50.098718,lng:14.398013},
  {id:16,name:"BeerGeek Bar",district:"Vinohrady",hood:"Praha 3",type:"Bar",serve:"Čepované",garden:"Ne",food:"Ano",craft:"Craft",beers:[{name:"Podle aktuální nabídky",cat:"Craft",serve:"Čepované"},{name:"podle aktuální nabídky",cat:"Craft",serve:"Lahvové"}],hours:"Pondělí 15–2\nÚterý 15–2\nStředa 15–2\nČtvrtek 15–2\nPátek 15–2\nSobota 15–2\nNeděle 15–2",address:"Vinohradská 988/62, 130 00 Praha 3 – Vinohrady",desc:"Legendární pivní bar na Vinohradech, který patří ke špičce pražské pivní scény s neustále se měnící nabídkou. Nabízí moderní industriální prostředí a obrovský výběr českých i světových speciálů, doplněný o stálou nabídku špičkových řemeslných nealko piv na čepu i v lahvích. Pod značku BeerGeek spadá i pivotéka, ležící v ulici Slavíkova, na opačné straně náměstí Jiřího z Poděbrad.",lat:50.077073,lng:14.449963},
  {id:17,name:"BeerGeek Pivotéka",district:"Žižkov",hood:"Praha 3",type:"Bar",serve:"Čepované",garden:"Ne",food:"Ne",craft:"Craft",beers:[{name:"Podle aktuální nabídky",cat:"Craft",serve:"Čepované"},{name:"Podle aktuální nabídky",cat:"Craft",serve:"Lahvové"}],hours:"Pondělí 11–21\nÚterý 11–21\nStředa 11–21\nČtvrtek 11–21\nPátek 11–21\nSobota 11–21\nNeděle 15–21",address:"Slavíkova 1047/10, 130 00 Praha 3 – Žižkov",desc:"Vyhlášená žižkovská pivotéka v ulici Slavíkova, která nabízí jeden z největších výběrů řemeslných piv v Praze nedaleko stejnojmenného baru a možnost menšího posezení a ochutnávky. V regálech i chladicích boxech skrývá množství pečlivě vybraných lahví a plechovek od předních českých i světových minipivovarů, včetně bohatého zastoupení špičkových nealkoholických speciálů a ochotného personálu, který s výběrem vždy poradí.",lat:50.079334,lng:14.448189},
  {id:18,name:"Skautský institut v Rybárně",district:"Malá Strana",hood:"Praha 1",type:"Bar",serve:"Čepované",garden:"Ano",food:"Ano",craft:"Craft",beers:[{name:"Clock Krystus nealko IPA",cat:"Craft",serve:"Čepované"},{name:"Maisel´s Weisse alkoholfrei",cat:"Tradiční",serve:"Lahvové"}],hours:"Pondělí 10–23\nÚterý 10–23\nStředa 10–23\nČtvrtek 10–23\nPátek 10–23\nSobota 10–23\nNeděle 10–23",address:"U Sovových mlýnů 134/1, 118 00 Praha 1 – Malá Strana",desc:"Komunitní centrum a bar v historickém domečku na břehu Vltavy na Kampě. Nabízí klidné kreativní prostředí pro odpočinek, kulturní akce a sousedská setkávání, doplněný o stálou nabídku poctivého nealka, denních polévek, salátů, sendvičů a dalších pochoutek k zakousnutí.",lat:50.082914,lng:14.408065},
  {id:19,name:"Cafe club Míšeňská",district:"Malá Strana",hood:"Praha 1",type:"Bar",serve:"Čepované",garden:"Ano",food:"Drobné občerstvení",craft:"Craft",beers:[{name:"Vinohradská 12 nealko",cat:"Craft",serve:"Čepované"},{name:"Chříč Balanc 0% IPA",cat:"Craft",serve:"Lahvové"}],hours:"Pondělí 10–0\nÚterý 10–0\nStředa 10–0\nČtvrtek 10–0\nPátek 10–0\nSobota 10–0\nNeděle 10–0",address:"Míšeňská 71/3, 118 00 Praha 1 – Malá Strana",desc:"Skrytý kavárenský bar v historickém domě s malebným dvorkem jen pár kroků od Karlova mostu. Nabízí jedinečnou, intimní atmosféru staré Prahy, skvělou kávu a večerní drinky, doplněný o pečlivě vybranou nabídku nealkoholických alternativ a drobných pochutin.",lat:50.087644,lng:14.408038},
  {id:20,name:"Lasagneria Holešovice",district:"Holešovice",hood:"Praha 7",type:"Restaurace",serve:"Lahvové",garden:"Ne",food:"Ano",craft:"Craft",beers:[{name:"Kocour Tom Cat - Nealko",cat:"Craft",serve:"Lahvové"}],hours:"Pondělí 11–21\nÚterý 11–21\nStředa 11–21\nČtvrtek 11–21\nPátek 11–21\nSobota 11–21\nNeděle Zavřeno",address:"Komunardů 26, 170 00 Praha 7 – Holešovice",desc:"Autentická italská lasagnerie v srdci Holešovic vsázející na poctivou ruční výrobu domácích lasagní. V moderním interiéru kousek od tramvaje nabízí masovou klasiku, prémiové verze s pistáciovým pestem i vegetariánské alternativy, doplněné o skvělé tiramisu a řemeslné nealko pivo z minipivovaru Kocour.",lat:50.103358,lng:14.450168},
  {id:21,name:"Pivní rozmanitost",district:"Žižkov",hood:"Praha 3",type:"Hospoda",serve:"Čepované",garden:"Ano",food:"Ne",craft:"Craft",beers:[{name:"Podle aktuální nabídky",cat:"Craft",serve:"Čepované"},{name:"Podle aktuální nabídky",cat:"Craft",serve:"Lahvové"}],hours:"Pondělí 15–22\nÚterý 15–22\nStředa 15–22\nČtvrtek 15–22\nPátek 14–23\nSobota 15–23\nNeděle Zavřeno",address:"Hartigova 1819, 130 00 Praha 3 – Žižkov",desc:"Tradiční žižkovský bar a skvěle zásobená pivotéka v jednom, ležící přímo u vozovny Žižkov. Nabízí příjemné, neformální prostředí s rotujícími pípami plnými českých i zahraničních řemeslných speciálů, které doplňují stovky druhů piv v lahvích a plechovkách z chladicích boxů k okamžitému osvěžení nebo odnesení domů.",lat:50.091520,lng:14.473659},
  {id:22,name:"Betlemska club",district:"Staré Město",hood:"Praha 1",type:"Bar",serve:"Lahvové",garden:"Ano",food:"Ne",craft:"Tradiční",beers:[{name:"Budvar nealko",cat:"Tradiční",serve:"Lahvové"},{name:"Maisel´s Weisse alkoholfrei",cat:"Tradiční",serve:"Lahvové"},{name:"Maisel´s Weisse alkoholfrei",cat:"Tradiční",serve:"Lahvové"}],hours:"Pondělí 11–22\nÚterý 11–22\nStředa 11–22\nČtvrtek 11–22\nPátek 11–22\nSobota 11–22\nNeděle 11–22",address:"Betlémské nám. 5a, 110 00 Praha 1 – Staré Město",desc:"Osobitá umělecká kavárna a bar od tvůrců holešovické Burzy #4, situovaná přímo v areálu Betlémské kaple. Nový multikulturní projekt v historickém centru Prahy spojuje skvělou kávu, večerní drinky a uvolněnou sousedskou atmosféru s pravidelnými jam sessions a komunitními akcemi s jedinečným géniem loci Starého Města.",lat:50.084483,lng:14.417897},
  {id:23,name:"Beer Bar Manifesto",district:"Smíchov",hood:"Praha 5",type:"Bar",serve:"Čepované",garden:"Ano",food:"Drobné občerstvení",craft:"Craft",beers:[{name:"Birell",cat:"Birell",serve:"Čepované"},{name:"Clock Krystus nealko IPA",cat:"Craft",serve:"Lahvové"}],hours:"Pondělí 11–22\nÚterý 11–22\nStředa 11–22\nČtvrtek 11–0\nPátek 11–0\nSobota 11–0\nNeděle 11–22",address:"Ostrovského 34, 150 00 Praha 5 – Smíchov",desc:"Moderní pivní bar v areálu Manifesto Marketu na Andělu, který nabízí posezení pod širým nebem v živém designovém prostředí populárního food marketu. Na čepu najdete skvěle ošetřený Birell a v chladicích boxech nekompromisní řemeslný nealko speciál v podobě lahvové IPA Krystus z řemeslného pivovaru Clock, což z baru dělá ideální zastávku pro milovníky dobrého piva i bez kapky alkoholu.",lat:50.069299,lng:14.404127},
  {id:24,name:"Bullerbyn",district:"Vinohrady",hood:"Praha 2",type:"Bar",serve:"Čepované",garden:"Ne",food:"Ano",craft:"Craft",beers:[{name:"Podle aktuální nabídky",cat:"Craft",serve:"Čepované"}],hours:"Pondělí 14–1\nÚterý 14–1\nStředa 14–1\nČtvrtek 14–1\nPátek 14–1\nSobota 11–1\nNeděle 11–0",address:"Chodská 17, 120 00 Praha 2 – Vinohrady",desc:"Stylový vinohradský bar s uvolněnou atmosférou, kde přes den servírují menší stálé menu a večer skvělé drobnosti k pivu. Interiér nabízí příjemné prostředí, které doplňuje pečlivě ošetřené řemeslné pivo na čepu, včetně měnících se nealkoholických speciálů podle aktuální nabídky.",lat:50.074567,lng:14.445674},
  {id:25,name:"Bar Hvězda",district:"Vinohrady",hood:"Praha 2",type:"Bar",serve:"Čepované",garden:"Ano",food:"Ano",craft:"Tradiční",beers:[{name:"Bernard Švestka Nealko",cat:"Tradiční",serve:"Čepované"},{name:"Bakalář Nealko",cat:"Tradiční",serve:"Lahvové"}],hours:"Pondělí 10–0:30\nÚterý 10–0:30\nStředa 10–0:30\nČtvrtek 10–0:30\nPátek 10–0:30\nSobota 10–0:30\nNeděle 10–0:30",address:"Polská 1, 120 00 Praha 2 – Vinohrady",desc:"Stylový vinohradský bar v Riegrových sadech s uvolněnou sousedskou atmosférou a moderním interiérem, který v létě doplňuje velmi příjemná terasa. Kromě skvěle ošetřeného piva, a to včetně nealko variant, nabízejí také menší stálou nabídku teplého jídla a skvělých sendvičů k zakousnutí.",lat:50.078862,lng:14.442026},
  {id:26,name:"Unijazz",district:"Žižkov",hood:"Praha 3",type:"Bar",serve:"Lahvové",garden:"Ano",food:"Drobné občerstvení",craft:"Craft",beers:[{name:"Clock Krystus nealko IPA",cat:"Craft",serve:"Lahvové"},{name:"Birell",cat:"Birell",serve:"Lahvové"},{name:"Bernard",cat:"Tradiční",serve:"Lahvové"}],hours:"Pondělí 14–23\nÚterý 14–23\nStředa 14–23\nČtvrtek 14–23\nPátek 14–23\nSobota 16–0\nNeděle Zavřeno",address:"Husitská 22, 130 00 Praha 3 – Žižkov",desc:"Unijazz na Žižkově je legendární kulturní a společenské centrum s nezaměnitelnou, uvolněnou atmosférou a útulným interiérem. Jako rychlé jídlo k zakousnutí nabízejí skvělé sendviče a čerstvé bagety. V nabídce nápojů navíc najdete široký výběr lahvových nealko variant, kterým dominuje famózní nealkoholický speciál Clock Krystus.",lat:50.087186,lng:14.441133},
  {id:27,name:"Lampičky",district:"Žižkov",hood:"Praha 3",type:"Restaurace",serve:"Lahvové",garden:"Ano",food:"Ano",craft:"Tradiční",beers:[{name:"Krušovice nealko",cat:"Tradiční",serve:"Lahvové"}],hours:"Pondělí 11–23\nÚterý 11–23\nStředa 11–23\nČtvrtek 11–23\nPátek 11–23\nSobota 11–23\nNeděle 11–23",address:"Hartigova 1886/173, 130 00 Praha 3 – Žižkov",desc:"Příjemná restaurace na Žižkově, kterou najdete v těsné blízkosti Jarovských kolejí, populární především pro své skvělé a šťavnaté burgry. K dobrému jídlu zde navíc jako osvěžující nealko variantu nabízejí lahvové nealko Krušovice.",lat:50.092428,lng:14.481047},
  {id:28,name:"Přístav 18600",district:"Karlín",hood:"Praha 8",type:"Bar",serve:"Čepované",garden:"Ano",food:"Ne",craft:"Birell",beers:[{name:"Birell",cat:"Birell",serve:"Čepované"},{name:"Birell",cat:"Birell",serve:"Lahvové"}],hours:"Pondělí 11–23\nÚterý 11–23\nStředa 11–23\nČtvrtek 11–23\nPátek 11–23\nSobota 10–23\nNeděle 10–23",address:"Rohanský ostrov 8, 186 00 Praha 8 – Karlín",desc:"Přístav 18600 v Karlíně je jedinečný open-air prostor na břehu Vltavy, který kombinuje uvolněnou atmosféru letního kulturního centra s oázou klidu uprostřed města. Tento oblíbený plácek pod širým nebem je ideálním místem pro setkání s přáteli, drink po práci nebo odpočinek u řeky. Vedle klasického piva a osvěžujících drinků mají na čepu také točené nealko v podobě Birellu. Vlastní kuchyni sice nemají, ale hlad zde spolehlivě zaženou foodtrucky, které v areálu nepravidelně fungují, nebo nabízejí možnost využití venkovních grillů.",lat:50.095823,lng:14.447490},
  {id:29,name:"Cafe Barrandé",district:"Žižkov",hood:"Praha 3",type:"Hospoda",serve:"Lahvové",garden:"Ano",food:"Drobné občerstvení",craft:"Tradiční",beers:[{name:"Bakalář Nealko",cat:"Tradiční",serve:"Lahvové"}],hours:"Pondělí Zavřeno\nÚterý 16–22\nStředa 16–22\nČtvrtek 16–22\nPátek 16–22\nSobota Zavřeno\nNeděle Zavřeno",address:"Ježkova 8, 130 00 Praha 3 – Žižkov",desc:"Café Barrande na Žižkově je kouzelný rodinný bar s nostalgickou atmosférou, dobovým interiérem a swingovou hudbou. Podnik pravidelně ožívá kulturními akcemi a v létě láká na klidnou zahrádku ve vnitrobloku. Vedle poctivých koktejlů a kvalitních vín nabízí jako nealko variantu také lahvového Bakaláře.",lat:50.081878,lng:14.446070},
  {id:30,name:"Čep&Pec",district:"Nusle",hood:"Praha 2",type:"Bar",serve:"Čepované",garden:"Ne",food:"Ano",craft:"Craft",beers:[{name:"Podle aktuální nabídky",cat:"Craft",serve:"Čepované"}],hours:"Pondělí 15–0\nÚterý 15–0\nStředa 15–0\nČtvrtek 15–0\nPátek 15–0\nSobota 15–0\nNeděle 15–22",address:"Svatoplukova 528, 128 00 Praha 2 – Nusle",desc:"Čep&Pec v Nuslích je příjemný rodinný podnik, který originálně spojuje výčep a řemeslnou pekárnu. V autentické atmosféře si zde vychutnáte pestrou škálu piv z malých pivovarů, čerstvé pečivo a poctivé jídlo připravované výhradně z lokálních surovin od místních zemědělců. K občerstvení můžete ochutnat také řemeslné nealkoholické speciály.",lat:50.065814,lng:14.429984},
  {id:31,name:"Břevnovský klášterní pivovar",district:"Břevnov",hood:"Praha 6",type:"Restaurace",serve:"Čepované",garden:"Ano",food:"Ano",craft:"Craft",beers:[{name:"Benedict nealko",cat:"Craft",serve:"Čepované"},{name:"Benedict nealko",cat:"Craft",serve:"Lahvové"}],hours:"Pondělí 11:30–23\nÚterý 11:30–23\nStředa 11:30–23\nČtvrtek 11:30–23\nPátek 11:30–23\nSobota 11:30–23\nNeděle 11:30–23",address:"Markétská 1/28, 169 00 Praha 6 – Břevnov",desc:"Břevnovský klášter, nejstarší mužský klášter v Čechách, je již od svého vzniku v roce 993 úzce spjatý s výrobou piva. Ke klášteru se totiž váže vůbec první písemná zmínka o vaření piva na českém území. Pivovar zde fungoval s několika přestávkami až do roku 1889. Na tuto dlouhou tradici navazuje nový pivovar vybudovaný v roce 2011, který kromě poctivých alkoholických ležáků a speciálů vaří také své vlastní vynikající nealkoholické pivo Nealko Benedict.",lat:50.083777,lng:14.356343},
  {id:32,name:"Krčma u Sváry",district:"Hodkovičky",hood:"Praha 4",type:"Bar",serve:"Čepované",garden:"Ano",food:"Drobné občerstvení",craft:"Tradiční",beers:[{name:"Lobkowicz nealko",cat:"Tradiční",serve:"Čepované"}],hours:"Pondělí Zavřeno\nÚterý Zavřeno\nStředa 15–21\nČtvrtek 15–21\nPátek 15–21\nSobota 12–22\nNeděle 12–20",address:"Lodnická 1, 147 00 Praha 4 – Hodkovičky",desc:"Neformální venkovní okénko s přilehlým posezením v Hodkovičkách, které láká kolemjdoucí i cyklisty na orosené pivo. K pití nabízí klasické hospodské chuťovky k zakousnutí. Ideální zastávka pro letní osvěžení během procházky podél Vltavy, kde si na své přijdou i řidiči či sportovci – na čepu je pro ně připraveno osvěžující nealkoholické pivo Lobkowicz.",lat:50.023821,lng:14.398109},
  {id:33,name:"Avoid Floating Gallery",district:"Nové Město",hood:"Praha 2",type:"Bar",serve:"Čepované",garden:"Ano",food:"Drobné občerstvení",craft:"Craft",beers:[{name:"Podle aktuální nabídky",cat:"Craft",serve:"Čepované"}],hours:"Pondělí 16–0\nÚterý 16–0\nStředa 16–0\nČtvrtek 16–0\nPátek 16–0\nSobota 14–0\nNeděle 14–0",address:"Rašínovo nábř. 2, 120 00 Praha 2 – Nové Město",desc:"Unikátní plovoucí bar a galerie na pražské Náplavce, kde se skvěle kloubí kulturní zážitky s relaxací na vlnách. Kromě koncertů a výstav nabízí pravidelně se střídající craftová piva z malých pivovarů, která si nejlépe vychutnáte na otevřené palubě při západu slunce nad Hradčany. Vedle alkoholických speciálů je na čepu pokaždé připravena také plnohodnotná řemeslná nealko varianta podle aktuální rotující nabídky.",lat:50.067714,lng:14.414487},
  {id:34,name:"Barcelounoc",district:"Vinohrady",hood:"Praha 2",type:"Bar",serve:"Čepované",garden:"Ne",food:"Drobné občerstvení",craft:"Craft",beers:[{name:"Vinohradská 12 nealko",cat:"Craft",serve:"Čepované"}],hours:"Pondělí 18–2\nÚterý 18–2\nStředa 18–2\nČtvrtek 18–2\nPátek 18–3\nSobota 18–3\nNeděle 18–2",address:"J. Masaryka 265/58, 120 00 Praha 2 – Vinohrady",desc:"Živý vinohradský bar s uvolněnou noční atmosférou, kam můžete zajít na skvělý drink i poctivé lokální pivo. Pro ty, kteří dávají přednost nealkoholické variantě a chtějí si užít večer naplno, mají na čepu vedle vždy výbornou řemeslnou nulu Vinohradská 12 nealko z nedalekého Vinohradského pivovaru.",lat:50.072778,lng:14.441478},
  {id:35,name:"Dish Belgická",district:"Vinohrady",hood:"Praha 2",type:"Restaurace",serve:"Čepované",garden:"Ne",food:"Ano",craft:"Tradiční",beers:[{name:"Maisel´s Weisse alkoholfrei",cat:"Tradiční",serve:"Čepované"}],hours:"Pondělí 11–23\nÚterý 11–23\nStředa 11–23\nČtvrtek 11–23\nPátek 11–23\nSobota 11–23\nNeděle 12–22",address:"Belgická 335/26, 120 00 Praha 2 – Vinohrady",desc:"Legendární pražská burgrárna vyhlášené svými vyladěnými gurmánskými burgery a precizním servisem. K těžšímu šťavnatému masu zde geniálně pasuje čepované nealkoholické pšeničné pivo Maisel's Weisse, které celé jídlo skvěle osvěží, odlehčí a představuje ideální řemeslnou nealko alternativu k alkoholickým ležákům na lístku.",lat:50.073056,lng:14.436189},
  {id:36,name:"Bistro Karel",district:"Troja",hood:"Praha 7",type:"Restaurace",serve:"Čepované",garden:"Ano",food:"Ano",craft:"Craft",beers:[{name:"Clock Krystus nealko IPA",cat:"Craft",serve:"Čepované"},{name:"Clock Nana nealko sour ale",cat:"Craft",serve:"Čepované"}],hours:"Pondělí Zavřeno\nÚterý 9–22\nStředa 9–22\nČtvrtek 9–22\nPátek 9–22\nSobota 9–22\nNeděle 9–20",address:"U Trojského zámku 2/6, 171 00 Praha 7 – Troja",desc:"Stylové a moderní bistro situované v bezprostřední blízkosti Trojského zámku, obklopené zelení. Je to ideální oáza pro rodiny i cyklisty hledající kvalitní gastronomii, kde navíc maximálně myslí na milovníky řemeslného piva bez alkoholu. Na pípě totiž vedle běžné nabídky střídají špičkové nealko speciály od pivovaru Clock – osvěžující hořkou nealko IPA Krystus a ovocnou, lehkou nealko sour ale Clock Nana.",lat:50.114954,lng:14.411343},
  {id:37,name:"Vinohradský pivovar",district:"Vinohrady",hood:"Praha 10",type:"Hospoda",serve:"Čepované",garden:"Ne",food:"Ano",craft:"Craft",beers:[{name:"Vinohradská 12 nealko",cat:"Craft",serve:"Čepované"},{name:"Vinohradská 12 nealko",cat:"Craft",serve:"Lahvové"},{name:"Vinohradská Hazy Galaxy IPA",cat:"Craft",serve:"Čepované"},{name:"Vinohradská Hazy Galaxy IPA",cat:"Craft",serve:"Lahvové"}],hours:"Pondělí 11–0\nÚterý 11–0\nStředa 11–0\nČtvrtek 11–0\nPátek 11–0\nSobota 11–0\nNeděle 11–22",address:"Korunní 90, 101 00 Praha 10 – Vinohrady",desc:"Tradiční městský řemeslný pivovar s prostorným, vzdušným interiérem a skvělou kuchyní. Jsou průkopníky v tom, že i nealkoholické pivo berou jako plnohodnotný gastronomický zážitek. Vedle svých klasických ležáků tak hrdě čepují vlastní Vinohradskou 12 nealko a především vyhlášenou, chmelově intenzivní nealko nefiltrovanou IPA Vinohradská Hazy Galaxy, která svou vůní směle konkuruje alkoholickým speciálům.",lat:50.075298,lng:14.457606},
  {id:38,name:"Beer Time",district:"Smíchov",hood:"Praha 5",type:"Restaurace",serve:"Čepované",garden:"Ano",food:"Ano",craft:"Craft",beers:[{name:"Podle aktuální nabídky",cat:"Craft",serve:"Čepované"}],hours:"Pondělí 11–23:30\nÚterý 11–23:30\nStředa 11–23:30\nČtvrtek 11–1\nPátek 11–1\nSobota 12–23:30\nNeděle 12–22",address:"Nádražní 61/116, 150 00 Praha 5 – Smíchov",desc:"Moderní pivní ráj na Smíchově, který láká na obrovské množství píp a neustále se obměňující nabídku piv z malých pivovarů. Zkrátka zde nepřijdou ani ti, co zrovna řídí nebo nechtějí alkohol – vedle desítek klasických craftů na čepu stabilně najdete 1 až 2 druhy poctivých, čepovaných řemeslných nealko piv podle aktuální denní nabídky.",lat:50.071276,lng:14.404765},
  {id:39,name:"BIG SMOKERS",district:"Holešovice",hood:"Praha 7",type:"Restaurace",serve:"Čepované",garden:"Ano",food:"Ano",craft:"Craft",beers:[{name:"Clock Krystus nealko IPA",cat:"Craft",serve:"Čepované"}],hours:"Pondělí Zavřeno\nÚterý Zavřeno\nStředa 11:30–22\nČtvrtek 11:30–22\nPátek 11:30–22\nSobota 11:30–22\nNeděle 11:30–20",address:"Dělnická 643/40, 170 00 Praha 7 – Holešovice",desc:"Autentický americký BBQ smokehouse v Holešovicích, kde hraje hlavní roli maso pomalu uzené na dřevě. Drsnou a poctivou atmosféru podniku a plnou chuť barbecue skvěle doplňuje nejen alkoholické řemeslné pivo, ale také jeho bezchybná nealko varianta – hořká, výborně vychlazená čepovaná nealko IPA Krystus od řemeslného pivovaru Clock.",lat:50.103019,lng:14.450957},
  {id:40,name:"Čtyrka",district:"Holešovice",hood:"Praha 7",type:"Hospoda",serve:"Čepované",garden:"Ano",food:"Ano",craft:"Craft",beers:[{name:"Clock Krystus nealko IPA",cat:"Craft",serve:"Čepované"},{name:"Primátor Tchyně India Pale Lager nealko",cat:"Craft",serve:"Čepované"}],hours:"Pondělí 11–23:30\nÚterý 11–23:30\nStředa 11–23:30\nČtvrtek 11–23:30\nPátek 11–23:30\nSobota 12–22:30\nNeděle 17–22",address:"Komunardů 1001/30, 170 00 Praha 7 – Holešovice",desc:"Oblíbená holešovická hospoda s uvolněným švihem a moderním interiérem, kam lidé rádi chodí na dobrý oběd i večerní posezení s přáteli. Na čepu pravidelně rotují skvělá piva a jejich nabídka nealko craftu snese ta nejpřísnější měřítka – k alkoholickým kouskům tu jako plnohodnotnou alternativu nabízí čepovanou nealko IPA Krystus od Clocka nebo chuťově výraznou nealko Tchýni od Primátora.",lat:50.103732,lng:14.450247},
  {id:41,name:"malý pivo",district:"Vinohrady",hood:"Praha 10",type:"Bar",serve:"Lahvové",garden:"Ano",food:"Drobné občerstvení",craft:"Craft",beers:[{name:"Podle aktuální nabídky: Clock, Zichovec, Sibeeria a další",cat:"Craft",serve:"Lahvové"}],hours:"Pondělí 16–23\nÚterý 16–23\nStředa 16–23\nČtvrtek 16–23\nPátek 16–23\nSobota 16–23\nNeděle 16–23",address:"Mrštíkova 2450/1, 100 00 Praha 10 – Vinohrady",desc:"Útulná pivotéka s nesmírně přátelským a edukovaným personálem, který vám s láskou pomůže vybrat to pravé. Vedle klasických alkoholických speciálů disponují lednicí napěchovanou těmi nejlepšími českými i zahraničními řemeslnými nealko pivy v plechovkách od špičkových pivovarů jako Clock, Zichovec či Sibeeria, takže můžete bez obav ochutnávat klidně celý večer.",lat:50.072658,lng:14.485608},
  {id:42,name:"Mrtvá ryba",district:"Nové Město",hood:"Praha 2",type:"Hospoda",serve:"Čepované",garden:"Ano",food:"Drobné občerstvení",craft:"Craft",beers:[{name:"Podle aktuální nabídky",cat:"Craft",serve:"Čepované"}],hours:"Pondělí 9–0:30\nÚterý 9–0:30\nStředa 9–0:30\nČtvrtek 9–0:30\nPátek 11–0:30\nSobota Zavřeno\nNeděle 18–23",address:"Benátská 4/1965, 128 00 Praha 2 – Nové Město",desc:"Legendární studentský podnik skrytý v Albertově, který slouží jako oblíbené útočiště nejen pro studenty přilehlé Přírodovědecké fakulty UK. Vyznačuje se domáckou, lehce punkovou atmosférou, skvělou zahrádkou ve dvoře a překvapivě dobrou nabídkou nápojů. K točeným alkoholickým klasikám tu na čepu pro abstinenty a řidiče vždy běží i výborná craftová nealko piva podle aktuální sezónní nabídky.",lat:50.072451,lng:14.423056},
  {id:43,name:"Burza 4",district:"Holešovice",hood:"Praha 7",type:"Bar",serve:"Čepované",garden:"Ano",food:"Ano",craft:"Craft",beers:[{name:"Craft, nealko 12 Vinohradská",cat:"Craft",serve:"Čepované"}],hours:"Pondělí 16–0\nÚterý 16–0\nStředa 16–2\nČtvrtek 15–2\nPátek 15–3\nSobota 15–3\nNeděle 16–0",address:"Bubenské nábř. 306/13, 170 00 Praha 7 – Holešovice",desc:"Živý a stylový industriální bar situovaný přímo v srdci Pražské tržnice v Holešovicích. Tento vyhlášený \"hipster\" spot nabízí skvělou venkovní atmosféru, kulturní akce a k široké škále alkoholických drinků a piv nabízí na osvěžení výtečnou řemeslnou nealkoholickou dvanáctku z Vinohradského pivovaru přímo na čepu.",lat:50.098408,lng:14.445307},
  {id:44,name:"Café Sladkovsky",district:"Vršovice",hood:"Praha 10",type:"Bar",serve:"Čepované",garden:"Ne",food:"Ano",craft:"Craft",beers:[{name:"Vinohradská 12 nealko",cat:"Craft",serve:"Čepované"},{name:"Vinohradská Hazy Galaxy IPA",cat:"Craft",serve:"Čepované"}],hours:"Pondělí 16–0\nÚterý 16–0\nStředa 16–0\nČtvrtek 16–0\nPátek 16–0\nSobota 16–0\nNeděle 16–0",address:"Sevastopolská 17, 101 00 Praha 10 – Vršovice",desc:"Café Sladkovský v srdci vyhlášené vršovické čtvrti kolem Krymské ulice je ikonický bar s osobitou, lehce bohémskou atmosférou a skvělou komunitní energií. K příjemnému posezení, dobrému jídlu a široké škále drinků nabízí milovníkům nealkoholického piva hned dvě skvělé varianty přímo na čepu z nedalekého Vinohradského pivovaru – osvěžující Vinohradskou nealko 12 a chuťově výraznou, chmelovou nealko IPA Hazy Galaxy.",lat:50.071039,lng:14.449059},
  {id:45,name:"Waid",district:"Nové Město",hood:"Praha 2",type:"Bar",serve:"Čepované",garden:"Ano",food:"Ano",craft:"Craft",beers:[{name:"Podle aktuální nabídky",cat:"Craft",serve:"Čepované"}],hours:"Pondělí 12–1\nÚterý 12–1\nStředa 12–1\nČtvrtek 12–1\nPátek 12–1\nSobota 12–1\nNeděle 12–23",address:"Lublaňská 57, 120 00 Praha 2 – Nové Město",desc:"Waid je oblíbený a neformální bar situovaný na Novém Městě jen kousek od rušného uzlu I. P. Pavlova, který láká na uvolněnou atmosféru i velkou, příjemnou zahrádku skrytou ve vnitrobloku. Ke klasickým alkoholickým drinkům a pivům zde nabízí pestrou rotující nabídku řemeslných nealko speciálů, takže si tu na své přijdou všichni pivaři – vychutnat si můžete například vynikající nealkoholický Ale Balanc od pivovaru Chříč a další skvělé craftové kousky podle aktuálního výběru.",lat:50.074587,lng:14.431132},
  {id:46,name:"SKÔ",district:"Holešovice",hood:"Praha 7",type:"Restaurace",serve:"Čepované",garden:"Ano",food:"Ano",craft:"Craft",beers:[{name:"NILIO ZERO POWER Pale Ale",cat:"Craft",serve:"Čepované"}],hours:"Pondělí 17–23\nÚterý 11:30–14:30 17–23\nStředa 11:30–14:30 17–23\nČtvrtek 11:30–14:30 17–23\nPátek 11:30–14:30 17–23\nSobota 11:30–14:30 17–23\nNeděle 11:30–17",address:"Hala 28, Bubenské nábř. 306/13, 170 00 Praha 7 – Holešovice",desc:"SKO je vyhlášená slovenská restaurace ze sítě Ambiente situovaná přímo v prostředí Holešovické tržnice, která přináší poctivou tradiční i moderní gastronomii s vřelou a pohostinnou atmosférou. K výborným specialitám slovenské kuchyně a široké nabídce nápojů nabízí jako skvělou nealkoholickou alternativu řemeslný speciál NILIO Zero Power Pale Ale z mezinárodně oceňovaného slovenského nealko pivovaru NILIO, který potěší plnou chutí a bohatým chmelovým aroma.",lat:50.100294,lng:14.445882},
  {id:47,name:"Malešický mikropivovar",district:"Malešice",hood:"Praha 10",type:"Restaurace",serve:"Čepované",garden:"Ano",food:"Ano",craft:"Craft",beers:[{name:"Clock Krystus nealko IPA",cat:"Craft",serve:"Čepované"}],hours:"Pondělí 11–23\nÚterý 11–23\nStředa 11–23\nČtvrtek 11–23\nPátek 11–23\nSobota 11–23\nNeděle 12–22",address:"Malešická 126/50, 108 00 Praha 10 – Malešice",desc:"Malešický mikropivovar v Malešicích je oblíbený pivní gastronomický prostor s velkou zahrádkou, pestrou nabídkou jídel a skvěle ošetřeným pivem na čepu. Vedle tradičních alkoholických speciálů a ležáků nabízí milovníkům chmelových chutí také skvělou řemeslnou alternativu v podobě čepované nealko IPA Krystus od vyhlášeného pivovaru Clock.",lat:50.084660,lng:14.507609},
  {id:48,name:"Vinohradský parlament",district:"Vinohrady",hood:"Praha 2",type:"Restaurace",serve:"Čepované",garden:"Ano",food:"Ano",craft:"Tradiční",beers:[{name:"Birell",cat:"Tradiční",serve:"Čepované"}],hours:"Pondělí 10:45–23\nÚterý 10:45–23:30\nStředa 10:45–23:30\nČtvrtek 10:45–0\nPátek 10:45–0\nSobota 11:30–0\nNeděle 11:30–23",address:"Korunní 1, 120 00 Praha 2 – Vinohrady",desc:"Vinohradský parlament na Náměstí Míru je rušná a vyhlášená konceptuální restaurace zaměřená na moderní českou gastronomii, která se pyšní i vlastní „knedlíkárnou“ se samostatnou pestrou nabídkou tradičních i netradičních knedlíků. K vydatným pokrmům zde vedle klasických alkoholických ležáků čepují také osvěžující točený Birell, který představuje spolehlivou nealkoholickou alternativu ke gastronomickému zážitku.",lat:50.075424,lng:14.438301},
  {id:49,name:"Mama Shelter",district:"Holešovice",hood:"Praha 7",type:"Restaurace",serve:"Čepované",garden:"Ano",food:"Ano",craft:"Craft",beers:[{name:"Vinohradská 12 nealko",cat:"Craft",serve:"Čepované"}],hours:"Pondělí 11:30–23\nÚterý 11:30–23\nStředa 11:30–23\nČtvrtek 11:30–23\nPátek 11:30–0\nSobota 11:30–0\nNeděle 11:30–22",address:"Veletržní 1502/20, 170 00 Praha 7 – Holešovice",desc:"Mama Shelter Restaurant v Holešovicích, situovaná v ikonickém hotelu Mama Shelter, je stylový, hravý a designově nepřehlédnutelný prostor známý mimo jiné pro své vyhlášené nedělní all-you-can-eat Mama Brunche. K poctivé gastronomii a neformální atmosféře zde vedle klasických piv nabízí přímo na čepu také skvělou řemeslnou nealkoholickou dvanáctku z Vinohradského pivovaru, která představuje perfektní a plnohodnotné osvěžení k jídlu i nedělnímu lenošení.",lat:50.102370,lng:14.432191},
  {id:50,name:"Hospůdka Zlý Časy",district:"Nusle",hood:"Praha 4",type:"Hospoda",serve:"Čepované",garden:"Ano",food:"Ano",craft:"Craft",beers:[{name:"Clock Krystus nealko IPA",cat:"Craft",serve:"Čepované"}],hours:"Pondělí 15–2\nÚterý 15–2\nStředa 15–2\nČtvrtek 15–2\nPátek 15–2\nSobota 17–2\nNeděle 17–23:30",address:"Čestmírova 390, 140 00 Praha 4 – Nusle",desc:"Hospůdka Zlý časy v Nuslích je legendární pražský pivní svatostánek s obrovskou nabídkou čepovaných speciálů z malých i řemeslných pivovarů a poctivou hospodskou atmosférou. K pití zde servírují i poctivé pivní speciality – od šťavnatých burgerů, langošů a žebírek až po křupavá křidélka, smažák či čerstvý tatarák. Pro ty, kteří hledají plnou chmelovou chuť bez alkoholu, nabízejí na čepu skvělou řemeslnou nealko IPA Krystus od vyhlášeného pivovaru Clock.",lat:50.064306,lng:14.442029},
  {id:51,name:"Sober CafeBar",district:"Vinohrady",hood:"Praha 2",type:"Bar",serve:"Čepované",garden:"Ne",food:"Ne",craft:"Craft",beers:[{name:"Vinohradská 12 nealko",cat:"Craft",serve:"Čepované"},{name:"Speciály (dle nabídky)",cat:"Craft",serve:"Čepované"},{name:"Bernard nealko",cat:"Craft",serve:"Čepované"},{name:"Bernard nealko - ochucený",cat:"Craft",serve:"Čepované"},{name:"Maisel´s Weisse alkoholfrei",cat:"Craft",serve:"Lahvové"},{name:"BRLO | Nealkoholické pivo naked",cat:"Craft",serve:"Lahvové"},{name:"Elektrárna Proovan IPA",cat:"Craft",serve:"Lahvové"},{name:"Sibeeria Hop Water",cat:"Craft",serve:"Lahvové"},{name:"NILIO ZERO POWER Pale Ale",cat:"Craft",serve:"Lahvové"},{name:"NILIO Great Warrior",cat:"Craft",serve:"Lahvové"},{name:"NILIO Yuzu Samurai",cat:"Craft",serve:"Lahvové"}],hours:"Pondělí 10:00–22:00\nÚterý 10:00–22:00\nStředa 10:00–22:00\nČtvrtek 10:00–22:00\nPátek 10:00–22:00\nSobota 10:00–22:00\nNeděle 10:00–22:00",address:"Italská 3, 120 00 Praha 2 – Vinohrady",desc:"Sober CafeBar kousek od Náměstí Míru je nově vzniklý koncept komplet nealkoholického baru, který se specializuje především na nealko drinky a moderní mixologii. V uvolněné atmosféře zde vedle vyladěných koktejlů nabízí i pestrou a širokou škálu nealko piv na čepu i v láhvích – od značek jako Bernard, NILIO, BRLO, Elektrárna, Sibeeria nebo Maisel. Představuje tak ideální místo pro každého, kdo si chce užít plnohodnotný barový zážitek a skvělé chutě zcela bez alkoholu.",lat:50.076450,lng:14.434991},
  {id:52,name:"poco.",district:"Vinohrady",hood:"Praha 2",type:"Bar",serve:"Čepované",garden:"Ne",food:"Ne",craft:"Craft",beers:[{name:"Vinohradská 12 nealko",cat:"Craft",serve:"Čepované"}],hours:"Pondělí Zavřeno\nÚterý 18–1\nStředa 18–1\nČtvrtek 18–1\nPátek 18–1\nSobota 18–1\nNeděle Zavřeno",address:"Mánesova 1175/48, 120 00 Praha 2 – Vinohrady",desc:"poco. bar na Vinohradech je útulný a stylový bar a galerie s příjemnou sousedskou atmosférou, který spojuje lásku k umění s večerním drinkem. Na čepu servíruje poctivou nealkoholickou dvanáctku z nedalekého Vinohradského pivovaru, která nabízí plnou chmelovou chuť a skvělé osvěžení zcela bez alkoholu.",lat:50.077733,lng:14.441455},
  {id:53,name:"Kolektor",district:"Holešovice",hood:"Praha 7",type:"Bar",serve:"Čepované",garden:"Ano",food:"Ano",craft:"Craft",beers:[{name:"Zichovec nealko",cat:"Craft",serve:"Čepované"}],hours:"Pondělí 9–22\nÚterý 9–22\nStředa 9–0\nČtvrtek 9–0\nPátek 9–0\nSobota 9–0\nNeděle 9–22",address:"Dukelských Hrdinů 530/47, 170 00 Praha 7 – Holešovice",desc:"Kolektor v Holešovicích, situovaný přímo v budově Veletržního paláce, je stylová kavárna, bar a kulturní prostor s jedinečnou industriální atmosférou, který je oblíbeným místem pro práci, setkávání i večerní drink. V nabídce zde myslí i na milovníky poctivého chmelu bez alkoholu a nabízí skvělé nealko z vyhlášeného řemeslného pivovaru Zichovec.",lat:50.101006,lng:14.432805},
  {id:54,name:"Andělský pivovar",district:"Smíchov",hood:"Praha 5",type:"Restaurace",serve:"Čepované",garden:"Ano",food:"Ano",craft:"Craft",beers:[{name:"Andělský pivovar Nealko",cat:"Craft",serve:"Čepované"}],hours:"Pondělí 11–0\nÚterý 11–0\nStředa 11–0\nČtvrtek 11–0\nPátek 11–0\nSobota 11–0\nNeděle 11–0",address:"Lidická 337/30, 150 00 Praha 5 – Smíchov",desc:"Andělský pivovar na Smíchově je craftový mikropivovar s restaurací přímo u Anděla, který kombinuje poctivě vařená řemeslná piva s moderní českou gastronomií. Vedle svých klasických ležáků a speciálů vaří i vlastní nealkoholické pivo, které nabízí plnou chmelovou chuť a skvělé osvěžení zcela bez alkoholu.",lat:50.072321,lng:14.405945}
];

var filtered=BARS.slice(),openId=null,miniMaps={},overviewMap=null,oMarkers=[];
var activeInfoWindow=null;
var mapsAccepted=false;
var SCRIPT_URL='https://script.google.com/macros/s/AKfycby9oixjNjwbY3yJMFOQh4W6Z43Vjt-4wZslqPh8GMCk5YMIVUKTcN2aR3bif73Erzs/exec';
var MAPS_KEY='AIzaSyBamFaNiV1DIVmyvzAj6Gs9_Rw7Uuly61w';

// ============ COOKIEBOT ============
window.addEventListener('CookiebotOnAccept',function(){
  if(Cookiebot.consent.preferences||Cookiebot.consent.statistics||Cookiebot.consent.marketing){
    mapsAccepted=true;
    loadGoogleMaps();
  }
},false);

window.addEventListener('CookiebotOnDecline',function(){
  mapsAccepted=false;
  showMapPlaceholders();
},false);

function loadGoogleMaps(){
  if(typeof google!=='undefined'&&typeof google.maps!=='undefined'){
    initGoogleMaps();
    return;
  }
  var s=document.createElement('script');
  s.src='https://maps.googleapis.com/maps/api/js?key='+MAPS_KEY+'&callback=initGoogleMaps';
  document.head.appendChild(s);
}

function showMapPlaceholders(){
  var msg='<div class="map-placeholder" style="height:100%"><p>Pro zobrazení mapy prosím potvrďte cookies v levém dolním rohu.</p></div>';
  var oMap=document.getElementById('overview-map');
  if(oMap)oMap.innerHTML=msg;
  document.querySelectorAll('.mini-map').forEach(function(el){el.innerHTML=msg;});
}

// ============ AGE GATE ============
function ageYes(){
  document.getElementById('age-gate').classList.add('hidden');
  try{sessionStorage.setItem('sobeer_age','1');}catch(e){}
  render();
}
function ageNo(){
  document.querySelector('.age-gate-btns').style.display='none';
  document.getElementById('age-denied').style.display='block';
}
(function(){
  try{
    if(sessionStorage.getItem('sobeer_age')==='1'){
      document.getElementById('age-gate').classList.add('hidden');
    }
  }catch(e){}
})();

// ============ HAMBURGER ============
function toggleMenu(){
  var m=document.getElementById('mobile-menu'),h=document.getElementById('hamburger'),o=m.classList.contains('open');
  m.classList.toggle('open',!o);h.classList.toggle('open',!o);
}
function closeMenu(){
  document.getElementById('mobile-menu').classList.remove('open');
  document.getElementById('hamburger').classList.remove('open');
}
document.addEventListener('click',function(e){
  var m=document.getElementById('mobile-menu'),h=document.getElementById('hamburger');
  if(m.classList.contains('open')&&!m.contains(e.target)&&!h.contains(e.target))closeMenu();
});

// ============ PAGES ============
function showPage(id){
  document.getElementById('main-content').style.display=id==='home'?'':'none';
  var g=document.getElementById('gdpr');
  if(g)g.style.display=id==='gdpr'?'block':'none';
  window.scrollTo(0,0);
}
function navGoTo(anchor){
  document.getElementById('main-content').style.display='';
  var g=document.getElementById('gdpr');
  if(g)g.style.display='none';
  var el=document.querySelector(anchor);
  if(el)el.scrollIntoView({behavior:'smooth'});
}

// ============ CONTACT FORM ============
function submitForm(e){
  e.preventDefault();
  var btn=document.getElementById('cf-btn'),ok=document.getElementById('cf-ok'),err=document.getElementById('cf-err');
  ok.style.display='none';err.style.display='none';
  btn.textContent='Odesílám…';btn.disabled=true;
  var p=new URLSearchParams();
  p.append('name',document.getElementById('cf-name').value);
  p.append('email',document.getElementById('cf-email').value);
  p.append('message',document.getElementById('cf-message').value);
  fetch(SCRIPT_URL,{method:'POST',mode:'no-cors',headers:{'Content-Type':'application/x-www-form-urlencoded'},body:p.toString()})
  .then(function(){ok.style.display='block';document.getElementById('contact-form').reset();btn.textContent='Odeslat zprávu';btn.disabled=false;})
  .catch(function(){err.style.display='block';btn.textContent='Odeslat zprávu';btn.disabled=false;});
}

// ============ FAQ ============
function toggleFaq(el){
  var item=el.closest('.faq-item');
  var answer=item.querySelector('.faq-a');
  var isOpen=item.classList.contains('open');
  item.classList.toggle('open',!isOpen);
  answer.style.maxHeight=isOpen?'0px':answer.scrollHeight+'px';
}

// ============ GOOGLE MAPS ============
var MAP_STYLE=[
  {elementType:'geometry',stylers:[{color:'#1C3F44'}]},
  {elementType:'labels.text.fill',stylers:[{color:'#F3EFE8'}]},
  {elementType:'labels.text.stroke',stylers:[{color:'#1C3F44'}]},
  {featureType:'road',elementType:'geometry',stylers:[{color:'#2d5c63'}]},
  {featureType:'road',elementType:'labels.text.fill',stylers:[{color:'#C48A2A'}]},
  {featureType:'water',elementType:'geometry',stylers:[{color:'#0e2426'}]},
  {featureType:'poi',stylers:[{visibility:'off'}]},
  {featureType:'transit',stylers:[{visibility:'off'}]}
];

function initGoogleMaps(){
  var el=document.getElementById('overview-map');
  if(!el)return;
  el.innerHTML='';
  overviewMap=new google.maps.Map(el,{
    center:{lat:50.086,lng:14.42},
    zoom:13,
    styles:MAP_STYLE,
    mapTypeControl:false,
    streetViewControl:false,
    fullscreenControl:false
  });

  if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(function(pos){
      var userPos={lat:pos.coords.latitude,lng:pos.coords.longitude};
      new google.maps.Marker({
        position:userPos,
        map:overviewMap,
        icon:{path:google.maps.SymbolPath.CIRCLE,scale:8,fillColor:'#4285F4',fillOpacity:1,strokeColor:'#fff',strokeWeight:2},
        title:'Vaše poloha'
      });
      overviewMap.setCenter(userPos);
      overviewMap.setZoom(14);
    },function(){});
  }

  updateOMap();
}

function updateOMap(){
  if(!overviewMap)return;
  oMarkers.forEach(function(m){m.setMap(null);});oMarkers=[];
  if(activeInfoWindow){activeInfoWindow.close();activeInfoWindow=null;}

  var cr=document.getElementById('f-craft')?document.getElementById('f-craft').value:'';
  var toShow=filtered.filter(function(b){
    if(cr==='Birell')return true;
    if(b.craft!=='Birell')return true;
    return b.beers.some(function(x){return x.cat==='Birell'&&x.serve==='Čepované';});
  });

  if(!toShow.length)return;
  var bounds=new google.maps.LatLngBounds();

  toShow.forEach(function(b){
    var marker=new google.maps.Marker({
      position:{lat:b.lat,lng:b.lng},
      map:overviewMap,
      title:b.name,
      icon:{path:google.maps.SymbolPath.CIRCLE,scale:7,fillColor:'#C48A2A',fillOpacity:1,strokeColor:'#F3EFE8',strokeWeight:2}
    });
    var mapsUrl='https://www.google.com/maps/search/?api=1&query='+b.lat+','+b.lng;
    var safeName=b.name.replace(/'/g,"\\'");
    var iw=new google.maps.InfoWindow({
      content:'<div style="font-family:sans-serif;color:#1C3F44;max-width:210px">'
        +'<a href="#" onclick="filterToBar(\''+safeName+'\');return false;" style="font-size:14px;font-weight:700;color:#1C3F44;text-decoration:none;border-bottom:1px solid #C48A2A;display:inline-block">'+b.name+'</a>'
        +'<p style="font-size:12px;margin:6px 0;color:#555">'+b.address+'</p>'
        +'<a href="'+mapsUrl+'" target="_blank" rel="noopener" style="font-size:12px;color:#C48A2A;font-weight:600;text-decoration:none">Otevřít v Google Maps →</a>'
        +'</div>'
    });
    marker.addListener('click',function(){
      if(activeInfoWindow)activeInfoWindow.close();
      iw.open(overviewMap,marker);
      activeInfoWindow=iw;
    });
    oMarkers.push(marker);
    bounds.extend({lat:b.lat,lng:b.lng});
  });

  if(toShow.length>1)overviewMap.fitBounds(bounds);
}

function filterToBar(name){
  if(activeInfoWindow){activeInfoWindow.close();activeInfoWindow=null;}
  document.getElementById('search-input').value=name;
  applyFilters();
  var first=document.querySelector('.bar-item');
  if(first){
    setTimeout(function(){
      toggle(+first.dataset.id);
      first.scrollIntoView({behavior:'smooth',block:'center'});
    },120);
  }
}

function initMini(id){
  if(miniMaps[id]||typeof google==='undefined'||typeof google.maps==='undefined')return;
  var bar=BARS.find(function(b){return b.id===id;}),el=document.getElementById('mm-'+id);
  if(!bar||!el)return;
  el.innerHTML='';
  var m=new google.maps.Map(el,{
    center:{lat:bar.lat,lng:bar.lng},
    zoom:15,
    styles:MAP_STYLE,
    mapTypeControl:false,
    streetViewControl:false,
    fullscreenControl:false,
    zoomControl:false
  });
  new google.maps.Marker({
    position:{lat:bar.lat,lng:bar.lng},
    map:m,
    icon:{path:google.maps.SymbolPath.CIRCLE,scale:7,fillColor:'#C48A2A',fillOpacity:1,strokeColor:'#F3EFE8',strokeWeight:2}
  });
  miniMaps[id]=m;
}

// ============ BARS ============
function render(){
  filtered=filtered.slice().sort(function(a,b){
    function p(x){
      if(x.craft==='Craft'&&x.serve==='Čepované')return 0;
      if(x.craft==='Craft'&&x.serve==='Lahvové')return 1;
      if(x.craft==='Tradiční'&&x.serve==='Čepované')return 2;
      if(x.craft==='Tradiční'&&x.serve==='Lahvové')return 3;
      if(x.craft==='Birell'&&x.serve==='Čepované')return 4;
      return 5;
    }
    return p(a)-p(b);
  });
  var list=document.getElementById('bars-list'),noRes=document.getElementById('no-results'),cnt=document.getElementById('results-count');
  miniMaps={};list.innerHTML='';
  if(!filtered.length){noRes.style.display='block';cnt.innerHTML='';updateOMap();return;}
  noRes.style.display='none';
  var n=filtered.length;
  cnt.innerHTML='Zobrazeno <strong>'+n+'</strong> '+(n===1?'podnik':n<5?'podniky':'podniků');
  filtered.forEach(function(b){
    var div=document.createElement('div');
    div.className='bar-item'+(openId===b.id?' open':'');
    div.dataset.id=b.id;
    var tap=b.beers.filter(function(x){return x.serve==='Čepované';});
    var bot=b.beers.filter(function(x){return x.serve==='Lahvové';});
    div.innerHTML=
      '<div class="bar-header" onclick="toggle('+b.id+')">'
        +'<div class="bar-header-left">'
          +'<div class="bar-meta-row"><span class="badge-type">'+b.type+'</span><span class="badge-district">'+b.district+' · '+b.hood+'</span></div>'
          +'<h3 class="bar-name">'+b.name+'</h3>'
        +'</div>'
        +'<div class="bar-header-right">'
          +'<div class="pills">'
            +'<span class="pill'+(b.craft==='Craft'?' on':'')+'">Craft</span>'
            +'<span class="pill'+(b.garden==='Ano'?' on':'')+'">Zahrádka</span>'
            +'<span class="pill'+(b.food!=='Ne'?' on':'')+'">Jídlo</span>'
            +'<span class="pill on">'+b.serve+'</span>'
          +'</div>'
          +'<button class="toggle-btn" onclick="event.stopPropagation();toggle('+b.id+')" aria-label="Detail">+</button>'
        +'</div>'
      +'</div>'
      +'<div class="bar-detail"><div class="bar-detail-inner">'
        +'<div>'
          +'<div class="detail-cols">'
            +'<div class="detail-col">'
              +'<div><div class="dl-label">Adresa</div><div class="dl-value">'+b.address+'</div></div>'
              +'<div style="margin-bottom:1.8rem"><div class="dl-label">Otevírací doba</div><div class="dl-value">'+b.hours+'</div></div>'
            +'</div>'
            +'<div class="detail-col">'
              +'<div><div class="dl-label">Čepované</div><div class="dl-value">'+(tap.length?tap.map(function(x){return x.name;}).join('\n'):'Není v nabídce')+'</div></div>'
              +'<div><div class="dl-label">Lahvové</div><div class="dl-value">'+(bot.length?bot.map(function(x){return x.name;}).join('\n'):'Není v nabídce')+'</div></div>'
              +'<div><div class="dl-label">Zahrádka</div><div class="dl-value">'+b.garden+'</div></div>'
              +'<div><div class="dl-label">Jídlo</div><div class="dl-value">'+b.food+'</div></div>'
            +'</div>'
          +'</div>'
          +'<div class="detail-desc">'+b.desc+'<span style="font-size:0.72rem;font-style:italic;color:rgba(243,239,232,0.25);margin-top:1.2rem;display:block;">* Informace o nabídce nealkoholických piv mají informativní charakter a mohou se měnit. Doporučujeme si dostupnost ověřit přímo v podniku.</span></div>'
        +'</div>'
        +'<div><div class="mini-map-label">Poloha</div><div class="mini-map" id="mm-'+b.id+'"></div></div>'
      +'</div></div>';
    list.appendChild(div);
  });
  if(openId&&filtered.find(function(b){return b.id===openId;}))setTimeout(function(){
    if(mapsAccepted)initMini(openId);
  },60);
  updateOMap();
}

function toggle(id){
  openId=(openId===id)?null:id;
  document.querySelectorAll('.bar-item').forEach(function(el){
    var isOpen=+el.dataset.id===openId;
    el.classList.toggle('open',isOpen);
    var detail=el.querySelector('.bar-detail');
    if(detail)detail.style.maxHeight=isOpen?detail.scrollHeight+'px':'0px';
  });
  if(openId)setTimeout(function(){
    if(mapsAccepted)initMini(openId);
    else{
      var el=document.getElementById('mm-'+openId);
      if(el)el.innerHTML='<div class="map-placeholder" style="height:100%"><p>Pro zobrazení mapy prosím potvrďte cookies v levém dolním rohu.</p></div>';
    }
  },380);
}

function applyFilters(){
  var s=document.getElementById('search-input').value.toLowerCase(),
      d=document.getElementById('f-district').value,
      t=document.getElementById('f-type').value,
      sv=document.getElementById('f-serve').value,
      cr=document.getElementById('f-craft').value,
      g=document.getElementById('f-garden').value;
  var clearBtn=document.getElementById('search-clear');
  if(clearBtn)clearBtn.classList.toggle('show',s.length>0);
  filtered=BARS.filter(function(b){
    return(!s||b.name.toLowerCase().includes(s)||b.district.toLowerCase().includes(s)||b.type.toLowerCase().includes(s)||b.beers.some(function(x){return x.name.toLowerCase().includes(s);}))
      &&(!d||b.district===d)
      &&(!t||b.type===t)
      &&(!sv||b.beers.some(function(x){return x.serve===sv;}))
      &&(!cr||b.beers.some(function(x){return x.cat===cr;}))
      &&(!g||b.garden===g);
  });
  openId=null;render();
}

function clearSearch(){
  document.getElementById('search-input').value='';
  applyFilters();
  var sec=document.getElementById('bary');
  if(sec)sec.scrollIntoView({behavior:'smooth'});
}

['search-input','f-district','f-type','f-serve','f-craft','f-garden'].forEach(function(id){
  var el=document.getElementById(id);
  if(el)el.addEventListener(id==='search-input'?'input':'change',applyFilters);
});

var ro=new IntersectionObserver(function(entries){
  entries.forEach(function(e,i){if(e.isIntersecting)setTimeout(function(){e.target.classList.add('visible');},i*60);});
},{threshold:0.08});
document.querySelectorAll('.reveal').forEach(function(el){ro.observe(el);});

window.addEventListener('scroll',function(){
  document.getElementById('nav').style.padding=window.scrollY>60?'1.2rem 4rem':'2rem 4rem';
});

// ============ TL;DR POČET PODNIKŮ ============
// Na webu přesné číslo (43 podniků). V HTML zůstává statické "přes 40 podniků"
// jako fallback pro crawlery, které nespouštějí JavaScript.
(function(){
  var el=document.getElementById('tldr-count');
  if(!el)return;
  var n=BARS.length;
  var word=(n===1)?'podnik':(n>=2&&n<=4)?'podniky':'podniků';
  el.textContent=n+' '+word;
})();

// ============ ITEMLIST SCHEMA (generováno z BARS) ============
(function(){
  var DAYS={'Pondělí':'Mo','Úterý':'Tu','Středa':'We','Čtvrtek':'Th','Pátek':'Fr','Sobota':'Sa','Neděle':'Su'};

  function pad(t){
    t=t.trim();
    if(t.indexOf(':')>-1){
      var p=t.split(':');
      return (p[0].length<2?'0':'')+p[0]+':'+p[1];
    }
    return (t.length<2?'0':'')+t+':00';
  }

  function parseHours(str){
    if(!str)return null;
    var out=[];
    str.split('\n').forEach(function(line){
      line=line.trim();
      if(!line)return;
      var day=null;
      for(var cz in DAYS){
        if(line.indexOf(cz)===0){day=DAYS[cz];line=line.slice(cz.length).trim();break;}
      }
      if(!day)return;
      if(line.toLowerCase().indexOf('zavřeno')>-1)return;
      var parts=line.split(/[–-]/);
      if(parts.length!==2)return;
      out.push(day+' '+pad(parts[0])+'-'+pad(parts[1]));
    });
    return out.length?out:null;
  }

  function typeOf(t){
    return (t==='Restaurace')?'Restaurant':'BarOrPub';
  }

  function splitAddress(a){
    // "Sokolovská 81/55, 186 00 Praha 8 – Karlín"
    var m=a.match(/^(.*?),\s*(\d{3}\s?\d{2})\s+(.*)$/);
    if(m)return {street:m[1].trim(),zip:m[2].trim()};
    return {street:a,zip:''};
  }

  var items=BARS.map(function(b,i){
    var ad=splitAddress(b.address);
    var beers=b.beers.map(function(x){return x.name;}).filter(function(v,k,arr){return arr.indexOf(v)===k;});
    var item={
      '@type':typeOf(b.type),
      'name':b.name,
      'description':b.desc,
      'address':{
        '@type':'PostalAddress',
        'streetAddress':ad.street,
        'addressLocality':'Praha',
        'addressRegion':b.district,
        'addressCountry':'CZ'
      },
      'geo':{'@type':'GeoCoordinates','latitude':b.lat,'longitude':b.lng},
      'hasMenu':{'@type':'Menu','name':'Nealkoholická piva','description':beers.join(', ')},
      'publicAccess':true
    };
    if(ad.zip)item.address.postalCode=ad.zip;
    var oh=parseHours(b.hours);
    if(oh)item.openingHours=oh;
    if(b.food!=='Ne')item.servesCuisine='Česká kuchyně';
    return {'@type':'ListItem','position':i+1,'item':item};
  });

  var schema={
    '@context':'https://schema.org',
    '@type':'ItemList',
    'name':'Podniky s nealkoholickým pivem v Praze',
    'description':'Přehled pražských barů, hospod a restaurací s nabídkou kvalitního nealkoholického piva.',
    'numberOfItems':BARS.length,
    'itemListOrder':'https://schema.org/ItemListOrderDescending',
    'itemListElement':items
  };

  var s=document.createElement('script');
  s.type='application/ld+json';
  s.textContent=JSON.stringify(schema);
  document.head.appendChild(s);
})();

render();
