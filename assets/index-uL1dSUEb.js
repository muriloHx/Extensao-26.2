(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))a(r);new MutationObserver(r=>{for(const t of r)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function o(r){const t={};return r.integrity&&(t.integrity=r.integrity),r.referrerPolicy&&(t.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?t.credentials="include":r.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(r){if(r.ep)return;r.ep=!0;const t=o(r);fetch(r.href,t)}})();function Ot(e){const n=Object.create(null);for(const o of e.split(","))n[o]=1;return o=>o in n}const $e={},Po=[],zn=()=>{},Gs=()=>!1,tr=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),ir=e=>e.startsWith("onUpdate:"),Xe=Object.assign,jt=(e,n)=>{const o=e.indexOf(n);o>-1&&e.splice(o,1)},Uc=Object.prototype.hasOwnProperty,Ve=(e,n)=>Uc.call(e,n),Ne=Array.isArray,Oo=e=>Sa(e)==="[object Map]",Ko=e=>Sa(e)==="[object Set]",ii=e=>Sa(e)==="[object Date]",Se=e=>typeof e=="function",ze=e=>typeof e=="string",Pn=e=>typeof e=="symbol",qe=e=>e!==null&&typeof e=="object",Ws=e=>(qe(e)||Se(e))&&Se(e.then)&&Se(e.catch),Ys=Object.prototype.toString,Sa=e=>Ys.call(e),Kc=e=>Sa(e).slice(8,-1),Js=e=>Sa(e)==="[object Object]",Dt=e=>ze(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,ta=Ot(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),sr=e=>{const n=Object.create(null);return(o=>n[o]||(n[o]=e(o)))},Gc=/-\w/g,pn=sr(e=>e.replace(Gc,n=>n.slice(1).toUpperCase())),Wc=/\B([A-Z])/g,vo=sr(e=>e.replace(Wc,"-$1").toLowerCase()),lr=sr(e=>e.charAt(0).toUpperCase()+e.slice(1)),Fa=sr(e=>e?`on${lr(e)}`:""),Mn=(e,n)=>!Object.is(e,n),za=(e,...n)=>{for(let o=0;o<e.length;o++)e[o](...n)},Qs=(e,n,o,a=!1)=>{Object.defineProperty(e,n,{configurable:!0,enumerable:!1,writable:a,value:o})},cr=e=>{const n=parseFloat(e);return isNaN(n)?e:n},Yc=e=>{const n=ze(e)?Number(e):NaN;return isNaN(n)?e:n};let si;const ur=()=>si||(si=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function dr(e){if(Ne(e)){const n={};for(let o=0;o<e.length;o++){const a=e[o],r=ze(a)?Zc(a):dr(a);if(r)for(const t in r)n[t]=r[t]}return n}else if(ze(e)||qe(e))return e}const Jc=/;(?![^(]*\))/g,Qc=/:([^]+)/,Xc=/\/\*[^]*?\*\//g;function Zc(e){const n={};return e.replace(Xc,"").split(Jc).forEach(o=>{if(o){const a=o.split(Qc);a.length>1&&(n[a[0].trim()]=a[1].trim())}}),n}function dn(e){let n="";if(ze(e))n=e;else if(Ne(e))for(let o=0;o<e.length;o++){const a=dn(e[o]);a&&(n+=a+" ")}else if(qe(e))for(const o in e)e[o]&&(n+=o+" ");return n.trim()}function En(e){if(!e)return null;let{class:n,style:o}=e;return n&&!ze(n)&&(e.class=dn(n)),o&&(e.style=dr(o)),e}const eu="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",nu=Ot(eu);function Xs(e){return!!e||e===""}function ou(e,n){if(e.length!==n.length)return!1;let o=!0;for(let a=0;o&&a<e.length;a++)o=Go(e[a],n[a]);return o}function Go(e,n){if(e===n)return!0;let o=ii(e),a=ii(n);if(o||a)return o&&a?e.getTime()===n.getTime():!1;if(o=Pn(e),a=Pn(n),o||a)return e===n;if(o=Ne(e),a=Ne(n),o||a)return o&&a?ou(e,n):!1;if(o=qe(e),a=qe(n),o||a){if(!o||!a)return!1;const r=Object.keys(e).length,t=Object.keys(n).length;if(r!==t)return!1;for(const s in e){const l=e.hasOwnProperty(s),c=n.hasOwnProperty(s);if(l&&!c||!l&&c||!Go(e[s],n[s]))return!1}}return String(e)===String(n)}function Vt(e,n){return e.findIndex(o=>Go(o,n))}const Zs=e=>!!(e&&e.__v_isRef===!0),le=e=>ze(e)?e:e==null?"":Ne(e)||qe(e)&&(e.toString===Ys||!Se(e.toString))?Zs(e)?le(e.value):JSON.stringify(e,el,2):String(e),el=(e,n)=>Zs(n)?el(e,n.value):Oo(n)?{[`Map(${n.size})`]:[...n.entries()].reduce((o,[a,r],t)=>(o[xr(a,t)+" =>"]=r,o),{})}:Ko(n)?{[`Set(${n.size})`]:[...n.values()].map(o=>xr(o))}:Pn(n)?xr(n):qe(n)&&!Ne(n)&&!Js(n)?String(n):n,xr=(e,n="")=>{var o;return Pn(e)?`Symbol(${(o=e.description)!=null?o:n})`:e};let Ze;class au{constructor(n=!1){this.detached=n,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this._warnOnRun=!0,this.__v_skip=!0,!n&&Ze&&(Ze.active?(this.parent=Ze,this.index=(Ze.scopes||(Ze.scopes=[])).push(this)-1):(this._active=!1,this._warnOnRun=!1))}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let n,o;if(this.scopes){const a=this.scopes.slice();for(n=0,o=a.length;n<o;n++)a[n].pause()}for(n=0,o=this.effects.length;n<o;n++)this.effects[n].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let n,o;if(this.scopes){const r=this.scopes.slice();for(n=0,o=r.length;n<o;n++)r[n].resume()}const a=this.effects.slice();for(n=0,o=a.length;n<o;n++)a[n].resume()}}run(n){if(this._active){const o=Ze;try{return Ze=this,n()}finally{Ze=o}}}on(){++this._on===1&&(this.prevScope=Ze,Ze=this)}off(){if(this._on>0&&--this._on===0){if(Ze===this)Ze=this.prevScope;else{let n=Ze;for(;n;){if(n.prevScope===this){n.prevScope=this.prevScope;break}n=n.prevScope}}this.prevScope=void 0}}stop(n){if(this._active){this._active=!1;let o,a;for(o=0,a=this.effects.length;o<a;o++)this.effects[o].stop();for(this.effects.length=0,o=0,a=this.cleanups.length;o<a;o++)this.cleanups[o]();if(this.cleanups.length=0,this.scopes){const r=this.scopes.slice();for(o=0,a=r.length;o<a;o++)r[o].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!n){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0}}}function ru(){return Ze}let Fe;const Br=new WeakSet;class nl{constructor(n){this.fn=n,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Ze&&(Ze.active?Ze.effects.push(this):this.flags&=-2)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Br.has(this)&&(Br.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||al(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,li(this),rl(this);const n=Fe,o=In;Fe=this,In=!0;try{return this.fn()}finally{tl(this),Fe=n,In=o,this.flags&=-3}}stop(){if(this.flags&1){for(let n=this.deps;n;n=n.nextDep)$t(n);this.deps=this.depsTail=void 0,li(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Br.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){mt(this)&&this.run()}get dirty(){return mt(this)}}let ol=0,ia,sa;function al(e,n=!1){if(e.flags|=8,n){e.next=sa,sa=e;return}e.next=ia,ia=e}function Lt(){ol++}function qt(){if(--ol>0)return;if(sa){let n=sa;for(sa=void 0;n;){const o=n.next;n.next=void 0,n.flags&=-9,n=o}}let e;for(;ia;){let n=ia;for(ia=void 0;n;){const o=n.next;if(n.next=void 0,n.flags&=-9,n.flags&1)try{n.trigger()}catch(a){e||(e=a)}n=o}}if(e)throw e}function rl(e){for(let n=e.deps;n;n=n.nextDep)n.version=-1,n.prevActiveLink=n.dep.activeLink,n.dep.activeLink=n}function tl(e){let n,o=e.depsTail,a=o;for(;a;){const r=a.prevDep;a.version===-1?(a===o&&(o=r),$t(a),tu(a)):n=a,a.dep.activeLink=a.prevActiveLink,a.prevActiveLink=void 0,a=r}e.deps=n,e.depsTail=o}function mt(e){for(let n=e.deps;n;n=n.nextDep)if(n.dep.version!==n.version||n.dep.computed&&(il(n.dep.computed)||n.dep.version!==n.version))return!0;return!!e._dirty}function il(e){if(e.flags&4&&!(e.flags&16)||(e.flags&=-17,e.globalVersion===fa)||(e.globalVersion=fa,!e.isSSR&&e.flags&128&&(!e.deps&&!e._dirty||!mt(e))))return;e.flags|=2;const n=e.dep,o=Fe,a=In;Fe=e,In=!0;try{rl(e);const r=e.fn(e._value);(n.version===0||Mn(r,e._value))&&(e.flags|=128,e._value=r,n.version++)}catch(r){throw n.version++,r}finally{Fe=o,In=a,tl(e),e.flags&=-3}}function $t(e,n=!1){const{dep:o,prevSub:a,nextSub:r}=e;if(a&&(a.nextSub=r,e.prevSub=void 0),r&&(r.prevSub=a,e.nextSub=void 0),o.subs===e&&(o.subs=a,!a&&o.computed)){o.computed.flags&=-5;for(let t=o.computed.deps;t;t=t.nextDep)$t(t,!0)}!n&&!--o.sc&&o.map&&o.map.delete(o.key)}function tu(e){const{prevDep:n,nextDep:o}=e;n&&(n.nextDep=o,e.prevDep=void 0),o&&(o.prevDep=n,e.nextDep=void 0)}let In=!0;const sl=[];function eo(){sl.push(In),In=!1}function no(){const e=sl.pop();In=e===void 0?!0:e}function li(e){const{cleanup:n}=e;if(e.cleanup=void 0,n){const o=Fe;Fe=void 0;try{n()}finally{Fe=o}}}let fa=0;class iu{constructor(n,o){this.sub=n,this.dep=o,this.version=o.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Mt{constructor(n){this.computed=n,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(n){if(!Fe||!In||Fe===this.computed)return;let o=this.activeLink;if(o===void 0||o.sub!==Fe)o=this.activeLink=new iu(Fe,this),Fe.deps?(o.prevDep=Fe.depsTail,Fe.depsTail.nextDep=o,Fe.depsTail=o):Fe.deps=Fe.depsTail=o,ll(o);else if(o.version===-1&&(o.version=this.version,o.nextDep)){const a=o.nextDep;a.prevDep=o.prevDep,o.prevDep&&(o.prevDep.nextDep=a),o.prevDep=Fe.depsTail,o.nextDep=void 0,Fe.depsTail.nextDep=o,Fe.depsTail=o,Fe.deps===o&&(Fe.deps=a)}return o}trigger(n){this.version++,fa++,this.notify(n)}notify(n){Lt();try{for(let o=this.subs;o;o=o.prevSub)o.sub.notify()&&o.sub.dep.notify()}finally{qt()}}}function ll(e){if(e.dep.sc++,e.sub.flags&4){const n=e.dep.computed;if(n&&!e.dep.subs){n.flags|=20;for(let a=n.deps;a;a=a.nextDep)ll(a)}const o=e.dep.subs;o!==e&&(e.prevSub=o,o&&(o.nextSub=e)),e.dep.subs=e}}const pt=new WeakMap,Ro=Symbol(""),ft=Symbol(""),ha=Symbol("");function on(e,n,o){if(In&&Fe){let a=pt.get(e);a||pt.set(e,a=new Map);let r=a.get(o);r||(a.set(o,r=new Mt),r.map=a,r.key=o),r.track()}}function Jn(e,n,o,a,r,t){const s=pt.get(e);if(!s){fa++;return}const l=c=>{c&&c.trigger()};if(Lt(),n==="clear")s.forEach(l);else{const c=Ne(e),d=c&&Dt(o);if(c&&o==="length"){const u=Number(a);s.forEach((m,f)=>{(f==="length"||f===ha||!Pn(f)&&f>=u)&&l(m)})}else switch((o!==void 0||s.has(void 0))&&l(s.get(o)),d&&l(s.get(ha)),n){case"add":c?d&&l(s.get("length")):(l(s.get(Ro)),Oo(e)&&l(s.get(ft)));break;case"delete":c||(l(s.get(Ro)),Oo(e)&&l(s.get(ft)));break;case"set":Oo(e)&&l(s.get(Ro));break}}qt()}function wo(e){const n=je(e);return n===e?n:(on(n,"iterate",ha),Rn(e)?n:n.map(On))}function mr(e){return on(e=je(e),"iterate",ha),e}function qn(e,n){return oo(e)?qo(So(e)?On(n):n):On(n)}const su={__proto__:null,[Symbol.iterator](){return Tr(this,Symbol.iterator,e=>qn(this,e))},concat(...e){return wo(this).concat(...e.map(n=>Ne(n)?wo(n):n))},entries(){return Tr(this,"entries",e=>(e[1]=qn(this,e[1]),e))},every(e,n){return Un(this,"every",e,n,void 0,arguments)},filter(e,n){return Un(this,"filter",e,n,o=>o.map(a=>qn(this,a)),arguments)},find(e,n){return Un(this,"find",e,n,o=>qn(this,o),arguments)},findIndex(e,n){return Un(this,"findIndex",e,n,void 0,arguments)},findLast(e,n){return Un(this,"findLast",e,n,o=>qn(this,o),arguments)},findLastIndex(e,n){return Un(this,"findLastIndex",e,n,void 0,arguments)},forEach(e,n){return Un(this,"forEach",e,n,void 0,arguments)},includes(...e){return Rr(this,"includes",e)},indexOf(...e){return Rr(this,"indexOf",e)},join(e){return wo(this).join(e)},lastIndexOf(...e){return Rr(this,"lastIndexOf",e)},map(e,n){return Un(this,"map",e,n,void 0,arguments)},pop(){return Jo(this,"pop")},push(...e){return Jo(this,"push",e)},reduce(e,...n){return ci(this,"reduce",e,n)},reduceRight(e,...n){return ci(this,"reduceRight",e,n)},shift(){return Jo(this,"shift")},some(e,n){return Un(this,"some",e,n,void 0,arguments)},splice(...e){return Jo(this,"splice",e)},toReversed(){return wo(this).toReversed()},toSorted(e){return wo(this).toSorted(e)},toSpliced(...e){return wo(this).toSpliced(...e)},unshift(...e){return Jo(this,"unshift",e)},values(){return Tr(this,"values",e=>qn(this,e))}};function Tr(e,n,o){const a=mr(e),r=a[n]();return a!==e&&!Rn(e)&&(r._next=r.next,r.next=()=>{const t=r._next();return t.done||(t.value=o(t.value)),t}),r}const lu=Array.prototype;function Un(e,n,o,a,r,t){const s=mr(e),l=s!==e&&!Rn(e),c=s[n];if(c!==lu[n]){const m=c.apply(e,t);return l?On(m):m}let d=o;s!==e&&(l?d=function(m,f){return o.call(this,qn(e,m),f,e)}:o.length>2&&(d=function(m,f){return o.call(this,m,f,e)}));const u=c.call(s,d,a);return l&&r?r(u):u}function ci(e,n,o,a){const r=mr(e),t=r!==e&&!Rn(e);let s=o,l=!1;r!==e&&(t?(l=a.length===0,s=function(d,u,m){return l&&(l=!1,d=qn(e,d)),o.call(this,d,qn(e,u),m,e)}):o.length>3&&(s=function(d,u,m){return o.call(this,d,u,m,e)}));const c=r[n](s,...a);return l?qn(e,c):c}function Rr(e,n,o){const a=je(e);on(a,"iterate",ha);const r=a[n](...o);return(r===-1||r===!1)&&Ht(o[0])?(o[0]=je(o[0]),a[n](...o)):r}function Jo(e,n,o=[]){eo(),Lt();const a=je(e)[n].apply(e,o);return qt(),no(),a}const cu=Ot("__proto__,__v_isRef,__isVue"),cl=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(Pn));function uu(e){Pn(e)||(e=String(e));const n=je(this);return on(n,"has",e),n.hasOwnProperty(e)}class ul{constructor(n=!1,o=!1){this._isReadonly=n,this._isShallow=o}get(n,o,a){if(o==="__v_skip")return n.__v_skip;const r=this._isReadonly,t=this._isShallow;if(o==="__v_isReactive")return!r;if(o==="__v_isReadonly")return r;if(o==="__v_isShallow")return t;if(o==="__v_raw")return a===(r?t?yu:fl:t?pl:ml).get(n)||Object.getPrototypeOf(n)===Object.getPrototypeOf(a)?n:void 0;const s=Ne(n);if(!r){let c;if(s&&(c=su[o]))return c;if(o==="hasOwnProperty")return uu}const l=Reflect.get(n,o,tn(n)?n:a);if((Pn(o)?cl.has(o):cu(o))||(r||on(n,"get",o),t))return l;if(tn(l)){const c=s&&Dt(o)?l:l.value;return r&&qe(c)?vt(c):c}return qe(l)?r?vt(l):wa(l):l}}class dl extends ul{constructor(n=!1){super(!1,n)}set(n,o,a,r){let t=n[o];const s=Ne(n)&&Dt(o);if(!this._isShallow){const d=oo(t);if(!Rn(a)&&!oo(a)&&(t=je(t),a=je(a)),!s&&tn(t)&&!tn(a))return d||(t.value=a),!0}const l=s?Number(o)<n.length:Ve(n,o),c=Reflect.set(n,o,a,tn(n)?n:r);return n===je(r)&&c&&(l?Mn(a,t)&&Jn(n,"set",o,a):Jn(n,"add",o,a)),c}deleteProperty(n,o){const a=Ve(n,o);n[o];const r=Reflect.deleteProperty(n,o);return r&&a&&Jn(n,"delete",o,void 0),r}has(n,o){const a=Reflect.has(n,o);return(!Pn(o)||!cl.has(o))&&on(n,"has",o),a}ownKeys(n){return on(n,"iterate",Ne(n)?"length":Ro),Reflect.ownKeys(n)}}class du extends ul{constructor(n=!1){super(!0,n)}set(n,o){return!0}deleteProperty(n,o){return!0}}const mu=new dl,pu=new du,fu=new dl(!0);const ht=e=>e,ja=e=>Reflect.getPrototypeOf(e);function hu(e,n,o){return function(...a){const r=this.__v_raw,t=je(r),s=Oo(t),l=e==="entries"||e===Symbol.iterator&&s,c=e==="keys"&&s,d=r[e](...a),u=o?ht:n?qo:On;return!n&&on(t,"iterate",c?ft:Ro),Xe(Object.create(d),{next(){const{value:m,done:f}=d.next();return f?{value:m,done:f}:{value:l?[u(m[0]),u(m[1])]:u(m),done:f}}})}}function Da(e){return function(...n){return e==="delete"?!1:e==="clear"?void 0:this}}function vu(e,n){const o={get(r){const t=this.__v_raw,s=je(t),l=je(r);e||(Mn(r,l)&&on(s,"get",r),on(s,"get",l));const{has:c}=ja(s),d=n?ht:e?qo:On;if(c.call(s,r))return d(t.get(r));if(c.call(s,l))return d(t.get(l));t!==s&&t.get(r)},get size(){const r=this.__v_raw;return!e&&on(je(r),"iterate",Ro),r.size},has(r){const t=this.__v_raw,s=je(t),l=je(r);return e||(Mn(r,l)&&on(s,"has",r),on(s,"has",l)),r===l?t.has(r):t.has(r)||t.has(l)},forEach(r,t){const s=this,l=s.__v_raw,c=je(l),d=n?ht:e?qo:On;return!e&&on(c,"iterate",Ro),l.forEach((u,m)=>r.call(t,d(u),d(m),s))}};return Xe(o,e?{add:Da("add"),set:Da("set"),delete:Da("delete"),clear:Da("clear")}:{add(r){const t=je(this),s=ja(t),l=je(r),c=!n&&!Rn(r)&&!oo(r)?l:r;return s.has.call(t,c)||Mn(r,c)&&s.has.call(t,r)||Mn(l,c)&&s.has.call(t,l)||(t.add(c),Jn(t,"add",c,c)),this},set(r,t){!n&&!Rn(t)&&!oo(t)&&(t=je(t));const s=je(this),{has:l,get:c}=ja(s);let d=l.call(s,r);d||(r=je(r),d=l.call(s,r));const u=c.call(s,r);return s.set(r,t),d?Mn(t,u)&&Jn(s,"set",r,t):Jn(s,"add",r,t),this},delete(r){const t=je(this),{has:s,get:l}=ja(t);let c=s.call(t,r);c||(r=je(r),c=s.call(t,r)),l&&l.call(t,r);const d=t.delete(r);return c&&Jn(t,"delete",r,void 0),d},clear(){const r=je(this),t=r.size!==0,s=r.clear();return t&&Jn(r,"clear",void 0,void 0),s}}),["keys","values","entries",Symbol.iterator].forEach(r=>{o[r]=hu(r,e,n)}),o}function Ft(e,n){const o=vu(e,n);return(a,r,t)=>r==="__v_isReactive"?!e:r==="__v_isReadonly"?e:r==="__v_raw"?a:Reflect.get(Ve(o,r)&&r in a?o:a,r,t)}const gu={get:Ft(!1,!1)},bu={get:Ft(!1,!0)},_u={get:Ft(!0,!1)};const ml=new WeakMap,pl=new WeakMap,fl=new WeakMap,yu=new WeakMap;function Au(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function wa(e){return oo(e)?e:zt(e,!1,mu,gu,ml)}function hl(e){return zt(e,!1,fu,bu,pl)}function vt(e){return zt(e,!0,pu,_u,fl)}function zt(e,n,o,a,r){if(!qe(e)||e.__v_raw&&!(n&&e.__v_isReactive)||e.__v_skip||!Object.isExtensible(e))return e;const t=r.get(e);if(t)return t;const s=Au(Kc(e));if(s===0)return e;const l=new Proxy(e,s===2?a:o);return r.set(e,l),l}function So(e){return oo(e)?So(e.__v_raw):!!(e&&e.__v_isReactive)}function oo(e){return!!(e&&e.__v_isReadonly)}function Rn(e){return!!(e&&e.__v_isShallow)}function Ht(e){return e?!!e.__v_raw:!1}function je(e){const n=e&&e.__v_raw;return n?je(n):e}function Nu(e){return!Ve(e,"__v_skip")&&Object.isExtensible(e)&&Qs(e,"__v_skip",!0),e}const On=e=>qe(e)?wa(e):e,qo=e=>qe(e)?vt(e):e;function tn(e){return e?e.__v_isRef===!0:!1}function Be(e){return vl(e,!1)}function xu(e){return vl(e,!0)}function vl(e,n){return tn(e)?e:new Bu(e,n)}class Bu{constructor(n,o){this.dep=new Mt,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=o?n:je(n),this._value=o?n:On(n),this.__v_isShallow=o}get value(){return this.dep.track(),this._value}set value(n){const o=this._rawValue,a=this.__v_isShallow||Rn(n)||oo(n);n=a?n:je(n),Mn(n,o)&&(this._rawValue=n,this._value=a?n:On(n),this.dep.trigger())}}function re(e){return tn(e)?e.value:e}const Tu={get:(e,n,o)=>n==="__v_raw"?e:re(Reflect.get(e,n,o)),set:(e,n,o,a)=>{const r=e[n];return tn(r)&&!tn(o)?(r.value=o,!0):Reflect.set(e,n,o,a)}};function gl(e){return So(e)?e:new Proxy(e,Tu)}class Ru{constructor(n,o,a){this.fn=n,this.setter=o,this._value=void 0,this.dep=new Mt(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=fa-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!o,this.isSSR=a}notify(){if(this.flags|=16,!(this.flags&8)&&Fe!==this)return al(this,!0),!0}get value(){const n=this.dep.track();return il(this),n&&(n.version=this.dep.version),this._value}set value(n){this.setter&&this.setter(n)}}function Su(e,n,o=!1){let a,r;return Se(e)?a=e:(a=e.get,r=e.set),new Ru(a,r,o)}const Va={},Ka=new WeakMap;let No;function wu(e,n=!1,o=No){if(o){let a=Ka.get(o);a||Ka.set(o,a=[]),a.push(e)}}function Eu(e,n,o=$e){const{immediate:a,deep:r,once:t,scheduler:s,augmentJob:l,call:c}=o,d=q=>r?q:Rn(q)||r===!1||r===0?Qn(q,1):Qn(q);let u,m,f,v,B=!1,y=!1;if(tn(e)?(m=()=>e.value,B=Rn(e)):So(e)?(m=()=>d(e),B=!0):Ne(e)?(y=!0,B=e.some(q=>So(q)||Rn(q)),m=()=>e.map(q=>{if(tn(q))return q.value;if(So(q))return d(q);if(Se(q))return c?c(q,2):q()})):Se(e)?n?m=c?()=>c(e,2):e:m=()=>{if(f){eo();try{f()}finally{no()}}const q=No;No=u;try{return c?c(e,3,[v]):e(v)}finally{No=q}}:m=zn,n&&r){const q=m,oe=r===!0?1/0:r;m=()=>Qn(q(),oe)}const w=ru(),H=()=>{u.stop(),w&&w.active&&jt(w.effects,u)};if(t&&n){const q=n;n=(...oe)=>{const F=q(...oe);return H(),F}}let P=y?new Array(e.length).fill(Va):Va;const Y=q=>{if(!(!(u.flags&1)||!u.dirty&&!q))if(n){const oe=u.run();if(q||r||B||(y?oe.some((F,x)=>Mn(F,P[x])):Mn(oe,P))){f&&f();const F=No;No=u;try{const x=[oe,P===Va?void 0:y&&P[0]===Va?[]:P,v];P=oe,c?c(n,3,x):n(...x)}finally{No=F}}}else u.run()};return l&&l(Y),u=new nl(m),u.scheduler=s?()=>s(Y,!1):Y,v=q=>wu(q,!1,u),f=u.onStop=()=>{const q=Ka.get(u);if(q){if(c)c(q,4);else for(const oe of q)oe();Ka.delete(u)}},n?a?Y(!0):P=u.run():s?s(Y.bind(null,!0),!0):u.run(),H.pause=u.pause.bind(u),H.resume=u.resume.bind(u),H.stop=H,H}function Qn(e,n=1/0,o){if(n<=0||!qe(e)||e.__v_skip||(o=o||new Map,(o.get(e)||0)>=n))return e;if(o.set(e,n),n--,tn(e))Qn(e.value,n,o);else if(Ne(e))for(let a=0;a<e.length;a++)Qn(e[a],n,o);else if(Ko(e)||Oo(e))e.forEach(a=>{Qn(a,n,o)});else if(Js(e)){for(const a in e)Qn(e[a],n,o);for(const a of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,a)&&Qn(e[a],n,o)}return e}function Ea(e,n,o,a){try{return a?e(...a):e()}catch(r){pr(r,n,o)}}function Sn(e,n,o,a){if(Se(e)){const r=Ea(e,n,o,a);return r&&Ws(r)&&r.catch(t=>{pr(t,n,o)}),r}if(Ne(e)){const r=[];for(let t=0;t<e.length;t++)r.push(Sn(e[t],n,o,a));return r}}function pr(e,n,o,a=!0){const r=n?n.vnode:null,{errorHandler:t,throwUnhandledErrorInProduction:s}=n&&n.appContext.config||$e;if(n){let l=n.parent;const c=n.proxy,d=`https://vuejs.org/error-reference/#runtime-${o}`;for(;l;){const u=l.ec;if(u){for(let m=0;m<u.length;m++)if(u[m](e,c,d)===!1)return}l=l.parent}if(t){eo(),Ea(t,null,10,[e,c,d]),no();return}}Cu(e,o,r,a,s)}function Cu(e,n,o,a=!0,r=!1){if(r)throw e;console.error(e)}const mn=[];let Ln=-1;const jo=[];let co=null,Co=0;const bl=Promise.resolve();let Ga=null;function yn(e){const n=Ga||bl;return e?n.then(this?e.bind(this):e):n}function ku(e){let n=Ln+1,o=mn.length;for(;n<o;){const a=n+o>>>1,r=mn[a],t=va(r);t<e||t===e&&r.flags&2?n=a+1:o=a}return n}function Ut(e){if(!(e.flags&1)){const n=va(e),o=mn[mn.length-1];!o||!(e.flags&2)&&n>=va(o)?mn.push(e):mn.splice(ku(n),0,e),e.flags|=1,_l()}}function _l(){Ga||(Ga=bl.then(Al))}function Iu(e){if(!Ne(e))co&&e.id===-1?co.splice(Co+1,0,e):e.flags&1||(jo.push(e),e.flags|=1);else for(let n=0;n<e.length;n++)jo.push(e[n]);_l()}function ui(e,n,o=Ln+1){for(;o<mn.length;o++){const a=mn[o];if(a&&a.flags&2){if(e&&a.id!==e.uid)continue;mn.splice(o,1),o--,a.flags&4&&(a.flags&=-2),a(),a.flags&4||(a.flags&=-2)}}}function yl(e){if(jo.length){const n=[...new Set(jo)].sort((o,a)=>va(o)-va(a));if(jo.length=0,co){for(let o=0;o<n.length;o++)co.push(n[o]);return}for(co=n,Co=0;Co<co.length;Co++){const o=co[Co];o.flags&4&&(o.flags&=-2),o.flags&8||o(),o.flags&=-2}co=null,Co=0}}const va=e=>e.id==null?e.flags&2?-1:1/0:e.id;function Al(e){try{for(Ln=0;Ln<mn.length;Ln++){const n=mn[Ln];n&&!(n.flags&8)&&(n.flags&4&&(n.flags&=-2),Ea(n,n.i,n.i?15:14),n.flags&4||(n.flags&=-2))}}finally{for(;Ln<mn.length;Ln++){const n=mn[Ln];n&&(n.flags&=-2)}Ln=-1,mn.length=0,yl(),Ga=null,(mn.length||jo.length)&&Al()}}let en=null,Nl=null;function Wa(e){const n=en;return en=e,Nl=e&&e.type.__scopeId||null,n}function _e(e,n=en,o){if(!n||e._n)return e;const a=(...r)=>{a._d&&Xa(-1);const t=Wa(n),s=Xn.length;let l;try{l=e(...r)}finally{for(let c=Xn.length;c>s;c--)Qt();Wa(t),a._d&&Xa(1)}return l};return a._n=!0,a._c=!0,a._d=!0,a}function kn(e,n){if(en===null)return e;const o=_r(en),a=e.dirs||(e.dirs=[]);for(let r=0;r<n.length;r++){let[t,s,l,c=$e]=n[r];t&&(Se(t)&&(t={mounted:t,updated:t}),t.deep&&Qn(s),a.push({dir:t,instance:o,value:s,oldValue:void 0,arg:l,modifiers:c}))}return e}function go(e,n,o,a){const r=e.dirs,t=n&&n.dirs;for(let s=0;s<r.length;s++){const l=r[s];t&&(l.oldValue=t[s].value);let c=l.dir[a];c&&(eo(),Sn(c,o,8,[e.el,l,e,n]),no())}}function la(e,n){if(rn){let o=rn.provides;const a=rn.parent&&rn.parent.provides;a===o&&(o=rn.provides=Object.create(a)),o[e]=n}}function Me(e,n,o=!1){const a=ac();if(a||Vo){let r=Vo?Vo._context.provides:a?a.parent==null||a.ce?a.vnode.appContext&&a.vnode.appContext.provides:a.parent.provides:void 0;if(r&&e in r)return r[e];if(arguments.length>1)return o&&Se(n)?n.call(a&&a.proxy):n}}const Pu=Symbol.for("v-scx"),Ou=()=>Me(Pu);function fo(e,n,o){return xl(e,n,o)}function xl(e,n,o=$e){const{immediate:a,deep:r,flush:t,once:s}=o,l=Xe({},o),c=n&&a||!n&&t!=="post";let d;if(Aa){if(t==="sync"){const v=Ou();d=v.__watcherHandles||(v.__watcherHandles=[])}else if(!c){const v=()=>{};return v.stop=zn,v.resume=zn,v.pause=zn,v}}const u=rn;l.call=(v,B,y)=>Sn(v,u,B,y);let m=!1;t==="post"?l.scheduler=v=>{ln(v,u&&u.suspense)}:t!=="sync"&&(m=!0,l.scheduler=(v,B)=>{B?v():Ut(v)}),l.augmentJob=v=>{n&&(v.flags|=4),m&&(v.flags|=2,u&&(v.id=u.uid,v.i=u))};const f=Eu(e,n,l);return Aa&&(d?d.push(f):c&&f()),f}function ju(e,n,o){const a=this.proxy,r=ze(e)?e.includes(".")?Bl(a,e):()=>a[e]:e.bind(a,a);let t;Se(n)?t=n:(t=n.handler,o=n);const s=Ca(this),l=xl(r,t.bind(a),o);return s(),l}function Bl(e,n){const o=n.split(".");return()=>{let a=e;for(let r=0;r<o.length&&a;r++)a=a[o[r]];return a}}const lo=new WeakMap,Tl=Symbol("_vte"),fr=e=>e.__isTeleport,xo=e=>e&&(e.disabled||e.disabled===""),Du=e=>e&&(e.defer||e.defer===""),di=e=>typeof SVGElement<"u"&&e instanceof SVGElement,mi=e=>typeof MathMLElement=="function"&&e instanceof MathMLElement,gt=(e,n)=>{const o=e&&e.to;return ze(o)?n?n(o):null:o},Vu={name:"Teleport",__isTeleport:!0,process(e,n,o,a,r,t,s,l,c,d){const{mc:u,pc:m,pbc:f,o:{insert:v,querySelector:B,createText:y,createComment:w,parentNode:H}}=d,P=xo(n.props);let{dynamicChildren:Y}=n;const q=(x,E,Z)=>{x.shapeFlag&16&&u(x.children,E,Z,r,t,s,l,c)},oe=(x=n)=>{const E=xo(x.props),Z=x.target=gt(x.props,B),de=bt(Z,x,y,v);Z&&(s!=="svg"&&di(Z)?s="svg":s!=="mathml"&&mi(Z)&&(s="mathml"),r&&r.isCE&&(r.ce._teleportTargets||(r.ce._teleportTargets=new Set)).add(Z),E||(q(x,Z,de),oa(x,!1)))},F=x=>{const E=()=>{if(lo.get(x)===E){if(lo.delete(x),xo(x.props)){const Z=H(x.el)||o;q(x,Z,x.anchor),oa(x,!0)}oe(x)}};lo.set(x,E),ln(E,t)};if(e==null){const x=n.el=y(""),E=n.anchor=y("");if(v(x,o,a),v(E,o,a),Du(n.props)||t&&t.pendingBranch){F(n);return}P&&(q(n,o,E),oa(n,!0)),oe()}else{n.el=e.el;const x=n.anchor=e.anchor,E=lo.get(e);if(E){E.flags|=8,lo.delete(e),F(n);return}n.targetStart=e.targetStart;const Z=n.target=e.target,de=n.targetAnchor=e.targetAnchor,ne=xo(e.props),T=ne?o:Z,L=ne?x:de;if(s==="svg"||di(Z)?s="svg":(s==="mathml"||mi(Z))&&(s="mathml"),Y?(f(e.dynamicChildren,Y,T,r,t,s,l),Jt(e,n,!0)):c||m(e,n,T,L,r,t,s,l,!1),P)ne?n.props&&e.props&&n.props.to!==e.props.to&&(n.props.to=e.props.to):La(n,o,x,d,1);else if((n.props&&n.props.to)!==(e.props&&e.props.to)){const J=gt(n.props,B);J&&(n.target=J,La(n,J,null,d,0))}else ne&&La(n,Z,de,d,1);oa(n,P)}},remove(e,n,o,{um:a,o:{remove:r}},t){const{shapeFlag:s,children:l,anchor:c,targetStart:d,targetAnchor:u,target:m,props:f}=e,v=xo(f),B=t||!v,y=lo.get(e);if(y&&(y.flags|=8,lo.delete(e)),m&&(r(d),r(u)),t&&r(c),!y&&(v||m)&&s&16)for(let w=0;w<l.length;w++){const H=l[w];a(H,n,o,B,!!H.dynamicChildren)}},move:La,hydrate:Lu};function La(e,n,o,{o:{insert:a},m:r},t=2){t===0&&a(e.targetAnchor,n,o);const{el:s,anchor:l,shapeFlag:c,children:d,props:u}=e,m=t===2;if(m&&a(s,n,o),!lo.has(e)&&(!m||xo(u))&&c&16)for(let f=0;f<d.length;f++)r(d[f],n,o,2);m&&a(l,n,o)}function Lu(e,n,o,a,r,t,{o:{nextSibling:s,parentNode:l,querySelector:c,insert:d,createText:u}},m){function f(w,H){let P=H;for(;P;){if(P&&P.nodeType===8){if(P.data==="teleport start anchor")n.targetStart=P;else if(P.data==="teleport anchor"){n.targetAnchor=P,w._lpa=n.targetAnchor&&s(n.targetAnchor);break}}P=s(P)}}function v(w,H){H.anchor=m(s(w),H,l(w),o,a,r,t)}const B=n.target=gt(n.props,c),y=xo(n.props);if(B){const w=B._lpa||B.firstChild;n.shapeFlag&16&&(y?(v(e,n),f(B,w),n.targetAnchor||bt(B,n,u,d,l(e)===B?e:null)):(n.anchor=s(e),f(B,w),n.targetAnchor||bt(B,n,u,d),m(w&&s(w),n,B,o,a,r,t))),oa(n,y)}else y&&n.shapeFlag&16&&(v(e,n),n.targetStart=e,n.targetAnchor=s(e));return n.anchor&&s(n.anchor)}const Rl=Vu;function oa(e,n){const o=e.ctx;if(o&&o.ut){let a,r;for(n?(a=e.el,r=e.anchor):(a=e.targetStart,r=e.targetAnchor);a&&a!==r;)a.nodeType===1&&a.setAttribute("data-v-owner",o.uid),a=a.nextSibling;o.ut()}}function bt(e,n,o,a,r=null){const t=n.targetStart=o(""),s=n.targetAnchor=o("");return t[Tl]=s,e&&(a(t,e,r),a(s,e,r)),s}const Bn=Symbol("_leaveCb"),Qo=Symbol("_enterCb");function qu(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Dn(()=>{e.isMounted=!0}),Kt(()=>{e.isUnmounting=!0}),e}const xn=[Function,Array],Sl={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:xn,onEnter:xn,onAfterEnter:xn,onEnterCancelled:xn,onBeforeLeave:xn,onLeave:xn,onAfterLeave:xn,onLeaveCancelled:xn,onBeforeAppear:xn,onAppear:xn,onAfterAppear:xn,onAppearCancelled:xn},wl=e=>{const n=e.subTree;return n.component?wl(n.component):n},$u={name:"BaseTransition",props:Sl,setup(e,{slots:n}){const o=ac(),a=qu();return()=>{const r=n.default&&kl(n.default(),!0),t=r&&r.length?El(r):o.subTree?be():void 0;if(!t)return;const s=je(e),{mode:l}=s;if(a.isLeaving)return Sr(t);const c=Ya(t);if(!c)return Sr(t);let d=_t(c,s,a,o,m=>d=m);c.type!==an&&ga(c,d);let u=o.subTree&&Ya(o.subTree);if(u&&u.type!==an&&!Bo(u,c)&&wl(o).type!==an){let m=_t(u,s,a,o);if(ga(u,m),l==="out-in"&&c.type!==an)return a.isLeaving=!0,m.afterLeave=()=>{a.isLeaving=!1,o.job.flags&8||o.update(),delete m.afterLeave,u=void 0},Sr(t);l==="in-out"&&c.type!==an?m.delayLeave=(f,v,B)=>{const y=Cl(a,u);y[String(u.key)]=u,f[Bn]=()=>{v(),f[Bn]=void 0,delete d.delayedLeave,u=void 0},d.delayedLeave=()=>{B(),delete d.delayedLeave,u=void 0}}:u=void 0}else u&&(u=void 0);return t}}};function El(e){let n=e[0];if(e.length>1){for(const o of e)if(o.type!==an){n=o;break}}return n}const Mu=$u;function Cl(e,n){const{leavingVNodes:o}=e;let a=o.get(n.type);return a||(a=Object.create(null),o.set(n.type,a)),a}function _t(e,n,o,a,r){const{appear:t,mode:s,persisted:l=!1,onBeforeEnter:c,onEnter:d,onAfterEnter:u,onEnterCancelled:m,onBeforeLeave:f,onLeave:v,onAfterLeave:B,onLeaveCancelled:y,onBeforeAppear:w,onAppear:H,onAfterAppear:P,onAppearCancelled:Y}=n,q=String(e.key),oe=Cl(o,e),F=(Z,de)=>{Z&&Sn(Z,a,9,de)},x=(Z,de)=>{const ne=de[1];F(Z,de),Ne(Z)?Z.every(T=>T.length<=1)&&ne():Z.length<=1&&ne()},E={mode:s,persisted:l,beforeEnter(Z){let de=c;if(!o.isMounted)if(t)de=w||c;else return;Z[Bn]&&Z[Bn](!0);const ne=oe[q];ne&&Bo(e,ne)&&ne.el[Bn]&&ne.el[Bn](),F(de,[Z])},enter(Z){if(oe[q]===e)return;let de=d,ne=u,T=m;if(!o.isMounted)if(t)de=H||d,ne=P||u,T=Y||m;else return;let L=!1;Z[Qo]=pe=>{L||(L=!0,pe?F(T,[Z]):F(ne,[Z]),E.delayedLeave&&E.delayedLeave(),Z[Qo]=void 0)};const J=Z[Qo].bind(null,!1);de?x(de,[Z,J]):J()},leave(Z,de){const ne=String(e.key);if(Z[Qo]&&Z[Qo](!0),o.isUnmounting)return de();F(f,[Z]);let T=!1;Z[Bn]=J=>{T||(T=!0,de(),J?F(y,[Z]):F(B,[Z]),Z[Bn]=void 0,oe[ne]===e&&delete oe[ne])};const L=Z[Bn].bind(null,!1);oe[ne]=e,v?x(v,[Z,L]):L()},clone(Z){const de=_t(Z,n,o,a,r);return r&&r(de),de}};return E}function Sr(e){if(hr(e))return e=ho(e),e.children=null,e}function Ya(e){if(!hr(e))return fr(e.type)&&e.children?El(e.children):e;if(e.component)return e.component.subTree;const{shapeFlag:n,children:o}=e;if(o){if(n&16)return o[0];if(n&32&&Se(o.default))return o.default()}}function ga(e,n){if(e.shapeFlag&6&&e.component){e.transition=n;const o=e.component.subTree;ga(fr(o.type)&&Ya(o)||o,n)}else e.shapeFlag&128?(e.ssContent.transition=n.clone(e.ssContent),e.ssFallback.transition=n.clone(e.ssFallback)):e.transition=n}function kl(e,n=!1,o){let a=[],r=0;for(let t=0;t<e.length;t++){let s=e[t];const l=o==null?s.key:String(o)+String(s.key!=null?s.key:t);s.type===Ee?(s.patchFlag&128&&r++,a=a.concat(kl(s.children,n,l))):(n||s.type!==an)&&a.push(l!=null?ho(s,{key:l}):s)}if(r>1)for(let t=0;t<a.length;t++)a[t].patchFlag=-2;return a}function Il(e,n){return Se(e)?Xe({name:e.name},n,{setup:e}):e}function Pl(e){e.ids=[e.ids[0]+e.ids[2]+++"-",0,0]}function pi(e,n){let o;return!!((o=Object.getOwnPropertyDescriptor(e,n))&&!o.configurable)}const Ja=new WeakMap;function ca(e,n,o,a,r=!1){if(Ne(e)){e.forEach((y,w)=>ca(y,n&&(Ne(n)?n[w]:n),o,a,r));return}if(Do(a)&&!r){a.shapeFlag&512&&a.type.__asyncResolved&&a.component.subTree.component&&ca(e,n,o,a.component.subTree);return}const t=a.shapeFlag&4?_r(a.component):a.el,s=r?null:t,{i:l,r:c}=e,d=n&&n.r,u=l.refs===$e?l.refs={}:l.refs,m=l.setupState,f=je(m),v=m===$e?Gs:y=>pi(u,y)?!1:Ve(f,y),B=(y,w)=>!(w&&pi(u,w));if(d!=null&&d!==c){if(fi(n),ze(d))u[d]=null,v(d)&&(m[d]=null);else if(tn(d)){const y=n;B(d,y.k)&&(d.value=null),y.k&&(u[y.k]=null)}}if(Se(c))Ea(c,l,12,[s,u]);else{const y=ze(c),w=tn(c);if(y||w){const H=()=>{if(e.f){const P=y?v(c)?m[c]:u[c]:B()||!e.k?c.value:u[e.k];if(r)Ne(P)&&jt(P,t);else if(Ne(P))P.includes(t)||P.push(t);else if(y)u[c]=[t],v(c)&&(m[c]=u[c]);else{const Y=[t];B(c,e.k)&&(c.value=Y),e.k&&(u[e.k]=Y)}}else y?(u[c]=s,v(c)&&(m[c]=s)):w&&(B(c,e.k)&&(c.value=s),e.k&&(u[e.k]=s))};if(s){const P=()=>{H(),Ja.delete(e)};P.id=-1,Ja.set(e,P),ln(P,o)}else fi(e),H()}}}function fi(e){const n=Ja.get(e);n&&(n.flags|=8,Ja.delete(e))}ur().requestIdleCallback;ur().cancelIdleCallback;const Do=e=>!!e.type.__asyncLoader,hr=e=>e.type.__isKeepAlive;function Fu(e,n){Ol(e,"a",n)}function zu(e,n){Ol(e,"da",n)}function Ol(e,n,o=rn){const a=e.__wdc||(e.__wdc=()=>{let r=o;for(;r;){if(r.isDeactivated)return;r=r.parent}return e()});if(vr(n,a,o),o){let r=o.parent;for(;r&&r.parent;)hr(r.parent.vnode)&&Hu(a,n,o,r),r=r.parent}}function Hu(e,n,o,a){const r=vr(n,e,a,!0);Gt(()=>{jt(a[n],r)},o)}function vr(e,n,o=rn,a=!1){if(o){const r=o[e]||(o[e]=[]),t=n.__weh||(n.__weh=(...s)=>{eo();const l=Ca(o),c=Sn(n,o,e,s);return l(),no(),c});return a?r.unshift(t):r.push(t),t}}const ro=e=>(n,o=rn)=>{(!Aa||e==="sp")&&vr(e,(...a)=>n(...a),o)},Uu=ro("bm"),Dn=ro("m"),Ku=ro("bu"),Gu=ro("u"),Kt=ro("bum"),Gt=ro("um"),Wu=ro("sp"),Yu=ro("rtg"),Ju=ro("rtc");function Qu(e,n=rn){vr("ec",e,n)}const jl="components",Xu="directives",Dl=Symbol.for("v-ndc");function wr(e){return ze(e)?Vl(jl,e,!1)||e:e||Dl}function Zu(e){return Vl(Xu,e)}function Vl(e,n,o=!0,a=!1){const r=en||rn;if(r){const t=r.type;if(e===jl){const l=Dd(t,!1);if(l&&(l===n||l===pn(n)||l===lr(pn(n))))return t}const s=hi(r[e]||t[e],n)||hi(r.appContext[e],n);return!s&&a?t:s}}function hi(e,n){return e&&(e[n]||e[pn(n)]||e[lr(pn(n))])}function fn(e,n,o,a){let r;const t=o,s=Ne(e);if(s||ze(e)){const l=s&&So(e);let c=!1,d=!1;l&&(c=!Rn(e),d=oo(e),e=mr(e)),r=new Array(e.length);for(let u=0,m=e.length;u<m;u++)r[u]=n(c?d?qo(On(e[u])):On(e[u]):e[u],u,void 0,t)}else if(typeof e=="number"){r=new Array(e);for(let l=0;l<e;l++)r[l]=n(l+1,l,void 0,t)}else if(qe(e))if(e[Symbol.iterator])r=Array.from(e,(l,c)=>n(l,c,void 0,t));else{const l=Object.keys(e);r=new Array(l.length);for(let c=0,d=l.length;c<d;c++){const u=l[c];r[c]=n(e[u],u,c,t)}}else r=[];return r}function gn(e,n,o,a,r,t){if(o==null&&(o={}),en.ce||en.parent&&Do(en.parent)&&en.parent.ce){const d=o,u=Object.keys(d).length>0;return n!=="default"&&(d.name=n),C(),Pe(Ee,null,[U("slot",d,a&&a())],u?-2:64)}let s=e[n];s&&s._c&&(s._d=!1);const l=Xn.length;C();let c;try{const d=s&&Ll(s(o)),u=o.key||t||d&&d.key;c=Pe(Ee,{key:(u&&!Pn(u)?u:`_${n}`)+(!d&&a?"_fb":"")},d||(a?a():[]),d&&e._===1?64:-2)}catch(d){for(let u=Xn.length;u>l;u--)Qt();throw d}finally{s&&s._c&&(s._d=!0)}return c.scopeId&&(c.slotScopeIds=[c.scopeId+"-s"]),c}function Ll(e){return e.some(n=>_a(n)?!(n.type===an||n.type===Ee&&!Ll(n.children)):!0)?e:null}function ed(e,n){const o={};for(const a in e)o[Fa(a)]=e[a];return o}const yt=e=>e?rc(e)?_r(e):yt(e.parent):null,ua=Xe(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>yt(e.parent),$root:e=>yt(e.root),$host:e=>e.ce,$emit:e=>e.emit,$options:e=>$l(e),$forceUpdate:e=>e.f||(e.f=()=>{Ut(e.update)}),$nextTick:e=>e.n||(e.n=yn.bind(e.proxy)),$watch:e=>ju.bind(e)}),Er=(e,n)=>e!==$e&&!e.__isScriptSetup&&Ve(e,n),nd={get({_:e},n){if(n==="__v_skip")return!0;const{ctx:o,setupState:a,data:r,props:t,accessCache:s,type:l,appContext:c}=e;if(n[0]!=="$"){const f=s[n];if(f!==void 0)switch(f){case 1:return a[n];case 2:return r[n];case 4:return o[n];case 3:return t[n]}else{if(Er(a,n))return s[n]=1,a[n];if(r!==$e&&Ve(r,n))return s[n]=2,r[n];if(Ve(t,n))return s[n]=3,t[n];if(o!==$e&&Ve(o,n))return s[n]=4,o[n];At&&(s[n]=0)}}const d=ua[n];let u,m;if(d)return n==="$attrs"&&on(e.attrs,"get",""),d(e);if((u=l.__cssModules)&&(u=u[n]))return u;if(o!==$e&&Ve(o,n))return s[n]=4,o[n];if(m=c.config.globalProperties,Ve(m,n))return m[n]},set({_:e},n,o){const{data:a,setupState:r,ctx:t}=e;return Er(r,n)?(r[n]=o,!0):a!==$e&&Ve(a,n)?(a[n]=o,!0):Ve(e.props,n)||n[0]==="$"&&n.slice(1)in e?!1:(t[n]=o,!0)},has({_:{data:e,setupState:n,accessCache:o,ctx:a,appContext:r,props:t,type:s}},l){let c;return!!(o[l]||e!==$e&&l[0]!=="$"&&Ve(e,l)||Er(n,l)||Ve(t,l)||Ve(a,l)||Ve(ua,l)||Ve(r.config.globalProperties,l)||(c=s.__cssModules)&&c[l])},defineProperty(e,n,o){return o.get!=null?e._.accessCache[n]=0:Ve(o,"value")&&this.set(e,n,o.value,null),Reflect.defineProperty(e,n,o)}};function vi(e){return Ne(e)?e.reduce((n,o)=>(n[o]=null,n),{}):e}let At=!0;function od(e){const n=$l(e),o=e.proxy,a=e.ctx;At=!1,n.beforeCreate&&gi(n.beforeCreate,e,"bc");const{data:r,computed:t,methods:s,watch:l,provide:c,inject:d,created:u,beforeMount:m,mounted:f,beforeUpdate:v,updated:B,activated:y,deactivated:w,beforeDestroy:H,beforeUnmount:P,destroyed:Y,unmounted:q,render:oe,renderTracked:F,renderTriggered:x,errorCaptured:E,serverPrefetch:Z,expose:de,inheritAttrs:ne,components:T,directives:L,filters:J}=n;if(d&&ad(d,a,null),s)for(const Te in s){const he=s[Te];Se(he)&&(a[Te]=he.bind(o))}if(r){const Te=r.call(o,o);qe(Te)&&(e.data=wa(Te))}if(At=!0,t)for(const Te in t){const he=t[Te],Ue=Se(he)?he.bind(o,o):Se(he.get)?he.get.bind(o,o):zn,Ke=!Se(he)&&Se(he.set)?he.set.bind(o):zn,vn=Le({get:Ue,set:Ke});Object.defineProperty(a,Te,{enumerable:!0,configurable:!0,get:()=>vn.value,set:Je=>vn.value=Je})}if(l)for(const Te in l)ql(l[Te],a,o,Te);if(c){const Te=Se(c)?c.call(o):c;Reflect.ownKeys(Te).forEach(he=>{la(he,Te[he])})}u&&gi(u,e,"c");function W(Te,he){Ne(he)?he.forEach(Ue=>Te(Ue.bind(o))):he&&Te(he.bind(o))}if(W(Uu,m),W(Dn,f),W(Ku,v),W(Gu,B),W(Fu,y),W(zu,w),W(Qu,E),W(Ju,F),W(Yu,x),W(Kt,P),W(Gt,q),W(Wu,Z),Ne(de))if(de.length){const Te=e.exposed||(e.exposed={});de.forEach(he=>{Object.defineProperty(Te,he,{get:()=>o[he],set:Ue=>o[he]=Ue,enumerable:!0})})}else e.exposed||(e.exposed={});oe&&e.render===zn&&(e.render=oe),ne!=null&&(e.inheritAttrs=ne),T&&(e.components=T),L&&(e.directives=L),Z&&Pl(e)}function ad(e,n,o=zn){Ne(e)&&(e=Nt(e));for(const a in e){const r=e[a];let t;qe(r)?"default"in r?t=Me(r.from||a,r.default,!0):t=Me(r.from||a):t=Me(r),tn(t)?Object.defineProperty(n,a,{enumerable:!0,configurable:!0,get:()=>t.value,set:s=>t.value=s}):n[a]=t}}function gi(e,n,o){Sn(Ne(e)?e.map(a=>a.bind(n.proxy)):e.bind(n.proxy),n,o)}function ql(e,n,o,a){let r=a.includes(".")?Bl(o,a):()=>o[a];if(ze(e)){const t=n[e];Se(t)&&fo(r,t)}else if(Se(e))fo(r,e.bind(o));else if(qe(e))if(Ne(e))e.forEach(t=>ql(t,n,o,a));else{const t=Se(e.handler)?e.handler.bind(o):n[e.handler];Se(t)&&fo(r,t,e)}}function $l(e){const n=e.type,{mixins:o,extends:a}=n,{mixins:r,optionsCache:t,config:{optionMergeStrategies:s}}=e.appContext,l=t.get(n);let c;return l?c=l:!r.length&&!o&&!a?c=n:(c={},r.length&&r.forEach(d=>Qa(c,d,s,!0)),Qa(c,n,s)),qe(n)&&t.set(n,c),c}function Qa(e,n,o,a=!1){const{mixins:r,extends:t}=n;t&&Qa(e,t,o,!0),r&&r.forEach(s=>Qa(e,s,o,!0));for(const s in n)if(!(a&&s==="expose")){const l=rd[s]||o&&o[s];e[s]=l?l(e[s],n[s]):n[s]}return e}const rd={data:bi,props:_i,emits:_i,methods:aa,computed:aa,beforeCreate:sn,created:sn,beforeMount:sn,mounted:sn,beforeUpdate:sn,updated:sn,beforeDestroy:sn,beforeUnmount:sn,destroyed:sn,unmounted:sn,activated:sn,deactivated:sn,errorCaptured:sn,serverPrefetch:sn,components:aa,directives:aa,watch:id,provide:bi,inject:td};function bi(e,n){return n?e?function(){return Xe(Se(e)?e.call(this,this):e,Se(n)?n.call(this,this):n)}:n:e}function td(e,n){return aa(Nt(e),Nt(n))}function Nt(e){if(Ne(e)){const n={};for(let o=0;o<e.length;o++)n[e[o]]=e[o];return n}return e}function sn(e,n){return e?[...new Set([].concat(e,n))]:n}function aa(e,n){return e?Xe(Object.create(null),e,n):n}function _i(e,n){return e?Ne(e)&&Ne(n)?[...new Set([...e,...n])]:Xe(Object.create(null),vi(e),vi(n??{})):n}function id(e,n){if(!e)return n;if(!n)return e;const o=Xe(Object.create(null),e);for(const a in n)o[a]=sn(e[a],n[a]);return o}function Ml(){return{app:null,config:{isNativeTag:Gs,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let sd=0;function ld(e,n){return function(a,r=null){Se(a)||(a=Xe({},a)),r!=null&&!qe(r)&&(r=null);const t=Ml(),s=new WeakSet,l=[];let c=!1;const d=t.app={_uid:sd++,_component:a,_props:r,_container:null,_context:t,_instance:null,version:Ld,get config(){return t.config},set config(u){},use(u,...m){return s.has(u)||(u&&Se(u.install)?(s.add(u),u.install(d,...m)):Se(u)&&(s.add(u),u(d,...m))),d},mixin(u){return t.mixins.includes(u)||t.mixins.push(u),d},component(u,m){return m?(t.components[u]=m,d):t.components[u]},directive(u,m){return m?(t.directives[u]=m,d):t.directives[u]},mount(u,m,f){if(!c){const v=d._ceVNode||U(a,r);return v.appContext=t,f===!0?f="svg":f===!1&&(f=void 0),e(v,u,f),c=!0,d._container=u,u.__vue_app__=d,_r(v.component)}},onUnmount(u){l.push(u)},unmount(){c&&(Sn(l,d._instance,16),e(null,d._container),delete d._container.__vue_app__)},provide(u,m){return t.provides[u]=m,d},runWithContext(u){const m=Vo;Vo=d;try{return u()}finally{Vo=m}}};return d}}let Vo=null;const cd=(e,n)=>n==="modelValue"||n==="model-value"?e.modelModifiers:e[`${n}Modifiers`]||e[`${pn(n)}Modifiers`]||e[`${vo(n)}Modifiers`];function ud(e,n,...o){if(e.isUnmounted)return;const a=e.vnode.props||$e;let r=o;const t=n.startsWith("update:"),s=t&&cd(a,n.slice(7));s&&(s.trim&&(r=o.map(u=>ze(u)?u.trim():u)),s.number&&(r=o.map(cr)));let l,c=a[l=Fa(n)]||a[l=Fa(pn(n))];!c&&t&&(c=a[l=Fa(vo(n))]),c&&Sn(c,e,6,r);const d=a[l+"Once"];if(d){if(!e.emitted)e.emitted={};else if(e.emitted[l])return;e.emitted[l]=!0,Sn(d,e,6,r)}}const dd=new WeakMap;function Fl(e,n,o=!1){const a=o?dd:n.emitsCache,r=a.get(e);if(r!==void 0)return r;const t=e.emits;let s={},l=!1;if(!Se(e)){const c=d=>{const u=Fl(d,n,!0);u&&(l=!0,Xe(s,u))};!o&&n.mixins.length&&n.mixins.forEach(c),e.extends&&c(e.extends),e.mixins&&e.mixins.forEach(c)}return!t&&!l?(qe(e)&&a.set(e,null),null):(Ne(t)?t.forEach(c=>s[c]=null):Xe(s,t),qe(e)&&a.set(e,s),s)}function gr(e,n){return!e||!tr(n)?!1:(n=n.slice(2),n=n==="Once"?n:n.replace(/Once$/,""),Ve(e,n[0].toLowerCase()+n.slice(1))||Ve(e,vo(n))||Ve(e,n))}function yi(e){const{type:n,vnode:o,proxy:a,withProxy:r,propsOptions:[t],slots:s,attrs:l,emit:c,render:d,renderCache:u,props:m,data:f,setupState:v,ctx:B,inheritAttrs:y}=e,w=Wa(e);let H,P;try{if(o.shapeFlag&4){const q=r||a,oe=q;H=$n(d.call(oe,q,u,m,v,f,B)),P=l}else{const q=n;H=$n(q.length>1?q(m,{attrs:l,slots:s,emit:c}):q(m,null)),P=n.props?l:md(l)}}catch(q){Xn.length=0,pr(q,e,1),H=U(an)}let Y=H;if(P&&y!==!1){const q=Object.keys(P),{shapeFlag:oe}=Y;q.length&&oe&7&&(t&&q.some(ir)&&(P=pd(P,t)),Y=ho(Y,P,!1,!0))}if(o.dirs&&(Y=ho(Y,null,!1,!0),Y.dirs=Y.dirs?Y.dirs.concat(o.dirs):o.dirs),o.transition){const q=fr(Y.type)&&Ya(Y)||Y;ga(q,o.transition)}return H=Y,Wa(w),H}const md=e=>{let n;for(const o in e)(o==="class"||o==="style"||tr(o))&&((n||(n={}))[o]=e[o]);return n},pd=(e,n)=>{const o={};for(const a in e)(!ir(a)||!(a.slice(9)in n))&&(o[a]=e[a]);return o};function fd(e,n,o){const{props:a,children:r,component:t}=e,{props:s,children:l,patchFlag:c}=n,d=t.emitsOptions;if(n.dirs||n.transition)return!0;if(o&&c>=0){if(c&1024)return!0;if(c&16)return a?Ai(a,s,d):!!s;if(c&8){const u=n.dynamicProps;for(let m=0;m<u.length;m++){const f=u[m];if(zl(s,a,f)&&!gr(d,f))return!0}}}else return(r||l)&&(!l||!l.$stable)?!0:a===s?!1:a?s?Ai(a,s,d):!0:!!s;return!1}function Ai(e,n,o){const a=Object.keys(n);if(a.length!==Object.keys(e).length)return!0;for(let r=0;r<a.length;r++){const t=a[r];if(zl(n,e,t)&&!gr(o,t))return!0}return!1}function zl(e,n,o){const a=e[o],r=n[o];return o==="style"&&qe(a)&&qe(r)?!Go(a,r):a!==r}function hd({vnode:e,parent:n,suspense:o},a){for(;n;){const r=n.subTree;if(r.suspense&&r.suspense.activeBranch===e&&(r.suspense.vnode.el=r.el=a,e=r),r===e)(e=n.vnode).el=a,n=n.parent;else break}o&&o.activeBranch===e&&(o.vnode.el=a)}const Hl={},Ul=()=>Object.create(Hl),Kl=e=>Object.getPrototypeOf(e)===Hl;function vd(e,n,o,a=!1){const r={},t=Ul();e.propsDefaults=Object.create(null),Gl(e,n,r,t);for(const s in e.propsOptions[0])s in r||(r[s]=void 0);o?e.props=a?r:hl(r):e.type.props?e.props=r:e.props=t,e.attrs=t}function gd(e,n,o,a){const{props:r,attrs:t,vnode:{patchFlag:s}}=e,l=je(r),[c]=e.propsOptions;let d=!1;if((a||s>0)&&!(s&16)){if(s&8){const u=e.vnode.dynamicProps;for(let m=0;m<u.length;m++){let f=u[m];if(gr(e.emitsOptions,f))continue;const v=n[f];if(c)if(Ve(t,f))v!==t[f]&&(t[f]=v,d=!0);else{const B=pn(f);r[B]=xt(c,l,B,v,e,!1)}else v!==t[f]&&(t[f]=v,d=!0)}}}else{Gl(e,n,r,t)&&(d=!0);let u;for(const m in l)(!n||!Ve(n,m)&&((u=vo(m))===m||!Ve(n,u)))&&(c?o&&(o[m]!==void 0||o[u]!==void 0)&&(r[m]=xt(c,l,m,void 0,e,!0)):delete r[m]);if(t!==l)for(const m in t)(!n||!Ve(n,m))&&(delete t[m],d=!0)}d&&Jn(e.attrs,"set","")}function Gl(e,n,o,a){const[r,t]=e.propsOptions;let s=!1,l;if(n)for(let c in n){if(ta(c))continue;const d=n[c];let u;r&&Ve(r,u=pn(c))?!t||!t.includes(u)?o[u]=d:(l||(l={}))[u]=d:gr(e.emitsOptions,c)||(!(c in a)||d!==a[c])&&(a[c]=d,s=!0)}if(t){const c=je(o),d=l||$e;for(let u=0;u<t.length;u++){const m=t[u];o[m]=xt(r,c,m,d[m],e,!Ve(d,m))}}return s}function xt(e,n,o,a,r,t){const s=e[o];if(s!=null){const l=Ve(s,"default");if(l&&a===void 0){const c=s.default;if(s.type!==Function&&!s.skipFactory&&Se(c)){const{propsDefaults:d}=r;if(o in d)a=d[o];else{const u=Ca(r);a=d[o]=c.call(null,n),u()}}else a=c;r.ce&&r.ce._setProp(o,a)}s[0]&&(t&&!l?a=!1:s[1]&&(a===""||a===vo(o))&&(a=!0))}return a}const bd=new WeakMap;function Wl(e,n,o=!1){const a=o?bd:n.propsCache,r=a.get(e);if(r)return r;const t=e.props,s={},l=[];let c=!1;if(!Se(e)){const u=m=>{c=!0;const[f,v]=Wl(m,n,!0);Xe(s,f),v&&l.push(...v)};!o&&n.mixins.length&&n.mixins.forEach(u),e.extends&&u(e.extends),e.mixins&&e.mixins.forEach(u)}if(!t&&!c)return qe(e)&&a.set(e,Po),Po;if(Ne(t))for(let u=0;u<t.length;u++){const m=pn(t[u]);Ni(m)&&(s[m]=$e)}else if(t)for(const u in t){const m=pn(u);if(Ni(m)){const f=t[u],v=s[m]=Ne(f)||Se(f)?{type:f}:Xe({},f),B=v.type;let y=!1,w=!0;if(Ne(B))for(let H=0;H<B.length;++H){const P=B[H],Y=Se(P)&&P.name;if(Y==="Boolean"){y=!0;break}else Y==="String"&&(w=!1)}else y=Se(B)&&B.name==="Boolean";v[0]=y,v[1]=w,(y||Ve(v,"default"))&&l.push(m)}}const d=[s,l];return qe(e)&&a.set(e,d),d}function Ni(e){return e[0]!=="$"&&!ta(e)}const Wt=e=>e==="_"||e==="_ctx"||e==="$stable",Yt=e=>Ne(e)?e.map($n):[$n(e)],_d=(e,n,o)=>{if(n._n)return n;const a=_e((...r)=>Yt(n(...r)),o);return a._c=!1,a},Yl=(e,n,o)=>{const a=e._ctx;for(const r in e){if(Wt(r))continue;const t=e[r];if(Se(t))n[r]=_d(r,t,a);else if(t!=null){const s=Yt(t);n[r]=()=>s}}},Jl=(e,n)=>{const o=Yt(n);e.slots.default=()=>o},Ql=(e,n,o)=>{for(const a in n)(o||!Wt(a))&&(e[a]=n[a])},yd=(e,n,o)=>{const a=e.slots=Ul();if(e.vnode.shapeFlag&32){const r=n._;r?(Ql(a,n,o),o&&Qs(a,"_",r,!0)):Yl(n,a)}else n&&Jl(e,n)},Ad=(e,n,o)=>{const{vnode:a,slots:r}=e;let t=!0,s=$e;if(a.shapeFlag&32){const l=n._;l?o&&l===1?t=!1:Ql(r,n,o):(t=!n.$stable,Yl(n,r)),s=n}else n&&(Jl(e,n),s={default:1});if(t)for(const l in r)!Wt(l)&&s[l]==null&&delete r[l]},ln=Rd;function Nd(e){return xd(e)}function xd(e,n){const o=ur();o.__VUE__=!0;const{insert:a,remove:r,patchProp:t,createElement:s,createText:l,createComment:c,setText:d,setElementText:u,parentNode:m,nextSibling:f,setScopeId:v=zn,insertStaticContent:B}=e,y=(h,g,A,j=null,$=null,k=null,ie=void 0,te=null,ae=!!g.dynamicChildren)=>{if(h===g)return;h&&!Bo(h,g)&&(j=O(h),Je(h,$,k,!0),h=null),g.patchFlag===-2&&(ae=!1,g.dynamicChildren=null);const{type:z,ref:ye,shapeFlag:se}=g;switch(z){case br:w(h,g,A,j);break;case an:H(h,g,A,j);break;case Ha:h==null&&P(g,A,j,ie);break;case Ee:T(h,g,A,j,$,k,ie,te,ae);break;default:se&1?oe(h,g,A,j,$,k,ie,te,ae):se&6?L(h,g,A,j,$,k,ie,te,ae):(se&64||se&128)&&z.process(h,g,A,j,$,k,ie,te,ae,fe)}ye!=null&&$?ca(ye,h&&h.ref,k,g||h,!g):ye==null&&h&&h.ref!=null&&ca(h.ref,null,k,h,!0)},w=(h,g,A,j)=>{if(h==null)a(g.el=l(g.children),A,j);else{const $=g.el=h.el;g.children!==h.children&&d($,g.children)}},H=(h,g,A,j)=>{h==null?a(g.el=c(g.children||""),A,j):g.el=h.el},P=(h,g,A,j)=>{[h.el,h.anchor]=B(h.children,g,A,j,h.el,h.anchor)},Y=({el:h,anchor:g},A,j)=>{let $;for(;h&&h!==g;)$=f(h),a(h,A,j),h=$;a(g,A,j)},q=({el:h,anchor:g})=>{let A;for(;h&&h!==g;)A=f(h),r(h),h=A;r(g)},oe=(h,g,A,j,$,k,ie,te,ae)=>{if(g.type==="svg"?ie="svg":g.type==="math"&&(ie="mathml"),h==null)F(g,A,j,$,k,ie,te,ae);else{const z=h.el&&h.el._isVueCE?h.el:null;try{z&&z._beginPatch(),Z(h,g,$,k,ie,te,ae)}finally{z&&z._endPatch()}}},F=(h,g,A,j,$,k,ie,te)=>{let ae,z;const{props:ye,shapeFlag:se,transition:ve,dirs:xe}=h;if(ae=h.el=s(h.type,k,ye&&ye.is,ye),se&8?u(ae,h.children):se&16&&E(h.children,ae,null,j,$,Cr(h,k),ie,te),xe&&go(h,null,j,"created"),x(ae,h,h.scopeId,ie,j),ye){for(const Oe in ye)Oe!=="value"&&!ta(Oe)&&t(ae,Oe,null,ye[Oe],k,j);"value"in ye&&t(ae,"value",null,ye.value,k),(z=ye.onVnodeBeforeMount)&&Vn(z,j,h)}xe&&go(h,null,j,"beforeMount");const Ce=Bd($,ve);Ce&&ve.beforeEnter(ae),a(ae,g,A),((z=ye&&ye.onVnodeMounted)||Ce||xe)&&ln(()=>{z&&Vn(z,j,h),Ce&&ve.enter(ae),xe&&go(h,null,j,"mounted")},$)},x=(h,g,A,j,$)=>{if(A&&v(h,A),j)for(let k=0;k<j.length;k++)v(h,j[k]);if($){let k=$.subTree;if(g===k||ec(k.type)&&(k.ssContent===g||k.ssFallback===g)){const ie=$.vnode;x(h,ie,ie.scopeId,ie.slotScopeIds,$.parent)}}},E=(h,g,A,j,$,k,ie,te,ae=0)=>{for(let z=ae;z<h.length;z++){const ye=h[z]=te?Yn(h[z]):$n(h[z]);y(null,ye,g,A,j,$,k,ie,te)}},Z=(h,g,A,j,$,k,ie)=>{const te=g.el=h.el;let{patchFlag:ae,dynamicChildren:z,dirs:ye}=g;ae|=h.patchFlag&16;const se=h.props||$e,ve=g.props||$e;let xe;if(A&&bo(A,!1),(xe=ve.onVnodeBeforeUpdate)&&Vn(xe,A,g,h),ye&&go(g,h,A,"beforeUpdate"),A&&bo(A,!0),z&&(!h.dynamicChildren||h.dynamicChildren.length!==z.length)&&(ae=0,ie=!1,z=null),(se.innerHTML&&ve.innerHTML==null||se.textContent&&ve.textContent==null)&&u(te,""),z?de(h.dynamicChildren,z,te,A,j,Cr(g,$),k):ie||he(h,g,te,null,A,j,Cr(g,$),k,!1),ae>0){if(ae&16)ne(te,se,ve,A,$);else if(ae&2&&se.class!==ve.class&&t(te,"class",null,ve.class,$),ae&4&&t(te,"style",se.style,ve.style,$),ae&8){const Ce=g.dynamicProps;for(let Oe=0;Oe<Ce.length;Oe++){const i=Ce[Oe],_=se[i],S=ve[i];(S!==_||i==="value")&&t(te,i,_,S,$,A)}}ae&1&&h.children!==g.children&&u(te,g.children)}else!ie&&z==null&&ne(te,se,ve,A,$);((xe=ve.onVnodeUpdated)||ye)&&ln(()=>{xe&&Vn(xe,A,g,h),ye&&go(g,h,A,"updated")},j)},de=(h,g,A,j,$,k,ie)=>{for(let te=0;te<g.length;te++){const ae=h[te],z=g[te],ye=ae.el&&(ae.type===Ee||!Bo(ae,z)||ae.shapeFlag&198)?m(ae.el):A;y(ae,z,ye,null,j,$,k,ie,!0)}},ne=(h,g,A,j,$)=>{if(g!==A){if(g!==$e)for(const k in g)!ta(k)&&!(k in A)&&t(h,k,g[k],null,$,j);for(const k in A){if(ta(k))continue;const ie=A[k],te=g[k];ie!==te&&k!=="value"&&t(h,k,te,ie,$,j)}"value"in A&&t(h,"value",g.value,A.value,$)}},T=(h,g,A,j,$,k,ie,te,ae)=>{const z=g.el=h?h.el:l(""),ye=g.anchor=h?h.anchor:l("");let{patchFlag:se,dynamicChildren:ve,slotScopeIds:xe}=g;xe&&(te=te?te.concat(xe):xe),h==null?(a(z,A,j),a(ye,A,j),E(g.children||[],A,ye,$,k,ie,te,ae)):se>0&&se&64&&ve&&h.dynamicChildren&&h.dynamicChildren.length===ve.length?(de(h.dynamicChildren,ve,A,$,k,ie,te),(g.key!=null||$&&g===$.subTree)&&Jt(h,g,!0)):he(h,g,A,ye,$,k,ie,te,ae)},L=(h,g,A,j,$,k,ie,te,ae)=>{g.slotScopeIds=te,h==null?g.shapeFlag&512?$.ctx.activate(g,A,j,ie,ae):J(g,A,j,$,k,ie,ae):pe(h,g,ae)},J=(h,g,A,j,$,k,ie)=>{const te=h.component=kd(h,j,$);if(hr(h)&&(te.ctx.renderer=fe),Id(te,!1,ie),te.asyncDep){if($&&$.registerDep(te,W,ie),!h.el){const ae=te.subTree=U(an);H(null,ae,g,A),h.placeholder=ae.el}}else W(te,h,g,A,$,k,ie)},pe=(h,g,A)=>{const j=g.component=h.component;if(fd(h,g,A))if(j.asyncDep&&!j.asyncResolved){Te(j,g,A);return}else j.next=g,j.update();else g.el=h.el,j.vnode=g},W=(h,g,A,j,$,k,ie)=>{const te=()=>{if(h.isMounted){let{next:se,bu:ve,u:xe,parent:Ce,vnode:Oe}=h;{const R=Xl(h);if(R){se&&(se.el=Oe.el,Te(h,se,ie)),R.asyncDep.then(()=>{ln(()=>{h.isUnmounted||z()},$)});return}}let i=se,_;bo(h,!1),se?(se.el=Oe.el,Te(h,se,ie)):se=Oe,ve&&za(ve),(_=se.props&&se.props.onVnodeBeforeUpdate)&&Vn(_,Ce,se,Oe),bo(h,!0);const S=yi(h),I=h.subTree;h.subTree=S,y(I,S,m(I.el),O(I),h,$,k),se.el=S.el,i===null&&hd(h,S.el),xe&&ln(xe,$),(_=se.props&&se.props.onVnodeUpdated)&&ln(()=>Vn(_,Ce,se,Oe),$)}else{let se;const{el:ve,props:xe}=g,{bm:Ce,m:Oe,parent:i,root:_,type:S}=h,I=Do(g);bo(h,!1),Ce&&za(Ce),!I&&(se=xe&&xe.onVnodeBeforeMount)&&Vn(se,i,g),bo(h,!0);{_.ce&&_.ce._hasShadowRoot()&&_.ce._injectChildStyle(S,h.parent?h.parent.type:void 0);const R=h.subTree=yi(h);y(null,R,A,j,h,$,k),g.el=R.el}if(Oe&&ln(Oe,$),!I&&(se=xe&&xe.onVnodeMounted)){const R=g;ln(()=>Vn(se,i,R),$)}(g.shapeFlag&256||i&&Do(i.vnode)&&i.vnode.shapeFlag&256)&&h.a&&ln(h.a,$),h.isMounted=!0,g=A=j=null}};h.scope.on();const ae=h.effect=new nl(te);h.scope.off();const z=h.update=ae.run.bind(ae),ye=h.job=ae.runIfDirty.bind(ae);ye.i=h,ye.id=h.uid,ae.scheduler=()=>Ut(ye),bo(h,!0),z()},Te=(h,g,A)=>{g.component=h;const j=h.vnode.props;h.vnode=g,h.next=null,gd(h,g.props,j,A),Ad(h,g.children,A),eo(),ui(h),no()},he=(h,g,A,j,$,k,ie,te,ae=!1)=>{const z=h&&h.children,ye=h?h.shapeFlag:0,se=g.children,{patchFlag:ve,shapeFlag:xe}=g;if(ve>0){if(ve&128){Ke(z,se,A,j,$,k,ie,te,ae);return}else if(ve&256){Ue(z,se,A,j,$,k,ie,te,ae);return}}xe&8?(ye&16&&Ye(z,$,k),se!==z&&u(A,se)):ye&16?xe&16?Ke(z,se,A,j,$,k,ie,te,ae):Ye(z,$,k,!0):(ye&8&&u(A,""),xe&16&&E(se,A,j,$,k,ie,te,ae))},Ue=(h,g,A,j,$,k,ie,te,ae)=>{h=h||Po,g=g||Po;const z=h.length,ye=g.length,se=Math.min(z,ye);let ve;for(ve=0;ve<se;ve++){const xe=g[ve]=ae?Yn(g[ve]):$n(g[ve]);y(h[ve],xe,A,null,$,k,ie,te,ae)}z>ye?Ye(h,$,k,!0,!1,se):E(g,A,j,$,k,ie,te,ae,se)},Ke=(h,g,A,j,$,k,ie,te,ae)=>{let z=0;const ye=g.length;let se=h.length-1,ve=ye-1;for(;z<=se&&z<=ve;){const xe=h[z],Ce=g[z]=ae?Yn(g[z]):$n(g[z]);if(Bo(xe,Ce))y(xe,Ce,A,null,$,k,ie,te,ae);else break;z++}for(;z<=se&&z<=ve;){const xe=h[se],Ce=g[ve]=ae?Yn(g[ve]):$n(g[ve]);if(Bo(xe,Ce))y(xe,Ce,A,null,$,k,ie,te,ae);else break;se--,ve--}if(z>se){if(z<=ve){const xe=ve+1,Ce=xe<ye?g[xe].el:j;for(;z<=ve;)y(null,g[z]=ae?Yn(g[z]):$n(g[z]),A,Ce,$,k,ie,te,ae),z++}}else if(z>ve)for(;z<=se;)Je(h[z],$,k,!0),z++;else{const xe=z,Ce=z,Oe=new Map;for(z=Ce;z<=ve;z++){const N=g[z]=ae?Yn(g[z]):$n(g[z]);N.key!=null&&Oe.set(N.key,z)}let i,_=0;const S=ve-Ce+1;let I=!1,R=0;const Q=new Array(S);for(z=0;z<S;z++)Q[z]=0;for(z=xe;z<=se;z++){const N=h[z];if(_>=S){Je(N,$,k,!0);continue}let M;if(N.key!=null)M=Oe.get(N.key);else for(i=Ce;i<=ve;i++)if(Q[i-Ce]===0&&Bo(N,g[i])){M=i;break}M===void 0?Je(N,$,k,!0):(Q[M-Ce]=z+1,M>=R?R=M:I=!0,y(N,g[M],A,null,$,k,ie,te,ae),_++)}const p=I?Td(Q):Po;for(i=p.length-1,z=S-1;z>=0;z--){const N=Ce+z,M=g[N],D=g[N+1],V=N+1<ye?D.el||Zl(D):j;Q[z]===0?y(null,M,A,V,$,k,ie,te,ae):I&&(i<0||z!==p[i]?vn(M,A,V,2):i--)}}},vn=(h,g,A,j,$=null)=>{const{el:k,type:ie,transition:te,children:ae,shapeFlag:z}=h;if(z&6){vn(h.component.subTree,g,A,j);return}if(z&128){h.suspense.move(g,A,j);return}if(z&64){ie.move(h,g,A,fe);return}if(ie===Ee){a(k,g,A);for(let se=0;se<ae.length;se++)vn(ae[se],g,A,j);a(h.anchor,g,A);return}if(ie===Ha){Y(h,g,A);return}if(j!==2&&z&1&&te)if(j===0)te.persisted&&!k[Bn]?a(k,g,A):(te.beforeEnter(k),a(k,g,A),ln(()=>te.enter(k),$));else{const{leave:se,delayLeave:ve,afterLeave:xe}=te,Ce=()=>{h.ctx.isUnmounted?r(k):a(k,g,A)},Oe=()=>{const i=k._isLeaving||!!k[Bn];k._isLeaving&&k[Bn](!0),te.persisted&&!i?Ce():se(k,()=>{Ce(),xe&&xe()})};ve?ve(k,Ce,Oe):Oe()}else a(k,g,A)},Je=(h,g,A,j=!1,$=!1)=>{const{type:k,props:ie,ref:te,children:ae,dynamicChildren:z,shapeFlag:ye,patchFlag:se,dirs:ve,cacheIndex:xe,memo:Ce}=h;if(se===-2&&($=!1),te!=null&&(eo(),ca(te,null,A,h,!0),no()),xe!=null&&(g.renderCache[xe]=void 0),ye&256){g.ctx.deactivate(h);return}const Oe=ye&1&&ve,i=!Do(h);let _;if(i&&(_=ie&&ie.onVnodeBeforeUnmount)&&Vn(_,g,h),ye&6)We(h.component,A,j);else{if(ye&128){h.suspense.unmount(A,j);return}Oe&&go(h,null,g,"beforeUnmount"),ye&64?h.type.remove(h,g,A,fe,j):z&&!z.hasOnce&&(k!==Ee||se>0&&se&64)?Ye(z,g,A,!1,!0):(k===Ee&&se&384||!$&&ye&16)&&Ye(ae,g,A),j&&bn(h)}const S=Ce!=null&&xe==null;(i&&(_=ie&&ie.onVnodeUnmounted)||Oe||S)&&ln(()=>{_&&Vn(_,g,h),Oe&&go(h,null,g,"unmounted"),S&&(h.el=null)},A)},bn=h=>{const{type:g,el:A,anchor:j,transition:$}=h;if(g===Ee){wn(A,j);return}if(g===Ha){q(h);return}const k=()=>{r(A),$&&!$.persisted&&$.afterLeave&&$.afterLeave()};if(h.shapeFlag&1&&$&&!$.persisted){const{leave:ie,delayLeave:te}=$,ae=()=>ie(A,k);te?te(h.el,k,ae):ae()}else k()},wn=(h,g)=>{let A;for(;h!==g;)A=f(h),r(h),h=A;r(g)},We=(h,g,A)=>{const{bum:j,scope:$,job:k,subTree:ie,um:te,m:ae,a:z}=h;xi(ae),xi(z),j&&za(j),$.stop(),k&&(k.flags|=8,Je(ie,h,g,A)),te&&ln(te,g),ln(()=>{h.isUnmounted=!0},g)},Ye=(h,g,A,j=!1,$=!1,k=0)=>{for(let ie=k;ie<h.length;ie++)Je(h[ie],g,A,j,$)},O=h=>{if(h.shapeFlag&6)return O(h.component.subTree);if(h.shapeFlag&128)return h.suspense.next();const g=f(h.anchor||h.el),A=g&&g[Tl];return A?f(A):g};let ce=!1;const ee=(h,g,A)=>{let j;h==null?g._vnode&&(Je(g._vnode,null,null,!0),j=g._vnode.component):y(g._vnode||null,h,g,null,null,null,A),g._vnode=h,ce||(ce=!0,ui(j),yl(),ce=!1)},fe={p:y,um:Je,m:vn,r:bn,mt:J,mc:E,pc:he,pbc:de,n:O,o:e};return{render:ee,hydrate:void 0,createApp:ld(ee)}}function Cr({type:e,props:n},o){return o==="svg"&&e==="foreignObject"||o==="mathml"&&e==="annotation-xml"&&n&&n.encoding&&n.encoding.includes("html")?void 0:o}function bo({effect:e,job:n},o){o?(e.flags|=32,n.flags|=4):(e.flags&=-33,n.flags&=-5)}function Bd(e,n){return(!e||e&&!e.pendingBranch)&&n&&!n.persisted}function Jt(e,n,o=!1){const a=e.children,r=n.children;if(Ne(a)&&Ne(r))for(let t=0;t<a.length;t++){const s=a[t];let l=r[t];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=r[t]=Yn(r[t]),l.el=s.el),!o&&l.patchFlag!==-2&&Jt(s,l)),l.type===br&&(l.patchFlag===-1&&(l=r[t]=Yn(l)),l.el=s.el),l.type===an&&!l.el&&(l.el=s.el)}}function Td(e){const n=e.slice(),o=[0];let a,r,t,s,l;const c=e.length;for(a=0;a<c;a++){const d=e[a];if(d!==0){if(r=o[o.length-1],e[r]<d){n[a]=r,o.push(a);continue}for(t=0,s=o.length-1;t<s;)l=t+s>>1,e[o[l]]<d?t=l+1:s=l;d<e[o[t]]&&(t>0&&(n[a]=o[t-1]),o[t]=a)}}for(t=o.length,s=o[t-1];t-- >0;)o[t]=s,s=n[s];return o}function Xl(e){const n=e.subTree.component;if(n)return n.asyncDep&&!n.asyncResolved?n:Xl(n)}function xi(e){if(e)for(let n=0;n<e.length;n++)e[n].flags|=8}function Zl(e){if(e.placeholder)return e.placeholder;const n=e.component;return n?Zl(n.subTree):null}const ec=e=>e.__isSuspense;function Rd(e,n){n&&n.pendingBranch?Ne(e)?n.effects.push(...e):n.effects.push(e):Iu(e)}const Ee=Symbol.for("v-fgt"),br=Symbol.for("v-txt"),an=Symbol.for("v-cmt"),Ha=Symbol.for("v-stc"),Xn=[];let _n=null;function C(e=!1){Xn.push(_n=e?null:[])}function Qt(){Xn.pop(),_n=Xn[Xn.length-1]||null}let ba=1;function Xa(e,n=!1){ba+=e,e<0&&_n&&n&&(_n.hasOnce=!0)}function nc(e){return e.dynamicChildren=ba>0?_n||Po:null,Qt(),ba>0&&_n&&_n.push(e),e}function G(e,n,o,a,r,t){return nc(b(e,n,o,a,r,t,!0))}function Pe(e,n,o,a,r){return nc(U(e,n,o,a,r,!0))}function _a(e){return e?e.__v_isVNode===!0:!1}function Bo(e,n){return e.type===n.type&&e.key===n.key}const oc=({key:e})=>e??null,Ua=({ref:e,ref_key:n,ref_for:o})=>(typeof e=="number"&&(e=""+e),e!=null?ze(e)||tn(e)||Se(e)?{i:en,r:e,k:n,f:!!o}:e:null);function b(e,n=null,o=null,a=0,r=null,t=e===Ee?0:1,s=!1,l=!1){const c={__v_isVNode:!0,__v_skip:!0,type:e,props:n,key:n&&oc(n),ref:n&&Ua(n),scopeId:Nl,slotScopeIds:null,children:o,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:t,patchFlag:a,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:en};return l?(Za(c,o),t&128&&e.normalize(c)):o&&(c.shapeFlag|=ze(o)?8:16),ba>0&&!s&&_n&&(c.patchFlag>0||t&6)&&c.patchFlag!==32&&_n.push(c),c}const U=Sd;function Sd(e,n=null,o=null,a=0,r=null,t=!1){if((!e||e===Dl)&&(e=an),_a(e)){const l=ho(e,n,!0);return o&&Za(l,o),ba>0&&!t&&_n&&(l.shapeFlag&6?_n[_n.indexOf(e)]=l:_n.push(l)),l.patchFlag=-2,l}if(Vd(e)&&(e=e.__vccOpts),n){n=Cn(n);let{class:l,style:c}=n;l&&!ze(l)&&(n.class=dn(l)),qe(c)&&(Ht(c)&&!Ne(c)&&(c=Xe({},c)),n.style=dr(c))}const s=ze(e)?1:ec(e)?128:fr(e)?64:qe(e)?4:Se(e)?2:0;return b(e,n,o,a,r,s,t,!0)}function Cn(e){return e?Ht(e)||Kl(e)?Xe({},e):e:null}function ho(e,n,o=!1,a=!1){const{props:r,ref:t,patchFlag:s,children:l,transition:c}=e,d=n?Bt(r||{},n):r,u={__v_isVNode:!0,__v_skip:!0,type:e.type,props:d,key:d&&oc(d),ref:n&&n.ref?o&&t?Ne(t)?t.concat(Ua(n)):[t,Ua(n)]:Ua(n):t,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:l,target:e.target,targetStart:e.targetStart,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:n&&e.type!==Ee?s===-1?16:s|16:s,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:c,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&ho(e.ssContent),ssFallback:e.ssFallback&&ho(e.ssFallback),placeholder:e.placeholder,el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return c&&a&&ga(u,c.clone(u)),u}function we(e=" ",n=0){return U(br,null,e,n)}function wd(e,n){const o=U(Ha,null,e);return o.staticCount=n,o}function be(e="",n=!1){return n?(C(),Pe(an,null,e)):U(an,null,e)}function $n(e){return e==null||typeof e=="boolean"?U(an):Ne(e)?U(Ee,null,e.slice()):_a(e)?Yn(e):U(br,null,String(e))}function Yn(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:ho(e)}function Za(e,n){let o=0;const{shapeFlag:a}=e;if(n==null)n=null;else if(Ne(n))o=16;else if(typeof n=="object")if(a&65){const r=n.default;r&&(r._c&&(r._d=!1),Za(e,r()),r._c&&(r._d=!0));return}else{o=32;const r=n._;!r&&!Kl(n)?n._ctx=en:r===3&&en&&(en.slots._===1?n._=1:(n._=2,e.patchFlag|=1024))}else if(Se(n)){if(a&65){Za(e,{default:n});return}n={default:n,_ctx:en},o=32}else n=String(n),a&64?(o=16,n=[we(n)]):o=8;e.children=n,e.shapeFlag|=o}function Bt(...e){const n={};for(let o=0;o<e.length;o++){const a=e[o];for(const r in a)if(r==="class")n.class!==a.class&&(n.class=dn([n.class,a.class]));else if(r==="style")n.style=dr([n.style,a.style]);else if(tr(r)){const t=n[r],s=a[r];s&&t!==s&&!(Ne(t)&&t.includes(s))?n[r]=t?[].concat(t,s):s:s==null&&t==null&&!ir(r)&&(n[r]=s)}else r!==""&&(n[r]=a[r])}return n}function Vn(e,n,o,a=null){Sn(e,n,7,[o,a])}const Ed=Ml();let Cd=0;function kd(e,n,o){const a=e.type,r=(n?n.appContext:e.appContext)||Ed,t={uid:Cd++,vnode:e,type:a,parent:n,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new au(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:n?n.provides:Object.create(r.provides),ids:n?n.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Wl(a,r),emitsOptions:Fl(a,r),emit:null,emitted:null,propsDefaults:$e,inheritAttrs:a.inheritAttrs,ctx:$e,data:$e,props:$e,attrs:$e,slots:$e,refs:$e,setupState:$e,setupContext:null,suspense:o,suspenseId:o?o.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return t.ctx={_:t},t.root=n?n.root:t,t.emit=ud.bind(null,t),e.ce&&e.ce(t),t}let rn=null;const ac=()=>rn||en;let er,ya;{const e=ur(),n=(o,a)=>{let r;return(r=e[o])||(r=e[o]=[]),r.push(a),t=>{r.length>1?r.forEach(s=>s(t)):r[0](t)}};er=n("__VUE_INSTANCE_SETTERS__",o=>rn=o),ya=n("__VUE_SSR_SETTERS__",o=>Aa=o)}const Ca=e=>{const n=rn;return er(e),e.scope.on(),()=>{e.scope.off(),er(n)}},Bi=()=>{rn&&rn.scope.off(),er(null)};function rc(e){return e.vnode.shapeFlag&4}let Aa=!1;function Id(e,n=!1,o=!1){n&&ya(n);const{props:a,children:r}=e.vnode,t=rc(e);vd(e,a,t,n),yd(e,r,o||n);const s=t?Pd(e,n):void 0;return n&&ya(!1),s}function Pd(e,n){const o=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,nd);const{setup:a}=o;if(a){eo();const r=e.setupContext=a.length>1?jd(e):null,t=Ca(e),s=Ea(a,e,0,[e.props,r]),l=Ws(s);if(no(),t(),(l||e.sp)&&!Do(e)&&Pl(e),l){if(s.then(Bi,Bi),n)return s.then(c=>{ya(!0);try{Ti(e,c,n)}finally{ya(!1)}}).catch(c=>{pr(c,e,0)});e.asyncDep=s}else Ti(e,s)}else tc(e)}function Ti(e,n,o){Se(n)?e.type.__ssrInlineRender?e.ssrRender=n:e.render=n:qe(n)&&(e.setupState=gl(n)),tc(e)}function tc(e,n,o){const a=e.type;e.render||(e.render=a.render||zn);{const r=Ca(e);eo();try{od(e)}finally{no(),r()}}}const Od={get(e,n){return on(e,"get",""),e[n]}};function jd(e){const n=o=>{e.exposed=o||{}};return{attrs:new Proxy(e.attrs,Od),slots:e.slots,emit:e.emit,expose:n}}function _r(e){return e.exposed?e.exposeProxy||(e.exposeProxy=new Proxy(gl(Nu(e.exposed)),{get(n,o){if(o in n)return n[o];if(o in ua)return ua[o](e)},has(n,o){return o in n||o in ua}})):e.proxy}function Dd(e,n=!0){return Se(e)?e.displayName||e.name:e.name||n&&e.__name}function Vd(e){return Se(e)&&"__vccOpts"in e}const Le=(e,n)=>Su(e,n,Aa);function $o(e,n,o){try{Xa(-1);const a=arguments.length;return a===2?qe(n)&&!Ne(n)?_a(n)?U(e,null,[n]):U(e,n):U(e,null,n):(a>3?o=Array.prototype.slice.call(arguments,2):a===3&&_a(o)&&(o=[o]),U(e,n,o))}finally{Xa(1)}}const Ld="3.5.41";let Tt;const Ri=typeof window<"u"&&window.trustedTypes;if(Ri)try{Tt=Ri.createPolicy("vue",{createHTML:e=>e})}catch{}const ic=Tt?e=>Tt.createHTML(e):e=>e,qd="http://www.w3.org/2000/svg",$d="http://www.w3.org/1998/Math/MathML",Wn=typeof document<"u"?document:null,Si=Wn&&Wn.createElement("template"),Md={insert:(e,n,o)=>{n.insertBefore(e,o||null)},remove:e=>{const n=e.parentNode;n&&n.removeChild(e)},createElement:(e,n,o,a)=>{const r=n==="svg"?Wn.createElementNS(qd,e):n==="mathml"?Wn.createElementNS($d,e):o?Wn.createElement(e,{is:o}):Wn.createElement(e);return e==="select"&&a&&a.multiple!=null&&r.setAttribute("multiple",a.multiple),r},createText:e=>Wn.createTextNode(e),createComment:e=>Wn.createComment(e),setText:(e,n)=>{e.nodeValue=n},setElementText:(e,n)=>{e.textContent=n},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>Wn.querySelector(e),setScopeId(e,n){e.setAttribute(n,"")},insertStaticContent(e,n,o,a,r,t){const s=o?o.previousSibling:n.lastChild;if(r&&(r===t||r.nextSibling))for(;n.insertBefore(r.cloneNode(!0),o),!(r===t||!(r=r.nextSibling)););else{Si.innerHTML=ic(a==="svg"?`<svg>${e}</svg>`:a==="mathml"?`<math>${e}</math>`:e);const l=Si.content;if(a==="svg"||a==="mathml"){const c=l.firstChild;for(;c.firstChild;)l.appendChild(c.firstChild);l.removeChild(c)}n.insertBefore(l,o)}return[s?s.nextSibling:n.firstChild,o?o.previousSibling:n.lastChild]}},to="transition",Xo="animation",Na=Symbol("_vtc"),sc={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},Fd=Xe({},Sl,sc),zd=e=>(e.displayName="Transition",e.props=Fd,e),Hd=zd((e,{slots:n})=>$o(Mu,Ud(e),n)),_o=(e,n=[])=>{Ne(e)?e.forEach(o=>o(...n)):e&&e(...n)},wi=e=>e?Ne(e)?e.some(n=>n.length>1):e.length>1:!1;function Ud(e){const n={};for(const T in e)T in sc||(n[T]=e[T]);if(e.css===!1)return n;const{name:o="v",type:a,duration:r,enterFromClass:t=`${o}-enter-from`,enterActiveClass:s=`${o}-enter-active`,enterToClass:l=`${o}-enter-to`,appearFromClass:c=t,appearActiveClass:d=s,appearToClass:u=l,leaveFromClass:m=`${o}-leave-from`,leaveActiveClass:f=`${o}-leave-active`,leaveToClass:v=`${o}-leave-to`}=e,B=Kd(r),y=B&&B[0],w=B&&B[1],{onBeforeEnter:H,onEnter:P,onEnterCancelled:Y,onLeave:q,onLeaveCancelled:oe,onBeforeAppear:F=H,onAppear:x=P,onAppearCancelled:E=Y}=n,Z=(T,L,J,pe)=>{T._enterCancelled=pe,yo(T,L?u:l),yo(T,L?d:s),J&&J()},de=(T,L)=>{T._isLeaving=!1,yo(T,m),yo(T,v),yo(T,f),L&&L()},ne=T=>(L,J)=>{const pe=T?x:P,W=()=>Z(L,T,J);_o(pe,[L,W]),Ei(()=>{yo(L,T?c:t),Kn(L,T?u:l),wi(pe)||Ci(L,a,y,W)})};return Xe(n,{onBeforeEnter(T){_o(H,[T]),Kn(T,t),Kn(T,s)},onBeforeAppear(T){_o(F,[T]),Kn(T,c),Kn(T,d)},onEnter:ne(!1),onAppear:ne(!0),onLeave(T,L){T._isLeaving=!0;const J=()=>de(T,L);Kn(T,m),T._enterCancelled?(Kn(T,f),Pi(T)):(Pi(T),Kn(T,f)),Ei(()=>{T._isLeaving&&(yo(T,m),Kn(T,v),wi(q)||Ci(T,a,w,J))}),_o(q,[T,J])},onEnterCancelled(T){Z(T,!1,void 0,!0),_o(Y,[T])},onAppearCancelled(T){Z(T,!0,void 0,!0),_o(E,[T])},onLeaveCancelled(T){de(T),_o(oe,[T])}})}function Kd(e){if(e==null)return null;if(qe(e))return[kr(e.enter),kr(e.leave)];{const n=kr(e);return[n,n]}}function kr(e){return Yc(e)}function Kn(e,n){n.split(/\s+/).forEach(o=>o&&e.classList.add(o)),(e[Na]||(e[Na]=new Set)).add(n)}function yo(e,n){n.split(/\s+/).forEach(a=>a&&e.classList.remove(a));const o=e[Na];o&&(o.delete(n),o.size||(e[Na]=void 0))}function Ei(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}let Gd=0;function Ci(e,n,o,a){const r=e._endId=++Gd,t=()=>{r===e._endId&&a()};if(o!=null)return setTimeout(t,o);const{type:s,timeout:l,propCount:c}=Wd(e,n);if(!s)return a();const d=s+"end";let u=0;const m=()=>{e.removeEventListener(d,f),t()},f=v=>{v.target===e&&++u>=c&&m()};setTimeout(()=>{u<c&&m()},l+1),e.addEventListener(d,f)}function Wd(e,n){const o=window.getComputedStyle(e),a=B=>(o[B]||"").split(", "),r=a(`${to}Delay`),t=a(`${to}Duration`),s=ki(r,t),l=a(`${Xo}Delay`),c=a(`${Xo}Duration`),d=ki(l,c);let u=null,m=0,f=0;n===to?s>0&&(u=to,m=s,f=t.length):n===Xo?d>0&&(u=Xo,m=d,f=c.length):(m=Math.max(s,d),u=m>0?s>d?to:Xo:null,f=u?u===to?t.length:c.length:0);const v=u===to&&/\b(?:transform|all)(?:,|$)/.test(a(`${to}Property`).toString());return{type:u,timeout:m,propCount:f,hasTransform:v}}function ki(e,n){for(;e.length<n.length;)e=e.concat(e);return Math.max(...n.map((o,a)=>Ii(o)+Ii(e[a])))}function Ii(e){return e==="auto"?0:Number(e.slice(0,-1).replace(",","."))*1e3}function Pi(e){return(e?e.ownerDocument:document).body.offsetHeight}function Yd(e,n,o){const a=e[Na];a&&(n=(n?[n,...a]:[...a]).join(" ")),n==null?e.removeAttribute("class"):o?e.setAttribute("class",n):e.className=n}const nr=Symbol("_vod"),lc=Symbol("_vsh"),Oi={name:"show",beforeMount(e,{value:n},{transition:o}){e[nr]=e.style.display==="none"?"":e.style.display,o&&n?o.beforeEnter(e):Zo(e,n)},mounted(e,{value:n},{transition:o}){o&&n&&o.enter(e)},updated(e,{value:n,oldValue:o},{transition:a}){!n!=!o&&(a?n?(a.beforeEnter(e),Zo(e,!0),a.enter(e)):a.leave(e,()=>{Zo(e,!1)}):Zo(e,n))},beforeUnmount(e,{value:n}){Zo(e,n)}};function Zo(e,n){e.style.display=n?e[nr]:"none",e[lc]=!n}const Jd=Symbol(""),Qd=/(?:^|;)\s*display\s*:/;function Xd(e,n,o){const a=e.style,r=ze(o);let t=!1;if(o&&!r){if(n)if(ze(n))for(const s of n.split(";")){const l=s.slice(0,s.indexOf(":")).trim();o[l]==null&&ra(a,l,"")}else for(const s in n)o[s]==null&&ra(a,s,"");for(const s in o){s==="display"&&(t=!0);const l=o[s];l!=null?em(e,s,!ze(n)&&n?n[s]:void 0,l)||ra(a,s,l):ra(a,s,"")}}else if(r){if(n!==o){const s=a[Jd];s&&(o+=";"+s),a.cssText=o,t=Qd.test(o)}}else n&&e.removeAttribute("style");nr in e&&(e[nr]=t?a.display:"",e[lc]&&(a.display="none"))}const ji=/\s*!important$/;function ra(e,n,o){if(Ne(o))o.forEach(a=>ra(e,n,a));else if(o==null&&(o=""),n.startsWith("--"))e.setProperty(n,o);else{const a=Zd(e,n);ji.test(o)?e.setProperty(vo(a),o.replace(ji,""),"important"):e[a]=o}}const Di=["Webkit","Moz","ms"],Ir={};function Zd(e,n){const o=Ir[n];if(o)return o;let a=pn(n);if(a!=="filter"&&a in e)return Ir[n]=a;a=lr(a);for(let r=0;r<Di.length;r++){const t=Di[r]+a;if(t in e)return Ir[n]=t}return n}function em(e,n,o,a){return e.tagName==="TEXTAREA"&&(n==="width"||n==="height")&&ze(a)&&o===a}const Vi="http://www.w3.org/1999/xlink";function Li(e,n,o,a,r,t=nu(n)){a&&n.startsWith("xlink:")?o==null?e.removeAttributeNS(Vi,n.slice(6,n.length)):e.setAttributeNS(Vi,n,o):o==null||t&&!Xs(o)?e.removeAttribute(n):e.setAttribute(n,t?"":Pn(o)?String(o):o)}function qi(e,n,o,a,r){if(n==="innerHTML"||n==="textContent"){o!=null&&(e[n]=n==="innerHTML"?ic(o):o);return}const t=e.tagName;if(n==="value"&&t!=="PROGRESS"&&!t.includes("-")){const l=t==="OPTION"?e.getAttribute("value")||"":e.value,c=o==null?e.type==="checkbox"?"on":"":String(o);(l!==c||!("_value"in e))&&(e.value=c),o==null&&e.removeAttribute(n),e._value=o;return}let s=!1;if(o===""||o==null){const l=typeof e[n];l==="boolean"?o=Xs(o):o==null&&l==="string"?(o="",s=!0):l==="number"&&(o=0,s=!0)}try{e[n]=o}catch{}s&&e.removeAttribute(r||n)}function mo(e,n,o,a){e.addEventListener(n,o,a)}function nm(e,n,o,a){e.removeEventListener(n,o,a)}const $i=Symbol("_vei");function om(e,n,o,a,r=null){const t=e[$i]||(e[$i]={}),s=t[n];if(a&&s)s.value=a;else{const[l,c]=tm(n);if(a){const d=t[n]=lm(a,r);mo(e,l,d,c)}else s&&(nm(e,l,s,c),t[n]=void 0)}}const am=/(Once|Passive|Capture)$/,rm=/^on:?(?:Once|Passive|Capture)$/;function tm(e){let n,o;for(;(o=e.match(am))&&!rm.test(e);)n||(n={}),e=e.slice(0,e.length-o[1].length),n[o[1].toLowerCase()]=!0;return[e[2]===":"?e.slice(3):vo(e.slice(2)),n]}let Pr=0;const im=Promise.resolve(),sm=()=>Pr||(im.then(()=>Pr=0),Pr=Date.now());function lm(e,n){const o=a=>{if(!a._vts)a._vts=Date.now();else if(a._vts<=o.attached)return;const r=o.value;if(Ne(r)){const t=a.stopImmediatePropagation;a.stopImmediatePropagation=()=>{t.call(a),a._stopped=!0};const s=r.slice(),l=[a];for(let c=0;c<s.length&&!a._stopped;c++){const d=s[c];d&&Sn(d,n,5,l)}}else Sn(r,n,5,[a])};return o.value=e,o.attached=sm(),o}const Mi=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,cm=(e,n,o,a,r,t)=>{const s=r==="svg";n==="class"?Yd(e,a,s):n==="style"?Xd(e,o,a):tr(n)?ir(n)||om(e,n,o,a,t):(n[0]==="."?(n=n.slice(1),!0):n[0]==="^"?(n=n.slice(1),!1):um(e,n,a,s))?(qi(e,n,a),!e.tagName.includes("-")&&(n==="value"||n==="checked"||n==="selected")&&Li(e,n,a,s,t,n!=="value")):e._isVueCE&&(dm(e,n)||e._def.__asyncLoader&&(/[A-Z]/.test(n)||!ze(a)))?qi(e,pn(n),a,t,n):(n==="true-value"?e._trueValue=a:n==="false-value"&&(e._falseValue=a),Li(e,n,a,s))};function um(e,n,o,a){if(a)return!!(n==="innerHTML"||n==="textContent"||n in e&&Mi(n)&&Se(o));if(n==="spellcheck"||n==="draggable"||n==="translate"||n==="autocorrect"||n==="sandbox"&&e.tagName==="IFRAME"||n==="form"||n==="list"&&e.tagName==="INPUT"||n==="type"&&e.tagName==="TEXTAREA")return!1;if(n==="width"||n==="height"){const r=e.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return Mi(n)&&ze(o)?!1:n in e}function dm(e,n){const o=e._def.props;if(!o)return!1;const a=pn(n);return Array.isArray(o)?o.some(r=>pn(r)===a):Object.keys(o).some(r=>pn(r)===a)}const Mo=e=>{const n=e.props["onUpdate:modelValue"]||!1;return Ne(n)?o=>za(n,o):n};function mm(e){e.target.composing=!0}function Fi(e){const n=e.target;n.composing&&(n.composing=!1,n.dispatchEvent(new Event("input")))}const Fn=Symbol("_assign"),qa=Symbol("_initialValue");function Or(e,n,o){return n&&(e=e.trim()),o&&(e=cr(e)),e}const or={created(e,{modifiers:{lazy:n,trim:o,number:a}},r){e.parentNode&&(e.type==="text"?e[qa]=e.defaultValue.replace(/[\r\n]/g,""):e.type==="textarea"&&(e[qa]=e.defaultValue.replace(/\r\n?/g,`
`))),e[Fn]=Mo(r);const t=a||r.props&&r.props.type==="number";mo(e,n?"change":"input",s=>{s.target.composing||e[Fn](Or(e.value,o,t))}),(o||t)&&mo(e,"change",()=>{e.value=Or(e.value,o,t)}),n||(mo(e,"compositionstart",mm),mo(e,"compositionend",Fi),mo(e,"change",Fi))},mounted(e,{value:n,modifiers:{trim:o,number:a}}){const r=n??"",t=e[qa];delete e[qa],t!==void 0&&(e.type==="text"||e.type==="textarea")&&e.value!==t?e[Fn](Or(e.value,o,a)):e.value=r},beforeUpdate(e,{value:n,oldValue:o,modifiers:{lazy:a,trim:r,number:t}},s){if(e[Fn]=Mo(s),e.composing)return;const l=(t||e.type==="number")&&!/^0\d/.test(e.value)?cr(e.value):e.value,c=n??"";if(l===c)return;const d=e.getRootNode();(d instanceof Document||d instanceof ShadowRoot)&&d.activeElement===e&&e.type!=="range"&&(a&&n===o||r&&e.value.trim()===c)||(e.value=c)}},pm={deep:!0,created(e,n,o){e[Fn]=Mo(o),mo(e,"change",()=>{const a=e._modelValue,r=xa(e),t=e.checked,s=e[Fn];if(Ne(a)){const l=Vt(a,r),c=l!==-1;if(t&&!c)s(a.concat(r));else if(!t&&c){const d=[...a];d.splice(l,1),s(d)}}else if(Ko(a)){const l=new Set(a);t?l.add(r):l.delete(r),s(l)}else s(cc(e,t))})},mounted:zi,beforeUpdate(e,n,o){e[Fn]=Mo(o),zi(e,n,o)}};function zi(e,{value:n,oldValue:o},a){e._modelValue=n;let r;if(Ne(n))r=Vt(n,a.props.value)>-1;else if(Ko(n))r=n.has(a.props.value);else{if(n===o)return;r=Go(n,cc(e,!0))}e.checked!==r&&(e.checked=r)}const jr={deep:!0,created(e,{value:n,modifiers:{number:o}},a){e._modelValue=n,mo(e,"change",()=>{const r=Array.prototype.filter.call(e.options,t=>t.selected).map(t=>o?cr(xa(t)):xa(t));e[Fn](e.multiple?Ko(e._modelValue)?new Set(r):r:r[0]),e._assigning=!0,yn(()=>{e._assigning=!1})}),e[Fn]=Mo(a)},mounted(e,{value:n}){Hi(e,n)},beforeUpdate(e,{value:n},o){e._modelValue=n,e[Fn]=Mo(o)},updated(e,{value:n}){e._assigning||Hi(e,n)}};function Hi(e,n){const o=e.multiple,a=Ne(n);if(!(o&&!a&&!Ko(n))){for(let r=0,t=e.options.length;r<t;r++){const s=e.options[r],l=xa(s);if(o)if(a){const c=typeof l;c==="string"||c==="number"?s.selected=n.some(d=>String(d)===String(l)):s.selected=Vt(n,l)>-1}else s.selected=n.has(l);else if(Go(xa(s),n)){e.selectedIndex!==r&&(e.selectedIndex=r);return}}!o&&e.selectedIndex!==-1&&(e.selectedIndex=-1)}}function xa(e){return"_value"in e?e._value:e.value}function cc(e,n){const o=n?"_trueValue":"_falseValue";return o in e?e[o]:n}const fm=["ctrl","shift","alt","meta"],hm={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&e.button!==0,middle:e=>"button"in e&&e.button!==1,right:e=>"button"in e&&e.button!==2,exact:(e,n)=>fm.some(o=>e[`${o}Key`]&&!n.includes(o))},ao=(e,n)=>{if(!e)return e;const o=e._withMods||(e._withMods={}),a=n.join(".");return o[a]||(o[a]=((r,...t)=>{for(let s=0;s<n.length;s++){const l=hm[n[s]];if(l&&l(r,n))return}return e(r,...t)}))},vm={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},uc=(e,n)=>{const o=e._withKeys||(e._withKeys={}),a=n.join(".");return o[a]||(o[a]=(r=>{if(!("key"in r))return;const t=vo(r.key);if(n.some(s=>s===t||vm[s]===t))return e(r)}))},gm=Xe({patchProp:cm},Md);let Ui;function bm(){return Ui||(Ui=Nd(gm))}const _m=((...e)=>{const n=bm().createApp(...e),{mount:o}=n;return n.mount=a=>{const r=Am(a);if(!r)return;const t=n._component;!Se(t)&&!t.render&&!t.template&&(t.template=r.innerHTML),r.nodeType===1&&(r.textContent="");const s=o(r,!1,ym(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),s},n});function ym(e){if(e instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&e instanceof MathMLElement)return"mathml"}function Am(e){return ze(e)?document.querySelector(e):e}const Nm="modulepreload",xm=function(e){return"/Extensao-26.2/"+e},Ki={},Bm=function(n,o,a){let r=Promise.resolve();if(o&&o.length>0){let d=function(u){return Promise.all(u.map(m=>Promise.resolve(m).then(f=>({status:"fulfilled",value:f}),f=>({status:"rejected",reason:f}))))};var s=d;document.getElementsByTagName("link");const l=document.querySelector("meta[property=csp-nonce]"),c=l?.nonce||l?.getAttribute("nonce");r=d(o.map(u=>{if(u=xm(u),u in Ki)return;Ki[u]=!0;const m=u.endsWith(".css"),f=m?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${u}"]${f}`))return;const v=document.createElement("link");if(v.rel=m?"stylesheet":Nm,m||(v.as="script"),v.crossOrigin="",v.href=u,c&&v.setAttribute("nonce",c),document.head.appendChild(v),m)return new Promise((B,y)=>{v.addEventListener("load",B),v.addEventListener("error",()=>y(new Error(`Unable to preload CSS for ${u}`)))})}))}function t(l){const c=new Event("vite:preloadError",{cancelable:!0});if(c.payload=l,window.dispatchEvent(c),!c.defaultPrevented)throw l}return r.then(l=>{for(const c of l||[])c.status==="rejected"&&t(c.reason);return n().catch(t)})};function Tm(e={}){const{immediate:n=!1,onNeedReload:o,onNeedRefresh:a,onOfflineReady:r,onRegistered:t,onRegisteredSW:s,onRegisterError:l}=e;let c,d;const u=async(f=!0)=>{await d};async function m(){if("serviceWorker"in navigator){if(c=await Bm(async()=>{const{Workbox:f}=await import("./workbox-window.prod.es5-BBnX5xw4.js");return{Workbox:f}},[]).then(({Workbox:f})=>new f("/Extensao-26.2/sw.js",{scope:"/Extensao-26.2/",type:"classic"})).catch(f=>{l?.(f)}),!c)return;c.addEventListener("activated",f=>{(f.isUpdate||f.isExternal)&&(o?o():window.location.reload())}),c.addEventListener("installed",f=>{f.isUpdate||r?.()}),c.register({immediate:n}).then(f=>{s?s("/Extensao-26.2/sw.js",f):t?.(f)}).catch(f=>{l?.(f)})}}return d=m(),u}const Rm="acessibilidade-checker",Sm=2,cn=Object.freeze({projects:"projects",environments:"environments",elements:"elements",evaluations:"evaluations",ruleSets:"ruleSets"});function ko(e){return new Promise((n,o)=>{e.onsuccess=()=>n(e.result),e.onerror=()=>o(e.error??new Error("Falha no IndexedDB."))})}function wm(e=globalThis.indexedDB){if(!e)return Promise.reject(new Error("IndexedDB não está disponível neste ambiente."));const n=e.open(Rm,Sm);return n.onupgradeneeded=()=>{const o=n.result;if(o.objectStoreNames.contains(cn.projects)||o.createObjectStore(cn.projects,{keyPath:"id"}),o.objectStoreNames.contains(cn.environments)||o.createObjectStore(cn.environments,{keyPath:"id"}).createIndex("projectId","projectId",{unique:!1}),o.objectStoreNames.contains(cn.elements)||o.createObjectStore(cn.elements,{keyPath:"id"}).createIndex("environmentId","environmentId",{unique:!1}),!o.objectStoreNames.contains(cn.evaluations)){const a=o.createObjectStore(cn.evaluations,{keyPath:"id"});a.createIndex("elementId","elementId",{unique:!1}),a.createIndex("evaluatedAt","evaluatedAt",{unique:!1})}o.objectStoreNames.contains(cn.ruleSets)||o.createObjectStore(cn.ruleSets,{keyPath:"id"})},ko(n)}async function ea(e,n,o,a){const r=e.transaction(n,o),t=r.objectStore(n),s=await a(t);return await new Promise((l,c)=>{r.oncomplete=l,r.onabort=r.onerror=()=>c(r.error??new Error("Transação IndexedDB não concluída."))}),s}class ka{constructor(n,o){this.database=n,this.storeName=o}get(n){return ea(this.database,this.storeName,"readonly",o=>ko(o.get(n)))}getAll(){return ea(this.database,this.storeName,"readonly",n=>ko(n.getAll()))}getAllBy(n,o){return ea(this.database,this.storeName,"readonly",a=>ko(a.index(n).getAll(o)))}put(n){return ea(this.database,this.storeName,"readwrite",async o=>(await ko(o.put(n)),n))}delete(n){return ea(this.database,this.storeName,"readwrite",o=>ko(o.delete(n)))}}class Em extends ka{constructor(n){super(n,cn.elements)}getByEnvironmentId(n){return this.getAllBy("environmentId",n)}}class Cm extends ka{constructor(n){super(n,cn.environments)}getByProjectId(n){return this.getAllBy("projectId",n)}}class km extends ka{constructor(n){super(n,cn.evaluations)}getByElementId(n){return this.getAllBy("elementId",n)}}class Im extends ka{constructor(n){super(n,cn.projects)}}class Pm extends ka{constructor(n){super(n,cn.ruleSets)}}const Om=new Set([">=","<=",">","<","==","!="]);function da(e,n,o){switch(n){case">=":return e>=o;case"<=":return e<=o;case">":return e>o;case"<":return e<o;case"==":return e===o;case"!=":return e!==o;default:throw new Error(`Operador não suportado: ${n}`)}}function jm(e,n){return n.obrigatorio&&(e==null||e==="")?{valid:!1,reason:"Campo obrigatório não preenchido."}:e==null||e===""?{valid:!0}:n.tipo==="number"&&typeof e!="number"?{valid:!1,reason:"O valor deve ser numérico."}:n.tipo==="boolean"&&typeof e!="boolean"?{valid:!1,reason:"O valor deve ser booleano."}:{valid:!0}}class Dm{evaluate(n,o,a={}){return n.map(r=>this.evaluateRule(r,o,a))}evaluateRule(n,o,a){const r=a[n.parametro],t=o[n.parametro];if(!r)return{id:n.id,status:"erro",mensagem:`Parâmetro não definido: ${n.parametro}`};const s=jm(t,r);if(!s.valid)return{id:n.id,nome:n.nome,status:"invalido",mensagem:s.reason,referencia:n.referencia};if(t==null||t==="")return{id:n.id,nome:n.nome,status:"nao_avaliado",referencia:n.referencia};if(n.tipo==="checklist")return r.tipo==="boolean"?{id:n.id,nome:n.nome,status:t?"conforme":"nao_conforme",valorInformado:t,valorEsperado:!0,operador:"==",parametro:n.parametro,unidade:r.unidade,referencia:n.referencia}:{id:n.id,nome:n.nome,status:"manual",valor:t,referencia:n.referencia};if(n.tipo==="conditional")return this.evaluateConditional(n,o,a);const l=da(t,n.operador,n.valor);return{id:n.id,nome:n.nome,status:l?"conforme":"nao_conforme",valorInformado:t,valorEsperado:n.valor,operador:n.operador,parametro:n.parametro,unidade:r.unidade,referencia:n.referencia}}evaluateConditional(n,o,a){for(const r of n.condicoes??[]){const t=o[n.parametro];if(r.quando&&da(t,r.quando.operador,r.quando.valor)){if(r.resultado)return{id:n.id,nome:n.nome,status:r.resultado,valorInformado:t,referencia:n.referencia,mensagem:r.mensagem};if(r.verificar){const s=o[r.verificar.parametro],l=da(s,r.verificar.operador,r.verificar.valor);return{id:n.id,nome:n.nome,status:l?"conforme":"nao_conforme",valorInformado:s,valorEsperado:r.verificar.valor,operador:r.verificar.operador,parametro:r.verificar.parametro,unidade:a[r.verificar.parametro]?.unidade,parametroCondicional:n.parametro,valorCondicional:t,operadorCondicional:r.quando.operador,limiteCondicional:r.quando.valor,mensagem:r.mensagem,referencia:n.referencia}}}}return{id:n.id,nome:n.nome,status:"nao_avaliado",referencia:n.referencia}}}function Tn(e,n){if(typeof e!="string"||e.trim()==="")throw new TypeError(`${n} deve ser um texto não vazio.`);return e.trim()}function Ia(){return typeof globalThis.crypto?.randomUUID=="function"?globalThis.crypto.randomUUID():`${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`}function Hn(e=new Date,n="data"){const o=e instanceof Date?e:new Date(e);if(Number.isNaN(o.getTime()))throw new TypeError(`${n} deve ser uma data válida.`);return o.toISOString()}function Rt(e){return typeof structuredClone=="function"?structuredClone(e):JSON.parse(JSON.stringify(e))}function Dr({id:e=Ia(),elementId:n,data:o,result:a,evaluatedAt:r=new Date}={}){if(o===void 0||a===void 0)throw new TypeError("data e result são obrigatórios.");return{id:Tn(e,"id"),elementId:Tn(n,"elementId"),data:Rt(o),result:Rt(a),evaluatedAt:Hn(r,"evaluatedAt")}}const Vm=["nao_conforme","erro","invalido"],Lm=["atencao","manual","nao_avaliado"];function St(e){const n=e[0]?.result;return n?.length?n.some(o=>Vm.includes(o.status))?"nao_conforme":n.some(o=>Lm.includes(o.status))?"nao_avaliado":"conforme":"nao_avaliado"}class qm{constructor({elementRepository:n,environmentRepository:o,evaluationRepository:a,ruleEngine:r=new Dm}){this.elementRepository=n,this.environmentRepository=o,this.evaluationRepository=a,this.ruleEngine=r}async evaluateElement({elementId:n,checklist:o,data:a,evaluatedAt:r}){if(!await this.elementRepository.get(n))throw new Error("Elemento não encontrado.");const s=this.ruleEngine.evaluate(o.regras??[],a,o.parametros??{}),l=Dr({elementId:n,data:a,result:s,evaluatedAt:r});return this.evaluationRepository.put(l)}async saveElementData({elementId:n,data:o,savedAt:a}){if(!await this.elementRepository.get(n))throw new Error("Elemento não encontrado.");const t=Dr({elementId:n,data:o,result:[],evaluatedAt:a});return this.evaluationRepository.put(t)}async saveElementAnswers({elementId:n,checklist:o,data:a,savedAt:r}){return Object.keys(a??{}).length>0?this.evaluateElement({elementId:n,checklist:o,data:a,evaluatedAt:r}):this.saveElementData({elementId:n,data:a,savedAt:r})}evaluateTransientElement({elementId:n,checklist:o,data:a,evaluatedAt:r}){const t=this.ruleEngine.evaluate(o.regras??[],a,o.parametros??{});return Dr({elementId:n,data:a,result:t,evaluatedAt:r})}async listEvaluations(n){return(await this.evaluationRepository.getByElementId(n)).sort((a,r)=>r.evaluatedAt.localeCompare(a.evaluatedAt))}async getEnvironmentSummary(n){const o=await this.elementRepository.getByEnvironmentId(n);return this.#e(o)}async getProjectSummary(n){if(!this.environmentRepository)throw new Error("Repositório de ambientes não configurado.");const o=await this.environmentRepository.getByProjectId(n),a=await Promise.all(o.map(r=>this.elementRepository.getByEnvironmentId(r.id)));return this.#e(a.flat())}async getProjectStatus(n){if(!this.environmentRepository)throw new Error("Repositório de ambientes não configurado.");const o=await this.environmentRepository.getByProjectId(n),a=await Promise.all(o.map(async t=>{const s=await this.elementRepository.getByEnvironmentId(t.id),l=await Promise.all(s.map(async c=>({element:c,status:St(await this.listEvaluations(c.id))})));return{environment:t,elements:l,summary:this.#n(l.map(c=>c.status))}})),r=a.flatMap(t=>t.elements.map(s=>s.status));return{summary:this.#n(r),environments:a}}async#e(n){const o=await Promise.all(n.map(async a=>St(await this.listEvaluations(a.id))));return this.#n(o)}#n(n){const o={totalElements:n.length,conforme:0,nao_conforme:0,nao_avaliado:0,pendente:0,score:0,overallStatus:"nao_avaliado"};for(const a of n)o[a]+=1;return o.pendente=o.nao_avaliado,o.score=o.totalElements?Math.round(o.conforme/o.totalElements*100):0,o.nao_conforme>0?o.overallStatus="nao_conforme":o.nao_avaliado===0&&o.totalElements>0&&(o.overallStatus="conforme"),o}}function Gi({id:e=Ia(),environmentId:n,name:o,type:a,rule:r,createdAt:t=new Date,updatedAt:s=t}={}){return{id:Tn(e,"id"),environmentId:Tn(n,"environmentId"),name:Tn(o,"name"),type:Tn(a,"type"),rule:Tn(r,"rule"),createdAt:Hn(t,"createdAt"),updatedAt:Hn(s,"updatedAt")}}function Wi({id:e=Ia(),projectId:n,name:o,createdAt:a=new Date,updatedAt:r=a}={}){return{id:Tn(e,"id"),projectId:Tn(n,"projectId"),name:Tn(o,"name"),createdAt:Hn(a,"createdAt"),updatedAt:Hn(r,"updatedAt")}}function Yi({id:e=Ia(),name:n,description:o="",createdAt:a=new Date,updatedAt:r=a}={}){return{id:Tn(e,"id"),name:Tn(n,"name"),description:typeof o=="string"?o.trim():"",createdAt:Hn(a,"createdAt"),updatedAt:Hn(r,"updatedAt")}}class $m{constructor({projectRepository:n,environmentRepository:o,elementRepository:a,evaluationRepository:r}){this.projectRepository=n,this.environmentRepository=o,this.elementRepository=a,this.evaluationRepository=r}async createProject(n){const o=Yi(n);return this.projectRepository.put(o)}listProjects(){return this.projectRepository.getAll()}getProject(n){return this.projectRepository.get(n)}async updateProject(n,{name:o,description:a}){const r=await this.#e(this.projectRepository.get(n),"Projeto");return this.projectRepository.put(Yi({...r,name:o,description:a,updatedAt:new Date}))}async renameProject(n,o){const a=await this.#e(this.projectRepository.get(n),"Projeto");return this.updateProject(n,{name:o,description:a.description})}async createEnvironment(n,o){await this.#e(this.projectRepository.get(n),"Projeto");const a=Wi({...o,projectId:n});return this.environmentRepository.put(a)}listEnvironments(n){return this.environmentRepository.getByProjectId(n)}getEnvironment(n){return this.environmentRepository.get(n)}async renameEnvironment(n,o){const a=await this.#e(this.environmentRepository.get(n),"Ambiente");return this.environmentRepository.put(Wi({...a,name:o,updatedAt:new Date}))}async createElement(n,o){await this.#e(this.environmentRepository.get(n),"Ambiente");const a=Gi({...o,environmentId:n});return this.elementRepository.put(a)}listElements(n){return this.elementRepository.getByEnvironmentId(n)}getElement(n){return this.elementRepository.get(n)}async updateElement(n,o){const a=await this.#e(this.elementRepository.get(n),"Elemento");return this.elementRepository.put(Gi({...a,...o,id:a.id,environmentId:a.environmentId,createdAt:a.createdAt,updatedAt:Hn(new Date)}))}async deleteElement(n){const o=await this.evaluationRepository.getByElementId(n);await Promise.all(o.map(a=>this.evaluationRepository.delete(a.id))),await this.elementRepository.delete(n)}async deleteEnvironment(n){const o=await this.elementRepository.getByEnvironmentId(n);await Promise.all(o.map(a=>this.deleteElement(a.id))),await this.environmentRepository.delete(n)}async deleteProject(n){const o=await this.environmentRepository.getByProjectId(n);await Promise.all(o.map(a=>this.deleteEnvironment(a.id))),await this.projectRepository.delete(n)}async#e(n,o){const a=await n;if(!a)throw new Error(`${o} não encontrado.`);return a}}class Mm{constructor({evaluationService:n}){this.evaluationService=n,this.current=null}evaluate({name:n,checklist:o,data:a}){const r={id:Ia(),name:n?.trim()||o.nome,type:o.nome,rule:o.id},t=this.evaluationService.evaluateTransientElement({elementId:r.id,checklist:o,data:a});return this.current={element:r,evaluation:t},this.current}getCurrent(){return this.current}clear(){this.current=null}}const Fm=new Set(["checklist","conditional"]);function Lo(e){return e!==null&&typeof e=="object"&&!Array.isArray(e)}function ma(e,n,o){(typeof e!="string"||e.trim()==="")&&o.push(`${n} deve ser um texto não vazio.`)}function dc(e,n,o){Om.has(e)||o.push(`${n} deve ser um operador suportado.`)}function Ji(e,n,o){if(!Lo(e)){o.push(`${n} deve ser um objeto.`);return}dc(e.operador,`${n}.operador`,o),"valor"in e||o.push(`${n}.valor é obrigatório.`)}function zm(e,n,o,a){const r=`regras[${n}]`;if(!Lo(e)){a.push(`${r} deve ser um objeto.`);return}if(ma(e.id,`${r}.id`,a),ma(e.nome,`${r}.nome`,a),ma(e.parametro,`${r}.parametro`,a),typeof e.parametro=="string"&&!(e.parametro in o)&&a.push(`${r}.parametro deve existir em parametros.`),e.tipo!=="checklist"){if(e.tipo==="conditional"){if(!Array.isArray(e.condicoes)||e.condicoes.length===0){a.push(`${r}.condicoes deve conter ao menos uma condição.`);return}e.condicoes.forEach((t,s)=>{const l=`${r}.condicoes[${s}]`;if(!Lo(t)){a.push(`${l} deve ser um objeto.`);return}Ji(t.quando,`${l}.quando`,a);const c=typeof t.resultado=="string"&&t.resultado!=="",d="verificar"in t;c===d&&a.push(`${l} deve informar exatamente resultado ou verificar.`),d&&(Ji(t.verificar,`${l}.verificar`,a),(typeof t.verificar?.parametro!="string"||!(t.verificar.parametro in o))&&a.push(`${l}.verificar.parametro deve existir em parametros.`))});return}e.tipo!==void 0&&!Fm.has(e.tipo)&&a.push(`${r}.tipo não é suportado.`),dc(e.operador,`${r}.operador`,a),"valor"in e||a.push(`${r}.valor é obrigatório.`)}}function Hm(e){const n=[];return Lo(e)?(ma(e.id,"id",n),ma(e.nome,"nome",n),Lo(e.parametros)||n.push("parametros deve ser um objeto."),Array.isArray(e.regras)||n.push("regras deve ser uma lista."),Lo(e.parametros)&&Array.isArray(e.regras)&&e.regras.forEach((o,a)=>zm(o,a,e.parametros,n)),{valid:n.length===0,errors:n}):{valid:!1,errors:["O conjunto de regras deve ser um objeto."]}}function wt(e){const n=Hm(e);if(!n.valid)throw new TypeError(`Conjunto de regras inválido: ${n.errors.join(" ")}`);return e}function Um(e,{createdAt:n=new Date,updatedAt:o=n}={}){return wt(e),{...Rt(e),source:"user",createdAt:Hn(n,"createdAt"),updatedAt:Hn(o,"updatedAt")}}function Km(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var nn={},$a={},io={},Qi;function Pa(){if(Qi)return io;Qi=1;function e(s){return typeof s>"u"||s===null}function n(s){return typeof s=="object"&&s!==null}function o(s){return Array.isArray(s)?s:e(s)?[]:[s]}function a(s,l){if(l){const c=Object.keys(l);for(let d=0,u=c.length;d<u;d+=1){const m=c[d];s[m]=l[m]}}return s}function r(s,l){let c="";for(let d=0;d<l;d+=1)c+=s;return c}function t(s){return s===0&&Number.NEGATIVE_INFINITY===1/s}return io.isNothing=e,io.isObject=n,io.toArray=o,io.repeat=r,io.isNegativeZero=t,io.extend=a,io}var Vr,Xi;function Oa(){if(Xi)return Vr;Xi=1;function e(o,a){let r="";const t=o.reason||"(unknown reason)";return o.mark?(o.mark.name&&(r+='in "'+o.mark.name+'" '),r+="("+(o.mark.line+1)+":"+(o.mark.column+1)+")",!a&&o.mark.snippet&&(r+=`

`+o.mark.snippet),t+" "+r):t}function n(o,a){Error.call(this),this.name="YAMLException",this.reason=o,this.mark=a,this.message=e(this,!1),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack||""}return n.prototype=Object.create(Error.prototype),n.prototype.constructor=n,n.prototype.toString=function(a){return this.name+": "+e(this,a)},Vr=n,Vr}var Lr,Zi;function Gm(){if(Zi)return Lr;Zi=1;const e=Pa();function n(r,t,s,l,c){let d="",u="";const m=Math.floor(c/2)-1;return l-t>m&&(d=" ... ",t=l-m+d.length),s-l>m&&(u=" ...",s=l+m-u.length),{str:d+r.slice(t,s).replace(/\t/g,"→")+u,pos:l-t+d.length}}function o(r,t){return e.repeat(" ",t-r.length)+r}function a(r,t){if(t=Object.create(t||null),!r.buffer)return null;t.maxLength||(t.maxLength=79),typeof t.indent!="number"&&(t.indent=1),typeof t.linesBefore!="number"&&(t.linesBefore=3),typeof t.linesAfter!="number"&&(t.linesAfter=2);const s=/\r?\n|\r|\0/g,l=[0],c=[];let d,u=-1;for(;d=s.exec(r.buffer);)c.push(d.index),l.push(d.index+d[0].length),r.position<=d.index&&u<0&&(u=l.length-2);u<0&&(u=l.length-1);let m="";const f=Math.min(r.line+t.linesAfter,c.length).toString().length,v=t.maxLength-(t.indent+f+3);for(let y=1;y<=t.linesBefore&&!(u-y<0);y++){const w=n(r.buffer,l[u-y],c[u-y],r.position-(l[u]-l[u-y]),v);m=e.repeat(" ",t.indent)+o((r.line-y+1).toString(),f)+" | "+w.str+`
`+m}const B=n(r.buffer,l[u],c[u],r.position,v);m+=e.repeat(" ",t.indent)+o((r.line+1).toString(),f)+" | "+B.str+`
`,m+=e.repeat("-",t.indent+f+3+B.pos)+`^
`;for(let y=1;y<=t.linesAfter&&!(u+y>=c.length);y++){const w=n(r.buffer,l[u+y],c[u+y],r.position-(l[u]-l[u+y]),v);m+=e.repeat(" ",t.indent)+o((r.line+y+1).toString(),f)+" | "+w.str+`
`}return m.replace(/\n$/,"")}return Lr=a,Lr}var qr,es;function hn(){if(es)return qr;es=1;const e=Oa(),n=["kind","multi","resolve","construct","instanceOf","predicate","represent","representName","defaultStyle","styleAliases"],o=["scalar","sequence","mapping"];function a(t){const s={};return t!==null&&Object.keys(t).forEach(function(l){t[l].forEach(function(c){s[String(c)]=l})}),s}function r(t,s){if(s=s||{},Object.keys(s).forEach(function(l){if(n.indexOf(l)===-1)throw new e('Unknown option "'+l+'" is met in definition of "'+t+'" YAML type.')}),this.options=s,this.tag=t,this.kind=s.kind||null,this.resolve=s.resolve||function(){return!0},this.construct=s.construct||function(l){return l},this.instanceOf=s.instanceOf||null,this.predicate=s.predicate||null,this.represent=s.represent||null,this.representName=s.representName||null,this.defaultStyle=s.defaultStyle||null,this.multi=s.multi||!1,this.styleAliases=a(s.styleAliases||null),o.indexOf(this.kind)===-1)throw new e('Unknown kind "'+this.kind+'" is specified for "'+t+'" YAML type.')}return qr=r,qr}var $r,ns;function mc(){if(ns)return $r;ns=1;const e=Oa(),n=hn();function o(t,s){const l=[];return t[s].forEach(function(c){let d=l.length;l.forEach(function(u,m){u.tag===c.tag&&u.kind===c.kind&&u.multi===c.multi&&(d=m)}),l[d]=c}),l}function a(){const t={scalar:{},sequence:{},mapping:{},fallback:{},multi:{scalar:[],sequence:[],mapping:[],fallback:[]}};function s(l){l.multi?(t.multi[l.kind].push(l),t.multi.fallback.push(l)):t[l.kind][l.tag]=t.fallback[l.tag]=l}for(let l=0,c=arguments.length;l<c;l+=1)arguments[l].forEach(s);return t}function r(t){return this.extend(t)}return r.prototype.extend=function(s){let l=[],c=[];if(s instanceof n)c.push(s);else if(Array.isArray(s))c=c.concat(s);else if(s&&(Array.isArray(s.implicit)||Array.isArray(s.explicit)))s.implicit&&(l=l.concat(s.implicit)),s.explicit&&(c=c.concat(s.explicit));else throw new e("Schema.extend argument should be a Type, [ Type ], or a schema definition ({ implicit: [...], explicit: [...] })");l.forEach(function(u){if(!(u instanceof n))throw new e("Specified list of YAML types (or a single Type object) contains a non-Type object.");if(u.loadKind&&u.loadKind!=="scalar")throw new e("There is a non-scalar type in the implicit list of a schema. Implicit resolving of such types is not supported.");if(u.multi)throw new e("There is a multi type in the implicit list of a schema. Multi tags can only be listed as explicit.")}),c.forEach(function(u){if(!(u instanceof n))throw new e("Specified list of YAML types (or a single Type object) contains a non-Type object.")});const d=Object.create(r.prototype);return d.implicit=(this.implicit||[]).concat(l),d.explicit=(this.explicit||[]).concat(c),d.compiledImplicit=o(d,"implicit"),d.compiledExplicit=o(d,"explicit"),d.compiledTypeMap=a(d.compiledImplicit,d.compiledExplicit),d},$r=r,$r}var Mr,os;function pc(){if(os)return Mr;os=1;const e=hn();return Mr=new e("tag:yaml.org,2002:str",{kind:"scalar",construct:function(n){return n!==null?n:""}}),Mr}var Fr,as;function fc(){if(as)return Fr;as=1;const e=hn();return Fr=new e("tag:yaml.org,2002:seq",{kind:"sequence",construct:function(n){return n!==null?n:[]}}),Fr}var zr,rs;function hc(){if(rs)return zr;rs=1;const e=hn();return zr=new e("tag:yaml.org,2002:map",{kind:"mapping",construct:function(n){return n!==null?n:{}}}),zr}var Hr,ts;function vc(){if(ts)return Hr;ts=1;const e=mc();return Hr=new e({explicit:[pc(),fc(),hc()]}),Hr}var Ur,is;function gc(){if(is)return Ur;is=1;const e=hn();function n(r){if(r===null)return!0;const t=r.length;return t===1&&r==="~"||t===4&&(r==="null"||r==="Null"||r==="NULL")}function o(){return null}function a(r){return r===null}return Ur=new e("tag:yaml.org,2002:null",{kind:"scalar",resolve:n,construct:o,predicate:a,represent:{canonical:function(){return"~"},lowercase:function(){return"null"},uppercase:function(){return"NULL"},camelcase:function(){return"Null"},empty:function(){return""}},defaultStyle:"lowercase"}),Ur}var Kr,ss;function bc(){if(ss)return Kr;ss=1;const e=hn();function n(r){if(r===null)return!1;const t=r.length;return t===4&&(r==="true"||r==="True"||r==="TRUE")||t===5&&(r==="false"||r==="False"||r==="FALSE")}function o(r){return r==="true"||r==="True"||r==="TRUE"}function a(r){return Object.prototype.toString.call(r)==="[object Boolean]"}return Kr=new e("tag:yaml.org,2002:bool",{kind:"scalar",resolve:n,construct:o,predicate:a,represent:{lowercase:function(r){return r?"true":"false"},uppercase:function(r){return r?"TRUE":"FALSE"},camelcase:function(r){return r?"True":"False"}},defaultStyle:"lowercase"}),Kr}var Gr,ls;function _c(){if(ls)return Gr;ls=1;const e=Pa(),n=hn();function o(d){return d>=48&&d<=57||d>=65&&d<=70||d>=97&&d<=102}function a(d){return d>=48&&d<=55}function r(d){return d>=48&&d<=57}function t(d){if(d===null)return!1;const u=d.length;let m=0,f=!1;if(!u)return!1;let v=d[m];if((v==="-"||v==="+")&&(v=d[++m]),v==="0"){if(m+1===u)return!0;if(v=d[++m],v==="b"){for(m++;m<u;m++){if(v=d[m],v!=="0"&&v!=="1")return!1;f=!0}return f&&isFinite(s(d))}if(v==="x"){for(m++;m<u;m++){if(!o(d.charCodeAt(m)))return!1;f=!0}return f&&isFinite(s(d))}if(v==="o"){for(m++;m<u;m++){if(!a(d.charCodeAt(m)))return!1;f=!0}return f&&isFinite(s(d))}}for(;m<u;m++){if(!r(d.charCodeAt(m)))return!1;f=!0}return f?isFinite(s(d)):!1}function s(d){let u=d,m=1,f=u[0];if((f==="-"||f==="+")&&(f==="-"&&(m=-1),u=u.slice(1),f=u[0]),u==="0")return 0;if(f==="0"){if(u[1]==="b")return m*parseInt(u.slice(2),2);if(u[1]==="x")return m*parseInt(u.slice(2),16);if(u[1]==="o")return m*parseInt(u.slice(2),8)}return m*parseInt(u,10)}function l(d){return s(d)}function c(d){return Object.prototype.toString.call(d)==="[object Number]"&&d%1===0&&!e.isNegativeZero(d)}return Gr=new n("tag:yaml.org,2002:int",{kind:"scalar",resolve:t,construct:l,predicate:c,represent:{binary:function(d){return d>=0?"0b"+d.toString(2):"-0b"+d.toString(2).slice(1)},octal:function(d){return d>=0?"0o"+d.toString(8):"-0o"+d.toString(8).slice(1)},decimal:function(d){return d.toString(10)},hexadecimal:function(d){return d>=0?"0x"+d.toString(16).toUpperCase():"-0x"+d.toString(16).toUpperCase().slice(1)}},defaultStyle:"decimal",styleAliases:{binary:[2,"bin"],octal:[8,"oct"],decimal:[10,"dec"],hexadecimal:[16,"hex"]}}),Gr}var Wr,cs;function yc(){if(cs)return Wr;cs=1;const e=Pa(),n=hn(),o=new RegExp("^(?:[-+]?(?:[0-9]+)(?:\\.[0-9]*)?(?:[eE][-+]?[0-9]+)?|\\.[0-9]+(?:[eE][-+]?[0-9]+)?|[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$"),a=new RegExp("^(?:[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$");function r(d){return d===null||!o.test(d)?!1:isFinite(parseFloat(d,10))?!0:a.test(d)}function t(d){let u=d.toLowerCase();const m=u[0]==="-"?-1:1;return"+-".indexOf(u[0])>=0&&(u=u.slice(1)),u===".inf"?m===1?Number.POSITIVE_INFINITY:Number.NEGATIVE_INFINITY:u===".nan"?NaN:m*parseFloat(u,10)}const s=/^[-+]?[0-9]+e/;function l(d,u){if(isNaN(d))switch(u){case"lowercase":return".nan";case"uppercase":return".NAN";case"camelcase":return".NaN"}else if(Number.POSITIVE_INFINITY===d)switch(u){case"lowercase":return".inf";case"uppercase":return".INF";case"camelcase":return".Inf"}else if(Number.NEGATIVE_INFINITY===d)switch(u){case"lowercase":return"-.inf";case"uppercase":return"-.INF";case"camelcase":return"-.Inf"}else if(e.isNegativeZero(d))return"-0.0";const m=d.toString(10);return s.test(m)?m.replace("e",".e"):m}function c(d){return Object.prototype.toString.call(d)==="[object Number]"&&(d%1!==0||e.isNegativeZero(d))}return Wr=new n("tag:yaml.org,2002:float",{kind:"scalar",resolve:r,construct:t,predicate:c,represent:l,defaultStyle:"lowercase"}),Wr}var Yr,us;function Ac(){return us||(us=1,Yr=vc().extend({implicit:[gc(),bc(),_c(),yc()]})),Yr}var Jr,ds;function Nc(){return ds||(ds=1,Jr=Ac()),Jr}var Qr,ms;function xc(){if(ms)return Qr;ms=1;const e=hn(),n=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9])-([0-9][0-9])$"),o=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9]?)-([0-9][0-9]?)(?:[Tt]|[ \\t]+)([0-9][0-9]?):([0-9][0-9]):([0-9][0-9])(?:\\.([0-9]*))?(?:[ \\t]*(Z|([-+])([0-9][0-9]?)(?::([0-9][0-9]))?))?$");function a(s){return s===null?!1:n.exec(s)!==null||o.exec(s)!==null}function r(s){let l=0,c=null,d=n.exec(s);if(d===null&&(d=o.exec(s)),d===null)throw new Error("Date resolve error");const u=+d[1],m=+d[2]-1,f=+d[3];if(!d[4])return new Date(Date.UTC(u,m,f));const v=+d[4],B=+d[5],y=+d[6];if(d[7]){for(l=d[7].slice(0,3);l.length<3;)l+="0";l=+l}if(d[9]){const H=+d[10],P=+(d[11]||0);c=(H*60+P)*6e4,d[9]==="-"&&(c=-c)}const w=new Date(Date.UTC(u,m,f,v,B,y,l));return c&&w.setTime(w.getTime()-c),w}function t(s){return s.toISOString()}return Qr=new e("tag:yaml.org,2002:timestamp",{kind:"scalar",resolve:a,construct:r,instanceOf:Date,represent:t}),Qr}var Xr,ps;function Bc(){if(ps)return Xr;ps=1;const e=hn();function n(o){return o==="<<"||o===null}return Xr=new e("tag:yaml.org,2002:merge",{kind:"scalar",resolve:n}),Xr}var Zr,fs;function Tc(){if(fs)return Zr;fs=1;const e=hn(),n=`ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=
\r`;function o(s){if(s===null)return!1;let l=0;const c=s.length,d=n;for(let u=0;u<c;u++){const m=d.indexOf(s.charAt(u));if(!(m>64)){if(m<0)return!1;l+=6}}return l%8===0}function a(s){const l=s.replace(/[\r\n=]/g,""),c=l.length,d=n;let u=0;const m=[];for(let v=0;v<c;v++)v%4===0&&v&&(m.push(u>>16&255),m.push(u>>8&255),m.push(u&255)),u=u<<6|d.indexOf(l.charAt(v));const f=c%4*6;return f===0?(m.push(u>>16&255),m.push(u>>8&255),m.push(u&255)):f===18?(m.push(u>>10&255),m.push(u>>2&255)):f===12&&m.push(u>>4&255),new Uint8Array(m)}function r(s){let l="",c=0;const d=s.length,u=n;for(let f=0;f<d;f++)f%3===0&&f&&(l+=u[c>>18&63],l+=u[c>>12&63],l+=u[c>>6&63],l+=u[c&63]),c=(c<<8)+s[f];const m=d%3;return m===0?(l+=u[c>>18&63],l+=u[c>>12&63],l+=u[c>>6&63],l+=u[c&63]):m===2?(l+=u[c>>10&63],l+=u[c>>4&63],l+=u[c<<2&63],l+=u[64]):m===1&&(l+=u[c>>2&63],l+=u[c<<4&63],l+=u[64],l+=u[64]),l}function t(s){return Object.prototype.toString.call(s)==="[object Uint8Array]"}return Zr=new e("tag:yaml.org,2002:binary",{kind:"scalar",resolve:o,construct:a,predicate:t,represent:r}),Zr}var et,hs;function Rc(){if(hs)return et;hs=1;const e=hn(),n=Object.prototype.hasOwnProperty,o=Object.prototype.toString;function a(t){if(t===null)return!0;const s={},l=t;for(let c=0,d=l.length;c<d;c+=1){const u=l[c];let m=!1;if(o.call(u)!=="[object Object]")return!1;let f;for(f in u)if(n.call(u,f))if(!m)m=!0;else return!1;if(!m||n.call(s,f))return!1;Object.defineProperty(s,f,{value:!0})}return!0}function r(t){return t!==null?t:[]}return et=new e("tag:yaml.org,2002:omap",{kind:"sequence",resolve:a,construct:r}),et}var nt,vs;function Sc(){if(vs)return nt;vs=1;const e=hn(),n=Object.prototype.toString;function o(r){if(r===null)return!0;const t=r,s=new Array(t.length);for(let l=0,c=t.length;l<c;l+=1){const d=t[l];if(n.call(d)!=="[object Object]")return!1;const u=Object.keys(d);if(u.length!==1)return!1;s[l]=[u[0],d[u[0]]]}return!0}function a(r){if(r===null)return[];const t=r,s=new Array(t.length);for(let l=0,c=t.length;l<c;l+=1){const d=t[l],u=Object.keys(d);s[l]=[u[0],d[u[0]]]}return s}return nt=new e("tag:yaml.org,2002:pairs",{kind:"sequence",resolve:o,construct:a}),nt}var ot,gs;function wc(){if(gs)return ot;gs=1;const e=hn(),n=Object.prototype.hasOwnProperty;function o(r){if(r===null)return!0;const t=r;for(const s in t)if(n.call(t,s)&&t[s]!==null)return!1;return!0}function a(r){return r!==null?r:{}}return ot=new e("tag:yaml.org,2002:set",{kind:"mapping",resolve:o,construct:a}),ot}var at,bs;function Xt(){return bs||(bs=1,at=Nc().extend({implicit:[xc(),Bc()],explicit:[Tc(),Rc(),Sc(),wc()]})),at}var _s;function Wm(){if(_s)return $a;_s=1;const e=Pa(),n=Oa(),o=Gm(),a=Xt(),r=Object.prototype.hasOwnProperty,t=1,s=2,l=3,c=4,d=1,u=2,m=3,f=/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F-\x84\x86-\x9F\uFFFE\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/,v=/[\x85\u2028\u2029]/,B=/[,\[\]{}]/,y=/^(?:!|!!|![0-9A-Za-z-]+!)$/,w=/^(?:!|[^,\[\]{}])(?:%[0-9a-f]{2}|[0-9a-z\-#;/?:@&=+$,_.!~*'()\[\]])*$/i;function H(i){return Object.prototype.toString.call(i)}function P(i){return i===10||i===13}function Y(i){return i===9||i===32}function q(i){return i===9||i===32||i===10||i===13}function oe(i){return i===44||i===91||i===93||i===123||i===125}function F(i){if(i>=48&&i<=57)return i-48;const _=i|32;return _>=97&&_<=102?_-97+10:-1}function x(i){return i===120?2:i===117?4:i===85?8:0}function E(i){return i>=48&&i<=57?i-48:-1}function Z(i){switch(i){case 48:return"\0";case 97:return"\x07";case 98:return"\b";case 116:return"	";case 9:return"	";case 110:return`
`;case 118:return"\v";case 102:return"\f";case 114:return"\r";case 101:return"\x1B";case 32:return" ";case 34:return'"';case 47:return"/";case 92:return"\\";case 78:return"";case 95:return" ";case 76:return"\u2028";case 80:return"\u2029";default:return""}}function de(i){return i<=65535?String.fromCharCode(i):String.fromCharCode((i-65536>>10)+55296,(i-65536&1023)+56320)}function ne(i,_,S){_==="__proto__"?Object.defineProperty(i,_,{configurable:!0,enumerable:!0,writable:!0,value:S}):i[_]=S}const T=new Array(256),L=new Array(256);for(let i=0;i<256;i++)T[i]=Z(i)?1:0,L[i]=Z(i);function J(i,_){this.input=i,this.filename=_.filename||null,this.schema=_.schema||a,this.onWarning=_.onWarning||null,this.legacy=_.legacy||!1,this.json=_.json||!1,this.listener=_.listener||null,this.maxDepth=typeof _.maxDepth=="number"?_.maxDepth:100,this.maxTotalMergeKeys=typeof _.maxTotalMergeKeys=="number"?_.maxTotalMergeKeys:1e4,this.implicitTypes=this.schema.compiledImplicit,this.typeMap=this.schema.compiledTypeMap,this.length=i.length,this.position=0,this.line=0,this.lineStart=0,this.lineIndent=0,this.depth=0,this.totalMergeKeys=0,this.firstTabInLine=-1,this.documents=[],this.anchorMapTransactions=[]}function pe(i,_){const S={name:i.filename,buffer:i.input.slice(0,-1),position:i.position,line:i.line,column:i.position-i.lineStart};return S.snippet=o(S),new n(_,S)}function W(i,_){throw pe(i,_)}function Te(i,_){i.onWarning&&i.onWarning.call(null,pe(i,_))}function he(i,_,S){const I=i.anchorMapTransactions;if(I.length!==0){const R=I[I.length-1];r.call(R,_)||(R[_]={existed:r.call(i.anchorMap,_),value:i.anchorMap[_]})}i.anchorMap[_]=S}function Ue(i){i.anchorMapTransactions.push(Object.create(null))}function Ke(i){const _=i.anchorMapTransactions.pop(),S=i.anchorMapTransactions;if(S.length===0)return;const I=S[S.length-1],R=Object.keys(_);for(let Q=0,p=R.length;Q<p;Q+=1){const N=R[Q];r.call(I,N)||(I[N]=_[N])}}function vn(i){const _=i.anchorMapTransactions.pop(),S=Object.keys(_);for(let I=S.length-1;I>=0;I-=1){const R=_[S[I]];R.existed?i.anchorMap[S[I]]=R.value:delete i.anchorMap[S[I]]}}function Je(i){return{position:i.position,line:i.line,lineStart:i.lineStart,lineIndent:i.lineIndent,firstTabInLine:i.firstTabInLine,tag:i.tag,anchor:i.anchor,kind:i.kind,result:i.result}}function bn(i,_){i.position=_.position,i.line=_.line,i.lineStart=_.lineStart,i.lineIndent=_.lineIndent,i.firstTabInLine=_.firstTabInLine,i.tag=_.tag,i.anchor=_.anchor,i.kind=_.kind,i.result=_.result}const wn={YAML:function(_,S,I){_.version!==null&&W(_,"duplication of %YAML directive"),I.length!==1&&W(_,"YAML directive accepts exactly one argument");const R=/^([0-9]+)\.([0-9]+)$/.exec(I[0]);R===null&&W(_,"ill-formed argument of the YAML directive");const Q=parseInt(R[1],10),p=parseInt(R[2],10);Q!==1&&W(_,"unacceptable YAML version of the document"),_.version=I[0],_.checkLineBreaks=p<2,p!==1&&p!==2&&Te(_,"unsupported YAML version of the document")},TAG:function(_,S,I){let R;I.length!==2&&W(_,"TAG directive accepts exactly two arguments");const Q=I[0];R=I[1],y.test(Q)||W(_,"ill-formed tag handle (first argument) of the TAG directive"),r.call(_.tagMap,Q)&&W(_,'there is a previously declared suffix for "'+Q+'" tag handle'),w.test(R)||W(_,"ill-formed tag prefix (second argument) of the TAG directive");try{R=decodeURIComponent(R)}catch{W(_,"tag prefix is malformed: "+R)}_.tagMap[Q]=R}};function We(i,_,S,I){if(_<S){const R=i.input.slice(_,S);if(I)for(let Q=0,p=R.length;Q<p;Q+=1){const N=R.charCodeAt(Q);N===9||N>=32&&N<=1114111||W(i,"expected valid JSON character")}else f.test(R)&&W(i,"the stream contains non-printable characters");i.result+=R}}function Ye(i,_,S,I){e.isObject(S)||W(i,"cannot merge mappings; the provided source object is unacceptable");const R=Object.keys(S);for(let Q=0,p=R.length;Q<p;Q+=1){const N=R[Q];i.maxTotalMergeKeys!==-1&&++i.totalMergeKeys>i.maxTotalMergeKeys&&W(i,"merge keys exceeded maxTotalMergeKeys ("+i.maxTotalMergeKeys+")"),r.call(_,N)||(ne(_,N,S[N]),I[N]=!0)}}function O(i,_,S,I,R,Q,p,N,M){if(Array.isArray(R)){R=Array.prototype.slice.call(R);for(let D=0,V=R.length;D<V;D+=1)Array.isArray(R[D])&&W(i,"nested arrays are not supported inside keys"),typeof R=="object"&&H(R[D])==="[object Object]"&&(R[D]="[object Object]")}if(typeof R=="object"&&H(R)==="[object Object]"&&(R="[object Object]"),R=String(R),_===null&&(_={}),I==="tag:yaml.org,2002:merge")if(Array.isArray(Q))for(let D=0,V=Q.length;D<V;D+=1)Ye(i,_,Q[D],S);else Ye(i,_,Q,S);else!i.json&&!r.call(S,R)&&r.call(_,R)&&(i.line=p||i.line,i.lineStart=N||i.lineStart,i.position=M||i.position,W(i,"duplicated mapping key")),ne(_,R,Q),delete S[R];return _}function ce(i){const _=i.input.charCodeAt(i.position);_===10?i.position++:_===13?(i.position++,i.input.charCodeAt(i.position)===10&&i.position++):W(i,"a line break is expected"),i.line+=1,i.lineStart=i.position,i.firstTabInLine=-1}function ee(i,_,S){let I=0,R=i.input.charCodeAt(i.position);for(;R!==0;){for(;Y(R);)R===9&&i.firstTabInLine===-1&&(i.firstTabInLine=i.position),R=i.input.charCodeAt(++i.position);if(_&&R===35)do R=i.input.charCodeAt(++i.position);while(R!==10&&R!==13&&R!==0);if(P(R))for(ce(i),R=i.input.charCodeAt(i.position),I++,i.lineIndent=0;R===32;)i.lineIndent++,R=i.input.charCodeAt(++i.position);else break}return S!==-1&&I!==0&&i.lineIndent<S&&Te(i,"deficient indentation"),I}function fe(i){let _=i.position,S=i.input.charCodeAt(_);return!!((S===45||S===46)&&S===i.input.charCodeAt(_+1)&&S===i.input.charCodeAt(_+2)&&(_+=3,S=i.input.charCodeAt(_),S===0||q(S)))}function Re(i,_){_===1?i.result+=" ":_>1&&(i.result+=e.repeat(`
`,_-1))}function h(i,_,S){let I,R,Q,p,N,M;const D=i.kind,V=i.result;let X=i.input.charCodeAt(i.position);if(q(X)||oe(X)||X===35||X===38||X===42||X===33||X===124||X===62||X===39||X===34||X===37||X===64||X===96)return!1;if(X===63||X===45){const K=i.input.charCodeAt(i.position+1);if(q(K)||S&&oe(K))return!1}for(i.kind="scalar",i.result="",I=R=i.position,Q=!1;X!==0;){if(X===58){const K=i.input.charCodeAt(i.position+1);if(q(K)||S&&oe(K))break}else if(X===35){const K=i.input.charCodeAt(i.position-1);if(q(K))break}else{if(i.position===i.lineStart&&fe(i)||S&&oe(X))break;if(P(X))if(p=i.line,N=i.lineStart,M=i.lineIndent,ee(i,!1,-1),i.lineIndent>=_){Q=!0,X=i.input.charCodeAt(i.position);continue}else{i.position=R,i.line=p,i.lineStart=N,i.lineIndent=M;break}}Q&&(We(i,I,R,!1),Re(i,i.line-p),I=R=i.position,Q=!1),Y(X)||(R=i.position+1),X=i.input.charCodeAt(++i.position)}return We(i,I,R,!1),i.result?!0:(i.kind=D,i.result=V,!1)}function g(i,_){let S,I,R=i.input.charCodeAt(i.position);if(R!==39)return!1;for(i.kind="scalar",i.result="",i.position++,S=I=i.position;(R=i.input.charCodeAt(i.position))!==0;)if(R===39)if(We(i,S,i.position,!0),R=i.input.charCodeAt(++i.position),R===39)S=i.position,i.position++,I=i.position;else return!0;else P(R)?(We(i,S,I,!0),Re(i,ee(i,!1,_)),S=I=i.position):i.position===i.lineStart&&fe(i)?W(i,"unexpected end of the document within a single quoted scalar"):(i.position++,Y(R)||(I=i.position));W(i,"unexpected end of the stream within a single quoted scalar")}function A(i,_){let S,I,R,Q=i.input.charCodeAt(i.position);if(Q!==34)return!1;for(i.kind="scalar",i.result="",i.position++,S=I=i.position;(Q=i.input.charCodeAt(i.position))!==0;){if(Q===34)return We(i,S,i.position,!0),i.position++,!0;if(Q===92){if(We(i,S,i.position,!0),Q=i.input.charCodeAt(++i.position),P(Q))ee(i,!1,_);else if(Q<256&&T[Q])i.result+=L[Q],i.position++;else if((R=x(Q))>0){let p=R,N=0;for(;p>0;p--)Q=i.input.charCodeAt(++i.position),(R=F(Q))>=0?N=(N<<4)+R:W(i,"expected hexadecimal character");i.result+=de(N),i.position++}else W(i,"unknown escape sequence");S=I=i.position}else P(Q)?(We(i,S,I,!0),Re(i,ee(i,!1,_)),S=I=i.position):i.position===i.lineStart&&fe(i)?W(i,"unexpected end of the document within a double quoted scalar"):(i.position++,Y(Q)||(I=i.position))}W(i,"unexpected end of the stream within a double quoted scalar")}function j(i,_){let S=!0,I,R,Q;const p=i.tag;let N;const M=i.anchor;let D,V,X,K;const me=Object.create(null);let ue,ge,Ae,Ie=i.input.charCodeAt(i.position);if(Ie===91)D=93,K=!1,N=[];else if(Ie===123)D=125,K=!0,N={};else return!1;for(i.anchor!==null&&he(i,i.anchor,N),Ie=i.input.charCodeAt(++i.position);Ie!==0;){if(ee(i,!0,_),Ie=i.input.charCodeAt(i.position),Ie===D)return i.position++,i.tag=p,i.anchor=M,i.kind=K?"mapping":"sequence",i.result=N,!0;if(S?Ie===44&&W(i,"expected the node content, but found ','"):W(i,"missed comma between flow collection entries"),ge=ue=Ae=null,V=X=!1,Ie===63){const He=i.input.charCodeAt(i.position+1);q(He)&&(V=X=!0,i.position++,ee(i,!0,_))}I=i.line,R=i.lineStart,Q=i.position,se(i,_,t,!1,!0),ge=i.tag,ue=i.result,ee(i,!0,_),Ie=i.input.charCodeAt(i.position),(X||i.line===I)&&Ie===58&&(V=!0,Ie=i.input.charCodeAt(++i.position),ee(i,!0,_),se(i,_,t,!1,!0),Ae=i.result),K?O(i,N,me,ge,ue,Ae,I,R,Q):V?N.push(O(i,null,me,ge,ue,Ae,I,R,Q)):N.push(ue),ee(i,!0,_),Ie=i.input.charCodeAt(i.position),Ie===44?(S=!0,Ie=i.input.charCodeAt(++i.position)):S=!1}W(i,"unexpected end of the stream within a flow collection")}function $(i,_){let S,I=d,R=!1,Q=!1,p=_,N=0,M=!1,D,V=i.input.charCodeAt(i.position);if(V===124)S=!1;else if(V===62)S=!0;else return!1;for(i.kind="scalar",i.result="";V!==0;)if(V=i.input.charCodeAt(++i.position),V===43||V===45)d===I?I=V===43?m:u:W(i,"repeat of a chomping mode identifier");else if((D=E(V))>=0)D===0?W(i,"bad explicit indentation width of a block scalar; it cannot be less than one"):Q?W(i,"repeat of an indentation width identifier"):(p=_+D-1,Q=!0);else break;if(Y(V)){do V=i.input.charCodeAt(++i.position);while(Y(V));if(V===35)do V=i.input.charCodeAt(++i.position);while(!P(V)&&V!==0)}for(;V!==0;){for(ce(i),i.lineIndent=0,V=i.input.charCodeAt(i.position);(!Q||i.lineIndent<p)&&V===32;)i.lineIndent++,V=i.input.charCodeAt(++i.position);if(!Q&&i.lineIndent>p&&(p=i.lineIndent),P(V)){N++;continue}if(!Q&&p===0&&W(i,"missing indentation for block scalar"),i.lineIndent<p){I===m?i.result+=e.repeat(`
`,R?1+N:N):I===d&&R&&(i.result+=`
`);break}S?Y(V)?(M=!0,i.result+=e.repeat(`
`,R?1+N:N)):M?(M=!1,i.result+=e.repeat(`
`,N+1)):N===0?R&&(i.result+=" "):i.result+=e.repeat(`
`,N):i.result+=e.repeat(`
`,R?1+N:N),R=!0,Q=!0,N=0;const X=i.position;for(;!P(V)&&V!==0;)V=i.input.charCodeAt(++i.position);We(i,X,i.position,!1)}return!0}function k(i,_){const S=i.tag,I=i.anchor,R=[];let Q=!1;if(i.firstTabInLine!==-1)return!1;i.anchor!==null&&he(i,i.anchor,R);let p=i.input.charCodeAt(i.position);for(;p!==0&&(i.firstTabInLine!==-1&&(i.position=i.firstTabInLine,W(i,"tab characters must not be used in indentation")),p===45);){const N=i.input.charCodeAt(i.position+1);if(!q(N))break;if(Q=!0,i.position++,ee(i,!0,-1)&&i.lineIndent<=_){R.push(null),p=i.input.charCodeAt(i.position);continue}const M=i.line;if(se(i,_,l,!1,!0),R.push(i.result),ee(i,!0,-1),p=i.input.charCodeAt(i.position),(i.line===M||i.lineIndent>_)&&p!==0)W(i,"bad indentation of a sequence entry");else if(i.lineIndent<_)break}return Q?(i.tag=S,i.anchor=I,i.kind="sequence",i.result=R,!0):!1}function ie(i,_,S){let I,R,Q,p;const N=i.tag,M=i.anchor,D={},V=Object.create(null);let X=null,K=null,me=null,ue=!1,ge=!1;if(i.firstTabInLine!==-1)return!1;i.anchor!==null&&he(i,i.anchor,D);let Ae=i.input.charCodeAt(i.position);for(;Ae!==0;){!ue&&i.firstTabInLine!==-1&&(i.position=i.firstTabInLine,W(i,"tab characters must not be used in indentation"));const Ie=i.input.charCodeAt(i.position+1),He=i.line;if((Ae===63||Ae===58)&&q(Ie))Ae===63?(ue&&(O(i,D,V,X,K,null,R,Q,p),X=K=me=null),ge=!0,ue=!0,I=!0):ue?(ue=!1,I=!0):W(i,"incomplete explicit mapping pair; a key node is missed; or followed by a non-tabulated empty line"),i.position+=1,Ae=Ie;else{if(R=i.line,Q=i.lineStart,p=i.position,!se(i,S,s,!1,!0))break;if(i.line===He){for(Ae=i.input.charCodeAt(i.position);Y(Ae);)Ae=i.input.charCodeAt(++i.position);if(Ae===58)Ae=i.input.charCodeAt(++i.position),q(Ae)||W(i,"a whitespace character is expected after the key-value separator within a block mapping"),ue&&(O(i,D,V,X,K,null,R,Q,p),X=K=me=null),ge=!0,ue=!1,I=!1,X=i.tag,K=i.result;else if(ge)W(i,"can not read an implicit mapping pair; a colon is missed");else return i.tag=N,i.anchor=M,!0}else if(ge)W(i,"can not read a block mapping entry; a multiline key may not be an implicit key");else return i.tag=N,i.anchor=M,!0}if((i.line===He||i.lineIndent>_)&&(ue&&(R=i.line,Q=i.lineStart,p=i.position),se(i,_,c,!0,I)&&(ue?K=i.result:me=i.result),ue||(O(i,D,V,X,K,me,R,Q,p),X=K=me=null),ee(i,!0,-1),Ae=i.input.charCodeAt(i.position)),(i.line===He||i.lineIndent>_)&&Ae!==0)W(i,"bad indentation of a mapping entry");else if(i.lineIndent<_)break}return ue&&O(i,D,V,X,K,null,R,Q,p),ge&&(i.tag=N,i.anchor=M,i.kind="mapping",i.result=D),ge}function te(i){let _=!1,S=!1,I,R,Q=i.input.charCodeAt(i.position);if(Q!==33)return!1;i.tag!==null&&W(i,"duplication of a tag property"),Q=i.input.charCodeAt(++i.position),Q===60?(_=!0,Q=i.input.charCodeAt(++i.position)):Q===33?(S=!0,I="!!",Q=i.input.charCodeAt(++i.position)):I="!";let p=i.position;if(_){do Q=i.input.charCodeAt(++i.position);while(Q!==0&&Q!==62);i.position<i.length?(R=i.input.slice(p,i.position),Q=i.input.charCodeAt(++i.position)):W(i,"unexpected end of the stream within a verbatim tag")}else{for(;Q!==0&&!q(Q);)Q===33&&(S?W(i,"tag suffix cannot contain exclamation marks"):(I=i.input.slice(p-1,i.position+1),y.test(I)||W(i,"named tag handle cannot contain such characters"),S=!0,p=i.position+1)),Q=i.input.charCodeAt(++i.position);R=i.input.slice(p,i.position),B.test(R)&&W(i,"tag suffix cannot contain flow indicator characters")}R&&!w.test(R)&&W(i,"tag name cannot contain such characters: "+R);try{R=decodeURIComponent(R)}catch{W(i,"tag name is malformed: "+R)}return _?i.tag=R:r.call(i.tagMap,I)?i.tag=i.tagMap[I]+R:I==="!"?i.tag="!"+R:I==="!!"?i.tag="tag:yaml.org,2002:"+R:W(i,'undeclared tag handle "'+I+'"'),!0}function ae(i){let _=i.input.charCodeAt(i.position);if(_!==38)return!1;i.anchor!==null&&W(i,"duplication of an anchor property"),_=i.input.charCodeAt(++i.position);const S=i.position;for(;_!==0&&!q(_)&&!oe(_);)_=i.input.charCodeAt(++i.position);return i.position===S&&W(i,"name of an anchor node must contain at least one character"),i.anchor=i.input.slice(S,i.position),!0}function z(i){let _=i.input.charCodeAt(i.position);if(_!==42)return!1;_=i.input.charCodeAt(++i.position);const S=i.position;for(;_!==0&&!q(_)&&!oe(_);)_=i.input.charCodeAt(++i.position);i.position===S&&W(i,"name of an alias node must contain at least one character");const I=i.input.slice(S,i.position);return r.call(i.anchorMap,I)||W(i,'unidentified alias "'+I+'"'),i.result=i.anchorMap[I],ee(i,!0,-1),!0}function ye(i,_,S,I){const R=Je(i);return Ue(i),bn(i,_),i.tag=null,i.anchor=null,i.kind=null,i.result=null,ie(i,S,I)&&i.kind==="mapping"?(Ke(i),!0):(vn(i),bn(i,R),!1)}function se(i,_,S,I,R){let Q,p,N=1,M=!1,D=!1,V=null,X,K,me;i.depth>=i.maxDepth&&W(i,"nesting exceeded maxDepth ("+i.maxDepth+")"),i.depth+=1,i.listener!==null&&i.listener("open",i),i.tag=null,i.anchor=null,i.kind=null,i.result=null;const ue=Q=p=c===S||l===S;if(I&&ee(i,!0,-1)&&(M=!0,i.lineIndent>_?N=1:i.lineIndent===_?N=0:i.lineIndent<_&&(N=-1)),N===1)for(;;){const ge=i.input.charCodeAt(i.position),Ae=Je(i);if(M&&(ge===33&&i.tag!==null||ge===38&&i.anchor!==null)||!te(i)&&!ae(i))break;V===null&&(V=Ae),ee(i,!0,-1)?(M=!0,p=ue,i.lineIndent>_?N=1:i.lineIndent===_?N=0:i.lineIndent<_&&(N=-1)):p=!1}if(p&&(p=M||R),N===1||c===S)if(t===S||s===S?K=_:K=_+1,me=i.position-i.lineStart,N===1)if(p&&(k(i,me)||ie(i,me,K))||j(i,K))D=!0;else{const ge=i.input.charCodeAt(i.position);V!==null&&ue&&!p&&ge!==124&&ge!==62&&ye(i,V,V.position-V.lineStart,K)||Q&&$(i,K)||g(i,K)||A(i,K)?D=!0:z(i)?(D=!0,(i.tag!==null||i.anchor!==null)&&W(i,"alias node should not have any properties")):h(i,K,t===S)&&(D=!0,i.tag===null&&(i.tag="?")),i.anchor!==null&&he(i,i.anchor,i.result)}else N===0&&(D=p&&k(i,me));if(i.tag===null)i.anchor!==null&&he(i,i.anchor,i.result);else if(i.tag==="?"){i.result!==null&&i.kind!=="scalar"&&W(i,'unacceptable node kind for !<?> tag; it should be "scalar", not "'+i.kind+'"');for(let ge=0,Ae=i.implicitTypes.length;ge<Ae;ge+=1)if(X=i.implicitTypes[ge],X.resolve(i.result)){i.result=X.construct(i.result),i.tag=X.tag,i.anchor!==null&&he(i,i.anchor,i.result);break}}else if(i.tag!=="!"){if(r.call(i.typeMap[i.kind||"fallback"],i.tag))X=i.typeMap[i.kind||"fallback"][i.tag];else{X=null;const ge=i.typeMap.multi[i.kind||"fallback"];for(let Ae=0,Ie=ge.length;Ae<Ie;Ae+=1)if(i.tag.slice(0,ge[Ae].tag.length)===ge[Ae].tag){X=ge[Ae];break}}X||W(i,"unknown tag !<"+i.tag+">"),i.result!==null&&X.kind!==i.kind&&W(i,"unacceptable node kind for !<"+i.tag+'> tag; it should be "'+X.kind+'", not "'+i.kind+'"'),X.resolve(i.result,i.tag)?(i.result=X.construct(i.result,i.tag),i.anchor!==null&&he(i,i.anchor,i.result)):W(i,"cannot resolve a node with !<"+i.tag+"> explicit tag")}return i.listener!==null&&i.listener("close",i),i.depth-=1,i.tag!==null||i.anchor!==null||D}function ve(i){const _=i.position;let S=!1,I;for(i.version=null,i.checkLineBreaks=i.legacy,i.tagMap=Object.create(null),i.anchorMap=Object.create(null);(I=i.input.charCodeAt(i.position))!==0&&(ee(i,!0,-1),I=i.input.charCodeAt(i.position),!(i.lineIndent>0||I!==37));){S=!0,I=i.input.charCodeAt(++i.position);let R=i.position;for(;I!==0&&!q(I);)I=i.input.charCodeAt(++i.position);const Q=i.input.slice(R,i.position),p=[];for(Q.length<1&&W(i,"directive name must not be less than one character in length");I!==0;){for(;Y(I);)I=i.input.charCodeAt(++i.position);if(I===35){do I=i.input.charCodeAt(++i.position);while(I!==0&&!P(I));break}if(P(I))break;for(R=i.position;I!==0&&!q(I);)I=i.input.charCodeAt(++i.position);p.push(i.input.slice(R,i.position))}I!==0&&ce(i),r.call(wn,Q)?wn[Q](i,Q,p):Te(i,'unknown document directive "'+Q+'"')}if(ee(i,!0,-1),i.lineIndent===0&&i.input.charCodeAt(i.position)===45&&i.input.charCodeAt(i.position+1)===45&&i.input.charCodeAt(i.position+2)===45?(i.position+=3,ee(i,!0,-1)):S&&W(i,"directives end mark is expected"),se(i,i.lineIndent-1,c,!1,!0),ee(i,!0,-1),i.checkLineBreaks&&v.test(i.input.slice(_,i.position))&&Te(i,"non-ASCII line breaks are interpreted as content"),i.documents.push(i.result),i.position===i.lineStart&&fe(i)){i.input.charCodeAt(i.position)===46&&(i.position+=3,ee(i,!0,-1));return}i.position<i.length-1&&W(i,"end of the stream or a document separator is expected")}function xe(i,_){i=String(i),_=_||{},i.length!==0&&(i.charCodeAt(i.length-1)!==10&&i.charCodeAt(i.length-1)!==13&&(i+=`
`),i.charCodeAt(0)===65279&&(i=i.slice(1)));const S=new J(i,_),I=i.indexOf("\0");for(I!==-1&&(S.position=I,W(S,"null byte is not allowed in input")),S.input+="\0";S.input.charCodeAt(S.position)===32;)S.lineIndent+=1,S.position+=1;for(;S.position<S.length-1;)ve(S);return S.documents}function Ce(i,_,S){_!==null&&typeof _=="object"&&typeof S>"u"&&(S=_,_=null);const I=xe(i,S);if(typeof _!="function")return I;for(let R=0,Q=I.length;R<Q;R+=1)_(I[R])}function Oe(i,_){const S=xe(i,_);if(S.length!==0){if(S.length===1)return S[0];throw new n("expected a single document in the stream, but found more")}}return $a.loadAll=Ce,$a.load=Oe,$a}var rt={},ys;function Ym(){if(ys)return rt;ys=1;const e=Pa(),n=Oa(),o=Xt(),a=Object.prototype.toString,r=Object.prototype.hasOwnProperty,t=65279,s=9,l=10,c=13,d=32,u=33,m=34,f=35,v=37,B=38,y=39,w=42,H=44,P=45,Y=58,q=61,oe=62,F=63,x=64,E=91,Z=93,de=96,ne=123,T=124,L=125,J={};J[0]="\\0",J[7]="\\a",J[8]="\\b",J[9]="\\t",J[10]="\\n",J[11]="\\v",J[12]="\\f",J[13]="\\r",J[27]="\\e",J[34]='\\"',J[92]="\\\\",J[133]="\\N",J[160]="\\_",J[8232]="\\L",J[8233]="\\P";const pe=["y","Y","yes","Yes","YES","on","On","ON","n","N","no","No","NO","off","Off","OFF"],W=/^[-+]?[0-9_]+(?::[0-9_]+)+(?:\.[0-9_]*)?$/;function Te(p,N){if(N===null)return{};const M={},D=Object.keys(N);for(let V=0,X=D.length;V<X;V+=1){let K=D[V],me=String(N[K]);K.slice(0,2)==="!!"&&(K="tag:yaml.org,2002:"+K.slice(2));const ue=p.compiledTypeMap.fallback[K];ue&&r.call(ue.styleAliases,me)&&(me=ue.styleAliases[me]),M[K]=me}return M}function he(p){let N,M;const D=p.toString(16).toUpperCase();if(p<=255)N="x",M=2;else if(p<=65535)N="u",M=4;else if(p<=4294967295)N="U",M=8;else throw new n("code point within a string may not be greater than 0xFFFFFFFF");return"\\"+N+e.repeat("0",M-D.length)+D}const Ue=1,Ke=2;function vn(p){this.schema=p.schema||o,this.indent=Math.max(1,p.indent||2),this.noArrayIndent=p.noArrayIndent||!1,this.skipInvalid=p.skipInvalid||!1,this.flowLevel=e.isNothing(p.flowLevel)?-1:p.flowLevel,this.styleMap=Te(this.schema,p.styles||null),this.sortKeys=p.sortKeys||!1,this.lineWidth=p.lineWidth||80,this.noRefs=p.noRefs||!1,this.noCompatMode=p.noCompatMode||!1,this.condenseFlow=p.condenseFlow||!1,this.quotingType=p.quotingType==='"'?Ke:Ue,this.forceQuotes=p.forceQuotes||!1,this.replacer=typeof p.replacer=="function"?p.replacer:null,this.implicitTypes=this.schema.compiledImplicit,this.explicitTypes=this.schema.compiledExplicit,this.tag=null,this.result="",this.duplicates=[],this.usedDuplicates=null}function Je(p,N){const M=e.repeat(" ",N);let D=0,V="";const X=p.length;for(;D<X;){let K;const me=p.indexOf(`
`,D);me===-1?(K=p.slice(D),D=X):(K=p.slice(D,me+1),D=me+1),K.length&&K!==`
`&&(V+=M),V+=K}return V}function bn(p,N){return`
`+e.repeat(" ",p.indent*N)}function wn(p,N){for(let M=0,D=p.implicitTypes.length;M<D;M+=1)if(p.implicitTypes[M].resolve(N))return!0;return!1}function We(p){return p===d||p===s}function Ye(p){return p>=32&&p<=126||p>=161&&p<=55295&&p!==8232&&p!==8233||p>=57344&&p<=65533&&p!==t||p>=65536&&p<=1114111}function O(p){return Ye(p)&&p!==t&&p!==c&&p!==l}function ce(p,N,M){const D=O(p),V=D&&!We(p);return(M?D:D&&p!==H&&p!==E&&p!==Z&&p!==ne&&p!==L)&&p!==f&&!(N===Y&&!V)||O(N)&&!We(N)&&p===f||N===Y&&V}function ee(p){return Ye(p)&&p!==t&&!We(p)&&p!==P&&p!==F&&p!==Y&&p!==H&&p!==E&&p!==Z&&p!==ne&&p!==L&&p!==f&&p!==B&&p!==w&&p!==u&&p!==T&&p!==q&&p!==oe&&p!==y&&p!==m&&p!==v&&p!==x&&p!==de}function fe(p){return!We(p)&&p!==Y}function Re(p,N){const M=p.charCodeAt(N);let D;return M>=55296&&M<=56319&&N+1<p.length&&(D=p.charCodeAt(N+1),D>=56320&&D<=57343)?(M-55296)*1024+D-56320+65536:M}function h(p){return/^\n* /.test(p)}const g=1,A=2,j=3,$=4,k=5;function ie(p,N,M,D,V,X,K,me){let ue,ge=0,Ae=null,Ie=!1,He=!1;const ti=D!==-1;let Wo=-1,Yo=ee(Re(p,0))&&fe(Re(p,p.length-1));if(N||K)for(ue=0;ue<p.length;ge>=65536?ue+=2:ue++){if(ge=Re(p,ue),!Ye(ge))return k;Yo=Yo&&ce(ge,Ae,me),Ae=ge}else{for(ue=0;ue<p.length;ge>=65536?ue+=2:ue++){if(ge=Re(p,ue),ge===l)Ie=!0,ti&&(He=He||ue-Wo-1>D&&p[Wo+1]!==" ",Wo=ue);else if(!Ye(ge))return k;Yo=Yo&&ce(ge,Ae,me),Ae=ge}He=He||ti&&ue-Wo-1>D&&p[Wo+1]!==" "}return!Ie&&!He?Yo&&!K&&!V(p)?g:X===Ke?k:A:M>9&&h(p)?k:K?X===Ke?k:A:He?$:j}function te(p,N,M,D,V){p.dump=(function(){if(N.length===0)return p.quotingType===Ke?'""':"''";if(!p.noCompatMode&&(pe.indexOf(N)!==-1||W.test(N)))return p.quotingType===Ke?'"'+N+'"':"'"+N+"'";const X=p.indent*Math.max(1,M),K=p.lineWidth===-1?-1:Math.max(Math.min(p.lineWidth,40),p.lineWidth-X),me=D||p.flowLevel>-1&&M>=p.flowLevel;function ue(ge){return wn(p,ge)}switch(ie(N,me,p.indent,K,ue,p.quotingType,p.forceQuotes&&!D,V)){case g:return N;case A:return"'"+N.replace(/'/g,"''")+"'";case j:return"|"+ae(N,p.indent)+z(Je(N,X));case $:return">"+ae(N,p.indent)+z(Je(ye(N,K),X));case k:return'"'+ve(N)+'"';default:throw new n("impossible error: invalid scalar style")}})()}function ae(p,N){const M=h(p)?String(N):"",D=p[p.length-1]===`
`,X=D&&(p[p.length-2]===`
`||p===`
`)?"+":D?"":"-";return M+X+`
`}function z(p){return p[p.length-1]===`
`?p.slice(0,-1):p}function ye(p,N){const M=/(\n+)([^\n]*)/g;let D=(function(){let me=p.indexOf(`
`);return me=me!==-1?me:p.length,M.lastIndex=me,se(p.slice(0,me),N)})(),V=p[0]===`
`||p[0]===" ",X,K;for(;K=M.exec(p);){const me=K[1],ue=K[2];X=ue[0]===" ",D+=me+(!V&&!X&&ue!==""?`
`:"")+se(ue,N),V=X}return D}function se(p,N){if(p===""||p[0]===" ")return p;const M=/ [^ ]/g;let D,V=0,X,K=0,me=0,ue="";for(;D=M.exec(p);)me=D.index,me-V>N&&(X=K>V?K:me,ue+=`
`+p.slice(V,X),V=X+1),K=me;return ue+=`
`,p.length-V>N&&K>V?ue+=p.slice(V,K)+`
`+p.slice(K+1):ue+=p.slice(V),ue.slice(1)}function ve(p){let N="",M=0;for(let D=0;D<p.length;M>=65536?D+=2:D++){M=Re(p,D);const V=J[M];!V&&Ye(M)?(N+=p[D],M>=65536&&(N+=p[D+1])):N+=V||he(M)}return N}function xe(p,N,M){let D="";const V=p.tag;for(let X=0,K=M.length;X<K;X+=1){let me=M[X];p.replacer&&(me=p.replacer.call(M,String(X),me)),(S(p,N,me,!1,!1)||typeof me>"u"&&S(p,N,null,!1,!1))&&(D!==""&&(D+=","+(p.condenseFlow?"":" ")),D+=p.dump)}p.tag=V,p.dump="["+D+"]"}function Ce(p,N,M,D){let V="";const X=p.tag;for(let K=0,me=M.length;K<me;K+=1){let ue=M[K];p.replacer&&(ue=p.replacer.call(M,String(K),ue)),(S(p,N+1,ue,!0,!0,!1,!0)||typeof ue>"u"&&S(p,N+1,null,!0,!0,!1,!0))&&((!D||V!=="")&&(V+=bn(p,N)),p.dump&&l===p.dump.charCodeAt(0)?V+="-":V+="- ",V+=p.dump)}p.tag=X,p.dump=V||"[]"}function Oe(p,N,M){let D="";const V=p.tag,X=Object.keys(M);for(let K=0,me=X.length;K<me;K+=1){let ue="";D!==""&&(ue+=", "),p.condenseFlow&&(ue+='"');const ge=X[K];let Ae=M[ge];p.replacer&&(Ae=p.replacer.call(M,ge,Ae)),S(p,N,ge,!1,!1)&&(p.dump.length>1024&&(ue+="? "),ue+=p.dump+(p.condenseFlow?'"':"")+":"+(p.condenseFlow?"":" "),S(p,N,Ae,!1,!1)&&(ue+=p.dump,D+=ue))}p.tag=V,p.dump="{"+D+"}"}function i(p,N,M,D){let V="";const X=p.tag,K=Object.keys(M);if(p.sortKeys===!0)K.sort();else if(typeof p.sortKeys=="function")K.sort(p.sortKeys);else if(p.sortKeys)throw new n("sortKeys must be a boolean or a function");for(let me=0,ue=K.length;me<ue;me+=1){let ge="";(!D||V!=="")&&(ge+=bn(p,N));const Ae=K[me];let Ie=M[Ae];if(p.replacer&&(Ie=p.replacer.call(M,Ae,Ie)),!S(p,N+1,Ae,!0,!0,!0))continue;const He=p.tag!==null&&p.tag!=="?"||p.dump&&p.dump.length>1024;He&&(p.dump&&l===p.dump.charCodeAt(0)?ge+="?":ge+="? "),ge+=p.dump,He&&(ge+=bn(p,N)),S(p,N+1,Ie,!0,He)&&(p.dump&&l===p.dump.charCodeAt(0)?ge+=":":ge+=": ",ge+=p.dump,V+=ge)}p.tag=X,p.dump=V||"{}"}function _(p,N,M){const D=M?p.explicitTypes:p.implicitTypes;for(let V=0,X=D.length;V<X;V+=1){const K=D[V];if((K.instanceOf||K.predicate)&&(!K.instanceOf||typeof N=="object"&&N instanceof K.instanceOf)&&(!K.predicate||K.predicate(N))){if(M?K.multi&&K.representName?p.tag=K.representName(N):p.tag=K.tag:p.tag="?",K.represent){const me=p.styleMap[K.tag]||K.defaultStyle;let ue;if(a.call(K.represent)==="[object Function]")ue=K.represent(N,me);else if(r.call(K.represent,me))ue=K.represent[me](N,me);else throw new n("!<"+K.tag+'> tag resolver accepts not "'+me+'" style');p.dump=ue}return!0}}return!1}function S(p,N,M,D,V,X,K){p.tag=null,p.dump=M,_(p,M,!1)||_(p,M,!0);const me=a.call(p.dump),ue=D;D&&(D=p.flowLevel<0||p.flowLevel>N);const ge=me==="[object Object]"||me==="[object Array]";let Ae,Ie;if(ge&&(Ae=p.duplicates.indexOf(M),Ie=Ae!==-1),(p.tag!==null&&p.tag!=="?"||Ie||p.indent!==2&&N>0)&&(V=!1),Ie&&p.usedDuplicates[Ae])p.dump="*ref_"+Ae;else{if(ge&&Ie&&!p.usedDuplicates[Ae]&&(p.usedDuplicates[Ae]=!0),me==="[object Object]")D&&Object.keys(p.dump).length!==0?(i(p,N,p.dump,V),Ie&&(p.dump="&ref_"+Ae+p.dump)):(Oe(p,N,p.dump),Ie&&(p.dump="&ref_"+Ae+" "+p.dump));else if(me==="[object Array]")D&&p.dump.length!==0?(p.noArrayIndent&&!K&&N>0?Ce(p,N-1,p.dump,V):Ce(p,N,p.dump,V),Ie&&(p.dump="&ref_"+Ae+p.dump)):(xe(p,N,p.dump),Ie&&(p.dump="&ref_"+Ae+" "+p.dump));else if(me==="[object String]")p.tag!=="?"&&te(p,p.dump,N,X,ue);else{if(me==="[object Undefined]")return!1;if(p.skipInvalid)return!1;throw new n("unacceptable kind of an object to dump "+me)}if(p.tag!==null&&p.tag!=="?"){let He=encodeURI(p.tag[0]==="!"?p.tag.slice(1):p.tag).replace(/!/g,"%21");p.tag[0]==="!"?He="!"+He:He.slice(0,18)==="tag:yaml.org,2002:"?He="!!"+He.slice(18):He="!<"+He+">",p.dump=He+" "+p.dump}}return!0}function I(p,N){const M=[],D=[];R(p,M,D);const V=D.length;for(let X=0;X<V;X+=1)N.duplicates.push(M[D[X]]);N.usedDuplicates=new Array(V)}function R(p,N,M){if(p!==null&&typeof p=="object"){const D=N.indexOf(p);if(D!==-1)M.indexOf(D)===-1&&M.push(D);else if(N.push(p),Array.isArray(p))for(let V=0,X=p.length;V<X;V+=1)R(p[V],N,M);else{const V=Object.keys(p);for(let X=0,K=V.length;X<K;X+=1)R(p[V[X]],N,M)}}}function Q(p,N){N=N||{};const M=new vn(N);M.noRefs||I(p,M);let D=p;return M.replacer&&(D=M.replacer.call({"":D},"",D)),S(M,0,D,!0,!0)?M.dump+`
`:""}return rt.dump=Q,rt}var As;function Jm(){if(As)return nn;As=1;const e=Wm(),n=Ym();function o(a,r){return function(){throw new Error("Function yaml."+a+" is removed in js-yaml 4. Use yaml."+r+" instead, which is now safe by default.")}}return nn.Type=hn(),nn.Schema=mc(),nn.FAILSAFE_SCHEMA=vc(),nn.JSON_SCHEMA=Ac(),nn.CORE_SCHEMA=Nc(),nn.DEFAULT_SCHEMA=Xt(),nn.load=e.load,nn.loadAll=e.loadAll,nn.dump=n.dump,nn.YAMLException=Oa(),nn.types={binary:Tc(),float:yc(),map:hc(),null:gc(),pairs:Sc(),set:wc(),timestamp:xc(),bool:bc(),int:_c(),merge:Bc(),omap:Rc(),seq:fc(),str:pc()},nn.safeLoad=o("safeLoad","load"),nn.safeLoadAll=o("safeLoadAll","loadAll"),nn.safeDump=o("safeDump","dump"),nn}var Qm=Jm();const ar=Km(Qm),{Type:Eg,Schema:Cg,FAILSAFE_SCHEMA:kg,JSON_SCHEMA:Ig,CORE_SCHEMA:Pg,DEFAULT_SCHEMA:Og,load:jg,loadAll:Dg,dump:Vg,YAMLException:Lg,types:qg,safeLoad:$g,safeLoadAll:Mg,safeDump:Fg}=ar;class Xm{constructor({ruleSetRepository:n}){this.ruleSetRepository=n}list(){return this.ruleSetRepository.getAll()}get(n){return this.ruleSetRepository.get(n)}async save(n){const o=await this.ruleSetRepository.get(n.id),a=Um(n,{createdAt:o?.createdAt??new Date,updatedAt:new Date});return this.ruleSetRepository.put(a)}async importFromJson(n,o){let a;try{a=JSON.parse(n)}catch{throw new TypeError("Arquivo de regras inválido: JSON malformado.")}return this.save(o?{...a,grupo:o}:a)}async importFromYaml(n,o){let a;try{a=ar.load(n)}catch{throw new TypeError("Arquivo de regras inválido: YAML malformado.")}return this.save(o?{...a,grupo:o}:a)}exportToJson(n){wt(n);const{source:o,createdAt:a,updatedAt:r,...t}=n;return JSON.stringify(t,null,2)}exportToYaml(n){wt(n);const{source:o,createdAt:a,updatedAt:r,...t}=n;return ar.dump(t,{noRefs:!0})}async exportByIdToJson(n){const o=await this.ruleSetRepository.get(n);if(!o)throw new Error("Conjunto de regras não encontrado.");return this.exportToJson(o)}async exportByIdToYaml(n){const o=await this.ruleSetRepository.get(n);if(!o)throw new Error("Conjunto de regras não encontrado.");return this.exportToYaml(o)}delete(n){return this.ruleSetRepository.delete(n)}}async function Zm({indexedDB:e}={}){const n=await wm(e),o={projectRepository:new Im(n),environmentRepository:new Cm(n),elementRepository:new Em(n),evaluationRepository:new km(n),ruleSetRepository:new Pm(n)},a=new qm(o);return{projectService:new $m(o),evaluationService:a,quickEvaluationService:new Mm({evaluationService:a}),ruleSetService:new Xm(o),close:()=>n.close()}}const ep=`id: area_descanso
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
`,np=`id: armario_vestiario
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
`,op=`id: assento_pmr_plateia
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
`,ap=`id: bacia_sanitaria
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
`,rp=`id: balcao
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
`,tp=`id: banco_vestiario
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
`,ip=`id: banheira_acessivel
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
`,sp=`id: barras_apoio
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
`,lp=`id: bebedouro
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
`,cp=`id: cabides
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
`,up=`id: cabina_vestiario
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
`,dp=`id: caixa_autoatendimento
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
`,mp=`id: calcada
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
`,pp=`id: chuveiro
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
`,fp=`id: corredores
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
`,hp=`id: corrimaos
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
    unidade: lados
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
`,vp=`id: degraus-isolados
nome: Degraus isolados
norma:
  nome: ABNT NBR 9050
  versao: 2020 - versão corrigida 2021
parametros:
  quantidade_degraus:
    label: Quantidade de degraus
    definicao: "Contagem ou duração do componente/ciclo descrito, usada para verificar o requisito correspondente. Valor informado em degraus."
    tipo: number
    unidade: degraus
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
  referencia: ABNT NBR 9050:2020 — 6.7.2 e 6.8.2 alínea a; verificar 0,63 m ≤ p + 2e ≤ 0,65 m.
`,gp=`id: elevadores
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
`,bp=`id: escadas
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
`,_p=`id: espaco_cao_guia
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
`,yp=`id: espaco_pcr_plateia
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
`,Ap=`id: espelhos_acessiveis
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
`,Np=`id: estacionamento
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
`,xp=`id: guarda_corpos
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
`,Bp=`id: janelas
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
`,Tp=`id: lavatorio
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
`,Rp=`id: mesa
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
`,Sp=`id: mictorio
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
`,wp=`id: papeleiras
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
`,Ep=`id: piscina
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
`,Cp=`id: piso-desnivel
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
`,kp=`id: piso_tatil
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
`,Ip=`id: porta_objetos
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
`,Pp=`id: portas
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
`,Op=`id: rampas
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
    unidade: segmentos
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
`,jp=`id: sanitario_acessivel
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
`,Dp=`id: sinalizacao
nome: Sinalização
norma:
  nome: ABNT NBR 9050
  versao: 2020 - versão corrigida 2021
parametros:
  contraste_lrv:
    label: Diferença de LRV
    definicao: "Diferença entre os valores de refletância luminosa da sinalização e da superfície adjacente, usada para verificar contraste visual. Valor informado em pontos."
    tipo: number
    unidade: pontos
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
`,Vp=`id: vagas_acessiveis
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
`,Lp=Object.assign({"../rules/nbr9050-2020/area_descanso.yaml":ep,"../rules/nbr9050-2020/armario_vestiario.yaml":np,"../rules/nbr9050-2020/assento_pmr_plateia.yaml":op,"../rules/nbr9050-2020/bacia_sanitaria.yaml":ap,"../rules/nbr9050-2020/balcao.yaml":rp,"../rules/nbr9050-2020/banco_vestiario.yaml":tp,"../rules/nbr9050-2020/banheira_acessivel.yaml":ip,"../rules/nbr9050-2020/barras_apoio.yaml":sp,"../rules/nbr9050-2020/bebedouro.yaml":lp,"../rules/nbr9050-2020/cabides.yaml":cp,"../rules/nbr9050-2020/cabina_vestiario.yaml":up,"../rules/nbr9050-2020/caixa_autoatendimento.yaml":dp,"../rules/nbr9050-2020/calcada.yaml":mp,"../rules/nbr9050-2020/chuveiro.yaml":pp,"../rules/nbr9050-2020/corredores.yaml":fp,"../rules/nbr9050-2020/corrimaos.yaml":hp,"../rules/nbr9050-2020/degraus-isolados.yaml":vp,"../rules/nbr9050-2020/elevadores.yaml":gp,"../rules/nbr9050-2020/escadas.yaml":bp,"../rules/nbr9050-2020/espaco_cao_guia.yaml":_p,"../rules/nbr9050-2020/espaco_pcr_plateia.yaml":yp,"../rules/nbr9050-2020/espelhos_acessiveis.yaml":Ap,"../rules/nbr9050-2020/estacionamento.yaml":Np,"../rules/nbr9050-2020/guarda_corpos.yaml":xp,"../rules/nbr9050-2020/janelas.yaml":Bp,"../rules/nbr9050-2020/lavatorio.yaml":Tp,"../rules/nbr9050-2020/mesa.yaml":Rp,"../rules/nbr9050-2020/mictorio.yaml":Sp,"../rules/nbr9050-2020/papeleiras.yaml":wp,"../rules/nbr9050-2020/piscina.yaml":Ep,"../rules/nbr9050-2020/piso-desnivel.yaml":Cp,"../rules/nbr9050-2020/piso_tatil.yaml":kp,"../rules/nbr9050-2020/porta_objetos.yaml":Ip,"../rules/nbr9050-2020/portas.yaml":Pp,"../rules/nbr9050-2020/rampas.yaml":Op,"../rules/nbr9050-2020/sanitario_acessivel.yaml":jp,"../rules/nbr9050-2020/sinalizacao.yaml":Dp,"../rules/nbr9050-2020/vagas_acessiveis.yaml":Vp});async function qp(){return Object.entries(Lp).map(([e,n])=>({path:e,ruleSet:ar.load(n)})).sort((e,n)=>e.ruleSet.nome.localeCompare(n.ruleSet.nome))}const Io=typeof document<"u";function Ec(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function $p(e){return e.__esModule||e[Symbol.toStringTag]==="Module"||e.default&&Ec(e.default)}const De=Object.assign;function tt(e,n){const o={};for(const a in n){const r=n[a];o[a]=jn(r)?r.map(e):e(r)}return o}const pa=()=>{},jn=Array.isArray;function Ns(e,n){const o={};for(const a in e)o[a]=a in n?n[a]:e[a];return o}const Cc=/#/g,Mp=/&/g,Fp=/\//g,zp=/=/g,Hp=/\?/g,kc=/\+/g,Up=/%5B/g,Kp=/%5D/g,Ic=/%5E/g,Gp=/%60/g,Pc=/%7B/g,Wp=/%7C/g,Oc=/%7D/g,Yp=/%20/g;function Zt(e){return e==null?"":encodeURI(""+e).replace(Wp,"|").replace(Up,"[").replace(Kp,"]")}function Jp(e){return Zt(e).replace(Pc,"{").replace(Oc,"}").replace(Ic,"^")}function Et(e){return Zt(e).replace(kc,"%2B").replace(Yp,"+").replace(Cc,"%23").replace(Mp,"%26").replace(Gp,"`").replace(Pc,"{").replace(Oc,"}").replace(Ic,"^")}function Qp(e){return Et(e).replace(zp,"%3D")}function Xp(e){return Zt(e).replace(Cc,"%23").replace(Hp,"%3F")}function Zp(e){return Xp(e).replace(Fp,"%2F")}function Ba(e){if(e==null)return null;try{return decodeURIComponent(""+e)}catch{}return""+e}const ef=/\/$/,nf=e=>e.replace(ef,"");function it(e,n,o="/"){let a,r={},t="",s="";const l=n.indexOf("#");let c=n.indexOf("?");return c=l>=0&&c>l?-1:c,c>=0&&(a=n.slice(0,c),t=n.slice(c,l>0?l:n.length),r=e(t.slice(1))),l>=0&&(a=a||n.slice(0,l),s=n.slice(l,n.length)),a=tf(a??n,o),{fullPath:a+t+s,path:a,query:r,hash:Ba(s)}}function of(e,n){const o=n.query?e(n.query):"";return n.path+(o&&"?")+o+(n.hash||"")}function xs(e,n){return!n||!e.toLowerCase().startsWith(n.toLowerCase())?e:e.slice(n.length)||"/"}function af(e,n,o){const a=n.matched.length-1,r=o.matched.length-1;return a>-1&&a===r&&Fo(n.matched[a],o.matched[r])&&jc(n.params,o.params)&&e(n.query)===e(o.query)&&n.hash===o.hash}function Fo(e,n){return(e.aliasOf||e)===(n.aliasOf||n)}function jc(e,n){if(Object.keys(e).length!==Object.keys(n).length)return!1;for(var o in e)if(!rf(e[o],n[o]))return!1;return!0}function rf(e,n){return jn(e)?Bs(e,n):jn(n)?Bs(n,e):e?.valueOf()===n?.valueOf()}function Bs(e,n){return jn(n)?e.length===n.length&&e.every((o,a)=>o===n[a]):e.length===1&&e[0]===n}function tf(e,n){if(e.startsWith("/"))return e;if(!e)return n;const o=n.split("/"),a=e.split("/"),r=a[a.length-1];(r===".."||r===".")&&a.push("");let t=o.length-1,s,l;for(s=0;s<a.length;s++)if(l=a[s],l!==".")if(l==="..")t>1&&t--;else break;return o.slice(0,t).join("/")+"/"+a.slice(s).join("/")}const so={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};let Ct=(function(e){return e.pop="pop",e.push="push",e})({}),st=(function(e){return e.back="back",e.forward="forward",e.unknown="",e})({});function sf(e){if(!e)if(Io){const n=document.querySelector("base");e=n&&n.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),nf(e)}const lf=/^[^#]+#/;function cf(e,n){return e.replace(lf,"#")+n}function uf(e,n){const o=document.documentElement.getBoundingClientRect(),a=e.getBoundingClientRect();return{behavior:n.behavior,left:a.left-o.left-(n.left||0),top:a.top-o.top-(n.top||0)}}const yr=()=>({left:window.scrollX,top:window.scrollY});function df(e){let n;if("el"in e){const o=e.el,a=typeof o=="string"&&o.startsWith("#"),r=typeof o=="string"?a?document.getElementById(o.slice(1)):document.querySelector(o):o;if(!r)return;n=uf(r,e)}else n=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(n):window.scrollTo(n.left!=null?n.left:window.scrollX,n.top!=null?n.top:window.scrollY)}function Ts(e,n){return(history.state?history.state.position-n:-1)+e}const kt=new Map;function mf(e,n){kt.set(e,n)}function pf(e){const n=kt.get(e);return kt.delete(e),n}function ff(e){return typeof e=="string"||e&&typeof e=="object"}function Dc(e){return typeof e=="string"||typeof e=="symbol"}let Ge=(function(e){return e[e.MATCHER_NOT_FOUND=1]="MATCHER_NOT_FOUND",e[e.NAVIGATION_GUARD_REDIRECT=2]="NAVIGATION_GUARD_REDIRECT",e[e.NAVIGATION_ABORTED=4]="NAVIGATION_ABORTED",e[e.NAVIGATION_CANCELLED=8]="NAVIGATION_CANCELLED",e[e.NAVIGATION_DUPLICATED=16]="NAVIGATION_DUPLICATED",e})({});const Vc=Symbol("");Ge.MATCHER_NOT_FOUND+"",Ge.NAVIGATION_GUARD_REDIRECT+"",Ge.NAVIGATION_ABORTED+"",Ge.NAVIGATION_CANCELLED+"",Ge.NAVIGATION_DUPLICATED+"";function zo(e,n){return De(new Error,{type:e,[Vc]:!0},n)}function Gn(e,n){return e instanceof Error&&Vc in e&&(n==null||!!(e.type&n))}const hf=["params","query","hash"];function vf(e){if(typeof e=="string")return e;if(e.path!=null)return e.path;const n={};for(const o of hf)o in e&&(n[o]=e[o]);return JSON.stringify(n,null,2)}function gf(e){const n={};if(e===""||e==="?")return n;const o=(e[0]==="?"?e.slice(1):e).split("&");for(let a=0;a<o.length;++a){const r=o[a].replace(kc," "),t=r.indexOf("="),s=Ba(t<0?r:r.slice(0,t)),l=t<0?null:Ba(r.slice(t+1));if(s in n){let c=n[s];jn(c)||(c=n[s]=[c]),c.push(l)}else n[s]=l}return n}function Rs(e){let n="";for(let o in e){const a=e[o];if(o=Qp(o),a==null){a!==void 0&&(n+=(n.length?"&":"")+o);continue}(jn(a)?a.map(r=>r&&Et(r)):[a&&Et(a)]).forEach(r=>{r!==void 0&&(n+=(n.length?"&":"")+o,r!=null&&(n+="="+r))})}return n}function bf(e){const n={};for(const o in e){const a=e[o];a!==void 0&&(n[o]=jn(a)?a.map(r=>r==null?null:""+r):a==null?a:""+a)}return n}const _f=Symbol(""),Ss=Symbol(""),Ar=Symbol(""),ei=Symbol(""),It=Symbol("");function na(){let e=[];function n(a){return e.push(a),()=>{const r=e.indexOf(a);r>-1&&e.splice(r,1)}}function o(){e=[]}return{add:n,list:()=>e.slice(),reset:o}}function uo(e,n,o,a,r,t=s=>s()){const s=a&&(a.enterCallbacks[r]=a.enterCallbacks[r]||[]);return()=>new Promise((l,c)=>{const d=f=>{f===!1?c(zo(Ge.NAVIGATION_ABORTED,{from:o,to:n})):f instanceof Error?c(f):ff(f)?c(zo(Ge.NAVIGATION_GUARD_REDIRECT,{from:n,to:f})):(s&&a.enterCallbacks[r]===s&&typeof f=="function"&&s.push(f),l())},u=t(()=>e.call(a&&a.instances[r],n,o,d));let m=Promise.resolve(u);e.length<3&&(m=m.then(d)),m.catch(f=>c(f))})}function lt(e,n,o,a,r=t=>t()){const t=[];for(const s of e)for(const l in s.components){let c=s.components[l];if(!(n!=="beforeRouteEnter"&&!s.instances[l]))if(Ec(c)){const d=(c.__vccOpts||c)[n];d&&t.push(uo(d,o,a,s,l,r))}else{let d=c();t.push(()=>d.then(u=>{if(!u)throw new Error(`Couldn't resolve component "${l}" at "${s.path}"`);const m=$p(u)?u.default:u;s.mods[l]=u,s.components[l]=m;const f=(m.__vccOpts||m)[n];return f&&uo(f,o,a,s,l,r)()}))}}return t}function yf(e,n){const o=[],a=[],r=[],t=Math.max(n.matched.length,e.matched.length);for(let s=0;s<t;s++){const l=n.matched[s];l&&(e.matched.find(d=>Fo(d,l))?a.push(l):o.push(l));const c=e.matched[s];c&&(n.matched.find(d=>Fo(d,c))||r.push(c))}return[o,a,r]}let Af=()=>location.protocol+"//"+location.host;function Lc(e,n){const{pathname:o,search:a,hash:r}=n,t=e.indexOf("#");if(t>-1){let s=r.includes(e.slice(t))?e.slice(t).length:1,l=r.slice(s);return l[0]!=="/"&&(l="/"+l),xs(l,"")}return xs(o,e)+a+r}function Nf(e,n,o,a){let r=[],t=[],s=null;const l=({state:f})=>{const v=Lc(e,location),B=o.value,y=n.value;let w=0;if(f){if(o.value=v,n.value=f,s&&s===B){s=null;return}w=y?f.position-y.position:0}else a(v);r.forEach(H=>{H(o.value,B,{delta:w,type:Ct.pop,direction:w?w>0?st.forward:st.back:st.unknown})})};function c(){s=o.value}function d(f){r.push(f);const v=()=>{const B=r.indexOf(f);B>-1&&r.splice(B,1)};return t.push(v),v}function u(){if(document.visibilityState==="hidden"){const{history:f}=window;if(!f.state)return;f.replaceState(De({},f.state,{scroll:yr()}),"")}}function m(){for(const f of t)f();t=[],window.removeEventListener("popstate",l),window.removeEventListener("pagehide",u),document.removeEventListener("visibilitychange",u)}return window.addEventListener("popstate",l),window.addEventListener("pagehide",u),document.addEventListener("visibilitychange",u),{pauseListeners:c,listen:d,destroy:m}}function ws(e,n,o,a=!1,r=!1){return{back:e,current:n,forward:o,replaced:a,position:window.history.length,scroll:r?yr():null}}function xf(e){const{history:n,location:o}=window,a={value:Lc(e,o)},r={value:n.state};r.value||t(a.value,{back:null,current:a.value,forward:null,position:n.length-1,replaced:!0,scroll:null},!0);function t(c,d,u){const m=e.indexOf("#"),f=m>-1?(o.host&&document.querySelector("base")?e:e.slice(m))+c:Af()+e+c;try{n[u?"replaceState":"pushState"](d,"",f),r.value=d}catch(v){console.error(v),o[u?"replace":"assign"](f)}}function s(c,d){t(c,De({},n.state,ws(r.value.back,c,r.value.forward,!0),d,{position:r.value.position}),!0),a.value=c}function l(c,d){const u=De({},r.value,n.state,{forward:c,scroll:yr()});t(u.current,u,!0),t(c,De({},ws(a.value,c,null),{position:u.position+1},d),!1),a.value=c}return{location:a,state:r,push:l,replace:s}}function Bf(e){e=sf(e);const n=xf(e),o=Nf(e,n.state,n.location,n.replace);function a(t,s=!0){s||o.pauseListeners(),history.go(t)}const r=De({location:"",base:e,go:a,createHref:cf.bind(null,e)},n,o);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>n.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>n.state.value}),r}let To=(function(e){return e[e.Static=0]="Static",e[e.Param=1]="Param",e[e.Group=2]="Group",e})({});var Qe=(function(e){return e[e.Static=0]="Static",e[e.Param=1]="Param",e[e.ParamRegExp=2]="ParamRegExp",e[e.ParamRegExpEnd=3]="ParamRegExpEnd",e[e.EscapeNext=4]="EscapeNext",e})(Qe||{});const Tf={type:To.Static,value:""},Rf=/[a-zA-Z0-9_]/;function Sf(e){if(!e)return[[]];if(e==="/")return[[Tf]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function n(v){throw new Error(`ERR (${o})/"${d}": ${v}`)}let o=Qe.Static,a=o;const r=[];let t;function s(){t&&r.push(t),t=[]}let l=0,c,d="",u="";function m(){d&&(o===Qe.Static?t.push({type:To.Static,value:d}):o===Qe.Param||o===Qe.ParamRegExp||o===Qe.ParamRegExpEnd?(t.length>1&&(c==="*"||c==="+")&&n(`A repeatable param (${d}) must be alone in its segment. eg: '/:ids+.`),t.push({type:To.Param,value:d,regexp:u,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):n("Invalid state to consume buffer"),d="")}function f(){d+=c}for(;l<e.length;){if(c=e[l++],c==="\\"&&o!==Qe.ParamRegExp){a=o,o=Qe.EscapeNext;continue}switch(o){case Qe.Static:c==="/"?(d&&m(),s()):c===":"?(m(),o=Qe.Param):f();break;case Qe.EscapeNext:f(),o=a;break;case Qe.Param:c==="("?o=Qe.ParamRegExp:Rf.test(c)?f():(m(),o=Qe.Static,c!=="*"&&c!=="?"&&c!=="+"&&l--);break;case Qe.ParamRegExp:c===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+c:o=Qe.ParamRegExpEnd:u+=c;break;case Qe.ParamRegExpEnd:m(),o=Qe.Static,c!=="*"&&c!=="?"&&c!=="+"&&l--,u="";break;default:n("Unknown state");break}}return o===Qe.ParamRegExp&&n(`Unfinished custom RegExp for param "${d}"`),m(),s(),r}const Es="[^/]+?",wf={sensitive:!1,strict:!1,start:!0,end:!0};var un=(function(e){return e[e._multiplier=10]="_multiplier",e[e.Root=90]="Root",e[e.Segment=40]="Segment",e[e.SubSegment=30]="SubSegment",e[e.Static=40]="Static",e[e.Dynamic=20]="Dynamic",e[e.BonusCustomRegExp=10]="BonusCustomRegExp",e[e.BonusWildcard=-50]="BonusWildcard",e[e.BonusRepeatable=-20]="BonusRepeatable",e[e.BonusOptional=-8]="BonusOptional",e[e.BonusStrict=.7000000000000001]="BonusStrict",e[e.BonusCaseSensitive=.25]="BonusCaseSensitive",e})(un||{});const Ef=/[.+*?^${}()[\]/\\]/g;function Cf(e,n){const o=De({},wf,n),a=[];let r=o.start?"^":"";const t=[];for(const d of e){const u=d.length?[]:[un.Root];o.strict&&!d.length&&(r+="/");for(let m=0;m<d.length;m++){const f=d[m];let v=un.Segment+(o.sensitive?un.BonusCaseSensitive:0);if(f.type===To.Static)m||(r+="/"),r+=f.value.replace(Ef,"\\$&"),v+=un.Static;else if(f.type===To.Param){const{value:B,repeatable:y,optional:w,regexp:H}=f;t.push({name:B,repeatable:y,optional:w});const P=H||Es;if(P!==Es){v+=un.BonusCustomRegExp;try{`${P}`}catch(q){throw new Error(`Invalid custom RegExp for param "${B}" (${P}): `+q.message)}}let Y=y?`((?:${P})(?:/(?:${P}))*)`:`(${P})`;m||(Y=w&&d.length<2?`(?:/${Y})`:"/"+Y),w&&(Y+="?"),r+=Y,v+=un.Dynamic,w&&(v+=un.BonusOptional),y&&(v+=un.BonusRepeatable),P===".*"&&(v+=un.BonusWildcard)}u.push(v)}a.push(u)}if(o.strict&&o.end){const d=a.length-1;a[d][a[d].length-1]+=un.BonusStrict}o.strict||(r+="/?"),o.end?r+="$":o.strict&&!r.endsWith("/")&&(r+="(?:/|$)");const s=new RegExp(r,o.sensitive?"":"i");function l(d){const u=d.match(s),m={};if(!u)return null;for(let f=1;f<u.length;f++){const v=u[f]||"",B=t[f-1];m[B.name]=v&&B.repeatable?v.split("/"):v}return m}function c(d){let u="",m=!1;for(const f of e){(!m||!u.endsWith("/"))&&(u+="/"),m=!1;for(const v of f)if(v.type===To.Static)u+=v.value;else if(v.type===To.Param){const{value:B,repeatable:y,optional:w}=v,H=B in d?d[B]:"";if(jn(H)&&!y)throw new Error(`Provided param "${B}" is an array but it is not repeatable (* or + modifiers)`);const P=jn(H)?H.join("/"):H;if(!P)if(w)f.length<2&&(u.endsWith("/")?u=u.slice(0,-1):m=!0);else throw new Error(`Missing required param "${B}"`);u+=P}}return u||"/"}return{re:s,score:a,keys:t,parse:l,stringify:c}}function kf(e,n){let o=0;for(;o<e.length&&o<n.length;){const a=n[o]-e[o];if(a)return a;o++}return e.length<n.length?e.length===1&&e[0]===un.Static+un.Segment?-1:1:e.length>n.length?n.length===1&&n[0]===un.Static+un.Segment?1:-1:0}function qc(e,n){let o=0;const a=e.score,r=n.score;for(;o<a.length&&o<r.length;){const t=kf(a[o],r[o]);if(t)return t;o++}if(Math.abs(r.length-a.length)===1){if(Cs(a))return 1;if(Cs(r))return-1}return r.length-a.length}function Cs(e){const n=e[e.length-1];return e.length>0&&n[n.length-1]<0}const If={strict:!1,end:!0,sensitive:!1};function Pf(e,n,o){const a=Cf(Sf(e.path),o),r=De(a,{record:e,parent:n,children:[],alias:[]});return n&&!r.record.aliasOf==!n.record.aliasOf&&n.children.push(r),r}function Of(e,n){const o=[],a=new Map;n=Ns(If,n);function r(m){return a.get(m)}function t(m,f,v){const B=!v,y=Is(m);y.aliasOf=v&&v.record;const w=Ns(n,m),H=[y];if("alias"in m){const q=typeof m.alias=="string"?[m.alias]:m.alias;for(const oe of q)H.push(Is(De({},y,{components:v?v.record.components:y.components,path:oe,aliasOf:v?v.record:y})))}let P,Y;for(const q of H){const{path:oe}=q;if(f&&oe[0]!=="/"){const F=f.record.path,x=F[F.length-1]==="/"?"":"/";q.path=f.record.path+(oe&&x+oe)}if(P=Pf(q,f,w),v?v.alias.push(P):(Y=Y||P,Y!==P&&Y.alias.push(P),B&&m.name&&!Ps(P)&&s(m.name)),$c(P)&&c(P),y.children){const F=y.children;for(let x=0;x<F.length;x++)t(F[x],P,v&&v.children[x])}v=v||P}return Y?()=>{s(Y)}:pa}function s(m){if(Dc(m)){const f=a.get(m);f&&(a.delete(m),o.splice(o.indexOf(f),1),f.children.forEach(s),f.alias.forEach(s))}else{const f=o.indexOf(m);f>-1&&(o.splice(f,1),m.record.name&&a.delete(m.record.name),m.children.forEach(s),m.alias.forEach(s))}}function l(){return o}function c(m){const f=Vf(m,o);o.splice(f,0,m),m.record.name&&!Ps(m)&&a.set(m.record.name,m)}function d(m,f){let v,B={},y,w;if("name"in m&&m.name){if(v=a.get(m.name),!v)throw zo(Ge.MATCHER_NOT_FOUND,{location:m});w=v.record.name,B=De(ks(f.params,v.keys.filter(Y=>!Y.optional).concat(v.parent?v.parent.keys.filter(Y=>Y.optional):[]).map(Y=>Y.name)),m.params&&ks(m.params,v.keys.map(Y=>Y.name))),y=v.stringify(B)}else if(m.path!=null)y=m.path,v=o.find(Y=>Y.re.test(y)),v&&(B=v.parse(y),w=v.record.name);else{if(v=f.name?a.get(f.name):o.find(Y=>Y.re.test(f.path)),!v)throw zo(Ge.MATCHER_NOT_FOUND,{location:m,currentLocation:f});w=v.record.name,B=De({},f.params,m.params),y=v.stringify(B)}const H=[];let P=v;for(;P;)H.unshift(P.record),P=P.parent;return{name:w,path:y,params:B,matched:H,meta:Df(H)}}e.forEach(m=>t(m));function u(){o.length=0,a.clear()}return{addRoute:t,resolve:d,removeRoute:s,clearRoutes:u,getRoutes:l,getRecordMatcher:r}}function ks(e,n){const o={};for(const a of n)a in e&&(o[a]=e[a]);return o}function Is(e){const n={path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:e.aliasOf,beforeEnter:e.beforeEnter,props:jf(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}};return Object.defineProperty(n,"mods",{value:{}}),n}function jf(e){const n={},o=e.props||!1;if("component"in e)n.default=o;else for(const a in e.components)n[a]=typeof o=="object"?o[a]:o;return n}function Ps(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function Df(e){return e.reduce((n,o)=>De(n,o.meta),{})}function Vf(e,n){let o=0,a=n.length;for(;o!==a;){const t=o+a>>1;qc(e,n[t])<0?a=t:o=t+1}const r=Lf(e);return r&&(a=n.lastIndexOf(r,a-1)),a}function Lf(e){let n=e;for(;n=n.parent;)if($c(n)&&qc(e,n)===0)return n}function $c({record:e}){return!!(e.name||e.components&&Object.keys(e.components).length||e.redirect)}function Os(e){const n=Me(Ar),o=Me(ei),a=Le(()=>{const c=re(e.to);return n.resolve(c)}),r=Le(()=>{const{matched:c}=a.value,{length:d}=c,u=c[d-1],m=o.matched;if(!u||!m.length)return-1;const f=m.findIndex(Fo.bind(null,u));if(f>-1)return f;const v=js(c[d-2]);return d>1&&js(u)===v&&m[m.length-1].path!==v?m.findIndex(Fo.bind(null,c[d-2])):f}),t=Le(()=>r.value>-1&&Ff(o.params,a.value.params)),s=Le(()=>r.value>-1&&r.value===o.matched.length-1&&jc(o.params,a.value.params));function l(c={}){if(Mf(c)){const d=n[re(e.replace)?"replace":"push"](re(e.to)).catch(pa);return e.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>d),d}return Promise.resolve()}return{route:a,href:Le(()=>a.value.href),isActive:t,isExactActive:s,navigate:l}}function qf(e){return e.length===1?e[0]:e}const $f=Il({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:Os,setup(e,{slots:n}){const o=wa(Os(e)),{options:a}=Me(Ar),r=Le(()=>({[Ds(e.activeClass,a.linkActiveClass,"router-link-active")]:o.isActive,[Ds(e.exactActiveClass,a.linkExactActiveClass,"router-link-exact-active")]:o.isExactActive}));return()=>{const t=n.default&&qf(n.default(o));return e.custom?t:$o("a",{"aria-current":o.isExactActive?e.ariaCurrentValue:null,href:o.href,onClick:o.navigate,class:r.value},t)}}}),ke=$f;function Mf(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const n=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(n))return}return e.preventDefault&&e.preventDefault(),!0}}function Ff(e,n){for(const o in n){const a=n[o],r=e[o];if(typeof a=="string"){if(a!==r)return!1}else if(!jn(r)||r.length!==a.length||a.some((t,s)=>t.valueOf()!==r[s].valueOf()))return!1}return!0}function js(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const Ds=(e,n,o)=>e??n??o,zf=Il({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:n,slots:o}){const a=Me(It),r=Le(()=>e.route||a.value),t=Me(Ss,0),s=Le(()=>{let d=re(t);const{matched:u}=r.value;let m;for(;(m=u[d])&&!m.components;)d++;return d}),l=Le(()=>r.value.matched[s.value]);la(Ss,Le(()=>s.value+1)),la(_f,l),la(It,r);const c=Be();return fo(()=>[c.value,l.value,e.name],([d,u,m],[f,v,B])=>{u&&(u.instances[m]=d,v&&v!==u&&d&&d===f&&(u.leaveGuards.size||(u.leaveGuards=v.leaveGuards),u.updateGuards.size||(u.updateGuards=v.updateGuards))),d&&u&&(!v||!Fo(u,v)||!f)&&(u.enterCallbacks[m]||[]).forEach(y=>y(d))},{flush:"post"}),()=>{const d=r.value,u=e.name,m=l.value,f=m&&m.components[u];if(!f)return Vs(o.default,{Component:f,route:d});const v=m.props[u],B=v?v===!0?d.params:typeof v=="function"?v(d):v:null,w=$o(f,De({},B,n,{onVnodeUnmounted:H=>{H.component.isUnmounted&&(m.instances[u]=null)},ref:c}));return Vs(o.default,{Component:w,route:d})||w}}});function Vs(e,n){if(!e)return null;const o=e(n);return o.length===1?o[0]:o}const Mc=zf;function Hf(e){const n=Of(e.routes,e),o=e.parseQuery||gf,a=e.stringifyQuery||Rs,r=e.history,t=na(),s=na(),l=na(),c=xu(so);let d=so;Io&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=tt.bind(null,O=>""+O),m=tt.bind(null,Zp),f=tt.bind(null,Ba);function v(O,ce){let ee,fe;return Dc(O)?(ee=n.getRecordMatcher(O),fe=ce):fe=O,n.addRoute(fe,ee)}function B(O){const ce=n.getRecordMatcher(O);ce&&n.removeRoute(ce)}function y(){return n.getRoutes().map(O=>O.record)}function w(O){return!!n.getRecordMatcher(O)}function H(O,ce){if(ce=De({},ce||c.value),typeof O=="string"){const A=it(o,O,ce.path),j=n.resolve({path:A.path},ce),$=r.createHref(A.fullPath);return De(A,j,{params:f(j.params),hash:Ba(A.hash),redirectedFrom:void 0,href:$})}let ee;if(O.path!=null)ee=De({},O,{path:it(o,O.path,ce.path).path});else{const A=De({},O.params);for(const j in A)A[j]==null&&delete A[j];ee=De({},O,{params:m(A)}),ce.params=m(ce.params)}const fe=n.resolve(ee,ce),Re=O.hash||"";fe.params=u(f(fe.params));const h=of(a,De({},O,{hash:Jp(Re),path:fe.path})),g=r.createHref(h);return De({fullPath:h,hash:Re,query:a===Rs?bf(O.query):O.query||{}},fe,{redirectedFrom:void 0,href:g})}function P(O){return typeof O=="string"?it(o,O,c.value.path):De({},O)}function Y(O,ce){if(d!==O)return zo(Ge.NAVIGATION_CANCELLED,{from:ce,to:O})}function q(O){return x(O)}function oe(O){return q(De(P(O),{replace:!0}))}function F(O,ce){const ee=O.matched[O.matched.length-1];if(ee&&ee.redirect){const{redirect:fe}=ee;let Re=typeof fe=="function"?fe(O,ce):fe;return typeof Re=="string"&&(Re=Re.includes("?")||Re.includes("#")?Re=P(Re):{path:Re},Re.params={}),De({query:O.query,hash:O.hash,params:Re.path!=null?{}:O.params},Re)}}function x(O,ce){const ee=d=H(O),fe=c.value,Re=O.state,h=O.force,g=O.replace===!0,A=F(ee,fe);if(A)return x(De(P(A),{state:typeof A=="object"?De({},Re,A.state):Re,force:h,replace:g}),ce||ee);const j=ee;j.redirectedFrom=ce;let $;return!h&&af(a,fe,ee)&&($=zo(Ge.NAVIGATION_DUPLICATED,{to:j,from:fe}),vn(fe,fe,!0,!1)),($?Promise.resolve($):de(j,fe)).catch(k=>Gn(k)?Gn(k,Ge.NAVIGATION_GUARD_REDIRECT)?k:Ke(k):he(k,j,fe)).then(k=>{if(k){if(Gn(k,Ge.NAVIGATION_GUARD_REDIRECT))return x(De({replace:g},P(k.to),{state:typeof k.to=="object"?De({},Re,k.to.state):Re,force:h}),ce||j)}else k=T(j,fe,!0,g,Re);return ne(j,fe,k),k})}function E(O,ce){const ee=Y(O,ce);return ee?Promise.reject(ee):Promise.resolve()}function Z(O){const ce=wn.values().next().value;return ce&&typeof ce.runWithContext=="function"?ce.runWithContext(O):O()}function de(O,ce){let ee;const[fe,Re,h]=yf(O,ce);ee=lt(fe.reverse(),"beforeRouteLeave",O,ce);for(const A of fe)A.leaveGuards.forEach(j=>{ee.push(uo(j,O,ce))});const g=E.bind(null,O,ce);return ee.push(g),Ye(ee).then(()=>{ee=[];for(const A of t.list())ee.push(uo(A,O,ce));return ee.push(g),Ye(ee)}).then(()=>{ee=lt(Re,"beforeRouteUpdate",O,ce);for(const A of Re)A.updateGuards.forEach(j=>{ee.push(uo(j,O,ce))});return ee.push(g),Ye(ee)}).then(()=>{ee=[];for(const A of h)if(A.beforeEnter)if(jn(A.beforeEnter))for(const j of A.beforeEnter)ee.push(uo(j,O,ce));else ee.push(uo(A.beforeEnter,O,ce));return ee.push(g),Ye(ee)}).then(()=>(O.matched.forEach(A=>A.enterCallbacks={}),ee=lt(h,"beforeRouteEnter",O,ce,Z),ee.push(g),Ye(ee))).then(()=>{ee=[];for(const A of s.list())ee.push(uo(A,O,ce));return ee.push(g),Ye(ee)}).catch(A=>Gn(A,Ge.NAVIGATION_CANCELLED)?A:Promise.reject(A))}function ne(O,ce,ee){l.list().forEach(fe=>Z(()=>fe(O,ce,ee)))}function T(O,ce,ee,fe,Re){const h=Y(O,ce);if(h)return h;const g=ce===so,A=Io?history.state:{};ee&&(fe||g?r.replace(O.fullPath,De({scroll:g&&A&&A.scroll},Re)):r.push(O.fullPath,Re)),c.value=O,vn(O,ce,ee,g),Ke()}let L;function J(){L||(L=r.listen((O,ce,ee)=>{if(!We.listening)return;const fe=H(O),Re=F(fe,We.currentRoute.value);if(Re){x(De(Re,{replace:!0,force:!0}),fe).catch(pa);return}d=fe;const h=c.value;Io&&mf(Ts(h.fullPath,ee.delta),yr()),de(fe,h).catch(g=>Gn(g,Ge.NAVIGATION_ABORTED|Ge.NAVIGATION_CANCELLED)?g:Gn(g,Ge.NAVIGATION_GUARD_REDIRECT)?(x(De(P(g.to),{force:!0}),fe).then(A=>{Gn(A,Ge.NAVIGATION_ABORTED|Ge.NAVIGATION_DUPLICATED)&&!ee.delta&&ee.type===Ct.pop&&r.go(-1,!1)}).catch(pa),Promise.reject()):(ee.delta&&r.go(-ee.delta,!1),he(g,fe,h))).then(g=>{g=g||T(fe,h,!1),g&&(ee.delta&&!Gn(g,Ge.NAVIGATION_CANCELLED)?r.go(-ee.delta,!1):ee.type===Ct.pop&&Gn(g,Ge.NAVIGATION_ABORTED|Ge.NAVIGATION_DUPLICATED)&&r.go(-1,!1)),ne(fe,h,g)}).catch(pa)}))}let pe=na(),W=na(),Te;function he(O,ce,ee){Ke(O);const fe=W.list();return fe.length?fe.forEach(Re=>Re(O,ce,ee)):console.error(O),Promise.reject(O)}function Ue(){return Te&&c.value!==so?Promise.resolve():new Promise((O,ce)=>{pe.add([O,ce])})}function Ke(O){return Te||(Te=!O,J(),pe.list().forEach(([ce,ee])=>O?ee(O):ce()),pe.reset()),O}function vn(O,ce,ee,fe){const{scrollBehavior:Re}=e;if(!Io||!Re)return Promise.resolve();const h=!ee&&pf(Ts(O.fullPath,0))||(fe||!ee)&&history.state&&history.state.scroll||null;return yn().then(()=>Re(O,ce,h)).then(g=>g&&df(g)).catch(g=>he(g,O,ce))}const Je=O=>r.go(O);let bn;const wn=new Set,We={currentRoute:c,listening:!0,addRoute:v,removeRoute:B,clearRoutes:n.clearRoutes,hasRoute:w,getRoutes:y,resolve:H,options:e,push:q,replace:oe,go:Je,back:()=>Je(-1),forward:()=>Je(1),beforeEach:t.add,beforeResolve:s.add,afterEach:l.add,onError:W.add,isReady:Ue,install(O){O.component("RouterLink",ke),O.component("RouterView",Mc),O.config.globalProperties.$router=We,Object.defineProperty(O.config.globalProperties,"$route",{enumerable:!0,get:()=>re(c)}),Io&&!bn&&c.value===so&&(bn=!0,q(r.location).catch(fe=>{}));const ce={};for(const fe in so)Object.defineProperty(ce,fe,{get:()=>c.value[fe],enumerable:!0});O.provide(Ar,We),O.provide(ei,hl(ce)),O.provide(It,c);const ee=O.unmount;wn.add(O),O.unmount=function(){wn.delete(O),wn.size<1&&(d=so,L&&L(),L=null,c.value=so,bn=!1,Te=!1),ee()}}};function Ye(O){return O.reduce((ce,ee)=>ce.then(()=>Z(ee)),Promise.resolve())}return We}function Nr(){return Me(Ar)}function ni(e){return Me(ei)}const Uf="/Extensao-26.2/icon-512.png";const Ao={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};const Ls=(...e)=>e.filter((n,o,a)=>!!n&&n.trim()!==""&&a.indexOf(n)===o).join(" ").trim();function ct(e){return e!=null}function Kf(e,n={}){const o=n.attributeNames??{},a=f=>o[f]??f,r=e.size??e.width??Ao.width,t=e.size??e.height??Ao.height,s=e.aliases?.filter(f=>typeof f=="string"&&f.trim()!=="").map(f=>`lucide-${f}`)??[],l=[...e.name?[`lucide-${e.name}`]:[],...s],c=n.className?.split(" ").filter(Boolean)??[],d=n.includeDefaultClasses===!1?Ls(...c):Ls("lucide",...l,...c),u=n.absoluteStrokeWidth?Number(n.strokeWidth??Ao["stroke-width"])*Number(e.size??e.width??Ao.width)/Number(n.size??n.width??Ao.width):n.strokeWidth??Ao["stroke-width"];return["svg",{...Object.entries(Ao).reduce((f,[v,B])=>(f[a(v)]=B,f),{}),..."color"in n&&n.color&&{[a("stroke")]:n.color},..."size"in n&&ct(n.size)&&{[a("width")]:n.size,[a("height")]:n.size},..."width"in n&&ct(n.width)&&{[a("width")]:n.width},..."height"in n&&ct(n.height)&&{[a("height")]:n.height},[a("stroke-width")]:u,...d&&{[a("class")]:d},[a("viewBox")]:`0 0 ${r} ${t}`,...n.hasA11yProp===!1?{[a("aria-hidden")]:"true"}:{},..."attributes"in n&&n.attributes},e.node.map(f=>{const[v,B,y]=f,w=n.nonScalingStroke?{[a("vector-effect")]:"non-scaling-stroke",...B}:B;return y?[v,w,y]:[v,w]})]}const Gf=e=>{for(const n in e)if(n.startsWith("aria-")||n==="role"||n==="title")return!0;return!1};const Ma=e=>e==="";const Wf=e=>e?.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();const Yf=Symbol("lucide-icons");function Jf(){return Me(Yf,{})}const Qf=({name:e,iconNode:n,"icon-node":o,icon:a={name:Wf(e),node:n??o,size:24,aliases:[]},absoluteStrokeWidth:r,"absolute-stroke-width":t,nonScalingStroke:s,"non-scaling-stroke":l,strokeWidth:c,"stroke-width":d,size:u,width:m=u,height:f=u,color:v,...B},{slots:y})=>{const{size:w,color:H,strokeWidth:P=2,absoluteStrokeWidth:Y=!1,nonScalingStroke:q=!1,class:oe=""}=Jf(),F=Ma(r)||Ma(t)||r===!0||t===!0||Y===!0,x=Ma(s)||Ma(l)||s===!0||l===!0||q===!0;delete B.class;const E=y.default?.(),[,Z,de=[]]=Kf(a,{color:v??H,width:m??u??w,height:f??u??w,strokeWidth:c??d??P,absoluteStrokeWidth:F,nonScalingStroke:x,className:oe,hasA11yProp:E!=null&&E.length>0||Gf(B),attributes:B});return $o("svg",Z,[...de.map(ne=>$o(...ne)),...E??[]])};function Nn(e,n=[]){const o=typeof e=="string"?{name:e,node:n}:e;return(a,{slots:r})=>$o(Qf,{...a,icon:o},r.default?{default:r.default}:void 0)}const Xf={name:"arrow-right",size:24,node:[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]},Zf=Nn(Xf);const eh={name:"box",size:24,node:[["path",{d:"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",key:"hh9hay"}],["path",{d:"m3.3 7 8.7 5 8.7-5",key:"g66t2b"}],["path",{d:"M12 22V12",key:"d0xqtd"}]]},nh=Nn(eh);const oh={name:"chevron-right",size:24,node:[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]},Ta=Nn(oh);const ah={name:"chevron-left",size:24,node:[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]},Ra=Nn(ah);const rh={name:"circle-question-mark",size:24,node:[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",key:"1u773s"}],["path",{d:"M12 17h.01",key:"p32p05"}]],aliases:["help-circle","circle-help"]},oi=Nn(rh);const th={name:"clipboard-check",size:24,node:[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1",key:"tgr4d6"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",key:"116196"}],["path",{d:"m9 14 2 2 4-4",key:"df797q"}]]},po=Nn(th);const ih={name:"folder-kanban",size:24,node:[["path",{d:"M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z",key:"1fr9dc"}],["path",{d:"M8 10v4",key:"tgpxqk"}],["path",{d:"M12 10v2",key:"hh53o1"}],["path",{d:"M16 10v6",key:"1d6xys"}]]},Fc=Nn(ih);const sh={name:"folder-plus",size:24,node:[["path",{d:"M12 10v6",key:"1bos4e"}],["path",{d:"M9 13h6",key:"1uhe8q"}],["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",key:"1kt360"}]]},rr=Nn(sh);const lh={name:"folder",size:24,node:[["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",key:"1kt360"}]]},qs=Nn(lh);const ch={name:"house",size:24,node:[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"r6nss1"}]],aliases:["home"]},uh=Nn(ch);const dh={name:"pencil",size:24,node:[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}],["path",{d:"m15 5 4 4",key:"1mk7zo"}]]},mh=Nn(dh);const ph={name:"plus",size:24,node:[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]},$s=Nn(ph);const fh={name:"trash",size:24,node:[["path",{d:"M10 11v6",key:"nco0om"}],["path",{d:"M14 11v6",key:"outv1u"}],["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",key:"miytrc"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",key:"e791ji"}]],aliases:["trash-2"]},Ho=Nn(fh),hh={class:"app-shell"},vh={class:"sidebar"},gh={key:0,class:"bottom-nav"},bh={__name:"AppLayout",setup(e){const n=ni(),o=Le(()=>n.path.startsWith("/rules")?"rules":n.path.startsWith("/quick-evaluation")?"quick":"projects"),a=Be(null);async function r(){await yn(),a.value?.focus()}return fo(()=>n.fullPath,r),(t,s)=>(C(),G("div",hh,[b("a",{class:"skip-link",href:"#conteudo",onClick:ao(r,["prevent"])},"Pular para o conteúdo"),b("aside",vh,[U(re(ke),{class:"brand",to:"/projects"},{default:_e(()=>[...s[0]||(s[0]=[b("img",{class:"brand__mark",src:Uf,alt:"Acesso Verificador"},null,-1),b("span",null,[we("Acesso"),b("br"),b("small",null,"Verificador")],-1)])]),_:1}),b("nav",null,[U(re(ke),{class:dn(["nav-item",{"is-active":o.value==="projects"}]),to:"/projects"},{default:_e(()=>[U(re(qs),{size:20,"aria-hidden":"true"}),s[1]||(s[1]=b("span",null,"Projetos",-1))]),_:1},8,["class"]),U(re(ke),{class:dn(["nav-item",{"is-active":o.value==="quick"}]),to:"/quick-evaluation"},{default:_e(()=>[U(re(po),{size:20,"aria-hidden":"true"}),s[2]||(s[2]=b("span",null,"Avaliação rápida",-1))]),_:1},8,["class"]),U(re(ke),{class:dn(["nav-item",{"is-active":o.value==="rules"}]),to:"/rules"},{default:_e(()=>[U(re(po),{size:20,"aria-hidden":"true"}),s[3]||(s[3]=b("span",null,"Regras",-1))]),_:1},8,["class"])])]),b("main",{id:"conteudo",ref_key:"content",ref:a,class:"content",tabindex:"-1"},[gn(t.$slots,"default")],512),re(n).meta.hideBottomNav?be("",!0):(C(),G("nav",gh,[U(re(ke),{class:dn(["nav-item",{"is-active":o.value==="projects"}]),to:"/projects"},{default:_e(()=>[U(re(qs),{size:20,"aria-hidden":"true"}),s[4]||(s[4]=b("span",null,"Projetos",-1))]),_:1},8,["class"]),U(re(ke),{class:dn(["nav-item",{"is-active":o.value==="quick"}]),to:"/quick-evaluation"},{default:_e(()=>[U(re(po),{size:20,"aria-hidden":"true"}),s[5]||(s[5]=b("span",null,"Avaliação rápida",-1))]),_:1},8,["class"]),U(re(ke),{class:dn(["nav-item",{"is-active":o.value==="rules"}]),to:"/rules"},{default:_e(()=>[U(re(po),{size:20,"aria-hidden":"true"}),s[6]||(s[6]=b("span",null,"Regras",-1))]),_:1},8,["class"])]))]))}},_h={id:"confirm-popup",class:"confirm-popup",role:"alertdialog","aria-modal":"true","aria-labelledby":"confirm-popup-message"},yh={id:"confirm-popup-message",class:"confirm-popup__message"},Ah={class:"confirm-popup__actions"},Nh={__name:"ConfirmPopup",setup(e,{expose:n}){const o=Be(null),a=Be(null),r=Be(!1),t=Be("");let s=null,l=null,c="";function d(y){if(y.key==="Escape"){y.preventDefault(),m();return}if(y.key!=="Tab")return;const w=[o.value,a.value].filter(Boolean);if(!w.length)return;const H=w[0],P=w[w.length-1],Y=document.activeElement;if(!w.includes(Y)){y.preventDefault(),(y.shiftKey?P:H).focus();return}y.shiftKey&&Y===H?(y.preventDefault(),P.focus()):!y.shiftKey&&Y===P&&(y.preventDefault(),H.focus())}function u(){document.removeEventListener("keydown",d),document.body.style.overflow=c}function m({restoreFocus:y=!0}={}){if(!r.value)return;r.value=!1,u(),s?.removeAttribute("aria-expanded"),s?.removeAttribute("aria-controls");const w=s;s=null,l=null,y&&yn(()=>w?.focus?.())}async function f(y){m({restoreFocus:!1}),s=y.target,t.value=y.message,l=y.onAccept,r.value=!0,s?.setAttribute("aria-expanded","true"),s?.setAttribute("aria-controls","confirm-popup"),c=document.body.style.overflow,document.body.style.overflow="hidden",document.addEventListener("keydown",d),await yn(),o.value?.focus()}function v(y,w,H){return f({target:y.currentTarget,message:w,onAccept:H})}async function B(){const y=l,w=s;m({restoreFocus:!1}),await y?.(),yn(()=>{w?.isConnected?w.focus?.():document.getElementById("conteudo")?.focus()})}return n({open:f,confirm:v}),Kt(()=>{document.removeEventListener("keydown",d),document.body.style.overflow=c,s?.removeAttribute("aria-expanded"),s?.removeAttribute("aria-controls")}),(y,w)=>(C(),Pe(Rl,{to:"body"},[r.value?(C(),G("div",{key:0,class:"confirm-backdrop",onClick:w[1]||(w[1]=ao(H=>m(),["self"]))},[b("section",_h,[b("p",yh,le(t.value),1),b("div",Ah,[b("button",{ref_key:"cancelButton",ref:o,class:"confirm-popup__button confirm-popup__button--cancel",type:"button",onClick:w[0]||(w[0]=H=>m())}," Cancelar ",512),b("button",{ref_key:"acceptButton",ref:a,class:"confirm-popup__button confirm-popup__button--accept",type:"button",onClick:B}," Excluir ",512)])])])):be("",!0)]))}},xh={class:"welcome-popup",role:"dialog","aria-modal":"true","aria-labelledby":"welcome-title","aria-describedby":"welcome-description"},Bh={class:"welcome-popup__content"},Th={class:"welcome-popup__steps"},zc={__name:"WelcomePopup",emits:["close"],setup(e,{emit:n}){const o=n,a=Be(null),r=Be(null);let t="",s=null;function l(d){const u=[a.value,r.value].filter(Boolean);if(!u.length)return;const m=u[0],f=u[u.length-1],v=document.activeElement;if(!u.includes(v)){d.preventDefault(),(d.shiftKey?f:m).focus();return}d.shiftKey&&v===m?(d.preventDefault(),f.focus()):!d.shiftKey&&v===f&&(d.preventDefault(),m.focus())}function c(d){if(d.key==="Escape"){d.preventDefault(),o("close");return}d.key==="Tab"&&l(d)}return Dn(async()=>{s=document.activeElement,document.addEventListener("keydown",c),t=document.body.style.overflow,document.body.style.overflow="hidden",await yn(),a.value?.focus()}),Gt(()=>{document.removeEventListener("keydown",c),document.body.style.overflow=t,s?.isConnected&&s.focus?.()}),(d,u)=>(C(),Pe(Rl,{to:"body"},[b("div",{class:"welcome-backdrop",onClick:u[2]||(u[2]=ao(m=>o("close"),["self"]))},[b("section",xh,[b("button",{ref_key:"closeButton",ref:a,class:"welcome-popup__close",type:"button","aria-label":"Fechar apresentação",onClick:u[0]||(u[0]=m=>o("close"))}," × ",512),u[8]||(u[8]=b("div",{class:"welcome-popup__hero"},[b("h1",{id:"welcome-title"},"Acessibilidade começa com atenção aos detalhes."),b("p",{id:"welcome-description"}," Este espaço ajuda você a organizar e apoiar avaliações de acessibilidade em locais e ambientes. ")],-1)),b("div",Bh,[u[6]||(u[6]=b("h2",null,"Como funciona",-1)),b("div",Th,[b("article",null,[U(re(Fc),{size:22,"aria-hidden":"true"}),u[3]||(u[3]=b("div",null,[b("h3",null,"Organize seus locais"),b("p",null,"Crie projetos, separe os ambientes e cadastre os elementos que deseja avaliar.")],-1))]),b("article",null,[U(re(po),{size:22,"aria-hidden":"true"}),u[4]||(u[4]=b("div",null,[b("h3",null,"Faça as verificações"),b("p",null,"Preencha checklists e consulte resultados por elemento, ambiente ou projeto.")],-1))])]),u[7]||(u[7]=b("p",{class:"welcome-popup__note"}," Os resultados são um apoio à avaliação e não substituem a análise de um profissional nem a consulta às normas aplicáveis. ",-1)),b("button",{ref_key:"actionButton",ref:r,class:"button welcome-popup__action",type:"button",onClick:u[1]||(u[1]=m=>o("close"))},[u[5]||(u[5]=we(" Começar ",-1)),U(re(Zf),{size:18,"aria-hidden":"true"})],512)])])])]))}};var Rh=Object.defineProperty,Sh=Object.defineProperties,wh=Object.getOwnPropertyDescriptors,Ms=Object.getOwnPropertySymbols,Eh=Object.prototype.hasOwnProperty,Ch=Object.prototype.propertyIsEnumerable,Fs=(e,n,o)=>n in e?Rh(e,n,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[n]=o,Eo=(e,n)=>{for(var o in n||(n={}))Eh.call(n,o)&&Fs(e,o,n[o]);if(Ms)for(var o of Ms(n))Ch.call(n,o)&&Fs(e,o,n[o]);return e},zs=(e,n)=>Sh(e,wh(n));const kh={props:{autoscroll:{type:Boolean,default:!0}},watch:{typeAheadPointer(){this.autoscroll&&this.maybeAdjustScroll()},open(e){this.autoscroll&&e&&this.$nextTick(()=>this.maybeAdjustScroll())}},methods:{maybeAdjustScroll(){var e;const n=((e=this.$refs.dropdownMenu)==null?void 0:e.children[this.typeAheadPointer])||!1;if(n){const o=this.getDropdownViewport(),{top:a,bottom:r,height:t}=n.getBoundingClientRect();if(a<o.top)return this.$refs.dropdownMenu.scrollTop=n.offsetTop;if(r>o.bottom)return this.$refs.dropdownMenu.scrollTop=n.offsetTop-(o.height-t)}},getDropdownViewport(){return this.$refs.dropdownMenu?this.$refs.dropdownMenu.getBoundingClientRect():{height:0,top:0,bottom:0}}}},Ih={data(){return{typeAheadPointer:-1}},watch:{filteredOptions(){for(let e=0;e<this.filteredOptions.length;e++)if(this.selectable(this.filteredOptions[e])){this.typeAheadPointer=e;break}},open(e){e&&this.typeAheadToLastSelected()},selectedValue(){this.open&&this.typeAheadToLastSelected()}},methods:{typeAheadUp(){for(let e=this.typeAheadPointer-1;e>=0;e--)if(this.selectable(this.filteredOptions[e])){this.typeAheadPointer=e;break}},typeAheadDown(){for(let e=this.typeAheadPointer+1;e<this.filteredOptions.length;e++)if(this.selectable(this.filteredOptions[e])){this.typeAheadPointer=e;break}},typeAheadSelect(){const e=this.filteredOptions[this.typeAheadPointer];e&&this.selectable(e)&&this.select(e)},typeAheadToLastSelected(){this.typeAheadPointer=this.selectedValue.length!==0?this.filteredOptions.indexOf(this.selectedValue[this.selectedValue.length-1]):-1}}},Ph={props:{loading:{type:Boolean,default:!1}},data(){return{mutableLoading:!1}},watch:{search(){this.$emit("search",this.search,this.toggleLoading)},loading(e){this.mutableLoading=e}},methods:{toggleLoading(e=null){return e==null?this.mutableLoading=!this.mutableLoading:this.mutableLoading=e}}},ai=(e,n)=>{const o=e.__vccOpts||e;for(const[a,r]of n)o[a]=r;return o},Oh={},jh={xmlns:"http://www.w3.org/2000/svg",width:"10",height:"10"},Dh=b("path",{d:"M6.895455 5l2.842897-2.842898c.348864-.348863.348864-.914488 0-1.263636L9.106534.261648c-.348864-.348864-.914489-.348864-1.263636 0L5 3.104545 2.157102.261648c-.348863-.348864-.914488-.348864-1.263636 0L.261648.893466c-.348864.348864-.348864.914489 0 1.263636L3.104545 5 .261648 7.842898c-.348864.348863-.348864.914488 0 1.263636l.631818.631818c.348864.348864.914773.348864 1.263636 0L5 6.895455l2.842898 2.842897c.348863.348864.914772.348864 1.263636 0l.631818-.631818c.348864-.348864.348864-.914489 0-1.263636L6.895455 5z"},null,-1),Vh=[Dh];function Lh(e,n){return C(),G("svg",jh,Vh)}const qh=ai(Oh,[["render",Lh]]),$h={},Mh={xmlns:"http://www.w3.org/2000/svg",width:"14",height:"10"},Fh=b("path",{d:"M9.211364 7.59931l4.48338-4.867229c.407008-.441854.407008-1.158247 0-1.60046l-.73712-.80023c-.407008-.441854-1.066904-.441854-1.474243 0L7 5.198617 2.51662.33139c-.407008-.441853-1.066904-.441853-1.474243 0l-.737121.80023c-.407008.441854-.407008 1.158248 0 1.600461l4.48338 4.867228L7 10l2.211364-2.40069z"},null,-1),zh=[Fh];function Hh(e,n){return C(),G("svg",Mh,zh)}const Uh=ai($h,[["render",Hh]]),Hs={Deselect:qh,OpenIndicator:Uh},Kh={mounted(e,{instance:n}){if(n.appendToBody){const{height:o,top:a,left:r,width:t}=n.$refs.toggle.getBoundingClientRect();let s=window.scrollX||window.pageXOffset,l=window.scrollY||window.pageYOffset;e.unbindPosition=n.calculatePosition(e,n,{width:t+"px",left:s+r+"px",top:l+a+o+"px"}),document.body.appendChild(e)}},unmounted(e,{instance:n}){n.appendToBody&&(e.unbindPosition&&typeof e.unbindPosition=="function"&&e.unbindPosition(),e.parentNode&&e.parentNode.removeChild(e))}};function Gh(e){const n={};return Object.keys(e).sort().forEach(o=>{n[o]=e[o]}),JSON.stringify(n)}let Wh=0;function Yh(){return++Wh}const Jh={components:Eo({},Hs),directives:{appendToBody:Kh},mixins:[kh,Ih,Ph],compatConfig:{MODE:3},emits:["open","close","update:modelValue","search","search:compositionstart","search:compositionend","search:keydown","search:blur","search:focus","search:input","option:created","option:selecting","option:selected","option:deselecting","option:deselected"],props:{modelValue:{},components:{type:Object,default:()=>({})},options:{type:Array,default(){return[]}},disabled:{type:Boolean,default:!1},clearable:{type:Boolean,default:!0},deselectFromDropdown:{type:Boolean,default:!1},searchable:{type:Boolean,default:!0},multiple:{type:Boolean,default:!1},placeholder:{type:String,default:""},transition:{type:String,default:"vs__fade"},clearSearchOnSelect:{type:Boolean,default:!0},closeOnSelect:{type:Boolean,default:!0},label:{type:String,default:"label"},autocomplete:{type:String,default:"off"},reduce:{type:Function,default:e=>e},selectable:{type:Function,default:e=>!0},getOptionLabel:{type:Function,default(e){return typeof e=="object"?e.hasOwnProperty(this.label)?e[this.label]:console.warn(`[vue-select warn]: Label key "option.${this.label}" does not exist in options object ${JSON.stringify(e)}.
https://vue-select.org/api/props.html#getoptionlabel`):e}},getOptionKey:{type:Function,default(e){if(typeof e!="object")return e;try{return e.hasOwnProperty("id")?e.id:Gh(e)}catch(n){return console.warn(`[vue-select warn]: Could not stringify this option to generate unique key. Please provide'getOptionKey' prop to return a unique key for each option.
https://vue-select.org/api/props.html#getoptionkey`,e,n)}}},onTab:{type:Function,default:function(){this.selectOnTab&&!this.isComposing&&this.typeAheadSelect()}},taggable:{type:Boolean,default:!1},tabindex:{type:Number,default:null},pushTags:{type:Boolean,default:!1},filterable:{type:Boolean,default:!0},filterBy:{type:Function,default(e,n,o){return(n||"").toLocaleLowerCase().indexOf(o.toLocaleLowerCase())>-1}},filter:{type:Function,default(e,n){return e.filter(o=>{let a=this.getOptionLabel(o);return typeof a=="number"&&(a=a.toString()),this.filterBy(o,a,n)})}},createOption:{type:Function,default(e){return typeof this.optionList[0]=="object"?{[this.label]:e}:e}},resetOnOptionsChange:{default:!1,validator:e=>["function","boolean"].includes(typeof e)},clearSearchOnBlur:{type:Function,default:function({clearSearchOnSelect:e,multiple:n}){return e&&!n}},noDrop:{type:Boolean,default:!1},inputId:{type:String},dir:{type:String,default:"auto"},selectOnTab:{type:Boolean,default:!1},selectOnKeyCodes:{type:Array,default:()=>[13]},searchInputQuerySelector:{type:String,default:"[type=search]"},mapKeydown:{type:Function,default:(e,n)=>e},appendToBody:{type:Boolean,default:!1},calculatePosition:{type:Function,default(e,n,{width:o,top:a,left:r}){e.style.top=a,e.style.left=r,e.style.width=o}},dropdownShouldOpen:{type:Function,default({noDrop:e,open:n,mutableLoading:o}){return e?!1:n&&!o}},uid:{type:[String,Number],default:()=>Yh()}},data(){return{search:"",open:!1,isComposing:!1,pushedTags:[],_value:[],deselectButtons:[]}},computed:{isReducingValues(){return this.$props.reduce!==this.$options.props.reduce.default},isTrackingValues(){return typeof this.modelValue>"u"||this.isReducingValues},selectedValue(){let e=this.modelValue;return this.isTrackingValues&&(e=this.$data._value),e!=null&&e!==""?[].concat(e):[]},optionList(){return this.options.concat(this.pushTags?this.pushedTags:[])},searchEl(){return this.$slots.search?this.$refs.selectedOptions.querySelector(this.searchInputQuerySelector):this.$refs.search},scope(){const e={search:this.search,loading:this.loading,searching:this.searching,filteredOptions:this.filteredOptions};return{search:{attributes:Eo({disabled:this.disabled,placeholder:this.searchPlaceholder,tabindex:this.tabindex,readonly:!this.searchable,id:this.inputId,"aria-autocomplete":"list","aria-labelledby":`vs${this.uid}__combobox`,"aria-controls":`vs${this.uid}__listbox`,ref:"search",type:"search",autocomplete:this.autocomplete,value:this.search},this.dropdownOpen&&this.filteredOptions[this.typeAheadPointer]?{"aria-activedescendant":`vs${this.uid}__option-${this.typeAheadPointer}`}:{}),events:{compositionstart:()=>this.isComposing=!0,compositionend:()=>this.isComposing=!1,keydown:this.onSearchKeyDown,blur:this.onSearchBlur,focus:this.onSearchFocus,input:n=>this.search=n.target.value}},spinner:{loading:this.mutableLoading},noOptions:{search:this.search,loading:this.mutableLoading,searching:this.searching},openIndicator:{attributes:{ref:"openIndicator",role:"presentation",class:"vs__open-indicator"}},listHeader:e,listFooter:e,header:zs(Eo({},e),{deselect:this.deselect}),footer:zs(Eo({},e),{deselect:this.deselect})}},childComponents(){return Eo(Eo({},Hs),this.components)},stateClasses(){return{"vs--open":this.dropdownOpen,"vs--single":!this.multiple,"vs--multiple":this.multiple,"vs--searching":this.searching&&!this.noDrop,"vs--searchable":this.searchable&&!this.noDrop,"vs--unsearchable":!this.searchable,"vs--loading":this.mutableLoading,"vs--disabled":this.disabled}},searching(){return!!this.search},dropdownOpen(){return this.dropdownShouldOpen(this)},searchPlaceholder(){return this.isValueEmpty&&this.placeholder?this.placeholder:void 0},filteredOptions(){const e=[].concat(this.optionList);if(!this.filterable&&!this.taggable)return e;const n=this.search.length?this.filter(e,this.search,this):e;if(this.taggable&&this.search.length){const o=this.createOption(this.search);this.optionExists(o)||n.unshift(o)}return n},isValueEmpty(){return this.selectedValue.length===0},showClearButton(){return!this.multiple&&this.clearable&&!this.open&&!this.isValueEmpty}},watch:{options(e,n){const o=()=>typeof this.resetOnOptionsChange=="function"?this.resetOnOptionsChange(e,n,this.selectedValue):this.resetOnOptionsChange;!this.taggable&&o()&&this.clearSelection(),this.modelValue&&this.isTrackingValues&&this.setInternalValueFromOptions(this.modelValue)},modelValue:{immediate:!0,handler(e){this.isTrackingValues&&this.setInternalValueFromOptions(e)}},multiple(){this.clearSelection()},open(e){this.$emit(e?"open":"close")}},created(){this.mutableLoading=this.loading},methods:{setInternalValueFromOptions(e){Array.isArray(e)?this.$data._value=e.map(n=>this.findOptionFromReducedValue(n)):this.$data._value=this.findOptionFromReducedValue(e)},select(e){this.$emit("option:selecting",e),this.isOptionSelected(e)?this.deselectFromDropdown&&(this.clearable||this.multiple&&this.selectedValue.length>1)&&this.deselect(e):(this.taggable&&!this.optionExists(e)&&(this.$emit("option:created",e),this.pushTag(e)),this.multiple&&(e=this.selectedValue.concat(e)),this.updateValue(e),this.$emit("option:selected",e)),this.onAfterSelect(e)},deselect(e){this.$emit("option:deselecting",e),this.updateValue(this.selectedValue.filter(n=>!this.optionComparator(n,e))),this.$emit("option:deselected",e)},clearSelection(){this.updateValue(this.multiple?[]:null)},onAfterSelect(e){this.closeOnSelect&&(this.open=!this.open,this.searchEl.blur()),this.clearSearchOnSelect&&(this.search="")},updateValue(e){typeof this.modelValue>"u"&&(this.$data._value=e),e!==null&&(Array.isArray(e)?e=e.map(n=>this.reduce(n)):e=this.reduce(e)),this.$emit("update:modelValue",e)},toggleDropdown(e){const n=e.target!==this.searchEl;n&&e.preventDefault();const o=[...this.deselectButtons||[],this.$refs.clearButton];if(this.searchEl===void 0||o.filter(Boolean).some(a=>a.contains(e.target)||a===e.target)){e.preventDefault();return}this.open&&n?this.searchEl.blur():this.disabled||(this.open=!0,this.searchEl.focus())},isOptionSelected(e){return this.selectedValue.some(n=>this.optionComparator(n,e))},isOptionDeselectable(e){return this.isOptionSelected(e)&&this.deselectFromDropdown},optionComparator(e,n){return this.getOptionKey(e)===this.getOptionKey(n)},findOptionFromReducedValue(e){const n=a=>JSON.stringify(this.reduce(a))===JSON.stringify(e),o=[...this.options,...this.pushedTags].filter(n);return o.length===1?o[0]:o.find(a=>this.optionComparator(a,this.$data._value))||e},closeSearchOptions(){this.open=!1,this.$emit("search:blur")},maybeDeleteValue(){if(!this.searchEl.value.length&&this.selectedValue&&this.selectedValue.length&&this.clearable){let e=null;this.multiple&&(e=[...this.selectedValue.slice(0,this.selectedValue.length-1)]),this.updateValue(e)}},optionExists(e){return this.optionList.some(n=>this.optionComparator(n,e))},normalizeOptionForSlot(e){return typeof e=="object"?e:{[this.label]:e}},pushTag(e){this.pushedTags.push(e)},onEscape(){this.search.length?this.search="":this.searchEl.blur()},onSearchBlur(){if(this.mousedown&&!this.searching)this.mousedown=!1;else{const{clearSearchOnSelect:e,multiple:n}=this;this.clearSearchOnBlur({clearSearchOnSelect:e,multiple:n})&&(this.search=""),this.closeSearchOptions();return}if(this.search.length===0&&this.options.length===0){this.closeSearchOptions();return}},onSearchFocus(){this.open=!0,this.$emit("search:focus")},onMousedown(){this.mousedown=!0},onMouseUp(){this.mousedown=!1},onSearchKeyDown(e){const n=r=>(r.preventDefault(),!this.isComposing&&this.typeAheadSelect()),o={8:r=>this.maybeDeleteValue(),9:r=>this.onTab(),27:r=>this.onEscape(),38:r=>(r.preventDefault(),this.typeAheadUp()),40:r=>(r.preventDefault(),this.typeAheadDown())};this.selectOnKeyCodes.forEach(r=>o[r]=n);const a=this.mapKeydown(o,this);if(typeof a[e.keyCode]=="function")return a[e.keyCode](e)}}},Qh=["dir"],Xh=["id","aria-expanded","aria-owns"],Zh={ref:"selectedOptions",class:"vs__selected-options"},ev=["disabled","title","aria-label","onClick"],nv={ref:"actions",class:"vs__actions"},ov=["disabled"],av={class:"vs__spinner"},rv=["id"],tv=["id","aria-selected","onMouseover","onClick"],iv={key:0,class:"vs__no-options"},sv=we(" Sorry, no matching options. "),lv=["id"];function cv(e,n,o,a,r,t){const s=Zu("append-to-body");return C(),G("div",{dir:o.dir,class:dn(["v-select",t.stateClasses])},[gn(e.$slots,"header",En(Cn(t.scope.header))),b("div",{id:`vs${o.uid}__combobox`,ref:"toggle",class:"vs__dropdown-toggle",role:"combobox","aria-expanded":t.dropdownOpen.toString(),"aria-owns":`vs${o.uid}__listbox`,"aria-label":"Search for option",onMousedown:n[1]||(n[1]=l=>t.toggleDropdown(l))},[b("div",Zh,[(C(!0),G(Ee,null,fn(t.selectedValue,(l,c)=>gn(e.$slots,"selected-option-container",{option:t.normalizeOptionForSlot(l),deselect:t.deselect,multiple:o.multiple,disabled:o.disabled},()=>[(C(),G("span",{key:o.getOptionKey(l),class:"vs__selected"},[gn(e.$slots,"selected-option",En(Cn(t.normalizeOptionForSlot(l))),()=>[we(le(o.getOptionLabel(l)),1)]),o.multiple?(C(),G("button",{key:0,ref_for:!0,ref:d=>r.deselectButtons[c]=d,disabled:o.disabled,type:"button",class:"vs__deselect",title:`Deselect ${o.getOptionLabel(l)}`,"aria-label":`Deselect ${o.getOptionLabel(l)}`,onClick:d=>t.deselect(l)},[(C(),Pe(wr(t.childComponents.Deselect)))],8,ev)):be("",!0)]))])),256)),gn(e.$slots,"search",En(Cn(t.scope.search)),()=>[b("input",Bt({class:"vs__search"},t.scope.search.attributes,ed(t.scope.search.events)),null,16)])],512),b("div",nv,[kn(b("button",{ref:"clearButton",disabled:o.disabled,type:"button",class:"vs__clear",title:"Clear Selected","aria-label":"Clear Selected",onClick:n[0]||(n[0]=(...l)=>t.clearSelection&&t.clearSelection(...l))},[(C(),Pe(wr(t.childComponents.Deselect)))],8,ov),[[Oi,t.showClearButton]]),gn(e.$slots,"open-indicator",En(Cn(t.scope.openIndicator)),()=>[o.noDrop?be("",!0):(C(),Pe(wr(t.childComponents.OpenIndicator),En(Bt({key:0},t.scope.openIndicator.attributes)),null,16))]),gn(e.$slots,"spinner",En(Cn(t.scope.spinner)),()=>[kn(b("div",av,"Loading...",512),[[Oi,e.mutableLoading]])])],512)],40,Xh),U(Hd,{name:o.transition},{default:_e(()=>[t.dropdownOpen?kn((C(),G("ul",{id:`vs${o.uid}__listbox`,ref:"dropdownMenu",key:`vs${o.uid}__listbox`,class:"vs__dropdown-menu",role:"listbox",tabindex:"-1",onMousedown:n[2]||(n[2]=ao((...l)=>t.onMousedown&&t.onMousedown(...l),["prevent"])),onMouseup:n[3]||(n[3]=(...l)=>t.onMouseUp&&t.onMouseUp(...l))},[gn(e.$slots,"list-header",En(Cn(t.scope.listHeader))),(C(!0),G(Ee,null,fn(t.filteredOptions,(l,c)=>(C(),G("li",{id:`vs${o.uid}__option-${c}`,key:o.getOptionKey(l),role:"option",class:dn(["vs__dropdown-option",{"vs__dropdown-option--deselect":t.isOptionDeselectable(l)&&c===e.typeAheadPointer,"vs__dropdown-option--selected":t.isOptionSelected(l),"vs__dropdown-option--highlight":c===e.typeAheadPointer,"vs__dropdown-option--disabled":!o.selectable(l)}]),"aria-selected":c===e.typeAheadPointer?!0:null,onMouseover:d=>o.selectable(l)?e.typeAheadPointer=c:null,onClick:ao(d=>o.selectable(l)?t.select(l):null,["prevent","stop"])},[gn(e.$slots,"option",En(Cn(t.normalizeOptionForSlot(l))),()=>[we(le(o.getOptionLabel(l)),1)])],42,tv))),128)),t.filteredOptions.length===0?(C(),G("li",iv,[gn(e.$slots,"no-options",En(Cn(t.scope.noOptions)),()=>[sv])])):be("",!0),gn(e.$slots,"list-footer",En(Cn(t.scope.listFooter)))],40,rv)),[[s]]):(C(),G("ul",{key:1,id:`vs${o.uid}__listbox`,role:"listbox",style:{display:"none",visibility:"hidden"}},null,8,lv))]),_:3},8,["name"]),gn(e.$slots,"footer",En(Cn(t.scope.footer)))],10,Qh)}const uv=ai(Jh,[["render",cv]]),dv={class:"page-header"},mv={class:"page-header__row"},pv={class:"page-header__heading"},fv={key:0},Zn={__name:"PageHeader",props:{title:{type:String,required:!0},description:String,helpButton:Boolean},emits:["help"],setup(e){return(n,o)=>(C(),G("header",dv,[b("div",mv,[b("div",null,[b("div",pv,[b("h1",null,le(e.title),1),e.helpButton?(C(),G("button",{key:0,class:"page-header__help",type:"button",title:"Ajuda","aria-label":"Ajuda",onClick:o[0]||(o[0]=a=>n.$emit("help"))},[U(re(oi),{size:14,"aria-hidden":"true"})])):be("",!0)]),e.description?(C(),G("p",fv,le(e.description),1)):be("",!0)]),gn(n.$slots,"action")])]))}},hv={class:"empty-state"},vv={key:0,class:"empty-state__actions"},An={__name:"EmptyState",props:{title:String,text:String},setup(e){return(n,o)=>(C(),G("section",hv,[o[0]||(o[0]=b("div",{class:"empty-state__icon","aria-hidden":"true"},"+",-1)),b("h2",null,le(e.title),1),b("p",null,le(e.text),1),n.$slots.default?(C(),G("div",vv,[gn(n.$slots,"default")])):be("",!0)]))}};function Pt(e,n,o=""){const r=`${typeof n=="boolean"?n?"Sim":"Não":n}${o??""}`;switch(e){case">=":return`No mínimo ${r} (inclusive)`;case"<=":return`No máximo ${r} (inclusive)`;case">":return`Acima de ${r} (sem incluir o limite)`;case"<":return`Abaixo de ${r} (sem incluir o limite)`;case"==":case"eq":return`Igual a ${r}`;case"!=":return`Diferente de ${r}`;default:return r}}function gv(e){const n=String(e??"").replace(/[^\d.,]/g,""),o=n.search(/[.,]/);if(o===-1)return n;const a=n.slice(0,o),r=n[o],t=n.slice(o+1).replace(/[.,]/g,"");return`${a===""?"0":a}${r}${t}`}function Us(e){const n=String(e??"").trim().replace(",",".");if(!/^\d*\.?\d*$/.test(n)||n===""||n===".")return null;const o=Number(n);return Number.isFinite(o)?o:null}const bv={class:"back-link__label"},_v={class:"ruleset-grid"},yv={class:"field"},Av=["value"],Nv={class:"field"},xv={class:"ruleset-option"},Bv={class:"ruleset-title"},Tv={key:0,class:"ruleset-norma"},Rv={key:0,class:"field"},Sv={class:"field-name-input"},wv={id:"field-name-input__checkbox"},Ev={class:"fields-grid"},Cv={key:1},kv=["title","aria-label","aria-expanded","aria-controls","onClick"],Iv=["id"],Pv={key:4,class:"expected-value"},Ov=["onUpdate:modelValue"],jv=["onUpdate:modelValue"],Dv=["value"],Vv=["value","onInput"],Lv={class:"form-actions"},ut={__name:"ElementPage",props:{elementId:String,quick:Boolean},setup(e){const n=e,o=Me("services"),a=Me("builtInRuleSets"),r=ni(),t=Nr(),s=Be(null),l=Be(null),c=Be([]),d=Be([]),u=Be(null),m=Be("todas"),f=Be(localStorage.getItem("elementAutoName")==="true"),v=Be(null),B=wa({name:"",ruleSet:"",data:{}}),y=Le(()=>!n.elementId),w=Le(()=>d.value.find(ne=>ne.id===B.ruleSet)),H=Le(()=>{const ne={};for(const T of w.value?.regras??[]){const L=T.tipo==="conditional"?(()=>{const J=w.value?.parametros?.[T.parametro],pe=B.data[T.parametro],W=J?.tipo==="number"?Us(pe):pe;if(W==null||W==="")return[];const Te=(T.condicoes??[]).find(he=>he.quando&&da(W,he.quando.operador,he.quando.valor));return Te?.verificar?[Te.verificar]:[]})():T.operador&&T.valor!==void 0?[{...T,parametro:T.parametro}]:[];for(const J of L){if(!J.parametro||J.valor===void 0)continue;ne[J.parametro]??=[];const pe=Pt(J.operador,J.valor,w.value.parametros?.[J.parametro]?.unidade);ne[J.parametro].includes(pe)||ne[J.parametro].push(pe)}}return ne}),P=Le(()=>{const ne=d.value.map(T=>T.norma?.nome).filter(Boolean);return["todas",...new Set(ne)]}),Y=Le(()=>m.value==="todas"?d.value:d.value.filter(ne=>ne.norma?.nome===m.value));async function q(){n.quick&&o.quickEvaluationService.clear();const ne=await o.ruleSetService.list();d.value=[...a.map(L=>L.ruleSet),...ne],y.value||(s.value=await o.projectService.getElement(n.elementId));const T=s.value?.environmentId??r.query.environmentId;if(!(!n.quick&&(!T||!y.value&&!s.value))){if(n.quick||(l.value=await o.projectService.getEnvironment(T),c.value=await o.projectService.listElements(T)),s.value){const L=await o.evaluationService.listEvaluations(s.value.id);u.value=L[0]}B.name=s.value?.name??"",B.ruleSet=r.query.ruleSet??s.value?.rule??d.value[0]?.id??"",Object.assign(B.data,u.value?.data??{})}}function oe(){const ne={},T=w.value?.parametros??{};for(const[L,J]of Object.entries(T)){const pe=B.data[L];if(!(pe===""||pe===void 0||pe===null))if(J.tipo==="number"){const W=Us(pe);W!==null&&(ne[L]=W)}else J.tipo==="boolean"?ne[L]=pe===!0||pe==="true":ne[L]=pe}return ne}function F(ne,T){const L=T.target,J=L.value,pe=gv(J);if(B.data[ne]=pe,J===pe)return;const W=L.selectionStart??J.length,Te=J.slice(0,W).replace(/\D/g,"").length;L.value=pe;let he=0,Ue=0;for(;he<pe.length&&Ue<Te;)/\d/.test(pe[he])&&Ue++,he++;L.setSelectionRange(he,he)}async function x(){if(!w.value)return window.alert("Selecione um conjunto de regras.");const ne=oe(),T={name:B.name,type:w.value.nome,rule:w.value.id};try{const L=s.value?await o.projectService.updateElement(s.value.id,T):await o.projectService.createElement(l.value.id,T);await o.evaluationService.saveElementAnswers({elementId:L.id,checklist:w.value,data:ne}),t.push(`/projects/${l.value.projectId}/environments/${l.value.id}`)}catch(L){window.alert(L.message)}}function E(ne){if(!ne)return"";const T=new Set(c.value.filter(pe=>pe.id!==s.value?.id).map(pe=>pe.name));if(!T.has(ne))return ne;let L=1,J=`${ne} (${L})`;for(;T.has(J);)L++,J=`${ne} (${L})`;return J}fo([f,()=>B.ruleSet],([ne,T])=>{if(localStorage.setItem("elementAutoName",String(ne)),ne){const J=d.value.find(pe=>pe.id===T)?.nome??"";B.name=E(J)}});async function Z(){if(!w.value)return window.alert("Selecione um conjunto de regras.");const ne=oe();if(n.quick){try{o.quickEvaluationService.evaluate({name:B.name,checklist:w.value,data:ne}),t.push("/quick-evaluation/result")}catch(L){window.alert(L.message)}return}const T={name:B.name,type:w.value.nome,rule:w.value.id};try{const L=s.value?await o.projectService.updateElement(s.value.id,T):await o.projectService.createElement(l.value.id,T);await o.evaluationService.evaluateElement({elementId:L.id,checklist:w.value,data:ne}),t.push(`/elements/${L.id}/evaluation`)}catch(L){window.alert(L.message)}}fo(m,()=>{Y.value.some(T=>T.id===B.ruleSet)||(B.ruleSet=Y.value[0]?.id??"")}),fo(()=>B.ruleSet,()=>{const ne=Object.keys(w.value?.parametros??{});Object.keys(B.data).forEach(T=>{ne.includes(T)||delete B.data[T]})});function de(ne,T,L){const J=(L||"").toLowerCase().trim();if(!J)return!0;const pe=ne.nome?.toLowerCase().includes(J),W=ne.norma?.nome?.toLowerCase().includes(J),Te=ne.regras?.some(he=>he.nome?.toLowerCase().includes(J)||he.id?.toLowerCase().includes(J));return!!(pe||W||Te)}return Dn(q),(ne,T)=>e.quick||l.value?(C(),G(Ee,{key:0},[e.quick?be("",!0):(C(),Pe(re(ke),{key:0,class:"back-link",to:`/projects/${l.value.projectId}/environments/${l.value.id}`},{default:_e(()=>[U(re(Ra),{size:18,"aria-hidden":"true"}),b("span",bv,le(l.value.name),1)]),_:1},8,["to"])),U(Zn,{title:e.quick?"Avaliação rápida":y.value?"Novo elemento":s.value.name,description:"Escolha o tipo e informe as medidas observadas."},null,8,["title"]),b("form",{class:"form-card",onSubmit:T[4]||(T[4]=ao(()=>{},["prevent"]))},[b("div",_v,[b("label",yv,[T[6]||(T[6]=b("span",null,"Norma de referência",-1)),kn(b("select",{"onUpdate:modelValue":T[0]||(T[0]=L=>m.value=L)},[T[5]||(T[5]=b("option",{value:"todas"},"Todas as normas",-1)),(C(!0),G(Ee,null,fn(P.value.filter(L=>L!=="todas"),L=>(C(),G("option",{key:L,value:L},le(L),9,Av))),128))],512),[[jr,m.value]])]),b("label",Nv,[T[7]||(T[7]=b("span",null,"Tipo de elemento *",-1)),U(re(uv),{modelValue:B.ruleSet,"onUpdate:modelValue":T[1]||(T[1]=L=>B.ruleSet=L),options:Y.value,label:"nome",reduce:L=>L.id,"filter-by":de,placeholder:"Pesquise o elemento ou regra..."},{option:_e(L=>[b("div",xv,[b("span",Bv,le(L.nome),1),L.norma?.nome?(C(),G("small",Tv," ("+le(L.norma.nome)+") ",1)):be("",!0)])]),_:1},8,["modelValue","options","reduce"])])]),e.quick?be("",!0):(C(),G("div",Rv,[b("div",Sv,[T[9]||(T[9]=b("label",{for:"element-name"},"Nome do elemento *",-1)),b("div",wv,[kn(b("input",{type:"checkbox",id:"auto-name-chk","onUpdate:modelValue":T[2]||(T[2]=L=>f.value=L)},null,512),[[pm,f.value]]),T[8]||(T[8]=b("label",{for:"auto-name-chk"},"Auto Nomear",-1))])]),kn(b("input",{id:"element-name","onUpdate:modelValue":T[3]||(T[3]=L=>B.name=L),required:"",placeholder:"Ex.: Porta principal"},null,512),[[or,B.name]])])),T[13]||(T[13]=b("div",{class:"form-divider"},[b("strong",null,"Dados para avaliação"),b("span",null,"Campos definidos pelo conjunto de regras selecionado.")],-1)),b("div",Ev,[(C(!0),G(Ee,null,fn(w.value?.parametros,(L,J)=>(C(),G("label",{key:J,class:"field"},[b("span",null,[we(le(L.label??J)+" ",1),L.obrigatorio?(C(),G(Ee,{key:0},[we(" *")],64)):be("",!0),L.unidade?(C(),G("small",Cv," ("+le(L.unidade)+")",1)):be("",!0),L.definicao?(C(),G("button",{key:2,class:"parameter-help",type:"button",title:L.definicao,"aria-label":`Definição: ${L.label??J}`,"aria-expanded":v.value===J,"aria-controls":`parameter-definition-${J}`,onClick:ao(pe=>v.value=v.value===J?null:J,["stop"])},[U(re(oi),{size:16,"aria-hidden":"true"})],8,kv)):be("",!0),L.definicao&&v.value===J?(C(),G("small",{key:3,id:`parameter-definition-${J}`,class:"parameter-definition"},le(L.definicao),9,Iv)):be("",!0),H.value[J]?.length?(C(),G("small",Pv," Esperado: "+le(H.value[J].join(" ou ")),1)):be("",!0)]),L.tipo==="boolean"?kn((C(),G("select",{key:0,"onUpdate:modelValue":pe=>B.data[J]=pe},[...T[10]||(T[10]=[b("option",{value:""},"Não informado",-1),b("option",{value:!0},"Sim",-1),b("option",{value:!1},"Não",-1)])],8,Ov)),[[jr,B.data[J]]]):L.tipo==="select"?kn((C(),G("select",{key:1,"onUpdate:modelValue":pe=>B.data[J]=pe},[T[11]||(T[11]=b("option",{value:""},"Selecione",-1)),(C(!0),G(Ee,null,fn(L.opcoes??[],pe=>(C(),G("option",{key:pe,value:pe},le(pe),9,Dv))),128))],8,jv)),[[jr,B.data[J]]]):(C(),G("input",{key:2,value:B.data[J]??"",type:"text",inputmode:"decimal",autocomplete:"off",autocapitalize:"off",spellcheck:"false",onInput:pe=>F(J,pe)},null,40,Vv))]))),128))]),b("div",Lv,[U(re(ke),{class:"button button--ghost",to:e.quick?"/projects":`/projects/${l.value.projectId}/environments/${l.value.id}`},{default:_e(()=>[...T[12]||(T[12]=[we(" Cancelar ",-1)])]),_:1},8,["to"]),e.quick?be("",!0):(C(),G("button",{key:0,class:"button button--outline",type:"button",onClick:x}," Salvar e voltar ")),b("button",{class:"button",type:"button",onClick:Z},le(e.quick?"Avaliar":"Salvar e avaliar"),1)])],32)],64)):(C(),Pe(An,{key:1,title:"Elemento não encontrado",text:"Volte para o ambiente e tente novamente."},{default:_e(()=>[U(re(ke),{class:"button",to:"/projects"},{default:_e(()=>[...T[14]||(T[14]=[we("Projetos",-1)])]),_:1})]),_:1}))}},Uo={__name:"StatusBadge",props:{status:{type:String,default:"nao_avaliado"}},setup(e){const n={conforme:"Conforme",nao_conforme:"Não conforme",nao_avaliado:"Pendente",invalido:"Pendente",erro:"Pendente",atencao:"Atenção",manual:"Verificar"};return(o,a)=>(C(),G("span",{class:dn(["status",`status--${e.status}`])},le(n[e.status]??"Pendente"),3))}},qv={class:"evaluation-summary","aria-labelledby":"evaluation-summary-title"},$v={class:"evaluation-summary__heading"},Mv={id:"evaluation-summary-title"},Fv={class:"evaluation-summary__score"},zv={class:"evaluation-summary__cards"},Hv={class:"evaluation-summary__card evaluation-summary__card--conforme"},Uv={class:"evaluation-summary__card evaluation-summary__card--nao_conforme"},Kv={class:"evaluation-summary__card evaluation-summary__card--nao_avaliado"},ri={__name:"EvaluationSummary",props:{summary:{type:Object,required:!0},scope:{type:String,default:"elementos"}},setup(e){const n=e,o=Le(()=>n.summary.totalElements?n.summary.overallStatus==="conforme"?"Todos os elementos estão conformes":n.summary.overallStatus==="nao_conforme"?"Há elementos não conformes":"Há elementos pendentes de avaliação":"Nenhum elemento cadastrado");return(a,r)=>(C(),G("section",qv,[b("div",$v,[b("div",null,[b("h2",Mv,"Situação do "+le(e.scope),1),b("p",null,le(o.value),1)]),b("div",Fv,[b("strong",null,le(e.summary.score)+"%",1),r[0]||(r[0]=b("span",null,"conformes",-1))])]),b("div",zv,[b("div",Hv,[r[1]||(r[1]=b("span",null,"Conformes",-1)),b("strong",null,le(e.summary.conforme),1)]),b("div",Uv,[r[2]||(r[2]=b("span",null,"Não conformes",-1)),b("strong",null,le(e.summary.nao_conforme),1)]),b("div",Kv,[r[3]||(r[3]=b("span",null,"Pendentes",-1)),b("strong",null,le(e.summary.nao_avaliado),1)])]),e.summary.totalElements?(C(),Pe(Uo,{key:0,status:e.summary.overallStatus},null,8,["status"])):be("",!0)]))}},Gv={class:"back-link__label"},Wv={class:"project-header__actions"},Yv={key:1,class:"card-list collection-list"},Jv={class:"card__icon"},Qv={class:"card__menu"},Xv=["onClick"],Zv={__name:"EnvironmentPage",props:{projectId:String,environmentId:String},setup(e){const n=e,o=Me("services"),a=Me("confirmPopup"),r=Nr(),t=Be(null),s=Be(null),l=Be([]),c=Be(null);function d(y){return y.status==="nao_avaliado"?`/elements/${y.element.id}`:`/elements/${y.element.id}/evaluation`}function u(y,w){a.confirm(w,`Excluir o elemento ${y.name} e suas avaliações?`,()=>m(y))}async function m(y){await o.projectService.deleteElement(y.id),await B()}function f(y){a.confirm(y,`Excluir o ambiente “${t.value.name}” e seus elementos?`,v)}async function v(){await o.projectService.deleteEnvironment(t.value.id),r.push(`/projects/${t.value.projectId}`)}async function B(){if(t.value=await o.projectService.getEnvironment(n.environmentId),!t.value)return;s.value=await o.projectService.getProject(t.value.projectId);const y=await o.projectService.listElements(t.value.id),[w,H]=await Promise.all([Promise.all(y.map(async P=>{const Y=await o.evaluationService.listEvaluations(P.id);return{element:P,status:St(Y)}})),o.evaluationService.getEnvironmentSummary(t.value.id)]);l.value=w,c.value=H}return Dn(B),(y,w)=>t.value?(C(),G(Ee,{key:0},[U(re(ke),{class:"back-link",to:`/projects/${t.value.projectId}`},{default:_e(()=>[U(re(Ra),{size:18,"aria-hidden":"true"}),b("span",Gv,le(s.value?.name??"Projeto"),1)]),_:1},8,["to"]),U(Zn,{title:t.value.name},{action:_e(()=>[b("div",Wv,[l.value.length?(C(),Pe(re(ke),{key:0,class:"button",to:{path:"/elements/new",query:{environmentId:t.value.id}}},{default:_e(()=>[U(re($s),{size:18,"aria-hidden":"true"}),w[0]||(w[0]=we("Adicionar elemento ",-1))]),_:1},8,["to"])):be("",!0),b("button",{class:"icon-button icon-button--danger",title:"Excluir","aria-label":"Excluir ambiente",onClick:f},[U(re(Ho),{size:18,"aria-hidden":"true"})])])]),_:1},8,["title"]),c.value&&l.value.length?(C(),Pe(ri,{key:0,summary:c.value,scope:"ambiente"},null,8,["summary"])):be("",!0),l.value.length?(C(),G("div",Yv,[(C(!0),G(Ee,null,fn(l.value,H=>(C(),G("article",{key:H.element.id,class:"card card--interactive"},[U(re(ke),{class:"card__link",to:d(H)},{default:_e(()=>[b("span",Jv,[U(re(nh),{size:22,"aria-hidden":"true"})]),b("div",null,[b("h2",null,le(H.element.name),1),b("p",null,le(H.element.type),1)]),U(Uo,{status:H.status},null,8,["status"]),U(re(Ta),{size:20,class:"chevron","aria-hidden":"true"})]),_:2},1032,["to"]),b("div",Qv,[b("button",{class:"icon-button icon-button--danger",title:"Excluir","aria-label":"Excluir",onClick:P=>u(H.element,P)},[U(re(Ho),{size:18,"aria-hidden":"true"})],8,Xv)])]))),128))])):be("",!0),l.value.length?be("",!0):(C(),Pe(An,{key:2,class:"collection-empty",title:"Nenhum elemento ainda",text:"Cadastre portas, rampas, sanitários e outros itens para avaliar."},{default:_e(()=>[U(re(ke),{class:"button",to:{path:"/elements/new",query:{environmentId:t.value.id}}},{default:_e(()=>[U(re($s),{size:18,"aria-hidden":"true"}),w[1]||(w[1]=we("Adicionar elemento ",-1))]),_:1},8,["to"])]),_:1}))],64)):(C(),Pe(An,{key:1,title:"Ambiente não encontrado",text:"Ele pode ter sido removido."},{default:_e(()=>[U(re(ke),{class:"button",to:"/projects"},{default:_e(()=>[...w[2]||(w[2]=[we("Projetos",-1)])]),_:1})]),_:1}))}},e0={class:"back-link__label"},n0={key:0,class:"project-header__actions"},o0={class:"result-summary__counts","aria-label":"Resumo das regras"},a0={key:0,class:"result-summary__pending"},r0={class:"results"},t0={class:"result-row__content"},i0={key:0},s0={key:0,class:"result-values"},l0={key:0,class:"result-values__context"},c0={key:1,class:"result-values__item"},u0={key:2,class:"result-values__item result-values__item--expected"},d0={key:1,class:"result-row__reference"},m0={key:1,class:"results-action"},Ks={__name:"EvaluationPage",props:{elementId:String,quick:Boolean},setup(e){const n=e,o=Me("services"),a=Me("builtInRuleSets"),r=Me("confirmPopup"),t=Nr(),s=Be(null),l=Be(null),c=Be(null),d=Be([]),u=Le(()=>l.value?`/projects/${l.value.projectId}/environments/${l.value.id}`:"/projects"),m=Le(()=>c.value?.result??[]),f=Le(()=>d.value.find(x=>x.id===s.value?.rule));function v(x){const E=f.value?.regras?.find(he=>he.id===x.id),Z=c.value?.data??{},de=f.value?.parametros??{};let ne=x.parametro??E?.parametro,T=x.operador??E?.operador,L=x.valorEsperado??E?.valor,J="";if(E?.tipo==="conditional"){const he=Z[E.parametro],Ue=(E.condicoes??[]).find(Ke=>Ke.quando&&da(he,Ke.quando.operador,Ke.quando.valor));if(Ue?.verificar){ne=Ue.verificar.parametro,T=Ue.verificar.operador,L=Ue.verificar.valor;const Ke=de[E.parametro];J=`${Ke?.label??E.parametro}: ${Pt(Ue.quando.operador,Ue.quando.valor,Ke?.unidade)}`}}const pe=de[ne]??{},W=x.valorInformado!==void 0?x.valorInformado:Z[ne],Te=L!==void 0&&T!==void 0;return{parameterLabel:pe.label??ne,actual:typeof W=="boolean"?W?"Sim":"Não":W,unit:typeof W=="boolean"?"":x.unidade??pe.unidade??"",expected:Te?Pt(T,L,x.unidade??pe.unidade):"",conditionalDescription:J}}const B=Le(()=>m.value.filter(x=>["nao_conforme","erro","invalido"].includes(x.status)).length),y=Le(()=>m.value.filter(x=>["nao_avaliado","manual","atencao"].includes(x.status)).length),w=Le(()=>m.value.length-B.value-y.value),H=Le(()=>m.value.length?B.value>0?"nao_conforme":y.value>0?"nao_avaliado":"conforme":"nao_avaliado"),P=Le(()=>{switch(H.value){case"conforme":return"Elemento conforme";case"nao_conforme":return"Há itens não conformes";default:return"Avaliação pendente"}});function Y(x){return x?new Intl.DateTimeFormat("pt-BR",{dateStyle:"medium",timeStyle:"short"}).format(new Date(x)):""}async function q(){const x=await o.ruleSetService.list();if(d.value=[...(a??[]).map(E=>E.ruleSet),...x],n.quick){const E=o.quickEvaluationService.getCurrent();s.value=E?.element??null,c.value=E?.evaluation??null;return}if(s.value=await o.projectService.getElement(n.elementId),s.value){l.value=await o.projectService.getEnvironment(s.value.environmentId);const E=await o.evaluationService.listEvaluations(s.value.id);c.value=E[0]??null}}function oe(x){r.confirm(x,`Excluir o elemento ${s.value.name} e suas avaliações?`,F)}async function F(){await o.projectService.deleteElement(s.value.id),t.push(u.value)}return Dn(q),(x,E)=>s.value&&c.value?(C(),G(Ee,{key:0},[e.quick?be("",!0):(C(),Pe(re(ke),{key:0,class:"back-link",to:u.value},{default:_e(()=>[U(re(Ra),{size:18,"aria-hidden":"true"}),b("span",e0,le(l.value?.name??s.value.name),1)]),_:1},8,["to"])),U(Zn,{title:s.value.name,description:`Avaliação realizada em ${Y(c.value.evaluatedAt)}`},{action:_e(()=>[e.quick?be("",!0):(C(),G("div",n0,[U(re(ke),{class:"button button--outline",to:`/elements/${s.value.id}`},{default:_e(()=>[U(re(mh),{size:18,"aria-hidden":"true"}),E[0]||(E[0]=we("Editar elemento ",-1))]),_:1},8,["to"]),b("button",{class:"icon-button icon-button--danger",title:"Excluir","aria-label":"Excluir elemento",onClick:oe},[U(re(Ho),{size:18,"aria-hidden":"true"})])]))]),_:1},8,["title","description"]),b("section",{class:dn(["result-summary",`result-summary--${H.value}`])},[U(Uo,{status:H.value},null,8,["status"]),b("h2",null,le(P.value),1),b("div",o0,[b("span",null,[b("strong",null,le(w.value),1),E[1]||(E[1]=we(" conformes",-1))]),b("span",null,[b("strong",null,le(B.value),1),E[2]||(E[2]=we(" não conformes",-1))]),b("span",null,[b("strong",null,le(y.value),1),E[3]||(E[3]=we(" pendentes ou para verificar",-1))])]),y.value?(C(),G("div",a0,[E[5]||(E[5]=b("span",null,"Há regras pendentes ou para verificar.",-1)),e.quick?be("",!0):(C(),Pe(re(ke),{key:0,class:"text-button",to:`/elements/${s.value.id}`},{default:_e(()=>[...E[4]||(E[4]=[we(" Editar elemento ",-1)])]),_:1},8,["to"]))])):be("",!0)],2),b("section",r0,[E[8]||(E[8]=b("h2",null,"Regras avaliadas",-1)),(C(!0),G(Ee,null,fn(m.value,Z=>(C(),G("article",{key:Z.id,class:dn(["result-row",`result-row--${Z.status}`])},[b("div",t0,[U(Uo,{status:Z.status},null,8,["status"]),b("h3",null,le(Z.nome??Z.id),1),Z.mensagem?(C(),G("p",i0,le(Z.mensagem),1)):be("",!0),(C(!0),G(Ee,null,fn([v(Z)],de=>(C(),G("div",{key:Z.id,class:"result-row__details"},[de.actual!==void 0||de.expected?(C(),G("div",s0,[de.conditionalDescription?(C(),G("div",l0,[E[6]||(E[6]=b("span",null,"Condição desta regra",-1)),b("strong",null,le(de.conditionalDescription),1)])):be("",!0),de.actual!==void 0?(C(),G("div",c0,[b("span",null,"Valor informado · "+le(de.parameterLabel),1),b("strong",null,[we(le(de.actual),1),de.unit?(C(),G(Ee,{key:0},[we(le(de.unit),1)],64)):be("",!0)])])):be("",!0),de.expected?(C(),G("div",u0,[E[7]||(E[7]=b("span",null,"Critério esperado",-1)),b("strong",null,le(de.expected),1)])):be("",!0)])):be("",!0)]))),128)),Z.referencia?(C(),G("small",d0,"Referência: "+le(Z.referencia),1)):be("",!0)])],2))),128))]),e.quick?(C(),G("div",m0,[U(re(ke),{class:"button",to:"/quick-evaluation"},{default:_e(()=>[...E[9]||(E[9]=[we(" Nova avaliação rápida ",-1)])]),_:1})])):be("",!0)],64)):s.value?(C(),G(Ee,{key:1},[e.quick?be("",!0):(C(),Pe(re(ke),{key:0,class:"back-link",to:u.value},{default:_e(()=>[U(re(Ra),{size:18,"aria-hidden":"true"}),E[10]||(E[10]=b("span",{class:"back-link__label"},"Elemento",-1))]),_:1},8,["to"])),U(An,{title:"Ainda não há avaliação",text:"Preencha os dados do elemento para executar as regras."},{default:_e(()=>[U(re(ke),{class:"button",to:e.quick?"/quick-evaluation":`/elements/${s.value.id}`},{default:_e(()=>[we(le(e.quick?"Nova avaliação rápida":"Avaliar elemento"),1)]),_:1},8,["to"])]),_:1})],64)):(C(),Pe(An,{key:2,title:"Avaliação não encontrada",text:e.quick?"Inicie uma avaliação rápida para ver o resultado.":"O elemento pode ter sido removido."},{default:_e(()=>[U(re(ke),{class:"button",to:e.quick?"/quick-evaluation":"/projects"},{default:_e(()=>[we(le(e.quick?"Avaliação rápida":"Projetos"),1)]),_:1},8,["to"])]),_:1},8,["text"]))}},p0={class:"project-header__actions"},f0={class:"collection-form__heading"},h0={class:"field"},v0={class:"environments-summary-container"},g0={key:0,class:"card-grid-environment collection-list"},b0={class:"card__icon"},_0={class:"card__menu"},y0=["onClick"],A0=["onClick"],N0={__name:"ProjectPage",props:{projectId:String},setup(e){const n=e,o=Me("services"),a=Me("confirmPopup"),r=Be(null),t=Be([]),s=Be(""),l=Be(null),c=Be(null),d=Be(null),u=Be(null),m=Be(null);function f(){const q=m.value;m.value=null,yn(()=>{q?.isConnected&&q.focus()})}async function v(){r.value=await o.projectService.getProject(n.projectId),r.value&&([t.value,c.value]=await Promise.all([o.projectService.listEnvironments(n.projectId),o.evaluationService.getProjectSummary(n.projectId)]))}async function B(q){m.value=q?.currentTarget??null,l.value={},s.value="",await yn(),d.value?.scrollIntoView({behavior:"smooth"}),u.value?.focus({preventScroll:!0}),u.value?.select()}async function y(q,oe){m.value=oe?.currentTarget??null,l.value=q,s.value=q.name,await yn(),u.value?.focus(),u.value?.select()}function w(){l.value=null,s.value="",f()}async function H(){l.value?.id?await o.projectService.renameEnvironment(l.value.id,s.value):await o.projectService.createEnvironment(n.projectId,{name:s.value}),w(),await v()}function P(q,oe){a.open({target:oe.currentTarget,message:`Excluir o ambiente “${q.name}” e seus elementos?`,onAccept:()=>Y(q)})}async function Y(q){const oe=await o.projectService.listElements(q.id);for(const F of oe){const x=await o.evaluationService.listEvaluations(F.id);for(const E of x)await o.repositories.evaluationRepository.delete(E.id);await o.repositories.elementRepository.delete(F.id)}await o.repositories.environmentRepository.delete(q.id),await v()}return Dn(v),(q,oe)=>r.value?(C(),G(Ee,{key:0},[U(Zn,{title:r.value.name,description:`${t.value.length} ambiente${t.value.length===1?"":"s"} cadastrado${t.value.length===1?"":"s"}.
      
${r.value.description}`},{action:_e(()=>[b("div",p0,[t.value.length?(C(),Pe(re(ke),{key:0,class:"button button--outline",to:`/projects/${e.projectId}/status`},{default:_e(()=>[U(re(po),{size:18,"aria-hidden":"true"}),oe[3]||(oe[3]=we("Status detalhado ",-1))]),_:1},8,["to"])):be("",!0),t.value.length?(C(),G("button",{key:1,class:"button",onClick:oe[0]||(oe[0]=F=>B(F))},[U(re(rr),{size:18,"aria-hidden":"true"}),oe[4]||(oe[4]=we("Novo ambiente",-1))])):be("",!0)])]),_:1},8,["title","description"]),l.value?(C(),G("form",{key:0,class:"form-card collection-form",onSubmit:ao(H,["prevent"]),onKeydown:uc(w,["esc"]),ref_key:"inputCreate",ref:d},[b("div",f0,[b("h2",null,le(l.value.id?"Nome do ambiente":"Novo ambiente"),1),oe[5]||(oe[5]=b("p",null,"Use um nome que ajude a identificar este espaço no projeto.",-1))]),b("label",h0,[oe[6]||(oe[6]=b("span",null,"Nome do ambiente",-1)),kn(b("input",{ref_key:"nameInput",ref:u,"onUpdate:modelValue":oe[1]||(oe[1]=F=>s.value=F),required:""},null,512),[[or,s.value]])]),b("div",{class:"form-actions"},[b("button",{class:"button button--ghost",type:"button",onClick:w}," Cancelar "),oe[7]||(oe[7]=b("button",{class:"button",type:"submit"},"Salvar",-1))])],544)):be("",!0),c.value&&t.value.length?(C(),Pe(ri,{key:1,summary:c.value,scope:"projeto"},null,8,["summary"])):be("",!0),b("div",v0,[t.value.length?(C(),G("div",g0,[(C(!0),G(Ee,null,fn(t.value,F=>(C(),G("article",{key:F.id,class:"card-environment"},[U(re(ke),{class:"card__link",to:`/projects/${r.value.id}/environments/${F.id}`},{default:_e(()=>[b("span",b0,[U(re(uh),{size:22,"aria-hidden":"true"})]),b("div",null,[b("h2",null,le(F.name),1),oe[8]||(oe[8]=b("p",null,"Ambiente",-1))])]),_:2},1032,["to"]),b("div",_0,[b("button",{class:"text-button",onClick:x=>y(F,x)}," Editar ",8,y0),b("button",{class:"icon-button icon-button--danger",title:"Excluir","aria-label":"Excluir",onClick:x=>P(F,x)},[U(re(Ho),{size:18,"aria-hidden":"true"})],8,A0)])]))),128))])):be("",!0),!t.value.length&&!l.value?(C(),Pe(An,{key:1,class:"collection-empty",title:"Nenhum ambiente ainda",text:"Adicione espaços como entrada, banheiro ou circulação."},{default:_e(()=>[b("button",{class:"button",onClick:oe[2]||(oe[2]=F=>B(F))},[U(re(rr),{size:18,"aria-hidden":"true"}),oe[9]||(oe[9]=we("Novo ambiente",-1))])]),_:1})):be("",!0)])],64)):(C(),Pe(An,{key:1,title:"Projeto não encontrado",text:"Ele pode ter sido removido."},{default:_e(()=>[U(re(ke),{class:"button",to:"/projects"},{default:_e(()=>[...oe[10]||(oe[10]=[we("Voltar aos projetos",-1)])]),_:1})]),_:1}))}},x0={key:0,class:"muted",role:"status"},B0={class:"back-link__label"},T0={key:0,class:"alert alert--error",role:"alert"},R0={key:2,class:"project-status","aria-label":"Status por ambiente"},S0={class:"project-status__heading"},w0=["aria-label"],E0={class:"status status--conforme"},C0={class:"status status--nao_conforme"},k0={class:"status status--nao_avaliado"},I0={key:1,class:"project-status__elements"},P0={class:"project-status__element-name"},O0={key:2,class:"muted"},j0={__name:"ProjectStatusPage",props:{projectId:String},setup(e){const n=e,o=Me("services"),a=Be(null),r=Be(null),t=Be(!0),s=Be("");async function l(){try{a.value=await o.projectService.getProject(n.projectId),a.value&&(r.value=await o.evaluationService.getProjectStatus(n.projectId))}catch(u){s.value=u.message}finally{t.value=!1}}function c(u){return u.status==="nao_avaliado"?`/elements/${u.element.id}`:`/elements/${u.element.id}/evaluation`}function d(u,m,f){return`${u} ${u===1?m:f}`}return Dn(l),(u,m)=>t.value?(C(),G("p",x0,"Carregando…")):a.value&&r.value?(C(),G(Ee,{key:1},[U(re(ke),{class:"back-link",to:`/projects/${e.projectId}`},{default:_e(()=>[U(re(Ra),{size:18,"aria-hidden":"true"}),b("span",B0,le(a.value.name),1)]),_:1},8,["to"]),U(Zn,{title:"Status do projeto",description:`${a.value.name} · ${d(r.value.environments.length,"ambiente","ambientes")}`},null,8,["description"]),s.value?(C(),G("p",T0,le(s.value),1)):be("",!0),r.value.summary.totalElements?(C(),Pe(ri,{key:1,summary:r.value.summary,scope:"projeto"},null,8,["summary"])):be("",!0),r.value.environments.length?(C(),G("section",R0,[(C(!0),G(Ee,null,fn(r.value.environments,f=>(C(),G("article",{key:f.environment.id,class:"card project-status__environment"},[b("header",S0,[b("div",null,[b("h2",null,le(f.environment.name),1),b("p",null,le(d(f.elements.length,"elemento","elementos")),1)]),U(Uo,{status:f.summary.overallStatus},null,8,["status"])]),f.elements.length?(C(),G("div",{key:0,class:"project-status__counts","aria-label":`Situação dos elementos de ${f.environment.name}`},[b("span",E0,le(f.summary.conforme)+" conforme"+le(f.summary.conforme===1?"":"s"),1),b("span",C0,le(f.summary.nao_conforme)+" não conforme"+le(f.summary.nao_conforme===1?"":"s"),1),b("span",k0,le(f.summary.nao_avaliado)+" pendente"+le(f.summary.nao_avaliado===1?"":"s"),1)],8,w0)):be("",!0),f.elements.length?(C(),G("ul",I0,[(C(!0),G(Ee,null,fn(f.elements,v=>(C(),G("li",{key:v.element.id},[U(re(ke),{class:"project-status__element",to:c(v)},{default:_e(()=>[b("span",P0,le(v.element.name),1),U(Uo,{status:v.status},null,8,["status"]),U(re(Ta),{size:18,class:"chevron","aria-hidden":"true"})]),_:2},1032,["to"])]))),128))])):(C(),G("p",O0,"Nenhum elemento cadastrado neste ambiente.")),U(re(ke),{class:"text-button",to:`/projects/${e.projectId}/environments/${f.environment.id}`},{default:_e(()=>[...m[0]||(m[0]=[we(" Abrir ambiente ",-1)])]),_:1},8,["to"])]))),128))])):(C(),Pe(An,{key:3,class:"collection-empty",title:"Nenhum ambiente cadastrado",text:"Crie um ambiente e cadastre elementos para acompanhar o status do projeto."},{default:_e(()=>[U(re(ke),{class:"button",to:`/projects/${e.projectId}`},{default:_e(()=>[...m[1]||(m[1]=[we("Abrir projeto",-1)])]),_:1},8,["to"])]),_:1}))],64)):a.value?(C(),Pe(An,{key:2,title:"Não foi possível carregar o status",text:s.value||"Tente novamente mais tarde."},{default:_e(()=>[U(re(ke),{class:"button",to:`/projects/${e.projectId}`},{default:_e(()=>[...m[2]||(m[2]=[we("Abrir projeto",-1)])]),_:1},8,["to"])]),_:1},8,["text"])):(C(),Pe(An,{key:3,title:"Projeto não encontrado",text:"Ele pode ter sido removido."},{default:_e(()=>[U(re(ke),{class:"button",to:"/projects"},{default:_e(()=>[...m[3]||(m[3]=[we("Projetos",-1)])]),_:1})]),_:1}))}},D0={class:"collection-form__heading"},V0={class:"fields-grid"},L0={class:"field"},q0={class:"field"},$0={key:0,class:"muted"},M0={key:1,class:"card-list collection-list"},F0={class:"card__icon"},z0={key:0},H0={class:"card__menu"},U0=["onClick"],K0=["onClick"],G0={__name:"ProjectsPage",setup(e){const n=Me("services"),o=Me("confirmPopup"),a=Be([]),r=Be(""),t=Be(""),s=Be(null),l=Be(""),c=Be(!1),d=Be(null),u=Be(null);function m(){return yn(()=>{d.value?.focus(),d.value?.select()})}function f(){const F=u.value;u.value=null,yn(()=>{F?.isConnected&&F.focus()})}function v(){c.value=!0}async function B(){a.value=await n.projectService.listProjects()}async function y(F){u.value=F?.currentTarget??null,s.value={},r.value="",t.value="",l.value="",await m()}async function w(F,x){u.value=x?.currentTarget??null,s.value=F,r.value=F.name,l.value="",t.value=F.description||"",await m()}function H(){s.value=null,r.value="",t.value="",l.value="",f()}async function P(){try{l.value="",s.value?.id?await n.projectService.updateProject(s.value.id,{name:r.value,description:t.value}):await n.projectService.createProject({name:r.value,description:t.value}),r.value="",t.value="",s.value=null,await B(),f()}catch(F){l.value=F.message}}function Y(F,x){o.confirm(x,`Excluir o projeto “${F.name}” e seus dados?`,()=>q(F))}async function q(F){await n.projectService.deleteProject(F.id),await B()}function oe(F){return new Intl.DateTimeFormat("pt-BR",{dateStyle:"medium"}).format(new Date(F))}return Dn(B),(F,x)=>(C(),G(Ee,null,[U(Zn,{title:"Projetos",description:"Acompanhe seus locais e avaliações.",helpButton:"",onHelp:v},{action:_e(()=>[a.value.length?(C(),G("button",{key:0,class:"button",onClick:x[0]||(x[0]=E=>y(E))},[U(re(rr),{size:18,"aria-hidden":"true"}),x[5]||(x[5]=we("Novo projeto",-1))])):be("",!0)]),_:1}),s.value?(C(),G("form",{key:0,class:"form-card collection-form",onSubmit:ao(P,["prevent"]),onKeydown:uc(H,["esc"])},[b("div",D0,[b("h2",null,le(s.value.id?"Dados do projeto":"Novo projeto"),1),x[6]||(x[6]=b("p",null,"Defina um nome e, se quiser, uma breve descrição para este local.",-1))]),b("div",V0,[b("label",L0,[x[7]||(x[7]=b("span",null,"Nome do projeto",-1)),kn(b("input",{ref_key:"nameInput",ref:d,"onUpdate:modelValue":x[1]||(x[1]=E=>r.value=E),required:""},null,512),[[or,r.value]])]),b("label",q0,[x[8]||(x[8]=b("span",null,[we("Descrição "),b("small",null,"(opcional)")],-1)),kn(b("input",{"onUpdate:modelValue":x[2]||(x[2]=E=>t.value=E)},null,512),[[or,t.value]])])]),l.value?(C(),G("p",$0,le(l.value),1)):be("",!0),b("div",{class:"form-actions"},[b("button",{class:"button button--ghost",type:"button",onClick:H}," Cancelar "),x[9]||(x[9]=b("button",{class:"button",type:"submit"},"Salvar",-1))])],32)):be("",!0),a.value.length?(C(),G("div",M0,[(C(!0),G(Ee,null,fn(a.value,E=>(C(),G("article",{key:E.id,class:"card project-card"},[U(re(ke),{class:"card__link",to:`/projects/${E.id}`},{default:_e(()=>[b("span",F0,[U(re(Fc),{size:22,"aria-hidden":"true"})]),b("div",null,[b("h2",null,le(E.name),1),b("p",null,"Atualizado em "+le(oe(E.updatedAt)),1),E.description?(C(),G("p",z0,le(E.description),1)):be("",!0)]),U(re(Ta),{size:20,class:"chevron","aria-hidden":"true"})]),_:2},1032,["to"]),b("div",H0,[b("button",{class:"text-button",onClick:Z=>w(E,Z)}," Editar ",8,U0),b("button",{class:"icon-button icon-button--danger",title:"Excluir","aria-label":"Excluir",onClick:Z=>Y(E,Z)},[U(re(Ho),{size:18,"aria-hidden":"true"})],8,K0)])]))),128))])):s.value?be("",!0):(C(),Pe(An,{key:2,class:"collection-empty",title:"Comece por um projeto",text:"Organize as avaliações de acessibilidade por obra ou local."},{default:_e(()=>[b("button",{class:"button",onClick:x[3]||(x[3]=E=>y(E))},[U(re(rr),{size:18,"aria-hidden":"true"}),x[10]||(x[10]=we("Novo projeto",-1))])]),_:1})),c.value?(C(),Pe(zc,{key:3,onClose:x[4]||(x[4]=E=>c.value=!1)})):be("",!0)],64))}};function W0(e=""){const n=e.replace(/^(\.\.\/|\.\/|\/)+/,"").split("/");return n.length>1?n.slice(0,-1).join("/"):""}function Y0(e,n){const[o]=e,a=o?.norma;return a?.nome?`${a.nome}${a.versao?` · ${a.versao}`:""}`:n.split("/").at(-1)?.replaceAll("-"," ")??"Regras padrão"}function J0(e){const n=new Map;for(const o of e){const a=W0(o.path)||o.ruleSet.id,r=n.get(a)??{id:a,source:"standard",ruleSets:[]};r.ruleSets.push(o.ruleSet),n.set(a,r)}return[...n.values()].map(o=>({...o,nome:Y0(o.ruleSets,o.id)})).sort((o,a)=>o.nome.localeCompare(a.nome))}function Q0(e){const n=new Map;for(const o of e){const a=o.grupo,r=a?.id??o.id,t=n.get(r)??{id:r,nome:a?.nome??o.nome,source:"user",ruleSets:[]};t.ruleSets.push(o),n.set(r,t)}return[...n.values()].sort((o,a)=>o.nome.localeCompare(a.nome))}const X0={class:"documentation"},Z0={class:"documentation__intro"},eg={class:"documentation__icon"},ng=["href"],og={class:"documentation__section"},ag={key:0,class:"muted",role:"status"},rg={key:0,class:"alert alert--error",role:"alert"},tg={class:"rules-section rules-section--first"},ig={class:"card-list ruleset-list"},sg={key:0,class:"ruleset-card__actions"},lg=["onClick"],cg=["onClick"],ug=["onClick"],dg={class:"rules-actions"},mg={class:"button import-button"},pg=["disabled"],fg={class:"button button--outline import-button"},hg=["disabled"],vg={key:0,class:"muted",role:"status"},gg={key:1,class:"alert alert--error",role:"alert"},bg={key:2,class:"muted",role:"status"},_g={key:3,class:"rules-library"},yg={class:"rules-section rules-section--first rules-library__section"},Ag={class:"card-list rules-library__list"},Ng={class:"card__icon"},xg={class:"rules-section rules-library__section"},Bg={key:0,class:"card-list rules-library__list"},Tg={class:"card__icon"},dt={__name:"RulesPage",props:{source:String,groupId:String,documentation:Boolean},setup(e){const n=e,o=Me("services"),a=Me("builtInRuleSets");Nr();const r=Me("confirmPopup"),t=Le(()=>"/Extensao-26.2/rule-engine-skill/SKILL.md"),s=Be([]),l=Be(!0),c=Be(!1),d=Be(""),u=Le(()=>s.value.filter(F=>F.source==="standard")),m=Le(()=>s.value.filter(F=>F.source==="user")),f=Le(()=>s.value.find(F=>F.source===n.source&&F.id===n.groupId));function v(F){return F.regras?.length??0}function B(F){return Object.keys(F.parametros??{}).length}function y(F){return F.ruleSets.reduce((x,E)=>x+v(E),0)}async function w(){l.value=!0;try{const F=await o.ruleSetService.list();s.value=[...J0(a),...Q0(F)]}finally{l.value=!1}}function H(F){return`/rules/${encodeURIComponent(F.source)}/${encodeURIComponent(F.id)}`}async function P(F){const x=[...F.target.files??[]];if(!x.length)return;const E=x.filter(J=>/\.(json|ya?ml)$/i.test(J.name)),Z=x.length-E.length;if(!E.length){d.value="Nenhum arquivo .json, .yaml ou .yml encontrado.",F.target.value="";return}d.value="",c.value=!0;const de=E[0].webkitRelativePath?.split("/")[0],ne={id:`importado-${de||crypto.randomUUID()}`,nome:de||(E.length===1?E[0].name.replace(/\.(json|ya?ml)$/i,""):"Regras importadas")},T=[];for(const J of E)try{const pe=await J.text();/\.json$/i.test(J.name)?await o.ruleSetService.importFromJson(pe,ne):await o.ruleSetService.importFromYaml(pe,ne)}catch(pe){T.push(`${J.name}: ${pe.message}`)}const L=[];T.length&&L.push(E.length===1?T[0]:`${T.length} de ${E.length} arquivo(s) não importado(s) — ${T.join("; ")}`),Z&&L.push(`${Z} arquivo(s) ignorado(s) por não serem .json/.yaml/.yml.`),d.value=L.join(" "),await w(),F.target.value="",c.value=!1}function Y(F,x){r.confirm(x,`Excluir "${F.nome}"? Esta ação não pode ser desfeita.`,()=>q(F))}async function q(F){d.value="";try{await o.ruleSetService.delete(F.id),await w()}catch(x){d.value=x.message}}async function oe(F,x){try{const E=x==="json"?await o.ruleSetService.exportByIdToJson(F.id):await o.ruleSetService.exportByIdToYaml(F.id),Z=x==="json"?"application/json":"text/yaml",de=document.createElement("a");de.href=URL.createObjectURL(new Blob([E],{type:Z})),de.download=`${F.id}.${x}`,de.click(),URL.revokeObjectURL(de.href)}catch(E){d.value=E.message}}return Dn(w),(F,x)=>e.documentation?(C(),G(Ee,{key:0},[U(Zn,{title:"Crie e importe regras",description:"Monte checklists em YAML para avaliar os elementos do seu projeto."}),b("div",X0,[x[5]||(x[5]=wd(`<section class="documentation__section"><h2>Formato mínimo de um checklist</h2><p>Cada arquivo é um checklist independente. Os campos obrigatórios são <code>id</code>, <code>nome</code>, <code>parametros</code> (objeto) e <code>regras</code> (lista). YAML e JSON são aceitos.</p><pre class="documentation-code"><code>id: bebedouros
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
  valor: 0.80</code></pre><details class="documentation__details"><summary>Verificação manual (<code>tipo: checklist</code>)</summary><p>Para algo que exige julgamento humano. Em parâmetros booleanos, “sim” resulta em <code>conforme</code> e “não” em <code>nao_conforme</code>. Outros tipos de resposta ficam como verificação manual (<code>manual</code>):</p><pre class="documentation-code"><code>- id: rota_livre
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
      mensagem: Avaliar como rampa.</code></pre><p class="documentation__note"> Se nenhuma condição bater, o resultado fica <code>nao_avaliado</code>. Um parâmetro usado dentro de <code>verificar</code> (aqui, <code>possui_chanfro</code>) também precisa estar declarado em <code>parametros</code>. </p></details></section><section class="documentation__section"><h2>Resultados possíveis</h2><ul class="documentation__list"><li><code>conforme</code> / <code>nao_conforme</code> — comparação direta, ou condição explícita.</li><li><code>manual</code> — regra do tipo <code>checklist</code>.</li><li><code>atencao</code> — resultado explícito opcional numa condição de <code>conditional</code>.</li><li><code>nao_avaliado</code> — parâmetro opcional sem valor, ou nenhuma condição satisfeita.</li><li><code>invalido</code> — parâmetro obrigatório sem valor preenchido.</li></ul></section>`,4)),b("section",Z0,[b("span",eg,[U(re(oi),{size:24,"aria-hidden":"true"})]),b("div",null,[x[0]||(x[0]=b("h1",null,"Crie suas regras com IA",-1)),b("a",{class:"button button--outline",href:`${t.value}`,download:"SKILL.md"}," Baixar SKILL.md ",8,ng),x[1]||(x[1]=b("p",null,"Um arquivo de texto com instruções prontas para uma IA (Claude, ChatGPT, Cursor) gerar checklists neste formato a partir do que você descrever. Baixe, cole numa conversa com a IA e peça a regra que precisa — sem aprender YAML.",-1))])]),b("section",og,[x[3]||(x[3]=b("h2",null,"Importação",-1)),x[4]||(x[4]=b("p",null,[we("Escolha um ou mais arquivos YAML/JSON, ou uma pasta com vários checklists — arquivos que não forem "),b("code",null,".yaml"),we(", "),b("code",null,".yml"),we(" ou "),b("code",null,".json"),we(" são ignorados automaticamente. Tudo fica armazenado somente neste navegador.")],-1)),U(re(ke),{class:"button",to:"/rules"},{default:_e(()=>[...x[2]||(x[2]=[we("Ir para importação",-1)])]),_:1})])])],64)):e.groupId?(C(),G(Ee,{key:1},[l.value?(C(),G("p",ag,"Carregando…")):f.value?(C(),G(Ee,{key:1},[U(Zn,{title:f.value.nome,description:`${f.value.ruleSets.length} checklists que compõem este conjunto.`},null,8,["title","description"]),d.value?(C(),G("p",rg,le(d.value),1)):be("",!0),b("section",tg,[x[6]||(x[6]=b("h2",null,"Checklists",-1)),b("div",ig,[(C(!0),G(Ee,null,fn(f.value.ruleSets,E=>(C(),G("article",{key:E.id,class:"card ruleset-card"},[b("div",null,[b("h2",null,le(E.nome),1),b("p",null,le(E.norma?.nome??"Conjunto personalizado"),1),b("small",null,le(v(E))+" regras · "+le(B(E))+" campos",1)]),e.source==="user"?(C(),G("div",sg,[b("button",{class:"button button--outline",onClick:Z=>oe(E,"yaml")},"Exportar YAML",8,lg),b("button",{class:"button button--outline",onClick:Z=>oe(E,"json")},"Exportar JSON",8,cg),b("button",{class:"icon-button icon-button--danger",title:"Excluir","aria-label":"Excluir",onClick:Z=>Y(E,Z)},[U(re(Ho),{size:18,"aria-hidden":"true"})],8,ug)])):be("",!0)]))),128))])])],64)):(C(),Pe(An,{key:2,title:"Conjunto não encontrado",text:"Ele pode ter sido removido."}))],64)):(C(),G(Ee,{key:2},[U(Zn,{class:"rules-page-header",title:"Conjuntos de regras",description:"Cada pasta ou importação é exibida como um único conjunto."},{action:_e(()=>[b("div",dg,[b("label",mg,[x[7]||(x[7]=we(" Importar arquivos ",-1)),b("input",{type:"file",accept:".json,.yaml,.yml",multiple:"",disabled:c.value,onChange:P},null,40,pg)]),b("label",fg,[x[8]||(x[8]=we(" Importar pasta ",-1)),b("input",{type:"file",accept:".json,.yaml,.yml",webkitdirectory:"",disabled:c.value,onChange:P},null,40,hg)]),U(re(ke),{class:"rules-help-link",to:"/rules/documentation"},{default:_e(()=>[...x[9]||(x[9]=[we("Como criar regras",-1)])]),_:1})])]),_:1}),c.value?(C(),G("p",vg,"Importando…")):be("",!0),d.value?(C(),G("p",gg,le(d.value),1)):be("",!0),l.value?(C(),G("p",bg,"Carregando…")):(C(),G("div",_g,[b("section",yg,[x[10]||(x[10]=b("h2",null,"Regras padrão",-1)),b("div",Ag,[(C(!0),G(Ee,null,fn(u.value,E=>(C(),Pe(re(ke),{key:E.id,class:"card card--interactive rules-card",to:H(E)},{default:_e(()=>[b("span",Ng,[U(re(po),{size:22,"aria-hidden":"true"})]),b("div",null,[b("h2",null,le(E.nome),1),b("p",null,le(E.ruleSets.length)+" checklists · "+le(y(E))+" regras",1)]),U(re(Ta),{size:20,class:"chevron","aria-hidden":"true"})]),_:2},1032,["to"]))),128))])]),b("section",xg,[x[11]||(x[11]=b("h2",null,"Suas regras",-1)),m.value.length?(C(),G("div",Bg,[(C(!0),G(Ee,null,fn(m.value,E=>(C(),Pe(re(ke),{key:E.id,class:"card card--interactive rules-card",to:H(E)},{default:_e(()=>[b("span",Tg,[U(re(po),{size:22,"aria-hidden":"true"})]),b("div",null,[b("h2",null,le(E.nome),1),b("p",null,le(E.ruleSets.length)+" checklists",1)]),U(re(Ta),{size:20,class:"chevron","aria-hidden":"true"})]),_:2},1032,["to"]))),128))])):(C(),Pe(An,{key:1,title:"Nenhum conjunto importado",text:"Importe arquivos ou uma pasta para começar."}))])]))],64))}},Rg=[{path:"/",redirect:"/projects"},{path:"/projects",name:"projects",component:G0},{path:"/projects/:projectId",name:"project-detail",component:N0,props:!0},{path:"/projects/:projectId/status",name:"project-status",component:j0,props:!0},{path:"/projects/:projectId/environments/:environmentId",name:"project-environment",component:Zv,props:!0},{path:"/elements/new",name:"element-new",component:ut,meta:{hideBottomNav:!0}},{path:"/elements/:elementId",name:"element-detail",component:ut,props:!0},{path:"/elements/:elementId/evaluation",name:"element-evaluation",component:Ks,props:!0},{path:"/quick-evaluation",name:"quick-evaluation",component:ut,props:{quick:!0}},{path:"/quick-evaluation/result",name:"quick-evaluation-result",component:Ks,props:{quick:!0}},{path:"/rules",name:"rules",component:dt},{path:"/rules/documentation",name:"rules-documentation",component:dt,props:{documentation:!0}},{path:"/rules/:source/:groupId",name:"rules-group",component:dt,props:!0},{path:"/:pathMatch(.*)*",redirect:"/projects"}],Hc=Hf({history:Bf("/Extensao-26.2/"),routes:Rg}),Sg={__name:"App",setup(e){const n=Be(null),o=Be(!1),a=ni();return la("confirmPopup",{open:r=>n.value?.open(r),confirm:(r,t,s)=>n.value?.confirm(r,t,s)}),Dn(async()=>{await Hc.isReady();const r=window.matchMedia?.("(display-mode: standalone)")?.matches||navigator.standalone===!0,t=localStorage.getItem("welcomePopupSeen");a.path==="/projects"&&!r&&!t&&(localStorage.setItem("welcomePopupSeen","true"),o.value=!0)}),(r,t)=>(C(),G(Ee,null,[U(bh,null,{default:_e(()=>[U(re(Mc))]),_:1}),U(Nh,{ref_key:"confirmPopup",ref:n},null,512),o.value?(C(),Pe(zc,{key:0,onClose:t[0]||(t[0]=s=>o.value=!1)})):be("",!0)],64))}};async function wg(){const[e,n]=await Promise.all([Zm(),qp()]);_m(Sg).provide("services",e).provide("builtInRuleSets",n).use(Hc).mount("#app"),Tm({immediate:!0})}wg().catch(e=>{document.querySelector("#app").innerHTML=`<main class="fatal-error"><h1>Não foi possível abrir o aplicativo</h1><p>${e.message}</p></main>`});
