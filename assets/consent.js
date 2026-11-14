'use strict';
/* KAUCHO PLUS — preferencias de privacidad y registro de aceptaciones.
   Sitio estático: el registro se guarda en el navegador de la persona (localStorage) y, si se configura
   `endpoint`, también se envía a un servidor propio. Ver LEEME-CUMPLIMIENTO.md. */
window.KPConsent=(function(){
  const CONFIG={
    termsVersion:'0.1-borrador', privacyVersion:'0.1-borrador', cookiesVersion:'0.1-borrador',
    endpoint:'' /* URL HTTPS de su servidor de registro (pendiente). Vacío = solo registro local. */
  };
  const LOG='kp_consent_log', PREFS='kp_cookie_prefs';
  const enc=new TextEncoder();
  async function sha256(s){const b=await crypto.subtle.digest('SHA-256',enc.encode(s));return [...new Uint8Array(b)].map(x=>x.toString(16).padStart(2,'0')).join('')}
  const read=(k,d)=>{try{return JSON.parse(localStorage.getItem(k))??d}catch(e){return d}};
  const write=(k,v)=>{try{localStorage.setItem(k,JSON.stringify(v));return true}catch(e){return false}};

  /* Registro encadenado: cada entrada incluye el hash de la anterior (detecta alteraciones). */
  async function record(o){
    const log=read(LOG,[]), prev=log.length?log[log.length-1].hash:'0'.repeat(64);
    const r={
      id:(crypto.randomUUID?crypto.randomUUID():String(Date.now())+Math.random().toString(16).slice(2)),
      timestampUtc:new Date().toISOString(),
      termsVersion:CONFIG.termsVersion, privacyVersion:CONFIG.privacyVersion,
      action:o.action, form:o.form,
      evidence:{ shownTextSha256:await sha256((o.texts||[]).join('\n')), page:location.pathname, checkboxes:o.checkboxes||null },
      prevHash:prev
    };
    r.hash=await sha256(prev+JSON.stringify(r));
    log.push(r); write(LOG,log.slice(-200));
    if(CONFIG.endpoint&&navigator.sendBeacon){try{navigator.sendBeacon(CONFIG.endpoint,new Blob([JSON.stringify(r)],{type:'application/json'}))}catch(e){}}
    return r;
  }
  async function verify(){const log=read(LOG,[]);let prev='0'.repeat(64);for(const r of log){const {hash,...rest}=r;if(rest.prevHash!==prev||await sha256(prev+JSON.stringify(rest))!==hash)return false;prev=hash}return true}
  function exportLog(fmt){
    const log=read(LOG,[]);let data,type,ext;
    if(fmt==='csv'){const h=['id','timestampUtc','termsVersion','privacyVersion','action','form','shownTextSha256','hash'];
      data=[h.join(',')].concat(log.map(r=>[r.id,r.timestampUtc,r.termsVersion,r.privacyVersion,r.action,r.form,r.evidence.shownTextSha256,r.hash].join(','))).join('\n');type='text/csv';ext='csv'}
    else{data=JSON.stringify(log,null,2);type='application/json';ext='json'}
    const a=document.createElement('a');a.href=URL.createObjectURL(new Blob([data],{type}));a.download='registro-aceptaciones.'+ext;a.click();setTimeout(()=>URL.revokeObjectURL(a.href),1000);
  }

  /* Cookies y tecnologías similares: solo las estrictamente necesarias están activas.
     Cualquier script no esencial debe declararse como <script type="text/plain" data-consent="analytics" src="..."> */
  const prefs=()=>read(PREFS,{analytics:false});
  const allowed=c=>!!prefs()[c];
  function activate(){document.querySelectorAll('script[type="text/plain"][data-consent]').forEach(s=>{if(allowed(s.dataset.consent)&&!s.dataset.done){s.dataset.done=1;const n=document.createElement('script');[...s.attributes].forEach(a=>{if(a.name!=='type')n.setAttribute(a.name,a.value)});n.text=s.text;s.replaceWith(n)}})}
  function openPrefs(){
    let o=document.getElementById('prefsOverlay');
    if(!o){o=document.createElement('div');o.className='overlay';o.id='prefsOverlay';
      o.innerHTML=`<div class="modal modal--small" role="dialog" aria-modal="true" aria-labelledby="prefsT">
      <button class="modal__close" aria-label="Cerrar" data-close>✕</button>
      <h2 id="prefsT" style="font-size:1.6rem;margin-bottom:12px">Preferencias de cookies</h2>
      <p class="muted" style="margin-bottom:20px">Este sitio solo usa almacenamiento técnico estrictamente necesario. No usa cookies de analítica, publicidad ni seguimiento. Más detalle en la <a href="cookies.html" style="text-decoration:underline">Política de cookies</a>.</p>
      <label class="check"><input type="checkbox" checked disabled> <span>Estrictamente necesarias (preferencia de idioma, carrito y registro de aceptaciones en su navegador). Siempre activas.</span></label>
      <label class="check"><input type="checkbox" id="prefAn"> <span>Analítica. <b style="font-weight:480">Hoy no se utiliza ninguna herramienta de analítica.</b> Si en el futuro se incorpora, solo se activará si usted la acepta aquí.</span></label>
      <div style="display:flex;gap:12px;margin-top:20px;flex-wrap:wrap"><button class="btn btn--ghost" data-save>Guardar preferencias</button></div></div>`;
      document.body.appendChild(o);
      o.addEventListener('click',e=>{if(e.target===o||e.target.closest('[data-close]'))o.classList.remove('open')});
      o.querySelector('[data-save]').addEventListener('click',async()=>{const v={analytics:o.querySelector('#prefAn').checked,version:CONFIG.cookiesVersion,ts:new Date().toISOString()};
        const before=allowed('analytics');write(PREFS,v);await record({action:v.analytics?'cookies:acepta-analitica':'cookies:rechaza-o-retira-analitica',form:'preferencias-cookies',texts:['Preferencias de cookies',CONFIG.cookiesVersion]});
        activate();o.classList.remove('open');if(before&&!v.analytics)alert('Preferencia guardada. Recargue la página para detener herramientas ya cargadas.')});
      document.addEventListener('keydown',e=>{if(e.key==='Escape')o.classList.remove('open')});}
    o.querySelector('#prefAn').checked=allowed('analytics');o.classList.add('open');o.querySelector('[data-close]').focus();
  }
  document.addEventListener('DOMContentLoaded',()=>{activate();document.querySelectorAll('[data-open-cookie-prefs]').forEach(b=>b.addEventListener('click',openPrefs))});
  return {CONFIG,record,verify,export:exportLog,allowed,openPrefs};
})();
