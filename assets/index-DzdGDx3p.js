(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))t(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&t(l)}).observe(document,{childList:!0,subtree:!0});function o(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function t(r){if(r.ep)return;r.ep=!0;const i=o(r);fetch(r.href,i)}})();function Ba(e){const n=Object.create(null);for(const o of e.split(","))n[o]=1;return o=>o in n}const qe={},Co=[],$n=()=>{},El=()=>!1,Xt=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),Zt=e=>e.startsWith("onUpdate:"),Je=Object.assign,Ra=(e,n)=>{const o=e.indexOf(n);o>-1&&e.splice(o,1)},wc=Object.prototype.hasOwnProperty,ke=(e,n)=>wc.call(e,n),ve=Array.isArray,Oo=e=>yt(e)==="[object Map]",Vo=e=>yt(e)==="[object Set]",Ua=e=>yt(e)==="[object Date]",Ae=e=>typeof e=="function",Fe=e=>typeof e=="string",Cn=e=>typeof e=="symbol",Le=e=>e!==null&&typeof e=="object",Cl=e=>(Le(e)||Ae(e))&&Ae(e.then)&&Ae(e.catch),Ol=Object.prototype.toString,yt=e=>Ol.call(e),Ec=e=>yt(e).slice(8,-1),Il=e=>yt(e)==="[object Object]",Ta=e=>Fe(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,et=Ba(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),er=e=>{const n=Object.create(null);return(o=>n[o]||(n[o]=e(o)))},Cc=/-\w/g,dn=er(e=>e.replace(Cc,n=>n.slice(1).toUpperCase())),Oc=/\B([A-Z])/g,xo=er(e=>e.replace(Oc,"-$1").toLowerCase()),nr=er(e=>e.charAt(0).toUpperCase()+e.slice(1)),kt=er(e=>e?`on${nr(e)}`:""),qn=(e,n)=>!Object.is(e,n),Lt=(e,...n)=>{for(let o=0;o<e.length;o++)e[o](...n)},Pl=(e,n,o,t=!1)=>{Object.defineProperty(e,n,{configurable:!0,enumerable:!1,writable:t,value:o})},or=e=>{const n=parseFloat(e);return isNaN(n)?e:n},Ic=e=>{const n=Fe(e)?Number(e):NaN;return isNaN(n)?e:n};let Ha;const tr=()=>Ha||(Ha=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function rr(e){if(ve(e)){const n={};for(let o=0;o<e.length;o++){const t=e[o],r=Fe(t)?jc(t):rr(t);if(r)for(const i in r)n[i]=r[i]}return n}else if(Fe(e)||Le(e))return e}const Pc=/;(?![^(]*\))/g,kc=/:([^]+)/,Lc=/\/\*[^]*?\*\//g;function jc(e){const n={};return e.replace(Lc,"").split(Pc).forEach(o=>{if(o){const t=o.split(kc);t.length>1&&(n[t[0].trim()]=t[1].trim())}}),n}function cn(e){let n="";if(Fe(e))n=e;else if(ve(e))for(let o=0;o<e.length;o++){const t=cn(e[o]);t&&(n+=t+" ")}else if(Le(e))for(const o in e)e[o]&&(n+=o+" ");return n.trim()}function Sn(e){if(!e)return null;let{class:n,style:o}=e;return n&&!Fe(n)&&(e.class=cn(n)),o&&(e.style=rr(o)),e}const Dc="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",qc=Ba(Dc);function kl(e){return!!e||e===""}function Mc(e,n){if(e.length!==n.length)return!1;let o=!0;for(let t=0;o&&t<e.length;t++)o=zo(e[t],n[t]);return o}function zo(e,n){if(e===n)return!0;let o=Ua(e),t=Ua(n);if(o||t)return o&&t?e.getTime()===n.getTime():!1;if(o=Cn(e),t=Cn(n),o||t)return e===n;if(o=ve(e),t=ve(n),o||t)return o&&t?Mc(e,n):!1;if(o=Le(e),t=Le(n),o||t){if(!o||!t)return!1;const r=Object.keys(e).length,i=Object.keys(n).length;if(r!==i)return!1;for(const l in e){const s=e.hasOwnProperty(l),c=n.hasOwnProperty(l);if(s&&!c||!s&&c||!zo(e[l],n[l]))return!1}}return String(e)===String(n)}function Sa(e,n){return e.findIndex(o=>zo(o,n))}const Ll=e=>!!(e&&e.__v_isRef===!0),ue=e=>Fe(e)?e:e==null?"":ve(e)||Le(e)&&(e.toString===Ol||!Ae(e.toString))?Ll(e)?ue(e.value):JSON.stringify(e,jl,2):String(e),jl=(e,n)=>Ll(n)?jl(e,n.value):Oo(n)?{[`Map(${n.size})`]:[...n.entries()].reduce((o,[t,r],i)=>(o[gr(t,i)+" =>"]=r,o),{})}:Vo(n)?{[`Set(${n.size})`]:[...n.values()].map(o=>gr(o))}:Cn(n)?gr(n):Le(n)&&!ve(n)&&!Il(n)?String(n):n,gr=(e,n="")=>{var o;return Cn(e)?`Symbol(${(o=e.description)!=null?o:n})`:e};let Qe;class $c{constructor(n=!1){this.detached=n,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this._warnOnRun=!0,this.__v_skip=!0,!n&&Qe&&(Qe.active?(this.parent=Qe,this.index=(Qe.scopes||(Qe.scopes=[])).push(this)-1):(this._active=!1,this._warnOnRun=!1))}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let n,o;if(this.scopes){const t=this.scopes.slice();for(n=0,o=t.length;n<o;n++)t[n].pause()}for(n=0,o=this.effects.length;n<o;n++)this.effects[n].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let n,o;if(this.scopes){const r=this.scopes.slice();for(n=0,o=r.length;n<o;n++)r[n].resume()}const t=this.effects.slice();for(n=0,o=t.length;n<o;n++)t[n].resume()}}run(n){if(this._active){const o=Qe;try{return Qe=this,n()}finally{Qe=o}}}on(){++this._on===1&&(this.prevScope=Qe,Qe=this)}off(){if(this._on>0&&--this._on===0){if(Qe===this)Qe=this.prevScope;else{let n=Qe;for(;n;){if(n.prevScope===this){n.prevScope=this.prevScope;break}n=n.prevScope}}this.prevScope=void 0}}stop(n){if(this._active){this._active=!1;let o,t;for(o=0,t=this.effects.length;o<t;o++)this.effects[o].stop();for(this.effects.length=0,o=0,t=this.cleanups.length;o<t;o++)this.cleanups[o]();if(this.cleanups.length=0,this.scopes){const r=this.scopes.slice();for(o=0,t=r.length;o<t;o++)r[o].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!n){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0}}}function Fc(){return Qe}let Me;const _r=new WeakSet;class Dl{constructor(n){this.fn=n,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Qe&&(Qe.active?Qe.effects.push(this):this.flags&=-2)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,_r.has(this)&&(_r.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Ml(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Ka(this),$l(this);const n=Me,o=En;Me=this,En=!0;try{return this.fn()}finally{Fl(this),Me=n,En=o,this.flags&=-3}}stop(){if(this.flags&1){for(let n=this.deps;n;n=n.nextDep)Ca(n);this.deps=this.depsTail=void 0,Ka(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?_r.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){ia(this)&&this.run()}get dirty(){return ia(this)}}let ql=0,nt,ot;function Ml(e,n=!1){if(e.flags|=8,n){e.next=ot,ot=e;return}e.next=nt,nt=e}function wa(){ql++}function Ea(){if(--ql>0)return;if(ot){let n=ot;for(ot=void 0;n;){const o=n.next;n.next=void 0,n.flags&=-9,n=o}}let e;for(;nt;){let n=nt;for(nt=void 0;n;){const o=n.next;if(n.next=void 0,n.flags&=-9,n.flags&1)try{n.trigger()}catch(t){e||(e=t)}n=o}}if(e)throw e}function $l(e){for(let n=e.deps;n;n=n.nextDep)n.version=-1,n.prevActiveLink=n.dep.activeLink,n.dep.activeLink=n}function Fl(e){let n,o=e.depsTail,t=o;for(;t;){const r=t.prevDep;t.version===-1?(t===o&&(o=r),Ca(t),Vc(t)):n=t,t.dep.activeLink=t.prevActiveLink,t.prevActiveLink=void 0,t=r}e.deps=n,e.depsTail=o}function ia(e){for(let n=e.deps;n;n=n.nextDep)if(n.dep.version!==n.version||n.dep.computed&&(Vl(n.dep.computed)||n.dep.version!==n.version))return!0;return!!e._dirty}function Vl(e){if(e.flags&4&&!(e.flags&16)||(e.flags&=-17,e.globalVersion===lt)||(e.globalVersion=lt,!e.isSSR&&e.flags&128&&(!e.deps&&!e._dirty||!ia(e))))return;e.flags|=2;const n=e.dep,o=Me,t=En;Me=e,En=!0;try{$l(e);const r=e.fn(e._value);(n.version===0||qn(r,e._value))&&(e.flags|=128,e._value=r,n.version++)}catch(r){throw n.version++,r}finally{Me=o,En=t,Fl(e),e.flags&=-3}}function Ca(e,n=!1){const{dep:o,prevSub:t,nextSub:r}=e;if(t&&(t.nextSub=r,e.prevSub=void 0),r&&(r.prevSub=t,e.nextSub=void 0),o.subs===e&&(o.subs=t,!t&&o.computed)){o.computed.flags&=-5;for(let i=o.computed.deps;i;i=i.nextDep)Ca(i,!0)}!n&&!--o.sc&&o.map&&o.map.delete(o.key)}function Vc(e){const{prevDep:n,nextDep:o}=e;n&&(n.nextDep=o,e.prevDep=void 0),o&&(o.prevDep=n,e.nextDep=void 0)}let En=!0;const zl=[];function Qn(){zl.push(En),En=!1}function Xn(){const e=zl.pop();En=e===void 0?!0:e}function Ka(e){const{cleanup:n}=e;if(e.cleanup=void 0,n){const o=Me;Me=void 0;try{n()}finally{Me=o}}}let lt=0;class zc{constructor(n,o){this.sub=n,this.dep=o,this.version=o.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Oa{constructor(n){this.computed=n,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(n){if(!Me||!En||Me===this.computed)return;let o=this.activeLink;if(o===void 0||o.sub!==Me)o=this.activeLink=new zc(Me,this),Me.deps?(o.prevDep=Me.depsTail,Me.depsTail.nextDep=o,Me.depsTail=o):Me.deps=Me.depsTail=o,Ul(o);else if(o.version===-1&&(o.version=this.version,o.nextDep)){const t=o.nextDep;t.prevDep=o.prevDep,o.prevDep&&(o.prevDep.nextDep=t),o.prevDep=Me.depsTail,o.nextDep=void 0,Me.depsTail.nextDep=o,Me.depsTail=o,Me.deps===o&&(Me.deps=t)}return o}trigger(n){this.version++,lt++,this.notify(n)}notify(n){wa();try{for(let o=this.subs;o;o=o.prevSub)o.sub.notify()&&o.sub.dep.notify()}finally{Ea()}}}function Ul(e){if(e.dep.sc++,e.sub.flags&4){const n=e.dep.computed;if(n&&!e.dep.subs){n.flags|=20;for(let t=n.deps;t;t=t.nextDep)Ul(t)}const o=e.dep.subs;o!==e&&(e.prevSub=o,o&&(o.nextSub=e)),e.dep.subs=e}}const la=new WeakMap,bo=Symbol(""),sa=Symbol(""),st=Symbol("");function nn(e,n,o){if(En&&Me){let t=la.get(e);t||la.set(e,t=new Map);let r=t.get(o);r||(t.set(o,r=new Oa),r.map=t,r.key=o),r.track()}}function Yn(e,n,o,t,r,i){const l=la.get(e);if(!l){lt++;return}const s=c=>{c&&c.trigger()};if(wa(),n==="clear")l.forEach(s);else{const c=ve(e),d=c&&Ta(o);if(c&&o==="length"){const u=Number(t);l.forEach((m,p)=>{(p==="length"||p===st||!Cn(p)&&p>=u)&&s(m)})}else switch((o!==void 0||l.has(void 0))&&s(l.get(o)),d&&s(l.get(st)),n){case"add":c?d&&s(l.get("length")):(s(l.get(bo)),Oo(e)&&s(l.get(sa)));break;case"delete":c||(s(l.get(bo)),Oo(e)&&s(l.get(sa)));break;case"set":Oo(e)&&s(l.get(bo));break}}Ea()}function Bo(e){const n=Oe(e);return n===e?n:(nn(n,"iterate",st),xn(e)?n:n.map(On))}function ar(e){return nn(e=Oe(e),"iterate",st),e}function jn(e,n){return Zn(e)?jo(yo(e)?On(n):n):On(n)}const Uc={__proto__:null,[Symbol.iterator](){return br(this,Symbol.iterator,e=>jn(this,e))},concat(...e){return Bo(this).concat(...e.map(n=>ve(n)?Bo(n):n))},entries(){return br(this,"entries",e=>(e[1]=jn(this,e[1]),e))},every(e,n){return zn(this,"every",e,n,void 0,arguments)},filter(e,n){return zn(this,"filter",e,n,o=>o.map(t=>jn(this,t)),arguments)},find(e,n){return zn(this,"find",e,n,o=>jn(this,o),arguments)},findIndex(e,n){return zn(this,"findIndex",e,n,void 0,arguments)},findLast(e,n){return zn(this,"findLast",e,n,o=>jn(this,o),arguments)},findLastIndex(e,n){return zn(this,"findLastIndex",e,n,void 0,arguments)},forEach(e,n){return zn(this,"forEach",e,n,void 0,arguments)},includes(...e){return yr(this,"includes",e)},indexOf(...e){return yr(this,"indexOf",e)},join(e){return Bo(this).join(e)},lastIndexOf(...e){return yr(this,"lastIndexOf",e)},map(e,n){return zn(this,"map",e,n,void 0,arguments)},pop(){return Ko(this,"pop")},push(...e){return Ko(this,"push",e)},reduce(e,...n){return Ga(this,"reduce",e,n)},reduceRight(e,...n){return Ga(this,"reduceRight",e,n)},shift(){return Ko(this,"shift")},some(e,n){return zn(this,"some",e,n,void 0,arguments)},splice(...e){return Ko(this,"splice",e)},toReversed(){return Bo(this).toReversed()},toSorted(e){return Bo(this).toSorted(e)},toSpliced(...e){return Bo(this).toSpliced(...e)},unshift(...e){return Ko(this,"unshift",e)},values(){return br(this,"values",e=>jn(this,e))}};function br(e,n,o){const t=ar(e),r=t[n]();return t!==e&&!xn(e)&&(r._next=r.next,r.next=()=>{const i=r._next();return i.done||(i.value=o(i.value)),i}),r}const Hc=Array.prototype;function zn(e,n,o,t,r,i){const l=ar(e),s=l!==e&&!xn(e),c=l[n];if(c!==Hc[n]){const m=c.apply(e,i);return s?On(m):m}let d=o;l!==e&&(s?d=function(m,p){return o.call(this,jn(e,m),p,e)}:o.length>2&&(d=function(m,p){return o.call(this,m,p,e)}));const u=c.call(l,d,t);return s&&r?r(u):u}function Ga(e,n,o,t){const r=ar(e),i=r!==e&&!xn(e);let l=o,s=!1;r!==e&&(i?(s=t.length===0,l=function(d,u,m){return s&&(s=!1,d=jn(e,d)),o.call(this,d,jn(e,u),m,e)}):o.length>3&&(l=function(d,u,m){return o.call(this,d,u,m,e)}));const c=r[n](l,...t);return s?jn(e,c):c}function yr(e,n,o){const t=Oe(e);nn(t,"iterate",st);const r=t[n](...o);return(r===-1||r===!1)&&ka(o[0])?(o[0]=Oe(o[0]),t[n](...o)):r}function Ko(e,n,o=[]){Qn(),wa();const t=Oe(e)[n].apply(e,o);return Ea(),Xn(),t}const Kc=Ba("__proto__,__v_isRef,__isVue"),Hl=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(Cn));function Gc(e){Cn(e)||(e=String(e));const n=Oe(this);return nn(n,"has",e),n.hasOwnProperty(e)}class Kl{constructor(n=!1,o=!1){this._isReadonly=n,this._isShallow=o}get(n,o,t){if(o==="__v_skip")return n.__v_skip;const r=this._isReadonly,i=this._isShallow;if(o==="__v_isReactive")return!r;if(o==="__v_isReadonly")return r;if(o==="__v_isShallow")return i;if(o==="__v_raw")return t===(r?i?tu:Jl:i?Wl:Yl).get(n)||Object.getPrototypeOf(n)===Object.getPrototypeOf(t)?n:void 0;const l=ve(n);if(!r){let c;if(l&&(c=Uc[o]))return c;if(o==="hasOwnProperty")return Gc}const s=Reflect.get(n,o,rn(n)?n:t);if((Cn(o)?Hl.has(o):Kc(o))||(r||nn(n,"get",o),i))return s;if(rn(s)){const c=l&&Ta(o)?s:s.value;return r&&Le(c)?ua(c):c}return Le(s)?r?ua(s):At(s):s}}class Gl extends Kl{constructor(n=!1){super(!1,n)}set(n,o,t,r){let i=n[o];const l=ve(n)&&Ta(o);if(!this._isShallow){const d=Zn(i);if(!xn(t)&&!Zn(t)&&(i=Oe(i),t=Oe(t)),!l&&rn(i)&&!rn(t))return d||(i.value=t),!0}const s=l?Number(o)<n.length:ke(n,o),c=Reflect.set(n,o,t,rn(n)?n:r);return n===Oe(r)&&c&&(s?qn(t,i)&&Yn(n,"set",o,t):Yn(n,"add",o,t)),c}deleteProperty(n,o){const t=ke(n,o);n[o];const r=Reflect.deleteProperty(n,o);return r&&t&&Yn(n,"delete",o,void 0),r}has(n,o){const t=Reflect.has(n,o);return(!Cn(o)||!Hl.has(o))&&nn(n,"has",o),t}ownKeys(n){return nn(n,"iterate",ve(n)?"length":bo),Reflect.ownKeys(n)}}class Yc extends Kl{constructor(n=!1){super(!0,n)}set(n,o){return!0}deleteProperty(n,o){return!0}}const Wc=new Gl,Jc=new Yc,Qc=new Gl(!0);const ca=e=>e,wt=e=>Reflect.getPrototypeOf(e);function Xc(e,n,o){return function(...t){const r=this.__v_raw,i=Oe(r),l=Oo(i),s=e==="entries"||e===Symbol.iterator&&l,c=e==="keys"&&l,d=r[e](...t),u=o?ca:n?jo:On;return!n&&nn(i,"iterate",c?sa:bo),Je(Object.create(d),{next(){const{value:m,done:p}=d.next();return p?{value:m,done:p}:{value:s?[u(m[0]),u(m[1])]:u(m),done:p}}})}}function Et(e){return function(...n){return e==="delete"?!1:e==="clear"?void 0:this}}function Zc(e,n){const o={get(r){const i=this.__v_raw,l=Oe(i),s=Oe(r);e||(qn(r,s)&&nn(l,"get",r),nn(l,"get",s));const{has:c}=wt(l),d=n?ca:e?jo:On;if(c.call(l,r))return d(i.get(r));if(c.call(l,s))return d(i.get(s));i!==l&&i.get(r)},get size(){const r=this.__v_raw;return!e&&nn(Oe(r),"iterate",bo),r.size},has(r){const i=this.__v_raw,l=Oe(i),s=Oe(r);return e||(qn(r,s)&&nn(l,"has",r),nn(l,"has",s)),r===s?i.has(r):i.has(r)||i.has(s)},forEach(r,i){const l=this,s=l.__v_raw,c=Oe(s),d=n?ca:e?jo:On;return!e&&nn(c,"iterate",bo),s.forEach((u,m)=>r.call(i,d(u),d(m),l))}};return Je(o,e?{add:Et("add"),set:Et("set"),delete:Et("delete"),clear:Et("clear")}:{add(r){const i=Oe(this),l=wt(i),s=Oe(r),c=!n&&!xn(r)&&!Zn(r)?s:r;return l.has.call(i,c)||qn(r,c)&&l.has.call(i,r)||qn(s,c)&&l.has.call(i,s)||(i.add(c),Yn(i,"add",c,c)),this},set(r,i){!n&&!xn(i)&&!Zn(i)&&(i=Oe(i));const l=Oe(this),{has:s,get:c}=wt(l);let d=s.call(l,r);d||(r=Oe(r),d=s.call(l,r));const u=c.call(l,r);return l.set(r,i),d?qn(i,u)&&Yn(l,"set",r,i):Yn(l,"add",r,i),this},delete(r){const i=Oe(this),{has:l,get:s}=wt(i);let c=l.call(i,r);c||(r=Oe(r),c=l.call(i,r)),s&&s.call(i,r);const d=i.delete(r);return c&&Yn(i,"delete",r,void 0),d},clear(){const r=Oe(this),i=r.size!==0,l=r.clear();return i&&Yn(r,"clear",void 0,void 0),l}}),["keys","values","entries",Symbol.iterator].forEach(r=>{o[r]=Xc(r,e,n)}),o}function Ia(e,n){const o=Zc(e,n);return(t,r,i)=>r==="__v_isReactive"?!e:r==="__v_isReadonly"?e:r==="__v_raw"?t:Reflect.get(ke(o,r)&&r in t?o:t,r,i)}const eu={get:Ia(!1,!1)},nu={get:Ia(!1,!0)},ou={get:Ia(!0,!1)};const Yl=new WeakMap,Wl=new WeakMap,Jl=new WeakMap,tu=new WeakMap;function ru(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function At(e){return Zn(e)?e:Pa(e,!1,Wc,eu,Yl)}function Ql(e){return Pa(e,!1,Qc,nu,Wl)}function ua(e){return Pa(e,!0,Jc,ou,Jl)}function Pa(e,n,o,t,r){if(!Le(e)||e.__v_raw&&!(n&&e.__v_isReactive)||e.__v_skip||!Object.isExtensible(e))return e;const i=r.get(e);if(i)return i;const l=ru(Ec(e));if(l===0)return e;const s=new Proxy(e,l===2?t:o);return r.set(e,s),s}function yo(e){return Zn(e)?yo(e.__v_raw):!!(e&&e.__v_isReactive)}function Zn(e){return!!(e&&e.__v_isReadonly)}function xn(e){return!!(e&&e.__v_isShallow)}function ka(e){return e?!!e.__v_raw:!1}function Oe(e){const n=e&&e.__v_raw;return n?Oe(n):e}function au(e){return!ke(e,"__v_skip")&&Object.isExtensible(e)&&Pl(e,"__v_skip",!0),e}const On=e=>Le(e)?At(e):e,jo=e=>Le(e)?ua(e):e;function rn(e){return e?e.__v_isRef===!0:!1}function je(e){return Xl(e,!1)}function iu(e){return Xl(e,!0)}function Xl(e,n){return rn(e)?e:new lu(e,n)}class lu{constructor(n,o){this.dep=new Oa,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=o?n:Oe(n),this._value=o?n:On(n),this.__v_isShallow=o}get value(){return this.dep.track(),this._value}set value(n){const o=this._rawValue,t=this.__v_isShallow||xn(n)||Zn(n);n=t?n:Oe(n),qn(n,o)&&(this._rawValue=n,this._value=t?n:On(n),this.dep.trigger())}}function ae(e){return rn(e)?e.value:e}const su={get:(e,n,o)=>n==="__v_raw"?e:ae(Reflect.get(e,n,o)),set:(e,n,o,t)=>{const r=e[n];return rn(r)&&!rn(o)?(r.value=o,!0):Reflect.set(e,n,o,t)}};function Zl(e){return yo(e)?e:new Proxy(e,su)}class cu{constructor(n,o,t){this.fn=n,this.setter=o,this._value=void 0,this.dep=new Oa(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=lt-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!o,this.isSSR=t}notify(){if(this.flags|=16,!(this.flags&8)&&Me!==this)return Ml(this,!0),!0}get value(){const n=this.dep.track();return Vl(this),n&&(n.version=this.dep.version),this._value}set value(n){this.setter&&this.setter(n)}}function uu(e,n,o=!1){let t,r;return Ae(e)?t=e:(t=e.get,r=e.set),new cu(t,r,o)}const Ct={},Mt=new WeakMap;let vo;function du(e,n=!1,o=vo){if(o){let t=Mt.get(o);t||Mt.set(o,t=[]),t.push(e)}}function fu(e,n,o=qe){const{immediate:t,deep:r,once:i,scheduler:l,augmentJob:s,call:c}=o,d=C=>r?C:xn(C)||r===!1||r===0?Wn(C,1):Wn(C);let u,m,p,g,T=!1,N=!1;if(rn(e)?(m=()=>e.value,T=xn(e)):yo(e)?(m=()=>d(e),T=!0):ve(e)?(N=!0,T=e.some(C=>yo(C)||xn(C)),m=()=>e.map(C=>{if(rn(C))return C.value;if(yo(C))return d(C);if(Ae(C))return c?c(C,2):C()})):Ae(e)?n?m=c?()=>c(e,2):e:m=()=>{if(p){Qn();try{p()}finally{Xn()}}const C=vo;vo=u;try{return c?c(e,3,[g]):e(g)}finally{vo=C}}:m=$n,n&&r){const C=m,U=r===!0?1/0:r;m=()=>Wn(C(),U)}const w=Fc(),Q=()=>{u.stop(),w&&w.active&&Ra(w.effects,u)};if(i&&n){const C=n;n=(...U)=>{const re=C(...U);return Q(),re}}let M=N?new Array(e.length).fill(Ct):Ct;const K=C=>{if(!(!(u.flags&1)||!u.dirty&&!C))if(n){const U=u.run();if(C||r||T||(N?U.some((re,be)=>qn(re,M[be])):qn(U,M))){p&&p();const re=vo;vo=u;try{const be=[U,M===Ct?void 0:N&&M[0]===Ct?[]:M,g];M=U,c?c(n,3,be):n(...be)}finally{vo=re}}}else u.run()};return s&&s(K),u=new Dl(m),u.scheduler=l?()=>l(K,!1):K,g=C=>du(C,!1,u),p=u.onStop=()=>{const C=Mt.get(u);if(C){if(c)c(C,4);else for(const U of C)U();Mt.delete(u)}},n?t?K(!0):M=u.run():l?l(K.bind(null,!0),!0):u.run(),Q.pause=u.pause.bind(u),Q.resume=u.resume.bind(u),Q.stop=Q,Q}function Wn(e,n=1/0,o){if(n<=0||!Le(e)||e.__v_skip||(o=o||new Map,(o.get(e)||0)>=n))return e;if(o.set(e,n),n--,rn(e))Wn(e.value,n,o);else if(ve(e))for(let t=0;t<e.length;t++)Wn(e[t],n,o);else if(Vo(e)||Oo(e))e.forEach(t=>{Wn(t,n,o)});else if(Il(e)){for(const t in e)Wn(e[t],n,o);for(const t of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,t)&&Wn(e[t],n,o)}return e}function Nt(e,n,o,t){try{return t?e(...t):e()}catch(r){ir(r,n,o)}}function Rn(e,n,o,t){if(Ae(e)){const r=Nt(e,n,o,t);return r&&Cl(r)&&r.catch(i=>{ir(i,n,o)}),r}if(ve(e)){const r=[];for(let i=0;i<e.length;i++)r.push(Rn(e[i],n,o,t));return r}}function ir(e,n,o,t=!0){const r=n?n.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:l}=n&&n.appContext.config||qe;if(n){let s=n.parent;const c=n.proxy,d=`https://vuejs.org/error-reference/#runtime-${o}`;for(;s;){const u=s.ec;if(u){for(let m=0;m<u.length;m++)if(u[m](e,c,d)===!1)return}s=s.parent}if(i){Qn(),Nt(i,null,10,[e,c,d]),Xn();return}}mu(e,o,r,t,l)}function mu(e,n,o,t=!0,r=!1){if(r)throw e;console.error(e)}const un=[];let Ln=-1;const Io=[];let ro=null,To=0;const es=Promise.resolve();let $t=null;function lr(e){const n=$t||es;return e?n.then(this?e.bind(this):e):n}function pu(e){let n=Ln+1,o=un.length;for(;n<o;){const t=n+o>>>1,r=un[t],i=ct(r);i<e||i===e&&r.flags&2?n=t+1:o=t}return n}function La(e){if(!(e.flags&1)){const n=ct(e),o=un[un.length-1];!o||!(e.flags&2)&&n>=ct(o)?un.push(e):un.splice(pu(n),0,e),e.flags|=1,ns()}}function ns(){$t||($t=es.then(ts))}function hu(e){if(!ve(e))ro&&e.id===-1?ro.splice(To+1,0,e):e.flags&1||(Io.push(e),e.flags|=1);else for(let n=0;n<e.length;n++)Io.push(e[n]);ns()}function Ya(e,n,o=Ln+1){for(;o<un.length;o++){const t=un[o];if(t&&t.flags&2){if(e&&t.id!==e.uid)continue;un.splice(o,1),o--,t.flags&4&&(t.flags&=-2),t(),t.flags&4||(t.flags&=-2)}}}function os(e){if(Io.length){const n=[...new Set(Io)].sort((o,t)=>ct(o)-ct(t));if(Io.length=0,ro){for(let o=0;o<n.length;o++)ro.push(n[o]);return}for(ro=n,To=0;To<ro.length;To++){const o=ro[To];o.flags&4&&(o.flags&=-2),o.flags&8||o(),o.flags&=-2}ro=null,To=0}}const ct=e=>e.id==null?e.flags&2?-1:1/0:e.id;function ts(e){try{for(Ln=0;Ln<un.length;Ln++){const n=un[Ln];n&&!(n.flags&8)&&(n.flags&4&&(n.flags&=-2),Nt(n,n.i,n.i?15:14),n.flags&4||(n.flags&=-2))}}finally{for(;Ln<un.length;Ln++){const n=un[Ln];n&&(n.flags&=-2)}Ln=-1,un.length=0,os(),$t=null,(un.length||Io.length)&&ts()}}let Xe=null,rs=null;function Ft(e){const n=Xe;return Xe=e,rs=e&&e.type.__scopeId||null,n}function _e(e,n=Xe,o){if(!n||e._n)return e;const t=(...r)=>{t._d&&Ht(-1);const i=Ft(n),l=Jn.length;let s;try{s=e(...r)}finally{for(let c=Jn.length;c>l;c--)qa();Ft(i),t._d&&Ht(1)}return s};return t._n=!0,t._c=!0,t._d=!0,t}function An(e,n){if(Xe===null)return e;const o=mr(Xe),t=e.dirs||(e.dirs=[]);for(let r=0;r<n.length;r++){let[i,l,s,c=qe]=n[r];i&&(Ae(i)&&(i={mounted:i,updated:i}),i.deep&&Wn(l),t.push({dir:i,instance:o,value:l,oldValue:void 0,arg:s,modifiers:c}))}return e}function uo(e,n,o,t){const r=e.dirs,i=n&&n.dirs;for(let l=0;l<r.length;l++){const s=r[l];i&&(s.oldValue=i[l].value);let c=s.dir[t];c&&(Qn(),Rn(c,o,8,[e.el,s,e,n]),Xn())}}function jt(e,n){if(tn){let o=tn.provides;const t=tn.parent&&tn.parent.provides;t===o&&(o=tn.provides=Object.create(t)),o[e]=n}}function Ye(e,n,o=!1){const t=$s();if(t||ko){let r=ko?ko._context.provides:t?t.parent==null||t.ce?t.vnode.appContext&&t.vnode.appContext.provides:t.parent.provides:void 0;if(r&&e in r)return r[e];if(arguments.length>1)return o&&Ae(n)?n.call(t&&t.proxy):n}}const vu=Symbol.for("v-scx"),gu=()=>Ye(vu);function Ao(e,n,o){return as(e,n,o)}function as(e,n,o=qe){const{immediate:t,deep:r,flush:i,once:l}=o,s=Je({},o),c=n&&t||!n&&i!=="post";let d;if(pt){if(i==="sync"){const g=gu();d=g.__watcherHandles||(g.__watcherHandles=[])}else if(!c){const g=()=>{};return g.stop=$n,g.resume=$n,g.pause=$n,g}}const u=tn;s.call=(g,T,N)=>Rn(g,u,T,N);let m=!1;i==="post"?s.scheduler=g=>{pn(g,u&&u.suspense)}:i!=="sync"&&(m=!0,s.scheduler=(g,T)=>{T?g():La(g)}),s.augmentJob=g=>{n&&(g.flags|=4),m&&(g.flags|=2,u&&(g.id=u.uid,g.i=u))};const p=fu(e,n,s);return pt&&(d?d.push(p):c&&p()),p}function _u(e,n,o){const t=this.proxy,r=Fe(e)?e.includes(".")?is(t,e):()=>t[e]:e.bind(t,t);let i;Ae(n)?i=n:(i=n.handler,o=n);const l=xt(this),s=as(r,i.bind(t),o);return l(),s}function is(e,n){const o=n.split(".");return()=>{let t=e;for(let r=0;r<o.length&&t;r++)t=t[o[r]];return t}}const bu=Symbol("_vte"),sr=e=>e.__isTeleport,yn=Symbol("_leaveCb"),Go=Symbol("_enterCb");function yu(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return co(()=>{e.isMounted=!0}),hs(()=>{e.isUnmounting=!0}),e}const bn=[Function,Array],ls={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:bn,onEnter:bn,onAfterEnter:bn,onEnterCancelled:bn,onBeforeLeave:bn,onLeave:bn,onAfterLeave:bn,onLeaveCancelled:bn,onBeforeAppear:bn,onAppear:bn,onAfterAppear:bn,onAppearCancelled:bn},ss=e=>{const n=e.subTree;return n.component?ss(n.component):n},Au={name:"BaseTransition",props:ls,setup(e,{slots:n}){const o=$s(),t=yu();return()=>{const r=n.default&&ds(n.default(),!0),i=r&&r.length?cs(r):o.subTree?Ie():void 0;if(!i)return;const l=Oe(e),{mode:s}=l;if(t.isLeaving)return Ar(i);const c=Vt(i);if(!c)return Ar(i);let d=da(c,l,t,o,m=>d=m);c.type!==on&&ut(c,d);let u=o.subTree&&Vt(o.subTree);if(u&&u.type!==on&&!go(u,c)&&ss(o).type!==on){let m=da(u,l,t,o);if(ut(u,m),s==="out-in"&&c.type!==on)return t.isLeaving=!0,m.afterLeave=()=>{t.isLeaving=!1,o.job.flags&8||o.update(),delete m.afterLeave,u=void 0},Ar(i);s==="in-out"&&c.type!==on?m.delayLeave=(p,g,T)=>{const N=us(t,u);N[String(u.key)]=u,p[yn]=()=>{g(),p[yn]=void 0,delete d.delayedLeave,u=void 0},d.delayedLeave=()=>{T(),delete d.delayedLeave,u=void 0}}:u=void 0}else u&&(u=void 0);return i}}};function cs(e){let n=e[0];if(e.length>1){for(const o of e)if(o.type!==on){n=o;break}}return n}const Nu=Au;function us(e,n){const{leavingVNodes:o}=e;let t=o.get(n.type);return t||(t=Object.create(null),o.set(n.type,t)),t}function da(e,n,o,t,r){const{appear:i,mode:l,persisted:s=!1,onBeforeEnter:c,onEnter:d,onAfterEnter:u,onEnterCancelled:m,onBeforeLeave:p,onLeave:g,onAfterLeave:T,onLeaveCancelled:N,onBeforeAppear:w,onAppear:Q,onAfterAppear:M,onAppearCancelled:K}=n,C=String(e.key),U=us(o,e),re=(me,W)=>{me&&Rn(me,t,9,W)},be=(me,W)=>{const D=W[1];re(me,W),ve(me)?me.every(R=>R.length<=1)&&D():me.length<=1&&D()},Se={mode:l,persisted:s,beforeEnter(me){let W=c;if(!o.isMounted)if(i)W=w||c;else return;me[yn]&&me[yn](!0);const D=U[C];D&&go(e,D)&&D.el[yn]&&D.el[yn](),re(W,[me])},enter(me){if(U[C]===e)return;let W=d,D=u,R=m;if(!o.isMounted)if(i)W=Q||d,D=M||u,R=K||m;else return;let Z=!1;me[Go]=Ke=>{Z||(Z=!0,Ke?re(R,[me]):re(D,[me]),Se.delayedLeave&&Se.delayedLeave(),me[Go]=void 0)};const te=me[Go].bind(null,!1);W?be(W,[me,te]):te()},leave(me,W){const D=String(e.key);if(me[Go]&&me[Go](!0),o.isUnmounting)return W();re(p,[me]);let R=!1;me[yn]=te=>{R||(R=!0,W(),te?re(N,[me]):re(T,[me]),me[yn]=void 0,U[D]===e&&delete U[D])};const Z=me[yn].bind(null,!1);U[D]=e,g?be(g,[me,Z]):Z()},clone(me){const W=da(me,n,o,t,r);return r&&r(W),W}};return Se}function Ar(e){if(cr(e))return e=so(e),e.children=null,e}function Vt(e){if(!cr(e))return sr(e.type)&&e.children?cs(e.children):e;if(e.component)return e.component.subTree;const{shapeFlag:n,children:o}=e;if(o){if(n&16)return o[0];if(n&32&&Ae(o.default))return o.default()}}function ut(e,n){if(e.shapeFlag&6&&e.component){e.transition=n;const o=e.component.subTree;ut(sr(o.type)&&Vt(o)||o,n)}else e.shapeFlag&128?(e.ssContent.transition=n.clone(e.ssContent),e.ssFallback.transition=n.clone(e.ssFallback)):e.transition=n}function ds(e,n=!1,o){let t=[],r=0;for(let i=0;i<e.length;i++){let l=e[i];const s=o==null?l.key:String(o)+String(l.key!=null?l.key:i);l.type===Be?(l.patchFlag&128&&r++,t=t.concat(ds(l.children,n,s))):(n||l.type!==on)&&t.push(s!=null?so(l,{key:s}):l)}if(r>1)for(let i=0;i<t.length;i++)t[i].patchFlag=-2;return t}function fs(e,n){return Ae(e)?Je({name:e.name},n,{setup:e}):e}function ms(e){e.ids=[e.ids[0]+e.ids[2]+++"-",0,0]}function Wa(e,n){let o;return!!((o=Object.getOwnPropertyDescriptor(e,n))&&!o.configurable)}const zt=new WeakMap;function tt(e,n,o,t,r=!1){if(ve(e)){e.forEach((N,w)=>tt(N,n&&(ve(n)?n[w]:n),o,t,r));return}if(Po(t)&&!r){t.shapeFlag&512&&t.type.__asyncResolved&&t.component.subTree.component&&tt(e,n,o,t.component.subTree);return}const i=t.shapeFlag&4?mr(t.component):t.el,l=r?null:i,{i:s,r:c}=e,d=n&&n.r,u=s.refs===qe?s.refs={}:s.refs,m=s.setupState,p=Oe(m),g=m===qe?El:N=>Wa(u,N)?!1:ke(p,N),T=(N,w)=>!(w&&Wa(u,w));if(d!=null&&d!==c){if(Ja(n),Fe(d))u[d]=null,g(d)&&(m[d]=null);else if(rn(d)){const N=n;T(d,N.k)&&(d.value=null),N.k&&(u[N.k]=null)}}if(Ae(c))Nt(c,s,12,[l,u]);else{const N=Fe(c),w=rn(c);if(N||w){const Q=()=>{if(e.f){const M=N?g(c)?m[c]:u[c]:T()||!e.k?c.value:u[e.k];if(r)ve(M)&&Ra(M,i);else if(ve(M))M.includes(i)||M.push(i);else if(N)u[c]=[i],g(c)&&(m[c]=u[c]);else{const K=[i];T(c,e.k)&&(c.value=K),e.k&&(u[e.k]=K)}}else N?(u[c]=l,g(c)&&(m[c]=l)):w&&(T(c,e.k)&&(c.value=l),e.k&&(u[e.k]=l))};if(l){const M=()=>{Q(),zt.delete(e)};M.id=-1,zt.set(e,M),pn(M,o)}else Ja(e),Q()}}}function Ja(e){const n=zt.get(e);n&&(n.flags|=8,zt.delete(e))}tr().requestIdleCallback;tr().cancelIdleCallback;const Po=e=>!!e.type.__asyncLoader,cr=e=>e.type.__isKeepAlive;function xu(e,n){ps(e,"a",n)}function Bu(e,n){ps(e,"da",n)}function ps(e,n,o=tn){const t=e.__wdc||(e.__wdc=()=>{let r=o;for(;r;){if(r.isDeactivated)return;r=r.parent}return e()});if(ur(n,t,o),o){let r=o.parent;for(;r&&r.parent;)cr(r.parent.vnode)&&Ru(t,n,o,r),r=r.parent}}function Ru(e,n,o,t){const r=ur(n,e,t,!0);vs(()=>{Ra(t[n],r)},o)}function ur(e,n,o=tn,t=!1){if(o){const r=o[e]||(o[e]=[]),i=n.__weh||(n.__weh=(...l)=>{Qn();const s=xt(o),c=Rn(n,o,e,l);return s(),Xn(),c});return t?r.unshift(i):r.push(i),i}}const eo=e=>(n,o=tn)=>{(!pt||e==="sp")&&ur(e,(...t)=>n(...t),o)},Tu=eo("bm"),co=eo("m"),Su=eo("bu"),wu=eo("u"),hs=eo("bum"),vs=eo("um"),Eu=eo("sp"),Cu=eo("rtg"),Ou=eo("rtc");function Iu(e,n=tn){ur("ec",e,n)}const gs="components",Pu="directives",_s=Symbol.for("v-ndc");function Nr(e){return Fe(e)?bs(gs,e,!1)||e:e||_s}function ku(e){return bs(Pu,e)}function bs(e,n,o=!0,t=!1){const r=Xe||tn;if(r){const i=r.type;if(e===gs){const s=gd(i,!1);if(s&&(s===n||s===dn(n)||s===nr(dn(n))))return i}const l=Qa(r[e]||i[e],n)||Qa(r.appContext[e],n);return!l&&t?i:l}}function Qa(e,n){return e&&(e[n]||e[dn(n)]||e[nr(dn(n))])}function Bn(e,n,o,t){let r;const i=o,l=ve(e);if(l||Fe(e)){const s=l&&yo(e);let c=!1,d=!1;s&&(c=!xn(e),d=Zn(e),e=ar(e)),r=new Array(e.length);for(let u=0,m=e.length;u<m;u++)r[u]=n(c?d?jo(On(e[u])):On(e[u]):e[u],u,void 0,i)}else if(typeof e=="number"){r=new Array(e);for(let s=0;s<e;s++)r[s]=n(s+1,s,void 0,i)}else if(Le(e))if(e[Symbol.iterator])r=Array.from(e,(s,c)=>n(s,c,void 0,i));else{const s=Object.keys(e);r=new Array(s.length);for(let c=0,d=s.length;c<d;c++){const u=s[c];r[c]=n(e[u],u,c,i)}}else r=[];return r}function hn(e,n,o,t,r,i){if(o==null&&(o={}),Xe.ce||Xe.parent&&Po(Xe.parent)&&Xe.parent.ce){const d=o,u=Object.keys(d).length>0;return n!=="default"&&(d.name=n),z(),Ve(Be,null,[G("slot",d,t&&t())],u?-2:64)}let l=e[n];l&&l._c&&(l._d=!1);const s=Jn.length;z();let c;try{const d=l&&ys(l(o)),u=o.key||i||d&&d.key;c=Ve(Be,{key:(u&&!Cn(u)?u:`_${n}`)+(!d&&t?"_fb":"")},d||(t?t():[]),d&&e._===1?64:-2)}catch(d){for(let u=Jn.length;u>s;u--)qa();throw d}finally{l&&l._c&&(l._d=!0)}return c.scopeId&&(c.slotScopeIds=[c.scopeId+"-s"]),c}function ys(e){return e.some(n=>ft(n)?!(n.type===on||n.type===Be&&!ys(n.children)):!0)?e:null}function Lu(e,n){const o={};for(const t in e)o[kt(t)]=e[t];return o}const fa=e=>e?Fs(e)?mr(e):fa(e.parent):null,rt=Je(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>fa(e.parent),$root:e=>fa(e.root),$host:e=>e.ce,$emit:e=>e.emit,$options:e=>Ns(e),$forceUpdate:e=>e.f||(e.f=()=>{La(e.update)}),$nextTick:e=>e.n||(e.n=lr.bind(e.proxy)),$watch:e=>_u.bind(e)}),xr=(e,n)=>e!==qe&&!e.__isScriptSetup&&ke(e,n),ju={get({_:e},n){if(n==="__v_skip")return!0;const{ctx:o,setupState:t,data:r,props:i,accessCache:l,type:s,appContext:c}=e;if(n[0]!=="$"){const p=l[n];if(p!==void 0)switch(p){case 1:return t[n];case 2:return r[n];case 4:return o[n];case 3:return i[n]}else{if(xr(t,n))return l[n]=1,t[n];if(r!==qe&&ke(r,n))return l[n]=2,r[n];if(ke(i,n))return l[n]=3,i[n];if(o!==qe&&ke(o,n))return l[n]=4,o[n];ma&&(l[n]=0)}}const d=rt[n];let u,m;if(d)return n==="$attrs"&&nn(e.attrs,"get",""),d(e);if((u=s.__cssModules)&&(u=u[n]))return u;if(o!==qe&&ke(o,n))return l[n]=4,o[n];if(m=c.config.globalProperties,ke(m,n))return m[n]},set({_:e},n,o){const{data:t,setupState:r,ctx:i}=e;return xr(r,n)?(r[n]=o,!0):t!==qe&&ke(t,n)?(t[n]=o,!0):ke(e.props,n)||n[0]==="$"&&n.slice(1)in e?!1:(i[n]=o,!0)},has({_:{data:e,setupState:n,accessCache:o,ctx:t,appContext:r,props:i,type:l}},s){let c;return!!(o[s]||e!==qe&&s[0]!=="$"&&ke(e,s)||xr(n,s)||ke(i,s)||ke(t,s)||ke(rt,s)||ke(r.config.globalProperties,s)||(c=l.__cssModules)&&c[s])},defineProperty(e,n,o){return o.get!=null?e._.accessCache[n]=0:ke(o,"value")&&this.set(e,n,o.value,null),Reflect.defineProperty(e,n,o)}};function Xa(e){return ve(e)?e.reduce((n,o)=>(n[o]=null,n),{}):e}let ma=!0;function Du(e){const n=Ns(e),o=e.proxy,t=e.ctx;ma=!1,n.beforeCreate&&Za(n.beforeCreate,e,"bc");const{data:r,computed:i,methods:l,watch:s,provide:c,inject:d,created:u,beforeMount:m,mounted:p,beforeUpdate:g,updated:T,activated:N,deactivated:w,beforeDestroy:Q,beforeUnmount:M,destroyed:K,unmounted:C,render:U,renderTracked:re,renderTriggered:be,errorCaptured:Se,serverPrefetch:me,expose:W,inheritAttrs:D,components:R,directives:Z,filters:te}=n;if(d&&qu(d,t,null),l)for(const Re in l){const Ne=l[Re];Ae(Ne)&&(t[Re]=Ne.bind(o))}if(r){const Re=r.call(o,o);Le(Re)&&(e.data=At(Re))}if(ma=!0,i)for(const Re in i){const Ne=i[Re],vn=Ae(Ne)?Ne.bind(o,o):Ae(Ne.get)?Ne.get.bind(o,o):$n,Ze=!Ae(Ne)&&Ae(Ne.set)?Ne.set.bind(o):$n,mn=De({get:vn,set:Ze});Object.defineProperty(t,Re,{enumerable:!0,configurable:!0,get:()=>mn.value,set:Ge=>mn.value=Ge})}if(s)for(const Re in s)As(s[Re],t,o,Re);if(c){const Re=Ae(c)?c.call(o):c;Reflect.ownKeys(Re).forEach(Ne=>{jt(Ne,Re[Ne])})}u&&Za(u,e,"c");function J(Re,Ne){ve(Ne)?Ne.forEach(vn=>Re(vn.bind(o))):Ne&&Re(Ne.bind(o))}if(J(Tu,m),J(co,p),J(Su,g),J(wu,T),J(xu,N),J(Bu,w),J(Iu,Se),J(Ou,re),J(Cu,be),J(hs,M),J(vs,C),J(Eu,me),ve(W))if(W.length){const Re=e.exposed||(e.exposed={});W.forEach(Ne=>{Object.defineProperty(Re,Ne,{get:()=>o[Ne],set:vn=>o[Ne]=vn,enumerable:!0})})}else e.exposed||(e.exposed={});U&&e.render===$n&&(e.render=U),D!=null&&(e.inheritAttrs=D),R&&(e.components=R),Z&&(e.directives=Z),me&&ms(e)}function qu(e,n,o=$n){ve(e)&&(e=pa(e));for(const t in e){const r=e[t];let i;Le(r)?"default"in r?i=Ye(r.from||t,r.default,!0):i=Ye(r.from||t):i=Ye(r),rn(i)?Object.defineProperty(n,t,{enumerable:!0,configurable:!0,get:()=>i.value,set:l=>i.value=l}):n[t]=i}}function Za(e,n,o){Rn(ve(e)?e.map(t=>t.bind(n.proxy)):e.bind(n.proxy),n,o)}function As(e,n,o,t){let r=t.includes(".")?is(o,t):()=>o[t];if(Fe(e)){const i=n[e];Ae(i)&&Ao(r,i)}else if(Ae(e))Ao(r,e.bind(o));else if(Le(e))if(ve(e))e.forEach(i=>As(i,n,o,t));else{const i=Ae(e.handler)?e.handler.bind(o):n[e.handler];Ae(i)&&Ao(r,i,e)}}function Ns(e){const n=e.type,{mixins:o,extends:t}=n,{mixins:r,optionsCache:i,config:{optionMergeStrategies:l}}=e.appContext,s=i.get(n);let c;return s?c=s:!r.length&&!o&&!t?c=n:(c={},r.length&&r.forEach(d=>Ut(c,d,l,!0)),Ut(c,n,l)),Le(n)&&i.set(n,c),c}function Ut(e,n,o,t=!1){const{mixins:r,extends:i}=n;i&&Ut(e,i,o,!0),r&&r.forEach(l=>Ut(e,l,o,!0));for(const l in n)if(!(t&&l==="expose")){const s=Mu[l]||o&&o[l];e[l]=s?s(e[l],n[l]):n[l]}return e}const Mu={data:ei,props:ni,emits:ni,methods:Xo,computed:Xo,beforeCreate:an,created:an,beforeMount:an,mounted:an,beforeUpdate:an,updated:an,beforeDestroy:an,beforeUnmount:an,destroyed:an,unmounted:an,activated:an,deactivated:an,errorCaptured:an,serverPrefetch:an,components:Xo,directives:Xo,watch:Fu,provide:ei,inject:$u};function ei(e,n){return n?e?function(){return Je(Ae(e)?e.call(this,this):e,Ae(n)?n.call(this,this):n)}:n:e}function $u(e,n){return Xo(pa(e),pa(n))}function pa(e){if(ve(e)){const n={};for(let o=0;o<e.length;o++)n[e[o]]=e[o];return n}return e}function an(e,n){return e?[...new Set([].concat(e,n))]:n}function Xo(e,n){return e?Je(Object.create(null),e,n):n}function ni(e,n){return e?ve(e)&&ve(n)?[...new Set([...e,...n])]:Je(Object.create(null),Xa(e),Xa(n??{})):n}function Fu(e,n){if(!e)return n;if(!n)return e;const o=Je(Object.create(null),e);for(const t in n)o[t]=an(e[t],n[t]);return o}function xs(){return{app:null,config:{isNativeTag:El,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Vu=0;function zu(e,n){return function(t,r=null){Ae(t)||(t=Je({},t)),r!=null&&!Le(r)&&(r=null);const i=xs(),l=new WeakSet,s=[];let c=!1;const d=i.app={_uid:Vu++,_component:t,_props:r,_container:null,_context:i,_instance:null,version:bd,get config(){return i.config},set config(u){},use(u,...m){return l.has(u)||(u&&Ae(u.install)?(l.add(u),u.install(d,...m)):Ae(u)&&(l.add(u),u(d,...m))),d},mixin(u){return i.mixins.includes(u)||i.mixins.push(u),d},component(u,m){return m?(i.components[u]=m,d):i.components[u]},directive(u,m){return m?(i.directives[u]=m,d):i.directives[u]},mount(u,m,p){if(!c){const g=d._ceVNode||G(t,r);return g.appContext=i,p===!0?p="svg":p===!1&&(p=void 0),e(g,u,p),c=!0,d._container=u,u.__vue_app__=d,mr(g.component)}},onUnmount(u){s.push(u)},unmount(){c&&(Rn(s,d._instance,16),e(null,d._container),delete d._container.__vue_app__)},provide(u,m){return i.provides[u]=m,d},runWithContext(u){const m=ko;ko=d;try{return u()}finally{ko=m}}};return d}}let ko=null;const Uu=(e,n)=>n==="modelValue"||n==="model-value"?e.modelModifiers:e[`${n}Modifiers`]||e[`${dn(n)}Modifiers`]||e[`${xo(n)}Modifiers`];function Hu(e,n,...o){if(e.isUnmounted)return;const t=e.vnode.props||qe;let r=o;const i=n.startsWith("update:"),l=i&&Uu(t,n.slice(7));l&&(l.trim&&(r=o.map(u=>Fe(u)?u.trim():u)),l.number&&(r=o.map(or)));let s,c=t[s=kt(n)]||t[s=kt(dn(n))];!c&&i&&(c=t[s=kt(xo(n))]),c&&Rn(c,e,6,r);const d=t[s+"Once"];if(d){if(!e.emitted)e.emitted={};else if(e.emitted[s])return;e.emitted[s]=!0,Rn(d,e,6,r)}}const Ku=new WeakMap;function Bs(e,n,o=!1){const t=o?Ku:n.emitsCache,r=t.get(e);if(r!==void 0)return r;const i=e.emits;let l={},s=!1;if(!Ae(e)){const c=d=>{const u=Bs(d,n,!0);u&&(s=!0,Je(l,u))};!o&&n.mixins.length&&n.mixins.forEach(c),e.extends&&c(e.extends),e.mixins&&e.mixins.forEach(c)}return!i&&!s?(Le(e)&&t.set(e,null),null):(ve(i)?i.forEach(c=>l[c]=null):Je(l,i),Le(e)&&t.set(e,l),l)}function dr(e,n){return!e||!Xt(n)?!1:(n=n.slice(2),n=n==="Once"?n:n.replace(/Once$/,""),ke(e,n[0].toLowerCase()+n.slice(1))||ke(e,xo(n))||ke(e,n))}function oi(e){const{type:n,vnode:o,proxy:t,withProxy:r,propsOptions:[i],slots:l,attrs:s,emit:c,render:d,renderCache:u,props:m,data:p,setupState:g,ctx:T,inheritAttrs:N}=e,w=Ft(e);let Q,M;try{if(o.shapeFlag&4){const C=r||t,U=C;Q=Dn(d.call(U,C,u,m,g,p,T)),M=s}else{const C=n;Q=Dn(C.length>1?C(m,{attrs:s,slots:l,emit:c}):C(m,null)),M=n.props?s:Gu(s)}}catch(C){Jn.length=0,ir(C,e,1),Q=G(on)}let K=Q;if(M&&N!==!1){const C=Object.keys(M),{shapeFlag:U}=K;C.length&&U&7&&(i&&C.some(Zt)&&(M=Yu(M,i)),K=so(K,M,!1,!0))}if(o.dirs&&(K=so(K,null,!1,!0),K.dirs=K.dirs?K.dirs.concat(o.dirs):o.dirs),o.transition){const C=sr(K.type)&&Vt(K)||K;ut(C,o.transition)}return Q=K,Ft(w),Q}const Gu=e=>{let n;for(const o in e)(o==="class"||o==="style"||Xt(o))&&((n||(n={}))[o]=e[o]);return n},Yu=(e,n)=>{const o={};for(const t in e)(!Zt(t)||!(t.slice(9)in n))&&(o[t]=e[t]);return o};function Wu(e,n,o){const{props:t,children:r,component:i}=e,{props:l,children:s,patchFlag:c}=n,d=i.emitsOptions;if(n.dirs||n.transition)return!0;if(o&&c>=0){if(c&1024)return!0;if(c&16)return t?ti(t,l,d):!!l;if(c&8){const u=n.dynamicProps;for(let m=0;m<u.length;m++){const p=u[m];if(Rs(l,t,p)&&!dr(d,p))return!0}}}else return(r||s)&&(!s||!s.$stable)?!0:t===l?!1:t?l?ti(t,l,d):!0:!!l;return!1}function ti(e,n,o){const t=Object.keys(n);if(t.length!==Object.keys(e).length)return!0;for(let r=0;r<t.length;r++){const i=t[r];if(Rs(n,e,i)&&!dr(o,i))return!0}return!1}function Rs(e,n,o){const t=e[o],r=n[o];return o==="style"&&Le(t)&&Le(r)?!zo(t,r):t!==r}function Ju({vnode:e,parent:n,suspense:o},t){for(;n;){const r=n.subTree;if(r.suspense&&r.suspense.activeBranch===e&&(r.suspense.vnode.el=r.el=t,e=r),r===e)(e=n.vnode).el=t,n=n.parent;else break}o&&o.activeBranch===e&&(o.vnode.el=t)}const Ts={},Ss=()=>Object.create(Ts),ws=e=>Object.getPrototypeOf(e)===Ts;function Qu(e,n,o,t=!1){const r={},i=Ss();e.propsDefaults=Object.create(null),Es(e,n,r,i);for(const l in e.propsOptions[0])l in r||(r[l]=void 0);o?e.props=t?r:Ql(r):e.type.props?e.props=r:e.props=i,e.attrs=i}function Xu(e,n,o,t){const{props:r,attrs:i,vnode:{patchFlag:l}}=e,s=Oe(r),[c]=e.propsOptions;let d=!1;if((t||l>0)&&!(l&16)){if(l&8){const u=e.vnode.dynamicProps;for(let m=0;m<u.length;m++){let p=u[m];if(dr(e.emitsOptions,p))continue;const g=n[p];if(c)if(ke(i,p))g!==i[p]&&(i[p]=g,d=!0);else{const T=dn(p);r[T]=ha(c,s,T,g,e,!1)}else g!==i[p]&&(i[p]=g,d=!0)}}}else{Es(e,n,r,i)&&(d=!0);let u;for(const m in s)(!n||!ke(n,m)&&((u=xo(m))===m||!ke(n,u)))&&(c?o&&(o[m]!==void 0||o[u]!==void 0)&&(r[m]=ha(c,s,m,void 0,e,!0)):delete r[m]);if(i!==s)for(const m in i)(!n||!ke(n,m))&&(delete i[m],d=!0)}d&&Yn(e.attrs,"set","")}function Es(e,n,o,t){const[r,i]=e.propsOptions;let l=!1,s;if(n)for(let c in n){if(et(c))continue;const d=n[c];let u;r&&ke(r,u=dn(c))?!i||!i.includes(u)?o[u]=d:(s||(s={}))[u]=d:dr(e.emitsOptions,c)||(!(c in t)||d!==t[c])&&(t[c]=d,l=!0)}if(i){const c=Oe(o),d=s||qe;for(let u=0;u<i.length;u++){const m=i[u];o[m]=ha(r,c,m,d[m],e,!ke(d,m))}}return l}function ha(e,n,o,t,r,i){const l=e[o];if(l!=null){const s=ke(l,"default");if(s&&t===void 0){const c=l.default;if(l.type!==Function&&!l.skipFactory&&Ae(c)){const{propsDefaults:d}=r;if(o in d)t=d[o];else{const u=xt(r);t=d[o]=c.call(null,n),u()}}else t=c;r.ce&&r.ce._setProp(o,t)}l[0]&&(i&&!s?t=!1:l[1]&&(t===""||t===xo(o))&&(t=!0))}return t}const Zu=new WeakMap;function Cs(e,n,o=!1){const t=o?Zu:n.propsCache,r=t.get(e);if(r)return r;const i=e.props,l={},s=[];let c=!1;if(!Ae(e)){const u=m=>{c=!0;const[p,g]=Cs(m,n,!0);Je(l,p),g&&s.push(...g)};!o&&n.mixins.length&&n.mixins.forEach(u),e.extends&&u(e.extends),e.mixins&&e.mixins.forEach(u)}if(!i&&!c)return Le(e)&&t.set(e,Co),Co;if(ve(i))for(let u=0;u<i.length;u++){const m=dn(i[u]);ri(m)&&(l[m]=qe)}else if(i)for(const u in i){const m=dn(u);if(ri(m)){const p=i[u],g=l[m]=ve(p)||Ae(p)?{type:p}:Je({},p),T=g.type;let N=!1,w=!0;if(ve(T))for(let Q=0;Q<T.length;++Q){const M=T[Q],K=Ae(M)&&M.name;if(K==="Boolean"){N=!0;break}else K==="String"&&(w=!1)}else N=Ae(T)&&T.name==="Boolean";g[0]=N,g[1]=w,(N||ke(g,"default"))&&s.push(m)}}const d=[l,s];return Le(e)&&t.set(e,d),d}function ri(e){return e[0]!=="$"&&!et(e)}const ja=e=>e==="_"||e==="_ctx"||e==="$stable",Da=e=>ve(e)?e.map(Dn):[Dn(e)],ed=(e,n,o)=>{if(n._n)return n;const t=_e((...r)=>Da(n(...r)),o);return t._c=!1,t},Os=(e,n,o)=>{const t=e._ctx;for(const r in e){if(ja(r))continue;const i=e[r];if(Ae(i))n[r]=ed(r,i,t);else if(i!=null){const l=Da(i);n[r]=()=>l}}},Is=(e,n)=>{const o=Da(n);e.slots.default=()=>o},Ps=(e,n,o)=>{for(const t in n)(o||!ja(t))&&(e[t]=n[t])},nd=(e,n,o)=>{const t=e.slots=Ss();if(e.vnode.shapeFlag&32){const r=n._;r?(Ps(t,n,o),o&&Pl(t,"_",r,!0)):Os(n,t)}else n&&Is(e,n)},od=(e,n,o)=>{const{vnode:t,slots:r}=e;let i=!0,l=qe;if(t.shapeFlag&32){const s=n._;s?o&&s===1?i=!1:Ps(r,n,o):(i=!n.$stable,Os(n,r)),l=n}else n&&(Is(e,n),l={default:1});if(i)for(const s in r)!ja(s)&&l[s]==null&&delete r[s]},pn=ld;function td(e){return rd(e)}function rd(e,n){const o=tr();o.__VUE__=!0;const{insert:t,remove:r,patchProp:i,createElement:l,createText:s,createComment:c,setText:d,setElementText:u,parentNode:m,nextSibling:p,setScopeId:g=$n,insertStaticContent:T}=e,N=(h,v,b,I=null,L=null,S=null,ee=void 0,X=null,Y=!!v.dynamicChildren)=>{if(h===v)return;h&&!go(h,v)&&(I=O(h),Ge(h,L,S,!0),h=null),v.patchFlag===-2&&(Y=!1,v.dynamicChildren=null);const{type:q,ref:pe,shapeFlag:ne}=v;switch(q){case fr:w(h,v,b,I);break;case on:Q(h,v,b,I);break;case Dt:h==null&&M(v,b,I,ee);break;case Be:R(h,v,b,I,L,S,ee,X,Y);break;default:ne&1?U(h,v,b,I,L,S,ee,X,Y):ne&6?Z(h,v,b,I,L,S,ee,X,Y):(ne&64||ne&128)&&q.process(h,v,b,I,L,S,ee,X,Y,ce)}pe!=null&&L?tt(pe,h&&h.ref,S,v||h,!v):pe==null&&h&&h.ref!=null&&tt(h.ref,null,S,h,!0)},w=(h,v,b,I)=>{if(h==null)t(v.el=s(v.children),b,I);else{const L=v.el=h.el;v.children!==h.children&&d(L,v.children)}},Q=(h,v,b,I)=>{h==null?t(v.el=c(v.children||""),b,I):v.el=h.el},M=(h,v,b,I)=>{[h.el,h.anchor]=T(h.children,v,b,I,h.el,h.anchor)},K=({el:h,anchor:v},b,I)=>{let L;for(;h&&h!==v;)L=p(h),t(h,b,I),h=L;t(v,b,I)},C=({el:h,anchor:v})=>{let b;for(;h&&h!==v;)b=p(h),r(h),h=b;r(v)},U=(h,v,b,I,L,S,ee,X,Y)=>{if(v.type==="svg"?ee="svg":v.type==="math"&&(ee="mathml"),h==null)re(v,b,I,L,S,ee,X,Y);else{const q=h.el&&h.el._isVueCE?h.el:null;try{q&&q._beginPatch(),me(h,v,L,S,ee,X,Y)}finally{q&&q._endPatch()}}},re=(h,v,b,I,L,S,ee,X)=>{let Y,q;const{props:pe,shapeFlag:ne,transition:de,dirs:ge}=h;if(Y=h.el=l(h.type,S,pe&&pe.is,pe),ne&8?u(Y,h.children):ne&16&&Se(h.children,Y,null,I,L,Br(h,S),ee,X),ge&&uo(h,null,I,"created"),be(Y,h,h.scopeId,ee,I),pe){for(const Ce in pe)Ce!=="value"&&!et(Ce)&&i(Y,Ce,null,pe[Ce],S,I);"value"in pe&&i(Y,"value",null,pe.value,S),(q=pe.onVnodeBeforeMount)&&kn(q,I,h)}ge&&uo(h,null,I,"beforeMount");const Te=ad(L,de);Te&&de.beforeEnter(Y),t(Y,v,b),((q=pe&&pe.onVnodeMounted)||Te||ge)&&pn(()=>{q&&kn(q,I,h),Te&&de.enter(Y),ge&&uo(h,null,I,"mounted")},L)},be=(h,v,b,I,L)=>{if(b&&g(h,b),I)for(let S=0;S<I.length;S++)g(h,I[S]);if(L){let S=L.subTree;if(v===S||Ds(S.type)&&(S.ssContent===v||S.ssFallback===v)){const ee=L.vnode;be(h,ee,ee.scopeId,ee.slotScopeIds,L.parent)}}},Se=(h,v,b,I,L,S,ee,X,Y=0)=>{for(let q=Y;q<h.length;q++){const pe=h[q]=X?Gn(h[q]):Dn(h[q]);N(null,pe,v,b,I,L,S,ee,X)}},me=(h,v,b,I,L,S,ee)=>{const X=v.el=h.el;let{patchFlag:Y,dynamicChildren:q,dirs:pe}=v;Y|=h.patchFlag&16;const ne=h.props||qe,de=v.props||qe;let ge;if(b&&fo(b,!1),(ge=de.onVnodeBeforeUpdate)&&kn(ge,b,v,h),pe&&uo(v,h,b,"beforeUpdate"),b&&fo(b,!0),q&&(!h.dynamicChildren||h.dynamicChildren.length!==q.length)&&(Y=0,ee=!1,q=null),(ne.innerHTML&&de.innerHTML==null||ne.textContent&&de.textContent==null)&&u(X,""),q?W(h.dynamicChildren,q,X,b,I,Br(v,L),S):ee||Ne(h,v,X,null,b,I,Br(v,L),S,!1),Y>0){if(Y&16)D(X,ne,de,b,L);else if(Y&2&&ne.class!==de.class&&i(X,"class",null,de.class,L),Y&4&&i(X,"style",ne.style,de.style,L),Y&8){const Te=v.dynamicProps;for(let Ce=0;Ce<Te.length;Ce++){const a=Te[Ce],_=ne[a],B=de[a];(B!==_||a==="value")&&i(X,a,_,B,L,b)}}Y&1&&h.children!==v.children&&u(X,v.children)}else!ee&&q==null&&D(X,ne,de,b,L);((ge=de.onVnodeUpdated)||pe)&&pn(()=>{ge&&kn(ge,b,v,h),pe&&uo(v,h,b,"updated")},I)},W=(h,v,b,I,L,S,ee)=>{for(let X=0;X<v.length;X++){const Y=h[X],q=v[X],pe=Y.el&&(Y.type===Be||!go(Y,q)||Y.shapeFlag&198)?m(Y.el):b;N(Y,q,pe,null,I,L,S,ee,!0)}},D=(h,v,b,I,L)=>{if(v!==b){if(v!==qe)for(const S in v)!et(S)&&!(S in b)&&i(h,S,v[S],null,L,I);for(const S in b){if(et(S))continue;const ee=b[S],X=v[S];ee!==X&&S!=="value"&&i(h,S,X,ee,L,I)}"value"in b&&i(h,"value",v.value,b.value,L)}},R=(h,v,b,I,L,S,ee,X,Y)=>{const q=v.el=h?h.el:s(""),pe=v.anchor=h?h.anchor:s("");let{patchFlag:ne,dynamicChildren:de,slotScopeIds:ge}=v;ge&&(X=X?X.concat(ge):ge),h==null?(t(q,b,I),t(pe,b,I),Se(v.children||[],b,pe,L,S,ee,X,Y)):ne>0&&ne&64&&de&&h.dynamicChildren&&h.dynamicChildren.length===de.length?(W(h.dynamicChildren,de,b,L,S,ee,X),(v.key!=null||L&&v===L.subTree)&&ks(h,v,!0)):Ne(h,v,b,pe,L,S,ee,X,Y)},Z=(h,v,b,I,L,S,ee,X,Y)=>{v.slotScopeIds=X,h==null?v.shapeFlag&512?L.ctx.activate(v,b,I,ee,Y):te(v,b,I,L,S,ee,Y):Ke(h,v,Y)},te=(h,v,b,I,L,S,ee)=>{const X=h.component=fd(h,I,L);if(cr(h)&&(X.ctx.renderer=ce),md(X,!1,ee),X.asyncDep){if(L&&L.registerDep(X,J,ee),!h.el){const Y=X.subTree=G(on);Q(null,Y,v,b),h.placeholder=Y.el}}else J(X,h,v,b,L,S,ee)},Ke=(h,v,b)=>{const I=v.component=h.component;if(Wu(h,v,b))if(I.asyncDep&&!I.asyncResolved){Re(I,v,b);return}else I.next=v,I.update();else v.el=h.el,I.vnode=v},J=(h,v,b,I,L,S,ee)=>{const X=()=>{if(h.isMounted){let{next:ne,bu:de,u:ge,parent:Te,vnode:Ce}=h;{const x=Ls(h);if(x){ne&&(ne.el=Ce.el,Re(h,ne,ee)),x.asyncDep.then(()=>{pn(()=>{h.isUnmounted||q()},L)});return}}let a=ne,_;fo(h,!1),ne?(ne.el=Ce.el,Re(h,ne,ee)):ne=Ce,de&&Lt(de),(_=ne.props&&ne.props.onVnodeBeforeUpdate)&&kn(_,Te,ne,Ce),fo(h,!0);const B=oi(h),E=h.subTree;h.subTree=B,N(E,B,m(E.el),O(E),h,L,S),ne.el=B.el,a===null&&Ju(h,B.el),ge&&pn(ge,L),(_=ne.props&&ne.props.onVnodeUpdated)&&pn(()=>kn(_,Te,ne,Ce),L)}else{let ne;const{el:de,props:ge}=v,{bm:Te,m:Ce,parent:a,root:_,type:B}=h,E=Po(v);fo(h,!1),Te&&Lt(Te),!E&&(ne=ge&&ge.onVnodeBeforeMount)&&kn(ne,a,v),fo(h,!0);{_.ce&&_.ce._hasShadowRoot()&&_.ce._injectChildStyle(B,h.parent?h.parent.type:void 0);const x=h.subTree=oi(h);N(null,x,b,I,h,L,S),v.el=x.el}if(Ce&&pn(Ce,L),!E&&(ne=ge&&ge.onVnodeMounted)){const x=v;pn(()=>kn(ne,a,x),L)}(v.shapeFlag&256||a&&Po(a.vnode)&&a.vnode.shapeFlag&256)&&h.a&&pn(h.a,L),h.isMounted=!0,v=b=I=null}};h.scope.on();const Y=h.effect=new Dl(X);h.scope.off();const q=h.update=Y.run.bind(Y),pe=h.job=Y.runIfDirty.bind(Y);pe.i=h,pe.id=h.uid,Y.scheduler=()=>La(pe),fo(h,!0),q()},Re=(h,v,b)=>{v.component=h;const I=h.vnode.props;h.vnode=v,h.next=null,Xu(h,v.props,I,b),od(h,v.children,b),Qn(),Ya(h),Xn()},Ne=(h,v,b,I,L,S,ee,X,Y=!1)=>{const q=h&&h.children,pe=h?h.shapeFlag:0,ne=v.children,{patchFlag:de,shapeFlag:ge}=v;if(de>0){if(de&128){Ze(q,ne,b,I,L,S,ee,X,Y);return}else if(de&256){vn(q,ne,b,I,L,S,ee,X,Y);return}}ge&8?(pe&16&&He(q,L,S),ne!==q&&u(b,ne)):pe&16?ge&16?Ze(q,ne,b,I,L,S,ee,X,Y):He(q,L,S,!0):(pe&8&&u(b,""),ge&16&&Se(ne,b,I,L,S,ee,X,Y))},vn=(h,v,b,I,L,S,ee,X,Y)=>{h=h||Co,v=v||Co;const q=h.length,pe=v.length,ne=Math.min(q,pe);let de;for(de=0;de<ne;de++){const ge=v[de]=Y?Gn(v[de]):Dn(v[de]);N(h[de],ge,b,null,L,S,ee,X,Y)}q>pe?He(h,L,S,!0,!1,ne):Se(v,b,I,L,S,ee,X,Y,ne)},Ze=(h,v,b,I,L,S,ee,X,Y)=>{let q=0;const pe=v.length;let ne=h.length-1,de=pe-1;for(;q<=ne&&q<=de;){const ge=h[q],Te=v[q]=Y?Gn(v[q]):Dn(v[q]);if(go(ge,Te))N(ge,Te,b,null,L,S,ee,X,Y);else break;q++}for(;q<=ne&&q<=de;){const ge=h[ne],Te=v[de]=Y?Gn(v[de]):Dn(v[de]);if(go(ge,Te))N(ge,Te,b,null,L,S,ee,X,Y);else break;ne--,de--}if(q>ne){if(q<=de){const ge=de+1,Te=ge<pe?v[ge].el:I;for(;q<=de;)N(null,v[q]=Y?Gn(v[q]):Dn(v[q]),b,Te,L,S,ee,X,Y),q++}}else if(q>de)for(;q<=ne;)Ge(h[q],L,S,!0),q++;else{const ge=q,Te=q,Ce=new Map;for(q=Te;q<=de;q++){const y=v[q]=Y?Gn(v[q]):Dn(v[q]);y.key!=null&&Ce.set(y.key,q)}let a,_=0;const B=de-Te+1;let E=!1,x=0;const F=new Array(B);for(q=0;q<B;q++)F[q]=0;for(q=ge;q<=ne;q++){const y=h[q];if(_>=B){Ge(y,L,S,!0);continue}let j;if(y.key!=null)j=Ce.get(y.key);else for(a=Te;a<=de;a++)if(F[a-Te]===0&&go(y,v[a])){j=a;break}j===void 0?Ge(y,L,S,!0):(F[j-Te]=q+1,j>=x?x=j:E=!0,N(y,v[j],b,null,L,S,ee,X,Y),_++)}const f=E?id(F):Co;for(a=f.length-1,q=B-1;q>=0;q--){const y=Te+q,j=v[y],P=v[y+1],k=y+1<pe?P.el||js(P):I;F[q]===0?N(null,j,b,k,L,S,ee,X,Y):E&&(a<0||q!==f[a]?mn(j,b,k,2):a--)}}},mn=(h,v,b,I,L=null)=>{const{el:S,type:ee,transition:X,children:Y,shapeFlag:q}=h;if(q&6){mn(h.component.subTree,v,b,I);return}if(q&128){h.suspense.move(v,b,I);return}if(q&64){ee.move(h,v,b,ce);return}if(ee===Be){t(S,v,b);for(let ne=0;ne<Y.length;ne++)mn(Y[ne],v,b,I);t(h.anchor,v,b);return}if(ee===Dt){K(h,v,b);return}if(I!==2&&q&1&&X)if(I===0)X.persisted&&!S[yn]?t(S,v,b):(X.beforeEnter(S),t(S,v,b),pn(()=>X.enter(S),L));else{const{leave:ne,delayLeave:de,afterLeave:ge}=X,Te=()=>{h.ctx.isUnmounted?r(S):t(S,v,b)},Ce=()=>{const a=S._isLeaving||!!S[yn];S._isLeaving&&S[yn](!0),X.persisted&&!a?Te():ne(S,()=>{Te(),ge&&ge()})};de?de(S,Te,Ce):Ce()}else t(S,v,b)},Ge=(h,v,b,I=!1,L=!1)=>{const{type:S,props:ee,ref:X,children:Y,dynamicChildren:q,shapeFlag:pe,patchFlag:ne,dirs:de,cacheIndex:ge,memo:Te}=h;if(ne===-2&&(L=!1),X!=null&&(Qn(),tt(X,null,b,h,!0),Xn()),ge!=null&&(v.renderCache[ge]=void 0),pe&256){v.ctx.deactivate(h);return}const Ce=pe&1&&de,a=!Po(h);let _;if(a&&(_=ee&&ee.onVnodeBeforeUnmount)&&kn(_,v,h),pe&6)Ue(h.component,b,I);else{if(pe&128){h.suspense.unmount(b,I);return}Ce&&uo(h,null,v,"beforeUnmount"),pe&64?h.type.remove(h,v,b,ce,I):q&&!q.hasOnce&&(S!==Be||ne>0&&ne&64)?He(q,v,b,!1,!0):(S===Be&&ne&384||!L&&pe&16)&&He(Y,v,b),I&&gn(h)}const B=Te!=null&&ge==null;(a&&(_=ee&&ee.onVnodeUnmounted)||Ce||B)&&pn(()=>{_&&kn(_,v,h),Ce&&uo(h,null,v,"unmounted"),B&&(h.el=null)},b)},gn=h=>{const{type:v,el:b,anchor:I,transition:L}=h;if(v===Be){Tn(b,I);return}if(v===Dt){C(h);return}const S=()=>{r(b),L&&!L.persisted&&L.afterLeave&&L.afterLeave()};if(h.shapeFlag&1&&L&&!L.persisted){const{leave:ee,delayLeave:X}=L,Y=()=>ee(b,S);X?X(h.el,S,Y):Y()}else S()},Tn=(h,v)=>{let b;for(;h!==v;)b=p(h),r(h),h=b;r(v)},Ue=(h,v,b)=>{const{bum:I,scope:L,job:S,subTree:ee,um:X,m:Y,a:q}=h;ai(Y),ai(q),I&&Lt(I),L.stop(),S&&(S.flags|=8,Ge(ee,h,v,b)),X&&pn(X,v),pn(()=>{h.isUnmounted=!0},v)},He=(h,v,b,I=!1,L=!1,S=0)=>{for(let ee=S;ee<h.length;ee++)Ge(h[ee],v,b,I,L)},O=h=>{if(h.shapeFlag&6)return O(h.component.subTree);if(h.shapeFlag&128)return h.suspense.next();const v=p(h.anchor||h.el),b=v&&v[bu];return b?p(b):v};let ie=!1;const H=(h,v,b)=>{let I;h==null?v._vnode&&(Ge(v._vnode,null,null,!0),I=v._vnode.component):N(v._vnode||null,h,v,null,null,null,b),v._vnode=h,ie||(ie=!0,Ya(I),os(),ie=!1)},ce={p:N,um:Ge,m:mn,r:gn,mt:te,mc:Se,pc:Ne,pbc:W,n:O,o:e};return{render:H,hydrate:void 0,createApp:zu(H)}}function Br({type:e,props:n},o){return o==="svg"&&e==="foreignObject"||o==="mathml"&&e==="annotation-xml"&&n&&n.encoding&&n.encoding.includes("html")?void 0:o}function fo({effect:e,job:n},o){o?(e.flags|=32,n.flags|=4):(e.flags&=-33,n.flags&=-5)}function ad(e,n){return(!e||e&&!e.pendingBranch)&&n&&!n.persisted}function ks(e,n,o=!1){const t=e.children,r=n.children;if(ve(t)&&ve(r))for(let i=0;i<t.length;i++){const l=t[i];let s=r[i];s.shapeFlag&1&&!s.dynamicChildren&&((s.patchFlag<=0||s.patchFlag===32)&&(s=r[i]=Gn(r[i]),s.el=l.el),!o&&s.patchFlag!==-2&&ks(l,s)),s.type===fr&&(s.patchFlag===-1&&(s=r[i]=Gn(s)),s.el=l.el),s.type===on&&!s.el&&(s.el=l.el)}}function id(e){const n=e.slice(),o=[0];let t,r,i,l,s;const c=e.length;for(t=0;t<c;t++){const d=e[t];if(d!==0){if(r=o[o.length-1],e[r]<d){n[t]=r,o.push(t);continue}for(i=0,l=o.length-1;i<l;)s=i+l>>1,e[o[s]]<d?i=s+1:l=s;d<e[o[i]]&&(i>0&&(n[t]=o[i-1]),o[i]=t)}}for(i=o.length,l=o[i-1];i-- >0;)o[i]=l,l=n[l];return o}function Ls(e){const n=e.subTree.component;if(n)return n.asyncDep&&!n.asyncResolved?n:Ls(n)}function ai(e){if(e)for(let n=0;n<e.length;n++)e[n].flags|=8}function js(e){if(e.placeholder)return e.placeholder;const n=e.component;return n?js(n.subTree):null}const Ds=e=>e.__isSuspense;function ld(e,n){n&&n.pendingBranch?ve(e)?n.effects.push(...e):n.effects.push(e):hu(e)}const Be=Symbol.for("v-fgt"),fr=Symbol.for("v-txt"),on=Symbol.for("v-cmt"),Dt=Symbol.for("v-stc"),Jn=[];let _n=null;function z(e=!1){Jn.push(_n=e?null:[])}function qa(){Jn.pop(),_n=Jn[Jn.length-1]||null}let dt=1;function Ht(e,n=!1){dt+=e,e<0&&_n&&n&&(_n.hasOnce=!0)}function qs(e){return e.dynamicChildren=dt>0?_n||Co:null,qa(),dt>0&&_n&&_n.push(e),e}function oe(e,n,o,t,r,i){return qs(A(e,n,o,t,r,i,!0))}function Ve(e,n,o,t,r){return qs(G(e,n,o,t,r,!0))}function ft(e){return e?e.__v_isVNode===!0:!1}function go(e,n){return e.type===n.type&&e.key===n.key}const Ms=({key:e})=>e??null,qt=({ref:e,ref_key:n,ref_for:o})=>(typeof e=="number"&&(e=""+e),e!=null?Fe(e)||rn(e)||Ae(e)?{i:Xe,r:e,k:n,f:!!o}:e:null);function A(e,n=null,o=null,t=0,r=null,i=e===Be?0:1,l=!1,s=!1){const c={__v_isVNode:!0,__v_skip:!0,type:e,props:n,key:n&&Ms(n),ref:n&&qt(n),scopeId:rs,slotScopeIds:null,children:o,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:t,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:Xe};return s?(Kt(c,o),i&128&&e.normalize(c)):o&&(c.shapeFlag|=Fe(o)?8:16),dt>0&&!l&&_n&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&_n.push(c),c}const G=sd;function sd(e,n=null,o=null,t=0,r=null,i=!1){if((!e||e===_s)&&(e=on),ft(e)){const s=so(e,n,!0);return o&&Kt(s,o),dt>0&&!i&&_n&&(s.shapeFlag&6?_n[_n.indexOf(e)]=s:_n.push(s)),s.patchFlag=-2,s}if(_d(e)&&(e=e.__vccOpts),n){n=wn(n);let{class:s,style:c}=n;s&&!Fe(s)&&(n.class=cn(s)),Le(c)&&(ka(c)&&!ve(c)&&(c=Je({},c)),n.style=rr(c))}const l=Fe(e)?1:Ds(e)?128:sr(e)?64:Le(e)?4:Ae(e)?2:0;return A(e,n,o,t,r,l,i,!0)}function wn(e){return e?ka(e)||ws(e)?Je({},e):e:null}function so(e,n,o=!1,t=!1){const{props:r,ref:i,patchFlag:l,children:s,transition:c}=e,d=n?va(r||{},n):r,u={__v_isVNode:!0,__v_skip:!0,type:e.type,props:d,key:d&&Ms(d),ref:n&&n.ref?o&&i?ve(i)?i.concat(qt(n)):[i,qt(n)]:qt(n):i,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:s,target:e.target,targetStart:e.targetStart,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:n&&e.type!==Be?l===-1?16:l|16:l,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:c,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&so(e.ssContent),ssFallback:e.ssFallback&&so(e.ssFallback),placeholder:e.placeholder,el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return c&&t&&ut(u,c.clone(u)),u}function xe(e=" ",n=0){return G(fr,null,e,n)}function cd(e,n){const o=G(Dt,null,e);return o.staticCount=n,o}function Ie(e="",n=!1){return n?(z(),Ve(on,null,e)):G(on,null,e)}function Dn(e){return e==null||typeof e=="boolean"?G(on):ve(e)?G(Be,null,e.slice()):ft(e)?Gn(e):G(fr,null,String(e))}function Gn(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:so(e)}function Kt(e,n){let o=0;const{shapeFlag:t}=e;if(n==null)n=null;else if(ve(n))o=16;else if(typeof n=="object")if(t&65){const r=n.default;r&&(r._c&&(r._d=!1),Kt(e,r()),r._c&&(r._d=!0));return}else{o=32;const r=n._;!r&&!ws(n)?n._ctx=Xe:r===3&&Xe&&(Xe.slots._===1?n._=1:(n._=2,e.patchFlag|=1024))}else if(Ae(n)){if(t&65){Kt(e,{default:n});return}n={default:n,_ctx:Xe},o=32}else n=String(n),t&64?(o=16,n=[xe(n)]):o=8;e.children=n,e.shapeFlag|=o}function va(...e){const n={};for(let o=0;o<e.length;o++){const t=e[o];for(const r in t)if(r==="class")n.class!==t.class&&(n.class=cn([n.class,t.class]));else if(r==="style")n.style=rr([n.style,t.style]);else if(Xt(r)){const i=n[r],l=t[r];l&&i!==l&&!(ve(i)&&i.includes(l))?n[r]=i?[].concat(i,l):l:l==null&&i==null&&!Zt(r)&&(n[r]=l)}else r!==""&&(n[r]=t[r])}return n}function kn(e,n,o,t=null){Rn(e,n,7,[o,t])}const ud=xs();let dd=0;function fd(e,n,o){const t=e.type,r=(n?n.appContext:e.appContext)||ud,i={uid:dd++,vnode:e,type:t,parent:n,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new $c(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:n?n.provides:Object.create(r.provides),ids:n?n.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Cs(t,r),emitsOptions:Bs(t,r),emit:null,emitted:null,propsDefaults:qe,inheritAttrs:t.inheritAttrs,ctx:qe,data:qe,props:qe,attrs:qe,slots:qe,refs:qe,setupState:qe,setupContext:null,suspense:o,suspenseId:o?o.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=n?n.root:i,i.emit=Hu.bind(null,i),e.ce&&e.ce(i),i}let tn=null;const $s=()=>tn||Xe;let Gt,mt;{const e=tr(),n=(o,t)=>{let r;return(r=e[o])||(r=e[o]=[]),r.push(t),i=>{r.length>1?r.forEach(l=>l(i)):r[0](i)}};Gt=n("__VUE_INSTANCE_SETTERS__",o=>tn=o),mt=n("__VUE_SSR_SETTERS__",o=>pt=o)}const xt=e=>{const n=tn;return Gt(e),e.scope.on(),()=>{e.scope.off(),Gt(n)}},ii=()=>{tn&&tn.scope.off(),Gt(null)};function Fs(e){return e.vnode.shapeFlag&4}let pt=!1;function md(e,n=!1,o=!1){n&&mt(n);const{props:t,children:r}=e.vnode,i=Fs(e);Qu(e,t,i,n),nd(e,r,o||n);const l=i?pd(e,n):void 0;return n&&mt(!1),l}function pd(e,n){const o=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,ju);const{setup:t}=o;if(t){Qn();const r=e.setupContext=t.length>1?vd(e):null,i=xt(e),l=Nt(t,e,0,[e.props,r]),s=Cl(l);if(Xn(),i(),(s||e.sp)&&!Po(e)&&ms(e),s){if(l.then(ii,ii),n)return l.then(c=>{mt(!0);try{li(e,c,n)}finally{mt(!1)}}).catch(c=>{ir(c,e,0)});e.asyncDep=l}else li(e,l)}else Vs(e)}function li(e,n,o){Ae(n)?e.type.__ssrInlineRender?e.ssrRender=n:e.render=n:Le(n)&&(e.setupState=Zl(n)),Vs(e)}function Vs(e,n,o){const t=e.type;e.render||(e.render=t.render||$n);{const r=xt(e);Qn();try{Du(e)}finally{Xn(),r()}}}const hd={get(e,n){return nn(e,"get",""),e[n]}};function vd(e){const n=o=>{e.exposed=o||{}};return{attrs:new Proxy(e.attrs,hd),slots:e.slots,emit:e.emit,expose:n}}function mr(e){return e.exposed?e.exposeProxy||(e.exposeProxy=new Proxy(Zl(au(e.exposed)),{get(n,o){if(o in n)return n[o];if(o in rt)return rt[o](e)},has(n,o){return o in n||o in rt}})):e.proxy}function gd(e,n=!0){return Ae(e)?e.displayName||e.name:e.name||n&&e.__name}function _d(e){return Ae(e)&&"__vccOpts"in e}const De=(e,n)=>uu(e,n,pt);function Do(e,n,o){try{Ht(-1);const t=arguments.length;return t===2?Le(n)&&!ve(n)?ft(n)?G(e,null,[n]):G(e,n):G(e,null,n):(t>3?o=Array.prototype.slice.call(arguments,2):t===3&&ft(o)&&(o=[o]),G(e,n,o))}finally{Ht(1)}}const bd="3.5.41";let ga;const si=typeof window<"u"&&window.trustedTypes;if(si)try{ga=si.createPolicy("vue",{createHTML:e=>e})}catch{}const zs=ga?e=>ga.createHTML(e):e=>e,yd="http://www.w3.org/2000/svg",Ad="http://www.w3.org/1998/Math/MathML",Kn=typeof document<"u"?document:null,ci=Kn&&Kn.createElement("template"),Nd={insert:(e,n,o)=>{n.insertBefore(e,o||null)},remove:e=>{const n=e.parentNode;n&&n.removeChild(e)},createElement:(e,n,o,t)=>{const r=n==="svg"?Kn.createElementNS(yd,e):n==="mathml"?Kn.createElementNS(Ad,e):o?Kn.createElement(e,{is:o}):Kn.createElement(e);return e==="select"&&t&&t.multiple!=null&&r.setAttribute("multiple",t.multiple),r},createText:e=>Kn.createTextNode(e),createComment:e=>Kn.createComment(e),setText:(e,n)=>{e.nodeValue=n},setElementText:(e,n)=>{e.textContent=n},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>Kn.querySelector(e),setScopeId(e,n){e.setAttribute(n,"")},insertStaticContent(e,n,o,t,r,i){const l=o?o.previousSibling:n.lastChild;if(r&&(r===i||r.nextSibling))for(;n.insertBefore(r.cloneNode(!0),o),!(r===i||!(r=r.nextSibling)););else{ci.innerHTML=zs(t==="svg"?`<svg>${e}</svg>`:t==="mathml"?`<math>${e}</math>`:e);const s=ci.content;if(t==="svg"||t==="mathml"){const c=s.firstChild;for(;c.firstChild;)s.appendChild(c.firstChild);s.removeChild(c)}n.insertBefore(s,o)}return[l?l.nextSibling:n.firstChild,o?o.previousSibling:n.lastChild]}},no="transition",Yo="animation",ht=Symbol("_vtc"),Us={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},xd=Je({},ls,Us),Bd=e=>(e.displayName="Transition",e.props=xd,e),Rd=Bd((e,{slots:n})=>Do(Nu,Td(e),n)),mo=(e,n=[])=>{ve(e)?e.forEach(o=>o(...n)):e&&e(...n)},ui=e=>e?ve(e)?e.some(n=>n.length>1):e.length>1:!1;function Td(e){const n={};for(const R in e)R in Us||(n[R]=e[R]);if(e.css===!1)return n;const{name:o="v",type:t,duration:r,enterFromClass:i=`${o}-enter-from`,enterActiveClass:l=`${o}-enter-active`,enterToClass:s=`${o}-enter-to`,appearFromClass:c=i,appearActiveClass:d=l,appearToClass:u=s,leaveFromClass:m=`${o}-leave-from`,leaveActiveClass:p=`${o}-leave-active`,leaveToClass:g=`${o}-leave-to`}=e,T=Sd(r),N=T&&T[0],w=T&&T[1],{onBeforeEnter:Q,onEnter:M,onEnterCancelled:K,onLeave:C,onLeaveCancelled:U,onBeforeAppear:re=Q,onAppear:be=M,onAppearCancelled:Se=K}=n,me=(R,Z,te,Ke)=>{R._enterCancelled=Ke,po(R,Z?u:s),po(R,Z?d:l),te&&te()},W=(R,Z)=>{R._isLeaving=!1,po(R,m),po(R,g),po(R,p),Z&&Z()},D=R=>(Z,te)=>{const Ke=R?be:M,J=()=>me(Z,R,te);mo(Ke,[Z,J]),di(()=>{po(Z,R?c:i),Un(Z,R?u:s),ui(Ke)||fi(Z,t,N,J)})};return Je(n,{onBeforeEnter(R){mo(Q,[R]),Un(R,i),Un(R,l)},onBeforeAppear(R){mo(re,[R]),Un(R,c),Un(R,d)},onEnter:D(!1),onAppear:D(!0),onLeave(R,Z){R._isLeaving=!0;const te=()=>W(R,Z);Un(R,m),R._enterCancelled?(Un(R,p),hi(R)):(hi(R),Un(R,p)),di(()=>{R._isLeaving&&(po(R,m),Un(R,g),ui(C)||fi(R,t,w,te))}),mo(C,[R,te])},onEnterCancelled(R){me(R,!1,void 0,!0),mo(K,[R])},onAppearCancelled(R){me(R,!0,void 0,!0),mo(Se,[R])},onLeaveCancelled(R){W(R),mo(U,[R])}})}function Sd(e){if(e==null)return null;if(Le(e))return[Rr(e.enter),Rr(e.leave)];{const n=Rr(e);return[n,n]}}function Rr(e){return Ic(e)}function Un(e,n){n.split(/\s+/).forEach(o=>o&&e.classList.add(o)),(e[ht]||(e[ht]=new Set)).add(n)}function po(e,n){n.split(/\s+/).forEach(t=>t&&e.classList.remove(t));const o=e[ht];o&&(o.delete(n),o.size||(e[ht]=void 0))}function di(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}let wd=0;function fi(e,n,o,t){const r=e._endId=++wd,i=()=>{r===e._endId&&t()};if(o!=null)return setTimeout(i,o);const{type:l,timeout:s,propCount:c}=Ed(e,n);if(!l)return t();const d=l+"end";let u=0;const m=()=>{e.removeEventListener(d,p),i()},p=g=>{g.target===e&&++u>=c&&m()};setTimeout(()=>{u<c&&m()},s+1),e.addEventListener(d,p)}function Ed(e,n){const o=window.getComputedStyle(e),t=T=>(o[T]||"").split(", "),r=t(`${no}Delay`),i=t(`${no}Duration`),l=mi(r,i),s=t(`${Yo}Delay`),c=t(`${Yo}Duration`),d=mi(s,c);let u=null,m=0,p=0;n===no?l>0&&(u=no,m=l,p=i.length):n===Yo?d>0&&(u=Yo,m=d,p=c.length):(m=Math.max(l,d),u=m>0?l>d?no:Yo:null,p=u?u===no?i.length:c.length:0);const g=u===no&&/\b(?:transform|all)(?:,|$)/.test(t(`${no}Property`).toString());return{type:u,timeout:m,propCount:p,hasTransform:g}}function mi(e,n){for(;e.length<n.length;)e=e.concat(e);return Math.max(...n.map((o,t)=>pi(o)+pi(e[t])))}function pi(e){return e==="auto"?0:Number(e.slice(0,-1).replace(",","."))*1e3}function hi(e){return(e?e.ownerDocument:document).body.offsetHeight}function Cd(e,n,o){const t=e[ht];t&&(n=(n?[n,...t]:[...t]).join(" ")),n==null?e.removeAttribute("class"):o?e.setAttribute("class",n):e.className=n}const Yt=Symbol("_vod"),Hs=Symbol("_vsh"),vi={name:"show",beforeMount(e,{value:n},{transition:o}){e[Yt]=e.style.display==="none"?"":e.style.display,o&&n?o.beforeEnter(e):Wo(e,n)},mounted(e,{value:n},{transition:o}){o&&n&&o.enter(e)},updated(e,{value:n,oldValue:o},{transition:t}){!n!=!o&&(t?n?(t.beforeEnter(e),Wo(e,!0),t.enter(e)):t.leave(e,()=>{Wo(e,!1)}):Wo(e,n))},beforeUnmount(e,{value:n}){Wo(e,n)}};function Wo(e,n){e.style.display=n?e[Yt]:"none",e[Hs]=!n}const Od=Symbol(""),Id=/(?:^|;)\s*display\s*:/;function Pd(e,n,o){const t=e.style,r=Fe(o);let i=!1;if(o&&!r){if(n)if(Fe(n))for(const l of n.split(";")){const s=l.slice(0,l.indexOf(":")).trim();o[s]==null&&Zo(t,s,"")}else for(const l in n)o[l]==null&&Zo(t,l,"");for(const l in o){l==="display"&&(i=!0);const s=o[l];s!=null?Ld(e,l,!Fe(n)&&n?n[l]:void 0,s)||Zo(t,l,s):Zo(t,l,"")}}else if(r){if(n!==o){const l=t[Od];l&&(o+=";"+l),t.cssText=o,i=Id.test(o)}}else n&&e.removeAttribute("style");Yt in e&&(e[Yt]=i?t.display:"",e[Hs]&&(t.display="none"))}const gi=/\s*!important$/;function Zo(e,n,o){if(ve(o))o.forEach(t=>Zo(e,n,t));else if(o==null&&(o=""),n.startsWith("--"))e.setProperty(n,o);else{const t=kd(e,n);gi.test(o)?e.setProperty(xo(t),o.replace(gi,""),"important"):e[t]=o}}const _i=["Webkit","Moz","ms"],Tr={};function kd(e,n){const o=Tr[n];if(o)return o;let t=dn(n);if(t!=="filter"&&t in e)return Tr[n]=t;t=nr(t);for(let r=0;r<_i.length;r++){const i=_i[r]+t;if(i in e)return Tr[n]=i}return n}function Ld(e,n,o,t){return e.tagName==="TEXTAREA"&&(n==="width"||n==="height")&&Fe(t)&&o===t}const bi="http://www.w3.org/1999/xlink";function yi(e,n,o,t,r,i=qc(n)){t&&n.startsWith("xlink:")?o==null?e.removeAttributeNS(bi,n.slice(6,n.length)):e.setAttributeNS(bi,n,o):o==null||i&&!kl(o)?e.removeAttribute(n):e.setAttribute(n,i?"":Cn(o)?String(o):o)}function Ai(e,n,o,t,r){if(n==="innerHTML"||n==="textContent"){o!=null&&(e[n]=n==="innerHTML"?zs(o):o);return}const i=e.tagName;if(n==="value"&&i!=="PROGRESS"&&!i.includes("-")){const s=i==="OPTION"?e.getAttribute("value")||"":e.value,c=o==null?e.type==="checkbox"?"on":"":String(o);(s!==c||!("_value"in e))&&(e.value=c),o==null&&e.removeAttribute(n),e._value=o;return}let l=!1;if(o===""||o==null){const s=typeof e[n];s==="boolean"?o=kl(o):o==null&&s==="string"?(o="",l=!0):s==="number"&&(o=0,l=!0)}try{e[n]=o}catch{}l&&e.removeAttribute(r||n)}function io(e,n,o,t){e.addEventListener(n,o,t)}function jd(e,n,o,t){e.removeEventListener(n,o,t)}const Ni=Symbol("_vei");function Dd(e,n,o,t,r=null){const i=e[Ni]||(e[Ni]={}),l=i[n];if(t&&l)l.value=t;else{const[s,c]=$d(n);if(t){const d=i[n]=zd(t,r);io(e,s,d,c)}else l&&(jd(e,s,l,c),i[n]=void 0)}}const qd=/(Once|Passive|Capture)$/,Md=/^on:?(?:Once|Passive|Capture)$/;function $d(e){let n,o;for(;(o=e.match(qd))&&!Md.test(e);)n||(n={}),e=e.slice(0,e.length-o[1].length),n[o[1].toLowerCase()]=!0;return[e[2]===":"?e.slice(3):xo(e.slice(2)),n]}let Sr=0;const Fd=Promise.resolve(),Vd=()=>Sr||(Fd.then(()=>Sr=0),Sr=Date.now());function zd(e,n){const o=t=>{if(!t._vts)t._vts=Date.now();else if(t._vts<=o.attached)return;const r=o.value;if(ve(r)){const i=t.stopImmediatePropagation;t.stopImmediatePropagation=()=>{i.call(t),t._stopped=!0};const l=r.slice(),s=[t];for(let c=0;c<l.length&&!t._stopped;c++){const d=l[c];d&&Rn(d,n,5,s)}}else Rn(r,n,5,[t])};return o.value=e,o.attached=Vd(),o}const xi=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,Ud=(e,n,o,t,r,i)=>{const l=r==="svg";n==="class"?Cd(e,t,l):n==="style"?Pd(e,o,t):Xt(n)?Zt(n)||Dd(e,n,o,t,i):(n[0]==="."?(n=n.slice(1),!0):n[0]==="^"?(n=n.slice(1),!1):Hd(e,n,t,l))?(Ai(e,n,t),!e.tagName.includes("-")&&(n==="value"||n==="checked"||n==="selected")&&yi(e,n,t,l,i,n!=="value")):e._isVueCE&&(Kd(e,n)||e._def.__asyncLoader&&(/[A-Z]/.test(n)||!Fe(t)))?Ai(e,dn(n),t,i,n):(n==="true-value"?e._trueValue=t:n==="false-value"&&(e._falseValue=t),yi(e,n,t,l))};function Hd(e,n,o,t){if(t)return!!(n==="innerHTML"||n==="textContent"||n in e&&xi(n)&&Ae(o));if(n==="spellcheck"||n==="draggable"||n==="translate"||n==="autocorrect"||n==="sandbox"&&e.tagName==="IFRAME"||n==="form"||n==="list"&&e.tagName==="INPUT"||n==="type"&&e.tagName==="TEXTAREA")return!1;if(n==="width"||n==="height"){const r=e.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return xi(n)&&Fe(o)?!1:n in e}function Kd(e,n){const o=e._def.props;if(!o)return!1;const t=dn(n);return Array.isArray(o)?o.some(r=>dn(r)===t):Object.keys(o).some(r=>dn(r)===t)}const qo=e=>{const n=e.props["onUpdate:modelValue"]||!1;return ve(n)?o=>Lt(n,o):n};function Gd(e){e.target.composing=!0}function Bi(e){const n=e.target;n.composing&&(n.composing=!1,n.dispatchEvent(new Event("input")))}const Mn=Symbol("_assign"),Ot=Symbol("_initialValue");function wr(e,n,o){return n&&(e=e.trim()),o&&(e=or(e)),e}const vt={created(e,{modifiers:{lazy:n,trim:o,number:t}},r){e.parentNode&&(e.type==="text"?e[Ot]=e.defaultValue.replace(/[\r\n]/g,""):e.type==="textarea"&&(e[Ot]=e.defaultValue.replace(/\r\n?/g,`
`))),e[Mn]=qo(r);const i=t||r.props&&r.props.type==="number";io(e,n?"change":"input",l=>{l.target.composing||e[Mn](wr(e.value,o,i))}),(o||i)&&io(e,"change",()=>{e.value=wr(e.value,o,i)}),n||(io(e,"compositionstart",Gd),io(e,"compositionend",Bi),io(e,"change",Bi))},mounted(e,{value:n,modifiers:{trim:o,number:t}}){const r=n??"",i=e[Ot];delete e[Ot],i!==void 0&&(e.type==="text"||e.type==="textarea")&&e.value!==i?e[Mn](wr(e.value,o,t)):e.value=r},beforeUpdate(e,{value:n,oldValue:o,modifiers:{lazy:t,trim:r,number:i}},l){if(e[Mn]=qo(l),e.composing)return;const s=(i||e.type==="number")&&!/^0\d/.test(e.value)?or(e.value):e.value,c=n??"";if(s===c)return;const d=e.getRootNode();(d instanceof Document||d instanceof ShadowRoot)&&d.activeElement===e&&e.type!=="range"&&(t&&n===o||r&&e.value.trim()===c)||(e.value=c)}},Yd={deep:!0,created(e,n,o){e[Mn]=qo(o),io(e,"change",()=>{const t=e._modelValue,r=gt(e),i=e.checked,l=e[Mn];if(ve(t)){const s=Sa(t,r),c=s!==-1;if(i&&!c)l(t.concat(r));else if(!i&&c){const d=[...t];d.splice(s,1),l(d)}}else if(Vo(t)){const s=new Set(t);i?s.add(r):s.delete(r),l(s)}else l(Ks(e,i))})},mounted:Ri,beforeUpdate(e,n,o){e[Mn]=qo(o),Ri(e,n,o)}};function Ri(e,{value:n,oldValue:o},t){e._modelValue=n;let r;if(ve(n))r=Sa(n,t.props.value)>-1;else if(Vo(n))r=n.has(t.props.value);else{if(n===o)return;r=zo(n,Ks(e,!0))}e.checked!==r&&(e.checked=r)}const Er={deep:!0,created(e,{value:n,modifiers:{number:o}},t){e._modelValue=n,io(e,"change",()=>{const r=Array.prototype.filter.call(e.options,i=>i.selected).map(i=>o?or(gt(i)):gt(i));e[Mn](e.multiple?Vo(e._modelValue)?new Set(r):r:r[0]),e._assigning=!0,lr(()=>{e._assigning=!1})}),e[Mn]=qo(t)},mounted(e,{value:n}){Ti(e,n)},beforeUpdate(e,{value:n},o){e._modelValue=n,e[Mn]=qo(o)},updated(e,{value:n}){e._assigning||Ti(e,n)}};function Ti(e,n){const o=e.multiple,t=ve(n);if(!(o&&!t&&!Vo(n))){for(let r=0,i=e.options.length;r<i;r++){const l=e.options[r],s=gt(l);if(o)if(t){const c=typeof s;c==="string"||c==="number"?l.selected=n.some(d=>String(d)===String(s)):l.selected=Sa(n,s)>-1}else l.selected=n.has(s);else if(zo(gt(l),n)){e.selectedIndex!==r&&(e.selectedIndex=r);return}}!o&&e.selectedIndex!==-1&&(e.selectedIndex=-1)}}function gt(e){return"_value"in e?e._value:e.value}function Ks(e,n){const o=n?"_trueValue":"_falseValue";return o in e?e[o]:n}const Wd=["ctrl","shift","alt","meta"],Jd={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&e.button!==0,middle:e=>"button"in e&&e.button!==1,right:e=>"button"in e&&e.button!==2,exact:(e,n)=>Wd.some(o=>e[`${o}Key`]&&!n.includes(o))},Mo=(e,n)=>{if(!e)return e;const o=e._withMods||(e._withMods={}),t=n.join(".");return o[t]||(o[t]=((r,...i)=>{for(let l=0;l<n.length;l++){const s=Jd[n[l]];if(s&&s(r,n))return}return e(r,...i)}))},Qd=Je({patchProp:Ud},Nd);let Si;function Xd(){return Si||(Si=td(Qd))}const Zd=((...e)=>{const n=Xd().createApp(...e),{mount:o}=n;return n.mount=t=>{const r=nf(t);if(!r)return;const i=n._component;!Ae(i)&&!i.render&&!i.template&&(i.template=r.innerHTML),r.nodeType===1&&(r.textContent="");const l=o(r,!1,ef(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),l},n});function ef(e){if(e instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&e instanceof MathMLElement)return"mathml"}function nf(e){return Fe(e)?document.querySelector(e):e}const of="modulepreload",tf=function(e){return"/Extensao-26.2/"+e},wi={},rf=function(n,o,t){let r=Promise.resolve();if(o&&o.length>0){let d=function(u){return Promise.all(u.map(m=>Promise.resolve(m).then(p=>({status:"fulfilled",value:p}),p=>({status:"rejected",reason:p}))))};var l=d;document.getElementsByTagName("link");const s=document.querySelector("meta[property=csp-nonce]"),c=s?.nonce||s?.getAttribute("nonce");r=d(o.map(u=>{if(u=tf(u),u in wi)return;wi[u]=!0;const m=u.endsWith(".css"),p=m?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${u}"]${p}`))return;const g=document.createElement("link");if(g.rel=m?"stylesheet":of,m||(g.as="script"),g.crossOrigin="",g.href=u,c&&g.setAttribute("nonce",c),document.head.appendChild(g),m)return new Promise((T,N)=>{g.addEventListener("load",T),g.addEventListener("error",()=>N(new Error(`Unable to preload CSS for ${u}`)))})}))}function i(s){const c=new Event("vite:preloadError",{cancelable:!0});if(c.payload=s,window.dispatchEvent(c),!c.defaultPrevented)throw s}return r.then(s=>{for(const c of s||[])c.status==="rejected"&&i(c.reason);return n().catch(i)})};function af(e={}){const{immediate:n=!1,onNeedReload:o,onNeedRefresh:t,onOfflineReady:r,onRegistered:i,onRegisteredSW:l,onRegisterError:s}=e;let c,d;const u=async(p=!0)=>{await d};async function m(){if("serviceWorker"in navigator){if(c=await rf(async()=>{const{Workbox:p}=await import("./workbox-window.prod.es5-BBnX5xw4.js");return{Workbox:p}},[]).then(({Workbox:p})=>new p("/Extensao-26.2/sw.js",{scope:"/Extensao-26.2/",type:"classic"})).catch(p=>{s?.(p)}),!c)return;c.addEventListener("activated",p=>{(p.isUpdate||p.isExternal)&&(o?o():window.location.reload())}),c.addEventListener("installed",p=>{p.isUpdate||r?.()}),c.register({immediate:n}).then(p=>{l?l("/Extensao-26.2/sw.js",p):i?.(p)}).catch(p=>{s?.(p)})}}return d=m(),u}const lf="acessibilidade-checker",sf=2,ln=Object.freeze({projects:"projects",environments:"environments",elements:"elements",evaluations:"evaluations",ruleSets:"ruleSets"});function So(e){return new Promise((n,o)=>{e.onsuccess=()=>n(e.result),e.onerror=()=>o(e.error??new Error("Falha no IndexedDB."))})}function cf(e=globalThis.indexedDB){if(!e)return Promise.reject(new Error("IndexedDB não está disponível neste ambiente."));const n=e.open(lf,sf);return n.onupgradeneeded=()=>{const o=n.result;if(o.objectStoreNames.contains(ln.projects)||o.createObjectStore(ln.projects,{keyPath:"id"}),o.objectStoreNames.contains(ln.environments)||o.createObjectStore(ln.environments,{keyPath:"id"}).createIndex("projectId","projectId",{unique:!1}),o.objectStoreNames.contains(ln.elements)||o.createObjectStore(ln.elements,{keyPath:"id"}).createIndex("environmentId","environmentId",{unique:!1}),!o.objectStoreNames.contains(ln.evaluations)){const t=o.createObjectStore(ln.evaluations,{keyPath:"id"});t.createIndex("elementId","elementId",{unique:!1}),t.createIndex("evaluatedAt","evaluatedAt",{unique:!1})}o.objectStoreNames.contains(ln.ruleSets)||o.createObjectStore(ln.ruleSets,{keyPath:"id"})},So(n)}async function Jo(e,n,o,t){const r=e.transaction(n,o),i=r.objectStore(n),l=await t(i);return await new Promise((s,c)=>{r.oncomplete=s,r.onabort=r.onerror=()=>c(r.error??new Error("Transação IndexedDB não concluída."))}),l}class Bt{constructor(n,o){this.database=n,this.storeName=o}get(n){return Jo(this.database,this.storeName,"readonly",o=>So(o.get(n)))}getAll(){return Jo(this.database,this.storeName,"readonly",n=>So(n.getAll()))}getAllBy(n,o){return Jo(this.database,this.storeName,"readonly",t=>So(t.index(n).getAll(o)))}put(n){return Jo(this.database,this.storeName,"readwrite",async o=>(await So(o.put(n)),n))}delete(n){return Jo(this.database,this.storeName,"readwrite",o=>So(o.delete(n)))}}class uf extends Bt{constructor(n){super(n,ln.elements)}getByEnvironmentId(n){return this.getAllBy("environmentId",n)}}class df extends Bt{constructor(n){super(n,ln.environments)}getByProjectId(n){return this.getAllBy("projectId",n)}}class ff extends Bt{constructor(n){super(n,ln.evaluations)}getByElementId(n){return this.getAllBy("elementId",n)}}class mf extends Bt{constructor(n){super(n,ln.projects)}}class pf extends Bt{constructor(n){super(n,ln.ruleSets)}}const hf=new Set([">=","<=",">","<","==","!="]);function Cr(e,n,o){switch(n){case">=":return e>=o;case"<=":return e<=o;case">":return e>o;case"<":return e<o;case"==":return e===o;case"!=":return e!==o;default:throw new Error(`Operador não suportado: ${n}`)}}function vf(e,n){return n.obrigatorio&&(e==null||e==="")?{valid:!1,reason:"Campo obrigatório não preenchido."}:e==null||e===""?{valid:!0}:n.tipo==="number"&&typeof e!="number"?{valid:!1,reason:"O valor deve ser numérico."}:n.tipo==="boolean"&&typeof e!="boolean"?{valid:!1,reason:"O valor deve ser booleano."}:{valid:!0}}class gf{evaluate(n,o,t={}){return n.map(r=>this.evaluateRule(r,o,t))}evaluateRule(n,o,t){const r=t[n.parametro],i=o[n.parametro];if(!r)return{id:n.id,status:"erro",mensagem:`Parâmetro não definido: ${n.parametro}`};const l=vf(i,r);if(!l.valid)return{id:n.id,nome:n.nome,status:"invalido",mensagem:l.reason,referencia:n.referencia};if(i==null||i==="")return{id:n.id,nome:n.nome,status:"nao_avaliado",referencia:n.referencia};if(n.tipo==="checklist")return{id:n.id,nome:n.nome,status:"manual",valor:i,referencia:n.referencia};if(n.tipo==="conditional")return this.evaluateConditional(n,o,t);const s=Cr(i,n.operador,n.valor);return{id:n.id,nome:n.nome,status:s?"conforme":"nao_conforme",valorInformado:i,valorEsperado:n.valor,unidade:r.unidade,referencia:n.referencia}}evaluateConditional(n,o,t){for(const r of n.condicoes??[]){const i=o[n.parametro];if(r.quando&&Cr(i,r.quando.operador,r.quando.valor)){if(r.resultado)return{id:n.id,nome:n.nome,status:r.resultado,valorInformado:i,referencia:n.referencia,mensagem:r.mensagem};if(r.verificar){const l=o[r.verificar.parametro],s=Cr(l,r.verificar.operador,r.verificar.valor);return{id:n.id,nome:n.nome,status:s?"conforme":"nao_conforme",valorInformado:l,valorEsperado:r.verificar.valor,referencia:n.referencia}}}}return{id:n.id,nome:n.nome,status:"nao_avaliado",referencia:n.referencia}}}function Nn(e,n){if(typeof e!="string"||e.trim()==="")throw new TypeError(`${n} deve ser um texto não vazio.`);return e.trim()}function Rt(){return typeof globalThis.crypto?.randomUUID=="function"?globalThis.crypto.randomUUID():`${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`}function Fn(e=new Date,n="data"){const o=e instanceof Date?e:new Date(e);if(Number.isNaN(o.getTime()))throw new TypeError(`${n} deve ser uma data válida.`);return o.toISOString()}function _a(e){return typeof structuredClone=="function"?structuredClone(e):JSON.parse(JSON.stringify(e))}function Ei({id:e=Rt(),elementId:n,data:o,result:t,evaluatedAt:r=new Date}={}){if(o===void 0||t===void 0)throw new TypeError("data e result são obrigatórios.");return{id:Nn(e,"id"),elementId:Nn(n,"elementId"),data:_a(o),result:_a(t),evaluatedAt:Fn(r,"evaluatedAt")}}const _f=["nao_conforme","erro","invalido"],bf=["atencao","manual","nao_avaliado"];function Gs(e){const n=e[0]?.result;return n?.length?n.some(o=>_f.includes(o.status))?"nao_conforme":n.some(o=>bf.includes(o.status))?"nao_avaliado":"conforme":"nao_avaliado"}class yf{constructor({elementRepository:n,environmentRepository:o,evaluationRepository:t,ruleEngine:r=new gf}){this.elementRepository=n,this.environmentRepository=o,this.evaluationRepository=t,this.ruleEngine=r}async evaluateElement({elementId:n,checklist:o,data:t,evaluatedAt:r}){if(!await this.elementRepository.get(n))throw new Error("Elemento não encontrado.");const l=this.ruleEngine.evaluate(o.regras??[],t,o.parametros??{}),s=Ei({elementId:n,data:t,result:l,evaluatedAt:r});return this.evaluationRepository.put(s)}evaluateTransientElement({elementId:n,checklist:o,data:t,evaluatedAt:r}){const i=this.ruleEngine.evaluate(o.regras??[],t,o.parametros??{});return Ei({elementId:n,data:t,result:i,evaluatedAt:r})}async listEvaluations(n){return(await this.evaluationRepository.getByElementId(n)).sort((t,r)=>r.evaluatedAt.localeCompare(t.evaluatedAt))}async getEnvironmentSummary(n){const o=await this.elementRepository.getByEnvironmentId(n);return this.#e(o)}async getProjectSummary(n){if(!this.environmentRepository)throw new Error("Repositório de ambientes não configurado.");const o=await this.environmentRepository.getByProjectId(n),t=await Promise.all(o.map(r=>this.elementRepository.getByEnvironmentId(r.id)));return this.#e(t.flat())}async#e(n){const o=await Promise.all(n.map(async r=>Gs(await this.listEvaluations(r.id)))),t={totalElements:n.length,conforme:0,nao_conforme:0,nao_avaliado:0,pendente:0,score:0,overallStatus:"nao_avaliado"};for(const r of o)t[r]+=1;return t.pendente=t.nao_avaliado,t.score=t.totalElements?Math.round(t.conforme/t.totalElements*100):0,t.nao_conforme>0?t.overallStatus="nao_conforme":t.nao_avaliado===0&&t.totalElements>0&&(t.overallStatus="conforme"),t}}function Ci({id:e=Rt(),environmentId:n,name:o,type:t,rule:r,createdAt:i=new Date,updatedAt:l=i}={}){return{id:Nn(e,"id"),environmentId:Nn(n,"environmentId"),name:Nn(o,"name"),type:Nn(t,"type"),rule:Nn(r,"rule"),createdAt:Fn(i,"createdAt"),updatedAt:Fn(l,"updatedAt")}}function Oi({id:e=Rt(),projectId:n,name:o,createdAt:t=new Date,updatedAt:r=t}={}){return{id:Nn(e,"id"),projectId:Nn(n,"projectId"),name:Nn(o,"name"),createdAt:Fn(t,"createdAt"),updatedAt:Fn(r,"updatedAt")}}function Ii({id:e=Rt(),name:n,description:o="",createdAt:t=new Date,updatedAt:r=t}={}){return{id:Nn(e,"id"),name:Nn(n,"name"),description:typeof o=="string"?o.trim():"",createdAt:Fn(t,"createdAt"),updatedAt:Fn(r,"updatedAt")}}class Af{constructor({projectRepository:n,environmentRepository:o,elementRepository:t}){this.projectRepository=n,this.environmentRepository=o,this.elementRepository=t}async createProject(n){const o=Ii(n);return this.projectRepository.put(o)}listProjects(){return this.projectRepository.getAll()}getProject(n){return this.projectRepository.get(n)}async updateProject(n,{name:o,description:t}){const r=await this.#e(this.projectRepository.get(n),"Projeto");return this.projectRepository.put(Ii({...r,name:o,description:t,updatedAt:new Date}))}async renameProject(n,o){const t=await this.#e(this.projectRepository.get(n),"Projeto");return this.updateProject(n,{name:o,description:t.description})}async createEnvironment(n,o){await this.#e(this.projectRepository.get(n),"Projeto");const t=Oi({...o,projectId:n});return this.environmentRepository.put(t)}listEnvironments(n){return this.environmentRepository.getByProjectId(n)}async renameEnvironment(n,o){const t=await this.#e(this.environmentRepository.get(n),"Ambiente");return this.environmentRepository.put(Oi({...t,name:o,updatedAt:new Date}))}async createElement(n,o){await this.#e(this.environmentRepository.get(n),"Ambiente");const t=Ci({...o,environmentId:n});return this.elementRepository.put(t)}listElements(n){return this.elementRepository.getByEnvironmentId(n)}async updateElement(n,o){const t=await this.#e(this.elementRepository.get(n),"Elemento");return this.elementRepository.put(Ci({...t,...o,id:t.id,environmentId:t.environmentId,createdAt:t.createdAt,updatedAt:Fn(new Date)}))}async#e(n,o){const t=await n;if(!t)throw new Error(`${o} não encontrado.`);return t}}class Nf{constructor({evaluationService:n}){this.evaluationService=n,this.current=null}evaluate({name:n,checklist:o,data:t}){const r={id:Rt(),name:n?.trim()||o.nome,type:o.nome,rule:o.id},i=this.evaluationService.evaluateTransientElement({elementId:r.id,checklist:o,data:t});return this.current={element:r,evaluation:i},this.current}getCurrent(){return this.current}clear(){this.current=null}}const xf=new Set(["checklist","conditional"]);function Lo(e){return e!==null&&typeof e=="object"&&!Array.isArray(e)}function at(e,n,o){(typeof e!="string"||e.trim()==="")&&o.push(`${n} deve ser um texto não vazio.`)}function Ys(e,n,o){hf.has(e)||o.push(`${n} deve ser um operador suportado.`)}function Pi(e,n,o){if(!Lo(e)){o.push(`${n} deve ser um objeto.`);return}Ys(e.operador,`${n}.operador`,o),"valor"in e||o.push(`${n}.valor é obrigatório.`)}function Bf(e,n,o,t){const r=`regras[${n}]`;if(!Lo(e)){t.push(`${r} deve ser um objeto.`);return}if(at(e.id,`${r}.id`,t),at(e.nome,`${r}.nome`,t),at(e.parametro,`${r}.parametro`,t),typeof e.parametro=="string"&&!(e.parametro in o)&&t.push(`${r}.parametro deve existir em parametros.`),e.tipo!=="checklist"){if(e.tipo==="conditional"){if(!Array.isArray(e.condicoes)||e.condicoes.length===0){t.push(`${r}.condicoes deve conter ao menos uma condição.`);return}e.condicoes.forEach((i,l)=>{const s=`${r}.condicoes[${l}]`;if(!Lo(i)){t.push(`${s} deve ser um objeto.`);return}Pi(i.quando,`${s}.quando`,t);const c=typeof i.resultado=="string"&&i.resultado!=="",d="verificar"in i;c===d&&t.push(`${s} deve informar exatamente resultado ou verificar.`),d&&(Pi(i.verificar,`${s}.verificar`,t),(typeof i.verificar?.parametro!="string"||!(i.verificar.parametro in o))&&t.push(`${s}.verificar.parametro deve existir em parametros.`))});return}e.tipo!==void 0&&!xf.has(e.tipo)&&t.push(`${r}.tipo não é suportado.`),Ys(e.operador,`${r}.operador`,t),"valor"in e||t.push(`${r}.valor é obrigatório.`)}}function Rf(e){const n=[];return Lo(e)?(at(e.id,"id",n),at(e.nome,"nome",n),Lo(e.parametros)||n.push("parametros deve ser um objeto."),Array.isArray(e.regras)||n.push("regras deve ser uma lista."),Lo(e.parametros)&&Array.isArray(e.regras)&&e.regras.forEach((o,t)=>Bf(o,t,e.parametros,n)),{valid:n.length===0,errors:n}):{valid:!1,errors:["O conjunto de regras deve ser um objeto."]}}function ba(e){const n=Rf(e);if(!n.valid)throw new TypeError(`Conjunto de regras inválido: ${n.errors.join(" ")}`);return e}function Tf(e,{createdAt:n=new Date,updatedAt:o=n}={}){return ba(e),{..._a(e),source:"user",createdAt:Fn(n,"createdAt"),updatedAt:Fn(o,"updatedAt")}}function Sf(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var en={},It={},oo={},ki;function Tt(){if(ki)return oo;ki=1;function e(l){return typeof l>"u"||l===null}function n(l){return typeof l=="object"&&l!==null}function o(l){return Array.isArray(l)?l:e(l)?[]:[l]}function t(l,s){if(s){const c=Object.keys(s);for(let d=0,u=c.length;d<u;d+=1){const m=c[d];l[m]=s[m]}}return l}function r(l,s){let c="";for(let d=0;d<s;d+=1)c+=l;return c}function i(l){return l===0&&Number.NEGATIVE_INFINITY===1/l}return oo.isNothing=e,oo.isObject=n,oo.toArray=o,oo.repeat=r,oo.isNegativeZero=i,oo.extend=t,oo}var Or,Li;function St(){if(Li)return Or;Li=1;function e(o,t){let r="";const i=o.reason||"(unknown reason)";return o.mark?(o.mark.name&&(r+='in "'+o.mark.name+'" '),r+="("+(o.mark.line+1)+":"+(o.mark.column+1)+")",!t&&o.mark.snippet&&(r+=`

`+o.mark.snippet),i+" "+r):i}function n(o,t){Error.call(this),this.name="YAMLException",this.reason=o,this.mark=t,this.message=e(this,!1),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack||""}return n.prototype=Object.create(Error.prototype),n.prototype.constructor=n,n.prototype.toString=function(t){return this.name+": "+e(this,t)},Or=n,Or}var Ir,ji;function wf(){if(ji)return Ir;ji=1;const e=Tt();function n(r,i,l,s,c){let d="",u="";const m=Math.floor(c/2)-1;return s-i>m&&(d=" ... ",i=s-m+d.length),l-s>m&&(u=" ...",l=s+m-u.length),{str:d+r.slice(i,l).replace(/\t/g,"→")+u,pos:s-i+d.length}}function o(r,i){return e.repeat(" ",i-r.length)+r}function t(r,i){if(i=Object.create(i||null),!r.buffer)return null;i.maxLength||(i.maxLength=79),typeof i.indent!="number"&&(i.indent=1),typeof i.linesBefore!="number"&&(i.linesBefore=3),typeof i.linesAfter!="number"&&(i.linesAfter=2);const l=/\r?\n|\r|\0/g,s=[0],c=[];let d,u=-1;for(;d=l.exec(r.buffer);)c.push(d.index),s.push(d.index+d[0].length),r.position<=d.index&&u<0&&(u=s.length-2);u<0&&(u=s.length-1);let m="";const p=Math.min(r.line+i.linesAfter,c.length).toString().length,g=i.maxLength-(i.indent+p+3);for(let N=1;N<=i.linesBefore&&!(u-N<0);N++){const w=n(r.buffer,s[u-N],c[u-N],r.position-(s[u]-s[u-N]),g);m=e.repeat(" ",i.indent)+o((r.line-N+1).toString(),p)+" | "+w.str+`
`+m}const T=n(r.buffer,s[u],c[u],r.position,g);m+=e.repeat(" ",i.indent)+o((r.line+1).toString(),p)+" | "+T.str+`
`,m+=e.repeat("-",i.indent+p+3+T.pos)+`^
`;for(let N=1;N<=i.linesAfter&&!(u+N>=c.length);N++){const w=n(r.buffer,s[u+N],c[u+N],r.position-(s[u]-s[u+N]),g);m+=e.repeat(" ",i.indent)+o((r.line+N+1).toString(),p)+" | "+w.str+`
`}return m.replace(/\n$/,"")}return Ir=t,Ir}var Pr,Di;function fn(){if(Di)return Pr;Di=1;const e=St(),n=["kind","multi","resolve","construct","instanceOf","predicate","represent","representName","defaultStyle","styleAliases"],o=["scalar","sequence","mapping"];function t(i){const l={};return i!==null&&Object.keys(i).forEach(function(s){i[s].forEach(function(c){l[String(c)]=s})}),l}function r(i,l){if(l=l||{},Object.keys(l).forEach(function(s){if(n.indexOf(s)===-1)throw new e('Unknown option "'+s+'" is met in definition of "'+i+'" YAML type.')}),this.options=l,this.tag=i,this.kind=l.kind||null,this.resolve=l.resolve||function(){return!0},this.construct=l.construct||function(s){return s},this.instanceOf=l.instanceOf||null,this.predicate=l.predicate||null,this.represent=l.represent||null,this.representName=l.representName||null,this.defaultStyle=l.defaultStyle||null,this.multi=l.multi||!1,this.styleAliases=t(l.styleAliases||null),o.indexOf(this.kind)===-1)throw new e('Unknown kind "'+this.kind+'" is specified for "'+i+'" YAML type.')}return Pr=r,Pr}var kr,qi;function Ws(){if(qi)return kr;qi=1;const e=St(),n=fn();function o(i,l){const s=[];return i[l].forEach(function(c){let d=s.length;s.forEach(function(u,m){u.tag===c.tag&&u.kind===c.kind&&u.multi===c.multi&&(d=m)}),s[d]=c}),s}function t(){const i={scalar:{},sequence:{},mapping:{},fallback:{},multi:{scalar:[],sequence:[],mapping:[],fallback:[]}};function l(s){s.multi?(i.multi[s.kind].push(s),i.multi.fallback.push(s)):i[s.kind][s.tag]=i.fallback[s.tag]=s}for(let s=0,c=arguments.length;s<c;s+=1)arguments[s].forEach(l);return i}function r(i){return this.extend(i)}return r.prototype.extend=function(l){let s=[],c=[];if(l instanceof n)c.push(l);else if(Array.isArray(l))c=c.concat(l);else if(l&&(Array.isArray(l.implicit)||Array.isArray(l.explicit)))l.implicit&&(s=s.concat(l.implicit)),l.explicit&&(c=c.concat(l.explicit));else throw new e("Schema.extend argument should be a Type, [ Type ], or a schema definition ({ implicit: [...], explicit: [...] })");s.forEach(function(u){if(!(u instanceof n))throw new e("Specified list of YAML types (or a single Type object) contains a non-Type object.");if(u.loadKind&&u.loadKind!=="scalar")throw new e("There is a non-scalar type in the implicit list of a schema. Implicit resolving of such types is not supported.");if(u.multi)throw new e("There is a multi type in the implicit list of a schema. Multi tags can only be listed as explicit.")}),c.forEach(function(u){if(!(u instanceof n))throw new e("Specified list of YAML types (or a single Type object) contains a non-Type object.")});const d=Object.create(r.prototype);return d.implicit=(this.implicit||[]).concat(s),d.explicit=(this.explicit||[]).concat(c),d.compiledImplicit=o(d,"implicit"),d.compiledExplicit=o(d,"explicit"),d.compiledTypeMap=t(d.compiledImplicit,d.compiledExplicit),d},kr=r,kr}var Lr,Mi;function Js(){if(Mi)return Lr;Mi=1;const e=fn();return Lr=new e("tag:yaml.org,2002:str",{kind:"scalar",construct:function(n){return n!==null?n:""}}),Lr}var jr,$i;function Qs(){if($i)return jr;$i=1;const e=fn();return jr=new e("tag:yaml.org,2002:seq",{kind:"sequence",construct:function(n){return n!==null?n:[]}}),jr}var Dr,Fi;function Xs(){if(Fi)return Dr;Fi=1;const e=fn();return Dr=new e("tag:yaml.org,2002:map",{kind:"mapping",construct:function(n){return n!==null?n:{}}}),Dr}var qr,Vi;function Zs(){if(Vi)return qr;Vi=1;const e=Ws();return qr=new e({explicit:[Js(),Qs(),Xs()]}),qr}var Mr,zi;function ec(){if(zi)return Mr;zi=1;const e=fn();function n(r){if(r===null)return!0;const i=r.length;return i===1&&r==="~"||i===4&&(r==="null"||r==="Null"||r==="NULL")}function o(){return null}function t(r){return r===null}return Mr=new e("tag:yaml.org,2002:null",{kind:"scalar",resolve:n,construct:o,predicate:t,represent:{canonical:function(){return"~"},lowercase:function(){return"null"},uppercase:function(){return"NULL"},camelcase:function(){return"Null"},empty:function(){return""}},defaultStyle:"lowercase"}),Mr}var $r,Ui;function nc(){if(Ui)return $r;Ui=1;const e=fn();function n(r){if(r===null)return!1;const i=r.length;return i===4&&(r==="true"||r==="True"||r==="TRUE")||i===5&&(r==="false"||r==="False"||r==="FALSE")}function o(r){return r==="true"||r==="True"||r==="TRUE"}function t(r){return Object.prototype.toString.call(r)==="[object Boolean]"}return $r=new e("tag:yaml.org,2002:bool",{kind:"scalar",resolve:n,construct:o,predicate:t,represent:{lowercase:function(r){return r?"true":"false"},uppercase:function(r){return r?"TRUE":"FALSE"},camelcase:function(r){return r?"True":"False"}},defaultStyle:"lowercase"}),$r}var Fr,Hi;function oc(){if(Hi)return Fr;Hi=1;const e=Tt(),n=fn();function o(d){return d>=48&&d<=57||d>=65&&d<=70||d>=97&&d<=102}function t(d){return d>=48&&d<=55}function r(d){return d>=48&&d<=57}function i(d){if(d===null)return!1;const u=d.length;let m=0,p=!1;if(!u)return!1;let g=d[m];if((g==="-"||g==="+")&&(g=d[++m]),g==="0"){if(m+1===u)return!0;if(g=d[++m],g==="b"){for(m++;m<u;m++){if(g=d[m],g!=="0"&&g!=="1")return!1;p=!0}return p&&isFinite(l(d))}if(g==="x"){for(m++;m<u;m++){if(!o(d.charCodeAt(m)))return!1;p=!0}return p&&isFinite(l(d))}if(g==="o"){for(m++;m<u;m++){if(!t(d.charCodeAt(m)))return!1;p=!0}return p&&isFinite(l(d))}}for(;m<u;m++){if(!r(d.charCodeAt(m)))return!1;p=!0}return p?isFinite(l(d)):!1}function l(d){let u=d,m=1,p=u[0];if((p==="-"||p==="+")&&(p==="-"&&(m=-1),u=u.slice(1),p=u[0]),u==="0")return 0;if(p==="0"){if(u[1]==="b")return m*parseInt(u.slice(2),2);if(u[1]==="x")return m*parseInt(u.slice(2),16);if(u[1]==="o")return m*parseInt(u.slice(2),8)}return m*parseInt(u,10)}function s(d){return l(d)}function c(d){return Object.prototype.toString.call(d)==="[object Number]"&&d%1===0&&!e.isNegativeZero(d)}return Fr=new n("tag:yaml.org,2002:int",{kind:"scalar",resolve:i,construct:s,predicate:c,represent:{binary:function(d){return d>=0?"0b"+d.toString(2):"-0b"+d.toString(2).slice(1)},octal:function(d){return d>=0?"0o"+d.toString(8):"-0o"+d.toString(8).slice(1)},decimal:function(d){return d.toString(10)},hexadecimal:function(d){return d>=0?"0x"+d.toString(16).toUpperCase():"-0x"+d.toString(16).toUpperCase().slice(1)}},defaultStyle:"decimal",styleAliases:{binary:[2,"bin"],octal:[8,"oct"],decimal:[10,"dec"],hexadecimal:[16,"hex"]}}),Fr}var Vr,Ki;function tc(){if(Ki)return Vr;Ki=1;const e=Tt(),n=fn(),o=new RegExp("^(?:[-+]?(?:[0-9]+)(?:\\.[0-9]*)?(?:[eE][-+]?[0-9]+)?|\\.[0-9]+(?:[eE][-+]?[0-9]+)?|[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$"),t=new RegExp("^(?:[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$");function r(d){return d===null||!o.test(d)?!1:isFinite(parseFloat(d,10))?!0:t.test(d)}function i(d){let u=d.toLowerCase();const m=u[0]==="-"?-1:1;return"+-".indexOf(u[0])>=0&&(u=u.slice(1)),u===".inf"?m===1?Number.POSITIVE_INFINITY:Number.NEGATIVE_INFINITY:u===".nan"?NaN:m*parseFloat(u,10)}const l=/^[-+]?[0-9]+e/;function s(d,u){if(isNaN(d))switch(u){case"lowercase":return".nan";case"uppercase":return".NAN";case"camelcase":return".NaN"}else if(Number.POSITIVE_INFINITY===d)switch(u){case"lowercase":return".inf";case"uppercase":return".INF";case"camelcase":return".Inf"}else if(Number.NEGATIVE_INFINITY===d)switch(u){case"lowercase":return"-.inf";case"uppercase":return"-.INF";case"camelcase":return"-.Inf"}else if(e.isNegativeZero(d))return"-0.0";const m=d.toString(10);return l.test(m)?m.replace("e",".e"):m}function c(d){return Object.prototype.toString.call(d)==="[object Number]"&&(d%1!==0||e.isNegativeZero(d))}return Vr=new n("tag:yaml.org,2002:float",{kind:"scalar",resolve:r,construct:i,predicate:c,represent:s,defaultStyle:"lowercase"}),Vr}var zr,Gi;function rc(){return Gi||(Gi=1,zr=Zs().extend({implicit:[ec(),nc(),oc(),tc()]})),zr}var Ur,Yi;function ac(){return Yi||(Yi=1,Ur=rc()),Ur}var Hr,Wi;function ic(){if(Wi)return Hr;Wi=1;const e=fn(),n=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9])-([0-9][0-9])$"),o=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9]?)-([0-9][0-9]?)(?:[Tt]|[ \\t]+)([0-9][0-9]?):([0-9][0-9]):([0-9][0-9])(?:\\.([0-9]*))?(?:[ \\t]*(Z|([-+])([0-9][0-9]?)(?::([0-9][0-9]))?))?$");function t(l){return l===null?!1:n.exec(l)!==null||o.exec(l)!==null}function r(l){let s=0,c=null,d=n.exec(l);if(d===null&&(d=o.exec(l)),d===null)throw new Error("Date resolve error");const u=+d[1],m=+d[2]-1,p=+d[3];if(!d[4])return new Date(Date.UTC(u,m,p));const g=+d[4],T=+d[5],N=+d[6];if(d[7]){for(s=d[7].slice(0,3);s.length<3;)s+="0";s=+s}if(d[9]){const Q=+d[10],M=+(d[11]||0);c=(Q*60+M)*6e4,d[9]==="-"&&(c=-c)}const w=new Date(Date.UTC(u,m,p,g,T,N,s));return c&&w.setTime(w.getTime()-c),w}function i(l){return l.toISOString()}return Hr=new e("tag:yaml.org,2002:timestamp",{kind:"scalar",resolve:t,construct:r,instanceOf:Date,represent:i}),Hr}var Kr,Ji;function lc(){if(Ji)return Kr;Ji=1;const e=fn();function n(o){return o==="<<"||o===null}return Kr=new e("tag:yaml.org,2002:merge",{kind:"scalar",resolve:n}),Kr}var Gr,Qi;function sc(){if(Qi)return Gr;Qi=1;const e=fn(),n=`ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=
\r`;function o(l){if(l===null)return!1;let s=0;const c=l.length,d=n;for(let u=0;u<c;u++){const m=d.indexOf(l.charAt(u));if(!(m>64)){if(m<0)return!1;s+=6}}return s%8===0}function t(l){const s=l.replace(/[\r\n=]/g,""),c=s.length,d=n;let u=0;const m=[];for(let g=0;g<c;g++)g%4===0&&g&&(m.push(u>>16&255),m.push(u>>8&255),m.push(u&255)),u=u<<6|d.indexOf(s.charAt(g));const p=c%4*6;return p===0?(m.push(u>>16&255),m.push(u>>8&255),m.push(u&255)):p===18?(m.push(u>>10&255),m.push(u>>2&255)):p===12&&m.push(u>>4&255),new Uint8Array(m)}function r(l){let s="",c=0;const d=l.length,u=n;for(let p=0;p<d;p++)p%3===0&&p&&(s+=u[c>>18&63],s+=u[c>>12&63],s+=u[c>>6&63],s+=u[c&63]),c=(c<<8)+l[p];const m=d%3;return m===0?(s+=u[c>>18&63],s+=u[c>>12&63],s+=u[c>>6&63],s+=u[c&63]):m===2?(s+=u[c>>10&63],s+=u[c>>4&63],s+=u[c<<2&63],s+=u[64]):m===1&&(s+=u[c>>2&63],s+=u[c<<4&63],s+=u[64],s+=u[64]),s}function i(l){return Object.prototype.toString.call(l)==="[object Uint8Array]"}return Gr=new e("tag:yaml.org,2002:binary",{kind:"scalar",resolve:o,construct:t,predicate:i,represent:r}),Gr}var Yr,Xi;function cc(){if(Xi)return Yr;Xi=1;const e=fn(),n=Object.prototype.hasOwnProperty,o=Object.prototype.toString;function t(i){if(i===null)return!0;const l={},s=i;for(let c=0,d=s.length;c<d;c+=1){const u=s[c];let m=!1;if(o.call(u)!=="[object Object]")return!1;let p;for(p in u)if(n.call(u,p))if(!m)m=!0;else return!1;if(!m||n.call(l,p))return!1;Object.defineProperty(l,p,{value:!0})}return!0}function r(i){return i!==null?i:[]}return Yr=new e("tag:yaml.org,2002:omap",{kind:"sequence",resolve:t,construct:r}),Yr}var Wr,Zi;function uc(){if(Zi)return Wr;Zi=1;const e=fn(),n=Object.prototype.toString;function o(r){if(r===null)return!0;const i=r,l=new Array(i.length);for(let s=0,c=i.length;s<c;s+=1){const d=i[s];if(n.call(d)!=="[object Object]")return!1;const u=Object.keys(d);if(u.length!==1)return!1;l[s]=[u[0],d[u[0]]]}return!0}function t(r){if(r===null)return[];const i=r,l=new Array(i.length);for(let s=0,c=i.length;s<c;s+=1){const d=i[s],u=Object.keys(d);l[s]=[u[0],d[u[0]]]}return l}return Wr=new e("tag:yaml.org,2002:pairs",{kind:"sequence",resolve:o,construct:t}),Wr}var Jr,el;function dc(){if(el)return Jr;el=1;const e=fn(),n=Object.prototype.hasOwnProperty;function o(r){if(r===null)return!0;const i=r;for(const l in i)if(n.call(i,l)&&i[l]!==null)return!1;return!0}function t(r){return r!==null?r:{}}return Jr=new e("tag:yaml.org,2002:set",{kind:"mapping",resolve:o,construct:t}),Jr}var Qr,nl;function Ma(){return nl||(nl=1,Qr=ac().extend({implicit:[ic(),lc()],explicit:[sc(),cc(),uc(),dc()]})),Qr}var ol;function Ef(){if(ol)return It;ol=1;const e=Tt(),n=St(),o=wf(),t=Ma(),r=Object.prototype.hasOwnProperty,i=1,l=2,s=3,c=4,d=1,u=2,m=3,p=/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F-\x84\x86-\x9F\uFFFE\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/,g=/[\x85\u2028\u2029]/,T=/[,\[\]{}]/,N=/^(?:!|!!|![0-9A-Za-z-]+!)$/,w=/^(?:!|[^,\[\]{}])(?:%[0-9a-f]{2}|[0-9a-z\-#;/?:@&=+$,_.!~*'()\[\]])*$/i;function Q(a){return Object.prototype.toString.call(a)}function M(a){return a===10||a===13}function K(a){return a===9||a===32}function C(a){return a===9||a===32||a===10||a===13}function U(a){return a===44||a===91||a===93||a===123||a===125}function re(a){if(a>=48&&a<=57)return a-48;const _=a|32;return _>=97&&_<=102?_-97+10:-1}function be(a){return a===120?2:a===117?4:a===85?8:0}function Se(a){return a>=48&&a<=57?a-48:-1}function me(a){switch(a){case 48:return"\0";case 97:return"\x07";case 98:return"\b";case 116:return"	";case 9:return"	";case 110:return`
`;case 118:return"\v";case 102:return"\f";case 114:return"\r";case 101:return"\x1B";case 32:return" ";case 34:return'"';case 47:return"/";case 92:return"\\";case 78:return"";case 95:return" ";case 76:return"\u2028";case 80:return"\u2029";default:return""}}function W(a){return a<=65535?String.fromCharCode(a):String.fromCharCode((a-65536>>10)+55296,(a-65536&1023)+56320)}function D(a,_,B){_==="__proto__"?Object.defineProperty(a,_,{configurable:!0,enumerable:!0,writable:!0,value:B}):a[_]=B}const R=new Array(256),Z=new Array(256);for(let a=0;a<256;a++)R[a]=me(a)?1:0,Z[a]=me(a);function te(a,_){this.input=a,this.filename=_.filename||null,this.schema=_.schema||t,this.onWarning=_.onWarning||null,this.legacy=_.legacy||!1,this.json=_.json||!1,this.listener=_.listener||null,this.maxDepth=typeof _.maxDepth=="number"?_.maxDepth:100,this.maxTotalMergeKeys=typeof _.maxTotalMergeKeys=="number"?_.maxTotalMergeKeys:1e4,this.implicitTypes=this.schema.compiledImplicit,this.typeMap=this.schema.compiledTypeMap,this.length=a.length,this.position=0,this.line=0,this.lineStart=0,this.lineIndent=0,this.depth=0,this.totalMergeKeys=0,this.firstTabInLine=-1,this.documents=[],this.anchorMapTransactions=[]}function Ke(a,_){const B={name:a.filename,buffer:a.input.slice(0,-1),position:a.position,line:a.line,column:a.position-a.lineStart};return B.snippet=o(B),new n(_,B)}function J(a,_){throw Ke(a,_)}function Re(a,_){a.onWarning&&a.onWarning.call(null,Ke(a,_))}function Ne(a,_,B){const E=a.anchorMapTransactions;if(E.length!==0){const x=E[E.length-1];r.call(x,_)||(x[_]={existed:r.call(a.anchorMap,_),value:a.anchorMap[_]})}a.anchorMap[_]=B}function vn(a){a.anchorMapTransactions.push(Object.create(null))}function Ze(a){const _=a.anchorMapTransactions.pop(),B=a.anchorMapTransactions;if(B.length===0)return;const E=B[B.length-1],x=Object.keys(_);for(let F=0,f=x.length;F<f;F+=1){const y=x[F];r.call(E,y)||(E[y]=_[y])}}function mn(a){const _=a.anchorMapTransactions.pop(),B=Object.keys(_);for(let E=B.length-1;E>=0;E-=1){const x=_[B[E]];x.existed?a.anchorMap[B[E]]=x.value:delete a.anchorMap[B[E]]}}function Ge(a){return{position:a.position,line:a.line,lineStart:a.lineStart,lineIndent:a.lineIndent,firstTabInLine:a.firstTabInLine,tag:a.tag,anchor:a.anchor,kind:a.kind,result:a.result}}function gn(a,_){a.position=_.position,a.line=_.line,a.lineStart=_.lineStart,a.lineIndent=_.lineIndent,a.firstTabInLine=_.firstTabInLine,a.tag=_.tag,a.anchor=_.anchor,a.kind=_.kind,a.result=_.result}const Tn={YAML:function(_,B,E){_.version!==null&&J(_,"duplication of %YAML directive"),E.length!==1&&J(_,"YAML directive accepts exactly one argument");const x=/^([0-9]+)\.([0-9]+)$/.exec(E[0]);x===null&&J(_,"ill-formed argument of the YAML directive");const F=parseInt(x[1],10),f=parseInt(x[2],10);F!==1&&J(_,"unacceptable YAML version of the document"),_.version=E[0],_.checkLineBreaks=f<2,f!==1&&f!==2&&Re(_,"unsupported YAML version of the document")},TAG:function(_,B,E){let x;E.length!==2&&J(_,"TAG directive accepts exactly two arguments");const F=E[0];x=E[1],N.test(F)||J(_,"ill-formed tag handle (first argument) of the TAG directive"),r.call(_.tagMap,F)&&J(_,'there is a previously declared suffix for "'+F+'" tag handle'),w.test(x)||J(_,"ill-formed tag prefix (second argument) of the TAG directive");try{x=decodeURIComponent(x)}catch{J(_,"tag prefix is malformed: "+x)}_.tagMap[F]=x}};function Ue(a,_,B,E){if(_<B){const x=a.input.slice(_,B);if(E)for(let F=0,f=x.length;F<f;F+=1){const y=x.charCodeAt(F);y===9||y>=32&&y<=1114111||J(a,"expected valid JSON character")}else p.test(x)&&J(a,"the stream contains non-printable characters");a.result+=x}}function He(a,_,B,E){e.isObject(B)||J(a,"cannot merge mappings; the provided source object is unacceptable");const x=Object.keys(B);for(let F=0,f=x.length;F<f;F+=1){const y=x[F];a.maxTotalMergeKeys!==-1&&++a.totalMergeKeys>a.maxTotalMergeKeys&&J(a,"merge keys exceeded maxTotalMergeKeys ("+a.maxTotalMergeKeys+")"),r.call(_,y)||(D(_,y,B[y]),E[y]=!0)}}function O(a,_,B,E,x,F,f,y,j){if(Array.isArray(x)){x=Array.prototype.slice.call(x);for(let P=0,k=x.length;P<k;P+=1)Array.isArray(x[P])&&J(a,"nested arrays are not supported inside keys"),typeof x=="object"&&Q(x[P])==="[object Object]"&&(x[P]="[object Object]")}if(typeof x=="object"&&Q(x)==="[object Object]"&&(x="[object Object]"),x=String(x),_===null&&(_={}),E==="tag:yaml.org,2002:merge")if(Array.isArray(F))for(let P=0,k=F.length;P<k;P+=1)He(a,_,F[P],B);else He(a,_,F,B);else!a.json&&!r.call(B,x)&&r.call(_,x)&&(a.line=f||a.line,a.lineStart=y||a.lineStart,a.position=j||a.position,J(a,"duplicated mapping key")),D(_,x,F),delete B[x];return _}function ie(a){const _=a.input.charCodeAt(a.position);_===10?a.position++:_===13?(a.position++,a.input.charCodeAt(a.position)===10&&a.position++):J(a,"a line break is expected"),a.line+=1,a.lineStart=a.position,a.firstTabInLine=-1}function H(a,_,B){let E=0,x=a.input.charCodeAt(a.position);for(;x!==0;){for(;K(x);)x===9&&a.firstTabInLine===-1&&(a.firstTabInLine=a.position),x=a.input.charCodeAt(++a.position);if(_&&x===35)do x=a.input.charCodeAt(++a.position);while(x!==10&&x!==13&&x!==0);if(M(x))for(ie(a),x=a.input.charCodeAt(a.position),E++,a.lineIndent=0;x===32;)a.lineIndent++,x=a.input.charCodeAt(++a.position);else break}return B!==-1&&E!==0&&a.lineIndent<B&&Re(a,"deficient indentation"),E}function ce(a){let _=a.position,B=a.input.charCodeAt(_);return!!((B===45||B===46)&&B===a.input.charCodeAt(_+1)&&B===a.input.charCodeAt(_+2)&&(_+=3,B=a.input.charCodeAt(_),B===0||C(B)))}function ye(a,_){_===1?a.result+=" ":_>1&&(a.result+=e.repeat(`
`,_-1))}function h(a,_,B){let E,x,F,f,y,j;const P=a.kind,k=a.result;let V=a.input.charCodeAt(a.position);if(C(V)||U(V)||V===35||V===38||V===42||V===33||V===124||V===62||V===39||V===34||V===37||V===64||V===96)return!1;if(V===63||V===45){const $=a.input.charCodeAt(a.position+1);if(C($)||B&&U($))return!1}for(a.kind="scalar",a.result="",E=x=a.position,F=!1;V!==0;){if(V===58){const $=a.input.charCodeAt(a.position+1);if(C($)||B&&U($))break}else if(V===35){const $=a.input.charCodeAt(a.position-1);if(C($))break}else{if(a.position===a.lineStart&&ce(a)||B&&U(V))break;if(M(V))if(f=a.line,y=a.lineStart,j=a.lineIndent,H(a,!1,-1),a.lineIndent>=_){F=!0,V=a.input.charCodeAt(a.position);continue}else{a.position=x,a.line=f,a.lineStart=y,a.lineIndent=j;break}}F&&(Ue(a,E,x,!1),ye(a,a.line-f),E=x=a.position,F=!1),K(V)||(x=a.position+1),V=a.input.charCodeAt(++a.position)}return Ue(a,E,x,!1),a.result?!0:(a.kind=P,a.result=k,!1)}function v(a,_){let B,E,x=a.input.charCodeAt(a.position);if(x!==39)return!1;for(a.kind="scalar",a.result="",a.position++,B=E=a.position;(x=a.input.charCodeAt(a.position))!==0;)if(x===39)if(Ue(a,B,a.position,!0),x=a.input.charCodeAt(++a.position),x===39)B=a.position,a.position++,E=a.position;else return!0;else M(x)?(Ue(a,B,E,!0),ye(a,H(a,!1,_)),B=E=a.position):a.position===a.lineStart&&ce(a)?J(a,"unexpected end of the document within a single quoted scalar"):(a.position++,K(x)||(E=a.position));J(a,"unexpected end of the stream within a single quoted scalar")}function b(a,_){let B,E,x,F=a.input.charCodeAt(a.position);if(F!==34)return!1;for(a.kind="scalar",a.result="",a.position++,B=E=a.position;(F=a.input.charCodeAt(a.position))!==0;){if(F===34)return Ue(a,B,a.position,!0),a.position++,!0;if(F===92){if(Ue(a,B,a.position,!0),F=a.input.charCodeAt(++a.position),M(F))H(a,!1,_);else if(F<256&&R[F])a.result+=Z[F],a.position++;else if((x=be(F))>0){let f=x,y=0;for(;f>0;f--)F=a.input.charCodeAt(++a.position),(x=re(F))>=0?y=(y<<4)+x:J(a,"expected hexadecimal character");a.result+=W(y),a.position++}else J(a,"unknown escape sequence");B=E=a.position}else M(F)?(Ue(a,B,E,!0),ye(a,H(a,!1,_)),B=E=a.position):a.position===a.lineStart&&ce(a)?J(a,"unexpected end of the document within a double quoted scalar"):(a.position++,K(F)||(E=a.position))}J(a,"unexpected end of the stream within a double quoted scalar")}function I(a,_){let B=!0,E,x,F;const f=a.tag;let y;const j=a.anchor;let P,k,V,$;const se=Object.create(null);let le,fe,he,we=a.input.charCodeAt(a.position);if(we===91)P=93,$=!1,y=[];else if(we===123)P=125,$=!0,y={};else return!1;for(a.anchor!==null&&Ne(a,a.anchor,y),we=a.input.charCodeAt(++a.position);we!==0;){if(H(a,!0,_),we=a.input.charCodeAt(a.position),we===P)return a.position++,a.tag=f,a.anchor=j,a.kind=$?"mapping":"sequence",a.result=y,!0;if(B?we===44&&J(a,"expected the node content, but found ','"):J(a,"missed comma between flow collection entries"),fe=le=he=null,k=V=!1,we===63){const $e=a.input.charCodeAt(a.position+1);C($e)&&(k=V=!0,a.position++,H(a,!0,_))}E=a.line,x=a.lineStart,F=a.position,ne(a,_,i,!1,!0),fe=a.tag,le=a.result,H(a,!0,_),we=a.input.charCodeAt(a.position),(V||a.line===E)&&we===58&&(k=!0,we=a.input.charCodeAt(++a.position),H(a,!0,_),ne(a,_,i,!1,!0),he=a.result),$?O(a,y,se,fe,le,he,E,x,F):k?y.push(O(a,null,se,fe,le,he,E,x,F)):y.push(le),H(a,!0,_),we=a.input.charCodeAt(a.position),we===44?(B=!0,we=a.input.charCodeAt(++a.position)):B=!1}J(a,"unexpected end of the stream within a flow collection")}function L(a,_){let B,E=d,x=!1,F=!1,f=_,y=0,j=!1,P,k=a.input.charCodeAt(a.position);if(k===124)B=!1;else if(k===62)B=!0;else return!1;for(a.kind="scalar",a.result="";k!==0;)if(k=a.input.charCodeAt(++a.position),k===43||k===45)d===E?E=k===43?m:u:J(a,"repeat of a chomping mode identifier");else if((P=Se(k))>=0)P===0?J(a,"bad explicit indentation width of a block scalar; it cannot be less than one"):F?J(a,"repeat of an indentation width identifier"):(f=_+P-1,F=!0);else break;if(K(k)){do k=a.input.charCodeAt(++a.position);while(K(k));if(k===35)do k=a.input.charCodeAt(++a.position);while(!M(k)&&k!==0)}for(;k!==0;){for(ie(a),a.lineIndent=0,k=a.input.charCodeAt(a.position);(!F||a.lineIndent<f)&&k===32;)a.lineIndent++,k=a.input.charCodeAt(++a.position);if(!F&&a.lineIndent>f&&(f=a.lineIndent),M(k)){y++;continue}if(!F&&f===0&&J(a,"missing indentation for block scalar"),a.lineIndent<f){E===m?a.result+=e.repeat(`
`,x?1+y:y):E===d&&x&&(a.result+=`
`);break}B?K(k)?(j=!0,a.result+=e.repeat(`
`,x?1+y:y)):j?(j=!1,a.result+=e.repeat(`
`,y+1)):y===0?x&&(a.result+=" "):a.result+=e.repeat(`
`,y):a.result+=e.repeat(`
`,x?1+y:y),x=!0,F=!0,y=0;const V=a.position;for(;!M(k)&&k!==0;)k=a.input.charCodeAt(++a.position);Ue(a,V,a.position,!1)}return!0}function S(a,_){const B=a.tag,E=a.anchor,x=[];let F=!1;if(a.firstTabInLine!==-1)return!1;a.anchor!==null&&Ne(a,a.anchor,x);let f=a.input.charCodeAt(a.position);for(;f!==0&&(a.firstTabInLine!==-1&&(a.position=a.firstTabInLine,J(a,"tab characters must not be used in indentation")),f===45);){const y=a.input.charCodeAt(a.position+1);if(!C(y))break;if(F=!0,a.position++,H(a,!0,-1)&&a.lineIndent<=_){x.push(null),f=a.input.charCodeAt(a.position);continue}const j=a.line;if(ne(a,_,s,!1,!0),x.push(a.result),H(a,!0,-1),f=a.input.charCodeAt(a.position),(a.line===j||a.lineIndent>_)&&f!==0)J(a,"bad indentation of a sequence entry");else if(a.lineIndent<_)break}return F?(a.tag=B,a.anchor=E,a.kind="sequence",a.result=x,!0):!1}function ee(a,_,B){let E,x,F,f;const y=a.tag,j=a.anchor,P={},k=Object.create(null);let V=null,$=null,se=null,le=!1,fe=!1;if(a.firstTabInLine!==-1)return!1;a.anchor!==null&&Ne(a,a.anchor,P);let he=a.input.charCodeAt(a.position);for(;he!==0;){!le&&a.firstTabInLine!==-1&&(a.position=a.firstTabInLine,J(a,"tab characters must not be used in indentation"));const we=a.input.charCodeAt(a.position+1),$e=a.line;if((he===63||he===58)&&C(we))he===63?(le&&(O(a,P,k,V,$,null,x,F,f),V=$=se=null),fe=!0,le=!0,E=!0):le?(le=!1,E=!0):J(a,"incomplete explicit mapping pair; a key node is missed; or followed by a non-tabulated empty line"),a.position+=1,he=we;else{if(x=a.line,F=a.lineStart,f=a.position,!ne(a,B,l,!1,!0))break;if(a.line===$e){for(he=a.input.charCodeAt(a.position);K(he);)he=a.input.charCodeAt(++a.position);if(he===58)he=a.input.charCodeAt(++a.position),C(he)||J(a,"a whitespace character is expected after the key-value separator within a block mapping"),le&&(O(a,P,k,V,$,null,x,F,f),V=$=se=null),fe=!0,le=!1,E=!1,V=a.tag,$=a.result;else if(fe)J(a,"can not read an implicit mapping pair; a colon is missed");else return a.tag=y,a.anchor=j,!0}else if(fe)J(a,"can not read a block mapping entry; a multiline key may not be an implicit key");else return a.tag=y,a.anchor=j,!0}if((a.line===$e||a.lineIndent>_)&&(le&&(x=a.line,F=a.lineStart,f=a.position),ne(a,_,c,!0,E)&&(le?$=a.result:se=a.result),le||(O(a,P,k,V,$,se,x,F,f),V=$=se=null),H(a,!0,-1),he=a.input.charCodeAt(a.position)),(a.line===$e||a.lineIndent>_)&&he!==0)J(a,"bad indentation of a mapping entry");else if(a.lineIndent<_)break}return le&&O(a,P,k,V,$,null,x,F,f),fe&&(a.tag=y,a.anchor=j,a.kind="mapping",a.result=P),fe}function X(a){let _=!1,B=!1,E,x,F=a.input.charCodeAt(a.position);if(F!==33)return!1;a.tag!==null&&J(a,"duplication of a tag property"),F=a.input.charCodeAt(++a.position),F===60?(_=!0,F=a.input.charCodeAt(++a.position)):F===33?(B=!0,E="!!",F=a.input.charCodeAt(++a.position)):E="!";let f=a.position;if(_){do F=a.input.charCodeAt(++a.position);while(F!==0&&F!==62);a.position<a.length?(x=a.input.slice(f,a.position),F=a.input.charCodeAt(++a.position)):J(a,"unexpected end of the stream within a verbatim tag")}else{for(;F!==0&&!C(F);)F===33&&(B?J(a,"tag suffix cannot contain exclamation marks"):(E=a.input.slice(f-1,a.position+1),N.test(E)||J(a,"named tag handle cannot contain such characters"),B=!0,f=a.position+1)),F=a.input.charCodeAt(++a.position);x=a.input.slice(f,a.position),T.test(x)&&J(a,"tag suffix cannot contain flow indicator characters")}x&&!w.test(x)&&J(a,"tag name cannot contain such characters: "+x);try{x=decodeURIComponent(x)}catch{J(a,"tag name is malformed: "+x)}return _?a.tag=x:r.call(a.tagMap,E)?a.tag=a.tagMap[E]+x:E==="!"?a.tag="!"+x:E==="!!"?a.tag="tag:yaml.org,2002:"+x:J(a,'undeclared tag handle "'+E+'"'),!0}function Y(a){let _=a.input.charCodeAt(a.position);if(_!==38)return!1;a.anchor!==null&&J(a,"duplication of an anchor property"),_=a.input.charCodeAt(++a.position);const B=a.position;for(;_!==0&&!C(_)&&!U(_);)_=a.input.charCodeAt(++a.position);return a.position===B&&J(a,"name of an anchor node must contain at least one character"),a.anchor=a.input.slice(B,a.position),!0}function q(a){let _=a.input.charCodeAt(a.position);if(_!==42)return!1;_=a.input.charCodeAt(++a.position);const B=a.position;for(;_!==0&&!C(_)&&!U(_);)_=a.input.charCodeAt(++a.position);a.position===B&&J(a,"name of an alias node must contain at least one character");const E=a.input.slice(B,a.position);return r.call(a.anchorMap,E)||J(a,'unidentified alias "'+E+'"'),a.result=a.anchorMap[E],H(a,!0,-1),!0}function pe(a,_,B,E){const x=Ge(a);return vn(a),gn(a,_),a.tag=null,a.anchor=null,a.kind=null,a.result=null,ee(a,B,E)&&a.kind==="mapping"?(Ze(a),!0):(mn(a),gn(a,x),!1)}function ne(a,_,B,E,x){let F,f,y=1,j=!1,P=!1,k=null,V,$,se;a.depth>=a.maxDepth&&J(a,"nesting exceeded maxDepth ("+a.maxDepth+")"),a.depth+=1,a.listener!==null&&a.listener("open",a),a.tag=null,a.anchor=null,a.kind=null,a.result=null;const le=F=f=c===B||s===B;if(E&&H(a,!0,-1)&&(j=!0,a.lineIndent>_?y=1:a.lineIndent===_?y=0:a.lineIndent<_&&(y=-1)),y===1)for(;;){const fe=a.input.charCodeAt(a.position),he=Ge(a);if(j&&(fe===33&&a.tag!==null||fe===38&&a.anchor!==null)||!X(a)&&!Y(a))break;k===null&&(k=he),H(a,!0,-1)?(j=!0,f=le,a.lineIndent>_?y=1:a.lineIndent===_?y=0:a.lineIndent<_&&(y=-1)):f=!1}if(f&&(f=j||x),y===1||c===B)if(i===B||l===B?$=_:$=_+1,se=a.position-a.lineStart,y===1)if(f&&(S(a,se)||ee(a,se,$))||I(a,$))P=!0;else{const fe=a.input.charCodeAt(a.position);k!==null&&le&&!f&&fe!==124&&fe!==62&&pe(a,k,k.position-k.lineStart,$)||F&&L(a,$)||v(a,$)||b(a,$)?P=!0:q(a)?(P=!0,(a.tag!==null||a.anchor!==null)&&J(a,"alias node should not have any properties")):h(a,$,i===B)&&(P=!0,a.tag===null&&(a.tag="?")),a.anchor!==null&&Ne(a,a.anchor,a.result)}else y===0&&(P=f&&S(a,se));if(a.tag===null)a.anchor!==null&&Ne(a,a.anchor,a.result);else if(a.tag==="?"){a.result!==null&&a.kind!=="scalar"&&J(a,'unacceptable node kind for !<?> tag; it should be "scalar", not "'+a.kind+'"');for(let fe=0,he=a.implicitTypes.length;fe<he;fe+=1)if(V=a.implicitTypes[fe],V.resolve(a.result)){a.result=V.construct(a.result),a.tag=V.tag,a.anchor!==null&&Ne(a,a.anchor,a.result);break}}else if(a.tag!=="!"){if(r.call(a.typeMap[a.kind||"fallback"],a.tag))V=a.typeMap[a.kind||"fallback"][a.tag];else{V=null;const fe=a.typeMap.multi[a.kind||"fallback"];for(let he=0,we=fe.length;he<we;he+=1)if(a.tag.slice(0,fe[he].tag.length)===fe[he].tag){V=fe[he];break}}V||J(a,"unknown tag !<"+a.tag+">"),a.result!==null&&V.kind!==a.kind&&J(a,"unacceptable node kind for !<"+a.tag+'> tag; it should be "'+V.kind+'", not "'+a.kind+'"'),V.resolve(a.result,a.tag)?(a.result=V.construct(a.result,a.tag),a.anchor!==null&&Ne(a,a.anchor,a.result)):J(a,"cannot resolve a node with !<"+a.tag+"> explicit tag")}return a.listener!==null&&a.listener("close",a),a.depth-=1,a.tag!==null||a.anchor!==null||P}function de(a){const _=a.position;let B=!1,E;for(a.version=null,a.checkLineBreaks=a.legacy,a.tagMap=Object.create(null),a.anchorMap=Object.create(null);(E=a.input.charCodeAt(a.position))!==0&&(H(a,!0,-1),E=a.input.charCodeAt(a.position),!(a.lineIndent>0||E!==37));){B=!0,E=a.input.charCodeAt(++a.position);let x=a.position;for(;E!==0&&!C(E);)E=a.input.charCodeAt(++a.position);const F=a.input.slice(x,a.position),f=[];for(F.length<1&&J(a,"directive name must not be less than one character in length");E!==0;){for(;K(E);)E=a.input.charCodeAt(++a.position);if(E===35){do E=a.input.charCodeAt(++a.position);while(E!==0&&!M(E));break}if(M(E))break;for(x=a.position;E!==0&&!C(E);)E=a.input.charCodeAt(++a.position);f.push(a.input.slice(x,a.position))}E!==0&&ie(a),r.call(Tn,F)?Tn[F](a,F,f):Re(a,'unknown document directive "'+F+'"')}if(H(a,!0,-1),a.lineIndent===0&&a.input.charCodeAt(a.position)===45&&a.input.charCodeAt(a.position+1)===45&&a.input.charCodeAt(a.position+2)===45?(a.position+=3,H(a,!0,-1)):B&&J(a,"directives end mark is expected"),ne(a,a.lineIndent-1,c,!1,!0),H(a,!0,-1),a.checkLineBreaks&&g.test(a.input.slice(_,a.position))&&Re(a,"non-ASCII line breaks are interpreted as content"),a.documents.push(a.result),a.position===a.lineStart&&ce(a)){a.input.charCodeAt(a.position)===46&&(a.position+=3,H(a,!0,-1));return}a.position<a.length-1&&J(a,"end of the stream or a document separator is expected")}function ge(a,_){a=String(a),_=_||{},a.length!==0&&(a.charCodeAt(a.length-1)!==10&&a.charCodeAt(a.length-1)!==13&&(a+=`
`),a.charCodeAt(0)===65279&&(a=a.slice(1)));const B=new te(a,_),E=a.indexOf("\0");for(E!==-1&&(B.position=E,J(B,"null byte is not allowed in input")),B.input+="\0";B.input.charCodeAt(B.position)===32;)B.lineIndent+=1,B.position+=1;for(;B.position<B.length-1;)de(B);return B.documents}function Te(a,_,B){_!==null&&typeof _=="object"&&typeof B>"u"&&(B=_,_=null);const E=ge(a,B);if(typeof _!="function")return E;for(let x=0,F=E.length;x<F;x+=1)_(E[x])}function Ce(a,_){const B=ge(a,_);if(B.length!==0){if(B.length===1)return B[0];throw new n("expected a single document in the stream, but found more")}}return It.loadAll=Te,It.load=Ce,It}var Xr={},tl;function Cf(){if(tl)return Xr;tl=1;const e=Tt(),n=St(),o=Ma(),t=Object.prototype.toString,r=Object.prototype.hasOwnProperty,i=65279,l=9,s=10,c=13,d=32,u=33,m=34,p=35,g=37,T=38,N=39,w=42,Q=44,M=45,K=58,C=61,U=62,re=63,be=64,Se=91,me=93,W=96,D=123,R=124,Z=125,te={};te[0]="\\0",te[7]="\\a",te[8]="\\b",te[9]="\\t",te[10]="\\n",te[11]="\\v",te[12]="\\f",te[13]="\\r",te[27]="\\e",te[34]='\\"',te[92]="\\\\",te[133]="\\N",te[160]="\\_",te[8232]="\\L",te[8233]="\\P";const Ke=["y","Y","yes","Yes","YES","on","On","ON","n","N","no","No","NO","off","Off","OFF"],J=/^[-+]?[0-9_]+(?::[0-9_]+)+(?:\.[0-9_]*)?$/;function Re(f,y){if(y===null)return{};const j={},P=Object.keys(y);for(let k=0,V=P.length;k<V;k+=1){let $=P[k],se=String(y[$]);$.slice(0,2)==="!!"&&($="tag:yaml.org,2002:"+$.slice(2));const le=f.compiledTypeMap.fallback[$];le&&r.call(le.styleAliases,se)&&(se=le.styleAliases[se]),j[$]=se}return j}function Ne(f){let y,j;const P=f.toString(16).toUpperCase();if(f<=255)y="x",j=2;else if(f<=65535)y="u",j=4;else if(f<=4294967295)y="U",j=8;else throw new n("code point within a string may not be greater than 0xFFFFFFFF");return"\\"+y+e.repeat("0",j-P.length)+P}const vn=1,Ze=2;function mn(f){this.schema=f.schema||o,this.indent=Math.max(1,f.indent||2),this.noArrayIndent=f.noArrayIndent||!1,this.skipInvalid=f.skipInvalid||!1,this.flowLevel=e.isNothing(f.flowLevel)?-1:f.flowLevel,this.styleMap=Re(this.schema,f.styles||null),this.sortKeys=f.sortKeys||!1,this.lineWidth=f.lineWidth||80,this.noRefs=f.noRefs||!1,this.noCompatMode=f.noCompatMode||!1,this.condenseFlow=f.condenseFlow||!1,this.quotingType=f.quotingType==='"'?Ze:vn,this.forceQuotes=f.forceQuotes||!1,this.replacer=typeof f.replacer=="function"?f.replacer:null,this.implicitTypes=this.schema.compiledImplicit,this.explicitTypes=this.schema.compiledExplicit,this.tag=null,this.result="",this.duplicates=[],this.usedDuplicates=null}function Ge(f,y){const j=e.repeat(" ",y);let P=0,k="";const V=f.length;for(;P<V;){let $;const se=f.indexOf(`
`,P);se===-1?($=f.slice(P),P=V):($=f.slice(P,se+1),P=se+1),$.length&&$!==`
`&&(k+=j),k+=$}return k}function gn(f,y){return`
`+e.repeat(" ",f.indent*y)}function Tn(f,y){for(let j=0,P=f.implicitTypes.length;j<P;j+=1)if(f.implicitTypes[j].resolve(y))return!0;return!1}function Ue(f){return f===d||f===l}function He(f){return f>=32&&f<=126||f>=161&&f<=55295&&f!==8232&&f!==8233||f>=57344&&f<=65533&&f!==i||f>=65536&&f<=1114111}function O(f){return He(f)&&f!==i&&f!==c&&f!==s}function ie(f,y,j){const P=O(f),k=P&&!Ue(f);return(j?P:P&&f!==Q&&f!==Se&&f!==me&&f!==D&&f!==Z)&&f!==p&&!(y===K&&!k)||O(y)&&!Ue(y)&&f===p||y===K&&k}function H(f){return He(f)&&f!==i&&!Ue(f)&&f!==M&&f!==re&&f!==K&&f!==Q&&f!==Se&&f!==me&&f!==D&&f!==Z&&f!==p&&f!==T&&f!==w&&f!==u&&f!==R&&f!==C&&f!==U&&f!==N&&f!==m&&f!==g&&f!==be&&f!==W}function ce(f){return!Ue(f)&&f!==K}function ye(f,y){const j=f.charCodeAt(y);let P;return j>=55296&&j<=56319&&y+1<f.length&&(P=f.charCodeAt(y+1),P>=56320&&P<=57343)?(j-55296)*1024+P-56320+65536:j}function h(f){return/^\n* /.test(f)}const v=1,b=2,I=3,L=4,S=5;function ee(f,y,j,P,k,V,$,se){let le,fe=0,he=null,we=!1,$e=!1;const za=P!==-1;let Uo=-1,Ho=H(ye(f,0))&&ce(ye(f,f.length-1));if(y||$)for(le=0;le<f.length;fe>=65536?le+=2:le++){if(fe=ye(f,le),!He(fe))return S;Ho=Ho&&ie(fe,he,se),he=fe}else{for(le=0;le<f.length;fe>=65536?le+=2:le++){if(fe=ye(f,le),fe===s)we=!0,za&&($e=$e||le-Uo-1>P&&f[Uo+1]!==" ",Uo=le);else if(!He(fe))return S;Ho=Ho&&ie(fe,he,se),he=fe}$e=$e||za&&le-Uo-1>P&&f[Uo+1]!==" "}return!we&&!$e?Ho&&!$&&!k(f)?v:V===Ze?S:b:j>9&&h(f)?S:$?V===Ze?S:b:$e?L:I}function X(f,y,j,P,k){f.dump=(function(){if(y.length===0)return f.quotingType===Ze?'""':"''";if(!f.noCompatMode&&(Ke.indexOf(y)!==-1||J.test(y)))return f.quotingType===Ze?'"'+y+'"':"'"+y+"'";const V=f.indent*Math.max(1,j),$=f.lineWidth===-1?-1:Math.max(Math.min(f.lineWidth,40),f.lineWidth-V),se=P||f.flowLevel>-1&&j>=f.flowLevel;function le(fe){return Tn(f,fe)}switch(ee(y,se,f.indent,$,le,f.quotingType,f.forceQuotes&&!P,k)){case v:return y;case b:return"'"+y.replace(/'/g,"''")+"'";case I:return"|"+Y(y,f.indent)+q(Ge(y,V));case L:return">"+Y(y,f.indent)+q(Ge(pe(y,$),V));case S:return'"'+de(y)+'"';default:throw new n("impossible error: invalid scalar style")}})()}function Y(f,y){const j=h(f)?String(y):"",P=f[f.length-1]===`
`,V=P&&(f[f.length-2]===`
`||f===`
`)?"+":P?"":"-";return j+V+`
`}function q(f){return f[f.length-1]===`
`?f.slice(0,-1):f}function pe(f,y){const j=/(\n+)([^\n]*)/g;let P=(function(){let se=f.indexOf(`
`);return se=se!==-1?se:f.length,j.lastIndex=se,ne(f.slice(0,se),y)})(),k=f[0]===`
`||f[0]===" ",V,$;for(;$=j.exec(f);){const se=$[1],le=$[2];V=le[0]===" ",P+=se+(!k&&!V&&le!==""?`
`:"")+ne(le,y),k=V}return P}function ne(f,y){if(f===""||f[0]===" ")return f;const j=/ [^ ]/g;let P,k=0,V,$=0,se=0,le="";for(;P=j.exec(f);)se=P.index,se-k>y&&(V=$>k?$:se,le+=`
`+f.slice(k,V),k=V+1),$=se;return le+=`
`,f.length-k>y&&$>k?le+=f.slice(k,$)+`
`+f.slice($+1):le+=f.slice(k),le.slice(1)}function de(f){let y="",j=0;for(let P=0;P<f.length;j>=65536?P+=2:P++){j=ye(f,P);const k=te[j];!k&&He(j)?(y+=f[P],j>=65536&&(y+=f[P+1])):y+=k||Ne(j)}return y}function ge(f,y,j){let P="";const k=f.tag;for(let V=0,$=j.length;V<$;V+=1){let se=j[V];f.replacer&&(se=f.replacer.call(j,String(V),se)),(B(f,y,se,!1,!1)||typeof se>"u"&&B(f,y,null,!1,!1))&&(P!==""&&(P+=","+(f.condenseFlow?"":" ")),P+=f.dump)}f.tag=k,f.dump="["+P+"]"}function Te(f,y,j,P){let k="";const V=f.tag;for(let $=0,se=j.length;$<se;$+=1){let le=j[$];f.replacer&&(le=f.replacer.call(j,String($),le)),(B(f,y+1,le,!0,!0,!1,!0)||typeof le>"u"&&B(f,y+1,null,!0,!0,!1,!0))&&((!P||k!=="")&&(k+=gn(f,y)),f.dump&&s===f.dump.charCodeAt(0)?k+="-":k+="- ",k+=f.dump)}f.tag=V,f.dump=k||"[]"}function Ce(f,y,j){let P="";const k=f.tag,V=Object.keys(j);for(let $=0,se=V.length;$<se;$+=1){let le="";P!==""&&(le+=", "),f.condenseFlow&&(le+='"');const fe=V[$];let he=j[fe];f.replacer&&(he=f.replacer.call(j,fe,he)),B(f,y,fe,!1,!1)&&(f.dump.length>1024&&(le+="? "),le+=f.dump+(f.condenseFlow?'"':"")+":"+(f.condenseFlow?"":" "),B(f,y,he,!1,!1)&&(le+=f.dump,P+=le))}f.tag=k,f.dump="{"+P+"}"}function a(f,y,j,P){let k="";const V=f.tag,$=Object.keys(j);if(f.sortKeys===!0)$.sort();else if(typeof f.sortKeys=="function")$.sort(f.sortKeys);else if(f.sortKeys)throw new n("sortKeys must be a boolean or a function");for(let se=0,le=$.length;se<le;se+=1){let fe="";(!P||k!=="")&&(fe+=gn(f,y));const he=$[se];let we=j[he];if(f.replacer&&(we=f.replacer.call(j,he,we)),!B(f,y+1,he,!0,!0,!0))continue;const $e=f.tag!==null&&f.tag!=="?"||f.dump&&f.dump.length>1024;$e&&(f.dump&&s===f.dump.charCodeAt(0)?fe+="?":fe+="? "),fe+=f.dump,$e&&(fe+=gn(f,y)),B(f,y+1,we,!0,$e)&&(f.dump&&s===f.dump.charCodeAt(0)?fe+=":":fe+=": ",fe+=f.dump,k+=fe)}f.tag=V,f.dump=k||"{}"}function _(f,y,j){const P=j?f.explicitTypes:f.implicitTypes;for(let k=0,V=P.length;k<V;k+=1){const $=P[k];if(($.instanceOf||$.predicate)&&(!$.instanceOf||typeof y=="object"&&y instanceof $.instanceOf)&&(!$.predicate||$.predicate(y))){if(j?$.multi&&$.representName?f.tag=$.representName(y):f.tag=$.tag:f.tag="?",$.represent){const se=f.styleMap[$.tag]||$.defaultStyle;let le;if(t.call($.represent)==="[object Function]")le=$.represent(y,se);else if(r.call($.represent,se))le=$.represent[se](y,se);else throw new n("!<"+$.tag+'> tag resolver accepts not "'+se+'" style');f.dump=le}return!0}}return!1}function B(f,y,j,P,k,V,$){f.tag=null,f.dump=j,_(f,j,!1)||_(f,j,!0);const se=t.call(f.dump),le=P;P&&(P=f.flowLevel<0||f.flowLevel>y);const fe=se==="[object Object]"||se==="[object Array]";let he,we;if(fe&&(he=f.duplicates.indexOf(j),we=he!==-1),(f.tag!==null&&f.tag!=="?"||we||f.indent!==2&&y>0)&&(k=!1),we&&f.usedDuplicates[he])f.dump="*ref_"+he;else{if(fe&&we&&!f.usedDuplicates[he]&&(f.usedDuplicates[he]=!0),se==="[object Object]")P&&Object.keys(f.dump).length!==0?(a(f,y,f.dump,k),we&&(f.dump="&ref_"+he+f.dump)):(Ce(f,y,f.dump),we&&(f.dump="&ref_"+he+" "+f.dump));else if(se==="[object Array]")P&&f.dump.length!==0?(f.noArrayIndent&&!$&&y>0?Te(f,y-1,f.dump,k):Te(f,y,f.dump,k),we&&(f.dump="&ref_"+he+f.dump)):(ge(f,y,f.dump),we&&(f.dump="&ref_"+he+" "+f.dump));else if(se==="[object String]")f.tag!=="?"&&X(f,f.dump,y,V,le);else{if(se==="[object Undefined]")return!1;if(f.skipInvalid)return!1;throw new n("unacceptable kind of an object to dump "+se)}if(f.tag!==null&&f.tag!=="?"){let $e=encodeURI(f.tag[0]==="!"?f.tag.slice(1):f.tag).replace(/!/g,"%21");f.tag[0]==="!"?$e="!"+$e:$e.slice(0,18)==="tag:yaml.org,2002:"?$e="!!"+$e.slice(18):$e="!<"+$e+">",f.dump=$e+" "+f.dump}}return!0}function E(f,y){const j=[],P=[];x(f,j,P);const k=P.length;for(let V=0;V<k;V+=1)y.duplicates.push(j[P[V]]);y.usedDuplicates=new Array(k)}function x(f,y,j){if(f!==null&&typeof f=="object"){const P=y.indexOf(f);if(P!==-1)j.indexOf(P)===-1&&j.push(P);else if(y.push(f),Array.isArray(f))for(let k=0,V=f.length;k<V;k+=1)x(f[k],y,j);else{const k=Object.keys(f);for(let V=0,$=k.length;V<$;V+=1)x(f[k[V]],y,j)}}}function F(f,y){y=y||{};const j=new mn(y);j.noRefs||E(f,j);let P=f;return j.replacer&&(P=j.replacer.call({"":P},"",P)),B(j,0,P,!0,!0)?j.dump+`
`:""}return Xr.dump=F,Xr}var rl;function Of(){if(rl)return en;rl=1;const e=Ef(),n=Cf();function o(t,r){return function(){throw new Error("Function yaml."+t+" is removed in js-yaml 4. Use yaml."+r+" instead, which is now safe by default.")}}return en.Type=fn(),en.Schema=Ws(),en.FAILSAFE_SCHEMA=Zs(),en.JSON_SCHEMA=rc(),en.CORE_SCHEMA=ac(),en.DEFAULT_SCHEMA=Ma(),en.load=e.load,en.loadAll=e.loadAll,en.dump=n.dump,en.YAMLException=St(),en.types={binary:sc(),float:tc(),map:Xs(),null:ec(),pairs:uc(),set:dc(),timestamp:ic(),bool:nc(),int:oc(),merge:lc(),omap:cc(),seq:Qs(),str:Js()},en.safeLoad=o("safeLoad","load"),en.safeLoadAll=o("safeLoadAll","loadAll"),en.safeDump=o("safeDump","dump"),en}var If=Of();const Wt=Sf(If),{Type:mv,Schema:pv,FAILSAFE_SCHEMA:hv,JSON_SCHEMA:vv,CORE_SCHEMA:gv,DEFAULT_SCHEMA:_v,load:bv,loadAll:yv,dump:Av,YAMLException:Nv,types:xv,safeLoad:Bv,safeLoadAll:Rv,safeDump:Tv}=Wt;class Pf{constructor({ruleSetRepository:n}){this.ruleSetRepository=n}list(){return this.ruleSetRepository.getAll()}get(n){return this.ruleSetRepository.get(n)}async save(n){const o=await this.ruleSetRepository.get(n.id),t=Tf(n,{createdAt:o?.createdAt??new Date,updatedAt:new Date});return this.ruleSetRepository.put(t)}async importFromJson(n,o){let t;try{t=JSON.parse(n)}catch{throw new TypeError("Arquivo de regras inválido: JSON malformado.")}return this.save(o?{...t,grupo:o}:t)}async importFromYaml(n,o){let t;try{t=Wt.load(n)}catch{throw new TypeError("Arquivo de regras inválido: YAML malformado.")}return this.save(o?{...t,grupo:o}:t)}exportToJson(n){ba(n);const{source:o,createdAt:t,updatedAt:r,...i}=n;return JSON.stringify(i,null,2)}exportToYaml(n){ba(n);const{source:o,createdAt:t,updatedAt:r,...i}=n;return Wt.dump(i,{noRefs:!0})}async exportByIdToJson(n){const o=await this.ruleSetRepository.get(n);if(!o)throw new Error("Conjunto de regras não encontrado.");return this.exportToJson(o)}async exportByIdToYaml(n){const o=await this.ruleSetRepository.get(n);if(!o)throw new Error("Conjunto de regras não encontrado.");return this.exportToYaml(o)}delete(n){return this.ruleSetRepository.delete(n)}}async function kf({indexedDB:e}={}){const n=await cf(e),o={projectRepository:new mf(n),environmentRepository:new df(n),elementRepository:new uf(n),evaluationRepository:new ff(n),ruleSetRepository:new pf(n)},t=new yf(o);return{projectService:new Af(o),evaluationService:t,quickEvaluationService:new Nf({evaluationService:t}),ruleSetService:new Pf(o),repositories:o,close:()=>n.close()}}const Lf=`id: bacia_sanitaria
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
`,qf=`id: bebedouro
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
`,Mf=`id: caixa_autoatendimento
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
`,Vf=`id: corredor
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
`,zf=`id: corredores
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
`,Uf=`id: corrimaos
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
`,Hf=`id: degraus-isolados
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
`,Kf=`id: elevador
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
`,Gf=`id: elevadores
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
`,Yf=`id: escadas
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
`,Wf=`id: estacionamento
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
`,Jf=`id: janela
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
`,Qf=`id: janelas
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
`,Xf=`id: lavatorio
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
`,Zf=`id: mesa
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
`,em=`id: mictorio
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
`,nm=`id: piscina
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
`,om=`id: piso-desnivel
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
`,tm=`id: piso_tatil
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
`,rm=`id: portas
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
`,am=`id: rampas
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
`,im=`id: sanitario_acessivel
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
`,lm=`id: sinalizacao
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
`,sm=`id: vagas_acessiveis
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
`,cm=Object.assign({"../rules/nbr9050-2020/bacia_sanitaria.yaml":Lf,"../rules/nbr9050-2020/balcao.yaml":jf,"../rules/nbr9050-2020/barras_apoio.yaml":Df,"../rules/nbr9050-2020/bebedouro.yaml":qf,"../rules/nbr9050-2020/caixa_autoatendimento.yaml":Mf,"../rules/nbr9050-2020/calcada.yaml":$f,"../rules/nbr9050-2020/chuveiro.yaml":Ff,"../rules/nbr9050-2020/corredor.yaml":Vf,"../rules/nbr9050-2020/corredores.yaml":zf,"../rules/nbr9050-2020/corrimaos.yaml":Uf,"../rules/nbr9050-2020/degraus-isolados.yaml":Hf,"../rules/nbr9050-2020/elevador.yaml":Kf,"../rules/nbr9050-2020/elevadores.yaml":Gf,"../rules/nbr9050-2020/escadas.yaml":Yf,"../rules/nbr9050-2020/estacionamento.yaml":Wf,"../rules/nbr9050-2020/janela.yaml":Jf,"../rules/nbr9050-2020/janelas.yaml":Qf,"../rules/nbr9050-2020/lavatorio.yaml":Xf,"../rules/nbr9050-2020/mesa.yaml":Zf,"../rules/nbr9050-2020/mictorio.yaml":em,"../rules/nbr9050-2020/piscina.yaml":nm,"../rules/nbr9050-2020/piso-desnivel.yaml":om,"../rules/nbr9050-2020/piso_tatil.yaml":tm,"../rules/nbr9050-2020/portas.yaml":rm,"../rules/nbr9050-2020/rampas.yaml":am,"../rules/nbr9050-2020/sanitario_acessivel.yaml":im,"../rules/nbr9050-2020/sinalizacao.yaml":lm,"../rules/nbr9050-2020/vagas_acessiveis.yaml":sm});async function um(){return Object.entries(cm).map(([e,n])=>({path:e,ruleSet:Wt.load(n)})).sort((e,n)=>e.ruleSet.nome.localeCompare(n.ruleSet.nome))}const wo=typeof document<"u";function fc(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function dm(e){return e.__esModule||e[Symbol.toStringTag]==="Module"||e.default&&fc(e.default)}const Pe=Object.assign;function Zr(e,n){const o={};for(const t in n){const r=n[t];o[t]=In(r)?r.map(e):e(r)}return o}const it=()=>{},In=Array.isArray;function al(e,n){const o={};for(const t in e)o[t]=t in n?n[t]:e[t];return o}const mc=/#/g,fm=/&/g,mm=/\//g,pm=/=/g,hm=/\?/g,pc=/\+/g,vm=/%5B/g,gm=/%5D/g,hc=/%5E/g,_m=/%60/g,vc=/%7B/g,bm=/%7C/g,gc=/%7D/g,ym=/%20/g;function $a(e){return e==null?"":encodeURI(""+e).replace(bm,"|").replace(vm,"[").replace(gm,"]")}function Am(e){return $a(e).replace(vc,"{").replace(gc,"}").replace(hc,"^")}function ya(e){return $a(e).replace(pc,"%2B").replace(ym,"+").replace(mc,"%23").replace(fm,"%26").replace(_m,"`").replace(vc,"{").replace(gc,"}").replace(hc,"^")}function Nm(e){return ya(e).replace(pm,"%3D")}function xm(e){return $a(e).replace(mc,"%23").replace(hm,"%3F")}function Bm(e){return xm(e).replace(mm,"%2F")}function _t(e){if(e==null)return null;try{return decodeURIComponent(""+e)}catch{}return""+e}const Rm=/\/$/,Tm=e=>e.replace(Rm,"");function ea(e,n,o="/"){let t,r={},i="",l="";const s=n.indexOf("#");let c=n.indexOf("?");return c=s>=0&&c>s?-1:c,c>=0&&(t=n.slice(0,c),i=n.slice(c,s>0?s:n.length),r=e(i.slice(1))),s>=0&&(t=t||n.slice(0,s),l=n.slice(s,n.length)),t=Cm(t??n,o),{fullPath:t+i+l,path:t,query:r,hash:_t(l)}}function Sm(e,n){const o=n.query?e(n.query):"";return n.path+(o&&"?")+o+(n.hash||"")}function il(e,n){return!n||!e.toLowerCase().startsWith(n.toLowerCase())?e:e.slice(n.length)||"/"}function wm(e,n,o){const t=n.matched.length-1,r=o.matched.length-1;return t>-1&&t===r&&$o(n.matched[t],o.matched[r])&&_c(n.params,o.params)&&e(n.query)===e(o.query)&&n.hash===o.hash}function $o(e,n){return(e.aliasOf||e)===(n.aliasOf||n)}function _c(e,n){if(Object.keys(e).length!==Object.keys(n).length)return!1;for(var o in e)if(!Em(e[o],n[o]))return!1;return!0}function Em(e,n){return In(e)?ll(e,n):In(n)?ll(n,e):e?.valueOf()===n?.valueOf()}function ll(e,n){return In(n)?e.length===n.length&&e.every((o,t)=>o===n[t]):e.length===1&&e[0]===n}function Cm(e,n){if(e.startsWith("/"))return e;if(!e)return n;const o=n.split("/"),t=e.split("/"),r=t[t.length-1];(r===".."||r===".")&&t.push("");let i=o.length-1,l,s;for(l=0;l<t.length;l++)if(s=t[l],s!==".")if(s==="..")i>1&&i--;else break;return o.slice(0,i).join("/")+"/"+t.slice(l).join("/")}const to={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};let Aa=(function(e){return e.pop="pop",e.push="push",e})({}),na=(function(e){return e.back="back",e.forward="forward",e.unknown="",e})({});function Om(e){if(!e)if(wo){const n=document.querySelector("base");e=n&&n.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),Tm(e)}const Im=/^[^#]+#/;function Pm(e,n){return e.replace(Im,"#")+n}function km(e,n){const o=document.documentElement.getBoundingClientRect(),t=e.getBoundingClientRect();return{behavior:n.behavior,left:t.left-o.left-(n.left||0),top:t.top-o.top-(n.top||0)}}const pr=()=>({left:window.scrollX,top:window.scrollY});function Lm(e){let n;if("el"in e){const o=e.el,t=typeof o=="string"&&o.startsWith("#"),r=typeof o=="string"?t?document.getElementById(o.slice(1)):document.querySelector(o):o;if(!r)return;n=km(r,e)}else n=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(n):window.scrollTo(n.left!=null?n.left:window.scrollX,n.top!=null?n.top:window.scrollY)}function sl(e,n){return(history.state?history.state.position-n:-1)+e}const Na=new Map;function jm(e,n){Na.set(e,n)}function Dm(e){const n=Na.get(e);return Na.delete(e),n}function qm(e){return typeof e=="string"||e&&typeof e=="object"}function bc(e){return typeof e=="string"||typeof e=="symbol"}let ze=(function(e){return e[e.MATCHER_NOT_FOUND=1]="MATCHER_NOT_FOUND",e[e.NAVIGATION_GUARD_REDIRECT=2]="NAVIGATION_GUARD_REDIRECT",e[e.NAVIGATION_ABORTED=4]="NAVIGATION_ABORTED",e[e.NAVIGATION_CANCELLED=8]="NAVIGATION_CANCELLED",e[e.NAVIGATION_DUPLICATED=16]="NAVIGATION_DUPLICATED",e})({});const yc=Symbol("");ze.MATCHER_NOT_FOUND+"",ze.NAVIGATION_GUARD_REDIRECT+"",ze.NAVIGATION_ABORTED+"",ze.NAVIGATION_CANCELLED+"",ze.NAVIGATION_DUPLICATED+"";function Fo(e,n){return Pe(new Error,{type:e,[yc]:!0},n)}function Hn(e,n){return e instanceof Error&&yc in e&&(n==null||!!(e.type&n))}const Mm=["params","query","hash"];function $m(e){if(typeof e=="string")return e;if(e.path!=null)return e.path;const n={};for(const o of Mm)o in e&&(n[o]=e[o]);return JSON.stringify(n,null,2)}function Fm(e){const n={};if(e===""||e==="?")return n;const o=(e[0]==="?"?e.slice(1):e).split("&");for(let t=0;t<o.length;++t){const r=o[t].replace(pc," "),i=r.indexOf("="),l=_t(i<0?r:r.slice(0,i)),s=i<0?null:_t(r.slice(i+1));if(l in n){let c=n[l];In(c)||(c=n[l]=[c]),c.push(s)}else n[l]=s}return n}function cl(e){let n="";for(let o in e){const t=e[o];if(o=Nm(o),t==null){t!==void 0&&(n+=(n.length?"&":"")+o);continue}(In(t)?t.map(r=>r&&ya(r)):[t&&ya(t)]).forEach(r=>{r!==void 0&&(n+=(n.length?"&":"")+o,r!=null&&(n+="="+r))})}return n}function Vm(e){const n={};for(const o in e){const t=e[o];t!==void 0&&(n[o]=In(t)?t.map(r=>r==null?null:""+r):t==null?t:""+t)}return n}const zm=Symbol(""),ul=Symbol(""),hr=Symbol(""),Fa=Symbol(""),xa=Symbol("");function Qo(){let e=[];function n(t){return e.push(t),()=>{const r=e.indexOf(t);r>-1&&e.splice(r,1)}}function o(){e=[]}return{add:n,list:()=>e.slice(),reset:o}}function ao(e,n,o,t,r,i=l=>l()){const l=t&&(t.enterCallbacks[r]=t.enterCallbacks[r]||[]);return()=>new Promise((s,c)=>{const d=p=>{p===!1?c(Fo(ze.NAVIGATION_ABORTED,{from:o,to:n})):p instanceof Error?c(p):qm(p)?c(Fo(ze.NAVIGATION_GUARD_REDIRECT,{from:n,to:p})):(l&&t.enterCallbacks[r]===l&&typeof p=="function"&&l.push(p),s())},u=i(()=>e.call(t&&t.instances[r],n,o,d));let m=Promise.resolve(u);e.length<3&&(m=m.then(d)),m.catch(p=>c(p))})}function oa(e,n,o,t,r=i=>i()){const i=[];for(const l of e)for(const s in l.components){let c=l.components[s];if(!(n!=="beforeRouteEnter"&&!l.instances[s]))if(fc(c)){const d=(c.__vccOpts||c)[n];d&&i.push(ao(d,o,t,l,s,r))}else{let d=c();i.push(()=>d.then(u=>{if(!u)throw new Error(`Couldn't resolve component "${s}" at "${l.path}"`);const m=dm(u)?u.default:u;l.mods[s]=u,l.components[s]=m;const p=(m.__vccOpts||m)[n];return p&&ao(p,o,t,l,s,r)()}))}}return i}function Um(e,n){const o=[],t=[],r=[],i=Math.max(n.matched.length,e.matched.length);for(let l=0;l<i;l++){const s=n.matched[l];s&&(e.matched.find(d=>$o(d,s))?t.push(s):o.push(s));const c=e.matched[l];c&&(n.matched.find(d=>$o(d,c))||r.push(c))}return[o,t,r]}let Hm=()=>location.protocol+"//"+location.host;function Ac(e,n){const{pathname:o,search:t,hash:r}=n,i=e.indexOf("#");if(i>-1){let l=r.includes(e.slice(i))?e.slice(i).length:1,s=r.slice(l);return s[0]!=="/"&&(s="/"+s),il(s,"")}return il(o,e)+t+r}function Km(e,n,o,t){let r=[],i=[],l=null;const s=({state:p})=>{const g=Ac(e,location),T=o.value,N=n.value;let w=0;if(p){if(o.value=g,n.value=p,l&&l===T){l=null;return}w=N?p.position-N.position:0}else t(g);r.forEach(Q=>{Q(o.value,T,{delta:w,type:Aa.pop,direction:w?w>0?na.forward:na.back:na.unknown})})};function c(){l=o.value}function d(p){r.push(p);const g=()=>{const T=r.indexOf(p);T>-1&&r.splice(T,1)};return i.push(g),g}function u(){if(document.visibilityState==="hidden"){const{history:p}=window;if(!p.state)return;p.replaceState(Pe({},p.state,{scroll:pr()}),"")}}function m(){for(const p of i)p();i=[],window.removeEventListener("popstate",s),window.removeEventListener("pagehide",u),document.removeEventListener("visibilitychange",u)}return window.addEventListener("popstate",s),window.addEventListener("pagehide",u),document.addEventListener("visibilitychange",u),{pauseListeners:c,listen:d,destroy:m}}function dl(e,n,o,t=!1,r=!1){return{back:e,current:n,forward:o,replaced:t,position:window.history.length,scroll:r?pr():null}}function Gm(e){const{history:n,location:o}=window,t={value:Ac(e,o)},r={value:n.state};r.value||i(t.value,{back:null,current:t.value,forward:null,position:n.length-1,replaced:!0,scroll:null},!0);function i(c,d,u){const m=e.indexOf("#"),p=m>-1?(o.host&&document.querySelector("base")?e:e.slice(m))+c:Hm()+e+c;try{n[u?"replaceState":"pushState"](d,"",p),r.value=d}catch(g){console.error(g),o[u?"replace":"assign"](p)}}function l(c,d){i(c,Pe({},n.state,dl(r.value.back,c,r.value.forward,!0),d,{position:r.value.position}),!0),t.value=c}function s(c,d){const u=Pe({},r.value,n.state,{forward:c,scroll:pr()});i(u.current,u,!0),i(c,Pe({},dl(t.value,c,null),{position:u.position+1},d),!1),t.value=c}return{location:t,state:r,push:s,replace:l}}function Ym(e){e=Om(e);const n=Gm(e),o=Km(e,n.state,n.location,n.replace);function t(i,l=!0){l||o.pauseListeners(),history.go(i)}const r=Pe({location:"",base:e,go:t,createHref:Pm.bind(null,e)},n,o);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>n.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>n.state.value}),r}let _o=(function(e){return e[e.Static=0]="Static",e[e.Param=1]="Param",e[e.Group=2]="Group",e})({});var We=(function(e){return e[e.Static=0]="Static",e[e.Param=1]="Param",e[e.ParamRegExp=2]="ParamRegExp",e[e.ParamRegExpEnd=3]="ParamRegExpEnd",e[e.EscapeNext=4]="EscapeNext",e})(We||{});const Wm={type:_o.Static,value:""},Jm=/[a-zA-Z0-9_]/;function Qm(e){if(!e)return[[]];if(e==="/")return[[Wm]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function n(g){throw new Error(`ERR (${o})/"${d}": ${g}`)}let o=We.Static,t=o;const r=[];let i;function l(){i&&r.push(i),i=[]}let s=0,c,d="",u="";function m(){d&&(o===We.Static?i.push({type:_o.Static,value:d}):o===We.Param||o===We.ParamRegExp||o===We.ParamRegExpEnd?(i.length>1&&(c==="*"||c==="+")&&n(`A repeatable param (${d}) must be alone in its segment. eg: '/:ids+.`),i.push({type:_o.Param,value:d,regexp:u,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):n("Invalid state to consume buffer"),d="")}function p(){d+=c}for(;s<e.length;){if(c=e[s++],c==="\\"&&o!==We.ParamRegExp){t=o,o=We.EscapeNext;continue}switch(o){case We.Static:c==="/"?(d&&m(),l()):c===":"?(m(),o=We.Param):p();break;case We.EscapeNext:p(),o=t;break;case We.Param:c==="("?o=We.ParamRegExp:Jm.test(c)?p():(m(),o=We.Static,c!=="*"&&c!=="?"&&c!=="+"&&s--);break;case We.ParamRegExp:c===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+c:o=We.ParamRegExpEnd:u+=c;break;case We.ParamRegExpEnd:m(),o=We.Static,c!=="*"&&c!=="?"&&c!=="+"&&s--,u="";break;default:n("Unknown state");break}}return o===We.ParamRegExp&&n(`Unfinished custom RegExp for param "${d}"`),m(),l(),r}const fl="[^/]+?",Xm={sensitive:!1,strict:!1,start:!0,end:!0};var sn=(function(e){return e[e._multiplier=10]="_multiplier",e[e.Root=90]="Root",e[e.Segment=40]="Segment",e[e.SubSegment=30]="SubSegment",e[e.Static=40]="Static",e[e.Dynamic=20]="Dynamic",e[e.BonusCustomRegExp=10]="BonusCustomRegExp",e[e.BonusWildcard=-50]="BonusWildcard",e[e.BonusRepeatable=-20]="BonusRepeatable",e[e.BonusOptional=-8]="BonusOptional",e[e.BonusStrict=.7000000000000001]="BonusStrict",e[e.BonusCaseSensitive=.25]="BonusCaseSensitive",e})(sn||{});const Zm=/[.+*?^${}()[\]/\\]/g;function ep(e,n){const o=Pe({},Xm,n),t=[];let r=o.start?"^":"";const i=[];for(const d of e){const u=d.length?[]:[sn.Root];o.strict&&!d.length&&(r+="/");for(let m=0;m<d.length;m++){const p=d[m];let g=sn.Segment+(o.sensitive?sn.BonusCaseSensitive:0);if(p.type===_o.Static)m||(r+="/"),r+=p.value.replace(Zm,"\\$&"),g+=sn.Static;else if(p.type===_o.Param){const{value:T,repeatable:N,optional:w,regexp:Q}=p;i.push({name:T,repeatable:N,optional:w});const M=Q||fl;if(M!==fl){g+=sn.BonusCustomRegExp;try{`${M}`}catch(C){throw new Error(`Invalid custom RegExp for param "${T}" (${M}): `+C.message)}}let K=N?`((?:${M})(?:/(?:${M}))*)`:`(${M})`;m||(K=w&&d.length<2?`(?:/${K})`:"/"+K),w&&(K+="?"),r+=K,g+=sn.Dynamic,w&&(g+=sn.BonusOptional),N&&(g+=sn.BonusRepeatable),M===".*"&&(g+=sn.BonusWildcard)}u.push(g)}t.push(u)}if(o.strict&&o.end){const d=t.length-1;t[d][t[d].length-1]+=sn.BonusStrict}o.strict||(r+="/?"),o.end?r+="$":o.strict&&!r.endsWith("/")&&(r+="(?:/|$)");const l=new RegExp(r,o.sensitive?"":"i");function s(d){const u=d.match(l),m={};if(!u)return null;for(let p=1;p<u.length;p++){const g=u[p]||"",T=i[p-1];m[T.name]=g&&T.repeatable?g.split("/"):g}return m}function c(d){let u="",m=!1;for(const p of e){(!m||!u.endsWith("/"))&&(u+="/"),m=!1;for(const g of p)if(g.type===_o.Static)u+=g.value;else if(g.type===_o.Param){const{value:T,repeatable:N,optional:w}=g,Q=T in d?d[T]:"";if(In(Q)&&!N)throw new Error(`Provided param "${T}" is an array but it is not repeatable (* or + modifiers)`);const M=In(Q)?Q.join("/"):Q;if(!M)if(w)p.length<2&&(u.endsWith("/")?u=u.slice(0,-1):m=!0);else throw new Error(`Missing required param "${T}"`);u+=M}}return u||"/"}return{re:l,score:t,keys:i,parse:s,stringify:c}}function np(e,n){let o=0;for(;o<e.length&&o<n.length;){const t=n[o]-e[o];if(t)return t;o++}return e.length<n.length?e.length===1&&e[0]===sn.Static+sn.Segment?-1:1:e.length>n.length?n.length===1&&n[0]===sn.Static+sn.Segment?1:-1:0}function Nc(e,n){let o=0;const t=e.score,r=n.score;for(;o<t.length&&o<r.length;){const i=np(t[o],r[o]);if(i)return i;o++}if(Math.abs(r.length-t.length)===1){if(ml(t))return 1;if(ml(r))return-1}return r.length-t.length}function ml(e){const n=e[e.length-1];return e.length>0&&n[n.length-1]<0}const op={strict:!1,end:!0,sensitive:!1};function tp(e,n,o){const t=ep(Qm(e.path),o),r=Pe(t,{record:e,parent:n,children:[],alias:[]});return n&&!r.record.aliasOf==!n.record.aliasOf&&n.children.push(r),r}function rp(e,n){const o=[],t=new Map;n=al(op,n);function r(m){return t.get(m)}function i(m,p,g){const T=!g,N=hl(m);N.aliasOf=g&&g.record;const w=al(n,m),Q=[N];if("alias"in m){const C=typeof m.alias=="string"?[m.alias]:m.alias;for(const U of C)Q.push(hl(Pe({},N,{components:g?g.record.components:N.components,path:U,aliasOf:g?g.record:N})))}let M,K;for(const C of Q){const{path:U}=C;if(p&&U[0]!=="/"){const re=p.record.path,be=re[re.length-1]==="/"?"":"/";C.path=p.record.path+(U&&be+U)}if(M=tp(C,p,w),g?g.alias.push(M):(K=K||M,K!==M&&K.alias.push(M),T&&m.name&&!vl(M)&&l(m.name)),xc(M)&&c(M),N.children){const re=N.children;for(let be=0;be<re.length;be++)i(re[be],M,g&&g.children[be])}g=g||M}return K?()=>{l(K)}:it}function l(m){if(bc(m)){const p=t.get(m);p&&(t.delete(m),o.splice(o.indexOf(p),1),p.children.forEach(l),p.alias.forEach(l))}else{const p=o.indexOf(m);p>-1&&(o.splice(p,1),m.record.name&&t.delete(m.record.name),m.children.forEach(l),m.alias.forEach(l))}}function s(){return o}function c(m){const p=lp(m,o);o.splice(p,0,m),m.record.name&&!vl(m)&&t.set(m.record.name,m)}function d(m,p){let g,T={},N,w;if("name"in m&&m.name){if(g=t.get(m.name),!g)throw Fo(ze.MATCHER_NOT_FOUND,{location:m});w=g.record.name,T=Pe(pl(p.params,g.keys.filter(K=>!K.optional).concat(g.parent?g.parent.keys.filter(K=>K.optional):[]).map(K=>K.name)),m.params&&pl(m.params,g.keys.map(K=>K.name))),N=g.stringify(T)}else if(m.path!=null)N=m.path,g=o.find(K=>K.re.test(N)),g&&(T=g.parse(N),w=g.record.name);else{if(g=p.name?t.get(p.name):o.find(K=>K.re.test(p.path)),!g)throw Fo(ze.MATCHER_NOT_FOUND,{location:m,currentLocation:p});w=g.record.name,T=Pe({},p.params,m.params),N=g.stringify(T)}const Q=[];let M=g;for(;M;)Q.unshift(M.record),M=M.parent;return{name:w,path:N,params:T,matched:Q,meta:ip(Q)}}e.forEach(m=>i(m));function u(){o.length=0,t.clear()}return{addRoute:i,resolve:d,removeRoute:l,clearRoutes:u,getRoutes:s,getRecordMatcher:r}}function pl(e,n){const o={};for(const t of n)t in e&&(o[t]=e[t]);return o}function hl(e){const n={path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:e.aliasOf,beforeEnter:e.beforeEnter,props:ap(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}};return Object.defineProperty(n,"mods",{value:{}}),n}function ap(e){const n={},o=e.props||!1;if("component"in e)n.default=o;else for(const t in e.components)n[t]=typeof o=="object"?o[t]:o;return n}function vl(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function ip(e){return e.reduce((n,o)=>Pe(n,o.meta),{})}function lp(e,n){let o=0,t=n.length;for(;o!==t;){const i=o+t>>1;Nc(e,n[i])<0?t=i:o=i+1}const r=sp(e);return r&&(t=n.lastIndexOf(r,t-1)),t}function sp(e){let n=e;for(;n=n.parent;)if(xc(n)&&Nc(e,n)===0)return n}function xc({record:e}){return!!(e.name||e.components&&Object.keys(e.components).length||e.redirect)}function gl(e){const n=Ye(hr),o=Ye(Fa),t=De(()=>{const c=ae(e.to);return n.resolve(c)}),r=De(()=>{const{matched:c}=t.value,{length:d}=c,u=c[d-1],m=o.matched;if(!u||!m.length)return-1;const p=m.findIndex($o.bind(null,u));if(p>-1)return p;const g=_l(c[d-2]);return d>1&&_l(u)===g&&m[m.length-1].path!==g?m.findIndex($o.bind(null,c[d-2])):p}),i=De(()=>r.value>-1&&fp(o.params,t.value.params)),l=De(()=>r.value>-1&&r.value===o.matched.length-1&&_c(o.params,t.value.params));function s(c={}){if(dp(c)){const d=n[ae(e.replace)?"replace":"push"](ae(e.to)).catch(it);return e.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>d),d}return Promise.resolve()}return{route:t,href:De(()=>t.value.href),isActive:i,isExactActive:l,navigate:s}}function cp(e){return e.length===1?e[0]:e}const up=fs({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:gl,setup(e,{slots:n}){const o=At(gl(e)),{options:t}=Ye(hr),r=De(()=>({[bl(e.activeClass,t.linkActiveClass,"router-link-active")]:o.isActive,[bl(e.exactActiveClass,t.linkExactActiveClass,"router-link-exact-active")]:o.isExactActive}));return()=>{const i=n.default&&cp(n.default(o));return e.custom?i:Do("a",{"aria-current":o.isExactActive?e.ariaCurrentValue:null,href:o.href,onClick:o.navigate,class:r.value},i)}}}),Ee=up;function dp(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const n=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(n))return}return e.preventDefault&&e.preventDefault(),!0}}function fp(e,n){for(const o in n){const t=n[o],r=e[o];if(typeof t=="string"){if(t!==r)return!1}else if(!In(r)||r.length!==t.length||t.some((i,l)=>i.valueOf()!==r[l].valueOf()))return!1}return!0}function _l(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const bl=(e,n,o)=>e??n??o,mp=fs({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:n,slots:o}){const t=Ye(xa),r=De(()=>e.route||t.value),i=Ye(ul,0),l=De(()=>{let d=ae(i);const{matched:u}=r.value;let m;for(;(m=u[d])&&!m.components;)d++;return d}),s=De(()=>r.value.matched[l.value]);jt(ul,De(()=>l.value+1)),jt(zm,s),jt(xa,r);const c=je();return Ao(()=>[c.value,s.value,e.name],([d,u,m],[p,g,T])=>{u&&(u.instances[m]=d,g&&g!==u&&d&&d===p&&(u.leaveGuards.size||(u.leaveGuards=g.leaveGuards),u.updateGuards.size||(u.updateGuards=g.updateGuards))),d&&u&&(!g||!$o(u,g)||!p)&&(u.enterCallbacks[m]||[]).forEach(N=>N(d))},{flush:"post"}),()=>{const d=r.value,u=e.name,m=s.value,p=m&&m.components[u];if(!p)return yl(o.default,{Component:p,route:d});const g=m.props[u],T=g?g===!0?d.params:typeof g=="function"?g(d):g:null,w=Do(p,Pe({},T,n,{onVnodeUnmounted:Q=>{Q.component.isUnmounted&&(m.instances[u]=null)},ref:c}));return yl(o.default,{Component:w,route:d})||w}}});function yl(e,n){if(!e)return null;const o=e(n);return o.length===1?o[0]:o}const Bc=mp;function pp(e){const n=rp(e.routes,e),o=e.parseQuery||Fm,t=e.stringifyQuery||cl,r=e.history,i=Qo(),l=Qo(),s=Qo(),c=iu(to);let d=to;wo&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=Zr.bind(null,O=>""+O),m=Zr.bind(null,Bm),p=Zr.bind(null,_t);function g(O,ie){let H,ce;return bc(O)?(H=n.getRecordMatcher(O),ce=ie):ce=O,n.addRoute(ce,H)}function T(O){const ie=n.getRecordMatcher(O);ie&&n.removeRoute(ie)}function N(){return n.getRoutes().map(O=>O.record)}function w(O){return!!n.getRecordMatcher(O)}function Q(O,ie){if(ie=Pe({},ie||c.value),typeof O=="string"){const b=ea(o,O,ie.path),I=n.resolve({path:b.path},ie),L=r.createHref(b.fullPath);return Pe(b,I,{params:p(I.params),hash:_t(b.hash),redirectedFrom:void 0,href:L})}let H;if(O.path!=null)H=Pe({},O,{path:ea(o,O.path,ie.path).path});else{const b=Pe({},O.params);for(const I in b)b[I]==null&&delete b[I];H=Pe({},O,{params:m(b)}),ie.params=m(ie.params)}const ce=n.resolve(H,ie),ye=O.hash||"";ce.params=u(p(ce.params));const h=Sm(t,Pe({},O,{hash:Am(ye),path:ce.path})),v=r.createHref(h);return Pe({fullPath:h,hash:ye,query:t===cl?Vm(O.query):O.query||{}},ce,{redirectedFrom:void 0,href:v})}function M(O){return typeof O=="string"?ea(o,O,c.value.path):Pe({},O)}function K(O,ie){if(d!==O)return Fo(ze.NAVIGATION_CANCELLED,{from:ie,to:O})}function C(O){return be(O)}function U(O){return C(Pe(M(O),{replace:!0}))}function re(O,ie){const H=O.matched[O.matched.length-1];if(H&&H.redirect){const{redirect:ce}=H;let ye=typeof ce=="function"?ce(O,ie):ce;return typeof ye=="string"&&(ye=ye.includes("?")||ye.includes("#")?ye=M(ye):{path:ye},ye.params={}),Pe({query:O.query,hash:O.hash,params:ye.path!=null?{}:O.params},ye)}}function be(O,ie){const H=d=Q(O),ce=c.value,ye=O.state,h=O.force,v=O.replace===!0,b=re(H,ce);if(b)return be(Pe(M(b),{state:typeof b=="object"?Pe({},ye,b.state):ye,force:h,replace:v}),ie||H);const I=H;I.redirectedFrom=ie;let L;return!h&&wm(t,ce,H)&&(L=Fo(ze.NAVIGATION_DUPLICATED,{to:I,from:ce}),mn(ce,ce,!0,!1)),(L?Promise.resolve(L):W(I,ce)).catch(S=>Hn(S)?Hn(S,ze.NAVIGATION_GUARD_REDIRECT)?S:Ze(S):Ne(S,I,ce)).then(S=>{if(S){if(Hn(S,ze.NAVIGATION_GUARD_REDIRECT))return be(Pe({replace:v},M(S.to),{state:typeof S.to=="object"?Pe({},ye,S.to.state):ye,force:h}),ie||I)}else S=R(I,ce,!0,v,ye);return D(I,ce,S),S})}function Se(O,ie){const H=K(O,ie);return H?Promise.reject(H):Promise.resolve()}function me(O){const ie=Tn.values().next().value;return ie&&typeof ie.runWithContext=="function"?ie.runWithContext(O):O()}function W(O,ie){let H;const[ce,ye,h]=Um(O,ie);H=oa(ce.reverse(),"beforeRouteLeave",O,ie);for(const b of ce)b.leaveGuards.forEach(I=>{H.push(ao(I,O,ie))});const v=Se.bind(null,O,ie);return H.push(v),He(H).then(()=>{H=[];for(const b of i.list())H.push(ao(b,O,ie));return H.push(v),He(H)}).then(()=>{H=oa(ye,"beforeRouteUpdate",O,ie);for(const b of ye)b.updateGuards.forEach(I=>{H.push(ao(I,O,ie))});return H.push(v),He(H)}).then(()=>{H=[];for(const b of h)if(b.beforeEnter)if(In(b.beforeEnter))for(const I of b.beforeEnter)H.push(ao(I,O,ie));else H.push(ao(b.beforeEnter,O,ie));return H.push(v),He(H)}).then(()=>(O.matched.forEach(b=>b.enterCallbacks={}),H=oa(h,"beforeRouteEnter",O,ie,me),H.push(v),He(H))).then(()=>{H=[];for(const b of l.list())H.push(ao(b,O,ie));return H.push(v),He(H)}).catch(b=>Hn(b,ze.NAVIGATION_CANCELLED)?b:Promise.reject(b))}function D(O,ie,H){s.list().forEach(ce=>me(()=>ce(O,ie,H)))}function R(O,ie,H,ce,ye){const h=K(O,ie);if(h)return h;const v=ie===to,b=wo?history.state:{};H&&(ce||v?r.replace(O.fullPath,Pe({scroll:v&&b&&b.scroll},ye)):r.push(O.fullPath,ye)),c.value=O,mn(O,ie,H,v),Ze()}let Z;function te(){Z||(Z=r.listen((O,ie,H)=>{if(!Ue.listening)return;const ce=Q(O),ye=re(ce,Ue.currentRoute.value);if(ye){be(Pe(ye,{replace:!0,force:!0}),ce).catch(it);return}d=ce;const h=c.value;wo&&jm(sl(h.fullPath,H.delta),pr()),W(ce,h).catch(v=>Hn(v,ze.NAVIGATION_ABORTED|ze.NAVIGATION_CANCELLED)?v:Hn(v,ze.NAVIGATION_GUARD_REDIRECT)?(be(Pe(M(v.to),{force:!0}),ce).then(b=>{Hn(b,ze.NAVIGATION_ABORTED|ze.NAVIGATION_DUPLICATED)&&!H.delta&&H.type===Aa.pop&&r.go(-1,!1)}).catch(it),Promise.reject()):(H.delta&&r.go(-H.delta,!1),Ne(v,ce,h))).then(v=>{v=v||R(ce,h,!1),v&&(H.delta&&!Hn(v,ze.NAVIGATION_CANCELLED)?r.go(-H.delta,!1):H.type===Aa.pop&&Hn(v,ze.NAVIGATION_ABORTED|ze.NAVIGATION_DUPLICATED)&&r.go(-1,!1)),D(ce,h,v)}).catch(it)}))}let Ke=Qo(),J=Qo(),Re;function Ne(O,ie,H){Ze(O);const ce=J.list();return ce.length?ce.forEach(ye=>ye(O,ie,H)):console.error(O),Promise.reject(O)}function vn(){return Re&&c.value!==to?Promise.resolve():new Promise((O,ie)=>{Ke.add([O,ie])})}function Ze(O){return Re||(Re=!O,te(),Ke.list().forEach(([ie,H])=>O?H(O):ie()),Ke.reset()),O}function mn(O,ie,H,ce){const{scrollBehavior:ye}=e;if(!wo||!ye)return Promise.resolve();const h=!H&&Dm(sl(O.fullPath,0))||(ce||!H)&&history.state&&history.state.scroll||null;return lr().then(()=>ye(O,ie,h)).then(v=>v&&Lm(v)).catch(v=>Ne(v,O,ie))}const Ge=O=>r.go(O);let gn;const Tn=new Set,Ue={currentRoute:c,listening:!0,addRoute:g,removeRoute:T,clearRoutes:n.clearRoutes,hasRoute:w,getRoutes:N,resolve:Q,options:e,push:C,replace:U,go:Ge,back:()=>Ge(-1),forward:()=>Ge(1),beforeEach:i.add,beforeResolve:l.add,afterEach:s.add,onError:J.add,isReady:vn,install(O){O.component("RouterLink",Ee),O.component("RouterView",Bc),O.config.globalProperties.$router=Ue,Object.defineProperty(O.config.globalProperties,"$route",{enumerable:!0,get:()=>ae(c)}),wo&&!gn&&c.value===to&&(gn=!0,C(r.location).catch(ce=>{}));const ie={};for(const ce in to)Object.defineProperty(ie,ce,{get:()=>c.value[ce],enumerable:!0});O.provide(hr,Ue),O.provide(Fa,Ql(ie)),O.provide(xa,c);const H=O.unmount;Tn.add(O),O.unmount=function(){Tn.delete(O),Tn.size<1&&(d=to,Z&&Z(),Z=null,c.value=to,gn=!1,Re=!1),H()}}};function He(O){return O.reduce((ie,H)=>ie.then(()=>me(H)),Promise.resolve())}return Ue}function Rc(){return Ye(hr)}function Tc(e){return Ye(Fa)}const hp="/Extensao-26.2/icon-512.png";const ho={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};const Al=(...e)=>e.filter((n,o,t)=>!!n&&n.trim()!==""&&t.indexOf(n)===o).join(" ").trim();function ta(e){return e!=null}function vp(e,n={}){const o=n.attributeNames??{},t=p=>o[p]??p,r=e.size??e.width??ho.width,i=e.size??e.height??ho.height,l=e.aliases?.filter(p=>typeof p=="string"&&p.trim()!=="").map(p=>`lucide-${p}`)??[],s=[...e.name?[`lucide-${e.name}`]:[],...l],c=n.className?.split(" ").filter(Boolean)??[],d=n.includeDefaultClasses===!1?Al(...c):Al("lucide",...s,...c),u=n.absoluteStrokeWidth?Number(n.strokeWidth??ho["stroke-width"])*Number(e.size??e.width??ho.width)/Number(n.size??n.width??ho.width):n.strokeWidth??ho["stroke-width"];return["svg",{...Object.entries(ho).reduce((p,[g,T])=>(p[t(g)]=T,p),{}),..."color"in n&&n.color&&{[t("stroke")]:n.color},..."size"in n&&ta(n.size)&&{[t("width")]:n.size,[t("height")]:n.size},..."width"in n&&ta(n.width)&&{[t("width")]:n.width},..."height"in n&&ta(n.height)&&{[t("height")]:n.height},[t("stroke-width")]:u,...d&&{[t("class")]:d},[t("viewBox")]:`0 0 ${r} ${i}`,...n.hasA11yProp===!1?{[t("aria-hidden")]:"true"}:{},..."attributes"in n&&n.attributes},e.node.map(p=>{const[g,T,N]=p,w=n.nonScalingStroke?{[t("vector-effect")]:"non-scaling-stroke",...T}:T;return N?[g,w,N]:[g,w]})]}const gp=e=>{for(const n in e)if(n.startsWith("aria-")||n==="role"||n==="title")return!0;return!1};const Pt=e=>e==="";const _p=e=>e?.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();const bp=Symbol("lucide-icons");function yp(){return Ye(bp,{})}const Ap=({name:e,iconNode:n,"icon-node":o,icon:t={name:_p(e),node:n??o,size:24,aliases:[]},absoluteStrokeWidth:r,"absolute-stroke-width":i,nonScalingStroke:l,"non-scaling-stroke":s,strokeWidth:c,"stroke-width":d,size:u,width:m=u,height:p=u,color:g,...T},{slots:N})=>{const{size:w,color:Q,strokeWidth:M=2,absoluteStrokeWidth:K=!1,nonScalingStroke:C=!1,class:U=""}=yp(),re=Pt(r)||Pt(i)||r===!0||i===!0||K===!0,be=Pt(l)||Pt(s)||l===!0||s===!0||C===!0;delete T.class;const Se=N.default?.(),[,me,W=[]]=vp(t,{color:g??Q,width:m??u??w,height:p??u??w,strokeWidth:c??d??M,absoluteStrokeWidth:re,nonScalingStroke:be,className:U,hasA11yProp:Se!=null&&Se.length>0||gp(T),attributes:T});return Do("svg",me,[...W.map(D=>Do(...D)),...Se??[]])};function Pn(e,n=[]){const o=typeof e=="string"?{name:e,node:n}:e;return(t,{slots:r})=>Do(Ap,{...t,icon:o},r.default?{default:r.default}:void 0)}const Np={name:"box",size:24,node:[["path",{d:"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",key:"hh9hay"}],["path",{d:"m3.3 7 8.7 5 8.7-5",key:"g66t2b"}],["path",{d:"M12 22V12",key:"d0xqtd"}]]},xp=Pn(Np);const Bp={name:"chevron-right",size:24,node:[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]},Jt=Pn(Bp);const Rp={name:"chevron-left",size:24,node:[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]},No=Pn(Rp);const Tp={name:"circle-question-mark",size:24,node:[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",key:"1u773s"}],["path",{d:"M12 17h.01",key:"p32p05"}]],aliases:["help-circle","circle-help"]},Sp=Pn(Tp);const wp={name:"clipboard-check",size:24,node:[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1",key:"tgr4d6"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",key:"116196"}],["path",{d:"m9 14 2 2 4-4",key:"df797q"}]]},Eo=Pn(wp);const Ep={name:"folder-kanban",size:24,node:[["path",{d:"M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z",key:"1fr9dc"}],["path",{d:"M8 10v4",key:"tgpxqk"}],["path",{d:"M12 10v2",key:"hh53o1"}],["path",{d:"M16 10v6",key:"1d6xys"}]]},Cp=Pn(Ep);const Op={name:"folder-plus",size:24,node:[["path",{d:"M12 10v6",key:"1bos4e"}],["path",{d:"M9 13h6",key:"1uhe8q"}],["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",key:"1kt360"}]]},Qt=Pn(Op);const Ip={name:"folder",size:24,node:[["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",key:"1kt360"}]]},Nl=Pn(Ip);const Pp={name:"house",size:24,node:[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"r6nss1"}]],aliases:["home"]},kp=Pn(Pp);const Lp={name:"plus",size:24,node:[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]},xl=Pn(Lp);const jp={name:"trash",size:24,node:[["path",{d:"M10 11v6",key:"nco0om"}],["path",{d:"M14 11v6",key:"outv1u"}],["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",key:"miytrc"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",key:"e791ji"}]],aliases:["trash-2"]},vr=Pn(jp),Dp={class:"app-shell"},qp={class:"sidebar"},Mp={class:"content",tabindex:"-1"},$p={class:"bottom-nav"},Fp={__name:"AppLayout",setup(e){const n=Tc(),o=De(()=>n.path.startsWith("/rules")?"rules":n.path.startsWith("/quick-evaluation")?"quick":"projects");return(t,r)=>(z(),oe("div",Dp,[A("aside",qp,[G(ae(Ee),{class:"brand",to:"/projects"},{default:_e(()=>[...r[0]||(r[0]=[A("img",{class:"brand__mark",src:hp,alt:"Acesso Verificador"},null,-1),A("span",null,[xe("Acesso"),A("br"),A("small",null,"Verificador")],-1)])]),_:1}),A("nav",null,[G(ae(Ee),{class:cn(["nav-item",{"is-active":o.value==="projects"}]),to:"/projects"},{default:_e(()=>[G(ae(Nl),{size:20,"aria-hidden":"true"}),r[1]||(r[1]=A("span",null,"Projetos",-1))]),_:1},8,["class"]),G(ae(Ee),{class:cn(["nav-item",{"is-active":o.value==="quick"}]),to:"/quick-evaluation"},{default:_e(()=>[G(ae(Eo),{size:20,"aria-hidden":"true"}),r[2]||(r[2]=A("span",null,"Avaliação rápida",-1))]),_:1},8,["class"]),G(ae(Ee),{class:cn(["nav-item",{"is-active":o.value==="rules"}]),to:"/rules"},{default:_e(()=>[G(ae(Eo),{size:20,"aria-hidden":"true"}),r[3]||(r[3]=A("span",null,"Regras",-1))]),_:1},8,["class"])])]),A("main",Mp,[hn(t.$slots,"default")]),A("nav",$p,[G(ae(Ee),{class:cn(["nav-item",{"is-active":o.value==="projects"}]),to:"/projects"},{default:_e(()=>[G(ae(Nl),{size:20,"aria-hidden":"true"}),r[4]||(r[4]=A("span",null,"Projetos",-1))]),_:1},8,["class"]),G(ae(Ee),{class:cn(["nav-item",{"is-active":o.value==="quick"}]),to:"/quick-evaluation"},{default:_e(()=>[G(ae(Eo),{size:20,"aria-hidden":"true"}),r[5]||(r[5]=A("span",null,"Avaliação rápida",-1))]),_:1},8,["class"]),G(ae(Ee),{class:cn(["nav-item",{"is-active":o.value==="rules"}]),to:"/rules"},{default:_e(()=>[G(ae(Eo),{size:20,"aria-hidden":"true"}),r[6]||(r[6]=A("span",null,"Regras",-1))]),_:1},8,["class"])])]))}},Vp={__name:"App",setup(e){return(n,o)=>(z(),Ve(Fp,null,{default:_e(()=>[G(ae(Bc))]),_:1}))}},zp={class:"page-header"},Up={key:0,class:"eyebrow"},Hp={class:"page-header__row"},Kp={key:0},lo={__name:"PageHeader",props:{eyebrow:String,title:{type:String,required:!0},description:String},setup(e){return(n,o)=>(z(),oe("header",zp,[e.eyebrow?(z(),oe("p",Up,ue(e.eyebrow),1)):Ie("",!0),A("div",Hp,[A("div",null,[A("h1",null,ue(e.title),1),e.description?(z(),oe("p",Kp,ue(e.description),1)):Ie("",!0)]),hn(n.$slots,"action")])]))}},Gp={class:"empty-state"},Vn={__name:"EmptyState",props:{title:String,text:String},setup(e){return(n,o)=>(z(),oe("section",Gp,[o[0]||(o[0]=A("div",{class:"empty-state__icon"},"+",-1)),A("h2",null,ue(e.title),1),A("p",null,ue(e.text),1),hn(n.$slots,"default")]))}},Yp={class:"field"},Wp={key:0,class:"muted"},Jp={key:1,class:"card-list"},Qp={class:"card__icon"},Xp={key:0},Zp={class:"card__menu"},eh=["onClick"],nh=["onClick"],oh={__name:"ProjectsPage",setup(e){const n=Ye("services"),o=je([]),t=je(""),r=je(""),i=je(null),l=je("");async function s(){o.value=await n.projectService.listProjects()}function c(){i.value={},t.value="",r.value="",l.value=""}function d(T){i.value=T,t.value=T.name,l.value="",r.value=T.description||""}function u(){i.value=null,t.value="",r.value="",l.value=""}async function m(){try{l.value="",i.value?.id?await n.projectService.updateProject(i.value.id,{name:t.value,description:r.value}):await n.projectService.createProject({name:t.value,description:r.value}),t.value="",r.value="",i.value=null,await s()}catch(T){l.value=T.message}}async function p(T){if(!window.confirm(`Excluir o projeto “${T.name}” e seus dados?`))return;const w=await n.projectService.listEnvironments(T.id);for(const Q of w){const M=await n.projectService.listElements(Q.id);for(const K of M){const C=await n.evaluationService.listEvaluations(K.id);for(const U of C)await n.repositories.evaluationRepository.delete(U.id);await n.repositories.elementRepository.delete(K.id)}await n.repositories.environmentRepository.delete(Q.id)}await n.repositories.projectRepository.delete(T.id),await s()}function g(T){return new Intl.DateTimeFormat("pt-BR",{dateStyle:"medium"}).format(new Date(T))}return co(s),(T,N)=>(z(),oe(Be,null,[G(lo,{title:"Projetos",description:"Acompanhe seus locais e avaliações."},{action:_e(()=>[A("button",{class:"button",onClick:c},[G(ae(Qt),{size:18,"aria-hidden":"true"}),N[2]||(N[2]=xe("Novo projeto",-1))])]),_:1}),i.value?(z(),oe("form",{key:0,class:"form-card",onSubmit:Mo(m,["prevent"])},[A("label",Yp,[A("span",null,ue(i.value.id?"Nome do projeto":"Novo projeto"),1),An(A("input",{"onUpdate:modelValue":N[0]||(N[0]=w=>t.value=w),required:"",autofocus:""},null,512),[[vt,t.value]]),N[3]||(N[3]=A("span",null,"Descrição",-1)),An(A("input",{"onUpdate:modelValue":N[1]||(N[1]=w=>r.value=w)},null,512),[[vt,r.value]])]),l.value?(z(),oe("p",Wp,ue(l.value),1)):Ie("",!0),A("div",{class:"form-actions"},[A("button",{class:"button button--ghost",type:"button",onClick:u}," Cancelar "),N[4]||(N[4]=A("button",{class:"button",type:"submit"},"Salvar",-1))])],32)):Ie("",!0),o.value.length?(z(),oe("div",Jp,[(z(!0),oe(Be,null,Bn(o.value,w=>(z(),oe("article",{key:w.id,class:"card project-card"},[G(ae(Ee),{class:"card__link",to:`/projects/${w.id}`},{default:_e(()=>[A("span",Qp,[G(ae(Cp),{size:22,"aria-hidden":"true"})]),A("div",null,[A("h2",null,ue(w.name),1),A("p",null,"Atualizado em "+ue(g(w.updatedAt)),1),w.description?(z(),oe("p",Xp,ue(w.description),1)):Ie("",!0)]),G(ae(Jt),{size:20,class:"chevron","aria-hidden":"true"})]),_:2},1032,["to"]),A("div",Zp,[A("button",{class:"text-button",onClick:Q=>d(w)}," Editar ",8,eh),A("button",{class:"icon-button icon-button--danger",title:"Excluir","aria-label":"Excluir",onClick:Q=>p(w)},[G(ae(vr),{size:18,"aria-hidden":"true"})],8,nh)])]))),128))])):(z(),Ve(Vn,{key:2,title:"Comece por um projeto",text:"Organize as avaliações de acessibilidade por obra ou local."},{default:_e(()=>[A("button",{class:"button",onClick:c},[G(ae(Qt),{size:18,"aria-hidden":"true"}),N[5]||(N[5]=xe("Novo projeto",-1))])]),_:1}))],64))}},bt={__name:"StatusBadge",props:{status:{type:String,default:"nao_avaliado"}},setup(e){const n={conforme:"Conforme",nao_conforme:"Não conforme",nao_avaliado:"Pendente",invalido:"Pendente",erro:"Pendente",atencao:"Atenção",manual:"Verificar"};return(o,t)=>(z(),oe("span",{class:cn(["status",`status--${e.status}`])},ue(n[e.status]??"Pendente"),3))}},th={class:"evaluation-summary","aria-labelledby":"evaluation-summary-title"},rh={class:"evaluation-summary__heading"},ah={id:"evaluation-summary-title"},ih={class:"evaluation-summary__score"},lh={class:"evaluation-summary__cards"},sh={class:"evaluation-summary__card evaluation-summary__card--conforme"},ch={class:"evaluation-summary__card evaluation-summary__card--nao_conforme"},uh={class:"evaluation-summary__card evaluation-summary__card--nao_avaliado"},Sc={__name:"EvaluationSummary",props:{summary:{type:Object,required:!0},scope:{type:String,default:"elementos"}},setup(e){const n=e,o=De(()=>n.summary.totalElements?n.summary.overallStatus==="conforme"?"Todos os elementos estão conformes":n.summary.overallStatus==="nao_conforme"?"Há elementos não conformes":"Há elementos pendentes de avaliação":"Nenhum elemento cadastrado");return(t,r)=>(z(),oe("section",th,[A("div",rh,[A("div",null,[A("h2",ah,"Situação do "+ue(e.scope),1),A("p",null,ue(o.value),1)]),A("div",ih,[A("strong",null,ue(e.summary.score)+"%",1),r[0]||(r[0]=A("span",null,"conformes",-1))])]),A("div",lh,[A("div",sh,[r[1]||(r[1]=A("span",null,"Conformes",-1)),A("strong",null,ue(e.summary.conforme),1)]),A("div",ch,[r[2]||(r[2]=A("span",null,"Não conformes",-1)),A("strong",null,ue(e.summary.nao_conforme),1)]),A("div",uh,[r[3]||(r[3]=A("span",null,"Pendentes",-1)),A("strong",null,ue(e.summary.nao_avaliado),1)])]),e.summary.totalElements?(z(),Ve(bt,{key:0,status:e.summary.overallStatus},null,8,["status"])):Ie("",!0)]))}},dh={class:"field"},fh={key:2,class:"card-grid-environment"},mh={class:"card__icon"},ph={class:"card__menu"},hh=["onClick"],vh=["onClick"],gh={__name:"ProjectPage",props:{projectId:String},setup(e){const n=e,o=Ye("services"),t=je(null),r=je([]),i=je(""),l=je(null),s=je(null),c=je(null);async function d(){t.value=await o.projectService.getProject(n.projectId),t.value&&([r.value,s.value]=await Promise.all([o.projectService.listEnvironments(n.projectId),o.evaluationService.getProjectSummary(n.projectId)]))}async function u(){l.value={},i.value="",await lr(),c.value?.scrollIntoView({behavior:"smooth"})}function m(N){l.value=N,i.value=N.name}function p(){l.value=null,i.value=""}async function g(){l.value?.id?await o.projectService.renameEnvironment(l.value.id,i.value):await o.projectService.createEnvironment(n.projectId,{name:i.value}),p(),await d()}async function T(N){if(!window.confirm(`Excluir o ambiente “${N.name}” e seus elementos?`))return;const Q=await o.projectService.listElements(N.id);for(const M of Q){const K=await o.evaluationService.listEvaluations(M.id);for(const C of K)await o.repositories.evaluationRepository.delete(C.id);await o.repositories.elementRepository.delete(M.id)}await o.repositories.environmentRepository.delete(N.id),await d()}return co(d),(N,w)=>t.value?(z(),oe(Be,{key:0},[G(ae(Ee),{class:"back-link",to:"/projects"},{default:_e(()=>[G(ae(No),{size:18,"aria-hidden":"true"}),w[1]||(w[1]=xe("Projetos",-1))]),_:1}),G(lo,{title:t.value.name,description:`${r.value.length} ambiente${r.value.length===1?"":"s"} cadastrado${r.value.length===1?"":"s"}.
      
${t.value.description}`},{action:_e(()=>[A("button",{class:"button",onClick:u},[G(ae(Qt),{size:18,"aria-hidden":"true"}),w[2]||(w[2]=xe("Novo ambiente",-1))])]),_:1},8,["title","description"]),s.value?(z(),Ve(Sc,{key:0,summary:s.value,scope:"projeto"},null,8,["summary"])):Ie("",!0),l.value?(z(),oe("form",{key:1,class:"form-card",onSubmit:Mo(g,["prevent"]),ref_key:"inputCreate",ref:c},[A("label",dh,[w[3]||(w[3]=A("span",null,"Nome do ambiente",-1)),An(A("input",{"onUpdate:modelValue":w[0]||(w[0]=Q=>i.value=Q),required:"",autofocus:""},null,512),[[vt,i.value]])]),A("div",{class:"form-actions"},[A("button",{class:"button button--ghost",type:"button",onClick:p}," Cancelar "),w[4]||(w[4]=A("button",{class:"button",type:"submit"},"Salvar",-1))])],544)):Ie("",!0),r.value.length?(z(),oe("div",fh,[(z(!0),oe(Be,null,Bn(r.value,Q=>(z(),oe("article",{key:Q.id,class:"card-environment"},[G(ae(Ee),{class:"card__link",to:`/projects/${t.value.id}/environments/${Q.id}`},{default:_e(()=>[A("span",mh,[G(ae(kp),{size:22,"aria-hidden":"true"})]),A("div",null,[A("h2",null,ue(Q.name),1),w[5]||(w[5]=A("p",null,"Ambiente",-1))])]),_:2},1032,["to"]),A("div",ph,[A("button",{class:"text-button",onClick:M=>m(Q)}," Editar ",8,hh),A("button",{class:"icon-button icon-button--danger",title:"Excluir","aria-label":"Excluir",onClick:M=>T(Q)},[G(ae(vr),{size:18,"aria-hidden":"true"})],8,vh)])]))),128))])):(z(),Ve(Vn,{key:3,title:"Nenhum ambiente ainda",text:"Adicione espaços como entrada, banheiro ou circulação."},{default:_e(()=>[A("button",{class:"button",onClick:u},[G(ae(Qt),{size:18,"aria-hidden":"true"}),w[6]||(w[6]=xe("Novo ambiente",-1))])]),_:1}))],64)):(z(),Ve(Vn,{key:1,title:"Projeto não encontrado",text:"Ele pode ter sido removido."},{default:_e(()=>[G(ae(Ee),{class:"button",to:"/projects"},{default:_e(()=>[...w[7]||(w[7]=[xe("Voltar aos projetos",-1)])]),_:1})]),_:1}))}},_h={key:1,class:"card-list"},bh={class:"card__icon"},yh={class:"card__menu"},Ah=["onClick"],Nh={__name:"EnvironmentPage",props:{projectId:String,environmentId:String},setup(e){const n=e,o=Ye("services"),t=je(null),r=je(null),i=je([]),l=je(null);async function s(d){if(!window.confirm(`Excluir o elemento ${d.name} e suas avaliações?`))return;const m=await o.evaluationService.listEvaluations(d.id);for(const p of m)await o.repositories.evaluationRepository.delete(p.id);await o.repositories.elementRepository.delete(d.id),await c()}async function c(){if(t.value=await o.repositories.environmentRepository.get(n.environmentId),!t.value)return;r.value=await o.projectService.getProject(t.value.projectId);const d=await o.projectService.listElements(t.value.id),[u,m]=await Promise.all([Promise.all(d.map(async p=>{const g=await o.evaluationService.listEvaluations(p.id);return{element:p,status:Gs(g)}})),o.evaluationService.getEnvironmentSummary(t.value.id)]);i.value=u,l.value=m}return co(c),(d,u)=>t.value?(z(),oe(Be,{key:0},[G(ae(Ee),{class:"back-link",to:`/projects/${t.value.projectId}`},{default:_e(()=>[G(ae(No),{size:18,"aria-hidden":"true"}),xe(ue(r.value?.name??"Projeto"),1)]),_:1},8,["to"]),G(lo,{title:t.value.name,description:"Elementos e situação da última avaliação."},{action:_e(()=>[G(ae(Ee),{class:"button",to:{path:"/elements/new",query:{environmentId:t.value.id}}},{default:_e(()=>[G(ae(xl),{size:18,"aria-hidden":"true"}),u[0]||(u[0]=xe("Adicionar elemento ",-1))]),_:1},8,["to"])]),_:1},8,["title"]),l.value?(z(),Ve(Sc,{key:0,summary:l.value,scope:"ambiente"},null,8,["summary"])):Ie("",!0),i.value.length?(z(),oe("div",_h,[(z(!0),oe(Be,null,Bn(i.value,m=>(z(),oe("article",{key:m.element.id,class:"card card--interactive"},[G(ae(Ee),{class:"card__link",to:`/elements/${m.element.id}`},{default:_e(()=>[A("span",bh,[G(ae(xp),{size:22,"aria-hidden":"true"})]),A("div",null,[A("h2",null,ue(m.element.name),1),A("p",null,ue(m.element.type),1)]),G(bt,{status:m.status},null,8,["status"]),G(ae(Jt),{size:20,class:"chevron","aria-hidden":"true"})]),_:2},1032,["to"]),A("div",yh,[A("button",{class:"icon-button icon-button--danger",title:"Excluir","aria-label":"Excluir",onClick:p=>s(m.element)},[G(ae(vr),{size:18,"aria-hidden":"true"})],8,Ah)])]))),128))])):(z(),Ve(Vn,{key:2,title:"Nenhum elemento ainda",text:"Cadastre portas, rampas, sanitários e outros itens para avaliar."},{default:_e(()=>[G(ae(Ee),{class:"button",to:{path:"/elements/new",query:{environmentId:t.value.id}}},{default:_e(()=>[G(ae(xl),{size:18,"aria-hidden":"true"}),u[1]||(u[1]=xe("Adicionar elemento ",-1))]),_:1},8,["to"])]),_:1}))],64)):(z(),Ve(Vn,{key:1,title:"Ambiente não encontrado",text:"Ele pode ter sido removido."},{default:_e(()=>[G(ae(Ee),{class:"button",to:"/projects"},{default:_e(()=>[...u[2]||(u[2]=[xe("Projetos",-1)])]),_:1})]),_:1}))}};var xh=Object.defineProperty,Bh=Object.defineProperties,Rh=Object.getOwnPropertyDescriptors,Bl=Object.getOwnPropertySymbols,Th=Object.prototype.hasOwnProperty,Sh=Object.prototype.propertyIsEnumerable,Rl=(e,n,o)=>n in e?xh(e,n,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[n]=o,Ro=(e,n)=>{for(var o in n||(n={}))Th.call(n,o)&&Rl(e,o,n[o]);if(Bl)for(var o of Bl(n))Sh.call(n,o)&&Rl(e,o,n[o]);return e},Tl=(e,n)=>Bh(e,Rh(n));const wh={props:{autoscroll:{type:Boolean,default:!0}},watch:{typeAheadPointer(){this.autoscroll&&this.maybeAdjustScroll()},open(e){this.autoscroll&&e&&this.$nextTick(()=>this.maybeAdjustScroll())}},methods:{maybeAdjustScroll(){var e;const n=((e=this.$refs.dropdownMenu)==null?void 0:e.children[this.typeAheadPointer])||!1;if(n){const o=this.getDropdownViewport(),{top:t,bottom:r,height:i}=n.getBoundingClientRect();if(t<o.top)return this.$refs.dropdownMenu.scrollTop=n.offsetTop;if(r>o.bottom)return this.$refs.dropdownMenu.scrollTop=n.offsetTop-(o.height-i)}},getDropdownViewport(){return this.$refs.dropdownMenu?this.$refs.dropdownMenu.getBoundingClientRect():{height:0,top:0,bottom:0}}}},Eh={data(){return{typeAheadPointer:-1}},watch:{filteredOptions(){for(let e=0;e<this.filteredOptions.length;e++)if(this.selectable(this.filteredOptions[e])){this.typeAheadPointer=e;break}},open(e){e&&this.typeAheadToLastSelected()},selectedValue(){this.open&&this.typeAheadToLastSelected()}},methods:{typeAheadUp(){for(let e=this.typeAheadPointer-1;e>=0;e--)if(this.selectable(this.filteredOptions[e])){this.typeAheadPointer=e;break}},typeAheadDown(){for(let e=this.typeAheadPointer+1;e<this.filteredOptions.length;e++)if(this.selectable(this.filteredOptions[e])){this.typeAheadPointer=e;break}},typeAheadSelect(){const e=this.filteredOptions[this.typeAheadPointer];e&&this.selectable(e)&&this.select(e)},typeAheadToLastSelected(){this.typeAheadPointer=this.selectedValue.length!==0?this.filteredOptions.indexOf(this.selectedValue[this.selectedValue.length-1]):-1}}},Ch={props:{loading:{type:Boolean,default:!1}},data(){return{mutableLoading:!1}},watch:{search(){this.$emit("search",this.search,this.toggleLoading)},loading(e){this.mutableLoading=e}},methods:{toggleLoading(e=null){return e==null?this.mutableLoading=!this.mutableLoading:this.mutableLoading=e}}},Va=(e,n)=>{const o=e.__vccOpts||e;for(const[t,r]of n)o[t]=r;return o},Oh={},Ih={xmlns:"http://www.w3.org/2000/svg",width:"10",height:"10"},Ph=A("path",{d:"M6.895455 5l2.842897-2.842898c.348864-.348863.348864-.914488 0-1.263636L9.106534.261648c-.348864-.348864-.914489-.348864-1.263636 0L5 3.104545 2.157102.261648c-.348863-.348864-.914488-.348864-1.263636 0L.261648.893466c-.348864.348864-.348864.914489 0 1.263636L3.104545 5 .261648 7.842898c-.348864.348863-.348864.914488 0 1.263636l.631818.631818c.348864.348864.914773.348864 1.263636 0L5 6.895455l2.842898 2.842897c.348863.348864.914772.348864 1.263636 0l.631818-.631818c.348864-.348864.348864-.914489 0-1.263636L6.895455 5z"},null,-1),kh=[Ph];function Lh(e,n){return z(),oe("svg",Ih,kh)}const jh=Va(Oh,[["render",Lh]]),Dh={},qh={xmlns:"http://www.w3.org/2000/svg",width:"14",height:"10"},Mh=A("path",{d:"M9.211364 7.59931l4.48338-4.867229c.407008-.441854.407008-1.158247 0-1.60046l-.73712-.80023c-.407008-.441854-1.066904-.441854-1.474243 0L7 5.198617 2.51662.33139c-.407008-.441853-1.066904-.441853-1.474243 0l-.737121.80023c-.407008.441854-.407008 1.158248 0 1.600461l4.48338 4.867228L7 10l2.211364-2.40069z"},null,-1),$h=[Mh];function Fh(e,n){return z(),oe("svg",qh,$h)}const Vh=Va(Dh,[["render",Fh]]),Sl={Deselect:jh,OpenIndicator:Vh},zh={mounted(e,{instance:n}){if(n.appendToBody){const{height:o,top:t,left:r,width:i}=n.$refs.toggle.getBoundingClientRect();let l=window.scrollX||window.pageXOffset,s=window.scrollY||window.pageYOffset;e.unbindPosition=n.calculatePosition(e,n,{width:i+"px",left:l+r+"px",top:s+t+o+"px"}),document.body.appendChild(e)}},unmounted(e,{instance:n}){n.appendToBody&&(e.unbindPosition&&typeof e.unbindPosition=="function"&&e.unbindPosition(),e.parentNode&&e.parentNode.removeChild(e))}};function Uh(e){const n={};return Object.keys(e).sort().forEach(o=>{n[o]=e[o]}),JSON.stringify(n)}let Hh=0;function Kh(){return++Hh}const Gh={components:Ro({},Sl),directives:{appendToBody:zh},mixins:[wh,Eh,Ch],compatConfig:{MODE:3},emits:["open","close","update:modelValue","search","search:compositionstart","search:compositionend","search:keydown","search:blur","search:focus","search:input","option:created","option:selecting","option:selected","option:deselecting","option:deselected"],props:{modelValue:{},components:{type:Object,default:()=>({})},options:{type:Array,default(){return[]}},disabled:{type:Boolean,default:!1},clearable:{type:Boolean,default:!0},deselectFromDropdown:{type:Boolean,default:!1},searchable:{type:Boolean,default:!0},multiple:{type:Boolean,default:!1},placeholder:{type:String,default:""},transition:{type:String,default:"vs__fade"},clearSearchOnSelect:{type:Boolean,default:!0},closeOnSelect:{type:Boolean,default:!0},label:{type:String,default:"label"},autocomplete:{type:String,default:"off"},reduce:{type:Function,default:e=>e},selectable:{type:Function,default:e=>!0},getOptionLabel:{type:Function,default(e){return typeof e=="object"?e.hasOwnProperty(this.label)?e[this.label]:console.warn(`[vue-select warn]: Label key "option.${this.label}" does not exist in options object ${JSON.stringify(e)}.
https://vue-select.org/api/props.html#getoptionlabel`):e}},getOptionKey:{type:Function,default(e){if(typeof e!="object")return e;try{return e.hasOwnProperty("id")?e.id:Uh(e)}catch(n){return console.warn(`[vue-select warn]: Could not stringify this option to generate unique key. Please provide'getOptionKey' prop to return a unique key for each option.
https://vue-select.org/api/props.html#getoptionkey`,e,n)}}},onTab:{type:Function,default:function(){this.selectOnTab&&!this.isComposing&&this.typeAheadSelect()}},taggable:{type:Boolean,default:!1},tabindex:{type:Number,default:null},pushTags:{type:Boolean,default:!1},filterable:{type:Boolean,default:!0},filterBy:{type:Function,default(e,n,o){return(n||"").toLocaleLowerCase().indexOf(o.toLocaleLowerCase())>-1}},filter:{type:Function,default(e,n){return e.filter(o=>{let t=this.getOptionLabel(o);return typeof t=="number"&&(t=t.toString()),this.filterBy(o,t,n)})}},createOption:{type:Function,default(e){return typeof this.optionList[0]=="object"?{[this.label]:e}:e}},resetOnOptionsChange:{default:!1,validator:e=>["function","boolean"].includes(typeof e)},clearSearchOnBlur:{type:Function,default:function({clearSearchOnSelect:e,multiple:n}){return e&&!n}},noDrop:{type:Boolean,default:!1},inputId:{type:String},dir:{type:String,default:"auto"},selectOnTab:{type:Boolean,default:!1},selectOnKeyCodes:{type:Array,default:()=>[13]},searchInputQuerySelector:{type:String,default:"[type=search]"},mapKeydown:{type:Function,default:(e,n)=>e},appendToBody:{type:Boolean,default:!1},calculatePosition:{type:Function,default(e,n,{width:o,top:t,left:r}){e.style.top=t,e.style.left=r,e.style.width=o}},dropdownShouldOpen:{type:Function,default({noDrop:e,open:n,mutableLoading:o}){return e?!1:n&&!o}},uid:{type:[String,Number],default:()=>Kh()}},data(){return{search:"",open:!1,isComposing:!1,pushedTags:[],_value:[],deselectButtons:[]}},computed:{isReducingValues(){return this.$props.reduce!==this.$options.props.reduce.default},isTrackingValues(){return typeof this.modelValue>"u"||this.isReducingValues},selectedValue(){let e=this.modelValue;return this.isTrackingValues&&(e=this.$data._value),e!=null&&e!==""?[].concat(e):[]},optionList(){return this.options.concat(this.pushTags?this.pushedTags:[])},searchEl(){return this.$slots.search?this.$refs.selectedOptions.querySelector(this.searchInputQuerySelector):this.$refs.search},scope(){const e={search:this.search,loading:this.loading,searching:this.searching,filteredOptions:this.filteredOptions};return{search:{attributes:Ro({disabled:this.disabled,placeholder:this.searchPlaceholder,tabindex:this.tabindex,readonly:!this.searchable,id:this.inputId,"aria-autocomplete":"list","aria-labelledby":`vs${this.uid}__combobox`,"aria-controls":`vs${this.uid}__listbox`,ref:"search",type:"search",autocomplete:this.autocomplete,value:this.search},this.dropdownOpen&&this.filteredOptions[this.typeAheadPointer]?{"aria-activedescendant":`vs${this.uid}__option-${this.typeAheadPointer}`}:{}),events:{compositionstart:()=>this.isComposing=!0,compositionend:()=>this.isComposing=!1,keydown:this.onSearchKeyDown,blur:this.onSearchBlur,focus:this.onSearchFocus,input:n=>this.search=n.target.value}},spinner:{loading:this.mutableLoading},noOptions:{search:this.search,loading:this.mutableLoading,searching:this.searching},openIndicator:{attributes:{ref:"openIndicator",role:"presentation",class:"vs__open-indicator"}},listHeader:e,listFooter:e,header:Tl(Ro({},e),{deselect:this.deselect}),footer:Tl(Ro({},e),{deselect:this.deselect})}},childComponents(){return Ro(Ro({},Sl),this.components)},stateClasses(){return{"vs--open":this.dropdownOpen,"vs--single":!this.multiple,"vs--multiple":this.multiple,"vs--searching":this.searching&&!this.noDrop,"vs--searchable":this.searchable&&!this.noDrop,"vs--unsearchable":!this.searchable,"vs--loading":this.mutableLoading,"vs--disabled":this.disabled}},searching(){return!!this.search},dropdownOpen(){return this.dropdownShouldOpen(this)},searchPlaceholder(){return this.isValueEmpty&&this.placeholder?this.placeholder:void 0},filteredOptions(){const e=[].concat(this.optionList);if(!this.filterable&&!this.taggable)return e;const n=this.search.length?this.filter(e,this.search,this):e;if(this.taggable&&this.search.length){const o=this.createOption(this.search);this.optionExists(o)||n.unshift(o)}return n},isValueEmpty(){return this.selectedValue.length===0},showClearButton(){return!this.multiple&&this.clearable&&!this.open&&!this.isValueEmpty}},watch:{options(e,n){const o=()=>typeof this.resetOnOptionsChange=="function"?this.resetOnOptionsChange(e,n,this.selectedValue):this.resetOnOptionsChange;!this.taggable&&o()&&this.clearSelection(),this.modelValue&&this.isTrackingValues&&this.setInternalValueFromOptions(this.modelValue)},modelValue:{immediate:!0,handler(e){this.isTrackingValues&&this.setInternalValueFromOptions(e)}},multiple(){this.clearSelection()},open(e){this.$emit(e?"open":"close")}},created(){this.mutableLoading=this.loading},methods:{setInternalValueFromOptions(e){Array.isArray(e)?this.$data._value=e.map(n=>this.findOptionFromReducedValue(n)):this.$data._value=this.findOptionFromReducedValue(e)},select(e){this.$emit("option:selecting",e),this.isOptionSelected(e)?this.deselectFromDropdown&&(this.clearable||this.multiple&&this.selectedValue.length>1)&&this.deselect(e):(this.taggable&&!this.optionExists(e)&&(this.$emit("option:created",e),this.pushTag(e)),this.multiple&&(e=this.selectedValue.concat(e)),this.updateValue(e),this.$emit("option:selected",e)),this.onAfterSelect(e)},deselect(e){this.$emit("option:deselecting",e),this.updateValue(this.selectedValue.filter(n=>!this.optionComparator(n,e))),this.$emit("option:deselected",e)},clearSelection(){this.updateValue(this.multiple?[]:null)},onAfterSelect(e){this.closeOnSelect&&(this.open=!this.open,this.searchEl.blur()),this.clearSearchOnSelect&&(this.search="")},updateValue(e){typeof this.modelValue>"u"&&(this.$data._value=e),e!==null&&(Array.isArray(e)?e=e.map(n=>this.reduce(n)):e=this.reduce(e)),this.$emit("update:modelValue",e)},toggleDropdown(e){const n=e.target!==this.searchEl;n&&e.preventDefault();const o=[...this.deselectButtons||[],this.$refs.clearButton];if(this.searchEl===void 0||o.filter(Boolean).some(t=>t.contains(e.target)||t===e.target)){e.preventDefault();return}this.open&&n?this.searchEl.blur():this.disabled||(this.open=!0,this.searchEl.focus())},isOptionSelected(e){return this.selectedValue.some(n=>this.optionComparator(n,e))},isOptionDeselectable(e){return this.isOptionSelected(e)&&this.deselectFromDropdown},optionComparator(e,n){return this.getOptionKey(e)===this.getOptionKey(n)},findOptionFromReducedValue(e){const n=t=>JSON.stringify(this.reduce(t))===JSON.stringify(e),o=[...this.options,...this.pushedTags].filter(n);return o.length===1?o[0]:o.find(t=>this.optionComparator(t,this.$data._value))||e},closeSearchOptions(){this.open=!1,this.$emit("search:blur")},maybeDeleteValue(){if(!this.searchEl.value.length&&this.selectedValue&&this.selectedValue.length&&this.clearable){let e=null;this.multiple&&(e=[...this.selectedValue.slice(0,this.selectedValue.length-1)]),this.updateValue(e)}},optionExists(e){return this.optionList.some(n=>this.optionComparator(n,e))},normalizeOptionForSlot(e){return typeof e=="object"?e:{[this.label]:e}},pushTag(e){this.pushedTags.push(e)},onEscape(){this.search.length?this.search="":this.searchEl.blur()},onSearchBlur(){if(this.mousedown&&!this.searching)this.mousedown=!1;else{const{clearSearchOnSelect:e,multiple:n}=this;this.clearSearchOnBlur({clearSearchOnSelect:e,multiple:n})&&(this.search=""),this.closeSearchOptions();return}if(this.search.length===0&&this.options.length===0){this.closeSearchOptions();return}},onSearchFocus(){this.open=!0,this.$emit("search:focus")},onMousedown(){this.mousedown=!0},onMouseUp(){this.mousedown=!1},onSearchKeyDown(e){const n=r=>(r.preventDefault(),!this.isComposing&&this.typeAheadSelect()),o={8:r=>this.maybeDeleteValue(),9:r=>this.onTab(),27:r=>this.onEscape(),38:r=>(r.preventDefault(),this.typeAheadUp()),40:r=>(r.preventDefault(),this.typeAheadDown())};this.selectOnKeyCodes.forEach(r=>o[r]=n);const t=this.mapKeydown(o,this);if(typeof t[e.keyCode]=="function")return t[e.keyCode](e)}}},Yh=["dir"],Wh=["id","aria-expanded","aria-owns"],Jh={ref:"selectedOptions",class:"vs__selected-options"},Qh=["disabled","title","aria-label","onClick"],Xh={ref:"actions",class:"vs__actions"},Zh=["disabled"],e0={class:"vs__spinner"},n0=["id"],o0=["id","aria-selected","onMouseover","onClick"],t0={key:0,class:"vs__no-options"},r0=xe(" Sorry, no matching options. "),a0=["id"];function i0(e,n,o,t,r,i){const l=ku("append-to-body");return z(),oe("div",{dir:o.dir,class:cn(["v-select",i.stateClasses])},[hn(e.$slots,"header",Sn(wn(i.scope.header))),A("div",{id:`vs${o.uid}__combobox`,ref:"toggle",class:"vs__dropdown-toggle",role:"combobox","aria-expanded":i.dropdownOpen.toString(),"aria-owns":`vs${o.uid}__listbox`,"aria-label":"Search for option",onMousedown:n[1]||(n[1]=s=>i.toggleDropdown(s))},[A("div",Jh,[(z(!0),oe(Be,null,Bn(i.selectedValue,(s,c)=>hn(e.$slots,"selected-option-container",{option:i.normalizeOptionForSlot(s),deselect:i.deselect,multiple:o.multiple,disabled:o.disabled},()=>[(z(),oe("span",{key:o.getOptionKey(s),class:"vs__selected"},[hn(e.$slots,"selected-option",Sn(wn(i.normalizeOptionForSlot(s))),()=>[xe(ue(o.getOptionLabel(s)),1)]),o.multiple?(z(),oe("button",{key:0,ref_for:!0,ref:d=>r.deselectButtons[c]=d,disabled:o.disabled,type:"button",class:"vs__deselect",title:`Deselect ${o.getOptionLabel(s)}`,"aria-label":`Deselect ${o.getOptionLabel(s)}`,onClick:d=>i.deselect(s)},[(z(),Ve(Nr(i.childComponents.Deselect)))],8,Qh)):Ie("",!0)]))])),256)),hn(e.$slots,"search",Sn(wn(i.scope.search)),()=>[A("input",va({class:"vs__search"},i.scope.search.attributes,Lu(i.scope.search.events)),null,16)])],512),A("div",Xh,[An(A("button",{ref:"clearButton",disabled:o.disabled,type:"button",class:"vs__clear",title:"Clear Selected","aria-label":"Clear Selected",onClick:n[0]||(n[0]=(...s)=>i.clearSelection&&i.clearSelection(...s))},[(z(),Ve(Nr(i.childComponents.Deselect)))],8,Zh),[[vi,i.showClearButton]]),hn(e.$slots,"open-indicator",Sn(wn(i.scope.openIndicator)),()=>[o.noDrop?Ie("",!0):(z(),Ve(Nr(i.childComponents.OpenIndicator),Sn(va({key:0},i.scope.openIndicator.attributes)),null,16))]),hn(e.$slots,"spinner",Sn(wn(i.scope.spinner)),()=>[An(A("div",e0,"Loading...",512),[[vi,e.mutableLoading]])])],512)],40,Wh),G(Rd,{name:o.transition},{default:_e(()=>[i.dropdownOpen?An((z(),oe("ul",{id:`vs${o.uid}__listbox`,ref:"dropdownMenu",key:`vs${o.uid}__listbox`,class:"vs__dropdown-menu",role:"listbox",tabindex:"-1",onMousedown:n[2]||(n[2]=Mo((...s)=>i.onMousedown&&i.onMousedown(...s),["prevent"])),onMouseup:n[3]||(n[3]=(...s)=>i.onMouseUp&&i.onMouseUp(...s))},[hn(e.$slots,"list-header",Sn(wn(i.scope.listHeader))),(z(!0),oe(Be,null,Bn(i.filteredOptions,(s,c)=>(z(),oe("li",{id:`vs${o.uid}__option-${c}`,key:o.getOptionKey(s),role:"option",class:cn(["vs__dropdown-option",{"vs__dropdown-option--deselect":i.isOptionDeselectable(s)&&c===e.typeAheadPointer,"vs__dropdown-option--selected":i.isOptionSelected(s),"vs__dropdown-option--highlight":c===e.typeAheadPointer,"vs__dropdown-option--disabled":!o.selectable(s)}]),"aria-selected":c===e.typeAheadPointer?!0:null,onMouseover:d=>o.selectable(s)?e.typeAheadPointer=c:null,onClick:Mo(d=>o.selectable(s)?i.select(s):null,["prevent","stop"])},[hn(e.$slots,"option",Sn(wn(i.normalizeOptionForSlot(s))),()=>[xe(ue(o.getOptionLabel(s)),1)])],42,o0))),128)),i.filteredOptions.length===0?(z(),oe("li",t0,[hn(e.$slots,"no-options",Sn(wn(i.scope.noOptions)),()=>[r0])])):Ie("",!0),hn(e.$slots,"list-footer",Sn(wn(i.scope.listFooter)))],40,n0)),[[l]]):(z(),oe("ul",{key:1,id:`vs${o.uid}__listbox`,role:"listbox",style:{display:"none",visibility:"hidden"}},null,8,a0))]),_:3},8,["name"]),hn(e.$slots,"footer",Sn(wn(i.scope.footer)))],10,Yh)}const l0=Va(Gh,[["render",i0]]),s0=(e,n)=>{const o=e.__vccOpts||e;for(const[t,r]of n)o[t]=r;return o},c0={class:"ruleset-grid"},u0={class:"field"},d0=["value"],f0={class:"field"},m0={class:"ruleset-option"},p0={class:"ruleset-title"},h0={key:0,class:"ruleset-norma"},v0={key:0,class:"field"},g0={class:"field-name-input"},_0={id:"field-name-input__checkbox"},b0=["disabled"],y0={class:"fields-grid"},A0={key:1},N0={key:2,class:"expected-value"},x0=["onUpdate:modelValue"],B0=["onUpdate:modelValue"],R0=["value"],T0=["onUpdate:modelValue"],S0={class:"form-actions"},w0={__name:"ElementPage",props:{elementId:String,quick:Boolean},setup(e){const n=e,o=Ye("services"),t=Ye("builtInRuleSets"),r=Tc(),i=Rc(),l=je(null),s=je(null),c=je([]),d=je([]),u=je(null),m=je("todas"),p=je(localStorage.getItem("elementAutoName")==="true"),g=At({name:"",ruleSet:"",data:{}}),T=De(()=>!n.elementId),N=De(()=>d.value.find(W=>W.id===g.ruleSet)),w=De(()=>{const W={};for(const D of N.value?.regras??[]){const R=[];D.operador&&D.valor!==void 0&&R.push({...D,parametro:D.parametro});for(const Z of D.condicoes??[])Z.quando&&R.push({...Z.quando,parametro:D.parametro}),Z.verificar&&R.push(Z.verificar);for(const Z of R){if(!Z.parametro||Z.valor===void 0)continue;W[Z.parametro]??=[];const te=Q(Z.operador,Z.valor,N.value.parametros?.[Z.parametro]?.unidade);W[Z.parametro].includes(te)||W[Z.parametro].push(te)}}return W});function Q(W,D,R=""){const te=`${typeof D=="boolean"?D?"Sim":"Não":D}${R??""}`;switch(W){case">=":return`no mínimo, ${te}`;case"<=":return`no máximo, ${te}`;case">":return`maior que ${te}`;case"<":return`menor que ${te}`;case"==":case"eq":return`igual a ${te}`;default:return te}}const M=De(()=>{const W=d.value.map(D=>D.norma?.nome).filter(Boolean);return["todas",...new Set(W)]}),K=De(()=>m.value==="todas"?d.value:d.value.filter(W=>W.norma?.nome===m.value));async function C(){n.quick&&o.quickEvaluationService.clear();const W=await o.ruleSetService.list();d.value=[...t.map(R=>R.ruleSet),...W],T.value||(l.value=await o.repositories.elementRepository.get(n.elementId));const D=l.value?.environmentId??r.query.environmentId;if(!(!n.quick&&(!D||!T.value&&!l.value))){if(n.quick||(s.value=await o.repositories.environmentRepository.get(D),c.value=await o.projectService.listElements(D)),l.value){const R=await o.evaluationService.listEvaluations(l.value.id);u.value=R[0]}g.name=l.value?.name??"",g.ruleSet=r.query.ruleSet??l.value?.rule??d.value[0]?.id??"",Object.assign(g.data,u.value?.data??{})}}function U(){const W={},D=N.value?.parametros??{};for(const[R,Z]of Object.entries(D)){const te=g.data[R];te===""||te===void 0||te===null||(Z.tipo==="number"?W[R]=Number(te):Z.tipo==="boolean"?W[R]=te===!0||te==="true":W[R]=te)}return W}async function re(){if(!N.value)return window.alert("Selecione um conjunto de regras.");const W={name:g.name,type:N.value.nome,rule:N.value.id};try{l.value?await o.projectService.updateElement(l.value.id,W):await o.projectService.createElement(s.value.id,W),i.push(`/projects/${s.value.projectId}/environments/${s.value.id}`)}catch(D){window.alert(D.message)}}function be(W){if(!W)return"";const D=new Set(c.value.filter(te=>te.id!==l.value?.id).map(te=>te.name));if(!D.has(W))return W;let R=1,Z=`${W} (${R})`;for(;D.has(Z);)R++,Z=`${W} (${R})`;return Z}Ao([p,()=>g.ruleSet],([W,D])=>{if(localStorage.setItem("elementAutoName",String(W)),W){const Z=d.value.find(te=>te.id===D)?.nome??"";g.name=be(Z)}});async function Se(){if(!N.value)return window.alert("Selecione um conjunto de regras.");const W=U();if(n.quick){try{o.quickEvaluationService.evaluate({name:g.name,checklist:N.value,data:W}),i.push("/quick-evaluation/result")}catch(R){window.alert(R.message)}return}const D={name:g.name,type:N.value.nome,rule:N.value.id};try{const R=l.value?await o.projectService.updateElement(l.value.id,D):await o.projectService.createElement(s.value.id,D);await o.evaluationService.evaluateElement({elementId:R.id,checklist:N.value,data:W}),i.push(`/elements/${R.id}/evaluation`)}catch(R){window.alert(R.message)}}Ao(m,()=>{K.value.some(D=>D.id===g.ruleSet)||(g.ruleSet=K.value[0]?.id??"")}),Ao(()=>g.ruleSet,()=>{const W=Object.keys(N.value?.parametros??{});Object.keys(g.data).forEach(D=>{W.includes(D)||delete g.data[D]})});function me(W,D,R){const Z=(R||"").toLowerCase().trim();if(!Z)return!0;const te=W.nome?.toLowerCase().includes(Z),Ke=W.norma?.nome?.toLowerCase().includes(Z),J=W.regras?.some(Re=>Re.nome?.toLowerCase().includes(Z)||Re.id?.toLowerCase().includes(Z));return!!(te||Ke||J)}return co(C),(W,D)=>e.quick||s.value?(z(),oe(Be,{key:0},[e.quick?Ie("",!0):(z(),Ve(ae(Ee),{key:0,class:"back-link",to:`/projects/${s.value.projectId}/environments/${s.value.id}`},{default:_e(()=>[G(ae(No),{size:18,"aria-hidden":"true"}),xe(ue(s.value.name),1)]),_:1},8,["to"])),G(lo,{title:e.quick?"Avaliação rápida":T.value?"Novo elemento":l.value.name,description:"Escolha o tipo e informe as medidas observadas."},null,8,["title"]),A("form",{class:"form-card",onSubmit:D[5]||(D[5]=Mo(()=>{},["prevent"]))},[A("div",c0,[A("label",u0,[D[7]||(D[7]=A("span",null,"Norma de referência",-1)),An(A("select",{"onUpdate:modelValue":D[0]||(D[0]=R=>m.value=R)},[D[6]||(D[6]=A("option",{value:"todas"},"Todas as normas",-1)),(z(!0),oe(Be,null,Bn(M.value.filter(R=>R!=="todas"),R=>(z(),oe("option",{key:R,value:R},ue(R),9,d0))),128))],512),[[Er,m.value]])]),A("label",f0,[D[8]||(D[8]=A("span",null,"Tipo de elemento *",-1)),G(ae(l0),{modelValue:g.ruleSet,"onUpdate:modelValue":D[1]||(D[1]=R=>g.ruleSet=R),options:K.value,label:"nome",reduce:R=>R.id,"filter-by":me,placeholder:"Pesquise o elemento ou regra..."},{option:_e(R=>[A("div",m0,[A("span",p0,ue(R.nome),1),R.norma?.nome?(z(),oe("small",h0," ("+ue(R.norma.nome)+") ",1)):Ie("",!0)])]),_:1},8,["modelValue","options","reduce"])])]),e.quick?Ie("",!0):(z(),oe("label",v0,[A("div",g0,[D[9]||(D[9]=A("span",null,"Nome do elemento *",-1)),A("div",_0,[An(A("input",{type:"checkbox",id:"auto-name-chk","onUpdate:modelValue":D[2]||(D[2]=R=>p.value=R)},null,512),[[Yd,p.value]]),A("p",{onClick:D[3]||(D[3]=Mo(R=>p.value=!p.value,["stop"]))},"Auto Nomear")])]),An(A("input",{"onUpdate:modelValue":D[4]||(D[4]=R=>g.name=R),required:"",placeholder:"Ex.: Porta principal",disabled:p.value},null,8,b0),[[vt,g.name]])])),D[14]||(D[14]=A("div",{class:"form-divider"},[A("strong",null,"Dados para avaliação"),A("span",null,"Campos definidos pelo conjunto de regras selecionado.")],-1)),A("div",y0,[(z(!0),oe(Be,null,Bn(N.value?.parametros,(R,Z)=>(z(),oe("label",{key:Z,class:"field"},[A("span",null,[xe(ue(R.label??Z)+" ",1),R.obrigatorio?(z(),oe(Be,{key:0},[xe(" *")],64)):Ie("",!0),R.unidade?(z(),oe("small",A0," ("+ue(R.unidade)+")",1)):Ie("",!0),w.value[Z]?.length?(z(),oe("small",N0," Esperado: "+ue(w.value[Z].join(" ou ")),1)):Ie("",!0)]),R.tipo==="boolean"?An((z(),oe("select",{key:0,"onUpdate:modelValue":te=>g.data[Z]=te},[...D[10]||(D[10]=[A("option",{value:""},"Não informado",-1),A("option",{value:!0},"Sim",-1),A("option",{value:!1},"Não",-1)])],8,x0)),[[Er,g.data[Z]]]):R.tipo==="select"?An((z(),oe("select",{key:1,"onUpdate:modelValue":te=>g.data[Z]=te},[D[11]||(D[11]=A("option",{value:""},"Selecione",-1)),(z(!0),oe(Be,null,Bn(R.opcoes??[],te=>(z(),oe("option",{key:te,value:te},ue(te),9,R0))),128))],8,B0)),[[Er,g.data[Z]]]):An((z(),oe("input",{key:2,"onUpdate:modelValue":te=>g.data[Z]=te,type:"number",inputmode:"decimal",step:"any"},null,8,T0)),[[vt,g.data[Z]]])]))),128))]),A("div",S0,[G(ae(Ee),{class:"button button--ghost",to:e.quick?"/projects":`/projects/${s.value.projectId}/environments/${s.value.id}`},{default:_e(()=>[...D[12]||(D[12]=[xe(" Cancelar ",-1)])]),_:1},8,["to"]),e.quick?Ie("",!0):(z(),oe("button",{key:0,class:"button button--outline",type:"button",onClick:re}," Salvar e voltar ")),A("button",{class:"button",type:"button",onClick:Se},ue(e.quick?"Avaliar":"Salvar e avaliar"),1),T.value?Ie("",!0):(z(),Ve(ae(Ee),{key:1,class:"button button--outline",to:`/elements/${l.value.id}/evaluation`},{default:_e(()=>[G(bt,{status:u.value?"conforme":"nao_avaliado"},null,8,["status"]),D[13]||(D[13]=xe(" Ver resultado ",-1))]),_:1},8,["to"]))])],32)],64)):(z(),Ve(Vn,{key:1,title:"Elemento não encontrado",text:"Volte para o ambiente e tente novamente."},{default:_e(()=>[G(ae(Ee),{class:"button",to:"/projects"},{default:_e(()=>[...D[15]||(D[15]=[xe("Projetos",-1)])]),_:1})]),_:1}))}},ra=s0(w0,[["__scopeId","data-v-091124e6"]]),E0={class:"results"},C0={key:0},O0={key:1,class:"result-values"},I0={key:2},wl={__name:"EvaluationPage",props:{elementId:String,quick:Boolean},setup(e){const n=e,o=Ye("services"),t=je(null),r=je(null),i=De(()=>r.value?.result??[]),l=De(()=>i.value.filter(T=>["nao_conforme","erro","invalido"].includes(T.status)).length),s=De(()=>i.value.filter(T=>["nao_avaliado","manual","atencao"].includes(T.status)).length),c=De(()=>i.value.length-l.value-s.value),d=De(()=>l.value>0?"nao_conforme":s.value>0?"nao_avaliado":"conforme"),u=De(()=>{switch(d.value){case"conforme":return"Elemento conforme";case"nao_conforme":return"Há itens não conformes";default:return"Avaliação pendente"}});function m(T){return T?new Intl.DateTimeFormat("pt-BR",{dateStyle:"medium",timeStyle:"short"}).format(new Date(T)):""}function p(T,N,w=""){const M=`${typeof N=="boolean"?N?"Sim":"Não":N}${w??""}`;switch(T){case">=":return`no mínimo, ${M}`;case"<=":return`no máximo, ${M}`;case">":return`maior que ${M}`;case"<":return`menor que ${M}`;case"==":case"eq":return`igual a ${M}`;default:return M}}async function g(){if(n.quick){const T=o.quickEvaluationService.getCurrent();t.value=T?.element??null,r.value=T?.evaluation??null;return}if(t.value=await o.repositories.elementRepository.get(n.elementId),t.value){const T=await o.evaluationService.listEvaluations(t.value.id);r.value=T[0]??null}}return co(g),(T,N)=>t.value&&r.value?(z(),oe(Be,{key:0},[G(ae(Ee),{class:"back-link",to:e.quick?"/quick-evaluation":`/elements/${t.value.id}`},{default:_e(()=>[G(ae(No),{size:18,"aria-hidden":"true"}),xe(ue(t.value.name),1)]),_:1},8,["to"]),G(lo,{eyebrow:"Resultado",title:"Avaliação",description:`Realizada em ${m(r.value.evaluatedAt)}`},null,8,["description"]),A("section",{class:cn(["result-summary",`result-summary--${d.value}`])},[G(bt,{status:d.value},null,8,["status"]),A("h2",null,ue(u.value),1),A("p",null,ue(c.value)+" regra(s) atendida(s), "+ue(l.value)+" não conforme(s) e "+ue(s.value)+" para verificar. ",1)],2),A("section",E0,[N[1]||(N[1]=A("h2",null,"Regras avaliadas",-1)),(z(!0),oe(Be,null,Bn(i.value,w=>(z(),oe("article",{key:w.id,class:cn(["result-row",`result-row--${w.status}`])},[A("div",null,[G(bt,{status:w.status},null,8,["status"]),A("h3",null,ue(w.nome??w.id),1),w.mensagem?(z(),oe("p",C0,ue(w.mensagem),1)):Ie("",!0),w.valorInformado!==void 0?(z(),oe("p",O0,[N[0]||(N[0]=xe(" Informado: ",-1)),A("strong",null,ue(w.valorInformado),1),w.unidade?(z(),oe(Be,{key:0},[xe(ue(w.unidade),1)],64)):Ie("",!0),w.valorEsperado!==void 0?(z(),oe(Be,{key:1},[xe(" · Esperado: "+ue(p(w.operador,w.valorEsperado,w.unidade)),1)],64)):Ie("",!0)])):Ie("",!0),w.referencia?(z(),oe("small",I0,ue(w.referencia),1)):Ie("",!0)])],2))),128))]),e.quick?(z(),Ve(ae(Ee),{key:0,class:"button",to:"/quick-evaluation"},{default:_e(()=>[...N[2]||(N[2]=[xe(" Nova avaliação rápida ",-1)])]),_:1})):Ie("",!0)],64)):t.value?(z(),oe(Be,{key:1},[G(ae(Ee),{class:"back-link",to:e.quick?"/quick-evaluation":`/elements/${t.value.id}`},{default:_e(()=>[G(ae(No),{size:18,"aria-hidden":"true"}),N[3]||(N[3]=xe("Elemento ",-1))]),_:1},8,["to"]),G(Vn,{title:"Ainda não há avaliação",text:"Preencha os dados do elemento para executar as regras."},{default:_e(()=>[G(ae(Ee),{class:"button",to:e.quick?"/quick-evaluation":`/elements/${t.value.id}`},{default:_e(()=>[xe(ue(e.quick?"Nova avaliação rápida":"Avaliar elemento"),1)]),_:1},8,["to"])]),_:1})],64)):(z(),Ve(Vn,{key:2,title:"Avaliação não encontrada",text:e.quick?"Inicie uma avaliação rápida para ver o resultado.":"O elemento pode ter sido removido."},{default:_e(()=>[G(ae(Ee),{class:"button",to:e.quick?"/quick-evaluation":"/projects"},{default:_e(()=>[xe(ue(e.quick?"Avaliação rápida":"Projetos"),1)]),_:1},8,["to"])]),_:1},8,["text"]))}};function P0(e=""){const n=e.replace(/^(\.\.\/|\.\/|\/)+/,"").split("/");return n.length>1?n.slice(0,-1).join("/"):""}function k0(e,n){const[o]=e,t=o?.norma;return t?.nome?`${t.nome}${t.versao?` · ${t.versao}`:""}`:n.split("/").at(-1)?.replaceAll("-"," ")??"Regras padrão"}function L0(e){const n=new Map;for(const o of e){const t=P0(o.path)||o.ruleSet.id,r=n.get(t)??{id:t,source:"standard",ruleSets:[]};r.ruleSets.push(o.ruleSet),n.set(t,r)}return[...n.values()].map(o=>({...o,nome:k0(o.ruleSets,o.id)})).sort((o,t)=>o.nome.localeCompare(t.nome))}function j0(e){const n=new Map;for(const o of e){const t=o.grupo,r=t?.id??o.id,i=n.get(r)??{id:r,nome:t?.nome??o.nome,source:"user",ruleSets:[]};i.ruleSets.push(o),n.set(r,i)}return[...n.values()].sort((o,t)=>o.nome.localeCompare(t.nome))}const D0={class:"documentation"},q0={class:"documentation__intro"},M0={class:"documentation__icon"},$0=["href"],F0={class:"documentation__section"},V0={key:0,class:"muted",role:"status"},z0={key:0,class:"alert alert--error",role:"alert"},U0={class:"rules-section rules-section--first"},H0={class:"card-list"},K0={class:"rule-source"},G0={key:0,class:"rules-card__actions"},Y0=["onClick"],W0=["onClick"],J0=["onClick"],Q0={class:"import-actions"},X0={class:"button button--outline import-button"},Z0=["disabled"],ev={class:"button button--outline import-button"},nv=["disabled"],ov={key:0,class:"muted",role:"status"},tv={key:1,class:"alert alert--error",role:"alert"},rv={key:2,class:"muted",role:"status"},av={class:"rules-section rules-section--first"},iv={class:"card-list"},lv={class:"card__icon"},sv={class:"rules-section"},cv={key:0,class:"card-list"},uv={class:"card__icon"},aa={__name:"RulesPage",props:{source:String,groupId:String,documentation:Boolean},setup(e){const n=e,o=Ye("services"),t=Ye("builtInRuleSets");Rc();const r=De(()=>"/Extensao-26.2/rule-engine-skill/SKILL.md"),i=je([]),l=je(!0),s=je(!1),c=je(""),d=De(()=>i.value.filter(C=>C.source==="standard")),u=De(()=>i.value.filter(C=>C.source==="user")),m=De(()=>i.value.find(C=>C.source===n.source&&C.id===n.groupId));function p(C){return C.regras?.length??0}function g(C){return Object.keys(C.parametros??{}).length}function T(C){return C.ruleSets.reduce((U,re)=>U+p(re),0)}async function N(){l.value=!0;try{const C=await o.ruleSetService.list();i.value=[...L0(t),...j0(C)]}finally{l.value=!1}}function w(C){return`/rules/${encodeURIComponent(C.source)}/${encodeURIComponent(C.id)}`}async function Q(C){const U=[...C.target.files??[]];if(!U.length)return;const re=U.filter(R=>/\.(json|ya?ml)$/i.test(R.name)),be=U.length-re.length;if(!re.length){c.value="Nenhum arquivo .json, .yaml ou .yml encontrado.",C.target.value="";return}c.value="",s.value=!0;const Se=re[0].webkitRelativePath?.split("/")[0],me={id:`importado-${Se||crypto.randomUUID()}`,nome:Se||(re.length===1?re[0].name.replace(/\.(json|ya?ml)$/i,""):"Regras importadas")},W=[];for(const R of re)try{const Z=await R.text();/\.json$/i.test(R.name)?await o.ruleSetService.importFromJson(Z,me):await o.ruleSetService.importFromYaml(Z,me)}catch(Z){W.push(`${R.name}: ${Z.message}`)}const D=[];W.length&&D.push(re.length===1?W[0]:`${W.length} de ${re.length} arquivo(s) não importado(s) — ${W.join("; ")}`),be&&D.push(`${be} arquivo(s) ignorado(s) por não serem .json/.yaml/.yml.`),c.value=D.join(" "),await N(),C.target.value="",s.value=!1}async function M(C){if(window.confirm(`Excluir "${C.nome}"? Esta ação não pode ser desfeita.`)){c.value="";try{await o.ruleSetService.delete(C.id),await N()}catch(U){c.value=U.message}}}async function K(C,U){try{const re=U==="json"?await o.ruleSetService.exportByIdToJson(C.id):await o.ruleSetService.exportByIdToYaml(C.id),be=U==="json"?"application/json":"text/yaml",Se=document.createElement("a");Se.href=URL.createObjectURL(new Blob([re],{type:be})),Se.download=`${C.id}.${U}`,Se.click(),URL.revokeObjectURL(Se.href)}catch(re){c.value=re.message}}return co(N),(C,U)=>e.documentation?(z(),oe(Be,{key:0},[G(ae(Ee),{class:"back-link",to:"/rules"},{default:_e(()=>[G(ae(No),{size:18,"aria-hidden":"true"}),U[0]||(U[0]=xe("Conjuntos de regras",-1))]),_:1}),G(lo,{eyebrow:"Documentação",title:"Crie e importe regras",description:"Monte checklists em YAML para avaliar os elementos do seu projeto."}),A("div",D0,[U[6]||(U[6]=cd(`<section class="documentation__section"><h2>Formato mínimo de um checklist</h2><p>Cada arquivo é um checklist independente. Os campos obrigatórios são <code>id</code>, <code>nome</code>, <code>parametros</code> (objeto) e <code>regras</code> (lista). YAML e JSON são aceitos.</p><pre class="documentation-code"><code>id: bebedouros
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
      mensagem: Avaliar como rampa.</code></pre><p class="documentation__note"> Se nenhuma condição bater, o resultado fica <code>nao_avaliado</code>. Um parâmetro usado dentro de <code>verificar</code> (aqui, <code>possui_chanfro</code>) também precisa estar declarado em <code>parametros</code>. </p></details></section><section class="documentation__section"><h2>Resultados possíveis</h2><ul class="documentation__list"><li><code>conforme</code> / <code>nao_conforme</code> — comparação direta, ou condição explícita.</li><li><code>manual</code> — regra do tipo <code>checklist</code>.</li><li><code>atencao</code> — resultado explícito opcional numa condição de <code>conditional</code>.</li><li><code>nao_avaliado</code> — parâmetro opcional sem valor, ou nenhuma condição satisfeita.</li><li><code>invalido</code> — parâmetro obrigatório sem valor preenchido.</li></ul></section>`,4)),A("section",q0,[A("span",M0,[G(ae(Sp),{size:24,"aria-hidden":"true"})]),A("div",null,[U[1]||(U[1]=A("h1",null,"Crie suas regras com IA",-1)),A("a",{class:"button button--outline",href:`${r.value}`,download:"SKILL.md"}," Baixar SKILL.md ",8,$0),U[2]||(U[2]=A("p",null,"Um arquivo de texto com instruções prontas para uma IA (Claude, ChatGPT, Cursor) gerar checklists neste formato a partir do que você descrever. Baixe, cole numa conversa com a IA e peça a regra que precisa — sem aprender YAML.",-1))])]),A("section",F0,[U[4]||(U[4]=A("h2",null,"Importação",-1)),U[5]||(U[5]=A("p",null,[xe("Escolha um ou mais arquivos YAML/JSON, ou uma pasta com vários checklists — arquivos que não forem "),A("code",null,".yaml"),xe(", "),A("code",null,".yml"),xe(" ou "),A("code",null,".json"),xe(" são ignorados automaticamente. Tudo fica armazenado somente neste navegador.")],-1)),G(ae(Ee),{class:"button",to:"/rules"},{default:_e(()=>[...U[3]||(U[3]=[xe("Ir para importação",-1)])]),_:1})])])],64)):e.groupId?(z(),oe(Be,{key:1},[G(ae(Ee),{class:"back-link",to:"/rules"},{default:_e(()=>[G(ae(No),{size:18,"aria-hidden":"true"}),U[7]||(U[7]=xe("Conjuntos de regras",-1))]),_:1}),l.value?(z(),oe("p",V0,"Carregando…")):m.value?(z(),oe(Be,{key:1},[G(lo,{eyebrow:e.source==="user"?"Importado":"Padrão",title:m.value.nome,description:`${m.value.ruleSets.length} checklists que compõem este conjunto.`},null,8,["eyebrow","title","description"]),c.value?(z(),oe("p",z0,ue(c.value),1)):Ie("",!0),A("section",U0,[U[8]||(U[8]=A("h2",null,"Checklists",-1)),A("div",H0,[(z(!0),oe(Be,null,Bn(m.value.ruleSets,re=>(z(),oe("article",{key:re.id,class:"card rules-card"},[A("div",null,[A("div",K0,ue(e.source==="user"?"Adicionada por você":"Padrão"),1),A("h2",null,ue(re.nome),1),A("p",null,ue(re.norma?.nome??"Conjunto personalizado"),1),A("small",null,ue(p(re))+" regras · "+ue(g(re))+" campos",1)]),e.source==="user"?(z(),oe("div",G0,[A("button",{class:"text-button",onClick:be=>K(re,"yaml")},"Exportar YAML",8,Y0),A("button",{class:"text-button",onClick:be=>K(re,"json")},"Exportar JSON",8,W0),A("button",{class:"icon-button icon-button--danger",title:"Excluir","aria-label":"Excluir",onClick:be=>M(re)},[G(ae(vr),{size:18,"aria-hidden":"true"})],8,J0)])):Ie("",!0)]))),128))])])],64)):(z(),Ve(Vn,{key:2,title:"Conjunto não encontrado",text:"Ele pode ter sido removido."}))],64)):(z(),oe(Be,{key:2},[G(lo,{eyebrow:"Biblioteca",title:"Conjuntos de regras",description:"Cada pasta ou importação é exibida como um único conjunto."},{action:_e(()=>[A("span",Q0,[G(ae(Ee),{class:"button button--ghost",to:"/rules/documentation"},{default:_e(()=>[...U[9]||(U[9]=[xe("Como criar regras",-1)])]),_:1}),A("label",X0,[U[10]||(U[10]=xe(" Importar arquivos ",-1)),A("input",{type:"file",accept:".json,.yaml,.yml",multiple:"",disabled:s.value,onChange:Q},null,40,Z0)]),A("label",ev,[U[11]||(U[11]=xe(" Importar pasta ",-1)),A("input",{type:"file",accept:".json,.yaml,.yml",webkitdirectory:"",disabled:s.value,onChange:Q},null,40,nv)])])]),_:1}),s.value?(z(),oe("p",ov,"Importando…")):Ie("",!0),c.value?(z(),oe("p",tv,ue(c.value),1)):Ie("",!0),l.value?(z(),oe("p",rv,"Carregando…")):(z(),oe(Be,{key:3},[A("section",av,[U[13]||(U[13]=A("h2",null,"Regras padrão",-1)),A("div",iv,[(z(!0),oe(Be,null,Bn(d.value,re=>(z(),Ve(ae(Ee),{key:re.id,class:"card card--interactive rules-card",to:w(re)},{default:_e(()=>[A("span",lv,[G(ae(Eo),{size:22,"aria-hidden":"true"})]),A("div",null,[U[12]||(U[12]=A("div",{class:"rule-source"},"Padrão",-1)),A("h2",null,ue(re.nome),1),A("p",null,ue(re.ruleSets.length)+" checklists · "+ue(T(re))+" regras",1)]),G(ae(Jt),{size:20,class:"chevron","aria-hidden":"true"})]),_:2},1032,["to"]))),128))])]),A("section",sv,[U[15]||(U[15]=A("h2",null,"Suas regras",-1)),u.value.length?(z(),oe("div",cv,[(z(!0),oe(Be,null,Bn(u.value,re=>(z(),Ve(ae(Ee),{key:re.id,class:"card card--interactive rules-card",to:w(re)},{default:_e(()=>[A("span",uv,[G(ae(Eo),{size:22,"aria-hidden":"true"})]),A("div",null,[U[14]||(U[14]=A("div",{class:"rule-source"},"Adicionada por você",-1)),A("h2",null,ue(re.nome),1),A("p",null,ue(re.ruleSets.length)+" checklists",1)]),G(ae(Jt),{size:20,class:"chevron","aria-hidden":"true"})]),_:2},1032,["to"]))),128))])):(z(),Ve(Vn,{key:1,title:"Nenhum conjunto importado",text:"Importe arquivos ou uma pasta para começar."}))])],64))],64))}},dv=pp({history:Ym("/Extensao-26.2/"),routes:[{path:"/",redirect:"/projects"},{path:"/projects",component:oh},{path:"/projects/:projectId",component:gh,props:!0},{path:"/projects/:projectId/environments/:environmentId",component:Nh,props:!0},{path:"/elements/new",component:ra},{path:"/elements/:elementId",component:ra,props:!0},{path:"/elements/:elementId/evaluation",component:wl,props:!0},{path:"/quick-evaluation",component:ra,props:{quick:!0}},{path:"/quick-evaluation/result",component:wl,props:{quick:!0}},{path:"/rules",component:aa},{path:"/rules/documentation",component:aa,props:{documentation:!0}},{path:"/rules/:source/:groupId",component:aa,props:!0},{path:"/:pathMatch(.*)*",redirect:"/projects"}]});async function fv(){const[e,n]=await Promise.all([kf(),um()]);Zd(Vp).provide("services",e).provide("builtInRuleSets",n).use(dv).mount("#app"),af({immediate:!0})}fv().catch(e=>{document.querySelector("#app").innerHTML=`<main class="fatal-error"><h1>Não foi possível abrir o aplicativo</h1><p>${e.message}</p></main>`});
