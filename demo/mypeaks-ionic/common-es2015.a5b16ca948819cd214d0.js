(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"2c9M":function(t,e,n){"use strict";n.d(e,"a",(function(){return s})),n.d(e,"b",(function(){return c})),n.d(e,"c",(function(){return o})),n.d(e,"d",(function(){return l})),n.d(e,"e",(function(){return r}));const i={getEngine(){const t=window;return t.TapticEngine||t.Capacitor&&t.Capacitor.isPluginAvailable("Haptics")&&t.Capacitor.Plugins.Haptics},available(){return!!this.getEngine()},isCordova:()=>!!window.TapticEngine,isCapacitor:()=>!!window.Capacitor,impact(t){const e=this.getEngine();if(!e)return;const n=this.isCapacitor()?t.style.toUpperCase():t.style;e.impact({style:n})},notification(t){const e=this.getEngine();if(!e)return;const n=this.isCapacitor()?t.style.toUpperCase():t.style;e.notification({style:n})},selection(){this.impact({style:"light"})},selectionStart(){const t=this.getEngine();t&&(this.isCapacitor()?t.selectionStart():t.gestureSelectionStart())},selectionChanged(){const t=this.getEngine();t&&(this.isCapacitor()?t.selectionChanged():t.gestureSelectionChanged())},selectionEnd(){const t=this.getEngine();t&&(this.isCapacitor()?t.selectionEnd():t.gestureSelectionEnd())}},o=()=>{i.selection()},s=()=>{i.selectionStart()},c=()=>{i.selectionChanged()},r=()=>{i.selectionEnd()},l=t=>{i.impact(t)}},"6i10":function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));const i={bubbles:{dur:1e3,circles:9,fn:(t,e,n)=>{const i=t*e/n-t+"ms",o=2*Math.PI*e/n;return{r:5,style:{top:9*Math.sin(o)+"px",left:9*Math.cos(o)+"px","animation-delay":i}}}},circles:{dur:1e3,circles:8,fn:(t,e,n)=>{const i=e/n,o=t*i-t+"ms",s=2*Math.PI*i;return{r:5,style:{top:9*Math.sin(s)+"px",left:9*Math.cos(s)+"px","animation-delay":o}}}},circular:{dur:1400,elmDuration:!0,circles:1,fn:()=>({r:20,cx:48,cy:48,fill:"none",viewBox:"24 24 48 48",transform:"translate(0,0)",style:{}})},crescent:{dur:750,circles:1,fn:()=>({r:26,style:{}})},dots:{dur:750,circles:3,fn:(t,e)=>({r:6,style:{left:9-9*e+"px","animation-delay":-110*e+"ms"}})},lines:{dur:1e3,lines:12,fn:(t,e,n)=>({y1:17,y2:29,style:{transform:`rotate(${30*e+(e<6?180:-180)}deg)`,"animation-delay":t*e/n-t+"ms"}})},"lines-small":{dur:1e3,lines:12,fn:(t,e,n)=>({y1:12,y2:20,style:{transform:`rotate(${30*e+(e<6?180:-180)}deg)`,"animation-delay":t*e/n-t+"ms"}})}}},"7wo0":function(t,e,n){"use strict";n.r(e),n.d(e,"SettingsPageModule",(function(){return m}));var i=n("ofXK"),o=n("3Pt+"),s=n("tyNb"),c=n("TEn/"),r=n("mrSG"),l=n("DPk/"),a=n("fXoL");let b=(()=>{class t{constructor(){this.appName="MyPeaks UK Hills and Mountains",this.appVersion="2.0.0",this.authorName="Jonathan Rewcastle",this.authorSite="https://apps.jonathanrewcastle.co.uk",this.authorEmail="jrewapps@gmail.com",this.privacy="https://apps.jonathanrewcastle.co.uk/privacy/mypeaks",this.helpUrl="https://apps.jonathanrewcastle.co.uk/help/mypeaks"}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275prov=a.Db({token:t,factory:t.\u0275fac,providedIn:"root"}),t})(),d=(()=>{class t{constructor(t,e){this.config=t,this.modalCtrl=e}dismiss(){this.modalCtrl.dismiss()}privacy(){window.open(this.config.privacy)}}return t.\u0275fac=function(e){return new(e||t)(a.Hb(b),a.Hb(c.P))},t.\u0275cmp=a.Bb({type:t,selectors:[["app-about-dialog"]],decls:22,vars:4,consts:[["slot","end"],[3,"click"],["padding","",1,"content"],["src","assets/logo.png"],["target","_blank",3,"href"],["href","http://www.hills-database.co.uk/","target","_blank"],["expand","full",3,"click"]],template:function(t,e){1&t&&(a.Mb(0,"ion-header"),a.Mb(1,"ion-toolbar"),a.Mb(2,"ion-title"),a.oc(3," About MyPeaks "),a.Lb(),a.Mb(4,"ion-buttons",0),a.Mb(5,"ion-button",1),a.Ub("click",(function(){return e.dismiss()})),a.oc(6,"Close"),a.Lb(),a.Lb(),a.Lb(),a.Lb(),a.Mb(7,"ion-content",2),a.Ib(8,"img",3),a.Mb(9,"p"),a.oc(10),a.Lb(),a.Mb(11,"p"),a.oc(12,"App developed by "),a.Mb(13,"a",4),a.oc(14),a.Lb(),a.Lb(),a.Mb(15,"p"),a.oc(16,"This app uses data from "),a.Mb(17,"a",5),a.oc(18,"The Database of British and Irish Hills"),a.Lb(),a.oc(19," v17"),a.Lb(),a.Mb(20,"ion-button",6),a.Ub("click",(function(){return e.privacy()})),a.oc(21,"View Privacy Policy"),a.Lb(),a.Lb()),2&t&&(a.xb(10),a.rc("",e.config.appName," version ",e.config.appVersion,""),a.xb(3),a.ec("href",e.config.authorSite,a.lc),a.xb(1),a.pc(e.config.authorName))},directives:[c.n,c.L,c.K,c.g,c.f,c.i],styles:[".content[_ngcontent-%COMP%]{text-align:center}img[_ngcontent-%COMP%]{display:block;margin:1rem auto;max-height:100px}"]}),t})();var u=n("gcOT");let h=(()=>{class t{constructor(t){this.userDataService=t}exportBackup(){return Object(r.a)(this,void 0,void 0,(function*(){try{const t=yield this.userDataService.getBackup();yield u.a.FileSharer.share({filename:`mypeaks-${this.formattedDate}.json`,base64Data:btoa(t),contentType:"application/json"})}catch(t){console.error(t)}}))}get formattedDate(){const t=new Date;return`${t.getFullYear()}${this.pad(t.getMonth()+1,2)}${this.pad(t.getDate(),2)}`}pad(t,e){return Array(Math.max(e-t.toString().length,0)).fill("0").join("")+t.toString()}}return t.\u0275fac=function(e){return new(e||t)(a.Qb(l.a))},t.\u0275prov=a.Db({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var g=n("Y9WU");const p=[{path:"",component:(()=>{class t{constructor(t,e,n,i,o,s){this.userDataService=t,this.modalController=e,this.config=n,this.exportService=i,this.alertCtrl=o,this.analytics=s}reset(){return Object(r.a)(this,void 0,void 0,(function*(){const t=yield this.alertCtrl.create({header:"Clear targets and log?",message:"This cannot be undone",buttons:[{text:"Cancel",role:"cancel"},{text:"Clear",handler:()=>Object(r.a)(this,void 0,void 0,(function*(){yield this.userDataService.deleteUserData(),yield this.analytics.logEvent("settings:reset")}))}]});yield t.present()}))}backup(){return Object(r.a)(this,void 0,void 0,(function*(){yield this.exportService.exportBackup(),yield this.analytics.logEvent("settings:backup")}))}about(){return Object(r.a)(this,void 0,void 0,(function*(){const t=yield this.modalController.create({component:d});yield t.present(),yield this.analytics.logEvent("settings:about")}))}help(){return Object(r.a)(this,void 0,void 0,(function*(){window.open(this.config.helpUrl),yield this.analytics.logEvent("settings:help")}))}feedback(){return Object(r.a)(this,void 0,void 0,(function*(){window.open(`mailto:${this.config.authorEmail}?subject=MyPeaks%20Feedback`),yield this.analytics.logEvent("settings:feedback")}))}}return t.\u0275fac=function(e){return new(e||t)(a.Hb(l.a),a.Hb(c.P),a.Hb(b),a.Hb(h),a.Hb(c.a),a.Hb(g.a))},t.\u0275cmp=a.Bb({type:t,selectors:[["app-settings"]],decls:44,vars:0,consts:[["color","primary"],["slot","start"],[3,"click"],["name","download","slot","start"],["name","information-circle-outline","slot","start"],["name","help-circle-outline","slot","start"],["name","bulb","slot","start"],["name","trash","color","danger","slot","start"]],template:function(t,e){1&t&&(a.Mb(0,"ion-header"),a.Mb(1,"ion-toolbar",0),a.Mb(2,"ion-buttons",1),a.Mb(3,"ion-menu-toggle"),a.Ib(4,"ion-menu-button"),a.Lb(),a.Lb(),a.Mb(5,"ion-title"),a.oc(6,"Settings"),a.Lb(),a.Lb(),a.Lb(),a.Mb(7,"ion-content"),a.Mb(8,"ion-list"),a.Mb(9,"ion-item",2),a.Ub("click",(function(){return e.backup()})),a.Ib(10,"ion-icon",3),a.Mb(11,"ion-label"),a.Mb(12,"h4"),a.oc(13,"Backup Data"),a.Lb(),a.Mb(14,"p"),a.oc(15,"Export your targets and log entries for re-importing at a later date or on a new device"),a.Lb(),a.Lb(),a.Lb(),a.Mb(16,"ion-item",2),a.Ub("click",(function(){return e.about()})),a.Ib(17,"ion-icon",4),a.Mb(18,"ion-label"),a.Mb(19,"h4"),a.oc(20,"About"),a.Lb(),a.Mb(21,"p"),a.oc(22,"Find out more about the app"),a.Lb(),a.Lb(),a.Lb(),a.Mb(23,"ion-item",2),a.Ub("click",(function(){return e.help()})),a.Ib(24,"ion-icon",5),a.Mb(25,"ion-label"),a.Mb(26,"h4"),a.oc(27,"Help & Support"),a.Lb(),a.Mb(28,"p"),a.oc(29,"View help pages and contact support"),a.Lb(),a.Lb(),a.Lb(),a.Mb(30,"ion-item",2),a.Ub("click",(function(){return e.feedback()})),a.Ib(31,"ion-icon",6),a.Mb(32,"ion-label"),a.Mb(33,"h3"),a.oc(34,"Feedback & Suggestions"),a.Lb(),a.Mb(35,"p"),a.oc(36,"Feedback and suggestions for an improved experience"),a.Lb(),a.Lb(),a.Lb(),a.Mb(37,"ion-item",2),a.Ub("click",(function(){return e.reset()})),a.Ib(38,"ion-icon",7),a.Mb(39,"ion-label"),a.Mb(40,"h4"),a.oc(41,"Reset User Data"),a.Lb(),a.Mb(42,"p"),a.oc(43,"Removes all targets and log entries"),a.Lb(),a.Lb(),a.Lb(),a.Lb(),a.Lb())},directives:[c.n,c.L,c.g,c.z,c.y,c.K,c.i,c.v,c.p,c.o,c.u],styles:[""]}),t})()}];let m=(()=>{class t{}return t.\u0275mod=a.Fb({type:t}),t.\u0275inj=a.Eb({factory:function(e){return new(e||t)},imports:[[i.b,o.a,c.N,s.i.forChild(p)]]}),t})()},IS1p:function(t,e,n){"use strict";n.r(e),n.d(e,"ProgressPageModule",(function(){return L}));var i=n("ofXK"),o=n("3Pt+"),s=n("tyNb"),c=n("TEn/"),r=n("XNiG"),l=n("1G5W"),a=n("zptW"),b=n("DPk/"),d=n("fXoL");let u=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=d.Bb({type:t,selectors:[["mp-progress-circle"]],inputs:{percentage:"percentage"},decls:5,vars:2,consts:[["viewBox","0 0 36 36",1,"indicator"],["d","M18 2.0845\n      a 15.9155 15.9155 0 0 1 0 31.831\n      a 15.9155 15.9155 0 0 1 0 -31.831","fill","none","stroke","#c0c0c0","stroke-width","2"],["d","M18 2.0845\n        a 15.9155 15.9155 0 0 1 0 31.831\n        a 15.9155 15.9155 0 0 1 0 -31.831","fill","none","stroke","#444","stroke-width","1",1,"circle"]],template:function(t,e){1&t&&(d.Xb(),d.Mb(0,"svg",0),d.Ib(1,"path",1),d.Ib(2,"path",2),d.Lb(),d.Wb(),d.Mb(3,"span"),d.oc(4),d.Lb()),2&t&&(d.xb(2),d.yb("stroke-dasharray",e.percentage+", 100"),d.xb(2),d.qc("",e.percentage,"%"))},styles:["[_nghost-%COMP%]{position:relative}.indicator[_ngcontent-%COMP%]{display:block}span[_ngcontent-%COMP%]{position:absolute;top:18px;left:0;width:100%;text-align:center;font-size:1rem}.circle[_ngcontent-%COMP%]{stroke:#00a6fb;fill:none;stroke-width:2.8;stroke-linecap:round;-webkit-animation:progress 1s ease-out forwards;animation:progress 1s ease-out forwards}@-webkit-keyframes progress{0%{stroke-dasharray:0 100}}@keyframes progress{0%{stroke-dasharray:0 100}}"]}),t})();function h(t,e){if(1&t&&(d.Mb(0,"ion-item-divider"),d.oc(1),d.Lb()),2&t){const t=e.$implicit;d.xb(1),d.qc(" ",t," ")}}function g(t,e){if(1&t&&(d.Mb(0,"p"),d.oc(1),d.Lb()),2&t){const t=d.Yb().$implicit;d.xb(1),d.pc(t.desc)}}function p(t,e){if(1&t&&(d.Mb(0,"ion-item"),d.Mb(1,"ion-label"),d.Mb(2,"h4"),d.oc(3),d.Lb(),d.nc(4,g,2,1,"p",8),d.Mb(5,"p"),d.oc(6),d.Lb(),d.Lb(),d.Ib(7,"mp-progress-circle",9),d.Lb()),2&t){const t=e.$implicit;d.xb(3),d.pc(t.name),d.xb(1),d.dc("ngIf",t.desc),d.xb(2),d.rc("Hills Climbed: ",t.count," / ",t.total,""),d.xb(1),d.dc("percentage",t.percent)}}let m=(()=>{class t{constructor(t,e){this.hillsService=t,this.userDataService=e,this.entries=[],this.climbed=[],this.unsubscribe=new r.a}ngOnInit(){this.subscribeToUserData(),this.modeChanged("lists")}ngOnDestroy(){this.unsubscribe.next(),this.unsubscribe.complete()}modeChanged(t){this.mode=t,this.loadData()}headerFn(t){return t.group}loadData(){this.entries="regions"===this.mode?this.loadRegionProgress():this.loadListProgress()}loadListProgress(){const t=[];for(const e of this.hillsService.getLists()){const n=this.hillsService.getHillsInList(e.id),i=n.filter(t=>this.climbed.includes(t.id)).length,o=(100*i/n.length).toFixed(2);t.push({name:e.name,desc:e.description,total:n.length,count:i,percent:o})}return t}loadRegionProgress(){const t=[];let e=null;for(const n of this.hillsService.getRegions()){const i=this.hillsService.getHillsInRegion(n.name),o=i.filter(t=>this.climbed.includes(t.id)).length,s=(100*o/i.length).toFixed(2);t.push({name:n.name,total:i.length,count:o,group:e!==n.country?n.country:null,percent:s}),e=n.country}return t}subscribeToUserData(){this.userDataService.loggedHillIds$.pipe(Object(l.a)(this.unsubscribe)).subscribe(t=>{this.climbed=t,this.loadData()})}}return t.\u0275fac=function(e){return new(e||t)(d.Hb(a.a),d.Hb(b.a))},t.\u0275cmp=d.Bb({type:t,selectors:[["app-progress"]],decls:19,vars:3,consts:[["color","primary"],["slot","start"],[3,"value","ionChange"],["value","lists"],["value","regions"],[3,"items","headerFn"],[4,"virtualHeader"],[4,"virtualItem"],[4,"ngIf"],[3,"percentage"]],template:function(t,e){1&t&&(d.Mb(0,"ion-header"),d.Mb(1,"ion-toolbar",0),d.Mb(2,"ion-buttons",1),d.Mb(3,"ion-menu-toggle"),d.Ib(4,"ion-menu-button"),d.Lb(),d.Lb(),d.Mb(5,"ion-title"),d.oc(6,"Progress"),d.Lb(),d.Lb(),d.Mb(7,"ion-toolbar"),d.Mb(8,"ion-segment",2),d.Ub("ionChange",(function(t){return e.modeChanged(t.detail.value)})),d.Mb(9,"ion-segment-button",3),d.Mb(10,"ion-label"),d.oc(11,"Hill Lists"),d.Lb(),d.Lb(),d.Mb(12,"ion-segment-button",4),d.Mb(13,"ion-label"),d.oc(14,"Hill Regions"),d.Lb(),d.Lb(),d.Lb(),d.Lb(),d.Lb(),d.Mb(15,"ion-content"),d.Mb(16,"ion-virtual-scroll",5),d.nc(17,h,2,1,"ion-item-divider",6),d.nc(18,p,8,5,"ion-item",7),d.Lb(),d.Lb()),2&t&&(d.xb(8),d.dc("value",e.mode),d.xb(8),d.dc("items",e.entries)("headerFn",e.headerFn))},directives:[c.n,c.L,c.g,c.z,c.y,c.K,c.C,c.U,c.D,c.u,c.i,c.M,c.X,c.Y,c.q,c.p,i.j,u],styles:["h4[_ngcontent-%COMP%]{font-weight:700}mp-progress-circle[_ngcontent-%COMP%]{flex:0 0 auto;width:60px;height:60px}"]}),t})();var f=n("PCNd");const M=[{path:"",component:m}];let L=(()=>{class t{}return t.\u0275mod=d.Fb({type:t}),t.\u0275inj=d.Eb({factory:function(e){return new(e||t)},imports:[[i.b,o.a,c.N,s.i.forChild(M),f.a]]}),t})()},NqGI:function(t,e,n){"use strict";n.d(e,"a",(function(){return i})),n.d(e,"b",(function(){return o}));const i=async(t,e,n,i,o)=>{if(t)return t.attachViewToDom(e,n,o,i);if("string"!=typeof n&&!(n instanceof HTMLElement))throw new Error("framework delegate is missing");const s="string"==typeof n?e.ownerDocument&&e.ownerDocument.createElement(n):n;return i&&i.forEach(t=>s.classList.add(t)),o&&Object.assign(s,o),e.appendChild(s),s.componentOnReady&&await s.componentOnReady(),s},o=(t,e)=>{if(e){if(t)return t.removeViewFromDom(e.parentElement,e);e.remove()}return Promise.resolve()}},"U/uv":function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var i=n("sxy2"),o=n("ItpF"),s=n("2c9M");const c=(t,e)=>{let n,c;const r=(t,i,o)=>{if("undefined"==typeof document)return;const s=document.elementFromPoint(t,i);s&&e(s)?s!==n&&(a(),l(s,o)):a()},l=(t,e)=>{n=t,c||(c=n);const o=n;Object(i.g)(()=>o.classList.add("ion-activated")),e()},a=(t=!1)=>{if(!n)return;const e=n;Object(i.g)(()=>e.classList.remove("ion-activated")),t&&c!==n&&n.click(),n=void 0};return Object(o.createGesture)({el:t,gestureName:"buttonActiveDrag",threshold:0,onStart:t=>r(t.currentX,t.currentY,s.a),onMove:t=>r(t.currentX,t.currentY,s.b),onEnd:()=>{a(!0),Object(s.e)(),c=void 0}})}},cyvj:function(t,e,n){"use strict";n.r(e),n.d(e,"HillDetailsPageModule",(function(){return O}));var i=n("ofXK"),o=n("3Pt+"),s=n("tyNb"),c=n("TEn/"),r=n("6NWb"),l=n("mrSG"),a=n("XNiG"),b=n("1G5W"),d=n("zptW"),u=n("DPk/"),h=n("fXoL");function g(t,e){if(1&t){const t=h.Nb();h.Mb(0,"ion-button",8),h.Ub("click",(function(){return h.jc(t),h.Yb().delete()})),h.oc(1,"Delete"),h.Lb()}}let p=(()=>{class t{constructor(t,e){this.modal=t,this.userDataService=e}ngOnInit(){this.entry||(this.entry={id:null,hillId:this.hillId,date:new Date,notes:"",imported:!1,hillName:this.hillName}),this.form=Object.assign({},this.entry)}cancel(){this.modal.dismiss(!1)}dateChange(t){this.form.date=new Date(t.detail.value)}delete(){return Object(l.a)(this,void 0,void 0,(function*(){yield this.userDataService.deleteLogEntry(this.entry),this.modal.dismiss(!0)}))}save(){return Object(l.a)(this,void 0,void 0,(function*(){yield this.userDataService.updateLogEntry(this.form),this.modal.dismiss(!0)}))}}return t.\u0275fac=function(e){return new(e||t)(h.Hb(c.P),h.Hb(u.a))},t.\u0275cmp=h.Bb({type:t,selectors:[["app-log-editor-dialog"]],inputs:{hillId:"hillId",hillName:"hillName",entry:"entry"},decls:26,vars:4,consts:[["slot","end"],["size","default",3,"click"],[3,"value","ionChange"],["name","description",3,"ngModel","ngModelChange"],["slot","start"],["color","danger","fill","solid",3,"click",4,"ngIf"],["color","light","fill","solid","size","default",3,"click"],["color","primary","fill","solid","size","default",3,"click"],["color","danger","fill","solid",3,"click"]],template:function(t,e){1&t&&(h.Mb(0,"ion-header"),h.Mb(1,"ion-toolbar"),h.Mb(2,"ion-title"),h.oc(3),h.Lb(),h.Mb(4,"ion-buttons",0),h.Mb(5,"ion-button",1),h.Ub("click",(function(){return e.cancel()})),h.oc(6,"Close"),h.Lb(),h.Lb(),h.Lb(),h.Lb(),h.Mb(7,"ion-content"),h.Mb(8,"form"),h.Mb(9,"ion-item"),h.Mb(10,"ion-label"),h.oc(11,"Date"),h.Lb(),h.Mb(12,"ion-datetime",2),h.Ub("ionChange",(function(t){return e.dateChange(t)})),h.Lb(),h.Lb(),h.Mb(13,"ion-item"),h.Mb(14,"ion-label"),h.oc(15,"Notes"),h.Lb(),h.Mb(16,"ion-textarea",3),h.Ub("ngModelChange",(function(t){return e.form.notes=t})),h.Lb(),h.Lb(),h.Lb(),h.Lb(),h.Mb(17,"ion-footer"),h.Mb(18,"ion-toolbar"),h.Mb(19,"ion-buttons",4),h.nc(20,g,2,0,"ion-button",5),h.Lb(),h.Mb(21,"ion-buttons",0),h.Mb(22,"ion-button",6),h.Ub("click",(function(){return e.cancel()})),h.oc(23,"Cancel"),h.Lb(),h.Mb(24,"ion-button",7),h.Ub("click",(function(){return e.save()})),h.oc(25,"Save"),h.Lb(),h.Lb(),h.Lb(),h.Lb()),2&t&&(h.xb(3),h.qc("",e.entry.id?"Edit":"Add"," Log Entry"),h.xb(9),h.ec("value",e.form.date),h.xb(4),h.dc("ngModel",e.form.notes),h.xb(4),h.dc("ngIf",e.entry.id))},directives:[c.n,c.L,c.K,c.g,c.f,c.i,o.h,o.e,o.f,c.p,c.u,c.j,c.U,c.J,c.V,o.d,o.g,c.m,i.j],styles:[""]}),t})();var m=n("EGNa");function f(t,e){1&t&&(h.Mb(0,"section",5),h.Mb(1,"article"),h.Ib(2,"img",6),h.Mb(3,"h4"),h.oc(4,"Welcome to MyPeaks"),h.Lb(),h.Mb(5,"p"),h.oc(6,"Select a hill from the left menu or view the hill map to get started"),h.Lb(),h.Mb(7,"p"),h.Mb(8,"ion-button",7),h.oc(9,"View Hill Map"),h.Lb(),h.Lb(),h.Lb(),h.Lb())}function M(t,e){1&t&&(h.Mb(0,"span",20),h.Ib(1,"ion-icon",21),h.Lb())}function L(t,e){1&t&&(h.Mb(0,"span",20),h.Ib(1,"ion-icon",22),h.Lb())}function y(t,e){if(1&t&&(h.Mb(0,"ion-item"),h.Mb(1,"ion-label"),h.oc(2,"Last Climbed: "),h.Mb(3,"strong"),h.oc(4),h.Zb(5,"date"),h.Lb(),h.Lb(),h.Lb()),2&t){const t=h.Yb(2);h.xb(4),h.pc(h.ac(5,1,t.climbed))}}function v(t,e){if(1&t&&(h.Mb(0,"ion-chip",0),h.oc(1),h.Lb()),2&t){const t=e.$implicit;h.xb(1),h.pc(t)}}function C(t,e){if(1&t){const t=h.Nb();h.Mb(0,"ion-item-sliding"),h.Mb(1,"ion-item",14),h.Ub("click",(function(){h.jc(t);const n=e.$implicit;return h.Yb(2).editLogEntry(n)})),h.Ib(2,"ion-icon",23),h.Mb(3,"ion-label"),h.oc(4),h.Zb(5,"date"),h.Lb(),h.Lb(),h.Mb(6,"ion-item-options",24),h.Mb(7,"ion-item-option",14),h.Ub("click",(function(){h.jc(t);const n=e.$implicit;return h.Yb(2).editLogEntry(n)})),h.oc(8,"Edit"),h.Lb(),h.Mb(9,"ion-item-option",25),h.Ub("click",(function(){h.jc(t);const n=e.$implicit;return h.Yb(2).deleteLogEntry(n)})),h.oc(10,"Delete"),h.Lb(),h.Lb(),h.Lb()}if(2&t){const t=e.$implicit;h.xb(4),h.rc("",h.ac(5,2,t.date),"",t.notes?": "+t.notes:"","")}}function k(t,e){if(1&t){const t=h.Nb();h.Mb(0,"section",8),h.Mb(1,"section",9),h.Mb(2,"article",10),h.Mb(3,"h2"),h.oc(4),h.nc(5,M,2,0,"span",11),h.nc(6,L,2,0,"span",11),h.Lb(),h.Mb(7,"p"),h.oc(8),h.Lb(),h.Lb(),h.Mb(9,"ion-list"),h.Mb(10,"ion-list-header"),h.Mb(11,"ion-label"),h.oc(12,"Details"),h.Lb(),h.Lb(),h.Mb(13,"ion-item"),h.Mb(14,"ion-label"),h.oc(15,"Height: "),h.Mb(16,"strong"),h.oc(17),h.Lb(),h.Lb(),h.Lb(),h.Mb(18,"ion-item"),h.Mb(19,"ion-label"),h.oc(20,"Location: "),h.Mb(21,"strong"),h.oc(22),h.Lb(),h.Lb(),h.Lb(),h.Mb(23,"ion-item"),h.Mb(24,"ion-label"),h.oc(25,"Grid Ref: "),h.Mb(26,"strong"),h.oc(27),h.Lb(),h.Lb(),h.Lb(),h.Mb(28,"ion-item"),h.Mb(29,"ion-label"),h.oc(30,"Lat: "),h.Mb(31,"strong"),h.oc(32),h.Lb(),h.oc(33,", Long: "),h.Mb(34,"strong"),h.oc(35),h.Lb(),h.Lb(),h.Lb(),h.nc(36,y,6,3,"ion-item",12),h.Mb(37,"ion-item"),h.Mb(38,"ion-label"),h.oc(39,"Lists: "),h.nc(40,v,2,1,"ion-chip",13),h.Lb(),h.Lb(),h.Mb(41,"ion-list-header"),h.Mb(42,"ion-label"),h.oc(43,"Target"),h.Lb(),h.Lb(),h.Mb(44,"ion-item",14),h.Ub("click",(function(){return h.jc(t),h.Yb().toggleTarget()})),h.Ib(45,"ion-icon",15),h.Mb(46,"ion-label"),h.oc(47),h.Lb(),h.Lb(),h.Mb(48,"ion-list-header"),h.Mb(49,"ion-label"),h.oc(50,"Log"),h.Lb(),h.Lb(),h.nc(51,C,11,4,"ion-item-sliding",16),h.Mb(52,"ion-item",14),h.Ub("click",(function(){return h.jc(t),h.Yb().addLogEntry()})),h.Ib(53,"ion-icon",17),h.Mb(54,"ion-label"),h.oc(55,"Add Log Entry"),h.Lb(),h.Lb(),h.Lb(),h.Lb(),h.Mb(56,"section",18),h.Ib(57,"mp-hill-map",19),h.Lb(),h.Lb()}if(2&t){const t=h.Yb();h.xb(4),h.qc("",t.hill.name," "),h.xb(1),h.dc("ngIf",t.climbed),h.xb(1),h.dc("ngIf",t.target),h.xb(2),h.pc(t.friendlyDesc),h.xb(9),h.pc(t.hill.formattedHeight),h.xb(5),h.pc(t.hill.location),h.xb(5),h.pc(t.hill.gridRef),h.xb(5),h.pc(t.hill.lat),h.xb(3),h.pc(t.hill.lng),h.xb(1),h.dc("ngIf",t.climbed),h.xb(4),h.dc("ngForOf",t.lists),h.xb(5),h.dc("name",t.target?"remove":"star"),h.xb(2),h.qc("",t.target?"Remove from":"Add to"," Targets"),h.xb(4),h.dc("ngForOf",t.log),h.xb(6),h.dc("restrictTo",t.hill.id)("suppressFilter",!0)("invalidateSize$",t.invalidateMapSize)}}let x=(()=>{class t{constructor(t,e,n,i,o){this.route=t,this.hillsService=e,this.userDataService=n,this.modalCtrl=i,this.alertCtrl=o,this.mode="details",this.target=!1,this.log=[],this.climbed=null,this.invalidateMapSize=new a.a,this.unsubscribe=new a.a}ngOnInit(){const t=this.route.snapshot.params.hillId;t&&(this.hill=this.hillsService.getHill(Number.parseInt(t,10)),this.userDataService.targetHillIds$.pipe(Object(b.a)(this.unsubscribe)).subscribe(t=>this.target=t.includes(this.hill.id)),this.loadLog())}ngOnDestroy(){this.unsubscribe.next(),this.unsubscribe.complete()}get friendlyDesc(){return`A ${this.hill.heightFeet>=1e3?"mountain":this.hill.lists.includes("W")?"fell":"hill"} in the ${this.hill.region} area of ${this.hill.country}, reaching ${this.hill.heightFeet} feet (${this.hill.heightMetres} metres).`}get lists(){const t=this.hillsService.getLists().reduce((t,e)=>(t[e.id]=e.name,t),{});return this.hill.lists.map(e=>t[e]).filter(Boolean)}changeMode(t){this.mode=t,this.invalidateMapSize.next()}editLogEntry(t){return Object(l.a)(this,void 0,void 0,(function*(){yield this.showLogEditor(t)}))}addLogEntry(){return Object(l.a)(this,void 0,void 0,(function*(){yield this.showLogEditor()}))}deleteLogEntry(t){return Object(l.a)(this,void 0,void 0,(function*(){const e=yield this.alertCtrl.create({header:"Delete Entry?",message:"This cannot be undone",buttons:[{text:"Cancel",role:"cancel"},{text:"Delete",handler:()=>Object(l.a)(this,void 0,void 0,(function*(){yield this.userDataService.deleteLogEntry(t),this.loadLog()}))}]});yield e.present()}))}showLogEditor(t){return Object(l.a)(this,void 0,void 0,(function*(){const e=yield this.modalCtrl.create({component:p,componentProps:{hillId:this.hill.id,hillName:this.hill.name,entry:t}});yield e.present();const{data:n}=yield e.onWillDismiss();n&&(yield this.loadLog())}))}loadLog(){return Object(l.a)(this,void 0,void 0,(function*(){this.log=yield this.userDataService.getHillLogEntries(this.hill.id),this.climbed=yield this.userDataService.getMostRecentClimb(this.hill.id),this.invalidateMapSize.next()}))}toggleTarget(){return Object(l.a)(this,void 0,void 0,(function*(){yield this.userDataService.toggleTarget(this.hill.id)}))}}return t.\u0275fac=function(e){return new(e||t)(h.Hb(s.a),h.Hb(d.a),h.Hb(u.a),h.Hb(c.P),h.Hb(c.a))},t.\u0275cmp=h.Bb({type:t,selectors:[["app-hill-details"]],decls:11,vars:3,consts:[["color","primary"],["slot","start"],["scrollY","false"],["id","welcome",4,"ngIf"],["id","hill-details",4,"ngIf"],["id","welcome"],["src","assets/logo.png","alt","MyPeaks",1,"logo"],["routerLink","/split/hill-map"],["id","hill-details"],["id","info"],[1,"ion-padding"],["class","icon",4,"ngIf"],[4,"ngIf"],["color","primary",4,"ngFor","ngForOf"],[3,"click"],["slot","start",3,"name"],[4,"ngFor","ngForOf"],["name","add","slot","start"],["id","map"],[3,"restrictTo","suppressFilter","invalidateSize$"],[1,"icon"],["name","checkmark-circle-outline",1,"check"],["name","star"],["name","create","slot","start"],["side","end"],["color","danger",3,"click"]],template:function(t,e){1&t&&(h.Mb(0,"ion-header"),h.Mb(1,"ion-toolbar",0),h.Mb(2,"ion-buttons",1),h.Mb(3,"ion-menu-toggle"),h.Ib(4,"ion-menu-button"),h.Lb(),h.Ib(5,"ion-back-button"),h.Lb(),h.Mb(6,"ion-title"),h.oc(7),h.Lb(),h.Lb(),h.Lb(),h.Mb(8,"ion-content",2),h.nc(9,f,10,0,"section",3),h.nc(10,k,58,17,"section",4),h.Lb()),2&t&&(h.xb(7),h.pc((null==e.hill?null:e.hill.name)||"Welcome to MyPeaks"),h.xb(2),h.dc("ngIf",!e.hill),h.xb(1),h.dc("ngIf",e.hill))},directives:[c.n,c.L,c.g,c.z,c.y,c.c,c.d,c.K,c.i,i.j,c.f,c.T,s.h,c.v,c.w,c.u,c.p,i.i,c.o,m.a,c.h,c.t,c.s,c.r],pipes:[i.d],styles:["#welcome[_ngcontent-%COMP%]{text-align:center;height:100%;display:flex;flex-direction:column;align-items:center;justify-content:center;background:url(/assets/bg.jpg) no-repeat 50%;background-size:cover;color:#fff;text-shadow:0 0 2px rgba(0,0,0,.8),0 0 0 #000}#welcome[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]{flex:0 0 auto;padding:2rem}#welcome[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]{max-height:100px}#hill-details[_ngcontent-%COMP%]{height:100%}#hill-details[_ngcontent-%COMP%]   #info[_ngcontent-%COMP%]{height:calc(100% - 200px);flex-direction:column;overflow-y:auto}#hill-details[_ngcontent-%COMP%]   #map[_ngcontent-%COMP%]{width:100%;height:200px}#hill-details[_ngcontent-%COMP%]   #map[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{width:100%;height:100%}#hill-details[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin:0 0 1rem}#hill-details[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]{margin:0 0 0 .5rem}#hill-details[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{position:relative;top:3px}#hill-details[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]   ion-icon.check[_ngcontent-%COMP%]{top:4px}#hill-details[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0}"]}),t})();var w=n("PCNd");const P=[{path:"",component:x},{path:":hillId",component:x}];let O=(()=>{class t{}return t.\u0275mod=h.Fb({type:t}),t.\u0275inj=h.Eb({factory:function(e){return new(e||t)},imports:[[i.b,o.a,c.N,s.i.forChild(P),r.c,w.a]]}),t})()},fH7P:function(t,e,n){"use strict";n.r(e),n.d(e,"HillMapPageModule",(function(){return b}));var i=n("TEn/"),o=n("tyNb"),s=n("ofXK"),c=n("fXoL"),r=n("EGNa");let l=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=c.Bb({type:t,selectors:[["hill-map-page"]],decls:9,vars:0,consts:[["color","primary"],["slot","start"],["scrollX","false","scrollY","false"]],template:function(t,e){1&t&&(c.Mb(0,"ion-header"),c.Mb(1,"ion-toolbar",0),c.Mb(2,"ion-buttons",1),c.Mb(3,"ion-menu-toggle"),c.Ib(4,"ion-menu-button"),c.Lb(),c.Lb(),c.Mb(5,"ion-title"),c.oc(6," Hill Map "),c.Lb(),c.Lb(),c.Lb(),c.Mb(7,"ion-content",2),c.Ib(8,"mp-hill-map"),c.Lb())},directives:[i.n,i.L,i.g,i.z,i.y,i.K,i.i,r.a],styles:[""]}),t})();var a=n("PCNd");let b=(()=>{class t{}return t.\u0275mod=c.Fb({type:t}),t.\u0275inj=c.Eb({factory:function(e){return new(e||t)},imports:[[i.N,s.b,a.a,o.i.forChild([{path:"",component:l},{path:"hill-details",loadChildren:()=>n.e(0).then(n.bind(null,"cyvj")).then(t=>t.HillDetailsPageModule)}])]]}),t})()},sPtc:function(t,e,n){"use strict";n.d(e,"a",(function(){return o})),n.d(e,"b",(function(){return s})),n.d(e,"c",(function(){return i})),n.d(e,"d",(function(){return r}));const i=(t,e)=>null!==e.closest(t),o=(t,e)=>"string"==typeof t&&t.length>0?Object.assign({"ion-color":!0,["ion-color-"+t]:!0},e):e,s=t=>{const e={};return(t=>void 0!==t?(Array.isArray(t)?t:t.split(" ")).filter(t=>null!=t).map(t=>t.trim()).filter(t=>""!==t):[])(t).forEach(t=>e[t]=!0),e},c=/^[a-z][a-z0-9+\-.]*:/,r=async(t,e,n,i)=>{if(null!=t&&"#"!==t[0]&&!c.test(t)){const o=document.querySelector("ion-router");if(o)return null!=e&&e.preventDefault(),o.push(t,n,i)}return!1}}}]);