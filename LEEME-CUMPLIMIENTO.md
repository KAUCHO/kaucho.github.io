# KAUCHO PLUS — Rediseño: publicación, cumplimiento y pendientes

## Publicar en GitHub Pages
1. Copie el contenido de esta carpeta a la raíz de su repositorio, **junto a sus imágenes existentes** (`bases.jpeg`, `impulsores.jpg`, `logo.png`, `images/logo.png`, etc.). El código usa las mismas rutas que su `index.html` original.
2. Respalde su `index.html` anterior (`git mv index.html index.old.html`) antes de reemplazarlo.
3. En GitHub: *Settings → Pages → Deploy from a branch → main / (root)*. El archivo `.nojekyll` ya está incluido. Active *Enforce HTTPS*.
4. Todo es estático (HTML/CSS/JS): no requiere compilar ni servidor.

## Estructura
`index.html` · `terminos.html` · `privacidad.html` · `cookies.html` · `reembolsos.html` · `assets/style.css` · `assets/app.js` · `assets/consent.js` · `assets/fonts/` (Inter, autoalojada) · `AUDITORIA-IMAGENES.md`

## Normativa considerada (verificar siempre el texto oficial vigente)
- Constitución, art. 66 num. 19 (protección de datos).
- **LOPDP** (R.O. Suplemento 459, 26-may-2021) y **Reglamento General** (Decreto 904, R.O. 3er Supl. 435, 13-nov-2023); normas generales de la SPDP, incluida la de transferencias (2025/2026) y su criterio sobre el deber de información cuando se obtienen datos del titular.
- **Ley Orgánica de Defensa del Consumidor** (información veraz, publicidad, devoluciones; art. 45 citado por fuentes periodísticas como base de devoluciones).
- **Ley de Comercio Electrónico, Firmas Electrónicas y Mensajes de Datos** (art. 50: información al consumidor, con remisión a la LODC).
- Cookies: **no se encontró norma ecuatoriana específica**; se aplicó el consentimiento de la LOPDP con criterio conservador.
- Fuentes consultadas por búsqueda web (secundarias, no sustituyen el Registro Oficial): nmslaw.com.ec, ecija, expreso.ec, dspace.espol.edu.ec (Reglamento), wipo.int (LODC), derechoecuador.com, extra.ec. **Pendiente: contrastar con spdp.gob.ec, Registro Oficial y Defensoría del Pueblo, y revisión por abogado.**
- Hay proyectos de reforma en la Asamblea (LODC, LOPDP, comercio electrónico) que podrían cambiar obligaciones: revisar vigencia.

## Qué obligaciones se determinó que aplican
| Funcionalidad real | Consecuencia |
|---|---|
| Formulario que recoge nombre, empresa, correo y mensaje | Consentimiento + deber de información (política de privacidad), minimización: **empresa y correo pasaron a opcionales** porque la conversación ocurre por WhatsApp |
| No hay pagos ni compra en línea (carrito = lista de cotización) | T&C y reembolsos redactados para cotización/pedido acordado; retracto de comercio electrónico queda como pendiente de validación legal |
| Sin analítica ni cookies de terceros (fuentes ahora autoalojadas) | Solo almacenamiento necesario; no hay banner obligatorio; hay panel de preferencias y bloqueo previo de scripts futuros (`type="text/plain" data-consent`) |
| Textos comerciales | «Más de una década liderando el mercado…» y «cumple estándares… de calidad» son afirmaciones verificables (LODC, publicidad veraz): **se conservaron sin cambios; confirme que puede probarlas** |

## Consentimiento y trazabilidad (qué hace y qué NO hace)
- Dos casillas independientes, sin marcar, cada una con su enlace; el envío se bloquea sin ambas. No hay consentimiento de publicidad porque hoy no se envía publicidad.
- Cada envío crea un registro: ID, fecha UTC, versión de T&C y de privacidad, acción, formulario, **hash SHA-256 del texto mostrado** y estado de casillas. **No se guarda IP ni dispositivo** (no hay justificación demostrada). Los registros están **encadenados por hash** (`KPConsent.verify()` detecta alteraciones) y se exportan con `KPConsent.export('json'|'csv')`.
- El mismo registro (ID, fecha, versiones) viaja dentro del mensaje de WhatsApp, de modo que **KAUCHO PLUS recibe la constancia en su propio chat**.
- **Limitación importante:** en GitHub Pages no hay servidor. El registro completo queda en el navegador de cada persona, no en poder de la empresa; no hay control de acceso ni conservación definida por la empresa. Para una auditoría real se necesita un endpoint propio (p. ej. función serverless + base protegida) y poner su URL en `KPConsent.CONFIG.endpoint`; el código ya envía allí cada registro. **Esto está sin completar.** Guardar registros no garantiza por sí solo el cumplimiento legal.

## Pruebas realizadas (entorno simulado jsdom; **no** se probó en navegadores reales ni en dispositivos)
✔ Formulario vacío, sin casillas, solo una casilla y correo inválido: bloquean el envío con mensaje específico (4/4). ✔ Envío válido: genera registro y abre WhatsApp con constancia. ✔ Casillas sin marcar por defecto. ✔ Cadena de registros íntegra y detecta una alteración. ✔ 23 productos renderizados (los mismos del original). ✔ Sin enlaces internos rotos ni IDs faltantes. ✔ Sintaxis JS válida. ✔ Analítica bloqueada por defecto.
**No verificado:** animación del anillo en pantalla real, rendimiento (Lighthouse), contraste/lector de pantalla, responsive visual, carga de imágenes reales. Ejecute Lighthouse y pruebe en móvil antes de publicar.

## Información que necesito de usted (marcada como `[PENDIENTE]` en los documentos)
RUC · domicilio legal · representante legal · correo para privacidad/derechos · ¿hay Delegado de Protección de Datos designado ante la SPDP? · plazos de conservación (chats y registros) · proveedores/encargados (CRM, hosting, transporte) y transferencias internacionales · formas de pago, plazos de entrega, garantía y envíos · política y plazo de devolución, y tratamiento de piezas a medida · jurisdicción/controversias · fecha de publicación · procedencia y licencia de **cada imagen** · pruebas de las afirmaciones de «más de una década» y «sistema de aseguramiento de calidad» · si desea enviar publicidad (requiere casilla aparte) · versiones EN de los documentos legales (hoy solo español).

## Diseño vigente (sistema Auros: DESIGN(1).md, variables.css, theme.css, tokens.json)
- Solo cambió `assets/style.css` (más el color `theme-color` y el retiro del preload de una fuente que ya no existe). HTML, textos, JS, formularios, documentos legales y registro de consentimientos no se tocaron.
- Matter es de pago: se usa **Inter** (sustituto indicado en DESIGN). Botones y navegación usan Arial/uppercase según la especificación.
- CTA primario con degradado aurora (6 px) en «Solicitar cotización», «Enviar por WhatsApp», agregar al carrito y enviar lista. Sin sombras; la profundidad sale de la pila abyss → kelp → deep.
- Fuera de la paleta solo hay `#222` (texto del botón, exigido por DESIGN) y `#004541` (hover del botón secundario).
- No se incluyó la «esfera de partículas»: habría requerido contenido y código nuevos. El anillo conductor existente cumple ese papel.
- `theme.css` es para Tailwind v4; este sitio no usa Tailwind, así que sus tokens se volcaron como variables CSS en `style.css`.
