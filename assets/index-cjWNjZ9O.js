(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))a(r);new MutationObserver(r=>{for(const t of r)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function o(r){const t={};return r.integrity&&(t.integrity=r.integrity),r.referrerPolicy&&(t.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?t.credentials="include":r.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(r){if(r.ep)return;r.ep=!0;const t=o(r);fetch(r.href,t)}})();function Jt(e){const n=Object.create(null);for(const o of e.split(","))n[o]=1;return o=>o in n}const Me={},Do=[],Un=()=>{},vl=()=>!1,pr=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),fr=e=>e.startsWith("onUpdate:"),en=Object.assign,Qt=(e,n)=>{const o=e.indexOf(n);o>-1&&e.splice(o,1)},fu=Object.prototype.hasOwnProperty,Le=(e,n)=>fu.call(e,n),Ne=Array.isArray,Vo=e=>Ea(e)==="[object Map]",Yo=e=>Ea(e)==="[object Set]",xi=e=>Ea(e)==="[object Date]",Ee=e=>typeof e=="function",ze=e=>typeof e=="string",Dn=e=>typeof e=="symbol",$e=e=>e!==null&&typeof e=="object",hl=e=>($e(e)||Ee(e))&&Ee(e.then)&&Ee(e.catch),gl=Object.prototype.toString,Ea=e=>gl.call(e),vu=e=>Ea(e).slice(8,-1),bl=e=>Ea(e)==="[object Object]",Xt=e=>ze(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,la=Jt(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),vr=e=>{const n=Object.create(null);return(o=>n[o]||(n[o]=e(o)))},hu=/-\w/g,_n=vr(e=>e.replace(hu,n=>n.slice(1).toUpperCase())),gu=/\B([A-Z])/g,bo=vr(e=>e.replace(gu,"-$1").toLowerCase()),hr=vr(e=>e.charAt(0).toUpperCase()+e.slice(1)),Ga=vr(e=>e?`on${hr(e)}`:""),zn=(e,n)=>!Object.is(e,n),Ya=(e,...n)=>{for(let o=0;o<e.length;o++)e[o](...n)},_l=(e,n,o,a=!1)=>{Object.defineProperty(e,n,{configurable:!0,enumerable:!1,writable:a,value:o})},gr=e=>{const n=parseFloat(e);return isNaN(n)?e:n},bu=e=>{const n=ze(e)?Number(e):NaN;return isNaN(n)?e:n};let Bi;const br=()=>Bi||(Bi=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Ca(e){if(Ne(e)){const n={};for(let o=0;o<e.length;o++){const a=e[o],r=ze(a)?Nu(a):Ca(a);if(r)for(const t in r)n[t]=r[t]}return n}else if(ze(e)||$e(e))return e}const _u=/;(?![^(]*\))/g,yu=/:([^]+)/,Au=/\/\*[^]*?\*\//g;function Nu(e){const n={};return e.replace(Au,"").split(_u).forEach(o=>{if(o){const a=o.split(yu);a.length>1&&(n[a[0].trim()]=a[1].trim())}}),n}function nn(e){let n="";if(ze(e))n=e;else if(Ne(e))for(let o=0;o<e.length;o++){const a=nn(e[o]);a&&(n+=a+" ")}else if($e(e))for(const o in e)e[o]&&(n+=o+" ");return n.trim()}function Pn(e){if(!e)return null;let{class:n,style:o}=e;return n&&!ze(n)&&(e.class=nn(n)),o&&(e.style=Ca(o)),e}const xu="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Bu=Jt(xu);function yl(e){return!!e||e===""}function Tu(e,n){if(e.length!==n.length)return!1;let o=!0;for(let a=0;o&&a<e.length;a++)o=Wo(e[a],n[a]);return o}function Wo(e,n){if(e===n)return!0;let o=xi(e),a=xi(n);if(o||a)return o&&a?e.getTime()===n.getTime():!1;if(o=Dn(e),a=Dn(n),o||a)return e===n;if(o=Ne(e),a=Ne(n),o||a)return o&&a?Tu(e,n):!1;if(o=$e(e),a=$e(n),o||a){if(!o||!a)return!1;const r=Object.keys(e).length,t=Object.keys(n).length;if(r!==t)return!1;for(const s in e){const l=e.hasOwnProperty(s),c=n.hasOwnProperty(s);if(l&&!c||!l&&c||!Wo(e[s],n[s]))return!1}}return String(e)===String(n)}function Zt(e,n){return e.findIndex(o=>Wo(o,n))}const Al=e=>!!(e&&e.__v_isRef===!0),ne=e=>ze(e)?e:e==null?"":Ne(e)||$e(e)&&(e.toString===gl||!Ee(e.toString))?Al(e)?ne(e.value):JSON.stringify(e,Nl,2):String(e),Nl=(e,n)=>Al(n)?Nl(e,n.value):Vo(n)?{[`Map(${n.size})`]:[...n.entries()].reduce((o,[a,r],t)=>(o[jr(a,t)+" =>"]=r,o),{})}:Yo(n)?{[`Set(${n.size})`]:[...n.values()].map(o=>jr(o))}:Dn(n)?jr(n):$e(n)&&!Ne(n)&&!bl(n)?String(n):n,jr=(e,n="")=>{var o;return Dn(e)?`Symbol(${(o=e.description)!=null?o:n})`:e};let an;class Ru{constructor(n=!1){this.detached=n,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this._warnOnRun=!0,this.__v_skip=!0,!n&&an&&(an.active?(this.parent=an,this.index=(an.scopes||(an.scopes=[])).push(this)-1):(this._active=!1,this._warnOnRun=!1))}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let n,o;if(this.scopes){const a=this.scopes.slice();for(n=0,o=a.length;n<o;n++)a[n].pause()}for(n=0,o=this.effects.length;n<o;n++)this.effects[n].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let n,o;if(this.scopes){const r=this.scopes.slice();for(n=0,o=r.length;n<o;n++)r[n].resume()}const a=this.effects.slice();for(n=0,o=a.length;n<o;n++)a[n].resume()}}run(n){if(this._active){const o=an;try{return an=this,n()}finally{an=o}}}on(){++this._on===1&&(this.prevScope=an,an=this)}off(){if(this._on>0&&--this._on===0){if(an===this)an=this.prevScope;else{let n=an;for(;n;){if(n.prevScope===this){n.prevScope=this.prevScope;break}n=n.prevScope}}this.prevScope=void 0}}stop(n){if(this._active){this._active=!1;let o,a;for(o=0,a=this.effects.length;o<a;o++)this.effects[o].stop();for(this.effects.length=0,o=0,a=this.cleanups.length;o<a;o++)this.cleanups[o]();if(this.cleanups.length=0,this.scopes){const r=this.scopes.slice();for(o=0,a=r.length;o<a;o++)r[o].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!n){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0}}}function Su(){return an}let Fe;const Dr=new WeakSet;class xl{constructor(n){this.fn=n,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,an&&(an.active?an.effects.push(this):this.flags&=-2)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Dr.has(this)&&(Dr.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Tl(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Ti(this),Rl(this);const n=Fe,o=jn;Fe=this,jn=!0;try{return this.fn()}finally{Sl(this),Fe=n,jn=o,this.flags&=-3}}stop(){if(this.flags&1){for(let n=this.deps;n;n=n.nextDep)oi(n);this.deps=this.depsTail=void 0,Ti(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Dr.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Tt(this)&&this.run()}get dirty(){return Tt(this)}}let Bl=0,ca,ua;function Tl(e,n=!1){if(e.flags|=8,n){e.next=ua,ua=e;return}e.next=ca,ca=e}function ei(){Bl++}function ni(){if(--Bl>0)return;if(ua){let n=ua;for(ua=void 0;n;){const o=n.next;n.next=void 0,n.flags&=-9,n=o}}let e;for(;ca;){let n=ca;for(ca=void 0;n;){const o=n.next;if(n.next=void 0,n.flags&=-9,n.flags&1)try{n.trigger()}catch(a){e||(e=a)}n=o}}if(e)throw e}function Rl(e){for(let n=e.deps;n;n=n.nextDep)n.version=-1,n.prevActiveLink=n.dep.activeLink,n.dep.activeLink=n}function Sl(e){let n,o=e.depsTail,a=o;for(;a;){const r=a.prevDep;a.version===-1?(a===o&&(o=r),oi(a),wu(a)):n=a,a.dep.activeLink=a.prevActiveLink,a.prevActiveLink=void 0,a=r}e.deps=n,e.depsTail=o}function Tt(e){for(let n=e.deps;n;n=n.nextDep)if(n.dep.version!==n.version||n.dep.computed&&(wl(n.dep.computed)||n.dep.version!==n.version))return!0;return!!e._dirty}function wl(e){if(e.flags&4&&!(e.flags&16)||(e.flags&=-17,e.globalVersion===ha)||(e.globalVersion=ha,!e.isSSR&&e.flags&128&&(!e.deps&&!e._dirty||!Tt(e))))return;e.flags|=2;const n=e.dep,o=Fe,a=jn;Fe=e,jn=!0;try{Rl(e);const r=e.fn(e._value);(n.version===0||zn(r,e._value))&&(e.flags|=128,e._value=r,n.version++)}catch(r){throw n.version++,r}finally{Fe=o,jn=a,Sl(e),e.flags&=-3}}function oi(e,n=!1){const{dep:o,prevSub:a,nextSub:r}=e;if(a&&(a.nextSub=r,e.prevSub=void 0),r&&(r.prevSub=a,e.nextSub=void 0),o.subs===e&&(o.subs=a,!a&&o.computed)){o.computed.flags&=-5;for(let t=o.computed.deps;t;t=t.nextDep)oi(t,!0)}!n&&!--o.sc&&o.map&&o.map.delete(o.key)}function wu(e){const{prevDep:n,nextDep:o}=e;n&&(n.nextDep=o,e.prevDep=void 0),o&&(o.prevDep=n,e.nextDep=void 0)}let jn=!0;const El=[];function no(){El.push(jn),jn=!1}function oo(){const e=El.pop();jn=e===void 0?!0:e}function Ti(e){const{cleanup:n}=e;if(e.cleanup=void 0,n){const o=Fe;Fe=void 0;try{n()}finally{Fe=o}}}let ha=0;class Eu{constructor(n,o){this.sub=n,this.dep=o,this.version=o.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class ai{constructor(n){this.computed=n,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(n){if(!Fe||!jn||Fe===this.computed)return;let o=this.activeLink;if(o===void 0||o.sub!==Fe)o=this.activeLink=new Eu(Fe,this),Fe.deps?(o.prevDep=Fe.depsTail,Fe.depsTail.nextDep=o,Fe.depsTail=o):Fe.deps=Fe.depsTail=o,Cl(o);else if(o.version===-1&&(o.version=this.version,o.nextDep)){const a=o.nextDep;a.prevDep=o.prevDep,o.prevDep&&(o.prevDep.nextDep=a),o.prevDep=Fe.depsTail,o.nextDep=void 0,Fe.depsTail.nextDep=o,Fe.depsTail=o,Fe.deps===o&&(Fe.deps=a)}return o}trigger(n){this.version++,ha++,this.notify(n)}notify(n){ei();try{for(let o=this.subs;o;o=o.prevSub)o.sub.notify()&&o.sub.dep.notify()}finally{ni()}}}function Cl(e){if(e.dep.sc++,e.sub.flags&4){const n=e.dep.computed;if(n&&!e.dep.subs){n.flags|=20;for(let a=n.deps;a;a=a.nextDep)Cl(a)}const o=e.dep.subs;o!==e&&(e.prevSub=o,o&&(o.nextSub=e)),e.dep.subs=e}}const Rt=new WeakMap,wo=Symbol(""),St=Symbol(""),ga=Symbol("");function sn(e,n,o){if(jn&&Fe){let a=Rt.get(e);a||Rt.set(e,a=new Map);let r=a.get(o);r||(a.set(o,r=new ai),r.map=a,r.key=o),r.track()}}function Xn(e,n,o,a,r,t){const s=Rt.get(e);if(!s){ha++;return}const l=c=>{c&&c.trigger()};if(ei(),n==="clear")s.forEach(l);else{const c=Ne(e),d=c&&Xt(o);if(c&&o==="length"){const u=Number(a);s.forEach((m,f)=>{(f==="length"||f===ga||!Dn(f)&&f>=u)&&l(m)})}else switch((o!==void 0||s.has(void 0))&&l(s.get(o)),d&&l(s.get(ga)),n){case"add":c?d&&l(s.get("length")):(l(s.get(wo)),Vo(e)&&l(s.get(St)));break;case"delete":c||(l(s.get(wo)),Vo(e)&&l(s.get(St)));break;case"set":Vo(e)&&l(s.get(wo));break}}ni()}function ko(e){const n=De(e);return n===e?n:(sn(n,"iterate",ga),Cn(e)?n:n.map(Vn))}function _r(e){return sn(e=De(e),"iterate",ga),e}function Mn(e,n){return ao(e)?Fo(Eo(e)?Vn(n):n):Vn(n)}const Cu={__proto__:null,[Symbol.iterator](){return Vr(this,Symbol.iterator,e=>Mn(this,e))},concat(...e){return ko(this).concat(...e.map(n=>Ne(n)?ko(n):n))},entries(){return Vr(this,"entries",e=>(e[1]=Mn(this,e[1]),e))},every(e,n){return Gn(this,"every",e,n,void 0,arguments)},filter(e,n){return Gn(this,"filter",e,n,o=>o.map(a=>Mn(this,a)),arguments)},find(e,n){return Gn(this,"find",e,n,o=>Mn(this,o),arguments)},findIndex(e,n){return Gn(this,"findIndex",e,n,void 0,arguments)},findLast(e,n){return Gn(this,"findLast",e,n,o=>Mn(this,o),arguments)},findLastIndex(e,n){return Gn(this,"findLastIndex",e,n,void 0,arguments)},forEach(e,n){return Gn(this,"forEach",e,n,void 0,arguments)},includes(...e){return Lr(this,"includes",e)},indexOf(...e){return Lr(this,"indexOf",e)},join(e){return ko(this).join(e)},lastIndexOf(...e){return Lr(this,"lastIndexOf",e)},map(e,n){return Gn(this,"map",e,n,void 0,arguments)},pop(){return Zo(this,"pop")},push(...e){return Zo(this,"push",e)},reduce(e,...n){return Ri(this,"reduce",e,n)},reduceRight(e,...n){return Ri(this,"reduceRight",e,n)},shift(){return Zo(this,"shift")},some(e,n){return Gn(this,"some",e,n,void 0,arguments)},splice(...e){return Zo(this,"splice",e)},toReversed(){return ko(this).toReversed()},toSorted(e){return ko(this).toSorted(e)},toSpliced(...e){return ko(this).toSpliced(...e)},unshift(...e){return Zo(this,"unshift",e)},values(){return Vr(this,"values",e=>Mn(this,e))}};function Vr(e,n,o){const a=_r(e),r=a[n]();return a!==e&&!Cn(e)&&(r._next=r.next,r.next=()=>{const t=r._next();return t.done||(t.value=o(t.value)),t}),r}const ku=Array.prototype;function Gn(e,n,o,a,r,t){const s=_r(e),l=s!==e&&!Cn(e),c=s[n];if(c!==ku[n]){const m=c.apply(e,t);return l?Vn(m):m}let d=o;s!==e&&(l?d=function(m,f){return o.call(this,Mn(e,m),f,e)}:o.length>2&&(d=function(m,f){return o.call(this,m,f,e)}));const u=c.call(s,d,a);return l&&r?r(u):u}function Ri(e,n,o,a){const r=_r(e),t=r!==e&&!Cn(e);let s=o,l=!1;r!==e&&(t?(l=a.length===0,s=function(d,u,m){return l&&(l=!1,d=Mn(e,d)),o.call(this,d,Mn(e,u),m,e)}):o.length>3&&(s=function(d,u,m){return o.call(this,d,u,m,e)}));const c=r[n](s,...a);return l?Mn(e,c):c}function Lr(e,n,o){const a=De(e);sn(a,"iterate",ga);const r=a[n](...o);return(r===-1||r===!1)&&ii(o[0])?(o[0]=De(o[0]),a[n](...o)):r}function Zo(e,n,o=[]){no(),ei();const a=De(e)[n].apply(e,o);return ni(),oo(),a}const Iu=Jt("__proto__,__v_isRef,__isVue"),kl=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(Dn));function Pu(e){Dn(e)||(e=String(e));const n=De(this);return sn(n,"has",e),n.hasOwnProperty(e)}class Il{constructor(n=!1,o=!1){this._isReadonly=n,this._isShallow=o}get(n,o,a){if(o==="__v_skip")return n.__v_skip;const r=this._isReadonly,t=this._isShallow;if(o==="__v_isReactive")return!r;if(o==="__v_isReadonly")return r;if(o==="__v_isShallow")return t;if(o==="__v_raw")return a===(r?t?zu:Dl:t?jl:Ol).get(n)||Object.getPrototypeOf(n)===Object.getPrototypeOf(a)?n:void 0;const s=Ne(n);if(!r){let c;if(s&&(c=Cu[o]))return c;if(o==="hasOwnProperty")return Pu}const l=Reflect.get(n,o,dn(n)?n:a);if((Dn(o)?kl.has(o):Iu(o))||(r||sn(n,"get",o),t))return l;if(dn(l)){const c=s&&Xt(o)?l:l.value;return r&&$e(c)?Et(c):c}return $e(l)?r?Et(l):ka(l):l}}class Pl extends Il{constructor(n=!1){super(!1,n)}set(n,o,a,r){let t=n[o];const s=Ne(n)&&Xt(o);if(!this._isShallow){const d=ao(t);if(!Cn(a)&&!ao(a)&&(t=De(t),a=De(a)),!s&&dn(t)&&!dn(a))return d||(t.value=a),!0}const l=s?Number(o)<n.length:Le(n,o),c=Reflect.set(n,o,a,dn(n)?n:r);return n===De(r)&&c&&(l?zn(a,t)&&Xn(n,"set",o,a):Xn(n,"add",o,a)),c}deleteProperty(n,o){const a=Le(n,o);n[o];const r=Reflect.deleteProperty(n,o);return r&&a&&Xn(n,"delete",o,void 0),r}has(n,o){const a=Reflect.has(n,o);return(!Dn(o)||!kl.has(o))&&sn(n,"has",o),a}ownKeys(n){return sn(n,"iterate",Ne(n)?"length":wo),Reflect.ownKeys(n)}}class Ou extends Il{constructor(n=!1){super(!0,n)}set(n,o){return!0}deleteProperty(n,o){return!0}}const ju=new Pl,Du=new Ou,Vu=new Pl(!0);const wt=e=>e,$a=e=>Reflect.getPrototypeOf(e);function Lu(e,n,o){return function(...a){const r=this.__v_raw,t=De(r),s=Vo(t),l=e==="entries"||e===Symbol.iterator&&s,c=e==="keys"&&s,d=r[e](...a),u=o?wt:n?Fo:Vn;return!n&&sn(t,"iterate",c?St:wo),en(Object.create(d),{next(){const{value:m,done:f}=d.next();return f?{value:m,done:f}:{value:l?[u(m[0]),u(m[1])]:u(m),done:f}}})}}function qa(e){return function(...n){return e==="delete"?!1:e==="clear"?void 0:this}}function $u(e,n){const o={get(r){const t=this.__v_raw,s=De(t),l=De(r);e||(zn(r,l)&&sn(s,"get",r),sn(s,"get",l));const{has:c}=$a(s),d=n?wt:e?Fo:Vn;if(c.call(s,r))return d(t.get(r));if(c.call(s,l))return d(t.get(l));t!==s&&t.get(r)},get size(){const r=this.__v_raw;return!e&&sn(De(r),"iterate",wo),r.size},has(r){const t=this.__v_raw,s=De(t),l=De(r);return e||(zn(r,l)&&sn(s,"has",r),sn(s,"has",l)),r===l?t.has(r):t.has(r)||t.has(l)},forEach(r,t){const s=this,l=s.__v_raw,c=De(l),d=n?wt:e?Fo:Vn;return!e&&sn(c,"iterate",wo),l.forEach((u,m)=>r.call(t,d(u),d(m),s))}};return en(o,e?{add:qa("add"),set:qa("set"),delete:qa("delete"),clear:qa("clear")}:{add(r){const t=De(this),s=$a(t),l=De(r),c=!n&&!Cn(r)&&!ao(r)?l:r;return s.has.call(t,c)||zn(r,c)&&s.has.call(t,r)||zn(l,c)&&s.has.call(t,l)||(t.add(c),Xn(t,"add",c,c)),this},set(r,t){!n&&!Cn(t)&&!ao(t)&&(t=De(t));const s=De(this),{has:l,get:c}=$a(s);let d=l.call(s,r);d||(r=De(r),d=l.call(s,r));const u=c.call(s,r);return s.set(r,t),d?zn(t,u)&&Xn(s,"set",r,t):Xn(s,"add",r,t),this},delete(r){const t=De(this),{has:s,get:l}=$a(t);let c=s.call(t,r);c||(r=De(r),c=s.call(t,r)),l&&l.call(t,r);const d=t.delete(r);return c&&Xn(t,"delete",r,void 0),d},clear(){const r=De(this),t=r.size!==0,s=r.clear();return t&&Xn(r,"clear",void 0,void 0),s}}),["keys","values","entries",Symbol.iterator].forEach(r=>{o[r]=Lu(r,e,n)}),o}function ri(e,n){const o=$u(e,n);return(a,r,t)=>r==="__v_isReactive"?!e:r==="__v_isReadonly"?e:r==="__v_raw"?a:Reflect.get(Le(o,r)&&r in a?o:a,r,t)}const qu={get:ri(!1,!1)},Mu={get:ri(!1,!0)},Fu={get:ri(!0,!1)};const Ol=new WeakMap,jl=new WeakMap,Dl=new WeakMap,zu=new WeakMap;function Hu(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function ka(e){return ao(e)?e:ti(e,!1,ju,qu,Ol)}function Vl(e){return ti(e,!1,Vu,Mu,jl)}function Et(e){return ti(e,!0,Du,Fu,Dl)}function ti(e,n,o,a,r){if(!$e(e)||e.__v_raw&&!(n&&e.__v_isReactive)||e.__v_skip||!Object.isExtensible(e))return e;const t=r.get(e);if(t)return t;const s=Hu(vu(e));if(s===0)return e;const l=new Proxy(e,s===2?a:o);return r.set(e,l),l}function Eo(e){return ao(e)?Eo(e.__v_raw):!!(e&&e.__v_isReactive)}function ao(e){return!!(e&&e.__v_isReadonly)}function Cn(e){return!!(e&&e.__v_isShallow)}function ii(e){return e?!!e.__v_raw:!1}function De(e){const n=e&&e.__v_raw;return n?De(n):e}function Uu(e){return!Le(e,"__v_skip")&&Object.isExtensible(e)&&_l(e,"__v_skip",!0),e}const Vn=e=>$e(e)?ka(e):e,Fo=e=>$e(e)?Et(e):e;function dn(e){return e?e.__v_isRef===!0:!1}function de(e){return Ll(e,!1)}function Ku(e){return Ll(e,!0)}function Ll(e,n){return dn(e)?e:new Gu(e,n)}class Gu{constructor(n,o){this.dep=new ai,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=o?n:De(n),this._value=o?n:Vn(n),this.__v_isShallow=o}get value(){return this.dep.track(),this._value}set value(n){const o=this._rawValue,a=this.__v_isShallow||Cn(n)||ao(n);n=a?n:De(n),zn(n,o)&&(this._rawValue=n,this._value=a?n:Vn(n),this.dep.trigger())}}function Q(e){return dn(e)?e.value:e}const Yu={get:(e,n,o)=>n==="__v_raw"?e:Q(Reflect.get(e,n,o)),set:(e,n,o,a)=>{const r=e[n];return dn(r)&&!dn(o)?(r.value=o,!0):Reflect.set(e,n,o,a)}};function $l(e){return Eo(e)?e:new Proxy(e,Yu)}class Wu{constructor(n,o,a){this.fn=n,this.setter=o,this._value=void 0,this.dep=new ai(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=ha-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!o,this.isSSR=a}notify(){if(this.flags|=16,!(this.flags&8)&&Fe!==this)return Tl(this,!0),!0}get value(){const n=this.dep.track();return wl(this),n&&(n.version=this.dep.version),this._value}set value(n){this.setter&&this.setter(n)}}function Ju(e,n,o=!1){let a,r;return Ee(e)?a=e:(a=e.get,r=e.set),new Wu(a,r,o)}const Ma={},Qa=new WeakMap;let Bo;function Qu(e,n=!1,o=Bo){if(o){let a=Qa.get(o);a||Qa.set(o,a=[]),a.push(e)}}function Xu(e,n,o=Me){const{immediate:a,deep:r,once:t,scheduler:s,augmentJob:l,call:c}=o,d=F=>r?F:Cn(F)||r===!1||r===0?Zn(F,1):Zn(F);let u,m,f,g,S=!1,x=!1;if(dn(e)?(m=()=>e.value,S=Cn(e)):Eo(e)?(m=()=>d(e),S=!0):Ne(e)?(x=!0,S=e.some(F=>Eo(F)||Cn(F)),m=()=>e.map(F=>{if(dn(F))return F.value;if(Eo(F))return d(F);if(Ee(F))return c?c(F,2):F()})):Ee(e)?n?m=c?()=>c(e,2):e:m=()=>{if(f){no();try{f()}finally{oo()}}const F=Bo;Bo=u;try{return c?c(e,3,[g]):e(g)}finally{Bo=F}}:m=Un,n&&r){const F=m,ve=r===!0?1/0:r;m=()=>Zn(F(),ve)}const C=Su(),T=()=>{u.stop(),C&&C.active&&Qt(C.effects,u)};if(t&&n){const F=n;n=(...ve)=>{const ce=F(...ve);return T(),ce}}let y=x?new Array(e.length).fill(Ma):Ma;const k=F=>{if(!(!(u.flags&1)||!u.dirty&&!F))if(n){const ve=u.run();if(F||r||S||(x?ve.some((ce,oe)=>zn(ce,y[oe])):zn(ve,y))){f&&f();const ce=Bo;Bo=u;try{const oe=[ve,y===Ma?void 0:x&&y[0]===Ma?[]:y,g];y=ve,c?c(n,3,oe):n(...oe)}finally{Bo=ce}}}else u.run()};return l&&l(k),u=new xl(m),u.scheduler=s?()=>s(k,!1):k,g=F=>Qu(F,!1,u),f=u.onStop=()=>{const F=Qa.get(u);if(F){if(c)c(F,4);else for(const ve of F)ve();Qa.delete(u)}},n?a?k(!0):y=u.run():s?s(k.bind(null,!0),!0):u.run(),T.pause=u.pause.bind(u),T.resume=u.resume.bind(u),T.stop=T,T}function Zn(e,n=1/0,o){if(n<=0||!$e(e)||e.__v_skip||(o=o||new Map,(o.get(e)||0)>=n))return e;if(o.set(e,n),n--,dn(e))Zn(e.value,n,o);else if(Ne(e))for(let a=0;a<e.length;a++)Zn(e[a],n,o);else if(Yo(e)||Vo(e))e.forEach(a=>{Zn(a,n,o)});else if(bl(e)){for(const a in e)Zn(e[a],n,o);for(const a of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,a)&&Zn(e[a],n,o)}return e}function Ia(e,n,o,a){try{return a?e(...a):e()}catch(r){yr(r,n,o)}}function kn(e,n,o,a){if(Ee(e)){const r=Ia(e,n,o,a);return r&&hl(r)&&r.catch(t=>{yr(t,n,o)}),r}if(Ne(e)){const r=[];for(let t=0;t<e.length;t++)r.push(kn(e[t],n,o,a));return r}}function yr(e,n,o,a=!0){const r=n?n.vnode:null,{errorHandler:t,throwUnhandledErrorInProduction:s}=n&&n.appContext.config||Me;if(n){let l=n.parent;const c=n.proxy,d=`https://vuejs.org/error-reference/#runtime-${o}`;for(;l;){const u=l.ec;if(u){for(let m=0;m<u.length;m++)if(u[m](e,c,d)===!1)return}l=l.parent}if(t){no(),Ia(t,null,10,[e,c,d]),oo();return}}Zu(e,o,r,a,s)}function Zu(e,n,o,a=!0,r=!1){if(r)throw e;console.error(e)}const bn=[];let qn=-1;const Lo=[];let mo=null,Po=0;const ql=Promise.resolve();let Xa=null;function mn(e){const n=Xa||ql;return e?n.then(this?e.bind(this):e):n}function ed(e){let n=qn+1,o=bn.length;for(;n<o;){const a=n+o>>>1,r=bn[a],t=ba(r);t<e||t===e&&r.flags&2?n=a+1:o=a}return n}function si(e){if(!(e.flags&1)){const n=ba(e),o=bn[bn.length-1];!o||!(e.flags&2)&&n>=ba(o)?bn.push(e):bn.splice(ed(n),0,e),e.flags|=1,Ml()}}function Ml(){Xa||(Xa=ql.then(zl))}function nd(e){if(!Ne(e))mo&&e.id===-1?mo.splice(Po+1,0,e):e.flags&1||(Lo.push(e),e.flags|=1);else for(let n=0;n<e.length;n++)Lo.push(e[n]);Ml()}function Si(e,n,o=qn+1){for(;o<bn.length;o++){const a=bn[o];if(a&&a.flags&2){if(e&&a.id!==e.uid)continue;bn.splice(o,1),o--,a.flags&4&&(a.flags&=-2),a(),a.flags&4||(a.flags&=-2)}}}function Fl(e){if(Lo.length){const n=[...new Set(Lo)].sort((o,a)=>ba(o)-ba(a));if(Lo.length=0,mo){for(let o=0;o<n.length;o++)mo.push(n[o]);return}for(mo=n,Po=0;Po<mo.length;Po++){const o=mo[Po];o.flags&4&&(o.flags&=-2),o.flags&8||o(),o.flags&=-2}mo=null,Po=0}}const ba=e=>e.id==null?e.flags&2?-1:1/0:e.id;function zl(e){try{for(qn=0;qn<bn.length;qn++){const n=bn[qn];n&&!(n.flags&8)&&(n.flags&4&&(n.flags&=-2),Ia(n,n.i,n.i?15:14),n.flags&4||(n.flags&=-2))}}finally{for(;qn<bn.length;qn++){const n=bn[qn];n&&(n.flags&=-2)}qn=-1,bn.length=0,Fl(),Xa=null,(bn.length||Lo.length)&&zl()}}let rn=null,Hl=null;function Za(e){const n=rn;return rn=e,Hl=e&&e.type.__scopeId||null,n}function _e(e,n=rn,o){if(!n||e._n)return e;const a=(...r)=>{a._d&&ar(-1);const t=Za(n),s=eo.length;let l;try{l=e(...r)}finally{for(let c=eo.length;c>s;c--)mi();Za(t),a._d&&ar(1)}return l};return a._n=!0,a._c=!0,a._d=!0,a}function xn(e,n){if(rn===null)return e;const o=Sr(rn),a=e.dirs||(e.dirs=[]);for(let r=0;r<n.length;r++){let[t,s,l,c=Me]=n[r];t&&(Ee(t)&&(t={mounted:t,updated:t}),t.deep&&Zn(s),a.push({dir:t,instance:o,value:s,oldValue:void 0,arg:l,modifiers:c}))}return e}function _o(e,n,o,a){const r=e.dirs,t=n&&n.dirs;for(let s=0;s<r.length;s++){const l=r[s];t&&(l.oldValue=t[s].value);let c=l.dir[a];c&&(no(),kn(c,o,8,[e.el,l,e,n]),oo())}}function da(e,n){if(cn){let o=cn.provides;const a=cn.parent&&cn.parent.provides;a===o&&(o=cn.provides=Object.create(a)),o[e]=n}}function qe(e,n,o=!1){const a=pi();if(a||Mo){let r=Mo?Mo._context.provides:a?a.parent==null||a.ce?a.vnode.appContext&&a.vnode.appContext.provides:a.parent.provides:void 0;if(r&&e in r)return r[e];if(arguments.length>1)return o&&Ee(n)?n.call(a&&a.proxy):n}}const od=Symbol.for("v-scx"),ad=()=>qe(od);function vo(e,n,o){return Ul(e,n,o)}function Ul(e,n,o=Me){const{immediate:a,deep:r,flush:t,once:s}=o,l=en({},o),c=n&&a||!n&&t!=="post";let d;if(xa){if(t==="sync"){const g=ad();d=g.__watcherHandles||(g.__watcherHandles=[])}else if(!c){const g=()=>{};return g.stop=Un,g.resume=Un,g.pause=Un,g}}const u=cn;l.call=(g,S,x)=>kn(g,u,S,x);let m=!1;t==="post"?l.scheduler=g=>{fn(g,u&&u.suspense)}:t!=="sync"&&(m=!0,l.scheduler=(g,S)=>{S?g():si(g)}),l.augmentJob=g=>{n&&(g.flags|=4),m&&(g.flags|=2,u&&(g.id=u.uid,g.i=u))};const f=Xu(e,n,l);return xa&&(d?d.push(f):c&&f()),f}function rd(e,n,o){const a=this.proxy,r=ze(e)?e.includes(".")?Kl(a,e):()=>a[e]:e.bind(a,a);let t;Ee(n)?t=n:(t=n.handler,o=n);const s=Pa(this),l=Ul(r,t.bind(a),o);return s(),l}function Kl(e,n){const o=n.split(".");return()=>{let a=e;for(let r=0;r<o.length&&a;r++)a=a[o[r]];return a}}const uo=new WeakMap,Gl=Symbol("_vte"),Ar=e=>e.__isTeleport,To=e=>e&&(e.disabled||e.disabled===""),td=e=>e&&(e.defer||e.defer===""),wi=e=>typeof SVGElement<"u"&&e instanceof SVGElement,Ei=e=>typeof MathMLElement=="function"&&e instanceof MathMLElement,Ct=(e,n)=>{const o=e&&e.to;return ze(o)?n?n(o):null:o},id={name:"Teleport",__isTeleport:!0,process(e,n,o,a,r,t,s,l,c,d){const{mc:u,pc:m,pbc:f,o:{insert:g,querySelector:S,createText:x,createComment:C,parentNode:T}}=d,y=To(n.props);let{dynamicChildren:k}=n;const F=(oe,G,R)=>{oe.shapeFlag&16&&u(oe.children,G,R,r,t,s,l,c)},ve=(oe=n)=>{const G=To(oe.props),R=oe.target=Ct(oe.props,S),J=kt(R,oe,x,g);R&&(s!=="svg"&&wi(R)?s="svg":s!=="mathml"&&Ei(R)&&(s="mathml"),r&&r.isCE&&(r.ce._teleportTargets||(r.ce._teleportTargets=new Set)).add(R),G||(F(oe,R,J),ta(oe,!1)))},ce=oe=>{const G=()=>{if(uo.get(oe)===G){if(uo.delete(oe),To(oe.props)){const R=T(oe.el)||o;F(oe,R,oe.anchor),ta(oe,!0)}ve(oe)}};uo.set(oe,G),fn(G,t)};if(e==null){const oe=n.el=x(""),G=n.anchor=x("");if(g(oe,o,a),g(G,o,a),td(n.props)||t&&t.pendingBranch){ce(n);return}y&&(F(n,o,G),ta(n,!0)),ve()}else{n.el=e.el;const oe=n.anchor=e.anchor,G=uo.get(e);if(G){G.flags|=8,uo.delete(e),ce(n);return}n.targetStart=e.targetStart;const R=n.target=e.target,J=n.targetAnchor=e.targetAnchor,te=To(e.props),I=te?o:R,q=te?oe:J;if(s==="svg"||wi(R)?s="svg":(s==="mathml"||Ei(R))&&(s="mathml"),k?(f(e.dynamicChildren,k,I,r,t,s,l),di(e,n,!0)):c||m(e,n,I,q,r,t,s,l,!1),y)te?n.props&&e.props&&n.props.to!==e.props.to&&(n.props.to=e.props.to):Fa(n,o,oe,d,1);else if((n.props&&n.props.to)!==(e.props&&e.props.to)){const j=Ct(n.props,S);j&&(n.target=j,Fa(n,j,null,d,0))}else te&&Fa(n,R,J,d,1);ta(n,y)}},remove(e,n,o,{um:a,o:{remove:r}},t){const{shapeFlag:s,children:l,anchor:c,targetStart:d,targetAnchor:u,target:m,props:f}=e,g=To(f),S=t||!g,x=uo.get(e);if(x&&(x.flags|=8,uo.delete(e)),m&&(r(d),r(u)),t&&r(c),!x&&(g||m)&&s&16)for(let C=0;C<l.length;C++){const T=l[C];a(T,n,o,S,!!T.dynamicChildren)}},move:Fa,hydrate:sd};function Fa(e,n,o,{o:{insert:a},m:r},t=2){t===0&&a(e.targetAnchor,n,o);const{el:s,anchor:l,shapeFlag:c,children:d,props:u}=e,m=t===2;if(m&&a(s,n,o),!uo.has(e)&&(!m||To(u))&&c&16)for(let f=0;f<d.length;f++)r(d[f],n,o,2);m&&a(l,n,o)}function sd(e,n,o,a,r,t,{o:{nextSibling:s,parentNode:l,querySelector:c,insert:d,createText:u}},m){function f(C,T){let y=T;for(;y;){if(y&&y.nodeType===8){if(y.data==="teleport start anchor")n.targetStart=y;else if(y.data==="teleport anchor"){n.targetAnchor=y,C._lpa=n.targetAnchor&&s(n.targetAnchor);break}}y=s(y)}}function g(C,T){T.anchor=m(s(C),T,l(C),o,a,r,t)}const S=n.target=Ct(n.props,c),x=To(n.props);if(S){const C=S._lpa||S.firstChild;n.shapeFlag&16&&(x?(g(e,n),f(S,C),n.targetAnchor||kt(S,n,u,d,l(e)===S?e:null)):(n.anchor=s(e),f(S,C),n.targetAnchor||kt(S,n,u,d),m(C&&s(C),n,S,o,a,r,t))),ta(n,x)}else x&&n.shapeFlag&16&&(g(e,n),n.targetStart=e,n.targetAnchor=s(e));return n.anchor&&s(n.anchor)}const Nr=id;function ta(e,n){const o=e.ctx;if(o&&o.ut){let a,r;for(n?(a=e.el,r=e.anchor):(a=e.targetStart,r=e.targetAnchor);a&&a!==r;)a.nodeType===1&&a.setAttribute("data-v-owner",o.uid),a=a.nextSibling;o.ut()}}function kt(e,n,o,a,r=null){const t=n.targetStart=o(""),s=n.targetAnchor=o("");return t[Gl]=s,e&&(a(t,e,r),a(s,e,r)),s}const Sn=Symbol("_leaveCb"),ea=Symbol("_enterCb");function ld(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return An(()=>{e.isMounted=!0}),Jo(()=>{e.isUnmounting=!0}),e}const Rn=[Function,Array],Yl={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Rn,onEnter:Rn,onAfterEnter:Rn,onEnterCancelled:Rn,onBeforeLeave:Rn,onLeave:Rn,onAfterLeave:Rn,onLeaveCancelled:Rn,onBeforeAppear:Rn,onAppear:Rn,onAfterAppear:Rn,onAppearCancelled:Rn},Wl=e=>{const n=e.subTree;return n.component?Wl(n.component):n},cd={name:"BaseTransition",props:Yl,setup(e,{slots:n}){const o=pi(),a=ld();return()=>{const r=n.default&&Xl(n.default(),!0),t=r&&r.length?Jl(r):o.subTree?pe():void 0;if(!t)return;const s=De(e),{mode:l}=s;if(a.isLeaving)return $r(t);const c=er(t);if(!c)return $r(t);let d=It(c,s,a,o,m=>d=m);c.type!==ln&&_a(c,d);let u=o.subTree&&er(o.subTree);if(u&&u.type!==ln&&!Ro(u,c)&&Wl(o).type!==ln){let m=It(u,s,a,o);if(_a(u,m),l==="out-in"&&c.type!==ln)return a.isLeaving=!0,m.afterLeave=()=>{a.isLeaving=!1,o.job.flags&8||o.update(),delete m.afterLeave,u=void 0},$r(t);l==="in-out"&&c.type!==ln?m.delayLeave=(f,g,S)=>{const x=Ql(a,u);x[String(u.key)]=u,f[Sn]=()=>{g(),f[Sn]=void 0,delete d.delayedLeave,u=void 0},d.delayedLeave=()=>{S(),delete d.delayedLeave,u=void 0}}:u=void 0}else u&&(u=void 0);return t}}};function Jl(e){let n=e[0];if(e.length>1){for(const o of e)if(o.type!==ln){n=o;break}}return n}const ud=cd;function Ql(e,n){const{leavingVNodes:o}=e;let a=o.get(n.type);return a||(a=Object.create(null),o.set(n.type,a)),a}function It(e,n,o,a,r){const{appear:t,mode:s,persisted:l=!1,onBeforeEnter:c,onEnter:d,onAfterEnter:u,onEnterCancelled:m,onBeforeLeave:f,onLeave:g,onAfterLeave:S,onLeaveCancelled:x,onBeforeAppear:C,onAppear:T,onAfterAppear:y,onAppearCancelled:k}=n,F=String(e.key),ve=Ql(o,e),ce=(R,J)=>{R&&kn(R,a,9,J)},oe=(R,J)=>{const te=J[1];ce(R,J),Ne(R)?R.every(I=>I.length<=1)&&te():R.length<=1&&te()},G={mode:s,persisted:l,beforeEnter(R){let J=c;if(!o.isMounted)if(t)J=C||c;else return;R[Sn]&&R[Sn](!0);const te=ve[F];te&&Ro(e,te)&&te.el[Sn]&&te.el[Sn](),ce(J,[R])},enter(R){if(ve[F]===e)return;let J=d,te=u,I=m;if(!o.isMounted)if(t)J=T||d,te=y||u,I=k||m;else return;let q=!1;R[ea]=re=>{q||(q=!0,re?ce(I,[R]):ce(te,[R]),G.delayedLeave&&G.delayedLeave(),R[ea]=void 0)};const j=R[ea].bind(null,!1);J?oe(J,[R,j]):j()},leave(R,J){const te=String(e.key);if(R[ea]&&R[ea](!0),o.isUnmounting)return J();ce(f,[R]);let I=!1;R[Sn]=j=>{I||(I=!0,J(),j?ce(x,[R]):ce(S,[R]),R[Sn]=void 0,ve[te]===e&&delete ve[te])};const q=R[Sn].bind(null,!1);ve[te]=e,g?oe(g,[R,q]):q()},clone(R){const J=It(R,n,o,a,r);return r&&r(J),J}};return G}function $r(e){if(xr(e))return e=ho(e),e.children=null,e}function er(e){if(!xr(e))return Ar(e.type)&&e.children?Jl(e.children):e;if(e.component)return e.component.subTree;const{shapeFlag:n,children:o}=e;if(o){if(n&16)return o[0];if(n&32&&Ee(o.default))return o.default()}}function _a(e,n){if(e.shapeFlag&6&&e.component){e.transition=n;const o=e.component.subTree;_a(Ar(o.type)&&er(o)||o,n)}else e.shapeFlag&128?(e.ssContent.transition=n.clone(e.ssContent),e.ssFallback.transition=n.clone(e.ssFallback)):e.transition=n}function Xl(e,n=!1,o){let a=[],r=0;for(let t=0;t<e.length;t++){let s=e[t];const l=o==null?s.key:String(o)+String(s.key!=null?s.key:t);s.type===Re?(s.patchFlag&128&&r++,a=a.concat(Xl(s.children,n,l))):(n||s.type!==ln)&&a.push(l!=null?ho(s,{key:l}):s)}if(r>1)for(let t=0;t<a.length;t++)a[t].patchFlag=-2;return a}function Zl(e,n){return Ee(e)?en({name:e.name},n,{setup:e}):e}function dd(){const e=pi();return e?(e.appContext.config.idPrefix||"v")+"-"+e.ids[0]+e.ids[1]++:""}function ec(e){e.ids=[e.ids[0]+e.ids[2]+++"-",0,0]}function Ci(e,n){let o;return!!((o=Object.getOwnPropertyDescriptor(e,n))&&!o.configurable)}const nr=new WeakMap;function ma(e,n,o,a,r=!1){if(Ne(e)){e.forEach((x,C)=>ma(x,n&&(Ne(n)?n[C]:n),o,a,r));return}if($o(a)&&!r){a.shapeFlag&512&&a.type.__asyncResolved&&a.component.subTree.component&&ma(e,n,o,a.component.subTree);return}const t=a.shapeFlag&4?Sr(a.component):a.el,s=r?null:t,{i:l,r:c}=e,d=n&&n.r,u=l.refs===Me?l.refs={}:l.refs,m=l.setupState,f=De(m),g=m===Me?vl:x=>Ci(u,x)?!1:Le(f,x),S=(x,C)=>!(C&&Ci(u,C));if(d!=null&&d!==c){if(ki(n),ze(d))u[d]=null,g(d)&&(m[d]=null);else if(dn(d)){const x=n;S(d,x.k)&&(d.value=null),x.k&&(u[x.k]=null)}}if(Ee(c))Ia(c,l,12,[s,u]);else{const x=ze(c),C=dn(c);if(x||C){const T=()=>{if(e.f){const y=x?g(c)?m[c]:u[c]:S()||!e.k?c.value:u[e.k];if(r)Ne(y)&&Qt(y,t);else if(Ne(y))y.includes(t)||y.push(t);else if(x)u[c]=[t],g(c)&&(m[c]=u[c]);else{const k=[t];S(c,e.k)&&(c.value=k),e.k&&(u[e.k]=k)}}else x?(u[c]=s,g(c)&&(m[c]=s)):C&&(S(c,e.k)&&(c.value=s),e.k&&(u[e.k]=s))};if(s){const y=()=>{T(),nr.delete(e)};y.id=-1,nr.set(e,y),fn(y,o)}else ki(e),T()}}}function ki(e){const n=nr.get(e);n&&(n.flags|=8,nr.delete(e))}br().requestIdleCallback;br().cancelIdleCallback;const $o=e=>!!e.type.__asyncLoader,xr=e=>e.type.__isKeepAlive;function md(e,n){nc(e,"a",n)}function pd(e,n){nc(e,"da",n)}function nc(e,n,o=cn){const a=e.__wdc||(e.__wdc=()=>{let r=o;for(;r;){if(r.isDeactivated)return;r=r.parent}return e()});if(Br(n,a,o),o){let r=o.parent;for(;r&&r.parent;)xr(r.parent.vnode)&&fd(a,n,o,r),r=r.parent}}function fd(e,n,o,a){const r=Br(n,e,a,!0);li(()=>{Qt(a[n],r)},o)}function Br(e,n,o=cn,a=!1){if(o){const r=o[e]||(o[e]=[]),t=n.__weh||(n.__weh=(...s)=>{no();const l=Pa(o),c=kn(n,o,e,s);return l(),oo(),c});return a?r.unshift(t):r.push(t),t}}const to=e=>(n,o=cn)=>{(!xa||e==="sp")&&Br(e,(...a)=>n(...a),o)},vd=to("bm"),An=to("m"),hd=to("bu"),gd=to("u"),Jo=to("bum"),li=to("um"),bd=to("sp"),_d=to("rtg"),yd=to("rtc");function Ad(e,n=cn){Br("ec",e,n)}const oc="components",Nd="directives",ac=Symbol.for("v-ndc");function qo(e){return ze(e)?rc(oc,e,!1)||e:e||ac}function xd(e){return rc(Nd,e)}function rc(e,n,o=!0,a=!1){const r=rn||cn;if(r){const t=r.type;if(e===oc){const l=im(t,!1);if(l&&(l===n||l===_n(n)||l===hr(_n(n))))return t}const s=Ii(r[e]||t[e],n)||Ii(r.appContext[e],n);return!s&&a?t:s}}function Ii(e,n){return e&&(e[n]||e[_n(n)]||e[hr(_n(n))])}function Ze(e,n,o,a){let r;const t=o,s=Ne(e);if(s||ze(e)){const l=s&&Eo(e);let c=!1,d=!1;l&&(c=!Cn(e),d=ao(e),e=_r(e)),r=new Array(e.length);for(let u=0,m=e.length;u<m;u++)r[u]=n(c?d?Fo(Vn(e[u])):Vn(e[u]):e[u],u,void 0,t)}else if(typeof e=="number"){r=new Array(e);for(let l=0;l<e;l++)r[l]=n(l+1,l,void 0,t)}else if($e(e))if(e[Symbol.iterator])r=Array.from(e,(l,c)=>n(l,c,void 0,t));else{const l=Object.keys(e);r=new Array(l.length);for(let c=0,d=l.length;c<d;c++){const u=l[c];r[c]=n(e[u],u,c,t)}}else r=[];return r}function vn(e,n,o,a,r,t){if(o==null&&(o={}),rn.ce||rn.parent&&$o(rn.parent)&&rn.parent.ce){const d=o,u=Object.keys(d).length>0;return n!=="default"&&(d.name=n),B(),Ce(Re,null,[H("slot",d,a&&a())],u?-2:64)}let s=e[n];s&&s._c&&(s._d=!1);const l=eo.length;B();let c;try{const d=s&&tc(s(o)),u=o.key||t||d&&d.key;c=Ce(Re,{key:(u&&!Dn(u)?u:`_${n}`)+(!d&&a?"_fb":"")},d||(a?a():[]),d&&e._===1?64:-2)}catch(d){for(let u=eo.length;u>l;u--)mi();throw d}finally{s&&s._c&&(s._d=!0)}return c.scopeId&&(c.slotScopeIds=[c.scopeId+"-s"]),c}function tc(e){return e.some(n=>Aa(n)?!(n.type===ln||n.type===Re&&!tc(n.children)):!0)?e:null}function Bd(e,n){const o={};for(const a in e)o[Ga(a)]=e[a];return o}const Pt=e=>e?Bc(e)?Sr(e):Pt(e.parent):null,pa=en(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Pt(e.parent),$root:e=>Pt(e.root),$host:e=>e.ce,$emit:e=>e.emit,$options:e=>sc(e),$forceUpdate:e=>e.f||(e.f=()=>{si(e.update)}),$nextTick:e=>e.n||(e.n=mn.bind(e.proxy)),$watch:e=>rd.bind(e)}),qr=(e,n)=>e!==Me&&!e.__isScriptSetup&&Le(e,n),Td={get({_:e},n){if(n==="__v_skip")return!0;const{ctx:o,setupState:a,data:r,props:t,accessCache:s,type:l,appContext:c}=e;if(n[0]!=="$"){const f=s[n];if(f!==void 0)switch(f){case 1:return a[n];case 2:return r[n];case 4:return o[n];case 3:return t[n]}else{if(qr(a,n))return s[n]=1,a[n];if(r!==Me&&Le(r,n))return s[n]=2,r[n];if(Le(t,n))return s[n]=3,t[n];if(o!==Me&&Le(o,n))return s[n]=4,o[n];Ot&&(s[n]=0)}}const d=pa[n];let u,m;if(d)return n==="$attrs"&&sn(e.attrs,"get",""),d(e);if((u=l.__cssModules)&&(u=u[n]))return u;if(o!==Me&&Le(o,n))return s[n]=4,o[n];if(m=c.config.globalProperties,Le(m,n))return m[n]},set({_:e},n,o){const{data:a,setupState:r,ctx:t}=e;return qr(r,n)?(r[n]=o,!0):a!==Me&&Le(a,n)?(a[n]=o,!0):Le(e.props,n)||n[0]==="$"&&n.slice(1)in e?!1:(t[n]=o,!0)},has({_:{data:e,setupState:n,accessCache:o,ctx:a,appContext:r,props:t,type:s}},l){let c;return!!(o[l]||e!==Me&&l[0]!=="$"&&Le(e,l)||qr(n,l)||Le(t,l)||Le(a,l)||Le(pa,l)||Le(r.config.globalProperties,l)||(c=s.__cssModules)&&c[l])},defineProperty(e,n,o){return o.get!=null?e._.accessCache[n]=0:Le(o,"value")&&this.set(e,n,o.value,null),Reflect.defineProperty(e,n,o)}};function Pi(e){return Ne(e)?e.reduce((n,o)=>(n[o]=null,n),{}):e}let Ot=!0;function Rd(e){const n=sc(e),o=e.proxy,a=e.ctx;Ot=!1,n.beforeCreate&&Oi(n.beforeCreate,e,"bc");const{data:r,computed:t,methods:s,watch:l,provide:c,inject:d,created:u,beforeMount:m,mounted:f,beforeUpdate:g,updated:S,activated:x,deactivated:C,beforeDestroy:T,beforeUnmount:y,destroyed:k,unmounted:F,render:ve,renderTracked:ce,renderTriggered:oe,errorCaptured:G,serverPrefetch:R,expose:J,inheritAttrs:te,components:I,directives:q,filters:j}=n;if(d&&Sd(d,a,null),s)for(const Se in s){const Be=s[Se];Ee(Be)&&(a[Se]=Be.bind(o))}if(r){const Se=r.call(o,o);$e(Se)&&(e.data=ka(Se))}if(Ot=!0,t)for(const Se in t){const Be=t[Se],on=Ee(Be)?Be.bind(o,o):Ee(Be.get)?Be.get.bind(o,o):Un,Ue=!Ee(Be)&&Ee(Be.set)?Be.set.bind(o):Un,Ye=ke({get:on,set:Ue});Object.defineProperty(a,Se,{enumerable:!0,configurable:!0,get:()=>Ye.value,set:Qe=>Ye.value=Qe})}if(l)for(const Se in l)ic(l[Se],a,o,Se);if(c){const Se=Ee(c)?c.call(o):c;Reflect.ownKeys(Se).forEach(Be=>{da(Be,Se[Be])})}u&&Oi(u,e,"c");function L(Se,Be){Ne(Be)?Be.forEach(on=>Se(on.bind(o))):Be&&Se(Be.bind(o))}if(L(vd,m),L(An,f),L(hd,g),L(gd,S),L(md,x),L(pd,C),L(Ad,G),L(yd,ce),L(_d,oe),L(Jo,y),L(li,F),L(bd,R),Ne(J))if(J.length){const Se=e.exposed||(e.exposed={});J.forEach(Be=>{Object.defineProperty(Se,Be,{get:()=>o[Be],set:on=>o[Be]=on,enumerable:!0})})}else e.exposed||(e.exposed={});ve&&e.render===Un&&(e.render=ve),te!=null&&(e.inheritAttrs=te),I&&(e.components=I),q&&(e.directives=q),R&&ec(e)}function Sd(e,n,o=Un){Ne(e)&&(e=jt(e));for(const a in e){const r=e[a];let t;$e(r)?"default"in r?t=qe(r.from||a,r.default,!0):t=qe(r.from||a):t=qe(r),dn(t)?Object.defineProperty(n,a,{enumerable:!0,configurable:!0,get:()=>t.value,set:s=>t.value=s}):n[a]=t}}function Oi(e,n,o){kn(Ne(e)?e.map(a=>a.bind(n.proxy)):e.bind(n.proxy),n,o)}function ic(e,n,o,a){let r=a.includes(".")?Kl(o,a):()=>o[a];if(ze(e)){const t=n[e];Ee(t)&&vo(r,t)}else if(Ee(e))vo(r,e.bind(o));else if($e(e))if(Ne(e))e.forEach(t=>ic(t,n,o,a));else{const t=Ee(e.handler)?e.handler.bind(o):n[e.handler];Ee(t)&&vo(r,t,e)}}function sc(e){const n=e.type,{mixins:o,extends:a}=n,{mixins:r,optionsCache:t,config:{optionMergeStrategies:s}}=e.appContext,l=t.get(n);let c;return l?c=l:!r.length&&!o&&!a?c=n:(c={},r.length&&r.forEach(d=>or(c,d,s,!0)),or(c,n,s)),$e(n)&&t.set(n,c),c}function or(e,n,o,a=!1){const{mixins:r,extends:t}=n;t&&or(e,t,o,!0),r&&r.forEach(s=>or(e,s,o,!0));for(const s in n)if(!(a&&s==="expose")){const l=wd[s]||o&&o[s];e[s]=l?l(e[s],n[s]):n[s]}return e}const wd={data:ji,props:Di,emits:Di,methods:ia,computed:ia,beforeCreate:pn,created:pn,beforeMount:pn,mounted:pn,beforeUpdate:pn,updated:pn,beforeDestroy:pn,beforeUnmount:pn,destroyed:pn,unmounted:pn,activated:pn,deactivated:pn,errorCaptured:pn,serverPrefetch:pn,components:ia,directives:ia,watch:Cd,provide:ji,inject:Ed};function ji(e,n){return n?e?function(){return en(Ee(e)?e.call(this,this):e,Ee(n)?n.call(this,this):n)}:n:e}function Ed(e,n){return ia(jt(e),jt(n))}function jt(e){if(Ne(e)){const n={};for(let o=0;o<e.length;o++)n[e[o]]=e[o];return n}return e}function pn(e,n){return e?[...new Set([].concat(e,n))]:n}function ia(e,n){return e?en(Object.create(null),e,n):n}function Di(e,n){return e?Ne(e)&&Ne(n)?[...new Set([...e,...n])]:en(Object.create(null),Pi(e),Pi(n??{})):n}function Cd(e,n){if(!e)return n;if(!n)return e;const o=en(Object.create(null),e);for(const a in n)o[a]=pn(e[a],n[a]);return o}function lc(){return{app:null,config:{isNativeTag:vl,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let kd=0;function Id(e,n){return function(a,r=null){Ee(a)||(a=en({},a)),r!=null&&!$e(r)&&(r=null);const t=lc(),s=new WeakSet,l=[];let c=!1;const d=t.app={_uid:kd++,_component:a,_props:r,_container:null,_context:t,_instance:null,version:lm,get config(){return t.config},set config(u){},use(u,...m){return s.has(u)||(u&&Ee(u.install)?(s.add(u),u.install(d,...m)):Ee(u)&&(s.add(u),u(d,...m))),d},mixin(u){return t.mixins.includes(u)||t.mixins.push(u),d},component(u,m){return m?(t.components[u]=m,d):t.components[u]},directive(u,m){return m?(t.directives[u]=m,d):t.directives[u]},mount(u,m,f){if(!c){const g=d._ceVNode||H(a,r);return g.appContext=t,f===!0?f="svg":f===!1&&(f=void 0),e(g,u,f),c=!0,d._container=u,u.__vue_app__=d,Sr(g.component)}},onUnmount(u){l.push(u)},unmount(){c&&(kn(l,d._instance,16),e(null,d._container),delete d._container.__vue_app__)},provide(u,m){return t.provides[u]=m,d},runWithContext(u){const m=Mo;Mo=d;try{return u()}finally{Mo=m}}};return d}}let Mo=null;const Pd=(e,n)=>n==="modelValue"||n==="model-value"?e.modelModifiers:e[`${n}Modifiers`]||e[`${_n(n)}Modifiers`]||e[`${bo(n)}Modifiers`];function Od(e,n,...o){if(e.isUnmounted)return;const a=e.vnode.props||Me;let r=o;const t=n.startsWith("update:"),s=t&&Pd(a,n.slice(7));s&&(s.trim&&(r=o.map(u=>ze(u)?u.trim():u)),s.number&&(r=o.map(gr)));let l,c=a[l=Ga(n)]||a[l=Ga(_n(n))];!c&&t&&(c=a[l=Ga(bo(n))]),c&&kn(c,e,6,r);const d=a[l+"Once"];if(d){if(!e.emitted)e.emitted={};else if(e.emitted[l])return;e.emitted[l]=!0,kn(d,e,6,r)}}const jd=new WeakMap;function cc(e,n,o=!1){const a=o?jd:n.emitsCache,r=a.get(e);if(r!==void 0)return r;const t=e.emits;let s={},l=!1;if(!Ee(e)){const c=d=>{const u=cc(d,n,!0);u&&(l=!0,en(s,u))};!o&&n.mixins.length&&n.mixins.forEach(c),e.extends&&c(e.extends),e.mixins&&e.mixins.forEach(c)}return!t&&!l?($e(e)&&a.set(e,null),null):(Ne(t)?t.forEach(c=>s[c]=null):en(s,t),$e(e)&&a.set(e,s),s)}function Tr(e,n){return!e||!pr(n)?!1:(n=n.slice(2),n=n==="Once"?n:n.replace(/Once$/,""),Le(e,n[0].toLowerCase()+n.slice(1))||Le(e,bo(n))||Le(e,n))}function Vi(e){const{type:n,vnode:o,proxy:a,withProxy:r,propsOptions:[t],slots:s,attrs:l,emit:c,render:d,renderCache:u,props:m,data:f,setupState:g,ctx:S,inheritAttrs:x}=e,C=Za(e);let T,y;try{if(o.shapeFlag&4){const F=r||a,ve=F;T=Fn(d.call(ve,F,u,m,g,f,S)),y=l}else{const F=n;T=Fn(F.length>1?F(m,{attrs:l,slots:s,emit:c}):F(m,null)),y=n.props?l:Dd(l)}}catch(F){eo.length=0,yr(F,e,1),T=H(ln)}let k=T;if(y&&x!==!1){const F=Object.keys(y),{shapeFlag:ve}=k;F.length&&ve&7&&(t&&F.some(fr)&&(y=Vd(y,t)),k=ho(k,y,!1,!0))}if(o.dirs&&(k=ho(k,null,!1,!0),k.dirs=k.dirs?k.dirs.concat(o.dirs):o.dirs),o.transition){const F=Ar(k.type)&&er(k)||k;_a(F,o.transition)}return T=k,Za(C),T}const Dd=e=>{let n;for(const o in e)(o==="class"||o==="style"||pr(o))&&((n||(n={}))[o]=e[o]);return n},Vd=(e,n)=>{const o={};for(const a in e)(!fr(a)||!(a.slice(9)in n))&&(o[a]=e[a]);return o};function Ld(e,n,o){const{props:a,children:r,component:t}=e,{props:s,children:l,patchFlag:c}=n,d=t.emitsOptions;if(n.dirs||n.transition)return!0;if(o&&c>=0){if(c&1024)return!0;if(c&16)return a?Li(a,s,d):!!s;if(c&8){const u=n.dynamicProps;for(let m=0;m<u.length;m++){const f=u[m];if(uc(s,a,f)&&!Tr(d,f))return!0}}}else return(r||l)&&(!l||!l.$stable)?!0:a===s?!1:a?s?Li(a,s,d):!0:!!s;return!1}function Li(e,n,o){const a=Object.keys(n);if(a.length!==Object.keys(e).length)return!0;for(let r=0;r<a.length;r++){const t=a[r];if(uc(n,e,t)&&!Tr(o,t))return!0}return!1}function uc(e,n,o){const a=e[o],r=n[o];return o==="style"&&$e(a)&&$e(r)?!Wo(a,r):a!==r}function $d({vnode:e,parent:n,suspense:o},a){for(;n;){const r=n.subTree;if(r.suspense&&r.suspense.activeBranch===e&&(r.suspense.vnode.el=r.el=a,e=r),r===e)(e=n.vnode).el=a,n=n.parent;else break}o&&o.activeBranch===e&&(o.vnode.el=a)}const dc={},mc=()=>Object.create(dc),pc=e=>Object.getPrototypeOf(e)===dc;function qd(e,n,o,a=!1){const r={},t=mc();e.propsDefaults=Object.create(null),fc(e,n,r,t);for(const s in e.propsOptions[0])s in r||(r[s]=void 0);o?e.props=a?r:Vl(r):e.type.props?e.props=r:e.props=t,e.attrs=t}function Md(e,n,o,a){const{props:r,attrs:t,vnode:{patchFlag:s}}=e,l=De(r),[c]=e.propsOptions;let d=!1;if((a||s>0)&&!(s&16)){if(s&8){const u=e.vnode.dynamicProps;for(let m=0;m<u.length;m++){let f=u[m];if(Tr(e.emitsOptions,f))continue;const g=n[f];if(c)if(Le(t,f))g!==t[f]&&(t[f]=g,d=!0);else{const S=_n(f);r[S]=Dt(c,l,S,g,e,!1)}else g!==t[f]&&(t[f]=g,d=!0)}}}else{fc(e,n,r,t)&&(d=!0);let u;for(const m in l)(!n||!Le(n,m)&&((u=bo(m))===m||!Le(n,u)))&&(c?o&&(o[m]!==void 0||o[u]!==void 0)&&(r[m]=Dt(c,l,m,void 0,e,!0)):delete r[m]);if(t!==l)for(const m in t)(!n||!Le(n,m))&&(delete t[m],d=!0)}d&&Xn(e.attrs,"set","")}function fc(e,n,o,a){const[r,t]=e.propsOptions;let s=!1,l;if(n)for(let c in n){if(la(c))continue;const d=n[c];let u;r&&Le(r,u=_n(c))?!t||!t.includes(u)?o[u]=d:(l||(l={}))[u]=d:Tr(e.emitsOptions,c)||(!(c in a)||d!==a[c])&&(a[c]=d,s=!0)}if(t){const c=De(o),d=l||Me;for(let u=0;u<t.length;u++){const m=t[u];o[m]=Dt(r,c,m,d[m],e,!Le(d,m))}}return s}function Dt(e,n,o,a,r,t){const s=e[o];if(s!=null){const l=Le(s,"default");if(l&&a===void 0){const c=s.default;if(s.type!==Function&&!s.skipFactory&&Ee(c)){const{propsDefaults:d}=r;if(o in d)a=d[o];else{const u=Pa(r);a=d[o]=c.call(null,n),u()}}else a=c;r.ce&&r.ce._setProp(o,a)}s[0]&&(t&&!l?a=!1:s[1]&&(a===""||a===bo(o))&&(a=!0))}return a}const Fd=new WeakMap;function vc(e,n,o=!1){const a=o?Fd:n.propsCache,r=a.get(e);if(r)return r;const t=e.props,s={},l=[];let c=!1;if(!Ee(e)){const u=m=>{c=!0;const[f,g]=vc(m,n,!0);en(s,f),g&&l.push(...g)};!o&&n.mixins.length&&n.mixins.forEach(u),e.extends&&u(e.extends),e.mixins&&e.mixins.forEach(u)}if(!t&&!c)return $e(e)&&a.set(e,Do),Do;if(Ne(t))for(let u=0;u<t.length;u++){const m=_n(t[u]);$i(m)&&(s[m]=Me)}else if(t)for(const u in t){const m=_n(u);if($i(m)){const f=t[u],g=s[m]=Ne(f)||Ee(f)?{type:f}:en({},f),S=g.type;let x=!1,C=!0;if(Ne(S))for(let T=0;T<S.length;++T){const y=S[T],k=Ee(y)&&y.name;if(k==="Boolean"){x=!0;break}else k==="String"&&(C=!1)}else x=Ee(S)&&S.name==="Boolean";g[0]=x,g[1]=C,(x||Le(g,"default"))&&l.push(m)}}const d=[s,l];return $e(e)&&a.set(e,d),d}function $i(e){return e[0]!=="$"&&!la(e)}const ci=e=>e==="_"||e==="_ctx"||e==="$stable",ui=e=>Ne(e)?e.map(Fn):[Fn(e)],zd=(e,n,o)=>{if(n._n)return n;const a=_e((...r)=>ui(n(...r)),o);return a._c=!1,a},hc=(e,n,o)=>{const a=e._ctx;for(const r in e){if(ci(r))continue;const t=e[r];if(Ee(t))n[r]=zd(r,t,a);else if(t!=null){const s=ui(t);n[r]=()=>s}}},gc=(e,n)=>{const o=ui(n);e.slots.default=()=>o},bc=(e,n,o)=>{for(const a in n)(o||!ci(a))&&(e[a]=n[a])},Hd=(e,n,o)=>{const a=e.slots=mc();if(e.vnode.shapeFlag&32){const r=n._;r?(bc(a,n,o),o&&_l(a,"_",r,!0)):hc(n,a)}else n&&gc(e,n)},Ud=(e,n,o)=>{const{vnode:a,slots:r}=e;let t=!0,s=Me;if(a.shapeFlag&32){const l=n._;l?o&&l===1?t=!1:bc(r,n,o):(t=!n.$stable,hc(n,r)),s=n}else n&&(gc(e,n),s={default:1});if(t)for(const l in r)!ci(l)&&s[l]==null&&delete r[l]},fn=Jd;function Kd(e){return Gd(e)}function Gd(e,n){const o=br();o.__VUE__=!0;const{insert:a,remove:r,patchProp:t,createElement:s,createText:l,createComment:c,setText:d,setElementText:u,parentNode:m,nextSibling:f,setScopeId:g=Un,insertStaticContent:S}=e,x=(h,b,A,$=null,U=null,O=null,se=void 0,ie=null,ae=!!b.dynamicChildren)=>{if(h===b)return;h&&!Ro(h,b)&&($=V(h),Qe(h,U,O,!0),h=null),b.patchFlag===-2&&(ae=!1,b.dynamicChildren=null);const{type:Y,ref:ye,shapeFlag:le}=b;switch(Y){case Rr:C(h,b,A,$);break;case ln:T(h,b,A,$);break;case Wa:h==null&&y(b,A,$,se);break;case Re:I(h,b,A,$,U,O,se,ie,ae);break;default:le&1?ve(h,b,A,$,U,O,se,ie,ae):le&6?q(h,b,A,$,U,O,se,ie,ae):(le&64||le&128)&&Y.process(h,b,A,$,U,O,se,ie,ae,he)}ye!=null&&U?ma(ye,h&&h.ref,O,b||h,!b):ye==null&&h&&h.ref!=null&&ma(h.ref,null,O,h,!0)},C=(h,b,A,$)=>{if(h==null)a(b.el=l(b.children),A,$);else{const U=b.el=h.el;b.children!==h.children&&d(U,b.children)}},T=(h,b,A,$)=>{h==null?a(b.el=c(b.children||""),A,$):b.el=h.el},y=(h,b,A,$)=>{[h.el,h.anchor]=S(h.children,b,A,$,h.el,h.anchor)},k=({el:h,anchor:b},A,$)=>{let U;for(;h&&h!==b;)U=f(h),a(h,A,$),h=U;a(b,A,$)},F=({el:h,anchor:b})=>{let A;for(;h&&h!==b;)A=f(h),r(h),h=A;r(b)},ve=(h,b,A,$,U,O,se,ie,ae)=>{if(b.type==="svg"?se="svg":b.type==="math"&&(se="mathml"),h==null)ce(b,A,$,U,O,se,ie,ae);else{const Y=h.el&&h.el._isVueCE?h.el:null;try{Y&&Y._beginPatch(),R(h,b,U,O,se,ie,ae)}finally{Y&&Y._endPatch()}}},ce=(h,b,A,$,U,O,se,ie)=>{let ae,Y;const{props:ye,shapeFlag:le,transition:ge,dirs:xe}=h;if(ae=h.el=s(h.type,O,ye&&ye.is,ye),le&8?u(ae,h.children):le&16&&G(h.children,ae,null,$,U,Mr(h,O),se,ie),xe&&_o(h,null,$,"created"),oe(ae,h,h.scopeId,se,$),ye){for(const je in ye)je!=="value"&&!la(je)&&t(ae,je,null,ye[je],O,$);"value"in ye&&t(ae,"value",null,ye.value,O),(Y=ye.onVnodeBeforeMount)&&$n(Y,$,h)}xe&&_o(h,null,$,"beforeMount");const Ie=Yd(U,ge);Ie&&ge.beforeEnter(ae),a(ae,b,A),((Y=ye&&ye.onVnodeMounted)||Ie||xe)&&fn(()=>{Y&&$n(Y,$,h),Ie&&ge.enter(ae),xe&&_o(h,null,$,"mounted")},U)},oe=(h,b,A,$,U)=>{if(A&&g(h,A),$)for(let O=0;O<$.length;O++)g(h,$[O]);if(U){let O=U.subTree;if(b===O||Ac(O.type)&&(O.ssContent===b||O.ssFallback===b)){const se=U.vnode;oe(h,se,se.scopeId,se.slotScopeIds,U.parent)}}},G=(h,b,A,$,U,O,se,ie,ae=0)=>{for(let Y=ae;Y<h.length;Y++){const ye=h[Y]=ie?Qn(h[Y]):Fn(h[Y]);x(null,ye,b,A,$,U,O,se,ie)}},R=(h,b,A,$,U,O,se)=>{const ie=b.el=h.el;let{patchFlag:ae,dynamicChildren:Y,dirs:ye}=b;ae|=h.patchFlag&16;const le=h.props||Me,ge=b.props||Me;let xe;if(A&&yo(A,!1),(xe=ge.onVnodeBeforeUpdate)&&$n(xe,A,b,h),ye&&_o(b,h,A,"beforeUpdate"),A&&yo(A,!0),Y&&(!h.dynamicChildren||h.dynamicChildren.length!==Y.length)&&(ae=0,se=!1,Y=null),(le.innerHTML&&ge.innerHTML==null||le.textContent&&ge.textContent==null)&&u(ie,""),Y?J(h.dynamicChildren,Y,ie,A,$,Mr(b,U),O):se||Be(h,b,ie,null,A,$,Mr(b,U),O,!1),ae>0){if(ae&16)te(ie,le,ge,A,U);else if(ae&2&&le.class!==ge.class&&t(ie,"class",null,ge.class,U),ae&4&&t(ie,"style",le.style,ge.style,U),ae&8){const Ie=b.dynamicProps;for(let je=0;je<Ie.length;je++){const i=Ie[je],_=le[i],E=ge[i];(E!==_||i==="value")&&t(ie,i,_,E,U,A)}}ae&1&&h.children!==b.children&&u(ie,b.children)}else!se&&Y==null&&te(ie,le,ge,A,U);((xe=ge.onVnodeUpdated)||ye)&&fn(()=>{xe&&$n(xe,A,b,h),ye&&_o(b,h,A,"updated")},$)},J=(h,b,A,$,U,O,se)=>{for(let ie=0;ie<b.length;ie++){const ae=h[ie],Y=b[ie],ye=ae.el&&(ae.type===Re||!Ro(ae,Y)||ae.shapeFlag&198)?m(ae.el):A;x(ae,Y,ye,null,$,U,O,se,!0)}},te=(h,b,A,$,U)=>{if(b!==A){if(b!==Me)for(const O in b)!la(O)&&!(O in A)&&t(h,O,b[O],null,U,$);for(const O in A){if(la(O))continue;const se=A[O],ie=b[O];se!==ie&&O!=="value"&&t(h,O,ie,se,U,$)}"value"in A&&t(h,"value",b.value,A.value,U)}},I=(h,b,A,$,U,O,se,ie,ae)=>{const Y=b.el=h?h.el:l(""),ye=b.anchor=h?h.anchor:l("");let{patchFlag:le,dynamicChildren:ge,slotScopeIds:xe}=b;xe&&(ie=ie?ie.concat(xe):xe),h==null?(a(Y,A,$),a(ye,A,$),G(b.children||[],A,ye,U,O,se,ie,ae)):le>0&&le&64&&ge&&h.dynamicChildren&&h.dynamicChildren.length===ge.length?(J(h.dynamicChildren,ge,A,U,O,se,ie),(b.key!=null||U&&b===U.subTree)&&di(h,b,!0)):Be(h,b,A,ye,U,O,se,ie,ae)},q=(h,b,A,$,U,O,se,ie,ae)=>{b.slotScopeIds=ie,h==null?b.shapeFlag&512?U.ctx.activate(b,A,$,se,ae):j(b,A,$,U,O,se,ae):re(h,b,ae)},j=(h,b,A,$,U,O,se)=>{const ie=h.component=nm(h,$,U);if(xr(h)&&(ie.ctx.renderer=he),om(ie,!1,se),ie.asyncDep){if(U&&U.registerDep(ie,L,se),!h.el){const ae=ie.subTree=H(ln);T(null,ae,b,A),h.placeholder=ae.el}}else L(ie,h,b,A,U,O,se)},re=(h,b,A)=>{const $=b.component=h.component;if(Ld(h,b,A))if($.asyncDep&&!$.asyncResolved){Se($,b,A);return}else $.next=b,$.update();else b.el=h.el,$.vnode=b},L=(h,b,A,$,U,O,se)=>{const ie=()=>{if(h.isMounted){let{next:le,bu:ge,u:xe,parent:Ie,vnode:je}=h;{const w=_c(h);if(w){le&&(le.el=je.el,Se(h,le,se)),w.asyncDep.then(()=>{fn(()=>{h.isUnmounted||Y()},U)});return}}let i=le,_;yo(h,!1),le?(le.el=je.el,Se(h,le,se)):le=je,ge&&Ya(ge),(_=le.props&&le.props.onVnodeBeforeUpdate)&&$n(_,Ie,le,je),yo(h,!0);const E=Vi(h),D=h.subTree;h.subTree=E,x(D,E,m(D.el),V(D),h,U,O),le.el=E.el,i===null&&$d(h,E.el),xe&&fn(xe,U),(_=le.props&&le.props.onVnodeUpdated)&&fn(()=>$n(_,Ie,le,je),U)}else{let le;const{el:ge,props:xe}=b,{bm:Ie,m:je,parent:i,root:_,type:E}=h,D=$o(b);yo(h,!1),Ie&&Ya(Ie),!D&&(le=xe&&xe.onVnodeBeforeMount)&&$n(le,i,b),yo(h,!0);{_.ce&&_.ce._hasShadowRoot()&&_.ce._injectChildStyle(E,h.parent?h.parent.type:void 0);const w=h.subTree=Vi(h);x(null,w,A,$,h,U,O),b.el=w.el}if(je&&fn(je,U),!D&&(le=xe&&xe.onVnodeMounted)){const w=b;fn(()=>$n(le,i,w),U)}(b.shapeFlag&256||i&&$o(i.vnode)&&i.vnode.shapeFlag&256)&&h.a&&fn(h.a,U),h.isMounted=!0,b=A=$=null}};h.scope.on();const ae=h.effect=new xl(ie);h.scope.off();const Y=h.update=ae.run.bind(ae),ye=h.job=ae.runIfDirty.bind(ae);ye.i=h,ye.id=h.uid,ae.scheduler=()=>si(ye),yo(h,!0),Y()},Se=(h,b,A)=>{b.component=h;const $=h.vnode.props;h.vnode=b,h.next=null,Md(h,b.props,$,A),Ud(h,b.children,A),no(),Si(h),oo()},Be=(h,b,A,$,U,O,se,ie,ae=!1)=>{const Y=h&&h.children,ye=h?h.shapeFlag:0,le=b.children,{patchFlag:ge,shapeFlag:xe}=b;if(ge>0){if(ge&128){Ue(Y,le,A,$,U,O,se,ie,ae);return}else if(ge&256){on(Y,le,A,$,U,O,se,ie,ae);return}}xe&8?(ye&16&&Je(Y,U,O),le!==Y&&u(A,le)):ye&16?xe&16?Ue(Y,le,A,$,U,O,se,ie,ae):Je(Y,U,O,!0):(ye&8&&u(A,""),xe&16&&G(le,A,$,U,O,se,ie,ae))},on=(h,b,A,$,U,O,se,ie,ae)=>{h=h||Do,b=b||Do;const Y=h.length,ye=b.length,le=Math.min(Y,ye);let ge;for(ge=0;ge<le;ge++){const xe=b[ge]=ae?Qn(b[ge]):Fn(b[ge]);x(h[ge],xe,A,null,U,O,se,ie,ae)}Y>ye?Je(h,U,O,!0,!1,le):G(b,A,$,U,O,se,ie,ae,le)},Ue=(h,b,A,$,U,O,se,ie,ae)=>{let Y=0;const ye=b.length;let le=h.length-1,ge=ye-1;for(;Y<=le&&Y<=ge;){const xe=h[Y],Ie=b[Y]=ae?Qn(b[Y]):Fn(b[Y]);if(Ro(xe,Ie))x(xe,Ie,A,null,U,O,se,ie,ae);else break;Y++}for(;Y<=le&&Y<=ge;){const xe=h[le],Ie=b[ge]=ae?Qn(b[ge]):Fn(b[ge]);if(Ro(xe,Ie))x(xe,Ie,A,null,U,O,se,ie,ae);else break;le--,ge--}if(Y>le){if(Y<=ge){const xe=ge+1,Ie=xe<ye?b[xe].el:$;for(;Y<=ge;)x(null,b[Y]=ae?Qn(b[Y]):Fn(b[Y]),A,Ie,U,O,se,ie,ae),Y++}}else if(Y>ge)for(;Y<=le;)Qe(h[Y],U,O,!0),Y++;else{const xe=Y,Ie=Y,je=new Map;for(Y=Ie;Y<=ge;Y++){const N=b[Y]=ae?Qn(b[Y]):Fn(b[Y]);N.key!=null&&je.set(N.key,Y)}let i,_=0;const E=ge-Ie+1;let D=!1,w=0;const X=new Array(E);for(Y=0;Y<E;Y++)X[Y]=0;for(Y=xe;Y<=le;Y++){const N=h[Y];if(_>=E){Qe(N,U,O,!0);continue}let K;if(N.key!=null)K=je.get(N.key);else for(i=Ie;i<=ge;i++)if(X[i-Ie]===0&&Ro(N,b[i])){K=i;break}K===void 0?Qe(N,U,O,!0):(X[K-Ie]=Y+1,K>=w?w=K:D=!0,x(N,b[K],A,null,U,O,se,ie,ae),_++)}const p=D?Wd(X):Do;for(i=p.length-1,Y=E-1;Y>=0;Y--){const N=Ie+Y,K=b[N],M=b[N+1],z=N+1<ye?M.el||yc(M):$;X[Y]===0?x(null,K,A,z,U,O,se,ie,ae):D&&(i<0||Y!==p[i]?Ye(K,A,z,2):i--)}}},Ye=(h,b,A,$,U=null)=>{const{el:O,type:se,transition:ie,children:ae,shapeFlag:Y}=h;if(Y&6){Ye(h.component.subTree,b,A,$);return}if(Y&128){h.suspense.move(b,A,$);return}if(Y&64){se.move(h,b,A,he);return}if(se===Re){a(O,b,A);for(let le=0;le<ae.length;le++)Ye(ae[le],b,A,$);a(h.anchor,b,A);return}if(se===Wa){k(h,b,A);return}if($!==2&&Y&1&&ie)if($===0)ie.persisted&&!O[Sn]?a(O,b,A):(ie.beforeEnter(O),a(O,b,A),fn(()=>ie.enter(O),U));else{const{leave:le,delayLeave:ge,afterLeave:xe}=ie,Ie=()=>{h.ctx.isUnmounted?r(O):a(O,b,A)},je=()=>{const i=O._isLeaving||!!O[Sn];O._isLeaving&&O[Sn](!0),ie.persisted&&!i?Ie():le(O,()=>{Ie(),xe&&xe()})};ge?ge(O,Ie,je):je()}else a(O,b,A)},Qe=(h,b,A,$=!1,U=!1)=>{const{type:O,props:se,ref:ie,children:ae,dynamicChildren:Y,shapeFlag:ye,patchFlag:le,dirs:ge,cacheIndex:xe,memo:Ie}=h;if(le===-2&&(U=!1),ie!=null&&(no(),ma(ie,null,A,h,!0),oo()),xe!=null&&(b.renderCache[xe]=void 0),ye&256){b.ctx.deactivate(h);return}const je=ye&1&&ge,i=!$o(h);let _;if(i&&(_=se&&se.onVnodeBeforeUnmount)&&$n(_,b,h),ye&6)We(h.component,A,$);else{if(ye&128){h.suspense.unmount(A,$);return}je&&_o(h,null,b,"beforeUnmount"),ye&64?h.type.remove(h,b,A,he,$):Y&&!Y.hasOnce&&(O!==Re||le>0&&le&64)?Je(Y,b,A,!1,!0):(O===Re&&le&384||!U&&ye&16)&&Je(ae,b,A),$&&Nn(h)}const E=Ie!=null&&xe==null;(i&&(_=se&&se.onVnodeUnmounted)||je||E)&&fn(()=>{_&&$n(_,b,h),je&&_o(h,null,b,"unmounted"),E&&(h.el=null)},A)},Nn=h=>{const{type:b,el:A,anchor:$,transition:U}=h;if(b===Re){In(A,$);return}if(b===Wa){F(h);return}const O=()=>{r(A),U&&!U.persisted&&U.afterLeave&&U.afterLeave()};if(h.shapeFlag&1&&U&&!U.persisted){const{leave:se,delayLeave:ie}=U,ae=()=>se(A,O);ie?ie(h.el,O,ae):ae()}else O()},In=(h,b)=>{let A;for(;h!==b;)A=f(h),r(h),h=A;r(b)},We=(h,b,A)=>{const{bum:$,scope:U,job:O,subTree:se,um:ie,m:ae,a:Y}=h;qi(ae),qi(Y),$&&Ya($),U.stop(),O&&(O.flags|=8,Qe(se,h,b,A)),ie&&fn(ie,b),fn(()=>{h.isUnmounted=!0},b)},Je=(h,b,A,$=!1,U=!1,O=0)=>{for(let se=O;se<h.length;se++)Qe(h[se],b,A,$,U)},V=h=>{if(h.shapeFlag&6)return V(h.component.subTree);if(h.shapeFlag&128)return h.suspense.next();const b=f(h.anchor||h.el),A=b&&b[Gl];return A?f(A):b};let ue=!1;const ee=(h,b,A)=>{let $;h==null?b._vnode&&(Qe(b._vnode,null,null,!0),$=b._vnode.component):x(b._vnode||null,h,b,null,null,null,A),b._vnode=h,ue||(ue=!0,Si($),Fl(),ue=!1)},he={p:x,um:Qe,m:Ye,r:Nn,mt:j,mc:G,pc:Be,pbc:J,n:V,o:e};return{render:ee,hydrate:void 0,createApp:Id(ee)}}function Mr({type:e,props:n},o){return o==="svg"&&e==="foreignObject"||o==="mathml"&&e==="annotation-xml"&&n&&n.encoding&&n.encoding.includes("html")?void 0:o}function yo({effect:e,job:n},o){o?(e.flags|=32,n.flags|=4):(e.flags&=-33,n.flags&=-5)}function Yd(e,n){return(!e||e&&!e.pendingBranch)&&n&&!n.persisted}function di(e,n,o=!1){const a=e.children,r=n.children;if(Ne(a)&&Ne(r))for(let t=0;t<a.length;t++){const s=a[t];let l=r[t];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=r[t]=Qn(r[t]),l.el=s.el),!o&&l.patchFlag!==-2&&di(s,l)),l.type===Rr&&(l.patchFlag===-1&&(l=r[t]=Qn(l)),l.el=s.el),l.type===ln&&!l.el&&(l.el=s.el)}}function Wd(e){const n=e.slice(),o=[0];let a,r,t,s,l;const c=e.length;for(a=0;a<c;a++){const d=e[a];if(d!==0){if(r=o[o.length-1],e[r]<d){n[a]=r,o.push(a);continue}for(t=0,s=o.length-1;t<s;)l=t+s>>1,e[o[l]]<d?t=l+1:s=l;d<e[o[t]]&&(t>0&&(n[a]=o[t-1]),o[t]=a)}}for(t=o.length,s=o[t-1];t-- >0;)o[t]=s,s=n[s];return o}function _c(e){const n=e.subTree.component;if(n)return n.asyncDep&&!n.asyncResolved?n:_c(n)}function qi(e){if(e)for(let n=0;n<e.length;n++)e[n].flags|=8}function yc(e){if(e.placeholder)return e.placeholder;const n=e.component;return n?yc(n.subTree):null}const Ac=e=>e.__isSuspense;function Jd(e,n){n&&n.pendingBranch?Ne(e)?n.effects.push(...e):n.effects.push(e):nd(e)}const Re=Symbol.for("v-fgt"),Rr=Symbol.for("v-txt"),ln=Symbol.for("v-cmt"),Wa=Symbol.for("v-stc"),eo=[];let Bn=null;function B(e=!1){eo.push(Bn=e?null:[])}function mi(){eo.pop(),Bn=eo[eo.length-1]||null}let ya=1;function ar(e,n=!1){ya+=e,e<0&&Bn&&n&&(Bn.hasOnce=!0)}function Nc(e){return e.dynamicChildren=ya>0?Bn||Do:null,mi(),ya>0&&Bn&&Bn.push(e),e}function P(e,n,o,a,r,t){return Nc(v(e,n,o,a,r,t,!0))}function Ce(e,n,o,a,r){return Nc(H(e,n,o,a,r,!0))}function Aa(e){return e?e.__v_isVNode===!0:!1}function Ro(e,n){return e.type===n.type&&e.key===n.key}const xc=({key:e})=>e??null,Ja=({ref:e,ref_key:n,ref_for:o})=>(typeof e=="number"&&(e=""+e),e!=null?ze(e)||dn(e)||Ee(e)?{i:rn,r:e,k:n,f:!!o}:e:null);function v(e,n=null,o=null,a=0,r=null,t=e===Re?0:1,s=!1,l=!1){const c={__v_isVNode:!0,__v_skip:!0,type:e,props:n,key:n&&xc(n),ref:n&&Ja(n),scopeId:Hl,slotScopeIds:null,children:o,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:t,patchFlag:a,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:rn};return l?(rr(c,o),t&128&&e.normalize(c)):o&&(c.shapeFlag|=ze(o)?8:16),ya>0&&!s&&Bn&&(c.patchFlag>0||t&6)&&c.patchFlag!==32&&Bn.push(c),c}const H=Qd;function Qd(e,n=null,o=null,a=0,r=null,t=!1){if((!e||e===ac)&&(e=ln),Aa(e)){const l=ho(e,n,!0);return o&&rr(l,o),ya>0&&!t&&Bn&&(l.shapeFlag&6?Bn[Bn.indexOf(e)]=l:Bn.push(l)),l.patchFlag=-2,l}if(sm(e)&&(e=e.__vccOpts),n){n=On(n);let{class:l,style:c}=n;l&&!ze(l)&&(n.class=nn(l)),$e(c)&&(ii(c)&&!Ne(c)&&(c=en({},c)),n.style=Ca(c))}const s=ze(e)?1:Ac(e)?128:Ar(e)?64:$e(e)?4:Ee(e)?2:0;return v(e,n,o,a,r,s,t,!0)}function On(e){return e?ii(e)||pc(e)?en({},e):e:null}function ho(e,n,o=!1,a=!1){const{props:r,ref:t,patchFlag:s,children:l,transition:c}=e,d=n?Vt(r||{},n):r,u={__v_isVNode:!0,__v_skip:!0,type:e.type,props:d,key:d&&xc(d),ref:n&&n.ref?o&&t?Ne(t)?t.concat(Ja(n)):[t,Ja(n)]:Ja(n):t,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:l,target:e.target,targetStart:e.targetStart,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:n&&e.type!==Re?s===-1?16:s|16:s,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:c,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&ho(e.ssContent),ssFallback:e.ssFallback&&ho(e.ssFallback),placeholder:e.placeholder,el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return c&&a&&_a(u,c.clone(u)),u}function Te(e=" ",n=0){return H(Rr,null,e,n)}function Xd(e,n){const o=H(Wa,null,e);return o.staticCount=n,o}function pe(e="",n=!1){return n?(B(),Ce(ln,null,e)):H(ln,null,e)}function Fn(e){return e==null||typeof e=="boolean"?H(ln):Ne(e)?H(Re,null,e.slice()):Aa(e)?Qn(e):H(Rr,null,String(e))}function Qn(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:ho(e)}function rr(e,n){let o=0;const{shapeFlag:a}=e;if(n==null)n=null;else if(Ne(n))o=16;else if(typeof n=="object")if(a&65){const r=n.default;r&&(r._c&&(r._d=!1),rr(e,r()),r._c&&(r._d=!0));return}else{o=32;const r=n._;!r&&!pc(n)?n._ctx=rn:r===3&&rn&&(rn.slots._===1?n._=1:(n._=2,e.patchFlag|=1024))}else if(Ee(n)){if(a&65){rr(e,{default:n});return}n={default:n,_ctx:rn},o=32}else n=String(n),a&64?(o=16,n=[Te(n)]):o=8;e.children=n,e.shapeFlag|=o}function Vt(...e){const n={};for(let o=0;o<e.length;o++){const a=e[o];for(const r in a)if(r==="class")n.class!==a.class&&(n.class=nn([n.class,a.class]));else if(r==="style")n.style=Ca([n.style,a.style]);else if(pr(r)){const t=n[r],s=a[r];s&&t!==s&&!(Ne(t)&&t.includes(s))?n[r]=t?[].concat(t,s):s:s==null&&t==null&&!fr(r)&&(n[r]=s)}else r!==""&&(n[r]=a[r])}return n}function $n(e,n,o,a=null){kn(e,n,7,[o,a])}const Zd=lc();let em=0;function nm(e,n,o){const a=e.type,r=(n?n.appContext:e.appContext)||Zd,t={uid:em++,vnode:e,type:a,parent:n,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Ru(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:n?n.provides:Object.create(r.provides),ids:n?n.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:vc(a,r),emitsOptions:cc(a,r),emit:null,emitted:null,propsDefaults:Me,inheritAttrs:a.inheritAttrs,ctx:Me,data:Me,props:Me,attrs:Me,slots:Me,refs:Me,setupState:Me,setupContext:null,suspense:o,suspenseId:o?o.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return t.ctx={_:t},t.root=n?n.root:t,t.emit=Od.bind(null,t),e.ce&&e.ce(t),t}let cn=null;const pi=()=>cn||rn;let tr,Na;{const e=br(),n=(o,a)=>{let r;return(r=e[o])||(r=e[o]=[]),r.push(a),t=>{r.length>1?r.forEach(s=>s(t)):r[0](t)}};tr=n("__VUE_INSTANCE_SETTERS__",o=>cn=o),Na=n("__VUE_SSR_SETTERS__",o=>xa=o)}const Pa=e=>{const n=cn;return tr(e),e.scope.on(),()=>{e.scope.off(),tr(n)}},Mi=()=>{cn&&cn.scope.off(),tr(null)};function Bc(e){return e.vnode.shapeFlag&4}let xa=!1;function om(e,n=!1,o=!1){n&&Na(n);const{props:a,children:r}=e.vnode,t=Bc(e);qd(e,a,t,n),Hd(e,r,o||n);const s=t?am(e,n):void 0;return n&&Na(!1),s}function am(e,n){const o=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,Td);const{setup:a}=o;if(a){no();const r=e.setupContext=a.length>1?tm(e):null,t=Pa(e),s=Ia(a,e,0,[e.props,r]),l=hl(s);if(oo(),t(),(l||e.sp)&&!$o(e)&&ec(e),l){if(s.then(Mi,Mi),n)return s.then(c=>{Na(!0);try{Fi(e,c,n)}finally{Na(!1)}}).catch(c=>{yr(c,e,0)});e.asyncDep=s}else Fi(e,s)}else Tc(e)}function Fi(e,n,o){Ee(n)?e.type.__ssrInlineRender?e.ssrRender=n:e.render=n:$e(n)&&(e.setupState=$l(n)),Tc(e)}function Tc(e,n,o){const a=e.type;e.render||(e.render=a.render||Un);{const r=Pa(e);no();try{Rd(e)}finally{oo(),r()}}}const rm={get(e,n){return sn(e,"get",""),e[n]}};function tm(e){const n=o=>{e.exposed=o||{}};return{attrs:new Proxy(e.attrs,rm),slots:e.slots,emit:e.emit,expose:n}}function Sr(e){return e.exposed?e.exposeProxy||(e.exposeProxy=new Proxy($l(Uu(e.exposed)),{get(n,o){if(o in n)return n[o];if(o in pa)return pa[o](e)},has(n,o){return o in n||o in pa}})):e.proxy}function im(e,n=!0){return Ee(e)?e.displayName||e.name:e.name||n&&e.__name}function sm(e){return Ee(e)&&"__vccOpts"in e}const ke=(e,n)=>Ju(e,n,xa);function zo(e,n,o){try{ar(-1);const a=arguments.length;return a===2?$e(n)&&!Ne(n)?Aa(n)?H(e,null,[n]):H(e,n):H(e,null,n):(a>3?o=Array.prototype.slice.call(arguments,2):a===3&&Aa(o)&&(o=[o]),H(e,n,o))}finally{ar(1)}}const lm="3.5.41";let Lt;const zi=typeof window<"u"&&window.trustedTypes;if(zi)try{Lt=zi.createPolicy("vue",{createHTML:e=>e})}catch{}const Rc=Lt?e=>Lt.createHTML(e):e=>e,cm="http://www.w3.org/2000/svg",um="http://www.w3.org/1998/Math/MathML",Jn=typeof document<"u"?document:null,Hi=Jn&&Jn.createElement("template"),dm={insert:(e,n,o)=>{n.insertBefore(e,o||null)},remove:e=>{const n=e.parentNode;n&&n.removeChild(e)},createElement:(e,n,o,a)=>{const r=n==="svg"?Jn.createElementNS(cm,e):n==="mathml"?Jn.createElementNS(um,e):o?Jn.createElement(e,{is:o}):Jn.createElement(e);return e==="select"&&a&&a.multiple!=null&&r.setAttribute("multiple",a.multiple),r},createText:e=>Jn.createTextNode(e),createComment:e=>Jn.createComment(e),setText:(e,n)=>{e.nodeValue=n},setElementText:(e,n)=>{e.textContent=n},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>Jn.querySelector(e),setScopeId(e,n){e.setAttribute(n,"")},insertStaticContent(e,n,o,a,r,t){const s=o?o.previousSibling:n.lastChild;if(r&&(r===t||r.nextSibling))for(;n.insertBefore(r.cloneNode(!0),o),!(r===t||!(r=r.nextSibling)););else{Hi.innerHTML=Rc(a==="svg"?`<svg>${e}</svg>`:a==="mathml"?`<math>${e}</math>`:e);const l=Hi.content;if(a==="svg"||a==="mathml"){const c=l.firstChild;for(;c.firstChild;)l.appendChild(c.firstChild);l.removeChild(c)}n.insertBefore(l,o)}return[s?s.nextSibling:n.firstChild,o?o.previousSibling:n.lastChild]}},so="transition",na="animation",Ba=Symbol("_vtc"),Sc={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},mm=en({},Yl,Sc),pm=e=>(e.displayName="Transition",e.props=mm,e),fm=pm((e,{slots:n})=>zo(ud,vm(e),n)),Ao=(e,n=[])=>{Ne(e)?e.forEach(o=>o(...n)):e&&e(...n)},Ui=e=>e?Ne(e)?e.some(n=>n.length>1):e.length>1:!1;function vm(e){const n={};for(const I in e)I in Sc||(n[I]=e[I]);if(e.css===!1)return n;const{name:o="v",type:a,duration:r,enterFromClass:t=`${o}-enter-from`,enterActiveClass:s=`${o}-enter-active`,enterToClass:l=`${o}-enter-to`,appearFromClass:c=t,appearActiveClass:d=s,appearToClass:u=l,leaveFromClass:m=`${o}-leave-from`,leaveActiveClass:f=`${o}-leave-active`,leaveToClass:g=`${o}-leave-to`}=e,S=hm(r),x=S&&S[0],C=S&&S[1],{onBeforeEnter:T,onEnter:y,onEnterCancelled:k,onLeave:F,onLeaveCancelled:ve,onBeforeAppear:ce=T,onAppear:oe=y,onAppearCancelled:G=k}=n,R=(I,q,j,re)=>{I._enterCancelled=re,No(I,q?u:l),No(I,q?d:s),j&&j()},J=(I,q)=>{I._isLeaving=!1,No(I,m),No(I,g),No(I,f),q&&q()},te=I=>(q,j)=>{const re=I?oe:y,L=()=>R(q,I,j);Ao(re,[q,L]),Ki(()=>{No(q,I?c:t),Yn(q,I?u:l),Ui(re)||Gi(q,a,x,L)})};return en(n,{onBeforeEnter(I){Ao(T,[I]),Yn(I,t),Yn(I,s)},onBeforeAppear(I){Ao(ce,[I]),Yn(I,c),Yn(I,d)},onEnter:te(!1),onAppear:te(!0),onLeave(I,q){I._isLeaving=!0;const j=()=>J(I,q);Yn(I,m),I._enterCancelled?(Yn(I,f),Ji(I)):(Ji(I),Yn(I,f)),Ki(()=>{I._isLeaving&&(No(I,m),Yn(I,g),Ui(F)||Gi(I,a,C,j))}),Ao(F,[I,j])},onEnterCancelled(I){R(I,!1,void 0,!0),Ao(k,[I])},onAppearCancelled(I){R(I,!0,void 0,!0),Ao(G,[I])},onLeaveCancelled(I){J(I),Ao(ve,[I])}})}function hm(e){if(e==null)return null;if($e(e))return[Fr(e.enter),Fr(e.leave)];{const n=Fr(e);return[n,n]}}function Fr(e){return bu(e)}function Yn(e,n){n.split(/\s+/).forEach(o=>o&&e.classList.add(o)),(e[Ba]||(e[Ba]=new Set)).add(n)}function No(e,n){n.split(/\s+/).forEach(a=>a&&e.classList.remove(a));const o=e[Ba];o&&(o.delete(n),o.size||(e[Ba]=void 0))}function Ki(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}let gm=0;function Gi(e,n,o,a){const r=e._endId=++gm,t=()=>{r===e._endId&&a()};if(o!=null)return setTimeout(t,o);const{type:s,timeout:l,propCount:c}=bm(e,n);if(!s)return a();const d=s+"end";let u=0;const m=()=>{e.removeEventListener(d,f),t()},f=g=>{g.target===e&&++u>=c&&m()};setTimeout(()=>{u<c&&m()},l+1),e.addEventListener(d,f)}function bm(e,n){const o=window.getComputedStyle(e),a=S=>(o[S]||"").split(", "),r=a(`${so}Delay`),t=a(`${so}Duration`),s=Yi(r,t),l=a(`${na}Delay`),c=a(`${na}Duration`),d=Yi(l,c);let u=null,m=0,f=0;n===so?s>0&&(u=so,m=s,f=t.length):n===na?d>0&&(u=na,m=d,f=c.length):(m=Math.max(s,d),u=m>0?s>d?so:na:null,f=u?u===so?t.length:c.length:0);const g=u===so&&/\b(?:transform|all)(?:,|$)/.test(a(`${so}Property`).toString());return{type:u,timeout:m,propCount:f,hasTransform:g}}function Yi(e,n){for(;e.length<n.length;)e=e.concat(e);return Math.max(...n.map((o,a)=>Wi(o)+Wi(e[a])))}function Wi(e){return e==="auto"?0:Number(e.slice(0,-1).replace(",","."))*1e3}function Ji(e){return(e?e.ownerDocument:document).body.offsetHeight}function _m(e,n,o){const a=e[Ba];a&&(n=(n?[n,...a]:[...a]).join(" ")),n==null?e.removeAttribute("class"):o?e.setAttribute("class",n):e.className=n}const ir=Symbol("_vod"),wc=Symbol("_vsh"),Qi={name:"show",beforeMount(e,{value:n},{transition:o}){e[ir]=e.style.display==="none"?"":e.style.display,o&&n?o.beforeEnter(e):oa(e,n)},mounted(e,{value:n},{transition:o}){o&&n&&o.enter(e)},updated(e,{value:n,oldValue:o},{transition:a}){!n!=!o&&(a?n?(a.beforeEnter(e),oa(e,!0),a.enter(e)):a.leave(e,()=>{oa(e,!1)}):oa(e,n))},beforeUnmount(e,{value:n}){oa(e,n)}};function oa(e,n){e.style.display=n?e[ir]:"none",e[wc]=!n}const ym=Symbol(""),Am=/(?:^|;)\s*display\s*:/;function Nm(e,n,o){const a=e.style,r=ze(o);let t=!1;if(o&&!r){if(n)if(ze(n))for(const s of n.split(";")){const l=s.slice(0,s.indexOf(":")).trim();o[l]==null&&sa(a,l,"")}else for(const s in n)o[s]==null&&sa(a,s,"");for(const s in o){s==="display"&&(t=!0);const l=o[s];l!=null?Bm(e,s,!ze(n)&&n?n[s]:void 0,l)||sa(a,s,l):sa(a,s,"")}}else if(r){if(n!==o){const s=a[ym];s&&(o+=";"+s),a.cssText=o,t=Am.test(o)}}else n&&e.removeAttribute("style");ir in e&&(e[ir]=t?a.display:"",e[wc]&&(a.display="none"))}const Xi=/\s*!important$/;function sa(e,n,o){if(Ne(o))o.forEach(a=>sa(e,n,a));else if(o==null&&(o=""),n.startsWith("--"))e.setProperty(n,o);else{const a=xm(e,n);Xi.test(o)?e.setProperty(bo(a),o.replace(Xi,""),"important"):e[a]=o}}const Zi=["Webkit","Moz","ms"],zr={};function xm(e,n){const o=zr[n];if(o)return o;let a=_n(n);if(a!=="filter"&&a in e)return zr[n]=a;a=hr(a);for(let r=0;r<Zi.length;r++){const t=Zi[r]+a;if(t in e)return zr[n]=t}return n}function Bm(e,n,o,a){return e.tagName==="TEXTAREA"&&(n==="width"||n==="height")&&ze(a)&&o===a}const es="http://www.w3.org/1999/xlink";function ns(e,n,o,a,r,t=Bu(n)){a&&n.startsWith("xlink:")?o==null?e.removeAttributeNS(es,n.slice(6,n.length)):e.setAttributeNS(es,n,o):o==null||t&&!yl(o)?e.removeAttribute(n):e.setAttribute(n,t?"":Dn(o)?String(o):o)}function os(e,n,o,a,r){if(n==="innerHTML"||n==="textContent"){o!=null&&(e[n]=n==="innerHTML"?Rc(o):o);return}const t=e.tagName;if(n==="value"&&t!=="PROGRESS"&&!t.includes("-")){const l=t==="OPTION"?e.getAttribute("value")||"":e.value,c=o==null?e.type==="checkbox"?"on":"":String(o);(l!==c||!("_value"in e))&&(e.value=c),o==null&&e.removeAttribute(n),e._value=o;return}let s=!1;if(o===""||o==null){const l=typeof e[n];l==="boolean"?o=yl(o):o==null&&l==="string"?(o="",s=!0):l==="number"&&(o=0,s=!0)}try{e[n]=o}catch{}s&&e.removeAttribute(r||n)}function fo(e,n,o,a){e.addEventListener(n,o,a)}function Tm(e,n,o,a){e.removeEventListener(n,o,a)}const as=Symbol("_vei");function Rm(e,n,o,a,r=null){const t=e[as]||(e[as]={}),s=t[n];if(a&&s)s.value=a;else{const[l,c]=Em(n);if(a){const d=t[n]=Im(a,r);fo(e,l,d,c)}else s&&(Tm(e,l,s,c),t[n]=void 0)}}const Sm=/(Once|Passive|Capture)$/,wm=/^on:?(?:Once|Passive|Capture)$/;function Em(e){let n,o;for(;(o=e.match(Sm))&&!wm.test(e);)n||(n={}),e=e.slice(0,e.length-o[1].length),n[o[1].toLowerCase()]=!0;return[e[2]===":"?e.slice(3):bo(e.slice(2)),n]}let Hr=0;const Cm=Promise.resolve(),km=()=>Hr||(Cm.then(()=>Hr=0),Hr=Date.now());function Im(e,n){const o=a=>{if(!a._vts)a._vts=Date.now();else if(a._vts<=o.attached)return;const r=o.value;if(Ne(r)){const t=a.stopImmediatePropagation;a.stopImmediatePropagation=()=>{t.call(a),a._stopped=!0};const s=r.slice(),l=[a];for(let c=0;c<s.length&&!a._stopped;c++){const d=s[c];d&&kn(d,n,5,l)}}else kn(r,n,5,[a])};return o.value=e,o.attached=km(),o}const rs=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,Pm=(e,n,o,a,r,t)=>{const s=r==="svg";n==="class"?_m(e,a,s):n==="style"?Nm(e,o,a):pr(n)?fr(n)||Rm(e,n,o,a,t):(n[0]==="."?(n=n.slice(1),!0):n[0]==="^"?(n=n.slice(1),!1):Om(e,n,a,s))?(os(e,n,a),!e.tagName.includes("-")&&(n==="value"||n==="checked"||n==="selected")&&ns(e,n,a,s,t,n!=="value")):e._isVueCE&&(jm(e,n)||e._def.__asyncLoader&&(/[A-Z]/.test(n)||!ze(a)))?os(e,_n(n),a,t,n):(n==="true-value"?e._trueValue=a:n==="false-value"&&(e._falseValue=a),ns(e,n,a,s))};function Om(e,n,o,a){if(a)return!!(n==="innerHTML"||n==="textContent"||n in e&&rs(n)&&Ee(o));if(n==="spellcheck"||n==="draggable"||n==="translate"||n==="autocorrect"||n==="sandbox"&&e.tagName==="IFRAME"||n==="form"||n==="list"&&e.tagName==="INPUT"||n==="type"&&e.tagName==="TEXTAREA")return!1;if(n==="width"||n==="height"){const r=e.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return rs(n)&&ze(o)?!1:n in e}function jm(e,n){const o=e._def.props;if(!o)return!1;const a=_n(n);return Array.isArray(o)?o.some(r=>_n(r)===a):Object.keys(o).some(r=>_n(r)===a)}const Ho=e=>{const n=e.props["onUpdate:modelValue"]||!1;return Ne(n)?o=>Ya(n,o):n};function Dm(e){e.target.composing=!0}function ts(e){const n=e.target;n.composing&&(n.composing=!1,n.dispatchEvent(new Event("input")))}const Hn=Symbol("_assign"),za=Symbol("_initialValue");function Ur(e,n,o){return n&&(e=e.trim()),o&&(e=gr(e)),e}const Uo={created(e,{modifiers:{lazy:n,trim:o,number:a}},r){e.parentNode&&(e.type==="text"?e[za]=e.defaultValue.replace(/[\r\n]/g,""):e.type==="textarea"&&(e[za]=e.defaultValue.replace(/\r\n?/g,`
`))),e[Hn]=Ho(r);const t=a||r.props&&r.props.type==="number";fo(e,n?"change":"input",s=>{s.target.composing||e[Hn](Ur(e.value,o,t))}),(o||t)&&fo(e,"change",()=>{e.value=Ur(e.value,o,t)}),n||(fo(e,"compositionstart",Dm),fo(e,"compositionend",ts),fo(e,"change",ts))},mounted(e,{value:n,modifiers:{trim:o,number:a}}){const r=n??"",t=e[za];delete e[za],t!==void 0&&(e.type==="text"||e.type==="textarea")&&e.value!==t?e[Hn](Ur(e.value,o,a)):e.value=r},beforeUpdate(e,{value:n,oldValue:o,modifiers:{lazy:a,trim:r,number:t}},s){if(e[Hn]=Ho(s),e.composing)return;const l=(t||e.type==="number")&&!/^0\d/.test(e.value)?gr(e.value):e.value,c=n??"";if(l===c)return;const d=e.getRootNode();(d instanceof Document||d instanceof ShadowRoot)&&d.activeElement===e&&e.type!=="range"&&(a&&n===o||r&&e.value.trim()===c)||(e.value=c)}},Vm={deep:!0,created(e,n,o){e[Hn]=Ho(o),fo(e,"change",()=>{const a=e._modelValue,r=Ta(e),t=e.checked,s=e[Hn];if(Ne(a)){const l=Zt(a,r),c=l!==-1;if(t&&!c)s(a.concat(r));else if(!t&&c){const d=[...a];d.splice(l,1),s(d)}}else if(Yo(a)){const l=new Set(a);t?l.add(r):l.delete(r),s(l)}else s(Ec(e,t))})},mounted:is,beforeUpdate(e,n,o){e[Hn]=Ho(o),is(e,n,o)}};function is(e,{value:n,oldValue:o},a){e._modelValue=n;let r;if(Ne(n))r=Zt(n,a.props.value)>-1;else if(Yo(n))r=n.has(a.props.value);else{if(n===o)return;r=Wo(n,Ec(e,!0))}e.checked!==r&&(e.checked=r)}const Kr={deep:!0,created(e,{value:n,modifiers:{number:o}},a){e._modelValue=n,fo(e,"change",()=>{const r=Array.prototype.filter.call(e.options,t=>t.selected).map(t=>o?gr(Ta(t)):Ta(t));e[Hn](e.multiple?Yo(e._modelValue)?new Set(r):r:r[0]),e._assigning=!0,mn(()=>{e._assigning=!1})}),e[Hn]=Ho(a)},mounted(e,{value:n}){ss(e,n)},beforeUpdate(e,{value:n},o){e._modelValue=n,e[Hn]=Ho(o)},updated(e,{value:n}){e._assigning||ss(e,n)}};function ss(e,n){const o=e.multiple,a=Ne(n);if(!(o&&!a&&!Yo(n))){for(let r=0,t=e.options.length;r<t;r++){const s=e.options[r],l=Ta(s);if(o)if(a){const c=typeof l;c==="string"||c==="number"?s.selected=n.some(d=>String(d)===String(l)):s.selected=Zt(n,l)>-1}else s.selected=n.has(l);else if(Wo(Ta(s),n)){e.selectedIndex!==r&&(e.selectedIndex=r);return}}!o&&e.selectedIndex!==-1&&(e.selectedIndex=-1)}}function Ta(e){return"_value"in e?e._value:e.value}function Ec(e,n){const o=n?"_trueValue":"_falseValue";return o in e?e[o]:n}const Lm=["ctrl","shift","alt","meta"],$m={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&e.button!==0,middle:e=>"button"in e&&e.button!==1,right:e=>"button"in e&&e.button!==2,exact:(e,n)=>Lm.some(o=>e[`${o}Key`]&&!n.includes(o))},ro=(e,n)=>{if(!e)return e;const o=e._withMods||(e._withMods={}),a=n.join(".");return o[a]||(o[a]=((r,...t)=>{for(let s=0;s<n.length;s++){const l=$m[n[s]];if(l&&l(r,n))return}return e(r,...t)}))},qm={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},wr=(e,n)=>{const o=e._withKeys||(e._withKeys={}),a=n.join(".");return o[a]||(o[a]=(r=>{if(!("key"in r))return;const t=bo(r.key);if(n.some(s=>s===t||qm[s]===t))return e(r)}))},Mm=en({patchProp:Pm},dm);let ls;function Fm(){return ls||(ls=Kd(Mm))}const zm=((...e)=>{const n=Fm().createApp(...e),{mount:o}=n;return n.mount=a=>{const r=Um(a);if(!r)return;const t=n._component;!Ee(t)&&!t.render&&!t.template&&(t.template=r.innerHTML),r.nodeType===1&&(r.textContent="");const s=o(r,!1,Hm(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),s},n});function Hm(e){if(e instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&e instanceof MathMLElement)return"mathml"}function Um(e){return ze(e)?document.querySelector(e):e}const Km="modulepreload",Gm=function(e){return"/Extensao-26.2/"+e},cs={},Ym=function(n,o,a){let r=Promise.resolve();if(o&&o.length>0){let d=function(u){return Promise.all(u.map(m=>Promise.resolve(m).then(f=>({status:"fulfilled",value:f}),f=>({status:"rejected",reason:f}))))};var s=d;document.getElementsByTagName("link");const l=document.querySelector("meta[property=csp-nonce]"),c=l?.nonce||l?.getAttribute("nonce");r=d(o.map(u=>{if(u=Gm(u),u in cs)return;cs[u]=!0;const m=u.endsWith(".css"),f=m?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${u}"]${f}`))return;const g=document.createElement("link");if(g.rel=m?"stylesheet":Km,m||(g.as="script"),g.crossOrigin="",g.href=u,c&&g.setAttribute("nonce",c),document.head.appendChild(g),m)return new Promise((S,x)=>{g.addEventListener("load",S),g.addEventListener("error",()=>x(new Error(`Unable to preload CSS for ${u}`)))})}))}function t(l){const c=new Event("vite:preloadError",{cancelable:!0});if(c.payload=l,window.dispatchEvent(c),!c.defaultPrevented)throw l}return r.then(l=>{for(const c of l||[])c.status==="rejected"&&t(c.reason);return n().catch(t)})};function Wm(e={}){const{immediate:n=!1,onNeedReload:o,onNeedRefresh:a,onOfflineReady:r,onRegistered:t,onRegisteredSW:s,onRegisterError:l}=e;let c,d;const u=async(f=!0)=>{await d};async function m(){if("serviceWorker"in navigator){if(c=await Ym(async()=>{const{Workbox:f}=await import("./workbox-window.prod.es5-BBnX5xw4.js");return{Workbox:f}},[]).then(({Workbox:f})=>new f("/Extensao-26.2/sw.js",{scope:"/Extensao-26.2/",type:"classic"})).catch(f=>{l?.(f)}),!c)return;c.addEventListener("activated",f=>{(f.isUpdate||f.isExternal)&&(o?o():window.location.reload())}),c.addEventListener("installed",f=>{f.isUpdate||r?.()}),c.register({immediate:n}).then(f=>{s?s("/Extensao-26.2/sw.js",f):t?.(f)}).catch(f=>{l?.(f)})}}return d=m(),u}const Jm="acessibilidade-checker",Qm=2,hn=Object.freeze({projects:"projects",environments:"environments",elements:"elements",evaluations:"evaluations",ruleSets:"ruleSets"});function Oo(e){return new Promise((n,o)=>{e.onsuccess=()=>n(e.result),e.onerror=()=>o(e.error??new Error("Falha no IndexedDB."))})}function Xm(e=globalThis.indexedDB){if(!e)return Promise.reject(new Error("IndexedDB não está disponível neste ambiente."));const n=e.open(Jm,Qm);return n.onupgradeneeded=()=>{const o=n.result;if(o.objectStoreNames.contains(hn.projects)||o.createObjectStore(hn.projects,{keyPath:"id"}),o.objectStoreNames.contains(hn.environments)||o.createObjectStore(hn.environments,{keyPath:"id"}).createIndex("projectId","projectId",{unique:!1}),o.objectStoreNames.contains(hn.elements)||o.createObjectStore(hn.elements,{keyPath:"id"}).createIndex("environmentId","environmentId",{unique:!1}),!o.objectStoreNames.contains(hn.evaluations)){const a=o.createObjectStore(hn.evaluations,{keyPath:"id"});a.createIndex("elementId","elementId",{unique:!1}),a.createIndex("evaluatedAt","evaluatedAt",{unique:!1})}o.objectStoreNames.contains(hn.ruleSets)||o.createObjectStore(hn.ruleSets,{keyPath:"id"})},Oo(n)}async function aa(e,n,o,a){const r=e.transaction(n,o),t=r.objectStore(n),s=await a(t);return await new Promise((l,c)=>{r.oncomplete=l,r.onabort=r.onerror=()=>c(r.error??new Error("Transação IndexedDB não concluída."))}),s}class Oa{constructor(n,o){this.database=n,this.storeName=o}get(n){return aa(this.database,this.storeName,"readonly",o=>Oo(o.get(n)))}getAll(){return aa(this.database,this.storeName,"readonly",n=>Oo(n.getAll()))}getAllBy(n,o){return aa(this.database,this.storeName,"readonly",a=>Oo(a.index(n).getAll(o)))}put(n){return aa(this.database,this.storeName,"readwrite",async o=>(await Oo(o.put(n)),n))}delete(n){return aa(this.database,this.storeName,"readwrite",o=>Oo(o.delete(n)))}}class Zm extends Oa{constructor(n){super(n,hn.elements)}getByEnvironmentId(n){return this.getAllBy("environmentId",n)}}class ep extends Oa{constructor(n){super(n,hn.environments)}getByProjectId(n){return this.getAllBy("projectId",n)}}class np extends Oa{constructor(n){super(n,hn.evaluations)}getByElementId(n){return this.getAllBy("elementId",n)}}class op extends Oa{constructor(n){super(n,hn.projects)}}class ap extends Oa{constructor(n){super(n,hn.ruleSets)}}const rp=new Set([">=","<=",">","<","==","!="]);function sr(e,n,o){switch(n){case">=":return e>=o;case"<=":return e<=o;case">":return e>o;case"<":return e<o;case"==":return e===o;case"!=":return e!==o;default:throw new Error(`Operador não suportado: ${n}`)}}function tp(e,n){return n.obrigatorio&&(e==null||e==="")?{valid:!1,motivo:"obrigatorio",reason:"Campo obrigatório não preenchido."}:e==null||e===""?{valid:!0}:n.tipo==="number"&&typeof e!="number"?{valid:!1,motivo:"tipo",reason:"O valor deve ser numérico."}:n.tipo==="boolean"&&typeof e!="boolean"?{valid:!1,motivo:"tipo",reason:"O valor deve ser booleano."}:{valid:!0}}function Cc(e,n){for(const o of e?.condicoes??[])if(o?.quando&&sr(n,o.quando.operador,o.quando.valor)&&(o.resultado||o.verificar))return o}class ip{evaluate(n,o,a={}){return n.map(r=>this.evaluateRule(r,o,a))}evaluateRule(n,o,a){const r=a[n.parametro],t=o[n.parametro];if(!r)return{id:n.id,parametro:n.parametro,status:"erro",mensagem:`Parâmetro não definido: ${n.parametro}`};const s=tp(t,r);if(!s.valid)return{id:n.id,nome:n.nome,parametro:n.parametro,status:"invalido",motivo:s.motivo,mensagem:s.reason,referencia:n.referencia};if(t==null||t==="")return{id:n.id,nome:n.nome,parametro:n.parametro,status:"nao_avaliado",referencia:n.referencia};if(n.tipo==="checklist")return r.tipo==="boolean"?{id:n.id,nome:n.nome,status:t?"conforme":"nao_conforme",valorInformado:t,valorEsperado:!0,operador:"==",parametro:n.parametro,unidade:r.unidade,referencia:n.referencia}:{id:n.id,nome:n.nome,status:"manual",valor:t,mensagem:n.mensagem,referencia:n.referencia};if(n.tipo==="conditional")return this.evaluateConditional(n,o,a);const l=sr(t,n.operador,n.valor);return{id:n.id,nome:n.nome,status:l?"conforme":"nao_conforme",valorInformado:t,valorEsperado:n.valor,operador:n.operador,parametro:n.parametro,unidade:r.unidade,referencia:n.referencia}}evaluateConditional(n,o,a){const r=o[n.parametro],t=r!=null&&r!=="",s=Cc(n,r);if(s?.resultado)return{id:n.id,nome:n.nome,status:s.resultado,valorInformado:r,referencia:n.referencia,mensagem:s.mensagem};if(s?.verificar){const l=o[s.verificar.parametro],c=sr(l,s.verificar.operador,s.verificar.valor);return{id:n.id,nome:n.nome,status:c?"conforme":"nao_conforme",valorInformado:l,valorEsperado:s.verificar.valor,operador:s.verificar.operador,parametro:s.verificar.parametro,unidade:a[s.verificar.parametro]?.unidade,parametroCondicional:n.parametro,valorCondicional:r,operadorCondicional:s.quando.operador,limiteCondicional:s.quando.valor,mensagem:s.mensagem,referencia:n.referencia}}return t?{id:n.id,nome:n.nome,parametro:n.parametro,status:"erro",mensagem:`Nenhuma condição cobre ${n.parametro} = ${r}. Revise o conjunto de regras.`,referencia:n.referencia}:{id:n.id,nome:n.nome,parametro:n.parametro,status:"nao_avaliado",referencia:n.referencia}}}const sp={conforme:"Conforme",nao_conforme:"Não conforme",nao_avaliado:"Pendente",invalido:"Falta preencher",erro:"Erro no conjunto",atencao:"Atenção",manual:"Verificar"},Gr=[{id:"preencher",label:"aguardando medição",statuses:["invalido","nao_avaliado"]},{id:"verificar",label:"para verificar",statuses:["manual","atencao"]},{id:"erro",label:"com erro no conjunto",statuses:["erro"]}];function lp(e){return sp[e]??"Pendente"}function Ra(e){return e==="nao_conforme"?"nao_conforme":e==="conforme"?"conforme":"pendente"}function cp(e=[]){const n={conforme:0,nao_conforme:0,pendente:0},o=new Map(Gr.map(t=>[t.id,0]));for(const t of e){n[Ra(t.status)]+=1;const s=Gr.find(l=>l.statuses.includes(t.status));s&&o.set(s.id,o.get(s.id)+1)}const a=Gr.map(t=>({id:t.id,label:t.label,count:o.get(t.id)})).filter(t=>t.count>0),r=a.reduce((t,s)=>t+s.count,0);return n.pendente>r&&a.push({id:"outros",label:"sem classificação",count:n.pendente-r}),{...n,pendingBreakdown:a}}function wn(e,n){if(typeof e!="string"||e.trim()==="")throw new TypeError(`${n} deve ser um texto não vazio.`);return e.trim()}function ja(){return typeof globalThis.crypto?.randomUUID=="function"?globalThis.crypto.randomUUID():`${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`}function Kn(e=new Date,n="data"){const o=e instanceof Date?e:new Date(e);if(Number.isNaN(o.getTime()))throw new TypeError(`${n} deve ser uma data válida.`);return o.toISOString()}function $t(e){return typeof structuredClone=="function"?structuredClone(e):JSON.parse(JSON.stringify(e))}function Yr({id:e=ja(),elementId:n,data:o,result:a,evaluatedAt:r=new Date}={}){if(o===void 0||a===void 0)throw new TypeError("data e result são obrigatórios.");return{id:wn(e,"id"),elementId:wn(n,"elementId"),data:$t(o),result:$t(a),evaluatedAt:Kn(r,"evaluatedAt")}}function qt(e){const n=e[0]?.result;return n?.length?n.some(o=>Ra(o.status)==="nao_conforme")?"nao_conforme":n.some(o=>Ra(o.status)==="pendente")?"nao_avaliado":"conforme":"nao_avaliado"}class up{constructor({elementRepository:n,environmentRepository:o,evaluationRepository:a,ruleEngine:r=new ip}){this.elementRepository=n,this.environmentRepository=o,this.evaluationRepository=a,this.ruleEngine=r}async evaluateElement({elementId:n,checklist:o,data:a,evaluatedAt:r}){if(!await this.elementRepository.get(n))throw new Error("Elemento não encontrado.");const s=this.ruleEngine.evaluate(o.regras??[],a,o.parametros??{}),l=Yr({elementId:n,data:a,result:s,evaluatedAt:r});return this.evaluationRepository.put(l)}async saveElementData({elementId:n,data:o,savedAt:a}){if(!await this.elementRepository.get(n))throw new Error("Elemento não encontrado.");const t=Yr({elementId:n,data:o,result:[],evaluatedAt:a});return this.evaluationRepository.put(t)}async saveElementAnswers({elementId:n,checklist:o,data:a,savedAt:r}){return Object.keys(a??{}).length>0?this.evaluateElement({elementId:n,checklist:o,data:a,evaluatedAt:r}):this.saveElementData({elementId:n,data:a,savedAt:r})}evaluateTransientElement({elementId:n,checklist:o,data:a,evaluatedAt:r}){const t=this.ruleEngine.evaluate(o.regras??[],a,o.parametros??{});return Yr({elementId:n,data:a,result:t,evaluatedAt:r})}async listEvaluations(n){return(await this.evaluationRepository.getByElementId(n)).sort((a,r)=>r.evaluatedAt.localeCompare(a.evaluatedAt))}async getEnvironmentSummary(n){const o=await this.elementRepository.getByEnvironmentId(n);return this.#n(o)}async getProjectSummary(n){if(!this.environmentRepository)throw new Error("Repositório de ambientes não configurado.");const o=await this.environmentRepository.getByProjectId(n),a=await Promise.all(o.map(r=>this.elementRepository.getByEnvironmentId(r.id)));return this.#n(a.flat())}async getProjectStatus(n){if(!this.environmentRepository)throw new Error("Repositório de ambientes não configurado.");const o=await this.environmentRepository.getByProjectId(n),a=await Promise.all(o.map(async t=>{const s=await this.elementRepository.getByEnvironmentId(t.id),l=await Promise.all(s.map(async c=>({element:c,status:qt(await this.listEvaluations(c.id))})));return{environment:t,elements:l,summary:this.#e(l.map(c=>c.status))}})),r=a.flatMap(t=>t.elements.map(s=>s.status));return{summary:this.#e(r),environments:a}}async#n(n){const o=await Promise.all(n.map(async a=>qt(await this.listEvaluations(a.id))));return this.#e(o)}#e(n){const o={totalElements:n.length,conforme:0,nao_conforme:0,nao_avaliado:0,pendente:0,score:0,overallStatus:"nao_avaliado"};for(const a of n)o[a]+=1;return o.pendente=o.nao_avaliado,o.score=o.totalElements?Math.round(o.conforme/o.totalElements*100):0,o.nao_conforme>0?o.overallStatus="nao_conforme":o.nao_avaliado===0&&o.totalElements>0&&(o.overallStatus="conforme"),o}}function us({id:e=ja(),environmentId:n,name:o,type:a,rule:r,createdAt:t=new Date,updatedAt:s=t}={}){return{id:wn(e,"id"),environmentId:wn(n,"environmentId"),name:wn(o,"name"),type:wn(a,"type"),rule:wn(r,"rule"),createdAt:Kn(t,"createdAt"),updatedAt:Kn(s,"updatedAt")}}function ds({id:e=ja(),projectId:n,name:o,createdAt:a=new Date,updatedAt:r=a}={}){return{id:wn(e,"id"),projectId:wn(n,"projectId"),name:wn(o,"name"),createdAt:Kn(a,"createdAt"),updatedAt:Kn(r,"updatedAt")}}function lr(e){return String(e??"").trim().replace(/\s+/g," ").toLowerCase()}function dp(e,n,{exceptId:o}={}){const a=lr(n);return a?(e??[]).some(r=>r.id!==o&&lr(r?.name)===a):!1}function ms({id:e=ja(),name:n,description:o="",createdAt:a=new Date,updatedAt:r=a}={}){return{id:wn(e,"id"),name:wn(n,"name"),description:typeof o=="string"?o.trim():"",createdAt:Kn(a,"createdAt"),updatedAt:Kn(r,"updatedAt")}}class mp{constructor({projectRepository:n,environmentRepository:o,elementRepository:a,evaluationRepository:r}){this.projectRepository=n,this.environmentRepository=o,this.elementRepository=a,this.evaluationRepository=r}async createProject(n){const o=ms(n);return await this.#e({items:this.projectRepository.getAll(),name:o.name,message:"Já existe um projeto com esse nome."}),this.projectRepository.put(o)}listProjects(){return this.projectRepository.getAll()}getProject(n){return this.projectRepository.get(n)}async updateProject(n,{name:o,description:a}){const r=await this.#n(this.projectRepository.get(n),"Projeto");return await this.#e({items:this.projectRepository.getAll(),name:o,currentName:r.name,exceptId:n,message:"Já existe um projeto com esse nome."}),this.projectRepository.put(ms({...r,name:o,description:a,updatedAt:new Date}))}async renameProject(n,o){const a=await this.#n(this.projectRepository.get(n),"Projeto");return this.updateProject(n,{name:o,description:a.description})}async createEnvironment(n,o){await this.#n(this.projectRepository.get(n),"Projeto");const a=ds({...o,projectId:n});return await this.#e({items:this.environmentRepository.getByProjectId(n),name:a.name,message:"Já existe um ambiente com esse nome neste projeto."}),this.environmentRepository.put(a)}listEnvironments(n){return this.environmentRepository.getByProjectId(n)}getEnvironment(n){return this.environmentRepository.get(n)}async renameEnvironment(n,o){const a=await this.#n(this.environmentRepository.get(n),"Ambiente");return await this.#e({items:this.environmentRepository.getByProjectId(a.projectId),name:o,currentName:a.name,exceptId:n,message:"Já existe um ambiente com esse nome neste projeto."}),this.environmentRepository.put(ds({...a,name:o,updatedAt:new Date}))}async createElement(n,o){await this.#n(this.environmentRepository.get(n),"Ambiente");const a=us({...o,environmentId:n});return await this.#e({items:this.elementRepository.getByEnvironmentId(n),name:a.name,message:"Já existe um elemento com esse nome neste ambiente."}),this.elementRepository.put(a)}listElements(n){return this.elementRepository.getByEnvironmentId(n)}getElement(n){return this.elementRepository.get(n)}async updateElement(n,o){const a=await this.#n(this.elementRepository.get(n),"Elemento");return await this.#e({items:this.elementRepository.getByEnvironmentId(a.environmentId),name:o.name??a.name,currentName:a.name,exceptId:n,message:"Já existe um elemento com esse nome neste ambiente."}),this.elementRepository.put(us({...a,...o,id:a.id,environmentId:a.environmentId,createdAt:a.createdAt,updatedAt:Kn(new Date)}))}async deleteElement(n){const o=await this.evaluationRepository.getByElementId(n);await Promise.all(o.map(a=>this.evaluationRepository.delete(a.id))),await this.elementRepository.delete(n)}async deleteEnvironment(n){const o=await this.elementRepository.getByEnvironmentId(n);await Promise.all(o.map(a=>this.deleteElement(a.id))),await this.environmentRepository.delete(n)}async deleteProject(n){const o=await this.environmentRepository.getByProjectId(n);await Promise.all(o.map(a=>this.deleteEnvironment(a.id))),await this.projectRepository.delete(n)}async#n(n,o){const a=await n;if(!a)throw new Error(`${o} não encontrado.`);return a}async#e({items:n,name:o,currentName:a,exceptId:r,message:t}){if(!(a!==void 0&&lr(o)===lr(a))&&dp(await n,o,{exceptId:r}))throw new Error(t)}}class pp{constructor({evaluationService:n}){this.evaluationService=n,this.current=null}evaluate({name:n,checklist:o,data:a}){const r={id:ja(),name:n?.trim()||o.nome,type:o.nome,rule:o.id},t=this.evaluationService.evaluateTransientElement({elementId:r.id,checklist:o,data:a});return this.current={element:r,evaluation:t},this.current}getCurrent(){return this.current}clear(){this.current=null}}const fp=new Set(["checklist","conditional"]),vp={checklist:["condicoes","operador","valor"],conditional:["operador","valor"],direta:["condicoes"]},hp=new Set(["number","boolean","select"]),ps=new Set(["conforme","nao_conforme","nao_avaliado","atencao","manual"]);function En(e){return e!==null&&typeof e=="object"&&!Array.isArray(e)}function fa(e,n,o){(typeof e!="string"||e.trim()==="")&&o.push(`${n} deve ser um texto não vazio.`)}function kc(e,n,o){rp.has(e)||o.push(`${n} deve ser um operador suportado.`)}function fs(e,n,o){if(!En(e)){o.push(`${n} deve ser um objeto.`);return}kc(e.operador,`${n}.operador`,o),"valor"in e||o.push(`${n}.valor é obrigatório.`)}function gp(e,n){for(const[o,a]of Object.entries(e)){const r=`parametros.${o}`;if(!En(a)){n.push(`${r} deve ser um objeto.`);continue}hp.has(a.tipo)||n.push(`${r}.tipo deve ser number, boolean ou select.`),a.tipo==="select"&&(!Array.isArray(a.opcoes)||a.opcoes.length===0)&&n.push(`${r}.opcoes deve listar as opções do campo do tipo select.`),"unidade"in a&&!_p(a.unidade)&&n.push(`${r}.unidade deve ser um texto ou { singular, plural }.`)}}function vs(e,n){return e.some(o=>o.operador==="=="?o.valor===n:o.operador==="!="&&o.valor!==n)}function bp(e,n){const o=e.map(a=>En(a)?a.quando:null).filter(En);return o.some(a=>a.operador===">"||a.operador===">=")?!0:n.tipo==="boolean"?[!0,!1].every(a=>vs(o,a)):n.tipo==="select"?(n.opcoes??[]).every(a=>vs(o,a)):!1}function _p(e){return typeof e=="string"?!0:En(e)&&typeof e.singular=="string"&&e.singular.trim()!==""&&typeof e.plural=="string"&&e.plural.trim()!==""}function yp(e,n,o){const a=e.tipo??"direta",r=(vp[a]??[]).filter(t=>t in e);r.length&&o.push(`${n} não usa ${r.join(", ")} em regra do tipo ${a}; o motor ignora esse campo.`)}function Ap(e,n,o,a){const r=`regras[${n}]`;if(!En(e)){a.push(`${r} deve ser um objeto.`);return}if(yp(e,r,a),fa(e.id,`${r}.id`,a),fa(e.nome,`${r}.nome`,a),fa(e.parametro,`${r}.parametro`,a),typeof e.parametro=="string"&&!(e.parametro in o)&&a.push(`${r}.parametro deve existir em parametros.`),e.tipo==="checklist"){const t=o[e.parametro];En(t)&&t.tipo!=="boolean"&&(typeof e.mensagem!="string"||e.mensagem.trim()==="")&&a.push(`${r}.mensagem é obrigatória em regra checklist de campo ${t.tipo}: descreva o critério de julgamento.`);return}if(e.tipo==="conditional"){if(!Array.isArray(e.condicoes)||e.condicoes.length===0){a.push(`${r}.condicoes deve conter ao menos uma condição.`);return}e.condicoes.forEach((s,l)=>{const c=`${r}.condicoes[${l}]`;if(!En(s)){a.push(`${c} deve ser um objeto.`);return}fs(s.quando,`${c}.quando`,a);const d=typeof s.resultado=="string"&&s.resultado!=="",u="verificar"in s;d===u&&a.push(`${c} deve informar exatamente resultado ou verificar.`),d&&!ps.has(s.resultado)&&a.push(`${c}.resultado deve ser um de: ${[...ps].join(", ")}.`),u&&(fs(s.verificar,`${c}.verificar`,a),(typeof s.verificar?.parametro!="string"||!(s.verificar.parametro in o))&&a.push(`${c}.verificar.parametro deve existir em parametros.`))});const t=o[e.parametro];En(t)&&!bp(e.condicoes,t)&&a.push(`${r}.condicoes deve cobrir todos os valores de ${e.parametro}: inclua um ramo final com operador ">" ou ">=", ou um ramo para cada opção do campo.`);return}e.tipo!==void 0&&!fp.has(e.tipo)&&a.push(`${r}.tipo não é suportado.`),kc(e.operador,`${r}.operador`,a),"valor"in e||a.push(`${r}.valor é obrigatório.`)}function Np(e){const n=[];return En(e)?(fa(e.id,"id",n),fa(e.nome,"nome",n),En(e.parametros)||n.push("parametros deve ser um objeto."),Array.isArray(e.regras)||n.push("regras deve ser uma lista."),En(e.parametros)&&Array.isArray(e.regras)&&(gp(e.parametros,n),e.regras.forEach((o,a)=>Ap(o,a,e.parametros,n))),{valid:n.length===0,errors:n}):{valid:!1,errors:["O conjunto de regras deve ser um objeto."]}}function Mt(e){const n=Np(e);if(!n.valid)throw new TypeError(`Conjunto de regras inválido: ${n.errors.join(" ")}`);return e}function xp(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var tn={},Ha={},lo={},hs;function Da(){if(hs)return lo;hs=1;function e(s){return typeof s>"u"||s===null}function n(s){return typeof s=="object"&&s!==null}function o(s){return Array.isArray(s)?s:e(s)?[]:[s]}function a(s,l){if(l){const c=Object.keys(l);for(let d=0,u=c.length;d<u;d+=1){const m=c[d];s[m]=l[m]}}return s}function r(s,l){let c="";for(let d=0;d<l;d+=1)c+=s;return c}function t(s){return s===0&&Number.NEGATIVE_INFINITY===1/s}return lo.isNothing=e,lo.isObject=n,lo.toArray=o,lo.repeat=r,lo.isNegativeZero=t,lo.extend=a,lo}var Wr,gs;function Va(){if(gs)return Wr;gs=1;function e(o,a){let r="";const t=o.reason||"(unknown reason)";return o.mark?(o.mark.name&&(r+='in "'+o.mark.name+'" '),r+="("+(o.mark.line+1)+":"+(o.mark.column+1)+")",!a&&o.mark.snippet&&(r+=`

`+o.mark.snippet),t+" "+r):t}function n(o,a){Error.call(this),this.name="YAMLException",this.reason=o,this.mark=a,this.message=e(this,!1),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack||""}return n.prototype=Object.create(Error.prototype),n.prototype.constructor=n,n.prototype.toString=function(a){return this.name+": "+e(this,a)},Wr=n,Wr}var Jr,bs;function Bp(){if(bs)return Jr;bs=1;const e=Da();function n(r,t,s,l,c){let d="",u="";const m=Math.floor(c/2)-1;return l-t>m&&(d=" ... ",t=l-m+d.length),s-l>m&&(u=" ...",s=l+m-u.length),{str:d+r.slice(t,s).replace(/\t/g,"→")+u,pos:l-t+d.length}}function o(r,t){return e.repeat(" ",t-r.length)+r}function a(r,t){if(t=Object.create(t||null),!r.buffer)return null;t.maxLength||(t.maxLength=79),typeof t.indent!="number"&&(t.indent=1),typeof t.linesBefore!="number"&&(t.linesBefore=3),typeof t.linesAfter!="number"&&(t.linesAfter=2);const s=/\r?\n|\r|\0/g,l=[0],c=[];let d,u=-1;for(;d=s.exec(r.buffer);)c.push(d.index),l.push(d.index+d[0].length),r.position<=d.index&&u<0&&(u=l.length-2);u<0&&(u=l.length-1);let m="";const f=Math.min(r.line+t.linesAfter,c.length).toString().length,g=t.maxLength-(t.indent+f+3);for(let x=1;x<=t.linesBefore&&!(u-x<0);x++){const C=n(r.buffer,l[u-x],c[u-x],r.position-(l[u]-l[u-x]),g);m=e.repeat(" ",t.indent)+o((r.line-x+1).toString(),f)+" | "+C.str+`
`+m}const S=n(r.buffer,l[u],c[u],r.position,g);m+=e.repeat(" ",t.indent)+o((r.line+1).toString(),f)+" | "+S.str+`
`,m+=e.repeat("-",t.indent+f+3+S.pos)+`^
`;for(let x=1;x<=t.linesAfter&&!(u+x>=c.length);x++){const C=n(r.buffer,l[u+x],c[u+x],r.position-(l[u]-l[u+x]),g);m+=e.repeat(" ",t.indent)+o((r.line+x+1).toString(),f)+" | "+C.str+`
`}return m.replace(/\n$/,"")}return Jr=a,Jr}var Qr,_s;function yn(){if(_s)return Qr;_s=1;const e=Va(),n=["kind","multi","resolve","construct","instanceOf","predicate","represent","representName","defaultStyle","styleAliases"],o=["scalar","sequence","mapping"];function a(t){const s={};return t!==null&&Object.keys(t).forEach(function(l){t[l].forEach(function(c){s[String(c)]=l})}),s}function r(t,s){if(s=s||{},Object.keys(s).forEach(function(l){if(n.indexOf(l)===-1)throw new e('Unknown option "'+l+'" is met in definition of "'+t+'" YAML type.')}),this.options=s,this.tag=t,this.kind=s.kind||null,this.resolve=s.resolve||function(){return!0},this.construct=s.construct||function(l){return l},this.instanceOf=s.instanceOf||null,this.predicate=s.predicate||null,this.represent=s.represent||null,this.representName=s.representName||null,this.defaultStyle=s.defaultStyle||null,this.multi=s.multi||!1,this.styleAliases=a(s.styleAliases||null),o.indexOf(this.kind)===-1)throw new e('Unknown kind "'+this.kind+'" is specified for "'+t+'" YAML type.')}return Qr=r,Qr}var Xr,ys;function Ic(){if(ys)return Xr;ys=1;const e=Va(),n=yn();function o(t,s){const l=[];return t[s].forEach(function(c){let d=l.length;l.forEach(function(u,m){u.tag===c.tag&&u.kind===c.kind&&u.multi===c.multi&&(d=m)}),l[d]=c}),l}function a(){const t={scalar:{},sequence:{},mapping:{},fallback:{},multi:{scalar:[],sequence:[],mapping:[],fallback:[]}};function s(l){l.multi?(t.multi[l.kind].push(l),t.multi.fallback.push(l)):t[l.kind][l.tag]=t.fallback[l.tag]=l}for(let l=0,c=arguments.length;l<c;l+=1)arguments[l].forEach(s);return t}function r(t){return this.extend(t)}return r.prototype.extend=function(s){let l=[],c=[];if(s instanceof n)c.push(s);else if(Array.isArray(s))c=c.concat(s);else if(s&&(Array.isArray(s.implicit)||Array.isArray(s.explicit)))s.implicit&&(l=l.concat(s.implicit)),s.explicit&&(c=c.concat(s.explicit));else throw new e("Schema.extend argument should be a Type, [ Type ], or a schema definition ({ implicit: [...], explicit: [...] })");l.forEach(function(u){if(!(u instanceof n))throw new e("Specified list of YAML types (or a single Type object) contains a non-Type object.");if(u.loadKind&&u.loadKind!=="scalar")throw new e("There is a non-scalar type in the implicit list of a schema. Implicit resolving of such types is not supported.");if(u.multi)throw new e("There is a multi type in the implicit list of a schema. Multi tags can only be listed as explicit.")}),c.forEach(function(u){if(!(u instanceof n))throw new e("Specified list of YAML types (or a single Type object) contains a non-Type object.")});const d=Object.create(r.prototype);return d.implicit=(this.implicit||[]).concat(l),d.explicit=(this.explicit||[]).concat(c),d.compiledImplicit=o(d,"implicit"),d.compiledExplicit=o(d,"explicit"),d.compiledTypeMap=a(d.compiledImplicit,d.compiledExplicit),d},Xr=r,Xr}var Zr,As;function Pc(){if(As)return Zr;As=1;const e=yn();return Zr=new e("tag:yaml.org,2002:str",{kind:"scalar",construct:function(n){return n!==null?n:""}}),Zr}var et,Ns;function Oc(){if(Ns)return et;Ns=1;const e=yn();return et=new e("tag:yaml.org,2002:seq",{kind:"sequence",construct:function(n){return n!==null?n:[]}}),et}var nt,xs;function jc(){if(xs)return nt;xs=1;const e=yn();return nt=new e("tag:yaml.org,2002:map",{kind:"mapping",construct:function(n){return n!==null?n:{}}}),nt}var ot,Bs;function Dc(){if(Bs)return ot;Bs=1;const e=Ic();return ot=new e({explicit:[Pc(),Oc(),jc()]}),ot}var at,Ts;function Vc(){if(Ts)return at;Ts=1;const e=yn();function n(r){if(r===null)return!0;const t=r.length;return t===1&&r==="~"||t===4&&(r==="null"||r==="Null"||r==="NULL")}function o(){return null}function a(r){return r===null}return at=new e("tag:yaml.org,2002:null",{kind:"scalar",resolve:n,construct:o,predicate:a,represent:{canonical:function(){return"~"},lowercase:function(){return"null"},uppercase:function(){return"NULL"},camelcase:function(){return"Null"},empty:function(){return""}},defaultStyle:"lowercase"}),at}var rt,Rs;function Lc(){if(Rs)return rt;Rs=1;const e=yn();function n(r){if(r===null)return!1;const t=r.length;return t===4&&(r==="true"||r==="True"||r==="TRUE")||t===5&&(r==="false"||r==="False"||r==="FALSE")}function o(r){return r==="true"||r==="True"||r==="TRUE"}function a(r){return Object.prototype.toString.call(r)==="[object Boolean]"}return rt=new e("tag:yaml.org,2002:bool",{kind:"scalar",resolve:n,construct:o,predicate:a,represent:{lowercase:function(r){return r?"true":"false"},uppercase:function(r){return r?"TRUE":"FALSE"},camelcase:function(r){return r?"True":"False"}},defaultStyle:"lowercase"}),rt}var tt,Ss;function $c(){if(Ss)return tt;Ss=1;const e=Da(),n=yn();function o(d){return d>=48&&d<=57||d>=65&&d<=70||d>=97&&d<=102}function a(d){return d>=48&&d<=55}function r(d){return d>=48&&d<=57}function t(d){if(d===null)return!1;const u=d.length;let m=0,f=!1;if(!u)return!1;let g=d[m];if((g==="-"||g==="+")&&(g=d[++m]),g==="0"){if(m+1===u)return!0;if(g=d[++m],g==="b"){for(m++;m<u;m++){if(g=d[m],g!=="0"&&g!=="1")return!1;f=!0}return f&&isFinite(s(d))}if(g==="x"){for(m++;m<u;m++){if(!o(d.charCodeAt(m)))return!1;f=!0}return f&&isFinite(s(d))}if(g==="o"){for(m++;m<u;m++){if(!a(d.charCodeAt(m)))return!1;f=!0}return f&&isFinite(s(d))}}for(;m<u;m++){if(!r(d.charCodeAt(m)))return!1;f=!0}return f?isFinite(s(d)):!1}function s(d){let u=d,m=1,f=u[0];if((f==="-"||f==="+")&&(f==="-"&&(m=-1),u=u.slice(1),f=u[0]),u==="0")return 0;if(f==="0"){if(u[1]==="b")return m*parseInt(u.slice(2),2);if(u[1]==="x")return m*parseInt(u.slice(2),16);if(u[1]==="o")return m*parseInt(u.slice(2),8)}return m*parseInt(u,10)}function l(d){return s(d)}function c(d){return Object.prototype.toString.call(d)==="[object Number]"&&d%1===0&&!e.isNegativeZero(d)}return tt=new n("tag:yaml.org,2002:int",{kind:"scalar",resolve:t,construct:l,predicate:c,represent:{binary:function(d){return d>=0?"0b"+d.toString(2):"-0b"+d.toString(2).slice(1)},octal:function(d){return d>=0?"0o"+d.toString(8):"-0o"+d.toString(8).slice(1)},decimal:function(d){return d.toString(10)},hexadecimal:function(d){return d>=0?"0x"+d.toString(16).toUpperCase():"-0x"+d.toString(16).toUpperCase().slice(1)}},defaultStyle:"decimal",styleAliases:{binary:[2,"bin"],octal:[8,"oct"],decimal:[10,"dec"],hexadecimal:[16,"hex"]}}),tt}var it,ws;function qc(){if(ws)return it;ws=1;const e=Da(),n=yn(),o=new RegExp("^(?:[-+]?(?:[0-9]+)(?:\\.[0-9]*)?(?:[eE][-+]?[0-9]+)?|\\.[0-9]+(?:[eE][-+]?[0-9]+)?|[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$"),a=new RegExp("^(?:[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$");function r(d){return d===null||!o.test(d)?!1:isFinite(parseFloat(d,10))?!0:a.test(d)}function t(d){let u=d.toLowerCase();const m=u[0]==="-"?-1:1;return"+-".indexOf(u[0])>=0&&(u=u.slice(1)),u===".inf"?m===1?Number.POSITIVE_INFINITY:Number.NEGATIVE_INFINITY:u===".nan"?NaN:m*parseFloat(u,10)}const s=/^[-+]?[0-9]+e/;function l(d,u){if(isNaN(d))switch(u){case"lowercase":return".nan";case"uppercase":return".NAN";case"camelcase":return".NaN"}else if(Number.POSITIVE_INFINITY===d)switch(u){case"lowercase":return".inf";case"uppercase":return".INF";case"camelcase":return".Inf"}else if(Number.NEGATIVE_INFINITY===d)switch(u){case"lowercase":return"-.inf";case"uppercase":return"-.INF";case"camelcase":return"-.Inf"}else if(e.isNegativeZero(d))return"-0.0";const m=d.toString(10);return s.test(m)?m.replace("e",".e"):m}function c(d){return Object.prototype.toString.call(d)==="[object Number]"&&(d%1!==0||e.isNegativeZero(d))}return it=new n("tag:yaml.org,2002:float",{kind:"scalar",resolve:r,construct:t,predicate:c,represent:l,defaultStyle:"lowercase"}),it}var st,Es;function Mc(){return Es||(Es=1,st=Dc().extend({implicit:[Vc(),Lc(),$c(),qc()]})),st}var lt,Cs;function Fc(){return Cs||(Cs=1,lt=Mc()),lt}var ct,ks;function zc(){if(ks)return ct;ks=1;const e=yn(),n=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9])-([0-9][0-9])$"),o=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9]?)-([0-9][0-9]?)(?:[Tt]|[ \\t]+)([0-9][0-9]?):([0-9][0-9]):([0-9][0-9])(?:\\.([0-9]*))?(?:[ \\t]*(Z|([-+])([0-9][0-9]?)(?::([0-9][0-9]))?))?$");function a(s){return s===null?!1:n.exec(s)!==null||o.exec(s)!==null}function r(s){let l=0,c=null,d=n.exec(s);if(d===null&&(d=o.exec(s)),d===null)throw new Error("Date resolve error");const u=+d[1],m=+d[2]-1,f=+d[3];if(!d[4])return new Date(Date.UTC(u,m,f));const g=+d[4],S=+d[5],x=+d[6];if(d[7]){for(l=d[7].slice(0,3);l.length<3;)l+="0";l=+l}if(d[9]){const T=+d[10],y=+(d[11]||0);c=(T*60+y)*6e4,d[9]==="-"&&(c=-c)}const C=new Date(Date.UTC(u,m,f,g,S,x,l));return c&&C.setTime(C.getTime()-c),C}function t(s){return s.toISOString()}return ct=new e("tag:yaml.org,2002:timestamp",{kind:"scalar",resolve:a,construct:r,instanceOf:Date,represent:t}),ct}var ut,Is;function Hc(){if(Is)return ut;Is=1;const e=yn();function n(o){return o==="<<"||o===null}return ut=new e("tag:yaml.org,2002:merge",{kind:"scalar",resolve:n}),ut}var dt,Ps;function Uc(){if(Ps)return dt;Ps=1;const e=yn(),n=`ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=
\r`;function o(s){if(s===null)return!1;let l=0;const c=s.length,d=n;for(let u=0;u<c;u++){const m=d.indexOf(s.charAt(u));if(!(m>64)){if(m<0)return!1;l+=6}}return l%8===0}function a(s){const l=s.replace(/[\r\n=]/g,""),c=l.length,d=n;let u=0;const m=[];for(let g=0;g<c;g++)g%4===0&&g&&(m.push(u>>16&255),m.push(u>>8&255),m.push(u&255)),u=u<<6|d.indexOf(l.charAt(g));const f=c%4*6;return f===0?(m.push(u>>16&255),m.push(u>>8&255),m.push(u&255)):f===18?(m.push(u>>10&255),m.push(u>>2&255)):f===12&&m.push(u>>4&255),new Uint8Array(m)}function r(s){let l="",c=0;const d=s.length,u=n;for(let f=0;f<d;f++)f%3===0&&f&&(l+=u[c>>18&63],l+=u[c>>12&63],l+=u[c>>6&63],l+=u[c&63]),c=(c<<8)+s[f];const m=d%3;return m===0?(l+=u[c>>18&63],l+=u[c>>12&63],l+=u[c>>6&63],l+=u[c&63]):m===2?(l+=u[c>>10&63],l+=u[c>>4&63],l+=u[c<<2&63],l+=u[64]):m===1&&(l+=u[c>>2&63],l+=u[c<<4&63],l+=u[64],l+=u[64]),l}function t(s){return Object.prototype.toString.call(s)==="[object Uint8Array]"}return dt=new e("tag:yaml.org,2002:binary",{kind:"scalar",resolve:o,construct:a,predicate:t,represent:r}),dt}var mt,Os;function Kc(){if(Os)return mt;Os=1;const e=yn(),n=Object.prototype.hasOwnProperty,o=Object.prototype.toString;function a(t){if(t===null)return!0;const s={},l=t;for(let c=0,d=l.length;c<d;c+=1){const u=l[c];let m=!1;if(o.call(u)!=="[object Object]")return!1;let f;for(f in u)if(n.call(u,f))if(!m)m=!0;else return!1;if(!m||n.call(s,f))return!1;Object.defineProperty(s,f,{value:!0})}return!0}function r(t){return t!==null?t:[]}return mt=new e("tag:yaml.org,2002:omap",{kind:"sequence",resolve:a,construct:r}),mt}var pt,js;function Gc(){if(js)return pt;js=1;const e=yn(),n=Object.prototype.toString;function o(r){if(r===null)return!0;const t=r,s=new Array(t.length);for(let l=0,c=t.length;l<c;l+=1){const d=t[l];if(n.call(d)!=="[object Object]")return!1;const u=Object.keys(d);if(u.length!==1)return!1;s[l]=[u[0],d[u[0]]]}return!0}function a(r){if(r===null)return[];const t=r,s=new Array(t.length);for(let l=0,c=t.length;l<c;l+=1){const d=t[l],u=Object.keys(d);s[l]=[u[0],d[u[0]]]}return s}return pt=new e("tag:yaml.org,2002:pairs",{kind:"sequence",resolve:o,construct:a}),pt}var ft,Ds;function Yc(){if(Ds)return ft;Ds=1;const e=yn(),n=Object.prototype.hasOwnProperty;function o(r){if(r===null)return!0;const t=r;for(const s in t)if(n.call(t,s)&&t[s]!==null)return!1;return!0}function a(r){return r!==null?r:{}}return ft=new e("tag:yaml.org,2002:set",{kind:"mapping",resolve:o,construct:a}),ft}var vt,Vs;function fi(){return Vs||(Vs=1,vt=Fc().extend({implicit:[zc(),Hc()],explicit:[Uc(),Kc(),Gc(),Yc()]})),vt}var Ls;function Tp(){if(Ls)return Ha;Ls=1;const e=Da(),n=Va(),o=Bp(),a=fi(),r=Object.prototype.hasOwnProperty,t=1,s=2,l=3,c=4,d=1,u=2,m=3,f=/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F-\x84\x86-\x9F\uFFFE\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/,g=/[\x85\u2028\u2029]/,S=/[,\[\]{}]/,x=/^(?:!|!!|![0-9A-Za-z-]+!)$/,C=/^(?:!|[^,\[\]{}])(?:%[0-9a-f]{2}|[0-9a-z\-#;/?:@&=+$,_.!~*'()\[\]])*$/i;function T(i){return Object.prototype.toString.call(i)}function y(i){return i===10||i===13}function k(i){return i===9||i===32}function F(i){return i===9||i===32||i===10||i===13}function ve(i){return i===44||i===91||i===93||i===123||i===125}function ce(i){if(i>=48&&i<=57)return i-48;const _=i|32;return _>=97&&_<=102?_-97+10:-1}function oe(i){return i===120?2:i===117?4:i===85?8:0}function G(i){return i>=48&&i<=57?i-48:-1}function R(i){switch(i){case 48:return"\0";case 97:return"\x07";case 98:return"\b";case 116:return"	";case 9:return"	";case 110:return`
`;case 118:return"\v";case 102:return"\f";case 114:return"\r";case 101:return"\x1B";case 32:return" ";case 34:return'"';case 47:return"/";case 92:return"\\";case 78:return"";case 95:return" ";case 76:return"\u2028";case 80:return"\u2029";default:return""}}function J(i){return i<=65535?String.fromCharCode(i):String.fromCharCode((i-65536>>10)+55296,(i-65536&1023)+56320)}function te(i,_,E){_==="__proto__"?Object.defineProperty(i,_,{configurable:!0,enumerable:!0,writable:!0,value:E}):i[_]=E}const I=new Array(256),q=new Array(256);for(let i=0;i<256;i++)I[i]=R(i)?1:0,q[i]=R(i);function j(i,_){this.input=i,this.filename=_.filename||null,this.schema=_.schema||a,this.onWarning=_.onWarning||null,this.legacy=_.legacy||!1,this.json=_.json||!1,this.listener=_.listener||null,this.maxDepth=typeof _.maxDepth=="number"?_.maxDepth:100,this.maxTotalMergeKeys=typeof _.maxTotalMergeKeys=="number"?_.maxTotalMergeKeys:1e4,this.implicitTypes=this.schema.compiledImplicit,this.typeMap=this.schema.compiledTypeMap,this.length=i.length,this.position=0,this.line=0,this.lineStart=0,this.lineIndent=0,this.depth=0,this.totalMergeKeys=0,this.firstTabInLine=-1,this.documents=[],this.anchorMapTransactions=[]}function re(i,_){const E={name:i.filename,buffer:i.input.slice(0,-1),position:i.position,line:i.line,column:i.position-i.lineStart};return E.snippet=o(E),new n(_,E)}function L(i,_){throw re(i,_)}function Se(i,_){i.onWarning&&i.onWarning.call(null,re(i,_))}function Be(i,_,E){const D=i.anchorMapTransactions;if(D.length!==0){const w=D[D.length-1];r.call(w,_)||(w[_]={existed:r.call(i.anchorMap,_),value:i.anchorMap[_]})}i.anchorMap[_]=E}function on(i){i.anchorMapTransactions.push(Object.create(null))}function Ue(i){const _=i.anchorMapTransactions.pop(),E=i.anchorMapTransactions;if(E.length===0)return;const D=E[E.length-1],w=Object.keys(_);for(let X=0,p=w.length;X<p;X+=1){const N=w[X];r.call(D,N)||(D[N]=_[N])}}function Ye(i){const _=i.anchorMapTransactions.pop(),E=Object.keys(_);for(let D=E.length-1;D>=0;D-=1){const w=_[E[D]];w.existed?i.anchorMap[E[D]]=w.value:delete i.anchorMap[E[D]]}}function Qe(i){return{position:i.position,line:i.line,lineStart:i.lineStart,lineIndent:i.lineIndent,firstTabInLine:i.firstTabInLine,tag:i.tag,anchor:i.anchor,kind:i.kind,result:i.result}}function Nn(i,_){i.position=_.position,i.line=_.line,i.lineStart=_.lineStart,i.lineIndent=_.lineIndent,i.firstTabInLine=_.firstTabInLine,i.tag=_.tag,i.anchor=_.anchor,i.kind=_.kind,i.result=_.result}const In={YAML:function(_,E,D){_.version!==null&&L(_,"duplication of %YAML directive"),D.length!==1&&L(_,"YAML directive accepts exactly one argument");const w=/^([0-9]+)\.([0-9]+)$/.exec(D[0]);w===null&&L(_,"ill-formed argument of the YAML directive");const X=parseInt(w[1],10),p=parseInt(w[2],10);X!==1&&L(_,"unacceptable YAML version of the document"),_.version=D[0],_.checkLineBreaks=p<2,p!==1&&p!==2&&Se(_,"unsupported YAML version of the document")},TAG:function(_,E,D){let w;D.length!==2&&L(_,"TAG directive accepts exactly two arguments");const X=D[0];w=D[1],x.test(X)||L(_,"ill-formed tag handle (first argument) of the TAG directive"),r.call(_.tagMap,X)&&L(_,'there is a previously declared suffix for "'+X+'" tag handle'),C.test(w)||L(_,"ill-formed tag prefix (second argument) of the TAG directive");try{w=decodeURIComponent(w)}catch{L(_,"tag prefix is malformed: "+w)}_.tagMap[X]=w}};function We(i,_,E,D){if(_<E){const w=i.input.slice(_,E);if(D)for(let X=0,p=w.length;X<p;X+=1){const N=w.charCodeAt(X);N===9||N>=32&&N<=1114111||L(i,"expected valid JSON character")}else f.test(w)&&L(i,"the stream contains non-printable characters");i.result+=w}}function Je(i,_,E,D){e.isObject(E)||L(i,"cannot merge mappings; the provided source object is unacceptable");const w=Object.keys(E);for(let X=0,p=w.length;X<p;X+=1){const N=w[X];i.maxTotalMergeKeys!==-1&&++i.totalMergeKeys>i.maxTotalMergeKeys&&L(i,"merge keys exceeded maxTotalMergeKeys ("+i.maxTotalMergeKeys+")"),r.call(_,N)||(te(_,N,E[N]),D[N]=!0)}}function V(i,_,E,D,w,X,p,N,K){if(Array.isArray(w)){w=Array.prototype.slice.call(w);for(let M=0,z=w.length;M<z;M+=1)Array.isArray(w[M])&&L(i,"nested arrays are not supported inside keys"),typeof w=="object"&&T(w[M])==="[object Object]"&&(w[M]="[object Object]")}if(typeof w=="object"&&T(w)==="[object Object]"&&(w="[object Object]"),w=String(w),_===null&&(_={}),D==="tag:yaml.org,2002:merge")if(Array.isArray(X))for(let M=0,z=X.length;M<z;M+=1)Je(i,_,X[M],E);else Je(i,_,X,E);else!i.json&&!r.call(E,w)&&r.call(_,w)&&(i.line=p||i.line,i.lineStart=N||i.lineStart,i.position=K||i.position,L(i,"duplicated mapping key")),te(_,w,X),delete E[w];return _}function ue(i){const _=i.input.charCodeAt(i.position);_===10?i.position++:_===13?(i.position++,i.input.charCodeAt(i.position)===10&&i.position++):L(i,"a line break is expected"),i.line+=1,i.lineStart=i.position,i.firstTabInLine=-1}function ee(i,_,E){let D=0,w=i.input.charCodeAt(i.position);for(;w!==0;){for(;k(w);)w===9&&i.firstTabInLine===-1&&(i.firstTabInLine=i.position),w=i.input.charCodeAt(++i.position);if(_&&w===35)do w=i.input.charCodeAt(++i.position);while(w!==10&&w!==13&&w!==0);if(y(w))for(ue(i),w=i.input.charCodeAt(i.position),D++,i.lineIndent=0;w===32;)i.lineIndent++,w=i.input.charCodeAt(++i.position);else break}return E!==-1&&D!==0&&i.lineIndent<E&&Se(i,"deficient indentation"),D}function he(i){let _=i.position,E=i.input.charCodeAt(_);return!!((E===45||E===46)&&E===i.input.charCodeAt(_+1)&&E===i.input.charCodeAt(_+2)&&(_+=3,E=i.input.charCodeAt(_),E===0||F(E)))}function we(i,_){_===1?i.result+=" ":_>1&&(i.result+=e.repeat(`
`,_-1))}function h(i,_,E){let D,w,X,p,N,K;const M=i.kind,z=i.result;let Z=i.input.charCodeAt(i.position);if(F(Z)||ve(Z)||Z===35||Z===38||Z===42||Z===33||Z===124||Z===62||Z===39||Z===34||Z===37||Z===64||Z===96)return!1;if(Z===63||Z===45){const W=i.input.charCodeAt(i.position+1);if(F(W)||E&&ve(W))return!1}for(i.kind="scalar",i.result="",D=w=i.position,X=!1;Z!==0;){if(Z===58){const W=i.input.charCodeAt(i.position+1);if(F(W)||E&&ve(W))break}else if(Z===35){const W=i.input.charCodeAt(i.position-1);if(F(W))break}else{if(i.position===i.lineStart&&he(i)||E&&ve(Z))break;if(y(Z))if(p=i.line,N=i.lineStart,K=i.lineIndent,ee(i,!1,-1),i.lineIndent>=_){X=!0,Z=i.input.charCodeAt(i.position);continue}else{i.position=w,i.line=p,i.lineStart=N,i.lineIndent=K;break}}X&&(We(i,D,w,!1),we(i,i.line-p),D=w=i.position,X=!1),k(Z)||(w=i.position+1),Z=i.input.charCodeAt(++i.position)}return We(i,D,w,!1),i.result?!0:(i.kind=M,i.result=z,!1)}function b(i,_){let E,D,w=i.input.charCodeAt(i.position);if(w!==39)return!1;for(i.kind="scalar",i.result="",i.position++,E=D=i.position;(w=i.input.charCodeAt(i.position))!==0;)if(w===39)if(We(i,E,i.position,!0),w=i.input.charCodeAt(++i.position),w===39)E=i.position,i.position++,D=i.position;else return!0;else y(w)?(We(i,E,D,!0),we(i,ee(i,!1,_)),E=D=i.position):i.position===i.lineStart&&he(i)?L(i,"unexpected end of the document within a single quoted scalar"):(i.position++,k(w)||(D=i.position));L(i,"unexpected end of the stream within a single quoted scalar")}function A(i,_){let E,D,w,X=i.input.charCodeAt(i.position);if(X!==34)return!1;for(i.kind="scalar",i.result="",i.position++,E=D=i.position;(X=i.input.charCodeAt(i.position))!==0;){if(X===34)return We(i,E,i.position,!0),i.position++,!0;if(X===92){if(We(i,E,i.position,!0),X=i.input.charCodeAt(++i.position),y(X))ee(i,!1,_);else if(X<256&&I[X])i.result+=q[X],i.position++;else if((w=oe(X))>0){let p=w,N=0;for(;p>0;p--)X=i.input.charCodeAt(++i.position),(w=ce(X))>=0?N=(N<<4)+w:L(i,"expected hexadecimal character");i.result+=J(N),i.position++}else L(i,"unknown escape sequence");E=D=i.position}else y(X)?(We(i,E,D,!0),we(i,ee(i,!1,_)),E=D=i.position):i.position===i.lineStart&&he(i)?L(i,"unexpected end of the document within a double quoted scalar"):(i.position++,k(X)||(D=i.position))}L(i,"unexpected end of the stream within a double quoted scalar")}function $(i,_){let E=!0,D,w,X;const p=i.tag;let N;const K=i.anchor;let M,z,Z,W;const fe=Object.create(null);let me,be,Ae,Oe=i.input.charCodeAt(i.position);if(Oe===91)M=93,W=!1,N=[];else if(Oe===123)M=125,W=!0,N={};else return!1;for(i.anchor!==null&&Be(i,i.anchor,N),Oe=i.input.charCodeAt(++i.position);Oe!==0;){if(ee(i,!0,_),Oe=i.input.charCodeAt(i.position),Oe===M)return i.position++,i.tag=p,i.anchor=K,i.kind=W?"mapping":"sequence",i.result=N,!0;if(E?Oe===44&&L(i,"expected the node content, but found ','"):L(i,"missed comma between flow collection entries"),be=me=Ae=null,z=Z=!1,Oe===63){const He=i.input.charCodeAt(i.position+1);F(He)&&(z=Z=!0,i.position++,ee(i,!0,_))}D=i.line,w=i.lineStart,X=i.position,le(i,_,t,!1,!0),be=i.tag,me=i.result,ee(i,!0,_),Oe=i.input.charCodeAt(i.position),(Z||i.line===D)&&Oe===58&&(z=!0,Oe=i.input.charCodeAt(++i.position),ee(i,!0,_),le(i,_,t,!1,!0),Ae=i.result),W?V(i,N,fe,be,me,Ae,D,w,X):z?N.push(V(i,null,fe,be,me,Ae,D,w,X)):N.push(me),ee(i,!0,_),Oe=i.input.charCodeAt(i.position),Oe===44?(E=!0,Oe=i.input.charCodeAt(++i.position)):E=!1}L(i,"unexpected end of the stream within a flow collection")}function U(i,_){let E,D=d,w=!1,X=!1,p=_,N=0,K=!1,M,z=i.input.charCodeAt(i.position);if(z===124)E=!1;else if(z===62)E=!0;else return!1;for(i.kind="scalar",i.result="";z!==0;)if(z=i.input.charCodeAt(++i.position),z===43||z===45)d===D?D=z===43?m:u:L(i,"repeat of a chomping mode identifier");else if((M=G(z))>=0)M===0?L(i,"bad explicit indentation width of a block scalar; it cannot be less than one"):X?L(i,"repeat of an indentation width identifier"):(p=_+M-1,X=!0);else break;if(k(z)){do z=i.input.charCodeAt(++i.position);while(k(z));if(z===35)do z=i.input.charCodeAt(++i.position);while(!y(z)&&z!==0)}for(;z!==0;){for(ue(i),i.lineIndent=0,z=i.input.charCodeAt(i.position);(!X||i.lineIndent<p)&&z===32;)i.lineIndent++,z=i.input.charCodeAt(++i.position);if(!X&&i.lineIndent>p&&(p=i.lineIndent),y(z)){N++;continue}if(!X&&p===0&&L(i,"missing indentation for block scalar"),i.lineIndent<p){D===m?i.result+=e.repeat(`
`,w?1+N:N):D===d&&w&&(i.result+=`
`);break}E?k(z)?(K=!0,i.result+=e.repeat(`
`,w?1+N:N)):K?(K=!1,i.result+=e.repeat(`
`,N+1)):N===0?w&&(i.result+=" "):i.result+=e.repeat(`
`,N):i.result+=e.repeat(`
`,w?1+N:N),w=!0,X=!0,N=0;const Z=i.position;for(;!y(z)&&z!==0;)z=i.input.charCodeAt(++i.position);We(i,Z,i.position,!1)}return!0}function O(i,_){const E=i.tag,D=i.anchor,w=[];let X=!1;if(i.firstTabInLine!==-1)return!1;i.anchor!==null&&Be(i,i.anchor,w);let p=i.input.charCodeAt(i.position);for(;p!==0&&(i.firstTabInLine!==-1&&(i.position=i.firstTabInLine,L(i,"tab characters must not be used in indentation")),p===45);){const N=i.input.charCodeAt(i.position+1);if(!F(N))break;if(X=!0,i.position++,ee(i,!0,-1)&&i.lineIndent<=_){w.push(null),p=i.input.charCodeAt(i.position);continue}const K=i.line;if(le(i,_,l,!1,!0),w.push(i.result),ee(i,!0,-1),p=i.input.charCodeAt(i.position),(i.line===K||i.lineIndent>_)&&p!==0)L(i,"bad indentation of a sequence entry");else if(i.lineIndent<_)break}return X?(i.tag=E,i.anchor=D,i.kind="sequence",i.result=w,!0):!1}function se(i,_,E){let D,w,X,p;const N=i.tag,K=i.anchor,M={},z=Object.create(null);let Z=null,W=null,fe=null,me=!1,be=!1;if(i.firstTabInLine!==-1)return!1;i.anchor!==null&&Be(i,i.anchor,M);let Ae=i.input.charCodeAt(i.position);for(;Ae!==0;){!me&&i.firstTabInLine!==-1&&(i.position=i.firstTabInLine,L(i,"tab characters must not be used in indentation"));const Oe=i.input.charCodeAt(i.position+1),He=i.line;if((Ae===63||Ae===58)&&F(Oe))Ae===63?(me&&(V(i,M,z,Z,W,null,w,X,p),Z=W=fe=null),be=!0,me=!0,D=!0):me?(me=!1,D=!0):L(i,"incomplete explicit mapping pair; a key node is missed; or followed by a non-tabulated empty line"),i.position+=1,Ae=Oe;else{if(w=i.line,X=i.lineStart,p=i.position,!le(i,E,s,!1,!0))break;if(i.line===He){for(Ae=i.input.charCodeAt(i.position);k(Ae);)Ae=i.input.charCodeAt(++i.position);if(Ae===58)Ae=i.input.charCodeAt(++i.position),F(Ae)||L(i,"a whitespace character is expected after the key-value separator within a block mapping"),me&&(V(i,M,z,Z,W,null,w,X,p),Z=W=fe=null),be=!0,me=!1,D=!1,Z=i.tag,W=i.result;else if(be)L(i,"can not read an implicit mapping pair; a colon is missed");else return i.tag=N,i.anchor=K,!0}else if(be)L(i,"can not read a block mapping entry; a multiline key may not be an implicit key");else return i.tag=N,i.anchor=K,!0}if((i.line===He||i.lineIndent>_)&&(me&&(w=i.line,X=i.lineStart,p=i.position),le(i,_,c,!0,D)&&(me?W=i.result:fe=i.result),me||(V(i,M,z,Z,W,fe,w,X,p),Z=W=fe=null),ee(i,!0,-1),Ae=i.input.charCodeAt(i.position)),(i.line===He||i.lineIndent>_)&&Ae!==0)L(i,"bad indentation of a mapping entry");else if(i.lineIndent<_)break}return me&&V(i,M,z,Z,W,null,w,X,p),be&&(i.tag=N,i.anchor=K,i.kind="mapping",i.result=M),be}function ie(i){let _=!1,E=!1,D,w,X=i.input.charCodeAt(i.position);if(X!==33)return!1;i.tag!==null&&L(i,"duplication of a tag property"),X=i.input.charCodeAt(++i.position),X===60?(_=!0,X=i.input.charCodeAt(++i.position)):X===33?(E=!0,D="!!",X=i.input.charCodeAt(++i.position)):D="!";let p=i.position;if(_){do X=i.input.charCodeAt(++i.position);while(X!==0&&X!==62);i.position<i.length?(w=i.input.slice(p,i.position),X=i.input.charCodeAt(++i.position)):L(i,"unexpected end of the stream within a verbatim tag")}else{for(;X!==0&&!F(X);)X===33&&(E?L(i,"tag suffix cannot contain exclamation marks"):(D=i.input.slice(p-1,i.position+1),x.test(D)||L(i,"named tag handle cannot contain such characters"),E=!0,p=i.position+1)),X=i.input.charCodeAt(++i.position);w=i.input.slice(p,i.position),S.test(w)&&L(i,"tag suffix cannot contain flow indicator characters")}w&&!C.test(w)&&L(i,"tag name cannot contain such characters: "+w);try{w=decodeURIComponent(w)}catch{L(i,"tag name is malformed: "+w)}return _?i.tag=w:r.call(i.tagMap,D)?i.tag=i.tagMap[D]+w:D==="!"?i.tag="!"+w:D==="!!"?i.tag="tag:yaml.org,2002:"+w:L(i,'undeclared tag handle "'+D+'"'),!0}function ae(i){let _=i.input.charCodeAt(i.position);if(_!==38)return!1;i.anchor!==null&&L(i,"duplication of an anchor property"),_=i.input.charCodeAt(++i.position);const E=i.position;for(;_!==0&&!F(_)&&!ve(_);)_=i.input.charCodeAt(++i.position);return i.position===E&&L(i,"name of an anchor node must contain at least one character"),i.anchor=i.input.slice(E,i.position),!0}function Y(i){let _=i.input.charCodeAt(i.position);if(_!==42)return!1;_=i.input.charCodeAt(++i.position);const E=i.position;for(;_!==0&&!F(_)&&!ve(_);)_=i.input.charCodeAt(++i.position);i.position===E&&L(i,"name of an alias node must contain at least one character");const D=i.input.slice(E,i.position);return r.call(i.anchorMap,D)||L(i,'unidentified alias "'+D+'"'),i.result=i.anchorMap[D],ee(i,!0,-1),!0}function ye(i,_,E,D){const w=Qe(i);return on(i),Nn(i,_),i.tag=null,i.anchor=null,i.kind=null,i.result=null,se(i,E,D)&&i.kind==="mapping"?(Ue(i),!0):(Ye(i),Nn(i,w),!1)}function le(i,_,E,D,w){let X,p,N=1,K=!1,M=!1,z=null,Z,W,fe;i.depth>=i.maxDepth&&L(i,"nesting exceeded maxDepth ("+i.maxDepth+")"),i.depth+=1,i.listener!==null&&i.listener("open",i),i.tag=null,i.anchor=null,i.kind=null,i.result=null;const me=X=p=c===E||l===E;if(D&&ee(i,!0,-1)&&(K=!0,i.lineIndent>_?N=1:i.lineIndent===_?N=0:i.lineIndent<_&&(N=-1)),N===1)for(;;){const be=i.input.charCodeAt(i.position),Ae=Qe(i);if(K&&(be===33&&i.tag!==null||be===38&&i.anchor!==null)||!ie(i)&&!ae(i))break;z===null&&(z=Ae),ee(i,!0,-1)?(K=!0,p=me,i.lineIndent>_?N=1:i.lineIndent===_?N=0:i.lineIndent<_&&(N=-1)):p=!1}if(p&&(p=K||w),N===1||c===E)if(t===E||s===E?W=_:W=_+1,fe=i.position-i.lineStart,N===1)if(p&&(O(i,fe)||se(i,fe,W))||$(i,W))M=!0;else{const be=i.input.charCodeAt(i.position);z!==null&&me&&!p&&be!==124&&be!==62&&ye(i,z,z.position-z.lineStart,W)||X&&U(i,W)||b(i,W)||A(i,W)?M=!0:Y(i)?(M=!0,(i.tag!==null||i.anchor!==null)&&L(i,"alias node should not have any properties")):h(i,W,t===E)&&(M=!0,i.tag===null&&(i.tag="?")),i.anchor!==null&&Be(i,i.anchor,i.result)}else N===0&&(M=p&&O(i,fe));if(i.tag===null)i.anchor!==null&&Be(i,i.anchor,i.result);else if(i.tag==="?"){i.result!==null&&i.kind!=="scalar"&&L(i,'unacceptable node kind for !<?> tag; it should be "scalar", not "'+i.kind+'"');for(let be=0,Ae=i.implicitTypes.length;be<Ae;be+=1)if(Z=i.implicitTypes[be],Z.resolve(i.result)){i.result=Z.construct(i.result),i.tag=Z.tag,i.anchor!==null&&Be(i,i.anchor,i.result);break}}else if(i.tag!=="!"){if(r.call(i.typeMap[i.kind||"fallback"],i.tag))Z=i.typeMap[i.kind||"fallback"][i.tag];else{Z=null;const be=i.typeMap.multi[i.kind||"fallback"];for(let Ae=0,Oe=be.length;Ae<Oe;Ae+=1)if(i.tag.slice(0,be[Ae].tag.length)===be[Ae].tag){Z=be[Ae];break}}Z||L(i,"unknown tag !<"+i.tag+">"),i.result!==null&&Z.kind!==i.kind&&L(i,"unacceptable node kind for !<"+i.tag+'> tag; it should be "'+Z.kind+'", not "'+i.kind+'"'),Z.resolve(i.result,i.tag)?(i.result=Z.construct(i.result,i.tag),i.anchor!==null&&Be(i,i.anchor,i.result)):L(i,"cannot resolve a node with !<"+i.tag+"> explicit tag")}return i.listener!==null&&i.listener("close",i),i.depth-=1,i.tag!==null||i.anchor!==null||M}function ge(i){const _=i.position;let E=!1,D;for(i.version=null,i.checkLineBreaks=i.legacy,i.tagMap=Object.create(null),i.anchorMap=Object.create(null);(D=i.input.charCodeAt(i.position))!==0&&(ee(i,!0,-1),D=i.input.charCodeAt(i.position),!(i.lineIndent>0||D!==37));){E=!0,D=i.input.charCodeAt(++i.position);let w=i.position;for(;D!==0&&!F(D);)D=i.input.charCodeAt(++i.position);const X=i.input.slice(w,i.position),p=[];for(X.length<1&&L(i,"directive name must not be less than one character in length");D!==0;){for(;k(D);)D=i.input.charCodeAt(++i.position);if(D===35){do D=i.input.charCodeAt(++i.position);while(D!==0&&!y(D));break}if(y(D))break;for(w=i.position;D!==0&&!F(D);)D=i.input.charCodeAt(++i.position);p.push(i.input.slice(w,i.position))}D!==0&&ue(i),r.call(In,X)?In[X](i,X,p):Se(i,'unknown document directive "'+X+'"')}if(ee(i,!0,-1),i.lineIndent===0&&i.input.charCodeAt(i.position)===45&&i.input.charCodeAt(i.position+1)===45&&i.input.charCodeAt(i.position+2)===45?(i.position+=3,ee(i,!0,-1)):E&&L(i,"directives end mark is expected"),le(i,i.lineIndent-1,c,!1,!0),ee(i,!0,-1),i.checkLineBreaks&&g.test(i.input.slice(_,i.position))&&Se(i,"non-ASCII line breaks are interpreted as content"),i.documents.push(i.result),i.position===i.lineStart&&he(i)){i.input.charCodeAt(i.position)===46&&(i.position+=3,ee(i,!0,-1));return}i.position<i.length-1&&L(i,"end of the stream or a document separator is expected")}function xe(i,_){i=String(i),_=_||{},i.length!==0&&(i.charCodeAt(i.length-1)!==10&&i.charCodeAt(i.length-1)!==13&&(i+=`
`),i.charCodeAt(0)===65279&&(i=i.slice(1)));const E=new j(i,_),D=i.indexOf("\0");for(D!==-1&&(E.position=D,L(E,"null byte is not allowed in input")),E.input+="\0";E.input.charCodeAt(E.position)===32;)E.lineIndent+=1,E.position+=1;for(;E.position<E.length-1;)ge(E);return E.documents}function Ie(i,_,E){_!==null&&typeof _=="object"&&typeof E>"u"&&(E=_,_=null);const D=xe(i,E);if(typeof _!="function")return D;for(let w=0,X=D.length;w<X;w+=1)_(D[w])}function je(i,_){const E=xe(i,_);if(E.length!==0){if(E.length===1)return E[0];throw new n("expected a single document in the stream, but found more")}}return Ha.loadAll=Ie,Ha.load=je,Ha}var ht={},$s;function Rp(){if($s)return ht;$s=1;const e=Da(),n=Va(),o=fi(),a=Object.prototype.toString,r=Object.prototype.hasOwnProperty,t=65279,s=9,l=10,c=13,d=32,u=33,m=34,f=35,g=37,S=38,x=39,C=42,T=44,y=45,k=58,F=61,ve=62,ce=63,oe=64,G=91,R=93,J=96,te=123,I=124,q=125,j={};j[0]="\\0",j[7]="\\a",j[8]="\\b",j[9]="\\t",j[10]="\\n",j[11]="\\v",j[12]="\\f",j[13]="\\r",j[27]="\\e",j[34]='\\"',j[92]="\\\\",j[133]="\\N",j[160]="\\_",j[8232]="\\L",j[8233]="\\P";const re=["y","Y","yes","Yes","YES","on","On","ON","n","N","no","No","NO","off","Off","OFF"],L=/^[-+]?[0-9_]+(?::[0-9_]+)+(?:\.[0-9_]*)?$/;function Se(p,N){if(N===null)return{};const K={},M=Object.keys(N);for(let z=0,Z=M.length;z<Z;z+=1){let W=M[z],fe=String(N[W]);W.slice(0,2)==="!!"&&(W="tag:yaml.org,2002:"+W.slice(2));const me=p.compiledTypeMap.fallback[W];me&&r.call(me.styleAliases,fe)&&(fe=me.styleAliases[fe]),K[W]=fe}return K}function Be(p){let N,K;const M=p.toString(16).toUpperCase();if(p<=255)N="x",K=2;else if(p<=65535)N="u",K=4;else if(p<=4294967295)N="U",K=8;else throw new n("code point within a string may not be greater than 0xFFFFFFFF");return"\\"+N+e.repeat("0",K-M.length)+M}const on=1,Ue=2;function Ye(p){this.schema=p.schema||o,this.indent=Math.max(1,p.indent||2),this.noArrayIndent=p.noArrayIndent||!1,this.skipInvalid=p.skipInvalid||!1,this.flowLevel=e.isNothing(p.flowLevel)?-1:p.flowLevel,this.styleMap=Se(this.schema,p.styles||null),this.sortKeys=p.sortKeys||!1,this.lineWidth=p.lineWidth||80,this.noRefs=p.noRefs||!1,this.noCompatMode=p.noCompatMode||!1,this.condenseFlow=p.condenseFlow||!1,this.quotingType=p.quotingType==='"'?Ue:on,this.forceQuotes=p.forceQuotes||!1,this.replacer=typeof p.replacer=="function"?p.replacer:null,this.implicitTypes=this.schema.compiledImplicit,this.explicitTypes=this.schema.compiledExplicit,this.tag=null,this.result="",this.duplicates=[],this.usedDuplicates=null}function Qe(p,N){const K=e.repeat(" ",N);let M=0,z="";const Z=p.length;for(;M<Z;){let W;const fe=p.indexOf(`
`,M);fe===-1?(W=p.slice(M),M=Z):(W=p.slice(M,fe+1),M=fe+1),W.length&&W!==`
`&&(z+=K),z+=W}return z}function Nn(p,N){return`
`+e.repeat(" ",p.indent*N)}function In(p,N){for(let K=0,M=p.implicitTypes.length;K<M;K+=1)if(p.implicitTypes[K].resolve(N))return!0;return!1}function We(p){return p===d||p===s}function Je(p){return p>=32&&p<=126||p>=161&&p<=55295&&p!==8232&&p!==8233||p>=57344&&p<=65533&&p!==t||p>=65536&&p<=1114111}function V(p){return Je(p)&&p!==t&&p!==c&&p!==l}function ue(p,N,K){const M=V(p),z=M&&!We(p);return(K?M:M&&p!==T&&p!==G&&p!==R&&p!==te&&p!==q)&&p!==f&&!(N===k&&!z)||V(N)&&!We(N)&&p===f||N===k&&z}function ee(p){return Je(p)&&p!==t&&!We(p)&&p!==y&&p!==ce&&p!==k&&p!==T&&p!==G&&p!==R&&p!==te&&p!==q&&p!==f&&p!==S&&p!==C&&p!==u&&p!==I&&p!==F&&p!==ve&&p!==x&&p!==m&&p!==g&&p!==oe&&p!==J}function he(p){return!We(p)&&p!==k}function we(p,N){const K=p.charCodeAt(N);let M;return K>=55296&&K<=56319&&N+1<p.length&&(M=p.charCodeAt(N+1),M>=56320&&M<=57343)?(K-55296)*1024+M-56320+65536:K}function h(p){return/^\n* /.test(p)}const b=1,A=2,$=3,U=4,O=5;function se(p,N,K,M,z,Z,W,fe){let me,be=0,Ae=null,Oe=!1,He=!1;const Ni=M!==-1;let Qo=-1,Xo=ee(we(p,0))&&he(we(p,p.length-1));if(N||W)for(me=0;me<p.length;be>=65536?me+=2:me++){if(be=we(p,me),!Je(be))return O;Xo=Xo&&ue(be,Ae,fe),Ae=be}else{for(me=0;me<p.length;be>=65536?me+=2:me++){if(be=we(p,me),be===l)Oe=!0,Ni&&(He=He||me-Qo-1>M&&p[Qo+1]!==" ",Qo=me);else if(!Je(be))return O;Xo=Xo&&ue(be,Ae,fe),Ae=be}He=He||Ni&&me-Qo-1>M&&p[Qo+1]!==" "}return!Oe&&!He?Xo&&!W&&!z(p)?b:Z===Ue?O:A:K>9&&h(p)?O:W?Z===Ue?O:A:He?U:$}function ie(p,N,K,M,z){p.dump=(function(){if(N.length===0)return p.quotingType===Ue?'""':"''";if(!p.noCompatMode&&(re.indexOf(N)!==-1||L.test(N)))return p.quotingType===Ue?'"'+N+'"':"'"+N+"'";const Z=p.indent*Math.max(1,K),W=p.lineWidth===-1?-1:Math.max(Math.min(p.lineWidth,40),p.lineWidth-Z),fe=M||p.flowLevel>-1&&K>=p.flowLevel;function me(be){return In(p,be)}switch(se(N,fe,p.indent,W,me,p.quotingType,p.forceQuotes&&!M,z)){case b:return N;case A:return"'"+N.replace(/'/g,"''")+"'";case $:return"|"+ae(N,p.indent)+Y(Qe(N,Z));case U:return">"+ae(N,p.indent)+Y(Qe(ye(N,W),Z));case O:return'"'+ge(N)+'"';default:throw new n("impossible error: invalid scalar style")}})()}function ae(p,N){const K=h(p)?String(N):"",M=p[p.length-1]===`
`,Z=M&&(p[p.length-2]===`
`||p===`
`)?"+":M?"":"-";return K+Z+`
`}function Y(p){return p[p.length-1]===`
`?p.slice(0,-1):p}function ye(p,N){const K=/(\n+)([^\n]*)/g;let M=(function(){let fe=p.indexOf(`
`);return fe=fe!==-1?fe:p.length,K.lastIndex=fe,le(p.slice(0,fe),N)})(),z=p[0]===`
`||p[0]===" ",Z,W;for(;W=K.exec(p);){const fe=W[1],me=W[2];Z=me[0]===" ",M+=fe+(!z&&!Z&&me!==""?`
`:"")+le(me,N),z=Z}return M}function le(p,N){if(p===""||p[0]===" ")return p;const K=/ [^ ]/g;let M,z=0,Z,W=0,fe=0,me="";for(;M=K.exec(p);)fe=M.index,fe-z>N&&(Z=W>z?W:fe,me+=`
`+p.slice(z,Z),z=Z+1),W=fe;return me+=`
`,p.length-z>N&&W>z?me+=p.slice(z,W)+`
`+p.slice(W+1):me+=p.slice(z),me.slice(1)}function ge(p){let N="",K=0;for(let M=0;M<p.length;K>=65536?M+=2:M++){K=we(p,M);const z=j[K];!z&&Je(K)?(N+=p[M],K>=65536&&(N+=p[M+1])):N+=z||Be(K)}return N}function xe(p,N,K){let M="";const z=p.tag;for(let Z=0,W=K.length;Z<W;Z+=1){let fe=K[Z];p.replacer&&(fe=p.replacer.call(K,String(Z),fe)),(E(p,N,fe,!1,!1)||typeof fe>"u"&&E(p,N,null,!1,!1))&&(M!==""&&(M+=","+(p.condenseFlow?"":" ")),M+=p.dump)}p.tag=z,p.dump="["+M+"]"}function Ie(p,N,K,M){let z="";const Z=p.tag;for(let W=0,fe=K.length;W<fe;W+=1){let me=K[W];p.replacer&&(me=p.replacer.call(K,String(W),me)),(E(p,N+1,me,!0,!0,!1,!0)||typeof me>"u"&&E(p,N+1,null,!0,!0,!1,!0))&&((!M||z!=="")&&(z+=Nn(p,N)),p.dump&&l===p.dump.charCodeAt(0)?z+="-":z+="- ",z+=p.dump)}p.tag=Z,p.dump=z||"[]"}function je(p,N,K){let M="";const z=p.tag,Z=Object.keys(K);for(let W=0,fe=Z.length;W<fe;W+=1){let me="";M!==""&&(me+=", "),p.condenseFlow&&(me+='"');const be=Z[W];let Ae=K[be];p.replacer&&(Ae=p.replacer.call(K,be,Ae)),E(p,N,be,!1,!1)&&(p.dump.length>1024&&(me+="? "),me+=p.dump+(p.condenseFlow?'"':"")+":"+(p.condenseFlow?"":" "),E(p,N,Ae,!1,!1)&&(me+=p.dump,M+=me))}p.tag=z,p.dump="{"+M+"}"}function i(p,N,K,M){let z="";const Z=p.tag,W=Object.keys(K);if(p.sortKeys===!0)W.sort();else if(typeof p.sortKeys=="function")W.sort(p.sortKeys);else if(p.sortKeys)throw new n("sortKeys must be a boolean or a function");for(let fe=0,me=W.length;fe<me;fe+=1){let be="";(!M||z!=="")&&(be+=Nn(p,N));const Ae=W[fe];let Oe=K[Ae];if(p.replacer&&(Oe=p.replacer.call(K,Ae,Oe)),!E(p,N+1,Ae,!0,!0,!0))continue;const He=p.tag!==null&&p.tag!=="?"||p.dump&&p.dump.length>1024;He&&(p.dump&&l===p.dump.charCodeAt(0)?be+="?":be+="? "),be+=p.dump,He&&(be+=Nn(p,N)),E(p,N+1,Oe,!0,He)&&(p.dump&&l===p.dump.charCodeAt(0)?be+=":":be+=": ",be+=p.dump,z+=be)}p.tag=Z,p.dump=z||"{}"}function _(p,N,K){const M=K?p.explicitTypes:p.implicitTypes;for(let z=0,Z=M.length;z<Z;z+=1){const W=M[z];if((W.instanceOf||W.predicate)&&(!W.instanceOf||typeof N=="object"&&N instanceof W.instanceOf)&&(!W.predicate||W.predicate(N))){if(K?W.multi&&W.representName?p.tag=W.representName(N):p.tag=W.tag:p.tag="?",W.represent){const fe=p.styleMap[W.tag]||W.defaultStyle;let me;if(a.call(W.represent)==="[object Function]")me=W.represent(N,fe);else if(r.call(W.represent,fe))me=W.represent[fe](N,fe);else throw new n("!<"+W.tag+'> tag resolver accepts not "'+fe+'" style');p.dump=me}return!0}}return!1}function E(p,N,K,M,z,Z,W){p.tag=null,p.dump=K,_(p,K,!1)||_(p,K,!0);const fe=a.call(p.dump),me=M;M&&(M=p.flowLevel<0||p.flowLevel>N);const be=fe==="[object Object]"||fe==="[object Array]";let Ae,Oe;if(be&&(Ae=p.duplicates.indexOf(K),Oe=Ae!==-1),(p.tag!==null&&p.tag!=="?"||Oe||p.indent!==2&&N>0)&&(z=!1),Oe&&p.usedDuplicates[Ae])p.dump="*ref_"+Ae;else{if(be&&Oe&&!p.usedDuplicates[Ae]&&(p.usedDuplicates[Ae]=!0),fe==="[object Object]")M&&Object.keys(p.dump).length!==0?(i(p,N,p.dump,z),Oe&&(p.dump="&ref_"+Ae+p.dump)):(je(p,N,p.dump),Oe&&(p.dump="&ref_"+Ae+" "+p.dump));else if(fe==="[object Array]")M&&p.dump.length!==0?(p.noArrayIndent&&!W&&N>0?Ie(p,N-1,p.dump,z):Ie(p,N,p.dump,z),Oe&&(p.dump="&ref_"+Ae+p.dump)):(xe(p,N,p.dump),Oe&&(p.dump="&ref_"+Ae+" "+p.dump));else if(fe==="[object String]")p.tag!=="?"&&ie(p,p.dump,N,Z,me);else{if(fe==="[object Undefined]")return!1;if(p.skipInvalid)return!1;throw new n("unacceptable kind of an object to dump "+fe)}if(p.tag!==null&&p.tag!=="?"){let He=encodeURI(p.tag[0]==="!"?p.tag.slice(1):p.tag).replace(/!/g,"%21");p.tag[0]==="!"?He="!"+He:He.slice(0,18)==="tag:yaml.org,2002:"?He="!!"+He.slice(18):He="!<"+He+">",p.dump=He+" "+p.dump}}return!0}function D(p,N){const K=[],M=[];w(p,K,M);const z=M.length;for(let Z=0;Z<z;Z+=1)N.duplicates.push(K[M[Z]]);N.usedDuplicates=new Array(z)}function w(p,N,K){if(p!==null&&typeof p=="object"){const M=N.indexOf(p);if(M!==-1)K.indexOf(M)===-1&&K.push(M);else if(N.push(p),Array.isArray(p))for(let z=0,Z=p.length;z<Z;z+=1)w(p[z],N,K);else{const z=Object.keys(p);for(let Z=0,W=z.length;Z<W;Z+=1)w(p[z[Z]],N,K)}}}function X(p,N){N=N||{};const K=new Ye(N);K.noRefs||D(p,K);let M=p;return K.replacer&&(M=K.replacer.call({"":M},"",M)),E(K,0,M,!0,!0)?K.dump+`
`:""}return ht.dump=X,ht}var qs;function Sp(){if(qs)return tn;qs=1;const e=Tp(),n=Rp();function o(a,r){return function(){throw new Error("Function yaml."+a+" is removed in js-yaml 4. Use yaml."+r+" instead, which is now safe by default.")}}return tn.Type=yn(),tn.Schema=Ic(),tn.FAILSAFE_SCHEMA=Dc(),tn.JSON_SCHEMA=Mc(),tn.CORE_SCHEMA=Fc(),tn.DEFAULT_SCHEMA=fi(),tn.load=e.load,tn.loadAll=e.loadAll,tn.dump=n.dump,tn.YAMLException=Va(),tn.types={binary:Uc(),float:qc(),map:jc(),null:Vc(),pairs:Gc(),set:Yc(),timestamp:zc(),bool:Lc(),int:$c(),merge:Hc(),omap:Kc(),seq:Oc(),str:Pc()},tn.safeLoad=o("safeLoad","load"),tn.safeLoadAll=o("safeLoadAll","loadAll"),tn.safeDump=o("safeDump","dump"),tn}var wp=Sp();const Sa=xp(wp),{Type:w_,Schema:E_,FAILSAFE_SCHEMA:C_,JSON_SCHEMA:k_,CORE_SCHEMA:I_,DEFAULT_SCHEMA:P_,load:O_,loadAll:j_,dump:D_,YAMLException:V_,types:L_,safeLoad:$_,safeLoadAll:q_,safeDump:M_}=Sa;function Ft(e){const{source:n,createdAt:o,updatedAt:a,...r}=e;return r}function Ep(e){return Sa.dump(Ft(e),{noRefs:!0})}function Cp(e,{createdAt:n=new Date,updatedAt:o=n}={}){return Mt(e),{...$t(e),source:"user",createdAt:Kn(n,"createdAt"),updatedAt:Kn(o,"updatedAt")}}class kp{constructor({ruleSetRepository:n}){this.ruleSetRepository=n}list(){return this.ruleSetRepository.getAll()}get(n){return this.ruleSetRepository.get(n)}async save(n){const o=await this.ruleSetRepository.get(n.id),a=Cp(n,{createdAt:o?.createdAt??new Date,updatedAt:new Date});return this.ruleSetRepository.put(a)}async importFromJson(n,o){let a;try{a=JSON.parse(n)}catch{throw new TypeError("Arquivo de regras inválido: JSON malformado.")}return this.save(o?{...a,grupo:o}:a)}async importFromYaml(n,o){let a;try{a=Sa.load(n)}catch{throw new TypeError("Arquivo de regras inválido: YAML malformado.")}return this.save(o?{...a,grupo:o}:a)}async importFromEntries(n,o){const a=[];let r=0;for(const t of n){if(t.error){a.push(`${t.name}: ${t.error}`);continue}try{/\.json$/i.test(t.name)?await this.importFromJson(t.content,o):await this.importFromYaml(t.content,o),r+=1}catch(s){a.push(`${t.name}: ${s.message}`)}}return{imported:r,failures:a}}exportToJson(n){return Mt(n),JSON.stringify(Ft(n),null,2)}exportToYaml(n){return Mt(n),Sa.dump(Ft(n),{noRefs:!0})}async exportByIdToJson(n){const o=await this.ruleSetRepository.get(n);if(!o)throw new Error("Conjunto de regras não encontrado.");return this.exportToJson(o)}async exportByIdToYaml(n){const o=await this.ruleSetRepository.get(n);if(!o)throw new Error("Conjunto de regras não encontrado.");return this.exportToYaml(o)}delete(n){return this.ruleSetRepository.delete(n)}}async function Ip({indexedDB:e}={}){const n=await Xm(e),o={projectRepository:new op(n),environmentRepository:new ep(n),elementRepository:new Zm(n),evaluationRepository:new np(n),ruleSetRepository:new ap(n)},a=new up(o);return{projectService:new mp(o),evaluationService:a,quickEvaluationService:new pp({evaluationService:a}),ruleSetService:new kp(o),close:()=>n.close()}}const Pp=`id: area_descanso
nome: Área de descanso
norma:
  nome: ABNT NBR 9050
  versao: 2020 - versão corrigida 2021
parametros:
  inclinacao_piso:
    label: Inclinação do piso no percurso
    definicao: Inclinação longitudinal do percurso, calculada pela variação vertical em relação à projeção horizontal.
    tipo: number
    unidade: '%'
    obrigatorio: true
  distancia_entre_areas:
    label: Distância entre áreas de descanso
    definicao: Comprimento do percurso entre áreas consecutivas de descanso.
    tipo: number
    unidade: m
    obrigatorio: true
  fora_faixa_circulacao:
    label: Fora da faixa de circulação
    definicao: Verifica se a área de descanso não reduz a largura útil do percurso de pedestres.
    tipo: boolean
    obrigatorio: true
  permite_manobra_cadeira:
    label: Permite manobra de cadeira de rodas
    definicao: Verifica se a área livre comporta a manobra de uma cadeira de rodas.
    tipo: boolean
    obrigatorio: true
  banco_com_encosto_bracos:
    label: Banco com encosto e braços
    definicao: Verifica se o assento recomendado para a área possui encosto e braços.
    tipo: boolean
    obrigatorio: true
regras:
- id: distancia_recomendada
  nome: Distância recomendada entre áreas de descanso
  tipo: conditional
  parametro: inclinacao_piso
  condicoes:
  - quando:
      operador: <=
      valor: 3
    verificar:
      parametro: distancia_entre_areas
      operador: <=
      valor: 50
    mensagem: Para inclinação de até 3 %, recomenda-se uma área de descanso a cada 50 m.
  - quando:
      operador: <=
      valor: 5
    verificar:
      parametro: distancia_entre_areas
      operador: <=
      valor: 30
    mensagem: Para inclinação acima de 3 % e até 5 %, recomenda-se uma área de descanso a cada 30 m.
  - quando:
      operador: '>'
      valor: 5
    resultado: atencao
    mensagem: Acima de 5 % o percurso deve ser avaliado como rampa; confira as áreas de descanso nos patamares no checklist de Rampas.
  referencia: ABNT NBR 9050:2020 — 6.5
- id: fora_circulacao
  nome: Área fora da faixa de circulação
  tipo: checklist
  parametro: fora_faixa_circulacao
  referencia: ABNT NBR 9050:2020 — 6.5
- id: manobra_cadeira
  nome: Espaço para manobra de cadeira de rodas
  tipo: checklist
  parametro: permite_manobra_cadeira
  referencia: ABNT NBR 9050:2020 — 6.5
- id: banco_recomendado
  nome: Banco com encosto e braços
  tipo: checklist
  parametro: banco_com_encosto_bracos
  referencia: ABNT NBR 9050:2020 — 6.5
`,Op=`id: armario_vestiario
nome: Armário acessível de vestiário
norma:
  nome: ABNT NBR 9050
  versao: 2020 - versão corrigida 2021
parametros:
  altura_uso_minima:
    label: Altura mínima da faixa de uso
    definicao: Limite inferior da faixa vertical de uso dos compartimentos do armário.
    tipo: number
    unidade: m
    obrigatorio: true
  altura_uso_maxima:
    label: Altura máxima da faixa de uso
    definicao: Limite superior da faixa vertical de uso dos compartimentos do armário.
    tipo: number
    unidade: m
    obrigatorio: true
  altura_puxadores_fechaduras_minima:
    label: Altura mínima de puxadores e fechaduras
    definicao: Limite inferior da faixa vertical de instalação de puxadores e fechaduras.
    tipo: number
    unidade: m
    obrigatorio: true
  altura_puxadores_fechaduras_maxima:
    label: Altura máxima de puxadores e fechaduras
    definicao: Limite superior da faixa vertical de instalação de puxadores e fechaduras.
    tipo: number
    unidade: m
    obrigatorio: true
  alcance_prateleiras_gavetas:
    label: Prateleiras e gavetas dentro do alcance
    definicao: Verifica se prateleiras, gavetas e cabides estão nas faixas de alcance manual e visual.
    tipo: boolean
    obrigatorio: true
  largura_circulacao_com_porta_aberta:
    label: Largura livre de circulação com a porta aberta
    definicao: Largura desobstruída do percurso junto ao armário considerando a projeção da porta aberta.
    tipo: number
    unidade: m
    obrigatorio: true
regras:
- id: faixa_uso_min
  nome: Limite inferior da faixa de uso
  parametro: altura_uso_minima
  operador: '>='
  valor: 0.4
  referencia: ABNT NBR 9050:2020 — 7.14.3
- id: faixa_uso_max
  nome: Limite superior da faixa de uso
  parametro: altura_uso_maxima
  operador: <=
  valor: 1.2
  referencia: ABNT NBR 9050:2020 — 7.14.3
- id: comandos_min
  nome: Altura mínima de puxadores e fechaduras
  parametro: altura_puxadores_fechaduras_minima
  operador: '>='
  valor: 0.8
  referencia: ABNT NBR 9050:2020 — 7.14.3
- id: comandos_max
  nome: Altura máxima de puxadores e fechaduras
  parametro: altura_puxadores_fechaduras_maxima
  operador: <=
  valor: 1.2
  referencia: ABNT NBR 9050:2020 — 7.14.3
- id: circulacao
  nome: Largura livre de circulação com porta aberta
  parametro: largura_circulacao_com_porta_aberta
  operador: '>='
  valor: 0.9
  referencia: ABNT NBR 9050:2020 — 7.14.3
- id: alcance
  nome: Alcance de prateleiras, gavetas e cabides
  tipo: checklist
  parametro: alcance_prateleiras_gavetas
  referencia: ABNT NBR 9050:2020 — 7.14.3
`,jp=`id: assento_pmr_plateia
nome: Assento para pessoa com mobilidade reduzida em plateia
norma:
  nome: ABNT NBR 9050
  versao: 2020 - versão corrigida 2021
parametros:
  espaco_livre_frontal:
    label: Espaço livre frontal
    definicao: Distância desobstruída à frente do assento para aproximação e saída.
    tipo: number
    unidade: m
    obrigatorio: true
  junto_corredor:
    label: Localizado junto ao corredor
    definicao: Verifica se o assento está junto a um corredor e próximo a passagem transversal, conforme recomendação
      da norma.
    tipo: boolean
    obrigatorio: true
  braco_basculante_removivel:
    label: Apoio de braço basculante ou removível no lado do corredor
    definicao: Verifica se o apoio de braço junto ao corredor pode ser levantado ou removido para facilitar a transferência.
    tipo: boolean
    obrigatorio: true
regras:
- id: espaco_frontal
  nome: Espaço livre frontal mínimo
  parametro: espaco_livre_frontal
  operador: '>='
  valor: 0.6
  referencia: ABNT NBR 9050:2020 — 10.3.4.2
- id: localizacao
  nome: Localização junto ao corredor
  tipo: checklist
  parametro: junto_corredor
  referencia: ABNT NBR 9050:2020 — 10.3.2.5
- id: apoio_braco
  nome: Apoio de braço basculante ou removível
  tipo: checklist
  parametro: braco_basculante_removivel
  referencia: ABNT NBR 9050:2020 — 10.3.2.5
`,Dp=`id: assento_publico
nome: Assento público
norma:
  nome: ABNT NBR 9050
  versao: 2020 - versão corrigida 2021
parametros:
  altura_assento:
    label: Altura do assento
    definicao: "Altura medida na parte mais alta e frontal do assento em relação ao piso. Valor informado em m."
    tipo: number
    unidade: m
    obrigatorio: true
  largura_assento:
    label: Largura do módulo individual
    definicao: "Largura do módulo individual do assento. Valor informado em m."
    tipo: number
    unidade: m
    obrigatorio: true
  profundidade_assento:
    label: Profundidade do assento
    definicao: "Profundidade medida entre a parte frontal do assento e a projeção vertical do ponto mais frontal do encosto. Valor informado em m."
    tipo: number
    unidade: m
    obrigatorio: true
  angulo_encosto:
    label: Ângulo entre assento e encosto
    definicao: "Ângulo formado entre o assento e o encosto. Valor informado em graus."
    tipo: number
    unidade: { singular: grau, plural: graus }
    obrigatorio: true
  superficie_nivelada:
    label: Superfície nivelada
    definicao: "O assento está implantado sobre superfície nivelada com o piso adjacente."
    tipo: boolean
    obrigatorio: true
  espaco_mr_largura:
    label: Largura do módulo de referência ao lado
    definicao: "Dimensão longitudinal do módulo de referência (M.R.) garantida ao lado dos assentos fixos, sem interferir na faixa livre. Valor informado em m."
    tipo: number
    unidade: m
    obrigatorio: true
  espaco_mr_profundidade:
    label: Profundidade do módulo de referência ao lado
    definicao: "Dimensão transversal do módulo de referência (M.R.) garantida ao lado dos assentos fixos. Valor informado em m."
    tipo: number
    unidade: m
    obrigatorio: true
regras:
- id: altura_minima
  nome: Altura mínima do assento
  parametro: altura_assento
  operador: '>='
  valor: 0.4
  referencia: ABNT NBR 9050:2020 — 8.9.1 a)
- id: altura_maxima
  nome: Altura máxima do assento
  parametro: altura_assento
  operador: '<='
  valor: 0.45
  referencia: ABNT NBR 9050:2020 — 8.9.1 a)
- id: largura_minima
  nome: Largura mínima do módulo
  parametro: largura_assento
  operador: '>='
  valor: 0.45
  referencia: ABNT NBR 9050:2020 — 8.9.1 b)
- id: largura_maxima
  nome: Largura máxima do módulo
  parametro: largura_assento
  operador: '<='
  valor: 0.5
  referencia: ABNT NBR 9050:2020 — 8.9.1 b)
- id: profundidade_minima
  nome: Profundidade mínima do assento
  parametro: profundidade_assento
  operador: '>='
  valor: 0.4
  referencia: ABNT NBR 9050:2020 — 8.9.1 c)
- id: profundidade_maxima
  nome: Profundidade máxima do assento
  parametro: profundidade_assento
  operador: '<='
  valor: 0.45
  referencia: ABNT NBR 9050:2020 — 8.9.1 c)
- id: angulo_minimo
  nome: Ângulo mínimo entre assento e encosto
  parametro: angulo_encosto
  operador: '>='
  valor: 100
  referencia: ABNT NBR 9050:2020 — 8.9.1 d)
- id: angulo_maximo
  nome: Ângulo máximo entre assento e encosto
  parametro: angulo_encosto
  operador: '<='
  valor: 110
  referencia: ABNT NBR 9050:2020 — 8.9.1 d)
- id: superficie_nivelada
  nome: Superfície nivelada
  parametro: superficie_nivelada
  operador: ==
  valor: true
  referencia: ABNT NBR 9050:2020 — 8.9.2
- id: espaco_mr_largura
  nome: Largura mínima do módulo de referência ao lado
  parametro: espaco_mr_largura
  operador: '>='
  valor: 1.2
  referencia: ABNT NBR 9050:2020 — 8.9.3 e Figura 134
- id: espaco_mr_profundidade
  nome: Profundidade mínima do módulo de referência ao lado
  parametro: espaco_mr_profundidade
  operador: '>='
  valor: 0.8
  referencia: ABNT NBR 9050:2020 — 8.9.3 e Figura 134
`,Vp=`id: bacia_sanitaria
nome: Bacia sanitária
norma:
  nome: ABNT NBR 9050
  versao: 2020 - versão corrigida 2021
parametros:
  abertura_frontal:
    label: Possui abertura frontal
    definicao: "Verifica se existe recorte frontal na bacia; a configuração acessível prevista pela norma não deve ter essa abertura."
    tipo: boolean
    obrigatorio: true
  altura_sem_assento:
    label: Altura sem assento
    definicao: "Distância vertical entre o piso acabado e o ponto do componente indicado no campo (borda, superfície, comando ou eixo). Valor informado em m."
    tipo: number
    unidade: m
    obrigatorio: true
  altura_com_assento:
    label: Altura com assento
    definicao: "Distância vertical entre o piso acabado e o ponto do componente indicado no campo (borda, superfície, comando ou eixo). Valor informado em m."
    tipo: number
    unidade: m
    obrigatorio: true
  transferencia_lateral:
    label: Transferência lateral
    definicao: "Verifica se há espaço livre para posicionar a cadeira de rodas ao lado do equipamento e realizar a transferência com segurança."
    tipo: boolean
    obrigatorio: true
  transferencia_perpendicular:
    label: Transferência perpendicular
    definicao: "Verifica se há espaço livre para posicionar a cadeira de rodas ao lado do equipamento e realizar a transferência com segurança."
    tipo: boolean
    obrigatorio: true
  transferencia_diagonal:
    label: Transferência diagonal
    definicao: "Verifica se há espaço livre para posicionar a cadeira de rodas ao lado do equipamento e realizar a transferência com segurança."
    tipo: boolean
    obrigatorio: true
  altura_valvula:
    label: Altura da válvula
    definicao: "Distância vertical entre o piso acabado e o ponto do componente indicado no campo (borda, superfície, comando ou eixo). Valor informado em m."
    tipo: number
    unidade: m
    obrigatorio: true
  forca_valvula:
    label: Força de acionamento da válvula
    definicao: "Força necessária para acionar o componente durante o uso normal. Valor informado em N."
    tipo: number
    unidade: N
    obrigatorio: true
  comprimento_barra_fundo:
    label: Comprimento da barra de fundo
    definicao: "Dimensão no sentido do comprimento do elemento; em degraus, corresponde à profundidade horizontal disponível para apoiar o pé. Valor informado em m."
    tipo: number
    unidade: m
  altura_barra_fundo:
    label: Altura da barra de fundo
    definicao: "Distância vertical entre o piso acabado e o ponto do componente indicado no campo (borda, superfície, comando ou eixo). Valor informado em m."
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
`,Lp=`id: balcao
nome: Balcão
norma:
  nome: ABNT NBR 9050
  versao: 2020 - versão corrigida 2021
parametros:
  tipo_balcao:
    label: Tipo de balcão
    definicao: "Classifica a função do balcão (atendimento, caixa, pagamento, bilheteria ou informação) para aplicar os requisitos correspondentes."
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
    definicao: "A sinalização e a localização permitem reconhecer o balcão com facilidade a partir da rota de circulação."
    tipo: boolean
    obrigatorio: true
  localizado_em_rota_acessivel:
    label: Localizado em rota acessível
    definicao: "Verifica se o elemento está conectado a uma rota contínua e utilizável por pessoas com mobilidade reduzida."
    tipo: boolean
    obrigatorio: true
  aproximacao_frontal:
    label: Aproximação frontal
    definicao: "Verifica se existe espaço desobstruído à frente para aproximar a cadeira de rodas e alcançar o equipamento."
    tipo: boolean
  circulacao_giro_180:
    label: Circulação adjacente para giro de 180 graus
    definicao: "Verifica se há área desobstruída suficiente para a cadeira de rodas realizar a rotação indicada junto ao elemento."
    tipo: boolean
  largura_superficie:
    label: Largura da superfície
    definicao: "Dimensão transversal do elemento, medida perpendicularmente ao sentido principal de uso. Valor informado em m."
    tipo: number
    unidade: m
  altura_superficie:
    label: Altura da superfície
    definicao: "Distância vertical entre o piso acabado e o ponto do componente indicado no campo (borda, superfície, comando ou eixo). Valor informado em m."
    tipo: number
    unidade: m
  largura_livre_inferior:
    label: Largura livre sob a superfície
    definicao: "Dimensão transversal útil, medida entre os limites físicos e descontando elementos que reduzam a passagem. Valor informado em m."
    tipo: number
    unidade: m
  altura_livre_inferior:
    label: Altura livre sob a superfície
    definicao: "Distância vertical entre o piso acabado e o ponto do componente indicado no campo (borda, superfície, comando ou eixo). Valor informado em m."
    tipo: number
    unidade: m
  profundidade_livre_inferior:
    label: Profundidade livre sob a superfície
    definicao: "Dimensão livre no sentido da frente para o fundo, necessária para aproximar os joelhos ou acomodar o usuário. Valor informado em m."
    tipo: number
    unidade: m
  passagem_lateral:
    label: Largura da passagem lateral
    definicao: "Dimensão transversal útil, medida entre os limites físicos e descontando elementos que reduzam a passagem. Valor informado em m."
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
`,$p=`id: banco_vestiario
nome: Banco de vestiário
norma:
  nome: ABNT NBR 9050
  versao: 2020 - versão corrigida 2021
parametros:
  profundidade:
    label: Profundidade
    definicao: Dimensão do banco no sentido da frente para o fundo.
    tipo: number
    unidade: m
    obrigatorio: true
  largura:
    label: Largura
    definicao: Dimensão do banco ao longo da parede ou do seu eixo longitudinal.
    tipo: number
    unidade: m
    obrigatorio: true
  altura:
    label: Altura do assento
    definicao: Distância vertical entre o piso acabado e a superfície superior do assento.
    tipo: number
    unidade: m
    obrigatorio: true
  possui_encosto:
    label: Possui encosto
    definicao: Verifica se o banco tem encosto para apoio do tronco.
    tipo: boolean
    obrigatorio: true
  area_menor_livre:
    label: Espaço inferior livre
    definicao: Verifica se há espaço inferior desobstruído sob o banco para aproximação/manobra.
    tipo: boolean
    obrigatorio: true
  areas_transferencia_manutencao:
    label: Garante circulação, manobra e transferência
    definicao: Verifica se o posicionamento do banco preserva áreas de circulação, manobra e transferência.
    tipo: boolean
    obrigatorio: true
regras:
- id: profundidade_minima
  nome: Profundidade mínima
  parametro: profundidade
  operador: '>='
  valor: 0.45
  referencia: ABNT NBR 9050:2020 — 7.14.2
- id: largura_minima
  nome: Largura mínima
  parametro: largura
  operador: '>='
  valor: 0.7
  referencia: ABNT NBR 9050:2020 — 7.14.2
- id: altura
  nome: Altura do assento
  parametro: altura
  operador: ==
  valor: 0.46
  referencia: ABNT NBR 9050:2020 — 7.14.2
- id: encosto
  nome: Banco com encosto
  tipo: checklist
  parametro: possui_encosto
  referencia: ABNT NBR 9050:2020 — 7.14.2
- id: espaco_inferior
  nome: Espaço inferior livre
  tipo: checklist
  parametro: area_menor_livre
  referencia: ABNT NBR 9050:2020 — 7.14.2 e Figura 132
- id: areas_uso
  nome: Áreas de circulação, manobra e transferência
  tipo: checklist
  parametro: areas_transferencia_manutencao
  referencia: ABNT NBR 9050:2020 — 7.14.2
`,qp=`id: banheira_acessivel
nome: Banheira acessível
norma:
  nome: ABNT NBR 9050
  versao: 2020 - versão corrigida 2021
parametros:
  altura_borda:
    label: Altura da borda da banheira
    definicao: Distância vertical entre o piso acabado e a borda superior da banheira.
    tipo: number
    unidade: m
    obrigatorio: true
  altura_comando:
    label: Altura do comando
    definicao: Altura do ponto de acionamento do comando da banheira em relação ao piso acabado.
    tipo: number
    unidade: m
    obrigatorio: true
  plataforma_transferencia:
    label: Tipo de plataforma de transferência
    definicao: 'Identifica a solução de transferência lateral: plataforma fixa nivelada ou plataforma móvel.'
    tipo: select
    opcoes:
    - fixa_nivelada
    - movel
    obrigatorio: true
  area_transferencia_lateral:
    label: Área para transferência lateral
    definicao: Verifica a existência de espaço para aproximação paralela e transferência lateral para a plataforma.
    tipo: boolean
    obrigatorio: true
  barras_apoio:
    label: Barras de apoio instaladas
    definicao: Verifica a instalação de duas barras horizontais na parede frontal e uma barra vertical na parede
      lateral do lado da plataforma.
    tipo: boolean
    obrigatorio: true
  superficie_antiderrapante:
    label: Plataforma e fundo antiderrapantes
    definicao: Verifica se a plataforma de transferência e o fundo da banheira têm superfície antiderrapante.
    tipo: boolean
    obrigatorio: true
regras:
- id: altura_borda_maxima
  nome: Altura máxima da borda
  parametro: altura_borda
  operador: <=
  valor: 0.46
  referencia: ABNT NBR 9050:2020 — 7.13.2.1
- id: altura_comando
  nome: Altura do comando
  parametro: altura_comando
  operador: ==
  valor: 0.8
  referencia: ABNT NBR 9050:2020 — 7.13.2.3
- id: transferencia_lateral
  nome: Área de transferência lateral
  tipo: checklist
  parametro: area_transferencia_lateral
  referencia: ABNT NBR 9050:2020 — 7.13.1
- id: barras
  nome: Barras de apoio
  tipo: checklist
  parametro: barras_apoio
  referencia: ABNT NBR 9050:2020 — 7.13.2.4
- id: superficie
  nome: Superfícies antiderrapantes
  tipo: checklist
  parametro: superficie_antiderrapante
  referencia: ABNT NBR 9050:2020 — 7.13.2.5
`,Mp=`id: barras_apoio
nome: Barras de apoio
norma:
  nome: ABNT NBR 9050
  versao: 2020 - versão corrigida 2021
parametros:
  resistencia:
    label: Resistência da barra
    definicao: "Carga que o componente deve suportar sem romper, soltar ou perder estabilidade durante o uso. Valor informado em kg."
    tipo: number
    unidade: kg
    obrigatorio: true
  diametro:
    label: Diâmetro da barra
    definicao: "Dimensão da seção ou curvatura circular do componente, usada para verificar pega, afastamento ou espaço de manobra. Valor informado em mm."
    tipo: number
    unidade: mm
    obrigatorio: true
  afastamento_suporte:
    label: Afastamento entre suporte e face interna da barra
    definicao: "Vão entre os dois pontos de referência indicados, medido na direção mais curta entre eles. Valor informado em mm."
    tipo: number
    unidade: mm
    obrigatorio: true
  extremidades_fixadas:
    label: Extremidades fixadas ou com desenvolvimento contínuo até a fixação
    definicao: "Verifica se as pontas estão fixadas ou terminadas sem saliências que possam prender roupas ou causar impacto."
    tipo: boolean
    obrigatorio: true
  material_resistente_corrosao:
    label: Material metálico resistente à corrosão
    definicao: "Verifica se o material mantém sua integridade em ambiente úmido e não se deteriora por corrosão."
    tipo: boolean
  barra_articulada:
    label: Barra articulada
    definicao: "Verifica se o apoio está instalado na posição prevista e pode ser utilizado com segurança durante a aproximação, transferência ou deslocamento."
    tipo: boolean
  dispositivo_antiqueda:
    label: Dispositivo contra queda ou movimento abrupto
    definicao: "Verifica se há mecanismo que impeça a queda ou o movimento brusco do componente articulado."
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
`,Fp=`id: bebedouro
nome: Bebedouro
norma:
  nome: ABNT NBR 9050
  versao: 2020 - versão corrigida 2021
parametros:
  tipo_bebedouro:
    label: Tipo de bebedouro
    definicao: "Identifica a configuração do equipamento (bica, garrafão, filtro ou outra) para avaliar os requisitos de uso aplicáveis."
    tipo: select
    opcoes:
    - bica
    - garrafao
    - filtro
    - outro
    obrigatorio: true
  altura_bica:
    label: Altura da bica
    definicao: "Distância vertical entre o piso acabado e o ponto do componente indicado no campo (borda, superfície, comando ou eixo). Valor informado em m."
    tipo: number
    unidade: m
  altura_livre_inferior:
    label: Altura livre inferior
    definicao: "Distância vertical entre o piso acabado e o ponto do componente indicado no campo (borda, superfície, comando ou eixo). Valor informado em m."
    tipo: number
    unidade: m
  aproximacao_frontal:
    label: Possui aproximação frontal
    definicao: "Verifica se existe espaço desobstruído à frente para aproximar a cadeira de rodas e alcançar o equipamento."
    tipo: boolean
  tipo_jato:
    label: Tipo de jato da bica
    definicao: "Indica a direção do jato de água da bica, relevante para que a água possa ser alcançada e utilizada por pessoas sentadas."
    tipo: select
    opcoes:
    - inclinado
    - outro
  bica_frontal:
    label: Bica localizada no lado frontal
    definicao: "A saída de água fica na face frontal do bebedouro, alcançável por quem se aproxima de frente."
    tipo: boolean
  permite_copo:
    label: Permite utilização com copos
    definicao: "A bica pode ser usada para encher um copo sem exigir que a pessoa beba diretamente no jato."
    tipo: boolean
  facil_higienizacao:
    label: Fácil higienização
    definicao: "Verifica se a característica permite localizar, usar ou manter o elemento sem criar barreira ao usuário."
    tipo: boolean
  altura_acionamento:
    label: Altura de acionamento
    definicao: "Distância vertical entre o piso acabado e o ponto do componente indicado no campo (borda, superfície, comando ou eixo). Valor informado em m."
    tipo: number
    unidade: m
  aproximacao_lateral:
    label: Permite aproximação lateral
    definicao: "Há espaço livre ao lado do bebedouro para uma pessoa em cadeira de rodas se aproximar e usar os comandos."
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
`,zp=`id: cabides
nome: Cabides acessíveis
norma:
  nome: ABNT NBR 9050
  versao: 2020 - versão corrigida 2021
parametros:
  altura_cabide:
    label: Altura de instalação do cabide
    definicao: Altura do cabide em relação ao piso acabado, dentro da faixa de alcance indicada pela norma.
    tipo: number
    unidade: m
    obrigatorio: true
regras:
- id: altura_minima
  nome: Altura mínima
  parametro: altura_cabide
  operador: '>='
  valor: 0.8
  referencia: ABNT NBR 9050:2020 — 7.11.3
- id: altura_maxima
  nome: Altura máxima
  parametro: altura_cabide
  operador: <=
  valor: 1.2
  referencia: ABNT NBR 9050:2020 — 7.11.3
`,Hp=`id: cabina_vestiario
nome: Cabina acessível de vestiário
norma:
  nome: ABNT NBR 9050
  versao: 2020 - versão corrigida 2021
parametros:
  largura_interna:
    label: Largura interna
    definicao: Dimensão interna transversal da cabina, medida entre as faces acabadas das paredes.
    tipo: number
    unidade: m
    obrigatorio: true
  comprimento_interno:
    label: Comprimento interno
    definicao: Dimensão interna no sentido de profundidade da cabina, medida entre as faces acabadas das paredes.
    tipo: number
    unidade: m
    obrigatorio: true
  porta_abre_externamente:
    label: Porta abre para fora
    definicao: Verifica se a folha abre para o lado externo da cabina, preservando seu espaço interno.
    tipo: boolean
    obrigatorio: true
  area_transferencia:
    label: Área de transferência disponível
    definicao: Verifica se há área livre para transferência junto à superfície para troca de roupas.
    tipo: boolean
    obrigatorio: true
  barras_apoio:
    label: Barras de apoio instaladas
    definicao: Verifica a presença das duas barras horizontais nas paredes previstas para a cabina acessível.
    tipo: boolean
    obrigatorio: true
  superficie_troca_largura:
    label: Largura da superfície para troca de roupa
    definicao: Largura da superfície destinada à troca de roupa na posição deitada.
    tipo: number
    unidade: m
    obrigatorio: true
  superficie_troca_comprimento:
    label: Comprimento da superfície para troca de roupa
    definicao: Comprimento da superfície destinada à troca de roupa na posição deitada.
    tipo: number
    unidade: m
    obrigatorio: true
  superficie_troca_altura:
    label: Altura da superfície para troca de roupa
    definicao: Altura da superfície em relação ao piso acabado.
    tipo: number
    unidade: m
    obrigatorio: true
  superficie_troca_resistencia:
    label: Resistência da superfície para troca de roupa
    definicao: Carga que a superfície deve suportar durante a troca de roupa na posição deitada.
    tipo: number
    unidade: kg
    obrigatorio: true
  espelho_cabide_instalados:
    label: Espelho e cabide instalados
    definicao: Verifica a presença de espelho e cabide na cabina, nas posições previstas na Figura 131.
    tipo: boolean
    obrigatorio: true
regras:
- id: largura_minima
  nome: Largura interna mínima
  parametro: largura_interna
  operador: '>='
  valor: 1.8
  referencia: ABNT NBR 9050:2020 — 7.14.1 e Figura 131
- id: comprimento_minimo
  nome: Comprimento interno mínimo
  parametro: comprimento_interno
  operador: '>='
  valor: 1.8
  referencia: ABNT NBR 9050:2020 — 7.14.1 e Figura 131
- id: porta
  nome: Abertura da porta para fora
  tipo: checklist
  parametro: porta_abre_externamente
  referencia: ABNT NBR 9050:2020 — 7.14.1.2
- id: transferencia
  nome: Área de transferência
  tipo: checklist
  parametro: area_transferencia
  referencia: ABNT NBR 9050:2020 — 7.14.1
- id: barras
  nome: Barras de apoio
  tipo: checklist
  parametro: barras_apoio
  referencia: ABNT NBR 9050:2020 — 7.14.1.1
- id: superficie_largura
  nome: Largura mínima da superfície de troca
  parametro: superficie_troca_largura
  operador: '>='
  valor: 0.7
  referencia: ABNT NBR 9050:2020 — 7.14.1 e Figura 131
- id: superficie_comprimento
  nome: Comprimento mínimo da superfície de troca
  parametro: superficie_troca_comprimento
  operador: '>='
  valor: 1.8
  referencia: ABNT NBR 9050:2020 — 7.14.1 e Figura 131
- id: superficie_altura
  nome: Altura da superfície de troca
  parametro: superficie_troca_altura
  operador: ==
  valor: 0.46
  referencia: ABNT NBR 9050:2020 — Figura 131
- id: superficie_resistencia
  nome: Resistência mínima da superfície de troca
  parametro: superficie_troca_resistencia
  operador: '>='
  valor: 150
  referencia: ABNT NBR 9050:2020 — 7.9
- id: espelho_cabide
  nome: Espelho e cabide na cabina
  tipo: checklist
  parametro: espelho_cabide_instalados
  referencia: ABNT NBR 9050:2020 — 7.14.1.1 e Figura 131
`,Up=`id: caixa_autoatendimento
nome: Caixa/autoatendimento
norma:
  nome: ABNT NBR 9050
  versao: 2020 - versão corrigida 2021
parametros:
  vao_livre_acessivel:
    label: Vão livre da passagem acessível
    definicao: "Dimensão transversal útil, medida entre os limites físicos e descontando elementos que reduzam a passagem. Valor informado em m."
    tipo: number
    unidade: m
  localizado_em_rota_acessivel:
    label: Localizado em rota acessível
    definicao: "Verifica se o elemento está conectado a uma rota contínua e utilizável por pessoas com mobilidade reduzida."
    tipo: boolean
  circulacao_giro_180:
    label: Circulação adjacente para giro de 180 graus
    definicao: "Verifica se há área desobstruída suficiente para a cadeira de rodas realizar a rotação indicada junto ao elemento."
    tipo: boolean
  alcance_manual_visual:
    label: Atende ao alcance manual e visual
    definicao: "Verifica se o comando ou informação pode ser alcançado pela pessoa na posição de uso prevista, inclusive sentada."
    tipo: boolean
  iluminacao_adequada:
    label: Iluminação adequada sem reflexos
    definicao: "Verifica se a característica permite localizar, usar ou manter o elemento sem criar barreira ao usuário."
    tipo: boolean
  intercomunicador:
    label: Possui intercomunicador
    definicao: "Verifica se a pessoa consegue solicitar ajuda e se comunicar em uma situação de necessidade."
    tipo: boolean
  suporte_bengala_muleta:
    label: Possui suporte para bengalas ou muletas
    definicao: "Há apoio onde bengala ou muleta pode ser colocada ao alcance durante o uso do equipamento."
    tipo: boolean
  piso_nivelado:
    label: Piso nivelado e livre de obstruções
    definicao: "Verifica se não há ressalto entre esta superfície e o piso adjacente que possa dificultar a passagem."
    tipo: boolean
  mr_aproximacao_frontal:
    label: Módulo de referência para aproximação frontal
    definicao: "Verifica se existe espaço desobstruído à frente para aproximar a cadeira de rodas e alcançar o equipamento."
    tipo: boolean
  alcance_visual_frontal_lateral:
    label: Alcance visual frontal ou lateral
    definicao: "Verifica se o comando ou informação pode ser alcançado pela pessoa na posição de uso prevista, inclusive sentada."
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
`,Kp=`id: calcada
nome: Calçada
norma:
  nome: ABNT NBR 9050
  versao: 2020 - versão corrigida 2021
parametros:
  inclinacao_transversal:
    label: Inclinação transversal da faixa livre
    definicao: "Inclinação da superfície, calculada pela variação vertical em relação à distância horizontal e expressa como porcentagem. Valor informado em %."
    tipo: number
    unidade: '%'
    obrigatorio: true
  largura_faixa_livre:
    label: Largura da faixa livre
    definicao: "Dimensão transversal útil, medida entre os limites físicos e descontando elementos que reduzam a passagem. Valor informado em m."
    tipo: number
    unidade: m
    obrigatorio: true
  altura_livre:
    label: Altura livre
    definicao: "Distância vertical entre o piso acabado e o ponto do componente indicado no campo (borda, superfície, comando ou eixo). Valor informado em m."
    tipo: number
    unidade: m
    obrigatorio: true
  piso_sem_degraus:
    label: Faixa livre sem degraus
    definicao: "Verifica se a faixa livre mantém continuidade sem degraus que interrompam a circulação de pedestres."
    tipo: boolean
    obrigatorio: true
  acesso_veiculos_sem_interferencia:
    label: Acesso de veículos sem interferência na faixa livre
    definicao: "Verifica se o percurso de pedestres permanece protegido e não é interrompido pela entrada ou circulação de veículos."
    tipo: boolean
    obrigatorio: true
  inclinacao_rebaixamento:
    label: Inclinação do rebaixamento
    definicao: "Inclinação da superfície, calculada pela variação vertical em relação à distância horizontal e expressa como porcentagem. Valor informado em %."
    tipo: number
    unidade: '%'
  largura_rebaixamento:
    label: Largura do rebaixamento
    definicao: "Dimensão transversal do elemento, medida perpendicularmente ao sentido principal de uso. Valor informado em m."
    tipo: number
    unidade: m
  desnivel_rebaixamento:
    label: Desnível no término do rebaixamento
    definicao: "Diferença vertical de nível entre as duas superfícies conectadas pelo trecho avaliado. Valor informado em m."
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
`,Gp=`id: chuveiro
nome: Chuveiro
norma:
  nome: ABNT NBR 9050
  versao: 2020 - versão corrigida 2021
parametros:
  largura_box:
    label: Largura do boxe
    definicao: "Dimensão transversal do elemento, medida perpendicularmente ao sentido principal de uso. Valor informado em m."
    tipo: number
    unidade: m
    obrigatorio: true
  comprimento_box:
    label: Comprimento do boxe
    definicao: "Dimensão no sentido do comprimento do elemento; em degraus, corresponde à profundidade horizontal disponível para apoiar o pé. Valor informado em m."
    tipo: number
    unidade: m
    obrigatorio: true
  area_transferencia:
    label: Área de transferência externa
    definicao: "Verifica se há espaço livre para posicionar a cadeira de rodas ao lado do equipamento e realizar a transferência com segurança."
    tipo: boolean
    obrigatorio: true
  vao_porta:
    label: Vão livre da porta
    definicao: "Dimensão transversal útil, medida entre os limites físicos e descontando elementos que reduzam a passagem. Valor informado em m."
    tipo: number
    unidade: m
  possui_banco:
    label: Possui banco articulado ou removível
    definicao: "Verifica se há assento de apoio adequado para uso durante a transferência e as atividades junto ao equipamento."
    tipo: boolean
    obrigatorio: true
  profundidade_banco:
    label: Profundidade do banco
    definicao: "Dimensão livre no sentido da frente para o fundo, necessária para aproximar os joelhos ou acomodar o usuário. Valor informado em m."
    tipo: number
    unidade: m
  altura_banco:
    label: Altura do banco
    definicao: "Distância vertical entre o piso acabado e o ponto do componente indicado no campo (borda, superfície, comando ou eixo). Valor informado em m."
    tipo: number
    unidade: m
  comprimento_banco:
    label: Comprimento do banco
    definicao: "Dimensão no sentido do comprimento do elemento; em degraus, corresponde à profundidade horizontal disponível para apoiar o pé. Valor informado em m."
    tipo: number
    unidade: m
  resistencia_banco:
    label: Resistência do banco
    definicao: "Carga que o componente deve suportar sem romper, soltar ou perder estabilidade durante o uso. Valor informado em kg."
    tipo: number
    unidade: kg
  piso_antiderrapante:
    label: Piso antiderrapante
    definicao: "Verifica se o piso oferece superfície contínua e segura para circulação, sem instabilidade ou risco de escorregamento."
    tipo: boolean
    obrigatorio: true
  piso_nivelado:
    label: Piso em nível com o adjacente
    definicao: "Verifica se não há ressalto entre esta superfície e o piso adjacente que possa dificultar a passagem."
    tipo: boolean
    obrigatorio: true
  inclinacao_piso:
    label: Inclinação para escoamento
    definicao: "Inclinação da superfície, calculada pela variação vertical em relação à distância horizontal e expressa como porcentagem. Valor informado em %."
    tipo: number
    unidade: '%'
    obrigatorio: true
  ralo_fora_transferencia:
    label: Ralo fora das áreas de manobra e transferência
    definicao: "O ralo está fora do espaço usado para manobrar a cadeira e fazer a transferência para o banco."
    tipo: boolean
    obrigatorio: true
  possui_barras:
    label: Possui barras de apoio
    definicao: "Verifica se o apoio está instalado na posição prevista e pode ser utilizado com segurança durante a aproximação, transferência ou deslocamento."
    tipo: boolean
    obrigatorio: true
  possui_barra_vertical:
    label: Possui barra vertical
    definicao: "Verifica se o apoio está instalado na posição prevista e pode ser utilizado com segurança durante a aproximação, transferência ou deslocamento."
    tipo: boolean
    obrigatorio: true
  possui_ducha_manual:
    label: Possui ducha manual
    definicao: "Verifica se a ducha manual está disponível e se seu comando permite controlar o fluxo na posição de uso."
    tipo: boolean
    obrigatorio: true
  controle_fluxo_na_ducha:
    label: Controle de fluxo na ducha manual
    definicao: "Verifica se a ducha manual está disponível e se seu comando permite controlar o fluxo na posição de uso."
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
`,Yp=`id: controle_acesso
nome: Controle de acesso
norma:
  nome: ABNT NBR 9050
  versao: 2020 - versão corrigida 2021
parametros:
  tipo_controle:
    label: Tipo de controle
    definicao: "Identifica o equipamento de bloqueio avaliado (catraca, portão, porta ou similar)."
    tipo: select
    opcoes:
    - catraca
    - portao
    - porta
    - outro
    obrigatorio: true
  vao_livre:
    label: Vão livre da passagem acessível
    definicao: "Dimensão transversal útil da passagem, medida entre os limites físicos. Valor informado em m."
    tipo: number
    unidade: m
    obrigatorio: true
  extensao_obstaculo:
    label: Extensão do obstáculo isolado
    definicao: "Extensão do obstáculo que a pessoa precisa transpor junto ao controle de acesso. Valor informado em m."
    tipo: number
    unidade: m
  localizado_em_rota_acessivel:
    label: Localizado em rota acessível
    definicao: "A passagem acessível está conectada a uma rota contínua e utilizável por pessoas com mobilidade reduzida."
    tipo: boolean
    obrigatorio: true
  giro_180:
    label: Circulação adjacente permite giro de 180 graus
    definicao: "Há espaço livre junto à passagem para a cadeira de rodas realizar a rotação indicada."
    tipo: boolean
    obrigatorio: true
  sinalizacao:
    label: Dispositivo acessível sinalizado
    definicao: "A passagem acessível está sinalizada de forma que a pessoa a localize e utilize com autonomia."
    tipo: boolean
    obrigatorio: true
regras:
- id: vao_livre
  nome: Vão livre mínimo
  parametro: vao_livre
  operador: '>='
  valor: 0.8
  referencia: ABNT NBR 9050:2020 — 9.4.1.1
- id: transposicao_obstaculo
  nome: Largura para transposição de obstáculo isolado
  tipo: conditional
  parametro: extensao_obstaculo
  condicoes:
  - quando:
      operador: '<='
      valor: 0.4
    verificar:
      parametro: vao_livre
      operador: '>='
      valor: 0.8
    mensagem: Obstáculo com extensão de até 0,40 m exige vão livre de no mínimo 0,80 m.
  - quando:
      operador: '>'
      valor: 0.4
    verificar:
      parametro: vao_livre
      operador: '>='
      valor: 0.9
    mensagem: Obstáculo com extensão superior a 0,40 m exige vão livre de no mínimo 0,90 m.
  referencia: ABNT NBR 9050:2020 — 9.4.1.1 e 4.3.2
- id: rota_acessivel
  nome: Localizado em rota acessível
  parametro: localizado_em_rota_acessivel
  operador: ==
  valor: true
  referencia: ABNT NBR 9050:2020 — 9.4.1.2
- id: giro_180
  nome: Circulação adjacente para giro de 180 graus
  parametro: giro_180
  operador: ==
  valor: true
  referencia: ABNT NBR 9050:2020 — 9.4.1.2
- id: sinalizacao
  nome: Sinalização do dispositivo acessível
  parametro: sinalizacao
  operador: ==
  valor: true
  referencia: ABNT NBR 9050:2020 — 9.4.1.3
`,Wp=`id: corredores
nome: Corredores
norma:
  nome: ABNT NBR 9050
  versao: 2020 - versão corrigida 2021
parametros:
  uso:
    label: Tipo de uso
    definicao: "Classifica o nível e o tipo de circulação do corredor, que determinam a largura livre mínima exigida."
    tipo: select
    opcoes:
    - comum
    - público
    - grande_fluxo
    - comum_edificacao_existente
    obrigatorio: true
  extensao:
    label: Extensão do corredor
    definicao: "Dimensão no sentido do comprimento do elemento; em degraus, corresponde à profundidade horizontal disponível para apoiar o pé. Valor informado em m."
    tipo: number
    unidade: m
    obrigatorio: true
  largura:
    label: Largura livre
    definicao: "Dimensão transversal útil, medida entre os limites físicos e descontando elementos que reduzam a passagem. Valor informado em m."
    tipo: number
    unidade: m
    obrigatorio: true
  largura_obstaculo:
    label: Extensão do obstáculo
    definicao: "Dimensão transversal do elemento, medida perpendicularmente ao sentido principal de uso. Valor informado em m."
    tipo: number
    unidade: m
  possui_bolsao_retorno:
    label: Possui bolsão de retorno
    definicao: "Existe alargamento do corredor onde uma pessoa em cadeira de rodas pode mudar de sentido ou aguardar sem bloquear a passagem."
    tipo: boolean
  distancia_bolsao:
    label: Distância entre bolsões de retorno
    definicao: "Vão entre os dois pontos de referência indicados, medido na direção mais curta entre eles. Valor informado em m."
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
`,Jp=`id: corrimaos
nome: Corrimãos
norma:
  nome: ABNT NBR 9050
  versao: 2020 - versão corrigida 2021
parametros:
  altura_superior:
    label: Altura do corrimão superior
    definicao: "Distância vertical entre o piso acabado e o ponto do componente indicado no campo (borda, superfície, comando ou eixo). Valor informado em m."
    tipo: number
    unidade: m
    obrigatorio: true
  altura_inferior:
    label: Altura do corrimão inferior
    definicao: "Distância vertical entre o piso acabado e o ponto do componente indicado no campo (borda, superfície, comando ou eixo). Valor informado em m."
    tipo: number
    unidade: m
    obrigatorio: true
  prolongamento:
    label: Prolongamento nas extremidades
    definicao: "Comprimento pelo qual o corrimão continua além do início ou do fim do lance de escada ou rampa."
    tipo: number
    unidade: m
    obrigatorio: true
  diametro:
    label: Diâmetro da seção circular
    definicao: "Dimensão da seção ou curvatura circular do componente, usada para verificar pega, afastamento ou espaço de manobra. Valor informado em m."
    tipo: number
    unidade: m
    obrigatorio: true
  afastamento_parede:
    label: Afastamento da parede ou obstáculo
    definicao: "Vão entre os dois pontos de referência indicados, medido na direção mais curta entre eles. Valor informado em m."
    tipo: number
    unidade: m
    obrigatorio: true
  quantidade_lados:
    label: Quantidade de lados com corrimão
    definicao: "Contagem ou duração do componente/ciclo descrito, usada para verificar o requisito correspondente. Valor informado em lados."
    tipo: number
    unidade: { singular: lado, plural: lados }
    obrigatorio: true
  largura_escada_rampa:
    label: Largura da escada ou rampa
    definicao: "Dimensão transversal do elemento, medida perpendicularmente ao sentido principal de uso. Valor informado em m."
    tipo: number
    unidade: m
    obrigatorio: true
  possui_corrimao_intermediario:
    label: Possui corrimão intermediário
    definicao: "Verifica se o apoio está instalado na posição prevista e pode ser utilizado com segurança durante a aproximação, transferência ou deslocamento."
    tipo: boolean
    obrigatorio: true
  patamar_intermediario:
    label: Comprimento do patamar
    definicao: "Comprimento horizontal do patamar entre lances, no sentido do percurso da escada ou rampa."
    tipo: number
    unidade: m
  espacamento_corrimao_intermediario:
    label: Espaçamento entre segmentos do corrimão intermediário
    definicao: "Vão entre os dois pontos de referência indicados, medido na direção mais curta entre eles. Valor informado em m."
    tipo: number
    unidade: m
  extremidades_seguras:
    label: Extremidades sem protuberância
    definicao: "Verifica se as pontas estão fixadas ou terminadas sem saliências que possam prender roupas ou causar impacto."
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
`,Qp=`id: degraus-isolados
nome: Degraus isolados
norma:
  nome: ABNT NBR 9050
  versao: 2020 - versão corrigida 2021
parametros:
  quantidade_degraus:
    label: Quantidade de degraus
    definicao: "Contagem ou duração do componente/ciclo descrito, usada para verificar o requisito correspondente. Valor informado em degraus."
    tipo: number
    unidade: { singular: degrau, plural: degraus }
    obrigatorio: true
  piso:
    label: Piso do degrau
    definicao: "Dimensão no sentido do comprimento do elemento; em degraus, corresponde à profundidade horizontal disponível para apoiar o pé. Valor informado em m."
    tipo: number
    unidade: m
    obrigatorio: true
  espelho:
    label: Espelho do degrau
    definicao: "Altura vertical entre a superfície de apoio de um degrau e a do degrau seguinte."
    tipo: number
    unidade: m
    obrigatorio: true
  possui_corrimao:
    label: Possui corrimão
    definicao: "Verifica se o apoio está instalado na posição prevista e pode ser utilizado com segurança durante a aproximação, transferência ou deslocamento."
    tipo: boolean
    obrigatorio: true
  possui_sinalizacao:
    label: Possui sinalização em toda a extensão
    definicao: "Verifica se a informação está disponível de forma perceptível e legível para orientar o uso e a circulação."
    tipo: boolean
    obrigatorio: true
  largura_rampa_associada:
    label: Largura livre da rampa associada
    definicao: "Dimensão transversal útil, medida entre os limites físicos e descontando elementos que reduzam a passagem. Valor informado em m."
    tipo: number
    unidade: m
  possui_bocel:
    label: Possui bocel ou espelho inclinado
    definicao: "Verifica se a borda do degrau possui projeção ou inclinação que possa prender a ponta do pé ou a bengala."
    tipo: boolean
    obrigatorio: true
  projecao_bocel:
    label: Projeção da aresta
    definicao: "Dimensão no sentido do comprimento do elemento; em degraus, corresponde à profundidade horizontal disponível para apoiar o pé. Valor informado em m."
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
  mensagem: "Confira a relação entre piso e espelho: 0,63 m ≤ p + 2e ≤ 0,65 m."
  referencia: ABNT NBR 9050:2020 — 6.7.2 e 6.8.2 alínea a; verificar 0,63 m ≤ p + 2e ≤ 0,65 m.
`,Xp=`id: elevadores
nome: Elevadores
norma:
  nome: ABNT NBR 9050
  versao: 2020 - versão corrigida 2021
parametros:
  atende_nbr_nm_313:
    label: Atende à ABNT NBR NM 313
    definicao: "Confirma que o elevador cumpre os requisitos de acessibilidade da ABNT NBR NM 313."
    tipo: boolean
    obrigatorio: true
  sinalizacao_tatil_visual:
    label: Sinalização tátil e visual presente
    definicao: "Verifica se a informação está disponível de forma perceptível e legível para orientar o uso e a circulação."
    tipo: boolean
    obrigatorio: true
  instrucao_uso:
    label: Instrução de uso próxima à botoeira
    definicao: "As instruções estão junto aos botões de chamada, onde podem ser consultadas antes de operar o elevador."
    tipo: boolean
    obrigatorio: true
  indicacao_embarque_desembarque:
    label: Indicação da posição para embarque e desembarque
    definicao: "A área de espera identifica onde a pessoa deve aguardar e onde embarcar ou desembarcar da plataforma."
    tipo: boolean
    obrigatorio: true
  indicacao_pavimentos:
    label: Indicação dos pavimentos atendidos
    definicao: "Verifica se a identificação informa de forma perceptível o pavimento atendido ou a posição do elevador."
    tipo: boolean
    obrigatorio: true
  dispositivo_chamada_alcance:
    label: Dispositivo de chamada dentro do alcance manual
    definicao: "Verifica se o comando ou informação pode ser alcançado pela pessoa na posição de uso prevista, inclusive sentada."
    tipo: boolean
    obrigatorio: true
  dispositivo_comunicacao_auxilio:
    label: Dispositivo de comunicação para solicitação de auxílio
    definicao: "Verifica se a pessoa consegue solicitar ajuda e se comunicar em uma situação de necessidade."
    tipo: boolean
    obrigatorio: true
  sinalizacao_pavimento_relevo_braille:
    label: Sinalização de pavimento em relevo e Braille
    definicao: "Verifica se a informação está disponível de forma perceptível e legível para orientar o uso e a circulação."
    tipo: boolean
    obrigatorio: true
  altura_sinalizacao_pavimento:
    label: Altura da sinalização de pavimento
    definicao: "Distância vertical entre o piso acabado e o ponto do componente indicado no campo (borda, superfície, comando ou eixo). Valor informado em m."
    tipo: number
    unidade: m
    obrigatorio: true
  altura_caracteres:
    label: Altura dos caracteres
    definicao: "Distância vertical entre o piso acabado e o ponto do componente indicado no campo (borda, superfície, comando ou eixo). Valor informado em mm."
    tipo: number
    unidade: mm
    obrigatorio: true
  distancia_caracteres:
    label: Distância entre caracteres
    definicao: "Vão entre os dois pontos de referência indicados, medido na direção mais curta entre eles. Valor informado em mm."
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
`,Zp=`id: escadas
nome: Escadas
norma:
  nome: ABNT NBR 9050
  versao: 2020 - versão corrigida 2021
parametros:
  piso:
    label: Piso do degrau
    definicao: "Dimensão no sentido do comprimento do elemento; em degraus, corresponde à profundidade horizontal disponível para apoiar o pé. Valor informado em m."
    tipo: number
    unidade: m
    obrigatorio: true
  espelho:
    label: Espelho do degrau
    definicao: "Altura vertical entre a superfície de apoio de um degrau e a do degrau seguinte."
    tipo: number
    unidade: m
    obrigatorio: true
  largura:
    label: Largura
    definicao: "Dimensão transversal do elemento, medida perpendicularmente ao sentido principal de uso. Valor informado em m."
    tipo: number
    unidade: m
    obrigatorio: true
  distancia_primeiro_ultimo:
    label: Distância do primeiro e último degraus da circulação adjacente
    definicao: "Vão entre os dois pontos de referência indicados, medido na direção mais curta entre eles. Valor informado em m."
    tipo: number
    unidade: m
    obrigatorio: true
  inclinacao_transversal:
    label: Inclinação transversal
    definicao: "Inclinação da superfície, calculada pela variação vertical em relação à distância horizontal e expressa como porcentagem. Valor informado em %."
    tipo: number
    unidade: '%'
    obrigatorio: true
  ambiente:
    label: Local da escada
    definicao: "Identifica se a escada ou rampa está em área interna ou externa; essa distinção define limites diferentes para alguns critérios de inclinação."
    tipo: select
    opcoes:
    - interno
    - externo
  possui_espelho_vazado:
    label: Possui espelho vazado
    definicao: "Verifica se há abertura no espelho do degrau; espelhos vazados podem oferecer risco de tropeço e devem ser avaliados conforme a norma."
    tipo: boolean
    obrigatorio: true
  possui_guia_balizamento:
    label: Possui guia de balizamento
    definicao: "Existe elemento lateral contínuo que delimita a borda da escada e ajuda a evitar que a bengala ou a cadeira ultrapasse o limite."
    tipo: boolean
    obrigatorio: true
  piso_espelho_constantes:
    label: Pisos e espelhos constantes
    definicao: "Todos os degraus do mesmo lance têm a mesma profundidade de piso e a mesma altura de espelho, evitando mudanças inesperadas no passo."
    tipo: boolean
    obrigatorio: true
  sinalizacao_degraus:
    label: Degraus sinalizados
    definicao: "Verifica se a informação está disponível de forma perceptível e legível para orientar o uso e a circulação."
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
`,ef=`id: espaco_cao_guia
nome: Espaço para cão-guia em plateia
norma:
  nome: ABNT NBR 9050
  versao: 2020 - versão corrigida 2021
parametros:
  comprimento:
    label: Comprimento
    definicao: Dimensão longitudinal do espaço reservado para o cão-guia.
    tipo: number
    unidade: m
    obrigatorio: true
  profundidade:
    label: Profundidade
    definicao: Dimensão do espaço no sentido da frente para o fundo.
    tipo: number
    unidade: m
    obrigatorio: true
  altura_livre:
    label: Altura livre
    definicao: Altura desobstruída disponível no espaço reservado ao cão-guia.
    tipo: number
    unidade: m
    obrigatorio: true
  junto_assento_preferencial:
    label: Junto a assento preferencial
    definicao: Verifica se o espaço reservado está junto ao assento preferencial da pessoa acompanhada pelo cão-guia.
    tipo: boolean
    obrigatorio: true
regras:
- id: comprimento
  nome: Comprimento mínimo
  parametro: comprimento
  operador: '>='
  valor: 0.7
  referencia: ABNT NBR 9050:2020 — 10.3.5
- id: profundidade
  nome: Profundidade mínima
  parametro: profundidade
  operador: '>='
  valor: 0.4
  referencia: ABNT NBR 9050:2020 — 10.3.5
- id: altura
  nome: Altura mínima
  parametro: altura_livre
  operador: '>='
  valor: 0.3
  referencia: ABNT NBR 9050:2020 — 10.3.5
- id: localizacao
  nome: Espaço junto ao assento preferencial
  tipo: checklist
  parametro: junto_assento_preferencial
  referencia: ABNT NBR 9050:2020 — 10.3.5
`,nf=`id: espaco_pcr_plateia
nome: Espaço para pessoa em cadeira de rodas em plateia
norma:
  nome: ABNT NBR 9050
  versao: 2020 - versão corrigida 2021
parametros:
  largura:
    label: Largura do espaço
    definicao: Dimensão transversal do módulo reservado para pessoa em cadeira de rodas.
    tipo: number
    unidade: m
    obrigatorio: true
  comprimento:
    label: Comprimento do espaço
    definicao: Dimensão do módulo no sentido da profundidade da fileira.
    tipo: number
    unidade: m
    obrigatorio: true
  deslocamento_encosto:
    label: Deslocamento em relação ao encosto adjacente
    definicao: Deslocamento lateral do módulo em relação ao encosto da cadeira ao lado.
    tipo: number
    unidade: m
    obrigatorio: true
  sinalizado:
    label: Espaço sinalizado
    definicao: Verifica se o módulo reservado está identificado conforme os requisitos de sinalização.
    tipo: boolean
    obrigatorio: true
  rota_preservada:
    label: Passagem entre fileiras preservada
    definicao: Verifica se a cadeira posicionada no módulo não bloqueia a passagem entre fileiras.
    tipo: boolean
    obrigatorio: true
  posicao_fileira:
    label: Posição do espaço na plateia
    definicao: Indica se o espaço fica na primeira fileira, na última ou em fileira intermediária; a posição define
      onde a faixa livre deve ser garantida.
    tipo: select
    opcoes:
    - primeira
    - intermediaria
    - ultima
    obrigatorio: true
  faixa_livre_fileira_adjacente:
    label: Faixa livre junto à fileira adjacente
    definicao: Largura livre entre o módulo e a fileira frontal ou posterior, conforme a posição do espaço.
    tipo: number
    unidade: m
  faixas_intermediaria_atendem:
    label: Faixas frontal e posterior livres
    definicao: Verifica se, em fileira intermediária, há pelo menos 0,30 m livres tanto à frente quanto atrás do
      módulo.
    tipo: boolean
  visibilidade_cone_visual:
    label: Palco ou tela dentro do cone visual
    definicao: Verificação manual de que o espaço está posicionado para manter palco ou tela dentro do cone visual
      de até 30° previsto na norma.
    tipo: boolean
    obrigatorio: true
regras:
- id: largura_minima
  nome: Largura mínima
  parametro: largura
  operador: '>='
  valor: 0.8
  referencia: ABNT NBR 9050:2020 — 10.3.4.1
- id: comprimento_minimo
  nome: Comprimento mínimo
  parametro: comprimento
  operador: '>='
  valor: 1.2
  referencia: ABNT NBR 9050:2020 — 10.3.4.1
- id: deslocamento
  nome: Deslocamento em relação ao encosto
  parametro: deslocamento_encosto
  operador: '>='
  valor: 0.3
  referencia: ABNT NBR 9050:2020 — 10.3.4.1
- id: sinalizacao
  nome: Sinalização do módulo
  tipo: checklist
  parametro: sinalizado
  referencia: ABNT NBR 9050:2020 — 10.3.4.1
- id: circulacao
  nome: Passagem entre fileiras preservada
  tipo: checklist
  parametro: rota_preservada
  referencia: ABNT NBR 9050:2020 — 10.3.2.6
- id: faixa_por_fileira
  nome: Faixa livre conforme posição na plateia
  tipo: conditional
  parametro: posicao_fileira
  condicoes:
  - quando:
      operador: ==
      valor: primeira
    verificar:
      parametro: faixa_livre_fileira_adjacente
      operador: '>='
      valor: 0.3
    mensagem: Na primeira fileira, deve haver faixa livre mínima de 0,30 m entre o módulo e a fileira posterior.
  - quando:
      operador: ==
      valor: ultima
    verificar:
      parametro: faixa_livre_fileira_adjacente
      operador: '>='
      valor: 0.3
    mensagem: Na última fileira, deve haver faixa livre mínima de 0,30 m entre o módulo e a fileira frontal.
  - quando:
      operador: ==
      valor: intermediaria
    verificar:
      parametro: faixas_intermediaria_atendem
      operador: ==
      valor: true
    mensagem: Em fileira intermediária, deve haver faixa livre mínima de 0,30 m tanto à frente quanto atrás do módulo.
  referencia: ABNT NBR 9050:2020 — 10.3.4.1
- id: cone_visual
  nome: Campo visual para palco ou tela
  tipo: checklist
  parametro: visibilidade_cone_visual
  referencia: ABNT NBR 9050:2020 — 10.3.2.1, 10.3.2.2 e 10.3.2.6
`,of=`id: espelhos_acessiveis
nome: Espelhos em sanitários e vestiários
norma:
  nome: ABNT NBR 9050
  versao: 2020 - versão corrigida 2021
parametros:
  atende_figura_123:
    label: Atende à configuração da Figura 123
    definicao: Verificação manual da altura de instalação e fixação do espelho conforme a configuração aplicável
      na Figura 123.
    tipo: boolean
    obrigatorio: true
  altura_borda_inferior:
    label: Altura da borda inferior
    definicao: Altura da borda inferior do espelho em relação ao piso acabado.
    tipo: number
    unidade: m
  altura_borda_superior:
    label: Altura da borda superior
    definicao: Altura da borda superior do espelho em relação ao piso acabado.
    tipo: number
    unidade: m
regras:
- id: instalacao_espelho
  nome: Instalação conforme Figura 123
  tipo: checklist
  parametro: atende_figura_123
  referencia: ABNT NBR 9050:2020 — 7.11.1 e Figura 123
`,af=`id: estacionamento
nome: Estacionamento
norma:
  nome: ABNT NBR 9050
  versao: 2020 - versão corrigida 2021
parametros:
  sinalizacao_vertical:
    label: Sinalização vertical adequada
    definicao: "Verifica se a informação está disponível de forma perceptível e legível para orientar o uso e a circulação."
    tipo: boolean
  espaco_circulacao:
    label: Largura do espaço adicional de circulação
    definicao: "Dimensão do elemento indicada pelo campo, medida no sentido correspondente ao uso ou à instalação: largura do espaço adicional de circulação. Valor informado em m."
    tipo: number
    unidade: m
  vinculada_rota_acessivel:
    label: Vaga vinculada à rota acessível
    definicao: "Verifica se o elemento está conectado a uma rota contínua e utilizável por pessoas com mobilidade reduzida."
    tipo: boolean
  evita_circulacao_veiculos:
    label: Evita circulação entre veículos
    definicao: "Verifica se o percurso de pedestres permanece protegido e não é interrompido pela entrada ou circulação de veículos."
    tipo: boolean
  piso_regular_estavel:
    label: Piso regular e estável
    definicao: "Verifica se o piso oferece superfície contínua e segura para circulação, sem instabilidade ou risco de escorregamento."
    tipo: boolean
  distancia_acesso:
    label: Distância até acesso à edificação ou elevadores
    definicao: "Vão entre os dois pontos de referência indicados, medido na direção mais curta entre eles. Valor informado em m."
    tipo: number
    unidade: m
  faixa_pedestre:
    label: Faixa de circulação de pedestres
    definicao: "Largura útil da faixa destinada a pedestres no estacionamento, medida sem contar obstáculos que reduzam a passagem."
    tipo: number
    unidade: m
  vaga_reservada:
    label: Existe vaga reservada quando aplicável
    definicao: "Existe vaga acessível reservada quando a quantidade exigida pela legislação se aplica ao estacionamento."
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
`,rf=`id: guarda_corpos
nome: Guarda-corpos
norma:
  nome: ABNT NBR 9050
  versao: 2020 - versão corrigida 2021
parametros:
  atende_normas_referenciadas:
    label: Atende às normas aplicáveis
    definicao: Verificação manual de atendimento às ABNT NBR 9077 e ABNT NBR 14718, indicadas pela NBR 9050 para
      guarda-corpos.
    tipo: boolean
    obrigatorio: true
regras:
- id: normas_referenciadas
  nome: Atendimento às normas de guarda-corpos
  tipo: checklist
  parametro: atende_normas_referenciadas
  referencia: ABNT NBR 9050:2020 — 6.9.2
`,tf=`id: janelas
nome: Janelas
norma:
  nome: ABNT NBR 9050
  versao: 2020 - versão corrigida 2021
parametros:
  altura_comando:
    label: Altura do comando da janela
    definicao: "Distância vertical entre o piso acabado e o ponto do componente indicado no campo (borda, superfície, comando ou eixo). Valor informado em m."
    tipo: number
    unidade: m
    obrigatorio: true
  abertura_um_movimento:
    label: Operação com um único movimento
    definicao: "Verifica se o componente pode ser operado sem destreza fina ou sequência de movimentos, usando uma única mão quando indicado."
    tipo: boolean
    obrigatorio: true
  operacao_uma_mao:
    label: Operação com uma das mãos
    definicao: "Verifica se o componente pode ser operado sem destreza fina ou sequência de movimentos, usando uma única mão quando indicado."
    tipo: boolean
    obrigatorio: true
  alcance_comando:
    label: Comando dentro do alcance manual
    definicao: "Verifica se o comando ou informação pode ser alcançado pela pessoa na posição de uso prevista, inclusive sentada."
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
`,sf=`id: lavatorio
nome: Lavatório
norma:
  nome: ABNT NBR 9050
  versao: 2020 - versão corrigida 2021
parametros:
  altura_superior:
    label: Altura da superfície superior
    definicao: "Distância vertical entre o piso acabado e o ponto do componente indicado no campo (borda, superfície, comando ou eixo). Valor informado em m."
    tipo: number
    unidade: m
    obrigatorio: true
  altura_livre_inferior:
    label: Altura livre inferior
    definicao: "Distância vertical entre o piso acabado e o ponto do componente indicado no campo (borda, superfície, comando ou eixo). Valor informado em m."
    tipo: number
    unidade: m
    obrigatorio: true
  profundidade_livre_inferior:
    label: Profundidade livre inferior
    definicao: "Dimensão livre no sentido da frente para o fundo, necessária para aproximar os joelhos ou acomodar o usuário. Valor informado em m."
    tipo: number
    unidade: m
    obrigatorio: true
  aproximacao_frontal:
    label: Possui aproximação frontal
    definicao: "Verifica se existe espaço desobstruído à frente para aproximar a cadeira de rodas e alcançar o equipamento."
    tipo: boolean
    obrigatorio: true
  tipo_torneira:
    label: Tipo de acionamento da torneira
    definicao: "Identifica o mecanismo de acionamento da torneira e se ele pode ser operado sem preensão ou torção difícil."
    tipo: select
    opcoes:
    - alavanca
    - sensor_eletronico
    - equivalente
    - outro
    obrigatorio: true
  forca_torneira:
    label: Força de acionamento
    definicao: "Força necessária para acionar o componente durante o uso normal. Valor informado em N."
    tipo: number
    unidade: N
    obrigatorio: true
  ciclo_fechamento:
    label: Ciclo de fechamento automático
    definicao: "Contagem ou duração do componente/ciclo descrito, usada para verificar o requisito correspondente. Valor informado em s."
    tipo: number
    unidade: s
  afastamento_barra:
    label: Afastamento da barra da parede
    definicao: "Vão entre os dois pontos de referência indicados, medido na direção mais curta entre eles. Valor informado em m."
    tipo: number
    unidade: m
  distancia_barra_borda:
    label: Distância da borda ao eixo da barra
    definicao: "Vão entre os dois pontos de referência indicados, medido na direção mais curta entre eles. Valor informado em m."
    tipo: number
    unidade: m
  alcance_torneira:
    label: Alcance da torneira
    definicao: "Distância horizontal entre a borda frontal do lavatório e o ponto de acionamento da torneira, relevante para o alcance sentado."
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
- id: ciclo_minimo
  nome: Tempo de fechamento mínimo
  parametro: ciclo_fechamento
  operador: '>='
  valor: 10
  referencia: ABNT NBR 9050:2020 — 7.8.2
- id: ciclo_maximo
  nome: Tempo de fechamento máximo
  parametro: ciclo_fechamento
  operador: '<='
  valor: 20
  referencia: ABNT NBR 9050:2020 — 7.8.2
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
`,lf=`id: mesa
nome: Mesa
norma:
  nome: ABNT NBR 9050
  versao: 2020 - versão corrigida 2021
parametros:
  tipo_mesa:
    label: Tipo de mesa
    definicao: "Distingue mesa de trabalho de mesa de refeição, cujos usos e requisitos de aproximação podem variar."
    tipo: select
    opcoes:
    - trabalho
    - refeicao
    obrigatorio: true
  facilmente_identificada:
    label: Facilmente identificada
    definicao: "Verifica se a característica permite localizar, usar ou manter o elemento sem criar barreira ao usuário."
    tipo: boolean
    obrigatorio: true
  localizada_em_rota_acessivel:
    label: Localizada em rota acessível
    definicao: "Verifica se o elemento está conectado a uma rota contínua e utilizável por pessoas com mobilidade reduzida."
    tipo: boolean
    obrigatorio: true
  aproximacao_frontal:
    label: Possui aproximação frontal
    definicao: "Verifica se existe espaço desobstruído à frente para aproximar a cadeira de rodas e alcançar o equipamento."
    tipo: boolean
    obrigatorio: true
  circulacao_giro_180:
    label: Circulação adjacente para giro de 180 graus
    definicao: "Verifica se há área desobstruída suficiente para a cadeira de rodas realizar a rotação indicada junto ao elemento."
    tipo: boolean
    obrigatorio: true
  largura_tampo:
    label: Largura do tampo
    definicao: "Dimensão transversal do elemento, medida perpendicularmente ao sentido principal de uso. Valor informado em m."
    tipo: number
    unidade: m
    obrigatorio: true
  altura_tampo:
    label: Altura do tampo
    definicao: "Distância vertical entre o piso acabado e o ponto do componente indicado no campo (borda, superfície, comando ou eixo). Valor informado em m."
    tipo: number
    unidade: m
    obrigatorio: true
  largura_livre_sob_tampo:
    label: Largura livre sob o tampo
    definicao: "Dimensão transversal útil, medida entre os limites físicos e descontando elementos que reduzam a passagem. Valor informado em m."
    tipo: number
    unidade: m
    obrigatorio: true
  altura_livre_sob_tampo:
    label: Altura livre sob o tampo
    definicao: "Distância vertical entre o piso acabado e o ponto do componente indicado no campo (borda, superfície, comando ou eixo). Valor informado em m."
    tipo: number
    unidade: m
    obrigatorio: true
  profundidade_livre_sob_tampo:
    label: Profundidade livre sob o tampo
    definicao: "Dimensão livre no sentido da frente para o fundo, necessária para aproximar os joelhos ou acomodar o usuário. Valor informado em m."
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
`,cf=`id: mictorio
nome: Mictório
norma:
  nome: ABNT NBR 9050
  versao: 2020 - versão corrigida 2021
parametros:
  area_aproximacao_frontal:
    label: Área de aproximação frontal
    definicao: "Verifica se existe espaço desobstruído à frente para aproximar a cadeira de rodas e alcançar o equipamento."
    tipo: boolean
    obrigatorio: true
  altura_valvula:
    label: Altura da válvula
    definicao: "Distância vertical entre o piso acabado e o ponto do componente indicado no campo (borda, superfície, comando ou eixo). Valor informado em m."
    tipo: number
    unidade: m
    obrigatorio: true
  tipo_acionamento:
    label: Tipo de acionamento
    definicao: "Identifica como a descarga do mictório é acionada para avaliar se pode ser operada com alcance e esforço acessíveis."
    tipo: select
    opcoes:
    - sensor_eletronico
    - dispositivo_equivalente
    - fechamento_automatico
    - manual
    obrigatorio: true
  forca_acionamento:
    label: Força de acionamento
    definicao: "Força necessária para acionar o componente durante o uso normal. Valor informado em N."
    tipo: number
    unidade: N
    obrigatorio: true
  possui_barras:
    label: Possui barras de apoio
    definicao: "Verifica se o apoio está instalado na posição prevista e pode ser utilizado com segurança durante a aproximação, transferência ou deslocamento."
    tipo: boolean
    obrigatorio: true
  altura_barra:
    label: Altura de instalação da barra
    definicao: "Distância vertical entre o piso acabado e o ponto do componente indicado no campo (borda, superfície, comando ou eixo). Valor informado em m."
    tipo: number
    unidade: m
  comprimento_barra:
    label: Comprimento mínimo da barra
    definicao: "Dimensão no sentido do comprimento do elemento; em degraus, corresponde à profundidade horizontal disponível para apoiar o pé. Valor informado em m."
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
`,uf=`id: papeleiras
nome: Papeleiras
norma:
  nome: ABNT NBR 9050
  versao: 2020 - versão corrigida 2021
parametros:
  tipo_instalacao:
    label: Tipo de instalação
    definicao: Distingue papeleira embutida de papeleira de sobrepor, cujas posições são tratadas de forma diferente
      na norma.
    tipo: select
    opcoes:
    - embutida
    - sobrepor_rolo
    - sobrepor_interfolhada
    obrigatorio: true
  altura_instalacao:
    label: Altura de instalação
    definicao: Altura do ponto de acesso ao papel em relação ao piso acabado.
    tipo: number
    unidade: m
  acesso_livre_facil:
    label: Acesso livre e de fácil alcance
    definicao: Verifica se é possível alcançar e retirar o papel sem obstáculo, a partir da posição de uso da bacia.
    tipo: boolean
    obrigatorio: true
  localizacao_conforme_figura:
    label: Localização conforme figura aplicável
    definicao: Verificação manual da posição da papeleira em relação à bacia e às barras, conforme o tipo de instalação.
    tipo: boolean
    obrigatorio: true
regras:
- id: altura_sobrepor
  nome: Altura mínima da papeleira de sobrepor
  tipo: conditional
  parametro: tipo_instalacao
  condicoes:
  - quando:
      operador: ==
      valor: embutida
    resultado: conforme
  - quando:
      operador: '!='
      valor: embutida
    verificar:
      parametro: altura_instalacao
      operador: '>='
      valor: 1.0
    mensagem: Papeleiras de sobrepor não podem ser instaladas abaixo de 1,00 m do piso acabado.
  referencia: ABNT NBR 9050:2020 — 7.11.2
- id: acesso_papel
  nome: Acesso livre e de fácil alcance
  tipo: checklist
  parametro: acesso_livre_facil
  referencia: ABNT NBR 9050:2020 — 7.11.2
- id: posicao_papeleira
  nome: Posição conforme tipo de papeleira
  tipo: checklist
  parametro: localizacao_conforme_figura
  referencia: ABNT NBR 9050:2020 — 7.11.2 e Figuras 124 a 126
`,df=`id: piscina
nome: Piscina
norma:
  nome: ABNT NBR 9050
  versao: 2020 - versão corrigida 2021
parametros:
  altura_maxima_tanque:
    label: Altura máxima na maior profundidade
    definicao: "Distância vertical entre o piso acabado e o ponto do componente indicado no campo (borda, superfície, comando ou eixo). Valor informado em m."
    tipo: number
    unidade: m
  piso_entorno_atende_nbr_10339:
    label: Piso do entorno atende à ABNT NBR 10339
    definicao: "O piso ao redor da piscina cumpre os requisitos de segurança e desempenho definidos pela ABNT NBR 10339."
    tipo: boolean
  bordas_arredondadas:
    label: Bordas com acabamento arredondado
    definicao: "Verifica se as bordas e superfícies de contato não têm arestas vivas que possam causar ferimentos."
    tipo: boolean
  degraus_arredondados:
    label: Degraus de acesso à água com acabamento arredondado
    definicao: "Verifica se as bordas e superfícies de contato não têm arestas vivas que possam causar ferimentos."
    tipo: boolean
  corrimaos_arredondados:
    label: Corrimãos com acabamento arredondado
    definicao: "Verifica se o apoio está instalado na posição prevista e pode ser utilizado com segurança durante a aproximação, transferência ou deslocamento."
    tipo: boolean
  barras_arredondadas:
    label: Barras de apoio com acabamento arredondado
    definicao: "Verifica se o apoio está instalado na posição prevista e pode ser utilizado com segurança durante a aproximação, transferência ou deslocamento."
    tipo: boolean
  meio_acesso_adequado:
    label: Meio de entrada e saída adequado à Tabela 8
    definicao: "Identifica se a piscina dispõe de um meio de entrada e saída acessível dentre as soluções previstas na Tabela 8 da norma."
    tipo: boolean
  inclinacao_rampa:
    label: Inclinação da rampa
    definicao: "Inclinação da superfície, calculada pela variação vertical em relação à distância horizontal e expressa como porcentagem. Valor informado em %."
    tipo: number
    unidade: '%'
  corrimao_rampa_ambos_lados:
    label: Corrimão nos dois lados da rampa
    definicao: "Verifica se o apoio está instalado na posição prevista e pode ser utilizado com segurança durante a aproximação, transferência ou deslocamento."
    tipo: boolean
  altura_corrimao_rampa:
    label: Altura do corrimão da rampa
    definicao: "Distância vertical entre o piso acabado e o ponto do componente indicado no campo (borda, superfície, comando ou eixo). Valor informado em m."
    tipo: number
    unidade: m
  altura_banco:
    label: Altura do banco de transferência
    definicao: "Distância vertical entre o piso acabado e o ponto do componente indicado no campo (borda, superfície, comando ou eixo). Valor informado em m."
    tipo: number
    unidade: m
  extensao_banco:
    label: Extensão do banco
    definicao: "Dimensão no sentido do comprimento do elemento; em degraus, corresponde à profundidade horizontal disponível para apoiar o pé. Valor informado em m."
    tipo: number
    unidade: m
  profundidade_banco:
    label: Profundidade do banco
    definicao: "Dimensão livre no sentido da frente para o fundo, necessária para aproximar os joelhos ou acomodar o usuário. Valor informado em m."
    tipo: number
    unidade: m
  distancia_barras_banco:
    label: Distância entre barras do banco
    definicao: "Vão entre os dois pontos de referência indicados, medido na direção mais curta entre eles. Valor informado em m."
    tipo: number
    unidade: m
  nivel_agua_banco:
    label: Diferença máxima entre água e assento do banco
    definicao: "Diferença vertical entre o nível da água e a superfície do assento de transferência."
    tipo: number
    unidade: m
  largura_escada:
    label: Largura da escada submersa
    definicao: "Dimensão transversal do elemento, medida perpendicularmente ao sentido principal de uso. Valor informado em m."
    tipo: number
    unidade: m
  piso_degrau:
    label: Piso dos degraus submersos
    definicao: "Profundidade horizontal de cada degrau submerso, isto é, a superfície disponível para apoiar o pé."
    tipo: number
    unidade: m
  espelho_degrau:
    label: Espelho dos degraus submersos
    definicao: "Altura vertical entre as superfícies de apoio de dois degraus submersos consecutivos."
    tipo: number
    unidade: m
  corrimaos_escada:
    label: Corrimãos nos dois lados e em três alturas
    definicao: "Verifica se o apoio está instalado na posição prevista e pode ser utilizado com segurança durante a aproximação, transferência ou deslocamento."
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
  nome: Distância entre barras do banco
  parametro: distancia_barras_banco
  referencia: ABNT NBR 9050:2020 — 10.12.2.1 c
  tipo: conditional
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
`,mf=`id: piso-desnivel
nome: Pisos e desníveis
norma:
  nome: ABNT NBR 9050
  versao: 2020 - versão corrigida 2021
parametros:
  tipo_ambiente:
    label: Tipo de ambiente
    definicao: "Identifica se o piso avaliado é interno ou externo, distinção usada pela norma para estabelecer a inclinação transversal permitida."
    tipo: select
    opcoes:
    - interno
    - externo
    obrigatorio: true
  inclinacao_transversal:
    label: Inclinação transversal
    definicao: "Inclinação da superfície, calculada pela variação vertical em relação à distância horizontal e expressa como porcentagem. Valor informado em %."
    tipo: number
    unidade: '%'
    obrigatorio: true
  inclinacao_longitudinal:
    label: Inclinação longitudinal
    definicao: "Inclinação da superfície, calculada pela variação vertical em relação à distância horizontal e expressa como porcentagem. Valor informado em %."
    tipo: number
    unidade: '%'
    obrigatorio: true
  revestimento_regular:
    label: Superfície regular
    definicao: "Verifica se o piso oferece superfície contínua e segura para circulação, sem instabilidade ou risco de escorregamento."
    tipo: boolean
    obrigatorio: true
  revestimento_firme:
    label: Superfície firme
    definicao: "Verifica se o piso oferece superfície contínua e segura para circulação, sem instabilidade ou risco de escorregamento."
    tipo: boolean
    obrigatorio: true
  revestimento_estavel:
    label: Superfície estável
    definicao: "Verifica se o piso oferece superfície contínua e segura para circulação, sem instabilidade ou risco de escorregamento."
    tipo: boolean
    obrigatorio: true
  revestimento_antiderrapante:
    label: Superfície antiderrapante
    definicao: "Verifica se o acabamento reduz o risco de escorregamento durante a circulação, inclusive quando molhado."
    tipo: boolean
    obrigatorio: true
  desnível:
    label: Desnível
    definicao: "Diferença vertical de nível entre as duas superfícies conectadas pelo trecho avaliado. Valor informado em mm."
    tipo: number
    unidade: mm
    obrigatorio: true
  possui_tratamento_desnível:
    label: Possui tratamento do desnível
    definicao: "O desnível tem chanfro, rampa ou outro tratamento que permita transpor a mudança de nível sem um degrau abrupto."
    tipo: boolean
  inclinacao_tratamento:
    label: Inclinação do tratamento do desnível
    definicao: "Inclinação da superfície, calculada pela variação vertical em relação à distância horizontal e expressa como porcentagem. Valor informado em %."
    tipo: number
    unidade: '%'
  é_reforma:
    label: É reforma
    definicao: "Identifica se a intervenção é uma reforma, condição que pode alterar os limites admitidos pela norma para adequações existentes."
    tipo: boolean
    obrigatorio: true
  fresta_grelha:
    label: Largura da fresta da grelha/junta
    definicao: "Largura da abertura entre peças do piso; frestas largas podem prender rodas, bengalas ou pontas de calçados. Valor informado em mm."
    tipo: number
    unidade: mm
  tampa_nivelada:
    label: Tampa nivelada com o piso adjacente
    definicao: "Verifica se não há ressalto entre esta superfície e o piso adjacente que possa dificultar a passagem."
    tipo: boolean
  fresta_tampa:
    label: Largura da fresta da tampa
    definicao: "Largura da abertura entre peças do piso; frestas largas podem prender rodas, bengalas ou pontas de calçados. Valor informado em mm."
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
`,pf=`id: piso_tatil
nome: Piso tátil
norma:
  nome: ABNT NBR 9050
  versao: 2020 - versão corrigida 2021
parametros:
  sinalizacao_tatil_visual:
    label: Possui sinalização tátil e visual no piso quando aplicável
    definicao: "Verifica se a informação está disponível de forma perceptível e legível para orientar o uso e a circulação."
    tipo: boolean
  atende_nbr_16537:
    label: Atende à ABNT NBR 16537
    definicao: "O piso tátil segue os requisitos de aplicação, geometria e contraste da ABNT NBR 16537."
    tipo: boolean
  contraste_lrv:
    label: Diferença de LRV em relação à superfície adjacente
    definicao: "Diferença entre os valores de refletância luminosa da sinalização e da superfície adjacente, usada para verificar contraste visual. Valor informado em pontos."
    tipo: number
    unidade: { singular: ponto, plural: pontos }
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
`,ff=`id: plataforma_elevacao_inclinada
nome: Plataforma de elevação inclinada
norma:
  nome: ABNT NBR 9050
  versao: 2020 - versão corrigida 2021
parametros:
  distancia_entre_paradas:
    label: Distância entre paradas
    definicao: "Distância máxima percorrida entre paradas programadas nos patamares. Valor informado em m."
    tipo: number
    unidade: m
    obrigatorio: true
  assento_escamoteavel:
    label: Assento escamoteável ou rebatível
    definicao: "A plataforma possui assento escamoteável ou rebatível para uso de pessoas com mobilidade reduzida."
    tipo: boolean
    obrigatorio: true
  aviso_acompanhamento:
    label: Aviso de acompanhamento obrigatório
    definicao: "Há sinalização tátil e visual informando a obrigatoriedade de acompanhamento por pessoal habilitado."
    tipo: boolean
    obrigatorio: true
  intercomunicador_altura:
    label: Altura do intercomunicador
    definicao: "Altura do intercomunicador para solicitação de auxílio na área de espera. Valor informado em m."
    tipo: number
    unidade: m
    obrigatorio: true
  sinalizacao_piso_espera:
    label: Sinalização visual da área de espera
    definicao: "O piso da área de espera e o limite da projeção do percurso têm sinalização visual em cor contrastante."
    tipo: boolean
    obrigatorio: true
  atende_iso_9386_2:
    label: Atende à ABNT NBR ISO 9386-2
    definicao: "A plataforma atende aos requisitos de segurança da ABNT NBR ISO 9386-2."
    tipo: boolean
    obrigatorio: true
regras:
- id: distancia_paradas
  nome: Paradas a cada 3,20 m
  parametro: distancia_entre_paradas
  operador: '<='
  valor: 3.2
  referencia: ABNT NBR 9050:2020 — 6.10.4.2
- id: assento_escamoteavel
  nome: Assento escamoteável
  parametro: assento_escamoteavel
  operador: ==
  valor: true
  referencia: ABNT NBR 9050:2020 — 6.10.4.2
- id: aviso_acompanhamento
  nome: Aviso de acompanhamento
  parametro: aviso_acompanhamento
  operador: ==
  valor: true
  referencia: ABNT NBR 9050:2020 — 6.10.4.3
- id: intercomunicador_minimo
  nome: Altura mínima do intercomunicador
  parametro: intercomunicador_altura
  operador: '>='
  valor: 0.8
  referencia: ABNT NBR 9050:2020 — 6.10.4.3
- id: intercomunicador_maximo
  nome: Altura máxima do intercomunicador
  parametro: intercomunicador_altura
  operador: '<='
  valor: 1
  referencia: ABNT NBR 9050:2020 — 6.10.4.3
- id: sinalizacao_piso
  nome: Sinalização visual no piso
  parametro: sinalizacao_piso_espera
  operador: ==
  valor: true
  referencia: ABNT NBR 9050:2020 — 6.10.4.4
- id: iso_9386_2
  nome: Atendimento à ABNT NBR ISO 9386-2
  tipo: checklist
  parametro: atende_iso_9386_2
  referencia: ABNT NBR 9050:2020 — 6.10.4
`,vf=`id: plataforma_elevacao_vertical
nome: Plataforma de elevação vertical
norma:
  nome: ABNT NBR 9050
  versao: 2020 - versão corrigida 2021
parametros:
  tipo_percurso:
    label: Tipo de percurso
    definicao: "Indica se a plataforma tem percurso aberto ou caixa enclausurada (percurso fechado)."
    tipo: select
    opcoes:
    - aberto
    - fechado
    obrigatorio: true
  desnivel_percurso:
    label: Desnível do percurso
    definicao: "Diferença vertical de nível vencida pela plataforma. Valor informado em m."
    tipo: number
    unidade: m
    obrigatorio: true
  fechamento_continuo:
    label: Fechamento contínuo sem vãos
    definicao: "O fechamento da plataforma é contínuo em todas as laterais, sem vãos, até a altura exigida."
    tipo: boolean
    obrigatorio: true
  altura_fechamento:
    label: Altura do fechamento
    definicao: "Altura do fechamento contínuo em relação ao piso da plataforma. Valor informado em m."
    tipo: number
    unidade: m
    obrigatorio: true
  comunicacao_auxilio:
    label: Dispositivo de comunicação para auxílio
    definicao: "Existe dispositivo de comunicação para solicitação de auxílio nos pavimentos atendidos e no equipamento, para uso acompanhado ou assistido."
    tipo: boolean
    obrigatorio: true
  atende_iso_9386_1:
    label: Atende à ABNT NBR ISO 9386-1
    definicao: "A plataforma atende aos requisitos de segurança da ABNT NBR ISO 9386-1."
    tipo: boolean
    obrigatorio: true
regras:
- id: fechamento_continuo
  nome: Fechamento contínuo
  parametro: fechamento_continuo
  operador: ==
  valor: true
  referencia: ABNT NBR 9050:2020 — 6.10.3.1
- id: altura_fechamento
  nome: Altura mínima do fechamento
  parametro: altura_fechamento
  operador: '>='
  valor: 1.1
  referencia: ABNT NBR 9050:2020 — 6.10.3.1
- id: percurso_conforme
  nome: Percurso aberto limitado a 2,00 m
  tipo: conditional
  parametro: desnivel_percurso
  condicoes:
  - quando:
      operador: '<='
      valor: 2
    resultado: conforme
    mensagem: Percurso de até 2,00 m pode ser aberto ou fechado.
  - quando:
      operador: '>'
      valor: 2
    verificar:
      parametro: tipo_percurso
      operador: ==
      valor: fechado
    mensagem: Acima de 2,00 m a plataforma deve ter caixa enclausurada (percurso fechado).
  referencia: ABNT NBR 9050:2020 — 6.10.3.2
- id: comunicacao_auxilio
  nome: Comunicação para solicitação de auxílio
  parametro: comunicacao_auxilio
  operador: ==
  valor: true
  referencia: ABNT NBR 9050:2020 — 6.10.3.3
- id: iso_9386_1
  nome: Atendimento à ABNT NBR ISO 9386-1
  tipo: checklist
  parametro: atende_iso_9386_1
  referencia: ABNT NBR 9050:2020 — 6.10.3.4
`,hf=`id: porta_objetos
nome: Porta-objetos acessíveis
norma:
  nome: ABNT NBR 9050
  versao: 2020 - versão corrigida 2021
parametros:
  altura_instalacao:
    label: Altura de instalação
    definicao: Altura da superfície de apoio do porta-objetos em relação ao piso acabado.
    tipo: number
    unidade: m
    obrigatorio: true
  profundidade:
    label: Profundidade
    definicao: Distância da borda frontal à parede ou plano de fixação; a projeção não pode exceder o limite normativo.
    tipo: number
    unidade: m
    obrigatorio: true
  nao_interfere_manutencao:
    label: Não interfere em manobra, transferência ou barras
    definicao: Verifica se o porta-objetos não ocupa as áreas usadas para manobrar, transferir ou utilizar barras
      de apoio.
    tipo: boolean
    obrigatorio: true
  sem_cantos_cortantes:
    label: Sem cantos agudos ou superfícies cortantes/abrasivas
    definicao: Verifica se as bordas e superfícies não oferecem risco de corte ou abrasão ao usuário.
    tipo: boolean
    obrigatorio: true
regras:
- id: altura_minima
  nome: Altura mínima
  parametro: altura_instalacao
  operador: '>='
  valor: 0.8
  referencia: ABNT NBR 9050:2020 — 7.11.4
- id: altura_maxima
  nome: Altura máxima
  parametro: altura_instalacao
  operador: <=
  valor: 1.2
  referencia: ABNT NBR 9050:2020 — 7.11.4
- id: profundidade_maxima
  nome: Profundidade máxima
  parametro: profundidade
  operador: <=
  valor: 0.25
  referencia: ABNT NBR 9050:2020 — 7.11.4
- id: nao_interfere
  nome: Não interferência nas áreas de uso
  tipo: checklist
  parametro: nao_interfere_manutencao
  referencia: ABNT NBR 9050:2020 — 7.11.4
- id: bordas_seguras
  nome: Bordas e superfícies seguras
  tipo: checklist
  parametro: sem_cantos_cortantes
  referencia: ABNT NBR 9050:2020 — 7.11.4.2
`,gf=`id: portas
nome: Portas
norma:
  nome: ABNT NBR 9050
  versao: 2020 - versão corrigida 2021
parametros:
  vao_livre:
    label: Vão livre
    definicao: "Dimensão transversal útil, medida entre os limites físicos e descontando elementos que reduzam a passagem. Valor informado em m."
    tipo: number
    unidade: m
    obrigatorio: true
  altura_livre:
    label: Altura livre
    definicao: "Distância vertical entre o piso acabado e o ponto do componente indicado no campo (borda, superfície, comando ou eixo). Valor informado em m."
    tipo: number
    unidade: m
    obrigatorio: true
  forca_acionamento:
    label: Força de acionamento
    definicao: "Força necessária para acionar o componente durante o uso normal. Valor informado em N."
    tipo: number
    unidade: N
    obrigatorio: true
  altura_macaneta:
    label: Altura da maçaneta
    definicao: "Distância vertical entre o piso acabado e o ponto do componente indicado no campo (borda, superfície, comando ou eixo). Valor informado em m."
    tipo: number
    unidade: m
    obrigatorio: true
  possui_macaneta_alavanca:
    label: Maçaneta do tipo alavanca
    definicao: "Verifica se o dispositivo de pega permite abrir a porta sem exigir pinça ou torção do punho."
    tipo: boolean
    obrigatorio: true
  abertura_um_movimento:
    label: Abertura com um único movimento
    definicao: "Verifica se o componente pode ser operado sem destreza fina ou sequência de movimentos, usando uma única mão quando indicado."
    tipo: boolean
    obrigatorio: true
  tipo_puxador:
    label: Tipo de puxador
    definicao: "Indica se a porta usa puxador vertical, horizontal ou nenhum, definindo a configuração e as dimensões a verificar."
    tipo: select
    opcoes:
    - nenhum
    - vertical
    - horizontal
  diametro_puxador:
    label: Diâmetro do puxador
    definicao: "Dimensão da seção ou curvatura circular do componente, usada para verificar pega, afastamento ou espaço de manobra. Valor informado em m."
    tipo: number
    unidade: m
  comprimento_puxador:
    label: Comprimento do puxador
    definicao: "Dimensão no sentido do comprimento do elemento; em degraus, corresponde à profundidade horizontal disponível para apoiar o pé. Valor informado em m."
    tipo: number
    unidade: m
  afastamento_puxador:
    label: Afastamento do puxador da porta
    definicao: "Vão entre os dois pontos de referência indicados, medido na direção mais curta entre eles. Valor informado em m."
    tipo: number
    unidade: m
  afastamento_batente_puxador:
    label: Afastamento do puxador do batente
    definicao: "Vão entre os dois pontos de referência indicados, medido na direção mais curta entre eles. Valor informado em m."
    tipo: number
    unidade: m
  altura_puxador:
    label: Altura do puxador
    definicao: "Distância vertical entre o piso acabado e o ponto do componente indicado no campo (borda, superfície, comando ou eixo). Valor informado em m."
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
`,bf=`id: rampas
nome: Rampas
norma:
  nome: ABNT NBR 9050
  versao: 2020 - versão corrigida 2021
parametros:
  inclinacao:
    label: Inclinação
    definicao: "Inclinação da superfície, calculada pela variação vertical em relação à distância horizontal e expressa como porcentagem. Valor informado em %."
    tipo: number
    unidade: '%'
    obrigatorio: true
  desnivel_segmento:
    label: Desnível de cada segmento
    definicao: "Diferença vertical de nível entre as duas superfícies conectadas pelo trecho avaliado. Valor informado em m."
    tipo: number
    unidade: m
    obrigatorio: true
  numero_segmentos:
    label: Número de segmentos
    definicao: "Contagem ou duração do componente/ciclo descrito, usada para verificar o requisito correspondente. Valor informado em segmentos."
    tipo: number
    unidade: { singular: segmento, plural: segmentos }
    obrigatorio: true
  largura:
    label: Largura livre
    definicao: "Dimensão transversal útil, medida entre os limites físicos e descontando elementos que reduzam a passagem. Valor informado em m."
    tipo: number
    unidade: m
    obrigatorio: true
  inclinacao_transversal:
    label: Inclinação transversal
    definicao: "Inclinação da superfície, calculada pela variação vertical em relação à distância horizontal e expressa como porcentagem. Valor informado em %."
    tipo: number
    unidade: '%'
    obrigatorio: true
  ambiente:
    label: Local da rampa
    definicao: "Identifica se a escada ou rampa está em área interna ou externa; essa distinção define limites diferentes para alguns critérios de inclinação."
    tipo: select
    opcoes:
    - interno
    - externo
  patamar_inicial_final:
    label: Comprimento do patamar inicial/final
    definicao: "Comprimento horizontal livre do patamar no início ou no término da rampa, necessário para aproximação e manobra."
    tipo: number
    unidade: m
    obrigatorio: true
  patamar_intermediario:
    label: Comprimento do patamar intermediário
    definicao: "Comprimento horizontal livre do patamar entre segmentos consecutivos da rampa, necessário para descanso e manobra."
    tipo: number
    unidade: m
    obrigatorio: true
  raio_curva:
    label: Raio interno da curva
    definicao: "Dimensão da seção ou curvatura circular do componente, usada para verificar pega, afastamento ou espaço de manobra. Valor informado em m."
    tipo: number
    unidade: m
  rampa_curva:
    label: Rampa em curva
    definicao: "Indica que o percurso da rampa muda de direção em curva; nessa configuração também se verifica o raio interno."
    tipo: boolean
    obrigatorio: true
  guia_balizamento:
    label: Possui guia de balizamento
    definicao: "Há guia lateral contínua que delimita a rampa e reduz o risco de a cadeira ou a bengala sair da superfície de circulação."
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
  - quando:
      operador: '>'
      valor: 8.33
    resultado: nao_conforme
    mensagem: Inclinação acima de 8,33 % excede o limite admissível em rampas; o trecho deve ser refeito.
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
  - quando:
      operador: '>'
      valor: 8.33
    resultado: nao_conforme
    mensagem: Inclinação acima de 8,33 % excede o limite admissível em rampas; o número de segmentos não corrige a inclinação.
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
`,_f=`id: sanitario_acessivel
nome: Sanitário acessível
norma:
  nome: ABNT NBR 9050
  versao: 2020 - versão corrigida 2021
parametros:
  entrada_independente:
    label: Possui entrada independente
    definicao: "A pessoa pode entrar no sanitário acessível diretamente, sem precisar atravessar outro sanitário de uso coletivo."
    tipo: boolean
    obrigatorio: true
  sinalizacao:
    label: Possui sinalização
    definicao: "Verifica se a informação está disponível de forma perceptível e legível para orientar o uso e a circulação."
    tipo: boolean
    obrigatorio: true
  alarme_emergencia:
    label: Possui alarme de emergência
    definicao: "Verifica se a pessoa consegue solicitar ajuda e se comunicar em uma situação de necessidade."
    tipo: boolean
    obrigatorio: true
  area_manobra_360:
    label: Possui área de manobra de 360 graus
    definicao: "Verifica se há área desobstruída suficiente para a cadeira de rodas realizar a rotação indicada junto ao elemento."
    tipo: boolean
    obrigatorio: true
  diametro_manobra:
    label: Diâmetro da área de manobra
    definicao: "Dimensão da seção ou curvatura circular do componente, usada para verificar pega, afastamento ou espaço de manobra. Valor informado em m."
    tipo: number
    unidade: m
    obrigatorio: true
  vao_porta:
    label: Vão livre da porta
    definicao: "Dimensão transversal útil, medida entre os limites físicos e descontando elementos que reduzam a passagem. Valor informado em m."
    tipo: number
    unidade: m
    obrigatorio: true
  porta_abre_externamente:
    label: Porta abre para o lado externo
    definicao: "A folha da porta abre para fora do sanitário, preservando o espaço interno para manobra e eventual auxílio."
    tipo: boolean
    obrigatorio: true
  comprimento_puxador:
    label: Comprimento do puxador
    definicao: "Dimensão no sentido do comprimento do elemento; em degraus, corresponde à profundidade horizontal disponível para apoiar o pé. Valor informado em m."
    tipo: number
    unidade: m
  afastamento_puxador:
    label: Afastamento do puxador
    definicao: "Vão entre os dois pontos de referência indicados, medido na direção mais curta entre eles. Valor informado em mm."
    tipo: number
    unidade: mm
  diametro_puxador:
    label: Diâmetro do puxador
    definicao: "Dimensão da seção ou curvatura circular do componente, usada para verificar pega, afastamento ou espaço de manobra. Valor informado em mm."
    tipo: number
    unidade: mm
  distancia_maxima:
    label: Distância até o sanitário
    definicao: "Vão entre os dois pontos de referência indicados, medido na direção mais curta entre eles. Valor informado em m."
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
`,yf=`id: sanitario_familiar
nome: Sanitário familiar
norma:
  nome: ABNT NBR 9050
  versao: 2020 - versão corrigida 2021
parametros:
  entrada_independente:
    label: Entrada independente
    definicao: "O sanitário familiar pode ser acessado diretamente, sem atravessar outro sanitário de uso coletivo."
    tipo: boolean
    obrigatorio: true
  boxe_acessivel:
    label: Possui boxe com sanitário acessível
    definicao: "Há no sanitário familiar um boxe com sanitário acessível, conforme 7.5, além do boxe com superfície de troca."
    tipo: boolean
    obrigatorio: true
  largura_trocador:
    label: Largura da superfície de troca
    definicao: "Dimensão transversal da superfície para troca de roupas na posição deitada. Valor informado em m."
    tipo: number
    unidade: m
    obrigatorio: true
  comprimento_trocador:
    label: Comprimento da superfície de troca
    definicao: "Dimensão longitudinal da superfície para troca de roupas na posição deitada. Valor informado em m."
    tipo: number
    unidade: m
    obrigatorio: true
  altura_trocador:
    label: Altura da superfície de troca
    definicao: "Altura da superfície de troca em relação ao piso acabado. Valor informado em m."
    tipo: number
    unidade: m
    obrigatorio: true
  resistencia_trocador:
    label: Resistência da superfície de troca
    definicao: "Carga que a superfície de troca suporta sem romper ou perder estabilidade. Valor informado em kg."
    tipo: number
    unidade: kg
    obrigatorio: true
  barras_apoio:
    label: Barras de apoio do trocador
    definicao: "As barras de apoio do boxe com trocador estão instaladas conforme 7.14.1."
    tipo: boolean
    obrigatorio: true
regras:
- id: entrada_independente
  nome: Entrada independente
  parametro: entrada_independente
  operador: ==
  valor: true
  referencia: ABNT NBR 9050:2020 — 7.9
- id: boxe_acessivel
  nome: Boxe com sanitário acessível
  parametro: boxe_acessivel
  operador: ==
  valor: true
  referencia: ABNT NBR 9050:2020 — 7.9 e 7.5
- id: largura_trocador
  nome: Largura mínima da superfície de troca
  parametro: largura_trocador
  operador: '>='
  valor: 0.7
  referencia: ABNT NBR 9050:2020 — 7.9
- id: comprimento_trocador
  nome: Comprimento mínimo da superfície de troca
  parametro: comprimento_trocador
  operador: '>='
  valor: 1.8
  referencia: ABNT NBR 9050:2020 — 7.9
- id: altura_trocador
  nome: Altura da superfície de troca
  parametro: altura_trocador
  operador: ==
  valor: 0.46
  referencia: ABNT NBR 9050:2020 — 7.9
- id: resistencia_trocador
  nome: Resistência mínima da superfície de troca
  parametro: resistencia_trocador
  operador: '>='
  valor: 150
  referencia: ABNT NBR 9050:2020 — 7.9
- id: barras_apoio
  nome: Barras de apoio do trocador
  tipo: checklist
  parametro: barras_apoio
  referencia: ABNT NBR 9050:2020 — 7.9 e 7.14.1
`,Af=`id: sinalizacao
nome: Sinalização
norma:
  nome: ABNT NBR 9050
  versao: 2020 - versão corrigida 2021
parametros:
  contraste_lrv:
    label: Diferença de LRV
    definicao: "Diferença entre os valores de refletância luminosa da sinalização e da superfície adjacente, usada para verificar contraste visual. Valor informado em pontos."
    tipo: number
    unidade: { singular: ponto, plural: pontos }
  material_sem_reflexo:
    label: Material sem brilho ou alta reflexão
    definicao: "Verifica se a informação está disponível de forma perceptível e legível para orientar o uso e a circulação."
    tipo: boolean
  tamanho_letras:
    label: Altura dos caracteres
    definicao: "Altura vertical dos caracteres impressos ou em relevo, que determina sua legibilidade na distância prevista de leitura."
    tipo: number
    unidade: m
  distancia_leitura:
    label: Distância de leitura
    definicao: "Vão entre os dois pontos de referência indicados, medido na direção mais curta entre eles. Valor informado em m."
    tipo: number
    unidade: m
  simbolo_altura:
    label: Altura do símbolo
    definicao: "Distância vertical entre o piso acabado e o ponto do componente indicado no campo (borda, superfície, comando ou eixo). Valor informado em m."
    tipo: number
    unidade: m
  braille:
    label: Possui Braille quando aplicável
    definicao: "Verifica se a informação está disponível de forma perceptível e legível para orientar o uso e a circulação."
    tipo: boolean
  relevo:
    label: Possui alto-relevo quando aplicável
    definicao: "Verifica se a informação está disponível de forma perceptível e legível para orientar o uso e a circulação."
    tipo: boolean
  sinalizacao_tatil_sonora:
    label: Possui sinalização tátil e/ou sonora quando aplicável
    definicao: "Verifica se a informação está disponível de forma perceptível e legível para orientar o uso e a circulação."
    tipo: boolean
  sinalizacao_suspensa_altura:
    label: Altura da sinalização suspensa
    definicao: "Distância vertical entre o piso acabado e o ponto do componente indicado no campo (borda, superfície, comando ou eixo). Valor informado em m."
    tipo: number
    unidade: m
  objetiva:
    label: Texto objetivo
    definicao: "Verifica se a informação está disponível de forma perceptível e legível para orientar o uso e a circulação."
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
`,Nf=`id: vagas_acessiveis
nome: Vagas acessíveis
norma:
  nome: ABNT NBR 9050
  versao: 2020 - versão corrigida 2021
parametros:
  possui_sinalizacao:
    label: Vaga sinalizada
    definicao: "Verifica se a informação está disponível de forma perceptível e legível para orientar o uso e a circulação."
    tipo: boolean
    obrigatorio: true
  possui_faixa_circulacao:
    label: Possui faixa adicional de circulação
    definicao: "Verifica se existe faixa contínua e desobstruída para circulação de pedestres junto ao equipamento ou à vaga."
    tipo: boolean
    obrigatorio: true
  largura_faixa_circulacao:
    label: Largura da faixa adicional de circulação
    definicao: "Dimensão transversal útil, medida entre os limites físicos e descontando elementos que reduzam a passagem. Valor informado em m."
    tipo: number
    unidade: m
    obrigatorio: true
  piso_regular_estavel:
    label: Piso regular e estável
    definicao: "Verifica se o piso oferece superfície contínua e segura para circulação, sem instabilidade ou risco de escorregamento."
    tipo: boolean
    obrigatorio: true
  distancia_acesso:
    label: Distância até o acesso à edificação ou elevador
    definicao: "Vão entre os dois pontos de referência indicados, medido na direção mais curta entre eles. Valor informado em m."
    tipo: number
    unidade: m
    obrigatorio: true
  evita_circulacao_entre_veiculos:
    label: Localização evita circulação entre veículos
    definicao: "Verifica se o percurso de pedestres permanece protegido e não é interrompido pela entrada ou circulação de veículos."
    tipo: boolean
    obrigatorio: true
  vinculada_rota_acessivel:
    label: Vinculada à rota acessível
    definicao: "Verifica se o elemento está conectado a uma rota contínua e utilizável por pessoas com mobilidade reduzida."
    tipo: boolean
    obrigatorio: true
  sinalizacao_nao_interfere:
    label: Sinalização não interfere na circulação
    definicao: "Verifica se a informação está disponível de forma perceptível e legível para orientar o uso e a circulação."
    tipo: boolean
    obrigatorio: true
  faixa_pedestre_estacionamento:
    label: Faixa de circulação de pedestres no estacionamento
    definicao: "Verifica se existe faixa contínua e desobstruída para circulação de pedestres junto ao equipamento ou à vaga."
    tipo: boolean
    obrigatorio: true
  largura_faixa_pedestre:
    label: Largura da faixa de circulação de pedestres
    definicao: "Dimensão transversal útil, medida entre os limites físicos e descontando elementos que reduzam a passagem. Valor informado em m."
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
`,xf=Object.assign({"../rules/nbr9050-2020/area_descanso.yaml":Pp,"../rules/nbr9050-2020/armario_vestiario.yaml":Op,"../rules/nbr9050-2020/assento_pmr_plateia.yaml":jp,"../rules/nbr9050-2020/assento_publico.yaml":Dp,"../rules/nbr9050-2020/bacia_sanitaria.yaml":Vp,"../rules/nbr9050-2020/balcao.yaml":Lp,"../rules/nbr9050-2020/banco_vestiario.yaml":$p,"../rules/nbr9050-2020/banheira_acessivel.yaml":qp,"../rules/nbr9050-2020/barras_apoio.yaml":Mp,"../rules/nbr9050-2020/bebedouro.yaml":Fp,"../rules/nbr9050-2020/cabides.yaml":zp,"../rules/nbr9050-2020/cabina_vestiario.yaml":Hp,"../rules/nbr9050-2020/caixa_autoatendimento.yaml":Up,"../rules/nbr9050-2020/calcada.yaml":Kp,"../rules/nbr9050-2020/chuveiro.yaml":Gp,"../rules/nbr9050-2020/controle_acesso.yaml":Yp,"../rules/nbr9050-2020/corredores.yaml":Wp,"../rules/nbr9050-2020/corrimaos.yaml":Jp,"../rules/nbr9050-2020/degraus-isolados.yaml":Qp,"../rules/nbr9050-2020/elevadores.yaml":Xp,"../rules/nbr9050-2020/escadas.yaml":Zp,"../rules/nbr9050-2020/espaco_cao_guia.yaml":ef,"../rules/nbr9050-2020/espaco_pcr_plateia.yaml":nf,"../rules/nbr9050-2020/espelhos_acessiveis.yaml":of,"../rules/nbr9050-2020/estacionamento.yaml":af,"../rules/nbr9050-2020/guarda_corpos.yaml":rf,"../rules/nbr9050-2020/janelas.yaml":tf,"../rules/nbr9050-2020/lavatorio.yaml":sf,"../rules/nbr9050-2020/mesa.yaml":lf,"../rules/nbr9050-2020/mictorio.yaml":cf,"../rules/nbr9050-2020/papeleiras.yaml":uf,"../rules/nbr9050-2020/piscina.yaml":df,"../rules/nbr9050-2020/piso-desnivel.yaml":mf,"../rules/nbr9050-2020/piso_tatil.yaml":pf,"../rules/nbr9050-2020/plataforma_elevacao_inclinada.yaml":ff,"../rules/nbr9050-2020/plataforma_elevacao_vertical.yaml":vf,"../rules/nbr9050-2020/porta_objetos.yaml":hf,"../rules/nbr9050-2020/portas.yaml":gf,"../rules/nbr9050-2020/rampas.yaml":bf,"../rules/nbr9050-2020/sanitario_acessivel.yaml":_f,"../rules/nbr9050-2020/sanitario_familiar.yaml":yf,"../rules/nbr9050-2020/sinalizacao.yaml":Af,"../rules/nbr9050-2020/vagas_acessiveis.yaml":Nf});async function Bf(){return Object.entries(xf).map(([e,n])=>({path:e,ruleSet:Sa.load(n)})).sort((e,n)=>e.ruleSet.nome.localeCompare(n.ruleSet.nome))}const jo=typeof document<"u";function Wc(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function Tf(e){return e.__esModule||e[Symbol.toStringTag]==="Module"||e.default&&Wc(e.default)}const Ve=Object.assign;function gt(e,n){const o={};for(const a in n){const r=n[a];o[a]=Ln(r)?r.map(e):e(r)}return o}const va=()=>{},Ln=Array.isArray;function Ms(e,n){const o={};for(const a in e)o[a]=a in n?n[a]:e[a];return o}const Jc=/#/g,Rf=/&/g,Sf=/\//g,wf=/=/g,Ef=/\?/g,Qc=/\+/g,Cf=/%5B/g,kf=/%5D/g,Xc=/%5E/g,If=/%60/g,Zc=/%7B/g,Pf=/%7C/g,eu=/%7D/g,Of=/%20/g;function vi(e){return e==null?"":encodeURI(""+e).replace(Pf,"|").replace(Cf,"[").replace(kf,"]")}function jf(e){return vi(e).replace(Zc,"{").replace(eu,"}").replace(Xc,"^")}function zt(e){return vi(e).replace(Qc,"%2B").replace(Of,"+").replace(Jc,"%23").replace(Rf,"%26").replace(If,"`").replace(Zc,"{").replace(eu,"}").replace(Xc,"^")}function Df(e){return zt(e).replace(wf,"%3D")}function Vf(e){return vi(e).replace(Jc,"%23").replace(Ef,"%3F")}function Lf(e){return Vf(e).replace(Sf,"%2F")}function wa(e){if(e==null)return null;try{return decodeURIComponent(""+e)}catch{}return""+e}const $f=/\/$/,qf=e=>e.replace($f,"");function bt(e,n,o="/"){let a,r={},t="",s="";const l=n.indexOf("#");let c=n.indexOf("?");return c=l>=0&&c>l?-1:c,c>=0&&(a=n.slice(0,c),t=n.slice(c,l>0?l:n.length),r=e(t.slice(1))),l>=0&&(a=a||n.slice(0,l),s=n.slice(l,n.length)),a=Hf(a??n,o),{fullPath:a+t+s,path:a,query:r,hash:wa(s)}}function Mf(e,n){const o=n.query?e(n.query):"";return n.path+(o&&"?")+o+(n.hash||"")}function Fs(e,n){return!n||!e.toLowerCase().startsWith(n.toLowerCase())?e:e.slice(n.length)||"/"}function Ff(e,n,o){const a=n.matched.length-1,r=o.matched.length-1;return a>-1&&a===r&&Ko(n.matched[a],o.matched[r])&&nu(n.params,o.params)&&e(n.query)===e(o.query)&&n.hash===o.hash}function Ko(e,n){return(e.aliasOf||e)===(n.aliasOf||n)}function nu(e,n){if(Object.keys(e).length!==Object.keys(n).length)return!1;for(var o in e)if(!zf(e[o],n[o]))return!1;return!0}function zf(e,n){return Ln(e)?zs(e,n):Ln(n)?zs(n,e):e?.valueOf()===n?.valueOf()}function zs(e,n){return Ln(n)?e.length===n.length&&e.every((o,a)=>o===n[a]):e.length===1&&e[0]===n}function Hf(e,n){if(e.startsWith("/"))return e;if(!e)return n;const o=n.split("/"),a=e.split("/"),r=a[a.length-1];(r===".."||r===".")&&a.push("");let t=o.length-1,s,l;for(s=0;s<a.length;s++)if(l=a[s],l!==".")if(l==="..")t>1&&t--;else break;return o.slice(0,t).join("/")+"/"+a.slice(s).join("/")}const co={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};let Ht=(function(e){return e.pop="pop",e.push="push",e})({}),_t=(function(e){return e.back="back",e.forward="forward",e.unknown="",e})({});function Uf(e){if(!e)if(jo){const n=document.querySelector("base");e=n&&n.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),qf(e)}const Kf=/^[^#]+#/;function Gf(e,n){return e.replace(Kf,"#")+n}function Yf(e,n){const o=document.documentElement.getBoundingClientRect(),a=e.getBoundingClientRect();return{behavior:n.behavior,left:a.left-o.left-(n.left||0),top:a.top-o.top-(n.top||0)}}const Er=()=>({left:window.scrollX,top:window.scrollY});function Wf(e){let n;if("el"in e){const o=e.el,a=typeof o=="string"&&o.startsWith("#"),r=typeof o=="string"?a?document.getElementById(o.slice(1)):document.querySelector(o):o;if(!r)return;n=Yf(r,e)}else n=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(n):window.scrollTo(n.left!=null?n.left:window.scrollX,n.top!=null?n.top:window.scrollY)}function Hs(e,n){return(history.state?history.state.position-n:-1)+e}const Ut=new Map;function Jf(e,n){Ut.set(e,n)}function Qf(e){const n=Ut.get(e);return Ut.delete(e),n}function Xf(e){return typeof e=="string"||e&&typeof e=="object"}function ou(e){return typeof e=="string"||typeof e=="symbol"}let Ke=(function(e){return e[e.MATCHER_NOT_FOUND=1]="MATCHER_NOT_FOUND",e[e.NAVIGATION_GUARD_REDIRECT=2]="NAVIGATION_GUARD_REDIRECT",e[e.NAVIGATION_ABORTED=4]="NAVIGATION_ABORTED",e[e.NAVIGATION_CANCELLED=8]="NAVIGATION_CANCELLED",e[e.NAVIGATION_DUPLICATED=16]="NAVIGATION_DUPLICATED",e})({});const au=Symbol("");Ke.MATCHER_NOT_FOUND+"",Ke.NAVIGATION_GUARD_REDIRECT+"",Ke.NAVIGATION_ABORTED+"",Ke.NAVIGATION_CANCELLED+"",Ke.NAVIGATION_DUPLICATED+"";function Go(e,n){return Ve(new Error,{type:e,[au]:!0},n)}function Wn(e,n){return e instanceof Error&&au in e&&(n==null||!!(e.type&n))}const Zf=["params","query","hash"];function ev(e){if(typeof e=="string")return e;if(e.path!=null)return e.path;const n={};for(const o of Zf)o in e&&(n[o]=e[o]);return JSON.stringify(n,null,2)}function nv(e){const n={};if(e===""||e==="?")return n;const o=(e[0]==="?"?e.slice(1):e).split("&");for(let a=0;a<o.length;++a){const r=o[a].replace(Qc," "),t=r.indexOf("="),s=wa(t<0?r:r.slice(0,t)),l=t<0?null:wa(r.slice(t+1));if(s in n){let c=n[s];Ln(c)||(c=n[s]=[c]),c.push(l)}else n[s]=l}return n}function Us(e){let n="";for(let o in e){const a=e[o];if(o=Df(o),a==null){a!==void 0&&(n+=(n.length?"&":"")+o);continue}(Ln(a)?a.map(r=>r&&zt(r)):[a&&zt(a)]).forEach(r=>{r!==void 0&&(n+=(n.length?"&":"")+o,r!=null&&(n+="="+r))})}return n}function ov(e){const n={};for(const o in e){const a=e[o];a!==void 0&&(n[o]=Ln(a)?a.map(r=>r==null?null:""+r):a==null?a:""+a)}return n}const av=Symbol(""),Ks=Symbol(""),Cr=Symbol(""),hi=Symbol(""),Kt=Symbol("");function ra(){let e=[];function n(a){return e.push(a),()=>{const r=e.indexOf(a);r>-1&&e.splice(r,1)}}function o(){e=[]}return{add:n,list:()=>e.slice(),reset:o}}function po(e,n,o,a,r,t=s=>s()){const s=a&&(a.enterCallbacks[r]=a.enterCallbacks[r]||[]);return()=>new Promise((l,c)=>{const d=f=>{f===!1?c(Go(Ke.NAVIGATION_ABORTED,{from:o,to:n})):f instanceof Error?c(f):Xf(f)?c(Go(Ke.NAVIGATION_GUARD_REDIRECT,{from:n,to:f})):(s&&a.enterCallbacks[r]===s&&typeof f=="function"&&s.push(f),l())},u=t(()=>e.call(a&&a.instances[r],n,o,d));let m=Promise.resolve(u);e.length<3&&(m=m.then(d)),m.catch(f=>c(f))})}function yt(e,n,o,a,r=t=>t()){const t=[];for(const s of e)for(const l in s.components){let c=s.components[l];if(!(n!=="beforeRouteEnter"&&!s.instances[l]))if(Wc(c)){const d=(c.__vccOpts||c)[n];d&&t.push(po(d,o,a,s,l,r))}else{let d=c();t.push(()=>d.then(u=>{if(!u)throw new Error(`Couldn't resolve component "${l}" at "${s.path}"`);const m=Tf(u)?u.default:u;s.mods[l]=u,s.components[l]=m;const f=(m.__vccOpts||m)[n];return f&&po(f,o,a,s,l,r)()}))}}return t}function rv(e,n){const o=[],a=[],r=[],t=Math.max(n.matched.length,e.matched.length);for(let s=0;s<t;s++){const l=n.matched[s];l&&(e.matched.find(d=>Ko(d,l))?a.push(l):o.push(l));const c=e.matched[s];c&&(n.matched.find(d=>Ko(d,c))||r.push(c))}return[o,a,r]}let tv=()=>location.protocol+"//"+location.host;function ru(e,n){const{pathname:o,search:a,hash:r}=n,t=e.indexOf("#");if(t>-1){let s=r.includes(e.slice(t))?e.slice(t).length:1,l=r.slice(s);return l[0]!=="/"&&(l="/"+l),Fs(l,"")}return Fs(o,e)+a+r}function iv(e,n,o,a){let r=[],t=[],s=null;const l=({state:f})=>{const g=ru(e,location),S=o.value,x=n.value;let C=0;if(f){if(o.value=g,n.value=f,s&&s===S){s=null;return}C=x?f.position-x.position:0}else a(g);r.forEach(T=>{T(o.value,S,{delta:C,type:Ht.pop,direction:C?C>0?_t.forward:_t.back:_t.unknown})})};function c(){s=o.value}function d(f){r.push(f);const g=()=>{const S=r.indexOf(f);S>-1&&r.splice(S,1)};return t.push(g),g}function u(){if(document.visibilityState==="hidden"){const{history:f}=window;if(!f.state)return;f.replaceState(Ve({},f.state,{scroll:Er()}),"")}}function m(){for(const f of t)f();t=[],window.removeEventListener("popstate",l),window.removeEventListener("pagehide",u),document.removeEventListener("visibilitychange",u)}return window.addEventListener("popstate",l),window.addEventListener("pagehide",u),document.addEventListener("visibilitychange",u),{pauseListeners:c,listen:d,destroy:m}}function Gs(e,n,o,a=!1,r=!1){return{back:e,current:n,forward:o,replaced:a,position:window.history.length,scroll:r?Er():null}}function sv(e){const{history:n,location:o}=window,a={value:ru(e,o)},r={value:n.state};r.value||t(a.value,{back:null,current:a.value,forward:null,position:n.length-1,replaced:!0,scroll:null},!0);function t(c,d,u){const m=e.indexOf("#"),f=m>-1?(o.host&&document.querySelector("base")?e:e.slice(m))+c:tv()+e+c;try{n[u?"replaceState":"pushState"](d,"",f),r.value=d}catch(g){console.error(g),o[u?"replace":"assign"](f)}}function s(c,d){t(c,Ve({},n.state,Gs(r.value.back,c,r.value.forward,!0),d,{position:r.value.position}),!0),a.value=c}function l(c,d){const u=Ve({},r.value,n.state,{forward:c,scroll:Er()});t(u.current,u,!0),t(c,Ve({},Gs(a.value,c,null),{position:u.position+1},d),!1),a.value=c}return{location:a,state:r,push:l,replace:s}}function lv(e){e=Uf(e);const n=sv(e),o=iv(e,n.state,n.location,n.replace);function a(t,s=!0){s||o.pauseListeners(),history.go(t)}const r=Ve({location:"",base:e,go:a,createHref:Gf.bind(null,e)},n,o);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>n.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>n.state.value}),r}let So=(function(e){return e[e.Static=0]="Static",e[e.Param=1]="Param",e[e.Group=2]="Group",e})({});var Xe=(function(e){return e[e.Static=0]="Static",e[e.Param=1]="Param",e[e.ParamRegExp=2]="ParamRegExp",e[e.ParamRegExpEnd=3]="ParamRegExpEnd",e[e.EscapeNext=4]="EscapeNext",e})(Xe||{});const cv={type:So.Static,value:""},uv=/[a-zA-Z0-9_]/;function dv(e){if(!e)return[[]];if(e==="/")return[[cv]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function n(g){throw new Error(`ERR (${o})/"${d}": ${g}`)}let o=Xe.Static,a=o;const r=[];let t;function s(){t&&r.push(t),t=[]}let l=0,c,d="",u="";function m(){d&&(o===Xe.Static?t.push({type:So.Static,value:d}):o===Xe.Param||o===Xe.ParamRegExp||o===Xe.ParamRegExpEnd?(t.length>1&&(c==="*"||c==="+")&&n(`A repeatable param (${d}) must be alone in its segment. eg: '/:ids+.`),t.push({type:So.Param,value:d,regexp:u,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):n("Invalid state to consume buffer"),d="")}function f(){d+=c}for(;l<e.length;){if(c=e[l++],c==="\\"&&o!==Xe.ParamRegExp){a=o,o=Xe.EscapeNext;continue}switch(o){case Xe.Static:c==="/"?(d&&m(),s()):c===":"?(m(),o=Xe.Param):f();break;case Xe.EscapeNext:f(),o=a;break;case Xe.Param:c==="("?o=Xe.ParamRegExp:uv.test(c)?f():(m(),o=Xe.Static,c!=="*"&&c!=="?"&&c!=="+"&&l--);break;case Xe.ParamRegExp:c===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+c:o=Xe.ParamRegExpEnd:u+=c;break;case Xe.ParamRegExpEnd:m(),o=Xe.Static,c!=="*"&&c!=="?"&&c!=="+"&&l--,u="";break;default:n("Unknown state");break}}return o===Xe.ParamRegExp&&n(`Unfinished custom RegExp for param "${d}"`),m(),s(),r}const Ys="[^/]+?",mv={sensitive:!1,strict:!1,start:!0,end:!0};var gn=(function(e){return e[e._multiplier=10]="_multiplier",e[e.Root=90]="Root",e[e.Segment=40]="Segment",e[e.SubSegment=30]="SubSegment",e[e.Static=40]="Static",e[e.Dynamic=20]="Dynamic",e[e.BonusCustomRegExp=10]="BonusCustomRegExp",e[e.BonusWildcard=-50]="BonusWildcard",e[e.BonusRepeatable=-20]="BonusRepeatable",e[e.BonusOptional=-8]="BonusOptional",e[e.BonusStrict=.7000000000000001]="BonusStrict",e[e.BonusCaseSensitive=.25]="BonusCaseSensitive",e})(gn||{});const pv=/[.+*?^${}()[\]/\\]/g;function fv(e,n){const o=Ve({},mv,n),a=[];let r=o.start?"^":"";const t=[];for(const d of e){const u=d.length?[]:[gn.Root];o.strict&&!d.length&&(r+="/");for(let m=0;m<d.length;m++){const f=d[m];let g=gn.Segment+(o.sensitive?gn.BonusCaseSensitive:0);if(f.type===So.Static)m||(r+="/"),r+=f.value.replace(pv,"\\$&"),g+=gn.Static;else if(f.type===So.Param){const{value:S,repeatable:x,optional:C,regexp:T}=f;t.push({name:S,repeatable:x,optional:C});const y=T||Ys;if(y!==Ys){g+=gn.BonusCustomRegExp;try{`${y}`}catch(F){throw new Error(`Invalid custom RegExp for param "${S}" (${y}): `+F.message)}}let k=x?`((?:${y})(?:/(?:${y}))*)`:`(${y})`;m||(k=C&&d.length<2?`(?:/${k})`:"/"+k),C&&(k+="?"),r+=k,g+=gn.Dynamic,C&&(g+=gn.BonusOptional),x&&(g+=gn.BonusRepeatable),y===".*"&&(g+=gn.BonusWildcard)}u.push(g)}a.push(u)}if(o.strict&&o.end){const d=a.length-1;a[d][a[d].length-1]+=gn.BonusStrict}o.strict||(r+="/?"),o.end?r+="$":o.strict&&!r.endsWith("/")&&(r+="(?:/|$)");const s=new RegExp(r,o.sensitive?"":"i");function l(d){const u=d.match(s),m={};if(!u)return null;for(let f=1;f<u.length;f++){const g=u[f]||"",S=t[f-1];m[S.name]=g&&S.repeatable?g.split("/"):g}return m}function c(d){let u="",m=!1;for(const f of e){(!m||!u.endsWith("/"))&&(u+="/"),m=!1;for(const g of f)if(g.type===So.Static)u+=g.value;else if(g.type===So.Param){const{value:S,repeatable:x,optional:C}=g,T=S in d?d[S]:"";if(Ln(T)&&!x)throw new Error(`Provided param "${S}" is an array but it is not repeatable (* or + modifiers)`);const y=Ln(T)?T.join("/"):T;if(!y)if(C)f.length<2&&(u.endsWith("/")?u=u.slice(0,-1):m=!0);else throw new Error(`Missing required param "${S}"`);u+=y}}return u||"/"}return{re:s,score:a,keys:t,parse:l,stringify:c}}function vv(e,n){let o=0;for(;o<e.length&&o<n.length;){const a=n[o]-e[o];if(a)return a;o++}return e.length<n.length?e.length===1&&e[0]===gn.Static+gn.Segment?-1:1:e.length>n.length?n.length===1&&n[0]===gn.Static+gn.Segment?1:-1:0}function tu(e,n){let o=0;const a=e.score,r=n.score;for(;o<a.length&&o<r.length;){const t=vv(a[o],r[o]);if(t)return t;o++}if(Math.abs(r.length-a.length)===1){if(Ws(a))return 1;if(Ws(r))return-1}return r.length-a.length}function Ws(e){const n=e[e.length-1];return e.length>0&&n[n.length-1]<0}const hv={strict:!1,end:!0,sensitive:!1};function gv(e,n,o){const a=fv(dv(e.path),o),r=Ve(a,{record:e,parent:n,children:[],alias:[]});return n&&!r.record.aliasOf==!n.record.aliasOf&&n.children.push(r),r}function bv(e,n){const o=[],a=new Map;n=Ms(hv,n);function r(m){return a.get(m)}function t(m,f,g){const S=!g,x=Qs(m);x.aliasOf=g&&g.record;const C=Ms(n,m),T=[x];if("alias"in m){const F=typeof m.alias=="string"?[m.alias]:m.alias;for(const ve of F)T.push(Qs(Ve({},x,{components:g?g.record.components:x.components,path:ve,aliasOf:g?g.record:x})))}let y,k;for(const F of T){const{path:ve}=F;if(f&&ve[0]!=="/"){const ce=f.record.path,oe=ce[ce.length-1]==="/"?"":"/";F.path=f.record.path+(ve&&oe+ve)}if(y=gv(F,f,C),g?g.alias.push(y):(k=k||y,k!==y&&k.alias.push(y),S&&m.name&&!Xs(y)&&s(m.name)),iu(y)&&c(y),x.children){const ce=x.children;for(let oe=0;oe<ce.length;oe++)t(ce[oe],y,g&&g.children[oe])}g=g||y}return k?()=>{s(k)}:va}function s(m){if(ou(m)){const f=a.get(m);f&&(a.delete(m),o.splice(o.indexOf(f),1),f.children.forEach(s),f.alias.forEach(s))}else{const f=o.indexOf(m);f>-1&&(o.splice(f,1),m.record.name&&a.delete(m.record.name),m.children.forEach(s),m.alias.forEach(s))}}function l(){return o}function c(m){const f=Av(m,o);o.splice(f,0,m),m.record.name&&!Xs(m)&&a.set(m.record.name,m)}function d(m,f){let g,S={},x,C;if("name"in m&&m.name){if(g=a.get(m.name),!g)throw Go(Ke.MATCHER_NOT_FOUND,{location:m});C=g.record.name,S=Ve(Js(f.params,g.keys.filter(k=>!k.optional).concat(g.parent?g.parent.keys.filter(k=>k.optional):[]).map(k=>k.name)),m.params&&Js(m.params,g.keys.map(k=>k.name))),x=g.stringify(S)}else if(m.path!=null)x=m.path,g=o.find(k=>k.re.test(x)),g&&(S=g.parse(x),C=g.record.name);else{if(g=f.name?a.get(f.name):o.find(k=>k.re.test(f.path)),!g)throw Go(Ke.MATCHER_NOT_FOUND,{location:m,currentLocation:f});C=g.record.name,S=Ve({},f.params,m.params),x=g.stringify(S)}const T=[];let y=g;for(;y;)T.unshift(y.record),y=y.parent;return{name:C,path:x,params:S,matched:T,meta:yv(T)}}e.forEach(m=>t(m));function u(){o.length=0,a.clear()}return{addRoute:t,resolve:d,removeRoute:s,clearRoutes:u,getRoutes:l,getRecordMatcher:r}}function Js(e,n){const o={};for(const a of n)a in e&&(o[a]=e[a]);return o}function Qs(e){const n={path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:e.aliasOf,beforeEnter:e.beforeEnter,props:_v(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}};return Object.defineProperty(n,"mods",{value:{}}),n}function _v(e){const n={},o=e.props||!1;if("component"in e)n.default=o;else for(const a in e.components)n[a]=typeof o=="object"?o[a]:o;return n}function Xs(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function yv(e){return e.reduce((n,o)=>Ve(n,o.meta),{})}function Av(e,n){let o=0,a=n.length;for(;o!==a;){const t=o+a>>1;tu(e,n[t])<0?a=t:o=t+1}const r=Nv(e);return r&&(a=n.lastIndexOf(r,a-1)),a}function Nv(e){let n=e;for(;n=n.parent;)if(iu(n)&&tu(e,n)===0)return n}function iu({record:e}){return!!(e.name||e.components&&Object.keys(e.components).length||e.redirect)}function Zs(e){const n=qe(Cr),o=qe(hi),a=ke(()=>{const c=Q(e.to);return n.resolve(c)}),r=ke(()=>{const{matched:c}=a.value,{length:d}=c,u=c[d-1],m=o.matched;if(!u||!m.length)return-1;const f=m.findIndex(Ko.bind(null,u));if(f>-1)return f;const g=el(c[d-2]);return d>1&&el(u)===g&&m[m.length-1].path!==g?m.findIndex(Ko.bind(null,c[d-2])):f}),t=ke(()=>r.value>-1&&Rv(o.params,a.value.params)),s=ke(()=>r.value>-1&&r.value===o.matched.length-1&&nu(o.params,a.value.params));function l(c={}){if(Tv(c)){const d=n[Q(e.replace)?"replace":"push"](Q(e.to)).catch(va);return e.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>d),d}return Promise.resolve()}return{route:a,href:ke(()=>a.value.href),isActive:t,isExactActive:s,navigate:l}}function xv(e){return e.length===1?e[0]:e}const Bv=Zl({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:Zs,setup(e,{slots:n}){const o=ka(Zs(e)),{options:a}=qe(Cr),r=ke(()=>({[nl(e.activeClass,a.linkActiveClass,"router-link-active")]:o.isActive,[nl(e.exactActiveClass,a.linkExactActiveClass,"router-link-exact-active")]:o.isExactActive}));return()=>{const t=n.default&&xv(n.default(o));return e.custom?t:zo("a",{"aria-current":o.isExactActive?e.ariaCurrentValue:null,href:o.href,onClick:o.navigate,class:r.value},t)}}}),Pe=Bv;function Tv(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const n=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(n))return}return e.preventDefault&&e.preventDefault(),!0}}function Rv(e,n){for(const o in n){const a=n[o],r=e[o];if(typeof a=="string"){if(a!==r)return!1}else if(!Ln(r)||r.length!==a.length||a.some((t,s)=>t.valueOf()!==r[s].valueOf()))return!1}return!0}function el(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const nl=(e,n,o)=>e??n??o,Sv=Zl({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:n,slots:o}){const a=qe(Kt),r=ke(()=>e.route||a.value),t=qe(Ks,0),s=ke(()=>{let d=Q(t);const{matched:u}=r.value;let m;for(;(m=u[d])&&!m.components;)d++;return d}),l=ke(()=>r.value.matched[s.value]);da(Ks,ke(()=>s.value+1)),da(av,l),da(Kt,r);const c=de();return vo(()=>[c.value,l.value,e.name],([d,u,m],[f,g,S])=>{u&&(u.instances[m]=d,g&&g!==u&&d&&d===f&&(u.leaveGuards.size||(u.leaveGuards=g.leaveGuards),u.updateGuards.size||(u.updateGuards=g.updateGuards))),d&&u&&(!g||!Ko(u,g)||!f)&&(u.enterCallbacks[m]||[]).forEach(x=>x(d))},{flush:"post"}),()=>{const d=r.value,u=e.name,m=l.value,f=m&&m.components[u];if(!f)return ol(o.default,{Component:f,route:d});const g=m.props[u],S=g?g===!0?d.params:typeof g=="function"?g(d):g:null,C=zo(f,Ve({},S,n,{onVnodeUnmounted:T=>{T.component.isUnmounted&&(m.instances[u]=null)},ref:c}));return ol(o.default,{Component:C,route:d})||C}}});function ol(e,n){if(!e)return null;const o=e(n);return o.length===1?o[0]:o}const su=Sv;function wv(e){const n=bv(e.routes,e),o=e.parseQuery||nv,a=e.stringifyQuery||Us,r=e.history,t=ra(),s=ra(),l=ra(),c=Ku(co);let d=co;jo&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=gt.bind(null,V=>""+V),m=gt.bind(null,Lf),f=gt.bind(null,wa);function g(V,ue){let ee,he;return ou(V)?(ee=n.getRecordMatcher(V),he=ue):he=V,n.addRoute(he,ee)}function S(V){const ue=n.getRecordMatcher(V);ue&&n.removeRoute(ue)}function x(){return n.getRoutes().map(V=>V.record)}function C(V){return!!n.getRecordMatcher(V)}function T(V,ue){if(ue=Ve({},ue||c.value),typeof V=="string"){const A=bt(o,V,ue.path),$=n.resolve({path:A.path},ue),U=r.createHref(A.fullPath);return Ve(A,$,{params:f($.params),hash:wa(A.hash),redirectedFrom:void 0,href:U})}let ee;if(V.path!=null)ee=Ve({},V,{path:bt(o,V.path,ue.path).path});else{const A=Ve({},V.params);for(const $ in A)A[$]==null&&delete A[$];ee=Ve({},V,{params:m(A)}),ue.params=m(ue.params)}const he=n.resolve(ee,ue),we=V.hash||"";he.params=u(f(he.params));const h=Mf(a,Ve({},V,{hash:jf(we),path:he.path})),b=r.createHref(h);return Ve({fullPath:h,hash:we,query:a===Us?ov(V.query):V.query||{}},he,{redirectedFrom:void 0,href:b})}function y(V){return typeof V=="string"?bt(o,V,c.value.path):Ve({},V)}function k(V,ue){if(d!==V)return Go(Ke.NAVIGATION_CANCELLED,{from:ue,to:V})}function F(V){return oe(V)}function ve(V){return F(Ve(y(V),{replace:!0}))}function ce(V,ue){const ee=V.matched[V.matched.length-1];if(ee&&ee.redirect){const{redirect:he}=ee;let we=typeof he=="function"?he(V,ue):he;return typeof we=="string"&&(we=we.includes("?")||we.includes("#")?we=y(we):{path:we},we.params={}),Ve({query:V.query,hash:V.hash,params:we.path!=null?{}:V.params},we)}}function oe(V,ue){const ee=d=T(V),he=c.value,we=V.state,h=V.force,b=V.replace===!0,A=ce(ee,he);if(A)return oe(Ve(y(A),{state:typeof A=="object"?Ve({},we,A.state):we,force:h,replace:b}),ue||ee);const $=ee;$.redirectedFrom=ue;let U;return!h&&Ff(a,he,ee)&&(U=Go(Ke.NAVIGATION_DUPLICATED,{to:$,from:he}),Ye(he,he,!0,!1)),(U?Promise.resolve(U):J($,he)).catch(O=>Wn(O)?Wn(O,Ke.NAVIGATION_GUARD_REDIRECT)?O:Ue(O):Be(O,$,he)).then(O=>{if(O){if(Wn(O,Ke.NAVIGATION_GUARD_REDIRECT))return oe(Ve({replace:b},y(O.to),{state:typeof O.to=="object"?Ve({},we,O.to.state):we,force:h}),ue||$)}else O=I($,he,!0,b,we);return te($,he,O),O})}function G(V,ue){const ee=k(V,ue);return ee?Promise.reject(ee):Promise.resolve()}function R(V){const ue=In.values().next().value;return ue&&typeof ue.runWithContext=="function"?ue.runWithContext(V):V()}function J(V,ue){let ee;const[he,we,h]=rv(V,ue);ee=yt(he.reverse(),"beforeRouteLeave",V,ue);for(const A of he)A.leaveGuards.forEach($=>{ee.push(po($,V,ue))});const b=G.bind(null,V,ue);return ee.push(b),Je(ee).then(()=>{ee=[];for(const A of t.list())ee.push(po(A,V,ue));return ee.push(b),Je(ee)}).then(()=>{ee=yt(we,"beforeRouteUpdate",V,ue);for(const A of we)A.updateGuards.forEach($=>{ee.push(po($,V,ue))});return ee.push(b),Je(ee)}).then(()=>{ee=[];for(const A of h)if(A.beforeEnter)if(Ln(A.beforeEnter))for(const $ of A.beforeEnter)ee.push(po($,V,ue));else ee.push(po(A.beforeEnter,V,ue));return ee.push(b),Je(ee)}).then(()=>(V.matched.forEach(A=>A.enterCallbacks={}),ee=yt(h,"beforeRouteEnter",V,ue,R),ee.push(b),Je(ee))).then(()=>{ee=[];for(const A of s.list())ee.push(po(A,V,ue));return ee.push(b),Je(ee)}).catch(A=>Wn(A,Ke.NAVIGATION_CANCELLED)?A:Promise.reject(A))}function te(V,ue,ee){l.list().forEach(he=>R(()=>he(V,ue,ee)))}function I(V,ue,ee,he,we){const h=k(V,ue);if(h)return h;const b=ue===co,A=jo?history.state:{};ee&&(he||b?r.replace(V.fullPath,Ve({scroll:b&&A&&A.scroll},we)):r.push(V.fullPath,we)),c.value=V,Ye(V,ue,ee,b),Ue()}let q;function j(){q||(q=r.listen((V,ue,ee)=>{if(!We.listening)return;const he=T(V),we=ce(he,We.currentRoute.value);if(we){oe(Ve(we,{replace:!0,force:!0}),he).catch(va);return}d=he;const h=c.value;jo&&Jf(Hs(h.fullPath,ee.delta),Er()),J(he,h).catch(b=>Wn(b,Ke.NAVIGATION_ABORTED|Ke.NAVIGATION_CANCELLED)?b:Wn(b,Ke.NAVIGATION_GUARD_REDIRECT)?(oe(Ve(y(b.to),{force:!0}),he).then(A=>{Wn(A,Ke.NAVIGATION_ABORTED|Ke.NAVIGATION_DUPLICATED)&&!ee.delta&&ee.type===Ht.pop&&r.go(-1,!1)}).catch(va),Promise.reject()):(ee.delta&&r.go(-ee.delta,!1),Be(b,he,h))).then(b=>{b=b||I(he,h,!1),b&&(ee.delta&&!Wn(b,Ke.NAVIGATION_CANCELLED)?r.go(-ee.delta,!1):ee.type===Ht.pop&&Wn(b,Ke.NAVIGATION_ABORTED|Ke.NAVIGATION_DUPLICATED)&&r.go(-1,!1)),te(he,h,b)}).catch(va)}))}let re=ra(),L=ra(),Se;function Be(V,ue,ee){Ue(V);const he=L.list();return he.length?he.forEach(we=>we(V,ue,ee)):console.error(V),Promise.reject(V)}function on(){return Se&&c.value!==co?Promise.resolve():new Promise((V,ue)=>{re.add([V,ue])})}function Ue(V){return Se||(Se=!V,j(),re.list().forEach(([ue,ee])=>V?ee(V):ue()),re.reset()),V}function Ye(V,ue,ee,he){const{scrollBehavior:we}=e;if(!jo||!we)return Promise.resolve();const h=!ee&&Qf(Hs(V.fullPath,0))||(he||!ee)&&history.state&&history.state.scroll||null;return mn().then(()=>we(V,ue,h)).then(b=>b&&Wf(b)).catch(b=>Be(b,V,ue))}const Qe=V=>r.go(V);let Nn;const In=new Set,We={currentRoute:c,listening:!0,addRoute:g,removeRoute:S,clearRoutes:n.clearRoutes,hasRoute:C,getRoutes:x,resolve:T,options:e,push:F,replace:ve,go:Qe,back:()=>Qe(-1),forward:()=>Qe(1),beforeEach:t.add,beforeResolve:s.add,afterEach:l.add,onError:L.add,isReady:on,install(V){V.component("RouterLink",Pe),V.component("RouterView",su),V.config.globalProperties.$router=We,Object.defineProperty(V.config.globalProperties,"$route",{enumerable:!0,get:()=>Q(c)}),jo&&!Nn&&c.value===co&&(Nn=!0,F(r.location).catch(he=>{}));const ue={};for(const he in co)Object.defineProperty(ue,he,{get:()=>c.value[he],enumerable:!0});V.provide(Cr,We),V.provide(hi,Vl(ue)),V.provide(Kt,c);const ee=V.unmount;In.add(V),V.unmount=function(){In.delete(V),In.size<1&&(d=co,q&&q(),q=null,c.value=co,Nn=!1,Se=!1),ee()}}};function Je(V){return V.reduce((ue,ee)=>ue.then(()=>R(ee)),Promise.resolve())}return We}function kr(){return qe(Cr)}function gi(e){return qe(hi)}const Ev="/Extensao-26.2/icon-512.png";const xo={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};const al=(...e)=>e.filter((n,o,a)=>!!n&&n.trim()!==""&&a.indexOf(n)===o).join(" ").trim();function At(e){return e!=null}function Cv(e,n={}){const o=n.attributeNames??{},a=f=>o[f]??f,r=e.size??e.width??xo.width,t=e.size??e.height??xo.height,s=e.aliases?.filter(f=>typeof f=="string"&&f.trim()!=="").map(f=>`lucide-${f}`)??[],l=[...e.name?[`lucide-${e.name}`]:[],...s],c=n.className?.split(" ").filter(Boolean)??[],d=n.includeDefaultClasses===!1?al(...c):al("lucide",...l,...c),u=n.absoluteStrokeWidth?Number(n.strokeWidth??xo["stroke-width"])*Number(e.size??e.width??xo.width)/Number(n.size??n.width??xo.width):n.strokeWidth??xo["stroke-width"];return["svg",{...Object.entries(xo).reduce((f,[g,S])=>(f[a(g)]=S,f),{}),..."color"in n&&n.color&&{[a("stroke")]:n.color},..."size"in n&&At(n.size)&&{[a("width")]:n.size,[a("height")]:n.size},..."width"in n&&At(n.width)&&{[a("width")]:n.width},..."height"in n&&At(n.height)&&{[a("height")]:n.height},[a("stroke-width")]:u,...d&&{[a("class")]:d},[a("viewBox")]:`0 0 ${r} ${t}`,...n.hasA11yProp===!1?{[a("aria-hidden")]:"true"}:{},..."attributes"in n&&n.attributes},e.node.map(f=>{const[g,S,x]=f,C=n.nonScalingStroke?{[a("vector-effect")]:"non-scaling-stroke",...S}:S;return x?[g,C,x]:[g,C]})]}const kv=e=>{for(const n in e)if(n.startsWith("aria-")||n==="role"||n==="title")return!0;return!1};const Ua=e=>e==="";const Iv=e=>e?.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();const Pv=Symbol("lucide-icons");function Ov(){return qe(Pv,{})}const jv=({name:e,iconNode:n,"icon-node":o,icon:a={name:Iv(e),node:n??o,size:24,aliases:[]},absoluteStrokeWidth:r,"absolute-stroke-width":t,nonScalingStroke:s,"non-scaling-stroke":l,strokeWidth:c,"stroke-width":d,size:u,width:m=u,height:f=u,color:g,...S},{slots:x})=>{const{size:C,color:T,strokeWidth:y=2,absoluteStrokeWidth:k=!1,nonScalingStroke:F=!1,class:ve=""}=Ov(),ce=Ua(r)||Ua(t)||r===!0||t===!0||k===!0,oe=Ua(s)||Ua(l)||s===!0||l===!0||F===!0;delete S.class;const G=x.default?.(),[,R,J=[]]=Cv(a,{color:g??T,width:m??u??C,height:f??u??C,strokeWidth:c??d??y,absoluteStrokeWidth:ce,nonScalingStroke:oe,className:ve,hasA11yProp:G!=null&&G.length>0||kv(S),attributes:S});return zo("svg",R,[...J.map(te=>zo(...te)),...G??[]])};function Ge(e,n=[]){const o=typeof e=="string"?{name:e,node:n}:e;return(a,{slots:r})=>zo(jv,{...a,icon:o},r.default?{default:r.default}:void 0)}const Dv={name:"arrow-right",size:24,node:[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]},Vv=Ge(Dv);const Lv={name:"book-open",size:24,node:[["path",{d:"M12 5v16",key:"1f6ucr"}],["path",{d:"M20.001 19A2 2 0 0022 17V5a2 2 0 00-1.999-2L16 3.002A5 5 0 0012 5a5 5 0 00-4-2H4a2 2 0 00-2 2v12a2 2 0 001.999 2H8a5 5 0 014 2 5 5 0 014-2z",key:"1fyvmf"}]]},rl=Ge(Lv);const $v={name:"box",size:24,node:[["path",{d:"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",key:"hh9hay"}],["path",{d:"m3.3 7 8.7 5 8.7-5",key:"g66t2b"}],["path",{d:"M12 22V12",key:"d0xqtd"}]]},Nt=Ge($v);const qv={name:"chevron-down",size:24,node:[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]},Mv=Ge(qv);const Fv={name:"chevron-right",size:24,node:[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]},cr=Ge(Fv);const zv={name:"chevron-left",size:24,node:[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]},ur=Ge(zv);const Hv={name:"circle-alert",size:24,node:[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]],aliases:["alert-circle"]},Uv=Ge(Hv);const Kv={name:"circle-check",size:24,node:[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m16 9-5.5 5.5L8 12",key:"xofnsj"}]],aliases:["check-circle-2"]},Gv=Ge(Kv);const Yv={name:"circle-dashed",size:24,node:[["path",{d:"M10.1 2.182a10 10 0 0 1 3.8 0",key:"5ilxe3"}],["path",{d:"M13.9 21.818a10 10 0 0 1-3.8 0",key:"11zvb9"}],["path",{d:"M17.609 3.721a10 10 0 0 1 2.69 2.7",key:"1iw5b2"}],["path",{d:"M2.182 13.9a10 10 0 0 1 0-3.8",key:"c0bmvh"}],["path",{d:"M20.279 17.609a10 10 0 0 1-2.7 2.69",key:"1ruxm7"}],["path",{d:"M21.818 10.1a10 10 0 0 1 0 3.8",key:"qkgqxc"}],["path",{d:"M3.721 6.391a10 10 0 0 1 2.7-2.69",key:"1mcia2"}],["path",{d:"M6.391 20.279a10 10 0 0 1-2.69-2.7",key:"1fvljs"}]]},Wv=Ge(Yv);const Jv={name:"circle-question-mark",size:24,node:[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",key:"1u773s"}],["path",{d:"M12 17h.01",key:"p32p05"}]],aliases:["help-circle","circle-help"]},bi=Ge(Jv);const Qv={name:"circle-x",size:24,node:[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]],aliases:["x-circle"]},Xv=Ge(Qv);const Zv={name:"clipboard-check",size:24,node:[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1",key:"tgr4d6"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",key:"116196"}],["path",{d:"m9 14 2 2 4-4",key:"df797q"}]]},dr=Ge(Zv);const e0={name:"ellipsis",size:24,node:[["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}],["circle",{cx:"19",cy:"12",r:"1",key:"1wjl8i"}],["circle",{cx:"5",cy:"12",r:"1",key:"1pcz8c"}]],aliases:["more-horizontal"]},n0=Ge(e0);const o0={name:"folder-kanban",size:24,node:[["path",{d:"M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z",key:"1fr9dc"}],["path",{d:"M8 10v4",key:"tgpxqk"}],["path",{d:"M12 10v2",key:"hh53o1"}],["path",{d:"M16 10v6",key:"1d6xys"}]]},Gt=Ge(o0);const a0={name:"folder-plus",size:24,node:[["path",{d:"M12 10v6",key:"1bos4e"}],["path",{d:"M9 13h6",key:"1uhe8q"}],["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",key:"1kt360"}]]},mr=Ge(a0);const r0={name:"folder",size:24,node:[["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",key:"1kt360"}]]},tl=Ge(r0);const t0={name:"house",size:24,node:[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"r6nss1"}]],aliases:["home"]},xt=Ge(t0);const i0={name:"pencil",size:24,node:[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}],["path",{d:"m15 5 4 4",key:"1mk7zo"}]]},Ir=Ge(i0);const s0={name:"plus",size:24,node:[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]},il=Ge(s0);const l0={name:"trash",size:24,node:[["path",{d:"M10 11v6",key:"nco0om"}],["path",{d:"M14 11v6",key:"outv1u"}],["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",key:"miytrc"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",key:"e791ji"}]],aliases:["trash-2"]},La=Ge(l0);const c0={name:"x",size:24,node:[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]},u0=Ge(c0);const d0={name:"zap",size:24,node:[["path",{d:"M15.914 4a1.5 1.5 0 00-2.474-1.561l-9 9A1.5 1.5 0 005.5 14h4.002a.5.5 0 01.471.666L8.086 20a1.5 1.5 0 002.475 1.56l9-9A1.5 1.5 0 0018.5 10h-3.997a.5.5 0 01-.472-.667z",key:"1v7up4"}]]},sl=Ge(d0),m0={class:"app-shell"},p0={class:"sidebar"},f0={key:0,class:"bottom-nav"},v0={class:"app-footer"},h0={class:"app-footer__legal"},g0="https://github.com/muriloHx/Extensao-26.2",b0={__name:"AppLayout",setup(e){const n=gi(),o=ke(()=>n.path.startsWith("/rules")?"rules":n.path.startsWith("/quick-evaluation")?"quick":"projects"),a=new Date().getFullYear(),r=de(null);let t=!1;async function s(){await mn(),r.value?.focus()}function l(){t=!0}return An(()=>{document.addEventListener("pointerdown",l,{passive:!0}),document.addEventListener("keydown",l)}),Jo(()=>{document.removeEventListener("pointerdown",l),document.removeEventListener("keydown",l)}),vo(()=>n.fullPath,()=>{t&&s()}),(c,d)=>(B(),P("div",m0,[v("a",{class:"skip-link",href:"#conteudo",onClick:ro(s,["prevent"])},"Pular para o conteúdo"),v("aside",p0,[H(Q(Pe),{class:"brand",to:"/projects"},{default:_e(()=>[...d[0]||(d[0]=[v("img",{class:"brand__mark",src:Ev,alt:"Acesso Verificador"},null,-1),v("span",null,[Te("Acesso"),v("br"),v("small",null,"Verificador")],-1)])]),_:1}),v("nav",null,[H(Q(Pe),{class:nn(["nav-item",{"is-active":o.value==="projects"}]),to:"/projects"},{default:_e(()=>[H(Q(tl),{size:20,"aria-hidden":"true"}),d[1]||(d[1]=v("span",null,"Projetos",-1))]),_:1},8,["class"]),H(Q(Pe),{class:nn(["nav-item",{"is-active":o.value==="quick"}]),to:"/quick-evaluation"},{default:_e(()=>[H(Q(sl),{size:20,"aria-hidden":"true"}),d[2]||(d[2]=v("span",null,"Avaliação rápida",-1))]),_:1},8,["class"]),H(Q(Pe),{class:nn(["nav-item",{"is-active":o.value==="rules"}]),to:"/rules"},{default:_e(()=>[H(Q(rl),{size:20,"aria-hidden":"true"}),d[3]||(d[3]=v("span",null,"Regras",-1))]),_:1},8,["class"])])]),v("main",{id:"conteudo",ref_key:"content",ref:r,class:"content",tabindex:"-1"},[vn(c.$slots,"default")],512),Q(n).meta.hideBottomNav?pe("",!0):(B(),P("nav",f0,[H(Q(Pe),{class:nn(["nav-item",{"is-active":o.value==="projects"}]),to:"/projects"},{default:_e(()=>[H(Q(tl),{size:20,"aria-hidden":"true"}),d[4]||(d[4]=v("span",null,"Projetos",-1))]),_:1},8,["class"]),H(Q(Pe),{class:nn(["nav-item",{"is-active":o.value==="quick"}]),to:"/quick-evaluation"},{default:_e(()=>[H(Q(sl),{size:20,"aria-hidden":"true"}),d[5]||(d[5]=v("span",null,"Avaliação rápida",-1))]),_:1},8,["class"]),H(Q(Pe),{class:nn(["nav-item",{"is-active":o.value==="rules"}]),to:"/rules"},{default:_e(()=>[H(Q(rl),{size:20,"aria-hidden":"true"}),d[6]||(d[6]=v("span",null,"Regras",-1))]),_:1},8,["class"])])),v("footer",v0,[v("p",h0,"© "+ne(Q(a))+" Acesso Verificador · Licença MIT",1),v("a",{class:"app-footer__link",href:g0,target:"_blank",rel:"noopener noreferrer"},"GitHub")])]))}},_0=["aria-describedby"],y0={id:"confirm-popup-title",class:"confirm-popup__title"},A0={key:0,id:"confirm-popup-message",class:"confirm-popup__message"},N0={key:1,id:"confirm-popup-details",class:"confirm-popup__details"},x0={class:"confirm-popup__actions"},B0={__name:"ConfirmPopup",setup(e,{expose:n}){const o=de(null),a=de(null),r=de(!1),t=de(""),s=de(""),l=de(""),c=de("Excluir"),d=ke(()=>s.value?"confirm-popup-message":l.value?"confirm-popup-details":null);let u=null,m=null,f=null,g="";function S(ce){if(ce.key==="Escape"){ce.preventDefault(),y();return}if(ce.key!=="Tab")return;const oe=[o.value,a.value].filter(Boolean);if(!oe.length)return;const G=oe[0],R=oe[oe.length-1],J=document.activeElement;if(!oe.includes(J)){ce.preventDefault(),(ce.shiftKey?R:G).focus();return}ce.shiftKey&&J===G?(ce.preventDefault(),R.focus()):!ce.shiftKey&&J===R&&(ce.preventDefault(),G.focus())}function x(){document.removeEventListener("keydown",S),document.body.style.overflow=g}function C(){document.getElementById("conteudo")?.focus?.()}function T(ce){mn(()=>{ce?.isConnected?ce.focus?.():C()})}function y({restoreFocus:ce=!0}={}){if(!r.value)return;r.value=!1,x(),u?.removeAttribute("aria-expanded"),u?.removeAttribute("aria-controls");const oe=m??u;u=null,m=null,f=null,ce&&T(oe)}async function k(ce){y({restoreFocus:!1}),u=ce.target??null,m=ce.returnFocusTo??null,t.value=ce.title??"Confirmar exclusão",s.value=ce.message??"",l.value=ce.details??"",c.value=ce.acceptLabel??"Excluir",f=ce.onAccept,r.value=!0,u?.setAttribute("aria-expanded","true"),u?.setAttribute("aria-controls","confirm-popup"),g=document.body.style.overflow,document.body.style.overflow="hidden",document.addEventListener("keydown",S),await mn(),o.value?.focus()}function F(ce,oe,G){return k({target:ce.currentTarget,message:oe,onAccept:G})}async function ve(){const ce=f,oe=m??u;y({restoreFocus:!1}),await ce?.(),T(oe)}return n({open:k,confirm:F}),Jo(()=>{document.removeEventListener("keydown",S),document.body.style.overflow=g,u?.removeAttribute("aria-expanded"),u?.removeAttribute("aria-controls")}),(ce,oe)=>(B(),Ce(Nr,{to:"body"},[r.value?(B(),P("div",{key:0,class:"confirm-backdrop",onClick:oe[1]||(oe[1]=ro(G=>y(),["self"]))},[v("section",{id:"confirm-popup",class:"confirm-popup",role:"alertdialog","aria-modal":"true","aria-labelledby":"confirm-popup-title","aria-describedby":d.value},[v("h2",y0,ne(t.value),1),s.value?(B(),P("p",A0,ne(s.value),1)):pe("",!0),l.value?(B(),P("p",N0,ne(l.value),1)):pe("",!0),v("div",x0,[v("button",{ref_key:"cancelButton",ref:o,class:"button button--ghost",type:"button",onClick:oe[0]||(oe[0]=G=>y())}," Cancelar ",512),v("button",{ref_key:"acceptButton",ref:a,class:"button button--danger",type:"button",onClick:ve},ne(c.value),513)])],8,_0)])):pe("",!0)]))}},T0={class:"welcome-popup",role:"dialog","aria-modal":"true","aria-labelledby":"welcome-title","aria-describedby":"welcome-description"},R0={class:"welcome-popup__content"},S0={class:"welcome-popup__steps"},lu={__name:"WelcomePopup",emits:["close"],setup(e,{emit:n}){const o=n,a=de(null),r=de(null);let t="",s=null;function l(d){const u=[a.value,r.value].filter(Boolean);if(!u.length)return;const m=u[0],f=u[u.length-1],g=document.activeElement;if(!u.includes(g)){d.preventDefault(),(d.shiftKey?f:m).focus();return}d.shiftKey&&g===m?(d.preventDefault(),f.focus()):!d.shiftKey&&g===f&&(d.preventDefault(),m.focus())}function c(d){if(d.key==="Escape"){d.preventDefault(),o("close");return}d.key==="Tab"&&l(d)}return An(async()=>{s=document.activeElement,document.addEventListener("keydown",c),t=document.body.style.overflow,document.body.style.overflow="hidden",await mn(),a.value?.focus()}),li(()=>{document.removeEventListener("keydown",c),document.body.style.overflow=t,s?.isConnected&&s.focus?.()}),(d,u)=>(B(),Ce(Nr,{to:"body"},[v("div",{class:"welcome-backdrop",onClick:u[2]||(u[2]=ro(m=>o("close"),["self"]))},[v("section",T0,[v("button",{ref_key:"closeButton",ref:a,class:"welcome-popup__close",type:"button","aria-label":"Fechar apresentação",onClick:u[0]||(u[0]=m=>o("close"))}," × ",512),u[8]||(u[8]=v("div",{class:"welcome-popup__hero"},[v("h1",{id:"welcome-title"},"Acessibilidade começa com atenção aos detalhes."),v("p",{id:"welcome-description"}," Este espaço ajuda você a organizar e apoiar avaliações de acessibilidade em locais e ambientes. ")],-1)),v("div",R0,[u[6]||(u[6]=v("h2",null,"Como funciona",-1)),v("div",S0,[v("article",null,[H(Q(Gt),{size:22,"aria-hidden":"true"}),u[3]||(u[3]=v("div",null,[v("h3",null,"Organize seus locais"),v("p",null,"Crie projetos, separe os ambientes e cadastre os elementos que deseja avaliar.")],-1))]),v("article",null,[H(Q(dr),{size:22,"aria-hidden":"true"}),u[4]||(u[4]=v("div",null,[v("h3",null,"Faça as verificações"),v("p",null,"Preencha checklists e consulte resultados por elemento, ambiente ou projeto.")],-1))])]),u[7]||(u[7]=v("p",{class:"welcome-popup__note"}," Os resultados são um apoio à avaliação e não substituem a análise de um profissional nem a consulta às normas aplicáveis. ",-1)),v("button",{ref_key:"actionButton",ref:r,class:"button welcome-popup__action",type:"button",onClick:u[1]||(u[1]=m=>o("close"))},[u[5]||(u[5]=Te(" Começar ",-1)),H(Q(Vv),{size:18,"aria-hidden":"true"})],512)])])])]))}};var w0=Object.defineProperty,E0=Object.defineProperties,C0=Object.getOwnPropertyDescriptors,ll=Object.getOwnPropertySymbols,k0=Object.prototype.hasOwnProperty,I0=Object.prototype.propertyIsEnumerable,cl=(e,n,o)=>n in e?w0(e,n,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[n]=o,Io=(e,n)=>{for(var o in n||(n={}))k0.call(n,o)&&cl(e,o,n[o]);if(ll)for(var o of ll(n))I0.call(n,o)&&cl(e,o,n[o]);return e},ul=(e,n)=>E0(e,C0(n));const P0={props:{autoscroll:{type:Boolean,default:!0}},watch:{typeAheadPointer(){this.autoscroll&&this.maybeAdjustScroll()},open(e){this.autoscroll&&e&&this.$nextTick(()=>this.maybeAdjustScroll())}},methods:{maybeAdjustScroll(){var e;const n=((e=this.$refs.dropdownMenu)==null?void 0:e.children[this.typeAheadPointer])||!1;if(n){const o=this.getDropdownViewport(),{top:a,bottom:r,height:t}=n.getBoundingClientRect();if(a<o.top)return this.$refs.dropdownMenu.scrollTop=n.offsetTop;if(r>o.bottom)return this.$refs.dropdownMenu.scrollTop=n.offsetTop-(o.height-t)}},getDropdownViewport(){return this.$refs.dropdownMenu?this.$refs.dropdownMenu.getBoundingClientRect():{height:0,top:0,bottom:0}}}},O0={data(){return{typeAheadPointer:-1}},watch:{filteredOptions(){for(let e=0;e<this.filteredOptions.length;e++)if(this.selectable(this.filteredOptions[e])){this.typeAheadPointer=e;break}},open(e){e&&this.typeAheadToLastSelected()},selectedValue(){this.open&&this.typeAheadToLastSelected()}},methods:{typeAheadUp(){for(let e=this.typeAheadPointer-1;e>=0;e--)if(this.selectable(this.filteredOptions[e])){this.typeAheadPointer=e;break}},typeAheadDown(){for(let e=this.typeAheadPointer+1;e<this.filteredOptions.length;e++)if(this.selectable(this.filteredOptions[e])){this.typeAheadPointer=e;break}},typeAheadSelect(){const e=this.filteredOptions[this.typeAheadPointer];e&&this.selectable(e)&&this.select(e)},typeAheadToLastSelected(){this.typeAheadPointer=this.selectedValue.length!==0?this.filteredOptions.indexOf(this.selectedValue[this.selectedValue.length-1]):-1}}},j0={props:{loading:{type:Boolean,default:!1}},data(){return{mutableLoading:!1}},watch:{search(){this.$emit("search",this.search,this.toggleLoading)},loading(e){this.mutableLoading=e}},methods:{toggleLoading(e=null){return e==null?this.mutableLoading=!this.mutableLoading:this.mutableLoading=e}}},_i=(e,n)=>{const o=e.__vccOpts||e;for(const[a,r]of n)o[a]=r;return o},D0={},V0={xmlns:"http://www.w3.org/2000/svg",width:"10",height:"10"},L0=v("path",{d:"M6.895455 5l2.842897-2.842898c.348864-.348863.348864-.914488 0-1.263636L9.106534.261648c-.348864-.348864-.914489-.348864-1.263636 0L5 3.104545 2.157102.261648c-.348863-.348864-.914488-.348864-1.263636 0L.261648.893466c-.348864.348864-.348864.914489 0 1.263636L3.104545 5 .261648 7.842898c-.348864.348863-.348864.914488 0 1.263636l.631818.631818c.348864.348864.914773.348864 1.263636 0L5 6.895455l2.842898 2.842897c.348863.348864.914772.348864 1.263636 0l.631818-.631818c.348864-.348864.348864-.914489 0-1.263636L6.895455 5z"},null,-1),$0=[L0];function q0(e,n){return B(),P("svg",V0,$0)}const M0=_i(D0,[["render",q0]]),F0={},z0={xmlns:"http://www.w3.org/2000/svg",width:"14",height:"10"},H0=v("path",{d:"M9.211364 7.59931l4.48338-4.867229c.407008-.441854.407008-1.158247 0-1.60046l-.73712-.80023c-.407008-.441854-1.066904-.441854-1.474243 0L7 5.198617 2.51662.33139c-.407008-.441853-1.066904-.441853-1.474243 0l-.737121.80023c-.407008.441854-.407008 1.158248 0 1.600461l4.48338 4.867228L7 10l2.211364-2.40069z"},null,-1),U0=[H0];function K0(e,n){return B(),P("svg",z0,U0)}const G0=_i(F0,[["render",K0]]),dl={Deselect:M0,OpenIndicator:G0},Y0={mounted(e,{instance:n}){if(n.appendToBody){const{height:o,top:a,left:r,width:t}=n.$refs.toggle.getBoundingClientRect();let s=window.scrollX||window.pageXOffset,l=window.scrollY||window.pageYOffset;e.unbindPosition=n.calculatePosition(e,n,{width:t+"px",left:s+r+"px",top:l+a+o+"px"}),document.body.appendChild(e)}},unmounted(e,{instance:n}){n.appendToBody&&(e.unbindPosition&&typeof e.unbindPosition=="function"&&e.unbindPosition(),e.parentNode&&e.parentNode.removeChild(e))}};function W0(e){const n={};return Object.keys(e).sort().forEach(o=>{n[o]=e[o]}),JSON.stringify(n)}let J0=0;function Q0(){return++J0}const X0={components:Io({},dl),directives:{appendToBody:Y0},mixins:[P0,O0,j0],compatConfig:{MODE:3},emits:["open","close","update:modelValue","search","search:compositionstart","search:compositionend","search:keydown","search:blur","search:focus","search:input","option:created","option:selecting","option:selected","option:deselecting","option:deselected"],props:{modelValue:{},components:{type:Object,default:()=>({})},options:{type:Array,default(){return[]}},disabled:{type:Boolean,default:!1},clearable:{type:Boolean,default:!0},deselectFromDropdown:{type:Boolean,default:!1},searchable:{type:Boolean,default:!0},multiple:{type:Boolean,default:!1},placeholder:{type:String,default:""},transition:{type:String,default:"vs__fade"},clearSearchOnSelect:{type:Boolean,default:!0},closeOnSelect:{type:Boolean,default:!0},label:{type:String,default:"label"},autocomplete:{type:String,default:"off"},reduce:{type:Function,default:e=>e},selectable:{type:Function,default:e=>!0},getOptionLabel:{type:Function,default(e){return typeof e=="object"?e.hasOwnProperty(this.label)?e[this.label]:console.warn(`[vue-select warn]: Label key "option.${this.label}" does not exist in options object ${JSON.stringify(e)}.
https://vue-select.org/api/props.html#getoptionlabel`):e}},getOptionKey:{type:Function,default(e){if(typeof e!="object")return e;try{return e.hasOwnProperty("id")?e.id:W0(e)}catch(n){return console.warn(`[vue-select warn]: Could not stringify this option to generate unique key. Please provide'getOptionKey' prop to return a unique key for each option.
https://vue-select.org/api/props.html#getoptionkey`,e,n)}}},onTab:{type:Function,default:function(){this.selectOnTab&&!this.isComposing&&this.typeAheadSelect()}},taggable:{type:Boolean,default:!1},tabindex:{type:Number,default:null},pushTags:{type:Boolean,default:!1},filterable:{type:Boolean,default:!0},filterBy:{type:Function,default(e,n,o){return(n||"").toLocaleLowerCase().indexOf(o.toLocaleLowerCase())>-1}},filter:{type:Function,default(e,n){return e.filter(o=>{let a=this.getOptionLabel(o);return typeof a=="number"&&(a=a.toString()),this.filterBy(o,a,n)})}},createOption:{type:Function,default(e){return typeof this.optionList[0]=="object"?{[this.label]:e}:e}},resetOnOptionsChange:{default:!1,validator:e=>["function","boolean"].includes(typeof e)},clearSearchOnBlur:{type:Function,default:function({clearSearchOnSelect:e,multiple:n}){return e&&!n}},noDrop:{type:Boolean,default:!1},inputId:{type:String},dir:{type:String,default:"auto"},selectOnTab:{type:Boolean,default:!1},selectOnKeyCodes:{type:Array,default:()=>[13]},searchInputQuerySelector:{type:String,default:"[type=search]"},mapKeydown:{type:Function,default:(e,n)=>e},appendToBody:{type:Boolean,default:!1},calculatePosition:{type:Function,default(e,n,{width:o,top:a,left:r}){e.style.top=a,e.style.left=r,e.style.width=o}},dropdownShouldOpen:{type:Function,default({noDrop:e,open:n,mutableLoading:o}){return e?!1:n&&!o}},uid:{type:[String,Number],default:()=>Q0()}},data(){return{search:"",open:!1,isComposing:!1,pushedTags:[],_value:[],deselectButtons:[]}},computed:{isReducingValues(){return this.$props.reduce!==this.$options.props.reduce.default},isTrackingValues(){return typeof this.modelValue>"u"||this.isReducingValues},selectedValue(){let e=this.modelValue;return this.isTrackingValues&&(e=this.$data._value),e!=null&&e!==""?[].concat(e):[]},optionList(){return this.options.concat(this.pushTags?this.pushedTags:[])},searchEl(){return this.$slots.search?this.$refs.selectedOptions.querySelector(this.searchInputQuerySelector):this.$refs.search},scope(){const e={search:this.search,loading:this.loading,searching:this.searching,filteredOptions:this.filteredOptions};return{search:{attributes:Io({disabled:this.disabled,placeholder:this.searchPlaceholder,tabindex:this.tabindex,readonly:!this.searchable,id:this.inputId,"aria-autocomplete":"list","aria-labelledby":`vs${this.uid}__combobox`,"aria-controls":`vs${this.uid}__listbox`,ref:"search",type:"search",autocomplete:this.autocomplete,value:this.search},this.dropdownOpen&&this.filteredOptions[this.typeAheadPointer]?{"aria-activedescendant":`vs${this.uid}__option-${this.typeAheadPointer}`}:{}),events:{compositionstart:()=>this.isComposing=!0,compositionend:()=>this.isComposing=!1,keydown:this.onSearchKeyDown,blur:this.onSearchBlur,focus:this.onSearchFocus,input:n=>this.search=n.target.value}},spinner:{loading:this.mutableLoading},noOptions:{search:this.search,loading:this.mutableLoading,searching:this.searching},openIndicator:{attributes:{ref:"openIndicator",role:"presentation",class:"vs__open-indicator"}},listHeader:e,listFooter:e,header:ul(Io({},e),{deselect:this.deselect}),footer:ul(Io({},e),{deselect:this.deselect})}},childComponents(){return Io(Io({},dl),this.components)},stateClasses(){return{"vs--open":this.dropdownOpen,"vs--single":!this.multiple,"vs--multiple":this.multiple,"vs--searching":this.searching&&!this.noDrop,"vs--searchable":this.searchable&&!this.noDrop,"vs--unsearchable":!this.searchable,"vs--loading":this.mutableLoading,"vs--disabled":this.disabled}},searching(){return!!this.search},dropdownOpen(){return this.dropdownShouldOpen(this)},searchPlaceholder(){return this.isValueEmpty&&this.placeholder?this.placeholder:void 0},filteredOptions(){const e=[].concat(this.optionList);if(!this.filterable&&!this.taggable)return e;const n=this.search.length?this.filter(e,this.search,this):e;if(this.taggable&&this.search.length){const o=this.createOption(this.search);this.optionExists(o)||n.unshift(o)}return n},isValueEmpty(){return this.selectedValue.length===0},showClearButton(){return!this.multiple&&this.clearable&&!this.open&&!this.isValueEmpty}},watch:{options(e,n){const o=()=>typeof this.resetOnOptionsChange=="function"?this.resetOnOptionsChange(e,n,this.selectedValue):this.resetOnOptionsChange;!this.taggable&&o()&&this.clearSelection(),this.modelValue&&this.isTrackingValues&&this.setInternalValueFromOptions(this.modelValue)},modelValue:{immediate:!0,handler(e){this.isTrackingValues&&this.setInternalValueFromOptions(e)}},multiple(){this.clearSelection()},open(e){this.$emit(e?"open":"close")}},created(){this.mutableLoading=this.loading},methods:{setInternalValueFromOptions(e){Array.isArray(e)?this.$data._value=e.map(n=>this.findOptionFromReducedValue(n)):this.$data._value=this.findOptionFromReducedValue(e)},select(e){this.$emit("option:selecting",e),this.isOptionSelected(e)?this.deselectFromDropdown&&(this.clearable||this.multiple&&this.selectedValue.length>1)&&this.deselect(e):(this.taggable&&!this.optionExists(e)&&(this.$emit("option:created",e),this.pushTag(e)),this.multiple&&(e=this.selectedValue.concat(e)),this.updateValue(e),this.$emit("option:selected",e)),this.onAfterSelect(e)},deselect(e){this.$emit("option:deselecting",e),this.updateValue(this.selectedValue.filter(n=>!this.optionComparator(n,e))),this.$emit("option:deselected",e)},clearSelection(){this.updateValue(this.multiple?[]:null)},onAfterSelect(e){this.closeOnSelect&&(this.open=!this.open,this.searchEl.blur()),this.clearSearchOnSelect&&(this.search="")},updateValue(e){typeof this.modelValue>"u"&&(this.$data._value=e),e!==null&&(Array.isArray(e)?e=e.map(n=>this.reduce(n)):e=this.reduce(e)),this.$emit("update:modelValue",e)},toggleDropdown(e){const n=e.target!==this.searchEl;n&&e.preventDefault();const o=[...this.deselectButtons||[],this.$refs.clearButton];if(this.searchEl===void 0||o.filter(Boolean).some(a=>a.contains(e.target)||a===e.target)){e.preventDefault();return}this.open&&n?this.searchEl.blur():this.disabled||(this.open=!0,this.searchEl.focus())},isOptionSelected(e){return this.selectedValue.some(n=>this.optionComparator(n,e))},isOptionDeselectable(e){return this.isOptionSelected(e)&&this.deselectFromDropdown},optionComparator(e,n){return this.getOptionKey(e)===this.getOptionKey(n)},findOptionFromReducedValue(e){const n=a=>JSON.stringify(this.reduce(a))===JSON.stringify(e),o=[...this.options,...this.pushedTags].filter(n);return o.length===1?o[0]:o.find(a=>this.optionComparator(a,this.$data._value))||e},closeSearchOptions(){this.open=!1,this.$emit("search:blur")},maybeDeleteValue(){if(!this.searchEl.value.length&&this.selectedValue&&this.selectedValue.length&&this.clearable){let e=null;this.multiple&&(e=[...this.selectedValue.slice(0,this.selectedValue.length-1)]),this.updateValue(e)}},optionExists(e){return this.optionList.some(n=>this.optionComparator(n,e))},normalizeOptionForSlot(e){return typeof e=="object"?e:{[this.label]:e}},pushTag(e){this.pushedTags.push(e)},onEscape(){this.search.length?this.search="":this.searchEl.blur()},onSearchBlur(){if(this.mousedown&&!this.searching)this.mousedown=!1;else{const{clearSearchOnSelect:e,multiple:n}=this;this.clearSearchOnBlur({clearSearchOnSelect:e,multiple:n})&&(this.search=""),this.closeSearchOptions();return}if(this.search.length===0&&this.options.length===0){this.closeSearchOptions();return}},onSearchFocus(){this.open=!0,this.$emit("search:focus")},onMousedown(){this.mousedown=!0},onMouseUp(){this.mousedown=!1},onSearchKeyDown(e){const n=r=>(r.preventDefault(),!this.isComposing&&this.typeAheadSelect()),o={8:r=>this.maybeDeleteValue(),9:r=>this.onTab(),27:r=>this.onEscape(),38:r=>(r.preventDefault(),this.typeAheadUp()),40:r=>(r.preventDefault(),this.typeAheadDown())};this.selectOnKeyCodes.forEach(r=>o[r]=n);const a=this.mapKeydown(o,this);if(typeof a[e.keyCode]=="function")return a[e.keyCode](e)}}},Z0=["dir"],eh=["id","aria-expanded","aria-owns"],nh={ref:"selectedOptions",class:"vs__selected-options"},oh=["disabled","title","aria-label","onClick"],ah={ref:"actions",class:"vs__actions"},rh=["disabled"],th={class:"vs__spinner"},ih=["id"],sh=["id","aria-selected","onMouseover","onClick"],lh={key:0,class:"vs__no-options"},ch=Te(" Sorry, no matching options. "),uh=["id"];function dh(e,n,o,a,r,t){const s=xd("append-to-body");return B(),P("div",{dir:o.dir,class:nn(["v-select",t.stateClasses])},[vn(e.$slots,"header",Pn(On(t.scope.header))),v("div",{id:`vs${o.uid}__combobox`,ref:"toggle",class:"vs__dropdown-toggle",role:"combobox","aria-expanded":t.dropdownOpen.toString(),"aria-owns":`vs${o.uid}__listbox`,"aria-label":"Search for option",onMousedown:n[1]||(n[1]=l=>t.toggleDropdown(l))},[v("div",nh,[(B(!0),P(Re,null,Ze(t.selectedValue,(l,c)=>vn(e.$slots,"selected-option-container",{option:t.normalizeOptionForSlot(l),deselect:t.deselect,multiple:o.multiple,disabled:o.disabled},()=>[(B(),P("span",{key:o.getOptionKey(l),class:"vs__selected"},[vn(e.$slots,"selected-option",Pn(On(t.normalizeOptionForSlot(l))),()=>[Te(ne(o.getOptionLabel(l)),1)]),o.multiple?(B(),P("button",{key:0,ref_for:!0,ref:d=>r.deselectButtons[c]=d,disabled:o.disabled,type:"button",class:"vs__deselect",title:`Deselect ${o.getOptionLabel(l)}`,"aria-label":`Deselect ${o.getOptionLabel(l)}`,onClick:d=>t.deselect(l)},[(B(),Ce(qo(t.childComponents.Deselect)))],8,oh)):pe("",!0)]))])),256)),vn(e.$slots,"search",Pn(On(t.scope.search)),()=>[v("input",Vt({class:"vs__search"},t.scope.search.attributes,Bd(t.scope.search.events)),null,16)])],512),v("div",ah,[xn(v("button",{ref:"clearButton",disabled:o.disabled,type:"button",class:"vs__clear",title:"Clear Selected","aria-label":"Clear Selected",onClick:n[0]||(n[0]=(...l)=>t.clearSelection&&t.clearSelection(...l))},[(B(),Ce(qo(t.childComponents.Deselect)))],8,rh),[[Qi,t.showClearButton]]),vn(e.$slots,"open-indicator",Pn(On(t.scope.openIndicator)),()=>[o.noDrop?pe("",!0):(B(),Ce(qo(t.childComponents.OpenIndicator),Pn(Vt({key:0},t.scope.openIndicator.attributes)),null,16))]),vn(e.$slots,"spinner",Pn(On(t.scope.spinner)),()=>[xn(v("div",th,"Loading...",512),[[Qi,e.mutableLoading]])])],512)],40,eh),H(fm,{name:o.transition},{default:_e(()=>[t.dropdownOpen?xn((B(),P("ul",{id:`vs${o.uid}__listbox`,ref:"dropdownMenu",key:`vs${o.uid}__listbox`,class:"vs__dropdown-menu",role:"listbox",tabindex:"-1",onMousedown:n[2]||(n[2]=ro((...l)=>t.onMousedown&&t.onMousedown(...l),["prevent"])),onMouseup:n[3]||(n[3]=(...l)=>t.onMouseUp&&t.onMouseUp(...l))},[vn(e.$slots,"list-header",Pn(On(t.scope.listHeader))),(B(!0),P(Re,null,Ze(t.filteredOptions,(l,c)=>(B(),P("li",{id:`vs${o.uid}__option-${c}`,key:o.getOptionKey(l),role:"option",class:nn(["vs__dropdown-option",{"vs__dropdown-option--deselect":t.isOptionDeselectable(l)&&c===e.typeAheadPointer,"vs__dropdown-option--selected":t.isOptionSelected(l),"vs__dropdown-option--highlight":c===e.typeAheadPointer,"vs__dropdown-option--disabled":!o.selectable(l)}]),"aria-selected":c===e.typeAheadPointer?!0:null,onMouseover:d=>o.selectable(l)?e.typeAheadPointer=c:null,onClick:ro(d=>o.selectable(l)?t.select(l):null,["prevent","stop"])},[vn(e.$slots,"option",Pn(On(t.normalizeOptionForSlot(l))),()=>[Te(ne(o.getOptionLabel(l)),1)])],42,sh))),128)),t.filteredOptions.length===0?(B(),P("li",lh,[vn(e.$slots,"no-options",Pn(On(t.scope.noOptions)),()=>[ch])])):pe("",!0),vn(e.$slots,"list-footer",Pn(On(t.scope.listFooter)))],40,ih)),[[s]]):(B(),P("ul",{key:1,id:`vs${o.uid}__listbox`,role:"listbox",style:{display:"none",visibility:"hidden"}},null,8,uh))]),_:3},8,["name"]),vn(e.$slots,"footer",Pn(On(t.scope.footer)))],10,Z0)}const mh=_i(X0,[["render",dh]]),ph={class:"action-menu"},fh=["aria-label","aria-controls","aria-expanded"],vh=["aria-label"],hh=["onClick"],Pr={__name:"ActionMenu",props:{label:{type:String,default:"Mais ações"},items:{type:Array,required:!0}},emits:["select"],setup(e,{emit:n}){const o=n,a=de(null),r=de(null),t=de([]),s=de(!1),l=de({top:0,right:0}),c=`action-menu-${dd()}`;function d(){return t.value.filter(Boolean)}function u({restoreFocus:T=!0}={}){s.value&&(s.value=!1,document.removeEventListener("pointerdown",m,!0),document.removeEventListener("keydown",g),window.removeEventListener("scroll",f,!0),window.removeEventListener("resize",f),T&&mn(()=>a.value?.focus?.()))}function m(T){const y=T.target;a.value?.contains(y)||r.value?.contains(y)||u({restoreFocus:!1})}function f(){u({restoreFocus:!1})}function g(T){if(T.key==="Escape"){T.preventDefault(),u();return}if(T.key==="Tab"){a.value?.focus?.(),u({restoreFocus:!1});return}if(!["ArrowDown","ArrowUp","Home","End"].includes(T.key)||!d().some(k=>k===document.activeElement))return;const y=d();if(T.preventDefault(),T.key==="Home")y[0].focus();else if(T.key==="End")y[y.length-1].focus();else{const k=y.indexOf(document.activeElement),F=T.key==="ArrowDown"?1:-1;y[(k+F+y.length)%y.length].focus()}}async function S(){const T=a.value.getBoundingClientRect();l.value={top:Math.round(T.bottom+4),right:Math.round(window.innerWidth-T.right)},s.value=!0,document.addEventListener("pointerdown",m,!0),document.addEventListener("keydown",g),window.addEventListener("scroll",f,!0),window.addEventListener("resize",f),await mn();const y=r.value?.offsetHeight??0;l.value.top+y>window.innerHeight-8&&(l.value={...l.value,top:Math.max(8,Math.round(T.top-y-4))}),d()[0]?.focus()}function x(){s.value?u():S()}function C(T){const y=a.value;u({restoreFocus:!1}),o("select",T.id,y)}return Jo(()=>u({restoreFocus:!1})),(T,y)=>(B(),P("div",ph,[v("button",{ref_key:"trigger",ref:a,class:"action-menu__trigger",type:"button","aria-label":e.label,"aria-haspopup":"menu","aria-controls":s.value?c:null,"aria-expanded":s.value,onClick:x},[H(Q(n0),{size:20,"aria-hidden":"true"})],8,fh),(B(),Ce(Nr,{to:"body"},[s.value?(B(),P("ul",{key:0,id:c,ref_key:"list",ref:r,class:"action-menu__list",role:"menu","aria-label":e.label,style:Ca({top:`${l.value.top}px`,right:`${l.value.right}px`})},[(B(!0),P(Re,null,Ze(e.items,k=>(B(),P("li",{key:k.id,role:"none"},[v("button",{ref_for:!0,ref_key:"itemButtons",ref:t,class:nn(["action-menu__item",{"action-menu__item--danger":k.danger}]),type:"button",role:"menuitem",onClick:F=>C(k)},[k.icon?(B(),Ce(qo(k.icon),{key:0,size:18,"aria-hidden":"true"})):pe("",!0),v("span",null,ne(k.label),1)],10,hh)]))),128))],12,vh)):pe("",!0)]))]))}},gh={class:"page-header"},bh={key:0,class:"page-header__bar"},_h={key:0,class:"page-header__back-label"},yh={key:1,class:"page-header__bar-actions"},Ah={class:"page-header__row"},Nh={class:"page-header__main"},xh={class:"page-header__heading"},Bh={key:0,class:"page-header__description"},Th={key:0,class:"page-header__tools"},io={__name:"PageHeader",props:{title:{type:String,required:!0},description:String,parent:String,backTo:[String,Object],helpButton:Boolean,menu:Boolean},emits:["help","rename","delete"],setup(e,{emit:n}){const o=e,a=n,r=ke(()=>o.parent?`Voltar para ${o.parent}`:"Voltar para a tela anterior"),t=[{id:"rename",label:"Renomear",icon:Ir},{id:"delete",label:"Excluir",icon:La,danger:!0}];function s(l,c){a(l,c)}return(l,c)=>(B(),P("header",gh,[e.backTo||e.menu?(B(),P("div",bh,[e.backTo?(B(),Ce(Q(Pe),{key:0,class:"page-header__back",to:e.backTo,"aria-label":r.value},{default:_e(()=>[H(Q(ur),{size:24,"aria-hidden":"true"}),e.parent?(B(),P("span",_h,ne(e.parent),1)):pe("",!0)]),_:1},8,["to","aria-label"])):pe("",!0),e.menu?(B(),P("div",yh,[H(Pr,{label:`Ações de ${e.title}`,items:t,onSelect:s},null,8,["label"])])):pe("",!0)])):pe("",!0),v("div",Ah,[v("div",Nh,[v("div",xh,[v("h1",null,ne(e.title),1),e.helpButton?(B(),P("button",{key:0,class:"page-header__help",type:"button",title:"Ajuda","aria-label":"Ajuda",onClick:c[0]||(c[0]=d=>a("help"))},[H(Q(bi),{size:20,"aria-hidden":"true"})])):pe("",!0)]),vn(l.$slots,"summary"),e.description?(B(),P("p",Bh,ne(e.description),1)):pe("",!0)]),l.$slots.action?(B(),P("div",Th,[vn(l.$slots,"action")])):pe("",!0)])]))}},Rh={class:"empty-state"},Sh={key:0,class:"empty-state__icon","aria-hidden":"true"},wh={key:1,class:"empty-state__actions"},Tn={__name:"EmptyState",props:{title:String,text:String,icon:{type:[Object,Function],default:null}},setup(e){return(n,o)=>(B(),P("section",Rh,[e.icon?(B(),P("span",Sh,[(B(),Ce(qo(e.icon),{size:28}))])):pe("",!0),v("h2",null,ne(e.title),1),v("p",null,ne(e.text),1),n.$slots.default?(B(),P("div",wh,[vn(n.$slots,"default")])):pe("",!0)]))}},Eh={key:0,class:"alert alert--error",role:"alert"},Co={__name:"ErrorMessage",props:{message:String},setup(e){return(n,o)=>e.message?(B(),P("p",Eh,[H(Q(Uv),{size:16,"aria-hidden":"true"}),v("span",null,ne(e.message),1)])):pe("",!0)}};function Or(e,n){return e?typeof e=="string"?e:n===1?e.singular:e.plural:""}function Yt(e,n,o=""){const a=typeof n=="boolean"?n?"sim":"não":n,r=Or(o,n),t=r?`${a} ${r}`:a;switch(e){case">=":return`No mínimo ${t} (inclusive)`;case"<=":return`No máximo ${t} (inclusive)`;case">":return`Acima de ${t} (sem incluir o limite)`;case"<":return`Abaixo de ${t} (sem incluir o limite)`;case"==":case"eq":return`Igual a ${t}`;case"!=":return`Diferente de ${t}`;default:return t}}function Ch(e){const n=String(e??"").replace(/[^\d.,]/g,""),o=n.search(/[.,]/);if(o===-1)return n;const a=n.slice(0,o),r=n[o],t=n.slice(o+1).replace(/[.,]/g,"");return`${a===""?"0":a}${r}${t}`}function cu(e){const n=String(e??"").trim().replace(",",".");if(!/^\d*\.?\d*$/.test(n)||n===""||n===".")return null;const o=Number(n);return Number.isFinite(o)?o:null}function kh(e,n,o){const a=String(e??"").slice(0,o).replace(/\D/g,"").length;let r=0,t=0;for(;r<n.length&&t<a;)/\d/.test(n[r])&&(t+=1),r+=1;return r}function Ka(e,n){return String(e??"").toLowerCase().includes(n)}function Ih(e,n){const o=String(n??"").toLowerCase().trim();if(!o)return!0;const a=Ka(e?.nome,o),r=Ka(e?.norma?.nome,o),t=(e?.regras??[]).some(s=>Ka(s?.nome,o)||Ka(s?.id,o));return a||r||t}const ml=[">=",">","==","eq","!=","<","<="];function Ph(e){const n=ml.indexOf(e);return n===-1?ml.length:n}function Oh(e,n){return e?.tipo==="number"?cu(n):n}function jh(e,n,o){if(e.tipo==="conditional"){const a=Oh(n?.parametros?.[e.parametro],o?.[e.parametro]);if(a==null||a==="")return[];const r=Cc(e,a);return r?.verificar?[r.verificar]:[]}return e.operador&&e.valor!==void 0?[e]:[]}function Dh(e,n){const o={};for(const a of e?.regras??[])for(const r of jh(a,e,n)){if(!r.parametro||r.valor===void 0)continue;o[r.parametro]??=[];const t=Yt(r.operador,r.valor,e?.parametros?.[r.parametro]?.unidade);o[r.parametro].some(s=>s.description===t)||o[r.parametro].push({description:t,order:Ph(r.operador)})}return Object.fromEntries(Object.entries(o).map(([a,r])=>[a,r.sort((t,s)=>t.order-s.order).map(t=>t.description)]))}function Vh(e){const n=new Set;for(const o of e?.regras??[])o.tipo==="checklist"&&o.parametro&&n.add(o.parametro);return n}function Lh(e,n=[],o=!1){return!!e?.definicao||n.length>0||o}function pl(e,n={}){const o={};for(const[a,r]of Object.entries(e?.parametros??{})){const t=n[a];if(!(t===""||t===void 0||t===null))if(r.tipo==="number"){const s=cu(t);s!==null&&(o[a]=s)}else r.tipo==="boolean"?o[a]=t===!0||t==="true":o[a]=t}return o}function $h(e,n=[]){if(!e)return"";const o=new Set(n);if(!o.has(e))return e;let a=1;for(;o.has(`${e} (${a})`);)a+=1;return`${e} (${a})`}function qh(e=[],{exceptId:n}={}){return e.filter(o=>o.id!==n).map(o=>o.name)}const Mh={class:"back-link__label"},Fh={class:"ruleset-grid"},zh={class:"field"},Hh=["value"],Uh={class:"field"},Kh={class:"ruleset-option"},Gh={class:"ruleset-title"},Yh={key:0,class:"ruleset-norma"},Wh={key:0,class:"field"},Jh={class:"field-name-input"},Qh={id:"field-name-input__checkbox"},Xh={class:"fields-grid"},Zh={class:"field__heading"},eg=["for"],ng={key:1},og=["aria-label","aria-expanded","aria-controls","onClick"],ag=["id"],rg={key:0},tg={key:1,class:"parameter-help__expected"},ig={key:2,class:"parameter-help__expected"},sg=["id","onUpdate:modelValue"],lg=["id","onUpdate:modelValue"],cg=["value"],ug=["id","value","onInput"],dg={class:"form-actions"},Bt={__name:"ElementPage",props:{elementId:String,quick:Boolean},setup(e){const n=e,o=qe("services"),a=qe("builtInRuleSets"),r=gi(),t=kr(),s=de(null),l=de(null),c=de([]),d=de([]),u=de(null),m=de("todas"),f=de(localStorage.getItem("elementAutoName")==="true"),g=de(null),S=de(""),x=ka({name:"",ruleSet:"",data:{}}),C=ke(()=>!n.elementId),T=ke(()=>d.value.find(I=>I.id===x.ruleSet)),y=ke(()=>Dh(T.value,x.data)),k=ke(()=>Vh(T.value));function F(I,q){return Lh(q,y.value[I],k.value.has(I))}const ve=ke(()=>{const I=d.value.map(q=>q.norma?.nome).filter(Boolean);return["todas",...new Set(I)]}),ce=ke(()=>m.value==="todas"?d.value:d.value.filter(I=>I.norma?.nome===m.value));async function oe(){n.quick&&o.quickEvaluationService.clear();const I=await o.ruleSetService.list();d.value=[...a.map(j=>j.ruleSet),...I],C.value||(s.value=await o.projectService.getElement(n.elementId));const q=s.value?.environmentId??r.query.environmentId;if(!(!n.quick&&(!q||!C.value&&!s.value))){if(n.quick||(l.value=await o.projectService.getEnvironment(q),c.value=await o.projectService.listElements(q)),s.value){const j=await o.evaluationService.listEvaluations(s.value.id);u.value=j[0]}x.name=s.value?.name??"",x.ruleSet=r.query.ruleSet??s.value?.rule??d.value[0]?.id??"",Object.assign(x.data,u.value?.data??{})}}function G(I,q){const j=q.target,re=j.value,L=Ch(re);if(x.data[I]=L,re===L)return;const Se=j.selectionStart??re.length;j.value=L;const Be=kh(re,L,Se);j.setSelectionRange(Be,Be)}async function R(){if(S.value="",!T.value){S.value="Selecione um conjunto de regras.";return}const I=pl(T.value,x.data),q={name:x.name,type:T.value.nome,rule:T.value.id};try{const j=s.value?await o.projectService.updateElement(s.value.id,q):await o.projectService.createElement(l.value.id,q);await o.evaluationService.saveElementAnswers({elementId:j.id,checklist:T.value,data:I}),t.push(`/projects/${l.value.projectId}/environments/${l.value.id}`)}catch(j){S.value=j.message}}vo([f,()=>x.ruleSet],([I,q])=>{if(localStorage.setItem("elementAutoName",String(I)),I){const re=d.value.find(L=>L.id===q)?.nome??"";x.name=$h(re,qh(c.value,{exceptId:s.value?.id}))}});async function J(){if(S.value="",!T.value){S.value="Selecione um conjunto de regras.";return}const I=pl(T.value,x.data);if(n.quick){try{o.quickEvaluationService.evaluate({name:x.name,checklist:T.value,data:I}),t.push("/quick-evaluation/result")}catch(j){S.value=j.message}return}const q={name:x.name,type:T.value.nome,rule:T.value.id};try{const j=s.value?await o.projectService.updateElement(s.value.id,q):await o.projectService.createElement(l.value.id,q);await o.evaluationService.evaluateElement({elementId:j.id,checklist:T.value,data:I}),t.push(`/elements/${j.id}/evaluation`)}catch(j){S.value=j.message}}vo(m,()=>{ce.value.some(q=>q.id===x.ruleSet)||(x.ruleSet=ce.value[0]?.id??"")}),vo(()=>x.ruleSet,()=>{g.value=null,S.value="";const I=Object.keys(T.value?.parametros??{});Object.keys(x.data).forEach(q=>{I.includes(q)||delete x.data[q]})});const te=(I,q,j)=>Ih(I,j);return An(oe),(I,q)=>e.quick||l.value?(B(),P(Re,{key:0},[e.quick?pe("",!0):(B(),Ce(Q(Pe),{key:0,class:"back-link",to:`/projects/${l.value.projectId}/environments/${l.value.id}`},{default:_e(()=>[H(Q(ur),{size:18,"aria-hidden":"true"}),v("span",Mh,ne(l.value.name),1)]),_:1},8,["to"])),H(io,{title:e.quick?"Avaliação rápida":C.value?"Novo elemento":s.value.name,description:"Escolha o tipo e informe as medidas observadas."},null,8,["title"]),v("form",{class:"form-card",onSubmit:q[5]||(q[5]=ro(()=>{},["prevent"]))},[v("div",Fh,[v("label",zh,[q[7]||(q[7]=v("span",null,"Norma de referência",-1)),xn(v("select",{"onUpdate:modelValue":q[0]||(q[0]=j=>m.value=j)},[q[6]||(q[6]=v("option",{value:"todas"},"Todas as normas",-1)),(B(!0),P(Re,null,Ze(ve.value.filter(j=>j!=="todas"),j=>(B(),P("option",{key:j,value:j},ne(j),9,Hh))),128))],512),[[Kr,m.value]])]),v("label",Uh,[q[8]||(q[8]=v("span",null,"Tipo de elemento *",-1)),H(Q(mh),{modelValue:x.ruleSet,"onUpdate:modelValue":q[1]||(q[1]=j=>x.ruleSet=j),options:ce.value,label:"nome",reduce:j=>j.id,"filter-by":te,placeholder:"Pesquise o elemento ou regra..."},{option:_e(j=>[v("div",Kh,[v("span",Gh,ne(j.nome),1),j.norma?.nome?(B(),P("small",Yh," ("+ne(j.norma.nome)+") ",1)):pe("",!0)])]),_:1},8,["modelValue","options","reduce"])])]),e.quick?pe("",!0):(B(),P("div",Wh,[v("div",Jh,[q[10]||(q[10]=v("label",{for:"element-name"},"Nome do elemento *",-1)),v("div",Qh,[xn(v("input",{type:"checkbox",id:"auto-name-chk","onUpdate:modelValue":q[2]||(q[2]=j=>f.value=j)},null,512),[[Vm,f.value]]),q[9]||(q[9]=v("label",{for:"auto-name-chk"},"Auto Nomear",-1))])]),xn(v("input",{id:"element-name","onUpdate:modelValue":q[3]||(q[3]=j=>x.name=j),required:"",placeholder:"Ex.: Porta principal"},null,512),[[Uo,x.name]])])),q[16]||(q[16]=v("div",{class:"form-divider"},[v("strong",null,"Dados para avaliação"),v("span",null,"Campos definidos pelo conjunto de regras selecionado.")],-1)),v("div",Xh,[(B(!0),P(Re,null,Ze(T.value?.parametros,(j,re)=>(B(),P("div",{key:re,class:"field"},[v("div",Zh,[v("label",{for:`parameter-${re}`},[Te(ne(j.label??re),1),j.obrigatorio?(B(),P(Re,{key:0},[Te(" *")],64)):pe("",!0),j.unidade?(B(),P("small",ng," ("+ne(Q(Or)(j.unidade))+")",1)):pe("",!0)],8,eg),F(re,j)?(B(),P("button",{key:0,class:nn(["parameter-help",{"is-open":g.value===re}]),type:"button","aria-label":`Definição e critério: ${j.label??re}`,"aria-expanded":g.value===re,"aria-controls":`parameter-help-${re}`,onClick:L=>g.value=g.value===re?null:re,onKeydown:q[4]||(q[4]=wr(L=>g.value=null,["esc"]))},[H(Q(bi),{size:16,"aria-hidden":"true"})],42,og)):pe("",!0)]),g.value===re?(B(),P("div",{key:0,id:`parameter-help-${re}`,class:"parameter-help__panel"},[j.definicao?(B(),P("p",rg,ne(j.definicao),1)):pe("",!0),y.value[re]?.length?(B(),P("p",tg,[q[11]||(q[11]=v("strong",null,"Esperado:",-1)),Te(" "+ne(y.value[re].join(" e ")),1)])):k.value.has(re)?(B(),P("p",ig,[...q[12]||(q[12]=[v("strong",null,"Esperado:",-1),Te(" verificação manual ",-1)])])):pe("",!0)],8,ag)):pe("",!0),j.tipo==="boolean"?xn((B(),P("select",{key:1,id:`parameter-${re}`,"onUpdate:modelValue":L=>x.data[re]=L},[...q[13]||(q[13]=[v("option",{value:""},"Não informado",-1),v("option",{value:!0},"Sim",-1),v("option",{value:!1},"Não",-1)])],8,sg)),[[Kr,x.data[re]]]):j.tipo==="select"?xn((B(),P("select",{key:2,id:`parameter-${re}`,"onUpdate:modelValue":L=>x.data[re]=L},[q[14]||(q[14]=v("option",{value:""},"Selecione",-1)),(B(!0),P(Re,null,Ze(j.opcoes??[],L=>(B(),P("option",{key:L,value:L},ne(L),9,cg))),128))],8,lg)),[[Kr,x.data[re]]]):(B(),P("input",{key:3,id:`parameter-${re}`,value:x.data[re]??"",type:"text",inputmode:"decimal",autocomplete:"off",autocapitalize:"off",spellcheck:"false",onInput:L=>G(re,L)},null,40,ug))]))),128))]),H(Co,{message:S.value},null,8,["message"]),v("div",dg,[H(Q(Pe),{class:"button button--ghost",to:e.quick?"/projects":`/projects/${l.value.projectId}/environments/${l.value.id}`},{default:_e(()=>[...q[15]||(q[15]=[Te(" Cancelar ",-1)])]),_:1},8,["to"]),e.quick?pe("",!0):(B(),P("button",{key:0,class:"button button--outline",type:"button",onClick:R}," Salvar e voltar ")),v("button",{class:"button",type:"button",onClick:J},ne(e.quick?"Avaliar":"Salvar e avaliar"),1)])],32)],64)):(B(),Ce(Tn,{key:1,title:"Elemento não encontrado",text:"Volte para o ambiente e tente novamente."},{default:_e(()=>[H(Q(Pe),{class:"button",to:"/projects"},{default:_e(()=>[...q[17]||(q[17]=[Te("Projetos",-1)])]),_:1})]),_:1}))}},go={__name:"StatusBadge",props:{status:{type:String,default:"nao_avaliado"}},setup(e){const n={conforme:Gv,nao_conforme:Xv,pendente:Wv},o=e,a=ke(()=>n[Ra(o.status)]);return(r,t)=>(B(),P("span",{class:nn(["status",`status--${e.status}`])},[(B(),Ce(qo(a.value),{size:14,"aria-hidden":"true"})),v("span",null,ne(Q(lp)(e.status)),1)],2))}};function un(e,n,o){return`${e} ${e===1?n:o}`}const mg={key:0,class:"evaluation-summary evaluation-summary--compact"},pg={key:0,class:"evaluation-summary__separator","aria-hidden":"true"},fg={key:1,class:"evaluation-summary","aria-labelledby":"evaluation-summary-title"},vg={class:"evaluation-summary__heading"},hg={id:"evaluation-summary-title"},gg={class:"evaluation-summary__score"},bg={class:"evaluation-summary__cards"},_g={class:"evaluation-summary__card evaluation-summary__card--conforme"},yg={class:"evaluation-summary__card evaluation-summary__card--nao_conforme"},Ag={class:"evaluation-summary__card evaluation-summary__card--nao_avaliado"},yi={__name:"EvaluationSummary",props:{summary:{type:Object,required:!0},scope:{type:String,default:"elementos"},compact:Boolean,environmentCount:{type:Number,default:null},showEvaluated:Boolean},setup(e){const n=e,o=ke(()=>n.summary.conforme+n.summary.nao_conforme),a=ke(()=>n.summary.totalElements?n.summary.overallStatus==="conforme"?"Todos os elementos estão conformes":n.summary.overallStatus==="nao_conforme"?"Há elementos não conformes":"Há elementos pendentes de avaliação":"Nenhum elemento cadastrado"),r=ke(()=>{const t=[];return n.environmentCount!==null&&t.push(un(n.environmentCount,"ambiente","ambientes")),t.push(un(n.summary.totalElements,"elemento","elementos")),n.showEvaluated&&t.push(un(o.value,"avaliado","avaliados")),t.push(un(n.summary.pendente,"pendência","pendências")),t});return(t,s)=>e.compact?(B(),P("p",mg,[(B(!0),P(Re,null,Ze(r.value,(l,c)=>(B(),P(Re,{key:`${c}-${l}`},[c?(B(),P("span",pg,"·")):pe("",!0),v("span",null,ne(l),1)],64))),128))])):(B(),P("section",fg,[v("div",vg,[v("div",null,[v("h2",hg,"Situação do "+ne(e.scope),1),v("p",null,ne(a.value),1)]),v("div",gg,[v("strong",null,ne(e.summary.score)+"%",1),s[0]||(s[0]=v("span",null,"conformes",-1))])]),v("div",bg,[v("div",_g,[s[1]||(s[1]=v("span",null,"Conformes",-1)),v("strong",null,ne(e.summary.conforme),1)]),v("div",yg,[s[2]||(s[2]=v("span",null,"Não conformes",-1)),v("strong",null,ne(e.summary.nao_conforme),1)]),v("div",Ag,[s[3]||(s[3]=v("span",null,"Pendentes",-1)),v("strong",null,ne(e.summary.nao_avaliado),1)])]),e.summary.totalElements?(B(),Ce(go,{key:0,status:e.summary.overallStatus},null,8,["status"])):pe("",!0)]))}},Ng={class:"field"},xg={key:1,class:"card-list collection-list"},Bg={class:"card__icon"},Tg={class:"card__body"},Rg={class:"card__meta"},Sg={key:3,class:"page-action"},wg={__name:"EnvironmentPage",props:{projectId:String,environmentId:String},setup(e){const n=e,o=qe("services"),a=qe("confirmPopup"),r=kr(),t=de(null),s=de(null),l=de([]),c=de(null),d=de(!1),u=de(""),m=de(""),f=de(null),g=[{id:"delete",label:"Excluir",icon:La,danger:!0}],S=ke(()=>({path:"/elements/new",query:{environmentId:t.value?.id}}));function x(te){return te.status==="nao_avaliado"?`/elements/${te.element.id}`:`/elements/${te.element.id}/evaluation`}function C(te){return te.ruleCount?`${te.element.type} · ${un(te.ruleCount,"regra","regras")}`:te.element.type}function T(){mn(()=>document.getElementById("conteudo")?.focus?.())}async function y(){d.value=!0,u.value=t.value.name,m.value="",await mn(),f.value?.focus(),f.value?.select()}function k(){d.value=!1,u.value="",m.value="",T()}async function F(){m.value="";try{await o.projectService.renameEnvironment(t.value.id,u.value),d.value=!1,await J(),T()}catch(te){m.value=te.message}}function ve(te,I){a.open({title:`Excluir elemento “${te.name}”?`,details:"As avaliações registradas neste elemento também serão removidas.",returnFocusTo:I,onAccept:()=>oe(te)})}function ce(te,I,q){te==="delete"&&ve(I,q)}async function oe(te){await o.projectService.deleteElement(te.id),await J()}function G(te){a.open({title:`Excluir ambiente “${t.value.name}”?`,details:`Também serão removidos ${un(l.value.length,"elemento","elementos")} e as avaliações registradas neles.`,returnFocusTo:te,onAccept:R})}async function R(){await o.projectService.deleteEnvironment(t.value.id),r.push(`/projects/${t.value.projectId}`)}async function J(){if(t.value=await o.projectService.getEnvironment(n.environmentId),!t.value)return;s.value=await o.projectService.getProject(t.value.projectId);const te=await o.projectService.listElements(t.value.id),[I,q]=await Promise.all([Promise.all(te.map(async j=>{const re=await o.evaluationService.listEvaluations(j.id);return{element:j,status:qt(re),ruleCount:re[0]?.result?.length??0}})),o.evaluationService.getEnvironmentSummary(t.value.id)]);l.value=I,c.value=q}return An(J),(te,I)=>t.value?(B(),P(Re,{key:0},[H(io,{title:t.value.name,parent:s.value?.name??"Projetos","back-to":`/projects/${t.value.projectId}`,menu:"",onRename:y,onDelete:G},{summary:_e(()=>[c.value?(B(),Ce(yi,{key:0,compact:"",summary:c.value,"show-evaluated":""},null,8,["summary"])):pe("",!0)]),_:1},8,["title","parent","back-to"]),d.value?(B(),P("form",{key:0,class:"form-card collection-form",onSubmit:ro(F,["prevent"]),onKeydown:wr(k,["esc"])},[I[3]||(I[3]=v("div",{class:"collection-form__heading"},[v("h2",null,"Nome do ambiente"),v("p",null,"Use um nome que ajude a identificar este espaço no projeto.")],-1)),v("label",Ng,[I[1]||(I[1]=v("span",null,"Nome do ambiente",-1)),xn(v("input",{ref_key:"nameInput",ref:f,"onUpdate:modelValue":I[0]||(I[0]=q=>u.value=q),required:""},null,512),[[Uo,u.value]])]),H(Co,{message:m.value},null,8,["message"]),v("div",{class:"form-actions"},[v("button",{class:"button button--ghost",type:"button",onClick:k}," Cancelar "),I[2]||(I[2]=v("button",{class:"button",type:"submit"},"Salvar",-1))])],32)):pe("",!0),l.value.length?(B(),P("div",xg,[(B(!0),P(Re,null,Ze(l.value,q=>(B(),P("article",{key:q.element.id,class:"card card--interactive card--with-action"},[H(Q(Pe),{class:"card__link",to:x(q)},{default:_e(()=>[v("span",Bg,[H(Q(Nt),{size:22,"aria-hidden":"true"})]),v("div",Tg,[v("h2",null,ne(q.element.name),1),v("span",Rg,[v("span",null,ne(C(q)),1),H(go,{status:q.status},null,8,["status"])])])]),_:2},1032,["to"]),H(Pr,{class:"card__action",label:`Ações de ${q.element.name}`,items:g,onSelect:(j,re)=>ce(j,q.element,re)},null,8,["label","onSelect"])]))),128))])):d.value?pe("",!0):(B(),Ce(Tn,{key:2,icon:Q(Nt),title:"Nenhum elemento ainda",text:"Cadastre portas, rampas e sanitários."},{default:_e(()=>[H(Q(Pe),{class:"button",to:S.value},{default:_e(()=>[H(Q(il),{size:18,"aria-hidden":"true"}),I[4]||(I[4]=Te("Adicionar elemento ",-1))]),_:1},8,["to"])]),_:1},8,["icon"])),l.value.length&&!d.value?(B(),P("div",Sg,[H(Q(Pe),{class:"button",to:S.value},{default:_e(()=>[H(Q(il),{size:18,"aria-hidden":"true"}),I[5]||(I[5]=Te("Adicionar elemento ",-1))]),_:1},8,["to"])])):pe("",!0)],64)):(B(),Ce(Tn,{key:1,icon:Q(Nt),title:"Ambiente não encontrado",text:"Ele pode ter sido removido."},{default:_e(()=>[H(Q(Pe),{class:"button",to:"/projects"},{default:_e(()=>[...I[6]||(I[6]=[Te("Projetos",-1)])]),_:1})]),_:1},8,["icon"]))}},Eg={class:"back-link__label"},Cg={key:0,class:"project-header__actions"},kg={class:"result-summary__counts","aria-label":"Resumo das regras"},Ig={key:0,class:"result-summary__pending"},Pg={class:"results"},Og={class:"result-row__content"},jg={key:0,class:"result-row__action"},Dg={key:1},Vg={key:0,class:"result-values"},Lg={key:0,class:"result-values__context"},$g={key:1,class:"result-values__item"},qg={key:2,class:"result-values__item result-values__item--expected"},Mg={key:3,class:"result-row__reference"},Fg={key:1,class:"results-action"},zg={key:2,class:"page-footer-actions"},fl={__name:"EvaluationPage",props:{elementId:String,quick:Boolean},setup(e){const n=e,o=qe("services"),a=qe("builtInRuleSets"),r=qe("confirmPopup"),t=kr(),s=de(null),l=de(null),c=de(null),d=de([]),u=ke(()=>l.value?`/projects/${l.value.projectId}/environments/${l.value.id}`:"/projects"),m=ke(()=>c.value?.result??[]),f=ke(()=>d.value.find(G=>G.id===s.value?.rule));function g(G){const R=f.value?.regras?.find(on=>on.id===G.id),J=c.value?.data??{},te=f.value?.parametros??{};let I=G.parametro??R?.parametro,q=G.operador??R?.operador,j=G.valorEsperado??R?.valor,re="";if(R?.tipo==="conditional"){const on=J[R.parametro],Ue=(R.condicoes??[]).find(Ye=>Ye.quando&&sr(on,Ye.quando.operador,Ye.quando.valor));if(Ue?.verificar){I=Ue.verificar.parametro,q=Ue.verificar.operador,j=Ue.verificar.valor;const Ye=te[R.parametro];re=`${Ye?.label??R.parametro}: ${Yt(Ue.quando.operador,Ue.quando.valor,Ye?.unidade)}`}}const L=te[I]??{},Se=G.valorInformado!==void 0?G.valorInformado:J[I],Be=j!==void 0&&q!==void 0;return{parameterLabel:L.label??I,actual:typeof Se=="boolean"?Se?"Sim":"Não":Se,unit:typeof Se=="boolean"?"":Or(G.unidade??L.unidade??"",Se),expected:Be?Yt(q,j,G.unidade??L.unidade):"",conditionalDescription:re}}function S(G){return f.value?.regras?.find(R=>R.id===G.id)}function x(G){const R=G.parametro??S(G)?.parametro;return(f.value?.parametros?.[R]??{}).label??R??G.id}function C(G){const R=x(G);switch(G.status){case"invalido":return G.motivo==="obrigatorio"?`Falta preencher: ${R}`:`Ajuste “${R}”: ${G.mensagem}`;case"nao_avaliado":return`Aguardando: ${R}`;case"manual":case"atencao":case"erro":return G.mensagem??null;default:return null}}const T=ke(()=>cp(m.value)),y=ke(()=>m.value.length?T.value.nao_conforme>0?"nao_conforme":T.value.pendente>0?"nao_avaliado":"conforme":"nao_avaliado"),k=ke(()=>{switch(y.value){case"conforme":return"Elemento conforme";case"nao_conforme":return"Há itens não conformes";default:return"Avaliação pendente"}});function F(G){return G?new Intl.DateTimeFormat("pt-BR",{dateStyle:"medium",timeStyle:"short"}).format(new Date(G)):""}async function ve(){const G=await o.ruleSetService.list();if(d.value=[...(a??[]).map(R=>R.ruleSet),...G],n.quick){const R=o.quickEvaluationService.getCurrent();s.value=R?.element??null,c.value=R?.evaluation??null;return}if(s.value=await o.projectService.getElement(n.elementId),s.value){l.value=await o.projectService.getEnvironment(s.value.environmentId);const R=await o.evaluationService.listEvaluations(s.value.id);c.value=R[0]??null}}function ce(G){r.confirm(G,`Excluir o elemento ${s.value.name} e suas avaliações?`,oe)}async function oe(){await o.projectService.deleteElement(s.value.id),t.push(u.value)}return An(ve),(G,R)=>s.value&&c.value?(B(),P(Re,{key:0},[e.quick?pe("",!0):(B(),Ce(Q(Pe),{key:0,class:"back-link",to:u.value},{default:_e(()=>[H(Q(ur),{size:18,"aria-hidden":"true"}),v("span",Eg,ne(l.value?.name??s.value.name),1)]),_:1},8,["to"])),H(io,{title:s.value.name,description:`Avaliação realizada em ${F(c.value.evaluatedAt)}`},{action:_e(()=>[e.quick?pe("",!0):(B(),P("div",Cg,[H(Q(Pe),{class:"button button--outline",to:`/elements/${s.value.id}`},{default:_e(()=>[H(Q(Ir),{size:18,"aria-hidden":"true"}),R[0]||(R[0]=Te("Editar elemento ",-1))]),_:1},8,["to"])]))]),_:1},8,["title","description"]),v("section",{class:nn(["result-summary",`result-summary--${y.value}`])},[H(go,{status:y.value},null,8,["status"]),v("h2",null,ne(k.value),1),v("div",kg,[v("span",null,[v("strong",null,ne(T.value.conforme),1),R[1]||(R[1]=Te(" conformes",-1))]),v("span",null,[v("strong",null,ne(T.value.nao_conforme),1),R[2]||(R[2]=Te(" não conformes",-1))]),v("span",null,[v("strong",null,ne(T.value.pendente),1),R[3]||(R[3]=Te(" pendentes",-1))])]),T.value.pendente?(B(),P("div",Ig,[R[5]||(R[5]=v("span",null,"Pendências:",-1)),(B(!0),P(Re,null,Ze(T.value.pendingBreakdown,J=>(B(),P("span",{key:J.id,class:"result-summary__pending-item"},[v("strong",null,ne(J.count),1),Te(" "+ne(J.label),1)]))),128)),e.quick?pe("",!0):(B(),Ce(Q(Pe),{key:0,class:"text-button",to:`/elements/${s.value.id}`},{default:_e(()=>[...R[4]||(R[4]=[Te(" Editar elemento ",-1)])]),_:1},8,["to"]))])):pe("",!0)],2),v("section",Pg,[R[8]||(R[8]=v("h2",null,"Regras avaliadas",-1)),(B(!0),P(Re,null,Ze(m.value,J=>(B(),P("article",{key:J.id,class:nn(["result-row",`result-row--${J.status}`])},[v("div",Og,[H(go,{status:J.status},null,8,["status"]),v("h3",null,ne(J.nome??J.id),1),C(J)?(B(),P("p",jg,ne(C(J)),1)):J.mensagem?(B(),P("p",Dg,ne(J.mensagem),1)):pe("",!0),Q(Ra)(J.status)!=="pendente"?(B(!0),P(Re,{key:2},Ze([g(J)],te=>(B(),P("div",{key:J.id,class:"result-row__details"},[te.actual!==void 0||te.expected?(B(),P("div",Vg,[te.conditionalDescription?(B(),P("div",Lg,[R[6]||(R[6]=v("span",null,"Condição desta regra",-1)),v("strong",null,ne(te.conditionalDescription),1)])):pe("",!0),te.actual!==void 0?(B(),P("div",$g,[v("span",null,"Valor informado · "+ne(te.parameterLabel),1),v("strong",null,[Te(ne(te.actual),1),te.unit?(B(),P(Re,{key:0},[Te(ne(te.unit),1)],64)):pe("",!0)])])):pe("",!0),te.expected?(B(),P("div",qg,[R[7]||(R[7]=v("span",null,"Critério esperado",-1)),v("strong",null,ne(te.expected),1)])):pe("",!0)])):pe("",!0)]))),128)):pe("",!0),J.referencia?(B(),P("small",Mg,"Referência: "+ne(J.referencia),1)):pe("",!0)])],2))),128))]),e.quick?(B(),P("div",Fg,[H(Q(Pe),{class:"button",to:"/quick-evaluation"},{default:_e(()=>[...R[9]||(R[9]=[Te(" Nova avaliação rápida ",-1)])]),_:1})])):pe("",!0),e.quick?pe("",!0):(B(),P("div",zg,[v("button",{class:"text-button text-button--danger",onClick:ce}," Excluir elemento ")]))],64)):s.value?(B(),P(Re,{key:1},[e.quick?pe("",!0):(B(),Ce(Q(Pe),{key:0,class:"back-link",to:u.value},{default:_e(()=>[H(Q(ur),{size:18,"aria-hidden":"true"}),R[10]||(R[10]=v("span",{class:"back-link__label"},"Elemento",-1))]),_:1},8,["to"])),H(Tn,{title:"Ainda não há avaliação",text:"Preencha os dados do elemento para executar as regras."},{default:_e(()=>[H(Q(Pe),{class:"button",to:e.quick?"/quick-evaluation":`/elements/${s.value.id}`},{default:_e(()=>[Te(ne(e.quick?"Nova avaliação rápida":"Avaliar elemento"),1)]),_:1},8,["to"])]),_:1})],64)):(B(),Ce(Tn,{key:2,title:"Avaliação não encontrada",text:e.quick?"Inicie uma avaliação rápida para ver o resultado.":"O elemento pode ter sido removido."},{default:_e(()=>[H(Q(Pe),{class:"button",to:e.quick?"/quick-evaluation":"/projects"},{default:_e(()=>[Te(ne(e.quick?"Avaliação rápida":"Projetos"),1)]),_:1},8,["to"])]),_:1},8,["text"]))}},Hg={class:"collection-form__heading"},Ug={key:0},Kg={key:1},Gg={class:"field"},Yg={key:0,class:"field"},Wg={key:1,class:"card-list collection-list"},Jg={class:"card__icon"},Qg={class:"card__body"},Xg={class:"card__meta"},Zg={key:3,class:"page-action"},eb={__name:"ProjectPage",props:{projectId:String},setup(e){const n=e,o=qe("services"),a=qe("confirmPopup"),r=kr(),t=de(null),s=de([]),l=de(null),c=de(""),d=de(""),u=de(null),m=de(""),f=de(null),g=de(null),S=[{id:"rename",label:"Renomear",icon:Ir},{id:"delete",label:"Excluir",icon:La,danger:!0}],x=ke(()=>u.value?.kind==="project"?"Dados do projeto":u.value?.environment?"Nome do ambiente":"Novo ambiente"),C=ke(()=>u.value?.kind==="project");async function T(){if(t.value=await o.projectService.getProject(n.projectId),!t.value)return;const j=await o.evaluationService.getProjectStatus(n.projectId);l.value=j.summary,s.value=j.environments.map(re=>({...re.environment,elementCount:re.elements.length,status:re.summary.overallStatus}))}function y(){mn(()=>document.getElementById("conteudo")?.focus?.())}async function k(){await mn(),g.value?.scrollIntoView({behavior:"smooth"}),f.value?.focus({preventScroll:!0}),f.value?.select()}async function F(){u.value={kind:"environment"},c.value="",m.value="",await k()}async function ve(){u.value={kind:"project"},c.value=t.value.name,d.value=t.value.description??"",m.value="",await k()}async function ce(j){u.value={kind:"environment",environment:j},c.value=j.name,m.value="",await k()}function oe(){u.value=null,c.value="",d.value="",m.value="",y()}async function G(){m.value="";try{C.value?await o.projectService.updateProject(n.projectId,{name:c.value,description:d.value}):u.value.environment?await o.projectService.renameEnvironment(u.value.environment.id,c.value):await o.projectService.createEnvironment(n.projectId,{name:c.value}),u.value=null,c.value="",d.value="",await T(),y()}catch(j){m.value=j.message}}function R(j,re){a.open({title:`Excluir ambiente “${j.name}”?`,details:`Também serão removidos ${un(j.elementCount,"elemento","elementos")} e as avaliações registradas neles.`,returnFocusTo:re,onAccept:()=>te(j)})}function J(j,re,L){j==="rename"?ce(re):R(re,L)}async function te(j){await o.projectService.deleteEnvironment(j.id),await T()}function I(j){a.open({title:`Excluir projeto “${t.value.name}”?`,details:`Também serão removidos ${un(s.value.length,"ambiente","ambientes")}, ${un(l.value?.totalElements??0,"elemento","elementos")} e todas as avaliações registradas.`,returnFocusTo:j,onAccept:q})}async function q(){await o.projectService.deleteProject(n.projectId),r.push("/projects")}return An(T),(j,re)=>t.value?(B(),P(Re,{key:0},[H(io,{title:t.value.name,parent:"Projetos","back-to":"/projects",description:t.value.description,menu:"",onRename:ve,onDelete:I},{summary:_e(()=>[l.value?(B(),Ce(yi,{key:0,compact:"",summary:l.value,"environment-count":s.value.length},null,8,["summary","environment-count"])):pe("",!0)]),action:_e(()=>[s.value.length?(B(),Ce(Q(Pe),{key:0,class:"button button--outline",to:`/projects/${e.projectId}/status`},{default:_e(()=>[H(Q(dr),{size:18,"aria-hidden":"true"}),re[2]||(re[2]=Te("Status detalhado ",-1))]),_:1},8,["to"])):pe("",!0)]),_:1},8,["title","description"]),u.value?(B(),P("form",{key:0,ref_key:"formCard",ref:g,class:"form-card collection-form",onSubmit:ro(G,["prevent"]),onKeydown:wr(oe,["esc"])},[v("div",Hg,[v("h2",null,ne(x.value),1),C.value?(B(),P("p",Ug," Defina um nome e, se quiser, uma breve descrição para este local. ")):(B(),P("p",Kg,"Use um nome que ajude a identificar este espaço no projeto."))]),v("div",{class:nn({"fields-grid":C.value})},[v("label",Gg,[v("span",null,ne(C.value?"Nome do projeto":"Nome do ambiente"),1),xn(v("input",{ref_key:"nameInput",ref:f,"onUpdate:modelValue":re[0]||(re[0]=L=>c.value=L),required:""},null,512),[[Uo,c.value]])]),C.value?(B(),P("label",Yg,[re[3]||(re[3]=v("span",null,[Te("Descrição "),v("small",null,"(opcional)")],-1)),xn(v("input",{"onUpdate:modelValue":re[1]||(re[1]=L=>d.value=L)},null,512),[[Uo,d.value]])])):pe("",!0)],2),H(Co,{message:m.value},null,8,["message"]),v("div",{class:"form-actions"},[v("button",{class:"button button--ghost",type:"button",onClick:oe}," Cancelar "),re[4]||(re[4]=v("button",{class:"button",type:"submit"},"Salvar",-1))])],544)):pe("",!0),s.value.length?(B(),P("div",Wg,[(B(!0),P(Re,null,Ze(s.value,L=>(B(),P("article",{key:L.id,class:"card card--interactive card--with-action"},[H(Q(Pe),{class:"card__link",to:`/projects/${t.value.id}/environments/${L.id}`},{default:_e(()=>[v("span",Jg,[H(Q(xt),{size:22,"aria-hidden":"true"})]),v("div",Qg,[v("h2",null,ne(L.name),1),v("span",Xg,[v("span",null,ne(Q(un)(L.elementCount,"elemento","elementos")),1),H(go,{status:L.status},null,8,["status"])])])]),_:2},1032,["to"]),H(Pr,{class:"card__action",label:`Ações de ${L.name}`,items:S,onSelect:(Se,Be)=>J(Se,L,Be)},null,8,["label","onSelect"])]))),128))])):u.value?pe("",!0):(B(),Ce(Tn,{key:2,icon:Q(xt),title:"Nenhum ambiente ainda",text:"Adicione entrada, banheiro ou circulação."},{default:_e(()=>[v("button",{class:"button",onClick:F},[H(Q(mr),{size:18,"aria-hidden":"true"}),re[5]||(re[5]=Te("Novo ambiente ",-1))])]),_:1},8,["icon"])),s.value.length&&!u.value?(B(),P("div",Zg,[v("button",{class:"button",onClick:F},[H(Q(mr),{size:18,"aria-hidden":"true"}),re[6]||(re[6]=Te("Novo ambiente ",-1))])])):pe("",!0)],64)):(B(),Ce(Tn,{key:1,icon:Q(xt),title:"Projeto não encontrado",text:"Ele pode ter sido removido."},{default:_e(()=>[H(Q(Pe),{class:"button",to:"/projects"},{default:_e(()=>[...re[7]||(re[7]=[Te("Voltar aos projetos",-1)])]),_:1})]),_:1},8,["icon"]))}},nb={key:0,class:"muted",role:"status"},ob={key:1,class:"project-status","aria-label":"Status por ambiente"},ab={class:"project-status__heading"},rb=["aria-label"],tb={class:"status status--conforme"},ib={class:"status status--nao_conforme"},sb={class:"status status--nao_avaliado"},lb={key:1,class:"project-status__elements"},cb={class:"project-status__element-name"},ub={key:2,class:"muted"},db={__name:"ProjectStatusPage",props:{projectId:String},setup(e){const n=e,o=qe("services"),a=de(null),r=de(null),t=de(!0),s=de("");async function l(){try{a.value=await o.projectService.getProject(n.projectId),a.value&&(r.value=await o.evaluationService.getProjectStatus(n.projectId))}catch(d){s.value=d.message}finally{t.value=!1}}function c(d){return d.status==="nao_avaliado"?`/elements/${d.element.id}`:`/elements/${d.element.id}/evaluation`}return An(l),(d,u)=>t.value?(B(),P("p",nb,"Carregando…")):a.value&&r.value?(B(),P(Re,{key:1},[H(io,{title:"Status do projeto",parent:a.value.name,"back-to":`/projects/${e.projectId}`,description:Q(un)(r.value.environments.length,"ambiente","ambientes")},null,8,["parent","back-to","description"]),H(Co,{message:s.value},null,8,["message"]),r.value.summary.totalElements?(B(),Ce(yi,{key:0,summary:r.value.summary,scope:"projeto"},null,8,["summary"])):pe("",!0),r.value.environments.length?(B(),P("section",ob,[(B(!0),P(Re,null,Ze(r.value.environments,m=>(B(),P("article",{key:m.environment.id,class:"card project-status__environment"},[v("header",ab,[v("div",null,[v("h2",null,ne(m.environment.name),1),v("p",null,ne(Q(un)(m.elements.length,"elemento","elementos")),1)]),H(go,{status:m.summary.overallStatus},null,8,["status"])]),m.elements.length?(B(),P("div",{key:0,class:"project-status__counts","aria-label":`Situação dos elementos de ${m.environment.name}`},[v("span",tb,ne(m.summary.conforme)+" conforme"+ne(m.summary.conforme===1?"":"s"),1),v("span",ib,ne(m.summary.nao_conforme)+" não conforme"+ne(m.summary.nao_conforme===1?"":"s"),1),v("span",sb,ne(m.summary.nao_avaliado)+" pendente"+ne(m.summary.nao_avaliado===1?"":"s"),1)],8,rb)):pe("",!0),m.elements.length?(B(),P("ul",lb,[(B(!0),P(Re,null,Ze(m.elements,f=>(B(),P("li",{key:f.element.id},[H(Q(Pe),{class:"project-status__element",to:c(f)},{default:_e(()=>[v("span",cb,ne(f.element.name),1),H(go,{status:f.status},null,8,["status"]),H(Q(cr),{size:18,class:"chevron","aria-hidden":"true"})]),_:2},1032,["to"])]))),128))])):(B(),P("p",ub,"Nenhum elemento cadastrado neste ambiente.")),H(Q(Pe),{class:"text-button",to:`/projects/${e.projectId}/environments/${m.environment.id}`},{default:_e(()=>[...u[0]||(u[0]=[Te(" Abrir ambiente ",-1)])]),_:1},8,["to"])]))),128))])):(B(),Ce(Tn,{key:2,title:"Nenhum ambiente cadastrado",text:"Crie um ambiente e cadastre elementos para acompanhar o status do projeto."},{default:_e(()=>[H(Q(Pe),{class:"button",to:`/projects/${e.projectId}`},{default:_e(()=>[...u[1]||(u[1]=[Te("Abrir projeto",-1)])]),_:1},8,["to"])]),_:1}))],64)):a.value?(B(),Ce(Tn,{key:2,title:"Não foi possível carregar o status",text:s.value||"Tente novamente mais tarde."},{default:_e(()=>[H(Q(Pe),{class:"button",to:`/projects/${e.projectId}`},{default:_e(()=>[...u[2]||(u[2]=[Te("Abrir projeto",-1)])]),_:1},8,["to"])]),_:1},8,["text"])):(B(),Ce(Tn,{key:3,title:"Projeto não encontrado",text:"Ele pode ter sido removido."},{default:_e(()=>[H(Q(Pe),{class:"button",to:"/projects"},{default:_e(()=>[...u[3]||(u[3]=[Te("Projetos",-1)])]),_:1})]),_:1}))}},mb={class:"collection-form__heading"},pb={class:"fields-grid"},fb={class:"field"},vb={class:"field"},hb={key:1,class:"card-list collection-list"},gb={class:"card__icon"},bb={class:"card__body"},_b={class:"card__meta"},yb={key:3,class:"page-action"},Ab={__name:"ProjectsPage",setup(e){const n=qe("services"),o=qe("confirmPopup"),a=de([]),r=de(""),t=de(""),s=de(null),l=de(""),c=de(!1),d=de(null),u=de(null),m=[{id:"rename",label:"Renomear",icon:Ir},{id:"delete",label:"Excluir",icon:La,danger:!0}];function f(){return mn(()=>{d.value?.focus(),d.value?.select()})}function g(){const G=u.value;u.value=null,mn(()=>{G?.isConnected?G.focus():document.getElementById("conteudo")?.focus?.()})}function S(){c.value=!0}async function x(){const G=await n.projectService.listProjects();a.value=await Promise.all(G.map(async R=>{const J=await n.evaluationService.getProjectStatus(R.id);return{...R,environmentCount:J.environments.length,elementCount:J.summary.totalElements,status:J.summary.overallStatus}}))}function C(G){return[un(G.environmentCount,"ambiente","ambientes"),un(G.elementCount,"elemento","elementos")].join(" · ")}async function T(G){u.value=G?.currentTarget??null,s.value={},r.value="",t.value="",l.value="",await f()}async function y(G,R){u.value=null,s.value=G,r.value=G.name,l.value="",t.value=G.description||"",await f()}function k(){s.value=null,r.value="",t.value="",l.value="",g()}async function F(){try{l.value="",s.value?.id?await n.projectService.updateProject(s.value.id,{name:r.value,description:t.value}):await n.projectService.createProject({name:r.value,description:t.value}),r.value="",t.value="",s.value=null,await x(),g()}catch(G){l.value=G.message}}function ve(G,R,J){G==="rename"?y(R):ce(R,J)}function ce(G,R){o.open({title:`Excluir projeto “${G.name}”?`,details:`Também serão removidos ${un(G.environmentCount,"ambiente","ambientes")}, ${un(G.elementCount,"elemento","elementos")} e todas as avaliações registradas.`,returnFocusTo:R,onAccept:()=>oe(G)})}async function oe(G){await n.projectService.deleteProject(G.id),await x()}return An(x),(G,R)=>(B(),P(Re,null,[H(io,{title:"Projetos",description:"Acompanhe seus locais e avaliações.",helpButton:"",onHelp:S}),s.value?(B(),P("form",{key:0,class:"form-card collection-form",onSubmit:ro(F,["prevent"]),onKeydown:wr(k,["esc"])},[v("div",mb,[v("h2",null,ne(s.value.id?"Dados do projeto":"Novo projeto"),1),R[5]||(R[5]=v("p",null,"Defina um nome e, se quiser, uma breve descrição para este local.",-1))]),v("div",pb,[v("label",fb,[R[6]||(R[6]=v("span",null,"Nome do projeto",-1)),xn(v("input",{ref_key:"nameInput",ref:d,"onUpdate:modelValue":R[0]||(R[0]=J=>r.value=J),required:""},null,512),[[Uo,r.value]])]),v("label",vb,[R[7]||(R[7]=v("span",null,[Te("Descrição "),v("small",null,"(opcional)")],-1)),xn(v("input",{"onUpdate:modelValue":R[1]||(R[1]=J=>t.value=J)},null,512),[[Uo,t.value]])])]),H(Co,{message:l.value},null,8,["message"]),v("div",{class:"form-actions"},[v("button",{class:"button button--ghost",type:"button",onClick:k}," Cancelar "),R[8]||(R[8]=v("button",{class:"button",type:"submit"},"Salvar",-1))])],32)):pe("",!0),a.value.length?(B(),P("div",hb,[(B(!0),P(Re,null,Ze(a.value,J=>(B(),P("article",{key:J.id,class:"card card--interactive card--with-action"},[H(Q(Pe),{class:"card__link",to:`/projects/${J.id}`},{default:_e(()=>[v("span",gb,[H(Q(Gt),{size:22,"aria-hidden":"true"})]),v("div",bb,[v("h2",null,ne(J.name),1),v("span",_b,[v("span",null,ne(C(J)),1),H(go,{status:J.status},null,8,["status"])])])]),_:2},1032,["to"]),H(Pr,{class:"card__action",label:`Ações de ${J.name}`,items:m,onSelect:(te,I)=>ve(te,J,I)},null,8,["label","onSelect"])]))),128))])):s.value?pe("",!0):(B(),Ce(Tn,{key:2,icon:Q(Gt),title:"Comece por um projeto",text:"Organize as avaliações por obra ou local."},{default:_e(()=>[v("button",{class:"button",onClick:R[2]||(R[2]=J=>T(J))},[H(Q(mr),{size:18,"aria-hidden":"true"}),R[9]||(R[9]=Te("Novo projeto ",-1))])]),_:1},8,["icon"])),a.value.length&&!s.value?(B(),P("div",yb,[v("button",{class:"button",onClick:R[3]||(R[3]=J=>T(J))},[H(Q(mr),{size:18,"aria-hidden":"true"}),R[10]||(R[10]=Te("Novo projeto ",-1))])])):pe("",!0),c.value?(B(),Ce(lu,{key:4,onClose:R[4]||(R[4]=J=>c.value=!1)})):pe("",!0)],64))}},Nb={class:"documentation"},xb={class:"documentation__intro"},Bb={class:"documentation__icon"},Tb=["href"],Rb={class:"documentation__section"},Sb={__name:"RulesDocumentationPage",setup(e){const n=ke(()=>"/Extensao-26.2/rule-engine-skill/SKILL.md");return(o,a)=>(B(),P(Re,null,[H(io,{title:"Crie e importe regras",description:"Monte checklists em YAML para avaliar os elementos do seu projeto."}),v("div",Nb,[a[5]||(a[5]=Xd(`<section class="documentation__section"><h2>Formato mínimo de um checklist</h2><p>Cada arquivo é um checklist independente. Os campos obrigatórios são <code>id</code>, <code>nome</code>, <code>parametros</code> (objeto) e <code>regras</code> (lista). YAML e JSON são aceitos.</p><pre class="documentation-code"><code>id: bebedouros
nome: Bebedouros
norma:
  nome: Norma interna
  versao: &quot;1&quot;
parametros:
  altura_bica:
    label: Altura da bica
    definicao: Altura da bica em relação ao piso acabado.
    tipo: number
    unidade: m
    obrigatorio: true
regras:
  - id: altura_maxima
    nome: Altura máxima da bica
    parametro: altura_bica
    operador: &quot;&lt;=&quot;
    valor: 0.90
    referencia: &quot;Norma interna — item 4.2&quot;</code></pre><p class="documentation__note"><code>label</code>, <code>definicao</code>, <code>unidade</code>, <code>norma</code> e <code>referencia</code> são metadados opcionais. <code>definicao</code> é o texto que explica o campo na ajuda da tela de avaliação. <code>obrigatorio: true</code> faz o motor marcar a regra como <code>invalido</code> quando o valor não foi preenchido; num campo não obrigatório, o valor ausente vira <code>nao_avaliado</code>. </p></section><section class="documentation__section"><h2>Tipos de parâmetro</h2><p>Um parâmetro pode ser <code>number</code>, <code>boolean</code> ou <code>select</code> (lista fixa de opções). O <code>tipo</code> é obrigatório e, em <code>select</code>, <code>opcoes</code> precisa listar ao menos uma opção. <code>unidade</code> aceita um texto (<code>m</code>, <code>mm</code>, <code>%</code>) ou <code>{ singular, plural }</code> para contagens.</p><pre class="documentation-code"><code>tipo_piso:
  label: Tipo de piso
  tipo: select
  opcoes: [liso, antiderrapante, irregular]
  obrigatorio: true</code></pre></section><section class="documentation__section"><h2>Tipos de regra</h2><p>Uma regra sem <code>tipo</code> é uma comparação direta — use <code>&gt;=</code>, <code>&lt;=</code>, <code>&gt;</code>, <code>&lt;</code>, <code>==</code> ou <code>!=</code>. O resultado é <code>conforme</code> ou <code>nao_conforme</code>. Toda regra precisa de <code>id</code>, <code>nome</code> e <code>parametro</code> (uma chave existente em <code>parametros</code>); <code>referencia</code> é opcional:</p><pre class="documentation-code"><code>- id: largura_minima
  nome: Largura mínima
  parametro: largura
  operador: &quot;&gt;=&quot;
  valor: 0.80</code></pre><details class="documentation__details"><summary>Verificação manual (<code>tipo: checklist</code>)</summary><p>Para algo que exige julgamento humano. Em parâmetros booleanos, “sim” resulta em <code>conforme</code> e “não” em <code>nao_conforme</code>. Outros tipos de resposta ficam como verificação manual (<code>manual</code>), e nesse caso a regra precisa de <code>mensagem</code> dizendo o que julgar.</p><pre class="documentation-code"><code>- id: rota_livre
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
      mensagem: Avaliar como rampa.</code></pre><p class="documentation__note"> As condições precisam cobrir todos os valores do parâmetro: para números, um ramo final com <code>&gt;</code> ou <code>&gt;=</code>; para booleanos e seleções, um ramo para cada opção. Valor informado que nenhuma condição alcança vira <code>erro</code>, e a importação recusa o conjunto sem essa cobertura. Um parâmetro usado dentro de <code>verificar</code> (aqui, <code>possui_chanfro</code>) também precisa estar declarado em <code>parametros</code>. Se ele ficar sem valor, a comparação ainda é executada e tende a resultar em <code>nao_conforme</code>. </p></details></section><section class="documentation__section"><h2>Resultados possíveis</h2><ul class="documentation__list"><li><code>conforme</code> / <code>nao_conforme</code> — comparação direta, ou condição explícita.</li><li><code>manual</code> — regra do tipo <code>checklist</code> com valor preenchido em campo que não é booleano.</li><li><code>atencao</code> — resultado explícito opcional numa condição de <code>conditional</code>.</li><li><code>nao_avaliado</code> — parâmetro opcional sem valor preenchido.</li><li><code>invalido</code> — parâmetro obrigatório sem valor preenchido, ou valor incompatível com um campo <code>number</code> ou <code>boolean</code>.</li><li><code>erro</code> — regra apontando para parâmetro inexistente, ou valor informado que nenhuma condição cobre.</li></ul></section>`,4)),v("section",xb,[v("span",Bb,[H(Q(bi),{size:24,"aria-hidden":"true"})]),v("div",null,[a[0]||(a[0]=v("h1",null,"Crie suas regras com IA",-1)),v("a",{class:"button button--outline",href:`${n.value}`,download:"SKILL.md"}," Baixar SKILL.md ",8,Tb),a[1]||(a[1]=v("p",null,"Um arquivo de texto com instruções prontas para uma IA (Claude, ChatGPT, Cursor) gerar checklists neste formato a partir do que você descrever. Baixe, cole numa conversa com a IA e peça a regra que precisa — sem aprender YAML.",-1))])]),v("section",Rb,[a[3]||(a[3]=v("h2",null,"Importação",-1)),a[4]||(a[4]=v("p",null,[Te("Escolha um ou mais arquivos YAML/JSON, ou uma pasta com vários checklists — arquivos que não forem "),v("code",null,".yaml"),Te(", "),v("code",null,".yml"),Te(" ou "),v("code",null,".json"),Te(" são ignorados automaticamente. Tudo fica armazenado somente neste navegador.")],-1)),H(Q(Pe),{class:"button",to:"/rules"},{default:_e(()=>[...a[2]||(a[2]=[Te("Ir para importação",-1)])]),_:1})])])],64))}};function Ai(e){return e?.regras?.length??0}function Wt(e){return Object.keys(e?.parametros??{}).length}function wb(e){return(e?.ruleSets??[]).reduce((n,o)=>n+Ai(o),0)}function Eb(e=""){const n=e.replace(/^(\.\.\/|\.\/|\/)+/,"").split("/");return n.length>1?n.slice(0,-1).join("/"):""}function Cb(e,n){const[o]=e,a=o?.norma;return a?.nome?`${a.nome}${a.versao?` · ${a.versao}`:""}`:n.split("/").at(-1)?.replaceAll("-"," ")??"Regras padrão"}function uu(e){const n=new Map;for(const o of e){const a=Eb(o.path)||o.ruleSet.id,r=n.get(a)??{id:a,source:"standard",ruleSets:[]};r.ruleSets.push(o.ruleSet),n.set(a,r)}return[...n.values()].map(o=>({...o,nome:Cb(o.ruleSets,o.id)})).sort((o,a)=>o.nome.localeCompare(a.nome))}function du(e){const n=new Map;for(const o of e){const a=o.grupo,r=a?.id??o.id,t=n.get(r)??{id:r,nome:a?.nome??o.nome,source:"user",ruleSets:[]};t.ruleSets.push(o),n.set(r,t)}return[...n.values()].sort((o,a)=>o.nome.localeCompare(a.nome))}const kb={class:"ruleset-popup__head"},Ib={class:"ruleset-popup__heading"},Pb={id:"ruleset-popup-title",class:"ruleset-popup__title"},Ob={class:"ruleset-popup__meta"},jb={key:0,class:"ruleset-popup__meta"},Db={class:"ruleset-popup__body"},Vb={key:0,class:"ruleset-popup__empty"},Lb={key:1,class:"ruleset-params"},$b={class:"ruleset-param__key"},qb={key:0,class:"ruleset-param__definition"},Mb={class:"ruleset-param__meta"},Fb={key:1,class:"ruleset-param__meta"},zb={class:"ruleset-popup__code"},Hb={class:"ruleset-popup__summary"},Ub={class:"ruleset-code",tabindex:"0"},Kb={__name:"RuleSetPopup",props:{ruleSet:{type:Object,required:!0},yaml:{type:String,default:""},opener:{default:null}},emits:["close"],setup(e,{emit:n}){const o=e,a=n,r=de(null),t=de(null);let s=null,l="",c=!1;const d=ke(()=>{const C=o.ruleSet.norma;return C?.nome?C.versao?`${C.nome} · ${C.versao}`:C.nome:""}),u={number:"Número",boolean:"Sim ou não",select:"Seleção"};function m(C){const T=Or(C.unidade);return[u[C.tipo]??C.tipo,T?`unidade ${T}`:"",C.obrigatorio?"obrigatório":"opcional"].filter(Boolean).join(" · ")}function f(C){c=C.target===C.currentTarget}function g(C){const T=c&&C.target===C.currentTarget;c=!1,T&&a("close")}function S(){return[...r.value?.querySelectorAll("a[href], button:not([disabled]), summary, [tabindex]:not([tabindex='-1'])")??[]].filter(T=>T.getClientRects().length>0)}function x(C){if(C.key==="Escape"){C.preventDefault(),a("close");return}if(C.key!=="Tab")return;const T=S();if(!T.length)return;const y=T[0],k=T[T.length-1],F=document.activeElement;if(!T.includes(F)){C.preventDefault(),(C.shiftKey?k:y).focus();return}C.shiftKey&&F===y?(C.preventDefault(),k.focus()):!C.shiftKey&&F===k&&(C.preventDefault(),y.focus())}return An(async()=>{s=o.opener??(document.activeElement===document.body?null:document.activeElement),l=document.body.style.overflow,document.body.style.overflow="hidden",document.addEventListener("keydown",x),await mn(),t.value?.focus()}),Jo(()=>{document.removeEventListener("keydown",x),document.body.style.overflow=l,s?.isConnected?s.focus?.():document.getElementById("conteudo")?.focus()}),(C,T)=>(B(),Ce(Nr,{to:"body"},[v("div",{class:"ruleset-backdrop",onPointerdown:f,onClick:g},[v("section",{id:"ruleset-popup",ref_key:"panel",ref:r,class:"ruleset-popup",role:"dialog","aria-modal":"true","aria-labelledby":"ruleset-popup-title"},[v("header",kb,[v("div",Ib,[v("h2",Pb,ne(e.ruleSet.nome),1),v("p",Ob,[v("code",null,ne(e.ruleSet.id),1),v("span",null,ne(Q(Ai)(e.ruleSet))+" regras · "+ne(Q(Wt)(e.ruleSet))+" campos",1)]),d.value?(B(),P("p",jb,ne(d.value),1)):pe("",!0)]),v("button",{ref_key:"closeButton",ref:t,class:"ruleset-popup__close",type:"button","aria-label":"Fechar",onClick:T[0]||(T[0]=y=>a("close"))},[H(Q(u0),{size:20,"aria-hidden":"true"})],512)]),v("div",Db,[T[2]||(T[2]=v("h3",{class:"ruleset-popup__section"},"Parâmetros",-1)),Q(Wt)(e.ruleSet)?(B(),P("dl",Lb,[(B(!0),P(Re,null,Ze(e.ruleSet.parametros,(y,k)=>(B(),P("div",{key:k,class:"ruleset-param"},[v("dt",null,[v("span",null,ne(y.label??k),1),v("code",$b,ne(k),1)]),v("dd",null,[y.definicao?(B(),P("span",qb,ne(y.definicao),1)):pe("",!0),v("span",Mb,ne(m(y)),1),y.opcoes?.length?(B(),P("span",Fb,"Opções: "+ne(y.opcoes.join(", ")),1)):pe("",!0)])]))),128))])):(B(),P("span",Vb,"Este checklist não declara parâmetros.")),v("details",zb,[v("summary",Hb,[T[1]||(T[1]=v("span",null,"YAML",-1)),H(Q(Mv),{size:20,"aria-hidden":"true"})]),v("pre",Ub,[v("code",null,ne(e.yaml),1)])])])],512)],32)]))}},Gb={key:0,class:"muted",role:"status"},Yb={class:"rules-section rules-section--first"},Wb={class:"card-list ruleset-list"},Jb={class:"ruleset-card__heading"},Qb=["onClick"],Xb={class:"ruleset-card__text"},Zb={class:"ruleset-card__title"},e_={class:"ruleset-card__meta"},n_={key:0,class:"ruleset-card__actions"},o_=["onClick"],a_=["onClick"],r_=["onClick"],t_={__name:"RulesGroupPage",props:{source:String,groupId:String},setup(e){const n=e,o=qe("services"),a=qe("builtInRuleSets"),r=qe("confirmPopup"),t=de([]),s=de(!0),l=de(""),c=de(null),d=de(null),u=ke(()=>t.value.find(T=>T.source===n.source&&T.id===n.groupId)),m=ke(()=>c.value?Ep(c.value):"");function f(T,y){d.value=y.currentTarget,c.value=T}async function g(){s.value=!0;try{const T=await o.ruleSetService.list();t.value=[...uu(a),...du(T)]}finally{s.value=!1}}function S(T,y){r.confirm(y,`Excluir "${T.nome}"? Esta ação não pode ser desfeita.`,()=>x(T))}async function x(T){l.value="";try{await o.ruleSetService.delete(T.id),await g()}catch(y){l.value=y.message}}async function C(T,y){try{const k=y==="json"?await o.ruleSetService.exportByIdToJson(T.id):await o.ruleSetService.exportByIdToYaml(T.id),F=y==="json"?"application/json":"text/yaml",ve=document.createElement("a");ve.href=URL.createObjectURL(new Blob([k],{type:F})),ve.download=`${T.id}.${y}`,ve.click(),URL.revokeObjectURL(ve.href)}catch(k){l.value=k.message}}return An(g),(T,y)=>s.value?(B(),P("p",Gb,"Carregando…")):u.value?(B(),P(Re,{key:1},[H(io,{title:u.value.nome,description:`${u.value.ruleSets.length} checklists que compõem este conjunto.`},null,8,["title","description"]),H(Co,{message:l.value},null,8,["message"]),v("section",Yb,[y[1]||(y[1]=v("h2",null,"Checklists",-1)),y[2]||(y[2]=v("p",{class:"rules-section__hint"},"Toque em um checklist para ver os parâmetros e o YAML.",-1)),v("div",Wb,[(B(!0),P(Re,null,Ze(u.value.ruleSets,k=>(B(),P("article",{key:k.id,class:"card ruleset-card"},[v("h3",Jb,[v("button",{type:"button",class:"ruleset-card__trigger","aria-haspopup":"dialog",onClick:F=>f(k,F)},[v("span",Xb,[v("span",Zb,ne(k.nome),1),v("span",e_,[v("code",null,ne(k.id),1),v("span",null,ne(Q(Ai)(k))+" regras · "+ne(Q(Wt)(k))+" campos",1)])]),H(Q(cr),{size:20,class:"chevron","aria-hidden":"true"})],8,Qb)]),e.source==="user"?(B(),P("div",n_,[v("button",{class:"button button--outline",onClick:F=>C(k,"yaml")},"Exportar YAML",8,o_),v("button",{class:"button button--outline",onClick:F=>C(k,"json")},"Exportar JSON",8,a_),v("button",{class:"icon-button icon-button--danger",title:"Excluir","aria-label":"Excluir",onClick:F=>S(k,F)},[H(Q(La),{size:18,"aria-hidden":"true"})],8,r_)])):pe("",!0)]))),128))])]),c.value?(B(),Ce(Kb,{key:0,"rule-set":c.value,yaml:m.value,opener:d.value,onClose:y[0]||(y[0]=k=>c.value=null)},null,8,["rule-set","yaml","opener"])):pe("",!0)],64)):(B(),Ce(Tn,{key:2,title:"Conjunto não encontrado",text:"Ele pode ter sido removido."}))}},mu=/\.(json|ya?ml)$/i;function i_(e=""){return mu.test(e)}function s_(e=[]){const n=e.filter(o=>i_(o.name));return{importable:n,skipped:e.length-n.length}}function l_(e,{createId:n=()=>crypto.randomUUID()}={}){const o=e[0]?.webkitRelativePath?.split("/")[0];return{id:`importado-${o||n()}`,nome:o||(e.length===1?e[0].name.replace(mu,""):"Regras importadas")}}function c_({total:e,failures:n=[],skipped:o=0}){const a=[];return n.length&&a.push(e===1?n[0]:`${n.length} de ${e} arquivo(s) não importado(s) — ${n.join("; ")}`),o&&a.push(`${o} arquivo(s) ignorado(s) por não serem .json/.yaml/.yml.`),a.join(" ")}const u_={class:"rules-actions"},d_={class:"button import-button"},m_=["disabled"],p_={class:"button button--outline import-button"},f_=["disabled"],v_={key:0,class:"muted",role:"status"},h_={key:1,class:"muted",role:"status"},g_={key:2,class:"rules-library"},b_={class:"rules-section rules-section--first rules-library__section"},__={class:"card-list rules-library__list"},y_={class:"card__icon"},A_={class:"rules-section rules-library__section"},N_={key:0,class:"card-list rules-library__list"},x_={class:"card__icon"},B_={__name:"RulesLibraryPage",setup(e){const n=qe("services"),o=qe("builtInRuleSets"),a=de([]),r=de(!0),t=de(!1),s=de(""),l=ke(()=>a.value.filter(f=>f.source==="standard")),c=ke(()=>a.value.filter(f=>f.source==="user"));async function d(){r.value=!0;try{const f=await n.ruleSetService.list();a.value=[...uu(o),...du(f)]}finally{r.value=!1}}function u(f){return`/rules/${encodeURIComponent(f.source)}/${encodeURIComponent(f.id)}`}async function m(f){const g=[...f.target.files??[]];if(!g.length)return;const{importable:S,skipped:x}=s_(g);if(!S.length){s.value="Nenhum arquivo .json, .yaml ou .yml encontrado.",f.target.value="";return}s.value="",t.value=!0;try{const C=[];for(const y of S)try{C.push({name:y.name,content:await y.text()})}catch(k){C.push({name:y.name,error:k.message})}const{failures:T}=await n.ruleSetService.importFromEntries(C,l_(S));s.value=c_({total:S.length,failures:T,skipped:x}),await d()}finally{t.value=!1,f.target.value=""}}return An(d),(f,g)=>(B(),P(Re,null,[H(io,{class:"rules-page-header",title:"Conjuntos de regras",description:"Cada pasta ou importação é exibida como um único conjunto."},{action:_e(()=>[v("div",u_,[v("label",d_,[g[0]||(g[0]=Te(" Importar arquivos ",-1)),v("input",{type:"file",accept:".json,.yaml,.yml",multiple:"",disabled:t.value,onChange:m},null,40,m_)]),v("label",p_,[g[1]||(g[1]=Te(" Importar pasta ",-1)),v("input",{type:"file",accept:".json,.yaml,.yml",webkitdirectory:"",disabled:t.value,onChange:m},null,40,f_)]),H(Q(Pe),{class:"rules-help-link",to:"/rules/documentation"},{default:_e(()=>[...g[2]||(g[2]=[Te("Como criar regras",-1)])]),_:1})])]),_:1}),t.value?(B(),P("p",v_,"Importando…")):pe("",!0),H(Co,{message:s.value},null,8,["message"]),r.value?(B(),P("p",h_,"Carregando…")):(B(),P("div",g_,[v("section",b_,[g[3]||(g[3]=v("h2",null,"Regras padrão",-1)),v("div",__,[(B(!0),P(Re,null,Ze(l.value,S=>(B(),Ce(Q(Pe),{key:S.id,class:"card card--interactive rules-card",to:u(S)},{default:_e(()=>[v("span",y_,[H(Q(dr),{size:22,"aria-hidden":"true"})]),v("div",null,[v("h2",null,ne(S.nome),1),v("p",null,ne(S.ruleSets.length)+" checklists · "+ne(Q(wb)(S))+" regras",1)]),H(Q(cr),{size:20,class:"chevron","aria-hidden":"true"})]),_:2},1032,["to"]))),128))])]),v("section",A_,[g[4]||(g[4]=v("h2",null,"Suas regras",-1)),c.value.length?(B(),P("div",N_,[(B(!0),P(Re,null,Ze(c.value,S=>(B(),Ce(Q(Pe),{key:S.id,class:"card card--interactive rules-card",to:u(S)},{default:_e(()=>[v("span",x_,[H(Q(dr),{size:22,"aria-hidden":"true"})]),v("div",null,[v("h2",null,ne(S.nome),1),v("p",null,ne(S.ruleSets.length)+" checklists",1)]),H(Q(cr),{size:20,class:"chevron","aria-hidden":"true"})]),_:2},1032,["to"]))),128))])):(B(),Ce(Tn,{key:1,title:"Nenhum conjunto importado",text:"Importe arquivos ou uma pasta para começar."}))])]))],64))}},T_=[{path:"/",redirect:"/projects"},{path:"/projects",name:"projects",component:Ab},{path:"/projects/:projectId",name:"project-detail",component:eb,props:!0},{path:"/projects/:projectId/status",name:"project-status",component:db,props:!0},{path:"/projects/:projectId/environments/:environmentId",name:"project-environment",component:wg,props:!0},{path:"/elements/new",name:"element-new",component:Bt,meta:{hideBottomNav:!0}},{path:"/elements/:elementId",name:"element-detail",component:Bt,props:!0},{path:"/elements/:elementId/evaluation",name:"element-evaluation",component:fl,props:!0},{path:"/quick-evaluation",name:"quick-evaluation",component:Bt,props:{quick:!0}},{path:"/quick-evaluation/result",name:"quick-evaluation-result",component:fl,props:{quick:!0}},{path:"/rules",name:"rules",component:B_},{path:"/rules/documentation",name:"rules-documentation",component:Sb},{path:"/rules/:source/:groupId",name:"rules-group",component:t_,props:!0},{path:"/:pathMatch(.*)*",redirect:"/projects"}],pu=wv({history:lv("/Extensao-26.2/"),routes:T_}),R_={__name:"App",setup(e){const n=de(null),o=de(!1),a=gi();return da("confirmPopup",{open:r=>n.value?.open(r),confirm:(r,t,s)=>n.value?.confirm(r,t,s)}),An(async()=>{await pu.isReady();const r=window.matchMedia?.("(display-mode: standalone)")?.matches||navigator.standalone===!0,t=localStorage.getItem("welcomePopupSeen");a.path==="/projects"&&!r&&!t&&(localStorage.setItem("welcomePopupSeen","true"),o.value=!0)}),(r,t)=>(B(),P(Re,null,[H(b0,null,{default:_e(()=>[H(Q(su))]),_:1}),H(B0,{ref_key:"confirmPopup",ref:n},null,512),o.value?(B(),Ce(lu,{key:0,onClose:t[0]||(t[0]=s=>o.value=!1)})):pe("",!0)],64))}};async function S_(){const[e,n]=await Promise.all([Ip(),Bf()]);zm(R_).provide("services",e).provide("builtInRuleSets",n).use(pu).mount("#app"),Wm({immediate:!0})}S_().catch(e=>{document.querySelector("#app").innerHTML=`<main class="fatal-error"><h1>Não foi possível abrir o aplicativo</h1><p>${e.message}</p></main>`});
