(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))a(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function o(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function a(r){if(r.ep)return;r.ep=!0;const i=o(r);fetch(r.href,i)}})();function Ot(e){const n=Object.create(null);for(const o of e.split(","))n[o]=1;return o=>o in n}const $e={},Po=[],Fn=()=>{},Gs=()=>!1,tr=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),ir=e=>e.startsWith("onUpdate:"),Xe=Object.assign,jt=(e,n)=>{const o=e.indexOf(n);o>-1&&e.splice(o,1)},Hc=Object.prototype.hasOwnProperty,De=(e,n)=>Hc.call(e,n),Ne=Array.isArray,Oo=e=>Sa(e)==="[object Map]",Go=e=>Sa(e)==="[object Set]",ii=e=>Sa(e)==="[object Date]",Se=e=>typeof e=="function",ze=e=>typeof e=="string",In=e=>typeof e=="symbol",qe=e=>e!==null&&typeof e=="object",Ws=e=>(qe(e)||Se(e))&&Se(e.then)&&Se(e.catch),Ys=Object.prototype.toString,Sa=e=>Ys.call(e),Uc=e=>Sa(e).slice(8,-1),Js=e=>Sa(e)==="[object Object]",Vt=e=>ze(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,ia=Ot(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),sr=e=>{const n=Object.create(null);return(o=>n[o]||(n[o]=e(o)))},Kc=/-\w/g,pn=sr(e=>e.replace(Kc,n=>n.slice(1).toUpperCase())),Gc=/\B([A-Z])/g,So=sr(e=>e.replace(Gc,"-$1").toLowerCase()),lr=sr(e=>e.charAt(0).toUpperCase()+e.slice(1)),Fa=sr(e=>e?`on${lr(e)}`:""),$n=(e,n)=>!Object.is(e,n),za=(e,...n)=>{for(let o=0;o<e.length;o++)e[o](...n)},Qs=(e,n,o,a=!1)=>{Object.defineProperty(e,n,{configurable:!0,enumerable:!1,writable:a,value:o})},cr=e=>{const n=parseFloat(e);return isNaN(n)?e:n},Wc=e=>{const n=ze(e)?Number(e):NaN;return isNaN(n)?e:n};let si;const ur=()=>si||(si=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function dr(e){if(Ne(e)){const n={};for(let o=0;o<e.length;o++){const a=e[o],r=ze(a)?Xc(a):dr(a);if(r)for(const i in r)n[i]=r[i]}return n}else if(ze(e)||qe(e))return e}const Yc=/;(?![^(]*\))/g,Jc=/:([^]+)/,Qc=/\/\*[^]*?\*\//g;function Xc(e){const n={};return e.replace(Qc,"").split(Yc).forEach(o=>{if(o){const a=o.split(Jc);a.length>1&&(n[a[0].trim()]=a[1].trim())}}),n}function dn(e){let n="";if(ze(e))n=e;else if(Ne(e))for(let o=0;o<e.length;o++){const a=dn(e[o]);a&&(n+=a+" ")}else if(qe(e))for(const o in e)e[o]&&(n+=o+" ");return n.trim()}function En(e){if(!e)return null;let{class:n,style:o}=e;return n&&!ze(n)&&(e.class=dn(n)),o&&(e.style=dr(o)),e}const Zc="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",eu=Ot(Zc);function Xs(e){return!!e||e===""}function nu(e,n){if(e.length!==n.length)return!1;let o=!0;for(let a=0;o&&a<e.length;a++)o=Wo(e[a],n[a]);return o}function Wo(e,n){if(e===n)return!0;let o=ii(e),a=ii(n);if(o||a)return o&&a?e.getTime()===n.getTime():!1;if(o=In(e),a=In(n),o||a)return e===n;if(o=Ne(e),a=Ne(n),o||a)return o&&a?nu(e,n):!1;if(o=qe(e),a=qe(n),o||a){if(!o||!a)return!1;const r=Object.keys(e).length,i=Object.keys(n).length;if(r!==i)return!1;for(const s in e){const l=e.hasOwnProperty(s),c=n.hasOwnProperty(s);if(l&&!c||!l&&c||!Wo(e[s],n[s]))return!1}}return String(e)===String(n)}function Dt(e,n){return e.findIndex(o=>Wo(o,n))}const Zs=e=>!!(e&&e.__v_isRef===!0),se=e=>ze(e)?e:e==null?"":Ne(e)||qe(e)&&(e.toString===Ys||!Se(e.toString))?Zs(e)?se(e.value):JSON.stringify(e,el,2):String(e),el=(e,n)=>Zs(n)?el(e,n.value):Oo(n)?{[`Map(${n.size})`]:[...n.entries()].reduce((o,[a,r],i)=>(o[xr(a,i)+" =>"]=r,o),{})}:Go(n)?{[`Set(${n.size})`]:[...n.values()].map(o=>xr(o))}:In(n)?xr(n):qe(n)&&!Ne(n)&&!Js(n)?String(n):n,xr=(e,n="")=>{var o;return In(e)?`Symbol(${(o=e.description)!=null?o:n})`:e};let Ze;class ou{constructor(n=!1){this.detached=n,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this._warnOnRun=!0,this.__v_skip=!0,!n&&Ze&&(Ze.active?(this.parent=Ze,this.index=(Ze.scopes||(Ze.scopes=[])).push(this)-1):(this._active=!1,this._warnOnRun=!1))}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let n,o;if(this.scopes){const a=this.scopes.slice();for(n=0,o=a.length;n<o;n++)a[n].pause()}for(n=0,o=this.effects.length;n<o;n++)this.effects[n].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let n,o;if(this.scopes){const r=this.scopes.slice();for(n=0,o=r.length;n<o;n++)r[n].resume()}const a=this.effects.slice();for(n=0,o=a.length;n<o;n++)a[n].resume()}}run(n){if(this._active){const o=Ze;try{return Ze=this,n()}finally{Ze=o}}}on(){++this._on===1&&(this.prevScope=Ze,Ze=this)}off(){if(this._on>0&&--this._on===0){if(Ze===this)Ze=this.prevScope;else{let n=Ze;for(;n;){if(n.prevScope===this){n.prevScope=this.prevScope;break}n=n.prevScope}}this.prevScope=void 0}}stop(n){if(this._active){this._active=!1;let o,a;for(o=0,a=this.effects.length;o<a;o++)this.effects[o].stop();for(this.effects.length=0,o=0,a=this.cleanups.length;o<a;o++)this.cleanups[o]();if(this.cleanups.length=0,this.scopes){const r=this.scopes.slice();for(o=0,a=r.length;o<a;o++)r[o].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!n){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0}}}function au(){return Ze}let Fe;const Br=new WeakSet;class nl{constructor(n){this.fn=n,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Ze&&(Ze.active?Ze.effects.push(this):this.flags&=-2)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Br.has(this)&&(Br.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||al(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,li(this),rl(this);const n=Fe,o=kn;Fe=this,kn=!0;try{return this.fn()}finally{tl(this),Fe=n,kn=o,this.flags&=-3}}stop(){if(this.flags&1){for(let n=this.deps;n;n=n.nextDep)$t(n);this.deps=this.depsTail=void 0,li(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Br.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){mt(this)&&this.run()}get dirty(){return mt(this)}}let ol=0,sa,la;function al(e,n=!1){if(e.flags|=8,n){e.next=la,la=e;return}e.next=sa,sa=e}function Lt(){ol++}function qt(){if(--ol>0)return;if(la){let n=la;for(la=void 0;n;){const o=n.next;n.next=void 0,n.flags&=-9,n=o}}let e;for(;sa;){let n=sa;for(sa=void 0;n;){const o=n.next;if(n.next=void 0,n.flags&=-9,n.flags&1)try{n.trigger()}catch(a){e||(e=a)}n=o}}if(e)throw e}function rl(e){for(let n=e.deps;n;n=n.nextDep)n.version=-1,n.prevActiveLink=n.dep.activeLink,n.dep.activeLink=n}function tl(e){let n,o=e.depsTail,a=o;for(;a;){const r=a.prevDep;a.version===-1?(a===o&&(o=r),$t(a),ru(a)):n=a,a.dep.activeLink=a.prevActiveLink,a.prevActiveLink=void 0,a=r}e.deps=n,e.depsTail=o}function mt(e){for(let n=e.deps;n;n=n.nextDep)if(n.dep.version!==n.version||n.dep.computed&&(il(n.dep.computed)||n.dep.version!==n.version))return!0;return!!e._dirty}function il(e){if(e.flags&4&&!(e.flags&16)||(e.flags&=-17,e.globalVersion===ha)||(e.globalVersion=ha,!e.isSSR&&e.flags&128&&(!e.deps&&!e._dirty||!mt(e))))return;e.flags|=2;const n=e.dep,o=Fe,a=kn;Fe=e,kn=!0;try{rl(e);const r=e.fn(e._value);(n.version===0||$n(r,e._value))&&(e.flags|=128,e._value=r,n.version++)}catch(r){throw n.version++,r}finally{Fe=o,kn=a,tl(e),e.flags&=-3}}function $t(e,n=!1){const{dep:o,prevSub:a,nextSub:r}=e;if(a&&(a.nextSub=r,e.prevSub=void 0),r&&(r.prevSub=a,e.nextSub=void 0),o.subs===e&&(o.subs=a,!a&&o.computed)){o.computed.flags&=-5;for(let i=o.computed.deps;i;i=i.nextDep)$t(i,!0)}!n&&!--o.sc&&o.map&&o.map.delete(o.key)}function ru(e){const{prevDep:n,nextDep:o}=e;n&&(n.nextDep=o,e.prevDep=void 0),o&&(o.prevDep=n,e.nextDep=void 0)}let kn=!0;const sl=[];function eo(){sl.push(kn),kn=!1}function no(){const e=sl.pop();kn=e===void 0?!0:e}function li(e){const{cleanup:n}=e;if(e.cleanup=void 0,n){const o=Fe;Fe=void 0;try{n()}finally{Fe=o}}}let ha=0;class tu{constructor(n,o){this.sub=n,this.dep=o,this.version=o.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Mt{constructor(n){this.computed=n,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(n){if(!Fe||!kn||Fe===this.computed)return;let o=this.activeLink;if(o===void 0||o.sub!==Fe)o=this.activeLink=new tu(Fe,this),Fe.deps?(o.prevDep=Fe.depsTail,Fe.depsTail.nextDep=o,Fe.depsTail=o):Fe.deps=Fe.depsTail=o,ll(o);else if(o.version===-1&&(o.version=this.version,o.nextDep)){const a=o.nextDep;a.prevDep=o.prevDep,o.prevDep&&(o.prevDep.nextDep=a),o.prevDep=Fe.depsTail,o.nextDep=void 0,Fe.depsTail.nextDep=o,Fe.depsTail=o,Fe.deps===o&&(Fe.deps=a)}return o}trigger(n){this.version++,ha++,this.notify(n)}notify(n){Lt();try{for(let o=this.subs;o;o=o.prevSub)o.sub.notify()&&o.sub.dep.notify()}finally{qt()}}}function ll(e){if(e.dep.sc++,e.sub.flags&4){const n=e.dep.computed;if(n&&!e.dep.subs){n.flags|=20;for(let a=n.deps;a;a=a.nextDep)ll(a)}const o=e.dep.subs;o!==e&&(e.prevSub=o,o&&(o.nextSub=e)),e.dep.subs=e}}const pt=new WeakMap,Bo=Symbol(""),ft=Symbol(""),va=Symbol("");function on(e,n,o){if(kn&&Fe){let a=pt.get(e);a||pt.set(e,a=new Map);let r=a.get(o);r||(a.set(o,r=new Mt),r.map=a,r.key=o),r.track()}}function Yn(e,n,o,a,r,i){const s=pt.get(e);if(!s){ha++;return}const l=c=>{c&&c.trigger()};if(Lt(),n==="clear")s.forEach(l);else{const c=Ne(e),u=c&&Vt(o);if(c&&o==="length"){const d=Number(a);s.forEach((m,f)=>{(f==="length"||f===va||!In(f)&&f>=d)&&l(m)})}else switch((o!==void 0||s.has(void 0))&&l(s.get(o)),u&&l(s.get(va)),n){case"add":c?u&&l(s.get("length")):(l(s.get(Bo)),Oo(e)&&l(s.get(ft)));break;case"delete":c||(l(s.get(Bo)),Oo(e)&&l(s.get(ft)));break;case"set":Oo(e)&&l(s.get(Bo));break}}qt()}function Eo(e){const n=je(e);return n===e?n:(on(n,"iterate",va),Tn(e)?n:n.map(Pn))}function mr(e){return on(e=je(e),"iterate",va),e}function Ln(e,n){return oo(e)?qo(To(e)?Pn(n):n):Pn(n)}const iu={__proto__:null,[Symbol.iterator](){return Tr(this,Symbol.iterator,e=>Ln(this,e))},concat(...e){return Eo(this).concat(...e.map(n=>Ne(n)?Eo(n):n))},entries(){return Tr(this,"entries",e=>(e[1]=Ln(this,e[1]),e))},every(e,n){return Hn(this,"every",e,n,void 0,arguments)},filter(e,n){return Hn(this,"filter",e,n,o=>o.map(a=>Ln(this,a)),arguments)},find(e,n){return Hn(this,"find",e,n,o=>Ln(this,o),arguments)},findIndex(e,n){return Hn(this,"findIndex",e,n,void 0,arguments)},findLast(e,n){return Hn(this,"findLast",e,n,o=>Ln(this,o),arguments)},findLastIndex(e,n){return Hn(this,"findLastIndex",e,n,void 0,arguments)},forEach(e,n){return Hn(this,"forEach",e,n,void 0,arguments)},includes(...e){return Rr(this,"includes",e)},indexOf(...e){return Rr(this,"indexOf",e)},join(e){return Eo(this).join(e)},lastIndexOf(...e){return Rr(this,"lastIndexOf",e)},map(e,n){return Hn(this,"map",e,n,void 0,arguments)},pop(){return Qo(this,"pop")},push(...e){return Qo(this,"push",e)},reduce(e,...n){return ci(this,"reduce",e,n)},reduceRight(e,...n){return ci(this,"reduceRight",e,n)},shift(){return Qo(this,"shift")},some(e,n){return Hn(this,"some",e,n,void 0,arguments)},splice(...e){return Qo(this,"splice",e)},toReversed(){return Eo(this).toReversed()},toSorted(e){return Eo(this).toSorted(e)},toSpliced(...e){return Eo(this).toSpliced(...e)},unshift(...e){return Qo(this,"unshift",e)},values(){return Tr(this,"values",e=>Ln(this,e))}};function Tr(e,n,o){const a=mr(e),r=a[n]();return a!==e&&!Tn(e)&&(r._next=r.next,r.next=()=>{const i=r._next();return i.done||(i.value=o(i.value)),i}),r}const su=Array.prototype;function Hn(e,n,o,a,r,i){const s=mr(e),l=s!==e&&!Tn(e),c=s[n];if(c!==su[n]){const m=c.apply(e,i);return l?Pn(m):m}let u=o;s!==e&&(l?u=function(m,f){return o.call(this,Ln(e,m),f,e)}:o.length>2&&(u=function(m,f){return o.call(this,m,f,e)}));const d=c.call(s,u,a);return l&&r?r(d):d}function ci(e,n,o,a){const r=mr(e),i=r!==e&&!Tn(e);let s=o,l=!1;r!==e&&(i?(l=a.length===0,s=function(u,d,m){return l&&(l=!1,u=Ln(e,u)),o.call(this,u,Ln(e,d),m,e)}):o.length>3&&(s=function(u,d,m){return o.call(this,u,d,m,e)}));const c=r[n](s,...a);return l?Ln(e,c):c}function Rr(e,n,o){const a=je(e);on(a,"iterate",va);const r=a[n](...o);return(r===-1||r===!1)&&Ht(o[0])?(o[0]=je(o[0]),a[n](...o)):r}function Qo(e,n,o=[]){eo(),Lt();const a=je(e)[n].apply(e,o);return qt(),no(),a}const lu=Ot("__proto__,__v_isRef,__isVue"),cl=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(In));function cu(e){In(e)||(e=String(e));const n=je(this);return on(n,"has",e),n.hasOwnProperty(e)}class ul{constructor(n=!1,o=!1){this._isReadonly=n,this._isShallow=o}get(n,o,a){if(o==="__v_skip")return n.__v_skip;const r=this._isReadonly,i=this._isShallow;if(o==="__v_isReactive")return!r;if(o==="__v_isReadonly")return r;if(o==="__v_isShallow")return i;if(o==="__v_raw")return a===(r?i?_u:fl:i?pl:ml).get(n)||Object.getPrototypeOf(n)===Object.getPrototypeOf(a)?n:void 0;const s=Ne(n);if(!r){let c;if(s&&(c=iu[o]))return c;if(o==="hasOwnProperty")return cu}const l=Reflect.get(n,o,tn(n)?n:a);if((In(o)?cl.has(o):lu(o))||(r||on(n,"get",o),i))return l;if(tn(l)){const c=s&&Vt(o)?l:l.value;return r&&qe(c)?vt(c):c}return qe(l)?r?vt(l):Ea(l):l}}class dl extends ul{constructor(n=!1){super(!1,n)}set(n,o,a,r){let i=n[o];const s=Ne(n)&&Vt(o);if(!this._isShallow){const u=oo(i);if(!Tn(a)&&!oo(a)&&(i=je(i),a=je(a)),!s&&tn(i)&&!tn(a))return u||(i.value=a),!0}const l=s?Number(o)<n.length:De(n,o),c=Reflect.set(n,o,a,tn(n)?n:r);return n===je(r)&&c&&(l?$n(a,i)&&Yn(n,"set",o,a):Yn(n,"add",o,a)),c}deleteProperty(n,o){const a=De(n,o);n[o];const r=Reflect.deleteProperty(n,o);return r&&a&&Yn(n,"delete",o,void 0),r}has(n,o){const a=Reflect.has(n,o);return(!In(o)||!cl.has(o))&&on(n,"has",o),a}ownKeys(n){return on(n,"iterate",Ne(n)?"length":Bo),Reflect.ownKeys(n)}}class uu extends ul{constructor(n=!1){super(!0,n)}set(n,o){return!0}deleteProperty(n,o){return!0}}const du=new dl,mu=new uu,pu=new dl(!0);const ht=e=>e,ja=e=>Reflect.getPrototypeOf(e);function fu(e,n,o){return function(...a){const r=this.__v_raw,i=je(r),s=Oo(i),l=e==="entries"||e===Symbol.iterator&&s,c=e==="keys"&&s,u=r[e](...a),d=o?ht:n?qo:Pn;return!n&&on(i,"iterate",c?ft:Bo),Xe(Object.create(u),{next(){const{value:m,done:f}=u.next();return f?{value:m,done:f}:{value:l?[d(m[0]),d(m[1])]:d(m),done:f}}})}}function Va(e){return function(...n){return e==="delete"?!1:e==="clear"?void 0:this}}function hu(e,n){const o={get(r){const i=this.__v_raw,s=je(i),l=je(r);e||($n(r,l)&&on(s,"get",r),on(s,"get",l));const{has:c}=ja(s),u=n?ht:e?qo:Pn;if(c.call(s,r))return u(i.get(r));if(c.call(s,l))return u(i.get(l));i!==s&&i.get(r)},get size(){const r=this.__v_raw;return!e&&on(je(r),"iterate",Bo),r.size},has(r){const i=this.__v_raw,s=je(i),l=je(r);return e||($n(r,l)&&on(s,"has",r),on(s,"has",l)),r===l?i.has(r):i.has(r)||i.has(l)},forEach(r,i){const s=this,l=s.__v_raw,c=je(l),u=n?ht:e?qo:Pn;return!e&&on(c,"iterate",Bo),l.forEach((d,m)=>r.call(i,u(d),u(m),s))}};return Xe(o,e?{add:Va("add"),set:Va("set"),delete:Va("delete"),clear:Va("clear")}:{add(r){const i=je(this),s=ja(i),l=je(r),c=!n&&!Tn(r)&&!oo(r)?l:r;return s.has.call(i,c)||$n(r,c)&&s.has.call(i,r)||$n(l,c)&&s.has.call(i,l)||(i.add(c),Yn(i,"add",c,c)),this},set(r,i){!n&&!Tn(i)&&!oo(i)&&(i=je(i));const s=je(this),{has:l,get:c}=ja(s);let u=l.call(s,r);u||(r=je(r),u=l.call(s,r));const d=c.call(s,r);return s.set(r,i),u?$n(i,d)&&Yn(s,"set",r,i):Yn(s,"add",r,i),this},delete(r){const i=je(this),{has:s,get:l}=ja(i);let c=s.call(i,r);c||(r=je(r),c=s.call(i,r)),l&&l.call(i,r);const u=i.delete(r);return c&&Yn(i,"delete",r,void 0),u},clear(){const r=je(this),i=r.size!==0,s=r.clear();return i&&Yn(r,"clear",void 0,void 0),s}}),["keys","values","entries",Symbol.iterator].forEach(r=>{o[r]=fu(r,e,n)}),o}function Ft(e,n){const o=hu(e,n);return(a,r,i)=>r==="__v_isReactive"?!e:r==="__v_isReadonly"?e:r==="__v_raw"?a:Reflect.get(De(o,r)&&r in a?o:a,r,i)}const vu={get:Ft(!1,!1)},gu={get:Ft(!1,!0)},bu={get:Ft(!0,!1)};const ml=new WeakMap,pl=new WeakMap,fl=new WeakMap,_u=new WeakMap;function yu(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Ea(e){return oo(e)?e:zt(e,!1,du,vu,ml)}function hl(e){return zt(e,!1,pu,gu,pl)}function vt(e){return zt(e,!0,mu,bu,fl)}function zt(e,n,o,a,r){if(!qe(e)||e.__v_raw&&!(n&&e.__v_isReactive)||e.__v_skip||!Object.isExtensible(e))return e;const i=r.get(e);if(i)return i;const s=yu(Uc(e));if(s===0)return e;const l=new Proxy(e,s===2?a:o);return r.set(e,l),l}function To(e){return oo(e)?To(e.__v_raw):!!(e&&e.__v_isReactive)}function oo(e){return!!(e&&e.__v_isReadonly)}function Tn(e){return!!(e&&e.__v_isShallow)}function Ht(e){return e?!!e.__v_raw:!1}function je(e){const n=e&&e.__v_raw;return n?je(n):e}function Au(e){return!De(e,"__v_skip")&&Object.isExtensible(e)&&Qs(e,"__v_skip",!0),e}const Pn=e=>qe(e)?Ea(e):e,qo=e=>qe(e)?vt(e):e;function tn(e){return e?e.__v_isRef===!0:!1}function Be(e){return vl(e,!1)}function Nu(e){return vl(e,!0)}function vl(e,n){return tn(e)?e:new xu(e,n)}class xu{constructor(n,o){this.dep=new Mt,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=o?n:je(n),this._value=o?n:Pn(n),this.__v_isShallow=o}get value(){return this.dep.track(),this._value}set value(n){const o=this._rawValue,a=this.__v_isShallow||Tn(n)||oo(n);n=a?n:je(n),$n(n,o)&&(this._rawValue=n,this._value=a?n:Pn(n),this.dep.trigger())}}function ee(e){return tn(e)?e.value:e}const Bu={get:(e,n,o)=>n==="__v_raw"?e:ee(Reflect.get(e,n,o)),set:(e,n,o,a)=>{const r=e[n];return tn(r)&&!tn(o)?(r.value=o,!0):Reflect.set(e,n,o,a)}};function gl(e){return To(e)?e:new Proxy(e,Bu)}class Tu{constructor(n,o,a){this.fn=n,this.setter=o,this._value=void 0,this.dep=new Mt(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=ha-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!o,this.isSSR=a}notify(){if(this.flags|=16,!(this.flags&8)&&Fe!==this)return al(this,!0),!0}get value(){const n=this.dep.track();return il(this),n&&(n.version=this.dep.version),this._value}set value(n){this.setter&&this.setter(n)}}function Ru(e,n,o=!1){let a,r;return Se(e)?a=e:(a=e.get,r=e.set),new Tu(a,r,o)}const Da={},Ka=new WeakMap;let yo;function Su(e,n=!1,o=yo){if(o){let a=Ka.get(o);a||Ka.set(o,a=[]),a.push(e)}}function Eu(e,n,o=$e){const{immediate:a,deep:r,once:i,scheduler:s,augmentJob:l,call:c}=o,u=q=>r?q:Tn(q)||r===!1||r===0?Jn(q,1):Jn(q);let d,m,f,b,T=!1,N=!1;if(tn(e)?(m=()=>e.value,T=Tn(e)):To(e)?(m=()=>u(e),T=!0):Ne(e)?(N=!0,T=e.some(q=>To(q)||Tn(q)),m=()=>e.map(q=>{if(tn(q))return q.value;if(To(q))return u(q);if(Se(q))return c?c(q,2):q()})):Se(e)?n?m=c?()=>c(e,2):e:m=()=>{if(f){eo();try{f()}finally{no()}}const q=yo;yo=d;try{return c?c(e,3,[b]):e(b)}finally{yo=q}}:m=Fn,n&&r){const q=m,pe=r===!0?1/0:r;m=()=>Jn(q(),pe)}const w=au(),F=()=>{d.stop(),w&&w.active&&jt(w.effects,d)};if(i&&n){const q=n;n=(...pe)=>{const ie=q(...pe);return F(),ie}}let x=N?new Array(e.length).fill(Da):Da;const I=q=>{if(!(!(d.flags&1)||!d.dirty&&!q))if(n){const pe=d.run();if(q||r||T||(N?pe.some((ie,C)=>$n(ie,x[C])):$n(pe,x))){f&&f();const ie=yo;yo=d;try{const C=[pe,x===Da?void 0:N&&x[0]===Da?[]:x,b];x=pe,c?c(n,3,C):n(...C)}finally{yo=ie}}}else d.run()};return l&&l(I),d=new nl(m),d.scheduler=s?()=>s(I,!1):I,b=q=>Su(q,!1,d),f=d.onStop=()=>{const q=Ka.get(d);if(q){if(c)c(q,4);else for(const pe of q)pe();Ka.delete(d)}},n?a?I(!0):x=d.run():s?s(I.bind(null,!0),!0):d.run(),F.pause=d.pause.bind(d),F.resume=d.resume.bind(d),F.stop=F,F}function Jn(e,n=1/0,o){if(n<=0||!qe(e)||e.__v_skip||(o=o||new Map,(o.get(e)||0)>=n))return e;if(o.set(e,n),n--,tn(e))Jn(e.value,n,o);else if(Ne(e))for(let a=0;a<e.length;a++)Jn(e[a],n,o);else if(Go(e)||Oo(e))e.forEach(a=>{Jn(a,n,o)});else if(Js(e)){for(const a in e)Jn(e[a],n,o);for(const a of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,a)&&Jn(e[a],n,o)}return e}function wa(e,n,o,a){try{return a?e(...a):e()}catch(r){pr(r,n,o)}}function Rn(e,n,o,a){if(Se(e)){const r=wa(e,n,o,a);return r&&Ws(r)&&r.catch(i=>{pr(i,n,o)}),r}if(Ne(e)){const r=[];for(let i=0;i<e.length;i++)r.push(Rn(e[i],n,o,a));return r}}function pr(e,n,o,a=!0){const r=n?n.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:s}=n&&n.appContext.config||$e;if(n){let l=n.parent;const c=n.proxy,u=`https://vuejs.org/error-reference/#runtime-${o}`;for(;l;){const d=l.ec;if(d){for(let m=0;m<d.length;m++)if(d[m](e,c,u)===!1)return}l=l.parent}if(i){eo(),wa(i,null,10,[e,c,u]),no();return}}wu(e,o,r,a,s)}function wu(e,n,o,a=!0,r=!1){if(r)throw e;console.error(e)}const mn=[];let Dn=-1;const jo=[];let lo=null,Co=0;const bl=Promise.resolve();let Ga=null;function $o(e){const n=Ga||bl;return e?n.then(this?e.bind(this):e):n}function Cu(e){let n=Dn+1,o=mn.length;for(;n<o;){const a=n+o>>>1,r=mn[a],i=ga(r);i<e||i===e&&r.flags&2?n=a+1:o=a}return n}function Ut(e){if(!(e.flags&1)){const n=ga(e),o=mn[mn.length-1];!o||!(e.flags&2)&&n>=ga(o)?mn.push(e):mn.splice(Cu(n),0,e),e.flags|=1,_l()}}function _l(){Ga||(Ga=bl.then(Al))}function ku(e){if(!Ne(e))lo&&e.id===-1?lo.splice(Co+1,0,e):e.flags&1||(jo.push(e),e.flags|=1);else for(let n=0;n<e.length;n++)jo.push(e[n]);_l()}function ui(e,n,o=Dn+1){for(;o<mn.length;o++){const a=mn[o];if(a&&a.flags&2){if(e&&a.id!==e.uid)continue;mn.splice(o,1),o--,a.flags&4&&(a.flags&=-2),a(),a.flags&4||(a.flags&=-2)}}}function yl(e){if(jo.length){const n=[...new Set(jo)].sort((o,a)=>ga(o)-ga(a));if(jo.length=0,lo){for(let o=0;o<n.length;o++)lo.push(n[o]);return}for(lo=n,Co=0;Co<lo.length;Co++){const o=lo[Co];o.flags&4&&(o.flags&=-2),o.flags&8||o(),o.flags&=-2}lo=null,Co=0}}const ga=e=>e.id==null?e.flags&2?-1:1/0:e.id;function Al(e){try{for(Dn=0;Dn<mn.length;Dn++){const n=mn[Dn];n&&!(n.flags&8)&&(n.flags&4&&(n.flags&=-2),wa(n,n.i,n.i?15:14),n.flags&4||(n.flags&=-2))}}finally{for(;Dn<mn.length;Dn++){const n=mn[Dn];n&&(n.flags&=-2)}Dn=-1,mn.length=0,yl(),Ga=null,(mn.length||jo.length)&&Al()}}let en=null,Nl=null;function Wa(e){const n=en;return en=e,Nl=e&&e.type.__scopeId||null,n}function fe(e,n=en,o){if(!n||e._n)return e;const a=(...r)=>{a._d&&Xa(-1);const i=Wa(n),s=Qn.length;let l;try{l=e(...r)}finally{for(let c=Qn.length;c>s;c--)Qt();Wa(i),a._d&&Xa(1)}return l};return a._n=!0,a._c=!0,a._d=!0,a}function Cn(e,n){if(en===null)return e;const o=_r(en),a=e.dirs||(e.dirs=[]);for(let r=0;r<n.length;r++){let[i,s,l,c=$e]=n[r];i&&(Se(i)&&(i={mounted:i,updated:i}),i.deep&&Jn(s),a.push({dir:i,instance:o,value:s,oldValue:void 0,arg:l,modifiers:c}))}return e}function ho(e,n,o,a){const r=e.dirs,i=n&&n.dirs;for(let s=0;s<r.length;s++){const l=r[s];i&&(l.oldValue=i[s].value);let c=l.dir[a];c&&(eo(),Rn(c,o,8,[e.el,l,e,n]),no())}}function ca(e,n){if(rn){let o=rn.provides;const a=rn.parent&&rn.parent.provides;a===o&&(o=rn.provides=Object.create(a)),o[e]=n}}function Me(e,n,o=!1){const a=ac();if(a||Do){let r=Do?Do._context.provides:a?a.parent==null||a.ce?a.vnode.appContext&&a.vnode.appContext.provides:a.parent.provides:void 0;if(r&&e in r)return r[e];if(arguments.length>1)return o&&Se(n)?n.call(a&&a.proxy):n}}const Iu=Symbol.for("v-scx"),Pu=()=>Me(Iu);function Ro(e,n,o){return xl(e,n,o)}function xl(e,n,o=$e){const{immediate:a,deep:r,flush:i,once:s}=o,l=Xe({},o),c=n&&a||!n&&i!=="post";let u;if(Na){if(i==="sync"){const b=Pu();u=b.__watcherHandles||(b.__watcherHandles=[])}else if(!c){const b=()=>{};return b.stop=Fn,b.resume=Fn,b.pause=Fn,b}}const d=rn;l.call=(b,T,N)=>Rn(b,d,T,N);let m=!1;i==="post"?l.scheduler=b=>{ln(b,d&&d.suspense)}:i!=="sync"&&(m=!0,l.scheduler=(b,T)=>{T?b():Ut(b)}),l.augmentJob=b=>{n&&(b.flags|=4),m&&(b.flags|=2,d&&(b.id=d.uid,b.i=d))};const f=Eu(e,n,l);return Na&&(u?u.push(f):c&&f()),f}function Ou(e,n,o){const a=this.proxy,r=ze(e)?e.includes(".")?Bl(a,e):()=>a[e]:e.bind(a,a);let i;Se(n)?i=n:(i=n.handler,o=n);const s=Ca(this),l=xl(r,i.bind(a),o);return s(),l}function Bl(e,n){const o=n.split(".");return()=>{let a=e;for(let r=0;r<o.length&&a;r++)a=a[o[r]];return a}}const so=new WeakMap,Tl=Symbol("_vte"),fr=e=>e.__isTeleport,Ao=e=>e&&(e.disabled||e.disabled===""),ju=e=>e&&(e.defer||e.defer===""),di=e=>typeof SVGElement<"u"&&e instanceof SVGElement,mi=e=>typeof MathMLElement=="function"&&e instanceof MathMLElement,gt=(e,n)=>{const o=e&&e.to;return ze(o)?n?n(o):null:o},Vu={name:"Teleport",__isTeleport:!0,process(e,n,o,a,r,i,s,l,c,u){const{mc:d,pc:m,pbc:f,o:{insert:b,querySelector:T,createText:N,createComment:w,parentNode:F}}=u,x=Ao(n.props);let{dynamicChildren:I}=n;const q=(C,L,Z)=>{C.shapeFlag&16&&d(C.children,L,Z,r,i,s,l,c)},pe=(C=n)=>{const L=Ao(C.props),Z=C.target=gt(C.props,T),ue=bt(Z,C,N,b);Z&&(s!=="svg"&&di(Z)?s="svg":s!=="mathml"&&mi(Z)&&(s="mathml"),r&&r.isCE&&(r.ce._teleportTargets||(r.ce._teleportTargets=new Set)).add(Z),L||(q(C,Z,ue),aa(C,!1)))},ie=C=>{const L=()=>{if(so.get(C)===L){if(so.delete(C),Ao(C.props)){const Z=F(C.el)||o;q(C,Z,C.anchor),aa(C,!0)}pe(C)}};so.set(C,L),ln(L,i)};if(e==null){const C=n.el=N(""),L=n.anchor=N("");if(b(C,o,a),b(L,o,a),ju(n.props)||i&&i.pendingBranch){ie(n);return}x&&(q(n,o,L),aa(n,!0)),pe()}else{n.el=e.el;const C=n.anchor=e.anchor,L=so.get(e);if(L){L.flags|=8,so.delete(e),ie(n);return}n.targetStart=e.targetStart;const Z=n.target=e.target,ue=n.targetAnchor=e.targetAnchor,ne=Ao(e.props),B=ne?o:Z,$=ne?C:ue;if(s==="svg"||di(Z)?s="svg":(s==="mathml"||mi(Z))&&(s="mathml"),I?(f(e.dynamicChildren,I,B,r,i,s,l),Jt(e,n,!0)):c||m(e,n,B,$,r,i,s,l,!1),x)ne?n.props&&e.props&&n.props.to!==e.props.to&&(n.props.to=e.props.to):La(n,o,C,u,1);else if((n.props&&n.props.to)!==(e.props&&e.props.to)){const Q=gt(n.props,T);Q&&(n.target=Q,La(n,Q,null,u,0))}else ne&&La(n,Z,ue,u,1);aa(n,x)}},remove(e,n,o,{um:a,o:{remove:r}},i){const{shapeFlag:s,children:l,anchor:c,targetStart:u,targetAnchor:d,target:m,props:f}=e,b=Ao(f),T=i||!b,N=so.get(e);if(N&&(N.flags|=8,so.delete(e)),m&&(r(u),r(d)),i&&r(c),!N&&(b||m)&&s&16)for(let w=0;w<l.length;w++){const F=l[w];a(F,n,o,T,!!F.dynamicChildren)}},move:La,hydrate:Du};function La(e,n,o,{o:{insert:a},m:r},i=2){i===0&&a(e.targetAnchor,n,o);const{el:s,anchor:l,shapeFlag:c,children:u,props:d}=e,m=i===2;if(m&&a(s,n,o),!so.has(e)&&(!m||Ao(d))&&c&16)for(let f=0;f<u.length;f++)r(u[f],n,o,2);m&&a(l,n,o)}function Du(e,n,o,a,r,i,{o:{nextSibling:s,parentNode:l,querySelector:c,insert:u,createText:d}},m){function f(w,F){let x=F;for(;x;){if(x&&x.nodeType===8){if(x.data==="teleport start anchor")n.targetStart=x;else if(x.data==="teleport anchor"){n.targetAnchor=x,w._lpa=n.targetAnchor&&s(n.targetAnchor);break}}x=s(x)}}function b(w,F){F.anchor=m(s(w),F,l(w),o,a,r,i)}const T=n.target=gt(n.props,c),N=Ao(n.props);if(T){const w=T._lpa||T.firstChild;n.shapeFlag&16&&(N?(b(e,n),f(T,w),n.targetAnchor||bt(T,n,d,u,l(e)===T?e:null)):(n.anchor=s(e),f(T,w),n.targetAnchor||bt(T,n,d,u),m(w&&s(w),n,T,o,a,r,i))),aa(n,N)}else N&&n.shapeFlag&16&&(b(e,n),n.targetStart=e,n.targetAnchor=s(e));return n.anchor&&s(n.anchor)}const Rl=Vu;function aa(e,n){const o=e.ctx;if(o&&o.ut){let a,r;for(n?(a=e.el,r=e.anchor):(a=e.targetStart,r=e.targetAnchor);a&&a!==r;)a.nodeType===1&&a.setAttribute("data-v-owner",o.uid),a=a.nextSibling;o.ut()}}function bt(e,n,o,a,r=null){const i=n.targetStart=o(""),s=n.targetAnchor=o("");return i[Tl]=s,e&&(a(i,e,r),a(s,e,r)),s}const xn=Symbol("_leaveCb"),Xo=Symbol("_enterCb");function Lu(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return jn(()=>{e.isMounted=!0}),Kt(()=>{e.isUnmounting=!0}),e}const Nn=[Function,Array],Sl={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Nn,onEnter:Nn,onAfterEnter:Nn,onEnterCancelled:Nn,onBeforeLeave:Nn,onLeave:Nn,onAfterLeave:Nn,onLeaveCancelled:Nn,onBeforeAppear:Nn,onAppear:Nn,onAfterAppear:Nn,onAppearCancelled:Nn},El=e=>{const n=e.subTree;return n.component?El(n.component):n},qu={name:"BaseTransition",props:Sl,setup(e,{slots:n}){const o=ac(),a=Lu();return()=>{const r=n.default&&kl(n.default(),!0),i=r&&r.length?wl(r):o.subTree?ye():void 0;if(!i)return;const s=je(e),{mode:l}=s;if(a.isLeaving)return Sr(i);const c=Ya(i);if(!c)return Sr(i);let u=_t(c,s,a,o,m=>u=m);c.type!==an&&ba(c,u);let d=o.subTree&&Ya(o.subTree);if(d&&d.type!==an&&!No(d,c)&&El(o).type!==an){let m=_t(d,s,a,o);if(ba(d,m),l==="out-in"&&c.type!==an)return a.isLeaving=!0,m.afterLeave=()=>{a.isLeaving=!1,o.job.flags&8||o.update(),delete m.afterLeave,d=void 0},Sr(i);l==="in-out"&&c.type!==an?m.delayLeave=(f,b,T)=>{const N=Cl(a,d);N[String(d.key)]=d,f[xn]=()=>{b(),f[xn]=void 0,delete u.delayedLeave,d=void 0},u.delayedLeave=()=>{T(),delete u.delayedLeave,d=void 0}}:d=void 0}else d&&(d=void 0);return i}}};function wl(e){let n=e[0];if(e.length>1){for(const o of e)if(o.type!==an){n=o;break}}return n}const $u=qu;function Cl(e,n){const{leavingVNodes:o}=e;let a=o.get(n.type);return a||(a=Object.create(null),o.set(n.type,a)),a}function _t(e,n,o,a,r){const{appear:i,mode:s,persisted:l=!1,onBeforeEnter:c,onEnter:u,onAfterEnter:d,onEnterCancelled:m,onBeforeLeave:f,onLeave:b,onAfterLeave:T,onLeaveCancelled:N,onBeforeAppear:w,onAppear:F,onAfterAppear:x,onAppearCancelled:I}=n,q=String(e.key),pe=Cl(o,e),ie=(Z,ue)=>{Z&&Rn(Z,a,9,ue)},C=(Z,ue)=>{const ne=ue[1];ie(Z,ue),Ne(Z)?Z.every(B=>B.length<=1)&&ne():Z.length<=1&&ne()},L={mode:s,persisted:l,beforeEnter(Z){let ue=c;if(!o.isMounted)if(i)ue=w||c;else return;Z[xn]&&Z[xn](!0);const ne=pe[q];ne&&No(e,ne)&&ne.el[xn]&&ne.el[xn](),ie(ue,[Z])},enter(Z){if(pe[q]===e)return;let ue=u,ne=d,B=m;if(!o.isMounted)if(i)ue=F||u,ne=x||d,B=I||m;else return;let $=!1;Z[Xo]=me=>{$||($=!0,me?ie(B,[Z]):ie(ne,[Z]),L.delayedLeave&&L.delayedLeave(),Z[Xo]=void 0)};const Q=Z[Xo].bind(null,!1);ue?C(ue,[Z,Q]):Q()},leave(Z,ue){const ne=String(e.key);if(Z[Xo]&&Z[Xo](!0),o.isUnmounting)return ue();ie(f,[Z]);let B=!1;Z[xn]=Q=>{B||(B=!0,ue(),Q?ie(N,[Z]):ie(T,[Z]),Z[xn]=void 0,pe[ne]===e&&delete pe[ne])};const $=Z[xn].bind(null,!1);pe[ne]=e,b?C(b,[Z,$]):$()},clone(Z){const ue=_t(Z,n,o,a,r);return r&&r(ue),ue}};return L}function Sr(e){if(hr(e))return e=po(e),e.children=null,e}function Ya(e){if(!hr(e))return fr(e.type)&&e.children?wl(e.children):e;if(e.component)return e.component.subTree;const{shapeFlag:n,children:o}=e;if(o){if(n&16)return o[0];if(n&32&&Se(o.default))return o.default()}}function ba(e,n){if(e.shapeFlag&6&&e.component){e.transition=n;const o=e.component.subTree;ba(fr(o.type)&&Ya(o)||o,n)}else e.shapeFlag&128?(e.ssContent.transition=n.clone(e.ssContent),e.ssFallback.transition=n.clone(e.ssFallback)):e.transition=n}function kl(e,n=!1,o){let a=[],r=0;for(let i=0;i<e.length;i++){let s=e[i];const l=o==null?s.key:String(o)+String(s.key!=null?s.key:i);s.type===we?(s.patchFlag&128&&r++,a=a.concat(kl(s.children,n,l))):(n||s.type!==an)&&a.push(l!=null?po(s,{key:l}):s)}if(r>1)for(let i=0;i<a.length;i++)a[i].patchFlag=-2;return a}function Il(e,n){return Se(e)?Xe({name:e.name},n,{setup:e}):e}function Pl(e){e.ids=[e.ids[0]+e.ids[2]+++"-",0,0]}function pi(e,n){let o;return!!((o=Object.getOwnPropertyDescriptor(e,n))&&!o.configurable)}const Ja=new WeakMap;function ua(e,n,o,a,r=!1){if(Ne(e)){e.forEach((N,w)=>ua(N,n&&(Ne(n)?n[w]:n),o,a,r));return}if(Vo(a)&&!r){a.shapeFlag&512&&a.type.__asyncResolved&&a.component.subTree.component&&ua(e,n,o,a.component.subTree);return}const i=a.shapeFlag&4?_r(a.component):a.el,s=r?null:i,{i:l,r:c}=e,u=n&&n.r,d=l.refs===$e?l.refs={}:l.refs,m=l.setupState,f=je(m),b=m===$e?Gs:N=>pi(d,N)?!1:De(f,N),T=(N,w)=>!(w&&pi(d,w));if(u!=null&&u!==c){if(fi(n),ze(u))d[u]=null,b(u)&&(m[u]=null);else if(tn(u)){const N=n;T(u,N.k)&&(u.value=null),N.k&&(d[N.k]=null)}}if(Se(c))wa(c,l,12,[s,d]);else{const N=ze(c),w=tn(c);if(N||w){const F=()=>{if(e.f){const x=N?b(c)?m[c]:d[c]:T()||!e.k?c.value:d[e.k];if(r)Ne(x)&&jt(x,i);else if(Ne(x))x.includes(i)||x.push(i);else if(N)d[c]=[i],b(c)&&(m[c]=d[c]);else{const I=[i];T(c,e.k)&&(c.value=I),e.k&&(d[e.k]=I)}}else N?(d[c]=s,b(c)&&(m[c]=s)):w&&(T(c,e.k)&&(c.value=s),e.k&&(d[e.k]=s))};if(s){const x=()=>{F(),Ja.delete(e)};x.id=-1,Ja.set(e,x),ln(x,o)}else fi(e),F()}}}function fi(e){const n=Ja.get(e);n&&(n.flags|=8,Ja.delete(e))}ur().requestIdleCallback;ur().cancelIdleCallback;const Vo=e=>!!e.type.__asyncLoader,hr=e=>e.type.__isKeepAlive;function Mu(e,n){Ol(e,"a",n)}function Fu(e,n){Ol(e,"da",n)}function Ol(e,n,o=rn){const a=e.__wdc||(e.__wdc=()=>{let r=o;for(;r;){if(r.isDeactivated)return;r=r.parent}return e()});if(vr(n,a,o),o){let r=o.parent;for(;r&&r.parent;)hr(r.parent.vnode)&&zu(a,n,o,r),r=r.parent}}function zu(e,n,o,a){const r=vr(n,e,a,!0);Gt(()=>{jt(a[n],r)},o)}function vr(e,n,o=rn,a=!1){if(o){const r=o[e]||(o[e]=[]),i=n.__weh||(n.__weh=(...s)=>{eo();const l=Ca(o),c=Rn(n,o,e,s);return l(),no(),c});return a?r.unshift(i):r.push(i),i}}const ao=e=>(n,o=rn)=>{(!Na||e==="sp")&&vr(e,(...a)=>n(...a),o)},Hu=ao("bm"),jn=ao("m"),Uu=ao("bu"),Ku=ao("u"),Kt=ao("bum"),Gt=ao("um"),Gu=ao("sp"),Wu=ao("rtg"),Yu=ao("rtc");function Ju(e,n=rn){vr("ec",e,n)}const jl="components",Qu="directives",Vl=Symbol.for("v-ndc");function Er(e){return ze(e)?Dl(jl,e,!1)||e:e||Vl}function Xu(e){return Dl(Qu,e)}function Dl(e,n,o=!0,a=!1){const r=en||rn;if(r){const i=r.type;if(e===jl){const l=jd(i,!1);if(l&&(l===n||l===pn(n)||l===lr(pn(n))))return i}const s=hi(r[e]||i[e],n)||hi(r.appContext[e],n);return!s&&a?i:s}}function hi(e,n){return e&&(e[n]||e[pn(n)]||e[lr(pn(n))])}function fn(e,n,o,a){let r;const i=o,s=Ne(e);if(s||ze(e)){const l=s&&To(e);let c=!1,u=!1;l&&(c=!Tn(e),u=oo(e),e=mr(e)),r=new Array(e.length);for(let d=0,m=e.length;d<m;d++)r[d]=n(c?u?qo(Pn(e[d])):Pn(e[d]):e[d],d,void 0,i)}else if(typeof e=="number"){r=new Array(e);for(let l=0;l<e;l++)r[l]=n(l+1,l,void 0,i)}else if(qe(e))if(e[Symbol.iterator])r=Array.from(e,(l,c)=>n(l,c,void 0,i));else{const l=Object.keys(e);r=new Array(l.length);for(let c=0,u=l.length;c<u;c++){const d=l[c];r[c]=n(e[d],d,c,i)}}else r=[];return r}function gn(e,n,o,a,r,i){if(o==null&&(o={}),en.ce||en.parent&&Vo(en.parent)&&en.parent.ce){const u=o,d=Object.keys(u).length>0;return n!=="default"&&(u.name=n),E(),Pe(we,null,[M("slot",u,a&&a())],d?-2:64)}let s=e[n];s&&s._c&&(s._d=!1);const l=Qn.length;E();let c;try{const u=s&&Ll(s(o)),d=o.key||i||u&&u.key;c=Pe(we,{key:(d&&!In(d)?d:`_${n}`)+(!u&&a?"_fb":"")},u||(a?a():[]),u&&e._===1?64:-2)}catch(u){for(let d=Qn.length;d>l;d--)Qt();throw u}finally{s&&s._c&&(s._d=!0)}return c.scopeId&&(c.slotScopeIds=[c.scopeId+"-s"]),c}function Ll(e){return e.some(n=>ya(n)?!(n.type===an||n.type===we&&!Ll(n.children)):!0)?e:null}function Zu(e,n){const o={};for(const a in e)o[Fa(a)]=e[a];return o}const yt=e=>e?rc(e)?_r(e):yt(e.parent):null,da=Xe(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>yt(e.parent),$root:e=>yt(e.root),$host:e=>e.ce,$emit:e=>e.emit,$options:e=>$l(e),$forceUpdate:e=>e.f||(e.f=()=>{Ut(e.update)}),$nextTick:e=>e.n||(e.n=$o.bind(e.proxy)),$watch:e=>Ou.bind(e)}),wr=(e,n)=>e!==$e&&!e.__isScriptSetup&&De(e,n),ed={get({_:e},n){if(n==="__v_skip")return!0;const{ctx:o,setupState:a,data:r,props:i,accessCache:s,type:l,appContext:c}=e;if(n[0]!=="$"){const f=s[n];if(f!==void 0)switch(f){case 1:return a[n];case 2:return r[n];case 4:return o[n];case 3:return i[n]}else{if(wr(a,n))return s[n]=1,a[n];if(r!==$e&&De(r,n))return s[n]=2,r[n];if(De(i,n))return s[n]=3,i[n];if(o!==$e&&De(o,n))return s[n]=4,o[n];At&&(s[n]=0)}}const u=da[n];let d,m;if(u)return n==="$attrs"&&on(e.attrs,"get",""),u(e);if((d=l.__cssModules)&&(d=d[n]))return d;if(o!==$e&&De(o,n))return s[n]=4,o[n];if(m=c.config.globalProperties,De(m,n))return m[n]},set({_:e},n,o){const{data:a,setupState:r,ctx:i}=e;return wr(r,n)?(r[n]=o,!0):a!==$e&&De(a,n)?(a[n]=o,!0):De(e.props,n)||n[0]==="$"&&n.slice(1)in e?!1:(i[n]=o,!0)},has({_:{data:e,setupState:n,accessCache:o,ctx:a,appContext:r,props:i,type:s}},l){let c;return!!(o[l]||e!==$e&&l[0]!=="$"&&De(e,l)||wr(n,l)||De(i,l)||De(a,l)||De(da,l)||De(r.config.globalProperties,l)||(c=s.__cssModules)&&c[l])},defineProperty(e,n,o){return o.get!=null?e._.accessCache[n]=0:De(o,"value")&&this.set(e,n,o.value,null),Reflect.defineProperty(e,n,o)}};function vi(e){return Ne(e)?e.reduce((n,o)=>(n[o]=null,n),{}):e}let At=!0;function nd(e){const n=$l(e),o=e.proxy,a=e.ctx;At=!1,n.beforeCreate&&gi(n.beforeCreate,e,"bc");const{data:r,computed:i,methods:s,watch:l,provide:c,inject:u,created:d,beforeMount:m,mounted:f,beforeUpdate:b,updated:T,activated:N,deactivated:w,beforeDestroy:F,beforeUnmount:x,destroyed:I,unmounted:q,render:pe,renderTracked:ie,renderTriggered:C,errorCaptured:L,serverPrefetch:Z,expose:ue,inheritAttrs:ne,components:B,directives:$,filters:Q}=n;if(u&&od(u,a,null),s)for(const Te in s){const ve=s[Te];Se(ve)&&(a[Te]=ve.bind(o))}if(r){const Te=r.call(o,o);qe(Te)&&(e.data=Ea(Te))}if(At=!0,i)for(const Te in i){const ve=i[Te],Ue=Se(ve)?ve.bind(o,o):Se(ve.get)?ve.get.bind(o,o):Fn,Ke=!Se(ve)&&Se(ve.set)?ve.set.bind(o):Fn,vn=Le({get:Ue,set:Ke});Object.defineProperty(a,Te,{enumerable:!0,configurable:!0,get:()=>vn.value,set:Je=>vn.value=Je})}if(l)for(const Te in l)ql(l[Te],a,o,Te);if(c){const Te=Se(c)?c.call(o):c;Reflect.ownKeys(Te).forEach(ve=>{ca(ve,Te[ve])})}d&&gi(d,e,"c");function G(Te,ve){Ne(ve)?ve.forEach(Ue=>Te(Ue.bind(o))):ve&&Te(ve.bind(o))}if(G(Hu,m),G(jn,f),G(Uu,b),G(Ku,T),G(Mu,N),G(Fu,w),G(Ju,L),G(Yu,ie),G(Wu,C),G(Kt,x),G(Gt,q),G(Gu,Z),Ne(ue))if(ue.length){const Te=e.exposed||(e.exposed={});ue.forEach(ve=>{Object.defineProperty(Te,ve,{get:()=>o[ve],set:Ue=>o[ve]=Ue,enumerable:!0})})}else e.exposed||(e.exposed={});pe&&e.render===Fn&&(e.render=pe),ne!=null&&(e.inheritAttrs=ne),B&&(e.components=B),$&&(e.directives=$),Z&&Pl(e)}function od(e,n,o=Fn){Ne(e)&&(e=Nt(e));for(const a in e){const r=e[a];let i;qe(r)?"default"in r?i=Me(r.from||a,r.default,!0):i=Me(r.from||a):i=Me(r),tn(i)?Object.defineProperty(n,a,{enumerable:!0,configurable:!0,get:()=>i.value,set:s=>i.value=s}):n[a]=i}}function gi(e,n,o){Rn(Ne(e)?e.map(a=>a.bind(n.proxy)):e.bind(n.proxy),n,o)}function ql(e,n,o,a){let r=a.includes(".")?Bl(o,a):()=>o[a];if(ze(e)){const i=n[e];Se(i)&&Ro(r,i)}else if(Se(e))Ro(r,e.bind(o));else if(qe(e))if(Ne(e))e.forEach(i=>ql(i,n,o,a));else{const i=Se(e.handler)?e.handler.bind(o):n[e.handler];Se(i)&&Ro(r,i,e)}}function $l(e){const n=e.type,{mixins:o,extends:a}=n,{mixins:r,optionsCache:i,config:{optionMergeStrategies:s}}=e.appContext,l=i.get(n);let c;return l?c=l:!r.length&&!o&&!a?c=n:(c={},r.length&&r.forEach(u=>Qa(c,u,s,!0)),Qa(c,n,s)),qe(n)&&i.set(n,c),c}function Qa(e,n,o,a=!1){const{mixins:r,extends:i}=n;i&&Qa(e,i,o,!0),r&&r.forEach(s=>Qa(e,s,o,!0));for(const s in n)if(!(a&&s==="expose")){const l=ad[s]||o&&o[s];e[s]=l?l(e[s],n[s]):n[s]}return e}const ad={data:bi,props:_i,emits:_i,methods:ra,computed:ra,beforeCreate:sn,created:sn,beforeMount:sn,mounted:sn,beforeUpdate:sn,updated:sn,beforeDestroy:sn,beforeUnmount:sn,destroyed:sn,unmounted:sn,activated:sn,deactivated:sn,errorCaptured:sn,serverPrefetch:sn,components:ra,directives:ra,watch:td,provide:bi,inject:rd};function bi(e,n){return n?e?function(){return Xe(Se(e)?e.call(this,this):e,Se(n)?n.call(this,this):n)}:n:e}function rd(e,n){return ra(Nt(e),Nt(n))}function Nt(e){if(Ne(e)){const n={};for(let o=0;o<e.length;o++)n[e[o]]=e[o];return n}return e}function sn(e,n){return e?[...new Set([].concat(e,n))]:n}function ra(e,n){return e?Xe(Object.create(null),e,n):n}function _i(e,n){return e?Ne(e)&&Ne(n)?[...new Set([...e,...n])]:Xe(Object.create(null),vi(e),vi(n??{})):n}function td(e,n){if(!e)return n;if(!n)return e;const o=Xe(Object.create(null),e);for(const a in n)o[a]=sn(e[a],n[a]);return o}function Ml(){return{app:null,config:{isNativeTag:Gs,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let id=0;function sd(e,n){return function(a,r=null){Se(a)||(a=Xe({},a)),r!=null&&!qe(r)&&(r=null);const i=Ml(),s=new WeakSet,l=[];let c=!1;const u=i.app={_uid:id++,_component:a,_props:r,_container:null,_context:i,_instance:null,version:Dd,get config(){return i.config},set config(d){},use(d,...m){return s.has(d)||(d&&Se(d.install)?(s.add(d),d.install(u,...m)):Se(d)&&(s.add(d),d(u,...m))),u},mixin(d){return i.mixins.includes(d)||i.mixins.push(d),u},component(d,m){return m?(i.components[d]=m,u):i.components[d]},directive(d,m){return m?(i.directives[d]=m,u):i.directives[d]},mount(d,m,f){if(!c){const b=u._ceVNode||M(a,r);return b.appContext=i,f===!0?f="svg":f===!1&&(f=void 0),e(b,d,f),c=!0,u._container=d,d.__vue_app__=u,_r(b.component)}},onUnmount(d){l.push(d)},unmount(){c&&(Rn(l,u._instance,16),e(null,u._container),delete u._container.__vue_app__)},provide(d,m){return i.provides[d]=m,u},runWithContext(d){const m=Do;Do=u;try{return d()}finally{Do=m}}};return u}}let Do=null;const ld=(e,n)=>n==="modelValue"||n==="model-value"?e.modelModifiers:e[`${n}Modifiers`]||e[`${pn(n)}Modifiers`]||e[`${So(n)}Modifiers`];function cd(e,n,...o){if(e.isUnmounted)return;const a=e.vnode.props||$e;let r=o;const i=n.startsWith("update:"),s=i&&ld(a,n.slice(7));s&&(s.trim&&(r=o.map(d=>ze(d)?d.trim():d)),s.number&&(r=o.map(cr)));let l,c=a[l=Fa(n)]||a[l=Fa(pn(n))];!c&&i&&(c=a[l=Fa(So(n))]),c&&Rn(c,e,6,r);const u=a[l+"Once"];if(u){if(!e.emitted)e.emitted={};else if(e.emitted[l])return;e.emitted[l]=!0,Rn(u,e,6,r)}}const ud=new WeakMap;function Fl(e,n,o=!1){const a=o?ud:n.emitsCache,r=a.get(e);if(r!==void 0)return r;const i=e.emits;let s={},l=!1;if(!Se(e)){const c=u=>{const d=Fl(u,n,!0);d&&(l=!0,Xe(s,d))};!o&&n.mixins.length&&n.mixins.forEach(c),e.extends&&c(e.extends),e.mixins&&e.mixins.forEach(c)}return!i&&!l?(qe(e)&&a.set(e,null),null):(Ne(i)?i.forEach(c=>s[c]=null):Xe(s,i),qe(e)&&a.set(e,s),s)}function gr(e,n){return!e||!tr(n)?!1:(n=n.slice(2),n=n==="Once"?n:n.replace(/Once$/,""),De(e,n[0].toLowerCase()+n.slice(1))||De(e,So(n))||De(e,n))}function yi(e){const{type:n,vnode:o,proxy:a,withProxy:r,propsOptions:[i],slots:s,attrs:l,emit:c,render:u,renderCache:d,props:m,data:f,setupState:b,ctx:T,inheritAttrs:N}=e,w=Wa(e);let F,x;try{if(o.shapeFlag&4){const q=r||a,pe=q;F=qn(u.call(pe,q,d,m,b,f,T)),x=l}else{const q=n;F=qn(q.length>1?q(m,{attrs:l,slots:s,emit:c}):q(m,null)),x=n.props?l:dd(l)}}catch(q){Qn.length=0,pr(q,e,1),F=M(an)}let I=F;if(x&&N!==!1){const q=Object.keys(x),{shapeFlag:pe}=I;q.length&&pe&7&&(i&&q.some(ir)&&(x=md(x,i)),I=po(I,x,!1,!0))}if(o.dirs&&(I=po(I,null,!1,!0),I.dirs=I.dirs?I.dirs.concat(o.dirs):o.dirs),o.transition){const q=fr(I.type)&&Ya(I)||I;ba(q,o.transition)}return F=I,Wa(w),F}const dd=e=>{let n;for(const o in e)(o==="class"||o==="style"||tr(o))&&((n||(n={}))[o]=e[o]);return n},md=(e,n)=>{const o={};for(const a in e)(!ir(a)||!(a.slice(9)in n))&&(o[a]=e[a]);return o};function pd(e,n,o){const{props:a,children:r,component:i}=e,{props:s,children:l,patchFlag:c}=n,u=i.emitsOptions;if(n.dirs||n.transition)return!0;if(o&&c>=0){if(c&1024)return!0;if(c&16)return a?Ai(a,s,u):!!s;if(c&8){const d=n.dynamicProps;for(let m=0;m<d.length;m++){const f=d[m];if(zl(s,a,f)&&!gr(u,f))return!0}}}else return(r||l)&&(!l||!l.$stable)?!0:a===s?!1:a?s?Ai(a,s,u):!0:!!s;return!1}function Ai(e,n,o){const a=Object.keys(n);if(a.length!==Object.keys(e).length)return!0;for(let r=0;r<a.length;r++){const i=a[r];if(zl(n,e,i)&&!gr(o,i))return!0}return!1}function zl(e,n,o){const a=e[o],r=n[o];return o==="style"&&qe(a)&&qe(r)?!Wo(a,r):a!==r}function fd({vnode:e,parent:n,suspense:o},a){for(;n;){const r=n.subTree;if(r.suspense&&r.suspense.activeBranch===e&&(r.suspense.vnode.el=r.el=a,e=r),r===e)(e=n.vnode).el=a,n=n.parent;else break}o&&o.activeBranch===e&&(o.vnode.el=a)}const Hl={},Ul=()=>Object.create(Hl),Kl=e=>Object.getPrototypeOf(e)===Hl;function hd(e,n,o,a=!1){const r={},i=Ul();e.propsDefaults=Object.create(null),Gl(e,n,r,i);for(const s in e.propsOptions[0])s in r||(r[s]=void 0);o?e.props=a?r:hl(r):e.type.props?e.props=r:e.props=i,e.attrs=i}function vd(e,n,o,a){const{props:r,attrs:i,vnode:{patchFlag:s}}=e,l=je(r),[c]=e.propsOptions;let u=!1;if((a||s>0)&&!(s&16)){if(s&8){const d=e.vnode.dynamicProps;for(let m=0;m<d.length;m++){let f=d[m];if(gr(e.emitsOptions,f))continue;const b=n[f];if(c)if(De(i,f))b!==i[f]&&(i[f]=b,u=!0);else{const T=pn(f);r[T]=xt(c,l,T,b,e,!1)}else b!==i[f]&&(i[f]=b,u=!0)}}}else{Gl(e,n,r,i)&&(u=!0);let d;for(const m in l)(!n||!De(n,m)&&((d=So(m))===m||!De(n,d)))&&(c?o&&(o[m]!==void 0||o[d]!==void 0)&&(r[m]=xt(c,l,m,void 0,e,!0)):delete r[m]);if(i!==l)for(const m in i)(!n||!De(n,m))&&(delete i[m],u=!0)}u&&Yn(e.attrs,"set","")}function Gl(e,n,o,a){const[r,i]=e.propsOptions;let s=!1,l;if(n)for(let c in n){if(ia(c))continue;const u=n[c];let d;r&&De(r,d=pn(c))?!i||!i.includes(d)?o[d]=u:(l||(l={}))[d]=u:gr(e.emitsOptions,c)||(!(c in a)||u!==a[c])&&(a[c]=u,s=!0)}if(i){const c=je(o),u=l||$e;for(let d=0;d<i.length;d++){const m=i[d];o[m]=xt(r,c,m,u[m],e,!De(u,m))}}return s}function xt(e,n,o,a,r,i){const s=e[o];if(s!=null){const l=De(s,"default");if(l&&a===void 0){const c=s.default;if(s.type!==Function&&!s.skipFactory&&Se(c)){const{propsDefaults:u}=r;if(o in u)a=u[o];else{const d=Ca(r);a=u[o]=c.call(null,n),d()}}else a=c;r.ce&&r.ce._setProp(o,a)}s[0]&&(i&&!l?a=!1:s[1]&&(a===""||a===So(o))&&(a=!0))}return a}const gd=new WeakMap;function Wl(e,n,o=!1){const a=o?gd:n.propsCache,r=a.get(e);if(r)return r;const i=e.props,s={},l=[];let c=!1;if(!Se(e)){const d=m=>{c=!0;const[f,b]=Wl(m,n,!0);Xe(s,f),b&&l.push(...b)};!o&&n.mixins.length&&n.mixins.forEach(d),e.extends&&d(e.extends),e.mixins&&e.mixins.forEach(d)}if(!i&&!c)return qe(e)&&a.set(e,Po),Po;if(Ne(i))for(let d=0;d<i.length;d++){const m=pn(i[d]);Ni(m)&&(s[m]=$e)}else if(i)for(const d in i){const m=pn(d);if(Ni(m)){const f=i[d],b=s[m]=Ne(f)||Se(f)?{type:f}:Xe({},f),T=b.type;let N=!1,w=!0;if(Ne(T))for(let F=0;F<T.length;++F){const x=T[F],I=Se(x)&&x.name;if(I==="Boolean"){N=!0;break}else I==="String"&&(w=!1)}else N=Se(T)&&T.name==="Boolean";b[0]=N,b[1]=w,(N||De(b,"default"))&&l.push(m)}}const u=[s,l];return qe(e)&&a.set(e,u),u}function Ni(e){return e[0]!=="$"&&!ia(e)}const Wt=e=>e==="_"||e==="_ctx"||e==="$stable",Yt=e=>Ne(e)?e.map(qn):[qn(e)],bd=(e,n,o)=>{if(n._n)return n;const a=fe((...r)=>Yt(n(...r)),o);return a._c=!1,a},Yl=(e,n,o)=>{const a=e._ctx;for(const r in e){if(Wt(r))continue;const i=e[r];if(Se(i))n[r]=bd(r,i,a);else if(i!=null){const s=Yt(i);n[r]=()=>s}}},Jl=(e,n)=>{const o=Yt(n);e.slots.default=()=>o},Ql=(e,n,o)=>{for(const a in n)(o||!Wt(a))&&(e[a]=n[a])},_d=(e,n,o)=>{const a=e.slots=Ul();if(e.vnode.shapeFlag&32){const r=n._;r?(Ql(a,n,o),o&&Qs(a,"_",r,!0)):Yl(n,a)}else n&&Jl(e,n)},yd=(e,n,o)=>{const{vnode:a,slots:r}=e;let i=!0,s=$e;if(a.shapeFlag&32){const l=n._;l?o&&l===1?i=!1:Ql(r,n,o):(i=!n.$stable,Yl(n,r)),s=n}else n&&(Jl(e,n),s={default:1});if(i)for(const l in r)!Wt(l)&&s[l]==null&&delete r[l]},ln=Td;function Ad(e){return Nd(e)}function Nd(e,n){const o=ur();o.__VUE__=!0;const{insert:a,remove:r,patchProp:i,createElement:s,createText:l,createComment:c,setText:u,setElementText:d,parentNode:m,nextSibling:f,setScopeId:b=Fn,insertStaticContent:T}=e,N=(h,g,y,j=null,z=null,k=null,re=void 0,ae=null,oe=!!g.dynamicChildren)=>{if(h===g)return;h&&!No(h,g)&&(j=O(h),Je(h,z,k,!0),h=null),g.patchFlag===-2&&(oe=!1,g.dynamicChildren=null);const{type:U,ref:_e,shapeFlag:te}=g;switch(U){case br:w(h,g,y,j);break;case an:F(h,g,y,j);break;case Ha:h==null&&x(g,y,j,re);break;case we:B(h,g,y,j,z,k,re,ae,oe);break;default:te&1?pe(h,g,y,j,z,k,re,ae,oe):te&6?$(h,g,y,j,z,k,re,ae,oe):(te&64||te&128)&&U.process(h,g,y,j,z,k,re,ae,oe,he)}_e!=null&&z?ua(_e,h&&h.ref,k,g||h,!g):_e==null&&h&&h.ref!=null&&ua(h.ref,null,k,h,!0)},w=(h,g,y,j)=>{if(h==null)a(g.el=l(g.children),y,j);else{const z=g.el=h.el;g.children!==h.children&&u(z,g.children)}},F=(h,g,y,j)=>{h==null?a(g.el=c(g.children||""),y,j):g.el=h.el},x=(h,g,y,j)=>{[h.el,h.anchor]=T(h.children,g,y,j,h.el,h.anchor)},I=({el:h,anchor:g},y,j)=>{let z;for(;h&&h!==g;)z=f(h),a(h,y,j),h=z;a(g,y,j)},q=({el:h,anchor:g})=>{let y;for(;h&&h!==g;)y=f(h),r(h),h=y;r(g)},pe=(h,g,y,j,z,k,re,ae,oe)=>{if(g.type==="svg"?re="svg":g.type==="math"&&(re="mathml"),h==null)ie(g,y,j,z,k,re,ae,oe);else{const U=h.el&&h.el._isVueCE?h.el:null;try{U&&U._beginPatch(),Z(h,g,z,k,re,ae,oe)}finally{U&&U._endPatch()}}},ie=(h,g,y,j,z,k,re,ae)=>{let oe,U;const{props:_e,shapeFlag:te,transition:ge,dirs:xe}=h;if(oe=h.el=s(h.type,k,_e&&_e.is,_e),te&8?d(oe,h.children):te&16&&L(h.children,oe,null,j,z,Cr(h,k),re,ae),xe&&ho(h,null,j,"created"),C(oe,h,h.scopeId,re,j),_e){for(const Oe in _e)Oe!=="value"&&!ia(Oe)&&i(oe,Oe,null,_e[Oe],k,j);"value"in _e&&i(oe,"value",null,_e.value,k),(U=_e.onVnodeBeforeMount)&&Vn(U,j,h)}xe&&ho(h,null,j,"beforeMount");const ke=xd(z,ge);ke&&ge.beforeEnter(oe),a(oe,g,y),((U=_e&&_e.onVnodeMounted)||ke||xe)&&ln(()=>{U&&Vn(U,j,h),ke&&ge.enter(oe),xe&&ho(h,null,j,"mounted")},z)},C=(h,g,y,j,z)=>{if(y&&b(h,y),j)for(let k=0;k<j.length;k++)b(h,j[k]);if(z){let k=z.subTree;if(g===k||ec(k.type)&&(k.ssContent===g||k.ssFallback===g)){const re=z.vnode;C(h,re,re.scopeId,re.slotScopeIds,z.parent)}}},L=(h,g,y,j,z,k,re,ae,oe=0)=>{for(let U=oe;U<h.length;U++){const _e=h[U]=ae?Wn(h[U]):qn(h[U]);N(null,_e,g,y,j,z,k,re,ae)}},Z=(h,g,y,j,z,k,re)=>{const ae=g.el=h.el;let{patchFlag:oe,dynamicChildren:U,dirs:_e}=g;oe|=h.patchFlag&16;const te=h.props||$e,ge=g.props||$e;let xe;if(y&&vo(y,!1),(xe=ge.onVnodeBeforeUpdate)&&Vn(xe,y,g,h),_e&&ho(g,h,y,"beforeUpdate"),y&&vo(y,!0),U&&(!h.dynamicChildren||h.dynamicChildren.length!==U.length)&&(oe=0,re=!1,U=null),(te.innerHTML&&ge.innerHTML==null||te.textContent&&ge.textContent==null)&&d(ae,""),U?ue(h.dynamicChildren,U,ae,y,j,Cr(g,z),k):re||ve(h,g,ae,null,y,j,Cr(g,z),k,!1),oe>0){if(oe&16)ne(ae,te,ge,y,z);else if(oe&2&&te.class!==ge.class&&i(ae,"class",null,ge.class,z),oe&4&&i(ae,"style",te.style,ge.style,z),oe&8){const ke=g.dynamicProps;for(let Oe=0;Oe<ke.length;Oe++){const t=ke[Oe],_=te[t],S=ge[t];(S!==_||t==="value")&&i(ae,t,_,S,z,y)}}oe&1&&h.children!==g.children&&d(ae,g.children)}else!re&&U==null&&ne(ae,te,ge,y,z);((xe=ge.onVnodeUpdated)||_e)&&ln(()=>{xe&&Vn(xe,y,g,h),_e&&ho(g,h,y,"updated")},j)},ue=(h,g,y,j,z,k,re)=>{for(let ae=0;ae<g.length;ae++){const oe=h[ae],U=g[ae],_e=oe.el&&(oe.type===we||!No(oe,U)||oe.shapeFlag&198)?m(oe.el):y;N(oe,U,_e,null,j,z,k,re,!0)}},ne=(h,g,y,j,z)=>{if(g!==y){if(g!==$e)for(const k in g)!ia(k)&&!(k in y)&&i(h,k,g[k],null,z,j);for(const k in y){if(ia(k))continue;const re=y[k],ae=g[k];re!==ae&&k!=="value"&&i(h,k,ae,re,z,j)}"value"in y&&i(h,"value",g.value,y.value,z)}},B=(h,g,y,j,z,k,re,ae,oe)=>{const U=g.el=h?h.el:l(""),_e=g.anchor=h?h.anchor:l("");let{patchFlag:te,dynamicChildren:ge,slotScopeIds:xe}=g;xe&&(ae=ae?ae.concat(xe):xe),h==null?(a(U,y,j),a(_e,y,j),L(g.children||[],y,_e,z,k,re,ae,oe)):te>0&&te&64&&ge&&h.dynamicChildren&&h.dynamicChildren.length===ge.length?(ue(h.dynamicChildren,ge,y,z,k,re,ae),(g.key!=null||z&&g===z.subTree)&&Jt(h,g,!0)):ve(h,g,y,_e,z,k,re,ae,oe)},$=(h,g,y,j,z,k,re,ae,oe)=>{g.slotScopeIds=ae,h==null?g.shapeFlag&512?z.ctx.activate(g,y,j,re,oe):Q(g,y,j,z,k,re,oe):me(h,g,oe)},Q=(h,g,y,j,z,k,re)=>{const ae=h.component=Cd(h,j,z);if(hr(h)&&(ae.ctx.renderer=he),kd(ae,!1,re),ae.asyncDep){if(z&&z.registerDep(ae,G,re),!h.el){const oe=ae.subTree=M(an);F(null,oe,g,y),h.placeholder=oe.el}}else G(ae,h,g,y,z,k,re)},me=(h,g,y)=>{const j=g.component=h.component;if(pd(h,g,y))if(j.asyncDep&&!j.asyncResolved){Te(j,g,y);return}else j.next=g,j.update();else g.el=h.el,j.vnode=g},G=(h,g,y,j,z,k,re)=>{const ae=()=>{if(h.isMounted){let{next:te,bu:ge,u:xe,parent:ke,vnode:Oe}=h;{const R=Xl(h);if(R){te&&(te.el=Oe.el,Te(h,te,re)),R.asyncDep.then(()=>{ln(()=>{h.isUnmounted||U()},z)});return}}let t=te,_;vo(h,!1),te?(te.el=Oe.el,Te(h,te,re)):te=Oe,ge&&za(ge),(_=te.props&&te.props.onVnodeBeforeUpdate)&&Vn(_,ke,te,Oe),vo(h,!0);const S=yi(h),P=h.subTree;h.subTree=S,N(P,S,m(P.el),O(P),h,z,k),te.el=S.el,t===null&&fd(h,S.el),xe&&ln(xe,z),(_=te.props&&te.props.onVnodeUpdated)&&ln(()=>Vn(_,ke,te,Oe),z)}else{let te;const{el:ge,props:xe}=g,{bm:ke,m:Oe,parent:t,root:_,type:S}=h,P=Vo(g);vo(h,!1),ke&&za(ke),!P&&(te=xe&&xe.onVnodeBeforeMount)&&Vn(te,t,g),vo(h,!0);{_.ce&&_.ce._hasShadowRoot()&&_.ce._injectChildStyle(S,h.parent?h.parent.type:void 0);const R=h.subTree=yi(h);N(null,R,y,j,h,z,k),g.el=R.el}if(Oe&&ln(Oe,z),!P&&(te=xe&&xe.onVnodeMounted)){const R=g;ln(()=>Vn(te,t,R),z)}(g.shapeFlag&256||t&&Vo(t.vnode)&&t.vnode.shapeFlag&256)&&h.a&&ln(h.a,z),h.isMounted=!0,g=y=j=null}};h.scope.on();const oe=h.effect=new nl(ae);h.scope.off();const U=h.update=oe.run.bind(oe),_e=h.job=oe.runIfDirty.bind(oe);_e.i=h,_e.id=h.uid,oe.scheduler=()=>Ut(_e),vo(h,!0),U()},Te=(h,g,y)=>{g.component=h;const j=h.vnode.props;h.vnode=g,h.next=null,vd(h,g.props,j,y),yd(h,g.children,y),eo(),ui(h),no()},ve=(h,g,y,j,z,k,re,ae,oe=!1)=>{const U=h&&h.children,_e=h?h.shapeFlag:0,te=g.children,{patchFlag:ge,shapeFlag:xe}=g;if(ge>0){if(ge&128){Ke(U,te,y,j,z,k,re,ae,oe);return}else if(ge&256){Ue(U,te,y,j,z,k,re,ae,oe);return}}xe&8?(_e&16&&Ye(U,z,k),te!==U&&d(y,te)):_e&16?xe&16?Ke(U,te,y,j,z,k,re,ae,oe):Ye(U,z,k,!0):(_e&8&&d(y,""),xe&16&&L(te,y,j,z,k,re,ae,oe))},Ue=(h,g,y,j,z,k,re,ae,oe)=>{h=h||Po,g=g||Po;const U=h.length,_e=g.length,te=Math.min(U,_e);let ge;for(ge=0;ge<te;ge++){const xe=g[ge]=oe?Wn(g[ge]):qn(g[ge]);N(h[ge],xe,y,null,z,k,re,ae,oe)}U>_e?Ye(h,z,k,!0,!1,te):L(g,y,j,z,k,re,ae,oe,te)},Ke=(h,g,y,j,z,k,re,ae,oe)=>{let U=0;const _e=g.length;let te=h.length-1,ge=_e-1;for(;U<=te&&U<=ge;){const xe=h[U],ke=g[U]=oe?Wn(g[U]):qn(g[U]);if(No(xe,ke))N(xe,ke,y,null,z,k,re,ae,oe);else break;U++}for(;U<=te&&U<=ge;){const xe=h[te],ke=g[ge]=oe?Wn(g[ge]):qn(g[ge]);if(No(xe,ke))N(xe,ke,y,null,z,k,re,ae,oe);else break;te--,ge--}if(U>te){if(U<=ge){const xe=ge+1,ke=xe<_e?g[xe].el:j;for(;U<=ge;)N(null,g[U]=oe?Wn(g[U]):qn(g[U]),y,ke,z,k,re,ae,oe),U++}}else if(U>ge)for(;U<=te;)Je(h[U],z,k,!0),U++;else{const xe=U,ke=U,Oe=new Map;for(U=ke;U<=ge;U++){const A=g[U]=oe?Wn(g[U]):qn(g[U]);A.key!=null&&Oe.set(A.key,U)}let t,_=0;const S=ge-ke+1;let P=!1,R=0;const Y=new Array(S);for(U=0;U<S;U++)Y[U]=0;for(U=xe;U<=te;U++){const A=h[U];if(_>=S){Je(A,z,k,!0);continue}let H;if(A.key!=null)H=Oe.get(A.key);else for(t=ke;t<=ge;t++)if(Y[t-ke]===0&&No(A,g[t])){H=t;break}H===void 0?Je(A,z,k,!0):(Y[H-ke]=U+1,H>=R?R=H:P=!0,N(A,g[H],y,null,z,k,re,ae,oe),_++)}const p=P?Bd(Y):Po;for(t=p.length-1,U=S-1;U>=0;U--){const A=ke+U,H=g[A],V=g[A+1],D=A+1<_e?V.el||Zl(V):j;Y[U]===0?N(null,H,y,D,z,k,re,ae,oe):P&&(t<0||U!==p[t]?vn(H,y,D,2):t--)}}},vn=(h,g,y,j,z=null)=>{const{el:k,type:re,transition:ae,children:oe,shapeFlag:U}=h;if(U&6){vn(h.component.subTree,g,y,j);return}if(U&128){h.suspense.move(g,y,j);return}if(U&64){re.move(h,g,y,he);return}if(re===we){a(k,g,y);for(let te=0;te<oe.length;te++)vn(oe[te],g,y,j);a(h.anchor,g,y);return}if(re===Ha){I(h,g,y);return}if(j!==2&&U&1&&ae)if(j===0)ae.persisted&&!k[xn]?a(k,g,y):(ae.beforeEnter(k),a(k,g,y),ln(()=>ae.enter(k),z));else{const{leave:te,delayLeave:ge,afterLeave:xe}=ae,ke=()=>{h.ctx.isUnmounted?r(k):a(k,g,y)},Oe=()=>{const t=k._isLeaving||!!k[xn];k._isLeaving&&k[xn](!0),ae.persisted&&!t?ke():te(k,()=>{ke(),xe&&xe()})};ge?ge(k,ke,Oe):Oe()}else a(k,g,y)},Je=(h,g,y,j=!1,z=!1)=>{const{type:k,props:re,ref:ae,children:oe,dynamicChildren:U,shapeFlag:_e,patchFlag:te,dirs:ge,cacheIndex:xe,memo:ke}=h;if(te===-2&&(z=!1),ae!=null&&(eo(),ua(ae,null,y,h,!0),no()),xe!=null&&(g.renderCache[xe]=void 0),_e&256){g.ctx.deactivate(h);return}const Oe=_e&1&&ge,t=!Vo(h);let _;if(t&&(_=re&&re.onVnodeBeforeUnmount)&&Vn(_,g,h),_e&6)We(h.component,y,j);else{if(_e&128){h.suspense.unmount(y,j);return}Oe&&ho(h,null,g,"beforeUnmount"),_e&64?h.type.remove(h,g,y,he,j):U&&!U.hasOnce&&(k!==we||te>0&&te&64)?Ye(U,g,y,!1,!0):(k===we&&te&384||!z&&_e&16)&&Ye(oe,g,y),j&&bn(h)}const S=ke!=null&&xe==null;(t&&(_=re&&re.onVnodeUnmounted)||Oe||S)&&ln(()=>{_&&Vn(_,g,h),Oe&&ho(h,null,g,"unmounted"),S&&(h.el=null)},y)},bn=h=>{const{type:g,el:y,anchor:j,transition:z}=h;if(g===we){Sn(y,j);return}if(g===Ha){q(h);return}const k=()=>{r(y),z&&!z.persisted&&z.afterLeave&&z.afterLeave()};if(h.shapeFlag&1&&z&&!z.persisted){const{leave:re,delayLeave:ae}=z,oe=()=>re(y,k);ae?ae(h.el,k,oe):oe()}else k()},Sn=(h,g)=>{let y;for(;h!==g;)y=f(h),r(h),h=y;r(g)},We=(h,g,y)=>{const{bum:j,scope:z,job:k,subTree:re,um:ae,m:oe,a:U}=h;xi(oe),xi(U),j&&za(j),z.stop(),k&&(k.flags|=8,Je(re,h,g,y)),ae&&ln(ae,g),ln(()=>{h.isUnmounted=!0},g)},Ye=(h,g,y,j=!1,z=!1,k=0)=>{for(let re=k;re<h.length;re++)Je(h[re],g,y,j,z)},O=h=>{if(h.shapeFlag&6)return O(h.component.subTree);if(h.shapeFlag&128)return h.suspense.next();const g=f(h.anchor||h.el),y=g&&g[Tl];return y?f(y):g};let le=!1;const X=(h,g,y)=>{let j;h==null?g._vnode&&(Je(g._vnode,null,null,!0),j=g._vnode.component):N(g._vnode||null,h,g,null,null,null,y),g._vnode=h,le||(le=!0,ui(j),yl(),le=!1)},he={p:N,um:Je,m:vn,r:bn,mt:Q,mc:L,pc:ve,pbc:ue,n:O,o:e};return{render:X,hydrate:void 0,createApp:sd(X)}}function Cr({type:e,props:n},o){return o==="svg"&&e==="foreignObject"||o==="mathml"&&e==="annotation-xml"&&n&&n.encoding&&n.encoding.includes("html")?void 0:o}function vo({effect:e,job:n},o){o?(e.flags|=32,n.flags|=4):(e.flags&=-33,n.flags&=-5)}function xd(e,n){return(!e||e&&!e.pendingBranch)&&n&&!n.persisted}function Jt(e,n,o=!1){const a=e.children,r=n.children;if(Ne(a)&&Ne(r))for(let i=0;i<a.length;i++){const s=a[i];let l=r[i];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=r[i]=Wn(r[i]),l.el=s.el),!o&&l.patchFlag!==-2&&Jt(s,l)),l.type===br&&(l.patchFlag===-1&&(l=r[i]=Wn(l)),l.el=s.el),l.type===an&&!l.el&&(l.el=s.el)}}function Bd(e){const n=e.slice(),o=[0];let a,r,i,s,l;const c=e.length;for(a=0;a<c;a++){const u=e[a];if(u!==0){if(r=o[o.length-1],e[r]<u){n[a]=r,o.push(a);continue}for(i=0,s=o.length-1;i<s;)l=i+s>>1,e[o[l]]<u?i=l+1:s=l;u<e[o[i]]&&(i>0&&(n[a]=o[i-1]),o[i]=a)}}for(i=o.length,s=o[i-1];i-- >0;)o[i]=s,s=n[s];return o}function Xl(e){const n=e.subTree.component;if(n)return n.asyncDep&&!n.asyncResolved?n:Xl(n)}function xi(e){if(e)for(let n=0;n<e.length;n++)e[n].flags|=8}function Zl(e){if(e.placeholder)return e.placeholder;const n=e.component;return n?Zl(n.subTree):null}const ec=e=>e.__isSuspense;function Td(e,n){n&&n.pendingBranch?Ne(e)?n.effects.push(...e):n.effects.push(e):ku(e)}const we=Symbol.for("v-fgt"),br=Symbol.for("v-txt"),an=Symbol.for("v-cmt"),Ha=Symbol.for("v-stc"),Qn=[];let _n=null;function E(e=!1){Qn.push(_n=e?null:[])}function Qt(){Qn.pop(),_n=Qn[Qn.length-1]||null}let _a=1;function Xa(e,n=!1){_a+=e,e<0&&_n&&n&&(_n.hasOnce=!0)}function nc(e){return e.dynamicChildren=_a>0?_n||Po:null,Qt(),_a>0&&_n&&_n.push(e),e}function W(e,n,o,a,r,i){return nc(v(e,n,o,a,r,i,!0))}function Pe(e,n,o,a,r){return nc(M(e,n,o,a,r,!0))}function ya(e){return e?e.__v_isVNode===!0:!1}function No(e,n){return e.type===n.type&&e.key===n.key}const oc=({key:e})=>e??null,Ua=({ref:e,ref_key:n,ref_for:o})=>(typeof e=="number"&&(e=""+e),e!=null?ze(e)||tn(e)||Se(e)?{i:en,r:e,k:n,f:!!o}:e:null);function v(e,n=null,o=null,a=0,r=null,i=e===we?0:1,s=!1,l=!1){const c={__v_isVNode:!0,__v_skip:!0,type:e,props:n,key:n&&oc(n),ref:n&&Ua(n),scopeId:Nl,slotScopeIds:null,children:o,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:a,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:en};return l?(Za(c,o),i&128&&e.normalize(c)):o&&(c.shapeFlag|=ze(o)?8:16),_a>0&&!s&&_n&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&_n.push(c),c}const M=Rd;function Rd(e,n=null,o=null,a=0,r=null,i=!1){if((!e||e===Vl)&&(e=an),ya(e)){const l=po(e,n,!0);return o&&Za(l,o),_a>0&&!i&&_n&&(l.shapeFlag&6?_n[_n.indexOf(e)]=l:_n.push(l)),l.patchFlag=-2,l}if(Vd(e)&&(e=e.__vccOpts),n){n=wn(n);let{class:l,style:c}=n;l&&!ze(l)&&(n.class=dn(l)),qe(c)&&(Ht(c)&&!Ne(c)&&(c=Xe({},c)),n.style=dr(c))}const s=ze(e)?1:ec(e)?128:fr(e)?64:qe(e)?4:Se(e)?2:0;return v(e,n,o,a,r,s,i,!0)}function wn(e){return e?Ht(e)||Kl(e)?Xe({},e):e:null}function po(e,n,o=!1,a=!1){const{props:r,ref:i,patchFlag:s,children:l,transition:c}=e,u=n?Bt(r||{},n):r,d={__v_isVNode:!0,__v_skip:!0,type:e.type,props:u,key:u&&oc(u),ref:n&&n.ref?o&&i?Ne(i)?i.concat(Ua(n)):[i,Ua(n)]:Ua(n):i,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:l,target:e.target,targetStart:e.targetStart,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:n&&e.type!==we?s===-1?16:s|16:s,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:c,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&po(e.ssContent),ssFallback:e.ssFallback&&po(e.ssFallback),placeholder:e.placeholder,el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return c&&a&&ba(d,c.clone(d)),d}function Ee(e=" ",n=0){return M(br,null,e,n)}function Sd(e,n){const o=M(Ha,null,e);return o.staticCount=n,o}function ye(e="",n=!1){return n?(E(),Pe(an,null,e)):M(an,null,e)}function qn(e){return e==null||typeof e=="boolean"?M(an):Ne(e)?M(we,null,e.slice()):ya(e)?Wn(e):M(br,null,String(e))}function Wn(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:po(e)}function Za(e,n){let o=0;const{shapeFlag:a}=e;if(n==null)n=null;else if(Ne(n))o=16;else if(typeof n=="object")if(a&65){const r=n.default;r&&(r._c&&(r._d=!1),Za(e,r()),r._c&&(r._d=!0));return}else{o=32;const r=n._;!r&&!Kl(n)?n._ctx=en:r===3&&en&&(en.slots._===1?n._=1:(n._=2,e.patchFlag|=1024))}else if(Se(n)){if(a&65){Za(e,{default:n});return}n={default:n,_ctx:en},o=32}else n=String(n),a&64?(o=16,n=[Ee(n)]):o=8;e.children=n,e.shapeFlag|=o}function Bt(...e){const n={};for(let o=0;o<e.length;o++){const a=e[o];for(const r in a)if(r==="class")n.class!==a.class&&(n.class=dn([n.class,a.class]));else if(r==="style")n.style=dr([n.style,a.style]);else if(tr(r)){const i=n[r],s=a[r];s&&i!==s&&!(Ne(i)&&i.includes(s))?n[r]=i?[].concat(i,s):s:s==null&&i==null&&!ir(r)&&(n[r]=s)}else r!==""&&(n[r]=a[r])}return n}function Vn(e,n,o,a=null){Rn(e,n,7,[o,a])}const Ed=Ml();let wd=0;function Cd(e,n,o){const a=e.type,r=(n?n.appContext:e.appContext)||Ed,i={uid:wd++,vnode:e,type:a,parent:n,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new ou(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:n?n.provides:Object.create(r.provides),ids:n?n.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Wl(a,r),emitsOptions:Fl(a,r),emit:null,emitted:null,propsDefaults:$e,inheritAttrs:a.inheritAttrs,ctx:$e,data:$e,props:$e,attrs:$e,slots:$e,refs:$e,setupState:$e,setupContext:null,suspense:o,suspenseId:o?o.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=n?n.root:i,i.emit=cd.bind(null,i),e.ce&&e.ce(i),i}let rn=null;const ac=()=>rn||en;let er,Aa;{const e=ur(),n=(o,a)=>{let r;return(r=e[o])||(r=e[o]=[]),r.push(a),i=>{r.length>1?r.forEach(s=>s(i)):r[0](i)}};er=n("__VUE_INSTANCE_SETTERS__",o=>rn=o),Aa=n("__VUE_SSR_SETTERS__",o=>Na=o)}const Ca=e=>{const n=rn;return er(e),e.scope.on(),()=>{e.scope.off(),er(n)}},Bi=()=>{rn&&rn.scope.off(),er(null)};function rc(e){return e.vnode.shapeFlag&4}let Na=!1;function kd(e,n=!1,o=!1){n&&Aa(n);const{props:a,children:r}=e.vnode,i=rc(e);hd(e,a,i,n),_d(e,r,o||n);const s=i?Id(e,n):void 0;return n&&Aa(!1),s}function Id(e,n){const o=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,ed);const{setup:a}=o;if(a){eo();const r=e.setupContext=a.length>1?Od(e):null,i=Ca(e),s=wa(a,e,0,[e.props,r]),l=Ws(s);if(no(),i(),(l||e.sp)&&!Vo(e)&&Pl(e),l){if(s.then(Bi,Bi),n)return s.then(c=>{Aa(!0);try{Ti(e,c,n)}finally{Aa(!1)}}).catch(c=>{pr(c,e,0)});e.asyncDep=s}else Ti(e,s)}else tc(e)}function Ti(e,n,o){Se(n)?e.type.__ssrInlineRender?e.ssrRender=n:e.render=n:qe(n)&&(e.setupState=gl(n)),tc(e)}function tc(e,n,o){const a=e.type;e.render||(e.render=a.render||Fn);{const r=Ca(e);eo();try{nd(e)}finally{no(),r()}}}const Pd={get(e,n){return on(e,"get",""),e[n]}};function Od(e){const n=o=>{e.exposed=o||{}};return{attrs:new Proxy(e.attrs,Pd),slots:e.slots,emit:e.emit,expose:n}}function _r(e){return e.exposed?e.exposeProxy||(e.exposeProxy=new Proxy(gl(Au(e.exposed)),{get(n,o){if(o in n)return n[o];if(o in da)return da[o](e)},has(n,o){return o in n||o in da}})):e.proxy}function jd(e,n=!0){return Se(e)?e.displayName||e.name:e.name||n&&e.__name}function Vd(e){return Se(e)&&"__vccOpts"in e}const Le=(e,n)=>Ru(e,n,Na);function Mo(e,n,o){try{Xa(-1);const a=arguments.length;return a===2?qe(n)&&!Ne(n)?ya(n)?M(e,null,[n]):M(e,n):M(e,null,n):(a>3?o=Array.prototype.slice.call(arguments,2):a===3&&ya(o)&&(o=[o]),M(e,n,o))}finally{Xa(1)}}const Dd="3.5.41";let Tt;const Ri=typeof window<"u"&&window.trustedTypes;if(Ri)try{Tt=Ri.createPolicy("vue",{createHTML:e=>e})}catch{}const ic=Tt?e=>Tt.createHTML(e):e=>e,Ld="http://www.w3.org/2000/svg",qd="http://www.w3.org/1998/Math/MathML",Gn=typeof document<"u"?document:null,Si=Gn&&Gn.createElement("template"),$d={insert:(e,n,o)=>{n.insertBefore(e,o||null)},remove:e=>{const n=e.parentNode;n&&n.removeChild(e)},createElement:(e,n,o,a)=>{const r=n==="svg"?Gn.createElementNS(Ld,e):n==="mathml"?Gn.createElementNS(qd,e):o?Gn.createElement(e,{is:o}):Gn.createElement(e);return e==="select"&&a&&a.multiple!=null&&r.setAttribute("multiple",a.multiple),r},createText:e=>Gn.createTextNode(e),createComment:e=>Gn.createComment(e),setText:(e,n)=>{e.nodeValue=n},setElementText:(e,n)=>{e.textContent=n},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>Gn.querySelector(e),setScopeId(e,n){e.setAttribute(n,"")},insertStaticContent(e,n,o,a,r,i){const s=o?o.previousSibling:n.lastChild;if(r&&(r===i||r.nextSibling))for(;n.insertBefore(r.cloneNode(!0),o),!(r===i||!(r=r.nextSibling)););else{Si.innerHTML=ic(a==="svg"?`<svg>${e}</svg>`:a==="mathml"?`<math>${e}</math>`:e);const l=Si.content;if(a==="svg"||a==="mathml"){const c=l.firstChild;for(;c.firstChild;)l.appendChild(c.firstChild);l.removeChild(c)}n.insertBefore(l,o)}return[s?s.nextSibling:n.firstChild,o?o.previousSibling:n.lastChild]}},ro="transition",Zo="animation",xa=Symbol("_vtc"),sc={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},Md=Xe({},Sl,sc),Fd=e=>(e.displayName="Transition",e.props=Md,e),zd=Fd((e,{slots:n})=>Mo($u,Hd(e),n)),go=(e,n=[])=>{Ne(e)?e.forEach(o=>o(...n)):e&&e(...n)},Ei=e=>e?Ne(e)?e.some(n=>n.length>1):e.length>1:!1;function Hd(e){const n={};for(const B in e)B in sc||(n[B]=e[B]);if(e.css===!1)return n;const{name:o="v",type:a,duration:r,enterFromClass:i=`${o}-enter-from`,enterActiveClass:s=`${o}-enter-active`,enterToClass:l=`${o}-enter-to`,appearFromClass:c=i,appearActiveClass:u=s,appearToClass:d=l,leaveFromClass:m=`${o}-leave-from`,leaveActiveClass:f=`${o}-leave-active`,leaveToClass:b=`${o}-leave-to`}=e,T=Ud(r),N=T&&T[0],w=T&&T[1],{onBeforeEnter:F,onEnter:x,onEnterCancelled:I,onLeave:q,onLeaveCancelled:pe,onBeforeAppear:ie=F,onAppear:C=x,onAppearCancelled:L=I}=n,Z=(B,$,Q,me)=>{B._enterCancelled=me,bo(B,$?d:l),bo(B,$?u:s),Q&&Q()},ue=(B,$)=>{B._isLeaving=!1,bo(B,m),bo(B,b),bo(B,f),$&&$()},ne=B=>($,Q)=>{const me=B?C:x,G=()=>Z($,B,Q);go(me,[$,G]),wi(()=>{bo($,B?c:i),Un($,B?d:l),Ei(me)||Ci($,a,N,G)})};return Xe(n,{onBeforeEnter(B){go(F,[B]),Un(B,i),Un(B,s)},onBeforeAppear(B){go(ie,[B]),Un(B,c),Un(B,u)},onEnter:ne(!1),onAppear:ne(!0),onLeave(B,$){B._isLeaving=!0;const Q=()=>ue(B,$);Un(B,m),B._enterCancelled?(Un(B,f),Pi(B)):(Pi(B),Un(B,f)),wi(()=>{B._isLeaving&&(bo(B,m),Un(B,b),Ei(q)||Ci(B,a,w,Q))}),go(q,[B,Q])},onEnterCancelled(B){Z(B,!1,void 0,!0),go(I,[B])},onAppearCancelled(B){Z(B,!0,void 0,!0),go(L,[B])},onLeaveCancelled(B){ue(B),go(pe,[B])}})}function Ud(e){if(e==null)return null;if(qe(e))return[kr(e.enter),kr(e.leave)];{const n=kr(e);return[n,n]}}function kr(e){return Wc(e)}function Un(e,n){n.split(/\s+/).forEach(o=>o&&e.classList.add(o)),(e[xa]||(e[xa]=new Set)).add(n)}function bo(e,n){n.split(/\s+/).forEach(a=>a&&e.classList.remove(a));const o=e[xa];o&&(o.delete(n),o.size||(e[xa]=void 0))}function wi(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}let Kd=0;function Ci(e,n,o,a){const r=e._endId=++Kd,i=()=>{r===e._endId&&a()};if(o!=null)return setTimeout(i,o);const{type:s,timeout:l,propCount:c}=Gd(e,n);if(!s)return a();const u=s+"end";let d=0;const m=()=>{e.removeEventListener(u,f),i()},f=b=>{b.target===e&&++d>=c&&m()};setTimeout(()=>{d<c&&m()},l+1),e.addEventListener(u,f)}function Gd(e,n){const o=window.getComputedStyle(e),a=T=>(o[T]||"").split(", "),r=a(`${ro}Delay`),i=a(`${ro}Duration`),s=ki(r,i),l=a(`${Zo}Delay`),c=a(`${Zo}Duration`),u=ki(l,c);let d=null,m=0,f=0;n===ro?s>0&&(d=ro,m=s,f=i.length):n===Zo?u>0&&(d=Zo,m=u,f=c.length):(m=Math.max(s,u),d=m>0?s>u?ro:Zo:null,f=d?d===ro?i.length:c.length:0);const b=d===ro&&/\b(?:transform|all)(?:,|$)/.test(a(`${ro}Property`).toString());return{type:d,timeout:m,propCount:f,hasTransform:b}}function ki(e,n){for(;e.length<n.length;)e=e.concat(e);return Math.max(...n.map((o,a)=>Ii(o)+Ii(e[a])))}function Ii(e){return e==="auto"?0:Number(e.slice(0,-1).replace(",","."))*1e3}function Pi(e){return(e?e.ownerDocument:document).body.offsetHeight}function Wd(e,n,o){const a=e[xa];a&&(n=(n?[n,...a]:[...a]).join(" ")),n==null?e.removeAttribute("class"):o?e.setAttribute("class",n):e.className=n}const nr=Symbol("_vod"),lc=Symbol("_vsh"),Oi={name:"show",beforeMount(e,{value:n},{transition:o}){e[nr]=e.style.display==="none"?"":e.style.display,o&&n?o.beforeEnter(e):ea(e,n)},mounted(e,{value:n},{transition:o}){o&&n&&o.enter(e)},updated(e,{value:n,oldValue:o},{transition:a}){!n!=!o&&(a?n?(a.beforeEnter(e),ea(e,!0),a.enter(e)):a.leave(e,()=>{ea(e,!1)}):ea(e,n))},beforeUnmount(e,{value:n}){ea(e,n)}};function ea(e,n){e.style.display=n?e[nr]:"none",e[lc]=!n}const Yd=Symbol(""),Jd=/(?:^|;)\s*display\s*:/;function Qd(e,n,o){const a=e.style,r=ze(o);let i=!1;if(o&&!r){if(n)if(ze(n))for(const s of n.split(";")){const l=s.slice(0,s.indexOf(":")).trim();o[l]==null&&ta(a,l,"")}else for(const s in n)o[s]==null&&ta(a,s,"");for(const s in o){s==="display"&&(i=!0);const l=o[s];l!=null?Zd(e,s,!ze(n)&&n?n[s]:void 0,l)||ta(a,s,l):ta(a,s,"")}}else if(r){if(n!==o){const s=a[Yd];s&&(o+=";"+s),a.cssText=o,i=Jd.test(o)}}else n&&e.removeAttribute("style");nr in e&&(e[nr]=i?a.display:"",e[lc]&&(a.display="none"))}const ji=/\s*!important$/;function ta(e,n,o){if(Ne(o))o.forEach(a=>ta(e,n,a));else if(o==null&&(o=""),n.startsWith("--"))e.setProperty(n,o);else{const a=Xd(e,n);ji.test(o)?e.setProperty(So(a),o.replace(ji,""),"important"):e[a]=o}}const Vi=["Webkit","Moz","ms"],Ir={};function Xd(e,n){const o=Ir[n];if(o)return o;let a=pn(n);if(a!=="filter"&&a in e)return Ir[n]=a;a=lr(a);for(let r=0;r<Vi.length;r++){const i=Vi[r]+a;if(i in e)return Ir[n]=i}return n}function Zd(e,n,o,a){return e.tagName==="TEXTAREA"&&(n==="width"||n==="height")&&ze(a)&&o===a}const Di="http://www.w3.org/1999/xlink";function Li(e,n,o,a,r,i=eu(n)){a&&n.startsWith("xlink:")?o==null?e.removeAttributeNS(Di,n.slice(6,n.length)):e.setAttributeNS(Di,n,o):o==null||i&&!Xs(o)?e.removeAttribute(n):e.setAttribute(n,i?"":In(o)?String(o):o)}function qi(e,n,o,a,r){if(n==="innerHTML"||n==="textContent"){o!=null&&(e[n]=n==="innerHTML"?ic(o):o);return}const i=e.tagName;if(n==="value"&&i!=="PROGRESS"&&!i.includes("-")){const l=i==="OPTION"?e.getAttribute("value")||"":e.value,c=o==null?e.type==="checkbox"?"on":"":String(o);(l!==c||!("_value"in e))&&(e.value=c),o==null&&e.removeAttribute(n),e._value=o;return}let s=!1;if(o===""||o==null){const l=typeof e[n];l==="boolean"?o=Xs(o):o==null&&l==="string"?(o="",s=!0):l==="number"&&(o=0,s=!0)}try{e[n]=o}catch{}s&&e.removeAttribute(r||n)}function uo(e,n,o,a){e.addEventListener(n,o,a)}function em(e,n,o,a){e.removeEventListener(n,o,a)}const $i=Symbol("_vei");function nm(e,n,o,a,r=null){const i=e[$i]||(e[$i]={}),s=i[n];if(a&&s)s.value=a;else{const[l,c]=rm(n);if(a){const u=i[n]=sm(a,r);uo(e,l,u,c)}else s&&(em(e,l,s,c),i[n]=void 0)}}const om=/(Once|Passive|Capture)$/,am=/^on:?(?:Once|Passive|Capture)$/;function rm(e){let n,o;for(;(o=e.match(om))&&!am.test(e);)n||(n={}),e=e.slice(0,e.length-o[1].length),n[o[1].toLowerCase()]=!0;return[e[2]===":"?e.slice(3):So(e.slice(2)),n]}let Pr=0;const tm=Promise.resolve(),im=()=>Pr||(tm.then(()=>Pr=0),Pr=Date.now());function sm(e,n){const o=a=>{if(!a._vts)a._vts=Date.now();else if(a._vts<=o.attached)return;const r=o.value;if(Ne(r)){const i=a.stopImmediatePropagation;a.stopImmediatePropagation=()=>{i.call(a),a._stopped=!0};const s=r.slice(),l=[a];for(let c=0;c<s.length&&!a._stopped;c++){const u=s[c];u&&Rn(u,n,5,l)}}else Rn(r,n,5,[a])};return o.value=e,o.attached=im(),o}const Mi=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,lm=(e,n,o,a,r,i)=>{const s=r==="svg";n==="class"?Wd(e,a,s):n==="style"?Qd(e,o,a):tr(n)?ir(n)||nm(e,n,o,a,i):(n[0]==="."?(n=n.slice(1),!0):n[0]==="^"?(n=n.slice(1),!1):cm(e,n,a,s))?(qi(e,n,a),!e.tagName.includes("-")&&(n==="value"||n==="checked"||n==="selected")&&Li(e,n,a,s,i,n!=="value")):e._isVueCE&&(um(e,n)||e._def.__asyncLoader&&(/[A-Z]/.test(n)||!ze(a)))?qi(e,pn(n),a,i,n):(n==="true-value"?e._trueValue=a:n==="false-value"&&(e._falseValue=a),Li(e,n,a,s))};function cm(e,n,o,a){if(a)return!!(n==="innerHTML"||n==="textContent"||n in e&&Mi(n)&&Se(o));if(n==="spellcheck"||n==="draggable"||n==="translate"||n==="autocorrect"||n==="sandbox"&&e.tagName==="IFRAME"||n==="form"||n==="list"&&e.tagName==="INPUT"||n==="type"&&e.tagName==="TEXTAREA")return!1;if(n==="width"||n==="height"){const r=e.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return Mi(n)&&ze(o)?!1:n in e}function um(e,n){const o=e._def.props;if(!o)return!1;const a=pn(n);return Array.isArray(o)?o.some(r=>pn(r)===a):Object.keys(o).some(r=>pn(r)===a)}const Fo=e=>{const n=e.props["onUpdate:modelValue"]||!1;return Ne(n)?o=>za(n,o):n};function dm(e){e.target.composing=!0}function Fi(e){const n=e.target;n.composing&&(n.composing=!1,n.dispatchEvent(new Event("input")))}const Mn=Symbol("_assign"),qa=Symbol("_initialValue");function Or(e,n,o){return n&&(e=e.trim()),o&&(e=cr(e)),e}const or={created(e,{modifiers:{lazy:n,trim:o,number:a}},r){e.parentNode&&(e.type==="text"?e[qa]=e.defaultValue.replace(/[\r\n]/g,""):e.type==="textarea"&&(e[qa]=e.defaultValue.replace(/\r\n?/g,`
`))),e[Mn]=Fo(r);const i=a||r.props&&r.props.type==="number";uo(e,n?"change":"input",s=>{s.target.composing||e[Mn](Or(e.value,o,i))}),(o||i)&&uo(e,"change",()=>{e.value=Or(e.value,o,i)}),n||(uo(e,"compositionstart",dm),uo(e,"compositionend",Fi),uo(e,"change",Fi))},mounted(e,{value:n,modifiers:{trim:o,number:a}}){const r=n??"",i=e[qa];delete e[qa],i!==void 0&&(e.type==="text"||e.type==="textarea")&&e.value!==i?e[Mn](Or(e.value,o,a)):e.value=r},beforeUpdate(e,{value:n,oldValue:o,modifiers:{lazy:a,trim:r,number:i}},s){if(e[Mn]=Fo(s),e.composing)return;const l=(i||e.type==="number")&&!/^0\d/.test(e.value)?cr(e.value):e.value,c=n??"";if(l===c)return;const u=e.getRootNode();(u instanceof Document||u instanceof ShadowRoot)&&u.activeElement===e&&e.type!=="range"&&(a&&n===o||r&&e.value.trim()===c)||(e.value=c)}},mm={deep:!0,created(e,n,o){e[Mn]=Fo(o),uo(e,"change",()=>{const a=e._modelValue,r=Ba(e),i=e.checked,s=e[Mn];if(Ne(a)){const l=Dt(a,r),c=l!==-1;if(i&&!c)s(a.concat(r));else if(!i&&c){const u=[...a];u.splice(l,1),s(u)}}else if(Go(a)){const l=new Set(a);i?l.add(r):l.delete(r),s(l)}else s(cc(e,i))})},mounted:zi,beforeUpdate(e,n,o){e[Mn]=Fo(o),zi(e,n,o)}};function zi(e,{value:n,oldValue:o},a){e._modelValue=n;let r;if(Ne(n))r=Dt(n,a.props.value)>-1;else if(Go(n))r=n.has(a.props.value);else{if(n===o)return;r=Wo(n,cc(e,!0))}e.checked!==r&&(e.checked=r)}const jr={deep:!0,created(e,{value:n,modifiers:{number:o}},a){e._modelValue=n,uo(e,"change",()=>{const r=Array.prototype.filter.call(e.options,i=>i.selected).map(i=>o?cr(Ba(i)):Ba(i));e[Mn](e.multiple?Go(e._modelValue)?new Set(r):r:r[0]),e._assigning=!0,$o(()=>{e._assigning=!1})}),e[Mn]=Fo(a)},mounted(e,{value:n}){Hi(e,n)},beforeUpdate(e,{value:n},o){e._modelValue=n,e[Mn]=Fo(o)},updated(e,{value:n}){e._assigning||Hi(e,n)}};function Hi(e,n){const o=e.multiple,a=Ne(n);if(!(o&&!a&&!Go(n))){for(let r=0,i=e.options.length;r<i;r++){const s=e.options[r],l=Ba(s);if(o)if(a){const c=typeof l;c==="string"||c==="number"?s.selected=n.some(u=>String(u)===String(l)):s.selected=Dt(n,l)>-1}else s.selected=n.has(l);else if(Wo(Ba(s),n)){e.selectedIndex!==r&&(e.selectedIndex=r);return}}!o&&e.selectedIndex!==-1&&(e.selectedIndex=-1)}}function Ba(e){return"_value"in e?e._value:e.value}function cc(e,n){const o=n?"_trueValue":"_falseValue";return o in e?e[o]:n}const pm=["ctrl","shift","alt","meta"],fm={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&e.button!==0,middle:e=>"button"in e&&e.button!==1,right:e=>"button"in e&&e.button!==2,exact:(e,n)=>pm.some(o=>e[`${o}Key`]&&!n.includes(o))},Xn=(e,n)=>{if(!e)return e;const o=e._withMods||(e._withMods={}),a=n.join(".");return o[a]||(o[a]=((r,...i)=>{for(let s=0;s<n.length;s++){const l=fm[n[s]];if(l&&l(r,n))return}return e(r,...i)}))},hm=Xe({patchProp:lm},$d);let Ui;function vm(){return Ui||(Ui=Ad(hm))}const gm=((...e)=>{const n=vm().createApp(...e),{mount:o}=n;return n.mount=a=>{const r=_m(a);if(!r)return;const i=n._component;!Se(i)&&!i.render&&!i.template&&(i.template=r.innerHTML),r.nodeType===1&&(r.textContent="");const s=o(r,!1,bm(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),s},n});function bm(e){if(e instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&e instanceof MathMLElement)return"mathml"}function _m(e){return ze(e)?document.querySelector(e):e}const ym="modulepreload",Am=function(e){return"/Extensao-26.2/"+e},Ki={},Nm=function(n,o,a){let r=Promise.resolve();if(o&&o.length>0){let u=function(d){return Promise.all(d.map(m=>Promise.resolve(m).then(f=>({status:"fulfilled",value:f}),f=>({status:"rejected",reason:f}))))};var s=u;document.getElementsByTagName("link");const l=document.querySelector("meta[property=csp-nonce]"),c=l?.nonce||l?.getAttribute("nonce");r=u(o.map(d=>{if(d=Am(d),d in Ki)return;Ki[d]=!0;const m=d.endsWith(".css"),f=m?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${d}"]${f}`))return;const b=document.createElement("link");if(b.rel=m?"stylesheet":ym,m||(b.as="script"),b.crossOrigin="",b.href=d,c&&b.setAttribute("nonce",c),document.head.appendChild(b),m)return new Promise((T,N)=>{b.addEventListener("load",T),b.addEventListener("error",()=>N(new Error(`Unable to preload CSS for ${d}`)))})}))}function i(l){const c=new Event("vite:preloadError",{cancelable:!0});if(c.payload=l,window.dispatchEvent(c),!c.defaultPrevented)throw l}return r.then(l=>{for(const c of l||[])c.status==="rejected"&&i(c.reason);return n().catch(i)})};function xm(e={}){const{immediate:n=!1,onNeedReload:o,onNeedRefresh:a,onOfflineReady:r,onRegistered:i,onRegisteredSW:s,onRegisterError:l}=e;let c,u;const d=async(f=!0)=>{await u};async function m(){if("serviceWorker"in navigator){if(c=await Nm(async()=>{const{Workbox:f}=await import("./workbox-window.prod.es5-BBnX5xw4.js");return{Workbox:f}},[]).then(({Workbox:f})=>new f("/Extensao-26.2/sw.js",{scope:"/Extensao-26.2/",type:"classic"})).catch(f=>{l?.(f)}),!c)return;c.addEventListener("activated",f=>{(f.isUpdate||f.isExternal)&&(o?o():window.location.reload())}),c.addEventListener("installed",f=>{f.isUpdate||r?.()}),c.register({immediate:n}).then(f=>{s?s("/Extensao-26.2/sw.js",f):i?.(f)}).catch(f=>{l?.(f)})}}return u=m(),d}const Bm="acessibilidade-checker",Tm=2,cn=Object.freeze({projects:"projects",environments:"environments",elements:"elements",evaluations:"evaluations",ruleSets:"ruleSets"});function ko(e){return new Promise((n,o)=>{e.onsuccess=()=>n(e.result),e.onerror=()=>o(e.error??new Error("Falha no IndexedDB."))})}function Rm(e=globalThis.indexedDB){if(!e)return Promise.reject(new Error("IndexedDB não está disponível neste ambiente."));const n=e.open(Bm,Tm);return n.onupgradeneeded=()=>{const o=n.result;if(o.objectStoreNames.contains(cn.projects)||o.createObjectStore(cn.projects,{keyPath:"id"}),o.objectStoreNames.contains(cn.environments)||o.createObjectStore(cn.environments,{keyPath:"id"}).createIndex("projectId","projectId",{unique:!1}),o.objectStoreNames.contains(cn.elements)||o.createObjectStore(cn.elements,{keyPath:"id"}).createIndex("environmentId","environmentId",{unique:!1}),!o.objectStoreNames.contains(cn.evaluations)){const a=o.createObjectStore(cn.evaluations,{keyPath:"id"});a.createIndex("elementId","elementId",{unique:!1}),a.createIndex("evaluatedAt","evaluatedAt",{unique:!1})}o.objectStoreNames.contains(cn.ruleSets)||o.createObjectStore(cn.ruleSets,{keyPath:"id"})},ko(n)}async function na(e,n,o,a){const r=e.transaction(n,o),i=r.objectStore(n),s=await a(i);return await new Promise((l,c)=>{r.oncomplete=l,r.onabort=r.onerror=()=>c(r.error??new Error("Transação IndexedDB não concluída."))}),s}class ka{constructor(n,o){this.database=n,this.storeName=o}get(n){return na(this.database,this.storeName,"readonly",o=>ko(o.get(n)))}getAll(){return na(this.database,this.storeName,"readonly",n=>ko(n.getAll()))}getAllBy(n,o){return na(this.database,this.storeName,"readonly",a=>ko(a.index(n).getAll(o)))}put(n){return na(this.database,this.storeName,"readwrite",async o=>(await ko(o.put(n)),n))}delete(n){return na(this.database,this.storeName,"readwrite",o=>ko(o.delete(n)))}}class Sm extends ka{constructor(n){super(n,cn.elements)}getByEnvironmentId(n){return this.getAllBy("environmentId",n)}}class Em extends ka{constructor(n){super(n,cn.environments)}getByProjectId(n){return this.getAllBy("projectId",n)}}class wm extends ka{constructor(n){super(n,cn.evaluations)}getByElementId(n){return this.getAllBy("elementId",n)}}class Cm extends ka{constructor(n){super(n,cn.projects)}}class km extends ka{constructor(n){super(n,cn.ruleSets)}}const Im=new Set([">=","<=",">","<","==","!="]);function ma(e,n,o){switch(n){case">=":return e>=o;case"<=":return e<=o;case">":return e>o;case"<":return e<o;case"==":return e===o;case"!=":return e!==o;default:throw new Error(`Operador não suportado: ${n}`)}}function Pm(e,n){return n.obrigatorio&&(e==null||e==="")?{valid:!1,reason:"Campo obrigatório não preenchido."}:e==null||e===""?{valid:!0}:n.tipo==="number"&&typeof e!="number"?{valid:!1,reason:"O valor deve ser numérico."}:n.tipo==="boolean"&&typeof e!="boolean"?{valid:!1,reason:"O valor deve ser booleano."}:{valid:!0}}class Om{evaluate(n,o,a={}){return n.map(r=>this.evaluateRule(r,o,a))}evaluateRule(n,o,a){const r=a[n.parametro],i=o[n.parametro];if(!r)return{id:n.id,status:"erro",mensagem:`Parâmetro não definido: ${n.parametro}`};const s=Pm(i,r);if(!s.valid)return{id:n.id,nome:n.nome,status:"invalido",mensagem:s.reason,referencia:n.referencia};if(i==null||i==="")return{id:n.id,nome:n.nome,status:"nao_avaliado",referencia:n.referencia};if(n.tipo==="checklist")return r.tipo==="boolean"?{id:n.id,nome:n.nome,status:i?"conforme":"nao_conforme",valorInformado:i,valorEsperado:!0,operador:"==",parametro:n.parametro,unidade:r.unidade,referencia:n.referencia}:{id:n.id,nome:n.nome,status:"manual",valor:i,referencia:n.referencia};if(n.tipo==="conditional")return this.evaluateConditional(n,o,a);const l=ma(i,n.operador,n.valor);return{id:n.id,nome:n.nome,status:l?"conforme":"nao_conforme",valorInformado:i,valorEsperado:n.valor,operador:n.operador,parametro:n.parametro,unidade:r.unidade,referencia:n.referencia}}evaluateConditional(n,o,a){for(const r of n.condicoes??[]){const i=o[n.parametro];if(r.quando&&ma(i,r.quando.operador,r.quando.valor)){if(r.resultado)return{id:n.id,nome:n.nome,status:r.resultado,valorInformado:i,referencia:n.referencia,mensagem:r.mensagem};if(r.verificar){const s=o[r.verificar.parametro],l=ma(s,r.verificar.operador,r.verificar.valor);return{id:n.id,nome:n.nome,status:l?"conforme":"nao_conforme",valorInformado:s,valorEsperado:r.verificar.valor,operador:r.verificar.operador,parametro:r.verificar.parametro,unidade:a[r.verificar.parametro]?.unidade,parametroCondicional:n.parametro,valorCondicional:i,operadorCondicional:r.quando.operador,limiteCondicional:r.quando.valor,mensagem:r.mensagem,referencia:n.referencia}}}}return{id:n.id,nome:n.nome,status:"nao_avaliado",referencia:n.referencia}}}function Bn(e,n){if(typeof e!="string"||e.trim()==="")throw new TypeError(`${n} deve ser um texto não vazio.`);return e.trim()}function Ia(){return typeof globalThis.crypto?.randomUUID=="function"?globalThis.crypto.randomUUID():`${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`}function zn(e=new Date,n="data"){const o=e instanceof Date?e:new Date(e);if(Number.isNaN(o.getTime()))throw new TypeError(`${n} deve ser uma data válida.`);return o.toISOString()}function Rt(e){return typeof structuredClone=="function"?structuredClone(e):JSON.parse(JSON.stringify(e))}function Vr({id:e=Ia(),elementId:n,data:o,result:a,evaluatedAt:r=new Date}={}){if(o===void 0||a===void 0)throw new TypeError("data e result são obrigatórios.");return{id:Bn(e,"id"),elementId:Bn(n,"elementId"),data:Rt(o),result:Rt(a),evaluatedAt:zn(r,"evaluatedAt")}}const jm=["nao_conforme","erro","invalido"],Vm=["atencao","manual","nao_avaliado"];function St(e){const n=e[0]?.result;return n?.length?n.some(o=>jm.includes(o.status))?"nao_conforme":n.some(o=>Vm.includes(o.status))?"nao_avaliado":"conforme":"nao_avaliado"}class Dm{constructor({elementRepository:n,environmentRepository:o,evaluationRepository:a,ruleEngine:r=new Om}){this.elementRepository=n,this.environmentRepository=o,this.evaluationRepository=a,this.ruleEngine=r}async evaluateElement({elementId:n,checklist:o,data:a,evaluatedAt:r}){if(!await this.elementRepository.get(n))throw new Error("Elemento não encontrado.");const s=this.ruleEngine.evaluate(o.regras??[],a,o.parametros??{}),l=Vr({elementId:n,data:a,result:s,evaluatedAt:r});return this.evaluationRepository.put(l)}async saveElementData({elementId:n,data:o,savedAt:a}){if(!await this.elementRepository.get(n))throw new Error("Elemento não encontrado.");const i=Vr({elementId:n,data:o,result:[],evaluatedAt:a});return this.evaluationRepository.put(i)}async saveElementAnswers({elementId:n,checklist:o,data:a,savedAt:r}){return Object.keys(a??{}).length>0?this.evaluateElement({elementId:n,checklist:o,data:a,evaluatedAt:r}):this.saveElementData({elementId:n,data:a,savedAt:r})}evaluateTransientElement({elementId:n,checklist:o,data:a,evaluatedAt:r}){const i=this.ruleEngine.evaluate(o.regras??[],a,o.parametros??{});return Vr({elementId:n,data:a,result:i,evaluatedAt:r})}async listEvaluations(n){return(await this.evaluationRepository.getByElementId(n)).sort((a,r)=>r.evaluatedAt.localeCompare(a.evaluatedAt))}async getEnvironmentSummary(n){const o=await this.elementRepository.getByEnvironmentId(n);return this.#e(o)}async getProjectSummary(n){if(!this.environmentRepository)throw new Error("Repositório de ambientes não configurado.");const o=await this.environmentRepository.getByProjectId(n),a=await Promise.all(o.map(r=>this.elementRepository.getByEnvironmentId(r.id)));return this.#e(a.flat())}async getProjectStatus(n){if(!this.environmentRepository)throw new Error("Repositório de ambientes não configurado.");const o=await this.environmentRepository.getByProjectId(n),a=await Promise.all(o.map(async i=>{const s=await this.elementRepository.getByEnvironmentId(i.id),l=await Promise.all(s.map(async c=>({element:c,status:St(await this.listEvaluations(c.id))})));return{environment:i,elements:l,summary:this.#n(l.map(c=>c.status))}})),r=a.flatMap(i=>i.elements.map(s=>s.status));return{summary:this.#n(r),environments:a}}async#e(n){const o=await Promise.all(n.map(async a=>St(await this.listEvaluations(a.id))));return this.#n(o)}#n(n){const o={totalElements:n.length,conforme:0,nao_conforme:0,nao_avaliado:0,pendente:0,score:0,overallStatus:"nao_avaliado"};for(const a of n)o[a]+=1;return o.pendente=o.nao_avaliado,o.score=o.totalElements?Math.round(o.conforme/o.totalElements*100):0,o.nao_conforme>0?o.overallStatus="nao_conforme":o.nao_avaliado===0&&o.totalElements>0&&(o.overallStatus="conforme"),o}}function Gi({id:e=Ia(),environmentId:n,name:o,type:a,rule:r,createdAt:i=new Date,updatedAt:s=i}={}){return{id:Bn(e,"id"),environmentId:Bn(n,"environmentId"),name:Bn(o,"name"),type:Bn(a,"type"),rule:Bn(r,"rule"),createdAt:zn(i,"createdAt"),updatedAt:zn(s,"updatedAt")}}function Wi({id:e=Ia(),projectId:n,name:o,createdAt:a=new Date,updatedAt:r=a}={}){return{id:Bn(e,"id"),projectId:Bn(n,"projectId"),name:Bn(o,"name"),createdAt:zn(a,"createdAt"),updatedAt:zn(r,"updatedAt")}}function Yi({id:e=Ia(),name:n,description:o="",createdAt:a=new Date,updatedAt:r=a}={}){return{id:Bn(e,"id"),name:Bn(n,"name"),description:typeof o=="string"?o.trim():"",createdAt:zn(a,"createdAt"),updatedAt:zn(r,"updatedAt")}}class Lm{constructor({projectRepository:n,environmentRepository:o,elementRepository:a,evaluationRepository:r}){this.projectRepository=n,this.environmentRepository=o,this.elementRepository=a,this.evaluationRepository=r}async createProject(n){const o=Yi(n);return this.projectRepository.put(o)}listProjects(){return this.projectRepository.getAll()}getProject(n){return this.projectRepository.get(n)}async updateProject(n,{name:o,description:a}){const r=await this.#e(this.projectRepository.get(n),"Projeto");return this.projectRepository.put(Yi({...r,name:o,description:a,updatedAt:new Date}))}async renameProject(n,o){const a=await this.#e(this.projectRepository.get(n),"Projeto");return this.updateProject(n,{name:o,description:a.description})}async createEnvironment(n,o){await this.#e(this.projectRepository.get(n),"Projeto");const a=Wi({...o,projectId:n});return this.environmentRepository.put(a)}listEnvironments(n){return this.environmentRepository.getByProjectId(n)}getEnvironment(n){return this.environmentRepository.get(n)}async renameEnvironment(n,o){const a=await this.#e(this.environmentRepository.get(n),"Ambiente");return this.environmentRepository.put(Wi({...a,name:o,updatedAt:new Date}))}async createElement(n,o){await this.#e(this.environmentRepository.get(n),"Ambiente");const a=Gi({...o,environmentId:n});return this.elementRepository.put(a)}listElements(n){return this.elementRepository.getByEnvironmentId(n)}getElement(n){return this.elementRepository.get(n)}async updateElement(n,o){const a=await this.#e(this.elementRepository.get(n),"Elemento");return this.elementRepository.put(Gi({...a,...o,id:a.id,environmentId:a.environmentId,createdAt:a.createdAt,updatedAt:zn(new Date)}))}async deleteElement(n){const o=await this.evaluationRepository.getByElementId(n);await Promise.all(o.map(a=>this.evaluationRepository.delete(a.id))),await this.elementRepository.delete(n)}async deleteEnvironment(n){const o=await this.elementRepository.getByEnvironmentId(n);await Promise.all(o.map(a=>this.deleteElement(a.id))),await this.environmentRepository.delete(n)}async deleteProject(n){const o=await this.environmentRepository.getByProjectId(n);await Promise.all(o.map(a=>this.deleteEnvironment(a.id))),await this.projectRepository.delete(n)}async#e(n,o){const a=await n;if(!a)throw new Error(`${o} não encontrado.`);return a}}class qm{constructor({evaluationService:n}){this.evaluationService=n,this.current=null}evaluate({name:n,checklist:o,data:a}){const r={id:Ia(),name:n?.trim()||o.nome,type:o.nome,rule:o.id},i=this.evaluationService.evaluateTransientElement({elementId:r.id,checklist:o,data:a});return this.current={element:r,evaluation:i},this.current}getCurrent(){return this.current}clear(){this.current=null}}const $m=new Set(["checklist","conditional"]);function Lo(e){return e!==null&&typeof e=="object"&&!Array.isArray(e)}function pa(e,n,o){(typeof e!="string"||e.trim()==="")&&o.push(`${n} deve ser um texto não vazio.`)}function uc(e,n,o){Im.has(e)||o.push(`${n} deve ser um operador suportado.`)}function Ji(e,n,o){if(!Lo(e)){o.push(`${n} deve ser um objeto.`);return}uc(e.operador,`${n}.operador`,o),"valor"in e||o.push(`${n}.valor é obrigatório.`)}function Mm(e,n,o,a){const r=`regras[${n}]`;if(!Lo(e)){a.push(`${r} deve ser um objeto.`);return}if(pa(e.id,`${r}.id`,a),pa(e.nome,`${r}.nome`,a),pa(e.parametro,`${r}.parametro`,a),typeof e.parametro=="string"&&!(e.parametro in o)&&a.push(`${r}.parametro deve existir em parametros.`),e.tipo!=="checklist"){if(e.tipo==="conditional"){if(!Array.isArray(e.condicoes)||e.condicoes.length===0){a.push(`${r}.condicoes deve conter ao menos uma condição.`);return}e.condicoes.forEach((i,s)=>{const l=`${r}.condicoes[${s}]`;if(!Lo(i)){a.push(`${l} deve ser um objeto.`);return}Ji(i.quando,`${l}.quando`,a);const c=typeof i.resultado=="string"&&i.resultado!=="",u="verificar"in i;c===u&&a.push(`${l} deve informar exatamente resultado ou verificar.`),u&&(Ji(i.verificar,`${l}.verificar`,a),(typeof i.verificar?.parametro!="string"||!(i.verificar.parametro in o))&&a.push(`${l}.verificar.parametro deve existir em parametros.`))});return}e.tipo!==void 0&&!$m.has(e.tipo)&&a.push(`${r}.tipo não é suportado.`),uc(e.operador,`${r}.operador`,a),"valor"in e||a.push(`${r}.valor é obrigatório.`)}}function Fm(e){const n=[];return Lo(e)?(pa(e.id,"id",n),pa(e.nome,"nome",n),Lo(e.parametros)||n.push("parametros deve ser um objeto."),Array.isArray(e.regras)||n.push("regras deve ser uma lista."),Lo(e.parametros)&&Array.isArray(e.regras)&&e.regras.forEach((o,a)=>Mm(o,a,e.parametros,n)),{valid:n.length===0,errors:n}):{valid:!1,errors:["O conjunto de regras deve ser um objeto."]}}function Et(e){const n=Fm(e);if(!n.valid)throw new TypeError(`Conjunto de regras inválido: ${n.errors.join(" ")}`);return e}function zm(e,{createdAt:n=new Date,updatedAt:o=n}={}){return Et(e),{...Rt(e),source:"user",createdAt:zn(n,"createdAt"),updatedAt:zn(o,"updatedAt")}}function Hm(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var nn={},$a={},to={},Qi;function Pa(){if(Qi)return to;Qi=1;function e(s){return typeof s>"u"||s===null}function n(s){return typeof s=="object"&&s!==null}function o(s){return Array.isArray(s)?s:e(s)?[]:[s]}function a(s,l){if(l){const c=Object.keys(l);for(let u=0,d=c.length;u<d;u+=1){const m=c[u];s[m]=l[m]}}return s}function r(s,l){let c="";for(let u=0;u<l;u+=1)c+=s;return c}function i(s){return s===0&&Number.NEGATIVE_INFINITY===1/s}return to.isNothing=e,to.isObject=n,to.toArray=o,to.repeat=r,to.isNegativeZero=i,to.extend=a,to}var Dr,Xi;function Oa(){if(Xi)return Dr;Xi=1;function e(o,a){let r="";const i=o.reason||"(unknown reason)";return o.mark?(o.mark.name&&(r+='in "'+o.mark.name+'" '),r+="("+(o.mark.line+1)+":"+(o.mark.column+1)+")",!a&&o.mark.snippet&&(r+=`

`+o.mark.snippet),i+" "+r):i}function n(o,a){Error.call(this),this.name="YAMLException",this.reason=o,this.mark=a,this.message=e(this,!1),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack||""}return n.prototype=Object.create(Error.prototype),n.prototype.constructor=n,n.prototype.toString=function(a){return this.name+": "+e(this,a)},Dr=n,Dr}var Lr,Zi;function Um(){if(Zi)return Lr;Zi=1;const e=Pa();function n(r,i,s,l,c){let u="",d="";const m=Math.floor(c/2)-1;return l-i>m&&(u=" ... ",i=l-m+u.length),s-l>m&&(d=" ...",s=l+m-d.length),{str:u+r.slice(i,s).replace(/\t/g,"→")+d,pos:l-i+u.length}}function o(r,i){return e.repeat(" ",i-r.length)+r}function a(r,i){if(i=Object.create(i||null),!r.buffer)return null;i.maxLength||(i.maxLength=79),typeof i.indent!="number"&&(i.indent=1),typeof i.linesBefore!="number"&&(i.linesBefore=3),typeof i.linesAfter!="number"&&(i.linesAfter=2);const s=/\r?\n|\r|\0/g,l=[0],c=[];let u,d=-1;for(;u=s.exec(r.buffer);)c.push(u.index),l.push(u.index+u[0].length),r.position<=u.index&&d<0&&(d=l.length-2);d<0&&(d=l.length-1);let m="";const f=Math.min(r.line+i.linesAfter,c.length).toString().length,b=i.maxLength-(i.indent+f+3);for(let N=1;N<=i.linesBefore&&!(d-N<0);N++){const w=n(r.buffer,l[d-N],c[d-N],r.position-(l[d]-l[d-N]),b);m=e.repeat(" ",i.indent)+o((r.line-N+1).toString(),f)+" | "+w.str+`
`+m}const T=n(r.buffer,l[d],c[d],r.position,b);m+=e.repeat(" ",i.indent)+o((r.line+1).toString(),f)+" | "+T.str+`
`,m+=e.repeat("-",i.indent+f+3+T.pos)+`^
`;for(let N=1;N<=i.linesAfter&&!(d+N>=c.length);N++){const w=n(r.buffer,l[d+N],c[d+N],r.position-(l[d]-l[d+N]),b);m+=e.repeat(" ",i.indent)+o((r.line+N+1).toString(),f)+" | "+w.str+`
`}return m.replace(/\n$/,"")}return Lr=a,Lr}var qr,es;function hn(){if(es)return qr;es=1;const e=Oa(),n=["kind","multi","resolve","construct","instanceOf","predicate","represent","representName","defaultStyle","styleAliases"],o=["scalar","sequence","mapping"];function a(i){const s={};return i!==null&&Object.keys(i).forEach(function(l){i[l].forEach(function(c){s[String(c)]=l})}),s}function r(i,s){if(s=s||{},Object.keys(s).forEach(function(l){if(n.indexOf(l)===-1)throw new e('Unknown option "'+l+'" is met in definition of "'+i+'" YAML type.')}),this.options=s,this.tag=i,this.kind=s.kind||null,this.resolve=s.resolve||function(){return!0},this.construct=s.construct||function(l){return l},this.instanceOf=s.instanceOf||null,this.predicate=s.predicate||null,this.represent=s.represent||null,this.representName=s.representName||null,this.defaultStyle=s.defaultStyle||null,this.multi=s.multi||!1,this.styleAliases=a(s.styleAliases||null),o.indexOf(this.kind)===-1)throw new e('Unknown kind "'+this.kind+'" is specified for "'+i+'" YAML type.')}return qr=r,qr}var $r,ns;function dc(){if(ns)return $r;ns=1;const e=Oa(),n=hn();function o(i,s){const l=[];return i[s].forEach(function(c){let u=l.length;l.forEach(function(d,m){d.tag===c.tag&&d.kind===c.kind&&d.multi===c.multi&&(u=m)}),l[u]=c}),l}function a(){const i={scalar:{},sequence:{},mapping:{},fallback:{},multi:{scalar:[],sequence:[],mapping:[],fallback:[]}};function s(l){l.multi?(i.multi[l.kind].push(l),i.multi.fallback.push(l)):i[l.kind][l.tag]=i.fallback[l.tag]=l}for(let l=0,c=arguments.length;l<c;l+=1)arguments[l].forEach(s);return i}function r(i){return this.extend(i)}return r.prototype.extend=function(s){let l=[],c=[];if(s instanceof n)c.push(s);else if(Array.isArray(s))c=c.concat(s);else if(s&&(Array.isArray(s.implicit)||Array.isArray(s.explicit)))s.implicit&&(l=l.concat(s.implicit)),s.explicit&&(c=c.concat(s.explicit));else throw new e("Schema.extend argument should be a Type, [ Type ], or a schema definition ({ implicit: [...], explicit: [...] })");l.forEach(function(d){if(!(d instanceof n))throw new e("Specified list of YAML types (or a single Type object) contains a non-Type object.");if(d.loadKind&&d.loadKind!=="scalar")throw new e("There is a non-scalar type in the implicit list of a schema. Implicit resolving of such types is not supported.");if(d.multi)throw new e("There is a multi type in the implicit list of a schema. Multi tags can only be listed as explicit.")}),c.forEach(function(d){if(!(d instanceof n))throw new e("Specified list of YAML types (or a single Type object) contains a non-Type object.")});const u=Object.create(r.prototype);return u.implicit=(this.implicit||[]).concat(l),u.explicit=(this.explicit||[]).concat(c),u.compiledImplicit=o(u,"implicit"),u.compiledExplicit=o(u,"explicit"),u.compiledTypeMap=a(u.compiledImplicit,u.compiledExplicit),u},$r=r,$r}var Mr,os;function mc(){if(os)return Mr;os=1;const e=hn();return Mr=new e("tag:yaml.org,2002:str",{kind:"scalar",construct:function(n){return n!==null?n:""}}),Mr}var Fr,as;function pc(){if(as)return Fr;as=1;const e=hn();return Fr=new e("tag:yaml.org,2002:seq",{kind:"sequence",construct:function(n){return n!==null?n:[]}}),Fr}var zr,rs;function fc(){if(rs)return zr;rs=1;const e=hn();return zr=new e("tag:yaml.org,2002:map",{kind:"mapping",construct:function(n){return n!==null?n:{}}}),zr}var Hr,ts;function hc(){if(ts)return Hr;ts=1;const e=dc();return Hr=new e({explicit:[mc(),pc(),fc()]}),Hr}var Ur,is;function vc(){if(is)return Ur;is=1;const e=hn();function n(r){if(r===null)return!0;const i=r.length;return i===1&&r==="~"||i===4&&(r==="null"||r==="Null"||r==="NULL")}function o(){return null}function a(r){return r===null}return Ur=new e("tag:yaml.org,2002:null",{kind:"scalar",resolve:n,construct:o,predicate:a,represent:{canonical:function(){return"~"},lowercase:function(){return"null"},uppercase:function(){return"NULL"},camelcase:function(){return"Null"},empty:function(){return""}},defaultStyle:"lowercase"}),Ur}var Kr,ss;function gc(){if(ss)return Kr;ss=1;const e=hn();function n(r){if(r===null)return!1;const i=r.length;return i===4&&(r==="true"||r==="True"||r==="TRUE")||i===5&&(r==="false"||r==="False"||r==="FALSE")}function o(r){return r==="true"||r==="True"||r==="TRUE"}function a(r){return Object.prototype.toString.call(r)==="[object Boolean]"}return Kr=new e("tag:yaml.org,2002:bool",{kind:"scalar",resolve:n,construct:o,predicate:a,represent:{lowercase:function(r){return r?"true":"false"},uppercase:function(r){return r?"TRUE":"FALSE"},camelcase:function(r){return r?"True":"False"}},defaultStyle:"lowercase"}),Kr}var Gr,ls;function bc(){if(ls)return Gr;ls=1;const e=Pa(),n=hn();function o(u){return u>=48&&u<=57||u>=65&&u<=70||u>=97&&u<=102}function a(u){return u>=48&&u<=55}function r(u){return u>=48&&u<=57}function i(u){if(u===null)return!1;const d=u.length;let m=0,f=!1;if(!d)return!1;let b=u[m];if((b==="-"||b==="+")&&(b=u[++m]),b==="0"){if(m+1===d)return!0;if(b=u[++m],b==="b"){for(m++;m<d;m++){if(b=u[m],b!=="0"&&b!=="1")return!1;f=!0}return f&&isFinite(s(u))}if(b==="x"){for(m++;m<d;m++){if(!o(u.charCodeAt(m)))return!1;f=!0}return f&&isFinite(s(u))}if(b==="o"){for(m++;m<d;m++){if(!a(u.charCodeAt(m)))return!1;f=!0}return f&&isFinite(s(u))}}for(;m<d;m++){if(!r(u.charCodeAt(m)))return!1;f=!0}return f?isFinite(s(u)):!1}function s(u){let d=u,m=1,f=d[0];if((f==="-"||f==="+")&&(f==="-"&&(m=-1),d=d.slice(1),f=d[0]),d==="0")return 0;if(f==="0"){if(d[1]==="b")return m*parseInt(d.slice(2),2);if(d[1]==="x")return m*parseInt(d.slice(2),16);if(d[1]==="o")return m*parseInt(d.slice(2),8)}return m*parseInt(d,10)}function l(u){return s(u)}function c(u){return Object.prototype.toString.call(u)==="[object Number]"&&u%1===0&&!e.isNegativeZero(u)}return Gr=new n("tag:yaml.org,2002:int",{kind:"scalar",resolve:i,construct:l,predicate:c,represent:{binary:function(u){return u>=0?"0b"+u.toString(2):"-0b"+u.toString(2).slice(1)},octal:function(u){return u>=0?"0o"+u.toString(8):"-0o"+u.toString(8).slice(1)},decimal:function(u){return u.toString(10)},hexadecimal:function(u){return u>=0?"0x"+u.toString(16).toUpperCase():"-0x"+u.toString(16).toUpperCase().slice(1)}},defaultStyle:"decimal",styleAliases:{binary:[2,"bin"],octal:[8,"oct"],decimal:[10,"dec"],hexadecimal:[16,"hex"]}}),Gr}var Wr,cs;function _c(){if(cs)return Wr;cs=1;const e=Pa(),n=hn(),o=new RegExp("^(?:[-+]?(?:[0-9]+)(?:\\.[0-9]*)?(?:[eE][-+]?[0-9]+)?|\\.[0-9]+(?:[eE][-+]?[0-9]+)?|[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$"),a=new RegExp("^(?:[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$");function r(u){return u===null||!o.test(u)?!1:isFinite(parseFloat(u,10))?!0:a.test(u)}function i(u){let d=u.toLowerCase();const m=d[0]==="-"?-1:1;return"+-".indexOf(d[0])>=0&&(d=d.slice(1)),d===".inf"?m===1?Number.POSITIVE_INFINITY:Number.NEGATIVE_INFINITY:d===".nan"?NaN:m*parseFloat(d,10)}const s=/^[-+]?[0-9]+e/;function l(u,d){if(isNaN(u))switch(d){case"lowercase":return".nan";case"uppercase":return".NAN";case"camelcase":return".NaN"}else if(Number.POSITIVE_INFINITY===u)switch(d){case"lowercase":return".inf";case"uppercase":return".INF";case"camelcase":return".Inf"}else if(Number.NEGATIVE_INFINITY===u)switch(d){case"lowercase":return"-.inf";case"uppercase":return"-.INF";case"camelcase":return"-.Inf"}else if(e.isNegativeZero(u))return"-0.0";const m=u.toString(10);return s.test(m)?m.replace("e",".e"):m}function c(u){return Object.prototype.toString.call(u)==="[object Number]"&&(u%1!==0||e.isNegativeZero(u))}return Wr=new n("tag:yaml.org,2002:float",{kind:"scalar",resolve:r,construct:i,predicate:c,represent:l,defaultStyle:"lowercase"}),Wr}var Yr,us;function yc(){return us||(us=1,Yr=hc().extend({implicit:[vc(),gc(),bc(),_c()]})),Yr}var Jr,ds;function Ac(){return ds||(ds=1,Jr=yc()),Jr}var Qr,ms;function Nc(){if(ms)return Qr;ms=1;const e=hn(),n=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9])-([0-9][0-9])$"),o=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9]?)-([0-9][0-9]?)(?:[Tt]|[ \\t]+)([0-9][0-9]?):([0-9][0-9]):([0-9][0-9])(?:\\.([0-9]*))?(?:[ \\t]*(Z|([-+])([0-9][0-9]?)(?::([0-9][0-9]))?))?$");function a(s){return s===null?!1:n.exec(s)!==null||o.exec(s)!==null}function r(s){let l=0,c=null,u=n.exec(s);if(u===null&&(u=o.exec(s)),u===null)throw new Error("Date resolve error");const d=+u[1],m=+u[2]-1,f=+u[3];if(!u[4])return new Date(Date.UTC(d,m,f));const b=+u[4],T=+u[5],N=+u[6];if(u[7]){for(l=u[7].slice(0,3);l.length<3;)l+="0";l=+l}if(u[9]){const F=+u[10],x=+(u[11]||0);c=(F*60+x)*6e4,u[9]==="-"&&(c=-c)}const w=new Date(Date.UTC(d,m,f,b,T,N,l));return c&&w.setTime(w.getTime()-c),w}function i(s){return s.toISOString()}return Qr=new e("tag:yaml.org,2002:timestamp",{kind:"scalar",resolve:a,construct:r,instanceOf:Date,represent:i}),Qr}var Xr,ps;function xc(){if(ps)return Xr;ps=1;const e=hn();function n(o){return o==="<<"||o===null}return Xr=new e("tag:yaml.org,2002:merge",{kind:"scalar",resolve:n}),Xr}var Zr,fs;function Bc(){if(fs)return Zr;fs=1;const e=hn(),n=`ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=
\r`;function o(s){if(s===null)return!1;let l=0;const c=s.length,u=n;for(let d=0;d<c;d++){const m=u.indexOf(s.charAt(d));if(!(m>64)){if(m<0)return!1;l+=6}}return l%8===0}function a(s){const l=s.replace(/[\r\n=]/g,""),c=l.length,u=n;let d=0;const m=[];for(let b=0;b<c;b++)b%4===0&&b&&(m.push(d>>16&255),m.push(d>>8&255),m.push(d&255)),d=d<<6|u.indexOf(l.charAt(b));const f=c%4*6;return f===0?(m.push(d>>16&255),m.push(d>>8&255),m.push(d&255)):f===18?(m.push(d>>10&255),m.push(d>>2&255)):f===12&&m.push(d>>4&255),new Uint8Array(m)}function r(s){let l="",c=0;const u=s.length,d=n;for(let f=0;f<u;f++)f%3===0&&f&&(l+=d[c>>18&63],l+=d[c>>12&63],l+=d[c>>6&63],l+=d[c&63]),c=(c<<8)+s[f];const m=u%3;return m===0?(l+=d[c>>18&63],l+=d[c>>12&63],l+=d[c>>6&63],l+=d[c&63]):m===2?(l+=d[c>>10&63],l+=d[c>>4&63],l+=d[c<<2&63],l+=d[64]):m===1&&(l+=d[c>>2&63],l+=d[c<<4&63],l+=d[64],l+=d[64]),l}function i(s){return Object.prototype.toString.call(s)==="[object Uint8Array]"}return Zr=new e("tag:yaml.org,2002:binary",{kind:"scalar",resolve:o,construct:a,predicate:i,represent:r}),Zr}var et,hs;function Tc(){if(hs)return et;hs=1;const e=hn(),n=Object.prototype.hasOwnProperty,o=Object.prototype.toString;function a(i){if(i===null)return!0;const s={},l=i;for(let c=0,u=l.length;c<u;c+=1){const d=l[c];let m=!1;if(o.call(d)!=="[object Object]")return!1;let f;for(f in d)if(n.call(d,f))if(!m)m=!0;else return!1;if(!m||n.call(s,f))return!1;Object.defineProperty(s,f,{value:!0})}return!0}function r(i){return i!==null?i:[]}return et=new e("tag:yaml.org,2002:omap",{kind:"sequence",resolve:a,construct:r}),et}var nt,vs;function Rc(){if(vs)return nt;vs=1;const e=hn(),n=Object.prototype.toString;function o(r){if(r===null)return!0;const i=r,s=new Array(i.length);for(let l=0,c=i.length;l<c;l+=1){const u=i[l];if(n.call(u)!=="[object Object]")return!1;const d=Object.keys(u);if(d.length!==1)return!1;s[l]=[d[0],u[d[0]]]}return!0}function a(r){if(r===null)return[];const i=r,s=new Array(i.length);for(let l=0,c=i.length;l<c;l+=1){const u=i[l],d=Object.keys(u);s[l]=[d[0],u[d[0]]]}return s}return nt=new e("tag:yaml.org,2002:pairs",{kind:"sequence",resolve:o,construct:a}),nt}var ot,gs;function Sc(){if(gs)return ot;gs=1;const e=hn(),n=Object.prototype.hasOwnProperty;function o(r){if(r===null)return!0;const i=r;for(const s in i)if(n.call(i,s)&&i[s]!==null)return!1;return!0}function a(r){return r!==null?r:{}}return ot=new e("tag:yaml.org,2002:set",{kind:"mapping",resolve:o,construct:a}),ot}var at,bs;function Xt(){return bs||(bs=1,at=Ac().extend({implicit:[Nc(),xc()],explicit:[Bc(),Tc(),Rc(),Sc()]})),at}var _s;function Km(){if(_s)return $a;_s=1;const e=Pa(),n=Oa(),o=Um(),a=Xt(),r=Object.prototype.hasOwnProperty,i=1,s=2,l=3,c=4,u=1,d=2,m=3,f=/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F-\x84\x86-\x9F\uFFFE\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/,b=/[\x85\u2028\u2029]/,T=/[,\[\]{}]/,N=/^(?:!|!!|![0-9A-Za-z-]+!)$/,w=/^(?:!|[^,\[\]{}])(?:%[0-9a-f]{2}|[0-9a-z\-#;/?:@&=+$,_.!~*'()\[\]])*$/i;function F(t){return Object.prototype.toString.call(t)}function x(t){return t===10||t===13}function I(t){return t===9||t===32}function q(t){return t===9||t===32||t===10||t===13}function pe(t){return t===44||t===91||t===93||t===123||t===125}function ie(t){if(t>=48&&t<=57)return t-48;const _=t|32;return _>=97&&_<=102?_-97+10:-1}function C(t){return t===120?2:t===117?4:t===85?8:0}function L(t){return t>=48&&t<=57?t-48:-1}function Z(t){switch(t){case 48:return"\0";case 97:return"\x07";case 98:return"\b";case 116:return"	";case 9:return"	";case 110:return`
`;case 118:return"\v";case 102:return"\f";case 114:return"\r";case 101:return"\x1B";case 32:return" ";case 34:return'"';case 47:return"/";case 92:return"\\";case 78:return"";case 95:return" ";case 76:return"\u2028";case 80:return"\u2029";default:return""}}function ue(t){return t<=65535?String.fromCharCode(t):String.fromCharCode((t-65536>>10)+55296,(t-65536&1023)+56320)}function ne(t,_,S){_==="__proto__"?Object.defineProperty(t,_,{configurable:!0,enumerable:!0,writable:!0,value:S}):t[_]=S}const B=new Array(256),$=new Array(256);for(let t=0;t<256;t++)B[t]=Z(t)?1:0,$[t]=Z(t);function Q(t,_){this.input=t,this.filename=_.filename||null,this.schema=_.schema||a,this.onWarning=_.onWarning||null,this.legacy=_.legacy||!1,this.json=_.json||!1,this.listener=_.listener||null,this.maxDepth=typeof _.maxDepth=="number"?_.maxDepth:100,this.maxTotalMergeKeys=typeof _.maxTotalMergeKeys=="number"?_.maxTotalMergeKeys:1e4,this.implicitTypes=this.schema.compiledImplicit,this.typeMap=this.schema.compiledTypeMap,this.length=t.length,this.position=0,this.line=0,this.lineStart=0,this.lineIndent=0,this.depth=0,this.totalMergeKeys=0,this.firstTabInLine=-1,this.documents=[],this.anchorMapTransactions=[]}function me(t,_){const S={name:t.filename,buffer:t.input.slice(0,-1),position:t.position,line:t.line,column:t.position-t.lineStart};return S.snippet=o(S),new n(_,S)}function G(t,_){throw me(t,_)}function Te(t,_){t.onWarning&&t.onWarning.call(null,me(t,_))}function ve(t,_,S){const P=t.anchorMapTransactions;if(P.length!==0){const R=P[P.length-1];r.call(R,_)||(R[_]={existed:r.call(t.anchorMap,_),value:t.anchorMap[_]})}t.anchorMap[_]=S}function Ue(t){t.anchorMapTransactions.push(Object.create(null))}function Ke(t){const _=t.anchorMapTransactions.pop(),S=t.anchorMapTransactions;if(S.length===0)return;const P=S[S.length-1],R=Object.keys(_);for(let Y=0,p=R.length;Y<p;Y+=1){const A=R[Y];r.call(P,A)||(P[A]=_[A])}}function vn(t){const _=t.anchorMapTransactions.pop(),S=Object.keys(_);for(let P=S.length-1;P>=0;P-=1){const R=_[S[P]];R.existed?t.anchorMap[S[P]]=R.value:delete t.anchorMap[S[P]]}}function Je(t){return{position:t.position,line:t.line,lineStart:t.lineStart,lineIndent:t.lineIndent,firstTabInLine:t.firstTabInLine,tag:t.tag,anchor:t.anchor,kind:t.kind,result:t.result}}function bn(t,_){t.position=_.position,t.line=_.line,t.lineStart=_.lineStart,t.lineIndent=_.lineIndent,t.firstTabInLine=_.firstTabInLine,t.tag=_.tag,t.anchor=_.anchor,t.kind=_.kind,t.result=_.result}const Sn={YAML:function(_,S,P){_.version!==null&&G(_,"duplication of %YAML directive"),P.length!==1&&G(_,"YAML directive accepts exactly one argument");const R=/^([0-9]+)\.([0-9]+)$/.exec(P[0]);R===null&&G(_,"ill-formed argument of the YAML directive");const Y=parseInt(R[1],10),p=parseInt(R[2],10);Y!==1&&G(_,"unacceptable YAML version of the document"),_.version=P[0],_.checkLineBreaks=p<2,p!==1&&p!==2&&Te(_,"unsupported YAML version of the document")},TAG:function(_,S,P){let R;P.length!==2&&G(_,"TAG directive accepts exactly two arguments");const Y=P[0];R=P[1],N.test(Y)||G(_,"ill-formed tag handle (first argument) of the TAG directive"),r.call(_.tagMap,Y)&&G(_,'there is a previously declared suffix for "'+Y+'" tag handle'),w.test(R)||G(_,"ill-formed tag prefix (second argument) of the TAG directive");try{R=decodeURIComponent(R)}catch{G(_,"tag prefix is malformed: "+R)}_.tagMap[Y]=R}};function We(t,_,S,P){if(_<S){const R=t.input.slice(_,S);if(P)for(let Y=0,p=R.length;Y<p;Y+=1){const A=R.charCodeAt(Y);A===9||A>=32&&A<=1114111||G(t,"expected valid JSON character")}else f.test(R)&&G(t,"the stream contains non-printable characters");t.result+=R}}function Ye(t,_,S,P){e.isObject(S)||G(t,"cannot merge mappings; the provided source object is unacceptable");const R=Object.keys(S);for(let Y=0,p=R.length;Y<p;Y+=1){const A=R[Y];t.maxTotalMergeKeys!==-1&&++t.totalMergeKeys>t.maxTotalMergeKeys&&G(t,"merge keys exceeded maxTotalMergeKeys ("+t.maxTotalMergeKeys+")"),r.call(_,A)||(ne(_,A,S[A]),P[A]=!0)}}function O(t,_,S,P,R,Y,p,A,H){if(Array.isArray(R)){R=Array.prototype.slice.call(R);for(let V=0,D=R.length;V<D;V+=1)Array.isArray(R[V])&&G(t,"nested arrays are not supported inside keys"),typeof R=="object"&&F(R[V])==="[object Object]"&&(R[V]="[object Object]")}if(typeof R=="object"&&F(R)==="[object Object]"&&(R="[object Object]"),R=String(R),_===null&&(_={}),P==="tag:yaml.org,2002:merge")if(Array.isArray(Y))for(let V=0,D=Y.length;V<D;V+=1)Ye(t,_,Y[V],S);else Ye(t,_,Y,S);else!t.json&&!r.call(S,R)&&r.call(_,R)&&(t.line=p||t.line,t.lineStart=A||t.lineStart,t.position=H||t.position,G(t,"duplicated mapping key")),ne(_,R,Y),delete S[R];return _}function le(t){const _=t.input.charCodeAt(t.position);_===10?t.position++:_===13?(t.position++,t.input.charCodeAt(t.position)===10&&t.position++):G(t,"a line break is expected"),t.line+=1,t.lineStart=t.position,t.firstTabInLine=-1}function X(t,_,S){let P=0,R=t.input.charCodeAt(t.position);for(;R!==0;){for(;I(R);)R===9&&t.firstTabInLine===-1&&(t.firstTabInLine=t.position),R=t.input.charCodeAt(++t.position);if(_&&R===35)do R=t.input.charCodeAt(++t.position);while(R!==10&&R!==13&&R!==0);if(x(R))for(le(t),R=t.input.charCodeAt(t.position),P++,t.lineIndent=0;R===32;)t.lineIndent++,R=t.input.charCodeAt(++t.position);else break}return S!==-1&&P!==0&&t.lineIndent<S&&Te(t,"deficient indentation"),P}function he(t){let _=t.position,S=t.input.charCodeAt(_);return!!((S===45||S===46)&&S===t.input.charCodeAt(_+1)&&S===t.input.charCodeAt(_+2)&&(_+=3,S=t.input.charCodeAt(_),S===0||q(S)))}function Re(t,_){_===1?t.result+=" ":_>1&&(t.result+=e.repeat(`
`,_-1))}function h(t,_,S){let P,R,Y,p,A,H;const V=t.kind,D=t.result;let J=t.input.charCodeAt(t.position);if(q(J)||pe(J)||J===35||J===38||J===42||J===33||J===124||J===62||J===39||J===34||J===37||J===64||J===96)return!1;if(J===63||J===45){const K=t.input.charCodeAt(t.position+1);if(q(K)||S&&pe(K))return!1}for(t.kind="scalar",t.result="",P=R=t.position,Y=!1;J!==0;){if(J===58){const K=t.input.charCodeAt(t.position+1);if(q(K)||S&&pe(K))break}else if(J===35){const K=t.input.charCodeAt(t.position-1);if(q(K))break}else{if(t.position===t.lineStart&&he(t)||S&&pe(J))break;if(x(J))if(p=t.line,A=t.lineStart,H=t.lineIndent,X(t,!1,-1),t.lineIndent>=_){Y=!0,J=t.input.charCodeAt(t.position);continue}else{t.position=R,t.line=p,t.lineStart=A,t.lineIndent=H;break}}Y&&(We(t,P,R,!1),Re(t,t.line-p),P=R=t.position,Y=!1),I(J)||(R=t.position+1),J=t.input.charCodeAt(++t.position)}return We(t,P,R,!1),t.result?!0:(t.kind=V,t.result=D,!1)}function g(t,_){let S,P,R=t.input.charCodeAt(t.position);if(R!==39)return!1;for(t.kind="scalar",t.result="",t.position++,S=P=t.position;(R=t.input.charCodeAt(t.position))!==0;)if(R===39)if(We(t,S,t.position,!0),R=t.input.charCodeAt(++t.position),R===39)S=t.position,t.position++,P=t.position;else return!0;else x(R)?(We(t,S,P,!0),Re(t,X(t,!1,_)),S=P=t.position):t.position===t.lineStart&&he(t)?G(t,"unexpected end of the document within a single quoted scalar"):(t.position++,I(R)||(P=t.position));G(t,"unexpected end of the stream within a single quoted scalar")}function y(t,_){let S,P,R,Y=t.input.charCodeAt(t.position);if(Y!==34)return!1;for(t.kind="scalar",t.result="",t.position++,S=P=t.position;(Y=t.input.charCodeAt(t.position))!==0;){if(Y===34)return We(t,S,t.position,!0),t.position++,!0;if(Y===92){if(We(t,S,t.position,!0),Y=t.input.charCodeAt(++t.position),x(Y))X(t,!1,_);else if(Y<256&&B[Y])t.result+=$[Y],t.position++;else if((R=C(Y))>0){let p=R,A=0;for(;p>0;p--)Y=t.input.charCodeAt(++t.position),(R=ie(Y))>=0?A=(A<<4)+R:G(t,"expected hexadecimal character");t.result+=ue(A),t.position++}else G(t,"unknown escape sequence");S=P=t.position}else x(Y)?(We(t,S,P,!0),Re(t,X(t,!1,_)),S=P=t.position):t.position===t.lineStart&&he(t)?G(t,"unexpected end of the document within a double quoted scalar"):(t.position++,I(Y)||(P=t.position))}G(t,"unexpected end of the stream within a double quoted scalar")}function j(t,_){let S=!0,P,R,Y;const p=t.tag;let A;const H=t.anchor;let V,D,J,K;const de=Object.create(null);let ce,be,Ae,Ie=t.input.charCodeAt(t.position);if(Ie===91)V=93,K=!1,A=[];else if(Ie===123)V=125,K=!0,A={};else return!1;for(t.anchor!==null&&ve(t,t.anchor,A),Ie=t.input.charCodeAt(++t.position);Ie!==0;){if(X(t,!0,_),Ie=t.input.charCodeAt(t.position),Ie===V)return t.position++,t.tag=p,t.anchor=H,t.kind=K?"mapping":"sequence",t.result=A,!0;if(S?Ie===44&&G(t,"expected the node content, but found ','"):G(t,"missed comma between flow collection entries"),be=ce=Ae=null,D=J=!1,Ie===63){const He=t.input.charCodeAt(t.position+1);q(He)&&(D=J=!0,t.position++,X(t,!0,_))}P=t.line,R=t.lineStart,Y=t.position,te(t,_,i,!1,!0),be=t.tag,ce=t.result,X(t,!0,_),Ie=t.input.charCodeAt(t.position),(J||t.line===P)&&Ie===58&&(D=!0,Ie=t.input.charCodeAt(++t.position),X(t,!0,_),te(t,_,i,!1,!0),Ae=t.result),K?O(t,A,de,be,ce,Ae,P,R,Y):D?A.push(O(t,null,de,be,ce,Ae,P,R,Y)):A.push(ce),X(t,!0,_),Ie=t.input.charCodeAt(t.position),Ie===44?(S=!0,Ie=t.input.charCodeAt(++t.position)):S=!1}G(t,"unexpected end of the stream within a flow collection")}function z(t,_){let S,P=u,R=!1,Y=!1,p=_,A=0,H=!1,V,D=t.input.charCodeAt(t.position);if(D===124)S=!1;else if(D===62)S=!0;else return!1;for(t.kind="scalar",t.result="";D!==0;)if(D=t.input.charCodeAt(++t.position),D===43||D===45)u===P?P=D===43?m:d:G(t,"repeat of a chomping mode identifier");else if((V=L(D))>=0)V===0?G(t,"bad explicit indentation width of a block scalar; it cannot be less than one"):Y?G(t,"repeat of an indentation width identifier"):(p=_+V-1,Y=!0);else break;if(I(D)){do D=t.input.charCodeAt(++t.position);while(I(D));if(D===35)do D=t.input.charCodeAt(++t.position);while(!x(D)&&D!==0)}for(;D!==0;){for(le(t),t.lineIndent=0,D=t.input.charCodeAt(t.position);(!Y||t.lineIndent<p)&&D===32;)t.lineIndent++,D=t.input.charCodeAt(++t.position);if(!Y&&t.lineIndent>p&&(p=t.lineIndent),x(D)){A++;continue}if(!Y&&p===0&&G(t,"missing indentation for block scalar"),t.lineIndent<p){P===m?t.result+=e.repeat(`
`,R?1+A:A):P===u&&R&&(t.result+=`
`);break}S?I(D)?(H=!0,t.result+=e.repeat(`
`,R?1+A:A)):H?(H=!1,t.result+=e.repeat(`
`,A+1)):A===0?R&&(t.result+=" "):t.result+=e.repeat(`
`,A):t.result+=e.repeat(`
`,R?1+A:A),R=!0,Y=!0,A=0;const J=t.position;for(;!x(D)&&D!==0;)D=t.input.charCodeAt(++t.position);We(t,J,t.position,!1)}return!0}function k(t,_){const S=t.tag,P=t.anchor,R=[];let Y=!1;if(t.firstTabInLine!==-1)return!1;t.anchor!==null&&ve(t,t.anchor,R);let p=t.input.charCodeAt(t.position);for(;p!==0&&(t.firstTabInLine!==-1&&(t.position=t.firstTabInLine,G(t,"tab characters must not be used in indentation")),p===45);){const A=t.input.charCodeAt(t.position+1);if(!q(A))break;if(Y=!0,t.position++,X(t,!0,-1)&&t.lineIndent<=_){R.push(null),p=t.input.charCodeAt(t.position);continue}const H=t.line;if(te(t,_,l,!1,!0),R.push(t.result),X(t,!0,-1),p=t.input.charCodeAt(t.position),(t.line===H||t.lineIndent>_)&&p!==0)G(t,"bad indentation of a sequence entry");else if(t.lineIndent<_)break}return Y?(t.tag=S,t.anchor=P,t.kind="sequence",t.result=R,!0):!1}function re(t,_,S){let P,R,Y,p;const A=t.tag,H=t.anchor,V={},D=Object.create(null);let J=null,K=null,de=null,ce=!1,be=!1;if(t.firstTabInLine!==-1)return!1;t.anchor!==null&&ve(t,t.anchor,V);let Ae=t.input.charCodeAt(t.position);for(;Ae!==0;){!ce&&t.firstTabInLine!==-1&&(t.position=t.firstTabInLine,G(t,"tab characters must not be used in indentation"));const Ie=t.input.charCodeAt(t.position+1),He=t.line;if((Ae===63||Ae===58)&&q(Ie))Ae===63?(ce&&(O(t,V,D,J,K,null,R,Y,p),J=K=de=null),be=!0,ce=!0,P=!0):ce?(ce=!1,P=!0):G(t,"incomplete explicit mapping pair; a key node is missed; or followed by a non-tabulated empty line"),t.position+=1,Ae=Ie;else{if(R=t.line,Y=t.lineStart,p=t.position,!te(t,S,s,!1,!0))break;if(t.line===He){for(Ae=t.input.charCodeAt(t.position);I(Ae);)Ae=t.input.charCodeAt(++t.position);if(Ae===58)Ae=t.input.charCodeAt(++t.position),q(Ae)||G(t,"a whitespace character is expected after the key-value separator within a block mapping"),ce&&(O(t,V,D,J,K,null,R,Y,p),J=K=de=null),be=!0,ce=!1,P=!1,J=t.tag,K=t.result;else if(be)G(t,"can not read an implicit mapping pair; a colon is missed");else return t.tag=A,t.anchor=H,!0}else if(be)G(t,"can not read a block mapping entry; a multiline key may not be an implicit key");else return t.tag=A,t.anchor=H,!0}if((t.line===He||t.lineIndent>_)&&(ce&&(R=t.line,Y=t.lineStart,p=t.position),te(t,_,c,!0,P)&&(ce?K=t.result:de=t.result),ce||(O(t,V,D,J,K,de,R,Y,p),J=K=de=null),X(t,!0,-1),Ae=t.input.charCodeAt(t.position)),(t.line===He||t.lineIndent>_)&&Ae!==0)G(t,"bad indentation of a mapping entry");else if(t.lineIndent<_)break}return ce&&O(t,V,D,J,K,null,R,Y,p),be&&(t.tag=A,t.anchor=H,t.kind="mapping",t.result=V),be}function ae(t){let _=!1,S=!1,P,R,Y=t.input.charCodeAt(t.position);if(Y!==33)return!1;t.tag!==null&&G(t,"duplication of a tag property"),Y=t.input.charCodeAt(++t.position),Y===60?(_=!0,Y=t.input.charCodeAt(++t.position)):Y===33?(S=!0,P="!!",Y=t.input.charCodeAt(++t.position)):P="!";let p=t.position;if(_){do Y=t.input.charCodeAt(++t.position);while(Y!==0&&Y!==62);t.position<t.length?(R=t.input.slice(p,t.position),Y=t.input.charCodeAt(++t.position)):G(t,"unexpected end of the stream within a verbatim tag")}else{for(;Y!==0&&!q(Y);)Y===33&&(S?G(t,"tag suffix cannot contain exclamation marks"):(P=t.input.slice(p-1,t.position+1),N.test(P)||G(t,"named tag handle cannot contain such characters"),S=!0,p=t.position+1)),Y=t.input.charCodeAt(++t.position);R=t.input.slice(p,t.position),T.test(R)&&G(t,"tag suffix cannot contain flow indicator characters")}R&&!w.test(R)&&G(t,"tag name cannot contain such characters: "+R);try{R=decodeURIComponent(R)}catch{G(t,"tag name is malformed: "+R)}return _?t.tag=R:r.call(t.tagMap,P)?t.tag=t.tagMap[P]+R:P==="!"?t.tag="!"+R:P==="!!"?t.tag="tag:yaml.org,2002:"+R:G(t,'undeclared tag handle "'+P+'"'),!0}function oe(t){let _=t.input.charCodeAt(t.position);if(_!==38)return!1;t.anchor!==null&&G(t,"duplication of an anchor property"),_=t.input.charCodeAt(++t.position);const S=t.position;for(;_!==0&&!q(_)&&!pe(_);)_=t.input.charCodeAt(++t.position);return t.position===S&&G(t,"name of an anchor node must contain at least one character"),t.anchor=t.input.slice(S,t.position),!0}function U(t){let _=t.input.charCodeAt(t.position);if(_!==42)return!1;_=t.input.charCodeAt(++t.position);const S=t.position;for(;_!==0&&!q(_)&&!pe(_);)_=t.input.charCodeAt(++t.position);t.position===S&&G(t,"name of an alias node must contain at least one character");const P=t.input.slice(S,t.position);return r.call(t.anchorMap,P)||G(t,'unidentified alias "'+P+'"'),t.result=t.anchorMap[P],X(t,!0,-1),!0}function _e(t,_,S,P){const R=Je(t);return Ue(t),bn(t,_),t.tag=null,t.anchor=null,t.kind=null,t.result=null,re(t,S,P)&&t.kind==="mapping"?(Ke(t),!0):(vn(t),bn(t,R),!1)}function te(t,_,S,P,R){let Y,p,A=1,H=!1,V=!1,D=null,J,K,de;t.depth>=t.maxDepth&&G(t,"nesting exceeded maxDepth ("+t.maxDepth+")"),t.depth+=1,t.listener!==null&&t.listener("open",t),t.tag=null,t.anchor=null,t.kind=null,t.result=null;const ce=Y=p=c===S||l===S;if(P&&X(t,!0,-1)&&(H=!0,t.lineIndent>_?A=1:t.lineIndent===_?A=0:t.lineIndent<_&&(A=-1)),A===1)for(;;){const be=t.input.charCodeAt(t.position),Ae=Je(t);if(H&&(be===33&&t.tag!==null||be===38&&t.anchor!==null)||!ae(t)&&!oe(t))break;D===null&&(D=Ae),X(t,!0,-1)?(H=!0,p=ce,t.lineIndent>_?A=1:t.lineIndent===_?A=0:t.lineIndent<_&&(A=-1)):p=!1}if(p&&(p=H||R),A===1||c===S)if(i===S||s===S?K=_:K=_+1,de=t.position-t.lineStart,A===1)if(p&&(k(t,de)||re(t,de,K))||j(t,K))V=!0;else{const be=t.input.charCodeAt(t.position);D!==null&&ce&&!p&&be!==124&&be!==62&&_e(t,D,D.position-D.lineStart,K)||Y&&z(t,K)||g(t,K)||y(t,K)?V=!0:U(t)?(V=!0,(t.tag!==null||t.anchor!==null)&&G(t,"alias node should not have any properties")):h(t,K,i===S)&&(V=!0,t.tag===null&&(t.tag="?")),t.anchor!==null&&ve(t,t.anchor,t.result)}else A===0&&(V=p&&k(t,de));if(t.tag===null)t.anchor!==null&&ve(t,t.anchor,t.result);else if(t.tag==="?"){t.result!==null&&t.kind!=="scalar"&&G(t,'unacceptable node kind for !<?> tag; it should be "scalar", not "'+t.kind+'"');for(let be=0,Ae=t.implicitTypes.length;be<Ae;be+=1)if(J=t.implicitTypes[be],J.resolve(t.result)){t.result=J.construct(t.result),t.tag=J.tag,t.anchor!==null&&ve(t,t.anchor,t.result);break}}else if(t.tag!=="!"){if(r.call(t.typeMap[t.kind||"fallback"],t.tag))J=t.typeMap[t.kind||"fallback"][t.tag];else{J=null;const be=t.typeMap.multi[t.kind||"fallback"];for(let Ae=0,Ie=be.length;Ae<Ie;Ae+=1)if(t.tag.slice(0,be[Ae].tag.length)===be[Ae].tag){J=be[Ae];break}}J||G(t,"unknown tag !<"+t.tag+">"),t.result!==null&&J.kind!==t.kind&&G(t,"unacceptable node kind for !<"+t.tag+'> tag; it should be "'+J.kind+'", not "'+t.kind+'"'),J.resolve(t.result,t.tag)?(t.result=J.construct(t.result,t.tag),t.anchor!==null&&ve(t,t.anchor,t.result)):G(t,"cannot resolve a node with !<"+t.tag+"> explicit tag")}return t.listener!==null&&t.listener("close",t),t.depth-=1,t.tag!==null||t.anchor!==null||V}function ge(t){const _=t.position;let S=!1,P;for(t.version=null,t.checkLineBreaks=t.legacy,t.tagMap=Object.create(null),t.anchorMap=Object.create(null);(P=t.input.charCodeAt(t.position))!==0&&(X(t,!0,-1),P=t.input.charCodeAt(t.position),!(t.lineIndent>0||P!==37));){S=!0,P=t.input.charCodeAt(++t.position);let R=t.position;for(;P!==0&&!q(P);)P=t.input.charCodeAt(++t.position);const Y=t.input.slice(R,t.position),p=[];for(Y.length<1&&G(t,"directive name must not be less than one character in length");P!==0;){for(;I(P);)P=t.input.charCodeAt(++t.position);if(P===35){do P=t.input.charCodeAt(++t.position);while(P!==0&&!x(P));break}if(x(P))break;for(R=t.position;P!==0&&!q(P);)P=t.input.charCodeAt(++t.position);p.push(t.input.slice(R,t.position))}P!==0&&le(t),r.call(Sn,Y)?Sn[Y](t,Y,p):Te(t,'unknown document directive "'+Y+'"')}if(X(t,!0,-1),t.lineIndent===0&&t.input.charCodeAt(t.position)===45&&t.input.charCodeAt(t.position+1)===45&&t.input.charCodeAt(t.position+2)===45?(t.position+=3,X(t,!0,-1)):S&&G(t,"directives end mark is expected"),te(t,t.lineIndent-1,c,!1,!0),X(t,!0,-1),t.checkLineBreaks&&b.test(t.input.slice(_,t.position))&&Te(t,"non-ASCII line breaks are interpreted as content"),t.documents.push(t.result),t.position===t.lineStart&&he(t)){t.input.charCodeAt(t.position)===46&&(t.position+=3,X(t,!0,-1));return}t.position<t.length-1&&G(t,"end of the stream or a document separator is expected")}function xe(t,_){t=String(t),_=_||{},t.length!==0&&(t.charCodeAt(t.length-1)!==10&&t.charCodeAt(t.length-1)!==13&&(t+=`
`),t.charCodeAt(0)===65279&&(t=t.slice(1)));const S=new Q(t,_),P=t.indexOf("\0");for(P!==-1&&(S.position=P,G(S,"null byte is not allowed in input")),S.input+="\0";S.input.charCodeAt(S.position)===32;)S.lineIndent+=1,S.position+=1;for(;S.position<S.length-1;)ge(S);return S.documents}function ke(t,_,S){_!==null&&typeof _=="object"&&typeof S>"u"&&(S=_,_=null);const P=xe(t,S);if(typeof _!="function")return P;for(let R=0,Y=P.length;R<Y;R+=1)_(P[R])}function Oe(t,_){const S=xe(t,_);if(S.length!==0){if(S.length===1)return S[0];throw new n("expected a single document in the stream, but found more")}}return $a.loadAll=ke,$a.load=Oe,$a}var rt={},ys;function Gm(){if(ys)return rt;ys=1;const e=Pa(),n=Oa(),o=Xt(),a=Object.prototype.toString,r=Object.prototype.hasOwnProperty,i=65279,s=9,l=10,c=13,u=32,d=33,m=34,f=35,b=37,T=38,N=39,w=42,F=44,x=45,I=58,q=61,pe=62,ie=63,C=64,L=91,Z=93,ue=96,ne=123,B=124,$=125,Q={};Q[0]="\\0",Q[7]="\\a",Q[8]="\\b",Q[9]="\\t",Q[10]="\\n",Q[11]="\\v",Q[12]="\\f",Q[13]="\\r",Q[27]="\\e",Q[34]='\\"',Q[92]="\\\\",Q[133]="\\N",Q[160]="\\_",Q[8232]="\\L",Q[8233]="\\P";const me=["y","Y","yes","Yes","YES","on","On","ON","n","N","no","No","NO","off","Off","OFF"],G=/^[-+]?[0-9_]+(?::[0-9_]+)+(?:\.[0-9_]*)?$/;function Te(p,A){if(A===null)return{};const H={},V=Object.keys(A);for(let D=0,J=V.length;D<J;D+=1){let K=V[D],de=String(A[K]);K.slice(0,2)==="!!"&&(K="tag:yaml.org,2002:"+K.slice(2));const ce=p.compiledTypeMap.fallback[K];ce&&r.call(ce.styleAliases,de)&&(de=ce.styleAliases[de]),H[K]=de}return H}function ve(p){let A,H;const V=p.toString(16).toUpperCase();if(p<=255)A="x",H=2;else if(p<=65535)A="u",H=4;else if(p<=4294967295)A="U",H=8;else throw new n("code point within a string may not be greater than 0xFFFFFFFF");return"\\"+A+e.repeat("0",H-V.length)+V}const Ue=1,Ke=2;function vn(p){this.schema=p.schema||o,this.indent=Math.max(1,p.indent||2),this.noArrayIndent=p.noArrayIndent||!1,this.skipInvalid=p.skipInvalid||!1,this.flowLevel=e.isNothing(p.flowLevel)?-1:p.flowLevel,this.styleMap=Te(this.schema,p.styles||null),this.sortKeys=p.sortKeys||!1,this.lineWidth=p.lineWidth||80,this.noRefs=p.noRefs||!1,this.noCompatMode=p.noCompatMode||!1,this.condenseFlow=p.condenseFlow||!1,this.quotingType=p.quotingType==='"'?Ke:Ue,this.forceQuotes=p.forceQuotes||!1,this.replacer=typeof p.replacer=="function"?p.replacer:null,this.implicitTypes=this.schema.compiledImplicit,this.explicitTypes=this.schema.compiledExplicit,this.tag=null,this.result="",this.duplicates=[],this.usedDuplicates=null}function Je(p,A){const H=e.repeat(" ",A);let V=0,D="";const J=p.length;for(;V<J;){let K;const de=p.indexOf(`
`,V);de===-1?(K=p.slice(V),V=J):(K=p.slice(V,de+1),V=de+1),K.length&&K!==`
`&&(D+=H),D+=K}return D}function bn(p,A){return`
`+e.repeat(" ",p.indent*A)}function Sn(p,A){for(let H=0,V=p.implicitTypes.length;H<V;H+=1)if(p.implicitTypes[H].resolve(A))return!0;return!1}function We(p){return p===u||p===s}function Ye(p){return p>=32&&p<=126||p>=161&&p<=55295&&p!==8232&&p!==8233||p>=57344&&p<=65533&&p!==i||p>=65536&&p<=1114111}function O(p){return Ye(p)&&p!==i&&p!==c&&p!==l}function le(p,A,H){const V=O(p),D=V&&!We(p);return(H?V:V&&p!==F&&p!==L&&p!==Z&&p!==ne&&p!==$)&&p!==f&&!(A===I&&!D)||O(A)&&!We(A)&&p===f||A===I&&D}function X(p){return Ye(p)&&p!==i&&!We(p)&&p!==x&&p!==ie&&p!==I&&p!==F&&p!==L&&p!==Z&&p!==ne&&p!==$&&p!==f&&p!==T&&p!==w&&p!==d&&p!==B&&p!==q&&p!==pe&&p!==N&&p!==m&&p!==b&&p!==C&&p!==ue}function he(p){return!We(p)&&p!==I}function Re(p,A){const H=p.charCodeAt(A);let V;return H>=55296&&H<=56319&&A+1<p.length&&(V=p.charCodeAt(A+1),V>=56320&&V<=57343)?(H-55296)*1024+V-56320+65536:H}function h(p){return/^\n* /.test(p)}const g=1,y=2,j=3,z=4,k=5;function re(p,A,H,V,D,J,K,de){let ce,be=0,Ae=null,Ie=!1,He=!1;const ti=V!==-1;let Yo=-1,Jo=X(Re(p,0))&&he(Re(p,p.length-1));if(A||K)for(ce=0;ce<p.length;be>=65536?ce+=2:ce++){if(be=Re(p,ce),!Ye(be))return k;Jo=Jo&&le(be,Ae,de),Ae=be}else{for(ce=0;ce<p.length;be>=65536?ce+=2:ce++){if(be=Re(p,ce),be===l)Ie=!0,ti&&(He=He||ce-Yo-1>V&&p[Yo+1]!==" ",Yo=ce);else if(!Ye(be))return k;Jo=Jo&&le(be,Ae,de),Ae=be}He=He||ti&&ce-Yo-1>V&&p[Yo+1]!==" "}return!Ie&&!He?Jo&&!K&&!D(p)?g:J===Ke?k:y:H>9&&h(p)?k:K?J===Ke?k:y:He?z:j}function ae(p,A,H,V,D){p.dump=(function(){if(A.length===0)return p.quotingType===Ke?'""':"''";if(!p.noCompatMode&&(me.indexOf(A)!==-1||G.test(A)))return p.quotingType===Ke?'"'+A+'"':"'"+A+"'";const J=p.indent*Math.max(1,H),K=p.lineWidth===-1?-1:Math.max(Math.min(p.lineWidth,40),p.lineWidth-J),de=V||p.flowLevel>-1&&H>=p.flowLevel;function ce(be){return Sn(p,be)}switch(re(A,de,p.indent,K,ce,p.quotingType,p.forceQuotes&&!V,D)){case g:return A;case y:return"'"+A.replace(/'/g,"''")+"'";case j:return"|"+oe(A,p.indent)+U(Je(A,J));case z:return">"+oe(A,p.indent)+U(Je(_e(A,K),J));case k:return'"'+ge(A)+'"';default:throw new n("impossible error: invalid scalar style")}})()}function oe(p,A){const H=h(p)?String(A):"",V=p[p.length-1]===`
`,J=V&&(p[p.length-2]===`
`||p===`
`)?"+":V?"":"-";return H+J+`
`}function U(p){return p[p.length-1]===`
`?p.slice(0,-1):p}function _e(p,A){const H=/(\n+)([^\n]*)/g;let V=(function(){let de=p.indexOf(`
`);return de=de!==-1?de:p.length,H.lastIndex=de,te(p.slice(0,de),A)})(),D=p[0]===`
`||p[0]===" ",J,K;for(;K=H.exec(p);){const de=K[1],ce=K[2];J=ce[0]===" ",V+=de+(!D&&!J&&ce!==""?`
`:"")+te(ce,A),D=J}return V}function te(p,A){if(p===""||p[0]===" ")return p;const H=/ [^ ]/g;let V,D=0,J,K=0,de=0,ce="";for(;V=H.exec(p);)de=V.index,de-D>A&&(J=K>D?K:de,ce+=`
`+p.slice(D,J),D=J+1),K=de;return ce+=`
`,p.length-D>A&&K>D?ce+=p.slice(D,K)+`
`+p.slice(K+1):ce+=p.slice(D),ce.slice(1)}function ge(p){let A="",H=0;for(let V=0;V<p.length;H>=65536?V+=2:V++){H=Re(p,V);const D=Q[H];!D&&Ye(H)?(A+=p[V],H>=65536&&(A+=p[V+1])):A+=D||ve(H)}return A}function xe(p,A,H){let V="";const D=p.tag;for(let J=0,K=H.length;J<K;J+=1){let de=H[J];p.replacer&&(de=p.replacer.call(H,String(J),de)),(S(p,A,de,!1,!1)||typeof de>"u"&&S(p,A,null,!1,!1))&&(V!==""&&(V+=","+(p.condenseFlow?"":" ")),V+=p.dump)}p.tag=D,p.dump="["+V+"]"}function ke(p,A,H,V){let D="";const J=p.tag;for(let K=0,de=H.length;K<de;K+=1){let ce=H[K];p.replacer&&(ce=p.replacer.call(H,String(K),ce)),(S(p,A+1,ce,!0,!0,!1,!0)||typeof ce>"u"&&S(p,A+1,null,!0,!0,!1,!0))&&((!V||D!=="")&&(D+=bn(p,A)),p.dump&&l===p.dump.charCodeAt(0)?D+="-":D+="- ",D+=p.dump)}p.tag=J,p.dump=D||"[]"}function Oe(p,A,H){let V="";const D=p.tag,J=Object.keys(H);for(let K=0,de=J.length;K<de;K+=1){let ce="";V!==""&&(ce+=", "),p.condenseFlow&&(ce+='"');const be=J[K];let Ae=H[be];p.replacer&&(Ae=p.replacer.call(H,be,Ae)),S(p,A,be,!1,!1)&&(p.dump.length>1024&&(ce+="? "),ce+=p.dump+(p.condenseFlow?'"':"")+":"+(p.condenseFlow?"":" "),S(p,A,Ae,!1,!1)&&(ce+=p.dump,V+=ce))}p.tag=D,p.dump="{"+V+"}"}function t(p,A,H,V){let D="";const J=p.tag,K=Object.keys(H);if(p.sortKeys===!0)K.sort();else if(typeof p.sortKeys=="function")K.sort(p.sortKeys);else if(p.sortKeys)throw new n("sortKeys must be a boolean or a function");for(let de=0,ce=K.length;de<ce;de+=1){let be="";(!V||D!=="")&&(be+=bn(p,A));const Ae=K[de];let Ie=H[Ae];if(p.replacer&&(Ie=p.replacer.call(H,Ae,Ie)),!S(p,A+1,Ae,!0,!0,!0))continue;const He=p.tag!==null&&p.tag!=="?"||p.dump&&p.dump.length>1024;He&&(p.dump&&l===p.dump.charCodeAt(0)?be+="?":be+="? "),be+=p.dump,He&&(be+=bn(p,A)),S(p,A+1,Ie,!0,He)&&(p.dump&&l===p.dump.charCodeAt(0)?be+=":":be+=": ",be+=p.dump,D+=be)}p.tag=J,p.dump=D||"{}"}function _(p,A,H){const V=H?p.explicitTypes:p.implicitTypes;for(let D=0,J=V.length;D<J;D+=1){const K=V[D];if((K.instanceOf||K.predicate)&&(!K.instanceOf||typeof A=="object"&&A instanceof K.instanceOf)&&(!K.predicate||K.predicate(A))){if(H?K.multi&&K.representName?p.tag=K.representName(A):p.tag=K.tag:p.tag="?",K.represent){const de=p.styleMap[K.tag]||K.defaultStyle;let ce;if(a.call(K.represent)==="[object Function]")ce=K.represent(A,de);else if(r.call(K.represent,de))ce=K.represent[de](A,de);else throw new n("!<"+K.tag+'> tag resolver accepts not "'+de+'" style');p.dump=ce}return!0}}return!1}function S(p,A,H,V,D,J,K){p.tag=null,p.dump=H,_(p,H,!1)||_(p,H,!0);const de=a.call(p.dump),ce=V;V&&(V=p.flowLevel<0||p.flowLevel>A);const be=de==="[object Object]"||de==="[object Array]";let Ae,Ie;if(be&&(Ae=p.duplicates.indexOf(H),Ie=Ae!==-1),(p.tag!==null&&p.tag!=="?"||Ie||p.indent!==2&&A>0)&&(D=!1),Ie&&p.usedDuplicates[Ae])p.dump="*ref_"+Ae;else{if(be&&Ie&&!p.usedDuplicates[Ae]&&(p.usedDuplicates[Ae]=!0),de==="[object Object]")V&&Object.keys(p.dump).length!==0?(t(p,A,p.dump,D),Ie&&(p.dump="&ref_"+Ae+p.dump)):(Oe(p,A,p.dump),Ie&&(p.dump="&ref_"+Ae+" "+p.dump));else if(de==="[object Array]")V&&p.dump.length!==0?(p.noArrayIndent&&!K&&A>0?ke(p,A-1,p.dump,D):ke(p,A,p.dump,D),Ie&&(p.dump="&ref_"+Ae+p.dump)):(xe(p,A,p.dump),Ie&&(p.dump="&ref_"+Ae+" "+p.dump));else if(de==="[object String]")p.tag!=="?"&&ae(p,p.dump,A,J,ce);else{if(de==="[object Undefined]")return!1;if(p.skipInvalid)return!1;throw new n("unacceptable kind of an object to dump "+de)}if(p.tag!==null&&p.tag!=="?"){let He=encodeURI(p.tag[0]==="!"?p.tag.slice(1):p.tag).replace(/!/g,"%21");p.tag[0]==="!"?He="!"+He:He.slice(0,18)==="tag:yaml.org,2002:"?He="!!"+He.slice(18):He="!<"+He+">",p.dump=He+" "+p.dump}}return!0}function P(p,A){const H=[],V=[];R(p,H,V);const D=V.length;for(let J=0;J<D;J+=1)A.duplicates.push(H[V[J]]);A.usedDuplicates=new Array(D)}function R(p,A,H){if(p!==null&&typeof p=="object"){const V=A.indexOf(p);if(V!==-1)H.indexOf(V)===-1&&H.push(V);else if(A.push(p),Array.isArray(p))for(let D=0,J=p.length;D<J;D+=1)R(p[D],A,H);else{const D=Object.keys(p);for(let J=0,K=D.length;J<K;J+=1)R(p[D[J]],A,H)}}}function Y(p,A){A=A||{};const H=new vn(A);H.noRefs||P(p,H);let V=p;return H.replacer&&(V=H.replacer.call({"":V},"",V)),S(H,0,V,!0,!0)?H.dump+`
`:""}return rt.dump=Y,rt}var As;function Wm(){if(As)return nn;As=1;const e=Km(),n=Gm();function o(a,r){return function(){throw new Error("Function yaml."+a+" is removed in js-yaml 4. Use yaml."+r+" instead, which is now safe by default.")}}return nn.Type=hn(),nn.Schema=dc(),nn.FAILSAFE_SCHEMA=hc(),nn.JSON_SCHEMA=yc(),nn.CORE_SCHEMA=Ac(),nn.DEFAULT_SCHEMA=Xt(),nn.load=e.load,nn.loadAll=e.loadAll,nn.dump=n.dump,nn.YAMLException=Oa(),nn.types={binary:Bc(),float:_c(),map:fc(),null:vc(),pairs:Rc(),set:Sc(),timestamp:Nc(),bool:gc(),int:bc(),merge:xc(),omap:Tc(),seq:pc(),str:mc()},nn.safeLoad=o("safeLoad","load"),nn.safeLoadAll=o("safeLoadAll","loadAll"),nn.safeDump=o("safeDump","dump"),nn}var Ym=Wm();const ar=Hm(Ym),{Type:Sg,Schema:Eg,FAILSAFE_SCHEMA:wg,JSON_SCHEMA:Cg,CORE_SCHEMA:kg,DEFAULT_SCHEMA:Ig,load:Pg,loadAll:Og,dump:jg,YAMLException:Vg,types:Dg,safeLoad:Lg,safeLoadAll:qg,safeDump:$g}=ar;class Jm{constructor({ruleSetRepository:n}){this.ruleSetRepository=n}list(){return this.ruleSetRepository.getAll()}get(n){return this.ruleSetRepository.get(n)}async save(n){const o=await this.ruleSetRepository.get(n.id),a=zm(n,{createdAt:o?.createdAt??new Date,updatedAt:new Date});return this.ruleSetRepository.put(a)}async importFromJson(n,o){let a;try{a=JSON.parse(n)}catch{throw new TypeError("Arquivo de regras inválido: JSON malformado.")}return this.save(o?{...a,grupo:o}:a)}async importFromYaml(n,o){let a;try{a=ar.load(n)}catch{throw new TypeError("Arquivo de regras inválido: YAML malformado.")}return this.save(o?{...a,grupo:o}:a)}exportToJson(n){Et(n);const{source:o,createdAt:a,updatedAt:r,...i}=n;return JSON.stringify(i,null,2)}exportToYaml(n){Et(n);const{source:o,createdAt:a,updatedAt:r,...i}=n;return ar.dump(i,{noRefs:!0})}async exportByIdToJson(n){const o=await this.ruleSetRepository.get(n);if(!o)throw new Error("Conjunto de regras não encontrado.");return this.exportToJson(o)}async exportByIdToYaml(n){const o=await this.ruleSetRepository.get(n);if(!o)throw new Error("Conjunto de regras não encontrado.");return this.exportToYaml(o)}delete(n){return this.ruleSetRepository.delete(n)}}async function Qm({indexedDB:e}={}){const n=await Rm(e),o={projectRepository:new Cm(n),environmentRepository:new Em(n),elementRepository:new Sm(n),evaluationRepository:new wm(n),ruleSetRepository:new km(n)},a=new Dm(o);return{projectService:new Lm(o),evaluationService:a,quickEvaluationService:new qm({evaluationService:a}),ruleSetService:new Jm(o),close:()=>n.close()}}const Xm=`id: area_descanso
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
`,Zm=`id: armario_vestiario
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
`,ep=`id: assento_pmr_plateia
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
`,np=`id: bacia_sanitaria
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
`,op=`id: balcao
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
`,ap=`id: banco_vestiario
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
`,rp=`id: banheira_acessivel
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
`,tp=`id: barras_apoio
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
`,ip=`id: bebedouro
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
`,sp=`id: cabides
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
`,lp=`id: cabina_vestiario
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
`,cp=`id: caixa_autoatendimento
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
`,up=`id: calcada
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
`,dp=`id: chuveiro
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
`,mp=`id: corredores
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
`,pp=`id: corrimaos
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
`,fp=`id: degraus-isolados
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
`,hp=`id: elevadores
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
`,vp=`id: escadas
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
`,gp=`id: espaco_cao_guia
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
`,bp=`id: espaco_pcr_plateia
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
`,_p=`id: espelhos_acessiveis
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
`,yp=`id: estacionamento
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
`,Ap=`id: guarda_corpos
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
`,Np=`id: janelas
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
`,xp=`id: lavatorio
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
`,Bp=`id: mesa
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
`,Tp=`id: mictorio
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
`,Rp=`id: papeleiras
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
`,Sp=`id: piscina
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
`,Ep=`id: piso-desnivel
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
`,wp=`id: piso_tatil
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
`,Cp=`id: porta_objetos
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
`,kp=`id: portas
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
`,Ip=`id: rampas
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
`,Pp=`id: sanitario_acessivel
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
`,Op=`id: sinalizacao
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
`,jp=`id: vagas_acessiveis
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
`,Vp=Object.assign({"../rules/nbr9050-2020/area_descanso.yaml":Xm,"../rules/nbr9050-2020/armario_vestiario.yaml":Zm,"../rules/nbr9050-2020/assento_pmr_plateia.yaml":ep,"../rules/nbr9050-2020/bacia_sanitaria.yaml":np,"../rules/nbr9050-2020/balcao.yaml":op,"../rules/nbr9050-2020/banco_vestiario.yaml":ap,"../rules/nbr9050-2020/banheira_acessivel.yaml":rp,"../rules/nbr9050-2020/barras_apoio.yaml":tp,"../rules/nbr9050-2020/bebedouro.yaml":ip,"../rules/nbr9050-2020/cabides.yaml":sp,"../rules/nbr9050-2020/cabina_vestiario.yaml":lp,"../rules/nbr9050-2020/caixa_autoatendimento.yaml":cp,"../rules/nbr9050-2020/calcada.yaml":up,"../rules/nbr9050-2020/chuveiro.yaml":dp,"../rules/nbr9050-2020/corredores.yaml":mp,"../rules/nbr9050-2020/corrimaos.yaml":pp,"../rules/nbr9050-2020/degraus-isolados.yaml":fp,"../rules/nbr9050-2020/elevadores.yaml":hp,"../rules/nbr9050-2020/escadas.yaml":vp,"../rules/nbr9050-2020/espaco_cao_guia.yaml":gp,"../rules/nbr9050-2020/espaco_pcr_plateia.yaml":bp,"../rules/nbr9050-2020/espelhos_acessiveis.yaml":_p,"../rules/nbr9050-2020/estacionamento.yaml":yp,"../rules/nbr9050-2020/guarda_corpos.yaml":Ap,"../rules/nbr9050-2020/janelas.yaml":Np,"../rules/nbr9050-2020/lavatorio.yaml":xp,"../rules/nbr9050-2020/mesa.yaml":Bp,"../rules/nbr9050-2020/mictorio.yaml":Tp,"../rules/nbr9050-2020/papeleiras.yaml":Rp,"../rules/nbr9050-2020/piscina.yaml":Sp,"../rules/nbr9050-2020/piso-desnivel.yaml":Ep,"../rules/nbr9050-2020/piso_tatil.yaml":wp,"../rules/nbr9050-2020/porta_objetos.yaml":Cp,"../rules/nbr9050-2020/portas.yaml":kp,"../rules/nbr9050-2020/rampas.yaml":Ip,"../rules/nbr9050-2020/sanitario_acessivel.yaml":Pp,"../rules/nbr9050-2020/sinalizacao.yaml":Op,"../rules/nbr9050-2020/vagas_acessiveis.yaml":jp});async function Dp(){return Object.entries(Vp).map(([e,n])=>({path:e,ruleSet:ar.load(n)})).sort((e,n)=>e.ruleSet.nome.localeCompare(n.ruleSet.nome))}const Io=typeof document<"u";function Ec(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function Lp(e){return e.__esModule||e[Symbol.toStringTag]==="Module"||e.default&&Ec(e.default)}const Ve=Object.assign;function tt(e,n){const o={};for(const a in n){const r=n[a];o[a]=On(r)?r.map(e):e(r)}return o}const fa=()=>{},On=Array.isArray;function Ns(e,n){const o={};for(const a in e)o[a]=a in n?n[a]:e[a];return o}const wc=/#/g,qp=/&/g,$p=/\//g,Mp=/=/g,Fp=/\?/g,Cc=/\+/g,zp=/%5B/g,Hp=/%5D/g,kc=/%5E/g,Up=/%60/g,Ic=/%7B/g,Kp=/%7C/g,Pc=/%7D/g,Gp=/%20/g;function Zt(e){return e==null?"":encodeURI(""+e).replace(Kp,"|").replace(zp,"[").replace(Hp,"]")}function Wp(e){return Zt(e).replace(Ic,"{").replace(Pc,"}").replace(kc,"^")}function wt(e){return Zt(e).replace(Cc,"%2B").replace(Gp,"+").replace(wc,"%23").replace(qp,"%26").replace(Up,"`").replace(Ic,"{").replace(Pc,"}").replace(kc,"^")}function Yp(e){return wt(e).replace(Mp,"%3D")}function Jp(e){return Zt(e).replace(wc,"%23").replace(Fp,"%3F")}function Qp(e){return Jp(e).replace($p,"%2F")}function Ta(e){if(e==null)return null;try{return decodeURIComponent(""+e)}catch{}return""+e}const Xp=/\/$/,Zp=e=>e.replace(Xp,"");function it(e,n,o="/"){let a,r={},i="",s="";const l=n.indexOf("#");let c=n.indexOf("?");return c=l>=0&&c>l?-1:c,c>=0&&(a=n.slice(0,c),i=n.slice(c,l>0?l:n.length),r=e(i.slice(1))),l>=0&&(a=a||n.slice(0,l),s=n.slice(l,n.length)),a=af(a??n,o),{fullPath:a+i+s,path:a,query:r,hash:Ta(s)}}function ef(e,n){const o=n.query?e(n.query):"";return n.path+(o&&"?")+o+(n.hash||"")}function xs(e,n){return!n||!e.toLowerCase().startsWith(n.toLowerCase())?e:e.slice(n.length)||"/"}function nf(e,n,o){const a=n.matched.length-1,r=o.matched.length-1;return a>-1&&a===r&&zo(n.matched[a],o.matched[r])&&Oc(n.params,o.params)&&e(n.query)===e(o.query)&&n.hash===o.hash}function zo(e,n){return(e.aliasOf||e)===(n.aliasOf||n)}function Oc(e,n){if(Object.keys(e).length!==Object.keys(n).length)return!1;for(var o in e)if(!of(e[o],n[o]))return!1;return!0}function of(e,n){return On(e)?Bs(e,n):On(n)?Bs(n,e):e?.valueOf()===n?.valueOf()}function Bs(e,n){return On(n)?e.length===n.length&&e.every((o,a)=>o===n[a]):e.length===1&&e[0]===n}function af(e,n){if(e.startsWith("/"))return e;if(!e)return n;const o=n.split("/"),a=e.split("/"),r=a[a.length-1];(r===".."||r===".")&&a.push("");let i=o.length-1,s,l;for(s=0;s<a.length;s++)if(l=a[s],l!==".")if(l==="..")i>1&&i--;else break;return o.slice(0,i).join("/")+"/"+a.slice(s).join("/")}const io={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};let Ct=(function(e){return e.pop="pop",e.push="push",e})({}),st=(function(e){return e.back="back",e.forward="forward",e.unknown="",e})({});function rf(e){if(!e)if(Io){const n=document.querySelector("base");e=n&&n.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),Zp(e)}const tf=/^[^#]+#/;function sf(e,n){return e.replace(tf,"#")+n}function lf(e,n){const o=document.documentElement.getBoundingClientRect(),a=e.getBoundingClientRect();return{behavior:n.behavior,left:a.left-o.left-(n.left||0),top:a.top-o.top-(n.top||0)}}const yr=()=>({left:window.scrollX,top:window.scrollY});function cf(e){let n;if("el"in e){const o=e.el,a=typeof o=="string"&&o.startsWith("#"),r=typeof o=="string"?a?document.getElementById(o.slice(1)):document.querySelector(o):o;if(!r)return;n=lf(r,e)}else n=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(n):window.scrollTo(n.left!=null?n.left:window.scrollX,n.top!=null?n.top:window.scrollY)}function Ts(e,n){return(history.state?history.state.position-n:-1)+e}const kt=new Map;function uf(e,n){kt.set(e,n)}function df(e){const n=kt.get(e);return kt.delete(e),n}function mf(e){return typeof e=="string"||e&&typeof e=="object"}function jc(e){return typeof e=="string"||typeof e=="symbol"}let Ge=(function(e){return e[e.MATCHER_NOT_FOUND=1]="MATCHER_NOT_FOUND",e[e.NAVIGATION_GUARD_REDIRECT=2]="NAVIGATION_GUARD_REDIRECT",e[e.NAVIGATION_ABORTED=4]="NAVIGATION_ABORTED",e[e.NAVIGATION_CANCELLED=8]="NAVIGATION_CANCELLED",e[e.NAVIGATION_DUPLICATED=16]="NAVIGATION_DUPLICATED",e})({});const Vc=Symbol("");Ge.MATCHER_NOT_FOUND+"",Ge.NAVIGATION_GUARD_REDIRECT+"",Ge.NAVIGATION_ABORTED+"",Ge.NAVIGATION_CANCELLED+"",Ge.NAVIGATION_DUPLICATED+"";function Ho(e,n){return Ve(new Error,{type:e,[Vc]:!0},n)}function Kn(e,n){return e instanceof Error&&Vc in e&&(n==null||!!(e.type&n))}const pf=["params","query","hash"];function ff(e){if(typeof e=="string")return e;if(e.path!=null)return e.path;const n={};for(const o of pf)o in e&&(n[o]=e[o]);return JSON.stringify(n,null,2)}function hf(e){const n={};if(e===""||e==="?")return n;const o=(e[0]==="?"?e.slice(1):e).split("&");for(let a=0;a<o.length;++a){const r=o[a].replace(Cc," "),i=r.indexOf("="),s=Ta(i<0?r:r.slice(0,i)),l=i<0?null:Ta(r.slice(i+1));if(s in n){let c=n[s];On(c)||(c=n[s]=[c]),c.push(l)}else n[s]=l}return n}function Rs(e){let n="";for(let o in e){const a=e[o];if(o=Yp(o),a==null){a!==void 0&&(n+=(n.length?"&":"")+o);continue}(On(a)?a.map(r=>r&&wt(r)):[a&&wt(a)]).forEach(r=>{r!==void 0&&(n+=(n.length?"&":"")+o,r!=null&&(n+="="+r))})}return n}function vf(e){const n={};for(const o in e){const a=e[o];a!==void 0&&(n[o]=On(a)?a.map(r=>r==null?null:""+r):a==null?a:""+a)}return n}const gf=Symbol(""),Ss=Symbol(""),Ar=Symbol(""),ei=Symbol(""),It=Symbol("");function oa(){let e=[];function n(a){return e.push(a),()=>{const r=e.indexOf(a);r>-1&&e.splice(r,1)}}function o(){e=[]}return{add:n,list:()=>e.slice(),reset:o}}function co(e,n,o,a,r,i=s=>s()){const s=a&&(a.enterCallbacks[r]=a.enterCallbacks[r]||[]);return()=>new Promise((l,c)=>{const u=f=>{f===!1?c(Ho(Ge.NAVIGATION_ABORTED,{from:o,to:n})):f instanceof Error?c(f):mf(f)?c(Ho(Ge.NAVIGATION_GUARD_REDIRECT,{from:n,to:f})):(s&&a.enterCallbacks[r]===s&&typeof f=="function"&&s.push(f),l())},d=i(()=>e.call(a&&a.instances[r],n,o,u));let m=Promise.resolve(d);e.length<3&&(m=m.then(u)),m.catch(f=>c(f))})}function lt(e,n,o,a,r=i=>i()){const i=[];for(const s of e)for(const l in s.components){let c=s.components[l];if(!(n!=="beforeRouteEnter"&&!s.instances[l]))if(Ec(c)){const u=(c.__vccOpts||c)[n];u&&i.push(co(u,o,a,s,l,r))}else{let u=c();i.push(()=>u.then(d=>{if(!d)throw new Error(`Couldn't resolve component "${l}" at "${s.path}"`);const m=Lp(d)?d.default:d;s.mods[l]=d,s.components[l]=m;const f=(m.__vccOpts||m)[n];return f&&co(f,o,a,s,l,r)()}))}}return i}function bf(e,n){const o=[],a=[],r=[],i=Math.max(n.matched.length,e.matched.length);for(let s=0;s<i;s++){const l=n.matched[s];l&&(e.matched.find(u=>zo(u,l))?a.push(l):o.push(l));const c=e.matched[s];c&&(n.matched.find(u=>zo(u,c))||r.push(c))}return[o,a,r]}let _f=()=>location.protocol+"//"+location.host;function Dc(e,n){const{pathname:o,search:a,hash:r}=n,i=e.indexOf("#");if(i>-1){let s=r.includes(e.slice(i))?e.slice(i).length:1,l=r.slice(s);return l[0]!=="/"&&(l="/"+l),xs(l,"")}return xs(o,e)+a+r}function yf(e,n,o,a){let r=[],i=[],s=null;const l=({state:f})=>{const b=Dc(e,location),T=o.value,N=n.value;let w=0;if(f){if(o.value=b,n.value=f,s&&s===T){s=null;return}w=N?f.position-N.position:0}else a(b);r.forEach(F=>{F(o.value,T,{delta:w,type:Ct.pop,direction:w?w>0?st.forward:st.back:st.unknown})})};function c(){s=o.value}function u(f){r.push(f);const b=()=>{const T=r.indexOf(f);T>-1&&r.splice(T,1)};return i.push(b),b}function d(){if(document.visibilityState==="hidden"){const{history:f}=window;if(!f.state)return;f.replaceState(Ve({},f.state,{scroll:yr()}),"")}}function m(){for(const f of i)f();i=[],window.removeEventListener("popstate",l),window.removeEventListener("pagehide",d),document.removeEventListener("visibilitychange",d)}return window.addEventListener("popstate",l),window.addEventListener("pagehide",d),document.addEventListener("visibilitychange",d),{pauseListeners:c,listen:u,destroy:m}}function Es(e,n,o,a=!1,r=!1){return{back:e,current:n,forward:o,replaced:a,position:window.history.length,scroll:r?yr():null}}function Af(e){const{history:n,location:o}=window,a={value:Dc(e,o)},r={value:n.state};r.value||i(a.value,{back:null,current:a.value,forward:null,position:n.length-1,replaced:!0,scroll:null},!0);function i(c,u,d){const m=e.indexOf("#"),f=m>-1?(o.host&&document.querySelector("base")?e:e.slice(m))+c:_f()+e+c;try{n[d?"replaceState":"pushState"](u,"",f),r.value=u}catch(b){console.error(b),o[d?"replace":"assign"](f)}}function s(c,u){i(c,Ve({},n.state,Es(r.value.back,c,r.value.forward,!0),u,{position:r.value.position}),!0),a.value=c}function l(c,u){const d=Ve({},r.value,n.state,{forward:c,scroll:yr()});i(d.current,d,!0),i(c,Ve({},Es(a.value,c,null),{position:d.position+1},u),!1),a.value=c}return{location:a,state:r,push:l,replace:s}}function Nf(e){e=rf(e);const n=Af(e),o=yf(e,n.state,n.location,n.replace);function a(i,s=!0){s||o.pauseListeners(),history.go(i)}const r=Ve({location:"",base:e,go:a,createHref:sf.bind(null,e)},n,o);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>n.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>n.state.value}),r}let xo=(function(e){return e[e.Static=0]="Static",e[e.Param=1]="Param",e[e.Group=2]="Group",e})({});var Qe=(function(e){return e[e.Static=0]="Static",e[e.Param=1]="Param",e[e.ParamRegExp=2]="ParamRegExp",e[e.ParamRegExpEnd=3]="ParamRegExpEnd",e[e.EscapeNext=4]="EscapeNext",e})(Qe||{});const xf={type:xo.Static,value:""},Bf=/[a-zA-Z0-9_]/;function Tf(e){if(!e)return[[]];if(e==="/")return[[xf]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function n(b){throw new Error(`ERR (${o})/"${u}": ${b}`)}let o=Qe.Static,a=o;const r=[];let i;function s(){i&&r.push(i),i=[]}let l=0,c,u="",d="";function m(){u&&(o===Qe.Static?i.push({type:xo.Static,value:u}):o===Qe.Param||o===Qe.ParamRegExp||o===Qe.ParamRegExpEnd?(i.length>1&&(c==="*"||c==="+")&&n(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),i.push({type:xo.Param,value:u,regexp:d,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):n("Invalid state to consume buffer"),u="")}function f(){u+=c}for(;l<e.length;){if(c=e[l++],c==="\\"&&o!==Qe.ParamRegExp){a=o,o=Qe.EscapeNext;continue}switch(o){case Qe.Static:c==="/"?(u&&m(),s()):c===":"?(m(),o=Qe.Param):f();break;case Qe.EscapeNext:f(),o=a;break;case Qe.Param:c==="("?o=Qe.ParamRegExp:Bf.test(c)?f():(m(),o=Qe.Static,c!=="*"&&c!=="?"&&c!=="+"&&l--);break;case Qe.ParamRegExp:c===")"?d[d.length-1]=="\\"?d=d.slice(0,-1)+c:o=Qe.ParamRegExpEnd:d+=c;break;case Qe.ParamRegExpEnd:m(),o=Qe.Static,c!=="*"&&c!=="?"&&c!=="+"&&l--,d="";break;default:n("Unknown state");break}}return o===Qe.ParamRegExp&&n(`Unfinished custom RegExp for param "${u}"`),m(),s(),r}const ws="[^/]+?",Rf={sensitive:!1,strict:!1,start:!0,end:!0};var un=(function(e){return e[e._multiplier=10]="_multiplier",e[e.Root=90]="Root",e[e.Segment=40]="Segment",e[e.SubSegment=30]="SubSegment",e[e.Static=40]="Static",e[e.Dynamic=20]="Dynamic",e[e.BonusCustomRegExp=10]="BonusCustomRegExp",e[e.BonusWildcard=-50]="BonusWildcard",e[e.BonusRepeatable=-20]="BonusRepeatable",e[e.BonusOptional=-8]="BonusOptional",e[e.BonusStrict=.7000000000000001]="BonusStrict",e[e.BonusCaseSensitive=.25]="BonusCaseSensitive",e})(un||{});const Sf=/[.+*?^${}()[\]/\\]/g;function Ef(e,n){const o=Ve({},Rf,n),a=[];let r=o.start?"^":"";const i=[];for(const u of e){const d=u.length?[]:[un.Root];o.strict&&!u.length&&(r+="/");for(let m=0;m<u.length;m++){const f=u[m];let b=un.Segment+(o.sensitive?un.BonusCaseSensitive:0);if(f.type===xo.Static)m||(r+="/"),r+=f.value.replace(Sf,"\\$&"),b+=un.Static;else if(f.type===xo.Param){const{value:T,repeatable:N,optional:w,regexp:F}=f;i.push({name:T,repeatable:N,optional:w});const x=F||ws;if(x!==ws){b+=un.BonusCustomRegExp;try{`${x}`}catch(q){throw new Error(`Invalid custom RegExp for param "${T}" (${x}): `+q.message)}}let I=N?`((?:${x})(?:/(?:${x}))*)`:`(${x})`;m||(I=w&&u.length<2?`(?:/${I})`:"/"+I),w&&(I+="?"),r+=I,b+=un.Dynamic,w&&(b+=un.BonusOptional),N&&(b+=un.BonusRepeatable),x===".*"&&(b+=un.BonusWildcard)}d.push(b)}a.push(d)}if(o.strict&&o.end){const u=a.length-1;a[u][a[u].length-1]+=un.BonusStrict}o.strict||(r+="/?"),o.end?r+="$":o.strict&&!r.endsWith("/")&&(r+="(?:/|$)");const s=new RegExp(r,o.sensitive?"":"i");function l(u){const d=u.match(s),m={};if(!d)return null;for(let f=1;f<d.length;f++){const b=d[f]||"",T=i[f-1];m[T.name]=b&&T.repeatable?b.split("/"):b}return m}function c(u){let d="",m=!1;for(const f of e){(!m||!d.endsWith("/"))&&(d+="/"),m=!1;for(const b of f)if(b.type===xo.Static)d+=b.value;else if(b.type===xo.Param){const{value:T,repeatable:N,optional:w}=b,F=T in u?u[T]:"";if(On(F)&&!N)throw new Error(`Provided param "${T}" is an array but it is not repeatable (* or + modifiers)`);const x=On(F)?F.join("/"):F;if(!x)if(w)f.length<2&&(d.endsWith("/")?d=d.slice(0,-1):m=!0);else throw new Error(`Missing required param "${T}"`);d+=x}}return d||"/"}return{re:s,score:a,keys:i,parse:l,stringify:c}}function wf(e,n){let o=0;for(;o<e.length&&o<n.length;){const a=n[o]-e[o];if(a)return a;o++}return e.length<n.length?e.length===1&&e[0]===un.Static+un.Segment?-1:1:e.length>n.length?n.length===1&&n[0]===un.Static+un.Segment?1:-1:0}function Lc(e,n){let o=0;const a=e.score,r=n.score;for(;o<a.length&&o<r.length;){const i=wf(a[o],r[o]);if(i)return i;o++}if(Math.abs(r.length-a.length)===1){if(Cs(a))return 1;if(Cs(r))return-1}return r.length-a.length}function Cs(e){const n=e[e.length-1];return e.length>0&&n[n.length-1]<0}const Cf={strict:!1,end:!0,sensitive:!1};function kf(e,n,o){const a=Ef(Tf(e.path),o),r=Ve(a,{record:e,parent:n,children:[],alias:[]});return n&&!r.record.aliasOf==!n.record.aliasOf&&n.children.push(r),r}function If(e,n){const o=[],a=new Map;n=Ns(Cf,n);function r(m){return a.get(m)}function i(m,f,b){const T=!b,N=Is(m);N.aliasOf=b&&b.record;const w=Ns(n,m),F=[N];if("alias"in m){const q=typeof m.alias=="string"?[m.alias]:m.alias;for(const pe of q)F.push(Is(Ve({},N,{components:b?b.record.components:N.components,path:pe,aliasOf:b?b.record:N})))}let x,I;for(const q of F){const{path:pe}=q;if(f&&pe[0]!=="/"){const ie=f.record.path,C=ie[ie.length-1]==="/"?"":"/";q.path=f.record.path+(pe&&C+pe)}if(x=kf(q,f,w),b?b.alias.push(x):(I=I||x,I!==x&&I.alias.push(x),T&&m.name&&!Ps(x)&&s(m.name)),qc(x)&&c(x),N.children){const ie=N.children;for(let C=0;C<ie.length;C++)i(ie[C],x,b&&b.children[C])}b=b||x}return I?()=>{s(I)}:fa}function s(m){if(jc(m)){const f=a.get(m);f&&(a.delete(m),o.splice(o.indexOf(f),1),f.children.forEach(s),f.alias.forEach(s))}else{const f=o.indexOf(m);f>-1&&(o.splice(f,1),m.record.name&&a.delete(m.record.name),m.children.forEach(s),m.alias.forEach(s))}}function l(){return o}function c(m){const f=jf(m,o);o.splice(f,0,m),m.record.name&&!Ps(m)&&a.set(m.record.name,m)}function u(m,f){let b,T={},N,w;if("name"in m&&m.name){if(b=a.get(m.name),!b)throw Ho(Ge.MATCHER_NOT_FOUND,{location:m});w=b.record.name,T=Ve(ks(f.params,b.keys.filter(I=>!I.optional).concat(b.parent?b.parent.keys.filter(I=>I.optional):[]).map(I=>I.name)),m.params&&ks(m.params,b.keys.map(I=>I.name))),N=b.stringify(T)}else if(m.path!=null)N=m.path,b=o.find(I=>I.re.test(N)),b&&(T=b.parse(N),w=b.record.name);else{if(b=f.name?a.get(f.name):o.find(I=>I.re.test(f.path)),!b)throw Ho(Ge.MATCHER_NOT_FOUND,{location:m,currentLocation:f});w=b.record.name,T=Ve({},f.params,m.params),N=b.stringify(T)}const F=[];let x=b;for(;x;)F.unshift(x.record),x=x.parent;return{name:w,path:N,params:T,matched:F,meta:Of(F)}}e.forEach(m=>i(m));function d(){o.length=0,a.clear()}return{addRoute:i,resolve:u,removeRoute:s,clearRoutes:d,getRoutes:l,getRecordMatcher:r}}function ks(e,n){const o={};for(const a of n)a in e&&(o[a]=e[a]);return o}function Is(e){const n={path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:e.aliasOf,beforeEnter:e.beforeEnter,props:Pf(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}};return Object.defineProperty(n,"mods",{value:{}}),n}function Pf(e){const n={},o=e.props||!1;if("component"in e)n.default=o;else for(const a in e.components)n[a]=typeof o=="object"?o[a]:o;return n}function Ps(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function Of(e){return e.reduce((n,o)=>Ve(n,o.meta),{})}function jf(e,n){let o=0,a=n.length;for(;o!==a;){const i=o+a>>1;Lc(e,n[i])<0?a=i:o=i+1}const r=Vf(e);return r&&(a=n.lastIndexOf(r,a-1)),a}function Vf(e){let n=e;for(;n=n.parent;)if(qc(n)&&Lc(e,n)===0)return n}function qc({record:e}){return!!(e.name||e.components&&Object.keys(e.components).length||e.redirect)}function Os(e){const n=Me(Ar),o=Me(ei),a=Le(()=>{const c=ee(e.to);return n.resolve(c)}),r=Le(()=>{const{matched:c}=a.value,{length:u}=c,d=c[u-1],m=o.matched;if(!d||!m.length)return-1;const f=m.findIndex(zo.bind(null,d));if(f>-1)return f;const b=js(c[u-2]);return u>1&&js(d)===b&&m[m.length-1].path!==b?m.findIndex(zo.bind(null,c[u-2])):f}),i=Le(()=>r.value>-1&&$f(o.params,a.value.params)),s=Le(()=>r.value>-1&&r.value===o.matched.length-1&&Oc(o.params,a.value.params));function l(c={}){if(qf(c)){const u=n[ee(e.replace)?"replace":"push"](ee(e.to)).catch(fa);return e.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>u),u}return Promise.resolve()}return{route:a,href:Le(()=>a.value.href),isActive:i,isExactActive:s,navigate:l}}function Df(e){return e.length===1?e[0]:e}const Lf=Il({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:Os,setup(e,{slots:n}){const o=Ea(Os(e)),{options:a}=Me(Ar),r=Le(()=>({[Vs(e.activeClass,a.linkActiveClass,"router-link-active")]:o.isActive,[Vs(e.exactActiveClass,a.linkExactActiveClass,"router-link-exact-active")]:o.isExactActive}));return()=>{const i=n.default&&Df(n.default(o));return e.custom?i:Mo("a",{"aria-current":o.isExactActive?e.ariaCurrentValue:null,href:o.href,onClick:o.navigate,class:r.value},i)}}}),Ce=Lf;function qf(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const n=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(n))return}return e.preventDefault&&e.preventDefault(),!0}}function $f(e,n){for(const o in n){const a=n[o],r=e[o];if(typeof a=="string"){if(a!==r)return!1}else if(!On(r)||r.length!==a.length||a.some((i,s)=>i.valueOf()!==r[s].valueOf()))return!1}return!0}function js(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const Vs=(e,n,o)=>e??n??o,Mf=Il({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:n,slots:o}){const a=Me(It),r=Le(()=>e.route||a.value),i=Me(Ss,0),s=Le(()=>{let u=ee(i);const{matched:d}=r.value;let m;for(;(m=d[u])&&!m.components;)u++;return u}),l=Le(()=>r.value.matched[s.value]);ca(Ss,Le(()=>s.value+1)),ca(gf,l),ca(It,r);const c=Be();return Ro(()=>[c.value,l.value,e.name],([u,d,m],[f,b,T])=>{d&&(d.instances[m]=u,b&&b!==d&&u&&u===f&&(d.leaveGuards.size||(d.leaveGuards=b.leaveGuards),d.updateGuards.size||(d.updateGuards=b.updateGuards))),u&&d&&(!b||!zo(d,b)||!f)&&(d.enterCallbacks[m]||[]).forEach(N=>N(u))},{flush:"post"}),()=>{const u=r.value,d=e.name,m=l.value,f=m&&m.components[d];if(!f)return Ds(o.default,{Component:f,route:u});const b=m.props[d],T=b?b===!0?u.params:typeof b=="function"?b(u):b:null,w=Mo(f,Ve({},T,n,{onVnodeUnmounted:F=>{F.component.isUnmounted&&(m.instances[d]=null)},ref:c}));return Ds(o.default,{Component:w,route:u})||w}}});function Ds(e,n){if(!e)return null;const o=e(n);return o.length===1?o[0]:o}const $c=Mf;function Ff(e){const n=If(e.routes,e),o=e.parseQuery||hf,a=e.stringifyQuery||Rs,r=e.history,i=oa(),s=oa(),l=oa(),c=Nu(io);let u=io;Io&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const d=tt.bind(null,O=>""+O),m=tt.bind(null,Qp),f=tt.bind(null,Ta);function b(O,le){let X,he;return jc(O)?(X=n.getRecordMatcher(O),he=le):he=O,n.addRoute(he,X)}function T(O){const le=n.getRecordMatcher(O);le&&n.removeRoute(le)}function N(){return n.getRoutes().map(O=>O.record)}function w(O){return!!n.getRecordMatcher(O)}function F(O,le){if(le=Ve({},le||c.value),typeof O=="string"){const y=it(o,O,le.path),j=n.resolve({path:y.path},le),z=r.createHref(y.fullPath);return Ve(y,j,{params:f(j.params),hash:Ta(y.hash),redirectedFrom:void 0,href:z})}let X;if(O.path!=null)X=Ve({},O,{path:it(o,O.path,le.path).path});else{const y=Ve({},O.params);for(const j in y)y[j]==null&&delete y[j];X=Ve({},O,{params:m(y)}),le.params=m(le.params)}const he=n.resolve(X,le),Re=O.hash||"";he.params=d(f(he.params));const h=ef(a,Ve({},O,{hash:Wp(Re),path:he.path})),g=r.createHref(h);return Ve({fullPath:h,hash:Re,query:a===Rs?vf(O.query):O.query||{}},he,{redirectedFrom:void 0,href:g})}function x(O){return typeof O=="string"?it(o,O,c.value.path):Ve({},O)}function I(O,le){if(u!==O)return Ho(Ge.NAVIGATION_CANCELLED,{from:le,to:O})}function q(O){return C(O)}function pe(O){return q(Ve(x(O),{replace:!0}))}function ie(O,le){const X=O.matched[O.matched.length-1];if(X&&X.redirect){const{redirect:he}=X;let Re=typeof he=="function"?he(O,le):he;return typeof Re=="string"&&(Re=Re.includes("?")||Re.includes("#")?Re=x(Re):{path:Re},Re.params={}),Ve({query:O.query,hash:O.hash,params:Re.path!=null?{}:O.params},Re)}}function C(O,le){const X=u=F(O),he=c.value,Re=O.state,h=O.force,g=O.replace===!0,y=ie(X,he);if(y)return C(Ve(x(y),{state:typeof y=="object"?Ve({},Re,y.state):Re,force:h,replace:g}),le||X);const j=X;j.redirectedFrom=le;let z;return!h&&nf(a,he,X)&&(z=Ho(Ge.NAVIGATION_DUPLICATED,{to:j,from:he}),vn(he,he,!0,!1)),(z?Promise.resolve(z):ue(j,he)).catch(k=>Kn(k)?Kn(k,Ge.NAVIGATION_GUARD_REDIRECT)?k:Ke(k):ve(k,j,he)).then(k=>{if(k){if(Kn(k,Ge.NAVIGATION_GUARD_REDIRECT))return C(Ve({replace:g},x(k.to),{state:typeof k.to=="object"?Ve({},Re,k.to.state):Re,force:h}),le||j)}else k=B(j,he,!0,g,Re);return ne(j,he,k),k})}function L(O,le){const X=I(O,le);return X?Promise.reject(X):Promise.resolve()}function Z(O){const le=Sn.values().next().value;return le&&typeof le.runWithContext=="function"?le.runWithContext(O):O()}function ue(O,le){let X;const[he,Re,h]=bf(O,le);X=lt(he.reverse(),"beforeRouteLeave",O,le);for(const y of he)y.leaveGuards.forEach(j=>{X.push(co(j,O,le))});const g=L.bind(null,O,le);return X.push(g),Ye(X).then(()=>{X=[];for(const y of i.list())X.push(co(y,O,le));return X.push(g),Ye(X)}).then(()=>{X=lt(Re,"beforeRouteUpdate",O,le);for(const y of Re)y.updateGuards.forEach(j=>{X.push(co(j,O,le))});return X.push(g),Ye(X)}).then(()=>{X=[];for(const y of h)if(y.beforeEnter)if(On(y.beforeEnter))for(const j of y.beforeEnter)X.push(co(j,O,le));else X.push(co(y.beforeEnter,O,le));return X.push(g),Ye(X)}).then(()=>(O.matched.forEach(y=>y.enterCallbacks={}),X=lt(h,"beforeRouteEnter",O,le,Z),X.push(g),Ye(X))).then(()=>{X=[];for(const y of s.list())X.push(co(y,O,le));return X.push(g),Ye(X)}).catch(y=>Kn(y,Ge.NAVIGATION_CANCELLED)?y:Promise.reject(y))}function ne(O,le,X){l.list().forEach(he=>Z(()=>he(O,le,X)))}function B(O,le,X,he,Re){const h=I(O,le);if(h)return h;const g=le===io,y=Io?history.state:{};X&&(he||g?r.replace(O.fullPath,Ve({scroll:g&&y&&y.scroll},Re)):r.push(O.fullPath,Re)),c.value=O,vn(O,le,X,g),Ke()}let $;function Q(){$||($=r.listen((O,le,X)=>{if(!We.listening)return;const he=F(O),Re=ie(he,We.currentRoute.value);if(Re){C(Ve(Re,{replace:!0,force:!0}),he).catch(fa);return}u=he;const h=c.value;Io&&uf(Ts(h.fullPath,X.delta),yr()),ue(he,h).catch(g=>Kn(g,Ge.NAVIGATION_ABORTED|Ge.NAVIGATION_CANCELLED)?g:Kn(g,Ge.NAVIGATION_GUARD_REDIRECT)?(C(Ve(x(g.to),{force:!0}),he).then(y=>{Kn(y,Ge.NAVIGATION_ABORTED|Ge.NAVIGATION_DUPLICATED)&&!X.delta&&X.type===Ct.pop&&r.go(-1,!1)}).catch(fa),Promise.reject()):(X.delta&&r.go(-X.delta,!1),ve(g,he,h))).then(g=>{g=g||B(he,h,!1),g&&(X.delta&&!Kn(g,Ge.NAVIGATION_CANCELLED)?r.go(-X.delta,!1):X.type===Ct.pop&&Kn(g,Ge.NAVIGATION_ABORTED|Ge.NAVIGATION_DUPLICATED)&&r.go(-1,!1)),ne(he,h,g)}).catch(fa)}))}let me=oa(),G=oa(),Te;function ve(O,le,X){Ke(O);const he=G.list();return he.length?he.forEach(Re=>Re(O,le,X)):console.error(O),Promise.reject(O)}function Ue(){return Te&&c.value!==io?Promise.resolve():new Promise((O,le)=>{me.add([O,le])})}function Ke(O){return Te||(Te=!O,Q(),me.list().forEach(([le,X])=>O?X(O):le()),me.reset()),O}function vn(O,le,X,he){const{scrollBehavior:Re}=e;if(!Io||!Re)return Promise.resolve();const h=!X&&df(Ts(O.fullPath,0))||(he||!X)&&history.state&&history.state.scroll||null;return $o().then(()=>Re(O,le,h)).then(g=>g&&cf(g)).catch(g=>ve(g,O,le))}const Je=O=>r.go(O);let bn;const Sn=new Set,We={currentRoute:c,listening:!0,addRoute:b,removeRoute:T,clearRoutes:n.clearRoutes,hasRoute:w,getRoutes:N,resolve:F,options:e,push:q,replace:pe,go:Je,back:()=>Je(-1),forward:()=>Je(1),beforeEach:i.add,beforeResolve:s.add,afterEach:l.add,onError:G.add,isReady:Ue,install(O){O.component("RouterLink",Ce),O.component("RouterView",$c),O.config.globalProperties.$router=We,Object.defineProperty(O.config.globalProperties,"$route",{enumerable:!0,get:()=>ee(c)}),Io&&!bn&&c.value===io&&(bn=!0,q(r.location).catch(he=>{}));const le={};for(const he in io)Object.defineProperty(le,he,{get:()=>c.value[he],enumerable:!0});O.provide(Ar,We),O.provide(ei,hl(le)),O.provide(It,c);const X=O.unmount;Sn.add(O),O.unmount=function(){Sn.delete(O),Sn.size<1&&(u=io,$&&$(),$=null,c.value=io,bn=!1,Te=!1),X()}}};function Ye(O){return O.reduce((le,X)=>le.then(()=>Z(X)),Promise.resolve())}return We}function Nr(){return Me(Ar)}function ni(e){return Me(ei)}const zf="/Extensao-26.2/icon-512.png";const _o={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};const Ls=(...e)=>e.filter((n,o,a)=>!!n&&n.trim()!==""&&a.indexOf(n)===o).join(" ").trim();function ct(e){return e!=null}function Hf(e,n={}){const o=n.attributeNames??{},a=f=>o[f]??f,r=e.size??e.width??_o.width,i=e.size??e.height??_o.height,s=e.aliases?.filter(f=>typeof f=="string"&&f.trim()!=="").map(f=>`lucide-${f}`)??[],l=[...e.name?[`lucide-${e.name}`]:[],...s],c=n.className?.split(" ").filter(Boolean)??[],u=n.includeDefaultClasses===!1?Ls(...c):Ls("lucide",...l,...c),d=n.absoluteStrokeWidth?Number(n.strokeWidth??_o["stroke-width"])*Number(e.size??e.width??_o.width)/Number(n.size??n.width??_o.width):n.strokeWidth??_o["stroke-width"];return["svg",{...Object.entries(_o).reduce((f,[b,T])=>(f[a(b)]=T,f),{}),..."color"in n&&n.color&&{[a("stroke")]:n.color},..."size"in n&&ct(n.size)&&{[a("width")]:n.size,[a("height")]:n.size},..."width"in n&&ct(n.width)&&{[a("width")]:n.width},..."height"in n&&ct(n.height)&&{[a("height")]:n.height},[a("stroke-width")]:d,...u&&{[a("class")]:u},[a("viewBox")]:`0 0 ${r} ${i}`,...n.hasA11yProp===!1?{[a("aria-hidden")]:"true"}:{},..."attributes"in n&&n.attributes},e.node.map(f=>{const[b,T,N]=f,w=n.nonScalingStroke?{[a("vector-effect")]:"non-scaling-stroke",...T}:T;return N?[b,w,N]:[b,w]})]}const Uf=e=>{for(const n in e)if(n.startsWith("aria-")||n==="role"||n==="title")return!0;return!1};const Ma=e=>e==="";const Kf=e=>e?.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();const Gf=Symbol("lucide-icons");function Wf(){return Me(Gf,{})}const Yf=({name:e,iconNode:n,"icon-node":o,icon:a={name:Kf(e),node:n??o,size:24,aliases:[]},absoluteStrokeWidth:r,"absolute-stroke-width":i,nonScalingStroke:s,"non-scaling-stroke":l,strokeWidth:c,"stroke-width":u,size:d,width:m=d,height:f=d,color:b,...T},{slots:N})=>{const{size:w,color:F,strokeWidth:x=2,absoluteStrokeWidth:I=!1,nonScalingStroke:q=!1,class:pe=""}=Wf(),ie=Ma(r)||Ma(i)||r===!0||i===!0||I===!0,C=Ma(s)||Ma(l)||s===!0||l===!0||q===!0;delete T.class;const L=N.default?.(),[,Z,ue=[]]=Hf(a,{color:b??F,width:m??d??w,height:f??d??w,strokeWidth:c??u??x,absoluteStrokeWidth:ie,nonScalingStroke:C,className:pe,hasA11yProp:L!=null&&L.length>0||Uf(T),attributes:T});return Mo("svg",Z,[...ue.map(ne=>Mo(...ne)),...L??[]])};function An(e,n=[]){const o=typeof e=="string"?{name:e,node:n}:e;return(a,{slots:r})=>Mo(Yf,{...a,icon:o},r.default?{default:r.default}:void 0)}const Jf={name:"arrow-right",size:24,node:[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]},Qf=An(Jf);const Xf={name:"box",size:24,node:[["path",{d:"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",key:"hh9hay"}],["path",{d:"m3.3 7 8.7 5 8.7-5",key:"g66t2b"}],["path",{d:"M12 22V12",key:"d0xqtd"}]]},Zf=An(Xf);const eh={name:"chevron-right",size:24,node:[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]},Ra=An(eh);const nh={name:"chevron-left",size:24,node:[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]},fo=An(nh);const oh={name:"circle-question-mark",size:24,node:[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",key:"1u773s"}],["path",{d:"M12 17h.01",key:"p32p05"}]],aliases:["help-circle","circle-help"]},oi=An(oh);const ah={name:"clipboard-check",size:24,node:[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1",key:"tgr4d6"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",key:"116196"}],["path",{d:"m9 14 2 2 4-4",key:"df797q"}]]},mo=An(ah);const rh={name:"folder-kanban",size:24,node:[["path",{d:"M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z",key:"1fr9dc"}],["path",{d:"M8 10v4",key:"tgpxqk"}],["path",{d:"M12 10v2",key:"hh53o1"}],["path",{d:"M16 10v6",key:"1d6xys"}]]},Mc=An(rh);const th={name:"folder-plus",size:24,node:[["path",{d:"M12 10v6",key:"1bos4e"}],["path",{d:"M9 13h6",key:"1uhe8q"}],["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",key:"1kt360"}]]},rr=An(th);const ih={name:"folder",size:24,node:[["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",key:"1kt360"}]]},qs=An(ih);const sh={name:"house",size:24,node:[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"r6nss1"}]],aliases:["home"]},lh=An(sh);const ch={name:"pencil",size:24,node:[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}],["path",{d:"m15 5 4 4",key:"1mk7zo"}]]},uh=An(ch);const dh={name:"plus",size:24,node:[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]},$s=An(dh);const mh={name:"trash",size:24,node:[["path",{d:"M10 11v6",key:"nco0om"}],["path",{d:"M14 11v6",key:"outv1u"}],["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",key:"miytrc"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",key:"e791ji"}]],aliases:["trash-2"]},Uo=An(mh),ph={class:"app-shell"},fh={class:"sidebar"},hh={class:"content",tabindex:"-1"},vh={key:0,class:"bottom-nav"},gh={__name:"AppLayout",setup(e){const n=ni(),o=Le(()=>n.path.startsWith("/rules")?"rules":n.path.startsWith("/quick-evaluation")?"quick":"projects");return(a,r)=>(E(),W("div",ph,[v("aside",fh,[M(ee(Ce),{class:"brand",to:"/projects"},{default:fe(()=>[...r[0]||(r[0]=[v("img",{class:"brand__mark",src:zf,alt:"Acesso Verificador"},null,-1),v("span",null,[Ee("Acesso"),v("br"),v("small",null,"Verificador")],-1)])]),_:1}),v("nav",null,[M(ee(Ce),{class:dn(["nav-item",{"is-active":o.value==="projects"}]),to:"/projects"},{default:fe(()=>[M(ee(qs),{size:20,"aria-hidden":"true"}),r[1]||(r[1]=v("span",null,"Projetos",-1))]),_:1},8,["class"]),M(ee(Ce),{class:dn(["nav-item",{"is-active":o.value==="quick"}]),to:"/quick-evaluation"},{default:fe(()=>[M(ee(mo),{size:20,"aria-hidden":"true"}),r[2]||(r[2]=v("span",null,"Avaliação rápida",-1))]),_:1},8,["class"]),M(ee(Ce),{class:dn(["nav-item",{"is-active":o.value==="rules"}]),to:"/rules"},{default:fe(()=>[M(ee(mo),{size:20,"aria-hidden":"true"}),r[3]||(r[3]=v("span",null,"Regras",-1))]),_:1},8,["class"])])]),v("main",hh,[gn(a.$slots,"default")]),ee(n).meta.hideBottomNav?ye("",!0):(E(),W("nav",vh,[M(ee(Ce),{class:dn(["nav-item",{"is-active":o.value==="projects"}]),to:"/projects"},{default:fe(()=>[M(ee(qs),{size:20,"aria-hidden":"true"}),r[4]||(r[4]=v("span",null,"Projetos",-1))]),_:1},8,["class"]),M(ee(Ce),{class:dn(["nav-item",{"is-active":o.value==="quick"}]),to:"/quick-evaluation"},{default:fe(()=>[M(ee(mo),{size:20,"aria-hidden":"true"}),r[5]||(r[5]=v("span",null,"Avaliação rápida",-1))]),_:1},8,["class"]),M(ee(Ce),{class:dn(["nav-item",{"is-active":o.value==="rules"}]),to:"/rules"},{default:fe(()=>[M(ee(mo),{size:20,"aria-hidden":"true"}),r[6]||(r[6]=v("span",null,"Regras",-1))]),_:1},8,["class"])]))]))}},bh={id:"confirm-popup",class:"confirm-popup",role:"alertdialog","aria-modal":"true","aria-labelledby":"confirm-popup-message"},_h={id:"confirm-popup-message",class:"confirm-popup__message"},yh={class:"confirm-popup__actions"},Ah={__name:"ConfirmPopup",setup(e,{expose:n}){const o=Be(null),a=Be(null),r=Be(!1),i=Be("");let s=null,l=null,c="";function u(N){if(N.key==="Escape"){N.preventDefault(),m();return}if(N.key!=="Tab")return;const w=o.value,F=a.value;!w||!F||(N.shiftKey&&document.activeElement===w?(N.preventDefault(),F.focus()):!N.shiftKey&&document.activeElement===F&&(N.preventDefault(),w.focus()))}function d(){document.removeEventListener("keydown",u),document.body.style.overflow=c}function m({restoreFocus:N=!0}={}){if(!r.value)return;r.value=!1,d(),s?.removeAttribute("aria-expanded"),s?.removeAttribute("aria-controls");const w=s;s=null,l=null,N&&$o(()=>w?.focus?.())}async function f(N){m({restoreFocus:!1}),s=N.target,i.value=N.message,l=N.onAccept,r.value=!0,s?.setAttribute("aria-expanded","true"),s?.setAttribute("aria-controls","confirm-popup"),c=document.body.style.overflow,document.body.style.overflow="hidden",document.addEventListener("keydown",u),await $o(),o.value?.focus()}function b(N,w,F){return f({target:N.currentTarget,message:w,onAccept:F})}async function T(){const N=l;m({restoreFocus:!1}),await N?.()}return n({open:f,confirm:b}),Kt(()=>{document.removeEventListener("keydown",u),document.body.style.overflow=c,s?.removeAttribute("aria-expanded"),s?.removeAttribute("aria-controls")}),(N,w)=>(E(),Pe(Rl,{to:"body"},[r.value?(E(),W("div",{key:0,class:"confirm-backdrop",onClick:w[1]||(w[1]=Xn(F=>m(),["self"]))},[v("section",bh,[v("p",_h,se(i.value),1),v("div",yh,[v("button",{ref_key:"cancelButton",ref:o,class:"confirm-popup__button confirm-popup__button--cancel",type:"button",onClick:w[0]||(w[0]=F=>m())}," Cancelar ",512),v("button",{ref_key:"acceptButton",ref:a,class:"confirm-popup__button confirm-popup__button--accept",type:"button",onClick:T}," Excluir ",512)])])])):ye("",!0)]))}},Nh={class:"welcome-popup",role:"dialog","aria-modal":"true","aria-labelledby":"welcome-title","aria-describedby":"welcome-description"},xh={class:"welcome-popup__content"},Bh={class:"welcome-popup__steps"},Fc={__name:"WelcomePopup",emits:["close"],setup(e,{emit:n}){const o=n,a=Be(null),r=Be(null);let i="";function s(l){if(l.key==="Escape"){o("close");return}l.key==="Tab"&&l.shiftKey&&document.activeElement===a.value?(l.preventDefault(),r.value?.focus()):l.key==="Tab"&&!l.shiftKey&&document.activeElement===r.value&&(l.preventDefault(),a.value?.focus())}return jn(()=>{document.addEventListener("keydown",s),i=document.body.style.overflow,document.body.style.overflow="hidden",a.value?.focus()}),Gt(()=>{document.removeEventListener("keydown",s),document.body.style.overflow=i}),(l,c)=>(E(),Pe(Rl,{to:"body"},[v("div",{class:"welcome-backdrop",onClick:c[2]||(c[2]=Xn(u=>o("close"),["self"]))},[v("section",Nh,[v("button",{ref_key:"closeButton",ref:a,class:"welcome-popup__close",type:"button","aria-label":"Fechar apresentação",onClick:c[0]||(c[0]=u=>o("close"))}," × ",512),c[8]||(c[8]=v("div",{class:"welcome-popup__hero"},[v("h1",{id:"welcome-title"},"Acessibilidade começa com atenção aos detalhes."),v("p",{id:"welcome-description"}," Este espaço ajuda você a organizar e apoiar avaliações de acessibilidade em locais e ambientes. ")],-1)),v("div",xh,[c[6]||(c[6]=v("h2",null,"Como funciona",-1)),v("div",Bh,[v("article",null,[M(ee(Mc),{size:22,"aria-hidden":"true"}),c[3]||(c[3]=v("div",null,[v("h3",null,"Organize seus locais"),v("p",null,"Crie projetos, separe os ambientes e cadastre os elementos que deseja avaliar.")],-1))]),v("article",null,[M(ee(mo),{size:22,"aria-hidden":"true"}),c[4]||(c[4]=v("div",null,[v("h3",null,"Faça as verificações"),v("p",null,"Preencha checklists e consulte resultados por elemento, ambiente ou projeto.")],-1))])]),c[7]||(c[7]=v("p",{class:"welcome-popup__note"}," Os resultados são um apoio à avaliação e não substituem a análise de um profissional nem a consulta às normas aplicáveis. ",-1)),v("button",{ref_key:"actionButton",ref:r,class:"button welcome-popup__action",type:"button",onClick:c[1]||(c[1]=u=>o("close"))},[c[5]||(c[5]=Ee(" Começar ",-1)),M(ee(Qf),{size:18,"aria-hidden":"true"})],512)])])])]))}};var Th=Object.defineProperty,Rh=Object.defineProperties,Sh=Object.getOwnPropertyDescriptors,Ms=Object.getOwnPropertySymbols,Eh=Object.prototype.hasOwnProperty,wh=Object.prototype.propertyIsEnumerable,Fs=(e,n,o)=>n in e?Th(e,n,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[n]=o,wo=(e,n)=>{for(var o in n||(n={}))Eh.call(n,o)&&Fs(e,o,n[o]);if(Ms)for(var o of Ms(n))wh.call(n,o)&&Fs(e,o,n[o]);return e},zs=(e,n)=>Rh(e,Sh(n));const Ch={props:{autoscroll:{type:Boolean,default:!0}},watch:{typeAheadPointer(){this.autoscroll&&this.maybeAdjustScroll()},open(e){this.autoscroll&&e&&this.$nextTick(()=>this.maybeAdjustScroll())}},methods:{maybeAdjustScroll(){var e;const n=((e=this.$refs.dropdownMenu)==null?void 0:e.children[this.typeAheadPointer])||!1;if(n){const o=this.getDropdownViewport(),{top:a,bottom:r,height:i}=n.getBoundingClientRect();if(a<o.top)return this.$refs.dropdownMenu.scrollTop=n.offsetTop;if(r>o.bottom)return this.$refs.dropdownMenu.scrollTop=n.offsetTop-(o.height-i)}},getDropdownViewport(){return this.$refs.dropdownMenu?this.$refs.dropdownMenu.getBoundingClientRect():{height:0,top:0,bottom:0}}}},kh={data(){return{typeAheadPointer:-1}},watch:{filteredOptions(){for(let e=0;e<this.filteredOptions.length;e++)if(this.selectable(this.filteredOptions[e])){this.typeAheadPointer=e;break}},open(e){e&&this.typeAheadToLastSelected()},selectedValue(){this.open&&this.typeAheadToLastSelected()}},methods:{typeAheadUp(){for(let e=this.typeAheadPointer-1;e>=0;e--)if(this.selectable(this.filteredOptions[e])){this.typeAheadPointer=e;break}},typeAheadDown(){for(let e=this.typeAheadPointer+1;e<this.filteredOptions.length;e++)if(this.selectable(this.filteredOptions[e])){this.typeAheadPointer=e;break}},typeAheadSelect(){const e=this.filteredOptions[this.typeAheadPointer];e&&this.selectable(e)&&this.select(e)},typeAheadToLastSelected(){this.typeAheadPointer=this.selectedValue.length!==0?this.filteredOptions.indexOf(this.selectedValue[this.selectedValue.length-1]):-1}}},Ih={props:{loading:{type:Boolean,default:!1}},data(){return{mutableLoading:!1}},watch:{search(){this.$emit("search",this.search,this.toggleLoading)},loading(e){this.mutableLoading=e}},methods:{toggleLoading(e=null){return e==null?this.mutableLoading=!this.mutableLoading:this.mutableLoading=e}}},ai=(e,n)=>{const o=e.__vccOpts||e;for(const[a,r]of n)o[a]=r;return o},Ph={},Oh={xmlns:"http://www.w3.org/2000/svg",width:"10",height:"10"},jh=v("path",{d:"M6.895455 5l2.842897-2.842898c.348864-.348863.348864-.914488 0-1.263636L9.106534.261648c-.348864-.348864-.914489-.348864-1.263636 0L5 3.104545 2.157102.261648c-.348863-.348864-.914488-.348864-1.263636 0L.261648.893466c-.348864.348864-.348864.914489 0 1.263636L3.104545 5 .261648 7.842898c-.348864.348863-.348864.914488 0 1.263636l.631818.631818c.348864.348864.914773.348864 1.263636 0L5 6.895455l2.842898 2.842897c.348863.348864.914772.348864 1.263636 0l.631818-.631818c.348864-.348864.348864-.914489 0-1.263636L6.895455 5z"},null,-1),Vh=[jh];function Dh(e,n){return E(),W("svg",Oh,Vh)}const Lh=ai(Ph,[["render",Dh]]),qh={},$h={xmlns:"http://www.w3.org/2000/svg",width:"14",height:"10"},Mh=v("path",{d:"M9.211364 7.59931l4.48338-4.867229c.407008-.441854.407008-1.158247 0-1.60046l-.73712-.80023c-.407008-.441854-1.066904-.441854-1.474243 0L7 5.198617 2.51662.33139c-.407008-.441853-1.066904-.441853-1.474243 0l-.737121.80023c-.407008.441854-.407008 1.158248 0 1.600461l4.48338 4.867228L7 10l2.211364-2.40069z"},null,-1),Fh=[Mh];function zh(e,n){return E(),W("svg",$h,Fh)}const Hh=ai(qh,[["render",zh]]),Hs={Deselect:Lh,OpenIndicator:Hh},Uh={mounted(e,{instance:n}){if(n.appendToBody){const{height:o,top:a,left:r,width:i}=n.$refs.toggle.getBoundingClientRect();let s=window.scrollX||window.pageXOffset,l=window.scrollY||window.pageYOffset;e.unbindPosition=n.calculatePosition(e,n,{width:i+"px",left:s+r+"px",top:l+a+o+"px"}),document.body.appendChild(e)}},unmounted(e,{instance:n}){n.appendToBody&&(e.unbindPosition&&typeof e.unbindPosition=="function"&&e.unbindPosition(),e.parentNode&&e.parentNode.removeChild(e))}};function Kh(e){const n={};return Object.keys(e).sort().forEach(o=>{n[o]=e[o]}),JSON.stringify(n)}let Gh=0;function Wh(){return++Gh}const Yh={components:wo({},Hs),directives:{appendToBody:Uh},mixins:[Ch,kh,Ih],compatConfig:{MODE:3},emits:["open","close","update:modelValue","search","search:compositionstart","search:compositionend","search:keydown","search:blur","search:focus","search:input","option:created","option:selecting","option:selected","option:deselecting","option:deselected"],props:{modelValue:{},components:{type:Object,default:()=>({})},options:{type:Array,default(){return[]}},disabled:{type:Boolean,default:!1},clearable:{type:Boolean,default:!0},deselectFromDropdown:{type:Boolean,default:!1},searchable:{type:Boolean,default:!0},multiple:{type:Boolean,default:!1},placeholder:{type:String,default:""},transition:{type:String,default:"vs__fade"},clearSearchOnSelect:{type:Boolean,default:!0},closeOnSelect:{type:Boolean,default:!0},label:{type:String,default:"label"},autocomplete:{type:String,default:"off"},reduce:{type:Function,default:e=>e},selectable:{type:Function,default:e=>!0},getOptionLabel:{type:Function,default(e){return typeof e=="object"?e.hasOwnProperty(this.label)?e[this.label]:console.warn(`[vue-select warn]: Label key "option.${this.label}" does not exist in options object ${JSON.stringify(e)}.
https://vue-select.org/api/props.html#getoptionlabel`):e}},getOptionKey:{type:Function,default(e){if(typeof e!="object")return e;try{return e.hasOwnProperty("id")?e.id:Kh(e)}catch(n){return console.warn(`[vue-select warn]: Could not stringify this option to generate unique key. Please provide'getOptionKey' prop to return a unique key for each option.
https://vue-select.org/api/props.html#getoptionkey`,e,n)}}},onTab:{type:Function,default:function(){this.selectOnTab&&!this.isComposing&&this.typeAheadSelect()}},taggable:{type:Boolean,default:!1},tabindex:{type:Number,default:null},pushTags:{type:Boolean,default:!1},filterable:{type:Boolean,default:!0},filterBy:{type:Function,default(e,n,o){return(n||"").toLocaleLowerCase().indexOf(o.toLocaleLowerCase())>-1}},filter:{type:Function,default(e,n){return e.filter(o=>{let a=this.getOptionLabel(o);return typeof a=="number"&&(a=a.toString()),this.filterBy(o,a,n)})}},createOption:{type:Function,default(e){return typeof this.optionList[0]=="object"?{[this.label]:e}:e}},resetOnOptionsChange:{default:!1,validator:e=>["function","boolean"].includes(typeof e)},clearSearchOnBlur:{type:Function,default:function({clearSearchOnSelect:e,multiple:n}){return e&&!n}},noDrop:{type:Boolean,default:!1},inputId:{type:String},dir:{type:String,default:"auto"},selectOnTab:{type:Boolean,default:!1},selectOnKeyCodes:{type:Array,default:()=>[13]},searchInputQuerySelector:{type:String,default:"[type=search]"},mapKeydown:{type:Function,default:(e,n)=>e},appendToBody:{type:Boolean,default:!1},calculatePosition:{type:Function,default(e,n,{width:o,top:a,left:r}){e.style.top=a,e.style.left=r,e.style.width=o}},dropdownShouldOpen:{type:Function,default({noDrop:e,open:n,mutableLoading:o}){return e?!1:n&&!o}},uid:{type:[String,Number],default:()=>Wh()}},data(){return{search:"",open:!1,isComposing:!1,pushedTags:[],_value:[],deselectButtons:[]}},computed:{isReducingValues(){return this.$props.reduce!==this.$options.props.reduce.default},isTrackingValues(){return typeof this.modelValue>"u"||this.isReducingValues},selectedValue(){let e=this.modelValue;return this.isTrackingValues&&(e=this.$data._value),e!=null&&e!==""?[].concat(e):[]},optionList(){return this.options.concat(this.pushTags?this.pushedTags:[])},searchEl(){return this.$slots.search?this.$refs.selectedOptions.querySelector(this.searchInputQuerySelector):this.$refs.search},scope(){const e={search:this.search,loading:this.loading,searching:this.searching,filteredOptions:this.filteredOptions};return{search:{attributes:wo({disabled:this.disabled,placeholder:this.searchPlaceholder,tabindex:this.tabindex,readonly:!this.searchable,id:this.inputId,"aria-autocomplete":"list","aria-labelledby":`vs${this.uid}__combobox`,"aria-controls":`vs${this.uid}__listbox`,ref:"search",type:"search",autocomplete:this.autocomplete,value:this.search},this.dropdownOpen&&this.filteredOptions[this.typeAheadPointer]?{"aria-activedescendant":`vs${this.uid}__option-${this.typeAheadPointer}`}:{}),events:{compositionstart:()=>this.isComposing=!0,compositionend:()=>this.isComposing=!1,keydown:this.onSearchKeyDown,blur:this.onSearchBlur,focus:this.onSearchFocus,input:n=>this.search=n.target.value}},spinner:{loading:this.mutableLoading},noOptions:{search:this.search,loading:this.mutableLoading,searching:this.searching},openIndicator:{attributes:{ref:"openIndicator",role:"presentation",class:"vs__open-indicator"}},listHeader:e,listFooter:e,header:zs(wo({},e),{deselect:this.deselect}),footer:zs(wo({},e),{deselect:this.deselect})}},childComponents(){return wo(wo({},Hs),this.components)},stateClasses(){return{"vs--open":this.dropdownOpen,"vs--single":!this.multiple,"vs--multiple":this.multiple,"vs--searching":this.searching&&!this.noDrop,"vs--searchable":this.searchable&&!this.noDrop,"vs--unsearchable":!this.searchable,"vs--loading":this.mutableLoading,"vs--disabled":this.disabled}},searching(){return!!this.search},dropdownOpen(){return this.dropdownShouldOpen(this)},searchPlaceholder(){return this.isValueEmpty&&this.placeholder?this.placeholder:void 0},filteredOptions(){const e=[].concat(this.optionList);if(!this.filterable&&!this.taggable)return e;const n=this.search.length?this.filter(e,this.search,this):e;if(this.taggable&&this.search.length){const o=this.createOption(this.search);this.optionExists(o)||n.unshift(o)}return n},isValueEmpty(){return this.selectedValue.length===0},showClearButton(){return!this.multiple&&this.clearable&&!this.open&&!this.isValueEmpty}},watch:{options(e,n){const o=()=>typeof this.resetOnOptionsChange=="function"?this.resetOnOptionsChange(e,n,this.selectedValue):this.resetOnOptionsChange;!this.taggable&&o()&&this.clearSelection(),this.modelValue&&this.isTrackingValues&&this.setInternalValueFromOptions(this.modelValue)},modelValue:{immediate:!0,handler(e){this.isTrackingValues&&this.setInternalValueFromOptions(e)}},multiple(){this.clearSelection()},open(e){this.$emit(e?"open":"close")}},created(){this.mutableLoading=this.loading},methods:{setInternalValueFromOptions(e){Array.isArray(e)?this.$data._value=e.map(n=>this.findOptionFromReducedValue(n)):this.$data._value=this.findOptionFromReducedValue(e)},select(e){this.$emit("option:selecting",e),this.isOptionSelected(e)?this.deselectFromDropdown&&(this.clearable||this.multiple&&this.selectedValue.length>1)&&this.deselect(e):(this.taggable&&!this.optionExists(e)&&(this.$emit("option:created",e),this.pushTag(e)),this.multiple&&(e=this.selectedValue.concat(e)),this.updateValue(e),this.$emit("option:selected",e)),this.onAfterSelect(e)},deselect(e){this.$emit("option:deselecting",e),this.updateValue(this.selectedValue.filter(n=>!this.optionComparator(n,e))),this.$emit("option:deselected",e)},clearSelection(){this.updateValue(this.multiple?[]:null)},onAfterSelect(e){this.closeOnSelect&&(this.open=!this.open,this.searchEl.blur()),this.clearSearchOnSelect&&(this.search="")},updateValue(e){typeof this.modelValue>"u"&&(this.$data._value=e),e!==null&&(Array.isArray(e)?e=e.map(n=>this.reduce(n)):e=this.reduce(e)),this.$emit("update:modelValue",e)},toggleDropdown(e){const n=e.target!==this.searchEl;n&&e.preventDefault();const o=[...this.deselectButtons||[],this.$refs.clearButton];if(this.searchEl===void 0||o.filter(Boolean).some(a=>a.contains(e.target)||a===e.target)){e.preventDefault();return}this.open&&n?this.searchEl.blur():this.disabled||(this.open=!0,this.searchEl.focus())},isOptionSelected(e){return this.selectedValue.some(n=>this.optionComparator(n,e))},isOptionDeselectable(e){return this.isOptionSelected(e)&&this.deselectFromDropdown},optionComparator(e,n){return this.getOptionKey(e)===this.getOptionKey(n)},findOptionFromReducedValue(e){const n=a=>JSON.stringify(this.reduce(a))===JSON.stringify(e),o=[...this.options,...this.pushedTags].filter(n);return o.length===1?o[0]:o.find(a=>this.optionComparator(a,this.$data._value))||e},closeSearchOptions(){this.open=!1,this.$emit("search:blur")},maybeDeleteValue(){if(!this.searchEl.value.length&&this.selectedValue&&this.selectedValue.length&&this.clearable){let e=null;this.multiple&&(e=[...this.selectedValue.slice(0,this.selectedValue.length-1)]),this.updateValue(e)}},optionExists(e){return this.optionList.some(n=>this.optionComparator(n,e))},normalizeOptionForSlot(e){return typeof e=="object"?e:{[this.label]:e}},pushTag(e){this.pushedTags.push(e)},onEscape(){this.search.length?this.search="":this.searchEl.blur()},onSearchBlur(){if(this.mousedown&&!this.searching)this.mousedown=!1;else{const{clearSearchOnSelect:e,multiple:n}=this;this.clearSearchOnBlur({clearSearchOnSelect:e,multiple:n})&&(this.search=""),this.closeSearchOptions();return}if(this.search.length===0&&this.options.length===0){this.closeSearchOptions();return}},onSearchFocus(){this.open=!0,this.$emit("search:focus")},onMousedown(){this.mousedown=!0},onMouseUp(){this.mousedown=!1},onSearchKeyDown(e){const n=r=>(r.preventDefault(),!this.isComposing&&this.typeAheadSelect()),o={8:r=>this.maybeDeleteValue(),9:r=>this.onTab(),27:r=>this.onEscape(),38:r=>(r.preventDefault(),this.typeAheadUp()),40:r=>(r.preventDefault(),this.typeAheadDown())};this.selectOnKeyCodes.forEach(r=>o[r]=n);const a=this.mapKeydown(o,this);if(typeof a[e.keyCode]=="function")return a[e.keyCode](e)}}},Jh=["dir"],Qh=["id","aria-expanded","aria-owns"],Xh={ref:"selectedOptions",class:"vs__selected-options"},Zh=["disabled","title","aria-label","onClick"],ev={ref:"actions",class:"vs__actions"},nv=["disabled"],ov={class:"vs__spinner"},av=["id"],rv=["id","aria-selected","onMouseover","onClick"],tv={key:0,class:"vs__no-options"},iv=Ee(" Sorry, no matching options. "),sv=["id"];function lv(e,n,o,a,r,i){const s=Xu("append-to-body");return E(),W("div",{dir:o.dir,class:dn(["v-select",i.stateClasses])},[gn(e.$slots,"header",En(wn(i.scope.header))),v("div",{id:`vs${o.uid}__combobox`,ref:"toggle",class:"vs__dropdown-toggle",role:"combobox","aria-expanded":i.dropdownOpen.toString(),"aria-owns":`vs${o.uid}__listbox`,"aria-label":"Search for option",onMousedown:n[1]||(n[1]=l=>i.toggleDropdown(l))},[v("div",Xh,[(E(!0),W(we,null,fn(i.selectedValue,(l,c)=>gn(e.$slots,"selected-option-container",{option:i.normalizeOptionForSlot(l),deselect:i.deselect,multiple:o.multiple,disabled:o.disabled},()=>[(E(),W("span",{key:o.getOptionKey(l),class:"vs__selected"},[gn(e.$slots,"selected-option",En(wn(i.normalizeOptionForSlot(l))),()=>[Ee(se(o.getOptionLabel(l)),1)]),o.multiple?(E(),W("button",{key:0,ref_for:!0,ref:u=>r.deselectButtons[c]=u,disabled:o.disabled,type:"button",class:"vs__deselect",title:`Deselect ${o.getOptionLabel(l)}`,"aria-label":`Deselect ${o.getOptionLabel(l)}`,onClick:u=>i.deselect(l)},[(E(),Pe(Er(i.childComponents.Deselect)))],8,Zh)):ye("",!0)]))])),256)),gn(e.$slots,"search",En(wn(i.scope.search)),()=>[v("input",Bt({class:"vs__search"},i.scope.search.attributes,Zu(i.scope.search.events)),null,16)])],512),v("div",ev,[Cn(v("button",{ref:"clearButton",disabled:o.disabled,type:"button",class:"vs__clear",title:"Clear Selected","aria-label":"Clear Selected",onClick:n[0]||(n[0]=(...l)=>i.clearSelection&&i.clearSelection(...l))},[(E(),Pe(Er(i.childComponents.Deselect)))],8,nv),[[Oi,i.showClearButton]]),gn(e.$slots,"open-indicator",En(wn(i.scope.openIndicator)),()=>[o.noDrop?ye("",!0):(E(),Pe(Er(i.childComponents.OpenIndicator),En(Bt({key:0},i.scope.openIndicator.attributes)),null,16))]),gn(e.$slots,"spinner",En(wn(i.scope.spinner)),()=>[Cn(v("div",ov,"Loading...",512),[[Oi,e.mutableLoading]])])],512)],40,Qh),M(zd,{name:o.transition},{default:fe(()=>[i.dropdownOpen?Cn((E(),W("ul",{id:`vs${o.uid}__listbox`,ref:"dropdownMenu",key:`vs${o.uid}__listbox`,class:"vs__dropdown-menu",role:"listbox",tabindex:"-1",onMousedown:n[2]||(n[2]=Xn((...l)=>i.onMousedown&&i.onMousedown(...l),["prevent"])),onMouseup:n[3]||(n[3]=(...l)=>i.onMouseUp&&i.onMouseUp(...l))},[gn(e.$slots,"list-header",En(wn(i.scope.listHeader))),(E(!0),W(we,null,fn(i.filteredOptions,(l,c)=>(E(),W("li",{id:`vs${o.uid}__option-${c}`,key:o.getOptionKey(l),role:"option",class:dn(["vs__dropdown-option",{"vs__dropdown-option--deselect":i.isOptionDeselectable(l)&&c===e.typeAheadPointer,"vs__dropdown-option--selected":i.isOptionSelected(l),"vs__dropdown-option--highlight":c===e.typeAheadPointer,"vs__dropdown-option--disabled":!o.selectable(l)}]),"aria-selected":c===e.typeAheadPointer?!0:null,onMouseover:u=>o.selectable(l)?e.typeAheadPointer=c:null,onClick:Xn(u=>o.selectable(l)?i.select(l):null,["prevent","stop"])},[gn(e.$slots,"option",En(wn(i.normalizeOptionForSlot(l))),()=>[Ee(se(o.getOptionLabel(l)),1)])],42,rv))),128)),i.filteredOptions.length===0?(E(),W("li",tv,[gn(e.$slots,"no-options",En(wn(i.scope.noOptions)),()=>[iv])])):ye("",!0),gn(e.$slots,"list-footer",En(wn(i.scope.listFooter)))],40,av)),[[s]]):(E(),W("ul",{key:1,id:`vs${o.uid}__listbox`,role:"listbox",style:{display:"none",visibility:"hidden"}},null,8,sv))]),_:3},8,["name"]),gn(e.$slots,"footer",En(wn(i.scope.footer)))],10,Jh)}const cv=ai(Yh,[["render",lv]]),uv={class:"page-header"},dv={class:"page-header__row"},mv={class:"page-header__heading"},pv={key:0},Zn={__name:"PageHeader",props:{title:{type:String,required:!0},description:String,helpButton:Boolean},emits:["help"],setup(e){return(n,o)=>(E(),W("header",uv,[v("div",dv,[v("div",null,[v("div",mv,[v("h1",null,se(e.title),1),e.helpButton?(E(),W("button",{key:0,class:"page-header__help",type:"button",title:"Ajuda","aria-label":"Ajuda",onClick:o[0]||(o[0]=a=>n.$emit("help"))},[M(ee(oi),{size:14,"aria-hidden":"true"})])):ye("",!0)]),e.description?(E(),W("p",pv,se(e.description),1)):ye("",!0)]),gn(n.$slots,"action")])]))}},fv={class:"empty-state"},hv={key:0,class:"empty-state__actions"},yn={__name:"EmptyState",props:{title:String,text:String},setup(e){return(n,o)=>(E(),W("section",fv,[o[0]||(o[0]=v("div",{class:"empty-state__icon","aria-hidden":"true"},"+",-1)),v("h2",null,se(e.title),1),v("p",null,se(e.text),1),n.$slots.default?(E(),W("div",hv,[gn(n.$slots,"default")])):ye("",!0)]))}};function Pt(e,n,o=""){const r=`${typeof n=="boolean"?n?"Sim":"Não":n}${o??""}`;switch(e){case">=":return`No mínimo ${r} (inclusive)`;case"<=":return`No máximo ${r} (inclusive)`;case">":return`Acima de ${r} (sem incluir o limite)`;case"<":return`Abaixo de ${r} (sem incluir o limite)`;case"==":case"eq":return`Igual a ${r}`;case"!=":return`Diferente de ${r}`;default:return r}}function vv(e){const n=String(e??"").replace(/[^\d.,]/g,""),o=n.search(/[.,]/);if(o===-1)return n;const a=n.slice(0,o),r=n[o],i=n.slice(o+1).replace(/[.,]/g,"");return`${a===""?"0":a}${r}${i}`}function Us(e){const n=String(e??"").trim().replace(",",".");if(!/^\d*\.?\d*$/.test(n)||n===""||n===".")return null;const o=Number(n);return Number.isFinite(o)?o:null}const gv={class:"back-link__label"},bv={class:"ruleset-grid"},_v={class:"field"},yv=["value"],Av={class:"field"},Nv={class:"ruleset-option"},xv={class:"ruleset-title"},Bv={key:0,class:"ruleset-norma"},Tv={key:0,class:"field"},Rv={class:"field-name-input"},Sv={id:"field-name-input__checkbox"},Ev={class:"fields-grid"},wv={key:1},Cv=["title","aria-label","aria-expanded","onClick"],kv={key:3,class:"parameter-definition"},Iv={key:4,class:"expected-value"},Pv=["onUpdate:modelValue"],Ov=["onUpdate:modelValue"],jv=["value"],Vv=["value","onInput"],Dv={class:"form-actions"},ut={__name:"ElementPage",props:{elementId:String,quick:Boolean},setup(e){const n=e,o=Me("services"),a=Me("builtInRuleSets"),r=ni(),i=Nr(),s=Be(null),l=Be(null),c=Be([]),u=Be([]),d=Be(null),m=Be("todas"),f=Be(localStorage.getItem("elementAutoName")==="true"),b=Be(null),T=Ea({name:"",ruleSet:"",data:{}}),N=Le(()=>!n.elementId),w=Le(()=>u.value.find(ne=>ne.id===T.ruleSet)),F=Le(()=>{const ne={};for(const B of w.value?.regras??[]){const $=B.tipo==="conditional"?(()=>{const Q=w.value?.parametros?.[B.parametro],me=T.data[B.parametro],G=Q?.tipo==="number"?Us(me):me;if(G==null||G==="")return[];const Te=(B.condicoes??[]).find(ve=>ve.quando&&ma(G,ve.quando.operador,ve.quando.valor));return Te?.verificar?[Te.verificar]:[]})():B.operador&&B.valor!==void 0?[{...B,parametro:B.parametro}]:[];for(const Q of $){if(!Q.parametro||Q.valor===void 0)continue;ne[Q.parametro]??=[];const me=Pt(Q.operador,Q.valor,w.value.parametros?.[Q.parametro]?.unidade);ne[Q.parametro].includes(me)||ne[Q.parametro].push(me)}}return ne}),x=Le(()=>{const ne=u.value.map(B=>B.norma?.nome).filter(Boolean);return["todas",...new Set(ne)]}),I=Le(()=>m.value==="todas"?u.value:u.value.filter(ne=>ne.norma?.nome===m.value));async function q(){n.quick&&o.quickEvaluationService.clear();const ne=await o.ruleSetService.list();u.value=[...a.map($=>$.ruleSet),...ne],N.value||(s.value=await o.projectService.getElement(n.elementId));const B=s.value?.environmentId??r.query.environmentId;if(!(!n.quick&&(!B||!N.value&&!s.value))){if(n.quick||(l.value=await o.projectService.getEnvironment(B),c.value=await o.projectService.listElements(B)),s.value){const $=await o.evaluationService.listEvaluations(s.value.id);d.value=$[0]}T.name=s.value?.name??"",T.ruleSet=r.query.ruleSet??s.value?.rule??u.value[0]?.id??"",Object.assign(T.data,d.value?.data??{})}}function pe(){const ne={},B=w.value?.parametros??{};for(const[$,Q]of Object.entries(B)){const me=T.data[$];if(!(me===""||me===void 0||me===null))if(Q.tipo==="number"){const G=Us(me);G!==null&&(ne[$]=G)}else Q.tipo==="boolean"?ne[$]=me===!0||me==="true":ne[$]=me}return ne}function ie(ne,B){const $=B.target,Q=$.value,me=vv(Q);if(T.data[ne]=me,Q===me)return;const G=$.selectionStart??Q.length,Te=Q.slice(0,G).replace(/\D/g,"").length;$.value=me;let ve=0,Ue=0;for(;ve<me.length&&Ue<Te;)/\d/.test(me[ve])&&Ue++,ve++;$.setSelectionRange(ve,ve)}async function C(){if(!w.value)return window.alert("Selecione um conjunto de regras.");const ne=pe(),B={name:T.name,type:w.value.nome,rule:w.value.id};try{const $=s.value?await o.projectService.updateElement(s.value.id,B):await o.projectService.createElement(l.value.id,B);await o.evaluationService.saveElementAnswers({elementId:$.id,checklist:w.value,data:ne}),i.push(`/projects/${l.value.projectId}/environments/${l.value.id}`)}catch($){window.alert($.message)}}function L(ne){if(!ne)return"";const B=new Set(c.value.filter(me=>me.id!==s.value?.id).map(me=>me.name));if(!B.has(ne))return ne;let $=1,Q=`${ne} (${$})`;for(;B.has(Q);)$++,Q=`${ne} (${$})`;return Q}Ro([f,()=>T.ruleSet],([ne,B])=>{if(localStorage.setItem("elementAutoName",String(ne)),ne){const Q=u.value.find(me=>me.id===B)?.nome??"";T.name=L(Q)}});async function Z(){if(!w.value)return window.alert("Selecione um conjunto de regras.");const ne=pe();if(n.quick){try{o.quickEvaluationService.evaluate({name:T.name,checklist:w.value,data:ne}),i.push("/quick-evaluation/result")}catch($){window.alert($.message)}return}const B={name:T.name,type:w.value.nome,rule:w.value.id};try{const $=s.value?await o.projectService.updateElement(s.value.id,B):await o.projectService.createElement(l.value.id,B);await o.evaluationService.evaluateElement({elementId:$.id,checklist:w.value,data:ne}),i.push(`/elements/${$.id}/evaluation`)}catch($){window.alert($.message)}}Ro(m,()=>{I.value.some(B=>B.id===T.ruleSet)||(T.ruleSet=I.value[0]?.id??"")}),Ro(()=>T.ruleSet,()=>{const ne=Object.keys(w.value?.parametros??{});Object.keys(T.data).forEach(B=>{ne.includes(B)||delete T.data[B]})});function ue(ne,B,$){const Q=($||"").toLowerCase().trim();if(!Q)return!0;const me=ne.nome?.toLowerCase().includes(Q),G=ne.norma?.nome?.toLowerCase().includes(Q),Te=ne.regras?.some(ve=>ve.nome?.toLowerCase().includes(Q)||ve.id?.toLowerCase().includes(Q));return!!(me||G||Te)}return jn(q),(ne,B)=>e.quick||l.value?(E(),W(we,{key:0},[e.quick?ye("",!0):(E(),Pe(ee(Ce),{key:0,class:"back-link",to:`/projects/${l.value.projectId}/environments/${l.value.id}`},{default:fe(()=>[M(ee(fo),{size:18,"aria-hidden":"true"}),v("span",gv,se(l.value.name),1)]),_:1},8,["to"])),M(Zn,{title:e.quick?"Avaliação rápida":N.value?"Novo elemento":s.value.name,description:"Escolha o tipo e informe as medidas observadas."},null,8,["title"]),v("form",{class:"form-card",onSubmit:B[5]||(B[5]=Xn(()=>{},["prevent"]))},[v("div",bv,[v("label",_v,[B[7]||(B[7]=v("span",null,"Norma de referência",-1)),Cn(v("select",{"onUpdate:modelValue":B[0]||(B[0]=$=>m.value=$)},[B[6]||(B[6]=v("option",{value:"todas"},"Todas as normas",-1)),(E(!0),W(we,null,fn(x.value.filter($=>$!=="todas"),$=>(E(),W("option",{key:$,value:$},se($),9,yv))),128))],512),[[jr,m.value]])]),v("label",Av,[B[8]||(B[8]=v("span",null,"Tipo de elemento *",-1)),M(ee(cv),{modelValue:T.ruleSet,"onUpdate:modelValue":B[1]||(B[1]=$=>T.ruleSet=$),options:I.value,label:"nome",reduce:$=>$.id,"filter-by":ue,placeholder:"Pesquise o elemento ou regra..."},{option:fe($=>[v("div",Nv,[v("span",xv,se($.nome),1),$.norma?.nome?(E(),W("small",Bv," ("+se($.norma.nome)+") ",1)):ye("",!0)])]),_:1},8,["modelValue","options","reduce"])])]),e.quick?ye("",!0):(E(),W("label",Tv,[v("div",Rv,[B[9]||(B[9]=v("span",null,"Nome do elemento *",-1)),v("div",Sv,[Cn(v("input",{type:"checkbox",id:"auto-name-chk","onUpdate:modelValue":B[2]||(B[2]=$=>f.value=$)},null,512),[[mm,f.value]]),v("p",{onClick:B[3]||(B[3]=Xn($=>f.value=!f.value,["stop"]))},"Auto Nomear")])]),Cn(v("input",{"onUpdate:modelValue":B[4]||(B[4]=$=>T.name=$),required:"",placeholder:"Ex.: Porta principal"},null,512),[[or,T.name]])])),B[13]||(B[13]=v("div",{class:"form-divider"},[v("strong",null,"Dados para avaliação"),v("span",null,"Campos definidos pelo conjunto de regras selecionado.")],-1)),v("div",Ev,[(E(!0),W(we,null,fn(w.value?.parametros,($,Q)=>(E(),W("label",{key:Q,class:"field"},[v("span",null,[Ee(se($.label??Q)+" ",1),$.obrigatorio?(E(),W(we,{key:0},[Ee(" *")],64)):ye("",!0),$.unidade?(E(),W("small",wv," ("+se($.unidade)+")",1)):ye("",!0),$.definicao?(E(),W("button",{key:2,class:"parameter-help",type:"button",title:$.definicao,"aria-label":`Definição: ${$.label??Q}`,"aria-expanded":b.value===Q,onClick:Xn(me=>b.value=b.value===Q?null:Q,["stop"])},[M(ee(oi),{size:16,"aria-hidden":"true"})],8,Cv)):ye("",!0),$.definicao&&b.value===Q?(E(),W("small",kv,se($.definicao),1)):ye("",!0),F.value[Q]?.length?(E(),W("small",Iv," Esperado: "+se(F.value[Q].join(" ou ")),1)):ye("",!0)]),$.tipo==="boolean"?Cn((E(),W("select",{key:0,"onUpdate:modelValue":me=>T.data[Q]=me},[...B[10]||(B[10]=[v("option",{value:""},"Não informado",-1),v("option",{value:!0},"Sim",-1),v("option",{value:!1},"Não",-1)])],8,Pv)),[[jr,T.data[Q]]]):$.tipo==="select"?Cn((E(),W("select",{key:1,"onUpdate:modelValue":me=>T.data[Q]=me},[B[11]||(B[11]=v("option",{value:""},"Selecione",-1)),(E(!0),W(we,null,fn($.opcoes??[],me=>(E(),W("option",{key:me,value:me},se(me),9,jv))),128))],8,Ov)),[[jr,T.data[Q]]]):(E(),W("input",{key:2,value:T.data[Q]??"",type:"text",inputmode:"decimal",autocomplete:"off",autocapitalize:"off",spellcheck:"false",onInput:me=>ie(Q,me)},null,40,Vv))]))),128))]),v("div",Dv,[M(ee(Ce),{class:"button button--ghost",to:e.quick?"/projects":`/projects/${l.value.projectId}/environments/${l.value.id}`},{default:fe(()=>[...B[12]||(B[12]=[Ee(" Cancelar ",-1)])]),_:1},8,["to"]),e.quick?ye("",!0):(E(),W("button",{key:0,class:"button button--outline",type:"button",onClick:C}," Salvar e voltar ")),v("button",{class:"button",type:"button",onClick:Z},se(e.quick?"Avaliar":"Salvar e avaliar"),1)])],32)],64)):(E(),Pe(yn,{key:1,title:"Elemento não encontrado",text:"Volte para o ambiente e tente novamente."},{default:fe(()=>[M(ee(Ce),{class:"button",to:"/projects"},{default:fe(()=>[...B[14]||(B[14]=[Ee("Projetos",-1)])]),_:1})]),_:1}))}},Ko={__name:"StatusBadge",props:{status:{type:String,default:"nao_avaliado"}},setup(e){const n={conforme:"Conforme",nao_conforme:"Não conforme",nao_avaliado:"Pendente",invalido:"Pendente",erro:"Pendente",atencao:"Atenção",manual:"Verificar"};return(o,a)=>(E(),W("span",{class:dn(["status",`status--${e.status}`])},se(n[e.status]??"Pendente"),3))}},Lv={class:"evaluation-summary","aria-labelledby":"evaluation-summary-title"},qv={class:"evaluation-summary__heading"},$v={id:"evaluation-summary-title"},Mv={class:"evaluation-summary__score"},Fv={class:"evaluation-summary__cards"},zv={class:"evaluation-summary__card evaluation-summary__card--conforme"},Hv={class:"evaluation-summary__card evaluation-summary__card--nao_conforme"},Uv={class:"evaluation-summary__card evaluation-summary__card--nao_avaliado"},ri={__name:"EvaluationSummary",props:{summary:{type:Object,required:!0},scope:{type:String,default:"elementos"}},setup(e){const n=e,o=Le(()=>n.summary.totalElements?n.summary.overallStatus==="conforme"?"Todos os elementos estão conformes":n.summary.overallStatus==="nao_conforme"?"Há elementos não conformes":"Há elementos pendentes de avaliação":"Nenhum elemento cadastrado");return(a,r)=>(E(),W("section",Lv,[v("div",qv,[v("div",null,[v("h2",$v,"Situação do "+se(e.scope),1),v("p",null,se(o.value),1)]),v("div",Mv,[v("strong",null,se(e.summary.score)+"%",1),r[0]||(r[0]=v("span",null,"conformes",-1))])]),v("div",Fv,[v("div",zv,[r[1]||(r[1]=v("span",null,"Conformes",-1)),v("strong",null,se(e.summary.conforme),1)]),v("div",Hv,[r[2]||(r[2]=v("span",null,"Não conformes",-1)),v("strong",null,se(e.summary.nao_conforme),1)]),v("div",Uv,[r[3]||(r[3]=v("span",null,"Pendentes",-1)),v("strong",null,se(e.summary.nao_avaliado),1)])]),e.summary.totalElements?(E(),Pe(Ko,{key:0,status:e.summary.overallStatus},null,8,["status"])):ye("",!0)]))}},Kv={class:"back-link__label"},Gv={class:"project-header__actions"},Wv={key:1,class:"card-list collection-list"},Yv={class:"card__icon"},Jv={class:"card__menu"},Qv=["onClick"],Xv={__name:"EnvironmentPage",props:{projectId:String,environmentId:String},setup(e){const n=e,o=Me("services"),a=Me("confirmPopup"),r=Nr(),i=Be(null),s=Be(null),l=Be([]),c=Be(null);function u(N){return N.status==="nao_avaliado"?`/elements/${N.element.id}`:`/elements/${N.element.id}/evaluation`}function d(N,w){a.confirm(w,`Excluir o elemento ${N.name} e suas avaliações?`,()=>m(N))}async function m(N){await o.projectService.deleteElement(N.id),await T()}function f(N){a.confirm(N,`Excluir o ambiente “${i.value.name}” e seus elementos?`,b)}async function b(){await o.projectService.deleteEnvironment(i.value.id),r.push(`/projects/${i.value.projectId}`)}async function T(){if(i.value=await o.projectService.getEnvironment(n.environmentId),!i.value)return;s.value=await o.projectService.getProject(i.value.projectId);const N=await o.projectService.listElements(i.value.id),[w,F]=await Promise.all([Promise.all(N.map(async x=>{const I=await o.evaluationService.listEvaluations(x.id);return{element:x,status:St(I)}})),o.evaluationService.getEnvironmentSummary(i.value.id)]);l.value=w,c.value=F}return jn(T),(N,w)=>i.value?(E(),W(we,{key:0},[M(ee(Ce),{class:"back-link",to:`/projects/${i.value.projectId}`},{default:fe(()=>[M(ee(fo),{size:18,"aria-hidden":"true"}),v("span",Kv,se(s.value?.name??"Projeto"),1)]),_:1},8,["to"]),M(Zn,{title:i.value.name},{action:fe(()=>[v("div",Gv,[l.value.length?(E(),Pe(ee(Ce),{key:0,class:"button",to:{path:"/elements/new",query:{environmentId:i.value.id}}},{default:fe(()=>[M(ee($s),{size:18,"aria-hidden":"true"}),w[0]||(w[0]=Ee("Adicionar elemento ",-1))]),_:1},8,["to"])):ye("",!0),v("button",{class:"icon-button icon-button--danger",title:"Excluir","aria-label":"Excluir ambiente",onClick:f},[M(ee(Uo),{size:18,"aria-hidden":"true"})])])]),_:1},8,["title"]),c.value&&l.value.length?(E(),Pe(ri,{key:0,summary:c.value,scope:"ambiente"},null,8,["summary"])):ye("",!0),l.value.length?(E(),W("div",Wv,[(E(!0),W(we,null,fn(l.value,F=>(E(),W("article",{key:F.element.id,class:"card card--interactive"},[M(ee(Ce),{class:"card__link",to:u(F)},{default:fe(()=>[v("span",Yv,[M(ee(Zf),{size:22,"aria-hidden":"true"})]),v("div",null,[v("h2",null,se(F.element.name),1),v("p",null,se(F.element.type),1)]),M(Ko,{status:F.status},null,8,["status"]),M(ee(Ra),{size:20,class:"chevron","aria-hidden":"true"})]),_:2},1032,["to"]),v("div",Jv,[v("button",{class:"icon-button icon-button--danger",title:"Excluir","aria-label":"Excluir",onClick:x=>d(F.element,x)},[M(ee(Uo),{size:18,"aria-hidden":"true"})],8,Qv)])]))),128))])):ye("",!0),l.value.length?ye("",!0):(E(),Pe(yn,{key:2,class:"collection-empty",title:"Nenhum elemento ainda",text:"Cadastre portas, rampas, sanitários e outros itens para avaliar."},{default:fe(()=>[M(ee(Ce),{class:"button",to:{path:"/elements/new",query:{environmentId:i.value.id}}},{default:fe(()=>[M(ee($s),{size:18,"aria-hidden":"true"}),w[1]||(w[1]=Ee("Adicionar elemento ",-1))]),_:1},8,["to"])]),_:1}))],64)):(E(),Pe(yn,{key:1,title:"Ambiente não encontrado",text:"Ele pode ter sido removido."},{default:fe(()=>[M(ee(Ce),{class:"button",to:"/projects"},{default:fe(()=>[...w[2]||(w[2]=[Ee("Projetos",-1)])]),_:1})]),_:1}))}},Zv={class:"back-link__label"},e0={key:0,class:"project-header__actions"},n0={class:"result-summary__counts","aria-label":"Resumo das regras"},o0={key:0,class:"result-summary__pending"},a0={class:"results"},r0={class:"result-row__content"},t0={key:0},i0={key:0,class:"result-values"},s0={key:0,class:"result-values__context"},l0={key:1,class:"result-values__item"},c0={key:2,class:"result-values__item result-values__item--expected"},u0={key:1,class:"result-row__reference"},Ks={__name:"EvaluationPage",props:{elementId:String,quick:Boolean},setup(e){const n=e,o=Me("services"),a=Me("builtInRuleSets"),r=Me("confirmPopup"),i=Nr(),s=Be(null),l=Be(null),c=Be(null),u=Be([]),d=Le(()=>l.value?`/projects/${l.value.projectId}/environments/${l.value.id}`:"/projects"),m=Le(()=>c.value?.result??[]),f=Le(()=>u.value.find(C=>C.id===s.value?.rule));function b(C){const L=f.value?.regras?.find(ve=>ve.id===C.id),Z=c.value?.data??{},ue=f.value?.parametros??{};let ne=C.parametro??L?.parametro,B=C.operador??L?.operador,$=C.valorEsperado??L?.valor,Q="";if(L?.tipo==="conditional"){const ve=Z[L.parametro],Ue=(L.condicoes??[]).find(Ke=>Ke.quando&&ma(ve,Ke.quando.operador,Ke.quando.valor));if(Ue?.verificar){ne=Ue.verificar.parametro,B=Ue.verificar.operador,$=Ue.verificar.valor;const Ke=ue[L.parametro];Q=`${Ke?.label??L.parametro}: ${Pt(Ue.quando.operador,Ue.quando.valor,Ke?.unidade)}`}}const me=ue[ne]??{},G=C.valorInformado!==void 0?C.valorInformado:Z[ne],Te=$!==void 0&&B!==void 0;return{parameterLabel:me.label??ne,actual:typeof G=="boolean"?G?"Sim":"Não":G,unit:typeof G=="boolean"?"":C.unidade??me.unidade??"",expected:Te?Pt(B,$,C.unidade??me.unidade):"",conditionalDescription:Q}}const T=Le(()=>m.value.filter(C=>["nao_conforme","erro","invalido"].includes(C.status)).length),N=Le(()=>m.value.filter(C=>["nao_avaliado","manual","atencao"].includes(C.status)).length),w=Le(()=>m.value.length-T.value-N.value),F=Le(()=>m.value.length?T.value>0?"nao_conforme":N.value>0?"nao_avaliado":"conforme":"nao_avaliado"),x=Le(()=>{switch(F.value){case"conforme":return"Elemento conforme";case"nao_conforme":return"Há itens não conformes";default:return"Avaliação pendente"}});function I(C){return C?new Intl.DateTimeFormat("pt-BR",{dateStyle:"medium",timeStyle:"short"}).format(new Date(C)):""}async function q(){const C=await o.ruleSetService.list();if(u.value=[...(a??[]).map(L=>L.ruleSet),...C],n.quick){const L=o.quickEvaluationService.getCurrent();s.value=L?.element??null,c.value=L?.evaluation??null;return}if(s.value=await o.projectService.getElement(n.elementId),s.value){l.value=await o.projectService.getEnvironment(s.value.environmentId);const L=await o.evaluationService.listEvaluations(s.value.id);c.value=L[0]??null}}function pe(C){r.confirm(C,`Excluir o elemento ${s.value.name} e suas avaliações?`,ie)}async function ie(){await o.projectService.deleteElement(s.value.id),i.push(d.value)}return jn(q),(C,L)=>s.value&&c.value?(E(),W(we,{key:0},[M(ee(Ce),{class:"back-link",to:e.quick?"/quick-evaluation":d.value},{default:fe(()=>[M(ee(fo),{size:18,"aria-hidden":"true"}),v("span",Zv,se(e.quick?s.value.name:l.value?.name??s.value.name),1)]),_:1},8,["to"]),M(Zn,{title:s.value.name,description:`Avaliação realizada em ${I(c.value.evaluatedAt)}`},{action:fe(()=>[e.quick?ye("",!0):(E(),W("div",e0,[M(ee(Ce),{class:"button button--outline",to:`/elements/${s.value.id}`},{default:fe(()=>[M(ee(uh),{size:18,"aria-hidden":"true"}),L[0]||(L[0]=Ee("Editar elemento ",-1))]),_:1},8,["to"]),v("button",{class:"icon-button icon-button--danger",title:"Excluir","aria-label":"Excluir elemento",onClick:pe},[M(ee(Uo),{size:18,"aria-hidden":"true"})])]))]),_:1},8,["title","description"]),v("section",{class:dn(["result-summary",`result-summary--${F.value}`])},[M(Ko,{status:F.value},null,8,["status"]),v("h2",null,se(x.value),1),v("div",n0,[v("span",null,[v("strong",null,se(w.value),1),L[1]||(L[1]=Ee(" conformes",-1))]),v("span",null,[v("strong",null,se(T.value),1),L[2]||(L[2]=Ee(" não conformes",-1))]),v("span",null,[v("strong",null,se(N.value),1),L[3]||(L[3]=Ee(" pendentes ou para verificar",-1))])]),N.value?(E(),W("div",o0,[L[5]||(L[5]=v("span",null,"Há regras pendentes ou para verificar.",-1)),e.quick?ye("",!0):(E(),Pe(ee(Ce),{key:0,class:"text-button",to:`/elements/${s.value.id}`},{default:fe(()=>[...L[4]||(L[4]=[Ee(" Editar elemento ",-1)])]),_:1},8,["to"]))])):ye("",!0)],2),v("section",a0,[L[8]||(L[8]=v("h2",null,"Regras avaliadas",-1)),(E(!0),W(we,null,fn(m.value,Z=>(E(),W("article",{key:Z.id,class:dn(["result-row",`result-row--${Z.status}`])},[v("div",r0,[M(Ko,{status:Z.status},null,8,["status"]),v("h3",null,se(Z.nome??Z.id),1),Z.mensagem?(E(),W("p",t0,se(Z.mensagem),1)):ye("",!0),(E(!0),W(we,null,fn([b(Z)],ue=>(E(),W("div",{key:Z.id,class:"result-row__details"},[ue.actual!==void 0||ue.expected?(E(),W("div",i0,[ue.conditionalDescription?(E(),W("div",s0,[L[6]||(L[6]=v("span",null,"Condição desta regra",-1)),v("strong",null,se(ue.conditionalDescription),1)])):ye("",!0),ue.actual!==void 0?(E(),W("div",l0,[v("span",null,"Valor informado · "+se(ue.parameterLabel),1),v("strong",null,[Ee(se(ue.actual),1),ue.unit?(E(),W(we,{key:0},[Ee(se(ue.unit),1)],64)):ye("",!0)])])):ye("",!0),ue.expected?(E(),W("div",c0,[L[7]||(L[7]=v("span",null,"Critério esperado",-1)),v("strong",null,se(ue.expected),1)])):ye("",!0)])):ye("",!0)]))),128)),Z.referencia?(E(),W("small",u0,"Referência: "+se(Z.referencia),1)):ye("",!0)])],2))),128))]),e.quick?(E(),Pe(ee(Ce),{key:0,class:"button",to:"/quick-evaluation"},{default:fe(()=>[...L[9]||(L[9]=[Ee(" Nova avaliação rápida ",-1)])]),_:1})):ye("",!0)],64)):s.value?(E(),W(we,{key:1},[M(ee(Ce),{class:"back-link",to:e.quick?"/quick-evaluation":d.value},{default:fe(()=>[M(ee(fo),{size:18,"aria-hidden":"true"}),L[10]||(L[10]=v("span",{class:"back-link__label"},"Elemento",-1))]),_:1},8,["to"]),M(yn,{title:"Ainda não há avaliação",text:"Preencha os dados do elemento para executar as regras."},{default:fe(()=>[M(ee(Ce),{class:"button",to:e.quick?"/quick-evaluation":`/elements/${s.value.id}`},{default:fe(()=>[Ee(se(e.quick?"Nova avaliação rápida":"Avaliar elemento"),1)]),_:1},8,["to"])]),_:1})],64)):(E(),Pe(yn,{key:2,title:"Avaliação não encontrada",text:e.quick?"Inicie uma avaliação rápida para ver o resultado.":"O elemento pode ter sido removido."},{default:fe(()=>[M(ee(Ce),{class:"button",to:e.quick?"/quick-evaluation":"/projects"},{default:fe(()=>[Ee(se(e.quick?"Avaliação rápida":"Projetos"),1)]),_:1},8,["to"])]),_:1},8,["text"]))}},d0={class:"project-header__actions"},m0={class:"collection-form__heading"},p0={class:"field"},f0={class:"environments-summary-container"},h0={key:0,class:"card-grid-environment collection-list"},v0={class:"card__icon"},g0={class:"card__menu"},b0=["onClick"],_0=["onClick"],y0={__name:"ProjectPage",props:{projectId:String},setup(e){const n=e,o=Me("services"),a=Me("confirmPopup"),r=Be(null),i=Be([]),s=Be(""),l=Be(null),c=Be(null),u=Be(null);async function d(){r.value=await o.projectService.getProject(n.projectId),r.value&&([i.value,c.value]=await Promise.all([o.projectService.listEnvironments(n.projectId),o.evaluationService.getProjectSummary(n.projectId)]))}async function m(){l.value={},s.value="",await $o(),u.value?.scrollIntoView({behavior:"smooth"})}function f(F){l.value=F,s.value=F.name}function b(){l.value=null,s.value=""}async function T(){l.value?.id?await o.projectService.renameEnvironment(l.value.id,s.value):await o.projectService.createEnvironment(n.projectId,{name:s.value}),b(),await d()}function N(F,x){a.open({target:x.currentTarget,message:`Excluir o ambiente “${F.name}” e seus elementos?`,onAccept:()=>w(F)})}async function w(F){const x=await o.projectService.listElements(F.id);for(const I of x){const q=await o.evaluationService.listEvaluations(I.id);for(const pe of q)await o.repositories.evaluationRepository.delete(pe.id);await o.repositories.elementRepository.delete(I.id)}await o.repositories.environmentRepository.delete(F.id),await d()}return jn(d),(F,x)=>r.value?(E(),W(we,{key:0},[M(ee(Ce),{class:"back-link",to:"/projects"},{default:fe(()=>[M(ee(fo),{size:18,"aria-hidden":"true"}),x[1]||(x[1]=v("span",{class:"back-link__label"},"Projetos",-1))]),_:1}),M(Zn,{title:r.value.name,description:`${i.value.length} ambiente${i.value.length===1?"":"s"} cadastrado${i.value.length===1?"":"s"}.
      
${r.value.description}`},{action:fe(()=>[v("div",d0,[i.value.length?(E(),Pe(ee(Ce),{key:0,class:"button button--outline",to:`/projects/${e.projectId}/status`},{default:fe(()=>[M(ee(mo),{size:18,"aria-hidden":"true"}),x[2]||(x[2]=Ee("Status detalhado ",-1))]),_:1},8,["to"])):ye("",!0),i.value.length?(E(),W("button",{key:1,class:"button",onClick:m},[M(ee(rr),{size:18,"aria-hidden":"true"}),x[3]||(x[3]=Ee("Novo ambiente",-1))])):ye("",!0)])]),_:1},8,["title","description"]),l.value?(E(),W("form",{key:0,class:"form-card collection-form",onSubmit:Xn(T,["prevent"]),ref_key:"inputCreate",ref:u},[v("div",m0,[v("h2",null,se(l.value.id?"Nome do ambiente":"Novo ambiente"),1),x[4]||(x[4]=v("p",null,"Use um nome que ajude a identificar este espaço no projeto.",-1))]),v("label",p0,[x[5]||(x[5]=v("span",null,"Nome do ambiente",-1)),Cn(v("input",{"onUpdate:modelValue":x[0]||(x[0]=I=>s.value=I),required:"",autofocus:""},null,512),[[or,s.value]])]),v("div",{class:"form-actions"},[v("button",{class:"button button--ghost",type:"button",onClick:b}," Cancelar "),x[6]||(x[6]=v("button",{class:"button",type:"submit"},"Salvar",-1))])],544)):ye("",!0),c.value&&i.value.length?(E(),Pe(ri,{key:1,summary:c.value,scope:"projeto"},null,8,["summary"])):ye("",!0),v("div",f0,[i.value.length?(E(),W("div",h0,[(E(!0),W(we,null,fn(i.value,I=>(E(),W("article",{key:I.id,class:"card-environment"},[M(ee(Ce),{class:"card__link",to:`/projects/${r.value.id}/environments/${I.id}`},{default:fe(()=>[v("span",v0,[M(ee(lh),{size:22,"aria-hidden":"true"})]),v("div",null,[v("h2",null,se(I.name),1),x[7]||(x[7]=v("p",null,"Ambiente",-1))])]),_:2},1032,["to"]),v("div",g0,[v("button",{class:"text-button",onClick:q=>f(I)}," Editar ",8,b0),v("button",{class:"icon-button icon-button--danger",title:"Excluir","aria-label":"Excluir",onClick:q=>N(I,q)},[M(ee(Uo),{size:18,"aria-hidden":"true"})],8,_0)])]))),128))])):ye("",!0),i.value.length?ye("",!0):(E(),Pe(yn,{key:1,class:"collection-empty",title:"Nenhum ambiente ainda",text:"Adicione espaços como entrada, banheiro ou circulação."},{default:fe(()=>[v("button",{class:"button",onClick:m},[M(ee(rr),{size:18,"aria-hidden":"true"}),x[8]||(x[8]=Ee("Novo ambiente",-1))])]),_:1}))])],64)):(E(),Pe(yn,{key:1,title:"Projeto não encontrado",text:"Ele pode ter sido removido."},{default:fe(()=>[M(ee(Ce),{class:"button",to:"/projects"},{default:fe(()=>[...x[9]||(x[9]=[Ee("Voltar aos projetos",-1)])]),_:1})]),_:1}))}},A0={key:0,class:"muted",role:"status"},N0={class:"back-link__label"},x0={key:0,class:"alert alert--error",role:"alert"},B0={key:2,class:"project-status","aria-label":"Status por ambiente"},T0={class:"project-status__heading"},R0=["aria-label"],S0={class:"status status--conforme"},E0={class:"status status--nao_conforme"},w0={class:"status status--nao_avaliado"},C0={key:1,class:"project-status__elements"},k0={class:"project-status__element-name"},I0={key:2,class:"muted"},P0={__name:"ProjectStatusPage",props:{projectId:String},setup(e){const n=e,o=Me("services"),a=Be(null),r=Be(null),i=Be(!0),s=Be("");async function l(){try{a.value=await o.projectService.getProject(n.projectId),a.value&&(r.value=await o.evaluationService.getProjectStatus(n.projectId))}catch(d){s.value=d.message}finally{i.value=!1}}function c(d){return d.status==="nao_avaliado"?`/elements/${d.element.id}`:`/elements/${d.element.id}/evaluation`}function u(d,m,f){return`${d} ${d===1?m:f}`}return jn(l),(d,m)=>i.value?(E(),W("p",A0,"Carregando…")):a.value&&r.value?(E(),W(we,{key:1},[M(ee(Ce),{class:"back-link",to:`/projects/${e.projectId}`},{default:fe(()=>[M(ee(fo),{size:18,"aria-hidden":"true"}),v("span",N0,se(a.value.name),1)]),_:1},8,["to"]),M(Zn,{title:"Status do projeto",description:`${a.value.name} · ${u(r.value.environments.length,"ambiente","ambientes")}`},{action:fe(()=>[M(ee(Ce),{class:"button button--outline",to:`/projects/${e.projectId}`},{default:fe(()=>[...m[0]||(m[0]=[Ee(" Abrir projeto ",-1)])]),_:1},8,["to"])]),_:1},8,["description"]),s.value?(E(),W("p",x0,se(s.value),1)):ye("",!0),r.value.summary.totalElements?(E(),Pe(ri,{key:1,summary:r.value.summary,scope:"projeto"},null,8,["summary"])):ye("",!0),r.value.environments.length?(E(),W("section",B0,[(E(!0),W(we,null,fn(r.value.environments,f=>(E(),W("article",{key:f.environment.id,class:"card project-status__environment"},[v("header",T0,[v("div",null,[v("h2",null,se(f.environment.name),1),v("p",null,se(u(f.elements.length,"elemento","elementos")),1)]),M(Ko,{status:f.summary.overallStatus},null,8,["status"])]),f.elements.length?(E(),W("div",{key:0,class:"project-status__counts","aria-label":`Situação dos elementos de ${f.environment.name}`},[v("span",S0,se(f.summary.conforme)+" conforme"+se(f.summary.conforme===1?"":"s"),1),v("span",E0,se(f.summary.nao_conforme)+" não conforme"+se(f.summary.nao_conforme===1?"":"s"),1),v("span",w0,se(f.summary.nao_avaliado)+" pendente"+se(f.summary.nao_avaliado===1?"":"s"),1)],8,R0)):ye("",!0),f.elements.length?(E(),W("ul",C0,[(E(!0),W(we,null,fn(f.elements,b=>(E(),W("li",{key:b.element.id},[M(ee(Ce),{class:"project-status__element",to:c(b)},{default:fe(()=>[v("span",k0,se(b.element.name),1),M(Ko,{status:b.status},null,8,["status"]),M(ee(Ra),{size:18,class:"chevron","aria-hidden":"true"})]),_:2},1032,["to"])]))),128))])):(E(),W("p",I0,"Nenhum elemento cadastrado neste ambiente.")),M(ee(Ce),{class:"text-button",to:`/projects/${e.projectId}/environments/${f.environment.id}`},{default:fe(()=>[...m[1]||(m[1]=[Ee(" Abrir ambiente ",-1)])]),_:1},8,["to"])]))),128))])):(E(),Pe(yn,{key:3,class:"collection-empty",title:"Nenhum ambiente cadastrado",text:"Crie um ambiente e cadastre elementos para acompanhar o status do projeto."},{default:fe(()=>[M(ee(Ce),{class:"button",to:`/projects/${e.projectId}`},{default:fe(()=>[...m[2]||(m[2]=[Ee("Abrir projeto",-1)])]),_:1},8,["to"])]),_:1}))],64)):a.value?(E(),Pe(yn,{key:2,title:"Não foi possível carregar o status",text:s.value||"Tente novamente mais tarde."},{default:fe(()=>[M(ee(Ce),{class:"button",to:`/projects/${e.projectId}`},{default:fe(()=>[...m[3]||(m[3]=[Ee("Abrir projeto",-1)])]),_:1},8,["to"])]),_:1},8,["text"])):(E(),Pe(yn,{key:3,title:"Projeto não encontrado",text:"Ele pode ter sido removido."},{default:fe(()=>[M(ee(Ce),{class:"button",to:"/projects"},{default:fe(()=>[...m[4]||(m[4]=[Ee("Projetos",-1)])]),_:1})]),_:1}))}},O0={class:"collection-form__heading"},j0={class:"fields-grid"},V0={class:"field"},D0={class:"field"},L0={key:0,class:"muted"},q0={key:1,class:"card-list collection-list"},$0={class:"card__icon"},M0={key:0},F0={class:"card__menu"},z0=["onClick"],H0=["onClick"],U0={__name:"ProjectsPage",setup(e){const n=Me("services"),o=Me("confirmPopup"),a=Be([]),r=Be(""),i=Be(""),s=Be(null),l=Be(""),c=Be(!1);function u(){c.value=!0}async function d(){a.value=await n.projectService.listProjects()}function m(){s.value={},r.value="",i.value="",l.value=""}function f(x){s.value=x,r.value=x.name,l.value="",i.value=x.description||""}function b(){s.value=null,r.value="",i.value="",l.value=""}async function T(){try{l.value="",s.value?.id?await n.projectService.updateProject(s.value.id,{name:r.value,description:i.value}):await n.projectService.createProject({name:r.value,description:i.value}),r.value="",i.value="",s.value=null,await d()}catch(x){l.value=x.message}}function N(x,I){o.confirm(I,`Excluir o projeto “${x.name}” e seus dados?`,()=>w(x))}async function w(x){await n.projectService.deleteProject(x.id),await d()}function F(x){return new Intl.DateTimeFormat("pt-BR",{dateStyle:"medium"}).format(new Date(x))}return jn(d),(x,I)=>(E(),W(we,null,[M(Zn,{title:"Projetos",description:"Acompanhe seus locais e avaliações.",helpButton:"",onHelp:u},{action:fe(()=>[a.value.length?(E(),W("button",{key:0,class:"button",onClick:m},[M(ee(rr),{size:18,"aria-hidden":"true"}),I[3]||(I[3]=Ee("Novo projeto",-1))])):ye("",!0)]),_:1}),s.value?(E(),W("form",{key:0,class:"form-card collection-form",onSubmit:Xn(T,["prevent"])},[v("div",O0,[v("h2",null,se(s.value.id?"Dados do projeto":"Novo projeto"),1),I[4]||(I[4]=v("p",null,"Defina um nome e, se quiser, uma breve descrição para este local.",-1))]),v("div",j0,[v("label",V0,[I[5]||(I[5]=v("span",null,"Nome do projeto",-1)),Cn(v("input",{"onUpdate:modelValue":I[0]||(I[0]=q=>r.value=q),required:"",autofocus:""},null,512),[[or,r.value]])]),v("label",D0,[I[6]||(I[6]=v("span",null,[Ee("Descrição "),v("small",null,"(opcional)")],-1)),Cn(v("input",{"onUpdate:modelValue":I[1]||(I[1]=q=>i.value=q)},null,512),[[or,i.value]])])]),l.value?(E(),W("p",L0,se(l.value),1)):ye("",!0),v("div",{class:"form-actions"},[v("button",{class:"button button--ghost",type:"button",onClick:b}," Cancelar "),I[7]||(I[7]=v("button",{class:"button",type:"submit"},"Salvar",-1))])],32)):ye("",!0),a.value.length?(E(),W("div",q0,[(E(!0),W(we,null,fn(a.value,q=>(E(),W("article",{key:q.id,class:"card project-card"},[M(ee(Ce),{class:"card__link",to:`/projects/${q.id}`},{default:fe(()=>[v("span",$0,[M(ee(Mc),{size:22,"aria-hidden":"true"})]),v("div",null,[v("h2",null,se(q.name),1),v("p",null,"Atualizado em "+se(F(q.updatedAt)),1),q.description?(E(),W("p",M0,se(q.description),1)):ye("",!0)]),M(ee(Ra),{size:20,class:"chevron","aria-hidden":"true"})]),_:2},1032,["to"]),v("div",F0,[v("button",{class:"text-button",onClick:pe=>f(q)}," Editar ",8,z0),v("button",{class:"icon-button icon-button--danger",title:"Excluir","aria-label":"Excluir",onClick:pe=>N(q,pe)},[M(ee(Uo),{size:18,"aria-hidden":"true"})],8,H0)])]))),128))])):(E(),Pe(yn,{key:2,class:"collection-empty",title:"Comece por um projeto",text:"Organize as avaliações de acessibilidade por obra ou local."},{default:fe(()=>[v("button",{class:"button",onClick:m},[M(ee(rr),{size:18,"aria-hidden":"true"}),I[8]||(I[8]=Ee("Novo projeto",-1))])]),_:1})),c.value?(E(),Pe(Fc,{key:3,onClose:I[2]||(I[2]=q=>c.value=!1)})):ye("",!0)],64))}};function K0(e=""){const n=e.replace(/^(\.\.\/|\.\/|\/)+/,"").split("/");return n.length>1?n.slice(0,-1).join("/"):""}function G0(e,n){const[o]=e,a=o?.norma;return a?.nome?`${a.nome}${a.versao?` · ${a.versao}`:""}`:n.split("/").at(-1)?.replaceAll("-"," ")??"Regras padrão"}function W0(e){const n=new Map;for(const o of e){const a=K0(o.path)||o.ruleSet.id,r=n.get(a)??{id:a,source:"standard",ruleSets:[]};r.ruleSets.push(o.ruleSet),n.set(a,r)}return[...n.values()].map(o=>({...o,nome:G0(o.ruleSets,o.id)})).sort((o,a)=>o.nome.localeCompare(a.nome))}function Y0(e){const n=new Map;for(const o of e){const a=o.grupo,r=a?.id??o.id,i=n.get(r)??{id:r,nome:a?.nome??o.nome,source:"user",ruleSets:[]};i.ruleSets.push(o),n.set(r,i)}return[...n.values()].sort((o,a)=>o.nome.localeCompare(a.nome))}const J0={class:"documentation"},Q0={class:"documentation__intro"},X0={class:"documentation__icon"},Z0=["href"],eg={class:"documentation__section"},ng={key:0,class:"muted",role:"status"},og={key:0,class:"alert alert--error",role:"alert"},ag={class:"rules-section rules-section--first"},rg={class:"card-list ruleset-list"},tg={key:0,class:"ruleset-card__actions"},ig=["onClick"],sg=["onClick"],lg=["onClick"],cg={class:"rules-actions"},ug={class:"button import-button"},dg=["disabled"],mg={class:"button button--outline import-button"},pg=["disabled"],fg={key:0,class:"muted",role:"status"},hg={key:1,class:"alert alert--error",role:"alert"},vg={key:2,class:"muted",role:"status"},gg={key:3,class:"rules-library"},bg={class:"rules-section rules-section--first rules-library__section"},_g={class:"card-list rules-library__list"},yg={class:"card__icon"},Ag={class:"rules-section rules-library__section"},Ng={key:0,class:"card-list rules-library__list"},xg={class:"card__icon"},dt={__name:"RulesPage",props:{source:String,groupId:String,documentation:Boolean},setup(e){const n=e,o=Me("services"),a=Me("builtInRuleSets");Nr();const r=Me("confirmPopup"),i=Le(()=>"/Extensao-26.2/rule-engine-skill/SKILL.md"),s=Be([]),l=Be(!0),c=Be(!1),u=Be(""),d=Le(()=>s.value.filter(ie=>ie.source==="standard")),m=Le(()=>s.value.filter(ie=>ie.source==="user")),f=Le(()=>s.value.find(ie=>ie.source===n.source&&ie.id===n.groupId));function b(ie){return ie.regras?.length??0}function T(ie){return Object.keys(ie.parametros??{}).length}function N(ie){return ie.ruleSets.reduce((C,L)=>C+b(L),0)}async function w(){l.value=!0;try{const ie=await o.ruleSetService.list();s.value=[...W0(a),...Y0(ie)]}finally{l.value=!1}}function F(ie){return`/rules/${encodeURIComponent(ie.source)}/${encodeURIComponent(ie.id)}`}async function x(ie){const C=[...ie.target.files??[]];if(!C.length)return;const L=C.filter(Q=>/\.(json|ya?ml)$/i.test(Q.name)),Z=C.length-L.length;if(!L.length){u.value="Nenhum arquivo .json, .yaml ou .yml encontrado.",ie.target.value="";return}u.value="",c.value=!0;const ue=L[0].webkitRelativePath?.split("/")[0],ne={id:`importado-${ue||crypto.randomUUID()}`,nome:ue||(L.length===1?L[0].name.replace(/\.(json|ya?ml)$/i,""):"Regras importadas")},B=[];for(const Q of L)try{const me=await Q.text();/\.json$/i.test(Q.name)?await o.ruleSetService.importFromJson(me,ne):await o.ruleSetService.importFromYaml(me,ne)}catch(me){B.push(`${Q.name}: ${me.message}`)}const $=[];B.length&&$.push(L.length===1?B[0]:`${B.length} de ${L.length} arquivo(s) não importado(s) — ${B.join("; ")}`),Z&&$.push(`${Z} arquivo(s) ignorado(s) por não serem .json/.yaml/.yml.`),u.value=$.join(" "),await w(),ie.target.value="",c.value=!1}function I(ie,C){r.confirm(C,`Excluir "${ie.nome}"? Esta ação não pode ser desfeita.`,()=>q(ie))}async function q(ie){u.value="";try{await o.ruleSetService.delete(ie.id),await w()}catch(C){u.value=C.message}}async function pe(ie,C){try{const L=C==="json"?await o.ruleSetService.exportByIdToJson(ie.id):await o.ruleSetService.exportByIdToYaml(ie.id),Z=C==="json"?"application/json":"text/yaml",ue=document.createElement("a");ue.href=URL.createObjectURL(new Blob([L],{type:Z})),ue.download=`${ie.id}.${C}`,ue.click(),URL.revokeObjectURL(ue.href)}catch(L){u.value=L.message}}return jn(w),(ie,C)=>e.documentation?(E(),W(we,{key:0},[M(ee(Ce),{class:"back-link",to:"/rules"},{default:fe(()=>[M(ee(fo),{size:18,"aria-hidden":"true"}),C[0]||(C[0]=v("span",{class:"back-link__label"},"Conjuntos de regras",-1))]),_:1}),M(Zn,{title:"Crie e importe regras",description:"Monte checklists em YAML para avaliar os elementos do seu projeto."}),v("div",J0,[C[6]||(C[6]=Sd(`<section class="documentation__section"><h2>Formato mínimo de um checklist</h2><p>Cada arquivo é um checklist independente. Os campos obrigatórios são <code>id</code>, <code>nome</code>, <code>parametros</code> (objeto) e <code>regras</code> (lista). YAML e JSON são aceitos.</p><pre class="documentation-code"><code>id: bebedouros
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
      mensagem: Avaliar como rampa.</code></pre><p class="documentation__note"> Se nenhuma condição bater, o resultado fica <code>nao_avaliado</code>. Um parâmetro usado dentro de <code>verificar</code> (aqui, <code>possui_chanfro</code>) também precisa estar declarado em <code>parametros</code>. </p></details></section><section class="documentation__section"><h2>Resultados possíveis</h2><ul class="documentation__list"><li><code>conforme</code> / <code>nao_conforme</code> — comparação direta, ou condição explícita.</li><li><code>manual</code> — regra do tipo <code>checklist</code>.</li><li><code>atencao</code> — resultado explícito opcional numa condição de <code>conditional</code>.</li><li><code>nao_avaliado</code> — parâmetro opcional sem valor, ou nenhuma condição satisfeita.</li><li><code>invalido</code> — parâmetro obrigatório sem valor preenchido.</li></ul></section>`,4)),v("section",Q0,[v("span",X0,[M(ee(oi),{size:24,"aria-hidden":"true"})]),v("div",null,[C[1]||(C[1]=v("h1",null,"Crie suas regras com IA",-1)),v("a",{class:"button button--outline",href:`${i.value}`,download:"SKILL.md"}," Baixar SKILL.md ",8,Z0),C[2]||(C[2]=v("p",null,"Um arquivo de texto com instruções prontas para uma IA (Claude, ChatGPT, Cursor) gerar checklists neste formato a partir do que você descrever. Baixe, cole numa conversa com a IA e peça a regra que precisa — sem aprender YAML.",-1))])]),v("section",eg,[C[4]||(C[4]=v("h2",null,"Importação",-1)),C[5]||(C[5]=v("p",null,[Ee("Escolha um ou mais arquivos YAML/JSON, ou uma pasta com vários checklists — arquivos que não forem "),v("code",null,".yaml"),Ee(", "),v("code",null,".yml"),Ee(" ou "),v("code",null,".json"),Ee(" são ignorados automaticamente. Tudo fica armazenado somente neste navegador.")],-1)),M(ee(Ce),{class:"button",to:"/rules"},{default:fe(()=>[...C[3]||(C[3]=[Ee("Ir para importação",-1)])]),_:1})])])],64)):e.groupId?(E(),W(we,{key:1},[M(ee(Ce),{class:"back-link",to:"/rules"},{default:fe(()=>[M(ee(fo),{size:18,"aria-hidden":"true"}),C[7]||(C[7]=v("span",{class:"back-link__label"},"Conjuntos de regras",-1))]),_:1}),l.value?(E(),W("p",ng,"Carregando…")):f.value?(E(),W(we,{key:1},[M(Zn,{title:f.value.nome,description:`${f.value.ruleSets.length} checklists que compõem este conjunto.`},null,8,["title","description"]),u.value?(E(),W("p",og,se(u.value),1)):ye("",!0),v("section",ag,[C[8]||(C[8]=v("h2",null,"Checklists",-1)),v("div",rg,[(E(!0),W(we,null,fn(f.value.ruleSets,L=>(E(),W("article",{key:L.id,class:"card ruleset-card"},[v("div",null,[v("h2",null,se(L.nome),1),v("p",null,se(L.norma?.nome??"Conjunto personalizado"),1),v("small",null,se(b(L))+" regras · "+se(T(L))+" campos",1)]),e.source==="user"?(E(),W("div",tg,[v("button",{class:"button button--outline",onClick:Z=>pe(L,"yaml")},"Exportar YAML",8,ig),v("button",{class:"button button--outline",onClick:Z=>pe(L,"json")},"Exportar JSON",8,sg),v("button",{class:"icon-button icon-button--danger",title:"Excluir","aria-label":"Excluir",onClick:Z=>I(L,Z)},[M(ee(Uo),{size:18,"aria-hidden":"true"})],8,lg)])):ye("",!0)]))),128))])])],64)):(E(),Pe(yn,{key:2,title:"Conjunto não encontrado",text:"Ele pode ter sido removido."}))],64)):(E(),W(we,{key:2},[M(Zn,{class:"rules-page-header",title:"Conjuntos de regras",description:"Cada pasta ou importação é exibida como um único conjunto."},{action:fe(()=>[v("div",cg,[v("label",ug,[C[9]||(C[9]=Ee(" Importar arquivos ",-1)),v("input",{type:"file",accept:".json,.yaml,.yml",multiple:"",disabled:c.value,onChange:x},null,40,dg)]),v("label",mg,[C[10]||(C[10]=Ee(" Importar pasta ",-1)),v("input",{type:"file",accept:".json,.yaml,.yml",webkitdirectory:"",disabled:c.value,onChange:x},null,40,pg)]),M(ee(Ce),{class:"rules-help-link",to:"/rules/documentation"},{default:fe(()=>[...C[11]||(C[11]=[Ee("Como criar regras",-1)])]),_:1})])]),_:1}),c.value?(E(),W("p",fg,"Importando…")):ye("",!0),u.value?(E(),W("p",hg,se(u.value),1)):ye("",!0),l.value?(E(),W("p",vg,"Carregando…")):(E(),W("div",gg,[v("section",bg,[C[12]||(C[12]=v("h2",null,"Regras padrão",-1)),v("div",_g,[(E(!0),W(we,null,fn(d.value,L=>(E(),Pe(ee(Ce),{key:L.id,class:"card card--interactive rules-card",to:F(L)},{default:fe(()=>[v("span",yg,[M(ee(mo),{size:22,"aria-hidden":"true"})]),v("div",null,[v("h2",null,se(L.nome),1),v("p",null,se(L.ruleSets.length)+" checklists · "+se(N(L))+" regras",1)]),M(ee(Ra),{size:20,class:"chevron","aria-hidden":"true"})]),_:2},1032,["to"]))),128))])]),v("section",Ag,[C[13]||(C[13]=v("h2",null,"Suas regras",-1)),m.value.length?(E(),W("div",Ng,[(E(!0),W(we,null,fn(m.value,L=>(E(),Pe(ee(Ce),{key:L.id,class:"card card--interactive rules-card",to:F(L)},{default:fe(()=>[v("span",xg,[M(ee(mo),{size:22,"aria-hidden":"true"})]),v("div",null,[v("h2",null,se(L.nome),1),v("p",null,se(L.ruleSets.length)+" checklists",1)]),M(ee(Ra),{size:20,class:"chevron","aria-hidden":"true"})]),_:2},1032,["to"]))),128))])):(E(),Pe(yn,{key:1,title:"Nenhum conjunto importado",text:"Importe arquivos ou uma pasta para começar."}))])]))],64))}},Bg=[{path:"/",redirect:"/projects"},{path:"/projects",name:"projects",component:U0},{path:"/projects/:projectId",name:"project-detail",component:y0,props:!0},{path:"/projects/:projectId/status",name:"project-status",component:P0,props:!0},{path:"/projects/:projectId/environments/:environmentId",name:"project-environment",component:Xv,props:!0},{path:"/elements/new",name:"element-new",component:ut,meta:{hideBottomNav:!0}},{path:"/elements/:elementId",name:"element-detail",component:ut,props:!0},{path:"/elements/:elementId/evaluation",name:"element-evaluation",component:Ks,props:!0},{path:"/quick-evaluation",name:"quick-evaluation",component:ut,props:{quick:!0}},{path:"/quick-evaluation/result",name:"quick-evaluation-result",component:Ks,props:{quick:!0}},{path:"/rules",name:"rules",component:dt},{path:"/rules/documentation",name:"rules-documentation",component:dt,props:{documentation:!0}},{path:"/rules/:source/:groupId",name:"rules-group",component:dt,props:!0},{path:"/:pathMatch(.*)*",redirect:"/projects"}],zc=Ff({history:Nf("/Extensao-26.2/"),routes:Bg}),Tg={__name:"App",setup(e){const n=Be(null),o=Be(!1),a=ni();return ca("confirmPopup",{open:r=>n.value?.open(r),confirm:(r,i,s)=>n.value?.confirm(r,i,s)}),jn(async()=>{await zc.isReady();const r=window.matchMedia?.("(display-mode: standalone)")?.matches||navigator.standalone===!0,i=localStorage.getItem("welcomePopupSeen");a.path==="/projects"&&!r&&!i&&(localStorage.setItem("welcomePopupSeen","true"),o.value=!0)}),(r,i)=>(E(),W(we,null,[M(gh,null,{default:fe(()=>[M(ee($c))]),_:1}),M(Ah,{ref_key:"confirmPopup",ref:n},null,512),o.value?(E(),Pe(Fc,{key:0,onClose:i[0]||(i[0]=s=>o.value=!1)})):ye("",!0)],64))}};async function Rg(){const[e,n]=await Promise.all([Qm(),Dp()]);gm(Tg).provide("services",e).provide("builtInRuleSets",n).use(zc).mount("#app"),xm({immediate:!0})}Rg().catch(e=>{document.querySelector("#app").innerHTML=`<main class="fatal-error"><h1>Não foi possível abrir o aplicativo</h1><p>${e.message}</p></main>`});
