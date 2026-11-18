(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))a(r);new MutationObserver(r=>{for(const t of r)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function o(r){const t={};return r.integrity&&(t.integrity=r.integrity),r.referrerPolicy&&(t.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?t.credentials="include":r.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(r){if(r.ep)return;r.ep=!0;const t=o(r);fetch(r.href,t)}})();function Dt(e){const n=Object.create(null);for(const o of e.split(","))n[o]=1;return o=>o in n}const He={},Oo=[],Hn=()=>{},Zs=()=>!1,ir=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),sr=e=>e.startsWith("onUpdate:"),Ze=Object.assign,Lt=(e,n)=>{const o=e.indexOf(n);o>-1&&e.splice(o,1)},Jc=Object.prototype.hasOwnProperty,$e=(e,n)=>Jc.call(e,n),xe=Array.isArray,jo=e=>Sa(e)==="[object Map]",Ko=e=>Sa(e)==="[object Set]",ui=e=>Sa(e)==="[object Date]",Ee=e=>typeof e=="function",Ge=e=>typeof e=="string",jn=e=>typeof e=="symbol",Me=e=>e!==null&&typeof e=="object",el=e=>(Me(e)||Ee(e))&&Ee(e.then)&&Ee(e.catch),nl=Object.prototype.toString,Sa=e=>nl.call(e),Qc=e=>Sa(e).slice(8,-1),ol=e=>Sa(e)==="[object Object]",qt=e=>Ge(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,ta=Dt(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),lr=e=>{const n=Object.create(null);return(o=>n[o]||(n[o]=e(o)))},Xc=/-\w/g,vn=lr(e=>e.replace(Xc,n=>n.slice(1).toUpperCase())),Zc=/\B([A-Z])/g,go=lr(e=>e.replace(Zc,"-$1").toLowerCase()),cr=lr(e=>e.charAt(0).toUpperCase()+e.slice(1)),Fa=lr(e=>e?`on${cr(e)}`:""),Fn=(e,n)=>!Object.is(e,n),za=(e,...n)=>{for(let o=0;o<e.length;o++)e[o](...n)},al=(e,n,o,a=!1)=>{Object.defineProperty(e,n,{configurable:!0,enumerable:!1,writable:a,value:o})},ur=e=>{const n=parseFloat(e);return isNaN(n)?e:n},eu=e=>{const n=Ge(e)?Number(e):NaN;return isNaN(n)?e:n};let di;const dr=()=>di||(di=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function mr(e){if(xe(e)){const n={};for(let o=0;o<e.length;o++){const a=e[o],r=Ge(a)?ru(a):mr(a);if(r)for(const t in r)n[t]=r[t]}return n}else if(Ge(e)||Me(e))return e}const nu=/;(?![^(]*\))/g,ou=/:([^]+)/,au=/\/\*[^]*?\*\//g;function ru(e){const n={};return e.replace(au,"").split(nu).forEach(o=>{if(o){const a=o.split(ou);a.length>1&&(n[a[0].trim()]=a[1].trim())}}),n}function rn(e){let n="";if(Ge(e))n=e;else if(xe(e))for(let o=0;o<e.length;o++){const a=rn(e[o]);a&&(n+=a+" ")}else if(Me(e))for(const o in e)e[o]&&(n+=o+" ");return n.trim()}function kn(e){if(!e)return null;let{class:n,style:o}=e;return n&&!Ge(n)&&(e.class=rn(n)),o&&(e.style=mr(o)),e}const tu="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",iu=Dt(tu);function rl(e){return!!e||e===""}function su(e,n){if(e.length!==n.length)return!1;let o=!0;for(let a=0;o&&a<e.length;a++)o=Go(e[a],n[a]);return o}function Go(e,n){if(e===n)return!0;let o=ui(e),a=ui(n);if(o||a)return o&&a?e.getTime()===n.getTime():!1;if(o=jn(e),a=jn(n),o||a)return e===n;if(o=xe(e),a=xe(n),o||a)return o&&a?su(e,n):!1;if(o=Me(e),a=Me(n),o||a){if(!o||!a)return!1;const r=Object.keys(e).length,t=Object.keys(n).length;if(r!==t)return!1;for(const s in e){const l=e.hasOwnProperty(s),c=n.hasOwnProperty(s);if(l&&!c||!l&&c||!Go(e[s],n[s]))return!1}}return String(e)===String(n)}function $t(e,n){return e.findIndex(o=>Go(o,n))}const tl=e=>!!(e&&e.__v_isRef===!0),ce=e=>Ge(e)?e:e==null?"":xe(e)||Me(e)&&(e.toString===nl||!Ee(e.toString))?tl(e)?ce(e.value):JSON.stringify(e,il,2):String(e),il=(e,n)=>tl(n)?il(e,n.value):jo(n)?{[`Map(${n.size})`]:[...n.entries()].reduce((o,[a,r],t)=>(o[Tr(a,t)+" =>"]=r,o),{})}:Ko(n)?{[`Set(${n.size})`]:[...n.values()].map(o=>Tr(o))}:jn(n)?Tr(n):Me(n)&&!xe(n)&&!ol(n)?String(n):n,Tr=(e,n="")=>{var o;return jn(e)?`Symbol(${(o=e.description)!=null?o:n})`:e};let en;class lu{constructor(n=!1){this.detached=n,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this._warnOnRun=!0,this.__v_skip=!0,!n&&en&&(en.active?(this.parent=en,this.index=(en.scopes||(en.scopes=[])).push(this)-1):(this._active=!1,this._warnOnRun=!1))}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let n,o;if(this.scopes){const a=this.scopes.slice();for(n=0,o=a.length;n<o;n++)a[n].pause()}for(n=0,o=this.effects.length;n<o;n++)this.effects[n].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let n,o;if(this.scopes){const r=this.scopes.slice();for(n=0,o=r.length;n<o;n++)r[n].resume()}const a=this.effects.slice();for(n=0,o=a.length;n<o;n++)a[n].resume()}}run(n){if(this._active){const o=en;try{return en=this,n()}finally{en=o}}}on(){++this._on===1&&(this.prevScope=en,en=this)}off(){if(this._on>0&&--this._on===0){if(en===this)en=this.prevScope;else{let n=en;for(;n;){if(n.prevScope===this){n.prevScope=this.prevScope;break}n=n.prevScope}}this.prevScope=void 0}}stop(n){if(this._active){this._active=!1;let o,a;for(o=0,a=this.effects.length;o<a;o++)this.effects[o].stop();for(this.effects.length=0,o=0,a=this.cleanups.length;o<a;o++)this.cleanups[o]();if(this.cleanups.length=0,this.scopes){const r=this.scopes.slice();for(o=0,a=r.length;o<a;o++)r[o].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!n){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0}}}function cu(){return en}let Ke;const Rr=new WeakSet;class sl{constructor(n){this.fn=n,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,en&&(en.active?en.effects.push(this):this.flags&=-2)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Rr.has(this)&&(Rr.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||cl(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,mi(this),ul(this);const n=Ke,o=On;Ke=this,On=!0;try{return this.fn()}finally{dl(this),Ke=n,On=o,this.flags&=-3}}stop(){if(this.flags&1){for(let n=this.deps;n;n=n.nextDep)zt(n);this.deps=this.depsTail=void 0,mi(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Rr.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){ht(this)&&this.run()}get dirty(){return ht(this)}}let ll=0,ia,sa;function cl(e,n=!1){if(e.flags|=8,n){e.next=sa,sa=e;return}e.next=ia,ia=e}function Mt(){ll++}function Ft(){if(--ll>0)return;if(sa){let n=sa;for(sa=void 0;n;){const o=n.next;n.next=void 0,n.flags&=-9,n=o}}let e;for(;ia;){let n=ia;for(ia=void 0;n;){const o=n.next;if(n.next=void 0,n.flags&=-9,n.flags&1)try{n.trigger()}catch(a){e||(e=a)}n=o}}if(e)throw e}function ul(e){for(let n=e.deps;n;n=n.nextDep)n.version=-1,n.prevActiveLink=n.dep.activeLink,n.dep.activeLink=n}function dl(e){let n,o=e.depsTail,a=o;for(;a;){const r=a.prevDep;a.version===-1?(a===o&&(o=r),zt(a),uu(a)):n=a,a.dep.activeLink=a.prevActiveLink,a.prevActiveLink=void 0,a=r}e.deps=n,e.depsTail=o}function ht(e){for(let n=e.deps;n;n=n.nextDep)if(n.dep.version!==n.version||n.dep.computed&&(ml(n.dep.computed)||n.dep.version!==n.version))return!0;return!!e._dirty}function ml(e){if(e.flags&4&&!(e.flags&16)||(e.flags&=-17,e.globalVersion===fa)||(e.globalVersion=fa,!e.isSSR&&e.flags&128&&(!e.deps&&!e._dirty||!ht(e))))return;e.flags|=2;const n=e.dep,o=Ke,a=On;Ke=e,On=!0;try{ul(e);const r=e.fn(e._value);(n.version===0||Fn(r,e._value))&&(e.flags|=128,e._value=r,n.version++)}catch(r){throw n.version++,r}finally{Ke=o,On=a,dl(e),e.flags&=-3}}function zt(e,n=!1){const{dep:o,prevSub:a,nextSub:r}=e;if(a&&(a.nextSub=r,e.prevSub=void 0),r&&(r.prevSub=a,e.nextSub=void 0),o.subs===e&&(o.subs=a,!a&&o.computed)){o.computed.flags&=-5;for(let t=o.computed.deps;t;t=t.nextDep)zt(t,!0)}!n&&!--o.sc&&o.map&&o.map.delete(o.key)}function uu(e){const{prevDep:n,nextDep:o}=e;n&&(n.nextDep=o,e.prevDep=void 0),o&&(o.prevDep=n,e.nextDep=void 0)}let On=!0;const pl=[];function no(){pl.push(On),On=!1}function oo(){const e=pl.pop();On=e===void 0?!0:e}function mi(e){const{cleanup:n}=e;if(e.cleanup=void 0,n){const o=Ke;Ke=void 0;try{n()}finally{Ke=o}}}let fa=0;class du{constructor(n,o){this.sub=n,this.dep=o,this.version=o.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Ht{constructor(n){this.computed=n,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(n){if(!Ke||!On||Ke===this.computed)return;let o=this.activeLink;if(o===void 0||o.sub!==Ke)o=this.activeLink=new du(Ke,this),Ke.deps?(o.prevDep=Ke.depsTail,Ke.depsTail.nextDep=o,Ke.depsTail=o):Ke.deps=Ke.depsTail=o,fl(o);else if(o.version===-1&&(o.version=this.version,o.nextDep)){const a=o.nextDep;a.prevDep=o.prevDep,o.prevDep&&(o.prevDep.nextDep=a),o.prevDep=Ke.depsTail,o.nextDep=void 0,Ke.depsTail.nextDep=o,Ke.depsTail=o,Ke.deps===o&&(Ke.deps=a)}return o}trigger(n){this.version++,fa++,this.notify(n)}notify(n){Mt();try{for(let o=this.subs;o;o=o.prevSub)o.sub.notify()&&o.sub.dep.notify()}finally{Ft()}}}function fl(e){if(e.dep.sc++,e.sub.flags&4){const n=e.dep.computed;if(n&&!e.dep.subs){n.flags|=20;for(let a=n.deps;a;a=a.nextDep)fl(a)}const o=e.dep.subs;o!==e&&(e.prevSub=o,o&&(o.nextSub=e)),e.dep.subs=e}}const vt=new WeakMap,So=Symbol(""),gt=Symbol(""),ha=Symbol("");function tn(e,n,o){if(On&&Ke){let a=vt.get(e);a||vt.set(e,a=new Map);let r=a.get(o);r||(a.set(o,r=new Ht),r.map=a,r.key=o),r.track()}}function Qn(e,n,o,a,r,t){const s=vt.get(e);if(!s){fa++;return}const l=c=>{c&&c.trigger()};if(Mt(),n==="clear")s.forEach(l);else{const c=xe(e),d=c&&qt(o);if(c&&o==="length"){const u=Number(a);s.forEach((m,f)=>{(f==="length"||f===ha||!jn(f)&&f>=u)&&l(m)})}else switch((o!==void 0||s.has(void 0))&&l(s.get(o)),d&&l(s.get(ha)),n){case"add":c?d&&l(s.get("length")):(l(s.get(So)),jo(e)&&l(s.get(gt)));break;case"delete":c||(l(s.get(So)),jo(e)&&l(s.get(gt)));break;case"set":jo(e)&&l(s.get(So));break}}Ft()}function Eo(e){const n=Le(e);return n===e?n:(tn(n,"iterate",ha),Sn(e)?n:n.map(Vn))}function pr(e){return tn(e=Le(e),"iterate",ha),e}function $n(e,n){return ao(e)?qo(wo(e)?Vn(n):n):Vn(n)}const mu={__proto__:null,[Symbol.iterator](){return Sr(this,Symbol.iterator,e=>$n(this,e))},concat(...e){return Eo(this).concat(...e.map(n=>xe(n)?Eo(n):n))},entries(){return Sr(this,"entries",e=>(e[1]=$n(this,e[1]),e))},every(e,n){return Kn(this,"every",e,n,void 0,arguments)},filter(e,n){return Kn(this,"filter",e,n,o=>o.map(a=>$n(this,a)),arguments)},find(e,n){return Kn(this,"find",e,n,o=>$n(this,o),arguments)},findIndex(e,n){return Kn(this,"findIndex",e,n,void 0,arguments)},findLast(e,n){return Kn(this,"findLast",e,n,o=>$n(this,o),arguments)},findLastIndex(e,n){return Kn(this,"findLastIndex",e,n,void 0,arguments)},forEach(e,n){return Kn(this,"forEach",e,n,void 0,arguments)},includes(...e){return wr(this,"includes",e)},indexOf(...e){return wr(this,"indexOf",e)},join(e){return Eo(this).join(e)},lastIndexOf(...e){return wr(this,"lastIndexOf",e)},map(e,n){return Kn(this,"map",e,n,void 0,arguments)},pop(){return Jo(this,"pop")},push(...e){return Jo(this,"push",e)},reduce(e,...n){return pi(this,"reduce",e,n)},reduceRight(e,...n){return pi(this,"reduceRight",e,n)},shift(){return Jo(this,"shift")},some(e,n){return Kn(this,"some",e,n,void 0,arguments)},splice(...e){return Jo(this,"splice",e)},toReversed(){return Eo(this).toReversed()},toSorted(e){return Eo(this).toSorted(e)},toSpliced(...e){return Eo(this).toSpliced(...e)},unshift(...e){return Jo(this,"unshift",e)},values(){return Sr(this,"values",e=>$n(this,e))}};function Sr(e,n,o){const a=pr(e),r=a[n]();return a!==e&&!Sn(e)&&(r._next=r.next,r.next=()=>{const t=r._next();return t.done||(t.value=o(t.value)),t}),r}const pu=Array.prototype;function Kn(e,n,o,a,r,t){const s=pr(e),l=s!==e&&!Sn(e),c=s[n];if(c!==pu[n]){const m=c.apply(e,t);return l?Vn(m):m}let d=o;s!==e&&(l?d=function(m,f){return o.call(this,$n(e,m),f,e)}:o.length>2&&(d=function(m,f){return o.call(this,m,f,e)}));const u=c.call(s,d,a);return l&&r?r(u):u}function pi(e,n,o,a){const r=pr(e),t=r!==e&&!Sn(e);let s=o,l=!1;r!==e&&(t?(l=a.length===0,s=function(d,u,m){return l&&(l=!1,d=$n(e,d)),o.call(this,d,$n(e,u),m,e)}):o.length>3&&(s=function(d,u,m){return o.call(this,d,u,m,e)}));const c=r[n](s,...a);return l?$n(e,c):c}function wr(e,n,o){const a=Le(e);tn(a,"iterate",ha);const r=a[n](...o);return(r===-1||r===!1)&&Gt(o[0])?(o[0]=Le(o[0]),a[n](...o)):r}function Jo(e,n,o=[]){no(),Mt();const a=Le(e)[n].apply(e,o);return Ft(),oo(),a}const fu=Dt("__proto__,__v_isRef,__isVue"),hl=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(jn));function hu(e){jn(e)||(e=String(e));const n=Le(this);return tn(n,"has",e),n.hasOwnProperty(e)}class vl{constructor(n=!1,o=!1){this._isReadonly=n,this._isShallow=o}get(n,o,a){if(o==="__v_skip")return n.__v_skip;const r=this._isReadonly,t=this._isShallow;if(o==="__v_isReactive")return!r;if(o==="__v_isReadonly")return r;if(o==="__v_isShallow")return t;if(o==="__v_raw")return a===(r?t?Tu:yl:t?_l:bl).get(n)||Object.getPrototypeOf(n)===Object.getPrototypeOf(a)?n:void 0;const s=xe(n);if(!r){let c;if(s&&(c=mu[o]))return c;if(o==="hasOwnProperty")return hu}const l=Reflect.get(n,o,cn(n)?n:a);if((jn(o)?hl.has(o):fu(o))||(r||tn(n,"get",o),t))return l;if(cn(l)){const c=s&&qt(o)?l:l.value;return r&&Me(c)?_t(c):c}return Me(l)?r?_t(l):wa(l):l}}class gl extends vl{constructor(n=!1){super(!1,n)}set(n,o,a,r){let t=n[o];const s=xe(n)&&qt(o);if(!this._isShallow){const d=ao(t);if(!Sn(a)&&!ao(a)&&(t=Le(t),a=Le(a)),!s&&cn(t)&&!cn(a))return d||(t.value=a),!0}const l=s?Number(o)<n.length:$e(n,o),c=Reflect.set(n,o,a,cn(n)?n:r);return n===Le(r)&&c&&(l?Fn(a,t)&&Qn(n,"set",o,a):Qn(n,"add",o,a)),c}deleteProperty(n,o){const a=$e(n,o);n[o];const r=Reflect.deleteProperty(n,o);return r&&a&&Qn(n,"delete",o,void 0),r}has(n,o){const a=Reflect.has(n,o);return(!jn(o)||!hl.has(o))&&tn(n,"has",o),a}ownKeys(n){return tn(n,"iterate",xe(n)?"length":So),Reflect.ownKeys(n)}}class vu extends vl{constructor(n=!1){super(!0,n)}set(n,o){return!0}deleteProperty(n,o){return!0}}const gu=new gl,bu=new vu,_u=new gl(!0);const bt=e=>e,ja=e=>Reflect.getPrototypeOf(e);function yu(e,n,o){return function(...a){const r=this.__v_raw,t=Le(r),s=jo(t),l=e==="entries"||e===Symbol.iterator&&s,c=e==="keys"&&s,d=r[e](...a),u=o?bt:n?qo:Vn;return!n&&tn(t,"iterate",c?gt:So),Ze(Object.create(d),{next(){const{value:m,done:f}=d.next();return f?{value:m,done:f}:{value:l?[u(m[0]),u(m[1])]:u(m),done:f}}})}}function Va(e){return function(...n){return e==="delete"?!1:e==="clear"?void 0:this}}function Au(e,n){const o={get(r){const t=this.__v_raw,s=Le(t),l=Le(r);e||(Fn(r,l)&&tn(s,"get",r),tn(s,"get",l));const{has:c}=ja(s),d=n?bt:e?qo:Vn;if(c.call(s,r))return d(t.get(r));if(c.call(s,l))return d(t.get(l));t!==s&&t.get(r)},get size(){const r=this.__v_raw;return!e&&tn(Le(r),"iterate",So),r.size},has(r){const t=this.__v_raw,s=Le(t),l=Le(r);return e||(Fn(r,l)&&tn(s,"has",r),tn(s,"has",l)),r===l?t.has(r):t.has(r)||t.has(l)},forEach(r,t){const s=this,l=s.__v_raw,c=Le(l),d=n?bt:e?qo:Vn;return!e&&tn(c,"iterate",So),l.forEach((u,m)=>r.call(t,d(u),d(m),s))}};return Ze(o,e?{add:Va("add"),set:Va("set"),delete:Va("delete"),clear:Va("clear")}:{add(r){const t=Le(this),s=ja(t),l=Le(r),c=!n&&!Sn(r)&&!ao(r)?l:r;return s.has.call(t,c)||Fn(r,c)&&s.has.call(t,r)||Fn(l,c)&&s.has.call(t,l)||(t.add(c),Qn(t,"add",c,c)),this},set(r,t){!n&&!Sn(t)&&!ao(t)&&(t=Le(t));const s=Le(this),{has:l,get:c}=ja(s);let d=l.call(s,r);d||(r=Le(r),d=l.call(s,r));const u=c.call(s,r);return s.set(r,t),d?Fn(t,u)&&Qn(s,"set",r,t):Qn(s,"add",r,t),this},delete(r){const t=Le(this),{has:s,get:l}=ja(t);let c=s.call(t,r);c||(r=Le(r),c=s.call(t,r)),l&&l.call(t,r);const d=t.delete(r);return c&&Qn(t,"delete",r,void 0),d},clear(){const r=Le(this),t=r.size!==0,s=r.clear();return t&&Qn(r,"clear",void 0,void 0),s}}),["keys","values","entries",Symbol.iterator].forEach(r=>{o[r]=yu(r,e,n)}),o}function Ut(e,n){const o=Au(e,n);return(a,r,t)=>r==="__v_isReactive"?!e:r==="__v_isReadonly"?e:r==="__v_raw"?a:Reflect.get($e(o,r)&&r in a?o:a,r,t)}const Nu={get:Ut(!1,!1)},xu={get:Ut(!1,!0)},Bu={get:Ut(!0,!1)};const bl=new WeakMap,_l=new WeakMap,yl=new WeakMap,Tu=new WeakMap;function Ru(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function wa(e){return ao(e)?e:Kt(e,!1,gu,Nu,bl)}function Al(e){return Kt(e,!1,_u,xu,_l)}function _t(e){return Kt(e,!0,bu,Bu,yl)}function Kt(e,n,o,a,r){if(!Me(e)||e.__v_raw&&!(n&&e.__v_isReactive)||e.__v_skip||!Object.isExtensible(e))return e;const t=r.get(e);if(t)return t;const s=Ru(Qc(e));if(s===0)return e;const l=new Proxy(e,s===2?a:o);return r.set(e,l),l}function wo(e){return ao(e)?wo(e.__v_raw):!!(e&&e.__v_isReactive)}function ao(e){return!!(e&&e.__v_isReadonly)}function Sn(e){return!!(e&&e.__v_isShallow)}function Gt(e){return e?!!e.__v_raw:!1}function Le(e){const n=e&&e.__v_raw;return n?Le(n):e}function Su(e){return!$e(e,"__v_skip")&&Object.isExtensible(e)&&al(e,"__v_skip",!0),e}const Vn=e=>Me(e)?wa(e):e,qo=e=>Me(e)?_t(e):e;function cn(e){return e?e.__v_isRef===!0:!1}function Te(e){return Nl(e,!1)}function wu(e){return Nl(e,!0)}function Nl(e,n){return cn(e)?e:new Eu(e,n)}class Eu{constructor(n,o){this.dep=new Ht,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=o?n:Le(n),this._value=o?n:Vn(n),this.__v_isShallow=o}get value(){return this.dep.track(),this._value}set value(n){const o=this._rawValue,a=this.__v_isShallow||Sn(n)||ao(n);n=a?n:Le(n),Fn(n,o)&&(this._rawValue=n,this._value=a?n:Vn(n),this.dep.trigger())}}function ee(e){return cn(e)?e.value:e}const Cu={get:(e,n,o)=>n==="__v_raw"?e:ee(Reflect.get(e,n,o)),set:(e,n,o,a)=>{const r=e[n];return cn(r)&&!cn(o)?(r.value=o,!0):Reflect.set(e,n,o,a)}};function xl(e){return wo(e)?e:new Proxy(e,Cu)}class ku{constructor(n,o,a){this.fn=n,this.setter=o,this._value=void 0,this.dep=new Ht(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=fa-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!o,this.isSSR=a}notify(){if(this.flags|=16,!(this.flags&8)&&Ke!==this)return cl(this,!0),!0}get value(){const n=this.dep.track();return ml(this),n&&(n.version=this.dep.version),this._value}set value(n){this.setter&&this.setter(n)}}function Iu(e,n,o=!1){let a,r;return Ee(e)?a=e:(a=e.get,r=e.set),new ku(a,r,o)}const Da={},Ka=new WeakMap;let xo;function Pu(e,n=!1,o=xo){if(o){let a=Ka.get(o);a||Ka.set(o,a=[]),a.push(e)}}function Ou(e,n,o=He){const{immediate:a,deep:r,once:t,scheduler:s,augmentJob:l,call:c}=o,d=q=>r?q:Sn(q)||r===!1||r===0?Xn(q,1):Xn(q);let u,m,f,v,B=!1,x=!1;if(cn(e)?(m=()=>e.value,B=Sn(e)):wo(e)?(m=()=>d(e),B=!0):xe(e)?(x=!0,B=e.some(q=>wo(q)||Sn(q)),m=()=>e.map(q=>{if(cn(q))return q.value;if(wo(q))return d(q);if(Ee(q))return c?c(q,2):q()})):Ee(e)?n?m=c?()=>c(e,2):e:m=()=>{if(f){no();try{f()}finally{oo()}}const q=xo;xo=u;try{return c?c(e,3,[v]):e(v)}finally{xo=q}}:m=Hn,n&&r){const q=m,ne=r===!0?1/0:r;m=()=>Xn(q(),ne)}const R=cu(),z=()=>{u.stop(),R&&R.active&&Lt(R.effects,u)};if(t&&n){const q=n;n=(...ne)=>{const H=q(...ne);return z(),H}}let P=x?new Array(e.length).fill(Da):Da;const J=q=>{if(!(!(u.flags&1)||!u.dirty&&!q))if(n){const ne=u.run();if(q||r||B||(x?ne.some((H,E)=>Fn(H,P[E])):Fn(ne,P))){f&&f();const H=xo;xo=u;try{const E=[ne,P===Da?void 0:x&&P[0]===Da?[]:P,v];P=ne,c?c(n,3,E):n(...E)}finally{xo=H}}}else u.run()};return l&&l(J),u=new sl(m),u.scheduler=s?()=>s(J,!1):J,v=q=>Pu(q,!1,u),f=u.onStop=()=>{const q=Ka.get(u);if(q){if(c)c(q,4);else for(const ne of q)ne();Ka.delete(u)}},n?a?J(!0):P=u.run():s?s(J.bind(null,!0),!0):u.run(),z.pause=u.pause.bind(u),z.resume=u.resume.bind(u),z.stop=z,z}function Xn(e,n=1/0,o){if(n<=0||!Me(e)||e.__v_skip||(o=o||new Map,(o.get(e)||0)>=n))return e;if(o.set(e,n),n--,cn(e))Xn(e.value,n,o);else if(xe(e))for(let a=0;a<e.length;a++)Xn(e[a],n,o);else if(Ko(e)||jo(e))e.forEach(a=>{Xn(a,n,o)});else if(ol(e)){for(const a in e)Xn(e[a],n,o);for(const a of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,a)&&Xn(e[a],n,o)}return e}function Ea(e,n,o,a){try{return a?e(...a):e()}catch(r){fr(r,n,o)}}function wn(e,n,o,a){if(Ee(e)){const r=Ea(e,n,o,a);return r&&el(r)&&r.catch(t=>{fr(t,n,o)}),r}if(xe(e)){const r=[];for(let t=0;t<e.length;t++)r.push(wn(e[t],n,o,a));return r}}function fr(e,n,o,a=!0){const r=n?n.vnode:null,{errorHandler:t,throwUnhandledErrorInProduction:s}=n&&n.appContext.config||He;if(n){let l=n.parent;const c=n.proxy,d=`https://vuejs.org/error-reference/#runtime-${o}`;for(;l;){const u=l.ec;if(u){for(let m=0;m<u.length;m++)if(u[m](e,c,d)===!1)return}l=l.parent}if(t){no(),Ea(t,null,10,[e,c,d]),oo();return}}ju(e,o,r,a,s)}function ju(e,n,o,a=!0,r=!1){if(r)throw e;console.error(e)}const hn=[];let qn=-1;const Vo=[];let co=null,ko=0;const Bl=Promise.resolve();let Ga=null;function yn(e){const n=Ga||Bl;return e?n.then(this?e.bind(this):e):n}function Vu(e){let n=qn+1,o=hn.length;for(;n<o;){const a=n+o>>>1,r=hn[a],t=va(r);t<e||t===e&&r.flags&2?n=a+1:o=a}return n}function Wt(e){if(!(e.flags&1)){const n=va(e),o=hn[hn.length-1];!o||!(e.flags&2)&&n>=va(o)?hn.push(e):hn.splice(Vu(n),0,e),e.flags|=1,Tl()}}function Tl(){Ga||(Ga=Bl.then(Sl))}function Du(e){if(!xe(e))co&&e.id===-1?co.splice(ko+1,0,e):e.flags&1||(Vo.push(e),e.flags|=1);else for(let n=0;n<e.length;n++)Vo.push(e[n]);Tl()}function fi(e,n,o=qn+1){for(;o<hn.length;o++){const a=hn[o];if(a&&a.flags&2){if(e&&a.id!==e.uid)continue;hn.splice(o,1),o--,a.flags&4&&(a.flags&=-2),a(),a.flags&4||(a.flags&=-2)}}}function Rl(e){if(Vo.length){const n=[...new Set(Vo)].sort((o,a)=>va(o)-va(a));if(Vo.length=0,co){for(let o=0;o<n.length;o++)co.push(n[o]);return}for(co=n,ko=0;ko<co.length;ko++){const o=co[ko];o.flags&4&&(o.flags&=-2),o.flags&8||o(),o.flags&=-2}co=null,ko=0}}const va=e=>e.id==null?e.flags&2?-1:1/0:e.id;function Sl(e){try{for(qn=0;qn<hn.length;qn++){const n=hn[qn];n&&!(n.flags&8)&&(n.flags&4&&(n.flags&=-2),Ea(n,n.i,n.i?15:14),n.flags&4||(n.flags&=-2))}}finally{for(;qn<hn.length;qn++){const n=hn[qn];n&&(n.flags&=-2)}qn=-1,hn.length=0,Rl(),Ga=null,(hn.length||Vo.length)&&Sl()}}let nn=null,wl=null;function Wa(e){const n=nn;return nn=e,wl=e&&e.type.__scopeId||null,n}function _e(e,n=nn,o){if(!n||e._n)return e;const a=(...r)=>{a._d&&Xa(-1);const t=Wa(n),s=Zn.length;let l;try{l=e(...r)}finally{for(let c=Zn.length;c>s;c--)Zt();Wa(t),a._d&&Xa(1)}return l};return a._n=!0,a._c=!0,a._d=!0,a}function Pn(e,n){if(nn===null)return e;const o=Ar(nn),a=e.dirs||(e.dirs=[]);for(let r=0;r<n.length;r++){let[t,s,l,c=He]=n[r];t&&(Ee(t)&&(t={mounted:t,updated:t}),t.deep&&Xn(s),a.push({dir:t,instance:o,value:s,oldValue:void 0,arg:l,modifiers:c}))}return e}function bo(e,n,o,a){const r=e.dirs,t=n&&n.dirs;for(let s=0;s<r.length;s++){const l=r[s];t&&(l.oldValue=t[s].value);let c=l.dir[a];c&&(no(),wn(c,o,8,[e.el,l,e,n]),oo())}}function la(e,n){if(ln){let o=ln.provides;const a=ln.parent&&ln.parent.provides;a===o&&(o=ln.provides=Object.create(a)),o[e]=n}}function Ue(e,n,o=!1){const a=cc();if(a||Lo){let r=Lo?Lo._context.provides:a?a.parent==null||a.ce?a.vnode.appContext&&a.vnode.appContext.provides:a.parent.provides:void 0;if(r&&e in r)return r[e];if(arguments.length>1)return o&&Ee(n)?n.call(a&&a.proxy):n}}const Lu=Symbol.for("v-scx"),qu=()=>Ue(Lu);function fo(e,n,o){return El(e,n,o)}function El(e,n,o=He){const{immediate:a,deep:r,flush:t,once:s}=o,l=Ze({},o),c=n&&a||!n&&t!=="post";let d;if(Aa){if(t==="sync"){const v=qu();d=v.__watcherHandles||(v.__watcherHandles=[])}else if(!c){const v=()=>{};return v.stop=Hn,v.resume=Hn,v.pause=Hn,v}}const u=ln;l.call=(v,B,x)=>wn(v,u,B,x);let m=!1;t==="post"?l.scheduler=v=>{mn(v,u&&u.suspense)}:t!=="sync"&&(m=!0,l.scheduler=(v,B)=>{B?v():Wt(v)}),l.augmentJob=v=>{n&&(v.flags|=4),m&&(v.flags|=2,u&&(v.id=u.uid,v.i=u))};const f=Ou(e,n,l);return Aa&&(d?d.push(f):c&&f()),f}function $u(e,n,o){const a=this.proxy,r=Ge(e)?e.includes(".")?Cl(a,e):()=>a[e]:e.bind(a,a);let t;Ee(n)?t=n:(t=n.handler,o=n);const s=Ca(this),l=El(r,t.bind(a),o);return s(),l}function Cl(e,n){const o=n.split(".");return()=>{let a=e;for(let r=0;r<o.length&&a;r++)a=a[o[r]];return a}}const lo=new WeakMap,kl=Symbol("_vte"),hr=e=>e.__isTeleport,Bo=e=>e&&(e.disabled||e.disabled===""),Mu=e=>e&&(e.defer||e.defer===""),hi=e=>typeof SVGElement<"u"&&e instanceof SVGElement,vi=e=>typeof MathMLElement=="function"&&e instanceof MathMLElement,yt=(e,n)=>{const o=e&&e.to;return Ge(o)?n?n(o):null:o},Fu={name:"Teleport",__isTeleport:!0,process(e,n,o,a,r,t,s,l,c,d){const{mc:u,pc:m,pbc:f,o:{insert:v,querySelector:B,createText:x,createComment:R,parentNode:z}}=d,P=Bo(n.props);let{dynamicChildren:J}=n;const q=(E,k,C)=>{E.shapeFlag&16&&u(E.children,k,C,r,t,s,l,c)},ne=(E=n)=>{const k=Bo(E.props),C=E.target=yt(E.props,B),le=At(C,E,x,v);C&&(s!=="svg"&&hi(C)?s="svg":s!=="mathml"&&vi(C)&&(s="mathml"),r&&r.isCE&&(r.ce._teleportTargets||(r.ce._teleportTargets=new Set)).add(C),k||(q(E,C,le),oa(E,!1)))},H=E=>{const k=()=>{if(lo.get(E)===k){if(lo.delete(E),Bo(E.props)){const C=z(E.el)||o;q(E,C,E.anchor),oa(E,!0)}ne(E)}};lo.set(E,k),mn(k,t)};if(e==null){const E=n.el=x(""),k=n.anchor=x("");if(v(E,o,a),v(k,o,a),Mu(n.props)||t&&t.pendingBranch){H(n);return}P&&(q(n,o,k),oa(n,!0)),ne()}else{n.el=e.el;const E=n.anchor=e.anchor,k=lo.get(e);if(k){k.flags|=8,lo.delete(e),H(n);return}n.targetStart=e.targetStart;const C=n.target=e.target,le=n.targetAnchor=e.targetAnchor,fe=Bo(e.props),ae=fe?o:C,Re=fe?E:le;if(s==="svg"||hi(C)?s="svg":(s==="mathml"||vi(C))&&(s="mathml"),J?(f(e.dynamicChildren,J,ae,r,t,s,l),Xt(e,n,!0)):c||m(e,n,ae,Re,r,t,s,l,!1),P)fe?n.props&&e.props&&n.props.to!==e.props.to&&(n.props.to=e.props.to):La(n,o,E,d,1);else if((n.props&&n.props.to)!==(e.props&&e.props.to)){const Ae=yt(n.props,B);Ae&&(n.target=Ae,La(n,Ae,null,d,0))}else fe&&La(n,C,le,d,1);oa(n,P)}},remove(e,n,o,{um:a,o:{remove:r}},t){const{shapeFlag:s,children:l,anchor:c,targetStart:d,targetAnchor:u,target:m,props:f}=e,v=Bo(f),B=t||!v,x=lo.get(e);if(x&&(x.flags|=8,lo.delete(e)),m&&(r(d),r(u)),t&&r(c),!x&&(v||m)&&s&16)for(let R=0;R<l.length;R++){const z=l[R];a(z,n,o,B,!!z.dynamicChildren)}},move:La,hydrate:zu};function La(e,n,o,{o:{insert:a},m:r},t=2){t===0&&a(e.targetAnchor,n,o);const{el:s,anchor:l,shapeFlag:c,children:d,props:u}=e,m=t===2;if(m&&a(s,n,o),!lo.has(e)&&(!m||Bo(u))&&c&16)for(let f=0;f<d.length;f++)r(d[f],n,o,2);m&&a(l,n,o)}function zu(e,n,o,a,r,t,{o:{nextSibling:s,parentNode:l,querySelector:c,insert:d,createText:u}},m){function f(R,z){let P=z;for(;P;){if(P&&P.nodeType===8){if(P.data==="teleport start anchor")n.targetStart=P;else if(P.data==="teleport anchor"){n.targetAnchor=P,R._lpa=n.targetAnchor&&s(n.targetAnchor);break}}P=s(P)}}function v(R,z){z.anchor=m(s(R),z,l(R),o,a,r,t)}const B=n.target=yt(n.props,c),x=Bo(n.props);if(B){const R=B._lpa||B.firstChild;n.shapeFlag&16&&(x?(v(e,n),f(B,R),n.targetAnchor||At(B,n,u,d,l(e)===B?e:null)):(n.anchor=s(e),f(B,R),n.targetAnchor||At(B,n,u,d),m(R&&s(R),n,B,o,a,r,t))),oa(n,x)}else x&&n.shapeFlag&16&&(v(e,n),n.targetStart=e,n.targetAnchor=s(e));return n.anchor&&s(n.anchor)}const Il=Fu;function oa(e,n){const o=e.ctx;if(o&&o.ut){let a,r;for(n?(a=e.el,r=e.anchor):(a=e.targetStart,r=e.targetAnchor);a&&a!==r;)a.nodeType===1&&a.setAttribute("data-v-owner",o.uid),a=a.nextSibling;o.ut()}}function At(e,n,o,a,r=null){const t=n.targetStart=o(""),s=n.targetAnchor=o("");return t[kl]=s,e&&(a(t,e,r),a(s,e,r)),s}const Bn=Symbol("_leaveCb"),Qo=Symbol("_enterCb");function Hu(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return En(()=>{e.isMounted=!0}),br(()=>{e.isUnmounting=!0}),e}const xn=[Function,Array],Pl={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:xn,onEnter:xn,onAfterEnter:xn,onEnterCancelled:xn,onBeforeLeave:xn,onLeave:xn,onAfterLeave:xn,onLeaveCancelled:xn,onBeforeAppear:xn,onAppear:xn,onAfterAppear:xn,onAppearCancelled:xn},Ol=e=>{const n=e.subTree;return n.component?Ol(n.component):n},Uu={name:"BaseTransition",props:Pl,setup(e,{slots:n}){const o=cc(),a=Hu();return()=>{const r=n.default&&Dl(n.default(),!0),t=r&&r.length?jl(r):o.subTree?ve():void 0;if(!t)return;const s=Le(e),{mode:l}=s;if(a.isLeaving)return Er(t);const c=Ya(t);if(!c)return Er(t);let d=Nt(c,s,a,o,m=>d=m);c.type!==sn&&ga(c,d);let u=o.subTree&&Ya(o.subTree);if(u&&u.type!==sn&&!To(u,c)&&Ol(o).type!==sn){let m=Nt(u,s,a,o);if(ga(u,m),l==="out-in"&&c.type!==sn)return a.isLeaving=!0,m.afterLeave=()=>{a.isLeaving=!1,o.job.flags&8||o.update(),delete m.afterLeave,u=void 0},Er(t);l==="in-out"&&c.type!==sn?m.delayLeave=(f,v,B)=>{const x=Vl(a,u);x[String(u.key)]=u,f[Bn]=()=>{v(),f[Bn]=void 0,delete d.delayedLeave,u=void 0},d.delayedLeave=()=>{B(),delete d.delayedLeave,u=void 0}}:u=void 0}else u&&(u=void 0);return t}}};function jl(e){let n=e[0];if(e.length>1){for(const o of e)if(o.type!==sn){n=o;break}}return n}const Ku=Uu;function Vl(e,n){const{leavingVNodes:o}=e;let a=o.get(n.type);return a||(a=Object.create(null),o.set(n.type,a)),a}function Nt(e,n,o,a,r){const{appear:t,mode:s,persisted:l=!1,onBeforeEnter:c,onEnter:d,onAfterEnter:u,onEnterCancelled:m,onBeforeLeave:f,onLeave:v,onAfterLeave:B,onLeaveCancelled:x,onBeforeAppear:R,onAppear:z,onAfterAppear:P,onAppearCancelled:J}=n,q=String(e.key),ne=Vl(o,e),H=(C,le)=>{C&&wn(C,a,9,le)},E=(C,le)=>{const fe=le[1];H(C,le),xe(C)?C.every(ae=>ae.length<=1)&&fe():C.length<=1&&fe()},k={mode:s,persisted:l,beforeEnter(C){let le=c;if(!o.isMounted)if(t)le=R||c;else return;C[Bn]&&C[Bn](!0);const fe=ne[q];fe&&To(e,fe)&&fe.el[Bn]&&fe.el[Bn](),H(le,[C])},enter(C){if(ne[q]===e)return;let le=d,fe=u,ae=m;if(!o.isMounted)if(t)le=z||d,fe=P||u,ae=J||m;else return;let Re=!1;C[Qo]=se=>{Re||(Re=!0,se?H(ae,[C]):H(fe,[C]),k.delayedLeave&&k.delayedLeave(),C[Qo]=void 0)};const Ae=C[Qo].bind(null,!1);le?E(le,[C,Ae]):Ae()},leave(C,le){const fe=String(e.key);if(C[Qo]&&C[Qo](!0),o.isUnmounting)return le();H(f,[C]);let ae=!1;C[Bn]=Ae=>{ae||(ae=!0,le(),Ae?H(x,[C]):H(B,[C]),C[Bn]=void 0,ne[fe]===e&&delete ne[fe])};const Re=C[Bn].bind(null,!1);ne[fe]=e,v?E(v,[C,Re]):Re()},clone(C){const le=Nt(C,n,o,a,r);return r&&r(le),le}};return k}function Er(e){if(vr(e))return e=ho(e),e.children=null,e}function Ya(e){if(!vr(e))return hr(e.type)&&e.children?jl(e.children):e;if(e.component)return e.component.subTree;const{shapeFlag:n,children:o}=e;if(o){if(n&16)return o[0];if(n&32&&Ee(o.default))return o.default()}}function ga(e,n){if(e.shapeFlag&6&&e.component){e.transition=n;const o=e.component.subTree;ga(hr(o.type)&&Ya(o)||o,n)}else e.shapeFlag&128?(e.ssContent.transition=n.clone(e.ssContent),e.ssFallback.transition=n.clone(e.ssFallback)):e.transition=n}function Dl(e,n=!1,o){let a=[],r=0;for(let t=0;t<e.length;t++){let s=e[t];const l=o==null?s.key:String(o)+String(s.key!=null?s.key:t);s.type===Ce?(s.patchFlag&128&&r++,a=a.concat(Dl(s.children,n,l))):(n||s.type!==sn)&&a.push(l!=null?ho(s,{key:l}):s)}if(r>1)for(let t=0;t<a.length;t++)a[t].patchFlag=-2;return a}function Ll(e,n){return Ee(e)?Ze({name:e.name},n,{setup:e}):e}function ql(e){e.ids=[e.ids[0]+e.ids[2]+++"-",0,0]}function gi(e,n){let o;return!!((o=Object.getOwnPropertyDescriptor(e,n))&&!o.configurable)}const Ja=new WeakMap;function ca(e,n,o,a,r=!1){if(xe(e)){e.forEach((x,R)=>ca(x,n&&(xe(n)?n[R]:n),o,a,r));return}if(Do(a)&&!r){a.shapeFlag&512&&a.type.__asyncResolved&&a.component.subTree.component&&ca(e,n,o,a.component.subTree);return}const t=a.shapeFlag&4?Ar(a.component):a.el,s=r?null:t,{i:l,r:c}=e,d=n&&n.r,u=l.refs===He?l.refs={}:l.refs,m=l.setupState,f=Le(m),v=m===He?Zs:x=>gi(u,x)?!1:$e(f,x),B=(x,R)=>!(R&&gi(u,R));if(d!=null&&d!==c){if(bi(n),Ge(d))u[d]=null,v(d)&&(m[d]=null);else if(cn(d)){const x=n;B(d,x.k)&&(d.value=null),x.k&&(u[x.k]=null)}}if(Ee(c))Ea(c,l,12,[s,u]);else{const x=Ge(c),R=cn(c);if(x||R){const z=()=>{if(e.f){const P=x?v(c)?m[c]:u[c]:B()||!e.k?c.value:u[e.k];if(r)xe(P)&&Lt(P,t);else if(xe(P))P.includes(t)||P.push(t);else if(x)u[c]=[t],v(c)&&(m[c]=u[c]);else{const J=[t];B(c,e.k)&&(c.value=J),e.k&&(u[e.k]=J)}}else x?(u[c]=s,v(c)&&(m[c]=s)):R&&(B(c,e.k)&&(c.value=s),e.k&&(u[e.k]=s))};if(s){const P=()=>{z(),Ja.delete(e)};P.id=-1,Ja.set(e,P),mn(P,o)}else bi(e),z()}}}function bi(e){const n=Ja.get(e);n&&(n.flags|=8,Ja.delete(e))}dr().requestIdleCallback;dr().cancelIdleCallback;const Do=e=>!!e.type.__asyncLoader,vr=e=>e.type.__isKeepAlive;function Gu(e,n){$l(e,"a",n)}function Wu(e,n){$l(e,"da",n)}function $l(e,n,o=ln){const a=e.__wdc||(e.__wdc=()=>{let r=o;for(;r;){if(r.isDeactivated)return;r=r.parent}return e()});if(gr(n,a,o),o){let r=o.parent;for(;r&&r.parent;)vr(r.parent.vnode)&&Yu(a,n,o,r),r=r.parent}}function Yu(e,n,o,a){const r=gr(n,e,a,!0);Yt(()=>{Lt(a[n],r)},o)}function gr(e,n,o=ln,a=!1){if(o){const r=o[e]||(o[e]=[]),t=n.__weh||(n.__weh=(...s)=>{no();const l=Ca(o),c=wn(n,o,e,s);return l(),oo(),c});return a?r.unshift(t):r.push(t),t}}const ro=e=>(n,o=ln)=>{(!Aa||e==="sp")&&gr(e,(...a)=>n(...a),o)},Ju=ro("bm"),En=ro("m"),Qu=ro("bu"),Xu=ro("u"),br=ro("bum"),Yt=ro("um"),Zu=ro("sp"),ed=ro("rtg"),nd=ro("rtc");function od(e,n=ln){gr("ec",e,n)}const Ml="components",ad="directives",Fl=Symbol.for("v-ndc");function Cr(e){return Ge(e)?zl(Ml,e,!1)||e:e||Fl}function rd(e){return zl(ad,e)}function zl(e,n,o=!0,a=!1){const r=nn||ln;if(r){const t=r.type;if(e===Ml){const l=Md(t,!1);if(l&&(l===n||l===vn(n)||l===cr(vn(n))))return t}const s=_i(r[e]||t[e],n)||_i(r.appContext[e],n);return!s&&a?t:s}}function _i(e,n){return e&&(e[n]||e[vn(n)]||e[cr(vn(n))])}function un(e,n,o,a){let r;const t=o,s=xe(e);if(s||Ge(e)){const l=s&&wo(e);let c=!1,d=!1;l&&(c=!Sn(e),d=ao(e),e=pr(e)),r=new Array(e.length);for(let u=0,m=e.length;u<m;u++)r[u]=n(c?d?qo(Vn(e[u])):Vn(e[u]):e[u],u,void 0,t)}else if(typeof e=="number"){r=new Array(e);for(let l=0;l<e;l++)r[l]=n(l+1,l,void 0,t)}else if(Me(e))if(e[Symbol.iterator])r=Array.from(e,(l,c)=>n(l,c,void 0,t));else{const l=Object.keys(e);r=new Array(l.length);for(let c=0,d=l.length;c<d;c++){const u=l[c];r[c]=n(e[u],u,c,t)}}else r=[];return r}function bn(e,n,o,a,r,t){if(o==null&&(o={}),nn.ce||nn.parent&&Do(nn.parent)&&nn.parent.ce){const d=o,u=Object.keys(d).length>0;return n!=="default"&&(d.name=n),w(),je(Ce,null,[G("slot",d,a&&a())],u?-2:64)}let s=e[n];s&&s._c&&(s._d=!1);const l=Zn.length;w();let c;try{const d=s&&Hl(s(o)),u=o.key||t||d&&d.key;c=je(Ce,{key:(u&&!jn(u)?u:`_${n}`)+(!d&&a?"_fb":"")},d||(a?a():[]),d&&e._===1?64:-2)}catch(d){for(let u=Zn.length;u>l;u--)Zt();throw d}finally{s&&s._c&&(s._d=!0)}return c.scopeId&&(c.slotScopeIds=[c.scopeId+"-s"]),c}function Hl(e){return e.some(n=>_a(n)?!(n.type===sn||n.type===Ce&&!Hl(n.children)):!0)?e:null}function td(e,n){const o={};for(const a in e)o[Fa(a)]=e[a];return o}const xt=e=>e?uc(e)?Ar(e):xt(e.parent):null,ua=Ze(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>xt(e.parent),$root:e=>xt(e.root),$host:e=>e.ce,$emit:e=>e.emit,$options:e=>Kl(e),$forceUpdate:e=>e.f||(e.f=()=>{Wt(e.update)}),$nextTick:e=>e.n||(e.n=yn.bind(e.proxy)),$watch:e=>$u.bind(e)}),kr=(e,n)=>e!==He&&!e.__isScriptSetup&&$e(e,n),id={get({_:e},n){if(n==="__v_skip")return!0;const{ctx:o,setupState:a,data:r,props:t,accessCache:s,type:l,appContext:c}=e;if(n[0]!=="$"){const f=s[n];if(f!==void 0)switch(f){case 1:return a[n];case 2:return r[n];case 4:return o[n];case 3:return t[n]}else{if(kr(a,n))return s[n]=1,a[n];if(r!==He&&$e(r,n))return s[n]=2,r[n];if($e(t,n))return s[n]=3,t[n];if(o!==He&&$e(o,n))return s[n]=4,o[n];Bt&&(s[n]=0)}}const d=ua[n];let u,m;if(d)return n==="$attrs"&&tn(e.attrs,"get",""),d(e);if((u=l.__cssModules)&&(u=u[n]))return u;if(o!==He&&$e(o,n))return s[n]=4,o[n];if(m=c.config.globalProperties,$e(m,n))return m[n]},set({_:e},n,o){const{data:a,setupState:r,ctx:t}=e;return kr(r,n)?(r[n]=o,!0):a!==He&&$e(a,n)?(a[n]=o,!0):$e(e.props,n)||n[0]==="$"&&n.slice(1)in e?!1:(t[n]=o,!0)},has({_:{data:e,setupState:n,accessCache:o,ctx:a,appContext:r,props:t,type:s}},l){let c;return!!(o[l]||e!==He&&l[0]!=="$"&&$e(e,l)||kr(n,l)||$e(t,l)||$e(a,l)||$e(ua,l)||$e(r.config.globalProperties,l)||(c=s.__cssModules)&&c[l])},defineProperty(e,n,o){return o.get!=null?e._.accessCache[n]=0:$e(o,"value")&&this.set(e,n,o.value,null),Reflect.defineProperty(e,n,o)}};function yi(e){return xe(e)?e.reduce((n,o)=>(n[o]=null,n),{}):e}let Bt=!0;function sd(e){const n=Kl(e),o=e.proxy,a=e.ctx;Bt=!1,n.beforeCreate&&Ai(n.beforeCreate,e,"bc");const{data:r,computed:t,methods:s,watch:l,provide:c,inject:d,created:u,beforeMount:m,mounted:f,beforeUpdate:v,updated:B,activated:x,deactivated:R,beforeDestroy:z,beforeUnmount:P,destroyed:J,unmounted:q,render:ne,renderTracked:H,renderTriggered:E,errorCaptured:k,serverPrefetch:C,expose:le,inheritAttrs:fe,components:ae,directives:Re,filters:Ae}=n;if(d&&ld(d,a,null),s)for(const F in s){const W=s[F];Ee(W)&&(a[F]=W.bind(o))}if(r){const F=r.call(o,o);Me(F)&&(e.data=wa(F))}if(Bt=!0,t)for(const F in t){const W=t[F],he=Ee(W)?W.bind(o,o):Ee(W.get)?W.get.bind(o,o):Hn,Ie=!Ee(W)&&Ee(W.set)?W.set.bind(o):Hn,ze=Fe({get:he,set:Ie});Object.defineProperty(a,F,{enumerable:!0,configurable:!0,get:()=>ze.value,set:Ve=>ze.value=Ve})}if(l)for(const F in l)Ul(l[F],a,o,F);if(c){const F=Ee(c)?c.call(o):c;Reflect.ownKeys(F).forEach(W=>{la(W,F[W])})}u&&Ai(u,e,"c");function y(F,W){xe(W)?W.forEach(he=>F(he.bind(o))):W&&F(W.bind(o))}if(y(Ju,m),y(En,f),y(Qu,v),y(Xu,B),y(Gu,x),y(Wu,R),y(od,k),y(nd,H),y(ed,E),y(br,P),y(Yt,q),y(Zu,C),xe(le))if(le.length){const F=e.exposed||(e.exposed={});le.forEach(W=>{Object.defineProperty(F,W,{get:()=>o[W],set:he=>o[W]=he,enumerable:!0})})}else e.exposed||(e.exposed={});ne&&e.render===Hn&&(e.render=ne),fe!=null&&(e.inheritAttrs=fe),ae&&(e.components=ae),Re&&(e.directives=Re),C&&ql(e)}function ld(e,n,o=Hn){xe(e)&&(e=Tt(e));for(const a in e){const r=e[a];let t;Me(r)?"default"in r?t=Ue(r.from||a,r.default,!0):t=Ue(r.from||a):t=Ue(r),cn(t)?Object.defineProperty(n,a,{enumerable:!0,configurable:!0,get:()=>t.value,set:s=>t.value=s}):n[a]=t}}function Ai(e,n,o){wn(xe(e)?e.map(a=>a.bind(n.proxy)):e.bind(n.proxy),n,o)}function Ul(e,n,o,a){let r=a.includes(".")?Cl(o,a):()=>o[a];if(Ge(e)){const t=n[e];Ee(t)&&fo(r,t)}else if(Ee(e))fo(r,e.bind(o));else if(Me(e))if(xe(e))e.forEach(t=>Ul(t,n,o,a));else{const t=Ee(e.handler)?e.handler.bind(o):n[e.handler];Ee(t)&&fo(r,t,e)}}function Kl(e){const n=e.type,{mixins:o,extends:a}=n,{mixins:r,optionsCache:t,config:{optionMergeStrategies:s}}=e.appContext,l=t.get(n);let c;return l?c=l:!r.length&&!o&&!a?c=n:(c={},r.length&&r.forEach(d=>Qa(c,d,s,!0)),Qa(c,n,s)),Me(n)&&t.set(n,c),c}function Qa(e,n,o,a=!1){const{mixins:r,extends:t}=n;t&&Qa(e,t,o,!0),r&&r.forEach(s=>Qa(e,s,o,!0));for(const s in n)if(!(a&&s==="expose")){const l=cd[s]||o&&o[s];e[s]=l?l(e[s],n[s]):n[s]}return e}const cd={data:Ni,props:xi,emits:xi,methods:aa,computed:aa,beforeCreate:dn,created:dn,beforeMount:dn,mounted:dn,beforeUpdate:dn,updated:dn,beforeDestroy:dn,beforeUnmount:dn,destroyed:dn,unmounted:dn,activated:dn,deactivated:dn,errorCaptured:dn,serverPrefetch:dn,components:aa,directives:aa,watch:dd,provide:Ni,inject:ud};function Ni(e,n){return n?e?function(){return Ze(Ee(e)?e.call(this,this):e,Ee(n)?n.call(this,this):n)}:n:e}function ud(e,n){return aa(Tt(e),Tt(n))}function Tt(e){if(xe(e)){const n={};for(let o=0;o<e.length;o++)n[e[o]]=e[o];return n}return e}function dn(e,n){return e?[...new Set([].concat(e,n))]:n}function aa(e,n){return e?Ze(Object.create(null),e,n):n}function xi(e,n){return e?xe(e)&&xe(n)?[...new Set([...e,...n])]:Ze(Object.create(null),yi(e),yi(n??{})):n}function dd(e,n){if(!e)return n;if(!n)return e;const o=Ze(Object.create(null),e);for(const a in n)o[a]=dn(e[a],n[a]);return o}function Gl(){return{app:null,config:{isNativeTag:Zs,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let md=0;function pd(e,n){return function(a,r=null){Ee(a)||(a=Ze({},a)),r!=null&&!Me(r)&&(r=null);const t=Gl(),s=new WeakSet,l=[];let c=!1;const d=t.app={_uid:md++,_component:a,_props:r,_container:null,_context:t,_instance:null,version:zd,get config(){return t.config},set config(u){},use(u,...m){return s.has(u)||(u&&Ee(u.install)?(s.add(u),u.install(d,...m)):Ee(u)&&(s.add(u),u(d,...m))),d},mixin(u){return t.mixins.includes(u)||t.mixins.push(u),d},component(u,m){return m?(t.components[u]=m,d):t.components[u]},directive(u,m){return m?(t.directives[u]=m,d):t.directives[u]},mount(u,m,f){if(!c){const v=d._ceVNode||G(a,r);return v.appContext=t,f===!0?f="svg":f===!1&&(f=void 0),e(v,u,f),c=!0,d._container=u,u.__vue_app__=d,Ar(v.component)}},onUnmount(u){l.push(u)},unmount(){c&&(wn(l,d._instance,16),e(null,d._container),delete d._container.__vue_app__)},provide(u,m){return t.provides[u]=m,d},runWithContext(u){const m=Lo;Lo=d;try{return u()}finally{Lo=m}}};return d}}let Lo=null;const fd=(e,n)=>n==="modelValue"||n==="model-value"?e.modelModifiers:e[`${n}Modifiers`]||e[`${vn(n)}Modifiers`]||e[`${go(n)}Modifiers`];function hd(e,n,...o){if(e.isUnmounted)return;const a=e.vnode.props||He;let r=o;const t=n.startsWith("update:"),s=t&&fd(a,n.slice(7));s&&(s.trim&&(r=o.map(u=>Ge(u)?u.trim():u)),s.number&&(r=o.map(ur)));let l,c=a[l=Fa(n)]||a[l=Fa(vn(n))];!c&&t&&(c=a[l=Fa(go(n))]),c&&wn(c,e,6,r);const d=a[l+"Once"];if(d){if(!e.emitted)e.emitted={};else if(e.emitted[l])return;e.emitted[l]=!0,wn(d,e,6,r)}}const vd=new WeakMap;function Wl(e,n,o=!1){const a=o?vd:n.emitsCache,r=a.get(e);if(r!==void 0)return r;const t=e.emits;let s={},l=!1;if(!Ee(e)){const c=d=>{const u=Wl(d,n,!0);u&&(l=!0,Ze(s,u))};!o&&n.mixins.length&&n.mixins.forEach(c),e.extends&&c(e.extends),e.mixins&&e.mixins.forEach(c)}return!t&&!l?(Me(e)&&a.set(e,null),null):(xe(t)?t.forEach(c=>s[c]=null):Ze(s,t),Me(e)&&a.set(e,s),s)}function _r(e,n){return!e||!ir(n)?!1:(n=n.slice(2),n=n==="Once"?n:n.replace(/Once$/,""),$e(e,n[0].toLowerCase()+n.slice(1))||$e(e,go(n))||$e(e,n))}function Bi(e){const{type:n,vnode:o,proxy:a,withProxy:r,propsOptions:[t],slots:s,attrs:l,emit:c,render:d,renderCache:u,props:m,data:f,setupState:v,ctx:B,inheritAttrs:x}=e,R=Wa(e);let z,P;try{if(o.shapeFlag&4){const q=r||a,ne=q;z=Mn(d.call(ne,q,u,m,v,f,B)),P=l}else{const q=n;z=Mn(q.length>1?q(m,{attrs:l,slots:s,emit:c}):q(m,null)),P=n.props?l:gd(l)}}catch(q){Zn.length=0,fr(q,e,1),z=G(sn)}let J=z;if(P&&x!==!1){const q=Object.keys(P),{shapeFlag:ne}=J;q.length&&ne&7&&(t&&q.some(sr)&&(P=bd(P,t)),J=ho(J,P,!1,!0))}if(o.dirs&&(J=ho(J,null,!1,!0),J.dirs=J.dirs?J.dirs.concat(o.dirs):o.dirs),o.transition){const q=hr(J.type)&&Ya(J)||J;ga(q,o.transition)}return z=J,Wa(R),z}const gd=e=>{let n;for(const o in e)(o==="class"||o==="style"||ir(o))&&((n||(n={}))[o]=e[o]);return n},bd=(e,n)=>{const o={};for(const a in e)(!sr(a)||!(a.slice(9)in n))&&(o[a]=e[a]);return o};function _d(e,n,o){const{props:a,children:r,component:t}=e,{props:s,children:l,patchFlag:c}=n,d=t.emitsOptions;if(n.dirs||n.transition)return!0;if(o&&c>=0){if(c&1024)return!0;if(c&16)return a?Ti(a,s,d):!!s;if(c&8){const u=n.dynamicProps;for(let m=0;m<u.length;m++){const f=u[m];if(Yl(s,a,f)&&!_r(d,f))return!0}}}else return(r||l)&&(!l||!l.$stable)?!0:a===s?!1:a?s?Ti(a,s,d):!0:!!s;return!1}function Ti(e,n,o){const a=Object.keys(n);if(a.length!==Object.keys(e).length)return!0;for(let r=0;r<a.length;r++){const t=a[r];if(Yl(n,e,t)&&!_r(o,t))return!0}return!1}function Yl(e,n,o){const a=e[o],r=n[o];return o==="style"&&Me(a)&&Me(r)?!Go(a,r):a!==r}function yd({vnode:e,parent:n,suspense:o},a){for(;n;){const r=n.subTree;if(r.suspense&&r.suspense.activeBranch===e&&(r.suspense.vnode.el=r.el=a,e=r),r===e)(e=n.vnode).el=a,n=n.parent;else break}o&&o.activeBranch===e&&(o.vnode.el=a)}const Jl={},Ql=()=>Object.create(Jl),Xl=e=>Object.getPrototypeOf(e)===Jl;function Ad(e,n,o,a=!1){const r={},t=Ql();e.propsDefaults=Object.create(null),Zl(e,n,r,t);for(const s in e.propsOptions[0])s in r||(r[s]=void 0);o?e.props=a?r:Al(r):e.type.props?e.props=r:e.props=t,e.attrs=t}function Nd(e,n,o,a){const{props:r,attrs:t,vnode:{patchFlag:s}}=e,l=Le(r),[c]=e.propsOptions;let d=!1;if((a||s>0)&&!(s&16)){if(s&8){const u=e.vnode.dynamicProps;for(let m=0;m<u.length;m++){let f=u[m];if(_r(e.emitsOptions,f))continue;const v=n[f];if(c)if($e(t,f))v!==t[f]&&(t[f]=v,d=!0);else{const B=vn(f);r[B]=Rt(c,l,B,v,e,!1)}else v!==t[f]&&(t[f]=v,d=!0)}}}else{Zl(e,n,r,t)&&(d=!0);let u;for(const m in l)(!n||!$e(n,m)&&((u=go(m))===m||!$e(n,u)))&&(c?o&&(o[m]!==void 0||o[u]!==void 0)&&(r[m]=Rt(c,l,m,void 0,e,!0)):delete r[m]);if(t!==l)for(const m in t)(!n||!$e(n,m))&&(delete t[m],d=!0)}d&&Qn(e.attrs,"set","")}function Zl(e,n,o,a){const[r,t]=e.propsOptions;let s=!1,l;if(n)for(let c in n){if(ta(c))continue;const d=n[c];let u;r&&$e(r,u=vn(c))?!t||!t.includes(u)?o[u]=d:(l||(l={}))[u]=d:_r(e.emitsOptions,c)||(!(c in a)||d!==a[c])&&(a[c]=d,s=!0)}if(t){const c=Le(o),d=l||He;for(let u=0;u<t.length;u++){const m=t[u];o[m]=Rt(r,c,m,d[m],e,!$e(d,m))}}return s}function Rt(e,n,o,a,r,t){const s=e[o];if(s!=null){const l=$e(s,"default");if(l&&a===void 0){const c=s.default;if(s.type!==Function&&!s.skipFactory&&Ee(c)){const{propsDefaults:d}=r;if(o in d)a=d[o];else{const u=Ca(r);a=d[o]=c.call(null,n),u()}}else a=c;r.ce&&r.ce._setProp(o,a)}s[0]&&(t&&!l?a=!1:s[1]&&(a===""||a===go(o))&&(a=!0))}return a}const xd=new WeakMap;function ec(e,n,o=!1){const a=o?xd:n.propsCache,r=a.get(e);if(r)return r;const t=e.props,s={},l=[];let c=!1;if(!Ee(e)){const u=m=>{c=!0;const[f,v]=ec(m,n,!0);Ze(s,f),v&&l.push(...v)};!o&&n.mixins.length&&n.mixins.forEach(u),e.extends&&u(e.extends),e.mixins&&e.mixins.forEach(u)}if(!t&&!c)return Me(e)&&a.set(e,Oo),Oo;if(xe(t))for(let u=0;u<t.length;u++){const m=vn(t[u]);Ri(m)&&(s[m]=He)}else if(t)for(const u in t){const m=vn(u);if(Ri(m)){const f=t[u],v=s[m]=xe(f)||Ee(f)?{type:f}:Ze({},f),B=v.type;let x=!1,R=!0;if(xe(B))for(let z=0;z<B.length;++z){const P=B[z],J=Ee(P)&&P.name;if(J==="Boolean"){x=!0;break}else J==="String"&&(R=!1)}else x=Ee(B)&&B.name==="Boolean";v[0]=x,v[1]=R,(x||$e(v,"default"))&&l.push(m)}}const d=[s,l];return Me(e)&&a.set(e,d),d}function Ri(e){return e[0]!=="$"&&!ta(e)}const Jt=e=>e==="_"||e==="_ctx"||e==="$stable",Qt=e=>xe(e)?e.map(Mn):[Mn(e)],Bd=(e,n,o)=>{if(n._n)return n;const a=_e((...r)=>Qt(n(...r)),o);return a._c=!1,a},nc=(e,n,o)=>{const a=e._ctx;for(const r in e){if(Jt(r))continue;const t=e[r];if(Ee(t))n[r]=Bd(r,t,a);else if(t!=null){const s=Qt(t);n[r]=()=>s}}},oc=(e,n)=>{const o=Qt(n);e.slots.default=()=>o},ac=(e,n,o)=>{for(const a in n)(o||!Jt(a))&&(e[a]=n[a])},Td=(e,n,o)=>{const a=e.slots=Ql();if(e.vnode.shapeFlag&32){const r=n._;r?(ac(a,n,o),o&&al(a,"_",r,!0)):nc(n,a)}else n&&oc(e,n)},Rd=(e,n,o)=>{const{vnode:a,slots:r}=e;let t=!0,s=He;if(a.shapeFlag&32){const l=n._;l?o&&l===1?t=!1:ac(r,n,o):(t=!n.$stable,nc(n,r)),s=n}else n&&(oc(e,n),s={default:1});if(t)for(const l in r)!Jt(l)&&s[l]==null&&delete r[l]},mn=kd;function Sd(e){return wd(e)}function wd(e,n){const o=dr();o.__VUE__=!0;const{insert:a,remove:r,patchProp:t,createElement:s,createText:l,createComment:c,setText:d,setElementText:u,parentNode:m,nextSibling:f,setScopeId:v=Hn,insertStaticContent:B}=e,x=(h,b,A,V=null,$=null,I=null,te=void 0,re=null,oe=!!b.dynamicChildren)=>{if(h===b)return;h&&!To(h,b)&&(V=j(h),Ve(h,$,I,!0),h=null),b.patchFlag===-2&&(oe=!1,b.dynamicChildren=null);const{type:U,ref:ye,shapeFlag:ie}=b;switch(U){case yr:R(h,b,A,V);break;case sn:z(h,b,A,V);break;case Ha:h==null&&P(b,A,V,te);break;case Ce:ae(h,b,A,V,$,I,te,re,oe);break;default:ie&1?ne(h,b,A,V,$,I,te,re,oe):ie&6?Re(h,b,A,V,$,I,te,re,oe):(ie&64||ie&128)&&U.process(h,b,A,V,$,I,te,re,oe,pe)}ye!=null&&$?ca(ye,h&&h.ref,I,b||h,!b):ye==null&&h&&h.ref!=null&&ca(h.ref,null,I,h,!0)},R=(h,b,A,V)=>{if(h==null)a(b.el=l(b.children),A,V);else{const $=b.el=h.el;b.children!==h.children&&d($,b.children)}},z=(h,b,A,V)=>{h==null?a(b.el=c(b.children||""),A,V):b.el=h.el},P=(h,b,A,V)=>{[h.el,h.anchor]=B(h.children,b,A,V,h.el,h.anchor)},J=({el:h,anchor:b},A,V)=>{let $;for(;h&&h!==b;)$=f(h),a(h,A,V),h=$;a(b,A,V)},q=({el:h,anchor:b})=>{let A;for(;h&&h!==b;)A=f(h),r(h),h=A;r(b)},ne=(h,b,A,V,$,I,te,re,oe)=>{if(b.type==="svg"?te="svg":b.type==="math"&&(te="mathml"),h==null)H(b,A,V,$,I,te,re,oe);else{const U=h.el&&h.el._isVueCE?h.el:null;try{U&&U._beginPatch(),C(h,b,$,I,te,re,oe)}finally{U&&U._endPatch()}}},H=(h,b,A,V,$,I,te,re)=>{let oe,U;const{props:ye,shapeFlag:ie,transition:ge,dirs:Be}=h;if(oe=h.el=s(h.type,I,ye&&ye.is,ye),ie&8?u(oe,h.children):ie&16&&k(h.children,oe,null,V,$,Ir(h,I),te,re),Be&&bo(h,null,V,"created"),E(oe,h,h.scopeId,te,V),ye){for(const De in ye)De!=="value"&&!ta(De)&&t(oe,De,null,ye[De],I,V);"value"in ye&&t(oe,"value",null,ye.value,I),(U=ye.onVnodeBeforeMount)&&Ln(U,V,h)}Be&&bo(h,null,V,"beforeMount");const ke=Ed($,ge);ke&&ge.beforeEnter(oe),a(oe,b,A),((U=ye&&ye.onVnodeMounted)||ke||Be)&&mn(()=>{U&&Ln(U,V,h),ke&&ge.enter(oe),Be&&bo(h,null,V,"mounted")},$)},E=(h,b,A,V,$)=>{if(A&&v(h,A),V)for(let I=0;I<V.length;I++)v(h,V[I]);if($){let I=$.subTree;if(b===I||ic(I.type)&&(I.ssContent===b||I.ssFallback===b)){const te=$.vnode;E(h,te,te.scopeId,te.slotScopeIds,$.parent)}}},k=(h,b,A,V,$,I,te,re,oe=0)=>{for(let U=oe;U<h.length;U++){const ye=h[U]=re?Jn(h[U]):Mn(h[U]);x(null,ye,b,A,V,$,I,te,re)}},C=(h,b,A,V,$,I,te)=>{const re=b.el=h.el;let{patchFlag:oe,dynamicChildren:U,dirs:ye}=b;oe|=h.patchFlag&16;const ie=h.props||He,ge=b.props||He;let Be;if(A&&_o(A,!1),(Be=ge.onVnodeBeforeUpdate)&&Ln(Be,A,b,h),ye&&bo(b,h,A,"beforeUpdate"),A&&_o(A,!0),U&&(!h.dynamicChildren||h.dynamicChildren.length!==U.length)&&(oe=0,te=!1,U=null),(ie.innerHTML&&ge.innerHTML==null||ie.textContent&&ge.textContent==null)&&u(re,""),U?le(h.dynamicChildren,U,re,A,V,Ir(b,$),I):te||W(h,b,re,null,A,V,Ir(b,$),I,!1),oe>0){if(oe&16)fe(re,ie,ge,A,$);else if(oe&2&&ie.class!==ge.class&&t(re,"class",null,ge.class,$),oe&4&&t(re,"style",ie.style,ge.style,$),oe&8){const ke=b.dynamicProps;for(let De=0;De<ke.length;De++){const i=ke[De],_=ie[i],S=ge[i];(S!==_||i==="value")&&t(re,i,_,S,$,A)}}oe&1&&h.children!==b.children&&u(re,b.children)}else!te&&U==null&&fe(re,ie,ge,A,$);((Be=ge.onVnodeUpdated)||ye)&&mn(()=>{Be&&Ln(Be,A,b,h),ye&&bo(b,h,A,"updated")},V)},le=(h,b,A,V,$,I,te)=>{for(let re=0;re<b.length;re++){const oe=h[re],U=b[re],ye=oe.el&&(oe.type===Ce||!To(oe,U)||oe.shapeFlag&198)?m(oe.el):A;x(oe,U,ye,null,V,$,I,te,!0)}},fe=(h,b,A,V,$)=>{if(b!==A){if(b!==He)for(const I in b)!ta(I)&&!(I in A)&&t(h,I,b[I],null,$,V);for(const I in A){if(ta(I))continue;const te=A[I],re=b[I];te!==re&&I!=="value"&&t(h,I,re,te,$,V)}"value"in A&&t(h,"value",b.value,A.value,$)}},ae=(h,b,A,V,$,I,te,re,oe)=>{const U=b.el=h?h.el:l(""),ye=b.anchor=h?h.anchor:l("");let{patchFlag:ie,dynamicChildren:ge,slotScopeIds:Be}=b;Be&&(re=re?re.concat(Be):Be),h==null?(a(U,A,V),a(ye,A,V),k(b.children||[],A,ye,$,I,te,re,oe)):ie>0&&ie&64&&ge&&h.dynamicChildren&&h.dynamicChildren.length===ge.length?(le(h.dynamicChildren,ge,A,$,I,te,re),(b.key!=null||$&&b===$.subTree)&&Xt(h,b,!0)):W(h,b,A,ye,$,I,te,re,oe)},Re=(h,b,A,V,$,I,te,re,oe)=>{b.slotScopeIds=re,h==null?b.shapeFlag&512?$.ctx.activate(b,A,V,te,oe):Ae(b,A,V,$,I,te,oe):se(h,b,oe)},Ae=(h,b,A,V,$,I,te)=>{const re=h.component=Vd(h,V,$);if(vr(h)&&(re.ctx.renderer=pe),Dd(re,!1,te),re.asyncDep){if($&&$.registerDep(re,y,te),!h.el){const oe=re.subTree=G(sn);z(null,oe,b,A),h.placeholder=oe.el}}else y(re,h,b,A,$,I,te)},se=(h,b,A)=>{const V=b.component=h.component;if(_d(h,b,A))if(V.asyncDep&&!V.asyncResolved){F(V,b,A);return}else V.next=b,V.update();else b.el=h.el,V.vnode=b},y=(h,b,A,V,$,I,te)=>{const re=()=>{if(h.isMounted){let{next:ie,bu:ge,u:Be,parent:ke,vnode:De}=h;{const T=rc(h);if(T){ie&&(ie.el=De.el,F(h,ie,te)),T.asyncDep.then(()=>{mn(()=>{h.isUnmounted||U()},$)});return}}let i=ie,_;_o(h,!1),ie?(ie.el=De.el,F(h,ie,te)):ie=De,ge&&za(ge),(_=ie.props&&ie.props.onVnodeBeforeUpdate)&&Ln(_,ke,ie,De),_o(h,!0);const S=Bi(h),O=h.subTree;h.subTree=S,x(O,S,m(O.el),j(O),h,$,I),ie.el=S.el,i===null&&yd(h,S.el),Be&&mn(Be,$),(_=ie.props&&ie.props.onVnodeUpdated)&&mn(()=>Ln(_,ke,ie,De),$)}else{let ie;const{el:ge,props:Be}=b,{bm:ke,m:De,parent:i,root:_,type:S}=h,O=Do(b);_o(h,!1),ke&&za(ke),!O&&(ie=Be&&Be.onVnodeBeforeMount)&&Ln(ie,i,b),_o(h,!0);{_.ce&&_.ce._hasShadowRoot()&&_.ce._injectChildStyle(S,h.parent?h.parent.type:void 0);const T=h.subTree=Bi(h);x(null,T,A,V,h,$,I),b.el=T.el}if(De&&mn(De,$),!O&&(ie=Be&&Be.onVnodeMounted)){const T=b;mn(()=>Ln(ie,i,T),$)}(b.shapeFlag&256||i&&Do(i.vnode)&&i.vnode.shapeFlag&256)&&h.a&&mn(h.a,$),h.isMounted=!0,b=A=V=null}};h.scope.on();const oe=h.effect=new sl(re);h.scope.off();const U=h.update=oe.run.bind(oe),ye=h.job=oe.runIfDirty.bind(oe);ye.i=h,ye.id=h.uid,oe.scheduler=()=>Wt(ye),_o(h,!0),U()},F=(h,b,A)=>{b.component=h;const V=h.vnode.props;h.vnode=b,h.next=null,Nd(h,b.props,V,A),Rd(h,b.children,A),no(),fi(h),oo()},W=(h,b,A,V,$,I,te,re,oe=!1)=>{const U=h&&h.children,ye=h?h.shapeFlag:0,ie=b.children,{patchFlag:ge,shapeFlag:Be}=b;if(ge>0){if(ge&128){Ie(U,ie,A,V,$,I,te,re,oe);return}else if(ge&256){he(U,ie,A,V,$,I,te,re,oe);return}}Be&8?(ye&16&&Qe(U,$,I),ie!==U&&u(A,ie)):ye&16?Be&16?Ie(U,ie,A,V,$,I,te,re,oe):Qe(U,$,I,!0):(ye&8&&u(A,""),Be&16&&k(ie,A,V,$,I,te,re,oe))},he=(h,b,A,V,$,I,te,re,oe)=>{h=h||Oo,b=b||Oo;const U=h.length,ye=b.length,ie=Math.min(U,ye);let ge;for(ge=0;ge<ie;ge++){const Be=b[ge]=oe?Jn(b[ge]):Mn(b[ge]);x(h[ge],Be,A,null,$,I,te,re,oe)}U>ye?Qe(h,$,I,!0,!1,ie):k(b,A,V,$,I,te,re,oe,ie)},Ie=(h,b,A,V,$,I,te,re,oe)=>{let U=0;const ye=b.length;let ie=h.length-1,ge=ye-1;for(;U<=ie&&U<=ge;){const Be=h[U],ke=b[U]=oe?Jn(b[U]):Mn(b[U]);if(To(Be,ke))x(Be,ke,A,null,$,I,te,re,oe);else break;U++}for(;U<=ie&&U<=ge;){const Be=h[ie],ke=b[ge]=oe?Jn(b[ge]):Mn(b[ge]);if(To(Be,ke))x(Be,ke,A,null,$,I,te,re,oe);else break;ie--,ge--}if(U>ie){if(U<=ge){const Be=ge+1,ke=Be<ye?b[Be].el:V;for(;U<=ge;)x(null,b[U]=oe?Jn(b[U]):Mn(b[U]),A,ke,$,I,te,re,oe),U++}}else if(U>ge)for(;U<=ie;)Ve(h[U],$,I,!0),U++;else{const Be=U,ke=U,De=new Map;for(U=ke;U<=ge;U++){const N=b[U]=oe?Jn(b[U]):Mn(b[U]);N.key!=null&&De.set(N.key,U)}let i,_=0;const S=ge-ke+1;let O=!1,T=0;const Q=new Array(S);for(U=0;U<S;U++)Q[U]=0;for(U=Be;U<=ie;U++){const N=h[U];if(_>=S){Ve(N,$,I,!0);continue}let M;if(N.key!=null)M=De.get(N.key);else for(i=ke;i<=ge;i++)if(Q[i-ke]===0&&To(N,b[i])){M=i;break}M===void 0?Ve(N,$,I,!0):(Q[M-ke]=U+1,M>=T?T=M:O=!0,x(N,b[M],A,null,$,I,te,re,oe),_++)}const p=O?Cd(Q):Oo;for(i=p.length-1,U=S-1;U>=0;U--){const N=ke+U,M=b[N],D=b[N+1],L=N+1<ye?D.el||tc(D):V;Q[U]===0?x(null,M,A,L,$,I,te,re,oe):O&&(i<0||U!==p[i]?ze(M,A,L,2):i--)}}},ze=(h,b,A,V,$=null)=>{const{el:I,type:te,transition:re,children:oe,shapeFlag:U}=h;if(U&6){ze(h.component.subTree,b,A,V);return}if(U&128){h.suspense.move(b,A,V);return}if(U&64){te.move(h,b,A,pe);return}if(te===Ce){a(I,b,A);for(let ie=0;ie<oe.length;ie++)ze(oe[ie],b,A,V);a(h.anchor,b,A);return}if(te===Ha){J(h,b,A);return}if(V!==2&&U&1&&re)if(V===0)re.persisted&&!I[Bn]?a(I,b,A):(re.beforeEnter(I),a(I,b,A),mn(()=>re.enter(I),$));else{const{leave:ie,delayLeave:ge,afterLeave:Be}=re,ke=()=>{h.ctx.isUnmounted?r(I):a(I,b,A)},De=()=>{const i=I._isLeaving||!!I[Bn];I._isLeaving&&I[Bn](!0),re.persisted&&!i?ke():ie(I,()=>{ke(),Be&&Be()})};ge?ge(I,ke,De):De()}else a(I,b,A)},Ve=(h,b,A,V=!1,$=!1)=>{const{type:I,props:te,ref:re,children:oe,dynamicChildren:U,shapeFlag:ye,patchFlag:ie,dirs:ge,cacheIndex:Be,memo:ke}=h;if(ie===-2&&($=!1),re!=null&&(no(),ca(re,null,A,h,!0),oo()),Be!=null&&(b.renderCache[Be]=void 0),ye&256){b.ctx.deactivate(h);return}const De=ye&1&&ge,i=!Do(h);let _;if(i&&(_=te&&te.onVnodeBeforeUnmount)&&Ln(_,b,h),ye&6)Je(h.component,A,V);else{if(ye&128){h.suspense.unmount(A,V);return}De&&bo(h,null,b,"beforeUnmount"),ye&64?h.type.remove(h,b,A,pe,V):U&&!U.hasOnce&&(I!==Ce||ie>0&&ie&64)?Qe(U,b,A,!1,!0):(I===Ce&&ie&384||!$&&ye&16)&&Qe(oe,b,A),V&&on(h)}const S=ke!=null&&Be==null;(i&&(_=te&&te.onVnodeUnmounted)||De||S)&&mn(()=>{_&&Ln(_,b,h),De&&bo(h,null,b,"unmounted"),S&&(h.el=null)},A)},on=h=>{const{type:b,el:A,anchor:V,transition:$}=h;if(b===Ce){Cn(A,V);return}if(b===Ha){q(h);return}const I=()=>{r(A),$&&!$.persisted&&$.afterLeave&&$.afterLeave()};if(h.shapeFlag&1&&$&&!$.persisted){const{leave:te,delayLeave:re}=$,oe=()=>te(A,I);re?re(h.el,I,oe):oe()}else I()},Cn=(h,b)=>{let A;for(;h!==b;)A=f(h),r(h),h=A;r(b)},Je=(h,b,A)=>{const{bum:V,scope:$,job:I,subTree:te,um:re,m:oe,a:U}=h;Si(oe),Si(U),V&&za(V),$.stop(),I&&(I.flags|=8,Ve(te,h,b,A)),re&&mn(re,b),mn(()=>{h.isUnmounted=!0},b)},Qe=(h,b,A,V=!1,$=!1,I=0)=>{for(let te=I;te<h.length;te++)Ve(h[te],b,A,V,$)},j=h=>{if(h.shapeFlag&6)return j(h.component.subTree);if(h.shapeFlag&128)return h.suspense.next();const b=f(h.anchor||h.el),A=b&&b[kl];return A?f(A):b};let ue=!1;const Z=(h,b,A)=>{let V;h==null?b._vnode&&(Ve(b._vnode,null,null,!0),V=b._vnode.component):x(b._vnode||null,h,b,null,null,null,A),b._vnode=h,ue||(ue=!0,fi(V),Rl(),ue=!1)},pe={p:x,um:Ve,m:ze,r:on,mt:Ae,mc:k,pc:W,pbc:le,n:j,o:e};return{render:Z,hydrate:void 0,createApp:pd(Z)}}function Ir({type:e,props:n},o){return o==="svg"&&e==="foreignObject"||o==="mathml"&&e==="annotation-xml"&&n&&n.encoding&&n.encoding.includes("html")?void 0:o}function _o({effect:e,job:n},o){o?(e.flags|=32,n.flags|=4):(e.flags&=-33,n.flags&=-5)}function Ed(e,n){return(!e||e&&!e.pendingBranch)&&n&&!n.persisted}function Xt(e,n,o=!1){const a=e.children,r=n.children;if(xe(a)&&xe(r))for(let t=0;t<a.length;t++){const s=a[t];let l=r[t];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=r[t]=Jn(r[t]),l.el=s.el),!o&&l.patchFlag!==-2&&Xt(s,l)),l.type===yr&&(l.patchFlag===-1&&(l=r[t]=Jn(l)),l.el=s.el),l.type===sn&&!l.el&&(l.el=s.el)}}function Cd(e){const n=e.slice(),o=[0];let a,r,t,s,l;const c=e.length;for(a=0;a<c;a++){const d=e[a];if(d!==0){if(r=o[o.length-1],e[r]<d){n[a]=r,o.push(a);continue}for(t=0,s=o.length-1;t<s;)l=t+s>>1,e[o[l]]<d?t=l+1:s=l;d<e[o[t]]&&(t>0&&(n[a]=o[t-1]),o[t]=a)}}for(t=o.length,s=o[t-1];t-- >0;)o[t]=s,s=n[s];return o}function rc(e){const n=e.subTree.component;if(n)return n.asyncDep&&!n.asyncResolved?n:rc(n)}function Si(e){if(e)for(let n=0;n<e.length;n++)e[n].flags|=8}function tc(e){if(e.placeholder)return e.placeholder;const n=e.component;return n?tc(n.subTree):null}const ic=e=>e.__isSuspense;function kd(e,n){n&&n.pendingBranch?xe(e)?n.effects.push(...e):n.effects.push(e):Du(e)}const Ce=Symbol.for("v-fgt"),yr=Symbol.for("v-txt"),sn=Symbol.for("v-cmt"),Ha=Symbol.for("v-stc"),Zn=[];let _n=null;function w(e=!1){Zn.push(_n=e?null:[])}function Zt(){Zn.pop(),_n=Zn[Zn.length-1]||null}let ba=1;function Xa(e,n=!1){ba+=e,e<0&&_n&&n&&(_n.hasOnce=!0)}function sc(e){return e.dynamicChildren=ba>0?_n||Oo:null,Zt(),ba>0&&_n&&_n.push(e),e}function K(e,n,o,a,r,t){return sc(g(e,n,o,a,r,t,!0))}function je(e,n,o,a,r){return sc(G(e,n,o,a,r,!0))}function _a(e){return e?e.__v_isVNode===!0:!1}function To(e,n){return e.type===n.type&&e.key===n.key}const lc=({key:e})=>e??null,Ua=({ref:e,ref_key:n,ref_for:o})=>(typeof e=="number"&&(e=""+e),e!=null?Ge(e)||cn(e)||Ee(e)?{i:nn,r:e,k:n,f:!!o}:e:null);function g(e,n=null,o=null,a=0,r=null,t=e===Ce?0:1,s=!1,l=!1){const c={__v_isVNode:!0,__v_skip:!0,type:e,props:n,key:n&&lc(n),ref:n&&Ua(n),scopeId:wl,slotScopeIds:null,children:o,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:t,patchFlag:a,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:nn};return l?(Za(c,o),t&128&&e.normalize(c)):o&&(c.shapeFlag|=Ge(o)?8:16),ba>0&&!s&&_n&&(c.patchFlag>0||t&6)&&c.patchFlag!==32&&_n.push(c),c}const G=Id;function Id(e,n=null,o=null,a=0,r=null,t=!1){if((!e||e===Fl)&&(e=sn),_a(e)){const l=ho(e,n,!0);return o&&Za(l,o),ba>0&&!t&&_n&&(l.shapeFlag&6?_n[_n.indexOf(e)]=l:_n.push(l)),l.patchFlag=-2,l}if(Fd(e)&&(e=e.__vccOpts),n){n=In(n);let{class:l,style:c}=n;l&&!Ge(l)&&(n.class=rn(l)),Me(c)&&(Gt(c)&&!xe(c)&&(c=Ze({},c)),n.style=mr(c))}const s=Ge(e)?1:ic(e)?128:hr(e)?64:Me(e)?4:Ee(e)?2:0;return g(e,n,o,a,r,s,t,!0)}function In(e){return e?Gt(e)||Xl(e)?Ze({},e):e:null}function ho(e,n,o=!1,a=!1){const{props:r,ref:t,patchFlag:s,children:l,transition:c}=e,d=n?St(r||{},n):r,u={__v_isVNode:!0,__v_skip:!0,type:e.type,props:d,key:d&&lc(d),ref:n&&n.ref?o&&t?xe(t)?t.concat(Ua(n)):[t,Ua(n)]:Ua(n):t,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:l,target:e.target,targetStart:e.targetStart,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:n&&e.type!==Ce?s===-1?16:s|16:s,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:c,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&ho(e.ssContent),ssFallback:e.ssFallback&&ho(e.ssFallback),placeholder:e.placeholder,el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return c&&a&&ga(u,c.clone(u)),u}function Se(e=" ",n=0){return G(yr,null,e,n)}function Pd(e,n){const o=G(Ha,null,e);return o.staticCount=n,o}function ve(e="",n=!1){return n?(w(),je(sn,null,e)):G(sn,null,e)}function Mn(e){return e==null||typeof e=="boolean"?G(sn):xe(e)?G(Ce,null,e.slice()):_a(e)?Jn(e):G(yr,null,String(e))}function Jn(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:ho(e)}function Za(e,n){let o=0;const{shapeFlag:a}=e;if(n==null)n=null;else if(xe(n))o=16;else if(typeof n=="object")if(a&65){const r=n.default;r&&(r._c&&(r._d=!1),Za(e,r()),r._c&&(r._d=!0));return}else{o=32;const r=n._;!r&&!Xl(n)?n._ctx=nn:r===3&&nn&&(nn.slots._===1?n._=1:(n._=2,e.patchFlag|=1024))}else if(Ee(n)){if(a&65){Za(e,{default:n});return}n={default:n,_ctx:nn},o=32}else n=String(n),a&64?(o=16,n=[Se(n)]):o=8;e.children=n,e.shapeFlag|=o}function St(...e){const n={};for(let o=0;o<e.length;o++){const a=e[o];for(const r in a)if(r==="class")n.class!==a.class&&(n.class=rn([n.class,a.class]));else if(r==="style")n.style=mr([n.style,a.style]);else if(ir(r)){const t=n[r],s=a[r];s&&t!==s&&!(xe(t)&&t.includes(s))?n[r]=t?[].concat(t,s):s:s==null&&t==null&&!sr(r)&&(n[r]=s)}else r!==""&&(n[r]=a[r])}return n}function Ln(e,n,o,a=null){wn(e,n,7,[o,a])}const Od=Gl();let jd=0;function Vd(e,n,o){const a=e.type,r=(n?n.appContext:e.appContext)||Od,t={uid:jd++,vnode:e,type:a,parent:n,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new lu(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:n?n.provides:Object.create(r.provides),ids:n?n.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:ec(a,r),emitsOptions:Wl(a,r),emit:null,emitted:null,propsDefaults:He,inheritAttrs:a.inheritAttrs,ctx:He,data:He,props:He,attrs:He,slots:He,refs:He,setupState:He,setupContext:null,suspense:o,suspenseId:o?o.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return t.ctx={_:t},t.root=n?n.root:t,t.emit=hd.bind(null,t),e.ce&&e.ce(t),t}let ln=null;const cc=()=>ln||nn;let er,ya;{const e=dr(),n=(o,a)=>{let r;return(r=e[o])||(r=e[o]=[]),r.push(a),t=>{r.length>1?r.forEach(s=>s(t)):r[0](t)}};er=n("__VUE_INSTANCE_SETTERS__",o=>ln=o),ya=n("__VUE_SSR_SETTERS__",o=>Aa=o)}const Ca=e=>{const n=ln;return er(e),e.scope.on(),()=>{e.scope.off(),er(n)}},wi=()=>{ln&&ln.scope.off(),er(null)};function uc(e){return e.vnode.shapeFlag&4}let Aa=!1;function Dd(e,n=!1,o=!1){n&&ya(n);const{props:a,children:r}=e.vnode,t=uc(e);Ad(e,a,t,n),Td(e,r,o||n);const s=t?Ld(e,n):void 0;return n&&ya(!1),s}function Ld(e,n){const o=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,id);const{setup:a}=o;if(a){no();const r=e.setupContext=a.length>1?$d(e):null,t=Ca(e),s=Ea(a,e,0,[e.props,r]),l=el(s);if(oo(),t(),(l||e.sp)&&!Do(e)&&ql(e),l){if(s.then(wi,wi),n)return s.then(c=>{ya(!0);try{Ei(e,c,n)}finally{ya(!1)}}).catch(c=>{fr(c,e,0)});e.asyncDep=s}else Ei(e,s)}else dc(e)}function Ei(e,n,o){Ee(n)?e.type.__ssrInlineRender?e.ssrRender=n:e.render=n:Me(n)&&(e.setupState=xl(n)),dc(e)}function dc(e,n,o){const a=e.type;e.render||(e.render=a.render||Hn);{const r=Ca(e);no();try{sd(e)}finally{oo(),r()}}}const qd={get(e,n){return tn(e,"get",""),e[n]}};function $d(e){const n=o=>{e.exposed=o||{}};return{attrs:new Proxy(e.attrs,qd),slots:e.slots,emit:e.emit,expose:n}}function Ar(e){return e.exposed?e.exposeProxy||(e.exposeProxy=new Proxy(xl(Su(e.exposed)),{get(n,o){if(o in n)return n[o];if(o in ua)return ua[o](e)},has(n,o){return o in n||o in ua}})):e.proxy}function Md(e,n=!0){return Ee(e)?e.displayName||e.name:e.name||n&&e.__name}function Fd(e){return Ee(e)&&"__vccOpts"in e}const Fe=(e,n)=>Iu(e,n,Aa);function $o(e,n,o){try{Xa(-1);const a=arguments.length;return a===2?Me(n)&&!xe(n)?_a(n)?G(e,null,[n]):G(e,n):G(e,null,n):(a>3?o=Array.prototype.slice.call(arguments,2):a===3&&_a(o)&&(o=[o]),G(e,n,o))}finally{Xa(1)}}const zd="3.5.41";let wt;const Ci=typeof window<"u"&&window.trustedTypes;if(Ci)try{wt=Ci.createPolicy("vue",{createHTML:e=>e})}catch{}const mc=wt?e=>wt.createHTML(e):e=>e,Hd="http://www.w3.org/2000/svg",Ud="http://www.w3.org/1998/Math/MathML",Yn=typeof document<"u"?document:null,ki=Yn&&Yn.createElement("template"),Kd={insert:(e,n,o)=>{n.insertBefore(e,o||null)},remove:e=>{const n=e.parentNode;n&&n.removeChild(e)},createElement:(e,n,o,a)=>{const r=n==="svg"?Yn.createElementNS(Hd,e):n==="mathml"?Yn.createElementNS(Ud,e):o?Yn.createElement(e,{is:o}):Yn.createElement(e);return e==="select"&&a&&a.multiple!=null&&r.setAttribute("multiple",a.multiple),r},createText:e=>Yn.createTextNode(e),createComment:e=>Yn.createComment(e),setText:(e,n)=>{e.nodeValue=n},setElementText:(e,n)=>{e.textContent=n},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>Yn.querySelector(e),setScopeId(e,n){e.setAttribute(n,"")},insertStaticContent(e,n,o,a,r,t){const s=o?o.previousSibling:n.lastChild;if(r&&(r===t||r.nextSibling))for(;n.insertBefore(r.cloneNode(!0),o),!(r===t||!(r=r.nextSibling)););else{ki.innerHTML=mc(a==="svg"?`<svg>${e}</svg>`:a==="mathml"?`<math>${e}</math>`:e);const l=ki.content;if(a==="svg"||a==="mathml"){const c=l.firstChild;for(;c.firstChild;)l.appendChild(c.firstChild);l.removeChild(c)}n.insertBefore(l,o)}return[s?s.nextSibling:n.firstChild,o?o.previousSibling:n.lastChild]}},to="transition",Xo="animation",Na=Symbol("_vtc"),pc={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},Gd=Ze({},Pl,pc),Wd=e=>(e.displayName="Transition",e.props=Gd,e),Yd=Wd((e,{slots:n})=>$o(Ku,Jd(e),n)),yo=(e,n=[])=>{xe(e)?e.forEach(o=>o(...n)):e&&e(...n)},Ii=e=>e?xe(e)?e.some(n=>n.length>1):e.length>1:!1;function Jd(e){const n={};for(const ae in e)ae in pc||(n[ae]=e[ae]);if(e.css===!1)return n;const{name:o="v",type:a,duration:r,enterFromClass:t=`${o}-enter-from`,enterActiveClass:s=`${o}-enter-active`,enterToClass:l=`${o}-enter-to`,appearFromClass:c=t,appearActiveClass:d=s,appearToClass:u=l,leaveFromClass:m=`${o}-leave-from`,leaveActiveClass:f=`${o}-leave-active`,leaveToClass:v=`${o}-leave-to`}=e,B=Qd(r),x=B&&B[0],R=B&&B[1],{onBeforeEnter:z,onEnter:P,onEnterCancelled:J,onLeave:q,onLeaveCancelled:ne,onBeforeAppear:H=z,onAppear:E=P,onAppearCancelled:k=J}=n,C=(ae,Re,Ae,se)=>{ae._enterCancelled=se,Ao(ae,Re?u:l),Ao(ae,Re?d:s),Ae&&Ae()},le=(ae,Re)=>{ae._isLeaving=!1,Ao(ae,m),Ao(ae,v),Ao(ae,f),Re&&Re()},fe=ae=>(Re,Ae)=>{const se=ae?E:P,y=()=>C(Re,ae,Ae);yo(se,[Re,y]),Pi(()=>{Ao(Re,ae?c:t),Gn(Re,ae?u:l),Ii(se)||Oi(Re,a,x,y)})};return Ze(n,{onBeforeEnter(ae){yo(z,[ae]),Gn(ae,t),Gn(ae,s)},onBeforeAppear(ae){yo(H,[ae]),Gn(ae,c),Gn(ae,d)},onEnter:fe(!1),onAppear:fe(!0),onLeave(ae,Re){ae._isLeaving=!0;const Ae=()=>le(ae,Re);Gn(ae,m),ae._enterCancelled?(Gn(ae,f),Di(ae)):(Di(ae),Gn(ae,f)),Pi(()=>{ae._isLeaving&&(Ao(ae,m),Gn(ae,v),Ii(q)||Oi(ae,a,R,Ae))}),yo(q,[ae,Ae])},onEnterCancelled(ae){C(ae,!1,void 0,!0),yo(J,[ae])},onAppearCancelled(ae){C(ae,!0,void 0,!0),yo(k,[ae])},onLeaveCancelled(ae){le(ae),yo(ne,[ae])}})}function Qd(e){if(e==null)return null;if(Me(e))return[Pr(e.enter),Pr(e.leave)];{const n=Pr(e);return[n,n]}}function Pr(e){return eu(e)}function Gn(e,n){n.split(/\s+/).forEach(o=>o&&e.classList.add(o)),(e[Na]||(e[Na]=new Set)).add(n)}function Ao(e,n){n.split(/\s+/).forEach(a=>a&&e.classList.remove(a));const o=e[Na];o&&(o.delete(n),o.size||(e[Na]=void 0))}function Pi(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}let Xd=0;function Oi(e,n,o,a){const r=e._endId=++Xd,t=()=>{r===e._endId&&a()};if(o!=null)return setTimeout(t,o);const{type:s,timeout:l,propCount:c}=Zd(e,n);if(!s)return a();const d=s+"end";let u=0;const m=()=>{e.removeEventListener(d,f),t()},f=v=>{v.target===e&&++u>=c&&m()};setTimeout(()=>{u<c&&m()},l+1),e.addEventListener(d,f)}function Zd(e,n){const o=window.getComputedStyle(e),a=B=>(o[B]||"").split(", "),r=a(`${to}Delay`),t=a(`${to}Duration`),s=ji(r,t),l=a(`${Xo}Delay`),c=a(`${Xo}Duration`),d=ji(l,c);let u=null,m=0,f=0;n===to?s>0&&(u=to,m=s,f=t.length):n===Xo?d>0&&(u=Xo,m=d,f=c.length):(m=Math.max(s,d),u=m>0?s>d?to:Xo:null,f=u?u===to?t.length:c.length:0);const v=u===to&&/\b(?:transform|all)(?:,|$)/.test(a(`${to}Property`).toString());return{type:u,timeout:m,propCount:f,hasTransform:v}}function ji(e,n){for(;e.length<n.length;)e=e.concat(e);return Math.max(...n.map((o,a)=>Vi(o)+Vi(e[a])))}function Vi(e){return e==="auto"?0:Number(e.slice(0,-1).replace(",","."))*1e3}function Di(e){return(e?e.ownerDocument:document).body.offsetHeight}function em(e,n,o){const a=e[Na];a&&(n=(n?[n,...a]:[...a]).join(" ")),n==null?e.removeAttribute("class"):o?e.setAttribute("class",n):e.className=n}const nr=Symbol("_vod"),fc=Symbol("_vsh"),Li={name:"show",beforeMount(e,{value:n},{transition:o}){e[nr]=e.style.display==="none"?"":e.style.display,o&&n?o.beforeEnter(e):Zo(e,n)},mounted(e,{value:n},{transition:o}){o&&n&&o.enter(e)},updated(e,{value:n,oldValue:o},{transition:a}){!n!=!o&&(a?n?(a.beforeEnter(e),Zo(e,!0),a.enter(e)):a.leave(e,()=>{Zo(e,!1)}):Zo(e,n))},beforeUnmount(e,{value:n}){Zo(e,n)}};function Zo(e,n){e.style.display=n?e[nr]:"none",e[fc]=!n}const nm=Symbol(""),om=/(?:^|;)\s*display\s*:/;function am(e,n,o){const a=e.style,r=Ge(o);let t=!1;if(o&&!r){if(n)if(Ge(n))for(const s of n.split(";")){const l=s.slice(0,s.indexOf(":")).trim();o[l]==null&&ra(a,l,"")}else for(const s in n)o[s]==null&&ra(a,s,"");for(const s in o){s==="display"&&(t=!0);const l=o[s];l!=null?tm(e,s,!Ge(n)&&n?n[s]:void 0,l)||ra(a,s,l):ra(a,s,"")}}else if(r){if(n!==o){const s=a[nm];s&&(o+=";"+s),a.cssText=o,t=om.test(o)}}else n&&e.removeAttribute("style");nr in e&&(e[nr]=t?a.display:"",e[fc]&&(a.display="none"))}const qi=/\s*!important$/;function ra(e,n,o){if(xe(o))o.forEach(a=>ra(e,n,a));else if(o==null&&(o=""),n.startsWith("--"))e.setProperty(n,o);else{const a=rm(e,n);qi.test(o)?e.setProperty(go(a),o.replace(qi,""),"important"):e[a]=o}}const $i=["Webkit","Moz","ms"],Or={};function rm(e,n){const o=Or[n];if(o)return o;let a=vn(n);if(a!=="filter"&&a in e)return Or[n]=a;a=cr(a);for(let r=0;r<$i.length;r++){const t=$i[r]+a;if(t in e)return Or[n]=t}return n}function tm(e,n,o,a){return e.tagName==="TEXTAREA"&&(n==="width"||n==="height")&&Ge(a)&&o===a}const Mi="http://www.w3.org/1999/xlink";function Fi(e,n,o,a,r,t=iu(n)){a&&n.startsWith("xlink:")?o==null?e.removeAttributeNS(Mi,n.slice(6,n.length)):e.setAttributeNS(Mi,n,o):o==null||t&&!rl(o)?e.removeAttribute(n):e.setAttribute(n,t?"":jn(o)?String(o):o)}function zi(e,n,o,a,r){if(n==="innerHTML"||n==="textContent"){o!=null&&(e[n]=n==="innerHTML"?mc(o):o);return}const t=e.tagName;if(n==="value"&&t!=="PROGRESS"&&!t.includes("-")){const l=t==="OPTION"?e.getAttribute("value")||"":e.value,c=o==null?e.type==="checkbox"?"on":"":String(o);(l!==c||!("_value"in e))&&(e.value=c),o==null&&e.removeAttribute(n),e._value=o;return}let s=!1;if(o===""||o==null){const l=typeof e[n];l==="boolean"?o=rl(o):o==null&&l==="string"?(o="",s=!0):l==="number"&&(o=0,s=!0)}try{e[n]=o}catch{}s&&e.removeAttribute(r||n)}function mo(e,n,o,a){e.addEventListener(n,o,a)}function im(e,n,o,a){e.removeEventListener(n,o,a)}const Hi=Symbol("_vei");function sm(e,n,o,a,r=null){const t=e[Hi]||(e[Hi]={}),s=t[n];if(a&&s)s.value=a;else{const[l,c]=um(n);if(a){const d=t[n]=pm(a,r);mo(e,l,d,c)}else s&&(im(e,l,s,c),t[n]=void 0)}}const lm=/(Once|Passive|Capture)$/,cm=/^on:?(?:Once|Passive|Capture)$/;function um(e){let n,o;for(;(o=e.match(lm))&&!cm.test(e);)n||(n={}),e=e.slice(0,e.length-o[1].length),n[o[1].toLowerCase()]=!0;return[e[2]===":"?e.slice(3):go(e.slice(2)),n]}let jr=0;const dm=Promise.resolve(),mm=()=>jr||(dm.then(()=>jr=0),jr=Date.now());function pm(e,n){const o=a=>{if(!a._vts)a._vts=Date.now();else if(a._vts<=o.attached)return;const r=o.value;if(xe(r)){const t=a.stopImmediatePropagation;a.stopImmediatePropagation=()=>{t.call(a),a._stopped=!0};const s=r.slice(),l=[a];for(let c=0;c<s.length&&!a._stopped;c++){const d=s[c];d&&wn(d,n,5,l)}}else wn(r,n,5,[a])};return o.value=e,o.attached=mm(),o}const Ui=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,fm=(e,n,o,a,r,t)=>{const s=r==="svg";n==="class"?em(e,a,s):n==="style"?am(e,o,a):ir(n)?sr(n)||sm(e,n,o,a,t):(n[0]==="."?(n=n.slice(1),!0):n[0]==="^"?(n=n.slice(1),!1):hm(e,n,a,s))?(zi(e,n,a),!e.tagName.includes("-")&&(n==="value"||n==="checked"||n==="selected")&&Fi(e,n,a,s,t,n!=="value")):e._isVueCE&&(vm(e,n)||e._def.__asyncLoader&&(/[A-Z]/.test(n)||!Ge(a)))?zi(e,vn(n),a,t,n):(n==="true-value"?e._trueValue=a:n==="false-value"&&(e._falseValue=a),Fi(e,n,a,s))};function hm(e,n,o,a){if(a)return!!(n==="innerHTML"||n==="textContent"||n in e&&Ui(n)&&Ee(o));if(n==="spellcheck"||n==="draggable"||n==="translate"||n==="autocorrect"||n==="sandbox"&&e.tagName==="IFRAME"||n==="form"||n==="list"&&e.tagName==="INPUT"||n==="type"&&e.tagName==="TEXTAREA")return!1;if(n==="width"||n==="height"){const r=e.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return Ui(n)&&Ge(o)?!1:n in e}function vm(e,n){const o=e._def.props;if(!o)return!1;const a=vn(n);return Array.isArray(o)?o.some(r=>vn(r)===a):Object.keys(o).some(r=>vn(r)===a)}const Mo=e=>{const n=e.props["onUpdate:modelValue"]||!1;return xe(n)?o=>za(n,o):n};function gm(e){e.target.composing=!0}function Ki(e){const n=e.target;n.composing&&(n.composing=!1,n.dispatchEvent(new Event("input")))}const zn=Symbol("_assign"),qa=Symbol("_initialValue");function Vr(e,n,o){return n&&(e=e.trim()),o&&(e=ur(e)),e}const or={created(e,{modifiers:{lazy:n,trim:o,number:a}},r){e.parentNode&&(e.type==="text"?e[qa]=e.defaultValue.replace(/[\r\n]/g,""):e.type==="textarea"&&(e[qa]=e.defaultValue.replace(/\r\n?/g,`
`))),e[zn]=Mo(r);const t=a||r.props&&r.props.type==="number";mo(e,n?"change":"input",s=>{s.target.composing||e[zn](Vr(e.value,o,t))}),(o||t)&&mo(e,"change",()=>{e.value=Vr(e.value,o,t)}),n||(mo(e,"compositionstart",gm),mo(e,"compositionend",Ki),mo(e,"change",Ki))},mounted(e,{value:n,modifiers:{trim:o,number:a}}){const r=n??"",t=e[qa];delete e[qa],t!==void 0&&(e.type==="text"||e.type==="textarea")&&e.value!==t?e[zn](Vr(e.value,o,a)):e.value=r},beforeUpdate(e,{value:n,oldValue:o,modifiers:{lazy:a,trim:r,number:t}},s){if(e[zn]=Mo(s),e.composing)return;const l=(t||e.type==="number")&&!/^0\d/.test(e.value)?ur(e.value):e.value,c=n??"";if(l===c)return;const d=e.getRootNode();(d instanceof Document||d instanceof ShadowRoot)&&d.activeElement===e&&e.type!=="range"&&(a&&n===o||r&&e.value.trim()===c)||(e.value=c)}},bm={deep:!0,created(e,n,o){e[zn]=Mo(o),mo(e,"change",()=>{const a=e._modelValue,r=xa(e),t=e.checked,s=e[zn];if(xe(a)){const l=$t(a,r),c=l!==-1;if(t&&!c)s(a.concat(r));else if(!t&&c){const d=[...a];d.splice(l,1),s(d)}}else if(Ko(a)){const l=new Set(a);t?l.add(r):l.delete(r),s(l)}else s(hc(e,t))})},mounted:Gi,beforeUpdate(e,n,o){e[zn]=Mo(o),Gi(e,n,o)}};function Gi(e,{value:n,oldValue:o},a){e._modelValue=n;let r;if(xe(n))r=$t(n,a.props.value)>-1;else if(Ko(n))r=n.has(a.props.value);else{if(n===o)return;r=Go(n,hc(e,!0))}e.checked!==r&&(e.checked=r)}const Dr={deep:!0,created(e,{value:n,modifiers:{number:o}},a){e._modelValue=n,mo(e,"change",()=>{const r=Array.prototype.filter.call(e.options,t=>t.selected).map(t=>o?ur(xa(t)):xa(t));e[zn](e.multiple?Ko(e._modelValue)?new Set(r):r:r[0]),e._assigning=!0,yn(()=>{e._assigning=!1})}),e[zn]=Mo(a)},mounted(e,{value:n}){Wi(e,n)},beforeUpdate(e,{value:n},o){e._modelValue=n,e[zn]=Mo(o)},updated(e,{value:n}){e._assigning||Wi(e,n)}};function Wi(e,n){const o=e.multiple,a=xe(n);if(!(o&&!a&&!Ko(n))){for(let r=0,t=e.options.length;r<t;r++){const s=e.options[r],l=xa(s);if(o)if(a){const c=typeof l;c==="string"||c==="number"?s.selected=n.some(d=>String(d)===String(l)):s.selected=$t(n,l)>-1}else s.selected=n.has(l);else if(Go(xa(s),n)){e.selectedIndex!==r&&(e.selectedIndex=r);return}}!o&&e.selectedIndex!==-1&&(e.selectedIndex=-1)}}function xa(e){return"_value"in e?e._value:e.value}function hc(e,n){const o=n?"_trueValue":"_falseValue";return o in e?e[o]:n}const _m=["ctrl","shift","alt","meta"],ym={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&e.button!==0,middle:e=>"button"in e&&e.button!==1,right:e=>"button"in e&&e.button!==2,exact:(e,n)=>_m.some(o=>e[`${o}Key`]&&!n.includes(o))},vo=(e,n)=>{if(!e)return e;const o=e._withMods||(e._withMods={}),a=n.join(".");return o[a]||(o[a]=((r,...t)=>{for(let s=0;s<n.length;s++){const l=ym[n[s]];if(l&&l(r,n))return}return e(r,...t)}))},Am={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},ei=(e,n)=>{const o=e._withKeys||(e._withKeys={}),a=n.join(".");return o[a]||(o[a]=(r=>{if(!("key"in r))return;const t=go(r.key);if(n.some(s=>s===t||Am[s]===t))return e(r)}))},Nm=Ze({patchProp:fm},Kd);let Yi;function xm(){return Yi||(Yi=Sd(Nm))}const Bm=((...e)=>{const n=xm().createApp(...e),{mount:o}=n;return n.mount=a=>{const r=Rm(a);if(!r)return;const t=n._component;!Ee(t)&&!t.render&&!t.template&&(t.template=r.innerHTML),r.nodeType===1&&(r.textContent="");const s=o(r,!1,Tm(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),s},n});function Tm(e){if(e instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&e instanceof MathMLElement)return"mathml"}function Rm(e){return Ge(e)?document.querySelector(e):e}const Sm="modulepreload",wm=function(e){return"/Extensao-26.2/"+e},Ji={},Em=function(n,o,a){let r=Promise.resolve();if(o&&o.length>0){let d=function(u){return Promise.all(u.map(m=>Promise.resolve(m).then(f=>({status:"fulfilled",value:f}),f=>({status:"rejected",reason:f}))))};var s=d;document.getElementsByTagName("link");const l=document.querySelector("meta[property=csp-nonce]"),c=l?.nonce||l?.getAttribute("nonce");r=d(o.map(u=>{if(u=wm(u),u in Ji)return;Ji[u]=!0;const m=u.endsWith(".css"),f=m?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${u}"]${f}`))return;const v=document.createElement("link");if(v.rel=m?"stylesheet":Sm,m||(v.as="script"),v.crossOrigin="",v.href=u,c&&v.setAttribute("nonce",c),document.head.appendChild(v),m)return new Promise((B,x)=>{v.addEventListener("load",B),v.addEventListener("error",()=>x(new Error(`Unable to preload CSS for ${u}`)))})}))}function t(l){const c=new Event("vite:preloadError",{cancelable:!0});if(c.payload=l,window.dispatchEvent(c),!c.defaultPrevented)throw l}return r.then(l=>{for(const c of l||[])c.status==="rejected"&&t(c.reason);return n().catch(t)})};function Cm(e={}){const{immediate:n=!1,onNeedReload:o,onNeedRefresh:a,onOfflineReady:r,onRegistered:t,onRegisteredSW:s,onRegisterError:l}=e;let c,d;const u=async(f=!0)=>{await d};async function m(){if("serviceWorker"in navigator){if(c=await Em(async()=>{const{Workbox:f}=await import("./workbox-window.prod.es5-BBnX5xw4.js");return{Workbox:f}},[]).then(({Workbox:f})=>new f("/Extensao-26.2/sw.js",{scope:"/Extensao-26.2/",type:"classic"})).catch(f=>{l?.(f)}),!c)return;c.addEventListener("activated",f=>{(f.isUpdate||f.isExternal)&&(o?o():window.location.reload())}),c.addEventListener("installed",f=>{f.isUpdate||r?.()}),c.register({immediate:n}).then(f=>{s?s("/Extensao-26.2/sw.js",f):t?.(f)}).catch(f=>{l?.(f)})}}return d=m(),u}const km="acessibilidade-checker",Im=2,pn=Object.freeze({projects:"projects",environments:"environments",elements:"elements",evaluations:"evaluations",ruleSets:"ruleSets"});function Io(e){return new Promise((n,o)=>{e.onsuccess=()=>n(e.result),e.onerror=()=>o(e.error??new Error("Falha no IndexedDB."))})}function Pm(e=globalThis.indexedDB){if(!e)return Promise.reject(new Error("IndexedDB não está disponível neste ambiente."));const n=e.open(km,Im);return n.onupgradeneeded=()=>{const o=n.result;if(o.objectStoreNames.contains(pn.projects)||o.createObjectStore(pn.projects,{keyPath:"id"}),o.objectStoreNames.contains(pn.environments)||o.createObjectStore(pn.environments,{keyPath:"id"}).createIndex("projectId","projectId",{unique:!1}),o.objectStoreNames.contains(pn.elements)||o.createObjectStore(pn.elements,{keyPath:"id"}).createIndex("environmentId","environmentId",{unique:!1}),!o.objectStoreNames.contains(pn.evaluations)){const a=o.createObjectStore(pn.evaluations,{keyPath:"id"});a.createIndex("elementId","elementId",{unique:!1}),a.createIndex("evaluatedAt","evaluatedAt",{unique:!1})}o.objectStoreNames.contains(pn.ruleSets)||o.createObjectStore(pn.ruleSets,{keyPath:"id"})},Io(n)}async function ea(e,n,o,a){const r=e.transaction(n,o),t=r.objectStore(n),s=await a(t);return await new Promise((l,c)=>{r.oncomplete=l,r.onabort=r.onerror=()=>c(r.error??new Error("Transação IndexedDB não concluída."))}),s}class ka{constructor(n,o){this.database=n,this.storeName=o}get(n){return ea(this.database,this.storeName,"readonly",o=>Io(o.get(n)))}getAll(){return ea(this.database,this.storeName,"readonly",n=>Io(n.getAll()))}getAllBy(n,o){return ea(this.database,this.storeName,"readonly",a=>Io(a.index(n).getAll(o)))}put(n){return ea(this.database,this.storeName,"readwrite",async o=>(await Io(o.put(n)),n))}delete(n){return ea(this.database,this.storeName,"readwrite",o=>Io(o.delete(n)))}}class Om extends ka{constructor(n){super(n,pn.elements)}getByEnvironmentId(n){return this.getAllBy("environmentId",n)}}class jm extends ka{constructor(n){super(n,pn.environments)}getByProjectId(n){return this.getAllBy("projectId",n)}}class Vm extends ka{constructor(n){super(n,pn.evaluations)}getByElementId(n){return this.getAllBy("elementId",n)}}class Dm extends ka{constructor(n){super(n,pn.projects)}}class Lm extends ka{constructor(n){super(n,pn.ruleSets)}}const qm=new Set([">=","<=",">","<","==","!="]);function da(e,n,o){switch(n){case">=":return e>=o;case"<=":return e<=o;case">":return e>o;case"<":return e<o;case"==":return e===o;case"!=":return e!==o;default:throw new Error(`Operador não suportado: ${n}`)}}function $m(e,n){return n.obrigatorio&&(e==null||e==="")?{valid:!1,motivo:"obrigatorio",reason:"Campo obrigatório não preenchido."}:e==null||e===""?{valid:!0}:n.tipo==="number"&&typeof e!="number"?{valid:!1,motivo:"tipo",reason:"O valor deve ser numérico."}:n.tipo==="boolean"&&typeof e!="boolean"?{valid:!1,motivo:"tipo",reason:"O valor deve ser booleano."}:{valid:!0}}class Mm{evaluate(n,o,a={}){return n.map(r=>this.evaluateRule(r,o,a))}evaluateRule(n,o,a){const r=a[n.parametro],t=o[n.parametro];if(!r)return{id:n.id,parametro:n.parametro,status:"erro",mensagem:`Parâmetro não definido: ${n.parametro}`};const s=$m(t,r);if(!s.valid)return{id:n.id,nome:n.nome,parametro:n.parametro,status:"invalido",motivo:s.motivo,mensagem:s.reason,referencia:n.referencia};if(t==null||t==="")return{id:n.id,nome:n.nome,parametro:n.parametro,status:"nao_avaliado",referencia:n.referencia};if(n.tipo==="checklist")return r.tipo==="boolean"?{id:n.id,nome:n.nome,status:t?"conforme":"nao_conforme",valorInformado:t,valorEsperado:!0,operador:"==",parametro:n.parametro,unidade:r.unidade,referencia:n.referencia}:{id:n.id,nome:n.nome,status:"manual",valor:t,mensagem:n.mensagem,referencia:n.referencia};if(n.tipo==="conditional")return this.evaluateConditional(n,o,a);const l=da(t,n.operador,n.valor);return{id:n.id,nome:n.nome,status:l?"conforme":"nao_conforme",valorInformado:t,valorEsperado:n.valor,operador:n.operador,parametro:n.parametro,unidade:r.unidade,referencia:n.referencia}}evaluateConditional(n,o,a){const r=o[n.parametro],t=r!=null&&r!=="";for(const s of n.condicoes??[])if(s.quando&&da(r,s.quando.operador,s.quando.valor)){if(s.resultado)return{id:n.id,nome:n.nome,status:s.resultado,valorInformado:r,referencia:n.referencia,mensagem:s.mensagem};if(s.verificar){const l=o[s.verificar.parametro],c=da(l,s.verificar.operador,s.verificar.valor);return{id:n.id,nome:n.nome,status:c?"conforme":"nao_conforme",valorInformado:l,valorEsperado:s.verificar.valor,operador:s.verificar.operador,parametro:s.verificar.parametro,unidade:a[s.verificar.parametro]?.unidade,parametroCondicional:n.parametro,valorCondicional:r,operadorCondicional:s.quando.operador,limiteCondicional:s.quando.valor,mensagem:s.mensagem,referencia:n.referencia}}}return t?{id:n.id,nome:n.nome,parametro:n.parametro,status:"erro",mensagem:`Nenhuma condição cobre ${n.parametro} = ${r}. Revise o conjunto de regras.`,referencia:n.referencia}:{id:n.id,nome:n.nome,parametro:n.parametro,status:"nao_avaliado",referencia:n.referencia}}}const Fm={conforme:"Conforme",nao_conforme:"Não conforme",nao_avaliado:"Pendente",invalido:"Falta preencher",erro:"Erro no conjunto",atencao:"Atenção",manual:"Verificar"},Lr=[{id:"preencher",label:"aguardando medição",statuses:["invalido","nao_avaliado"]},{id:"verificar",label:"para verificar",statuses:["manual","atencao"]},{id:"erro",label:"com erro no conjunto",statuses:["erro"]}];function zm(e){return Fm[e]??"Pendente"}function ar(e){return e==="nao_conforme"?"nao_conforme":e==="conforme"?"conforme":"pendente"}function Hm(e=[]){const n={conforme:0,nao_conforme:0,pendente:0},o=new Map(Lr.map(t=>[t.id,0]));for(const t of e){n[ar(t.status)]+=1;const s=Lr.find(l=>l.statuses.includes(t.status));s&&o.set(s.id,o.get(s.id)+1)}const a=Lr.map(t=>({id:t.id,label:t.label,count:o.get(t.id)})).filter(t=>t.count>0),r=a.reduce((t,s)=>t+s.count,0);return n.pendente>r&&a.push({id:"outros",label:"sem classificação",count:n.pendente-r}),{...n,pendingBreakdown:a}}function Tn(e,n){if(typeof e!="string"||e.trim()==="")throw new TypeError(`${n} deve ser um texto não vazio.`);return e.trim()}function Ia(){return typeof globalThis.crypto?.randomUUID=="function"?globalThis.crypto.randomUUID():`${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`}function Un(e=new Date,n="data"){const o=e instanceof Date?e:new Date(e);if(Number.isNaN(o.getTime()))throw new TypeError(`${n} deve ser uma data válida.`);return o.toISOString()}function Et(e){return typeof structuredClone=="function"?structuredClone(e):JSON.parse(JSON.stringify(e))}function qr({id:e=Ia(),elementId:n,data:o,result:a,evaluatedAt:r=new Date}={}){if(o===void 0||a===void 0)throw new TypeError("data e result são obrigatórios.");return{id:Tn(e,"id"),elementId:Tn(n,"elementId"),data:Et(o),result:Et(a),evaluatedAt:Un(r,"evaluatedAt")}}function Ct(e){const n=e[0]?.result;return n?.length?n.some(o=>ar(o.status)==="nao_conforme")?"nao_conforme":n.some(o=>ar(o.status)==="pendente")?"nao_avaliado":"conforme":"nao_avaliado"}class Um{constructor({elementRepository:n,environmentRepository:o,evaluationRepository:a,ruleEngine:r=new Mm}){this.elementRepository=n,this.environmentRepository=o,this.evaluationRepository=a,this.ruleEngine=r}async evaluateElement({elementId:n,checklist:o,data:a,evaluatedAt:r}){if(!await this.elementRepository.get(n))throw new Error("Elemento não encontrado.");const s=this.ruleEngine.evaluate(o.regras??[],a,o.parametros??{}),l=qr({elementId:n,data:a,result:s,evaluatedAt:r});return this.evaluationRepository.put(l)}async saveElementData({elementId:n,data:o,savedAt:a}){if(!await this.elementRepository.get(n))throw new Error("Elemento não encontrado.");const t=qr({elementId:n,data:o,result:[],evaluatedAt:a});return this.evaluationRepository.put(t)}async saveElementAnswers({elementId:n,checklist:o,data:a,savedAt:r}){return Object.keys(a??{}).length>0?this.evaluateElement({elementId:n,checklist:o,data:a,evaluatedAt:r}):this.saveElementData({elementId:n,data:a,savedAt:r})}evaluateTransientElement({elementId:n,checklist:o,data:a,evaluatedAt:r}){const t=this.ruleEngine.evaluate(o.regras??[],a,o.parametros??{});return qr({elementId:n,data:a,result:t,evaluatedAt:r})}async listEvaluations(n){return(await this.evaluationRepository.getByElementId(n)).sort((a,r)=>r.evaluatedAt.localeCompare(a.evaluatedAt))}async getEnvironmentSummary(n){const o=await this.elementRepository.getByEnvironmentId(n);return this.#e(o)}async getProjectSummary(n){if(!this.environmentRepository)throw new Error("Repositório de ambientes não configurado.");const o=await this.environmentRepository.getByProjectId(n),a=await Promise.all(o.map(r=>this.elementRepository.getByEnvironmentId(r.id)));return this.#e(a.flat())}async getProjectStatus(n){if(!this.environmentRepository)throw new Error("Repositório de ambientes não configurado.");const o=await this.environmentRepository.getByProjectId(n),a=await Promise.all(o.map(async t=>{const s=await this.elementRepository.getByEnvironmentId(t.id),l=await Promise.all(s.map(async c=>({element:c,status:Ct(await this.listEvaluations(c.id))})));return{environment:t,elements:l,summary:this.#n(l.map(c=>c.status))}})),r=a.flatMap(t=>t.elements.map(s=>s.status));return{summary:this.#n(r),environments:a}}async#e(n){const o=await Promise.all(n.map(async a=>Ct(await this.listEvaluations(a.id))));return this.#n(o)}#n(n){const o={totalElements:n.length,conforme:0,nao_conforme:0,nao_avaliado:0,pendente:0,score:0,overallStatus:"nao_avaliado"};for(const a of n)o[a]+=1;return o.pendente=o.nao_avaliado,o.score=o.totalElements?Math.round(o.conforme/o.totalElements*100):0,o.nao_conforme>0?o.overallStatus="nao_conforme":o.nao_avaliado===0&&o.totalElements>0&&(o.overallStatus="conforme"),o}}function Qi({id:e=Ia(),environmentId:n,name:o,type:a,rule:r,createdAt:t=new Date,updatedAt:s=t}={}){return{id:Tn(e,"id"),environmentId:Tn(n,"environmentId"),name:Tn(o,"name"),type:Tn(a,"type"),rule:Tn(r,"rule"),createdAt:Un(t,"createdAt"),updatedAt:Un(s,"updatedAt")}}function Xi({id:e=Ia(),projectId:n,name:o,createdAt:a=new Date,updatedAt:r=a}={}){return{id:Tn(e,"id"),projectId:Tn(n,"projectId"),name:Tn(o,"name"),createdAt:Un(a,"createdAt"),updatedAt:Un(r,"updatedAt")}}function Zi({id:e=Ia(),name:n,description:o="",createdAt:a=new Date,updatedAt:r=a}={}){return{id:Tn(e,"id"),name:Tn(n,"name"),description:typeof o=="string"?o.trim():"",createdAt:Un(a,"createdAt"),updatedAt:Un(r,"updatedAt")}}class Km{constructor({projectRepository:n,environmentRepository:o,elementRepository:a,evaluationRepository:r}){this.projectRepository=n,this.environmentRepository=o,this.elementRepository=a,this.evaluationRepository=r}async createProject(n){const o=Zi(n);return this.projectRepository.put(o)}listProjects(){return this.projectRepository.getAll()}getProject(n){return this.projectRepository.get(n)}async updateProject(n,{name:o,description:a}){const r=await this.#e(this.projectRepository.get(n),"Projeto");return this.projectRepository.put(Zi({...r,name:o,description:a,updatedAt:new Date}))}async renameProject(n,o){const a=await this.#e(this.projectRepository.get(n),"Projeto");return this.updateProject(n,{name:o,description:a.description})}async createEnvironment(n,o){await this.#e(this.projectRepository.get(n),"Projeto");const a=Xi({...o,projectId:n});return this.environmentRepository.put(a)}listEnvironments(n){return this.environmentRepository.getByProjectId(n)}getEnvironment(n){return this.environmentRepository.get(n)}async renameEnvironment(n,o){const a=await this.#e(this.environmentRepository.get(n),"Ambiente");return this.environmentRepository.put(Xi({...a,name:o,updatedAt:new Date}))}async createElement(n,o){await this.#e(this.environmentRepository.get(n),"Ambiente");const a=Qi({...o,environmentId:n});return this.elementRepository.put(a)}listElements(n){return this.elementRepository.getByEnvironmentId(n)}getElement(n){return this.elementRepository.get(n)}async updateElement(n,o){const a=await this.#e(this.elementRepository.get(n),"Elemento");return this.elementRepository.put(Qi({...a,...o,id:a.id,environmentId:a.environmentId,createdAt:a.createdAt,updatedAt:Un(new Date)}))}async deleteElement(n){const o=await this.evaluationRepository.getByElementId(n);await Promise.all(o.map(a=>this.evaluationRepository.delete(a.id))),await this.elementRepository.delete(n)}async deleteEnvironment(n){const o=await this.elementRepository.getByEnvironmentId(n);await Promise.all(o.map(a=>this.deleteElement(a.id))),await this.environmentRepository.delete(n)}async deleteProject(n){const o=await this.environmentRepository.getByProjectId(n);await Promise.all(o.map(a=>this.deleteEnvironment(a.id))),await this.projectRepository.delete(n)}async#e(n,o){const a=await n;if(!a)throw new Error(`${o} não encontrado.`);return a}}class Gm{constructor({evaluationService:n}){this.evaluationService=n,this.current=null}evaluate({name:n,checklist:o,data:a}){const r={id:Ia(),name:n?.trim()||o.nome,type:o.nome,rule:o.id},t=this.evaluationService.evaluateTransientElement({elementId:r.id,checklist:o,data:a});return this.current={element:r,evaluation:t},this.current}getCurrent(){return this.current}clear(){this.current=null}}const Wm=new Set(["checklist","conditional"]),Ym={checklist:["condicoes","operador","valor"],conditional:["operador","valor"],direta:["condicoes"]},Jm=new Set(["number","boolean","select"]),es=new Set(["conforme","nao_conforme","nao_avaliado","atencao","manual"]);function Rn(e){return e!==null&&typeof e=="object"&&!Array.isArray(e)}function ma(e,n,o){(typeof e!="string"||e.trim()==="")&&o.push(`${n} deve ser um texto não vazio.`)}function vc(e,n,o){qm.has(e)||o.push(`${n} deve ser um operador suportado.`)}function ns(e,n,o){if(!Rn(e)){o.push(`${n} deve ser um objeto.`);return}vc(e.operador,`${n}.operador`,o),"valor"in e||o.push(`${n}.valor é obrigatório.`)}function Qm(e,n){for(const[o,a]of Object.entries(e)){const r=`parametros.${o}`;if(!Rn(a)){n.push(`${r} deve ser um objeto.`);continue}Jm.has(a.tipo)||n.push(`${r}.tipo deve ser number, boolean ou select.`),a.tipo==="select"&&(!Array.isArray(a.opcoes)||a.opcoes.length===0)&&n.push(`${r}.opcoes deve listar as opções do campo do tipo select.`),"unidade"in a&&!Zm(a.unidade)&&n.push(`${r}.unidade deve ser um texto ou { singular, plural }.`)}}function os(e,n){return e.some(o=>o.operador==="=="?o.valor===n:o.operador==="!="&&o.valor!==n)}function Xm(e,n){const o=e.map(a=>Rn(a)?a.quando:null).filter(Rn);return o.some(a=>a.operador===">"||a.operador===">=")?!0:n.tipo==="boolean"?[!0,!1].every(a=>os(o,a)):n.tipo==="select"?(n.opcoes??[]).every(a=>os(o,a)):!1}function Zm(e){return typeof e=="string"?!0:Rn(e)&&typeof e.singular=="string"&&e.singular.trim()!==""&&typeof e.plural=="string"&&e.plural.trim()!==""}function ep(e,n,o){const a=e.tipo??"direta",r=(Ym[a]??[]).filter(t=>t in e);r.length&&o.push(`${n} não usa ${r.join(", ")} em regra do tipo ${a}; o motor ignora esse campo.`)}function np(e,n,o,a){const r=`regras[${n}]`;if(!Rn(e)){a.push(`${r} deve ser um objeto.`);return}if(ep(e,r,a),ma(e.id,`${r}.id`,a),ma(e.nome,`${r}.nome`,a),ma(e.parametro,`${r}.parametro`,a),typeof e.parametro=="string"&&!(e.parametro in o)&&a.push(`${r}.parametro deve existir em parametros.`),e.tipo==="checklist"){const t=o[e.parametro];Rn(t)&&t.tipo!=="boolean"&&(typeof e.mensagem!="string"||e.mensagem.trim()==="")&&a.push(`${r}.mensagem é obrigatória em regra checklist de campo ${t.tipo}: descreva o critério de julgamento.`);return}if(e.tipo==="conditional"){if(!Array.isArray(e.condicoes)||e.condicoes.length===0){a.push(`${r}.condicoes deve conter ao menos uma condição.`);return}e.condicoes.forEach((s,l)=>{const c=`${r}.condicoes[${l}]`;if(!Rn(s)){a.push(`${c} deve ser um objeto.`);return}ns(s.quando,`${c}.quando`,a);const d=typeof s.resultado=="string"&&s.resultado!=="",u="verificar"in s;d===u&&a.push(`${c} deve informar exatamente resultado ou verificar.`),d&&!es.has(s.resultado)&&a.push(`${c}.resultado deve ser um de: ${[...es].join(", ")}.`),u&&(ns(s.verificar,`${c}.verificar`,a),(typeof s.verificar?.parametro!="string"||!(s.verificar.parametro in o))&&a.push(`${c}.verificar.parametro deve existir em parametros.`))});const t=o[e.parametro];Rn(t)&&!Xm(e.condicoes,t)&&a.push(`${r}.condicoes deve cobrir todos os valores de ${e.parametro}: inclua um ramo final com operador ">" ou ">=", ou um ramo para cada opção do campo.`);return}e.tipo!==void 0&&!Wm.has(e.tipo)&&a.push(`${r}.tipo não é suportado.`),vc(e.operador,`${r}.operador`,a),"valor"in e||a.push(`${r}.valor é obrigatório.`)}function op(e){const n=[];return Rn(e)?(ma(e.id,"id",n),ma(e.nome,"nome",n),Rn(e.parametros)||n.push("parametros deve ser um objeto."),Array.isArray(e.regras)||n.push("regras deve ser uma lista."),Rn(e.parametros)&&Array.isArray(e.regras)&&(Qm(e.parametros,n),e.regras.forEach((o,a)=>np(o,a,e.parametros,n))),{valid:n.length===0,errors:n}):{valid:!1,errors:["O conjunto de regras deve ser um objeto."]}}function kt(e){const n=op(e);if(!n.valid)throw new TypeError(`Conjunto de regras inválido: ${n.errors.join(" ")}`);return e}function ap(e,{createdAt:n=new Date,updatedAt:o=n}={}){return kt(e),{...Et(e),source:"user",createdAt:Un(n,"createdAt"),updatedAt:Un(o,"updatedAt")}}function rp(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var an={},$a={},io={},as;function Pa(){if(as)return io;as=1;function e(s){return typeof s>"u"||s===null}function n(s){return typeof s=="object"&&s!==null}function o(s){return Array.isArray(s)?s:e(s)?[]:[s]}function a(s,l){if(l){const c=Object.keys(l);for(let d=0,u=c.length;d<u;d+=1){const m=c[d];s[m]=l[m]}}return s}function r(s,l){let c="";for(let d=0;d<l;d+=1)c+=s;return c}function t(s){return s===0&&Number.NEGATIVE_INFINITY===1/s}return io.isNothing=e,io.isObject=n,io.toArray=o,io.repeat=r,io.isNegativeZero=t,io.extend=a,io}var $r,rs;function Oa(){if(rs)return $r;rs=1;function e(o,a){let r="";const t=o.reason||"(unknown reason)";return o.mark?(o.mark.name&&(r+='in "'+o.mark.name+'" '),r+="("+(o.mark.line+1)+":"+(o.mark.column+1)+")",!a&&o.mark.snippet&&(r+=`

`+o.mark.snippet),t+" "+r):t}function n(o,a){Error.call(this),this.name="YAMLException",this.reason=o,this.mark=a,this.message=e(this,!1),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack||""}return n.prototype=Object.create(Error.prototype),n.prototype.constructor=n,n.prototype.toString=function(a){return this.name+": "+e(this,a)},$r=n,$r}var Mr,ts;function tp(){if(ts)return Mr;ts=1;const e=Pa();function n(r,t,s,l,c){let d="",u="";const m=Math.floor(c/2)-1;return l-t>m&&(d=" ... ",t=l-m+d.length),s-l>m&&(u=" ...",s=l+m-u.length),{str:d+r.slice(t,s).replace(/\t/g,"→")+u,pos:l-t+d.length}}function o(r,t){return e.repeat(" ",t-r.length)+r}function a(r,t){if(t=Object.create(t||null),!r.buffer)return null;t.maxLength||(t.maxLength=79),typeof t.indent!="number"&&(t.indent=1),typeof t.linesBefore!="number"&&(t.linesBefore=3),typeof t.linesAfter!="number"&&(t.linesAfter=2);const s=/\r?\n|\r|\0/g,l=[0],c=[];let d,u=-1;for(;d=s.exec(r.buffer);)c.push(d.index),l.push(d.index+d[0].length),r.position<=d.index&&u<0&&(u=l.length-2);u<0&&(u=l.length-1);let m="";const f=Math.min(r.line+t.linesAfter,c.length).toString().length,v=t.maxLength-(t.indent+f+3);for(let x=1;x<=t.linesBefore&&!(u-x<0);x++){const R=n(r.buffer,l[u-x],c[u-x],r.position-(l[u]-l[u-x]),v);m=e.repeat(" ",t.indent)+o((r.line-x+1).toString(),f)+" | "+R.str+`
`+m}const B=n(r.buffer,l[u],c[u],r.position,v);m+=e.repeat(" ",t.indent)+o((r.line+1).toString(),f)+" | "+B.str+`
`,m+=e.repeat("-",t.indent+f+3+B.pos)+`^
`;for(let x=1;x<=t.linesAfter&&!(u+x>=c.length);x++){const R=n(r.buffer,l[u+x],c[u+x],r.position-(l[u]-l[u+x]),v);m+=e.repeat(" ",t.indent)+o((r.line+x+1).toString(),f)+" | "+R.str+`
`}return m.replace(/\n$/,"")}return Mr=a,Mr}var Fr,is;function gn(){if(is)return Fr;is=1;const e=Oa(),n=["kind","multi","resolve","construct","instanceOf","predicate","represent","representName","defaultStyle","styleAliases"],o=["scalar","sequence","mapping"];function a(t){const s={};return t!==null&&Object.keys(t).forEach(function(l){t[l].forEach(function(c){s[String(c)]=l})}),s}function r(t,s){if(s=s||{},Object.keys(s).forEach(function(l){if(n.indexOf(l)===-1)throw new e('Unknown option "'+l+'" is met in definition of "'+t+'" YAML type.')}),this.options=s,this.tag=t,this.kind=s.kind||null,this.resolve=s.resolve||function(){return!0},this.construct=s.construct||function(l){return l},this.instanceOf=s.instanceOf||null,this.predicate=s.predicate||null,this.represent=s.represent||null,this.representName=s.representName||null,this.defaultStyle=s.defaultStyle||null,this.multi=s.multi||!1,this.styleAliases=a(s.styleAliases||null),o.indexOf(this.kind)===-1)throw new e('Unknown kind "'+this.kind+'" is specified for "'+t+'" YAML type.')}return Fr=r,Fr}var zr,ss;function gc(){if(ss)return zr;ss=1;const e=Oa(),n=gn();function o(t,s){const l=[];return t[s].forEach(function(c){let d=l.length;l.forEach(function(u,m){u.tag===c.tag&&u.kind===c.kind&&u.multi===c.multi&&(d=m)}),l[d]=c}),l}function a(){const t={scalar:{},sequence:{},mapping:{},fallback:{},multi:{scalar:[],sequence:[],mapping:[],fallback:[]}};function s(l){l.multi?(t.multi[l.kind].push(l),t.multi.fallback.push(l)):t[l.kind][l.tag]=t.fallback[l.tag]=l}for(let l=0,c=arguments.length;l<c;l+=1)arguments[l].forEach(s);return t}function r(t){return this.extend(t)}return r.prototype.extend=function(s){let l=[],c=[];if(s instanceof n)c.push(s);else if(Array.isArray(s))c=c.concat(s);else if(s&&(Array.isArray(s.implicit)||Array.isArray(s.explicit)))s.implicit&&(l=l.concat(s.implicit)),s.explicit&&(c=c.concat(s.explicit));else throw new e("Schema.extend argument should be a Type, [ Type ], or a schema definition ({ implicit: [...], explicit: [...] })");l.forEach(function(u){if(!(u instanceof n))throw new e("Specified list of YAML types (or a single Type object) contains a non-Type object.");if(u.loadKind&&u.loadKind!=="scalar")throw new e("There is a non-scalar type in the implicit list of a schema. Implicit resolving of such types is not supported.");if(u.multi)throw new e("There is a multi type in the implicit list of a schema. Multi tags can only be listed as explicit.")}),c.forEach(function(u){if(!(u instanceof n))throw new e("Specified list of YAML types (or a single Type object) contains a non-Type object.")});const d=Object.create(r.prototype);return d.implicit=(this.implicit||[]).concat(l),d.explicit=(this.explicit||[]).concat(c),d.compiledImplicit=o(d,"implicit"),d.compiledExplicit=o(d,"explicit"),d.compiledTypeMap=a(d.compiledImplicit,d.compiledExplicit),d},zr=r,zr}var Hr,ls;function bc(){if(ls)return Hr;ls=1;const e=gn();return Hr=new e("tag:yaml.org,2002:str",{kind:"scalar",construct:function(n){return n!==null?n:""}}),Hr}var Ur,cs;function _c(){if(cs)return Ur;cs=1;const e=gn();return Ur=new e("tag:yaml.org,2002:seq",{kind:"sequence",construct:function(n){return n!==null?n:[]}}),Ur}var Kr,us;function yc(){if(us)return Kr;us=1;const e=gn();return Kr=new e("tag:yaml.org,2002:map",{kind:"mapping",construct:function(n){return n!==null?n:{}}}),Kr}var Gr,ds;function Ac(){if(ds)return Gr;ds=1;const e=gc();return Gr=new e({explicit:[bc(),_c(),yc()]}),Gr}var Wr,ms;function Nc(){if(ms)return Wr;ms=1;const e=gn();function n(r){if(r===null)return!0;const t=r.length;return t===1&&r==="~"||t===4&&(r==="null"||r==="Null"||r==="NULL")}function o(){return null}function a(r){return r===null}return Wr=new e("tag:yaml.org,2002:null",{kind:"scalar",resolve:n,construct:o,predicate:a,represent:{canonical:function(){return"~"},lowercase:function(){return"null"},uppercase:function(){return"NULL"},camelcase:function(){return"Null"},empty:function(){return""}},defaultStyle:"lowercase"}),Wr}var Yr,ps;function xc(){if(ps)return Yr;ps=1;const e=gn();function n(r){if(r===null)return!1;const t=r.length;return t===4&&(r==="true"||r==="True"||r==="TRUE")||t===5&&(r==="false"||r==="False"||r==="FALSE")}function o(r){return r==="true"||r==="True"||r==="TRUE"}function a(r){return Object.prototype.toString.call(r)==="[object Boolean]"}return Yr=new e("tag:yaml.org,2002:bool",{kind:"scalar",resolve:n,construct:o,predicate:a,represent:{lowercase:function(r){return r?"true":"false"},uppercase:function(r){return r?"TRUE":"FALSE"},camelcase:function(r){return r?"True":"False"}},defaultStyle:"lowercase"}),Yr}var Jr,fs;function Bc(){if(fs)return Jr;fs=1;const e=Pa(),n=gn();function o(d){return d>=48&&d<=57||d>=65&&d<=70||d>=97&&d<=102}function a(d){return d>=48&&d<=55}function r(d){return d>=48&&d<=57}function t(d){if(d===null)return!1;const u=d.length;let m=0,f=!1;if(!u)return!1;let v=d[m];if((v==="-"||v==="+")&&(v=d[++m]),v==="0"){if(m+1===u)return!0;if(v=d[++m],v==="b"){for(m++;m<u;m++){if(v=d[m],v!=="0"&&v!=="1")return!1;f=!0}return f&&isFinite(s(d))}if(v==="x"){for(m++;m<u;m++){if(!o(d.charCodeAt(m)))return!1;f=!0}return f&&isFinite(s(d))}if(v==="o"){for(m++;m<u;m++){if(!a(d.charCodeAt(m)))return!1;f=!0}return f&&isFinite(s(d))}}for(;m<u;m++){if(!r(d.charCodeAt(m)))return!1;f=!0}return f?isFinite(s(d)):!1}function s(d){let u=d,m=1,f=u[0];if((f==="-"||f==="+")&&(f==="-"&&(m=-1),u=u.slice(1),f=u[0]),u==="0")return 0;if(f==="0"){if(u[1]==="b")return m*parseInt(u.slice(2),2);if(u[1]==="x")return m*parseInt(u.slice(2),16);if(u[1]==="o")return m*parseInt(u.slice(2),8)}return m*parseInt(u,10)}function l(d){return s(d)}function c(d){return Object.prototype.toString.call(d)==="[object Number]"&&d%1===0&&!e.isNegativeZero(d)}return Jr=new n("tag:yaml.org,2002:int",{kind:"scalar",resolve:t,construct:l,predicate:c,represent:{binary:function(d){return d>=0?"0b"+d.toString(2):"-0b"+d.toString(2).slice(1)},octal:function(d){return d>=0?"0o"+d.toString(8):"-0o"+d.toString(8).slice(1)},decimal:function(d){return d.toString(10)},hexadecimal:function(d){return d>=0?"0x"+d.toString(16).toUpperCase():"-0x"+d.toString(16).toUpperCase().slice(1)}},defaultStyle:"decimal",styleAliases:{binary:[2,"bin"],octal:[8,"oct"],decimal:[10,"dec"],hexadecimal:[16,"hex"]}}),Jr}var Qr,hs;function Tc(){if(hs)return Qr;hs=1;const e=Pa(),n=gn(),o=new RegExp("^(?:[-+]?(?:[0-9]+)(?:\\.[0-9]*)?(?:[eE][-+]?[0-9]+)?|\\.[0-9]+(?:[eE][-+]?[0-9]+)?|[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$"),a=new RegExp("^(?:[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$");function r(d){return d===null||!o.test(d)?!1:isFinite(parseFloat(d,10))?!0:a.test(d)}function t(d){let u=d.toLowerCase();const m=u[0]==="-"?-1:1;return"+-".indexOf(u[0])>=0&&(u=u.slice(1)),u===".inf"?m===1?Number.POSITIVE_INFINITY:Number.NEGATIVE_INFINITY:u===".nan"?NaN:m*parseFloat(u,10)}const s=/^[-+]?[0-9]+e/;function l(d,u){if(isNaN(d))switch(u){case"lowercase":return".nan";case"uppercase":return".NAN";case"camelcase":return".NaN"}else if(Number.POSITIVE_INFINITY===d)switch(u){case"lowercase":return".inf";case"uppercase":return".INF";case"camelcase":return".Inf"}else if(Number.NEGATIVE_INFINITY===d)switch(u){case"lowercase":return"-.inf";case"uppercase":return"-.INF";case"camelcase":return"-.Inf"}else if(e.isNegativeZero(d))return"-0.0";const m=d.toString(10);return s.test(m)?m.replace("e",".e"):m}function c(d){return Object.prototype.toString.call(d)==="[object Number]"&&(d%1!==0||e.isNegativeZero(d))}return Qr=new n("tag:yaml.org,2002:float",{kind:"scalar",resolve:r,construct:t,predicate:c,represent:l,defaultStyle:"lowercase"}),Qr}var Xr,vs;function Rc(){return vs||(vs=1,Xr=Ac().extend({implicit:[Nc(),xc(),Bc(),Tc()]})),Xr}var Zr,gs;function Sc(){return gs||(gs=1,Zr=Rc()),Zr}var et,bs;function wc(){if(bs)return et;bs=1;const e=gn(),n=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9])-([0-9][0-9])$"),o=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9]?)-([0-9][0-9]?)(?:[Tt]|[ \\t]+)([0-9][0-9]?):([0-9][0-9]):([0-9][0-9])(?:\\.([0-9]*))?(?:[ \\t]*(Z|([-+])([0-9][0-9]?)(?::([0-9][0-9]))?))?$");function a(s){return s===null?!1:n.exec(s)!==null||o.exec(s)!==null}function r(s){let l=0,c=null,d=n.exec(s);if(d===null&&(d=o.exec(s)),d===null)throw new Error("Date resolve error");const u=+d[1],m=+d[2]-1,f=+d[3];if(!d[4])return new Date(Date.UTC(u,m,f));const v=+d[4],B=+d[5],x=+d[6];if(d[7]){for(l=d[7].slice(0,3);l.length<3;)l+="0";l=+l}if(d[9]){const z=+d[10],P=+(d[11]||0);c=(z*60+P)*6e4,d[9]==="-"&&(c=-c)}const R=new Date(Date.UTC(u,m,f,v,B,x,l));return c&&R.setTime(R.getTime()-c),R}function t(s){return s.toISOString()}return et=new e("tag:yaml.org,2002:timestamp",{kind:"scalar",resolve:a,construct:r,instanceOf:Date,represent:t}),et}var nt,_s;function Ec(){if(_s)return nt;_s=1;const e=gn();function n(o){return o==="<<"||o===null}return nt=new e("tag:yaml.org,2002:merge",{kind:"scalar",resolve:n}),nt}var ot,ys;function Cc(){if(ys)return ot;ys=1;const e=gn(),n=`ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=
\r`;function o(s){if(s===null)return!1;let l=0;const c=s.length,d=n;for(let u=0;u<c;u++){const m=d.indexOf(s.charAt(u));if(!(m>64)){if(m<0)return!1;l+=6}}return l%8===0}function a(s){const l=s.replace(/[\r\n=]/g,""),c=l.length,d=n;let u=0;const m=[];for(let v=0;v<c;v++)v%4===0&&v&&(m.push(u>>16&255),m.push(u>>8&255),m.push(u&255)),u=u<<6|d.indexOf(l.charAt(v));const f=c%4*6;return f===0?(m.push(u>>16&255),m.push(u>>8&255),m.push(u&255)):f===18?(m.push(u>>10&255),m.push(u>>2&255)):f===12&&m.push(u>>4&255),new Uint8Array(m)}function r(s){let l="",c=0;const d=s.length,u=n;for(let f=0;f<d;f++)f%3===0&&f&&(l+=u[c>>18&63],l+=u[c>>12&63],l+=u[c>>6&63],l+=u[c&63]),c=(c<<8)+s[f];const m=d%3;return m===0?(l+=u[c>>18&63],l+=u[c>>12&63],l+=u[c>>6&63],l+=u[c&63]):m===2?(l+=u[c>>10&63],l+=u[c>>4&63],l+=u[c<<2&63],l+=u[64]):m===1&&(l+=u[c>>2&63],l+=u[c<<4&63],l+=u[64],l+=u[64]),l}function t(s){return Object.prototype.toString.call(s)==="[object Uint8Array]"}return ot=new e("tag:yaml.org,2002:binary",{kind:"scalar",resolve:o,construct:a,predicate:t,represent:r}),ot}var at,As;function kc(){if(As)return at;As=1;const e=gn(),n=Object.prototype.hasOwnProperty,o=Object.prototype.toString;function a(t){if(t===null)return!0;const s={},l=t;for(let c=0,d=l.length;c<d;c+=1){const u=l[c];let m=!1;if(o.call(u)!=="[object Object]")return!1;let f;for(f in u)if(n.call(u,f))if(!m)m=!0;else return!1;if(!m||n.call(s,f))return!1;Object.defineProperty(s,f,{value:!0})}return!0}function r(t){return t!==null?t:[]}return at=new e("tag:yaml.org,2002:omap",{kind:"sequence",resolve:a,construct:r}),at}var rt,Ns;function Ic(){if(Ns)return rt;Ns=1;const e=gn(),n=Object.prototype.toString;function o(r){if(r===null)return!0;const t=r,s=new Array(t.length);for(let l=0,c=t.length;l<c;l+=1){const d=t[l];if(n.call(d)!=="[object Object]")return!1;const u=Object.keys(d);if(u.length!==1)return!1;s[l]=[u[0],d[u[0]]]}return!0}function a(r){if(r===null)return[];const t=r,s=new Array(t.length);for(let l=0,c=t.length;l<c;l+=1){const d=t[l],u=Object.keys(d);s[l]=[u[0],d[u[0]]]}return s}return rt=new e("tag:yaml.org,2002:pairs",{kind:"sequence",resolve:o,construct:a}),rt}var tt,xs;function Pc(){if(xs)return tt;xs=1;const e=gn(),n=Object.prototype.hasOwnProperty;function o(r){if(r===null)return!0;const t=r;for(const s in t)if(n.call(t,s)&&t[s]!==null)return!1;return!0}function a(r){return r!==null?r:{}}return tt=new e("tag:yaml.org,2002:set",{kind:"mapping",resolve:o,construct:a}),tt}var it,Bs;function ni(){return Bs||(Bs=1,it=Sc().extend({implicit:[wc(),Ec()],explicit:[Cc(),kc(),Ic(),Pc()]})),it}var Ts;function ip(){if(Ts)return $a;Ts=1;const e=Pa(),n=Oa(),o=tp(),a=ni(),r=Object.prototype.hasOwnProperty,t=1,s=2,l=3,c=4,d=1,u=2,m=3,f=/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F-\x84\x86-\x9F\uFFFE\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/,v=/[\x85\u2028\u2029]/,B=/[,\[\]{}]/,x=/^(?:!|!!|![0-9A-Za-z-]+!)$/,R=/^(?:!|[^,\[\]{}])(?:%[0-9a-f]{2}|[0-9a-z\-#;/?:@&=+$,_.!~*'()\[\]])*$/i;function z(i){return Object.prototype.toString.call(i)}function P(i){return i===10||i===13}function J(i){return i===9||i===32}function q(i){return i===9||i===32||i===10||i===13}function ne(i){return i===44||i===91||i===93||i===123||i===125}function H(i){if(i>=48&&i<=57)return i-48;const _=i|32;return _>=97&&_<=102?_-97+10:-1}function E(i){return i===120?2:i===117?4:i===85?8:0}function k(i){return i>=48&&i<=57?i-48:-1}function C(i){switch(i){case 48:return"\0";case 97:return"\x07";case 98:return"\b";case 116:return"	";case 9:return"	";case 110:return`
`;case 118:return"\v";case 102:return"\f";case 114:return"\r";case 101:return"\x1B";case 32:return" ";case 34:return'"';case 47:return"/";case 92:return"\\";case 78:return"";case 95:return" ";case 76:return"\u2028";case 80:return"\u2029";default:return""}}function le(i){return i<=65535?String.fromCharCode(i):String.fromCharCode((i-65536>>10)+55296,(i-65536&1023)+56320)}function fe(i,_,S){_==="__proto__"?Object.defineProperty(i,_,{configurable:!0,enumerable:!0,writable:!0,value:S}):i[_]=S}const ae=new Array(256),Re=new Array(256);for(let i=0;i<256;i++)ae[i]=C(i)?1:0,Re[i]=C(i);function Ae(i,_){this.input=i,this.filename=_.filename||null,this.schema=_.schema||a,this.onWarning=_.onWarning||null,this.legacy=_.legacy||!1,this.json=_.json||!1,this.listener=_.listener||null,this.maxDepth=typeof _.maxDepth=="number"?_.maxDepth:100,this.maxTotalMergeKeys=typeof _.maxTotalMergeKeys=="number"?_.maxTotalMergeKeys:1e4,this.implicitTypes=this.schema.compiledImplicit,this.typeMap=this.schema.compiledTypeMap,this.length=i.length,this.position=0,this.line=0,this.lineStart=0,this.lineIndent=0,this.depth=0,this.totalMergeKeys=0,this.firstTabInLine=-1,this.documents=[],this.anchorMapTransactions=[]}function se(i,_){const S={name:i.filename,buffer:i.input.slice(0,-1),position:i.position,line:i.line,column:i.position-i.lineStart};return S.snippet=o(S),new n(_,S)}function y(i,_){throw se(i,_)}function F(i,_){i.onWarning&&i.onWarning.call(null,se(i,_))}function W(i,_,S){const O=i.anchorMapTransactions;if(O.length!==0){const T=O[O.length-1];r.call(T,_)||(T[_]={existed:r.call(i.anchorMap,_),value:i.anchorMap[_]})}i.anchorMap[_]=S}function he(i){i.anchorMapTransactions.push(Object.create(null))}function Ie(i){const _=i.anchorMapTransactions.pop(),S=i.anchorMapTransactions;if(S.length===0)return;const O=S[S.length-1],T=Object.keys(_);for(let Q=0,p=T.length;Q<p;Q+=1){const N=T[Q];r.call(O,N)||(O[N]=_[N])}}function ze(i){const _=i.anchorMapTransactions.pop(),S=Object.keys(_);for(let O=S.length-1;O>=0;O-=1){const T=_[S[O]];T.existed?i.anchorMap[S[O]]=T.value:delete i.anchorMap[S[O]]}}function Ve(i){return{position:i.position,line:i.line,lineStart:i.lineStart,lineIndent:i.lineIndent,firstTabInLine:i.firstTabInLine,tag:i.tag,anchor:i.anchor,kind:i.kind,result:i.result}}function on(i,_){i.position=_.position,i.line=_.line,i.lineStart=_.lineStart,i.lineIndent=_.lineIndent,i.firstTabInLine=_.firstTabInLine,i.tag=_.tag,i.anchor=_.anchor,i.kind=_.kind,i.result=_.result}const Cn={YAML:function(_,S,O){_.version!==null&&y(_,"duplication of %YAML directive"),O.length!==1&&y(_,"YAML directive accepts exactly one argument");const T=/^([0-9]+)\.([0-9]+)$/.exec(O[0]);T===null&&y(_,"ill-formed argument of the YAML directive");const Q=parseInt(T[1],10),p=parseInt(T[2],10);Q!==1&&y(_,"unacceptable YAML version of the document"),_.version=O[0],_.checkLineBreaks=p<2,p!==1&&p!==2&&F(_,"unsupported YAML version of the document")},TAG:function(_,S,O){let T;O.length!==2&&y(_,"TAG directive accepts exactly two arguments");const Q=O[0];T=O[1],x.test(Q)||y(_,"ill-formed tag handle (first argument) of the TAG directive"),r.call(_.tagMap,Q)&&y(_,'there is a previously declared suffix for "'+Q+'" tag handle'),R.test(T)||y(_,"ill-formed tag prefix (second argument) of the TAG directive");try{T=decodeURIComponent(T)}catch{y(_,"tag prefix is malformed: "+T)}_.tagMap[Q]=T}};function Je(i,_,S,O){if(_<S){const T=i.input.slice(_,S);if(O)for(let Q=0,p=T.length;Q<p;Q+=1){const N=T.charCodeAt(Q);N===9||N>=32&&N<=1114111||y(i,"expected valid JSON character")}else f.test(T)&&y(i,"the stream contains non-printable characters");i.result+=T}}function Qe(i,_,S,O){e.isObject(S)||y(i,"cannot merge mappings; the provided source object is unacceptable");const T=Object.keys(S);for(let Q=0,p=T.length;Q<p;Q+=1){const N=T[Q];i.maxTotalMergeKeys!==-1&&++i.totalMergeKeys>i.maxTotalMergeKeys&&y(i,"merge keys exceeded maxTotalMergeKeys ("+i.maxTotalMergeKeys+")"),r.call(_,N)||(fe(_,N,S[N]),O[N]=!0)}}function j(i,_,S,O,T,Q,p,N,M){if(Array.isArray(T)){T=Array.prototype.slice.call(T);for(let D=0,L=T.length;D<L;D+=1)Array.isArray(T[D])&&y(i,"nested arrays are not supported inside keys"),typeof T=="object"&&z(T[D])==="[object Object]"&&(T[D]="[object Object]")}if(typeof T=="object"&&z(T)==="[object Object]"&&(T="[object Object]"),T=String(T),_===null&&(_={}),O==="tag:yaml.org,2002:merge")if(Array.isArray(Q))for(let D=0,L=Q.length;D<L;D+=1)Qe(i,_,Q[D],S);else Qe(i,_,Q,S);else!i.json&&!r.call(S,T)&&r.call(_,T)&&(i.line=p||i.line,i.lineStart=N||i.lineStart,i.position=M||i.position,y(i,"duplicated mapping key")),fe(_,T,Q),delete S[T];return _}function ue(i){const _=i.input.charCodeAt(i.position);_===10?i.position++:_===13?(i.position++,i.input.charCodeAt(i.position)===10&&i.position++):y(i,"a line break is expected"),i.line+=1,i.lineStart=i.position,i.firstTabInLine=-1}function Z(i,_,S){let O=0,T=i.input.charCodeAt(i.position);for(;T!==0;){for(;J(T);)T===9&&i.firstTabInLine===-1&&(i.firstTabInLine=i.position),T=i.input.charCodeAt(++i.position);if(_&&T===35)do T=i.input.charCodeAt(++i.position);while(T!==10&&T!==13&&T!==0);if(P(T))for(ue(i),T=i.input.charCodeAt(i.position),O++,i.lineIndent=0;T===32;)i.lineIndent++,T=i.input.charCodeAt(++i.position);else break}return S!==-1&&O!==0&&i.lineIndent<S&&F(i,"deficient indentation"),O}function pe(i){let _=i.position,S=i.input.charCodeAt(_);return!!((S===45||S===46)&&S===i.input.charCodeAt(_+1)&&S===i.input.charCodeAt(_+2)&&(_+=3,S=i.input.charCodeAt(_),S===0||q(S)))}function we(i,_){_===1?i.result+=" ":_>1&&(i.result+=e.repeat(`
`,_-1))}function h(i,_,S){let O,T,Q,p,N,M;const D=i.kind,L=i.result;let X=i.input.charCodeAt(i.position);if(q(X)||ne(X)||X===35||X===38||X===42||X===33||X===124||X===62||X===39||X===34||X===37||X===64||X===96)return!1;if(X===63||X===45){const Y=i.input.charCodeAt(i.position+1);if(q(Y)||S&&ne(Y))return!1}for(i.kind="scalar",i.result="",O=T=i.position,Q=!1;X!==0;){if(X===58){const Y=i.input.charCodeAt(i.position+1);if(q(Y)||S&&ne(Y))break}else if(X===35){const Y=i.input.charCodeAt(i.position-1);if(q(Y))break}else{if(i.position===i.lineStart&&pe(i)||S&&ne(X))break;if(P(X))if(p=i.line,N=i.lineStart,M=i.lineIndent,Z(i,!1,-1),i.lineIndent>=_){Q=!0,X=i.input.charCodeAt(i.position);continue}else{i.position=T,i.line=p,i.lineStart=N,i.lineIndent=M;break}}Q&&(Je(i,O,T,!1),we(i,i.line-p),O=T=i.position,Q=!1),J(X)||(T=i.position+1),X=i.input.charCodeAt(++i.position)}return Je(i,O,T,!1),i.result?!0:(i.kind=D,i.result=L,!1)}function b(i,_){let S,O,T=i.input.charCodeAt(i.position);if(T!==39)return!1;for(i.kind="scalar",i.result="",i.position++,S=O=i.position;(T=i.input.charCodeAt(i.position))!==0;)if(T===39)if(Je(i,S,i.position,!0),T=i.input.charCodeAt(++i.position),T===39)S=i.position,i.position++,O=i.position;else return!0;else P(T)?(Je(i,S,O,!0),we(i,Z(i,!1,_)),S=O=i.position):i.position===i.lineStart&&pe(i)?y(i,"unexpected end of the document within a single quoted scalar"):(i.position++,J(T)||(O=i.position));y(i,"unexpected end of the stream within a single quoted scalar")}function A(i,_){let S,O,T,Q=i.input.charCodeAt(i.position);if(Q!==34)return!1;for(i.kind="scalar",i.result="",i.position++,S=O=i.position;(Q=i.input.charCodeAt(i.position))!==0;){if(Q===34)return Je(i,S,i.position,!0),i.position++,!0;if(Q===92){if(Je(i,S,i.position,!0),Q=i.input.charCodeAt(++i.position),P(Q))Z(i,!1,_);else if(Q<256&&ae[Q])i.result+=Re[Q],i.position++;else if((T=E(Q))>0){let p=T,N=0;for(;p>0;p--)Q=i.input.charCodeAt(++i.position),(T=H(Q))>=0?N=(N<<4)+T:y(i,"expected hexadecimal character");i.result+=le(N),i.position++}else y(i,"unknown escape sequence");S=O=i.position}else P(Q)?(Je(i,S,O,!0),we(i,Z(i,!1,_)),S=O=i.position):i.position===i.lineStart&&pe(i)?y(i,"unexpected end of the document within a double quoted scalar"):(i.position++,J(Q)||(O=i.position))}y(i,"unexpected end of the stream within a double quoted scalar")}function V(i,_){let S=!0,O,T,Q;const p=i.tag;let N;const M=i.anchor;let D,L,X,Y;const me=Object.create(null);let de,be,Ne,Oe=i.input.charCodeAt(i.position);if(Oe===91)D=93,Y=!1,N=[];else if(Oe===123)D=125,Y=!0,N={};else return!1;for(i.anchor!==null&&W(i,i.anchor,N),Oe=i.input.charCodeAt(++i.position);Oe!==0;){if(Z(i,!0,_),Oe=i.input.charCodeAt(i.position),Oe===D)return i.position++,i.tag=p,i.anchor=M,i.kind=Y?"mapping":"sequence",i.result=N,!0;if(S?Oe===44&&y(i,"expected the node content, but found ','"):y(i,"missed comma between flow collection entries"),be=de=Ne=null,L=X=!1,Oe===63){const We=i.input.charCodeAt(i.position+1);q(We)&&(L=X=!0,i.position++,Z(i,!0,_))}O=i.line,T=i.lineStart,Q=i.position,ie(i,_,t,!1,!0),be=i.tag,de=i.result,Z(i,!0,_),Oe=i.input.charCodeAt(i.position),(X||i.line===O)&&Oe===58&&(L=!0,Oe=i.input.charCodeAt(++i.position),Z(i,!0,_),ie(i,_,t,!1,!0),Ne=i.result),Y?j(i,N,me,be,de,Ne,O,T,Q):L?N.push(j(i,null,me,be,de,Ne,O,T,Q)):N.push(de),Z(i,!0,_),Oe=i.input.charCodeAt(i.position),Oe===44?(S=!0,Oe=i.input.charCodeAt(++i.position)):S=!1}y(i,"unexpected end of the stream within a flow collection")}function $(i,_){let S,O=d,T=!1,Q=!1,p=_,N=0,M=!1,D,L=i.input.charCodeAt(i.position);if(L===124)S=!1;else if(L===62)S=!0;else return!1;for(i.kind="scalar",i.result="";L!==0;)if(L=i.input.charCodeAt(++i.position),L===43||L===45)d===O?O=L===43?m:u:y(i,"repeat of a chomping mode identifier");else if((D=k(L))>=0)D===0?y(i,"bad explicit indentation width of a block scalar; it cannot be less than one"):Q?y(i,"repeat of an indentation width identifier"):(p=_+D-1,Q=!0);else break;if(J(L)){do L=i.input.charCodeAt(++i.position);while(J(L));if(L===35)do L=i.input.charCodeAt(++i.position);while(!P(L)&&L!==0)}for(;L!==0;){for(ue(i),i.lineIndent=0,L=i.input.charCodeAt(i.position);(!Q||i.lineIndent<p)&&L===32;)i.lineIndent++,L=i.input.charCodeAt(++i.position);if(!Q&&i.lineIndent>p&&(p=i.lineIndent),P(L)){N++;continue}if(!Q&&p===0&&y(i,"missing indentation for block scalar"),i.lineIndent<p){O===m?i.result+=e.repeat(`
`,T?1+N:N):O===d&&T&&(i.result+=`
`);break}S?J(L)?(M=!0,i.result+=e.repeat(`
`,T?1+N:N)):M?(M=!1,i.result+=e.repeat(`
`,N+1)):N===0?T&&(i.result+=" "):i.result+=e.repeat(`
`,N):i.result+=e.repeat(`
`,T?1+N:N),T=!0,Q=!0,N=0;const X=i.position;for(;!P(L)&&L!==0;)L=i.input.charCodeAt(++i.position);Je(i,X,i.position,!1)}return!0}function I(i,_){const S=i.tag,O=i.anchor,T=[];let Q=!1;if(i.firstTabInLine!==-1)return!1;i.anchor!==null&&W(i,i.anchor,T);let p=i.input.charCodeAt(i.position);for(;p!==0&&(i.firstTabInLine!==-1&&(i.position=i.firstTabInLine,y(i,"tab characters must not be used in indentation")),p===45);){const N=i.input.charCodeAt(i.position+1);if(!q(N))break;if(Q=!0,i.position++,Z(i,!0,-1)&&i.lineIndent<=_){T.push(null),p=i.input.charCodeAt(i.position);continue}const M=i.line;if(ie(i,_,l,!1,!0),T.push(i.result),Z(i,!0,-1),p=i.input.charCodeAt(i.position),(i.line===M||i.lineIndent>_)&&p!==0)y(i,"bad indentation of a sequence entry");else if(i.lineIndent<_)break}return Q?(i.tag=S,i.anchor=O,i.kind="sequence",i.result=T,!0):!1}function te(i,_,S){let O,T,Q,p;const N=i.tag,M=i.anchor,D={},L=Object.create(null);let X=null,Y=null,me=null,de=!1,be=!1;if(i.firstTabInLine!==-1)return!1;i.anchor!==null&&W(i,i.anchor,D);let Ne=i.input.charCodeAt(i.position);for(;Ne!==0;){!de&&i.firstTabInLine!==-1&&(i.position=i.firstTabInLine,y(i,"tab characters must not be used in indentation"));const Oe=i.input.charCodeAt(i.position+1),We=i.line;if((Ne===63||Ne===58)&&q(Oe))Ne===63?(de&&(j(i,D,L,X,Y,null,T,Q,p),X=Y=me=null),be=!0,de=!0,O=!0):de?(de=!1,O=!0):y(i,"incomplete explicit mapping pair; a key node is missed; or followed by a non-tabulated empty line"),i.position+=1,Ne=Oe;else{if(T=i.line,Q=i.lineStart,p=i.position,!ie(i,S,s,!1,!0))break;if(i.line===We){for(Ne=i.input.charCodeAt(i.position);J(Ne);)Ne=i.input.charCodeAt(++i.position);if(Ne===58)Ne=i.input.charCodeAt(++i.position),q(Ne)||y(i,"a whitespace character is expected after the key-value separator within a block mapping"),de&&(j(i,D,L,X,Y,null,T,Q,p),X=Y=me=null),be=!0,de=!1,O=!1,X=i.tag,Y=i.result;else if(be)y(i,"can not read an implicit mapping pair; a colon is missed");else return i.tag=N,i.anchor=M,!0}else if(be)y(i,"can not read a block mapping entry; a multiline key may not be an implicit key");else return i.tag=N,i.anchor=M,!0}if((i.line===We||i.lineIndent>_)&&(de&&(T=i.line,Q=i.lineStart,p=i.position),ie(i,_,c,!0,O)&&(de?Y=i.result:me=i.result),de||(j(i,D,L,X,Y,me,T,Q,p),X=Y=me=null),Z(i,!0,-1),Ne=i.input.charCodeAt(i.position)),(i.line===We||i.lineIndent>_)&&Ne!==0)y(i,"bad indentation of a mapping entry");else if(i.lineIndent<_)break}return de&&j(i,D,L,X,Y,null,T,Q,p),be&&(i.tag=N,i.anchor=M,i.kind="mapping",i.result=D),be}function re(i){let _=!1,S=!1,O,T,Q=i.input.charCodeAt(i.position);if(Q!==33)return!1;i.tag!==null&&y(i,"duplication of a tag property"),Q=i.input.charCodeAt(++i.position),Q===60?(_=!0,Q=i.input.charCodeAt(++i.position)):Q===33?(S=!0,O="!!",Q=i.input.charCodeAt(++i.position)):O="!";let p=i.position;if(_){do Q=i.input.charCodeAt(++i.position);while(Q!==0&&Q!==62);i.position<i.length?(T=i.input.slice(p,i.position),Q=i.input.charCodeAt(++i.position)):y(i,"unexpected end of the stream within a verbatim tag")}else{for(;Q!==0&&!q(Q);)Q===33&&(S?y(i,"tag suffix cannot contain exclamation marks"):(O=i.input.slice(p-1,i.position+1),x.test(O)||y(i,"named tag handle cannot contain such characters"),S=!0,p=i.position+1)),Q=i.input.charCodeAt(++i.position);T=i.input.slice(p,i.position),B.test(T)&&y(i,"tag suffix cannot contain flow indicator characters")}T&&!R.test(T)&&y(i,"tag name cannot contain such characters: "+T);try{T=decodeURIComponent(T)}catch{y(i,"tag name is malformed: "+T)}return _?i.tag=T:r.call(i.tagMap,O)?i.tag=i.tagMap[O]+T:O==="!"?i.tag="!"+T:O==="!!"?i.tag="tag:yaml.org,2002:"+T:y(i,'undeclared tag handle "'+O+'"'),!0}function oe(i){let _=i.input.charCodeAt(i.position);if(_!==38)return!1;i.anchor!==null&&y(i,"duplication of an anchor property"),_=i.input.charCodeAt(++i.position);const S=i.position;for(;_!==0&&!q(_)&&!ne(_);)_=i.input.charCodeAt(++i.position);return i.position===S&&y(i,"name of an anchor node must contain at least one character"),i.anchor=i.input.slice(S,i.position),!0}function U(i){let _=i.input.charCodeAt(i.position);if(_!==42)return!1;_=i.input.charCodeAt(++i.position);const S=i.position;for(;_!==0&&!q(_)&&!ne(_);)_=i.input.charCodeAt(++i.position);i.position===S&&y(i,"name of an alias node must contain at least one character");const O=i.input.slice(S,i.position);return r.call(i.anchorMap,O)||y(i,'unidentified alias "'+O+'"'),i.result=i.anchorMap[O],Z(i,!0,-1),!0}function ye(i,_,S,O){const T=Ve(i);return he(i),on(i,_),i.tag=null,i.anchor=null,i.kind=null,i.result=null,te(i,S,O)&&i.kind==="mapping"?(Ie(i),!0):(ze(i),on(i,T),!1)}function ie(i,_,S,O,T){let Q,p,N=1,M=!1,D=!1,L=null,X,Y,me;i.depth>=i.maxDepth&&y(i,"nesting exceeded maxDepth ("+i.maxDepth+")"),i.depth+=1,i.listener!==null&&i.listener("open",i),i.tag=null,i.anchor=null,i.kind=null,i.result=null;const de=Q=p=c===S||l===S;if(O&&Z(i,!0,-1)&&(M=!0,i.lineIndent>_?N=1:i.lineIndent===_?N=0:i.lineIndent<_&&(N=-1)),N===1)for(;;){const be=i.input.charCodeAt(i.position),Ne=Ve(i);if(M&&(be===33&&i.tag!==null||be===38&&i.anchor!==null)||!re(i)&&!oe(i))break;L===null&&(L=Ne),Z(i,!0,-1)?(M=!0,p=de,i.lineIndent>_?N=1:i.lineIndent===_?N=0:i.lineIndent<_&&(N=-1)):p=!1}if(p&&(p=M||T),N===1||c===S)if(t===S||s===S?Y=_:Y=_+1,me=i.position-i.lineStart,N===1)if(p&&(I(i,me)||te(i,me,Y))||V(i,Y))D=!0;else{const be=i.input.charCodeAt(i.position);L!==null&&de&&!p&&be!==124&&be!==62&&ye(i,L,L.position-L.lineStart,Y)||Q&&$(i,Y)||b(i,Y)||A(i,Y)?D=!0:U(i)?(D=!0,(i.tag!==null||i.anchor!==null)&&y(i,"alias node should not have any properties")):h(i,Y,t===S)&&(D=!0,i.tag===null&&(i.tag="?")),i.anchor!==null&&W(i,i.anchor,i.result)}else N===0&&(D=p&&I(i,me));if(i.tag===null)i.anchor!==null&&W(i,i.anchor,i.result);else if(i.tag==="?"){i.result!==null&&i.kind!=="scalar"&&y(i,'unacceptable node kind for !<?> tag; it should be "scalar", not "'+i.kind+'"');for(let be=0,Ne=i.implicitTypes.length;be<Ne;be+=1)if(X=i.implicitTypes[be],X.resolve(i.result)){i.result=X.construct(i.result),i.tag=X.tag,i.anchor!==null&&W(i,i.anchor,i.result);break}}else if(i.tag!=="!"){if(r.call(i.typeMap[i.kind||"fallback"],i.tag))X=i.typeMap[i.kind||"fallback"][i.tag];else{X=null;const be=i.typeMap.multi[i.kind||"fallback"];for(let Ne=0,Oe=be.length;Ne<Oe;Ne+=1)if(i.tag.slice(0,be[Ne].tag.length)===be[Ne].tag){X=be[Ne];break}}X||y(i,"unknown tag !<"+i.tag+">"),i.result!==null&&X.kind!==i.kind&&y(i,"unacceptable node kind for !<"+i.tag+'> tag; it should be "'+X.kind+'", not "'+i.kind+'"'),X.resolve(i.result,i.tag)?(i.result=X.construct(i.result,i.tag),i.anchor!==null&&W(i,i.anchor,i.result)):y(i,"cannot resolve a node with !<"+i.tag+"> explicit tag")}return i.listener!==null&&i.listener("close",i),i.depth-=1,i.tag!==null||i.anchor!==null||D}function ge(i){const _=i.position;let S=!1,O;for(i.version=null,i.checkLineBreaks=i.legacy,i.tagMap=Object.create(null),i.anchorMap=Object.create(null);(O=i.input.charCodeAt(i.position))!==0&&(Z(i,!0,-1),O=i.input.charCodeAt(i.position),!(i.lineIndent>0||O!==37));){S=!0,O=i.input.charCodeAt(++i.position);let T=i.position;for(;O!==0&&!q(O);)O=i.input.charCodeAt(++i.position);const Q=i.input.slice(T,i.position),p=[];for(Q.length<1&&y(i,"directive name must not be less than one character in length");O!==0;){for(;J(O);)O=i.input.charCodeAt(++i.position);if(O===35){do O=i.input.charCodeAt(++i.position);while(O!==0&&!P(O));break}if(P(O))break;for(T=i.position;O!==0&&!q(O);)O=i.input.charCodeAt(++i.position);p.push(i.input.slice(T,i.position))}O!==0&&ue(i),r.call(Cn,Q)?Cn[Q](i,Q,p):F(i,'unknown document directive "'+Q+'"')}if(Z(i,!0,-1),i.lineIndent===0&&i.input.charCodeAt(i.position)===45&&i.input.charCodeAt(i.position+1)===45&&i.input.charCodeAt(i.position+2)===45?(i.position+=3,Z(i,!0,-1)):S&&y(i,"directives end mark is expected"),ie(i,i.lineIndent-1,c,!1,!0),Z(i,!0,-1),i.checkLineBreaks&&v.test(i.input.slice(_,i.position))&&F(i,"non-ASCII line breaks are interpreted as content"),i.documents.push(i.result),i.position===i.lineStart&&pe(i)){i.input.charCodeAt(i.position)===46&&(i.position+=3,Z(i,!0,-1));return}i.position<i.length-1&&y(i,"end of the stream or a document separator is expected")}function Be(i,_){i=String(i),_=_||{},i.length!==0&&(i.charCodeAt(i.length-1)!==10&&i.charCodeAt(i.length-1)!==13&&(i+=`
`),i.charCodeAt(0)===65279&&(i=i.slice(1)));const S=new Ae(i,_),O=i.indexOf("\0");for(O!==-1&&(S.position=O,y(S,"null byte is not allowed in input")),S.input+="\0";S.input.charCodeAt(S.position)===32;)S.lineIndent+=1,S.position+=1;for(;S.position<S.length-1;)ge(S);return S.documents}function ke(i,_,S){_!==null&&typeof _=="object"&&typeof S>"u"&&(S=_,_=null);const O=Be(i,S);if(typeof _!="function")return O;for(let T=0,Q=O.length;T<Q;T+=1)_(O[T])}function De(i,_){const S=Be(i,_);if(S.length!==0){if(S.length===1)return S[0];throw new n("expected a single document in the stream, but found more")}}return $a.loadAll=ke,$a.load=De,$a}var st={},Rs;function sp(){if(Rs)return st;Rs=1;const e=Pa(),n=Oa(),o=ni(),a=Object.prototype.toString,r=Object.prototype.hasOwnProperty,t=65279,s=9,l=10,c=13,d=32,u=33,m=34,f=35,v=37,B=38,x=39,R=42,z=44,P=45,J=58,q=61,ne=62,H=63,E=64,k=91,C=93,le=96,fe=123,ae=124,Re=125,Ae={};Ae[0]="\\0",Ae[7]="\\a",Ae[8]="\\b",Ae[9]="\\t",Ae[10]="\\n",Ae[11]="\\v",Ae[12]="\\f",Ae[13]="\\r",Ae[27]="\\e",Ae[34]='\\"',Ae[92]="\\\\",Ae[133]="\\N",Ae[160]="\\_",Ae[8232]="\\L",Ae[8233]="\\P";const se=["y","Y","yes","Yes","YES","on","On","ON","n","N","no","No","NO","off","Off","OFF"],y=/^[-+]?[0-9_]+(?::[0-9_]+)+(?:\.[0-9_]*)?$/;function F(p,N){if(N===null)return{};const M={},D=Object.keys(N);for(let L=0,X=D.length;L<X;L+=1){let Y=D[L],me=String(N[Y]);Y.slice(0,2)==="!!"&&(Y="tag:yaml.org,2002:"+Y.slice(2));const de=p.compiledTypeMap.fallback[Y];de&&r.call(de.styleAliases,me)&&(me=de.styleAliases[me]),M[Y]=me}return M}function W(p){let N,M;const D=p.toString(16).toUpperCase();if(p<=255)N="x",M=2;else if(p<=65535)N="u",M=4;else if(p<=4294967295)N="U",M=8;else throw new n("code point within a string may not be greater than 0xFFFFFFFF");return"\\"+N+e.repeat("0",M-D.length)+D}const he=1,Ie=2;function ze(p){this.schema=p.schema||o,this.indent=Math.max(1,p.indent||2),this.noArrayIndent=p.noArrayIndent||!1,this.skipInvalid=p.skipInvalid||!1,this.flowLevel=e.isNothing(p.flowLevel)?-1:p.flowLevel,this.styleMap=F(this.schema,p.styles||null),this.sortKeys=p.sortKeys||!1,this.lineWidth=p.lineWidth||80,this.noRefs=p.noRefs||!1,this.noCompatMode=p.noCompatMode||!1,this.condenseFlow=p.condenseFlow||!1,this.quotingType=p.quotingType==='"'?Ie:he,this.forceQuotes=p.forceQuotes||!1,this.replacer=typeof p.replacer=="function"?p.replacer:null,this.implicitTypes=this.schema.compiledImplicit,this.explicitTypes=this.schema.compiledExplicit,this.tag=null,this.result="",this.duplicates=[],this.usedDuplicates=null}function Ve(p,N){const M=e.repeat(" ",N);let D=0,L="";const X=p.length;for(;D<X;){let Y;const me=p.indexOf(`
`,D);me===-1?(Y=p.slice(D),D=X):(Y=p.slice(D,me+1),D=me+1),Y.length&&Y!==`
`&&(L+=M),L+=Y}return L}function on(p,N){return`
`+e.repeat(" ",p.indent*N)}function Cn(p,N){for(let M=0,D=p.implicitTypes.length;M<D;M+=1)if(p.implicitTypes[M].resolve(N))return!0;return!1}function Je(p){return p===d||p===s}function Qe(p){return p>=32&&p<=126||p>=161&&p<=55295&&p!==8232&&p!==8233||p>=57344&&p<=65533&&p!==t||p>=65536&&p<=1114111}function j(p){return Qe(p)&&p!==t&&p!==c&&p!==l}function ue(p,N,M){const D=j(p),L=D&&!Je(p);return(M?D:D&&p!==z&&p!==k&&p!==C&&p!==fe&&p!==Re)&&p!==f&&!(N===J&&!L)||j(N)&&!Je(N)&&p===f||N===J&&L}function Z(p){return Qe(p)&&p!==t&&!Je(p)&&p!==P&&p!==H&&p!==J&&p!==z&&p!==k&&p!==C&&p!==fe&&p!==Re&&p!==f&&p!==B&&p!==R&&p!==u&&p!==ae&&p!==q&&p!==ne&&p!==x&&p!==m&&p!==v&&p!==E&&p!==le}function pe(p){return!Je(p)&&p!==J}function we(p,N){const M=p.charCodeAt(N);let D;return M>=55296&&M<=56319&&N+1<p.length&&(D=p.charCodeAt(N+1),D>=56320&&D<=57343)?(M-55296)*1024+D-56320+65536:M}function h(p){return/^\n* /.test(p)}const b=1,A=2,V=3,$=4,I=5;function te(p,N,M,D,L,X,Y,me){let de,be=0,Ne=null,Oe=!1,We=!1;const ci=D!==-1;let Wo=-1,Yo=Z(we(p,0))&&pe(we(p,p.length-1));if(N||Y)for(de=0;de<p.length;be>=65536?de+=2:de++){if(be=we(p,de),!Qe(be))return I;Yo=Yo&&ue(be,Ne,me),Ne=be}else{for(de=0;de<p.length;be>=65536?de+=2:de++){if(be=we(p,de),be===l)Oe=!0,ci&&(We=We||de-Wo-1>D&&p[Wo+1]!==" ",Wo=de);else if(!Qe(be))return I;Yo=Yo&&ue(be,Ne,me),Ne=be}We=We||ci&&de-Wo-1>D&&p[Wo+1]!==" "}return!Oe&&!We?Yo&&!Y&&!L(p)?b:X===Ie?I:A:M>9&&h(p)?I:Y?X===Ie?I:A:We?$:V}function re(p,N,M,D,L){p.dump=(function(){if(N.length===0)return p.quotingType===Ie?'""':"''";if(!p.noCompatMode&&(se.indexOf(N)!==-1||y.test(N)))return p.quotingType===Ie?'"'+N+'"':"'"+N+"'";const X=p.indent*Math.max(1,M),Y=p.lineWidth===-1?-1:Math.max(Math.min(p.lineWidth,40),p.lineWidth-X),me=D||p.flowLevel>-1&&M>=p.flowLevel;function de(be){return Cn(p,be)}switch(te(N,me,p.indent,Y,de,p.quotingType,p.forceQuotes&&!D,L)){case b:return N;case A:return"'"+N.replace(/'/g,"''")+"'";case V:return"|"+oe(N,p.indent)+U(Ve(N,X));case $:return">"+oe(N,p.indent)+U(Ve(ye(N,Y),X));case I:return'"'+ge(N)+'"';default:throw new n("impossible error: invalid scalar style")}})()}function oe(p,N){const M=h(p)?String(N):"",D=p[p.length-1]===`
`,X=D&&(p[p.length-2]===`
`||p===`
`)?"+":D?"":"-";return M+X+`
`}function U(p){return p[p.length-1]===`
`?p.slice(0,-1):p}function ye(p,N){const M=/(\n+)([^\n]*)/g;let D=(function(){let me=p.indexOf(`
`);return me=me!==-1?me:p.length,M.lastIndex=me,ie(p.slice(0,me),N)})(),L=p[0]===`
`||p[0]===" ",X,Y;for(;Y=M.exec(p);){const me=Y[1],de=Y[2];X=de[0]===" ",D+=me+(!L&&!X&&de!==""?`
`:"")+ie(de,N),L=X}return D}function ie(p,N){if(p===""||p[0]===" ")return p;const M=/ [^ ]/g;let D,L=0,X,Y=0,me=0,de="";for(;D=M.exec(p);)me=D.index,me-L>N&&(X=Y>L?Y:me,de+=`
`+p.slice(L,X),L=X+1),Y=me;return de+=`
`,p.length-L>N&&Y>L?de+=p.slice(L,Y)+`
`+p.slice(Y+1):de+=p.slice(L),de.slice(1)}function ge(p){let N="",M=0;for(let D=0;D<p.length;M>=65536?D+=2:D++){M=we(p,D);const L=Ae[M];!L&&Qe(M)?(N+=p[D],M>=65536&&(N+=p[D+1])):N+=L||W(M)}return N}function Be(p,N,M){let D="";const L=p.tag;for(let X=0,Y=M.length;X<Y;X+=1){let me=M[X];p.replacer&&(me=p.replacer.call(M,String(X),me)),(S(p,N,me,!1,!1)||typeof me>"u"&&S(p,N,null,!1,!1))&&(D!==""&&(D+=","+(p.condenseFlow?"":" ")),D+=p.dump)}p.tag=L,p.dump="["+D+"]"}function ke(p,N,M,D){let L="";const X=p.tag;for(let Y=0,me=M.length;Y<me;Y+=1){let de=M[Y];p.replacer&&(de=p.replacer.call(M,String(Y),de)),(S(p,N+1,de,!0,!0,!1,!0)||typeof de>"u"&&S(p,N+1,null,!0,!0,!1,!0))&&((!D||L!=="")&&(L+=on(p,N)),p.dump&&l===p.dump.charCodeAt(0)?L+="-":L+="- ",L+=p.dump)}p.tag=X,p.dump=L||"[]"}function De(p,N,M){let D="";const L=p.tag,X=Object.keys(M);for(let Y=0,me=X.length;Y<me;Y+=1){let de="";D!==""&&(de+=", "),p.condenseFlow&&(de+='"');const be=X[Y];let Ne=M[be];p.replacer&&(Ne=p.replacer.call(M,be,Ne)),S(p,N,be,!1,!1)&&(p.dump.length>1024&&(de+="? "),de+=p.dump+(p.condenseFlow?'"':"")+":"+(p.condenseFlow?"":" "),S(p,N,Ne,!1,!1)&&(de+=p.dump,D+=de))}p.tag=L,p.dump="{"+D+"}"}function i(p,N,M,D){let L="";const X=p.tag,Y=Object.keys(M);if(p.sortKeys===!0)Y.sort();else if(typeof p.sortKeys=="function")Y.sort(p.sortKeys);else if(p.sortKeys)throw new n("sortKeys must be a boolean or a function");for(let me=0,de=Y.length;me<de;me+=1){let be="";(!D||L!=="")&&(be+=on(p,N));const Ne=Y[me];let Oe=M[Ne];if(p.replacer&&(Oe=p.replacer.call(M,Ne,Oe)),!S(p,N+1,Ne,!0,!0,!0))continue;const We=p.tag!==null&&p.tag!=="?"||p.dump&&p.dump.length>1024;We&&(p.dump&&l===p.dump.charCodeAt(0)?be+="?":be+="? "),be+=p.dump,We&&(be+=on(p,N)),S(p,N+1,Oe,!0,We)&&(p.dump&&l===p.dump.charCodeAt(0)?be+=":":be+=": ",be+=p.dump,L+=be)}p.tag=X,p.dump=L||"{}"}function _(p,N,M){const D=M?p.explicitTypes:p.implicitTypes;for(let L=0,X=D.length;L<X;L+=1){const Y=D[L];if((Y.instanceOf||Y.predicate)&&(!Y.instanceOf||typeof N=="object"&&N instanceof Y.instanceOf)&&(!Y.predicate||Y.predicate(N))){if(M?Y.multi&&Y.representName?p.tag=Y.representName(N):p.tag=Y.tag:p.tag="?",Y.represent){const me=p.styleMap[Y.tag]||Y.defaultStyle;let de;if(a.call(Y.represent)==="[object Function]")de=Y.represent(N,me);else if(r.call(Y.represent,me))de=Y.represent[me](N,me);else throw new n("!<"+Y.tag+'> tag resolver accepts not "'+me+'" style');p.dump=de}return!0}}return!1}function S(p,N,M,D,L,X,Y){p.tag=null,p.dump=M,_(p,M,!1)||_(p,M,!0);const me=a.call(p.dump),de=D;D&&(D=p.flowLevel<0||p.flowLevel>N);const be=me==="[object Object]"||me==="[object Array]";let Ne,Oe;if(be&&(Ne=p.duplicates.indexOf(M),Oe=Ne!==-1),(p.tag!==null&&p.tag!=="?"||Oe||p.indent!==2&&N>0)&&(L=!1),Oe&&p.usedDuplicates[Ne])p.dump="*ref_"+Ne;else{if(be&&Oe&&!p.usedDuplicates[Ne]&&(p.usedDuplicates[Ne]=!0),me==="[object Object]")D&&Object.keys(p.dump).length!==0?(i(p,N,p.dump,L),Oe&&(p.dump="&ref_"+Ne+p.dump)):(De(p,N,p.dump),Oe&&(p.dump="&ref_"+Ne+" "+p.dump));else if(me==="[object Array]")D&&p.dump.length!==0?(p.noArrayIndent&&!Y&&N>0?ke(p,N-1,p.dump,L):ke(p,N,p.dump,L),Oe&&(p.dump="&ref_"+Ne+p.dump)):(Be(p,N,p.dump),Oe&&(p.dump="&ref_"+Ne+" "+p.dump));else if(me==="[object String]")p.tag!=="?"&&re(p,p.dump,N,X,de);else{if(me==="[object Undefined]")return!1;if(p.skipInvalid)return!1;throw new n("unacceptable kind of an object to dump "+me)}if(p.tag!==null&&p.tag!=="?"){let We=encodeURI(p.tag[0]==="!"?p.tag.slice(1):p.tag).replace(/!/g,"%21");p.tag[0]==="!"?We="!"+We:We.slice(0,18)==="tag:yaml.org,2002:"?We="!!"+We.slice(18):We="!<"+We+">",p.dump=We+" "+p.dump}}return!0}function O(p,N){const M=[],D=[];T(p,M,D);const L=D.length;for(let X=0;X<L;X+=1)N.duplicates.push(M[D[X]]);N.usedDuplicates=new Array(L)}function T(p,N,M){if(p!==null&&typeof p=="object"){const D=N.indexOf(p);if(D!==-1)M.indexOf(D)===-1&&M.push(D);else if(N.push(p),Array.isArray(p))for(let L=0,X=p.length;L<X;L+=1)T(p[L],N,M);else{const L=Object.keys(p);for(let X=0,Y=L.length;X<Y;X+=1)T(p[L[X]],N,M)}}}function Q(p,N){N=N||{};const M=new ze(N);M.noRefs||O(p,M);let D=p;return M.replacer&&(D=M.replacer.call({"":D},"",D)),S(M,0,D,!0,!0)?M.dump+`
`:""}return st.dump=Q,st}var Ss;function lp(){if(Ss)return an;Ss=1;const e=ip(),n=sp();function o(a,r){return function(){throw new Error("Function yaml."+a+" is removed in js-yaml 4. Use yaml."+r+" instead, which is now safe by default.")}}return an.Type=gn(),an.Schema=gc(),an.FAILSAFE_SCHEMA=Ac(),an.JSON_SCHEMA=Rc(),an.CORE_SCHEMA=Sc(),an.DEFAULT_SCHEMA=ni(),an.load=e.load,an.loadAll=e.loadAll,an.dump=n.dump,an.YAMLException=Oa(),an.types={binary:Cc(),float:Tc(),map:yc(),null:Nc(),pairs:Ic(),set:Pc(),timestamp:wc(),bool:xc(),int:Bc(),merge:Ec(),omap:kc(),seq:_c(),str:bc()},an.safeLoad=o("safeLoad","load"),an.safeLoadAll=o("safeLoadAll","loadAll"),an.safeDump=o("safeDump","dump"),an}var cp=lp();const rr=rp(cp),{Type:Kg,Schema:Gg,FAILSAFE_SCHEMA:Wg,JSON_SCHEMA:Yg,CORE_SCHEMA:Jg,DEFAULT_SCHEMA:Qg,load:Xg,loadAll:Zg,dump:eb,YAMLException:nb,types:ob,safeLoad:ab,safeLoadAll:rb,safeDump:tb}=rr;class up{constructor({ruleSetRepository:n}){this.ruleSetRepository=n}list(){return this.ruleSetRepository.getAll()}get(n){return this.ruleSetRepository.get(n)}async save(n){const o=await this.ruleSetRepository.get(n.id),a=ap(n,{createdAt:o?.createdAt??new Date,updatedAt:new Date});return this.ruleSetRepository.put(a)}async importFromJson(n,o){let a;try{a=JSON.parse(n)}catch{throw new TypeError("Arquivo de regras inválido: JSON malformado.")}return this.save(o?{...a,grupo:o}:a)}async importFromYaml(n,o){let a;try{a=rr.load(n)}catch{throw new TypeError("Arquivo de regras inválido: YAML malformado.")}return this.save(o?{...a,grupo:o}:a)}exportToJson(n){kt(n);const{source:o,createdAt:a,updatedAt:r,...t}=n;return JSON.stringify(t,null,2)}exportToYaml(n){kt(n);const{source:o,createdAt:a,updatedAt:r,...t}=n;return rr.dump(t,{noRefs:!0})}async exportByIdToJson(n){const o=await this.ruleSetRepository.get(n);if(!o)throw new Error("Conjunto de regras não encontrado.");return this.exportToJson(o)}async exportByIdToYaml(n){const o=await this.ruleSetRepository.get(n);if(!o)throw new Error("Conjunto de regras não encontrado.");return this.exportToYaml(o)}delete(n){return this.ruleSetRepository.delete(n)}}async function dp({indexedDB:e}={}){const n=await Pm(e),o={projectRepository:new Dm(n),environmentRepository:new jm(n),elementRepository:new Om(n),evaluationRepository:new Vm(n),ruleSetRepository:new Lm(n)},a=new Um(o);return{projectService:new Km(o),evaluationService:a,quickEvaluationService:new Gm({evaluationService:a}),ruleSetService:new up(o),close:()=>n.close()}}const mp=`id: area_descanso
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
`,pp=`id: armario_vestiario
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
`,fp=`id: assento_pmr_plateia
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
`,hp=`id: bacia_sanitaria
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
`,vp=`id: balcao
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
`,gp=`id: banco_vestiario
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
`,bp=`id: banheira_acessivel
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
`,_p=`id: barras_apoio
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
`,yp=`id: bebedouro
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
`,Ap=`id: cabides
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
`,Np=`id: cabina_vestiario
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
`,xp=`id: caixa_autoatendimento
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
`,Bp=`id: calcada
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
`,Tp=`id: chuveiro
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
`,Rp=`id: corredores
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
`,Sp=`id: corrimaos
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
`,wp=`id: degraus-isolados
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
`,Ep=`id: elevadores
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
`,Cp=`id: escadas
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
`,kp=`id: espaco_cao_guia
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
`,Ip=`id: espaco_pcr_plateia
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
`,Pp=`id: espelhos_acessiveis
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
`,Op=`id: estacionamento
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
`,jp=`id: guarda_corpos
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
`,Vp=`id: janelas
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
`,Dp=`id: lavatorio
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
`,Lp=`id: mesa
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
`,qp=`id: mictorio
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
`,$p=`id: papeleiras
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
`,Mp=`id: piscina
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
`,Fp=`id: piso-desnivel
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
`,zp=`id: piso_tatil
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
`,Hp=`id: porta_objetos
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
`,Up=`id: portas
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
`,Kp=`id: rampas
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
`,Gp=`id: sanitario_acessivel
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
`,Wp=`id: sinalizacao
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
`,Yp=`id: vagas_acessiveis
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
`,Jp=Object.assign({"../rules/nbr9050-2020/area_descanso.yaml":mp,"../rules/nbr9050-2020/armario_vestiario.yaml":pp,"../rules/nbr9050-2020/assento_pmr_plateia.yaml":fp,"../rules/nbr9050-2020/bacia_sanitaria.yaml":hp,"../rules/nbr9050-2020/balcao.yaml":vp,"../rules/nbr9050-2020/banco_vestiario.yaml":gp,"../rules/nbr9050-2020/banheira_acessivel.yaml":bp,"../rules/nbr9050-2020/barras_apoio.yaml":_p,"../rules/nbr9050-2020/bebedouro.yaml":yp,"../rules/nbr9050-2020/cabides.yaml":Ap,"../rules/nbr9050-2020/cabina_vestiario.yaml":Np,"../rules/nbr9050-2020/caixa_autoatendimento.yaml":xp,"../rules/nbr9050-2020/calcada.yaml":Bp,"../rules/nbr9050-2020/chuveiro.yaml":Tp,"../rules/nbr9050-2020/corredores.yaml":Rp,"../rules/nbr9050-2020/corrimaos.yaml":Sp,"../rules/nbr9050-2020/degraus-isolados.yaml":wp,"../rules/nbr9050-2020/elevadores.yaml":Ep,"../rules/nbr9050-2020/escadas.yaml":Cp,"../rules/nbr9050-2020/espaco_cao_guia.yaml":kp,"../rules/nbr9050-2020/espaco_pcr_plateia.yaml":Ip,"../rules/nbr9050-2020/espelhos_acessiveis.yaml":Pp,"../rules/nbr9050-2020/estacionamento.yaml":Op,"../rules/nbr9050-2020/guarda_corpos.yaml":jp,"../rules/nbr9050-2020/janelas.yaml":Vp,"../rules/nbr9050-2020/lavatorio.yaml":Dp,"../rules/nbr9050-2020/mesa.yaml":Lp,"../rules/nbr9050-2020/mictorio.yaml":qp,"../rules/nbr9050-2020/papeleiras.yaml":$p,"../rules/nbr9050-2020/piscina.yaml":Mp,"../rules/nbr9050-2020/piso-desnivel.yaml":Fp,"../rules/nbr9050-2020/piso_tatil.yaml":zp,"../rules/nbr9050-2020/porta_objetos.yaml":Hp,"../rules/nbr9050-2020/portas.yaml":Up,"../rules/nbr9050-2020/rampas.yaml":Kp,"../rules/nbr9050-2020/sanitario_acessivel.yaml":Gp,"../rules/nbr9050-2020/sinalizacao.yaml":Wp,"../rules/nbr9050-2020/vagas_acessiveis.yaml":Yp});async function Qp(){return Object.entries(Jp).map(([e,n])=>({path:e,ruleSet:rr.load(n)})).sort((e,n)=>e.ruleSet.nome.localeCompare(n.ruleSet.nome))}const Po=typeof document<"u";function Oc(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function Xp(e){return e.__esModule||e[Symbol.toStringTag]==="Module"||e.default&&Oc(e.default)}const qe=Object.assign;function lt(e,n){const o={};for(const a in n){const r=n[a];o[a]=Dn(r)?r.map(e):e(r)}return o}const pa=()=>{},Dn=Array.isArray;function ws(e,n){const o={};for(const a in e)o[a]=a in n?n[a]:e[a];return o}const jc=/#/g,Zp=/&/g,ef=/\//g,nf=/=/g,of=/\?/g,Vc=/\+/g,af=/%5B/g,rf=/%5D/g,Dc=/%5E/g,tf=/%60/g,Lc=/%7B/g,sf=/%7C/g,qc=/%7D/g,lf=/%20/g;function oi(e){return e==null?"":encodeURI(""+e).replace(sf,"|").replace(af,"[").replace(rf,"]")}function cf(e){return oi(e).replace(Lc,"{").replace(qc,"}").replace(Dc,"^")}function It(e){return oi(e).replace(Vc,"%2B").replace(lf,"+").replace(jc,"%23").replace(Zp,"%26").replace(tf,"`").replace(Lc,"{").replace(qc,"}").replace(Dc,"^")}function uf(e){return It(e).replace(nf,"%3D")}function df(e){return oi(e).replace(jc,"%23").replace(of,"%3F")}function mf(e){return df(e).replace(ef,"%2F")}function Ba(e){if(e==null)return null;try{return decodeURIComponent(""+e)}catch{}return""+e}const pf=/\/$/,ff=e=>e.replace(pf,"");function ct(e,n,o="/"){let a,r={},t="",s="";const l=n.indexOf("#");let c=n.indexOf("?");return c=l>=0&&c>l?-1:c,c>=0&&(a=n.slice(0,c),t=n.slice(c,l>0?l:n.length),r=e(t.slice(1))),l>=0&&(a=a||n.slice(0,l),s=n.slice(l,n.length)),a=bf(a??n,o),{fullPath:a+t+s,path:a,query:r,hash:Ba(s)}}function hf(e,n){const o=n.query?e(n.query):"";return n.path+(o&&"?")+o+(n.hash||"")}function Es(e,n){return!n||!e.toLowerCase().startsWith(n.toLowerCase())?e:e.slice(n.length)||"/"}function vf(e,n,o){const a=n.matched.length-1,r=o.matched.length-1;return a>-1&&a===r&&Fo(n.matched[a],o.matched[r])&&$c(n.params,o.params)&&e(n.query)===e(o.query)&&n.hash===o.hash}function Fo(e,n){return(e.aliasOf||e)===(n.aliasOf||n)}function $c(e,n){if(Object.keys(e).length!==Object.keys(n).length)return!1;for(var o in e)if(!gf(e[o],n[o]))return!1;return!0}function gf(e,n){return Dn(e)?Cs(e,n):Dn(n)?Cs(n,e):e?.valueOf()===n?.valueOf()}function Cs(e,n){return Dn(n)?e.length===n.length&&e.every((o,a)=>o===n[a]):e.length===1&&e[0]===n}function bf(e,n){if(e.startsWith("/"))return e;if(!e)return n;const o=n.split("/"),a=e.split("/"),r=a[a.length-1];(r===".."||r===".")&&a.push("");let t=o.length-1,s,l;for(s=0;s<a.length;s++)if(l=a[s],l!==".")if(l==="..")t>1&&t--;else break;return o.slice(0,t).join("/")+"/"+a.slice(s).join("/")}const so={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};let Pt=(function(e){return e.pop="pop",e.push="push",e})({}),ut=(function(e){return e.back="back",e.forward="forward",e.unknown="",e})({});function _f(e){if(!e)if(Po){const n=document.querySelector("base");e=n&&n.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),ff(e)}const yf=/^[^#]+#/;function Af(e,n){return e.replace(yf,"#")+n}function Nf(e,n){const o=document.documentElement.getBoundingClientRect(),a=e.getBoundingClientRect();return{behavior:n.behavior,left:a.left-o.left-(n.left||0),top:a.top-o.top-(n.top||0)}}const Nr=()=>({left:window.scrollX,top:window.scrollY});function xf(e){let n;if("el"in e){const o=e.el,a=typeof o=="string"&&o.startsWith("#"),r=typeof o=="string"?a?document.getElementById(o.slice(1)):document.querySelector(o):o;if(!r)return;n=Nf(r,e)}else n=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(n):window.scrollTo(n.left!=null?n.left:window.scrollX,n.top!=null?n.top:window.scrollY)}function ks(e,n){return(history.state?history.state.position-n:-1)+e}const Ot=new Map;function Bf(e,n){Ot.set(e,n)}function Tf(e){const n=Ot.get(e);return Ot.delete(e),n}function Rf(e){return typeof e=="string"||e&&typeof e=="object"}function Mc(e){return typeof e=="string"||typeof e=="symbol"}let Ye=(function(e){return e[e.MATCHER_NOT_FOUND=1]="MATCHER_NOT_FOUND",e[e.NAVIGATION_GUARD_REDIRECT=2]="NAVIGATION_GUARD_REDIRECT",e[e.NAVIGATION_ABORTED=4]="NAVIGATION_ABORTED",e[e.NAVIGATION_CANCELLED=8]="NAVIGATION_CANCELLED",e[e.NAVIGATION_DUPLICATED=16]="NAVIGATION_DUPLICATED",e})({});const Fc=Symbol("");Ye.MATCHER_NOT_FOUND+"",Ye.NAVIGATION_GUARD_REDIRECT+"",Ye.NAVIGATION_ABORTED+"",Ye.NAVIGATION_CANCELLED+"",Ye.NAVIGATION_DUPLICATED+"";function zo(e,n){return qe(new Error,{type:e,[Fc]:!0},n)}function Wn(e,n){return e instanceof Error&&Fc in e&&(n==null||!!(e.type&n))}const Sf=["params","query","hash"];function wf(e){if(typeof e=="string")return e;if(e.path!=null)return e.path;const n={};for(const o of Sf)o in e&&(n[o]=e[o]);return JSON.stringify(n,null,2)}function Ef(e){const n={};if(e===""||e==="?")return n;const o=(e[0]==="?"?e.slice(1):e).split("&");for(let a=0;a<o.length;++a){const r=o[a].replace(Vc," "),t=r.indexOf("="),s=Ba(t<0?r:r.slice(0,t)),l=t<0?null:Ba(r.slice(t+1));if(s in n){let c=n[s];Dn(c)||(c=n[s]=[c]),c.push(l)}else n[s]=l}return n}function Is(e){let n="";for(let o in e){const a=e[o];if(o=uf(o),a==null){a!==void 0&&(n+=(n.length?"&":"")+o);continue}(Dn(a)?a.map(r=>r&&It(r)):[a&&It(a)]).forEach(r=>{r!==void 0&&(n+=(n.length?"&":"")+o,r!=null&&(n+="="+r))})}return n}function Cf(e){const n={};for(const o in e){const a=e[o];a!==void 0&&(n[o]=Dn(a)?a.map(r=>r==null?null:""+r):a==null?a:""+a)}return n}const kf=Symbol(""),Ps=Symbol(""),xr=Symbol(""),ai=Symbol(""),jt=Symbol("");function na(){let e=[];function n(a){return e.push(a),()=>{const r=e.indexOf(a);r>-1&&e.splice(r,1)}}function o(){e=[]}return{add:n,list:()=>e.slice(),reset:o}}function uo(e,n,o,a,r,t=s=>s()){const s=a&&(a.enterCallbacks[r]=a.enterCallbacks[r]||[]);return()=>new Promise((l,c)=>{const d=f=>{f===!1?c(zo(Ye.NAVIGATION_ABORTED,{from:o,to:n})):f instanceof Error?c(f):Rf(f)?c(zo(Ye.NAVIGATION_GUARD_REDIRECT,{from:n,to:f})):(s&&a.enterCallbacks[r]===s&&typeof f=="function"&&s.push(f),l())},u=t(()=>e.call(a&&a.instances[r],n,o,d));let m=Promise.resolve(u);e.length<3&&(m=m.then(d)),m.catch(f=>c(f))})}function dt(e,n,o,a,r=t=>t()){const t=[];for(const s of e)for(const l in s.components){let c=s.components[l];if(!(n!=="beforeRouteEnter"&&!s.instances[l]))if(Oc(c)){const d=(c.__vccOpts||c)[n];d&&t.push(uo(d,o,a,s,l,r))}else{let d=c();t.push(()=>d.then(u=>{if(!u)throw new Error(`Couldn't resolve component "${l}" at "${s.path}"`);const m=Xp(u)?u.default:u;s.mods[l]=u,s.components[l]=m;const f=(m.__vccOpts||m)[n];return f&&uo(f,o,a,s,l,r)()}))}}return t}function If(e,n){const o=[],a=[],r=[],t=Math.max(n.matched.length,e.matched.length);for(let s=0;s<t;s++){const l=n.matched[s];l&&(e.matched.find(d=>Fo(d,l))?a.push(l):o.push(l));const c=e.matched[s];c&&(n.matched.find(d=>Fo(d,c))||r.push(c))}return[o,a,r]}let Pf=()=>location.protocol+"//"+location.host;function zc(e,n){const{pathname:o,search:a,hash:r}=n,t=e.indexOf("#");if(t>-1){let s=r.includes(e.slice(t))?e.slice(t).length:1,l=r.slice(s);return l[0]!=="/"&&(l="/"+l),Es(l,"")}return Es(o,e)+a+r}function Of(e,n,o,a){let r=[],t=[],s=null;const l=({state:f})=>{const v=zc(e,location),B=o.value,x=n.value;let R=0;if(f){if(o.value=v,n.value=f,s&&s===B){s=null;return}R=x?f.position-x.position:0}else a(v);r.forEach(z=>{z(o.value,B,{delta:R,type:Pt.pop,direction:R?R>0?ut.forward:ut.back:ut.unknown})})};function c(){s=o.value}function d(f){r.push(f);const v=()=>{const B=r.indexOf(f);B>-1&&r.splice(B,1)};return t.push(v),v}function u(){if(document.visibilityState==="hidden"){const{history:f}=window;if(!f.state)return;f.replaceState(qe({},f.state,{scroll:Nr()}),"")}}function m(){for(const f of t)f();t=[],window.removeEventListener("popstate",l),window.removeEventListener("pagehide",u),document.removeEventListener("visibilitychange",u)}return window.addEventListener("popstate",l),window.addEventListener("pagehide",u),document.addEventListener("visibilitychange",u),{pauseListeners:c,listen:d,destroy:m}}function Os(e,n,o,a=!1,r=!1){return{back:e,current:n,forward:o,replaced:a,position:window.history.length,scroll:r?Nr():null}}function jf(e){const{history:n,location:o}=window,a={value:zc(e,o)},r={value:n.state};r.value||t(a.value,{back:null,current:a.value,forward:null,position:n.length-1,replaced:!0,scroll:null},!0);function t(c,d,u){const m=e.indexOf("#"),f=m>-1?(o.host&&document.querySelector("base")?e:e.slice(m))+c:Pf()+e+c;try{n[u?"replaceState":"pushState"](d,"",f),r.value=d}catch(v){console.error(v),o[u?"replace":"assign"](f)}}function s(c,d){t(c,qe({},n.state,Os(r.value.back,c,r.value.forward,!0),d,{position:r.value.position}),!0),a.value=c}function l(c,d){const u=qe({},r.value,n.state,{forward:c,scroll:Nr()});t(u.current,u,!0),t(c,qe({},Os(a.value,c,null),{position:u.position+1},d),!1),a.value=c}return{location:a,state:r,push:l,replace:s}}function Vf(e){e=_f(e);const n=jf(e),o=Of(e,n.state,n.location,n.replace);function a(t,s=!0){s||o.pauseListeners(),history.go(t)}const r=qe({location:"",base:e,go:a,createHref:Af.bind(null,e)},n,o);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>n.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>n.state.value}),r}let Ro=(function(e){return e[e.Static=0]="Static",e[e.Param=1]="Param",e[e.Group=2]="Group",e})({});var Xe=(function(e){return e[e.Static=0]="Static",e[e.Param=1]="Param",e[e.ParamRegExp=2]="ParamRegExp",e[e.ParamRegExpEnd=3]="ParamRegExpEnd",e[e.EscapeNext=4]="EscapeNext",e})(Xe||{});const Df={type:Ro.Static,value:""},Lf=/[a-zA-Z0-9_]/;function qf(e){if(!e)return[[]];if(e==="/")return[[Df]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function n(v){throw new Error(`ERR (${o})/"${d}": ${v}`)}let o=Xe.Static,a=o;const r=[];let t;function s(){t&&r.push(t),t=[]}let l=0,c,d="",u="";function m(){d&&(o===Xe.Static?t.push({type:Ro.Static,value:d}):o===Xe.Param||o===Xe.ParamRegExp||o===Xe.ParamRegExpEnd?(t.length>1&&(c==="*"||c==="+")&&n(`A repeatable param (${d}) must be alone in its segment. eg: '/:ids+.`),t.push({type:Ro.Param,value:d,regexp:u,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):n("Invalid state to consume buffer"),d="")}function f(){d+=c}for(;l<e.length;){if(c=e[l++],c==="\\"&&o!==Xe.ParamRegExp){a=o,o=Xe.EscapeNext;continue}switch(o){case Xe.Static:c==="/"?(d&&m(),s()):c===":"?(m(),o=Xe.Param):f();break;case Xe.EscapeNext:f(),o=a;break;case Xe.Param:c==="("?o=Xe.ParamRegExp:Lf.test(c)?f():(m(),o=Xe.Static,c!=="*"&&c!=="?"&&c!=="+"&&l--);break;case Xe.ParamRegExp:c===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+c:o=Xe.ParamRegExpEnd:u+=c;break;case Xe.ParamRegExpEnd:m(),o=Xe.Static,c!=="*"&&c!=="?"&&c!=="+"&&l--,u="";break;default:n("Unknown state");break}}return o===Xe.ParamRegExp&&n(`Unfinished custom RegExp for param "${d}"`),m(),s(),r}const js="[^/]+?",$f={sensitive:!1,strict:!1,start:!0,end:!0};var fn=(function(e){return e[e._multiplier=10]="_multiplier",e[e.Root=90]="Root",e[e.Segment=40]="Segment",e[e.SubSegment=30]="SubSegment",e[e.Static=40]="Static",e[e.Dynamic=20]="Dynamic",e[e.BonusCustomRegExp=10]="BonusCustomRegExp",e[e.BonusWildcard=-50]="BonusWildcard",e[e.BonusRepeatable=-20]="BonusRepeatable",e[e.BonusOptional=-8]="BonusOptional",e[e.BonusStrict=.7000000000000001]="BonusStrict",e[e.BonusCaseSensitive=.25]="BonusCaseSensitive",e})(fn||{});const Mf=/[.+*?^${}()[\]/\\]/g;function Ff(e,n){const o=qe({},$f,n),a=[];let r=o.start?"^":"";const t=[];for(const d of e){const u=d.length?[]:[fn.Root];o.strict&&!d.length&&(r+="/");for(let m=0;m<d.length;m++){const f=d[m];let v=fn.Segment+(o.sensitive?fn.BonusCaseSensitive:0);if(f.type===Ro.Static)m||(r+="/"),r+=f.value.replace(Mf,"\\$&"),v+=fn.Static;else if(f.type===Ro.Param){const{value:B,repeatable:x,optional:R,regexp:z}=f;t.push({name:B,repeatable:x,optional:R});const P=z||js;if(P!==js){v+=fn.BonusCustomRegExp;try{`${P}`}catch(q){throw new Error(`Invalid custom RegExp for param "${B}" (${P}): `+q.message)}}let J=x?`((?:${P})(?:/(?:${P}))*)`:`(${P})`;m||(J=R&&d.length<2?`(?:/${J})`:"/"+J),R&&(J+="?"),r+=J,v+=fn.Dynamic,R&&(v+=fn.BonusOptional),x&&(v+=fn.BonusRepeatable),P===".*"&&(v+=fn.BonusWildcard)}u.push(v)}a.push(u)}if(o.strict&&o.end){const d=a.length-1;a[d][a[d].length-1]+=fn.BonusStrict}o.strict||(r+="/?"),o.end?r+="$":o.strict&&!r.endsWith("/")&&(r+="(?:/|$)");const s=new RegExp(r,o.sensitive?"":"i");function l(d){const u=d.match(s),m={};if(!u)return null;for(let f=1;f<u.length;f++){const v=u[f]||"",B=t[f-1];m[B.name]=v&&B.repeatable?v.split("/"):v}return m}function c(d){let u="",m=!1;for(const f of e){(!m||!u.endsWith("/"))&&(u+="/"),m=!1;for(const v of f)if(v.type===Ro.Static)u+=v.value;else if(v.type===Ro.Param){const{value:B,repeatable:x,optional:R}=v,z=B in d?d[B]:"";if(Dn(z)&&!x)throw new Error(`Provided param "${B}" is an array but it is not repeatable (* or + modifiers)`);const P=Dn(z)?z.join("/"):z;if(!P)if(R)f.length<2&&(u.endsWith("/")?u=u.slice(0,-1):m=!0);else throw new Error(`Missing required param "${B}"`);u+=P}}return u||"/"}return{re:s,score:a,keys:t,parse:l,stringify:c}}function zf(e,n){let o=0;for(;o<e.length&&o<n.length;){const a=n[o]-e[o];if(a)return a;o++}return e.length<n.length?e.length===1&&e[0]===fn.Static+fn.Segment?-1:1:e.length>n.length?n.length===1&&n[0]===fn.Static+fn.Segment?1:-1:0}function Hc(e,n){let o=0;const a=e.score,r=n.score;for(;o<a.length&&o<r.length;){const t=zf(a[o],r[o]);if(t)return t;o++}if(Math.abs(r.length-a.length)===1){if(Vs(a))return 1;if(Vs(r))return-1}return r.length-a.length}function Vs(e){const n=e[e.length-1];return e.length>0&&n[n.length-1]<0}const Hf={strict:!1,end:!0,sensitive:!1};function Uf(e,n,o){const a=Ff(qf(e.path),o),r=qe(a,{record:e,parent:n,children:[],alias:[]});return n&&!r.record.aliasOf==!n.record.aliasOf&&n.children.push(r),r}function Kf(e,n){const o=[],a=new Map;n=ws(Hf,n);function r(m){return a.get(m)}function t(m,f,v){const B=!v,x=Ls(m);x.aliasOf=v&&v.record;const R=ws(n,m),z=[x];if("alias"in m){const q=typeof m.alias=="string"?[m.alias]:m.alias;for(const ne of q)z.push(Ls(qe({},x,{components:v?v.record.components:x.components,path:ne,aliasOf:v?v.record:x})))}let P,J;for(const q of z){const{path:ne}=q;if(f&&ne[0]!=="/"){const H=f.record.path,E=H[H.length-1]==="/"?"":"/";q.path=f.record.path+(ne&&E+ne)}if(P=Uf(q,f,R),v?v.alias.push(P):(J=J||P,J!==P&&J.alias.push(P),B&&m.name&&!qs(P)&&s(m.name)),Uc(P)&&c(P),x.children){const H=x.children;for(let E=0;E<H.length;E++)t(H[E],P,v&&v.children[E])}v=v||P}return J?()=>{s(J)}:pa}function s(m){if(Mc(m)){const f=a.get(m);f&&(a.delete(m),o.splice(o.indexOf(f),1),f.children.forEach(s),f.alias.forEach(s))}else{const f=o.indexOf(m);f>-1&&(o.splice(f,1),m.record.name&&a.delete(m.record.name),m.children.forEach(s),m.alias.forEach(s))}}function l(){return o}function c(m){const f=Yf(m,o);o.splice(f,0,m),m.record.name&&!qs(m)&&a.set(m.record.name,m)}function d(m,f){let v,B={},x,R;if("name"in m&&m.name){if(v=a.get(m.name),!v)throw zo(Ye.MATCHER_NOT_FOUND,{location:m});R=v.record.name,B=qe(Ds(f.params,v.keys.filter(J=>!J.optional).concat(v.parent?v.parent.keys.filter(J=>J.optional):[]).map(J=>J.name)),m.params&&Ds(m.params,v.keys.map(J=>J.name))),x=v.stringify(B)}else if(m.path!=null)x=m.path,v=o.find(J=>J.re.test(x)),v&&(B=v.parse(x),R=v.record.name);else{if(v=f.name?a.get(f.name):o.find(J=>J.re.test(f.path)),!v)throw zo(Ye.MATCHER_NOT_FOUND,{location:m,currentLocation:f});R=v.record.name,B=qe({},f.params,m.params),x=v.stringify(B)}const z=[];let P=v;for(;P;)z.unshift(P.record),P=P.parent;return{name:R,path:x,params:B,matched:z,meta:Wf(z)}}e.forEach(m=>t(m));function u(){o.length=0,a.clear()}return{addRoute:t,resolve:d,removeRoute:s,clearRoutes:u,getRoutes:l,getRecordMatcher:r}}function Ds(e,n){const o={};for(const a of n)a in e&&(o[a]=e[a]);return o}function Ls(e){const n={path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:e.aliasOf,beforeEnter:e.beforeEnter,props:Gf(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}};return Object.defineProperty(n,"mods",{value:{}}),n}function Gf(e){const n={},o=e.props||!1;if("component"in e)n.default=o;else for(const a in e.components)n[a]=typeof o=="object"?o[a]:o;return n}function qs(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function Wf(e){return e.reduce((n,o)=>qe(n,o.meta),{})}function Yf(e,n){let o=0,a=n.length;for(;o!==a;){const t=o+a>>1;Hc(e,n[t])<0?a=t:o=t+1}const r=Jf(e);return r&&(a=n.lastIndexOf(r,a-1)),a}function Jf(e){let n=e;for(;n=n.parent;)if(Uc(n)&&Hc(e,n)===0)return n}function Uc({record:e}){return!!(e.name||e.components&&Object.keys(e.components).length||e.redirect)}function $s(e){const n=Ue(xr),o=Ue(ai),a=Fe(()=>{const c=ee(e.to);return n.resolve(c)}),r=Fe(()=>{const{matched:c}=a.value,{length:d}=c,u=c[d-1],m=o.matched;if(!u||!m.length)return-1;const f=m.findIndex(Fo.bind(null,u));if(f>-1)return f;const v=Ms(c[d-2]);return d>1&&Ms(u)===v&&m[m.length-1].path!==v?m.findIndex(Fo.bind(null,c[d-2])):f}),t=Fe(()=>r.value>-1&&eh(o.params,a.value.params)),s=Fe(()=>r.value>-1&&r.value===o.matched.length-1&&$c(o.params,a.value.params));function l(c={}){if(Zf(c)){const d=n[ee(e.replace)?"replace":"push"](ee(e.to)).catch(pa);return e.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>d),d}return Promise.resolve()}return{route:a,href:Fe(()=>a.value.href),isActive:t,isExactActive:s,navigate:l}}function Qf(e){return e.length===1?e[0]:e}const Xf=Ll({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:$s,setup(e,{slots:n}){const o=wa($s(e)),{options:a}=Ue(xr),r=Fe(()=>({[Fs(e.activeClass,a.linkActiveClass,"router-link-active")]:o.isActive,[Fs(e.exactActiveClass,a.linkExactActiveClass,"router-link-exact-active")]:o.isExactActive}));return()=>{const t=n.default&&Qf(n.default(o));return e.custom?t:$o("a",{"aria-current":o.isExactActive?e.ariaCurrentValue:null,href:o.href,onClick:o.navigate,class:r.value},t)}}}),Pe=Xf;function Zf(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const n=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(n))return}return e.preventDefault&&e.preventDefault(),!0}}function eh(e,n){for(const o in n){const a=n[o],r=e[o];if(typeof a=="string"){if(a!==r)return!1}else if(!Dn(r)||r.length!==a.length||a.some((t,s)=>t.valueOf()!==r[s].valueOf()))return!1}return!0}function Ms(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const Fs=(e,n,o)=>e??n??o,nh=Ll({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:n,slots:o}){const a=Ue(jt),r=Fe(()=>e.route||a.value),t=Ue(Ps,0),s=Fe(()=>{let d=ee(t);const{matched:u}=r.value;let m;for(;(m=u[d])&&!m.components;)d++;return d}),l=Fe(()=>r.value.matched[s.value]);la(Ps,Fe(()=>s.value+1)),la(kf,l),la(jt,r);const c=Te();return fo(()=>[c.value,l.value,e.name],([d,u,m],[f,v,B])=>{u&&(u.instances[m]=d,v&&v!==u&&d&&d===f&&(u.leaveGuards.size||(u.leaveGuards=v.leaveGuards),u.updateGuards.size||(u.updateGuards=v.updateGuards))),d&&u&&(!v||!Fo(u,v)||!f)&&(u.enterCallbacks[m]||[]).forEach(x=>x(d))},{flush:"post"}),()=>{const d=r.value,u=e.name,m=l.value,f=m&&m.components[u];if(!f)return zs(o.default,{Component:f,route:d});const v=m.props[u],B=v?v===!0?d.params:typeof v=="function"?v(d):v:null,R=$o(f,qe({},B,n,{onVnodeUnmounted:z=>{z.component.isUnmounted&&(m.instances[u]=null)},ref:c}));return zs(o.default,{Component:R,route:d})||R}}});function zs(e,n){if(!e)return null;const o=e(n);return o.length===1?o[0]:o}const Kc=nh;function oh(e){const n=Kf(e.routes,e),o=e.parseQuery||Ef,a=e.stringifyQuery||Is,r=e.history,t=na(),s=na(),l=na(),c=wu(so);let d=so;Po&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=lt.bind(null,j=>""+j),m=lt.bind(null,mf),f=lt.bind(null,Ba);function v(j,ue){let Z,pe;return Mc(j)?(Z=n.getRecordMatcher(j),pe=ue):pe=j,n.addRoute(pe,Z)}function B(j){const ue=n.getRecordMatcher(j);ue&&n.removeRoute(ue)}function x(){return n.getRoutes().map(j=>j.record)}function R(j){return!!n.getRecordMatcher(j)}function z(j,ue){if(ue=qe({},ue||c.value),typeof j=="string"){const A=ct(o,j,ue.path),V=n.resolve({path:A.path},ue),$=r.createHref(A.fullPath);return qe(A,V,{params:f(V.params),hash:Ba(A.hash),redirectedFrom:void 0,href:$})}let Z;if(j.path!=null)Z=qe({},j,{path:ct(o,j.path,ue.path).path});else{const A=qe({},j.params);for(const V in A)A[V]==null&&delete A[V];Z=qe({},j,{params:m(A)}),ue.params=m(ue.params)}const pe=n.resolve(Z,ue),we=j.hash||"";pe.params=u(f(pe.params));const h=hf(a,qe({},j,{hash:cf(we),path:pe.path})),b=r.createHref(h);return qe({fullPath:h,hash:we,query:a===Is?Cf(j.query):j.query||{}},pe,{redirectedFrom:void 0,href:b})}function P(j){return typeof j=="string"?ct(o,j,c.value.path):qe({},j)}function J(j,ue){if(d!==j)return zo(Ye.NAVIGATION_CANCELLED,{from:ue,to:j})}function q(j){return E(j)}function ne(j){return q(qe(P(j),{replace:!0}))}function H(j,ue){const Z=j.matched[j.matched.length-1];if(Z&&Z.redirect){const{redirect:pe}=Z;let we=typeof pe=="function"?pe(j,ue):pe;return typeof we=="string"&&(we=we.includes("?")||we.includes("#")?we=P(we):{path:we},we.params={}),qe({query:j.query,hash:j.hash,params:we.path!=null?{}:j.params},we)}}function E(j,ue){const Z=d=z(j),pe=c.value,we=j.state,h=j.force,b=j.replace===!0,A=H(Z,pe);if(A)return E(qe(P(A),{state:typeof A=="object"?qe({},we,A.state):we,force:h,replace:b}),ue||Z);const V=Z;V.redirectedFrom=ue;let $;return!h&&vf(a,pe,Z)&&($=zo(Ye.NAVIGATION_DUPLICATED,{to:V,from:pe}),ze(pe,pe,!0,!1)),($?Promise.resolve($):le(V,pe)).catch(I=>Wn(I)?Wn(I,Ye.NAVIGATION_GUARD_REDIRECT)?I:Ie(I):W(I,V,pe)).then(I=>{if(I){if(Wn(I,Ye.NAVIGATION_GUARD_REDIRECT))return E(qe({replace:b},P(I.to),{state:typeof I.to=="object"?qe({},we,I.to.state):we,force:h}),ue||V)}else I=ae(V,pe,!0,b,we);return fe(V,pe,I),I})}function k(j,ue){const Z=J(j,ue);return Z?Promise.reject(Z):Promise.resolve()}function C(j){const ue=Cn.values().next().value;return ue&&typeof ue.runWithContext=="function"?ue.runWithContext(j):j()}function le(j,ue){let Z;const[pe,we,h]=If(j,ue);Z=dt(pe.reverse(),"beforeRouteLeave",j,ue);for(const A of pe)A.leaveGuards.forEach(V=>{Z.push(uo(V,j,ue))});const b=k.bind(null,j,ue);return Z.push(b),Qe(Z).then(()=>{Z=[];for(const A of t.list())Z.push(uo(A,j,ue));return Z.push(b),Qe(Z)}).then(()=>{Z=dt(we,"beforeRouteUpdate",j,ue);for(const A of we)A.updateGuards.forEach(V=>{Z.push(uo(V,j,ue))});return Z.push(b),Qe(Z)}).then(()=>{Z=[];for(const A of h)if(A.beforeEnter)if(Dn(A.beforeEnter))for(const V of A.beforeEnter)Z.push(uo(V,j,ue));else Z.push(uo(A.beforeEnter,j,ue));return Z.push(b),Qe(Z)}).then(()=>(j.matched.forEach(A=>A.enterCallbacks={}),Z=dt(h,"beforeRouteEnter",j,ue,C),Z.push(b),Qe(Z))).then(()=>{Z=[];for(const A of s.list())Z.push(uo(A,j,ue));return Z.push(b),Qe(Z)}).catch(A=>Wn(A,Ye.NAVIGATION_CANCELLED)?A:Promise.reject(A))}function fe(j,ue,Z){l.list().forEach(pe=>C(()=>pe(j,ue,Z)))}function ae(j,ue,Z,pe,we){const h=J(j,ue);if(h)return h;const b=ue===so,A=Po?history.state:{};Z&&(pe||b?r.replace(j.fullPath,qe({scroll:b&&A&&A.scroll},we)):r.push(j.fullPath,we)),c.value=j,ze(j,ue,Z,b),Ie()}let Re;function Ae(){Re||(Re=r.listen((j,ue,Z)=>{if(!Je.listening)return;const pe=z(j),we=H(pe,Je.currentRoute.value);if(we){E(qe(we,{replace:!0,force:!0}),pe).catch(pa);return}d=pe;const h=c.value;Po&&Bf(ks(h.fullPath,Z.delta),Nr()),le(pe,h).catch(b=>Wn(b,Ye.NAVIGATION_ABORTED|Ye.NAVIGATION_CANCELLED)?b:Wn(b,Ye.NAVIGATION_GUARD_REDIRECT)?(E(qe(P(b.to),{force:!0}),pe).then(A=>{Wn(A,Ye.NAVIGATION_ABORTED|Ye.NAVIGATION_DUPLICATED)&&!Z.delta&&Z.type===Pt.pop&&r.go(-1,!1)}).catch(pa),Promise.reject()):(Z.delta&&r.go(-Z.delta,!1),W(b,pe,h))).then(b=>{b=b||ae(pe,h,!1),b&&(Z.delta&&!Wn(b,Ye.NAVIGATION_CANCELLED)?r.go(-Z.delta,!1):Z.type===Pt.pop&&Wn(b,Ye.NAVIGATION_ABORTED|Ye.NAVIGATION_DUPLICATED)&&r.go(-1,!1)),fe(pe,h,b)}).catch(pa)}))}let se=na(),y=na(),F;function W(j,ue,Z){Ie(j);const pe=y.list();return pe.length?pe.forEach(we=>we(j,ue,Z)):console.error(j),Promise.reject(j)}function he(){return F&&c.value!==so?Promise.resolve():new Promise((j,ue)=>{se.add([j,ue])})}function Ie(j){return F||(F=!j,Ae(),se.list().forEach(([ue,Z])=>j?Z(j):ue()),se.reset()),j}function ze(j,ue,Z,pe){const{scrollBehavior:we}=e;if(!Po||!we)return Promise.resolve();const h=!Z&&Tf(ks(j.fullPath,0))||(pe||!Z)&&history.state&&history.state.scroll||null;return yn().then(()=>we(j,ue,h)).then(b=>b&&xf(b)).catch(b=>W(b,j,ue))}const Ve=j=>r.go(j);let on;const Cn=new Set,Je={currentRoute:c,listening:!0,addRoute:v,removeRoute:B,clearRoutes:n.clearRoutes,hasRoute:R,getRoutes:x,resolve:z,options:e,push:q,replace:ne,go:Ve,back:()=>Ve(-1),forward:()=>Ve(1),beforeEach:t.add,beforeResolve:s.add,afterEach:l.add,onError:y.add,isReady:he,install(j){j.component("RouterLink",Pe),j.component("RouterView",Kc),j.config.globalProperties.$router=Je,Object.defineProperty(j.config.globalProperties,"$route",{enumerable:!0,get:()=>ee(c)}),Po&&!on&&c.value===so&&(on=!0,q(r.location).catch(pe=>{}));const ue={};for(const pe in so)Object.defineProperty(ue,pe,{get:()=>c.value[pe],enumerable:!0});j.provide(xr,Je),j.provide(ai,Al(ue)),j.provide(jt,c);const Z=j.unmount;Cn.add(j),j.unmount=function(){Cn.delete(j),Cn.size<1&&(d=so,Re&&Re(),Re=null,c.value=so,on=!1,F=!1),Z()}}};function Qe(j){return j.reduce((ue,Z)=>ue.then(()=>C(Z)),Promise.resolve())}return Je}function Br(){return Ue(xr)}function ri(e){return Ue(ai)}const ah="/Extensao-26.2/icon-512.png";const No={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};const Hs=(...e)=>e.filter((n,o,a)=>!!n&&n.trim()!==""&&a.indexOf(n)===o).join(" ").trim();function mt(e){return e!=null}function rh(e,n={}){const o=n.attributeNames??{},a=f=>o[f]??f,r=e.size??e.width??No.width,t=e.size??e.height??No.height,s=e.aliases?.filter(f=>typeof f=="string"&&f.trim()!=="").map(f=>`lucide-${f}`)??[],l=[...e.name?[`lucide-${e.name}`]:[],...s],c=n.className?.split(" ").filter(Boolean)??[],d=n.includeDefaultClasses===!1?Hs(...c):Hs("lucide",...l,...c),u=n.absoluteStrokeWidth?Number(n.strokeWidth??No["stroke-width"])*Number(e.size??e.width??No.width)/Number(n.size??n.width??No.width):n.strokeWidth??No["stroke-width"];return["svg",{...Object.entries(No).reduce((f,[v,B])=>(f[a(v)]=B,f),{}),..."color"in n&&n.color&&{[a("stroke")]:n.color},..."size"in n&&mt(n.size)&&{[a("width")]:n.size,[a("height")]:n.size},..."width"in n&&mt(n.width)&&{[a("width")]:n.width},..."height"in n&&mt(n.height)&&{[a("height")]:n.height},[a("stroke-width")]:u,...d&&{[a("class")]:d},[a("viewBox")]:`0 0 ${r} ${t}`,...n.hasA11yProp===!1?{[a("aria-hidden")]:"true"}:{},..."attributes"in n&&n.attributes},e.node.map(f=>{const[v,B,x]=f,R=n.nonScalingStroke?{[a("vector-effect")]:"non-scaling-stroke",...B}:B;return x?[v,R,x]:[v,R]})]}const th=e=>{for(const n in e)if(n.startsWith("aria-")||n==="role"||n==="title")return!0;return!1};const Ma=e=>e==="";const ih=e=>e?.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();const sh=Symbol("lucide-icons");function lh(){return Ue(sh,{})}const ch=({name:e,iconNode:n,"icon-node":o,icon:a={name:ih(e),node:n??o,size:24,aliases:[]},absoluteStrokeWidth:r,"absolute-stroke-width":t,nonScalingStroke:s,"non-scaling-stroke":l,strokeWidth:c,"stroke-width":d,size:u,width:m=u,height:f=u,color:v,...B},{slots:x})=>{const{size:R,color:z,strokeWidth:P=2,absoluteStrokeWidth:J=!1,nonScalingStroke:q=!1,class:ne=""}=lh(),H=Ma(r)||Ma(t)||r===!0||t===!0||J===!0,E=Ma(s)||Ma(l)||s===!0||l===!0||q===!0;delete B.class;const k=x.default?.(),[,C,le=[]]=rh(a,{color:v??z,width:m??u??R,height:f??u??R,strokeWidth:c??d??P,absoluteStrokeWidth:H,nonScalingStroke:E,className:ne,hasA11yProp:k!=null&&k.length>0||th(B),attributes:B});return $o("svg",C,[...le.map(fe=>$o(...fe)),...k??[]])};function Nn(e,n=[]){const o=typeof e=="string"?{name:e,node:n}:e;return(a,{slots:r})=>$o(ch,{...a,icon:o},r.default?{default:r.default}:void 0)}const uh={name:"arrow-right",size:24,node:[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]},dh=Nn(uh);const mh={name:"box",size:24,node:[["path",{d:"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",key:"hh9hay"}],["path",{d:"m3.3 7 8.7 5 8.7-5",key:"g66t2b"}],["path",{d:"M12 22V12",key:"d0xqtd"}]]},ph=Nn(mh);const fh={name:"chevron-right",size:24,node:[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]},Ta=Nn(fh);const hh={name:"chevron-left",size:24,node:[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]},Ra=Nn(hh);const vh={name:"circle-question-mark",size:24,node:[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",key:"1u773s"}],["path",{d:"M12 17h.01",key:"p32p05"}]],aliases:["help-circle","circle-help"]},ti=Nn(vh);const gh={name:"clipboard-check",size:24,node:[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1",key:"tgr4d6"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",key:"116196"}],["path",{d:"m9 14 2 2 4-4",key:"df797q"}]]},po=Nn(gh);const bh={name:"folder-kanban",size:24,node:[["path",{d:"M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z",key:"1fr9dc"}],["path",{d:"M8 10v4",key:"tgpxqk"}],["path",{d:"M12 10v2",key:"hh53o1"}],["path",{d:"M16 10v6",key:"1d6xys"}]]},Gc=Nn(bh);const _h={name:"folder-plus",size:24,node:[["path",{d:"M12 10v6",key:"1bos4e"}],["path",{d:"M9 13h6",key:"1uhe8q"}],["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",key:"1kt360"}]]},tr=Nn(_h);const yh={name:"folder",size:24,node:[["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",key:"1kt360"}]]},Us=Nn(yh);const Ah={name:"house",size:24,node:[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"r6nss1"}]],aliases:["home"]},Nh=Nn(Ah);const xh={name:"pencil",size:24,node:[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}],["path",{d:"m15 5 4 4",key:"1mk7zo"}]]},Bh=Nn(xh);const Th={name:"plus",size:24,node:[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]},Ks=Nn(Th);const Rh={name:"trash",size:24,node:[["path",{d:"M10 11v6",key:"nco0om"}],["path",{d:"M14 11v6",key:"outv1u"}],["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",key:"miytrc"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",key:"e791ji"}]],aliases:["trash-2"]},Ho=Nn(Rh),Sh={class:"app-shell"},wh={class:"sidebar"},Eh={key:0,class:"bottom-nav"},Ch={__name:"AppLayout",setup(e){const n=ri(),o=Fe(()=>n.path.startsWith("/rules")?"rules":n.path.startsWith("/quick-evaluation")?"quick":"projects"),a=Te(null);let r=!1;async function t(){await yn(),a.value?.focus()}function s(){r=!0}return En(()=>{document.addEventListener("pointerdown",s,{passive:!0}),document.addEventListener("keydown",s)}),br(()=>{document.removeEventListener("pointerdown",s),document.removeEventListener("keydown",s)}),fo(()=>n.fullPath,()=>{r&&t()}),(l,c)=>(w(),K("div",Sh,[g("a",{class:"skip-link",href:"#conteudo",onClick:vo(t,["prevent"])},"Pular para o conteúdo"),g("aside",wh,[G(ee(Pe),{class:"brand",to:"/projects"},{default:_e(()=>[...c[0]||(c[0]=[g("img",{class:"brand__mark",src:ah,alt:"Acesso Verificador"},null,-1),g("span",null,[Se("Acesso"),g("br"),g("small",null,"Verificador")],-1)])]),_:1}),g("nav",null,[G(ee(Pe),{class:rn(["nav-item",{"is-active":o.value==="projects"}]),to:"/projects"},{default:_e(()=>[G(ee(Us),{size:20,"aria-hidden":"true"}),c[1]||(c[1]=g("span",null,"Projetos",-1))]),_:1},8,["class"]),G(ee(Pe),{class:rn(["nav-item",{"is-active":o.value==="quick"}]),to:"/quick-evaluation"},{default:_e(()=>[G(ee(po),{size:20,"aria-hidden":"true"}),c[2]||(c[2]=g("span",null,"Avaliação rápida",-1))]),_:1},8,["class"]),G(ee(Pe),{class:rn(["nav-item",{"is-active":o.value==="rules"}]),to:"/rules"},{default:_e(()=>[G(ee(po),{size:20,"aria-hidden":"true"}),c[3]||(c[3]=g("span",null,"Regras",-1))]),_:1},8,["class"])])]),g("main",{id:"conteudo",ref_key:"content",ref:a,class:"content",tabindex:"-1"},[bn(l.$slots,"default")],512),ee(n).meta.hideBottomNav?ve("",!0):(w(),K("nav",Eh,[G(ee(Pe),{class:rn(["nav-item",{"is-active":o.value==="projects"}]),to:"/projects"},{default:_e(()=>[G(ee(Us),{size:20,"aria-hidden":"true"}),c[4]||(c[4]=g("span",null,"Projetos",-1))]),_:1},8,["class"]),G(ee(Pe),{class:rn(["nav-item",{"is-active":o.value==="quick"}]),to:"/quick-evaluation"},{default:_e(()=>[G(ee(po),{size:20,"aria-hidden":"true"}),c[5]||(c[5]=g("span",null,"Avaliação rápida",-1))]),_:1},8,["class"]),G(ee(Pe),{class:rn(["nav-item",{"is-active":o.value==="rules"}]),to:"/rules"},{default:_e(()=>[G(ee(po),{size:20,"aria-hidden":"true"}),c[6]||(c[6]=g("span",null,"Regras",-1))]),_:1},8,["class"])]))]))}},kh={id:"confirm-popup",class:"confirm-popup",role:"alertdialog","aria-modal":"true","aria-labelledby":"confirm-popup-message"},Ih={id:"confirm-popup-message",class:"confirm-popup__message"},Ph={class:"confirm-popup__actions"},Oh={__name:"ConfirmPopup",setup(e,{expose:n}){const o=Te(null),a=Te(null),r=Te(!1),t=Te("");let s=null,l=null,c="";function d(x){if(x.key==="Escape"){x.preventDefault(),m();return}if(x.key!=="Tab")return;const R=[o.value,a.value].filter(Boolean);if(!R.length)return;const z=R[0],P=R[R.length-1],J=document.activeElement;if(!R.includes(J)){x.preventDefault(),(x.shiftKey?P:z).focus();return}x.shiftKey&&J===z?(x.preventDefault(),P.focus()):!x.shiftKey&&J===P&&(x.preventDefault(),z.focus())}function u(){document.removeEventListener("keydown",d),document.body.style.overflow=c}function m({restoreFocus:x=!0}={}){if(!r.value)return;r.value=!1,u(),s?.removeAttribute("aria-expanded"),s?.removeAttribute("aria-controls");const R=s;s=null,l=null,x&&yn(()=>R?.focus?.())}async function f(x){m({restoreFocus:!1}),s=x.target,t.value=x.message,l=x.onAccept,r.value=!0,s?.setAttribute("aria-expanded","true"),s?.setAttribute("aria-controls","confirm-popup"),c=document.body.style.overflow,document.body.style.overflow="hidden",document.addEventListener("keydown",d),await yn(),o.value?.focus()}function v(x,R,z){return f({target:x.currentTarget,message:R,onAccept:z})}async function B(){const x=l,R=s;m({restoreFocus:!1}),await x?.(),yn(()=>{R?.isConnected?R.focus?.():document.getElementById("conteudo")?.focus()})}return n({open:f,confirm:v}),br(()=>{document.removeEventListener("keydown",d),document.body.style.overflow=c,s?.removeAttribute("aria-expanded"),s?.removeAttribute("aria-controls")}),(x,R)=>(w(),je(Il,{to:"body"},[r.value?(w(),K("div",{key:0,class:"confirm-backdrop",onClick:R[1]||(R[1]=vo(z=>m(),["self"]))},[g("section",kh,[g("p",Ih,ce(t.value),1),g("div",Ph,[g("button",{ref_key:"cancelButton",ref:o,class:"confirm-popup__button confirm-popup__button--cancel",type:"button",onClick:R[0]||(R[0]=z=>m())}," Cancelar ",512),g("button",{ref_key:"acceptButton",ref:a,class:"confirm-popup__button confirm-popup__button--accept",type:"button",onClick:B}," Excluir ",512)])])])):ve("",!0)]))}},jh={class:"welcome-popup",role:"dialog","aria-modal":"true","aria-labelledby":"welcome-title","aria-describedby":"welcome-description"},Vh={class:"welcome-popup__content"},Dh={class:"welcome-popup__steps"},Wc={__name:"WelcomePopup",emits:["close"],setup(e,{emit:n}){const o=n,a=Te(null),r=Te(null);let t="",s=null;function l(d){const u=[a.value,r.value].filter(Boolean);if(!u.length)return;const m=u[0],f=u[u.length-1],v=document.activeElement;if(!u.includes(v)){d.preventDefault(),(d.shiftKey?f:m).focus();return}d.shiftKey&&v===m?(d.preventDefault(),f.focus()):!d.shiftKey&&v===f&&(d.preventDefault(),m.focus())}function c(d){if(d.key==="Escape"){d.preventDefault(),o("close");return}d.key==="Tab"&&l(d)}return En(async()=>{s=document.activeElement,document.addEventListener("keydown",c),t=document.body.style.overflow,document.body.style.overflow="hidden",await yn(),a.value?.focus()}),Yt(()=>{document.removeEventListener("keydown",c),document.body.style.overflow=t,s?.isConnected&&s.focus?.()}),(d,u)=>(w(),je(Il,{to:"body"},[g("div",{class:"welcome-backdrop",onClick:u[2]||(u[2]=vo(m=>o("close"),["self"]))},[g("section",jh,[g("button",{ref_key:"closeButton",ref:a,class:"welcome-popup__close",type:"button","aria-label":"Fechar apresentação",onClick:u[0]||(u[0]=m=>o("close"))}," × ",512),u[8]||(u[8]=g("div",{class:"welcome-popup__hero"},[g("h1",{id:"welcome-title"},"Acessibilidade começa com atenção aos detalhes."),g("p",{id:"welcome-description"}," Este espaço ajuda você a organizar e apoiar avaliações de acessibilidade em locais e ambientes. ")],-1)),g("div",Vh,[u[6]||(u[6]=g("h2",null,"Como funciona",-1)),g("div",Dh,[g("article",null,[G(ee(Gc),{size:22,"aria-hidden":"true"}),u[3]||(u[3]=g("div",null,[g("h3",null,"Organize seus locais"),g("p",null,"Crie projetos, separe os ambientes e cadastre os elementos que deseja avaliar.")],-1))]),g("article",null,[G(ee(po),{size:22,"aria-hidden":"true"}),u[4]||(u[4]=g("div",null,[g("h3",null,"Faça as verificações"),g("p",null,"Preencha checklists e consulte resultados por elemento, ambiente ou projeto.")],-1))])]),u[7]||(u[7]=g("p",{class:"welcome-popup__note"}," Os resultados são um apoio à avaliação e não substituem a análise de um profissional nem a consulta às normas aplicáveis. ",-1)),g("button",{ref_key:"actionButton",ref:r,class:"button welcome-popup__action",type:"button",onClick:u[1]||(u[1]=m=>o("close"))},[u[5]||(u[5]=Se(" Começar ",-1)),G(ee(dh),{size:18,"aria-hidden":"true"})],512)])])])]))}};var Lh=Object.defineProperty,qh=Object.defineProperties,$h=Object.getOwnPropertyDescriptors,Gs=Object.getOwnPropertySymbols,Mh=Object.prototype.hasOwnProperty,Fh=Object.prototype.propertyIsEnumerable,Ws=(e,n,o)=>n in e?Lh(e,n,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[n]=o,Co=(e,n)=>{for(var o in n||(n={}))Mh.call(n,o)&&Ws(e,o,n[o]);if(Gs)for(var o of Gs(n))Fh.call(n,o)&&Ws(e,o,n[o]);return e},Ys=(e,n)=>qh(e,$h(n));const zh={props:{autoscroll:{type:Boolean,default:!0}},watch:{typeAheadPointer(){this.autoscroll&&this.maybeAdjustScroll()},open(e){this.autoscroll&&e&&this.$nextTick(()=>this.maybeAdjustScroll())}},methods:{maybeAdjustScroll(){var e;const n=((e=this.$refs.dropdownMenu)==null?void 0:e.children[this.typeAheadPointer])||!1;if(n){const o=this.getDropdownViewport(),{top:a,bottom:r,height:t}=n.getBoundingClientRect();if(a<o.top)return this.$refs.dropdownMenu.scrollTop=n.offsetTop;if(r>o.bottom)return this.$refs.dropdownMenu.scrollTop=n.offsetTop-(o.height-t)}},getDropdownViewport(){return this.$refs.dropdownMenu?this.$refs.dropdownMenu.getBoundingClientRect():{height:0,top:0,bottom:0}}}},Hh={data(){return{typeAheadPointer:-1}},watch:{filteredOptions(){for(let e=0;e<this.filteredOptions.length;e++)if(this.selectable(this.filteredOptions[e])){this.typeAheadPointer=e;break}},open(e){e&&this.typeAheadToLastSelected()},selectedValue(){this.open&&this.typeAheadToLastSelected()}},methods:{typeAheadUp(){for(let e=this.typeAheadPointer-1;e>=0;e--)if(this.selectable(this.filteredOptions[e])){this.typeAheadPointer=e;break}},typeAheadDown(){for(let e=this.typeAheadPointer+1;e<this.filteredOptions.length;e++)if(this.selectable(this.filteredOptions[e])){this.typeAheadPointer=e;break}},typeAheadSelect(){const e=this.filteredOptions[this.typeAheadPointer];e&&this.selectable(e)&&this.select(e)},typeAheadToLastSelected(){this.typeAheadPointer=this.selectedValue.length!==0?this.filteredOptions.indexOf(this.selectedValue[this.selectedValue.length-1]):-1}}},Uh={props:{loading:{type:Boolean,default:!1}},data(){return{mutableLoading:!1}},watch:{search(){this.$emit("search",this.search,this.toggleLoading)},loading(e){this.mutableLoading=e}},methods:{toggleLoading(e=null){return e==null?this.mutableLoading=!this.mutableLoading:this.mutableLoading=e}}},ii=(e,n)=>{const o=e.__vccOpts||e;for(const[a,r]of n)o[a]=r;return o},Kh={},Gh={xmlns:"http://www.w3.org/2000/svg",width:"10",height:"10"},Wh=g("path",{d:"M6.895455 5l2.842897-2.842898c.348864-.348863.348864-.914488 0-1.263636L9.106534.261648c-.348864-.348864-.914489-.348864-1.263636 0L5 3.104545 2.157102.261648c-.348863-.348864-.914488-.348864-1.263636 0L.261648.893466c-.348864.348864-.348864.914489 0 1.263636L3.104545 5 .261648 7.842898c-.348864.348863-.348864.914488 0 1.263636l.631818.631818c.348864.348864.914773.348864 1.263636 0L5 6.895455l2.842898 2.842897c.348863.348864.914772.348864 1.263636 0l.631818-.631818c.348864-.348864.348864-.914489 0-1.263636L6.895455 5z"},null,-1),Yh=[Wh];function Jh(e,n){return w(),K("svg",Gh,Yh)}const Qh=ii(Kh,[["render",Jh]]),Xh={},Zh={xmlns:"http://www.w3.org/2000/svg",width:"14",height:"10"},ev=g("path",{d:"M9.211364 7.59931l4.48338-4.867229c.407008-.441854.407008-1.158247 0-1.60046l-.73712-.80023c-.407008-.441854-1.066904-.441854-1.474243 0L7 5.198617 2.51662.33139c-.407008-.441853-1.066904-.441853-1.474243 0l-.737121.80023c-.407008.441854-.407008 1.158248 0 1.600461l4.48338 4.867228L7 10l2.211364-2.40069z"},null,-1),nv=[ev];function ov(e,n){return w(),K("svg",Zh,nv)}const av=ii(Xh,[["render",ov]]),Js={Deselect:Qh,OpenIndicator:av},rv={mounted(e,{instance:n}){if(n.appendToBody){const{height:o,top:a,left:r,width:t}=n.$refs.toggle.getBoundingClientRect();let s=window.scrollX||window.pageXOffset,l=window.scrollY||window.pageYOffset;e.unbindPosition=n.calculatePosition(e,n,{width:t+"px",left:s+r+"px",top:l+a+o+"px"}),document.body.appendChild(e)}},unmounted(e,{instance:n}){n.appendToBody&&(e.unbindPosition&&typeof e.unbindPosition=="function"&&e.unbindPosition(),e.parentNode&&e.parentNode.removeChild(e))}};function tv(e){const n={};return Object.keys(e).sort().forEach(o=>{n[o]=e[o]}),JSON.stringify(n)}let iv=0;function sv(){return++iv}const lv={components:Co({},Js),directives:{appendToBody:rv},mixins:[zh,Hh,Uh],compatConfig:{MODE:3},emits:["open","close","update:modelValue","search","search:compositionstart","search:compositionend","search:keydown","search:blur","search:focus","search:input","option:created","option:selecting","option:selected","option:deselecting","option:deselected"],props:{modelValue:{},components:{type:Object,default:()=>({})},options:{type:Array,default(){return[]}},disabled:{type:Boolean,default:!1},clearable:{type:Boolean,default:!0},deselectFromDropdown:{type:Boolean,default:!1},searchable:{type:Boolean,default:!0},multiple:{type:Boolean,default:!1},placeholder:{type:String,default:""},transition:{type:String,default:"vs__fade"},clearSearchOnSelect:{type:Boolean,default:!0},closeOnSelect:{type:Boolean,default:!0},label:{type:String,default:"label"},autocomplete:{type:String,default:"off"},reduce:{type:Function,default:e=>e},selectable:{type:Function,default:e=>!0},getOptionLabel:{type:Function,default(e){return typeof e=="object"?e.hasOwnProperty(this.label)?e[this.label]:console.warn(`[vue-select warn]: Label key "option.${this.label}" does not exist in options object ${JSON.stringify(e)}.
https://vue-select.org/api/props.html#getoptionlabel`):e}},getOptionKey:{type:Function,default(e){if(typeof e!="object")return e;try{return e.hasOwnProperty("id")?e.id:tv(e)}catch(n){return console.warn(`[vue-select warn]: Could not stringify this option to generate unique key. Please provide'getOptionKey' prop to return a unique key for each option.
https://vue-select.org/api/props.html#getoptionkey`,e,n)}}},onTab:{type:Function,default:function(){this.selectOnTab&&!this.isComposing&&this.typeAheadSelect()}},taggable:{type:Boolean,default:!1},tabindex:{type:Number,default:null},pushTags:{type:Boolean,default:!1},filterable:{type:Boolean,default:!0},filterBy:{type:Function,default(e,n,o){return(n||"").toLocaleLowerCase().indexOf(o.toLocaleLowerCase())>-1}},filter:{type:Function,default(e,n){return e.filter(o=>{let a=this.getOptionLabel(o);return typeof a=="number"&&(a=a.toString()),this.filterBy(o,a,n)})}},createOption:{type:Function,default(e){return typeof this.optionList[0]=="object"?{[this.label]:e}:e}},resetOnOptionsChange:{default:!1,validator:e=>["function","boolean"].includes(typeof e)},clearSearchOnBlur:{type:Function,default:function({clearSearchOnSelect:e,multiple:n}){return e&&!n}},noDrop:{type:Boolean,default:!1},inputId:{type:String},dir:{type:String,default:"auto"},selectOnTab:{type:Boolean,default:!1},selectOnKeyCodes:{type:Array,default:()=>[13]},searchInputQuerySelector:{type:String,default:"[type=search]"},mapKeydown:{type:Function,default:(e,n)=>e},appendToBody:{type:Boolean,default:!1},calculatePosition:{type:Function,default(e,n,{width:o,top:a,left:r}){e.style.top=a,e.style.left=r,e.style.width=o}},dropdownShouldOpen:{type:Function,default({noDrop:e,open:n,mutableLoading:o}){return e?!1:n&&!o}},uid:{type:[String,Number],default:()=>sv()}},data(){return{search:"",open:!1,isComposing:!1,pushedTags:[],_value:[],deselectButtons:[]}},computed:{isReducingValues(){return this.$props.reduce!==this.$options.props.reduce.default},isTrackingValues(){return typeof this.modelValue>"u"||this.isReducingValues},selectedValue(){let e=this.modelValue;return this.isTrackingValues&&(e=this.$data._value),e!=null&&e!==""?[].concat(e):[]},optionList(){return this.options.concat(this.pushTags?this.pushedTags:[])},searchEl(){return this.$slots.search?this.$refs.selectedOptions.querySelector(this.searchInputQuerySelector):this.$refs.search},scope(){const e={search:this.search,loading:this.loading,searching:this.searching,filteredOptions:this.filteredOptions};return{search:{attributes:Co({disabled:this.disabled,placeholder:this.searchPlaceholder,tabindex:this.tabindex,readonly:!this.searchable,id:this.inputId,"aria-autocomplete":"list","aria-labelledby":`vs${this.uid}__combobox`,"aria-controls":`vs${this.uid}__listbox`,ref:"search",type:"search",autocomplete:this.autocomplete,value:this.search},this.dropdownOpen&&this.filteredOptions[this.typeAheadPointer]?{"aria-activedescendant":`vs${this.uid}__option-${this.typeAheadPointer}`}:{}),events:{compositionstart:()=>this.isComposing=!0,compositionend:()=>this.isComposing=!1,keydown:this.onSearchKeyDown,blur:this.onSearchBlur,focus:this.onSearchFocus,input:n=>this.search=n.target.value}},spinner:{loading:this.mutableLoading},noOptions:{search:this.search,loading:this.mutableLoading,searching:this.searching},openIndicator:{attributes:{ref:"openIndicator",role:"presentation",class:"vs__open-indicator"}},listHeader:e,listFooter:e,header:Ys(Co({},e),{deselect:this.deselect}),footer:Ys(Co({},e),{deselect:this.deselect})}},childComponents(){return Co(Co({},Js),this.components)},stateClasses(){return{"vs--open":this.dropdownOpen,"vs--single":!this.multiple,"vs--multiple":this.multiple,"vs--searching":this.searching&&!this.noDrop,"vs--searchable":this.searchable&&!this.noDrop,"vs--unsearchable":!this.searchable,"vs--loading":this.mutableLoading,"vs--disabled":this.disabled}},searching(){return!!this.search},dropdownOpen(){return this.dropdownShouldOpen(this)},searchPlaceholder(){return this.isValueEmpty&&this.placeholder?this.placeholder:void 0},filteredOptions(){const e=[].concat(this.optionList);if(!this.filterable&&!this.taggable)return e;const n=this.search.length?this.filter(e,this.search,this):e;if(this.taggable&&this.search.length){const o=this.createOption(this.search);this.optionExists(o)||n.unshift(o)}return n},isValueEmpty(){return this.selectedValue.length===0},showClearButton(){return!this.multiple&&this.clearable&&!this.open&&!this.isValueEmpty}},watch:{options(e,n){const o=()=>typeof this.resetOnOptionsChange=="function"?this.resetOnOptionsChange(e,n,this.selectedValue):this.resetOnOptionsChange;!this.taggable&&o()&&this.clearSelection(),this.modelValue&&this.isTrackingValues&&this.setInternalValueFromOptions(this.modelValue)},modelValue:{immediate:!0,handler(e){this.isTrackingValues&&this.setInternalValueFromOptions(e)}},multiple(){this.clearSelection()},open(e){this.$emit(e?"open":"close")}},created(){this.mutableLoading=this.loading},methods:{setInternalValueFromOptions(e){Array.isArray(e)?this.$data._value=e.map(n=>this.findOptionFromReducedValue(n)):this.$data._value=this.findOptionFromReducedValue(e)},select(e){this.$emit("option:selecting",e),this.isOptionSelected(e)?this.deselectFromDropdown&&(this.clearable||this.multiple&&this.selectedValue.length>1)&&this.deselect(e):(this.taggable&&!this.optionExists(e)&&(this.$emit("option:created",e),this.pushTag(e)),this.multiple&&(e=this.selectedValue.concat(e)),this.updateValue(e),this.$emit("option:selected",e)),this.onAfterSelect(e)},deselect(e){this.$emit("option:deselecting",e),this.updateValue(this.selectedValue.filter(n=>!this.optionComparator(n,e))),this.$emit("option:deselected",e)},clearSelection(){this.updateValue(this.multiple?[]:null)},onAfterSelect(e){this.closeOnSelect&&(this.open=!this.open,this.searchEl.blur()),this.clearSearchOnSelect&&(this.search="")},updateValue(e){typeof this.modelValue>"u"&&(this.$data._value=e),e!==null&&(Array.isArray(e)?e=e.map(n=>this.reduce(n)):e=this.reduce(e)),this.$emit("update:modelValue",e)},toggleDropdown(e){const n=e.target!==this.searchEl;n&&e.preventDefault();const o=[...this.deselectButtons||[],this.$refs.clearButton];if(this.searchEl===void 0||o.filter(Boolean).some(a=>a.contains(e.target)||a===e.target)){e.preventDefault();return}this.open&&n?this.searchEl.blur():this.disabled||(this.open=!0,this.searchEl.focus())},isOptionSelected(e){return this.selectedValue.some(n=>this.optionComparator(n,e))},isOptionDeselectable(e){return this.isOptionSelected(e)&&this.deselectFromDropdown},optionComparator(e,n){return this.getOptionKey(e)===this.getOptionKey(n)},findOptionFromReducedValue(e){const n=a=>JSON.stringify(this.reduce(a))===JSON.stringify(e),o=[...this.options,...this.pushedTags].filter(n);return o.length===1?o[0]:o.find(a=>this.optionComparator(a,this.$data._value))||e},closeSearchOptions(){this.open=!1,this.$emit("search:blur")},maybeDeleteValue(){if(!this.searchEl.value.length&&this.selectedValue&&this.selectedValue.length&&this.clearable){let e=null;this.multiple&&(e=[...this.selectedValue.slice(0,this.selectedValue.length-1)]),this.updateValue(e)}},optionExists(e){return this.optionList.some(n=>this.optionComparator(n,e))},normalizeOptionForSlot(e){return typeof e=="object"?e:{[this.label]:e}},pushTag(e){this.pushedTags.push(e)},onEscape(){this.search.length?this.search="":this.searchEl.blur()},onSearchBlur(){if(this.mousedown&&!this.searching)this.mousedown=!1;else{const{clearSearchOnSelect:e,multiple:n}=this;this.clearSearchOnBlur({clearSearchOnSelect:e,multiple:n})&&(this.search=""),this.closeSearchOptions();return}if(this.search.length===0&&this.options.length===0){this.closeSearchOptions();return}},onSearchFocus(){this.open=!0,this.$emit("search:focus")},onMousedown(){this.mousedown=!0},onMouseUp(){this.mousedown=!1},onSearchKeyDown(e){const n=r=>(r.preventDefault(),!this.isComposing&&this.typeAheadSelect()),o={8:r=>this.maybeDeleteValue(),9:r=>this.onTab(),27:r=>this.onEscape(),38:r=>(r.preventDefault(),this.typeAheadUp()),40:r=>(r.preventDefault(),this.typeAheadDown())};this.selectOnKeyCodes.forEach(r=>o[r]=n);const a=this.mapKeydown(o,this);if(typeof a[e.keyCode]=="function")return a[e.keyCode](e)}}},cv=["dir"],uv=["id","aria-expanded","aria-owns"],dv={ref:"selectedOptions",class:"vs__selected-options"},mv=["disabled","title","aria-label","onClick"],pv={ref:"actions",class:"vs__actions"},fv=["disabled"],hv={class:"vs__spinner"},vv=["id"],gv=["id","aria-selected","onMouseover","onClick"],bv={key:0,class:"vs__no-options"},_v=Se(" Sorry, no matching options. "),yv=["id"];function Av(e,n,o,a,r,t){const s=rd("append-to-body");return w(),K("div",{dir:o.dir,class:rn(["v-select",t.stateClasses])},[bn(e.$slots,"header",kn(In(t.scope.header))),g("div",{id:`vs${o.uid}__combobox`,ref:"toggle",class:"vs__dropdown-toggle",role:"combobox","aria-expanded":t.dropdownOpen.toString(),"aria-owns":`vs${o.uid}__listbox`,"aria-label":"Search for option",onMousedown:n[1]||(n[1]=l=>t.toggleDropdown(l))},[g("div",dv,[(w(!0),K(Ce,null,un(t.selectedValue,(l,c)=>bn(e.$slots,"selected-option-container",{option:t.normalizeOptionForSlot(l),deselect:t.deselect,multiple:o.multiple,disabled:o.disabled},()=>[(w(),K("span",{key:o.getOptionKey(l),class:"vs__selected"},[bn(e.$slots,"selected-option",kn(In(t.normalizeOptionForSlot(l))),()=>[Se(ce(o.getOptionLabel(l)),1)]),o.multiple?(w(),K("button",{key:0,ref_for:!0,ref:d=>r.deselectButtons[c]=d,disabled:o.disabled,type:"button",class:"vs__deselect",title:`Deselect ${o.getOptionLabel(l)}`,"aria-label":`Deselect ${o.getOptionLabel(l)}`,onClick:d=>t.deselect(l)},[(w(),je(Cr(t.childComponents.Deselect)))],8,mv)):ve("",!0)]))])),256)),bn(e.$slots,"search",kn(In(t.scope.search)),()=>[g("input",St({class:"vs__search"},t.scope.search.attributes,td(t.scope.search.events)),null,16)])],512),g("div",pv,[Pn(g("button",{ref:"clearButton",disabled:o.disabled,type:"button",class:"vs__clear",title:"Clear Selected","aria-label":"Clear Selected",onClick:n[0]||(n[0]=(...l)=>t.clearSelection&&t.clearSelection(...l))},[(w(),je(Cr(t.childComponents.Deselect)))],8,fv),[[Li,t.showClearButton]]),bn(e.$slots,"open-indicator",kn(In(t.scope.openIndicator)),()=>[o.noDrop?ve("",!0):(w(),je(Cr(t.childComponents.OpenIndicator),kn(St({key:0},t.scope.openIndicator.attributes)),null,16))]),bn(e.$slots,"spinner",kn(In(t.scope.spinner)),()=>[Pn(g("div",hv,"Loading...",512),[[Li,e.mutableLoading]])])],512)],40,uv),G(Yd,{name:o.transition},{default:_e(()=>[t.dropdownOpen?Pn((w(),K("ul",{id:`vs${o.uid}__listbox`,ref:"dropdownMenu",key:`vs${o.uid}__listbox`,class:"vs__dropdown-menu",role:"listbox",tabindex:"-1",onMousedown:n[2]||(n[2]=vo((...l)=>t.onMousedown&&t.onMousedown(...l),["prevent"])),onMouseup:n[3]||(n[3]=(...l)=>t.onMouseUp&&t.onMouseUp(...l))},[bn(e.$slots,"list-header",kn(In(t.scope.listHeader))),(w(!0),K(Ce,null,un(t.filteredOptions,(l,c)=>(w(),K("li",{id:`vs${o.uid}__option-${c}`,key:o.getOptionKey(l),role:"option",class:rn(["vs__dropdown-option",{"vs__dropdown-option--deselect":t.isOptionDeselectable(l)&&c===e.typeAheadPointer,"vs__dropdown-option--selected":t.isOptionSelected(l),"vs__dropdown-option--highlight":c===e.typeAheadPointer,"vs__dropdown-option--disabled":!o.selectable(l)}]),"aria-selected":c===e.typeAheadPointer?!0:null,onMouseover:d=>o.selectable(l)?e.typeAheadPointer=c:null,onClick:vo(d=>o.selectable(l)?t.select(l):null,["prevent","stop"])},[bn(e.$slots,"option",kn(In(t.normalizeOptionForSlot(l))),()=>[Se(ce(o.getOptionLabel(l)),1)])],42,gv))),128)),t.filteredOptions.length===0?(w(),K("li",bv,[bn(e.$slots,"no-options",kn(In(t.scope.noOptions)),()=>[_v])])):ve("",!0),bn(e.$slots,"list-footer",kn(In(t.scope.listFooter)))],40,vv)),[[s]]):(w(),K("ul",{key:1,id:`vs${o.uid}__listbox`,role:"listbox",style:{display:"none",visibility:"hidden"}},null,8,yv))]),_:3},8,["name"]),bn(e.$slots,"footer",kn(In(t.scope.footer)))],10,cv)}const Nv=ii(lv,[["render",Av]]),xv={class:"page-header"},Bv={class:"page-header__row"},Tv={class:"page-header__heading"},Rv={key:0},eo={__name:"PageHeader",props:{title:{type:String,required:!0},description:String,helpButton:Boolean},emits:["help"],setup(e){return(n,o)=>(w(),K("header",xv,[g("div",Bv,[g("div",null,[g("div",Tv,[g("h1",null,ce(e.title),1),e.helpButton?(w(),K("button",{key:0,class:"page-header__help",type:"button",title:"Ajuda","aria-label":"Ajuda",onClick:o[0]||(o[0]=a=>n.$emit("help"))},[G(ee(ti),{size:14,"aria-hidden":"true"})])):ve("",!0)]),e.description?(w(),K("p",Rv,ce(e.description),1)):ve("",!0)]),bn(n.$slots,"action")])]))}},Sv={class:"empty-state"},wv={key:0,class:"empty-state__actions"},An={__name:"EmptyState",props:{title:String,text:String},setup(e){return(n,o)=>(w(),K("section",Sv,[o[0]||(o[0]=g("div",{class:"empty-state__icon","aria-hidden":"true"},"+",-1)),g("h2",null,ce(e.title),1),g("p",null,ce(e.text),1),n.$slots.default?(w(),K("div",wv,[bn(n.$slots,"default")])):ve("",!0)]))}};function si(e,n){return e?typeof e=="string"?e:n===1?e.singular:e.plural:""}function Vt(e,n,o=""){const a=typeof n=="boolean"?n?"sim":"não":n,r=si(o,n),t=r?`${a} ${r}`:a;switch(e){case">=":return`No mínimo ${t} (inclusive)`;case"<=":return`No máximo ${t} (inclusive)`;case">":return`Acima de ${t} (sem incluir o limite)`;case"<":return`Abaixo de ${t} (sem incluir o limite)`;case"==":case"eq":return`Igual a ${t}`;case"!=":return`Diferente de ${t}`;default:return t}}function Ev(e){const n=String(e??"").replace(/[^\d.,]/g,""),o=n.search(/[.,]/);if(o===-1)return n;const a=n.slice(0,o),r=n[o],t=n.slice(o+1).replace(/[.,]/g,"");return`${a===""?"0":a}${r}${t}`}function Qs(e){const n=String(e??"").trim().replace(",",".");if(!/^\d*\.?\d*$/.test(n)||n===""||n===".")return null;const o=Number(n);return Number.isFinite(o)?o:null}const Cv={class:"back-link__label"},kv={class:"ruleset-grid"},Iv={class:"field"},Pv=["value"],Ov={class:"field"},jv={class:"ruleset-option"},Vv={class:"ruleset-title"},Dv={key:0,class:"ruleset-norma"},Lv={key:0,class:"field"},qv={class:"field-name-input"},$v={id:"field-name-input__checkbox"},Mv={class:"fields-grid"},Fv={class:"field__heading"},zv=["for"],Hv={key:1},Uv=["aria-label","aria-expanded","aria-controls","onClick"],Kv=["id"],Gv={key:0},Wv={key:1,class:"parameter-help__expected"},Yv={key:2,class:"parameter-help__expected"},Jv=["id","onUpdate:modelValue"],Qv=["id","onUpdate:modelValue"],Xv=["value"],Zv=["id","value","onInput"],e0={class:"form-actions"},pt={__name:"ElementPage",props:{elementId:String,quick:Boolean},setup(e){const n=e,o=Ue("services"),a=Ue("builtInRuleSets"),r=ri(),t=Br(),s=Te(null),l=Te(null),c=Te([]),d=Te([]),u=Te(null),m=Te("todas"),f=Te(localStorage.getItem("elementAutoName")==="true"),v=Te(null),B=wa({name:"",ruleSet:"",data:{}}),x=Fe(()=>!n.elementId),R=Fe(()=>d.value.find(se=>se.id===B.ruleSet)),z=[">=",">","==","eq","!=","<","<="];function P(se){const y=z.indexOf(se);return y===-1?z.length:y}const J=Fe(()=>{const se={};for(const y of R.value?.regras??[]){const F=y.tipo==="conditional"?(()=>{const W=R.value?.parametros?.[y.parametro],he=B.data[y.parametro],Ie=W?.tipo==="number"?Qs(he):he;if(Ie==null||Ie==="")return[];const ze=(y.condicoes??[]).find(Ve=>Ve.quando&&da(Ie,Ve.quando.operador,Ve.quando.valor));return ze?.verificar?[ze.verificar]:[]})():y.operador&&y.valor!==void 0?[{...y,parametro:y.parametro}]:[];for(const W of F){if(!W.parametro||W.valor===void 0)continue;se[W.parametro]??=[];const he=Vt(W.operador,W.valor,R.value.parametros?.[W.parametro]?.unidade);se[W.parametro].some(Ie=>Ie.description===he)||se[W.parametro].push({description:he,order:P(W.operador)})}}return Object.fromEntries(Object.entries(se).map(([y,F])=>[y,F.sort((W,he)=>W.order-he.order).map(W=>W.description)]))}),q=Fe(()=>{const se=new Set;for(const y of R.value?.regras??[])y.tipo==="checklist"&&y.parametro&&se.add(y.parametro);return se});function ne(se,y){return!!y?.definicao||!!J.value[se]?.length||q.value.has(se)}const H=Fe(()=>{const se=d.value.map(y=>y.norma?.nome).filter(Boolean);return["todas",...new Set(se)]}),E=Fe(()=>m.value==="todas"?d.value:d.value.filter(se=>se.norma?.nome===m.value));async function k(){n.quick&&o.quickEvaluationService.clear();const se=await o.ruleSetService.list();d.value=[...a.map(F=>F.ruleSet),...se],x.value||(s.value=await o.projectService.getElement(n.elementId));const y=s.value?.environmentId??r.query.environmentId;if(!(!n.quick&&(!y||!x.value&&!s.value))){if(n.quick||(l.value=await o.projectService.getEnvironment(y),c.value=await o.projectService.listElements(y)),s.value){const F=await o.evaluationService.listEvaluations(s.value.id);u.value=F[0]}B.name=s.value?.name??"",B.ruleSet=r.query.ruleSet??s.value?.rule??d.value[0]?.id??"",Object.assign(B.data,u.value?.data??{})}}function C(){const se={},y=R.value?.parametros??{};for(const[F,W]of Object.entries(y)){const he=B.data[F];if(!(he===""||he===void 0||he===null))if(W.tipo==="number"){const Ie=Qs(he);Ie!==null&&(se[F]=Ie)}else W.tipo==="boolean"?se[F]=he===!0||he==="true":se[F]=he}return se}function le(se,y){const F=y.target,W=F.value,he=Ev(W);if(B.data[se]=he,W===he)return;const Ie=F.selectionStart??W.length,ze=W.slice(0,Ie).replace(/\D/g,"").length;F.value=he;let Ve=0,on=0;for(;Ve<he.length&&on<ze;)/\d/.test(he[Ve])&&on++,Ve++;F.setSelectionRange(Ve,Ve)}async function fe(){if(!R.value)return window.alert("Selecione um conjunto de regras.");const se=C(),y={name:B.name,type:R.value.nome,rule:R.value.id};try{const F=s.value?await o.projectService.updateElement(s.value.id,y):await o.projectService.createElement(l.value.id,y);await o.evaluationService.saveElementAnswers({elementId:F.id,checklist:R.value,data:se}),t.push(`/projects/${l.value.projectId}/environments/${l.value.id}`)}catch(F){window.alert(F.message)}}function ae(se){if(!se)return"";const y=new Set(c.value.filter(he=>he.id!==s.value?.id).map(he=>he.name));if(!y.has(se))return se;let F=1,W=`${se} (${F})`;for(;y.has(W);)F++,W=`${se} (${F})`;return W}fo([f,()=>B.ruleSet],([se,y])=>{if(localStorage.setItem("elementAutoName",String(se)),se){const W=d.value.find(he=>he.id===y)?.nome??"";B.name=ae(W)}});async function Re(){if(!R.value)return window.alert("Selecione um conjunto de regras.");const se=C();if(n.quick){try{o.quickEvaluationService.evaluate({name:B.name,checklist:R.value,data:se}),t.push("/quick-evaluation/result")}catch(F){window.alert(F.message)}return}const y={name:B.name,type:R.value.nome,rule:R.value.id};try{const F=s.value?await o.projectService.updateElement(s.value.id,y):await o.projectService.createElement(l.value.id,y);await o.evaluationService.evaluateElement({elementId:F.id,checklist:R.value,data:se}),t.push(`/elements/${F.id}/evaluation`)}catch(F){window.alert(F.message)}}fo(m,()=>{E.value.some(y=>y.id===B.ruleSet)||(B.ruleSet=E.value[0]?.id??"")}),fo(()=>B.ruleSet,()=>{v.value=null;const se=Object.keys(R.value?.parametros??{});Object.keys(B.data).forEach(y=>{se.includes(y)||delete B.data[y]})});function Ae(se,y,F){const W=(F||"").toLowerCase().trim();if(!W)return!0;const he=se.nome?.toLowerCase().includes(W),Ie=se.norma?.nome?.toLowerCase().includes(W),ze=se.regras?.some(Ve=>Ve.nome?.toLowerCase().includes(W)||Ve.id?.toLowerCase().includes(W));return!!(he||Ie||ze)}return En(k),(se,y)=>e.quick||l.value?(w(),K(Ce,{key:0},[e.quick?ve("",!0):(w(),je(ee(Pe),{key:0,class:"back-link",to:`/projects/${l.value.projectId}/environments/${l.value.id}`},{default:_e(()=>[G(ee(Ra),{size:18,"aria-hidden":"true"}),g("span",Cv,ce(l.value.name),1)]),_:1},8,["to"])),G(eo,{title:e.quick?"Avaliação rápida":x.value?"Novo elemento":s.value.name,description:"Escolha o tipo e informe as medidas observadas."},null,8,["title"]),g("form",{class:"form-card",onSubmit:y[5]||(y[5]=vo(()=>{},["prevent"]))},[g("div",kv,[g("label",Iv,[y[7]||(y[7]=g("span",null,"Norma de referência",-1)),Pn(g("select",{"onUpdate:modelValue":y[0]||(y[0]=F=>m.value=F)},[y[6]||(y[6]=g("option",{value:"todas"},"Todas as normas",-1)),(w(!0),K(Ce,null,un(H.value.filter(F=>F!=="todas"),F=>(w(),K("option",{key:F,value:F},ce(F),9,Pv))),128))],512),[[Dr,m.value]])]),g("label",Ov,[y[8]||(y[8]=g("span",null,"Tipo de elemento *",-1)),G(ee(Nv),{modelValue:B.ruleSet,"onUpdate:modelValue":y[1]||(y[1]=F=>B.ruleSet=F),options:E.value,label:"nome",reduce:F=>F.id,"filter-by":Ae,placeholder:"Pesquise o elemento ou regra..."},{option:_e(F=>[g("div",jv,[g("span",Vv,ce(F.nome),1),F.norma?.nome?(w(),K("small",Dv," ("+ce(F.norma.nome)+") ",1)):ve("",!0)])]),_:1},8,["modelValue","options","reduce"])])]),e.quick?ve("",!0):(w(),K("div",Lv,[g("div",qv,[y[10]||(y[10]=g("label",{for:"element-name"},"Nome do elemento *",-1)),g("div",$v,[Pn(g("input",{type:"checkbox",id:"auto-name-chk","onUpdate:modelValue":y[2]||(y[2]=F=>f.value=F)},null,512),[[bm,f.value]]),y[9]||(y[9]=g("label",{for:"auto-name-chk"},"Auto Nomear",-1))])]),Pn(g("input",{id:"element-name","onUpdate:modelValue":y[3]||(y[3]=F=>B.name=F),required:"",placeholder:"Ex.: Porta principal"},null,512),[[or,B.name]])])),y[16]||(y[16]=g("div",{class:"form-divider"},[g("strong",null,"Dados para avaliação"),g("span",null,"Campos definidos pelo conjunto de regras selecionado.")],-1)),g("div",Mv,[(w(!0),K(Ce,null,un(R.value?.parametros,(F,W)=>(w(),K("div",{key:W,class:"field"},[g("div",Fv,[g("label",{for:`parameter-${W}`},[Se(ce(F.label??W),1),F.obrigatorio?(w(),K(Ce,{key:0},[Se(" *")],64)):ve("",!0),F.unidade?(w(),K("small",Hv," ("+ce(ee(si)(F.unidade))+")",1)):ve("",!0)],8,zv),ne(W,F)?(w(),K("button",{key:0,class:rn(["parameter-help",{"is-open":v.value===W}]),type:"button","aria-label":`Definição e critério: ${F.label??W}`,"aria-expanded":v.value===W,"aria-controls":`parameter-help-${W}`,onClick:he=>v.value=v.value===W?null:W,onKeydown:y[4]||(y[4]=ei(he=>v.value=null,["esc"]))},[G(ee(ti),{size:16,"aria-hidden":"true"})],42,Uv)):ve("",!0)]),v.value===W?(w(),K("div",{key:0,id:`parameter-help-${W}`,class:"parameter-help__panel"},[F.definicao?(w(),K("p",Gv,ce(F.definicao),1)):ve("",!0),J.value[W]?.length?(w(),K("p",Wv,[y[11]||(y[11]=g("strong",null,"Esperado:",-1)),Se(" "+ce(J.value[W].join(" e ")),1)])):q.value.has(W)?(w(),K("p",Yv,[...y[12]||(y[12]=[g("strong",null,"Esperado:",-1),Se(" verificação manual ",-1)])])):ve("",!0)],8,Kv)):ve("",!0),F.tipo==="boolean"?Pn((w(),K("select",{key:1,id:`parameter-${W}`,"onUpdate:modelValue":he=>B.data[W]=he},[...y[13]||(y[13]=[g("option",{value:""},"Não informado",-1),g("option",{value:!0},"Sim",-1),g("option",{value:!1},"Não",-1)])],8,Jv)),[[Dr,B.data[W]]]):F.tipo==="select"?Pn((w(),K("select",{key:2,id:`parameter-${W}`,"onUpdate:modelValue":he=>B.data[W]=he},[y[14]||(y[14]=g("option",{value:""},"Selecione",-1)),(w(!0),K(Ce,null,un(F.opcoes??[],he=>(w(),K("option",{key:he,value:he},ce(he),9,Xv))),128))],8,Qv)),[[Dr,B.data[W]]]):(w(),K("input",{key:3,id:`parameter-${W}`,value:B.data[W]??"",type:"text",inputmode:"decimal",autocomplete:"off",autocapitalize:"off",spellcheck:"false",onInput:he=>le(W,he)},null,40,Zv))]))),128))]),g("div",e0,[G(ee(Pe),{class:"button button--ghost",to:e.quick?"/projects":`/projects/${l.value.projectId}/environments/${l.value.id}`},{default:_e(()=>[...y[15]||(y[15]=[Se(" Cancelar ",-1)])]),_:1},8,["to"]),e.quick?ve("",!0):(w(),K("button",{key:0,class:"button button--outline",type:"button",onClick:fe}," Salvar e voltar ")),g("button",{class:"button",type:"button",onClick:Re},ce(e.quick?"Avaliar":"Salvar e avaliar"),1)])],32)],64)):(w(),je(An,{key:1,title:"Elemento não encontrado",text:"Volte para o ambiente e tente novamente."},{default:_e(()=>[G(ee(Pe),{class:"button",to:"/projects"},{default:_e(()=>[...y[17]||(y[17]=[Se("Projetos",-1)])]),_:1})]),_:1}))}},Uo={__name:"StatusBadge",props:{status:{type:String,default:"nao_avaliado"}},setup(e){return(n,o)=>(w(),K("span",{class:rn(["status",`status--${e.status}`])},ce(ee(zm)(e.status)),3))}},n0={class:"evaluation-summary","aria-labelledby":"evaluation-summary-title"},o0={class:"evaluation-summary__heading"},a0={id:"evaluation-summary-title"},r0={class:"evaluation-summary__score"},t0={class:"evaluation-summary__cards"},i0={class:"evaluation-summary__card evaluation-summary__card--conforme"},s0={class:"evaluation-summary__card evaluation-summary__card--nao_conforme"},l0={class:"evaluation-summary__card evaluation-summary__card--nao_avaliado"},li={__name:"EvaluationSummary",props:{summary:{type:Object,required:!0},scope:{type:String,default:"elementos"}},setup(e){const n=e,o=Fe(()=>n.summary.totalElements?n.summary.overallStatus==="conforme"?"Todos os elementos estão conformes":n.summary.overallStatus==="nao_conforme"?"Há elementos não conformes":"Há elementos pendentes de avaliação":"Nenhum elemento cadastrado");return(a,r)=>(w(),K("section",n0,[g("div",o0,[g("div",null,[g("h2",a0,"Situação do "+ce(e.scope),1),g("p",null,ce(o.value),1)]),g("div",r0,[g("strong",null,ce(e.summary.score)+"%",1),r[0]||(r[0]=g("span",null,"conformes",-1))])]),g("div",t0,[g("div",i0,[r[1]||(r[1]=g("span",null,"Conformes",-1)),g("strong",null,ce(e.summary.conforme),1)]),g("div",s0,[r[2]||(r[2]=g("span",null,"Não conformes",-1)),g("strong",null,ce(e.summary.nao_conforme),1)]),g("div",l0,[r[3]||(r[3]=g("span",null,"Pendentes",-1)),g("strong",null,ce(e.summary.nao_avaliado),1)])]),e.summary.totalElements?(w(),je(Uo,{key:0,status:e.summary.overallStatus},null,8,["status"])):ve("",!0)]))}},c0={class:"back-link__label"},u0={class:"project-header__actions"},d0={key:1,class:"card-list collection-list"},m0={class:"card__icon"},p0={class:"card__menu"},f0=["onClick"],h0={__name:"EnvironmentPage",props:{projectId:String,environmentId:String},setup(e){const n=e,o=Ue("services"),a=Ue("confirmPopup"),r=Br(),t=Te(null),s=Te(null),l=Te([]),c=Te(null);function d(x){return x.status==="nao_avaliado"?`/elements/${x.element.id}`:`/elements/${x.element.id}/evaluation`}function u(x,R){a.confirm(R,`Excluir o elemento ${x.name} e suas avaliações?`,()=>m(x))}async function m(x){await o.projectService.deleteElement(x.id),await B()}function f(x){a.confirm(x,`Excluir o ambiente “${t.value.name}” e seus elementos?`,v)}async function v(){await o.projectService.deleteEnvironment(t.value.id),r.push(`/projects/${t.value.projectId}`)}async function B(){if(t.value=await o.projectService.getEnvironment(n.environmentId),!t.value)return;s.value=await o.projectService.getProject(t.value.projectId);const x=await o.projectService.listElements(t.value.id),[R,z]=await Promise.all([Promise.all(x.map(async P=>{const J=await o.evaluationService.listEvaluations(P.id);return{element:P,status:Ct(J)}})),o.evaluationService.getEnvironmentSummary(t.value.id)]);l.value=R,c.value=z}return En(B),(x,R)=>t.value?(w(),K(Ce,{key:0},[G(ee(Pe),{class:"back-link",to:`/projects/${t.value.projectId}`},{default:_e(()=>[G(ee(Ra),{size:18,"aria-hidden":"true"}),g("span",c0,ce(s.value?.name??"Projeto"),1)]),_:1},8,["to"]),G(eo,{title:t.value.name},{action:_e(()=>[g("div",u0,[l.value.length?(w(),je(ee(Pe),{key:0,class:"button",to:{path:"/elements/new",query:{environmentId:t.value.id}}},{default:_e(()=>[G(ee(Ks),{size:18,"aria-hidden":"true"}),R[0]||(R[0]=Se("Adicionar elemento ",-1))]),_:1},8,["to"])):ve("",!0),g("button",{class:"icon-button icon-button--danger",title:"Excluir","aria-label":"Excluir ambiente",onClick:f},[G(ee(Ho),{size:18,"aria-hidden":"true"})])])]),_:1},8,["title"]),c.value&&l.value.length?(w(),je(li,{key:0,summary:c.value,scope:"ambiente"},null,8,["summary"])):ve("",!0),l.value.length?(w(),K("div",d0,[(w(!0),K(Ce,null,un(l.value,z=>(w(),K("article",{key:z.element.id,class:"card card--interactive"},[G(ee(Pe),{class:"card__link",to:d(z)},{default:_e(()=>[g("span",m0,[G(ee(ph),{size:22,"aria-hidden":"true"})]),g("div",null,[g("h2",null,ce(z.element.name),1),g("p",null,ce(z.element.type),1)]),G(Uo,{status:z.status},null,8,["status"]),G(ee(Ta),{size:20,class:"chevron","aria-hidden":"true"})]),_:2},1032,["to"]),g("div",p0,[g("button",{class:"icon-button icon-button--danger",title:"Excluir","aria-label":"Excluir",onClick:P=>u(z.element,P)},[G(ee(Ho),{size:18,"aria-hidden":"true"})],8,f0)])]))),128))])):ve("",!0),l.value.length?ve("",!0):(w(),je(An,{key:2,class:"collection-empty",title:"Nenhum elemento ainda",text:"Cadastre portas, rampas, sanitários e outros itens para avaliar."},{default:_e(()=>[G(ee(Pe),{class:"button",to:{path:"/elements/new",query:{environmentId:t.value.id}}},{default:_e(()=>[G(ee(Ks),{size:18,"aria-hidden":"true"}),R[1]||(R[1]=Se("Adicionar elemento ",-1))]),_:1},8,["to"])]),_:1}))],64)):(w(),je(An,{key:1,title:"Ambiente não encontrado",text:"Ele pode ter sido removido."},{default:_e(()=>[G(ee(Pe),{class:"button",to:"/projects"},{default:_e(()=>[...R[2]||(R[2]=[Se("Projetos",-1)])]),_:1})]),_:1}))}},v0={class:"back-link__label"},g0={key:0,class:"project-header__actions"},b0={class:"result-summary__counts","aria-label":"Resumo das regras"},_0={key:0,class:"result-summary__pending"},y0={class:"results"},A0={class:"result-row__content"},N0={key:0,class:"result-row__action"},x0={key:1},B0={key:0,class:"result-values"},T0={key:0,class:"result-values__context"},R0={key:1,class:"result-values__item"},S0={key:2,class:"result-values__item result-values__item--expected"},w0={key:3,class:"result-row__reference"},E0={key:1,class:"results-action"},Xs={__name:"EvaluationPage",props:{elementId:String,quick:Boolean},setup(e){const n=e,o=Ue("services"),a=Ue("builtInRuleSets"),r=Ue("confirmPopup"),t=Br(),s=Te(null),l=Te(null),c=Te(null),d=Te([]),u=Fe(()=>l.value?`/projects/${l.value.projectId}/environments/${l.value.id}`:"/projects"),m=Fe(()=>c.value?.result??[]),f=Fe(()=>d.value.find(k=>k.id===s.value?.rule));function v(k){const C=f.value?.regras?.find(he=>he.id===k.id),le=c.value?.data??{},fe=f.value?.parametros??{};let ae=k.parametro??C?.parametro,Re=k.operador??C?.operador,Ae=k.valorEsperado??C?.valor,se="";if(C?.tipo==="conditional"){const he=le[C.parametro],Ie=(C.condicoes??[]).find(ze=>ze.quando&&da(he,ze.quando.operador,ze.quando.valor));if(Ie?.verificar){ae=Ie.verificar.parametro,Re=Ie.verificar.operador,Ae=Ie.verificar.valor;const ze=fe[C.parametro];se=`${ze?.label??C.parametro}: ${Vt(Ie.quando.operador,Ie.quando.valor,ze?.unidade)}`}}const y=fe[ae]??{},F=k.valorInformado!==void 0?k.valorInformado:le[ae],W=Ae!==void 0&&Re!==void 0;return{parameterLabel:y.label??ae,actual:typeof F=="boolean"?F?"Sim":"Não":F,unit:typeof F=="boolean"?"":si(k.unidade??y.unidade??"",F),expected:W?Vt(Re,Ae,k.unidade??y.unidade):"",conditionalDescription:se}}function B(k){return f.value?.regras?.find(C=>C.id===k.id)}function x(k){const C=k.parametro??B(k)?.parametro;return(f.value?.parametros?.[C]??{}).label??C??k.id}function R(k){const C=x(k);switch(k.status){case"invalido":return k.motivo==="obrigatorio"?`Falta preencher: ${C}`:`Ajuste “${C}”: ${k.mensagem}`;case"nao_avaliado":return`Aguardando: ${C}`;case"manual":case"atencao":case"erro":return k.mensagem??null;default:return null}}const z=Fe(()=>Hm(m.value)),P=Fe(()=>m.value.length?z.value.nao_conforme>0?"nao_conforme":z.value.pendente>0?"nao_avaliado":"conforme":"nao_avaliado"),J=Fe(()=>{switch(P.value){case"conforme":return"Elemento conforme";case"nao_conforme":return"Há itens não conformes";default:return"Avaliação pendente"}});function q(k){return k?new Intl.DateTimeFormat("pt-BR",{dateStyle:"medium",timeStyle:"short"}).format(new Date(k)):""}async function ne(){const k=await o.ruleSetService.list();if(d.value=[...(a??[]).map(C=>C.ruleSet),...k],n.quick){const C=o.quickEvaluationService.getCurrent();s.value=C?.element??null,c.value=C?.evaluation??null;return}if(s.value=await o.projectService.getElement(n.elementId),s.value){l.value=await o.projectService.getEnvironment(s.value.environmentId);const C=await o.evaluationService.listEvaluations(s.value.id);c.value=C[0]??null}}function H(k){r.confirm(k,`Excluir o elemento ${s.value.name} e suas avaliações?`,E)}async function E(){await o.projectService.deleteElement(s.value.id),t.push(u.value)}return En(ne),(k,C)=>s.value&&c.value?(w(),K(Ce,{key:0},[e.quick?ve("",!0):(w(),je(ee(Pe),{key:0,class:"back-link",to:u.value},{default:_e(()=>[G(ee(Ra),{size:18,"aria-hidden":"true"}),g("span",v0,ce(l.value?.name??s.value.name),1)]),_:1},8,["to"])),G(eo,{title:s.value.name,description:`Avaliação realizada em ${q(c.value.evaluatedAt)}`},{action:_e(()=>[e.quick?ve("",!0):(w(),K("div",g0,[G(ee(Pe),{class:"button button--outline",to:`/elements/${s.value.id}`},{default:_e(()=>[G(ee(Bh),{size:18,"aria-hidden":"true"}),C[0]||(C[0]=Se("Editar elemento ",-1))]),_:1},8,["to"]),g("button",{class:"icon-button icon-button--danger",title:"Excluir","aria-label":"Excluir elemento",onClick:H},[G(ee(Ho),{size:18,"aria-hidden":"true"})])]))]),_:1},8,["title","description"]),g("section",{class:rn(["result-summary",`result-summary--${P.value}`])},[G(Uo,{status:P.value},null,8,["status"]),g("h2",null,ce(J.value),1),g("div",b0,[g("span",null,[g("strong",null,ce(z.value.conforme),1),C[1]||(C[1]=Se(" conformes",-1))]),g("span",null,[g("strong",null,ce(z.value.nao_conforme),1),C[2]||(C[2]=Se(" não conformes",-1))]),g("span",null,[g("strong",null,ce(z.value.pendente),1),C[3]||(C[3]=Se(" pendentes",-1))])]),z.value.pendente?(w(),K("div",_0,[C[5]||(C[5]=g("span",null,"Pendências:",-1)),(w(!0),K(Ce,null,un(z.value.pendingBreakdown,le=>(w(),K("span",{key:le.id,class:"result-summary__pending-item"},[g("strong",null,ce(le.count),1),Se(" "+ce(le.label),1)]))),128)),e.quick?ve("",!0):(w(),je(ee(Pe),{key:0,class:"text-button",to:`/elements/${s.value.id}`},{default:_e(()=>[...C[4]||(C[4]=[Se(" Editar elemento ",-1)])]),_:1},8,["to"]))])):ve("",!0)],2),g("section",y0,[C[8]||(C[8]=g("h2",null,"Regras avaliadas",-1)),(w(!0),K(Ce,null,un(m.value,le=>(w(),K("article",{key:le.id,class:rn(["result-row",`result-row--${le.status}`])},[g("div",A0,[G(Uo,{status:le.status},null,8,["status"]),g("h3",null,ce(le.nome??le.id),1),R(le)?(w(),K("p",N0,ce(R(le)),1)):le.mensagem?(w(),K("p",x0,ce(le.mensagem),1)):ve("",!0),ee(ar)(le.status)!=="pendente"?(w(!0),K(Ce,{key:2},un([v(le)],fe=>(w(),K("div",{key:le.id,class:"result-row__details"},[fe.actual!==void 0||fe.expected?(w(),K("div",B0,[fe.conditionalDescription?(w(),K("div",T0,[C[6]||(C[6]=g("span",null,"Condição desta regra",-1)),g("strong",null,ce(fe.conditionalDescription),1)])):ve("",!0),fe.actual!==void 0?(w(),K("div",R0,[g("span",null,"Valor informado · "+ce(fe.parameterLabel),1),g("strong",null,[Se(ce(fe.actual),1),fe.unit?(w(),K(Ce,{key:0},[Se(ce(fe.unit),1)],64)):ve("",!0)])])):ve("",!0),fe.expected?(w(),K("div",S0,[C[7]||(C[7]=g("span",null,"Critério esperado",-1)),g("strong",null,ce(fe.expected),1)])):ve("",!0)])):ve("",!0)]))),128)):ve("",!0),le.referencia?(w(),K("small",w0,"Referência: "+ce(le.referencia),1)):ve("",!0)])],2))),128))]),e.quick?(w(),K("div",E0,[G(ee(Pe),{class:"button",to:"/quick-evaluation"},{default:_e(()=>[...C[9]||(C[9]=[Se(" Nova avaliação rápida ",-1)])]),_:1})])):ve("",!0)],64)):s.value?(w(),K(Ce,{key:1},[e.quick?ve("",!0):(w(),je(ee(Pe),{key:0,class:"back-link",to:u.value},{default:_e(()=>[G(ee(Ra),{size:18,"aria-hidden":"true"}),C[10]||(C[10]=g("span",{class:"back-link__label"},"Elemento",-1))]),_:1},8,["to"])),G(An,{title:"Ainda não há avaliação",text:"Preencha os dados do elemento para executar as regras."},{default:_e(()=>[G(ee(Pe),{class:"button",to:e.quick?"/quick-evaluation":`/elements/${s.value.id}`},{default:_e(()=>[Se(ce(e.quick?"Nova avaliação rápida":"Avaliar elemento"),1)]),_:1},8,["to"])]),_:1})],64)):(w(),je(An,{key:2,title:"Avaliação não encontrada",text:e.quick?"Inicie uma avaliação rápida para ver o resultado.":"O elemento pode ter sido removido."},{default:_e(()=>[G(ee(Pe),{class:"button",to:e.quick?"/quick-evaluation":"/projects"},{default:_e(()=>[Se(ce(e.quick?"Avaliação rápida":"Projetos"),1)]),_:1},8,["to"])]),_:1},8,["text"]))}},C0={class:"project-header__actions"},k0={class:"collection-form__heading"},I0={class:"field"},P0={class:"environments-summary-container"},O0={key:0,class:"card-grid-environment collection-list"},j0={class:"card__icon"},V0={class:"card__menu"},D0=["onClick"],L0=["onClick"],q0={__name:"ProjectPage",props:{projectId:String},setup(e){const n=e,o=Ue("services"),a=Ue("confirmPopup"),r=Te(null),t=Te([]),s=Te(""),l=Te(null),c=Te(null),d=Te(null),u=Te(null),m=Te(null);function f(){const q=m.value;m.value=null,yn(()=>{q?.isConnected&&q.focus()})}async function v(){r.value=await o.projectService.getProject(n.projectId),r.value&&([t.value,c.value]=await Promise.all([o.projectService.listEnvironments(n.projectId),o.evaluationService.getProjectSummary(n.projectId)]))}async function B(q){m.value=q?.currentTarget??null,l.value={},s.value="",await yn(),d.value?.scrollIntoView({behavior:"smooth"}),u.value?.focus({preventScroll:!0}),u.value?.select()}async function x(q,ne){m.value=ne?.currentTarget??null,l.value=q,s.value=q.name,await yn(),u.value?.focus(),u.value?.select()}function R(){l.value=null,s.value="",f()}async function z(){l.value?.id?await o.projectService.renameEnvironment(l.value.id,s.value):await o.projectService.createEnvironment(n.projectId,{name:s.value}),R(),await v()}function P(q,ne){a.open({target:ne.currentTarget,message:`Excluir o ambiente “${q.name}” e seus elementos?`,onAccept:()=>J(q)})}async function J(q){const ne=await o.projectService.listElements(q.id);for(const H of ne){const E=await o.evaluationService.listEvaluations(H.id);for(const k of E)await o.repositories.evaluationRepository.delete(k.id);await o.repositories.elementRepository.delete(H.id)}await o.repositories.environmentRepository.delete(q.id),await v()}return En(v),(q,ne)=>r.value?(w(),K(Ce,{key:0},[G(eo,{title:r.value.name,description:`${t.value.length} ambiente${t.value.length===1?"":"s"} cadastrado${t.value.length===1?"":"s"}.
      
${r.value.description}`},{action:_e(()=>[g("div",C0,[t.value.length?(w(),je(ee(Pe),{key:0,class:"button button--outline",to:`/projects/${e.projectId}/status`},{default:_e(()=>[G(ee(po),{size:18,"aria-hidden":"true"}),ne[3]||(ne[3]=Se("Status detalhado ",-1))]),_:1},8,["to"])):ve("",!0),t.value.length?(w(),K("button",{key:1,class:"button",onClick:ne[0]||(ne[0]=H=>B(H))},[G(ee(tr),{size:18,"aria-hidden":"true"}),ne[4]||(ne[4]=Se("Novo ambiente",-1))])):ve("",!0)])]),_:1},8,["title","description"]),l.value?(w(),K("form",{key:0,class:"form-card collection-form",onSubmit:vo(z,["prevent"]),onKeydown:ei(R,["esc"]),ref_key:"inputCreate",ref:d},[g("div",k0,[g("h2",null,ce(l.value.id?"Nome do ambiente":"Novo ambiente"),1),ne[5]||(ne[5]=g("p",null,"Use um nome que ajude a identificar este espaço no projeto.",-1))]),g("label",I0,[ne[6]||(ne[6]=g("span",null,"Nome do ambiente",-1)),Pn(g("input",{ref_key:"nameInput",ref:u,"onUpdate:modelValue":ne[1]||(ne[1]=H=>s.value=H),required:""},null,512),[[or,s.value]])]),g("div",{class:"form-actions"},[g("button",{class:"button button--ghost",type:"button",onClick:R}," Cancelar "),ne[7]||(ne[7]=g("button",{class:"button",type:"submit"},"Salvar",-1))])],544)):ve("",!0),c.value&&t.value.length?(w(),je(li,{key:1,summary:c.value,scope:"projeto"},null,8,["summary"])):ve("",!0),g("div",P0,[t.value.length?(w(),K("div",O0,[(w(!0),K(Ce,null,un(t.value,H=>(w(),K("article",{key:H.id,class:"card-environment"},[G(ee(Pe),{class:"card__link",to:`/projects/${r.value.id}/environments/${H.id}`},{default:_e(()=>[g("span",j0,[G(ee(Nh),{size:22,"aria-hidden":"true"})]),g("div",null,[g("h2",null,ce(H.name),1),ne[8]||(ne[8]=g("p",null,"Ambiente",-1))])]),_:2},1032,["to"]),g("div",V0,[g("button",{class:"text-button",onClick:E=>x(H,E)}," Editar ",8,D0),g("button",{class:"icon-button icon-button--danger",title:"Excluir","aria-label":"Excluir",onClick:E=>P(H,E)},[G(ee(Ho),{size:18,"aria-hidden":"true"})],8,L0)])]))),128))])):ve("",!0),!t.value.length&&!l.value?(w(),je(An,{key:1,class:"collection-empty",title:"Nenhum ambiente ainda",text:"Adicione espaços como entrada, banheiro ou circulação."},{default:_e(()=>[g("button",{class:"button",onClick:ne[2]||(ne[2]=H=>B(H))},[G(ee(tr),{size:18,"aria-hidden":"true"}),ne[9]||(ne[9]=Se("Novo ambiente",-1))])]),_:1})):ve("",!0)])],64)):(w(),je(An,{key:1,title:"Projeto não encontrado",text:"Ele pode ter sido removido."},{default:_e(()=>[G(ee(Pe),{class:"button",to:"/projects"},{default:_e(()=>[...ne[10]||(ne[10]=[Se("Voltar aos projetos",-1)])]),_:1})]),_:1}))}},$0={key:0,class:"muted",role:"status"},M0={class:"back-link__label"},F0={key:0,class:"alert alert--error",role:"alert"},z0={key:2,class:"project-status","aria-label":"Status por ambiente"},H0={class:"project-status__heading"},U0=["aria-label"],K0={class:"status status--conforme"},G0={class:"status status--nao_conforme"},W0={class:"status status--nao_avaliado"},Y0={key:1,class:"project-status__elements"},J0={class:"project-status__element-name"},Q0={key:2,class:"muted"},X0={__name:"ProjectStatusPage",props:{projectId:String},setup(e){const n=e,o=Ue("services"),a=Te(null),r=Te(null),t=Te(!0),s=Te("");async function l(){try{a.value=await o.projectService.getProject(n.projectId),a.value&&(r.value=await o.evaluationService.getProjectStatus(n.projectId))}catch(u){s.value=u.message}finally{t.value=!1}}function c(u){return u.status==="nao_avaliado"?`/elements/${u.element.id}`:`/elements/${u.element.id}/evaluation`}function d(u,m,f){return`${u} ${u===1?m:f}`}return En(l),(u,m)=>t.value?(w(),K("p",$0,"Carregando…")):a.value&&r.value?(w(),K(Ce,{key:1},[G(ee(Pe),{class:"back-link",to:`/projects/${e.projectId}`},{default:_e(()=>[G(ee(Ra),{size:18,"aria-hidden":"true"}),g("span",M0,ce(a.value.name),1)]),_:1},8,["to"]),G(eo,{title:"Status do projeto",description:`${a.value.name} · ${d(r.value.environments.length,"ambiente","ambientes")}`},null,8,["description"]),s.value?(w(),K("p",F0,ce(s.value),1)):ve("",!0),r.value.summary.totalElements?(w(),je(li,{key:1,summary:r.value.summary,scope:"projeto"},null,8,["summary"])):ve("",!0),r.value.environments.length?(w(),K("section",z0,[(w(!0),K(Ce,null,un(r.value.environments,f=>(w(),K("article",{key:f.environment.id,class:"card project-status__environment"},[g("header",H0,[g("div",null,[g("h2",null,ce(f.environment.name),1),g("p",null,ce(d(f.elements.length,"elemento","elementos")),1)]),G(Uo,{status:f.summary.overallStatus},null,8,["status"])]),f.elements.length?(w(),K("div",{key:0,class:"project-status__counts","aria-label":`Situação dos elementos de ${f.environment.name}`},[g("span",K0,ce(f.summary.conforme)+" conforme"+ce(f.summary.conforme===1?"":"s"),1),g("span",G0,ce(f.summary.nao_conforme)+" não conforme"+ce(f.summary.nao_conforme===1?"":"s"),1),g("span",W0,ce(f.summary.nao_avaliado)+" pendente"+ce(f.summary.nao_avaliado===1?"":"s"),1)],8,U0)):ve("",!0),f.elements.length?(w(),K("ul",Y0,[(w(!0),K(Ce,null,un(f.elements,v=>(w(),K("li",{key:v.element.id},[G(ee(Pe),{class:"project-status__element",to:c(v)},{default:_e(()=>[g("span",J0,ce(v.element.name),1),G(Uo,{status:v.status},null,8,["status"]),G(ee(Ta),{size:18,class:"chevron","aria-hidden":"true"})]),_:2},1032,["to"])]))),128))])):(w(),K("p",Q0,"Nenhum elemento cadastrado neste ambiente.")),G(ee(Pe),{class:"text-button",to:`/projects/${e.projectId}/environments/${f.environment.id}`},{default:_e(()=>[...m[0]||(m[0]=[Se(" Abrir ambiente ",-1)])]),_:1},8,["to"])]))),128))])):(w(),je(An,{key:3,class:"collection-empty",title:"Nenhum ambiente cadastrado",text:"Crie um ambiente e cadastre elementos para acompanhar o status do projeto."},{default:_e(()=>[G(ee(Pe),{class:"button",to:`/projects/${e.projectId}`},{default:_e(()=>[...m[1]||(m[1]=[Se("Abrir projeto",-1)])]),_:1},8,["to"])]),_:1}))],64)):a.value?(w(),je(An,{key:2,title:"Não foi possível carregar o status",text:s.value||"Tente novamente mais tarde."},{default:_e(()=>[G(ee(Pe),{class:"button",to:`/projects/${e.projectId}`},{default:_e(()=>[...m[2]||(m[2]=[Se("Abrir projeto",-1)])]),_:1},8,["to"])]),_:1},8,["text"])):(w(),je(An,{key:3,title:"Projeto não encontrado",text:"Ele pode ter sido removido."},{default:_e(()=>[G(ee(Pe),{class:"button",to:"/projects"},{default:_e(()=>[...m[3]||(m[3]=[Se("Projetos",-1)])]),_:1})]),_:1}))}},Z0={class:"collection-form__heading"},eg={class:"fields-grid"},ng={class:"field"},og={class:"field"},ag={key:0,class:"muted"},rg={key:1,class:"card-list collection-list"},tg={class:"card__icon"},ig={key:0},sg={class:"card__menu"},lg=["onClick"],cg=["onClick"],ug={__name:"ProjectsPage",setup(e){const n=Ue("services"),o=Ue("confirmPopup"),a=Te([]),r=Te(""),t=Te(""),s=Te(null),l=Te(""),c=Te(!1),d=Te(null),u=Te(null);function m(){return yn(()=>{d.value?.focus(),d.value?.select()})}function f(){const H=u.value;u.value=null,yn(()=>{H?.isConnected&&H.focus()})}function v(){c.value=!0}async function B(){a.value=await n.projectService.listProjects()}async function x(H){u.value=H?.currentTarget??null,s.value={},r.value="",t.value="",l.value="",await m()}async function R(H,E){u.value=E?.currentTarget??null,s.value=H,r.value=H.name,l.value="",t.value=H.description||"",await m()}function z(){s.value=null,r.value="",t.value="",l.value="",f()}async function P(){try{l.value="",s.value?.id?await n.projectService.updateProject(s.value.id,{name:r.value,description:t.value}):await n.projectService.createProject({name:r.value,description:t.value}),r.value="",t.value="",s.value=null,await B(),f()}catch(H){l.value=H.message}}function J(H,E){o.confirm(E,`Excluir o projeto “${H.name}” e seus dados?`,()=>q(H))}async function q(H){await n.projectService.deleteProject(H.id),await B()}function ne(H){return new Intl.DateTimeFormat("pt-BR",{dateStyle:"medium"}).format(new Date(H))}return En(B),(H,E)=>(w(),K(Ce,null,[G(eo,{title:"Projetos",description:"Acompanhe seus locais e avaliações.",helpButton:"",onHelp:v},{action:_e(()=>[a.value.length?(w(),K("button",{key:0,class:"button",onClick:E[0]||(E[0]=k=>x(k))},[G(ee(tr),{size:18,"aria-hidden":"true"}),E[5]||(E[5]=Se("Novo projeto",-1))])):ve("",!0)]),_:1}),s.value?(w(),K("form",{key:0,class:"form-card collection-form",onSubmit:vo(P,["prevent"]),onKeydown:ei(z,["esc"])},[g("div",Z0,[g("h2",null,ce(s.value.id?"Dados do projeto":"Novo projeto"),1),E[6]||(E[6]=g("p",null,"Defina um nome e, se quiser, uma breve descrição para este local.",-1))]),g("div",eg,[g("label",ng,[E[7]||(E[7]=g("span",null,"Nome do projeto",-1)),Pn(g("input",{ref_key:"nameInput",ref:d,"onUpdate:modelValue":E[1]||(E[1]=k=>r.value=k),required:""},null,512),[[or,r.value]])]),g("label",og,[E[8]||(E[8]=g("span",null,[Se("Descrição "),g("small",null,"(opcional)")],-1)),Pn(g("input",{"onUpdate:modelValue":E[2]||(E[2]=k=>t.value=k)},null,512),[[or,t.value]])])]),l.value?(w(),K("p",ag,ce(l.value),1)):ve("",!0),g("div",{class:"form-actions"},[g("button",{class:"button button--ghost",type:"button",onClick:z}," Cancelar "),E[9]||(E[9]=g("button",{class:"button",type:"submit"},"Salvar",-1))])],32)):ve("",!0),a.value.length?(w(),K("div",rg,[(w(!0),K(Ce,null,un(a.value,k=>(w(),K("article",{key:k.id,class:"card project-card"},[G(ee(Pe),{class:"card__link",to:`/projects/${k.id}`},{default:_e(()=>[g("span",tg,[G(ee(Gc),{size:22,"aria-hidden":"true"})]),g("div",null,[g("h2",null,ce(k.name),1),g("p",null,"Atualizado em "+ce(ne(k.updatedAt)),1),k.description?(w(),K("p",ig,ce(k.description),1)):ve("",!0)]),G(ee(Ta),{size:20,class:"chevron","aria-hidden":"true"})]),_:2},1032,["to"]),g("div",sg,[g("button",{class:"text-button",onClick:C=>R(k,C)}," Editar ",8,lg),g("button",{class:"icon-button icon-button--danger",title:"Excluir","aria-label":"Excluir",onClick:C=>J(k,C)},[G(ee(Ho),{size:18,"aria-hidden":"true"})],8,cg)])]))),128))])):s.value?ve("",!0):(w(),je(An,{key:2,class:"collection-empty",title:"Comece por um projeto",text:"Organize as avaliações de acessibilidade por obra ou local."},{default:_e(()=>[g("button",{class:"button",onClick:E[3]||(E[3]=k=>x(k))},[G(ee(tr),{size:18,"aria-hidden":"true"}),E[10]||(E[10]=Se("Novo projeto",-1))])]),_:1})),c.value?(w(),je(Wc,{key:3,onClose:E[4]||(E[4]=k=>c.value=!1)})):ve("",!0)],64))}};function dg(e=""){const n=e.replace(/^(\.\.\/|\.\/|\/)+/,"").split("/");return n.length>1?n.slice(0,-1).join("/"):""}function mg(e,n){const[o]=e,a=o?.norma;return a?.nome?`${a.nome}${a.versao?` · ${a.versao}`:""}`:n.split("/").at(-1)?.replaceAll("-"," ")??"Regras padrão"}function pg(e){const n=new Map;for(const o of e){const a=dg(o.path)||o.ruleSet.id,r=n.get(a)??{id:a,source:"standard",ruleSets:[]};r.ruleSets.push(o.ruleSet),n.set(a,r)}return[...n.values()].map(o=>({...o,nome:mg(o.ruleSets,o.id)})).sort((o,a)=>o.nome.localeCompare(a.nome))}function fg(e){const n=new Map;for(const o of e){const a=o.grupo,r=a?.id??o.id,t=n.get(r)??{id:r,nome:a?.nome??o.nome,source:"user",ruleSets:[]};t.ruleSets.push(o),n.set(r,t)}return[...n.values()].sort((o,a)=>o.nome.localeCompare(a.nome))}const hg={class:"documentation"},vg={class:"documentation__intro"},gg={class:"documentation__icon"},bg=["href"],_g={class:"documentation__section"},yg={key:0,class:"muted",role:"status"},Ag={key:0,class:"alert alert--error",role:"alert"},Ng={class:"rules-section rules-section--first"},xg={class:"card-list ruleset-list"},Bg={key:0,class:"ruleset-card__actions"},Tg=["onClick"],Rg=["onClick"],Sg=["onClick"],wg={class:"rules-actions"},Eg={class:"button import-button"},Cg=["disabled"],kg={class:"button button--outline import-button"},Ig=["disabled"],Pg={key:0,class:"muted",role:"status"},Og={key:1,class:"alert alert--error",role:"alert"},jg={key:2,class:"muted",role:"status"},Vg={key:3,class:"rules-library"},Dg={class:"rules-section rules-section--first rules-library__section"},Lg={class:"card-list rules-library__list"},qg={class:"card__icon"},$g={class:"rules-section rules-library__section"},Mg={key:0,class:"card-list rules-library__list"},Fg={class:"card__icon"},ft={__name:"RulesPage",props:{source:String,groupId:String,documentation:Boolean},setup(e){const n=e,o=Ue("services"),a=Ue("builtInRuleSets");Br();const r=Ue("confirmPopup"),t=Fe(()=>"/Extensao-26.2/rule-engine-skill/SKILL.md"),s=Te([]),l=Te(!0),c=Te(!1),d=Te(""),u=Fe(()=>s.value.filter(H=>H.source==="standard")),m=Fe(()=>s.value.filter(H=>H.source==="user")),f=Fe(()=>s.value.find(H=>H.source===n.source&&H.id===n.groupId));function v(H){return H.regras?.length??0}function B(H){return Object.keys(H.parametros??{}).length}function x(H){return H.ruleSets.reduce((E,k)=>E+v(k),0)}async function R(){l.value=!0;try{const H=await o.ruleSetService.list();s.value=[...pg(a),...fg(H)]}finally{l.value=!1}}function z(H){return`/rules/${encodeURIComponent(H.source)}/${encodeURIComponent(H.id)}`}async function P(H){const E=[...H.target.files??[]];if(!E.length)return;const k=E.filter(Ae=>/\.(json|ya?ml)$/i.test(Ae.name)),C=E.length-k.length;if(!k.length){d.value="Nenhum arquivo .json, .yaml ou .yml encontrado.",H.target.value="";return}d.value="",c.value=!0;const le=k[0].webkitRelativePath?.split("/")[0],fe={id:`importado-${le||crypto.randomUUID()}`,nome:le||(k.length===1?k[0].name.replace(/\.(json|ya?ml)$/i,""):"Regras importadas")},ae=[];for(const Ae of k)try{const se=await Ae.text();/\.json$/i.test(Ae.name)?await o.ruleSetService.importFromJson(se,fe):await o.ruleSetService.importFromYaml(se,fe)}catch(se){ae.push(`${Ae.name}: ${se.message}`)}const Re=[];ae.length&&Re.push(k.length===1?ae[0]:`${ae.length} de ${k.length} arquivo(s) não importado(s) — ${ae.join("; ")}`),C&&Re.push(`${C} arquivo(s) ignorado(s) por não serem .json/.yaml/.yml.`),d.value=Re.join(" "),await R(),H.target.value="",c.value=!1}function J(H,E){r.confirm(E,`Excluir "${H.nome}"? Esta ação não pode ser desfeita.`,()=>q(H))}async function q(H){d.value="";try{await o.ruleSetService.delete(H.id),await R()}catch(E){d.value=E.message}}async function ne(H,E){try{const k=E==="json"?await o.ruleSetService.exportByIdToJson(H.id):await o.ruleSetService.exportByIdToYaml(H.id),C=E==="json"?"application/json":"text/yaml",le=document.createElement("a");le.href=URL.createObjectURL(new Blob([k],{type:C})),le.download=`${H.id}.${E}`,le.click(),URL.revokeObjectURL(le.href)}catch(k){d.value=k.message}}return En(R),(H,E)=>e.documentation?(w(),K(Ce,{key:0},[G(eo,{title:"Crie e importe regras",description:"Monte checklists em YAML para avaliar os elementos do seu projeto."}),g("div",hg,[E[5]||(E[5]=Pd(`<section class="documentation__section"><h2>Formato mínimo de um checklist</h2><p>Cada arquivo é um checklist independente. Os campos obrigatórios são <code>id</code>, <code>nome</code>, <code>parametros</code> (objeto) e <code>regras</code> (lista). YAML e JSON são aceitos.</p><pre class="documentation-code"><code>id: bebedouros
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
      mensagem: Avaliar como rampa.</code></pre><p class="documentation__note"> As condições precisam cobrir todos os valores do parâmetro: para números, um ramo final com <code>&gt;</code> ou <code>&gt;=</code>; para booleanos e seleções, um ramo para cada opção. Valor informado que nenhuma condição alcança vira <code>erro</code>, e a importação recusa o conjunto sem essa cobertura. Um parâmetro usado dentro de <code>verificar</code> (aqui, <code>possui_chanfro</code>) também precisa estar declarado em <code>parametros</code>. </p></details></section><section class="documentation__section"><h2>Resultados possíveis</h2><ul class="documentation__list"><li><code>conforme</code> / <code>nao_conforme</code> — comparação direta, ou condição explícita.</li><li><code>manual</code> — regra do tipo <code>checklist</code>.</li><li><code>atencao</code> — resultado explícito opcional numa condição de <code>conditional</code>.</li><li><code>nao_avaliado</code> — parâmetro opcional sem valor preenchido.</li><li><code>invalido</code> — parâmetro obrigatório sem valor preenchido.</li><li><code>erro</code> — regra apontando para parâmetro inexistente, ou valor informado que nenhuma condição cobre.</li></ul></section>`,4)),g("section",vg,[g("span",gg,[G(ee(ti),{size:24,"aria-hidden":"true"})]),g("div",null,[E[0]||(E[0]=g("h1",null,"Crie suas regras com IA",-1)),g("a",{class:"button button--outline",href:`${t.value}`,download:"SKILL.md"}," Baixar SKILL.md ",8,bg),E[1]||(E[1]=g("p",null,"Um arquivo de texto com instruções prontas para uma IA (Claude, ChatGPT, Cursor) gerar checklists neste formato a partir do que você descrever. Baixe, cole numa conversa com a IA e peça a regra que precisa — sem aprender YAML.",-1))])]),g("section",_g,[E[3]||(E[3]=g("h2",null,"Importação",-1)),E[4]||(E[4]=g("p",null,[Se("Escolha um ou mais arquivos YAML/JSON, ou uma pasta com vários checklists — arquivos que não forem "),g("code",null,".yaml"),Se(", "),g("code",null,".yml"),Se(" ou "),g("code",null,".json"),Se(" são ignorados automaticamente. Tudo fica armazenado somente neste navegador.")],-1)),G(ee(Pe),{class:"button",to:"/rules"},{default:_e(()=>[...E[2]||(E[2]=[Se("Ir para importação",-1)])]),_:1})])])],64)):e.groupId?(w(),K(Ce,{key:1},[l.value?(w(),K("p",yg,"Carregando…")):f.value?(w(),K(Ce,{key:1},[G(eo,{title:f.value.nome,description:`${f.value.ruleSets.length} checklists que compõem este conjunto.`},null,8,["title","description"]),d.value?(w(),K("p",Ag,ce(d.value),1)):ve("",!0),g("section",Ng,[E[6]||(E[6]=g("h2",null,"Checklists",-1)),g("div",xg,[(w(!0),K(Ce,null,un(f.value.ruleSets,k=>(w(),K("article",{key:k.id,class:"card ruleset-card"},[g("div",null,[g("h2",null,ce(k.nome),1),g("p",null,ce(k.norma?.nome??"Conjunto personalizado"),1),g("small",null,ce(v(k))+" regras · "+ce(B(k))+" campos",1)]),e.source==="user"?(w(),K("div",Bg,[g("button",{class:"button button--outline",onClick:C=>ne(k,"yaml")},"Exportar YAML",8,Tg),g("button",{class:"button button--outline",onClick:C=>ne(k,"json")},"Exportar JSON",8,Rg),g("button",{class:"icon-button icon-button--danger",title:"Excluir","aria-label":"Excluir",onClick:C=>J(k,C)},[G(ee(Ho),{size:18,"aria-hidden":"true"})],8,Sg)])):ve("",!0)]))),128))])])],64)):(w(),je(An,{key:2,title:"Conjunto não encontrado",text:"Ele pode ter sido removido."}))],64)):(w(),K(Ce,{key:2},[G(eo,{class:"rules-page-header",title:"Conjuntos de regras",description:"Cada pasta ou importação é exibida como um único conjunto."},{action:_e(()=>[g("div",wg,[g("label",Eg,[E[7]||(E[7]=Se(" Importar arquivos ",-1)),g("input",{type:"file",accept:".json,.yaml,.yml",multiple:"",disabled:c.value,onChange:P},null,40,Cg)]),g("label",kg,[E[8]||(E[8]=Se(" Importar pasta ",-1)),g("input",{type:"file",accept:".json,.yaml,.yml",webkitdirectory:"",disabled:c.value,onChange:P},null,40,Ig)]),G(ee(Pe),{class:"rules-help-link",to:"/rules/documentation"},{default:_e(()=>[...E[9]||(E[9]=[Se("Como criar regras",-1)])]),_:1})])]),_:1}),c.value?(w(),K("p",Pg,"Importando…")):ve("",!0),d.value?(w(),K("p",Og,ce(d.value),1)):ve("",!0),l.value?(w(),K("p",jg,"Carregando…")):(w(),K("div",Vg,[g("section",Dg,[E[10]||(E[10]=g("h2",null,"Regras padrão",-1)),g("div",Lg,[(w(!0),K(Ce,null,un(u.value,k=>(w(),je(ee(Pe),{key:k.id,class:"card card--interactive rules-card",to:z(k)},{default:_e(()=>[g("span",qg,[G(ee(po),{size:22,"aria-hidden":"true"})]),g("div",null,[g("h2",null,ce(k.nome),1),g("p",null,ce(k.ruleSets.length)+" checklists · "+ce(x(k))+" regras",1)]),G(ee(Ta),{size:20,class:"chevron","aria-hidden":"true"})]),_:2},1032,["to"]))),128))])]),g("section",$g,[E[11]||(E[11]=g("h2",null,"Suas regras",-1)),m.value.length?(w(),K("div",Mg,[(w(!0),K(Ce,null,un(m.value,k=>(w(),je(ee(Pe),{key:k.id,class:"card card--interactive rules-card",to:z(k)},{default:_e(()=>[g("span",Fg,[G(ee(po),{size:22,"aria-hidden":"true"})]),g("div",null,[g("h2",null,ce(k.nome),1),g("p",null,ce(k.ruleSets.length)+" checklists",1)]),G(ee(Ta),{size:20,class:"chevron","aria-hidden":"true"})]),_:2},1032,["to"]))),128))])):(w(),je(An,{key:1,title:"Nenhum conjunto importado",text:"Importe arquivos ou uma pasta para começar."}))])]))],64))}},zg=[{path:"/",redirect:"/projects"},{path:"/projects",name:"projects",component:ug},{path:"/projects/:projectId",name:"project-detail",component:q0,props:!0},{path:"/projects/:projectId/status",name:"project-status",component:X0,props:!0},{path:"/projects/:projectId/environments/:environmentId",name:"project-environment",component:h0,props:!0},{path:"/elements/new",name:"element-new",component:pt,meta:{hideBottomNav:!0}},{path:"/elements/:elementId",name:"element-detail",component:pt,props:!0},{path:"/elements/:elementId/evaluation",name:"element-evaluation",component:Xs,props:!0},{path:"/quick-evaluation",name:"quick-evaluation",component:pt,props:{quick:!0}},{path:"/quick-evaluation/result",name:"quick-evaluation-result",component:Xs,props:{quick:!0}},{path:"/rules",name:"rules",component:ft},{path:"/rules/documentation",name:"rules-documentation",component:ft,props:{documentation:!0}},{path:"/rules/:source/:groupId",name:"rules-group",component:ft,props:!0},{path:"/:pathMatch(.*)*",redirect:"/projects"}],Yc=oh({history:Vf("/Extensao-26.2/"),routes:zg}),Hg={__name:"App",setup(e){const n=Te(null),o=Te(!1),a=ri();return la("confirmPopup",{open:r=>n.value?.open(r),confirm:(r,t,s)=>n.value?.confirm(r,t,s)}),En(async()=>{await Yc.isReady();const r=window.matchMedia?.("(display-mode: standalone)")?.matches||navigator.standalone===!0,t=localStorage.getItem("welcomePopupSeen");a.path==="/projects"&&!r&&!t&&(localStorage.setItem("welcomePopupSeen","true"),o.value=!0)}),(r,t)=>(w(),K(Ce,null,[G(Ch,null,{default:_e(()=>[G(ee(Kc))]),_:1}),G(Oh,{ref_key:"confirmPopup",ref:n},null,512),o.value?(w(),je(Wc,{key:0,onClose:t[0]||(t[0]=s=>o.value=!1)})):ve("",!0)],64))}};async function Ug(){const[e,n]=await Promise.all([dp(),Qp()]);Bm(Hg).provide("services",e).provide("builtInRuleSets",n).use(Yc).mount("#app"),Cm({immediate:!0})}Ug().catch(e=>{document.querySelector("#app").innerHTML=`<main class="fatal-error"><h1>Não foi possível abrir o aplicativo</h1><p>${e.message}</p></main>`});
