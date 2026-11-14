'use strict';
const WA='593991863635';
const PRODUCTOS=[
{es:'Bases',en:'Bases',icono:'🏗️',modelos:4,imgs:['bases.jpeg','bases_2.jpg','bases_3.jpg','bases_4.jpg']},
{es:'Celda Serrano',en:'Serrano Cell',icono:'🔲',modelos:1,imgs:['celda_serrano.jpg']},
{es:'Dedos de Pollo',en:'Chicken Fingers',icono:'🦾',modelos:4,imgs:['pelapollos.png','pelapollos_2.png','pelapollos_3.png','pelapollos_4.png']},
{es:'Defensa',en:'Fender',icono:'🛡️',modelos:4,imgs:['defensa.jpg','defensa_2.jpg','defensa_3.jpg','defensa_4.jpg']},
{es:'Codo Revés',en:'Reverse Elbow',icono:'↩️',modelos:1,imgs:['codo_reves.jpg']},
{es:'Faldón',en:'Skirt',icono:'📐',modelos:1,imgs:['faldon.jpg']},
{es:'Impulsores',en:'Impellers',icono:'⚙️',modelos:9,imgs:['impulsores.jpg','impulsores_2.jpg','impulsores_3.jpg','impulsores_4.jpg','impulsores_5.jpg','impulsores_6.jpg','impulsores_7.jpg','impulsores_8.jpg','impulsores_9.jpg']},
{es:'Juntas',en:'Joints',icono:'🔗',modelos:2,imgs:['juntas.jpg','juntas_2.jpg','juntas_3.jpg','juntas_4.jpg','juntas_5.jpg']},
{es:'Perfil',en:'Profile',icono:'📏',modelos:5,imgs:['perfil.jpg','perfil_2.jpg','perfil_3.jpg','perfil_4.jpg','perfil_5.jpg']},
{es:'Pieza',en:'Part',icono:'🧩',modelos:1,imgs:['pieza.jpg']},
{es:'Placa',en:'Plate',icono:'🟫',modelos:1,imgs:['placa.jpg']},
{es:'Poleas',en:'Pulleys',icono:'⭕',modelos:1,imgs:['poleas.jpg']},
{es:'Tanque',en:'Tank',icono:'🛢️',modelos:1,imgs:['tanque.jpg']},
{es:'Difusor',en:'Diffuser',icono:'💨',modelos:2,imgs:['difusor.jpg','difusor_2.jpg']},
{es:'Eje de Caucho',en:'Rubber Shaft',icono:'🪛',modelos:1,imgs:['eje_caucho.jpg']},
{es:'Topes',en:'Stops',icono:'🛑',modelos:2,imgs:['topes.jpg','topes_2.jpg']},
{es:'Válvulas',en:'Valves',icono:'🚿',modelos:1,imgs:['valvulas.jpg']},
{es:'Aletas',en:'Fins',icono:'🪁',modelos:2,imgs:['aleta.jpg','aleta_2.jpg']},
{es:'Malla Zaranda',en:'Screen Mesh',icono:'🕸️',modelos:1,imgs:['malla_zaranda.jpg']},
{es:'Revestimientos',en:'Liners',icono:'🧱',modelos:1,imgs:['revestimientos.jpg']},
{es:'Spot',en:'Spot',icono:'🔵',modelos:1,imgs:['spot.jpg']},
{es:'Aplex',en:'Aplex',icono:'🔩',modelos:1,imgs:['aplex.jpg']},
{es:'Perfil de caucho tipo U',en:'U-shaped rubber profile',icono:'U',modelos:1,imgs:['perfil_u.jpg']}
];
const SERV={
es:{'serv1-list':['Laminado y venta de caucho','Moldes y proceso de extrusión','Vulcanizado','Perfilería en cauchos','Construcción de defensas para barcos'],
'serv2-list':['Impulsores para tanques de lixiviado y agitadores','Impulsores para celda Denver','Difusores','Forros para bombas','Impulsores para bombas','Ejes con revestimiento de caucho','Planchas de caucho','O-ring, retenedores, matrimonios, bujes, acoples, empaques'],
'serv3-list':['Pisos de caucho','Reductor de velocidad tipo rectangular y tipo disco','Tope de caucho para parqueaderos','Juntas de dilatación para puentes']},
en:{'serv1-list':['Rubber lamination and sales','Molds and extrusion process','Vulcanization','Rubber profiling','Construction of ship fenders'],
'serv2-list':['Impellers for leaching tanks and agitators','Impellers for Denver cell','Diffusers','Pump liners','Pump impellers','Rubber-coated shafts','Rubber sheets','O-rings, retainers, couplings, bushings, gaskets'],
'serv3-list':['Rubber flooring','Speed bumps (rectangular and disc type)','Rubber parking stops','Expansion joints for bridges']}};
const T={
es:{'nav-inicio':'Inicio','nav-nosotros':'Nosotros','nav-servicios':'Servicios','nav-catalogo':'Catálogo','nav-contacto':'Contacto',
'hero-eyebrow':'Especialistas en Caucho Industrial','hero-title':'Soluciones Premium<br>en Caucho Industrial','hero-text':'Especialistas en minería, industria naval, construcción vial y procesos industriales complejos.','hero-cta':'Solicitar cotización','hero-cta2':'Ver catálogo',
'sec-nosotros':'Nuestra Empresa','about-title':'Quiénes Somos','about-sub':'Más de una década liderando el mercado ecuatoriano de caucho industrial.',
'mission-title':'Misión','mission-text':'Proveer soluciones integrales de caucho industrial de alta resistencia para optimizar la operatividad y extender la vida útil de los activos industriales.',
'vision-title':'Visión','vision-text':'Ser la empresa referente en soluciones de caucho industrial en Ecuador, reconocida por innovación, personalización y excelencia técnica.',
'values-title':'Valores','values-text':'Calidad, compromiso y precisión técnica son los pilares de cada pieza que fabricamos. Cada cliente recibe atención personalizada y asesoría especializada.',
'stat-productos':'Productos','stat-custom':'Personalizable','stat-pais':'Ecuador',
'sec-servicios':'Carta de Presentación','serv-title':'Servicio al Más Alto Nivel','serv-sub':'El respaldo técnico y profesional que recibirá con nuestro servicio marca la diferencia. KAUCHO PLUS S.A.S cumple estándares enmarcados en un sistema de aseguramiento de calidad.',
'serv1-title':'Servicio en Planta','serv2-title':'Industria Minera','serv3-title':'Industria Civil',
'sec-productos':'Catálogo','prod-title':'Nuestros Productos','prod-sub':'Piezas de caucho industrial de alta resistencia para cada necesidad.',
'buscar-placeholder':'Buscar producto...','prod-badge':'Alta resistencia','prod-desc':'Solución en caucho de alta resistencia para aplicaciones industriales exigentes.','prod-modelos-1':'Modelo único','prod-modelos-n':'modelos disponibles','add':'🛒 Agregar al carrito','none':'No se encontraron productos.',
'sec-contacto':'Contáctanos','contact-title':'Hablemos','ci-title':'¿Listo para una cotización?','ci-text':'Contáctenos y un especialista le asesorará sobre la solución de caucho más adecuada para su operación.',
'lbl-name':'Nombre','lbl-company':'Empresa (opcional)','lbl-email':'Correo electrónico (opcional)','lbl-msg':'Mensaje','btn-send':'Enviar por WhatsApp',
'ph-name':'Su nombre completo','ph-company':'Nombre de su empresa','ph-email':'correo@empresa.com','ph-msg':'Cuéntenos su necesidad...',
'chk-terms':'He leído y acepto los <a href="terminos.html" target="_blank" rel="noopener">Términos y condiciones</a>.','chk-priv':'Declaro haber leído la <a href="privacidad.html" target="_blank" rel="noopener">Política de privacidad</a> y acepto el tratamiento de mis datos para responder a mi solicitud.',
'err-terms':'Debe aceptar los Términos y condiciones para enviar.','err-priv':'Debe aceptar la Política de privacidad para enviar.','err-req':'Complete los campos obligatorios.','err-mail':'Revise el formato del correo.',
'form-note':'Al enviar, se abrirá WhatsApp con su mensaje ya escrito; usted decide si lo envía. Este sitio no guarda su mensaje en ningún servidor.',
'foot-t':'Términos y condiciones','foot-p':'Política de privacidad','foot-c':'Política de cookies','foot-r':'Reembolsos y devoluciones','foot-pref':'Preferencias de cookies','skip':'Ir al contenido',
'cart-title':'Mi Carrito','cart-empty':'Tu carrito está vacío','cart-sel':'Productos seleccionados','cart-send':'💬 Enviar lista por WhatsApp','cart-clear':'Vaciar carrito','cart-units':'unidad(es)','cart-note':'Se abrirá WhatsApp con su lista; este sitio no almacena datos personales. Ver <a href="privacidad.html" style="text-decoration:underline">Política de privacidad</a>.','added':'✅ Agregado: ',
'm-label':'Alta resistencia','m-qty':'Cantidad','m-note':'* Los precios se coordinarán por WhatsApp según especificaciones.','m-wa':'💬 Cotizar por WhatsApp'},
en:{'nav-inicio':'Home','nav-nosotros':'About','nav-servicios':'Services','nav-catalogo':'Catalog','nav-contacto':'Contact',
'hero-eyebrow':'Industrial Rubber Specialists','hero-title':'Premium Industrial<br>Rubber Solutions','hero-text':'Specialists in mining, marine industry, road construction and complex industrial processes.','hero-cta':'Request a quote','hero-cta2':'View catalog',
'sec-nosotros':'Our Company','about-title':'Who We Are','about-sub':'Over a decade leading the Ecuadorian industrial rubber market.',
'mission-title':'Mission','mission-text':'Provide comprehensive high-resistance industrial rubber solutions to optimize operations and extend the useful life of industrial assets.',
'vision-title':'Vision','vision-text':'To be the leading industrial rubber solutions company in Ecuador, recognized for innovation, customization, and technical excellence.',
'values-title':'Values','values-text':'Quality, commitment, and technical precision are the pillars of every piece we manufacture. Each client receives personalized attention and specialized advice.',
'stat-productos':'Products','stat-custom':'Customizable','stat-pais':'Ecuador',
'sec-servicios':'Presentation Letter','serv-title':'Service at the Highest Level','serv-sub':'The technical and professional support you will receive with our service makes the difference. KAUCHO PLUS S.A.S meets standards within a quality assurance system.',
'serv1-title':'Plant Services','serv2-title':'Mining Industry','serv3-title':'Civil Industry',
'sec-productos':'Catalog','prod-title':'Our Products','prod-sub':'High-resistance industrial rubber parts for every need.',
'buscar-placeholder':'Search product...','prod-badge':'High resistance','prod-desc':'High-resistance rubber solution for demanding industrial applications.','prod-modelos-1':'Single model','prod-modelos-n':'models available','add':'🛒 Add to cart','none':'No products found.',
'sec-contacto':'Contact','contact-title':"Let's Talk",'ci-title':'Ready for a quote?','ci-text':'Contact us and a specialist will advise you on the most suitable rubber solution for your operation.',
'lbl-name':'Name','lbl-company':'Company (optional)','lbl-email':'Email address (optional)','lbl-msg':'Message','btn-send':'Send via WhatsApp',
'ph-name':'Your full name','ph-company':'Your company name','ph-email':'email@company.com','ph-msg':'Tell us about your need...',
'chk-terms':'I have read and accept the <a href="terminos.html" target="_blank" rel="noopener">Terms and conditions</a> (Spanish).','chk-priv':'I have read the <a href="privacidad.html" target="_blank" rel="noopener">Privacy policy</a> (Spanish) and accept the processing of my data to answer my request.',
'err-terms':'You must accept the Terms and conditions to send.','err-priv':'You must accept the Privacy policy to send.','err-req':'Fill in the required fields.','err-mail':'Check the email format.',
'form-note':'On sending, WhatsApp opens with your message already written; you decide whether to send it. This site does not store your message on any server.',
'foot-t':'Terms and conditions','foot-p':'Privacy policy','foot-c':'Cookie policy','foot-r':'Refunds and returns','foot-pref':'Cookie preferences','skip':'Skip to content',
'cart-title':'My Cart','cart-empty':'Your cart is empty','cart-sel':'Selected products','cart-send':'💬 Send list via WhatsApp','cart-clear':'Empty cart','cart-units':'unit(s)','cart-note':'WhatsApp will open with your list; this site stores no personal data. See <a href="privacidad.html" style="text-decoration:underline">Privacy policy</a>.','added':'✅ Added: ',
'm-label':'High resistance','m-qty':'Quantity','m-note':'* Prices will be agreed via WhatsApp according to specifications.','m-wa':'💬 Quote via WhatsApp'}};
let lang='es';try{lang=localStorage.getItem('kp_lang')==='en'?'en':'es'}catch(e){}
const $=id=>document.getElementById(id);const t=k=>T[lang][k];
const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));

/* ── catálogo ── */
function renderProductos(filtro){
  const grid=$('catalogo');const q=(filtro||'').toLowerCase().trim();
  const vis=PRODUCTOS.filter(p=>p[lang].toLowerCase().includes(q));grid.innerHTML='';
  if(!vis.length){grid.innerHTML='<p class="muted" style="grid-column:1/-1;text-align:center;padding:40px 0">'+t('none')+'</p>';return}
  vis.forEach(p=>{
    const imgs=p.imgs||[],uno=imgs.length<=1;
    const mt=p.modelos===1?t('prod-modelos-1'):p.modelos+' '+t('prod-modelos-n');
    const card=document.createElement('article');card.className='product-card';
    card.innerHTML=`<div class="product-card__img">${imgs.length?imgs.map((s,i)=>`<img src="${s}" alt="${esc(p[lang])}" loading="lazy" decoding="async" class="${i?'':'active'}" onerror="this.style.display='none'">`).join(''):`<span class="fallback-icon">${p.icono}</span>`}
      <button class="carousel-btn carousel-btn--prev${uno?' hidden':''}" data-dir="-1" aria-label="Anterior">&#8249;</button><button class="carousel-btn carousel-btn--next${uno?' hidden':''}" data-dir="1" aria-label="Siguiente">&#8250;</button>
      ${uno?'':`<div class="carousel-dots">${imgs.map((_,i)=>`<button class="carousel-dot${i?'':' active'}" data-idx="${i}" aria-label="Imagen ${i+1}"></button>`).join('')}</div>`}</div>
      <div class="product-card__body"><h3 class="product-card__title" tabindex="0" role="button">${esc(p[lang])}</h3><p class="product-card__desc">${t('prod-desc')}</p><span class="product-card__badge">${t('prod-badge')} · ${mt}</span><button class="btn btn--ghost product-card__add">${t('add')}</button></div>`;
    if(!uno){const im=card.querySelectorAll('.product-card__img img'),dt=card.querySelectorAll('.carousel-dot');let c=0;
      const go=n=>{im[c].classList.remove('active');dt[c].classList.remove('active');c=(n+im.length)%im.length;im[c].classList.add('active');dt[c].classList.add('active')};
      card.querySelectorAll('.carousel-btn').forEach(b=>b.addEventListener('click',e=>{e.stopPropagation();go(c+(+b.dataset.dir))}));
      dt.forEach(d=>d.addEventListener('click',e=>{e.stopPropagation();go(+d.dataset.idx)}))}
    card.querySelector('.product-card__img').addEventListener('click',()=>openModal(p));
    const ti=card.querySelector('.product-card__title');ti.addEventListener('click',()=>openModal(p));ti.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();openModal(p)}});
    card.querySelector('.product-card__add').addEventListener('click',e=>{e.stopPropagation();addToCart(p,1)});
    grid.appendChild(card)});
}
function renderServicios(){document.querySelectorAll('[data-i18n-list]').forEach(ul=>{const l=SERV[lang][ul.dataset.i18nList];if(l)ul.innerHTML=l.map(i=>'<li>'+i+'</li>').join('')})}

/* ── modal ── */
let prod=null,mi=0,lastFocus=null;
function openModal(p){
  prod=p;mi=0;lastFocus=document.activeElement;const imgs=p.imgs||[];
  $('modalTitle').textContent=p[lang];$('modalModelos').textContent=p.modelos===1?t('prod-modelos-1'):p.modelos+' '+t('prod-modelos-n');$('qtyInput').value=1;
  const g=$('modalGallery');g.querySelectorAll(':scope>img').forEach(i=>i.remove());$('modalFallback').textContent=imgs.length?'':p.icono;
  imgs.forEach((s,i)=>{const im=document.createElement('img');im.src=s;im.alt=p[lang];if(!i)im.classList.add('active');g.insertBefore(im,$('modalPrev'))});
  $('modalPrev').classList.toggle('hidden',imgs.length<=1);$('modalNext').classList.toggle('hidden',imgs.length<=1);
  const th=$('modalThumbs');th.innerHTML='';
  if(imgs.length>1)imgs.forEach((s,i)=>{const d=document.createElement('div');d.className='modal__thumb'+(i?'':' active');d.innerHTML=`<img src="${s}" alt="">`;d.addEventListener('click',()=>modalGo(i));th.appendChild(d)});
  $('modalOverlay').classList.add('open');document.body.style.overflow='hidden';$('modalClose').focus();
}
function modalGo(n){const im=document.querySelectorAll('#modalGallery>img'),th=document.querySelectorAll('.modal__thumb');
  im[mi]&&im[mi].classList.remove('active');th[mi]&&th[mi].classList.remove('active');mi=(n+im.length)%im.length;im[mi]&&im[mi].classList.add('active');th[mi]&&th[mi].classList.add('active')}
function closeModal(){$('modalOverlay').classList.remove('open');document.body.style.overflow='';lastFocus&&lastFocus.focus&&lastFocus.focus()}
const waOpen=txt=>window.open('https://wa.me/'+WA+'?text='+encodeURIComponent(txt),'_blank','noopener');
function cotizarWa(){if(!prod)return;waOpen(`¡Hola KAUCHO PLUS S.A.S!\n\nQuisiera cotizar:\n• ${prod[lang]} × ${$('qtyInput').value} unidad(es)\n\n¿Me pueden dar información de precio y disponibilidad?`)}

/* ── carrito ── */
let carrito=[];
function addToCart(p,q){const i=carrito.findIndex(x=>x.es===p.es);i>-1?carrito[i].qty+=q:carrito.push({...p,qty:q});renderCart();toast(t('added')+p[lang])}
function renderCart(){
  const total=carrito.reduce((s,i)=>s+i.qty,0),c=$('cartCount');c.textContent=total;c.classList.toggle('visible',total>0);$('cartTotal').textContent=total;
  $('cartFoot').style.display=carrito.length?'grid':'none';const b=$('cartBody');
  if(!carrito.length){b.innerHTML='<div class="cart-empty"><span style="font-size:3rem;display:block;margin-bottom:12px">🛒</span>'+t('cart-empty')+'</div>';return}
  b.innerHTML='';carrito.forEach((it,i)=>{const d=document.createElement('div');d.className='cart-item';
    d.innerHTML=`<div class="cart-item__img">${it.imgs&&it.imgs[0]?`<img src="${it.imgs[0]}" alt="">`:it.icono}</div><div class="cart-item__info"><div>${esc(it[lang])}</div><div class="cart-item__qty">× ${it.qty} ${t('cart-units')}</div></div><button class="cart-item__remove" aria-label="Quitar">✕</button>`;
    d.querySelector('button').addEventListener('click',()=>{carrito.splice(i,1);renderCart()});b.appendChild(d)});
}
function toggleCart(f){const p=$('cartPanel'),o=typeof f==='boolean'?f:!p.classList.contains('open');p.classList.toggle('open',o);$('cartBtn').setAttribute('aria-expanded',o);if(o)p.querySelector('button').focus()}
function toast(m){const e=document.createElement('div');e.className='toast';e.setAttribute('role','status');e.textContent=m;document.body.appendChild(e);setTimeout(()=>e.remove(),2500)}

/* ── idioma ── */
function setLanguage(l){
  lang=l;try{localStorage.setItem('kp_lang',l)}catch(e){}document.documentElement.lang=l;
  document.querySelectorAll('.lang-btn').forEach(b=>b.setAttribute('aria-pressed',b.dataset.lang===l));
  document.querySelectorAll('[data-i18n]').forEach(el=>{const k=el.dataset.i18n;if(!T[l][k])return;(el.tagName==='INPUT'||el.tagName==='TEXTAREA')?el.placeholder=T[l][k]:el.innerHTML=T[l][k]});
  document.querySelectorAll('[data-i18n-ph]').forEach(el=>el.placeholder=T[l][el.dataset.i18nPh]);
  renderServicios();renderProductos($('buscar').value);renderCart();layoutRing();
}

/* ── formulario con consentimientos independientes ── */
const EMAIL=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
async function enviar(e){
  e.preventDefault();
  const f=$('contactForm'),name=$('inputName'),mail=$('inputEmail'),msg=$('inputMsg'),ct=$('chkTerms'),cp=$('chkPriv');
  let ok=true;const bad=(el,err,show)=>{el.setAttribute('aria-invalid',show);if(err)$(err).classList.toggle('show',show);if(show)ok=false};
  bad(name,null,!name.value.trim());bad(msg,null,!msg.value.trim());
  const mailBad=mail.value.trim()&&!EMAIL.test(mail.value.trim());bad(mail,null,!!mailBad);
  bad(ct,'errTerms',!ct.checked);bad(cp,'errPriv',!cp.checked);
  const st=$('formStatus');
  if(!ok){st.textContent=(!ct.checked||!cp.checked)?(!ct.checked?t('err-terms'):t('err-priv')):(mailBad?t('err-mail'):t('err-req'));
    const first=f.querySelector('[aria-invalid=true]');first&&first.focus();return}
  const texts=[T.es['chk-terms'],T.es['chk-priv']].map(s=>s.replace(/<[^>]+>/g,''));
  const r=await KPConsent.record({action:'envio-formulario-contacto:acepta-terminos-y-privacidad',form:'contacto-web',texts,checkboxes:{terminos:true,privacidad:true}});
  const co=$('inputCompany').value.trim(),em=mail.value.trim();
  waOpen('¡Hola KAUCHO PLUS S.A.S!\n\nNombre: '+name.value.trim()+'\n'+(co?'Empresa: '+co+'\n':'')+(em?'Correo: '+em+'\n':'')+'\nMensaje:\n'+msg.value.trim()+
    '\n\n— Constancia de aceptación —\nRegistro: '+r.id+'\nFecha (UTC): '+r.timestampUtc+'\nTérminos v'+r.termsVersion+' · Privacidad v'+r.privacyVersion);
  st.textContent='';f.reset();
}

/* ── anillo conductor: un único objeto que viaja y se transforma entre secciones ── */
const RING=[{teeth:0,dash:0,rot:0},{teeth:0,dash:1,rot:90},{teeth:1,dash:0,rot:180},{teeth:1,dash:1,rot:300},{teeth:0,dash:0,rot:420}];
let slots=[],ring,teeth,arc,moving=false,reduce=matchMedia('(prefers-reduced-motion:reduce)').matches;
const lerp=(a,b,k)=>a+(b-a)*k,ease=k=>k<.5?2*k*k:1-Math.pow(-2*k+2,2)/2;
function layoutRing(){slots=[...document.querySelectorAll('.ring-slot')].map(s=>{const r=s.getBoundingClientRect();return{x:r.left+r.width/2+scrollX,y:r.top+r.height/2+scrollY,s:r.width/200}});drawRing()}
function drawRing(){
  moving=false;if(!ring||slots.length<2)return;
  const vh=innerHeight,ref=scrollY+vh*.5;let i=0;
  while(i<slots.length-2&&ref>=slots[i+1].y)i++;
  const a=slots[i],b=slots[i+1],a0=RING[i],b0=RING[i+1];
  let k=Math.min(1,Math.max(0,(ref-a.y)/(b.y-a.y)));const e=ease(k),mid=Math.sin(Math.PI*e);
  /* el anillo avanza más rápido que el scroll: aterriza en la ranura de la sección siguiente antes de llegar */
  const x=lerp(a.x,b.x,e)+mid*Math.min(innerWidth*.38,420),y=lerp(a.y,b.y,e)-scrollY,s=lerp(a.s,b.s,e)*(1-.55*mid);
  const rot=lerp(a0.rot,b0.rot,e);
  ring.style.transform=`translate(${x}px,${y}px) rotate(${rot}deg) scale(${s})`;
  ring.style.opacity=(1-.82*mid).toFixed(3);
  const tv=lerp(a0.teeth,b0.teeth,e);teeth.style.opacity=tv;teeth.style.transform=`scale(${.82+.18*tv})`;
  arc.style.strokeDashoffset=(1-lerp(a0.dash,b0.dash,e))*100;arc.style.opacity=lerp(a0.dash,b0.dash,e);
}
function initRing(){
  ring=$('ring');teeth=ring&&ring.querySelector('.teeth');arc=ring&&ring.querySelector('.arc');
  if(!ring)return;
  if(reduce){document.body.classList.add('no-ring');return}
  layoutRing();addEventListener('scroll',()=>{if(!moving){moving=true;requestAnimationFrame(drawRing)}},{passive:true});
  addEventListener('resize',layoutRing);addEventListener('load',layoutRing);
  if(document.fonts&&document.fonts.ready)document.fonts.ready.then(layoutRing);
}
function initReveal(){
  const els=document.querySelectorAll('.reveal');if(reduce||!('IntersectionObserver' in window)){els.forEach(e=>e.classList.add('in'));return}
  const io=new IntersectionObserver(es=>es.forEach(en=>{if(en.isIntersecting){en.target.classList.add('in');io.unobserve(en.target)}}),{rootMargin:'0px 0px -8% 0px'});els.forEach(e=>io.observe(e));
}

document.addEventListener('DOMContentLoaded',()=>{
  const h=$('header');addEventListener('scroll',()=>h.classList.toggle('header--scrolled',scrollY>40),{passive:true});
  $('buscar').addEventListener('input',()=>renderProductos($('buscar').value));
  $('contactForm').addEventListener('submit',enviar);
  $('cartBtn').addEventListener('click',()=>toggleCart());$('cartClose').addEventListener('click',()=>toggleCart(false));
  $('cartClear').addEventListener('click',()=>{carrito=[];renderCart()});
  $('cartSend').addEventListener('click',()=>{if(carrito.length)waOpen('¡Hola KAUCHO PLUS S.A.S!\n\nQuisiera cotizar:\n\n'+carrito.map(i=>`• ${i[lang]} × ${i.qty}`).join('\n')+'\n\n¿Me pueden dar precios y disponibilidad?')});
  $('modalClose').addEventListener('click',closeModal);$('modalOverlay').addEventListener('click',e=>{if(e.target===$('modalOverlay'))closeModal()});
  $('modalPrev').addEventListener('click',()=>modalGo(mi-1));$('modalNext').addEventListener('click',()=>modalGo(mi+1));
  $('qtyMinus').addEventListener('click',()=>$('qtyInput').value=Math.max(1,+$('qtyInput').value-1));$('qtyPlus').addEventListener('click',()=>$('qtyInput').value=Math.max(1,+$('qtyInput').value+1));
  $('qtyInput').addEventListener('change',e=>e.target.value=Math.max(1,parseInt(e.target.value)||1));
  $('modalAdd').addEventListener('click',()=>{if(prod){addToCart(prod,Math.max(1,+$('qtyInput').value||1));closeModal()}});$('modalWa').addEventListener('click',cotizarWa);
  document.querySelectorAll('.lang-btn').forEach(b=>b.addEventListener('click',()=>setLanguage(b.dataset.lang)));
  addEventListener('keydown',e=>{if(e.key==='Escape'){closeModal();toggleCart(false)}});
  /* marca de sección activa */
  const links=[...document.querySelectorAll('.nav__link')];
  if('IntersectionObserver' in window){const so=new IntersectionObserver(es=>es.forEach(en=>{if(en.isIntersecting)links.forEach(l=>l.classList.toggle('is-active',l.getAttribute('href')==='#'+en.target.id))}),{rootMargin:'-45% 0px -50% 0px'});
    document.querySelectorAll('main section[id],#inicio').forEach(s=>so.observe(s))}
  setLanguage(lang);initReveal();initRing();
});
