(function () {
  'use strict';
  if (window.THAHelpRuntime && window.THAHelpRuntime.version === 'R46') return;
  const payload = window.THAHelpContentV1;
  if (!payload || !payload.entries) {
    console.error('[THA Help] Content bundle is missing; contextual help was not started.');
    return;
  }
  const STATIC_BINDINGS = [
    ['THA-HLP-0015', '.accountancy-nav > button[onclick="show(\'home\')"]'],
    ['THA-HLP-0016', '.accountancy-nav > button[onclick="show(\'entry\')"]'],
    ['THA-HLP-0017', '.accountancy-nav > button[onclick="show(\'records\')"]'],
    ['THA-HLP-0018', '.accountancy-nav > button[onclick="show(\'invoices\')"]'],
    ['THA-HLP-0019', '.accountancy-nav > button[onclick="show(\'customers\')"]'],
    ['THA-HLP-0020', '.accountancy-nav > button[onclick="show(\'report\')"]'],
    ['THA-HLP-0024', '#entryReceiptField .receipt-actions > button[onclick*="entryReceiptGallery"]'],
    ['THA-HLP-0040', '#report188Builder .actions > button[onclick="report188ConfirmComplete()"]'],
    ['THA-HLP-0041', '#report188Builder .actions > button[onclick="report188CheckDue()"]'],
    ['THA-HLP-0043', '#report188Calendar .actions > button[onclick="report188CheckDue()"]'],
    ['THA-HLP-0075', '[data-pr-nav="project-hub"]'],
    ['THA-HLP-0077', '[data-pr-nav="control"]'],
    ['THA-HLP-0099', '#prPage-partners .pr-actions > button[onclick="prResetPerson(\'partner\')"]'],
    ['THA-HLP-0103', '#prPage-workers .pr-actions > button[onclick="prResetPerson(\'worker\')"]']
  ];
  const FIELD_LABELS = {
    en:{purpose:'Purpose',when:'When to use',how:'How to use',inputs:'Inputs',result:'Expected result',notes:'Important notes'},
    fa:{purpose:'هدف',when:'زمان استفاده',how:'روش استفاده',inputs:'ورودی‌ها',result:'نتیجه مورد انتظار',notes:'نکات مهم'},
    ar:{purpose:'الغرض',when:'متى تستخدم',how:'كيفية الاستخدام',inputs:'المدخلات',result:'النتيجة المتوقعة',notes:'ملاحظات مهمة'},
    ckb:{purpose:'ئامانج',when:'کاتی بەکارهێنان',how:'چۆنیەتی بەکارهێنان',inputs:'زانیارییە پێویستەکان',result:'ئەنجامی چاوەڕوانکراو',notes:'تێبینی گرنگ'},
    kmr:{purpose:'Armanc',when:'Kengê were bikaranîn',how:'Çawa were bikaranîn',inputs:'Têketin',result:'Encama hêvîkirî',notes:'Têbînîyên girîng'},
    tr:{purpose:'Amaç',when:'Ne zaman kullanılır',how:'Nasıl kullanılır',inputs:'Girdiler',result:'Beklenen sonuç',notes:'Önemli notlar'},
    pl:{purpose:'Cel',when:'Kiedy używać',how:'Jak używać',inputs:'Dane wejściowe',result:'Oczekiwany wynik',notes:'Ważne uwagi'},
    ur:{purpose:'مقصد',when:'کب استعمال کریں',how:'استعمال کا طریقہ',inputs:'درکار معلومات',result:'متوقع نتیجہ',notes:'اہم نوٹس'},
    pa:{purpose:'ਉਦੇਸ਼',when:'ਕਦੋਂ ਵਰਤਣਾ ਹੈ',how:'ਕਿਵੇਂ ਵਰਤਣਾ ਹੈ',inputs:'ਲੋੜੀਂਦੀ ਜਾਣਕਾਰੀ',result:'ਉਮੀਦ ਕੀਤਾ ਨਤੀਜਾ',notes:'ਜ਼ਰੂਰੀ ਨੋਟ'},
    prs:{purpose:'هدف',when:'زمان استفاده',how:'روش استفاده',inputs:'ورودی‌ها',result:'نتیجه مورد انتظار',notes:'نکات مهم'},
    ps:{purpose:'موخه',when:'کله یې وکاروئ',how:'د کارولو طریقه',inputs:'اړین معلومات',result:'تمه کېدونکې پایله',notes:'مهمې یادونې'}
  };
  const RTL_LANGS = new Set(['fa','ar','ckb','ur','prs','ps']);
  let lastHelpId=null,overlay=null,card=null,helpButton=null,lastFocused=null;
  function selectedLanguage(){
    const select=document.getElementById('appLanguageSelect'),selected=select&&select.value;
    if(selected&&payload.meta.languages.includes(selected))return selected;
    try{
      const saved=window.HandymanUIDomainGatewayV264&&window.HandymanUIDomainGatewayV264.states&&window.HandymanUIDomainGatewayV264.states.support&&window.HandymanUIDomainGatewayV264.states.support.preferences;
      if(saved&&payload.meta.languages.includes(saved))return saved;
    }catch(_){}
    return 'en';
  }
  function closeHelp(){
    if(!overlay)return;
    overlay.hidden=true;overlay.setAttribute('aria-hidden','true');
    if(lastFocused&&typeof lastFocused.focus==='function')lastFocused.focus();
  }
  function openFullGuide(){
    closeHelp();
    if(typeof window.show==='function')window.show('userGuide');
    else{
      document.querySelectorAll('.panel').forEach(panel=>panel.classList.remove('active'));
      const guide=document.getElementById('userGuide');if(guide)guide.classList.add('active');
    }
    const guide=document.getElementById('userGuide');
    if(guide&&typeof guide.scrollIntoView==='function')guide.scrollIntoView({behavior:'smooth',block:'start'});
  }
  function addText(parent,tag,text,className){
    const node=document.createElement(tag);node.textContent=String(text==null?'':text);
    if(className)node.className=className;parent.appendChild(node);return node;
  }
  function openHelp(helpId){
    const entry=payload.entries[helpId];
    if(!entry){openFullGuide();return false;}
    if(!overlay)createInterface();
    lastFocused=document.activeElement;
    const lang=selectedLanguage(),direction=RTL_LANGS.has(lang)?'rtl':'ltr';
    const translation=entry.translations[lang]||entry.translations.en,labels=FIELD_LABELS[lang]||FIELD_LABELS.en;
    card.replaceChildren();card.lang=lang;card.dir=direction;
    addText(card,'div',helpId,'tha-help-id');
    addText(card,'h2',entry.label||helpId,'tha-help-title');
    ['purpose','when','how','inputs','result','notes'].forEach(field=>{
      const section=document.createElement('section');section.className='tha-help-field';
      addText(section,'h3',labels[field]);addText(section,'p',translation[field]);card.appendChild(section);
    });
    const actions=document.createElement('div');actions.className='tha-help-actions';
    const fullGuide=document.createElement('button');fullGuide.type='button';fullGuide.className='tha-help-secondary';
    fullGuide.textContent=lang==='fa'?'باز کردن راهنمای کامل':'Open full User Guide';fullGuide.addEventListener('click',openFullGuide);
    const close=document.createElement('button');close.type='button';close.className='tha-help-primary';
    close.textContent=lang==='fa'?'بستن':'Close';close.addEventListener('click',closeHelp);
    actions.append(fullGuide,close);card.appendChild(actions);
    overlay.hidden=false;overlay.setAttribute('aria-hidden','false');card.focus();
    return true;
  }
  function createInterface(){
    const style=document.createElement('style');style.id='tha-help-runtime-style';
    style.textContent=
      '#thaHelpFab{position:fixed;right:max(16px,env(safe-area-inset-right));bottom:calc(16px + env(safe-area-inset-bottom));z-index:2147482000;width:50px;height:50px;min-height:50px;padding:0;border-radius:50%;background:#142b4a;color:#fff;border:2px solid #e5b63f;box-shadow:0 4px 16px #0004;font-size:24px;font-weight:800;line-height:1}' +
      '#thaHelpOverlay{position:fixed;inset:0;z-index:2147482500;display:flex;align-items:center;justify-content:center;padding:16px;background:rgba(10,22,40,.66)}' +
      '#thaHelpOverlay[hidden]{display:none}' +
      '#thaHelpOverlay .tha-help-card{width:min(100%,620px);max-height:86vh;overflow:auto;background:#fff;color:#172235;border:1px solid #dce2ea;border-radius:18px;padding:20px;box-shadow:0 18px 60px #0005;text-align:start}' +
      '#thaHelpOverlay .tha-help-id{font-size:12px;font-weight:800;color:#657286;letter-spacing:.5px}' +
      '#thaHelpOverlay .tha-help-title{font-size:21px;line-height:1.35;color:#142b4a;margin:7px 0 16px}' +
      '#thaHelpOverlay .tha-help-field{border-top:1px solid #e6eaf0;padding:10px 0}' +
      '#thaHelpOverlay .tha-help-field h3{font-size:14px;color:#142b4a;margin:0 0 5px}' +
      '#thaHelpOverlay .tha-help-field p{font-size:15px;line-height:1.65;margin:0;white-space:pre-wrap}' +
      '#thaHelpOverlay .tha-help-actions{display:flex;gap:8px;justify-content:flex-end;flex-wrap:wrap;margin-top:12px}' +
      '#thaHelpOverlay .tha-help-actions button{min-height:44px;padding:10px 14px}' +
      '#thaHelpOverlay .tha-help-primary{background:#142b4a;color:#fff}' +
      '#thaHelpOverlay .tha-help-secondary{background:#edf1f6;color:#142b4a}' +
      '@media print{#thaHelpFab,#thaHelpOverlay{display:none!important}}';
    document.head.appendChild(style);
    helpButton=document.createElement('button');helpButton.type='button';helpButton.id='thaHelpFab';helpButton.textContent='?';
    helpButton.setAttribute('aria-label','Open contextual User Guide');
    helpButton.title='Open help for the last selected control, or open the full User Guide';
    helpButton.addEventListener('click',()=>{if(lastHelpId&&payload.entries[lastHelpId])openHelp(lastHelpId);else openFullGuide();});
    document.body.appendChild(helpButton);
    overlay=document.createElement('div');overlay.id='thaHelpOverlay';overlay.hidden=true;
    overlay.setAttribute('role','dialog');overlay.setAttribute('aria-modal','true');overlay.setAttribute('aria-hidden','true');
    overlay.addEventListener('click',event=>{if(event.target===overlay)closeHelp();});
    card=document.createElement('div');card.className='tha-help-card';card.tabIndex=-1;
    overlay.appendChild(card);document.body.appendChild(overlay);
    document.addEventListener('keydown',event=>{if(event.key==='Escape'&&overlay&&!overlay.hidden)closeHelp();});
  }
  function attachStaticBindings(root){
    const scope=root||document;
    STATIC_BINDINGS.forEach(([helpId,selector])=>{
      let matches=[];
      try{
        if(scope.nodeType===1&&scope.matches&&scope.matches(selector))matches.push(scope);
        if(scope.querySelectorAll)matches.push(...scope.querySelectorAll(selector));
      }catch(error){console.warn('[THA Help] Invalid selector for '+helpId,error);return;}
      matches.forEach(element=>{
        const current=element.getAttribute('data-help-id');
        if(current&&current!==helpId){console.warn('[THA Help] Conflicting Help ID; not overwritten.',current,helpId);return;}
        element.setAttribute('data-help-id',helpId);
      });
    });
  }
  function initialise(){
    createInterface();attachStaticBindings(document);
    document.addEventListener('click',event=>{
      const target=event.target&&event.target.closest?event.target.closest('[data-help-id]'):null;
      if(!target||target===helpButton||!target.isConnected)return;
      const helpId=target.getAttribute('data-help-id');
      if(!payload.entries[helpId])return;
      lastHelpId=helpId;
      helpButton.title='Open help for '+(payload.entries[helpId].label||helpId);
      helpButton.setAttribute('aria-label','Open help for '+(payload.entries[helpId].label||helpId));
    },true);
    if(typeof MutationObserver==='function'){
      const observer=new MutationObserver(records=>records.forEach(record=>record.addedNodes.forEach(node=>{if(node.nodeType===1)attachStaticBindings(node);})));
      observer.observe(document.documentElement,{childList:true,subtree:true});
    }
  }
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',initialise,{once:true});
  else initialise();
  window.THAHelpRuntime=Object.freeze({
    version:'R46',open:openHelp,openFullGuide,attach:attachStaticBindings,
    getLastHelpId:()=>lastHelpId,getPublishableCount:()=>Object.keys(payload.entries).length
  });
})();