(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&o(l)}).observe(document,{childList:!0,subtree:!0});function t(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(r){if(r.ep)return;r.ep=!0;const i=t(r);fetch(r.href,i)}})();function Oa(e){const n=Object.create(null);for(const t of e.split(","))n[t]=1;return t=>t in n}const Me={},It=[],$n=()=>{},Vl=()=>!1,rr=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),ar=e=>e.startsWith("onUpdate:"),Je=Object.assign,Ia=(e,n)=>{const t=e.indexOf(n);t>-1&&e.splice(t,1)},$c=Object.prototype.hasOwnProperty,Le=(e,n)=>$c.call(e,n),_e=Array.isArray,Pt=e=>To(e)==="[object Map]",Ut=e=>To(e)==="[object Set]",ti=e=>To(e)==="[object Date]",Ne=e=>typeof e=="function",$e=e=>typeof e=="string",On=e=>typeof e=="symbol",je=e=>e!==null&&typeof e=="object",zl=e=>(je(e)||Ne(e))&&Ne(e.then)&&Ne(e.catch),Ul=Object.prototype.toString,To=e=>Ul.call(e),Fc=e=>To(e).slice(8,-1),Hl=e=>To(e)==="[object Object]",Pa=e=>$e(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,oo=Oa(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),ir=e=>{const n=Object.create(null);return(t=>n[t]||(n[t]=e(t)))},Vc=/-\w/g,fn=ir(e=>e.replace(Vc,n=>n.slice(1).toUpperCase())),zc=/\B([A-Z])/g,Bt=ir(e=>e.replace(zc,"-$1").toLowerCase()),lr=ir(e=>e.charAt(0).toUpperCase()+e.slice(1)),$o=ir(e=>e?`on${lr(e)}`:""),Mn=(e,n)=>!Object.is(e,n),Fo=(e,...n)=>{for(let t=0;t<e.length;t++)e[t](...n)},Kl=(e,n,t,o=!1)=>{Object.defineProperty(e,n,{configurable:!0,enumerable:!1,writable:o,value:t})},sr=e=>{const n=parseFloat(e);return isNaN(n)?e:n},Uc=e=>{const n=$e(e)?Number(e):NaN;return isNaN(n)?e:n};let oi;const cr=()=>oi||(oi=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Ro(e){if(_e(e)){const n={};for(let t=0;t<e.length;t++){const o=e[t],r=$e(o)?Wc(o):Ro(o);if(r)for(const i in r)n[i]=r[i]}return n}else if($e(e)||je(e))return e}const Hc=/;(?![^(]*\))/g,Kc=/:([^]+)/,Gc=/\/\*[^]*?\*\//g;function Wc(e){const n={};return e.replace(Gc,"").split(Hc).forEach(t=>{if(t){const o=t.split(Kc);o.length>1&&(n[o[0].trim()]=o[1].trim())}}),n}function un(e){let n="";if($e(e))n=e;else if(_e(e))for(let t=0;t<e.length;t++){const o=un(e[t]);o&&(n+=o+" ")}else if(je(e))for(const t in e)e[t]&&(n+=t+" ");return n.trim()}function Sn(e){if(!e)return null;let{class:n,style:t}=e;return n&&!$e(n)&&(e.class=un(n)),t&&(e.style=Ro(t)),e}const Yc="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Jc=Oa(Yc);function Gl(e){return!!e||e===""}function Qc(e,n){if(e.length!==n.length)return!1;let t=!0;for(let o=0;t&&o<e.length;o++)t=Ht(e[o],n[o]);return t}function Ht(e,n){if(e===n)return!0;let t=ti(e),o=ti(n);if(t||o)return t&&o?e.getTime()===n.getTime():!1;if(t=On(e),o=On(n),t||o)return e===n;if(t=_e(e),o=_e(n),t||o)return t&&o?Qc(e,n):!1;if(t=je(e),o=je(n),t||o){if(!t||!o)return!1;const r=Object.keys(e).length,i=Object.keys(n).length;if(r!==i)return!1;for(const l in e){const s=e.hasOwnProperty(l),c=n.hasOwnProperty(l);if(s&&!c||!s&&c||!Ht(e[l],n[l]))return!1}}return String(e)===String(n)}function ka(e,n){return e.findIndex(t=>Ht(t,n))}const Wl=e=>!!(e&&e.__v_isRef===!0),fe=e=>$e(e)?e:e==null?"":_e(e)||je(e)&&(e.toString===Ul||!Ne(e.toString))?Wl(e)?fe(e.value):JSON.stringify(e,Yl,2):String(e),Yl=(e,n)=>Wl(n)?Yl(e,n.value):Pt(n)?{[`Map(${n.size})`]:[...n.entries()].reduce((t,[o,r],i)=>(t[Ar(o,i)+" =>"]=r,t),{})}:Ut(n)?{[`Set(${n.size})`]:[...n.values()].map(t=>Ar(t))}:On(n)?Ar(n):je(n)&&!_e(n)&&!Hl(n)?String(n):n,Ar=(e,n="")=>{var t;return On(e)?`Symbol(${(t=e.description)!=null?t:n})`:e};let Qe;class Xc{constructor(n=!1){this.detached=n,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this._warnOnRun=!0,this.__v_skip=!0,!n&&Qe&&(Qe.active?(this.parent=Qe,this.index=(Qe.scopes||(Qe.scopes=[])).push(this)-1):(this._active=!1,this._warnOnRun=!1))}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let n,t;if(this.scopes){const o=this.scopes.slice();for(n=0,t=o.length;n<t;n++)o[n].pause()}for(n=0,t=this.effects.length;n<t;n++)this.effects[n].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let n,t;if(this.scopes){const r=this.scopes.slice();for(n=0,t=r.length;n<t;n++)r[n].resume()}const o=this.effects.slice();for(n=0,t=o.length;n<t;n++)o[n].resume()}}run(n){if(this._active){const t=Qe;try{return Qe=this,n()}finally{Qe=t}}}on(){++this._on===1&&(this.prevScope=Qe,Qe=this)}off(){if(this._on>0&&--this._on===0){if(Qe===this)Qe=this.prevScope;else{let n=Qe;for(;n;){if(n.prevScope===this){n.prevScope=this.prevScope;break}n=n.prevScope}}this.prevScope=void 0}}stop(n){if(this._active){this._active=!1;let t,o;for(t=0,o=this.effects.length;t<o;t++)this.effects[t].stop();for(this.effects.length=0,t=0,o=this.cleanups.length;t<o;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){const r=this.scopes.slice();for(t=0,o=r.length;t<o;t++)r[t].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!n){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0}}}function Zc(){return Qe}let qe;const Nr=new WeakSet;class Jl{constructor(n){this.fn=n,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Qe&&(Qe.active?Qe.effects.push(this):this.flags&=-2)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Nr.has(this)&&(Nr.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Xl(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,ri(this),Zl(this);const n=qe,t=Cn;qe=this,Cn=!0;try{return this.fn()}finally{es(this),qe=n,Cn=t,this.flags&=-3}}stop(){if(this.flags&1){for(let n=this.deps;n;n=n.nextDep)Da(n);this.deps=this.depsTail=void 0,ri(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Nr.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){da(this)&&this.run()}get dirty(){return da(this)}}let Ql=0,ro,ao;function Xl(e,n=!1){if(e.flags|=8,n){e.next=ao,ao=e;return}e.next=ro,ro=e}function La(){Ql++}function ja(){if(--Ql>0)return;if(ao){let n=ao;for(ao=void 0;n;){const t=n.next;n.next=void 0,n.flags&=-9,n=t}}let e;for(;ro;){let n=ro;for(ro=void 0;n;){const t=n.next;if(n.next=void 0,n.flags&=-9,n.flags&1)try{n.trigger()}catch(o){e||(e=o)}n=t}}if(e)throw e}function Zl(e){for(let n=e.deps;n;n=n.nextDep)n.version=-1,n.prevActiveLink=n.dep.activeLink,n.dep.activeLink=n}function es(e){let n,t=e.depsTail,o=t;for(;o;){const r=o.prevDep;o.version===-1?(o===t&&(t=r),Da(o),eu(o)):n=o,o.dep.activeLink=o.prevActiveLink,o.prevActiveLink=void 0,o=r}e.deps=n,e.depsTail=t}function da(e){for(let n=e.deps;n;n=n.nextDep)if(n.dep.version!==n.version||n.dep.computed&&(ns(n.dep.computed)||n.dep.version!==n.version))return!0;return!!e._dirty}function ns(e){if(e.flags&4&&!(e.flags&16)||(e.flags&=-17,e.globalVersion===fo)||(e.globalVersion=fo,!e.isSSR&&e.flags&128&&(!e.deps&&!e._dirty||!da(e))))return;e.flags|=2;const n=e.dep,t=qe,o=Cn;qe=e,Cn=!0;try{Zl(e);const r=e.fn(e._value);(n.version===0||Mn(r,e._value))&&(e.flags|=128,e._value=r,n.version++)}catch(r){throw n.version++,r}finally{qe=t,Cn=o,es(e),e.flags&=-3}}function Da(e,n=!1){const{dep:t,prevSub:o,nextSub:r}=e;if(o&&(o.nextSub=r,e.prevSub=void 0),r&&(r.prevSub=o,e.nextSub=void 0),t.subs===e&&(t.subs=o,!o&&t.computed)){t.computed.flags&=-5;for(let i=t.computed.deps;i;i=i.nextDep)Da(i,!0)}!n&&!--t.sc&&t.map&&t.map.delete(t.key)}function eu(e){const{prevDep:n,nextDep:t}=e;n&&(n.nextDep=t,e.prevDep=void 0),t&&(t.prevDep=n,e.nextDep=void 0)}let Cn=!0;const ts=[];function Xn(){ts.push(Cn),Cn=!1}function Zn(){const e=ts.pop();Cn=e===void 0?!0:e}function ri(e){const{cleanup:n}=e;if(e.cleanup=void 0,n){const t=qe;qe=void 0;try{n()}finally{qe=t}}}let fo=0;class nu{constructor(n,t){this.sub=n,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Ma{constructor(n){this.computed=n,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(n){if(!qe||!Cn||qe===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==qe)t=this.activeLink=new nu(qe,this),qe.deps?(t.prevDep=qe.depsTail,qe.depsTail.nextDep=t,qe.depsTail=t):qe.deps=qe.depsTail=t,os(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){const o=t.nextDep;o.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=o),t.prevDep=qe.depsTail,t.nextDep=void 0,qe.depsTail.nextDep=t,qe.depsTail=t,qe.deps===t&&(qe.deps=o)}return t}trigger(n){this.version++,fo++,this.notify(n)}notify(n){La();try{for(let t=this.subs;t;t=t.prevSub)t.sub.notify()&&t.sub.dep.notify()}finally{ja()}}}function os(e){if(e.dep.sc++,e.sub.flags&4){const n=e.dep.computed;if(n&&!e.dep.subs){n.flags|=20;for(let o=n.deps;o;o=o.nextDep)os(o)}const t=e.dep.subs;t!==e&&(e.prevSub=t,t&&(t.nextSub=e)),e.dep.subs=e}}const fa=new WeakMap,At=Symbol(""),pa=Symbol(""),po=Symbol("");function nn(e,n,t){if(Cn&&qe){let o=fa.get(e);o||fa.set(e,o=new Map);let r=o.get(t);r||(o.set(t,r=new Ma),r.map=o,r.key=t),r.track()}}function Yn(e,n,t,o,r,i){const l=fa.get(e);if(!l){fo++;return}const s=c=>{c&&c.trigger()};if(La(),n==="clear")l.forEach(s);else{const c=_e(e),u=c&&Pa(t);if(c&&t==="length"){const d=Number(o);l.forEach((p,m)=>{(m==="length"||m===po||!On(m)&&m>=d)&&s(p)})}else switch((t!==void 0||l.has(void 0))&&s(l.get(t)),u&&s(l.get(po)),n){case"add":c?u&&s(l.get("length")):(s(l.get(At)),Pt(e)&&s(l.get(pa)));break;case"delete":c||(s(l.get(At)),Pt(e)&&s(l.get(pa)));break;case"set":Pt(e)&&s(l.get(At));break}}ja()}function wt(e){const n=Ie(e);return n===e?n:(nn(n,"iterate",po),Tn(e)?n:n.map(In))}function ur(e){return nn(e=Ie(e),"iterate",po),e}function jn(e,n){return et(e)?Mt(Nt(e)?In(n):n):In(n)}const tu={__proto__:null,[Symbol.iterator](){return xr(this,Symbol.iterator,e=>jn(this,e))},concat(...e){return wt(this).concat(...e.map(n=>_e(n)?wt(n):n))},entries(){return xr(this,"entries",e=>(e[1]=jn(this,e[1]),e))},every(e,n){return Un(this,"every",e,n,void 0,arguments)},filter(e,n){return Un(this,"filter",e,n,t=>t.map(o=>jn(this,o)),arguments)},find(e,n){return Un(this,"find",e,n,t=>jn(this,t),arguments)},findIndex(e,n){return Un(this,"findIndex",e,n,void 0,arguments)},findLast(e,n){return Un(this,"findLast",e,n,t=>jn(this,t),arguments)},findLastIndex(e,n){return Un(this,"findLastIndex",e,n,void 0,arguments)},forEach(e,n){return Un(this,"forEach",e,n,void 0,arguments)},includes(...e){return Tr(this,"includes",e)},indexOf(...e){return Tr(this,"indexOf",e)},join(e){return wt(this).join(e)},lastIndexOf(...e){return Tr(this,"lastIndexOf",e)},map(e,n){return Un(this,"map",e,n,void 0,arguments)},pop(){return Wt(this,"pop")},push(...e){return Wt(this,"push",e)},reduce(e,...n){return ai(this,"reduce",e,n)},reduceRight(e,...n){return ai(this,"reduceRight",e,n)},shift(){return Wt(this,"shift")},some(e,n){return Un(this,"some",e,n,void 0,arguments)},splice(...e){return Wt(this,"splice",e)},toReversed(){return wt(this).toReversed()},toSorted(e){return wt(this).toSorted(e)},toSpliced(...e){return wt(this).toSpliced(...e)},unshift(...e){return Wt(this,"unshift",e)},values(){return xr(this,"values",e=>jn(this,e))}};function xr(e,n,t){const o=ur(e),r=o[n]();return o!==e&&!Tn(e)&&(r._next=r.next,r.next=()=>{const i=r._next();return i.done||(i.value=t(i.value)),i}),r}const ou=Array.prototype;function Un(e,n,t,o,r,i){const l=ur(e),s=l!==e&&!Tn(e),c=l[n];if(c!==ou[n]){const p=c.apply(e,i);return s?In(p):p}let u=t;l!==e&&(s?u=function(p,m){return t.call(this,jn(e,p),m,e)}:t.length>2&&(u=function(p,m){return t.call(this,p,m,e)}));const d=c.call(l,u,o);return s&&r?r(d):d}function ai(e,n,t,o){const r=ur(e),i=r!==e&&!Tn(e);let l=t,s=!1;r!==e&&(i?(s=o.length===0,l=function(u,d,p){return s&&(s=!1,u=jn(e,u)),t.call(this,u,jn(e,d),p,e)}):t.length>3&&(l=function(u,d,p){return t.call(this,u,d,p,e)}));const c=r[n](l,...o);return s?jn(e,c):c}function Tr(e,n,t){const o=Ie(e);nn(o,"iterate",po);const r=o[n](...t);return(r===-1||r===!1)&&Fa(t[0])?(t[0]=Ie(t[0]),o[n](...t)):r}function Wt(e,n,t=[]){Xn(),La();const o=Ie(e)[n].apply(e,t);return ja(),Zn(),o}const ru=Oa("__proto__,__v_isRef,__isVue"),rs=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(On));function au(e){On(e)||(e=String(e));const n=Ie(this);return nn(n,"has",e),n.hasOwnProperty(e)}class as{constructor(n=!1,t=!1){this._isReadonly=n,this._isShallow=t}get(n,t,o){if(t==="__v_skip")return n.__v_skip;const r=this._isReadonly,i=this._isShallow;if(t==="__v_isReactive")return!r;if(t==="__v_isReadonly")return r;if(t==="__v_isShallow")return i;if(t==="__v_raw")return o===(r?i?hu:cs:i?ss:ls).get(n)||Object.getPrototypeOf(n)===Object.getPrototypeOf(o)?n:void 0;const l=_e(n);if(!r){let c;if(l&&(c=tu[t]))return c;if(t==="hasOwnProperty")return au}const s=Reflect.get(n,t,rn(n)?n:o);if((On(t)?rs.has(t):ru(t))||(r||nn(n,"get",t),i))return s;if(rn(s)){const c=l&&Pa(t)?s:s.value;return r&&je(c)?ha(c):c}return je(s)?r?ha(s):Bo(s):s}}class is extends as{constructor(n=!1){super(!1,n)}set(n,t,o,r){let i=n[t];const l=_e(n)&&Pa(t);if(!this._isShallow){const u=et(i);if(!Tn(o)&&!et(o)&&(i=Ie(i),o=Ie(o)),!l&&rn(i)&&!rn(o))return u||(i.value=o),!0}const s=l?Number(t)<n.length:Le(n,t),c=Reflect.set(n,t,o,rn(n)?n:r);return n===Ie(r)&&c&&(s?Mn(o,i)&&Yn(n,"set",t,o):Yn(n,"add",t,o)),c}deleteProperty(n,t){const o=Le(n,t);n[t];const r=Reflect.deleteProperty(n,t);return r&&o&&Yn(n,"delete",t,void 0),r}has(n,t){const o=Reflect.has(n,t);return(!On(t)||!rs.has(t))&&nn(n,"has",t),o}ownKeys(n){return nn(n,"iterate",_e(n)?"length":At),Reflect.ownKeys(n)}}class iu extends as{constructor(n=!1){super(!0,n)}set(n,t){return!0}deleteProperty(n,t){return!0}}const lu=new is,su=new iu,cu=new is(!0);const ma=e=>e,Po=e=>Reflect.getPrototypeOf(e);function uu(e,n,t){return function(...o){const r=this.__v_raw,i=Ie(r),l=Pt(i),s=e==="entries"||e===Symbol.iterator&&l,c=e==="keys"&&l,u=r[e](...o),d=t?ma:n?Mt:In;return!n&&nn(i,"iterate",c?pa:At),Je(Object.create(u),{next(){const{value:p,done:m}=u.next();return m?{value:p,done:m}:{value:s?[d(p[0]),d(p[1])]:d(p),done:m}}})}}function ko(e){return function(...n){return e==="delete"?!1:e==="clear"?void 0:this}}function du(e,n){const t={get(r){const i=this.__v_raw,l=Ie(i),s=Ie(r);e||(Mn(r,s)&&nn(l,"get",r),nn(l,"get",s));const{has:c}=Po(l),u=n?ma:e?Mt:In;if(c.call(l,r))return u(i.get(r));if(c.call(l,s))return u(i.get(s));i!==l&&i.get(r)},get size(){const r=this.__v_raw;return!e&&nn(Ie(r),"iterate",At),r.size},has(r){const i=this.__v_raw,l=Ie(i),s=Ie(r);return e||(Mn(r,s)&&nn(l,"has",r),nn(l,"has",s)),r===s?i.has(r):i.has(r)||i.has(s)},forEach(r,i){const l=this,s=l.__v_raw,c=Ie(s),u=n?ma:e?Mt:In;return!e&&nn(c,"iterate",At),s.forEach((d,p)=>r.call(i,u(d),u(p),l))}};return Je(t,e?{add:ko("add"),set:ko("set"),delete:ko("delete"),clear:ko("clear")}:{add(r){const i=Ie(this),l=Po(i),s=Ie(r),c=!n&&!Tn(r)&&!et(r)?s:r;return l.has.call(i,c)||Mn(r,c)&&l.has.call(i,r)||Mn(s,c)&&l.has.call(i,s)||(i.add(c),Yn(i,"add",c,c)),this},set(r,i){!n&&!Tn(i)&&!et(i)&&(i=Ie(i));const l=Ie(this),{has:s,get:c}=Po(l);let u=s.call(l,r);u||(r=Ie(r),u=s.call(l,r));const d=c.call(l,r);return l.set(r,i),u?Mn(i,d)&&Yn(l,"set",r,i):Yn(l,"add",r,i),this},delete(r){const i=Ie(this),{has:l,get:s}=Po(i);let c=l.call(i,r);c||(r=Ie(r),c=l.call(i,r)),s&&s.call(i,r);const u=i.delete(r);return c&&Yn(i,"delete",r,void 0),u},clear(){const r=Ie(this),i=r.size!==0,l=r.clear();return i&&Yn(r,"clear",void 0,void 0),l}}),["keys","values","entries",Symbol.iterator].forEach(r=>{t[r]=uu(r,e,n)}),t}function qa(e,n){const t=du(e,n);return(o,r,i)=>r==="__v_isReactive"?!e:r==="__v_isReadonly"?e:r==="__v_raw"?o:Reflect.get(Le(t,r)&&r in o?t:o,r,i)}const fu={get:qa(!1,!1)},pu={get:qa(!1,!0)},mu={get:qa(!0,!1)};const ls=new WeakMap,ss=new WeakMap,cs=new WeakMap,hu=new WeakMap;function vu(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Bo(e){return et(e)?e:$a(e,!1,lu,fu,ls)}function us(e){return $a(e,!1,cu,pu,ss)}function ha(e){return $a(e,!0,su,mu,cs)}function $a(e,n,t,o,r){if(!je(e)||e.__v_raw&&!(n&&e.__v_isReactive)||e.__v_skip||!Object.isExtensible(e))return e;const i=r.get(e);if(i)return i;const l=vu(Fc(e));if(l===0)return e;const s=new Proxy(e,l===2?o:t);return r.set(e,s),s}function Nt(e){return et(e)?Nt(e.__v_raw):!!(e&&e.__v_isReactive)}function et(e){return!!(e&&e.__v_isReadonly)}function Tn(e){return!!(e&&e.__v_isShallow)}function Fa(e){return e?!!e.__v_raw:!1}function Ie(e){const n=e&&e.__v_raw;return n?Ie(n):e}function gu(e){return!Le(e,"__v_skip")&&Object.isExtensible(e)&&Kl(e,"__v_skip",!0),e}const In=e=>je(e)?Bo(e):e,Mt=e=>je(e)?ha(e):e;function rn(e){return e?e.__v_isRef===!0:!1}function Se(e){return ds(e,!1)}function _u(e){return ds(e,!0)}function ds(e,n){return rn(e)?e:new bu(e,n)}class bu{constructor(n,t){this.dep=new Ma,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?n:Ie(n),this._value=t?n:In(n),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(n){const t=this._rawValue,o=this.__v_isShallow||Tn(n)||et(n);n=o?n:Ie(n),Mn(n,t)&&(this._rawValue=n,this._value=o?n:In(n),this.dep.trigger())}}function le(e){return rn(e)?e.value:e}const yu={get:(e,n,t)=>n==="__v_raw"?e:le(Reflect.get(e,n,t)),set:(e,n,t,o)=>{const r=e[n];return rn(r)&&!rn(t)?(r.value=t,!0):Reflect.set(e,n,t,o)}};function fs(e){return Nt(e)?e:new Proxy(e,yu)}class Au{constructor(n,t,o){this.fn=n,this.setter=t,this._value=void 0,this.dep=new Ma(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=fo-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=o}notify(){if(this.flags|=16,!(this.flags&8)&&qe!==this)return Xl(this,!0),!0}get value(){const n=this.dep.track();return ns(this),n&&(n.version=this.dep.version),this._value}set value(n){this.setter&&this.setter(n)}}function Nu(e,n,t=!1){let o,r;return Ne(e)?o=e:(o=e.get,r=e.set),new Au(o,r,t)}const Lo={},Uo=new WeakMap;let vt;function xu(e,n=!1,t=vt){if(t){let o=Uo.get(t);o||Uo.set(t,o=[]),o.push(e)}}function Tu(e,n,t=Me){const{immediate:o,deep:r,once:i,scheduler:l,augmentJob:s,call:c}=t,u=z=>r?z:Tn(z)||r===!1||r===0?Jn(z,1):Jn(z);let d,p,m,v,S=!1,N=!1;if(rn(e)?(p=()=>e.value,S=Tn(e)):Nt(e)?(p=()=>u(e),S=!0):_e(e)?(N=!0,S=e.some(z=>Nt(z)||Tn(z)),p=()=>e.map(z=>{if(rn(z))return z.value;if(Nt(z))return u(z);if(Ne(z))return c?c(z,2):z()})):Ne(e)?n?p=c?()=>c(e,2):e:p=()=>{if(m){Xn();try{m()}finally{Zn()}}const z=vt;vt=d;try{return c?c(e,3,[v]):e(v)}finally{vt=z}}:p=$n,n&&r){const z=p,de=r===!0?1/0:r;p=()=>Jn(z(),de)}const T=Zc(),k=()=>{d.stop(),T&&T.active&&Ia(T.effects,d)};if(i&&n){const z=n;n=(...de)=>{const ae=z(...de);return k(),ae}}let x=N?new Array(e.length).fill(Lo):Lo;const M=z=>{if(!(!(d.flags&1)||!d.dirty&&!z))if(n){const de=d.run();if(z||r||S||(N?de.some((ae,$)=>Mn(ae,x[$])):Mn(de,x))){m&&m();const ae=vt;vt=d;try{const $=[de,x===Lo?void 0:N&&x[0]===Lo?[]:x,v];x=de,c?c(n,3,$):n(...$)}finally{vt=ae}}}else d.run()};return s&&s(M),d=new Jl(p),d.scheduler=l?()=>l(M,!1):M,v=z=>xu(z,!1,d),m=d.onStop=()=>{const z=Uo.get(d);if(z){if(c)c(z,4);else for(const de of z)de();Uo.delete(d)}},n?o?M(!0):x=d.run():l?l(M.bind(null,!0),!0):d.run(),k.pause=d.pause.bind(d),k.resume=d.resume.bind(d),k.stop=k,k}function Jn(e,n=1/0,t){if(n<=0||!je(e)||e.__v_skip||(t=t||new Map,(t.get(e)||0)>=n))return e;if(t.set(e,n),n--,rn(e))Jn(e.value,n,t);else if(_e(e))for(let o=0;o<e.length;o++)Jn(e[o],n,t);else if(Ut(e)||Pt(e))e.forEach(o=>{Jn(o,n,t)});else if(Hl(e)){for(const o in e)Jn(e[o],n,t);for(const o of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,o)&&Jn(e[o],n,t)}return e}function wo(e,n,t,o){try{return o?e(...o):e()}catch(r){dr(r,n,t)}}function Bn(e,n,t,o){if(Ne(e)){const r=wo(e,n,t,o);return r&&zl(r)&&r.catch(i=>{dr(i,n,t)}),r}if(_e(e)){const r=[];for(let i=0;i<e.length;i++)r.push(Bn(e[i],n,t,o));return r}}function dr(e,n,t,o=!0){const r=n?n.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:l}=n&&n.appContext.config||Me;if(n){let s=n.parent;const c=n.proxy,u=`https://vuejs.org/error-reference/#runtime-${t}`;for(;s;){const d=s.ec;if(d){for(let p=0;p<d.length;p++)if(d[p](e,c,u)===!1)return}s=s.parent}if(i){Xn(),wo(i,null,10,[e,c,u]),Zn();return}}Ru(e,t,r,o,l)}function Ru(e,n,t,o=!0,r=!1){if(r)throw e;console.error(e)}const dn=[];let Ln=-1;const kt=[];let it=null,Et=0;const ps=Promise.resolve();let Ho=null;function qt(e){const n=Ho||ps;return e?n.then(this?e.bind(this):e):n}function Bu(e){let n=Ln+1,t=dn.length;for(;n<t;){const o=n+t>>>1,r=dn[o],i=mo(r);i<e||i===e&&r.flags&2?n=o+1:t=o}return n}function Va(e){if(!(e.flags&1)){const n=mo(e),t=dn[dn.length-1];!t||!(e.flags&2)&&n>=mo(t)?dn.push(e):dn.splice(Bu(n),0,e),e.flags|=1,ms()}}function ms(){Ho||(Ho=ps.then(vs))}function wu(e){if(!_e(e))it&&e.id===-1?it.splice(Et+1,0,e):e.flags&1||(kt.push(e),e.flags|=1);else for(let n=0;n<e.length;n++)kt.push(e[n]);ms()}function ii(e,n,t=Ln+1){for(;t<dn.length;t++){const o=dn[t];if(o&&o.flags&2){if(e&&o.id!==e.uid)continue;dn.splice(t,1),t--,o.flags&4&&(o.flags&=-2),o(),o.flags&4||(o.flags&=-2)}}}function hs(e){if(kt.length){const n=[...new Set(kt)].sort((t,o)=>mo(t)-mo(o));if(kt.length=0,it){for(let t=0;t<n.length;t++)it.push(n[t]);return}for(it=n,Et=0;Et<it.length;Et++){const t=it[Et];t.flags&4&&(t.flags&=-2),t.flags&8||t(),t.flags&=-2}it=null,Et=0}}const mo=e=>e.id==null?e.flags&2?-1:1/0:e.id;function vs(e){try{for(Ln=0;Ln<dn.length;Ln++){const n=dn[Ln];n&&!(n.flags&8)&&(n.flags&4&&(n.flags&=-2),wo(n,n.i,n.i?15:14),n.flags&4||(n.flags&=-2))}}finally{for(;Ln<dn.length;Ln++){const n=dn[Ln];n&&(n.flags&=-2)}Ln=-1,dn.length=0,hs(),Ho=null,(dn.length||kt.length)&&vs()}}let Xe=null,gs=null;function Ko(e){const n=Xe;return Xe=e,gs=e&&e.type.__scopeId||null,n}function ye(e,n=Xe,t){if(!n||e._n)return e;const o=(...r)=>{o._d&&Jo(-1);const i=Ko(n),l=Qn.length;let s;try{s=e(...r)}finally{for(let c=Qn.length;c>l;c--)Wa();Ko(i),o._d&&Jo(1)}return s};return o._n=!0,o._c=!0,o._d=!0,o}function Nn(e,n){if(Xe===null)return e;const t=gr(Xe),o=e.dirs||(e.dirs=[]);for(let r=0;r<n.length;r++){let[i,l,s,c=Me]=n[r];i&&(Ne(i)&&(i={mounted:i,updated:i}),i.deep&&Jn(l),o.push({dir:i,instance:t,value:l,oldValue:void 0,arg:s,modifiers:c}))}return e}function dt(e,n,t,o){const r=e.dirs,i=n&&n.dirs;for(let l=0;l<r.length;l++){const s=r[l];i&&(s.oldValue=i[l].value);let c=s.dir[o];c&&(Xn(),Bn(c,t,8,[e.el,s,e,n]),Zn())}}function io(e,n){if(on){let t=on.provides;const o=on.parent&&on.parent.provides;o===t&&(t=on.provides=Object.create(o)),t[e]=n}}function Ue(e,n,t=!1){const o=Xs();if(o||jt){let r=jt?jt._context.provides:o?o.parent==null||o.ce?o.vnode.appContext&&o.vnode.appContext.provides:o.parent.provides:void 0;if(r&&e in r)return r[e];if(arguments.length>1)return t&&Ne(n)?n.call(o&&o.proxy):n}}const Su=Symbol.for("v-scx"),Eu=()=>Ue(Su);function xt(e,n,t){return _s(e,n,t)}function _s(e,n,t=Me){const{immediate:o,deep:r,flush:i,once:l}=t,s=Je({},t),c=n&&o||!n&&i!=="post";let u;if(bo){if(i==="sync"){const v=Eu();u=v.__watcherHandles||(v.__watcherHandles=[])}else if(!c){const v=()=>{};return v.stop=$n,v.resume=$n,v.pause=$n,v}}const d=on;s.call=(v,S,N)=>Bn(v,d,S,N);let p=!1;i==="post"?s.scheduler=v=>{ln(v,d&&d.suspense)}:i!=="sync"&&(p=!0,s.scheduler=(v,S)=>{S?v():Va(v)}),s.augmentJob=v=>{n&&(v.flags|=4),p&&(v.flags|=2,d&&(v.id=d.uid,v.i=d))};const m=Tu(e,n,s);return bo&&(u?u.push(m):c&&m()),m}function Cu(e,n,t){const o=this.proxy,r=$e(e)?e.includes(".")?bs(o,e):()=>o[e]:e.bind(o,o);let i;Ne(n)?i=n:(i=n.handler,t=n);const l=So(this),s=_s(r,i.bind(o),t);return l(),s}function bs(e,n){const t=n.split(".");return()=>{let o=e;for(let r=0;r<t.length&&o;r++)o=o[t[r]];return o}}const at=new WeakMap,ys=Symbol("_vte"),fr=e=>e.__isTeleport,gt=e=>e&&(e.disabled||e.disabled===""),Ou=e=>e&&(e.defer||e.defer===""),li=e=>typeof SVGElement<"u"&&e instanceof SVGElement,si=e=>typeof MathMLElement=="function"&&e instanceof MathMLElement,va=(e,n)=>{const t=e&&e.to;return $e(t)?n?n(t):null:t},Iu={name:"Teleport",__isTeleport:!0,process(e,n,t,o,r,i,l,s,c,u){const{mc:d,pc:p,pbc:m,o:{insert:v,querySelector:S,createText:N,createComment:T,parentNode:k}}=u,x=gt(n.props);let{dynamicChildren:M}=n;const z=($,ie,oe)=>{$.shapeFlag&16&&d($.children,ie,oe,r,i,l,s,c)},de=($=n)=>{const ie=gt($.props),oe=$.target=va($.props,S),Y=ga(oe,$,N,v);oe&&(l!=="svg"&&li(oe)?l="svg":l!=="mathml"&&si(oe)&&(l="mathml"),r&&r.isCE&&(r.ce._teleportTargets||(r.ce._teleportTargets=new Set)).add(oe),ie||(z($,oe,Y),eo($,!1)))},ae=$=>{const ie=()=>{if(at.get($)===ie){if(at.delete($),gt($.props)){const oe=k($.el)||t;z($,oe,$.anchor),eo($,!0)}de($)}};at.set($,ie),ln(ie,i)};if(e==null){const $=n.el=N(""),ie=n.anchor=N("");if(v($,t,o),v(ie,t,o),Ou(n.props)||i&&i.pendingBranch){ae(n);return}x&&(z(n,t,ie),eo(n,!0)),de()}else{n.el=e.el;const $=n.anchor=e.anchor,ie=at.get(e);if(ie){ie.flags|=8,at.delete(e),ae(n);return}n.targetStart=e.targetStart;const oe=n.target=e.target,Y=n.targetAnchor=e.targetAnchor,q=gt(e.props),B=q?t:oe,X=q?$:Y;if(l==="svg"||li(oe)?l="svg":(l==="mathml"||si(oe))&&(l="mathml"),M?(m(e.dynamicChildren,M,B,r,i,l,s),Ga(e,n,!0)):c||p(e,n,B,X,r,i,l,s,!1),x)q?n.props&&e.props&&n.props.to!==e.props.to&&(n.props.to=e.props.to):jo(n,t,$,u,1);else if((n.props&&n.props.to)!==(e.props&&e.props.to)){const Z=va(n.props,S);Z&&(n.target=Z,jo(n,Z,null,u,0))}else q&&jo(n,oe,Y,u,1);eo(n,x)}},remove(e,n,t,{um:o,o:{remove:r}},i){const{shapeFlag:l,children:s,anchor:c,targetStart:u,targetAnchor:d,target:p,props:m}=e,v=gt(m),S=i||!v,N=at.get(e);if(N&&(N.flags|=8,at.delete(e)),p&&(r(u),r(d)),i&&r(c),!N&&(v||p)&&l&16)for(let T=0;T<s.length;T++){const k=s[T];o(k,n,t,S,!!k.dynamicChildren)}},move:jo,hydrate:Pu};function jo(e,n,t,{o:{insert:o},m:r},i=2){i===0&&o(e.targetAnchor,n,t);const{el:l,anchor:s,shapeFlag:c,children:u,props:d}=e,p=i===2;if(p&&o(l,n,t),!at.has(e)&&(!p||gt(d))&&c&16)for(let m=0;m<u.length;m++)r(u[m],n,t,2);p&&o(s,n,t)}function Pu(e,n,t,o,r,i,{o:{nextSibling:l,parentNode:s,querySelector:c,insert:u,createText:d}},p){function m(T,k){let x=k;for(;x;){if(x&&x.nodeType===8){if(x.data==="teleport start anchor")n.targetStart=x;else if(x.data==="teleport anchor"){n.targetAnchor=x,T._lpa=n.targetAnchor&&l(n.targetAnchor);break}}x=l(x)}}function v(T,k){k.anchor=p(l(T),k,s(T),t,o,r,i)}const S=n.target=va(n.props,c),N=gt(n.props);if(S){const T=S._lpa||S.firstChild;n.shapeFlag&16&&(N?(v(e,n),m(S,T),n.targetAnchor||ga(S,n,d,u,s(e)===S?e:null)):(n.anchor=l(e),m(S,T),n.targetAnchor||ga(S,n,d,u),p(T&&l(T),n,S,t,o,r,i))),eo(n,N)}else N&&n.shapeFlag&16&&(v(e,n),n.targetStart=e,n.targetAnchor=l(e));return n.anchor&&l(n.anchor)}const As=Iu;function eo(e,n){const t=e.ctx;if(t&&t.ut){let o,r;for(n?(o=e.el,r=e.anchor):(o=e.targetStart,r=e.targetAnchor);o&&o!==r;)o.nodeType===1&&o.setAttribute("data-v-owner",t.uid),o=o.nextSibling;t.ut()}}function ga(e,n,t,o,r=null){const i=n.targetStart=t(""),l=n.targetAnchor=t("");return i[ys]=l,e&&(o(i,e,r),o(l,e,r)),l}const An=Symbol("_leaveCb"),Yt=Symbol("_enterCb");function ku(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return zn(()=>{e.isMounted=!0}),za(()=>{e.isUnmounting=!0}),e}const yn=[Function,Array],Ns={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:yn,onEnter:yn,onAfterEnter:yn,onEnterCancelled:yn,onBeforeLeave:yn,onLeave:yn,onAfterLeave:yn,onLeaveCancelled:yn,onBeforeAppear:yn,onAppear:yn,onAfterAppear:yn,onAppearCancelled:yn},xs=e=>{const n=e.subTree;return n.component?xs(n.component):n},Lu={name:"BaseTransition",props:Ns,setup(e,{slots:n}){const t=Xs(),o=ku();return()=>{const r=n.default&&Bs(n.default(),!0),i=r&&r.length?Ts(r):t.subTree?Ee():void 0;if(!i)return;const l=Ie(e),{mode:s}=l;if(o.isLeaving)return Rr(i);const c=Go(i);if(!c)return Rr(i);let u=_a(c,l,o,t,p=>u=p);c.type!==tn&&ho(c,u);let d=t.subTree&&Go(t.subTree);if(d&&d.type!==tn&&!_t(d,c)&&xs(t).type!==tn){let p=_a(d,l,o,t);if(ho(d,p),s==="out-in"&&c.type!==tn)return o.isLeaving=!0,p.afterLeave=()=>{o.isLeaving=!1,t.job.flags&8||t.update(),delete p.afterLeave,d=void 0},Rr(i);s==="in-out"&&c.type!==tn?p.delayLeave=(m,v,S)=>{const N=Rs(o,d);N[String(d.key)]=d,m[An]=()=>{v(),m[An]=void 0,delete u.delayedLeave,d=void 0},u.delayedLeave=()=>{S(),delete u.delayedLeave,d=void 0}}:d=void 0}else d&&(d=void 0);return i}}};function Ts(e){let n=e[0];if(e.length>1){for(const t of e)if(t.type!==tn){n=t;break}}return n}const ju=Lu;function Rs(e,n){const{leavingVNodes:t}=e;let o=t.get(n.type);return o||(o=Object.create(null),t.set(n.type,o)),o}function _a(e,n,t,o,r){const{appear:i,mode:l,persisted:s=!1,onBeforeEnter:c,onEnter:u,onAfterEnter:d,onEnterCancelled:p,onBeforeLeave:m,onLeave:v,onAfterLeave:S,onLeaveCancelled:N,onBeforeAppear:T,onAppear:k,onAfterAppear:x,onAppearCancelled:M}=n,z=String(e.key),de=Rs(t,e),ae=(oe,Y)=>{oe&&Bn(oe,o,9,Y)},$=(oe,Y)=>{const q=Y[1];ae(oe,Y),_e(oe)?oe.every(B=>B.length<=1)&&q():oe.length<=1&&q()},ie={mode:l,persisted:s,beforeEnter(oe){let Y=c;if(!t.isMounted)if(i)Y=T||c;else return;oe[An]&&oe[An](!0);const q=de[z];q&&_t(e,q)&&q.el[An]&&q.el[An](),ae(Y,[oe])},enter(oe){if(de[z]===e)return;let Y=u,q=d,B=p;if(!t.isMounted)if(i)Y=k||u,q=x||d,B=M||p;else return;let X=!1;oe[Yt]=Fe=>{X||(X=!0,Fe?ae(B,[oe]):ae(q,[oe]),ie.delayedLeave&&ie.delayedLeave(),oe[Yt]=void 0)};const Z=oe[Yt].bind(null,!1);Y?$(Y,[oe,Z]):Z()},leave(oe,Y){const q=String(e.key);if(oe[Yt]&&oe[Yt](!0),t.isUnmounting)return Y();ae(m,[oe]);let B=!1;oe[An]=Z=>{B||(B=!0,Y(),Z?ae(N,[oe]):ae(S,[oe]),oe[An]=void 0,de[q]===e&&delete de[q])};const X=oe[An].bind(null,!1);de[q]=e,v?$(v,[oe,X]):X()},clone(oe){const Y=_a(oe,n,t,o,r);return r&&r(Y),Y}};return ie}function Rr(e){if(pr(e))return e=ut(e),e.children=null,e}function Go(e){if(!pr(e))return fr(e.type)&&e.children?Ts(e.children):e;if(e.component)return e.component.subTree;const{shapeFlag:n,children:t}=e;if(t){if(n&16)return t[0];if(n&32&&Ne(t.default))return t.default()}}function ho(e,n){if(e.shapeFlag&6&&e.component){e.transition=n;const t=e.component.subTree;ho(fr(t.type)&&Go(t)||t,n)}else e.shapeFlag&128?(e.ssContent.transition=n.clone(e.ssContent),e.ssFallback.transition=n.clone(e.ssFallback)):e.transition=n}function Bs(e,n=!1,t){let o=[],r=0;for(let i=0;i<e.length;i++){let l=e[i];const s=t==null?l.key:String(t)+String(l.key!=null?l.key:i);l.type===Re?(l.patchFlag&128&&r++,o=o.concat(Bs(l.children,n,s))):(n||l.type!==tn)&&o.push(s!=null?ut(l,{key:s}):l)}if(r>1)for(let i=0;i<o.length;i++)o[i].patchFlag=-2;return o}function ws(e,n){return Ne(e)?Je({name:e.name},n,{setup:e}):e}function Ss(e){e.ids=[e.ids[0]+e.ids[2]+++"-",0,0]}function ci(e,n){let t;return!!((t=Object.getOwnPropertyDescriptor(e,n))&&!t.configurable)}const Wo=new WeakMap;function lo(e,n,t,o,r=!1){if(_e(e)){e.forEach((N,T)=>lo(N,n&&(_e(n)?n[T]:n),t,o,r));return}if(Lt(o)&&!r){o.shapeFlag&512&&o.type.__asyncResolved&&o.component.subTree.component&&lo(e,n,t,o.component.subTree);return}const i=o.shapeFlag&4?gr(o.component):o.el,l=r?null:i,{i:s,r:c}=e,u=n&&n.r,d=s.refs===Me?s.refs={}:s.refs,p=s.setupState,m=Ie(p),v=p===Me?Vl:N=>ci(d,N)?!1:Le(m,N),S=(N,T)=>!(T&&ci(d,T));if(u!=null&&u!==c){if(ui(n),$e(u))d[u]=null,v(u)&&(p[u]=null);else if(rn(u)){const N=n;S(u,N.k)&&(u.value=null),N.k&&(d[N.k]=null)}}if(Ne(c))wo(c,s,12,[l,d]);else{const N=$e(c),T=rn(c);if(N||T){const k=()=>{if(e.f){const x=N?v(c)?p[c]:d[c]:S()||!e.k?c.value:d[e.k];if(r)_e(x)&&Ia(x,i);else if(_e(x))x.includes(i)||x.push(i);else if(N)d[c]=[i],v(c)&&(p[c]=d[c]);else{const M=[i];S(c,e.k)&&(c.value=M),e.k&&(d[e.k]=M)}}else N?(d[c]=l,v(c)&&(p[c]=l)):T&&(S(c,e.k)&&(c.value=l),e.k&&(d[e.k]=l))};if(l){const x=()=>{k(),Wo.delete(e)};x.id=-1,Wo.set(e,x),ln(x,t)}else ui(e),k()}}}function ui(e){const n=Wo.get(e);n&&(n.flags|=8,Wo.delete(e))}cr().requestIdleCallback;cr().cancelIdleCallback;const Lt=e=>!!e.type.__asyncLoader,pr=e=>e.type.__isKeepAlive;function Du(e,n){Es(e,"a",n)}function Mu(e,n){Es(e,"da",n)}function Es(e,n,t=on){const o=e.__wdc||(e.__wdc=()=>{let r=t;for(;r;){if(r.isDeactivated)return;r=r.parent}return e()});if(mr(n,o,t),t){let r=t.parent;for(;r&&r.parent;)pr(r.parent.vnode)&&qu(o,n,t,r),r=r.parent}}function qu(e,n,t,o){const r=mr(n,e,o,!0);Ua(()=>{Ia(o[n],r)},t)}function mr(e,n,t=on,o=!1){if(t){const r=t[e]||(t[e]=[]),i=n.__weh||(n.__weh=(...l)=>{Xn();const s=So(t),c=Bn(n,t,e,l);return s(),Zn(),c});return o?r.unshift(i):r.push(i),i}}const nt=e=>(n,t=on)=>{(!bo||e==="sp")&&mr(e,(...o)=>n(...o),t)},$u=nt("bm"),zn=nt("m"),Fu=nt("bu"),Vu=nt("u"),za=nt("bum"),Ua=nt("um"),zu=nt("sp"),Uu=nt("rtg"),Hu=nt("rtc");function Ku(e,n=on){mr("ec",e,n)}const Cs="components",Gu="directives",Os=Symbol.for("v-ndc");function Br(e){return $e(e)?Is(Cs,e,!1)||e:e||Os}function Wu(e){return Is(Gu,e)}function Is(e,n,t=!0,o=!1){const r=Xe||on;if(r){const i=r.type;if(e===Cs){const s=Od(i,!1);if(s&&(s===n||s===fn(n)||s===lr(fn(n))))return i}const l=di(r[e]||i[e],n)||di(r.appContext[e],n);return!l&&o?i:l}}function di(e,n){return e&&(e[n]||e[fn(n)]||e[lr(fn(n))])}function Rn(e,n,t,o){let r;const i=t,l=_e(e);if(l||$e(e)){const s=l&&Nt(e);let c=!1,u=!1;s&&(c=!Tn(e),u=et(e),e=ur(e)),r=new Array(e.length);for(let d=0,p=e.length;d<p;d++)r[d]=n(c?u?Mt(In(e[d])):In(e[d]):e[d],d,void 0,i)}else if(typeof e=="number"){r=new Array(e);for(let s=0;s<e;s++)r[s]=n(s+1,s,void 0,i)}else if(je(e))if(e[Symbol.iterator])r=Array.from(e,(s,c)=>n(s,c,void 0,i));else{const s=Object.keys(e);r=new Array(s.length);for(let c=0,u=s.length;c<u;c++){const d=s[c];r[c]=n(e[d],d,c,i)}}else r=[];return r}function hn(e,n,t,o,r,i){if(t==null&&(t={}),Xe.ce||Xe.parent&&Lt(Xe.parent)&&Xe.parent.ce){const u=t,d=Object.keys(u).length>0;return n!=="default"&&(u.name=n),V(),ze(Re,null,[G("slot",u,o&&o())],d?-2:64)}let l=e[n];l&&l._c&&(l._d=!1);const s=Qn.length;V();let c;try{const u=l&&Ps(l(t)),d=t.key||i||u&&u.key;c=ze(Re,{key:(d&&!On(d)?d:`_${n}`)+(!u&&o?"_fb":"")},u||(o?o():[]),u&&e._===1?64:-2)}catch(u){for(let d=Qn.length;d>s;d--)Wa();throw u}finally{l&&l._c&&(l._d=!0)}return c.scopeId&&(c.slotScopeIds=[c.scopeId+"-s"]),c}function Ps(e){return e.some(n=>go(n)?!(n.type===tn||n.type===Re&&!Ps(n.children)):!0)?e:null}function Yu(e,n){const t={};for(const o in e)t[$o(o)]=e[o];return t}const ba=e=>e?Zs(e)?gr(e):ba(e.parent):null,so=Je(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>ba(e.parent),$root:e=>ba(e.root),$host:e=>e.ce,$emit:e=>e.emit,$options:e=>Ls(e),$forceUpdate:e=>e.f||(e.f=()=>{Va(e.update)}),$nextTick:e=>e.n||(e.n=qt.bind(e.proxy)),$watch:e=>Cu.bind(e)}),wr=(e,n)=>e!==Me&&!e.__isScriptSetup&&Le(e,n),Ju={get({_:e},n){if(n==="__v_skip")return!0;const{ctx:t,setupState:o,data:r,props:i,accessCache:l,type:s,appContext:c}=e;if(n[0]!=="$"){const m=l[n];if(m!==void 0)switch(m){case 1:return o[n];case 2:return r[n];case 4:return t[n];case 3:return i[n]}else{if(wr(o,n))return l[n]=1,o[n];if(r!==Me&&Le(r,n))return l[n]=2,r[n];if(Le(i,n))return l[n]=3,i[n];if(t!==Me&&Le(t,n))return l[n]=4,t[n];ya&&(l[n]=0)}}const u=so[n];let d,p;if(u)return n==="$attrs"&&nn(e.attrs,"get",""),u(e);if((d=s.__cssModules)&&(d=d[n]))return d;if(t!==Me&&Le(t,n))return l[n]=4,t[n];if(p=c.config.globalProperties,Le(p,n))return p[n]},set({_:e},n,t){const{data:o,setupState:r,ctx:i}=e;return wr(r,n)?(r[n]=t,!0):o!==Me&&Le(o,n)?(o[n]=t,!0):Le(e.props,n)||n[0]==="$"&&n.slice(1)in e?!1:(i[n]=t,!0)},has({_:{data:e,setupState:n,accessCache:t,ctx:o,appContext:r,props:i,type:l}},s){let c;return!!(t[s]||e!==Me&&s[0]!=="$"&&Le(e,s)||wr(n,s)||Le(i,s)||Le(o,s)||Le(so,s)||Le(r.config.globalProperties,s)||(c=l.__cssModules)&&c[s])},defineProperty(e,n,t){return t.get!=null?e._.accessCache[n]=0:Le(t,"value")&&this.set(e,n,t.value,null),Reflect.defineProperty(e,n,t)}};function fi(e){return _e(e)?e.reduce((n,t)=>(n[t]=null,n),{}):e}let ya=!0;function Qu(e){const n=Ls(e),t=e.proxy,o=e.ctx;ya=!1,n.beforeCreate&&pi(n.beforeCreate,e,"bc");const{data:r,computed:i,methods:l,watch:s,provide:c,inject:u,created:d,beforeMount:p,mounted:m,beforeUpdate:v,updated:S,activated:N,deactivated:T,beforeDestroy:k,beforeUnmount:x,destroyed:M,unmounted:z,render:de,renderTracked:ae,renderTriggered:$,errorCaptured:ie,serverPrefetch:oe,expose:Y,inheritAttrs:q,components:B,directives:X,filters:Z}=n;if(u&&Xu(u,o,null),l)for(const Be in l){const xe=l[Be];Ne(xe)&&(o[Be]=xe.bind(t))}if(r){const Be=r.call(t,t);je(Be)&&(e.data=Bo(Be))}if(ya=!0,i)for(const Be in i){const xe=i[Be],vn=Ne(xe)?xe.bind(t,t):Ne(xe.get)?xe.get.bind(t,t):$n,Ze=!Ne(xe)&&Ne(xe.set)?xe.set.bind(t):$n,mn=De({get:vn,set:Ze});Object.defineProperty(o,Be,{enumerable:!0,configurable:!0,get:()=>mn.value,set:We=>mn.value=We})}if(s)for(const Be in s)ks(s[Be],o,t,Be);if(c){const Be=Ne(c)?c.call(t):c;Reflect.ownKeys(Be).forEach(xe=>{io(xe,Be[xe])})}d&&pi(d,e,"c");function Q(Be,xe){_e(xe)?xe.forEach(vn=>Be(vn.bind(t))):xe&&Be(xe.bind(t))}if(Q($u,p),Q(zn,m),Q(Fu,v),Q(Vu,S),Q(Du,N),Q(Mu,T),Q(Ku,ie),Q(Hu,ae),Q(Uu,$),Q(za,x),Q(Ua,z),Q(zu,oe),_e(Y))if(Y.length){const Be=e.exposed||(e.exposed={});Y.forEach(xe=>{Object.defineProperty(Be,xe,{get:()=>t[xe],set:vn=>t[xe]=vn,enumerable:!0})})}else e.exposed||(e.exposed={});de&&e.render===$n&&(e.render=de),q!=null&&(e.inheritAttrs=q),B&&(e.components=B),X&&(e.directives=X),oe&&Ss(e)}function Xu(e,n,t=$n){_e(e)&&(e=Aa(e));for(const o in e){const r=e[o];let i;je(r)?"default"in r?i=Ue(r.from||o,r.default,!0):i=Ue(r.from||o):i=Ue(r),rn(i)?Object.defineProperty(n,o,{enumerable:!0,configurable:!0,get:()=>i.value,set:l=>i.value=l}):n[o]=i}}function pi(e,n,t){Bn(_e(e)?e.map(o=>o.bind(n.proxy)):e.bind(n.proxy),n,t)}function ks(e,n,t,o){let r=o.includes(".")?bs(t,o):()=>t[o];if($e(e)){const i=n[e];Ne(i)&&xt(r,i)}else if(Ne(e))xt(r,e.bind(t));else if(je(e))if(_e(e))e.forEach(i=>ks(i,n,t,o));else{const i=Ne(e.handler)?e.handler.bind(t):n[e.handler];Ne(i)&&xt(r,i,e)}}function Ls(e){const n=e.type,{mixins:t,extends:o}=n,{mixins:r,optionsCache:i,config:{optionMergeStrategies:l}}=e.appContext,s=i.get(n);let c;return s?c=s:!r.length&&!t&&!o?c=n:(c={},r.length&&r.forEach(u=>Yo(c,u,l,!0)),Yo(c,n,l)),je(n)&&i.set(n,c),c}function Yo(e,n,t,o=!1){const{mixins:r,extends:i}=n;i&&Yo(e,i,t,!0),r&&r.forEach(l=>Yo(e,l,t,!0));for(const l in n)if(!(o&&l==="expose")){const s=Zu[l]||t&&t[l];e[l]=s?s(e[l],n[l]):n[l]}return e}const Zu={data:mi,props:hi,emits:hi,methods:no,computed:no,beforeCreate:an,created:an,beforeMount:an,mounted:an,beforeUpdate:an,updated:an,beforeDestroy:an,beforeUnmount:an,destroyed:an,unmounted:an,activated:an,deactivated:an,errorCaptured:an,serverPrefetch:an,components:no,directives:no,watch:nd,provide:mi,inject:ed};function mi(e,n){return n?e?function(){return Je(Ne(e)?e.call(this,this):e,Ne(n)?n.call(this,this):n)}:n:e}function ed(e,n){return no(Aa(e),Aa(n))}function Aa(e){if(_e(e)){const n={};for(let t=0;t<e.length;t++)n[e[t]]=e[t];return n}return e}function an(e,n){return e?[...new Set([].concat(e,n))]:n}function no(e,n){return e?Je(Object.create(null),e,n):n}function hi(e,n){return e?_e(e)&&_e(n)?[...new Set([...e,...n])]:Je(Object.create(null),fi(e),fi(n??{})):n}function nd(e,n){if(!e)return n;if(!n)return e;const t=Je(Object.create(null),e);for(const o in n)t[o]=an(e[o],n[o]);return t}function js(){return{app:null,config:{isNativeTag:Vl,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let td=0;function od(e,n){return function(o,r=null){Ne(o)||(o=Je({},o)),r!=null&&!je(r)&&(r=null);const i=js(),l=new WeakSet,s=[];let c=!1;const u=i.app={_uid:td++,_component:o,_props:r,_container:null,_context:i,_instance:null,version:Pd,get config(){return i.config},set config(d){},use(d,...p){return l.has(d)||(d&&Ne(d.install)?(l.add(d),d.install(u,...p)):Ne(d)&&(l.add(d),d(u,...p))),u},mixin(d){return i.mixins.includes(d)||i.mixins.push(d),u},component(d,p){return p?(i.components[d]=p,u):i.components[d]},directive(d,p){return p?(i.directives[d]=p,u):i.directives[d]},mount(d,p,m){if(!c){const v=u._ceVNode||G(o,r);return v.appContext=i,m===!0?m="svg":m===!1&&(m=void 0),e(v,d,m),c=!0,u._container=d,d.__vue_app__=u,gr(v.component)}},onUnmount(d){s.push(d)},unmount(){c&&(Bn(s,u._instance,16),e(null,u._container),delete u._container.__vue_app__)},provide(d,p){return i.provides[d]=p,u},runWithContext(d){const p=jt;jt=u;try{return d()}finally{jt=p}}};return u}}let jt=null;const rd=(e,n)=>n==="modelValue"||n==="model-value"?e.modelModifiers:e[`${n}Modifiers`]||e[`${fn(n)}Modifiers`]||e[`${Bt(n)}Modifiers`];function ad(e,n,...t){if(e.isUnmounted)return;const o=e.vnode.props||Me;let r=t;const i=n.startsWith("update:"),l=i&&rd(o,n.slice(7));l&&(l.trim&&(r=t.map(d=>$e(d)?d.trim():d)),l.number&&(r=t.map(sr)));let s,c=o[s=$o(n)]||o[s=$o(fn(n))];!c&&i&&(c=o[s=$o(Bt(n))]),c&&Bn(c,e,6,r);const u=o[s+"Once"];if(u){if(!e.emitted)e.emitted={};else if(e.emitted[s])return;e.emitted[s]=!0,Bn(u,e,6,r)}}const id=new WeakMap;function Ds(e,n,t=!1){const o=t?id:n.emitsCache,r=o.get(e);if(r!==void 0)return r;const i=e.emits;let l={},s=!1;if(!Ne(e)){const c=u=>{const d=Ds(u,n,!0);d&&(s=!0,Je(l,d))};!t&&n.mixins.length&&n.mixins.forEach(c),e.extends&&c(e.extends),e.mixins&&e.mixins.forEach(c)}return!i&&!s?(je(e)&&o.set(e,null),null):(_e(i)?i.forEach(c=>l[c]=null):Je(l,i),je(e)&&o.set(e,l),l)}function hr(e,n){return!e||!rr(n)?!1:(n=n.slice(2),n=n==="Once"?n:n.replace(/Once$/,""),Le(e,n[0].toLowerCase()+n.slice(1))||Le(e,Bt(n))||Le(e,n))}function vi(e){const{type:n,vnode:t,proxy:o,withProxy:r,propsOptions:[i],slots:l,attrs:s,emit:c,render:u,renderCache:d,props:p,data:m,setupState:v,ctx:S,inheritAttrs:N}=e,T=Ko(e);let k,x;try{if(t.shapeFlag&4){const z=r||o,de=z;k=Dn(u.call(de,z,d,p,v,m,S)),x=s}else{const z=n;k=Dn(z.length>1?z(p,{attrs:s,slots:l,emit:c}):z(p,null)),x=n.props?s:ld(s)}}catch(z){Qn.length=0,dr(z,e,1),k=G(tn)}let M=k;if(x&&N!==!1){const z=Object.keys(x),{shapeFlag:de}=M;z.length&&de&7&&(i&&z.some(ar)&&(x=sd(x,i)),M=ut(M,x,!1,!0))}if(t.dirs&&(M=ut(M,null,!1,!0),M.dirs=M.dirs?M.dirs.concat(t.dirs):t.dirs),t.transition){const z=fr(M.type)&&Go(M)||M;ho(z,t.transition)}return k=M,Ko(T),k}const ld=e=>{let n;for(const t in e)(t==="class"||t==="style"||rr(t))&&((n||(n={}))[t]=e[t]);return n},sd=(e,n)=>{const t={};for(const o in e)(!ar(o)||!(o.slice(9)in n))&&(t[o]=e[o]);return t};function cd(e,n,t){const{props:o,children:r,component:i}=e,{props:l,children:s,patchFlag:c}=n,u=i.emitsOptions;if(n.dirs||n.transition)return!0;if(t&&c>=0){if(c&1024)return!0;if(c&16)return o?gi(o,l,u):!!l;if(c&8){const d=n.dynamicProps;for(let p=0;p<d.length;p++){const m=d[p];if(Ms(l,o,m)&&!hr(u,m))return!0}}}else return(r||s)&&(!s||!s.$stable)?!0:o===l?!1:o?l?gi(o,l,u):!0:!!l;return!1}function gi(e,n,t){const o=Object.keys(n);if(o.length!==Object.keys(e).length)return!0;for(let r=0;r<o.length;r++){const i=o[r];if(Ms(n,e,i)&&!hr(t,i))return!0}return!1}function Ms(e,n,t){const o=e[t],r=n[t];return t==="style"&&je(o)&&je(r)?!Ht(o,r):o!==r}function ud({vnode:e,parent:n,suspense:t},o){for(;n;){const r=n.subTree;if(r.suspense&&r.suspense.activeBranch===e&&(r.suspense.vnode.el=r.el=o,e=r),r===e)(e=n.vnode).el=o,n=n.parent;else break}t&&t.activeBranch===e&&(t.vnode.el=o)}const qs={},$s=()=>Object.create(qs),Fs=e=>Object.getPrototypeOf(e)===qs;function dd(e,n,t,o=!1){const r={},i=$s();e.propsDefaults=Object.create(null),Vs(e,n,r,i);for(const l in e.propsOptions[0])l in r||(r[l]=void 0);t?e.props=o?r:us(r):e.type.props?e.props=r:e.props=i,e.attrs=i}function fd(e,n,t,o){const{props:r,attrs:i,vnode:{patchFlag:l}}=e,s=Ie(r),[c]=e.propsOptions;let u=!1;if((o||l>0)&&!(l&16)){if(l&8){const d=e.vnode.dynamicProps;for(let p=0;p<d.length;p++){let m=d[p];if(hr(e.emitsOptions,m))continue;const v=n[m];if(c)if(Le(i,m))v!==i[m]&&(i[m]=v,u=!0);else{const S=fn(m);r[S]=Na(c,s,S,v,e,!1)}else v!==i[m]&&(i[m]=v,u=!0)}}}else{Vs(e,n,r,i)&&(u=!0);let d;for(const p in s)(!n||!Le(n,p)&&((d=Bt(p))===p||!Le(n,d)))&&(c?t&&(t[p]!==void 0||t[d]!==void 0)&&(r[p]=Na(c,s,p,void 0,e,!0)):delete r[p]);if(i!==s)for(const p in i)(!n||!Le(n,p))&&(delete i[p],u=!0)}u&&Yn(e.attrs,"set","")}function Vs(e,n,t,o){const[r,i]=e.propsOptions;let l=!1,s;if(n)for(let c in n){if(oo(c))continue;const u=n[c];let d;r&&Le(r,d=fn(c))?!i||!i.includes(d)?t[d]=u:(s||(s={}))[d]=u:hr(e.emitsOptions,c)||(!(c in o)||u!==o[c])&&(o[c]=u,l=!0)}if(i){const c=Ie(t),u=s||Me;for(let d=0;d<i.length;d++){const p=i[d];t[p]=Na(r,c,p,u[p],e,!Le(u,p))}}return l}function Na(e,n,t,o,r,i){const l=e[t];if(l!=null){const s=Le(l,"default");if(s&&o===void 0){const c=l.default;if(l.type!==Function&&!l.skipFactory&&Ne(c)){const{propsDefaults:u}=r;if(t in u)o=u[t];else{const d=So(r);o=u[t]=c.call(null,n),d()}}else o=c;r.ce&&r.ce._setProp(t,o)}l[0]&&(i&&!s?o=!1:l[1]&&(o===""||o===Bt(t))&&(o=!0))}return o}const pd=new WeakMap;function zs(e,n,t=!1){const o=t?pd:n.propsCache,r=o.get(e);if(r)return r;const i=e.props,l={},s=[];let c=!1;if(!Ne(e)){const d=p=>{c=!0;const[m,v]=zs(p,n,!0);Je(l,m),v&&s.push(...v)};!t&&n.mixins.length&&n.mixins.forEach(d),e.extends&&d(e.extends),e.mixins&&e.mixins.forEach(d)}if(!i&&!c)return je(e)&&o.set(e,It),It;if(_e(i))for(let d=0;d<i.length;d++){const p=fn(i[d]);_i(p)&&(l[p]=Me)}else if(i)for(const d in i){const p=fn(d);if(_i(p)){const m=i[d],v=l[p]=_e(m)||Ne(m)?{type:m}:Je({},m),S=v.type;let N=!1,T=!0;if(_e(S))for(let k=0;k<S.length;++k){const x=S[k],M=Ne(x)&&x.name;if(M==="Boolean"){N=!0;break}else M==="String"&&(T=!1)}else N=Ne(S)&&S.name==="Boolean";v[0]=N,v[1]=T,(N||Le(v,"default"))&&s.push(p)}}const u=[l,s];return je(e)&&o.set(e,u),u}function _i(e){return e[0]!=="$"&&!oo(e)}const Ha=e=>e==="_"||e==="_ctx"||e==="$stable",Ka=e=>_e(e)?e.map(Dn):[Dn(e)],md=(e,n,t)=>{if(n._n)return n;const o=ye((...r)=>Ka(n(...r)),t);return o._c=!1,o},Us=(e,n,t)=>{const o=e._ctx;for(const r in e){if(Ha(r))continue;const i=e[r];if(Ne(i))n[r]=md(r,i,o);else if(i!=null){const l=Ka(i);n[r]=()=>l}}},Hs=(e,n)=>{const t=Ka(n);e.slots.default=()=>t},Ks=(e,n,t)=>{for(const o in n)(t||!Ha(o))&&(e[o]=n[o])},hd=(e,n,t)=>{const o=e.slots=$s();if(e.vnode.shapeFlag&32){const r=n._;r?(Ks(o,n,t),t&&Kl(o,"_",r,!0)):Us(n,o)}else n&&Hs(e,n)},vd=(e,n,t)=>{const{vnode:o,slots:r}=e;let i=!0,l=Me;if(o.shapeFlag&32){const s=n._;s?t&&s===1?i=!1:Ks(r,n,t):(i=!n.$stable,Us(n,r)),l=n}else n&&(Hs(e,n),l={default:1});if(i)for(const s in r)!Ha(s)&&l[s]==null&&delete r[s]},ln=Ad;function gd(e){return _d(e)}function _d(e,n){const t=cr();t.__VUE__=!0;const{insert:o,remove:r,patchProp:i,createElement:l,createText:s,createComment:c,setText:u,setElementText:d,parentNode:p,nextSibling:m,setScopeId:v=$n,insertStaticContent:S}=e,N=(h,g,y,I=null,j=null,E=null,ne=void 0,ee=null,J=!!g.dynamicChildren)=>{if(h===g)return;h&&!_t(h,g)&&(I=O(h),We(h,j,E,!0),h=null),g.patchFlag===-2&&(J=!1,g.dynamicChildren=null);const{type:F,ref:ve,shapeFlag:te}=g;switch(F){case vr:T(h,g,y,I);break;case tn:k(h,g,y,I);break;case Vo:h==null&&x(g,y,I,ne);break;case Re:B(h,g,y,I,j,E,ne,ee,J);break;default:te&1?de(h,g,y,I,j,E,ne,ee,J):te&6?X(h,g,y,I,j,E,ne,ee,J):(te&64||te&128)&&F.process(h,g,y,I,j,E,ne,ee,J,pe)}ve!=null&&j?lo(ve,h&&h.ref,E,g||h,!g):ve==null&&h&&h.ref!=null&&lo(h.ref,null,E,h,!0)},T=(h,g,y,I)=>{if(h==null)o(g.el=s(g.children),y,I);else{const j=g.el=h.el;g.children!==h.children&&u(j,g.children)}},k=(h,g,y,I)=>{h==null?o(g.el=c(g.children||""),y,I):g.el=h.el},x=(h,g,y,I)=>{[h.el,h.anchor]=S(h.children,g,y,I,h.el,h.anchor)},M=({el:h,anchor:g},y,I)=>{let j;for(;h&&h!==g;)j=m(h),o(h,y,I),h=j;o(g,y,I)},z=({el:h,anchor:g})=>{let y;for(;h&&h!==g;)y=m(h),r(h),h=y;r(g)},de=(h,g,y,I,j,E,ne,ee,J)=>{if(g.type==="svg"?ne="svg":g.type==="math"&&(ne="mathml"),h==null)ae(g,y,I,j,E,ne,ee,J);else{const F=h.el&&h.el._isVueCE?h.el:null;try{F&&F._beginPatch(),oe(h,g,j,E,ne,ee,J)}finally{F&&F._endPatch()}}},ae=(h,g,y,I,j,E,ne,ee)=>{let J,F;const{props:ve,shapeFlag:te,transition:me,dirs:be}=h;if(J=h.el=l(h.type,E,ve&&ve.is,ve),te&8?d(J,h.children):te&16&&ie(h.children,J,null,I,j,Sr(h,E),ne,ee),be&&dt(h,null,I,"created"),$(J,h,h.scopeId,ne,I),ve){for(const Oe in ve)Oe!=="value"&&!oo(Oe)&&i(J,Oe,null,ve[Oe],E,I);"value"in ve&&i(J,"value",null,ve.value,E),(F=ve.onVnodeBeforeMount)&&kn(F,I,h)}be&&dt(h,null,I,"beforeMount");const we=bd(j,me);we&&me.beforeEnter(J),o(J,g,y),((F=ve&&ve.onVnodeMounted)||we||be)&&ln(()=>{F&&kn(F,I,h),we&&me.enter(J),be&&dt(h,null,I,"mounted")},j)},$=(h,g,y,I,j)=>{if(y&&v(h,y),I)for(let E=0;E<I.length;E++)v(h,I[E]);if(j){let E=j.subTree;if(g===E||Ys(E.type)&&(E.ssContent===g||E.ssFallback===g)){const ne=j.vnode;$(h,ne,ne.scopeId,ne.slotScopeIds,j.parent)}}},ie=(h,g,y,I,j,E,ne,ee,J=0)=>{for(let F=J;F<h.length;F++){const ve=h[F]=ee?Wn(h[F]):Dn(h[F]);N(null,ve,g,y,I,j,E,ne,ee)}},oe=(h,g,y,I,j,E,ne)=>{const ee=g.el=h.el;let{patchFlag:J,dynamicChildren:F,dirs:ve}=g;J|=h.patchFlag&16;const te=h.props||Me,me=g.props||Me;let be;if(y&&ft(y,!1),(be=me.onVnodeBeforeUpdate)&&kn(be,y,g,h),ve&&dt(g,h,y,"beforeUpdate"),y&&ft(y,!0),F&&(!h.dynamicChildren||h.dynamicChildren.length!==F.length)&&(J=0,ne=!1,F=null),(te.innerHTML&&me.innerHTML==null||te.textContent&&me.textContent==null)&&d(ee,""),F?Y(h.dynamicChildren,F,ee,y,I,Sr(g,j),E):ne||xe(h,g,ee,null,y,I,Sr(g,j),E,!1),J>0){if(J&16)q(ee,te,me,y,j);else if(J&2&&te.class!==me.class&&i(ee,"class",null,me.class,j),J&4&&i(ee,"style",te.style,me.style,j),J&8){const we=g.dynamicProps;for(let Oe=0;Oe<we.length;Oe++){const a=we[Oe],b=te[a],w=me[a];(w!==b||a==="value")&&i(ee,a,b,w,j,y)}}J&1&&h.children!==g.children&&d(ee,g.children)}else!ne&&F==null&&q(ee,te,me,y,j);((be=me.onVnodeUpdated)||ve)&&ln(()=>{be&&kn(be,y,g,h),ve&&dt(g,h,y,"updated")},I)},Y=(h,g,y,I,j,E,ne)=>{for(let ee=0;ee<g.length;ee++){const J=h[ee],F=g[ee],ve=J.el&&(J.type===Re||!_t(J,F)||J.shapeFlag&198)?p(J.el):y;N(J,F,ve,null,I,j,E,ne,!0)}},q=(h,g,y,I,j)=>{if(g!==y){if(g!==Me)for(const E in g)!oo(E)&&!(E in y)&&i(h,E,g[E],null,j,I);for(const E in y){if(oo(E))continue;const ne=y[E],ee=g[E];ne!==ee&&E!=="value"&&i(h,E,ee,ne,j,I)}"value"in y&&i(h,"value",g.value,y.value,j)}},B=(h,g,y,I,j,E,ne,ee,J)=>{const F=g.el=h?h.el:s(""),ve=g.anchor=h?h.anchor:s("");let{patchFlag:te,dynamicChildren:me,slotScopeIds:be}=g;be&&(ee=ee?ee.concat(be):be),h==null?(o(F,y,I),o(ve,y,I),ie(g.children||[],y,ve,j,E,ne,ee,J)):te>0&&te&64&&me&&h.dynamicChildren&&h.dynamicChildren.length===me.length?(Y(h.dynamicChildren,me,y,j,E,ne,ee),(g.key!=null||j&&g===j.subTree)&&Ga(h,g,!0)):xe(h,g,y,ve,j,E,ne,ee,J)},X=(h,g,y,I,j,E,ne,ee,J)=>{g.slotScopeIds=ee,h==null?g.shapeFlag&512?j.ctx.activate(g,y,I,ne,J):Z(g,y,I,j,E,ne,J):Fe(h,g,J)},Z=(h,g,y,I,j,E,ne)=>{const ee=h.component=Bd(h,I,j);if(pr(h)&&(ee.ctx.renderer=pe),wd(ee,!1,ne),ee.asyncDep){if(j&&j.registerDep(ee,Q,ne),!h.el){const J=ee.subTree=G(tn);k(null,J,g,y),h.placeholder=J.el}}else Q(ee,h,g,y,j,E,ne)},Fe=(h,g,y)=>{const I=g.component=h.component;if(cd(h,g,y))if(I.asyncDep&&!I.asyncResolved){Be(I,g,y);return}else I.next=g,I.update();else g.el=h.el,I.vnode=g},Q=(h,g,y,I,j,E,ne)=>{const ee=()=>{if(h.isMounted){let{next:te,bu:me,u:be,parent:we,vnode:Oe}=h;{const R=Gs(h);if(R){te&&(te.el=Oe.el,Be(h,te,ne)),R.asyncDep.then(()=>{ln(()=>{h.isUnmounted||F()},j)});return}}let a=te,b;ft(h,!1),te?(te.el=Oe.el,Be(h,te,ne)):te=Oe,me&&Fo(me),(b=te.props&&te.props.onVnodeBeforeUpdate)&&kn(b,we,te,Oe),ft(h,!0);const w=vi(h),C=h.subTree;h.subTree=w,N(C,w,p(C.el),O(C),h,j,E),te.el=w.el,a===null&&ud(h,w.el),be&&ln(be,j),(b=te.props&&te.props.onVnodeUpdated)&&ln(()=>kn(b,we,te,Oe),j)}else{let te;const{el:me,props:be}=g,{bm:we,m:Oe,parent:a,root:b,type:w}=h,C=Lt(g);ft(h,!1),we&&Fo(we),!C&&(te=be&&be.onVnodeBeforeMount)&&kn(te,a,g),ft(h,!0);{b.ce&&b.ce._hasShadowRoot()&&b.ce._injectChildStyle(w,h.parent?h.parent.type:void 0);const R=h.subTree=vi(h);N(null,R,y,I,h,j,E),g.el=R.el}if(Oe&&ln(Oe,j),!C&&(te=be&&be.onVnodeMounted)){const R=g;ln(()=>kn(te,a,R),j)}(g.shapeFlag&256||a&&Lt(a.vnode)&&a.vnode.shapeFlag&256)&&h.a&&ln(h.a,j),h.isMounted=!0,g=y=I=null}};h.scope.on();const J=h.effect=new Jl(ee);h.scope.off();const F=h.update=J.run.bind(J),ve=h.job=J.runIfDirty.bind(J);ve.i=h,ve.id=h.uid,J.scheduler=()=>Va(ve),ft(h,!0),F()},Be=(h,g,y)=>{g.component=h;const I=h.vnode.props;h.vnode=g,h.next=null,fd(h,g.props,I,y),vd(h,g.children,y),Xn(),ii(h),Zn()},xe=(h,g,y,I,j,E,ne,ee,J=!1)=>{const F=h&&h.children,ve=h?h.shapeFlag:0,te=g.children,{patchFlag:me,shapeFlag:be}=g;if(me>0){if(me&128){Ze(F,te,y,I,j,E,ne,ee,J);return}else if(me&256){vn(F,te,y,I,j,E,ne,ee,J);return}}be&8?(ve&16&&Ge(F,j,E),te!==F&&d(y,te)):ve&16?be&16?Ze(F,te,y,I,j,E,ne,ee,J):Ge(F,j,E,!0):(ve&8&&d(y,""),be&16&&ie(te,y,I,j,E,ne,ee,J))},vn=(h,g,y,I,j,E,ne,ee,J)=>{h=h||It,g=g||It;const F=h.length,ve=g.length,te=Math.min(F,ve);let me;for(me=0;me<te;me++){const be=g[me]=J?Wn(g[me]):Dn(g[me]);N(h[me],be,y,null,j,E,ne,ee,J)}F>ve?Ge(h,j,E,!0,!1,te):ie(g,y,I,j,E,ne,ee,J,te)},Ze=(h,g,y,I,j,E,ne,ee,J)=>{let F=0;const ve=g.length;let te=h.length-1,me=ve-1;for(;F<=te&&F<=me;){const be=h[F],we=g[F]=J?Wn(g[F]):Dn(g[F]);if(_t(be,we))N(be,we,y,null,j,E,ne,ee,J);else break;F++}for(;F<=te&&F<=me;){const be=h[te],we=g[me]=J?Wn(g[me]):Dn(g[me]);if(_t(be,we))N(be,we,y,null,j,E,ne,ee,J);else break;te--,me--}if(F>te){if(F<=me){const be=me+1,we=be<ve?g[be].el:I;for(;F<=me;)N(null,g[F]=J?Wn(g[F]):Dn(g[F]),y,we,j,E,ne,ee,J),F++}}else if(F>me)for(;F<=te;)We(h[F],j,E,!0),F++;else{const be=F,we=F,Oe=new Map;for(F=we;F<=me;F++){const A=g[F]=J?Wn(g[F]):Dn(g[F]);A.key!=null&&Oe.set(A.key,F)}let a,b=0;const w=me-we+1;let C=!1,R=0;const H=new Array(w);for(F=0;F<w;F++)H[F]=0;for(F=be;F<=te;F++){const A=h[F];if(b>=w){We(A,j,E,!0);continue}let D;if(A.key!=null)D=Oe.get(A.key);else for(a=we;a<=me;a++)if(H[a-we]===0&&_t(A,g[a])){D=a;break}D===void 0?We(A,j,E,!0):(H[D-we]=F+1,D>=R?R=D:C=!0,N(A,g[D],y,null,j,E,ne,ee,J),b++)}const f=C?yd(H):It;for(a=f.length-1,F=w-1;F>=0;F--){const A=we+F,D=g[A],P=g[A+1],L=A+1<ve?P.el||Ws(P):I;H[F]===0?N(null,D,y,L,j,E,ne,ee,J):C&&(a<0||F!==f[a]?mn(D,y,L,2):a--)}}},mn=(h,g,y,I,j=null)=>{const{el:E,type:ne,transition:ee,children:J,shapeFlag:F}=h;if(F&6){mn(h.component.subTree,g,y,I);return}if(F&128){h.suspense.move(g,y,I);return}if(F&64){ne.move(h,g,y,pe);return}if(ne===Re){o(E,g,y);for(let te=0;te<J.length;te++)mn(J[te],g,y,I);o(h.anchor,g,y);return}if(ne===Vo){M(h,g,y);return}if(I!==2&&F&1&&ee)if(I===0)ee.persisted&&!E[An]?o(E,g,y):(ee.beforeEnter(E),o(E,g,y),ln(()=>ee.enter(E),j));else{const{leave:te,delayLeave:me,afterLeave:be}=ee,we=()=>{h.ctx.isUnmounted?r(E):o(E,g,y)},Oe=()=>{const a=E._isLeaving||!!E[An];E._isLeaving&&E[An](!0),ee.persisted&&!a?we():te(E,()=>{we(),be&&be()})};me?me(E,we,Oe):Oe()}else o(E,g,y)},We=(h,g,y,I=!1,j=!1)=>{const{type:E,props:ne,ref:ee,children:J,dynamicChildren:F,shapeFlag:ve,patchFlag:te,dirs:me,cacheIndex:be,memo:we}=h;if(te===-2&&(j=!1),ee!=null&&(Xn(),lo(ee,null,y,h,!0),Zn()),be!=null&&(g.renderCache[be]=void 0),ve&256){g.ctx.deactivate(h);return}const Oe=ve&1&&me,a=!Lt(h);let b;if(a&&(b=ne&&ne.onVnodeBeforeUnmount)&&kn(b,g,h),ve&6)Ke(h.component,y,I);else{if(ve&128){h.suspense.unmount(y,I);return}Oe&&dt(h,null,g,"beforeUnmount"),ve&64?h.type.remove(h,g,y,pe,I):F&&!F.hasOnce&&(E!==Re||te>0&&te&64)?Ge(F,g,y,!1,!0):(E===Re&&te&384||!j&&ve&16)&&Ge(J,g,y),I&&gn(h)}const w=we!=null&&be==null;(a&&(b=ne&&ne.onVnodeUnmounted)||Oe||w)&&ln(()=>{b&&kn(b,g,h),Oe&&dt(h,null,g,"unmounted"),w&&(h.el=null)},y)},gn=h=>{const{type:g,el:y,anchor:I,transition:j}=h;if(g===Re){wn(y,I);return}if(g===Vo){z(h);return}const E=()=>{r(y),j&&!j.persisted&&j.afterLeave&&j.afterLeave()};if(h.shapeFlag&1&&j&&!j.persisted){const{leave:ne,delayLeave:ee}=j,J=()=>ne(y,E);ee?ee(h.el,E,J):J()}else E()},wn=(h,g)=>{let y;for(;h!==g;)y=m(h),r(h),h=y;r(g)},Ke=(h,g,y)=>{const{bum:I,scope:j,job:E,subTree:ne,um:ee,m:J,a:F}=h;bi(J),bi(F),I&&Fo(I),j.stop(),E&&(E.flags|=8,We(ne,h,g,y)),ee&&ln(ee,g),ln(()=>{h.isUnmounted=!0},g)},Ge=(h,g,y,I=!1,j=!1,E=0)=>{for(let ne=E;ne<h.length;ne++)We(h[ne],g,y,I,j)},O=h=>{if(h.shapeFlag&6)return O(h.component.subTree);if(h.shapeFlag&128)return h.suspense.next();const g=m(h.anchor||h.el),y=g&&g[ys];return y?m(y):g};let se=!1;const W=(h,g,y)=>{let I;h==null?g._vnode&&(We(g._vnode,null,null,!0),I=g._vnode.component):N(g._vnode||null,h,g,null,null,null,y),g._vnode=h,se||(se=!0,ii(I),hs(),se=!1)},pe={p:N,um:We,m:mn,r:gn,mt:Z,mc:ie,pc:xe,pbc:Y,n:O,o:e};return{render:W,hydrate:void 0,createApp:od(W)}}function Sr({type:e,props:n},t){return t==="svg"&&e==="foreignObject"||t==="mathml"&&e==="annotation-xml"&&n&&n.encoding&&n.encoding.includes("html")?void 0:t}function ft({effect:e,job:n},t){t?(e.flags|=32,n.flags|=4):(e.flags&=-33,n.flags&=-5)}function bd(e,n){return(!e||e&&!e.pendingBranch)&&n&&!n.persisted}function Ga(e,n,t=!1){const o=e.children,r=n.children;if(_e(o)&&_e(r))for(let i=0;i<o.length;i++){const l=o[i];let s=r[i];s.shapeFlag&1&&!s.dynamicChildren&&((s.patchFlag<=0||s.patchFlag===32)&&(s=r[i]=Wn(r[i]),s.el=l.el),!t&&s.patchFlag!==-2&&Ga(l,s)),s.type===vr&&(s.patchFlag===-1&&(s=r[i]=Wn(s)),s.el=l.el),s.type===tn&&!s.el&&(s.el=l.el)}}function yd(e){const n=e.slice(),t=[0];let o,r,i,l,s;const c=e.length;for(o=0;o<c;o++){const u=e[o];if(u!==0){if(r=t[t.length-1],e[r]<u){n[o]=r,t.push(o);continue}for(i=0,l=t.length-1;i<l;)s=i+l>>1,e[t[s]]<u?i=s+1:l=s;u<e[t[i]]&&(i>0&&(n[o]=t[i-1]),t[i]=o)}}for(i=t.length,l=t[i-1];i-- >0;)t[i]=l,l=n[l];return t}function Gs(e){const n=e.subTree.component;if(n)return n.asyncDep&&!n.asyncResolved?n:Gs(n)}function bi(e){if(e)for(let n=0;n<e.length;n++)e[n].flags|=8}function Ws(e){if(e.placeholder)return e.placeholder;const n=e.component;return n?Ws(n.subTree):null}const Ys=e=>e.__isSuspense;function Ad(e,n){n&&n.pendingBranch?_e(e)?n.effects.push(...e):n.effects.push(e):wu(e)}const Re=Symbol.for("v-fgt"),vr=Symbol.for("v-txt"),tn=Symbol.for("v-cmt"),Vo=Symbol.for("v-stc"),Qn=[];let _n=null;function V(e=!1){Qn.push(_n=e?null:[])}function Wa(){Qn.pop(),_n=Qn[Qn.length-1]||null}let vo=1;function Jo(e,n=!1){vo+=e,e<0&&_n&&n&&(_n.hasOnce=!0)}function Js(e){return e.dynamicChildren=vo>0?_n||It:null,Wa(),vo>0&&_n&&_n.push(e),e}function re(e,n,t,o,r,i){return Js(_(e,n,t,o,r,i,!0))}function ze(e,n,t,o,r){return Js(G(e,n,t,o,r,!0))}function go(e){return e?e.__v_isVNode===!0:!1}function _t(e,n){return e.type===n.type&&e.key===n.key}const Qs=({key:e})=>e??null,zo=({ref:e,ref_key:n,ref_for:t})=>(typeof e=="number"&&(e=""+e),e!=null?$e(e)||rn(e)||Ne(e)?{i:Xe,r:e,k:n,f:!!t}:e:null);function _(e,n=null,t=null,o=0,r=null,i=e===Re?0:1,l=!1,s=!1){const c={__v_isVNode:!0,__v_skip:!0,type:e,props:n,key:n&&Qs(n),ref:n&&zo(n),scopeId:gs,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:o,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:Xe};return s?(Qo(c,t),i&128&&e.normalize(c)):t&&(c.shapeFlag|=$e(t)?8:16),vo>0&&!l&&_n&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&_n.push(c),c}const G=Nd;function Nd(e,n=null,t=null,o=0,r=null,i=!1){if((!e||e===Os)&&(e=tn),go(e)){const s=ut(e,n,!0);return t&&Qo(s,t),vo>0&&!i&&_n&&(s.shapeFlag&6?_n[_n.indexOf(e)]=s:_n.push(s)),s.patchFlag=-2,s}if(Id(e)&&(e=e.__vccOpts),n){n=En(n);let{class:s,style:c}=n;s&&!$e(s)&&(n.class=un(s)),je(c)&&(Fa(c)&&!_e(c)&&(c=Je({},c)),n.style=Ro(c))}const l=$e(e)?1:Ys(e)?128:fr(e)?64:je(e)?4:Ne(e)?2:0;return _(e,n,t,o,r,l,i,!0)}function En(e){return e?Fa(e)||Fs(e)?Je({},e):e:null}function ut(e,n,t=!1,o=!1){const{props:r,ref:i,patchFlag:l,children:s,transition:c}=e,u=n?xa(r||{},n):r,d={__v_isVNode:!0,__v_skip:!0,type:e.type,props:u,key:u&&Qs(u),ref:n&&n.ref?t&&i?_e(i)?i.concat(zo(n)):[i,zo(n)]:zo(n):i,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:s,target:e.target,targetStart:e.targetStart,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:n&&e.type!==Re?l===-1?16:l|16:l,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:c,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&ut(e.ssContent),ssFallback:e.ssFallback&&ut(e.ssFallback),placeholder:e.placeholder,el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return c&&o&&ho(d,c.clone(d)),d}function Te(e=" ",n=0){return G(vr,null,e,n)}function xd(e,n){const t=G(Vo,null,e);return t.staticCount=n,t}function Ee(e="",n=!1){return n?(V(),ze(tn,null,e)):G(tn,null,e)}function Dn(e){return e==null||typeof e=="boolean"?G(tn):_e(e)?G(Re,null,e.slice()):go(e)?Wn(e):G(vr,null,String(e))}function Wn(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:ut(e)}function Qo(e,n){let t=0;const{shapeFlag:o}=e;if(n==null)n=null;else if(_e(n))t=16;else if(typeof n=="object")if(o&65){const r=n.default;r&&(r._c&&(r._d=!1),Qo(e,r()),r._c&&(r._d=!0));return}else{t=32;const r=n._;!r&&!Fs(n)?n._ctx=Xe:r===3&&Xe&&(Xe.slots._===1?n._=1:(n._=2,e.patchFlag|=1024))}else if(Ne(n)){if(o&65){Qo(e,{default:n});return}n={default:n,_ctx:Xe},t=32}else n=String(n),o&64?(t=16,n=[Te(n)]):t=8;e.children=n,e.shapeFlag|=t}function xa(...e){const n={};for(let t=0;t<e.length;t++){const o=e[t];for(const r in o)if(r==="class")n.class!==o.class&&(n.class=un([n.class,o.class]));else if(r==="style")n.style=Ro([n.style,o.style]);else if(rr(r)){const i=n[r],l=o[r];l&&i!==l&&!(_e(i)&&i.includes(l))?n[r]=i?[].concat(i,l):l:l==null&&i==null&&!ar(r)&&(n[r]=l)}else r!==""&&(n[r]=o[r])}return n}function kn(e,n,t,o=null){Bn(e,n,7,[t,o])}const Td=js();let Rd=0;function Bd(e,n,t){const o=e.type,r=(n?n.appContext:e.appContext)||Td,i={uid:Rd++,vnode:e,type:o,parent:n,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Xc(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:n?n.provides:Object.create(r.provides),ids:n?n.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:zs(o,r),emitsOptions:Ds(o,r),emit:null,emitted:null,propsDefaults:Me,inheritAttrs:o.inheritAttrs,ctx:Me,data:Me,props:Me,attrs:Me,slots:Me,refs:Me,setupState:Me,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=n?n.root:i,i.emit=ad.bind(null,i),e.ce&&e.ce(i),i}let on=null;const Xs=()=>on||Xe;let Xo,_o;{const e=cr(),n=(t,o)=>{let r;return(r=e[t])||(r=e[t]=[]),r.push(o),i=>{r.length>1?r.forEach(l=>l(i)):r[0](i)}};Xo=n("__VUE_INSTANCE_SETTERS__",t=>on=t),_o=n("__VUE_SSR_SETTERS__",t=>bo=t)}const So=e=>{const n=on;return Xo(e),e.scope.on(),()=>{e.scope.off(),Xo(n)}},yi=()=>{on&&on.scope.off(),Xo(null)};function Zs(e){return e.vnode.shapeFlag&4}let bo=!1;function wd(e,n=!1,t=!1){n&&_o(n);const{props:o,children:r}=e.vnode,i=Zs(e);dd(e,o,i,n),hd(e,r,t||n);const l=i?Sd(e,n):void 0;return n&&_o(!1),l}function Sd(e,n){const t=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,Ju);const{setup:o}=t;if(o){Xn();const r=e.setupContext=o.length>1?Cd(e):null,i=So(e),l=wo(o,e,0,[e.props,r]),s=zl(l);if(Zn(),i(),(s||e.sp)&&!Lt(e)&&Ss(e),s){if(l.then(yi,yi),n)return l.then(c=>{_o(!0);try{Ai(e,c,n)}finally{_o(!1)}}).catch(c=>{dr(c,e,0)});e.asyncDep=l}else Ai(e,l)}else ec(e)}function Ai(e,n,t){Ne(n)?e.type.__ssrInlineRender?e.ssrRender=n:e.render=n:je(n)&&(e.setupState=fs(n)),ec(e)}function ec(e,n,t){const o=e.type;e.render||(e.render=o.render||$n);{const r=So(e);Xn();try{Qu(e)}finally{Zn(),r()}}}const Ed={get(e,n){return nn(e,"get",""),e[n]}};function Cd(e){const n=t=>{e.exposed=t||{}};return{attrs:new Proxy(e.attrs,Ed),slots:e.slots,emit:e.emit,expose:n}}function gr(e){return e.exposed?e.exposeProxy||(e.exposeProxy=new Proxy(fs(gu(e.exposed)),{get(n,t){if(t in n)return n[t];if(t in so)return so[t](e)},has(n,t){return t in n||t in so}})):e.proxy}function Od(e,n=!0){return Ne(e)?e.displayName||e.name:e.name||n&&e.__name}function Id(e){return Ne(e)&&"__vccOpts"in e}const De=(e,n)=>Nu(e,n,bo);function $t(e,n,t){try{Jo(-1);const o=arguments.length;return o===2?je(n)&&!_e(n)?go(n)?G(e,null,[n]):G(e,n):G(e,null,n):(o>3?t=Array.prototype.slice.call(arguments,2):o===3&&go(t)&&(t=[t]),G(e,n,t))}finally{Jo(1)}}const Pd="3.5.41";let Ta;const Ni=typeof window<"u"&&window.trustedTypes;if(Ni)try{Ta=Ni.createPolicy("vue",{createHTML:e=>e})}catch{}const nc=Ta?e=>Ta.createHTML(e):e=>e,kd="http://www.w3.org/2000/svg",Ld="http://www.w3.org/1998/Math/MathML",Gn=typeof document<"u"?document:null,xi=Gn&&Gn.createElement("template"),jd={insert:(e,n,t)=>{n.insertBefore(e,t||null)},remove:e=>{const n=e.parentNode;n&&n.removeChild(e)},createElement:(e,n,t,o)=>{const r=n==="svg"?Gn.createElementNS(kd,e):n==="mathml"?Gn.createElementNS(Ld,e):t?Gn.createElement(e,{is:t}):Gn.createElement(e);return e==="select"&&o&&o.multiple!=null&&r.setAttribute("multiple",o.multiple),r},createText:e=>Gn.createTextNode(e),createComment:e=>Gn.createComment(e),setText:(e,n)=>{e.nodeValue=n},setElementText:(e,n)=>{e.textContent=n},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>Gn.querySelector(e),setScopeId(e,n){e.setAttribute(n,"")},insertStaticContent(e,n,t,o,r,i){const l=t?t.previousSibling:n.lastChild;if(r&&(r===i||r.nextSibling))for(;n.insertBefore(r.cloneNode(!0),t),!(r===i||!(r=r.nextSibling)););else{xi.innerHTML=nc(o==="svg"?`<svg>${e}</svg>`:o==="mathml"?`<math>${e}</math>`:e);const s=xi.content;if(o==="svg"||o==="mathml"){const c=s.firstChild;for(;c.firstChild;)s.appendChild(c.firstChild);s.removeChild(c)}n.insertBefore(s,t)}return[l?l.nextSibling:n.firstChild,t?t.previousSibling:n.lastChild]}},tt="transition",Jt="animation",yo=Symbol("_vtc"),tc={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},Dd=Je({},Ns,tc),Md=e=>(e.displayName="Transition",e.props=Dd,e),qd=Md((e,{slots:n})=>$t(ju,$d(e),n)),pt=(e,n=[])=>{_e(e)?e.forEach(t=>t(...n)):e&&e(...n)},Ti=e=>e?_e(e)?e.some(n=>n.length>1):e.length>1:!1;function $d(e){const n={};for(const B in e)B in tc||(n[B]=e[B]);if(e.css===!1)return n;const{name:t="v",type:o,duration:r,enterFromClass:i=`${t}-enter-from`,enterActiveClass:l=`${t}-enter-active`,enterToClass:s=`${t}-enter-to`,appearFromClass:c=i,appearActiveClass:u=l,appearToClass:d=s,leaveFromClass:p=`${t}-leave-from`,leaveActiveClass:m=`${t}-leave-active`,leaveToClass:v=`${t}-leave-to`}=e,S=Fd(r),N=S&&S[0],T=S&&S[1],{onBeforeEnter:k,onEnter:x,onEnterCancelled:M,onLeave:z,onLeaveCancelled:de,onBeforeAppear:ae=k,onAppear:$=x,onAppearCancelled:ie=M}=n,oe=(B,X,Z,Fe)=>{B._enterCancelled=Fe,mt(B,X?d:s),mt(B,X?u:l),Z&&Z()},Y=(B,X)=>{B._isLeaving=!1,mt(B,p),mt(B,v),mt(B,m),X&&X()},q=B=>(X,Z)=>{const Fe=B?$:x,Q=()=>oe(X,B,Z);pt(Fe,[X,Q]),Ri(()=>{mt(X,B?c:i),Hn(X,B?d:s),Ti(Fe)||Bi(X,o,N,Q)})};return Je(n,{onBeforeEnter(B){pt(k,[B]),Hn(B,i),Hn(B,l)},onBeforeAppear(B){pt(ae,[B]),Hn(B,c),Hn(B,u)},onEnter:q(!1),onAppear:q(!0),onLeave(B,X){B._isLeaving=!0;const Z=()=>Y(B,X);Hn(B,p),B._enterCancelled?(Hn(B,m),Ei(B)):(Ei(B),Hn(B,m)),Ri(()=>{B._isLeaving&&(mt(B,p),Hn(B,v),Ti(z)||Bi(B,o,T,Z))}),pt(z,[B,Z])},onEnterCancelled(B){oe(B,!1,void 0,!0),pt(M,[B])},onAppearCancelled(B){oe(B,!0,void 0,!0),pt(ie,[B])},onLeaveCancelled(B){Y(B),pt(de,[B])}})}function Fd(e){if(e==null)return null;if(je(e))return[Er(e.enter),Er(e.leave)];{const n=Er(e);return[n,n]}}function Er(e){return Uc(e)}function Hn(e,n){n.split(/\s+/).forEach(t=>t&&e.classList.add(t)),(e[yo]||(e[yo]=new Set)).add(n)}function mt(e,n){n.split(/\s+/).forEach(o=>o&&e.classList.remove(o));const t=e[yo];t&&(t.delete(n),t.size||(e[yo]=void 0))}function Ri(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}let Vd=0;function Bi(e,n,t,o){const r=e._endId=++Vd,i=()=>{r===e._endId&&o()};if(t!=null)return setTimeout(i,t);const{type:l,timeout:s,propCount:c}=zd(e,n);if(!l)return o();const u=l+"end";let d=0;const p=()=>{e.removeEventListener(u,m),i()},m=v=>{v.target===e&&++d>=c&&p()};setTimeout(()=>{d<c&&p()},s+1),e.addEventListener(u,m)}function zd(e,n){const t=window.getComputedStyle(e),o=S=>(t[S]||"").split(", "),r=o(`${tt}Delay`),i=o(`${tt}Duration`),l=wi(r,i),s=o(`${Jt}Delay`),c=o(`${Jt}Duration`),u=wi(s,c);let d=null,p=0,m=0;n===tt?l>0&&(d=tt,p=l,m=i.length):n===Jt?u>0&&(d=Jt,p=u,m=c.length):(p=Math.max(l,u),d=p>0?l>u?tt:Jt:null,m=d?d===tt?i.length:c.length:0);const v=d===tt&&/\b(?:transform|all)(?:,|$)/.test(o(`${tt}Property`).toString());return{type:d,timeout:p,propCount:m,hasTransform:v}}function wi(e,n){for(;e.length<n.length;)e=e.concat(e);return Math.max(...n.map((t,o)=>Si(t)+Si(e[o])))}function Si(e){return e==="auto"?0:Number(e.slice(0,-1).replace(",","."))*1e3}function Ei(e){return(e?e.ownerDocument:document).body.offsetHeight}function Ud(e,n,t){const o=e[yo];o&&(n=(n?[n,...o]:[...o]).join(" ")),n==null?e.removeAttribute("class"):t?e.setAttribute("class",n):e.className=n}const Zo=Symbol("_vod"),oc=Symbol("_vsh"),Ci={name:"show",beforeMount(e,{value:n},{transition:t}){e[Zo]=e.style.display==="none"?"":e.style.display,t&&n?t.beforeEnter(e):Qt(e,n)},mounted(e,{value:n},{transition:t}){t&&n&&t.enter(e)},updated(e,{value:n,oldValue:t},{transition:o}){!n!=!t&&(o?n?(o.beforeEnter(e),Qt(e,!0),o.enter(e)):o.leave(e,()=>{Qt(e,!1)}):Qt(e,n))},beforeUnmount(e,{value:n}){Qt(e,n)}};function Qt(e,n){e.style.display=n?e[Zo]:"none",e[oc]=!n}const Hd=Symbol(""),Kd=/(?:^|;)\s*display\s*:/;function Gd(e,n,t){const o=e.style,r=$e(t);let i=!1;if(t&&!r){if(n)if($e(n))for(const l of n.split(";")){const s=l.slice(0,l.indexOf(":")).trim();t[s]==null&&to(o,s,"")}else for(const l in n)t[l]==null&&to(o,l,"");for(const l in t){l==="display"&&(i=!0);const s=t[l];s!=null?Yd(e,l,!$e(n)&&n?n[l]:void 0,s)||to(o,l,s):to(o,l,"")}}else if(r){if(n!==t){const l=o[Hd];l&&(t+=";"+l),o.cssText=t,i=Kd.test(t)}}else n&&e.removeAttribute("style");Zo in e&&(e[Zo]=i?o.display:"",e[oc]&&(o.display="none"))}const Oi=/\s*!important$/;function to(e,n,t){if(_e(t))t.forEach(o=>to(e,n,o));else if(t==null&&(t=""),n.startsWith("--"))e.setProperty(n,t);else{const o=Wd(e,n);Oi.test(t)?e.setProperty(Bt(o),t.replace(Oi,""),"important"):e[o]=t}}const Ii=["Webkit","Moz","ms"],Cr={};function Wd(e,n){const t=Cr[n];if(t)return t;let o=fn(n);if(o!=="filter"&&o in e)return Cr[n]=o;o=lr(o);for(let r=0;r<Ii.length;r++){const i=Ii[r]+o;if(i in e)return Cr[n]=i}return n}function Yd(e,n,t,o){return e.tagName==="TEXTAREA"&&(n==="width"||n==="height")&&$e(o)&&t===o}const Pi="http://www.w3.org/1999/xlink";function ki(e,n,t,o,r,i=Jc(n)){o&&n.startsWith("xlink:")?t==null?e.removeAttributeNS(Pi,n.slice(6,n.length)):e.setAttributeNS(Pi,n,t):t==null||i&&!Gl(t)?e.removeAttribute(n):e.setAttribute(n,i?"":On(t)?String(t):t)}function Li(e,n,t,o,r){if(n==="innerHTML"||n==="textContent"){t!=null&&(e[n]=n==="innerHTML"?nc(t):t);return}const i=e.tagName;if(n==="value"&&i!=="PROGRESS"&&!i.includes("-")){const s=i==="OPTION"?e.getAttribute("value")||"":e.value,c=t==null?e.type==="checkbox"?"on":"":String(t);(s!==c||!("_value"in e))&&(e.value=c),t==null&&e.removeAttribute(n),e._value=t;return}let l=!1;if(t===""||t==null){const s=typeof e[n];s==="boolean"?t=Gl(t):t==null&&s==="string"?(t="",l=!0):s==="number"&&(t=0,l=!0)}try{e[n]=t}catch{}l&&e.removeAttribute(r||n)}function st(e,n,t,o){e.addEventListener(n,t,o)}function Jd(e,n,t,o){e.removeEventListener(n,t,o)}const ji=Symbol("_vei");function Qd(e,n,t,o,r=null){const i=e[ji]||(e[ji]={}),l=i[n];if(o&&l)l.value=o;else{const[s,c]=ef(n);if(o){const u=i[n]=of(o,r);st(e,s,u,c)}else l&&(Jd(e,s,l,c),i[n]=void 0)}}const Xd=/(Once|Passive|Capture)$/,Zd=/^on:?(?:Once|Passive|Capture)$/;function ef(e){let n,t;for(;(t=e.match(Xd))&&!Zd.test(e);)n||(n={}),e=e.slice(0,e.length-t[1].length),n[t[1].toLowerCase()]=!0;return[e[2]===":"?e.slice(3):Bt(e.slice(2)),n]}let Or=0;const nf=Promise.resolve(),tf=()=>Or||(nf.then(()=>Or=0),Or=Date.now());function of(e,n){const t=o=>{if(!o._vts)o._vts=Date.now();else if(o._vts<=t.attached)return;const r=t.value;if(_e(r)){const i=o.stopImmediatePropagation;o.stopImmediatePropagation=()=>{i.call(o),o._stopped=!0};const l=r.slice(),s=[o];for(let c=0;c<l.length&&!o._stopped;c++){const u=l[c];u&&Bn(u,n,5,s)}}else Bn(r,n,5,[o])};return t.value=e,t.attached=tf(),t}const Di=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,rf=(e,n,t,o,r,i)=>{const l=r==="svg";n==="class"?Ud(e,o,l):n==="style"?Gd(e,t,o):rr(n)?ar(n)||Qd(e,n,t,o,i):(n[0]==="."?(n=n.slice(1),!0):n[0]==="^"?(n=n.slice(1),!1):af(e,n,o,l))?(Li(e,n,o),!e.tagName.includes("-")&&(n==="value"||n==="checked"||n==="selected")&&ki(e,n,o,l,i,n!=="value")):e._isVueCE&&(lf(e,n)||e._def.__asyncLoader&&(/[A-Z]/.test(n)||!$e(o)))?Li(e,fn(n),o,i,n):(n==="true-value"?e._trueValue=o:n==="false-value"&&(e._falseValue=o),ki(e,n,o,l))};function af(e,n,t,o){if(o)return!!(n==="innerHTML"||n==="textContent"||n in e&&Di(n)&&Ne(t));if(n==="spellcheck"||n==="draggable"||n==="translate"||n==="autocorrect"||n==="sandbox"&&e.tagName==="IFRAME"||n==="form"||n==="list"&&e.tagName==="INPUT"||n==="type"&&e.tagName==="TEXTAREA")return!1;if(n==="width"||n==="height"){const r=e.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return Di(n)&&$e(t)?!1:n in e}function lf(e,n){const t=e._def.props;if(!t)return!1;const o=fn(n);return Array.isArray(t)?t.some(r=>fn(r)===o):Object.keys(t).some(r=>fn(r)===o)}const Ft=e=>{const n=e.props["onUpdate:modelValue"]||!1;return _e(n)?t=>Fo(n,t):n};function sf(e){e.target.composing=!0}function Mi(e){const n=e.target;n.composing&&(n.composing=!1,n.dispatchEvent(new Event("input")))}const qn=Symbol("_assign"),Do=Symbol("_initialValue");function Ir(e,n,t){return n&&(e=e.trim()),t&&(e=sr(e)),e}const Ao={created(e,{modifiers:{lazy:n,trim:t,number:o}},r){e.parentNode&&(e.type==="text"?e[Do]=e.defaultValue.replace(/[\r\n]/g,""):e.type==="textarea"&&(e[Do]=e.defaultValue.replace(/\r\n?/g,`
`))),e[qn]=Ft(r);const i=o||r.props&&r.props.type==="number";st(e,n?"change":"input",l=>{l.target.composing||e[qn](Ir(e.value,t,i))}),(t||i)&&st(e,"change",()=>{e.value=Ir(e.value,t,i)}),n||(st(e,"compositionstart",sf),st(e,"compositionend",Mi),st(e,"change",Mi))},mounted(e,{value:n,modifiers:{trim:t,number:o}}){const r=n??"",i=e[Do];delete e[Do],i!==void 0&&(e.type==="text"||e.type==="textarea")&&e.value!==i?e[qn](Ir(e.value,t,o)):e.value=r},beforeUpdate(e,{value:n,oldValue:t,modifiers:{lazy:o,trim:r,number:i}},l){if(e[qn]=Ft(l),e.composing)return;const s=(i||e.type==="number")&&!/^0\d/.test(e.value)?sr(e.value):e.value,c=n??"";if(s===c)return;const u=e.getRootNode();(u instanceof Document||u instanceof ShadowRoot)&&u.activeElement===e&&e.type!=="range"&&(o&&n===t||r&&e.value.trim()===c)||(e.value=c)}},cf={deep:!0,created(e,n,t){e[qn]=Ft(t),st(e,"change",()=>{const o=e._modelValue,r=No(e),i=e.checked,l=e[qn];if(_e(o)){const s=ka(o,r),c=s!==-1;if(i&&!c)l(o.concat(r));else if(!i&&c){const u=[...o];u.splice(s,1),l(u)}}else if(Ut(o)){const s=new Set(o);i?s.add(r):s.delete(r),l(s)}else l(rc(e,i))})},mounted:qi,beforeUpdate(e,n,t){e[qn]=Ft(t),qi(e,n,t)}};function qi(e,{value:n,oldValue:t},o){e._modelValue=n;let r;if(_e(n))r=ka(n,o.props.value)>-1;else if(Ut(n))r=n.has(o.props.value);else{if(n===t)return;r=Ht(n,rc(e,!0))}e.checked!==r&&(e.checked=r)}const Pr={deep:!0,created(e,{value:n,modifiers:{number:t}},o){e._modelValue=n,st(e,"change",()=>{const r=Array.prototype.filter.call(e.options,i=>i.selected).map(i=>t?sr(No(i)):No(i));e[qn](e.multiple?Ut(e._modelValue)?new Set(r):r:r[0]),e._assigning=!0,qt(()=>{e._assigning=!1})}),e[qn]=Ft(o)},mounted(e,{value:n}){$i(e,n)},beforeUpdate(e,{value:n},t){e._modelValue=n,e[qn]=Ft(t)},updated(e,{value:n}){e._assigning||$i(e,n)}};function $i(e,n){const t=e.multiple,o=_e(n);if(!(t&&!o&&!Ut(n))){for(let r=0,i=e.options.length;r<i;r++){const l=e.options[r],s=No(l);if(t)if(o){const c=typeof s;c==="string"||c==="number"?l.selected=n.some(u=>String(u)===String(s)):l.selected=ka(n,s)>-1}else l.selected=n.has(s);else if(Ht(No(l),n)){e.selectedIndex!==r&&(e.selectedIndex=r);return}}!t&&e.selectedIndex!==-1&&(e.selectedIndex=-1)}}function No(e){return"_value"in e?e._value:e.value}function rc(e,n){const t=n?"_trueValue":"_falseValue";return t in e?e[t]:n}const uf=["ctrl","shift","alt","meta"],df={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&e.button!==0,middle:e=>"button"in e&&e.button!==1,right:e=>"button"in e&&e.button!==2,exact:(e,n)=>uf.some(t=>e[`${t}Key`]&&!n.includes(t))},Tt=(e,n)=>{if(!e)return e;const t=e._withMods||(e._withMods={}),o=n.join(".");return t[o]||(t[o]=((r,...i)=>{for(let l=0;l<n.length;l++){const s=df[n[l]];if(s&&s(r,n))return}return e(r,...i)}))},ff=Je({patchProp:rf},jd);let Fi;function pf(){return Fi||(Fi=gd(ff))}const mf=((...e)=>{const n=pf().createApp(...e),{mount:t}=n;return n.mount=o=>{const r=vf(o);if(!r)return;const i=n._component;!Ne(i)&&!i.render&&!i.template&&(i.template=r.innerHTML),r.nodeType===1&&(r.textContent="");const l=t(r,!1,hf(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),l},n});function hf(e){if(e instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&e instanceof MathMLElement)return"mathml"}function vf(e){return $e(e)?document.querySelector(e):e}const gf="modulepreload",_f=function(e){return"/Extensao-26.2/"+e},Vi={},bf=function(n,t,o){let r=Promise.resolve();if(t&&t.length>0){let u=function(d){return Promise.all(d.map(p=>Promise.resolve(p).then(m=>({status:"fulfilled",value:m}),m=>({status:"rejected",reason:m}))))};var l=u;document.getElementsByTagName("link");const s=document.querySelector("meta[property=csp-nonce]"),c=s?.nonce||s?.getAttribute("nonce");r=u(t.map(d=>{if(d=_f(d),d in Vi)return;Vi[d]=!0;const p=d.endsWith(".css"),m=p?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${d}"]${m}`))return;const v=document.createElement("link");if(v.rel=p?"stylesheet":gf,p||(v.as="script"),v.crossOrigin="",v.href=d,c&&v.setAttribute("nonce",c),document.head.appendChild(v),p)return new Promise((S,N)=>{v.addEventListener("load",S),v.addEventListener("error",()=>N(new Error(`Unable to preload CSS for ${d}`)))})}))}function i(s){const c=new Event("vite:preloadError",{cancelable:!0});if(c.payload=s,window.dispatchEvent(c),!c.defaultPrevented)throw s}return r.then(s=>{for(const c of s||[])c.status==="rejected"&&i(c.reason);return n().catch(i)})};function yf(e={}){const{immediate:n=!1,onNeedReload:t,onNeedRefresh:o,onOfflineReady:r,onRegistered:i,onRegisteredSW:l,onRegisterError:s}=e;let c,u;const d=async(m=!0)=>{await u};async function p(){if("serviceWorker"in navigator){if(c=await bf(async()=>{const{Workbox:m}=await import("./workbox-window.prod.es5-BBnX5xw4.js");return{Workbox:m}},[]).then(({Workbox:m})=>new m("/Extensao-26.2/sw.js",{scope:"/Extensao-26.2/",type:"classic"})).catch(m=>{s?.(m)}),!c)return;c.addEventListener("activated",m=>{(m.isUpdate||m.isExternal)&&(t?t():window.location.reload())}),c.addEventListener("installed",m=>{m.isUpdate||r?.()}),c.register({immediate:n}).then(m=>{l?l("/Extensao-26.2/sw.js",m):i?.(m)}).catch(m=>{s?.(m)})}}return u=p(),d}const Af="acessibilidade-checker",Nf=2,sn=Object.freeze({projects:"projects",environments:"environments",elements:"elements",evaluations:"evaluations",ruleSets:"ruleSets"});function Ct(e){return new Promise((n,t)=>{e.onsuccess=()=>n(e.result),e.onerror=()=>t(e.error??new Error("Falha no IndexedDB."))})}function xf(e=globalThis.indexedDB){if(!e)return Promise.reject(new Error("IndexedDB não está disponível neste ambiente."));const n=e.open(Af,Nf);return n.onupgradeneeded=()=>{const t=n.result;if(t.objectStoreNames.contains(sn.projects)||t.createObjectStore(sn.projects,{keyPath:"id"}),t.objectStoreNames.contains(sn.environments)||t.createObjectStore(sn.environments,{keyPath:"id"}).createIndex("projectId","projectId",{unique:!1}),t.objectStoreNames.contains(sn.elements)||t.createObjectStore(sn.elements,{keyPath:"id"}).createIndex("environmentId","environmentId",{unique:!1}),!t.objectStoreNames.contains(sn.evaluations)){const o=t.createObjectStore(sn.evaluations,{keyPath:"id"});o.createIndex("elementId","elementId",{unique:!1}),o.createIndex("evaluatedAt","evaluatedAt",{unique:!1})}t.objectStoreNames.contains(sn.ruleSets)||t.createObjectStore(sn.ruleSets,{keyPath:"id"})},Ct(n)}async function Xt(e,n,t,o){const r=e.transaction(n,t),i=r.objectStore(n),l=await o(i);return await new Promise((s,c)=>{r.oncomplete=s,r.onabort=r.onerror=()=>c(r.error??new Error("Transação IndexedDB não concluída."))}),l}class Eo{constructor(n,t){this.database=n,this.storeName=t}get(n){return Xt(this.database,this.storeName,"readonly",t=>Ct(t.get(n)))}getAll(){return Xt(this.database,this.storeName,"readonly",n=>Ct(n.getAll()))}getAllBy(n,t){return Xt(this.database,this.storeName,"readonly",o=>Ct(o.index(n).getAll(t)))}put(n){return Xt(this.database,this.storeName,"readwrite",async t=>(await Ct(t.put(n)),n))}delete(n){return Xt(this.database,this.storeName,"readwrite",t=>Ct(t.delete(n)))}}class Tf extends Eo{constructor(n){super(n,sn.elements)}getByEnvironmentId(n){return this.getAllBy("environmentId",n)}}class Rf extends Eo{constructor(n){super(n,sn.environments)}getByProjectId(n){return this.getAllBy("projectId",n)}}class Bf extends Eo{constructor(n){super(n,sn.evaluations)}getByElementId(n){return this.getAllBy("elementId",n)}}class wf extends Eo{constructor(n){super(n,sn.projects)}}class Sf extends Eo{constructor(n){super(n,sn.ruleSets)}}const Ef=new Set([">=","<=",">","<","==","!="]);function kr(e,n,t){switch(n){case">=":return e>=t;case"<=":return e<=t;case">":return e>t;case"<":return e<t;case"==":return e===t;case"!=":return e!==t;default:throw new Error(`Operador não suportado: ${n}`)}}function Cf(e,n){return n.obrigatorio&&(e==null||e==="")?{valid:!1,reason:"Campo obrigatório não preenchido."}:e==null||e===""?{valid:!0}:n.tipo==="number"&&typeof e!="number"?{valid:!1,reason:"O valor deve ser numérico."}:n.tipo==="boolean"&&typeof e!="boolean"?{valid:!1,reason:"O valor deve ser booleano."}:{valid:!0}}class Of{evaluate(n,t,o={}){return n.map(r=>this.evaluateRule(r,t,o))}evaluateRule(n,t,o){const r=o[n.parametro],i=t[n.parametro];if(!r)return{id:n.id,status:"erro",mensagem:`Parâmetro não definido: ${n.parametro}`};const l=Cf(i,r);if(!l.valid)return{id:n.id,nome:n.nome,status:"invalido",mensagem:l.reason,referencia:n.referencia};if(i==null||i==="")return{id:n.id,nome:n.nome,status:"nao_avaliado",referencia:n.referencia};if(n.tipo==="checklist")return{id:n.id,nome:n.nome,status:"manual",valor:i,referencia:n.referencia};if(n.tipo==="conditional")return this.evaluateConditional(n,t,o);const s=kr(i,n.operador,n.valor);return{id:n.id,nome:n.nome,status:s?"conforme":"nao_conforme",valorInformado:i,valorEsperado:n.valor,unidade:r.unidade,referencia:n.referencia}}evaluateConditional(n,t,o){for(const r of n.condicoes??[]){const i=t[n.parametro];if(r.quando&&kr(i,r.quando.operador,r.quando.valor)){if(r.resultado)return{id:n.id,nome:n.nome,status:r.resultado,valorInformado:i,referencia:n.referencia,mensagem:r.mensagem};if(r.verificar){const l=t[r.verificar.parametro],s=kr(l,r.verificar.operador,r.verificar.valor);return{id:n.id,nome:n.nome,status:s?"conforme":"nao_conforme",valorInformado:l,valorEsperado:r.verificar.valor,referencia:n.referencia}}}}return{id:n.id,nome:n.nome,status:"nao_avaliado",referencia:n.referencia}}}function xn(e,n){if(typeof e!="string"||e.trim()==="")throw new TypeError(`${n} deve ser um texto não vazio.`);return e.trim()}function Co(){return typeof globalThis.crypto?.randomUUID=="function"?globalThis.crypto.randomUUID():`${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`}function Fn(e=new Date,n="data"){const t=e instanceof Date?e:new Date(e);if(Number.isNaN(t.getTime()))throw new TypeError(`${n} deve ser uma data válida.`);return t.toISOString()}function Ra(e){return typeof structuredClone=="function"?structuredClone(e):JSON.parse(JSON.stringify(e))}function Lr({id:e=Co(),elementId:n,data:t,result:o,evaluatedAt:r=new Date}={}){if(t===void 0||o===void 0)throw new TypeError("data e result são obrigatórios.");return{id:xn(e,"id"),elementId:xn(n,"elementId"),data:Ra(t),result:Ra(o),evaluatedAt:Fn(r,"evaluatedAt")}}const If=["nao_conforme","erro","invalido"],Pf=["atencao","manual","nao_avaliado"];function ac(e){const n=e[0]?.result;return n?.length?n.some(t=>If.includes(t.status))?"nao_conforme":n.some(t=>Pf.includes(t.status))?"nao_avaliado":"conforme":"nao_avaliado"}class kf{constructor({elementRepository:n,environmentRepository:t,evaluationRepository:o,ruleEngine:r=new Of}){this.elementRepository=n,this.environmentRepository=t,this.evaluationRepository=o,this.ruleEngine=r}async evaluateElement({elementId:n,checklist:t,data:o,evaluatedAt:r}){if(!await this.elementRepository.get(n))throw new Error("Elemento não encontrado.");const l=this.ruleEngine.evaluate(t.regras??[],o,t.parametros??{}),s=Lr({elementId:n,data:o,result:l,evaluatedAt:r});return this.evaluationRepository.put(s)}async saveElementData({elementId:n,data:t,savedAt:o}){if(!await this.elementRepository.get(n))throw new Error("Elemento não encontrado.");const i=Lr({elementId:n,data:t,result:[],evaluatedAt:o});return this.evaluationRepository.put(i)}evaluateTransientElement({elementId:n,checklist:t,data:o,evaluatedAt:r}){const i=this.ruleEngine.evaluate(t.regras??[],o,t.parametros??{});return Lr({elementId:n,data:o,result:i,evaluatedAt:r})}async listEvaluations(n){return(await this.evaluationRepository.getByElementId(n)).sort((o,r)=>r.evaluatedAt.localeCompare(o.evaluatedAt))}async getEnvironmentSummary(n){const t=await this.elementRepository.getByEnvironmentId(n);return this.#e(t)}async getProjectSummary(n){if(!this.environmentRepository)throw new Error("Repositório de ambientes não configurado.");const t=await this.environmentRepository.getByProjectId(n),o=await Promise.all(t.map(r=>this.elementRepository.getByEnvironmentId(r.id)));return this.#e(o.flat())}async#e(n){const t=await Promise.all(n.map(async r=>ac(await this.listEvaluations(r.id)))),o={totalElements:n.length,conforme:0,nao_conforme:0,nao_avaliado:0,pendente:0,score:0,overallStatus:"nao_avaliado"};for(const r of t)o[r]+=1;return o.pendente=o.nao_avaliado,o.score=o.totalElements?Math.round(o.conforme/o.totalElements*100):0,o.nao_conforme>0?o.overallStatus="nao_conforme":o.nao_avaliado===0&&o.totalElements>0&&(o.overallStatus="conforme"),o}}function zi({id:e=Co(),environmentId:n,name:t,type:o,rule:r,createdAt:i=new Date,updatedAt:l=i}={}){return{id:xn(e,"id"),environmentId:xn(n,"environmentId"),name:xn(t,"name"),type:xn(o,"type"),rule:xn(r,"rule"),createdAt:Fn(i,"createdAt"),updatedAt:Fn(l,"updatedAt")}}function Ui({id:e=Co(),projectId:n,name:t,createdAt:o=new Date,updatedAt:r=o}={}){return{id:xn(e,"id"),projectId:xn(n,"projectId"),name:xn(t,"name"),createdAt:Fn(o,"createdAt"),updatedAt:Fn(r,"updatedAt")}}function Hi({id:e=Co(),name:n,description:t="",createdAt:o=new Date,updatedAt:r=o}={}){return{id:xn(e,"id"),name:xn(n,"name"),description:typeof t=="string"?t.trim():"",createdAt:Fn(o,"createdAt"),updatedAt:Fn(r,"updatedAt")}}class Lf{constructor({projectRepository:n,environmentRepository:t,elementRepository:o}){this.projectRepository=n,this.environmentRepository=t,this.elementRepository=o}async createProject(n){const t=Hi(n);return this.projectRepository.put(t)}listProjects(){return this.projectRepository.getAll()}getProject(n){return this.projectRepository.get(n)}async updateProject(n,{name:t,description:o}){const r=await this.#e(this.projectRepository.get(n),"Projeto");return this.projectRepository.put(Hi({...r,name:t,description:o,updatedAt:new Date}))}async renameProject(n,t){const o=await this.#e(this.projectRepository.get(n),"Projeto");return this.updateProject(n,{name:t,description:o.description})}async createEnvironment(n,t){await this.#e(this.projectRepository.get(n),"Projeto");const o=Ui({...t,projectId:n});return this.environmentRepository.put(o)}listEnvironments(n){return this.environmentRepository.getByProjectId(n)}async renameEnvironment(n,t){const o=await this.#e(this.environmentRepository.get(n),"Ambiente");return this.environmentRepository.put(Ui({...o,name:t,updatedAt:new Date}))}async createElement(n,t){await this.#e(this.environmentRepository.get(n),"Ambiente");const o=zi({...t,environmentId:n});return this.elementRepository.put(o)}listElements(n){return this.elementRepository.getByEnvironmentId(n)}async updateElement(n,t){const o=await this.#e(this.elementRepository.get(n),"Elemento");return this.elementRepository.put(zi({...o,...t,id:o.id,environmentId:o.environmentId,createdAt:o.createdAt,updatedAt:Fn(new Date)}))}async#e(n,t){const o=await n;if(!o)throw new Error(`${t} não encontrado.`);return o}}class jf{constructor({evaluationService:n}){this.evaluationService=n,this.current=null}evaluate({name:n,checklist:t,data:o}){const r={id:Co(),name:n?.trim()||t.nome,type:t.nome,rule:t.id},i=this.evaluationService.evaluateTransientElement({elementId:r.id,checklist:t,data:o});return this.current={element:r,evaluation:i},this.current}getCurrent(){return this.current}clear(){this.current=null}}const Df=new Set(["checklist","conditional"]);function Dt(e){return e!==null&&typeof e=="object"&&!Array.isArray(e)}function co(e,n,t){(typeof e!="string"||e.trim()==="")&&t.push(`${n} deve ser um texto não vazio.`)}function ic(e,n,t){Ef.has(e)||t.push(`${n} deve ser um operador suportado.`)}function Ki(e,n,t){if(!Dt(e)){t.push(`${n} deve ser um objeto.`);return}ic(e.operador,`${n}.operador`,t),"valor"in e||t.push(`${n}.valor é obrigatório.`)}function Mf(e,n,t,o){const r=`regras[${n}]`;if(!Dt(e)){o.push(`${r} deve ser um objeto.`);return}if(co(e.id,`${r}.id`,o),co(e.nome,`${r}.nome`,o),co(e.parametro,`${r}.parametro`,o),typeof e.parametro=="string"&&!(e.parametro in t)&&o.push(`${r}.parametro deve existir em parametros.`),e.tipo!=="checklist"){if(e.tipo==="conditional"){if(!Array.isArray(e.condicoes)||e.condicoes.length===0){o.push(`${r}.condicoes deve conter ao menos uma condição.`);return}e.condicoes.forEach((i,l)=>{const s=`${r}.condicoes[${l}]`;if(!Dt(i)){o.push(`${s} deve ser um objeto.`);return}Ki(i.quando,`${s}.quando`,o);const c=typeof i.resultado=="string"&&i.resultado!=="",u="verificar"in i;c===u&&o.push(`${s} deve informar exatamente resultado ou verificar.`),u&&(Ki(i.verificar,`${s}.verificar`,o),(typeof i.verificar?.parametro!="string"||!(i.verificar.parametro in t))&&o.push(`${s}.verificar.parametro deve existir em parametros.`))});return}e.tipo!==void 0&&!Df.has(e.tipo)&&o.push(`${r}.tipo não é suportado.`),ic(e.operador,`${r}.operador`,o),"valor"in e||o.push(`${r}.valor é obrigatório.`)}}function qf(e){const n=[];return Dt(e)?(co(e.id,"id",n),co(e.nome,"nome",n),Dt(e.parametros)||n.push("parametros deve ser um objeto."),Array.isArray(e.regras)||n.push("regras deve ser uma lista."),Dt(e.parametros)&&Array.isArray(e.regras)&&e.regras.forEach((t,o)=>Mf(t,o,e.parametros,n)),{valid:n.length===0,errors:n}):{valid:!1,errors:["O conjunto de regras deve ser um objeto."]}}function Ba(e){const n=qf(e);if(!n.valid)throw new TypeError(`Conjunto de regras inválido: ${n.errors.join(" ")}`);return e}function $f(e,{createdAt:n=new Date,updatedAt:t=n}={}){return Ba(e),{...Ra(e),source:"user",createdAt:Fn(n,"createdAt"),updatedAt:Fn(t,"updatedAt")}}function Ff(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var en={},Mo={},ot={},Gi;function Oo(){if(Gi)return ot;Gi=1;function e(l){return typeof l>"u"||l===null}function n(l){return typeof l=="object"&&l!==null}function t(l){return Array.isArray(l)?l:e(l)?[]:[l]}function o(l,s){if(s){const c=Object.keys(s);for(let u=0,d=c.length;u<d;u+=1){const p=c[u];l[p]=s[p]}}return l}function r(l,s){let c="";for(let u=0;u<s;u+=1)c+=l;return c}function i(l){return l===0&&Number.NEGATIVE_INFINITY===1/l}return ot.isNothing=e,ot.isObject=n,ot.toArray=t,ot.repeat=r,ot.isNegativeZero=i,ot.extend=o,ot}var jr,Wi;function Io(){if(Wi)return jr;Wi=1;function e(t,o){let r="";const i=t.reason||"(unknown reason)";return t.mark?(t.mark.name&&(r+='in "'+t.mark.name+'" '),r+="("+(t.mark.line+1)+":"+(t.mark.column+1)+")",!o&&t.mark.snippet&&(r+=`

`+t.mark.snippet),i+" "+r):i}function n(t,o){Error.call(this),this.name="YAMLException",this.reason=t,this.mark=o,this.message=e(this,!1),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack||""}return n.prototype=Object.create(Error.prototype),n.prototype.constructor=n,n.prototype.toString=function(o){return this.name+": "+e(this,o)},jr=n,jr}var Dr,Yi;function Vf(){if(Yi)return Dr;Yi=1;const e=Oo();function n(r,i,l,s,c){let u="",d="";const p=Math.floor(c/2)-1;return s-i>p&&(u=" ... ",i=s-p+u.length),l-s>p&&(d=" ...",l=s+p-d.length),{str:u+r.slice(i,l).replace(/\t/g,"→")+d,pos:s-i+u.length}}function t(r,i){return e.repeat(" ",i-r.length)+r}function o(r,i){if(i=Object.create(i||null),!r.buffer)return null;i.maxLength||(i.maxLength=79),typeof i.indent!="number"&&(i.indent=1),typeof i.linesBefore!="number"&&(i.linesBefore=3),typeof i.linesAfter!="number"&&(i.linesAfter=2);const l=/\r?\n|\r|\0/g,s=[0],c=[];let u,d=-1;for(;u=l.exec(r.buffer);)c.push(u.index),s.push(u.index+u[0].length),r.position<=u.index&&d<0&&(d=s.length-2);d<0&&(d=s.length-1);let p="";const m=Math.min(r.line+i.linesAfter,c.length).toString().length,v=i.maxLength-(i.indent+m+3);for(let N=1;N<=i.linesBefore&&!(d-N<0);N++){const T=n(r.buffer,s[d-N],c[d-N],r.position-(s[d]-s[d-N]),v);p=e.repeat(" ",i.indent)+t((r.line-N+1).toString(),m)+" | "+T.str+`
`+p}const S=n(r.buffer,s[d],c[d],r.position,v);p+=e.repeat(" ",i.indent)+t((r.line+1).toString(),m)+" | "+S.str+`
`,p+=e.repeat("-",i.indent+m+3+S.pos)+`^
`;for(let N=1;N<=i.linesAfter&&!(d+N>=c.length);N++){const T=n(r.buffer,s[d+N],c[d+N],r.position-(s[d]-s[d+N]),v);p+=e.repeat(" ",i.indent)+t((r.line+N+1).toString(),m)+" | "+T.str+`
`}return p.replace(/\n$/,"")}return Dr=o,Dr}var Mr,Ji;function pn(){if(Ji)return Mr;Ji=1;const e=Io(),n=["kind","multi","resolve","construct","instanceOf","predicate","represent","representName","defaultStyle","styleAliases"],t=["scalar","sequence","mapping"];function o(i){const l={};return i!==null&&Object.keys(i).forEach(function(s){i[s].forEach(function(c){l[String(c)]=s})}),l}function r(i,l){if(l=l||{},Object.keys(l).forEach(function(s){if(n.indexOf(s)===-1)throw new e('Unknown option "'+s+'" is met in definition of "'+i+'" YAML type.')}),this.options=l,this.tag=i,this.kind=l.kind||null,this.resolve=l.resolve||function(){return!0},this.construct=l.construct||function(s){return s},this.instanceOf=l.instanceOf||null,this.predicate=l.predicate||null,this.represent=l.represent||null,this.representName=l.representName||null,this.defaultStyle=l.defaultStyle||null,this.multi=l.multi||!1,this.styleAliases=o(l.styleAliases||null),t.indexOf(this.kind)===-1)throw new e('Unknown kind "'+this.kind+'" is specified for "'+i+'" YAML type.')}return Mr=r,Mr}var qr,Qi;function lc(){if(Qi)return qr;Qi=1;const e=Io(),n=pn();function t(i,l){const s=[];return i[l].forEach(function(c){let u=s.length;s.forEach(function(d,p){d.tag===c.tag&&d.kind===c.kind&&d.multi===c.multi&&(u=p)}),s[u]=c}),s}function o(){const i={scalar:{},sequence:{},mapping:{},fallback:{},multi:{scalar:[],sequence:[],mapping:[],fallback:[]}};function l(s){s.multi?(i.multi[s.kind].push(s),i.multi.fallback.push(s)):i[s.kind][s.tag]=i.fallback[s.tag]=s}for(let s=0,c=arguments.length;s<c;s+=1)arguments[s].forEach(l);return i}function r(i){return this.extend(i)}return r.prototype.extend=function(l){let s=[],c=[];if(l instanceof n)c.push(l);else if(Array.isArray(l))c=c.concat(l);else if(l&&(Array.isArray(l.implicit)||Array.isArray(l.explicit)))l.implicit&&(s=s.concat(l.implicit)),l.explicit&&(c=c.concat(l.explicit));else throw new e("Schema.extend argument should be a Type, [ Type ], or a schema definition ({ implicit: [...], explicit: [...] })");s.forEach(function(d){if(!(d instanceof n))throw new e("Specified list of YAML types (or a single Type object) contains a non-Type object.");if(d.loadKind&&d.loadKind!=="scalar")throw new e("There is a non-scalar type in the implicit list of a schema. Implicit resolving of such types is not supported.");if(d.multi)throw new e("There is a multi type in the implicit list of a schema. Multi tags can only be listed as explicit.")}),c.forEach(function(d){if(!(d instanceof n))throw new e("Specified list of YAML types (or a single Type object) contains a non-Type object.")});const u=Object.create(r.prototype);return u.implicit=(this.implicit||[]).concat(s),u.explicit=(this.explicit||[]).concat(c),u.compiledImplicit=t(u,"implicit"),u.compiledExplicit=t(u,"explicit"),u.compiledTypeMap=o(u.compiledImplicit,u.compiledExplicit),u},qr=r,qr}var $r,Xi;function sc(){if(Xi)return $r;Xi=1;const e=pn();return $r=new e("tag:yaml.org,2002:str",{kind:"scalar",construct:function(n){return n!==null?n:""}}),$r}var Fr,Zi;function cc(){if(Zi)return Fr;Zi=1;const e=pn();return Fr=new e("tag:yaml.org,2002:seq",{kind:"sequence",construct:function(n){return n!==null?n:[]}}),Fr}var Vr,el;function uc(){if(el)return Vr;el=1;const e=pn();return Vr=new e("tag:yaml.org,2002:map",{kind:"mapping",construct:function(n){return n!==null?n:{}}}),Vr}var zr,nl;function dc(){if(nl)return zr;nl=1;const e=lc();return zr=new e({explicit:[sc(),cc(),uc()]}),zr}var Ur,tl;function fc(){if(tl)return Ur;tl=1;const e=pn();function n(r){if(r===null)return!0;const i=r.length;return i===1&&r==="~"||i===4&&(r==="null"||r==="Null"||r==="NULL")}function t(){return null}function o(r){return r===null}return Ur=new e("tag:yaml.org,2002:null",{kind:"scalar",resolve:n,construct:t,predicate:o,represent:{canonical:function(){return"~"},lowercase:function(){return"null"},uppercase:function(){return"NULL"},camelcase:function(){return"Null"},empty:function(){return""}},defaultStyle:"lowercase"}),Ur}var Hr,ol;function pc(){if(ol)return Hr;ol=1;const e=pn();function n(r){if(r===null)return!1;const i=r.length;return i===4&&(r==="true"||r==="True"||r==="TRUE")||i===5&&(r==="false"||r==="False"||r==="FALSE")}function t(r){return r==="true"||r==="True"||r==="TRUE"}function o(r){return Object.prototype.toString.call(r)==="[object Boolean]"}return Hr=new e("tag:yaml.org,2002:bool",{kind:"scalar",resolve:n,construct:t,predicate:o,represent:{lowercase:function(r){return r?"true":"false"},uppercase:function(r){return r?"TRUE":"FALSE"},camelcase:function(r){return r?"True":"False"}},defaultStyle:"lowercase"}),Hr}var Kr,rl;function mc(){if(rl)return Kr;rl=1;const e=Oo(),n=pn();function t(u){return u>=48&&u<=57||u>=65&&u<=70||u>=97&&u<=102}function o(u){return u>=48&&u<=55}function r(u){return u>=48&&u<=57}function i(u){if(u===null)return!1;const d=u.length;let p=0,m=!1;if(!d)return!1;let v=u[p];if((v==="-"||v==="+")&&(v=u[++p]),v==="0"){if(p+1===d)return!0;if(v=u[++p],v==="b"){for(p++;p<d;p++){if(v=u[p],v!=="0"&&v!=="1")return!1;m=!0}return m&&isFinite(l(u))}if(v==="x"){for(p++;p<d;p++){if(!t(u.charCodeAt(p)))return!1;m=!0}return m&&isFinite(l(u))}if(v==="o"){for(p++;p<d;p++){if(!o(u.charCodeAt(p)))return!1;m=!0}return m&&isFinite(l(u))}}for(;p<d;p++){if(!r(u.charCodeAt(p)))return!1;m=!0}return m?isFinite(l(u)):!1}function l(u){let d=u,p=1,m=d[0];if((m==="-"||m==="+")&&(m==="-"&&(p=-1),d=d.slice(1),m=d[0]),d==="0")return 0;if(m==="0"){if(d[1]==="b")return p*parseInt(d.slice(2),2);if(d[1]==="x")return p*parseInt(d.slice(2),16);if(d[1]==="o")return p*parseInt(d.slice(2),8)}return p*parseInt(d,10)}function s(u){return l(u)}function c(u){return Object.prototype.toString.call(u)==="[object Number]"&&u%1===0&&!e.isNegativeZero(u)}return Kr=new n("tag:yaml.org,2002:int",{kind:"scalar",resolve:i,construct:s,predicate:c,represent:{binary:function(u){return u>=0?"0b"+u.toString(2):"-0b"+u.toString(2).slice(1)},octal:function(u){return u>=0?"0o"+u.toString(8):"-0o"+u.toString(8).slice(1)},decimal:function(u){return u.toString(10)},hexadecimal:function(u){return u>=0?"0x"+u.toString(16).toUpperCase():"-0x"+u.toString(16).toUpperCase().slice(1)}},defaultStyle:"decimal",styleAliases:{binary:[2,"bin"],octal:[8,"oct"],decimal:[10,"dec"],hexadecimal:[16,"hex"]}}),Kr}var Gr,al;function hc(){if(al)return Gr;al=1;const e=Oo(),n=pn(),t=new RegExp("^(?:[-+]?(?:[0-9]+)(?:\\.[0-9]*)?(?:[eE][-+]?[0-9]+)?|\\.[0-9]+(?:[eE][-+]?[0-9]+)?|[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$"),o=new RegExp("^(?:[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$");function r(u){return u===null||!t.test(u)?!1:isFinite(parseFloat(u,10))?!0:o.test(u)}function i(u){let d=u.toLowerCase();const p=d[0]==="-"?-1:1;return"+-".indexOf(d[0])>=0&&(d=d.slice(1)),d===".inf"?p===1?Number.POSITIVE_INFINITY:Number.NEGATIVE_INFINITY:d===".nan"?NaN:p*parseFloat(d,10)}const l=/^[-+]?[0-9]+e/;function s(u,d){if(isNaN(u))switch(d){case"lowercase":return".nan";case"uppercase":return".NAN";case"camelcase":return".NaN"}else if(Number.POSITIVE_INFINITY===u)switch(d){case"lowercase":return".inf";case"uppercase":return".INF";case"camelcase":return".Inf"}else if(Number.NEGATIVE_INFINITY===u)switch(d){case"lowercase":return"-.inf";case"uppercase":return"-.INF";case"camelcase":return"-.Inf"}else if(e.isNegativeZero(u))return"-0.0";const p=u.toString(10);return l.test(p)?p.replace("e",".e"):p}function c(u){return Object.prototype.toString.call(u)==="[object Number]"&&(u%1!==0||e.isNegativeZero(u))}return Gr=new n("tag:yaml.org,2002:float",{kind:"scalar",resolve:r,construct:i,predicate:c,represent:s,defaultStyle:"lowercase"}),Gr}var Wr,il;function vc(){return il||(il=1,Wr=dc().extend({implicit:[fc(),pc(),mc(),hc()]})),Wr}var Yr,ll;function gc(){return ll||(ll=1,Yr=vc()),Yr}var Jr,sl;function _c(){if(sl)return Jr;sl=1;const e=pn(),n=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9])-([0-9][0-9])$"),t=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9]?)-([0-9][0-9]?)(?:[Tt]|[ \\t]+)([0-9][0-9]?):([0-9][0-9]):([0-9][0-9])(?:\\.([0-9]*))?(?:[ \\t]*(Z|([-+])([0-9][0-9]?)(?::([0-9][0-9]))?))?$");function o(l){return l===null?!1:n.exec(l)!==null||t.exec(l)!==null}function r(l){let s=0,c=null,u=n.exec(l);if(u===null&&(u=t.exec(l)),u===null)throw new Error("Date resolve error");const d=+u[1],p=+u[2]-1,m=+u[3];if(!u[4])return new Date(Date.UTC(d,p,m));const v=+u[4],S=+u[5],N=+u[6];if(u[7]){for(s=u[7].slice(0,3);s.length<3;)s+="0";s=+s}if(u[9]){const k=+u[10],x=+(u[11]||0);c=(k*60+x)*6e4,u[9]==="-"&&(c=-c)}const T=new Date(Date.UTC(d,p,m,v,S,N,s));return c&&T.setTime(T.getTime()-c),T}function i(l){return l.toISOString()}return Jr=new e("tag:yaml.org,2002:timestamp",{kind:"scalar",resolve:o,construct:r,instanceOf:Date,represent:i}),Jr}var Qr,cl;function bc(){if(cl)return Qr;cl=1;const e=pn();function n(t){return t==="<<"||t===null}return Qr=new e("tag:yaml.org,2002:merge",{kind:"scalar",resolve:n}),Qr}var Xr,ul;function yc(){if(ul)return Xr;ul=1;const e=pn(),n=`ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=
\r`;function t(l){if(l===null)return!1;let s=0;const c=l.length,u=n;for(let d=0;d<c;d++){const p=u.indexOf(l.charAt(d));if(!(p>64)){if(p<0)return!1;s+=6}}return s%8===0}function o(l){const s=l.replace(/[\r\n=]/g,""),c=s.length,u=n;let d=0;const p=[];for(let v=0;v<c;v++)v%4===0&&v&&(p.push(d>>16&255),p.push(d>>8&255),p.push(d&255)),d=d<<6|u.indexOf(s.charAt(v));const m=c%4*6;return m===0?(p.push(d>>16&255),p.push(d>>8&255),p.push(d&255)):m===18?(p.push(d>>10&255),p.push(d>>2&255)):m===12&&p.push(d>>4&255),new Uint8Array(p)}function r(l){let s="",c=0;const u=l.length,d=n;for(let m=0;m<u;m++)m%3===0&&m&&(s+=d[c>>18&63],s+=d[c>>12&63],s+=d[c>>6&63],s+=d[c&63]),c=(c<<8)+l[m];const p=u%3;return p===0?(s+=d[c>>18&63],s+=d[c>>12&63],s+=d[c>>6&63],s+=d[c&63]):p===2?(s+=d[c>>10&63],s+=d[c>>4&63],s+=d[c<<2&63],s+=d[64]):p===1&&(s+=d[c>>2&63],s+=d[c<<4&63],s+=d[64],s+=d[64]),s}function i(l){return Object.prototype.toString.call(l)==="[object Uint8Array]"}return Xr=new e("tag:yaml.org,2002:binary",{kind:"scalar",resolve:t,construct:o,predicate:i,represent:r}),Xr}var Zr,dl;function Ac(){if(dl)return Zr;dl=1;const e=pn(),n=Object.prototype.hasOwnProperty,t=Object.prototype.toString;function o(i){if(i===null)return!0;const l={},s=i;for(let c=0,u=s.length;c<u;c+=1){const d=s[c];let p=!1;if(t.call(d)!=="[object Object]")return!1;let m;for(m in d)if(n.call(d,m))if(!p)p=!0;else return!1;if(!p||n.call(l,m))return!1;Object.defineProperty(l,m,{value:!0})}return!0}function r(i){return i!==null?i:[]}return Zr=new e("tag:yaml.org,2002:omap",{kind:"sequence",resolve:o,construct:r}),Zr}var ea,fl;function Nc(){if(fl)return ea;fl=1;const e=pn(),n=Object.prototype.toString;function t(r){if(r===null)return!0;const i=r,l=new Array(i.length);for(let s=0,c=i.length;s<c;s+=1){const u=i[s];if(n.call(u)!=="[object Object]")return!1;const d=Object.keys(u);if(d.length!==1)return!1;l[s]=[d[0],u[d[0]]]}return!0}function o(r){if(r===null)return[];const i=r,l=new Array(i.length);for(let s=0,c=i.length;s<c;s+=1){const u=i[s],d=Object.keys(u);l[s]=[d[0],u[d[0]]]}return l}return ea=new e("tag:yaml.org,2002:pairs",{kind:"sequence",resolve:t,construct:o}),ea}var na,pl;function xc(){if(pl)return na;pl=1;const e=pn(),n=Object.prototype.hasOwnProperty;function t(r){if(r===null)return!0;const i=r;for(const l in i)if(n.call(i,l)&&i[l]!==null)return!1;return!0}function o(r){return r!==null?r:{}}return na=new e("tag:yaml.org,2002:set",{kind:"mapping",resolve:t,construct:o}),na}var ta,ml;function Ya(){return ml||(ml=1,ta=gc().extend({implicit:[_c(),bc()],explicit:[yc(),Ac(),Nc(),xc()]})),ta}var hl;function zf(){if(hl)return Mo;hl=1;const e=Oo(),n=Io(),t=Vf(),o=Ya(),r=Object.prototype.hasOwnProperty,i=1,l=2,s=3,c=4,u=1,d=2,p=3,m=/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F-\x84\x86-\x9F\uFFFE\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/,v=/[\x85\u2028\u2029]/,S=/[,\[\]{}]/,N=/^(?:!|!!|![0-9A-Za-z-]+!)$/,T=/^(?:!|[^,\[\]{}])(?:%[0-9a-f]{2}|[0-9a-z\-#;/?:@&=+$,_.!~*'()\[\]])*$/i;function k(a){return Object.prototype.toString.call(a)}function x(a){return a===10||a===13}function M(a){return a===9||a===32}function z(a){return a===9||a===32||a===10||a===13}function de(a){return a===44||a===91||a===93||a===123||a===125}function ae(a){if(a>=48&&a<=57)return a-48;const b=a|32;return b>=97&&b<=102?b-97+10:-1}function $(a){return a===120?2:a===117?4:a===85?8:0}function ie(a){return a>=48&&a<=57?a-48:-1}function oe(a){switch(a){case 48:return"\0";case 97:return"\x07";case 98:return"\b";case 116:return"	";case 9:return"	";case 110:return`
`;case 118:return"\v";case 102:return"\f";case 114:return"\r";case 101:return"\x1B";case 32:return" ";case 34:return'"';case 47:return"/";case 92:return"\\";case 78:return"";case 95:return" ";case 76:return"\u2028";case 80:return"\u2029";default:return""}}function Y(a){return a<=65535?String.fromCharCode(a):String.fromCharCode((a-65536>>10)+55296,(a-65536&1023)+56320)}function q(a,b,w){b==="__proto__"?Object.defineProperty(a,b,{configurable:!0,enumerable:!0,writable:!0,value:w}):a[b]=w}const B=new Array(256),X=new Array(256);for(let a=0;a<256;a++)B[a]=oe(a)?1:0,X[a]=oe(a);function Z(a,b){this.input=a,this.filename=b.filename||null,this.schema=b.schema||o,this.onWarning=b.onWarning||null,this.legacy=b.legacy||!1,this.json=b.json||!1,this.listener=b.listener||null,this.maxDepth=typeof b.maxDepth=="number"?b.maxDepth:100,this.maxTotalMergeKeys=typeof b.maxTotalMergeKeys=="number"?b.maxTotalMergeKeys:1e4,this.implicitTypes=this.schema.compiledImplicit,this.typeMap=this.schema.compiledTypeMap,this.length=a.length,this.position=0,this.line=0,this.lineStart=0,this.lineIndent=0,this.depth=0,this.totalMergeKeys=0,this.firstTabInLine=-1,this.documents=[],this.anchorMapTransactions=[]}function Fe(a,b){const w={name:a.filename,buffer:a.input.slice(0,-1),position:a.position,line:a.line,column:a.position-a.lineStart};return w.snippet=t(w),new n(b,w)}function Q(a,b){throw Fe(a,b)}function Be(a,b){a.onWarning&&a.onWarning.call(null,Fe(a,b))}function xe(a,b,w){const C=a.anchorMapTransactions;if(C.length!==0){const R=C[C.length-1];r.call(R,b)||(R[b]={existed:r.call(a.anchorMap,b),value:a.anchorMap[b]})}a.anchorMap[b]=w}function vn(a){a.anchorMapTransactions.push(Object.create(null))}function Ze(a){const b=a.anchorMapTransactions.pop(),w=a.anchorMapTransactions;if(w.length===0)return;const C=w[w.length-1],R=Object.keys(b);for(let H=0,f=R.length;H<f;H+=1){const A=R[H];r.call(C,A)||(C[A]=b[A])}}function mn(a){const b=a.anchorMapTransactions.pop(),w=Object.keys(b);for(let C=w.length-1;C>=0;C-=1){const R=b[w[C]];R.existed?a.anchorMap[w[C]]=R.value:delete a.anchorMap[w[C]]}}function We(a){return{position:a.position,line:a.line,lineStart:a.lineStart,lineIndent:a.lineIndent,firstTabInLine:a.firstTabInLine,tag:a.tag,anchor:a.anchor,kind:a.kind,result:a.result}}function gn(a,b){a.position=b.position,a.line=b.line,a.lineStart=b.lineStart,a.lineIndent=b.lineIndent,a.firstTabInLine=b.firstTabInLine,a.tag=b.tag,a.anchor=b.anchor,a.kind=b.kind,a.result=b.result}const wn={YAML:function(b,w,C){b.version!==null&&Q(b,"duplication of %YAML directive"),C.length!==1&&Q(b,"YAML directive accepts exactly one argument");const R=/^([0-9]+)\.([0-9]+)$/.exec(C[0]);R===null&&Q(b,"ill-formed argument of the YAML directive");const H=parseInt(R[1],10),f=parseInt(R[2],10);H!==1&&Q(b,"unacceptable YAML version of the document"),b.version=C[0],b.checkLineBreaks=f<2,f!==1&&f!==2&&Be(b,"unsupported YAML version of the document")},TAG:function(b,w,C){let R;C.length!==2&&Q(b,"TAG directive accepts exactly two arguments");const H=C[0];R=C[1],N.test(H)||Q(b,"ill-formed tag handle (first argument) of the TAG directive"),r.call(b.tagMap,H)&&Q(b,'there is a previously declared suffix for "'+H+'" tag handle'),T.test(R)||Q(b,"ill-formed tag prefix (second argument) of the TAG directive");try{R=decodeURIComponent(R)}catch{Q(b,"tag prefix is malformed: "+R)}b.tagMap[H]=R}};function Ke(a,b,w,C){if(b<w){const R=a.input.slice(b,w);if(C)for(let H=0,f=R.length;H<f;H+=1){const A=R.charCodeAt(H);A===9||A>=32&&A<=1114111||Q(a,"expected valid JSON character")}else m.test(R)&&Q(a,"the stream contains non-printable characters");a.result+=R}}function Ge(a,b,w,C){e.isObject(w)||Q(a,"cannot merge mappings; the provided source object is unacceptable");const R=Object.keys(w);for(let H=0,f=R.length;H<f;H+=1){const A=R[H];a.maxTotalMergeKeys!==-1&&++a.totalMergeKeys>a.maxTotalMergeKeys&&Q(a,"merge keys exceeded maxTotalMergeKeys ("+a.maxTotalMergeKeys+")"),r.call(b,A)||(q(b,A,w[A]),C[A]=!0)}}function O(a,b,w,C,R,H,f,A,D){if(Array.isArray(R)){R=Array.prototype.slice.call(R);for(let P=0,L=R.length;P<L;P+=1)Array.isArray(R[P])&&Q(a,"nested arrays are not supported inside keys"),typeof R=="object"&&k(R[P])==="[object Object]"&&(R[P]="[object Object]")}if(typeof R=="object"&&k(R)==="[object Object]"&&(R="[object Object]"),R=String(R),b===null&&(b={}),C==="tag:yaml.org,2002:merge")if(Array.isArray(H))for(let P=0,L=H.length;P<L;P+=1)Ge(a,b,H[P],w);else Ge(a,b,H,w);else!a.json&&!r.call(w,R)&&r.call(b,R)&&(a.line=f||a.line,a.lineStart=A||a.lineStart,a.position=D||a.position,Q(a,"duplicated mapping key")),q(b,R,H),delete w[R];return b}function se(a){const b=a.input.charCodeAt(a.position);b===10?a.position++:b===13?(a.position++,a.input.charCodeAt(a.position)===10&&a.position++):Q(a,"a line break is expected"),a.line+=1,a.lineStart=a.position,a.firstTabInLine=-1}function W(a,b,w){let C=0,R=a.input.charCodeAt(a.position);for(;R!==0;){for(;M(R);)R===9&&a.firstTabInLine===-1&&(a.firstTabInLine=a.position),R=a.input.charCodeAt(++a.position);if(b&&R===35)do R=a.input.charCodeAt(++a.position);while(R!==10&&R!==13&&R!==0);if(x(R))for(se(a),R=a.input.charCodeAt(a.position),C++,a.lineIndent=0;R===32;)a.lineIndent++,R=a.input.charCodeAt(++a.position);else break}return w!==-1&&C!==0&&a.lineIndent<w&&Be(a,"deficient indentation"),C}function pe(a){let b=a.position,w=a.input.charCodeAt(b);return!!((w===45||w===46)&&w===a.input.charCodeAt(b+1)&&w===a.input.charCodeAt(b+2)&&(b+=3,w=a.input.charCodeAt(b),w===0||z(w)))}function Ae(a,b){b===1?a.result+=" ":b>1&&(a.result+=e.repeat(`
`,b-1))}function h(a,b,w){let C,R,H,f,A,D;const P=a.kind,L=a.result;let K=a.input.charCodeAt(a.position);if(z(K)||de(K)||K===35||K===38||K===42||K===33||K===124||K===62||K===39||K===34||K===37||K===64||K===96)return!1;if(K===63||K===45){const U=a.input.charCodeAt(a.position+1);if(z(U)||w&&de(U))return!1}for(a.kind="scalar",a.result="",C=R=a.position,H=!1;K!==0;){if(K===58){const U=a.input.charCodeAt(a.position+1);if(z(U)||w&&de(U))break}else if(K===35){const U=a.input.charCodeAt(a.position-1);if(z(U))break}else{if(a.position===a.lineStart&&pe(a)||w&&de(K))break;if(x(K))if(f=a.line,A=a.lineStart,D=a.lineIndent,W(a,!1,-1),a.lineIndent>=b){H=!0,K=a.input.charCodeAt(a.position);continue}else{a.position=R,a.line=f,a.lineStart=A,a.lineIndent=D;break}}H&&(Ke(a,C,R,!1),Ae(a,a.line-f),C=R=a.position,H=!1),M(K)||(R=a.position+1),K=a.input.charCodeAt(++a.position)}return Ke(a,C,R,!1),a.result?!0:(a.kind=P,a.result=L,!1)}function g(a,b){let w,C,R=a.input.charCodeAt(a.position);if(R!==39)return!1;for(a.kind="scalar",a.result="",a.position++,w=C=a.position;(R=a.input.charCodeAt(a.position))!==0;)if(R===39)if(Ke(a,w,a.position,!0),R=a.input.charCodeAt(++a.position),R===39)w=a.position,a.position++,C=a.position;else return!0;else x(R)?(Ke(a,w,C,!0),Ae(a,W(a,!1,b)),w=C=a.position):a.position===a.lineStart&&pe(a)?Q(a,"unexpected end of the document within a single quoted scalar"):(a.position++,M(R)||(C=a.position));Q(a,"unexpected end of the stream within a single quoted scalar")}function y(a,b){let w,C,R,H=a.input.charCodeAt(a.position);if(H!==34)return!1;for(a.kind="scalar",a.result="",a.position++,w=C=a.position;(H=a.input.charCodeAt(a.position))!==0;){if(H===34)return Ke(a,w,a.position,!0),a.position++,!0;if(H===92){if(Ke(a,w,a.position,!0),H=a.input.charCodeAt(++a.position),x(H))W(a,!1,b);else if(H<256&&B[H])a.result+=X[H],a.position++;else if((R=$(H))>0){let f=R,A=0;for(;f>0;f--)H=a.input.charCodeAt(++a.position),(R=ae(H))>=0?A=(A<<4)+R:Q(a,"expected hexadecimal character");a.result+=Y(A),a.position++}else Q(a,"unknown escape sequence");w=C=a.position}else x(H)?(Ke(a,w,C,!0),Ae(a,W(a,!1,b)),w=C=a.position):a.position===a.lineStart&&pe(a)?Q(a,"unexpected end of the document within a double quoted scalar"):(a.position++,M(H)||(C=a.position))}Q(a,"unexpected end of the stream within a double quoted scalar")}function I(a,b){let w=!0,C,R,H;const f=a.tag;let A;const D=a.anchor;let P,L,K,U;const ue=Object.create(null);let ce,he,ge,Ce=a.input.charCodeAt(a.position);if(Ce===91)P=93,U=!1,A=[];else if(Ce===123)P=125,U=!0,A={};else return!1;for(a.anchor!==null&&xe(a,a.anchor,A),Ce=a.input.charCodeAt(++a.position);Ce!==0;){if(W(a,!0,b),Ce=a.input.charCodeAt(a.position),Ce===P)return a.position++,a.tag=f,a.anchor=D,a.kind=U?"mapping":"sequence",a.result=A,!0;if(w?Ce===44&&Q(a,"expected the node content, but found ','"):Q(a,"missed comma between flow collection entries"),he=ce=ge=null,L=K=!1,Ce===63){const Ve=a.input.charCodeAt(a.position+1);z(Ve)&&(L=K=!0,a.position++,W(a,!0,b))}C=a.line,R=a.lineStart,H=a.position,te(a,b,i,!1,!0),he=a.tag,ce=a.result,W(a,!0,b),Ce=a.input.charCodeAt(a.position),(K||a.line===C)&&Ce===58&&(L=!0,Ce=a.input.charCodeAt(++a.position),W(a,!0,b),te(a,b,i,!1,!0),ge=a.result),U?O(a,A,ue,he,ce,ge,C,R,H):L?A.push(O(a,null,ue,he,ce,ge,C,R,H)):A.push(ce),W(a,!0,b),Ce=a.input.charCodeAt(a.position),Ce===44?(w=!0,Ce=a.input.charCodeAt(++a.position)):w=!1}Q(a,"unexpected end of the stream within a flow collection")}function j(a,b){let w,C=u,R=!1,H=!1,f=b,A=0,D=!1,P,L=a.input.charCodeAt(a.position);if(L===124)w=!1;else if(L===62)w=!0;else return!1;for(a.kind="scalar",a.result="";L!==0;)if(L=a.input.charCodeAt(++a.position),L===43||L===45)u===C?C=L===43?p:d:Q(a,"repeat of a chomping mode identifier");else if((P=ie(L))>=0)P===0?Q(a,"bad explicit indentation width of a block scalar; it cannot be less than one"):H?Q(a,"repeat of an indentation width identifier"):(f=b+P-1,H=!0);else break;if(M(L)){do L=a.input.charCodeAt(++a.position);while(M(L));if(L===35)do L=a.input.charCodeAt(++a.position);while(!x(L)&&L!==0)}for(;L!==0;){for(se(a),a.lineIndent=0,L=a.input.charCodeAt(a.position);(!H||a.lineIndent<f)&&L===32;)a.lineIndent++,L=a.input.charCodeAt(++a.position);if(!H&&a.lineIndent>f&&(f=a.lineIndent),x(L)){A++;continue}if(!H&&f===0&&Q(a,"missing indentation for block scalar"),a.lineIndent<f){C===p?a.result+=e.repeat(`
`,R?1+A:A):C===u&&R&&(a.result+=`
`);break}w?M(L)?(D=!0,a.result+=e.repeat(`
`,R?1+A:A)):D?(D=!1,a.result+=e.repeat(`
`,A+1)):A===0?R&&(a.result+=" "):a.result+=e.repeat(`
`,A):a.result+=e.repeat(`
`,R?1+A:A),R=!0,H=!0,A=0;const K=a.position;for(;!x(L)&&L!==0;)L=a.input.charCodeAt(++a.position);Ke(a,K,a.position,!1)}return!0}function E(a,b){const w=a.tag,C=a.anchor,R=[];let H=!1;if(a.firstTabInLine!==-1)return!1;a.anchor!==null&&xe(a,a.anchor,R);let f=a.input.charCodeAt(a.position);for(;f!==0&&(a.firstTabInLine!==-1&&(a.position=a.firstTabInLine,Q(a,"tab characters must not be used in indentation")),f===45);){const A=a.input.charCodeAt(a.position+1);if(!z(A))break;if(H=!0,a.position++,W(a,!0,-1)&&a.lineIndent<=b){R.push(null),f=a.input.charCodeAt(a.position);continue}const D=a.line;if(te(a,b,s,!1,!0),R.push(a.result),W(a,!0,-1),f=a.input.charCodeAt(a.position),(a.line===D||a.lineIndent>b)&&f!==0)Q(a,"bad indentation of a sequence entry");else if(a.lineIndent<b)break}return H?(a.tag=w,a.anchor=C,a.kind="sequence",a.result=R,!0):!1}function ne(a,b,w){let C,R,H,f;const A=a.tag,D=a.anchor,P={},L=Object.create(null);let K=null,U=null,ue=null,ce=!1,he=!1;if(a.firstTabInLine!==-1)return!1;a.anchor!==null&&xe(a,a.anchor,P);let ge=a.input.charCodeAt(a.position);for(;ge!==0;){!ce&&a.firstTabInLine!==-1&&(a.position=a.firstTabInLine,Q(a,"tab characters must not be used in indentation"));const Ce=a.input.charCodeAt(a.position+1),Ve=a.line;if((ge===63||ge===58)&&z(Ce))ge===63?(ce&&(O(a,P,L,K,U,null,R,H,f),K=U=ue=null),he=!0,ce=!0,C=!0):ce?(ce=!1,C=!0):Q(a,"incomplete explicit mapping pair; a key node is missed; or followed by a non-tabulated empty line"),a.position+=1,ge=Ce;else{if(R=a.line,H=a.lineStart,f=a.position,!te(a,w,l,!1,!0))break;if(a.line===Ve){for(ge=a.input.charCodeAt(a.position);M(ge);)ge=a.input.charCodeAt(++a.position);if(ge===58)ge=a.input.charCodeAt(++a.position),z(ge)||Q(a,"a whitespace character is expected after the key-value separator within a block mapping"),ce&&(O(a,P,L,K,U,null,R,H,f),K=U=ue=null),he=!0,ce=!1,C=!1,K=a.tag,U=a.result;else if(he)Q(a,"can not read an implicit mapping pair; a colon is missed");else return a.tag=A,a.anchor=D,!0}else if(he)Q(a,"can not read a block mapping entry; a multiline key may not be an implicit key");else return a.tag=A,a.anchor=D,!0}if((a.line===Ve||a.lineIndent>b)&&(ce&&(R=a.line,H=a.lineStart,f=a.position),te(a,b,c,!0,C)&&(ce?U=a.result:ue=a.result),ce||(O(a,P,L,K,U,ue,R,H,f),K=U=ue=null),W(a,!0,-1),ge=a.input.charCodeAt(a.position)),(a.line===Ve||a.lineIndent>b)&&ge!==0)Q(a,"bad indentation of a mapping entry");else if(a.lineIndent<b)break}return ce&&O(a,P,L,K,U,null,R,H,f),he&&(a.tag=A,a.anchor=D,a.kind="mapping",a.result=P),he}function ee(a){let b=!1,w=!1,C,R,H=a.input.charCodeAt(a.position);if(H!==33)return!1;a.tag!==null&&Q(a,"duplication of a tag property"),H=a.input.charCodeAt(++a.position),H===60?(b=!0,H=a.input.charCodeAt(++a.position)):H===33?(w=!0,C="!!",H=a.input.charCodeAt(++a.position)):C="!";let f=a.position;if(b){do H=a.input.charCodeAt(++a.position);while(H!==0&&H!==62);a.position<a.length?(R=a.input.slice(f,a.position),H=a.input.charCodeAt(++a.position)):Q(a,"unexpected end of the stream within a verbatim tag")}else{for(;H!==0&&!z(H);)H===33&&(w?Q(a,"tag suffix cannot contain exclamation marks"):(C=a.input.slice(f-1,a.position+1),N.test(C)||Q(a,"named tag handle cannot contain such characters"),w=!0,f=a.position+1)),H=a.input.charCodeAt(++a.position);R=a.input.slice(f,a.position),S.test(R)&&Q(a,"tag suffix cannot contain flow indicator characters")}R&&!T.test(R)&&Q(a,"tag name cannot contain such characters: "+R);try{R=decodeURIComponent(R)}catch{Q(a,"tag name is malformed: "+R)}return b?a.tag=R:r.call(a.tagMap,C)?a.tag=a.tagMap[C]+R:C==="!"?a.tag="!"+R:C==="!!"?a.tag="tag:yaml.org,2002:"+R:Q(a,'undeclared tag handle "'+C+'"'),!0}function J(a){let b=a.input.charCodeAt(a.position);if(b!==38)return!1;a.anchor!==null&&Q(a,"duplication of an anchor property"),b=a.input.charCodeAt(++a.position);const w=a.position;for(;b!==0&&!z(b)&&!de(b);)b=a.input.charCodeAt(++a.position);return a.position===w&&Q(a,"name of an anchor node must contain at least one character"),a.anchor=a.input.slice(w,a.position),!0}function F(a){let b=a.input.charCodeAt(a.position);if(b!==42)return!1;b=a.input.charCodeAt(++a.position);const w=a.position;for(;b!==0&&!z(b)&&!de(b);)b=a.input.charCodeAt(++a.position);a.position===w&&Q(a,"name of an alias node must contain at least one character");const C=a.input.slice(w,a.position);return r.call(a.anchorMap,C)||Q(a,'unidentified alias "'+C+'"'),a.result=a.anchorMap[C],W(a,!0,-1),!0}function ve(a,b,w,C){const R=We(a);return vn(a),gn(a,b),a.tag=null,a.anchor=null,a.kind=null,a.result=null,ne(a,w,C)&&a.kind==="mapping"?(Ze(a),!0):(mn(a),gn(a,R),!1)}function te(a,b,w,C,R){let H,f,A=1,D=!1,P=!1,L=null,K,U,ue;a.depth>=a.maxDepth&&Q(a,"nesting exceeded maxDepth ("+a.maxDepth+")"),a.depth+=1,a.listener!==null&&a.listener("open",a),a.tag=null,a.anchor=null,a.kind=null,a.result=null;const ce=H=f=c===w||s===w;if(C&&W(a,!0,-1)&&(D=!0,a.lineIndent>b?A=1:a.lineIndent===b?A=0:a.lineIndent<b&&(A=-1)),A===1)for(;;){const he=a.input.charCodeAt(a.position),ge=We(a);if(D&&(he===33&&a.tag!==null||he===38&&a.anchor!==null)||!ee(a)&&!J(a))break;L===null&&(L=ge),W(a,!0,-1)?(D=!0,f=ce,a.lineIndent>b?A=1:a.lineIndent===b?A=0:a.lineIndent<b&&(A=-1)):f=!1}if(f&&(f=D||R),A===1||c===w)if(i===w||l===w?U=b:U=b+1,ue=a.position-a.lineStart,A===1)if(f&&(E(a,ue)||ne(a,ue,U))||I(a,U))P=!0;else{const he=a.input.charCodeAt(a.position);L!==null&&ce&&!f&&he!==124&&he!==62&&ve(a,L,L.position-L.lineStart,U)||H&&j(a,U)||g(a,U)||y(a,U)?P=!0:F(a)?(P=!0,(a.tag!==null||a.anchor!==null)&&Q(a,"alias node should not have any properties")):h(a,U,i===w)&&(P=!0,a.tag===null&&(a.tag="?")),a.anchor!==null&&xe(a,a.anchor,a.result)}else A===0&&(P=f&&E(a,ue));if(a.tag===null)a.anchor!==null&&xe(a,a.anchor,a.result);else if(a.tag==="?"){a.result!==null&&a.kind!=="scalar"&&Q(a,'unacceptable node kind for !<?> tag; it should be "scalar", not "'+a.kind+'"');for(let he=0,ge=a.implicitTypes.length;he<ge;he+=1)if(K=a.implicitTypes[he],K.resolve(a.result)){a.result=K.construct(a.result),a.tag=K.tag,a.anchor!==null&&xe(a,a.anchor,a.result);break}}else if(a.tag!=="!"){if(r.call(a.typeMap[a.kind||"fallback"],a.tag))K=a.typeMap[a.kind||"fallback"][a.tag];else{K=null;const he=a.typeMap.multi[a.kind||"fallback"];for(let ge=0,Ce=he.length;ge<Ce;ge+=1)if(a.tag.slice(0,he[ge].tag.length)===he[ge].tag){K=he[ge];break}}K||Q(a,"unknown tag !<"+a.tag+">"),a.result!==null&&K.kind!==a.kind&&Q(a,"unacceptable node kind for !<"+a.tag+'> tag; it should be "'+K.kind+'", not "'+a.kind+'"'),K.resolve(a.result,a.tag)?(a.result=K.construct(a.result,a.tag),a.anchor!==null&&xe(a,a.anchor,a.result)):Q(a,"cannot resolve a node with !<"+a.tag+"> explicit tag")}return a.listener!==null&&a.listener("close",a),a.depth-=1,a.tag!==null||a.anchor!==null||P}function me(a){const b=a.position;let w=!1,C;for(a.version=null,a.checkLineBreaks=a.legacy,a.tagMap=Object.create(null),a.anchorMap=Object.create(null);(C=a.input.charCodeAt(a.position))!==0&&(W(a,!0,-1),C=a.input.charCodeAt(a.position),!(a.lineIndent>0||C!==37));){w=!0,C=a.input.charCodeAt(++a.position);let R=a.position;for(;C!==0&&!z(C);)C=a.input.charCodeAt(++a.position);const H=a.input.slice(R,a.position),f=[];for(H.length<1&&Q(a,"directive name must not be less than one character in length");C!==0;){for(;M(C);)C=a.input.charCodeAt(++a.position);if(C===35){do C=a.input.charCodeAt(++a.position);while(C!==0&&!x(C));break}if(x(C))break;for(R=a.position;C!==0&&!z(C);)C=a.input.charCodeAt(++a.position);f.push(a.input.slice(R,a.position))}C!==0&&se(a),r.call(wn,H)?wn[H](a,H,f):Be(a,'unknown document directive "'+H+'"')}if(W(a,!0,-1),a.lineIndent===0&&a.input.charCodeAt(a.position)===45&&a.input.charCodeAt(a.position+1)===45&&a.input.charCodeAt(a.position+2)===45?(a.position+=3,W(a,!0,-1)):w&&Q(a,"directives end mark is expected"),te(a,a.lineIndent-1,c,!1,!0),W(a,!0,-1),a.checkLineBreaks&&v.test(a.input.slice(b,a.position))&&Be(a,"non-ASCII line breaks are interpreted as content"),a.documents.push(a.result),a.position===a.lineStart&&pe(a)){a.input.charCodeAt(a.position)===46&&(a.position+=3,W(a,!0,-1));return}a.position<a.length-1&&Q(a,"end of the stream or a document separator is expected")}function be(a,b){a=String(a),b=b||{},a.length!==0&&(a.charCodeAt(a.length-1)!==10&&a.charCodeAt(a.length-1)!==13&&(a+=`
`),a.charCodeAt(0)===65279&&(a=a.slice(1)));const w=new Z(a,b),C=a.indexOf("\0");for(C!==-1&&(w.position=C,Q(w,"null byte is not allowed in input")),w.input+="\0";w.input.charCodeAt(w.position)===32;)w.lineIndent+=1,w.position+=1;for(;w.position<w.length-1;)me(w);return w.documents}function we(a,b,w){b!==null&&typeof b=="object"&&typeof w>"u"&&(w=b,b=null);const C=be(a,w);if(typeof b!="function")return C;for(let R=0,H=C.length;R<H;R+=1)b(C[R])}function Oe(a,b){const w=be(a,b);if(w.length!==0){if(w.length===1)return w[0];throw new n("expected a single document in the stream, but found more")}}return Mo.loadAll=we,Mo.load=Oe,Mo}var oa={},vl;function Uf(){if(vl)return oa;vl=1;const e=Oo(),n=Io(),t=Ya(),o=Object.prototype.toString,r=Object.prototype.hasOwnProperty,i=65279,l=9,s=10,c=13,u=32,d=33,p=34,m=35,v=37,S=38,N=39,T=42,k=44,x=45,M=58,z=61,de=62,ae=63,$=64,ie=91,oe=93,Y=96,q=123,B=124,X=125,Z={};Z[0]="\\0",Z[7]="\\a",Z[8]="\\b",Z[9]="\\t",Z[10]="\\n",Z[11]="\\v",Z[12]="\\f",Z[13]="\\r",Z[27]="\\e",Z[34]='\\"',Z[92]="\\\\",Z[133]="\\N",Z[160]="\\_",Z[8232]="\\L",Z[8233]="\\P";const Fe=["y","Y","yes","Yes","YES","on","On","ON","n","N","no","No","NO","off","Off","OFF"],Q=/^[-+]?[0-9_]+(?::[0-9_]+)+(?:\.[0-9_]*)?$/;function Be(f,A){if(A===null)return{};const D={},P=Object.keys(A);for(let L=0,K=P.length;L<K;L+=1){let U=P[L],ue=String(A[U]);U.slice(0,2)==="!!"&&(U="tag:yaml.org,2002:"+U.slice(2));const ce=f.compiledTypeMap.fallback[U];ce&&r.call(ce.styleAliases,ue)&&(ue=ce.styleAliases[ue]),D[U]=ue}return D}function xe(f){let A,D;const P=f.toString(16).toUpperCase();if(f<=255)A="x",D=2;else if(f<=65535)A="u",D=4;else if(f<=4294967295)A="U",D=8;else throw new n("code point within a string may not be greater than 0xFFFFFFFF");return"\\"+A+e.repeat("0",D-P.length)+P}const vn=1,Ze=2;function mn(f){this.schema=f.schema||t,this.indent=Math.max(1,f.indent||2),this.noArrayIndent=f.noArrayIndent||!1,this.skipInvalid=f.skipInvalid||!1,this.flowLevel=e.isNothing(f.flowLevel)?-1:f.flowLevel,this.styleMap=Be(this.schema,f.styles||null),this.sortKeys=f.sortKeys||!1,this.lineWidth=f.lineWidth||80,this.noRefs=f.noRefs||!1,this.noCompatMode=f.noCompatMode||!1,this.condenseFlow=f.condenseFlow||!1,this.quotingType=f.quotingType==='"'?Ze:vn,this.forceQuotes=f.forceQuotes||!1,this.replacer=typeof f.replacer=="function"?f.replacer:null,this.implicitTypes=this.schema.compiledImplicit,this.explicitTypes=this.schema.compiledExplicit,this.tag=null,this.result="",this.duplicates=[],this.usedDuplicates=null}function We(f,A){const D=e.repeat(" ",A);let P=0,L="";const K=f.length;for(;P<K;){let U;const ue=f.indexOf(`
`,P);ue===-1?(U=f.slice(P),P=K):(U=f.slice(P,ue+1),P=ue+1),U.length&&U!==`
`&&(L+=D),L+=U}return L}function gn(f,A){return`
`+e.repeat(" ",f.indent*A)}function wn(f,A){for(let D=0,P=f.implicitTypes.length;D<P;D+=1)if(f.implicitTypes[D].resolve(A))return!0;return!1}function Ke(f){return f===u||f===l}function Ge(f){return f>=32&&f<=126||f>=161&&f<=55295&&f!==8232&&f!==8233||f>=57344&&f<=65533&&f!==i||f>=65536&&f<=1114111}function O(f){return Ge(f)&&f!==i&&f!==c&&f!==s}function se(f,A,D){const P=O(f),L=P&&!Ke(f);return(D?P:P&&f!==k&&f!==ie&&f!==oe&&f!==q&&f!==X)&&f!==m&&!(A===M&&!L)||O(A)&&!Ke(A)&&f===m||A===M&&L}function W(f){return Ge(f)&&f!==i&&!Ke(f)&&f!==x&&f!==ae&&f!==M&&f!==k&&f!==ie&&f!==oe&&f!==q&&f!==X&&f!==m&&f!==S&&f!==T&&f!==d&&f!==B&&f!==z&&f!==de&&f!==N&&f!==p&&f!==v&&f!==$&&f!==Y}function pe(f){return!Ke(f)&&f!==M}function Ae(f,A){const D=f.charCodeAt(A);let P;return D>=55296&&D<=56319&&A+1<f.length&&(P=f.charCodeAt(A+1),P>=56320&&P<=57343)?(D-55296)*1024+P-56320+65536:D}function h(f){return/^\n* /.test(f)}const g=1,y=2,I=3,j=4,E=5;function ne(f,A,D,P,L,K,U,ue){let ce,he=0,ge=null,Ce=!1,Ve=!1;const ni=P!==-1;let Kt=-1,Gt=W(Ae(f,0))&&pe(Ae(f,f.length-1));if(A||U)for(ce=0;ce<f.length;he>=65536?ce+=2:ce++){if(he=Ae(f,ce),!Ge(he))return E;Gt=Gt&&se(he,ge,ue),ge=he}else{for(ce=0;ce<f.length;he>=65536?ce+=2:ce++){if(he=Ae(f,ce),he===s)Ce=!0,ni&&(Ve=Ve||ce-Kt-1>P&&f[Kt+1]!==" ",Kt=ce);else if(!Ge(he))return E;Gt=Gt&&se(he,ge,ue),ge=he}Ve=Ve||ni&&ce-Kt-1>P&&f[Kt+1]!==" "}return!Ce&&!Ve?Gt&&!U&&!L(f)?g:K===Ze?E:y:D>9&&h(f)?E:U?K===Ze?E:y:Ve?j:I}function ee(f,A,D,P,L){f.dump=(function(){if(A.length===0)return f.quotingType===Ze?'""':"''";if(!f.noCompatMode&&(Fe.indexOf(A)!==-1||Q.test(A)))return f.quotingType===Ze?'"'+A+'"':"'"+A+"'";const K=f.indent*Math.max(1,D),U=f.lineWidth===-1?-1:Math.max(Math.min(f.lineWidth,40),f.lineWidth-K),ue=P||f.flowLevel>-1&&D>=f.flowLevel;function ce(he){return wn(f,he)}switch(ne(A,ue,f.indent,U,ce,f.quotingType,f.forceQuotes&&!P,L)){case g:return A;case y:return"'"+A.replace(/'/g,"''")+"'";case I:return"|"+J(A,f.indent)+F(We(A,K));case j:return">"+J(A,f.indent)+F(We(ve(A,U),K));case E:return'"'+me(A)+'"';default:throw new n("impossible error: invalid scalar style")}})()}function J(f,A){const D=h(f)?String(A):"",P=f[f.length-1]===`
`,K=P&&(f[f.length-2]===`
`||f===`
`)?"+":P?"":"-";return D+K+`
`}function F(f){return f[f.length-1]===`
`?f.slice(0,-1):f}function ve(f,A){const D=/(\n+)([^\n]*)/g;let P=(function(){let ue=f.indexOf(`
`);return ue=ue!==-1?ue:f.length,D.lastIndex=ue,te(f.slice(0,ue),A)})(),L=f[0]===`
`||f[0]===" ",K,U;for(;U=D.exec(f);){const ue=U[1],ce=U[2];K=ce[0]===" ",P+=ue+(!L&&!K&&ce!==""?`
`:"")+te(ce,A),L=K}return P}function te(f,A){if(f===""||f[0]===" ")return f;const D=/ [^ ]/g;let P,L=0,K,U=0,ue=0,ce="";for(;P=D.exec(f);)ue=P.index,ue-L>A&&(K=U>L?U:ue,ce+=`
`+f.slice(L,K),L=K+1),U=ue;return ce+=`
`,f.length-L>A&&U>L?ce+=f.slice(L,U)+`
`+f.slice(U+1):ce+=f.slice(L),ce.slice(1)}function me(f){let A="",D=0;for(let P=0;P<f.length;D>=65536?P+=2:P++){D=Ae(f,P);const L=Z[D];!L&&Ge(D)?(A+=f[P],D>=65536&&(A+=f[P+1])):A+=L||xe(D)}return A}function be(f,A,D){let P="";const L=f.tag;for(let K=0,U=D.length;K<U;K+=1){let ue=D[K];f.replacer&&(ue=f.replacer.call(D,String(K),ue)),(w(f,A,ue,!1,!1)||typeof ue>"u"&&w(f,A,null,!1,!1))&&(P!==""&&(P+=","+(f.condenseFlow?"":" ")),P+=f.dump)}f.tag=L,f.dump="["+P+"]"}function we(f,A,D,P){let L="";const K=f.tag;for(let U=0,ue=D.length;U<ue;U+=1){let ce=D[U];f.replacer&&(ce=f.replacer.call(D,String(U),ce)),(w(f,A+1,ce,!0,!0,!1,!0)||typeof ce>"u"&&w(f,A+1,null,!0,!0,!1,!0))&&((!P||L!=="")&&(L+=gn(f,A)),f.dump&&s===f.dump.charCodeAt(0)?L+="-":L+="- ",L+=f.dump)}f.tag=K,f.dump=L||"[]"}function Oe(f,A,D){let P="";const L=f.tag,K=Object.keys(D);for(let U=0,ue=K.length;U<ue;U+=1){let ce="";P!==""&&(ce+=", "),f.condenseFlow&&(ce+='"');const he=K[U];let ge=D[he];f.replacer&&(ge=f.replacer.call(D,he,ge)),w(f,A,he,!1,!1)&&(f.dump.length>1024&&(ce+="? "),ce+=f.dump+(f.condenseFlow?'"':"")+":"+(f.condenseFlow?"":" "),w(f,A,ge,!1,!1)&&(ce+=f.dump,P+=ce))}f.tag=L,f.dump="{"+P+"}"}function a(f,A,D,P){let L="";const K=f.tag,U=Object.keys(D);if(f.sortKeys===!0)U.sort();else if(typeof f.sortKeys=="function")U.sort(f.sortKeys);else if(f.sortKeys)throw new n("sortKeys must be a boolean or a function");for(let ue=0,ce=U.length;ue<ce;ue+=1){let he="";(!P||L!=="")&&(he+=gn(f,A));const ge=U[ue];let Ce=D[ge];if(f.replacer&&(Ce=f.replacer.call(D,ge,Ce)),!w(f,A+1,ge,!0,!0,!0))continue;const Ve=f.tag!==null&&f.tag!=="?"||f.dump&&f.dump.length>1024;Ve&&(f.dump&&s===f.dump.charCodeAt(0)?he+="?":he+="? "),he+=f.dump,Ve&&(he+=gn(f,A)),w(f,A+1,Ce,!0,Ve)&&(f.dump&&s===f.dump.charCodeAt(0)?he+=":":he+=": ",he+=f.dump,L+=he)}f.tag=K,f.dump=L||"{}"}function b(f,A,D){const P=D?f.explicitTypes:f.implicitTypes;for(let L=0,K=P.length;L<K;L+=1){const U=P[L];if((U.instanceOf||U.predicate)&&(!U.instanceOf||typeof A=="object"&&A instanceof U.instanceOf)&&(!U.predicate||U.predicate(A))){if(D?U.multi&&U.representName?f.tag=U.representName(A):f.tag=U.tag:f.tag="?",U.represent){const ue=f.styleMap[U.tag]||U.defaultStyle;let ce;if(o.call(U.represent)==="[object Function]")ce=U.represent(A,ue);else if(r.call(U.represent,ue))ce=U.represent[ue](A,ue);else throw new n("!<"+U.tag+'> tag resolver accepts not "'+ue+'" style');f.dump=ce}return!0}}return!1}function w(f,A,D,P,L,K,U){f.tag=null,f.dump=D,b(f,D,!1)||b(f,D,!0);const ue=o.call(f.dump),ce=P;P&&(P=f.flowLevel<0||f.flowLevel>A);const he=ue==="[object Object]"||ue==="[object Array]";let ge,Ce;if(he&&(ge=f.duplicates.indexOf(D),Ce=ge!==-1),(f.tag!==null&&f.tag!=="?"||Ce||f.indent!==2&&A>0)&&(L=!1),Ce&&f.usedDuplicates[ge])f.dump="*ref_"+ge;else{if(he&&Ce&&!f.usedDuplicates[ge]&&(f.usedDuplicates[ge]=!0),ue==="[object Object]")P&&Object.keys(f.dump).length!==0?(a(f,A,f.dump,L),Ce&&(f.dump="&ref_"+ge+f.dump)):(Oe(f,A,f.dump),Ce&&(f.dump="&ref_"+ge+" "+f.dump));else if(ue==="[object Array]")P&&f.dump.length!==0?(f.noArrayIndent&&!U&&A>0?we(f,A-1,f.dump,L):we(f,A,f.dump,L),Ce&&(f.dump="&ref_"+ge+f.dump)):(be(f,A,f.dump),Ce&&(f.dump="&ref_"+ge+" "+f.dump));else if(ue==="[object String]")f.tag!=="?"&&ee(f,f.dump,A,K,ce);else{if(ue==="[object Undefined]")return!1;if(f.skipInvalid)return!1;throw new n("unacceptable kind of an object to dump "+ue)}if(f.tag!==null&&f.tag!=="?"){let Ve=encodeURI(f.tag[0]==="!"?f.tag.slice(1):f.tag).replace(/!/g,"%21");f.tag[0]==="!"?Ve="!"+Ve:Ve.slice(0,18)==="tag:yaml.org,2002:"?Ve="!!"+Ve.slice(18):Ve="!<"+Ve+">",f.dump=Ve+" "+f.dump}}return!0}function C(f,A){const D=[],P=[];R(f,D,P);const L=P.length;for(let K=0;K<L;K+=1)A.duplicates.push(D[P[K]]);A.usedDuplicates=new Array(L)}function R(f,A,D){if(f!==null&&typeof f=="object"){const P=A.indexOf(f);if(P!==-1)D.indexOf(P)===-1&&D.push(P);else if(A.push(f),Array.isArray(f))for(let L=0,K=f.length;L<K;L+=1)R(f[L],A,D);else{const L=Object.keys(f);for(let K=0,U=L.length;K<U;K+=1)R(f[L[K]],A,D)}}}function H(f,A){A=A||{};const D=new mn(A);D.noRefs||C(f,D);let P=f;return D.replacer&&(P=D.replacer.call({"":P},"",P)),w(D,0,P,!0,!0)?D.dump+`
`:""}return oa.dump=H,oa}var gl;function Hf(){if(gl)return en;gl=1;const e=zf(),n=Uf();function t(o,r){return function(){throw new Error("Function yaml."+o+" is removed in js-yaml 4. Use yaml."+r+" instead, which is now safe by default.")}}return en.Type=pn(),en.Schema=lc(),en.FAILSAFE_SCHEMA=dc(),en.JSON_SCHEMA=vc(),en.CORE_SCHEMA=gc(),en.DEFAULT_SCHEMA=Ya(),en.load=e.load,en.loadAll=e.loadAll,en.dump=n.dump,en.YAMLException=Io(),en.types={binary:yc(),float:hc(),map:uc(),null:fc(),pairs:Nc(),set:xc(),timestamp:_c(),bool:pc(),int:mc(),merge:bc(),omap:Ac(),seq:cc(),str:sc()},en.safeLoad=t("safeLoad","load"),en.safeLoadAll=t("safeLoadAll","loadAll"),en.safeDump=t("safeDump","dump"),en}var Kf=Hf();const er=Ff(Kf),{Type:zv,Schema:Uv,FAILSAFE_SCHEMA:Hv,JSON_SCHEMA:Kv,CORE_SCHEMA:Gv,DEFAULT_SCHEMA:Wv,load:Yv,loadAll:Jv,dump:Qv,YAMLException:Xv,types:Zv,safeLoad:eg,safeLoadAll:ng,safeDump:tg}=er;class Gf{constructor({ruleSetRepository:n}){this.ruleSetRepository=n}list(){return this.ruleSetRepository.getAll()}get(n){return this.ruleSetRepository.get(n)}async save(n){const t=await this.ruleSetRepository.get(n.id),o=$f(n,{createdAt:t?.createdAt??new Date,updatedAt:new Date});return this.ruleSetRepository.put(o)}async importFromJson(n,t){let o;try{o=JSON.parse(n)}catch{throw new TypeError("Arquivo de regras inválido: JSON malformado.")}return this.save(t?{...o,grupo:t}:o)}async importFromYaml(n,t){let o;try{o=er.load(n)}catch{throw new TypeError("Arquivo de regras inválido: YAML malformado.")}return this.save(t?{...o,grupo:t}:o)}exportToJson(n){Ba(n);const{source:t,createdAt:o,updatedAt:r,...i}=n;return JSON.stringify(i,null,2)}exportToYaml(n){Ba(n);const{source:t,createdAt:o,updatedAt:r,...i}=n;return er.dump(i,{noRefs:!0})}async exportByIdToJson(n){const t=await this.ruleSetRepository.get(n);if(!t)throw new Error("Conjunto de regras não encontrado.");return this.exportToJson(t)}async exportByIdToYaml(n){const t=await this.ruleSetRepository.get(n);if(!t)throw new Error("Conjunto de regras não encontrado.");return this.exportToYaml(t)}delete(n){return this.ruleSetRepository.delete(n)}}async function Wf({indexedDB:e}={}){const n=await xf(e),t={projectRepository:new wf(n),environmentRepository:new Rf(n),elementRepository:new Tf(n),evaluationRepository:new Bf(n),ruleSetRepository:new Sf(n)},o=new kf(t);return{projectService:new Lf(t),evaluationService:o,quickEvaluationService:new jf({evaluationService:o}),ruleSetService:new Gf(t),repositories:t,close:()=>n.close()}}const Yf=`id: bacia_sanitaria
nome: Bacia sanitária
norma:
  nome: ABNT NBR 9050
  versao: 2020 - versão corrigida 2021
parametros:
  abertura_frontal:
    label: Possui abertura frontal
    tipo: boolean
    obrigatorio: true
  altura_sem_assento:
    label: Altura sem assento
    tipo: number
    unidade: m
    obrigatorio: true
  altura_com_assento:
    label: Altura com assento
    tipo: number
    unidade: m
    obrigatorio: true
  transferencia_lateral:
    label: Transferência lateral
    tipo: boolean
    obrigatorio: true
  transferencia_perpendicular:
    label: Transferência perpendicular
    tipo: boolean
    obrigatorio: true
  transferencia_diagonal:
    label: Transferência diagonal
    tipo: boolean
    obrigatorio: true
  altura_valvula:
    label: Altura da válvula
    tipo: number
    unidade: m
    obrigatorio: true
  forca_valvula:
    label: Força de acionamento da válvula
    tipo: number
    unidade: N
    obrigatorio: true
  comprimento_barra_fundo:
    label: Comprimento da barra de fundo
    tipo: number
    unidade: m
  altura_barra_fundo:
    label: Altura da barra de fundo
    tipo: number
    unidade: m
regras:
- id: sem_abertura_frontal
  nome: Sem abertura frontal
  parametro: abertura_frontal
  operador: ==
  valor: false
  referencia: ABNT NBR 9050:2020 — 7.7
- id: altura_minima
  nome: Altura mínima sem assento
  parametro: altura_sem_assento
  operador: '>='
  valor: 0.43
  referencia: ABNT NBR 9050:2020 — 7.7.2.1
- id: altura_maxima
  nome: Altura máxima sem assento
  parametro: altura_sem_assento
  operador: <=
  valor: 0.45
  referencia: ABNT NBR 9050:2020 — 7.7.2.1
- id: altura_assento
  nome: Altura máxima com assento
  parametro: altura_com_assento
  operador: <=
  valor: 0.46
  referencia: ABNT NBR 9050:2020 — 7.7.2.1
- id: transferencia_lateral
  nome: Transferência lateral
  parametro: transferencia_lateral
  operador: ==
  valor: true
  referencia: ABNT NBR 9050:2020 — 7.7.1
- id: transferencia_perpendicular
  nome: Transferência perpendicular
  parametro: transferencia_perpendicular
  operador: ==
  valor: true
  referencia: ABNT NBR 9050:2020 — 7.7.1
- id: transferencia_diagonal
  nome: Transferência diagonal
  parametro: transferencia_diagonal
  operador: ==
  valor: true
  referencia: ABNT NBR 9050:2020 — 7.7.1
- id: altura_valvula
  nome: Altura máxima da válvula
  parametro: altura_valvula
  operador: <=
  valor: 1.0
  referencia: ABNT NBR 9050:2020 — 7.7.3.1
- id: forca_valvula
  nome: Força máxima da válvula
  parametro: forca_valvula
  operador: <
  valor: 23
  referencia: ABNT NBR 9050:2020 — 7.7.3.1
- id: barra_fundo_comprimento
  nome: Comprimento mínimo da barra de fundo
  parametro: comprimento_barra_fundo
  operador: '>='
  valor: 0.8
  referencia: ABNT NBR 9050:2020 — 7.7.2.2.2
- id: barra_fundo_altura
  nome: Altura da barra de fundo
  parametro: altura_barra_fundo
  operador: ==
  valor: 0.75
  referencia: ABNT NBR 9050:2020 — 7.7.2.2.2
`,Jf=`id: balcao
nome: Balcão
norma:
  nome: ABNT NBR 9050
  versao: 2020 - versão corrigida 2021
parametros:
  tipo_balcao:
    label: Tipo de balcão
    tipo: select
    opcoes:
    - atendimento
    - caixa_bancario
    - pagamento
    - bilheteria
    - informacao
    obrigatorio: true
  facilmente_identificado:
    label: Facilmente identificado
    tipo: boolean
    obrigatorio: true
  localizado_em_rota_acessivel:
    label: Localizado em rota acessível
    tipo: boolean
    obrigatorio: true
  aproximacao_frontal:
    label: Aproximação frontal
    tipo: boolean
  circulacao_giro_180:
    label: Circulação adjacente para giro de 180 graus
    tipo: boolean
  largura_superficie:
    label: Largura da superfície
    tipo: number
    unidade: m
  altura_superficie:
    label: Altura da superfície
    tipo: number
    unidade: m
  largura_livre_inferior:
    label: Largura livre sob a superfície
    tipo: number
    unidade: m
  altura_livre_inferior:
    label: Altura livre sob a superfície
    tipo: number
    unidade: m
  profundidade_livre_inferior:
    label: Profundidade livre sob a superfície
    tipo: number
    unidade: m
  passagem_lateral:
    label: Largura da passagem lateral
    tipo: number
    unidade: m
regras:
- id: identificacao
  nome: Identificação
  parametro: facilmente_identificado
  operador: ==
  valor: true
  referencia: ABNT NBR 9050:2020 — 9.2.1.1 e 9.2.2.1
- id: rota_acessivel
  nome: Rota acessível
  parametro: localizado_em_rota_acessivel
  operador: ==
  valor: true
  referencia: ABNT NBR 9050:2020 — 9.2.1.1 e 9.2.2.1
- id: aproximacao_frontal
  nome: Aproximação frontal
  parametro: aproximacao_frontal
  operador: ==
  valor: true
  referencia: ABNT NBR 9050:2020 — 9.2.1.2
- id: giro_180
  nome: Giro de 180 graus
  parametro: circulacao_giro_180
  operador: ==
  valor: true
  referencia: ABNT NBR 9050:2020 — 9.2.1.2
- id: largura_superficie
  nome: Largura mínima da superfície
  parametro: largura_superficie
  operador: '>='
  valor: 0.9
  referencia: ABNT NBR 9050:2020 — 9.2.1.4
- id: altura_minima
  nome: Altura mínima da superfície
  parametro: altura_superficie
  operador: '>='
  valor: 0.75
  referencia: ABNT NBR 9050:2020 — 9.2.1.4
- id: altura_maxima
  nome: Altura máxima da superfície
  parametro: altura_superficie
  operador: <=
  valor: 0.85
  referencia: ABNT NBR 9050:2020 — 9.2.1.4
- id: largura_livre
  nome: Largura livre mínima sob a superfície
  parametro: largura_livre_inferior
  operador: '>='
  valor: 0.8
  referencia: ABNT NBR 9050:2020 — 9.2.1.4
- id: altura_livre
  nome: Altura livre mínima sob a superfície
  parametro: altura_livre_inferior
  operador: '>='
  valor: 0.73
  referencia: ABNT NBR 9050:2020 — 9.2.1.5
- id: profundidade_livre
  nome: Profundidade livre mínima
  parametro: profundidade_livre_inferior
  operador: '>='
  valor: 0.3
  referencia: ABNT NBR 9050:2020 — 9.2.1.5
- id: passagem_lateral
  nome: Passagem lateral mínima
  parametro: passagem_lateral
  operador: '>='
  valor: 0.9
  referencia: ABNT NBR 9050:2020 — 9.2.2.2
`,Qf=`id: barras_apoio
nome: Barras de apoio
norma:
  nome: ABNT NBR 9050
  versao: 2020 - versão corrigida 2021
parametros:
  resistencia:
    label: Resistência da barra
    tipo: number
    unidade: kg
    obrigatorio: true
  diametro:
    label: Diâmetro da barra
    tipo: number
    unidade: mm
    obrigatorio: true
  afastamento_suporte:
    label: Afastamento entre suporte e face interna da barra
    tipo: number
    unidade: mm
    obrigatorio: true
  extremidades_fixadas:
    label: Extremidades fixadas ou com desenvolvimento contínuo até a fixação
    tipo: boolean
    obrigatorio: true
  material_resistente_corrosao:
    label: Material metálico resistente à corrosão
    tipo: boolean
  barra_articulada:
    label: Barra articulada
    tipo: boolean
  dispositivo_antiqueda:
    label: Dispositivo contra queda ou movimento abrupto
    tipo: boolean
regras:
- id: resistencia_minima
  nome: Resistência mínima
  parametro: resistencia
  operador: '>='
  valor: 150
  referencia: ABNT NBR 9050:2020 — 7.6.1
- id: diametro_minimo
  nome: Diâmetro mínimo
  parametro: diametro
  operador: '>='
  valor: 30
  referencia: ABNT NBR 9050:2020 — 7.6.3 e Figura 102
- id: diametro_maximo
  nome: Diâmetro máximo
  parametro: diametro
  operador: <=
  valor: 45
  referencia: ABNT NBR 9050:2020 — 7.6.3 e Figura 102
- id: afastamento_minimo
  nome: Afastamento mínimo do suporte
  parametro: afastamento_suporte
  operador: '>='
  valor: 40
  referencia: ABNT NBR 9050:2020 — 7.6.1 e Figura 102
- id: extremidades
  nome: Fixação das extremidades
  parametro: extremidades_fixadas
  operador: ==
  valor: true
  referencia: ABNT NBR 9050:2020 — 7.6.1
- id: resistencia_corrosao
  nome: Resistência à corrosão
  parametro: material_resistente_corrosao
  operador: ==
  valor: true
  referencia: ABNT NBR 9050:2020 — 7.6.2
- id: dispositivo_antiqueda
  nome: Dispositivo de segurança da barra articulada
  parametro: dispositivo_antiqueda
  operador: ==
  valor: true
  referencia: ABNT NBR 9050:2020 — 7.6.4
`,Xf=`id: bebedouro
nome: Bebedouro
norma:
  nome: ABNT NBR 9050
  versao: 2020 - versão corrigida 2021
parametros:
  tipo_bebedouro:
    label: Tipo de bebedouro
    tipo: select
    opcoes:
    - bica
    - garrafao
    - filtro
    - outro
    obrigatorio: true
  altura_bica:
    label: Altura da bica
    tipo: number
    unidade: m
  altura_livre_inferior:
    label: Altura livre inferior
    tipo: number
    unidade: m
  aproximacao_frontal:
    label: Possui aproximação frontal
    tipo: boolean
  tipo_jato:
    label: Tipo de jato da bica
    tipo: select
    opcoes:
    - inclinado
    - outro
  bica_frontal:
    label: Bica localizada no lado frontal
    tipo: boolean
  permite_copo:
    label: Permite utilização com copos
    tipo: boolean
  facil_higienizacao:
    label: Fácil higienização
    tipo: boolean
  altura_acionamento:
    label: Altura de acionamento
    tipo: number
    unidade: m
  aproximacao_lateral:
    label: Permite aproximação lateral
    tipo: boolean
regras:
- id: bica_jato_inclinado
  nome: Jato inclinado
  parametro: tipo_jato
  operador: ==
  valor: inclinado
  referencia: ABNT NBR 9050:2020 — 8.5.1.1
- id: bica_frontal
  nome: Bica frontal
  parametro: bica_frontal
  operador: ==
  valor: true
  referencia: ABNT NBR 9050:2020 — 8.5.1.1
- id: permite_copo
  nome: Uso com copos
  parametro: permite_copo
  operador: ==
  valor: true
  referencia: ABNT NBR 9050:2020 — 8.5.1.1
- id: higienizacao
  nome: Fácil higienização
  parametro: facil_higienizacao
  operador: ==
  valor: true
  referencia: ABNT NBR 9050:2020 — 8.5.1.1
- id: altura_bica_baixa
  nome: Altura da bica acessível
  parametro: altura_bica
  operador: ==
  valor: 0.9
  referencia: ABNT NBR 9050:2020 — 8.5.1.2
- id: altura_livre
  nome: Altura livre inferior
  parametro: altura_livre_inferior
  operador: '>='
  valor: 0.73
  referencia: ABNT NBR 9050:2020 — 8.5.1.3
- id: aproximacao_frontal
  nome: Aproximação frontal
  parametro: aproximacao_frontal
  operador: ==
  valor: true
  referencia: ABNT NBR 9050:2020 — 8.5.1.3
- id: altura_acionamento_minima
  nome: Altura mínima de acionamento
  parametro: altura_acionamento
  operador: '>='
  valor: 0.8
  referencia: ABNT NBR 9050:2020 — 8.5.2
- id: altura_acionamento_maxima
  nome: Altura máxima de acionamento
  parametro: altura_acionamento
  operador: <=
  valor: 1.2
  referencia: ABNT NBR 9050:2020 — 8.5.2
- id: aproximacao_lateral
  nome: Aproximação lateral
  parametro: aproximacao_lateral
  operador: ==
  valor: true
  referencia: ABNT NBR 9050:2020 — 8.5.2
`,Zf=`id: caixa_autoatendimento
nome: Caixa/autoatendimento
norma:
  nome: ABNT NBR 9050
  versao: 2020 - versão corrigida 2021
parametros:
  vao_livre_acessivel:
    label: Vão livre da passagem acessível
    tipo: number
    unidade: m
  localizado_em_rota_acessivel:
    label: Localizado em rota acessível
    tipo: boolean
  circulacao_giro_180:
    label: Circulação adjacente para giro de 180 graus
    tipo: boolean
  alcance_manual_visual:
    label: Atende ao alcance manual e visual
    tipo: boolean
  iluminacao_adequada:
    label: Iluminação adequada sem reflexos
    tipo: boolean
  intercomunicador:
    label: Possui intercomunicador
    tipo: boolean
  suporte_bengala_muleta:
    label: Possui suporte para bengalas ou muletas
    tipo: boolean
  piso_nivelado:
    label: Piso nivelado e livre de obstruções
    tipo: boolean
  mr_aproximacao_frontal:
    label: Módulo de referência para aproximação frontal
    tipo: boolean
  alcance_visual_frontal_lateral:
    label: Alcance visual frontal ou lateral
    tipo: boolean
regras:
- id: vao_livre
  nome: Vão livre mínimo
  parametro: vao_livre_acessivel
  operador: '>='
  valor: 0.8
  referencia: ABNT NBR 9050:2020 — 9.4.1.1
- id: rota
  nome: Rota acessível
  parametro: localizado_em_rota_acessivel
  operador: ==
  valor: true
  referencia: ABNT NBR 9050:2020 — 9.4.1.2 e 9.4.3.1
- id: giro
  nome: Giro de 180 graus
  parametro: circulacao_giro_180
  operador: ==
  valor: true
  referencia: ABNT NBR 9050:2020 — 9.4.1.2
- id: alcance
  nome: Alcance manual e visual
  parametro: alcance_manual_visual
  operador: ==
  valor: true
  referencia: ABNT NBR 9050:2020 — 9.4.2.1
- id: iluminacao
  nome: Iluminação sem reflexos
  parametro: iluminacao_adequada
  operador: ==
  valor: true
  referencia: ABNT NBR 9050:2020 — 9.4.2.1 e 9.4.3.3
- id: intercomunicador
  nome: Intercomunicador
  parametro: intercomunicador
  operador: ==
  valor: true
  referencia: ABNT NBR 9050:2020 — 9.4.2.2
- id: suporte
  nome: Suporte para bengalas ou muletas
  parametro: suporte_bengala_muleta
  operador: ==
  valor: true
  referencia: ABNT NBR 9050:2020 — 9.4.2.3
- id: piso
  nome: Piso nivelado
  parametro: piso_nivelado
  operador: ==
  valor: true
  referencia: ABNT NBR 9050:2020 — 9.4.3.2
- id: mr
  nome: Módulo de referência para aproximação
  parametro: mr_aproximacao_frontal
  operador: ==
  valor: true
  referencia: ABNT NBR 9050:2020 — 9.4.3.4
- id: alcance_visual
  nome: Alcance visual acessível
  parametro: alcance_visual_frontal_lateral
  operador: ==
  valor: true
  referencia: ABNT NBR 9050:2020 — 9.4.3.4
`,ep=`id: calcada
nome: Calçada
norma:
  nome: ABNT NBR 9050
  versao: 2020 - versão corrigida 2021
parametros:
  inclinacao_transversal:
    label: Inclinação transversal da faixa livre
    tipo: number
    unidade: '%'
    obrigatorio: true
  largura_faixa_livre:
    label: Largura da faixa livre
    tipo: number
    unidade: m
    obrigatorio: true
  altura_livre:
    label: Altura livre
    tipo: number
    unidade: m
    obrigatorio: true
  piso_sem_degraus:
    label: Faixa livre sem degraus
    tipo: boolean
    obrigatorio: true
  acesso_veiculos_sem_interferencia:
    label: Acesso de veículos sem interferência na faixa livre
    tipo: boolean
    obrigatorio: true
  inclinacao_rebaixamento:
    label: Inclinação do rebaixamento
    tipo: number
    unidade: '%'
  largura_rebaixamento:
    label: Largura do rebaixamento
    tipo: number
    unidade: m
  desnivel_rebaixamento:
    label: Desnível no término do rebaixamento
    tipo: number
    unidade: m
regras:
- id: inclinacao_transversal
  nome: Inclinação transversal máxima
  parametro: inclinacao_transversal
  operador: <=
  valor: 3
  referencia: ABNT NBR 9050:2020 — 6.12.1
- id: largura_minima
  nome: Largura mínima da faixa livre
  parametro: largura_faixa_livre
  operador: '>='
  valor: 1.2
  referencia: ABNT NBR 9050:2020 — 6.12.3
- id: altura_minima
  nome: Altura livre mínima
  parametro: altura_livre
  operador: '>='
  valor: 2.1
  referencia: ABNT NBR 9050:2020 — 6.12.3
- id: sem_degraus
  nome: Faixa livre sem degraus
  parametro: piso_sem_degraus
  operador: ==
  valor: true
  referencia: ABNT NBR 9050:2020 — 6.12
- id: acesso_veiculos
  nome: Acesso de veículos sem interferência
  parametro: acesso_veiculos_sem_interferencia
  operador: ==
  valor: true
  referencia: ABNT NBR 9050:2020 — 6.12.4
- id: inclinacao_rebaixamento
  nome: Inclinação máxima do rebaixamento
  parametro: inclinacao_rebaixamento
  operador: <=
  valor: 8.33
  referencia: ABNT NBR 9050:2020 — 6.12.7.3
- id: largura_rebaixamento
  nome: Largura mínima do rebaixamento
  parametro: largura_rebaixamento
  operador: '>='
  valor: 1.2
  referencia: ABNT NBR 9050:2020 — 6.12.7.3
- id: desnivel_rebaixamento
  nome: Ausência de desnível
  parametro: desnivel_rebaixamento
  operador: ==
  valor: 0
  referencia: ABNT NBR 9050:2020 — 6.12.7.3.1
`,np=`id: chuveiro
nome: Chuveiro
norma:
  nome: ABNT NBR 9050
  versao: 2020 - versão corrigida 2021
parametros:
  largura_box:
    label: Largura do boxe
    tipo: number
    unidade: m
    obrigatorio: true
  comprimento_box:
    label: Comprimento do boxe
    tipo: number
    unidade: m
    obrigatorio: true
  area_transferencia:
    label: Área de transferência externa
    tipo: boolean
    obrigatorio: true
  vao_porta:
    label: Vão livre da porta
    tipo: number
    unidade: m
  possui_banco:
    label: Possui banco articulado ou removível
    tipo: boolean
    obrigatorio: true
  profundidade_banco:
    label: Profundidade do banco
    tipo: number
    unidade: m
  altura_banco:
    label: Altura do banco
    tipo: number
    unidade: m
  comprimento_banco:
    label: Comprimento do banco
    tipo: number
    unidade: m
  resistencia_banco:
    label: Resistência do banco
    tipo: number
    unidade: kg
  piso_antiderrapante:
    label: Piso antiderrapante
    tipo: boolean
    obrigatorio: true
  piso_nivelado:
    label: Piso em nível com o adjacente
    tipo: boolean
    obrigatorio: true
  inclinacao_piso:
    label: Inclinação para escoamento
    tipo: number
    unidade: '%'
    obrigatorio: true
  ralo_fora_transferencia:
    label: Ralo fora das áreas de manobra e transferência
    tipo: boolean
    obrigatorio: true
  possui_barras:
    label: Possui barras de apoio
    tipo: boolean
    obrigatorio: true
  possui_barra_vertical:
    label: Possui barra vertical
    tipo: boolean
    obrigatorio: true
  possui_ducha_manual:
    label: Possui ducha manual
    tipo: boolean
    obrigatorio: true
  controle_fluxo_na_ducha:
    label: Controle de fluxo na ducha manual
    tipo: boolean
    obrigatorio: true
regras:
- id: largura
  nome: Largura mínima do boxe
  parametro: largura_box
  operador: '>='
  valor: 0.9
  referencia: ABNT NBR 9050:2020 — 7.12.1.2
- id: comprimento
  nome: Comprimento mínimo do boxe
  parametro: comprimento_box
  operador: '>='
  valor: 0.95
  referencia: ABNT NBR 9050:2020 — 7.12.1.2
- id: transferencia
  nome: Área de transferência externa
  parametro: area_transferencia
  operador: ==
  valor: true
  referencia: ABNT NBR 9050:2020 — 7.12.1.1
- id: vao
  nome: Vão livre mínimo da porta
  parametro: vao_porta
  operador: '>='
  valor: 0.9
  referencia: ABNT NBR 9050:2020 — 7.12.1.1
- id: banco
  nome: Banco articulado ou removível
  parametro: possui_banco
  operador: ==
  valor: true
  referencia: ABNT NBR 9050:2020 — 7.12.1.1
- id: profundidade_banco
  nome: Profundidade mínima do banco
  parametro: profundidade_banco
  operador: '>='
  valor: 0.45
  referencia: ABNT NBR 9050:2020 — 7.12.1.1
- id: altura_banco
  nome: Altura do banco
  parametro: altura_banco
  operador: ==
  valor: 0.46
  referencia: ABNT NBR 9050:2020 — 7.12.1.1
- id: comprimento_banco
  nome: Comprimento mínimo do banco
  parametro: comprimento_banco
  operador: '>='
  valor: 0.7
  referencia: ABNT NBR 9050:2020 — 7.12.1.1
- id: resistencia_banco
  nome: Resistência mínima do banco
  parametro: resistencia_banco
  operador: '>='
  valor: 150
  referencia: ABNT NBR 9050:2020 — 7.12.1.1
- id: piso_antiderrapante
  nome: Piso antiderrapante
  parametro: piso_antiderrapante
  operador: ==
  valor: true
  referencia: ABNT NBR 9050:2020 — 7.12.4 a
- id: piso_nivelado
  nome: Piso em nível
  parametro: piso_nivelado
  operador: ==
  valor: true
  referencia: ABNT NBR 9050:2020 — 7.12.4 b
- id: inclinacao
  nome: Inclinação máxima recomendada
  parametro: inclinacao_piso
  operador: <=
  valor: 2
  referencia: ABNT NBR 9050:2020 — 7.12.4 b
- id: ralo
  nome: Ralo fora da área de transferência
  parametro: ralo_fora_transferencia
  operador: ==
  valor: true
  referencia: ABNT NBR 9050:2020 — 7.12.4 c
- id: barras
  nome: Barras de apoio
  parametro: possui_barras
  operador: ==
  valor: true
  referencia: ABNT NBR 9050:2020 — 7.12.3
- id: barra_vertical
  nome: Barra vertical na parede do banco
  parametro: possui_barra_vertical
  operador: ==
  valor: true
  referencia: ABNT NBR 9050:2020 — 7.12.3
- id: ducha
  nome: Ducha manual
  parametro: possui_ducha_manual
  operador: ==
  valor: true
  referencia: ABNT NBR 9050:2020 — 7.12.2
- id: controle_fluxo
  nome: Controle de fluxo na ducha
  parametro: controle_fluxo_na_ducha
  operador: ==
  valor: true
  referencia: ABNT NBR 9050:2020 — 7.12.2
`,tp=`id: corredores
nome: Corredores
norma:
  nome: ABNT NBR 9050
  versao: 2020 - versão corrigida 2021
parametros:
  uso:
    label: Tipo de uso
    tipo: select
    opcoes:
    - comum
    - público
    - grande_fluxo
    - comum_edificacao_existente
    obrigatorio: true
  extensao:
    label: Extensão do corredor
    tipo: number
    unidade: m
    obrigatorio: true
  largura:
    label: Largura livre
    tipo: number
    unidade: m
    obrigatorio: true
  largura_obstaculo:
    label: Extensão do obstáculo
    tipo: number
    unidade: m
  possui_bolsao_retorno:
    label: Possui bolsão de retorno
    tipo: boolean
  distancia_bolsao:
    label: Distância entre bolsões de retorno
    tipo: number
    unidade: m
regras:
- id: largura_corredor
  nome: Largura mínima conforme uso e extensão
  tipo: conditional
  parametro: uso
  condicoes:
  - quando:
      operador: ==
      valor: comum
    verificar:
      parametro: largura
      operador: '>='
      valor: 0.9
    mensagem: Corredor de uso comum com extensão de até 4 m deve ter largura mínima de 0,90 m.
  - quando:
      operador: ==
      valor: público
    verificar:
      parametro: largura
      operador: '>='
      valor: 1.5
    mensagem: Corredor de uso público deve ter largura mínima de 1,50 m.
  - quando:
      operador: ==
      valor: grande_fluxo
    verificar:
      parametro: largura
      operador: '>'
      valor: 1.5
    mensagem: Corredores de grande fluxo devem ter largura superior a 1,50 m, conforme o cálculo de fluxo aplicável.
  - quando:
      operador: ==
      valor: comum_edificacao_existente
    verificar:
      parametro: largura
      operador: '>='
      valor: 0.9
    mensagem: Em edificações existentes onde a adequação for impraticável, o corredor pode ter largura mínima de 0,90 m com bolsões de retorno.
  referencia: ABNT NBR 9050:2020 — 6.11.1
- id: largura_comum_ate_10m
  nome: Corredor de uso comum com extensão até 10 m
  tipo: conditional
  parametro: extensao
  condicoes:
  - quando:
      operador: <=
      valor: 4
    resultado: conforme
    mensagem: Para até 4 m, a largura mínima é de 0,90 m.
  - quando:
      operador: <=
      valor: 10
    verificar:
      parametro: largura
      operador: '>='
      valor: 1.2
    mensagem: Para corredores de uso comum com extensão de até 10 m, a largura mínima é de 1,20 m.
  - quando:
      operador: '>'
      valor: 10
    verificar:
      parametro: largura
      operador: '>='
      valor: 1.5
    mensagem: Para corredores de uso comum com extensão superior a 10 m, a largura mínima é de 1,50 m.
  referencia: ABNT NBR 9050:2020 — 6.11.1
- id: obstaculo_ate_040
  nome: Transposição de obstáculo de até 0,40 m
  tipo: conditional
  parametro: largura_obstaculo
  condicoes:
  - quando:
      operador: <=
      valor: 0.4
    verificar:
      parametro: largura
      operador: '>='
      valor: 0.8
    mensagem: Para obstáculo isolado com extensão de até 0,40 m, a largura mínima para transposição é de 0,80 m.
  - quando:
      operador: '>'
      valor: 0.4
    verificar:
      parametro: largura
      operador: '>='
      valor: 0.9
    mensagem: Para obstáculo isolado com extensão superior a 0,40 m, a largura mínima para transposição é de 0,90 m.
  referencia: ABNT NBR 9050:2020 — 6.11.1.2 e 4.3.2
- id: bolsao_retorno
  nome: Bolsão de retorno em edificação existente
  tipo: conditional
  parametro: uso
  condicoes:
  - quando:
      operador: ==
      valor: comum_edificacao_existente
    verificar:
      parametro: possui_bolsao_retorno
      operador: ==
      valor: true
    mensagem: Em edificações existentes onde a adequação do corredor seja impraticável, deve haver bolsão de retorno para manobra completa de 180°.
  - quando:
      operador: '!='
      valor: comum_edificacao_existente
    resultado: conforme
  referencia: ABNT NBR 9050:2020 — 6.11.1.1
- id: distancia_bolsao
  nome: Distância máxima entre bolsões
  parametro: distancia_bolsao
  operador: <=
  valor: 15
  referencia: ABNT NBR 9050:2020 — 6.11.1.1
`,op=`id: corrimaos
nome: Corrimãos
norma:
  nome: ABNT NBR 9050
  versao: 2020 - versão corrigida 2021
parametros:
  altura_superior:
    label: Altura do corrimão superior
    tipo: number
    unidade: m
    obrigatorio: true
  altura_inferior:
    label: Altura do corrimão inferior
    tipo: number
    unidade: m
    obrigatorio: true
  prolongamento:
    label: Prolongamento nas extremidades
    tipo: number
    unidade: m
    obrigatorio: true
  diametro:
    label: Diâmetro da seção circular
    tipo: number
    unidade: m
    obrigatorio: true
  afastamento_parede:
    label: Afastamento da parede ou obstáculo
    tipo: number
    unidade: m
    obrigatorio: true
  quantidade_lados:
    label: Quantidade de lados com corrimão
    tipo: number
    unidade: lados
    obrigatorio: true
  largura_escada_rampa:
    label: Largura da escada ou rampa
    tipo: number
    unidade: m
    obrigatorio: true
  possui_corrimao_intermediario:
    label: Possui corrimão intermediário
    tipo: boolean
    obrigatorio: true
  patamar_intermediario:
    label: Comprimento do patamar
    tipo: number
    unidade: m
  espacamento_corrimao_intermediario:
    label: Espaçamento entre segmentos do corrimão intermediário
    tipo: number
    unidade: m
  extremidades_seguras:
    label: Extremidades sem protuberância
    tipo: boolean
    obrigatorio: true
regras:
- id: altura_superior
  nome: Altura do corrimão superior
  parametro: altura_superior
  operador: ==
  valor: 0.92
  referencia: ABNT NBR 9050:2020 — 6.9.3.3
- id: altura_inferior
  nome: Altura do corrimão inferior
  parametro: altura_inferior
  operador: ==
  valor: 0.7
  referencia: ABNT NBR 9050:2020 — 6.9.3.3
- id: prolongamento_minimo
  nome: Prolongamento mínimo
  parametro: prolongamento
  operador: '>='
  valor: 0.3
  referencia: ABNT NBR 9050:2020 — 6.9.3.4
- id: diametro_minimo
  nome: Diâmetro mínimo
  parametro: diametro
  operador: '>='
  valor: 0.03
  referencia: ABNT NBR 9050:2020 — 4.6.5
- id: diametro_maximo
  nome: Diâmetro máximo
  parametro: diametro
  operador: <=
  valor: 0.045
  referencia: ABNT NBR 9050:2020 — 4.6.5
- id: afastamento_minimo
  nome: Afastamento mínimo da parede ou obstáculo
  parametro: afastamento_parede
  operador: '>='
  valor: 0.04
  referencia: ABNT NBR 9050:2020 — 4.6.5
- id: dois_lados
  nome: Corrimãos nos dois lados
  parametro: quantidade_lados
  operador: '>='
  valor: 2
  referencia: ABNT NBR 9050:2020 — 6.9.3.2
- id: corrimao_intermediario
  nome: Corrimão intermediário para largura igual ou superior a 2,40 m
  tipo: conditional
  parametro: largura_escada_rampa
  condicoes:
  - quando:
      operador: <
      valor: 2.4
    resultado: conforme
  - quando:
      operador: '>='
      valor: 2.4
    verificar:
      parametro: possui_corrimao_intermediario
      operador: ==
      valor: true
    mensagem: Para largura igual ou superior a 2,40 m, deve ser atendida uma das condições previstas em 6.9.3.5.
  referencia: ABNT NBR 9050:2020 — 6.9.3.5
- id: interrupcao_corrimao_intermediario
  nome: Condição para interrupção do corrimão intermediário
  tipo: conditional
  parametro: patamar_intermediario
  condicoes:
  - quando:
      operador: <=
      valor: 1.4
    verificar:
      parametro: espacamento_corrimao_intermediario
      operador: ==
      valor: 0.0
    mensagem: O corrimão intermediário não deve ser interrompido quando o patamar não for superior a 1,40 m.
  - quando:
      operador: '>'
      valor: 1.4
    verificar:
      parametro: espacamento_corrimao_intermediario
      operador: '>='
      valor: 0.8
    mensagem: Quando interrompido, deve haver espaçamento mínimo de 0,80 m entre segmentos.
  referencia: ABNT NBR 9050:2020 — 6.9.3.6
- id: extremidades
  nome: Extremidades seguras
  parametro: extremidades_seguras
  operador: ==
  valor: true
  referencia: ABNT NBR 9050:2020 — 6.9.3.4
`,rp=`id: degraus-isolados
nome: Degraus isolados
norma:
  nome: ABNT NBR 9050
  versao: 2020 - versão corrigida 2021
parametros:
  quantidade_degraus:
    label: Quantidade de degraus
    tipo: number
    unidade: degraus
    obrigatorio: true
  piso:
    label: Piso do degrau
    tipo: number
    unidade: m
    obrigatorio: true
  espelho:
    label: Espelho do degrau
    tipo: number
    unidade: m
    obrigatorio: true
  possui_corrimao:
    label: Possui corrimão
    tipo: boolean
    obrigatorio: true
  possui_sinalizacao:
    label: Possui sinalização em toda a extensão
    tipo: boolean
    obrigatorio: true
  largura_rampa_associada:
    label: Largura livre da rampa associada
    tipo: number
    unidade: m
  possui_bocel:
    label: Possui bocel ou espelho inclinado
    tipo: boolean
    obrigatorio: true
  projecao_bocel:
    label: Projeção da aresta
    tipo: number
    unidade: m
regras:
- id: quantidade_maxima
  nome: Quantidade máxima para degrau isolado
  parametro: quantidade_degraus
  operador: <=
  valor: 2
  referencia: ABNT NBR 9050:2020 — 6.7.2
- id: quantidade_minima
  nome: Quantidade mínima de degraus
  parametro: quantidade_degraus
  operador: '>='
  valor: 1
  referencia: ABNT NBR 9050:2020 — 6.7.2
- id: piso_minimo
  nome: Piso mínimo
  parametro: piso
  operador: '>='
  valor: 0.28
  referencia: ABNT NBR 9050:2020 — 6.7.2 e 6.8.2
- id: piso_maximo
  nome: Piso máximo
  parametro: piso
  operador: <=
  valor: 0.32
  referencia: ABNT NBR 9050:2020 — 6.7.2 e 6.8.2
- id: espelho_minimo
  nome: Espelho mínimo
  parametro: espelho
  operador: '>='
  valor: 0.16
  referencia: ABNT NBR 9050:2020 — 6.7.2 e 6.8.2
- id: espelho_maximo
  nome: Espelho máximo
  parametro: espelho
  operador: <=
  valor: 0.18
  referencia: ABNT NBR 9050:2020 — 6.7.2 e 6.8.2
- id: corrimao_obrigatorio
  nome: Corrimão obrigatório
  parametro: possui_corrimao
  operador: ==
  valor: true
  referencia: ABNT NBR 9050:2020 — 6.7.2
- id: sinalizacao_obrigatoria
  nome: Sinalização obrigatória
  parametro: possui_sinalizacao
  operador: ==
  valor: true
  referencia: ABNT NBR 9050:2020 — 6.7.2 e 5.4.4.1
- id: largura_rampa_associada
  nome: Largura mínima da rampa junto ao degrau
  parametro: largura_rampa_associada
  operador: '>='
  valor: 1.2
  referencia: ABNT NBR 9050:2020 — 6.7.2 e 6.6.2.5
- id: projecao_bocel
  nome: Projeção máxima da aresta
  tipo: conditional
  parametro: possui_bocel
  condicoes:
  - quando:
      operador: ==
      valor: false
    resultado: conforme
  - quando:
      operador: ==
      valor: true
    verificar:
      parametro: projecao_bocel
      operador: <=
      valor: 0.015
    mensagem: A projeção da aresta não pode exceder 1,5 cm.
  referencia: ABNT NBR 9050:2020 — 6.7.1
- id: relacao_piso_espelho
  nome: Relação entre piso e espelho
  tipo: checklist
  parametro: piso
  referencia: ABNT NBR 9050:2020 — 6.7.2 e 6.8.2 alínea a; verificar 0,63 m ≤ p + 2e ≤ 0,65 m.
`,ap=`id: elevadores
nome: Elevadores
norma:
  nome: ABNT NBR 9050
  versao: 2020 - versão corrigida 2021
parametros:
  atende_nbr_nm_313:
    label: Atende à ABNT NBR NM 313
    tipo: boolean
    obrigatorio: true
  sinalizacao_tatil_visual:
    label: Sinalização tátil e visual presente
    tipo: boolean
    obrigatorio: true
  instrucao_uso:
    label: Instrução de uso próxima à botoeira
    tipo: boolean
    obrigatorio: true
  indicacao_embarque_desembarque:
    label: Indicação da posição para embarque e desembarque
    tipo: boolean
    obrigatorio: true
  indicacao_pavimentos:
    label: Indicação dos pavimentos atendidos
    tipo: boolean
    obrigatorio: true
  dispositivo_chamada_alcance:
    label: Dispositivo de chamada dentro do alcance manual
    tipo: boolean
    obrigatorio: true
  dispositivo_comunicacao_auxilio:
    label: Dispositivo de comunicação para solicitação de auxílio
    tipo: boolean
    obrigatorio: true
  sinalizacao_pavimento_relevo_braille:
    label: Sinalização de pavimento em relevo e Braille
    tipo: boolean
    obrigatorio: true
  altura_sinalizacao_pavimento:
    label: Altura da sinalização de pavimento
    tipo: number
    unidade: m
    obrigatorio: true
  altura_caracteres:
    label: Altura dos caracteres
    tipo: number
    unidade: mm
    obrigatorio: true
  distancia_caracteres:
    label: Distância entre caracteres
    tipo: number
    unidade: mm
    obrigatorio: true
regras:
- id: nbr_nm_313
  nome: Atendimento à ABNT NBR NM 313
  parametro: atende_nbr_nm_313
  operador: ==
  valor: true
  referencia: ABNT NBR 9050:2020 — 6.10.2.1
- id: sinalizacao_tatil_visual
  nome: Sinalização tátil e visual
  parametro: sinalizacao_tatil_visual
  operador: ==
  valor: true
  referencia: ABNT NBR 9050:2020 — 6.10.2.2
- id: instrucao_uso
  nome: Instrução de uso
  parametro: instrucao_uso
  operador: ==
  valor: true
  referencia: ABNT NBR 9050:2020 — 6.10.2.2
- id: embarque_desembarque
  nome: Indicação de embarque e desembarque
  parametro: indicacao_embarque_desembarque
  operador: ==
  valor: true
  referencia: ABNT NBR 9050:2020 — 6.10.2.2
- id: pavimentos_atendidos
  nome: Indicação dos pavimentos atendidos
  parametro: indicacao_pavimentos
  operador: ==
  valor: true
  referencia: ABNT NBR 9050:2020 — 6.10.2.2
- id: chamada_alcance
  nome: Dispositivo de chamada no alcance manual
  parametro: dispositivo_chamada_alcance
  operador: ==
  valor: true
  referencia: ABNT NBR 9050:2020 — 6.10.2.2
- id: comunicacao_auxilio
  nome: Comunicação para solicitação de auxílio
  parametro: dispositivo_comunicacao_auxilio
  operador: ==
  valor: true
  referencia: ABNT NBR 9050:2020 — 6.10.2.3
- id: sinalizacao_relevo_braille
  nome: Sinalização dos pavimentos em relevo e Braille
  parametro: sinalizacao_pavimento_relevo_braille
  operador: ==
  valor: true
  referencia: ABNT NBR 9050:2020 — 5.4.5.2
- id: altura_sinalizacao_pavimento
  nome: Altura da sinalização de pavimento
  tipo: conditional
  parametro: altura_sinalizacao_pavimento
  condicoes:
  - quando:
      operador: <
      valor: 1.2
    resultado: nao_conforme
    mensagem: A sinalização deve ser instalada entre 1,20 m e 1,60 m do piso.
  - quando:
      operador: <=
      valor: 1.6
    resultado: conforme
    mensagem: Altura dentro da faixa normativa.
  - quando:
      operador: '>'
      valor: 1.6
    resultado: nao_conforme
    mensagem: A sinalização deve ser instalada entre 1,20 m e 1,60 m do piso.
  referencia: ABNT NBR 9050:2020 — 5.4.5.2
- id: altura_caracteres
  nome: Altura dos caracteres
  parametro: altura_caracteres
  tipo: conditional
  condicoes:
  - quando:
      operador: <
      valor: 15
    resultado: nao_conforme
    mensagem: A altura dos caracteres deve estar entre 15 mm e 50 mm.
  - quando:
      operador: <=
      valor: 50
    resultado: conforme
  - quando:
      operador: '>'
      valor: 50
    resultado: nao_conforme
    mensagem: A altura dos caracteres deve estar entre 15 mm e 50 mm.
  referencia: ABNT NBR 9050:2020 — 5.4.5.2
- id: distancia_caracteres
  nome: Distância entre caracteres
  parametro: distancia_caracteres
  operador: ==
  valor: 5
  referencia: ABNT NBR 9050:2020 — 5.4.5.2
`,ip=`id: escadas
nome: Escadas
norma:
  nome: ABNT NBR 9050
  versao: 2020 - versão corrigida 2021
parametros:
  piso:
    label: Piso do degrau
    tipo: number
    unidade: m
    obrigatorio: true
  espelho:
    label: Espelho do degrau
    tipo: number
    unidade: m
    obrigatorio: true
  largura:
    label: Largura
    tipo: number
    unidade: m
    obrigatorio: true
  distancia_primeiro_ultimo:
    label: Distância do primeiro e último degraus da circulação adjacente
    tipo: number
    unidade: m
    obrigatorio: true
  inclinacao_transversal:
    label: Inclinação transversal
    tipo: number
    unidade: '%'
    obrigatorio: true
  ambiente:
    label: Local da escada
    tipo: select
    opcoes:
    - interno
    - externo
  possui_espelho_vazado:
    label: Possui espelho vazado
    tipo: boolean
    obrigatorio: true
  possui_guia_balizamento:
    label: Possui guia de balizamento
    tipo: boolean
    obrigatorio: true
  piso_espelho_constantes:
    label: Pisos e espelhos constantes
    tipo: boolean
    obrigatorio: true
  sinalizacao_degraus:
    label: Degraus sinalizados
    tipo: boolean
    obrigatorio: true
regras:
- id: piso_minimo
  nome: Piso mínimo
  parametro: piso
  operador: '>='
  valor: 0.28
  referencia: ABNT NBR 9050:2020 — 6.8.2
- id: piso_maximo
  nome: Piso máximo
  parametro: piso
  operador: <=
  valor: 0.32
  referencia: ABNT NBR 9050:2020 — 6.8.2
- id: espelho_minimo
  nome: Espelho mínimo
  parametro: espelho
  operador: '>='
  valor: 0.16
  referencia: ABNT NBR 9050:2020 — 6.8.2
- id: espelho_maximo
  nome: Espelho máximo
  parametro: espelho
  operador: <=
  valor: 0.18
  referencia: ABNT NBR 9050:2020 — 6.8.2
- id: largura_minima
  nome: Largura mínima em rota acessível
  parametro: largura
  operador: '>='
  valor: 1.2
  referencia: ABNT NBR 9050:2020 — 6.8.3
- id: distancia_primeiro_ultimo
  nome: Distância mínima do primeiro e último degraus
  parametro: distancia_primeiro_ultimo
  operador: '>='
  valor: 0.3
  referencia: ABNT NBR 9050:2020 — 6.8.4
- id: inclinacao_transversal
  nome: Inclinação transversal máxima
  tipo: conditional
  parametro: ambiente
  condicoes:
  - quando:
      operador: ==
      valor: interno
    verificar:
      parametro: inclinacao_transversal
      operador: <=
      valor: 1
    mensagem: Em escadas internas, a inclinação transversal não pode exceder 1 %.
  - quando:
      operador: ==
      valor: externo
    verificar:
      parametro: inclinacao_transversal
      operador: <=
      valor: 2
    mensagem: Em escadas externas, a inclinação transversal não pode exceder 2 %.
  referencia: ABNT NBR 9050:2020 — 6.8.5
- id: espelho_vazado
  nome: Espelho não vazado
  parametro: possui_espelho_vazado
  operador: ==
  valor: false
  referencia: ABNT NBR 9050:2020 — 6.7.1
- id: guia_balizamento
  nome: Guia de balizamento
  parametro: possui_guia_balizamento
  operador: ==
  valor: true
  referencia: ABNT NBR 9050:2020 — 6.8.3 e 6.6.3
- id: pisos_espelhos_constantes
  nome: Pisos e espelhos constantes
  parametro: piso_espelho_constantes
  operador: ==
  valor: true
  referencia: ABNT NBR 9050:2020 — 6.8.2
- id: sinalizacao_degraus
  nome: Sinalização dos degraus
  parametro: sinalizacao_degraus
  operador: ==
  valor: true
  referencia: ABNT NBR 9050:2020 — 6.8.4 e Seção 5
- id: relacao_piso_espelho
  nome: Relação entre piso e espelho
  tipo: checklist
  parametro: piso_espelho_constantes
  referencia: ABNT NBR 9050:2020 — 6.8.2 alínea a; verificar 0,63 m ≤ p + 2e ≤ 0,65 m.
`,lp=`id: estacionamento
nome: Estacionamento
norma:
  nome: ABNT NBR 9050
  versao: 2020 - versão corrigida 2021
parametros:
  sinalizacao_vertical:
    label: Sinalização vertical adequada
    tipo: boolean
  espaco_circulacao:
    label: Largura do espaço adicional de circulação
    tipo: number
    unidade: m
  vinculada_rota_acessivel:
    label: Vaga vinculada à rota acessível
    tipo: boolean
  evita_circulacao_veiculos:
    label: Evita circulação entre veículos
    tipo: boolean
  piso_regular_estavel:
    label: Piso regular e estável
    tipo: boolean
  distancia_acesso:
    label: Distância até acesso à edificação ou elevadores
    tipo: number
    unidade: m
  faixa_pedestre:
    label: Faixa de circulação de pedestres
    tipo: number
    unidade: m
  vaga_reservada:
    label: Existe vaga reservada quando aplicável
    tipo: boolean
regras:
- id: sinalizacao
  nome: Sinalização da vaga
  parametro: sinalizacao_vertical
  operador: ==
  valor: true
  referencia: ABNT NBR 9050:2020 — 5.5.2.3 e 6.14.1
- id: espaco_circulacao
  nome: Espaço adicional de circulação
  parametro: espaco_circulacao
  operador: '>='
  valor: 1.2
  referencia: ABNT NBR 9050:2020 — 6.14.1.2 b
- id: rota
  nome: Vinculação à rota acessível
  parametro: vinculada_rota_acessivel
  operador: ==
  valor: true
  referencia: ABNT NBR 9050:2020 — 6.14.1.2 c
- id: circulacao
  nome: Evitar circulação entre veículos
  parametro: evita_circulacao_veiculos
  operador: ==
  valor: true
  referencia: ABNT NBR 9050:2020 — 6.14.1.2 d
- id: piso
  nome: Piso regular e estável
  parametro: piso_regular_estavel
  operador: ==
  valor: true
  referencia: ABNT NBR 9050:2020 — 6.14.1.2 e
- id: distancia
  nome: Distância máxima até acesso
  parametro: distancia_acesso
  operador: <=
  valor: 50
  referencia: ABNT NBR 9050:2020 — 6.14.1.2 f
- id: faixa_pedestre
  nome: Faixa de circulação de pedestres
  parametro: faixa_pedestre
  operador: '>='
  valor: 1.2
  referencia: ABNT NBR 9050:2020 — 6.14.2
- id: vaga_reservada
  nome: Previsão de vagas reservadas
  parametro: vaga_reservada
  operador: ==
  valor: true
  referencia: ABNT NBR 9050:2020 — 6.14.3
`,sp=`id: janelas
nome: Janelas
norma:
  nome: ABNT NBR 9050
  versao: 2020 - versão corrigida 2021
parametros:
  altura_comando:
    label: Altura do comando da janela
    tipo: number
    unidade: m
    obrigatorio: true
  abertura_um_movimento:
    label: Operação com um único movimento
    tipo: boolean
    obrigatorio: true
  operacao_uma_mao:
    label: Operação com uma das mãos
    tipo: boolean
    obrigatorio: true
  alcance_comando:
    label: Comando dentro do alcance manual
    tipo: boolean
    obrigatorio: true
regras:
- id: altura_comando_minima
  nome: Altura mínima do comando
  parametro: altura_comando
  operador: '>='
  valor: 0.6
  referencia: ABNT NBR 9050:2020 — 6.11.3.2 e Figura 89
- id: altura_comando_maxima
  nome: Altura máxima do comando
  parametro: altura_comando
  operador: <=
  valor: 1.2
  referencia: ABNT NBR 9050:2020 — 6.11.3.2 e Figura 89
- id: abertura_um_movimento
  nome: Abertura com um único movimento
  parametro: abertura_um_movimento
  operador: ==
  valor: true
  referencia: ABNT NBR 9050:2020 — 6.11.3.2
- id: operacao_uma_mao
  nome: Operação com uma das mãos
  parametro: operacao_uma_mao
  operador: ==
  valor: true
  referencia: ABNT NBR 9050:2020 — 6.11.3.2
- id: alcance_manual
  nome: Comando dentro do alcance manual
  parametro: alcance_comando
  operador: ==
  valor: true
  referencia: ABNT NBR 9050:2020 — 6.11.3.2
`,cp=`id: lavatorio
nome: Lavatório
norma:
  nome: ABNT NBR 9050
  versao: 2020 - versão corrigida 2021
parametros:
  altura_superior:
    label: Altura da superfície superior
    tipo: number
    unidade: m
    obrigatorio: true
  altura_livre_inferior:
    label: Altura livre inferior
    tipo: number
    unidade: m
    obrigatorio: true
  profundidade_livre_inferior:
    label: Profundidade livre inferior
    tipo: number
    unidade: m
    obrigatorio: true
  aproximacao_frontal:
    label: Possui aproximação frontal
    tipo: boolean
    obrigatorio: true
  tipo_torneira:
    label: Tipo de acionamento da torneira
    tipo: select
    opcoes:
    - alavanca
    - sensor_eletronico
    - equivalente
    - outro
    obrigatorio: true
  forca_torneira:
    label: Força de acionamento
    tipo: number
    unidade: N
    obrigatorio: true
  ciclo_fechamento:
    label: Ciclo de fechamento automático
    tipo: number
    unidade: s
  afastamento_barra:
    label: Afastamento da barra da parede
    tipo: number
    unidade: m
  distancia_barra_borda:
    label: Distância da borda ao eixo da barra
    tipo: number
    unidade: m
  alcance_torneira:
    label: Alcance da torneira
    tipo: number
    unidade: m
regras:
- id: altura_minima
  nome: Altura mínima
  parametro: altura_superior
  operador: '>='
  valor: 0.78
  referencia: ABNT NBR 9050:2020 — 7.8.1 e Figura 99
- id: altura_maxima
  nome: Altura máxima
  parametro: altura_superior
  operador: <=
  valor: 0.8
  referencia: ABNT NBR 9050:2020 — 7.8.1 e Figura 99
- id: altura_livre
  nome: Altura livre inferior mínima
  parametro: altura_livre_inferior
  operador: '>='
  valor: 0.73
  referencia: ABNT NBR 9050:2020 — 7.8 e Figura 99
- id: profundidade
  nome: Profundidade livre inferior mínima
  parametro: profundidade_livre_inferior
  operador: '>='
  valor: 0.3
  referencia: ABNT NBR 9050:2020 — Figura 99
- id: aproximacao
  nome: Aproximação frontal
  parametro: aproximacao_frontal
  operador: ==
  valor: true
  referencia: ABNT NBR 9050:2020 — 7.8 e Figura 113
- id: torneira
  nome: Acionamento acessível da torneira
  parametro: tipo_torneira
  operador: '!='
  valor: outro
  referencia: ABNT NBR 9050:2020 — 7.8.2
- id: forca
  nome: Força máxima
  parametro: forca_torneira
  operador: <=
  valor: 23
  referencia: ABNT NBR 9050:2020 — 7.8.2
- id: ciclo
  nome: Ciclo automático
  parametro: ciclo_fechamento
  tipo: checklist
  referencia: ABNT NBR 9050:2020 — 7.8.2; quando aplicável, verificar 10 s a 20 s.
- id: afastamento_barra
  nome: Afastamento mínimo da barra
  parametro: afastamento_barra
  operador: '>='
  valor: 0.04
  referencia: ABNT NBR 9050:2020 — 7.8.1 a
- id: distancia_barra
  nome: Distância máxima da barra à borda
  parametro: distancia_barra_borda
  operador: <=
  valor: 0.2
  referencia: ABNT NBR 9050:2020 — 7.8.1 b
- id: alcance_torneira
  nome: Alcance máximo da torneira
  parametro: alcance_torneira
  operador: <=
  valor: 0.5
  referencia: ABNT NBR 9050:2020 — 7.8.1 c
`,up=`id: mesa
nome: Mesa
norma:
  nome: ABNT NBR 9050
  versao: 2020 - versão corrigida 2021
parametros:
  tipo_mesa:
    label: Tipo de mesa
    tipo: select
    opcoes:
    - trabalho
    - refeicao
    obrigatorio: true
  facilmente_identificada:
    label: Facilmente identificada
    tipo: boolean
    obrigatorio: true
  localizada_em_rota_acessivel:
    label: Localizada em rota acessível
    tipo: boolean
    obrigatorio: true
  aproximacao_frontal:
    label: Possui aproximação frontal
    tipo: boolean
    obrigatorio: true
  circulacao_giro_180:
    label: Circulação adjacente para giro de 180 graus
    tipo: boolean
    obrigatorio: true
  largura_tampo:
    label: Largura do tampo
    tipo: number
    unidade: m
    obrigatorio: true
  altura_tampo:
    label: Altura do tampo
    tipo: number
    unidade: m
    obrigatorio: true
  largura_livre_sob_tampo:
    label: Largura livre sob o tampo
    tipo: number
    unidade: m
    obrigatorio: true
  altura_livre_sob_tampo:
    label: Altura livre sob o tampo
    tipo: number
    unidade: m
    obrigatorio: true
  profundidade_livre_sob_tampo:
    label: Profundidade livre sob o tampo
    tipo: number
    unidade: m
    obrigatorio: true
regras:
- id: identificacao
  nome: Identificação da mesa acessível
  parametro: facilmente_identificada
  operador: ==
  valor: true
  referencia: ABNT NBR 9050:2020 — 9.3.1.1 e 9.3.2.1
- id: rota_acessivel
  nome: Localização em rota acessível
  parametro: localizada_em_rota_acessivel
  operador: ==
  valor: true
  referencia: ABNT NBR 9050:2020 — 9.3.1.1 e 9.3.2.1
- id: aproximacao_frontal
  nome: Aproximação frontal
  parametro: aproximacao_frontal
  operador: ==
  valor: true
  referencia: ABNT NBR 9050:2020 — 9.3.1.2 e 9.3.2.2
- id: giro_180
  nome: Giro de 180 graus
  parametro: circulacao_giro_180
  operador: ==
  valor: true
  referencia: ABNT NBR 9050:2020 — 9.3.1.2 e 9.3.2.2
- id: largura_tampo
  nome: Largura mínima do tampo
  parametro: largura_tampo
  operador: '>='
  valor: 0.9
  referencia: ABNT NBR 9050:2020 — 9.3.1.3
- id: altura_minima
  nome: Altura mínima do tampo
  parametro: altura_tampo
  operador: '>='
  valor: 0.75
  referencia: ABNT NBR 9050:2020 — 9.3.1.3 e 9.3.2.3
- id: altura_maxima
  nome: Altura máxima do tampo
  parametro: altura_tampo
  operador: <=
  valor: 0.85
  referencia: ABNT NBR 9050:2020 — 9.3.1.3 e 9.3.2.3
- id: largura_livre
  nome: Largura livre mínima sob o tampo
  parametro: largura_livre_sob_tampo
  operador: '>='
  valor: 0.8
  referencia: ABNT NBR 9050:2020 — 9.3.1.3 e 9.3.2.4
- id: altura_livre
  nome: Altura livre mínima sob o tampo
  parametro: altura_livre_sob_tampo
  operador: '>='
  valor: 0.73
  referencia: ABNT NBR 9050:2020 — 9.3.1.4 e 9.3.2.4
- id: profundidade_livre
  nome: Profundidade livre mínima sob o tampo
  parametro: profundidade_livre_sob_tampo
  operador: '>='
  valor: 0.5
  referencia: ABNT NBR 9050:2020 — 9.3.1.4 e 9.3.2.4
`,dp=`id: mictorio
nome: Mictório
norma:
  nome: ABNT NBR 9050
  versao: 2020 - versão corrigida 2021
parametros:
  area_aproximacao_frontal:
    label: Área de aproximação frontal
    tipo: boolean
    obrigatorio: true
  altura_valvula:
    label: Altura da válvula
    tipo: number
    unidade: m
    obrigatorio: true
  tipo_acionamento:
    label: Tipo de acionamento
    tipo: select
    opcoes:
    - sensor_eletronico
    - dispositivo_equivalente
    - fechamento_automatico
    - manual
    obrigatorio: true
  forca_acionamento:
    label: Força de acionamento
    tipo: number
    unidade: N
    obrigatorio: true
  possui_barras:
    label: Possui barras de apoio
    tipo: boolean
    obrigatorio: true
  altura_barra:
    label: Altura de instalação da barra
    tipo: number
    unidade: m
  comprimento_barra:
    label: Comprimento mínimo da barra
    tipo: number
    unidade: m
regras:
- id: aproximacao_frontal
  nome: Aproximação frontal
  parametro: area_aproximacao_frontal
  operador: ==
  valor: true
  referencia: ABNT NBR 9050:2020 — 7.10.4.1 e Figura 119
- id: altura_valvula
  nome: Altura máxima da válvula
  parametro: altura_valvula
  operador: <=
  valor: 1.0
  referencia: ABNT NBR 9050:2020 — 7.10.4.2
- id: acionamento
  nome: Acionamento preferencial
  parametro: tipo_acionamento
  operador: '!='
  valor: manual
  referencia: ABNT NBR 9050:2020 — 7.10.4.2
- id: forca
  nome: Força máxima de acionamento
  parametro: forca_acionamento
  operador: <=
  valor: 23
  referencia: ABNT NBR 9050:2020 — 7.10.4.2
- id: barras
  nome: Barras de apoio
  parametro: possui_barras
  operador: ==
  valor: true
  referencia: ABNT NBR 9050:2020 — 7.10.4.3
- id: altura_barra
  nome: Altura da barra
  parametro: altura_barra
  operador: ==
  valor: 0.75
  referencia: ABNT NBR 9050:2020 — Figura 120
- id: comprimento_barra
  nome: Comprimento mínimo da barra
  parametro: comprimento_barra
  operador: '>='
  valor: 0.7
  referencia: ABNT NBR 9050:2020 — Figuras 120 e 121
`,fp=`id: piscina
nome: Piscina
norma:
  nome: ABNT NBR 9050
  versao: 2020 - versão corrigida 2021
parametros:
  altura_maxima_tanque:
    label: Altura máxima na maior profundidade
    tipo: number
    unidade: m
  piso_entorno_atende_nbr_10339:
    label: Piso do entorno atende à ABNT NBR 10339
    tipo: boolean
  bordas_arredondadas:
    label: Bordas com acabamento arredondado
    tipo: boolean
  degraus_arredondados:
    label: Degraus de acesso à água com acabamento arredondado
    tipo: boolean
  corrimaos_arredondados:
    label: Corrimãos com acabamento arredondado
    tipo: boolean
  barras_arredondadas:
    label: Barras de apoio com acabamento arredondado
    tipo: boolean
  meio_acesso_adequado:
    label: Meio de entrada e saída adequado à Tabela 8
    tipo: boolean
  inclinacao_rampa:
    label: Inclinação da rampa
    tipo: number
    unidade: '%'
  corrimao_rampa_ambos_lados:
    label: Corrimão nos dois lados da rampa
    tipo: boolean
  altura_corrimao_rampa:
    label: Altura do corrimão da rampa
    tipo: number
    unidade: m
  altura_banco:
    label: Altura do banco de transferência
    tipo: number
    unidade: m
  extensao_banco:
    label: Extensão do banco
    tipo: number
    unidade: m
  profundidade_banco:
    label: Profundidade do banco
    tipo: number
    unidade: m
  distancia_barras_banco:
    label: Distância entre barras do banco
    tipo: number
    unidade: m
  nivel_agua_banco:
    label: Diferença máxima entre água e assento do banco
    tipo: number
    unidade: m
  largura_escada:
    label: Largura da escada submersa
    tipo: number
    unidade: m
  piso_degrau:
    label: Piso dos degraus submersos
    tipo: number
    unidade: m
  espelho_degrau:
    label: Espelho dos degraus submersos
    tipo: number
    unidade: m
  corrimaos_escada:
    label: Corrimãos nos dois lados e em três alturas
    tipo: boolean
regras:
- id: piso_entorno
  nome: Piso do entorno
  parametro: piso_entorno_atende_nbr_10339
  operador: ==
  valor: true
  referencia: ABNT NBR 9050:2020 — 10.12.1
- id: bordas
  nome: Bordas arredondadas
  parametro: bordas_arredondadas
  operador: ==
  valor: true
  referencia: ABNT NBR 9050:2020 — 10.12.1
- id: degraus
  nome: Degraus arredondados
  parametro: degraus_arredondados
  operador: ==
  valor: true
  referencia: ABNT NBR 9050:2020 — 10.12.1
- id: corrimaos
  nome: Corrimãos arredondados
  parametro: corrimaos_arredondados
  operador: ==
  valor: true
  referencia: ABNT NBR 9050:2020 — 10.12.1
- id: barras
  nome: Barras arredondadas
  parametro: barras_arredondadas
  operador: ==
  valor: true
  referencia: ABNT NBR 9050:2020 — 10.12.1
- id: acesso
  nome: Meio de acesso adequado
  parametro: meio_acesso_adequado
  operador: ==
  valor: true
  referencia: ABNT NBR 9050:2020 — 10.12.2 e Tabela 8
- id: rampa_inclinacao
  nome: Inclinação máxima da rampa
  parametro: inclinacao_rampa
  operador: <=
  valor: 8.33
  referencia: ABNT NBR 9050:2020 — 10.12.2.3
- id: rampa_corrimao
  nome: Corrimão da rampa
  parametro: corrimao_rampa_ambos_lados
  operador: ==
  valor: true
  referencia: ABNT NBR 9050:2020 — 10.12.2.3
- id: rampa_altura
  nome: Altura do corrimão da rampa
  parametro: altura_corrimao_rampa
  operador: ==
  valor: 0.7
  referencia: ABNT NBR 9050:2020 — 10.12.2.3
- id: banco_altura_minima
  nome: Altura mínima do banco
  parametro: altura_banco
  operador: '>='
  valor: 0.4
  referencia: ABNT NBR 9050:2020 — 10.12.2.1 a
- id: banco_altura_maxima
  nome: Altura máxima do banco
  parametro: altura_banco
  operador: <=
  valor: 0.48
  referencia: ABNT NBR 9050:2020 — 10.12.2.1 a
- id: banco_extensao
  nome: Extensão mínima do banco
  parametro: extensao_banco
  operador: '>='
  valor: 1.2
  referencia: ABNT NBR 9050:2020 — 10.12.2.1 b
- id: banco_profundidade
  nome: Profundidade do banco
  parametro: profundidade_banco
  operador: '>='
  valor: 0.45
  referencia: ABNT NBR 9050:2020 — 10.12.2.1 b
- id: banco_barras
  nome: Distância entre barras do banco (verificar intervalo normativo de 1,00 m a 1,10 m)
  parametro: distancia_barras_banco
  referencia: ABNT NBR 9050:2020 — 10.12.2.1 c
  tipo: checklist
  condicoes:
  - quando:
      operador: <=
      valor: 1.1
    verificar:
      parametro: distancia_barras_banco
      operador: '>='
      valor: 1.0
  - quando:
      operador: '>'
      valor: 1.1
    resultado: nao_conforme
- id: banco_agua
  nome: Diferença máxima de nível da água
  parametro: nivel_agua_banco
  operador: <=
  valor: 0.1
  referencia: ABNT NBR 9050:2020 — 10.12.2.1 e
- id: escada_largura_minima
  nome: Largura mínima da escada
  parametro: largura_escada
  operador: '>='
  valor: 0.8
  referencia: ABNT NBR 9050:2020 — 10.12.2.2
- id: escada_largura_maxima
  nome: Largura máxima da escada
  parametro: largura_escada
  operador: <=
  valor: 1.0
  referencia: ABNT NBR 9050:2020 — 10.12.2.2
- id: escada_piso_minimo
  nome: Piso mínimo do degrau submerso
  parametro: piso_degrau
  operador: '>='
  valor: 0.35
  referencia: ABNT NBR 9050:2020 — 10.12.2.2
- id: escada_piso_maximo
  nome: Piso máximo do degrau submerso
  parametro: piso_degrau
  operador: <=
  valor: 0.46
  referencia: ABNT NBR 9050:2020 — 10.12.2.2
- id: escada_espelho
  nome: Espelho máximo
  parametro: espelho_degrau
  operador: <=
  valor: 0.2
  referencia: ABNT NBR 9050:2020 — 10.12.2.2
- id: escada_corrimaos
  nome: Corrimãos da escada
  parametro: corrimaos_escada
  operador: ==
  valor: true
  referencia: ABNT NBR 9050:2020 — 10.12.2.2
- id: dispensa
  nome: Dispensa por profundidade
  parametro: altura_maxima_tanque
  operador: <=
  valor: 0.5
  referencia: ABNT NBR 9050:2020 — Nota da Tabela 8
`,pp=`id: piso-desnivel
nome: Pisos e desníveis
norma:
  nome: ABNT NBR 9050
  versao: 2020 - versão corrigida 2021
parametros:
  tipo_ambiente:
    label: Tipo de ambiente
    tipo: select
    opcoes:
    - interno
    - externo
    obrigatorio: true
  inclinacao_transversal:
    label: Inclinação transversal
    tipo: number
    unidade: '%'
    obrigatorio: true
  inclinacao_longitudinal:
    label: Inclinação longitudinal
    tipo: number
    unidade: '%'
    obrigatorio: true
  revestimento_regular:
    label: Superfície regular
    tipo: boolean
    obrigatorio: true
  revestimento_firme:
    label: Superfície firme
    tipo: boolean
    obrigatorio: true
  revestimento_estavel:
    label: Superfície estável
    tipo: boolean
    obrigatorio: true
  revestimento_antiderrapante:
    label: Superfície antiderrapante
    tipo: boolean
    obrigatorio: true
  desnível:
    label: Desnível
    tipo: number
    unidade: mm
    obrigatorio: true
  possui_tratamento_desnível:
    label: Possui tratamento do desnível
    tipo: boolean
  inclinacao_tratamento:
    label: Inclinação do tratamento do desnível
    tipo: number
    unidade: '%'
  é_reforma:
    label: É reforma
    tipo: boolean
    obrigatorio: true
  fresta_grelha:
    label: Largura da fresta da grelha/junta
    tipo: number
    unidade: mm
  tampa_nivelada:
    label: Tampa nivelada com o piso adjacente
    tipo: boolean
  fresta_tampa:
    label: Largura da fresta da tampa
    tipo: number
    unidade: mm
regras:
- id: revestimento_regular
  nome: Superfície regular
  parametro: revestimento_regular
  operador: ==
  valor: true
  referencia: ABNT NBR 9050:2020 — 6.3.2
- id: revestimento_firme
  nome: Superfície firme
  parametro: revestimento_firme
  operador: ==
  valor: true
  referencia: ABNT NBR 9050:2020 — 6.3.2
- id: revestimento_estavel
  nome: Superfície estável
  parametro: revestimento_estavel
  operador: ==
  valor: true
  referencia: ABNT NBR 9050:2020 — 6.3.2
- id: revestimento_antiderrapante
  nome: Superfície antiderrapante
  parametro: revestimento_antiderrapante
  operador: ==
  valor: true
  referencia: ABNT NBR 9050:2020 — 6.3.2
- id: inclinacao_transversal
  nome: Inclinação transversal máxima
  tipo: conditional
  parametro: tipo_ambiente
  condicoes:
  - quando:
      operador: ==
      valor: interno
    verificar:
      parametro: inclinacao_transversal
      operador: <=
      valor: 2
    mensagem: Em pisos internos, a inclinação transversal não pode exceder 2 %.
  - quando:
      operador: ==
      valor: externo
    verificar:
      parametro: inclinacao_transversal
      operador: <=
      valor: 3
    mensagem: Em pisos externos, a inclinação transversal não pode exceder 3 %.
  referencia: ABNT NBR 9050:2020 — 6.3.3
- id: inclinacao_longitudinal
  nome: Inclinação longitudinal máxima
  parametro: inclinacao_longitudinal
  operador: <
  valor: 5
  referencia: ABNT NBR 9050:2020 — 6.3.3
- id: desnivel_ate_5
  nome: Desnível sem tratamento especial
  tipo: conditional
  parametro: desnível
  condicoes:
  - quando:
      operador: <=
      valor: 5
    resultado: conforme
    mensagem: Desnível de até 5 mm dispensa tratamento especial.
  - quando:
      operador: <=
      valor: 20
    verificar:
      parametro: possui_tratamento_desnível
      operador: ==
      valor: true
    mensagem: Desníveis superiores a 5 mm e até 20 mm precisam de tratamento com inclinação máxima de 1:2 (50 %).
  - quando:
      operador: '>'
      valor: 20
    resultado: atencao
    mensagem: Desnível superior a 20 mm deve ser considerado degrau conforme 6.7.
  referencia: ABNT NBR 9050:2020 — 6.3.4.1
- id: inclinacao_tratamento
  nome: Inclinação máxima do tratamento do desnível
  parametro: inclinacao_tratamento
  operador: <=
  valor: 50
  referencia: ABNT NBR 9050:2020 — 6.3.4.1
- id: desnivel_reforma
  nome: Desnível excepcional em reforma
  tipo: conditional
  parametro: é_reforma
  condicoes:
  - quando:
      operador: ==
      valor: false
    resultado: conforme
  - quando:
      operador: ==
      valor: true
    verificar:
      parametro: desnível
      operador: <=
      valor: 75
    mensagem: Em reformas, pode ser considerado desnível de até 75 mm somente nas condições excepcionais previstas pela norma.
  referencia: ABNT NBR 9050:2020 — 6.3.4.2
- id: fresta_grelha
  nome: Fresta máxima de grelha ou junta
  parametro: fresta_grelha
  operador: <=
  valor: 15
  referencia: ABNT NBR 9050:2020 — 6.3.5
- id: tampa_nivelada
  nome: Tampa nivelada
  parametro: tampa_nivelada
  operador: ==
  valor: true
  referencia: ABNT NBR 9050:2020 — 6.3.6
- id: fresta_tampa
  nome: Fresta máxima da tampa
  parametro: fresta_tampa
  operador: <=
  valor: 15
  referencia: ABNT NBR 9050:2020 — 6.3.6
`,mp=`id: piso_tatil
nome: Piso tátil
norma:
  nome: ABNT NBR 9050
  versao: 2020 - versão corrigida 2021
parametros:
  sinalizacao_tatil_visual:
    label: Possui sinalização tátil e visual no piso quando aplicável
    tipo: boolean
  atende_nbr_16537:
    label: Atende à ABNT NBR 16537
    tipo: boolean
  contraste_lrv:
    label: Diferença de LRV em relação à superfície adjacente
    tipo: number
    unidade: pontos
regras:
- id: atendimento_nbr_16537
  nome: Atendimento à NBR 16537
  parametro: atende_nbr_16537
  operador: ==
  valor: true
  referencia: ABNT NBR 9050:2020 — 5.4.6
- id: contraste
  nome: Contraste visual
  parametro: contraste_lrv
  operador: '>='
  valor: 30
  referencia: ABNT NBR 9050:2020 — 5.2.9.1.1 e Tabela 2
- id: sinalizacao
  nome: Existência quando aplicável
  parametro: sinalizacao_tatil_visual
  operador: ==
  valor: true
  referencia: ABNT NBR 9050:2020 — 5.4.6
`,hp=`id: portas
nome: Portas
norma:
  nome: ABNT NBR 9050
  versao: 2020 - versão corrigida 2021
parametros:
  vao_livre:
    label: Vão livre
    tipo: number
    unidade: m
    obrigatorio: true
  altura_livre:
    label: Altura livre
    tipo: number
    unidade: m
    obrigatorio: true
  forca_acionamento:
    label: Força de acionamento
    tipo: number
    unidade: N
    obrigatorio: true
  altura_macaneta:
    label: Altura da maçaneta
    tipo: number
    unidade: m
    obrigatorio: true
  possui_macaneta_alavanca:
    label: Maçaneta do tipo alavanca
    tipo: boolean
    obrigatorio: true
  abertura_um_movimento:
    label: Abertura com um único movimento
    tipo: boolean
    obrigatorio: true
  tipo_puxador:
    label: Tipo de puxador
    tipo: select
    opcoes:
    - nenhum
    - vertical
    - horizontal
  diametro_puxador:
    label: Diâmetro do puxador
    tipo: number
    unidade: m
  comprimento_puxador:
    label: Comprimento do puxador
    tipo: number
    unidade: m
  afastamento_puxador:
    label: Afastamento do puxador da porta
    tipo: number
    unidade: m
  afastamento_batente_puxador:
    label: Afastamento do puxador do batente
    tipo: number
    unidade: m
  altura_puxador:
    label: Altura do puxador
    tipo: number
    unidade: m
regras:
- id: vao_livre_minimo
  nome: Vão livre mínimo
  parametro: vao_livre
  operador: '>='
  valor: 0.8
  referencia: ABNT NBR 9050:2020 — 6.11.2.4 e 6.11.2.7
- id: altura_livre_minima
  nome: Altura livre mínima
  parametro: altura_livre
  operador: '>='
  valor: 2.1
  referencia: ABNT NBR 9050:2020 — Figura 86 / 6.11.2
- id: forca_maxima_acionamento
  nome: Força máxima de acionamento
  parametro: forca_acionamento
  operador: <=
  valor: 36
  referencia: ABNT NBR 9050:2020 — 6.11.2.5
- id: altura_macaneta_minima
  nome: Altura mínima da maçaneta
  parametro: altura_macaneta
  operador: '>='
  valor: 0.8
  referencia: ABNT NBR 9050:2020 — 6.11.2.6 e 4.6.6.1
- id: altura_macaneta_maxima
  nome: Altura máxima da maçaneta
  parametro: altura_macaneta
  operador: <=
  valor: 1.1
  referencia: ABNT NBR 9050:2020 — 6.11.2.6 e 4.6.6.1
- id: macaneta_alavanca
  nome: Maçaneta do tipo alavanca
  parametro: possui_macaneta_alavanca
  operador: ==
  valor: true
  referencia: ABNT NBR 9050:2020 — 6.11.2.6
- id: abertura_um_movimento
  nome: Abertura com um único movimento
  parametro: abertura_um_movimento
  operador: ==
  valor: true
  referencia: ABNT NBR 9050:2020 — 6.11.2.6
- id: diametro_puxador_minimo
  nome: Diâmetro mínimo do puxador
  parametro: diametro_puxador
  operador: '>='
  valor: 0.025
  referencia: ABNT NBR 9050:2020 — 4.6.6.2 e 4.6.6.3
- id: diametro_puxador_maximo
  nome: Diâmetro máximo do puxador
  parametro: diametro_puxador
  operador: <=
  valor: 0.035
  referencia: ABNT NBR 9050:2020 — 4.6.6.2 e 4.6.6.3
- id: comprimento_puxador_minimo
  nome: Comprimento mínimo do puxador
  parametro: comprimento_puxador
  operador: '>='
  valor: 0.3
  referencia: ABNT NBR 9050:2020 — 4.6.6.2
- id: afastamento_puxador_minimo
  nome: Afastamento mínimo do puxador
  parametro: afastamento_puxador
  operador: '>='
  valor: 0.04
  referencia: ABNT NBR 9050:2020 — 4.6.6.2 e 4.6.6.3
- id: afastamento_batente_puxador
  nome: Afastamento do puxador do batente
  parametro: afastamento_batente_puxador
  operador: '>='
  valor: 0.1
  referencia: ABNT NBR 9050:2020 — 4.6.6.2 e 4.6.6.3
- id: altura_puxador_minima
  nome: Altura mínima do puxador
  parametro: altura_puxador
  operador: '>='
  valor: 0.8
  referencia: ABNT NBR 9050:2020 — 4.6.6.2 e 4.6.6.3
- id: altura_puxador_maxima
  nome: Altura máxima do puxador
  parametro: altura_puxador
  operador: <=
  valor: 1.1
  referencia: ABNT NBR 9050:2020 — 4.6.6.2 e 4.6.6.3
`,vp=`id: rampas
nome: Rampas
norma:
  nome: ABNT NBR 9050
  versao: 2020 - versão corrigida 2021
parametros:
  inclinacao:
    label: Inclinação
    tipo: number
    unidade: '%'
    obrigatorio: true
  desnivel_segmento:
    label: Desnível de cada segmento
    tipo: number
    unidade: m
    obrigatorio: true
  numero_segmentos:
    label: Número de segmentos
    tipo: number
    unidade: segmentos
    obrigatorio: true
  largura:
    label: Largura livre
    tipo: number
    unidade: m
    obrigatorio: true
  inclinacao_transversal:
    label: Inclinação transversal
    tipo: number
    unidade: '%'
    obrigatorio: true
  ambiente:
    label: Local da rampa
    tipo: select
    opcoes:
    - interno
    - externo
  patamar_inicial_final:
    label: Comprimento do patamar inicial/final
    tipo: number
    unidade: m
    obrigatorio: true
  patamar_intermediario:
    label: Comprimento do patamar intermediário
    tipo: number
    unidade: m
    obrigatorio: true
  raio_curva:
    label: Raio interno da curva
    tipo: number
    unidade: m
  rampa_curva:
    label: Rampa em curva
    tipo: boolean
    obrigatorio: true
  guia_balizamento:
    label: Possui guia de balizamento
    tipo: boolean
    obrigatorio: true
regras:
- id: inclinacao_por_tabela
  nome: Dimensionamento da inclinação e desnível
  tipo: conditional
  parametro: inclinacao
  condicoes:
  - quando:
      operador: <=
      valor: 5.0
    verificar:
      parametro: desnivel_segmento
      operador: <=
      valor: 1.5
    mensagem: Para inclinação de até 5 %, o desnível de cada segmento deve ser de até 1,50 m.
  - quando:
      operador: <=
      valor: 6.25
    verificar:
      parametro: desnivel_segmento
      operador: <=
      valor: 1.0
    mensagem: Para inclinação acima de 5 % até 6,25 %, o desnível de cada segmento deve ser de até 1,00 m.
  - quando:
      operador: <=
      valor: 8.33
    verificar:
      parametro: desnivel_segmento
      operador: <=
      valor: 0.8
    mensagem: Para inclinação acima de 6,25 % até 8,33 %, o desnível de cada segmento deve ser de até 0,80 m.
  referencia: ABNT NBR 9050:2020 — 6.6.2.1 e Tabela 4
- id: numero_segmentos_inclinacao_alta
  nome: Número máximo de segmentos para inclinação acima de 6,25 %
  tipo: conditional
  parametro: inclinacao
  condicoes:
  - quando:
      operador: <=
      valor: 6.25
    resultado: conforme
  - quando:
      operador: <=
      valor: 8.33
    verificar:
      parametro: numero_segmentos
      operador: <=
      valor: 15
    mensagem: Para inclinação acima de 6,25 % até 8,33 %, são permitidos no máximo 15 segmentos.
  referencia: ABNT NBR 9050:2020 — 6.6.2.1 e Tabela 4
- id: largura_minima
  nome: Largura livre mínima
  parametro: largura
  operador: '>='
  valor: 1.2
  referencia: ABNT NBR 9050:2020 — 6.6.2.5
- id: inclinacao_transversal
  nome: Inclinação transversal máxima
  tipo: conditional
  parametro: ambiente
  condicoes:
  - quando:
      operador: ==
      valor: interno
    verificar:
      parametro: inclinacao_transversal
      operador: <=
      valor: 2
    mensagem: Em rampas internas, a inclinação transversal não pode exceder 2 %.
  - quando:
      operador: ==
      valor: externo
    verificar:
      parametro: inclinacao_transversal
      operador: <=
      valor: 3
    mensagem: Em rampas externas, a inclinação transversal não pode exceder 3 %.
  referencia: ABNT NBR 9050:2020 — 6.6.2.4
- id: patamar_inicial_final
  nome: Patamar inicial e final
  parametro: patamar_inicial_final
  operador: '>='
  valor: 1.2
  referencia: ABNT NBR 9050:2020 — 6.6.4
- id: patamar_intermediario
  nome: Patamar intermediário
  parametro: patamar_intermediario
  operador: '>='
  valor: 1.2
  referencia: ABNT NBR 9050:2020 — 6.6.4
- id: raio_rampa_curva
  nome: Raio mínimo da rampa em curva
  tipo: conditional
  parametro: rampa_curva
  condicoes:
  - quando:
      operador: ==
      valor: false
    resultado: conforme
  - quando:
      operador: ==
      valor: true
    verificar:
      parametro: raio_curva
      operador: '>='
      valor: 3.0
    mensagem: Rampas em curva devem ter raio mínimo de 3,00 m.
  referencia: ABNT NBR 9050:2020 — 6.6.2.3
- id: guia_balizamento
  nome: Guia de balizamento
  parametro: guia_balizamento
  operador: ==
  valor: true
  referencia: ABNT NBR 9050:2020 — 6.6.3
- id: inclinacao_transversal_maxima
  nome: Inclinação transversal absoluta
  parametro: inclinacao_transversal
  operador: <=
  valor: 3
  referencia: ABNT NBR 9050:2020 — 6.6.2.4
`,gp=`id: sanitario_acessivel
nome: Sanitário acessível
norma:
  nome: ABNT NBR 9050
  versao: 2020 - versão corrigida 2021
parametros:
  entrada_independente:
    label: Possui entrada independente
    tipo: boolean
    obrigatorio: true
  sinalizacao:
    label: Possui sinalização
    tipo: boolean
    obrigatorio: true
  alarme_emergencia:
    label: Possui alarme de emergência
    tipo: boolean
    obrigatorio: true
  area_manobra_360:
    label: Possui área de manobra de 360 graus
    tipo: boolean
    obrigatorio: true
  diametro_manobra:
    label: Diâmetro da área de manobra
    tipo: number
    unidade: m
    obrigatorio: true
  vao_porta:
    label: Vão livre da porta
    tipo: number
    unidade: m
    obrigatorio: true
  porta_abre_externamente:
    label: Porta abre para o lado externo
    tipo: boolean
    obrigatorio: true
  comprimento_puxador:
    label: Comprimento do puxador
    tipo: number
    unidade: m
  afastamento_puxador:
    label: Afastamento do puxador
    tipo: number
    unidade: mm
  diametro_puxador:
    label: Diâmetro do puxador
    tipo: number
    unidade: mm
  distancia_maxima:
    label: Distância até o sanitário
    tipo: number
    unidade: m
regras:
- id: entrada_independente
  nome: Entrada independente
  parametro: entrada_independente
  operador: ==
  valor: true
  referencia: ABNT NBR 9050:2020 — 7.4.2
- id: sinalizacao
  nome: Sinalização
  parametro: sinalizacao
  operador: ==
  valor: true
  referencia: ABNT NBR 9050:2020 — 7.3.1 e 5.3.5.3
- id: alarme
  nome: Alarme de emergência
  parametro: alarme_emergencia
  operador: ==
  valor: true
  referencia: ABNT NBR 9050:2020 — 7.4.2.2 e 5.6.4.1
- id: manobra
  nome: Área de manobra de 360 graus
  parametro: area_manobra_360
  operador: ==
  valor: true
  referencia: ABNT NBR 9050:2020 — 7.5 e Figura 100
- id: diametro
  nome: Diâmetro mínimo da manobra
  parametro: diametro_manobra
  operador: '>='
  valor: 1.5
  referencia: ABNT NBR 9050:2020 — 4.3.4 e Figura 100
- id: vao
  nome: Vão livre mínimo da porta
  parametro: vao_porta
  operador: '>='
  valor: 0.8
  referencia: ABNT NBR 9050:2020 — 6.11.2.4 e 7.5
- id: abertura
  nome: Abertura externa
  parametro: porta_abre_externamente
  operador: ==
  valor: true
  referencia: ABNT NBR 9050:2020 — 7.5
- id: puxador_comprimento
  nome: Comprimento mínimo do puxador
  parametro: comprimento_puxador
  operador: '>='
  valor: 0.4
  referencia: ABNT NBR 9050:2020 — 7.5
- id: puxador_afastamento
  nome: Afastamento máximo do puxador
  parametro: afastamento_puxador
  operador: <=
  valor: 40
  referencia: ABNT NBR 9050:2020 — 7.5
- id: puxador_diametro_minimo
  nome: Diâmetro mínimo do puxador
  parametro: diametro_puxador
  operador: '>='
  valor: 25
  referencia: ABNT NBR 9050:2020 — 7.5
- id: puxador_diametro_maximo
  nome: Diâmetro máximo do puxador
  parametro: diametro_puxador
  operador: <=
  valor: 35
  referencia: ABNT NBR 9050:2020 — 7.5
- id: distancia
  nome: Distância máxima recomendada
  parametro: distancia_maxima
  operador: <=
  valor: 50
  referencia: ABNT NBR 9050:2020 — 7.3.2
`,_p=`id: sinalizacao
nome: Sinalização
norma:
  nome: ABNT NBR 9050
  versao: 2020 - versão corrigida 2021
parametros:
  contraste_lrv:
    label: Diferença de LRV
    tipo: number
    unidade: pontos
  material_sem_reflexo:
    label: Material sem brilho ou alta reflexão
    tipo: boolean
  tamanho_letras:
    label: Altura dos caracteres
    tipo: number
    unidade: m
  distancia_leitura:
    label: Distância de leitura
    tipo: number
    unidade: m
  simbolo_altura:
    label: Altura do símbolo
    tipo: number
    unidade: m
  braille:
    label: Possui Braille quando aplicável
    tipo: boolean
  relevo:
    label: Possui alto-relevo quando aplicável
    tipo: boolean
  sinalizacao_tatil_sonora:
    label: Possui sinalização tátil e/ou sonora quando aplicável
    tipo: boolean
  sinalizacao_suspensa_altura:
    label: Altura da sinalização suspensa
    tipo: number
    unidade: m
  objetiva:
    label: Texto objetivo
    tipo: boolean
regras:
- id: contraste_informacao
  nome: Contraste da informação
  parametro: contraste_lrv
  operador: '>='
  valor: 60
  referencia: ABNT NBR 9050:2020 — 5.2.9.1.1 e Tabela 2
- id: sem_reflexo
  nome: Evitar ofuscamento
  parametro: material_sem_reflexo
  operador: ==
  valor: true
  referencia: ABNT NBR 9050:2020 — 5.2.9.1.2.2
- id: proporcao_letras
  nome: Proporção das letras
  parametro: tamanho_letras
  operador: '>='
  valor: 0.005
  referencia: ABNT NBR 9050:2020 — 5.2.9.1.3
- id: simbolo_minimo
  nome: Símbolo mínimo
  parametro: simbolo_altura
  operador: '>='
  valor: 0.08
  referencia: ABNT NBR 9050:2020 — 5.2.9.1.4
- id: braille
  nome: Braille quando aplicável
  parametro: braille
  operador: ==
  valor: true
  referencia: ABNT NBR 9050:2020 — 5.4 e 5.2.8.3
- id: relevo
  nome: Alto-relevo quando aplicável
  parametro: relevo
  operador: ==
  valor: true
  referencia: ABNT NBR 9050:2020 — 5.2.8.3
- id: tatil_sonora
  nome: Complementação tátil e/ou sonora
  parametro: sinalizacao_tatil_sonora
  operador: ==
  valor: true
  referencia: ABNT NBR 9050:2020 — 5.2.8.2.2 e 5.5.1.2
- id: suspensa
  nome: Altura mínima da sinalização suspensa
  parametro: sinalizacao_suspensa_altura
  operador: '>='
  valor: 2.1
  referencia: ABNT NBR 9050:2020 — 5.2.8.2.3
- id: objetiva
  nome: Texto objetivo
  parametro: objetiva
  operador: ==
  valor: true
  referencia: ABNT NBR 9050:2020 — 5.2.8.3
`,bp=`id: vagas_acessiveis
nome: Vagas acessíveis
norma:
  nome: ABNT NBR 9050
  versao: 2020 - versão corrigida 2021
parametros:
  possui_sinalizacao:
    label: Vaga sinalizada
    tipo: boolean
    obrigatorio: true
  possui_faixa_circulacao:
    label: Possui faixa adicional de circulação
    tipo: boolean
    obrigatorio: true
  largura_faixa_circulacao:
    label: Largura da faixa adicional de circulação
    tipo: number
    unidade: m
    obrigatorio: true
  piso_regular_estavel:
    label: Piso regular e estável
    tipo: boolean
    obrigatorio: true
  distancia_acesso:
    label: Distância até o acesso à edificação ou elevador
    tipo: number
    unidade: m
    obrigatorio: true
  evita_circulacao_entre_veiculos:
    label: Localização evita circulação entre veículos
    tipo: boolean
    obrigatorio: true
  vinculada_rota_acessivel:
    label: Vinculada à rota acessível
    tipo: boolean
    obrigatorio: true
  sinalizacao_nao_interfere:
    label: Sinalização não interfere na circulação
    tipo: boolean
    obrigatorio: true
  faixa_pedestre_estacionamento:
    label: Faixa de circulação de pedestres no estacionamento
    tipo: boolean
    obrigatorio: true
  largura_faixa_pedestre:
    label: Largura da faixa de circulação de pedestres
    tipo: number
    unidade: m
    obrigatorio: true
regras:
- id: sinalizacao
  nome: Sinalização da vaga
  parametro: possui_sinalizacao
  operador: ==
  valor: true
  referencia: ABNT NBR 9050:2020 — 6.14.1 e 5.5.2.3
- id: faixa_circulacao
  nome: Faixa adicional de circulação
  parametro: possui_faixa_circulacao
  operador: ==
  valor: true
  referencia: ABNT NBR 9050:2020 — 6.14.1.2 b
- id: largura_faixa_circulacao
  nome: Largura mínima da faixa adicional
  parametro: largura_faixa_circulacao
  operador: '>='
  valor: 1.2
  referencia: ABNT NBR 9050:2020 — 6.14.1.2 b
- id: piso_regular_estavel
  nome: Piso regular e estável
  parametro: piso_regular_estavel
  operador: ==
  valor: true
  referencia: ABNT NBR 9050:2020 — 6.14.1.2 e
- id: distancia_acesso
  nome: Distância máxima até acesso ou elevador
  parametro: distancia_acesso
  operador: <=
  valor: 50
  referencia: ABNT NBR 9050:2020 — 6.14.1.2 f
- id: evita_circulacao_entre_veiculos
  nome: Localização segura da vaga
  parametro: evita_circulacao_entre_veiculos
  operador: ==
  valor: true
  referencia: ABNT NBR 9050:2020 — 6.14.1.2 d
- id: vinculada_rota_acessivel
  nome: Vinculação à rota acessível
  parametro: vinculada_rota_acessivel
  operador: ==
  valor: true
  referencia: ABNT NBR 9050:2020 — 6.14.1.2 c
- id: sinalizacao_nao_interfere
  nome: Sinalização sem interferência
  parametro: sinalizacao_nao_interfere
  operador: ==
  valor: true
  referencia: ABNT NBR 9050:2020 — 6.14.1
- id: faixa_pedestre_estacionamento
  nome: Faixa de circulação de pedestres
  parametro: faixa_pedestre_estacionamento
  operador: ==
  valor: true
  referencia: ABNT NBR 9050:2020 — 6.14.2
- id: largura_faixa_pedestre
  nome: Largura mínima da faixa de circulação de pedestres
  parametro: largura_faixa_pedestre
  operador: '>='
  valor: 1.2
  referencia: ABNT NBR 9050:2020 — 6.14.2
`,yp=Object.assign({"../rules/nbr9050-2020/bacia_sanitaria.yaml":Yf,"../rules/nbr9050-2020/balcao.yaml":Jf,"../rules/nbr9050-2020/barras_apoio.yaml":Qf,"../rules/nbr9050-2020/bebedouro.yaml":Xf,"../rules/nbr9050-2020/caixa_autoatendimento.yaml":Zf,"../rules/nbr9050-2020/calcada.yaml":ep,"../rules/nbr9050-2020/chuveiro.yaml":np,"../rules/nbr9050-2020/corredores.yaml":tp,"../rules/nbr9050-2020/corrimaos.yaml":op,"../rules/nbr9050-2020/degraus-isolados.yaml":rp,"../rules/nbr9050-2020/elevadores.yaml":ap,"../rules/nbr9050-2020/escadas.yaml":ip,"../rules/nbr9050-2020/estacionamento.yaml":lp,"../rules/nbr9050-2020/janelas.yaml":sp,"../rules/nbr9050-2020/lavatorio.yaml":cp,"../rules/nbr9050-2020/mesa.yaml":up,"../rules/nbr9050-2020/mictorio.yaml":dp,"../rules/nbr9050-2020/piscina.yaml":fp,"../rules/nbr9050-2020/piso-desnivel.yaml":pp,"../rules/nbr9050-2020/piso_tatil.yaml":mp,"../rules/nbr9050-2020/portas.yaml":hp,"../rules/nbr9050-2020/rampas.yaml":vp,"../rules/nbr9050-2020/sanitario_acessivel.yaml":gp,"../rules/nbr9050-2020/sinalizacao.yaml":_p,"../rules/nbr9050-2020/vagas_acessiveis.yaml":bp});async function Ap(){return Object.entries(yp).map(([e,n])=>({path:e,ruleSet:er.load(n)})).sort((e,n)=>e.ruleSet.nome.localeCompare(n.ruleSet.nome))}const Ot=typeof document<"u";function Tc(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function Np(e){return e.__esModule||e[Symbol.toStringTag]==="Module"||e.default&&Tc(e.default)}const ke=Object.assign;function ra(e,n){const t={};for(const o in n){const r=n[o];t[o]=Pn(r)?r.map(e):e(r)}return t}const uo=()=>{},Pn=Array.isArray;function _l(e,n){const t={};for(const o in e)t[o]=o in n?n[o]:e[o];return t}const Rc=/#/g,xp=/&/g,Tp=/\//g,Rp=/=/g,Bp=/\?/g,Bc=/\+/g,wp=/%5B/g,Sp=/%5D/g,wc=/%5E/g,Ep=/%60/g,Sc=/%7B/g,Cp=/%7C/g,Ec=/%7D/g,Op=/%20/g;function Ja(e){return e==null?"":encodeURI(""+e).replace(Cp,"|").replace(wp,"[").replace(Sp,"]")}function Ip(e){return Ja(e).replace(Sc,"{").replace(Ec,"}").replace(wc,"^")}function wa(e){return Ja(e).replace(Bc,"%2B").replace(Op,"+").replace(Rc,"%23").replace(xp,"%26").replace(Ep,"`").replace(Sc,"{").replace(Ec,"}").replace(wc,"^")}function Pp(e){return wa(e).replace(Rp,"%3D")}function kp(e){return Ja(e).replace(Rc,"%23").replace(Bp,"%3F")}function Lp(e){return kp(e).replace(Tp,"%2F")}function xo(e){if(e==null)return null;try{return decodeURIComponent(""+e)}catch{}return""+e}const jp=/\/$/,Dp=e=>e.replace(jp,"");function aa(e,n,t="/"){let o,r={},i="",l="";const s=n.indexOf("#");let c=n.indexOf("?");return c=s>=0&&c>s?-1:c,c>=0&&(o=n.slice(0,c),i=n.slice(c,s>0?s:n.length),r=e(i.slice(1))),s>=0&&(o=o||n.slice(0,s),l=n.slice(s,n.length)),o=Fp(o??n,t),{fullPath:o+i+l,path:o,query:r,hash:xo(l)}}function Mp(e,n){const t=n.query?e(n.query):"";return n.path+(t&&"?")+t+(n.hash||"")}function bl(e,n){return!n||!e.toLowerCase().startsWith(n.toLowerCase())?e:e.slice(n.length)||"/"}function qp(e,n,t){const o=n.matched.length-1,r=t.matched.length-1;return o>-1&&o===r&&Vt(n.matched[o],t.matched[r])&&Cc(n.params,t.params)&&e(n.query)===e(t.query)&&n.hash===t.hash}function Vt(e,n){return(e.aliasOf||e)===(n.aliasOf||n)}function Cc(e,n){if(Object.keys(e).length!==Object.keys(n).length)return!1;for(var t in e)if(!$p(e[t],n[t]))return!1;return!0}function $p(e,n){return Pn(e)?yl(e,n):Pn(n)?yl(n,e):e?.valueOf()===n?.valueOf()}function yl(e,n){return Pn(n)?e.length===n.length&&e.every((t,o)=>t===n[o]):e.length===1&&e[0]===n}function Fp(e,n){if(e.startsWith("/"))return e;if(!e)return n;const t=n.split("/"),o=e.split("/"),r=o[o.length-1];(r===".."||r===".")&&o.push("");let i=t.length-1,l,s;for(l=0;l<o.length;l++)if(s=o[l],s!==".")if(s==="..")i>1&&i--;else break;return t.slice(0,i).join("/")+"/"+o.slice(l).join("/")}const rt={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};let Sa=(function(e){return e.pop="pop",e.push="push",e})({}),ia=(function(e){return e.back="back",e.forward="forward",e.unknown="",e})({});function Vp(e){if(!e)if(Ot){const n=document.querySelector("base");e=n&&n.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),Dp(e)}const zp=/^[^#]+#/;function Up(e,n){return e.replace(zp,"#")+n}function Hp(e,n){const t=document.documentElement.getBoundingClientRect(),o=e.getBoundingClientRect();return{behavior:n.behavior,left:o.left-t.left-(n.left||0),top:o.top-t.top-(n.top||0)}}const _r=()=>({left:window.scrollX,top:window.scrollY});function Kp(e){let n;if("el"in e){const t=e.el,o=typeof t=="string"&&t.startsWith("#"),r=typeof t=="string"?o?document.getElementById(t.slice(1)):document.querySelector(t):t;if(!r)return;n=Hp(r,e)}else n=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(n):window.scrollTo(n.left!=null?n.left:window.scrollX,n.top!=null?n.top:window.scrollY)}function Al(e,n){return(history.state?history.state.position-n:-1)+e}const Ea=new Map;function Gp(e,n){Ea.set(e,n)}function Wp(e){const n=Ea.get(e);return Ea.delete(e),n}function Yp(e){return typeof e=="string"||e&&typeof e=="object"}function Oc(e){return typeof e=="string"||typeof e=="symbol"}let He=(function(e){return e[e.MATCHER_NOT_FOUND=1]="MATCHER_NOT_FOUND",e[e.NAVIGATION_GUARD_REDIRECT=2]="NAVIGATION_GUARD_REDIRECT",e[e.NAVIGATION_ABORTED=4]="NAVIGATION_ABORTED",e[e.NAVIGATION_CANCELLED=8]="NAVIGATION_CANCELLED",e[e.NAVIGATION_DUPLICATED=16]="NAVIGATION_DUPLICATED",e})({});const Ic=Symbol("");He.MATCHER_NOT_FOUND+"",He.NAVIGATION_GUARD_REDIRECT+"",He.NAVIGATION_ABORTED+"",He.NAVIGATION_CANCELLED+"",He.NAVIGATION_DUPLICATED+"";function zt(e,n){return ke(new Error,{type:e,[Ic]:!0},n)}function Kn(e,n){return e instanceof Error&&Ic in e&&(n==null||!!(e.type&n))}const Jp=["params","query","hash"];function Qp(e){if(typeof e=="string")return e;if(e.path!=null)return e.path;const n={};for(const t of Jp)t in e&&(n[t]=e[t]);return JSON.stringify(n,null,2)}function Xp(e){const n={};if(e===""||e==="?")return n;const t=(e[0]==="?"?e.slice(1):e).split("&");for(let o=0;o<t.length;++o){const r=t[o].replace(Bc," "),i=r.indexOf("="),l=xo(i<0?r:r.slice(0,i)),s=i<0?null:xo(r.slice(i+1));if(l in n){let c=n[l];Pn(c)||(c=n[l]=[c]),c.push(s)}else n[l]=s}return n}function Nl(e){let n="";for(let t in e){const o=e[t];if(t=Pp(t),o==null){o!==void 0&&(n+=(n.length?"&":"")+t);continue}(Pn(o)?o.map(r=>r&&wa(r)):[o&&wa(o)]).forEach(r=>{r!==void 0&&(n+=(n.length?"&":"")+t,r!=null&&(n+="="+r))})}return n}function Zp(e){const n={};for(const t in e){const o=e[t];o!==void 0&&(n[t]=Pn(o)?o.map(r=>r==null?null:""+r):o==null?o:""+o)}return n}const em=Symbol(""),xl=Symbol(""),br=Symbol(""),Qa=Symbol(""),Ca=Symbol("");function Zt(){let e=[];function n(o){return e.push(o),()=>{const r=e.indexOf(o);r>-1&&e.splice(r,1)}}function t(){e=[]}return{add:n,list:()=>e.slice(),reset:t}}function lt(e,n,t,o,r,i=l=>l()){const l=o&&(o.enterCallbacks[r]=o.enterCallbacks[r]||[]);return()=>new Promise((s,c)=>{const u=m=>{m===!1?c(zt(He.NAVIGATION_ABORTED,{from:t,to:n})):m instanceof Error?c(m):Yp(m)?c(zt(He.NAVIGATION_GUARD_REDIRECT,{from:n,to:m})):(l&&o.enterCallbacks[r]===l&&typeof m=="function"&&l.push(m),s())},d=i(()=>e.call(o&&o.instances[r],n,t,u));let p=Promise.resolve(d);e.length<3&&(p=p.then(u)),p.catch(m=>c(m))})}function la(e,n,t,o,r=i=>i()){const i=[];for(const l of e)for(const s in l.components){let c=l.components[s];if(!(n!=="beforeRouteEnter"&&!l.instances[s]))if(Tc(c)){const u=(c.__vccOpts||c)[n];u&&i.push(lt(u,t,o,l,s,r))}else{let u=c();i.push(()=>u.then(d=>{if(!d)throw new Error(`Couldn't resolve component "${s}" at "${l.path}"`);const p=Np(d)?d.default:d;l.mods[s]=d,l.components[s]=p;const m=(p.__vccOpts||p)[n];return m&&lt(m,t,o,l,s,r)()}))}}return i}function nm(e,n){const t=[],o=[],r=[],i=Math.max(n.matched.length,e.matched.length);for(let l=0;l<i;l++){const s=n.matched[l];s&&(e.matched.find(u=>Vt(u,s))?o.push(s):t.push(s));const c=e.matched[l];c&&(n.matched.find(u=>Vt(u,c))||r.push(c))}return[t,o,r]}let tm=()=>location.protocol+"//"+location.host;function Pc(e,n){const{pathname:t,search:o,hash:r}=n,i=e.indexOf("#");if(i>-1){let l=r.includes(e.slice(i))?e.slice(i).length:1,s=r.slice(l);return s[0]!=="/"&&(s="/"+s),bl(s,"")}return bl(t,e)+o+r}function om(e,n,t,o){let r=[],i=[],l=null;const s=({state:m})=>{const v=Pc(e,location),S=t.value,N=n.value;let T=0;if(m){if(t.value=v,n.value=m,l&&l===S){l=null;return}T=N?m.position-N.position:0}else o(v);r.forEach(k=>{k(t.value,S,{delta:T,type:Sa.pop,direction:T?T>0?ia.forward:ia.back:ia.unknown})})};function c(){l=t.value}function u(m){r.push(m);const v=()=>{const S=r.indexOf(m);S>-1&&r.splice(S,1)};return i.push(v),v}function d(){if(document.visibilityState==="hidden"){const{history:m}=window;if(!m.state)return;m.replaceState(ke({},m.state,{scroll:_r()}),"")}}function p(){for(const m of i)m();i=[],window.removeEventListener("popstate",s),window.removeEventListener("pagehide",d),document.removeEventListener("visibilitychange",d)}return window.addEventListener("popstate",s),window.addEventListener("pagehide",d),document.addEventListener("visibilitychange",d),{pauseListeners:c,listen:u,destroy:p}}function Tl(e,n,t,o=!1,r=!1){return{back:e,current:n,forward:t,replaced:o,position:window.history.length,scroll:r?_r():null}}function rm(e){const{history:n,location:t}=window,o={value:Pc(e,t)},r={value:n.state};r.value||i(o.value,{back:null,current:o.value,forward:null,position:n.length-1,replaced:!0,scroll:null},!0);function i(c,u,d){const p=e.indexOf("#"),m=p>-1?(t.host&&document.querySelector("base")?e:e.slice(p))+c:tm()+e+c;try{n[d?"replaceState":"pushState"](u,"",m),r.value=u}catch(v){console.error(v),t[d?"replace":"assign"](m)}}function l(c,u){i(c,ke({},n.state,Tl(r.value.back,c,r.value.forward,!0),u,{position:r.value.position}),!0),o.value=c}function s(c,u){const d=ke({},r.value,n.state,{forward:c,scroll:_r()});i(d.current,d,!0),i(c,ke({},Tl(o.value,c,null),{position:d.position+1},u),!1),o.value=c}return{location:o,state:r,push:s,replace:l}}function am(e){e=Vp(e);const n=rm(e),t=om(e,n.state,n.location,n.replace);function o(i,l=!0){l||t.pauseListeners(),history.go(i)}const r=ke({location:"",base:e,go:o,createHref:Up.bind(null,e)},n,t);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>n.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>n.state.value}),r}let bt=(function(e){return e[e.Static=0]="Static",e[e.Param=1]="Param",e[e.Group=2]="Group",e})({});var Ye=(function(e){return e[e.Static=0]="Static",e[e.Param=1]="Param",e[e.ParamRegExp=2]="ParamRegExp",e[e.ParamRegExpEnd=3]="ParamRegExpEnd",e[e.EscapeNext=4]="EscapeNext",e})(Ye||{});const im={type:bt.Static,value:""},lm=/[a-zA-Z0-9_]/;function sm(e){if(!e)return[[]];if(e==="/")return[[im]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function n(v){throw new Error(`ERR (${t})/"${u}": ${v}`)}let t=Ye.Static,o=t;const r=[];let i;function l(){i&&r.push(i),i=[]}let s=0,c,u="",d="";function p(){u&&(t===Ye.Static?i.push({type:bt.Static,value:u}):t===Ye.Param||t===Ye.ParamRegExp||t===Ye.ParamRegExpEnd?(i.length>1&&(c==="*"||c==="+")&&n(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),i.push({type:bt.Param,value:u,regexp:d,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):n("Invalid state to consume buffer"),u="")}function m(){u+=c}for(;s<e.length;){if(c=e[s++],c==="\\"&&t!==Ye.ParamRegExp){o=t,t=Ye.EscapeNext;continue}switch(t){case Ye.Static:c==="/"?(u&&p(),l()):c===":"?(p(),t=Ye.Param):m();break;case Ye.EscapeNext:m(),t=o;break;case Ye.Param:c==="("?t=Ye.ParamRegExp:lm.test(c)?m():(p(),t=Ye.Static,c!=="*"&&c!=="?"&&c!=="+"&&s--);break;case Ye.ParamRegExp:c===")"?d[d.length-1]=="\\"?d=d.slice(0,-1)+c:t=Ye.ParamRegExpEnd:d+=c;break;case Ye.ParamRegExpEnd:p(),t=Ye.Static,c!=="*"&&c!=="?"&&c!=="+"&&s--,d="";break;default:n("Unknown state");break}}return t===Ye.ParamRegExp&&n(`Unfinished custom RegExp for param "${u}"`),p(),l(),r}const Rl="[^/]+?",cm={sensitive:!1,strict:!1,start:!0,end:!0};var cn=(function(e){return e[e._multiplier=10]="_multiplier",e[e.Root=90]="Root",e[e.Segment=40]="Segment",e[e.SubSegment=30]="SubSegment",e[e.Static=40]="Static",e[e.Dynamic=20]="Dynamic",e[e.BonusCustomRegExp=10]="BonusCustomRegExp",e[e.BonusWildcard=-50]="BonusWildcard",e[e.BonusRepeatable=-20]="BonusRepeatable",e[e.BonusOptional=-8]="BonusOptional",e[e.BonusStrict=.7000000000000001]="BonusStrict",e[e.BonusCaseSensitive=.25]="BonusCaseSensitive",e})(cn||{});const um=/[.+*?^${}()[\]/\\]/g;function dm(e,n){const t=ke({},cm,n),o=[];let r=t.start?"^":"";const i=[];for(const u of e){const d=u.length?[]:[cn.Root];t.strict&&!u.length&&(r+="/");for(let p=0;p<u.length;p++){const m=u[p];let v=cn.Segment+(t.sensitive?cn.BonusCaseSensitive:0);if(m.type===bt.Static)p||(r+="/"),r+=m.value.replace(um,"\\$&"),v+=cn.Static;else if(m.type===bt.Param){const{value:S,repeatable:N,optional:T,regexp:k}=m;i.push({name:S,repeatable:N,optional:T});const x=k||Rl;if(x!==Rl){v+=cn.BonusCustomRegExp;try{`${x}`}catch(z){throw new Error(`Invalid custom RegExp for param "${S}" (${x}): `+z.message)}}let M=N?`((?:${x})(?:/(?:${x}))*)`:`(${x})`;p||(M=T&&u.length<2?`(?:/${M})`:"/"+M),T&&(M+="?"),r+=M,v+=cn.Dynamic,T&&(v+=cn.BonusOptional),N&&(v+=cn.BonusRepeatable),x===".*"&&(v+=cn.BonusWildcard)}d.push(v)}o.push(d)}if(t.strict&&t.end){const u=o.length-1;o[u][o[u].length-1]+=cn.BonusStrict}t.strict||(r+="/?"),t.end?r+="$":t.strict&&!r.endsWith("/")&&(r+="(?:/|$)");const l=new RegExp(r,t.sensitive?"":"i");function s(u){const d=u.match(l),p={};if(!d)return null;for(let m=1;m<d.length;m++){const v=d[m]||"",S=i[m-1];p[S.name]=v&&S.repeatable?v.split("/"):v}return p}function c(u){let d="",p=!1;for(const m of e){(!p||!d.endsWith("/"))&&(d+="/"),p=!1;for(const v of m)if(v.type===bt.Static)d+=v.value;else if(v.type===bt.Param){const{value:S,repeatable:N,optional:T}=v,k=S in u?u[S]:"";if(Pn(k)&&!N)throw new Error(`Provided param "${S}" is an array but it is not repeatable (* or + modifiers)`);const x=Pn(k)?k.join("/"):k;if(!x)if(T)m.length<2&&(d.endsWith("/")?d=d.slice(0,-1):p=!0);else throw new Error(`Missing required param "${S}"`);d+=x}}return d||"/"}return{re:l,score:o,keys:i,parse:s,stringify:c}}function fm(e,n){let t=0;for(;t<e.length&&t<n.length;){const o=n[t]-e[t];if(o)return o;t++}return e.length<n.length?e.length===1&&e[0]===cn.Static+cn.Segment?-1:1:e.length>n.length?n.length===1&&n[0]===cn.Static+cn.Segment?1:-1:0}function kc(e,n){let t=0;const o=e.score,r=n.score;for(;t<o.length&&t<r.length;){const i=fm(o[t],r[t]);if(i)return i;t++}if(Math.abs(r.length-o.length)===1){if(Bl(o))return 1;if(Bl(r))return-1}return r.length-o.length}function Bl(e){const n=e[e.length-1];return e.length>0&&n[n.length-1]<0}const pm={strict:!1,end:!0,sensitive:!1};function mm(e,n,t){const o=dm(sm(e.path),t),r=ke(o,{record:e,parent:n,children:[],alias:[]});return n&&!r.record.aliasOf==!n.record.aliasOf&&n.children.push(r),r}function hm(e,n){const t=[],o=new Map;n=_l(pm,n);function r(p){return o.get(p)}function i(p,m,v){const S=!v,N=Sl(p);N.aliasOf=v&&v.record;const T=_l(n,p),k=[N];if("alias"in p){const z=typeof p.alias=="string"?[p.alias]:p.alias;for(const de of z)k.push(Sl(ke({},N,{components:v?v.record.components:N.components,path:de,aliasOf:v?v.record:N})))}let x,M;for(const z of k){const{path:de}=z;if(m&&de[0]!=="/"){const ae=m.record.path,$=ae[ae.length-1]==="/"?"":"/";z.path=m.record.path+(de&&$+de)}if(x=mm(z,m,T),v?v.alias.push(x):(M=M||x,M!==x&&M.alias.push(x),S&&p.name&&!El(x)&&l(p.name)),Lc(x)&&c(x),N.children){const ae=N.children;for(let $=0;$<ae.length;$++)i(ae[$],x,v&&v.children[$])}v=v||x}return M?()=>{l(M)}:uo}function l(p){if(Oc(p)){const m=o.get(p);m&&(o.delete(p),t.splice(t.indexOf(m),1),m.children.forEach(l),m.alias.forEach(l))}else{const m=t.indexOf(p);m>-1&&(t.splice(m,1),p.record.name&&o.delete(p.record.name),p.children.forEach(l),p.alias.forEach(l))}}function s(){return t}function c(p){const m=_m(p,t);t.splice(m,0,p),p.record.name&&!El(p)&&o.set(p.record.name,p)}function u(p,m){let v,S={},N,T;if("name"in p&&p.name){if(v=o.get(p.name),!v)throw zt(He.MATCHER_NOT_FOUND,{location:p});T=v.record.name,S=ke(wl(m.params,v.keys.filter(M=>!M.optional).concat(v.parent?v.parent.keys.filter(M=>M.optional):[]).map(M=>M.name)),p.params&&wl(p.params,v.keys.map(M=>M.name))),N=v.stringify(S)}else if(p.path!=null)N=p.path,v=t.find(M=>M.re.test(N)),v&&(S=v.parse(N),T=v.record.name);else{if(v=m.name?o.get(m.name):t.find(M=>M.re.test(m.path)),!v)throw zt(He.MATCHER_NOT_FOUND,{location:p,currentLocation:m});T=v.record.name,S=ke({},m.params,p.params),N=v.stringify(S)}const k=[];let x=v;for(;x;)k.unshift(x.record),x=x.parent;return{name:T,path:N,params:S,matched:k,meta:gm(k)}}e.forEach(p=>i(p));function d(){t.length=0,o.clear()}return{addRoute:i,resolve:u,removeRoute:l,clearRoutes:d,getRoutes:s,getRecordMatcher:r}}function wl(e,n){const t={};for(const o of n)o in e&&(t[o]=e[o]);return t}function Sl(e){const n={path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:e.aliasOf,beforeEnter:e.beforeEnter,props:vm(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}};return Object.defineProperty(n,"mods",{value:{}}),n}function vm(e){const n={},t=e.props||!1;if("component"in e)n.default=t;else for(const o in e.components)n[o]=typeof t=="object"?t[o]:t;return n}function El(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function gm(e){return e.reduce((n,t)=>ke(n,t.meta),{})}function _m(e,n){let t=0,o=n.length;for(;t!==o;){const i=t+o>>1;kc(e,n[i])<0?o=i:t=i+1}const r=bm(e);return r&&(o=n.lastIndexOf(r,o-1)),o}function bm(e){let n=e;for(;n=n.parent;)if(Lc(n)&&kc(e,n)===0)return n}function Lc({record:e}){return!!(e.name||e.components&&Object.keys(e.components).length||e.redirect)}function Cl(e){const n=Ue(br),t=Ue(Qa),o=De(()=>{const c=le(e.to);return n.resolve(c)}),r=De(()=>{const{matched:c}=o.value,{length:u}=c,d=c[u-1],p=t.matched;if(!d||!p.length)return-1;const m=p.findIndex(Vt.bind(null,d));if(m>-1)return m;const v=Ol(c[u-2]);return u>1&&Ol(d)===v&&p[p.length-1].path!==v?p.findIndex(Vt.bind(null,c[u-2])):m}),i=De(()=>r.value>-1&&xm(t.params,o.value.params)),l=De(()=>r.value>-1&&r.value===t.matched.length-1&&Cc(t.params,o.value.params));function s(c={}){if(Nm(c)){const u=n[le(e.replace)?"replace":"push"](le(e.to)).catch(uo);return e.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>u),u}return Promise.resolve()}return{route:o,href:De(()=>o.value.href),isActive:i,isExactActive:l,navigate:s}}function ym(e){return e.length===1?e[0]:e}const Am=ws({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:Cl,setup(e,{slots:n}){const t=Bo(Cl(e)),{options:o}=Ue(br),r=De(()=>({[Il(e.activeClass,o.linkActiveClass,"router-link-active")]:t.isActive,[Il(e.exactActiveClass,o.linkExactActiveClass,"router-link-exact-active")]:t.isExactActive}));return()=>{const i=n.default&&ym(n.default(t));return e.custom?i:$t("a",{"aria-current":t.isExactActive?e.ariaCurrentValue:null,href:t.href,onClick:t.navigate,class:r.value},i)}}}),Pe=Am;function Nm(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const n=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(n))return}return e.preventDefault&&e.preventDefault(),!0}}function xm(e,n){for(const t in n){const o=n[t],r=e[t];if(typeof o=="string"){if(o!==r)return!1}else if(!Pn(r)||r.length!==o.length||o.some((i,l)=>i.valueOf()!==r[l].valueOf()))return!1}return!0}function Ol(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const Il=(e,n,t)=>e??n??t,Tm=ws({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:n,slots:t}){const o=Ue(Ca),r=De(()=>e.route||o.value),i=Ue(xl,0),l=De(()=>{let u=le(i);const{matched:d}=r.value;let p;for(;(p=d[u])&&!p.components;)u++;return u}),s=De(()=>r.value.matched[l.value]);io(xl,De(()=>l.value+1)),io(em,s),io(Ca,r);const c=Se();return xt(()=>[c.value,s.value,e.name],([u,d,p],[m,v,S])=>{d&&(d.instances[p]=u,v&&v!==d&&u&&u===m&&(d.leaveGuards.size||(d.leaveGuards=v.leaveGuards),d.updateGuards.size||(d.updateGuards=v.updateGuards))),u&&d&&(!v||!Vt(d,v)||!m)&&(d.enterCallbacks[p]||[]).forEach(N=>N(u))},{flush:"post"}),()=>{const u=r.value,d=e.name,p=s.value,m=p&&p.components[d];if(!m)return Pl(t.default,{Component:m,route:u});const v=p.props[d],S=v?v===!0?u.params:typeof v=="function"?v(u):v:null,T=$t(m,ke({},S,n,{onVnodeUnmounted:k=>{k.component.isUnmounted&&(p.instances[d]=null)},ref:c}));return Pl(t.default,{Component:T,route:u})||T}}});function Pl(e,n){if(!e)return null;const t=e(n);return t.length===1?t[0]:t}const jc=Tm;function Rm(e){const n=hm(e.routes,e),t=e.parseQuery||Xp,o=e.stringifyQuery||Nl,r=e.history,i=Zt(),l=Zt(),s=Zt(),c=_u(rt);let u=rt;Ot&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const d=ra.bind(null,O=>""+O),p=ra.bind(null,Lp),m=ra.bind(null,xo);function v(O,se){let W,pe;return Oc(O)?(W=n.getRecordMatcher(O),pe=se):pe=O,n.addRoute(pe,W)}function S(O){const se=n.getRecordMatcher(O);se&&n.removeRoute(se)}function N(){return n.getRoutes().map(O=>O.record)}function T(O){return!!n.getRecordMatcher(O)}function k(O,se){if(se=ke({},se||c.value),typeof O=="string"){const y=aa(t,O,se.path),I=n.resolve({path:y.path},se),j=r.createHref(y.fullPath);return ke(y,I,{params:m(I.params),hash:xo(y.hash),redirectedFrom:void 0,href:j})}let W;if(O.path!=null)W=ke({},O,{path:aa(t,O.path,se.path).path});else{const y=ke({},O.params);for(const I in y)y[I]==null&&delete y[I];W=ke({},O,{params:p(y)}),se.params=p(se.params)}const pe=n.resolve(W,se),Ae=O.hash||"";pe.params=d(m(pe.params));const h=Mp(o,ke({},O,{hash:Ip(Ae),path:pe.path})),g=r.createHref(h);return ke({fullPath:h,hash:Ae,query:o===Nl?Zp(O.query):O.query||{}},pe,{redirectedFrom:void 0,href:g})}function x(O){return typeof O=="string"?aa(t,O,c.value.path):ke({},O)}function M(O,se){if(u!==O)return zt(He.NAVIGATION_CANCELLED,{from:se,to:O})}function z(O){return $(O)}function de(O){return z(ke(x(O),{replace:!0}))}function ae(O,se){const W=O.matched[O.matched.length-1];if(W&&W.redirect){const{redirect:pe}=W;let Ae=typeof pe=="function"?pe(O,se):pe;return typeof Ae=="string"&&(Ae=Ae.includes("?")||Ae.includes("#")?Ae=x(Ae):{path:Ae},Ae.params={}),ke({query:O.query,hash:O.hash,params:Ae.path!=null?{}:O.params},Ae)}}function $(O,se){const W=u=k(O),pe=c.value,Ae=O.state,h=O.force,g=O.replace===!0,y=ae(W,pe);if(y)return $(ke(x(y),{state:typeof y=="object"?ke({},Ae,y.state):Ae,force:h,replace:g}),se||W);const I=W;I.redirectedFrom=se;let j;return!h&&qp(o,pe,W)&&(j=zt(He.NAVIGATION_DUPLICATED,{to:I,from:pe}),mn(pe,pe,!0,!1)),(j?Promise.resolve(j):Y(I,pe)).catch(E=>Kn(E)?Kn(E,He.NAVIGATION_GUARD_REDIRECT)?E:Ze(E):xe(E,I,pe)).then(E=>{if(E){if(Kn(E,He.NAVIGATION_GUARD_REDIRECT))return $(ke({replace:g},x(E.to),{state:typeof E.to=="object"?ke({},Ae,E.to.state):Ae,force:h}),se||I)}else E=B(I,pe,!0,g,Ae);return q(I,pe,E),E})}function ie(O,se){const W=M(O,se);return W?Promise.reject(W):Promise.resolve()}function oe(O){const se=wn.values().next().value;return se&&typeof se.runWithContext=="function"?se.runWithContext(O):O()}function Y(O,se){let W;const[pe,Ae,h]=nm(O,se);W=la(pe.reverse(),"beforeRouteLeave",O,se);for(const y of pe)y.leaveGuards.forEach(I=>{W.push(lt(I,O,se))});const g=ie.bind(null,O,se);return W.push(g),Ge(W).then(()=>{W=[];for(const y of i.list())W.push(lt(y,O,se));return W.push(g),Ge(W)}).then(()=>{W=la(Ae,"beforeRouteUpdate",O,se);for(const y of Ae)y.updateGuards.forEach(I=>{W.push(lt(I,O,se))});return W.push(g),Ge(W)}).then(()=>{W=[];for(const y of h)if(y.beforeEnter)if(Pn(y.beforeEnter))for(const I of y.beforeEnter)W.push(lt(I,O,se));else W.push(lt(y.beforeEnter,O,se));return W.push(g),Ge(W)}).then(()=>(O.matched.forEach(y=>y.enterCallbacks={}),W=la(h,"beforeRouteEnter",O,se,oe),W.push(g),Ge(W))).then(()=>{W=[];for(const y of l.list())W.push(lt(y,O,se));return W.push(g),Ge(W)}).catch(y=>Kn(y,He.NAVIGATION_CANCELLED)?y:Promise.reject(y))}function q(O,se,W){s.list().forEach(pe=>oe(()=>pe(O,se,W)))}function B(O,se,W,pe,Ae){const h=M(O,se);if(h)return h;const g=se===rt,y=Ot?history.state:{};W&&(pe||g?r.replace(O.fullPath,ke({scroll:g&&y&&y.scroll},Ae)):r.push(O.fullPath,Ae)),c.value=O,mn(O,se,W,g),Ze()}let X;function Z(){X||(X=r.listen((O,se,W)=>{if(!Ke.listening)return;const pe=k(O),Ae=ae(pe,Ke.currentRoute.value);if(Ae){$(ke(Ae,{replace:!0,force:!0}),pe).catch(uo);return}u=pe;const h=c.value;Ot&&Gp(Al(h.fullPath,W.delta),_r()),Y(pe,h).catch(g=>Kn(g,He.NAVIGATION_ABORTED|He.NAVIGATION_CANCELLED)?g:Kn(g,He.NAVIGATION_GUARD_REDIRECT)?($(ke(x(g.to),{force:!0}),pe).then(y=>{Kn(y,He.NAVIGATION_ABORTED|He.NAVIGATION_DUPLICATED)&&!W.delta&&W.type===Sa.pop&&r.go(-1,!1)}).catch(uo),Promise.reject()):(W.delta&&r.go(-W.delta,!1),xe(g,pe,h))).then(g=>{g=g||B(pe,h,!1),g&&(W.delta&&!Kn(g,He.NAVIGATION_CANCELLED)?r.go(-W.delta,!1):W.type===Sa.pop&&Kn(g,He.NAVIGATION_ABORTED|He.NAVIGATION_DUPLICATED)&&r.go(-1,!1)),q(pe,h,g)}).catch(uo)}))}let Fe=Zt(),Q=Zt(),Be;function xe(O,se,W){Ze(O);const pe=Q.list();return pe.length?pe.forEach(Ae=>Ae(O,se,W)):console.error(O),Promise.reject(O)}function vn(){return Be&&c.value!==rt?Promise.resolve():new Promise((O,se)=>{Fe.add([O,se])})}function Ze(O){return Be||(Be=!O,Z(),Fe.list().forEach(([se,W])=>O?W(O):se()),Fe.reset()),O}function mn(O,se,W,pe){const{scrollBehavior:Ae}=e;if(!Ot||!Ae)return Promise.resolve();const h=!W&&Wp(Al(O.fullPath,0))||(pe||!W)&&history.state&&history.state.scroll||null;return qt().then(()=>Ae(O,se,h)).then(g=>g&&Kp(g)).catch(g=>xe(g,O,se))}const We=O=>r.go(O);let gn;const wn=new Set,Ke={currentRoute:c,listening:!0,addRoute:v,removeRoute:S,clearRoutes:n.clearRoutes,hasRoute:T,getRoutes:N,resolve:k,options:e,push:z,replace:de,go:We,back:()=>We(-1),forward:()=>We(1),beforeEach:i.add,beforeResolve:l.add,afterEach:s.add,onError:Q.add,isReady:vn,install(O){O.component("RouterLink",Pe),O.component("RouterView",jc),O.config.globalProperties.$router=Ke,Object.defineProperty(O.config.globalProperties,"$route",{enumerable:!0,get:()=>le(c)}),Ot&&!gn&&c.value===rt&&(gn=!0,z(r.location).catch(pe=>{}));const se={};for(const pe in rt)Object.defineProperty(se,pe,{get:()=>c.value[pe],enumerable:!0});O.provide(br,Ke),O.provide(Qa,us(se)),O.provide(Ca,c);const W=O.unmount;wn.add(O),O.unmount=function(){wn.delete(O),wn.size<1&&(u=rt,X&&X(),X=null,c.value=rt,gn=!1,Be=!1),W()}}};function Ge(O){return O.reduce((se,W)=>se.then(()=>oe(W)),Promise.resolve())}return Ke}function Dc(){return Ue(br)}function Xa(e){return Ue(Qa)}const Bm="/Extensao-26.2/icon-512.png";const ht={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};const kl=(...e)=>e.filter((n,t,o)=>!!n&&n.trim()!==""&&o.indexOf(n)===t).join(" ").trim();function sa(e){return e!=null}function wm(e,n={}){const t=n.attributeNames??{},o=m=>t[m]??m,r=e.size??e.width??ht.width,i=e.size??e.height??ht.height,l=e.aliases?.filter(m=>typeof m=="string"&&m.trim()!=="").map(m=>`lucide-${m}`)??[],s=[...e.name?[`lucide-${e.name}`]:[],...l],c=n.className?.split(" ").filter(Boolean)??[],u=n.includeDefaultClasses===!1?kl(...c):kl("lucide",...s,...c),d=n.absoluteStrokeWidth?Number(n.strokeWidth??ht["stroke-width"])*Number(e.size??e.width??ht.width)/Number(n.size??n.width??ht.width):n.strokeWidth??ht["stroke-width"];return["svg",{...Object.entries(ht).reduce((m,[v,S])=>(m[o(v)]=S,m),{}),..."color"in n&&n.color&&{[o("stroke")]:n.color},..."size"in n&&sa(n.size)&&{[o("width")]:n.size,[o("height")]:n.size},..."width"in n&&sa(n.width)&&{[o("width")]:n.width},..."height"in n&&sa(n.height)&&{[o("height")]:n.height},[o("stroke-width")]:d,...u&&{[o("class")]:u},[o("viewBox")]:`0 0 ${r} ${i}`,...n.hasA11yProp===!1?{[o("aria-hidden")]:"true"}:{},..."attributes"in n&&n.attributes},e.node.map(m=>{const[v,S,N]=m,T=n.nonScalingStroke?{[o("vector-effect")]:"non-scaling-stroke",...S}:S;return N?[v,T,N]:[v,T]})]}const Sm=e=>{for(const n in e)if(n.startsWith("aria-")||n==="role"||n==="title")return!0;return!1};const qo=e=>e==="";const Em=e=>e?.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();const Cm=Symbol("lucide-icons");function Om(){return Ue(Cm,{})}const Im=({name:e,iconNode:n,"icon-node":t,icon:o={name:Em(e),node:n??t,size:24,aliases:[]},absoluteStrokeWidth:r,"absolute-stroke-width":i,nonScalingStroke:l,"non-scaling-stroke":s,strokeWidth:c,"stroke-width":u,size:d,width:p=d,height:m=d,color:v,...S},{slots:N})=>{const{size:T,color:k,strokeWidth:x=2,absoluteStrokeWidth:M=!1,nonScalingStroke:z=!1,class:de=""}=Om(),ae=qo(r)||qo(i)||r===!0||i===!0||M===!0,$=qo(l)||qo(s)||l===!0||s===!0||z===!0;delete S.class;const ie=N.default?.(),[,oe,Y=[]]=wm(o,{color:v??k,width:p??d??T,height:m??d??T,strokeWidth:c??u??x,absoluteStrokeWidth:ae,nonScalingStroke:$,className:de,hasA11yProp:ie!=null&&ie.length>0||Sm(S),attributes:S});return $t("svg",oe,[...Y.map(q=>$t(...q)),...ie??[]])};function bn(e,n=[]){const t=typeof e=="string"?{name:e,node:n}:e;return(o,{slots:r})=>$t(Im,{...o,icon:t},r.default?{default:r.default}:void 0)}const Pm={name:"accessibility",size:24,node:[["circle",{cx:"16",cy:"4",r:"1",key:"1grugj"}],["path",{d:"m18 19 1-7-6 1",key:"r0i19z"}],["path",{d:"m5 8 3-3 5.5 3-2.36 3.5",key:"9ptxx2"}],["path",{d:"M4.24 14.5a5 5 0 0 0 6.88 6",key:"10kmtu"}],["path",{d:"M13.76 17.5a5 5 0 0 0-6.88-6",key:"2qq6rc"}]]},km=bn(Pm);const Lm={name:"arrow-right",size:24,node:[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]},jm=bn(Lm);const Dm={name:"box",size:24,node:[["path",{d:"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",key:"hh9hay"}],["path",{d:"m3.3 7 8.7 5 8.7-5",key:"g66t2b"}],["path",{d:"M12 22V12",key:"d0xqtd"}]]},Mm=bn(Dm);const qm={name:"chevron-right",size:24,node:[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]},nr=bn(qm);const $m={name:"chevron-left",size:24,node:[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]},Rt=bn($m);const Fm={name:"circle-question-mark",size:24,node:[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",key:"1u773s"}],["path",{d:"M12 17h.01",key:"p32p05"}]],aliases:["help-circle","circle-help"]},Vm=bn(Fm);const zm={name:"clipboard-check",size:24,node:[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1",key:"tgr4d6"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",key:"116196"}],["path",{d:"m9 14 2 2 4-4",key:"df797q"}]]},yt=bn(zm);const Um={name:"folder-kanban",size:24,node:[["path",{d:"M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z",key:"1fr9dc"}],["path",{d:"M8 10v4",key:"tgpxqk"}],["path",{d:"M12 10v2",key:"hh53o1"}],["path",{d:"M16 10v6",key:"1d6xys"}]]},Mc=bn(Um);const Hm={name:"folder-plus",size:24,node:[["path",{d:"M12 10v6",key:"1bos4e"}],["path",{d:"M9 13h6",key:"1uhe8q"}],["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",key:"1kt360"}]]},tr=bn(Hm);const Km={name:"folder",size:24,node:[["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",key:"1kt360"}]]},Ll=bn(Km);const Gm={name:"house",size:24,node:[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"r6nss1"}]],aliases:["home"]},Wm=bn(Gm);const Ym={name:"plus",size:24,node:[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]},jl=bn(Ym);const Jm={name:"trash",size:24,node:[["path",{d:"M10 11v6",key:"nco0om"}],["path",{d:"M14 11v6",key:"outv1u"}],["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",key:"miytrc"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",key:"e791ji"}]],aliases:["trash-2"]},yr=bn(Jm),Qm={class:"app-shell"},Xm={class:"sidebar"},Zm={class:"content",tabindex:"-1"},eh={key:0,class:"bottom-nav"},nh={__name:"AppLayout",setup(e){const n=Xa(),t=De(()=>n.path.startsWith("/rules")?"rules":n.path.startsWith("/quick-evaluation")?"quick":"projects");return(o,r)=>(V(),re("div",Qm,[_("aside",Xm,[G(le(Pe),{class:"brand",to:"/projects"},{default:ye(()=>[...r[0]||(r[0]=[_("img",{class:"brand__mark",src:Bm,alt:"Acesso Verificador"},null,-1),_("span",null,[Te("Acesso"),_("br"),_("small",null,"Verificador")],-1)])]),_:1}),_("nav",null,[G(le(Pe),{class:un(["nav-item",{"is-active":t.value==="projects"}]),to:"/projects"},{default:ye(()=>[G(le(Ll),{size:20,"aria-hidden":"true"}),r[1]||(r[1]=_("span",null,"Projetos",-1))]),_:1},8,["class"]),G(le(Pe),{class:un(["nav-item",{"is-active":t.value==="quick"}]),to:"/quick-evaluation"},{default:ye(()=>[G(le(yt),{size:20,"aria-hidden":"true"}),r[2]||(r[2]=_("span",null,"Avaliação rápida",-1))]),_:1},8,["class"]),G(le(Pe),{class:un(["nav-item",{"is-active":t.value==="rules"}]),to:"/rules"},{default:ye(()=>[G(le(yt),{size:20,"aria-hidden":"true"}),r[3]||(r[3]=_("span",null,"Regras",-1))]),_:1},8,["class"])])]),_("main",Zm,[hn(o.$slots,"default")]),le(n).meta.hideBottomNav?Ee("",!0):(V(),re("nav",eh,[G(le(Pe),{class:un(["nav-item",{"is-active":t.value==="projects"}]),to:"/projects"},{default:ye(()=>[G(le(Ll),{size:20,"aria-hidden":"true"}),r[4]||(r[4]=_("span",null,"Projetos",-1))]),_:1},8,["class"]),G(le(Pe),{class:un(["nav-item",{"is-active":t.value==="quick"}]),to:"/quick-evaluation"},{default:ye(()=>[G(le(yt),{size:20,"aria-hidden":"true"}),r[5]||(r[5]=_("span",null,"Avaliação rápida",-1))]),_:1},8,["class"]),G(le(Pe),{class:un(["nav-item",{"is-active":t.value==="rules"}]),to:"/rules"},{default:ye(()=>[G(le(yt),{size:20,"aria-hidden":"true"}),r[6]||(r[6]=_("span",null,"Regras",-1))]),_:1},8,["class"])]))]))}},Za=(e,n)=>{const t=e.__vccOpts||e;for(const[o,r]of n)t[o]=r;return t},th={id:"confirm-popup-message",class:"confirm-popup__message"},oh={class:"confirm-popup__actions"},rh={__name:"ConfirmPopup",setup(e,{expose:n}){const t=Se(null),o=Se(null),r=Se(!1),i=Se(""),l=Se({top:"0px",left:"0px"});let s=null,c=null;function u(){if(!s||!t.value)return;const T=s.getBoundingClientRect(),k=t.value.getBoundingClientRect(),x=8,M=12,de=T.bottom+x+k.height<=window.innerHeight-M?T.bottom+x:Math.max(M,T.top-k.height-x),ae=Math.min(Math.max(M,T.left),Math.max(M,window.innerWidth-k.width-M));l.value={top:`${de}px`,left:`${ae}px`}}function d(T){!t.value?.contains(T.target)&&!s?.contains(T.target)&&v({restoreFocus:!1})}function p(T){T.key==="Escape"&&(T.preventDefault(),v())}function m(){document.removeEventListener("pointerdown",d,!0),document.removeEventListener("keydown",p),window.removeEventListener("resize",u),window.removeEventListener("scroll",u,!0)}function v({restoreFocus:T=!0}={}){if(!r.value)return;r.value=!1,m(),s?.removeAttribute("aria-expanded"),s?.removeAttribute("aria-controls");const k=s;s=null,c=null,T&&qt(()=>k?.focus?.())}async function S(T){v({restoreFocus:!1}),s=T.target,i.value=T.message,c=T.onAccept,r.value=!0,s?.setAttribute("aria-expanded","true"),s?.setAttribute("aria-controls","confirm-popup"),await qt(),u(),document.addEventListener("pointerdown",d,!0),document.addEventListener("keydown",p),window.addEventListener("resize",u),window.addEventListener("scroll",u,!0),o.value?.focus()}async function N(){const T=c;v({restoreFocus:!1}),await T?.()}return n({open:S}),za(()=>{m(),s?.removeAttribute("aria-expanded"),s?.removeAttribute("aria-controls")}),(T,k)=>(V(),ze(As,{to:"body"},[r.value?(V(),re("section",{key:0,id:"confirm-popup",ref_key:"popup",ref:t,class:"confirm-popup",role:"alertdialog","aria-modal":"false","aria-labelledby":"confirm-popup-message",style:Ro(l.value)},[_("p",th,fe(i.value),1),_("div",oh,[_("button",{ref_key:"cancelButton",ref:o,class:"confirm-popup__button confirm-popup__button--cancel",type:"button",onClick:k[0]||(k[0]=x=>v())}," Cancelar ",512),_("button",{class:"confirm-popup__button confirm-popup__button--accept",type:"button",onClick:N}," Excluir ")])],4)):Ee("",!0)]))}},ah=Za(rh,[["__scopeId","data-v-86763dfc"]]),ih={class:"welcome-popup",role:"dialog","aria-modal":"true","aria-labelledby":"welcome-title","aria-describedby":"welcome-description"},lh={class:"welcome-popup__hero"},sh={class:"welcome-popup__icon"},ch={class:"welcome-popup__content"},uh={class:"welcome-popup__steps"},dh={__name:"WelcomePopup",emits:["close"],setup(e,{emit:n}){const t=n,o=Se(null),r=Se(null);let i="";function l(s){if(s.key==="Escape"){t("close");return}s.key==="Tab"&&s.shiftKey&&document.activeElement===o.value?(s.preventDefault(),r.value?.focus()):s.key==="Tab"&&!s.shiftKey&&document.activeElement===r.value&&(s.preventDefault(),o.value?.focus())}return zn(()=>{document.addEventListener("keydown",l),i=document.body.style.overflow,document.body.style.overflow="hidden",o.value?.focus()}),Ua(()=>{document.removeEventListener("keydown",l),document.body.style.overflow=i}),(s,c)=>(V(),ze(As,{to:"body"},[_("div",{class:"welcome-backdrop",onClick:c[2]||(c[2]=Tt(u=>t("close"),["self"]))},[_("section",ih,[_("button",{ref_key:"closeButton",ref:o,class:"welcome-popup__close",type:"button","aria-label":"Fechar apresentação",onClick:c[0]||(c[0]=u=>t("close"))}," × ",512),_("div",lh,[_("span",sh,[G(le(km),{size:30,"aria-hidden":"true"})]),c[3]||(c[3]=_("span",{class:"welcome-popup__eyebrow"},"Acesso Verificador",-1)),c[4]||(c[4]=_("h1",{id:"welcome-title"},"Acessibilidade começa com atenção aos detalhes.",-1)),c[5]||(c[5]=_("p",{id:"welcome-description"}," Este espaço ajuda você a organizar e apoiar avaliações de acessibilidade em locais e ambientes. ",-1))]),_("div",ch,[c[9]||(c[9]=_("h2",null,"Como funciona",-1)),_("div",uh,[_("article",null,[G(le(Mc),{size:22,"aria-hidden":"true"}),c[6]||(c[6]=_("div",null,[_("h3",null,"Organize seus locais"),_("p",null,"Crie projetos, separe os ambientes e cadastre os elementos que deseja avaliar.")],-1))]),_("article",null,[G(le(yt),{size:22,"aria-hidden":"true"}),c[7]||(c[7]=_("div",null,[_("h3",null,"Faça as verificações"),_("p",null,"Preencha checklists e consulte resultados por elemento, ambiente ou projeto.")],-1))])]),c[10]||(c[10]=_("p",{class:"welcome-popup__note"}," Os resultados são um apoio à avaliação e não substituem a análise de um profissional nem a consulta às normas aplicáveis. ",-1)),_("button",{ref_key:"actionButton",ref:r,class:"button welcome-popup__action",type:"button",onClick:c[1]||(c[1]=u=>t("close"))},[c[8]||(c[8]=Te(" Começar ",-1)),G(le(jm),{size:18,"aria-hidden":"true"})],512)])])])]))}},fh=Za(dh,[["__scopeId","data-v-f8cf4a09"]]),ph={__name:"App",setup(e){const n=Se(null),t=Se(!1),o=Xa();return io("confirmPopup",{open:r=>n.value?.open(r)}),zn(()=>{const r=localStorage.getItem("welcomePopupSeen");o.path==="/projects"&&!r&&(localStorage.setItem("welcomePopupSeen","true"),t.value=!0)}),(r,i)=>(V(),re(Re,null,[G(nh,null,{default:ye(()=>[G(le(jc))]),_:1}),G(ah,{ref_key:"confirmPopup",ref:n},null,512),t.value?(V(),ze(fh,{key:0,onClose:i[0]||(i[0]=l=>t.value=!1)})):Ee("",!0)],64))}};var mh=Object.defineProperty,hh=Object.defineProperties,vh=Object.getOwnPropertyDescriptors,Dl=Object.getOwnPropertySymbols,gh=Object.prototype.hasOwnProperty,_h=Object.prototype.propertyIsEnumerable,Ml=(e,n,t)=>n in e?mh(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,St=(e,n)=>{for(var t in n||(n={}))gh.call(n,t)&&Ml(e,t,n[t]);if(Dl)for(var t of Dl(n))_h.call(n,t)&&Ml(e,t,n[t]);return e},ql=(e,n)=>hh(e,vh(n));const bh={props:{autoscroll:{type:Boolean,default:!0}},watch:{typeAheadPointer(){this.autoscroll&&this.maybeAdjustScroll()},open(e){this.autoscroll&&e&&this.$nextTick(()=>this.maybeAdjustScroll())}},methods:{maybeAdjustScroll(){var e;const n=((e=this.$refs.dropdownMenu)==null?void 0:e.children[this.typeAheadPointer])||!1;if(n){const t=this.getDropdownViewport(),{top:o,bottom:r,height:i}=n.getBoundingClientRect();if(o<t.top)return this.$refs.dropdownMenu.scrollTop=n.offsetTop;if(r>t.bottom)return this.$refs.dropdownMenu.scrollTop=n.offsetTop-(t.height-i)}},getDropdownViewport(){return this.$refs.dropdownMenu?this.$refs.dropdownMenu.getBoundingClientRect():{height:0,top:0,bottom:0}}}},yh={data(){return{typeAheadPointer:-1}},watch:{filteredOptions(){for(let e=0;e<this.filteredOptions.length;e++)if(this.selectable(this.filteredOptions[e])){this.typeAheadPointer=e;break}},open(e){e&&this.typeAheadToLastSelected()},selectedValue(){this.open&&this.typeAheadToLastSelected()}},methods:{typeAheadUp(){for(let e=this.typeAheadPointer-1;e>=0;e--)if(this.selectable(this.filteredOptions[e])){this.typeAheadPointer=e;break}},typeAheadDown(){for(let e=this.typeAheadPointer+1;e<this.filteredOptions.length;e++)if(this.selectable(this.filteredOptions[e])){this.typeAheadPointer=e;break}},typeAheadSelect(){const e=this.filteredOptions[this.typeAheadPointer];e&&this.selectable(e)&&this.select(e)},typeAheadToLastSelected(){this.typeAheadPointer=this.selectedValue.length!==0?this.filteredOptions.indexOf(this.selectedValue[this.selectedValue.length-1]):-1}}},Ah={props:{loading:{type:Boolean,default:!1}},data(){return{mutableLoading:!1}},watch:{search(){this.$emit("search",this.search,this.toggleLoading)},loading(e){this.mutableLoading=e}},methods:{toggleLoading(e=null){return e==null?this.mutableLoading=!this.mutableLoading:this.mutableLoading=e}}},ei=(e,n)=>{const t=e.__vccOpts||e;for(const[o,r]of n)t[o]=r;return t},Nh={},xh={xmlns:"http://www.w3.org/2000/svg",width:"10",height:"10"},Th=_("path",{d:"M6.895455 5l2.842897-2.842898c.348864-.348863.348864-.914488 0-1.263636L9.106534.261648c-.348864-.348864-.914489-.348864-1.263636 0L5 3.104545 2.157102.261648c-.348863-.348864-.914488-.348864-1.263636 0L.261648.893466c-.348864.348864-.348864.914489 0 1.263636L3.104545 5 .261648 7.842898c-.348864.348863-.348864.914488 0 1.263636l.631818.631818c.348864.348864.914773.348864 1.263636 0L5 6.895455l2.842898 2.842897c.348863.348864.914772.348864 1.263636 0l.631818-.631818c.348864-.348864.348864-.914489 0-1.263636L6.895455 5z"},null,-1),Rh=[Th];function Bh(e,n){return V(),re("svg",xh,Rh)}const wh=ei(Nh,[["render",Bh]]),Sh={},Eh={xmlns:"http://www.w3.org/2000/svg",width:"14",height:"10"},Ch=_("path",{d:"M9.211364 7.59931l4.48338-4.867229c.407008-.441854.407008-1.158247 0-1.60046l-.73712-.80023c-.407008-.441854-1.066904-.441854-1.474243 0L7 5.198617 2.51662.33139c-.407008-.441853-1.066904-.441853-1.474243 0l-.737121.80023c-.407008.441854-.407008 1.158248 0 1.600461l4.48338 4.867228L7 10l2.211364-2.40069z"},null,-1),Oh=[Ch];function Ih(e,n){return V(),re("svg",Eh,Oh)}const Ph=ei(Sh,[["render",Ih]]),$l={Deselect:wh,OpenIndicator:Ph},kh={mounted(e,{instance:n}){if(n.appendToBody){const{height:t,top:o,left:r,width:i}=n.$refs.toggle.getBoundingClientRect();let l=window.scrollX||window.pageXOffset,s=window.scrollY||window.pageYOffset;e.unbindPosition=n.calculatePosition(e,n,{width:i+"px",left:l+r+"px",top:s+o+t+"px"}),document.body.appendChild(e)}},unmounted(e,{instance:n}){n.appendToBody&&(e.unbindPosition&&typeof e.unbindPosition=="function"&&e.unbindPosition(),e.parentNode&&e.parentNode.removeChild(e))}};function Lh(e){const n={};return Object.keys(e).sort().forEach(t=>{n[t]=e[t]}),JSON.stringify(n)}let jh=0;function Dh(){return++jh}const Mh={components:St({},$l),directives:{appendToBody:kh},mixins:[bh,yh,Ah],compatConfig:{MODE:3},emits:["open","close","update:modelValue","search","search:compositionstart","search:compositionend","search:keydown","search:blur","search:focus","search:input","option:created","option:selecting","option:selected","option:deselecting","option:deselected"],props:{modelValue:{},components:{type:Object,default:()=>({})},options:{type:Array,default(){return[]}},disabled:{type:Boolean,default:!1},clearable:{type:Boolean,default:!0},deselectFromDropdown:{type:Boolean,default:!1},searchable:{type:Boolean,default:!0},multiple:{type:Boolean,default:!1},placeholder:{type:String,default:""},transition:{type:String,default:"vs__fade"},clearSearchOnSelect:{type:Boolean,default:!0},closeOnSelect:{type:Boolean,default:!0},label:{type:String,default:"label"},autocomplete:{type:String,default:"off"},reduce:{type:Function,default:e=>e},selectable:{type:Function,default:e=>!0},getOptionLabel:{type:Function,default(e){return typeof e=="object"?e.hasOwnProperty(this.label)?e[this.label]:console.warn(`[vue-select warn]: Label key "option.${this.label}" does not exist in options object ${JSON.stringify(e)}.
https://vue-select.org/api/props.html#getoptionlabel`):e}},getOptionKey:{type:Function,default(e){if(typeof e!="object")return e;try{return e.hasOwnProperty("id")?e.id:Lh(e)}catch(n){return console.warn(`[vue-select warn]: Could not stringify this option to generate unique key. Please provide'getOptionKey' prop to return a unique key for each option.
https://vue-select.org/api/props.html#getoptionkey`,e,n)}}},onTab:{type:Function,default:function(){this.selectOnTab&&!this.isComposing&&this.typeAheadSelect()}},taggable:{type:Boolean,default:!1},tabindex:{type:Number,default:null},pushTags:{type:Boolean,default:!1},filterable:{type:Boolean,default:!0},filterBy:{type:Function,default(e,n,t){return(n||"").toLocaleLowerCase().indexOf(t.toLocaleLowerCase())>-1}},filter:{type:Function,default(e,n){return e.filter(t=>{let o=this.getOptionLabel(t);return typeof o=="number"&&(o=o.toString()),this.filterBy(t,o,n)})}},createOption:{type:Function,default(e){return typeof this.optionList[0]=="object"?{[this.label]:e}:e}},resetOnOptionsChange:{default:!1,validator:e=>["function","boolean"].includes(typeof e)},clearSearchOnBlur:{type:Function,default:function({clearSearchOnSelect:e,multiple:n}){return e&&!n}},noDrop:{type:Boolean,default:!1},inputId:{type:String},dir:{type:String,default:"auto"},selectOnTab:{type:Boolean,default:!1},selectOnKeyCodes:{type:Array,default:()=>[13]},searchInputQuerySelector:{type:String,default:"[type=search]"},mapKeydown:{type:Function,default:(e,n)=>e},appendToBody:{type:Boolean,default:!1},calculatePosition:{type:Function,default(e,n,{width:t,top:o,left:r}){e.style.top=o,e.style.left=r,e.style.width=t}},dropdownShouldOpen:{type:Function,default({noDrop:e,open:n,mutableLoading:t}){return e?!1:n&&!t}},uid:{type:[String,Number],default:()=>Dh()}},data(){return{search:"",open:!1,isComposing:!1,pushedTags:[],_value:[],deselectButtons:[]}},computed:{isReducingValues(){return this.$props.reduce!==this.$options.props.reduce.default},isTrackingValues(){return typeof this.modelValue>"u"||this.isReducingValues},selectedValue(){let e=this.modelValue;return this.isTrackingValues&&(e=this.$data._value),e!=null&&e!==""?[].concat(e):[]},optionList(){return this.options.concat(this.pushTags?this.pushedTags:[])},searchEl(){return this.$slots.search?this.$refs.selectedOptions.querySelector(this.searchInputQuerySelector):this.$refs.search},scope(){const e={search:this.search,loading:this.loading,searching:this.searching,filteredOptions:this.filteredOptions};return{search:{attributes:St({disabled:this.disabled,placeholder:this.searchPlaceholder,tabindex:this.tabindex,readonly:!this.searchable,id:this.inputId,"aria-autocomplete":"list","aria-labelledby":`vs${this.uid}__combobox`,"aria-controls":`vs${this.uid}__listbox`,ref:"search",type:"search",autocomplete:this.autocomplete,value:this.search},this.dropdownOpen&&this.filteredOptions[this.typeAheadPointer]?{"aria-activedescendant":`vs${this.uid}__option-${this.typeAheadPointer}`}:{}),events:{compositionstart:()=>this.isComposing=!0,compositionend:()=>this.isComposing=!1,keydown:this.onSearchKeyDown,blur:this.onSearchBlur,focus:this.onSearchFocus,input:n=>this.search=n.target.value}},spinner:{loading:this.mutableLoading},noOptions:{search:this.search,loading:this.mutableLoading,searching:this.searching},openIndicator:{attributes:{ref:"openIndicator",role:"presentation",class:"vs__open-indicator"}},listHeader:e,listFooter:e,header:ql(St({},e),{deselect:this.deselect}),footer:ql(St({},e),{deselect:this.deselect})}},childComponents(){return St(St({},$l),this.components)},stateClasses(){return{"vs--open":this.dropdownOpen,"vs--single":!this.multiple,"vs--multiple":this.multiple,"vs--searching":this.searching&&!this.noDrop,"vs--searchable":this.searchable&&!this.noDrop,"vs--unsearchable":!this.searchable,"vs--loading":this.mutableLoading,"vs--disabled":this.disabled}},searching(){return!!this.search},dropdownOpen(){return this.dropdownShouldOpen(this)},searchPlaceholder(){return this.isValueEmpty&&this.placeholder?this.placeholder:void 0},filteredOptions(){const e=[].concat(this.optionList);if(!this.filterable&&!this.taggable)return e;const n=this.search.length?this.filter(e,this.search,this):e;if(this.taggable&&this.search.length){const t=this.createOption(this.search);this.optionExists(t)||n.unshift(t)}return n},isValueEmpty(){return this.selectedValue.length===0},showClearButton(){return!this.multiple&&this.clearable&&!this.open&&!this.isValueEmpty}},watch:{options(e,n){const t=()=>typeof this.resetOnOptionsChange=="function"?this.resetOnOptionsChange(e,n,this.selectedValue):this.resetOnOptionsChange;!this.taggable&&t()&&this.clearSelection(),this.modelValue&&this.isTrackingValues&&this.setInternalValueFromOptions(this.modelValue)},modelValue:{immediate:!0,handler(e){this.isTrackingValues&&this.setInternalValueFromOptions(e)}},multiple(){this.clearSelection()},open(e){this.$emit(e?"open":"close")}},created(){this.mutableLoading=this.loading},methods:{setInternalValueFromOptions(e){Array.isArray(e)?this.$data._value=e.map(n=>this.findOptionFromReducedValue(n)):this.$data._value=this.findOptionFromReducedValue(e)},select(e){this.$emit("option:selecting",e),this.isOptionSelected(e)?this.deselectFromDropdown&&(this.clearable||this.multiple&&this.selectedValue.length>1)&&this.deselect(e):(this.taggable&&!this.optionExists(e)&&(this.$emit("option:created",e),this.pushTag(e)),this.multiple&&(e=this.selectedValue.concat(e)),this.updateValue(e),this.$emit("option:selected",e)),this.onAfterSelect(e)},deselect(e){this.$emit("option:deselecting",e),this.updateValue(this.selectedValue.filter(n=>!this.optionComparator(n,e))),this.$emit("option:deselected",e)},clearSelection(){this.updateValue(this.multiple?[]:null)},onAfterSelect(e){this.closeOnSelect&&(this.open=!this.open,this.searchEl.blur()),this.clearSearchOnSelect&&(this.search="")},updateValue(e){typeof this.modelValue>"u"&&(this.$data._value=e),e!==null&&(Array.isArray(e)?e=e.map(n=>this.reduce(n)):e=this.reduce(e)),this.$emit("update:modelValue",e)},toggleDropdown(e){const n=e.target!==this.searchEl;n&&e.preventDefault();const t=[...this.deselectButtons||[],this.$refs.clearButton];if(this.searchEl===void 0||t.filter(Boolean).some(o=>o.contains(e.target)||o===e.target)){e.preventDefault();return}this.open&&n?this.searchEl.blur():this.disabled||(this.open=!0,this.searchEl.focus())},isOptionSelected(e){return this.selectedValue.some(n=>this.optionComparator(n,e))},isOptionDeselectable(e){return this.isOptionSelected(e)&&this.deselectFromDropdown},optionComparator(e,n){return this.getOptionKey(e)===this.getOptionKey(n)},findOptionFromReducedValue(e){const n=o=>JSON.stringify(this.reduce(o))===JSON.stringify(e),t=[...this.options,...this.pushedTags].filter(n);return t.length===1?t[0]:t.find(o=>this.optionComparator(o,this.$data._value))||e},closeSearchOptions(){this.open=!1,this.$emit("search:blur")},maybeDeleteValue(){if(!this.searchEl.value.length&&this.selectedValue&&this.selectedValue.length&&this.clearable){let e=null;this.multiple&&(e=[...this.selectedValue.slice(0,this.selectedValue.length-1)]),this.updateValue(e)}},optionExists(e){return this.optionList.some(n=>this.optionComparator(n,e))},normalizeOptionForSlot(e){return typeof e=="object"?e:{[this.label]:e}},pushTag(e){this.pushedTags.push(e)},onEscape(){this.search.length?this.search="":this.searchEl.blur()},onSearchBlur(){if(this.mousedown&&!this.searching)this.mousedown=!1;else{const{clearSearchOnSelect:e,multiple:n}=this;this.clearSearchOnBlur({clearSearchOnSelect:e,multiple:n})&&(this.search=""),this.closeSearchOptions();return}if(this.search.length===0&&this.options.length===0){this.closeSearchOptions();return}},onSearchFocus(){this.open=!0,this.$emit("search:focus")},onMousedown(){this.mousedown=!0},onMouseUp(){this.mousedown=!1},onSearchKeyDown(e){const n=r=>(r.preventDefault(),!this.isComposing&&this.typeAheadSelect()),t={8:r=>this.maybeDeleteValue(),9:r=>this.onTab(),27:r=>this.onEscape(),38:r=>(r.preventDefault(),this.typeAheadUp()),40:r=>(r.preventDefault(),this.typeAheadDown())};this.selectOnKeyCodes.forEach(r=>t[r]=n);const o=this.mapKeydown(t,this);if(typeof o[e.keyCode]=="function")return o[e.keyCode](e)}}},qh=["dir"],$h=["id","aria-expanded","aria-owns"],Fh={ref:"selectedOptions",class:"vs__selected-options"},Vh=["disabled","title","aria-label","onClick"],zh={ref:"actions",class:"vs__actions"},Uh=["disabled"],Hh={class:"vs__spinner"},Kh=["id"],Gh=["id","aria-selected","onMouseover","onClick"],Wh={key:0,class:"vs__no-options"},Yh=Te(" Sorry, no matching options. "),Jh=["id"];function Qh(e,n,t,o,r,i){const l=Wu("append-to-body");return V(),re("div",{dir:t.dir,class:un(["v-select",i.stateClasses])},[hn(e.$slots,"header",Sn(En(i.scope.header))),_("div",{id:`vs${t.uid}__combobox`,ref:"toggle",class:"vs__dropdown-toggle",role:"combobox","aria-expanded":i.dropdownOpen.toString(),"aria-owns":`vs${t.uid}__listbox`,"aria-label":"Search for option",onMousedown:n[1]||(n[1]=s=>i.toggleDropdown(s))},[_("div",Fh,[(V(!0),re(Re,null,Rn(i.selectedValue,(s,c)=>hn(e.$slots,"selected-option-container",{option:i.normalizeOptionForSlot(s),deselect:i.deselect,multiple:t.multiple,disabled:t.disabled},()=>[(V(),re("span",{key:t.getOptionKey(s),class:"vs__selected"},[hn(e.$slots,"selected-option",Sn(En(i.normalizeOptionForSlot(s))),()=>[Te(fe(t.getOptionLabel(s)),1)]),t.multiple?(V(),re("button",{key:0,ref_for:!0,ref:u=>r.deselectButtons[c]=u,disabled:t.disabled,type:"button",class:"vs__deselect",title:`Deselect ${t.getOptionLabel(s)}`,"aria-label":`Deselect ${t.getOptionLabel(s)}`,onClick:u=>i.deselect(s)},[(V(),ze(Br(i.childComponents.Deselect)))],8,Vh)):Ee("",!0)]))])),256)),hn(e.$slots,"search",Sn(En(i.scope.search)),()=>[_("input",xa({class:"vs__search"},i.scope.search.attributes,Yu(i.scope.search.events)),null,16)])],512),_("div",zh,[Nn(_("button",{ref:"clearButton",disabled:t.disabled,type:"button",class:"vs__clear",title:"Clear Selected","aria-label":"Clear Selected",onClick:n[0]||(n[0]=(...s)=>i.clearSelection&&i.clearSelection(...s))},[(V(),ze(Br(i.childComponents.Deselect)))],8,Uh),[[Ci,i.showClearButton]]),hn(e.$slots,"open-indicator",Sn(En(i.scope.openIndicator)),()=>[t.noDrop?Ee("",!0):(V(),ze(Br(i.childComponents.OpenIndicator),Sn(xa({key:0},i.scope.openIndicator.attributes)),null,16))]),hn(e.$slots,"spinner",Sn(En(i.scope.spinner)),()=>[Nn(_("div",Hh,"Loading...",512),[[Ci,e.mutableLoading]])])],512)],40,$h),G(qd,{name:t.transition},{default:ye(()=>[i.dropdownOpen?Nn((V(),re("ul",{id:`vs${t.uid}__listbox`,ref:"dropdownMenu",key:`vs${t.uid}__listbox`,class:"vs__dropdown-menu",role:"listbox",tabindex:"-1",onMousedown:n[2]||(n[2]=Tt((...s)=>i.onMousedown&&i.onMousedown(...s),["prevent"])),onMouseup:n[3]||(n[3]=(...s)=>i.onMouseUp&&i.onMouseUp(...s))},[hn(e.$slots,"list-header",Sn(En(i.scope.listHeader))),(V(!0),re(Re,null,Rn(i.filteredOptions,(s,c)=>(V(),re("li",{id:`vs${t.uid}__option-${c}`,key:t.getOptionKey(s),role:"option",class:un(["vs__dropdown-option",{"vs__dropdown-option--deselect":i.isOptionDeselectable(s)&&c===e.typeAheadPointer,"vs__dropdown-option--selected":i.isOptionSelected(s),"vs__dropdown-option--highlight":c===e.typeAheadPointer,"vs__dropdown-option--disabled":!t.selectable(s)}]),"aria-selected":c===e.typeAheadPointer?!0:null,onMouseover:u=>t.selectable(s)?e.typeAheadPointer=c:null,onClick:Tt(u=>t.selectable(s)?i.select(s):null,["prevent","stop"])},[hn(e.$slots,"option",Sn(En(i.normalizeOptionForSlot(s))),()=>[Te(fe(t.getOptionLabel(s)),1)])],42,Gh))),128)),i.filteredOptions.length===0?(V(),re("li",Wh,[hn(e.$slots,"no-options",Sn(En(i.scope.noOptions)),()=>[Yh])])):Ee("",!0),hn(e.$slots,"list-footer",Sn(En(i.scope.listFooter)))],40,Kh)),[[l]]):(V(),re("ul",{key:1,id:`vs${t.uid}__listbox`,role:"listbox",style:{display:"none",visibility:"hidden"}},null,8,Jh))]),_:3},8,["name"]),hn(e.$slots,"footer",Sn(En(i.scope.footer)))],10,qh)}const Xh=ei(Mh,[["render",Qh]]),Zh={class:"page-header"},e0={key:0,class:"eyebrow"},n0={class:"page-header__row"},t0={key:0},ct={__name:"PageHeader",props:{eyebrow:String,title:{type:String,required:!0},description:String},setup(e){return(n,t)=>(V(),re("header",Zh,[e.eyebrow?(V(),re("p",e0,fe(e.eyebrow),1)):Ee("",!0),_("div",n0,[_("div",null,[_("h1",null,fe(e.title),1),e.description?(V(),re("p",t0,fe(e.description),1)):Ee("",!0)]),hn(n.$slots,"action")])]))}},o0={class:"empty-state"},Vn={__name:"EmptyState",props:{title:String,text:String},setup(e){return(n,t)=>(V(),re("section",o0,[t[0]||(t[0]=_("div",{class:"empty-state__icon"},"+",-1)),_("h2",null,fe(e.title),1),_("p",null,fe(e.text),1),hn(n.$slots,"default")]))}},r0={class:"ruleset-grid"},a0={class:"field"},i0=["value"],l0={class:"field"},s0={class:"ruleset-option"},c0={class:"ruleset-title"},u0={key:0,class:"ruleset-norma"},d0={key:0,class:"field"},f0={class:"field-name-input"},p0={id:"field-name-input__checkbox"},m0={class:"fields-grid"},h0={key:1},v0={key:2,class:"expected-value"},g0=["onUpdate:modelValue"],_0=["onUpdate:modelValue"],b0=["value"],y0=["onUpdate:modelValue"],A0={class:"form-actions"},N0={__name:"ElementPage",props:{elementId:String,quick:Boolean},setup(e){const n=e,t=Ue("services"),o=Ue("builtInRuleSets"),r=Xa(),i=Dc(),l=Se(null),s=Se(null),c=Se([]),u=Se([]),d=Se(null),p=Se("todas"),m=Se(localStorage.getItem("elementAutoName")==="true"),v=Bo({name:"",ruleSet:"",data:{}}),S=De(()=>!n.elementId),N=De(()=>u.value.find(Y=>Y.id===v.ruleSet)),T=De(()=>{const Y={};for(const q of N.value?.regras??[]){const B=[];q.operador&&q.valor!==void 0&&B.push({...q,parametro:q.parametro});for(const X of q.condicoes??[])X.quando&&B.push({...X.quando,parametro:q.parametro}),X.verificar&&B.push(X.verificar);for(const X of B){if(!X.parametro||X.valor===void 0)continue;Y[X.parametro]??=[];const Z=k(X.operador,X.valor,N.value.parametros?.[X.parametro]?.unidade);Y[X.parametro].includes(Z)||Y[X.parametro].push(Z)}}return Y});function k(Y,q,B=""){const Z=`${typeof q=="boolean"?q?"Sim":"Não":q}${B??""}`;switch(Y){case">=":return`no mínimo, ${Z}`;case"<=":return`no máximo, ${Z}`;case">":return`maior que ${Z}`;case"<":return`menor que ${Z}`;case"==":case"eq":return`igual a ${Z}`;default:return Z}}const x=De(()=>{const Y=u.value.map(q=>q.norma?.nome).filter(Boolean);return["todas",...new Set(Y)]}),M=De(()=>p.value==="todas"?u.value:u.value.filter(Y=>Y.norma?.nome===p.value));async function z(){n.quick&&t.quickEvaluationService.clear();const Y=await t.ruleSetService.list();u.value=[...o.map(B=>B.ruleSet),...Y],S.value||(l.value=await t.repositories.elementRepository.get(n.elementId));const q=l.value?.environmentId??r.query.environmentId;if(!(!n.quick&&(!q||!S.value&&!l.value))){if(n.quick||(s.value=await t.repositories.environmentRepository.get(q),c.value=await t.projectService.listElements(q)),l.value){const B=await t.evaluationService.listEvaluations(l.value.id);d.value=B[0]}v.name=l.value?.name??"",v.ruleSet=r.query.ruleSet??l.value?.rule??u.value[0]?.id??"",Object.assign(v.data,d.value?.data??{})}}function de(){const Y={},q=N.value?.parametros??{};for(const[B,X]of Object.entries(q)){const Z=v.data[B];Z===""||Z===void 0||Z===null||(X.tipo==="number"?Y[B]=Number(Z):X.tipo==="boolean"?Y[B]=Z===!0||Z==="true":Y[B]=Z)}return Y}async function ae(){if(!N.value)return window.alert("Selecione um conjunto de regras.");const Y=de(),q={name:v.name,type:N.value.nome,rule:N.value.id};try{const B=l.value?await t.projectService.updateElement(l.value.id,q):await t.projectService.createElement(s.value.id,q);await t.evaluationService.saveElementData({elementId:B.id,data:Y}),i.push(`/projects/${s.value.projectId}/environments/${s.value.id}`)}catch(B){window.alert(B.message)}}function $(Y){if(!Y)return"";const q=new Set(c.value.filter(Z=>Z.id!==l.value?.id).map(Z=>Z.name));if(!q.has(Y))return Y;let B=1,X=`${Y} (${B})`;for(;q.has(X);)B++,X=`${Y} (${B})`;return X}xt([m,()=>v.ruleSet],([Y,q])=>{if(localStorage.setItem("elementAutoName",String(Y)),Y){const X=u.value.find(Z=>Z.id===q)?.nome??"";v.name=$(X)}});async function ie(){if(!N.value)return window.alert("Selecione um conjunto de regras.");const Y=de();if(n.quick){try{t.quickEvaluationService.evaluate({name:v.name,checklist:N.value,data:Y}),i.push("/quick-evaluation/result")}catch(B){window.alert(B.message)}return}const q={name:v.name,type:N.value.nome,rule:N.value.id};try{const B=l.value?await t.projectService.updateElement(l.value.id,q):await t.projectService.createElement(s.value.id,q);await t.evaluationService.evaluateElement({elementId:B.id,checklist:N.value,data:Y}),i.push(`/elements/${B.id}/evaluation`)}catch(B){window.alert(B.message)}}xt(p,()=>{M.value.some(q=>q.id===v.ruleSet)||(v.ruleSet=M.value[0]?.id??"")}),xt(()=>v.ruleSet,()=>{const Y=Object.keys(N.value?.parametros??{});Object.keys(v.data).forEach(q=>{Y.includes(q)||delete v.data[q]})});function oe(Y,q,B){const X=(B||"").toLowerCase().trim();if(!X)return!0;const Z=Y.nome?.toLowerCase().includes(X),Fe=Y.norma?.nome?.toLowerCase().includes(X),Q=Y.regras?.some(Be=>Be.nome?.toLowerCase().includes(X)||Be.id?.toLowerCase().includes(X));return!!(Z||Fe||Q)}return zn(z),(Y,q)=>e.quick||s.value?(V(),re(Re,{key:0},[e.quick?Ee("",!0):(V(),ze(le(Pe),{key:0,class:"back-link",to:`/projects/${s.value.projectId}/environments/${s.value.id}`},{default:ye(()=>[G(le(Rt),{size:18,"aria-hidden":"true"}),Te(fe(s.value.name),1)]),_:1},8,["to"])),G(ct,{title:e.quick?"Avaliação rápida":S.value?"Novo elemento":l.value.name,description:"Escolha o tipo e informe as medidas observadas."},null,8,["title"]),_("form",{class:"form-card",onSubmit:q[5]||(q[5]=Tt(()=>{},["prevent"]))},[_("div",r0,[_("label",a0,[q[7]||(q[7]=_("span",null,"Norma de referência",-1)),Nn(_("select",{"onUpdate:modelValue":q[0]||(q[0]=B=>p.value=B)},[q[6]||(q[6]=_("option",{value:"todas"},"Todas as normas",-1)),(V(!0),re(Re,null,Rn(x.value.filter(B=>B!=="todas"),B=>(V(),re("option",{key:B,value:B},fe(B),9,i0))),128))],512),[[Pr,p.value]])]),_("label",l0,[q[8]||(q[8]=_("span",null,"Tipo de elemento *",-1)),G(le(Xh),{modelValue:v.ruleSet,"onUpdate:modelValue":q[1]||(q[1]=B=>v.ruleSet=B),options:M.value,label:"nome",reduce:B=>B.id,"filter-by":oe,placeholder:"Pesquise o elemento ou regra..."},{option:ye(B=>[_("div",s0,[_("span",c0,fe(B.nome),1),B.norma?.nome?(V(),re("small",u0," ("+fe(B.norma.nome)+") ",1)):Ee("",!0)])]),_:1},8,["modelValue","options","reduce"])])]),e.quick?Ee("",!0):(V(),re("label",d0,[_("div",f0,[q[9]||(q[9]=_("span",null,"Nome do elemento *",-1)),_("div",p0,[Nn(_("input",{type:"checkbox",id:"auto-name-chk","onUpdate:modelValue":q[2]||(q[2]=B=>m.value=B)},null,512),[[cf,m.value]]),_("p",{onClick:q[3]||(q[3]=Tt(B=>m.value=!m.value,["stop"]))},"Auto Nomear")])]),Nn(_("input",{"onUpdate:modelValue":q[4]||(q[4]=B=>v.name=B),required:"",placeholder:"Ex.: Porta principal"},null,512),[[Ao,v.name]])])),q[13]||(q[13]=_("div",{class:"form-divider"},[_("strong",null,"Dados para avaliação"),_("span",null,"Campos definidos pelo conjunto de regras selecionado.")],-1)),_("div",m0,[(V(!0),re(Re,null,Rn(N.value?.parametros,(B,X)=>(V(),re("label",{key:X,class:"field"},[_("span",null,[Te(fe(B.label??X)+" ",1),B.obrigatorio?(V(),re(Re,{key:0},[Te(" *")],64)):Ee("",!0),B.unidade?(V(),re("small",h0," ("+fe(B.unidade)+")",1)):Ee("",!0),T.value[X]?.length?(V(),re("small",v0," Esperado: "+fe(T.value[X].join(" ou ")),1)):Ee("",!0)]),B.tipo==="boolean"?Nn((V(),re("select",{key:0,"onUpdate:modelValue":Z=>v.data[X]=Z},[...q[10]||(q[10]=[_("option",{value:""},"Não informado",-1),_("option",{value:!0},"Sim",-1),_("option",{value:!1},"Não",-1)])],8,g0)),[[Pr,v.data[X]]]):B.tipo==="select"?Nn((V(),re("select",{key:1,"onUpdate:modelValue":Z=>v.data[X]=Z},[q[11]||(q[11]=_("option",{value:""},"Selecione",-1)),(V(!0),re(Re,null,Rn(B.opcoes??[],Z=>(V(),re("option",{key:Z,value:Z},fe(Z),9,b0))),128))],8,_0)),[[Pr,v.data[X]]]):Nn((V(),re("input",{key:2,"onUpdate:modelValue":Z=>v.data[X]=Z,type:"number",inputmode:"decimal",step:"any"},null,8,y0)),[[Ao,v.data[X],void 0,{number:!0}]])]))),128))]),_("div",A0,[G(le(Pe),{class:"button button--ghost",to:e.quick?"/projects":`/projects/${s.value.projectId}/environments/${s.value.id}`},{default:ye(()=>[...q[12]||(q[12]=[Te(" Cancelar ",-1)])]),_:1},8,["to"]),e.quick?Ee("",!0):(V(),re("button",{key:0,class:"button button--outline",type:"button",onClick:ae}," Salvar e voltar ")),_("button",{class:"button",type:"button",onClick:ie},fe(e.quick?"Avaliar":"Salvar e avaliar"),1)])],32)],64)):(V(),ze(Vn,{key:1,title:"Elemento não encontrado",text:"Volte para o ambiente e tente novamente."},{default:ye(()=>[G(le(Pe),{class:"button",to:"/projects"},{default:ye(()=>[...q[14]||(q[14]=[Te("Projetos",-1)])]),_:1})]),_:1}))}},ca=Za(N0,[["__scopeId","data-v-2ffd23f5"]]),or={__name:"StatusBadge",props:{status:{type:String,default:"nao_avaliado"}},setup(e){const n={conforme:"Conforme",nao_conforme:"Não conforme",nao_avaliado:"Pendente",invalido:"Pendente",erro:"Pendente",atencao:"Atenção",manual:"Verificar"};return(t,o)=>(V(),re("span",{class:un(["status",`status--${e.status}`])},fe(n[e.status]??"Pendente"),3))}},x0={class:"evaluation-summary","aria-labelledby":"evaluation-summary-title"},T0={class:"evaluation-summary__heading"},R0={id:"evaluation-summary-title"},B0={class:"evaluation-summary__score"},w0={class:"evaluation-summary__cards"},S0={class:"evaluation-summary__card evaluation-summary__card--conforme"},E0={class:"evaluation-summary__card evaluation-summary__card--nao_conforme"},C0={class:"evaluation-summary__card evaluation-summary__card--nao_avaliado"},qc={__name:"EvaluationSummary",props:{summary:{type:Object,required:!0},scope:{type:String,default:"elementos"}},setup(e){const n=e,t=De(()=>n.summary.totalElements?n.summary.overallStatus==="conforme"?"Todos os elementos estão conformes":n.summary.overallStatus==="nao_conforme"?"Há elementos não conformes":"Há elementos pendentes de avaliação":"Nenhum elemento cadastrado");return(o,r)=>(V(),re("section",x0,[_("div",T0,[_("div",null,[_("h2",R0,"Situação do "+fe(e.scope),1),_("p",null,fe(t.value),1)]),_("div",B0,[_("strong",null,fe(e.summary.score)+"%",1),r[0]||(r[0]=_("span",null,"conformes",-1))])]),_("div",w0,[_("div",S0,[r[1]||(r[1]=_("span",null,"Conformes",-1)),_("strong",null,fe(e.summary.conforme),1)]),_("div",E0,[r[2]||(r[2]=_("span",null,"Não conformes",-1)),_("strong",null,fe(e.summary.nao_conforme),1)]),_("div",C0,[r[3]||(r[3]=_("span",null,"Pendentes",-1)),_("strong",null,fe(e.summary.nao_avaliado),1)])]),e.summary.totalElements?(V(),ze(or,{key:0,status:e.summary.overallStatus},null,8,["status"])):Ee("",!0)]))}},O0={key:1,class:"card-list collection-list"},I0={class:"card__icon"},P0={class:"card__menu"},k0=["onClick"],L0={__name:"EnvironmentPage",props:{projectId:String,environmentId:String},setup(e){const n=e,t=Ue("services"),o=Ue("confirmPopup"),r=Se(null),i=Se(null),l=Se([]),s=Se(null);function c(p,m){o.open({target:m.currentTarget,message:`Excluir o elemento ${p.name} e suas avaliações?`,onAccept:()=>u(p)})}async function u(p){const m=await t.evaluationService.listEvaluations(p.id);for(const v of m)await t.repositories.evaluationRepository.delete(v.id);await t.repositories.elementRepository.delete(p.id),await d()}async function d(){if(r.value=await t.repositories.environmentRepository.get(n.environmentId),!r.value)return;i.value=await t.projectService.getProject(r.value.projectId);const p=await t.projectService.listElements(r.value.id),[m,v]=await Promise.all([Promise.all(p.map(async S=>{const N=await t.evaluationService.listEvaluations(S.id);return{element:S,status:ac(N)}})),t.evaluationService.getEnvironmentSummary(r.value.id)]);l.value=m,s.value=v}return zn(d),(p,m)=>r.value?(V(),re(Re,{key:0},[G(le(Pe),{class:"back-link",to:`/projects/${r.value.projectId}`},{default:ye(()=>[G(le(Rt),{size:18,"aria-hidden":"true"}),Te(fe(i.value?.name??"Projeto"),1)]),_:1},8,["to"]),G(ct,{title:r.value.name},{action:ye(()=>[G(le(Pe),{class:"button",to:{path:"/elements/new",query:{environmentId:r.value.id}}},{default:ye(()=>[G(le(jl),{size:18,"aria-hidden":"true"}),m[0]||(m[0]=Te("Adicionar elemento ",-1))]),_:1},8,["to"])]),_:1},8,["title"]),s.value&&l.value.length?(V(),ze(qc,{key:0,summary:s.value,scope:"ambiente"},null,8,["summary"])):Ee("",!0),l.value.length?(V(),re("div",O0,[(V(!0),re(Re,null,Rn(l.value,v=>(V(),re("article",{key:v.element.id,class:"card card--interactive"},[G(le(Pe),{class:"card__link",to:`/elements/${v.element.id}`},{default:ye(()=>[_("span",I0,[G(le(Mm),{size:22,"aria-hidden":"true"})]),_("div",null,[_("h2",null,fe(v.element.name),1),_("p",null,fe(v.element.type),1)]),G(or,{status:v.status},null,8,["status"]),G(le(nr),{size:20,class:"chevron","aria-hidden":"true"})]),_:2},1032,["to"]),_("div",P0,[_("button",{class:"icon-button icon-button--danger",title:"Excluir","aria-label":"Excluir",onClick:S=>c(v.element,S)},[G(le(yr),{size:18,"aria-hidden":"true"})],8,k0)])]))),128))])):Ee("",!0),l.value.length?Ee("",!0):(V(),ze(Vn,{key:2,class:"collection-empty",title:"Nenhum elemento ainda",text:"Cadastre portas, rampas, sanitários e outros itens para avaliar."},{default:ye(()=>[G(le(Pe),{class:"button",to:{path:"/elements/new",query:{environmentId:r.value.id}}},{default:ye(()=>[G(le(jl),{size:18,"aria-hidden":"true"}),m[1]||(m[1]=Te("Adicionar elemento ",-1))]),_:1},8,["to"])]),_:1}))],64)):(V(),ze(Vn,{key:1,title:"Ambiente não encontrado",text:"Ele pode ter sido removido."},{default:ye(()=>[G(le(Pe),{class:"button",to:"/projects"},{default:ye(()=>[...m[2]||(m[2]=[Te("Projetos",-1)])]),_:1})]),_:1}))}},j0={class:"results"},D0={key:0},M0={key:1,class:"result-values"},q0={key:2},Fl={__name:"EvaluationPage",props:{elementId:String,quick:Boolean},setup(e){const n=e,t=Ue("services"),o=Se(null),r=Se(null),i=De(()=>r.value?.result??[]),l=De(()=>i.value.filter(S=>["nao_conforme","erro","invalido"].includes(S.status)).length),s=De(()=>i.value.filter(S=>["nao_avaliado","manual","atencao"].includes(S.status)).length),c=De(()=>i.value.length-l.value-s.value),u=De(()=>l.value>0?"nao_conforme":s.value>0?"nao_avaliado":"conforme"),d=De(()=>{switch(u.value){case"conforme":return"Elemento conforme";case"nao_conforme":return"Há itens não conformes";default:return"Avaliação pendente"}});function p(S){return S?new Intl.DateTimeFormat("pt-BR",{dateStyle:"medium",timeStyle:"short"}).format(new Date(S)):""}function m(S,N,T=""){const x=`${typeof N=="boolean"?N?"Sim":"Não":N}${T??""}`;switch(S){case">=":return`no mínimo, ${x}`;case"<=":return`no máximo, ${x}`;case">":return`maior que ${x}`;case"<":return`menor que ${x}`;case"==":case"eq":return`igual a ${x}`;default:return x}}async function v(){if(n.quick){const S=t.quickEvaluationService.getCurrent();o.value=S?.element??null,r.value=S?.evaluation??null;return}if(o.value=await t.repositories.elementRepository.get(n.elementId),o.value){const S=await t.evaluationService.listEvaluations(o.value.id);r.value=S[0]??null}}return zn(v),(S,N)=>o.value&&r.value?(V(),re(Re,{key:0},[G(le(Pe),{class:"back-link",to:e.quick?"/quick-evaluation":`/elements/${o.value.id}`},{default:ye(()=>[G(le(Rt),{size:18,"aria-hidden":"true"}),Te(fe(o.value.name),1)]),_:1},8,["to"]),G(ct,{eyebrow:"Resultado",title:"Avaliação",description:`Realizada em ${p(r.value.evaluatedAt)}`},null,8,["description"]),_("section",{class:un(["result-summary",`result-summary--${u.value}`])},[G(or,{status:u.value},null,8,["status"]),_("h2",null,fe(d.value),1),_("p",null,fe(c.value)+" regra(s) atendida(s), "+fe(l.value)+" não conforme(s) e "+fe(s.value)+" para verificar. ",1)],2),_("section",j0,[N[1]||(N[1]=_("h2",null,"Regras avaliadas",-1)),(V(!0),re(Re,null,Rn(i.value,T=>(V(),re("article",{key:T.id,class:un(["result-row",`result-row--${T.status}`])},[_("div",null,[G(or,{status:T.status},null,8,["status"]),_("h3",null,fe(T.nome??T.id),1),T.mensagem?(V(),re("p",D0,fe(T.mensagem),1)):Ee("",!0),T.valorInformado!==void 0?(V(),re("p",M0,[N[0]||(N[0]=Te(" Informado: ",-1)),_("strong",null,fe(T.valorInformado),1),T.unidade?(V(),re(Re,{key:0},[Te(fe(T.unidade),1)],64)):Ee("",!0),T.valorEsperado!==void 0?(V(),re(Re,{key:1},[Te(" · Esperado: "+fe(m(T.operador,T.valorEsperado,T.unidade)),1)],64)):Ee("",!0)])):Ee("",!0),T.referencia?(V(),re("small",q0,fe(T.referencia),1)):Ee("",!0)])],2))),128))]),e.quick?(V(),ze(le(Pe),{key:0,class:"button",to:"/quick-evaluation"},{default:ye(()=>[...N[2]||(N[2]=[Te(" Nova avaliação rápida ",-1)])]),_:1})):Ee("",!0)],64)):o.value?(V(),re(Re,{key:1},[G(le(Pe),{class:"back-link",to:e.quick?"/quick-evaluation":`/elements/${o.value.id}`},{default:ye(()=>[G(le(Rt),{size:18,"aria-hidden":"true"}),N[3]||(N[3]=Te("Elemento ",-1))]),_:1},8,["to"]),G(Vn,{title:"Ainda não há avaliação",text:"Preencha os dados do elemento para executar as regras."},{default:ye(()=>[G(le(Pe),{class:"button",to:e.quick?"/quick-evaluation":`/elements/${o.value.id}`},{default:ye(()=>[Te(fe(e.quick?"Nova avaliação rápida":"Avaliar elemento"),1)]),_:1},8,["to"])]),_:1})],64)):(V(),ze(Vn,{key:2,title:"Avaliação não encontrada",text:e.quick?"Inicie uma avaliação rápida para ver o resultado.":"O elemento pode ter sido removido."},{default:ye(()=>[G(le(Pe),{class:"button",to:e.quick?"/quick-evaluation":"/projects"},{default:ye(()=>[Te(fe(e.quick?"Avaliação rápida":"Projetos"),1)]),_:1},8,["to"])]),_:1},8,["text"]))}},$0={class:"collection-form__heading"},F0={class:"field"},V0={class:"environments-summary-container"},z0={key:0,class:"card-grid-environment collection-list"},U0={class:"card__icon"},H0={class:"card__menu"},K0=["onClick"],G0=["onClick"],W0={__name:"ProjectPage",props:{projectId:String},setup(e){const n=e,t=Ue("services"),o=Ue("confirmPopup"),r=Se(null),i=Se([]),l=Se(""),s=Se(null),c=Se(null),u=Se(null);async function d(){r.value=await t.projectService.getProject(n.projectId),r.value&&([i.value,c.value]=await Promise.all([t.projectService.listEnvironments(n.projectId),t.evaluationService.getProjectSummary(n.projectId)]))}async function p(){s.value={},l.value="",await qt(),u.value?.scrollIntoView({behavior:"smooth"})}function m(k){s.value=k,l.value=k.name}function v(){s.value=null,l.value=""}async function S(){s.value?.id?await t.projectService.renameEnvironment(s.value.id,l.value):await t.projectService.createEnvironment(n.projectId,{name:l.value}),v(),await d()}function N(k,x){o.open({target:x.currentTarget,message:`Excluir o ambiente “${k.name}” e seus elementos?`,onAccept:()=>T(k)})}async function T(k){const x=await t.projectService.listElements(k.id);for(const M of x){const z=await t.evaluationService.listEvaluations(M.id);for(const de of z)await t.repositories.evaluationRepository.delete(de.id);await t.repositories.elementRepository.delete(M.id)}await t.repositories.environmentRepository.delete(k.id),await d()}return zn(d),(k,x)=>r.value?(V(),re(Re,{key:0},[G(le(Pe),{class:"back-link",to:"/projects"},{default:ye(()=>[G(le(Rt),{size:18,"aria-hidden":"true"}),x[1]||(x[1]=Te("Projetos",-1))]),_:1}),G(ct,{title:r.value.name,description:`${i.value.length} ambiente${i.value.length===1?"":"s"} cadastrado${i.value.length===1?"":"s"}.
      
${r.value.description}`},{action:ye(()=>[_("button",{class:"button",onClick:p},[G(le(tr),{size:18,"aria-hidden":"true"}),x[2]||(x[2]=Te("Novo ambiente",-1))])]),_:1},8,["title","description"]),s.value?(V(),re("form",{key:0,class:"form-card collection-form",onSubmit:Tt(S,["prevent"]),ref_key:"inputCreate",ref:u},[_("div",$0,[_("h2",null,fe(s.value.id?"Nome do ambiente":"Novo ambiente"),1),x[3]||(x[3]=_("p",null,"Use um nome que ajude a identificar este espaço no projeto.",-1))]),_("label",F0,[x[4]||(x[4]=_("span",null,"Nome do ambiente",-1)),Nn(_("input",{"onUpdate:modelValue":x[0]||(x[0]=M=>l.value=M),required:"",autofocus:""},null,512),[[Ao,l.value]])]),_("div",{class:"form-actions"},[_("button",{class:"button button--ghost",type:"button",onClick:v}," Cancelar "),x[5]||(x[5]=_("button",{class:"button",type:"submit"},"Salvar",-1))])],544)):Ee("",!0),c.value&&i.value.length?(V(),ze(qc,{key:1,summary:c.value,scope:"projeto"},null,8,["summary"])):Ee("",!0),_("div",V0,[i.value.length?(V(),re("div",z0,[(V(!0),re(Re,null,Rn(i.value,M=>(V(),re("article",{key:M.id,class:"card-environment"},[G(le(Pe),{class:"card__link",to:`/projects/${r.value.id}/environments/${M.id}`},{default:ye(()=>[_("span",U0,[G(le(Wm),{size:22,"aria-hidden":"true"})]),_("div",null,[_("h2",null,fe(M.name),1),x[6]||(x[6]=_("p",null,"Ambiente",-1))])]),_:2},1032,["to"]),_("div",H0,[_("button",{class:"text-button",onClick:z=>m(M)}," Editar ",8,K0),_("button",{class:"icon-button icon-button--danger",title:"Excluir","aria-label":"Excluir",onClick:z=>N(M,z)},[G(le(yr),{size:18,"aria-hidden":"true"})],8,G0)])]))),128))])):Ee("",!0),i.value.length?Ee("",!0):(V(),ze(Vn,{key:1,class:"collection-empty",title:"Nenhum ambiente ainda",text:"Adicione espaços como entrada, banheiro ou circulação."},{default:ye(()=>[_("button",{class:"button",onClick:p},[G(le(tr),{size:18,"aria-hidden":"true"}),x[7]||(x[7]=Te("Novo ambiente",-1))])]),_:1}))])],64)):(V(),ze(Vn,{key:1,title:"Projeto não encontrado",text:"Ele pode ter sido removido."},{default:ye(()=>[G(le(Pe),{class:"button",to:"/projects"},{default:ye(()=>[...x[8]||(x[8]=[Te("Voltar aos projetos",-1)])]),_:1})]),_:1}))}},Y0={class:"collection-form__heading"},J0={class:"eyebrow"},Q0={class:"fields-grid"},X0={class:"field"},Z0={class:"field"},ev={key:0,class:"muted"},nv={key:1,class:"card-list collection-list"},tv={class:"card__icon"},ov={key:0},rv={class:"card__menu"},av=["onClick"],iv=["onClick"],lv={__name:"ProjectsPage",setup(e){const n=Ue("services"),t=Ue("confirmPopup"),o=Se([]),r=Se(""),i=Se(""),l=Se(null),s=Se("");async function c(){o.value=await n.projectService.listProjects()}function u(){l.value={},r.value="",i.value="",s.value=""}function d(T){l.value=T,r.value=T.name,s.value="",i.value=T.description||""}function p(){l.value=null,r.value="",i.value="",s.value=""}async function m(){try{s.value="",l.value?.id?await n.projectService.updateProject(l.value.id,{name:r.value,description:i.value}):await n.projectService.createProject({name:r.value,description:i.value}),r.value="",i.value="",l.value=null,await c()}catch(T){s.value=T.message}}function v(T,k){t.open({target:k.currentTarget,message:`Excluir o projeto “${T.name}” e seus dados?`,onAccept:()=>S(T)})}async function S(T){const k=await n.projectService.listEnvironments(T.id);for(const x of k){const M=await n.projectService.listElements(x.id);for(const z of M){const de=await n.evaluationService.listEvaluations(z.id);for(const ae of de)await n.repositories.evaluationRepository.delete(ae.id);await n.repositories.elementRepository.delete(z.id)}await n.repositories.environmentRepository.delete(x.id)}await n.repositories.projectRepository.delete(T.id),await c()}function N(T){return new Intl.DateTimeFormat("pt-BR",{dateStyle:"medium"}).format(new Date(T))}return zn(c),(T,k)=>(V(),re(Re,null,[G(ct,{title:"Projetos",description:"Acompanhe seus locais e avaliações."},{action:ye(()=>[_("button",{class:"button",onClick:u},[G(le(tr),{size:18,"aria-hidden":"true"}),k[2]||(k[2]=Te("Novo projeto",-1))])]),_:1}),l.value?(V(),re("form",{key:0,class:"form-card collection-form",onSubmit:Tt(m,["prevent"])},[_("div",Y0,[_("span",J0,fe(l.value.id?"Editar":"Configuração inicial"),1),_("h2",null,fe(l.value.id?"Dados do projeto":"Novo projeto"),1),k[3]||(k[3]=_("p",null,"Defina um nome e, se quiser, uma breve descrição para este local.",-1))]),_("div",Q0,[_("label",X0,[k[4]||(k[4]=_("span",null,"Nome do projeto",-1)),Nn(_("input",{"onUpdate:modelValue":k[0]||(k[0]=x=>r.value=x),required:"",autofocus:""},null,512),[[Ao,r.value]])]),_("label",Z0,[k[5]||(k[5]=_("span",null,[Te("Descrição "),_("small",null,"(opcional)")],-1)),Nn(_("input",{"onUpdate:modelValue":k[1]||(k[1]=x=>i.value=x)},null,512),[[Ao,i.value]])])]),s.value?(V(),re("p",ev,fe(s.value),1)):Ee("",!0),_("div",{class:"form-actions"},[_("button",{class:"button button--ghost",type:"button",onClick:p}," Cancelar "),k[6]||(k[6]=_("button",{class:"button",type:"submit"},"Salvar",-1))])],32)):Ee("",!0),o.value.length?(V(),re("div",nv,[(V(!0),re(Re,null,Rn(o.value,x=>(V(),re("article",{key:x.id,class:"card project-card"},[G(le(Pe),{class:"card__link",to:`/projects/${x.id}`},{default:ye(()=>[_("span",tv,[G(le(Mc),{size:22,"aria-hidden":"true"})]),_("div",null,[_("h2",null,fe(x.name),1),_("p",null,"Atualizado em "+fe(N(x.updatedAt)),1),x.description?(V(),re("p",ov,fe(x.description),1)):Ee("",!0)]),G(le(nr),{size:20,class:"chevron","aria-hidden":"true"})]),_:2},1032,["to"]),_("div",rv,[_("button",{class:"text-button",onClick:M=>d(x)}," Editar ",8,av),_("button",{class:"icon-button icon-button--danger",title:"Excluir","aria-label":"Excluir",onClick:M=>v(x,M)},[G(le(yr),{size:18,"aria-hidden":"true"})],8,iv)])]))),128))])):(V(),ze(Vn,{key:2,class:"collection-empty",title:"Comece por um projeto",text:"Organize as avaliações de acessibilidade por obra ou local."},{default:ye(()=>[_("button",{class:"button",onClick:u},[G(le(tr),{size:18,"aria-hidden":"true"}),k[7]||(k[7]=Te("Novo projeto",-1))])]),_:1}))],64))}};function sv(e=""){const n=e.replace(/^(\.\.\/|\.\/|\/)+/,"").split("/");return n.length>1?n.slice(0,-1).join("/"):""}function cv(e,n){const[t]=e,o=t?.norma;return o?.nome?`${o.nome}${o.versao?` · ${o.versao}`:""}`:n.split("/").at(-1)?.replaceAll("-"," ")??"Regras padrão"}function uv(e){const n=new Map;for(const t of e){const o=sv(t.path)||t.ruleSet.id,r=n.get(o)??{id:o,source:"standard",ruleSets:[]};r.ruleSets.push(t.ruleSet),n.set(o,r)}return[...n.values()].map(t=>({...t,nome:cv(t.ruleSets,t.id)})).sort((t,o)=>t.nome.localeCompare(o.nome))}function dv(e){const n=new Map;for(const t of e){const o=t.grupo,r=o?.id??t.id,i=n.get(r)??{id:r,nome:o?.nome??t.nome,source:"user",ruleSets:[]};i.ruleSets.push(t),n.set(r,i)}return[...n.values()].sort((t,o)=>t.nome.localeCompare(o.nome))}const fv={class:"documentation"},pv={class:"documentation__intro"},mv={class:"documentation__icon"},hv=["href"],vv={class:"documentation__section"},gv={key:0,class:"muted",role:"status"},_v={key:0,class:"alert alert--error",role:"alert"},bv={class:"rules-section rules-section--first"},yv={class:"card-list"},Av={class:"rule-source"},Nv={key:0,class:"rules-card__actions"},xv=["onClick"],Tv=["onClick"],Rv=["onClick"],Bv={class:"import-actions"},wv={class:"button button--outline import-button"},Sv=["disabled"],Ev={class:"button button--outline import-button"},Cv=["disabled"],Ov={key:0,class:"muted",role:"status"},Iv={key:1,class:"alert alert--error",role:"alert"},Pv={key:2,class:"muted",role:"status"},kv={class:"rules-section rules-section--first"},Lv={class:"card-list"},jv={class:"card__icon"},Dv={class:"rules-section"},Mv={key:0,class:"card-list"},qv={class:"card__icon"},ua={__name:"RulesPage",props:{source:String,groupId:String,documentation:Boolean},setup(e){const n=e,t=Ue("services"),o=Ue("builtInRuleSets");Dc();const r=Ue("confirmPopup"),i=De(()=>"/Extensao-26.2/rule-engine-skill/SKILL.md"),l=Se([]),s=Se(!0),c=Se(!1),u=Se(""),d=De(()=>l.value.filter(ae=>ae.source==="standard")),p=De(()=>l.value.filter(ae=>ae.source==="user")),m=De(()=>l.value.find(ae=>ae.source===n.source&&ae.id===n.groupId));function v(ae){return ae.regras?.length??0}function S(ae){return Object.keys(ae.parametros??{}).length}function N(ae){return ae.ruleSets.reduce(($,ie)=>$+v(ie),0)}async function T(){s.value=!0;try{const ae=await t.ruleSetService.list();l.value=[...uv(o),...dv(ae)]}finally{s.value=!1}}function k(ae){return`/rules/${encodeURIComponent(ae.source)}/${encodeURIComponent(ae.id)}`}async function x(ae){const $=[...ae.target.files??[]];if(!$.length)return;const ie=$.filter(Z=>/\.(json|ya?ml)$/i.test(Z.name)),oe=$.length-ie.length;if(!ie.length){u.value="Nenhum arquivo .json, .yaml ou .yml encontrado.",ae.target.value="";return}u.value="",c.value=!0;const Y=ie[0].webkitRelativePath?.split("/")[0],q={id:`importado-${Y||crypto.randomUUID()}`,nome:Y||(ie.length===1?ie[0].name.replace(/\.(json|ya?ml)$/i,""):"Regras importadas")},B=[];for(const Z of ie)try{const Fe=await Z.text();/\.json$/i.test(Z.name)?await t.ruleSetService.importFromJson(Fe,q):await t.ruleSetService.importFromYaml(Fe,q)}catch(Fe){B.push(`${Z.name}: ${Fe.message}`)}const X=[];B.length&&X.push(ie.length===1?B[0]:`${B.length} de ${ie.length} arquivo(s) não importado(s) — ${B.join("; ")}`),oe&&X.push(`${oe} arquivo(s) ignorado(s) por não serem .json/.yaml/.yml.`),u.value=X.join(" "),await T(),ae.target.value="",c.value=!1}function M(ae,$){r.open({target:$.currentTarget,message:`Excluir "${ae.nome}"? Esta ação não pode ser desfeita.`,onAccept:()=>z(ae)})}async function z(ae){u.value="";try{await t.ruleSetService.delete(ae.id),await T()}catch($){u.value=$.message}}async function de(ae,$){try{const ie=$==="json"?await t.ruleSetService.exportByIdToJson(ae.id):await t.ruleSetService.exportByIdToYaml(ae.id),oe=$==="json"?"application/json":"text/yaml",Y=document.createElement("a");Y.href=URL.createObjectURL(new Blob([ie],{type:oe})),Y.download=`${ae.id}.${$}`,Y.click(),URL.revokeObjectURL(Y.href)}catch(ie){u.value=ie.message}}return zn(T),(ae,$)=>e.documentation?(V(),re(Re,{key:0},[G(le(Pe),{class:"back-link",to:"/rules"},{default:ye(()=>[G(le(Rt),{size:18,"aria-hidden":"true"}),$[0]||($[0]=Te("Conjuntos de regras",-1))]),_:1}),G(ct,{eyebrow:"Documentação",title:"Crie e importe regras",description:"Monte checklists em YAML para avaliar os elementos do seu projeto."}),_("div",fv,[$[6]||($[6]=xd(`<section class="documentation__section"><h2>Formato mínimo de um checklist</h2><p>Cada arquivo é um checklist independente. Os campos obrigatórios são <code>id</code>, <code>nome</code>, <code>parametros</code> (objeto) e <code>regras</code> (lista). YAML e JSON são aceitos.</p><pre class="documentation-code"><code>id: bebedouros
nome: Bebedouros
norma:
  nome: Norma interna
  versao: &quot;1&quot;
parametros:
  altura_bica:
    label: Altura da bica
    tipo: number
    unidade: m
    obrigatorio: true
  possui_area_livre:
    label: Possui área livre
    tipo: boolean
regras:
  - id: altura_maxima
    nome: Altura máxima da bica
    parametro: altura_bica
    operador: &quot;&lt;=&quot;
    valor: 0.90
    referencia: &quot;Norma interna — item 4.2&quot;</code></pre><p class="documentation__note"><code>label</code>, <code>unidade</code>, <code>norma</code> e <code>referencia</code> são metadados opcionais. <code>obrigatorio: true</code> faz o motor marcar a regra como <code>invalido</code> quando o valor não foi preenchido; num campo não obrigatório, o valor ausente vira <code>nao_avaliado</code>. </p></section><section class="documentation__section"><h2>Tipos de parâmetro</h2><p>Um parâmetro pode ser <code>number</code>, <code>boolean</code> ou <code>select</code> (lista fixa de opções):</p><pre class="documentation-code"><code>tipo_piso:
  label: Tipo de piso
  tipo: select
  opcoes: [liso, antiderrapante, irregular]
  obrigatorio: true</code></pre></section><section class="documentation__section"><h2>Tipos de regra</h2><p>Uma regra sem <code>tipo</code> é uma comparação direta — use <code>&gt;=</code>, <code>&lt;=</code>, <code>&gt;</code>, <code>&lt;</code>, <code>==</code> ou <code>!=</code>. O resultado é <code>conforme</code> ou <code>nao_conforme</code>:</p><pre class="documentation-code"><code>- id: largura_minima
  nome: Largura mínima
  parametro: largura
  operador: &quot;&gt;=&quot;
  valor: 0.80</code></pre><details class="documentation__details"><summary>Verificação manual (<code>tipo: checklist</code>)</summary><p>Para algo que exige julgamento humano (não dá pra medir automaticamente). Não compara nada — só registra o que a pessoa marcou, como <code>manual</code>:</p><pre class="documentation-code"><code>- id: rota_livre
  nome: Rota livre de obstáculos
  tipo: checklist
  parametro: possui_rota_livre</code></pre></details><details class="documentation__details"><summary>Faixas e exceções (<code>tipo: conditional</code>)</summary><p>As condições são avaliadas em ordem; a primeira cujo <code>quando</code> for verdadeiro decide o resultado:</p><pre class="documentation-code"><code>- id: tratamento_desnivel
  nome: Tratamento do desnível
  tipo: conditional
  parametro: desnivel
  condicoes:
    - quando: { operador: &quot;&lt;=&quot;, valor: 5 }
      resultado: conforme
      mensagem: Sem tratamento adicional.
    - quando: { operador: &quot;&lt;=&quot;, valor: 15 }
      verificar:
        parametro: possui_chanfro
        operador: &quot;==&quot;
        valor: true
    - quando: { operador: &quot;&gt;&quot;, valor: 15 }
      resultado: atencao
      mensagem: Avaliar como rampa.</code></pre><p class="documentation__note"> Se nenhuma condição bater, o resultado fica <code>nao_avaliado</code>. Um parâmetro usado dentro de <code>verificar</code> (aqui, <code>possui_chanfro</code>) também precisa estar declarado em <code>parametros</code>. </p></details></section><section class="documentation__section"><h2>Resultados possíveis</h2><ul class="documentation__list"><li><code>conforme</code> / <code>nao_conforme</code> — comparação direta, ou condição explícita.</li><li><code>manual</code> — regra do tipo <code>checklist</code>.</li><li><code>atencao</code> — resultado explícito opcional numa condição de <code>conditional</code>.</li><li><code>nao_avaliado</code> — parâmetro opcional sem valor, ou nenhuma condição satisfeita.</li><li><code>invalido</code> — parâmetro obrigatório sem valor preenchido.</li></ul></section>`,4)),_("section",pv,[_("span",mv,[G(le(Vm),{size:24,"aria-hidden":"true"})]),_("div",null,[$[1]||($[1]=_("h1",null,"Crie suas regras com IA",-1)),_("a",{class:"button button--outline",href:`${i.value}`,download:"SKILL.md"}," Baixar SKILL.md ",8,hv),$[2]||($[2]=_("p",null,"Um arquivo de texto com instruções prontas para uma IA (Claude, ChatGPT, Cursor) gerar checklists neste formato a partir do que você descrever. Baixe, cole numa conversa com a IA e peça a regra que precisa — sem aprender YAML.",-1))])]),_("section",vv,[$[4]||($[4]=_("h2",null,"Importação",-1)),$[5]||($[5]=_("p",null,[Te("Escolha um ou mais arquivos YAML/JSON, ou uma pasta com vários checklists — arquivos que não forem "),_("code",null,".yaml"),Te(", "),_("code",null,".yml"),Te(" ou "),_("code",null,".json"),Te(" são ignorados automaticamente. Tudo fica armazenado somente neste navegador.")],-1)),G(le(Pe),{class:"button",to:"/rules"},{default:ye(()=>[...$[3]||($[3]=[Te("Ir para importação",-1)])]),_:1})])])],64)):e.groupId?(V(),re(Re,{key:1},[G(le(Pe),{class:"back-link",to:"/rules"},{default:ye(()=>[G(le(Rt),{size:18,"aria-hidden":"true"}),$[7]||($[7]=Te("Conjuntos de regras",-1))]),_:1}),s.value?(V(),re("p",gv,"Carregando…")):m.value?(V(),re(Re,{key:1},[G(ct,{eyebrow:e.source==="user"?"Importado":"Padrão",title:m.value.nome,description:`${m.value.ruleSets.length} checklists que compõem este conjunto.`},null,8,["eyebrow","title","description"]),u.value?(V(),re("p",_v,fe(u.value),1)):Ee("",!0),_("section",bv,[$[8]||($[8]=_("h2",null,"Checklists",-1)),_("div",yv,[(V(!0),re(Re,null,Rn(m.value.ruleSets,ie=>(V(),re("article",{key:ie.id,class:"card rules-card"},[_("div",null,[_("div",Av,fe(e.source==="user"?"Adicionada por você":"Padrão"),1),_("h2",null,fe(ie.nome),1),_("p",null,fe(ie.norma?.nome??"Conjunto personalizado"),1),_("small",null,fe(v(ie))+" regras · "+fe(S(ie))+" campos",1)]),e.source==="user"?(V(),re("div",Nv,[_("button",{class:"text-button",onClick:oe=>de(ie,"yaml")},"Exportar YAML",8,xv),_("button",{class:"text-button",onClick:oe=>de(ie,"json")},"Exportar JSON",8,Tv),_("button",{class:"icon-button icon-button--danger",title:"Excluir","aria-label":"Excluir",onClick:oe=>M(ie,oe)},[G(le(yr),{size:18,"aria-hidden":"true"})],8,Rv)])):Ee("",!0)]))),128))])])],64)):(V(),ze(Vn,{key:2,title:"Conjunto não encontrado",text:"Ele pode ter sido removido."}))],64)):(V(),re(Re,{key:2},[G(ct,{eyebrow:"Biblioteca",title:"Conjuntos de regras",description:"Cada pasta ou importação é exibida como um único conjunto."},{action:ye(()=>[_("span",Bv,[G(le(Pe),{class:"button button--ghost",to:"/rules/documentation"},{default:ye(()=>[...$[9]||($[9]=[Te("Como criar regras",-1)])]),_:1}),_("label",wv,[$[10]||($[10]=Te(" Importar arquivos ",-1)),_("input",{type:"file",accept:".json,.yaml,.yml",multiple:"",disabled:c.value,onChange:x},null,40,Sv)]),_("label",Ev,[$[11]||($[11]=Te(" Importar pasta ",-1)),_("input",{type:"file",accept:".json,.yaml,.yml",webkitdirectory:"",disabled:c.value,onChange:x},null,40,Cv)])])]),_:1}),c.value?(V(),re("p",Ov,"Importando…")):Ee("",!0),u.value?(V(),re("p",Iv,fe(u.value),1)):Ee("",!0),s.value?(V(),re("p",Pv,"Carregando…")):(V(),re(Re,{key:3},[_("section",kv,[$[13]||($[13]=_("h2",null,"Regras padrão",-1)),_("div",Lv,[(V(!0),re(Re,null,Rn(d.value,ie=>(V(),ze(le(Pe),{key:ie.id,class:"card card--interactive rules-card",to:k(ie)},{default:ye(()=>[_("span",jv,[G(le(yt),{size:22,"aria-hidden":"true"})]),_("div",null,[$[12]||($[12]=_("div",{class:"rule-source"},"Padrão",-1)),_("h2",null,fe(ie.nome),1),_("p",null,fe(ie.ruleSets.length)+" checklists · "+fe(N(ie))+" regras",1)]),G(le(nr),{size:20,class:"chevron","aria-hidden":"true"})]),_:2},1032,["to"]))),128))])]),_("section",Dv,[$[15]||($[15]=_("h2",null,"Suas regras",-1)),p.value.length?(V(),re("div",Mv,[(V(!0),re(Re,null,Rn(p.value,ie=>(V(),ze(le(Pe),{key:ie.id,class:"card card--interactive rules-card",to:k(ie)},{default:ye(()=>[_("span",qv,[G(le(yt),{size:22,"aria-hidden":"true"})]),_("div",null,[$[14]||($[14]=_("div",{class:"rule-source"},"Adicionada por você",-1)),_("h2",null,fe(ie.nome),1),_("p",null,fe(ie.ruleSets.length)+" checklists",1)]),G(le(nr),{size:20,class:"chevron","aria-hidden":"true"})]),_:2},1032,["to"]))),128))])):(V(),ze(Vn,{key:1,title:"Nenhum conjunto importado",text:"Importe arquivos ou uma pasta para começar."}))])],64))],64))}},$v=[{path:"/",redirect:"/projects"},{path:"/projects",name:"projects",component:lv},{path:"/projects/:projectId",name:"project-detail",component:W0,props:!0},{path:"/projects/:projectId/environments/:environmentId",name:"project-environment",component:L0,props:!0},{path:"/elements/new",name:"element-new",component:ca,meta:{hideBottomNav:!0}},{path:"/elements/:elementId",name:"element-detail",component:ca,props:!0},{path:"/elements/:elementId/evaluation",name:"element-evaluation",component:Fl,props:!0},{path:"/quick-evaluation",name:"quick-evaluation",component:ca,props:{quick:!0}},{path:"/quick-evaluation/result",name:"quick-evaluation-result",component:Fl,props:{quick:!0}},{path:"/rules",name:"rules",component:ua},{path:"/rules/documentation",name:"rules-documentation",component:ua,props:{documentation:!0}},{path:"/rules/:source/:groupId",name:"rules-group",component:ua,props:!0},{path:"/:pathMatch(.*)*",redirect:"/projects"}],Fv=Rm({history:am("/Extensao-26.2/"),routes:$v});async function Vv(){const[e,n]=await Promise.all([Wf(),Ap()]);mf(ph).provide("services",e).provide("builtInRuleSets",n).use(Fv).mount("#app"),yf({immediate:!0})}Vv().catch(e=>{document.querySelector("#app").innerHTML=`<main class="fatal-error"><h1>Não foi possível abrir o aplicativo</h1><p>${e.message}</p></main>`});
