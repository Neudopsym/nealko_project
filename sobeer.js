var BARS=[
  // === SKUPINA 1: čepovaný craft (mohou mít i lahvové varianty) ===
  {id:1,name:"Cafe v lese",district:"Vršovice",hood:"Praha 10",type:"Bar",serve:"Čepované",garden:"Ne",food:"Ne",craft:"Craft",beers:[{name:"Chříč Balanc 0% IPA",cat:"Craft",serve:"Čepované"},{name:"Paulaner Weissbier 0%",cat:"Tradiční",serve:"Lahvové"},{name:"Birrel",cat:"Birell",serve:"Lahvové"}],hours:"Pondělí 16–2\nÚterý 16–2\nStředa 16–2\nČtvrtek 16–2\nPátek 16–2\nSobota 16–2\nNeděle 16–0",address:"Krymská 12, 101 00 Praha 10 – Vršovice",desc:"Moderní kulturní prostor a kavárna v srdci Vršovic, která kombinuje retro interiér s živým hudebním a společenským programem. Nabízí neformální atmosféru pro setkávání u kávy nebo drinku s možností návštěvy koncertů a performancí v podzemním klubu.",lat:50.0713476,lng:14.448464},
  {id:4,name:"Automat Matuška Hradčanská",district:"Dejvice",hood:"Praha 6",type:"Bar",serve:"Čepované",garden:"Ano",food:"Ano",craft:"Craft",beers:[{name:"Bylinný Střízlivec",cat:"Craft",serve:"Čepované"},{name:"Preisler-Motuečka",cat:"Craft",serve:"Čepované"}],hours:"Pondělí 11:30–0\nÚterý 11:30–0\nStředa 11:30–0\nČtvrtek 11:30–0\nPátek 11:30–0\nSobota 12–0\nNeděle 12–22",address:"Dejvická 184/4, 160 00 Praha 6 – Dejvice",desc:"Moderní řemeslný výčep a bistro zaměřené na prezentaci piva z rodinného pivovaru Matuška a kvalitní street food. Nabízí minimalistický design s vysokým standardem servisu, kde se klade důraz na čerstvost piva a párování s moderní gastronomií.",lat:50.0980426,lng:14.4042846},
  {id:5,name:"Automat Matuška JZP",district:"Vinohrady",hood:"Praha 3",type:"Bar",serve:"Čepované",garden:"Ne",food:"Ano",craft:"Craft",beers:[{name:"Bylinný Střízlivec",cat:"Craft",serve:"Čepované"}],hours:"Pondělí 11:30–0\nÚterý 11:30–0\nStředa 11:30–0\nČtvrtek 11:30–0\nPátek 11:30–0\nSobota 12–0\nNeděle 12–22",address:"nám. J. z Poděbrad 16, 130 00 Praha 3 – Vinohrady",desc:"Mladší bratr dejvického Automatu. Moderní řemeslný výčep a bistro zaměřené na prezentaci piva z rodinného pivovaru Matuška a kvalitní street food. Nabízí minimalistický design s vysokým standardem servisu, kde se klade důraz na čerstvost piva a párování s moderní gastronomií.",lat:50.078140,lng:14.452252},
  {id:6,name:"Dva Kohouti",district:"Karlín",hood:"Praha 8",type:"Bar",serve:"Čepované",garden:"Ano",food:"Ano",craft:"Craft",beers:[{name:"Proovan Hazy IPA",cat:"Craft",serve:"Čepované"}],hours:"Pondělí 15–1\nÚterý 15–1\nStředa 15–1\nČtvrtek 15–1\nPátek 15–1\nSobota 12–1\nNeděle 12–22",address:"Sokolovská 81/55, 186 00 Praha 8 – Karlín",desc:"Inovativní koncept spojující řemeslný pivovar s výčepem přímo v srdci Karlína. Nabízí živou, neformální atmosféru s důrazem na čerstvě uvařené pivo a sdílený prostor, který se během dne mění z klidného dvora na rušné společenské centrum.",lat:50.09349,lng:14.4468455},
  {id:11,name:"Dno Pytle",district:"Vinohrady",hood:"Praha 2",type:"Bar",serve:"Čepované",garden:"Ne",food:"Drobné občerstvení",craft:"Craft",beers:[{name:"Podle aktuální nabídky",cat:"Craft",serve:"Čepované"},{name:"Podle aktuální nabídky",cat:"Craft",serve:"Lahvové"}],hours:"Pondělí 16–23\nÚterý 16–1\nStředa 16–1\nČtvrtek 16–1\nPátek 16–1\nSobota 18–1\nNeděle 18–23",address:"Vinohradská 63, 120 00 Praha 2 – Vinohrady",desc:"Moderní nekuřácká pivnice v centru Prahy zaměřená na prezentaci produktů z českých i zahraničních minipivovarů. Na osmi pípách nabízí pravidelně obměňovanou nabídku pivních speciálů, kterou doplňuje široký výběr lahvových piv a plechovek od různých craftových pivovarů a několik druhů kvalitních klobás na grilu.",lat:50.0771063,lng:14.4428117},
  {id:12,name:"Pivovar Uhříněves",district:"Uhříněves",hood:"Praha 22",type:"Restaurace",serve:"Čepované",garden:"Ano",food:"Ano",craft:"Craft",beers:[{name:"Alois Šofér",cat:"Craft",serve:"Čepované"},{name:"Alois Šofér",cat:"Craft",serve:"Lahvové"}],hours:"Pondělí 11–23\nÚterý 11–23\nStředa 11–23\nČtvrtek 11–23\nPátek 11–23\nSobota 11–23\nNeděle 11–22",address:"K Sokolovně 38, 104 00 Praha 22 – Uhříněves",desc:"Tradiční restaurace Pivovaru Uhříněves, která se zaměřuje na poctivou českou kuchyni a vlastní nepasterizovaná piva včetně nealko varianty. Nabízí prostorný rustikální interiér a klidnou venkovní zahrádku, ideální pro rodinné obědy i větší společenská setkání.",lat:50.0296992,lng:14.6049522},
  {id:13,name:"Fatfuck Vinohradská",district:"Vinohrady",hood:"Praha 2",type:"Restaurace",serve:"Čepované",garden:"Ano",food:"Ano",craft:"Craft",beers:[{name:"Alois Šofér",cat:"Craft",serve:"Čepované"}],hours:"Pondělí Zavřeno\nÚterý 12–22\nStředa 12–22\nČtvrtek 12–22\nPátek 12–22\nSobota 12–22\nNeděle 10–21",address:"Vinohradská 1241/67, 120 00 Praha 2 – Vinohrady",desc:"Moderní bistro na Vinohradech specializované na autentické smashed burgery připravované z prémiových surovin. Nabízí minimalistický, dynamický koncept s důrazem na kvalitu masa a domácí dresinky, doplněný o čepované pivo z Pivovaru Uhříněves včetně jejich nealkoholického piva Alois Šofér.",lat:50.0771324,lng:14.4435489},
  {id:15,name:"elpíčko",district:"Libeň",hood:"Praha 8",type:"Bar",serve:"Čepované",garden:"Ano",food:"Ano",craft:"Craft",beers:[{name:"Vinohradská 12 nealko",cat:"Craft",serve:"Čepované"},{name:"Birell",cat:"Birell",serve:"Lahvové"}],hours:"Pondělí 16–1\nÚterý 16–1\nStředa 16–1\nČtvrtek 16–1\nPátek 16–1\nSobota 16–1\nNeděle 16–23",address:"Zenklova 305/11, 180 00 Praha 8 – Libeň",desc:"Skutečná oáza uprostřed rustikální Palmovky. V létě nabízí velkorysou zahrádku pro nekonečný chill a v zimě stylový suterénní bar, kde pochopíš, proč je tohle místo legendou. V nabídce mají kromě birella nealko novinku z Vinohradského pivovaru. Je to ideální bod pro každého, kdo hledá poctivé pití a jedinečnou atmosféru.",lat:50.103903,lng:14.472795},
  {id:16,name:"Vršovická zahrada",district:"Vršovice",hood:"Praha 10",type:"Bar",serve:"Čepované",garden:"Ano",food:"Ano",craft:"Craft",beers:[{name:"Vinohradská 12 nealko",cat:"Craft",serve:"Čepované"},{name:"Vinohradská Hazy Galaxy IPA",cat:"Craft",serve:"Čepované"}],hours:"Pondělí 15–22\nÚterý 15–22\nStředa 15–22\nČtvrtek 15–22\nPátek 15–22\nSobota 15–22\nNeděle 15–22",address:"Francouzská 246/84, 101 00 Praha 10 – Vršovice",desc:"Venkovní bar ležící uprostřed komunitní zahrady přímo na zastávce MHD Krymská. Nabízí uvolněné prostředí pro relaxaci, sousedská setkávání, kulturní akce pod širým nebem a komunitní besedy či workshopy s tématikou udržitelnosti, doplněný o nealko nabídku z Vinohradského pivovaru.",lat:50.071759,lng:14.447624},
  {id:17,name:"Pivní jistota",district:"Dejvice",hood:"Praha 6",type:"Hospoda",serve:"Čepované",garden:"Ano",food:"Drobné občerstvení",craft:"Craft",beers:[{name:"Podle aktuální nabídky",cat:"Craft",serve:"Čepované"},{name:"Podle aktuální nabídky",cat:"Craft",serve:"Lahvové"}],hours:"Pondělí 15–23:59\nÚterý 15–23:59\nStředa 15–23:59\nČtvrtek 15–23:59\nPátek 15–23:59\nSobota 15–23:59\nNeděle 15–22",address:"Kyjevská 3, 160 00 Praha 6 – Dejvice",desc:"Moderní pivotéka a bar v Dejvicích jen pár kroků od kulaťáku a metra Dejvická zaměřený na řemeslná piva včetně nealka z českých i zahraničních pivovarů. Nabízí široký výběr na čepu i v lahvích s neustále se měnící nabídkou.",lat:50.098718,lng:14.398013},
  {id:18,name:"BeerGeek Bar",district:"Vinohrady",hood:"Praha 3",type:"Bar",serve:"Čepované",garden:"Ne",food:"Ano",craft:"Craft",beers:[{name:"Podle aktuální nabídky",cat:"Craft",serve:"Čepované"},{name:"Podle aktuální nabídky",cat:"Craft",serve:"Lahvové"}],hours:"Pondělí 15–2\nÚterý 15–2\nStředa 15–2\nČtvrtek 15–2\nPátek 15–2\nSobota 15–2\nNeděle 15–2",address:"Vinohradská 988/62, 130 00 Praha 3 – Vinohrady",desc:"Legendární pivní bar na Vinohradech, který patří ke špičce pražské pivní scény s neustále se měnící nabídkou. Nabízí moderní industriální prostředí a obrovský výběr českých i světových speciálů, doplněný o stálou nabídku špičkových řemeslných nealko piv na čepu i v lahvích.",lat:50.077073,lng:14.449963},
  {id:45,name:"BeerGeek Pivotéka",district:"Žižkov",hood:"Praha 3",type:"Bar",serve:"Čepované",garden:"Ne",food:"Ne",craft:"Craft",beers:[{name:"Podle aktuální nabídky",cat:"Craft",serve:"Čepované"},{name:"Podle aktuální nabídky",cat:"Craft",serve:"Lahvové"}],hours:"Pondělí 11–21\nÚterý 11–21\nStředa 11–21\nČtvrtek 11–21\nPátek 11–21\nSobota 11–21\nNeděle 15–21",address:"Slavíkova 1047/10, 130 00 Praha 3 – Žižkov",desc:"Vyhlášená žižkovská pivotéka v ulici Slavíkova, která nabízí jeden z největších výběrů řemeslných piv v Praze nedaleko stejnojmenného baru a možnost menšího posezení a ochutnávky. V regálech i chladicích boxech skrývá množství pečlivě vybraných lahví a plechovek od předních českých i světových minipivovarů, včetně bohatého zastoupení špičkových nealkoholických speciálů a ochotného personálu, který s výběrem vždy poradí.",lat:50.079334,lng:14.448189},
  {id:19,name:"Skautský institut v Rybárně",district:"Malá Strana",hood:"Praha 1",type:"Bar",serve:"Čepované",garden:"Ano",food:"Ano",craft:"Craft",beers:[{name:"Clock Krystus nealko IPA",cat:"Craft",serve:"Čepované"},{name:"Maisel Weisse nealko",cat:"Tradiční",serve:"Lahvové"}],hours:"Pondělí 10–23\nÚterý 10–23\nStředa 10–23\nČtvrtek 10–23\nPátek 10–23\nSobota 10–23\nNeděle 10–23",address:"U Sovových mlýnů 134/1, 118 00 Praha 1 – Malá Strana",desc:"Komunitní centrum a bar v historickém domečku na břehu Vltavy na Kampě. Nabízí klidné kreativní prostředí pro odpočinek, kulturní akce a sousedská setkávání, doplněný o stálou nabídku poctivého nealka, denních polévek, salátů, sendvičů a dalších pochoutek k zakousnutí.",lat:50.082914,lng:14.408065},
  {id:20,name:"Cafe club Míšeňská",district:"Malá Strana",hood:"Praha 1",type:"Bar",serve:"Čepované",garden:"Ano",food:"Drobné občerstvení",craft:"Craft",beers:[{name:"Vinohradská 12 nealko",cat:"Craft",serve:"Čepované"},{name:"Chříč Balanc 0% IPA",cat:"Craft",serve:"Lahvové"}],hours:"Pondělí 10–0\nÚterý 10–0\nStředa 10–0\nČtvrtek 10–0\nPátek 10–0\nSobota 10–0\nNeděle 10–0",address:"Míšeňská 71/3, 118 00 Praha 1 – Malá Strana",desc:"Skrytý kavárenský bar v historickém domě s malebným dvorkem jen pár kroků od Karlova mostu. Nabízí jedinečnou, intimní atmosféru staré Prahy, skvělou kávu a večerní drinky, doplněný o pečlivě vybranou nabídku nealkoholických alternativ a drobných pochutin.",lat:50.087644,lng:14.408038},
  {id:22,name:"Pivní rozmanitost",district:"Žižkov",hood:"Praha 3",type:"Hospoda",serve:"Čepované",garden:"Ano",food:"Ne",craft:"Craft",beers:[{name:"Podle aktuální nabídky",cat:"Craft",serve:"Čepované"},{name:"Podle aktuální nabídky",cat:"Craft",serve:"Lahvové"}],hours:"Pondělí 15–22\nÚterý 15–22\nStředa 15–22\nČtvrtek 15–22\nPátek 14–23\nSobota 15–23\nNeděle Zavřeno",address:"Hartigova 1819, 130 00 Praha 3 – Žižkov",desc:"Tradiční žižkovský bar a skvěle zásobená pivotéka v jednom, ležící přímo u vozovny Žižkov. Nabízí příjemné, neformální prostředí s rotujícími pípami plnými českých i zahraničních řemeslných speciálů, které doplňují stovky druhů piv v lahvích a plechovkách.",lat:50.091520,lng:14.473659},
  {id:25,name:"Bullerbyn",district:"Vinohrady",hood:"Praha 2",type:"Bar",serve:"Čepované",garden:"Ne",food:"Ano",craft:"Craft",beers:[{name:"Podle aktuální nabídky",cat:"Craft",serve:"Čepované"}],hours:"Pondělí 14–1\nÚterý 14–1\nStředa 14–1\nČtvrtek 14–1\nPátek 14–1\nSobota 11–1\nNeděle 11–0",address:"Chodská 17, 120 00 Praha 2 – Vinohrady",desc:"Stylový vinohradský bar s uvolněnou atmosférou, kde přes den servírují menší stálé menu a večer skvělé drobnosti k pivu. Nabízí pečlivě ošetřené řemeslné pivo na čepu, včetně měnících se nealkoholických speciálů.",lat:50.074567,lng:14.445674},
  {id:31,name:"Čep&Pec",district:"Nusle",hood:"Praha 2",type:"Bar",serve:"Čepované",garden:"Ne",food:"Ano",craft:"Craft",beers:[{name:"Podle aktuální nabídky",cat:"Craft",serve:"Čepované"}],hours:"Pondělí 15–0\nÚterý 15–0\nStředa 15–0\nČtvrtek 15–0\nPátek 15–0\nSobota 15–0\nNeděle 15–22",address:"Svatoplukova 528, 128 00 Praha 2 – Nusle",desc:"Příjemný rodinný podnik originálně spojující výčep a řemeslnou pekárnu. V autentické atmosféře si vychutnáte pestrou škálu piv z malých pivovarů, čerstvé pečivo a poctivé jídlo z lokálních surovin, včetně řemeslných nealkoholických speciálů.",lat:50.065814,lng:14.429984},
  {id:32,name:"Břevnovský klášterní pivovar",district:"Břevnov",hood:"Praha 6",type:"Restaurace",serve:"Čepované",garden:"Ano",food:"Ano",craft:"Craft",beers:[{name:"Benedict nealko",cat:"Craft",serve:"Čepované"},{name:"Benedict nealko",cat:"Craft",serve:"Lahvové"}],hours:"Pondělí 11:30–23\nÚterý 11:30–23\nStředa 11:30–23\nČtvrtek 11:30–23\nPátek 11:30–23\nSobota 11:30–23\nNeděle 11:30–23",address:"Markétská 1/28, 169 00 Praha 6 – Břevnov",desc:"Nejstarší mužský klášter v Čechách, úzce spjatý s výrobou piva od roku 993. Nový pivovar z roku 2011 navazuje na tuto tradici a kromě poctivých alkoholických ležáků vaří také vlastní vynikající nealkoholické pivo Nealko Benedict.",lat:50.083777,lng:14.356343},
  {id:34,name:"Avoid Floating Gallery",district:"Nové Město",hood:"Praha 2",type:"Bar",serve:"Čepované",garden:"Ano",food:"Drobné občerstvení",craft:"Craft",beers:[{name:"Podle aktuální nabídky",cat:"Craft",serve:"Čepované"}],hours:"Pondělí 16–0\nÚterý 16–0\nStředa 16–0\nČtvrtek 16–0\nPátek 16–0\nSobota 14–0\nNeděle 14–0",address:"Rašínovo nábř. 2, 120 00 Praha 2 – Nové Město",desc:"Unikátní plovoucí bar a galerie na pražské Náplavce, kde se skvěle kloubí kulturní zážitky s relaxací na vlnách. Kromě koncertů a výstav nabízí pravidelně se střídající craftová piva z malých pivovarů, která si nejlépe vychutnáte na otevřené palubě při západu slunce nad Hradčany. Vedle alkoholických speciálů je na čepu pokaždé připravena také plnohodnotná řemeslná nealko varianta podle aktuální rotující nabídky.",lat:50.067714,lng:14.414487},
  {id:35,name:"Barcelounoc",district:"Vinohrady",hood:"Praha 2",type:"Bar",serve:"Čepované",garden:"Ne",food:"Drobné občerstvení",craft:"Craft",beers:[{name:"Vinohradská 12 nealko",cat:"Craft",serve:"Čepované"}],hours:"Pondělí 18–2\nÚterý 18–2\nStředa 18–2\nČtvrtek 18–2\nPátek 18–3\nSobota 18–3\nNeděle 18–2",address:"J. Masaryka 265/58, 120 00 Praha 2 – Vinohrady",desc:"Živý vinohradský bar s uvolněnou noční atmosférou, kam můžete zajít na skvělý drink i poctivé lokální pivo. Pro ty, kteří dávají přednost nealkoholické variantě a chtějí si užít večer naplno, mají na čepu vždy výbornou řemeslnou nulu Vinohradská 12 nealko z nedalekého Vinohradského pivovaru.",lat:50.072778,lng:14.441478},
  {id:37,name:"Bistro Karel",district:"Troja",hood:"Praha 7",type:"Restaurace",serve:"Čepované",garden:"Ano",food:"Ano",craft:"Craft",beers:[{name:"Clock Krystus nealko IPA",cat:"Craft",serve:"Čepované"},{name:"Clock Nana nealko sour ale",cat:"Craft",serve:"Čepované"}],hours:"Pondělí Zavřeno\nÚterý 9–22\nStředa 9–22\nČtvrtek 9–22\nPátek 9–22\nSobota 9–22\nNeděle 9–20",address:"U Trojského zámku 2/6, 171 00 Praha 7 – Troja",desc:"Stylové a moderní bistro situované v bezprostřední blízkosti Trojského zámku, obklopené zelení. Je to ideální oáza pro rodiny i cyklisty hledající kvalitní gastronomii, kde navíc maximálně myslí na milovníky řemeslného piva bez alkoholu. Na pípě totiž vedle běžné nabídky střídají špičkové nealko speciály od pivovaru Clock – osvěžující hořkou nealko IPA Krystus a ovocnou, lehkou nealko sour ale Clock Nana.",lat:50.114954,lng:14.411343},
  {id:38,name:"Vinohradský pivovar",district:"Vinohrady",hood:"Praha 10",type:"Hospoda",serve:"Čepované",garden:"Ne",food:"Ano",craft:"Craft",beers:[{name:"Vinohradská 12 nealko",cat:"Craft",serve:"Čepované"},{name:"Vinohradská 12 nealko",cat:"Craft",serve:"Lahvové"},{name:"Vinohradská Hazy Galaxy IPA",cat:"Craft",serve:"Čepované"},{name:"Vinohradská Hazy Galaxy IPA",cat:"Craft",serve:"Lahvové"}],hours:"Pondělí 11–0\nÚterý 11–0\nStředa 11–0\nČtvrtek 11–0\nPátek 11–0\nSobota 11–0\nNeděle 11–22",address:"Korunní 90, 101 00 Praha 10 – Vinohrady",desc:"Tradiční městský řemeslný pivovar s prostorným, vzdušným interiérem a skvělou kuchyní. Jsou průkopníky v tom, že i nealkoholické pivo berou jako plnohodnotný gastronomický zážitek. Vedle svých klasických ležáků tak hrdě čepují vlastní Vinohradskou 12 nealko a především vyhlášenou, chmelově intenzivní nealko nefiltrovanou IPA Vinohradská Hazy Galaxy, která svou vůní směle konkuruje alkoholickým speciálům.",lat:50.075298,lng:14.457606},
  {id:39,name:"Beer Time",district:"Smíchov",hood:"Praha 5",type:"Restaurace",serve:"Čepované",garden:"Ano",food:"Ano",craft:"Craft",beers:[{name:"Podle aktuální nabídky",cat:"Craft",serve:"Čepované"}],hours:"Pondělí 11–23:30\nÚterý 11–23:30\nStředa 11–23:30\nČtvrtek 11–1\nPátek 11–1\nSobota 12–23:30\nNeděle 12–22",address:"Nádražní 61/116, 150 00 Praha 5 – Smíchov",desc:"Moderní pivní ráj na Smíchově, který láká na obrovské množství píp a neustále se obměňující nabídku piv z malých pivovarů. Zkrátka zde nepřijdou ani ti, co zrovna řídí nebo nechtějí alkohol – vedle desítek klasických craftů na čepu stabilně najdete 1 až 2 druhy poctivých, čepovaných řemeslných nealko piv podle aktuální denní nabídky.",lat:50.071276,lng:14.404765},
  {id:40,name:"BIG SMOKERS",district:"Holešovice",hood:"Praha 7",type:"Restaurace",serve:"Čepované",garden:"Ano",food:"Ano",craft:"Craft",beers:[{name:"Clock Krystus nealko IPA",cat:"Craft",serve:"Čepované"}],hours:"Pondělí Zavřeno\nÚterý Zavřeno\nStředa 11:30–22\nČtvrtek 11:30–22\nPátek 11:30–22\nSobota 11:30–22\nNeděle 11:30–20",address:"Dělnická 643/40, 170 00 Praha 7 – Holešovice",desc:"Autentický americký BBQ smokehouse v Holešovicích, kde hraje hlavní roli maso pomalu uzené na dřevě. Drsnou a poctivou atmosféru podniku a plnou chuť barbecue skvěle doplňuje nejen alkoholické řemeslné pivo, ale také jeho bezchybná nealko varianta – hořká, výborně vychlazená čepovaná nealko IPA Krystus od řemeslného pivovaru Clock.",lat:50.103019,lng:14.450957},
  {id:41,name:"Čtyrka",district:"Holešovice",hood:"Praha 7",type:"Hospoda",serve:"Čepované",garden:"Ano",food:"Ano",craft:"Craft",beers:[{name:"Clock Krystus nealko IPA",cat:"Craft",serve:"Čepované"},{name:"Primátor Tchyně India Pale Lager nealko",cat:"Craft",serve:"Čepované"}],hours:"Pondělí 11–23:30\nÚterý 11–23:30\nStředa 11–23:30\nČtvrtek 11–23:30\nPátek 11–23:30\nSobota 12–22:30\nNeděle 17–22",address:"Komunardů 1001/30, 170 00 Praha 7 – Holešovice",desc:"Oblíbená holešovická hospoda s uvolněným švihem a moderním interiérem, kam lidé rádi chodí na dobrý oběd i večerní posezení s přáteli. Na čepu pravidelně rotují skvělá piva a jejich nabídka nealko craftu snese ta nejpřísnější měřítka – k alkoholickým kouskům tu jako plnohodnotnou alternativu nabízí čepovanou nealko IPA Krystus od Clocka nebo chuťově výraznou nealko Tchýni od Primátora.",lat:50.103732,lng:14.450247},
  {id:43,name:"Mrtvá ryba",district:"Nové Město",hood:"Praha 2",type:"Hospoda",serve:"Čepované",garden:"Ano",food:"Drobné občerstvení",craft:"Craft",beers:[{name:"Crafty, nealko podle nabídky",cat:"Craft",serve:"Čepované"}],hours:"Pondělí 9–0:30\nÚterý 9–0:30\nStředa 9–0:30\nČtvrtek 9–0:30\nPátek 11–0:30\nSobota Zavřeno\nNeděle 18–23",address:"Benátská 4/1965, 128 00 Praha 2 – Nové Město",desc:"Legendární studentský podnik skrytý v Albertově, který slouží jako oblíbené útočiště nejen pro studenty přilehlé Přírodovědecké fakulty UK. Vyznačuje se domáckou, lehce punkovou atmosférou, skvělou zahrádkou ve dvoře a překvapivě dobrou nabídkou nápojů. K točeným alkoholickým klasikám tu na čepu pro abstinenty a řidiče vždy běží i výborná craftová nealko piva podle aktuální sezónní nabídky.",lat:50.072451,lng:14.423056},
  {id:44,name:"Burza 4",district:"Holešovice",hood:"Praha 7",type:"Bar",serve:"Čepované",garden:"Ano",food:"Ano",craft:"Craft",beers:[{name:"Vinohradská 12 nealko",cat:"Craft",serve:"Čepované"}],hours:"Pondělí 16–0\nÚterý 16–0\nStředa 16–2\nČtvrtek 15–2\nPátek 15–3\nSobota 15–3\nNeděle 16–0",address:"Bubenské nábř. 306/13, 170 00 Praha 7 – Holešovice",desc:"Živý a stylový industriální bar situovaný přímo v srdci Pražské tržnice v Holešovicích. Tento vyhlášený hipster spot nabízí skvělou venkovní atmosféru, kulturní akce a k široké škále alkoholických drinků a piv nabízí na osvěžení výtečnou řemeslnou nealkoholickou dvanáctku z Vinohradského pivovaru přímo na čepu.",lat:50.098408,lng:14.445307},
  // === SKUPINA 2: pouze lahvový craft ===
  {id:21,name:"Lasagneria Holešovice",district:"Holešovice",hood:"Praha 7",type:"Restaurace",serve:"Lahvové",garden:"Ne",food:"Ano",craft:"Craft",beers:[{name:"Kocour Tom Cat - Nealko",cat:"Craft",serve:"Lahvové"}],hours:"Pondělí 11–21\nÚterý 11–21\nStředa 11–21\nČtvrtek 11–21\nPátek 11–21\nSobota 11–21\nNeděle Zavřeno",address:"Komunardů 26, 170 00 Praha 7 – Holešovice",desc:"Autentická italská lasagnerie v srdci Holešovic vsázející na poctivou ruční výrobu domácích lasagní. V moderním interiéru nabízí masovou klasiku, prémiové verze s pistáciovým pestem i vegetariánské alternativy, doplněné o skvělé tiramisu a řemeslné nealko pivo z minipivovaru Kocour.",lat:50.103358,lng:14.450168},
  {id:24,name:"Beer Bar Manifesto",district:"Smíchov",hood:"Praha 5",type:"Bar",serve:"Čepované",garden:"Ano",food:"Drobné občerstvení",craft:"Birell",beers:[{name:"Birell",cat:"Birell",serve:"Čepované"},{name:"Clock Krystus nealko IPA",cat:"Craft",serve:"Lahvové"}],hours:"Pondělí 11–22\nÚterý 11–22\nStředa 11–22\nČtvrtek 11–0\nPátek 11–0\nSobota 11–0\nNeděle 11–22",address:"Ostrovského 34, 150 00 Praha 5 – Smíchov",desc:"Moderní pivní bar v areálu Manifesto Marketu na Andělu s posezením pod širým nebem. Na čepu najdete Birell a v chladicích boxech řemeslný nealko speciál Clock Krystus IPA z pivovaru Clock.",lat:50.069299,lng:14.404127},
  {id:27,name:"Unijazz",district:"Žižkov",hood:"Praha 3",type:"Bar",serve:"Lahvové",garden:"Ano",food:"Drobné občerstvení",craft:"Craft",beers:[{name:"Clock Krystus nealko IPA",cat:"Craft",serve:"Lahvové"},{name:"Birell",cat:"Birell",serve:"Lahvové"},{name:"Bernard",cat:"Tradiční",serve:"Lahvové"}],hours:"Pondělí 14–23\nÚterý 14–23\nStředa 14–23\nČtvrtek 14–23\nPátek 14–23\nSobota 16–0\nNeděle Zavřeno",address:"Husitská 22, 130 00 Praha 3 – Žižkov",desc:"Legendární kulturní a společenské centrum s nezaměnitelnou, uvolněnou atmosférou a útulným interiérem. Nabízí skvělé sendviče a čerstvé bagety a široký výběr lahvových nealko variant, kterým dominuje nealkoholický speciál Clock Krystus.",lat:50.087186,lng:14.441133},
  {id:42,name:"malý pivo",district:"Vinohrady",hood:"Praha 10",type:"Bar",serve:"Lahvové",garden:"Ano",food:"Drobné občerstvení",craft:"Craft",beers:[{name:"Podle aktuální nabídky: Clock, Zichovec, Sibeeria a další",cat:"Craft",serve:"Lahvové"}],hours:"Pondělí 16–23\nÚterý 16–23\nStředa 16–23\nČtvrtek 16–23\nPátek 16–23\nSobota 16–23\nNeděle 16–23",address:"Mrštíkova 2450/1, 100 00 Praha 10 – Vinohrady",desc:"Útulná pivotéka s nesmírně přátelským a edukovaným personálem, který vám s láskou pomůže vybrat to pravé. Vedle klasických alkoholických speciálů disponují lednicí napěchovanou těmi nejlepšími českými i zahraničními řemeslnými nealko pivy v plechovkách od špičkových pivovarů jako Clock, Zichovec či Sibeeria, takže můžete bez obav ochutnávat klidně celý večer.",lat:50.072658,lng:14.485608},
  // === SKUPINA 3: čepovaná tradiční (vč. Birell) ===
  {id:14,name:"Kasárny Karlín",district:"Karlín",hood:"Praha 8",type:"Bar",serve:"Čepované",garden:"Ano",food:"Ano",craft:"Tradiční",beers:[{name:"Bakalář nealko",cat:"Tradiční",serve:"Čepované"},{name:"Maisel IPA Alkoholfrei",cat:"Tradiční",serve:"Lahvové"}],hours:"Pondělí 11:30–16\nÚterý 11:30–22\nStředa 11:30–22\nČtvrtek 11:30–22\nPátek 11:30–22\nSobota 11:30–22\nNeděle 11:30–22",address:"Prvního pluku 20/2, 186 00 Praha 8 – Karlín",desc:"Kulturní oáza v srdci Karlína, kde se vojenská přísnost proměnila v uvolněný prostor pro film, hudbu a setkávání. Na rozlehlém nádvoří Kasáren chutná pivo nejlépe pod širým nebem, ať už sedíte u ohniště nebo v letním kině. K téhle unikátní industriální atmosféře si tu můžete vždycky dát poctivé nealko.",lat:50.090058,lng:14.443827},
  {id:26,name:"Bar Hvězda",district:"Vinohrady",hood:"Praha 2",type:"Bar",serve:"Čepované",garden:"Ano",food:"Ano",craft:"Tradiční",beers:[{name:"Bernard Švestka Nealko",cat:"Tradiční",serve:"Čepované"},{name:"Bakalář Nealko",cat:"Tradiční",serve:"Lahvové"}],hours:"Pondělí 10–0:30\nÚterý 10–0:30\nStředa 10–0:30\nČtvrtek 10–0:30\nPátek 10–0:30\nSobota 10–0:30\nNeděle 10–0:30",address:"Polská 1, 120 00 Praha 2 – Vinohrady",desc:"Stylový vinohradský bar v Riegrových sadech s uvolněnou sousedskou atmosférou a moderním interiérem, který v létě doplňuje velmi příjemná terasa. Nabízí skvěle ošetřené pivo včetně nealko variant a menší stálou nabídku teplého jídla a sendvičů.",lat:50.078862,lng:14.442026},
  {id:29,name:"Přístav 18600",district:"Karlín",hood:"Praha 8",type:"Bar",serve:"Čepované",garden:"Ano",food:"Ne",craft:"Birell",beers:[{name:"Birell",cat:"Birell",serve:"Čepované"},{name:"Birell",cat:"Birell",serve:"Lahvové"}],hours:"Pondělí 11–23\nÚterý 11–23\nStředa 11–23\nČtvrtek 11–23\nPátek 11–23\nSobota 10–23\nNeděle 10–23",address:"Rohanský ostrov 8, 186 00 Praha 8 – Karlín",desc:"Jedinečný open-air prostor na břehu Vltavy kombinující uvolněnou atmosféru letního kulturního centra s oázou klidu uprostřed města. Ideální místo pro setkání s přáteli, drink po práci nebo odpočinek u řeky s točeným nealko Birellem.",lat:50.095823,lng:14.447490},
  {id:3,name:"Dejvická Sokolovna",district:"Dejvice",hood:"Praha 6",type:"Restaurace",serve:"Čepované",garden:"Ne",food:"Ano",craft:"Birell",beers:[{name:"Birrel",cat:"Birell",serve:"Čepované"}],hours:"Pondělí 10:30–23\nÚterý 10:30–23\nStředa 10:30–0\nČtvrtek 10:30–15\nPátek 10:30–0\nSobota 11–23\nNeděle 11–22",address:"Dejvická 181/2, 160 00 Praha 6 – Dejvice",desc:"Moderní česká restaurace s více než stoletou tradicí, která se zaměřuje na poctivou domácí kuchyni a čepované tankové pivo. Nabízí neformální atmosféru klasické pivnice v příjemném moderním interiéru.",lat:50.0980662,lng:14.4047094},
  {id:9,name:"U Houdků",district:"Žižkov",hood:"Praha 3",type:"Restaurace",serve:"Čepované",garden:"Ano",food:"Ano",craft:"Birell",beers:[{name:"Birell",cat:"Birell",serve:"Čepované"},{name:"Birell polotmavé",cat:"Birell",serve:"Lahvové"}],hours:"Pondělí 11–0\nÚterý 11–0\nStředa 11–0\nČtvrtek 11–0\nPátek 11–0\nSobota 11–0\nNeděle 11–23",address:"Bořivojova 693/110, 130 00 Praha 3 – Žižkov",desc:"Tradiční pražská restaurace na Žižkově s historií sahající do roku 1923, která je vyhlášená nadstandardními porcemi klasické české kuchyně. Nabízí autentické prostředí staré Prahy a vyhledávanou letní zahrádku v klidném vnitrobloku.",lat:50.0824601,lng:14.445716},
  {id:33,name:"Krčma u Sváry",district:"Hodkovičky",hood:"Praha 4",type:"Bar",serve:"Čepované",garden:"Ano",food:"Drobné občerstvení",craft:"Tradiční",beers:[{name:"Lobkowicz nealko",cat:"Tradiční",serve:"Čepované"}],hours:"Pondělí Zavřeno\nÚterý Zavřeno\nStředa 15–21\nČtvrtek 15–21\nPátek 15–21\nSobota 12–22\nNeděle 12–20",address:"Lodnická 1, 147 00 Praha 4 – Hodkovičky",desc:"Neformální venkovní okénko s přilehlým posezením v Hodkovičkách, které láká kolemjdoucí i cyklisty na orosené pivo. K pití nabízí klasické hospodské chuťovky k zakousnutí. Ideální zastávka pro letní osvěžení během procházky podél Vltavy, kde si na své přijdou i řidiči či sportovci – na čepu je pro ně připraveno osvěžující nealkoholické pivo Lobkowicz.",lat:50.023821,lng:14.398109},
  {id:36,name:"Dish Belgická",district:"Vinohrady",hood:"Praha 2",type:"Restaurace",serve:"Čepované",garden:"Ne",food:"Ano",craft:"Tradiční",beers:[{name:"Maisel's Weisse nealko",cat:"Tradiční",serve:"Čepované"}],hours:"Pondělí 11–23\nÚterý 11–23\nStředa 11–23\nČtvrtek 11–23\nPátek 11–23\nSobota 11–23\nNeděle 12–22",address:"Belgická 335/26, 120 00 Praha 2 – Vinohrady",desc:"Legendární pražská burgrárna vyhlášená svými vyladěnými gurmánskými burgery a precizním servisem. K těžšímu šťavnatému masu zde geniálně pasuje čepované nealkoholické pšeničné pivo Maisel's Weisse, které celé jídlo skvěle osvěží, odlehčí a představuje ideální řemeslnou nealko alternativu k alkoholickým ležákům na lístku.",lat:50.073056,lng:14.436189},
  // === SKUPINA 4: pouze lahvová tradiční (vč. Birell) ===
  {id:23,name:"Betlemska club",district:"Staré Město",hood:"Praha 1",type:"Bar",serve:"Lahvové",garden:"Ano",food:"Ne",craft:"Tradiční",beers:[{name:"Budvar nealko",cat:"Tradiční",serve:"Lahvové"},{name:"Maisels Weisse alkoholfrei",cat:"Tradiční",serve:"Lahvové"},{name:"Maisels Weisse alkoholfrei Ale",cat:"Tradiční",serve:"Lahvové"}],hours:"Pondělí 11–22\nÚterý 11–22\nStředa 11–22\nČtvrtek 11–22\nPátek 11–22\nSobota 11–22\nNeděle 11–22",address:"Betlémské nám. 5a, 110 00 Praha 1 – Staré Město",desc:"Osobitá umělecká kavárna a bar situovaná přímo v areálu Betlémské kaple. Nový multikulturní projekt v historickém centru Prahy spojuje skvělou kávu, večerní drinky a uvolněnou sousedskou atmosféru s pravidelnými jam sessions a komunitními akcemi.",lat:50.084483,lng:14.417897},
  {id:28,name:"Lampičky",district:"Žižkov",hood:"Praha 3",type:"Restaurace",serve:"Lahvové",garden:"Ano",food:"Ano",craft:"Tradiční",beers:[{name:"Krušovice nealko",cat:"Tradiční",serve:"Lahvové"}],hours:"Pondělí 11–23\nÚterý 11–23\nStředa 11–23\nČtvrtek 11–23\nPátek 11–23\nSobota 11–23\nNeděle 11–23",address:"Hartigova 1886/173, 130 00 Praha 3 – Žižkov",desc:"Příjemná restaurace na Žižkově v těsné blízkosti Jarovských kolejí, populární především pro své skvělé a šťavnaté burgry. Jako osvěžující nealko variantu nabízejí lahvové nealko Krušovice.",lat:50.092428,lng:14.481047},
  {id:30,name:"Cafe Barrandé",district:"Žižkov",hood:"Praha 3",type:"Hospoda",serve:"Lahvové",garden:"Ano",food:"Drobné občerstvení",craft:"Tradiční",beers:[{name:"Bakalář Nealko",cat:"Tradiční",serve:"Lahvové"}],hours:"Pondělí Zavřeno\nÚterý 16–22\nStředa 16–22\nČtvrtek 16–22\nPátek 16–22\nSobota Zavřeno\nNeděle Zavřeno",address:"Ježkova 8, 130 00 Praha 3 – Žižkov",desc:"Kouzelný rodinný bar s nostalgickou atmosférou, dobovým interiérem a swingovou hudbou. Pravidelně ožívá kulturními akcemi a v létě láká na klidnou zahrádku ve vnitrobloku. Nabízí poctivé koktejly, kvalitní vína a lahvového Bakaláře jako nealko variantu.",lat:50.081878,lng:14.446070},
  {id:7,name:"U Sadu",district:"Žižkov",hood:"Praha 3",type:"Hospoda",serve:"Čepované",garden:"Ano",food:"Ano",craft:"Birell",beers:[{name:"Birrel",cat:"Birell",serve:"Lahvové"}],hours:"Pondělí 8–2\nÚterý 8–4\nStředa 8–4\nČtvrtek 8–4\nPátek 8–4\nSobota 8–4\nNeděle 8–2",address:"Škroupovo nám. 1282/5, 130 00 Praha 3 – Žižkov",desc:"Tradiční žižkovská restaurace a bar s téměř nepřetržitým provozem, který je kultovním místem pražské undergroundové scény. Nabízí unikátní interiér plný historických artefaktů, širokou nabídku české i mezinárodní kuchyně včetně snídaní.",lat:50.0805308,lng:14.4492094},
  {id:10,name:"U Habásků",district:"Žižkov",hood:"Praha 3",type:"Bar",serve:"Lahvové",garden:"Ne",food:"Drobné občerstvení",craft:"Birell",beers:[{name:"Birell",cat:"Birell",serve:"Lahvové"}],hours:"Pondělí 16–0\nÚterý 16–0\nStředa 16–0\nČtvrtek 16–0\nPátek 16–2\nSobota 16–2\nNeděle 16–23",address:"Husinecká 29, 130 00 Praha 3 – Žižkov",desc:"Klasická žižkovská sousedská hospoda s domáckou atmosférou, která si zachovává ráz poctivého lokálního podniku. Nabízí tradiční výčep, jednoduchou kuchyni a klidné zázemí pro stálé hosty i návštěvníky hledající klid mimo hlavní turistické trasy.",lat:50.0858298,lng:14.4464288}
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
