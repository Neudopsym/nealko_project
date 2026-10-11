var filtered=BARS.slice(),openId=null,overviewMap=null,oMarkers=[];
var activeInfoWindow=null;
var mapsAccepted=false;
var SCRIPT_URL='https://script.google.com/macros/s/AKfycby9oixjNjwbY3yJMFOQh4W6Z43Vjt-4wZslqPh8GMCk5YMIVUKTcN2aR3bif73Erzs/exec';
var MAPS_KEY='AIzaSyBamFaNiV1DIVmyvzAj6Gs9_Rw7Uuly61w';

// ============ JAZYKOVÁ VRSTVA ============
// Jazyk určuje stránka: v en/index.html je před načtením tohoto souboru
// nastaveno SOBEER_LANG='en'. Bez toho běží čeština.
// POZOR: data v bars.js zůstávají česky — filtry i schéma na nich stojí.
// Překládá se teprve při vykreslení, funkcemi tv() a trHours().
var LANG=(typeof SOBEER_LANG!=='undefined')?SOBEER_LANG:'cs';

var STR={
  cs:{
    mapConsent:'Pro zobrazení mapy prosím potvrďte cookies v levém dolním rohu.',
    mapError:'Mapu se teď nepodařilo načíst. Adresu i navigaci k jednotlivým podnikům najdete v seznamu níže po rozkliknutí detailu.',
    sending:'Odesílám…',
    sendBtn:'Odeslat zprávu',
    lAddress:'Adresa', lHours:'Otevírací doba', lDraught:'Čepované',
    lBottled:'Lahvové', lGarden:'Zahrádka', lFood:'Jídlo',
    notOffered:'Není v nabídce',
    openInMaps:'Otevřít v mapách',
    pillCraft:'Craft', pillGarden:'Zahrádka', pillFood:'Jídlo',
    disclaimer:'* Informace o nabídce nealkoholických piv mají informativní charakter a mohou se měnit. Doporučujeme si dostupnost ověřit přímo v podniku.',
    schemaName:'Podniky s nealkoholickým pivem v Česku',
    schemaDesc:'Přehled barů, hospod a restaurací v Česku s nabídkou kvalitního nealkoholického piva.',
    cuisine:'Česká kuchyně',
    showing:function(n){return 'Zobrazeno <strong>'+n+'</strong> '+(n===1?'podnik':n<5?'podniky':'podniků');},
    countWord:function(n){return n+' '+((n===1)?'podnik':(n>=2&&n<=4)?'podniky':'podniků');}
  },
  en:{
    mapConsent:'To display the map, please accept cookies in the bottom left corner.',
    mapError:'The map could not be loaded right now. You will find the address and directions for each venue in the list below, once you open its detail.',
    sending:'Sending…',
    sendBtn:'Send message',
    lAddress:'Address', lHours:'Opening hours', lDraught:'On tap',
    lBottled:'Bottles & cans', lGarden:'Garden', lFood:'Food',
    notOffered:'Not available',
    openInMaps:'Open in Maps',
    pillCraft:'Craft', pillGarden:'Garden', pillFood:'Food',
    disclaimer:'* Information about the alcohol-free beer on offer is indicative and may change. We recommend checking availability directly with the venue.',
    schemaName:'Venues serving alcohol-free beer in Czechia',
    schemaDesc:'A guide to bars, pubs and restaurants across Czechia serving quality alcohol-free beer.',
    cuisine:'Czech cuisine',
    showing:function(n){return 'Showing <strong>'+n+'</strong> '+(n===1?'venue':'venues');},
    countWord:function(n){return n+' '+(n===1?'venue':'venues');}
  }
};
var T=STR[LANG]||STR.cs;

// Překlad hodnot, které jsou v datech uložené česky.
var VAL_EN={
  'Bar':'Bar','Hospoda':'Pub','Restaurace':'Restaurant',
  'Ano':'Yes','Ne':'No','Drobné občerstvení':'Light snacks',
  'Čepované':'Draught','Lahvové':'Bottles & cans',
  'Craft':'Craft','Tradiční':'Traditional','Birell':'Birell',
  'Podle aktuální nabídky':'Rotating tap',
  // záložní znění pro případ, že by se tahle hodnota objevila i mimo lahvový sloupec
  'Podle aktuální nabídky: Clock, Zichovec, Sibeeria a další':'Rotating selection: Clock, Zichovec, Sibeeria and others'
};

// „Podle aktuální nabídky" stojí v datech jednou, ale vykresluje se ve dvou
// sloupcích. V češtině sedí v obou, v angličtině ne — u lahví nelze mluvit
// o čepu. Proto má každý sloupec vlastní znění.
var VAL_EN_CTX={
  bottle:{
    'Podle aktuální nabídky':'Rotating selection',
    'Podle aktuální nabídky: Clock, Zichovec, Sibeeria a další':'Rotating selection: Clock, Zichovec, Sibeeria and others'
  }
};

function tv(v,ctx){
  if(LANG!=='en')return v;
  var c=ctx&&VAL_EN_CTX[ctx];
  if(c&&Object.prototype.hasOwnProperty.call(c,v))return c[v];
  return Object.prototype.hasOwnProperty.call(VAL_EN,v)?VAL_EN[v]:v;
}

// Otevírací doby jsou v datech jen česky. Názvy dnů se mapují až tady,
// aby se při změně otevírací doby neměnila dvě místa.
var DAYS_EN={'Pondělí':'Monday','Úterý':'Tuesday','Středa':'Wednesday',
             'Čtvrtek':'Thursday','Pátek':'Friday','Sobota':'Saturday','Neděle':'Sunday'};
function trHours(h){
  if(LANG!=='en'||!h)return h;
  return h.split('\n').map(function(line){
    for(var cz in DAYS_EN){
      if(line.indexOf(cz)===0){line=DAYS_EN[cz]+line.slice(cz.length);break;}
    }
    return line.replace(/Zavřeno/g,'Closed');
  }).join('\n');
}

// Popis podniku podle jazyka, s českým fallbackem.
function descOf(b){
  return (LANG==='en'&&b.descEn)?b.descEn:b.desc;
}

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
  s.onerror=function(){showMapError();};
  document.head.appendChild(s);
}

function showMapPlaceholders(){
  var msg='<div class="map-placeholder" style="height:100%"><p>'+T.mapConsent+'</p></div>';
  var oMap=document.getElementById('overview-map');
  if(oMap)oMap.innerHTML=msg;
}

// Mapa se nenačetla — vyčerpaná kvóta, problém s klíčem nebo blokovaný skript.
// Místo šedého overlaye od Googlu ukážeme vlastní hlášku; adresy a tlačítka
// „Otevřít v mapách" u jednotlivých podniků fungují dál, ta na mapě nezávisí.
function showMapError(){
  var oMap=document.getElementById('overview-map');
  if(!oMap)return;
  oMap.innerHTML='<div class="map-placeholder" style="height:100%">'
    +'<p>'+T.mapError+'</p></div>';
}

// Google volá tuhle funkci sám, když selže ověření klíče
// (vyčerpaná kvóta, neplatný klíč, nepovolená doména).
window.gm_authFailure=function(){showMapError();};

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
  btn.textContent=T.sending;btn.disabled=true;
  var p=new URLSearchParams();
  p.append('name',document.getElementById('cf-name').value);
  p.append('email',document.getElementById('cf-email').value);
  p.append('message',document.getElementById('cf-message').value);
  fetch(SCRIPT_URL,{method:'POST',mode:'no-cors',headers:{'Content-Type':'application/x-www-form-urlencoded'},body:p.toString()})
  .then(function(){ok.style.display='block';document.getElementById('contact-form').reset();btn.textContent=T.sendBtn;btn.disabled=false;})
  .catch(function(){err.style.display='block';btn.textContent=T.sendBtn;btn.disabled=false;});
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
        +'<a href="'+mapsUrl+'" target="_blank" rel="noopener" style="font-size:12px;color:#C48A2A;font-weight:600;text-decoration:none">'+(LANG==='en'?'Open in Google Maps →':'Otevřít v Google Maps →')+'</a>'
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

function trackMapsOpen(id){
  track('bar_maps_open', barParams(BARS.find(function(x){return x.id===id;})));
}
function filterToBar(name){
  if(activeInfoWindow){activeInfoWindow.close();activeInfoWindow=null;}
  track('bar_map_click', barParams(BARS.find(function(x){return x.name===name;})));
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

// ============ MĚŘENÍ UDÁLOSTÍ (dataLayer → GTM → GA4) ============
// Události se odesílají vždy; GTM je přepošle do GA4 jen po souhlasu
// se statistickými cookies.
function track(name, params){
  try{
    window.dataLayer = window.dataLayer || [];
    var d = {event:name};
    for(var k in params){ if(params[k]!==undefined && params[k]!=='') d[k]=params[k]; }
    window.dataLayer.push(d);
  }catch(e){}
}

function barParams(b){
  if(!b) return {};
  return {
    bar_name: b.name,
    bar_district: b.district,
    bar_hood: b.hood,
    bar_type: b.type,
    bar_craft: b.craft,
    bar_serve: b.serve
  };
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
  list.innerHTML='';
  if(!filtered.length){noRes.style.display='block';cnt.innerHTML='';updateOMap();return;}
  noRes.style.display='none';
  var n=filtered.length;
  cnt.innerHTML=T.showing(n);
  filtered.forEach(function(b){
    var div=document.createElement('div');
    div.className='bar-item'+(openId===b.id?' open':'');
    div.dataset.id=b.id;
    var tap=b.beers.filter(function(x){return x.serve==='Čepované';});
    var bot=b.beers.filter(function(x){return x.serve==='Lahvové';});
    div.innerHTML=
      '<div class="bar-header" onclick="toggle('+b.id+')">'
        +'<div class="bar-header-left">'
          +'<div class="bar-meta-row"><span class="badge-type">'+tv(b.type)+'</span><span class="badge-district">'+b.district+' · '+b.hood+'</span></div>'
          +'<h3 class="bar-name">'+b.name+'</h3>'
        +'</div>'
        +'<div class="bar-header-right">'
          +'<div class="pills">'
            +'<span class="pill'+(b.craft==='Craft'?' on':'')+'">'+T.pillCraft+'</span>'
            +'<span class="pill'+(b.garden==='Ano'?' on':'')+'">'+T.pillGarden+'</span>'
            +'<span class="pill'+(b.food!=='Ne'?' on':'')+'">'+T.pillFood+'</span>'
            +'<span class="pill on">'+tv(b.serve)+'</span>'
          +'</div>'
          +'<button class="toggle-btn" onclick="event.stopPropagation();toggle('+b.id+')" aria-label="Detail">+</button>'
        +'</div>'
      +'</div>'
      +'<div class="bar-detail"><div class="bar-detail-inner">'
        +'<div class="detail-cols">'
          +'<div class="detail-col">'
            +'<div><div class="dl-label">'+T.lAddress+'</div><div class="dl-value">'+b.address+'</div>'
              +'<a class="map-btn" href="https://www.google.com/maps/search/?api=1&query='+b.lat+','+b.lng+'" target="_blank" rel="noopener" onclick="trackMapsOpen('+b.id+')">'+T.openInMaps+'</a></div>'
            +'<div><div class="dl-label">'+T.lHours+'</div><div class="dl-value">'+trHours(b.hours)+'</div></div>'
          +'</div>'
          +'<div class="detail-col">'
            +'<div><div class="dl-label">'+T.lDraught+'</div><div class="dl-value">'+(tap.length?tap.map(function(x){return tv(x.name);}).join('\n'):T.notOffered)+'</div></div>'
            +'<div><div class="dl-label">'+T.lBottled+'</div><div class="dl-value">'+(bot.length?bot.map(function(x){return tv(x.name,'bottle');}).join('\n'):T.notOffered)+'</div></div>'
            +'<div><div class="dl-label">'+T.lGarden+'</div><div class="dl-value">'+tv(b.garden)+'</div></div>'
            +'<div><div class="dl-label">'+T.lFood+'</div><div class="dl-value">'+tv(b.food)+'</div></div>'
          +'</div>'
        +'</div>'
        +'<div class="detail-desc">'+descOf(b)+'<span style="font-size:0.72rem;font-style:italic;color:rgba(243,239,232,0.25);margin-top:1.2rem;display:block;">'+T.disclaimer+'</span></div>'
      +'</div></div>';
    list.appendChild(div);
  });
  updateOMap();
}

function toggle(id){
  var wasOpen = (openId===id);
  openId = wasOpen ? null : id;
  if(!wasOpen){
    var b = BARS.find(function(x){return x.id===id;});
    track('bar_detail_open', barParams(b));
  }
  document.querySelectorAll('.bar-item').forEach(function(el){
    var isOpen=+el.dataset.id===openId;
    el.classList.toggle('open',isOpen);
    var detail=el.querySelector('.bar-detail');
    if(detail)detail.style.maxHeight=isOpen?detail.scrollHeight+'px':'0px';
  });
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

  // událost o použití filtru — jen když je něco nastavené
  if(d||t||sv||cr||g||s){
    track('filter_use', {
      filter_district: d,
      filter_type: t,
      filter_serve: sv,
      filter_craft: cr,
      filter_garden: g,
      filter_search: s,
      filter_results: filtered.length
    });
  }
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
  el.textContent=T.countWord(n);
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
      line.split(',').forEach(function(seg){
        var parts=seg.trim().split(/[–-]/);
        if(parts.length!==2)return;
        out.push(day+' '+pad(parts[0])+'-'+pad(parts[1]));
      });
    });
    return out.length?out:null;
  }

  function typeOf(t){
    return (t==='Restaurace')?'Restaurant':'BarOrPub';
  }

  function cityOf(a){
    // z adresy "… , 250 75 Káraný" nebo "…, 170 00 Praha 7 – Holešovice"
    var m=a.match(/\d{3}\s?\d{2}\s+([^,]+)$/);
    if(!m)return 'Praha';
    var city=m[1].trim();
    if(/^Praha/.test(city))return 'Praha';
    city=city.split(/\s+[–-]\s+/)[0].trim();     // odřízne čtvrť za pomlčkou
    return city;
  }

  function splitAddress(a){

    // "Sokolovská 81/55, 186 00 Praha 8 – Karlín"
    var m=a.match(/^(.*?),\s*(\d{3}\s?\d{2})\s+(.*)$/);
    if(m)return {street:m[1].trim(),zip:m[2].trim()};
    return {street:a,zip:''};
  }

  var items=BARS.map(function(b,i){
    var ad=splitAddress(b.address);
    var beers=b.beers.map(function(x){return tv(x.name,x.serve==='Lahvové'?'bottle':null);}).filter(function(v,k,arr){return arr.indexOf(v)===k;});
    var item={
      '@type':typeOf(b.type),
      'name':b.name,
      'description':descOf(b),
      'address':{
        '@type':'PostalAddress',
        'streetAddress':ad.street,
        'addressLocality':cityOf(b.address),
        'addressRegion':b.district,
        'addressCountry':'CZ'
      },
      'geo':{'@type':'GeoCoordinates','latitude':b.lat,'longitude':b.lng},
      'hasMenu':{'@type':'Menu','name':(LANG==='en'?'Alcohol-free beers':'Nealkoholická piva'),'description':beers.join(', ')},
      'publicAccess':true
    };
    if(ad.zip)item.address.postalCode=ad.zip;
    var oh=parseHours(b.hours);
    if(oh)item.openingHours=oh;
    if(b.food!=='Ne')item.servesCuisine=T.cuisine;
    return {'@type':'ListItem','position':i+1,'item':item};
  });

  var schema={
    '@context':'https://schema.org',
    '@type':'ItemList',
    'name':T.schemaName,
    'description':T.schemaDesc,
    'inLanguage':(LANG==='en'?'en':'cs'),
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
