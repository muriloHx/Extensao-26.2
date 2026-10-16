(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&o(l)}).observe(document,{childList:!0,subtree:!0});function t(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(r){if(r.ep)return;r.ep=!0;const i=t(r);fetch(r.href,i)}})();function Ra(e){const n=Object.create(null);for(const t of e.split(","))n[t]=1;return t=>t in n}const Me={},Et=[],$n=()=>{},El=()=>!1,Xo=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),Zo=e=>e.startsWith("onUpdate:"),Je=Object.assign,Ta=(e,n)=>{const t=e.indexOf(n);t>-1&&e.splice(t,1)},wc=Object.prototype.hasOwnProperty,ke=(e,n)=>wc.call(e,n),ve=Array.isArray,Ct=e=>yo(e)==="[object Map]",Ft=e=>yo(e)==="[object Set]",Ua=e=>yo(e)==="[object Date]",Ae=e=>typeof e=="function",Fe=e=>typeof e=="string",Cn=e=>typeof e=="symbol",Le=e=>e!==null&&typeof e=="object",Cl=e=>(Le(e)||Ae(e))&&Ae(e.then)&&Ae(e.catch),Ol=Object.prototype.toString,yo=e=>Ol.call(e),Ec=e=>yo(e).slice(8,-1),Il=e=>yo(e)==="[object Object]",Ba=e=>Fe(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,Zt=Ra(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),er=e=>{const n=Object.create(null);return(t=>n[t]||(n[t]=e(t)))},Cc=/-\w/g,dn=er(e=>e.replace(Cc,n=>n.slice(1).toUpperCase())),Oc=/\B([A-Z])/g,Nt=er(e=>e.replace(Oc,"-$1").toLowerCase()),nr=er(e=>e.charAt(0).toUpperCase()+e.slice(1)),ko=er(e=>e?`on${nr(e)}`:""),Mn=(e,n)=>!Object.is(e,n),Lo=(e,...n)=>{for(let t=0;t<e.length;t++)e[t](...n)},Pl=(e,n,t,o=!1)=>{Object.defineProperty(e,n,{configurable:!0,enumerable:!1,writable:o,value:t})},tr=e=>{const n=parseFloat(e);return isNaN(n)?e:n},Ic=e=>{const n=Fe(e)?Number(e):NaN;return isNaN(n)?e:n};let Ha;const or=()=>Ha||(Ha=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function rr(e){if(ve(e)){const n={};for(let t=0;t<e.length;t++){const o=e[t],r=Fe(o)?jc(o):rr(o);if(r)for(const i in r)n[i]=r[i]}return n}else if(Fe(e)||Le(e))return e}const Pc=/;(?![^(]*\))/g,kc=/:([^]+)/,Lc=/\/\*[^]*?\*\//g;function jc(e){const n={};return e.replace(Lc,"").split(Pc).forEach(t=>{if(t){const o=t.split(kc);o.length>1&&(n[o[0].trim()]=o[1].trim())}}),n}function cn(e){let n="";if(Fe(e))n=e;else if(ve(e))for(let t=0;t<e.length;t++){const o=cn(e[t]);o&&(n+=o+" ")}else if(Le(e))for(const t in e)e[t]&&(n+=t+" ");return n.trim()}function Sn(e){if(!e)return null;let{class:n,style:t}=e;return n&&!Fe(n)&&(e.class=cn(n)),t&&(e.style=rr(t)),e}const Dc="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Mc=Ra(Dc);function kl(e){return!!e||e===""}function qc(e,n){if(e.length!==n.length)return!1;let t=!0;for(let o=0;t&&o<e.length;o++)t=Vt(e[o],n[o]);return t}function Vt(e,n){if(e===n)return!0;let t=Ua(e),o=Ua(n);if(t||o)return t&&o?e.getTime()===n.getTime():!1;if(t=Cn(e),o=Cn(n),t||o)return e===n;if(t=ve(e),o=ve(n),t||o)return t&&o?qc(e,n):!1;if(t=Le(e),o=Le(n),t||o){if(!t||!o)return!1;const r=Object.keys(e).length,i=Object.keys(n).length;if(r!==i)return!1;for(const l in e){const s=e.hasOwnProperty(l),c=n.hasOwnProperty(l);if(s&&!c||!s&&c||!Vt(e[l],n[l]))return!1}}return String(e)===String(n)}function Sa(e,n){return e.findIndex(t=>Vt(t,n))}const Ll=e=>!!(e&&e.__v_isRef===!0),ue=e=>Fe(e)?e:e==null?"":ve(e)||Le(e)&&(e.toString===Ol||!Ae(e.toString))?Ll(e)?ue(e.value):JSON.stringify(e,jl,2):String(e),jl=(e,n)=>Ll(n)?jl(e,n.value):Ct(n)?{[`Map(${n.size})`]:[...n.entries()].reduce((t,[o,r],i)=>(t[gr(o,i)+" =>"]=r,t),{})}:Ft(n)?{[`Set(${n.size})`]:[...n.values()].map(t=>gr(t))}:Cn(n)?gr(n):Le(n)&&!ve(n)&&!Il(n)?String(n):n,gr=(e,n="")=>{var t;return Cn(e)?`Symbol(${(t=e.description)!=null?t:n})`:e};let Qe;class $c{constructor(n=!1){this.detached=n,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this._warnOnRun=!0,this.__v_skip=!0,!n&&Qe&&(Qe.active?(this.parent=Qe,this.index=(Qe.scopes||(Qe.scopes=[])).push(this)-1):(this._active=!1,this._warnOnRun=!1))}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let n,t;if(this.scopes){const o=this.scopes.slice();for(n=0,t=o.length;n<t;n++)o[n].pause()}for(n=0,t=this.effects.length;n<t;n++)this.effects[n].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let n,t;if(this.scopes){const r=this.scopes.slice();for(n=0,t=r.length;n<t;n++)r[n].resume()}const o=this.effects.slice();for(n=0,t=o.length;n<t;n++)o[n].resume()}}run(n){if(this._active){const t=Qe;try{return Qe=this,n()}finally{Qe=t}}}on(){++this._on===1&&(this.prevScope=Qe,Qe=this)}off(){if(this._on>0&&--this._on===0){if(Qe===this)Qe=this.prevScope;else{let n=Qe;for(;n;){if(n.prevScope===this){n.prevScope=this.prevScope;break}n=n.prevScope}}this.prevScope=void 0}}stop(n){if(this._active){this._active=!1;let t,o;for(t=0,o=this.effects.length;t<o;t++)this.effects[t].stop();for(this.effects.length=0,t=0,o=this.cleanups.length;t<o;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){const r=this.scopes.slice();for(t=0,o=r.length;t<o;t++)r[t].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!n){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0}}}function Fc(){return Qe}let qe;const _r=new WeakSet;class Dl{constructor(n){this.fn=n,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Qe&&(Qe.active?Qe.effects.push(this):this.flags&=-2)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,_r.has(this)&&(_r.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||ql(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Ka(this),$l(this);const n=qe,t=En;qe=this,En=!0;try{return this.fn()}finally{Fl(this),qe=n,En=t,this.flags&=-3}}stop(){if(this.flags&1){for(let n=this.deps;n;n=n.nextDep)Ca(n);this.deps=this.depsTail=void 0,Ka(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?_r.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){ia(this)&&this.run()}get dirty(){return ia(this)}}let Ml=0,eo,no;function ql(e,n=!1){if(e.flags|=8,n){e.next=no,no=e;return}e.next=eo,eo=e}function wa(){Ml++}function Ea(){if(--Ml>0)return;if(no){let n=no;for(no=void 0;n;){const t=n.next;n.next=void 0,n.flags&=-9,n=t}}let e;for(;eo;){let n=eo;for(eo=void 0;n;){const t=n.next;if(n.next=void 0,n.flags&=-9,n.flags&1)try{n.trigger()}catch(o){e||(e=o)}n=t}}if(e)throw e}function $l(e){for(let n=e.deps;n;n=n.nextDep)n.version=-1,n.prevActiveLink=n.dep.activeLink,n.dep.activeLink=n}function Fl(e){let n,t=e.depsTail,o=t;for(;o;){const r=o.prevDep;o.version===-1?(o===t&&(t=r),Ca(o),Vc(o)):n=o,o.dep.activeLink=o.prevActiveLink,o.prevActiveLink=void 0,o=r}e.deps=n,e.depsTail=t}function ia(e){for(let n=e.deps;n;n=n.nextDep)if(n.dep.version!==n.version||n.dep.computed&&(Vl(n.dep.computed)||n.dep.version!==n.version))return!0;return!!e._dirty}function Vl(e){if(e.flags&4&&!(e.flags&16)||(e.flags&=-17,e.globalVersion===io)||(e.globalVersion=io,!e.isSSR&&e.flags&128&&(!e.deps&&!e._dirty||!ia(e))))return;e.flags|=2;const n=e.dep,t=qe,o=En;qe=e,En=!0;try{$l(e);const r=e.fn(e._value);(n.version===0||Mn(r,e._value))&&(e.flags|=128,e._value=r,n.version++)}catch(r){throw n.version++,r}finally{qe=t,En=o,Fl(e),e.flags&=-3}}function Ca(e,n=!1){const{dep:t,prevSub:o,nextSub:r}=e;if(o&&(o.nextSub=r,e.prevSub=void 0),r&&(r.prevSub=o,e.nextSub=void 0),t.subs===e&&(t.subs=o,!o&&t.computed)){t.computed.flags&=-5;for(let i=t.computed.deps;i;i=i.nextDep)Ca(i,!0)}!n&&!--t.sc&&t.map&&t.map.delete(t.key)}function Vc(e){const{prevDep:n,nextDep:t}=e;n&&(n.nextDep=t,e.prevDep=void 0),t&&(t.prevDep=n,e.nextDep=void 0)}let En=!0;const zl=[];function Qn(){zl.push(En),En=!1}function Xn(){const e=zl.pop();En=e===void 0?!0:e}function Ka(e){const{cleanup:n}=e;if(e.cleanup=void 0,n){const t=qe;qe=void 0;try{n()}finally{qe=t}}}let io=0;class zc{constructor(n,t){this.sub=n,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Oa{constructor(n){this.computed=n,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(n){if(!qe||!En||qe===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==qe)t=this.activeLink=new zc(qe,this),qe.deps?(t.prevDep=qe.depsTail,qe.depsTail.nextDep=t,qe.depsTail=t):qe.deps=qe.depsTail=t,Ul(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){const o=t.nextDep;o.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=o),t.prevDep=qe.depsTail,t.nextDep=void 0,qe.depsTail.nextDep=t,qe.depsTail=t,qe.deps===t&&(qe.deps=o)}return t}trigger(n){this.version++,io++,this.notify(n)}notify(n){wa();try{for(let t=this.subs;t;t=t.prevSub)t.sub.notify()&&t.sub.dep.notify()}finally{Ea()}}}function Ul(e){if(e.dep.sc++,e.sub.flags&4){const n=e.dep.computed;if(n&&!e.dep.subs){n.flags|=20;for(let o=n.deps;o;o=o.nextDep)Ul(o)}const t=e.dep.subs;t!==e&&(e.prevSub=t,t&&(t.nextSub=e)),e.dep.subs=e}}const la=new WeakMap,_t=Symbol(""),sa=Symbol(""),lo=Symbol("");function nn(e,n,t){if(En&&qe){let o=la.get(e);o||la.set(e,o=new Map);let r=o.get(t);r||(o.set(t,r=new Oa),r.map=o,r.key=t),r.track()}}function Yn(e,n,t,o,r,i){const l=la.get(e);if(!l){io++;return}const s=c=>{c&&c.trigger()};if(wa(),n==="clear")l.forEach(s);else{const c=ve(e),d=c&&Ba(t);if(c&&t==="length"){const u=Number(o);l.forEach((p,m)=>{(m==="length"||m===lo||!Cn(m)&&m>=u)&&s(p)})}else switch((t!==void 0||l.has(void 0))&&s(l.get(t)),d&&s(l.get(lo)),n){case"add":c?d&&s(l.get("length")):(s(l.get(_t)),Ct(e)&&s(l.get(sa)));break;case"delete":c||(s(l.get(_t)),Ct(e)&&s(l.get(sa)));break;case"set":Ct(e)&&s(l.get(_t));break}}Ea()}function xt(e){const n=Oe(e);return n===e?n:(nn(n,"iterate",lo),xn(e)?n:n.map(On))}function ar(e){return nn(e=Oe(e),"iterate",lo),e}function jn(e,n){return Zn(e)?Lt(bt(e)?On(n):n):On(n)}const Uc={__proto__:null,[Symbol.iterator](){return br(this,Symbol.iterator,e=>jn(this,e))},concat(...e){return xt(this).concat(...e.map(n=>ve(n)?xt(n):n))},entries(){return br(this,"entries",e=>(e[1]=jn(this,e[1]),e))},every(e,n){return zn(this,"every",e,n,void 0,arguments)},filter(e,n){return zn(this,"filter",e,n,t=>t.map(o=>jn(this,o)),arguments)},find(e,n){return zn(this,"find",e,n,t=>jn(this,t),arguments)},findIndex(e,n){return zn(this,"findIndex",e,n,void 0,arguments)},findLast(e,n){return zn(this,"findLast",e,n,t=>jn(this,t),arguments)},findLastIndex(e,n){return zn(this,"findLastIndex",e,n,void 0,arguments)},forEach(e,n){return zn(this,"forEach",e,n,void 0,arguments)},includes(...e){return yr(this,"includes",e)},indexOf(...e){return yr(this,"indexOf",e)},join(e){return xt(this).join(e)},lastIndexOf(...e){return yr(this,"lastIndexOf",e)},map(e,n){return zn(this,"map",e,n,void 0,arguments)},pop(){return Ht(this,"pop")},push(...e){return Ht(this,"push",e)},reduce(e,...n){return Ga(this,"reduce",e,n)},reduceRight(e,...n){return Ga(this,"reduceRight",e,n)},shift(){return Ht(this,"shift")},some(e,n){return zn(this,"some",e,n,void 0,arguments)},splice(...e){return Ht(this,"splice",e)},toReversed(){return xt(this).toReversed()},toSorted(e){return xt(this).toSorted(e)},toSpliced(...e){return xt(this).toSpliced(...e)},unshift(...e){return Ht(this,"unshift",e)},values(){return br(this,"values",e=>jn(this,e))}};function br(e,n,t){const o=ar(e),r=o[n]();return o!==e&&!xn(e)&&(r._next=r.next,r.next=()=>{const i=r._next();return i.done||(i.value=t(i.value)),i}),r}const Hc=Array.prototype;function zn(e,n,t,o,r,i){const l=ar(e),s=l!==e&&!xn(e),c=l[n];if(c!==Hc[n]){const p=c.apply(e,i);return s?On(p):p}let d=t;l!==e&&(s?d=function(p,m){return t.call(this,jn(e,p),m,e)}:t.length>2&&(d=function(p,m){return t.call(this,p,m,e)}));const u=c.call(l,d,o);return s&&r?r(u):u}function Ga(e,n,t,o){const r=ar(e),i=r!==e&&!xn(e);let l=t,s=!1;r!==e&&(i?(s=o.length===0,l=function(d,u,p){return s&&(s=!1,d=jn(e,d)),t.call(this,d,jn(e,u),p,e)}):t.length>3&&(l=function(d,u,p){return t.call(this,d,u,p,e)}));const c=r[n](l,...o);return s?jn(e,c):c}function yr(e,n,t){const o=Oe(e);nn(o,"iterate",lo);const r=o[n](...t);return(r===-1||r===!1)&&ka(t[0])?(t[0]=Oe(t[0]),o[n](...t)):r}function Ht(e,n,t=[]){Qn(),wa();const o=Oe(e)[n].apply(e,t);return Ea(),Xn(),o}const Kc=Ra("__proto__,__v_isRef,__isVue"),Hl=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(Cn));function Gc(e){Cn(e)||(e=String(e));const n=Oe(this);return nn(n,"has",e),n.hasOwnProperty(e)}class Kl{constructor(n=!1,t=!1){this._isReadonly=n,this._isShallow=t}get(n,t,o){if(t==="__v_skip")return n.__v_skip;const r=this._isReadonly,i=this._isShallow;if(t==="__v_isReactive")return!r;if(t==="__v_isReadonly")return r;if(t==="__v_isShallow")return i;if(t==="__v_raw")return o===(r?i?ou:Jl:i?Wl:Yl).get(n)||Object.getPrototypeOf(n)===Object.getPrototypeOf(o)?n:void 0;const l=ve(n);if(!r){let c;if(l&&(c=Uc[t]))return c;if(t==="hasOwnProperty")return Gc}const s=Reflect.get(n,t,rn(n)?n:o);if((Cn(t)?Hl.has(t):Kc(t))||(r||nn(n,"get",t),i))return s;if(rn(s)){const c=l&&Ba(t)?s:s.value;return r&&Le(c)?ua(c):c}return Le(s)?r?ua(s):Ao(s):s}}class Gl extends Kl{constructor(n=!1){super(!1,n)}set(n,t,o,r){let i=n[t];const l=ve(n)&&Ba(t);if(!this._isShallow){const d=Zn(i);if(!xn(o)&&!Zn(o)&&(i=Oe(i),o=Oe(o)),!l&&rn(i)&&!rn(o))return d||(i.value=o),!0}const s=l?Number(t)<n.length:ke(n,t),c=Reflect.set(n,t,o,rn(n)?n:r);return n===Oe(r)&&c&&(s?Mn(o,i)&&Yn(n,"set",t,o):Yn(n,"add",t,o)),c}deleteProperty(n,t){const o=ke(n,t);n[t];const r=Reflect.deleteProperty(n,t);return r&&o&&Yn(n,"delete",t,void 0),r}has(n,t){const o=Reflect.has(n,t);return(!Cn(t)||!Hl.has(t))&&nn(n,"has",t),o}ownKeys(n){return nn(n,"iterate",ve(n)?"length":_t),Reflect.ownKeys(n)}}class Yc extends Kl{constructor(n=!1){super(!0,n)}set(n,t){return!0}deleteProperty(n,t){return!0}}const Wc=new Gl,Jc=new Yc,Qc=new Gl(!0);const ca=e=>e,wo=e=>Reflect.getPrototypeOf(e);function Xc(e,n,t){return function(...o){const r=this.__v_raw,i=Oe(r),l=Ct(i),s=e==="entries"||e===Symbol.iterator&&l,c=e==="keys"&&l,d=r[e](...o),u=t?ca:n?Lt:On;return!n&&nn(i,"iterate",c?sa:_t),Je(Object.create(d),{next(){const{value:p,done:m}=d.next();return m?{value:p,done:m}:{value:s?[u(p[0]),u(p[1])]:u(p),done:m}}})}}function Eo(e){return function(...n){return e==="delete"?!1:e==="clear"?void 0:this}}function Zc(e,n){const t={get(r){const i=this.__v_raw,l=Oe(i),s=Oe(r);e||(Mn(r,s)&&nn(l,"get",r),nn(l,"get",s));const{has:c}=wo(l),d=n?ca:e?Lt:On;if(c.call(l,r))return d(i.get(r));if(c.call(l,s))return d(i.get(s));i!==l&&i.get(r)},get size(){const r=this.__v_raw;return!e&&nn(Oe(r),"iterate",_t),r.size},has(r){const i=this.__v_raw,l=Oe(i),s=Oe(r);return e||(Mn(r,s)&&nn(l,"has",r),nn(l,"has",s)),r===s?i.has(r):i.has(r)||i.has(s)},forEach(r,i){const l=this,s=l.__v_raw,c=Oe(s),d=n?ca:e?Lt:On;return!e&&nn(c,"iterate",_t),s.forEach((u,p)=>r.call(i,d(u),d(p),l))}};return Je(t,e?{add:Eo("add"),set:Eo("set"),delete:Eo("delete"),clear:Eo("clear")}:{add(r){const i=Oe(this),l=wo(i),s=Oe(r),c=!n&&!xn(r)&&!Zn(r)?s:r;return l.has.call(i,c)||Mn(r,c)&&l.has.call(i,r)||Mn(s,c)&&l.has.call(i,s)||(i.add(c),Yn(i,"add",c,c)),this},set(r,i){!n&&!xn(i)&&!Zn(i)&&(i=Oe(i));const l=Oe(this),{has:s,get:c}=wo(l);let d=s.call(l,r);d||(r=Oe(r),d=s.call(l,r));const u=c.call(l,r);return l.set(r,i),d?Mn(i,u)&&Yn(l,"set",r,i):Yn(l,"add",r,i),this},delete(r){const i=Oe(this),{has:l,get:s}=wo(i);let c=l.call(i,r);c||(r=Oe(r),c=l.call(i,r)),s&&s.call(i,r);const d=i.delete(r);return c&&Yn(i,"delete",r,void 0),d},clear(){const r=Oe(this),i=r.size!==0,l=r.clear();return i&&Yn(r,"clear",void 0,void 0),l}}),["keys","values","entries",Symbol.iterator].forEach(r=>{t[r]=Xc(r,e,n)}),t}function Ia(e,n){const t=Zc(e,n);return(o,r,i)=>r==="__v_isReactive"?!e:r==="__v_isReadonly"?e:r==="__v_raw"?o:Reflect.get(ke(t,r)&&r in o?t:o,r,i)}const eu={get:Ia(!1,!1)},nu={get:Ia(!1,!0)},tu={get:Ia(!0,!1)};const Yl=new WeakMap,Wl=new WeakMap,Jl=new WeakMap,ou=new WeakMap;function ru(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Ao(e){return Zn(e)?e:Pa(e,!1,Wc,eu,Yl)}function Ql(e){return Pa(e,!1,Qc,nu,Wl)}function ua(e){return Pa(e,!0,Jc,tu,Jl)}function Pa(e,n,t,o,r){if(!Le(e)||e.__v_raw&&!(n&&e.__v_isReactive)||e.__v_skip||!Object.isExtensible(e))return e;const i=r.get(e);if(i)return i;const l=ru(Ec(e));if(l===0)return e;const s=new Proxy(e,l===2?o:t);return r.set(e,s),s}function bt(e){return Zn(e)?bt(e.__v_raw):!!(e&&e.__v_isReactive)}function Zn(e){return!!(e&&e.__v_isReadonly)}function xn(e){return!!(e&&e.__v_isShallow)}function ka(e){return e?!!e.__v_raw:!1}function Oe(e){const n=e&&e.__v_raw;return n?Oe(n):e}function au(e){return!ke(e,"__v_skip")&&Object.isExtensible(e)&&Pl(e,"__v_skip",!0),e}const On=e=>Le(e)?Ao(e):e,Lt=e=>Le(e)?ua(e):e;function rn(e){return e?e.__v_isRef===!0:!1}function je(e){return Xl(e,!1)}function iu(e){return Xl(e,!0)}function Xl(e,n){return rn(e)?e:new lu(e,n)}class lu{constructor(n,t){this.dep=new Oa,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?n:Oe(n),this._value=t?n:On(n),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(n){const t=this._rawValue,o=this.__v_isShallow||xn(n)||Zn(n);n=o?n:Oe(n),Mn(n,t)&&(this._rawValue=n,this._value=o?n:On(n),this.dep.trigger())}}function ae(e){return rn(e)?e.value:e}const su={get:(e,n,t)=>n==="__v_raw"?e:ae(Reflect.get(e,n,t)),set:(e,n,t,o)=>{const r=e[n];return rn(r)&&!rn(t)?(r.value=t,!0):Reflect.set(e,n,t,o)}};function Zl(e){return bt(e)?e:new Proxy(e,su)}class cu{constructor(n,t,o){this.fn=n,this.setter=t,this._value=void 0,this.dep=new Oa(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=io-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=o}notify(){if(this.flags|=16,!(this.flags&8)&&qe!==this)return ql(this,!0),!0}get value(){const n=this.dep.track();return Vl(this),n&&(n.version=this.dep.version),this._value}set value(n){this.setter&&this.setter(n)}}function uu(e,n,t=!1){let o,r;return Ae(e)?o=e:(o=e.get,r=e.set),new cu(o,r,t)}const Co={},qo=new WeakMap;let ht;function du(e,n=!1,t=ht){if(t){let o=qo.get(t);o||qo.set(t,o=[]),o.push(e)}}function fu(e,n,t=Me){const{immediate:o,deep:r,once:i,scheduler:l,augmentJob:s,call:c}=t,d=C=>r?C:xn(C)||r===!1||r===0?Wn(C,1):Wn(C);let u,p,m,g,B=!1,N=!1;if(rn(e)?(p=()=>e.value,B=xn(e)):bt(e)?(p=()=>d(e),B=!0):ve(e)?(N=!0,B=e.some(C=>bt(C)||xn(C)),p=()=>e.map(C=>{if(rn(C))return C.value;if(bt(C))return d(C);if(Ae(C))return c?c(C,2):C()})):Ae(e)?n?p=c?()=>c(e,2):e:p=()=>{if(m){Qn();try{m()}finally{Xn()}}const C=ht;ht=u;try{return c?c(e,3,[g]):e(g)}finally{ht=C}}:p=$n,n&&r){const C=p,U=r===!0?1/0:r;p=()=>Wn(C(),U)}const w=Fc(),Q=()=>{u.stop(),w&&w.active&&Ta(w.effects,u)};if(i&&n){const C=n;n=(...U)=>{const re=C(...U);return Q(),re}}let q=N?new Array(e.length).fill(Co):Co;const K=C=>{if(!(!(u.flags&1)||!u.dirty&&!C))if(n){const U=u.run();if(C||r||B||(N?U.some((re,be)=>Mn(re,q[be])):Mn(U,q))){m&&m();const re=ht;ht=u;try{const be=[U,q===Co?void 0:N&&q[0]===Co?[]:q,g];q=U,c?c(n,3,be):n(...be)}finally{ht=re}}}else u.run()};return s&&s(K),u=new Dl(p),u.scheduler=l?()=>l(K,!1):K,g=C=>du(C,!1,u),m=u.onStop=()=>{const C=qo.get(u);if(C){if(c)c(C,4);else for(const U of C)U();qo.delete(u)}},n?o?K(!0):q=u.run():l?l(K.bind(null,!0),!0):u.run(),Q.pause=u.pause.bind(u),Q.resume=u.resume.bind(u),Q.stop=Q,Q}function Wn(e,n=1/0,t){if(n<=0||!Le(e)||e.__v_skip||(t=t||new Map,(t.get(e)||0)>=n))return e;if(t.set(e,n),n--,rn(e))Wn(e.value,n,t);else if(ve(e))for(let o=0;o<e.length;o++)Wn(e[o],n,t);else if(Ft(e)||Ct(e))e.forEach(o=>{Wn(o,n,t)});else if(Il(e)){for(const o in e)Wn(e[o],n,t);for(const o of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,o)&&Wn(e[o],n,t)}return e}function No(e,n,t,o){try{return o?e(...o):e()}catch(r){ir(r,n,t)}}function Tn(e,n,t,o){if(Ae(e)){const r=No(e,n,t,o);return r&&Cl(r)&&r.catch(i=>{ir(i,n,t)}),r}if(ve(e)){const r=[];for(let i=0;i<e.length;i++)r.push(Tn(e[i],n,t,o));return r}}function ir(e,n,t,o=!0){const r=n?n.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:l}=n&&n.appContext.config||Me;if(n){let s=n.parent;const c=n.proxy,d=`https://vuejs.org/error-reference/#runtime-${t}`;for(;s;){const u=s.ec;if(u){for(let p=0;p<u.length;p++)if(u[p](e,c,d)===!1)return}s=s.parent}if(i){Qn(),No(i,null,10,[e,c,d]),Xn();return}}pu(e,t,r,o,l)}function pu(e,n,t,o=!0,r=!1){if(r)throw e;console.error(e)}const un=[];let Ln=-1;const Ot=[];let rt=null,Tt=0;const es=Promise.resolve();let $o=null;function lr(e){const n=$o||es;return e?n.then(this?e.bind(this):e):n}function mu(e){let n=Ln+1,t=un.length;for(;n<t;){const o=n+t>>>1,r=un[o],i=so(r);i<e||i===e&&r.flags&2?n=o+1:t=o}return n}function La(e){if(!(e.flags&1)){const n=so(e),t=un[un.length-1];!t||!(e.flags&2)&&n>=so(t)?un.push(e):un.splice(mu(n),0,e),e.flags|=1,ns()}}function ns(){$o||($o=es.then(os))}function hu(e){if(!ve(e))rt&&e.id===-1?rt.splice(Tt+1,0,e):e.flags&1||(Ot.push(e),e.flags|=1);else for(let n=0;n<e.length;n++)Ot.push(e[n]);ns()}function Ya(e,n,t=Ln+1){for(;t<un.length;t++){const o=un[t];if(o&&o.flags&2){if(e&&o.id!==e.uid)continue;un.splice(t,1),t--,o.flags&4&&(o.flags&=-2),o(),o.flags&4||(o.flags&=-2)}}}function ts(e){if(Ot.length){const n=[...new Set(Ot)].sort((t,o)=>so(t)-so(o));if(Ot.length=0,rt){for(let t=0;t<n.length;t++)rt.push(n[t]);return}for(rt=n,Tt=0;Tt<rt.length;Tt++){const t=rt[Tt];t.flags&4&&(t.flags&=-2),t.flags&8||t(),t.flags&=-2}rt=null,Tt=0}}const so=e=>e.id==null?e.flags&2?-1:1/0:e.id;function os(e){try{for(Ln=0;Ln<un.length;Ln++){const n=un[Ln];n&&!(n.flags&8)&&(n.flags&4&&(n.flags&=-2),No(n,n.i,n.i?15:14),n.flags&4||(n.flags&=-2))}}finally{for(;Ln<un.length;Ln++){const n=un[Ln];n&&(n.flags&=-2)}Ln=-1,un.length=0,ts(),$o=null,(un.length||Ot.length)&&os()}}let Xe=null,rs=null;function Fo(e){const n=Xe;return Xe=e,rs=e&&e.type.__scopeId||null,n}function _e(e,n=Xe,t){if(!n||e._n)return e;const o=(...r)=>{o._d&&Ho(-1);const i=Fo(n),l=Jn.length;let s;try{s=e(...r)}finally{for(let c=Jn.length;c>l;c--)Ma();Fo(i),o._d&&Ho(1)}return s};return o._n=!0,o._c=!0,o._d=!0,o}function An(e,n){if(Xe===null)return e;const t=pr(Xe),o=e.dirs||(e.dirs=[]);for(let r=0;r<n.length;r++){let[i,l,s,c=Me]=n[r];i&&(Ae(i)&&(i={mounted:i,updated:i}),i.deep&&Wn(l),o.push({dir:i,instance:t,value:l,oldValue:void 0,arg:s,modifiers:c}))}return e}function ut(e,n,t,o){const r=e.dirs,i=n&&n.dirs;for(let l=0;l<r.length;l++){const s=r[l];i&&(s.oldValue=i[l].value);let c=s.dir[o];c&&(Qn(),Tn(c,t,8,[e.el,s,e,n]),Xn())}}function jo(e,n){if(on){let t=on.provides;const o=on.parent&&on.parent.provides;o===t&&(t=on.provides=Object.create(o)),t[e]=n}}function Ye(e,n,t=!1){const o=$s();if(o||Pt){let r=Pt?Pt._context.provides:o?o.parent==null||o.ce?o.vnode.appContext&&o.vnode.appContext.provides:o.parent.provides:void 0;if(r&&e in r)return r[e];if(arguments.length>1)return t&&Ae(n)?n.call(o&&o.proxy):n}}const vu=Symbol.for("v-scx"),gu=()=>Ye(vu);function yt(e,n,t){return as(e,n,t)}function as(e,n,t=Me){const{immediate:o,deep:r,flush:i,once:l}=t,s=Je({},t),c=n&&o||!n&&i!=="post";let d;if(mo){if(i==="sync"){const g=gu();d=g.__watcherHandles||(g.__watcherHandles=[])}else if(!c){const g=()=>{};return g.stop=$n,g.resume=$n,g.pause=$n,g}}const u=on;s.call=(g,B,N)=>Tn(g,u,B,N);let p=!1;i==="post"?s.scheduler=g=>{mn(g,u&&u.suspense)}:i!=="sync"&&(p=!0,s.scheduler=(g,B)=>{B?g():La(g)}),s.augmentJob=g=>{n&&(g.flags|=4),p&&(g.flags|=2,u&&(g.id=u.uid,g.i=u))};const m=fu(e,n,s);return mo&&(d?d.push(m):c&&m()),m}function _u(e,n,t){const o=this.proxy,r=Fe(e)?e.includes(".")?is(o,e):()=>o[e]:e.bind(o,o);let i;Ae(n)?i=n:(i=n.handler,t=n);const l=xo(this),s=as(r,i.bind(o),t);return l(),s}function is(e,n){const t=n.split(".");return()=>{let o=e;for(let r=0;r<t.length&&o;r++)o=o[t[r]];return o}}const bu=Symbol("_vte"),sr=e=>e.__isTeleport,yn=Symbol("_leaveCb"),Kt=Symbol("_enterCb");function yu(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return ct(()=>{e.isMounted=!0}),hs(()=>{e.isUnmounting=!0}),e}const bn=[Function,Array],ls={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:bn,onEnter:bn,onAfterEnter:bn,onEnterCancelled:bn,onBeforeLeave:bn,onLeave:bn,onAfterLeave:bn,onLeaveCancelled:bn,onBeforeAppear:bn,onAppear:bn,onAfterAppear:bn,onAppearCancelled:bn},ss=e=>{const n=e.subTree;return n.component?ss(n.component):n},Au={name:"BaseTransition",props:ls,setup(e,{slots:n}){const t=$s(),o=yu();return()=>{const r=n.default&&ds(n.default(),!0),i=r&&r.length?cs(r):t.subTree?Ie():void 0;if(!i)return;const l=Oe(e),{mode:s}=l;if(o.isLeaving)return Ar(i);const c=Vo(i);if(!c)return Ar(i);let d=da(c,l,o,t,p=>d=p);c.type!==tn&&co(c,d);let u=t.subTree&&Vo(t.subTree);if(u&&u.type!==tn&&!vt(u,c)&&ss(t).type!==tn){let p=da(u,l,o,t);if(co(u,p),s==="out-in"&&c.type!==tn)return o.isLeaving=!0,p.afterLeave=()=>{o.isLeaving=!1,t.job.flags&8||t.update(),delete p.afterLeave,u=void 0},Ar(i);s==="in-out"&&c.type!==tn?p.delayLeave=(m,g,B)=>{const N=us(o,u);N[String(u.key)]=u,m[yn]=()=>{g(),m[yn]=void 0,delete d.delayedLeave,u=void 0},d.delayedLeave=()=>{B(),delete d.delayedLeave,u=void 0}}:u=void 0}else u&&(u=void 0);return i}}};function cs(e){let n=e[0];if(e.length>1){for(const t of e)if(t.type!==tn){n=t;break}}return n}const Nu=Au;function us(e,n){const{leavingVNodes:t}=e;let o=t.get(n.type);return o||(o=Object.create(null),t.set(n.type,o)),o}function da(e,n,t,o,r){const{appear:i,mode:l,persisted:s=!1,onBeforeEnter:c,onEnter:d,onAfterEnter:u,onEnterCancelled:p,onBeforeLeave:m,onLeave:g,onAfterLeave:B,onLeaveCancelled:N,onBeforeAppear:w,onAppear:Q,onAfterAppear:q,onAppearCancelled:K}=n,C=String(e.key),U=us(t,e),re=(pe,W)=>{pe&&Tn(pe,o,9,W)},be=(pe,W)=>{const D=W[1];re(pe,W),ve(pe)?pe.every(T=>T.length<=1)&&D():pe.length<=1&&D()},Se={mode:l,persisted:s,beforeEnter(pe){let W=c;if(!t.isMounted)if(i)W=w||c;else return;pe[yn]&&pe[yn](!0);const D=U[C];D&&vt(e,D)&&D.el[yn]&&D.el[yn](),re(W,[pe])},enter(pe){if(U[C]===e)return;let W=d,D=u,T=p;if(!t.isMounted)if(i)W=Q||d,D=q||u,T=K||p;else return;let Z=!1;pe[Kt]=Ke=>{Z||(Z=!0,Ke?re(T,[pe]):re(D,[pe]),Se.delayedLeave&&Se.delayedLeave(),pe[Kt]=void 0)};const oe=pe[Kt].bind(null,!1);W?be(W,[pe,oe]):oe()},leave(pe,W){const D=String(e.key);if(pe[Kt]&&pe[Kt](!0),t.isUnmounting)return W();re(m,[pe]);let T=!1;pe[yn]=oe=>{T||(T=!0,W(),oe?re(N,[pe]):re(B,[pe]),pe[yn]=void 0,U[D]===e&&delete U[D])};const Z=pe[yn].bind(null,!1);U[D]=e,g?be(g,[pe,Z]):Z()},clone(pe){const W=da(pe,n,t,o,r);return r&&r(W),W}};return Se}function Ar(e){if(cr(e))return e=st(e),e.children=null,e}function Vo(e){if(!cr(e))return sr(e.type)&&e.children?cs(e.children):e;if(e.component)return e.component.subTree;const{shapeFlag:n,children:t}=e;if(t){if(n&16)return t[0];if(n&32&&Ae(t.default))return t.default()}}function co(e,n){if(e.shapeFlag&6&&e.component){e.transition=n;const t=e.component.subTree;co(sr(t.type)&&Vo(t)||t,n)}else e.shapeFlag&128?(e.ssContent.transition=n.clone(e.ssContent),e.ssFallback.transition=n.clone(e.ssFallback)):e.transition=n}function ds(e,n=!1,t){let o=[],r=0;for(let i=0;i<e.length;i++){let l=e[i];const s=t==null?l.key:String(t)+String(l.key!=null?l.key:i);l.type===Re?(l.patchFlag&128&&r++,o=o.concat(ds(l.children,n,s))):(n||l.type!==tn)&&o.push(s!=null?st(l,{key:s}):l)}if(r>1)for(let i=0;i<o.length;i++)o[i].patchFlag=-2;return o}function fs(e,n){return Ae(e)?Je({name:e.name},n,{setup:e}):e}function ps(e){e.ids=[e.ids[0]+e.ids[2]+++"-",0,0]}function Wa(e,n){let t;return!!((t=Object.getOwnPropertyDescriptor(e,n))&&!t.configurable)}const zo=new WeakMap;function to(e,n,t,o,r=!1){if(ve(e)){e.forEach((N,w)=>to(N,n&&(ve(n)?n[w]:n),t,o,r));return}if(It(o)&&!r){o.shapeFlag&512&&o.type.__asyncResolved&&o.component.subTree.component&&to(e,n,t,o.component.subTree);return}const i=o.shapeFlag&4?pr(o.component):o.el,l=r?null:i,{i:s,r:c}=e,d=n&&n.r,u=s.refs===Me?s.refs={}:s.refs,p=s.setupState,m=Oe(p),g=p===Me?El:N=>Wa(u,N)?!1:ke(m,N),B=(N,w)=>!(w&&Wa(u,w));if(d!=null&&d!==c){if(Ja(n),Fe(d))u[d]=null,g(d)&&(p[d]=null);else if(rn(d)){const N=n;B(d,N.k)&&(d.value=null),N.k&&(u[N.k]=null)}}if(Ae(c))No(c,s,12,[l,u]);else{const N=Fe(c),w=rn(c);if(N||w){const Q=()=>{if(e.f){const q=N?g(c)?p[c]:u[c]:B()||!e.k?c.value:u[e.k];if(r)ve(q)&&Ta(q,i);else if(ve(q))q.includes(i)||q.push(i);else if(N)u[c]=[i],g(c)&&(p[c]=u[c]);else{const K=[i];B(c,e.k)&&(c.value=K),e.k&&(u[e.k]=K)}}else N?(u[c]=l,g(c)&&(p[c]=l)):w&&(B(c,e.k)&&(c.value=l),e.k&&(u[e.k]=l))};if(l){const q=()=>{Q(),zo.delete(e)};q.id=-1,zo.set(e,q),mn(q,t)}else Ja(e),Q()}}}function Ja(e){const n=zo.get(e);n&&(n.flags|=8,zo.delete(e))}or().requestIdleCallback;or().cancelIdleCallback;const It=e=>!!e.type.__asyncLoader,cr=e=>e.type.__isKeepAlive;function xu(e,n){ms(e,"a",n)}function Ru(e,n){ms(e,"da",n)}function ms(e,n,t=on){const o=e.__wdc||(e.__wdc=()=>{let r=t;for(;r;){if(r.isDeactivated)return;r=r.parent}return e()});if(ur(n,o,t),t){let r=t.parent;for(;r&&r.parent;)cr(r.parent.vnode)&&Tu(o,n,t,r),r=r.parent}}function Tu(e,n,t,o){const r=ur(n,e,o,!0);vs(()=>{Ta(o[n],r)},t)}function ur(e,n,t=on,o=!1){if(t){const r=t[e]||(t[e]=[]),i=n.__weh||(n.__weh=(...l)=>{Qn();const s=xo(t),c=Tn(n,t,e,l);return s(),Xn(),c});return o?r.unshift(i):r.push(i),i}}const et=e=>(n,t=on)=>{(!mo||e==="sp")&&ur(e,(...o)=>n(...o),t)},Bu=et("bm"),ct=et("m"),Su=et("bu"),wu=et("u"),hs=et("bum"),vs=et("um"),Eu=et("sp"),Cu=et("rtg"),Ou=et("rtc");function Iu(e,n=on){ur("ec",e,n)}const gs="components",Pu="directives",_s=Symbol.for("v-ndc");function Nr(e){return Fe(e)?bs(gs,e,!1)||e:e||_s}function ku(e){return bs(Pu,e)}function bs(e,n,t=!0,o=!1){const r=Xe||on;if(r){const i=r.type;if(e===gs){const s=gd(i,!1);if(s&&(s===n||s===dn(n)||s===nr(dn(n))))return i}const l=Qa(r[e]||i[e],n)||Qa(r.appContext[e],n);return!l&&o?i:l}}function Qa(e,n){return e&&(e[n]||e[dn(n)]||e[nr(dn(n))])}function Rn(e,n,t,o){let r;const i=t,l=ve(e);if(l||Fe(e)){const s=l&&bt(e);let c=!1,d=!1;s&&(c=!xn(e),d=Zn(e),e=ar(e)),r=new Array(e.length);for(let u=0,p=e.length;u<p;u++)r[u]=n(c?d?Lt(On(e[u])):On(e[u]):e[u],u,void 0,i)}else if(typeof e=="number"){r=new Array(e);for(let s=0;s<e;s++)r[s]=n(s+1,s,void 0,i)}else if(Le(e))if(e[Symbol.iterator])r=Array.from(e,(s,c)=>n(s,c,void 0,i));else{const s=Object.keys(e);r=new Array(s.length);for(let c=0,d=s.length;c<d;c++){const u=s[c];r[c]=n(e[u],u,c,i)}}else r=[];return r}function hn(e,n,t,o,r,i){if(t==null&&(t={}),Xe.ce||Xe.parent&&It(Xe.parent)&&Xe.parent.ce){const d=t,u=Object.keys(d).length>0;return n!=="default"&&(d.name=n),z(),Ve(Re,null,[G("slot",d,o&&o())],u?-2:64)}let l=e[n];l&&l._c&&(l._d=!1);const s=Jn.length;z();let c;try{const d=l&&ys(l(t)),u=t.key||i||d&&d.key;c=Ve(Re,{key:(u&&!Cn(u)?u:`_${n}`)+(!d&&o?"_fb":"")},d||(o?o():[]),d&&e._===1?64:-2)}catch(d){for(let u=Jn.length;u>s;u--)Ma();throw d}finally{l&&l._c&&(l._d=!0)}return c.scopeId&&(c.slotScopeIds=[c.scopeId+"-s"]),c}function ys(e){return e.some(n=>fo(n)?!(n.type===tn||n.type===Re&&!ys(n.children)):!0)?e:null}function Lu(e,n){const t={};for(const o in e)t[ko(o)]=e[o];return t}const fa=e=>e?Fs(e)?pr(e):fa(e.parent):null,oo=Je(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>fa(e.parent),$root:e=>fa(e.root),$host:e=>e.ce,$emit:e=>e.emit,$options:e=>Ns(e),$forceUpdate:e=>e.f||(e.f=()=>{La(e.update)}),$nextTick:e=>e.n||(e.n=lr.bind(e.proxy)),$watch:e=>_u.bind(e)}),xr=(e,n)=>e!==Me&&!e.__isScriptSetup&&ke(e,n),ju={get({_:e},n){if(n==="__v_skip")return!0;const{ctx:t,setupState:o,data:r,props:i,accessCache:l,type:s,appContext:c}=e;if(n[0]!=="$"){const m=l[n];if(m!==void 0)switch(m){case 1:return o[n];case 2:return r[n];case 4:return t[n];case 3:return i[n]}else{if(xr(o,n))return l[n]=1,o[n];if(r!==Me&&ke(r,n))return l[n]=2,r[n];if(ke(i,n))return l[n]=3,i[n];if(t!==Me&&ke(t,n))return l[n]=4,t[n];pa&&(l[n]=0)}}const d=oo[n];let u,p;if(d)return n==="$attrs"&&nn(e.attrs,"get",""),d(e);if((u=s.__cssModules)&&(u=u[n]))return u;if(t!==Me&&ke(t,n))return l[n]=4,t[n];if(p=c.config.globalProperties,ke(p,n))return p[n]},set({_:e},n,t){const{data:o,setupState:r,ctx:i}=e;return xr(r,n)?(r[n]=t,!0):o!==Me&&ke(o,n)?(o[n]=t,!0):ke(e.props,n)||n[0]==="$"&&n.slice(1)in e?!1:(i[n]=t,!0)},has({_:{data:e,setupState:n,accessCache:t,ctx:o,appContext:r,props:i,type:l}},s){let c;return!!(t[s]||e!==Me&&s[0]!=="$"&&ke(e,s)||xr(n,s)||ke(i,s)||ke(o,s)||ke(oo,s)||ke(r.config.globalProperties,s)||(c=l.__cssModules)&&c[s])},defineProperty(e,n,t){return t.get!=null?e._.accessCache[n]=0:ke(t,"value")&&this.set(e,n,t.value,null),Reflect.defineProperty(e,n,t)}};function Xa(e){return ve(e)?e.reduce((n,t)=>(n[t]=null,n),{}):e}let pa=!0;function Du(e){const n=Ns(e),t=e.proxy,o=e.ctx;pa=!1,n.beforeCreate&&Za(n.beforeCreate,e,"bc");const{data:r,computed:i,methods:l,watch:s,provide:c,inject:d,created:u,beforeMount:p,mounted:m,beforeUpdate:g,updated:B,activated:N,deactivated:w,beforeDestroy:Q,beforeUnmount:q,destroyed:K,unmounted:C,render:U,renderTracked:re,renderTriggered:be,errorCaptured:Se,serverPrefetch:pe,expose:W,inheritAttrs:D,components:T,directives:Z,filters:oe}=n;if(d&&Mu(d,o,null),l)for(const Te in l){const Ne=l[Te];Ae(Ne)&&(o[Te]=Ne.bind(t))}if(r){const Te=r.call(t,t);Le(Te)&&(e.data=Ao(Te))}if(pa=!0,i)for(const Te in i){const Ne=i[Te],vn=Ae(Ne)?Ne.bind(t,t):Ae(Ne.get)?Ne.get.bind(t,t):$n,Ze=!Ae(Ne)&&Ae(Ne.set)?Ne.set.bind(t):$n,pn=De({get:vn,set:Ze});Object.defineProperty(o,Te,{enumerable:!0,configurable:!0,get:()=>pn.value,set:Ge=>pn.value=Ge})}if(s)for(const Te in s)As(s[Te],o,t,Te);if(c){const Te=Ae(c)?c.call(t):c;Reflect.ownKeys(Te).forEach(Ne=>{jo(Ne,Te[Ne])})}u&&Za(u,e,"c");function J(Te,Ne){ve(Ne)?Ne.forEach(vn=>Te(vn.bind(t))):Ne&&Te(Ne.bind(t))}if(J(Bu,p),J(ct,m),J(Su,g),J(wu,B),J(xu,N),J(Ru,w),J(Iu,Se),J(Ou,re),J(Cu,be),J(hs,q),J(vs,C),J(Eu,pe),ve(W))if(W.length){const Te=e.exposed||(e.exposed={});W.forEach(Ne=>{Object.defineProperty(Te,Ne,{get:()=>t[Ne],set:vn=>t[Ne]=vn,enumerable:!0})})}else e.exposed||(e.exposed={});U&&e.render===$n&&(e.render=U),D!=null&&(e.inheritAttrs=D),T&&(e.components=T),Z&&(e.directives=Z),pe&&ps(e)}function Mu(e,n,t=$n){ve(e)&&(e=ma(e));for(const o in e){const r=e[o];let i;Le(r)?"default"in r?i=Ye(r.from||o,r.default,!0):i=Ye(r.from||o):i=Ye(r),rn(i)?Object.defineProperty(n,o,{enumerable:!0,configurable:!0,get:()=>i.value,set:l=>i.value=l}):n[o]=i}}function Za(e,n,t){Tn(ve(e)?e.map(o=>o.bind(n.proxy)):e.bind(n.proxy),n,t)}function As(e,n,t,o){let r=o.includes(".")?is(t,o):()=>t[o];if(Fe(e)){const i=n[e];Ae(i)&&yt(r,i)}else if(Ae(e))yt(r,e.bind(t));else if(Le(e))if(ve(e))e.forEach(i=>As(i,n,t,o));else{const i=Ae(e.handler)?e.handler.bind(t):n[e.handler];Ae(i)&&yt(r,i,e)}}function Ns(e){const n=e.type,{mixins:t,extends:o}=n,{mixins:r,optionsCache:i,config:{optionMergeStrategies:l}}=e.appContext,s=i.get(n);let c;return s?c=s:!r.length&&!t&&!o?c=n:(c={},r.length&&r.forEach(d=>Uo(c,d,l,!0)),Uo(c,n,l)),Le(n)&&i.set(n,c),c}function Uo(e,n,t,o=!1){const{mixins:r,extends:i}=n;i&&Uo(e,i,t,!0),r&&r.forEach(l=>Uo(e,l,t,!0));for(const l in n)if(!(o&&l==="expose")){const s=qu[l]||t&&t[l];e[l]=s?s(e[l],n[l]):n[l]}return e}const qu={data:ei,props:ni,emits:ni,methods:Qt,computed:Qt,beforeCreate:an,created:an,beforeMount:an,mounted:an,beforeUpdate:an,updated:an,beforeDestroy:an,beforeUnmount:an,destroyed:an,unmounted:an,activated:an,deactivated:an,errorCaptured:an,serverPrefetch:an,components:Qt,directives:Qt,watch:Fu,provide:ei,inject:$u};function ei(e,n){return n?e?function(){return Je(Ae(e)?e.call(this,this):e,Ae(n)?n.call(this,this):n)}:n:e}function $u(e,n){return Qt(ma(e),ma(n))}function ma(e){if(ve(e)){const n={};for(let t=0;t<e.length;t++)n[e[t]]=e[t];return n}return e}function an(e,n){return e?[...new Set([].concat(e,n))]:n}function Qt(e,n){return e?Je(Object.create(null),e,n):n}function ni(e,n){return e?ve(e)&&ve(n)?[...new Set([...e,...n])]:Je(Object.create(null),Xa(e),Xa(n??{})):n}function Fu(e,n){if(!e)return n;if(!n)return e;const t=Je(Object.create(null),e);for(const o in n)t[o]=an(e[o],n[o]);return t}function xs(){return{app:null,config:{isNativeTag:El,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Vu=0;function zu(e,n){return function(o,r=null){Ae(o)||(o=Je({},o)),r!=null&&!Le(r)&&(r=null);const i=xs(),l=new WeakSet,s=[];let c=!1;const d=i.app={_uid:Vu++,_component:o,_props:r,_container:null,_context:i,_instance:null,version:bd,get config(){return i.config},set config(u){},use(u,...p){return l.has(u)||(u&&Ae(u.install)?(l.add(u),u.install(d,...p)):Ae(u)&&(l.add(u),u(d,...p))),d},mixin(u){return i.mixins.includes(u)||i.mixins.push(u),d},component(u,p){return p?(i.components[u]=p,d):i.components[u]},directive(u,p){return p?(i.directives[u]=p,d):i.directives[u]},mount(u,p,m){if(!c){const g=d._ceVNode||G(o,r);return g.appContext=i,m===!0?m="svg":m===!1&&(m=void 0),e(g,u,m),c=!0,d._container=u,u.__vue_app__=d,pr(g.component)}},onUnmount(u){s.push(u)},unmount(){c&&(Tn(s,d._instance,16),e(null,d._container),delete d._container.__vue_app__)},provide(u,p){return i.provides[u]=p,d},runWithContext(u){const p=Pt;Pt=d;try{return u()}finally{Pt=p}}};return d}}let Pt=null;const Uu=(e,n)=>n==="modelValue"||n==="model-value"?e.modelModifiers:e[`${n}Modifiers`]||e[`${dn(n)}Modifiers`]||e[`${Nt(n)}Modifiers`];function Hu(e,n,...t){if(e.isUnmounted)return;const o=e.vnode.props||Me;let r=t;const i=n.startsWith("update:"),l=i&&Uu(o,n.slice(7));l&&(l.trim&&(r=t.map(u=>Fe(u)?u.trim():u)),l.number&&(r=t.map(tr)));let s,c=o[s=ko(n)]||o[s=ko(dn(n))];!c&&i&&(c=o[s=ko(Nt(n))]),c&&Tn(c,e,6,r);const d=o[s+"Once"];if(d){if(!e.emitted)e.emitted={};else if(e.emitted[s])return;e.emitted[s]=!0,Tn(d,e,6,r)}}const Ku=new WeakMap;function Rs(e,n,t=!1){const o=t?Ku:n.emitsCache,r=o.get(e);if(r!==void 0)return r;const i=e.emits;let l={},s=!1;if(!Ae(e)){const c=d=>{const u=Rs(d,n,!0);u&&(s=!0,Je(l,u))};!t&&n.mixins.length&&n.mixins.forEach(c),e.extends&&c(e.extends),e.mixins&&e.mixins.forEach(c)}return!i&&!s?(Le(e)&&o.set(e,null),null):(ve(i)?i.forEach(c=>l[c]=null):Je(l,i),Le(e)&&o.set(e,l),l)}function dr(e,n){return!e||!Xo(n)?!1:(n=n.slice(2),n=n==="Once"?n:n.replace(/Once$/,""),ke(e,n[0].toLowerCase()+n.slice(1))||ke(e,Nt(n))||ke(e,n))}function ti(e){const{type:n,vnode:t,proxy:o,withProxy:r,propsOptions:[i],slots:l,attrs:s,emit:c,render:d,renderCache:u,props:p,data:m,setupState:g,ctx:B,inheritAttrs:N}=e,w=Fo(e);let Q,q;try{if(t.shapeFlag&4){const C=r||o,U=C;Q=Dn(d.call(U,C,u,p,g,m,B)),q=s}else{const C=n;Q=Dn(C.length>1?C(p,{attrs:s,slots:l,emit:c}):C(p,null)),q=n.props?s:Gu(s)}}catch(C){Jn.length=0,ir(C,e,1),Q=G(tn)}let K=Q;if(q&&N!==!1){const C=Object.keys(q),{shapeFlag:U}=K;C.length&&U&7&&(i&&C.some(Zo)&&(q=Yu(q,i)),K=st(K,q,!1,!0))}if(t.dirs&&(K=st(K,null,!1,!0),K.dirs=K.dirs?K.dirs.concat(t.dirs):t.dirs),t.transition){const C=sr(K.type)&&Vo(K)||K;co(C,t.transition)}return Q=K,Fo(w),Q}const Gu=e=>{let n;for(const t in e)(t==="class"||t==="style"||Xo(t))&&((n||(n={}))[t]=e[t]);return n},Yu=(e,n)=>{const t={};for(const o in e)(!Zo(o)||!(o.slice(9)in n))&&(t[o]=e[o]);return t};function Wu(e,n,t){const{props:o,children:r,component:i}=e,{props:l,children:s,patchFlag:c}=n,d=i.emitsOptions;if(n.dirs||n.transition)return!0;if(t&&c>=0){if(c&1024)return!0;if(c&16)return o?oi(o,l,d):!!l;if(c&8){const u=n.dynamicProps;for(let p=0;p<u.length;p++){const m=u[p];if(Ts(l,o,m)&&!dr(d,m))return!0}}}else return(r||s)&&(!s||!s.$stable)?!0:o===l?!1:o?l?oi(o,l,d):!0:!!l;return!1}function oi(e,n,t){const o=Object.keys(n);if(o.length!==Object.keys(e).length)return!0;for(let r=0;r<o.length;r++){const i=o[r];if(Ts(n,e,i)&&!dr(t,i))return!0}return!1}function Ts(e,n,t){const o=e[t],r=n[t];return t==="style"&&Le(o)&&Le(r)?!Vt(o,r):o!==r}function Ju({vnode:e,parent:n,suspense:t},o){for(;n;){const r=n.subTree;if(r.suspense&&r.suspense.activeBranch===e&&(r.suspense.vnode.el=r.el=o,e=r),r===e)(e=n.vnode).el=o,n=n.parent;else break}t&&t.activeBranch===e&&(t.vnode.el=o)}const Bs={},Ss=()=>Object.create(Bs),ws=e=>Object.getPrototypeOf(e)===Bs;function Qu(e,n,t,o=!1){const r={},i=Ss();e.propsDefaults=Object.create(null),Es(e,n,r,i);for(const l in e.propsOptions[0])l in r||(r[l]=void 0);t?e.props=o?r:Ql(r):e.type.props?e.props=r:e.props=i,e.attrs=i}function Xu(e,n,t,o){const{props:r,attrs:i,vnode:{patchFlag:l}}=e,s=Oe(r),[c]=e.propsOptions;let d=!1;if((o||l>0)&&!(l&16)){if(l&8){const u=e.vnode.dynamicProps;for(let p=0;p<u.length;p++){let m=u[p];if(dr(e.emitsOptions,m))continue;const g=n[m];if(c)if(ke(i,m))g!==i[m]&&(i[m]=g,d=!0);else{const B=dn(m);r[B]=ha(c,s,B,g,e,!1)}else g!==i[m]&&(i[m]=g,d=!0)}}}else{Es(e,n,r,i)&&(d=!0);let u;for(const p in s)(!n||!ke(n,p)&&((u=Nt(p))===p||!ke(n,u)))&&(c?t&&(t[p]!==void 0||t[u]!==void 0)&&(r[p]=ha(c,s,p,void 0,e,!0)):delete r[p]);if(i!==s)for(const p in i)(!n||!ke(n,p))&&(delete i[p],d=!0)}d&&Yn(e.attrs,"set","")}function Es(e,n,t,o){const[r,i]=e.propsOptions;let l=!1,s;if(n)for(let c in n){if(Zt(c))continue;const d=n[c];let u;r&&ke(r,u=dn(c))?!i||!i.includes(u)?t[u]=d:(s||(s={}))[u]=d:dr(e.emitsOptions,c)||(!(c in o)||d!==o[c])&&(o[c]=d,l=!0)}if(i){const c=Oe(t),d=s||Me;for(let u=0;u<i.length;u++){const p=i[u];t[p]=ha(r,c,p,d[p],e,!ke(d,p))}}return l}function ha(e,n,t,o,r,i){const l=e[t];if(l!=null){const s=ke(l,"default");if(s&&o===void 0){const c=l.default;if(l.type!==Function&&!l.skipFactory&&Ae(c)){const{propsDefaults:d}=r;if(t in d)o=d[t];else{const u=xo(r);o=d[t]=c.call(null,n),u()}}else o=c;r.ce&&r.ce._setProp(t,o)}l[0]&&(i&&!s?o=!1:l[1]&&(o===""||o===Nt(t))&&(o=!0))}return o}const Zu=new WeakMap;function Cs(e,n,t=!1){const o=t?Zu:n.propsCache,r=o.get(e);if(r)return r;const i=e.props,l={},s=[];let c=!1;if(!Ae(e)){const u=p=>{c=!0;const[m,g]=Cs(p,n,!0);Je(l,m),g&&s.push(...g)};!t&&n.mixins.length&&n.mixins.forEach(u),e.extends&&u(e.extends),e.mixins&&e.mixins.forEach(u)}if(!i&&!c)return Le(e)&&o.set(e,Et),Et;if(ve(i))for(let u=0;u<i.length;u++){const p=dn(i[u]);ri(p)&&(l[p]=Me)}else if(i)for(const u in i){const p=dn(u);if(ri(p)){const m=i[u],g=l[p]=ve(m)||Ae(m)?{type:m}:Je({},m),B=g.type;let N=!1,w=!0;if(ve(B))for(let Q=0;Q<B.length;++Q){const q=B[Q],K=Ae(q)&&q.name;if(K==="Boolean"){N=!0;break}else K==="String"&&(w=!1)}else N=Ae(B)&&B.name==="Boolean";g[0]=N,g[1]=w,(N||ke(g,"default"))&&s.push(p)}}const d=[l,s];return Le(e)&&o.set(e,d),d}function ri(e){return e[0]!=="$"&&!Zt(e)}const ja=e=>e==="_"||e==="_ctx"||e==="$stable",Da=e=>ve(e)?e.map(Dn):[Dn(e)],ed=(e,n,t)=>{if(n._n)return n;const o=_e((...r)=>Da(n(...r)),t);return o._c=!1,o},Os=(e,n,t)=>{const o=e._ctx;for(const r in e){if(ja(r))continue;const i=e[r];if(Ae(i))n[r]=ed(r,i,o);else if(i!=null){const l=Da(i);n[r]=()=>l}}},Is=(e,n)=>{const t=Da(n);e.slots.default=()=>t},Ps=(e,n,t)=>{for(const o in n)(t||!ja(o))&&(e[o]=n[o])},nd=(e,n,t)=>{const o=e.slots=Ss();if(e.vnode.shapeFlag&32){const r=n._;r?(Ps(o,n,t),t&&Pl(o,"_",r,!0)):Os(n,o)}else n&&Is(e,n)},td=(e,n,t)=>{const{vnode:o,slots:r}=e;let i=!0,l=Me;if(o.shapeFlag&32){const s=n._;s?t&&s===1?i=!1:Ps(r,n,t):(i=!n.$stable,Os(n,r)),l=n}else n&&(Is(e,n),l={default:1});if(i)for(const s in r)!ja(s)&&l[s]==null&&delete r[s]},mn=ld;function od(e){return rd(e)}function rd(e,n){const t=or();t.__VUE__=!0;const{insert:o,remove:r,patchProp:i,createElement:l,createText:s,createComment:c,setText:d,setElementText:u,parentNode:p,nextSibling:m,setScopeId:g=$n,insertStaticContent:B}=e,N=(h,v,b,I=null,L=null,S=null,ee=void 0,X=null,Y=!!v.dynamicChildren)=>{if(h===v)return;h&&!vt(h,v)&&(I=O(h),Ge(h,L,S,!0),h=null),v.patchFlag===-2&&(Y=!1,v.dynamicChildren=null);const{type:M,ref:me,shapeFlag:ne}=v;switch(M){case fr:w(h,v,b,I);break;case tn:Q(h,v,b,I);break;case Do:h==null&&q(v,b,I,ee);break;case Re:T(h,v,b,I,L,S,ee,X,Y);break;default:ne&1?U(h,v,b,I,L,S,ee,X,Y):ne&6?Z(h,v,b,I,L,S,ee,X,Y):(ne&64||ne&128)&&M.process(h,v,b,I,L,S,ee,X,Y,ce)}me!=null&&L?to(me,h&&h.ref,S,v||h,!v):me==null&&h&&h.ref!=null&&to(h.ref,null,S,h,!0)},w=(h,v,b,I)=>{if(h==null)o(v.el=s(v.children),b,I);else{const L=v.el=h.el;v.children!==h.children&&d(L,v.children)}},Q=(h,v,b,I)=>{h==null?o(v.el=c(v.children||""),b,I):v.el=h.el},q=(h,v,b,I)=>{[h.el,h.anchor]=B(h.children,v,b,I,h.el,h.anchor)},K=({el:h,anchor:v},b,I)=>{let L;for(;h&&h!==v;)L=m(h),o(h,b,I),h=L;o(v,b,I)},C=({el:h,anchor:v})=>{let b;for(;h&&h!==v;)b=m(h),r(h),h=b;r(v)},U=(h,v,b,I,L,S,ee,X,Y)=>{if(v.type==="svg"?ee="svg":v.type==="math"&&(ee="mathml"),h==null)re(v,b,I,L,S,ee,X,Y);else{const M=h.el&&h.el._isVueCE?h.el:null;try{M&&M._beginPatch(),pe(h,v,L,S,ee,X,Y)}finally{M&&M._endPatch()}}},re=(h,v,b,I,L,S,ee,X)=>{let Y,M;const{props:me,shapeFlag:ne,transition:de,dirs:ge}=h;if(Y=h.el=l(h.type,S,me&&me.is,me),ne&8?u(Y,h.children):ne&16&&Se(h.children,Y,null,I,L,Rr(h,S),ee,X),ge&&ut(h,null,I,"created"),be(Y,h,h.scopeId,ee,I),me){for(const Ce in me)Ce!=="value"&&!Zt(Ce)&&i(Y,Ce,null,me[Ce],S,I);"value"in me&&i(Y,"value",null,me.value,S),(M=me.onVnodeBeforeMount)&&kn(M,I,h)}ge&&ut(h,null,I,"beforeMount");const Be=ad(L,de);Be&&de.beforeEnter(Y),o(Y,v,b),((M=me&&me.onVnodeMounted)||Be||ge)&&mn(()=>{M&&kn(M,I,h),Be&&de.enter(Y),ge&&ut(h,null,I,"mounted")},L)},be=(h,v,b,I,L)=>{if(b&&g(h,b),I)for(let S=0;S<I.length;S++)g(h,I[S]);if(L){let S=L.subTree;if(v===S||Ds(S.type)&&(S.ssContent===v||S.ssFallback===v)){const ee=L.vnode;be(h,ee,ee.scopeId,ee.slotScopeIds,L.parent)}}},Se=(h,v,b,I,L,S,ee,X,Y=0)=>{for(let M=Y;M<h.length;M++){const me=h[M]=X?Gn(h[M]):Dn(h[M]);N(null,me,v,b,I,L,S,ee,X)}},pe=(h,v,b,I,L,S,ee)=>{const X=v.el=h.el;let{patchFlag:Y,dynamicChildren:M,dirs:me}=v;Y|=h.patchFlag&16;const ne=h.props||Me,de=v.props||Me;let ge;if(b&&dt(b,!1),(ge=de.onVnodeBeforeUpdate)&&kn(ge,b,v,h),me&&ut(v,h,b,"beforeUpdate"),b&&dt(b,!0),M&&(!h.dynamicChildren||h.dynamicChildren.length!==M.length)&&(Y=0,ee=!1,M=null),(ne.innerHTML&&de.innerHTML==null||ne.textContent&&de.textContent==null)&&u(X,""),M?W(h.dynamicChildren,M,X,b,I,Rr(v,L),S):ee||Ne(h,v,X,null,b,I,Rr(v,L),S,!1),Y>0){if(Y&16)D(X,ne,de,b,L);else if(Y&2&&ne.class!==de.class&&i(X,"class",null,de.class,L),Y&4&&i(X,"style",ne.style,de.style,L),Y&8){const Be=v.dynamicProps;for(let Ce=0;Ce<Be.length;Ce++){const a=Be[Ce],_=ne[a],R=de[a];(R!==_||a==="value")&&i(X,a,_,R,L,b)}}Y&1&&h.children!==v.children&&u(X,v.children)}else!ee&&M==null&&D(X,ne,de,b,L);((ge=de.onVnodeUpdated)||me)&&mn(()=>{ge&&kn(ge,b,v,h),me&&ut(v,h,b,"updated")},I)},W=(h,v,b,I,L,S,ee)=>{for(let X=0;X<v.length;X++){const Y=h[X],M=v[X],me=Y.el&&(Y.type===Re||!vt(Y,M)||Y.shapeFlag&198)?p(Y.el):b;N(Y,M,me,null,I,L,S,ee,!0)}},D=(h,v,b,I,L)=>{if(v!==b){if(v!==Me)for(const S in v)!Zt(S)&&!(S in b)&&i(h,S,v[S],null,L,I);for(const S in b){if(Zt(S))continue;const ee=b[S],X=v[S];ee!==X&&S!=="value"&&i(h,S,X,ee,L,I)}"value"in b&&i(h,"value",v.value,b.value,L)}},T=(h,v,b,I,L,S,ee,X,Y)=>{const M=v.el=h?h.el:s(""),me=v.anchor=h?h.anchor:s("");let{patchFlag:ne,dynamicChildren:de,slotScopeIds:ge}=v;ge&&(X=X?X.concat(ge):ge),h==null?(o(M,b,I),o(me,b,I),Se(v.children||[],b,me,L,S,ee,X,Y)):ne>0&&ne&64&&de&&h.dynamicChildren&&h.dynamicChildren.length===de.length?(W(h.dynamicChildren,de,b,L,S,ee,X),(v.key!=null||L&&v===L.subTree)&&ks(h,v,!0)):Ne(h,v,b,me,L,S,ee,X,Y)},Z=(h,v,b,I,L,S,ee,X,Y)=>{v.slotScopeIds=X,h==null?v.shapeFlag&512?L.ctx.activate(v,b,I,ee,Y):oe(v,b,I,L,S,ee,Y):Ke(h,v,Y)},oe=(h,v,b,I,L,S,ee)=>{const X=h.component=fd(h,I,L);if(cr(h)&&(X.ctx.renderer=ce),pd(X,!1,ee),X.asyncDep){if(L&&L.registerDep(X,J,ee),!h.el){const Y=X.subTree=G(tn);Q(null,Y,v,b),h.placeholder=Y.el}}else J(X,h,v,b,L,S,ee)},Ke=(h,v,b)=>{const I=v.component=h.component;if(Wu(h,v,b))if(I.asyncDep&&!I.asyncResolved){Te(I,v,b);return}else I.next=v,I.update();else v.el=h.el,I.vnode=v},J=(h,v,b,I,L,S,ee)=>{const X=()=>{if(h.isMounted){let{next:ne,bu:de,u:ge,parent:Be,vnode:Ce}=h;{const x=Ls(h);if(x){ne&&(ne.el=Ce.el,Te(h,ne,ee)),x.asyncDep.then(()=>{mn(()=>{h.isUnmounted||M()},L)});return}}let a=ne,_;dt(h,!1),ne?(ne.el=Ce.el,Te(h,ne,ee)):ne=Ce,de&&Lo(de),(_=ne.props&&ne.props.onVnodeBeforeUpdate)&&kn(_,Be,ne,Ce),dt(h,!0);const R=ti(h),E=h.subTree;h.subTree=R,N(E,R,p(E.el),O(E),h,L,S),ne.el=R.el,a===null&&Ju(h,R.el),ge&&mn(ge,L),(_=ne.props&&ne.props.onVnodeUpdated)&&mn(()=>kn(_,Be,ne,Ce),L)}else{let ne;const{el:de,props:ge}=v,{bm:Be,m:Ce,parent:a,root:_,type:R}=h,E=It(v);dt(h,!1),Be&&Lo(Be),!E&&(ne=ge&&ge.onVnodeBeforeMount)&&kn(ne,a,v),dt(h,!0);{_.ce&&_.ce._hasShadowRoot()&&_.ce._injectChildStyle(R,h.parent?h.parent.type:void 0);const x=h.subTree=ti(h);N(null,x,b,I,h,L,S),v.el=x.el}if(Ce&&mn(Ce,L),!E&&(ne=ge&&ge.onVnodeMounted)){const x=v;mn(()=>kn(ne,a,x),L)}(v.shapeFlag&256||a&&It(a.vnode)&&a.vnode.shapeFlag&256)&&h.a&&mn(h.a,L),h.isMounted=!0,v=b=I=null}};h.scope.on();const Y=h.effect=new Dl(X);h.scope.off();const M=h.update=Y.run.bind(Y),me=h.job=Y.runIfDirty.bind(Y);me.i=h,me.id=h.uid,Y.scheduler=()=>La(me),dt(h,!0),M()},Te=(h,v,b)=>{v.component=h;const I=h.vnode.props;h.vnode=v,h.next=null,Xu(h,v.props,I,b),td(h,v.children,b),Qn(),Ya(h),Xn()},Ne=(h,v,b,I,L,S,ee,X,Y=!1)=>{const M=h&&h.children,me=h?h.shapeFlag:0,ne=v.children,{patchFlag:de,shapeFlag:ge}=v;if(de>0){if(de&128){Ze(M,ne,b,I,L,S,ee,X,Y);return}else if(de&256){vn(M,ne,b,I,L,S,ee,X,Y);return}}ge&8?(me&16&&He(M,L,S),ne!==M&&u(b,ne)):me&16?ge&16?Ze(M,ne,b,I,L,S,ee,X,Y):He(M,L,S,!0):(me&8&&u(b,""),ge&16&&Se(ne,b,I,L,S,ee,X,Y))},vn=(h,v,b,I,L,S,ee,X,Y)=>{h=h||Et,v=v||Et;const M=h.length,me=v.length,ne=Math.min(M,me);let de;for(de=0;de<ne;de++){const ge=v[de]=Y?Gn(v[de]):Dn(v[de]);N(h[de],ge,b,null,L,S,ee,X,Y)}M>me?He(h,L,S,!0,!1,ne):Se(v,b,I,L,S,ee,X,Y,ne)},Ze=(h,v,b,I,L,S,ee,X,Y)=>{let M=0;const me=v.length;let ne=h.length-1,de=me-1;for(;M<=ne&&M<=de;){const ge=h[M],Be=v[M]=Y?Gn(v[M]):Dn(v[M]);if(vt(ge,Be))N(ge,Be,b,null,L,S,ee,X,Y);else break;M++}for(;M<=ne&&M<=de;){const ge=h[ne],Be=v[de]=Y?Gn(v[de]):Dn(v[de]);if(vt(ge,Be))N(ge,Be,b,null,L,S,ee,X,Y);else break;ne--,de--}if(M>ne){if(M<=de){const ge=de+1,Be=ge<me?v[ge].el:I;for(;M<=de;)N(null,v[M]=Y?Gn(v[M]):Dn(v[M]),b,Be,L,S,ee,X,Y),M++}}else if(M>de)for(;M<=ne;)Ge(h[M],L,S,!0),M++;else{const ge=M,Be=M,Ce=new Map;for(M=Be;M<=de;M++){const y=v[M]=Y?Gn(v[M]):Dn(v[M]);y.key!=null&&Ce.set(y.key,M)}let a,_=0;const R=de-Be+1;let E=!1,x=0;const F=new Array(R);for(M=0;M<R;M++)F[M]=0;for(M=ge;M<=ne;M++){const y=h[M];if(_>=R){Ge(y,L,S,!0);continue}let j;if(y.key!=null)j=Ce.get(y.key);else for(a=Be;a<=de;a++)if(F[a-Be]===0&&vt(y,v[a])){j=a;break}j===void 0?Ge(y,L,S,!0):(F[j-Be]=M+1,j>=x?x=j:E=!0,N(y,v[j],b,null,L,S,ee,X,Y),_++)}const f=E?id(F):Et;for(a=f.length-1,M=R-1;M>=0;M--){const y=Be+M,j=v[y],P=v[y+1],k=y+1<me?P.el||js(P):I;F[M]===0?N(null,j,b,k,L,S,ee,X,Y):E&&(a<0||M!==f[a]?pn(j,b,k,2):a--)}}},pn=(h,v,b,I,L=null)=>{const{el:S,type:ee,transition:X,children:Y,shapeFlag:M}=h;if(M&6){pn(h.component.subTree,v,b,I);return}if(M&128){h.suspense.move(v,b,I);return}if(M&64){ee.move(h,v,b,ce);return}if(ee===Re){o(S,v,b);for(let ne=0;ne<Y.length;ne++)pn(Y[ne],v,b,I);o(h.anchor,v,b);return}if(ee===Do){K(h,v,b);return}if(I!==2&&M&1&&X)if(I===0)X.persisted&&!S[yn]?o(S,v,b):(X.beforeEnter(S),o(S,v,b),mn(()=>X.enter(S),L));else{const{leave:ne,delayLeave:de,afterLeave:ge}=X,Be=()=>{h.ctx.isUnmounted?r(S):o(S,v,b)},Ce=()=>{const a=S._isLeaving||!!S[yn];S._isLeaving&&S[yn](!0),X.persisted&&!a?Be():ne(S,()=>{Be(),ge&&ge()})};de?de(S,Be,Ce):Ce()}else o(S,v,b)},Ge=(h,v,b,I=!1,L=!1)=>{const{type:S,props:ee,ref:X,children:Y,dynamicChildren:M,shapeFlag:me,patchFlag:ne,dirs:de,cacheIndex:ge,memo:Be}=h;if(ne===-2&&(L=!1),X!=null&&(Qn(),to(X,null,b,h,!0),Xn()),ge!=null&&(v.renderCache[ge]=void 0),me&256){v.ctx.deactivate(h);return}const Ce=me&1&&de,a=!It(h);let _;if(a&&(_=ee&&ee.onVnodeBeforeUnmount)&&kn(_,v,h),me&6)Ue(h.component,b,I);else{if(me&128){h.suspense.unmount(b,I);return}Ce&&ut(h,null,v,"beforeUnmount"),me&64?h.type.remove(h,v,b,ce,I):M&&!M.hasOnce&&(S!==Re||ne>0&&ne&64)?He(M,v,b,!1,!0):(S===Re&&ne&384||!L&&me&16)&&He(Y,v,b),I&&gn(h)}const R=Be!=null&&ge==null;(a&&(_=ee&&ee.onVnodeUnmounted)||Ce||R)&&mn(()=>{_&&kn(_,v,h),Ce&&ut(h,null,v,"unmounted"),R&&(h.el=null)},b)},gn=h=>{const{type:v,el:b,anchor:I,transition:L}=h;if(v===Re){Bn(b,I);return}if(v===Do){C(h);return}const S=()=>{r(b),L&&!L.persisted&&L.afterLeave&&L.afterLeave()};if(h.shapeFlag&1&&L&&!L.persisted){const{leave:ee,delayLeave:X}=L,Y=()=>ee(b,S);X?X(h.el,S,Y):Y()}else S()},Bn=(h,v)=>{let b;for(;h!==v;)b=m(h),r(h),h=b;r(v)},Ue=(h,v,b)=>{const{bum:I,scope:L,job:S,subTree:ee,um:X,m:Y,a:M}=h;ai(Y),ai(M),I&&Lo(I),L.stop(),S&&(S.flags|=8,Ge(ee,h,v,b)),X&&mn(X,v),mn(()=>{h.isUnmounted=!0},v)},He=(h,v,b,I=!1,L=!1,S=0)=>{for(let ee=S;ee<h.length;ee++)Ge(h[ee],v,b,I,L)},O=h=>{if(h.shapeFlag&6)return O(h.component.subTree);if(h.shapeFlag&128)return h.suspense.next();const v=m(h.anchor||h.el),b=v&&v[bu];return b?m(b):v};let ie=!1;const H=(h,v,b)=>{let I;h==null?v._vnode&&(Ge(v._vnode,null,null,!0),I=v._vnode.component):N(v._vnode||null,h,v,null,null,null,b),v._vnode=h,ie||(ie=!0,Ya(I),ts(),ie=!1)},ce={p:N,um:Ge,m:pn,r:gn,mt:oe,mc:Se,pc:Ne,pbc:W,n:O,o:e};return{render:H,hydrate:void 0,createApp:zu(H)}}function Rr({type:e,props:n},t){return t==="svg"&&e==="foreignObject"||t==="mathml"&&e==="annotation-xml"&&n&&n.encoding&&n.encoding.includes("html")?void 0:t}function dt({effect:e,job:n},t){t?(e.flags|=32,n.flags|=4):(e.flags&=-33,n.flags&=-5)}function ad(e,n){return(!e||e&&!e.pendingBranch)&&n&&!n.persisted}function ks(e,n,t=!1){const o=e.children,r=n.children;if(ve(o)&&ve(r))for(let i=0;i<o.length;i++){const l=o[i];let s=r[i];s.shapeFlag&1&&!s.dynamicChildren&&((s.patchFlag<=0||s.patchFlag===32)&&(s=r[i]=Gn(r[i]),s.el=l.el),!t&&s.patchFlag!==-2&&ks(l,s)),s.type===fr&&(s.patchFlag===-1&&(s=r[i]=Gn(s)),s.el=l.el),s.type===tn&&!s.el&&(s.el=l.el)}}function id(e){const n=e.slice(),t=[0];let o,r,i,l,s;const c=e.length;for(o=0;o<c;o++){const d=e[o];if(d!==0){if(r=t[t.length-1],e[r]<d){n[o]=r,t.push(o);continue}for(i=0,l=t.length-1;i<l;)s=i+l>>1,e[t[s]]<d?i=s+1:l=s;d<e[t[i]]&&(i>0&&(n[o]=t[i-1]),t[i]=o)}}for(i=t.length,l=t[i-1];i-- >0;)t[i]=l,l=n[l];return t}function Ls(e){const n=e.subTree.component;if(n)return n.asyncDep&&!n.asyncResolved?n:Ls(n)}function ai(e){if(e)for(let n=0;n<e.length;n++)e[n].flags|=8}function js(e){if(e.placeholder)return e.placeholder;const n=e.component;return n?js(n.subTree):null}const Ds=e=>e.__isSuspense;function ld(e,n){n&&n.pendingBranch?ve(e)?n.effects.push(...e):n.effects.push(e):hu(e)}const Re=Symbol.for("v-fgt"),fr=Symbol.for("v-txt"),tn=Symbol.for("v-cmt"),Do=Symbol.for("v-stc"),Jn=[];let _n=null;function z(e=!1){Jn.push(_n=e?null:[])}function Ma(){Jn.pop(),_n=Jn[Jn.length-1]||null}let uo=1;function Ho(e,n=!1){uo+=e,e<0&&_n&&n&&(_n.hasOnce=!0)}function Ms(e){return e.dynamicChildren=uo>0?_n||Et:null,Ma(),uo>0&&_n&&_n.push(e),e}function te(e,n,t,o,r,i){return Ms(A(e,n,t,o,r,i,!0))}function Ve(e,n,t,o,r){return Ms(G(e,n,t,o,r,!0))}function fo(e){return e?e.__v_isVNode===!0:!1}function vt(e,n){return e.type===n.type&&e.key===n.key}const qs=({key:e})=>e??null,Mo=({ref:e,ref_key:n,ref_for:t})=>(typeof e=="number"&&(e=""+e),e!=null?Fe(e)||rn(e)||Ae(e)?{i:Xe,r:e,k:n,f:!!t}:e:null);function A(e,n=null,t=null,o=0,r=null,i=e===Re?0:1,l=!1,s=!1){const c={__v_isVNode:!0,__v_skip:!0,type:e,props:n,key:n&&qs(n),ref:n&&Mo(n),scopeId:rs,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:o,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:Xe};return s?(Ko(c,t),i&128&&e.normalize(c)):t&&(c.shapeFlag|=Fe(t)?8:16),uo>0&&!l&&_n&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&_n.push(c),c}const G=sd;function sd(e,n=null,t=null,o=0,r=null,i=!1){if((!e||e===_s)&&(e=tn),fo(e)){const s=st(e,n,!0);return t&&Ko(s,t),uo>0&&!i&&_n&&(s.shapeFlag&6?_n[_n.indexOf(e)]=s:_n.push(s)),s.patchFlag=-2,s}if(_d(e)&&(e=e.__vccOpts),n){n=wn(n);let{class:s,style:c}=n;s&&!Fe(s)&&(n.class=cn(s)),Le(c)&&(ka(c)&&!ve(c)&&(c=Je({},c)),n.style=rr(c))}const l=Fe(e)?1:Ds(e)?128:sr(e)?64:Le(e)?4:Ae(e)?2:0;return A(e,n,t,o,r,l,i,!0)}function wn(e){return e?ka(e)||ws(e)?Je({},e):e:null}function st(e,n,t=!1,o=!1){const{props:r,ref:i,patchFlag:l,children:s,transition:c}=e,d=n?va(r||{},n):r,u={__v_isVNode:!0,__v_skip:!0,type:e.type,props:d,key:d&&qs(d),ref:n&&n.ref?t&&i?ve(i)?i.concat(Mo(n)):[i,Mo(n)]:Mo(n):i,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:s,target:e.target,targetStart:e.targetStart,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:n&&e.type!==Re?l===-1?16:l|16:l,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:c,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&st(e.ssContent),ssFallback:e.ssFallback&&st(e.ssFallback),placeholder:e.placeholder,el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return c&&o&&co(u,c.clone(u)),u}function xe(e=" ",n=0){return G(fr,null,e,n)}function cd(e,n){const t=G(Do,null,e);return t.staticCount=n,t}function Ie(e="",n=!1){return n?(z(),Ve(tn,null,e)):G(tn,null,e)}function Dn(e){return e==null||typeof e=="boolean"?G(tn):ve(e)?G(Re,null,e.slice()):fo(e)?Gn(e):G(fr,null,String(e))}function Gn(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:st(e)}function Ko(e,n){let t=0;const{shapeFlag:o}=e;if(n==null)n=null;else if(ve(n))t=16;else if(typeof n=="object")if(o&65){const r=n.default;r&&(r._c&&(r._d=!1),Ko(e,r()),r._c&&(r._d=!0));return}else{t=32;const r=n._;!r&&!ws(n)?n._ctx=Xe:r===3&&Xe&&(Xe.slots._===1?n._=1:(n._=2,e.patchFlag|=1024))}else if(Ae(n)){if(o&65){Ko(e,{default:n});return}n={default:n,_ctx:Xe},t=32}else n=String(n),o&64?(t=16,n=[xe(n)]):t=8;e.children=n,e.shapeFlag|=t}function va(...e){const n={};for(let t=0;t<e.length;t++){const o=e[t];for(const r in o)if(r==="class")n.class!==o.class&&(n.class=cn([n.class,o.class]));else if(r==="style")n.style=rr([n.style,o.style]);else if(Xo(r)){const i=n[r],l=o[r];l&&i!==l&&!(ve(i)&&i.includes(l))?n[r]=i?[].concat(i,l):l:l==null&&i==null&&!Zo(r)&&(n[r]=l)}else r!==""&&(n[r]=o[r])}return n}function kn(e,n,t,o=null){Tn(e,n,7,[t,o])}const ud=xs();let dd=0;function fd(e,n,t){const o=e.type,r=(n?n.appContext:e.appContext)||ud,i={uid:dd++,vnode:e,type:o,parent:n,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new $c(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:n?n.provides:Object.create(r.provides),ids:n?n.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Cs(o,r),emitsOptions:Rs(o,r),emit:null,emitted:null,propsDefaults:Me,inheritAttrs:o.inheritAttrs,ctx:Me,data:Me,props:Me,attrs:Me,slots:Me,refs:Me,setupState:Me,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=n?n.root:i,i.emit=Hu.bind(null,i),e.ce&&e.ce(i),i}let on=null;const $s=()=>on||Xe;let Go,po;{const e=or(),n=(t,o)=>{let r;return(r=e[t])||(r=e[t]=[]),r.push(o),i=>{r.length>1?r.forEach(l=>l(i)):r[0](i)}};Go=n("__VUE_INSTANCE_SETTERS__",t=>on=t),po=n("__VUE_SSR_SETTERS__",t=>mo=t)}const xo=e=>{const n=on;return Go(e),e.scope.on(),()=>{e.scope.off(),Go(n)}},ii=()=>{on&&on.scope.off(),Go(null)};function Fs(e){return e.vnode.shapeFlag&4}let mo=!1;function pd(e,n=!1,t=!1){n&&po(n);const{props:o,children:r}=e.vnode,i=Fs(e);Qu(e,o,i,n),nd(e,r,t||n);const l=i?md(e,n):void 0;return n&&po(!1),l}function md(e,n){const t=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,ju);const{setup:o}=t;if(o){Qn();const r=e.setupContext=o.length>1?vd(e):null,i=xo(e),l=No(o,e,0,[e.props,r]),s=Cl(l);if(Xn(),i(),(s||e.sp)&&!It(e)&&ps(e),s){if(l.then(ii,ii),n)return l.then(c=>{po(!0);try{li(e,c,n)}finally{po(!1)}}).catch(c=>{ir(c,e,0)});e.asyncDep=l}else li(e,l)}else Vs(e)}function li(e,n,t){Ae(n)?e.type.__ssrInlineRender?e.ssrRender=n:e.render=n:Le(n)&&(e.setupState=Zl(n)),Vs(e)}function Vs(e,n,t){const o=e.type;e.render||(e.render=o.render||$n);{const r=xo(e);Qn();try{Du(e)}finally{Xn(),r()}}}const hd={get(e,n){return nn(e,"get",""),e[n]}};function vd(e){const n=t=>{e.exposed=t||{}};return{attrs:new Proxy(e.attrs,hd),slots:e.slots,emit:e.emit,expose:n}}function pr(e){return e.exposed?e.exposeProxy||(e.exposeProxy=new Proxy(Zl(au(e.exposed)),{get(n,t){if(t in n)return n[t];if(t in oo)return oo[t](e)},has(n,t){return t in n||t in oo}})):e.proxy}function gd(e,n=!0){return Ae(e)?e.displayName||e.name:e.name||n&&e.__name}function _d(e){return Ae(e)&&"__vccOpts"in e}const De=(e,n)=>uu(e,n,mo);function jt(e,n,t){try{Ho(-1);const o=arguments.length;return o===2?Le(n)&&!ve(n)?fo(n)?G(e,null,[n]):G(e,n):G(e,null,n):(o>3?t=Array.prototype.slice.call(arguments,2):o===3&&fo(t)&&(t=[t]),G(e,n,t))}finally{Ho(1)}}const bd="3.5.41";let ga;const si=typeof window<"u"&&window.trustedTypes;if(si)try{ga=si.createPolicy("vue",{createHTML:e=>e})}catch{}const zs=ga?e=>ga.createHTML(e):e=>e,yd="http://www.w3.org/2000/svg",Ad="http://www.w3.org/1998/Math/MathML",Kn=typeof document<"u"?document:null,ci=Kn&&Kn.createElement("template"),Nd={insert:(e,n,t)=>{n.insertBefore(e,t||null)},remove:e=>{const n=e.parentNode;n&&n.removeChild(e)},createElement:(e,n,t,o)=>{const r=n==="svg"?Kn.createElementNS(yd,e):n==="mathml"?Kn.createElementNS(Ad,e):t?Kn.createElement(e,{is:t}):Kn.createElement(e);return e==="select"&&o&&o.multiple!=null&&r.setAttribute("multiple",o.multiple),r},createText:e=>Kn.createTextNode(e),createComment:e=>Kn.createComment(e),setText:(e,n)=>{e.nodeValue=n},setElementText:(e,n)=>{e.textContent=n},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>Kn.querySelector(e),setScopeId(e,n){e.setAttribute(n,"")},insertStaticContent(e,n,t,o,r,i){const l=t?t.previousSibling:n.lastChild;if(r&&(r===i||r.nextSibling))for(;n.insertBefore(r.cloneNode(!0),t),!(r===i||!(r=r.nextSibling)););else{ci.innerHTML=zs(o==="svg"?`<svg>${e}</svg>`:o==="mathml"?`<math>${e}</math>`:e);const s=ci.content;if(o==="svg"||o==="mathml"){const c=s.firstChild;for(;c.firstChild;)s.appendChild(c.firstChild);s.removeChild(c)}n.insertBefore(s,t)}return[l?l.nextSibling:n.firstChild,t?t.previousSibling:n.lastChild]}},nt="transition",Gt="animation",ho=Symbol("_vtc"),Us={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},xd=Je({},ls,Us),Rd=e=>(e.displayName="Transition",e.props=xd,e),Td=Rd((e,{slots:n})=>jt(Nu,Bd(e),n)),ft=(e,n=[])=>{ve(e)?e.forEach(t=>t(...n)):e&&e(...n)},ui=e=>e?ve(e)?e.some(n=>n.length>1):e.length>1:!1;function Bd(e){const n={};for(const T in e)T in Us||(n[T]=e[T]);if(e.css===!1)return n;const{name:t="v",type:o,duration:r,enterFromClass:i=`${t}-enter-from`,enterActiveClass:l=`${t}-enter-active`,enterToClass:s=`${t}-enter-to`,appearFromClass:c=i,appearActiveClass:d=l,appearToClass:u=s,leaveFromClass:p=`${t}-leave-from`,leaveActiveClass:m=`${t}-leave-active`,leaveToClass:g=`${t}-leave-to`}=e,B=Sd(r),N=B&&B[0],w=B&&B[1],{onBeforeEnter:Q,onEnter:q,onEnterCancelled:K,onLeave:C,onLeaveCancelled:U,onBeforeAppear:re=Q,onAppear:be=q,onAppearCancelled:Se=K}=n,pe=(T,Z,oe,Ke)=>{T._enterCancelled=Ke,pt(T,Z?u:s),pt(T,Z?d:l),oe&&oe()},W=(T,Z)=>{T._isLeaving=!1,pt(T,p),pt(T,g),pt(T,m),Z&&Z()},D=T=>(Z,oe)=>{const Ke=T?be:q,J=()=>pe(Z,T,oe);ft(Ke,[Z,J]),di(()=>{pt(Z,T?c:i),Un(Z,T?u:s),ui(Ke)||fi(Z,o,N,J)})};return Je(n,{onBeforeEnter(T){ft(Q,[T]),Un(T,i),Un(T,l)},onBeforeAppear(T){ft(re,[T]),Un(T,c),Un(T,d)},onEnter:D(!1),onAppear:D(!0),onLeave(T,Z){T._isLeaving=!0;const oe=()=>W(T,Z);Un(T,p),T._enterCancelled?(Un(T,m),hi(T)):(hi(T),Un(T,m)),di(()=>{T._isLeaving&&(pt(T,p),Un(T,g),ui(C)||fi(T,o,w,oe))}),ft(C,[T,oe])},onEnterCancelled(T){pe(T,!1,void 0,!0),ft(K,[T])},onAppearCancelled(T){pe(T,!0,void 0,!0),ft(Se,[T])},onLeaveCancelled(T){W(T),ft(U,[T])}})}function Sd(e){if(e==null)return null;if(Le(e))return[Tr(e.enter),Tr(e.leave)];{const n=Tr(e);return[n,n]}}function Tr(e){return Ic(e)}function Un(e,n){n.split(/\s+/).forEach(t=>t&&e.classList.add(t)),(e[ho]||(e[ho]=new Set)).add(n)}function pt(e,n){n.split(/\s+/).forEach(o=>o&&e.classList.remove(o));const t=e[ho];t&&(t.delete(n),t.size||(e[ho]=void 0))}function di(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}let wd=0;function fi(e,n,t,o){const r=e._endId=++wd,i=()=>{r===e._endId&&o()};if(t!=null)return setTimeout(i,t);const{type:l,timeout:s,propCount:c}=Ed(e,n);if(!l)return o();const d=l+"end";let u=0;const p=()=>{e.removeEventListener(d,m),i()},m=g=>{g.target===e&&++u>=c&&p()};setTimeout(()=>{u<c&&p()},s+1),e.addEventListener(d,m)}function Ed(e,n){const t=window.getComputedStyle(e),o=B=>(t[B]||"").split(", "),r=o(`${nt}Delay`),i=o(`${nt}Duration`),l=pi(r,i),s=o(`${Gt}Delay`),c=o(`${Gt}Duration`),d=pi(s,c);let u=null,p=0,m=0;n===nt?l>0&&(u=nt,p=l,m=i.length):n===Gt?d>0&&(u=Gt,p=d,m=c.length):(p=Math.max(l,d),u=p>0?l>d?nt:Gt:null,m=u?u===nt?i.length:c.length:0);const g=u===nt&&/\b(?:transform|all)(?:,|$)/.test(o(`${nt}Property`).toString());return{type:u,timeout:p,propCount:m,hasTransform:g}}function pi(e,n){for(;e.length<n.length;)e=e.concat(e);return Math.max(...n.map((t,o)=>mi(t)+mi(e[o])))}function mi(e){return e==="auto"?0:Number(e.slice(0,-1).replace(",","."))*1e3}function hi(e){return(e?e.ownerDocument:document).body.offsetHeight}function Cd(e,n,t){const o=e[ho];o&&(n=(n?[n,...o]:[...o]).join(" ")),n==null?e.removeAttribute("class"):t?e.setAttribute("class",n):e.className=n}const Yo=Symbol("_vod"),Hs=Symbol("_vsh"),vi={name:"show",beforeMount(e,{value:n},{transition:t}){e[Yo]=e.style.display==="none"?"":e.style.display,t&&n?t.beforeEnter(e):Yt(e,n)},mounted(e,{value:n},{transition:t}){t&&n&&t.enter(e)},updated(e,{value:n,oldValue:t},{transition:o}){!n!=!t&&(o?n?(o.beforeEnter(e),Yt(e,!0),o.enter(e)):o.leave(e,()=>{Yt(e,!1)}):Yt(e,n))},beforeUnmount(e,{value:n}){Yt(e,n)}};function Yt(e,n){e.style.display=n?e[Yo]:"none",e[Hs]=!n}const Od=Symbol(""),Id=/(?:^|;)\s*display\s*:/;function Pd(e,n,t){const o=e.style,r=Fe(t);let i=!1;if(t&&!r){if(n)if(Fe(n))for(const l of n.split(";")){const s=l.slice(0,l.indexOf(":")).trim();t[s]==null&&Xt(o,s,"")}else for(const l in n)t[l]==null&&Xt(o,l,"");for(const l in t){l==="display"&&(i=!0);const s=t[l];s!=null?Ld(e,l,!Fe(n)&&n?n[l]:void 0,s)||Xt(o,l,s):Xt(o,l,"")}}else if(r){if(n!==t){const l=o[Od];l&&(t+=";"+l),o.cssText=t,i=Id.test(t)}}else n&&e.removeAttribute("style");Yo in e&&(e[Yo]=i?o.display:"",e[Hs]&&(o.display="none"))}const gi=/\s*!important$/;function Xt(e,n,t){if(ve(t))t.forEach(o=>Xt(e,n,o));else if(t==null&&(t=""),n.startsWith("--"))e.setProperty(n,t);else{const o=kd(e,n);gi.test(t)?e.setProperty(Nt(o),t.replace(gi,""),"important"):e[o]=t}}const _i=["Webkit","Moz","ms"],Br={};function kd(e,n){const t=Br[n];if(t)return t;let o=dn(n);if(o!=="filter"&&o in e)return Br[n]=o;o=nr(o);for(let r=0;r<_i.length;r++){const i=_i[r]+o;if(i in e)return Br[n]=i}return n}function Ld(e,n,t,o){return e.tagName==="TEXTAREA"&&(n==="width"||n==="height")&&Fe(o)&&t===o}const bi="http://www.w3.org/1999/xlink";function yi(e,n,t,o,r,i=Mc(n)){o&&n.startsWith("xlink:")?t==null?e.removeAttributeNS(bi,n.slice(6,n.length)):e.setAttributeNS(bi,n,t):t==null||i&&!kl(t)?e.removeAttribute(n):e.setAttribute(n,i?"":Cn(t)?String(t):t)}function Ai(e,n,t,o,r){if(n==="innerHTML"||n==="textContent"){t!=null&&(e[n]=n==="innerHTML"?zs(t):t);return}const i=e.tagName;if(n==="value"&&i!=="PROGRESS"&&!i.includes("-")){const s=i==="OPTION"?e.getAttribute("value")||"":e.value,c=t==null?e.type==="checkbox"?"on":"":String(t);(s!==c||!("_value"in e))&&(e.value=c),t==null&&e.removeAttribute(n),e._value=t;return}let l=!1;if(t===""||t==null){const s=typeof e[n];s==="boolean"?t=kl(t):t==null&&s==="string"?(t="",l=!0):s==="number"&&(t=0,l=!0)}try{e[n]=t}catch{}l&&e.removeAttribute(r||n)}function it(e,n,t,o){e.addEventListener(n,t,o)}function jd(e,n,t,o){e.removeEventListener(n,t,o)}const Ni=Symbol("_vei");function Dd(e,n,t,o,r=null){const i=e[Ni]||(e[Ni]={}),l=i[n];if(o&&l)l.value=o;else{const[s,c]=$d(n);if(o){const d=i[n]=zd(o,r);it(e,s,d,c)}else l&&(jd(e,s,l,c),i[n]=void 0)}}const Md=/(Once|Passive|Capture)$/,qd=/^on:?(?:Once|Passive|Capture)$/;function $d(e){let n,t;for(;(t=e.match(Md))&&!qd.test(e);)n||(n={}),e=e.slice(0,e.length-t[1].length),n[t[1].toLowerCase()]=!0;return[e[2]===":"?e.slice(3):Nt(e.slice(2)),n]}let Sr=0;const Fd=Promise.resolve(),Vd=()=>Sr||(Fd.then(()=>Sr=0),Sr=Date.now());function zd(e,n){const t=o=>{if(!o._vts)o._vts=Date.now();else if(o._vts<=t.attached)return;const r=t.value;if(ve(r)){const i=o.stopImmediatePropagation;o.stopImmediatePropagation=()=>{i.call(o),o._stopped=!0};const l=r.slice(),s=[o];for(let c=0;c<l.length&&!o._stopped;c++){const d=l[c];d&&Tn(d,n,5,s)}}else Tn(r,n,5,[o])};return t.value=e,t.attached=Vd(),t}const xi=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,Ud=(e,n,t,o,r,i)=>{const l=r==="svg";n==="class"?Cd(e,o,l):n==="style"?Pd(e,t,o):Xo(n)?Zo(n)||Dd(e,n,t,o,i):(n[0]==="."?(n=n.slice(1),!0):n[0]==="^"?(n=n.slice(1),!1):Hd(e,n,o,l))?(Ai(e,n,o),!e.tagName.includes("-")&&(n==="value"||n==="checked"||n==="selected")&&yi(e,n,o,l,i,n!=="value")):e._isVueCE&&(Kd(e,n)||e._def.__asyncLoader&&(/[A-Z]/.test(n)||!Fe(o)))?Ai(e,dn(n),o,i,n):(n==="true-value"?e._trueValue=o:n==="false-value"&&(e._falseValue=o),yi(e,n,o,l))};function Hd(e,n,t,o){if(o)return!!(n==="innerHTML"||n==="textContent"||n in e&&xi(n)&&Ae(t));if(n==="spellcheck"||n==="draggable"||n==="translate"||n==="autocorrect"||n==="sandbox"&&e.tagName==="IFRAME"||n==="form"||n==="list"&&e.tagName==="INPUT"||n==="type"&&e.tagName==="TEXTAREA")return!1;if(n==="width"||n==="height"){const r=e.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return xi(n)&&Fe(t)?!1:n in e}function Kd(e,n){const t=e._def.props;if(!t)return!1;const o=dn(n);return Array.isArray(t)?t.some(r=>dn(r)===o):Object.keys(t).some(r=>dn(r)===o)}const Dt=e=>{const n=e.props["onUpdate:modelValue"]||!1;return ve(n)?t=>Lo(n,t):n};function Gd(e){e.target.composing=!0}function Ri(e){const n=e.target;n.composing&&(n.composing=!1,n.dispatchEvent(new Event("input")))}const qn=Symbol("_assign"),Oo=Symbol("_initialValue");function wr(e,n,t){return n&&(e=e.trim()),t&&(e=tr(e)),e}const vo={created(e,{modifiers:{lazy:n,trim:t,number:o}},r){e.parentNode&&(e.type==="text"?e[Oo]=e.defaultValue.replace(/[\r\n]/g,""):e.type==="textarea"&&(e[Oo]=e.defaultValue.replace(/\r\n?/g,`
`))),e[qn]=Dt(r);const i=o||r.props&&r.props.type==="number";it(e,n?"change":"input",l=>{l.target.composing||e[qn](wr(e.value,t,i))}),(t||i)&&it(e,"change",()=>{e.value=wr(e.value,t,i)}),n||(it(e,"compositionstart",Gd),it(e,"compositionend",Ri),it(e,"change",Ri))},mounted(e,{value:n,modifiers:{trim:t,number:o}}){const r=n??"",i=e[Oo];delete e[Oo],i!==void 0&&(e.type==="text"||e.type==="textarea")&&e.value!==i?e[qn](wr(e.value,t,o)):e.value=r},beforeUpdate(e,{value:n,oldValue:t,modifiers:{lazy:o,trim:r,number:i}},l){if(e[qn]=Dt(l),e.composing)return;const s=(i||e.type==="number")&&!/^0\d/.test(e.value)?tr(e.value):e.value,c=n??"";if(s===c)return;const d=e.getRootNode();(d instanceof Document||d instanceof ShadowRoot)&&d.activeElement===e&&e.type!=="range"&&(o&&n===t||r&&e.value.trim()===c)||(e.value=c)}},Yd={deep:!0,created(e,n,t){e[qn]=Dt(t),it(e,"change",()=>{const o=e._modelValue,r=go(e),i=e.checked,l=e[qn];if(ve(o)){const s=Sa(o,r),c=s!==-1;if(i&&!c)l(o.concat(r));else if(!i&&c){const d=[...o];d.splice(s,1),l(d)}}else if(Ft(o)){const s=new Set(o);i?s.add(r):s.delete(r),l(s)}else l(Ks(e,i))})},mounted:Ti,beforeUpdate(e,n,t){e[qn]=Dt(t),Ti(e,n,t)}};function Ti(e,{value:n,oldValue:t},o){e._modelValue=n;let r;if(ve(n))r=Sa(n,o.props.value)>-1;else if(Ft(n))r=n.has(o.props.value);else{if(n===t)return;r=Vt(n,Ks(e,!0))}e.checked!==r&&(e.checked=r)}const Er={deep:!0,created(e,{value:n,modifiers:{number:t}},o){e._modelValue=n,it(e,"change",()=>{const r=Array.prototype.filter.call(e.options,i=>i.selected).map(i=>t?tr(go(i)):go(i));e[qn](e.multiple?Ft(e._modelValue)?new Set(r):r:r[0]),e._assigning=!0,lr(()=>{e._assigning=!1})}),e[qn]=Dt(o)},mounted(e,{value:n}){Bi(e,n)},beforeUpdate(e,{value:n},t){e._modelValue=n,e[qn]=Dt(t)},updated(e,{value:n}){e._assigning||Bi(e,n)}};function Bi(e,n){const t=e.multiple,o=ve(n);if(!(t&&!o&&!Ft(n))){for(let r=0,i=e.options.length;r<i;r++){const l=e.options[r],s=go(l);if(t)if(o){const c=typeof s;c==="string"||c==="number"?l.selected=n.some(d=>String(d)===String(s)):l.selected=Sa(n,s)>-1}else l.selected=n.has(s);else if(Vt(go(l),n)){e.selectedIndex!==r&&(e.selectedIndex=r);return}}!t&&e.selectedIndex!==-1&&(e.selectedIndex=-1)}}function go(e){return"_value"in e?e._value:e.value}function Ks(e,n){const t=n?"_trueValue":"_falseValue";return t in e?e[t]:n}const Wd=["ctrl","shift","alt","meta"],Jd={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&e.button!==0,middle:e=>"button"in e&&e.button!==1,right:e=>"button"in e&&e.button!==2,exact:(e,n)=>Wd.some(t=>e[`${t}Key`]&&!n.includes(t))},Mt=(e,n)=>{if(!e)return e;const t=e._withMods||(e._withMods={}),o=n.join(".");return t[o]||(t[o]=((r,...i)=>{for(let l=0;l<n.length;l++){const s=Jd[n[l]];if(s&&s(r,n))return}return e(r,...i)}))},Qd=Je({patchProp:Ud},Nd);let Si;function Xd(){return Si||(Si=od(Qd))}const Zd=((...e)=>{const n=Xd().createApp(...e),{mount:t}=n;return n.mount=o=>{const r=nf(o);if(!r)return;const i=n._component;!Ae(i)&&!i.render&&!i.template&&(i.template=r.innerHTML),r.nodeType===1&&(r.textContent="");const l=t(r,!1,ef(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),l},n});function ef(e){if(e instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&e instanceof MathMLElement)return"mathml"}function nf(e){return Fe(e)?document.querySelector(e):e}const tf="modulepreload",of=function(e){return"/"+e},wi={},rf=function(n,t,o){let r=Promise.resolve();if(t&&t.length>0){let d=function(u){return Promise.all(u.map(p=>Promise.resolve(p).then(m=>({status:"fulfilled",value:m}),m=>({status:"rejected",reason:m}))))};var l=d;document.getElementsByTagName("link");const s=document.querySelector("meta[property=csp-nonce]"),c=s?.nonce||s?.getAttribute("nonce");r=d(t.map(u=>{if(u=of(u),u in wi)return;wi[u]=!0;const p=u.endsWith(".css"),m=p?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${u}"]${m}`))return;const g=document.createElement("link");if(g.rel=p?"stylesheet":tf,p||(g.as="script"),g.crossOrigin="",g.href=u,c&&g.setAttribute("nonce",c),document.head.appendChild(g),p)return new Promise((B,N)=>{g.addEventListener("load",B),g.addEventListener("error",()=>N(new Error(`Unable to preload CSS for ${u}`)))})}))}function i(s){const c=new Event("vite:preloadError",{cancelable:!0});if(c.payload=s,window.dispatchEvent(c),!c.defaultPrevented)throw s}return r.then(s=>{for(const c of s||[])c.status==="rejected"&&i(c.reason);return n().catch(i)})};function af(e={}){const{immediate:n=!1,onNeedReload:t,onNeedRefresh:o,onOfflineReady:r,onRegistered:i,onRegisteredSW:l,onRegisterError:s}=e;let c,d;const u=async(m=!0)=>{await d};async function p(){if("serviceWorker"in navigator){if(c=await rf(async()=>{const{Workbox:m}=await import("./workbox-window.prod.es5-BBnX5xw4.js");return{Workbox:m}},[]).then(({Workbox:m})=>new m("/sw.js",{scope:"/",type:"classic"})).catch(m=>{s?.(m)}),!c)return;c.addEventListener("activated",m=>{(m.isUpdate||m.isExternal)&&(t?t():window.location.reload())}),c.addEventListener("installed",m=>{m.isUpdate||r?.()}),c.register({immediate:n}).then(m=>{l?l("/sw.js",m):i?.(m)}).catch(m=>{s?.(m)})}}return d=p(),u}const lf="acessibilidade-checker",sf=2,ln=Object.freeze({projects:"projects",environments:"environments",elements:"elements",evaluations:"evaluations",ruleSets:"ruleSets"});function Bt(e){return new Promise((n,t)=>{e.onsuccess=()=>n(e.result),e.onerror=()=>t(e.error??new Error("Falha no IndexedDB."))})}function cf(e=globalThis.indexedDB){if(!e)return Promise.reject(new Error("IndexedDB não está disponível neste ambiente."));const n=e.open(lf,sf);return n.onupgradeneeded=()=>{const t=n.result;if(t.objectStoreNames.contains(ln.projects)||t.createObjectStore(ln.projects,{keyPath:"id"}),t.objectStoreNames.contains(ln.environments)||t.createObjectStore(ln.environments,{keyPath:"id"}).createIndex("projectId","projectId",{unique:!1}),t.objectStoreNames.contains(ln.elements)||t.createObjectStore(ln.elements,{keyPath:"id"}).createIndex("environmentId","environmentId",{unique:!1}),!t.objectStoreNames.contains(ln.evaluations)){const o=t.createObjectStore(ln.evaluations,{keyPath:"id"});o.createIndex("elementId","elementId",{unique:!1}),o.createIndex("evaluatedAt","evaluatedAt",{unique:!1})}t.objectStoreNames.contains(ln.ruleSets)||t.createObjectStore(ln.ruleSets,{keyPath:"id"})},Bt(n)}async function Wt(e,n,t,o){const r=e.transaction(n,t),i=r.objectStore(n),l=await o(i);return await new Promise((s,c)=>{r.oncomplete=s,r.onabort=r.onerror=()=>c(r.error??new Error("Transação IndexedDB não concluída."))}),l}class Ro{constructor(n,t){this.database=n,this.storeName=t}get(n){return Wt(this.database,this.storeName,"readonly",t=>Bt(t.get(n)))}getAll(){return Wt(this.database,this.storeName,"readonly",n=>Bt(n.getAll()))}getAllBy(n,t){return Wt(this.database,this.storeName,"readonly",o=>Bt(o.index(n).getAll(t)))}put(n){return Wt(this.database,this.storeName,"readwrite",async t=>(await Bt(t.put(n)),n))}delete(n){return Wt(this.database,this.storeName,"readwrite",t=>Bt(t.delete(n)))}}class uf extends Ro{constructor(n){super(n,ln.elements)}getByEnvironmentId(n){return this.getAllBy("environmentId",n)}}class df extends Ro{constructor(n){super(n,ln.environments)}getByProjectId(n){return this.getAllBy("projectId",n)}}class ff extends Ro{constructor(n){super(n,ln.evaluations)}getByElementId(n){return this.getAllBy("elementId",n)}}class pf extends Ro{constructor(n){super(n,ln.projects)}}class mf extends Ro{constructor(n){super(n,ln.ruleSets)}}const hf=new Set([">=","<=",">","<","==","!="]);function Cr(e,n,t){switch(n){case">=":return e>=t;case"<=":return e<=t;case">":return e>t;case"<":return e<t;case"==":return e===t;case"!=":return e!==t;default:throw new Error(`Operador não suportado: ${n}`)}}function vf(e,n){return n.obrigatorio&&(e==null||e==="")?{valid:!1,reason:"Campo obrigatório não preenchido."}:e==null||e===""?{valid:!0}:n.tipo==="number"&&typeof e!="number"?{valid:!1,reason:"O valor deve ser numérico."}:n.tipo==="boolean"&&typeof e!="boolean"?{valid:!1,reason:"O valor deve ser booleano."}:{valid:!0}}class gf{evaluate(n,t,o={}){return n.map(r=>this.evaluateRule(r,t,o))}evaluateRule(n,t,o){const r=o[n.parametro],i=t[n.parametro];if(!r)return{id:n.id,status:"erro",mensagem:`Parâmetro não definido: ${n.parametro}`};const l=vf(i,r);if(!l.valid)return{id:n.id,nome:n.nome,status:"invalido",mensagem:l.reason,referencia:n.referencia};if(i==null||i==="")return{id:n.id,nome:n.nome,status:"nao_avaliado",referencia:n.referencia};if(n.tipo==="checklist")return{id:n.id,nome:n.nome,status:"manual",valor:i,referencia:n.referencia};if(n.tipo==="conditional")return this.evaluateConditional(n,t,o);const s=Cr(i,n.operador,n.valor);return{id:n.id,nome:n.nome,status:s?"conforme":"nao_conforme",valorInformado:i,valorEsperado:n.valor,unidade:r.unidade,referencia:n.referencia}}evaluateConditional(n,t,o){for(const r of n.condicoes??[]){const i=t[n.parametro];if(r.quando&&Cr(i,r.quando.operador,r.quando.valor)){if(r.resultado)return{id:n.id,nome:n.nome,status:r.resultado,valorInformado:i,referencia:n.referencia,mensagem:r.mensagem};if(r.verificar){const l=t[r.verificar.parametro],s=Cr(l,r.verificar.operador,r.verificar.valor);return{id:n.id,nome:n.nome,status:s?"conforme":"nao_conforme",valorInformado:l,valorEsperado:r.verificar.valor,referencia:n.referencia}}}}return{id:n.id,nome:n.nome,status:"nao_avaliado",referencia:n.referencia}}}function Nn(e,n){if(typeof e!="string"||e.trim()==="")throw new TypeError(`${n} deve ser um texto não vazio.`);return e.trim()}function To(){return typeof globalThis.crypto?.randomUUID=="function"?globalThis.crypto.randomUUID():`${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`}function Fn(e=new Date,n="data"){const t=e instanceof Date?e:new Date(e);if(Number.isNaN(t.getTime()))throw new TypeError(`${n} deve ser uma data válida.`);return t.toISOString()}function _a(e){return typeof structuredClone=="function"?structuredClone(e):JSON.parse(JSON.stringify(e))}function Ei({id:e=To(),elementId:n,data:t,result:o,evaluatedAt:r=new Date}={}){if(t===void 0||o===void 0)throw new TypeError("data e result são obrigatórios.");return{id:Nn(e,"id"),elementId:Nn(n,"elementId"),data:_a(t),result:_a(o),evaluatedAt:Fn(r,"evaluatedAt")}}const _f=["nao_conforme","erro","invalido"],bf=["atencao","manual","nao_avaliado"];function Gs(e){const n=e[0]?.result;return n?.length?n.some(t=>_f.includes(t.status))?"nao_conforme":n.some(t=>bf.includes(t.status))?"nao_avaliado":"conforme":"nao_avaliado"}class yf{constructor({elementRepository:n,environmentRepository:t,evaluationRepository:o,ruleEngine:r=new gf}){this.elementRepository=n,this.environmentRepository=t,this.evaluationRepository=o,this.ruleEngine=r}async evaluateElement({elementId:n,checklist:t,data:o,evaluatedAt:r}){if(!await this.elementRepository.get(n))throw new Error("Elemento não encontrado.");const l=this.ruleEngine.evaluate(t.regras??[],o,t.parametros??{}),s=Ei({elementId:n,data:o,result:l,evaluatedAt:r});return this.evaluationRepository.put(s)}evaluateTransientElement({elementId:n,checklist:t,data:o,evaluatedAt:r}){const i=this.ruleEngine.evaluate(t.regras??[],o,t.parametros??{});return Ei({elementId:n,data:o,result:i,evaluatedAt:r})}async listEvaluations(n){return(await this.evaluationRepository.getByElementId(n)).sort((o,r)=>r.evaluatedAt.localeCompare(o.evaluatedAt))}async getEnvironmentSummary(n){const t=await this.elementRepository.getByEnvironmentId(n);return this.#e(t)}async getProjectSummary(n){if(!this.environmentRepository)throw new Error("Repositório de ambientes não configurado.");const t=await this.environmentRepository.getByProjectId(n),o=await Promise.all(t.map(r=>this.elementRepository.getByEnvironmentId(r.id)));return this.#e(o.flat())}async#e(n){const t=await Promise.all(n.map(async r=>Gs(await this.listEvaluations(r.id)))),o={totalElements:n.length,conforme:0,nao_conforme:0,nao_avaliado:0,pendente:0,score:0,overallStatus:"nao_avaliado"};for(const r of t)o[r]+=1;return o.pendente=o.nao_avaliado,o.score=o.totalElements?Math.round(o.conforme/o.totalElements*100):0,o.nao_conforme>0?o.overallStatus="nao_conforme":o.nao_avaliado===0&&o.totalElements>0&&(o.overallStatus="conforme"),o}}function Ci({id:e=To(),environmentId:n,name:t,type:o,rule:r,createdAt:i=new Date,updatedAt:l=i}={}){return{id:Nn(e,"id"),environmentId:Nn(n,"environmentId"),name:Nn(t,"name"),type:Nn(o,"type"),rule:Nn(r,"rule"),createdAt:Fn(i,"createdAt"),updatedAt:Fn(l,"updatedAt")}}function Oi({id:e=To(),projectId:n,name:t,createdAt:o=new Date,updatedAt:r=o}={}){return{id:Nn(e,"id"),projectId:Nn(n,"projectId"),name:Nn(t,"name"),createdAt:Fn(o,"createdAt"),updatedAt:Fn(r,"updatedAt")}}function Ii({id:e=To(),name:n,description:t="",createdAt:o=new Date,updatedAt:r=o}={}){return{id:Nn(e,"id"),name:Nn(n,"name"),description:typeof t=="string"?t.trim():"",createdAt:Fn(o,"createdAt"),updatedAt:Fn(r,"updatedAt")}}class Af{constructor({projectRepository:n,environmentRepository:t,elementRepository:o}){this.projectRepository=n,this.environmentRepository=t,this.elementRepository=o}async createProject(n){const t=Ii(n);return this.projectRepository.put(t)}listProjects(){return this.projectRepository.getAll()}getProject(n){return this.projectRepository.get(n)}async updateProject(n,{name:t,description:o}){const r=await this.#e(this.projectRepository.get(n),"Projeto");return this.projectRepository.put(Ii({...r,name:t,description:o,updatedAt:new Date}))}async renameProject(n,t){const o=await this.#e(this.projectRepository.get(n),"Projeto");return this.updateProject(n,{name:t,description:o.description})}async createEnvironment(n,t){await this.#e(this.projectRepository.get(n),"Projeto");const o=Oi({...t,projectId:n});return this.environmentRepository.put(o)}listEnvironments(n){return this.environmentRepository.getByProjectId(n)}async renameEnvironment(n,t){const o=await this.#e(this.environmentRepository.get(n),"Ambiente");return this.environmentRepository.put(Oi({...o,name:t,updatedAt:new Date}))}async createElement(n,t){await this.#e(this.environmentRepository.get(n),"Ambiente");const o=Ci({...t,environmentId:n});return this.elementRepository.put(o)}listElements(n){return this.elementRepository.getByEnvironmentId(n)}async updateElement(n,t){const o=await this.#e(this.elementRepository.get(n),"Elemento");return this.elementRepository.put(Ci({...o,...t,id:o.id,environmentId:o.environmentId,createdAt:o.createdAt,updatedAt:Fn(new Date)}))}async#e(n,t){const o=await n;if(!o)throw new Error(`${t} não encontrado.`);return o}}class Nf{constructor({evaluationService:n}){this.evaluationService=n,this.current=null}evaluate({name:n,checklist:t,data:o}){const r={id:To(),name:n?.trim()||t.nome,type:t.nome,rule:t.id},i=this.evaluationService.evaluateTransientElement({elementId:r.id,checklist:t,data:o});return this.current={element:r,evaluation:i},this.current}getCurrent(){return this.current}clear(){this.current=null}}const xf=new Set(["checklist","conditional"]);function kt(e){return e!==null&&typeof e=="object"&&!Array.isArray(e)}function ro(e,n,t){(typeof e!="string"||e.trim()==="")&&t.push(`${n} deve ser um texto não vazio.`)}function Ys(e,n,t){hf.has(e)||t.push(`${n} deve ser um operador suportado.`)}function Pi(e,n,t){if(!kt(e)){t.push(`${n} deve ser um objeto.`);return}Ys(e.operador,`${n}.operador`,t),"valor"in e||t.push(`${n}.valor é obrigatório.`)}function Rf(e,n,t,o){const r=`regras[${n}]`;if(!kt(e)){o.push(`${r} deve ser um objeto.`);return}if(ro(e.id,`${r}.id`,o),ro(e.nome,`${r}.nome`,o),ro(e.parametro,`${r}.parametro`,o),typeof e.parametro=="string"&&!(e.parametro in t)&&o.push(`${r}.parametro deve existir em parametros.`),e.tipo!=="checklist"){if(e.tipo==="conditional"){if(!Array.isArray(e.condicoes)||e.condicoes.length===0){o.push(`${r}.condicoes deve conter ao menos uma condição.`);return}e.condicoes.forEach((i,l)=>{const s=`${r}.condicoes[${l}]`;if(!kt(i)){o.push(`${s} deve ser um objeto.`);return}Pi(i.quando,`${s}.quando`,o);const c=typeof i.resultado=="string"&&i.resultado!=="",d="verificar"in i;c===d&&o.push(`${s} deve informar exatamente resultado ou verificar.`),d&&(Pi(i.verificar,`${s}.verificar`,o),(typeof i.verificar?.parametro!="string"||!(i.verificar.parametro in t))&&o.push(`${s}.verificar.parametro deve existir em parametros.`))});return}e.tipo!==void 0&&!xf.has(e.tipo)&&o.push(`${r}.tipo não é suportado.`),Ys(e.operador,`${r}.operador`,o),"valor"in e||o.push(`${r}.valor é obrigatório.`)}}function Tf(e){const n=[];return kt(e)?(ro(e.id,"id",n),ro(e.nome,"nome",n),kt(e.parametros)||n.push("parametros deve ser um objeto."),Array.isArray(e.regras)||n.push("regras deve ser uma lista."),kt(e.parametros)&&Array.isArray(e.regras)&&e.regras.forEach((t,o)=>Rf(t,o,e.parametros,n)),{valid:n.length===0,errors:n}):{valid:!1,errors:["O conjunto de regras deve ser um objeto."]}}function ba(e){const n=Tf(e);if(!n.valid)throw new TypeError(`Conjunto de regras inválido: ${n.errors.join(" ")}`);return e}function Bf(e,{createdAt:n=new Date,updatedAt:t=n}={}){return ba(e),{..._a(e),source:"user",createdAt:Fn(n,"createdAt"),updatedAt:Fn(t,"updatedAt")}}function Sf(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var en={},Io={},tt={},ki;function Bo(){if(ki)return tt;ki=1;function e(l){return typeof l>"u"||l===null}function n(l){return typeof l=="object"&&l!==null}function t(l){return Array.isArray(l)?l:e(l)?[]:[l]}function o(l,s){if(s){const c=Object.keys(s);for(let d=0,u=c.length;d<u;d+=1){const p=c[d];l[p]=s[p]}}return l}function r(l,s){let c="";for(let d=0;d<s;d+=1)c+=l;return c}function i(l){return l===0&&Number.NEGATIVE_INFINITY===1/l}return tt.isNothing=e,tt.isObject=n,tt.toArray=t,tt.repeat=r,tt.isNegativeZero=i,tt.extend=o,tt}var Or,Li;function So(){if(Li)return Or;Li=1;function e(t,o){let r="";const i=t.reason||"(unknown reason)";return t.mark?(t.mark.name&&(r+='in "'+t.mark.name+'" '),r+="("+(t.mark.line+1)+":"+(t.mark.column+1)+")",!o&&t.mark.snippet&&(r+=`

`+t.mark.snippet),i+" "+r):i}function n(t,o){Error.call(this),this.name="YAMLException",this.reason=t,this.mark=o,this.message=e(this,!1),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack||""}return n.prototype=Object.create(Error.prototype),n.prototype.constructor=n,n.prototype.toString=function(o){return this.name+": "+e(this,o)},Or=n,Or}var Ir,ji;function wf(){if(ji)return Ir;ji=1;const e=Bo();function n(r,i,l,s,c){let d="",u="";const p=Math.floor(c/2)-1;return s-i>p&&(d=" ... ",i=s-p+d.length),l-s>p&&(u=" ...",l=s+p-u.length),{str:d+r.slice(i,l).replace(/\t/g,"→")+u,pos:s-i+d.length}}function t(r,i){return e.repeat(" ",i-r.length)+r}function o(r,i){if(i=Object.create(i||null),!r.buffer)return null;i.maxLength||(i.maxLength=79),typeof i.indent!="number"&&(i.indent=1),typeof i.linesBefore!="number"&&(i.linesBefore=3),typeof i.linesAfter!="number"&&(i.linesAfter=2);const l=/\r?\n|\r|\0/g,s=[0],c=[];let d,u=-1;for(;d=l.exec(r.buffer);)c.push(d.index),s.push(d.index+d[0].length),r.position<=d.index&&u<0&&(u=s.length-2);u<0&&(u=s.length-1);let p="";const m=Math.min(r.line+i.linesAfter,c.length).toString().length,g=i.maxLength-(i.indent+m+3);for(let N=1;N<=i.linesBefore&&!(u-N<0);N++){const w=n(r.buffer,s[u-N],c[u-N],r.position-(s[u]-s[u-N]),g);p=e.repeat(" ",i.indent)+t((r.line-N+1).toString(),m)+" | "+w.str+`
`+p}const B=n(r.buffer,s[u],c[u],r.position,g);p+=e.repeat(" ",i.indent)+t((r.line+1).toString(),m)+" | "+B.str+`
`,p+=e.repeat("-",i.indent+m+3+B.pos)+`^
`;for(let N=1;N<=i.linesAfter&&!(u+N>=c.length);N++){const w=n(r.buffer,s[u+N],c[u+N],r.position-(s[u]-s[u+N]),g);p+=e.repeat(" ",i.indent)+t((r.line+N+1).toString(),m)+" | "+w.str+`
`}return p.replace(/\n$/,"")}return Ir=o,Ir}var Pr,Di;function fn(){if(Di)return Pr;Di=1;const e=So(),n=["kind","multi","resolve","construct","instanceOf","predicate","represent","representName","defaultStyle","styleAliases"],t=["scalar","sequence","mapping"];function o(i){const l={};return i!==null&&Object.keys(i).forEach(function(s){i[s].forEach(function(c){l[String(c)]=s})}),l}function r(i,l){if(l=l||{},Object.keys(l).forEach(function(s){if(n.indexOf(s)===-1)throw new e('Unknown option "'+s+'" is met in definition of "'+i+'" YAML type.')}),this.options=l,this.tag=i,this.kind=l.kind||null,this.resolve=l.resolve||function(){return!0},this.construct=l.construct||function(s){return s},this.instanceOf=l.instanceOf||null,this.predicate=l.predicate||null,this.represent=l.represent||null,this.representName=l.representName||null,this.defaultStyle=l.defaultStyle||null,this.multi=l.multi||!1,this.styleAliases=o(l.styleAliases||null),t.indexOf(this.kind)===-1)throw new e('Unknown kind "'+this.kind+'" is specified for "'+i+'" YAML type.')}return Pr=r,Pr}var kr,Mi;function Ws(){if(Mi)return kr;Mi=1;const e=So(),n=fn();function t(i,l){const s=[];return i[l].forEach(function(c){let d=s.length;s.forEach(function(u,p){u.tag===c.tag&&u.kind===c.kind&&u.multi===c.multi&&(d=p)}),s[d]=c}),s}function o(){const i={scalar:{},sequence:{},mapping:{},fallback:{},multi:{scalar:[],sequence:[],mapping:[],fallback:[]}};function l(s){s.multi?(i.multi[s.kind].push(s),i.multi.fallback.push(s)):i[s.kind][s.tag]=i.fallback[s.tag]=s}for(let s=0,c=arguments.length;s<c;s+=1)arguments[s].forEach(l);return i}function r(i){return this.extend(i)}return r.prototype.extend=function(l){let s=[],c=[];if(l instanceof n)c.push(l);else if(Array.isArray(l))c=c.concat(l);else if(l&&(Array.isArray(l.implicit)||Array.isArray(l.explicit)))l.implicit&&(s=s.concat(l.implicit)),l.explicit&&(c=c.concat(l.explicit));else throw new e("Schema.extend argument should be a Type, [ Type ], or a schema definition ({ implicit: [...], explicit: [...] })");s.forEach(function(u){if(!(u instanceof n))throw new e("Specified list of YAML types (or a single Type object) contains a non-Type object.");if(u.loadKind&&u.loadKind!=="scalar")throw new e("There is a non-scalar type in the implicit list of a schema. Implicit resolving of such types is not supported.");if(u.multi)throw new e("There is a multi type in the implicit list of a schema. Multi tags can only be listed as explicit.")}),c.forEach(function(u){if(!(u instanceof n))throw new e("Specified list of YAML types (or a single Type object) contains a non-Type object.")});const d=Object.create(r.prototype);return d.implicit=(this.implicit||[]).concat(s),d.explicit=(this.explicit||[]).concat(c),d.compiledImplicit=t(d,"implicit"),d.compiledExplicit=t(d,"explicit"),d.compiledTypeMap=o(d.compiledImplicit,d.compiledExplicit),d},kr=r,kr}var Lr,qi;function Js(){if(qi)return Lr;qi=1;const e=fn();return Lr=new e("tag:yaml.org,2002:str",{kind:"scalar",construct:function(n){return n!==null?n:""}}),Lr}var jr,$i;function Qs(){if($i)return jr;$i=1;const e=fn();return jr=new e("tag:yaml.org,2002:seq",{kind:"sequence",construct:function(n){return n!==null?n:[]}}),jr}var Dr,Fi;function Xs(){if(Fi)return Dr;Fi=1;const e=fn();return Dr=new e("tag:yaml.org,2002:map",{kind:"mapping",construct:function(n){return n!==null?n:{}}}),Dr}var Mr,Vi;function Zs(){if(Vi)return Mr;Vi=1;const e=Ws();return Mr=new e({explicit:[Js(),Qs(),Xs()]}),Mr}var qr,zi;function ec(){if(zi)return qr;zi=1;const e=fn();function n(r){if(r===null)return!0;const i=r.length;return i===1&&r==="~"||i===4&&(r==="null"||r==="Null"||r==="NULL")}function t(){return null}function o(r){return r===null}return qr=new e("tag:yaml.org,2002:null",{kind:"scalar",resolve:n,construct:t,predicate:o,represent:{canonical:function(){return"~"},lowercase:function(){return"null"},uppercase:function(){return"NULL"},camelcase:function(){return"Null"},empty:function(){return""}},defaultStyle:"lowercase"}),qr}var $r,Ui;function nc(){if(Ui)return $r;Ui=1;const e=fn();function n(r){if(r===null)return!1;const i=r.length;return i===4&&(r==="true"||r==="True"||r==="TRUE")||i===5&&(r==="false"||r==="False"||r==="FALSE")}function t(r){return r==="true"||r==="True"||r==="TRUE"}function o(r){return Object.prototype.toString.call(r)==="[object Boolean]"}return $r=new e("tag:yaml.org,2002:bool",{kind:"scalar",resolve:n,construct:t,predicate:o,represent:{lowercase:function(r){return r?"true":"false"},uppercase:function(r){return r?"TRUE":"FALSE"},camelcase:function(r){return r?"True":"False"}},defaultStyle:"lowercase"}),$r}var Fr,Hi;function tc(){if(Hi)return Fr;Hi=1;const e=Bo(),n=fn();function t(d){return d>=48&&d<=57||d>=65&&d<=70||d>=97&&d<=102}function o(d){return d>=48&&d<=55}function r(d){return d>=48&&d<=57}function i(d){if(d===null)return!1;const u=d.length;let p=0,m=!1;if(!u)return!1;let g=d[p];if((g==="-"||g==="+")&&(g=d[++p]),g==="0"){if(p+1===u)return!0;if(g=d[++p],g==="b"){for(p++;p<u;p++){if(g=d[p],g!=="0"&&g!=="1")return!1;m=!0}return m&&isFinite(l(d))}if(g==="x"){for(p++;p<u;p++){if(!t(d.charCodeAt(p)))return!1;m=!0}return m&&isFinite(l(d))}if(g==="o"){for(p++;p<u;p++){if(!o(d.charCodeAt(p)))return!1;m=!0}return m&&isFinite(l(d))}}for(;p<u;p++){if(!r(d.charCodeAt(p)))return!1;m=!0}return m?isFinite(l(d)):!1}function l(d){let u=d,p=1,m=u[0];if((m==="-"||m==="+")&&(m==="-"&&(p=-1),u=u.slice(1),m=u[0]),u==="0")return 0;if(m==="0"){if(u[1]==="b")return p*parseInt(u.slice(2),2);if(u[1]==="x")return p*parseInt(u.slice(2),16);if(u[1]==="o")return p*parseInt(u.slice(2),8)}return p*parseInt(u,10)}function s(d){return l(d)}function c(d){return Object.prototype.toString.call(d)==="[object Number]"&&d%1===0&&!e.isNegativeZero(d)}return Fr=new n("tag:yaml.org,2002:int",{kind:"scalar",resolve:i,construct:s,predicate:c,represent:{binary:function(d){return d>=0?"0b"+d.toString(2):"-0b"+d.toString(2).slice(1)},octal:function(d){return d>=0?"0o"+d.toString(8):"-0o"+d.toString(8).slice(1)},decimal:function(d){return d.toString(10)},hexadecimal:function(d){return d>=0?"0x"+d.toString(16).toUpperCase():"-0x"+d.toString(16).toUpperCase().slice(1)}},defaultStyle:"decimal",styleAliases:{binary:[2,"bin"],octal:[8,"oct"],decimal:[10,"dec"],hexadecimal:[16,"hex"]}}),Fr}var Vr,Ki;function oc(){if(Ki)return Vr;Ki=1;const e=Bo(),n=fn(),t=new RegExp("^(?:[-+]?(?:[0-9]+)(?:\\.[0-9]*)?(?:[eE][-+]?[0-9]+)?|\\.[0-9]+(?:[eE][-+]?[0-9]+)?|[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$"),o=new RegExp("^(?:[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$");function r(d){return d===null||!t.test(d)?!1:isFinite(parseFloat(d,10))?!0:o.test(d)}function i(d){let u=d.toLowerCase();const p=u[0]==="-"?-1:1;return"+-".indexOf(u[0])>=0&&(u=u.slice(1)),u===".inf"?p===1?Number.POSITIVE_INFINITY:Number.NEGATIVE_INFINITY:u===".nan"?NaN:p*parseFloat(u,10)}const l=/^[-+]?[0-9]+e/;function s(d,u){if(isNaN(d))switch(u){case"lowercase":return".nan";case"uppercase":return".NAN";case"camelcase":return".NaN"}else if(Number.POSITIVE_INFINITY===d)switch(u){case"lowercase":return".inf";case"uppercase":return".INF";case"camelcase":return".Inf"}else if(Number.NEGATIVE_INFINITY===d)switch(u){case"lowercase":return"-.inf";case"uppercase":return"-.INF";case"camelcase":return"-.Inf"}else if(e.isNegativeZero(d))return"-0.0";const p=d.toString(10);return l.test(p)?p.replace("e",".e"):p}function c(d){return Object.prototype.toString.call(d)==="[object Number]"&&(d%1!==0||e.isNegativeZero(d))}return Vr=new n("tag:yaml.org,2002:float",{kind:"scalar",resolve:r,construct:i,predicate:c,represent:s,defaultStyle:"lowercase"}),Vr}var zr,Gi;function rc(){return Gi||(Gi=1,zr=Zs().extend({implicit:[ec(),nc(),tc(),oc()]})),zr}var Ur,Yi;function ac(){return Yi||(Yi=1,Ur=rc()),Ur}var Hr,Wi;function ic(){if(Wi)return Hr;Wi=1;const e=fn(),n=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9])-([0-9][0-9])$"),t=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9]?)-([0-9][0-9]?)(?:[Tt]|[ \\t]+)([0-9][0-9]?):([0-9][0-9]):([0-9][0-9])(?:\\.([0-9]*))?(?:[ \\t]*(Z|([-+])([0-9][0-9]?)(?::([0-9][0-9]))?))?$");function o(l){return l===null?!1:n.exec(l)!==null||t.exec(l)!==null}function r(l){let s=0,c=null,d=n.exec(l);if(d===null&&(d=t.exec(l)),d===null)throw new Error("Date resolve error");const u=+d[1],p=+d[2]-1,m=+d[3];if(!d[4])return new Date(Date.UTC(u,p,m));const g=+d[4],B=+d[5],N=+d[6];if(d[7]){for(s=d[7].slice(0,3);s.length<3;)s+="0";s=+s}if(d[9]){const Q=+d[10],q=+(d[11]||0);c=(Q*60+q)*6e4,d[9]==="-"&&(c=-c)}const w=new Date(Date.UTC(u,p,m,g,B,N,s));return c&&w.setTime(w.getTime()-c),w}function i(l){return l.toISOString()}return Hr=new e("tag:yaml.org,2002:timestamp",{kind:"scalar",resolve:o,construct:r,instanceOf:Date,represent:i}),Hr}var Kr,Ji;function lc(){if(Ji)return Kr;Ji=1;const e=fn();function n(t){return t==="<<"||t===null}return Kr=new e("tag:yaml.org,2002:merge",{kind:"scalar",resolve:n}),Kr}var Gr,Qi;function sc(){if(Qi)return Gr;Qi=1;const e=fn(),n=`ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=
\r`;function t(l){if(l===null)return!1;let s=0;const c=l.length,d=n;for(let u=0;u<c;u++){const p=d.indexOf(l.charAt(u));if(!(p>64)){if(p<0)return!1;s+=6}}return s%8===0}function o(l){const s=l.replace(/[\r\n=]/g,""),c=s.length,d=n;let u=0;const p=[];for(let g=0;g<c;g++)g%4===0&&g&&(p.push(u>>16&255),p.push(u>>8&255),p.push(u&255)),u=u<<6|d.indexOf(s.charAt(g));const m=c%4*6;return m===0?(p.push(u>>16&255),p.push(u>>8&255),p.push(u&255)):m===18?(p.push(u>>10&255),p.push(u>>2&255)):m===12&&p.push(u>>4&255),new Uint8Array(p)}function r(l){let s="",c=0;const d=l.length,u=n;for(let m=0;m<d;m++)m%3===0&&m&&(s+=u[c>>18&63],s+=u[c>>12&63],s+=u[c>>6&63],s+=u[c&63]),c=(c<<8)+l[m];const p=d%3;return p===0?(s+=u[c>>18&63],s+=u[c>>12&63],s+=u[c>>6&63],s+=u[c&63]):p===2?(s+=u[c>>10&63],s+=u[c>>4&63],s+=u[c<<2&63],s+=u[64]):p===1&&(s+=u[c>>2&63],s+=u[c<<4&63],s+=u[64],s+=u[64]),s}function i(l){return Object.prototype.toString.call(l)==="[object Uint8Array]"}return Gr=new e("tag:yaml.org,2002:binary",{kind:"scalar",resolve:t,construct:o,predicate:i,represent:r}),Gr}var Yr,Xi;function cc(){if(Xi)return Yr;Xi=1;const e=fn(),n=Object.prototype.hasOwnProperty,t=Object.prototype.toString;function o(i){if(i===null)return!0;const l={},s=i;for(let c=0,d=s.length;c<d;c+=1){const u=s[c];let p=!1;if(t.call(u)!=="[object Object]")return!1;let m;for(m in u)if(n.call(u,m))if(!p)p=!0;else return!1;if(!p||n.call(l,m))return!1;Object.defineProperty(l,m,{value:!0})}return!0}function r(i){return i!==null?i:[]}return Yr=new e("tag:yaml.org,2002:omap",{kind:"sequence",resolve:o,construct:r}),Yr}var Wr,Zi;function uc(){if(Zi)return Wr;Zi=1;const e=fn(),n=Object.prototype.toString;function t(r){if(r===null)return!0;const i=r,l=new Array(i.length);for(let s=0,c=i.length;s<c;s+=1){const d=i[s];if(n.call(d)!=="[object Object]")return!1;const u=Object.keys(d);if(u.length!==1)return!1;l[s]=[u[0],d[u[0]]]}return!0}function o(r){if(r===null)return[];const i=r,l=new Array(i.length);for(let s=0,c=i.length;s<c;s+=1){const d=i[s],u=Object.keys(d);l[s]=[u[0],d[u[0]]]}return l}return Wr=new e("tag:yaml.org,2002:pairs",{kind:"sequence",resolve:t,construct:o}),Wr}var Jr,el;function dc(){if(el)return Jr;el=1;const e=fn(),n=Object.prototype.hasOwnProperty;function t(r){if(r===null)return!0;const i=r;for(const l in i)if(n.call(i,l)&&i[l]!==null)return!1;return!0}function o(r){return r!==null?r:{}}return Jr=new e("tag:yaml.org,2002:set",{kind:"mapping",resolve:t,construct:o}),Jr}var Qr,nl;function qa(){return nl||(nl=1,Qr=ac().extend({implicit:[ic(),lc()],explicit:[sc(),cc(),uc(),dc()]})),Qr}var tl;function Ef(){if(tl)return Io;tl=1;const e=Bo(),n=So(),t=wf(),o=qa(),r=Object.prototype.hasOwnProperty,i=1,l=2,s=3,c=4,d=1,u=2,p=3,m=/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F-\x84\x86-\x9F\uFFFE\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/,g=/[\x85\u2028\u2029]/,B=/[,\[\]{}]/,N=/^(?:!|!!|![0-9A-Za-z-]+!)$/,w=/^(?:!|[^,\[\]{}])(?:%[0-9a-f]{2}|[0-9a-z\-#;/?:@&=+$,_.!~*'()\[\]])*$/i;function Q(a){return Object.prototype.toString.call(a)}function q(a){return a===10||a===13}function K(a){return a===9||a===32}function C(a){return a===9||a===32||a===10||a===13}function U(a){return a===44||a===91||a===93||a===123||a===125}function re(a){if(a>=48&&a<=57)return a-48;const _=a|32;return _>=97&&_<=102?_-97+10:-1}function be(a){return a===120?2:a===117?4:a===85?8:0}function Se(a){return a>=48&&a<=57?a-48:-1}function pe(a){switch(a){case 48:return"\0";case 97:return"\x07";case 98:return"\b";case 116:return"	";case 9:return"	";case 110:return`
`;case 118:return"\v";case 102:return"\f";case 114:return"\r";case 101:return"\x1B";case 32:return" ";case 34:return'"';case 47:return"/";case 92:return"\\";case 78:return"";case 95:return" ";case 76:return"\u2028";case 80:return"\u2029";default:return""}}function W(a){return a<=65535?String.fromCharCode(a):String.fromCharCode((a-65536>>10)+55296,(a-65536&1023)+56320)}function D(a,_,R){_==="__proto__"?Object.defineProperty(a,_,{configurable:!0,enumerable:!0,writable:!0,value:R}):a[_]=R}const T=new Array(256),Z=new Array(256);for(let a=0;a<256;a++)T[a]=pe(a)?1:0,Z[a]=pe(a);function oe(a,_){this.input=a,this.filename=_.filename||null,this.schema=_.schema||o,this.onWarning=_.onWarning||null,this.legacy=_.legacy||!1,this.json=_.json||!1,this.listener=_.listener||null,this.maxDepth=typeof _.maxDepth=="number"?_.maxDepth:100,this.maxTotalMergeKeys=typeof _.maxTotalMergeKeys=="number"?_.maxTotalMergeKeys:1e4,this.implicitTypes=this.schema.compiledImplicit,this.typeMap=this.schema.compiledTypeMap,this.length=a.length,this.position=0,this.line=0,this.lineStart=0,this.lineIndent=0,this.depth=0,this.totalMergeKeys=0,this.firstTabInLine=-1,this.documents=[],this.anchorMapTransactions=[]}function Ke(a,_){const R={name:a.filename,buffer:a.input.slice(0,-1),position:a.position,line:a.line,column:a.position-a.lineStart};return R.snippet=t(R),new n(_,R)}function J(a,_){throw Ke(a,_)}function Te(a,_){a.onWarning&&a.onWarning.call(null,Ke(a,_))}function Ne(a,_,R){const E=a.anchorMapTransactions;if(E.length!==0){const x=E[E.length-1];r.call(x,_)||(x[_]={existed:r.call(a.anchorMap,_),value:a.anchorMap[_]})}a.anchorMap[_]=R}function vn(a){a.anchorMapTransactions.push(Object.create(null))}function Ze(a){const _=a.anchorMapTransactions.pop(),R=a.anchorMapTransactions;if(R.length===0)return;const E=R[R.length-1],x=Object.keys(_);for(let F=0,f=x.length;F<f;F+=1){const y=x[F];r.call(E,y)||(E[y]=_[y])}}function pn(a){const _=a.anchorMapTransactions.pop(),R=Object.keys(_);for(let E=R.length-1;E>=0;E-=1){const x=_[R[E]];x.existed?a.anchorMap[R[E]]=x.value:delete a.anchorMap[R[E]]}}function Ge(a){return{position:a.position,line:a.line,lineStart:a.lineStart,lineIndent:a.lineIndent,firstTabInLine:a.firstTabInLine,tag:a.tag,anchor:a.anchor,kind:a.kind,result:a.result}}function gn(a,_){a.position=_.position,a.line=_.line,a.lineStart=_.lineStart,a.lineIndent=_.lineIndent,a.firstTabInLine=_.firstTabInLine,a.tag=_.tag,a.anchor=_.anchor,a.kind=_.kind,a.result=_.result}const Bn={YAML:function(_,R,E){_.version!==null&&J(_,"duplication of %YAML directive"),E.length!==1&&J(_,"YAML directive accepts exactly one argument");const x=/^([0-9]+)\.([0-9]+)$/.exec(E[0]);x===null&&J(_,"ill-formed argument of the YAML directive");const F=parseInt(x[1],10),f=parseInt(x[2],10);F!==1&&J(_,"unacceptable YAML version of the document"),_.version=E[0],_.checkLineBreaks=f<2,f!==1&&f!==2&&Te(_,"unsupported YAML version of the document")},TAG:function(_,R,E){let x;E.length!==2&&J(_,"TAG directive accepts exactly two arguments");const F=E[0];x=E[1],N.test(F)||J(_,"ill-formed tag handle (first argument) of the TAG directive"),r.call(_.tagMap,F)&&J(_,'there is a previously declared suffix for "'+F+'" tag handle'),w.test(x)||J(_,"ill-formed tag prefix (second argument) of the TAG directive");try{x=decodeURIComponent(x)}catch{J(_,"tag prefix is malformed: "+x)}_.tagMap[F]=x}};function Ue(a,_,R,E){if(_<R){const x=a.input.slice(_,R);if(E)for(let F=0,f=x.length;F<f;F+=1){const y=x.charCodeAt(F);y===9||y>=32&&y<=1114111||J(a,"expected valid JSON character")}else m.test(x)&&J(a,"the stream contains non-printable characters");a.result+=x}}function He(a,_,R,E){e.isObject(R)||J(a,"cannot merge mappings; the provided source object is unacceptable");const x=Object.keys(R);for(let F=0,f=x.length;F<f;F+=1){const y=x[F];a.maxTotalMergeKeys!==-1&&++a.totalMergeKeys>a.maxTotalMergeKeys&&J(a,"merge keys exceeded maxTotalMergeKeys ("+a.maxTotalMergeKeys+")"),r.call(_,y)||(D(_,y,R[y]),E[y]=!0)}}function O(a,_,R,E,x,F,f,y,j){if(Array.isArray(x)){x=Array.prototype.slice.call(x);for(let P=0,k=x.length;P<k;P+=1)Array.isArray(x[P])&&J(a,"nested arrays are not supported inside keys"),typeof x=="object"&&Q(x[P])==="[object Object]"&&(x[P]="[object Object]")}if(typeof x=="object"&&Q(x)==="[object Object]"&&(x="[object Object]"),x=String(x),_===null&&(_={}),E==="tag:yaml.org,2002:merge")if(Array.isArray(F))for(let P=0,k=F.length;P<k;P+=1)He(a,_,F[P],R);else He(a,_,F,R);else!a.json&&!r.call(R,x)&&r.call(_,x)&&(a.line=f||a.line,a.lineStart=y||a.lineStart,a.position=j||a.position,J(a,"duplicated mapping key")),D(_,x,F),delete R[x];return _}function ie(a){const _=a.input.charCodeAt(a.position);_===10?a.position++:_===13?(a.position++,a.input.charCodeAt(a.position)===10&&a.position++):J(a,"a line break is expected"),a.line+=1,a.lineStart=a.position,a.firstTabInLine=-1}function H(a,_,R){let E=0,x=a.input.charCodeAt(a.position);for(;x!==0;){for(;K(x);)x===9&&a.firstTabInLine===-1&&(a.firstTabInLine=a.position),x=a.input.charCodeAt(++a.position);if(_&&x===35)do x=a.input.charCodeAt(++a.position);while(x!==10&&x!==13&&x!==0);if(q(x))for(ie(a),x=a.input.charCodeAt(a.position),E++,a.lineIndent=0;x===32;)a.lineIndent++,x=a.input.charCodeAt(++a.position);else break}return R!==-1&&E!==0&&a.lineIndent<R&&Te(a,"deficient indentation"),E}function ce(a){let _=a.position,R=a.input.charCodeAt(_);return!!((R===45||R===46)&&R===a.input.charCodeAt(_+1)&&R===a.input.charCodeAt(_+2)&&(_+=3,R=a.input.charCodeAt(_),R===0||C(R)))}function ye(a,_){_===1?a.result+=" ":_>1&&(a.result+=e.repeat(`
`,_-1))}function h(a,_,R){let E,x,F,f,y,j;const P=a.kind,k=a.result;let V=a.input.charCodeAt(a.position);if(C(V)||U(V)||V===35||V===38||V===42||V===33||V===124||V===62||V===39||V===34||V===37||V===64||V===96)return!1;if(V===63||V===45){const $=a.input.charCodeAt(a.position+1);if(C($)||R&&U($))return!1}for(a.kind="scalar",a.result="",E=x=a.position,F=!1;V!==0;){if(V===58){const $=a.input.charCodeAt(a.position+1);if(C($)||R&&U($))break}else if(V===35){const $=a.input.charCodeAt(a.position-1);if(C($))break}else{if(a.position===a.lineStart&&ce(a)||R&&U(V))break;if(q(V))if(f=a.line,y=a.lineStart,j=a.lineIndent,H(a,!1,-1),a.lineIndent>=_){F=!0,V=a.input.charCodeAt(a.position);continue}else{a.position=x,a.line=f,a.lineStart=y,a.lineIndent=j;break}}F&&(Ue(a,E,x,!1),ye(a,a.line-f),E=x=a.position,F=!1),K(V)||(x=a.position+1),V=a.input.charCodeAt(++a.position)}return Ue(a,E,x,!1),a.result?!0:(a.kind=P,a.result=k,!1)}function v(a,_){let R,E,x=a.input.charCodeAt(a.position);if(x!==39)return!1;for(a.kind="scalar",a.result="",a.position++,R=E=a.position;(x=a.input.charCodeAt(a.position))!==0;)if(x===39)if(Ue(a,R,a.position,!0),x=a.input.charCodeAt(++a.position),x===39)R=a.position,a.position++,E=a.position;else return!0;else q(x)?(Ue(a,R,E,!0),ye(a,H(a,!1,_)),R=E=a.position):a.position===a.lineStart&&ce(a)?J(a,"unexpected end of the document within a single quoted scalar"):(a.position++,K(x)||(E=a.position));J(a,"unexpected end of the stream within a single quoted scalar")}function b(a,_){let R,E,x,F=a.input.charCodeAt(a.position);if(F!==34)return!1;for(a.kind="scalar",a.result="",a.position++,R=E=a.position;(F=a.input.charCodeAt(a.position))!==0;){if(F===34)return Ue(a,R,a.position,!0),a.position++,!0;if(F===92){if(Ue(a,R,a.position,!0),F=a.input.charCodeAt(++a.position),q(F))H(a,!1,_);else if(F<256&&T[F])a.result+=Z[F],a.position++;else if((x=be(F))>0){let f=x,y=0;for(;f>0;f--)F=a.input.charCodeAt(++a.position),(x=re(F))>=0?y=(y<<4)+x:J(a,"expected hexadecimal character");a.result+=W(y),a.position++}else J(a,"unknown escape sequence");R=E=a.position}else q(F)?(Ue(a,R,E,!0),ye(a,H(a,!1,_)),R=E=a.position):a.position===a.lineStart&&ce(a)?J(a,"unexpected end of the document within a double quoted scalar"):(a.position++,K(F)||(E=a.position))}J(a,"unexpected end of the stream within a double quoted scalar")}function I(a,_){let R=!0,E,x,F;const f=a.tag;let y;const j=a.anchor;let P,k,V,$;const se=Object.create(null);let le,fe,he,we=a.input.charCodeAt(a.position);if(we===91)P=93,$=!1,y=[];else if(we===123)P=125,$=!0,y={};else return!1;for(a.anchor!==null&&Ne(a,a.anchor,y),we=a.input.charCodeAt(++a.position);we!==0;){if(H(a,!0,_),we=a.input.charCodeAt(a.position),we===P)return a.position++,a.tag=f,a.anchor=j,a.kind=$?"mapping":"sequence",a.result=y,!0;if(R?we===44&&J(a,"expected the node content, but found ','"):J(a,"missed comma between flow collection entries"),fe=le=he=null,k=V=!1,we===63){const $e=a.input.charCodeAt(a.position+1);C($e)&&(k=V=!0,a.position++,H(a,!0,_))}E=a.line,x=a.lineStart,F=a.position,ne(a,_,i,!1,!0),fe=a.tag,le=a.result,H(a,!0,_),we=a.input.charCodeAt(a.position),(V||a.line===E)&&we===58&&(k=!0,we=a.input.charCodeAt(++a.position),H(a,!0,_),ne(a,_,i,!1,!0),he=a.result),$?O(a,y,se,fe,le,he,E,x,F):k?y.push(O(a,null,se,fe,le,he,E,x,F)):y.push(le),H(a,!0,_),we=a.input.charCodeAt(a.position),we===44?(R=!0,we=a.input.charCodeAt(++a.position)):R=!1}J(a,"unexpected end of the stream within a flow collection")}function L(a,_){let R,E=d,x=!1,F=!1,f=_,y=0,j=!1,P,k=a.input.charCodeAt(a.position);if(k===124)R=!1;else if(k===62)R=!0;else return!1;for(a.kind="scalar",a.result="";k!==0;)if(k=a.input.charCodeAt(++a.position),k===43||k===45)d===E?E=k===43?p:u:J(a,"repeat of a chomping mode identifier");else if((P=Se(k))>=0)P===0?J(a,"bad explicit indentation width of a block scalar; it cannot be less than one"):F?J(a,"repeat of an indentation width identifier"):(f=_+P-1,F=!0);else break;if(K(k)){do k=a.input.charCodeAt(++a.position);while(K(k));if(k===35)do k=a.input.charCodeAt(++a.position);while(!q(k)&&k!==0)}for(;k!==0;){for(ie(a),a.lineIndent=0,k=a.input.charCodeAt(a.position);(!F||a.lineIndent<f)&&k===32;)a.lineIndent++,k=a.input.charCodeAt(++a.position);if(!F&&a.lineIndent>f&&(f=a.lineIndent),q(k)){y++;continue}if(!F&&f===0&&J(a,"missing indentation for block scalar"),a.lineIndent<f){E===p?a.result+=e.repeat(`
`,x?1+y:y):E===d&&x&&(a.result+=`
`);break}R?K(k)?(j=!0,a.result+=e.repeat(`
`,x?1+y:y)):j?(j=!1,a.result+=e.repeat(`
`,y+1)):y===0?x&&(a.result+=" "):a.result+=e.repeat(`
`,y):a.result+=e.repeat(`
`,x?1+y:y),x=!0,F=!0,y=0;const V=a.position;for(;!q(k)&&k!==0;)k=a.input.charCodeAt(++a.position);Ue(a,V,a.position,!1)}return!0}function S(a,_){const R=a.tag,E=a.anchor,x=[];let F=!1;if(a.firstTabInLine!==-1)return!1;a.anchor!==null&&Ne(a,a.anchor,x);let f=a.input.charCodeAt(a.position);for(;f!==0&&(a.firstTabInLine!==-1&&(a.position=a.firstTabInLine,J(a,"tab characters must not be used in indentation")),f===45);){const y=a.input.charCodeAt(a.position+1);if(!C(y))break;if(F=!0,a.position++,H(a,!0,-1)&&a.lineIndent<=_){x.push(null),f=a.input.charCodeAt(a.position);continue}const j=a.line;if(ne(a,_,s,!1,!0),x.push(a.result),H(a,!0,-1),f=a.input.charCodeAt(a.position),(a.line===j||a.lineIndent>_)&&f!==0)J(a,"bad indentation of a sequence entry");else if(a.lineIndent<_)break}return F?(a.tag=R,a.anchor=E,a.kind="sequence",a.result=x,!0):!1}function ee(a,_,R){let E,x,F,f;const y=a.tag,j=a.anchor,P={},k=Object.create(null);let V=null,$=null,se=null,le=!1,fe=!1;if(a.firstTabInLine!==-1)return!1;a.anchor!==null&&Ne(a,a.anchor,P);let he=a.input.charCodeAt(a.position);for(;he!==0;){!le&&a.firstTabInLine!==-1&&(a.position=a.firstTabInLine,J(a,"tab characters must not be used in indentation"));const we=a.input.charCodeAt(a.position+1),$e=a.line;if((he===63||he===58)&&C(we))he===63?(le&&(O(a,P,k,V,$,null,x,F,f),V=$=se=null),fe=!0,le=!0,E=!0):le?(le=!1,E=!0):J(a,"incomplete explicit mapping pair; a key node is missed; or followed by a non-tabulated empty line"),a.position+=1,he=we;else{if(x=a.line,F=a.lineStart,f=a.position,!ne(a,R,l,!1,!0))break;if(a.line===$e){for(he=a.input.charCodeAt(a.position);K(he);)he=a.input.charCodeAt(++a.position);if(he===58)he=a.input.charCodeAt(++a.position),C(he)||J(a,"a whitespace character is expected after the key-value separator within a block mapping"),le&&(O(a,P,k,V,$,null,x,F,f),V=$=se=null),fe=!0,le=!1,E=!1,V=a.tag,$=a.result;else if(fe)J(a,"can not read an implicit mapping pair; a colon is missed");else return a.tag=y,a.anchor=j,!0}else if(fe)J(a,"can not read a block mapping entry; a multiline key may not be an implicit key");else return a.tag=y,a.anchor=j,!0}if((a.line===$e||a.lineIndent>_)&&(le&&(x=a.line,F=a.lineStart,f=a.position),ne(a,_,c,!0,E)&&(le?$=a.result:se=a.result),le||(O(a,P,k,V,$,se,x,F,f),V=$=se=null),H(a,!0,-1),he=a.input.charCodeAt(a.position)),(a.line===$e||a.lineIndent>_)&&he!==0)J(a,"bad indentation of a mapping entry");else if(a.lineIndent<_)break}return le&&O(a,P,k,V,$,null,x,F,f),fe&&(a.tag=y,a.anchor=j,a.kind="mapping",a.result=P),fe}function X(a){let _=!1,R=!1,E,x,F=a.input.charCodeAt(a.position);if(F!==33)return!1;a.tag!==null&&J(a,"duplication of a tag property"),F=a.input.charCodeAt(++a.position),F===60?(_=!0,F=a.input.charCodeAt(++a.position)):F===33?(R=!0,E="!!",F=a.input.charCodeAt(++a.position)):E="!";let f=a.position;if(_){do F=a.input.charCodeAt(++a.position);while(F!==0&&F!==62);a.position<a.length?(x=a.input.slice(f,a.position),F=a.input.charCodeAt(++a.position)):J(a,"unexpected end of the stream within a verbatim tag")}else{for(;F!==0&&!C(F);)F===33&&(R?J(a,"tag suffix cannot contain exclamation marks"):(E=a.input.slice(f-1,a.position+1),N.test(E)||J(a,"named tag handle cannot contain such characters"),R=!0,f=a.position+1)),F=a.input.charCodeAt(++a.position);x=a.input.slice(f,a.position),B.test(x)&&J(a,"tag suffix cannot contain flow indicator characters")}x&&!w.test(x)&&J(a,"tag name cannot contain such characters: "+x);try{x=decodeURIComponent(x)}catch{J(a,"tag name is malformed: "+x)}return _?a.tag=x:r.call(a.tagMap,E)?a.tag=a.tagMap[E]+x:E==="!"?a.tag="!"+x:E==="!!"?a.tag="tag:yaml.org,2002:"+x:J(a,'undeclared tag handle "'+E+'"'),!0}function Y(a){let _=a.input.charCodeAt(a.position);if(_!==38)return!1;a.anchor!==null&&J(a,"duplication of an anchor property"),_=a.input.charCodeAt(++a.position);const R=a.position;for(;_!==0&&!C(_)&&!U(_);)_=a.input.charCodeAt(++a.position);return a.position===R&&J(a,"name of an anchor node must contain at least one character"),a.anchor=a.input.slice(R,a.position),!0}function M(a){let _=a.input.charCodeAt(a.position);if(_!==42)return!1;_=a.input.charCodeAt(++a.position);const R=a.position;for(;_!==0&&!C(_)&&!U(_);)_=a.input.charCodeAt(++a.position);a.position===R&&J(a,"name of an alias node must contain at least one character");const E=a.input.slice(R,a.position);return r.call(a.anchorMap,E)||J(a,'unidentified alias "'+E+'"'),a.result=a.anchorMap[E],H(a,!0,-1),!0}function me(a,_,R,E){const x=Ge(a);return vn(a),gn(a,_),a.tag=null,a.anchor=null,a.kind=null,a.result=null,ee(a,R,E)&&a.kind==="mapping"?(Ze(a),!0):(pn(a),gn(a,x),!1)}function ne(a,_,R,E,x){let F,f,y=1,j=!1,P=!1,k=null,V,$,se;a.depth>=a.maxDepth&&J(a,"nesting exceeded maxDepth ("+a.maxDepth+")"),a.depth+=1,a.listener!==null&&a.listener("open",a),a.tag=null,a.anchor=null,a.kind=null,a.result=null;const le=F=f=c===R||s===R;if(E&&H(a,!0,-1)&&(j=!0,a.lineIndent>_?y=1:a.lineIndent===_?y=0:a.lineIndent<_&&(y=-1)),y===1)for(;;){const fe=a.input.charCodeAt(a.position),he=Ge(a);if(j&&(fe===33&&a.tag!==null||fe===38&&a.anchor!==null)||!X(a)&&!Y(a))break;k===null&&(k=he),H(a,!0,-1)?(j=!0,f=le,a.lineIndent>_?y=1:a.lineIndent===_?y=0:a.lineIndent<_&&(y=-1)):f=!1}if(f&&(f=j||x),y===1||c===R)if(i===R||l===R?$=_:$=_+1,se=a.position-a.lineStart,y===1)if(f&&(S(a,se)||ee(a,se,$))||I(a,$))P=!0;else{const fe=a.input.charCodeAt(a.position);k!==null&&le&&!f&&fe!==124&&fe!==62&&me(a,k,k.position-k.lineStart,$)||F&&L(a,$)||v(a,$)||b(a,$)?P=!0:M(a)?(P=!0,(a.tag!==null||a.anchor!==null)&&J(a,"alias node should not have any properties")):h(a,$,i===R)&&(P=!0,a.tag===null&&(a.tag="?")),a.anchor!==null&&Ne(a,a.anchor,a.result)}else y===0&&(P=f&&S(a,se));if(a.tag===null)a.anchor!==null&&Ne(a,a.anchor,a.result);else if(a.tag==="?"){a.result!==null&&a.kind!=="scalar"&&J(a,'unacceptable node kind for !<?> tag; it should be "scalar", not "'+a.kind+'"');for(let fe=0,he=a.implicitTypes.length;fe<he;fe+=1)if(V=a.implicitTypes[fe],V.resolve(a.result)){a.result=V.construct(a.result),a.tag=V.tag,a.anchor!==null&&Ne(a,a.anchor,a.result);break}}else if(a.tag!=="!"){if(r.call(a.typeMap[a.kind||"fallback"],a.tag))V=a.typeMap[a.kind||"fallback"][a.tag];else{V=null;const fe=a.typeMap.multi[a.kind||"fallback"];for(let he=0,we=fe.length;he<we;he+=1)if(a.tag.slice(0,fe[he].tag.length)===fe[he].tag){V=fe[he];break}}V||J(a,"unknown tag !<"+a.tag+">"),a.result!==null&&V.kind!==a.kind&&J(a,"unacceptable node kind for !<"+a.tag+'> tag; it should be "'+V.kind+'", not "'+a.kind+'"'),V.resolve(a.result,a.tag)?(a.result=V.construct(a.result,a.tag),a.anchor!==null&&Ne(a,a.anchor,a.result)):J(a,"cannot resolve a node with !<"+a.tag+"> explicit tag")}return a.listener!==null&&a.listener("close",a),a.depth-=1,a.tag!==null||a.anchor!==null||P}function de(a){const _=a.position;let R=!1,E;for(a.version=null,a.checkLineBreaks=a.legacy,a.tagMap=Object.create(null),a.anchorMap=Object.create(null);(E=a.input.charCodeAt(a.position))!==0&&(H(a,!0,-1),E=a.input.charCodeAt(a.position),!(a.lineIndent>0||E!==37));){R=!0,E=a.input.charCodeAt(++a.position);let x=a.position;for(;E!==0&&!C(E);)E=a.input.charCodeAt(++a.position);const F=a.input.slice(x,a.position),f=[];for(F.length<1&&J(a,"directive name must not be less than one character in length");E!==0;){for(;K(E);)E=a.input.charCodeAt(++a.position);if(E===35){do E=a.input.charCodeAt(++a.position);while(E!==0&&!q(E));break}if(q(E))break;for(x=a.position;E!==0&&!C(E);)E=a.input.charCodeAt(++a.position);f.push(a.input.slice(x,a.position))}E!==0&&ie(a),r.call(Bn,F)?Bn[F](a,F,f):Te(a,'unknown document directive "'+F+'"')}if(H(a,!0,-1),a.lineIndent===0&&a.input.charCodeAt(a.position)===45&&a.input.charCodeAt(a.position+1)===45&&a.input.charCodeAt(a.position+2)===45?(a.position+=3,H(a,!0,-1)):R&&J(a,"directives end mark is expected"),ne(a,a.lineIndent-1,c,!1,!0),H(a,!0,-1),a.checkLineBreaks&&g.test(a.input.slice(_,a.position))&&Te(a,"non-ASCII line breaks are interpreted as content"),a.documents.push(a.result),a.position===a.lineStart&&ce(a)){a.input.charCodeAt(a.position)===46&&(a.position+=3,H(a,!0,-1));return}a.position<a.length-1&&J(a,"end of the stream or a document separator is expected")}function ge(a,_){a=String(a),_=_||{},a.length!==0&&(a.charCodeAt(a.length-1)!==10&&a.charCodeAt(a.length-1)!==13&&(a+=`
`),a.charCodeAt(0)===65279&&(a=a.slice(1)));const R=new oe(a,_),E=a.indexOf("\0");for(E!==-1&&(R.position=E,J(R,"null byte is not allowed in input")),R.input+="\0";R.input.charCodeAt(R.position)===32;)R.lineIndent+=1,R.position+=1;for(;R.position<R.length-1;)de(R);return R.documents}function Be(a,_,R){_!==null&&typeof _=="object"&&typeof R>"u"&&(R=_,_=null);const E=ge(a,R);if(typeof _!="function")return E;for(let x=0,F=E.length;x<F;x+=1)_(E[x])}function Ce(a,_){const R=ge(a,_);if(R.length!==0){if(R.length===1)return R[0];throw new n("expected a single document in the stream, but found more")}}return Io.loadAll=Be,Io.load=Ce,Io}var Xr={},ol;function Cf(){if(ol)return Xr;ol=1;const e=Bo(),n=So(),t=qa(),o=Object.prototype.toString,r=Object.prototype.hasOwnProperty,i=65279,l=9,s=10,c=13,d=32,u=33,p=34,m=35,g=37,B=38,N=39,w=42,Q=44,q=45,K=58,C=61,U=62,re=63,be=64,Se=91,pe=93,W=96,D=123,T=124,Z=125,oe={};oe[0]="\\0",oe[7]="\\a",oe[8]="\\b",oe[9]="\\t",oe[10]="\\n",oe[11]="\\v",oe[12]="\\f",oe[13]="\\r",oe[27]="\\e",oe[34]='\\"',oe[92]="\\\\",oe[133]="\\N",oe[160]="\\_",oe[8232]="\\L",oe[8233]="\\P";const Ke=["y","Y","yes","Yes","YES","on","On","ON","n","N","no","No","NO","off","Off","OFF"],J=/^[-+]?[0-9_]+(?::[0-9_]+)+(?:\.[0-9_]*)?$/;function Te(f,y){if(y===null)return{};const j={},P=Object.keys(y);for(let k=0,V=P.length;k<V;k+=1){let $=P[k],se=String(y[$]);$.slice(0,2)==="!!"&&($="tag:yaml.org,2002:"+$.slice(2));const le=f.compiledTypeMap.fallback[$];le&&r.call(le.styleAliases,se)&&(se=le.styleAliases[se]),j[$]=se}return j}function Ne(f){let y,j;const P=f.toString(16).toUpperCase();if(f<=255)y="x",j=2;else if(f<=65535)y="u",j=4;else if(f<=4294967295)y="U",j=8;else throw new n("code point within a string may not be greater than 0xFFFFFFFF");return"\\"+y+e.repeat("0",j-P.length)+P}const vn=1,Ze=2;function pn(f){this.schema=f.schema||t,this.indent=Math.max(1,f.indent||2),this.noArrayIndent=f.noArrayIndent||!1,this.skipInvalid=f.skipInvalid||!1,this.flowLevel=e.isNothing(f.flowLevel)?-1:f.flowLevel,this.styleMap=Te(this.schema,f.styles||null),this.sortKeys=f.sortKeys||!1,this.lineWidth=f.lineWidth||80,this.noRefs=f.noRefs||!1,this.noCompatMode=f.noCompatMode||!1,this.condenseFlow=f.condenseFlow||!1,this.quotingType=f.quotingType==='"'?Ze:vn,this.forceQuotes=f.forceQuotes||!1,this.replacer=typeof f.replacer=="function"?f.replacer:null,this.implicitTypes=this.schema.compiledImplicit,this.explicitTypes=this.schema.compiledExplicit,this.tag=null,this.result="",this.duplicates=[],this.usedDuplicates=null}function Ge(f,y){const j=e.repeat(" ",y);let P=0,k="";const V=f.length;for(;P<V;){let $;const se=f.indexOf(`
`,P);se===-1?($=f.slice(P),P=V):($=f.slice(P,se+1),P=se+1),$.length&&$!==`
`&&(k+=j),k+=$}return k}function gn(f,y){return`
`+e.repeat(" ",f.indent*y)}function Bn(f,y){for(let j=0,P=f.implicitTypes.length;j<P;j+=1)if(f.implicitTypes[j].resolve(y))return!0;return!1}function Ue(f){return f===d||f===l}function He(f){return f>=32&&f<=126||f>=161&&f<=55295&&f!==8232&&f!==8233||f>=57344&&f<=65533&&f!==i||f>=65536&&f<=1114111}function O(f){return He(f)&&f!==i&&f!==c&&f!==s}function ie(f,y,j){const P=O(f),k=P&&!Ue(f);return(j?P:P&&f!==Q&&f!==Se&&f!==pe&&f!==D&&f!==Z)&&f!==m&&!(y===K&&!k)||O(y)&&!Ue(y)&&f===m||y===K&&k}function H(f){return He(f)&&f!==i&&!Ue(f)&&f!==q&&f!==re&&f!==K&&f!==Q&&f!==Se&&f!==pe&&f!==D&&f!==Z&&f!==m&&f!==B&&f!==w&&f!==u&&f!==T&&f!==C&&f!==U&&f!==N&&f!==p&&f!==g&&f!==be&&f!==W}function ce(f){return!Ue(f)&&f!==K}function ye(f,y){const j=f.charCodeAt(y);let P;return j>=55296&&j<=56319&&y+1<f.length&&(P=f.charCodeAt(y+1),P>=56320&&P<=57343)?(j-55296)*1024+P-56320+65536:j}function h(f){return/^\n* /.test(f)}const v=1,b=2,I=3,L=4,S=5;function ee(f,y,j,P,k,V,$,se){let le,fe=0,he=null,we=!1,$e=!1;const za=P!==-1;let zt=-1,Ut=H(ye(f,0))&&ce(ye(f,f.length-1));if(y||$)for(le=0;le<f.length;fe>=65536?le+=2:le++){if(fe=ye(f,le),!He(fe))return S;Ut=Ut&&ie(fe,he,se),he=fe}else{for(le=0;le<f.length;fe>=65536?le+=2:le++){if(fe=ye(f,le),fe===s)we=!0,za&&($e=$e||le-zt-1>P&&f[zt+1]!==" ",zt=le);else if(!He(fe))return S;Ut=Ut&&ie(fe,he,se),he=fe}$e=$e||za&&le-zt-1>P&&f[zt+1]!==" "}return!we&&!$e?Ut&&!$&&!k(f)?v:V===Ze?S:b:j>9&&h(f)?S:$?V===Ze?S:b:$e?L:I}function X(f,y,j,P,k){f.dump=(function(){if(y.length===0)return f.quotingType===Ze?'""':"''";if(!f.noCompatMode&&(Ke.indexOf(y)!==-1||J.test(y)))return f.quotingType===Ze?'"'+y+'"':"'"+y+"'";const V=f.indent*Math.max(1,j),$=f.lineWidth===-1?-1:Math.max(Math.min(f.lineWidth,40),f.lineWidth-V),se=P||f.flowLevel>-1&&j>=f.flowLevel;function le(fe){return Bn(f,fe)}switch(ee(y,se,f.indent,$,le,f.quotingType,f.forceQuotes&&!P,k)){case v:return y;case b:return"'"+y.replace(/'/g,"''")+"'";case I:return"|"+Y(y,f.indent)+M(Ge(y,V));case L:return">"+Y(y,f.indent)+M(Ge(me(y,$),V));case S:return'"'+de(y)+'"';default:throw new n("impossible error: invalid scalar style")}})()}function Y(f,y){const j=h(f)?String(y):"",P=f[f.length-1]===`
`,V=P&&(f[f.length-2]===`
`||f===`
`)?"+":P?"":"-";return j+V+`
`}function M(f){return f[f.length-1]===`
`?f.slice(0,-1):f}function me(f,y){const j=/(\n+)([^\n]*)/g;let P=(function(){let se=f.indexOf(`
`);return se=se!==-1?se:f.length,j.lastIndex=se,ne(f.slice(0,se),y)})(),k=f[0]===`
`||f[0]===" ",V,$;for(;$=j.exec(f);){const se=$[1],le=$[2];V=le[0]===" ",P+=se+(!k&&!V&&le!==""?`
`:"")+ne(le,y),k=V}return P}function ne(f,y){if(f===""||f[0]===" ")return f;const j=/ [^ ]/g;let P,k=0,V,$=0,se=0,le="";for(;P=j.exec(f);)se=P.index,se-k>y&&(V=$>k?$:se,le+=`
`+f.slice(k,V),k=V+1),$=se;return le+=`
`,f.length-k>y&&$>k?le+=f.slice(k,$)+`
`+f.slice($+1):le+=f.slice(k),le.slice(1)}function de(f){let y="",j=0;for(let P=0;P<f.length;j>=65536?P+=2:P++){j=ye(f,P);const k=oe[j];!k&&He(j)?(y+=f[P],j>=65536&&(y+=f[P+1])):y+=k||Ne(j)}return y}function ge(f,y,j){let P="";const k=f.tag;for(let V=0,$=j.length;V<$;V+=1){let se=j[V];f.replacer&&(se=f.replacer.call(j,String(V),se)),(R(f,y,se,!1,!1)||typeof se>"u"&&R(f,y,null,!1,!1))&&(P!==""&&(P+=","+(f.condenseFlow?"":" ")),P+=f.dump)}f.tag=k,f.dump="["+P+"]"}function Be(f,y,j,P){let k="";const V=f.tag;for(let $=0,se=j.length;$<se;$+=1){let le=j[$];f.replacer&&(le=f.replacer.call(j,String($),le)),(R(f,y+1,le,!0,!0,!1,!0)||typeof le>"u"&&R(f,y+1,null,!0,!0,!1,!0))&&((!P||k!=="")&&(k+=gn(f,y)),f.dump&&s===f.dump.charCodeAt(0)?k+="-":k+="- ",k+=f.dump)}f.tag=V,f.dump=k||"[]"}function Ce(f,y,j){let P="";const k=f.tag,V=Object.keys(j);for(let $=0,se=V.length;$<se;$+=1){let le="";P!==""&&(le+=", "),f.condenseFlow&&(le+='"');const fe=V[$];let he=j[fe];f.replacer&&(he=f.replacer.call(j,fe,he)),R(f,y,fe,!1,!1)&&(f.dump.length>1024&&(le+="? "),le+=f.dump+(f.condenseFlow?'"':"")+":"+(f.condenseFlow?"":" "),R(f,y,he,!1,!1)&&(le+=f.dump,P+=le))}f.tag=k,f.dump="{"+P+"}"}function a(f,y,j,P){let k="";const V=f.tag,$=Object.keys(j);if(f.sortKeys===!0)$.sort();else if(typeof f.sortKeys=="function")$.sort(f.sortKeys);else if(f.sortKeys)throw new n("sortKeys must be a boolean or a function");for(let se=0,le=$.length;se<le;se+=1){let fe="";(!P||k!=="")&&(fe+=gn(f,y));const he=$[se];let we=j[he];if(f.replacer&&(we=f.replacer.call(j,he,we)),!R(f,y+1,he,!0,!0,!0))continue;const $e=f.tag!==null&&f.tag!=="?"||f.dump&&f.dump.length>1024;$e&&(f.dump&&s===f.dump.charCodeAt(0)?fe+="?":fe+="? "),fe+=f.dump,$e&&(fe+=gn(f,y)),R(f,y+1,we,!0,$e)&&(f.dump&&s===f.dump.charCodeAt(0)?fe+=":":fe+=": ",fe+=f.dump,k+=fe)}f.tag=V,f.dump=k||"{}"}function _(f,y,j){const P=j?f.explicitTypes:f.implicitTypes;for(let k=0,V=P.length;k<V;k+=1){const $=P[k];if(($.instanceOf||$.predicate)&&(!$.instanceOf||typeof y=="object"&&y instanceof $.instanceOf)&&(!$.predicate||$.predicate(y))){if(j?$.multi&&$.representName?f.tag=$.representName(y):f.tag=$.tag:f.tag="?",$.represent){const se=f.styleMap[$.tag]||$.defaultStyle;let le;if(o.call($.represent)==="[object Function]")le=$.represent(y,se);else if(r.call($.represent,se))le=$.represent[se](y,se);else throw new n("!<"+$.tag+'> tag resolver accepts not "'+se+'" style');f.dump=le}return!0}}return!1}function R(f,y,j,P,k,V,$){f.tag=null,f.dump=j,_(f,j,!1)||_(f,j,!0);const se=o.call(f.dump),le=P;P&&(P=f.flowLevel<0||f.flowLevel>y);const fe=se==="[object Object]"||se==="[object Array]";let he,we;if(fe&&(he=f.duplicates.indexOf(j),we=he!==-1),(f.tag!==null&&f.tag!=="?"||we||f.indent!==2&&y>0)&&(k=!1),we&&f.usedDuplicates[he])f.dump="*ref_"+he;else{if(fe&&we&&!f.usedDuplicates[he]&&(f.usedDuplicates[he]=!0),se==="[object Object]")P&&Object.keys(f.dump).length!==0?(a(f,y,f.dump,k),we&&(f.dump="&ref_"+he+f.dump)):(Ce(f,y,f.dump),we&&(f.dump="&ref_"+he+" "+f.dump));else if(se==="[object Array]")P&&f.dump.length!==0?(f.noArrayIndent&&!$&&y>0?Be(f,y-1,f.dump,k):Be(f,y,f.dump,k),we&&(f.dump="&ref_"+he+f.dump)):(ge(f,y,f.dump),we&&(f.dump="&ref_"+he+" "+f.dump));else if(se==="[object String]")f.tag!=="?"&&X(f,f.dump,y,V,le);else{if(se==="[object Undefined]")return!1;if(f.skipInvalid)return!1;throw new n("unacceptable kind of an object to dump "+se)}if(f.tag!==null&&f.tag!=="?"){let $e=encodeURI(f.tag[0]==="!"?f.tag.slice(1):f.tag).replace(/!/g,"%21");f.tag[0]==="!"?$e="!"+$e:$e.slice(0,18)==="tag:yaml.org,2002:"?$e="!!"+$e.slice(18):$e="!<"+$e+">",f.dump=$e+" "+f.dump}}return!0}function E(f,y){const j=[],P=[];x(f,j,P);const k=P.length;for(let V=0;V<k;V+=1)y.duplicates.push(j[P[V]]);y.usedDuplicates=new Array(k)}function x(f,y,j){if(f!==null&&typeof f=="object"){const P=y.indexOf(f);if(P!==-1)j.indexOf(P)===-1&&j.push(P);else if(y.push(f),Array.isArray(f))for(let k=0,V=f.length;k<V;k+=1)x(f[k],y,j);else{const k=Object.keys(f);for(let V=0,$=k.length;V<$;V+=1)x(f[k[V]],y,j)}}}function F(f,y){y=y||{};const j=new pn(y);j.noRefs||E(f,j);let P=f;return j.replacer&&(P=j.replacer.call({"":P},"",P)),R(j,0,P,!0,!0)?j.dump+`
`:""}return Xr.dump=F,Xr}var rl;function Of(){if(rl)return en;rl=1;const e=Ef(),n=Cf();function t(o,r){return function(){throw new Error("Function yaml."+o+" is removed in js-yaml 4. Use yaml."+r+" instead, which is now safe by default.")}}return en.Type=fn(),en.Schema=Ws(),en.FAILSAFE_SCHEMA=Zs(),en.JSON_SCHEMA=rc(),en.CORE_SCHEMA=ac(),en.DEFAULT_SCHEMA=qa(),en.load=e.load,en.loadAll=e.loadAll,en.dump=n.dump,en.YAMLException=So(),en.types={binary:sc(),float:oc(),map:Xs(),null:ec(),pairs:uc(),set:dc(),timestamp:ic(),bool:nc(),int:tc(),merge:lc(),omap:cc(),seq:Qs(),str:Js()},en.safeLoad=t("safeLoad","load"),en.safeLoadAll=t("safeLoadAll","loadAll"),en.safeDump=t("safeDump","dump"),en}var If=Of();const Wo=Sf(If),{Type:uv,Schema:dv,FAILSAFE_SCHEMA:fv,JSON_SCHEMA:pv,CORE_SCHEMA:mv,DEFAULT_SCHEMA:hv,load:vv,loadAll:gv,dump:_v,YAMLException:bv,types:yv,safeLoad:Av,safeLoadAll:Nv,safeDump:xv}=Wo;class Pf{constructor({ruleSetRepository:n}){this.ruleSetRepository=n}list(){return this.ruleSetRepository.getAll()}get(n){return this.ruleSetRepository.get(n)}async save(n){const t=await this.ruleSetRepository.get(n.id),o=Bf(n,{createdAt:t?.createdAt??new Date,updatedAt:new Date});return this.ruleSetRepository.put(o)}async importFromJson(n,t){let o;try{o=JSON.parse(n)}catch{throw new TypeError("Arquivo de regras inválido: JSON malformado.")}return this.save(t?{...o,grupo:t}:o)}async importFromYaml(n,t){let o;try{o=Wo.load(n)}catch{throw new TypeError("Arquivo de regras inválido: YAML malformado.")}return this.save(t?{...o,grupo:t}:o)}exportToJson(n){ba(n);const{source:t,createdAt:o,updatedAt:r,...i}=n;return JSON.stringify(i,null,2)}exportToYaml(n){ba(n);const{source:t,createdAt:o,updatedAt:r,...i}=n;return Wo.dump(i,{noRefs:!0})}async exportByIdToJson(n){const t=await this.ruleSetRepository.get(n);if(!t)throw new Error("Conjunto de regras não encontrado.");return this.exportToJson(t)}async exportByIdToYaml(n){const t=await this.ruleSetRepository.get(n);if(!t)throw new Error("Conjunto de regras não encontrado.");return this.exportToYaml(t)}delete(n){return this.ruleSetRepository.delete(n)}}async function kf({indexedDB:e}={}){const n=await cf(e),t={projectRepository:new pf(n),environmentRepository:new df(n),elementRepository:new uf(n),evaluationRepository:new ff(n),ruleSetRepository:new mf(n)},o=new yf(t);return{projectService:new Af(t),evaluationService:o,quickEvaluationService:new Nf({evaluationService:o}),ruleSetService:new Pf(t),repositories:t,close:()=>n.close()}}const Lf=`id: bacia_sanitaria
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
`,jf=`id: balcao
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
`,Df=`id: barras_apoio
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
`,Mf=`id: bebedouro
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
`,qf=`id: caixa_autoatendimento
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
`,$f=`id: calcada
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
`,Ff=`id: chuveiro
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
`,Vf=`id: corredores
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
`,zf=`id: corrimaos
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
`,Uf=`id: degraus-isolados
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
`,Hf=`id: elevadores
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
`,Kf=`id: escadas
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
`,Gf=`id: estacionamento
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
`,Yf=`id: janelas
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
`,Wf=`id: lavatorio
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
`,Jf=`id: mesa
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
`,Qf=`id: mictorio
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
`,Xf=`id: piscina
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
`,Zf=`id: piso-desnivel
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
`,ep=`id: piso_tatil
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
`,np=`id: portas
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
`,tp=`id: rampas
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
`,op=`id: sanitario_acessivel
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
`,rp=`id: sinalizacao
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
`,ap=`id: vagas_acessiveis
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
`,ip=Object.assign({"../rules/nbr9050-2020/bacia_sanitaria.yaml":Lf,"../rules/nbr9050-2020/balcao.yaml":jf,"../rules/nbr9050-2020/barras_apoio.yaml":Df,"../rules/nbr9050-2020/bebedouro.yaml":Mf,"../rules/nbr9050-2020/caixa_autoatendimento.yaml":qf,"../rules/nbr9050-2020/calcada.yaml":$f,"../rules/nbr9050-2020/chuveiro.yaml":Ff,"../rules/nbr9050-2020/corredores.yaml":Vf,"../rules/nbr9050-2020/corrimaos.yaml":zf,"../rules/nbr9050-2020/degraus-isolados.yaml":Uf,"../rules/nbr9050-2020/elevadores.yaml":Hf,"../rules/nbr9050-2020/escadas.yaml":Kf,"../rules/nbr9050-2020/estacionamento.yaml":Gf,"../rules/nbr9050-2020/janelas.yaml":Yf,"../rules/nbr9050-2020/lavatorio.yaml":Wf,"../rules/nbr9050-2020/mesa.yaml":Jf,"../rules/nbr9050-2020/mictorio.yaml":Qf,"../rules/nbr9050-2020/piscina.yaml":Xf,"../rules/nbr9050-2020/piso-desnivel.yaml":Zf,"../rules/nbr9050-2020/piso_tatil.yaml":ep,"../rules/nbr9050-2020/portas.yaml":np,"../rules/nbr9050-2020/rampas.yaml":tp,"../rules/nbr9050-2020/sanitario_acessivel.yaml":op,"../rules/nbr9050-2020/sinalizacao.yaml":rp,"../rules/nbr9050-2020/vagas_acessiveis.yaml":ap});async function lp(){return Object.entries(ip).map(([e,n])=>({path:e,ruleSet:Wo.load(n)})).sort((e,n)=>e.ruleSet.nome.localeCompare(n.ruleSet.nome))}const St=typeof document<"u";function fc(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function sp(e){return e.__esModule||e[Symbol.toStringTag]==="Module"||e.default&&fc(e.default)}const Pe=Object.assign;function Zr(e,n){const t={};for(const o in n){const r=n[o];t[o]=In(r)?r.map(e):e(r)}return t}const ao=()=>{},In=Array.isArray;function al(e,n){const t={};for(const o in e)t[o]=o in n?n[o]:e[o];return t}const pc=/#/g,cp=/&/g,up=/\//g,dp=/=/g,fp=/\?/g,mc=/\+/g,pp=/%5B/g,mp=/%5D/g,hc=/%5E/g,hp=/%60/g,vc=/%7B/g,vp=/%7C/g,gc=/%7D/g,gp=/%20/g;function $a(e){return e==null?"":encodeURI(""+e).replace(vp,"|").replace(pp,"[").replace(mp,"]")}function _p(e){return $a(e).replace(vc,"{").replace(gc,"}").replace(hc,"^")}function ya(e){return $a(e).replace(mc,"%2B").replace(gp,"+").replace(pc,"%23").replace(cp,"%26").replace(hp,"`").replace(vc,"{").replace(gc,"}").replace(hc,"^")}function bp(e){return ya(e).replace(dp,"%3D")}function yp(e){return $a(e).replace(pc,"%23").replace(fp,"%3F")}function Ap(e){return yp(e).replace(up,"%2F")}function _o(e){if(e==null)return null;try{return decodeURIComponent(""+e)}catch{}return""+e}const Np=/\/$/,xp=e=>e.replace(Np,"");function ea(e,n,t="/"){let o,r={},i="",l="";const s=n.indexOf("#");let c=n.indexOf("?");return c=s>=0&&c>s?-1:c,c>=0&&(o=n.slice(0,c),i=n.slice(c,s>0?s:n.length),r=e(i.slice(1))),s>=0&&(o=o||n.slice(0,s),l=n.slice(s,n.length)),o=Sp(o??n,t),{fullPath:o+i+l,path:o,query:r,hash:_o(l)}}function Rp(e,n){const t=n.query?e(n.query):"";return n.path+(t&&"?")+t+(n.hash||"")}function il(e,n){return!n||!e.toLowerCase().startsWith(n.toLowerCase())?e:e.slice(n.length)||"/"}function Tp(e,n,t){const o=n.matched.length-1,r=t.matched.length-1;return o>-1&&o===r&&qt(n.matched[o],t.matched[r])&&_c(n.params,t.params)&&e(n.query)===e(t.query)&&n.hash===t.hash}function qt(e,n){return(e.aliasOf||e)===(n.aliasOf||n)}function _c(e,n){if(Object.keys(e).length!==Object.keys(n).length)return!1;for(var t in e)if(!Bp(e[t],n[t]))return!1;return!0}function Bp(e,n){return In(e)?ll(e,n):In(n)?ll(n,e):e?.valueOf()===n?.valueOf()}function ll(e,n){return In(n)?e.length===n.length&&e.every((t,o)=>t===n[o]):e.length===1&&e[0]===n}function Sp(e,n){if(e.startsWith("/"))return e;if(!e)return n;const t=n.split("/"),o=e.split("/"),r=o[o.length-1];(r===".."||r===".")&&o.push("");let i=t.length-1,l,s;for(l=0;l<o.length;l++)if(s=o[l],s!==".")if(s==="..")i>1&&i--;else break;return t.slice(0,i).join("/")+"/"+o.slice(l).join("/")}const ot={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};let Aa=(function(e){return e.pop="pop",e.push="push",e})({}),na=(function(e){return e.back="back",e.forward="forward",e.unknown="",e})({});function wp(e){if(!e)if(St){const n=document.querySelector("base");e=n&&n.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),xp(e)}const Ep=/^[^#]+#/;function Cp(e,n){return e.replace(Ep,"#")+n}function Op(e,n){const t=document.documentElement.getBoundingClientRect(),o=e.getBoundingClientRect();return{behavior:n.behavior,left:o.left-t.left-(n.left||0),top:o.top-t.top-(n.top||0)}}const mr=()=>({left:window.scrollX,top:window.scrollY});function Ip(e){let n;if("el"in e){const t=e.el,o=typeof t=="string"&&t.startsWith("#"),r=typeof t=="string"?o?document.getElementById(t.slice(1)):document.querySelector(t):t;if(!r)return;n=Op(r,e)}else n=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(n):window.scrollTo(n.left!=null?n.left:window.scrollX,n.top!=null?n.top:window.scrollY)}function sl(e,n){return(history.state?history.state.position-n:-1)+e}const Na=new Map;function Pp(e,n){Na.set(e,n)}function kp(e){const n=Na.get(e);return Na.delete(e),n}function Lp(e){return typeof e=="string"||e&&typeof e=="object"}function bc(e){return typeof e=="string"||typeof e=="symbol"}let ze=(function(e){return e[e.MATCHER_NOT_FOUND=1]="MATCHER_NOT_FOUND",e[e.NAVIGATION_GUARD_REDIRECT=2]="NAVIGATION_GUARD_REDIRECT",e[e.NAVIGATION_ABORTED=4]="NAVIGATION_ABORTED",e[e.NAVIGATION_CANCELLED=8]="NAVIGATION_CANCELLED",e[e.NAVIGATION_DUPLICATED=16]="NAVIGATION_DUPLICATED",e})({});const yc=Symbol("");ze.MATCHER_NOT_FOUND+"",ze.NAVIGATION_GUARD_REDIRECT+"",ze.NAVIGATION_ABORTED+"",ze.NAVIGATION_CANCELLED+"",ze.NAVIGATION_DUPLICATED+"";function $t(e,n){return Pe(new Error,{type:e,[yc]:!0},n)}function Hn(e,n){return e instanceof Error&&yc in e&&(n==null||!!(e.type&n))}const jp=["params","query","hash"];function Dp(e){if(typeof e=="string")return e;if(e.path!=null)return e.path;const n={};for(const t of jp)t in e&&(n[t]=e[t]);return JSON.stringify(n,null,2)}function Mp(e){const n={};if(e===""||e==="?")return n;const t=(e[0]==="?"?e.slice(1):e).split("&");for(let o=0;o<t.length;++o){const r=t[o].replace(mc," "),i=r.indexOf("="),l=_o(i<0?r:r.slice(0,i)),s=i<0?null:_o(r.slice(i+1));if(l in n){let c=n[l];In(c)||(c=n[l]=[c]),c.push(s)}else n[l]=s}return n}function cl(e){let n="";for(let t in e){const o=e[t];if(t=bp(t),o==null){o!==void 0&&(n+=(n.length?"&":"")+t);continue}(In(o)?o.map(r=>r&&ya(r)):[o&&ya(o)]).forEach(r=>{r!==void 0&&(n+=(n.length?"&":"")+t,r!=null&&(n+="="+r))})}return n}function qp(e){const n={};for(const t in e){const o=e[t];o!==void 0&&(n[t]=In(o)?o.map(r=>r==null?null:""+r):o==null?o:""+o)}return n}const $p=Symbol(""),ul=Symbol(""),hr=Symbol(""),Fa=Symbol(""),xa=Symbol("");function Jt(){let e=[];function n(o){return e.push(o),()=>{const r=e.indexOf(o);r>-1&&e.splice(r,1)}}function t(){e=[]}return{add:n,list:()=>e.slice(),reset:t}}function at(e,n,t,o,r,i=l=>l()){const l=o&&(o.enterCallbacks[r]=o.enterCallbacks[r]||[]);return()=>new Promise((s,c)=>{const d=m=>{m===!1?c($t(ze.NAVIGATION_ABORTED,{from:t,to:n})):m instanceof Error?c(m):Lp(m)?c($t(ze.NAVIGATION_GUARD_REDIRECT,{from:n,to:m})):(l&&o.enterCallbacks[r]===l&&typeof m=="function"&&l.push(m),s())},u=i(()=>e.call(o&&o.instances[r],n,t,d));let p=Promise.resolve(u);e.length<3&&(p=p.then(d)),p.catch(m=>c(m))})}function ta(e,n,t,o,r=i=>i()){const i=[];for(const l of e)for(const s in l.components){let c=l.components[s];if(!(n!=="beforeRouteEnter"&&!l.instances[s]))if(fc(c)){const d=(c.__vccOpts||c)[n];d&&i.push(at(d,t,o,l,s,r))}else{let d=c();i.push(()=>d.then(u=>{if(!u)throw new Error(`Couldn't resolve component "${s}" at "${l.path}"`);const p=sp(u)?u.default:u;l.mods[s]=u,l.components[s]=p;const m=(p.__vccOpts||p)[n];return m&&at(m,t,o,l,s,r)()}))}}return i}function Fp(e,n){const t=[],o=[],r=[],i=Math.max(n.matched.length,e.matched.length);for(let l=0;l<i;l++){const s=n.matched[l];s&&(e.matched.find(d=>qt(d,s))?o.push(s):t.push(s));const c=e.matched[l];c&&(n.matched.find(d=>qt(d,c))||r.push(c))}return[t,o,r]}let Vp=()=>location.protocol+"//"+location.host;function Ac(e,n){const{pathname:t,search:o,hash:r}=n,i=e.indexOf("#");if(i>-1){let l=r.includes(e.slice(i))?e.slice(i).length:1,s=r.slice(l);return s[0]!=="/"&&(s="/"+s),il(s,"")}return il(t,e)+o+r}function zp(e,n,t,o){let r=[],i=[],l=null;const s=({state:m})=>{const g=Ac(e,location),B=t.value,N=n.value;let w=0;if(m){if(t.value=g,n.value=m,l&&l===B){l=null;return}w=N?m.position-N.position:0}else o(g);r.forEach(Q=>{Q(t.value,B,{delta:w,type:Aa.pop,direction:w?w>0?na.forward:na.back:na.unknown})})};function c(){l=t.value}function d(m){r.push(m);const g=()=>{const B=r.indexOf(m);B>-1&&r.splice(B,1)};return i.push(g),g}function u(){if(document.visibilityState==="hidden"){const{history:m}=window;if(!m.state)return;m.replaceState(Pe({},m.state,{scroll:mr()}),"")}}function p(){for(const m of i)m();i=[],window.removeEventListener("popstate",s),window.removeEventListener("pagehide",u),document.removeEventListener("visibilitychange",u)}return window.addEventListener("popstate",s),window.addEventListener("pagehide",u),document.addEventListener("visibilitychange",u),{pauseListeners:c,listen:d,destroy:p}}function dl(e,n,t,o=!1,r=!1){return{back:e,current:n,forward:t,replaced:o,position:window.history.length,scroll:r?mr():null}}function Up(e){const{history:n,location:t}=window,o={value:Ac(e,t)},r={value:n.state};r.value||i(o.value,{back:null,current:o.value,forward:null,position:n.length-1,replaced:!0,scroll:null},!0);function i(c,d,u){const p=e.indexOf("#"),m=p>-1?(t.host&&document.querySelector("base")?e:e.slice(p))+c:Vp()+e+c;try{n[u?"replaceState":"pushState"](d,"",m),r.value=d}catch(g){console.error(g),t[u?"replace":"assign"](m)}}function l(c,d){i(c,Pe({},n.state,dl(r.value.back,c,r.value.forward,!0),d,{position:r.value.position}),!0),o.value=c}function s(c,d){const u=Pe({},r.value,n.state,{forward:c,scroll:mr()});i(u.current,u,!0),i(c,Pe({},dl(o.value,c,null),{position:u.position+1},d),!1),o.value=c}return{location:o,state:r,push:s,replace:l}}function Hp(e){e=wp(e);const n=Up(e),t=zp(e,n.state,n.location,n.replace);function o(i,l=!0){l||t.pauseListeners(),history.go(i)}const r=Pe({location:"",base:e,go:o,createHref:Cp.bind(null,e)},n,t);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>n.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>n.state.value}),r}let gt=(function(e){return e[e.Static=0]="Static",e[e.Param=1]="Param",e[e.Group=2]="Group",e})({});var We=(function(e){return e[e.Static=0]="Static",e[e.Param=1]="Param",e[e.ParamRegExp=2]="ParamRegExp",e[e.ParamRegExpEnd=3]="ParamRegExpEnd",e[e.EscapeNext=4]="EscapeNext",e})(We||{});const Kp={type:gt.Static,value:""},Gp=/[a-zA-Z0-9_]/;function Yp(e){if(!e)return[[]];if(e==="/")return[[Kp]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function n(g){throw new Error(`ERR (${t})/"${d}": ${g}`)}let t=We.Static,o=t;const r=[];let i;function l(){i&&r.push(i),i=[]}let s=0,c,d="",u="";function p(){d&&(t===We.Static?i.push({type:gt.Static,value:d}):t===We.Param||t===We.ParamRegExp||t===We.ParamRegExpEnd?(i.length>1&&(c==="*"||c==="+")&&n(`A repeatable param (${d}) must be alone in its segment. eg: '/:ids+.`),i.push({type:gt.Param,value:d,regexp:u,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):n("Invalid state to consume buffer"),d="")}function m(){d+=c}for(;s<e.length;){if(c=e[s++],c==="\\"&&t!==We.ParamRegExp){o=t,t=We.EscapeNext;continue}switch(t){case We.Static:c==="/"?(d&&p(),l()):c===":"?(p(),t=We.Param):m();break;case We.EscapeNext:m(),t=o;break;case We.Param:c==="("?t=We.ParamRegExp:Gp.test(c)?m():(p(),t=We.Static,c!=="*"&&c!=="?"&&c!=="+"&&s--);break;case We.ParamRegExp:c===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+c:t=We.ParamRegExpEnd:u+=c;break;case We.ParamRegExpEnd:p(),t=We.Static,c!=="*"&&c!=="?"&&c!=="+"&&s--,u="";break;default:n("Unknown state");break}}return t===We.ParamRegExp&&n(`Unfinished custom RegExp for param "${d}"`),p(),l(),r}const fl="[^/]+?",Wp={sensitive:!1,strict:!1,start:!0,end:!0};var sn=(function(e){return e[e._multiplier=10]="_multiplier",e[e.Root=90]="Root",e[e.Segment=40]="Segment",e[e.SubSegment=30]="SubSegment",e[e.Static=40]="Static",e[e.Dynamic=20]="Dynamic",e[e.BonusCustomRegExp=10]="BonusCustomRegExp",e[e.BonusWildcard=-50]="BonusWildcard",e[e.BonusRepeatable=-20]="BonusRepeatable",e[e.BonusOptional=-8]="BonusOptional",e[e.BonusStrict=.7000000000000001]="BonusStrict",e[e.BonusCaseSensitive=.25]="BonusCaseSensitive",e})(sn||{});const Jp=/[.+*?^${}()[\]/\\]/g;function Qp(e,n){const t=Pe({},Wp,n),o=[];let r=t.start?"^":"";const i=[];for(const d of e){const u=d.length?[]:[sn.Root];t.strict&&!d.length&&(r+="/");for(let p=0;p<d.length;p++){const m=d[p];let g=sn.Segment+(t.sensitive?sn.BonusCaseSensitive:0);if(m.type===gt.Static)p||(r+="/"),r+=m.value.replace(Jp,"\\$&"),g+=sn.Static;else if(m.type===gt.Param){const{value:B,repeatable:N,optional:w,regexp:Q}=m;i.push({name:B,repeatable:N,optional:w});const q=Q||fl;if(q!==fl){g+=sn.BonusCustomRegExp;try{`${q}`}catch(C){throw new Error(`Invalid custom RegExp for param "${B}" (${q}): `+C.message)}}let K=N?`((?:${q})(?:/(?:${q}))*)`:`(${q})`;p||(K=w&&d.length<2?`(?:/${K})`:"/"+K),w&&(K+="?"),r+=K,g+=sn.Dynamic,w&&(g+=sn.BonusOptional),N&&(g+=sn.BonusRepeatable),q===".*"&&(g+=sn.BonusWildcard)}u.push(g)}o.push(u)}if(t.strict&&t.end){const d=o.length-1;o[d][o[d].length-1]+=sn.BonusStrict}t.strict||(r+="/?"),t.end?r+="$":t.strict&&!r.endsWith("/")&&(r+="(?:/|$)");const l=new RegExp(r,t.sensitive?"":"i");function s(d){const u=d.match(l),p={};if(!u)return null;for(let m=1;m<u.length;m++){const g=u[m]||"",B=i[m-1];p[B.name]=g&&B.repeatable?g.split("/"):g}return p}function c(d){let u="",p=!1;for(const m of e){(!p||!u.endsWith("/"))&&(u+="/"),p=!1;for(const g of m)if(g.type===gt.Static)u+=g.value;else if(g.type===gt.Param){const{value:B,repeatable:N,optional:w}=g,Q=B in d?d[B]:"";if(In(Q)&&!N)throw new Error(`Provided param "${B}" is an array but it is not repeatable (* or + modifiers)`);const q=In(Q)?Q.join("/"):Q;if(!q)if(w)m.length<2&&(u.endsWith("/")?u=u.slice(0,-1):p=!0);else throw new Error(`Missing required param "${B}"`);u+=q}}return u||"/"}return{re:l,score:o,keys:i,parse:s,stringify:c}}function Xp(e,n){let t=0;for(;t<e.length&&t<n.length;){const o=n[t]-e[t];if(o)return o;t++}return e.length<n.length?e.length===1&&e[0]===sn.Static+sn.Segment?-1:1:e.length>n.length?n.length===1&&n[0]===sn.Static+sn.Segment?1:-1:0}function Nc(e,n){let t=0;const o=e.score,r=n.score;for(;t<o.length&&t<r.length;){const i=Xp(o[t],r[t]);if(i)return i;t++}if(Math.abs(r.length-o.length)===1){if(pl(o))return 1;if(pl(r))return-1}return r.length-o.length}function pl(e){const n=e[e.length-1];return e.length>0&&n[n.length-1]<0}const Zp={strict:!1,end:!0,sensitive:!1};function em(e,n,t){const o=Qp(Yp(e.path),t),r=Pe(o,{record:e,parent:n,children:[],alias:[]});return n&&!r.record.aliasOf==!n.record.aliasOf&&n.children.push(r),r}function nm(e,n){const t=[],o=new Map;n=al(Zp,n);function r(p){return o.get(p)}function i(p,m,g){const B=!g,N=hl(p);N.aliasOf=g&&g.record;const w=al(n,p),Q=[N];if("alias"in p){const C=typeof p.alias=="string"?[p.alias]:p.alias;for(const U of C)Q.push(hl(Pe({},N,{components:g?g.record.components:N.components,path:U,aliasOf:g?g.record:N})))}let q,K;for(const C of Q){const{path:U}=C;if(m&&U[0]!=="/"){const re=m.record.path,be=re[re.length-1]==="/"?"":"/";C.path=m.record.path+(U&&be+U)}if(q=em(C,m,w),g?g.alias.push(q):(K=K||q,K!==q&&K.alias.push(q),B&&p.name&&!vl(q)&&l(p.name)),xc(q)&&c(q),N.children){const re=N.children;for(let be=0;be<re.length;be++)i(re[be],q,g&&g.children[be])}g=g||q}return K?()=>{l(K)}:ao}function l(p){if(bc(p)){const m=o.get(p);m&&(o.delete(p),t.splice(t.indexOf(m),1),m.children.forEach(l),m.alias.forEach(l))}else{const m=t.indexOf(p);m>-1&&(t.splice(m,1),p.record.name&&o.delete(p.record.name),p.children.forEach(l),p.alias.forEach(l))}}function s(){return t}function c(p){const m=rm(p,t);t.splice(m,0,p),p.record.name&&!vl(p)&&o.set(p.record.name,p)}function d(p,m){let g,B={},N,w;if("name"in p&&p.name){if(g=o.get(p.name),!g)throw $t(ze.MATCHER_NOT_FOUND,{location:p});w=g.record.name,B=Pe(ml(m.params,g.keys.filter(K=>!K.optional).concat(g.parent?g.parent.keys.filter(K=>K.optional):[]).map(K=>K.name)),p.params&&ml(p.params,g.keys.map(K=>K.name))),N=g.stringify(B)}else if(p.path!=null)N=p.path,g=t.find(K=>K.re.test(N)),g&&(B=g.parse(N),w=g.record.name);else{if(g=m.name?o.get(m.name):t.find(K=>K.re.test(m.path)),!g)throw $t(ze.MATCHER_NOT_FOUND,{location:p,currentLocation:m});w=g.record.name,B=Pe({},m.params,p.params),N=g.stringify(B)}const Q=[];let q=g;for(;q;)Q.unshift(q.record),q=q.parent;return{name:w,path:N,params:B,matched:Q,meta:om(Q)}}e.forEach(p=>i(p));function u(){t.length=0,o.clear()}return{addRoute:i,resolve:d,removeRoute:l,clearRoutes:u,getRoutes:s,getRecordMatcher:r}}function ml(e,n){const t={};for(const o of n)o in e&&(t[o]=e[o]);return t}function hl(e){const n={path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:e.aliasOf,beforeEnter:e.beforeEnter,props:tm(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}};return Object.defineProperty(n,"mods",{value:{}}),n}function tm(e){const n={},t=e.props||!1;if("component"in e)n.default=t;else for(const o in e.components)n[o]=typeof t=="object"?t[o]:t;return n}function vl(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function om(e){return e.reduce((n,t)=>Pe(n,t.meta),{})}function rm(e,n){let t=0,o=n.length;for(;t!==o;){const i=t+o>>1;Nc(e,n[i])<0?o=i:t=i+1}const r=am(e);return r&&(o=n.lastIndexOf(r,o-1)),o}function am(e){let n=e;for(;n=n.parent;)if(xc(n)&&Nc(e,n)===0)return n}function xc({record:e}){return!!(e.name||e.components&&Object.keys(e.components).length||e.redirect)}function gl(e){const n=Ye(hr),t=Ye(Fa),o=De(()=>{const c=ae(e.to);return n.resolve(c)}),r=De(()=>{const{matched:c}=o.value,{length:d}=c,u=c[d-1],p=t.matched;if(!u||!p.length)return-1;const m=p.findIndex(qt.bind(null,u));if(m>-1)return m;const g=_l(c[d-2]);return d>1&&_l(u)===g&&p[p.length-1].path!==g?p.findIndex(qt.bind(null,c[d-2])):m}),i=De(()=>r.value>-1&&cm(t.params,o.value.params)),l=De(()=>r.value>-1&&r.value===t.matched.length-1&&_c(t.params,o.value.params));function s(c={}){if(sm(c)){const d=n[ae(e.replace)?"replace":"push"](ae(e.to)).catch(ao);return e.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>d),d}return Promise.resolve()}return{route:o,href:De(()=>o.value.href),isActive:i,isExactActive:l,navigate:s}}function im(e){return e.length===1?e[0]:e}const lm=fs({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:gl,setup(e,{slots:n}){const t=Ao(gl(e)),{options:o}=Ye(hr),r=De(()=>({[bl(e.activeClass,o.linkActiveClass,"router-link-active")]:t.isActive,[bl(e.exactActiveClass,o.linkExactActiveClass,"router-link-exact-active")]:t.isExactActive}));return()=>{const i=n.default&&im(n.default(t));return e.custom?i:jt("a",{"aria-current":t.isExactActive?e.ariaCurrentValue:null,href:t.href,onClick:t.navigate,class:r.value},i)}}}),Ee=lm;function sm(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const n=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(n))return}return e.preventDefault&&e.preventDefault(),!0}}function cm(e,n){for(const t in n){const o=n[t],r=e[t];if(typeof o=="string"){if(o!==r)return!1}else if(!In(r)||r.length!==o.length||o.some((i,l)=>i.valueOf()!==r[l].valueOf()))return!1}return!0}function _l(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const bl=(e,n,t)=>e??n??t,um=fs({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:n,slots:t}){const o=Ye(xa),r=De(()=>e.route||o.value),i=Ye(ul,0),l=De(()=>{let d=ae(i);const{matched:u}=r.value;let p;for(;(p=u[d])&&!p.components;)d++;return d}),s=De(()=>r.value.matched[l.value]);jo(ul,De(()=>l.value+1)),jo($p,s),jo(xa,r);const c=je();return yt(()=>[c.value,s.value,e.name],([d,u,p],[m,g,B])=>{u&&(u.instances[p]=d,g&&g!==u&&d&&d===m&&(u.leaveGuards.size||(u.leaveGuards=g.leaveGuards),u.updateGuards.size||(u.updateGuards=g.updateGuards))),d&&u&&(!g||!qt(u,g)||!m)&&(u.enterCallbacks[p]||[]).forEach(N=>N(d))},{flush:"post"}),()=>{const d=r.value,u=e.name,p=s.value,m=p&&p.components[u];if(!m)return yl(t.default,{Component:m,route:d});const g=p.props[u],B=g?g===!0?d.params:typeof g=="function"?g(d):g:null,w=jt(m,Pe({},B,n,{onVnodeUnmounted:Q=>{Q.component.isUnmounted&&(p.instances[u]=null)},ref:c}));return yl(t.default,{Component:w,route:d})||w}}});function yl(e,n){if(!e)return null;const t=e(n);return t.length===1?t[0]:t}const Rc=um;function dm(e){const n=nm(e.routes,e),t=e.parseQuery||Mp,o=e.stringifyQuery||cl,r=e.history,i=Jt(),l=Jt(),s=Jt(),c=iu(ot);let d=ot;St&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=Zr.bind(null,O=>""+O),p=Zr.bind(null,Ap),m=Zr.bind(null,_o);function g(O,ie){let H,ce;return bc(O)?(H=n.getRecordMatcher(O),ce=ie):ce=O,n.addRoute(ce,H)}function B(O){const ie=n.getRecordMatcher(O);ie&&n.removeRoute(ie)}function N(){return n.getRoutes().map(O=>O.record)}function w(O){return!!n.getRecordMatcher(O)}function Q(O,ie){if(ie=Pe({},ie||c.value),typeof O=="string"){const b=ea(t,O,ie.path),I=n.resolve({path:b.path},ie),L=r.createHref(b.fullPath);return Pe(b,I,{params:m(I.params),hash:_o(b.hash),redirectedFrom:void 0,href:L})}let H;if(O.path!=null)H=Pe({},O,{path:ea(t,O.path,ie.path).path});else{const b=Pe({},O.params);for(const I in b)b[I]==null&&delete b[I];H=Pe({},O,{params:p(b)}),ie.params=p(ie.params)}const ce=n.resolve(H,ie),ye=O.hash||"";ce.params=u(m(ce.params));const h=Rp(o,Pe({},O,{hash:_p(ye),path:ce.path})),v=r.createHref(h);return Pe({fullPath:h,hash:ye,query:o===cl?qp(O.query):O.query||{}},ce,{redirectedFrom:void 0,href:v})}function q(O){return typeof O=="string"?ea(t,O,c.value.path):Pe({},O)}function K(O,ie){if(d!==O)return $t(ze.NAVIGATION_CANCELLED,{from:ie,to:O})}function C(O){return be(O)}function U(O){return C(Pe(q(O),{replace:!0}))}function re(O,ie){const H=O.matched[O.matched.length-1];if(H&&H.redirect){const{redirect:ce}=H;let ye=typeof ce=="function"?ce(O,ie):ce;return typeof ye=="string"&&(ye=ye.includes("?")||ye.includes("#")?ye=q(ye):{path:ye},ye.params={}),Pe({query:O.query,hash:O.hash,params:ye.path!=null?{}:O.params},ye)}}function be(O,ie){const H=d=Q(O),ce=c.value,ye=O.state,h=O.force,v=O.replace===!0,b=re(H,ce);if(b)return be(Pe(q(b),{state:typeof b=="object"?Pe({},ye,b.state):ye,force:h,replace:v}),ie||H);const I=H;I.redirectedFrom=ie;let L;return!h&&Tp(o,ce,H)&&(L=$t(ze.NAVIGATION_DUPLICATED,{to:I,from:ce}),pn(ce,ce,!0,!1)),(L?Promise.resolve(L):W(I,ce)).catch(S=>Hn(S)?Hn(S,ze.NAVIGATION_GUARD_REDIRECT)?S:Ze(S):Ne(S,I,ce)).then(S=>{if(S){if(Hn(S,ze.NAVIGATION_GUARD_REDIRECT))return be(Pe({replace:v},q(S.to),{state:typeof S.to=="object"?Pe({},ye,S.to.state):ye,force:h}),ie||I)}else S=T(I,ce,!0,v,ye);return D(I,ce,S),S})}function Se(O,ie){const H=K(O,ie);return H?Promise.reject(H):Promise.resolve()}function pe(O){const ie=Bn.values().next().value;return ie&&typeof ie.runWithContext=="function"?ie.runWithContext(O):O()}function W(O,ie){let H;const[ce,ye,h]=Fp(O,ie);H=ta(ce.reverse(),"beforeRouteLeave",O,ie);for(const b of ce)b.leaveGuards.forEach(I=>{H.push(at(I,O,ie))});const v=Se.bind(null,O,ie);return H.push(v),He(H).then(()=>{H=[];for(const b of i.list())H.push(at(b,O,ie));return H.push(v),He(H)}).then(()=>{H=ta(ye,"beforeRouteUpdate",O,ie);for(const b of ye)b.updateGuards.forEach(I=>{H.push(at(I,O,ie))});return H.push(v),He(H)}).then(()=>{H=[];for(const b of h)if(b.beforeEnter)if(In(b.beforeEnter))for(const I of b.beforeEnter)H.push(at(I,O,ie));else H.push(at(b.beforeEnter,O,ie));return H.push(v),He(H)}).then(()=>(O.matched.forEach(b=>b.enterCallbacks={}),H=ta(h,"beforeRouteEnter",O,ie,pe),H.push(v),He(H))).then(()=>{H=[];for(const b of l.list())H.push(at(b,O,ie));return H.push(v),He(H)}).catch(b=>Hn(b,ze.NAVIGATION_CANCELLED)?b:Promise.reject(b))}function D(O,ie,H){s.list().forEach(ce=>pe(()=>ce(O,ie,H)))}function T(O,ie,H,ce,ye){const h=K(O,ie);if(h)return h;const v=ie===ot,b=St?history.state:{};H&&(ce||v?r.replace(O.fullPath,Pe({scroll:v&&b&&b.scroll},ye)):r.push(O.fullPath,ye)),c.value=O,pn(O,ie,H,v),Ze()}let Z;function oe(){Z||(Z=r.listen((O,ie,H)=>{if(!Ue.listening)return;const ce=Q(O),ye=re(ce,Ue.currentRoute.value);if(ye){be(Pe(ye,{replace:!0,force:!0}),ce).catch(ao);return}d=ce;const h=c.value;St&&Pp(sl(h.fullPath,H.delta),mr()),W(ce,h).catch(v=>Hn(v,ze.NAVIGATION_ABORTED|ze.NAVIGATION_CANCELLED)?v:Hn(v,ze.NAVIGATION_GUARD_REDIRECT)?(be(Pe(q(v.to),{force:!0}),ce).then(b=>{Hn(b,ze.NAVIGATION_ABORTED|ze.NAVIGATION_DUPLICATED)&&!H.delta&&H.type===Aa.pop&&r.go(-1,!1)}).catch(ao),Promise.reject()):(H.delta&&r.go(-H.delta,!1),Ne(v,ce,h))).then(v=>{v=v||T(ce,h,!1),v&&(H.delta&&!Hn(v,ze.NAVIGATION_CANCELLED)?r.go(-H.delta,!1):H.type===Aa.pop&&Hn(v,ze.NAVIGATION_ABORTED|ze.NAVIGATION_DUPLICATED)&&r.go(-1,!1)),D(ce,h,v)}).catch(ao)}))}let Ke=Jt(),J=Jt(),Te;function Ne(O,ie,H){Ze(O);const ce=J.list();return ce.length?ce.forEach(ye=>ye(O,ie,H)):console.error(O),Promise.reject(O)}function vn(){return Te&&c.value!==ot?Promise.resolve():new Promise((O,ie)=>{Ke.add([O,ie])})}function Ze(O){return Te||(Te=!O,oe(),Ke.list().forEach(([ie,H])=>O?H(O):ie()),Ke.reset()),O}function pn(O,ie,H,ce){const{scrollBehavior:ye}=e;if(!St||!ye)return Promise.resolve();const h=!H&&kp(sl(O.fullPath,0))||(ce||!H)&&history.state&&history.state.scroll||null;return lr().then(()=>ye(O,ie,h)).then(v=>v&&Ip(v)).catch(v=>Ne(v,O,ie))}const Ge=O=>r.go(O);let gn;const Bn=new Set,Ue={currentRoute:c,listening:!0,addRoute:g,removeRoute:B,clearRoutes:n.clearRoutes,hasRoute:w,getRoutes:N,resolve:Q,options:e,push:C,replace:U,go:Ge,back:()=>Ge(-1),forward:()=>Ge(1),beforeEach:i.add,beforeResolve:l.add,afterEach:s.add,onError:J.add,isReady:vn,install(O){O.component("RouterLink",Ee),O.component("RouterView",Rc),O.config.globalProperties.$router=Ue,Object.defineProperty(O.config.globalProperties,"$route",{enumerable:!0,get:()=>ae(c)}),St&&!gn&&c.value===ot&&(gn=!0,C(r.location).catch(ce=>{}));const ie={};for(const ce in ot)Object.defineProperty(ie,ce,{get:()=>c.value[ce],enumerable:!0});O.provide(hr,Ue),O.provide(Fa,Ql(ie)),O.provide(xa,c);const H=O.unmount;Bn.add(O),O.unmount=function(){Bn.delete(O),Bn.size<1&&(d=ot,Z&&Z(),Z=null,c.value=ot,gn=!1,Te=!1),H()}}};function He(O){return O.reduce((ie,H)=>ie.then(()=>pe(H)),Promise.resolve())}return Ue}function Tc(){return Ye(hr)}function Bc(e){return Ye(Fa)}const fm="/icon-512.png";const mt={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};const Al=(...e)=>e.filter((n,t,o)=>!!n&&n.trim()!==""&&o.indexOf(n)===t).join(" ").trim();function oa(e){return e!=null}function pm(e,n={}){const t=n.attributeNames??{},o=m=>t[m]??m,r=e.size??e.width??mt.width,i=e.size??e.height??mt.height,l=e.aliases?.filter(m=>typeof m=="string"&&m.trim()!=="").map(m=>`lucide-${m}`)??[],s=[...e.name?[`lucide-${e.name}`]:[],...l],c=n.className?.split(" ").filter(Boolean)??[],d=n.includeDefaultClasses===!1?Al(...c):Al("lucide",...s,...c),u=n.absoluteStrokeWidth?Number(n.strokeWidth??mt["stroke-width"])*Number(e.size??e.width??mt.width)/Number(n.size??n.width??mt.width):n.strokeWidth??mt["stroke-width"];return["svg",{...Object.entries(mt).reduce((m,[g,B])=>(m[o(g)]=B,m),{}),..."color"in n&&n.color&&{[o("stroke")]:n.color},..."size"in n&&oa(n.size)&&{[o("width")]:n.size,[o("height")]:n.size},..."width"in n&&oa(n.width)&&{[o("width")]:n.width},..."height"in n&&oa(n.height)&&{[o("height")]:n.height},[o("stroke-width")]:u,...d&&{[o("class")]:d},[o("viewBox")]:`0 0 ${r} ${i}`,...n.hasA11yProp===!1?{[o("aria-hidden")]:"true"}:{},..."attributes"in n&&n.attributes},e.node.map(m=>{const[g,B,N]=m,w=n.nonScalingStroke?{[o("vector-effect")]:"non-scaling-stroke",...B}:B;return N?[g,w,N]:[g,w]})]}const mm=e=>{for(const n in e)if(n.startsWith("aria-")||n==="role"||n==="title")return!0;return!1};const Po=e=>e==="";const hm=e=>e?.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();const vm=Symbol("lucide-icons");function gm(){return Ye(vm,{})}const _m=({name:e,iconNode:n,"icon-node":t,icon:o={name:hm(e),node:n??t,size:24,aliases:[]},absoluteStrokeWidth:r,"absolute-stroke-width":i,nonScalingStroke:l,"non-scaling-stroke":s,strokeWidth:c,"stroke-width":d,size:u,width:p=u,height:m=u,color:g,...B},{slots:N})=>{const{size:w,color:Q,strokeWidth:q=2,absoluteStrokeWidth:K=!1,nonScalingStroke:C=!1,class:U=""}=gm(),re=Po(r)||Po(i)||r===!0||i===!0||K===!0,be=Po(l)||Po(s)||l===!0||s===!0||C===!0;delete B.class;const Se=N.default?.(),[,pe,W=[]]=pm(o,{color:g??Q,width:p??u??w,height:m??u??w,strokeWidth:c??d??q,absoluteStrokeWidth:re,nonScalingStroke:be,className:U,hasA11yProp:Se!=null&&Se.length>0||mm(B),attributes:B});return jt("svg",pe,[...W.map(D=>jt(...D)),...Se??[]])};function Pn(e,n=[]){const t=typeof e=="string"?{name:e,node:n}:e;return(o,{slots:r})=>jt(_m,{...o,icon:t},r.default?{default:r.default}:void 0)}const bm={name:"box",size:24,node:[["path",{d:"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",key:"hh9hay"}],["path",{d:"m3.3 7 8.7 5 8.7-5",key:"g66t2b"}],["path",{d:"M12 22V12",key:"d0xqtd"}]]},ym=Pn(bm);const Am={name:"chevron-right",size:24,node:[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]},Jo=Pn(Am);const Nm={name:"chevron-left",size:24,node:[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]},At=Pn(Nm);const xm={name:"circle-question-mark",size:24,node:[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",key:"1u773s"}],["path",{d:"M12 17h.01",key:"p32p05"}]],aliases:["help-circle","circle-help"]},Rm=Pn(xm);const Tm={name:"clipboard-check",size:24,node:[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1",key:"tgr4d6"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",key:"116196"}],["path",{d:"m9 14 2 2 4-4",key:"df797q"}]]},wt=Pn(Tm);const Bm={name:"folder-kanban",size:24,node:[["path",{d:"M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z",key:"1fr9dc"}],["path",{d:"M8 10v4",key:"tgpxqk"}],["path",{d:"M12 10v2",key:"hh53o1"}],["path",{d:"M16 10v6",key:"1d6xys"}]]},Sm=Pn(Bm);const wm={name:"folder-plus",size:24,node:[["path",{d:"M12 10v6",key:"1bos4e"}],["path",{d:"M9 13h6",key:"1uhe8q"}],["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",key:"1kt360"}]]},Qo=Pn(wm);const Em={name:"folder",size:24,node:[["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",key:"1kt360"}]]},Nl=Pn(Em);const Cm={name:"house",size:24,node:[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"r6nss1"}]],aliases:["home"]},Om=Pn(Cm);const Im={name:"plus",size:24,node:[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]},xl=Pn(Im);const Pm={name:"trash",size:24,node:[["path",{d:"M10 11v6",key:"nco0om"}],["path",{d:"M14 11v6",key:"outv1u"}],["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",key:"miytrc"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",key:"e791ji"}]],aliases:["trash-2"]},vr=Pn(Pm),km={class:"app-shell"},Lm={class:"sidebar"},jm={class:"content",tabindex:"-1"},Dm={class:"bottom-nav"},Mm={__name:"AppLayout",setup(e){const n=Bc(),t=De(()=>n.path.startsWith("/rules")?"rules":n.path.startsWith("/quick-evaluation")?"quick":"projects");return(o,r)=>(z(),te("div",km,[A("aside",Lm,[G(ae(Ee),{class:"brand",to:"/projects"},{default:_e(()=>[...r[0]||(r[0]=[A("img",{class:"brand__mark",src:fm,alt:"Acesso Verificador"},null,-1),A("span",null,[xe("Acesso"),A("br"),A("small",null,"Verificador")],-1)])]),_:1}),A("nav",null,[G(ae(Ee),{class:cn(["nav-item",{"is-active":t.value==="projects"}]),to:"/projects"},{default:_e(()=>[G(ae(Nl),{size:20,"aria-hidden":"true"}),r[1]||(r[1]=A("span",null,"Projetos",-1))]),_:1},8,["class"]),G(ae(Ee),{class:cn(["nav-item",{"is-active":t.value==="quick"}]),to:"/quick-evaluation"},{default:_e(()=>[G(ae(wt),{size:20,"aria-hidden":"true"}),r[2]||(r[2]=A("span",null,"Avaliação rápida",-1))]),_:1},8,["class"]),G(ae(Ee),{class:cn(["nav-item",{"is-active":t.value==="rules"}]),to:"/rules"},{default:_e(()=>[G(ae(wt),{size:20,"aria-hidden":"true"}),r[3]||(r[3]=A("span",null,"Regras",-1))]),_:1},8,["class"])])]),A("main",jm,[hn(o.$slots,"default")]),A("nav",Dm,[G(ae(Ee),{class:cn(["nav-item",{"is-active":t.value==="projects"}]),to:"/projects"},{default:_e(()=>[G(ae(Nl),{size:20,"aria-hidden":"true"}),r[4]||(r[4]=A("span",null,"Projetos",-1))]),_:1},8,["class"]),G(ae(Ee),{class:cn(["nav-item",{"is-active":t.value==="quick"}]),to:"/quick-evaluation"},{default:_e(()=>[G(ae(wt),{size:20,"aria-hidden":"true"}),r[5]||(r[5]=A("span",null,"Avaliação rápida",-1))]),_:1},8,["class"]),G(ae(Ee),{class:cn(["nav-item",{"is-active":t.value==="rules"}]),to:"/rules"},{default:_e(()=>[G(ae(wt),{size:20,"aria-hidden":"true"}),r[6]||(r[6]=A("span",null,"Regras",-1))]),_:1},8,["class"])])]))}},qm={__name:"App",setup(e){return(n,t)=>(z(),Ve(Mm,null,{default:_e(()=>[G(ae(Rc))]),_:1}))}},$m={class:"page-header"},Fm={key:0,class:"eyebrow"},Vm={class:"page-header__row"},zm={key:0},lt={__name:"PageHeader",props:{eyebrow:String,title:{type:String,required:!0},description:String},setup(e){return(n,t)=>(z(),te("header",$m,[e.eyebrow?(z(),te("p",Fm,ue(e.eyebrow),1)):Ie("",!0),A("div",Vm,[A("div",null,[A("h1",null,ue(e.title),1),e.description?(z(),te("p",zm,ue(e.description),1)):Ie("",!0)]),hn(n.$slots,"action")])]))}},Um={class:"empty-state"},Vn={__name:"EmptyState",props:{title:String,text:String},setup(e){return(n,t)=>(z(),te("section",Um,[t[0]||(t[0]=A("div",{class:"empty-state__icon"},"+",-1)),A("h2",null,ue(e.title),1),A("p",null,ue(e.text),1),hn(n.$slots,"default")]))}},Hm={class:"field"},Km={key:0,class:"muted"},Gm={key:1,class:"card-list"},Ym={class:"card__icon"},Wm={key:0},Jm={class:"card__menu"},Qm=["onClick"],Xm=["onClick"],Zm={__name:"ProjectsPage",setup(e){const n=Ye("services"),t=je([]),o=je(""),r=je(""),i=je(null),l=je("");async function s(){t.value=await n.projectService.listProjects()}function c(){i.value={},o.value="",r.value="",l.value=""}function d(B){i.value=B,o.value=B.name,l.value="",r.value=B.description||""}function u(){i.value=null,o.value="",r.value="",l.value=""}async function p(){try{l.value="",i.value?.id?await n.projectService.updateProject(i.value.id,{name:o.value,description:r.value}):await n.projectService.createProject({name:o.value,description:r.value}),o.value="",r.value="",i.value=null,await s()}catch(B){l.value=B.message}}async function m(B){if(!window.confirm(`Excluir o projeto “${B.name}” e seus dados?`))return;const w=await n.projectService.listEnvironments(B.id);for(const Q of w){const q=await n.projectService.listElements(Q.id);for(const K of q){const C=await n.evaluationService.listEvaluations(K.id);for(const U of C)await n.repositories.evaluationRepository.delete(U.id);await n.repositories.elementRepository.delete(K.id)}await n.repositories.environmentRepository.delete(Q.id)}await n.repositories.projectRepository.delete(B.id),await s()}function g(B){return new Intl.DateTimeFormat("pt-BR",{dateStyle:"medium"}).format(new Date(B))}return ct(s),(B,N)=>(z(),te(Re,null,[G(lt,{title:"Projetos",description:"Acompanhe seus locais e avaliações."},{action:_e(()=>[A("button",{class:"button",onClick:c},[G(ae(Qo),{size:18,"aria-hidden":"true"}),N[2]||(N[2]=xe("Novo projeto",-1))])]),_:1}),i.value?(z(),te("form",{key:0,class:"form-card",onSubmit:Mt(p,["prevent"])},[A("label",Hm,[A("span",null,ue(i.value.id?"Nome do projeto":"Novo projeto"),1),An(A("input",{"onUpdate:modelValue":N[0]||(N[0]=w=>o.value=w),required:"",autofocus:""},null,512),[[vo,o.value]]),N[3]||(N[3]=A("span",null,"Descrição",-1)),An(A("input",{"onUpdate:modelValue":N[1]||(N[1]=w=>r.value=w)},null,512),[[vo,r.value]])]),l.value?(z(),te("p",Km,ue(l.value),1)):Ie("",!0),A("div",{class:"form-actions"},[A("button",{class:"button button--ghost",type:"button",onClick:u}," Cancelar "),N[4]||(N[4]=A("button",{class:"button",type:"submit"},"Salvar",-1))])],32)):Ie("",!0),t.value.length?(z(),te("div",Gm,[(z(!0),te(Re,null,Rn(t.value,w=>(z(),te("article",{key:w.id,class:"card project-card"},[G(ae(Ee),{class:"card__link",to:`/projects/${w.id}`},{default:_e(()=>[A("span",Ym,[G(ae(Sm),{size:22,"aria-hidden":"true"})]),A("div",null,[A("h2",null,ue(w.name),1),A("p",null,"Atualizado em "+ue(g(w.updatedAt)),1),w.description?(z(),te("p",Wm,ue(w.description),1)):Ie("",!0)]),G(ae(Jo),{size:20,class:"chevron","aria-hidden":"true"})]),_:2},1032,["to"]),A("div",Jm,[A("button",{class:"text-button",onClick:Q=>d(w)}," Editar ",8,Qm),A("button",{class:"icon-button icon-button--danger",title:"Excluir","aria-label":"Excluir",onClick:Q=>m(w)},[G(ae(vr),{size:18,"aria-hidden":"true"})],8,Xm)])]))),128))])):(z(),Ve(Vn,{key:2,title:"Comece por um projeto",text:"Organize as avaliações de acessibilidade por obra ou local."},{default:_e(()=>[A("button",{class:"button",onClick:c},[G(ae(Qo),{size:18,"aria-hidden":"true"}),N[5]||(N[5]=xe("Novo projeto",-1))])]),_:1}))],64))}},bo={__name:"StatusBadge",props:{status:{type:String,default:"nao_avaliado"}},setup(e){const n={conforme:"Conforme",nao_conforme:"Não conforme",nao_avaliado:"Pendente",invalido:"Pendente",erro:"Pendente",atencao:"Atenção",manual:"Verificar"};return(t,o)=>(z(),te("span",{class:cn(["status",`status--${e.status}`])},ue(n[e.status]??"Pendente"),3))}},eh={class:"evaluation-summary","aria-labelledby":"evaluation-summary-title"},nh={class:"evaluation-summary__heading"},th={id:"evaluation-summary-title"},oh={class:"evaluation-summary__score"},rh={class:"evaluation-summary__cards"},ah={class:"evaluation-summary__card evaluation-summary__card--conforme"},ih={class:"evaluation-summary__card evaluation-summary__card--nao_conforme"},lh={class:"evaluation-summary__card evaluation-summary__card--nao_avaliado"},Sc={__name:"EvaluationSummary",props:{summary:{type:Object,required:!0},scope:{type:String,default:"elementos"}},setup(e){const n=e,t=De(()=>n.summary.totalElements?n.summary.overallStatus==="conforme"?"Todos os elementos estão conformes":n.summary.overallStatus==="nao_conforme"?"Há elementos não conformes":"Há elementos pendentes de avaliação":"Nenhum elemento cadastrado");return(o,r)=>(z(),te("section",eh,[A("div",nh,[A("div",null,[A("h2",th,"Situação do "+ue(e.scope),1),A("p",null,ue(t.value),1)]),A("div",oh,[A("strong",null,ue(e.summary.score)+"%",1),r[0]||(r[0]=A("span",null,"conformes",-1))])]),A("div",rh,[A("div",ah,[r[1]||(r[1]=A("span",null,"Conformes",-1)),A("strong",null,ue(e.summary.conforme),1)]),A("div",ih,[r[2]||(r[2]=A("span",null,"Não conformes",-1)),A("strong",null,ue(e.summary.nao_conforme),1)]),A("div",lh,[r[3]||(r[3]=A("span",null,"Pendentes",-1)),A("strong",null,ue(e.summary.nao_avaliado),1)])]),e.summary.totalElements?(z(),Ve(bo,{key:0,status:e.summary.overallStatus},null,8,["status"])):Ie("",!0)]))}},sh={class:"field"},ch={key:2,class:"card-grid-environment"},uh={class:"card__icon"},dh={class:"card__menu"},fh=["onClick"],ph=["onClick"],mh={__name:"ProjectPage",props:{projectId:String},setup(e){const n=e,t=Ye("services"),o=je(null),r=je([]),i=je(""),l=je(null),s=je(null),c=je(null);async function d(){o.value=await t.projectService.getProject(n.projectId),o.value&&([r.value,s.value]=await Promise.all([t.projectService.listEnvironments(n.projectId),t.evaluationService.getProjectSummary(n.projectId)]))}async function u(){l.value={},i.value="",await lr(),c.value?.scrollIntoView({behavior:"smooth"})}function p(N){l.value=N,i.value=N.name}function m(){l.value=null,i.value=""}async function g(){l.value?.id?await t.projectService.renameEnvironment(l.value.id,i.value):await t.projectService.createEnvironment(n.projectId,{name:i.value}),m(),await d()}async function B(N){if(!window.confirm(`Excluir o ambiente “${N.name}” e seus elementos?`))return;const Q=await t.projectService.listElements(N.id);for(const q of Q){const K=await t.evaluationService.listEvaluations(q.id);for(const C of K)await t.repositories.evaluationRepository.delete(C.id);await t.repositories.elementRepository.delete(q.id)}await t.repositories.environmentRepository.delete(N.id),await d()}return ct(d),(N,w)=>o.value?(z(),te(Re,{key:0},[G(ae(Ee),{class:"back-link",to:"/projects"},{default:_e(()=>[G(ae(At),{size:18,"aria-hidden":"true"}),w[1]||(w[1]=xe("Projetos",-1))]),_:1}),G(lt,{title:o.value.name,description:`${r.value.length} ambiente${r.value.length===1?"":"s"} cadastrado${r.value.length===1?"":"s"}.
      
${o.value.description}`},{action:_e(()=>[A("button",{class:"button",onClick:u},[G(ae(Qo),{size:18,"aria-hidden":"true"}),w[2]||(w[2]=xe("Novo ambiente",-1))])]),_:1},8,["title","description"]),s.value?(z(),Ve(Sc,{key:0,summary:s.value,scope:"projeto"},null,8,["summary"])):Ie("",!0),l.value?(z(),te("form",{key:1,class:"form-card",onSubmit:Mt(g,["prevent"]),ref_key:"inputCreate",ref:c},[A("label",sh,[w[3]||(w[3]=A("span",null,"Nome do ambiente",-1)),An(A("input",{"onUpdate:modelValue":w[0]||(w[0]=Q=>i.value=Q),required:"",autofocus:""},null,512),[[vo,i.value]])]),A("div",{class:"form-actions"},[A("button",{class:"button button--ghost",type:"button",onClick:m}," Cancelar "),w[4]||(w[4]=A("button",{class:"button",type:"submit"},"Salvar",-1))])],544)):Ie("",!0),r.value.length?(z(),te("div",ch,[(z(!0),te(Re,null,Rn(r.value,Q=>(z(),te("article",{key:Q.id,class:"card-environment"},[G(ae(Ee),{class:"card__link",to:`/projects/${o.value.id}/environments/${Q.id}`},{default:_e(()=>[A("span",uh,[G(ae(Om),{size:22,"aria-hidden":"true"})]),A("div",null,[A("h2",null,ue(Q.name),1),w[5]||(w[5]=A("p",null,"Ambiente",-1))])]),_:2},1032,["to"]),A("div",dh,[A("button",{class:"text-button",onClick:q=>p(Q)}," Editar ",8,fh),A("button",{class:"icon-button icon-button--danger",title:"Excluir","aria-label":"Excluir",onClick:q=>B(Q)},[G(ae(vr),{size:18,"aria-hidden":"true"})],8,ph)])]))),128))])):(z(),Ve(Vn,{key:3,title:"Nenhum ambiente ainda",text:"Adicione espaços como entrada, banheiro ou circulação."},{default:_e(()=>[A("button",{class:"button",onClick:u},[G(ae(Qo),{size:18,"aria-hidden":"true"}),w[6]||(w[6]=xe("Novo ambiente",-1))])]),_:1}))],64)):(z(),Ve(Vn,{key:1,title:"Projeto não encontrado",text:"Ele pode ter sido removido."},{default:_e(()=>[G(ae(Ee),{class:"button",to:"/projects"},{default:_e(()=>[...w[7]||(w[7]=[xe("Voltar aos projetos",-1)])]),_:1})]),_:1}))}},hh={key:1,class:"card-list"},vh={class:"card__icon"},gh={class:"card__menu"},_h=["onClick"],bh={__name:"EnvironmentPage",props:{projectId:String,environmentId:String},setup(e){const n=e,t=Ye("services"),o=je(null),r=je(null),i=je([]),l=je(null);async function s(d){if(!window.confirm(`Excluir o elemento ${d.name} e suas avaliações?`))return;const p=await t.evaluationService.listEvaluations(d.id);for(const m of p)await t.repositories.evaluationRepository.delete(m.id);await t.repositories.elementRepository.delete(d.id),await c()}async function c(){if(o.value=await t.repositories.environmentRepository.get(n.environmentId),!o.value)return;r.value=await t.projectService.getProject(o.value.projectId);const d=await t.projectService.listElements(o.value.id),[u,p]=await Promise.all([Promise.all(d.map(async m=>{const g=await t.evaluationService.listEvaluations(m.id);return{element:m,status:Gs(g)}})),t.evaluationService.getEnvironmentSummary(o.value.id)]);i.value=u,l.value=p}return ct(c),(d,u)=>o.value?(z(),te(Re,{key:0},[G(ae(Ee),{class:"back-link",to:`/projects/${o.value.projectId}`},{default:_e(()=>[G(ae(At),{size:18,"aria-hidden":"true"}),xe(ue(r.value?.name??"Projeto"),1)]),_:1},8,["to"]),G(lt,{title:o.value.name,description:"Elementos e situação da última avaliação."},{action:_e(()=>[G(ae(Ee),{class:"button",to:{path:"/elements/new",query:{environmentId:o.value.id}}},{default:_e(()=>[G(ae(xl),{size:18,"aria-hidden":"true"}),u[0]||(u[0]=xe("Adicionar elemento ",-1))]),_:1},8,["to"])]),_:1},8,["title"]),l.value?(z(),Ve(Sc,{key:0,summary:l.value,scope:"ambiente"},null,8,["summary"])):Ie("",!0),i.value.length?(z(),te("div",hh,[(z(!0),te(Re,null,Rn(i.value,p=>(z(),te("article",{key:p.element.id,class:"card card--interactive"},[G(ae(Ee),{class:"card__link",to:`/elements/${p.element.id}`},{default:_e(()=>[A("span",vh,[G(ae(ym),{size:22,"aria-hidden":"true"})]),A("div",null,[A("h2",null,ue(p.element.name),1),A("p",null,ue(p.element.type),1)]),G(bo,{status:p.status},null,8,["status"]),G(ae(Jo),{size:20,class:"chevron","aria-hidden":"true"})]),_:2},1032,["to"]),A("div",gh,[A("button",{class:"icon-button icon-button--danger",title:"Excluir","aria-label":"Excluir",onClick:m=>s(p.element)},[G(ae(vr),{size:18,"aria-hidden":"true"})],8,_h)])]))),128))])):(z(),Ve(Vn,{key:2,title:"Nenhum elemento ainda",text:"Cadastre portas, rampas, sanitários e outros itens para avaliar."},{default:_e(()=>[G(ae(Ee),{class:"button",to:{path:"/elements/new",query:{environmentId:o.value.id}}},{default:_e(()=>[G(ae(xl),{size:18,"aria-hidden":"true"}),u[1]||(u[1]=xe("Adicionar elemento ",-1))]),_:1},8,["to"])]),_:1}))],64)):(z(),Ve(Vn,{key:1,title:"Ambiente não encontrado",text:"Ele pode ter sido removido."},{default:_e(()=>[G(ae(Ee),{class:"button",to:"/projects"},{default:_e(()=>[...u[2]||(u[2]=[xe("Projetos",-1)])]),_:1})]),_:1}))}};var yh=Object.defineProperty,Ah=Object.defineProperties,Nh=Object.getOwnPropertyDescriptors,Rl=Object.getOwnPropertySymbols,xh=Object.prototype.hasOwnProperty,Rh=Object.prototype.propertyIsEnumerable,Tl=(e,n,t)=>n in e?yh(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,Rt=(e,n)=>{for(var t in n||(n={}))xh.call(n,t)&&Tl(e,t,n[t]);if(Rl)for(var t of Rl(n))Rh.call(n,t)&&Tl(e,t,n[t]);return e},Bl=(e,n)=>Ah(e,Nh(n));const Th={props:{autoscroll:{type:Boolean,default:!0}},watch:{typeAheadPointer(){this.autoscroll&&this.maybeAdjustScroll()},open(e){this.autoscroll&&e&&this.$nextTick(()=>this.maybeAdjustScroll())}},methods:{maybeAdjustScroll(){var e;const n=((e=this.$refs.dropdownMenu)==null?void 0:e.children[this.typeAheadPointer])||!1;if(n){const t=this.getDropdownViewport(),{top:o,bottom:r,height:i}=n.getBoundingClientRect();if(o<t.top)return this.$refs.dropdownMenu.scrollTop=n.offsetTop;if(r>t.bottom)return this.$refs.dropdownMenu.scrollTop=n.offsetTop-(t.height-i)}},getDropdownViewport(){return this.$refs.dropdownMenu?this.$refs.dropdownMenu.getBoundingClientRect():{height:0,top:0,bottom:0}}}},Bh={data(){return{typeAheadPointer:-1}},watch:{filteredOptions(){for(let e=0;e<this.filteredOptions.length;e++)if(this.selectable(this.filteredOptions[e])){this.typeAheadPointer=e;break}},open(e){e&&this.typeAheadToLastSelected()},selectedValue(){this.open&&this.typeAheadToLastSelected()}},methods:{typeAheadUp(){for(let e=this.typeAheadPointer-1;e>=0;e--)if(this.selectable(this.filteredOptions[e])){this.typeAheadPointer=e;break}},typeAheadDown(){for(let e=this.typeAheadPointer+1;e<this.filteredOptions.length;e++)if(this.selectable(this.filteredOptions[e])){this.typeAheadPointer=e;break}},typeAheadSelect(){const e=this.filteredOptions[this.typeAheadPointer];e&&this.selectable(e)&&this.select(e)},typeAheadToLastSelected(){this.typeAheadPointer=this.selectedValue.length!==0?this.filteredOptions.indexOf(this.selectedValue[this.selectedValue.length-1]):-1}}},Sh={props:{loading:{type:Boolean,default:!1}},data(){return{mutableLoading:!1}},watch:{search(){this.$emit("search",this.search,this.toggleLoading)},loading(e){this.mutableLoading=e}},methods:{toggleLoading(e=null){return e==null?this.mutableLoading=!this.mutableLoading:this.mutableLoading=e}}},Va=(e,n)=>{const t=e.__vccOpts||e;for(const[o,r]of n)t[o]=r;return t},wh={},Eh={xmlns:"http://www.w3.org/2000/svg",width:"10",height:"10"},Ch=A("path",{d:"M6.895455 5l2.842897-2.842898c.348864-.348863.348864-.914488 0-1.263636L9.106534.261648c-.348864-.348864-.914489-.348864-1.263636 0L5 3.104545 2.157102.261648c-.348863-.348864-.914488-.348864-1.263636 0L.261648.893466c-.348864.348864-.348864.914489 0 1.263636L3.104545 5 .261648 7.842898c-.348864.348863-.348864.914488 0 1.263636l.631818.631818c.348864.348864.914773.348864 1.263636 0L5 6.895455l2.842898 2.842897c.348863.348864.914772.348864 1.263636 0l.631818-.631818c.348864-.348864.348864-.914489 0-1.263636L6.895455 5z"},null,-1),Oh=[Ch];function Ih(e,n){return z(),te("svg",Eh,Oh)}const Ph=Va(wh,[["render",Ih]]),kh={},Lh={xmlns:"http://www.w3.org/2000/svg",width:"14",height:"10"},jh=A("path",{d:"M9.211364 7.59931l4.48338-4.867229c.407008-.441854.407008-1.158247 0-1.60046l-.73712-.80023c-.407008-.441854-1.066904-.441854-1.474243 0L7 5.198617 2.51662.33139c-.407008-.441853-1.066904-.441853-1.474243 0l-.737121.80023c-.407008.441854-.407008 1.158248 0 1.600461l4.48338 4.867228L7 10l2.211364-2.40069z"},null,-1),Dh=[jh];function Mh(e,n){return z(),te("svg",Lh,Dh)}const qh=Va(kh,[["render",Mh]]),Sl={Deselect:Ph,OpenIndicator:qh},$h={mounted(e,{instance:n}){if(n.appendToBody){const{height:t,top:o,left:r,width:i}=n.$refs.toggle.getBoundingClientRect();let l=window.scrollX||window.pageXOffset,s=window.scrollY||window.pageYOffset;e.unbindPosition=n.calculatePosition(e,n,{width:i+"px",left:l+r+"px",top:s+o+t+"px"}),document.body.appendChild(e)}},unmounted(e,{instance:n}){n.appendToBody&&(e.unbindPosition&&typeof e.unbindPosition=="function"&&e.unbindPosition(),e.parentNode&&e.parentNode.removeChild(e))}};function Fh(e){const n={};return Object.keys(e).sort().forEach(t=>{n[t]=e[t]}),JSON.stringify(n)}let Vh=0;function zh(){return++Vh}const Uh={components:Rt({},Sl),directives:{appendToBody:$h},mixins:[Th,Bh,Sh],compatConfig:{MODE:3},emits:["open","close","update:modelValue","search","search:compositionstart","search:compositionend","search:keydown","search:blur","search:focus","search:input","option:created","option:selecting","option:selected","option:deselecting","option:deselected"],props:{modelValue:{},components:{type:Object,default:()=>({})},options:{type:Array,default(){return[]}},disabled:{type:Boolean,default:!1},clearable:{type:Boolean,default:!0},deselectFromDropdown:{type:Boolean,default:!1},searchable:{type:Boolean,default:!0},multiple:{type:Boolean,default:!1},placeholder:{type:String,default:""},transition:{type:String,default:"vs__fade"},clearSearchOnSelect:{type:Boolean,default:!0},closeOnSelect:{type:Boolean,default:!0},label:{type:String,default:"label"},autocomplete:{type:String,default:"off"},reduce:{type:Function,default:e=>e},selectable:{type:Function,default:e=>!0},getOptionLabel:{type:Function,default(e){return typeof e=="object"?e.hasOwnProperty(this.label)?e[this.label]:console.warn(`[vue-select warn]: Label key "option.${this.label}" does not exist in options object ${JSON.stringify(e)}.
https://vue-select.org/api/props.html#getoptionlabel`):e}},getOptionKey:{type:Function,default(e){if(typeof e!="object")return e;try{return e.hasOwnProperty("id")?e.id:Fh(e)}catch(n){return console.warn(`[vue-select warn]: Could not stringify this option to generate unique key. Please provide'getOptionKey' prop to return a unique key for each option.
https://vue-select.org/api/props.html#getoptionkey`,e,n)}}},onTab:{type:Function,default:function(){this.selectOnTab&&!this.isComposing&&this.typeAheadSelect()}},taggable:{type:Boolean,default:!1},tabindex:{type:Number,default:null},pushTags:{type:Boolean,default:!1},filterable:{type:Boolean,default:!0},filterBy:{type:Function,default(e,n,t){return(n||"").toLocaleLowerCase().indexOf(t.toLocaleLowerCase())>-1}},filter:{type:Function,default(e,n){return e.filter(t=>{let o=this.getOptionLabel(t);return typeof o=="number"&&(o=o.toString()),this.filterBy(t,o,n)})}},createOption:{type:Function,default(e){return typeof this.optionList[0]=="object"?{[this.label]:e}:e}},resetOnOptionsChange:{default:!1,validator:e=>["function","boolean"].includes(typeof e)},clearSearchOnBlur:{type:Function,default:function({clearSearchOnSelect:e,multiple:n}){return e&&!n}},noDrop:{type:Boolean,default:!1},inputId:{type:String},dir:{type:String,default:"auto"},selectOnTab:{type:Boolean,default:!1},selectOnKeyCodes:{type:Array,default:()=>[13]},searchInputQuerySelector:{type:String,default:"[type=search]"},mapKeydown:{type:Function,default:(e,n)=>e},appendToBody:{type:Boolean,default:!1},calculatePosition:{type:Function,default(e,n,{width:t,top:o,left:r}){e.style.top=o,e.style.left=r,e.style.width=t}},dropdownShouldOpen:{type:Function,default({noDrop:e,open:n,mutableLoading:t}){return e?!1:n&&!t}},uid:{type:[String,Number],default:()=>zh()}},data(){return{search:"",open:!1,isComposing:!1,pushedTags:[],_value:[],deselectButtons:[]}},computed:{isReducingValues(){return this.$props.reduce!==this.$options.props.reduce.default},isTrackingValues(){return typeof this.modelValue>"u"||this.isReducingValues},selectedValue(){let e=this.modelValue;return this.isTrackingValues&&(e=this.$data._value),e!=null&&e!==""?[].concat(e):[]},optionList(){return this.options.concat(this.pushTags?this.pushedTags:[])},searchEl(){return this.$slots.search?this.$refs.selectedOptions.querySelector(this.searchInputQuerySelector):this.$refs.search},scope(){const e={search:this.search,loading:this.loading,searching:this.searching,filteredOptions:this.filteredOptions};return{search:{attributes:Rt({disabled:this.disabled,placeholder:this.searchPlaceholder,tabindex:this.tabindex,readonly:!this.searchable,id:this.inputId,"aria-autocomplete":"list","aria-labelledby":`vs${this.uid}__combobox`,"aria-controls":`vs${this.uid}__listbox`,ref:"search",type:"search",autocomplete:this.autocomplete,value:this.search},this.dropdownOpen&&this.filteredOptions[this.typeAheadPointer]?{"aria-activedescendant":`vs${this.uid}__option-${this.typeAheadPointer}`}:{}),events:{compositionstart:()=>this.isComposing=!0,compositionend:()=>this.isComposing=!1,keydown:this.onSearchKeyDown,blur:this.onSearchBlur,focus:this.onSearchFocus,input:n=>this.search=n.target.value}},spinner:{loading:this.mutableLoading},noOptions:{search:this.search,loading:this.mutableLoading,searching:this.searching},openIndicator:{attributes:{ref:"openIndicator",role:"presentation",class:"vs__open-indicator"}},listHeader:e,listFooter:e,header:Bl(Rt({},e),{deselect:this.deselect}),footer:Bl(Rt({},e),{deselect:this.deselect})}},childComponents(){return Rt(Rt({},Sl),this.components)},stateClasses(){return{"vs--open":this.dropdownOpen,"vs--single":!this.multiple,"vs--multiple":this.multiple,"vs--searching":this.searching&&!this.noDrop,"vs--searchable":this.searchable&&!this.noDrop,"vs--unsearchable":!this.searchable,"vs--loading":this.mutableLoading,"vs--disabled":this.disabled}},searching(){return!!this.search},dropdownOpen(){return this.dropdownShouldOpen(this)},searchPlaceholder(){return this.isValueEmpty&&this.placeholder?this.placeholder:void 0},filteredOptions(){const e=[].concat(this.optionList);if(!this.filterable&&!this.taggable)return e;const n=this.search.length?this.filter(e,this.search,this):e;if(this.taggable&&this.search.length){const t=this.createOption(this.search);this.optionExists(t)||n.unshift(t)}return n},isValueEmpty(){return this.selectedValue.length===0},showClearButton(){return!this.multiple&&this.clearable&&!this.open&&!this.isValueEmpty}},watch:{options(e,n){const t=()=>typeof this.resetOnOptionsChange=="function"?this.resetOnOptionsChange(e,n,this.selectedValue):this.resetOnOptionsChange;!this.taggable&&t()&&this.clearSelection(),this.modelValue&&this.isTrackingValues&&this.setInternalValueFromOptions(this.modelValue)},modelValue:{immediate:!0,handler(e){this.isTrackingValues&&this.setInternalValueFromOptions(e)}},multiple(){this.clearSelection()},open(e){this.$emit(e?"open":"close")}},created(){this.mutableLoading=this.loading},methods:{setInternalValueFromOptions(e){Array.isArray(e)?this.$data._value=e.map(n=>this.findOptionFromReducedValue(n)):this.$data._value=this.findOptionFromReducedValue(e)},select(e){this.$emit("option:selecting",e),this.isOptionSelected(e)?this.deselectFromDropdown&&(this.clearable||this.multiple&&this.selectedValue.length>1)&&this.deselect(e):(this.taggable&&!this.optionExists(e)&&(this.$emit("option:created",e),this.pushTag(e)),this.multiple&&(e=this.selectedValue.concat(e)),this.updateValue(e),this.$emit("option:selected",e)),this.onAfterSelect(e)},deselect(e){this.$emit("option:deselecting",e),this.updateValue(this.selectedValue.filter(n=>!this.optionComparator(n,e))),this.$emit("option:deselected",e)},clearSelection(){this.updateValue(this.multiple?[]:null)},onAfterSelect(e){this.closeOnSelect&&(this.open=!this.open,this.searchEl.blur()),this.clearSearchOnSelect&&(this.search="")},updateValue(e){typeof this.modelValue>"u"&&(this.$data._value=e),e!==null&&(Array.isArray(e)?e=e.map(n=>this.reduce(n)):e=this.reduce(e)),this.$emit("update:modelValue",e)},toggleDropdown(e){const n=e.target!==this.searchEl;n&&e.preventDefault();const t=[...this.deselectButtons||[],this.$refs.clearButton];if(this.searchEl===void 0||t.filter(Boolean).some(o=>o.contains(e.target)||o===e.target)){e.preventDefault();return}this.open&&n?this.searchEl.blur():this.disabled||(this.open=!0,this.searchEl.focus())},isOptionSelected(e){return this.selectedValue.some(n=>this.optionComparator(n,e))},isOptionDeselectable(e){return this.isOptionSelected(e)&&this.deselectFromDropdown},optionComparator(e,n){return this.getOptionKey(e)===this.getOptionKey(n)},findOptionFromReducedValue(e){const n=o=>JSON.stringify(this.reduce(o))===JSON.stringify(e),t=[...this.options,...this.pushedTags].filter(n);return t.length===1?t[0]:t.find(o=>this.optionComparator(o,this.$data._value))||e},closeSearchOptions(){this.open=!1,this.$emit("search:blur")},maybeDeleteValue(){if(!this.searchEl.value.length&&this.selectedValue&&this.selectedValue.length&&this.clearable){let e=null;this.multiple&&(e=[...this.selectedValue.slice(0,this.selectedValue.length-1)]),this.updateValue(e)}},optionExists(e){return this.optionList.some(n=>this.optionComparator(n,e))},normalizeOptionForSlot(e){return typeof e=="object"?e:{[this.label]:e}},pushTag(e){this.pushedTags.push(e)},onEscape(){this.search.length?this.search="":this.searchEl.blur()},onSearchBlur(){if(this.mousedown&&!this.searching)this.mousedown=!1;else{const{clearSearchOnSelect:e,multiple:n}=this;this.clearSearchOnBlur({clearSearchOnSelect:e,multiple:n})&&(this.search=""),this.closeSearchOptions();return}if(this.search.length===0&&this.options.length===0){this.closeSearchOptions();return}},onSearchFocus(){this.open=!0,this.$emit("search:focus")},onMousedown(){this.mousedown=!0},onMouseUp(){this.mousedown=!1},onSearchKeyDown(e){const n=r=>(r.preventDefault(),!this.isComposing&&this.typeAheadSelect()),t={8:r=>this.maybeDeleteValue(),9:r=>this.onTab(),27:r=>this.onEscape(),38:r=>(r.preventDefault(),this.typeAheadUp()),40:r=>(r.preventDefault(),this.typeAheadDown())};this.selectOnKeyCodes.forEach(r=>t[r]=n);const o=this.mapKeydown(t,this);if(typeof o[e.keyCode]=="function")return o[e.keyCode](e)}}},Hh=["dir"],Kh=["id","aria-expanded","aria-owns"],Gh={ref:"selectedOptions",class:"vs__selected-options"},Yh=["disabled","title","aria-label","onClick"],Wh={ref:"actions",class:"vs__actions"},Jh=["disabled"],Qh={class:"vs__spinner"},Xh=["id"],Zh=["id","aria-selected","onMouseover","onClick"],e0={key:0,class:"vs__no-options"},n0=xe(" Sorry, no matching options. "),t0=["id"];function o0(e,n,t,o,r,i){const l=ku("append-to-body");return z(),te("div",{dir:t.dir,class:cn(["v-select",i.stateClasses])},[hn(e.$slots,"header",Sn(wn(i.scope.header))),A("div",{id:`vs${t.uid}__combobox`,ref:"toggle",class:"vs__dropdown-toggle",role:"combobox","aria-expanded":i.dropdownOpen.toString(),"aria-owns":`vs${t.uid}__listbox`,"aria-label":"Search for option",onMousedown:n[1]||(n[1]=s=>i.toggleDropdown(s))},[A("div",Gh,[(z(!0),te(Re,null,Rn(i.selectedValue,(s,c)=>hn(e.$slots,"selected-option-container",{option:i.normalizeOptionForSlot(s),deselect:i.deselect,multiple:t.multiple,disabled:t.disabled},()=>[(z(),te("span",{key:t.getOptionKey(s),class:"vs__selected"},[hn(e.$slots,"selected-option",Sn(wn(i.normalizeOptionForSlot(s))),()=>[xe(ue(t.getOptionLabel(s)),1)]),t.multiple?(z(),te("button",{key:0,ref_for:!0,ref:d=>r.deselectButtons[c]=d,disabled:t.disabled,type:"button",class:"vs__deselect",title:`Deselect ${t.getOptionLabel(s)}`,"aria-label":`Deselect ${t.getOptionLabel(s)}`,onClick:d=>i.deselect(s)},[(z(),Ve(Nr(i.childComponents.Deselect)))],8,Yh)):Ie("",!0)]))])),256)),hn(e.$slots,"search",Sn(wn(i.scope.search)),()=>[A("input",va({class:"vs__search"},i.scope.search.attributes,Lu(i.scope.search.events)),null,16)])],512),A("div",Wh,[An(A("button",{ref:"clearButton",disabled:t.disabled,type:"button",class:"vs__clear",title:"Clear Selected","aria-label":"Clear Selected",onClick:n[0]||(n[0]=(...s)=>i.clearSelection&&i.clearSelection(...s))},[(z(),Ve(Nr(i.childComponents.Deselect)))],8,Jh),[[vi,i.showClearButton]]),hn(e.$slots,"open-indicator",Sn(wn(i.scope.openIndicator)),()=>[t.noDrop?Ie("",!0):(z(),Ve(Nr(i.childComponents.OpenIndicator),Sn(va({key:0},i.scope.openIndicator.attributes)),null,16))]),hn(e.$slots,"spinner",Sn(wn(i.scope.spinner)),()=>[An(A("div",Qh,"Loading...",512),[[vi,e.mutableLoading]])])],512)],40,Kh),G(Td,{name:t.transition},{default:_e(()=>[i.dropdownOpen?An((z(),te("ul",{id:`vs${t.uid}__listbox`,ref:"dropdownMenu",key:`vs${t.uid}__listbox`,class:"vs__dropdown-menu",role:"listbox",tabindex:"-1",onMousedown:n[2]||(n[2]=Mt((...s)=>i.onMousedown&&i.onMousedown(...s),["prevent"])),onMouseup:n[3]||(n[3]=(...s)=>i.onMouseUp&&i.onMouseUp(...s))},[hn(e.$slots,"list-header",Sn(wn(i.scope.listHeader))),(z(!0),te(Re,null,Rn(i.filteredOptions,(s,c)=>(z(),te("li",{id:`vs${t.uid}__option-${c}`,key:t.getOptionKey(s),role:"option",class:cn(["vs__dropdown-option",{"vs__dropdown-option--deselect":i.isOptionDeselectable(s)&&c===e.typeAheadPointer,"vs__dropdown-option--selected":i.isOptionSelected(s),"vs__dropdown-option--highlight":c===e.typeAheadPointer,"vs__dropdown-option--disabled":!t.selectable(s)}]),"aria-selected":c===e.typeAheadPointer?!0:null,onMouseover:d=>t.selectable(s)?e.typeAheadPointer=c:null,onClick:Mt(d=>t.selectable(s)?i.select(s):null,["prevent","stop"])},[hn(e.$slots,"option",Sn(wn(i.normalizeOptionForSlot(s))),()=>[xe(ue(t.getOptionLabel(s)),1)])],42,Zh))),128)),i.filteredOptions.length===0?(z(),te("li",e0,[hn(e.$slots,"no-options",Sn(wn(i.scope.noOptions)),()=>[n0])])):Ie("",!0),hn(e.$slots,"list-footer",Sn(wn(i.scope.listFooter)))],40,Xh)),[[l]]):(z(),te("ul",{key:1,id:`vs${t.uid}__listbox`,role:"listbox",style:{display:"none",visibility:"hidden"}},null,8,t0))]),_:3},8,["name"]),hn(e.$slots,"footer",Sn(wn(i.scope.footer)))],10,Hh)}const r0=Va(Uh,[["render",o0]]),a0=(e,n)=>{const t=e.__vccOpts||e;for(const[o,r]of n)t[o]=r;return t},i0={class:"ruleset-grid"},l0={class:"field"},s0=["value"],c0={class:"field"},u0={class:"ruleset-option"},d0={class:"ruleset-title"},f0={key:0,class:"ruleset-norma"},p0={key:0,class:"field"},m0={class:"field-name-input"},h0={id:"field-name-input__checkbox"},v0=["disabled"],g0={class:"fields-grid"},_0={key:1},b0={key:2,class:"expected-value"},y0=["onUpdate:modelValue"],A0=["onUpdate:modelValue"],N0=["value"],x0=["onUpdate:modelValue"],R0={class:"form-actions"},T0={__name:"ElementPage",props:{elementId:String,quick:Boolean},setup(e){const n=e,t=Ye("services"),o=Ye("builtInRuleSets"),r=Bc(),i=Tc(),l=je(null),s=je(null),c=je([]),d=je([]),u=je(null),p=je("todas"),m=je(localStorage.getItem("elementAutoName")==="true"),g=Ao({name:"",ruleSet:"",data:{}}),B=De(()=>!n.elementId),N=De(()=>d.value.find(W=>W.id===g.ruleSet)),w=De(()=>{const W={};for(const D of N.value?.regras??[]){const T=[];D.operador&&D.valor!==void 0&&T.push({...D,parametro:D.parametro});for(const Z of D.condicoes??[])Z.quando&&T.push({...Z.quando,parametro:D.parametro}),Z.verificar&&T.push(Z.verificar);for(const Z of T){if(!Z.parametro||Z.valor===void 0)continue;W[Z.parametro]??=[];const oe=Q(Z.operador,Z.valor,N.value.parametros?.[Z.parametro]?.unidade);W[Z.parametro].includes(oe)||W[Z.parametro].push(oe)}}return W});function Q(W,D,T=""){const oe=`${typeof D=="boolean"?D?"Sim":"Não":D}${T??""}`;switch(W){case">=":return`no mínimo, ${oe}`;case"<=":return`no máximo, ${oe}`;case">":return`maior que ${oe}`;case"<":return`menor que ${oe}`;case"==":case"eq":return`igual a ${oe}`;default:return oe}}const q=De(()=>{const W=d.value.map(D=>D.norma?.nome).filter(Boolean);return["todas",...new Set(W)]}),K=De(()=>p.value==="todas"?d.value:d.value.filter(W=>W.norma?.nome===p.value));async function C(){n.quick&&t.quickEvaluationService.clear();const W=await t.ruleSetService.list();d.value=[...o.map(T=>T.ruleSet),...W],B.value||(l.value=await t.repositories.elementRepository.get(n.elementId));const D=l.value?.environmentId??r.query.environmentId;if(!(!n.quick&&(!D||!B.value&&!l.value))){if(n.quick||(s.value=await t.repositories.environmentRepository.get(D),c.value=await t.projectService.listElements(D)),l.value){const T=await t.evaluationService.listEvaluations(l.value.id);u.value=T[0]}g.name=l.value?.name??"",g.ruleSet=r.query.ruleSet??l.value?.rule??d.value[0]?.id??"",Object.assign(g.data,u.value?.data??{})}}function U(){const W={},D=N.value?.parametros??{};for(const[T,Z]of Object.entries(D)){const oe=g.data[T];oe===""||oe===void 0||oe===null||(Z.tipo==="number"?W[T]=Number(oe):Z.tipo==="boolean"?W[T]=oe===!0||oe==="true":W[T]=oe)}return W}async function re(){if(!N.value)return window.alert("Selecione um conjunto de regras.");const W={name:g.name,type:N.value.nome,rule:N.value.id};try{l.value?await t.projectService.updateElement(l.value.id,W):await t.projectService.createElement(s.value.id,W),i.push(`/projects/${s.value.projectId}/environments/${s.value.id}`)}catch(D){window.alert(D.message)}}function be(W){if(!W)return"";const D=new Set(c.value.filter(oe=>oe.id!==l.value?.id).map(oe=>oe.name));if(!D.has(W))return W;let T=1,Z=`${W} (${T})`;for(;D.has(Z);)T++,Z=`${W} (${T})`;return Z}yt([m,()=>g.ruleSet],([W,D])=>{if(localStorage.setItem("elementAutoName",String(W)),W){const Z=d.value.find(oe=>oe.id===D)?.nome??"";g.name=be(Z)}});async function Se(){if(!N.value)return window.alert("Selecione um conjunto de regras.");const W=U();if(n.quick){try{t.quickEvaluationService.evaluate({name:g.name,checklist:N.value,data:W}),i.push("/quick-evaluation/result")}catch(T){window.alert(T.message)}return}const D={name:g.name,type:N.value.nome,rule:N.value.id};try{const T=l.value?await t.projectService.updateElement(l.value.id,D):await t.projectService.createElement(s.value.id,D);await t.evaluationService.evaluateElement({elementId:T.id,checklist:N.value,data:W}),i.push(`/elements/${T.id}/evaluation`)}catch(T){window.alert(T.message)}}yt(p,()=>{K.value.some(D=>D.id===g.ruleSet)||(g.ruleSet=K.value[0]?.id??"")}),yt(()=>g.ruleSet,()=>{const W=Object.keys(N.value?.parametros??{});Object.keys(g.data).forEach(D=>{W.includes(D)||delete g.data[D]})});function pe(W,D,T){const Z=(T||"").toLowerCase().trim();if(!Z)return!0;const oe=W.nome?.toLowerCase().includes(Z),Ke=W.norma?.nome?.toLowerCase().includes(Z),J=W.regras?.some(Te=>Te.nome?.toLowerCase().includes(Z)||Te.id?.toLowerCase().includes(Z));return!!(oe||Ke||J)}return ct(C),(W,D)=>e.quick||s.value?(z(),te(Re,{key:0},[e.quick?Ie("",!0):(z(),Ve(ae(Ee),{key:0,class:"back-link",to:`/projects/${s.value.projectId}/environments/${s.value.id}`},{default:_e(()=>[G(ae(At),{size:18,"aria-hidden":"true"}),xe(ue(s.value.name),1)]),_:1},8,["to"])),G(lt,{title:e.quick?"Avaliação rápida":B.value?"Novo elemento":l.value.name,description:"Escolha o tipo e informe as medidas observadas."},null,8,["title"]),A("form",{class:"form-card",onSubmit:D[5]||(D[5]=Mt(()=>{},["prevent"]))},[A("div",i0,[A("label",l0,[D[7]||(D[7]=A("span",null,"Norma de referência",-1)),An(A("select",{"onUpdate:modelValue":D[0]||(D[0]=T=>p.value=T)},[D[6]||(D[6]=A("option",{value:"todas"},"Todas as normas",-1)),(z(!0),te(Re,null,Rn(q.value.filter(T=>T!=="todas"),T=>(z(),te("option",{key:T,value:T},ue(T),9,s0))),128))],512),[[Er,p.value]])]),A("label",c0,[D[8]||(D[8]=A("span",null,"Tipo de elemento *",-1)),G(ae(r0),{modelValue:g.ruleSet,"onUpdate:modelValue":D[1]||(D[1]=T=>g.ruleSet=T),options:K.value,label:"nome",reduce:T=>T.id,"filter-by":pe,placeholder:"Pesquise o elemento ou regra..."},{option:_e(T=>[A("div",u0,[A("span",d0,ue(T.nome),1),T.norma?.nome?(z(),te("small",f0," ("+ue(T.norma.nome)+") ",1)):Ie("",!0)])]),_:1},8,["modelValue","options","reduce"])])]),e.quick?Ie("",!0):(z(),te("label",p0,[A("div",m0,[D[9]||(D[9]=A("span",null,"Nome do elemento *",-1)),A("div",h0,[An(A("input",{type:"checkbox",id:"auto-name-chk","onUpdate:modelValue":D[2]||(D[2]=T=>m.value=T)},null,512),[[Yd,m.value]]),A("p",{onClick:D[3]||(D[3]=Mt(T=>m.value=!m.value,["stop"]))},"Auto Nomear")])]),An(A("input",{"onUpdate:modelValue":D[4]||(D[4]=T=>g.name=T),required:"",placeholder:"Ex.: Porta principal",disabled:m.value},null,8,v0),[[vo,g.name]])])),D[14]||(D[14]=A("div",{class:"form-divider"},[A("strong",null,"Dados para avaliação"),A("span",null,"Campos definidos pelo conjunto de regras selecionado.")],-1)),A("div",g0,[(z(!0),te(Re,null,Rn(N.value?.parametros,(T,Z)=>(z(),te("label",{key:Z,class:"field"},[A("span",null,[xe(ue(T.label??Z)+" ",1),T.obrigatorio?(z(),te(Re,{key:0},[xe(" *")],64)):Ie("",!0),T.unidade?(z(),te("small",_0," ("+ue(T.unidade)+")",1)):Ie("",!0),w.value[Z]?.length?(z(),te("small",b0," Esperado: "+ue(w.value[Z].join(" ou ")),1)):Ie("",!0)]),T.tipo==="boolean"?An((z(),te("select",{key:0,"onUpdate:modelValue":oe=>g.data[Z]=oe},[...D[10]||(D[10]=[A("option",{value:""},"Não informado",-1),A("option",{value:!0},"Sim",-1),A("option",{value:!1},"Não",-1)])],8,y0)),[[Er,g.data[Z]]]):T.tipo==="select"?An((z(),te("select",{key:1,"onUpdate:modelValue":oe=>g.data[Z]=oe},[D[11]||(D[11]=A("option",{value:""},"Selecione",-1)),(z(!0),te(Re,null,Rn(T.opcoes??[],oe=>(z(),te("option",{key:oe,value:oe},ue(oe),9,N0))),128))],8,A0)),[[Er,g.data[Z]]]):An((z(),te("input",{key:2,"onUpdate:modelValue":oe=>g.data[Z]=oe,type:"number",inputmode:"decimal",step:"any"},null,8,x0)),[[vo,g.data[Z]]])]))),128))]),A("div",R0,[G(ae(Ee),{class:"button button--ghost",to:e.quick?"/projects":`/projects/${s.value.projectId}/environments/${s.value.id}`},{default:_e(()=>[...D[12]||(D[12]=[xe(" Cancelar ",-1)])]),_:1},8,["to"]),e.quick?Ie("",!0):(z(),te("button",{key:0,class:"button button--outline",type:"button",onClick:re}," Salvar e voltar ")),A("button",{class:"button",type:"button",onClick:Se},ue(e.quick?"Avaliar":"Salvar e avaliar"),1),B.value?Ie("",!0):(z(),Ve(ae(Ee),{key:1,class:"button button--outline",to:`/elements/${l.value.id}/evaluation`},{default:_e(()=>[G(bo,{status:u.value?"conforme":"nao_avaliado"},null,8,["status"]),D[13]||(D[13]=xe(" Ver resultado ",-1))]),_:1},8,["to"]))])],32)],64)):(z(),Ve(Vn,{key:1,title:"Elemento não encontrado",text:"Volte para o ambiente e tente novamente."},{default:_e(()=>[G(ae(Ee),{class:"button",to:"/projects"},{default:_e(()=>[...D[15]||(D[15]=[xe("Projetos",-1)])]),_:1})]),_:1}))}},ra=a0(T0,[["__scopeId","data-v-091124e6"]]),B0={class:"results"},S0={key:0},w0={key:1,class:"result-values"},E0={key:2},wl={__name:"EvaluationPage",props:{elementId:String,quick:Boolean},setup(e){const n=e,t=Ye("services"),o=je(null),r=je(null),i=De(()=>r.value?.result??[]),l=De(()=>i.value.filter(B=>["nao_conforme","erro","invalido"].includes(B.status)).length),s=De(()=>i.value.filter(B=>["nao_avaliado","manual","atencao"].includes(B.status)).length),c=De(()=>i.value.length-l.value-s.value),d=De(()=>l.value>0?"nao_conforme":s.value>0?"nao_avaliado":"conforme"),u=De(()=>{switch(d.value){case"conforme":return"Elemento conforme";case"nao_conforme":return"Há itens não conformes";default:return"Avaliação pendente"}});function p(B){return B?new Intl.DateTimeFormat("pt-BR",{dateStyle:"medium",timeStyle:"short"}).format(new Date(B)):""}function m(B,N,w=""){const q=`${typeof N=="boolean"?N?"Sim":"Não":N}${w??""}`;switch(B){case">=":return`no mínimo, ${q}`;case"<=":return`no máximo, ${q}`;case">":return`maior que ${q}`;case"<":return`menor que ${q}`;case"==":case"eq":return`igual a ${q}`;default:return q}}async function g(){if(n.quick){const B=t.quickEvaluationService.getCurrent();o.value=B?.element??null,r.value=B?.evaluation??null;return}if(o.value=await t.repositories.elementRepository.get(n.elementId),o.value){const B=await t.evaluationService.listEvaluations(o.value.id);r.value=B[0]??null}}return ct(g),(B,N)=>o.value&&r.value?(z(),te(Re,{key:0},[G(ae(Ee),{class:"back-link",to:e.quick?"/quick-evaluation":`/elements/${o.value.id}`},{default:_e(()=>[G(ae(At),{size:18,"aria-hidden":"true"}),xe(ue(o.value.name),1)]),_:1},8,["to"]),G(lt,{eyebrow:"Resultado",title:"Avaliação",description:`Realizada em ${p(r.value.evaluatedAt)}`},null,8,["description"]),A("section",{class:cn(["result-summary",`result-summary--${d.value}`])},[G(bo,{status:d.value},null,8,["status"]),A("h2",null,ue(u.value),1),A("p",null,ue(c.value)+" regra(s) atendida(s), "+ue(l.value)+" não conforme(s) e "+ue(s.value)+" para verificar. ",1)],2),A("section",B0,[N[1]||(N[1]=A("h2",null,"Regras avaliadas",-1)),(z(!0),te(Re,null,Rn(i.value,w=>(z(),te("article",{key:w.id,class:cn(["result-row",`result-row--${w.status}`])},[A("div",null,[G(bo,{status:w.status},null,8,["status"]),A("h3",null,ue(w.nome??w.id),1),w.mensagem?(z(),te("p",S0,ue(w.mensagem),1)):Ie("",!0),w.valorInformado!==void 0?(z(),te("p",w0,[N[0]||(N[0]=xe(" Informado: ",-1)),A("strong",null,ue(w.valorInformado),1),w.unidade?(z(),te(Re,{key:0},[xe(ue(w.unidade),1)],64)):Ie("",!0),w.valorEsperado!==void 0?(z(),te(Re,{key:1},[xe(" · Esperado: "+ue(m(w.operador,w.valorEsperado,w.unidade)),1)],64)):Ie("",!0)])):Ie("",!0),w.referencia?(z(),te("small",E0,ue(w.referencia),1)):Ie("",!0)])],2))),128))]),e.quick?(z(),Ve(ae(Ee),{key:0,class:"button",to:"/quick-evaluation"},{default:_e(()=>[...N[2]||(N[2]=[xe(" Nova avaliação rápida ",-1)])]),_:1})):Ie("",!0)],64)):o.value?(z(),te(Re,{key:1},[G(ae(Ee),{class:"back-link",to:e.quick?"/quick-evaluation":`/elements/${o.value.id}`},{default:_e(()=>[G(ae(At),{size:18,"aria-hidden":"true"}),N[3]||(N[3]=xe("Elemento ",-1))]),_:1},8,["to"]),G(Vn,{title:"Ainda não há avaliação",text:"Preencha os dados do elemento para executar as regras."},{default:_e(()=>[G(ae(Ee),{class:"button",to:e.quick?"/quick-evaluation":`/elements/${o.value.id}`},{default:_e(()=>[xe(ue(e.quick?"Nova avaliação rápida":"Avaliar elemento"),1)]),_:1},8,["to"])]),_:1})],64)):(z(),Ve(Vn,{key:2,title:"Avaliação não encontrada",text:e.quick?"Inicie uma avaliação rápida para ver o resultado.":"O elemento pode ter sido removido."},{default:_e(()=>[G(ae(Ee),{class:"button",to:e.quick?"/quick-evaluation":"/projects"},{default:_e(()=>[xe(ue(e.quick?"Avaliação rápida":"Projetos"),1)]),_:1},8,["to"])]),_:1},8,["text"]))}};function C0(e=""){const n=e.replace(/^(\.\.\/|\.\/|\/)+/,"").split("/");return n.length>1?n.slice(0,-1).join("/"):""}function O0(e,n){const[t]=e,o=t?.norma;return o?.nome?`${o.nome}${o.versao?` · ${o.versao}`:""}`:n.split("/").at(-1)?.replaceAll("-"," ")??"Regras padrão"}function I0(e){const n=new Map;for(const t of e){const o=C0(t.path)||t.ruleSet.id,r=n.get(o)??{id:o,source:"standard",ruleSets:[]};r.ruleSets.push(t.ruleSet),n.set(o,r)}return[...n.values()].map(t=>({...t,nome:O0(t.ruleSets,t.id)})).sort((t,o)=>t.nome.localeCompare(o.nome))}function P0(e){const n=new Map;for(const t of e){const o=t.grupo,r=o?.id??t.id,i=n.get(r)??{id:r,nome:o?.nome??t.nome,source:"user",ruleSets:[]};i.ruleSets.push(t),n.set(r,i)}return[...n.values()].sort((t,o)=>t.nome.localeCompare(o.nome))}const k0={class:"documentation"},L0={class:"documentation__intro"},j0={class:"documentation__icon"},D0=["href"],M0={class:"documentation__section"},q0={key:0,class:"muted",role:"status"},$0={key:0,class:"alert alert--error",role:"alert"},F0={class:"rules-section rules-section--first"},V0={class:"card-list"},z0={class:"rule-source"},U0={key:0,class:"rules-card__actions"},H0=["onClick"],K0=["onClick"],G0=["onClick"],Y0={class:"import-actions"},W0={class:"button button--outline import-button"},J0=["disabled"],Q0={class:"button button--outline import-button"},X0=["disabled"],Z0={key:0,class:"muted",role:"status"},ev={key:1,class:"alert alert--error",role:"alert"},nv={key:2,class:"muted",role:"status"},tv={class:"rules-section rules-section--first"},ov={class:"card-list"},rv={class:"card__icon"},av={class:"rules-section"},iv={key:0,class:"card-list"},lv={class:"card__icon"},aa={__name:"RulesPage",props:{source:String,groupId:String,documentation:Boolean},setup(e){const n=e,t=Ye("services"),o=Ye("builtInRuleSets");Tc();const r=De(()=>"/rule-engine-skill/SKILL.md"),i=je([]),l=je(!0),s=je(!1),c=je(""),d=De(()=>i.value.filter(C=>C.source==="standard")),u=De(()=>i.value.filter(C=>C.source==="user")),p=De(()=>i.value.find(C=>C.source===n.source&&C.id===n.groupId));function m(C){return C.regras?.length??0}function g(C){return Object.keys(C.parametros??{}).length}function B(C){return C.ruleSets.reduce((U,re)=>U+m(re),0)}async function N(){l.value=!0;try{const C=await t.ruleSetService.list();i.value=[...I0(o),...P0(C)]}finally{l.value=!1}}function w(C){return`/rules/${encodeURIComponent(C.source)}/${encodeURIComponent(C.id)}`}async function Q(C){const U=[...C.target.files??[]];if(!U.length)return;const re=U.filter(T=>/\.(json|ya?ml)$/i.test(T.name)),be=U.length-re.length;if(!re.length){c.value="Nenhum arquivo .json, .yaml ou .yml encontrado.",C.target.value="";return}c.value="",s.value=!0;const Se=re[0].webkitRelativePath?.split("/")[0],pe={id:`importado-${Se||crypto.randomUUID()}`,nome:Se||(re.length===1?re[0].name.replace(/\.(json|ya?ml)$/i,""):"Regras importadas")},W=[];for(const T of re)try{const Z=await T.text();/\.json$/i.test(T.name)?await t.ruleSetService.importFromJson(Z,pe):await t.ruleSetService.importFromYaml(Z,pe)}catch(Z){W.push(`${T.name}: ${Z.message}`)}const D=[];W.length&&D.push(re.length===1?W[0]:`${W.length} de ${re.length} arquivo(s) não importado(s) — ${W.join("; ")}`),be&&D.push(`${be} arquivo(s) ignorado(s) por não serem .json/.yaml/.yml.`),c.value=D.join(" "),await N(),C.target.value="",s.value=!1}async function q(C){if(window.confirm(`Excluir "${C.nome}"? Esta ação não pode ser desfeita.`)){c.value="";try{await t.ruleSetService.delete(C.id),await N()}catch(U){c.value=U.message}}}async function K(C,U){try{const re=U==="json"?await t.ruleSetService.exportByIdToJson(C.id):await t.ruleSetService.exportByIdToYaml(C.id),be=U==="json"?"application/json":"text/yaml",Se=document.createElement("a");Se.href=URL.createObjectURL(new Blob([re],{type:be})),Se.download=`${C.id}.${U}`,Se.click(),URL.revokeObjectURL(Se.href)}catch(re){c.value=re.message}}return ct(N),(C,U)=>e.documentation?(z(),te(Re,{key:0},[G(ae(Ee),{class:"back-link",to:"/rules"},{default:_e(()=>[G(ae(At),{size:18,"aria-hidden":"true"}),U[0]||(U[0]=xe("Conjuntos de regras",-1))]),_:1}),G(lt,{eyebrow:"Documentação",title:"Crie e importe regras",description:"Monte checklists em YAML para avaliar os elementos do seu projeto."}),A("div",k0,[U[6]||(U[6]=cd(`<section class="documentation__section"><h2>Formato mínimo de um checklist</h2><p>Cada arquivo é um checklist independente. Os campos obrigatórios são <code>id</code>, <code>nome</code>, <code>parametros</code> (objeto) e <code>regras</code> (lista). YAML e JSON são aceitos.</p><pre class="documentation-code"><code>id: bebedouros
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
      mensagem: Avaliar como rampa.</code></pre><p class="documentation__note"> Se nenhuma condição bater, o resultado fica <code>nao_avaliado</code>. Um parâmetro usado dentro de <code>verificar</code> (aqui, <code>possui_chanfro</code>) também precisa estar declarado em <code>parametros</code>. </p></details></section><section class="documentation__section"><h2>Resultados possíveis</h2><ul class="documentation__list"><li><code>conforme</code> / <code>nao_conforme</code> — comparação direta, ou condição explícita.</li><li><code>manual</code> — regra do tipo <code>checklist</code>.</li><li><code>atencao</code> — resultado explícito opcional numa condição de <code>conditional</code>.</li><li><code>nao_avaliado</code> — parâmetro opcional sem valor, ou nenhuma condição satisfeita.</li><li><code>invalido</code> — parâmetro obrigatório sem valor preenchido.</li></ul></section>`,4)),A("section",L0,[A("span",j0,[G(ae(Rm),{size:24,"aria-hidden":"true"})]),A("div",null,[U[1]||(U[1]=A("h1",null,"Crie suas regras com IA",-1)),A("a",{class:"button button--outline",href:`${r.value}`,download:"SKILL.md"}," Baixar SKILL.md ",8,D0),U[2]||(U[2]=A("p",null,"Um arquivo de texto com instruções prontas para uma IA (Claude, ChatGPT, Cursor) gerar checklists neste formato a partir do que você descrever. Baixe, cole numa conversa com a IA e peça a regra que precisa — sem aprender YAML.",-1))])]),A("section",M0,[U[4]||(U[4]=A("h2",null,"Importação",-1)),U[5]||(U[5]=A("p",null,[xe("Escolha um ou mais arquivos YAML/JSON, ou uma pasta com vários checklists — arquivos que não forem "),A("code",null,".yaml"),xe(", "),A("code",null,".yml"),xe(" ou "),A("code",null,".json"),xe(" são ignorados automaticamente. Tudo fica armazenado somente neste navegador.")],-1)),G(ae(Ee),{class:"button",to:"/rules"},{default:_e(()=>[...U[3]||(U[3]=[xe("Ir para importação",-1)])]),_:1})])])],64)):e.groupId?(z(),te(Re,{key:1},[G(ae(Ee),{class:"back-link",to:"/rules"},{default:_e(()=>[G(ae(At),{size:18,"aria-hidden":"true"}),U[7]||(U[7]=xe("Conjuntos de regras",-1))]),_:1}),l.value?(z(),te("p",q0,"Carregando…")):p.value?(z(),te(Re,{key:1},[G(lt,{eyebrow:e.source==="user"?"Importado":"Padrão",title:p.value.nome,description:`${p.value.ruleSets.length} checklists que compõem este conjunto.`},null,8,["eyebrow","title","description"]),c.value?(z(),te("p",$0,ue(c.value),1)):Ie("",!0),A("section",F0,[U[8]||(U[8]=A("h2",null,"Checklists",-1)),A("div",V0,[(z(!0),te(Re,null,Rn(p.value.ruleSets,re=>(z(),te("article",{key:re.id,class:"card rules-card"},[A("div",null,[A("div",z0,ue(e.source==="user"?"Adicionada por você":"Padrão"),1),A("h2",null,ue(re.nome),1),A("p",null,ue(re.norma?.nome??"Conjunto personalizado"),1),A("small",null,ue(m(re))+" regras · "+ue(g(re))+" campos",1)]),e.source==="user"?(z(),te("div",U0,[A("button",{class:"text-button",onClick:be=>K(re,"yaml")},"Exportar YAML",8,H0),A("button",{class:"text-button",onClick:be=>K(re,"json")},"Exportar JSON",8,K0),A("button",{class:"icon-button icon-button--danger",title:"Excluir","aria-label":"Excluir",onClick:be=>q(re)},[G(ae(vr),{size:18,"aria-hidden":"true"})],8,G0)])):Ie("",!0)]))),128))])])],64)):(z(),Ve(Vn,{key:2,title:"Conjunto não encontrado",text:"Ele pode ter sido removido."}))],64)):(z(),te(Re,{key:2},[G(lt,{eyebrow:"Biblioteca",title:"Conjuntos de regras",description:"Cada pasta ou importação é exibida como um único conjunto."},{action:_e(()=>[A("span",Y0,[G(ae(Ee),{class:"button button--ghost",to:"/rules/documentation"},{default:_e(()=>[...U[9]||(U[9]=[xe("Como criar regras",-1)])]),_:1}),A("label",W0,[U[10]||(U[10]=xe(" Importar arquivos ",-1)),A("input",{type:"file",accept:".json,.yaml,.yml",multiple:"",disabled:s.value,onChange:Q},null,40,J0)]),A("label",Q0,[U[11]||(U[11]=xe(" Importar pasta ",-1)),A("input",{type:"file",accept:".json,.yaml,.yml",webkitdirectory:"",disabled:s.value,onChange:Q},null,40,X0)])])]),_:1}),s.value?(z(),te("p",Z0,"Importando…")):Ie("",!0),c.value?(z(),te("p",ev,ue(c.value),1)):Ie("",!0),l.value?(z(),te("p",nv,"Carregando…")):(z(),te(Re,{key:3},[A("section",tv,[U[13]||(U[13]=A("h2",null,"Regras padrão",-1)),A("div",ov,[(z(!0),te(Re,null,Rn(d.value,re=>(z(),Ve(ae(Ee),{key:re.id,class:"card card--interactive rules-card",to:w(re)},{default:_e(()=>[A("span",rv,[G(ae(wt),{size:22,"aria-hidden":"true"})]),A("div",null,[U[12]||(U[12]=A("div",{class:"rule-source"},"Padrão",-1)),A("h2",null,ue(re.nome),1),A("p",null,ue(re.ruleSets.length)+" checklists · "+ue(B(re))+" regras",1)]),G(ae(Jo),{size:20,class:"chevron","aria-hidden":"true"})]),_:2},1032,["to"]))),128))])]),A("section",av,[U[15]||(U[15]=A("h2",null,"Suas regras",-1)),u.value.length?(z(),te("div",iv,[(z(!0),te(Re,null,Rn(u.value,re=>(z(),Ve(ae(Ee),{key:re.id,class:"card card--interactive rules-card",to:w(re)},{default:_e(()=>[A("span",lv,[G(ae(wt),{size:22,"aria-hidden":"true"})]),A("div",null,[U[14]||(U[14]=A("div",{class:"rule-source"},"Adicionada por você",-1)),A("h2",null,ue(re.nome),1),A("p",null,ue(re.ruleSets.length)+" checklists",1)]),G(ae(Jo),{size:20,class:"chevron","aria-hidden":"true"})]),_:2},1032,["to"]))),128))])):(z(),Ve(Vn,{key:1,title:"Nenhum conjunto importado",text:"Importe arquivos ou uma pasta para começar."}))])],64))],64))}},sv=dm({history:Hp("/"),routes:[{path:"/",redirect:"/projects"},{path:"/projects",component:Zm},{path:"/projects/:projectId",component:mh,props:!0},{path:"/projects/:projectId/environments/:environmentId",component:bh,props:!0},{path:"/elements/new",component:ra},{path:"/elements/:elementId",component:ra,props:!0},{path:"/elements/:elementId/evaluation",component:wl,props:!0},{path:"/quick-evaluation",component:ra,props:{quick:!0}},{path:"/quick-evaluation/result",component:wl,props:{quick:!0}},{path:"/rules",component:aa},{path:"/rules/documentation",component:aa,props:{documentation:!0}},{path:"/rules/:source/:groupId",component:aa,props:!0},{path:"/:pathMatch(.*)*",redirect:"/projects"}]});async function cv(){const[e,n]=await Promise.all([kf(),lp()]);Zd(qm).provide("services",e).provide("builtInRuleSets",n).use(sv).mount("#app"),af({immediate:!0})}cv().catch(e=>{document.querySelector("#app").innerHTML=`<main class="fatal-error"><h1>Não foi possível abrir o aplicativo</h1><p>${e.message}</p></main>`});
