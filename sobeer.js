var BARS=[
  {id:1,name:"Cafe v lese",district:"Vršovice",hood:"Praha 10",type:"Craft bar",serve:"Točené",garden:"Ne",food:"Ne",craft:"Craft",beers:["Chříč Balanc 0% IPA","Paulaner Weissbier 0%","Birrel"],hours:"Pondělí 16–2\nÚterý 16–2\nStředa 16–2\nČtvrtek 16–2\nPátek 16–2\nSobota 16–2\nNeděle 16–0",address:"Krymská 12, 101 00 Praha 10 – Vršovice",desc:"Moderní kulturní prostor a kavárna v srdci Vršovic. Retro interiér s živým hudebním programem a možností návštěvy koncertů v podzemním klubu.",lat:50.0713476,lng:14.448464},
  {id:4,name:"Automat Matuška Hradčanská",district:"Dejvice",hood:"Praha 6",type:"Craft bar",serve:"Točené",garden:"Ano",food:"Ano",craft:"Craft",beers:["Bylinný Střízlivec","Preisler-Motuečka"],hours:"Pondělí 11:30–0\nÚterý 11:30–0\nStředa 11:30–0\nČtvrtek 11:30–0\nPátek 11:30–0\nSobota 12–0\nNeděle 12–22",address:"Dejvická 184/4, 160 00 Praha 6 – Dejvice",desc:"Řemeslný výčep a bistro pivovaru Matuška. Minimalistický design, street food a důraz na čerstvost piva.",lat:50.0980426,lng:14.4042846},
  {id:5,name:"Automat Matuška JZP",district:"Vinohrady",hood:"Praha 3",type:"Craft bar",serve:"Točené",garden:"Ne",food:"Ano",craft:"Craft",beers:["Bylinný Střízlivec"],hours:"Pondělí 11:30–0\nÚterý 11:30–0\nStředa 11:30–0\nČtvrtek 11:30–0\nPátek 11:30–0\nSobota 12–0\nNeděle 12–22",address:"nám. J. z Poděbrad 16, 130 00 Praha 3 – Vinohrady",desc:"Druhá pobočka Automatu Matuška na náměstí Jiřího z Poděbrad. Craft nealko na čepu v minimalistickém prostředí.",lat:50.0785018,lng:14.4504055},
  {id:6,name:"Dva Kohouti",district:"Karlín",hood:"Praha 8",type:"Craft bar",serve:"Točené",garden:"Ano",food:"Ano",craft:"Craft",beers:["Proovan Hazy IPA"],hours:"Pondělí 15–1\nÚterý 15–1\nStředa 15–1\nČtvrtek 15–1\nPátek 15–1\nSobota 12–1\nNeděle 12–22",address:"Sokolovská 81/55, 186 00 Praha 8 – Karlín",desc:"Řemeslný pivovar s výčepem v Karlíně. Živá atmosféra a důraz na čerstvé pivo.",lat:50.09349,lng:14.4468455},
  {id:11,name:"Dno Pytle",district:"Vinohrady",hood:"Praha 2",type:"Craft bar",serve:"Točené",garden:"Ne",food:"Drobné občerstvení",craft:"Craft",beers:["Podle aktuální nabídky"],hours:"Pondělí 16–23\nÚterý 16–1\nStředa 16–1\nČtvrtek 16–1\nPátek 16–1\nSobota 18–1\nNeděle 18–23",address:"Vinohradská 63, 120 00 Praha 2 – Vinohrady",desc:"Nekuřácká pivnice s osmi pipy a pravidelně obměňovanou nabídkou českých i zahraničních craft speciálů.",lat:50.0771063,lng:14.4428117},
  {id:12,name:"Pivovar Uhříněves",district:"Uhříněves",hood:"Praha 22",type:"Restaurace",serve:"Točené",garden:"Ano",food:"Ano",craft:"Craft",beers:["Alois Šofér"],hours:"Pondělí 11–23\nÚterý 11–23\nStředa 11–23\nČtvrtek 11–23\nPátek 11–23\nSobota 11–23\nNeděle 11–22",address:"K Sokolovně 38, 104 00 Praha 22 – Uhříněves",desc:"Restaurace pivovaru Uhříněves s vlastní nealko variantou Alois Šofér. Rustikální interiér a venkovní zahrádka.",lat:50.0296992,lng:14.6049522},
  {id:13,name:"Fatfuck Vinohradská",district:"Vinohrady",hood:"Praha 2",type:"Restaurace",serve:"Točené",garden:"Ano",food:"Ano",craft:"Craft",beers:["Alois Šofér"],hours:"Pondělí Zavřeno\nÚterý 12–22\nStředa 12–22\nČtvrtek 12–22\nPátek 12–22\nSobota 12–22\nNeděle 10–21",address:"Vinohradská 1241/67, 120 00 Praha 2 – Vinohrady",desc:"Bistro specializované na smashed burgery z prémiových surovin. Čepované nealko pivo Alois Šofér z Pivovaru Uhříněves.",lat:50.0771324,lng:14.4435489},
  {id:2,name:"Klub Petrohradská",district:"Vršovice",hood:"Praha 10",type:"Craft bar",serve:"Lahvové",garden:"Ano",food:"Ne",craft:"Tradiční",beers:["Birrel"],hours:"Pondělí 8:30–23:30\nÚterý 8:30–23:30\nStředa 8:30–23:30\nČtvrtek 8:30–23:30\nPátek 8:30–23:30\nSobota 16–23:30\nNeděle 16–22:30",address:"Petrohradská 438/13, 101 00 Praha 10 – Vršovice",desc:"Alternativní kulturní centrum v areálu bývalé továrny. Industriální interiér a rozlehlý dvůr pro neformální setkávání.",lat:50.0649507,lng:14.4523275},
  {id:3,name:"Dejvická Sokolovna",district:"Dejvice",hood:"Praha 6",type:"Restaurace",serve:"Točené",garden:"Ne",food:"Ano",craft:"Tradiční",beers:["Birrel","Birrel pomelo-grep"],hours:"Pondělí 10:30–23\nÚterý 10:30–23\nStředa 10:30–0\nČtvrtek 10:30–15\nPátek 10:30–0\nSobota 11–23\nNeděle 11–22",address:"Dejvická 181/2, 160 00 Praha 6 – Dejvice",desc:"Česká restaurace s více než stoletou tradicí. Poctivá kuchyně a čepované tankové pivo.",lat:50.0980662,lng:14.4047094},
  {id:7,name:"U Sadu",district:"Žižkov",hood:"Praha 3",type:"Hospoda",serve:"Točené",garden:"Ano",food:"Ano",craft:"Tradiční",beers:["Birrel pomelo-grep"],hours:"Pondělí 8–2\nÚterý 8–4\nStředa 8–4\nČtvrtek 8–4\nPátek 8–4\nSobota 8–4\nNeděle 8–2",address:"Škroupovo nám. 1282/5, 130 00 Praha 3 – Žižkov",desc:"Kultovní žižkovská hospoda s téměř nepřetržitým provozem. Unikátní interiér a nabídka kuchyně včetně snídaní.",lat:50.0805308,lng:14.4492094},
  {id:9,name:"U Houdků",district:"Žižkov",hood:"Praha 3",type:"Restaurace",serve:"Točené",garden:"Ano",food:"Ano",craft:"Tradiční",beers:["Birell"],hours:"Pondělí 11–0\nÚterý 11–0\nStředa 11–0\nČtvrtek 11–0\nPátek 11–0\nSobota 11–0\nNeděle 11–23",address:"Bořivojova 693/110, 130 00 Praha 3 – Žižkov",desc:"Tradiční pražská restaurace od roku 1923. Nadstandardní porce klasické kuchyně a letní zahrádka.",lat:50.0824601,lng:14.445716},
  {id:8,name:"Kino Aero",district:"Žižkov",hood:"Praha 3",type:"Craft bar",serve:"Lahvové",garden:"Ano",food:"Drobné občerstvení",craft:"Tradiční",beers:["Birell"],hours:"Pondělí 14–0\nÚterý 14–0\nStředa 14–0\nČtvrtek 13–0\nPátek 14–0\nSobota 14–0\nNeděle 14–0",address:"Biskupcova 1733/31, 130 00 Praha 3 – Žižkov",desc:"Legendární artové kino s barem a prostorným dvorem. Kulturní uzel Žižkova.",lat:50.090083,lng:14.4718108},
  {id:10,name:"U Habásků",district:"Žižkov",hood:"Praha 3",type:"Craft bar",serve:"Lahvové",garden:"Ne",food:"Drobné občerstvení",craft:"Tradiční",beers:["Birell"],hours:"Pondělí 16–0\nÚterý 16–0\nStředa 16–0\nČtvrtek 16–0\nPátek 16–2\nSobota 16–2\nNeděle 16–23",address:"Husinecká 29, 130 00 Praha 3 – Žižkov",desc:"Klasická žižkovská hospoda. Klidné zázemí mimo hlavní turistické trasy.",lat:50.0858298,lng:14.4464288}
];

var filtered=BARS.slice(),openId=null,miniMaps={},overviewMap=null,oMarkers=[];
var cookiesAccepted=false;
var SCRIPT_URL='https://script.google.com/macros/s/AKfycby9oixjNjwbY3yJMFOQh4W6Z43Vjt-4wZslqPh8GMCk5YMIVUKTcN2aR3bif73Erzs/exec';

// AGE GATE
function ageYes(){
  document.getElementById('age-gate').classList.add('hidden');
  try{sessionStorage.setItem('sobeer_age','1');}catch(e){}
  showCookieBanner();
}
function ageNo(){
  document.querySelector('.age-gate-btns').style.display='none';
  document.getElementById('age-denied').style.display='block';
}
(function(){
  try{
    if(sessionStorage.getItem('sobeer_age')==='1'){
      document.getElementById('age-gate').classList.add('hidden');
      showCookieBanner();
    }
  }catch(e){}
})();

// COOKIES
function showCookieBanner(){
  try{
    var pref=localStorage.getItem('sobeer_cookies');
    if(pref==='accepted'){cookiesAccepted=true;loadLeaflet();}
    else if(pref==='rejected'){cookiesAccepted=false;renderMapPlaceholders();}
    else{document.getElementById('cookie-banner').style.display='flex';}
  }catch(e){document.getElementById('cookie-banner').style.display='flex';}
}
function acceptCookies(){
  document.getElementById('cookie-banner').style.display='none';
  cookiesAccepted=true;
  try{localStorage.setItem('sobeer_cookies','accepted');}catch(e){}
  loadLeaflet();
}
function rejectCookies(){
  document.getElementById('cookie-banner').style.display='none';
  cookiesAccepted=false;
  try{localStorage.setItem('sobeer_cookies','rejected');}catch(e){}
  renderMapPlaceholders();
}
function renderMapPlaceholders(){
  var oMap=document.getElementById('overview-map');
  if(oMap){
    oMap.style.height='200px';
    oMap.innerHTML='<div class="map-placeholder" style="height:100%"><p>Pro zobrazení mapy povolte cookies</p><button onclick="resetCookies()">Nastavení cookies</button></div>';
  }
}
function resetCookies(){
  try{localStorage.removeItem('sobeer_cookies');}catch(e){}
  document.getElementById('cookie-banner').style.display='flex';
  var oMap=document.getElementById('overview-map');
  if(oMap){oMap.innerHTML='';oMap.style.height='500px';}
}
function miniMapPlaceholder(id){
  var el=document.getElementById('mm-'+id);
  if(el){el.innerHTML='<div style="height:220px;background:rgba(0,0,0,0.2);border:1px solid rgba(196,138,42,0.3);display:flex;flex-direction:column;align-items:center;justify-content:center;gap:1rem;position:relative"><p style="font-size:0.78rem;color:rgba(243,239,232,0.4);font-family:DM Sans,sans-serif;text-align:center;padding:0 1rem">Pro zobrazení mapy povolte cookies</p><button onclick="resetCookies()" style="padding:0.5rem 1.4rem;border:1px solid rgba(196,138,42,0.3);background:transparent;color:#C48A2A;font-size:0.65rem;letter-spacing:0.2em;text-transform:uppercase;font-family:DM Sans,sans-serif;cursor:pointer">Nastavení cookies</button></div>';}
}

// HAMBURGER
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

// PAGES
function showPage(id){
  document.getElementById('main-content').style.display=id==='home'?'':'none';
  document.getElementById('gdpr').style.display=id==='gdpr'?'block':'none';
  document.getElementById('cookies').style.display=id==='cookies'?'block':'none';
  window.scrollTo(0,0);
}

// CONTACT FORM
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

// BARS
function render(){
  filtered=filtered.slice().sort(function(a,b){
    function p(x){
      if(x.craft==='Craft'&&x.serve==='Točené')return 0;
      if(x.craft==='Craft'&&x.serve==='Lahvové')return 1;
      if(x.craft==='Tradiční'&&x.serve==='Točené')return 2;
      return 3;
    }
    return p(a)-p(b);
  });
  var list=document.getElementById('bars-list'),noRes=document.getElementById('no-results'),cnt=document.getElementById('results-count');
  Object.values(miniMaps).forEach(function(m){m.remove();});miniMaps={};list.innerHTML='';
  if(!filtered.length){noRes.style.display='block';cnt.innerHTML='';updateOMap();return;}
  noRes.style.display='none';
  var n=filtered.length;
  cnt.innerHTML='Zobrazeno <strong>'+n+'</strong> '+(n===1?'podnik':n<5?'podniky':'podniků');
  filtered.forEach(function(b){
    var div=document.createElement('div');
    div.className='bar-item'+(openId===b.id?' open':'');
    div.dataset.id=b.id;
    div.innerHTML=
      '<div class="bar-header" onclick="toggle('+b.id+')">'
        +'<div class="bar-header-left">'
          +'<div class="bar-meta-row"><span class="badge-type">'+b.type+'</span><span class="badge-district">'+b.district+' · '+b.hood+'</span></div>'
          +'<div class="bar-name">'+b.name+'</div>'
        +'</div>'
        +'<div class="bar-header-right">'
          +'<div class="pills">'
            +'<span class="pill'+(b.craft==='Craft'?' on':'')+'">Craft</span>'
            +'<span class="pill'+(b.garden==='Ano'?' on':'')+'">Zahrádka</span>'
            +'<span class="pill'+(b.food!=='Ne'?' on':'')+'">Jídlo</span>'
            +'<span class="pill on">'+b.serve+'</span>'
          +'</div>'
          +'<button class="toggle-btn" onclick="event.stopPropagation();toggle('+b.id+')">+</button>'
        +'</div>'
      +'</div>'
      +'<div class="bar-detail"><div class="bar-detail-inner">'
        +'<div>'
          +'<div class="detail-cols">'
            +'<div class="detail-col">'
              +'<div><div class="dl-label">Adresa</div><div class="dl-value">'+b.address+'</div></div>'
              +'<div><div class="dl-label">Otevírací doba</div><div class="dl-value">'+b.hours+'</div></div>'
            +'</div>'
            +'<div class="detail-col">'
              +'<div><div class="dl-label">Výběr piv</div><div class="dl-value">'+b.craft+'</div></div>'
              +'<div><div class="dl-label">Podávání</div><div class="dl-value">'+b.serve+'</div></div>'
              +'<div><div class="dl-label">Druhy piv</div><div class="dl-value">'+b.beers.join('\n')+'</div></div>'
              +'<div><div class="dl-label">Zahrádka</div><div class="dl-value">'+b.garden+'</div></div>'
              +'<div><div class="dl-label">Jídlo</div><div class="dl-value">'+b.food+'</div></div>'
            +'</div>'
          +'</div>'
          +'<div class="detail-desc">'+b.desc+'</div>'
        +'</div>'
        +'<div><div class="mini-map-label">Poloha</div><div class="mini-map" id="mm-'+b.id+'"></div></div>'
      +'</div></div>';
    list.appendChild(div);
  });
  if(openId&&filtered.find(function(b){return b.id===openId;}))setTimeout(function(){
    if(cookiesAccepted)initMini(openId);else miniMapPlaceholder(openId);
  },60);
  if(!cookiesAccepted)filtered.forEach(function(b){miniMapPlaceholder(b.id);});
  updateOMap();
  if(!cookiesAccepted)renderMapPlaceholders();
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
    if(cookiesAccepted)initMini(openId);else miniMapPlaceholder(openId);
  },380);
}

function initMini(id){
  if(miniMaps[id]||typeof L==='undefined')return;
  var bar=BARS.find(function(b){return b.id===id;}),el=document.getElementById('mm-'+id);
  if(!bar||!el)return;
  el.innerHTML='';
  var m=L.map(el,{zoomControl:false,attributionControl:false}).setView([bar.lat,bar.lng],15);
  L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png',{maxZoom:19}).addTo(m);
  L.marker([bar.lat,bar.lng],{icon:L.divIcon({className:'',html:'<div class="custom-marker"></div>',iconSize:[10,10],iconAnchor:[5,5]})}).addTo(m);
  miniMaps[id]=m;
  setTimeout(function(){m.invalidateSize();},150);
}

function initOMap(){
  if(typeof L==='undefined')return;
  overviewMap=L.map('overview-map',{zoomControl:true,attributionControl:false}).setView([50.086,14.42],13);
  L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png',{maxZoom:19}).addTo(overviewMap);
  updateOMap();
}

function updateOMap(){
  if(!overviewMap)return;
  oMarkers.forEach(function(m){overviewMap.removeLayer(m);});oMarkers=[];
  if(!filtered.length)return;
  var icon=L.divIcon({className:'',html:'<div class="custom-marker"></div>',iconSize:[10,10],iconAnchor:[5,5]});
  filtered.forEach(function(b){
    oMarkers.push(L.marker([b.lat,b.lng],{icon:icon})
      .bindPopup('<strong>'+b.name+'</strong><br/><span style="font-size:0.72rem;opacity:0.55">'+b.address+'</span>')
      .addTo(overviewMap));
  });
  overviewMap.fitBounds(L.featureGroup(oMarkers).getBounds().pad(0.25));
}

function applyFilters(){
  var s=document.getElementById('search-input').value.toLowerCase(),
      d=document.getElementById('f-district').value,
      t=document.getElementById('f-type').value,
      sv=document.getElementById('f-serve').value,
      cr=document.getElementById('f-craft').value,
      g=document.getElementById('f-garden').value;
  filtered=BARS.filter(function(b){
    return(!s||b.name.toLowerCase().includes(s)||b.district.toLowerCase().includes(s)||b.type.toLowerCase().includes(s)||b.beers.some(function(x){return x.toLowerCase().includes(s);}))
      &&(!d||b.district===d)&&(!t||b.type===t)&&(!sv||b.serve===sv)&&(!cr||b.craft===cr)&&(!g||b.garden===g);
  });
  openId=null;render();
}

['search-input','f-district','f-type','f-serve','f-craft','f-garden'].forEach(function(id){
  document.getElementById(id).addEventListener(id==='search-input'?'input':'change',applyFilters);
});

var ro=new IntersectionObserver(function(entries){
  entries.forEach(function(e,i){if(e.isIntersecting)setTimeout(function(){e.target.classList.add('visible');},i*60);});
},{threshold:0.08});
document.querySelectorAll('.reveal').forEach(function(el){ro.observe(el);});

window.addEventListener('scroll',function(){
  document.getElementById('nav').style.padding=window.scrollY>60?'1.2rem 4rem':'2rem 4rem';
});

function loadLeaflet(){
  var css=document.createElement('link');css.rel='stylesheet';
  css.href='https://unpkg.com/leaflet@1.9.4/dist/leaflet.css';
  document.head.appendChild(css);
  var s=document.createElement('script');
  s.src='https://unpkg.com/leaflet@1.9.4/dist/leaflet.js';
  s.onload=function(){initOMap();if(openId)initMini(openId);};
  document.head.appendChild(s);
}

render();
