(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))a(r);new MutationObserver(r=>{for(const t of r)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function o(r){const t={};return r.integrity&&(t.integrity=r.integrity),r.referrerPolicy&&(t.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?t.credentials="include":r.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(r){if(r.ep)return;r.ep=!0;const t=o(r);fetch(r.href,t)}})();function qt(e){const n=Object.create(null);for(const o of e.split(","))n[o]=1;return o=>o in n}const Me={},Oo=[],Hn=()=>{},ol=()=>!1,lr=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),cr=e=>e.startsWith("onUpdate:"),Xe=Object.assign,$t=(e,n)=>{const o=e.indexOf(n);o>-1&&e.splice(o,1)},tu=Object.prototype.hasOwnProperty,Ve=(e,n)=>tu.call(e,n),Ne=Array.isArray,jo=e=>Ta(e)==="[object Map]",Uo=e=>Ta(e)==="[object Set]",mi=e=>Ta(e)==="[object Date]",Se=e=>typeof e=="function",ze=e=>typeof e=="string",jn=e=>typeof e=="symbol",Le=e=>e!==null&&typeof e=="object",al=e=>(Le(e)||Se(e))&&Se(e.then)&&Se(e.catch),rl=Object.prototype.toString,Ta=e=>rl.call(e),iu=e=>Ta(e).slice(8,-1),tl=e=>Ta(e)==="[object Object]",Mt=e=>ze(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,ta=qt(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),ur=e=>{const n=Object.create(null);return(o=>n[o]||(n[o]=e(o)))},su=/-\w/g,hn=ur(e=>e.replace(su,n=>n.slice(1).toUpperCase())),lu=/\B([A-Z])/g,go=ur(e=>e.replace(lu,"-$1").toLowerCase()),dr=ur(e=>e.charAt(0).toUpperCase()+e.slice(1)),Fa=ur(e=>e?`on${dr(e)}`:""),Fn=(e,n)=>!Object.is(e,n),za=(e,...n)=>{for(let o=0;o<e.length;o++)e[o](...n)},il=(e,n,o,a=!1)=>{Object.defineProperty(e,n,{configurable:!0,enumerable:!1,writable:a,value:o})},mr=e=>{const n=parseFloat(e);return isNaN(n)?e:n},cu=e=>{const n=ze(e)?Number(e):NaN;return isNaN(n)?e:n};let pi;const pr=()=>pi||(pi=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function fr(e){if(Ne(e)){const n={};for(let o=0;o<e.length;o++){const a=e[o],r=ze(a)?pu(a):fr(a);if(r)for(const t in r)n[t]=r[t]}return n}else if(ze(e)||Le(e))return e}const uu=/;(?![^(]*\))/g,du=/:([^]+)/,mu=/\/\*[^]*?\*\//g;function pu(e){const n={};return e.replace(mu,"").split(uu).forEach(o=>{if(o){const a=o.split(du);a.length>1&&(n[a[0].trim()]=a[1].trim())}}),n}function an(e){let n="";if(ze(e))n=e;else if(Ne(e))for(let o=0;o<e.length;o++){const a=an(e[o]);a&&(n+=a+" ")}else if(Le(e))for(const o in e)e[o]&&(n+=o+" ");return n.trim()}function In(e){if(!e)return null;let{class:n,style:o}=e;return n&&!ze(n)&&(e.class=an(n)),o&&(e.style=fr(o)),e}const fu="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",hu=qt(fu);function sl(e){return!!e||e===""}function vu(e,n){if(e.length!==n.length)return!1;let o=!0;for(let a=0;o&&a<e.length;a++)o=Ko(e[a],n[a]);return o}function Ko(e,n){if(e===n)return!0;let o=mi(e),a=mi(n);if(o||a)return o&&a?e.getTime()===n.getTime():!1;if(o=jn(e),a=jn(n),o||a)return e===n;if(o=Ne(e),a=Ne(n),o||a)return o&&a?vu(e,n):!1;if(o=Le(e),a=Le(n),o||a){if(!o||!a)return!1;const r=Object.keys(e).length,t=Object.keys(n).length;if(r!==t)return!1;for(const s in e){const l=e.hasOwnProperty(s),c=n.hasOwnProperty(s);if(l&&!c||!l&&c||!Ko(e[s],n[s]))return!1}}return String(e)===String(n)}function Ft(e,n){return e.findIndex(o=>Ko(o,n))}const ll=e=>!!(e&&e.__v_isRef===!0),ie=e=>ze(e)?e:e==null?"":Ne(e)||Le(e)&&(e.toString===rl||!Se(e.toString))?ll(e)?ie(e.value):JSON.stringify(e,cl,2):String(e),cl=(e,n)=>ll(n)?cl(e,n.value):jo(n)?{[`Map(${n.size})`]:[...n.entries()].reduce((o,[a,r],t)=>(o[Er(a,t)+" =>"]=r,o),{})}:Uo(n)?{[`Set(${n.size})`]:[...n.values()].map(o=>Er(o))}:jn(n)?Er(n):Le(n)&&!Ne(n)&&!tl(n)?String(n):n,Er=(e,n="")=>{var o;return jn(e)?`Symbol(${(o=e.description)!=null?o:n})`:e};let en;class gu{constructor(n=!1){this.detached=n,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this._warnOnRun=!0,this.__v_skip=!0,!n&&en&&(en.active?(this.parent=en,this.index=(en.scopes||(en.scopes=[])).push(this)-1):(this._active=!1,this._warnOnRun=!1))}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let n,o;if(this.scopes){const a=this.scopes.slice();for(n=0,o=a.length;n<o;n++)a[n].pause()}for(n=0,o=this.effects.length;n<o;n++)this.effects[n].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let n,o;if(this.scopes){const r=this.scopes.slice();for(n=0,o=r.length;n<o;n++)r[n].resume()}const a=this.effects.slice();for(n=0,o=a.length;n<o;n++)a[n].resume()}}run(n){if(this._active){const o=en;try{return en=this,n()}finally{en=o}}}on(){++this._on===1&&(this.prevScope=en,en=this)}off(){if(this._on>0&&--this._on===0){if(en===this)en=this.prevScope;else{let n=en;for(;n;){if(n.prevScope===this){n.prevScope=this.prevScope;break}n=n.prevScope}}this.prevScope=void 0}}stop(n){if(this._active){this._active=!1;let o,a;for(o=0,a=this.effects.length;o<a;o++)this.effects[o].stop();for(this.effects.length=0,o=0,a=this.cleanups.length;o<a;o++)this.cleanups[o]();if(this.cleanups.length=0,this.scopes){const r=this.scopes.slice();for(o=0,a=r.length;o<a;o++)r[o].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!n){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0}}}function bu(){return en}let Fe;const wr=new WeakSet;class ul{constructor(n){this.fn=n,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,en&&(en.active?en.effects.push(this):this.flags&=-2)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,wr.has(this)&&(wr.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||ml(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,fi(this),pl(this);const n=Fe,o=On;Fe=this,On=!0;try{return this.fn()}finally{fl(this),Fe=n,On=o,this.flags&=-3}}stop(){if(this.flags&1){for(let n=this.deps;n;n=n.nextDep)Ut(n);this.deps=this.depsTail=void 0,fi(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?wr.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){gt(this)&&this.run()}get dirty(){return gt(this)}}let dl=0,ia,sa;function ml(e,n=!1){if(e.flags|=8,n){e.next=sa,sa=e;return}e.next=ia,ia=e}function zt(){dl++}function Ht(){if(--dl>0)return;if(sa){let n=sa;for(sa=void 0;n;){const o=n.next;n.next=void 0,n.flags&=-9,n=o}}let e;for(;ia;){let n=ia;for(ia=void 0;n;){const o=n.next;if(n.next=void 0,n.flags&=-9,n.flags&1)try{n.trigger()}catch(a){e||(e=a)}n=o}}if(e)throw e}function pl(e){for(let n=e.deps;n;n=n.nextDep)n.version=-1,n.prevActiveLink=n.dep.activeLink,n.dep.activeLink=n}function fl(e){let n,o=e.depsTail,a=o;for(;a;){const r=a.prevDep;a.version===-1?(a===o&&(o=r),Ut(a),_u(a)):n=a,a.dep.activeLink=a.prevActiveLink,a.prevActiveLink=void 0,a=r}e.deps=n,e.depsTail=o}function gt(e){for(let n=e.deps;n;n=n.nextDep)if(n.dep.version!==n.version||n.dep.computed&&(hl(n.dep.computed)||n.dep.version!==n.version))return!0;return!!e._dirty}function hl(e){if(e.flags&4&&!(e.flags&16)||(e.flags&=-17,e.globalVersion===pa)||(e.globalVersion=pa,!e.isSSR&&e.flags&128&&(!e.deps&&!e._dirty||!gt(e))))return;e.flags|=2;const n=e.dep,o=Fe,a=On;Fe=e,On=!0;try{pl(e);const r=e.fn(e._value);(n.version===0||Fn(r,e._value))&&(e.flags|=128,e._value=r,n.version++)}catch(r){throw n.version++,r}finally{Fe=o,On=a,fl(e),e.flags&=-3}}function Ut(e,n=!1){const{dep:o,prevSub:a,nextSub:r}=e;if(a&&(a.nextSub=r,e.prevSub=void 0),r&&(r.prevSub=a,e.nextSub=void 0),o.subs===e&&(o.subs=a,!a&&o.computed)){o.computed.flags&=-5;for(let t=o.computed.deps;t;t=t.nextDep)Ut(t,!0)}!n&&!--o.sc&&o.map&&o.map.delete(o.key)}function _u(e){const{prevDep:n,nextDep:o}=e;n&&(n.nextDep=o,e.prevDep=void 0),o&&(o.prevDep=n,e.nextDep=void 0)}let On=!0;const vl=[];function eo(){vl.push(On),On=!1}function no(){const e=vl.pop();On=e===void 0?!0:e}function fi(e){const{cleanup:n}=e;if(e.cleanup=void 0,n){const o=Fe;Fe=void 0;try{n()}finally{Fe=o}}}let pa=0;class yu{constructor(n,o){this.sub=n,this.dep=o,this.version=o.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Kt{constructor(n){this.computed=n,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(n){if(!Fe||!On||Fe===this.computed)return;let o=this.activeLink;if(o===void 0||o.sub!==Fe)o=this.activeLink=new yu(Fe,this),Fe.deps?(o.prevDep=Fe.depsTail,Fe.depsTail.nextDep=o,Fe.depsTail=o):Fe.deps=Fe.depsTail=o,gl(o);else if(o.version===-1&&(o.version=this.version,o.nextDep)){const a=o.nextDep;a.prevDep=o.prevDep,o.prevDep&&(o.prevDep.nextDep=a),o.prevDep=Fe.depsTail,o.nextDep=void 0,Fe.depsTail.nextDep=o,Fe.depsTail=o,Fe.deps===o&&(Fe.deps=a)}return o}trigger(n){this.version++,pa++,this.notify(n)}notify(n){zt();try{for(let o=this.subs;o;o=o.prevSub)o.sub.notify()&&o.sub.dep.notify()}finally{Ht()}}}function gl(e){if(e.dep.sc++,e.sub.flags&4){const n=e.dep.computed;if(n&&!e.dep.subs){n.flags|=20;for(let a=n.deps;a;a=a.nextDep)gl(a)}const o=e.dep.subs;o!==e&&(e.prevSub=o,o&&(o.nextSub=e)),e.dep.subs=e}}const bt=new WeakMap,So=Symbol(""),_t=Symbol(""),fa=Symbol("");function rn(e,n,o){if(On&&Fe){let a=bt.get(e);a||bt.set(e,a=new Map);let r=a.get(o);r||(a.set(o,r=new Kt),r.map=a,r.key=o),r.track()}}function Qn(e,n,o,a,r,t){const s=bt.get(e);if(!s){pa++;return}const l=c=>{c&&c.trigger()};if(zt(),n==="clear")s.forEach(l);else{const c=Ne(e),d=c&&Mt(o);if(c&&o==="length"){const u=Number(a);s.forEach((m,f)=>{(f==="length"||f===fa||!jn(f)&&f>=u)&&l(m)})}else switch((o!==void 0||s.has(void 0))&&l(s.get(o)),d&&l(s.get(fa)),n){case"add":c?d&&l(s.get("length")):(l(s.get(So)),jo(e)&&l(s.get(_t)));break;case"delete":c||(l(s.get(So)),jo(e)&&l(s.get(_t)));break;case"set":jo(e)&&l(s.get(So));break}}Ht()}function wo(e){const n=je(e);return n===e?n:(rn(n,"iterate",fa),En(e)?n:n.map(Dn))}function hr(e){return rn(e=je(e),"iterate",fa),e}function $n(e,n){return oo(e)?qo(Eo(e)?Dn(n):n):Dn(n)}const Au={__proto__:null,[Symbol.iterator](){return Cr(this,Symbol.iterator,e=>$n(this,e))},concat(...e){return wo(this).concat(...e.map(n=>Ne(n)?wo(n):n))},entries(){return Cr(this,"entries",e=>(e[1]=$n(this,e[1]),e))},every(e,n){return Kn(this,"every",e,n,void 0,arguments)},filter(e,n){return Kn(this,"filter",e,n,o=>o.map(a=>$n(this,a)),arguments)},find(e,n){return Kn(this,"find",e,n,o=>$n(this,o),arguments)},findIndex(e,n){return Kn(this,"findIndex",e,n,void 0,arguments)},findLast(e,n){return Kn(this,"findLast",e,n,o=>$n(this,o),arguments)},findLastIndex(e,n){return Kn(this,"findLastIndex",e,n,void 0,arguments)},forEach(e,n){return Kn(this,"forEach",e,n,void 0,arguments)},includes(...e){return Ir(this,"includes",e)},indexOf(...e){return Ir(this,"indexOf",e)},join(e){return wo(this).join(e)},lastIndexOf(...e){return Ir(this,"lastIndexOf",e)},map(e,n){return Kn(this,"map",e,n,void 0,arguments)},pop(){return Jo(this,"pop")},push(...e){return Jo(this,"push",e)},reduce(e,...n){return hi(this,"reduce",e,n)},reduceRight(e,...n){return hi(this,"reduceRight",e,n)},shift(){return Jo(this,"shift")},some(e,n){return Kn(this,"some",e,n,void 0,arguments)},splice(...e){return Jo(this,"splice",e)},toReversed(){return wo(this).toReversed()},toSorted(e){return wo(this).toSorted(e)},toSpliced(...e){return wo(this).toSpliced(...e)},unshift(...e){return Jo(this,"unshift",e)},values(){return Cr(this,"values",e=>$n(this,e))}};function Cr(e,n,o){const a=hr(e),r=a[n]();return a!==e&&!En(e)&&(r._next=r.next,r.next=()=>{const t=r._next();return t.done||(t.value=o(t.value)),t}),r}const Nu=Array.prototype;function Kn(e,n,o,a,r,t){const s=hr(e),l=s!==e&&!En(e),c=s[n];if(c!==Nu[n]){const m=c.apply(e,t);return l?Dn(m):m}let d=o;s!==e&&(l?d=function(m,f){return o.call(this,$n(e,m),f,e)}:o.length>2&&(d=function(m,f){return o.call(this,m,f,e)}));const u=c.call(s,d,a);return l&&r?r(u):u}function hi(e,n,o,a){const r=hr(e),t=r!==e&&!En(e);let s=o,l=!1;r!==e&&(t?(l=a.length===0,s=function(d,u,m){return l&&(l=!1,d=$n(e,d)),o.call(this,d,$n(e,u),m,e)}):o.length>3&&(s=function(d,u,m){return o.call(this,d,u,m,e)}));const c=r[n](s,...a);return l?$n(e,c):c}function Ir(e,n,o){const a=je(e);rn(a,"iterate",fa);const r=a[n](...o);return(r===-1||r===!1)&&Yt(o[0])?(o[0]=je(o[0]),a[n](...o)):r}function Jo(e,n,o=[]){eo(),zt();const a=je(e)[n].apply(e,o);return Ht(),no(),a}const xu=qt("__proto__,__v_isRef,__isVue"),bl=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(jn));function Bu(e){jn(e)||(e=String(e));const n=je(this);return rn(n,"has",e),n.hasOwnProperty(e)}class _l{constructor(n=!1,o=!1){this._isReadonly=n,this._isShallow=o}get(n,o,a){if(o==="__v_skip")return n.__v_skip;const r=this._isReadonly,t=this._isShallow;if(o==="__v_isReactive")return!r;if(o==="__v_isReadonly")return r;if(o==="__v_isShallow")return t;if(o==="__v_raw")return a===(r?t?Ou:xl:t?Nl:Al).get(n)||Object.getPrototypeOf(n)===Object.getPrototypeOf(a)?n:void 0;const s=Ne(n);if(!r){let c;if(s&&(c=Au[o]))return c;if(o==="hasOwnProperty")return Bu}const l=Reflect.get(n,o,ln(n)?n:a);if((jn(o)?bl.has(o):xu(o))||(r||rn(n,"get",o),t))return l;if(ln(l)){const c=s&&Mt(o)?l:l.value;return r&&Le(c)?At(c):c}return Le(l)?r?At(l):Sa(l):l}}class yl extends _l{constructor(n=!1){super(!1,n)}set(n,o,a,r){let t=n[o];const s=Ne(n)&&Mt(o);if(!this._isShallow){const d=oo(t);if(!En(a)&&!oo(a)&&(t=je(t),a=je(a)),!s&&ln(t)&&!ln(a))return d||(t.value=a),!0}const l=s?Number(o)<n.length:Ve(n,o),c=Reflect.set(n,o,a,ln(n)?n:r);return n===je(r)&&c&&(l?Fn(a,t)&&Qn(n,"set",o,a):Qn(n,"add",o,a)),c}deleteProperty(n,o){const a=Ve(n,o);n[o];const r=Reflect.deleteProperty(n,o);return r&&a&&Qn(n,"delete",o,void 0),r}has(n,o){const a=Reflect.has(n,o);return(!jn(o)||!bl.has(o))&&rn(n,"has",o),a}ownKeys(n){return rn(n,"iterate",Ne(n)?"length":So),Reflect.ownKeys(n)}}class Ru extends _l{constructor(n=!1){super(!0,n)}set(n,o){return!0}deleteProperty(n,o){return!0}}const Tu=new yl,Su=new Ru,Eu=new yl(!0);const yt=e=>e,Oa=e=>Reflect.getPrototypeOf(e);function wu(e,n,o){return function(...a){const r=this.__v_raw,t=je(r),s=jo(t),l=e==="entries"||e===Symbol.iterator&&s,c=e==="keys"&&s,d=r[e](...a),u=o?yt:n?qo:Dn;return!n&&rn(t,"iterate",c?_t:So),Xe(Object.create(d),{next(){const{value:m,done:f}=d.next();return f?{value:m,done:f}:{value:l?[u(m[0]),u(m[1])]:u(m),done:f}}})}}function ja(e){return function(...n){return e==="delete"?!1:e==="clear"?void 0:this}}function Cu(e,n){const o={get(r){const t=this.__v_raw,s=je(t),l=je(r);e||(Fn(r,l)&&rn(s,"get",r),rn(s,"get",l));const{has:c}=Oa(s),d=n?yt:e?qo:Dn;if(c.call(s,r))return d(t.get(r));if(c.call(s,l))return d(t.get(l));t!==s&&t.get(r)},get size(){const r=this.__v_raw;return!e&&rn(je(r),"iterate",So),r.size},has(r){const t=this.__v_raw,s=je(t),l=je(r);return e||(Fn(r,l)&&rn(s,"has",r),rn(s,"has",l)),r===l?t.has(r):t.has(r)||t.has(l)},forEach(r,t){const s=this,l=s.__v_raw,c=je(l),d=n?yt:e?qo:Dn;return!e&&rn(c,"iterate",So),l.forEach((u,m)=>r.call(t,d(u),d(m),s))}};return Xe(o,e?{add:ja("add"),set:ja("set"),delete:ja("delete"),clear:ja("clear")}:{add(r){const t=je(this),s=Oa(t),l=je(r),c=!n&&!En(r)&&!oo(r)?l:r;return s.has.call(t,c)||Fn(r,c)&&s.has.call(t,r)||Fn(l,c)&&s.has.call(t,l)||(t.add(c),Qn(t,"add",c,c)),this},set(r,t){!n&&!En(t)&&!oo(t)&&(t=je(t));const s=je(this),{has:l,get:c}=Oa(s);let d=l.call(s,r);d||(r=je(r),d=l.call(s,r));const u=c.call(s,r);return s.set(r,t),d?Fn(t,u)&&Qn(s,"set",r,t):Qn(s,"add",r,t),this},delete(r){const t=je(this),{has:s,get:l}=Oa(t);let c=s.call(t,r);c||(r=je(r),c=s.call(t,r)),l&&l.call(t,r);const d=t.delete(r);return c&&Qn(t,"delete",r,void 0),d},clear(){const r=je(this),t=r.size!==0,s=r.clear();return t&&Qn(r,"clear",void 0,void 0),s}}),["keys","values","entries",Symbol.iterator].forEach(r=>{o[r]=wu(r,e,n)}),o}function Gt(e,n){const o=Cu(e,n);return(a,r,t)=>r==="__v_isReactive"?!e:r==="__v_isReadonly"?e:r==="__v_raw"?a:Reflect.get(Ve(o,r)&&r in a?o:a,r,t)}const Iu={get:Gt(!1,!1)},ku={get:Gt(!1,!0)},Pu={get:Gt(!0,!1)};const Al=new WeakMap,Nl=new WeakMap,xl=new WeakMap,Ou=new WeakMap;function ju(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Sa(e){return oo(e)?e:Wt(e,!1,Tu,Iu,Al)}function Bl(e){return Wt(e,!1,Eu,ku,Nl)}function At(e){return Wt(e,!0,Su,Pu,xl)}function Wt(e,n,o,a,r){if(!Le(e)||e.__v_raw&&!(n&&e.__v_isReactive)||e.__v_skip||!Object.isExtensible(e))return e;const t=r.get(e);if(t)return t;const s=ju(iu(e));if(s===0)return e;const l=new Proxy(e,s===2?a:o);return r.set(e,l),l}function Eo(e){return oo(e)?Eo(e.__v_raw):!!(e&&e.__v_isReactive)}function oo(e){return!!(e&&e.__v_isReadonly)}function En(e){return!!(e&&e.__v_isShallow)}function Yt(e){return e?!!e.__v_raw:!1}function je(e){const n=e&&e.__v_raw;return n?je(n):e}function Du(e){return!Ve(e,"__v_skip")&&Object.isExtensible(e)&&il(e,"__v_skip",!0),e}const Dn=e=>Le(e)?Sa(e):e,qo=e=>Le(e)?At(e):e;function ln(e){return e?e.__v_isRef===!0:!1}function be(e){return Rl(e,!1)}function Vu(e){return Rl(e,!0)}function Rl(e,n){return ln(e)?e:new Lu(e,n)}class Lu{constructor(n,o){this.dep=new Kt,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=o?n:je(n),this._value=o?n:Dn(n),this.__v_isShallow=o}get value(){return this.dep.track(),this._value}set value(n){const o=this._rawValue,a=this.__v_isShallow||En(n)||oo(n);n=a?n:je(n),Fn(n,o)&&(this._rawValue=n,this._value=a?n:Dn(n),this.dep.trigger())}}function ee(e){return ln(e)?e.value:e}const qu={get:(e,n,o)=>n==="__v_raw"?e:ee(Reflect.get(e,n,o)),set:(e,n,o,a)=>{const r=e[n];return ln(r)&&!ln(o)?(r.value=o,!0):Reflect.set(e,n,o,a)}};function Tl(e){return Eo(e)?e:new Proxy(e,qu)}class $u{constructor(n,o,a){this.fn=n,this.setter=o,this._value=void 0,this.dep=new Kt(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=pa-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!o,this.isSSR=a}notify(){if(this.flags|=16,!(this.flags&8)&&Fe!==this)return ml(this,!0),!0}get value(){const n=this.dep.track();return hl(this),n&&(n.version=this.dep.version),this._value}set value(n){this.setter&&this.setter(n)}}function Mu(e,n,o=!1){let a,r;return Se(e)?a=e:(a=e.get,r=e.set),new $u(a,r,o)}const Da={},Ka=new WeakMap;let xo;function Fu(e,n=!1,o=xo){if(o){let a=Ka.get(o);a||Ka.set(o,a=[]),a.push(e)}}function zu(e,n,o=Me){const{immediate:a,deep:r,once:t,scheduler:s,augmentJob:l,call:c}=o,d=Q=>r?Q:En(Q)||r===!1||r===0?Xn(Q,1):Xn(Q);let u,m,f,h,x=!1,_=!1;if(ln(e)?(m=()=>e.value,x=En(e)):Eo(e)?(m=()=>d(e),x=!0):Ne(e)?(_=!0,x=e.some(Q=>Eo(Q)||En(Q)),m=()=>e.map(Q=>{if(ln(Q))return Q.value;if(Eo(Q))return d(Q);if(Se(Q))return c?c(Q,2):Q()})):Se(e)?n?m=c?()=>c(e,2):e:m=()=>{if(f){eo();try{f()}finally{no()}}const Q=xo;xo=u;try{return c?c(e,3,[h]):e(h)}finally{xo=Q}}:m=Hn,n&&r){const Q=m,pe=r===!0?1/0:r;m=()=>Xn(Q(),pe)}const E=bu(),I=()=>{u.stop(),E&&E.active&&$t(E.effects,u)};if(t&&n){const Q=n;n=(...pe)=>{const ue=Q(...pe);return I(),ue}}let w=_?new Array(e.length).fill(Da):Da;const J=Q=>{if(!(!(u.flags&1)||!u.dirty&&!Q))if(n){const pe=u.run();if(Q||r||x||(_?pe.some((ue,Z)=>Fn(ue,w[Z])):Fn(pe,w))){f&&f();const ue=xo;xo=u;try{const Z=[pe,w===Da?void 0:_&&w[0]===Da?[]:w,h];w=pe,c?c(n,3,Z):n(...Z)}finally{xo=ue}}}else u.run()};return l&&l(J),u=new ul(m),u.scheduler=s?()=>s(J,!1):J,h=Q=>Fu(Q,!1,u),f=u.onStop=()=>{const Q=Ka.get(u);if(Q){if(c)c(Q,4);else for(const pe of Q)pe();Ka.delete(u)}},n?a?J(!0):w=u.run():s?s(J.bind(null,!0),!0):u.run(),I.pause=u.pause.bind(u),I.resume=u.resume.bind(u),I.stop=I,I}function Xn(e,n=1/0,o){if(n<=0||!Le(e)||e.__v_skip||(o=o||new Map,(o.get(e)||0)>=n))return e;if(o.set(e,n),n--,ln(e))Xn(e.value,n,o);else if(Ne(e))for(let a=0;a<e.length;a++)Xn(e[a],n,o);else if(Uo(e)||jo(e))e.forEach(a=>{Xn(a,n,o)});else if(tl(e)){for(const a in e)Xn(e[a],n,o);for(const a of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,a)&&Xn(e[a],n,o)}return e}function Ea(e,n,o,a){try{return a?e(...a):e()}catch(r){vr(r,n,o)}}function wn(e,n,o,a){if(Se(e)){const r=Ea(e,n,o,a);return r&&al(r)&&r.catch(t=>{vr(t,n,o)}),r}if(Ne(e)){const r=[];for(let t=0;t<e.length;t++)r.push(wn(e[t],n,o,a));return r}}function vr(e,n,o,a=!0){const r=n?n.vnode:null,{errorHandler:t,throwUnhandledErrorInProduction:s}=n&&n.appContext.config||Me;if(n){let l=n.parent;const c=n.proxy,d=`https://vuejs.org/error-reference/#runtime-${o}`;for(;l;){const u=l.ec;if(u){for(let m=0;m<u.length;m++)if(u[m](e,c,d)===!1)return}l=l.parent}if(t){eo(),Ea(t,null,10,[e,c,d]),no();return}}Hu(e,o,r,a,s)}function Hu(e,n,o,a=!0,r=!1){if(r)throw e;console.error(e)}const fn=[];let qn=-1;const Do=[];let co=null,Io=0;const Sl=Promise.resolve();let Ga=null;function An(e){const n=Ga||Sl;return e?n.then(this?e.bind(this):e):n}function Uu(e){let n=qn+1,o=fn.length;for(;n<o;){const a=n+o>>>1,r=fn[a],t=ha(r);t<e||t===e&&r.flags&2?n=a+1:o=a}return n}function Jt(e){if(!(e.flags&1)){const n=ha(e),o=fn[fn.length-1];!o||!(e.flags&2)&&n>=ha(o)?fn.push(e):fn.splice(Uu(n),0,e),e.flags|=1,El()}}function El(){Ga||(Ga=Sl.then(Cl))}function Ku(e){if(!Ne(e))co&&e.id===-1?co.splice(Io+1,0,e):e.flags&1||(Do.push(e),e.flags|=1);else for(let n=0;n<e.length;n++)Do.push(e[n]);El()}function vi(e,n,o=qn+1){for(;o<fn.length;o++){const a=fn[o];if(a&&a.flags&2){if(e&&a.id!==e.uid)continue;fn.splice(o,1),o--,a.flags&4&&(a.flags&=-2),a(),a.flags&4||(a.flags&=-2)}}}function wl(e){if(Do.length){const n=[...new Set(Do)].sort((o,a)=>ha(o)-ha(a));if(Do.length=0,co){for(let o=0;o<n.length;o++)co.push(n[o]);return}for(co=n,Io=0;Io<co.length;Io++){const o=co[Io];o.flags&4&&(o.flags&=-2),o.flags&8||o(),o.flags&=-2}co=null,Io=0}}const ha=e=>e.id==null?e.flags&2?-1:1/0:e.id;function Cl(e){try{for(qn=0;qn<fn.length;qn++){const n=fn[qn];n&&!(n.flags&8)&&(n.flags&4&&(n.flags&=-2),Ea(n,n.i,n.i?15:14),n.flags&4||(n.flags&=-2))}}finally{for(;qn<fn.length;qn++){const n=fn[qn];n&&(n.flags&=-2)}qn=-1,fn.length=0,wl(),Ga=null,(fn.length||Do.length)&&Cl()}}let nn=null,Il=null;function Wa(e){const n=nn;return nn=e,Il=e&&e.type.__scopeId||null,n}function ge(e,n=nn,o){if(!n||e._n)return e;const a=(...r)=>{a._d&&Xa(-1);const t=Wa(n),s=Zn.length;let l;try{l=e(...r)}finally{for(let c=Zn.length;c>s;c--)ni();Wa(t),a._d&&Xa(1)}return l};return a._n=!0,a._c=!0,a._d=!0,a}function Pn(e,n){if(nn===null)return e;const o=xr(nn),a=e.dirs||(e.dirs=[]);for(let r=0;r<n.length;r++){let[t,s,l,c=Me]=n[r];t&&(Se(t)&&(t={mounted:t,updated:t}),t.deep&&Xn(s),a.push({dir:t,instance:o,value:s,oldValue:void 0,arg:l,modifiers:c}))}return e}function bo(e,n,o,a){const r=e.dirs,t=n&&n.dirs;for(let s=0;s<r.length;s++){const l=r[s];t&&(l.oldValue=t[s].value);let c=l.dir[a];c&&(eo(),wn(c,o,8,[e.el,l,e,n]),no())}}function la(e,n){if(sn){let o=sn.provides;const a=sn.parent&&sn.parent.provides;a===o&&(o=sn.provides=Object.create(a)),o[e]=n}}function $e(e,n,o=!1){const a=mc();if(a||Lo){let r=Lo?Lo._context.provides:a?a.parent==null||a.ce?a.vnode.appContext&&a.vnode.appContext.provides:a.parent.provides:void 0;if(r&&e in r)return r[e];if(arguments.length>1)return o&&Se(n)?n.call(a&&a.proxy):n}}const Gu=Symbol.for("v-scx"),Wu=()=>$e(Gu);function fo(e,n,o){return kl(e,n,o)}function kl(e,n,o=Me){const{immediate:a,deep:r,flush:t,once:s}=o,l=Xe({},o),c=n&&a||!n&&t!=="post";let d;if(ya){if(t==="sync"){const h=Wu();d=h.__watcherHandles||(h.__watcherHandles=[])}else if(!c){const h=()=>{};return h.stop=Hn,h.resume=Hn,h.pause=Hn,h}}const u=sn;l.call=(h,x,_)=>wn(h,u,x,_);let m=!1;t==="post"?l.scheduler=h=>{dn(h,u&&u.suspense)}:t!=="sync"&&(m=!0,l.scheduler=(h,x)=>{x?h():Jt(h)}),l.augmentJob=h=>{n&&(h.flags|=4),m&&(h.flags|=2,u&&(h.id=u.uid,h.i=u))};const f=zu(e,n,l);return ya&&(d?d.push(f):c&&f()),f}function Yu(e,n,o){const a=this.proxy,r=ze(e)?e.includes(".")?Pl(a,e):()=>a[e]:e.bind(a,a);let t;Se(n)?t=n:(t=n.handler,o=n);const s=wa(this),l=kl(r,t.bind(a),o);return s(),l}function Pl(e,n){const o=n.split(".");return()=>{let a=e;for(let r=0;r<o.length&&a;r++)a=a[o[r]];return a}}const lo=new WeakMap,Ol=Symbol("_vte"),gr=e=>e.__isTeleport,Bo=e=>e&&(e.disabled||e.disabled===""),Ju=e=>e&&(e.defer||e.defer===""),gi=e=>typeof SVGElement<"u"&&e instanceof SVGElement,bi=e=>typeof MathMLElement=="function"&&e instanceof MathMLElement,Nt=(e,n)=>{const o=e&&e.to;return ze(o)?n?n(o):null:o},Qu={name:"Teleport",__isTeleport:!0,process(e,n,o,a,r,t,s,l,c,d){const{mc:u,pc:m,pbc:f,o:{insert:h,querySelector:x,createText:_,createComment:E,parentNode:I}}=d,w=Bo(n.props);let{dynamicChildren:J}=n;const Q=(Z,q,B)=>{Z.shapeFlag&16&&u(Z.children,q,B,r,t,s,l,c)},pe=(Z=n)=>{const q=Bo(Z.props),B=Z.target=Nt(Z.props,x),ae=xt(B,Z,_,h);B&&(s!=="svg"&&gi(B)?s="svg":s!=="mathml"&&bi(B)&&(s="mathml"),r&&r.isCE&&(r.ce._teleportTargets||(r.ce._teleportTargets=new Set)).add(B),q||(Q(Z,B,ae),oa(Z,!1)))},ue=Z=>{const q=()=>{if(lo.get(Z)===q){if(lo.delete(Z),Bo(Z.props)){const B=I(Z.el)||o;Q(Z,B,Z.anchor),oa(Z,!0)}pe(Z)}};lo.set(Z,q),dn(q,t)};if(e==null){const Z=n.el=_(""),q=n.anchor=_("");if(h(Z,o,a),h(q,o,a),Ju(n.props)||t&&t.pendingBranch){ue(n);return}w&&(Q(n,o,q),oa(n,!0)),pe()}else{n.el=e.el;const Z=n.anchor=e.anchor,q=lo.get(e);if(q){q.flags|=8,lo.delete(e),ue(n);return}n.targetStart=e.targetStart;const B=n.target=e.target,ae=n.targetAnchor=e.targetAnchor,de=Bo(e.props),M=de?o:B,H=de?Z:ae;if(s==="svg"||gi(B)?s="svg":(s==="mathml"||bi(B))&&(s="mathml"),J?(f(e.dynamicChildren,J,M,r,t,s,l),ei(e,n,!0)):c||m(e,n,M,H,r,t,s,l,!1),w)de?n.props&&e.props&&n.props.to!==e.props.to&&(n.props.to=e.props.to):Va(n,o,Z,d,1);else if((n.props&&n.props.to)!==(e.props&&e.props.to)){const G=Nt(n.props,x);G&&(n.target=G,Va(n,G,null,d,0))}else de&&Va(n,B,ae,d,1);oa(n,w)}},remove(e,n,o,{um:a,o:{remove:r}},t){const{shapeFlag:s,children:l,anchor:c,targetStart:d,targetAnchor:u,target:m,props:f}=e,h=Bo(f),x=t||!h,_=lo.get(e);if(_&&(_.flags|=8,lo.delete(e)),m&&(r(d),r(u)),t&&r(c),!_&&(h||m)&&s&16)for(let E=0;E<l.length;E++){const I=l[E];a(I,n,o,x,!!I.dynamicChildren)}},move:Va,hydrate:Xu};function Va(e,n,o,{o:{insert:a},m:r},t=2){t===0&&a(e.targetAnchor,n,o);const{el:s,anchor:l,shapeFlag:c,children:d,props:u}=e,m=t===2;if(m&&a(s,n,o),!lo.has(e)&&(!m||Bo(u))&&c&16)for(let f=0;f<d.length;f++)r(d[f],n,o,2);m&&a(l,n,o)}function Xu(e,n,o,a,r,t,{o:{nextSibling:s,parentNode:l,querySelector:c,insert:d,createText:u}},m){function f(E,I){let w=I;for(;w;){if(w&&w.nodeType===8){if(w.data==="teleport start anchor")n.targetStart=w;else if(w.data==="teleport anchor"){n.targetAnchor=w,E._lpa=n.targetAnchor&&s(n.targetAnchor);break}}w=s(w)}}function h(E,I){I.anchor=m(s(E),I,l(E),o,a,r,t)}const x=n.target=Nt(n.props,c),_=Bo(n.props);if(x){const E=x._lpa||x.firstChild;n.shapeFlag&16&&(_?(h(e,n),f(x,E),n.targetAnchor||xt(x,n,u,d,l(e)===x?e:null)):(n.anchor=s(e),f(x,E),n.targetAnchor||xt(x,n,u,d),m(E&&s(E),n,x,o,a,r,t))),oa(n,_)}else _&&n.shapeFlag&16&&(h(e,n),n.targetStart=e,n.targetAnchor=s(e));return n.anchor&&s(n.anchor)}const jl=Qu;function oa(e,n){const o=e.ctx;if(o&&o.ut){let a,r;for(n?(a=e.el,r=e.anchor):(a=e.targetStart,r=e.targetAnchor);a&&a!==r;)a.nodeType===1&&a.setAttribute("data-v-owner",o.uid),a=a.nextSibling;o.ut()}}function xt(e,n,o,a,r=null){const t=n.targetStart=o(""),s=n.targetAnchor=o("");return t[Ol]=s,e&&(a(t,e,r),a(s,e,r)),s}const Rn=Symbol("_leaveCb"),Qo=Symbol("_enterCb");function Zu(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return xn(()=>{e.isMounted=!0}),yr(()=>{e.isUnmounting=!0}),e}const Bn=[Function,Array],Dl={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Bn,onEnter:Bn,onAfterEnter:Bn,onEnterCancelled:Bn,onBeforeLeave:Bn,onLeave:Bn,onAfterLeave:Bn,onLeaveCancelled:Bn,onBeforeAppear:Bn,onAppear:Bn,onAfterAppear:Bn,onAppearCancelled:Bn},Vl=e=>{const n=e.subTree;return n.component?Vl(n.component):n},ed={name:"BaseTransition",props:Dl,setup(e,{slots:n}){const o=mc(),a=Zu();return()=>{const r=n.default&&$l(n.default(),!0),t=r&&r.length?Ll(r):o.subTree?ve():void 0;if(!t)return;const s=je(e),{mode:l}=s;if(a.isLeaving)return kr(t);const c=Ya(t);if(!c)return kr(t);let d=Bt(c,s,a,o,m=>d=m);c.type!==tn&&va(c,d);let u=o.subTree&&Ya(o.subTree);if(u&&u.type!==tn&&!Ro(u,c)&&Vl(o).type!==tn){let m=Bt(u,s,a,o);if(va(u,m),l==="out-in"&&c.type!==tn)return a.isLeaving=!0,m.afterLeave=()=>{a.isLeaving=!1,o.job.flags&8||o.update(),delete m.afterLeave,u=void 0},kr(t);l==="in-out"&&c.type!==tn?m.delayLeave=(f,h,x)=>{const _=ql(a,u);_[String(u.key)]=u,f[Rn]=()=>{h(),f[Rn]=void 0,delete d.delayedLeave,u=void 0},d.delayedLeave=()=>{x(),delete d.delayedLeave,u=void 0}}:u=void 0}else u&&(u=void 0);return t}}};function Ll(e){let n=e[0];if(e.length>1){for(const o of e)if(o.type!==tn){n=o;break}}return n}const nd=ed;function ql(e,n){const{leavingVNodes:o}=e;let a=o.get(n.type);return a||(a=Object.create(null),o.set(n.type,a)),a}function Bt(e,n,o,a,r){const{appear:t,mode:s,persisted:l=!1,onBeforeEnter:c,onEnter:d,onAfterEnter:u,onEnterCancelled:m,onBeforeLeave:f,onLeave:h,onAfterLeave:x,onLeaveCancelled:_,onBeforeAppear:E,onAppear:I,onAfterAppear:w,onAppearCancelled:J}=n,Q=String(e.key),pe=ql(o,e),ue=(B,ae)=>{B&&wn(B,a,9,ae)},Z=(B,ae)=>{const de=ae[1];ue(B,ae),Ne(B)?B.every(M=>M.length<=1)&&de():B.length<=1&&de()},q={mode:s,persisted:l,beforeEnter(B){let ae=c;if(!o.isMounted)if(t)ae=E||c;else return;B[Rn]&&B[Rn](!0);const de=pe[Q];de&&Ro(e,de)&&de.el[Rn]&&de.el[Rn](),ue(ae,[B])},enter(B){if(pe[Q]===e)return;let ae=d,de=u,M=m;if(!o.isMounted)if(t)ae=I||d,de=w||u,M=J||m;else return;let H=!1;B[Qo]=ye=>{H||(H=!0,ye?ue(M,[B]):ue(de,[B]),q.delayedLeave&&q.delayedLeave(),B[Qo]=void 0)};const G=B[Qo].bind(null,!1);ae?Z(ae,[B,G]):G()},leave(B,ae){const de=String(e.key);if(B[Qo]&&B[Qo](!0),o.isUnmounting)return ae();ue(f,[B]);let M=!1;B[Rn]=G=>{M||(M=!0,ae(),G?ue(_,[B]):ue(x,[B]),B[Rn]=void 0,pe[de]===e&&delete pe[de])};const H=B[Rn].bind(null,!1);pe[de]=e,h?Z(h,[B,H]):H()},clone(B){const ae=Bt(B,n,o,a,r);return r&&r(ae),ae}};return q}function kr(e){if(br(e))return e=ho(e),e.children=null,e}function Ya(e){if(!br(e))return gr(e.type)&&e.children?Ll(e.children):e;if(e.component)return e.component.subTree;const{shapeFlag:n,children:o}=e;if(o){if(n&16)return o[0];if(n&32&&Se(o.default))return o.default()}}function va(e,n){if(e.shapeFlag&6&&e.component){e.transition=n;const o=e.component.subTree;va(gr(o.type)&&Ya(o)||o,n)}else e.shapeFlag&128?(e.ssContent.transition=n.clone(e.ssContent),e.ssFallback.transition=n.clone(e.ssFallback)):e.transition=n}function $l(e,n=!1,o){let a=[],r=0;for(let t=0;t<e.length;t++){let s=e[t];const l=o==null?s.key:String(o)+String(s.key!=null?s.key:t);s.type===we?(s.patchFlag&128&&r++,a=a.concat($l(s.children,n,l))):(n||s.type!==tn)&&a.push(l!=null?ho(s,{key:l}):s)}if(r>1)for(let t=0;t<a.length;t++)a[t].patchFlag=-2;return a}function Ml(e,n){return Se(e)?Xe({name:e.name},n,{setup:e}):e}function Fl(e){e.ids=[e.ids[0]+e.ids[2]+++"-",0,0]}function _i(e,n){let o;return!!((o=Object.getOwnPropertyDescriptor(e,n))&&!o.configurable)}const Ja=new WeakMap;function ca(e,n,o,a,r=!1){if(Ne(e)){e.forEach((_,E)=>ca(_,n&&(Ne(n)?n[E]:n),o,a,r));return}if(Vo(a)&&!r){a.shapeFlag&512&&a.type.__asyncResolved&&a.component.subTree.component&&ca(e,n,o,a.component.subTree);return}const t=a.shapeFlag&4?xr(a.component):a.el,s=r?null:t,{i:l,r:c}=e,d=n&&n.r,u=l.refs===Me?l.refs={}:l.refs,m=l.setupState,f=je(m),h=m===Me?ol:_=>_i(u,_)?!1:Ve(f,_),x=(_,E)=>!(E&&_i(u,E));if(d!=null&&d!==c){if(yi(n),ze(d))u[d]=null,h(d)&&(m[d]=null);else if(ln(d)){const _=n;x(d,_.k)&&(d.value=null),_.k&&(u[_.k]=null)}}if(Se(c))Ea(c,l,12,[s,u]);else{const _=ze(c),E=ln(c);if(_||E){const I=()=>{if(e.f){const w=_?h(c)?m[c]:u[c]:x()||!e.k?c.value:u[e.k];if(r)Ne(w)&&$t(w,t);else if(Ne(w))w.includes(t)||w.push(t);else if(_)u[c]=[t],h(c)&&(m[c]=u[c]);else{const J=[t];x(c,e.k)&&(c.value=J),e.k&&(u[e.k]=J)}}else _?(u[c]=s,h(c)&&(m[c]=s)):E&&(x(c,e.k)&&(c.value=s),e.k&&(u[e.k]=s))};if(s){const w=()=>{I(),Ja.delete(e)};w.id=-1,Ja.set(e,w),dn(w,o)}else yi(e),I()}}}function yi(e){const n=Ja.get(e);n&&(n.flags|=8,Ja.delete(e))}pr().requestIdleCallback;pr().cancelIdleCallback;const Vo=e=>!!e.type.__asyncLoader,br=e=>e.type.__isKeepAlive;function od(e,n){zl(e,"a",n)}function ad(e,n){zl(e,"da",n)}function zl(e,n,o=sn){const a=e.__wdc||(e.__wdc=()=>{let r=o;for(;r;){if(r.isDeactivated)return;r=r.parent}return e()});if(_r(n,a,o),o){let r=o.parent;for(;r&&r.parent;)br(r.parent.vnode)&&rd(a,n,o,r),r=r.parent}}function rd(e,n,o,a){const r=_r(n,e,a,!0);Qt(()=>{$t(a[n],r)},o)}function _r(e,n,o=sn,a=!1){if(o){const r=o[e]||(o[e]=[]),t=n.__weh||(n.__weh=(...s)=>{eo();const l=wa(o),c=wn(n,o,e,s);return l(),no(),c});return a?r.unshift(t):r.push(t),t}}const ao=e=>(n,o=sn)=>{(!ya||e==="sp")&&_r(e,(...a)=>n(...a),o)},td=ao("bm"),xn=ao("m"),id=ao("bu"),sd=ao("u"),yr=ao("bum"),Qt=ao("um"),ld=ao("sp"),cd=ao("rtg"),ud=ao("rtc");function dd(e,n=sn){_r("ec",e,n)}const Hl="components",md="directives",Ul=Symbol.for("v-ndc");function Pr(e){return ze(e)?Kl(Hl,e,!1)||e:e||Ul}function pd(e){return Kl(md,e)}function Kl(e,n,o=!0,a=!1){const r=nn||sn;if(r){const t=r.type;if(e===Hl){const l=Jd(t,!1);if(l&&(l===n||l===hn(n)||l===dr(hn(n))))return t}const s=Ai(r[e]||t[e],n)||Ai(r.appContext[e],n);return!s&&a?t:s}}function Ai(e,n){return e&&(e[n]||e[hn(n)]||e[dr(hn(n))])}function cn(e,n,o,a){let r;const t=o,s=Ne(e);if(s||ze(e)){const l=s&&Eo(e);let c=!1,d=!1;l&&(c=!En(e),d=oo(e),e=hr(e)),r=new Array(e.length);for(let u=0,m=e.length;u<m;u++)r[u]=n(c?d?qo(Dn(e[u])):Dn(e[u]):e[u],u,void 0,t)}else if(typeof e=="number"){r=new Array(e);for(let l=0;l<e;l++)r[l]=n(l+1,l,void 0,t)}else if(Le(e))if(e[Symbol.iterator])r=Array.from(e,(l,c)=>n(l,c,void 0,t));else{const l=Object.keys(e);r=new Array(l.length);for(let c=0,d=l.length;c<d;c++){const u=l[c];r[c]=n(e[u],u,c,t)}}else r=[];return r}function gn(e,n,o,a,r,t){if(o==null&&(o={}),nn.ce||nn.parent&&Vo(nn.parent)&&nn.parent.ce){const d=o,u=Object.keys(d).length>0;return n!=="default"&&(d.name=n),S(),Pe(we,null,[$("slot",d,a&&a())],u?-2:64)}let s=e[n];s&&s._c&&(s._d=!1);const l=Zn.length;S();let c;try{const d=s&&Gl(s(o)),u=o.key||t||d&&d.key;c=Pe(we,{key:(u&&!jn(u)?u:`_${n}`)+(!d&&a?"_fb":"")},d||(a?a():[]),d&&e._===1?64:-2)}catch(d){for(let u=Zn.length;u>l;u--)ni();throw d}finally{s&&s._c&&(s._d=!0)}return c.scopeId&&(c.slotScopeIds=[c.scopeId+"-s"]),c}function Gl(e){return e.some(n=>ba(n)?!(n.type===tn||n.type===we&&!Gl(n.children)):!0)?e:null}function fd(e,n){const o={};for(const a in e)o[Fa(a)]=e[a];return o}const Rt=e=>e?pc(e)?xr(e):Rt(e.parent):null,ua=Xe(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Rt(e.parent),$root:e=>Rt(e.root),$host:e=>e.ce,$emit:e=>e.emit,$options:e=>Yl(e),$forceUpdate:e=>e.f||(e.f=()=>{Jt(e.update)}),$nextTick:e=>e.n||(e.n=An.bind(e.proxy)),$watch:e=>Yu.bind(e)}),Or=(e,n)=>e!==Me&&!e.__isScriptSetup&&Ve(e,n),hd={get({_:e},n){if(n==="__v_skip")return!0;const{ctx:o,setupState:a,data:r,props:t,accessCache:s,type:l,appContext:c}=e;if(n[0]!=="$"){const f=s[n];if(f!==void 0)switch(f){case 1:return a[n];case 2:return r[n];case 4:return o[n];case 3:return t[n]}else{if(Or(a,n))return s[n]=1,a[n];if(r!==Me&&Ve(r,n))return s[n]=2,r[n];if(Ve(t,n))return s[n]=3,t[n];if(o!==Me&&Ve(o,n))return s[n]=4,o[n];Tt&&(s[n]=0)}}const d=ua[n];let u,m;if(d)return n==="$attrs"&&rn(e.attrs,"get",""),d(e);if((u=l.__cssModules)&&(u=u[n]))return u;if(o!==Me&&Ve(o,n))return s[n]=4,o[n];if(m=c.config.globalProperties,Ve(m,n))return m[n]},set({_:e},n,o){const{data:a,setupState:r,ctx:t}=e;return Or(r,n)?(r[n]=o,!0):a!==Me&&Ve(a,n)?(a[n]=o,!0):Ve(e.props,n)||n[0]==="$"&&n.slice(1)in e?!1:(t[n]=o,!0)},has({_:{data:e,setupState:n,accessCache:o,ctx:a,appContext:r,props:t,type:s}},l){let c;return!!(o[l]||e!==Me&&l[0]!=="$"&&Ve(e,l)||Or(n,l)||Ve(t,l)||Ve(a,l)||Ve(ua,l)||Ve(r.config.globalProperties,l)||(c=s.__cssModules)&&c[l])},defineProperty(e,n,o){return o.get!=null?e._.accessCache[n]=0:Ve(o,"value")&&this.set(e,n,o.value,null),Reflect.defineProperty(e,n,o)}};function Ni(e){return Ne(e)?e.reduce((n,o)=>(n[o]=null,n),{}):e}let Tt=!0;function vd(e){const n=Yl(e),o=e.proxy,a=e.ctx;Tt=!1,n.beforeCreate&&xi(n.beforeCreate,e,"bc");const{data:r,computed:t,methods:s,watch:l,provide:c,inject:d,created:u,beforeMount:m,mounted:f,beforeUpdate:h,updated:x,activated:_,deactivated:E,beforeDestroy:I,beforeUnmount:w,destroyed:J,unmounted:Q,render:pe,renderTracked:ue,renderTriggered:Z,errorCaptured:q,serverPrefetch:B,expose:ae,inheritAttrs:de,components:M,directives:H,filters:G}=n;if(d&&gd(d,a,null),s)for(const Ee in s){const Be=s[Ee];Se(Be)&&(a[Ee]=Be.bind(o))}if(r){const Ee=r.call(o,o);Le(Ee)&&(e.data=Sa(Ee))}if(Tt=!0,t)for(const Ee in t){const Be=t[Ee],Ze=Se(Be)?Be.bind(o,o):Se(Be.get)?Be.get.bind(o,o):Hn,Ue=!Se(Be)&&Se(Be.set)?Be.set.bind(o):Hn,Ge=qe({get:Ze,set:Ue});Object.defineProperty(a,Ee,{enumerable:!0,configurable:!0,get:()=>Ge.value,set:Je=>Ge.value=Je})}if(l)for(const Ee in l)Wl(l[Ee],a,o,Ee);if(c){const Ee=Se(c)?c.call(o):c;Reflect.ownKeys(Ee).forEach(Be=>{la(Be,Ee[Be])})}u&&xi(u,e,"c");function F(Ee,Be){Ne(Be)?Be.forEach(Ze=>Ee(Ze.bind(o))):Be&&Ee(Be.bind(o))}if(F(td,m),F(xn,f),F(id,h),F(sd,x),F(od,_),F(ad,E),F(dd,q),F(ud,ue),F(cd,Z),F(yr,w),F(Qt,Q),F(ld,B),Ne(ae))if(ae.length){const Ee=e.exposed||(e.exposed={});ae.forEach(Be=>{Object.defineProperty(Ee,Be,{get:()=>o[Be],set:Ze=>o[Be]=Ze,enumerable:!0})})}else e.exposed||(e.exposed={});pe&&e.render===Hn&&(e.render=pe),de!=null&&(e.inheritAttrs=de),M&&(e.components=M),H&&(e.directives=H),B&&Fl(e)}function gd(e,n,o=Hn){Ne(e)&&(e=St(e));for(const a in e){const r=e[a];let t;Le(r)?"default"in r?t=$e(r.from||a,r.default,!0):t=$e(r.from||a):t=$e(r),ln(t)?Object.defineProperty(n,a,{enumerable:!0,configurable:!0,get:()=>t.value,set:s=>t.value=s}):n[a]=t}}function xi(e,n,o){wn(Ne(e)?e.map(a=>a.bind(n.proxy)):e.bind(n.proxy),n,o)}function Wl(e,n,o,a){let r=a.includes(".")?Pl(o,a):()=>o[a];if(ze(e)){const t=n[e];Se(t)&&fo(r,t)}else if(Se(e))fo(r,e.bind(o));else if(Le(e))if(Ne(e))e.forEach(t=>Wl(t,n,o,a));else{const t=Se(e.handler)?e.handler.bind(o):n[e.handler];Se(t)&&fo(r,t,e)}}function Yl(e){const n=e.type,{mixins:o,extends:a}=n,{mixins:r,optionsCache:t,config:{optionMergeStrategies:s}}=e.appContext,l=t.get(n);let c;return l?c=l:!r.length&&!o&&!a?c=n:(c={},r.length&&r.forEach(d=>Qa(c,d,s,!0)),Qa(c,n,s)),Le(n)&&t.set(n,c),c}function Qa(e,n,o,a=!1){const{mixins:r,extends:t}=n;t&&Qa(e,t,o,!0),r&&r.forEach(s=>Qa(e,s,o,!0));for(const s in n)if(!(a&&s==="expose")){const l=bd[s]||o&&o[s];e[s]=l?l(e[s],n[s]):n[s]}return e}const bd={data:Bi,props:Ri,emits:Ri,methods:aa,computed:aa,beforeCreate:un,created:un,beforeMount:un,mounted:un,beforeUpdate:un,updated:un,beforeDestroy:un,beforeUnmount:un,destroyed:un,unmounted:un,activated:un,deactivated:un,errorCaptured:un,serverPrefetch:un,components:aa,directives:aa,watch:yd,provide:Bi,inject:_d};function Bi(e,n){return n?e?function(){return Xe(Se(e)?e.call(this,this):e,Se(n)?n.call(this,this):n)}:n:e}function _d(e,n){return aa(St(e),St(n))}function St(e){if(Ne(e)){const n={};for(let o=0;o<e.length;o++)n[e[o]]=e[o];return n}return e}function un(e,n){return e?[...new Set([].concat(e,n))]:n}function aa(e,n){return e?Xe(Object.create(null),e,n):n}function Ri(e,n){return e?Ne(e)&&Ne(n)?[...new Set([...e,...n])]:Xe(Object.create(null),Ni(e),Ni(n??{})):n}function yd(e,n){if(!e)return n;if(!n)return e;const o=Xe(Object.create(null),e);for(const a in n)o[a]=un(e[a],n[a]);return o}function Jl(){return{app:null,config:{isNativeTag:ol,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Ad=0;function Nd(e,n){return function(a,r=null){Se(a)||(a=Xe({},a)),r!=null&&!Le(r)&&(r=null);const t=Jl(),s=new WeakSet,l=[];let c=!1;const d=t.app={_uid:Ad++,_component:a,_props:r,_container:null,_context:t,_instance:null,version:Xd,get config(){return t.config},set config(u){},use(u,...m){return s.has(u)||(u&&Se(u.install)?(s.add(u),u.install(d,...m)):Se(u)&&(s.add(u),u(d,...m))),d},mixin(u){return t.mixins.includes(u)||t.mixins.push(u),d},component(u,m){return m?(t.components[u]=m,d):t.components[u]},directive(u,m){return m?(t.directives[u]=m,d):t.directives[u]},mount(u,m,f){if(!c){const h=d._ceVNode||$(a,r);return h.appContext=t,f===!0?f="svg":f===!1&&(f=void 0),e(h,u,f),c=!0,d._container=u,u.__vue_app__=d,xr(h.component)}},onUnmount(u){l.push(u)},unmount(){c&&(wn(l,d._instance,16),e(null,d._container),delete d._container.__vue_app__)},provide(u,m){return t.provides[u]=m,d},runWithContext(u){const m=Lo;Lo=d;try{return u()}finally{Lo=m}}};return d}}let Lo=null;const xd=(e,n)=>n==="modelValue"||n==="model-value"?e.modelModifiers:e[`${n}Modifiers`]||e[`${hn(n)}Modifiers`]||e[`${go(n)}Modifiers`];function Bd(e,n,...o){if(e.isUnmounted)return;const a=e.vnode.props||Me;let r=o;const t=n.startsWith("update:"),s=t&&xd(a,n.slice(7));s&&(s.trim&&(r=o.map(u=>ze(u)?u.trim():u)),s.number&&(r=o.map(mr)));let l,c=a[l=Fa(n)]||a[l=Fa(hn(n))];!c&&t&&(c=a[l=Fa(go(n))]),c&&wn(c,e,6,r);const d=a[l+"Once"];if(d){if(!e.emitted)e.emitted={};else if(e.emitted[l])return;e.emitted[l]=!0,wn(d,e,6,r)}}const Rd=new WeakMap;function Ql(e,n,o=!1){const a=o?Rd:n.emitsCache,r=a.get(e);if(r!==void 0)return r;const t=e.emits;let s={},l=!1;if(!Se(e)){const c=d=>{const u=Ql(d,n,!0);u&&(l=!0,Xe(s,u))};!o&&n.mixins.length&&n.mixins.forEach(c),e.extends&&c(e.extends),e.mixins&&e.mixins.forEach(c)}return!t&&!l?(Le(e)&&a.set(e,null),null):(Ne(t)?t.forEach(c=>s[c]=null):Xe(s,t),Le(e)&&a.set(e,s),s)}function Ar(e,n){return!e||!lr(n)?!1:(n=n.slice(2),n=n==="Once"?n:n.replace(/Once$/,""),Ve(e,n[0].toLowerCase()+n.slice(1))||Ve(e,go(n))||Ve(e,n))}function Ti(e){const{type:n,vnode:o,proxy:a,withProxy:r,propsOptions:[t],slots:s,attrs:l,emit:c,render:d,renderCache:u,props:m,data:f,setupState:h,ctx:x,inheritAttrs:_}=e,E=Wa(e);let I,w;try{if(o.shapeFlag&4){const Q=r||a,pe=Q;I=Mn(d.call(pe,Q,u,m,h,f,x)),w=l}else{const Q=n;I=Mn(Q.length>1?Q(m,{attrs:l,slots:s,emit:c}):Q(m,null)),w=n.props?l:Td(l)}}catch(Q){Zn.length=0,vr(Q,e,1),I=$(tn)}let J=I;if(w&&_!==!1){const Q=Object.keys(w),{shapeFlag:pe}=J;Q.length&&pe&7&&(t&&Q.some(cr)&&(w=Sd(w,t)),J=ho(J,w,!1,!0))}if(o.dirs&&(J=ho(J,null,!1,!0),J.dirs=J.dirs?J.dirs.concat(o.dirs):o.dirs),o.transition){const Q=gr(J.type)&&Ya(J)||J;va(Q,o.transition)}return I=J,Wa(E),I}const Td=e=>{let n;for(const o in e)(o==="class"||o==="style"||lr(o))&&((n||(n={}))[o]=e[o]);return n},Sd=(e,n)=>{const o={};for(const a in e)(!cr(a)||!(a.slice(9)in n))&&(o[a]=e[a]);return o};function Ed(e,n,o){const{props:a,children:r,component:t}=e,{props:s,children:l,patchFlag:c}=n,d=t.emitsOptions;if(n.dirs||n.transition)return!0;if(o&&c>=0){if(c&1024)return!0;if(c&16)return a?Si(a,s,d):!!s;if(c&8){const u=n.dynamicProps;for(let m=0;m<u.length;m++){const f=u[m];if(Xl(s,a,f)&&!Ar(d,f))return!0}}}else return(r||l)&&(!l||!l.$stable)?!0:a===s?!1:a?s?Si(a,s,d):!0:!!s;return!1}function Si(e,n,o){const a=Object.keys(n);if(a.length!==Object.keys(e).length)return!0;for(let r=0;r<a.length;r++){const t=a[r];if(Xl(n,e,t)&&!Ar(o,t))return!0}return!1}function Xl(e,n,o){const a=e[o],r=n[o];return o==="style"&&Le(a)&&Le(r)?!Ko(a,r):a!==r}function wd({vnode:e,parent:n,suspense:o},a){for(;n;){const r=n.subTree;if(r.suspense&&r.suspense.activeBranch===e&&(r.suspense.vnode.el=r.el=a,e=r),r===e)(e=n.vnode).el=a,n=n.parent;else break}o&&o.activeBranch===e&&(o.vnode.el=a)}const Zl={},ec=()=>Object.create(Zl),nc=e=>Object.getPrototypeOf(e)===Zl;function Cd(e,n,o,a=!1){const r={},t=ec();e.propsDefaults=Object.create(null),oc(e,n,r,t);for(const s in e.propsOptions[0])s in r||(r[s]=void 0);o?e.props=a?r:Bl(r):e.type.props?e.props=r:e.props=t,e.attrs=t}function Id(e,n,o,a){const{props:r,attrs:t,vnode:{patchFlag:s}}=e,l=je(r),[c]=e.propsOptions;let d=!1;if((a||s>0)&&!(s&16)){if(s&8){const u=e.vnode.dynamicProps;for(let m=0;m<u.length;m++){let f=u[m];if(Ar(e.emitsOptions,f))continue;const h=n[f];if(c)if(Ve(t,f))h!==t[f]&&(t[f]=h,d=!0);else{const x=hn(f);r[x]=Et(c,l,x,h,e,!1)}else h!==t[f]&&(t[f]=h,d=!0)}}}else{oc(e,n,r,t)&&(d=!0);let u;for(const m in l)(!n||!Ve(n,m)&&((u=go(m))===m||!Ve(n,u)))&&(c?o&&(o[m]!==void 0||o[u]!==void 0)&&(r[m]=Et(c,l,m,void 0,e,!0)):delete r[m]);if(t!==l)for(const m in t)(!n||!Ve(n,m))&&(delete t[m],d=!0)}d&&Qn(e.attrs,"set","")}function oc(e,n,o,a){const[r,t]=e.propsOptions;let s=!1,l;if(n)for(let c in n){if(ta(c))continue;const d=n[c];let u;r&&Ve(r,u=hn(c))?!t||!t.includes(u)?o[u]=d:(l||(l={}))[u]=d:Ar(e.emitsOptions,c)||(!(c in a)||d!==a[c])&&(a[c]=d,s=!0)}if(t){const c=je(o),d=l||Me;for(let u=0;u<t.length;u++){const m=t[u];o[m]=Et(r,c,m,d[m],e,!Ve(d,m))}}return s}function Et(e,n,o,a,r,t){const s=e[o];if(s!=null){const l=Ve(s,"default");if(l&&a===void 0){const c=s.default;if(s.type!==Function&&!s.skipFactory&&Se(c)){const{propsDefaults:d}=r;if(o in d)a=d[o];else{const u=wa(r);a=d[o]=c.call(null,n),u()}}else a=c;r.ce&&r.ce._setProp(o,a)}s[0]&&(t&&!l?a=!1:s[1]&&(a===""||a===go(o))&&(a=!0))}return a}const kd=new WeakMap;function ac(e,n,o=!1){const a=o?kd:n.propsCache,r=a.get(e);if(r)return r;const t=e.props,s={},l=[];let c=!1;if(!Se(e)){const u=m=>{c=!0;const[f,h]=ac(m,n,!0);Xe(s,f),h&&l.push(...h)};!o&&n.mixins.length&&n.mixins.forEach(u),e.extends&&u(e.extends),e.mixins&&e.mixins.forEach(u)}if(!t&&!c)return Le(e)&&a.set(e,Oo),Oo;if(Ne(t))for(let u=0;u<t.length;u++){const m=hn(t[u]);Ei(m)&&(s[m]=Me)}else if(t)for(const u in t){const m=hn(u);if(Ei(m)){const f=t[u],h=s[m]=Ne(f)||Se(f)?{type:f}:Xe({},f),x=h.type;let _=!1,E=!0;if(Ne(x))for(let I=0;I<x.length;++I){const w=x[I],J=Se(w)&&w.name;if(J==="Boolean"){_=!0;break}else J==="String"&&(E=!1)}else _=Se(x)&&x.name==="Boolean";h[0]=_,h[1]=E,(_||Ve(h,"default"))&&l.push(m)}}const d=[s,l];return Le(e)&&a.set(e,d),d}function Ei(e){return e[0]!=="$"&&!ta(e)}const Xt=e=>e==="_"||e==="_ctx"||e==="$stable",Zt=e=>Ne(e)?e.map(Mn):[Mn(e)],Pd=(e,n,o)=>{if(n._n)return n;const a=ge((...r)=>Zt(n(...r)),o);return a._c=!1,a},rc=(e,n,o)=>{const a=e._ctx;for(const r in e){if(Xt(r))continue;const t=e[r];if(Se(t))n[r]=Pd(r,t,a);else if(t!=null){const s=Zt(t);n[r]=()=>s}}},tc=(e,n)=>{const o=Zt(n);e.slots.default=()=>o},ic=(e,n,o)=>{for(const a in n)(o||!Xt(a))&&(e[a]=n[a])},Od=(e,n,o)=>{const a=e.slots=ec();if(e.vnode.shapeFlag&32){const r=n._;r?(ic(a,n,o),o&&il(a,"_",r,!0)):rc(n,a)}else n&&tc(e,n)},jd=(e,n,o)=>{const{vnode:a,slots:r}=e;let t=!0,s=Me;if(a.shapeFlag&32){const l=n._;l?o&&l===1?t=!1:ic(r,n,o):(t=!n.$stable,rc(n,r)),s=n}else n&&(tc(e,n),s={default:1});if(t)for(const l in r)!Xt(l)&&s[l]==null&&delete r[l]},dn=$d;function Dd(e){return Vd(e)}function Vd(e,n){const o=pr();o.__VUE__=!0;const{insert:a,remove:r,patchProp:t,createElement:s,createText:l,createComment:c,setText:d,setElementText:u,parentNode:m,nextSibling:f,setScopeId:h=Hn,insertStaticContent:x}=e,_=(v,b,A,O=null,V=null,C=null,re=void 0,oe=null,ne=!!b.dynamicChildren)=>{if(v===b)return;v&&!Ro(v,b)&&(O=P(v),Je(v,V,C,!0),v=null),b.patchFlag===-2&&(ne=!1,b.dynamicChildren=null);const{type:z,ref:_e,shapeFlag:te}=b;switch(z){case Nr:E(v,b,A,O);break;case tn:I(v,b,A,O);break;case Ha:v==null&&w(b,A,O,re);break;case we:M(v,b,A,O,V,C,re,oe,ne);break;default:te&1?pe(v,b,A,O,V,C,re,oe,ne):te&6?H(v,b,A,O,V,C,re,oe,ne):(te&64||te&128)&&z.process(v,b,A,O,V,C,re,oe,ne,me)}_e!=null&&V?ca(_e,v&&v.ref,C,b||v,!b):_e==null&&v&&v.ref!=null&&ca(v.ref,null,C,v,!0)},E=(v,b,A,O)=>{if(v==null)a(b.el=l(b.children),A,O);else{const V=b.el=v.el;b.children!==v.children&&d(V,b.children)}},I=(v,b,A,O)=>{v==null?a(b.el=c(b.children||""),A,O):b.el=v.el},w=(v,b,A,O)=>{[v.el,v.anchor]=x(v.children,b,A,O,v.el,v.anchor)},J=({el:v,anchor:b},A,O)=>{let V;for(;v&&v!==b;)V=f(v),a(v,A,O),v=V;a(b,A,O)},Q=({el:v,anchor:b})=>{let A;for(;v&&v!==b;)A=f(v),r(v),v=A;r(b)},pe=(v,b,A,O,V,C,re,oe,ne)=>{if(b.type==="svg"?re="svg":b.type==="math"&&(re="mathml"),v==null)ue(b,A,O,V,C,re,oe,ne);else{const z=v.el&&v.el._isVueCE?v.el:null;try{z&&z._beginPatch(),B(v,b,V,C,re,oe,ne)}finally{z&&z._endPatch()}}},ue=(v,b,A,O,V,C,re,oe)=>{let ne,z;const{props:_e,shapeFlag:te,transition:fe,dirs:xe}=v;if(ne=v.el=s(v.type,C,_e&&_e.is,_e),te&8?u(ne,v.children):te&16&&q(v.children,ne,null,O,V,jr(v,C),re,oe),xe&&bo(v,null,O,"created"),Z(ne,v,v.scopeId,re,O),_e){for(const Oe in _e)Oe!=="value"&&!ta(Oe)&&t(ne,Oe,null,_e[Oe],C,O);"value"in _e&&t(ne,"value",null,_e.value,C),(z=_e.onVnodeBeforeMount)&&Ln(z,O,v)}xe&&bo(v,null,O,"beforeMount");const Ce=Ld(V,fe);Ce&&fe.beforeEnter(ne),a(ne,b,A),((z=_e&&_e.onVnodeMounted)||Ce||xe)&&dn(()=>{z&&Ln(z,O,v),Ce&&fe.enter(ne),xe&&bo(v,null,O,"mounted")},V)},Z=(v,b,A,O,V)=>{if(A&&h(v,A),O)for(let C=0;C<O.length;C++)h(v,O[C]);if(V){let C=V.subTree;if(b===C||cc(C.type)&&(C.ssContent===b||C.ssFallback===b)){const re=V.vnode;Z(v,re,re.scopeId,re.slotScopeIds,V.parent)}}},q=(v,b,A,O,V,C,re,oe,ne=0)=>{for(let z=ne;z<v.length;z++){const _e=v[z]=oe?Jn(v[z]):Mn(v[z]);_(null,_e,b,A,O,V,C,re,oe)}},B=(v,b,A,O,V,C,re)=>{const oe=b.el=v.el;let{patchFlag:ne,dynamicChildren:z,dirs:_e}=b;ne|=v.patchFlag&16;const te=v.props||Me,fe=b.props||Me;let xe;if(A&&_o(A,!1),(xe=fe.onVnodeBeforeUpdate)&&Ln(xe,A,b,v),_e&&bo(b,v,A,"beforeUpdate"),A&&_o(A,!0),z&&(!v.dynamicChildren||v.dynamicChildren.length!==z.length)&&(ne=0,re=!1,z=null),(te.innerHTML&&fe.innerHTML==null||te.textContent&&fe.textContent==null)&&u(oe,""),z?ae(v.dynamicChildren,z,oe,A,O,jr(b,V),C):re||Be(v,b,oe,null,A,O,jr(b,V),C,!1),ne>0){if(ne&16)de(oe,te,fe,A,V);else if(ne&2&&te.class!==fe.class&&t(oe,"class",null,fe.class,V),ne&4&&t(oe,"style",te.style,fe.style,V),ne&8){const Ce=b.dynamicProps;for(let Oe=0;Oe<Ce.length;Oe++){const i=Ce[Oe],y=te[i],T=fe[i];(T!==y||i==="value")&&t(oe,i,y,T,V,A)}}ne&1&&v.children!==b.children&&u(oe,b.children)}else!re&&z==null&&de(oe,te,fe,A,V);((xe=fe.onVnodeUpdated)||_e)&&dn(()=>{xe&&Ln(xe,A,b,v),_e&&bo(b,v,A,"updated")},O)},ae=(v,b,A,O,V,C,re)=>{for(let oe=0;oe<b.length;oe++){const ne=v[oe],z=b[oe],_e=ne.el&&(ne.type===we||!Ro(ne,z)||ne.shapeFlag&198)?m(ne.el):A;_(ne,z,_e,null,O,V,C,re,!0)}},de=(v,b,A,O,V)=>{if(b!==A){if(b!==Me)for(const C in b)!ta(C)&&!(C in A)&&t(v,C,b[C],null,V,O);for(const C in A){if(ta(C))continue;const re=A[C],oe=b[C];re!==oe&&C!=="value"&&t(v,C,oe,re,V,O)}"value"in A&&t(v,"value",b.value,A.value,V)}},M=(v,b,A,O,V,C,re,oe,ne)=>{const z=b.el=v?v.el:l(""),_e=b.anchor=v?v.anchor:l("");let{patchFlag:te,dynamicChildren:fe,slotScopeIds:xe}=b;xe&&(oe=oe?oe.concat(xe):xe),v==null?(a(z,A,O),a(_e,A,O),q(b.children||[],A,_e,V,C,re,oe,ne)):te>0&&te&64&&fe&&v.dynamicChildren&&v.dynamicChildren.length===fe.length?(ae(v.dynamicChildren,fe,A,V,C,re,oe),(b.key!=null||V&&b===V.subTree)&&ei(v,b,!0)):Be(v,b,A,_e,V,C,re,oe,ne)},H=(v,b,A,O,V,C,re,oe,ne)=>{b.slotScopeIds=oe,v==null?b.shapeFlag&512?V.ctx.activate(b,A,O,re,ne):G(b,A,O,V,C,re,ne):ye(v,b,ne)},G=(v,b,A,O,V,C,re)=>{const oe=v.component=Ud(v,O,V);if(br(v)&&(oe.ctx.renderer=me),Kd(oe,!1,re),oe.asyncDep){if(V&&V.registerDep(oe,F,re),!v.el){const ne=oe.subTree=$(tn);I(null,ne,b,A),v.placeholder=ne.el}}else F(oe,v,b,A,V,C,re)},ye=(v,b,A)=>{const O=b.component=v.component;if(Ed(v,b,A))if(O.asyncDep&&!O.asyncResolved){Ee(O,b,A);return}else O.next=b,O.update();else b.el=v.el,O.vnode=b},F=(v,b,A,O,V,C,re)=>{const oe=()=>{if(v.isMounted){let{next:te,bu:fe,u:xe,parent:Ce,vnode:Oe}=v;{const R=sc(v);if(R){te&&(te.el=Oe.el,Ee(v,te,re)),R.asyncDep.then(()=>{dn(()=>{v.isUnmounted||z()},V)});return}}let i=te,y;_o(v,!1),te?(te.el=Oe.el,Ee(v,te,re)):te=Oe,fe&&za(fe),(y=te.props&&te.props.onVnodeBeforeUpdate)&&Ln(y,Ce,te,Oe),_o(v,!0);const T=Ti(v),k=v.subTree;v.subTree=T,_(k,T,m(k.el),P(k),v,V,C),te.el=T.el,i===null&&wd(v,T.el),xe&&dn(xe,V),(y=te.props&&te.props.onVnodeUpdated)&&dn(()=>Ln(y,Ce,te,Oe),V)}else{let te;const{el:fe,props:xe}=b,{bm:Ce,m:Oe,parent:i,root:y,type:T}=v,k=Vo(b);_o(v,!1),Ce&&za(Ce),!k&&(te=xe&&xe.onVnodeBeforeMount)&&Ln(te,i,b),_o(v,!0);{y.ce&&y.ce._hasShadowRoot()&&y.ce._injectChildStyle(T,v.parent?v.parent.type:void 0);const R=v.subTree=Ti(v);_(null,R,A,O,v,V,C),b.el=R.el}if(Oe&&dn(Oe,V),!k&&(te=xe&&xe.onVnodeMounted)){const R=b;dn(()=>Ln(te,i,R),V)}(b.shapeFlag&256||i&&Vo(i.vnode)&&i.vnode.shapeFlag&256)&&v.a&&dn(v.a,V),v.isMounted=!0,b=A=O=null}};v.scope.on();const ne=v.effect=new ul(oe);v.scope.off();const z=v.update=ne.run.bind(ne),_e=v.job=ne.runIfDirty.bind(ne);_e.i=v,_e.id=v.uid,ne.scheduler=()=>Jt(_e),_o(v,!0),z()},Ee=(v,b,A)=>{b.component=v;const O=v.vnode.props;v.vnode=b,v.next=null,Id(v,b.props,O,A),jd(v,b.children,A),eo(),vi(v),no()},Be=(v,b,A,O,V,C,re,oe,ne=!1)=>{const z=v&&v.children,_e=v?v.shapeFlag:0,te=b.children,{patchFlag:fe,shapeFlag:xe}=b;if(fe>0){if(fe&128){Ue(z,te,A,O,V,C,re,oe,ne);return}else if(fe&256){Ze(z,te,A,O,V,C,re,oe,ne);return}}xe&8?(_e&16&&Ye(z,V,C),te!==z&&u(A,te)):_e&16?xe&16?Ue(z,te,A,O,V,C,re,oe,ne):Ye(z,V,C,!0):(_e&8&&u(A,""),xe&16&&q(te,A,O,V,C,re,oe,ne))},Ze=(v,b,A,O,V,C,re,oe,ne)=>{v=v||Oo,b=b||Oo;const z=v.length,_e=b.length,te=Math.min(z,_e);let fe;for(fe=0;fe<te;fe++){const xe=b[fe]=ne?Jn(b[fe]):Mn(b[fe]);_(v[fe],xe,A,null,V,C,re,oe,ne)}z>_e?Ye(v,V,C,!0,!1,te):q(b,A,O,V,C,re,oe,ne,te)},Ue=(v,b,A,O,V,C,re,oe,ne)=>{let z=0;const _e=b.length;let te=v.length-1,fe=_e-1;for(;z<=te&&z<=fe;){const xe=v[z],Ce=b[z]=ne?Jn(b[z]):Mn(b[z]);if(Ro(xe,Ce))_(xe,Ce,A,null,V,C,re,oe,ne);else break;z++}for(;z<=te&&z<=fe;){const xe=v[te],Ce=b[fe]=ne?Jn(b[fe]):Mn(b[fe]);if(Ro(xe,Ce))_(xe,Ce,A,null,V,C,re,oe,ne);else break;te--,fe--}if(z>te){if(z<=fe){const xe=fe+1,Ce=xe<_e?b[xe].el:O;for(;z<=fe;)_(null,b[z]=ne?Jn(b[z]):Mn(b[z]),A,Ce,V,C,re,oe,ne),z++}}else if(z>fe)for(;z<=te;)Je(v[z],V,C,!0),z++;else{const xe=z,Ce=z,Oe=new Map;for(z=Ce;z<=fe;z++){const N=b[z]=ne?Jn(b[z]):Mn(b[z]);N.key!=null&&Oe.set(N.key,z)}let i,y=0;const T=fe-Ce+1;let k=!1,R=0;const W=new Array(T);for(z=0;z<T;z++)W[z]=0;for(z=xe;z<=te;z++){const N=v[z];if(y>=T){Je(N,V,C,!0);continue}let L;if(N.key!=null)L=Oe.get(N.key);else for(i=Ce;i<=fe;i++)if(W[i-Ce]===0&&Ro(N,b[i])){L=i;break}L===void 0?Je(N,V,C,!0):(W[L-Ce]=z+1,L>=R?R=L:k=!0,_(N,b[L],A,null,V,C,re,oe,ne),y++)}const p=k?qd(W):Oo;for(i=p.length-1,z=T-1;z>=0;z--){const N=Ce+z,L=b[N],j=b[N+1],D=N+1<_e?j.el||lc(j):O;W[z]===0?_(null,L,A,D,V,C,re,oe,ne):k&&(i<0||z!==p[i]?Ge(L,A,D,2):i--)}}},Ge=(v,b,A,O,V=null)=>{const{el:C,type:re,transition:oe,children:ne,shapeFlag:z}=v;if(z&6){Ge(v.component.subTree,b,A,O);return}if(z&128){v.suspense.move(b,A,O);return}if(z&64){re.move(v,b,A,me);return}if(re===we){a(C,b,A);for(let te=0;te<ne.length;te++)Ge(ne[te],b,A,O);a(v.anchor,b,A);return}if(re===Ha){J(v,b,A);return}if(O!==2&&z&1&&oe)if(O===0)oe.persisted&&!C[Rn]?a(C,b,A):(oe.beforeEnter(C),a(C,b,A),dn(()=>oe.enter(C),V));else{const{leave:te,delayLeave:fe,afterLeave:xe}=oe,Ce=()=>{v.ctx.isUnmounted?r(C):a(C,b,A)},Oe=()=>{const i=C._isLeaving||!!C[Rn];C._isLeaving&&C[Rn](!0),oe.persisted&&!i?Ce():te(C,()=>{Ce(),xe&&xe()})};fe?fe(C,Ce,Oe):Oe()}else a(C,b,A)},Je=(v,b,A,O=!1,V=!1)=>{const{type:C,props:re,ref:oe,children:ne,dynamicChildren:z,shapeFlag:_e,patchFlag:te,dirs:fe,cacheIndex:xe,memo:Ce}=v;if(te===-2&&(V=!1),oe!=null&&(eo(),ca(oe,null,A,v,!0),no()),xe!=null&&(b.renderCache[xe]=void 0),_e&256){b.ctx.deactivate(v);return}const Oe=_e&1&&fe,i=!Vo(v);let y;if(i&&(y=re&&re.onVnodeBeforeUnmount)&&Ln(y,b,v),_e&6)We(v.component,A,O);else{if(_e&128){v.suspense.unmount(A,O);return}Oe&&bo(v,null,b,"beforeUnmount"),_e&64?v.type.remove(v,b,A,me,O):z&&!z.hasOnce&&(C!==we||te>0&&te&64)?Ye(z,b,A,!1,!0):(C===we&&te&384||!V&&_e&16)&&Ye(ne,b,A),O&&_n(v)}const T=Ce!=null&&xe==null;(i&&(y=re&&re.onVnodeUnmounted)||Oe||T)&&dn(()=>{y&&Ln(y,b,v),Oe&&bo(v,null,b,"unmounted"),T&&(v.el=null)},A)},_n=v=>{const{type:b,el:A,anchor:O,transition:V}=v;if(b===we){Cn(A,O);return}if(b===Ha){Q(v);return}const C=()=>{r(A),V&&!V.persisted&&V.afterLeave&&V.afterLeave()};if(v.shapeFlag&1&&V&&!V.persisted){const{leave:re,delayLeave:oe}=V,ne=()=>re(A,C);oe?oe(v.el,C,ne):ne()}else C()},Cn=(v,b)=>{let A;for(;v!==b;)A=f(v),r(v),v=A;r(b)},We=(v,b,A)=>{const{bum:O,scope:V,job:C,subTree:re,um:oe,m:ne,a:z}=v;wi(ne),wi(z),O&&za(O),V.stop(),C&&(C.flags|=8,Je(re,v,b,A)),oe&&dn(oe,b),dn(()=>{v.isUnmounted=!0},b)},Ye=(v,b,A,O=!1,V=!1,C=0)=>{for(let re=C;re<v.length;re++)Je(v[re],b,A,O,V)},P=v=>{if(v.shapeFlag&6)return P(v.component.subTree);if(v.shapeFlag&128)return v.suspense.next();const b=f(v.anchor||v.el),A=b&&b[Ol];return A?f(A):b};let se=!1;const X=(v,b,A)=>{let O;v==null?b._vnode&&(Je(b._vnode,null,null,!0),O=b._vnode.component):_(b._vnode||null,v,b,null,null,null,A),b._vnode=v,se||(se=!0,vi(O),wl(),se=!1)},me={p:_,um:Je,m:Ge,r:_n,mt:G,mc:q,pc:Be,pbc:ae,n:P,o:e};return{render:X,hydrate:void 0,createApp:Nd(X)}}function jr({type:e,props:n},o){return o==="svg"&&e==="foreignObject"||o==="mathml"&&e==="annotation-xml"&&n&&n.encoding&&n.encoding.includes("html")?void 0:o}function _o({effect:e,job:n},o){o?(e.flags|=32,n.flags|=4):(e.flags&=-33,n.flags&=-5)}function Ld(e,n){return(!e||e&&!e.pendingBranch)&&n&&!n.persisted}function ei(e,n,o=!1){const a=e.children,r=n.children;if(Ne(a)&&Ne(r))for(let t=0;t<a.length;t++){const s=a[t];let l=r[t];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=r[t]=Jn(r[t]),l.el=s.el),!o&&l.patchFlag!==-2&&ei(s,l)),l.type===Nr&&(l.patchFlag===-1&&(l=r[t]=Jn(l)),l.el=s.el),l.type===tn&&!l.el&&(l.el=s.el)}}function qd(e){const n=e.slice(),o=[0];let a,r,t,s,l;const c=e.length;for(a=0;a<c;a++){const d=e[a];if(d!==0){if(r=o[o.length-1],e[r]<d){n[a]=r,o.push(a);continue}for(t=0,s=o.length-1;t<s;)l=t+s>>1,e[o[l]]<d?t=l+1:s=l;d<e[o[t]]&&(t>0&&(n[a]=o[t-1]),o[t]=a)}}for(t=o.length,s=o[t-1];t-- >0;)o[t]=s,s=n[s];return o}function sc(e){const n=e.subTree.component;if(n)return n.asyncDep&&!n.asyncResolved?n:sc(n)}function wi(e){if(e)for(let n=0;n<e.length;n++)e[n].flags|=8}function lc(e){if(e.placeholder)return e.placeholder;const n=e.component;return n?lc(n.subTree):null}const cc=e=>e.__isSuspense;function $d(e,n){n&&n.pendingBranch?Ne(e)?n.effects.push(...e):n.effects.push(e):Ku(e)}const we=Symbol.for("v-fgt"),Nr=Symbol.for("v-txt"),tn=Symbol.for("v-cmt"),Ha=Symbol.for("v-stc"),Zn=[];let yn=null;function S(e=!1){Zn.push(yn=e?null:[])}function ni(){Zn.pop(),yn=Zn[Zn.length-1]||null}let ga=1;function Xa(e,n=!1){ga+=e,e<0&&yn&&n&&(yn.hasOnce=!0)}function uc(e){return e.dynamicChildren=ga>0?yn||Oo:null,ni(),ga>0&&yn&&yn.push(e),e}function U(e,n,o,a,r,t){return uc(g(e,n,o,a,r,t,!0))}function Pe(e,n,o,a,r){return uc($(e,n,o,a,r,!0))}function ba(e){return e?e.__v_isVNode===!0:!1}function Ro(e,n){return e.type===n.type&&e.key===n.key}const dc=({key:e})=>e??null,Ua=({ref:e,ref_key:n,ref_for:o})=>(typeof e=="number"&&(e=""+e),e!=null?ze(e)||ln(e)||Se(e)?{i:nn,r:e,k:n,f:!!o}:e:null);function g(e,n=null,o=null,a=0,r=null,t=e===we?0:1,s=!1,l=!1){const c={__v_isVNode:!0,__v_skip:!0,type:e,props:n,key:n&&dc(n),ref:n&&Ua(n),scopeId:Il,slotScopeIds:null,children:o,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:t,patchFlag:a,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:nn};return l?(Za(c,o),t&128&&e.normalize(c)):o&&(c.shapeFlag|=ze(o)?8:16),ga>0&&!s&&yn&&(c.patchFlag>0||t&6)&&c.patchFlag!==32&&yn.push(c),c}const $=Md;function Md(e,n=null,o=null,a=0,r=null,t=!1){if((!e||e===Ul)&&(e=tn),ba(e)){const l=ho(e,n,!0);return o&&Za(l,o),ga>0&&!t&&yn&&(l.shapeFlag&6?yn[yn.indexOf(e)]=l:yn.push(l)),l.patchFlag=-2,l}if(Qd(e)&&(e=e.__vccOpts),n){n=kn(n);let{class:l,style:c}=n;l&&!ze(l)&&(n.class=an(l)),Le(c)&&(Yt(c)&&!Ne(c)&&(c=Xe({},c)),n.style=fr(c))}const s=ze(e)?1:cc(e)?128:gr(e)?64:Le(e)?4:Se(e)?2:0;return g(e,n,o,a,r,s,t,!0)}function kn(e){return e?Yt(e)||nc(e)?Xe({},e):e:null}function ho(e,n,o=!1,a=!1){const{props:r,ref:t,patchFlag:s,children:l,transition:c}=e,d=n?wt(r||{},n):r,u={__v_isVNode:!0,__v_skip:!0,type:e.type,props:d,key:d&&dc(d),ref:n&&n.ref?o&&t?Ne(t)?t.concat(Ua(n)):[t,Ua(n)]:Ua(n):t,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:l,target:e.target,targetStart:e.targetStart,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:n&&e.type!==we?s===-1?16:s|16:s,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:c,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&ho(e.ssContent),ssFallback:e.ssFallback&&ho(e.ssFallback),placeholder:e.placeholder,el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return c&&a&&va(u,c.clone(u)),u}function Re(e=" ",n=0){return $(Nr,null,e,n)}function Fd(e,n){const o=$(Ha,null,e);return o.staticCount=n,o}function ve(e="",n=!1){return n?(S(),Pe(tn,null,e)):$(tn,null,e)}function Mn(e){return e==null||typeof e=="boolean"?$(tn):Ne(e)?$(we,null,e.slice()):ba(e)?Jn(e):$(Nr,null,String(e))}function Jn(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:ho(e)}function Za(e,n){let o=0;const{shapeFlag:a}=e;if(n==null)n=null;else if(Ne(n))o=16;else if(typeof n=="object")if(a&65){const r=n.default;r&&(r._c&&(r._d=!1),Za(e,r()),r._c&&(r._d=!0));return}else{o=32;const r=n._;!r&&!nc(n)?n._ctx=nn:r===3&&nn&&(nn.slots._===1?n._=1:(n._=2,e.patchFlag|=1024))}else if(Se(n)){if(a&65){Za(e,{default:n});return}n={default:n,_ctx:nn},o=32}else n=String(n),a&64?(o=16,n=[Re(n)]):o=8;e.children=n,e.shapeFlag|=o}function wt(...e){const n={};for(let o=0;o<e.length;o++){const a=e[o];for(const r in a)if(r==="class")n.class!==a.class&&(n.class=an([n.class,a.class]));else if(r==="style")n.style=fr([n.style,a.style]);else if(lr(r)){const t=n[r],s=a[r];s&&t!==s&&!(Ne(t)&&t.includes(s))?n[r]=t?[].concat(t,s):s:s==null&&t==null&&!cr(r)&&(n[r]=s)}else r!==""&&(n[r]=a[r])}return n}function Ln(e,n,o,a=null){wn(e,n,7,[o,a])}const zd=Jl();let Hd=0;function Ud(e,n,o){const a=e.type,r=(n?n.appContext:e.appContext)||zd,t={uid:Hd++,vnode:e,type:a,parent:n,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new gu(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:n?n.provides:Object.create(r.provides),ids:n?n.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:ac(a,r),emitsOptions:Ql(a,r),emit:null,emitted:null,propsDefaults:Me,inheritAttrs:a.inheritAttrs,ctx:Me,data:Me,props:Me,attrs:Me,slots:Me,refs:Me,setupState:Me,setupContext:null,suspense:o,suspenseId:o?o.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return t.ctx={_:t},t.root=n?n.root:t,t.emit=Bd.bind(null,t),e.ce&&e.ce(t),t}let sn=null;const mc=()=>sn||nn;let er,_a;{const e=pr(),n=(o,a)=>{let r;return(r=e[o])||(r=e[o]=[]),r.push(a),t=>{r.length>1?r.forEach(s=>s(t)):r[0](t)}};er=n("__VUE_INSTANCE_SETTERS__",o=>sn=o),_a=n("__VUE_SSR_SETTERS__",o=>ya=o)}const wa=e=>{const n=sn;return er(e),e.scope.on(),()=>{e.scope.off(),er(n)}},Ci=()=>{sn&&sn.scope.off(),er(null)};function pc(e){return e.vnode.shapeFlag&4}let ya=!1;function Kd(e,n=!1,o=!1){n&&_a(n);const{props:a,children:r}=e.vnode,t=pc(e);Cd(e,a,t,n),Od(e,r,o||n);const s=t?Gd(e,n):void 0;return n&&_a(!1),s}function Gd(e,n){const o=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,hd);const{setup:a}=o;if(a){eo();const r=e.setupContext=a.length>1?Yd(e):null,t=wa(e),s=Ea(a,e,0,[e.props,r]),l=al(s);if(no(),t(),(l||e.sp)&&!Vo(e)&&Fl(e),l){if(s.then(Ci,Ci),n)return s.then(c=>{_a(!0);try{Ii(e,c,n)}finally{_a(!1)}}).catch(c=>{vr(c,e,0)});e.asyncDep=s}else Ii(e,s)}else fc(e)}function Ii(e,n,o){Se(n)?e.type.__ssrInlineRender?e.ssrRender=n:e.render=n:Le(n)&&(e.setupState=Tl(n)),fc(e)}function fc(e,n,o){const a=e.type;e.render||(e.render=a.render||Hn);{const r=wa(e);eo();try{vd(e)}finally{no(),r()}}}const Wd={get(e,n){return rn(e,"get",""),e[n]}};function Yd(e){const n=o=>{e.exposed=o||{}};return{attrs:new Proxy(e.attrs,Wd),slots:e.slots,emit:e.emit,expose:n}}function xr(e){return e.exposed?e.exposeProxy||(e.exposeProxy=new Proxy(Tl(Du(e.exposed)),{get(n,o){if(o in n)return n[o];if(o in ua)return ua[o](e)},has(n,o){return o in n||o in ua}})):e.proxy}function Jd(e,n=!0){return Se(e)?e.displayName||e.name:e.name||n&&e.__name}function Qd(e){return Se(e)&&"__vccOpts"in e}const qe=(e,n)=>Mu(e,n,ya);function $o(e,n,o){try{Xa(-1);const a=arguments.length;return a===2?Le(n)&&!Ne(n)?ba(n)?$(e,null,[n]):$(e,n):$(e,null,n):(a>3?o=Array.prototype.slice.call(arguments,2):a===3&&ba(o)&&(o=[o]),$(e,n,o))}finally{Xa(1)}}const Xd="3.5.41";let Ct;const ki=typeof window<"u"&&window.trustedTypes;if(ki)try{Ct=ki.createPolicy("vue",{createHTML:e=>e})}catch{}const hc=Ct?e=>Ct.createHTML(e):e=>e,Zd="http://www.w3.org/2000/svg",em="http://www.w3.org/1998/Math/MathML",Yn=typeof document<"u"?document:null,Pi=Yn&&Yn.createElement("template"),nm={insert:(e,n,o)=>{n.insertBefore(e,o||null)},remove:e=>{const n=e.parentNode;n&&n.removeChild(e)},createElement:(e,n,o,a)=>{const r=n==="svg"?Yn.createElementNS(Zd,e):n==="mathml"?Yn.createElementNS(em,e):o?Yn.createElement(e,{is:o}):Yn.createElement(e);return e==="select"&&a&&a.multiple!=null&&r.setAttribute("multiple",a.multiple),r},createText:e=>Yn.createTextNode(e),createComment:e=>Yn.createComment(e),setText:(e,n)=>{e.nodeValue=n},setElementText:(e,n)=>{e.textContent=n},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>Yn.querySelector(e),setScopeId(e,n){e.setAttribute(n,"")},insertStaticContent(e,n,o,a,r,t){const s=o?o.previousSibling:n.lastChild;if(r&&(r===t||r.nextSibling))for(;n.insertBefore(r.cloneNode(!0),o),!(r===t||!(r=r.nextSibling)););else{Pi.innerHTML=hc(a==="svg"?`<svg>${e}</svg>`:a==="mathml"?`<math>${e}</math>`:e);const l=Pi.content;if(a==="svg"||a==="mathml"){const c=l.firstChild;for(;c.firstChild;)l.appendChild(c.firstChild);l.removeChild(c)}n.insertBefore(l,o)}return[s?s.nextSibling:n.firstChild,o?o.previousSibling:n.lastChild]}},to="transition",Xo="animation",Aa=Symbol("_vtc"),vc={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},om=Xe({},Dl,vc),am=e=>(e.displayName="Transition",e.props=om,e),rm=am((e,{slots:n})=>$o(nd,tm(e),n)),yo=(e,n=[])=>{Ne(e)?e.forEach(o=>o(...n)):e&&e(...n)},Oi=e=>e?Ne(e)?e.some(n=>n.length>1):e.length>1:!1;function tm(e){const n={};for(const M in e)M in vc||(n[M]=e[M]);if(e.css===!1)return n;const{name:o="v",type:a,duration:r,enterFromClass:t=`${o}-enter-from`,enterActiveClass:s=`${o}-enter-active`,enterToClass:l=`${o}-enter-to`,appearFromClass:c=t,appearActiveClass:d=s,appearToClass:u=l,leaveFromClass:m=`${o}-leave-from`,leaveActiveClass:f=`${o}-leave-active`,leaveToClass:h=`${o}-leave-to`}=e,x=im(r),_=x&&x[0],E=x&&x[1],{onBeforeEnter:I,onEnter:w,onEnterCancelled:J,onLeave:Q,onLeaveCancelled:pe,onBeforeAppear:ue=I,onAppear:Z=w,onAppearCancelled:q=J}=n,B=(M,H,G,ye)=>{M._enterCancelled=ye,Ao(M,H?u:l),Ao(M,H?d:s),G&&G()},ae=(M,H)=>{M._isLeaving=!1,Ao(M,m),Ao(M,h),Ao(M,f),H&&H()},de=M=>(H,G)=>{const ye=M?Z:w,F=()=>B(H,M,G);yo(ye,[H,F]),ji(()=>{Ao(H,M?c:t),Gn(H,M?u:l),Oi(ye)||Di(H,a,_,F)})};return Xe(n,{onBeforeEnter(M){yo(I,[M]),Gn(M,t),Gn(M,s)},onBeforeAppear(M){yo(ue,[M]),Gn(M,c),Gn(M,d)},onEnter:de(!1),onAppear:de(!0),onLeave(M,H){M._isLeaving=!0;const G=()=>ae(M,H);Gn(M,m),M._enterCancelled?(Gn(M,f),qi(M)):(qi(M),Gn(M,f)),ji(()=>{M._isLeaving&&(Ao(M,m),Gn(M,h),Oi(Q)||Di(M,a,E,G))}),yo(Q,[M,G])},onEnterCancelled(M){B(M,!1,void 0,!0),yo(J,[M])},onAppearCancelled(M){B(M,!0,void 0,!0),yo(q,[M])},onLeaveCancelled(M){ae(M),yo(pe,[M])}})}function im(e){if(e==null)return null;if(Le(e))return[Dr(e.enter),Dr(e.leave)];{const n=Dr(e);return[n,n]}}function Dr(e){return cu(e)}function Gn(e,n){n.split(/\s+/).forEach(o=>o&&e.classList.add(o)),(e[Aa]||(e[Aa]=new Set)).add(n)}function Ao(e,n){n.split(/\s+/).forEach(a=>a&&e.classList.remove(a));const o=e[Aa];o&&(o.delete(n),o.size||(e[Aa]=void 0))}function ji(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}let sm=0;function Di(e,n,o,a){const r=e._endId=++sm,t=()=>{r===e._endId&&a()};if(o!=null)return setTimeout(t,o);const{type:s,timeout:l,propCount:c}=lm(e,n);if(!s)return a();const d=s+"end";let u=0;const m=()=>{e.removeEventListener(d,f),t()},f=h=>{h.target===e&&++u>=c&&m()};setTimeout(()=>{u<c&&m()},l+1),e.addEventListener(d,f)}function lm(e,n){const o=window.getComputedStyle(e),a=x=>(o[x]||"").split(", "),r=a(`${to}Delay`),t=a(`${to}Duration`),s=Vi(r,t),l=a(`${Xo}Delay`),c=a(`${Xo}Duration`),d=Vi(l,c);let u=null,m=0,f=0;n===to?s>0&&(u=to,m=s,f=t.length):n===Xo?d>0&&(u=Xo,m=d,f=c.length):(m=Math.max(s,d),u=m>0?s>d?to:Xo:null,f=u?u===to?t.length:c.length:0);const h=u===to&&/\b(?:transform|all)(?:,|$)/.test(a(`${to}Property`).toString());return{type:u,timeout:m,propCount:f,hasTransform:h}}function Vi(e,n){for(;e.length<n.length;)e=e.concat(e);return Math.max(...n.map((o,a)=>Li(o)+Li(e[a])))}function Li(e){return e==="auto"?0:Number(e.slice(0,-1).replace(",","."))*1e3}function qi(e){return(e?e.ownerDocument:document).body.offsetHeight}function cm(e,n,o){const a=e[Aa];a&&(n=(n?[n,...a]:[...a]).join(" ")),n==null?e.removeAttribute("class"):o?e.setAttribute("class",n):e.className=n}const nr=Symbol("_vod"),gc=Symbol("_vsh"),$i={name:"show",beforeMount(e,{value:n},{transition:o}){e[nr]=e.style.display==="none"?"":e.style.display,o&&n?o.beforeEnter(e):Zo(e,n)},mounted(e,{value:n},{transition:o}){o&&n&&o.enter(e)},updated(e,{value:n,oldValue:o},{transition:a}){!n!=!o&&(a?n?(a.beforeEnter(e),Zo(e,!0),a.enter(e)):a.leave(e,()=>{Zo(e,!1)}):Zo(e,n))},beforeUnmount(e,{value:n}){Zo(e,n)}};function Zo(e,n){e.style.display=n?e[nr]:"none",e[gc]=!n}const um=Symbol(""),dm=/(?:^|;)\s*display\s*:/;function mm(e,n,o){const a=e.style,r=ze(o);let t=!1;if(o&&!r){if(n)if(ze(n))for(const s of n.split(";")){const l=s.slice(0,s.indexOf(":")).trim();o[l]==null&&ra(a,l,"")}else for(const s in n)o[s]==null&&ra(a,s,"");for(const s in o){s==="display"&&(t=!0);const l=o[s];l!=null?fm(e,s,!ze(n)&&n?n[s]:void 0,l)||ra(a,s,l):ra(a,s,"")}}else if(r){if(n!==o){const s=a[um];s&&(o+=";"+s),a.cssText=o,t=dm.test(o)}}else n&&e.removeAttribute("style");nr in e&&(e[nr]=t?a.display:"",e[gc]&&(a.display="none"))}const Mi=/\s*!important$/;function ra(e,n,o){if(Ne(o))o.forEach(a=>ra(e,n,a));else if(o==null&&(o=""),n.startsWith("--"))e.setProperty(n,o);else{const a=pm(e,n);Mi.test(o)?e.setProperty(go(a),o.replace(Mi,""),"important"):e[a]=o}}const Fi=["Webkit","Moz","ms"],Vr={};function pm(e,n){const o=Vr[n];if(o)return o;let a=hn(n);if(a!=="filter"&&a in e)return Vr[n]=a;a=dr(a);for(let r=0;r<Fi.length;r++){const t=Fi[r]+a;if(t in e)return Vr[n]=t}return n}function fm(e,n,o,a){return e.tagName==="TEXTAREA"&&(n==="width"||n==="height")&&ze(a)&&o===a}const zi="http://www.w3.org/1999/xlink";function Hi(e,n,o,a,r,t=hu(n)){a&&n.startsWith("xlink:")?o==null?e.removeAttributeNS(zi,n.slice(6,n.length)):e.setAttributeNS(zi,n,o):o==null||t&&!sl(o)?e.removeAttribute(n):e.setAttribute(n,t?"":jn(o)?String(o):o)}function Ui(e,n,o,a,r){if(n==="innerHTML"||n==="textContent"){o!=null&&(e[n]=n==="innerHTML"?hc(o):o);return}const t=e.tagName;if(n==="value"&&t!=="PROGRESS"&&!t.includes("-")){const l=t==="OPTION"?e.getAttribute("value")||"":e.value,c=o==null?e.type==="checkbox"?"on":"":String(o);(l!==c||!("_value"in e))&&(e.value=c),o==null&&e.removeAttribute(n),e._value=o;return}let s=!1;if(o===""||o==null){const l=typeof e[n];l==="boolean"?o=sl(o):o==null&&l==="string"?(o="",s=!0):l==="number"&&(o=0,s=!0)}try{e[n]=o}catch{}s&&e.removeAttribute(r||n)}function mo(e,n,o,a){e.addEventListener(n,o,a)}function hm(e,n,o,a){e.removeEventListener(n,o,a)}const Ki=Symbol("_vei");function vm(e,n,o,a,r=null){const t=e[Ki]||(e[Ki]={}),s=t[n];if(a&&s)s.value=a;else{const[l,c]=_m(n);if(a){const d=t[n]=Nm(a,r);mo(e,l,d,c)}else s&&(hm(e,l,s,c),t[n]=void 0)}}const gm=/(Once|Passive|Capture)$/,bm=/^on:?(?:Once|Passive|Capture)$/;function _m(e){let n,o;for(;(o=e.match(gm))&&!bm.test(e);)n||(n={}),e=e.slice(0,e.length-o[1].length),n[o[1].toLowerCase()]=!0;return[e[2]===":"?e.slice(3):go(e.slice(2)),n]}let Lr=0;const ym=Promise.resolve(),Am=()=>Lr||(ym.then(()=>Lr=0),Lr=Date.now());function Nm(e,n){const o=a=>{if(!a._vts)a._vts=Date.now();else if(a._vts<=o.attached)return;const r=o.value;if(Ne(r)){const t=a.stopImmediatePropagation;a.stopImmediatePropagation=()=>{t.call(a),a._stopped=!0};const s=r.slice(),l=[a];for(let c=0;c<s.length&&!a._stopped;c++){const d=s[c];d&&wn(d,n,5,l)}}else wn(r,n,5,[a])};return o.value=e,o.attached=Am(),o}const Gi=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,xm=(e,n,o,a,r,t)=>{const s=r==="svg";n==="class"?cm(e,a,s):n==="style"?mm(e,o,a):lr(n)?cr(n)||vm(e,n,o,a,t):(n[0]==="."?(n=n.slice(1),!0):n[0]==="^"?(n=n.slice(1),!1):Bm(e,n,a,s))?(Ui(e,n,a),!e.tagName.includes("-")&&(n==="value"||n==="checked"||n==="selected")&&Hi(e,n,a,s,t,n!=="value")):e._isVueCE&&(Rm(e,n)||e._def.__asyncLoader&&(/[A-Z]/.test(n)||!ze(a)))?Ui(e,hn(n),a,t,n):(n==="true-value"?e._trueValue=a:n==="false-value"&&(e._falseValue=a),Hi(e,n,a,s))};function Bm(e,n,o,a){if(a)return!!(n==="innerHTML"||n==="textContent"||n in e&&Gi(n)&&Se(o));if(n==="spellcheck"||n==="draggable"||n==="translate"||n==="autocorrect"||n==="sandbox"&&e.tagName==="IFRAME"||n==="form"||n==="list"&&e.tagName==="INPUT"||n==="type"&&e.tagName==="TEXTAREA")return!1;if(n==="width"||n==="height"){const r=e.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return Gi(n)&&ze(o)?!1:n in e}function Rm(e,n){const o=e._def.props;if(!o)return!1;const a=hn(n);return Array.isArray(o)?o.some(r=>hn(r)===a):Object.keys(o).some(r=>hn(r)===a)}const Mo=e=>{const n=e.props["onUpdate:modelValue"]||!1;return Ne(n)?o=>za(n,o):n};function Tm(e){e.target.composing=!0}function Wi(e){const n=e.target;n.composing&&(n.composing=!1,n.dispatchEvent(new Event("input")))}const zn=Symbol("_assign"),La=Symbol("_initialValue");function qr(e,n,o){return n&&(e=e.trim()),o&&(e=mr(e)),e}const or={created(e,{modifiers:{lazy:n,trim:o,number:a}},r){e.parentNode&&(e.type==="text"?e[La]=e.defaultValue.replace(/[\r\n]/g,""):e.type==="textarea"&&(e[La]=e.defaultValue.replace(/\r\n?/g,`
`))),e[zn]=Mo(r);const t=a||r.props&&r.props.type==="number";mo(e,n?"change":"input",s=>{s.target.composing||e[zn](qr(e.value,o,t))}),(o||t)&&mo(e,"change",()=>{e.value=qr(e.value,o,t)}),n||(mo(e,"compositionstart",Tm),mo(e,"compositionend",Wi),mo(e,"change",Wi))},mounted(e,{value:n,modifiers:{trim:o,number:a}}){const r=n??"",t=e[La];delete e[La],t!==void 0&&(e.type==="text"||e.type==="textarea")&&e.value!==t?e[zn](qr(e.value,o,a)):e.value=r},beforeUpdate(e,{value:n,oldValue:o,modifiers:{lazy:a,trim:r,number:t}},s){if(e[zn]=Mo(s),e.composing)return;const l=(t||e.type==="number")&&!/^0\d/.test(e.value)?mr(e.value):e.value,c=n??"";if(l===c)return;const d=e.getRootNode();(d instanceof Document||d instanceof ShadowRoot)&&d.activeElement===e&&e.type!=="range"&&(a&&n===o||r&&e.value.trim()===c)||(e.value=c)}},Sm={deep:!0,created(e,n,o){e[zn]=Mo(o),mo(e,"change",()=>{const a=e._modelValue,r=Na(e),t=e.checked,s=e[zn];if(Ne(a)){const l=Ft(a,r),c=l!==-1;if(t&&!c)s(a.concat(r));else if(!t&&c){const d=[...a];d.splice(l,1),s(d)}}else if(Uo(a)){const l=new Set(a);t?l.add(r):l.delete(r),s(l)}else s(bc(e,t))})},mounted:Yi,beforeUpdate(e,n,o){e[zn]=Mo(o),Yi(e,n,o)}};function Yi(e,{value:n,oldValue:o},a){e._modelValue=n;let r;if(Ne(n))r=Ft(n,a.props.value)>-1;else if(Uo(n))r=n.has(a.props.value);else{if(n===o)return;r=Ko(n,bc(e,!0))}e.checked!==r&&(e.checked=r)}const $r={deep:!0,created(e,{value:n,modifiers:{number:o}},a){e._modelValue=n,mo(e,"change",()=>{const r=Array.prototype.filter.call(e.options,t=>t.selected).map(t=>o?mr(Na(t)):Na(t));e[zn](e.multiple?Uo(e._modelValue)?new Set(r):r:r[0]),e._assigning=!0,An(()=>{e._assigning=!1})}),e[zn]=Mo(a)},mounted(e,{value:n}){Ji(e,n)},beforeUpdate(e,{value:n},o){e._modelValue=n,e[zn]=Mo(o)},updated(e,{value:n}){e._assigning||Ji(e,n)}};function Ji(e,n){const o=e.multiple,a=Ne(n);if(!(o&&!a&&!Uo(n))){for(let r=0,t=e.options.length;r<t;r++){const s=e.options[r],l=Na(s);if(o)if(a){const c=typeof l;c==="string"||c==="number"?s.selected=n.some(d=>String(d)===String(l)):s.selected=Ft(n,l)>-1}else s.selected=n.has(l);else if(Ko(Na(s),n)){e.selectedIndex!==r&&(e.selectedIndex=r);return}}!o&&e.selectedIndex!==-1&&(e.selectedIndex=-1)}}function Na(e){return"_value"in e?e._value:e.value}function bc(e,n){const o=n?"_trueValue":"_falseValue";return o in e?e[o]:n}const Em=["ctrl","shift","alt","meta"],wm={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&e.button!==0,middle:e=>"button"in e&&e.button!==1,right:e=>"button"in e&&e.button!==2,exact:(e,n)=>Em.some(o=>e[`${o}Key`]&&!n.includes(o))},vo=(e,n)=>{if(!e)return e;const o=e._withMods||(e._withMods={}),a=n.join(".");return o[a]||(o[a]=((r,...t)=>{for(let s=0;s<n.length;s++){const l=wm[n[s]];if(l&&l(r,n))return}return e(r,...t)}))},Cm={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},oi=(e,n)=>{const o=e._withKeys||(e._withKeys={}),a=n.join(".");return o[a]||(o[a]=(r=>{if(!("key"in r))return;const t=go(r.key);if(n.some(s=>s===t||Cm[s]===t))return e(r)}))},Im=Xe({patchProp:xm},nm);let Qi;function km(){return Qi||(Qi=Dd(Im))}const Pm=((...e)=>{const n=km().createApp(...e),{mount:o}=n;return n.mount=a=>{const r=jm(a);if(!r)return;const t=n._component;!Se(t)&&!t.render&&!t.template&&(t.template=r.innerHTML),r.nodeType===1&&(r.textContent="");const s=o(r,!1,Om(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),s},n});function Om(e){if(e instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&e instanceof MathMLElement)return"mathml"}function jm(e){return ze(e)?document.querySelector(e):e}const Dm="modulepreload",Vm=function(e){return"/Extensao-26.2/"+e},Xi={},Lm=function(n,o,a){let r=Promise.resolve();if(o&&o.length>0){let d=function(u){return Promise.all(u.map(m=>Promise.resolve(m).then(f=>({status:"fulfilled",value:f}),f=>({status:"rejected",reason:f}))))};var s=d;document.getElementsByTagName("link");const l=document.querySelector("meta[property=csp-nonce]"),c=l?.nonce||l?.getAttribute("nonce");r=d(o.map(u=>{if(u=Vm(u),u in Xi)return;Xi[u]=!0;const m=u.endsWith(".css"),f=m?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${u}"]${f}`))return;const h=document.createElement("link");if(h.rel=m?"stylesheet":Dm,m||(h.as="script"),h.crossOrigin="",h.href=u,c&&h.setAttribute("nonce",c),document.head.appendChild(h),m)return new Promise((x,_)=>{h.addEventListener("load",x),h.addEventListener("error",()=>_(new Error(`Unable to preload CSS for ${u}`)))})}))}function t(l){const c=new Event("vite:preloadError",{cancelable:!0});if(c.payload=l,window.dispatchEvent(c),!c.defaultPrevented)throw l}return r.then(l=>{for(const c of l||[])c.status==="rejected"&&t(c.reason);return n().catch(t)})};function qm(e={}){const{immediate:n=!1,onNeedReload:o,onNeedRefresh:a,onOfflineReady:r,onRegistered:t,onRegisteredSW:s,onRegisterError:l}=e;let c,d;const u=async(f=!0)=>{await d};async function m(){if("serviceWorker"in navigator){if(c=await Lm(async()=>{const{Workbox:f}=await import("./workbox-window.prod.es5-BBnX5xw4.js");return{Workbox:f}},[]).then(({Workbox:f})=>new f("/Extensao-26.2/sw.js",{scope:"/Extensao-26.2/",type:"classic"})).catch(f=>{l?.(f)}),!c)return;c.addEventListener("activated",f=>{(f.isUpdate||f.isExternal)&&(o?o():window.location.reload())}),c.addEventListener("installed",f=>{f.isUpdate||r?.()}),c.register({immediate:n}).then(f=>{s?s("/Extensao-26.2/sw.js",f):t?.(f)}).catch(f=>{l?.(f)})}}return d=m(),u}const $m="acessibilidade-checker",Mm=2,mn=Object.freeze({projects:"projects",environments:"environments",elements:"elements",evaluations:"evaluations",ruleSets:"ruleSets"});function ko(e){return new Promise((n,o)=>{e.onsuccess=()=>n(e.result),e.onerror=()=>o(e.error??new Error("Falha no IndexedDB."))})}function Fm(e=globalThis.indexedDB){if(!e)return Promise.reject(new Error("IndexedDB não está disponível neste ambiente."));const n=e.open($m,Mm);return n.onupgradeneeded=()=>{const o=n.result;if(o.objectStoreNames.contains(mn.projects)||o.createObjectStore(mn.projects,{keyPath:"id"}),o.objectStoreNames.contains(mn.environments)||o.createObjectStore(mn.environments,{keyPath:"id"}).createIndex("projectId","projectId",{unique:!1}),o.objectStoreNames.contains(mn.elements)||o.createObjectStore(mn.elements,{keyPath:"id"}).createIndex("environmentId","environmentId",{unique:!1}),!o.objectStoreNames.contains(mn.evaluations)){const a=o.createObjectStore(mn.evaluations,{keyPath:"id"});a.createIndex("elementId","elementId",{unique:!1}),a.createIndex("evaluatedAt","evaluatedAt",{unique:!1})}o.objectStoreNames.contains(mn.ruleSets)||o.createObjectStore(mn.ruleSets,{keyPath:"id"})},ko(n)}async function ea(e,n,o,a){const r=e.transaction(n,o),t=r.objectStore(n),s=await a(t);return await new Promise((l,c)=>{r.oncomplete=l,r.onabort=r.onerror=()=>c(r.error??new Error("Transação IndexedDB não concluída."))}),s}class Ca{constructor(n,o){this.database=n,this.storeName=o}get(n){return ea(this.database,this.storeName,"readonly",o=>ko(o.get(n)))}getAll(){return ea(this.database,this.storeName,"readonly",n=>ko(n.getAll()))}getAllBy(n,o){return ea(this.database,this.storeName,"readonly",a=>ko(a.index(n).getAll(o)))}put(n){return ea(this.database,this.storeName,"readwrite",async o=>(await ko(o.put(n)),n))}delete(n){return ea(this.database,this.storeName,"readwrite",o=>ko(o.delete(n)))}}class zm extends Ca{constructor(n){super(n,mn.elements)}getByEnvironmentId(n){return this.getAllBy("environmentId",n)}}class Hm extends Ca{constructor(n){super(n,mn.environments)}getByProjectId(n){return this.getAllBy("projectId",n)}}class Um extends Ca{constructor(n){super(n,mn.evaluations)}getByElementId(n){return this.getAllBy("elementId",n)}}class Km extends Ca{constructor(n){super(n,mn.projects)}}class Gm extends Ca{constructor(n){super(n,mn.ruleSets)}}const Wm=new Set([">=","<=",">","<","==","!="]);function ar(e,n,o){switch(n){case">=":return e>=o;case"<=":return e<=o;case">":return e>o;case"<":return e<o;case"==":return e===o;case"!=":return e!==o;default:throw new Error(`Operador não suportado: ${n}`)}}function Ym(e,n){return n.obrigatorio&&(e==null||e==="")?{valid:!1,motivo:"obrigatorio",reason:"Campo obrigatório não preenchido."}:e==null||e===""?{valid:!0}:n.tipo==="number"&&typeof e!="number"?{valid:!1,motivo:"tipo",reason:"O valor deve ser numérico."}:n.tipo==="boolean"&&typeof e!="boolean"?{valid:!1,motivo:"tipo",reason:"O valor deve ser booleano."}:{valid:!0}}function _c(e,n){for(const o of e?.condicoes??[])if(o?.quando&&ar(n,o.quando.operador,o.quando.valor)&&(o.resultado||o.verificar))return o}class Jm{evaluate(n,o,a={}){return n.map(r=>this.evaluateRule(r,o,a))}evaluateRule(n,o,a){const r=a[n.parametro],t=o[n.parametro];if(!r)return{id:n.id,parametro:n.parametro,status:"erro",mensagem:`Parâmetro não definido: ${n.parametro}`};const s=Ym(t,r);if(!s.valid)return{id:n.id,nome:n.nome,parametro:n.parametro,status:"invalido",motivo:s.motivo,mensagem:s.reason,referencia:n.referencia};if(t==null||t==="")return{id:n.id,nome:n.nome,parametro:n.parametro,status:"nao_avaliado",referencia:n.referencia};if(n.tipo==="checklist")return r.tipo==="boolean"?{id:n.id,nome:n.nome,status:t?"conforme":"nao_conforme",valorInformado:t,valorEsperado:!0,operador:"==",parametro:n.parametro,unidade:r.unidade,referencia:n.referencia}:{id:n.id,nome:n.nome,status:"manual",valor:t,mensagem:n.mensagem,referencia:n.referencia};if(n.tipo==="conditional")return this.evaluateConditional(n,o,a);const l=ar(t,n.operador,n.valor);return{id:n.id,nome:n.nome,status:l?"conforme":"nao_conforme",valorInformado:t,valorEsperado:n.valor,operador:n.operador,parametro:n.parametro,unidade:r.unidade,referencia:n.referencia}}evaluateConditional(n,o,a){const r=o[n.parametro],t=r!=null&&r!=="",s=_c(n,r);if(s?.resultado)return{id:n.id,nome:n.nome,status:s.resultado,valorInformado:r,referencia:n.referencia,mensagem:s.mensagem};if(s?.verificar){const l=o[s.verificar.parametro],c=ar(l,s.verificar.operador,s.verificar.valor);return{id:n.id,nome:n.nome,status:c?"conforme":"nao_conforme",valorInformado:l,valorEsperado:s.verificar.valor,operador:s.verificar.operador,parametro:s.verificar.parametro,unidade:a[s.verificar.parametro]?.unidade,parametroCondicional:n.parametro,valorCondicional:r,operadorCondicional:s.quando.operador,limiteCondicional:s.quando.valor,mensagem:s.mensagem,referencia:n.referencia}}return t?{id:n.id,nome:n.nome,parametro:n.parametro,status:"erro",mensagem:`Nenhuma condição cobre ${n.parametro} = ${r}. Revise o conjunto de regras.`,referencia:n.referencia}:{id:n.id,nome:n.nome,parametro:n.parametro,status:"nao_avaliado",referencia:n.referencia}}}const Qm={conforme:"Conforme",nao_conforme:"Não conforme",nao_avaliado:"Pendente",invalido:"Falta preencher",erro:"Erro no conjunto",atencao:"Atenção",manual:"Verificar"},Mr=[{id:"preencher",label:"aguardando medição",statuses:["invalido","nao_avaliado"]},{id:"verificar",label:"para verificar",statuses:["manual","atencao"]},{id:"erro",label:"com erro no conjunto",statuses:["erro"]}];function Xm(e){return Qm[e]??"Pendente"}function rr(e){return e==="nao_conforme"?"nao_conforme":e==="conforme"?"conforme":"pendente"}function Zm(e=[]){const n={conforme:0,nao_conforme:0,pendente:0},o=new Map(Mr.map(t=>[t.id,0]));for(const t of e){n[rr(t.status)]+=1;const s=Mr.find(l=>l.statuses.includes(t.status));s&&o.set(s.id,o.get(s.id)+1)}const a=Mr.map(t=>({id:t.id,label:t.label,count:o.get(t.id)})).filter(t=>t.count>0),r=a.reduce((t,s)=>t+s.count,0);return n.pendente>r&&a.push({id:"outros",label:"sem classificação",count:n.pendente-r}),{...n,pendingBreakdown:a}}function Tn(e,n){if(typeof e!="string"||e.trim()==="")throw new TypeError(`${n} deve ser um texto não vazio.`);return e.trim()}function Ia(){return typeof globalThis.crypto?.randomUUID=="function"?globalThis.crypto.randomUUID():`${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`}function Un(e=new Date,n="data"){const o=e instanceof Date?e:new Date(e);if(Number.isNaN(o.getTime()))throw new TypeError(`${n} deve ser uma data válida.`);return o.toISOString()}function It(e){return typeof structuredClone=="function"?structuredClone(e):JSON.parse(JSON.stringify(e))}function Fr({id:e=Ia(),elementId:n,data:o,result:a,evaluatedAt:r=new Date}={}){if(o===void 0||a===void 0)throw new TypeError("data e result são obrigatórios.");return{id:Tn(e,"id"),elementId:Tn(n,"elementId"),data:It(o),result:It(a),evaluatedAt:Un(r,"evaluatedAt")}}function kt(e){const n=e[0]?.result;return n?.length?n.some(o=>rr(o.status)==="nao_conforme")?"nao_conforme":n.some(o=>rr(o.status)==="pendente")?"nao_avaliado":"conforme":"nao_avaliado"}class ep{constructor({elementRepository:n,environmentRepository:o,evaluationRepository:a,ruleEngine:r=new Jm}){this.elementRepository=n,this.environmentRepository=o,this.evaluationRepository=a,this.ruleEngine=r}async evaluateElement({elementId:n,checklist:o,data:a,evaluatedAt:r}){if(!await this.elementRepository.get(n))throw new Error("Elemento não encontrado.");const s=this.ruleEngine.evaluate(o.regras??[],a,o.parametros??{}),l=Fr({elementId:n,data:a,result:s,evaluatedAt:r});return this.evaluationRepository.put(l)}async saveElementData({elementId:n,data:o,savedAt:a}){if(!await this.elementRepository.get(n))throw new Error("Elemento não encontrado.");const t=Fr({elementId:n,data:o,result:[],evaluatedAt:a});return this.evaluationRepository.put(t)}async saveElementAnswers({elementId:n,checklist:o,data:a,savedAt:r}){return Object.keys(a??{}).length>0?this.evaluateElement({elementId:n,checklist:o,data:a,evaluatedAt:r}):this.saveElementData({elementId:n,data:a,savedAt:r})}evaluateTransientElement({elementId:n,checklist:o,data:a,evaluatedAt:r}){const t=this.ruleEngine.evaluate(o.regras??[],a,o.parametros??{});return Fr({elementId:n,data:a,result:t,evaluatedAt:r})}async listEvaluations(n){return(await this.evaluationRepository.getByElementId(n)).sort((a,r)=>r.evaluatedAt.localeCompare(a.evaluatedAt))}async getEnvironmentSummary(n){const o=await this.elementRepository.getByEnvironmentId(n);return this.#n(o)}async getProjectSummary(n){if(!this.environmentRepository)throw new Error("Repositório de ambientes não configurado.");const o=await this.environmentRepository.getByProjectId(n),a=await Promise.all(o.map(r=>this.elementRepository.getByEnvironmentId(r.id)));return this.#n(a.flat())}async getProjectStatus(n){if(!this.environmentRepository)throw new Error("Repositório de ambientes não configurado.");const o=await this.environmentRepository.getByProjectId(n),a=await Promise.all(o.map(async t=>{const s=await this.elementRepository.getByEnvironmentId(t.id),l=await Promise.all(s.map(async c=>({element:c,status:kt(await this.listEvaluations(c.id))})));return{environment:t,elements:l,summary:this.#e(l.map(c=>c.status))}})),r=a.flatMap(t=>t.elements.map(s=>s.status));return{summary:this.#e(r),environments:a}}async#n(n){const o=await Promise.all(n.map(async a=>kt(await this.listEvaluations(a.id))));return this.#e(o)}#e(n){const o={totalElements:n.length,conforme:0,nao_conforme:0,nao_avaliado:0,pendente:0,score:0,overallStatus:"nao_avaliado"};for(const a of n)o[a]+=1;return o.pendente=o.nao_avaliado,o.score=o.totalElements?Math.round(o.conforme/o.totalElements*100):0,o.nao_conforme>0?o.overallStatus="nao_conforme":o.nao_avaliado===0&&o.totalElements>0&&(o.overallStatus="conforme"),o}}function Zi({id:e=Ia(),environmentId:n,name:o,type:a,rule:r,createdAt:t=new Date,updatedAt:s=t}={}){return{id:Tn(e,"id"),environmentId:Tn(n,"environmentId"),name:Tn(o,"name"),type:Tn(a,"type"),rule:Tn(r,"rule"),createdAt:Un(t,"createdAt"),updatedAt:Un(s,"updatedAt")}}function es({id:e=Ia(),projectId:n,name:o,createdAt:a=new Date,updatedAt:r=a}={}){return{id:Tn(e,"id"),projectId:Tn(n,"projectId"),name:Tn(o,"name"),createdAt:Un(a,"createdAt"),updatedAt:Un(r,"updatedAt")}}function tr(e){return String(e??"").trim().replace(/\s+/g," ").toLowerCase()}function np(e,n,{exceptId:o}={}){const a=tr(n);return a?(e??[]).some(r=>r.id!==o&&tr(r?.name)===a):!1}function ns({id:e=Ia(),name:n,description:o="",createdAt:a=new Date,updatedAt:r=a}={}){return{id:Tn(e,"id"),name:Tn(n,"name"),description:typeof o=="string"?o.trim():"",createdAt:Un(a,"createdAt"),updatedAt:Un(r,"updatedAt")}}class op{constructor({projectRepository:n,environmentRepository:o,elementRepository:a,evaluationRepository:r}){this.projectRepository=n,this.environmentRepository=o,this.elementRepository=a,this.evaluationRepository=r}async createProject(n){const o=ns(n);return await this.#e({items:this.projectRepository.getAll(),name:o.name,message:"Já existe um projeto com esse nome."}),this.projectRepository.put(o)}listProjects(){return this.projectRepository.getAll()}getProject(n){return this.projectRepository.get(n)}async updateProject(n,{name:o,description:a}){const r=await this.#n(this.projectRepository.get(n),"Projeto");return await this.#e({items:this.projectRepository.getAll(),name:o,currentName:r.name,exceptId:n,message:"Já existe um projeto com esse nome."}),this.projectRepository.put(ns({...r,name:o,description:a,updatedAt:new Date}))}async renameProject(n,o){const a=await this.#n(this.projectRepository.get(n),"Projeto");return this.updateProject(n,{name:o,description:a.description})}async createEnvironment(n,o){await this.#n(this.projectRepository.get(n),"Projeto");const a=es({...o,projectId:n});return await this.#e({items:this.environmentRepository.getByProjectId(n),name:a.name,message:"Já existe um ambiente com esse nome neste projeto."}),this.environmentRepository.put(a)}listEnvironments(n){return this.environmentRepository.getByProjectId(n)}getEnvironment(n){return this.environmentRepository.get(n)}async renameEnvironment(n,o){const a=await this.#n(this.environmentRepository.get(n),"Ambiente");return await this.#e({items:this.environmentRepository.getByProjectId(a.projectId),name:o,currentName:a.name,exceptId:n,message:"Já existe um ambiente com esse nome neste projeto."}),this.environmentRepository.put(es({...a,name:o,updatedAt:new Date}))}async createElement(n,o){await this.#n(this.environmentRepository.get(n),"Ambiente");const a=Zi({...o,environmentId:n});return await this.#e({items:this.elementRepository.getByEnvironmentId(n),name:a.name,message:"Já existe um elemento com esse nome neste ambiente."}),this.elementRepository.put(a)}listElements(n){return this.elementRepository.getByEnvironmentId(n)}getElement(n){return this.elementRepository.get(n)}async updateElement(n,o){const a=await this.#n(this.elementRepository.get(n),"Elemento");return await this.#e({items:this.elementRepository.getByEnvironmentId(a.environmentId),name:o.name??a.name,currentName:a.name,exceptId:n,message:"Já existe um elemento com esse nome neste ambiente."}),this.elementRepository.put(Zi({...a,...o,id:a.id,environmentId:a.environmentId,createdAt:a.createdAt,updatedAt:Un(new Date)}))}async deleteElement(n){const o=await this.evaluationRepository.getByElementId(n);await Promise.all(o.map(a=>this.evaluationRepository.delete(a.id))),await this.elementRepository.delete(n)}async deleteEnvironment(n){const o=await this.elementRepository.getByEnvironmentId(n);await Promise.all(o.map(a=>this.deleteElement(a.id))),await this.environmentRepository.delete(n)}async deleteProject(n){const o=await this.environmentRepository.getByProjectId(n);await Promise.all(o.map(a=>this.deleteEnvironment(a.id))),await this.projectRepository.delete(n)}async#n(n,o){const a=await n;if(!a)throw new Error(`${o} não encontrado.`);return a}async#e({items:n,name:o,currentName:a,exceptId:r,message:t}){if(!(a!==void 0&&tr(o)===tr(a))&&np(await n,o,{exceptId:r}))throw new Error(t)}}class ap{constructor({evaluationService:n}){this.evaluationService=n,this.current=null}evaluate({name:n,checklist:o,data:a}){const r={id:Ia(),name:n?.trim()||o.nome,type:o.nome,rule:o.id},t=this.evaluationService.evaluateTransientElement({elementId:r.id,checklist:o,data:a});return this.current={element:r,evaluation:t},this.current}getCurrent(){return this.current}clear(){this.current=null}}const rp=new Set(["checklist","conditional"]),tp={checklist:["condicoes","operador","valor"],conditional:["operador","valor"],direta:["condicoes"]},ip=new Set(["number","boolean","select"]),os=new Set(["conforme","nao_conforme","nao_avaliado","atencao","manual"]);function Sn(e){return e!==null&&typeof e=="object"&&!Array.isArray(e)}function da(e,n,o){(typeof e!="string"||e.trim()==="")&&o.push(`${n} deve ser um texto não vazio.`)}function yc(e,n,o){Wm.has(e)||o.push(`${n} deve ser um operador suportado.`)}function as(e,n,o){if(!Sn(e)){o.push(`${n} deve ser um objeto.`);return}yc(e.operador,`${n}.operador`,o),"valor"in e||o.push(`${n}.valor é obrigatório.`)}function sp(e,n){for(const[o,a]of Object.entries(e)){const r=`parametros.${o}`;if(!Sn(a)){n.push(`${r} deve ser um objeto.`);continue}ip.has(a.tipo)||n.push(`${r}.tipo deve ser number, boolean ou select.`),a.tipo==="select"&&(!Array.isArray(a.opcoes)||a.opcoes.length===0)&&n.push(`${r}.opcoes deve listar as opções do campo do tipo select.`),"unidade"in a&&!cp(a.unidade)&&n.push(`${r}.unidade deve ser um texto ou { singular, plural }.`)}}function rs(e,n){return e.some(o=>o.operador==="=="?o.valor===n:o.operador==="!="&&o.valor!==n)}function lp(e,n){const o=e.map(a=>Sn(a)?a.quando:null).filter(Sn);return o.some(a=>a.operador===">"||a.operador===">=")?!0:n.tipo==="boolean"?[!0,!1].every(a=>rs(o,a)):n.tipo==="select"?(n.opcoes??[]).every(a=>rs(o,a)):!1}function cp(e){return typeof e=="string"?!0:Sn(e)&&typeof e.singular=="string"&&e.singular.trim()!==""&&typeof e.plural=="string"&&e.plural.trim()!==""}function up(e,n,o){const a=e.tipo??"direta",r=(tp[a]??[]).filter(t=>t in e);r.length&&o.push(`${n} não usa ${r.join(", ")} em regra do tipo ${a}; o motor ignora esse campo.`)}function dp(e,n,o,a){const r=`regras[${n}]`;if(!Sn(e)){a.push(`${r} deve ser um objeto.`);return}if(up(e,r,a),da(e.id,`${r}.id`,a),da(e.nome,`${r}.nome`,a),da(e.parametro,`${r}.parametro`,a),typeof e.parametro=="string"&&!(e.parametro in o)&&a.push(`${r}.parametro deve existir em parametros.`),e.tipo==="checklist"){const t=o[e.parametro];Sn(t)&&t.tipo!=="boolean"&&(typeof e.mensagem!="string"||e.mensagem.trim()==="")&&a.push(`${r}.mensagem é obrigatória em regra checklist de campo ${t.tipo}: descreva o critério de julgamento.`);return}if(e.tipo==="conditional"){if(!Array.isArray(e.condicoes)||e.condicoes.length===0){a.push(`${r}.condicoes deve conter ao menos uma condição.`);return}e.condicoes.forEach((s,l)=>{const c=`${r}.condicoes[${l}]`;if(!Sn(s)){a.push(`${c} deve ser um objeto.`);return}as(s.quando,`${c}.quando`,a);const d=typeof s.resultado=="string"&&s.resultado!=="",u="verificar"in s;d===u&&a.push(`${c} deve informar exatamente resultado ou verificar.`),d&&!os.has(s.resultado)&&a.push(`${c}.resultado deve ser um de: ${[...os].join(", ")}.`),u&&(as(s.verificar,`${c}.verificar`,a),(typeof s.verificar?.parametro!="string"||!(s.verificar.parametro in o))&&a.push(`${c}.verificar.parametro deve existir em parametros.`))});const t=o[e.parametro];Sn(t)&&!lp(e.condicoes,t)&&a.push(`${r}.condicoes deve cobrir todos os valores de ${e.parametro}: inclua um ramo final com operador ">" ou ">=", ou um ramo para cada opção do campo.`);return}e.tipo!==void 0&&!rp.has(e.tipo)&&a.push(`${r}.tipo não é suportado.`),yc(e.operador,`${r}.operador`,a),"valor"in e||a.push(`${r}.valor é obrigatório.`)}function mp(e){const n=[];return Sn(e)?(da(e.id,"id",n),da(e.nome,"nome",n),Sn(e.parametros)||n.push("parametros deve ser um objeto."),Array.isArray(e.regras)||n.push("regras deve ser uma lista."),Sn(e.parametros)&&Array.isArray(e.regras)&&(sp(e.parametros,n),e.regras.forEach((o,a)=>dp(o,a,e.parametros,n))),{valid:n.length===0,errors:n}):{valid:!1,errors:["O conjunto de regras deve ser um objeto."]}}function Pt(e){const n=mp(e);if(!n.valid)throw new TypeError(`Conjunto de regras inválido: ${n.errors.join(" ")}`);return e}function pp(e,{createdAt:n=new Date,updatedAt:o=n}={}){return Pt(e),{...It(e),source:"user",createdAt:Un(n,"createdAt"),updatedAt:Un(o,"updatedAt")}}function fp(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var on={},qa={},io={},ts;function ka(){if(ts)return io;ts=1;function e(s){return typeof s>"u"||s===null}function n(s){return typeof s=="object"&&s!==null}function o(s){return Array.isArray(s)?s:e(s)?[]:[s]}function a(s,l){if(l){const c=Object.keys(l);for(let d=0,u=c.length;d<u;d+=1){const m=c[d];s[m]=l[m]}}return s}function r(s,l){let c="";for(let d=0;d<l;d+=1)c+=s;return c}function t(s){return s===0&&Number.NEGATIVE_INFINITY===1/s}return io.isNothing=e,io.isObject=n,io.toArray=o,io.repeat=r,io.isNegativeZero=t,io.extend=a,io}var zr,is;function Pa(){if(is)return zr;is=1;function e(o,a){let r="";const t=o.reason||"(unknown reason)";return o.mark?(o.mark.name&&(r+='in "'+o.mark.name+'" '),r+="("+(o.mark.line+1)+":"+(o.mark.column+1)+")",!a&&o.mark.snippet&&(r+=`

`+o.mark.snippet),t+" "+r):t}function n(o,a){Error.call(this),this.name="YAMLException",this.reason=o,this.mark=a,this.message=e(this,!1),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack||""}return n.prototype=Object.create(Error.prototype),n.prototype.constructor=n,n.prototype.toString=function(a){return this.name+": "+e(this,a)},zr=n,zr}var Hr,ss;function hp(){if(ss)return Hr;ss=1;const e=ka();function n(r,t,s,l,c){let d="",u="";const m=Math.floor(c/2)-1;return l-t>m&&(d=" ... ",t=l-m+d.length),s-l>m&&(u=" ...",s=l+m-u.length),{str:d+r.slice(t,s).replace(/\t/g,"→")+u,pos:l-t+d.length}}function o(r,t){return e.repeat(" ",t-r.length)+r}function a(r,t){if(t=Object.create(t||null),!r.buffer)return null;t.maxLength||(t.maxLength=79),typeof t.indent!="number"&&(t.indent=1),typeof t.linesBefore!="number"&&(t.linesBefore=3),typeof t.linesAfter!="number"&&(t.linesAfter=2);const s=/\r?\n|\r|\0/g,l=[0],c=[];let d,u=-1;for(;d=s.exec(r.buffer);)c.push(d.index),l.push(d.index+d[0].length),r.position<=d.index&&u<0&&(u=l.length-2);u<0&&(u=l.length-1);let m="";const f=Math.min(r.line+t.linesAfter,c.length).toString().length,h=t.maxLength-(t.indent+f+3);for(let _=1;_<=t.linesBefore&&!(u-_<0);_++){const E=n(r.buffer,l[u-_],c[u-_],r.position-(l[u]-l[u-_]),h);m=e.repeat(" ",t.indent)+o((r.line-_+1).toString(),f)+" | "+E.str+`
`+m}const x=n(r.buffer,l[u],c[u],r.position,h);m+=e.repeat(" ",t.indent)+o((r.line+1).toString(),f)+" | "+x.str+`
`,m+=e.repeat("-",t.indent+f+3+x.pos)+`^
`;for(let _=1;_<=t.linesAfter&&!(u+_>=c.length);_++){const E=n(r.buffer,l[u+_],c[u+_],r.position-(l[u]-l[u+_]),h);m+=e.repeat(" ",t.indent)+o((r.line+_+1).toString(),f)+" | "+E.str+`
`}return m.replace(/\n$/,"")}return Hr=a,Hr}var Ur,ls;function vn(){if(ls)return Ur;ls=1;const e=Pa(),n=["kind","multi","resolve","construct","instanceOf","predicate","represent","representName","defaultStyle","styleAliases"],o=["scalar","sequence","mapping"];function a(t){const s={};return t!==null&&Object.keys(t).forEach(function(l){t[l].forEach(function(c){s[String(c)]=l})}),s}function r(t,s){if(s=s||{},Object.keys(s).forEach(function(l){if(n.indexOf(l)===-1)throw new e('Unknown option "'+l+'" is met in definition of "'+t+'" YAML type.')}),this.options=s,this.tag=t,this.kind=s.kind||null,this.resolve=s.resolve||function(){return!0},this.construct=s.construct||function(l){return l},this.instanceOf=s.instanceOf||null,this.predicate=s.predicate||null,this.represent=s.represent||null,this.representName=s.representName||null,this.defaultStyle=s.defaultStyle||null,this.multi=s.multi||!1,this.styleAliases=a(s.styleAliases||null),o.indexOf(this.kind)===-1)throw new e('Unknown kind "'+this.kind+'" is specified for "'+t+'" YAML type.')}return Ur=r,Ur}var Kr,cs;function Ac(){if(cs)return Kr;cs=1;const e=Pa(),n=vn();function o(t,s){const l=[];return t[s].forEach(function(c){let d=l.length;l.forEach(function(u,m){u.tag===c.tag&&u.kind===c.kind&&u.multi===c.multi&&(d=m)}),l[d]=c}),l}function a(){const t={scalar:{},sequence:{},mapping:{},fallback:{},multi:{scalar:[],sequence:[],mapping:[],fallback:[]}};function s(l){l.multi?(t.multi[l.kind].push(l),t.multi.fallback.push(l)):t[l.kind][l.tag]=t.fallback[l.tag]=l}for(let l=0,c=arguments.length;l<c;l+=1)arguments[l].forEach(s);return t}function r(t){return this.extend(t)}return r.prototype.extend=function(s){let l=[],c=[];if(s instanceof n)c.push(s);else if(Array.isArray(s))c=c.concat(s);else if(s&&(Array.isArray(s.implicit)||Array.isArray(s.explicit)))s.implicit&&(l=l.concat(s.implicit)),s.explicit&&(c=c.concat(s.explicit));else throw new e("Schema.extend argument should be a Type, [ Type ], or a schema definition ({ implicit: [...], explicit: [...] })");l.forEach(function(u){if(!(u instanceof n))throw new e("Specified list of YAML types (or a single Type object) contains a non-Type object.");if(u.loadKind&&u.loadKind!=="scalar")throw new e("There is a non-scalar type in the implicit list of a schema. Implicit resolving of such types is not supported.");if(u.multi)throw new e("There is a multi type in the implicit list of a schema. Multi tags can only be listed as explicit.")}),c.forEach(function(u){if(!(u instanceof n))throw new e("Specified list of YAML types (or a single Type object) contains a non-Type object.")});const d=Object.create(r.prototype);return d.implicit=(this.implicit||[]).concat(l),d.explicit=(this.explicit||[]).concat(c),d.compiledImplicit=o(d,"implicit"),d.compiledExplicit=o(d,"explicit"),d.compiledTypeMap=a(d.compiledImplicit,d.compiledExplicit),d},Kr=r,Kr}var Gr,us;function Nc(){if(us)return Gr;us=1;const e=vn();return Gr=new e("tag:yaml.org,2002:str",{kind:"scalar",construct:function(n){return n!==null?n:""}}),Gr}var Wr,ds;function xc(){if(ds)return Wr;ds=1;const e=vn();return Wr=new e("tag:yaml.org,2002:seq",{kind:"sequence",construct:function(n){return n!==null?n:[]}}),Wr}var Yr,ms;function Bc(){if(ms)return Yr;ms=1;const e=vn();return Yr=new e("tag:yaml.org,2002:map",{kind:"mapping",construct:function(n){return n!==null?n:{}}}),Yr}var Jr,ps;function Rc(){if(ps)return Jr;ps=1;const e=Ac();return Jr=new e({explicit:[Nc(),xc(),Bc()]}),Jr}var Qr,fs;function Tc(){if(fs)return Qr;fs=1;const e=vn();function n(r){if(r===null)return!0;const t=r.length;return t===1&&r==="~"||t===4&&(r==="null"||r==="Null"||r==="NULL")}function o(){return null}function a(r){return r===null}return Qr=new e("tag:yaml.org,2002:null",{kind:"scalar",resolve:n,construct:o,predicate:a,represent:{canonical:function(){return"~"},lowercase:function(){return"null"},uppercase:function(){return"NULL"},camelcase:function(){return"Null"},empty:function(){return""}},defaultStyle:"lowercase"}),Qr}var Xr,hs;function Sc(){if(hs)return Xr;hs=1;const e=vn();function n(r){if(r===null)return!1;const t=r.length;return t===4&&(r==="true"||r==="True"||r==="TRUE")||t===5&&(r==="false"||r==="False"||r==="FALSE")}function o(r){return r==="true"||r==="True"||r==="TRUE"}function a(r){return Object.prototype.toString.call(r)==="[object Boolean]"}return Xr=new e("tag:yaml.org,2002:bool",{kind:"scalar",resolve:n,construct:o,predicate:a,represent:{lowercase:function(r){return r?"true":"false"},uppercase:function(r){return r?"TRUE":"FALSE"},camelcase:function(r){return r?"True":"False"}},defaultStyle:"lowercase"}),Xr}var Zr,vs;function Ec(){if(vs)return Zr;vs=1;const e=ka(),n=vn();function o(d){return d>=48&&d<=57||d>=65&&d<=70||d>=97&&d<=102}function a(d){return d>=48&&d<=55}function r(d){return d>=48&&d<=57}function t(d){if(d===null)return!1;const u=d.length;let m=0,f=!1;if(!u)return!1;let h=d[m];if((h==="-"||h==="+")&&(h=d[++m]),h==="0"){if(m+1===u)return!0;if(h=d[++m],h==="b"){for(m++;m<u;m++){if(h=d[m],h!=="0"&&h!=="1")return!1;f=!0}return f&&isFinite(s(d))}if(h==="x"){for(m++;m<u;m++){if(!o(d.charCodeAt(m)))return!1;f=!0}return f&&isFinite(s(d))}if(h==="o"){for(m++;m<u;m++){if(!a(d.charCodeAt(m)))return!1;f=!0}return f&&isFinite(s(d))}}for(;m<u;m++){if(!r(d.charCodeAt(m)))return!1;f=!0}return f?isFinite(s(d)):!1}function s(d){let u=d,m=1,f=u[0];if((f==="-"||f==="+")&&(f==="-"&&(m=-1),u=u.slice(1),f=u[0]),u==="0")return 0;if(f==="0"){if(u[1]==="b")return m*parseInt(u.slice(2),2);if(u[1]==="x")return m*parseInt(u.slice(2),16);if(u[1]==="o")return m*parseInt(u.slice(2),8)}return m*parseInt(u,10)}function l(d){return s(d)}function c(d){return Object.prototype.toString.call(d)==="[object Number]"&&d%1===0&&!e.isNegativeZero(d)}return Zr=new n("tag:yaml.org,2002:int",{kind:"scalar",resolve:t,construct:l,predicate:c,represent:{binary:function(d){return d>=0?"0b"+d.toString(2):"-0b"+d.toString(2).slice(1)},octal:function(d){return d>=0?"0o"+d.toString(8):"-0o"+d.toString(8).slice(1)},decimal:function(d){return d.toString(10)},hexadecimal:function(d){return d>=0?"0x"+d.toString(16).toUpperCase():"-0x"+d.toString(16).toUpperCase().slice(1)}},defaultStyle:"decimal",styleAliases:{binary:[2,"bin"],octal:[8,"oct"],decimal:[10,"dec"],hexadecimal:[16,"hex"]}}),Zr}var et,gs;function wc(){if(gs)return et;gs=1;const e=ka(),n=vn(),o=new RegExp("^(?:[-+]?(?:[0-9]+)(?:\\.[0-9]*)?(?:[eE][-+]?[0-9]+)?|\\.[0-9]+(?:[eE][-+]?[0-9]+)?|[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$"),a=new RegExp("^(?:[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$");function r(d){return d===null||!o.test(d)?!1:isFinite(parseFloat(d,10))?!0:a.test(d)}function t(d){let u=d.toLowerCase();const m=u[0]==="-"?-1:1;return"+-".indexOf(u[0])>=0&&(u=u.slice(1)),u===".inf"?m===1?Number.POSITIVE_INFINITY:Number.NEGATIVE_INFINITY:u===".nan"?NaN:m*parseFloat(u,10)}const s=/^[-+]?[0-9]+e/;function l(d,u){if(isNaN(d))switch(u){case"lowercase":return".nan";case"uppercase":return".NAN";case"camelcase":return".NaN"}else if(Number.POSITIVE_INFINITY===d)switch(u){case"lowercase":return".inf";case"uppercase":return".INF";case"camelcase":return".Inf"}else if(Number.NEGATIVE_INFINITY===d)switch(u){case"lowercase":return"-.inf";case"uppercase":return"-.INF";case"camelcase":return"-.Inf"}else if(e.isNegativeZero(d))return"-0.0";const m=d.toString(10);return s.test(m)?m.replace("e",".e"):m}function c(d){return Object.prototype.toString.call(d)==="[object Number]"&&(d%1!==0||e.isNegativeZero(d))}return et=new n("tag:yaml.org,2002:float",{kind:"scalar",resolve:r,construct:t,predicate:c,represent:l,defaultStyle:"lowercase"}),et}var nt,bs;function Cc(){return bs||(bs=1,nt=Rc().extend({implicit:[Tc(),Sc(),Ec(),wc()]})),nt}var ot,_s;function Ic(){return _s||(_s=1,ot=Cc()),ot}var at,ys;function kc(){if(ys)return at;ys=1;const e=vn(),n=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9])-([0-9][0-9])$"),o=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9]?)-([0-9][0-9]?)(?:[Tt]|[ \\t]+)([0-9][0-9]?):([0-9][0-9]):([0-9][0-9])(?:\\.([0-9]*))?(?:[ \\t]*(Z|([-+])([0-9][0-9]?)(?::([0-9][0-9]))?))?$");function a(s){return s===null?!1:n.exec(s)!==null||o.exec(s)!==null}function r(s){let l=0,c=null,d=n.exec(s);if(d===null&&(d=o.exec(s)),d===null)throw new Error("Date resolve error");const u=+d[1],m=+d[2]-1,f=+d[3];if(!d[4])return new Date(Date.UTC(u,m,f));const h=+d[4],x=+d[5],_=+d[6];if(d[7]){for(l=d[7].slice(0,3);l.length<3;)l+="0";l=+l}if(d[9]){const I=+d[10],w=+(d[11]||0);c=(I*60+w)*6e4,d[9]==="-"&&(c=-c)}const E=new Date(Date.UTC(u,m,f,h,x,_,l));return c&&E.setTime(E.getTime()-c),E}function t(s){return s.toISOString()}return at=new e("tag:yaml.org,2002:timestamp",{kind:"scalar",resolve:a,construct:r,instanceOf:Date,represent:t}),at}var rt,As;function Pc(){if(As)return rt;As=1;const e=vn();function n(o){return o==="<<"||o===null}return rt=new e("tag:yaml.org,2002:merge",{kind:"scalar",resolve:n}),rt}var tt,Ns;function Oc(){if(Ns)return tt;Ns=1;const e=vn(),n=`ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=
\r`;function o(s){if(s===null)return!1;let l=0;const c=s.length,d=n;for(let u=0;u<c;u++){const m=d.indexOf(s.charAt(u));if(!(m>64)){if(m<0)return!1;l+=6}}return l%8===0}function a(s){const l=s.replace(/[\r\n=]/g,""),c=l.length,d=n;let u=0;const m=[];for(let h=0;h<c;h++)h%4===0&&h&&(m.push(u>>16&255),m.push(u>>8&255),m.push(u&255)),u=u<<6|d.indexOf(l.charAt(h));const f=c%4*6;return f===0?(m.push(u>>16&255),m.push(u>>8&255),m.push(u&255)):f===18?(m.push(u>>10&255),m.push(u>>2&255)):f===12&&m.push(u>>4&255),new Uint8Array(m)}function r(s){let l="",c=0;const d=s.length,u=n;for(let f=0;f<d;f++)f%3===0&&f&&(l+=u[c>>18&63],l+=u[c>>12&63],l+=u[c>>6&63],l+=u[c&63]),c=(c<<8)+s[f];const m=d%3;return m===0?(l+=u[c>>18&63],l+=u[c>>12&63],l+=u[c>>6&63],l+=u[c&63]):m===2?(l+=u[c>>10&63],l+=u[c>>4&63],l+=u[c<<2&63],l+=u[64]):m===1&&(l+=u[c>>2&63],l+=u[c<<4&63],l+=u[64],l+=u[64]),l}function t(s){return Object.prototype.toString.call(s)==="[object Uint8Array]"}return tt=new e("tag:yaml.org,2002:binary",{kind:"scalar",resolve:o,construct:a,predicate:t,represent:r}),tt}var it,xs;function jc(){if(xs)return it;xs=1;const e=vn(),n=Object.prototype.hasOwnProperty,o=Object.prototype.toString;function a(t){if(t===null)return!0;const s={},l=t;for(let c=0,d=l.length;c<d;c+=1){const u=l[c];let m=!1;if(o.call(u)!=="[object Object]")return!1;let f;for(f in u)if(n.call(u,f))if(!m)m=!0;else return!1;if(!m||n.call(s,f))return!1;Object.defineProperty(s,f,{value:!0})}return!0}function r(t){return t!==null?t:[]}return it=new e("tag:yaml.org,2002:omap",{kind:"sequence",resolve:a,construct:r}),it}var st,Bs;function Dc(){if(Bs)return st;Bs=1;const e=vn(),n=Object.prototype.toString;function o(r){if(r===null)return!0;const t=r,s=new Array(t.length);for(let l=0,c=t.length;l<c;l+=1){const d=t[l];if(n.call(d)!=="[object Object]")return!1;const u=Object.keys(d);if(u.length!==1)return!1;s[l]=[u[0],d[u[0]]]}return!0}function a(r){if(r===null)return[];const t=r,s=new Array(t.length);for(let l=0,c=t.length;l<c;l+=1){const d=t[l],u=Object.keys(d);s[l]=[u[0],d[u[0]]]}return s}return st=new e("tag:yaml.org,2002:pairs",{kind:"sequence",resolve:o,construct:a}),st}var lt,Rs;function Vc(){if(Rs)return lt;Rs=1;const e=vn(),n=Object.prototype.hasOwnProperty;function o(r){if(r===null)return!0;const t=r;for(const s in t)if(n.call(t,s)&&t[s]!==null)return!1;return!0}function a(r){return r!==null?r:{}}return lt=new e("tag:yaml.org,2002:set",{kind:"mapping",resolve:o,construct:a}),lt}var ct,Ts;function ai(){return Ts||(Ts=1,ct=Ic().extend({implicit:[kc(),Pc()],explicit:[Oc(),jc(),Dc(),Vc()]})),ct}var Ss;function vp(){if(Ss)return qa;Ss=1;const e=ka(),n=Pa(),o=hp(),a=ai(),r=Object.prototype.hasOwnProperty,t=1,s=2,l=3,c=4,d=1,u=2,m=3,f=/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F-\x84\x86-\x9F\uFFFE\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/,h=/[\x85\u2028\u2029]/,x=/[,\[\]{}]/,_=/^(?:!|!!|![0-9A-Za-z-]+!)$/,E=/^(?:!|[^,\[\]{}])(?:%[0-9a-f]{2}|[0-9a-z\-#;/?:@&=+$,_.!~*'()\[\]])*$/i;function I(i){return Object.prototype.toString.call(i)}function w(i){return i===10||i===13}function J(i){return i===9||i===32}function Q(i){return i===9||i===32||i===10||i===13}function pe(i){return i===44||i===91||i===93||i===123||i===125}function ue(i){if(i>=48&&i<=57)return i-48;const y=i|32;return y>=97&&y<=102?y-97+10:-1}function Z(i){return i===120?2:i===117?4:i===85?8:0}function q(i){return i>=48&&i<=57?i-48:-1}function B(i){switch(i){case 48:return"\0";case 97:return"\x07";case 98:return"\b";case 116:return"	";case 9:return"	";case 110:return`
`;case 118:return"\v";case 102:return"\f";case 114:return"\r";case 101:return"\x1B";case 32:return" ";case 34:return'"';case 47:return"/";case 92:return"\\";case 78:return"";case 95:return" ";case 76:return"\u2028";case 80:return"\u2029";default:return""}}function ae(i){return i<=65535?String.fromCharCode(i):String.fromCharCode((i-65536>>10)+55296,(i-65536&1023)+56320)}function de(i,y,T){y==="__proto__"?Object.defineProperty(i,y,{configurable:!0,enumerable:!0,writable:!0,value:T}):i[y]=T}const M=new Array(256),H=new Array(256);for(let i=0;i<256;i++)M[i]=B(i)?1:0,H[i]=B(i);function G(i,y){this.input=i,this.filename=y.filename||null,this.schema=y.schema||a,this.onWarning=y.onWarning||null,this.legacy=y.legacy||!1,this.json=y.json||!1,this.listener=y.listener||null,this.maxDepth=typeof y.maxDepth=="number"?y.maxDepth:100,this.maxTotalMergeKeys=typeof y.maxTotalMergeKeys=="number"?y.maxTotalMergeKeys:1e4,this.implicitTypes=this.schema.compiledImplicit,this.typeMap=this.schema.compiledTypeMap,this.length=i.length,this.position=0,this.line=0,this.lineStart=0,this.lineIndent=0,this.depth=0,this.totalMergeKeys=0,this.firstTabInLine=-1,this.documents=[],this.anchorMapTransactions=[]}function ye(i,y){const T={name:i.filename,buffer:i.input.slice(0,-1),position:i.position,line:i.line,column:i.position-i.lineStart};return T.snippet=o(T),new n(y,T)}function F(i,y){throw ye(i,y)}function Ee(i,y){i.onWarning&&i.onWarning.call(null,ye(i,y))}function Be(i,y,T){const k=i.anchorMapTransactions;if(k.length!==0){const R=k[k.length-1];r.call(R,y)||(R[y]={existed:r.call(i.anchorMap,y),value:i.anchorMap[y]})}i.anchorMap[y]=T}function Ze(i){i.anchorMapTransactions.push(Object.create(null))}function Ue(i){const y=i.anchorMapTransactions.pop(),T=i.anchorMapTransactions;if(T.length===0)return;const k=T[T.length-1],R=Object.keys(y);for(let W=0,p=R.length;W<p;W+=1){const N=R[W];r.call(k,N)||(k[N]=y[N])}}function Ge(i){const y=i.anchorMapTransactions.pop(),T=Object.keys(y);for(let k=T.length-1;k>=0;k-=1){const R=y[T[k]];R.existed?i.anchorMap[T[k]]=R.value:delete i.anchorMap[T[k]]}}function Je(i){return{position:i.position,line:i.line,lineStart:i.lineStart,lineIndent:i.lineIndent,firstTabInLine:i.firstTabInLine,tag:i.tag,anchor:i.anchor,kind:i.kind,result:i.result}}function _n(i,y){i.position=y.position,i.line=y.line,i.lineStart=y.lineStart,i.lineIndent=y.lineIndent,i.firstTabInLine=y.firstTabInLine,i.tag=y.tag,i.anchor=y.anchor,i.kind=y.kind,i.result=y.result}const Cn={YAML:function(y,T,k){y.version!==null&&F(y,"duplication of %YAML directive"),k.length!==1&&F(y,"YAML directive accepts exactly one argument");const R=/^([0-9]+)\.([0-9]+)$/.exec(k[0]);R===null&&F(y,"ill-formed argument of the YAML directive");const W=parseInt(R[1],10),p=parseInt(R[2],10);W!==1&&F(y,"unacceptable YAML version of the document"),y.version=k[0],y.checkLineBreaks=p<2,p!==1&&p!==2&&Ee(y,"unsupported YAML version of the document")},TAG:function(y,T,k){let R;k.length!==2&&F(y,"TAG directive accepts exactly two arguments");const W=k[0];R=k[1],_.test(W)||F(y,"ill-formed tag handle (first argument) of the TAG directive"),r.call(y.tagMap,W)&&F(y,'there is a previously declared suffix for "'+W+'" tag handle'),E.test(R)||F(y,"ill-formed tag prefix (second argument) of the TAG directive");try{R=decodeURIComponent(R)}catch{F(y,"tag prefix is malformed: "+R)}y.tagMap[W]=R}};function We(i,y,T,k){if(y<T){const R=i.input.slice(y,T);if(k)for(let W=0,p=R.length;W<p;W+=1){const N=R.charCodeAt(W);N===9||N>=32&&N<=1114111||F(i,"expected valid JSON character")}else f.test(R)&&F(i,"the stream contains non-printable characters");i.result+=R}}function Ye(i,y,T,k){e.isObject(T)||F(i,"cannot merge mappings; the provided source object is unacceptable");const R=Object.keys(T);for(let W=0,p=R.length;W<p;W+=1){const N=R[W];i.maxTotalMergeKeys!==-1&&++i.totalMergeKeys>i.maxTotalMergeKeys&&F(i,"merge keys exceeded maxTotalMergeKeys ("+i.maxTotalMergeKeys+")"),r.call(y,N)||(de(y,N,T[N]),k[N]=!0)}}function P(i,y,T,k,R,W,p,N,L){if(Array.isArray(R)){R=Array.prototype.slice.call(R);for(let j=0,D=R.length;j<D;j+=1)Array.isArray(R[j])&&F(i,"nested arrays are not supported inside keys"),typeof R=="object"&&I(R[j])==="[object Object]"&&(R[j]="[object Object]")}if(typeof R=="object"&&I(R)==="[object Object]"&&(R="[object Object]"),R=String(R),y===null&&(y={}),k==="tag:yaml.org,2002:merge")if(Array.isArray(W))for(let j=0,D=W.length;j<D;j+=1)Ye(i,y,W[j],T);else Ye(i,y,W,T);else!i.json&&!r.call(T,R)&&r.call(y,R)&&(i.line=p||i.line,i.lineStart=N||i.lineStart,i.position=L||i.position,F(i,"duplicated mapping key")),de(y,R,W),delete T[R];return y}function se(i){const y=i.input.charCodeAt(i.position);y===10?i.position++:y===13?(i.position++,i.input.charCodeAt(i.position)===10&&i.position++):F(i,"a line break is expected"),i.line+=1,i.lineStart=i.position,i.firstTabInLine=-1}function X(i,y,T){let k=0,R=i.input.charCodeAt(i.position);for(;R!==0;){for(;J(R);)R===9&&i.firstTabInLine===-1&&(i.firstTabInLine=i.position),R=i.input.charCodeAt(++i.position);if(y&&R===35)do R=i.input.charCodeAt(++i.position);while(R!==10&&R!==13&&R!==0);if(w(R))for(se(i),R=i.input.charCodeAt(i.position),k++,i.lineIndent=0;R===32;)i.lineIndent++,R=i.input.charCodeAt(++i.position);else break}return T!==-1&&k!==0&&i.lineIndent<T&&Ee(i,"deficient indentation"),k}function me(i){let y=i.position,T=i.input.charCodeAt(y);return!!((T===45||T===46)&&T===i.input.charCodeAt(y+1)&&T===i.input.charCodeAt(y+2)&&(y+=3,T=i.input.charCodeAt(y),T===0||Q(T)))}function Te(i,y){y===1?i.result+=" ":y>1&&(i.result+=e.repeat(`
`,y-1))}function v(i,y,T){let k,R,W,p,N,L;const j=i.kind,D=i.result;let Y=i.input.charCodeAt(i.position);if(Q(Y)||pe(Y)||Y===35||Y===38||Y===42||Y===33||Y===124||Y===62||Y===39||Y===34||Y===37||Y===64||Y===96)return!1;if(Y===63||Y===45){const K=i.input.charCodeAt(i.position+1);if(Q(K)||T&&pe(K))return!1}for(i.kind="scalar",i.result="",k=R=i.position,W=!1;Y!==0;){if(Y===58){const K=i.input.charCodeAt(i.position+1);if(Q(K)||T&&pe(K))break}else if(Y===35){const K=i.input.charCodeAt(i.position-1);if(Q(K))break}else{if(i.position===i.lineStart&&me(i)||T&&pe(Y))break;if(w(Y))if(p=i.line,N=i.lineStart,L=i.lineIndent,X(i,!1,-1),i.lineIndent>=y){W=!0,Y=i.input.charCodeAt(i.position);continue}else{i.position=R,i.line=p,i.lineStart=N,i.lineIndent=L;break}}W&&(We(i,k,R,!1),Te(i,i.line-p),k=R=i.position,W=!1),J(Y)||(R=i.position+1),Y=i.input.charCodeAt(++i.position)}return We(i,k,R,!1),i.result?!0:(i.kind=j,i.result=D,!1)}function b(i,y){let T,k,R=i.input.charCodeAt(i.position);if(R!==39)return!1;for(i.kind="scalar",i.result="",i.position++,T=k=i.position;(R=i.input.charCodeAt(i.position))!==0;)if(R===39)if(We(i,T,i.position,!0),R=i.input.charCodeAt(++i.position),R===39)T=i.position,i.position++,k=i.position;else return!0;else w(R)?(We(i,T,k,!0),Te(i,X(i,!1,y)),T=k=i.position):i.position===i.lineStart&&me(i)?F(i,"unexpected end of the document within a single quoted scalar"):(i.position++,J(R)||(k=i.position));F(i,"unexpected end of the stream within a single quoted scalar")}function A(i,y){let T,k,R,W=i.input.charCodeAt(i.position);if(W!==34)return!1;for(i.kind="scalar",i.result="",i.position++,T=k=i.position;(W=i.input.charCodeAt(i.position))!==0;){if(W===34)return We(i,T,i.position,!0),i.position++,!0;if(W===92){if(We(i,T,i.position,!0),W=i.input.charCodeAt(++i.position),w(W))X(i,!1,y);else if(W<256&&M[W])i.result+=H[W],i.position++;else if((R=Z(W))>0){let p=R,N=0;for(;p>0;p--)W=i.input.charCodeAt(++i.position),(R=ue(W))>=0?N=(N<<4)+R:F(i,"expected hexadecimal character");i.result+=ae(N),i.position++}else F(i,"unknown escape sequence");T=k=i.position}else w(W)?(We(i,T,k,!0),Te(i,X(i,!1,y)),T=k=i.position):i.position===i.lineStart&&me(i)?F(i,"unexpected end of the document within a double quoted scalar"):(i.position++,J(W)||(k=i.position))}F(i,"unexpected end of the stream within a double quoted scalar")}function O(i,y){let T=!0,k,R,W;const p=i.tag;let N;const L=i.anchor;let j,D,Y,K;const ce=Object.create(null);let le,he,Ae,ke=i.input.charCodeAt(i.position);if(ke===91)j=93,K=!1,N=[];else if(ke===123)j=125,K=!0,N={};else return!1;for(i.anchor!==null&&Be(i,i.anchor,N),ke=i.input.charCodeAt(++i.position);ke!==0;){if(X(i,!0,y),ke=i.input.charCodeAt(i.position),ke===j)return i.position++,i.tag=p,i.anchor=L,i.kind=K?"mapping":"sequence",i.result=N,!0;if(T?ke===44&&F(i,"expected the node content, but found ','"):F(i,"missed comma between flow collection entries"),he=le=Ae=null,D=Y=!1,ke===63){const He=i.input.charCodeAt(i.position+1);Q(He)&&(D=Y=!0,i.position++,X(i,!0,y))}k=i.line,R=i.lineStart,W=i.position,te(i,y,t,!1,!0),he=i.tag,le=i.result,X(i,!0,y),ke=i.input.charCodeAt(i.position),(Y||i.line===k)&&ke===58&&(D=!0,ke=i.input.charCodeAt(++i.position),X(i,!0,y),te(i,y,t,!1,!0),Ae=i.result),K?P(i,N,ce,he,le,Ae,k,R,W):D?N.push(P(i,null,ce,he,le,Ae,k,R,W)):N.push(le),X(i,!0,y),ke=i.input.charCodeAt(i.position),ke===44?(T=!0,ke=i.input.charCodeAt(++i.position)):T=!1}F(i,"unexpected end of the stream within a flow collection")}function V(i,y){let T,k=d,R=!1,W=!1,p=y,N=0,L=!1,j,D=i.input.charCodeAt(i.position);if(D===124)T=!1;else if(D===62)T=!0;else return!1;for(i.kind="scalar",i.result="";D!==0;)if(D=i.input.charCodeAt(++i.position),D===43||D===45)d===k?k=D===43?m:u:F(i,"repeat of a chomping mode identifier");else if((j=q(D))>=0)j===0?F(i,"bad explicit indentation width of a block scalar; it cannot be less than one"):W?F(i,"repeat of an indentation width identifier"):(p=y+j-1,W=!0);else break;if(J(D)){do D=i.input.charCodeAt(++i.position);while(J(D));if(D===35)do D=i.input.charCodeAt(++i.position);while(!w(D)&&D!==0)}for(;D!==0;){for(se(i),i.lineIndent=0,D=i.input.charCodeAt(i.position);(!W||i.lineIndent<p)&&D===32;)i.lineIndent++,D=i.input.charCodeAt(++i.position);if(!W&&i.lineIndent>p&&(p=i.lineIndent),w(D)){N++;continue}if(!W&&p===0&&F(i,"missing indentation for block scalar"),i.lineIndent<p){k===m?i.result+=e.repeat(`
`,R?1+N:N):k===d&&R&&(i.result+=`
`);break}T?J(D)?(L=!0,i.result+=e.repeat(`
`,R?1+N:N)):L?(L=!1,i.result+=e.repeat(`
`,N+1)):N===0?R&&(i.result+=" "):i.result+=e.repeat(`
`,N):i.result+=e.repeat(`
`,R?1+N:N),R=!0,W=!0,N=0;const Y=i.position;for(;!w(D)&&D!==0;)D=i.input.charCodeAt(++i.position);We(i,Y,i.position,!1)}return!0}function C(i,y){const T=i.tag,k=i.anchor,R=[];let W=!1;if(i.firstTabInLine!==-1)return!1;i.anchor!==null&&Be(i,i.anchor,R);let p=i.input.charCodeAt(i.position);for(;p!==0&&(i.firstTabInLine!==-1&&(i.position=i.firstTabInLine,F(i,"tab characters must not be used in indentation")),p===45);){const N=i.input.charCodeAt(i.position+1);if(!Q(N))break;if(W=!0,i.position++,X(i,!0,-1)&&i.lineIndent<=y){R.push(null),p=i.input.charCodeAt(i.position);continue}const L=i.line;if(te(i,y,l,!1,!0),R.push(i.result),X(i,!0,-1),p=i.input.charCodeAt(i.position),(i.line===L||i.lineIndent>y)&&p!==0)F(i,"bad indentation of a sequence entry");else if(i.lineIndent<y)break}return W?(i.tag=T,i.anchor=k,i.kind="sequence",i.result=R,!0):!1}function re(i,y,T){let k,R,W,p;const N=i.tag,L=i.anchor,j={},D=Object.create(null);let Y=null,K=null,ce=null,le=!1,he=!1;if(i.firstTabInLine!==-1)return!1;i.anchor!==null&&Be(i,i.anchor,j);let Ae=i.input.charCodeAt(i.position);for(;Ae!==0;){!le&&i.firstTabInLine!==-1&&(i.position=i.firstTabInLine,F(i,"tab characters must not be used in indentation"));const ke=i.input.charCodeAt(i.position+1),He=i.line;if((Ae===63||Ae===58)&&Q(ke))Ae===63?(le&&(P(i,j,D,Y,K,null,R,W,p),Y=K=ce=null),he=!0,le=!0,k=!0):le?(le=!1,k=!0):F(i,"incomplete explicit mapping pair; a key node is missed; or followed by a non-tabulated empty line"),i.position+=1,Ae=ke;else{if(R=i.line,W=i.lineStart,p=i.position,!te(i,T,s,!1,!0))break;if(i.line===He){for(Ae=i.input.charCodeAt(i.position);J(Ae);)Ae=i.input.charCodeAt(++i.position);if(Ae===58)Ae=i.input.charCodeAt(++i.position),Q(Ae)||F(i,"a whitespace character is expected after the key-value separator within a block mapping"),le&&(P(i,j,D,Y,K,null,R,W,p),Y=K=ce=null),he=!0,le=!1,k=!1,Y=i.tag,K=i.result;else if(he)F(i,"can not read an implicit mapping pair; a colon is missed");else return i.tag=N,i.anchor=L,!0}else if(he)F(i,"can not read a block mapping entry; a multiline key may not be an implicit key");else return i.tag=N,i.anchor=L,!0}if((i.line===He||i.lineIndent>y)&&(le&&(R=i.line,W=i.lineStart,p=i.position),te(i,y,c,!0,k)&&(le?K=i.result:ce=i.result),le||(P(i,j,D,Y,K,ce,R,W,p),Y=K=ce=null),X(i,!0,-1),Ae=i.input.charCodeAt(i.position)),(i.line===He||i.lineIndent>y)&&Ae!==0)F(i,"bad indentation of a mapping entry");else if(i.lineIndent<y)break}return le&&P(i,j,D,Y,K,null,R,W,p),he&&(i.tag=N,i.anchor=L,i.kind="mapping",i.result=j),he}function oe(i){let y=!1,T=!1,k,R,W=i.input.charCodeAt(i.position);if(W!==33)return!1;i.tag!==null&&F(i,"duplication of a tag property"),W=i.input.charCodeAt(++i.position),W===60?(y=!0,W=i.input.charCodeAt(++i.position)):W===33?(T=!0,k="!!",W=i.input.charCodeAt(++i.position)):k="!";let p=i.position;if(y){do W=i.input.charCodeAt(++i.position);while(W!==0&&W!==62);i.position<i.length?(R=i.input.slice(p,i.position),W=i.input.charCodeAt(++i.position)):F(i,"unexpected end of the stream within a verbatim tag")}else{for(;W!==0&&!Q(W);)W===33&&(T?F(i,"tag suffix cannot contain exclamation marks"):(k=i.input.slice(p-1,i.position+1),_.test(k)||F(i,"named tag handle cannot contain such characters"),T=!0,p=i.position+1)),W=i.input.charCodeAt(++i.position);R=i.input.slice(p,i.position),x.test(R)&&F(i,"tag suffix cannot contain flow indicator characters")}R&&!E.test(R)&&F(i,"tag name cannot contain such characters: "+R);try{R=decodeURIComponent(R)}catch{F(i,"tag name is malformed: "+R)}return y?i.tag=R:r.call(i.tagMap,k)?i.tag=i.tagMap[k]+R:k==="!"?i.tag="!"+R:k==="!!"?i.tag="tag:yaml.org,2002:"+R:F(i,'undeclared tag handle "'+k+'"'),!0}function ne(i){let y=i.input.charCodeAt(i.position);if(y!==38)return!1;i.anchor!==null&&F(i,"duplication of an anchor property"),y=i.input.charCodeAt(++i.position);const T=i.position;for(;y!==0&&!Q(y)&&!pe(y);)y=i.input.charCodeAt(++i.position);return i.position===T&&F(i,"name of an anchor node must contain at least one character"),i.anchor=i.input.slice(T,i.position),!0}function z(i){let y=i.input.charCodeAt(i.position);if(y!==42)return!1;y=i.input.charCodeAt(++i.position);const T=i.position;for(;y!==0&&!Q(y)&&!pe(y);)y=i.input.charCodeAt(++i.position);i.position===T&&F(i,"name of an alias node must contain at least one character");const k=i.input.slice(T,i.position);return r.call(i.anchorMap,k)||F(i,'unidentified alias "'+k+'"'),i.result=i.anchorMap[k],X(i,!0,-1),!0}function _e(i,y,T,k){const R=Je(i);return Ze(i),_n(i,y),i.tag=null,i.anchor=null,i.kind=null,i.result=null,re(i,T,k)&&i.kind==="mapping"?(Ue(i),!0):(Ge(i),_n(i,R),!1)}function te(i,y,T,k,R){let W,p,N=1,L=!1,j=!1,D=null,Y,K,ce;i.depth>=i.maxDepth&&F(i,"nesting exceeded maxDepth ("+i.maxDepth+")"),i.depth+=1,i.listener!==null&&i.listener("open",i),i.tag=null,i.anchor=null,i.kind=null,i.result=null;const le=W=p=c===T||l===T;if(k&&X(i,!0,-1)&&(L=!0,i.lineIndent>y?N=1:i.lineIndent===y?N=0:i.lineIndent<y&&(N=-1)),N===1)for(;;){const he=i.input.charCodeAt(i.position),Ae=Je(i);if(L&&(he===33&&i.tag!==null||he===38&&i.anchor!==null)||!oe(i)&&!ne(i))break;D===null&&(D=Ae),X(i,!0,-1)?(L=!0,p=le,i.lineIndent>y?N=1:i.lineIndent===y?N=0:i.lineIndent<y&&(N=-1)):p=!1}if(p&&(p=L||R),N===1||c===T)if(t===T||s===T?K=y:K=y+1,ce=i.position-i.lineStart,N===1)if(p&&(C(i,ce)||re(i,ce,K))||O(i,K))j=!0;else{const he=i.input.charCodeAt(i.position);D!==null&&le&&!p&&he!==124&&he!==62&&_e(i,D,D.position-D.lineStart,K)||W&&V(i,K)||b(i,K)||A(i,K)?j=!0:z(i)?(j=!0,(i.tag!==null||i.anchor!==null)&&F(i,"alias node should not have any properties")):v(i,K,t===T)&&(j=!0,i.tag===null&&(i.tag="?")),i.anchor!==null&&Be(i,i.anchor,i.result)}else N===0&&(j=p&&C(i,ce));if(i.tag===null)i.anchor!==null&&Be(i,i.anchor,i.result);else if(i.tag==="?"){i.result!==null&&i.kind!=="scalar"&&F(i,'unacceptable node kind for !<?> tag; it should be "scalar", not "'+i.kind+'"');for(let he=0,Ae=i.implicitTypes.length;he<Ae;he+=1)if(Y=i.implicitTypes[he],Y.resolve(i.result)){i.result=Y.construct(i.result),i.tag=Y.tag,i.anchor!==null&&Be(i,i.anchor,i.result);break}}else if(i.tag!=="!"){if(r.call(i.typeMap[i.kind||"fallback"],i.tag))Y=i.typeMap[i.kind||"fallback"][i.tag];else{Y=null;const he=i.typeMap.multi[i.kind||"fallback"];for(let Ae=0,ke=he.length;Ae<ke;Ae+=1)if(i.tag.slice(0,he[Ae].tag.length)===he[Ae].tag){Y=he[Ae];break}}Y||F(i,"unknown tag !<"+i.tag+">"),i.result!==null&&Y.kind!==i.kind&&F(i,"unacceptable node kind for !<"+i.tag+'> tag; it should be "'+Y.kind+'", not "'+i.kind+'"'),Y.resolve(i.result,i.tag)?(i.result=Y.construct(i.result,i.tag),i.anchor!==null&&Be(i,i.anchor,i.result)):F(i,"cannot resolve a node with !<"+i.tag+"> explicit tag")}return i.listener!==null&&i.listener("close",i),i.depth-=1,i.tag!==null||i.anchor!==null||j}function fe(i){const y=i.position;let T=!1,k;for(i.version=null,i.checkLineBreaks=i.legacy,i.tagMap=Object.create(null),i.anchorMap=Object.create(null);(k=i.input.charCodeAt(i.position))!==0&&(X(i,!0,-1),k=i.input.charCodeAt(i.position),!(i.lineIndent>0||k!==37));){T=!0,k=i.input.charCodeAt(++i.position);let R=i.position;for(;k!==0&&!Q(k);)k=i.input.charCodeAt(++i.position);const W=i.input.slice(R,i.position),p=[];for(W.length<1&&F(i,"directive name must not be less than one character in length");k!==0;){for(;J(k);)k=i.input.charCodeAt(++i.position);if(k===35){do k=i.input.charCodeAt(++i.position);while(k!==0&&!w(k));break}if(w(k))break;for(R=i.position;k!==0&&!Q(k);)k=i.input.charCodeAt(++i.position);p.push(i.input.slice(R,i.position))}k!==0&&se(i),r.call(Cn,W)?Cn[W](i,W,p):Ee(i,'unknown document directive "'+W+'"')}if(X(i,!0,-1),i.lineIndent===0&&i.input.charCodeAt(i.position)===45&&i.input.charCodeAt(i.position+1)===45&&i.input.charCodeAt(i.position+2)===45?(i.position+=3,X(i,!0,-1)):T&&F(i,"directives end mark is expected"),te(i,i.lineIndent-1,c,!1,!0),X(i,!0,-1),i.checkLineBreaks&&h.test(i.input.slice(y,i.position))&&Ee(i,"non-ASCII line breaks are interpreted as content"),i.documents.push(i.result),i.position===i.lineStart&&me(i)){i.input.charCodeAt(i.position)===46&&(i.position+=3,X(i,!0,-1));return}i.position<i.length-1&&F(i,"end of the stream or a document separator is expected")}function xe(i,y){i=String(i),y=y||{},i.length!==0&&(i.charCodeAt(i.length-1)!==10&&i.charCodeAt(i.length-1)!==13&&(i+=`
`),i.charCodeAt(0)===65279&&(i=i.slice(1)));const T=new G(i,y),k=i.indexOf("\0");for(k!==-1&&(T.position=k,F(T,"null byte is not allowed in input")),T.input+="\0";T.input.charCodeAt(T.position)===32;)T.lineIndent+=1,T.position+=1;for(;T.position<T.length-1;)fe(T);return T.documents}function Ce(i,y,T){y!==null&&typeof y=="object"&&typeof T>"u"&&(T=y,y=null);const k=xe(i,T);if(typeof y!="function")return k;for(let R=0,W=k.length;R<W;R+=1)y(k[R])}function Oe(i,y){const T=xe(i,y);if(T.length!==0){if(T.length===1)return T[0];throw new n("expected a single document in the stream, but found more")}}return qa.loadAll=Ce,qa.load=Oe,qa}var ut={},Es;function gp(){if(Es)return ut;Es=1;const e=ka(),n=Pa(),o=ai(),a=Object.prototype.toString,r=Object.prototype.hasOwnProperty,t=65279,s=9,l=10,c=13,d=32,u=33,m=34,f=35,h=37,x=38,_=39,E=42,I=44,w=45,J=58,Q=61,pe=62,ue=63,Z=64,q=91,B=93,ae=96,de=123,M=124,H=125,G={};G[0]="\\0",G[7]="\\a",G[8]="\\b",G[9]="\\t",G[10]="\\n",G[11]="\\v",G[12]="\\f",G[13]="\\r",G[27]="\\e",G[34]='\\"',G[92]="\\\\",G[133]="\\N",G[160]="\\_",G[8232]="\\L",G[8233]="\\P";const ye=["y","Y","yes","Yes","YES","on","On","ON","n","N","no","No","NO","off","Off","OFF"],F=/^[-+]?[0-9_]+(?::[0-9_]+)+(?:\.[0-9_]*)?$/;function Ee(p,N){if(N===null)return{};const L={},j=Object.keys(N);for(let D=0,Y=j.length;D<Y;D+=1){let K=j[D],ce=String(N[K]);K.slice(0,2)==="!!"&&(K="tag:yaml.org,2002:"+K.slice(2));const le=p.compiledTypeMap.fallback[K];le&&r.call(le.styleAliases,ce)&&(ce=le.styleAliases[ce]),L[K]=ce}return L}function Be(p){let N,L;const j=p.toString(16).toUpperCase();if(p<=255)N="x",L=2;else if(p<=65535)N="u",L=4;else if(p<=4294967295)N="U",L=8;else throw new n("code point within a string may not be greater than 0xFFFFFFFF");return"\\"+N+e.repeat("0",L-j.length)+j}const Ze=1,Ue=2;function Ge(p){this.schema=p.schema||o,this.indent=Math.max(1,p.indent||2),this.noArrayIndent=p.noArrayIndent||!1,this.skipInvalid=p.skipInvalid||!1,this.flowLevel=e.isNothing(p.flowLevel)?-1:p.flowLevel,this.styleMap=Ee(this.schema,p.styles||null),this.sortKeys=p.sortKeys||!1,this.lineWidth=p.lineWidth||80,this.noRefs=p.noRefs||!1,this.noCompatMode=p.noCompatMode||!1,this.condenseFlow=p.condenseFlow||!1,this.quotingType=p.quotingType==='"'?Ue:Ze,this.forceQuotes=p.forceQuotes||!1,this.replacer=typeof p.replacer=="function"?p.replacer:null,this.implicitTypes=this.schema.compiledImplicit,this.explicitTypes=this.schema.compiledExplicit,this.tag=null,this.result="",this.duplicates=[],this.usedDuplicates=null}function Je(p,N){const L=e.repeat(" ",N);let j=0,D="";const Y=p.length;for(;j<Y;){let K;const ce=p.indexOf(`
`,j);ce===-1?(K=p.slice(j),j=Y):(K=p.slice(j,ce+1),j=ce+1),K.length&&K!==`
`&&(D+=L),D+=K}return D}function _n(p,N){return`
`+e.repeat(" ",p.indent*N)}function Cn(p,N){for(let L=0,j=p.implicitTypes.length;L<j;L+=1)if(p.implicitTypes[L].resolve(N))return!0;return!1}function We(p){return p===d||p===s}function Ye(p){return p>=32&&p<=126||p>=161&&p<=55295&&p!==8232&&p!==8233||p>=57344&&p<=65533&&p!==t||p>=65536&&p<=1114111}function P(p){return Ye(p)&&p!==t&&p!==c&&p!==l}function se(p,N,L){const j=P(p),D=j&&!We(p);return(L?j:j&&p!==I&&p!==q&&p!==B&&p!==de&&p!==H)&&p!==f&&!(N===J&&!D)||P(N)&&!We(N)&&p===f||N===J&&D}function X(p){return Ye(p)&&p!==t&&!We(p)&&p!==w&&p!==ue&&p!==J&&p!==I&&p!==q&&p!==B&&p!==de&&p!==H&&p!==f&&p!==x&&p!==E&&p!==u&&p!==M&&p!==Q&&p!==pe&&p!==_&&p!==m&&p!==h&&p!==Z&&p!==ae}function me(p){return!We(p)&&p!==J}function Te(p,N){const L=p.charCodeAt(N);let j;return L>=55296&&L<=56319&&N+1<p.length&&(j=p.charCodeAt(N+1),j>=56320&&j<=57343)?(L-55296)*1024+j-56320+65536:L}function v(p){return/^\n* /.test(p)}const b=1,A=2,O=3,V=4,C=5;function re(p,N,L,j,D,Y,K,ce){let le,he=0,Ae=null,ke=!1,He=!1;const di=j!==-1;let Wo=-1,Yo=X(Te(p,0))&&me(Te(p,p.length-1));if(N||K)for(le=0;le<p.length;he>=65536?le+=2:le++){if(he=Te(p,le),!Ye(he))return C;Yo=Yo&&se(he,Ae,ce),Ae=he}else{for(le=0;le<p.length;he>=65536?le+=2:le++){if(he=Te(p,le),he===l)ke=!0,di&&(He=He||le-Wo-1>j&&p[Wo+1]!==" ",Wo=le);else if(!Ye(he))return C;Yo=Yo&&se(he,Ae,ce),Ae=he}He=He||di&&le-Wo-1>j&&p[Wo+1]!==" "}return!ke&&!He?Yo&&!K&&!D(p)?b:Y===Ue?C:A:L>9&&v(p)?C:K?Y===Ue?C:A:He?V:O}function oe(p,N,L,j,D){p.dump=(function(){if(N.length===0)return p.quotingType===Ue?'""':"''";if(!p.noCompatMode&&(ye.indexOf(N)!==-1||F.test(N)))return p.quotingType===Ue?'"'+N+'"':"'"+N+"'";const Y=p.indent*Math.max(1,L),K=p.lineWidth===-1?-1:Math.max(Math.min(p.lineWidth,40),p.lineWidth-Y),ce=j||p.flowLevel>-1&&L>=p.flowLevel;function le(he){return Cn(p,he)}switch(re(N,ce,p.indent,K,le,p.quotingType,p.forceQuotes&&!j,D)){case b:return N;case A:return"'"+N.replace(/'/g,"''")+"'";case O:return"|"+ne(N,p.indent)+z(Je(N,Y));case V:return">"+ne(N,p.indent)+z(Je(_e(N,K),Y));case C:return'"'+fe(N)+'"';default:throw new n("impossible error: invalid scalar style")}})()}function ne(p,N){const L=v(p)?String(N):"",j=p[p.length-1]===`
`,Y=j&&(p[p.length-2]===`
`||p===`
`)?"+":j?"":"-";return L+Y+`
`}function z(p){return p[p.length-1]===`
`?p.slice(0,-1):p}function _e(p,N){const L=/(\n+)([^\n]*)/g;let j=(function(){let ce=p.indexOf(`
`);return ce=ce!==-1?ce:p.length,L.lastIndex=ce,te(p.slice(0,ce),N)})(),D=p[0]===`
`||p[0]===" ",Y,K;for(;K=L.exec(p);){const ce=K[1],le=K[2];Y=le[0]===" ",j+=ce+(!D&&!Y&&le!==""?`
`:"")+te(le,N),D=Y}return j}function te(p,N){if(p===""||p[0]===" ")return p;const L=/ [^ ]/g;let j,D=0,Y,K=0,ce=0,le="";for(;j=L.exec(p);)ce=j.index,ce-D>N&&(Y=K>D?K:ce,le+=`
`+p.slice(D,Y),D=Y+1),K=ce;return le+=`
`,p.length-D>N&&K>D?le+=p.slice(D,K)+`
`+p.slice(K+1):le+=p.slice(D),le.slice(1)}function fe(p){let N="",L=0;for(let j=0;j<p.length;L>=65536?j+=2:j++){L=Te(p,j);const D=G[L];!D&&Ye(L)?(N+=p[j],L>=65536&&(N+=p[j+1])):N+=D||Be(L)}return N}function xe(p,N,L){let j="";const D=p.tag;for(let Y=0,K=L.length;Y<K;Y+=1){let ce=L[Y];p.replacer&&(ce=p.replacer.call(L,String(Y),ce)),(T(p,N,ce,!1,!1)||typeof ce>"u"&&T(p,N,null,!1,!1))&&(j!==""&&(j+=","+(p.condenseFlow?"":" ")),j+=p.dump)}p.tag=D,p.dump="["+j+"]"}function Ce(p,N,L,j){let D="";const Y=p.tag;for(let K=0,ce=L.length;K<ce;K+=1){let le=L[K];p.replacer&&(le=p.replacer.call(L,String(K),le)),(T(p,N+1,le,!0,!0,!1,!0)||typeof le>"u"&&T(p,N+1,null,!0,!0,!1,!0))&&((!j||D!=="")&&(D+=_n(p,N)),p.dump&&l===p.dump.charCodeAt(0)?D+="-":D+="- ",D+=p.dump)}p.tag=Y,p.dump=D||"[]"}function Oe(p,N,L){let j="";const D=p.tag,Y=Object.keys(L);for(let K=0,ce=Y.length;K<ce;K+=1){let le="";j!==""&&(le+=", "),p.condenseFlow&&(le+='"');const he=Y[K];let Ae=L[he];p.replacer&&(Ae=p.replacer.call(L,he,Ae)),T(p,N,he,!1,!1)&&(p.dump.length>1024&&(le+="? "),le+=p.dump+(p.condenseFlow?'"':"")+":"+(p.condenseFlow?"":" "),T(p,N,Ae,!1,!1)&&(le+=p.dump,j+=le))}p.tag=D,p.dump="{"+j+"}"}function i(p,N,L,j){let D="";const Y=p.tag,K=Object.keys(L);if(p.sortKeys===!0)K.sort();else if(typeof p.sortKeys=="function")K.sort(p.sortKeys);else if(p.sortKeys)throw new n("sortKeys must be a boolean or a function");for(let ce=0,le=K.length;ce<le;ce+=1){let he="";(!j||D!=="")&&(he+=_n(p,N));const Ae=K[ce];let ke=L[Ae];if(p.replacer&&(ke=p.replacer.call(L,Ae,ke)),!T(p,N+1,Ae,!0,!0,!0))continue;const He=p.tag!==null&&p.tag!=="?"||p.dump&&p.dump.length>1024;He&&(p.dump&&l===p.dump.charCodeAt(0)?he+="?":he+="? "),he+=p.dump,He&&(he+=_n(p,N)),T(p,N+1,ke,!0,He)&&(p.dump&&l===p.dump.charCodeAt(0)?he+=":":he+=": ",he+=p.dump,D+=he)}p.tag=Y,p.dump=D||"{}"}function y(p,N,L){const j=L?p.explicitTypes:p.implicitTypes;for(let D=0,Y=j.length;D<Y;D+=1){const K=j[D];if((K.instanceOf||K.predicate)&&(!K.instanceOf||typeof N=="object"&&N instanceof K.instanceOf)&&(!K.predicate||K.predicate(N))){if(L?K.multi&&K.representName?p.tag=K.representName(N):p.tag=K.tag:p.tag="?",K.represent){const ce=p.styleMap[K.tag]||K.defaultStyle;let le;if(a.call(K.represent)==="[object Function]")le=K.represent(N,ce);else if(r.call(K.represent,ce))le=K.represent[ce](N,ce);else throw new n("!<"+K.tag+'> tag resolver accepts not "'+ce+'" style');p.dump=le}return!0}}return!1}function T(p,N,L,j,D,Y,K){p.tag=null,p.dump=L,y(p,L,!1)||y(p,L,!0);const ce=a.call(p.dump),le=j;j&&(j=p.flowLevel<0||p.flowLevel>N);const he=ce==="[object Object]"||ce==="[object Array]";let Ae,ke;if(he&&(Ae=p.duplicates.indexOf(L),ke=Ae!==-1),(p.tag!==null&&p.tag!=="?"||ke||p.indent!==2&&N>0)&&(D=!1),ke&&p.usedDuplicates[Ae])p.dump="*ref_"+Ae;else{if(he&&ke&&!p.usedDuplicates[Ae]&&(p.usedDuplicates[Ae]=!0),ce==="[object Object]")j&&Object.keys(p.dump).length!==0?(i(p,N,p.dump,D),ke&&(p.dump="&ref_"+Ae+p.dump)):(Oe(p,N,p.dump),ke&&(p.dump="&ref_"+Ae+" "+p.dump));else if(ce==="[object Array]")j&&p.dump.length!==0?(p.noArrayIndent&&!K&&N>0?Ce(p,N-1,p.dump,D):Ce(p,N,p.dump,D),ke&&(p.dump="&ref_"+Ae+p.dump)):(xe(p,N,p.dump),ke&&(p.dump="&ref_"+Ae+" "+p.dump));else if(ce==="[object String]")p.tag!=="?"&&oe(p,p.dump,N,Y,le);else{if(ce==="[object Undefined]")return!1;if(p.skipInvalid)return!1;throw new n("unacceptable kind of an object to dump "+ce)}if(p.tag!==null&&p.tag!=="?"){let He=encodeURI(p.tag[0]==="!"?p.tag.slice(1):p.tag).replace(/!/g,"%21");p.tag[0]==="!"?He="!"+He:He.slice(0,18)==="tag:yaml.org,2002:"?He="!!"+He.slice(18):He="!<"+He+">",p.dump=He+" "+p.dump}}return!0}function k(p,N){const L=[],j=[];R(p,L,j);const D=j.length;for(let Y=0;Y<D;Y+=1)N.duplicates.push(L[j[Y]]);N.usedDuplicates=new Array(D)}function R(p,N,L){if(p!==null&&typeof p=="object"){const j=N.indexOf(p);if(j!==-1)L.indexOf(j)===-1&&L.push(j);else if(N.push(p),Array.isArray(p))for(let D=0,Y=p.length;D<Y;D+=1)R(p[D],N,L);else{const D=Object.keys(p);for(let Y=0,K=D.length;Y<K;Y+=1)R(p[D[Y]],N,L)}}}function W(p,N){N=N||{};const L=new Ge(N);L.noRefs||k(p,L);let j=p;return L.replacer&&(j=L.replacer.call({"":j},"",j)),T(L,0,j,!0,!0)?L.dump+`
`:""}return ut.dump=W,ut}var ws;function bp(){if(ws)return on;ws=1;const e=vp(),n=gp();function o(a,r){return function(){throw new Error("Function yaml."+a+" is removed in js-yaml 4. Use yaml."+r+" instead, which is now safe by default.")}}return on.Type=vn(),on.Schema=Ac(),on.FAILSAFE_SCHEMA=Rc(),on.JSON_SCHEMA=Cc(),on.CORE_SCHEMA=Ic(),on.DEFAULT_SCHEMA=ai(),on.load=e.load,on.loadAll=e.loadAll,on.dump=n.dump,on.YAMLException=Pa(),on.types={binary:Oc(),float:wc(),map:Bc(),null:Tc(),pairs:Dc(),set:Vc(),timestamp:kc(),bool:Sc(),int:Ec(),merge:Pc(),omap:jc(),seq:xc(),str:Nc()},on.safeLoad=o("safeLoad","load"),on.safeLoadAll=o("safeLoadAll","loadAll"),on.safeDump=o("safeDump","dump"),on}var _p=bp();const ir=fp(_p),{Type:_b,Schema:yb,FAILSAFE_SCHEMA:Ab,JSON_SCHEMA:Nb,CORE_SCHEMA:xb,DEFAULT_SCHEMA:Bb,load:Rb,loadAll:Tb,dump:Sb,YAMLException:Eb,types:wb,safeLoad:Cb,safeLoadAll:Ib,safeDump:kb}=ir;class yp{constructor({ruleSetRepository:n}){this.ruleSetRepository=n}list(){return this.ruleSetRepository.getAll()}get(n){return this.ruleSetRepository.get(n)}async save(n){const o=await this.ruleSetRepository.get(n.id),a=pp(n,{createdAt:o?.createdAt??new Date,updatedAt:new Date});return this.ruleSetRepository.put(a)}async importFromJson(n,o){let a;try{a=JSON.parse(n)}catch{throw new TypeError("Arquivo de regras inválido: JSON malformado.")}return this.save(o?{...a,grupo:o}:a)}async importFromYaml(n,o){let a;try{a=ir.load(n)}catch{throw new TypeError("Arquivo de regras inválido: YAML malformado.")}return this.save(o?{...a,grupo:o}:a)}async importFromEntries(n,o){const a=[];let r=0;for(const t of n){if(t.error){a.push(`${t.name}: ${t.error}`);continue}try{/\.json$/i.test(t.name)?await this.importFromJson(t.content,o):await this.importFromYaml(t.content,o),r+=1}catch(s){a.push(`${t.name}: ${s.message}`)}}return{imported:r,failures:a}}exportToJson(n){Pt(n);const{source:o,createdAt:a,updatedAt:r,...t}=n;return JSON.stringify(t,null,2)}exportToYaml(n){Pt(n);const{source:o,createdAt:a,updatedAt:r,...t}=n;return ir.dump(t,{noRefs:!0})}async exportByIdToJson(n){const o=await this.ruleSetRepository.get(n);if(!o)throw new Error("Conjunto de regras não encontrado.");return this.exportToJson(o)}async exportByIdToYaml(n){const o=await this.ruleSetRepository.get(n);if(!o)throw new Error("Conjunto de regras não encontrado.");return this.exportToYaml(o)}delete(n){return this.ruleSetRepository.delete(n)}}async function Ap({indexedDB:e}={}){const n=await Fm(e),o={projectRepository:new Km(n),environmentRepository:new Hm(n),elementRepository:new zm(n),evaluationRepository:new Um(n),ruleSetRepository:new Gm(n)},a=new ep(o);return{projectService:new op(o),evaluationService:a,quickEvaluationService:new ap({evaluationService:a}),ruleSetService:new yp(o),close:()=>n.close()}}const Np=`id: area_descanso
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
`,xp=`id: armario_vestiario
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
`,Bp=`id: assento_pmr_plateia
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
`,Rp=`id: bacia_sanitaria
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
`,Tp=`id: balcao
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
`,Sp=`id: banco_vestiario
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
`,Ep=`id: banheira_acessivel
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
`,wp=`id: barras_apoio
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
`,Cp=`id: bebedouro
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
`,Ip=`id: cabides
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
`,kp=`id: cabina_vestiario
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
`,Pp=`id: caixa_autoatendimento
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
`,Op=`id: calcada
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
`,jp=`id: chuveiro
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
`,Dp=`id: corredores
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
`,Vp=`id: corrimaos
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
`,Lp=`id: degraus-isolados
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
`,qp=`id: elevadores
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
`,$p=`id: escadas
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
`,Mp=`id: espaco_cao_guia
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
`,Fp=`id: espaco_pcr_plateia
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
`,zp=`id: espelhos_acessiveis
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
`,Hp=`id: estacionamento
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
`,Up=`id: guarda_corpos
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
`,Kp=`id: janelas
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
`,Gp=`id: lavatorio
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
`,Wp=`id: mesa
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
`,Yp=`id: mictorio
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
`,Jp=`id: papeleiras
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
`,Qp=`id: piscina
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
`,Xp=`id: piso-desnivel
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
`,Zp=`id: piso_tatil
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
`,ef=`id: porta_objetos
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
`,nf=`id: portas
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
`,of=`id: rampas
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
`,af=`id: sanitario_acessivel
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
`,rf=`id: sinalizacao
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
`,tf=`id: vagas_acessiveis
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
`,sf=Object.assign({"../rules/nbr9050-2020/area_descanso.yaml":Np,"../rules/nbr9050-2020/armario_vestiario.yaml":xp,"../rules/nbr9050-2020/assento_pmr_plateia.yaml":Bp,"../rules/nbr9050-2020/bacia_sanitaria.yaml":Rp,"../rules/nbr9050-2020/balcao.yaml":Tp,"../rules/nbr9050-2020/banco_vestiario.yaml":Sp,"../rules/nbr9050-2020/banheira_acessivel.yaml":Ep,"../rules/nbr9050-2020/barras_apoio.yaml":wp,"../rules/nbr9050-2020/bebedouro.yaml":Cp,"../rules/nbr9050-2020/cabides.yaml":Ip,"../rules/nbr9050-2020/cabina_vestiario.yaml":kp,"../rules/nbr9050-2020/caixa_autoatendimento.yaml":Pp,"../rules/nbr9050-2020/calcada.yaml":Op,"../rules/nbr9050-2020/chuveiro.yaml":jp,"../rules/nbr9050-2020/corredores.yaml":Dp,"../rules/nbr9050-2020/corrimaos.yaml":Vp,"../rules/nbr9050-2020/degraus-isolados.yaml":Lp,"../rules/nbr9050-2020/elevadores.yaml":qp,"../rules/nbr9050-2020/escadas.yaml":$p,"../rules/nbr9050-2020/espaco_cao_guia.yaml":Mp,"../rules/nbr9050-2020/espaco_pcr_plateia.yaml":Fp,"../rules/nbr9050-2020/espelhos_acessiveis.yaml":zp,"../rules/nbr9050-2020/estacionamento.yaml":Hp,"../rules/nbr9050-2020/guarda_corpos.yaml":Up,"../rules/nbr9050-2020/janelas.yaml":Kp,"../rules/nbr9050-2020/lavatorio.yaml":Gp,"../rules/nbr9050-2020/mesa.yaml":Wp,"../rules/nbr9050-2020/mictorio.yaml":Yp,"../rules/nbr9050-2020/papeleiras.yaml":Jp,"../rules/nbr9050-2020/piscina.yaml":Qp,"../rules/nbr9050-2020/piso-desnivel.yaml":Xp,"../rules/nbr9050-2020/piso_tatil.yaml":Zp,"../rules/nbr9050-2020/porta_objetos.yaml":ef,"../rules/nbr9050-2020/portas.yaml":nf,"../rules/nbr9050-2020/rampas.yaml":of,"../rules/nbr9050-2020/sanitario_acessivel.yaml":af,"../rules/nbr9050-2020/sinalizacao.yaml":rf,"../rules/nbr9050-2020/vagas_acessiveis.yaml":tf});async function lf(){return Object.entries(sf).map(([e,n])=>({path:e,ruleSet:ir.load(n)})).sort((e,n)=>e.ruleSet.nome.localeCompare(n.ruleSet.nome))}const Po=typeof document<"u";function Lc(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function cf(e){return e.__esModule||e[Symbol.toStringTag]==="Module"||e.default&&Lc(e.default)}const De=Object.assign;function dt(e,n){const o={};for(const a in n){const r=n[a];o[a]=Vn(r)?r.map(e):e(r)}return o}const ma=()=>{},Vn=Array.isArray;function Cs(e,n){const o={};for(const a in e)o[a]=a in n?n[a]:e[a];return o}const qc=/#/g,uf=/&/g,df=/\//g,mf=/=/g,pf=/\?/g,$c=/\+/g,ff=/%5B/g,hf=/%5D/g,Mc=/%5E/g,vf=/%60/g,Fc=/%7B/g,gf=/%7C/g,zc=/%7D/g,bf=/%20/g;function ri(e){return e==null?"":encodeURI(""+e).replace(gf,"|").replace(ff,"[").replace(hf,"]")}function _f(e){return ri(e).replace(Fc,"{").replace(zc,"}").replace(Mc,"^")}function Ot(e){return ri(e).replace($c,"%2B").replace(bf,"+").replace(qc,"%23").replace(uf,"%26").replace(vf,"`").replace(Fc,"{").replace(zc,"}").replace(Mc,"^")}function yf(e){return Ot(e).replace(mf,"%3D")}function Af(e){return ri(e).replace(qc,"%23").replace(pf,"%3F")}function Nf(e){return Af(e).replace(df,"%2F")}function xa(e){if(e==null)return null;try{return decodeURIComponent(""+e)}catch{}return""+e}const xf=/\/$/,Bf=e=>e.replace(xf,"");function mt(e,n,o="/"){let a,r={},t="",s="";const l=n.indexOf("#");let c=n.indexOf("?");return c=l>=0&&c>l?-1:c,c>=0&&(a=n.slice(0,c),t=n.slice(c,l>0?l:n.length),r=e(t.slice(1))),l>=0&&(a=a||n.slice(0,l),s=n.slice(l,n.length)),a=Ef(a??n,o),{fullPath:a+t+s,path:a,query:r,hash:xa(s)}}function Rf(e,n){const o=n.query?e(n.query):"";return n.path+(o&&"?")+o+(n.hash||"")}function Is(e,n){return!n||!e.toLowerCase().startsWith(n.toLowerCase())?e:e.slice(n.length)||"/"}function Tf(e,n,o){const a=n.matched.length-1,r=o.matched.length-1;return a>-1&&a===r&&Fo(n.matched[a],o.matched[r])&&Hc(n.params,o.params)&&e(n.query)===e(o.query)&&n.hash===o.hash}function Fo(e,n){return(e.aliasOf||e)===(n.aliasOf||n)}function Hc(e,n){if(Object.keys(e).length!==Object.keys(n).length)return!1;for(var o in e)if(!Sf(e[o],n[o]))return!1;return!0}function Sf(e,n){return Vn(e)?ks(e,n):Vn(n)?ks(n,e):e?.valueOf()===n?.valueOf()}function ks(e,n){return Vn(n)?e.length===n.length&&e.every((o,a)=>o===n[a]):e.length===1&&e[0]===n}function Ef(e,n){if(e.startsWith("/"))return e;if(!e)return n;const o=n.split("/"),a=e.split("/"),r=a[a.length-1];(r===".."||r===".")&&a.push("");let t=o.length-1,s,l;for(s=0;s<a.length;s++)if(l=a[s],l!==".")if(l==="..")t>1&&t--;else break;return o.slice(0,t).join("/")+"/"+a.slice(s).join("/")}const so={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};let jt=(function(e){return e.pop="pop",e.push="push",e})({}),pt=(function(e){return e.back="back",e.forward="forward",e.unknown="",e})({});function wf(e){if(!e)if(Po){const n=document.querySelector("base");e=n&&n.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),Bf(e)}const Cf=/^[^#]+#/;function If(e,n){return e.replace(Cf,"#")+n}function kf(e,n){const o=document.documentElement.getBoundingClientRect(),a=e.getBoundingClientRect();return{behavior:n.behavior,left:a.left-o.left-(n.left||0),top:a.top-o.top-(n.top||0)}}const Br=()=>({left:window.scrollX,top:window.scrollY});function Pf(e){let n;if("el"in e){const o=e.el,a=typeof o=="string"&&o.startsWith("#"),r=typeof o=="string"?a?document.getElementById(o.slice(1)):document.querySelector(o):o;if(!r)return;n=kf(r,e)}else n=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(n):window.scrollTo(n.left!=null?n.left:window.scrollX,n.top!=null?n.top:window.scrollY)}function Ps(e,n){return(history.state?history.state.position-n:-1)+e}const Dt=new Map;function Of(e,n){Dt.set(e,n)}function jf(e){const n=Dt.get(e);return Dt.delete(e),n}function Df(e){return typeof e=="string"||e&&typeof e=="object"}function Uc(e){return typeof e=="string"||typeof e=="symbol"}let Ke=(function(e){return e[e.MATCHER_NOT_FOUND=1]="MATCHER_NOT_FOUND",e[e.NAVIGATION_GUARD_REDIRECT=2]="NAVIGATION_GUARD_REDIRECT",e[e.NAVIGATION_ABORTED=4]="NAVIGATION_ABORTED",e[e.NAVIGATION_CANCELLED=8]="NAVIGATION_CANCELLED",e[e.NAVIGATION_DUPLICATED=16]="NAVIGATION_DUPLICATED",e})({});const Kc=Symbol("");Ke.MATCHER_NOT_FOUND+"",Ke.NAVIGATION_GUARD_REDIRECT+"",Ke.NAVIGATION_ABORTED+"",Ke.NAVIGATION_CANCELLED+"",Ke.NAVIGATION_DUPLICATED+"";function zo(e,n){return De(new Error,{type:e,[Kc]:!0},n)}function Wn(e,n){return e instanceof Error&&Kc in e&&(n==null||!!(e.type&n))}const Vf=["params","query","hash"];function Lf(e){if(typeof e=="string")return e;if(e.path!=null)return e.path;const n={};for(const o of Vf)o in e&&(n[o]=e[o]);return JSON.stringify(n,null,2)}function qf(e){const n={};if(e===""||e==="?")return n;const o=(e[0]==="?"?e.slice(1):e).split("&");for(let a=0;a<o.length;++a){const r=o[a].replace($c," "),t=r.indexOf("="),s=xa(t<0?r:r.slice(0,t)),l=t<0?null:xa(r.slice(t+1));if(s in n){let c=n[s];Vn(c)||(c=n[s]=[c]),c.push(l)}else n[s]=l}return n}function Os(e){let n="";for(let o in e){const a=e[o];if(o=yf(o),a==null){a!==void 0&&(n+=(n.length?"&":"")+o);continue}(Vn(a)?a.map(r=>r&&Ot(r)):[a&&Ot(a)]).forEach(r=>{r!==void 0&&(n+=(n.length?"&":"")+o,r!=null&&(n+="="+r))})}return n}function $f(e){const n={};for(const o in e){const a=e[o];a!==void 0&&(n[o]=Vn(a)?a.map(r=>r==null?null:""+r):a==null?a:""+a)}return n}const Mf=Symbol(""),js=Symbol(""),Rr=Symbol(""),ti=Symbol(""),Vt=Symbol("");function na(){let e=[];function n(a){return e.push(a),()=>{const r=e.indexOf(a);r>-1&&e.splice(r,1)}}function o(){e=[]}return{add:n,list:()=>e.slice(),reset:o}}function uo(e,n,o,a,r,t=s=>s()){const s=a&&(a.enterCallbacks[r]=a.enterCallbacks[r]||[]);return()=>new Promise((l,c)=>{const d=f=>{f===!1?c(zo(Ke.NAVIGATION_ABORTED,{from:o,to:n})):f instanceof Error?c(f):Df(f)?c(zo(Ke.NAVIGATION_GUARD_REDIRECT,{from:n,to:f})):(s&&a.enterCallbacks[r]===s&&typeof f=="function"&&s.push(f),l())},u=t(()=>e.call(a&&a.instances[r],n,o,d));let m=Promise.resolve(u);e.length<3&&(m=m.then(d)),m.catch(f=>c(f))})}function ft(e,n,o,a,r=t=>t()){const t=[];for(const s of e)for(const l in s.components){let c=s.components[l];if(!(n!=="beforeRouteEnter"&&!s.instances[l]))if(Lc(c)){const d=(c.__vccOpts||c)[n];d&&t.push(uo(d,o,a,s,l,r))}else{let d=c();t.push(()=>d.then(u=>{if(!u)throw new Error(`Couldn't resolve component "${l}" at "${s.path}"`);const m=cf(u)?u.default:u;s.mods[l]=u,s.components[l]=m;const f=(m.__vccOpts||m)[n];return f&&uo(f,o,a,s,l,r)()}))}}return t}function Ff(e,n){const o=[],a=[],r=[],t=Math.max(n.matched.length,e.matched.length);for(let s=0;s<t;s++){const l=n.matched[s];l&&(e.matched.find(d=>Fo(d,l))?a.push(l):o.push(l));const c=e.matched[s];c&&(n.matched.find(d=>Fo(d,c))||r.push(c))}return[o,a,r]}let zf=()=>location.protocol+"//"+location.host;function Gc(e,n){const{pathname:o,search:a,hash:r}=n,t=e.indexOf("#");if(t>-1){let s=r.includes(e.slice(t))?e.slice(t).length:1,l=r.slice(s);return l[0]!=="/"&&(l="/"+l),Is(l,"")}return Is(o,e)+a+r}function Hf(e,n,o,a){let r=[],t=[],s=null;const l=({state:f})=>{const h=Gc(e,location),x=o.value,_=n.value;let E=0;if(f){if(o.value=h,n.value=f,s&&s===x){s=null;return}E=_?f.position-_.position:0}else a(h);r.forEach(I=>{I(o.value,x,{delta:E,type:jt.pop,direction:E?E>0?pt.forward:pt.back:pt.unknown})})};function c(){s=o.value}function d(f){r.push(f);const h=()=>{const x=r.indexOf(f);x>-1&&r.splice(x,1)};return t.push(h),h}function u(){if(document.visibilityState==="hidden"){const{history:f}=window;if(!f.state)return;f.replaceState(De({},f.state,{scroll:Br()}),"")}}function m(){for(const f of t)f();t=[],window.removeEventListener("popstate",l),window.removeEventListener("pagehide",u),document.removeEventListener("visibilitychange",u)}return window.addEventListener("popstate",l),window.addEventListener("pagehide",u),document.addEventListener("visibilitychange",u),{pauseListeners:c,listen:d,destroy:m}}function Ds(e,n,o,a=!1,r=!1){return{back:e,current:n,forward:o,replaced:a,position:window.history.length,scroll:r?Br():null}}function Uf(e){const{history:n,location:o}=window,a={value:Gc(e,o)},r={value:n.state};r.value||t(a.value,{back:null,current:a.value,forward:null,position:n.length-1,replaced:!0,scroll:null},!0);function t(c,d,u){const m=e.indexOf("#"),f=m>-1?(o.host&&document.querySelector("base")?e:e.slice(m))+c:zf()+e+c;try{n[u?"replaceState":"pushState"](d,"",f),r.value=d}catch(h){console.error(h),o[u?"replace":"assign"](f)}}function s(c,d){t(c,De({},n.state,Ds(r.value.back,c,r.value.forward,!0),d,{position:r.value.position}),!0),a.value=c}function l(c,d){const u=De({},r.value,n.state,{forward:c,scroll:Br()});t(u.current,u,!0),t(c,De({},Ds(a.value,c,null),{position:u.position+1},d),!1),a.value=c}return{location:a,state:r,push:l,replace:s}}function Kf(e){e=wf(e);const n=Uf(e),o=Hf(e,n.state,n.location,n.replace);function a(t,s=!0){s||o.pauseListeners(),history.go(t)}const r=De({location:"",base:e,go:a,createHref:If.bind(null,e)},n,o);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>n.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>n.state.value}),r}let To=(function(e){return e[e.Static=0]="Static",e[e.Param=1]="Param",e[e.Group=2]="Group",e})({});var Qe=(function(e){return e[e.Static=0]="Static",e[e.Param=1]="Param",e[e.ParamRegExp=2]="ParamRegExp",e[e.ParamRegExpEnd=3]="ParamRegExpEnd",e[e.EscapeNext=4]="EscapeNext",e})(Qe||{});const Gf={type:To.Static,value:""},Wf=/[a-zA-Z0-9_]/;function Yf(e){if(!e)return[[]];if(e==="/")return[[Gf]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function n(h){throw new Error(`ERR (${o})/"${d}": ${h}`)}let o=Qe.Static,a=o;const r=[];let t;function s(){t&&r.push(t),t=[]}let l=0,c,d="",u="";function m(){d&&(o===Qe.Static?t.push({type:To.Static,value:d}):o===Qe.Param||o===Qe.ParamRegExp||o===Qe.ParamRegExpEnd?(t.length>1&&(c==="*"||c==="+")&&n(`A repeatable param (${d}) must be alone in its segment. eg: '/:ids+.`),t.push({type:To.Param,value:d,regexp:u,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):n("Invalid state to consume buffer"),d="")}function f(){d+=c}for(;l<e.length;){if(c=e[l++],c==="\\"&&o!==Qe.ParamRegExp){a=o,o=Qe.EscapeNext;continue}switch(o){case Qe.Static:c==="/"?(d&&m(),s()):c===":"?(m(),o=Qe.Param):f();break;case Qe.EscapeNext:f(),o=a;break;case Qe.Param:c==="("?o=Qe.ParamRegExp:Wf.test(c)?f():(m(),o=Qe.Static,c!=="*"&&c!=="?"&&c!=="+"&&l--);break;case Qe.ParamRegExp:c===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+c:o=Qe.ParamRegExpEnd:u+=c;break;case Qe.ParamRegExpEnd:m(),o=Qe.Static,c!=="*"&&c!=="?"&&c!=="+"&&l--,u="";break;default:n("Unknown state");break}}return o===Qe.ParamRegExp&&n(`Unfinished custom RegExp for param "${d}"`),m(),s(),r}const Vs="[^/]+?",Jf={sensitive:!1,strict:!1,start:!0,end:!0};var pn=(function(e){return e[e._multiplier=10]="_multiplier",e[e.Root=90]="Root",e[e.Segment=40]="Segment",e[e.SubSegment=30]="SubSegment",e[e.Static=40]="Static",e[e.Dynamic=20]="Dynamic",e[e.BonusCustomRegExp=10]="BonusCustomRegExp",e[e.BonusWildcard=-50]="BonusWildcard",e[e.BonusRepeatable=-20]="BonusRepeatable",e[e.BonusOptional=-8]="BonusOptional",e[e.BonusStrict=.7000000000000001]="BonusStrict",e[e.BonusCaseSensitive=.25]="BonusCaseSensitive",e})(pn||{});const Qf=/[.+*?^${}()[\]/\\]/g;function Xf(e,n){const o=De({},Jf,n),a=[];let r=o.start?"^":"";const t=[];for(const d of e){const u=d.length?[]:[pn.Root];o.strict&&!d.length&&(r+="/");for(let m=0;m<d.length;m++){const f=d[m];let h=pn.Segment+(o.sensitive?pn.BonusCaseSensitive:0);if(f.type===To.Static)m||(r+="/"),r+=f.value.replace(Qf,"\\$&"),h+=pn.Static;else if(f.type===To.Param){const{value:x,repeatable:_,optional:E,regexp:I}=f;t.push({name:x,repeatable:_,optional:E});const w=I||Vs;if(w!==Vs){h+=pn.BonusCustomRegExp;try{`${w}`}catch(Q){throw new Error(`Invalid custom RegExp for param "${x}" (${w}): `+Q.message)}}let J=_?`((?:${w})(?:/(?:${w}))*)`:`(${w})`;m||(J=E&&d.length<2?`(?:/${J})`:"/"+J),E&&(J+="?"),r+=J,h+=pn.Dynamic,E&&(h+=pn.BonusOptional),_&&(h+=pn.BonusRepeatable),w===".*"&&(h+=pn.BonusWildcard)}u.push(h)}a.push(u)}if(o.strict&&o.end){const d=a.length-1;a[d][a[d].length-1]+=pn.BonusStrict}o.strict||(r+="/?"),o.end?r+="$":o.strict&&!r.endsWith("/")&&(r+="(?:/|$)");const s=new RegExp(r,o.sensitive?"":"i");function l(d){const u=d.match(s),m={};if(!u)return null;for(let f=1;f<u.length;f++){const h=u[f]||"",x=t[f-1];m[x.name]=h&&x.repeatable?h.split("/"):h}return m}function c(d){let u="",m=!1;for(const f of e){(!m||!u.endsWith("/"))&&(u+="/"),m=!1;for(const h of f)if(h.type===To.Static)u+=h.value;else if(h.type===To.Param){const{value:x,repeatable:_,optional:E}=h,I=x in d?d[x]:"";if(Vn(I)&&!_)throw new Error(`Provided param "${x}" is an array but it is not repeatable (* or + modifiers)`);const w=Vn(I)?I.join("/"):I;if(!w)if(E)f.length<2&&(u.endsWith("/")?u=u.slice(0,-1):m=!0);else throw new Error(`Missing required param "${x}"`);u+=w}}return u||"/"}return{re:s,score:a,keys:t,parse:l,stringify:c}}function Zf(e,n){let o=0;for(;o<e.length&&o<n.length;){const a=n[o]-e[o];if(a)return a;o++}return e.length<n.length?e.length===1&&e[0]===pn.Static+pn.Segment?-1:1:e.length>n.length?n.length===1&&n[0]===pn.Static+pn.Segment?1:-1:0}function Wc(e,n){let o=0;const a=e.score,r=n.score;for(;o<a.length&&o<r.length;){const t=Zf(a[o],r[o]);if(t)return t;o++}if(Math.abs(r.length-a.length)===1){if(Ls(a))return 1;if(Ls(r))return-1}return r.length-a.length}function Ls(e){const n=e[e.length-1];return e.length>0&&n[n.length-1]<0}const eh={strict:!1,end:!0,sensitive:!1};function nh(e,n,o){const a=Xf(Yf(e.path),o),r=De(a,{record:e,parent:n,children:[],alias:[]});return n&&!r.record.aliasOf==!n.record.aliasOf&&n.children.push(r),r}function oh(e,n){const o=[],a=new Map;n=Cs(eh,n);function r(m){return a.get(m)}function t(m,f,h){const x=!h,_=$s(m);_.aliasOf=h&&h.record;const E=Cs(n,m),I=[_];if("alias"in m){const Q=typeof m.alias=="string"?[m.alias]:m.alias;for(const pe of Q)I.push($s(De({},_,{components:h?h.record.components:_.components,path:pe,aliasOf:h?h.record:_})))}let w,J;for(const Q of I){const{path:pe}=Q;if(f&&pe[0]!=="/"){const ue=f.record.path,Z=ue[ue.length-1]==="/"?"":"/";Q.path=f.record.path+(pe&&Z+pe)}if(w=nh(Q,f,E),h?h.alias.push(w):(J=J||w,J!==w&&J.alias.push(w),x&&m.name&&!Ms(w)&&s(m.name)),Yc(w)&&c(w),_.children){const ue=_.children;for(let Z=0;Z<ue.length;Z++)t(ue[Z],w,h&&h.children[Z])}h=h||w}return J?()=>{s(J)}:ma}function s(m){if(Uc(m)){const f=a.get(m);f&&(a.delete(m),o.splice(o.indexOf(f),1),f.children.forEach(s),f.alias.forEach(s))}else{const f=o.indexOf(m);f>-1&&(o.splice(f,1),m.record.name&&a.delete(m.record.name),m.children.forEach(s),m.alias.forEach(s))}}function l(){return o}function c(m){const f=th(m,o);o.splice(f,0,m),m.record.name&&!Ms(m)&&a.set(m.record.name,m)}function d(m,f){let h,x={},_,E;if("name"in m&&m.name){if(h=a.get(m.name),!h)throw zo(Ke.MATCHER_NOT_FOUND,{location:m});E=h.record.name,x=De(qs(f.params,h.keys.filter(J=>!J.optional).concat(h.parent?h.parent.keys.filter(J=>J.optional):[]).map(J=>J.name)),m.params&&qs(m.params,h.keys.map(J=>J.name))),_=h.stringify(x)}else if(m.path!=null)_=m.path,h=o.find(J=>J.re.test(_)),h&&(x=h.parse(_),E=h.record.name);else{if(h=f.name?a.get(f.name):o.find(J=>J.re.test(f.path)),!h)throw zo(Ke.MATCHER_NOT_FOUND,{location:m,currentLocation:f});E=h.record.name,x=De({},f.params,m.params),_=h.stringify(x)}const I=[];let w=h;for(;w;)I.unshift(w.record),w=w.parent;return{name:E,path:_,params:x,matched:I,meta:rh(I)}}e.forEach(m=>t(m));function u(){o.length=0,a.clear()}return{addRoute:t,resolve:d,removeRoute:s,clearRoutes:u,getRoutes:l,getRecordMatcher:r}}function qs(e,n){const o={};for(const a of n)a in e&&(o[a]=e[a]);return o}function $s(e){const n={path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:e.aliasOf,beforeEnter:e.beforeEnter,props:ah(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}};return Object.defineProperty(n,"mods",{value:{}}),n}function ah(e){const n={},o=e.props||!1;if("component"in e)n.default=o;else for(const a in e.components)n[a]=typeof o=="object"?o[a]:o;return n}function Ms(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function rh(e){return e.reduce((n,o)=>De(n,o.meta),{})}function th(e,n){let o=0,a=n.length;for(;o!==a;){const t=o+a>>1;Wc(e,n[t])<0?a=t:o=t+1}const r=ih(e);return r&&(a=n.lastIndexOf(r,a-1)),a}function ih(e){let n=e;for(;n=n.parent;)if(Yc(n)&&Wc(e,n)===0)return n}function Yc({record:e}){return!!(e.name||e.components&&Object.keys(e.components).length||e.redirect)}function Fs(e){const n=$e(Rr),o=$e(ti),a=qe(()=>{const c=ee(e.to);return n.resolve(c)}),r=qe(()=>{const{matched:c}=a.value,{length:d}=c,u=c[d-1],m=o.matched;if(!u||!m.length)return-1;const f=m.findIndex(Fo.bind(null,u));if(f>-1)return f;const h=zs(c[d-2]);return d>1&&zs(u)===h&&m[m.length-1].path!==h?m.findIndex(Fo.bind(null,c[d-2])):f}),t=qe(()=>r.value>-1&&uh(o.params,a.value.params)),s=qe(()=>r.value>-1&&r.value===o.matched.length-1&&Hc(o.params,a.value.params));function l(c={}){if(ch(c)){const d=n[ee(e.replace)?"replace":"push"](ee(e.to)).catch(ma);return e.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>d),d}return Promise.resolve()}return{route:a,href:qe(()=>a.value.href),isActive:t,isExactActive:s,navigate:l}}function sh(e){return e.length===1?e[0]:e}const lh=Ml({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:Fs,setup(e,{slots:n}){const o=Sa(Fs(e)),{options:a}=$e(Rr),r=qe(()=>({[Hs(e.activeClass,a.linkActiveClass,"router-link-active")]:o.isActive,[Hs(e.exactActiveClass,a.linkExactActiveClass,"router-link-exact-active")]:o.isExactActive}));return()=>{const t=n.default&&sh(n.default(o));return e.custom?t:$o("a",{"aria-current":o.isExactActive?e.ariaCurrentValue:null,href:o.href,onClick:o.navigate,class:r.value},t)}}}),Ie=lh;function ch(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const n=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(n))return}return e.preventDefault&&e.preventDefault(),!0}}function uh(e,n){for(const o in n){const a=n[o],r=e[o];if(typeof a=="string"){if(a!==r)return!1}else if(!Vn(r)||r.length!==a.length||a.some((t,s)=>t.valueOf()!==r[s].valueOf()))return!1}return!0}function zs(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const Hs=(e,n,o)=>e??n??o,dh=Ml({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:n,slots:o}){const a=$e(Vt),r=qe(()=>e.route||a.value),t=$e(js,0),s=qe(()=>{let d=ee(t);const{matched:u}=r.value;let m;for(;(m=u[d])&&!m.components;)d++;return d}),l=qe(()=>r.value.matched[s.value]);la(js,qe(()=>s.value+1)),la(Mf,l),la(Vt,r);const c=be();return fo(()=>[c.value,l.value,e.name],([d,u,m],[f,h,x])=>{u&&(u.instances[m]=d,h&&h!==u&&d&&d===f&&(u.leaveGuards.size||(u.leaveGuards=h.leaveGuards),u.updateGuards.size||(u.updateGuards=h.updateGuards))),d&&u&&(!h||!Fo(u,h)||!f)&&(u.enterCallbacks[m]||[]).forEach(_=>_(d))},{flush:"post"}),()=>{const d=r.value,u=e.name,m=l.value,f=m&&m.components[u];if(!f)return Us(o.default,{Component:f,route:d});const h=m.props[u],x=h?h===!0?d.params:typeof h=="function"?h(d):h:null,E=$o(f,De({},x,n,{onVnodeUnmounted:I=>{I.component.isUnmounted&&(m.instances[u]=null)},ref:c}));return Us(o.default,{Component:E,route:d})||E}}});function Us(e,n){if(!e)return null;const o=e(n);return o.length===1?o[0]:o}const Jc=dh;function mh(e){const n=oh(e.routes,e),o=e.parseQuery||qf,a=e.stringifyQuery||Os,r=e.history,t=na(),s=na(),l=na(),c=Vu(so);let d=so;Po&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=dt.bind(null,P=>""+P),m=dt.bind(null,Nf),f=dt.bind(null,xa);function h(P,se){let X,me;return Uc(P)?(X=n.getRecordMatcher(P),me=se):me=P,n.addRoute(me,X)}function x(P){const se=n.getRecordMatcher(P);se&&n.removeRoute(se)}function _(){return n.getRoutes().map(P=>P.record)}function E(P){return!!n.getRecordMatcher(P)}function I(P,se){if(se=De({},se||c.value),typeof P=="string"){const A=mt(o,P,se.path),O=n.resolve({path:A.path},se),V=r.createHref(A.fullPath);return De(A,O,{params:f(O.params),hash:xa(A.hash),redirectedFrom:void 0,href:V})}let X;if(P.path!=null)X=De({},P,{path:mt(o,P.path,se.path).path});else{const A=De({},P.params);for(const O in A)A[O]==null&&delete A[O];X=De({},P,{params:m(A)}),se.params=m(se.params)}const me=n.resolve(X,se),Te=P.hash||"";me.params=u(f(me.params));const v=Rf(a,De({},P,{hash:_f(Te),path:me.path})),b=r.createHref(v);return De({fullPath:v,hash:Te,query:a===Os?$f(P.query):P.query||{}},me,{redirectedFrom:void 0,href:b})}function w(P){return typeof P=="string"?mt(o,P,c.value.path):De({},P)}function J(P,se){if(d!==P)return zo(Ke.NAVIGATION_CANCELLED,{from:se,to:P})}function Q(P){return Z(P)}function pe(P){return Q(De(w(P),{replace:!0}))}function ue(P,se){const X=P.matched[P.matched.length-1];if(X&&X.redirect){const{redirect:me}=X;let Te=typeof me=="function"?me(P,se):me;return typeof Te=="string"&&(Te=Te.includes("?")||Te.includes("#")?Te=w(Te):{path:Te},Te.params={}),De({query:P.query,hash:P.hash,params:Te.path!=null?{}:P.params},Te)}}function Z(P,se){const X=d=I(P),me=c.value,Te=P.state,v=P.force,b=P.replace===!0,A=ue(X,me);if(A)return Z(De(w(A),{state:typeof A=="object"?De({},Te,A.state):Te,force:v,replace:b}),se||X);const O=X;O.redirectedFrom=se;let V;return!v&&Tf(a,me,X)&&(V=zo(Ke.NAVIGATION_DUPLICATED,{to:O,from:me}),Ge(me,me,!0,!1)),(V?Promise.resolve(V):ae(O,me)).catch(C=>Wn(C)?Wn(C,Ke.NAVIGATION_GUARD_REDIRECT)?C:Ue(C):Be(C,O,me)).then(C=>{if(C){if(Wn(C,Ke.NAVIGATION_GUARD_REDIRECT))return Z(De({replace:b},w(C.to),{state:typeof C.to=="object"?De({},Te,C.to.state):Te,force:v}),se||O)}else C=M(O,me,!0,b,Te);return de(O,me,C),C})}function q(P,se){const X=J(P,se);return X?Promise.reject(X):Promise.resolve()}function B(P){const se=Cn.values().next().value;return se&&typeof se.runWithContext=="function"?se.runWithContext(P):P()}function ae(P,se){let X;const[me,Te,v]=Ff(P,se);X=ft(me.reverse(),"beforeRouteLeave",P,se);for(const A of me)A.leaveGuards.forEach(O=>{X.push(uo(O,P,se))});const b=q.bind(null,P,se);return X.push(b),Ye(X).then(()=>{X=[];for(const A of t.list())X.push(uo(A,P,se));return X.push(b),Ye(X)}).then(()=>{X=ft(Te,"beforeRouteUpdate",P,se);for(const A of Te)A.updateGuards.forEach(O=>{X.push(uo(O,P,se))});return X.push(b),Ye(X)}).then(()=>{X=[];for(const A of v)if(A.beforeEnter)if(Vn(A.beforeEnter))for(const O of A.beforeEnter)X.push(uo(O,P,se));else X.push(uo(A.beforeEnter,P,se));return X.push(b),Ye(X)}).then(()=>(P.matched.forEach(A=>A.enterCallbacks={}),X=ft(v,"beforeRouteEnter",P,se,B),X.push(b),Ye(X))).then(()=>{X=[];for(const A of s.list())X.push(uo(A,P,se));return X.push(b),Ye(X)}).catch(A=>Wn(A,Ke.NAVIGATION_CANCELLED)?A:Promise.reject(A))}function de(P,se,X){l.list().forEach(me=>B(()=>me(P,se,X)))}function M(P,se,X,me,Te){const v=J(P,se);if(v)return v;const b=se===so,A=Po?history.state:{};X&&(me||b?r.replace(P.fullPath,De({scroll:b&&A&&A.scroll},Te)):r.push(P.fullPath,Te)),c.value=P,Ge(P,se,X,b),Ue()}let H;function G(){H||(H=r.listen((P,se,X)=>{if(!We.listening)return;const me=I(P),Te=ue(me,We.currentRoute.value);if(Te){Z(De(Te,{replace:!0,force:!0}),me).catch(ma);return}d=me;const v=c.value;Po&&Of(Ps(v.fullPath,X.delta),Br()),ae(me,v).catch(b=>Wn(b,Ke.NAVIGATION_ABORTED|Ke.NAVIGATION_CANCELLED)?b:Wn(b,Ke.NAVIGATION_GUARD_REDIRECT)?(Z(De(w(b.to),{force:!0}),me).then(A=>{Wn(A,Ke.NAVIGATION_ABORTED|Ke.NAVIGATION_DUPLICATED)&&!X.delta&&X.type===jt.pop&&r.go(-1,!1)}).catch(ma),Promise.reject()):(X.delta&&r.go(-X.delta,!1),Be(b,me,v))).then(b=>{b=b||M(me,v,!1),b&&(X.delta&&!Wn(b,Ke.NAVIGATION_CANCELLED)?r.go(-X.delta,!1):X.type===jt.pop&&Wn(b,Ke.NAVIGATION_ABORTED|Ke.NAVIGATION_DUPLICATED)&&r.go(-1,!1)),de(me,v,b)}).catch(ma)}))}let ye=na(),F=na(),Ee;function Be(P,se,X){Ue(P);const me=F.list();return me.length?me.forEach(Te=>Te(P,se,X)):console.error(P),Promise.reject(P)}function Ze(){return Ee&&c.value!==so?Promise.resolve():new Promise((P,se)=>{ye.add([P,se])})}function Ue(P){return Ee||(Ee=!P,G(),ye.list().forEach(([se,X])=>P?X(P):se()),ye.reset()),P}function Ge(P,se,X,me){const{scrollBehavior:Te}=e;if(!Po||!Te)return Promise.resolve();const v=!X&&jf(Ps(P.fullPath,0))||(me||!X)&&history.state&&history.state.scroll||null;return An().then(()=>Te(P,se,v)).then(b=>b&&Pf(b)).catch(b=>Be(b,P,se))}const Je=P=>r.go(P);let _n;const Cn=new Set,We={currentRoute:c,listening:!0,addRoute:h,removeRoute:x,clearRoutes:n.clearRoutes,hasRoute:E,getRoutes:_,resolve:I,options:e,push:Q,replace:pe,go:Je,back:()=>Je(-1),forward:()=>Je(1),beforeEach:t.add,beforeResolve:s.add,afterEach:l.add,onError:F.add,isReady:Ze,install(P){P.component("RouterLink",Ie),P.component("RouterView",Jc),P.config.globalProperties.$router=We,Object.defineProperty(P.config.globalProperties,"$route",{enumerable:!0,get:()=>ee(c)}),Po&&!_n&&c.value===so&&(_n=!0,Q(r.location).catch(me=>{}));const se={};for(const me in so)Object.defineProperty(se,me,{get:()=>c.value[me],enumerable:!0});P.provide(Rr,We),P.provide(ti,Bl(se)),P.provide(Vt,c);const X=P.unmount;Cn.add(P),P.unmount=function(){Cn.delete(P),Cn.size<1&&(d=so,H&&H(),H=null,c.value=so,_n=!1,Ee=!1),X()}}};function Ye(P){return P.reduce((se,X)=>se.then(()=>B(X)),Promise.resolve())}return We}function Tr(){return $e(Rr)}function ii(e){return $e(ti)}const ph="/Extensao-26.2/icon-512.png";const No={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};const Ks=(...e)=>e.filter((n,o,a)=>!!n&&n.trim()!==""&&a.indexOf(n)===o).join(" ").trim();function ht(e){return e!=null}function fh(e,n={}){const o=n.attributeNames??{},a=f=>o[f]??f,r=e.size??e.width??No.width,t=e.size??e.height??No.height,s=e.aliases?.filter(f=>typeof f=="string"&&f.trim()!=="").map(f=>`lucide-${f}`)??[],l=[...e.name?[`lucide-${e.name}`]:[],...s],c=n.className?.split(" ").filter(Boolean)??[],d=n.includeDefaultClasses===!1?Ks(...c):Ks("lucide",...l,...c),u=n.absoluteStrokeWidth?Number(n.strokeWidth??No["stroke-width"])*Number(e.size??e.width??No.width)/Number(n.size??n.width??No.width):n.strokeWidth??No["stroke-width"];return["svg",{...Object.entries(No).reduce((f,[h,x])=>(f[a(h)]=x,f),{}),..."color"in n&&n.color&&{[a("stroke")]:n.color},..."size"in n&&ht(n.size)&&{[a("width")]:n.size,[a("height")]:n.size},..."width"in n&&ht(n.width)&&{[a("width")]:n.width},..."height"in n&&ht(n.height)&&{[a("height")]:n.height},[a("stroke-width")]:u,...d&&{[a("class")]:d},[a("viewBox")]:`0 0 ${r} ${t}`,...n.hasA11yProp===!1?{[a("aria-hidden")]:"true"}:{},..."attributes"in n&&n.attributes},e.node.map(f=>{const[h,x,_]=f,E=n.nonScalingStroke?{[a("vector-effect")]:"non-scaling-stroke",...x}:x;return _?[h,E,_]:[h,E]})]}const hh=e=>{for(const n in e)if(n.startsWith("aria-")||n==="role"||n==="title")return!0;return!1};const $a=e=>e==="";const vh=e=>e?.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();const gh=Symbol("lucide-icons");function bh(){return $e(gh,{})}const _h=({name:e,iconNode:n,"icon-node":o,icon:a={name:vh(e),node:n??o,size:24,aliases:[]},absoluteStrokeWidth:r,"absolute-stroke-width":t,nonScalingStroke:s,"non-scaling-stroke":l,strokeWidth:c,"stroke-width":d,size:u,width:m=u,height:f=u,color:h,...x},{slots:_})=>{const{size:E,color:I,strokeWidth:w=2,absoluteStrokeWidth:J=!1,nonScalingStroke:Q=!1,class:pe=""}=bh(),ue=$a(r)||$a(t)||r===!0||t===!0||J===!0,Z=$a(s)||$a(l)||s===!0||l===!0||Q===!0;delete x.class;const q=_.default?.(),[,B,ae=[]]=fh(a,{color:h??I,width:m??u??E,height:f??u??E,strokeWidth:c??d??w,absoluteStrokeWidth:ue,nonScalingStroke:Z,className:pe,hasA11yProp:q!=null&&q.length>0||hh(x),attributes:x});return $o("svg",B,[...ae.map(de=>$o(...de)),...q??[]])};function bn(e,n=[]){const o=typeof e=="string"?{name:e,node:n}:e;return(a,{slots:r})=>$o(_h,{...a,icon:o},r.default?{default:r.default}:void 0)}const yh={name:"arrow-right",size:24,node:[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]},Ah=bn(yh);const Nh={name:"box",size:24,node:[["path",{d:"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",key:"hh9hay"}],["path",{d:"m3.3 7 8.7 5 8.7-5",key:"g66t2b"}],["path",{d:"M12 22V12",key:"d0xqtd"}]]},xh=bn(Nh);const Bh={name:"chevron-right",size:24,node:[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]},Ba=bn(Bh);const Rh={name:"chevron-left",size:24,node:[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]},Ra=bn(Rh);const Th={name:"circle-alert",size:24,node:[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]],aliases:["alert-circle"]},Sh=bn(Th);const Eh={name:"circle-question-mark",size:24,node:[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",key:"1u773s"}],["path",{d:"M12 17h.01",key:"p32p05"}]],aliases:["help-circle","circle-help"]},si=bn(Eh);const wh={name:"clipboard-check",size:24,node:[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1",key:"tgr4d6"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",key:"116196"}],["path",{d:"m9 14 2 2 4-4",key:"df797q"}]]},po=bn(wh);const Ch={name:"folder-kanban",size:24,node:[["path",{d:"M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z",key:"1fr9dc"}],["path",{d:"M8 10v4",key:"tgpxqk"}],["path",{d:"M12 10v2",key:"hh53o1"}],["path",{d:"M16 10v6",key:"1d6xys"}]]},Qc=bn(Ch);const Ih={name:"folder-plus",size:24,node:[["path",{d:"M12 10v6",key:"1bos4e"}],["path",{d:"M9 13h6",key:"1uhe8q"}],["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",key:"1kt360"}]]},sr=bn(Ih);const kh={name:"folder",size:24,node:[["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",key:"1kt360"}]]},Gs=bn(kh);const Ph={name:"house",size:24,node:[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"r6nss1"}]],aliases:["home"]},Oh=bn(Ph);const jh={name:"pencil",size:24,node:[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}],["path",{d:"m15 5 4 4",key:"1mk7zo"}]]},Dh=bn(jh);const Vh={name:"plus",size:24,node:[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]},Ws=bn(Vh);const Lh={name:"trash",size:24,node:[["path",{d:"M10 11v6",key:"nco0om"}],["path",{d:"M14 11v6",key:"outv1u"}],["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",key:"miytrc"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",key:"e791ji"}]],aliases:["trash-2"]},Sr=bn(Lh),qh={class:"app-shell"},$h={class:"sidebar"},Mh={key:0,class:"bottom-nav"},Fh={__name:"AppLayout",setup(e){const n=ii(),o=qe(()=>n.path.startsWith("/rules")?"rules":n.path.startsWith("/quick-evaluation")?"quick":"projects"),a=be(null);let r=!1;async function t(){await An(),a.value?.focus()}function s(){r=!0}return xn(()=>{document.addEventListener("pointerdown",s,{passive:!0}),document.addEventListener("keydown",s)}),yr(()=>{document.removeEventListener("pointerdown",s),document.removeEventListener("keydown",s)}),fo(()=>n.fullPath,()=>{r&&t()}),(l,c)=>(S(),U("div",qh,[g("a",{class:"skip-link",href:"#conteudo",onClick:vo(t,["prevent"])},"Pular para o conteúdo"),g("aside",$h,[$(ee(Ie),{class:"brand",to:"/projects"},{default:ge(()=>[...c[0]||(c[0]=[g("img",{class:"brand__mark",src:ph,alt:"Acesso Verificador"},null,-1),g("span",null,[Re("Acesso"),g("br"),g("small",null,"Verificador")],-1)])]),_:1}),g("nav",null,[$(ee(Ie),{class:an(["nav-item",{"is-active":o.value==="projects"}]),to:"/projects"},{default:ge(()=>[$(ee(Gs),{size:20,"aria-hidden":"true"}),c[1]||(c[1]=g("span",null,"Projetos",-1))]),_:1},8,["class"]),$(ee(Ie),{class:an(["nav-item",{"is-active":o.value==="quick"}]),to:"/quick-evaluation"},{default:ge(()=>[$(ee(po),{size:20,"aria-hidden":"true"}),c[2]||(c[2]=g("span",null,"Avaliação rápida",-1))]),_:1},8,["class"]),$(ee(Ie),{class:an(["nav-item",{"is-active":o.value==="rules"}]),to:"/rules"},{default:ge(()=>[$(ee(po),{size:20,"aria-hidden":"true"}),c[3]||(c[3]=g("span",null,"Regras",-1))]),_:1},8,["class"])])]),g("main",{id:"conteudo",ref_key:"content",ref:a,class:"content",tabindex:"-1"},[gn(l.$slots,"default")],512),ee(n).meta.hideBottomNav?ve("",!0):(S(),U("nav",Mh,[$(ee(Ie),{class:an(["nav-item",{"is-active":o.value==="projects"}]),to:"/projects"},{default:ge(()=>[$(ee(Gs),{size:20,"aria-hidden":"true"}),c[4]||(c[4]=g("span",null,"Projetos",-1))]),_:1},8,["class"]),$(ee(Ie),{class:an(["nav-item",{"is-active":o.value==="quick"}]),to:"/quick-evaluation"},{default:ge(()=>[$(ee(po),{size:20,"aria-hidden":"true"}),c[5]||(c[5]=g("span",null,"Avaliação rápida",-1))]),_:1},8,["class"]),$(ee(Ie),{class:an(["nav-item",{"is-active":o.value==="rules"}]),to:"/rules"},{default:ge(()=>[$(ee(po),{size:20,"aria-hidden":"true"}),c[6]||(c[6]=g("span",null,"Regras",-1))]),_:1},8,["class"])]))]))}},zh={id:"confirm-popup",class:"confirm-popup",role:"alertdialog","aria-modal":"true","aria-labelledby":"confirm-popup-message"},Hh={id:"confirm-popup-message",class:"confirm-popup__message"},Uh={class:"confirm-popup__actions"},Kh={__name:"ConfirmPopup",setup(e,{expose:n}){const o=be(null),a=be(null),r=be(!1),t=be("");let s=null,l=null,c="";function d(_){if(_.key==="Escape"){_.preventDefault(),m();return}if(_.key!=="Tab")return;const E=[o.value,a.value].filter(Boolean);if(!E.length)return;const I=E[0],w=E[E.length-1],J=document.activeElement;if(!E.includes(J)){_.preventDefault(),(_.shiftKey?w:I).focus();return}_.shiftKey&&J===I?(_.preventDefault(),w.focus()):!_.shiftKey&&J===w&&(_.preventDefault(),I.focus())}function u(){document.removeEventListener("keydown",d),document.body.style.overflow=c}function m({restoreFocus:_=!0}={}){if(!r.value)return;r.value=!1,u(),s?.removeAttribute("aria-expanded"),s?.removeAttribute("aria-controls");const E=s;s=null,l=null,_&&An(()=>E?.focus?.())}async function f(_){m({restoreFocus:!1}),s=_.target,t.value=_.message,l=_.onAccept,r.value=!0,s?.setAttribute("aria-expanded","true"),s?.setAttribute("aria-controls","confirm-popup"),c=document.body.style.overflow,document.body.style.overflow="hidden",document.addEventListener("keydown",d),await An(),o.value?.focus()}function h(_,E,I){return f({target:_.currentTarget,message:E,onAccept:I})}async function x(){const _=l,E=s;m({restoreFocus:!1}),await _?.(),An(()=>{E?.isConnected?E.focus?.():document.getElementById("conteudo")?.focus()})}return n({open:f,confirm:h}),yr(()=>{document.removeEventListener("keydown",d),document.body.style.overflow=c,s?.removeAttribute("aria-expanded"),s?.removeAttribute("aria-controls")}),(_,E)=>(S(),Pe(jl,{to:"body"},[r.value?(S(),U("div",{key:0,class:"confirm-backdrop",onClick:E[1]||(E[1]=vo(I=>m(),["self"]))},[g("section",zh,[g("p",Hh,ie(t.value),1),g("div",Uh,[g("button",{ref_key:"cancelButton",ref:o,class:"confirm-popup__button confirm-popup__button--cancel",type:"button",onClick:E[0]||(E[0]=I=>m())}," Cancelar ",512),g("button",{ref_key:"acceptButton",ref:a,class:"confirm-popup__button confirm-popup__button--accept",type:"button",onClick:x}," Excluir ",512)])])])):ve("",!0)]))}},Gh={class:"welcome-popup",role:"dialog","aria-modal":"true","aria-labelledby":"welcome-title","aria-describedby":"welcome-description"},Wh={class:"welcome-popup__content"},Yh={class:"welcome-popup__steps"},Xc={__name:"WelcomePopup",emits:["close"],setup(e,{emit:n}){const o=n,a=be(null),r=be(null);let t="",s=null;function l(d){const u=[a.value,r.value].filter(Boolean);if(!u.length)return;const m=u[0],f=u[u.length-1],h=document.activeElement;if(!u.includes(h)){d.preventDefault(),(d.shiftKey?f:m).focus();return}d.shiftKey&&h===m?(d.preventDefault(),f.focus()):!d.shiftKey&&h===f&&(d.preventDefault(),m.focus())}function c(d){if(d.key==="Escape"){d.preventDefault(),o("close");return}d.key==="Tab"&&l(d)}return xn(async()=>{s=document.activeElement,document.addEventListener("keydown",c),t=document.body.style.overflow,document.body.style.overflow="hidden",await An(),a.value?.focus()}),Qt(()=>{document.removeEventListener("keydown",c),document.body.style.overflow=t,s?.isConnected&&s.focus?.()}),(d,u)=>(S(),Pe(jl,{to:"body"},[g("div",{class:"welcome-backdrop",onClick:u[2]||(u[2]=vo(m=>o("close"),["self"]))},[g("section",Gh,[g("button",{ref_key:"closeButton",ref:a,class:"welcome-popup__close",type:"button","aria-label":"Fechar apresentação",onClick:u[0]||(u[0]=m=>o("close"))}," × ",512),u[8]||(u[8]=g("div",{class:"welcome-popup__hero"},[g("h1",{id:"welcome-title"},"Acessibilidade começa com atenção aos detalhes."),g("p",{id:"welcome-description"}," Este espaço ajuda você a organizar e apoiar avaliações de acessibilidade em locais e ambientes. ")],-1)),g("div",Wh,[u[6]||(u[6]=g("h2",null,"Como funciona",-1)),g("div",Yh,[g("article",null,[$(ee(Qc),{size:22,"aria-hidden":"true"}),u[3]||(u[3]=g("div",null,[g("h3",null,"Organize seus locais"),g("p",null,"Crie projetos, separe os ambientes e cadastre os elementos que deseja avaliar.")],-1))]),g("article",null,[$(ee(po),{size:22,"aria-hidden":"true"}),u[4]||(u[4]=g("div",null,[g("h3",null,"Faça as verificações"),g("p",null,"Preencha checklists e consulte resultados por elemento, ambiente ou projeto.")],-1))])]),u[7]||(u[7]=g("p",{class:"welcome-popup__note"}," Os resultados são um apoio à avaliação e não substituem a análise de um profissional nem a consulta às normas aplicáveis. ",-1)),g("button",{ref_key:"actionButton",ref:r,class:"button welcome-popup__action",type:"button",onClick:u[1]||(u[1]=m=>o("close"))},[u[5]||(u[5]=Re(" Começar ",-1)),$(ee(Ah),{size:18,"aria-hidden":"true"})],512)])])])]))}};var Jh=Object.defineProperty,Qh=Object.defineProperties,Xh=Object.getOwnPropertyDescriptors,Ys=Object.getOwnPropertySymbols,Zh=Object.prototype.hasOwnProperty,ev=Object.prototype.propertyIsEnumerable,Js=(e,n,o)=>n in e?Jh(e,n,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[n]=o,Co=(e,n)=>{for(var o in n||(n={}))Zh.call(n,o)&&Js(e,o,n[o]);if(Ys)for(var o of Ys(n))ev.call(n,o)&&Js(e,o,n[o]);return e},Qs=(e,n)=>Qh(e,Xh(n));const nv={props:{autoscroll:{type:Boolean,default:!0}},watch:{typeAheadPointer(){this.autoscroll&&this.maybeAdjustScroll()},open(e){this.autoscroll&&e&&this.$nextTick(()=>this.maybeAdjustScroll())}},methods:{maybeAdjustScroll(){var e;const n=((e=this.$refs.dropdownMenu)==null?void 0:e.children[this.typeAheadPointer])||!1;if(n){const o=this.getDropdownViewport(),{top:a,bottom:r,height:t}=n.getBoundingClientRect();if(a<o.top)return this.$refs.dropdownMenu.scrollTop=n.offsetTop;if(r>o.bottom)return this.$refs.dropdownMenu.scrollTop=n.offsetTop-(o.height-t)}},getDropdownViewport(){return this.$refs.dropdownMenu?this.$refs.dropdownMenu.getBoundingClientRect():{height:0,top:0,bottom:0}}}},ov={data(){return{typeAheadPointer:-1}},watch:{filteredOptions(){for(let e=0;e<this.filteredOptions.length;e++)if(this.selectable(this.filteredOptions[e])){this.typeAheadPointer=e;break}},open(e){e&&this.typeAheadToLastSelected()},selectedValue(){this.open&&this.typeAheadToLastSelected()}},methods:{typeAheadUp(){for(let e=this.typeAheadPointer-1;e>=0;e--)if(this.selectable(this.filteredOptions[e])){this.typeAheadPointer=e;break}},typeAheadDown(){for(let e=this.typeAheadPointer+1;e<this.filteredOptions.length;e++)if(this.selectable(this.filteredOptions[e])){this.typeAheadPointer=e;break}},typeAheadSelect(){const e=this.filteredOptions[this.typeAheadPointer];e&&this.selectable(e)&&this.select(e)},typeAheadToLastSelected(){this.typeAheadPointer=this.selectedValue.length!==0?this.filteredOptions.indexOf(this.selectedValue[this.selectedValue.length-1]):-1}}},av={props:{loading:{type:Boolean,default:!1}},data(){return{mutableLoading:!1}},watch:{search(){this.$emit("search",this.search,this.toggleLoading)},loading(e){this.mutableLoading=e}},methods:{toggleLoading(e=null){return e==null?this.mutableLoading=!this.mutableLoading:this.mutableLoading=e}}},li=(e,n)=>{const o=e.__vccOpts||e;for(const[a,r]of n)o[a]=r;return o},rv={},tv={xmlns:"http://www.w3.org/2000/svg",width:"10",height:"10"},iv=g("path",{d:"M6.895455 5l2.842897-2.842898c.348864-.348863.348864-.914488 0-1.263636L9.106534.261648c-.348864-.348864-.914489-.348864-1.263636 0L5 3.104545 2.157102.261648c-.348863-.348864-.914488-.348864-1.263636 0L.261648.893466c-.348864.348864-.348864.914489 0 1.263636L3.104545 5 .261648 7.842898c-.348864.348863-.348864.914488 0 1.263636l.631818.631818c.348864.348864.914773.348864 1.263636 0L5 6.895455l2.842898 2.842897c.348863.348864.914772.348864 1.263636 0l.631818-.631818c.348864-.348864.348864-.914489 0-1.263636L6.895455 5z"},null,-1),sv=[iv];function lv(e,n){return S(),U("svg",tv,sv)}const cv=li(rv,[["render",lv]]),uv={},dv={xmlns:"http://www.w3.org/2000/svg",width:"14",height:"10"},mv=g("path",{d:"M9.211364 7.59931l4.48338-4.867229c.407008-.441854.407008-1.158247 0-1.60046l-.73712-.80023c-.407008-.441854-1.066904-.441854-1.474243 0L7 5.198617 2.51662.33139c-.407008-.441853-1.066904-.441853-1.474243 0l-.737121.80023c-.407008.441854-.407008 1.158248 0 1.600461l4.48338 4.867228L7 10l2.211364-2.40069z"},null,-1),pv=[mv];function fv(e,n){return S(),U("svg",dv,pv)}const hv=li(uv,[["render",fv]]),Xs={Deselect:cv,OpenIndicator:hv},vv={mounted(e,{instance:n}){if(n.appendToBody){const{height:o,top:a,left:r,width:t}=n.$refs.toggle.getBoundingClientRect();let s=window.scrollX||window.pageXOffset,l=window.scrollY||window.pageYOffset;e.unbindPosition=n.calculatePosition(e,n,{width:t+"px",left:s+r+"px",top:l+a+o+"px"}),document.body.appendChild(e)}},unmounted(e,{instance:n}){n.appendToBody&&(e.unbindPosition&&typeof e.unbindPosition=="function"&&e.unbindPosition(),e.parentNode&&e.parentNode.removeChild(e))}};function gv(e){const n={};return Object.keys(e).sort().forEach(o=>{n[o]=e[o]}),JSON.stringify(n)}let bv=0;function _v(){return++bv}const yv={components:Co({},Xs),directives:{appendToBody:vv},mixins:[nv,ov,av],compatConfig:{MODE:3},emits:["open","close","update:modelValue","search","search:compositionstart","search:compositionend","search:keydown","search:blur","search:focus","search:input","option:created","option:selecting","option:selected","option:deselecting","option:deselected"],props:{modelValue:{},components:{type:Object,default:()=>({})},options:{type:Array,default(){return[]}},disabled:{type:Boolean,default:!1},clearable:{type:Boolean,default:!0},deselectFromDropdown:{type:Boolean,default:!1},searchable:{type:Boolean,default:!0},multiple:{type:Boolean,default:!1},placeholder:{type:String,default:""},transition:{type:String,default:"vs__fade"},clearSearchOnSelect:{type:Boolean,default:!0},closeOnSelect:{type:Boolean,default:!0},label:{type:String,default:"label"},autocomplete:{type:String,default:"off"},reduce:{type:Function,default:e=>e},selectable:{type:Function,default:e=>!0},getOptionLabel:{type:Function,default(e){return typeof e=="object"?e.hasOwnProperty(this.label)?e[this.label]:console.warn(`[vue-select warn]: Label key "option.${this.label}" does not exist in options object ${JSON.stringify(e)}.
https://vue-select.org/api/props.html#getoptionlabel`):e}},getOptionKey:{type:Function,default(e){if(typeof e!="object")return e;try{return e.hasOwnProperty("id")?e.id:gv(e)}catch(n){return console.warn(`[vue-select warn]: Could not stringify this option to generate unique key. Please provide'getOptionKey' prop to return a unique key for each option.
https://vue-select.org/api/props.html#getoptionkey`,e,n)}}},onTab:{type:Function,default:function(){this.selectOnTab&&!this.isComposing&&this.typeAheadSelect()}},taggable:{type:Boolean,default:!1},tabindex:{type:Number,default:null},pushTags:{type:Boolean,default:!1},filterable:{type:Boolean,default:!0},filterBy:{type:Function,default(e,n,o){return(n||"").toLocaleLowerCase().indexOf(o.toLocaleLowerCase())>-1}},filter:{type:Function,default(e,n){return e.filter(o=>{let a=this.getOptionLabel(o);return typeof a=="number"&&(a=a.toString()),this.filterBy(o,a,n)})}},createOption:{type:Function,default(e){return typeof this.optionList[0]=="object"?{[this.label]:e}:e}},resetOnOptionsChange:{default:!1,validator:e=>["function","boolean"].includes(typeof e)},clearSearchOnBlur:{type:Function,default:function({clearSearchOnSelect:e,multiple:n}){return e&&!n}},noDrop:{type:Boolean,default:!1},inputId:{type:String},dir:{type:String,default:"auto"},selectOnTab:{type:Boolean,default:!1},selectOnKeyCodes:{type:Array,default:()=>[13]},searchInputQuerySelector:{type:String,default:"[type=search]"},mapKeydown:{type:Function,default:(e,n)=>e},appendToBody:{type:Boolean,default:!1},calculatePosition:{type:Function,default(e,n,{width:o,top:a,left:r}){e.style.top=a,e.style.left=r,e.style.width=o}},dropdownShouldOpen:{type:Function,default({noDrop:e,open:n,mutableLoading:o}){return e?!1:n&&!o}},uid:{type:[String,Number],default:()=>_v()}},data(){return{search:"",open:!1,isComposing:!1,pushedTags:[],_value:[],deselectButtons:[]}},computed:{isReducingValues(){return this.$props.reduce!==this.$options.props.reduce.default},isTrackingValues(){return typeof this.modelValue>"u"||this.isReducingValues},selectedValue(){let e=this.modelValue;return this.isTrackingValues&&(e=this.$data._value),e!=null&&e!==""?[].concat(e):[]},optionList(){return this.options.concat(this.pushTags?this.pushedTags:[])},searchEl(){return this.$slots.search?this.$refs.selectedOptions.querySelector(this.searchInputQuerySelector):this.$refs.search},scope(){const e={search:this.search,loading:this.loading,searching:this.searching,filteredOptions:this.filteredOptions};return{search:{attributes:Co({disabled:this.disabled,placeholder:this.searchPlaceholder,tabindex:this.tabindex,readonly:!this.searchable,id:this.inputId,"aria-autocomplete":"list","aria-labelledby":`vs${this.uid}__combobox`,"aria-controls":`vs${this.uid}__listbox`,ref:"search",type:"search",autocomplete:this.autocomplete,value:this.search},this.dropdownOpen&&this.filteredOptions[this.typeAheadPointer]?{"aria-activedescendant":`vs${this.uid}__option-${this.typeAheadPointer}`}:{}),events:{compositionstart:()=>this.isComposing=!0,compositionend:()=>this.isComposing=!1,keydown:this.onSearchKeyDown,blur:this.onSearchBlur,focus:this.onSearchFocus,input:n=>this.search=n.target.value}},spinner:{loading:this.mutableLoading},noOptions:{search:this.search,loading:this.mutableLoading,searching:this.searching},openIndicator:{attributes:{ref:"openIndicator",role:"presentation",class:"vs__open-indicator"}},listHeader:e,listFooter:e,header:Qs(Co({},e),{deselect:this.deselect}),footer:Qs(Co({},e),{deselect:this.deselect})}},childComponents(){return Co(Co({},Xs),this.components)},stateClasses(){return{"vs--open":this.dropdownOpen,"vs--single":!this.multiple,"vs--multiple":this.multiple,"vs--searching":this.searching&&!this.noDrop,"vs--searchable":this.searchable&&!this.noDrop,"vs--unsearchable":!this.searchable,"vs--loading":this.mutableLoading,"vs--disabled":this.disabled}},searching(){return!!this.search},dropdownOpen(){return this.dropdownShouldOpen(this)},searchPlaceholder(){return this.isValueEmpty&&this.placeholder?this.placeholder:void 0},filteredOptions(){const e=[].concat(this.optionList);if(!this.filterable&&!this.taggable)return e;const n=this.search.length?this.filter(e,this.search,this):e;if(this.taggable&&this.search.length){const o=this.createOption(this.search);this.optionExists(o)||n.unshift(o)}return n},isValueEmpty(){return this.selectedValue.length===0},showClearButton(){return!this.multiple&&this.clearable&&!this.open&&!this.isValueEmpty}},watch:{options(e,n){const o=()=>typeof this.resetOnOptionsChange=="function"?this.resetOnOptionsChange(e,n,this.selectedValue):this.resetOnOptionsChange;!this.taggable&&o()&&this.clearSelection(),this.modelValue&&this.isTrackingValues&&this.setInternalValueFromOptions(this.modelValue)},modelValue:{immediate:!0,handler(e){this.isTrackingValues&&this.setInternalValueFromOptions(e)}},multiple(){this.clearSelection()},open(e){this.$emit(e?"open":"close")}},created(){this.mutableLoading=this.loading},methods:{setInternalValueFromOptions(e){Array.isArray(e)?this.$data._value=e.map(n=>this.findOptionFromReducedValue(n)):this.$data._value=this.findOptionFromReducedValue(e)},select(e){this.$emit("option:selecting",e),this.isOptionSelected(e)?this.deselectFromDropdown&&(this.clearable||this.multiple&&this.selectedValue.length>1)&&this.deselect(e):(this.taggable&&!this.optionExists(e)&&(this.$emit("option:created",e),this.pushTag(e)),this.multiple&&(e=this.selectedValue.concat(e)),this.updateValue(e),this.$emit("option:selected",e)),this.onAfterSelect(e)},deselect(e){this.$emit("option:deselecting",e),this.updateValue(this.selectedValue.filter(n=>!this.optionComparator(n,e))),this.$emit("option:deselected",e)},clearSelection(){this.updateValue(this.multiple?[]:null)},onAfterSelect(e){this.closeOnSelect&&(this.open=!this.open,this.searchEl.blur()),this.clearSearchOnSelect&&(this.search="")},updateValue(e){typeof this.modelValue>"u"&&(this.$data._value=e),e!==null&&(Array.isArray(e)?e=e.map(n=>this.reduce(n)):e=this.reduce(e)),this.$emit("update:modelValue",e)},toggleDropdown(e){const n=e.target!==this.searchEl;n&&e.preventDefault();const o=[...this.deselectButtons||[],this.$refs.clearButton];if(this.searchEl===void 0||o.filter(Boolean).some(a=>a.contains(e.target)||a===e.target)){e.preventDefault();return}this.open&&n?this.searchEl.blur():this.disabled||(this.open=!0,this.searchEl.focus())},isOptionSelected(e){return this.selectedValue.some(n=>this.optionComparator(n,e))},isOptionDeselectable(e){return this.isOptionSelected(e)&&this.deselectFromDropdown},optionComparator(e,n){return this.getOptionKey(e)===this.getOptionKey(n)},findOptionFromReducedValue(e){const n=a=>JSON.stringify(this.reduce(a))===JSON.stringify(e),o=[...this.options,...this.pushedTags].filter(n);return o.length===1?o[0]:o.find(a=>this.optionComparator(a,this.$data._value))||e},closeSearchOptions(){this.open=!1,this.$emit("search:blur")},maybeDeleteValue(){if(!this.searchEl.value.length&&this.selectedValue&&this.selectedValue.length&&this.clearable){let e=null;this.multiple&&(e=[...this.selectedValue.slice(0,this.selectedValue.length-1)]),this.updateValue(e)}},optionExists(e){return this.optionList.some(n=>this.optionComparator(n,e))},normalizeOptionForSlot(e){return typeof e=="object"?e:{[this.label]:e}},pushTag(e){this.pushedTags.push(e)},onEscape(){this.search.length?this.search="":this.searchEl.blur()},onSearchBlur(){if(this.mousedown&&!this.searching)this.mousedown=!1;else{const{clearSearchOnSelect:e,multiple:n}=this;this.clearSearchOnBlur({clearSearchOnSelect:e,multiple:n})&&(this.search=""),this.closeSearchOptions();return}if(this.search.length===0&&this.options.length===0){this.closeSearchOptions();return}},onSearchFocus(){this.open=!0,this.$emit("search:focus")},onMousedown(){this.mousedown=!0},onMouseUp(){this.mousedown=!1},onSearchKeyDown(e){const n=r=>(r.preventDefault(),!this.isComposing&&this.typeAheadSelect()),o={8:r=>this.maybeDeleteValue(),9:r=>this.onTab(),27:r=>this.onEscape(),38:r=>(r.preventDefault(),this.typeAheadUp()),40:r=>(r.preventDefault(),this.typeAheadDown())};this.selectOnKeyCodes.forEach(r=>o[r]=n);const a=this.mapKeydown(o,this);if(typeof a[e.keyCode]=="function")return a[e.keyCode](e)}}},Av=["dir"],Nv=["id","aria-expanded","aria-owns"],xv={ref:"selectedOptions",class:"vs__selected-options"},Bv=["disabled","title","aria-label","onClick"],Rv={ref:"actions",class:"vs__actions"},Tv=["disabled"],Sv={class:"vs__spinner"},Ev=["id"],wv=["id","aria-selected","onMouseover","onClick"],Cv={key:0,class:"vs__no-options"},Iv=Re(" Sorry, no matching options. "),kv=["id"];function Pv(e,n,o,a,r,t){const s=pd("append-to-body");return S(),U("div",{dir:o.dir,class:an(["v-select",t.stateClasses])},[gn(e.$slots,"header",In(kn(t.scope.header))),g("div",{id:`vs${o.uid}__combobox`,ref:"toggle",class:"vs__dropdown-toggle",role:"combobox","aria-expanded":t.dropdownOpen.toString(),"aria-owns":`vs${o.uid}__listbox`,"aria-label":"Search for option",onMousedown:n[1]||(n[1]=l=>t.toggleDropdown(l))},[g("div",xv,[(S(!0),U(we,null,cn(t.selectedValue,(l,c)=>gn(e.$slots,"selected-option-container",{option:t.normalizeOptionForSlot(l),deselect:t.deselect,multiple:o.multiple,disabled:o.disabled},()=>[(S(),U("span",{key:o.getOptionKey(l),class:"vs__selected"},[gn(e.$slots,"selected-option",In(kn(t.normalizeOptionForSlot(l))),()=>[Re(ie(o.getOptionLabel(l)),1)]),o.multiple?(S(),U("button",{key:0,ref_for:!0,ref:d=>r.deselectButtons[c]=d,disabled:o.disabled,type:"button",class:"vs__deselect",title:`Deselect ${o.getOptionLabel(l)}`,"aria-label":`Deselect ${o.getOptionLabel(l)}`,onClick:d=>t.deselect(l)},[(S(),Pe(Pr(t.childComponents.Deselect)))],8,Bv)):ve("",!0)]))])),256)),gn(e.$slots,"search",In(kn(t.scope.search)),()=>[g("input",wt({class:"vs__search"},t.scope.search.attributes,fd(t.scope.search.events)),null,16)])],512),g("div",Rv,[Pn(g("button",{ref:"clearButton",disabled:o.disabled,type:"button",class:"vs__clear",title:"Clear Selected","aria-label":"Clear Selected",onClick:n[0]||(n[0]=(...l)=>t.clearSelection&&t.clearSelection(...l))},[(S(),Pe(Pr(t.childComponents.Deselect)))],8,Tv),[[$i,t.showClearButton]]),gn(e.$slots,"open-indicator",In(kn(t.scope.openIndicator)),()=>[o.noDrop?ve("",!0):(S(),Pe(Pr(t.childComponents.OpenIndicator),In(wt({key:0},t.scope.openIndicator.attributes)),null,16))]),gn(e.$slots,"spinner",In(kn(t.scope.spinner)),()=>[Pn(g("div",Sv,"Loading...",512),[[$i,e.mutableLoading]])])],512)],40,Nv),$(rm,{name:o.transition},{default:ge(()=>[t.dropdownOpen?Pn((S(),U("ul",{id:`vs${o.uid}__listbox`,ref:"dropdownMenu",key:`vs${o.uid}__listbox`,class:"vs__dropdown-menu",role:"listbox",tabindex:"-1",onMousedown:n[2]||(n[2]=vo((...l)=>t.onMousedown&&t.onMousedown(...l),["prevent"])),onMouseup:n[3]||(n[3]=(...l)=>t.onMouseUp&&t.onMouseUp(...l))},[gn(e.$slots,"list-header",In(kn(t.scope.listHeader))),(S(!0),U(we,null,cn(t.filteredOptions,(l,c)=>(S(),U("li",{id:`vs${o.uid}__option-${c}`,key:o.getOptionKey(l),role:"option",class:an(["vs__dropdown-option",{"vs__dropdown-option--deselect":t.isOptionDeselectable(l)&&c===e.typeAheadPointer,"vs__dropdown-option--selected":t.isOptionSelected(l),"vs__dropdown-option--highlight":c===e.typeAheadPointer,"vs__dropdown-option--disabled":!o.selectable(l)}]),"aria-selected":c===e.typeAheadPointer?!0:null,onMouseover:d=>o.selectable(l)?e.typeAheadPointer=c:null,onClick:vo(d=>o.selectable(l)?t.select(l):null,["prevent","stop"])},[gn(e.$slots,"option",In(kn(t.normalizeOptionForSlot(l))),()=>[Re(ie(o.getOptionLabel(l)),1)])],42,wv))),128)),t.filteredOptions.length===0?(S(),U("li",Cv,[gn(e.$slots,"no-options",In(kn(t.scope.noOptions)),()=>[Iv])])):ve("",!0),gn(e.$slots,"list-footer",In(kn(t.scope.listFooter)))],40,Ev)),[[s]]):(S(),U("ul",{key:1,id:`vs${o.uid}__listbox`,role:"listbox",style:{display:"none",visibility:"hidden"}},null,8,kv))]),_:3},8,["name"]),gn(e.$slots,"footer",In(kn(t.scope.footer)))],10,Av)}const Ov=li(yv,[["render",Pv]]),jv={class:"page-header"},Dv={class:"page-header__row"},Vv={class:"page-header__heading"},Lv={key:0},ro={__name:"PageHeader",props:{title:{type:String,required:!0},description:String,helpButton:Boolean},emits:["help"],setup(e){return(n,o)=>(S(),U("header",jv,[g("div",Dv,[g("div",null,[g("div",Vv,[g("h1",null,ie(e.title),1),e.helpButton?(S(),U("button",{key:0,class:"page-header__help",type:"button",title:"Ajuda","aria-label":"Ajuda",onClick:o[0]||(o[0]=a=>n.$emit("help"))},[$(ee(si),{size:14,"aria-hidden":"true"})])):ve("",!0)]),e.description?(S(),U("p",Lv,ie(e.description),1)):ve("",!0)]),gn(n.$slots,"action")])]))}},qv={class:"empty-state"},$v={key:0,class:"empty-state__actions"},Nn={__name:"EmptyState",props:{title:String,text:String},setup(e){return(n,o)=>(S(),U("section",qv,[o[0]||(o[0]=g("div",{class:"empty-state__icon","aria-hidden":"true"},"+",-1)),g("h2",null,ie(e.title),1),g("p",null,ie(e.text),1),n.$slots.default?(S(),U("div",$v,[gn(n.$slots,"default")])):ve("",!0)]))}},Mv={key:0,class:"alert alert--error",role:"alert"},Go={__name:"ErrorMessage",props:{message:String},setup(e){return(n,o)=>e.message?(S(),U("p",Mv,[$(ee(Sh),{size:16,"aria-hidden":"true"}),g("span",null,ie(e.message),1)])):ve("",!0)}};function ci(e,n){return e?typeof e=="string"?e:n===1?e.singular:e.plural:""}function Lt(e,n,o=""){const a=typeof n=="boolean"?n?"sim":"não":n,r=ci(o,n),t=r?`${a} ${r}`:a;switch(e){case">=":return`No mínimo ${t} (inclusive)`;case"<=":return`No máximo ${t} (inclusive)`;case">":return`Acima de ${t} (sem incluir o limite)`;case"<":return`Abaixo de ${t} (sem incluir o limite)`;case"==":case"eq":return`Igual a ${t}`;case"!=":return`Diferente de ${t}`;default:return t}}function Fv(e){const n=String(e??"").replace(/[^\d.,]/g,""),o=n.search(/[.,]/);if(o===-1)return n;const a=n.slice(0,o),r=n[o],t=n.slice(o+1).replace(/[.,]/g,"");return`${a===""?"0":a}${r}${t}`}function Zc(e){const n=String(e??"").trim().replace(",",".");if(!/^\d*\.?\d*$/.test(n)||n===""||n===".")return null;const o=Number(n);return Number.isFinite(o)?o:null}function zv(e,n,o){const a=String(e??"").slice(0,o).replace(/\D/g,"").length;let r=0,t=0;for(;r<n.length&&t<a;)/\d/.test(n[r])&&(t+=1),r+=1;return r}function Ma(e,n){return String(e??"").toLowerCase().includes(n)}function Hv(e,n){const o=String(n??"").toLowerCase().trim();if(!o)return!0;const a=Ma(e?.nome,o),r=Ma(e?.norma?.nome,o),t=(e?.regras??[]).some(s=>Ma(s?.nome,o)||Ma(s?.id,o));return a||r||t}const Zs=[">=",">","==","eq","!=","<","<="];function Uv(e){const n=Zs.indexOf(e);return n===-1?Zs.length:n}function Kv(e,n){return e?.tipo==="number"?Zc(n):n}function Gv(e,n,o){if(e.tipo==="conditional"){const a=Kv(n?.parametros?.[e.parametro],o?.[e.parametro]);if(a==null||a==="")return[];const r=_c(e,a);return r?.verificar?[r.verificar]:[]}return e.operador&&e.valor!==void 0?[e]:[]}function Wv(e,n){const o={};for(const a of e?.regras??[])for(const r of Gv(a,e,n)){if(!r.parametro||r.valor===void 0)continue;o[r.parametro]??=[];const t=Lt(r.operador,r.valor,e?.parametros?.[r.parametro]?.unidade);o[r.parametro].some(s=>s.description===t)||o[r.parametro].push({description:t,order:Uv(r.operador)})}return Object.fromEntries(Object.entries(o).map(([a,r])=>[a,r.sort((t,s)=>t.order-s.order).map(t=>t.description)]))}function Yv(e){const n=new Set;for(const o of e?.regras??[])o.tipo==="checklist"&&o.parametro&&n.add(o.parametro);return n}function Jv(e,n=[],o=!1){return!!e?.definicao||n.length>0||o}function el(e,n={}){const o={};for(const[a,r]of Object.entries(e?.parametros??{})){const t=n[a];if(!(t===""||t===void 0||t===null))if(r.tipo==="number"){const s=Zc(t);s!==null&&(o[a]=s)}else r.tipo==="boolean"?o[a]=t===!0||t==="true":o[a]=t}return o}function Qv(e,n=[]){if(!e)return"";const o=new Set(n);if(!o.has(e))return e;let a=1;for(;o.has(`${e} (${a})`);)a+=1;return`${e} (${a})`}function Xv(e=[],{exceptId:n}={}){return e.filter(o=>o.id!==n).map(o=>o.name)}const Zv={class:"back-link__label"},e0={class:"ruleset-grid"},n0={class:"field"},o0=["value"],a0={class:"field"},r0={class:"ruleset-option"},t0={class:"ruleset-title"},i0={key:0,class:"ruleset-norma"},s0={key:0,class:"field"},l0={class:"field-name-input"},c0={id:"field-name-input__checkbox"},u0={class:"fields-grid"},d0={class:"field__heading"},m0=["for"],p0={key:1},f0=["aria-label","aria-expanded","aria-controls","onClick"],h0=["id"],v0={key:0},g0={key:1,class:"parameter-help__expected"},b0={key:2,class:"parameter-help__expected"},_0=["id","onUpdate:modelValue"],y0=["id","onUpdate:modelValue"],A0=["value"],N0=["id","value","onInput"],x0={class:"form-actions"},vt={__name:"ElementPage",props:{elementId:String,quick:Boolean},setup(e){const n=e,o=$e("services"),a=$e("builtInRuleSets"),r=ii(),t=Tr(),s=be(null),l=be(null),c=be([]),d=be([]),u=be(null),m=be("todas"),f=be(localStorage.getItem("elementAutoName")==="true"),h=be(null),x=be(""),_=Sa({name:"",ruleSet:"",data:{}}),E=qe(()=>!n.elementId),I=qe(()=>d.value.find(M=>M.id===_.ruleSet)),w=qe(()=>Wv(I.value,_.data)),J=qe(()=>Yv(I.value));function Q(M,H){return Jv(H,w.value[M],J.value.has(M))}const pe=qe(()=>{const M=d.value.map(H=>H.norma?.nome).filter(Boolean);return["todas",...new Set(M)]}),ue=qe(()=>m.value==="todas"?d.value:d.value.filter(M=>M.norma?.nome===m.value));async function Z(){n.quick&&o.quickEvaluationService.clear();const M=await o.ruleSetService.list();d.value=[...a.map(G=>G.ruleSet),...M],E.value||(s.value=await o.projectService.getElement(n.elementId));const H=s.value?.environmentId??r.query.environmentId;if(!(!n.quick&&(!H||!E.value&&!s.value))){if(n.quick||(l.value=await o.projectService.getEnvironment(H),c.value=await o.projectService.listElements(H)),s.value){const G=await o.evaluationService.listEvaluations(s.value.id);u.value=G[0]}_.name=s.value?.name??"",_.ruleSet=r.query.ruleSet??s.value?.rule??d.value[0]?.id??"",Object.assign(_.data,u.value?.data??{})}}function q(M,H){const G=H.target,ye=G.value,F=Fv(ye);if(_.data[M]=F,ye===F)return;const Ee=G.selectionStart??ye.length;G.value=F;const Be=zv(ye,F,Ee);G.setSelectionRange(Be,Be)}async function B(){if(x.value="",!I.value){x.value="Selecione um conjunto de regras.";return}const M=el(I.value,_.data),H={name:_.name,type:I.value.nome,rule:I.value.id};try{const G=s.value?await o.projectService.updateElement(s.value.id,H):await o.projectService.createElement(l.value.id,H);await o.evaluationService.saveElementAnswers({elementId:G.id,checklist:I.value,data:M}),t.push(`/projects/${l.value.projectId}/environments/${l.value.id}`)}catch(G){x.value=G.message}}fo([f,()=>_.ruleSet],([M,H])=>{if(localStorage.setItem("elementAutoName",String(M)),M){const ye=d.value.find(F=>F.id===H)?.nome??"";_.name=Qv(ye,Xv(c.value,{exceptId:s.value?.id}))}});async function ae(){if(x.value="",!I.value){x.value="Selecione um conjunto de regras.";return}const M=el(I.value,_.data);if(n.quick){try{o.quickEvaluationService.evaluate({name:_.name,checklist:I.value,data:M}),t.push("/quick-evaluation/result")}catch(G){x.value=G.message}return}const H={name:_.name,type:I.value.nome,rule:I.value.id};try{const G=s.value?await o.projectService.updateElement(s.value.id,H):await o.projectService.createElement(l.value.id,H);await o.evaluationService.evaluateElement({elementId:G.id,checklist:I.value,data:M}),t.push(`/elements/${G.id}/evaluation`)}catch(G){x.value=G.message}}fo(m,()=>{ue.value.some(H=>H.id===_.ruleSet)||(_.ruleSet=ue.value[0]?.id??"")}),fo(()=>_.ruleSet,()=>{h.value=null,x.value="";const M=Object.keys(I.value?.parametros??{});Object.keys(_.data).forEach(H=>{M.includes(H)||delete _.data[H]})});const de=(M,H,G)=>Hv(M,G);return xn(Z),(M,H)=>e.quick||l.value?(S(),U(we,{key:0},[e.quick?ve("",!0):(S(),Pe(ee(Ie),{key:0,class:"back-link",to:`/projects/${l.value.projectId}/environments/${l.value.id}`},{default:ge(()=>[$(ee(Ra),{size:18,"aria-hidden":"true"}),g("span",Zv,ie(l.value.name),1)]),_:1},8,["to"])),$(ro,{title:e.quick?"Avaliação rápida":E.value?"Novo elemento":s.value.name,description:"Escolha o tipo e informe as medidas observadas."},null,8,["title"]),g("form",{class:"form-card",onSubmit:H[5]||(H[5]=vo(()=>{},["prevent"]))},[g("div",e0,[g("label",n0,[H[7]||(H[7]=g("span",null,"Norma de referência",-1)),Pn(g("select",{"onUpdate:modelValue":H[0]||(H[0]=G=>m.value=G)},[H[6]||(H[6]=g("option",{value:"todas"},"Todas as normas",-1)),(S(!0),U(we,null,cn(pe.value.filter(G=>G!=="todas"),G=>(S(),U("option",{key:G,value:G},ie(G),9,o0))),128))],512),[[$r,m.value]])]),g("label",a0,[H[8]||(H[8]=g("span",null,"Tipo de elemento *",-1)),$(ee(Ov),{modelValue:_.ruleSet,"onUpdate:modelValue":H[1]||(H[1]=G=>_.ruleSet=G),options:ue.value,label:"nome",reduce:G=>G.id,"filter-by":de,placeholder:"Pesquise o elemento ou regra..."},{option:ge(G=>[g("div",r0,[g("span",t0,ie(G.nome),1),G.norma?.nome?(S(),U("small",i0," ("+ie(G.norma.nome)+") ",1)):ve("",!0)])]),_:1},8,["modelValue","options","reduce"])])]),e.quick?ve("",!0):(S(),U("div",s0,[g("div",l0,[H[10]||(H[10]=g("label",{for:"element-name"},"Nome do elemento *",-1)),g("div",c0,[Pn(g("input",{type:"checkbox",id:"auto-name-chk","onUpdate:modelValue":H[2]||(H[2]=G=>f.value=G)},null,512),[[Sm,f.value]]),H[9]||(H[9]=g("label",{for:"auto-name-chk"},"Auto Nomear",-1))])]),Pn(g("input",{id:"element-name","onUpdate:modelValue":H[3]||(H[3]=G=>_.name=G),required:"",placeholder:"Ex.: Porta principal"},null,512),[[or,_.name]])])),H[16]||(H[16]=g("div",{class:"form-divider"},[g("strong",null,"Dados para avaliação"),g("span",null,"Campos definidos pelo conjunto de regras selecionado.")],-1)),g("div",u0,[(S(!0),U(we,null,cn(I.value?.parametros,(G,ye)=>(S(),U("div",{key:ye,class:"field"},[g("div",d0,[g("label",{for:`parameter-${ye}`},[Re(ie(G.label??ye),1),G.obrigatorio?(S(),U(we,{key:0},[Re(" *")],64)):ve("",!0),G.unidade?(S(),U("small",p0," ("+ie(ee(ci)(G.unidade))+")",1)):ve("",!0)],8,m0),Q(ye,G)?(S(),U("button",{key:0,class:an(["parameter-help",{"is-open":h.value===ye}]),type:"button","aria-label":`Definição e critério: ${G.label??ye}`,"aria-expanded":h.value===ye,"aria-controls":`parameter-help-${ye}`,onClick:F=>h.value=h.value===ye?null:ye,onKeydown:H[4]||(H[4]=oi(F=>h.value=null,["esc"]))},[$(ee(si),{size:16,"aria-hidden":"true"})],42,f0)):ve("",!0)]),h.value===ye?(S(),U("div",{key:0,id:`parameter-help-${ye}`,class:"parameter-help__panel"},[G.definicao?(S(),U("p",v0,ie(G.definicao),1)):ve("",!0),w.value[ye]?.length?(S(),U("p",g0,[H[11]||(H[11]=g("strong",null,"Esperado:",-1)),Re(" "+ie(w.value[ye].join(" e ")),1)])):J.value.has(ye)?(S(),U("p",b0,[...H[12]||(H[12]=[g("strong",null,"Esperado:",-1),Re(" verificação manual ",-1)])])):ve("",!0)],8,h0)):ve("",!0),G.tipo==="boolean"?Pn((S(),U("select",{key:1,id:`parameter-${ye}`,"onUpdate:modelValue":F=>_.data[ye]=F},[...H[13]||(H[13]=[g("option",{value:""},"Não informado",-1),g("option",{value:!0},"Sim",-1),g("option",{value:!1},"Não",-1)])],8,_0)),[[$r,_.data[ye]]]):G.tipo==="select"?Pn((S(),U("select",{key:2,id:`parameter-${ye}`,"onUpdate:modelValue":F=>_.data[ye]=F},[H[14]||(H[14]=g("option",{value:""},"Selecione",-1)),(S(!0),U(we,null,cn(G.opcoes??[],F=>(S(),U("option",{key:F,value:F},ie(F),9,A0))),128))],8,y0)),[[$r,_.data[ye]]]):(S(),U("input",{key:3,id:`parameter-${ye}`,value:_.data[ye]??"",type:"text",inputmode:"decimal",autocomplete:"off",autocapitalize:"off",spellcheck:"false",onInput:F=>q(ye,F)},null,40,N0))]))),128))]),$(Go,{message:x.value},null,8,["message"]),g("div",x0,[$(ee(Ie),{class:"button button--ghost",to:e.quick?"/projects":`/projects/${l.value.projectId}/environments/${l.value.id}`},{default:ge(()=>[...H[15]||(H[15]=[Re(" Cancelar ",-1)])]),_:1},8,["to"]),e.quick?ve("",!0):(S(),U("button",{key:0,class:"button button--outline",type:"button",onClick:B}," Salvar e voltar ")),g("button",{class:"button",type:"button",onClick:ae},ie(e.quick?"Avaliar":"Salvar e avaliar"),1)])],32)],64)):(S(),Pe(Nn,{key:1,title:"Elemento não encontrado",text:"Volte para o ambiente e tente novamente."},{default:ge(()=>[$(ee(Ie),{class:"button",to:"/projects"},{default:ge(()=>[...H[17]||(H[17]=[Re("Projetos",-1)])]),_:1})]),_:1}))}},Ho={__name:"StatusBadge",props:{status:{type:String,default:"nao_avaliado"}},setup(e){return(n,o)=>(S(),U("span",{class:an(["status",`status--${e.status}`])},ie(ee(Xm)(e.status)),3))}},B0={class:"evaluation-summary","aria-labelledby":"evaluation-summary-title"},R0={class:"evaluation-summary__heading"},T0={id:"evaluation-summary-title"},S0={class:"evaluation-summary__score"},E0={class:"evaluation-summary__cards"},w0={class:"evaluation-summary__card evaluation-summary__card--conforme"},C0={class:"evaluation-summary__card evaluation-summary__card--nao_conforme"},I0={class:"evaluation-summary__card evaluation-summary__card--nao_avaliado"},ui={__name:"EvaluationSummary",props:{summary:{type:Object,required:!0},scope:{type:String,default:"elementos"}},setup(e){const n=e,o=qe(()=>n.summary.totalElements?n.summary.overallStatus==="conforme"?"Todos os elementos estão conformes":n.summary.overallStatus==="nao_conforme"?"Há elementos não conformes":"Há elementos pendentes de avaliação":"Nenhum elemento cadastrado");return(a,r)=>(S(),U("section",B0,[g("div",R0,[g("div",null,[g("h2",T0,"Situação do "+ie(e.scope),1),g("p",null,ie(o.value),1)]),g("div",S0,[g("strong",null,ie(e.summary.score)+"%",1),r[0]||(r[0]=g("span",null,"conformes",-1))])]),g("div",E0,[g("div",w0,[r[1]||(r[1]=g("span",null,"Conformes",-1)),g("strong",null,ie(e.summary.conforme),1)]),g("div",C0,[r[2]||(r[2]=g("span",null,"Não conformes",-1)),g("strong",null,ie(e.summary.nao_conforme),1)]),g("div",I0,[r[3]||(r[3]=g("span",null,"Pendentes",-1)),g("strong",null,ie(e.summary.nao_avaliado),1)])]),e.summary.totalElements?(S(),Pe(Ho,{key:0,status:e.summary.overallStatus},null,8,["status"])):ve("",!0)]))}},k0={class:"back-link__label"},P0={class:"project-header__actions"},O0={key:1,class:"card-list collection-list"},j0={class:"card__icon"},D0={class:"card__menu"},V0=["onClick"],L0={__name:"EnvironmentPage",props:{projectId:String,environmentId:String},setup(e){const n=e,o=$e("services"),a=$e("confirmPopup"),r=Tr(),t=be(null),s=be(null),l=be([]),c=be(null);function d(_){return _.status==="nao_avaliado"?`/elements/${_.element.id}`:`/elements/${_.element.id}/evaluation`}function u(_,E){a.confirm(E,`Excluir o elemento ${_.name} e suas avaliações?`,()=>m(_))}async function m(_){await o.projectService.deleteElement(_.id),await x()}function f(_){a.confirm(_,`Excluir o ambiente “${t.value.name}” e seus elementos?`,h)}async function h(){await o.projectService.deleteEnvironment(t.value.id),r.push(`/projects/${t.value.projectId}`)}async function x(){if(t.value=await o.projectService.getEnvironment(n.environmentId),!t.value)return;s.value=await o.projectService.getProject(t.value.projectId);const _=await o.projectService.listElements(t.value.id),[E,I]=await Promise.all([Promise.all(_.map(async w=>{const J=await o.evaluationService.listEvaluations(w.id);return{element:w,status:kt(J)}})),o.evaluationService.getEnvironmentSummary(t.value.id)]);l.value=E,c.value=I}return xn(x),(_,E)=>t.value?(S(),U(we,{key:0},[$(ee(Ie),{class:"back-link",to:`/projects/${t.value.projectId}`},{default:ge(()=>[$(ee(Ra),{size:18,"aria-hidden":"true"}),g("span",k0,ie(s.value?.name??"Projeto"),1)]),_:1},8,["to"]),$(ro,{title:t.value.name},{action:ge(()=>[g("div",P0,[l.value.length?(S(),Pe(ee(Ie),{key:0,class:"button",to:{path:"/elements/new",query:{environmentId:t.value.id}}},{default:ge(()=>[$(ee(Ws),{size:18,"aria-hidden":"true"}),E[0]||(E[0]=Re("Adicionar elemento ",-1))]),_:1},8,["to"])):ve("",!0)])]),_:1},8,["title"]),c.value&&l.value.length?(S(),Pe(ui,{key:0,summary:c.value,scope:"ambiente"},null,8,["summary"])):ve("",!0),l.value.length?(S(),U("div",O0,[(S(!0),U(we,null,cn(l.value,I=>(S(),U("article",{key:I.element.id,class:"card card--interactive"},[$(ee(Ie),{class:"card__link",to:d(I)},{default:ge(()=>[g("span",j0,[$(ee(xh),{size:22,"aria-hidden":"true"})]),g("div",null,[g("h2",null,ie(I.element.name),1),g("p",null,ie(I.element.type),1)]),$(Ho,{status:I.status},null,8,["status"]),$(ee(Ba),{size:20,class:"chevron","aria-hidden":"true"})]),_:2},1032,["to"]),g("div",D0,[g("button",{class:"icon-button icon-button--danger",title:"Excluir","aria-label":"Excluir",onClick:w=>u(I.element,w)},[$(ee(Sr),{size:18,"aria-hidden":"true"})],8,V0)])]))),128))])):ve("",!0),l.value.length?ve("",!0):(S(),Pe(Nn,{key:2,class:"collection-empty",title:"Nenhum elemento ainda",text:"Cadastre portas, rampas, sanitários e outros itens para avaliar."},{default:ge(()=>[$(ee(Ie),{class:"button",to:{path:"/elements/new",query:{environmentId:t.value.id}}},{default:ge(()=>[$(ee(Ws),{size:18,"aria-hidden":"true"}),E[1]||(E[1]=Re("Adicionar elemento ",-1))]),_:1},8,["to"])]),_:1})),g("div",{class:"page-footer-actions"},[g("button",{class:"text-button text-button--danger",onClick:f}," Excluir ambiente ")])],64)):(S(),Pe(Nn,{key:1,title:"Ambiente não encontrado",text:"Ele pode ter sido removido."},{default:ge(()=>[$(ee(Ie),{class:"button",to:"/projects"},{default:ge(()=>[...E[2]||(E[2]=[Re("Projetos",-1)])]),_:1})]),_:1}))}},q0={class:"back-link__label"},$0={key:0,class:"project-header__actions"},M0={class:"result-summary__counts","aria-label":"Resumo das regras"},F0={key:0,class:"result-summary__pending"},z0={class:"results"},H0={class:"result-row__content"},U0={key:0,class:"result-row__action"},K0={key:1},G0={key:0,class:"result-values"},W0={key:0,class:"result-values__context"},Y0={key:1,class:"result-values__item"},J0={key:2,class:"result-values__item result-values__item--expected"},Q0={key:3,class:"result-row__reference"},X0={key:1,class:"results-action"},Z0={key:2,class:"page-footer-actions"},nl={__name:"EvaluationPage",props:{elementId:String,quick:Boolean},setup(e){const n=e,o=$e("services"),a=$e("builtInRuleSets"),r=$e("confirmPopup"),t=Tr(),s=be(null),l=be(null),c=be(null),d=be([]),u=qe(()=>l.value?`/projects/${l.value.projectId}/environments/${l.value.id}`:"/projects"),m=qe(()=>c.value?.result??[]),f=qe(()=>d.value.find(q=>q.id===s.value?.rule));function h(q){const B=f.value?.regras?.find(Ze=>Ze.id===q.id),ae=c.value?.data??{},de=f.value?.parametros??{};let M=q.parametro??B?.parametro,H=q.operador??B?.operador,G=q.valorEsperado??B?.valor,ye="";if(B?.tipo==="conditional"){const Ze=ae[B.parametro],Ue=(B.condicoes??[]).find(Ge=>Ge.quando&&ar(Ze,Ge.quando.operador,Ge.quando.valor));if(Ue?.verificar){M=Ue.verificar.parametro,H=Ue.verificar.operador,G=Ue.verificar.valor;const Ge=de[B.parametro];ye=`${Ge?.label??B.parametro}: ${Lt(Ue.quando.operador,Ue.quando.valor,Ge?.unidade)}`}}const F=de[M]??{},Ee=q.valorInformado!==void 0?q.valorInformado:ae[M],Be=G!==void 0&&H!==void 0;return{parameterLabel:F.label??M,actual:typeof Ee=="boolean"?Ee?"Sim":"Não":Ee,unit:typeof Ee=="boolean"?"":ci(q.unidade??F.unidade??"",Ee),expected:Be?Lt(H,G,q.unidade??F.unidade):"",conditionalDescription:ye}}function x(q){return f.value?.regras?.find(B=>B.id===q.id)}function _(q){const B=q.parametro??x(q)?.parametro;return(f.value?.parametros?.[B]??{}).label??B??q.id}function E(q){const B=_(q);switch(q.status){case"invalido":return q.motivo==="obrigatorio"?`Falta preencher: ${B}`:`Ajuste “${B}”: ${q.mensagem}`;case"nao_avaliado":return`Aguardando: ${B}`;case"manual":case"atencao":case"erro":return q.mensagem??null;default:return null}}const I=qe(()=>Zm(m.value)),w=qe(()=>m.value.length?I.value.nao_conforme>0?"nao_conforme":I.value.pendente>0?"nao_avaliado":"conforme":"nao_avaliado"),J=qe(()=>{switch(w.value){case"conforme":return"Elemento conforme";case"nao_conforme":return"Há itens não conformes";default:return"Avaliação pendente"}});function Q(q){return q?new Intl.DateTimeFormat("pt-BR",{dateStyle:"medium",timeStyle:"short"}).format(new Date(q)):""}async function pe(){const q=await o.ruleSetService.list();if(d.value=[...(a??[]).map(B=>B.ruleSet),...q],n.quick){const B=o.quickEvaluationService.getCurrent();s.value=B?.element??null,c.value=B?.evaluation??null;return}if(s.value=await o.projectService.getElement(n.elementId),s.value){l.value=await o.projectService.getEnvironment(s.value.environmentId);const B=await o.evaluationService.listEvaluations(s.value.id);c.value=B[0]??null}}function ue(q){r.confirm(q,`Excluir o elemento ${s.value.name} e suas avaliações?`,Z)}async function Z(){await o.projectService.deleteElement(s.value.id),t.push(u.value)}return xn(pe),(q,B)=>s.value&&c.value?(S(),U(we,{key:0},[e.quick?ve("",!0):(S(),Pe(ee(Ie),{key:0,class:"back-link",to:u.value},{default:ge(()=>[$(ee(Ra),{size:18,"aria-hidden":"true"}),g("span",q0,ie(l.value?.name??s.value.name),1)]),_:1},8,["to"])),$(ro,{title:s.value.name,description:`Avaliação realizada em ${Q(c.value.evaluatedAt)}`},{action:ge(()=>[e.quick?ve("",!0):(S(),U("div",$0,[$(ee(Ie),{class:"button button--outline",to:`/elements/${s.value.id}`},{default:ge(()=>[$(ee(Dh),{size:18,"aria-hidden":"true"}),B[0]||(B[0]=Re("Editar elemento ",-1))]),_:1},8,["to"])]))]),_:1},8,["title","description"]),g("section",{class:an(["result-summary",`result-summary--${w.value}`])},[$(Ho,{status:w.value},null,8,["status"]),g("h2",null,ie(J.value),1),g("div",M0,[g("span",null,[g("strong",null,ie(I.value.conforme),1),B[1]||(B[1]=Re(" conformes",-1))]),g("span",null,[g("strong",null,ie(I.value.nao_conforme),1),B[2]||(B[2]=Re(" não conformes",-1))]),g("span",null,[g("strong",null,ie(I.value.pendente),1),B[3]||(B[3]=Re(" pendentes",-1))])]),I.value.pendente?(S(),U("div",F0,[B[5]||(B[5]=g("span",null,"Pendências:",-1)),(S(!0),U(we,null,cn(I.value.pendingBreakdown,ae=>(S(),U("span",{key:ae.id,class:"result-summary__pending-item"},[g("strong",null,ie(ae.count),1),Re(" "+ie(ae.label),1)]))),128)),e.quick?ve("",!0):(S(),Pe(ee(Ie),{key:0,class:"text-button",to:`/elements/${s.value.id}`},{default:ge(()=>[...B[4]||(B[4]=[Re(" Editar elemento ",-1)])]),_:1},8,["to"]))])):ve("",!0)],2),g("section",z0,[B[8]||(B[8]=g("h2",null,"Regras avaliadas",-1)),(S(!0),U(we,null,cn(m.value,ae=>(S(),U("article",{key:ae.id,class:an(["result-row",`result-row--${ae.status}`])},[g("div",H0,[$(Ho,{status:ae.status},null,8,["status"]),g("h3",null,ie(ae.nome??ae.id),1),E(ae)?(S(),U("p",U0,ie(E(ae)),1)):ae.mensagem?(S(),U("p",K0,ie(ae.mensagem),1)):ve("",!0),ee(rr)(ae.status)!=="pendente"?(S(!0),U(we,{key:2},cn([h(ae)],de=>(S(),U("div",{key:ae.id,class:"result-row__details"},[de.actual!==void 0||de.expected?(S(),U("div",G0,[de.conditionalDescription?(S(),U("div",W0,[B[6]||(B[6]=g("span",null,"Condição desta regra",-1)),g("strong",null,ie(de.conditionalDescription),1)])):ve("",!0),de.actual!==void 0?(S(),U("div",Y0,[g("span",null,"Valor informado · "+ie(de.parameterLabel),1),g("strong",null,[Re(ie(de.actual),1),de.unit?(S(),U(we,{key:0},[Re(ie(de.unit),1)],64)):ve("",!0)])])):ve("",!0),de.expected?(S(),U("div",J0,[B[7]||(B[7]=g("span",null,"Critério esperado",-1)),g("strong",null,ie(de.expected),1)])):ve("",!0)])):ve("",!0)]))),128)):ve("",!0),ae.referencia?(S(),U("small",Q0,"Referência: "+ie(ae.referencia),1)):ve("",!0)])],2))),128))]),e.quick?(S(),U("div",X0,[$(ee(Ie),{class:"button",to:"/quick-evaluation"},{default:ge(()=>[...B[9]||(B[9]=[Re(" Nova avaliação rápida ",-1)])]),_:1})])):ve("",!0),e.quick?ve("",!0):(S(),U("div",Z0,[g("button",{class:"text-button text-button--danger",onClick:ue}," Excluir elemento ")]))],64)):s.value?(S(),U(we,{key:1},[e.quick?ve("",!0):(S(),Pe(ee(Ie),{key:0,class:"back-link",to:u.value},{default:ge(()=>[$(ee(Ra),{size:18,"aria-hidden":"true"}),B[10]||(B[10]=g("span",{class:"back-link__label"},"Elemento",-1))]),_:1},8,["to"])),$(Nn,{title:"Ainda não há avaliação",text:"Preencha os dados do elemento para executar as regras."},{default:ge(()=>[$(ee(Ie),{class:"button",to:e.quick?"/quick-evaluation":`/elements/${s.value.id}`},{default:ge(()=>[Re(ie(e.quick?"Nova avaliação rápida":"Avaliar elemento"),1)]),_:1},8,["to"])]),_:1})],64)):(S(),Pe(Nn,{key:2,title:"Avaliação não encontrada",text:e.quick?"Inicie uma avaliação rápida para ver o resultado.":"O elemento pode ter sido removido."},{default:ge(()=>[$(ee(Ie),{class:"button",to:e.quick?"/quick-evaluation":"/projects"},{default:ge(()=>[Re(ie(e.quick?"Avaliação rápida":"Projetos"),1)]),_:1},8,["to"])]),_:1},8,["text"]))}},eg={class:"project-header__actions"},ng={class:"collection-form__heading"},og={class:"field"},ag={class:"environments-summary-container"},rg={key:0,class:"card-grid-environment collection-list"},tg={class:"card__icon"},ig={class:"card__menu"},sg=["onClick"],lg=["onClick"],cg={__name:"ProjectPage",props:{projectId:String},setup(e){const n=e,o=$e("services"),a=$e("confirmPopup"),r=Tr(),t=be(null),s=be([]),l=be(""),c=be(null),d=be(""),u=be(null),m=be(null),f=be(null),h=be(null);function x(){const q=h.value;h.value=null,An(()=>{q?.isConnected&&q.focus()})}async function _(){t.value=await o.projectService.getProject(n.projectId),t.value&&([s.value,u.value]=await Promise.all([o.projectService.listEnvironments(n.projectId),o.evaluationService.getProjectSummary(n.projectId)]))}async function E(q){h.value=q?.currentTarget??null,c.value={},l.value="",d.value="",await An(),m.value?.scrollIntoView({behavior:"smooth"}),f.value?.focus({preventScroll:!0}),f.value?.select()}async function I(q,B){h.value=B?.currentTarget??null,c.value=q,l.value=q.name,d.value="",await An(),f.value?.focus(),f.value?.select()}function w(){c.value=null,l.value="",d.value="",x()}async function J(){d.value="";try{c.value?.id?await o.projectService.renameEnvironment(c.value.id,l.value):await o.projectService.createEnvironment(n.projectId,{name:l.value}),w(),await _()}catch(q){d.value=q.message}}function Q(q,B){a.open({target:B.currentTarget,message:`Excluir o ambiente “${q.name}” e seus elementos?`,onAccept:()=>pe(q)})}async function pe(q){const B=await o.projectService.listElements(q.id);for(const ae of B){const de=await o.evaluationService.listEvaluations(ae.id);for(const M of de)await o.repositories.evaluationRepository.delete(M.id);await o.repositories.elementRepository.delete(ae.id)}await o.repositories.environmentRepository.delete(q.id),await _()}function ue(q){a.open({target:q.currentTarget,message:`Excluir o projeto “${t.value.name}” e seus ambientes?`,onAccept:Z})}async function Z(){await o.projectService.deleteProject(n.projectId),r.push("/projects")}return xn(_),(q,B)=>t.value?(S(),U(we,{key:0},[$(ro,{title:t.value.name,description:`${s.value.length} ambiente${s.value.length===1?"":"s"} cadastrado${s.value.length===1?"":"s"}.
      
${t.value.description}`},{action:ge(()=>[g("div",eg,[s.value.length?(S(),Pe(ee(Ie),{key:0,class:"button button--outline",to:`/projects/${e.projectId}/status`},{default:ge(()=>[$(ee(po),{size:18,"aria-hidden":"true"}),B[3]||(B[3]=Re("Status detalhado ",-1))]),_:1},8,["to"])):ve("",!0),s.value.length?(S(),U("button",{key:1,class:"button",onClick:B[0]||(B[0]=ae=>E(ae))},[$(ee(sr),{size:18,"aria-hidden":"true"}),B[4]||(B[4]=Re("Novo ambiente",-1))])):ve("",!0)])]),_:1},8,["title","description"]),c.value?(S(),U("form",{key:0,class:"form-card collection-form",onSubmit:vo(J,["prevent"]),onKeydown:oi(w,["esc"]),ref_key:"inputCreate",ref:m},[g("div",ng,[g("h2",null,ie(c.value.id?"Nome do ambiente":"Novo ambiente"),1),B[5]||(B[5]=g("p",null,"Use um nome que ajude a identificar este espaço no projeto.",-1))]),g("label",og,[B[6]||(B[6]=g("span",null,"Nome do ambiente",-1)),Pn(g("input",{ref_key:"nameInput",ref:f,"onUpdate:modelValue":B[1]||(B[1]=ae=>l.value=ae),required:""},null,512),[[or,l.value]])]),$(Go,{message:d.value},null,8,["message"]),g("div",{class:"form-actions"},[g("button",{class:"button button--ghost",type:"button",onClick:w}," Cancelar "),B[7]||(B[7]=g("button",{class:"button",type:"submit"},"Salvar",-1))])],544)):ve("",!0),u.value&&s.value.length?(S(),Pe(ui,{key:1,summary:u.value,scope:"projeto"},null,8,["summary"])):ve("",!0),g("div",ag,[s.value.length?(S(),U("div",rg,[(S(!0),U(we,null,cn(s.value,ae=>(S(),U("article",{key:ae.id,class:"card-environment"},[$(ee(Ie),{class:"card__link",to:`/projects/${t.value.id}/environments/${ae.id}`},{default:ge(()=>[g("span",tg,[$(ee(Oh),{size:22,"aria-hidden":"true"})]),g("div",null,[g("h2",null,ie(ae.name),1),B[8]||(B[8]=g("p",null,"Ambiente",-1))])]),_:2},1032,["to"]),g("div",ig,[g("button",{class:"text-button",onClick:de=>I(ae,de)}," Editar ",8,sg),g("button",{class:"icon-button icon-button--danger",title:"Excluir","aria-label":"Excluir",onClick:de=>Q(ae,de)},[$(ee(Sr),{size:18,"aria-hidden":"true"})],8,lg)])]))),128))])):ve("",!0),!s.value.length&&!c.value?(S(),Pe(Nn,{key:1,class:"collection-empty",title:"Nenhum ambiente ainda",text:"Adicione espaços como entrada, banheiro ou circulação."},{default:ge(()=>[g("button",{class:"button",onClick:B[2]||(B[2]=ae=>E(ae))},[$(ee(sr),{size:18,"aria-hidden":"true"}),B[9]||(B[9]=Re("Novo ambiente",-1))])]),_:1})):ve("",!0)]),g("div",{class:"page-footer-actions"},[g("button",{class:"text-button text-button--danger",onClick:ue}," Excluir projeto ")])],64)):(S(),Pe(Nn,{key:1,title:"Projeto não encontrado",text:"Ele pode ter sido removido."},{default:ge(()=>[$(ee(Ie),{class:"button",to:"/projects"},{default:ge(()=>[...B[10]||(B[10]=[Re("Voltar aos projetos",-1)])]),_:1})]),_:1}))}},ug={key:0,class:"muted",role:"status"},dg={class:"back-link__label"},mg={key:1,class:"project-status","aria-label":"Status por ambiente"},pg={class:"project-status__heading"},fg=["aria-label"],hg={class:"status status--conforme"},vg={class:"status status--nao_conforme"},gg={class:"status status--nao_avaliado"},bg={key:1,class:"project-status__elements"},_g={class:"project-status__element-name"},yg={key:2,class:"muted"},Ag={__name:"ProjectStatusPage",props:{projectId:String},setup(e){const n=e,o=$e("services"),a=be(null),r=be(null),t=be(!0),s=be("");async function l(){try{a.value=await o.projectService.getProject(n.projectId),a.value&&(r.value=await o.evaluationService.getProjectStatus(n.projectId))}catch(u){s.value=u.message}finally{t.value=!1}}function c(u){return u.status==="nao_avaliado"?`/elements/${u.element.id}`:`/elements/${u.element.id}/evaluation`}function d(u,m,f){return`${u} ${u===1?m:f}`}return xn(l),(u,m)=>t.value?(S(),U("p",ug,"Carregando…")):a.value&&r.value?(S(),U(we,{key:1},[$(ee(Ie),{class:"back-link",to:`/projects/${e.projectId}`},{default:ge(()=>[$(ee(Ra),{size:18,"aria-hidden":"true"}),g("span",dg,ie(a.value.name),1)]),_:1},8,["to"]),$(ro,{title:"Status do projeto",description:`${a.value.name} · ${d(r.value.environments.length,"ambiente","ambientes")}`},null,8,["description"]),$(Go,{message:s.value},null,8,["message"]),r.value.summary.totalElements?(S(),Pe(ui,{key:0,summary:r.value.summary,scope:"projeto"},null,8,["summary"])):ve("",!0),r.value.environments.length?(S(),U("section",mg,[(S(!0),U(we,null,cn(r.value.environments,f=>(S(),U("article",{key:f.environment.id,class:"card project-status__environment"},[g("header",pg,[g("div",null,[g("h2",null,ie(f.environment.name),1),g("p",null,ie(d(f.elements.length,"elemento","elementos")),1)]),$(Ho,{status:f.summary.overallStatus},null,8,["status"])]),f.elements.length?(S(),U("div",{key:0,class:"project-status__counts","aria-label":`Situação dos elementos de ${f.environment.name}`},[g("span",hg,ie(f.summary.conforme)+" conforme"+ie(f.summary.conforme===1?"":"s"),1),g("span",vg,ie(f.summary.nao_conforme)+" não conforme"+ie(f.summary.nao_conforme===1?"":"s"),1),g("span",gg,ie(f.summary.nao_avaliado)+" pendente"+ie(f.summary.nao_avaliado===1?"":"s"),1)],8,fg)):ve("",!0),f.elements.length?(S(),U("ul",bg,[(S(!0),U(we,null,cn(f.elements,h=>(S(),U("li",{key:h.element.id},[$(ee(Ie),{class:"project-status__element",to:c(h)},{default:ge(()=>[g("span",_g,ie(h.element.name),1),$(Ho,{status:h.status},null,8,["status"]),$(ee(Ba),{size:18,class:"chevron","aria-hidden":"true"})]),_:2},1032,["to"])]))),128))])):(S(),U("p",yg,"Nenhum elemento cadastrado neste ambiente.")),$(ee(Ie),{class:"text-button",to:`/projects/${e.projectId}/environments/${f.environment.id}`},{default:ge(()=>[...m[0]||(m[0]=[Re(" Abrir ambiente ",-1)])]),_:1},8,["to"])]))),128))])):(S(),Pe(Nn,{key:2,class:"collection-empty",title:"Nenhum ambiente cadastrado",text:"Crie um ambiente e cadastre elementos para acompanhar o status do projeto."},{default:ge(()=>[$(ee(Ie),{class:"button",to:`/projects/${e.projectId}`},{default:ge(()=>[...m[1]||(m[1]=[Re("Abrir projeto",-1)])]),_:1},8,["to"])]),_:1}))],64)):a.value?(S(),Pe(Nn,{key:2,title:"Não foi possível carregar o status",text:s.value||"Tente novamente mais tarde."},{default:ge(()=>[$(ee(Ie),{class:"button",to:`/projects/${e.projectId}`},{default:ge(()=>[...m[2]||(m[2]=[Re("Abrir projeto",-1)])]),_:1},8,["to"])]),_:1},8,["text"])):(S(),Pe(Nn,{key:3,title:"Projeto não encontrado",text:"Ele pode ter sido removido."},{default:ge(()=>[$(ee(Ie),{class:"button",to:"/projects"},{default:ge(()=>[...m[3]||(m[3]=[Re("Projetos",-1)])]),_:1})]),_:1}))}},Ng={class:"collection-form__heading"},xg={class:"fields-grid"},Bg={class:"field"},Rg={class:"field"},Tg={key:1,class:"card-list collection-list"},Sg={class:"card__icon"},Eg={key:0},wg={class:"card__menu"},Cg=["onClick"],Ig=["onClick"],kg={__name:"ProjectsPage",setup(e){const n=$e("services"),o=$e("confirmPopup"),a=be([]),r=be(""),t=be(""),s=be(null),l=be(""),c=be(!1),d=be(null),u=be(null);function m(){return An(()=>{d.value?.focus(),d.value?.select()})}function f(){const ue=u.value;u.value=null,An(()=>{ue?.isConnected&&ue.focus()})}function h(){c.value=!0}async function x(){a.value=await n.projectService.listProjects()}async function _(ue){u.value=ue?.currentTarget??null,s.value={},r.value="",t.value="",l.value="",await m()}async function E(ue,Z){u.value=Z?.currentTarget??null,s.value=ue,r.value=ue.name,l.value="",t.value=ue.description||"",await m()}function I(){s.value=null,r.value="",t.value="",l.value="",f()}async function w(){try{l.value="",s.value?.id?await n.projectService.updateProject(s.value.id,{name:r.value,description:t.value}):await n.projectService.createProject({name:r.value,description:t.value}),r.value="",t.value="",s.value=null,await x(),f()}catch(ue){l.value=ue.message}}function J(ue,Z){o.confirm(Z,`Excluir o projeto “${ue.name}” e seus dados?`,()=>Q(ue))}async function Q(ue){await n.projectService.deleteProject(ue.id),await x()}function pe(ue){return new Intl.DateTimeFormat("pt-BR",{dateStyle:"medium"}).format(new Date(ue))}return xn(x),(ue,Z)=>(S(),U(we,null,[$(ro,{title:"Projetos",description:"Acompanhe seus locais e avaliações.",helpButton:"",onHelp:h},{action:ge(()=>[a.value.length?(S(),U("button",{key:0,class:"button",onClick:Z[0]||(Z[0]=q=>_(q))},[$(ee(sr),{size:18,"aria-hidden":"true"}),Z[5]||(Z[5]=Re("Novo projeto",-1))])):ve("",!0)]),_:1}),s.value?(S(),U("form",{key:0,class:"form-card collection-form",onSubmit:vo(w,["prevent"]),onKeydown:oi(I,["esc"])},[g("div",Ng,[g("h2",null,ie(s.value.id?"Dados do projeto":"Novo projeto"),1),Z[6]||(Z[6]=g("p",null,"Defina um nome e, se quiser, uma breve descrição para este local.",-1))]),g("div",xg,[g("label",Bg,[Z[7]||(Z[7]=g("span",null,"Nome do projeto",-1)),Pn(g("input",{ref_key:"nameInput",ref:d,"onUpdate:modelValue":Z[1]||(Z[1]=q=>r.value=q),required:""},null,512),[[or,r.value]])]),g("label",Rg,[Z[8]||(Z[8]=g("span",null,[Re("Descrição "),g("small",null,"(opcional)")],-1)),Pn(g("input",{"onUpdate:modelValue":Z[2]||(Z[2]=q=>t.value=q)},null,512),[[or,t.value]])])]),$(Go,{message:l.value},null,8,["message"]),g("div",{class:"form-actions"},[g("button",{class:"button button--ghost",type:"button",onClick:I}," Cancelar "),Z[9]||(Z[9]=g("button",{class:"button",type:"submit"},"Salvar",-1))])],32)):ve("",!0),a.value.length?(S(),U("div",Tg,[(S(!0),U(we,null,cn(a.value,q=>(S(),U("article",{key:q.id,class:"card project-card"},[$(ee(Ie),{class:"card__link",to:`/projects/${q.id}`},{default:ge(()=>[g("span",Sg,[$(ee(Qc),{size:22,"aria-hidden":"true"})]),g("div",null,[g("h2",null,ie(q.name),1),g("p",null,"Atualizado em "+ie(pe(q.updatedAt)),1),q.description?(S(),U("p",Eg,ie(q.description),1)):ve("",!0)]),$(ee(Ba),{size:20,class:"chevron","aria-hidden":"true"})]),_:2},1032,["to"]),g("div",wg,[g("button",{class:"text-button",onClick:B=>E(q,B)}," Editar ",8,Cg),g("button",{class:"icon-button icon-button--danger",title:"Excluir","aria-label":"Excluir",onClick:B=>J(q,B)},[$(ee(Sr),{size:18,"aria-hidden":"true"})],8,Ig)])]))),128))])):s.value?ve("",!0):(S(),Pe(Nn,{key:2,class:"collection-empty",title:"Comece por um projeto",text:"Organize as avaliações de acessibilidade por obra ou local."},{default:ge(()=>[g("button",{class:"button",onClick:Z[3]||(Z[3]=q=>_(q))},[$(ee(sr),{size:18,"aria-hidden":"true"}),Z[10]||(Z[10]=Re("Novo projeto",-1))])]),_:1})),c.value?(S(),Pe(Xc,{key:3,onClose:Z[4]||(Z[4]=q=>c.value=!1)})):ve("",!0)],64))}},Pg={class:"documentation"},Og={class:"documentation__intro"},jg={class:"documentation__icon"},Dg=["href"],Vg={class:"documentation__section"},Lg={__name:"RulesDocumentationPage",setup(e){const n=qe(()=>"/Extensao-26.2/rule-engine-skill/SKILL.md");return(o,a)=>(S(),U(we,null,[$(ro,{title:"Crie e importe regras",description:"Monte checklists em YAML para avaliar os elementos do seu projeto."}),g("div",Pg,[a[5]||(a[5]=Fd(`<section class="documentation__section"><h2>Formato mínimo de um checklist</h2><p>Cada arquivo é um checklist independente. Os campos obrigatórios são <code>id</code>, <code>nome</code>, <code>parametros</code> (objeto) e <code>regras</code> (lista). YAML e JSON são aceitos.</p><pre class="documentation-code"><code>id: bebedouros
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
      mensagem: Avaliar como rampa.</code></pre><p class="documentation__note"> As condições precisam cobrir todos os valores do parâmetro: para números, um ramo final com <code>&gt;</code> ou <code>&gt;=</code>; para booleanos e seleções, um ramo para cada opção. Valor informado que nenhuma condição alcança vira <code>erro</code>, e a importação recusa o conjunto sem essa cobertura. Um parâmetro usado dentro de <code>verificar</code> (aqui, <code>possui_chanfro</code>) também precisa estar declarado em <code>parametros</code>. </p></details></section><section class="documentation__section"><h2>Resultados possíveis</h2><ul class="documentation__list"><li><code>conforme</code> / <code>nao_conforme</code> — comparação direta, ou condição explícita.</li><li><code>manual</code> — regra do tipo <code>checklist</code>.</li><li><code>atencao</code> — resultado explícito opcional numa condição de <code>conditional</code>.</li><li><code>nao_avaliado</code> — parâmetro opcional sem valor preenchido.</li><li><code>invalido</code> — parâmetro obrigatório sem valor preenchido.</li><li><code>erro</code> — regra apontando para parâmetro inexistente, ou valor informado que nenhuma condição cobre.</li></ul></section>`,4)),g("section",Og,[g("span",jg,[$(ee(si),{size:24,"aria-hidden":"true"})]),g("div",null,[a[0]||(a[0]=g("h1",null,"Crie suas regras com IA",-1)),g("a",{class:"button button--outline",href:`${n.value}`,download:"SKILL.md"}," Baixar SKILL.md ",8,Dg),a[1]||(a[1]=g("p",null,"Um arquivo de texto com instruções prontas para uma IA (Claude, ChatGPT, Cursor) gerar checklists neste formato a partir do que você descrever. Baixe, cole numa conversa com a IA e peça a regra que precisa — sem aprender YAML.",-1))])]),g("section",Vg,[a[3]||(a[3]=g("h2",null,"Importação",-1)),a[4]||(a[4]=g("p",null,[Re("Escolha um ou mais arquivos YAML/JSON, ou uma pasta com vários checklists — arquivos que não forem "),g("code",null,".yaml"),Re(", "),g("code",null,".yml"),Re(" ou "),g("code",null,".json"),Re(" são ignorados automaticamente. Tudo fica armazenado somente neste navegador.")],-1)),$(ee(Ie),{class:"button",to:"/rules"},{default:ge(()=>[...a[2]||(a[2]=[Re("Ir para importação",-1)])]),_:1})])])],64))}};function eu(e){return e?.regras?.length??0}function qg(e){return Object.keys(e?.parametros??{}).length}function $g(e){return(e?.ruleSets??[]).reduce((n,o)=>n+eu(o),0)}function Mg(e=""){const n=e.replace(/^(\.\.\/|\.\/|\/)+/,"").split("/");return n.length>1?n.slice(0,-1).join("/"):""}function Fg(e,n){const[o]=e,a=o?.norma;return a?.nome?`${a.nome}${a.versao?` · ${a.versao}`:""}`:n.split("/").at(-1)?.replaceAll("-"," ")??"Regras padrão"}function nu(e){const n=new Map;for(const o of e){const a=Mg(o.path)||o.ruleSet.id,r=n.get(a)??{id:a,source:"standard",ruleSets:[]};r.ruleSets.push(o.ruleSet),n.set(a,r)}return[...n.values()].map(o=>({...o,nome:Fg(o.ruleSets,o.id)})).sort((o,a)=>o.nome.localeCompare(a.nome))}function ou(e){const n=new Map;for(const o of e){const a=o.grupo,r=a?.id??o.id,t=n.get(r)??{id:r,nome:a?.nome??o.nome,source:"user",ruleSets:[]};t.ruleSets.push(o),n.set(r,t)}return[...n.values()].sort((o,a)=>o.nome.localeCompare(a.nome))}const zg={key:0,class:"muted",role:"status"},Hg={class:"rules-section rules-section--first"},Ug={class:"card-list ruleset-list"},Kg={key:0,class:"ruleset-card__actions"},Gg=["onClick"],Wg=["onClick"],Yg=["onClick"],Jg={__name:"RulesGroupPage",props:{source:String,groupId:String},setup(e){const n=e,o=$e("services"),a=$e("builtInRuleSets"),r=$e("confirmPopup"),t=be([]),s=be(!0),l=be(""),c=qe(()=>t.value.find(h=>h.source===n.source&&h.id===n.groupId));async function d(){s.value=!0;try{const h=await o.ruleSetService.list();t.value=[...nu(a),...ou(h)]}finally{s.value=!1}}function u(h,x){r.confirm(x,`Excluir "${h.nome}"? Esta ação não pode ser desfeita.`,()=>m(h))}async function m(h){l.value="";try{await o.ruleSetService.delete(h.id),await d()}catch(x){l.value=x.message}}async function f(h,x){try{const _=x==="json"?await o.ruleSetService.exportByIdToJson(h.id):await o.ruleSetService.exportByIdToYaml(h.id),E=x==="json"?"application/json":"text/yaml",I=document.createElement("a");I.href=URL.createObjectURL(new Blob([_],{type:E})),I.download=`${h.id}.${x}`,I.click(),URL.revokeObjectURL(I.href)}catch(_){l.value=_.message}}return xn(d),(h,x)=>s.value?(S(),U("p",zg,"Carregando…")):c.value?(S(),U(we,{key:1},[$(ro,{title:c.value.nome,description:`${c.value.ruleSets.length} checklists que compõem este conjunto.`},null,8,["title","description"]),$(Go,{message:l.value},null,8,["message"]),g("section",Hg,[x[0]||(x[0]=g("h2",null,"Checklists",-1)),g("div",Ug,[(S(!0),U(we,null,cn(c.value.ruleSets,_=>(S(),U("article",{key:_.id,class:"card ruleset-card"},[g("div",null,[g("h2",null,ie(_.nome),1),g("p",null,ie(_.norma?.nome??"Conjunto personalizado"),1),g("small",null,ie(ee(eu)(_))+" regras · "+ie(ee(qg)(_))+" campos",1)]),e.source==="user"?(S(),U("div",Kg,[g("button",{class:"button button--outline",onClick:E=>f(_,"yaml")},"Exportar YAML",8,Gg),g("button",{class:"button button--outline",onClick:E=>f(_,"json")},"Exportar JSON",8,Wg),g("button",{class:"icon-button icon-button--danger",title:"Excluir","aria-label":"Excluir",onClick:E=>u(_,E)},[$(ee(Sr),{size:18,"aria-hidden":"true"})],8,Yg)])):ve("",!0)]))),128))])])],64)):(S(),Pe(Nn,{key:2,title:"Conjunto não encontrado",text:"Ele pode ter sido removido."}))}},au=/\.(json|ya?ml)$/i;function Qg(e=""){return au.test(e)}function Xg(e=[]){const n=e.filter(o=>Qg(o.name));return{importable:n,skipped:e.length-n.length}}function Zg(e,{createId:n=()=>crypto.randomUUID()}={}){const o=e[0]?.webkitRelativePath?.split("/")[0];return{id:`importado-${o||n()}`,nome:o||(e.length===1?e[0].name.replace(au,""):"Regras importadas")}}function eb({total:e,failures:n=[],skipped:o=0}){const a=[];return n.length&&a.push(e===1?n[0]:`${n.length} de ${e} arquivo(s) não importado(s) — ${n.join("; ")}`),o&&a.push(`${o} arquivo(s) ignorado(s) por não serem .json/.yaml/.yml.`),a.join(" ")}const nb={class:"rules-actions"},ob={class:"button import-button"},ab=["disabled"],rb={class:"button button--outline import-button"},tb=["disabled"],ib={key:0,class:"muted",role:"status"},sb={key:1,class:"muted",role:"status"},lb={key:2,class:"rules-library"},cb={class:"rules-section rules-section--first rules-library__section"},ub={class:"card-list rules-library__list"},db={class:"card__icon"},mb={class:"rules-section rules-library__section"},pb={key:0,class:"card-list rules-library__list"},fb={class:"card__icon"},hb={__name:"RulesLibraryPage",setup(e){const n=$e("services"),o=$e("builtInRuleSets"),a=be([]),r=be(!0),t=be(!1),s=be(""),l=qe(()=>a.value.filter(f=>f.source==="standard")),c=qe(()=>a.value.filter(f=>f.source==="user"));async function d(){r.value=!0;try{const f=await n.ruleSetService.list();a.value=[...nu(o),...ou(f)]}finally{r.value=!1}}function u(f){return`/rules/${encodeURIComponent(f.source)}/${encodeURIComponent(f.id)}`}async function m(f){const h=[...f.target.files??[]];if(!h.length)return;const{importable:x,skipped:_}=Xg(h);if(!x.length){s.value="Nenhum arquivo .json, .yaml ou .yml encontrado.",f.target.value="";return}s.value="",t.value=!0;try{const E=[];for(const w of x)try{E.push({name:w.name,content:await w.text()})}catch(J){E.push({name:w.name,error:J.message})}const{failures:I}=await n.ruleSetService.importFromEntries(E,Zg(x));s.value=eb({total:x.length,failures:I,skipped:_}),await d()}finally{t.value=!1,f.target.value=""}}return xn(d),(f,h)=>(S(),U(we,null,[$(ro,{class:"rules-page-header",title:"Conjuntos de regras",description:"Cada pasta ou importação é exibida como um único conjunto."},{action:ge(()=>[g("div",nb,[g("label",ob,[h[0]||(h[0]=Re(" Importar arquivos ",-1)),g("input",{type:"file",accept:".json,.yaml,.yml",multiple:"",disabled:t.value,onChange:m},null,40,ab)]),g("label",rb,[h[1]||(h[1]=Re(" Importar pasta ",-1)),g("input",{type:"file",accept:".json,.yaml,.yml",webkitdirectory:"",disabled:t.value,onChange:m},null,40,tb)]),$(ee(Ie),{class:"rules-help-link",to:"/rules/documentation"},{default:ge(()=>[...h[2]||(h[2]=[Re("Como criar regras",-1)])]),_:1})])]),_:1}),t.value?(S(),U("p",ib,"Importando…")):ve("",!0),$(Go,{message:s.value},null,8,["message"]),r.value?(S(),U("p",sb,"Carregando…")):(S(),U("div",lb,[g("section",cb,[h[3]||(h[3]=g("h2",null,"Regras padrão",-1)),g("div",ub,[(S(!0),U(we,null,cn(l.value,x=>(S(),Pe(ee(Ie),{key:x.id,class:"card card--interactive rules-card",to:u(x)},{default:ge(()=>[g("span",db,[$(ee(po),{size:22,"aria-hidden":"true"})]),g("div",null,[g("h2",null,ie(x.nome),1),g("p",null,ie(x.ruleSets.length)+" checklists · "+ie(ee($g)(x))+" regras",1)]),$(ee(Ba),{size:20,class:"chevron","aria-hidden":"true"})]),_:2},1032,["to"]))),128))])]),g("section",mb,[h[4]||(h[4]=g("h2",null,"Suas regras",-1)),c.value.length?(S(),U("div",pb,[(S(!0),U(we,null,cn(c.value,x=>(S(),Pe(ee(Ie),{key:x.id,class:"card card--interactive rules-card",to:u(x)},{default:ge(()=>[g("span",fb,[$(ee(po),{size:22,"aria-hidden":"true"})]),g("div",null,[g("h2",null,ie(x.nome),1),g("p",null,ie(x.ruleSets.length)+" checklists",1)]),$(ee(Ba),{size:20,class:"chevron","aria-hidden":"true"})]),_:2},1032,["to"]))),128))])):(S(),Pe(Nn,{key:1,title:"Nenhum conjunto importado",text:"Importe arquivos ou uma pasta para começar."}))])]))],64))}},vb=[{path:"/",redirect:"/projects"},{path:"/projects",name:"projects",component:kg},{path:"/projects/:projectId",name:"project-detail",component:cg,props:!0},{path:"/projects/:projectId/status",name:"project-status",component:Ag,props:!0},{path:"/projects/:projectId/environments/:environmentId",name:"project-environment",component:L0,props:!0},{path:"/elements/new",name:"element-new",component:vt,meta:{hideBottomNav:!0}},{path:"/elements/:elementId",name:"element-detail",component:vt,props:!0},{path:"/elements/:elementId/evaluation",name:"element-evaluation",component:nl,props:!0},{path:"/quick-evaluation",name:"quick-evaluation",component:vt,props:{quick:!0}},{path:"/quick-evaluation/result",name:"quick-evaluation-result",component:nl,props:{quick:!0}},{path:"/rules",name:"rules",component:hb},{path:"/rules/documentation",name:"rules-documentation",component:Lg},{path:"/rules/:source/:groupId",name:"rules-group",component:Jg,props:!0},{path:"/:pathMatch(.*)*",redirect:"/projects"}],ru=mh({history:Kf("/Extensao-26.2/"),routes:vb}),gb={__name:"App",setup(e){const n=be(null),o=be(!1),a=ii();return la("confirmPopup",{open:r=>n.value?.open(r),confirm:(r,t,s)=>n.value?.confirm(r,t,s)}),xn(async()=>{await ru.isReady();const r=window.matchMedia?.("(display-mode: standalone)")?.matches||navigator.standalone===!0,t=localStorage.getItem("welcomePopupSeen");a.path==="/projects"&&!r&&!t&&(localStorage.setItem("welcomePopupSeen","true"),o.value=!0)}),(r,t)=>(S(),U(we,null,[$(Fh,null,{default:ge(()=>[$(ee(Jc))]),_:1}),$(Kh,{ref_key:"confirmPopup",ref:n},null,512),o.value?(S(),Pe(Xc,{key:0,onClose:t[0]||(t[0]=s=>o.value=!1)})):ve("",!0)],64))}};async function bb(){const[e,n]=await Promise.all([Ap(),lf()]);Pm(gb).provide("services",e).provide("builtInRuleSets",n).use(ru).mount("#app"),qm({immediate:!0})}bb().catch(e=>{document.querySelector("#app").innerHTML=`<main class="fatal-error"><h1>Não foi possível abrir o aplicativo</h1><p>${e.message}</p></main>`});
