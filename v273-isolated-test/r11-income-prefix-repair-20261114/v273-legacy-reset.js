/* THA v273 full legacy backup conversion + guarded IndexedDB factory reset.
   Runs only on explicit user action. No LocalStorage access.
*/
(function(root){
"use strict";
const DB=()=>engine().databaseName;
const FORMAT="tha-v264-indexeddb-snapshot-v1";
const PREVIEW_DB="the_handyman_accountancy_r11_preview_idb";
const gate={stage:false,converted:false,importVerified:false,importFile:null,emergencyVerified:false,emergencyFileVerified:false,emergencyDigest:null,busy:false};
const SOURCE_SHA="07b6170db9169e3b59d0b4527b88e26d589bd18c178ec9a1b1975b55f403db90";
const DOMAINS=["accounting","business_profile","contracts","diagnostics","factory_reset_recovery","help_contact_drafts","media","notifications","preference_meta","preferences","projects","recovery","report_notifications","report_settings","report_workflow","reports","sequences"];
const REQUIRED=["accounting:state","business_profile:identity","contracts:state","projects:state","sequences:invoice-number","preferences:language","preference_meta:language-pref-version","diagnostics:monitor-log","reports:archive","report_notifications:notifications","report_settings:settings","report_workflow:workflow","notifications:items","recovery:last-reset-snapshot","factory_reset_recovery:factory-reset-recovery","help_contact_drafts:drafts","media:assets"];
const $=id=>root.document.getElementById(id);
const assert=(v,m)=>{if(!v)throw new Error(m);};
const engine=()=>{const e=root.HandymanStorageV264;if(!e)throw new Error("IndexedDB engine is unavailable.");return e;};
const row=(domain,key,value)=>({id:domain+":"+key,domain,key,value});
function setStatus(message,error){const el=$("factoryResetStatus");if(el){el.textContent=message;el.style.color=error?"#9b2634":"#205a30";}}
async function digest(buffer){const hash=await root.crypto.subtle.digest("SHA-256",buffer);return [...new Uint8Array(hash)].map(x=>x.toString(16).padStart(2,"0")).join("");}
function unique(items,label){assert(Array.isArray(items),label+" must be an array.");const ids=items.map(x=>x&&x.id);assert(ids.every(x=>typeof x==="string"&&x.length>0),label+" contains a missing ID.");assert(new Set(ids).size===ids.length,label+" contains duplicate IDs.");}
async function convertLegacy(file){
 assert(file&&file.size>0,"Choose the original backup JSON.");
 const bytes=await file.arrayBuffer();
 assert(await digest(bytes)===SOURCE_SHA,"The selected file is not the approved New_new(2).json backup. Conversion stopped.");
 const source=JSON.parse(new TextDecoder().decode(bytes));
 assert(source.app==="The Handyman Accountancy"&&source.backupType==="complete-user-data"&&source.version===6,"Unsupported legacy backup.");
 assert(source.data&&source.projects&&Array.isArray(source.contracts),"Required backup sections are missing.");
 const a=source.data,p=source.projects;
 assert(Array.isArray(a.entries)&&Array.isArray(a.customers)&&Array.isArray(a.invoices),"Accounting arrays are missing.");
 assert(Array.isArray(p.projects)&&Array.isArray(p.workers),"Project arrays are missing.");
 unique(a.entries,"Accounting entries");unique(a.customers,"Customers");unique(a.invoices,"Invoices");unique(p.projects,"Projects");unique(p.workers,"Workers");
 for(const project of p.projects)unique(project.subprojects||[],"Subprojects");
 const profile=p.profile||{},projects={...p};delete projects.profile;
 const businessProfile={businessName:String(profile.businessName||""),ownerName:String(profile.ownerName||""),phone:String(profile.phone||""),email:String(profile.email||""),address:String(profile.address||""),logo:String(profile.logo||""),paymentDetails:String(profile.paymentDetails||"")};
 const maxInvoice=Math.max(140,...a.invoices.map(x=>Number(x.number)||0),...a.entries.map(x=>Number(x.invoiceNumber)||0));
 const pkg={format:FORMAT,database:DB(),sourceSha256:SOURCE_SHA,createdAt:new Date().toISOString(),domains:DOMAINS.slice(),records:[
 row("accounting","state",a),row("business_profile","identity",businessProfile),row("contracts","state",{contracts:source.contracts}),row("projects","state",projects),row("sequences","invoice-number",maxInvoice),
 row("preferences","language","en"),row("preference_meta","language-pref-version",""),row("diagnostics","monitor-log",[]),row("reports","archive",[]),row("report_notifications","notifications",[]),row("report_settings","settings",{}),row("report_workflow","workflow",{}),row("notifications","items",[]),row("recovery","last-reset-snapshot",null),row("factory_reset_recovery","factory-reset-recovery",null),row("help_contact_drafts","drafts",[]),row("media","assets",{items:[]})
 ]};
 assert(pkg.records.length===17,"Expected 17 records.");
 assert(JSON.stringify(pkg.domains)===JSON.stringify([...pkg.domains].sort()),"Domain list is not canonical.");
 assert(pkg.records.every(x=>x.id===x.domain+":"+x.key&&DOMAINS.includes(x.domain)),"Record identity validation failed.");
 const serialized=JSON.stringify(pkg);assert(JSON.stringify(JSON.parse(serialized))===serialized,"JSON round-trip failed.");
 return {pkg,sourceSha:SOURCE_SHA,stats:{entries:a.entries.length,customers:a.customers.length,invoices:a.invoices.length,projects:p.projects.length,subprojects:p.projects.reduce((n,x)=>n+(x.subprojects||[]).length,0),invoiceNext:maxInvoice+1}};
}
function downloadText(filename,text,mime){
 const blob=new Blob([text],{type:mime||"application/json"}),url=URL.createObjectURL(blob),a=root.document.createElement("a");
 a.href=url;a.download=filename;root.document.body.appendChild(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(url),60000);
}
async function inspectImportFile(file){
 assert(file&&file.size>0,"Select the converted IndexedDB import file.");
 const pkg=JSON.parse(await file.text());
 assert(pkg.format===FORMAT&&pkg.database===DB()&&pkg.sourceSha256===SOURCE_SHA,"Wrong import format, database, or approved source fingerprint.");
 assert(Array.isArray(pkg.domains)&&JSON.stringify(pkg.domains)===JSON.stringify(DOMAINS),"The import must contain the exact 17-domain set.");
 assert(Array.isArray(pkg.records)&&pkg.records.length===17,"The import must contain exactly 17 records.");
 const ids=pkg.records.map(x=>x&&x.id);
 assert(new Set(ids).size===17&&REQUIRED.every(id=>ids.includes(id)),"Import record IDs are incomplete or duplicated.");
 for(const r of pkg.records)assert(r.id===r.domain+":"+r.key&&DOMAINS.includes(r.domain),"Invalid record/domain identity.");
 const accounting=pkg.records.find(x=>x.id==="accounting:state").value,projects=pkg.records.find(x=>x.id==="projects:state").value;
 assert(accounting&&Array.isArray(accounting.entries)&&Array.isArray(accounting.customers)&&Array.isArray(accounting.invoices),"Accounting validation failed.");
 assert(projects&&Array.isArray(projects.projects)&&Array.isArray(projects.workers),"Project validation failed.");
 return pkg;
}
async function emergencyBackup(){
 assert(DB()===PREVIEW_DB,"Wrong database. Factory Reset is permitted only in the isolated Preview database.");
 if(root.__thaV264StartupPromise)await root.__thaV264StartupPromise;
 assert(root.__thaV264StartupOk!==false,root.__thaV264StartupError||"Application storage startup failed.");
 assert(typeof root.flushSelectedDomainWrites==="function","Verified save-queue flush is unavailable.");
 const before=await engine().health();
 assert(before&&before.ok===true&&before.resetLocked!==true,"Preview database health or reset-lock check failed.");
 for(const scope of ["accounting","projects","contracts","businessProfile","support","media"])await root.flushSelectedDomainWrites(scope);
 const afterFlush=await engine().health();
 assert(afterFlush&&afterFlush.ok===true&&afterFlush.resetLocked!==true,"Preview database health check failed after flushing pending writes.");
 const recovery=root.HandymanRecoveryV264;
 assert(recovery&&typeof recovery.createFullBackup==="function","Verified full-database backup engine is unavailable.");
 const result=await recovery.createFullBackup();
 assert(result&&result.ok===true&&result.blob&&result.blob.size>0&&result.verification&&result.verification.ok===true&&result.verification.domains===17&&Number.isInteger(result.verification.records)&&result.verification.records>0&&/^[a-f0-9]{64}$/i.test(result.verification.digest||""),"Full emergency backup verification failed.");
 return result;
}
async function resetWithImport(file){
 const e=engine(),pkg=await inspectImportFile(file);
 const health=await e.health();assert(health&&health.ok===true,"Database health check failed.");
 let cleared=false;
 if(health.resetLocked===true){
  if(health.resetLockPhase==="recovery"){
   // The database has already been cleared. Never clear it again;
   // continue directly with the verified full-domain restore.
   cleared=true;
  }else if(health.resetLockPhase==="preclear"){
   // Cancel only a lock that proves no data has been cleared.
   const released=await e.releaseResetLock();
   assert(released&&released.ok===true&&released.unlocked===true&&released.cancelledBeforeClear===true,"Could not safely cancel the pre-clear reset lock.");
   const newLock=await e.beginResetLock();
   assert(newLock&&newLock.ok===true&&newLock.locked===true,"Could not reacquire reset lock.");
   const newClear=await e.clearWhileResetLocked();
   assert(newClear&&newClear.ok===true&&newClear.remainingRecords===0,"Database clear was not verified.");
   cleared=true;
  }else{
   throw new Error("Reset lock phase is unknown. Database was not modified; manual recovery review is required.");
  }
 }else{
  const lock=await e.beginResetLock();
  assert(lock&&lock.ok===true&&lock.locked===true,"Could not acquire reset lock.");
  const clear=await e.clearWhileResetLocked();
  assert(clear&&clear.ok===true&&clear.remainingRecords===0,"Database clear was not verified.");
  cleared=true;
 }
 try{
  const restored=await e.restore(pkg);
  assert(restored&&restored.ok===true&&restored.fullRecovery===true,"Full restore was not verified.");
  const done=await e.completeRecovery(pkg);
  assert(done&&done.ok===true&&done.unlocked===true,"Final recovery verification failed.");
  const finalHealth=await e.health();
  assert(finalHealth.ok===true&&finalHealth.resetLocked===false,"Database remains locked.");
  return {ok:true,restored:restored.restored,verified:true,domains:17,health:finalHealth};
 }catch(error){
  error.resetLockActive=cleared;
  throw error;
 }
}
function setFinalGate(){
 const final=$("factoryResetFinalButton");
 if(!final)return false;
 const file=$("factoryResetConvertedFile")?.files?.[0]||null;
 const ready=gate.stage&&gate.converted&&gate.importVerified&&file&&file===gate.importFile&&gate.emergencyVerified&&gate.emergencyFileVerified&&gate.emergencyDigest&&$("factoryResetConfirmEmergency")?.checked===true&&$("factoryResetConfirmPhrase")?.value.trim()==="RESET 273"&&gate.busy===false&&DB()===PREVIEW_DB;
 final.disabled=!ready;
 return !!ready;
}
function resetGateState(){
 gate.stage=false;gate.converted=false;gate.importVerified=false;gate.importFile=null;gate.emergencyVerified=false;gate.emergencyFileVerified=false;gate.emergencyDigest=null;gate.busy=false;
 const final=$("factoryResetFinalButton");if(final)final.disabled=true;
 const emergency=$("factoryResetEmergencyButton");if(emergency)emergency.disabled=true;
 const confirm=$("factoryResetConfirmEmergency");if(confirm){confirm.checked=false;confirm.disabled=true;}
 setFinalGate();
}
async function validateSelectedImport(){
 const input=$("factoryResetConvertedFile"),file=input&&input.files&&input.files[0];
 gate.importVerified=false;gate.importFile=null;gate.emergencyVerified=false;gate.emergencyFileVerified=false;gate.emergencyDigest=null;
 const confirm=$("factoryResetConfirmEmergency");if(confirm){confirm.checked=false;confirm.disabled=true;}
 const emergency=$("factoryResetEmergencyButton");if(emergency)emergency.disabled=true;
 setFinalGate();
 if(!file){setStatus("Select the converted backup file.",true);return;}
 try{
  await inspectImportFile(file);
  gate.importVerified=true;gate.importFile=file;
  if(emergency)emergency.disabled=false;
  setStatus("Converted backup independently validated: exact Preview database target, 17/17 domains, all required record IDs, unique IDs and data structures passed. Create the emergency snapshot next.",false);
 }catch(e){
  gate.importVerified=false;gate.importFile=null;
  setStatus("Converted backup validation failed: "+(e.message||e),true);
 }
 setFinalGate();
}
async function convertAction(){
 gate.converted=false;gate.importVerified=false;gate.importFile=null;gate.emergencyVerified=false;gate.emergencyDigest=null;
 const input=$("factoryResetConvertedFile");if(input){input.value="";input.disabled=true;}
 const emergency=$("factoryResetEmergencyButton");if(emergency)emergency.disabled=true;
 const confirm=$("factoryResetConfirmEmergency");if(confirm){confirm.checked=false;confirm.disabled=true;}
 setFinalGate();
 try{
  setStatus("Checking source backup…",false);
  const result=await convertLegacy($("factoryResetSourceFile").files[0]);
  downloadText("tha-v273-indexeddb-import.json",JSON.stringify(result.pkg));
  gate.converted=true;
  if(input)input.disabled=false;
  setStatus("Conversion completed. Source fingerprint, required sections, record identities and 17-domain package structure passed. Select the downloaded converted file below; it must be independently re-read and validated before continuing.",false);
 }catch(e){
  gate.converted=false;setStatus("Conversion stopped: "+(e.message||e),true);
 }
 setFinalGate();
}
async function emergencyAction(){
 try{
  assert(gate.importVerified===true&&gate.importFile===($("factoryResetConvertedFile").files[0]||null),"Select and validate the converted backup before creating the emergency snapshot.");
  gate.emergencyVerified=false;gate.emergencyDigest=null;
  const confirm=$("factoryResetConfirmEmergency");if(confirm){confirm.checked=false;confirm.disabled=true;}
  setFinalGate();
  const result=await emergencyBackup();
  const filename="THA-v273-before-reset-emergency-full-backup.json";
  const url=root.URL.createObjectURL(result.blob),a=root.document.createElement("a");
  a.href=url;a.download=filename;root.document.body.appendChild(a);a.click();a.remove();
  root.setTimeout(()=>root.URL.revokeObjectURL(url),60000);
  gate.emergencyVerified=true;gate.emergencyFileVerified=false;gate.emergencyDigest=result.verification.digest;
  var savedSnapshotInput=$("factoryResetEmergencyFile");if(savedSnapshotInput){savedSnapshotInput.disabled=false;savedSnapshotInput.value="";}
  if(confirm){confirm.checked=false;confirm.disabled=true;}
  setStatus("Emergency snapshot generated and verified. Save it in Files, then select that saved file below. Its SHA-256 must match the generated snapshot before the final confirmation can be enabled.",false);
 }catch(e){
  gate.emergencyVerified=false;gate.emergencyDigest=null;
  const confirm=$("factoryResetConfirmEmergency");if(confirm){confirm.checked=false;confirm.disabled=true;}
  setStatus("Emergency backup failed: "+(e.message||e),true);
 }
 setFinalGate();
}
async function validateEmergencyFile(){
 gate.emergencyFileVerified=false;
 const confirm=$("factoryResetConfirmEmergency");if(confirm){confirm.checked=false;confirm.disabled=true;}
 const file=$("factoryResetEmergencyFile")?.files?.[0];
 if(!file||!gate.emergencyVerified||!gate.emergencyDigest){setFinalGate();return;}
 try{
  assert(file.size>0,"The selected emergency snapshot is empty.");
  const actual=await digest(await file.arrayBuffer());
  assert(actual===gate.emergencyDigest,"The selected file does not match the generated emergency snapshot SHA-256.");
  gate.emergencyFileVerified=true;
  if(confirm)confirm.disabled=false;
  setStatus("Saved emergency snapshot file verified. SHA-256 matches the generated full-database snapshot.",false);
 }catch(e){
  gate.emergencyFileVerified=false;
  setStatus("Emergency snapshot file verification failed: "+(e.message||e),true);
 }
 setFinalGate();
}
async function finalAction(){
 if(gate.busy)return;
 try{
  assert(DB()===PREVIEW_DB,"Wrong database. Reset blocked outside the isolated Preview database.");
  assert(gate.converted===true&&gate.importVerified===true,"The converted backup has not passed independent validation.");
  assert(gate.importFile&&$("factoryResetConvertedFile").files[0]===gate.importFile,"The selected converted backup changed after validation. Validate it again.");
  assert(gate.emergencyVerified===true&&gate.emergencyFileVerified===true&&/^[a-f0-9]{64}$/i.test(gate.emergencyDigest||""),"The saved emergency snapshot file has not passed SHA-256 verification.");
  assert($("factoryResetConfirmEmergency").checked===true,"Confirm that the verified emergency snapshot file has been saved.");
  assert($("factoryResetConfirmPhrase").value.trim()==="RESET 273","Type RESET 273 exactly to authorize the reset.");
  await inspectImportFile(gate.importFile);
  const health=await engine().health();
  assert(health&&health.ok===true,"Preview database health check failed immediately before reset.");
  gate.busy=true;setFinalGate();
  setStatus("Final checks passed. Reset in progress. Do not close this page…",false);
  const result=await resetWithImport(gate.importFile);
  setStatus("SUCCESS — restored and verified "+result.restored+" records across 17 domains. Reloading…",false);
  root.setTimeout(()=>root.location.reload(),1200);
  gate.busy=true;setFinalGate();return;
 }catch(e){
  gate.busy=false;
  if(!e.resetLockActive){gate.emergencyVerified=false;gate.emergencyFileVerified=false;gate.emergencyDigest=null;const confirm=$("factoryResetConfirmEmergency");if(confirm){confirm.checked=false;confirm.disabled=true;}const savedSnapshotInput=$("factoryResetEmergencyFile");if(savedSnapshotInput){savedSnapshotInput.value="";savedSnapshotInput.disabled=true;}}
  setStatus((e.resetLockActive?"RECOVERY LOCK ACTIVE — keep this page open and retry using the validated converted backup. ":"Reset stopped — ")+(e.message||e),true);
 }
 gate.busy=false;setFinalGate();
}
function updateFinalAvailability(){setFinalGate();}
function bind(){
 const convert=$("factoryResetConvertButton"),emergency=$("factoryResetEmergencyButton"),final=$("factoryResetFinalButton");
 if(convert)convert.addEventListener("click",convertAction);
 if(emergency)emergency.addEventListener("click",emergencyAction);
 if(final)final.addEventListener("click",finalAction);
 const source=$("factoryResetSourceFile");
 if(source)source.addEventListener("change",()=>{resetGateState();gate.stage=true;setFinalGate();});
 const converted=$("factoryResetConvertedFile");
 if(converted)converted.addEventListener("change",validateSelectedImport);
 const savedSnapshotInput=$("factoryResetEmergencyFile");if(savedSnapshotInput)savedSnapshotInput.addEventListener("change",validateEmergencyFile);
 ["factoryResetConfirmEmergency","factoryResetConfirmPhrase"].forEach(id=>{const el=$(id);if(el){el.addEventListener("input",updateFinalAvailability);el.addEventListener("change",updateFinalAvailability);}});
 // Fail closed on first render and after each modal transition.
 resetGateState();
 const originalOpen=root.openFactoryReset;
 if(typeof originalOpen==="function")root.openFactoryReset=function(){resetGateState();return originalOpen.apply(this,arguments);};
 const originalNext=root.factoryResetNextStep;
 if(typeof originalNext==="function")root.factoryResetNextStep=function(){const result=originalNext.apply(this,arguments);gate.stage=true;setFinalGate();return result;};
}
if(root.document.readyState==="loading")root.document.addEventListener("DOMContentLoaded",bind);else bind();
root.HandymanV273LegacyReset=Object.freeze({convertLegacy,inspectImportFile,emergencyBackup,resetWithImport,refreshFinalAvailability:setFinalGate});
})(window);
