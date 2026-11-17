/* The Handyman Accountancy — central PDF/Print Engine
 * Preview R22: Accounting Financial Report preview exposes only Print Preview and Back.
 * Document-specific HTML remains owned by its section; this engine owns PDF
 * generation, validation, in-app preview, Print Preview, Back and cleanup.
 */
(function installTHAPrintEngine(){
 'use strict';
 if(window.THA&&window.THA.PrintEngine)return;
 const state={overlay:null,objectUrl:null,pdfBlob:null,pdfFile:null,returnFocus:null,host:null};
 const A4={unit:'mm',format:'a4',orientation:'portrait'};
 function ensureStyles(){
  if(document.getElementById('tha-print-engine-style'))return;
  const style=document.createElement('style');style.id='tha-print-engine-style';
  style.textContent=`
  .tha-pe-overlay{position:fixed;inset:0;z-index:2147483646;background:#eef1f5;display:flex;flex-direction:column;padding-top:env(safe-area-inset-top);padding-bottom:env(safe-area-inset-bottom);font-family:-apple-system,BlinkMacSystemFont,Arial,sans-serif;color:#142b4a}
  .tha-pe-bar{min-height:58px;display:flex;align-items:center;gap:10px;padding:8px 12px;background:#fff;border-bottom:1px solid #d7dee8}
  .tha-pe-title{font-size:16px;font-weight:800;flex:1;min-width:0}
  
  .tha-pe-status{padding:9px 12px;background:#f7f9fc;color:#34445a;font-size:13px;line-height:1.4;border-bottom:1px solid #d7dee8}
  .tha-pe-frame{display:block;flex:1;width:100%;min-height:0;border:0;background:#fff}
  .tha-pe-actions{display:flex;flex-wrap:wrap;gap:8px;justify-content:center;padding:10px 12px calc(10px + env(safe-area-inset-bottom));background:#fff;border-top:1px solid #d7dee8}
  .tha-pe-actions button{min-height:50px;flex:1 1 45%;max-width:320px;border:0;border-radius:10px;padding:10px 16px;background:#e5b63f;color:#142b4a;font-size:16px;font-weight:800}
  .tha-pe-actions button:disabled{opacity:.48}
  .tha-pe-actions .tha-pe-secondary{background:#e8edf4;color:#24364f}
  .tha-pe-overlay[hidden]{display:none!important}
  @media print{.tha-pe-overlay{display:none!important}}
  `;
  document.head.appendChild(style);
 }
 function setStatus(message){const el=state.overlay&&state.overlay.querySelector('.tha-pe-status');if(el)el.textContent=message}
 function loadLibrary(){
  if(window.html2pdf)return Promise.resolve(window.html2pdf);
  if(window.__thaPrintEngineLibraryPromise)return window.__thaPrintEngineLibraryPromise;
  window.__thaPrintEngineLibraryPromise=new Promise((resolve,reject)=>{
   const existing=document.querySelector('script[data-tha-print-engine-library]');
   if(existing){existing.addEventListener('load',()=>resolve(window.html2pdf),{once:true});existing.addEventListener('error',()=>reject(new Error('PDF library failed to load')),{once:true});return}
   const script=document.createElement('script');script.dataset.thaPrintEngineLibrary='1';script.crossOrigin='anonymous';
   script.src='https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js';
   script.onload=()=>window.html2pdf?resolve(window.html2pdf):reject(new Error('PDF library loaded without html2pdf'));
   script.onerror=()=>reject(new Error('PDF library failed to load; check the internet connection'));
   document.head.appendChild(script);
  }).catch(error=>{window.__thaPrintEngineLibraryPromise=null;throw error});
  return window.__thaPrintEngineLibraryPromise;
 }
 async function waitForAssets(root){
  if(document.fonts&&document.fonts.ready)await document.fonts.ready;
  const images=[...root.querySelectorAll('img')];
  await Promise.all(images.map(async img=>{
   if(img.complete&&img.naturalWidth>0)return;
   if(typeof img.decode==='function'){try{await img.decode();return}catch(_){}}
   await new Promise(resolve=>{img.addEventListener('load',resolve,{once:true});img.addEventListener('error',resolve,{once:true});setTimeout(resolve,5000)});
  }));
 }
 function mountOverlay(title){
  ensureStyles();
  if(state.overlay)close();
  state.returnFocus=document.activeElement;
  const overlay=document.createElement('section');overlay.className='tha-pe-overlay';overlay.setAttribute('role','dialog');overlay.setAttribute('aria-modal','true');overlay.setAttribute('aria-label',title||'PDF Preview');
  overlay.innerHTML='<header class="tha-pe-bar"><strong class="tha-pe-title"></strong></header><div class="tha-pe-status" role="status" aria-live="polite">Preparing PDF…</div><iframe class="tha-pe-frame" title="PDF document preview"></iframe><footer class="tha-pe-actions"><button type="button" data-action="print" disabled>Print Preview</button><button type="button" class="tha-pe-secondary" data-action="back">Back</button></footer>';
  overlay.querySelector('.tha-pe-title').textContent=title||'PDF Preview';
  overlay.querySelector('[data-action="back"]').addEventListener('click',close);
  overlay.querySelector('[data-action="print"]').addEventListener('click',print);
  overlay.addEventListener('keydown',event=>{if(event.key==='Escape'){event.preventDefault();close()}});
  document.body.appendChild(overlay);state.overlay=overlay;return overlay;
 }
 function enableActions(){if(!state.overlay)return;state.overlay.querySelectorAll('[data-action]').forEach(b=>b.disabled=false)}
 function cleanupCapture(){if(state.host&&state.host.parentNode)state.host.parentNode.removeChild(state.host);state.host=null}
 function close(){
  cleanupCapture();
  if(state.objectUrl){try{URL.revokeObjectURL(state.objectUrl)}catch(_){}}
  state.objectUrl=null;state.pdfBlob=null;state.pdfFile=null;
  if(state.overlay){state.overlay.remove();state.overlay=null}
  const focus=state.returnFocus;state.returnFocus=null;
  if(focus&&typeof focus.focus==='function'){try{focus.focus({preventScroll:true})}catch(_){try{focus.focus()}catch(__){}}}
 }
 async function open(options){
  const o=options||{};
  if(!o.node||!o.node.nodeType)throw new Error('A document node is required for PDF generation');
  const filename=String(o.filename||'The-Handyman-Document.pdf');
  const overlay=mountOverlay(o.title||'PDF Preview');
  const frame=overlay.querySelector('iframe');
  let captureHost=null;
  try{
   setStatus('Preparing document: waiting for fonts and images…');
   captureHost=document.createElement('div');captureHost.style.cssText='position:fixed;left:-12000px;top:0;width:185mm;max-width:185mm;display:block;z-index:-1;background:#fff;overflow:visible';
   captureHost.appendChild(o.node);document.body.appendChild(captureHost);state.host=captureHost;
   await waitForAssets(o.node);
   const html2pdf=await loadLibrary();
   setStatus('Generating A4 PDF… Please keep this page open.');
   const opts={margin:o.margin||[12,7,12,7],filename,image:{type:'jpeg',quality:.98},html2canvas:{scale:1,useCORS:true,backgroundColor:'#fff',logging:false,scrollX:0,scrollY:0,windowWidth:794},jsPDF:A4,pagebreak:{mode:['css'],avoid:['.uc-head','.uc-group tr','.uc-summary tr','.uc-details tbody tr']},...(o.options||{})};
   const blob=await html2pdf().set(opts).from(o.node).outputPdf('blob');
   if(!blob||blob.type!=='application/pdf'||blob.size<1000)throw new Error('Generated PDF is empty or invalid');
   const bytes=new Uint8Array(await blob.slice(0,5).arrayBuffer());
   if(String.fromCharCode(...bytes)!=='%PDF-')throw new Error('Generated file failed PDF signature validation');
   state.pdfBlob=blob;state.pdfFile=new File([blob],filename,{type:'application/pdf'});
   state.objectUrl=URL.createObjectURL(blob);frame.src=state.objectUrl+'#view=FitH';
   enableActions();setStatus('PDF ready. Tap Print Preview to print, or Back to return to the report.');
   cleanupCapture();
   return {ok:true,filename,size:blob.size};
  }catch(error){
   cleanupCapture();
   setStatus('PDF could not be created: '+(error&&error.message?error.message:'unknown error'));
   throw error;
  }
 }
 async function share(){
  if(!state.pdfFile)return;
  try{
   if(navigator.share&&(!navigator.canShare||navigator.canShare({files:[state.pdfFile]}))){
    await navigator.share({files:[state.pdfFile],title:state.pdfFile.name});
    setStatus('Share sheet opened.');
   }else{download();setStatus('File saved. Use the iPhone Share sheet from Files to send or print it.')}
  }catch(error){if(error&&error.name!=='AbortError')setStatus('Sharing is unavailable. Use Save PDF or Open PDF.')}
 }
 function download(){
  if(!state.objectUrl||!state.pdfFile)return;
  const a=document.createElement('a');a.href=state.objectUrl;a.download=state.pdfFile.name;document.body.appendChild(a);a.click();a.remove();
 }
 function print(){
  const frame=state.overlay&&state.overlay.querySelector('iframe');
  if(!frame||!state.pdfBlob)return;
  try{frame.contentWindow.focus();frame.contentWindow.print();setStatus('Print Preview requested. If the print dialog does not appear, try again or tap Back.')}
  catch(_){setStatus('This browser did not open the print dialog. Try Print Preview again or tap Back.')}
 }
 function openNewTab(){if(state.objectUrl)window.open(state.objectUrl,'_blank','noopener')}
 window.THA=window.THA||{};
 window.THA.PrintEngine=Object.freeze({open,close,getState:()=>Object.freeze({open:!!state.overlay,ready:!!state.pdfBlob})});
})();