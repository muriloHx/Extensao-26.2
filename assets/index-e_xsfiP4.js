(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))a(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function o(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function a(r){if(r.ep)return;r.ep=!0;const i=o(r);fetch(r.href,i)}})();function Pt(e){const n=Object.create(null);for(const o of e.split(","))n[o]=1;return o=>o in n}const $e={},Po=[],Fn=()=>{},Ks=()=>!1,rr=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),tr=e=>e.startsWith("onUpdate:"),Je=Object.assign,Ot=(e,n)=>{const o=e.indexOf(n);o>-1&&e.splice(o,1)},Hc=Object.prototype.hasOwnProperty,je=(e,n)=>Hc.call(e,n),Ne=Array.isArray,Oo=e=>Ra(e)==="[object Map]",Ko=e=>Ra(e)==="[object Set]",ti=e=>Ra(e)==="[object Date]",Se=e=>typeof e=="function",Fe=e=>typeof e=="string",In=e=>typeof e=="symbol",qe=e=>e!==null&&typeof e=="object",Gs=e=>(qe(e)||Se(e))&&Se(e.then)&&Se(e.catch),Ws=Object.prototype.toString,Ra=e=>Ws.call(e),Uc=e=>Ra(e).slice(8,-1),Ys=e=>Ra(e)==="[object Object]",Vt=e=>Fe(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,ta=Pt(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),ir=e=>{const n=Object.create(null);return(o=>n[o]||(n[o]=e(o)))},Kc=/-\w/g,pn=ir(e=>e.replace(Kc,n=>n.slice(1).toUpperCase())),Gc=/\B([A-Z])/g,So=ir(e=>e.replace(Gc,"-$1").toLowerCase()),sr=ir(e=>e.charAt(0).toUpperCase()+e.slice(1)),Ma=ir(e=>e?`on${sr(e)}`:""),$n=(e,n)=>!Object.is(e,n),Fa=(e,...n)=>{for(let o=0;o<e.length;o++)e[o](...n)},Js=(e,n,o,a=!1)=>{Object.defineProperty(e,n,{configurable:!0,enumerable:!1,writable:a,value:o})},lr=e=>{const n=parseFloat(e);return isNaN(n)?e:n},Wc=e=>{const n=Fe(e)?Number(e):NaN;return isNaN(n)?e:n};let ii;const cr=()=>ii||(ii=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function ur(e){if(Ne(e)){const n={};for(let o=0;o<e.length;o++){const a=e[o],r=Fe(a)?Xc(a):ur(a);if(r)for(const i in r)n[i]=r[i]}return n}else if(Fe(e)||qe(e))return e}const Yc=/;(?![^(]*\))/g,Jc=/:([^]+)/,Qc=/\/\*[^]*?\*\//g;function Xc(e){const n={};return e.replace(Qc,"").split(Yc).forEach(o=>{if(o){const a=o.split(Jc);a.length>1&&(n[a[0].trim()]=a[1].trim())}}),n}function dn(e){let n="";if(Fe(e))n=e;else if(Ne(e))for(let o=0;o<e.length;o++){const a=dn(e[o]);a&&(n+=a+" ")}else if(qe(e))for(const o in e)e[o]&&(n+=o+" ");return n.trim()}function wn(e){if(!e)return null;let{class:n,style:o}=e;return n&&!Fe(n)&&(e.class=dn(n)),o&&(e.style=ur(o)),e}const Zc="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",eu=Pt(Zc);function Qs(e){return!!e||e===""}function nu(e,n){if(e.length!==n.length)return!1;let o=!0;for(let a=0;o&&a<e.length;a++)o=Go(e[a],n[a]);return o}function Go(e,n){if(e===n)return!0;let o=ti(e),a=ti(n);if(o||a)return o&&a?e.getTime()===n.getTime():!1;if(o=In(e),a=In(n),o||a)return e===n;if(o=Ne(e),a=Ne(n),o||a)return o&&a?nu(e,n):!1;if(o=qe(e),a=qe(n),o||a){if(!o||!a)return!1;const r=Object.keys(e).length,i=Object.keys(n).length;if(r!==i)return!1;for(const s in e){const l=e.hasOwnProperty(s),c=n.hasOwnProperty(s);if(l&&!c||!l&&c||!Go(e[s],n[s]))return!1}}return String(e)===String(n)}function Dt(e,n){return e.findIndex(o=>Go(o,n))}const Xs=e=>!!(e&&e.__v_isRef===!0),le=e=>Fe(e)?e:e==null?"":Ne(e)||qe(e)&&(e.toString===Ws||!Se(e.toString))?Xs(e)?le(e.value):JSON.stringify(e,Zs,2):String(e),Zs=(e,n)=>Xs(n)?Zs(e,n.value):Oo(n)?{[`Map(${n.size})`]:[...n.entries()].reduce((o,[a,r],i)=>(o[Nr(a,i)+" =>"]=r,o),{})}:Ko(n)?{[`Set(${n.size})`]:[...n.values()].map(o=>Nr(o))}:In(n)?Nr(n):qe(n)&&!Ne(n)&&!Ys(n)?String(n):n,Nr=(e,n="")=>{var o;return In(e)?`Symbol(${(o=e.description)!=null?o:n})`:e};let Qe;class ou{constructor(n=!1){this.detached=n,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this._warnOnRun=!0,this.__v_skip=!0,!n&&Qe&&(Qe.active?(this.parent=Qe,this.index=(Qe.scopes||(Qe.scopes=[])).push(this)-1):(this._active=!1,this._warnOnRun=!1))}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let n,o;if(this.scopes){const a=this.scopes.slice();for(n=0,o=a.length;n<o;n++)a[n].pause()}for(n=0,o=this.effects.length;n<o;n++)this.effects[n].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let n,o;if(this.scopes){const r=this.scopes.slice();for(n=0,o=r.length;n<o;n++)r[n].resume()}const a=this.effects.slice();for(n=0,o=a.length;n<o;n++)a[n].resume()}}run(n){if(this._active){const o=Qe;try{return Qe=this,n()}finally{Qe=o}}}on(){++this._on===1&&(this.prevScope=Qe,Qe=this)}off(){if(this._on>0&&--this._on===0){if(Qe===this)Qe=this.prevScope;else{let n=Qe;for(;n;){if(n.prevScope===this){n.prevScope=this.prevScope;break}n=n.prevScope}}this.prevScope=void 0}}stop(n){if(this._active){this._active=!1;let o,a;for(o=0,a=this.effects.length;o<a;o++)this.effects[o].stop();for(this.effects.length=0,o=0,a=this.cleanups.length;o<a;o++)this.cleanups[o]();if(this.cleanups.length=0,this.scopes){const r=this.scopes.slice();for(o=0,a=r.length;o<a;o++)r[o].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!n){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0}}}function au(){return Qe}let Me;const xr=new WeakSet;class el{constructor(n){this.fn=n,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Qe&&(Qe.active?Qe.effects.push(this):this.flags&=-2)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,xr.has(this)&&(xr.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||ol(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,si(this),al(this);const n=Me,o=kn;Me=this,kn=!0;try{return this.fn()}finally{rl(this),Me=n,kn=o,this.flags&=-3}}stop(){if(this.flags&1){for(let n=this.deps;n;n=n.nextDep)qt(n);this.deps=this.depsTail=void 0,si(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?xr.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){dt(this)&&this.run()}get dirty(){return dt(this)}}let nl=0,ia,sa;function ol(e,n=!1){if(e.flags|=8,n){e.next=sa,sa=e;return}e.next=ia,ia=e}function jt(){nl++}function Lt(){if(--nl>0)return;if(sa){let n=sa;for(sa=void 0;n;){const o=n.next;n.next=void 0,n.flags&=-9,n=o}}let e;for(;ia;){let n=ia;for(ia=void 0;n;){const o=n.next;if(n.next=void 0,n.flags&=-9,n.flags&1)try{n.trigger()}catch(a){e||(e=a)}n=o}}if(e)throw e}function al(e){for(let n=e.deps;n;n=n.nextDep)n.version=-1,n.prevActiveLink=n.dep.activeLink,n.dep.activeLink=n}function rl(e){let n,o=e.depsTail,a=o;for(;a;){const r=a.prevDep;a.version===-1?(a===o&&(o=r),qt(a),ru(a)):n=a,a.dep.activeLink=a.prevActiveLink,a.prevActiveLink=void 0,a=r}e.deps=n,e.depsTail=o}function dt(e){for(let n=e.deps;n;n=n.nextDep)if(n.dep.version!==n.version||n.dep.computed&&(tl(n.dep.computed)||n.dep.version!==n.version))return!0;return!!e._dirty}function tl(e){if(e.flags&4&&!(e.flags&16)||(e.flags&=-17,e.globalVersion===fa)||(e.globalVersion=fa,!e.isSSR&&e.flags&128&&(!e.deps&&!e._dirty||!dt(e))))return;e.flags|=2;const n=e.dep,o=Me,a=kn;Me=e,kn=!0;try{al(e);const r=e.fn(e._value);(n.version===0||$n(r,e._value))&&(e.flags|=128,e._value=r,n.version++)}catch(r){throw n.version++,r}finally{Me=o,kn=a,rl(e),e.flags&=-3}}function qt(e,n=!1){const{dep:o,prevSub:a,nextSub:r}=e;if(a&&(a.nextSub=r,e.prevSub=void 0),r&&(r.prevSub=a,e.nextSub=void 0),o.subs===e&&(o.subs=a,!a&&o.computed)){o.computed.flags&=-5;for(let i=o.computed.deps;i;i=i.nextDep)qt(i,!0)}!n&&!--o.sc&&o.map&&o.map.delete(o.key)}function ru(e){const{prevDep:n,nextDep:o}=e;n&&(n.nextDep=o,e.prevDep=void 0),o&&(o.prevDep=n,e.nextDep=void 0)}let kn=!0;const il=[];function eo(){il.push(kn),kn=!1}function no(){const e=il.pop();kn=e===void 0?!0:e}function si(e){const{cleanup:n}=e;if(e.cleanup=void 0,n){const o=Me;Me=void 0;try{n()}finally{Me=o}}}let fa=0;class tu{constructor(n,o){this.sub=n,this.dep=o,this.version=o.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class $t{constructor(n){this.computed=n,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(n){if(!Me||!kn||Me===this.computed)return;let o=this.activeLink;if(o===void 0||o.sub!==Me)o=this.activeLink=new tu(Me,this),Me.deps?(o.prevDep=Me.depsTail,Me.depsTail.nextDep=o,Me.depsTail=o):Me.deps=Me.depsTail=o,sl(o);else if(o.version===-1&&(o.version=this.version,o.nextDep)){const a=o.nextDep;a.prevDep=o.prevDep,o.prevDep&&(o.prevDep.nextDep=a),o.prevDep=Me.depsTail,o.nextDep=void 0,Me.depsTail.nextDep=o,Me.depsTail=o,Me.deps===o&&(Me.deps=a)}return o}trigger(n){this.version++,fa++,this.notify(n)}notify(n){jt();try{for(let o=this.subs;o;o=o.prevSub)o.sub.notify()&&o.sub.dep.notify()}finally{Lt()}}}function sl(e){if(e.dep.sc++,e.sub.flags&4){const n=e.dep.computed;if(n&&!e.dep.subs){n.flags|=20;for(let a=n.deps;a;a=a.nextDep)sl(a)}const o=e.dep.subs;o!==e&&(e.prevSub=o,o&&(o.nextSub=e)),e.dep.subs=e}}const mt=new WeakMap,Bo=Symbol(""),pt=Symbol(""),ha=Symbol("");function on(e,n,o){if(kn&&Me){let a=mt.get(e);a||mt.set(e,a=new Map);let r=a.get(o);r||(a.set(o,r=new $t),r.map=a,r.key=o),r.track()}}function Yn(e,n,o,a,r,i){const s=mt.get(e);if(!s){fa++;return}const l=c=>{c&&c.trigger()};if(jt(),n==="clear")s.forEach(l);else{const c=Ne(e),u=c&&Vt(o);if(c&&o==="length"){const d=Number(a);s.forEach((m,f)=>{(f==="length"||f===ha||!In(f)&&f>=d)&&l(m)})}else switch((o!==void 0||s.has(void 0))&&l(s.get(o)),u&&l(s.get(ha)),n){case"add":c?u&&l(s.get("length")):(l(s.get(Bo)),Oo(e)&&l(s.get(pt)));break;case"delete":c||(l(s.get(Bo)),Oo(e)&&l(s.get(pt)));break;case"set":Oo(e)&&l(s.get(Bo));break}}Lt()}function wo(e){const n=Ve(e);return n===e?n:(on(n,"iterate",ha),Tn(e)?n:n.map(Pn))}function dr(e){return on(e=Ve(e),"iterate",ha),e}function Ln(e,n){return oo(e)?qo(To(e)?Pn(n):n):Pn(n)}const iu={__proto__:null,[Symbol.iterator](){return Br(this,Symbol.iterator,e=>Ln(this,e))},concat(...e){return wo(this).concat(...e.map(n=>Ne(n)?wo(n):n))},entries(){return Br(this,"entries",e=>(e[1]=Ln(this,e[1]),e))},every(e,n){return Hn(this,"every",e,n,void 0,arguments)},filter(e,n){return Hn(this,"filter",e,n,o=>o.map(a=>Ln(this,a)),arguments)},find(e,n){return Hn(this,"find",e,n,o=>Ln(this,o),arguments)},findIndex(e,n){return Hn(this,"findIndex",e,n,void 0,arguments)},findLast(e,n){return Hn(this,"findLast",e,n,o=>Ln(this,o),arguments)},findLastIndex(e,n){return Hn(this,"findLastIndex",e,n,void 0,arguments)},forEach(e,n){return Hn(this,"forEach",e,n,void 0,arguments)},includes(...e){return Tr(this,"includes",e)},indexOf(...e){return Tr(this,"indexOf",e)},join(e){return wo(this).join(e)},lastIndexOf(...e){return Tr(this,"lastIndexOf",e)},map(e,n){return Hn(this,"map",e,n,void 0,arguments)},pop(){return Jo(this,"pop")},push(...e){return Jo(this,"push",e)},reduce(e,...n){return li(this,"reduce",e,n)},reduceRight(e,...n){return li(this,"reduceRight",e,n)},shift(){return Jo(this,"shift")},some(e,n){return Hn(this,"some",e,n,void 0,arguments)},splice(...e){return Jo(this,"splice",e)},toReversed(){return wo(this).toReversed()},toSorted(e){return wo(this).toSorted(e)},toSpliced(...e){return wo(this).toSpliced(...e)},unshift(...e){return Jo(this,"unshift",e)},values(){return Br(this,"values",e=>Ln(this,e))}};function Br(e,n,o){const a=dr(e),r=a[n]();return a!==e&&!Tn(e)&&(r._next=r.next,r.next=()=>{const i=r._next();return i.done||(i.value=o(i.value)),i}),r}const su=Array.prototype;function Hn(e,n,o,a,r,i){const s=dr(e),l=s!==e&&!Tn(e),c=s[n];if(c!==su[n]){const m=c.apply(e,i);return l?Pn(m):m}let u=o;s!==e&&(l?u=function(m,f){return o.call(this,Ln(e,m),f,e)}:o.length>2&&(u=function(m,f){return o.call(this,m,f,e)}));const d=c.call(s,u,a);return l&&r?r(d):d}function li(e,n,o,a){const r=dr(e),i=r!==e&&!Tn(e);let s=o,l=!1;r!==e&&(i?(l=a.length===0,s=function(u,d,m){return l&&(l=!1,u=Ln(e,u)),o.call(this,u,Ln(e,d),m,e)}):o.length>3&&(s=function(u,d,m){return o.call(this,u,d,m,e)}));const c=r[n](s,...a);return l?Ln(e,c):c}function Tr(e,n,o){const a=Ve(e);on(a,"iterate",ha);const r=a[n](...o);return(r===-1||r===!1)&&zt(o[0])?(o[0]=Ve(o[0]),a[n](...o)):r}function Jo(e,n,o=[]){eo(),jt();const a=Ve(e)[n].apply(e,o);return Lt(),no(),a}const lu=Pt("__proto__,__v_isRef,__isVue"),ll=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(In));function cu(e){In(e)||(e=String(e));const n=Ve(this);return on(n,"has",e),n.hasOwnProperty(e)}class cl{constructor(n=!1,o=!1){this._isReadonly=n,this._isShallow=o}get(n,o,a){if(o==="__v_skip")return n.__v_skip;const r=this._isReadonly,i=this._isShallow;if(o==="__v_isReactive")return!r;if(o==="__v_isReadonly")return r;if(o==="__v_isShallow")return i;if(o==="__v_raw")return a===(r?i?_u:pl:i?ml:dl).get(n)||Object.getPrototypeOf(n)===Object.getPrototypeOf(a)?n:void 0;const s=Ne(n);if(!r){let c;if(s&&(c=iu[o]))return c;if(o==="hasOwnProperty")return cu}const l=Reflect.get(n,o,tn(n)?n:a);if((In(o)?ll.has(o):lu(o))||(r||on(n,"get",o),i))return l;if(tn(l)){const c=s&&Vt(o)?l:l.value;return r&&qe(c)?ht(c):c}return qe(l)?r?ht(l):Sa(l):l}}class ul extends cl{constructor(n=!1){super(!1,n)}set(n,o,a,r){let i=n[o];const s=Ne(n)&&Vt(o);if(!this._isShallow){const u=oo(i);if(!Tn(a)&&!oo(a)&&(i=Ve(i),a=Ve(a)),!s&&tn(i)&&!tn(a))return u||(i.value=a),!0}const l=s?Number(o)<n.length:je(n,o),c=Reflect.set(n,o,a,tn(n)?n:r);return n===Ve(r)&&c&&(l?$n(a,i)&&Yn(n,"set",o,a):Yn(n,"add",o,a)),c}deleteProperty(n,o){const a=je(n,o);n[o];const r=Reflect.deleteProperty(n,o);return r&&a&&Yn(n,"delete",o,void 0),r}has(n,o){const a=Reflect.has(n,o);return(!In(o)||!ll.has(o))&&on(n,"has",o),a}ownKeys(n){return on(n,"iterate",Ne(n)?"length":Bo),Reflect.ownKeys(n)}}class uu extends cl{constructor(n=!1){super(!0,n)}set(n,o){return!0}deleteProperty(n,o){return!0}}const du=new ul,mu=new uu,pu=new ul(!0);const ft=e=>e,Oa=e=>Reflect.getPrototypeOf(e);function fu(e,n,o){return function(...a){const r=this.__v_raw,i=Ve(r),s=Oo(i),l=e==="entries"||e===Symbol.iterator&&s,c=e==="keys"&&s,u=r[e](...a),d=o?ft:n?qo:Pn;return!n&&on(i,"iterate",c?pt:Bo),Je(Object.create(u),{next(){const{value:m,done:f}=u.next();return f?{value:m,done:f}:{value:l?[d(m[0]),d(m[1])]:d(m),done:f}}})}}function Va(e){return function(...n){return e==="delete"?!1:e==="clear"?void 0:this}}function hu(e,n){const o={get(r){const i=this.__v_raw,s=Ve(i),l=Ve(r);e||($n(r,l)&&on(s,"get",r),on(s,"get",l));const{has:c}=Oa(s),u=n?ft:e?qo:Pn;if(c.call(s,r))return u(i.get(r));if(c.call(s,l))return u(i.get(l));i!==s&&i.get(r)},get size(){const r=this.__v_raw;return!e&&on(Ve(r),"iterate",Bo),r.size},has(r){const i=this.__v_raw,s=Ve(i),l=Ve(r);return e||($n(r,l)&&on(s,"has",r),on(s,"has",l)),r===l?i.has(r):i.has(r)||i.has(l)},forEach(r,i){const s=this,l=s.__v_raw,c=Ve(l),u=n?ft:e?qo:Pn;return!e&&on(c,"iterate",Bo),l.forEach((d,m)=>r.call(i,u(d),u(m),s))}};return Je(o,e?{add:Va("add"),set:Va("set"),delete:Va("delete"),clear:Va("clear")}:{add(r){const i=Ve(this),s=Oa(i),l=Ve(r),c=!n&&!Tn(r)&&!oo(r)?l:r;return s.has.call(i,c)||$n(r,c)&&s.has.call(i,r)||$n(l,c)&&s.has.call(i,l)||(i.add(c),Yn(i,"add",c,c)),this},set(r,i){!n&&!Tn(i)&&!oo(i)&&(i=Ve(i));const s=Ve(this),{has:l,get:c}=Oa(s);let u=l.call(s,r);u||(r=Ve(r),u=l.call(s,r));const d=c.call(s,r);return s.set(r,i),u?$n(i,d)&&Yn(s,"set",r,i):Yn(s,"add",r,i),this},delete(r){const i=Ve(this),{has:s,get:l}=Oa(i);let c=s.call(i,r);c||(r=Ve(r),c=s.call(i,r)),l&&l.call(i,r);const u=i.delete(r);return c&&Yn(i,"delete",r,void 0),u},clear(){const r=Ve(this),i=r.size!==0,s=r.clear();return i&&Yn(r,"clear",void 0,void 0),s}}),["keys","values","entries",Symbol.iterator].forEach(r=>{o[r]=fu(r,e,n)}),o}function Mt(e,n){const o=hu(e,n);return(a,r,i)=>r==="__v_isReactive"?!e:r==="__v_isReadonly"?e:r==="__v_raw"?a:Reflect.get(je(o,r)&&r in a?o:a,r,i)}const vu={get:Mt(!1,!1)},gu={get:Mt(!1,!0)},bu={get:Mt(!0,!1)};const dl=new WeakMap,ml=new WeakMap,pl=new WeakMap,_u=new WeakMap;function yu(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Sa(e){return oo(e)?e:Ft(e,!1,du,vu,dl)}function fl(e){return Ft(e,!1,pu,gu,ml)}function ht(e){return Ft(e,!0,mu,bu,pl)}function Ft(e,n,o,a,r){if(!qe(e)||e.__v_raw&&!(n&&e.__v_isReactive)||e.__v_skip||!Object.isExtensible(e))return e;const i=r.get(e);if(i)return i;const s=yu(Uc(e));if(s===0)return e;const l=new Proxy(e,s===2?a:o);return r.set(e,l),l}function To(e){return oo(e)?To(e.__v_raw):!!(e&&e.__v_isReactive)}function oo(e){return!!(e&&e.__v_isReadonly)}function Tn(e){return!!(e&&e.__v_isShallow)}function zt(e){return e?!!e.__v_raw:!1}function Ve(e){const n=e&&e.__v_raw;return n?Ve(n):e}function Au(e){return!je(e,"__v_skip")&&Object.isExtensible(e)&&Js(e,"__v_skip",!0),e}const Pn=e=>qe(e)?Sa(e):e,qo=e=>qe(e)?ht(e):e;function tn(e){return e?e.__v_isRef===!0:!1}function Te(e){return hl(e,!1)}function Nu(e){return hl(e,!0)}function hl(e,n){return tn(e)?e:new xu(e,n)}class xu{constructor(n,o){this.dep=new $t,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=o?n:Ve(n),this._value=o?n:Pn(n),this.__v_isShallow=o}get value(){return this.dep.track(),this._value}set value(n){const o=this._rawValue,a=this.__v_isShallow||Tn(n)||oo(n);n=a?n:Ve(n),$n(n,o)&&(this._rawValue=n,this._value=a?n:Pn(n),this.dep.trigger())}}function X(e){return tn(e)?e.value:e}const Bu={get:(e,n,o)=>n==="__v_raw"?e:X(Reflect.get(e,n,o)),set:(e,n,o,a)=>{const r=e[n];return tn(r)&&!tn(o)?(r.value=o,!0):Reflect.set(e,n,o,a)}};function vl(e){return To(e)?e:new Proxy(e,Bu)}class Tu{constructor(n,o,a){this.fn=n,this.setter=o,this._value=void 0,this.dep=new $t(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=fa-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!o,this.isSSR=a}notify(){if(this.flags|=16,!(this.flags&8)&&Me!==this)return ol(this,!0),!0}get value(){const n=this.dep.track();return tl(this),n&&(n.version=this.dep.version),this._value}set value(n){this.setter&&this.setter(n)}}function Ru(e,n,o=!1){let a,r;return Se(e)?a=e:(a=e.get,r=e.set),new Tu(a,r,o)}const Da={},Ua=new WeakMap;let yo;function Su(e,n=!1,o=yo){if(o){let a=Ua.get(o);a||Ua.set(o,a=[]),a.push(e)}}function wu(e,n,o=$e){const{immediate:a,deep:r,once:i,scheduler:s,augmentJob:l,call:c}=o,u=x=>r?x:Tn(x)||r===!1||r===0?Jn(x,1):Jn(x);let d,m,f,v,N=!1,B=!1;if(tn(e)?(m=()=>e.value,N=Tn(e)):To(e)?(m=()=>u(e),N=!0):Ne(e)?(B=!0,N=e.some(x=>To(x)||Tn(x)),m=()=>e.map(x=>{if(tn(x))return x.value;if(To(x))return u(x);if(Se(x))return c?c(x,2):x()})):Se(e)?n?m=c?()=>c(e,2):e:m=()=>{if(f){eo();try{f()}finally{no()}}const x=yo;yo=d;try{return c?c(e,3,[v]):e(v)}finally{yo=x}}:m=Fn,n&&r){const x=m,se=r===!0?1/0:r;m=()=>Jn(x(),se)}const D=au(),Q=()=>{d.stop(),D&&D.active&&Ot(D.effects,d)};if(i&&n){const x=n;n=(...se)=>{const Z=x(...se);return Q(),Z}}let R=B?new Array(e.length).fill(Da):Da;const w=x=>{if(!(!(d.flags&1)||!d.dirty&&!x))if(n){const se=d.run();if(x||r||N||(B?se.some((Z,q)=>$n(Z,R[q])):$n(se,R))){f&&f();const Z=yo;yo=d;try{const q=[se,R===Da?void 0:B&&R[0]===Da?[]:R,v];R=se,c?c(n,3,q):n(...q)}finally{yo=Z}}}else d.run()};return l&&l(w),d=new el(m),d.scheduler=s?()=>s(w,!1):w,v=x=>Su(x,!1,d),f=d.onStop=()=>{const x=Ua.get(d);if(x){if(c)c(x,4);else for(const se of x)se();Ua.delete(d)}},n?a?w(!0):R=d.run():s?s(w.bind(null,!0),!0):d.run(),Q.pause=d.pause.bind(d),Q.resume=d.resume.bind(d),Q.stop=Q,Q}function Jn(e,n=1/0,o){if(n<=0||!qe(e)||e.__v_skip||(o=o||new Map,(o.get(e)||0)>=n))return e;if(o.set(e,n),n--,tn(e))Jn(e.value,n,o);else if(Ne(e))for(let a=0;a<e.length;a++)Jn(e[a],n,o);else if(Ko(e)||Oo(e))e.forEach(a=>{Jn(a,n,o)});else if(Ys(e)){for(const a in e)Jn(e[a],n,o);for(const a of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,a)&&Jn(e[a],n,o)}return e}function wa(e,n,o,a){try{return a?e(...a):e()}catch(r){mr(r,n,o)}}function Rn(e,n,o,a){if(Se(e)){const r=wa(e,n,o,a);return r&&Gs(r)&&r.catch(i=>{mr(i,n,o)}),r}if(Ne(e)){const r=[];for(let i=0;i<e.length;i++)r.push(Rn(e[i],n,o,a));return r}}function mr(e,n,o,a=!0){const r=n?n.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:s}=n&&n.appContext.config||$e;if(n){let l=n.parent;const c=n.proxy,u=`https://vuejs.org/error-reference/#runtime-${o}`;for(;l;){const d=l.ec;if(d){for(let m=0;m<d.length;m++)if(d[m](e,c,u)===!1)return}l=l.parent}if(i){eo(),wa(i,null,10,[e,c,u]),no();return}}Eu(e,o,r,a,s)}function Eu(e,n,o,a=!0,r=!1){if(r)throw e;console.error(e)}const mn=[];let jn=-1;const Vo=[];let lo=null,Co=0;const gl=Promise.resolve();let Ka=null;function $o(e){const n=Ka||gl;return e?n.then(this?e.bind(this):e):n}function Cu(e){let n=jn+1,o=mn.length;for(;n<o;){const a=n+o>>>1,r=mn[a],i=va(r);i<e||i===e&&r.flags&2?n=a+1:o=a}return n}function Ht(e){if(!(e.flags&1)){const n=va(e),o=mn[mn.length-1];!o||!(e.flags&2)&&n>=va(o)?mn.push(e):mn.splice(Cu(n),0,e),e.flags|=1,bl()}}function bl(){Ka||(Ka=gl.then(yl))}function ku(e){if(!Ne(e))lo&&e.id===-1?lo.splice(Co+1,0,e):e.flags&1||(Vo.push(e),e.flags|=1);else for(let n=0;n<e.length;n++)Vo.push(e[n]);bl()}function ci(e,n,o=jn+1){for(;o<mn.length;o++){const a=mn[o];if(a&&a.flags&2){if(e&&a.id!==e.uid)continue;mn.splice(o,1),o--,a.flags&4&&(a.flags&=-2),a(),a.flags&4||(a.flags&=-2)}}}function _l(e){if(Vo.length){const n=[...new Set(Vo)].sort((o,a)=>va(o)-va(a));if(Vo.length=0,lo){for(let o=0;o<n.length;o++)lo.push(n[o]);return}for(lo=n,Co=0;Co<lo.length;Co++){const o=lo[Co];o.flags&4&&(o.flags&=-2),o.flags&8||o(),o.flags&=-2}lo=null,Co=0}}const va=e=>e.id==null?e.flags&2?-1:1/0:e.id;function yl(e){try{for(jn=0;jn<mn.length;jn++){const n=mn[jn];n&&!(n.flags&8)&&(n.flags&4&&(n.flags&=-2),wa(n,n.i,n.i?15:14),n.flags&4||(n.flags&=-2))}}finally{for(;jn<mn.length;jn++){const n=mn[jn];n&&(n.flags&=-2)}jn=-1,mn.length=0,_l(),Ka=null,(mn.length||Vo.length)&&yl()}}let Xe=null,Al=null;function Ga(e){const n=Xe;return Xe=e,Al=e&&e.type.__scopeId||null,n}function pe(e,n=Xe,o){if(!n||e._n)return e;const a=(...r)=>{a._d&&Qa(-1);const i=Ga(n),s=Qn.length;let l;try{l=e(...r)}finally{for(let c=Qn.length;c>s;c--)Jt();Ga(i),a._d&&Qa(1)}return l};return a._n=!0,a._c=!0,a._d=!0,a}function Cn(e,n){if(Xe===null)return e;const o=br(Xe),a=e.dirs||(e.dirs=[]);for(let r=0;r<n.length;r++){let[i,s,l,c=$e]=n[r];i&&(Se(i)&&(i={mounted:i,updated:i}),i.deep&&Jn(s),a.push({dir:i,instance:o,value:s,oldValue:void 0,arg:l,modifiers:c}))}return e}function ho(e,n,o,a){const r=e.dirs,i=n&&n.dirs;for(let s=0;s<r.length;s++){const l=r[s];i&&(l.oldValue=i[s].value);let c=l.dir[a];c&&(eo(),Rn(c,o,8,[e.el,l,e,n]),no())}}function la(e,n){if(rn){let o=rn.provides;const a=rn.parent&&rn.parent.provides;a===o&&(o=rn.provides=Object.create(a)),o[e]=n}}function ze(e,n,o=!1){const a=oc();if(a||jo){let r=jo?jo._context.provides:a?a.parent==null||a.ce?a.vnode.appContext&&a.vnode.appContext.provides:a.parent.provides:void 0;if(r&&e in r)return r[e];if(arguments.length>1)return o&&Se(n)?n.call(a&&a.proxy):n}}const Iu=Symbol.for("v-scx"),Pu=()=>ze(Iu);function Ro(e,n,o){return Nl(e,n,o)}function Nl(e,n,o=$e){const{immediate:a,deep:r,flush:i,once:s}=o,l=Je({},o),c=n&&a||!n&&i!=="post";let u;if(Aa){if(i==="sync"){const v=Pu();u=v.__watcherHandles||(v.__watcherHandles=[])}else if(!c){const v=()=>{};return v.stop=Fn,v.resume=Fn,v.pause=Fn,v}}const d=rn;l.call=(v,N,B)=>Rn(v,d,N,B);let m=!1;i==="post"?l.scheduler=v=>{ln(v,d&&d.suspense)}:i!=="sync"&&(m=!0,l.scheduler=(v,N)=>{N?v():Ht(v)}),l.augmentJob=v=>{n&&(v.flags|=4),m&&(v.flags|=2,d&&(v.id=d.uid,v.i=d))};const f=wu(e,n,l);return Aa&&(u?u.push(f):c&&f()),f}function Ou(e,n,o){const a=this.proxy,r=Fe(e)?e.includes(".")?xl(a,e):()=>a[e]:e.bind(a,a);let i;Se(n)?i=n:(i=n.handler,o=n);const s=Ea(this),l=Nl(r,i.bind(a),o);return s(),l}function xl(e,n){const o=n.split(".");return()=>{let a=e;for(let r=0;r<o.length&&a;r++)a=a[o[r]];return a}}const so=new WeakMap,Bl=Symbol("_vte"),pr=e=>e.__isTeleport,Ao=e=>e&&(e.disabled||e.disabled===""),Vu=e=>e&&(e.defer||e.defer===""),ui=e=>typeof SVGElement<"u"&&e instanceof SVGElement,di=e=>typeof MathMLElement=="function"&&e instanceof MathMLElement,vt=(e,n)=>{const o=e&&e.to;return Fe(o)?n?n(o):null:o},Du={name:"Teleport",__isTeleport:!0,process(e,n,o,a,r,i,s,l,c,u){const{mc:d,pc:m,pbc:f,o:{insert:v,querySelector:N,createText:B,createComment:D,parentNode:Q}}=u,R=Ao(n.props);let{dynamicChildren:w}=n;const x=(q,ae,re)=>{q.shapeFlag&16&&d(q.children,ae,re,r,i,s,l,c)},se=(q=n)=>{const ae=Ao(q.props),re=q.target=vt(q.props,N),ge=gt(re,q,B,v);re&&(s!=="svg"&&ui(re)?s="svg":s!=="mathml"&&di(re)&&(s="mathml"),r&&r.isCE&&(r.ce._teleportTargets||(r.ce._teleportTargets=new Set)).add(re),ae||(x(q,re,ge),oa(q,!1)))},Z=q=>{const ae=()=>{if(so.get(q)===ae){if(so.delete(q),Ao(q.props)){const re=Q(q.el)||o;x(q,re,q.anchor),oa(q,!0)}se(q)}};so.set(q,ae),ln(ae,i)};if(e==null){const q=n.el=B(""),ae=n.anchor=B("");if(v(q,o,a),v(ae,o,a),Vu(n.props)||i&&i.pendingBranch){Z(n);return}R&&(x(n,o,ae),oa(n,!0)),se()}else{n.el=e.el;const q=n.anchor=e.anchor,ae=so.get(e);if(ae){ae.flags|=8,so.delete(e),Z(n);return}n.targetStart=e.targetStart;const re=n.target=e.target,ge=n.targetAnchor=e.targetAnchor,ee=Ao(e.props),T=ee?o:re,L=ee?q:ge;if(s==="svg"||ui(re)?s="svg":(s==="mathml"||di(re))&&(s="mathml"),w?(f(e.dynamicChildren,w,T,r,i,s,l),Yt(e,n,!0)):c||m(e,n,T,L,r,i,s,l,!1),R)ee?n.props&&e.props&&n.props.to!==e.props.to&&(n.props.to=e.props.to):ja(n,o,q,u,1);else if((n.props&&n.props.to)!==(e.props&&e.props.to)){const Y=vt(n.props,N);Y&&(n.target=Y,ja(n,Y,null,u,0))}else ee&&ja(n,re,ge,u,1);oa(n,R)}},remove(e,n,o,{um:a,o:{remove:r}},i){const{shapeFlag:s,children:l,anchor:c,targetStart:u,targetAnchor:d,target:m,props:f}=e,v=Ao(f),N=i||!v,B=so.get(e);if(B&&(B.flags|=8,so.delete(e)),m&&(r(u),r(d)),i&&r(c),!B&&(v||m)&&s&16)for(let D=0;D<l.length;D++){const Q=l[D];a(Q,n,o,N,!!Q.dynamicChildren)}},move:ja,hydrate:ju};function ja(e,n,o,{o:{insert:a},m:r},i=2){i===0&&a(e.targetAnchor,n,o);const{el:s,anchor:l,shapeFlag:c,children:u,props:d}=e,m=i===2;if(m&&a(s,n,o),!so.has(e)&&(!m||Ao(d))&&c&16)for(let f=0;f<u.length;f++)r(u[f],n,o,2);m&&a(l,n,o)}function ju(e,n,o,a,r,i,{o:{nextSibling:s,parentNode:l,querySelector:c,insert:u,createText:d}},m){function f(D,Q){let R=Q;for(;R;){if(R&&R.nodeType===8){if(R.data==="teleport start anchor")n.targetStart=R;else if(R.data==="teleport anchor"){n.targetAnchor=R,D._lpa=n.targetAnchor&&s(n.targetAnchor);break}}R=s(R)}}function v(D,Q){Q.anchor=m(s(D),Q,l(D),o,a,r,i)}const N=n.target=vt(n.props,c),B=Ao(n.props);if(N){const D=N._lpa||N.firstChild;n.shapeFlag&16&&(B?(v(e,n),f(N,D),n.targetAnchor||gt(N,n,d,u,l(e)===N?e:null)):(n.anchor=s(e),f(N,D),n.targetAnchor||gt(N,n,d,u),m(D&&s(D),n,N,o,a,r,i))),oa(n,B)}else B&&n.shapeFlag&16&&(v(e,n),n.targetStart=e,n.targetAnchor=s(e));return n.anchor&&s(n.anchor)}const Tl=Du;function oa(e,n){const o=e.ctx;if(o&&o.ut){let a,r;for(n?(a=e.el,r=e.anchor):(a=e.targetStart,r=e.targetAnchor);a&&a!==r;)a.nodeType===1&&a.setAttribute("data-v-owner",o.uid),a=a.nextSibling;o.ut()}}function gt(e,n,o,a,r=null){const i=n.targetStart=o(""),s=n.targetAnchor=o("");return i[Bl]=s,e&&(a(i,e,r),a(s,e,r)),s}const xn=Symbol("_leaveCb"),Qo=Symbol("_enterCb");function Lu(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Vn(()=>{e.isMounted=!0}),Ut(()=>{e.isUnmounting=!0}),e}const Nn=[Function,Array],Rl={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Nn,onEnter:Nn,onAfterEnter:Nn,onEnterCancelled:Nn,onBeforeLeave:Nn,onLeave:Nn,onAfterLeave:Nn,onLeaveCancelled:Nn,onBeforeAppear:Nn,onAppear:Nn,onAfterAppear:Nn,onAppearCancelled:Nn},Sl=e=>{const n=e.subTree;return n.component?Sl(n.component):n},qu={name:"BaseTransition",props:Rl,setup(e,{slots:n}){const o=oc(),a=Lu();return()=>{const r=n.default&&Cl(n.default(),!0),i=r&&r.length?wl(r):o.subTree?ye():void 0;if(!i)return;const s=Ve(e),{mode:l}=s;if(a.isLeaving)return Rr(i);const c=Wa(i);if(!c)return Rr(i);let u=bt(c,s,a,o,m=>u=m);c.type!==an&&ga(c,u);let d=o.subTree&&Wa(o.subTree);if(d&&d.type!==an&&!No(d,c)&&Sl(o).type!==an){let m=bt(d,s,a,o);if(ga(d,m),l==="out-in"&&c.type!==an)return a.isLeaving=!0,m.afterLeave=()=>{a.isLeaving=!1,o.job.flags&8||o.update(),delete m.afterLeave,d=void 0},Rr(i);l==="in-out"&&c.type!==an?m.delayLeave=(f,v,N)=>{const B=El(a,d);B[String(d.key)]=d,f[xn]=()=>{v(),f[xn]=void 0,delete u.delayedLeave,d=void 0},u.delayedLeave=()=>{N(),delete u.delayedLeave,d=void 0}}:d=void 0}else d&&(d=void 0);return i}}};function wl(e){let n=e[0];if(e.length>1){for(const o of e)if(o.type!==an){n=o;break}}return n}const $u=qu;function El(e,n){const{leavingVNodes:o}=e;let a=o.get(n.type);return a||(a=Object.create(null),o.set(n.type,a)),a}function bt(e,n,o,a,r){const{appear:i,mode:s,persisted:l=!1,onBeforeEnter:c,onEnter:u,onAfterEnter:d,onEnterCancelled:m,onBeforeLeave:f,onLeave:v,onAfterLeave:N,onLeaveCancelled:B,onBeforeAppear:D,onAppear:Q,onAfterAppear:R,onAppearCancelled:w}=n,x=String(e.key),se=El(o,e),Z=(re,ge)=>{re&&Rn(re,a,9,ge)},q=(re,ge)=>{const ee=ge[1];Z(re,ge),Ne(re)?re.every(T=>T.length<=1)&&ee():re.length<=1&&ee()},ae={mode:s,persisted:l,beforeEnter(re){let ge=c;if(!o.isMounted)if(i)ge=D||c;else return;re[xn]&&re[xn](!0);const ee=se[x];ee&&No(e,ee)&&ee.el[xn]&&ee.el[xn](),Z(ge,[re])},enter(re){if(se[x]===e)return;let ge=u,ee=d,T=m;if(!o.isMounted)if(i)ge=Q||u,ee=R||d,T=w||m;else return;let L=!1;re[Qo]=de=>{L||(L=!0,de?Z(T,[re]):Z(ee,[re]),ae.delayedLeave&&ae.delayedLeave(),re[Qo]=void 0)};const Y=re[Qo].bind(null,!1);ge?q(ge,[re,Y]):Y()},leave(re,ge){const ee=String(e.key);if(re[Qo]&&re[Qo](!0),o.isUnmounting)return ge();Z(f,[re]);let T=!1;re[xn]=Y=>{T||(T=!0,ge(),Y?Z(B,[re]):Z(N,[re]),re[xn]=void 0,se[ee]===e&&delete se[ee])};const L=re[xn].bind(null,!1);se[ee]=e,v?q(v,[re,L]):L()},clone(re){const ge=bt(re,n,o,a,r);return r&&r(ge),ge}};return ae}function Rr(e){if(fr(e))return e=po(e),e.children=null,e}function Wa(e){if(!fr(e))return pr(e.type)&&e.children?wl(e.children):e;if(e.component)return e.component.subTree;const{shapeFlag:n,children:o}=e;if(o){if(n&16)return o[0];if(n&32&&Se(o.default))return o.default()}}function ga(e,n){if(e.shapeFlag&6&&e.component){e.transition=n;const o=e.component.subTree;ga(pr(o.type)&&Wa(o)||o,n)}else e.shapeFlag&128?(e.ssContent.transition=n.clone(e.ssContent),e.ssFallback.transition=n.clone(e.ssFallback)):e.transition=n}function Cl(e,n=!1,o){let a=[],r=0;for(let i=0;i<e.length;i++){let s=e[i];const l=o==null?s.key:String(o)+String(s.key!=null?s.key:i);s.type===Ee?(s.patchFlag&128&&r++,a=a.concat(Cl(s.children,n,l))):(n||s.type!==an)&&a.push(l!=null?po(s,{key:l}):s)}if(r>1)for(let i=0;i<a.length;i++)a[i].patchFlag=-2;return a}function kl(e,n){return Se(e)?Je({name:e.name},n,{setup:e}):e}function Il(e){e.ids=[e.ids[0]+e.ids[2]+++"-",0,0]}function mi(e,n){let o;return!!((o=Object.getOwnPropertyDescriptor(e,n))&&!o.configurable)}const Ya=new WeakMap;function ca(e,n,o,a,r=!1){if(Ne(e)){e.forEach((B,D)=>ca(B,n&&(Ne(n)?n[D]:n),o,a,r));return}if(Do(a)&&!r){a.shapeFlag&512&&a.type.__asyncResolved&&a.component.subTree.component&&ca(e,n,o,a.component.subTree);return}const i=a.shapeFlag&4?br(a.component):a.el,s=r?null:i,{i:l,r:c}=e,u=n&&n.r,d=l.refs===$e?l.refs={}:l.refs,m=l.setupState,f=Ve(m),v=m===$e?Ks:B=>mi(d,B)?!1:je(f,B),N=(B,D)=>!(D&&mi(d,D));if(u!=null&&u!==c){if(pi(n),Fe(u))d[u]=null,v(u)&&(m[u]=null);else if(tn(u)){const B=n;N(u,B.k)&&(u.value=null),B.k&&(d[B.k]=null)}}if(Se(c))wa(c,l,12,[s,d]);else{const B=Fe(c),D=tn(c);if(B||D){const Q=()=>{if(e.f){const R=B?v(c)?m[c]:d[c]:N()||!e.k?c.value:d[e.k];if(r)Ne(R)&&Ot(R,i);else if(Ne(R))R.includes(i)||R.push(i);else if(B)d[c]=[i],v(c)&&(m[c]=d[c]);else{const w=[i];N(c,e.k)&&(c.value=w),e.k&&(d[e.k]=w)}}else B?(d[c]=s,v(c)&&(m[c]=s)):D&&(N(c,e.k)&&(c.value=s),e.k&&(d[e.k]=s))};if(s){const R=()=>{Q(),Ya.delete(e)};R.id=-1,Ya.set(e,R),ln(R,o)}else pi(e),Q()}}}function pi(e){const n=Ya.get(e);n&&(n.flags|=8,Ya.delete(e))}cr().requestIdleCallback;cr().cancelIdleCallback;const Do=e=>!!e.type.__asyncLoader,fr=e=>e.type.__isKeepAlive;function Mu(e,n){Pl(e,"a",n)}function Fu(e,n){Pl(e,"da",n)}function Pl(e,n,o=rn){const a=e.__wdc||(e.__wdc=()=>{let r=o;for(;r;){if(r.isDeactivated)return;r=r.parent}return e()});if(hr(n,a,o),o){let r=o.parent;for(;r&&r.parent;)fr(r.parent.vnode)&&zu(a,n,o,r),r=r.parent}}function zu(e,n,o,a){const r=hr(n,e,a,!0);Kt(()=>{Ot(a[n],r)},o)}function hr(e,n,o=rn,a=!1){if(o){const r=o[e]||(o[e]=[]),i=n.__weh||(n.__weh=(...s)=>{eo();const l=Ea(o),c=Rn(n,o,e,s);return l(),no(),c});return a?r.unshift(i):r.push(i),i}}const ao=e=>(n,o=rn)=>{(!Aa||e==="sp")&&hr(e,(...a)=>n(...a),o)},Hu=ao("bm"),Vn=ao("m"),Uu=ao("bu"),Ku=ao("u"),Ut=ao("bum"),Kt=ao("um"),Gu=ao("sp"),Wu=ao("rtg"),Yu=ao("rtc");function Ju(e,n=rn){hr("ec",e,n)}const Ol="components",Qu="directives",Vl=Symbol.for("v-ndc");function Sr(e){return Fe(e)?Dl(Ol,e,!1)||e:e||Vl}function Xu(e){return Dl(Qu,e)}function Dl(e,n,o=!0,a=!1){const r=Xe||rn;if(r){const i=r.type;if(e===Ol){const l=Vd(i,!1);if(l&&(l===n||l===pn(n)||l===sr(pn(n))))return i}const s=fi(r[e]||i[e],n)||fi(r.appContext[e],n);return!s&&a?i:s}}function fi(e,n){return e&&(e[n]||e[pn(n)]||e[sr(pn(n))])}function fn(e,n,o,a){let r;const i=o,s=Ne(e);if(s||Fe(e)){const l=s&&To(e);let c=!1,u=!1;l&&(c=!Tn(e),u=oo(e),e=dr(e)),r=new Array(e.length);for(let d=0,m=e.length;d<m;d++)r[d]=n(c?u?qo(Pn(e[d])):Pn(e[d]):e[d],d,void 0,i)}else if(typeof e=="number"){r=new Array(e);for(let l=0;l<e;l++)r[l]=n(l+1,l,void 0,i)}else if(qe(e))if(e[Symbol.iterator])r=Array.from(e,(l,c)=>n(l,c,void 0,i));else{const l=Object.keys(e);r=new Array(l.length);for(let c=0,u=l.length;c<u;c++){const d=l[c];r[c]=n(e[d],d,c,i)}}else r=[];return r}function gn(e,n,o,a,r,i){if(o==null&&(o={}),Xe.ce||Xe.parent&&Do(Xe.parent)&&Xe.parent.ce){const u=o,d=Object.keys(u).length>0;return n!=="default"&&(u.name=n),C(),Pe(Ee,null,[F("slot",u,a&&a())],d?-2:64)}let s=e[n];s&&s._c&&(s._d=!1);const l=Qn.length;C();let c;try{const u=s&&jl(s(o)),d=o.key||i||u&&u.key;c=Pe(Ee,{key:(d&&!In(d)?d:`_${n}`)+(!u&&a?"_fb":"")},u||(a?a():[]),u&&e._===1?64:-2)}catch(u){for(let d=Qn.length;d>l;d--)Jt();throw u}finally{s&&s._c&&(s._d=!0)}return c.scopeId&&(c.slotScopeIds=[c.scopeId+"-s"]),c}function jl(e){return e.some(n=>_a(n)?!(n.type===an||n.type===Ee&&!jl(n.children)):!0)?e:null}function Zu(e,n){const o={};for(const a in e)o[Ma(a)]=e[a];return o}const _t=e=>e?ac(e)?br(e):_t(e.parent):null,ua=Je(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>_t(e.parent),$root:e=>_t(e.root),$host:e=>e.ce,$emit:e=>e.emit,$options:e=>ql(e),$forceUpdate:e=>e.f||(e.f=()=>{Ht(e.update)}),$nextTick:e=>e.n||(e.n=$o.bind(e.proxy)),$watch:e=>Ou.bind(e)}),wr=(e,n)=>e!==$e&&!e.__isScriptSetup&&je(e,n),ed={get({_:e},n){if(n==="__v_skip")return!0;const{ctx:o,setupState:a,data:r,props:i,accessCache:s,type:l,appContext:c}=e;if(n[0]!=="$"){const f=s[n];if(f!==void 0)switch(f){case 1:return a[n];case 2:return r[n];case 4:return o[n];case 3:return i[n]}else{if(wr(a,n))return s[n]=1,a[n];if(r!==$e&&je(r,n))return s[n]=2,r[n];if(je(i,n))return s[n]=3,i[n];if(o!==$e&&je(o,n))return s[n]=4,o[n];yt&&(s[n]=0)}}const u=ua[n];let d,m;if(u)return n==="$attrs"&&on(e.attrs,"get",""),u(e);if((d=l.__cssModules)&&(d=d[n]))return d;if(o!==$e&&je(o,n))return s[n]=4,o[n];if(m=c.config.globalProperties,je(m,n))return m[n]},set({_:e},n,o){const{data:a,setupState:r,ctx:i}=e;return wr(r,n)?(r[n]=o,!0):a!==$e&&je(a,n)?(a[n]=o,!0):je(e.props,n)||n[0]==="$"&&n.slice(1)in e?!1:(i[n]=o,!0)},has({_:{data:e,setupState:n,accessCache:o,ctx:a,appContext:r,props:i,type:s}},l){let c;return!!(o[l]||e!==$e&&l[0]!=="$"&&je(e,l)||wr(n,l)||je(i,l)||je(a,l)||je(ua,l)||je(r.config.globalProperties,l)||(c=s.__cssModules)&&c[l])},defineProperty(e,n,o){return o.get!=null?e._.accessCache[n]=0:je(o,"value")&&this.set(e,n,o.value,null),Reflect.defineProperty(e,n,o)}};function hi(e){return Ne(e)?e.reduce((n,o)=>(n[o]=null,n),{}):e}let yt=!0;function nd(e){const n=ql(e),o=e.proxy,a=e.ctx;yt=!1,n.beforeCreate&&vi(n.beforeCreate,e,"bc");const{data:r,computed:i,methods:s,watch:l,provide:c,inject:u,created:d,beforeMount:m,mounted:f,beforeUpdate:v,updated:N,activated:B,deactivated:D,beforeDestroy:Q,beforeUnmount:R,destroyed:w,unmounted:x,render:se,renderTracked:Z,renderTriggered:q,errorCaptured:ae,serverPrefetch:re,expose:ge,inheritAttrs:ee,components:T,directives:L,filters:Y}=n;if(u&&od(u,a,null),s)for(const we in s){const _e=s[we];Se(_e)&&(a[we]=_e.bind(o))}if(r){const we=r.call(o,o);qe(we)&&(e.data=Sa(we))}if(yt=!0,i)for(const we in i){const _e=i[we],Ze=Se(_e)?_e.bind(o,o):Se(_e.get)?_e.get.bind(o,o):Fn,en=!Se(_e)&&Se(_e.set)?_e.set.bind(o):Fn,vn=Le({get:Ze,set:en});Object.defineProperty(a,we,{enumerable:!0,configurable:!0,get:()=>vn.value,set:We=>vn.value=We})}if(l)for(const we in l)Ll(l[we],a,o,we);if(c){const we=Se(c)?c.call(o):c;Reflect.ownKeys(we).forEach(_e=>{la(_e,we[_e])})}d&&vi(d,e,"c");function H(we,_e){Ne(_e)?_e.forEach(Ze=>we(Ze.bind(o))):_e&&we(_e.bind(o))}if(H(Hu,m),H(Vn,f),H(Uu,v),H(Ku,N),H(Mu,B),H(Fu,D),H(Ju,ae),H(Yu,Z),H(Wu,q),H(Ut,R),H(Kt,x),H(Gu,re),Ne(ge))if(ge.length){const we=e.exposed||(e.exposed={});ge.forEach(_e=>{Object.defineProperty(we,_e,{get:()=>o[_e],set:Ze=>o[_e]=Ze,enumerable:!0})})}else e.exposed||(e.exposed={});se&&e.render===Fn&&(e.render=se),ee!=null&&(e.inheritAttrs=ee),T&&(e.components=T),L&&(e.directives=L),re&&Il(e)}function od(e,n,o=Fn){Ne(e)&&(e=At(e));for(const a in e){const r=e[a];let i;qe(r)?"default"in r?i=ze(r.from||a,r.default,!0):i=ze(r.from||a):i=ze(r),tn(i)?Object.defineProperty(n,a,{enumerable:!0,configurable:!0,get:()=>i.value,set:s=>i.value=s}):n[a]=i}}function vi(e,n,o){Rn(Ne(e)?e.map(a=>a.bind(n.proxy)):e.bind(n.proxy),n,o)}function Ll(e,n,o,a){let r=a.includes(".")?xl(o,a):()=>o[a];if(Fe(e)){const i=n[e];Se(i)&&Ro(r,i)}else if(Se(e))Ro(r,e.bind(o));else if(qe(e))if(Ne(e))e.forEach(i=>Ll(i,n,o,a));else{const i=Se(e.handler)?e.handler.bind(o):n[e.handler];Se(i)&&Ro(r,i,e)}}function ql(e){const n=e.type,{mixins:o,extends:a}=n,{mixins:r,optionsCache:i,config:{optionMergeStrategies:s}}=e.appContext,l=i.get(n);let c;return l?c=l:!r.length&&!o&&!a?c=n:(c={},r.length&&r.forEach(u=>Ja(c,u,s,!0)),Ja(c,n,s)),qe(n)&&i.set(n,c),c}function Ja(e,n,o,a=!1){const{mixins:r,extends:i}=n;i&&Ja(e,i,o,!0),r&&r.forEach(s=>Ja(e,s,o,!0));for(const s in n)if(!(a&&s==="expose")){const l=ad[s]||o&&o[s];e[s]=l?l(e[s],n[s]):n[s]}return e}const ad={data:gi,props:bi,emits:bi,methods:aa,computed:aa,beforeCreate:sn,created:sn,beforeMount:sn,mounted:sn,beforeUpdate:sn,updated:sn,beforeDestroy:sn,beforeUnmount:sn,destroyed:sn,unmounted:sn,activated:sn,deactivated:sn,errorCaptured:sn,serverPrefetch:sn,components:aa,directives:aa,watch:td,provide:gi,inject:rd};function gi(e,n){return n?e?function(){return Je(Se(e)?e.call(this,this):e,Se(n)?n.call(this,this):n)}:n:e}function rd(e,n){return aa(At(e),At(n))}function At(e){if(Ne(e)){const n={};for(let o=0;o<e.length;o++)n[e[o]]=e[o];return n}return e}function sn(e,n){return e?[...new Set([].concat(e,n))]:n}function aa(e,n){return e?Je(Object.create(null),e,n):n}function bi(e,n){return e?Ne(e)&&Ne(n)?[...new Set([...e,...n])]:Je(Object.create(null),hi(e),hi(n??{})):n}function td(e,n){if(!e)return n;if(!n)return e;const o=Je(Object.create(null),e);for(const a in n)o[a]=sn(e[a],n[a]);return o}function $l(){return{app:null,config:{isNativeTag:Ks,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let id=0;function sd(e,n){return function(a,r=null){Se(a)||(a=Je({},a)),r!=null&&!qe(r)&&(r=null);const i=$l(),s=new WeakSet,l=[];let c=!1;const u=i.app={_uid:id++,_component:a,_props:r,_container:null,_context:i,_instance:null,version:jd,get config(){return i.config},set config(d){},use(d,...m){return s.has(d)||(d&&Se(d.install)?(s.add(d),d.install(u,...m)):Se(d)&&(s.add(d),d(u,...m))),u},mixin(d){return i.mixins.includes(d)||i.mixins.push(d),u},component(d,m){return m?(i.components[d]=m,u):i.components[d]},directive(d,m){return m?(i.directives[d]=m,u):i.directives[d]},mount(d,m,f){if(!c){const v=u._ceVNode||F(a,r);return v.appContext=i,f===!0?f="svg":f===!1&&(f=void 0),e(v,d,f),c=!0,u._container=d,d.__vue_app__=u,br(v.component)}},onUnmount(d){l.push(d)},unmount(){c&&(Rn(l,u._instance,16),e(null,u._container),delete u._container.__vue_app__)},provide(d,m){return i.provides[d]=m,u},runWithContext(d){const m=jo;jo=u;try{return d()}finally{jo=m}}};return u}}let jo=null;const ld=(e,n)=>n==="modelValue"||n==="model-value"?e.modelModifiers:e[`${n}Modifiers`]||e[`${pn(n)}Modifiers`]||e[`${So(n)}Modifiers`];function cd(e,n,...o){if(e.isUnmounted)return;const a=e.vnode.props||$e;let r=o;const i=n.startsWith("update:"),s=i&&ld(a,n.slice(7));s&&(s.trim&&(r=o.map(d=>Fe(d)?d.trim():d)),s.number&&(r=o.map(lr)));let l,c=a[l=Ma(n)]||a[l=Ma(pn(n))];!c&&i&&(c=a[l=Ma(So(n))]),c&&Rn(c,e,6,r);const u=a[l+"Once"];if(u){if(!e.emitted)e.emitted={};else if(e.emitted[l])return;e.emitted[l]=!0,Rn(u,e,6,r)}}const ud=new WeakMap;function Ml(e,n,o=!1){const a=o?ud:n.emitsCache,r=a.get(e);if(r!==void 0)return r;const i=e.emits;let s={},l=!1;if(!Se(e)){const c=u=>{const d=Ml(u,n,!0);d&&(l=!0,Je(s,d))};!o&&n.mixins.length&&n.mixins.forEach(c),e.extends&&c(e.extends),e.mixins&&e.mixins.forEach(c)}return!i&&!l?(qe(e)&&a.set(e,null),null):(Ne(i)?i.forEach(c=>s[c]=null):Je(s,i),qe(e)&&a.set(e,s),s)}function vr(e,n){return!e||!rr(n)?!1:(n=n.slice(2),n=n==="Once"?n:n.replace(/Once$/,""),je(e,n[0].toLowerCase()+n.slice(1))||je(e,So(n))||je(e,n))}function _i(e){const{type:n,vnode:o,proxy:a,withProxy:r,propsOptions:[i],slots:s,attrs:l,emit:c,render:u,renderCache:d,props:m,data:f,setupState:v,ctx:N,inheritAttrs:B}=e,D=Ga(e);let Q,R;try{if(o.shapeFlag&4){const x=r||a,se=x;Q=qn(u.call(se,x,d,m,v,f,N)),R=l}else{const x=n;Q=qn(x.length>1?x(m,{attrs:l,slots:s,emit:c}):x(m,null)),R=n.props?l:dd(l)}}catch(x){Qn.length=0,mr(x,e,1),Q=F(an)}let w=Q;if(R&&B!==!1){const x=Object.keys(R),{shapeFlag:se}=w;x.length&&se&7&&(i&&x.some(tr)&&(R=md(R,i)),w=po(w,R,!1,!0))}if(o.dirs&&(w=po(w,null,!1,!0),w.dirs=w.dirs?w.dirs.concat(o.dirs):o.dirs),o.transition){const x=pr(w.type)&&Wa(w)||w;ga(x,o.transition)}return Q=w,Ga(D),Q}const dd=e=>{let n;for(const o in e)(o==="class"||o==="style"||rr(o))&&((n||(n={}))[o]=e[o]);return n},md=(e,n)=>{const o={};for(const a in e)(!tr(a)||!(a.slice(9)in n))&&(o[a]=e[a]);return o};function pd(e,n,o){const{props:a,children:r,component:i}=e,{props:s,children:l,patchFlag:c}=n,u=i.emitsOptions;if(n.dirs||n.transition)return!0;if(o&&c>=0){if(c&1024)return!0;if(c&16)return a?yi(a,s,u):!!s;if(c&8){const d=n.dynamicProps;for(let m=0;m<d.length;m++){const f=d[m];if(Fl(s,a,f)&&!vr(u,f))return!0}}}else return(r||l)&&(!l||!l.$stable)?!0:a===s?!1:a?s?yi(a,s,u):!0:!!s;return!1}function yi(e,n,o){const a=Object.keys(n);if(a.length!==Object.keys(e).length)return!0;for(let r=0;r<a.length;r++){const i=a[r];if(Fl(n,e,i)&&!vr(o,i))return!0}return!1}function Fl(e,n,o){const a=e[o],r=n[o];return o==="style"&&qe(a)&&qe(r)?!Go(a,r):a!==r}function fd({vnode:e,parent:n,suspense:o},a){for(;n;){const r=n.subTree;if(r.suspense&&r.suspense.activeBranch===e&&(r.suspense.vnode.el=r.el=a,e=r),r===e)(e=n.vnode).el=a,n=n.parent;else break}o&&o.activeBranch===e&&(o.vnode.el=a)}const zl={},Hl=()=>Object.create(zl),Ul=e=>Object.getPrototypeOf(e)===zl;function hd(e,n,o,a=!1){const r={},i=Hl();e.propsDefaults=Object.create(null),Kl(e,n,r,i);for(const s in e.propsOptions[0])s in r||(r[s]=void 0);o?e.props=a?r:fl(r):e.type.props?e.props=r:e.props=i,e.attrs=i}function vd(e,n,o,a){const{props:r,attrs:i,vnode:{patchFlag:s}}=e,l=Ve(r),[c]=e.propsOptions;let u=!1;if((a||s>0)&&!(s&16)){if(s&8){const d=e.vnode.dynamicProps;for(let m=0;m<d.length;m++){let f=d[m];if(vr(e.emitsOptions,f))continue;const v=n[f];if(c)if(je(i,f))v!==i[f]&&(i[f]=v,u=!0);else{const N=pn(f);r[N]=Nt(c,l,N,v,e,!1)}else v!==i[f]&&(i[f]=v,u=!0)}}}else{Kl(e,n,r,i)&&(u=!0);let d;for(const m in l)(!n||!je(n,m)&&((d=So(m))===m||!je(n,d)))&&(c?o&&(o[m]!==void 0||o[d]!==void 0)&&(r[m]=Nt(c,l,m,void 0,e,!0)):delete r[m]);if(i!==l)for(const m in i)(!n||!je(n,m))&&(delete i[m],u=!0)}u&&Yn(e.attrs,"set","")}function Kl(e,n,o,a){const[r,i]=e.propsOptions;let s=!1,l;if(n)for(let c in n){if(ta(c))continue;const u=n[c];let d;r&&je(r,d=pn(c))?!i||!i.includes(d)?o[d]=u:(l||(l={}))[d]=u:vr(e.emitsOptions,c)||(!(c in a)||u!==a[c])&&(a[c]=u,s=!0)}if(i){const c=Ve(o),u=l||$e;for(let d=0;d<i.length;d++){const m=i[d];o[m]=Nt(r,c,m,u[m],e,!je(u,m))}}return s}function Nt(e,n,o,a,r,i){const s=e[o];if(s!=null){const l=je(s,"default");if(l&&a===void 0){const c=s.default;if(s.type!==Function&&!s.skipFactory&&Se(c)){const{propsDefaults:u}=r;if(o in u)a=u[o];else{const d=Ea(r);a=u[o]=c.call(null,n),d()}}else a=c;r.ce&&r.ce._setProp(o,a)}s[0]&&(i&&!l?a=!1:s[1]&&(a===""||a===So(o))&&(a=!0))}return a}const gd=new WeakMap;function Gl(e,n,o=!1){const a=o?gd:n.propsCache,r=a.get(e);if(r)return r;const i=e.props,s={},l=[];let c=!1;if(!Se(e)){const d=m=>{c=!0;const[f,v]=Gl(m,n,!0);Je(s,f),v&&l.push(...v)};!o&&n.mixins.length&&n.mixins.forEach(d),e.extends&&d(e.extends),e.mixins&&e.mixins.forEach(d)}if(!i&&!c)return qe(e)&&a.set(e,Po),Po;if(Ne(i))for(let d=0;d<i.length;d++){const m=pn(i[d]);Ai(m)&&(s[m]=$e)}else if(i)for(const d in i){const m=pn(d);if(Ai(m)){const f=i[d],v=s[m]=Ne(f)||Se(f)?{type:f}:Je({},f),N=v.type;let B=!1,D=!0;if(Ne(N))for(let Q=0;Q<N.length;++Q){const R=N[Q],w=Se(R)&&R.name;if(w==="Boolean"){B=!0;break}else w==="String"&&(D=!1)}else B=Se(N)&&N.name==="Boolean";v[0]=B,v[1]=D,(B||je(v,"default"))&&l.push(m)}}const u=[s,l];return qe(e)&&a.set(e,u),u}function Ai(e){return e[0]!=="$"&&!ta(e)}const Gt=e=>e==="_"||e==="_ctx"||e==="$stable",Wt=e=>Ne(e)?e.map(qn):[qn(e)],bd=(e,n,o)=>{if(n._n)return n;const a=pe((...r)=>Wt(n(...r)),o);return a._c=!1,a},Wl=(e,n,o)=>{const a=e._ctx;for(const r in e){if(Gt(r))continue;const i=e[r];if(Se(i))n[r]=bd(r,i,a);else if(i!=null){const s=Wt(i);n[r]=()=>s}}},Yl=(e,n)=>{const o=Wt(n);e.slots.default=()=>o},Jl=(e,n,o)=>{for(const a in n)(o||!Gt(a))&&(e[a]=n[a])},_d=(e,n,o)=>{const a=e.slots=Hl();if(e.vnode.shapeFlag&32){const r=n._;r?(Jl(a,n,o),o&&Js(a,"_",r,!0)):Wl(n,a)}else n&&Yl(e,n)},yd=(e,n,o)=>{const{vnode:a,slots:r}=e;let i=!0,s=$e;if(a.shapeFlag&32){const l=n._;l?o&&l===1?i=!1:Jl(r,n,o):(i=!n.$stable,Wl(n,r)),s=n}else n&&(Yl(e,n),s={default:1});if(i)for(const l in r)!Gt(l)&&s[l]==null&&delete r[l]},ln=Td;function Ad(e){return Nd(e)}function Nd(e,n){const o=cr();o.__VUE__=!0;const{insert:a,remove:r,patchProp:i,createElement:s,createText:l,createComment:c,setText:u,setElementText:d,parentNode:m,nextSibling:f,setScopeId:v=Fn,insertStaticContent:N}=e,B=(h,g,y,O=null,$=null,k=null,te=void 0,oe=null,ne=!!g.dynamicChildren)=>{if(h===g)return;h&&!No(h,g)&&(O=P(h),We(h,$,k,!0),h=null),g.patchFlag===-2&&(ne=!1,g.dynamicChildren=null);const{type:z,ref:be,shapeFlag:ie}=g;switch(z){case gr:D(h,g,y,O);break;case an:Q(h,g,y,O);break;case za:h==null&&R(g,y,O,te);break;case Ee:T(h,g,y,O,$,k,te,oe,ne);break;default:ie&1?se(h,g,y,O,$,k,te,oe,ne):ie&6?L(h,g,y,O,$,k,te,oe,ne):(ie&64||ie&128)&&z.process(h,g,y,O,$,k,te,oe,ne,fe)}be!=null&&$?ca(be,h&&h.ref,k,g||h,!g):be==null&&h&&h.ref!=null&&ca(h.ref,null,k,h,!0)},D=(h,g,y,O)=>{if(h==null)a(g.el=l(g.children),y,O);else{const $=g.el=h.el;g.children!==h.children&&u($,g.children)}},Q=(h,g,y,O)=>{h==null?a(g.el=c(g.children||""),y,O):g.el=h.el},R=(h,g,y,O)=>{[h.el,h.anchor]=N(h.children,g,y,O,h.el,h.anchor)},w=({el:h,anchor:g},y,O)=>{let $;for(;h&&h!==g;)$=f(h),a(h,y,O),h=$;a(g,y,O)},x=({el:h,anchor:g})=>{let y;for(;h&&h!==g;)y=f(h),r(h),h=y;r(g)},se=(h,g,y,O,$,k,te,oe,ne)=>{if(g.type==="svg"?te="svg":g.type==="math"&&(te="mathml"),h==null)Z(g,y,O,$,k,te,oe,ne);else{const z=h.el&&h.el._isVueCE?h.el:null;try{z&&z._beginPatch(),re(h,g,$,k,te,oe,ne)}finally{z&&z._endPatch()}}},Z=(h,g,y,O,$,k,te,oe)=>{let ne,z;const{props:be,shapeFlag:ie,transition:he,dirs:xe}=h;if(ne=h.el=s(h.type,k,be&&be.is,be),ie&8?d(ne,h.children):ie&16&&ae(h.children,ne,null,O,$,Er(h,k),te,oe),xe&&ho(h,null,O,"created"),q(ne,h,h.scopeId,te,O),be){for(const Oe in be)Oe!=="value"&&!ta(Oe)&&i(ne,Oe,null,be[Oe],k,O);"value"in be&&i(ne,"value",null,be.value,k),(z=be.onVnodeBeforeMount)&&Dn(z,O,h)}xe&&ho(h,null,O,"beforeMount");const ke=xd($,he);ke&&he.beforeEnter(ne),a(ne,g,y),((z=be&&be.onVnodeMounted)||ke||xe)&&ln(()=>{z&&Dn(z,O,h),ke&&he.enter(ne),xe&&ho(h,null,O,"mounted")},$)},q=(h,g,y,O,$)=>{if(y&&v(h,y),O)for(let k=0;k<O.length;k++)v(h,O[k]);if($){let k=$.subTree;if(g===k||Zl(k.type)&&(k.ssContent===g||k.ssFallback===g)){const te=$.vnode;q(h,te,te.scopeId,te.slotScopeIds,$.parent)}}},ae=(h,g,y,O,$,k,te,oe,ne=0)=>{for(let z=ne;z<h.length;z++){const be=h[z]=oe?Wn(h[z]):qn(h[z]);B(null,be,g,y,O,$,k,te,oe)}},re=(h,g,y,O,$,k,te)=>{const oe=g.el=h.el;let{patchFlag:ne,dynamicChildren:z,dirs:be}=g;ne|=h.patchFlag&16;const ie=h.props||$e,he=g.props||$e;let xe;if(y&&vo(y,!1),(xe=he.onVnodeBeforeUpdate)&&Dn(xe,y,g,h),be&&ho(g,h,y,"beforeUpdate"),y&&vo(y,!0),z&&(!h.dynamicChildren||h.dynamicChildren.length!==z.length)&&(ne=0,te=!1,z=null),(ie.innerHTML&&he.innerHTML==null||ie.textContent&&he.textContent==null)&&d(oe,""),z?ge(h.dynamicChildren,z,oe,y,O,Er(g,$),k):te||_e(h,g,oe,null,y,O,Er(g,$),k,!1),ne>0){if(ne&16)ee(oe,ie,he,y,$);else if(ne&2&&ie.class!==he.class&&i(oe,"class",null,he.class,$),ne&4&&i(oe,"style",ie.style,he.style,$),ne&8){const ke=g.dynamicProps;for(let Oe=0;Oe<ke.length;Oe++){const t=ke[Oe],_=ie[t],E=he[t];(E!==_||t==="value")&&i(oe,t,_,E,$,y)}}ne&1&&h.children!==g.children&&d(oe,g.children)}else!te&&z==null&&ee(oe,ie,he,y,$);((xe=he.onVnodeUpdated)||be)&&ln(()=>{xe&&Dn(xe,y,g,h),be&&ho(g,h,y,"updated")},O)},ge=(h,g,y,O,$,k,te)=>{for(let oe=0;oe<g.length;oe++){const ne=h[oe],z=g[oe],be=ne.el&&(ne.type===Ee||!No(ne,z)||ne.shapeFlag&198)?m(ne.el):y;B(ne,z,be,null,O,$,k,te,!0)}},ee=(h,g,y,O,$)=>{if(g!==y){if(g!==$e)for(const k in g)!ta(k)&&!(k in y)&&i(h,k,g[k],null,$,O);for(const k in y){if(ta(k))continue;const te=y[k],oe=g[k];te!==oe&&k!=="value"&&i(h,k,oe,te,$,O)}"value"in y&&i(h,"value",g.value,y.value,$)}},T=(h,g,y,O,$,k,te,oe,ne)=>{const z=g.el=h?h.el:l(""),be=g.anchor=h?h.anchor:l("");let{patchFlag:ie,dynamicChildren:he,slotScopeIds:xe}=g;xe&&(oe=oe?oe.concat(xe):xe),h==null?(a(z,y,O),a(be,y,O),ae(g.children||[],y,be,$,k,te,oe,ne)):ie>0&&ie&64&&he&&h.dynamicChildren&&h.dynamicChildren.length===he.length?(ge(h.dynamicChildren,he,y,$,k,te,oe),(g.key!=null||$&&g===$.subTree)&&Yt(h,g,!0)):_e(h,g,y,be,$,k,te,oe,ne)},L=(h,g,y,O,$,k,te,oe,ne)=>{g.slotScopeIds=oe,h==null?g.shapeFlag&512?$.ctx.activate(g,y,O,te,ne):Y(g,y,O,$,k,te,ne):de(h,g,ne)},Y=(h,g,y,O,$,k,te)=>{const oe=h.component=Cd(h,O,$);if(fr(h)&&(oe.ctx.renderer=fe),kd(oe,!1,te),oe.asyncDep){if($&&$.registerDep(oe,H,te),!h.el){const ne=oe.subTree=F(an);Q(null,ne,g,y),h.placeholder=ne.el}}else H(oe,h,g,y,$,k,te)},de=(h,g,y)=>{const O=g.component=h.component;if(pd(h,g,y))if(O.asyncDep&&!O.asyncResolved){we(O,g,y);return}else O.next=g,O.update();else g.el=h.el,O.vnode=g},H=(h,g,y,O,$,k,te)=>{const oe=()=>{if(h.isMounted){let{next:ie,bu:he,u:xe,parent:ke,vnode:Oe}=h;{const S=Ql(h);if(S){ie&&(ie.el=Oe.el,we(h,ie,te)),S.asyncDep.then(()=>{ln(()=>{h.isUnmounted||z()},$)});return}}let t=ie,_;vo(h,!1),ie?(ie.el=Oe.el,we(h,ie,te)):ie=Oe,he&&Fa(he),(_=ie.props&&ie.props.onVnodeBeforeUpdate)&&Dn(_,ke,ie,Oe),vo(h,!0);const E=_i(h),I=h.subTree;h.subTree=E,B(I,E,m(I.el),P(I),h,$,k),ie.el=E.el,t===null&&fd(h,E.el),xe&&ln(xe,$),(_=ie.props&&ie.props.onVnodeUpdated)&&ln(()=>Dn(_,ke,ie,Oe),$)}else{let ie;const{el:he,props:xe}=g,{bm:ke,m:Oe,parent:t,root:_,type:E}=h,I=Do(g);vo(h,!1),ke&&Fa(ke),!I&&(ie=xe&&xe.onVnodeBeforeMount)&&Dn(ie,t,g),vo(h,!0);{_.ce&&_.ce._hasShadowRoot()&&_.ce._injectChildStyle(E,h.parent?h.parent.type:void 0);const S=h.subTree=_i(h);B(null,S,y,O,h,$,k),g.el=S.el}if(Oe&&ln(Oe,$),!I&&(ie=xe&&xe.onVnodeMounted)){const S=g;ln(()=>Dn(ie,t,S),$)}(g.shapeFlag&256||t&&Do(t.vnode)&&t.vnode.shapeFlag&256)&&h.a&&ln(h.a,$),h.isMounted=!0,g=y=O=null}};h.scope.on();const ne=h.effect=new el(oe);h.scope.off();const z=h.update=ne.run.bind(ne),be=h.job=ne.runIfDirty.bind(ne);be.i=h,be.id=h.uid,ne.scheduler=()=>Ht(be),vo(h,!0),z()},we=(h,g,y)=>{g.component=h;const O=h.vnode.props;h.vnode=g,h.next=null,vd(h,g.props,O,y),yd(h,g.children,y),eo(),ci(h),no()},_e=(h,g,y,O,$,k,te,oe,ne=!1)=>{const z=h&&h.children,be=h?h.shapeFlag:0,ie=g.children,{patchFlag:he,shapeFlag:xe}=g;if(he>0){if(he&128){en(z,ie,y,O,$,k,te,oe,ne);return}else if(he&256){Ze(z,ie,y,O,$,k,te,oe,ne);return}}xe&8?(be&16&&Ge(z,$,k),ie!==z&&d(y,ie)):be&16?xe&16?en(z,ie,y,O,$,k,te,oe,ne):Ge(z,$,k,!0):(be&8&&d(y,""),xe&16&&ae(ie,y,O,$,k,te,oe,ne))},Ze=(h,g,y,O,$,k,te,oe,ne)=>{h=h||Po,g=g||Po;const z=h.length,be=g.length,ie=Math.min(z,be);let he;for(he=0;he<ie;he++){const xe=g[he]=ne?Wn(g[he]):qn(g[he]);B(h[he],xe,y,null,$,k,te,oe,ne)}z>be?Ge(h,$,k,!0,!1,ie):ae(g,y,O,$,k,te,oe,ne,ie)},en=(h,g,y,O,$,k,te,oe,ne)=>{let z=0;const be=g.length;let ie=h.length-1,he=be-1;for(;z<=ie&&z<=he;){const xe=h[z],ke=g[z]=ne?Wn(g[z]):qn(g[z]);if(No(xe,ke))B(xe,ke,y,null,$,k,te,oe,ne);else break;z++}for(;z<=ie&&z<=he;){const xe=h[ie],ke=g[he]=ne?Wn(g[he]):qn(g[he]);if(No(xe,ke))B(xe,ke,y,null,$,k,te,oe,ne);else break;ie--,he--}if(z>ie){if(z<=he){const xe=he+1,ke=xe<be?g[xe].el:O;for(;z<=he;)B(null,g[z]=ne?Wn(g[z]):qn(g[z]),y,ke,$,k,te,oe,ne),z++}}else if(z>he)for(;z<=ie;)We(h[z],$,k,!0),z++;else{const xe=z,ke=z,Oe=new Map;for(z=ke;z<=he;z++){const A=g[z]=ne?Wn(g[z]):qn(g[z]);A.key!=null&&Oe.set(A.key,z)}let t,_=0;const E=he-ke+1;let I=!1,S=0;const K=new Array(E);for(z=0;z<E;z++)K[z]=0;for(z=xe;z<=ie;z++){const A=h[z];if(_>=E){We(A,$,k,!0);continue}let M;if(A.key!=null)M=Oe.get(A.key);else for(t=ke;t<=he;t++)if(K[t-ke]===0&&No(A,g[t])){M=t;break}M===void 0?We(A,$,k,!0):(K[M-ke]=z+1,M>=S?S=M:I=!0,B(A,g[M],y,null,$,k,te,oe,ne),_++)}const p=I?Bd(K):Po;for(t=p.length-1,z=E-1;z>=0;z--){const A=ke+z,M=g[A],V=g[A+1],j=A+1<be?V.el||Xl(V):O;K[z]===0?B(null,M,y,j,$,k,te,oe,ne):I&&(t<0||z!==p[t]?vn(M,y,j,2):t--)}}},vn=(h,g,y,O,$=null)=>{const{el:k,type:te,transition:oe,children:ne,shapeFlag:z}=h;if(z&6){vn(h.component.subTree,g,y,O);return}if(z&128){h.suspense.move(g,y,O);return}if(z&64){te.move(h,g,y,fe);return}if(te===Ee){a(k,g,y);for(let ie=0;ie<ne.length;ie++)vn(ne[ie],g,y,O);a(h.anchor,g,y);return}if(te===za){w(h,g,y);return}if(O!==2&&z&1&&oe)if(O===0)oe.persisted&&!k[xn]?a(k,g,y):(oe.beforeEnter(k),a(k,g,y),ln(()=>oe.enter(k),$));else{const{leave:ie,delayLeave:he,afterLeave:xe}=oe,ke=()=>{h.ctx.isUnmounted?r(k):a(k,g,y)},Oe=()=>{const t=k._isLeaving||!!k[xn];k._isLeaving&&k[xn](!0),oe.persisted&&!t?ke():ie(k,()=>{ke(),xe&&xe()})};he?he(k,ke,Oe):Oe()}else a(k,g,y)},We=(h,g,y,O=!1,$=!1)=>{const{type:k,props:te,ref:oe,children:ne,dynamicChildren:z,shapeFlag:be,patchFlag:ie,dirs:he,cacheIndex:xe,memo:ke}=h;if(ie===-2&&($=!1),oe!=null&&(eo(),ca(oe,null,y,h,!0),no()),xe!=null&&(g.renderCache[xe]=void 0),be&256){g.ctx.deactivate(h);return}const Oe=be&1&&he,t=!Do(h);let _;if(t&&(_=te&&te.onVnodeBeforeUnmount)&&Dn(_,g,h),be&6)Ke(h.component,y,O);else{if(be&128){h.suspense.unmount(y,O);return}Oe&&ho(h,null,g,"beforeUnmount"),be&64?h.type.remove(h,g,y,fe,O):z&&!z.hasOnce&&(k!==Ee||ie>0&&ie&64)?Ge(z,g,y,!1,!0):(k===Ee&&ie&384||!$&&be&16)&&Ge(ne,g,y),O&&bn(h)}const E=ke!=null&&xe==null;(t&&(_=te&&te.onVnodeUnmounted)||Oe||E)&&ln(()=>{_&&Dn(_,g,h),Oe&&ho(h,null,g,"unmounted"),E&&(h.el=null)},y)},bn=h=>{const{type:g,el:y,anchor:O,transition:$}=h;if(g===Ee){Sn(y,O);return}if(g===za){x(h);return}const k=()=>{r(y),$&&!$.persisted&&$.afterLeave&&$.afterLeave()};if(h.shapeFlag&1&&$&&!$.persisted){const{leave:te,delayLeave:oe}=$,ne=()=>te(y,k);oe?oe(h.el,k,ne):ne()}else k()},Sn=(h,g)=>{let y;for(;h!==g;)y=f(h),r(h),h=y;r(g)},Ke=(h,g,y)=>{const{bum:O,scope:$,job:k,subTree:te,um:oe,m:ne,a:z}=h;Ni(ne),Ni(z),O&&Fa(O),$.stop(),k&&(k.flags|=8,We(te,h,g,y)),oe&&ln(oe,g),ln(()=>{h.isUnmounted=!0},g)},Ge=(h,g,y,O=!1,$=!1,k=0)=>{for(let te=k;te<h.length;te++)We(h[te],g,y,O,$)},P=h=>{if(h.shapeFlag&6)return P(h.component.subTree);if(h.shapeFlag&128)return h.suspense.next();const g=f(h.anchor||h.el),y=g&&g[Bl];return y?f(y):g};let ce=!1;const J=(h,g,y)=>{let O;h==null?g._vnode&&(We(g._vnode,null,null,!0),O=g._vnode.component):B(g._vnode||null,h,g,null,null,null,y),g._vnode=h,ce||(ce=!0,ci(O),_l(),ce=!1)},fe={p:B,um:We,m:vn,r:bn,mt:Y,mc:ae,pc:_e,pbc:ge,n:P,o:e};return{render:J,hydrate:void 0,createApp:sd(J)}}function Er({type:e,props:n},o){return o==="svg"&&e==="foreignObject"||o==="mathml"&&e==="annotation-xml"&&n&&n.encoding&&n.encoding.includes("html")?void 0:o}function vo({effect:e,job:n},o){o?(e.flags|=32,n.flags|=4):(e.flags&=-33,n.flags&=-5)}function xd(e,n){return(!e||e&&!e.pendingBranch)&&n&&!n.persisted}function Yt(e,n,o=!1){const a=e.children,r=n.children;if(Ne(a)&&Ne(r))for(let i=0;i<a.length;i++){const s=a[i];let l=r[i];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=r[i]=Wn(r[i]),l.el=s.el),!o&&l.patchFlag!==-2&&Yt(s,l)),l.type===gr&&(l.patchFlag===-1&&(l=r[i]=Wn(l)),l.el=s.el),l.type===an&&!l.el&&(l.el=s.el)}}function Bd(e){const n=e.slice(),o=[0];let a,r,i,s,l;const c=e.length;for(a=0;a<c;a++){const u=e[a];if(u!==0){if(r=o[o.length-1],e[r]<u){n[a]=r,o.push(a);continue}for(i=0,s=o.length-1;i<s;)l=i+s>>1,e[o[l]]<u?i=l+1:s=l;u<e[o[i]]&&(i>0&&(n[a]=o[i-1]),o[i]=a)}}for(i=o.length,s=o[i-1];i-- >0;)o[i]=s,s=n[s];return o}function Ql(e){const n=e.subTree.component;if(n)return n.asyncDep&&!n.asyncResolved?n:Ql(n)}function Ni(e){if(e)for(let n=0;n<e.length;n++)e[n].flags|=8}function Xl(e){if(e.placeholder)return e.placeholder;const n=e.component;return n?Xl(n.subTree):null}const Zl=e=>e.__isSuspense;function Td(e,n){n&&n.pendingBranch?Ne(e)?n.effects.push(...e):n.effects.push(e):ku(e)}const Ee=Symbol.for("v-fgt"),gr=Symbol.for("v-txt"),an=Symbol.for("v-cmt"),za=Symbol.for("v-stc"),Qn=[];let _n=null;function C(e=!1){Qn.push(_n=e?null:[])}function Jt(){Qn.pop(),_n=Qn[Qn.length-1]||null}let ba=1;function Qa(e,n=!1){ba+=e,e<0&&_n&&n&&(_n.hasOnce=!0)}function ec(e){return e.dynamicChildren=ba>0?_n||Po:null,Jt(),ba>0&&_n&&_n.push(e),e}function W(e,n,o,a,r,i){return ec(b(e,n,o,a,r,i,!0))}function Pe(e,n,o,a,r){return ec(F(e,n,o,a,r,!0))}function _a(e){return e?e.__v_isVNode===!0:!1}function No(e,n){return e.type===n.type&&e.key===n.key}const nc=({key:e})=>e??null,Ha=({ref:e,ref_key:n,ref_for:o})=>(typeof e=="number"&&(e=""+e),e!=null?Fe(e)||tn(e)||Se(e)?{i:Xe,r:e,k:n,f:!!o}:e:null);function b(e,n=null,o=null,a=0,r=null,i=e===Ee?0:1,s=!1,l=!1){const c={__v_isVNode:!0,__v_skip:!0,type:e,props:n,key:n&&nc(n),ref:n&&Ha(n),scopeId:Al,slotScopeIds:null,children:o,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:a,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:Xe};return l?(Xa(c,o),i&128&&e.normalize(c)):o&&(c.shapeFlag|=Fe(o)?8:16),ba>0&&!s&&_n&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&_n.push(c),c}const F=Rd;function Rd(e,n=null,o=null,a=0,r=null,i=!1){if((!e||e===Vl)&&(e=an),_a(e)){const l=po(e,n,!0);return o&&Xa(l,o),ba>0&&!i&&_n&&(l.shapeFlag&6?_n[_n.indexOf(e)]=l:_n.push(l)),l.patchFlag=-2,l}if(Dd(e)&&(e=e.__vccOpts),n){n=En(n);let{class:l,style:c}=n;l&&!Fe(l)&&(n.class=dn(l)),qe(c)&&(zt(c)&&!Ne(c)&&(c=Je({},c)),n.style=ur(c))}const s=Fe(e)?1:Zl(e)?128:pr(e)?64:qe(e)?4:Se(e)?2:0;return b(e,n,o,a,r,s,i,!0)}function En(e){return e?zt(e)||Ul(e)?Je({},e):e:null}function po(e,n,o=!1,a=!1){const{props:r,ref:i,patchFlag:s,children:l,transition:c}=e,u=n?xt(r||{},n):r,d={__v_isVNode:!0,__v_skip:!0,type:e.type,props:u,key:u&&nc(u),ref:n&&n.ref?o&&i?Ne(i)?i.concat(Ha(n)):[i,Ha(n)]:Ha(n):i,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:l,target:e.target,targetStart:e.targetStart,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:n&&e.type!==Ee?s===-1?16:s|16:s,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:c,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&po(e.ssContent),ssFallback:e.ssFallback&&po(e.ssFallback),placeholder:e.placeholder,el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return c&&a&&ga(d,c.clone(d)),d}function Be(e=" ",n=0){return F(gr,null,e,n)}function Sd(e,n){const o=F(za,null,e);return o.staticCount=n,o}function ye(e="",n=!1){return n?(C(),Pe(an,null,e)):F(an,null,e)}function qn(e){return e==null||typeof e=="boolean"?F(an):Ne(e)?F(Ee,null,e.slice()):_a(e)?Wn(e):F(gr,null,String(e))}function Wn(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:po(e)}function Xa(e,n){let o=0;const{shapeFlag:a}=e;if(n==null)n=null;else if(Ne(n))o=16;else if(typeof n=="object")if(a&65){const r=n.default;r&&(r._c&&(r._d=!1),Xa(e,r()),r._c&&(r._d=!0));return}else{o=32;const r=n._;!r&&!Ul(n)?n._ctx=Xe:r===3&&Xe&&(Xe.slots._===1?n._=1:(n._=2,e.patchFlag|=1024))}else if(Se(n)){if(a&65){Xa(e,{default:n});return}n={default:n,_ctx:Xe},o=32}else n=String(n),a&64?(o=16,n=[Be(n)]):o=8;e.children=n,e.shapeFlag|=o}function xt(...e){const n={};for(let o=0;o<e.length;o++){const a=e[o];for(const r in a)if(r==="class")n.class!==a.class&&(n.class=dn([n.class,a.class]));else if(r==="style")n.style=ur([n.style,a.style]);else if(rr(r)){const i=n[r],s=a[r];s&&i!==s&&!(Ne(i)&&i.includes(s))?n[r]=i?[].concat(i,s):s:s==null&&i==null&&!tr(r)&&(n[r]=s)}else r!==""&&(n[r]=a[r])}return n}function Dn(e,n,o,a=null){Rn(e,n,7,[o,a])}const wd=$l();let Ed=0;function Cd(e,n,o){const a=e.type,r=(n?n.appContext:e.appContext)||wd,i={uid:Ed++,vnode:e,type:a,parent:n,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new ou(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:n?n.provides:Object.create(r.provides),ids:n?n.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Gl(a,r),emitsOptions:Ml(a,r),emit:null,emitted:null,propsDefaults:$e,inheritAttrs:a.inheritAttrs,ctx:$e,data:$e,props:$e,attrs:$e,slots:$e,refs:$e,setupState:$e,setupContext:null,suspense:o,suspenseId:o?o.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=n?n.root:i,i.emit=cd.bind(null,i),e.ce&&e.ce(i),i}let rn=null;const oc=()=>rn||Xe;let Za,ya;{const e=cr(),n=(o,a)=>{let r;return(r=e[o])||(r=e[o]=[]),r.push(a),i=>{r.length>1?r.forEach(s=>s(i)):r[0](i)}};Za=n("__VUE_INSTANCE_SETTERS__",o=>rn=o),ya=n("__VUE_SSR_SETTERS__",o=>Aa=o)}const Ea=e=>{const n=rn;return Za(e),e.scope.on(),()=>{e.scope.off(),Za(n)}},xi=()=>{rn&&rn.scope.off(),Za(null)};function ac(e){return e.vnode.shapeFlag&4}let Aa=!1;function kd(e,n=!1,o=!1){n&&ya(n);const{props:a,children:r}=e.vnode,i=ac(e);hd(e,a,i,n),_d(e,r,o||n);const s=i?Id(e,n):void 0;return n&&ya(!1),s}function Id(e,n){const o=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,ed);const{setup:a}=o;if(a){eo();const r=e.setupContext=a.length>1?Od(e):null,i=Ea(e),s=wa(a,e,0,[e.props,r]),l=Gs(s);if(no(),i(),(l||e.sp)&&!Do(e)&&Il(e),l){if(s.then(xi,xi),n)return s.then(c=>{ya(!0);try{Bi(e,c,n)}finally{ya(!1)}}).catch(c=>{mr(c,e,0)});e.asyncDep=s}else Bi(e,s)}else rc(e)}function Bi(e,n,o){Se(n)?e.type.__ssrInlineRender?e.ssrRender=n:e.render=n:qe(n)&&(e.setupState=vl(n)),rc(e)}function rc(e,n,o){const a=e.type;e.render||(e.render=a.render||Fn);{const r=Ea(e);eo();try{nd(e)}finally{no(),r()}}}const Pd={get(e,n){return on(e,"get",""),e[n]}};function Od(e){const n=o=>{e.exposed=o||{}};return{attrs:new Proxy(e.attrs,Pd),slots:e.slots,emit:e.emit,expose:n}}function br(e){return e.exposed?e.exposeProxy||(e.exposeProxy=new Proxy(vl(Au(e.exposed)),{get(n,o){if(o in n)return n[o];if(o in ua)return ua[o](e)},has(n,o){return o in n||o in ua}})):e.proxy}function Vd(e,n=!0){return Se(e)?e.displayName||e.name:e.name||n&&e.__name}function Dd(e){return Se(e)&&"__vccOpts"in e}const Le=(e,n)=>Ru(e,n,Aa);function Mo(e,n,o){try{Qa(-1);const a=arguments.length;return a===2?qe(n)&&!Ne(n)?_a(n)?F(e,null,[n]):F(e,n):F(e,null,n):(a>3?o=Array.prototype.slice.call(arguments,2):a===3&&_a(o)&&(o=[o]),F(e,n,o))}finally{Qa(1)}}const jd="3.5.41";let Bt;const Ti=typeof window<"u"&&window.trustedTypes;if(Ti)try{Bt=Ti.createPolicy("vue",{createHTML:e=>e})}catch{}const tc=Bt?e=>Bt.createHTML(e):e=>e,Ld="http://www.w3.org/2000/svg",qd="http://www.w3.org/1998/Math/MathML",Gn=typeof document<"u"?document:null,Ri=Gn&&Gn.createElement("template"),$d={insert:(e,n,o)=>{n.insertBefore(e,o||null)},remove:e=>{const n=e.parentNode;n&&n.removeChild(e)},createElement:(e,n,o,a)=>{const r=n==="svg"?Gn.createElementNS(Ld,e):n==="mathml"?Gn.createElementNS(qd,e):o?Gn.createElement(e,{is:o}):Gn.createElement(e);return e==="select"&&a&&a.multiple!=null&&r.setAttribute("multiple",a.multiple),r},createText:e=>Gn.createTextNode(e),createComment:e=>Gn.createComment(e),setText:(e,n)=>{e.nodeValue=n},setElementText:(e,n)=>{e.textContent=n},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>Gn.querySelector(e),setScopeId(e,n){e.setAttribute(n,"")},insertStaticContent(e,n,o,a,r,i){const s=o?o.previousSibling:n.lastChild;if(r&&(r===i||r.nextSibling))for(;n.insertBefore(r.cloneNode(!0),o),!(r===i||!(r=r.nextSibling)););else{Ri.innerHTML=tc(a==="svg"?`<svg>${e}</svg>`:a==="mathml"?`<math>${e}</math>`:e);const l=Ri.content;if(a==="svg"||a==="mathml"){const c=l.firstChild;for(;c.firstChild;)l.appendChild(c.firstChild);l.removeChild(c)}n.insertBefore(l,o)}return[s?s.nextSibling:n.firstChild,o?o.previousSibling:n.lastChild]}},ro="transition",Xo="animation",Na=Symbol("_vtc"),ic={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},Md=Je({},Rl,ic),Fd=e=>(e.displayName="Transition",e.props=Md,e),zd=Fd((e,{slots:n})=>Mo($u,Hd(e),n)),go=(e,n=[])=>{Ne(e)?e.forEach(o=>o(...n)):e&&e(...n)},Si=e=>e?Ne(e)?e.some(n=>n.length>1):e.length>1:!1;function Hd(e){const n={};for(const T in e)T in ic||(n[T]=e[T]);if(e.css===!1)return n;const{name:o="v",type:a,duration:r,enterFromClass:i=`${o}-enter-from`,enterActiveClass:s=`${o}-enter-active`,enterToClass:l=`${o}-enter-to`,appearFromClass:c=i,appearActiveClass:u=s,appearToClass:d=l,leaveFromClass:m=`${o}-leave-from`,leaveActiveClass:f=`${o}-leave-active`,leaveToClass:v=`${o}-leave-to`}=e,N=Ud(r),B=N&&N[0],D=N&&N[1],{onBeforeEnter:Q,onEnter:R,onEnterCancelled:w,onLeave:x,onLeaveCancelled:se,onBeforeAppear:Z=Q,onAppear:q=R,onAppearCancelled:ae=w}=n,re=(T,L,Y,de)=>{T._enterCancelled=de,bo(T,L?d:l),bo(T,L?u:s),Y&&Y()},ge=(T,L)=>{T._isLeaving=!1,bo(T,m),bo(T,v),bo(T,f),L&&L()},ee=T=>(L,Y)=>{const de=T?q:R,H=()=>re(L,T,Y);go(de,[L,H]),wi(()=>{bo(L,T?c:i),Un(L,T?d:l),Si(de)||Ei(L,a,B,H)})};return Je(n,{onBeforeEnter(T){go(Q,[T]),Un(T,i),Un(T,s)},onBeforeAppear(T){go(Z,[T]),Un(T,c),Un(T,u)},onEnter:ee(!1),onAppear:ee(!0),onLeave(T,L){T._isLeaving=!0;const Y=()=>ge(T,L);Un(T,m),T._enterCancelled?(Un(T,f),Ii(T)):(Ii(T),Un(T,f)),wi(()=>{T._isLeaving&&(bo(T,m),Un(T,v),Si(x)||Ei(T,a,D,Y))}),go(x,[T,Y])},onEnterCancelled(T){re(T,!1,void 0,!0),go(w,[T])},onAppearCancelled(T){re(T,!0,void 0,!0),go(ae,[T])},onLeaveCancelled(T){ge(T),go(se,[T])}})}function Ud(e){if(e==null)return null;if(qe(e))return[Cr(e.enter),Cr(e.leave)];{const n=Cr(e);return[n,n]}}function Cr(e){return Wc(e)}function Un(e,n){n.split(/\s+/).forEach(o=>o&&e.classList.add(o)),(e[Na]||(e[Na]=new Set)).add(n)}function bo(e,n){n.split(/\s+/).forEach(a=>a&&e.classList.remove(a));const o=e[Na];o&&(o.delete(n),o.size||(e[Na]=void 0))}function wi(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}let Kd=0;function Ei(e,n,o,a){const r=e._endId=++Kd,i=()=>{r===e._endId&&a()};if(o!=null)return setTimeout(i,o);const{type:s,timeout:l,propCount:c}=Gd(e,n);if(!s)return a();const u=s+"end";let d=0;const m=()=>{e.removeEventListener(u,f),i()},f=v=>{v.target===e&&++d>=c&&m()};setTimeout(()=>{d<c&&m()},l+1),e.addEventListener(u,f)}function Gd(e,n){const o=window.getComputedStyle(e),a=N=>(o[N]||"").split(", "),r=a(`${ro}Delay`),i=a(`${ro}Duration`),s=Ci(r,i),l=a(`${Xo}Delay`),c=a(`${Xo}Duration`),u=Ci(l,c);let d=null,m=0,f=0;n===ro?s>0&&(d=ro,m=s,f=i.length):n===Xo?u>0&&(d=Xo,m=u,f=c.length):(m=Math.max(s,u),d=m>0?s>u?ro:Xo:null,f=d?d===ro?i.length:c.length:0);const v=d===ro&&/\b(?:transform|all)(?:,|$)/.test(a(`${ro}Property`).toString());return{type:d,timeout:m,propCount:f,hasTransform:v}}function Ci(e,n){for(;e.length<n.length;)e=e.concat(e);return Math.max(...n.map((o,a)=>ki(o)+ki(e[a])))}function ki(e){return e==="auto"?0:Number(e.slice(0,-1).replace(",","."))*1e3}function Ii(e){return(e?e.ownerDocument:document).body.offsetHeight}function Wd(e,n,o){const a=e[Na];a&&(n=(n?[n,...a]:[...a]).join(" ")),n==null?e.removeAttribute("class"):o?e.setAttribute("class",n):e.className=n}const er=Symbol("_vod"),sc=Symbol("_vsh"),Pi={name:"show",beforeMount(e,{value:n},{transition:o}){e[er]=e.style.display==="none"?"":e.style.display,o&&n?o.beforeEnter(e):Zo(e,n)},mounted(e,{value:n},{transition:o}){o&&n&&o.enter(e)},updated(e,{value:n,oldValue:o},{transition:a}){!n!=!o&&(a?n?(a.beforeEnter(e),Zo(e,!0),a.enter(e)):a.leave(e,()=>{Zo(e,!1)}):Zo(e,n))},beforeUnmount(e,{value:n}){Zo(e,n)}};function Zo(e,n){e.style.display=n?e[er]:"none",e[sc]=!n}const Yd=Symbol(""),Jd=/(?:^|;)\s*display\s*:/;function Qd(e,n,o){const a=e.style,r=Fe(o);let i=!1;if(o&&!r){if(n)if(Fe(n))for(const s of n.split(";")){const l=s.slice(0,s.indexOf(":")).trim();o[l]==null&&ra(a,l,"")}else for(const s in n)o[s]==null&&ra(a,s,"");for(const s in o){s==="display"&&(i=!0);const l=o[s];l!=null?Zd(e,s,!Fe(n)&&n?n[s]:void 0,l)||ra(a,s,l):ra(a,s,"")}}else if(r){if(n!==o){const s=a[Yd];s&&(o+=";"+s),a.cssText=o,i=Jd.test(o)}}else n&&e.removeAttribute("style");er in e&&(e[er]=i?a.display:"",e[sc]&&(a.display="none"))}const Oi=/\s*!important$/;function ra(e,n,o){if(Ne(o))o.forEach(a=>ra(e,n,a));else if(o==null&&(o=""),n.startsWith("--"))e.setProperty(n,o);else{const a=Xd(e,n);Oi.test(o)?e.setProperty(So(a),o.replace(Oi,""),"important"):e[a]=o}}const Vi=["Webkit","Moz","ms"],kr={};function Xd(e,n){const o=kr[n];if(o)return o;let a=pn(n);if(a!=="filter"&&a in e)return kr[n]=a;a=sr(a);for(let r=0;r<Vi.length;r++){const i=Vi[r]+a;if(i in e)return kr[n]=i}return n}function Zd(e,n,o,a){return e.tagName==="TEXTAREA"&&(n==="width"||n==="height")&&Fe(a)&&o===a}const Di="http://www.w3.org/1999/xlink";function ji(e,n,o,a,r,i=eu(n)){a&&n.startsWith("xlink:")?o==null?e.removeAttributeNS(Di,n.slice(6,n.length)):e.setAttributeNS(Di,n,o):o==null||i&&!Qs(o)?e.removeAttribute(n):e.setAttribute(n,i?"":In(o)?String(o):o)}function Li(e,n,o,a,r){if(n==="innerHTML"||n==="textContent"){o!=null&&(e[n]=n==="innerHTML"?tc(o):o);return}const i=e.tagName;if(n==="value"&&i!=="PROGRESS"&&!i.includes("-")){const l=i==="OPTION"?e.getAttribute("value")||"":e.value,c=o==null?e.type==="checkbox"?"on":"":String(o);(l!==c||!("_value"in e))&&(e.value=c),o==null&&e.removeAttribute(n),e._value=o;return}let s=!1;if(o===""||o==null){const l=typeof e[n];l==="boolean"?o=Qs(o):o==null&&l==="string"?(o="",s=!0):l==="number"&&(o=0,s=!0)}try{e[n]=o}catch{}s&&e.removeAttribute(r||n)}function uo(e,n,o,a){e.addEventListener(n,o,a)}function em(e,n,o,a){e.removeEventListener(n,o,a)}const qi=Symbol("_vei");function nm(e,n,o,a,r=null){const i=e[qi]||(e[qi]={}),s=i[n];if(a&&s)s.value=a;else{const[l,c]=rm(n);if(a){const u=i[n]=sm(a,r);uo(e,l,u,c)}else s&&(em(e,l,s,c),i[n]=void 0)}}const om=/(Once|Passive|Capture)$/,am=/^on:?(?:Once|Passive|Capture)$/;function rm(e){let n,o;for(;(o=e.match(om))&&!am.test(e);)n||(n={}),e=e.slice(0,e.length-o[1].length),n[o[1].toLowerCase()]=!0;return[e[2]===":"?e.slice(3):So(e.slice(2)),n]}let Ir=0;const tm=Promise.resolve(),im=()=>Ir||(tm.then(()=>Ir=0),Ir=Date.now());function sm(e,n){const o=a=>{if(!a._vts)a._vts=Date.now();else if(a._vts<=o.attached)return;const r=o.value;if(Ne(r)){const i=a.stopImmediatePropagation;a.stopImmediatePropagation=()=>{i.call(a),a._stopped=!0};const s=r.slice(),l=[a];for(let c=0;c<s.length&&!a._stopped;c++){const u=s[c];u&&Rn(u,n,5,l)}}else Rn(r,n,5,[a])};return o.value=e,o.attached=im(),o}const $i=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,lm=(e,n,o,a,r,i)=>{const s=r==="svg";n==="class"?Wd(e,a,s):n==="style"?Qd(e,o,a):rr(n)?tr(n)||nm(e,n,o,a,i):(n[0]==="."?(n=n.slice(1),!0):n[0]==="^"?(n=n.slice(1),!1):cm(e,n,a,s))?(Li(e,n,a),!e.tagName.includes("-")&&(n==="value"||n==="checked"||n==="selected")&&ji(e,n,a,s,i,n!=="value")):e._isVueCE&&(um(e,n)||e._def.__asyncLoader&&(/[A-Z]/.test(n)||!Fe(a)))?Li(e,pn(n),a,i,n):(n==="true-value"?e._trueValue=a:n==="false-value"&&(e._falseValue=a),ji(e,n,a,s))};function cm(e,n,o,a){if(a)return!!(n==="innerHTML"||n==="textContent"||n in e&&$i(n)&&Se(o));if(n==="spellcheck"||n==="draggable"||n==="translate"||n==="autocorrect"||n==="sandbox"&&e.tagName==="IFRAME"||n==="form"||n==="list"&&e.tagName==="INPUT"||n==="type"&&e.tagName==="TEXTAREA")return!1;if(n==="width"||n==="height"){const r=e.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return $i(n)&&Fe(o)?!1:n in e}function um(e,n){const o=e._def.props;if(!o)return!1;const a=pn(n);return Array.isArray(o)?o.some(r=>pn(r)===a):Object.keys(o).some(r=>pn(r)===a)}const Fo=e=>{const n=e.props["onUpdate:modelValue"]||!1;return Ne(n)?o=>Fa(n,o):n};function dm(e){e.target.composing=!0}function Mi(e){const n=e.target;n.composing&&(n.composing=!1,n.dispatchEvent(new Event("input")))}const Mn=Symbol("_assign"),La=Symbol("_initialValue");function Pr(e,n,o){return n&&(e=e.trim()),o&&(e=lr(e)),e}const nr={created(e,{modifiers:{lazy:n,trim:o,number:a}},r){e.parentNode&&(e.type==="text"?e[La]=e.defaultValue.replace(/[\r\n]/g,""):e.type==="textarea"&&(e[La]=e.defaultValue.replace(/\r\n?/g,`
`))),e[Mn]=Fo(r);const i=a||r.props&&r.props.type==="number";uo(e,n?"change":"input",s=>{s.target.composing||e[Mn](Pr(e.value,o,i))}),(o||i)&&uo(e,"change",()=>{e.value=Pr(e.value,o,i)}),n||(uo(e,"compositionstart",dm),uo(e,"compositionend",Mi),uo(e,"change",Mi))},mounted(e,{value:n,modifiers:{trim:o,number:a}}){const r=n??"",i=e[La];delete e[La],i!==void 0&&(e.type==="text"||e.type==="textarea")&&e.value!==i?e[Mn](Pr(e.value,o,a)):e.value=r},beforeUpdate(e,{value:n,oldValue:o,modifiers:{lazy:a,trim:r,number:i}},s){if(e[Mn]=Fo(s),e.composing)return;const l=(i||e.type==="number")&&!/^0\d/.test(e.value)?lr(e.value):e.value,c=n??"";if(l===c)return;const u=e.getRootNode();(u instanceof Document||u instanceof ShadowRoot)&&u.activeElement===e&&e.type!=="range"&&(a&&n===o||r&&e.value.trim()===c)||(e.value=c)}},mm={deep:!0,created(e,n,o){e[Mn]=Fo(o),uo(e,"change",()=>{const a=e._modelValue,r=xa(e),i=e.checked,s=e[Mn];if(Ne(a)){const l=Dt(a,r),c=l!==-1;if(i&&!c)s(a.concat(r));else if(!i&&c){const u=[...a];u.splice(l,1),s(u)}}else if(Ko(a)){const l=new Set(a);i?l.add(r):l.delete(r),s(l)}else s(lc(e,i))})},mounted:Fi,beforeUpdate(e,n,o){e[Mn]=Fo(o),Fi(e,n,o)}};function Fi(e,{value:n,oldValue:o},a){e._modelValue=n;let r;if(Ne(n))r=Dt(n,a.props.value)>-1;else if(Ko(n))r=n.has(a.props.value);else{if(n===o)return;r=Go(n,lc(e,!0))}e.checked!==r&&(e.checked=r)}const Or={deep:!0,created(e,{value:n,modifiers:{number:o}},a){e._modelValue=n,uo(e,"change",()=>{const r=Array.prototype.filter.call(e.options,i=>i.selected).map(i=>o?lr(xa(i)):xa(i));e[Mn](e.multiple?Ko(e._modelValue)?new Set(r):r:r[0]),e._assigning=!0,$o(()=>{e._assigning=!1})}),e[Mn]=Fo(a)},mounted(e,{value:n}){zi(e,n)},beforeUpdate(e,{value:n},o){e._modelValue=n,e[Mn]=Fo(o)},updated(e,{value:n}){e._assigning||zi(e,n)}};function zi(e,n){const o=e.multiple,a=Ne(n);if(!(o&&!a&&!Ko(n))){for(let r=0,i=e.options.length;r<i;r++){const s=e.options[r],l=xa(s);if(o)if(a){const c=typeof l;c==="string"||c==="number"?s.selected=n.some(u=>String(u)===String(l)):s.selected=Dt(n,l)>-1}else s.selected=n.has(l);else if(Go(xa(s),n)){e.selectedIndex!==r&&(e.selectedIndex=r);return}}!o&&e.selectedIndex!==-1&&(e.selectedIndex=-1)}}function xa(e){return"_value"in e?e._value:e.value}function lc(e,n){const o=n?"_trueValue":"_falseValue";return o in e?e[o]:n}const pm=["ctrl","shift","alt","meta"],fm={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&e.button!==0,middle:e=>"button"in e&&e.button!==1,right:e=>"button"in e&&e.button!==2,exact:(e,n)=>pm.some(o=>e[`${o}Key`]&&!n.includes(o))},Xn=(e,n)=>{if(!e)return e;const o=e._withMods||(e._withMods={}),a=n.join(".");return o[a]||(o[a]=((r,...i)=>{for(let s=0;s<n.length;s++){const l=fm[n[s]];if(l&&l(r,n))return}return e(r,...i)}))},hm=Je({patchProp:lm},$d);let Hi;function vm(){return Hi||(Hi=Ad(hm))}const gm=((...e)=>{const n=vm().createApp(...e),{mount:o}=n;return n.mount=a=>{const r=_m(a);if(!r)return;const i=n._component;!Se(i)&&!i.render&&!i.template&&(i.template=r.innerHTML),r.nodeType===1&&(r.textContent="");const s=o(r,!1,bm(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),s},n});function bm(e){if(e instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&e instanceof MathMLElement)return"mathml"}function _m(e){return Fe(e)?document.querySelector(e):e}const ym="modulepreload",Am=function(e){return"/Extensao-26.2/"+e},Ui={},Nm=function(n,o,a){let r=Promise.resolve();if(o&&o.length>0){let u=function(d){return Promise.all(d.map(m=>Promise.resolve(m).then(f=>({status:"fulfilled",value:f}),f=>({status:"rejected",reason:f}))))};var s=u;document.getElementsByTagName("link");const l=document.querySelector("meta[property=csp-nonce]"),c=l?.nonce||l?.getAttribute("nonce");r=u(o.map(d=>{if(d=Am(d),d in Ui)return;Ui[d]=!0;const m=d.endsWith(".css"),f=m?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${d}"]${f}`))return;const v=document.createElement("link");if(v.rel=m?"stylesheet":ym,m||(v.as="script"),v.crossOrigin="",v.href=d,c&&v.setAttribute("nonce",c),document.head.appendChild(v),m)return new Promise((N,B)=>{v.addEventListener("load",N),v.addEventListener("error",()=>B(new Error(`Unable to preload CSS for ${d}`)))})}))}function i(l){const c=new Event("vite:preloadError",{cancelable:!0});if(c.payload=l,window.dispatchEvent(c),!c.defaultPrevented)throw l}return r.then(l=>{for(const c of l||[])c.status==="rejected"&&i(c.reason);return n().catch(i)})};function xm(e={}){const{immediate:n=!1,onNeedReload:o,onNeedRefresh:a,onOfflineReady:r,onRegistered:i,onRegisteredSW:s,onRegisterError:l}=e;let c,u;const d=async(f=!0)=>{await u};async function m(){if("serviceWorker"in navigator){if(c=await Nm(async()=>{const{Workbox:f}=await import("./workbox-window.prod.es5-BBnX5xw4.js");return{Workbox:f}},[]).then(({Workbox:f})=>new f("/Extensao-26.2/sw.js",{scope:"/Extensao-26.2/",type:"classic"})).catch(f=>{l?.(f)}),!c)return;c.addEventListener("activated",f=>{(f.isUpdate||f.isExternal)&&(o?o():window.location.reload())}),c.addEventListener("installed",f=>{f.isUpdate||r?.()}),c.register({immediate:n}).then(f=>{s?s("/Extensao-26.2/sw.js",f):i?.(f)}).catch(f=>{l?.(f)})}}return u=m(),d}const Bm="acessibilidade-checker",Tm=2,cn=Object.freeze({projects:"projects",environments:"environments",elements:"elements",evaluations:"evaluations",ruleSets:"ruleSets"});function ko(e){return new Promise((n,o)=>{e.onsuccess=()=>n(e.result),e.onerror=()=>o(e.error??new Error("Falha no IndexedDB."))})}function Rm(e=globalThis.indexedDB){if(!e)return Promise.reject(new Error("IndexedDB não está disponível neste ambiente."));const n=e.open(Bm,Tm);return n.onupgradeneeded=()=>{const o=n.result;if(o.objectStoreNames.contains(cn.projects)||o.createObjectStore(cn.projects,{keyPath:"id"}),o.objectStoreNames.contains(cn.environments)||o.createObjectStore(cn.environments,{keyPath:"id"}).createIndex("projectId","projectId",{unique:!1}),o.objectStoreNames.contains(cn.elements)||o.createObjectStore(cn.elements,{keyPath:"id"}).createIndex("environmentId","environmentId",{unique:!1}),!o.objectStoreNames.contains(cn.evaluations)){const a=o.createObjectStore(cn.evaluations,{keyPath:"id"});a.createIndex("elementId","elementId",{unique:!1}),a.createIndex("evaluatedAt","evaluatedAt",{unique:!1})}o.objectStoreNames.contains(cn.ruleSets)||o.createObjectStore(cn.ruleSets,{keyPath:"id"})},ko(n)}async function ea(e,n,o,a){const r=e.transaction(n,o),i=r.objectStore(n),s=await a(i);return await new Promise((l,c)=>{r.oncomplete=l,r.onabort=r.onerror=()=>c(r.error??new Error("Transação IndexedDB não concluída."))}),s}class Ca{constructor(n,o){this.database=n,this.storeName=o}get(n){return ea(this.database,this.storeName,"readonly",o=>ko(o.get(n)))}getAll(){return ea(this.database,this.storeName,"readonly",n=>ko(n.getAll()))}getAllBy(n,o){return ea(this.database,this.storeName,"readonly",a=>ko(a.index(n).getAll(o)))}put(n){return ea(this.database,this.storeName,"readwrite",async o=>(await ko(o.put(n)),n))}delete(n){return ea(this.database,this.storeName,"readwrite",o=>ko(o.delete(n)))}}class Sm extends Ca{constructor(n){super(n,cn.elements)}getByEnvironmentId(n){return this.getAllBy("environmentId",n)}}class wm extends Ca{constructor(n){super(n,cn.environments)}getByProjectId(n){return this.getAllBy("projectId",n)}}class Em extends Ca{constructor(n){super(n,cn.evaluations)}getByElementId(n){return this.getAllBy("elementId",n)}}class Cm extends Ca{constructor(n){super(n,cn.projects)}}class km extends Ca{constructor(n){super(n,cn.ruleSets)}}const Im=new Set([">=","<=",">","<","==","!="]);function da(e,n,o){switch(n){case">=":return e>=o;case"<=":return e<=o;case">":return e>o;case"<":return e<o;case"==":return e===o;case"!=":return e!==o;default:throw new Error(`Operador não suportado: ${n}`)}}function Pm(e,n){return n.obrigatorio&&(e==null||e==="")?{valid:!1,reason:"Campo obrigatório não preenchido."}:e==null||e===""?{valid:!0}:n.tipo==="number"&&typeof e!="number"?{valid:!1,reason:"O valor deve ser numérico."}:n.tipo==="boolean"&&typeof e!="boolean"?{valid:!1,reason:"O valor deve ser booleano."}:{valid:!0}}class Om{evaluate(n,o,a={}){return n.map(r=>this.evaluateRule(r,o,a))}evaluateRule(n,o,a){const r=a[n.parametro],i=o[n.parametro];if(!r)return{id:n.id,status:"erro",mensagem:`Parâmetro não definido: ${n.parametro}`};const s=Pm(i,r);if(!s.valid)return{id:n.id,nome:n.nome,status:"invalido",mensagem:s.reason,referencia:n.referencia};if(i==null||i==="")return{id:n.id,nome:n.nome,status:"nao_avaliado",referencia:n.referencia};if(n.tipo==="checklist")return r.tipo==="boolean"?{id:n.id,nome:n.nome,status:i?"conforme":"nao_conforme",valorInformado:i,valorEsperado:!0,operador:"==",parametro:n.parametro,unidade:r.unidade,referencia:n.referencia}:{id:n.id,nome:n.nome,status:"manual",valor:i,referencia:n.referencia};if(n.tipo==="conditional")return this.evaluateConditional(n,o,a);const l=da(i,n.operador,n.valor);return{id:n.id,nome:n.nome,status:l?"conforme":"nao_conforme",valorInformado:i,valorEsperado:n.valor,operador:n.operador,parametro:n.parametro,unidade:r.unidade,referencia:n.referencia}}evaluateConditional(n,o,a){for(const r of n.condicoes??[]){const i=o[n.parametro];if(r.quando&&da(i,r.quando.operador,r.quando.valor)){if(r.resultado)return{id:n.id,nome:n.nome,status:r.resultado,valorInformado:i,referencia:n.referencia,mensagem:r.mensagem};if(r.verificar){const s=o[r.verificar.parametro],l=da(s,r.verificar.operador,r.verificar.valor);return{id:n.id,nome:n.nome,status:l?"conforme":"nao_conforme",valorInformado:s,valorEsperado:r.verificar.valor,operador:r.verificar.operador,parametro:r.verificar.parametro,unidade:a[r.verificar.parametro]?.unidade,parametroCondicional:n.parametro,valorCondicional:i,operadorCondicional:r.quando.operador,limiteCondicional:r.quando.valor,mensagem:r.mensagem,referencia:n.referencia}}}}return{id:n.id,nome:n.nome,status:"nao_avaliado",referencia:n.referencia}}}function Bn(e,n){if(typeof e!="string"||e.trim()==="")throw new TypeError(`${n} deve ser um texto não vazio.`);return e.trim()}function ka(){return typeof globalThis.crypto?.randomUUID=="function"?globalThis.crypto.randomUUID():`${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`}function zn(e=new Date,n="data"){const o=e instanceof Date?e:new Date(e);if(Number.isNaN(o.getTime()))throw new TypeError(`${n} deve ser uma data válida.`);return o.toISOString()}function Tt(e){return typeof structuredClone=="function"?structuredClone(e):JSON.parse(JSON.stringify(e))}function Vr({id:e=ka(),elementId:n,data:o,result:a,evaluatedAt:r=new Date}={}){if(o===void 0||a===void 0)throw new TypeError("data e result são obrigatórios.");return{id:Bn(e,"id"),elementId:Bn(n,"elementId"),data:Tt(o),result:Tt(a),evaluatedAt:zn(r,"evaluatedAt")}}const Vm=["nao_conforme","erro","invalido"],Dm=["atencao","manual","nao_avaliado"];function Rt(e){const n=e[0]?.result;return n?.length?n.some(o=>Vm.includes(o.status))?"nao_conforme":n.some(o=>Dm.includes(o.status))?"nao_avaliado":"conforme":"nao_avaliado"}class jm{constructor({elementRepository:n,environmentRepository:o,evaluationRepository:a,ruleEngine:r=new Om}){this.elementRepository=n,this.environmentRepository=o,this.evaluationRepository=a,this.ruleEngine=r}async evaluateElement({elementId:n,checklist:o,data:a,evaluatedAt:r}){if(!await this.elementRepository.get(n))throw new Error("Elemento não encontrado.");const s=this.ruleEngine.evaluate(o.regras??[],a,o.parametros??{}),l=Vr({elementId:n,data:a,result:s,evaluatedAt:r});return this.evaluationRepository.put(l)}async saveElementData({elementId:n,data:o,savedAt:a}){if(!await this.elementRepository.get(n))throw new Error("Elemento não encontrado.");const i=Vr({elementId:n,data:o,result:[],evaluatedAt:a});return this.evaluationRepository.put(i)}async saveElementAnswers({elementId:n,checklist:o,data:a,savedAt:r}){return Object.keys(a??{}).length>0?this.evaluateElement({elementId:n,checklist:o,data:a,evaluatedAt:r}):this.saveElementData({elementId:n,data:a,savedAt:r})}evaluateTransientElement({elementId:n,checklist:o,data:a,evaluatedAt:r}){const i=this.ruleEngine.evaluate(o.regras??[],a,o.parametros??{});return Vr({elementId:n,data:a,result:i,evaluatedAt:r})}async listEvaluations(n){return(await this.evaluationRepository.getByElementId(n)).sort((a,r)=>r.evaluatedAt.localeCompare(a.evaluatedAt))}async getEnvironmentSummary(n){const o=await this.elementRepository.getByEnvironmentId(n);return this.#e(o)}async getProjectSummary(n){if(!this.environmentRepository)throw new Error("Repositório de ambientes não configurado.");const o=await this.environmentRepository.getByProjectId(n),a=await Promise.all(o.map(r=>this.elementRepository.getByEnvironmentId(r.id)));return this.#e(a.flat())}async getProjectStatus(n){if(!this.environmentRepository)throw new Error("Repositório de ambientes não configurado.");const o=await this.environmentRepository.getByProjectId(n),a=await Promise.all(o.map(async i=>{const s=await this.elementRepository.getByEnvironmentId(i.id),l=await Promise.all(s.map(async c=>({element:c,status:Rt(await this.listEvaluations(c.id))})));return{environment:i,elements:l,summary:this.#n(l.map(c=>c.status))}})),r=a.flatMap(i=>i.elements.map(s=>s.status));return{summary:this.#n(r),environments:a}}async#e(n){const o=await Promise.all(n.map(async a=>Rt(await this.listEvaluations(a.id))));return this.#n(o)}#n(n){const o={totalElements:n.length,conforme:0,nao_conforme:0,nao_avaliado:0,pendente:0,score:0,overallStatus:"nao_avaliado"};for(const a of n)o[a]+=1;return o.pendente=o.nao_avaliado,o.score=o.totalElements?Math.round(o.conforme/o.totalElements*100):0,o.nao_conforme>0?o.overallStatus="nao_conforme":o.nao_avaliado===0&&o.totalElements>0&&(o.overallStatus="conforme"),o}}function Ki({id:e=ka(),environmentId:n,name:o,type:a,rule:r,createdAt:i=new Date,updatedAt:s=i}={}){return{id:Bn(e,"id"),environmentId:Bn(n,"environmentId"),name:Bn(o,"name"),type:Bn(a,"type"),rule:Bn(r,"rule"),createdAt:zn(i,"createdAt"),updatedAt:zn(s,"updatedAt")}}function Gi({id:e=ka(),projectId:n,name:o,createdAt:a=new Date,updatedAt:r=a}={}){return{id:Bn(e,"id"),projectId:Bn(n,"projectId"),name:Bn(o,"name"),createdAt:zn(a,"createdAt"),updatedAt:zn(r,"updatedAt")}}function Wi({id:e=ka(),name:n,description:o="",createdAt:a=new Date,updatedAt:r=a}={}){return{id:Bn(e,"id"),name:Bn(n,"name"),description:typeof o=="string"?o.trim():"",createdAt:zn(a,"createdAt"),updatedAt:zn(r,"updatedAt")}}class Lm{constructor({projectRepository:n,environmentRepository:o,elementRepository:a}){this.projectRepository=n,this.environmentRepository=o,this.elementRepository=a}async createProject(n){const o=Wi(n);return this.projectRepository.put(o)}listProjects(){return this.projectRepository.getAll()}getProject(n){return this.projectRepository.get(n)}async updateProject(n,{name:o,description:a}){const r=await this.#e(this.projectRepository.get(n),"Projeto");return this.projectRepository.put(Wi({...r,name:o,description:a,updatedAt:new Date}))}async renameProject(n,o){const a=await this.#e(this.projectRepository.get(n),"Projeto");return this.updateProject(n,{name:o,description:a.description})}async createEnvironment(n,o){await this.#e(this.projectRepository.get(n),"Projeto");const a=Gi({...o,projectId:n});return this.environmentRepository.put(a)}listEnvironments(n){return this.environmentRepository.getByProjectId(n)}async renameEnvironment(n,o){const a=await this.#e(this.environmentRepository.get(n),"Ambiente");return this.environmentRepository.put(Gi({...a,name:o,updatedAt:new Date}))}async createElement(n,o){await this.#e(this.environmentRepository.get(n),"Ambiente");const a=Ki({...o,environmentId:n});return this.elementRepository.put(a)}listElements(n){return this.elementRepository.getByEnvironmentId(n)}async updateElement(n,o){const a=await this.#e(this.elementRepository.get(n),"Elemento");return this.elementRepository.put(Ki({...a,...o,id:a.id,environmentId:a.environmentId,createdAt:a.createdAt,updatedAt:zn(new Date)}))}async#e(n,o){const a=await n;if(!a)throw new Error(`${o} não encontrado.`);return a}}class qm{constructor({evaluationService:n}){this.evaluationService=n,this.current=null}evaluate({name:n,checklist:o,data:a}){const r={id:ka(),name:n?.trim()||o.nome,type:o.nome,rule:o.id},i=this.evaluationService.evaluateTransientElement({elementId:r.id,checklist:o,data:a});return this.current={element:r,evaluation:i},this.current}getCurrent(){return this.current}clear(){this.current=null}}const $m=new Set(["checklist","conditional"]);function Lo(e){return e!==null&&typeof e=="object"&&!Array.isArray(e)}function ma(e,n,o){(typeof e!="string"||e.trim()==="")&&o.push(`${n} deve ser um texto não vazio.`)}function cc(e,n,o){Im.has(e)||o.push(`${n} deve ser um operador suportado.`)}function Yi(e,n,o){if(!Lo(e)){o.push(`${n} deve ser um objeto.`);return}cc(e.operador,`${n}.operador`,o),"valor"in e||o.push(`${n}.valor é obrigatório.`)}function Mm(e,n,o,a){const r=`regras[${n}]`;if(!Lo(e)){a.push(`${r} deve ser um objeto.`);return}if(ma(e.id,`${r}.id`,a),ma(e.nome,`${r}.nome`,a),ma(e.parametro,`${r}.parametro`,a),typeof e.parametro=="string"&&!(e.parametro in o)&&a.push(`${r}.parametro deve existir em parametros.`),e.tipo!=="checklist"){if(e.tipo==="conditional"){if(!Array.isArray(e.condicoes)||e.condicoes.length===0){a.push(`${r}.condicoes deve conter ao menos uma condição.`);return}e.condicoes.forEach((i,s)=>{const l=`${r}.condicoes[${s}]`;if(!Lo(i)){a.push(`${l} deve ser um objeto.`);return}Yi(i.quando,`${l}.quando`,a);const c=typeof i.resultado=="string"&&i.resultado!=="",u="verificar"in i;c===u&&a.push(`${l} deve informar exatamente resultado ou verificar.`),u&&(Yi(i.verificar,`${l}.verificar`,a),(typeof i.verificar?.parametro!="string"||!(i.verificar.parametro in o))&&a.push(`${l}.verificar.parametro deve existir em parametros.`))});return}e.tipo!==void 0&&!$m.has(e.tipo)&&a.push(`${r}.tipo não é suportado.`),cc(e.operador,`${r}.operador`,a),"valor"in e||a.push(`${r}.valor é obrigatório.`)}}function Fm(e){const n=[];return Lo(e)?(ma(e.id,"id",n),ma(e.nome,"nome",n),Lo(e.parametros)||n.push("parametros deve ser um objeto."),Array.isArray(e.regras)||n.push("regras deve ser uma lista."),Lo(e.parametros)&&Array.isArray(e.regras)&&e.regras.forEach((o,a)=>Mm(o,a,e.parametros,n)),{valid:n.length===0,errors:n}):{valid:!1,errors:["O conjunto de regras deve ser um objeto."]}}function St(e){const n=Fm(e);if(!n.valid)throw new TypeError(`Conjunto de regras inválido: ${n.errors.join(" ")}`);return e}function zm(e,{createdAt:n=new Date,updatedAt:o=n}={}){return St(e),{...Tt(e),source:"user",createdAt:zn(n,"createdAt"),updatedAt:zn(o,"updatedAt")}}function Hm(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var nn={},qa={},to={},Ji;function Ia(){if(Ji)return to;Ji=1;function e(s){return typeof s>"u"||s===null}function n(s){return typeof s=="object"&&s!==null}function o(s){return Array.isArray(s)?s:e(s)?[]:[s]}function a(s,l){if(l){const c=Object.keys(l);for(let u=0,d=c.length;u<d;u+=1){const m=c[u];s[m]=l[m]}}return s}function r(s,l){let c="";for(let u=0;u<l;u+=1)c+=s;return c}function i(s){return s===0&&Number.NEGATIVE_INFINITY===1/s}return to.isNothing=e,to.isObject=n,to.toArray=o,to.repeat=r,to.isNegativeZero=i,to.extend=a,to}var Dr,Qi;function Pa(){if(Qi)return Dr;Qi=1;function e(o,a){let r="";const i=o.reason||"(unknown reason)";return o.mark?(o.mark.name&&(r+='in "'+o.mark.name+'" '),r+="("+(o.mark.line+1)+":"+(o.mark.column+1)+")",!a&&o.mark.snippet&&(r+=`

`+o.mark.snippet),i+" "+r):i}function n(o,a){Error.call(this),this.name="YAMLException",this.reason=o,this.mark=a,this.message=e(this,!1),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack||""}return n.prototype=Object.create(Error.prototype),n.prototype.constructor=n,n.prototype.toString=function(a){return this.name+": "+e(this,a)},Dr=n,Dr}var jr,Xi;function Um(){if(Xi)return jr;Xi=1;const e=Ia();function n(r,i,s,l,c){let u="",d="";const m=Math.floor(c/2)-1;return l-i>m&&(u=" ... ",i=l-m+u.length),s-l>m&&(d=" ...",s=l+m-d.length),{str:u+r.slice(i,s).replace(/\t/g,"→")+d,pos:l-i+u.length}}function o(r,i){return e.repeat(" ",i-r.length)+r}function a(r,i){if(i=Object.create(i||null),!r.buffer)return null;i.maxLength||(i.maxLength=79),typeof i.indent!="number"&&(i.indent=1),typeof i.linesBefore!="number"&&(i.linesBefore=3),typeof i.linesAfter!="number"&&(i.linesAfter=2);const s=/\r?\n|\r|\0/g,l=[0],c=[];let u,d=-1;for(;u=s.exec(r.buffer);)c.push(u.index),l.push(u.index+u[0].length),r.position<=u.index&&d<0&&(d=l.length-2);d<0&&(d=l.length-1);let m="";const f=Math.min(r.line+i.linesAfter,c.length).toString().length,v=i.maxLength-(i.indent+f+3);for(let B=1;B<=i.linesBefore&&!(d-B<0);B++){const D=n(r.buffer,l[d-B],c[d-B],r.position-(l[d]-l[d-B]),v);m=e.repeat(" ",i.indent)+o((r.line-B+1).toString(),f)+" | "+D.str+`
`+m}const N=n(r.buffer,l[d],c[d],r.position,v);m+=e.repeat(" ",i.indent)+o((r.line+1).toString(),f)+" | "+N.str+`
`,m+=e.repeat("-",i.indent+f+3+N.pos)+`^
`;for(let B=1;B<=i.linesAfter&&!(d+B>=c.length);B++){const D=n(r.buffer,l[d+B],c[d+B],r.position-(l[d]-l[d+B]),v);m+=e.repeat(" ",i.indent)+o((r.line+B+1).toString(),f)+" | "+D.str+`
`}return m.replace(/\n$/,"")}return jr=a,jr}var Lr,Zi;function hn(){if(Zi)return Lr;Zi=1;const e=Pa(),n=["kind","multi","resolve","construct","instanceOf","predicate","represent","representName","defaultStyle","styleAliases"],o=["scalar","sequence","mapping"];function a(i){const s={};return i!==null&&Object.keys(i).forEach(function(l){i[l].forEach(function(c){s[String(c)]=l})}),s}function r(i,s){if(s=s||{},Object.keys(s).forEach(function(l){if(n.indexOf(l)===-1)throw new e('Unknown option "'+l+'" is met in definition of "'+i+'" YAML type.')}),this.options=s,this.tag=i,this.kind=s.kind||null,this.resolve=s.resolve||function(){return!0},this.construct=s.construct||function(l){return l},this.instanceOf=s.instanceOf||null,this.predicate=s.predicate||null,this.represent=s.represent||null,this.representName=s.representName||null,this.defaultStyle=s.defaultStyle||null,this.multi=s.multi||!1,this.styleAliases=a(s.styleAliases||null),o.indexOf(this.kind)===-1)throw new e('Unknown kind "'+this.kind+'" is specified for "'+i+'" YAML type.')}return Lr=r,Lr}var qr,es;function uc(){if(es)return qr;es=1;const e=Pa(),n=hn();function o(i,s){const l=[];return i[s].forEach(function(c){let u=l.length;l.forEach(function(d,m){d.tag===c.tag&&d.kind===c.kind&&d.multi===c.multi&&(u=m)}),l[u]=c}),l}function a(){const i={scalar:{},sequence:{},mapping:{},fallback:{},multi:{scalar:[],sequence:[],mapping:[],fallback:[]}};function s(l){l.multi?(i.multi[l.kind].push(l),i.multi.fallback.push(l)):i[l.kind][l.tag]=i.fallback[l.tag]=l}for(let l=0,c=arguments.length;l<c;l+=1)arguments[l].forEach(s);return i}function r(i){return this.extend(i)}return r.prototype.extend=function(s){let l=[],c=[];if(s instanceof n)c.push(s);else if(Array.isArray(s))c=c.concat(s);else if(s&&(Array.isArray(s.implicit)||Array.isArray(s.explicit)))s.implicit&&(l=l.concat(s.implicit)),s.explicit&&(c=c.concat(s.explicit));else throw new e("Schema.extend argument should be a Type, [ Type ], or a schema definition ({ implicit: [...], explicit: [...] })");l.forEach(function(d){if(!(d instanceof n))throw new e("Specified list of YAML types (or a single Type object) contains a non-Type object.");if(d.loadKind&&d.loadKind!=="scalar")throw new e("There is a non-scalar type in the implicit list of a schema. Implicit resolving of such types is not supported.");if(d.multi)throw new e("There is a multi type in the implicit list of a schema. Multi tags can only be listed as explicit.")}),c.forEach(function(d){if(!(d instanceof n))throw new e("Specified list of YAML types (or a single Type object) contains a non-Type object.")});const u=Object.create(r.prototype);return u.implicit=(this.implicit||[]).concat(l),u.explicit=(this.explicit||[]).concat(c),u.compiledImplicit=o(u,"implicit"),u.compiledExplicit=o(u,"explicit"),u.compiledTypeMap=a(u.compiledImplicit,u.compiledExplicit),u},qr=r,qr}var $r,ns;function dc(){if(ns)return $r;ns=1;const e=hn();return $r=new e("tag:yaml.org,2002:str",{kind:"scalar",construct:function(n){return n!==null?n:""}}),$r}var Mr,os;function mc(){if(os)return Mr;os=1;const e=hn();return Mr=new e("tag:yaml.org,2002:seq",{kind:"sequence",construct:function(n){return n!==null?n:[]}}),Mr}var Fr,as;function pc(){if(as)return Fr;as=1;const e=hn();return Fr=new e("tag:yaml.org,2002:map",{kind:"mapping",construct:function(n){return n!==null?n:{}}}),Fr}var zr,rs;function fc(){if(rs)return zr;rs=1;const e=uc();return zr=new e({explicit:[dc(),mc(),pc()]}),zr}var Hr,ts;function hc(){if(ts)return Hr;ts=1;const e=hn();function n(r){if(r===null)return!0;const i=r.length;return i===1&&r==="~"||i===4&&(r==="null"||r==="Null"||r==="NULL")}function o(){return null}function a(r){return r===null}return Hr=new e("tag:yaml.org,2002:null",{kind:"scalar",resolve:n,construct:o,predicate:a,represent:{canonical:function(){return"~"},lowercase:function(){return"null"},uppercase:function(){return"NULL"},camelcase:function(){return"Null"},empty:function(){return""}},defaultStyle:"lowercase"}),Hr}var Ur,is;function vc(){if(is)return Ur;is=1;const e=hn();function n(r){if(r===null)return!1;const i=r.length;return i===4&&(r==="true"||r==="True"||r==="TRUE")||i===5&&(r==="false"||r==="False"||r==="FALSE")}function o(r){return r==="true"||r==="True"||r==="TRUE"}function a(r){return Object.prototype.toString.call(r)==="[object Boolean]"}return Ur=new e("tag:yaml.org,2002:bool",{kind:"scalar",resolve:n,construct:o,predicate:a,represent:{lowercase:function(r){return r?"true":"false"},uppercase:function(r){return r?"TRUE":"FALSE"},camelcase:function(r){return r?"True":"False"}},defaultStyle:"lowercase"}),Ur}var Kr,ss;function gc(){if(ss)return Kr;ss=1;const e=Ia(),n=hn();function o(u){return u>=48&&u<=57||u>=65&&u<=70||u>=97&&u<=102}function a(u){return u>=48&&u<=55}function r(u){return u>=48&&u<=57}function i(u){if(u===null)return!1;const d=u.length;let m=0,f=!1;if(!d)return!1;let v=u[m];if((v==="-"||v==="+")&&(v=u[++m]),v==="0"){if(m+1===d)return!0;if(v=u[++m],v==="b"){for(m++;m<d;m++){if(v=u[m],v!=="0"&&v!=="1")return!1;f=!0}return f&&isFinite(s(u))}if(v==="x"){for(m++;m<d;m++){if(!o(u.charCodeAt(m)))return!1;f=!0}return f&&isFinite(s(u))}if(v==="o"){for(m++;m<d;m++){if(!a(u.charCodeAt(m)))return!1;f=!0}return f&&isFinite(s(u))}}for(;m<d;m++){if(!r(u.charCodeAt(m)))return!1;f=!0}return f?isFinite(s(u)):!1}function s(u){let d=u,m=1,f=d[0];if((f==="-"||f==="+")&&(f==="-"&&(m=-1),d=d.slice(1),f=d[0]),d==="0")return 0;if(f==="0"){if(d[1]==="b")return m*parseInt(d.slice(2),2);if(d[1]==="x")return m*parseInt(d.slice(2),16);if(d[1]==="o")return m*parseInt(d.slice(2),8)}return m*parseInt(d,10)}function l(u){return s(u)}function c(u){return Object.prototype.toString.call(u)==="[object Number]"&&u%1===0&&!e.isNegativeZero(u)}return Kr=new n("tag:yaml.org,2002:int",{kind:"scalar",resolve:i,construct:l,predicate:c,represent:{binary:function(u){return u>=0?"0b"+u.toString(2):"-0b"+u.toString(2).slice(1)},octal:function(u){return u>=0?"0o"+u.toString(8):"-0o"+u.toString(8).slice(1)},decimal:function(u){return u.toString(10)},hexadecimal:function(u){return u>=0?"0x"+u.toString(16).toUpperCase():"-0x"+u.toString(16).toUpperCase().slice(1)}},defaultStyle:"decimal",styleAliases:{binary:[2,"bin"],octal:[8,"oct"],decimal:[10,"dec"],hexadecimal:[16,"hex"]}}),Kr}var Gr,ls;function bc(){if(ls)return Gr;ls=1;const e=Ia(),n=hn(),o=new RegExp("^(?:[-+]?(?:[0-9]+)(?:\\.[0-9]*)?(?:[eE][-+]?[0-9]+)?|\\.[0-9]+(?:[eE][-+]?[0-9]+)?|[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$"),a=new RegExp("^(?:[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$");function r(u){return u===null||!o.test(u)?!1:isFinite(parseFloat(u,10))?!0:a.test(u)}function i(u){let d=u.toLowerCase();const m=d[0]==="-"?-1:1;return"+-".indexOf(d[0])>=0&&(d=d.slice(1)),d===".inf"?m===1?Number.POSITIVE_INFINITY:Number.NEGATIVE_INFINITY:d===".nan"?NaN:m*parseFloat(d,10)}const s=/^[-+]?[0-9]+e/;function l(u,d){if(isNaN(u))switch(d){case"lowercase":return".nan";case"uppercase":return".NAN";case"camelcase":return".NaN"}else if(Number.POSITIVE_INFINITY===u)switch(d){case"lowercase":return".inf";case"uppercase":return".INF";case"camelcase":return".Inf"}else if(Number.NEGATIVE_INFINITY===u)switch(d){case"lowercase":return"-.inf";case"uppercase":return"-.INF";case"camelcase":return"-.Inf"}else if(e.isNegativeZero(u))return"-0.0";const m=u.toString(10);return s.test(m)?m.replace("e",".e"):m}function c(u){return Object.prototype.toString.call(u)==="[object Number]"&&(u%1!==0||e.isNegativeZero(u))}return Gr=new n("tag:yaml.org,2002:float",{kind:"scalar",resolve:r,construct:i,predicate:c,represent:l,defaultStyle:"lowercase"}),Gr}var Wr,cs;function _c(){return cs||(cs=1,Wr=fc().extend({implicit:[hc(),vc(),gc(),bc()]})),Wr}var Yr,us;function yc(){return us||(us=1,Yr=_c()),Yr}var Jr,ds;function Ac(){if(ds)return Jr;ds=1;const e=hn(),n=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9])-([0-9][0-9])$"),o=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9]?)-([0-9][0-9]?)(?:[Tt]|[ \\t]+)([0-9][0-9]?):([0-9][0-9]):([0-9][0-9])(?:\\.([0-9]*))?(?:[ \\t]*(Z|([-+])([0-9][0-9]?)(?::([0-9][0-9]))?))?$");function a(s){return s===null?!1:n.exec(s)!==null||o.exec(s)!==null}function r(s){let l=0,c=null,u=n.exec(s);if(u===null&&(u=o.exec(s)),u===null)throw new Error("Date resolve error");const d=+u[1],m=+u[2]-1,f=+u[3];if(!u[4])return new Date(Date.UTC(d,m,f));const v=+u[4],N=+u[5],B=+u[6];if(u[7]){for(l=u[7].slice(0,3);l.length<3;)l+="0";l=+l}if(u[9]){const Q=+u[10],R=+(u[11]||0);c=(Q*60+R)*6e4,u[9]==="-"&&(c=-c)}const D=new Date(Date.UTC(d,m,f,v,N,B,l));return c&&D.setTime(D.getTime()-c),D}function i(s){return s.toISOString()}return Jr=new e("tag:yaml.org,2002:timestamp",{kind:"scalar",resolve:a,construct:r,instanceOf:Date,represent:i}),Jr}var Qr,ms;function Nc(){if(ms)return Qr;ms=1;const e=hn();function n(o){return o==="<<"||o===null}return Qr=new e("tag:yaml.org,2002:merge",{kind:"scalar",resolve:n}),Qr}var Xr,ps;function xc(){if(ps)return Xr;ps=1;const e=hn(),n=`ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=
\r`;function o(s){if(s===null)return!1;let l=0;const c=s.length,u=n;for(let d=0;d<c;d++){const m=u.indexOf(s.charAt(d));if(!(m>64)){if(m<0)return!1;l+=6}}return l%8===0}function a(s){const l=s.replace(/[\r\n=]/g,""),c=l.length,u=n;let d=0;const m=[];for(let v=0;v<c;v++)v%4===0&&v&&(m.push(d>>16&255),m.push(d>>8&255),m.push(d&255)),d=d<<6|u.indexOf(l.charAt(v));const f=c%4*6;return f===0?(m.push(d>>16&255),m.push(d>>8&255),m.push(d&255)):f===18?(m.push(d>>10&255),m.push(d>>2&255)):f===12&&m.push(d>>4&255),new Uint8Array(m)}function r(s){let l="",c=0;const u=s.length,d=n;for(let f=0;f<u;f++)f%3===0&&f&&(l+=d[c>>18&63],l+=d[c>>12&63],l+=d[c>>6&63],l+=d[c&63]),c=(c<<8)+s[f];const m=u%3;return m===0?(l+=d[c>>18&63],l+=d[c>>12&63],l+=d[c>>6&63],l+=d[c&63]):m===2?(l+=d[c>>10&63],l+=d[c>>4&63],l+=d[c<<2&63],l+=d[64]):m===1&&(l+=d[c>>2&63],l+=d[c<<4&63],l+=d[64],l+=d[64]),l}function i(s){return Object.prototype.toString.call(s)==="[object Uint8Array]"}return Xr=new e("tag:yaml.org,2002:binary",{kind:"scalar",resolve:o,construct:a,predicate:i,represent:r}),Xr}var Zr,fs;function Bc(){if(fs)return Zr;fs=1;const e=hn(),n=Object.prototype.hasOwnProperty,o=Object.prototype.toString;function a(i){if(i===null)return!0;const s={},l=i;for(let c=0,u=l.length;c<u;c+=1){const d=l[c];let m=!1;if(o.call(d)!=="[object Object]")return!1;let f;for(f in d)if(n.call(d,f))if(!m)m=!0;else return!1;if(!m||n.call(s,f))return!1;Object.defineProperty(s,f,{value:!0})}return!0}function r(i){return i!==null?i:[]}return Zr=new e("tag:yaml.org,2002:omap",{kind:"sequence",resolve:a,construct:r}),Zr}var et,hs;function Tc(){if(hs)return et;hs=1;const e=hn(),n=Object.prototype.toString;function o(r){if(r===null)return!0;const i=r,s=new Array(i.length);for(let l=0,c=i.length;l<c;l+=1){const u=i[l];if(n.call(u)!=="[object Object]")return!1;const d=Object.keys(u);if(d.length!==1)return!1;s[l]=[d[0],u[d[0]]]}return!0}function a(r){if(r===null)return[];const i=r,s=new Array(i.length);for(let l=0,c=i.length;l<c;l+=1){const u=i[l],d=Object.keys(u);s[l]=[d[0],u[d[0]]]}return s}return et=new e("tag:yaml.org,2002:pairs",{kind:"sequence",resolve:o,construct:a}),et}var nt,vs;function Rc(){if(vs)return nt;vs=1;const e=hn(),n=Object.prototype.hasOwnProperty;function o(r){if(r===null)return!0;const i=r;for(const s in i)if(n.call(i,s)&&i[s]!==null)return!1;return!0}function a(r){return r!==null?r:{}}return nt=new e("tag:yaml.org,2002:set",{kind:"mapping",resolve:o,construct:a}),nt}var ot,gs;function Qt(){return gs||(gs=1,ot=yc().extend({implicit:[Ac(),Nc()],explicit:[xc(),Bc(),Tc(),Rc()]})),ot}var bs;function Km(){if(bs)return qa;bs=1;const e=Ia(),n=Pa(),o=Um(),a=Qt(),r=Object.prototype.hasOwnProperty,i=1,s=2,l=3,c=4,u=1,d=2,m=3,f=/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F-\x84\x86-\x9F\uFFFE\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/,v=/[\x85\u2028\u2029]/,N=/[,\[\]{}]/,B=/^(?:!|!!|![0-9A-Za-z-]+!)$/,D=/^(?:!|[^,\[\]{}])(?:%[0-9a-f]{2}|[0-9a-z\-#;/?:@&=+$,_.!~*'()\[\]])*$/i;function Q(t){return Object.prototype.toString.call(t)}function R(t){return t===10||t===13}function w(t){return t===9||t===32}function x(t){return t===9||t===32||t===10||t===13}function se(t){return t===44||t===91||t===93||t===123||t===125}function Z(t){if(t>=48&&t<=57)return t-48;const _=t|32;return _>=97&&_<=102?_-97+10:-1}function q(t){return t===120?2:t===117?4:t===85?8:0}function ae(t){return t>=48&&t<=57?t-48:-1}function re(t){switch(t){case 48:return"\0";case 97:return"\x07";case 98:return"\b";case 116:return"	";case 9:return"	";case 110:return`
`;case 118:return"\v";case 102:return"\f";case 114:return"\r";case 101:return"\x1B";case 32:return" ";case 34:return'"';case 47:return"/";case 92:return"\\";case 78:return"";case 95:return" ";case 76:return"\u2028";case 80:return"\u2029";default:return""}}function ge(t){return t<=65535?String.fromCharCode(t):String.fromCharCode((t-65536>>10)+55296,(t-65536&1023)+56320)}function ee(t,_,E){_==="__proto__"?Object.defineProperty(t,_,{configurable:!0,enumerable:!0,writable:!0,value:E}):t[_]=E}const T=new Array(256),L=new Array(256);for(let t=0;t<256;t++)T[t]=re(t)?1:0,L[t]=re(t);function Y(t,_){this.input=t,this.filename=_.filename||null,this.schema=_.schema||a,this.onWarning=_.onWarning||null,this.legacy=_.legacy||!1,this.json=_.json||!1,this.listener=_.listener||null,this.maxDepth=typeof _.maxDepth=="number"?_.maxDepth:100,this.maxTotalMergeKeys=typeof _.maxTotalMergeKeys=="number"?_.maxTotalMergeKeys:1e4,this.implicitTypes=this.schema.compiledImplicit,this.typeMap=this.schema.compiledTypeMap,this.length=t.length,this.position=0,this.line=0,this.lineStart=0,this.lineIndent=0,this.depth=0,this.totalMergeKeys=0,this.firstTabInLine=-1,this.documents=[],this.anchorMapTransactions=[]}function de(t,_){const E={name:t.filename,buffer:t.input.slice(0,-1),position:t.position,line:t.line,column:t.position-t.lineStart};return E.snippet=o(E),new n(_,E)}function H(t,_){throw de(t,_)}function we(t,_){t.onWarning&&t.onWarning.call(null,de(t,_))}function _e(t,_,E){const I=t.anchorMapTransactions;if(I.length!==0){const S=I[I.length-1];r.call(S,_)||(S[_]={existed:r.call(t.anchorMap,_),value:t.anchorMap[_]})}t.anchorMap[_]=E}function Ze(t){t.anchorMapTransactions.push(Object.create(null))}function en(t){const _=t.anchorMapTransactions.pop(),E=t.anchorMapTransactions;if(E.length===0)return;const I=E[E.length-1],S=Object.keys(_);for(let K=0,p=S.length;K<p;K+=1){const A=S[K];r.call(I,A)||(I[A]=_[A])}}function vn(t){const _=t.anchorMapTransactions.pop(),E=Object.keys(_);for(let I=E.length-1;I>=0;I-=1){const S=_[E[I]];S.existed?t.anchorMap[E[I]]=S.value:delete t.anchorMap[E[I]]}}function We(t){return{position:t.position,line:t.line,lineStart:t.lineStart,lineIndent:t.lineIndent,firstTabInLine:t.firstTabInLine,tag:t.tag,anchor:t.anchor,kind:t.kind,result:t.result}}function bn(t,_){t.position=_.position,t.line=_.line,t.lineStart=_.lineStart,t.lineIndent=_.lineIndent,t.firstTabInLine=_.firstTabInLine,t.tag=_.tag,t.anchor=_.anchor,t.kind=_.kind,t.result=_.result}const Sn={YAML:function(_,E,I){_.version!==null&&H(_,"duplication of %YAML directive"),I.length!==1&&H(_,"YAML directive accepts exactly one argument");const S=/^([0-9]+)\.([0-9]+)$/.exec(I[0]);S===null&&H(_,"ill-formed argument of the YAML directive");const K=parseInt(S[1],10),p=parseInt(S[2],10);K!==1&&H(_,"unacceptable YAML version of the document"),_.version=I[0],_.checkLineBreaks=p<2,p!==1&&p!==2&&we(_,"unsupported YAML version of the document")},TAG:function(_,E,I){let S;I.length!==2&&H(_,"TAG directive accepts exactly two arguments");const K=I[0];S=I[1],B.test(K)||H(_,"ill-formed tag handle (first argument) of the TAG directive"),r.call(_.tagMap,K)&&H(_,'there is a previously declared suffix for "'+K+'" tag handle'),D.test(S)||H(_,"ill-formed tag prefix (second argument) of the TAG directive");try{S=decodeURIComponent(S)}catch{H(_,"tag prefix is malformed: "+S)}_.tagMap[K]=S}};function Ke(t,_,E,I){if(_<E){const S=t.input.slice(_,E);if(I)for(let K=0,p=S.length;K<p;K+=1){const A=S.charCodeAt(K);A===9||A>=32&&A<=1114111||H(t,"expected valid JSON character")}else f.test(S)&&H(t,"the stream contains non-printable characters");t.result+=S}}function Ge(t,_,E,I){e.isObject(E)||H(t,"cannot merge mappings; the provided source object is unacceptable");const S=Object.keys(E);for(let K=0,p=S.length;K<p;K+=1){const A=S[K];t.maxTotalMergeKeys!==-1&&++t.totalMergeKeys>t.maxTotalMergeKeys&&H(t,"merge keys exceeded maxTotalMergeKeys ("+t.maxTotalMergeKeys+")"),r.call(_,A)||(ee(_,A,E[A]),I[A]=!0)}}function P(t,_,E,I,S,K,p,A,M){if(Array.isArray(S)){S=Array.prototype.slice.call(S);for(let V=0,j=S.length;V<j;V+=1)Array.isArray(S[V])&&H(t,"nested arrays are not supported inside keys"),typeof S=="object"&&Q(S[V])==="[object Object]"&&(S[V]="[object Object]")}if(typeof S=="object"&&Q(S)==="[object Object]"&&(S="[object Object]"),S=String(S),_===null&&(_={}),I==="tag:yaml.org,2002:merge")if(Array.isArray(K))for(let V=0,j=K.length;V<j;V+=1)Ge(t,_,K[V],E);else Ge(t,_,K,E);else!t.json&&!r.call(E,S)&&r.call(_,S)&&(t.line=p||t.line,t.lineStart=A||t.lineStart,t.position=M||t.position,H(t,"duplicated mapping key")),ee(_,S,K),delete E[S];return _}function ce(t){const _=t.input.charCodeAt(t.position);_===10?t.position++:_===13?(t.position++,t.input.charCodeAt(t.position)===10&&t.position++):H(t,"a line break is expected"),t.line+=1,t.lineStart=t.position,t.firstTabInLine=-1}function J(t,_,E){let I=0,S=t.input.charCodeAt(t.position);for(;S!==0;){for(;w(S);)S===9&&t.firstTabInLine===-1&&(t.firstTabInLine=t.position),S=t.input.charCodeAt(++t.position);if(_&&S===35)do S=t.input.charCodeAt(++t.position);while(S!==10&&S!==13&&S!==0);if(R(S))for(ce(t),S=t.input.charCodeAt(t.position),I++,t.lineIndent=0;S===32;)t.lineIndent++,S=t.input.charCodeAt(++t.position);else break}return E!==-1&&I!==0&&t.lineIndent<E&&we(t,"deficient indentation"),I}function fe(t){let _=t.position,E=t.input.charCodeAt(_);return!!((E===45||E===46)&&E===t.input.charCodeAt(_+1)&&E===t.input.charCodeAt(_+2)&&(_+=3,E=t.input.charCodeAt(_),E===0||x(E)))}function Re(t,_){_===1?t.result+=" ":_>1&&(t.result+=e.repeat(`
`,_-1))}function h(t,_,E){let I,S,K,p,A,M;const V=t.kind,j=t.result;let G=t.input.charCodeAt(t.position);if(x(G)||se(G)||G===35||G===38||G===42||G===33||G===124||G===62||G===39||G===34||G===37||G===64||G===96)return!1;if(G===63||G===45){const U=t.input.charCodeAt(t.position+1);if(x(U)||E&&se(U))return!1}for(t.kind="scalar",t.result="",I=S=t.position,K=!1;G!==0;){if(G===58){const U=t.input.charCodeAt(t.position+1);if(x(U)||E&&se(U))break}else if(G===35){const U=t.input.charCodeAt(t.position-1);if(x(U))break}else{if(t.position===t.lineStart&&fe(t)||E&&se(G))break;if(R(G))if(p=t.line,A=t.lineStart,M=t.lineIndent,J(t,!1,-1),t.lineIndent>=_){K=!0,G=t.input.charCodeAt(t.position);continue}else{t.position=S,t.line=p,t.lineStart=A,t.lineIndent=M;break}}K&&(Ke(t,I,S,!1),Re(t,t.line-p),I=S=t.position,K=!1),w(G)||(S=t.position+1),G=t.input.charCodeAt(++t.position)}return Ke(t,I,S,!1),t.result?!0:(t.kind=V,t.result=j,!1)}function g(t,_){let E,I,S=t.input.charCodeAt(t.position);if(S!==39)return!1;for(t.kind="scalar",t.result="",t.position++,E=I=t.position;(S=t.input.charCodeAt(t.position))!==0;)if(S===39)if(Ke(t,E,t.position,!0),S=t.input.charCodeAt(++t.position),S===39)E=t.position,t.position++,I=t.position;else return!0;else R(S)?(Ke(t,E,I,!0),Re(t,J(t,!1,_)),E=I=t.position):t.position===t.lineStart&&fe(t)?H(t,"unexpected end of the document within a single quoted scalar"):(t.position++,w(S)||(I=t.position));H(t,"unexpected end of the stream within a single quoted scalar")}function y(t,_){let E,I,S,K=t.input.charCodeAt(t.position);if(K!==34)return!1;for(t.kind="scalar",t.result="",t.position++,E=I=t.position;(K=t.input.charCodeAt(t.position))!==0;){if(K===34)return Ke(t,E,t.position,!0),t.position++,!0;if(K===92){if(Ke(t,E,t.position,!0),K=t.input.charCodeAt(++t.position),R(K))J(t,!1,_);else if(K<256&&T[K])t.result+=L[K],t.position++;else if((S=q(K))>0){let p=S,A=0;for(;p>0;p--)K=t.input.charCodeAt(++t.position),(S=Z(K))>=0?A=(A<<4)+S:H(t,"expected hexadecimal character");t.result+=ge(A),t.position++}else H(t,"unknown escape sequence");E=I=t.position}else R(K)?(Ke(t,E,I,!0),Re(t,J(t,!1,_)),E=I=t.position):t.position===t.lineStart&&fe(t)?H(t,"unexpected end of the document within a double quoted scalar"):(t.position++,w(K)||(I=t.position))}H(t,"unexpected end of the stream within a double quoted scalar")}function O(t,_){let E=!0,I,S,K;const p=t.tag;let A;const M=t.anchor;let V,j,G,U;const me=Object.create(null);let ue,ve,Ae,Ie=t.input.charCodeAt(t.position);if(Ie===91)V=93,U=!1,A=[];else if(Ie===123)V=125,U=!0,A={};else return!1;for(t.anchor!==null&&_e(t,t.anchor,A),Ie=t.input.charCodeAt(++t.position);Ie!==0;){if(J(t,!0,_),Ie=t.input.charCodeAt(t.position),Ie===V)return t.position++,t.tag=p,t.anchor=M,t.kind=U?"mapping":"sequence",t.result=A,!0;if(E?Ie===44&&H(t,"expected the node content, but found ','"):H(t,"missed comma between flow collection entries"),ve=ue=Ae=null,j=G=!1,Ie===63){const He=t.input.charCodeAt(t.position+1);x(He)&&(j=G=!0,t.position++,J(t,!0,_))}I=t.line,S=t.lineStart,K=t.position,ie(t,_,i,!1,!0),ve=t.tag,ue=t.result,J(t,!0,_),Ie=t.input.charCodeAt(t.position),(G||t.line===I)&&Ie===58&&(j=!0,Ie=t.input.charCodeAt(++t.position),J(t,!0,_),ie(t,_,i,!1,!0),Ae=t.result),U?P(t,A,me,ve,ue,Ae,I,S,K):j?A.push(P(t,null,me,ve,ue,Ae,I,S,K)):A.push(ue),J(t,!0,_),Ie=t.input.charCodeAt(t.position),Ie===44?(E=!0,Ie=t.input.charCodeAt(++t.position)):E=!1}H(t,"unexpected end of the stream within a flow collection")}function $(t,_){let E,I=u,S=!1,K=!1,p=_,A=0,M=!1,V,j=t.input.charCodeAt(t.position);if(j===124)E=!1;else if(j===62)E=!0;else return!1;for(t.kind="scalar",t.result="";j!==0;)if(j=t.input.charCodeAt(++t.position),j===43||j===45)u===I?I=j===43?m:d:H(t,"repeat of a chomping mode identifier");else if((V=ae(j))>=0)V===0?H(t,"bad explicit indentation width of a block scalar; it cannot be less than one"):K?H(t,"repeat of an indentation width identifier"):(p=_+V-1,K=!0);else break;if(w(j)){do j=t.input.charCodeAt(++t.position);while(w(j));if(j===35)do j=t.input.charCodeAt(++t.position);while(!R(j)&&j!==0)}for(;j!==0;){for(ce(t),t.lineIndent=0,j=t.input.charCodeAt(t.position);(!K||t.lineIndent<p)&&j===32;)t.lineIndent++,j=t.input.charCodeAt(++t.position);if(!K&&t.lineIndent>p&&(p=t.lineIndent),R(j)){A++;continue}if(!K&&p===0&&H(t,"missing indentation for block scalar"),t.lineIndent<p){I===m?t.result+=e.repeat(`
`,S?1+A:A):I===u&&S&&(t.result+=`
`);break}E?w(j)?(M=!0,t.result+=e.repeat(`
`,S?1+A:A)):M?(M=!1,t.result+=e.repeat(`
`,A+1)):A===0?S&&(t.result+=" "):t.result+=e.repeat(`
`,A):t.result+=e.repeat(`
`,S?1+A:A),S=!0,K=!0,A=0;const G=t.position;for(;!R(j)&&j!==0;)j=t.input.charCodeAt(++t.position);Ke(t,G,t.position,!1)}return!0}function k(t,_){const E=t.tag,I=t.anchor,S=[];let K=!1;if(t.firstTabInLine!==-1)return!1;t.anchor!==null&&_e(t,t.anchor,S);let p=t.input.charCodeAt(t.position);for(;p!==0&&(t.firstTabInLine!==-1&&(t.position=t.firstTabInLine,H(t,"tab characters must not be used in indentation")),p===45);){const A=t.input.charCodeAt(t.position+1);if(!x(A))break;if(K=!0,t.position++,J(t,!0,-1)&&t.lineIndent<=_){S.push(null),p=t.input.charCodeAt(t.position);continue}const M=t.line;if(ie(t,_,l,!1,!0),S.push(t.result),J(t,!0,-1),p=t.input.charCodeAt(t.position),(t.line===M||t.lineIndent>_)&&p!==0)H(t,"bad indentation of a sequence entry");else if(t.lineIndent<_)break}return K?(t.tag=E,t.anchor=I,t.kind="sequence",t.result=S,!0):!1}function te(t,_,E){let I,S,K,p;const A=t.tag,M=t.anchor,V={},j=Object.create(null);let G=null,U=null,me=null,ue=!1,ve=!1;if(t.firstTabInLine!==-1)return!1;t.anchor!==null&&_e(t,t.anchor,V);let Ae=t.input.charCodeAt(t.position);for(;Ae!==0;){!ue&&t.firstTabInLine!==-1&&(t.position=t.firstTabInLine,H(t,"tab characters must not be used in indentation"));const Ie=t.input.charCodeAt(t.position+1),He=t.line;if((Ae===63||Ae===58)&&x(Ie))Ae===63?(ue&&(P(t,V,j,G,U,null,S,K,p),G=U=me=null),ve=!0,ue=!0,I=!0):ue?(ue=!1,I=!0):H(t,"incomplete explicit mapping pair; a key node is missed; or followed by a non-tabulated empty line"),t.position+=1,Ae=Ie;else{if(S=t.line,K=t.lineStart,p=t.position,!ie(t,E,s,!1,!0))break;if(t.line===He){for(Ae=t.input.charCodeAt(t.position);w(Ae);)Ae=t.input.charCodeAt(++t.position);if(Ae===58)Ae=t.input.charCodeAt(++t.position),x(Ae)||H(t,"a whitespace character is expected after the key-value separator within a block mapping"),ue&&(P(t,V,j,G,U,null,S,K,p),G=U=me=null),ve=!0,ue=!1,I=!1,G=t.tag,U=t.result;else if(ve)H(t,"can not read an implicit mapping pair; a colon is missed");else return t.tag=A,t.anchor=M,!0}else if(ve)H(t,"can not read a block mapping entry; a multiline key may not be an implicit key");else return t.tag=A,t.anchor=M,!0}if((t.line===He||t.lineIndent>_)&&(ue&&(S=t.line,K=t.lineStart,p=t.position),ie(t,_,c,!0,I)&&(ue?U=t.result:me=t.result),ue||(P(t,V,j,G,U,me,S,K,p),G=U=me=null),J(t,!0,-1),Ae=t.input.charCodeAt(t.position)),(t.line===He||t.lineIndent>_)&&Ae!==0)H(t,"bad indentation of a mapping entry");else if(t.lineIndent<_)break}return ue&&P(t,V,j,G,U,null,S,K,p),ve&&(t.tag=A,t.anchor=M,t.kind="mapping",t.result=V),ve}function oe(t){let _=!1,E=!1,I,S,K=t.input.charCodeAt(t.position);if(K!==33)return!1;t.tag!==null&&H(t,"duplication of a tag property"),K=t.input.charCodeAt(++t.position),K===60?(_=!0,K=t.input.charCodeAt(++t.position)):K===33?(E=!0,I="!!",K=t.input.charCodeAt(++t.position)):I="!";let p=t.position;if(_){do K=t.input.charCodeAt(++t.position);while(K!==0&&K!==62);t.position<t.length?(S=t.input.slice(p,t.position),K=t.input.charCodeAt(++t.position)):H(t,"unexpected end of the stream within a verbatim tag")}else{for(;K!==0&&!x(K);)K===33&&(E?H(t,"tag suffix cannot contain exclamation marks"):(I=t.input.slice(p-1,t.position+1),B.test(I)||H(t,"named tag handle cannot contain such characters"),E=!0,p=t.position+1)),K=t.input.charCodeAt(++t.position);S=t.input.slice(p,t.position),N.test(S)&&H(t,"tag suffix cannot contain flow indicator characters")}S&&!D.test(S)&&H(t,"tag name cannot contain such characters: "+S);try{S=decodeURIComponent(S)}catch{H(t,"tag name is malformed: "+S)}return _?t.tag=S:r.call(t.tagMap,I)?t.tag=t.tagMap[I]+S:I==="!"?t.tag="!"+S:I==="!!"?t.tag="tag:yaml.org,2002:"+S:H(t,'undeclared tag handle "'+I+'"'),!0}function ne(t){let _=t.input.charCodeAt(t.position);if(_!==38)return!1;t.anchor!==null&&H(t,"duplication of an anchor property"),_=t.input.charCodeAt(++t.position);const E=t.position;for(;_!==0&&!x(_)&&!se(_);)_=t.input.charCodeAt(++t.position);return t.position===E&&H(t,"name of an anchor node must contain at least one character"),t.anchor=t.input.slice(E,t.position),!0}function z(t){let _=t.input.charCodeAt(t.position);if(_!==42)return!1;_=t.input.charCodeAt(++t.position);const E=t.position;for(;_!==0&&!x(_)&&!se(_);)_=t.input.charCodeAt(++t.position);t.position===E&&H(t,"name of an alias node must contain at least one character");const I=t.input.slice(E,t.position);return r.call(t.anchorMap,I)||H(t,'unidentified alias "'+I+'"'),t.result=t.anchorMap[I],J(t,!0,-1),!0}function be(t,_,E,I){const S=We(t);return Ze(t),bn(t,_),t.tag=null,t.anchor=null,t.kind=null,t.result=null,te(t,E,I)&&t.kind==="mapping"?(en(t),!0):(vn(t),bn(t,S),!1)}function ie(t,_,E,I,S){let K,p,A=1,M=!1,V=!1,j=null,G,U,me;t.depth>=t.maxDepth&&H(t,"nesting exceeded maxDepth ("+t.maxDepth+")"),t.depth+=1,t.listener!==null&&t.listener("open",t),t.tag=null,t.anchor=null,t.kind=null,t.result=null;const ue=K=p=c===E||l===E;if(I&&J(t,!0,-1)&&(M=!0,t.lineIndent>_?A=1:t.lineIndent===_?A=0:t.lineIndent<_&&(A=-1)),A===1)for(;;){const ve=t.input.charCodeAt(t.position),Ae=We(t);if(M&&(ve===33&&t.tag!==null||ve===38&&t.anchor!==null)||!oe(t)&&!ne(t))break;j===null&&(j=Ae),J(t,!0,-1)?(M=!0,p=ue,t.lineIndent>_?A=1:t.lineIndent===_?A=0:t.lineIndent<_&&(A=-1)):p=!1}if(p&&(p=M||S),A===1||c===E)if(i===E||s===E?U=_:U=_+1,me=t.position-t.lineStart,A===1)if(p&&(k(t,me)||te(t,me,U))||O(t,U))V=!0;else{const ve=t.input.charCodeAt(t.position);j!==null&&ue&&!p&&ve!==124&&ve!==62&&be(t,j,j.position-j.lineStart,U)||K&&$(t,U)||g(t,U)||y(t,U)?V=!0:z(t)?(V=!0,(t.tag!==null||t.anchor!==null)&&H(t,"alias node should not have any properties")):h(t,U,i===E)&&(V=!0,t.tag===null&&(t.tag="?")),t.anchor!==null&&_e(t,t.anchor,t.result)}else A===0&&(V=p&&k(t,me));if(t.tag===null)t.anchor!==null&&_e(t,t.anchor,t.result);else if(t.tag==="?"){t.result!==null&&t.kind!=="scalar"&&H(t,'unacceptable node kind for !<?> tag; it should be "scalar", not "'+t.kind+'"');for(let ve=0,Ae=t.implicitTypes.length;ve<Ae;ve+=1)if(G=t.implicitTypes[ve],G.resolve(t.result)){t.result=G.construct(t.result),t.tag=G.tag,t.anchor!==null&&_e(t,t.anchor,t.result);break}}else if(t.tag!=="!"){if(r.call(t.typeMap[t.kind||"fallback"],t.tag))G=t.typeMap[t.kind||"fallback"][t.tag];else{G=null;const ve=t.typeMap.multi[t.kind||"fallback"];for(let Ae=0,Ie=ve.length;Ae<Ie;Ae+=1)if(t.tag.slice(0,ve[Ae].tag.length)===ve[Ae].tag){G=ve[Ae];break}}G||H(t,"unknown tag !<"+t.tag+">"),t.result!==null&&G.kind!==t.kind&&H(t,"unacceptable node kind for !<"+t.tag+'> tag; it should be "'+G.kind+'", not "'+t.kind+'"'),G.resolve(t.result,t.tag)?(t.result=G.construct(t.result,t.tag),t.anchor!==null&&_e(t,t.anchor,t.result)):H(t,"cannot resolve a node with !<"+t.tag+"> explicit tag")}return t.listener!==null&&t.listener("close",t),t.depth-=1,t.tag!==null||t.anchor!==null||V}function he(t){const _=t.position;let E=!1,I;for(t.version=null,t.checkLineBreaks=t.legacy,t.tagMap=Object.create(null),t.anchorMap=Object.create(null);(I=t.input.charCodeAt(t.position))!==0&&(J(t,!0,-1),I=t.input.charCodeAt(t.position),!(t.lineIndent>0||I!==37));){E=!0,I=t.input.charCodeAt(++t.position);let S=t.position;for(;I!==0&&!x(I);)I=t.input.charCodeAt(++t.position);const K=t.input.slice(S,t.position),p=[];for(K.length<1&&H(t,"directive name must not be less than one character in length");I!==0;){for(;w(I);)I=t.input.charCodeAt(++t.position);if(I===35){do I=t.input.charCodeAt(++t.position);while(I!==0&&!R(I));break}if(R(I))break;for(S=t.position;I!==0&&!x(I);)I=t.input.charCodeAt(++t.position);p.push(t.input.slice(S,t.position))}I!==0&&ce(t),r.call(Sn,K)?Sn[K](t,K,p):we(t,'unknown document directive "'+K+'"')}if(J(t,!0,-1),t.lineIndent===0&&t.input.charCodeAt(t.position)===45&&t.input.charCodeAt(t.position+1)===45&&t.input.charCodeAt(t.position+2)===45?(t.position+=3,J(t,!0,-1)):E&&H(t,"directives end mark is expected"),ie(t,t.lineIndent-1,c,!1,!0),J(t,!0,-1),t.checkLineBreaks&&v.test(t.input.slice(_,t.position))&&we(t,"non-ASCII line breaks are interpreted as content"),t.documents.push(t.result),t.position===t.lineStart&&fe(t)){t.input.charCodeAt(t.position)===46&&(t.position+=3,J(t,!0,-1));return}t.position<t.length-1&&H(t,"end of the stream or a document separator is expected")}function xe(t,_){t=String(t),_=_||{},t.length!==0&&(t.charCodeAt(t.length-1)!==10&&t.charCodeAt(t.length-1)!==13&&(t+=`
`),t.charCodeAt(0)===65279&&(t=t.slice(1)));const E=new Y(t,_),I=t.indexOf("\0");for(I!==-1&&(E.position=I,H(E,"null byte is not allowed in input")),E.input+="\0";E.input.charCodeAt(E.position)===32;)E.lineIndent+=1,E.position+=1;for(;E.position<E.length-1;)he(E);return E.documents}function ke(t,_,E){_!==null&&typeof _=="object"&&typeof E>"u"&&(E=_,_=null);const I=xe(t,E);if(typeof _!="function")return I;for(let S=0,K=I.length;S<K;S+=1)_(I[S])}function Oe(t,_){const E=xe(t,_);if(E.length!==0){if(E.length===1)return E[0];throw new n("expected a single document in the stream, but found more")}}return qa.loadAll=ke,qa.load=Oe,qa}var at={},_s;function Gm(){if(_s)return at;_s=1;const e=Ia(),n=Pa(),o=Qt(),a=Object.prototype.toString,r=Object.prototype.hasOwnProperty,i=65279,s=9,l=10,c=13,u=32,d=33,m=34,f=35,v=37,N=38,B=39,D=42,Q=44,R=45,w=58,x=61,se=62,Z=63,q=64,ae=91,re=93,ge=96,ee=123,T=124,L=125,Y={};Y[0]="\\0",Y[7]="\\a",Y[8]="\\b",Y[9]="\\t",Y[10]="\\n",Y[11]="\\v",Y[12]="\\f",Y[13]="\\r",Y[27]="\\e",Y[34]='\\"',Y[92]="\\\\",Y[133]="\\N",Y[160]="\\_",Y[8232]="\\L",Y[8233]="\\P";const de=["y","Y","yes","Yes","YES","on","On","ON","n","N","no","No","NO","off","Off","OFF"],H=/^[-+]?[0-9_]+(?::[0-9_]+)+(?:\.[0-9_]*)?$/;function we(p,A){if(A===null)return{};const M={},V=Object.keys(A);for(let j=0,G=V.length;j<G;j+=1){let U=V[j],me=String(A[U]);U.slice(0,2)==="!!"&&(U="tag:yaml.org,2002:"+U.slice(2));const ue=p.compiledTypeMap.fallback[U];ue&&r.call(ue.styleAliases,me)&&(me=ue.styleAliases[me]),M[U]=me}return M}function _e(p){let A,M;const V=p.toString(16).toUpperCase();if(p<=255)A="x",M=2;else if(p<=65535)A="u",M=4;else if(p<=4294967295)A="U",M=8;else throw new n("code point within a string may not be greater than 0xFFFFFFFF");return"\\"+A+e.repeat("0",M-V.length)+V}const Ze=1,en=2;function vn(p){this.schema=p.schema||o,this.indent=Math.max(1,p.indent||2),this.noArrayIndent=p.noArrayIndent||!1,this.skipInvalid=p.skipInvalid||!1,this.flowLevel=e.isNothing(p.flowLevel)?-1:p.flowLevel,this.styleMap=we(this.schema,p.styles||null),this.sortKeys=p.sortKeys||!1,this.lineWidth=p.lineWidth||80,this.noRefs=p.noRefs||!1,this.noCompatMode=p.noCompatMode||!1,this.condenseFlow=p.condenseFlow||!1,this.quotingType=p.quotingType==='"'?en:Ze,this.forceQuotes=p.forceQuotes||!1,this.replacer=typeof p.replacer=="function"?p.replacer:null,this.implicitTypes=this.schema.compiledImplicit,this.explicitTypes=this.schema.compiledExplicit,this.tag=null,this.result="",this.duplicates=[],this.usedDuplicates=null}function We(p,A){const M=e.repeat(" ",A);let V=0,j="";const G=p.length;for(;V<G;){let U;const me=p.indexOf(`
`,V);me===-1?(U=p.slice(V),V=G):(U=p.slice(V,me+1),V=me+1),U.length&&U!==`
`&&(j+=M),j+=U}return j}function bn(p,A){return`
`+e.repeat(" ",p.indent*A)}function Sn(p,A){for(let M=0,V=p.implicitTypes.length;M<V;M+=1)if(p.implicitTypes[M].resolve(A))return!0;return!1}function Ke(p){return p===u||p===s}function Ge(p){return p>=32&&p<=126||p>=161&&p<=55295&&p!==8232&&p!==8233||p>=57344&&p<=65533&&p!==i||p>=65536&&p<=1114111}function P(p){return Ge(p)&&p!==i&&p!==c&&p!==l}function ce(p,A,M){const V=P(p),j=V&&!Ke(p);return(M?V:V&&p!==Q&&p!==ae&&p!==re&&p!==ee&&p!==L)&&p!==f&&!(A===w&&!j)||P(A)&&!Ke(A)&&p===f||A===w&&j}function J(p){return Ge(p)&&p!==i&&!Ke(p)&&p!==R&&p!==Z&&p!==w&&p!==Q&&p!==ae&&p!==re&&p!==ee&&p!==L&&p!==f&&p!==N&&p!==D&&p!==d&&p!==T&&p!==x&&p!==se&&p!==B&&p!==m&&p!==v&&p!==q&&p!==ge}function fe(p){return!Ke(p)&&p!==w}function Re(p,A){const M=p.charCodeAt(A);let V;return M>=55296&&M<=56319&&A+1<p.length&&(V=p.charCodeAt(A+1),V>=56320&&V<=57343)?(M-55296)*1024+V-56320+65536:M}function h(p){return/^\n* /.test(p)}const g=1,y=2,O=3,$=4,k=5;function te(p,A,M,V,j,G,U,me){let ue,ve=0,Ae=null,Ie=!1,He=!1;const ri=V!==-1;let Wo=-1,Yo=J(Re(p,0))&&fe(Re(p,p.length-1));if(A||U)for(ue=0;ue<p.length;ve>=65536?ue+=2:ue++){if(ve=Re(p,ue),!Ge(ve))return k;Yo=Yo&&ce(ve,Ae,me),Ae=ve}else{for(ue=0;ue<p.length;ve>=65536?ue+=2:ue++){if(ve=Re(p,ue),ve===l)Ie=!0,ri&&(He=He||ue-Wo-1>V&&p[Wo+1]!==" ",Wo=ue);else if(!Ge(ve))return k;Yo=Yo&&ce(ve,Ae,me),Ae=ve}He=He||ri&&ue-Wo-1>V&&p[Wo+1]!==" "}return!Ie&&!He?Yo&&!U&&!j(p)?g:G===en?k:y:M>9&&h(p)?k:U?G===en?k:y:He?$:O}function oe(p,A,M,V,j){p.dump=(function(){if(A.length===0)return p.quotingType===en?'""':"''";if(!p.noCompatMode&&(de.indexOf(A)!==-1||H.test(A)))return p.quotingType===en?'"'+A+'"':"'"+A+"'";const G=p.indent*Math.max(1,M),U=p.lineWidth===-1?-1:Math.max(Math.min(p.lineWidth,40),p.lineWidth-G),me=V||p.flowLevel>-1&&M>=p.flowLevel;function ue(ve){return Sn(p,ve)}switch(te(A,me,p.indent,U,ue,p.quotingType,p.forceQuotes&&!V,j)){case g:return A;case y:return"'"+A.replace(/'/g,"''")+"'";case O:return"|"+ne(A,p.indent)+z(We(A,G));case $:return">"+ne(A,p.indent)+z(We(be(A,U),G));case k:return'"'+he(A)+'"';default:throw new n("impossible error: invalid scalar style")}})()}function ne(p,A){const M=h(p)?String(A):"",V=p[p.length-1]===`
`,G=V&&(p[p.length-2]===`
`||p===`
`)?"+":V?"":"-";return M+G+`
`}function z(p){return p[p.length-1]===`
`?p.slice(0,-1):p}function be(p,A){const M=/(\n+)([^\n]*)/g;let V=(function(){let me=p.indexOf(`
`);return me=me!==-1?me:p.length,M.lastIndex=me,ie(p.slice(0,me),A)})(),j=p[0]===`
`||p[0]===" ",G,U;for(;U=M.exec(p);){const me=U[1],ue=U[2];G=ue[0]===" ",V+=me+(!j&&!G&&ue!==""?`
`:"")+ie(ue,A),j=G}return V}function ie(p,A){if(p===""||p[0]===" ")return p;const M=/ [^ ]/g;let V,j=0,G,U=0,me=0,ue="";for(;V=M.exec(p);)me=V.index,me-j>A&&(G=U>j?U:me,ue+=`
`+p.slice(j,G),j=G+1),U=me;return ue+=`
`,p.length-j>A&&U>j?ue+=p.slice(j,U)+`
`+p.slice(U+1):ue+=p.slice(j),ue.slice(1)}function he(p){let A="",M=0;for(let V=0;V<p.length;M>=65536?V+=2:V++){M=Re(p,V);const j=Y[M];!j&&Ge(M)?(A+=p[V],M>=65536&&(A+=p[V+1])):A+=j||_e(M)}return A}function xe(p,A,M){let V="";const j=p.tag;for(let G=0,U=M.length;G<U;G+=1){let me=M[G];p.replacer&&(me=p.replacer.call(M,String(G),me)),(E(p,A,me,!1,!1)||typeof me>"u"&&E(p,A,null,!1,!1))&&(V!==""&&(V+=","+(p.condenseFlow?"":" ")),V+=p.dump)}p.tag=j,p.dump="["+V+"]"}function ke(p,A,M,V){let j="";const G=p.tag;for(let U=0,me=M.length;U<me;U+=1){let ue=M[U];p.replacer&&(ue=p.replacer.call(M,String(U),ue)),(E(p,A+1,ue,!0,!0,!1,!0)||typeof ue>"u"&&E(p,A+1,null,!0,!0,!1,!0))&&((!V||j!=="")&&(j+=bn(p,A)),p.dump&&l===p.dump.charCodeAt(0)?j+="-":j+="- ",j+=p.dump)}p.tag=G,p.dump=j||"[]"}function Oe(p,A,M){let V="";const j=p.tag,G=Object.keys(M);for(let U=0,me=G.length;U<me;U+=1){let ue="";V!==""&&(ue+=", "),p.condenseFlow&&(ue+='"');const ve=G[U];let Ae=M[ve];p.replacer&&(Ae=p.replacer.call(M,ve,Ae)),E(p,A,ve,!1,!1)&&(p.dump.length>1024&&(ue+="? "),ue+=p.dump+(p.condenseFlow?'"':"")+":"+(p.condenseFlow?"":" "),E(p,A,Ae,!1,!1)&&(ue+=p.dump,V+=ue))}p.tag=j,p.dump="{"+V+"}"}function t(p,A,M,V){let j="";const G=p.tag,U=Object.keys(M);if(p.sortKeys===!0)U.sort();else if(typeof p.sortKeys=="function")U.sort(p.sortKeys);else if(p.sortKeys)throw new n("sortKeys must be a boolean or a function");for(let me=0,ue=U.length;me<ue;me+=1){let ve="";(!V||j!=="")&&(ve+=bn(p,A));const Ae=U[me];let Ie=M[Ae];if(p.replacer&&(Ie=p.replacer.call(M,Ae,Ie)),!E(p,A+1,Ae,!0,!0,!0))continue;const He=p.tag!==null&&p.tag!=="?"||p.dump&&p.dump.length>1024;He&&(p.dump&&l===p.dump.charCodeAt(0)?ve+="?":ve+="? "),ve+=p.dump,He&&(ve+=bn(p,A)),E(p,A+1,Ie,!0,He)&&(p.dump&&l===p.dump.charCodeAt(0)?ve+=":":ve+=": ",ve+=p.dump,j+=ve)}p.tag=G,p.dump=j||"{}"}function _(p,A,M){const V=M?p.explicitTypes:p.implicitTypes;for(let j=0,G=V.length;j<G;j+=1){const U=V[j];if((U.instanceOf||U.predicate)&&(!U.instanceOf||typeof A=="object"&&A instanceof U.instanceOf)&&(!U.predicate||U.predicate(A))){if(M?U.multi&&U.representName?p.tag=U.representName(A):p.tag=U.tag:p.tag="?",U.represent){const me=p.styleMap[U.tag]||U.defaultStyle;let ue;if(a.call(U.represent)==="[object Function]")ue=U.represent(A,me);else if(r.call(U.represent,me))ue=U.represent[me](A,me);else throw new n("!<"+U.tag+'> tag resolver accepts not "'+me+'" style');p.dump=ue}return!0}}return!1}function E(p,A,M,V,j,G,U){p.tag=null,p.dump=M,_(p,M,!1)||_(p,M,!0);const me=a.call(p.dump),ue=V;V&&(V=p.flowLevel<0||p.flowLevel>A);const ve=me==="[object Object]"||me==="[object Array]";let Ae,Ie;if(ve&&(Ae=p.duplicates.indexOf(M),Ie=Ae!==-1),(p.tag!==null&&p.tag!=="?"||Ie||p.indent!==2&&A>0)&&(j=!1),Ie&&p.usedDuplicates[Ae])p.dump="*ref_"+Ae;else{if(ve&&Ie&&!p.usedDuplicates[Ae]&&(p.usedDuplicates[Ae]=!0),me==="[object Object]")V&&Object.keys(p.dump).length!==0?(t(p,A,p.dump,j),Ie&&(p.dump="&ref_"+Ae+p.dump)):(Oe(p,A,p.dump),Ie&&(p.dump="&ref_"+Ae+" "+p.dump));else if(me==="[object Array]")V&&p.dump.length!==0?(p.noArrayIndent&&!U&&A>0?ke(p,A-1,p.dump,j):ke(p,A,p.dump,j),Ie&&(p.dump="&ref_"+Ae+p.dump)):(xe(p,A,p.dump),Ie&&(p.dump="&ref_"+Ae+" "+p.dump));else if(me==="[object String]")p.tag!=="?"&&oe(p,p.dump,A,G,ue);else{if(me==="[object Undefined]")return!1;if(p.skipInvalid)return!1;throw new n("unacceptable kind of an object to dump "+me)}if(p.tag!==null&&p.tag!=="?"){let He=encodeURI(p.tag[0]==="!"?p.tag.slice(1):p.tag).replace(/!/g,"%21");p.tag[0]==="!"?He="!"+He:He.slice(0,18)==="tag:yaml.org,2002:"?He="!!"+He.slice(18):He="!<"+He+">",p.dump=He+" "+p.dump}}return!0}function I(p,A){const M=[],V=[];S(p,M,V);const j=V.length;for(let G=0;G<j;G+=1)A.duplicates.push(M[V[G]]);A.usedDuplicates=new Array(j)}function S(p,A,M){if(p!==null&&typeof p=="object"){const V=A.indexOf(p);if(V!==-1)M.indexOf(V)===-1&&M.push(V);else if(A.push(p),Array.isArray(p))for(let j=0,G=p.length;j<G;j+=1)S(p[j],A,M);else{const j=Object.keys(p);for(let G=0,U=j.length;G<U;G+=1)S(p[j[G]],A,M)}}}function K(p,A){A=A||{};const M=new vn(A);M.noRefs||I(p,M);let V=p;return M.replacer&&(V=M.replacer.call({"":V},"",V)),E(M,0,V,!0,!0)?M.dump+`
`:""}return at.dump=K,at}var ys;function Wm(){if(ys)return nn;ys=1;const e=Km(),n=Gm();function o(a,r){return function(){throw new Error("Function yaml."+a+" is removed in js-yaml 4. Use yaml."+r+" instead, which is now safe by default.")}}return nn.Type=hn(),nn.Schema=uc(),nn.FAILSAFE_SCHEMA=fc(),nn.JSON_SCHEMA=_c(),nn.CORE_SCHEMA=yc(),nn.DEFAULT_SCHEMA=Qt(),nn.load=e.load,nn.loadAll=e.loadAll,nn.dump=n.dump,nn.YAMLException=Pa(),nn.types={binary:xc(),float:bc(),map:pc(),null:hc(),pairs:Tc(),set:Rc(),timestamp:Ac(),bool:vc(),int:gc(),merge:Nc(),omap:Bc(),seq:mc(),str:dc()},nn.safeLoad=o("safeLoad","load"),nn.safeLoadAll=o("safeLoadAll","loadAll"),nn.safeDump=o("safeDump","dump"),nn}var Ym=Wm();const or=Hm(Ym),{Type:Ag,Schema:Ng,FAILSAFE_SCHEMA:xg,JSON_SCHEMA:Bg,CORE_SCHEMA:Tg,DEFAULT_SCHEMA:Rg,load:Sg,loadAll:wg,dump:Eg,YAMLException:Cg,types:kg,safeLoad:Ig,safeLoadAll:Pg,safeDump:Og}=or;class Jm{constructor({ruleSetRepository:n}){this.ruleSetRepository=n}list(){return this.ruleSetRepository.getAll()}get(n){return this.ruleSetRepository.get(n)}async save(n){const o=await this.ruleSetRepository.get(n.id),a=zm(n,{createdAt:o?.createdAt??new Date,updatedAt:new Date});return this.ruleSetRepository.put(a)}async importFromJson(n,o){let a;try{a=JSON.parse(n)}catch{throw new TypeError("Arquivo de regras inválido: JSON malformado.")}return this.save(o?{...a,grupo:o}:a)}async importFromYaml(n,o){let a;try{a=or.load(n)}catch{throw new TypeError("Arquivo de regras inválido: YAML malformado.")}return this.save(o?{...a,grupo:o}:a)}exportToJson(n){St(n);const{source:o,createdAt:a,updatedAt:r,...i}=n;return JSON.stringify(i,null,2)}exportToYaml(n){St(n);const{source:o,createdAt:a,updatedAt:r,...i}=n;return or.dump(i,{noRefs:!0})}async exportByIdToJson(n){const o=await this.ruleSetRepository.get(n);if(!o)throw new Error("Conjunto de regras não encontrado.");return this.exportToJson(o)}async exportByIdToYaml(n){const o=await this.ruleSetRepository.get(n);if(!o)throw new Error("Conjunto de regras não encontrado.");return this.exportToYaml(o)}delete(n){return this.ruleSetRepository.delete(n)}}async function Qm({indexedDB:e}={}){const n=await Rm(e),o={projectRepository:new Cm(n),environmentRepository:new wm(n),elementRepository:new Sm(n),evaluationRepository:new Em(n),ruleSetRepository:new km(n)},a=new jm(o);return{projectService:new Lm(o),evaluationService:a,quickEvaluationService:new qm({evaluationService:a}),ruleSetService:new Jm(o),repositories:o,close:()=>n.close()}}const Xm=`id: area_descanso
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
`,wp=`id: piso-desnivel
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
`,Ep=`id: piso_tatil
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
`,Dp=Object.assign({"../rules/nbr9050-2020/area_descanso.yaml":Xm,"../rules/nbr9050-2020/armario_vestiario.yaml":Zm,"../rules/nbr9050-2020/assento_pmr_plateia.yaml":ep,"../rules/nbr9050-2020/bacia_sanitaria.yaml":np,"../rules/nbr9050-2020/balcao.yaml":op,"../rules/nbr9050-2020/banco_vestiario.yaml":ap,"../rules/nbr9050-2020/banheira_acessivel.yaml":rp,"../rules/nbr9050-2020/barras_apoio.yaml":tp,"../rules/nbr9050-2020/bebedouro.yaml":ip,"../rules/nbr9050-2020/cabides.yaml":sp,"../rules/nbr9050-2020/cabina_vestiario.yaml":lp,"../rules/nbr9050-2020/caixa_autoatendimento.yaml":cp,"../rules/nbr9050-2020/calcada.yaml":up,"../rules/nbr9050-2020/chuveiro.yaml":dp,"../rules/nbr9050-2020/corredores.yaml":mp,"../rules/nbr9050-2020/corrimaos.yaml":pp,"../rules/nbr9050-2020/degraus-isolados.yaml":fp,"../rules/nbr9050-2020/elevadores.yaml":hp,"../rules/nbr9050-2020/escadas.yaml":vp,"../rules/nbr9050-2020/espaco_cao_guia.yaml":gp,"../rules/nbr9050-2020/espaco_pcr_plateia.yaml":bp,"../rules/nbr9050-2020/espelhos_acessiveis.yaml":_p,"../rules/nbr9050-2020/estacionamento.yaml":yp,"../rules/nbr9050-2020/guarda_corpos.yaml":Ap,"../rules/nbr9050-2020/janelas.yaml":Np,"../rules/nbr9050-2020/lavatorio.yaml":xp,"../rules/nbr9050-2020/mesa.yaml":Bp,"../rules/nbr9050-2020/mictorio.yaml":Tp,"../rules/nbr9050-2020/papeleiras.yaml":Rp,"../rules/nbr9050-2020/piscina.yaml":Sp,"../rules/nbr9050-2020/piso-desnivel.yaml":wp,"../rules/nbr9050-2020/piso_tatil.yaml":Ep,"../rules/nbr9050-2020/porta_objetos.yaml":Cp,"../rules/nbr9050-2020/portas.yaml":kp,"../rules/nbr9050-2020/rampas.yaml":Ip,"../rules/nbr9050-2020/sanitario_acessivel.yaml":Pp,"../rules/nbr9050-2020/sinalizacao.yaml":Op,"../rules/nbr9050-2020/vagas_acessiveis.yaml":Vp});async function jp(){return Object.entries(Dp).map(([e,n])=>({path:e,ruleSet:or.load(n)})).sort((e,n)=>e.ruleSet.nome.localeCompare(n.ruleSet.nome))}const Io=typeof document<"u";function Sc(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function Lp(e){return e.__esModule||e[Symbol.toStringTag]==="Module"||e.default&&Sc(e.default)}const De=Object.assign;function rt(e,n){const o={};for(const a in n){const r=n[a];o[a]=On(r)?r.map(e):e(r)}return o}const pa=()=>{},On=Array.isArray;function As(e,n){const o={};for(const a in e)o[a]=a in n?n[a]:e[a];return o}const wc=/#/g,qp=/&/g,$p=/\//g,Mp=/=/g,Fp=/\?/g,Ec=/\+/g,zp=/%5B/g,Hp=/%5D/g,Cc=/%5E/g,Up=/%60/g,kc=/%7B/g,Kp=/%7C/g,Ic=/%7D/g,Gp=/%20/g;function Xt(e){return e==null?"":encodeURI(""+e).replace(Kp,"|").replace(zp,"[").replace(Hp,"]")}function Wp(e){return Xt(e).replace(kc,"{").replace(Ic,"}").replace(Cc,"^")}function wt(e){return Xt(e).replace(Ec,"%2B").replace(Gp,"+").replace(wc,"%23").replace(qp,"%26").replace(Up,"`").replace(kc,"{").replace(Ic,"}").replace(Cc,"^")}function Yp(e){return wt(e).replace(Mp,"%3D")}function Jp(e){return Xt(e).replace(wc,"%23").replace(Fp,"%3F")}function Qp(e){return Jp(e).replace($p,"%2F")}function Ba(e){if(e==null)return null;try{return decodeURIComponent(""+e)}catch{}return""+e}const Xp=/\/$/,Zp=e=>e.replace(Xp,"");function tt(e,n,o="/"){let a,r={},i="",s="";const l=n.indexOf("#");let c=n.indexOf("?");return c=l>=0&&c>l?-1:c,c>=0&&(a=n.slice(0,c),i=n.slice(c,l>0?l:n.length),r=e(i.slice(1))),l>=0&&(a=a||n.slice(0,l),s=n.slice(l,n.length)),a=af(a??n,o),{fullPath:a+i+s,path:a,query:r,hash:Ba(s)}}function ef(e,n){const o=n.query?e(n.query):"";return n.path+(o&&"?")+o+(n.hash||"")}function Ns(e,n){return!n||!e.toLowerCase().startsWith(n.toLowerCase())?e:e.slice(n.length)||"/"}function nf(e,n,o){const a=n.matched.length-1,r=o.matched.length-1;return a>-1&&a===r&&zo(n.matched[a],o.matched[r])&&Pc(n.params,o.params)&&e(n.query)===e(o.query)&&n.hash===o.hash}function zo(e,n){return(e.aliasOf||e)===(n.aliasOf||n)}function Pc(e,n){if(Object.keys(e).length!==Object.keys(n).length)return!1;for(var o in e)if(!of(e[o],n[o]))return!1;return!0}function of(e,n){return On(e)?xs(e,n):On(n)?xs(n,e):e?.valueOf()===n?.valueOf()}function xs(e,n){return On(n)?e.length===n.length&&e.every((o,a)=>o===n[a]):e.length===1&&e[0]===n}function af(e,n){if(e.startsWith("/"))return e;if(!e)return n;const o=n.split("/"),a=e.split("/"),r=a[a.length-1];(r===".."||r===".")&&a.push("");let i=o.length-1,s,l;for(s=0;s<a.length;s++)if(l=a[s],l!==".")if(l==="..")i>1&&i--;else break;return o.slice(0,i).join("/")+"/"+a.slice(s).join("/")}const io={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};let Et=(function(e){return e.pop="pop",e.push="push",e})({}),it=(function(e){return e.back="back",e.forward="forward",e.unknown="",e})({});function rf(e){if(!e)if(Io){const n=document.querySelector("base");e=n&&n.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),Zp(e)}const tf=/^[^#]+#/;function sf(e,n){return e.replace(tf,"#")+n}function lf(e,n){const o=document.documentElement.getBoundingClientRect(),a=e.getBoundingClientRect();return{behavior:n.behavior,left:a.left-o.left-(n.left||0),top:a.top-o.top-(n.top||0)}}const _r=()=>({left:window.scrollX,top:window.scrollY});function cf(e){let n;if("el"in e){const o=e.el,a=typeof o=="string"&&o.startsWith("#"),r=typeof o=="string"?a?document.getElementById(o.slice(1)):document.querySelector(o):o;if(!r)return;n=lf(r,e)}else n=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(n):window.scrollTo(n.left!=null?n.left:window.scrollX,n.top!=null?n.top:window.scrollY)}function Bs(e,n){return(history.state?history.state.position-n:-1)+e}const Ct=new Map;function uf(e,n){Ct.set(e,n)}function df(e){const n=Ct.get(e);return Ct.delete(e),n}function mf(e){return typeof e=="string"||e&&typeof e=="object"}function Oc(e){return typeof e=="string"||typeof e=="symbol"}let Ue=(function(e){return e[e.MATCHER_NOT_FOUND=1]="MATCHER_NOT_FOUND",e[e.NAVIGATION_GUARD_REDIRECT=2]="NAVIGATION_GUARD_REDIRECT",e[e.NAVIGATION_ABORTED=4]="NAVIGATION_ABORTED",e[e.NAVIGATION_CANCELLED=8]="NAVIGATION_CANCELLED",e[e.NAVIGATION_DUPLICATED=16]="NAVIGATION_DUPLICATED",e})({});const Vc=Symbol("");Ue.MATCHER_NOT_FOUND+"",Ue.NAVIGATION_GUARD_REDIRECT+"",Ue.NAVIGATION_ABORTED+"",Ue.NAVIGATION_CANCELLED+"",Ue.NAVIGATION_DUPLICATED+"";function Ho(e,n){return De(new Error,{type:e,[Vc]:!0},n)}function Kn(e,n){return e instanceof Error&&Vc in e&&(n==null||!!(e.type&n))}const pf=["params","query","hash"];function ff(e){if(typeof e=="string")return e;if(e.path!=null)return e.path;const n={};for(const o of pf)o in e&&(n[o]=e[o]);return JSON.stringify(n,null,2)}function hf(e){const n={};if(e===""||e==="?")return n;const o=(e[0]==="?"?e.slice(1):e).split("&");for(let a=0;a<o.length;++a){const r=o[a].replace(Ec," "),i=r.indexOf("="),s=Ba(i<0?r:r.slice(0,i)),l=i<0?null:Ba(r.slice(i+1));if(s in n){let c=n[s];On(c)||(c=n[s]=[c]),c.push(l)}else n[s]=l}return n}function Ts(e){let n="";for(let o in e){const a=e[o];if(o=Yp(o),a==null){a!==void 0&&(n+=(n.length?"&":"")+o);continue}(On(a)?a.map(r=>r&&wt(r)):[a&&wt(a)]).forEach(r=>{r!==void 0&&(n+=(n.length?"&":"")+o,r!=null&&(n+="="+r))})}return n}function vf(e){const n={};for(const o in e){const a=e[o];a!==void 0&&(n[o]=On(a)?a.map(r=>r==null?null:""+r):a==null?a:""+a)}return n}const gf=Symbol(""),Rs=Symbol(""),yr=Symbol(""),Zt=Symbol(""),kt=Symbol("");function na(){let e=[];function n(a){return e.push(a),()=>{const r=e.indexOf(a);r>-1&&e.splice(r,1)}}function o(){e=[]}return{add:n,list:()=>e.slice(),reset:o}}function co(e,n,o,a,r,i=s=>s()){const s=a&&(a.enterCallbacks[r]=a.enterCallbacks[r]||[]);return()=>new Promise((l,c)=>{const u=f=>{f===!1?c(Ho(Ue.NAVIGATION_ABORTED,{from:o,to:n})):f instanceof Error?c(f):mf(f)?c(Ho(Ue.NAVIGATION_GUARD_REDIRECT,{from:n,to:f})):(s&&a.enterCallbacks[r]===s&&typeof f=="function"&&s.push(f),l())},d=i(()=>e.call(a&&a.instances[r],n,o,u));let m=Promise.resolve(d);e.length<3&&(m=m.then(u)),m.catch(f=>c(f))})}function st(e,n,o,a,r=i=>i()){const i=[];for(const s of e)for(const l in s.components){let c=s.components[l];if(!(n!=="beforeRouteEnter"&&!s.instances[l]))if(Sc(c)){const u=(c.__vccOpts||c)[n];u&&i.push(co(u,o,a,s,l,r))}else{let u=c();i.push(()=>u.then(d=>{if(!d)throw new Error(`Couldn't resolve component "${l}" at "${s.path}"`);const m=Lp(d)?d.default:d;s.mods[l]=d,s.components[l]=m;const f=(m.__vccOpts||m)[n];return f&&co(f,o,a,s,l,r)()}))}}return i}function bf(e,n){const o=[],a=[],r=[],i=Math.max(n.matched.length,e.matched.length);for(let s=0;s<i;s++){const l=n.matched[s];l&&(e.matched.find(u=>zo(u,l))?a.push(l):o.push(l));const c=e.matched[s];c&&(n.matched.find(u=>zo(u,c))||r.push(c))}return[o,a,r]}let _f=()=>location.protocol+"//"+location.host;function Dc(e,n){const{pathname:o,search:a,hash:r}=n,i=e.indexOf("#");if(i>-1){let s=r.includes(e.slice(i))?e.slice(i).length:1,l=r.slice(s);return l[0]!=="/"&&(l="/"+l),Ns(l,"")}return Ns(o,e)+a+r}function yf(e,n,o,a){let r=[],i=[],s=null;const l=({state:f})=>{const v=Dc(e,location),N=o.value,B=n.value;let D=0;if(f){if(o.value=v,n.value=f,s&&s===N){s=null;return}D=B?f.position-B.position:0}else a(v);r.forEach(Q=>{Q(o.value,N,{delta:D,type:Et.pop,direction:D?D>0?it.forward:it.back:it.unknown})})};function c(){s=o.value}function u(f){r.push(f);const v=()=>{const N=r.indexOf(f);N>-1&&r.splice(N,1)};return i.push(v),v}function d(){if(document.visibilityState==="hidden"){const{history:f}=window;if(!f.state)return;f.replaceState(De({},f.state,{scroll:_r()}),"")}}function m(){for(const f of i)f();i=[],window.removeEventListener("popstate",l),window.removeEventListener("pagehide",d),document.removeEventListener("visibilitychange",d)}return window.addEventListener("popstate",l),window.addEventListener("pagehide",d),document.addEventListener("visibilitychange",d),{pauseListeners:c,listen:u,destroy:m}}function Ss(e,n,o,a=!1,r=!1){return{back:e,current:n,forward:o,replaced:a,position:window.history.length,scroll:r?_r():null}}function Af(e){const{history:n,location:o}=window,a={value:Dc(e,o)},r={value:n.state};r.value||i(a.value,{back:null,current:a.value,forward:null,position:n.length-1,replaced:!0,scroll:null},!0);function i(c,u,d){const m=e.indexOf("#"),f=m>-1?(o.host&&document.querySelector("base")?e:e.slice(m))+c:_f()+e+c;try{n[d?"replaceState":"pushState"](u,"",f),r.value=u}catch(v){console.error(v),o[d?"replace":"assign"](f)}}function s(c,u){i(c,De({},n.state,Ss(r.value.back,c,r.value.forward,!0),u,{position:r.value.position}),!0),a.value=c}function l(c,u){const d=De({},r.value,n.state,{forward:c,scroll:_r()});i(d.current,d,!0),i(c,De({},Ss(a.value,c,null),{position:d.position+1},u),!1),a.value=c}return{location:a,state:r,push:l,replace:s}}function Nf(e){e=rf(e);const n=Af(e),o=yf(e,n.state,n.location,n.replace);function a(i,s=!0){s||o.pauseListeners(),history.go(i)}const r=De({location:"",base:e,go:a,createHref:sf.bind(null,e)},n,o);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>n.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>n.state.value}),r}let xo=(function(e){return e[e.Static=0]="Static",e[e.Param=1]="Param",e[e.Group=2]="Group",e})({});var Ye=(function(e){return e[e.Static=0]="Static",e[e.Param=1]="Param",e[e.ParamRegExp=2]="ParamRegExp",e[e.ParamRegExpEnd=3]="ParamRegExpEnd",e[e.EscapeNext=4]="EscapeNext",e})(Ye||{});const xf={type:xo.Static,value:""},Bf=/[a-zA-Z0-9_]/;function Tf(e){if(!e)return[[]];if(e==="/")return[[xf]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function n(v){throw new Error(`ERR (${o})/"${u}": ${v}`)}let o=Ye.Static,a=o;const r=[];let i;function s(){i&&r.push(i),i=[]}let l=0,c,u="",d="";function m(){u&&(o===Ye.Static?i.push({type:xo.Static,value:u}):o===Ye.Param||o===Ye.ParamRegExp||o===Ye.ParamRegExpEnd?(i.length>1&&(c==="*"||c==="+")&&n(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),i.push({type:xo.Param,value:u,regexp:d,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):n("Invalid state to consume buffer"),u="")}function f(){u+=c}for(;l<e.length;){if(c=e[l++],c==="\\"&&o!==Ye.ParamRegExp){a=o,o=Ye.EscapeNext;continue}switch(o){case Ye.Static:c==="/"?(u&&m(),s()):c===":"?(m(),o=Ye.Param):f();break;case Ye.EscapeNext:f(),o=a;break;case Ye.Param:c==="("?o=Ye.ParamRegExp:Bf.test(c)?f():(m(),o=Ye.Static,c!=="*"&&c!=="?"&&c!=="+"&&l--);break;case Ye.ParamRegExp:c===")"?d[d.length-1]=="\\"?d=d.slice(0,-1)+c:o=Ye.ParamRegExpEnd:d+=c;break;case Ye.ParamRegExpEnd:m(),o=Ye.Static,c!=="*"&&c!=="?"&&c!=="+"&&l--,d="";break;default:n("Unknown state");break}}return o===Ye.ParamRegExp&&n(`Unfinished custom RegExp for param "${u}"`),m(),s(),r}const ws="[^/]+?",Rf={sensitive:!1,strict:!1,start:!0,end:!0};var un=(function(e){return e[e._multiplier=10]="_multiplier",e[e.Root=90]="Root",e[e.Segment=40]="Segment",e[e.SubSegment=30]="SubSegment",e[e.Static=40]="Static",e[e.Dynamic=20]="Dynamic",e[e.BonusCustomRegExp=10]="BonusCustomRegExp",e[e.BonusWildcard=-50]="BonusWildcard",e[e.BonusRepeatable=-20]="BonusRepeatable",e[e.BonusOptional=-8]="BonusOptional",e[e.BonusStrict=.7000000000000001]="BonusStrict",e[e.BonusCaseSensitive=.25]="BonusCaseSensitive",e})(un||{});const Sf=/[.+*?^${}()[\]/\\]/g;function wf(e,n){const o=De({},Rf,n),a=[];let r=o.start?"^":"";const i=[];for(const u of e){const d=u.length?[]:[un.Root];o.strict&&!u.length&&(r+="/");for(let m=0;m<u.length;m++){const f=u[m];let v=un.Segment+(o.sensitive?un.BonusCaseSensitive:0);if(f.type===xo.Static)m||(r+="/"),r+=f.value.replace(Sf,"\\$&"),v+=un.Static;else if(f.type===xo.Param){const{value:N,repeatable:B,optional:D,regexp:Q}=f;i.push({name:N,repeatable:B,optional:D});const R=Q||ws;if(R!==ws){v+=un.BonusCustomRegExp;try{`${R}`}catch(x){throw new Error(`Invalid custom RegExp for param "${N}" (${R}): `+x.message)}}let w=B?`((?:${R})(?:/(?:${R}))*)`:`(${R})`;m||(w=D&&u.length<2?`(?:/${w})`:"/"+w),D&&(w+="?"),r+=w,v+=un.Dynamic,D&&(v+=un.BonusOptional),B&&(v+=un.BonusRepeatable),R===".*"&&(v+=un.BonusWildcard)}d.push(v)}a.push(d)}if(o.strict&&o.end){const u=a.length-1;a[u][a[u].length-1]+=un.BonusStrict}o.strict||(r+="/?"),o.end?r+="$":o.strict&&!r.endsWith("/")&&(r+="(?:/|$)");const s=new RegExp(r,o.sensitive?"":"i");function l(u){const d=u.match(s),m={};if(!d)return null;for(let f=1;f<d.length;f++){const v=d[f]||"",N=i[f-1];m[N.name]=v&&N.repeatable?v.split("/"):v}return m}function c(u){let d="",m=!1;for(const f of e){(!m||!d.endsWith("/"))&&(d+="/"),m=!1;for(const v of f)if(v.type===xo.Static)d+=v.value;else if(v.type===xo.Param){const{value:N,repeatable:B,optional:D}=v,Q=N in u?u[N]:"";if(On(Q)&&!B)throw new Error(`Provided param "${N}" is an array but it is not repeatable (* or + modifiers)`);const R=On(Q)?Q.join("/"):Q;if(!R)if(D)f.length<2&&(d.endsWith("/")?d=d.slice(0,-1):m=!0);else throw new Error(`Missing required param "${N}"`);d+=R}}return d||"/"}return{re:s,score:a,keys:i,parse:l,stringify:c}}function Ef(e,n){let o=0;for(;o<e.length&&o<n.length;){const a=n[o]-e[o];if(a)return a;o++}return e.length<n.length?e.length===1&&e[0]===un.Static+un.Segment?-1:1:e.length>n.length?n.length===1&&n[0]===un.Static+un.Segment?1:-1:0}function jc(e,n){let o=0;const a=e.score,r=n.score;for(;o<a.length&&o<r.length;){const i=Ef(a[o],r[o]);if(i)return i;o++}if(Math.abs(r.length-a.length)===1){if(Es(a))return 1;if(Es(r))return-1}return r.length-a.length}function Es(e){const n=e[e.length-1];return e.length>0&&n[n.length-1]<0}const Cf={strict:!1,end:!0,sensitive:!1};function kf(e,n,o){const a=wf(Tf(e.path),o),r=De(a,{record:e,parent:n,children:[],alias:[]});return n&&!r.record.aliasOf==!n.record.aliasOf&&n.children.push(r),r}function If(e,n){const o=[],a=new Map;n=As(Cf,n);function r(m){return a.get(m)}function i(m,f,v){const N=!v,B=ks(m);B.aliasOf=v&&v.record;const D=As(n,m),Q=[B];if("alias"in m){const x=typeof m.alias=="string"?[m.alias]:m.alias;for(const se of x)Q.push(ks(De({},B,{components:v?v.record.components:B.components,path:se,aliasOf:v?v.record:B})))}let R,w;for(const x of Q){const{path:se}=x;if(f&&se[0]!=="/"){const Z=f.record.path,q=Z[Z.length-1]==="/"?"":"/";x.path=f.record.path+(se&&q+se)}if(R=kf(x,f,D),v?v.alias.push(R):(w=w||R,w!==R&&w.alias.push(R),N&&m.name&&!Is(R)&&s(m.name)),Lc(R)&&c(R),B.children){const Z=B.children;for(let q=0;q<Z.length;q++)i(Z[q],R,v&&v.children[q])}v=v||R}return w?()=>{s(w)}:pa}function s(m){if(Oc(m)){const f=a.get(m);f&&(a.delete(m),o.splice(o.indexOf(f),1),f.children.forEach(s),f.alias.forEach(s))}else{const f=o.indexOf(m);f>-1&&(o.splice(f,1),m.record.name&&a.delete(m.record.name),m.children.forEach(s),m.alias.forEach(s))}}function l(){return o}function c(m){const f=Vf(m,o);o.splice(f,0,m),m.record.name&&!Is(m)&&a.set(m.record.name,m)}function u(m,f){let v,N={},B,D;if("name"in m&&m.name){if(v=a.get(m.name),!v)throw Ho(Ue.MATCHER_NOT_FOUND,{location:m});D=v.record.name,N=De(Cs(f.params,v.keys.filter(w=>!w.optional).concat(v.parent?v.parent.keys.filter(w=>w.optional):[]).map(w=>w.name)),m.params&&Cs(m.params,v.keys.map(w=>w.name))),B=v.stringify(N)}else if(m.path!=null)B=m.path,v=o.find(w=>w.re.test(B)),v&&(N=v.parse(B),D=v.record.name);else{if(v=f.name?a.get(f.name):o.find(w=>w.re.test(f.path)),!v)throw Ho(Ue.MATCHER_NOT_FOUND,{location:m,currentLocation:f});D=v.record.name,N=De({},f.params,m.params),B=v.stringify(N)}const Q=[];let R=v;for(;R;)Q.unshift(R.record),R=R.parent;return{name:D,path:B,params:N,matched:Q,meta:Of(Q)}}e.forEach(m=>i(m));function d(){o.length=0,a.clear()}return{addRoute:i,resolve:u,removeRoute:s,clearRoutes:d,getRoutes:l,getRecordMatcher:r}}function Cs(e,n){const o={};for(const a of n)a in e&&(o[a]=e[a]);return o}function ks(e){const n={path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:e.aliasOf,beforeEnter:e.beforeEnter,props:Pf(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}};return Object.defineProperty(n,"mods",{value:{}}),n}function Pf(e){const n={},o=e.props||!1;if("component"in e)n.default=o;else for(const a in e.components)n[a]=typeof o=="object"?o[a]:o;return n}function Is(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function Of(e){return e.reduce((n,o)=>De(n,o.meta),{})}function Vf(e,n){let o=0,a=n.length;for(;o!==a;){const i=o+a>>1;jc(e,n[i])<0?a=i:o=i+1}const r=Df(e);return r&&(a=n.lastIndexOf(r,a-1)),a}function Df(e){let n=e;for(;n=n.parent;)if(Lc(n)&&jc(e,n)===0)return n}function Lc({record:e}){return!!(e.name||e.components&&Object.keys(e.components).length||e.redirect)}function Ps(e){const n=ze(yr),o=ze(Zt),a=Le(()=>{const c=X(e.to);return n.resolve(c)}),r=Le(()=>{const{matched:c}=a.value,{length:u}=c,d=c[u-1],m=o.matched;if(!d||!m.length)return-1;const f=m.findIndex(zo.bind(null,d));if(f>-1)return f;const v=Os(c[u-2]);return u>1&&Os(d)===v&&m[m.length-1].path!==v?m.findIndex(zo.bind(null,c[u-2])):f}),i=Le(()=>r.value>-1&&$f(o.params,a.value.params)),s=Le(()=>r.value>-1&&r.value===o.matched.length-1&&Pc(o.params,a.value.params));function l(c={}){if(qf(c)){const u=n[X(e.replace)?"replace":"push"](X(e.to)).catch(pa);return e.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>u),u}return Promise.resolve()}return{route:a,href:Le(()=>a.value.href),isActive:i,isExactActive:s,navigate:l}}function jf(e){return e.length===1?e[0]:e}const Lf=kl({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:Ps,setup(e,{slots:n}){const o=Sa(Ps(e)),{options:a}=ze(yr),r=Le(()=>({[Vs(e.activeClass,a.linkActiveClass,"router-link-active")]:o.isActive,[Vs(e.exactActiveClass,a.linkExactActiveClass,"router-link-exact-active")]:o.isExactActive}));return()=>{const i=n.default&&jf(n.default(o));return e.custom?i:Mo("a",{"aria-current":o.isExactActive?e.ariaCurrentValue:null,href:o.href,onClick:o.navigate,class:r.value},i)}}}),Ce=Lf;function qf(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const n=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(n))return}return e.preventDefault&&e.preventDefault(),!0}}function $f(e,n){for(const o in n){const a=n[o],r=e[o];if(typeof a=="string"){if(a!==r)return!1}else if(!On(r)||r.length!==a.length||a.some((i,s)=>i.valueOf()!==r[s].valueOf()))return!1}return!0}function Os(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const Vs=(e,n,o)=>e??n??o,Mf=kl({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:n,slots:o}){const a=ze(kt),r=Le(()=>e.route||a.value),i=ze(Rs,0),s=Le(()=>{let u=X(i);const{matched:d}=r.value;let m;for(;(m=d[u])&&!m.components;)u++;return u}),l=Le(()=>r.value.matched[s.value]);la(Rs,Le(()=>s.value+1)),la(gf,l),la(kt,r);const c=Te();return Ro(()=>[c.value,l.value,e.name],([u,d,m],[f,v,N])=>{d&&(d.instances[m]=u,v&&v!==d&&u&&u===f&&(d.leaveGuards.size||(d.leaveGuards=v.leaveGuards),d.updateGuards.size||(d.updateGuards=v.updateGuards))),u&&d&&(!v||!zo(d,v)||!f)&&(d.enterCallbacks[m]||[]).forEach(B=>B(u))},{flush:"post"}),()=>{const u=r.value,d=e.name,m=l.value,f=m&&m.components[d];if(!f)return Ds(o.default,{Component:f,route:u});const v=m.props[d],N=v?v===!0?u.params:typeof v=="function"?v(u):v:null,D=Mo(f,De({},N,n,{onVnodeUnmounted:Q=>{Q.component.isUnmounted&&(m.instances[d]=null)},ref:c}));return Ds(o.default,{Component:D,route:u})||D}}});function Ds(e,n){if(!e)return null;const o=e(n);return o.length===1?o[0]:o}const qc=Mf;function Ff(e){const n=If(e.routes,e),o=e.parseQuery||hf,a=e.stringifyQuery||Ts,r=e.history,i=na(),s=na(),l=na(),c=Nu(io);let u=io;Io&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const d=rt.bind(null,P=>""+P),m=rt.bind(null,Qp),f=rt.bind(null,Ba);function v(P,ce){let J,fe;return Oc(P)?(J=n.getRecordMatcher(P),fe=ce):fe=P,n.addRoute(fe,J)}function N(P){const ce=n.getRecordMatcher(P);ce&&n.removeRoute(ce)}function B(){return n.getRoutes().map(P=>P.record)}function D(P){return!!n.getRecordMatcher(P)}function Q(P,ce){if(ce=De({},ce||c.value),typeof P=="string"){const y=tt(o,P,ce.path),O=n.resolve({path:y.path},ce),$=r.createHref(y.fullPath);return De(y,O,{params:f(O.params),hash:Ba(y.hash),redirectedFrom:void 0,href:$})}let J;if(P.path!=null)J=De({},P,{path:tt(o,P.path,ce.path).path});else{const y=De({},P.params);for(const O in y)y[O]==null&&delete y[O];J=De({},P,{params:m(y)}),ce.params=m(ce.params)}const fe=n.resolve(J,ce),Re=P.hash||"";fe.params=d(f(fe.params));const h=ef(a,De({},P,{hash:Wp(Re),path:fe.path})),g=r.createHref(h);return De({fullPath:h,hash:Re,query:a===Ts?vf(P.query):P.query||{}},fe,{redirectedFrom:void 0,href:g})}function R(P){return typeof P=="string"?tt(o,P,c.value.path):De({},P)}function w(P,ce){if(u!==P)return Ho(Ue.NAVIGATION_CANCELLED,{from:ce,to:P})}function x(P){return q(P)}function se(P){return x(De(R(P),{replace:!0}))}function Z(P,ce){const J=P.matched[P.matched.length-1];if(J&&J.redirect){const{redirect:fe}=J;let Re=typeof fe=="function"?fe(P,ce):fe;return typeof Re=="string"&&(Re=Re.includes("?")||Re.includes("#")?Re=R(Re):{path:Re},Re.params={}),De({query:P.query,hash:P.hash,params:Re.path!=null?{}:P.params},Re)}}function q(P,ce){const J=u=Q(P),fe=c.value,Re=P.state,h=P.force,g=P.replace===!0,y=Z(J,fe);if(y)return q(De(R(y),{state:typeof y=="object"?De({},Re,y.state):Re,force:h,replace:g}),ce||J);const O=J;O.redirectedFrom=ce;let $;return!h&&nf(a,fe,J)&&($=Ho(Ue.NAVIGATION_DUPLICATED,{to:O,from:fe}),vn(fe,fe,!0,!1)),($?Promise.resolve($):ge(O,fe)).catch(k=>Kn(k)?Kn(k,Ue.NAVIGATION_GUARD_REDIRECT)?k:en(k):_e(k,O,fe)).then(k=>{if(k){if(Kn(k,Ue.NAVIGATION_GUARD_REDIRECT))return q(De({replace:g},R(k.to),{state:typeof k.to=="object"?De({},Re,k.to.state):Re,force:h}),ce||O)}else k=T(O,fe,!0,g,Re);return ee(O,fe,k),k})}function ae(P,ce){const J=w(P,ce);return J?Promise.reject(J):Promise.resolve()}function re(P){const ce=Sn.values().next().value;return ce&&typeof ce.runWithContext=="function"?ce.runWithContext(P):P()}function ge(P,ce){let J;const[fe,Re,h]=bf(P,ce);J=st(fe.reverse(),"beforeRouteLeave",P,ce);for(const y of fe)y.leaveGuards.forEach(O=>{J.push(co(O,P,ce))});const g=ae.bind(null,P,ce);return J.push(g),Ge(J).then(()=>{J=[];for(const y of i.list())J.push(co(y,P,ce));return J.push(g),Ge(J)}).then(()=>{J=st(Re,"beforeRouteUpdate",P,ce);for(const y of Re)y.updateGuards.forEach(O=>{J.push(co(O,P,ce))});return J.push(g),Ge(J)}).then(()=>{J=[];for(const y of h)if(y.beforeEnter)if(On(y.beforeEnter))for(const O of y.beforeEnter)J.push(co(O,P,ce));else J.push(co(y.beforeEnter,P,ce));return J.push(g),Ge(J)}).then(()=>(P.matched.forEach(y=>y.enterCallbacks={}),J=st(h,"beforeRouteEnter",P,ce,re),J.push(g),Ge(J))).then(()=>{J=[];for(const y of s.list())J.push(co(y,P,ce));return J.push(g),Ge(J)}).catch(y=>Kn(y,Ue.NAVIGATION_CANCELLED)?y:Promise.reject(y))}function ee(P,ce,J){l.list().forEach(fe=>re(()=>fe(P,ce,J)))}function T(P,ce,J,fe,Re){const h=w(P,ce);if(h)return h;const g=ce===io,y=Io?history.state:{};J&&(fe||g?r.replace(P.fullPath,De({scroll:g&&y&&y.scroll},Re)):r.push(P.fullPath,Re)),c.value=P,vn(P,ce,J,g),en()}let L;function Y(){L||(L=r.listen((P,ce,J)=>{if(!Ke.listening)return;const fe=Q(P),Re=Z(fe,Ke.currentRoute.value);if(Re){q(De(Re,{replace:!0,force:!0}),fe).catch(pa);return}u=fe;const h=c.value;Io&&uf(Bs(h.fullPath,J.delta),_r()),ge(fe,h).catch(g=>Kn(g,Ue.NAVIGATION_ABORTED|Ue.NAVIGATION_CANCELLED)?g:Kn(g,Ue.NAVIGATION_GUARD_REDIRECT)?(q(De(R(g.to),{force:!0}),fe).then(y=>{Kn(y,Ue.NAVIGATION_ABORTED|Ue.NAVIGATION_DUPLICATED)&&!J.delta&&J.type===Et.pop&&r.go(-1,!1)}).catch(pa),Promise.reject()):(J.delta&&r.go(-J.delta,!1),_e(g,fe,h))).then(g=>{g=g||T(fe,h,!1),g&&(J.delta&&!Kn(g,Ue.NAVIGATION_CANCELLED)?r.go(-J.delta,!1):J.type===Et.pop&&Kn(g,Ue.NAVIGATION_ABORTED|Ue.NAVIGATION_DUPLICATED)&&r.go(-1,!1)),ee(fe,h,g)}).catch(pa)}))}let de=na(),H=na(),we;function _e(P,ce,J){en(P);const fe=H.list();return fe.length?fe.forEach(Re=>Re(P,ce,J)):console.error(P),Promise.reject(P)}function Ze(){return we&&c.value!==io?Promise.resolve():new Promise((P,ce)=>{de.add([P,ce])})}function en(P){return we||(we=!P,Y(),de.list().forEach(([ce,J])=>P?J(P):ce()),de.reset()),P}function vn(P,ce,J,fe){const{scrollBehavior:Re}=e;if(!Io||!Re)return Promise.resolve();const h=!J&&df(Bs(P.fullPath,0))||(fe||!J)&&history.state&&history.state.scroll||null;return $o().then(()=>Re(P,ce,h)).then(g=>g&&cf(g)).catch(g=>_e(g,P,ce))}const We=P=>r.go(P);let bn;const Sn=new Set,Ke={currentRoute:c,listening:!0,addRoute:v,removeRoute:N,clearRoutes:n.clearRoutes,hasRoute:D,getRoutes:B,resolve:Q,options:e,push:x,replace:se,go:We,back:()=>We(-1),forward:()=>We(1),beforeEach:i.add,beforeResolve:s.add,afterEach:l.add,onError:H.add,isReady:Ze,install(P){P.component("RouterLink",Ce),P.component("RouterView",qc),P.config.globalProperties.$router=Ke,Object.defineProperty(P.config.globalProperties,"$route",{enumerable:!0,get:()=>X(c)}),Io&&!bn&&c.value===io&&(bn=!0,x(r.location).catch(fe=>{}));const ce={};for(const fe in io)Object.defineProperty(ce,fe,{get:()=>c.value[fe],enumerable:!0});P.provide(yr,Ke),P.provide(Zt,fl(ce)),P.provide(kt,c);const J=P.unmount;Sn.add(P),P.unmount=function(){Sn.delete(P),Sn.size<1&&(u=io,L&&L(),L=null,c.value=io,bn=!1,we=!1),J()}}};function Ge(P){return P.reduce((ce,J)=>ce.then(()=>re(J)),Promise.resolve())}return Ke}function $c(){return ze(yr)}function ei(e){return ze(Zt)}const zf="/Extensao-26.2/icon-512.png";const _o={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};const js=(...e)=>e.filter((n,o,a)=>!!n&&n.trim()!==""&&a.indexOf(n)===o).join(" ").trim();function lt(e){return e!=null}function Hf(e,n={}){const o=n.attributeNames??{},a=f=>o[f]??f,r=e.size??e.width??_o.width,i=e.size??e.height??_o.height,s=e.aliases?.filter(f=>typeof f=="string"&&f.trim()!=="").map(f=>`lucide-${f}`)??[],l=[...e.name?[`lucide-${e.name}`]:[],...s],c=n.className?.split(" ").filter(Boolean)??[],u=n.includeDefaultClasses===!1?js(...c):js("lucide",...l,...c),d=n.absoluteStrokeWidth?Number(n.strokeWidth??_o["stroke-width"])*Number(e.size??e.width??_o.width)/Number(n.size??n.width??_o.width):n.strokeWidth??_o["stroke-width"];return["svg",{...Object.entries(_o).reduce((f,[v,N])=>(f[a(v)]=N,f),{}),..."color"in n&&n.color&&{[a("stroke")]:n.color},..."size"in n&&lt(n.size)&&{[a("width")]:n.size,[a("height")]:n.size},..."width"in n&&lt(n.width)&&{[a("width")]:n.width},..."height"in n&&lt(n.height)&&{[a("height")]:n.height},[a("stroke-width")]:d,...u&&{[a("class")]:u},[a("viewBox")]:`0 0 ${r} ${i}`,...n.hasA11yProp===!1?{[a("aria-hidden")]:"true"}:{},..."attributes"in n&&n.attributes},e.node.map(f=>{const[v,N,B]=f,D=n.nonScalingStroke?{[a("vector-effect")]:"non-scaling-stroke",...N}:N;return B?[v,D,B]:[v,D]})]}const Uf=e=>{for(const n in e)if(n.startsWith("aria-")||n==="role"||n==="title")return!0;return!1};const $a=e=>e==="";const Kf=e=>e?.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();const Gf=Symbol("lucide-icons");function Wf(){return ze(Gf,{})}const Yf=({name:e,iconNode:n,"icon-node":o,icon:a={name:Kf(e),node:n??o,size:24,aliases:[]},absoluteStrokeWidth:r,"absolute-stroke-width":i,nonScalingStroke:s,"non-scaling-stroke":l,strokeWidth:c,"stroke-width":u,size:d,width:m=d,height:f=d,color:v,...N},{slots:B})=>{const{size:D,color:Q,strokeWidth:R=2,absoluteStrokeWidth:w=!1,nonScalingStroke:x=!1,class:se=""}=Wf(),Z=$a(r)||$a(i)||r===!0||i===!0||w===!0,q=$a(s)||$a(l)||s===!0||l===!0||x===!0;delete N.class;const ae=B.default?.(),[,re,ge=[]]=Hf(a,{color:v??Q,width:m??d??D,height:f??d??D,strokeWidth:c??u??R,absoluteStrokeWidth:Z,nonScalingStroke:q,className:se,hasA11yProp:ae!=null&&ae.length>0||Uf(N),attributes:N});return Mo("svg",re,[...ge.map(ee=>Mo(...ee)),...ae??[]])};function An(e,n=[]){const o=typeof e=="string"?{name:e,node:n}:e;return(a,{slots:r})=>Mo(Yf,{...a,icon:o},r.default?{default:r.default}:void 0)}const Jf={name:"arrow-right",size:24,node:[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]},Qf=An(Jf);const Xf={name:"box",size:24,node:[["path",{d:"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",key:"hh9hay"}],["path",{d:"m3.3 7 8.7 5 8.7-5",key:"g66t2b"}],["path",{d:"M12 22V12",key:"d0xqtd"}]]},Zf=An(Xf);const eh={name:"chevron-right",size:24,node:[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]},Ta=An(eh);const nh={name:"chevron-left",size:24,node:[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]},fo=An(nh);const oh={name:"circle-question-mark",size:24,node:[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",key:"1u773s"}],["path",{d:"M12 17h.01",key:"p32p05"}]],aliases:["help-circle","circle-help"]},ni=An(oh);const ah={name:"clipboard-check",size:24,node:[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1",key:"tgr4d6"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",key:"116196"}],["path",{d:"m9 14 2 2 4-4",key:"df797q"}]]},mo=An(ah);const rh={name:"folder-kanban",size:24,node:[["path",{d:"M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z",key:"1fr9dc"}],["path",{d:"M8 10v4",key:"tgpxqk"}],["path",{d:"M12 10v2",key:"hh53o1"}],["path",{d:"M16 10v6",key:"1d6xys"}]]},Mc=An(rh);const th={name:"folder-plus",size:24,node:[["path",{d:"M12 10v6",key:"1bos4e"}],["path",{d:"M9 13h6",key:"1uhe8q"}],["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",key:"1kt360"}]]},ar=An(th);const ih={name:"folder",size:24,node:[["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",key:"1kt360"}]]},Ls=An(ih);const sh={name:"house",size:24,node:[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"r6nss1"}]],aliases:["home"]},lh=An(sh);const ch={name:"pencil",size:24,node:[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}],["path",{d:"m15 5 4 4",key:"1mk7zo"}]]},uh=An(ch);const dh={name:"plus",size:24,node:[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]},qs=An(dh);const mh={name:"trash",size:24,node:[["path",{d:"M10 11v6",key:"nco0om"}],["path",{d:"M14 11v6",key:"outv1u"}],["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",key:"miytrc"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",key:"e791ji"}]],aliases:["trash-2"]},Ar=An(mh),ph={class:"app-shell"},fh={class:"sidebar"},hh={class:"content",tabindex:"-1"},vh={key:0,class:"bottom-nav"},gh={__name:"AppLayout",setup(e){const n=ei(),o=Le(()=>n.path.startsWith("/rules")?"rules":n.path.startsWith("/quick-evaluation")?"quick":"projects");return(a,r)=>(C(),W("div",ph,[b("aside",fh,[F(X(Ce),{class:"brand",to:"/projects"},{default:pe(()=>[...r[0]||(r[0]=[b("img",{class:"brand__mark",src:zf,alt:"Acesso Verificador"},null,-1),b("span",null,[Be("Acesso"),b("br"),b("small",null,"Verificador")],-1)])]),_:1}),b("nav",null,[F(X(Ce),{class:dn(["nav-item",{"is-active":o.value==="projects"}]),to:"/projects"},{default:pe(()=>[F(X(Ls),{size:20,"aria-hidden":"true"}),r[1]||(r[1]=b("span",null,"Projetos",-1))]),_:1},8,["class"]),F(X(Ce),{class:dn(["nav-item",{"is-active":o.value==="quick"}]),to:"/quick-evaluation"},{default:pe(()=>[F(X(mo),{size:20,"aria-hidden":"true"}),r[2]||(r[2]=b("span",null,"Avaliação rápida",-1))]),_:1},8,["class"]),F(X(Ce),{class:dn(["nav-item",{"is-active":o.value==="rules"}]),to:"/rules"},{default:pe(()=>[F(X(mo),{size:20,"aria-hidden":"true"}),r[3]||(r[3]=b("span",null,"Regras",-1))]),_:1},8,["class"])])]),b("main",hh,[gn(a.$slots,"default")]),X(n).meta.hideBottomNav?ye("",!0):(C(),W("nav",vh,[F(X(Ce),{class:dn(["nav-item",{"is-active":o.value==="projects"}]),to:"/projects"},{default:pe(()=>[F(X(Ls),{size:20,"aria-hidden":"true"}),r[4]||(r[4]=b("span",null,"Projetos",-1))]),_:1},8,["class"]),F(X(Ce),{class:dn(["nav-item",{"is-active":o.value==="quick"}]),to:"/quick-evaluation"},{default:pe(()=>[F(X(mo),{size:20,"aria-hidden":"true"}),r[5]||(r[5]=b("span",null,"Avaliação rápida",-1))]),_:1},8,["class"]),F(X(Ce),{class:dn(["nav-item",{"is-active":o.value==="rules"}]),to:"/rules"},{default:pe(()=>[F(X(mo),{size:20,"aria-hidden":"true"}),r[6]||(r[6]=b("span",null,"Regras",-1))]),_:1},8,["class"])]))]))}},bh={id:"confirm-popup",class:"confirm-popup",role:"alertdialog","aria-modal":"true","aria-labelledby":"confirm-popup-message"},_h={id:"confirm-popup-message",class:"confirm-popup__message"},yh={class:"confirm-popup__actions"},Ah={__name:"ConfirmPopup",setup(e,{expose:n}){const o=Te(null),a=Te(null),r=Te(!1),i=Te("");let s=null,l=null,c="";function u(N){if(N.key==="Escape"){N.preventDefault(),m();return}if(N.key!=="Tab")return;const B=o.value,D=a.value;!B||!D||(N.shiftKey&&document.activeElement===B?(N.preventDefault(),D.focus()):!N.shiftKey&&document.activeElement===D&&(N.preventDefault(),B.focus()))}function d(){document.removeEventListener("keydown",u),document.body.style.overflow=c}function m({restoreFocus:N=!0}={}){if(!r.value)return;r.value=!1,d(),s?.removeAttribute("aria-expanded"),s?.removeAttribute("aria-controls");const B=s;s=null,l=null,N&&$o(()=>B?.focus?.())}async function f(N){m({restoreFocus:!1}),s=N.target,i.value=N.message,l=N.onAccept,r.value=!0,s?.setAttribute("aria-expanded","true"),s?.setAttribute("aria-controls","confirm-popup"),c=document.body.style.overflow,document.body.style.overflow="hidden",document.addEventListener("keydown",u),await $o(),o.value?.focus()}async function v(){const N=l;m({restoreFocus:!1}),await N?.()}return n({open:f}),Ut(()=>{document.removeEventListener("keydown",u),document.body.style.overflow=c,s?.removeAttribute("aria-expanded"),s?.removeAttribute("aria-controls")}),(N,B)=>(C(),Pe(Tl,{to:"body"},[r.value?(C(),W("div",{key:0,class:"confirm-backdrop",onClick:B[1]||(B[1]=Xn(D=>m(),["self"]))},[b("section",bh,[b("p",_h,le(i.value),1),b("div",yh,[b("button",{ref_key:"cancelButton",ref:o,class:"confirm-popup__button confirm-popup__button--cancel",type:"button",onClick:B[0]||(B[0]=D=>m())}," Cancelar ",512),b("button",{ref_key:"acceptButton",ref:a,class:"confirm-popup__button confirm-popup__button--accept",type:"button",onClick:v}," Excluir ",512)])])])):ye("",!0)]))}},Nh={class:"welcome-popup",role:"dialog","aria-modal":"true","aria-labelledby":"welcome-title","aria-describedby":"welcome-description"},xh={class:"welcome-popup__content"},Bh={class:"welcome-popup__steps"},Fc={__name:"WelcomePopup",emits:["close"],setup(e,{emit:n}){const o=n,a=Te(null),r=Te(null);let i="";function s(l){if(l.key==="Escape"){o("close");return}l.key==="Tab"&&l.shiftKey&&document.activeElement===a.value?(l.preventDefault(),r.value?.focus()):l.key==="Tab"&&!l.shiftKey&&document.activeElement===r.value&&(l.preventDefault(),a.value?.focus())}return Vn(()=>{document.addEventListener("keydown",s),i=document.body.style.overflow,document.body.style.overflow="hidden",a.value?.focus()}),Kt(()=>{document.removeEventListener("keydown",s),document.body.style.overflow=i}),(l,c)=>(C(),Pe(Tl,{to:"body"},[b("div",{class:"welcome-backdrop",onClick:c[2]||(c[2]=Xn(u=>o("close"),["self"]))},[b("section",Nh,[b("button",{ref_key:"closeButton",ref:a,class:"welcome-popup__close",type:"button","aria-label":"Fechar apresentação",onClick:c[0]||(c[0]=u=>o("close"))}," × ",512),c[8]||(c[8]=b("div",{class:"welcome-popup__hero"},[b("h1",{id:"welcome-title"},"Acessibilidade começa com atenção aos detalhes."),b("p",{id:"welcome-description"}," Este espaço ajuda você a organizar e apoiar avaliações de acessibilidade em locais e ambientes. ")],-1)),b("div",xh,[c[6]||(c[6]=b("h2",null,"Como funciona",-1)),b("div",Bh,[b("article",null,[F(X(Mc),{size:22,"aria-hidden":"true"}),c[3]||(c[3]=b("div",null,[b("h3",null,"Organize seus locais"),b("p",null,"Crie projetos, separe os ambientes e cadastre os elementos que deseja avaliar.")],-1))]),b("article",null,[F(X(mo),{size:22,"aria-hidden":"true"}),c[4]||(c[4]=b("div",null,[b("h3",null,"Faça as verificações"),b("p",null,"Preencha checklists e consulte resultados por elemento, ambiente ou projeto.")],-1))])]),c[7]||(c[7]=b("p",{class:"welcome-popup__note"}," Os resultados são um apoio à avaliação e não substituem a análise de um profissional nem a consulta às normas aplicáveis. ",-1)),b("button",{ref_key:"actionButton",ref:r,class:"button welcome-popup__action",type:"button",onClick:c[1]||(c[1]=u=>o("close"))},[c[5]||(c[5]=Be(" Começar ",-1)),F(X(Qf),{size:18,"aria-hidden":"true"})],512)])])])]))}};var Th=Object.defineProperty,Rh=Object.defineProperties,Sh=Object.getOwnPropertyDescriptors,$s=Object.getOwnPropertySymbols,wh=Object.prototype.hasOwnProperty,Eh=Object.prototype.propertyIsEnumerable,Ms=(e,n,o)=>n in e?Th(e,n,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[n]=o,Eo=(e,n)=>{for(var o in n||(n={}))wh.call(n,o)&&Ms(e,o,n[o]);if($s)for(var o of $s(n))Eh.call(n,o)&&Ms(e,o,n[o]);return e},Fs=(e,n)=>Rh(e,Sh(n));const Ch={props:{autoscroll:{type:Boolean,default:!0}},watch:{typeAheadPointer(){this.autoscroll&&this.maybeAdjustScroll()},open(e){this.autoscroll&&e&&this.$nextTick(()=>this.maybeAdjustScroll())}},methods:{maybeAdjustScroll(){var e;const n=((e=this.$refs.dropdownMenu)==null?void 0:e.children[this.typeAheadPointer])||!1;if(n){const o=this.getDropdownViewport(),{top:a,bottom:r,height:i}=n.getBoundingClientRect();if(a<o.top)return this.$refs.dropdownMenu.scrollTop=n.offsetTop;if(r>o.bottom)return this.$refs.dropdownMenu.scrollTop=n.offsetTop-(o.height-i)}},getDropdownViewport(){return this.$refs.dropdownMenu?this.$refs.dropdownMenu.getBoundingClientRect():{height:0,top:0,bottom:0}}}},kh={data(){return{typeAheadPointer:-1}},watch:{filteredOptions(){for(let e=0;e<this.filteredOptions.length;e++)if(this.selectable(this.filteredOptions[e])){this.typeAheadPointer=e;break}},open(e){e&&this.typeAheadToLastSelected()},selectedValue(){this.open&&this.typeAheadToLastSelected()}},methods:{typeAheadUp(){for(let e=this.typeAheadPointer-1;e>=0;e--)if(this.selectable(this.filteredOptions[e])){this.typeAheadPointer=e;break}},typeAheadDown(){for(let e=this.typeAheadPointer+1;e<this.filteredOptions.length;e++)if(this.selectable(this.filteredOptions[e])){this.typeAheadPointer=e;break}},typeAheadSelect(){const e=this.filteredOptions[this.typeAheadPointer];e&&this.selectable(e)&&this.select(e)},typeAheadToLastSelected(){this.typeAheadPointer=this.selectedValue.length!==0?this.filteredOptions.indexOf(this.selectedValue[this.selectedValue.length-1]):-1}}},Ih={props:{loading:{type:Boolean,default:!1}},data(){return{mutableLoading:!1}},watch:{search(){this.$emit("search",this.search,this.toggleLoading)},loading(e){this.mutableLoading=e}},methods:{toggleLoading(e=null){return e==null?this.mutableLoading=!this.mutableLoading:this.mutableLoading=e}}},oi=(e,n)=>{const o=e.__vccOpts||e;for(const[a,r]of n)o[a]=r;return o},Ph={},Oh={xmlns:"http://www.w3.org/2000/svg",width:"10",height:"10"},Vh=b("path",{d:"M6.895455 5l2.842897-2.842898c.348864-.348863.348864-.914488 0-1.263636L9.106534.261648c-.348864-.348864-.914489-.348864-1.263636 0L5 3.104545 2.157102.261648c-.348863-.348864-.914488-.348864-1.263636 0L.261648.893466c-.348864.348864-.348864.914489 0 1.263636L3.104545 5 .261648 7.842898c-.348864.348863-.348864.914488 0 1.263636l.631818.631818c.348864.348864.914773.348864 1.263636 0L5 6.895455l2.842898 2.842897c.348863.348864.914772.348864 1.263636 0l.631818-.631818c.348864-.348864.348864-.914489 0-1.263636L6.895455 5z"},null,-1),Dh=[Vh];function jh(e,n){return C(),W("svg",Oh,Dh)}const Lh=oi(Ph,[["render",jh]]),qh={},$h={xmlns:"http://www.w3.org/2000/svg",width:"14",height:"10"},Mh=b("path",{d:"M9.211364 7.59931l4.48338-4.867229c.407008-.441854.407008-1.158247 0-1.60046l-.73712-.80023c-.407008-.441854-1.066904-.441854-1.474243 0L7 5.198617 2.51662.33139c-.407008-.441853-1.066904-.441853-1.474243 0l-.737121.80023c-.407008.441854-.407008 1.158248 0 1.600461l4.48338 4.867228L7 10l2.211364-2.40069z"},null,-1),Fh=[Mh];function zh(e,n){return C(),W("svg",$h,Fh)}const Hh=oi(qh,[["render",zh]]),zs={Deselect:Lh,OpenIndicator:Hh},Uh={mounted(e,{instance:n}){if(n.appendToBody){const{height:o,top:a,left:r,width:i}=n.$refs.toggle.getBoundingClientRect();let s=window.scrollX||window.pageXOffset,l=window.scrollY||window.pageYOffset;e.unbindPosition=n.calculatePosition(e,n,{width:i+"px",left:s+r+"px",top:l+a+o+"px"}),document.body.appendChild(e)}},unmounted(e,{instance:n}){n.appendToBody&&(e.unbindPosition&&typeof e.unbindPosition=="function"&&e.unbindPosition(),e.parentNode&&e.parentNode.removeChild(e))}};function Kh(e){const n={};return Object.keys(e).sort().forEach(o=>{n[o]=e[o]}),JSON.stringify(n)}let Gh=0;function Wh(){return++Gh}const Yh={components:Eo({},zs),directives:{appendToBody:Uh},mixins:[Ch,kh,Ih],compatConfig:{MODE:3},emits:["open","close","update:modelValue","search","search:compositionstart","search:compositionend","search:keydown","search:blur","search:focus","search:input","option:created","option:selecting","option:selected","option:deselecting","option:deselected"],props:{modelValue:{},components:{type:Object,default:()=>({})},options:{type:Array,default(){return[]}},disabled:{type:Boolean,default:!1},clearable:{type:Boolean,default:!0},deselectFromDropdown:{type:Boolean,default:!1},searchable:{type:Boolean,default:!0},multiple:{type:Boolean,default:!1},placeholder:{type:String,default:""},transition:{type:String,default:"vs__fade"},clearSearchOnSelect:{type:Boolean,default:!0},closeOnSelect:{type:Boolean,default:!0},label:{type:String,default:"label"},autocomplete:{type:String,default:"off"},reduce:{type:Function,default:e=>e},selectable:{type:Function,default:e=>!0},getOptionLabel:{type:Function,default(e){return typeof e=="object"?e.hasOwnProperty(this.label)?e[this.label]:console.warn(`[vue-select warn]: Label key "option.${this.label}" does not exist in options object ${JSON.stringify(e)}.
https://vue-select.org/api/props.html#getoptionlabel`):e}},getOptionKey:{type:Function,default(e){if(typeof e!="object")return e;try{return e.hasOwnProperty("id")?e.id:Kh(e)}catch(n){return console.warn(`[vue-select warn]: Could not stringify this option to generate unique key. Please provide'getOptionKey' prop to return a unique key for each option.
https://vue-select.org/api/props.html#getoptionkey`,e,n)}}},onTab:{type:Function,default:function(){this.selectOnTab&&!this.isComposing&&this.typeAheadSelect()}},taggable:{type:Boolean,default:!1},tabindex:{type:Number,default:null},pushTags:{type:Boolean,default:!1},filterable:{type:Boolean,default:!0},filterBy:{type:Function,default(e,n,o){return(n||"").toLocaleLowerCase().indexOf(o.toLocaleLowerCase())>-1}},filter:{type:Function,default(e,n){return e.filter(o=>{let a=this.getOptionLabel(o);return typeof a=="number"&&(a=a.toString()),this.filterBy(o,a,n)})}},createOption:{type:Function,default(e){return typeof this.optionList[0]=="object"?{[this.label]:e}:e}},resetOnOptionsChange:{default:!1,validator:e=>["function","boolean"].includes(typeof e)},clearSearchOnBlur:{type:Function,default:function({clearSearchOnSelect:e,multiple:n}){return e&&!n}},noDrop:{type:Boolean,default:!1},inputId:{type:String},dir:{type:String,default:"auto"},selectOnTab:{type:Boolean,default:!1},selectOnKeyCodes:{type:Array,default:()=>[13]},searchInputQuerySelector:{type:String,default:"[type=search]"},mapKeydown:{type:Function,default:(e,n)=>e},appendToBody:{type:Boolean,default:!1},calculatePosition:{type:Function,default(e,n,{width:o,top:a,left:r}){e.style.top=a,e.style.left=r,e.style.width=o}},dropdownShouldOpen:{type:Function,default({noDrop:e,open:n,mutableLoading:o}){return e?!1:n&&!o}},uid:{type:[String,Number],default:()=>Wh()}},data(){return{search:"",open:!1,isComposing:!1,pushedTags:[],_value:[],deselectButtons:[]}},computed:{isReducingValues(){return this.$props.reduce!==this.$options.props.reduce.default},isTrackingValues(){return typeof this.modelValue>"u"||this.isReducingValues},selectedValue(){let e=this.modelValue;return this.isTrackingValues&&(e=this.$data._value),e!=null&&e!==""?[].concat(e):[]},optionList(){return this.options.concat(this.pushTags?this.pushedTags:[])},searchEl(){return this.$slots.search?this.$refs.selectedOptions.querySelector(this.searchInputQuerySelector):this.$refs.search},scope(){const e={search:this.search,loading:this.loading,searching:this.searching,filteredOptions:this.filteredOptions};return{search:{attributes:Eo({disabled:this.disabled,placeholder:this.searchPlaceholder,tabindex:this.tabindex,readonly:!this.searchable,id:this.inputId,"aria-autocomplete":"list","aria-labelledby":`vs${this.uid}__combobox`,"aria-controls":`vs${this.uid}__listbox`,ref:"search",type:"search",autocomplete:this.autocomplete,value:this.search},this.dropdownOpen&&this.filteredOptions[this.typeAheadPointer]?{"aria-activedescendant":`vs${this.uid}__option-${this.typeAheadPointer}`}:{}),events:{compositionstart:()=>this.isComposing=!0,compositionend:()=>this.isComposing=!1,keydown:this.onSearchKeyDown,blur:this.onSearchBlur,focus:this.onSearchFocus,input:n=>this.search=n.target.value}},spinner:{loading:this.mutableLoading},noOptions:{search:this.search,loading:this.mutableLoading,searching:this.searching},openIndicator:{attributes:{ref:"openIndicator",role:"presentation",class:"vs__open-indicator"}},listHeader:e,listFooter:e,header:Fs(Eo({},e),{deselect:this.deselect}),footer:Fs(Eo({},e),{deselect:this.deselect})}},childComponents(){return Eo(Eo({},zs),this.components)},stateClasses(){return{"vs--open":this.dropdownOpen,"vs--single":!this.multiple,"vs--multiple":this.multiple,"vs--searching":this.searching&&!this.noDrop,"vs--searchable":this.searchable&&!this.noDrop,"vs--unsearchable":!this.searchable,"vs--loading":this.mutableLoading,"vs--disabled":this.disabled}},searching(){return!!this.search},dropdownOpen(){return this.dropdownShouldOpen(this)},searchPlaceholder(){return this.isValueEmpty&&this.placeholder?this.placeholder:void 0},filteredOptions(){const e=[].concat(this.optionList);if(!this.filterable&&!this.taggable)return e;const n=this.search.length?this.filter(e,this.search,this):e;if(this.taggable&&this.search.length){const o=this.createOption(this.search);this.optionExists(o)||n.unshift(o)}return n},isValueEmpty(){return this.selectedValue.length===0},showClearButton(){return!this.multiple&&this.clearable&&!this.open&&!this.isValueEmpty}},watch:{options(e,n){const o=()=>typeof this.resetOnOptionsChange=="function"?this.resetOnOptionsChange(e,n,this.selectedValue):this.resetOnOptionsChange;!this.taggable&&o()&&this.clearSelection(),this.modelValue&&this.isTrackingValues&&this.setInternalValueFromOptions(this.modelValue)},modelValue:{immediate:!0,handler(e){this.isTrackingValues&&this.setInternalValueFromOptions(e)}},multiple(){this.clearSelection()},open(e){this.$emit(e?"open":"close")}},created(){this.mutableLoading=this.loading},methods:{setInternalValueFromOptions(e){Array.isArray(e)?this.$data._value=e.map(n=>this.findOptionFromReducedValue(n)):this.$data._value=this.findOptionFromReducedValue(e)},select(e){this.$emit("option:selecting",e),this.isOptionSelected(e)?this.deselectFromDropdown&&(this.clearable||this.multiple&&this.selectedValue.length>1)&&this.deselect(e):(this.taggable&&!this.optionExists(e)&&(this.$emit("option:created",e),this.pushTag(e)),this.multiple&&(e=this.selectedValue.concat(e)),this.updateValue(e),this.$emit("option:selected",e)),this.onAfterSelect(e)},deselect(e){this.$emit("option:deselecting",e),this.updateValue(this.selectedValue.filter(n=>!this.optionComparator(n,e))),this.$emit("option:deselected",e)},clearSelection(){this.updateValue(this.multiple?[]:null)},onAfterSelect(e){this.closeOnSelect&&(this.open=!this.open,this.searchEl.blur()),this.clearSearchOnSelect&&(this.search="")},updateValue(e){typeof this.modelValue>"u"&&(this.$data._value=e),e!==null&&(Array.isArray(e)?e=e.map(n=>this.reduce(n)):e=this.reduce(e)),this.$emit("update:modelValue",e)},toggleDropdown(e){const n=e.target!==this.searchEl;n&&e.preventDefault();const o=[...this.deselectButtons||[],this.$refs.clearButton];if(this.searchEl===void 0||o.filter(Boolean).some(a=>a.contains(e.target)||a===e.target)){e.preventDefault();return}this.open&&n?this.searchEl.blur():this.disabled||(this.open=!0,this.searchEl.focus())},isOptionSelected(e){return this.selectedValue.some(n=>this.optionComparator(n,e))},isOptionDeselectable(e){return this.isOptionSelected(e)&&this.deselectFromDropdown},optionComparator(e,n){return this.getOptionKey(e)===this.getOptionKey(n)},findOptionFromReducedValue(e){const n=a=>JSON.stringify(this.reduce(a))===JSON.stringify(e),o=[...this.options,...this.pushedTags].filter(n);return o.length===1?o[0]:o.find(a=>this.optionComparator(a,this.$data._value))||e},closeSearchOptions(){this.open=!1,this.$emit("search:blur")},maybeDeleteValue(){if(!this.searchEl.value.length&&this.selectedValue&&this.selectedValue.length&&this.clearable){let e=null;this.multiple&&(e=[...this.selectedValue.slice(0,this.selectedValue.length-1)]),this.updateValue(e)}},optionExists(e){return this.optionList.some(n=>this.optionComparator(n,e))},normalizeOptionForSlot(e){return typeof e=="object"?e:{[this.label]:e}},pushTag(e){this.pushedTags.push(e)},onEscape(){this.search.length?this.search="":this.searchEl.blur()},onSearchBlur(){if(this.mousedown&&!this.searching)this.mousedown=!1;else{const{clearSearchOnSelect:e,multiple:n}=this;this.clearSearchOnBlur({clearSearchOnSelect:e,multiple:n})&&(this.search=""),this.closeSearchOptions();return}if(this.search.length===0&&this.options.length===0){this.closeSearchOptions();return}},onSearchFocus(){this.open=!0,this.$emit("search:focus")},onMousedown(){this.mousedown=!0},onMouseUp(){this.mousedown=!1},onSearchKeyDown(e){const n=r=>(r.preventDefault(),!this.isComposing&&this.typeAheadSelect()),o={8:r=>this.maybeDeleteValue(),9:r=>this.onTab(),27:r=>this.onEscape(),38:r=>(r.preventDefault(),this.typeAheadUp()),40:r=>(r.preventDefault(),this.typeAheadDown())};this.selectOnKeyCodes.forEach(r=>o[r]=n);const a=this.mapKeydown(o,this);if(typeof a[e.keyCode]=="function")return a[e.keyCode](e)}}},Jh=["dir"],Qh=["id","aria-expanded","aria-owns"],Xh={ref:"selectedOptions",class:"vs__selected-options"},Zh=["disabled","title","aria-label","onClick"],e0={ref:"actions",class:"vs__actions"},n0=["disabled"],o0={class:"vs__spinner"},a0=["id"],r0=["id","aria-selected","onMouseover","onClick"],t0={key:0,class:"vs__no-options"},i0=Be(" Sorry, no matching options. "),s0=["id"];function l0(e,n,o,a,r,i){const s=Xu("append-to-body");return C(),W("div",{dir:o.dir,class:dn(["v-select",i.stateClasses])},[gn(e.$slots,"header",wn(En(i.scope.header))),b("div",{id:`vs${o.uid}__combobox`,ref:"toggle",class:"vs__dropdown-toggle",role:"combobox","aria-expanded":i.dropdownOpen.toString(),"aria-owns":`vs${o.uid}__listbox`,"aria-label":"Search for option",onMousedown:n[1]||(n[1]=l=>i.toggleDropdown(l))},[b("div",Xh,[(C(!0),W(Ee,null,fn(i.selectedValue,(l,c)=>gn(e.$slots,"selected-option-container",{option:i.normalizeOptionForSlot(l),deselect:i.deselect,multiple:o.multiple,disabled:o.disabled},()=>[(C(),W("span",{key:o.getOptionKey(l),class:"vs__selected"},[gn(e.$slots,"selected-option",wn(En(i.normalizeOptionForSlot(l))),()=>[Be(le(o.getOptionLabel(l)),1)]),o.multiple?(C(),W("button",{key:0,ref_for:!0,ref:u=>r.deselectButtons[c]=u,disabled:o.disabled,type:"button",class:"vs__deselect",title:`Deselect ${o.getOptionLabel(l)}`,"aria-label":`Deselect ${o.getOptionLabel(l)}`,onClick:u=>i.deselect(l)},[(C(),Pe(Sr(i.childComponents.Deselect)))],8,Zh)):ye("",!0)]))])),256)),gn(e.$slots,"search",wn(En(i.scope.search)),()=>[b("input",xt({class:"vs__search"},i.scope.search.attributes,Zu(i.scope.search.events)),null,16)])],512),b("div",e0,[Cn(b("button",{ref:"clearButton",disabled:o.disabled,type:"button",class:"vs__clear",title:"Clear Selected","aria-label":"Clear Selected",onClick:n[0]||(n[0]=(...l)=>i.clearSelection&&i.clearSelection(...l))},[(C(),Pe(Sr(i.childComponents.Deselect)))],8,n0),[[Pi,i.showClearButton]]),gn(e.$slots,"open-indicator",wn(En(i.scope.openIndicator)),()=>[o.noDrop?ye("",!0):(C(),Pe(Sr(i.childComponents.OpenIndicator),wn(xt({key:0},i.scope.openIndicator.attributes)),null,16))]),gn(e.$slots,"spinner",wn(En(i.scope.spinner)),()=>[Cn(b("div",o0,"Loading...",512),[[Pi,e.mutableLoading]])])],512)],40,Qh),F(zd,{name:o.transition},{default:pe(()=>[i.dropdownOpen?Cn((C(),W("ul",{id:`vs${o.uid}__listbox`,ref:"dropdownMenu",key:`vs${o.uid}__listbox`,class:"vs__dropdown-menu",role:"listbox",tabindex:"-1",onMousedown:n[2]||(n[2]=Xn((...l)=>i.onMousedown&&i.onMousedown(...l),["prevent"])),onMouseup:n[3]||(n[3]=(...l)=>i.onMouseUp&&i.onMouseUp(...l))},[gn(e.$slots,"list-header",wn(En(i.scope.listHeader))),(C(!0),W(Ee,null,fn(i.filteredOptions,(l,c)=>(C(),W("li",{id:`vs${o.uid}__option-${c}`,key:o.getOptionKey(l),role:"option",class:dn(["vs__dropdown-option",{"vs__dropdown-option--deselect":i.isOptionDeselectable(l)&&c===e.typeAheadPointer,"vs__dropdown-option--selected":i.isOptionSelected(l),"vs__dropdown-option--highlight":c===e.typeAheadPointer,"vs__dropdown-option--disabled":!o.selectable(l)}]),"aria-selected":c===e.typeAheadPointer?!0:null,onMouseover:u=>o.selectable(l)?e.typeAheadPointer=c:null,onClick:Xn(u=>o.selectable(l)?i.select(l):null,["prevent","stop"])},[gn(e.$slots,"option",wn(En(i.normalizeOptionForSlot(l))),()=>[Be(le(o.getOptionLabel(l)),1)])],42,r0))),128)),i.filteredOptions.length===0?(C(),W("li",t0,[gn(e.$slots,"no-options",wn(En(i.scope.noOptions)),()=>[i0])])):ye("",!0),gn(e.$slots,"list-footer",wn(En(i.scope.listFooter)))],40,a0)),[[s]]):(C(),W("ul",{key:1,id:`vs${o.uid}__listbox`,role:"listbox",style:{display:"none",visibility:"hidden"}},null,8,s0))]),_:3},8,["name"]),gn(e.$slots,"footer",wn(En(i.scope.footer)))],10,Jh)}const c0=oi(Yh,[["render",l0]]),u0={class:"page-header"},d0={class:"page-header__row"},m0={class:"page-header__heading"},p0={key:0},Zn={__name:"PageHeader",props:{title:{type:String,required:!0},description:String,helpButton:Boolean},emits:["help"],setup(e){return(n,o)=>(C(),W("header",u0,[b("div",d0,[b("div",null,[b("div",m0,[b("h1",null,le(e.title),1),e.helpButton?(C(),W("button",{key:0,class:"page-header__help",type:"button",title:"Ajuda","aria-label":"Ajuda",onClick:o[0]||(o[0]=a=>n.$emit("help"))},[F(X(ni),{size:14,"aria-hidden":"true"})])):ye("",!0)]),e.description?(C(),W("p",p0,le(e.description),1)):ye("",!0)]),gn(n.$slots,"action")])]))}},f0={class:"empty-state"},h0={key:0,class:"empty-state__actions"},yn={__name:"EmptyState",props:{title:String,text:String},setup(e){return(n,o)=>(C(),W("section",f0,[o[0]||(o[0]=b("div",{class:"empty-state__icon","aria-hidden":"true"},"+",-1)),b("h2",null,le(e.title),1),b("p",null,le(e.text),1),n.$slots.default?(C(),W("div",h0,[gn(n.$slots,"default")])):ye("",!0)]))}};function It(e,n,o=""){const r=`${typeof n=="boolean"?n?"Sim":"Não":n}${o??""}`;switch(e){case">=":return`No mínimo ${r} (inclusive)`;case"<=":return`No máximo ${r} (inclusive)`;case">":return`Acima de ${r} (sem incluir o limite)`;case"<":return`Abaixo de ${r} (sem incluir o limite)`;case"==":case"eq":return`Igual a ${r}`;case"!=":return`Diferente de ${r}`;default:return r}}function v0(e){const n=String(e??"").replace(/[^\d.,]/g,""),o=n.search(/[.,]/);if(o===-1)return n;const a=n.slice(0,o),r=n[o],i=n.slice(o+1).replace(/[.,]/g,"");return`${a===""?"0":a}${r}${i}`}function Hs(e){const n=String(e??"").trim().replace(",",".");if(!/^\d*\.?\d*$/.test(n)||n===""||n===".")return null;const o=Number(n);return Number.isFinite(o)?o:null}const g0={class:"ruleset-grid"},b0={class:"field"},_0=["value"],y0={class:"field"},A0={class:"ruleset-option"},N0={class:"ruleset-title"},x0={key:0,class:"ruleset-norma"},B0={key:0,class:"field"},T0={class:"field-name-input"},R0={id:"field-name-input__checkbox"},S0={class:"fields-grid"},w0={key:1},E0=["title","aria-label","aria-expanded","onClick"],C0={key:3,class:"parameter-definition"},k0={key:4,class:"expected-value"},I0=["onUpdate:modelValue"],P0=["onUpdate:modelValue"],O0=["value"],V0=["value","onInput"],D0={class:"form-actions"},ct={__name:"ElementPage",props:{elementId:String,quick:Boolean},setup(e){const n=e,o=ze("services"),a=ze("builtInRuleSets"),r=ei(),i=$c(),s=Te(null),l=Te(null),c=Te([]),u=Te([]),d=Te(null),m=Te("todas"),f=Te(localStorage.getItem("elementAutoName")==="true"),v=Te(null),N=Sa({name:"",ruleSet:"",data:{}}),B=Le(()=>!n.elementId),D=Le(()=>u.value.find(ee=>ee.id===N.ruleSet)),Q=Le(()=>{const ee={};for(const T of D.value?.regras??[]){const L=T.tipo==="conditional"?(()=>{const Y=D.value?.parametros?.[T.parametro],de=N.data[T.parametro],H=Y?.tipo==="number"?Hs(de):de;if(H==null||H==="")return[];const we=(T.condicoes??[]).find(_e=>_e.quando&&da(H,_e.quando.operador,_e.quando.valor));return we?.verificar?[we.verificar]:[]})():T.operador&&T.valor!==void 0?[{...T,parametro:T.parametro}]:[];for(const Y of L){if(!Y.parametro||Y.valor===void 0)continue;ee[Y.parametro]??=[];const de=It(Y.operador,Y.valor,D.value.parametros?.[Y.parametro]?.unidade);ee[Y.parametro].includes(de)||ee[Y.parametro].push(de)}}return ee}),R=Le(()=>{const ee=u.value.map(T=>T.norma?.nome).filter(Boolean);return["todas",...new Set(ee)]}),w=Le(()=>m.value==="todas"?u.value:u.value.filter(ee=>ee.norma?.nome===m.value));async function x(){n.quick&&o.quickEvaluationService.clear();const ee=await o.ruleSetService.list();u.value=[...a.map(L=>L.ruleSet),...ee],B.value||(s.value=await o.repositories.elementRepository.get(n.elementId));const T=s.value?.environmentId??r.query.environmentId;if(!(!n.quick&&(!T||!B.value&&!s.value))){if(n.quick||(l.value=await o.repositories.environmentRepository.get(T),c.value=await o.projectService.listElements(T)),s.value){const L=await o.evaluationService.listEvaluations(s.value.id);d.value=L[0]}N.name=s.value?.name??"",N.ruleSet=r.query.ruleSet??s.value?.rule??u.value[0]?.id??"",Object.assign(N.data,d.value?.data??{})}}function se(){const ee={},T=D.value?.parametros??{};for(const[L,Y]of Object.entries(T)){const de=N.data[L];if(!(de===""||de===void 0||de===null))if(Y.tipo==="number"){const H=Hs(de);H!==null&&(ee[L]=H)}else Y.tipo==="boolean"?ee[L]=de===!0||de==="true":ee[L]=de}return ee}function Z(ee,T){const L=T.target,Y=L.value,de=v0(Y);if(N.data[ee]=de,Y===de)return;const H=L.selectionStart??Y.length,we=Y.slice(0,H).replace(/\D/g,"").length;L.value=de;let _e=0,Ze=0;for(;_e<de.length&&Ze<we;)/\d/.test(de[_e])&&Ze++,_e++;L.setSelectionRange(_e,_e)}async function q(){if(!D.value)return window.alert("Selecione um conjunto de regras.");const ee=se(),T={name:N.name,type:D.value.nome,rule:D.value.id};try{const L=s.value?await o.projectService.updateElement(s.value.id,T):await o.projectService.createElement(l.value.id,T);await o.evaluationService.saveElementAnswers({elementId:L.id,checklist:D.value,data:ee}),i.push(`/projects/${l.value.projectId}/environments/${l.value.id}`)}catch(L){window.alert(L.message)}}function ae(ee){if(!ee)return"";const T=new Set(c.value.filter(de=>de.id!==s.value?.id).map(de=>de.name));if(!T.has(ee))return ee;let L=1,Y=`${ee} (${L})`;for(;T.has(Y);)L++,Y=`${ee} (${L})`;return Y}Ro([f,()=>N.ruleSet],([ee,T])=>{if(localStorage.setItem("elementAutoName",String(ee)),ee){const Y=u.value.find(de=>de.id===T)?.nome??"";N.name=ae(Y)}});async function re(){if(!D.value)return window.alert("Selecione um conjunto de regras.");const ee=se();if(n.quick){try{o.quickEvaluationService.evaluate({name:N.name,checklist:D.value,data:ee}),i.push("/quick-evaluation/result")}catch(L){window.alert(L.message)}return}const T={name:N.name,type:D.value.nome,rule:D.value.id};try{const L=s.value?await o.projectService.updateElement(s.value.id,T):await o.projectService.createElement(l.value.id,T);await o.evaluationService.evaluateElement({elementId:L.id,checklist:D.value,data:ee}),i.push(`/elements/${L.id}/evaluation`)}catch(L){window.alert(L.message)}}Ro(m,()=>{w.value.some(T=>T.id===N.ruleSet)||(N.ruleSet=w.value[0]?.id??"")}),Ro(()=>N.ruleSet,()=>{const ee=Object.keys(D.value?.parametros??{});Object.keys(N.data).forEach(T=>{ee.includes(T)||delete N.data[T]})});function ge(ee,T,L){const Y=(L||"").toLowerCase().trim();if(!Y)return!0;const de=ee.nome?.toLowerCase().includes(Y),H=ee.norma?.nome?.toLowerCase().includes(Y),we=ee.regras?.some(_e=>_e.nome?.toLowerCase().includes(Y)||_e.id?.toLowerCase().includes(Y));return!!(de||H||we)}return Vn(x),(ee,T)=>e.quick||l.value?(C(),W(Ee,{key:0},[e.quick?ye("",!0):(C(),Pe(X(Ce),{key:0,class:"back-link",to:`/projects/${l.value.projectId}/environments/${l.value.id}`},{default:pe(()=>[F(X(fo),{size:18,"aria-hidden":"true"}),Be(le(l.value.name),1)]),_:1},8,["to"])),F(Zn,{title:e.quick?"Avaliação rápida":B.value?"Novo elemento":s.value.name,description:"Escolha o tipo e informe as medidas observadas."},null,8,["title"]),b("form",{class:"form-card",onSubmit:T[5]||(T[5]=Xn(()=>{},["prevent"]))},[b("div",g0,[b("label",b0,[T[7]||(T[7]=b("span",null,"Norma de referência",-1)),Cn(b("select",{"onUpdate:modelValue":T[0]||(T[0]=L=>m.value=L)},[T[6]||(T[6]=b("option",{value:"todas"},"Todas as normas",-1)),(C(!0),W(Ee,null,fn(R.value.filter(L=>L!=="todas"),L=>(C(),W("option",{key:L,value:L},le(L),9,_0))),128))],512),[[Or,m.value]])]),b("label",y0,[T[8]||(T[8]=b("span",null,"Tipo de elemento *",-1)),F(X(c0),{modelValue:N.ruleSet,"onUpdate:modelValue":T[1]||(T[1]=L=>N.ruleSet=L),options:w.value,label:"nome",reduce:L=>L.id,"filter-by":ge,placeholder:"Pesquise o elemento ou regra..."},{option:pe(L=>[b("div",A0,[b("span",N0,le(L.nome),1),L.norma?.nome?(C(),W("small",x0," ("+le(L.norma.nome)+") ",1)):ye("",!0)])]),_:1},8,["modelValue","options","reduce"])])]),e.quick?ye("",!0):(C(),W("label",B0,[b("div",T0,[T[9]||(T[9]=b("span",null,"Nome do elemento *",-1)),b("div",R0,[Cn(b("input",{type:"checkbox",id:"auto-name-chk","onUpdate:modelValue":T[2]||(T[2]=L=>f.value=L)},null,512),[[mm,f.value]]),b("p",{onClick:T[3]||(T[3]=Xn(L=>f.value=!f.value,["stop"]))},"Auto Nomear")])]),Cn(b("input",{"onUpdate:modelValue":T[4]||(T[4]=L=>N.name=L),required:"",placeholder:"Ex.: Porta principal"},null,512),[[nr,N.name]])])),T[13]||(T[13]=b("div",{class:"form-divider"},[b("strong",null,"Dados para avaliação"),b("span",null,"Campos definidos pelo conjunto de regras selecionado.")],-1)),b("div",S0,[(C(!0),W(Ee,null,fn(D.value?.parametros,(L,Y)=>(C(),W("label",{key:Y,class:"field"},[b("span",null,[Be(le(L.label??Y)+" ",1),L.obrigatorio?(C(),W(Ee,{key:0},[Be(" *")],64)):ye("",!0),L.unidade?(C(),W("small",w0," ("+le(L.unidade)+")",1)):ye("",!0),L.definicao?(C(),W("button",{key:2,class:"parameter-help",type:"button",title:L.definicao,"aria-label":`Definição: ${L.label??Y}`,"aria-expanded":v.value===Y,onClick:Xn(de=>v.value=v.value===Y?null:Y,["stop"])},[F(X(ni),{size:16,"aria-hidden":"true"})],8,E0)):ye("",!0),L.definicao&&v.value===Y?(C(),W("small",C0,le(L.definicao),1)):ye("",!0),Q.value[Y]?.length?(C(),W("small",k0," Esperado: "+le(Q.value[Y].join(" ou ")),1)):ye("",!0)]),L.tipo==="boolean"?Cn((C(),W("select",{key:0,"onUpdate:modelValue":de=>N.data[Y]=de},[...T[10]||(T[10]=[b("option",{value:""},"Não informado",-1),b("option",{value:!0},"Sim",-1),b("option",{value:!1},"Não",-1)])],8,I0)),[[Or,N.data[Y]]]):L.tipo==="select"?Cn((C(),W("select",{key:1,"onUpdate:modelValue":de=>N.data[Y]=de},[T[11]||(T[11]=b("option",{value:""},"Selecione",-1)),(C(!0),W(Ee,null,fn(L.opcoes??[],de=>(C(),W("option",{key:de,value:de},le(de),9,O0))),128))],8,P0)),[[Or,N.data[Y]]]):(C(),W("input",{key:2,value:N.data[Y]??"",type:"text",inputmode:"decimal",autocomplete:"off",autocapitalize:"off",spellcheck:"false",onInput:de=>Z(Y,de)},null,40,V0))]))),128))]),b("div",D0,[F(X(Ce),{class:"button button--ghost",to:e.quick?"/projects":`/projects/${l.value.projectId}/environments/${l.value.id}`},{default:pe(()=>[...T[12]||(T[12]=[Be(" Cancelar ",-1)])]),_:1},8,["to"]),e.quick?ye("",!0):(C(),W("button",{key:0,class:"button button--outline",type:"button",onClick:q}," Salvar e voltar ")),b("button",{class:"button",type:"button",onClick:re},le(e.quick?"Avaliar":"Salvar e avaliar"),1)])],32)],64)):(C(),Pe(yn,{key:1,title:"Elemento não encontrado",text:"Volte para o ambiente e tente novamente."},{default:pe(()=>[F(X(Ce),{class:"button",to:"/projects"},{default:pe(()=>[...T[14]||(T[14]=[Be("Projetos",-1)])]),_:1})]),_:1}))}},Uo={__name:"StatusBadge",props:{status:{type:String,default:"nao_avaliado"}},setup(e){const n={conforme:"Conforme",nao_conforme:"Não conforme",nao_avaliado:"Pendente",invalido:"Pendente",erro:"Pendente",atencao:"Atenção",manual:"Verificar"};return(o,a)=>(C(),W("span",{class:dn(["status",`status--${e.status}`])},le(n[e.status]??"Pendente"),3))}},j0={class:"evaluation-summary","aria-labelledby":"evaluation-summary-title"},L0={class:"evaluation-summary__heading"},q0={id:"evaluation-summary-title"},$0={class:"evaluation-summary__score"},M0={class:"evaluation-summary__cards"},F0={class:"evaluation-summary__card evaluation-summary__card--conforme"},z0={class:"evaluation-summary__card evaluation-summary__card--nao_conforme"},H0={class:"evaluation-summary__card evaluation-summary__card--nao_avaliado"},ai={__name:"EvaluationSummary",props:{summary:{type:Object,required:!0},scope:{type:String,default:"elementos"}},setup(e){const n=e,o=Le(()=>n.summary.totalElements?n.summary.overallStatus==="conforme"?"Todos os elementos estão conformes":n.summary.overallStatus==="nao_conforme"?"Há elementos não conformes":"Há elementos pendentes de avaliação":"Nenhum elemento cadastrado");return(a,r)=>(C(),W("section",j0,[b("div",L0,[b("div",null,[b("h2",q0,"Situação do "+le(e.scope),1),b("p",null,le(o.value),1)]),b("div",$0,[b("strong",null,le(e.summary.score)+"%",1),r[0]||(r[0]=b("span",null,"conformes",-1))])]),b("div",M0,[b("div",F0,[r[1]||(r[1]=b("span",null,"Conformes",-1)),b("strong",null,le(e.summary.conforme),1)]),b("div",z0,[r[2]||(r[2]=b("span",null,"Não conformes",-1)),b("strong",null,le(e.summary.nao_conforme),1)]),b("div",H0,[r[3]||(r[3]=b("span",null,"Pendentes",-1)),b("strong",null,le(e.summary.nao_avaliado),1)])]),e.summary.totalElements?(C(),Pe(Uo,{key:0,status:e.summary.overallStatus},null,8,["status"])):ye("",!0)]))}},U0={key:1,class:"card-list collection-list"},K0={class:"card__icon"},G0={class:"card__menu"},W0=["onClick"],Y0={__name:"EnvironmentPage",props:{projectId:String,environmentId:String},setup(e){const n=e,o=ze("services"),a=ze("confirmPopup"),r=Te(null),i=Te(null),s=Te([]),l=Te(null);function c(f){return f.status==="nao_avaliado"?`/elements/${f.element.id}`:`/elements/${f.element.id}/evaluation`}function u(f,v){a.open({target:v.currentTarget,message:`Excluir o elemento ${f.name} e suas avaliações?`,onAccept:()=>d(f)})}async function d(f){const v=await o.evaluationService.listEvaluations(f.id);for(const N of v)await o.repositories.evaluationRepository.delete(N.id);await o.repositories.elementRepository.delete(f.id),await m()}async function m(){if(r.value=await o.repositories.environmentRepository.get(n.environmentId),!r.value)return;i.value=await o.projectService.getProject(r.value.projectId);const f=await o.projectService.listElements(r.value.id),[v,N]=await Promise.all([Promise.all(f.map(async B=>{const D=await o.evaluationService.listEvaluations(B.id);return{element:B,status:Rt(D)}})),o.evaluationService.getEnvironmentSummary(r.value.id)]);s.value=v,l.value=N}return Vn(m),(f,v)=>r.value?(C(),W(Ee,{key:0},[F(X(Ce),{class:"back-link",to:`/projects/${r.value.projectId}`},{default:pe(()=>[F(X(fo),{size:18,"aria-hidden":"true"}),Be(le(i.value?.name??"Projeto"),1)]),_:1},8,["to"]),F(Zn,{title:r.value.name},{action:pe(()=>[s.value.length?(C(),Pe(X(Ce),{key:0,class:"button",to:{path:"/elements/new",query:{environmentId:r.value.id}}},{default:pe(()=>[F(X(qs),{size:18,"aria-hidden":"true"}),v[0]||(v[0]=Be("Adicionar elemento ",-1))]),_:1},8,["to"])):ye("",!0)]),_:1},8,["title"]),l.value&&s.value.length?(C(),Pe(ai,{key:0,summary:l.value,scope:"ambiente"},null,8,["summary"])):ye("",!0),s.value.length?(C(),W("div",U0,[(C(!0),W(Ee,null,fn(s.value,N=>(C(),W("article",{key:N.element.id,class:"card card--interactive"},[F(X(Ce),{class:"card__link",to:c(N)},{default:pe(()=>[b("span",K0,[F(X(Zf),{size:22,"aria-hidden":"true"})]),b("div",null,[b("h2",null,le(N.element.name),1),b("p",null,le(N.element.type),1)]),F(Uo,{status:N.status},null,8,["status"]),F(X(Ta),{size:20,class:"chevron","aria-hidden":"true"})]),_:2},1032,["to"]),b("div",G0,[b("button",{class:"icon-button icon-button--danger",title:"Excluir","aria-label":"Excluir",onClick:B=>u(N.element,B)},[F(X(Ar),{size:18,"aria-hidden":"true"})],8,W0)])]))),128))])):ye("",!0),s.value.length?ye("",!0):(C(),Pe(yn,{key:2,class:"collection-empty",title:"Nenhum elemento ainda",text:"Cadastre portas, rampas, sanitários e outros itens para avaliar."},{default:pe(()=>[F(X(Ce),{class:"button",to:{path:"/elements/new",query:{environmentId:r.value.id}}},{default:pe(()=>[F(X(qs),{size:18,"aria-hidden":"true"}),v[1]||(v[1]=Be("Adicionar elemento ",-1))]),_:1},8,["to"])]),_:1}))],64)):(C(),Pe(yn,{key:1,title:"Ambiente não encontrado",text:"Ele pode ter sido removido."},{default:pe(()=>[F(X(Ce),{class:"button",to:"/projects"},{default:pe(()=>[...v[2]||(v[2]=[Be("Projetos",-1)])]),_:1})]),_:1}))}},J0={class:"result-summary__counts","aria-label":"Resumo das regras"},Q0={key:0,class:"result-summary__pending"},X0={class:"results"},Z0={class:"result-row__content"},ev={key:0},nv={key:0,class:"result-values"},ov={key:0,class:"result-values__context"},av={key:1,class:"result-values__item"},rv={key:2,class:"result-values__item result-values__item--expected"},tv={key:1,class:"result-row__reference"},Us={__name:"EvaluationPage",props:{elementId:String,quick:Boolean},setup(e){const n=e,o=ze("services"),a=ze("builtInRuleSets"),r=Te(null),i=Te(null),s=Te(null),l=Te([]),c=Le(()=>i.value?`/projects/${i.value.projectId}/environments/${i.value.id}`:"/projects"),u=Le(()=>s.value?.result??[]),d=Le(()=>l.value.find(w=>w.id===r.value?.rule));function m(w){const x=d.value?.regras?.find(Y=>Y.id===w.id),se=s.value?.data??{},Z=d.value?.parametros??{};let q=w.parametro??x?.parametro,ae=w.operador??x?.operador,re=w.valorEsperado??x?.valor,ge="";if(x?.tipo==="conditional"){const Y=se[x.parametro],de=(x.condicoes??[]).find(H=>H.quando&&da(Y,H.quando.operador,H.quando.valor));if(de?.verificar){q=de.verificar.parametro,ae=de.verificar.operador,re=de.verificar.valor;const H=Z[x.parametro];ge=`${H?.label??x.parametro}: ${It(de.quando.operador,de.quando.valor,H?.unidade)}`}}const ee=Z[q]??{},T=w.valorInformado!==void 0?w.valorInformado:se[q],L=re!==void 0&&ae!==void 0;return{parameterLabel:ee.label??q,actual:typeof T=="boolean"?T?"Sim":"Não":T,unit:typeof T=="boolean"?"":w.unidade??ee.unidade??"",expected:L?It(ae,re,w.unidade??ee.unidade):"",conditionalDescription:ge}}const f=Le(()=>u.value.filter(w=>["nao_conforme","erro","invalido"].includes(w.status)).length),v=Le(()=>u.value.filter(w=>["nao_avaliado","manual","atencao"].includes(w.status)).length),N=Le(()=>u.value.length-f.value-v.value),B=Le(()=>u.value.length?f.value>0?"nao_conforme":v.value>0?"nao_avaliado":"conforme":"nao_avaliado"),D=Le(()=>{switch(B.value){case"conforme":return"Elemento conforme";case"nao_conforme":return"Há itens não conformes";default:return"Avaliação pendente"}});function Q(w){return w?new Intl.DateTimeFormat("pt-BR",{dateStyle:"medium",timeStyle:"short"}).format(new Date(w)):""}async function R(){const w=await o.ruleSetService.list();if(l.value=[...(a??[]).map(x=>x.ruleSet),...w],n.quick){const x=o.quickEvaluationService.getCurrent();r.value=x?.element??null,s.value=x?.evaluation??null;return}if(r.value=await o.repositories.elementRepository.get(n.elementId),r.value){i.value=await o.repositories.environmentRepository.get(r.value.environmentId);const x=await o.evaluationService.listEvaluations(r.value.id);s.value=x[0]??null}}return Vn(R),(w,x)=>r.value&&s.value?(C(),W(Ee,{key:0},[F(X(Ce),{class:"back-link",to:e.quick?"/quick-evaluation":c.value},{default:pe(()=>[F(X(fo),{size:18,"aria-hidden":"true"}),Be(le(e.quick?r.value.name:i.value?.name??r.value.name),1)]),_:1},8,["to"]),F(Zn,{title:r.value.name,description:`Avaliação realizada em ${Q(s.value.evaluatedAt)}`},{action:pe(()=>[e.quick?ye("",!0):(C(),Pe(X(Ce),{key:0,class:"button button--outline",to:`/elements/${r.value.id}`},{default:pe(()=>[F(X(uh),{size:18,"aria-hidden":"true"}),x[0]||(x[0]=Be("Editar elemento ",-1))]),_:1},8,["to"]))]),_:1},8,["title","description"]),b("section",{class:dn(["result-summary",`result-summary--${B.value}`])},[F(Uo,{status:B.value},null,8,["status"]),b("h2",null,le(D.value),1),b("div",J0,[b("span",null,[b("strong",null,le(N.value),1),x[1]||(x[1]=Be(" conformes",-1))]),b("span",null,[b("strong",null,le(f.value),1),x[2]||(x[2]=Be(" não conformes",-1))]),b("span",null,[b("strong",null,le(v.value),1),x[3]||(x[3]=Be(" pendentes ou para verificar",-1))])]),v.value?(C(),W("div",Q0,[x[5]||(x[5]=b("span",null,"Há regras pendentes ou para verificar.",-1)),e.quick?ye("",!0):(C(),Pe(X(Ce),{key:0,class:"text-button",to:`/elements/${r.value.id}`},{default:pe(()=>[...x[4]||(x[4]=[Be(" Editar elemento ",-1)])]),_:1},8,["to"]))])):ye("",!0)],2),b("section",X0,[x[8]||(x[8]=b("h2",null,"Regras avaliadas",-1)),(C(!0),W(Ee,null,fn(u.value,se=>(C(),W("article",{key:se.id,class:dn(["result-row",`result-row--${se.status}`])},[b("div",Z0,[F(Uo,{status:se.status},null,8,["status"]),b("h3",null,le(se.nome??se.id),1),se.mensagem?(C(),W("p",ev,le(se.mensagem),1)):ye("",!0),(C(!0),W(Ee,null,fn([m(se)],Z=>(C(),W("div",{key:se.id,class:"result-row__details"},[Z.actual!==void 0||Z.expected?(C(),W("div",nv,[Z.conditionalDescription?(C(),W("div",ov,[x[6]||(x[6]=b("span",null,"Condição desta regra",-1)),b("strong",null,le(Z.conditionalDescription),1)])):ye("",!0),Z.actual!==void 0?(C(),W("div",av,[b("span",null,"Valor informado · "+le(Z.parameterLabel),1),b("strong",null,[Be(le(Z.actual),1),Z.unit?(C(),W(Ee,{key:0},[Be(le(Z.unit),1)],64)):ye("",!0)])])):ye("",!0),Z.expected?(C(),W("div",rv,[x[7]||(x[7]=b("span",null,"Critério esperado",-1)),b("strong",null,le(Z.expected),1)])):ye("",!0)])):ye("",!0)]))),128)),se.referencia?(C(),W("small",tv,"Referência: "+le(se.referencia),1)):ye("",!0)])],2))),128))]),e.quick?(C(),Pe(X(Ce),{key:0,class:"button",to:"/quick-evaluation"},{default:pe(()=>[...x[9]||(x[9]=[Be(" Nova avaliação rápida ",-1)])]),_:1})):ye("",!0)],64)):r.value?(C(),W(Ee,{key:1},[F(X(Ce),{class:"back-link",to:e.quick?"/quick-evaluation":c.value},{default:pe(()=>[F(X(fo),{size:18,"aria-hidden":"true"}),x[10]||(x[10]=Be("Elemento ",-1))]),_:1},8,["to"]),F(yn,{title:"Ainda não há avaliação",text:"Preencha os dados do elemento para executar as regras."},{default:pe(()=>[F(X(Ce),{class:"button",to:e.quick?"/quick-evaluation":`/elements/${r.value.id}`},{default:pe(()=>[Be(le(e.quick?"Nova avaliação rápida":"Avaliar elemento"),1)]),_:1},8,["to"])]),_:1})],64)):(C(),Pe(yn,{key:2,title:"Avaliação não encontrada",text:e.quick?"Inicie uma avaliação rápida para ver o resultado.":"O elemento pode ter sido removido."},{default:pe(()=>[F(X(Ce),{class:"button",to:e.quick?"/quick-evaluation":"/projects"},{default:pe(()=>[Be(le(e.quick?"Avaliação rápida":"Projetos"),1)]),_:1},8,["to"])]),_:1},8,["text"]))}},iv={class:"project-header__actions"},sv={class:"collection-form__heading"},lv={class:"field"},cv={class:"environments-summary-container"},uv={key:0,class:"card-grid-environment collection-list"},dv={class:"card__icon"},mv={class:"card__menu"},pv=["onClick"],fv=["onClick"],hv={__name:"ProjectPage",props:{projectId:String},setup(e){const n=e,o=ze("services"),a=ze("confirmPopup"),r=Te(null),i=Te([]),s=Te(""),l=Te(null),c=Te(null),u=Te(null);async function d(){r.value=await o.projectService.getProject(n.projectId),r.value&&([i.value,c.value]=await Promise.all([o.projectService.listEnvironments(n.projectId),o.evaluationService.getProjectSummary(n.projectId)]))}async function m(){l.value={},s.value="",await $o(),u.value?.scrollIntoView({behavior:"smooth"})}function f(Q){l.value=Q,s.value=Q.name}function v(){l.value=null,s.value=""}async function N(){l.value?.id?await o.projectService.renameEnvironment(l.value.id,s.value):await o.projectService.createEnvironment(n.projectId,{name:s.value}),v(),await d()}function B(Q,R){a.open({target:R.currentTarget,message:`Excluir o ambiente “${Q.name}” e seus elementos?`,onAccept:()=>D(Q)})}async function D(Q){const R=await o.projectService.listElements(Q.id);for(const w of R){const x=await o.evaluationService.listEvaluations(w.id);for(const se of x)await o.repositories.evaluationRepository.delete(se.id);await o.repositories.elementRepository.delete(w.id)}await o.repositories.environmentRepository.delete(Q.id),await d()}return Vn(d),(Q,R)=>r.value?(C(),W(Ee,{key:0},[F(X(Ce),{class:"back-link",to:"/projects"},{default:pe(()=>[F(X(fo),{size:18,"aria-hidden":"true"}),R[1]||(R[1]=Be("Projetos",-1))]),_:1}),F(Zn,{title:r.value.name,description:`${i.value.length} ambiente${i.value.length===1?"":"s"} cadastrado${i.value.length===1?"":"s"}.
      
${r.value.description}`},{action:pe(()=>[b("div",iv,[i.value.length?(C(),Pe(X(Ce),{key:0,class:"button button--outline",to:`/projects/${e.projectId}/status`},{default:pe(()=>[F(X(mo),{size:18,"aria-hidden":"true"}),R[2]||(R[2]=Be("Status detalhado ",-1))]),_:1},8,["to"])):ye("",!0),i.value.length?(C(),W("button",{key:1,class:"button",onClick:m},[F(X(ar),{size:18,"aria-hidden":"true"}),R[3]||(R[3]=Be("Novo ambiente",-1))])):ye("",!0)])]),_:1},8,["title","description"]),l.value?(C(),W("form",{key:0,class:"form-card collection-form",onSubmit:Xn(N,["prevent"]),ref_key:"inputCreate",ref:u},[b("div",sv,[b("h2",null,le(l.value.id?"Nome do ambiente":"Novo ambiente"),1),R[4]||(R[4]=b("p",null,"Use um nome que ajude a identificar este espaço no projeto.",-1))]),b("label",lv,[R[5]||(R[5]=b("span",null,"Nome do ambiente",-1)),Cn(b("input",{"onUpdate:modelValue":R[0]||(R[0]=w=>s.value=w),required:"",autofocus:""},null,512),[[nr,s.value]])]),b("div",{class:"form-actions"},[b("button",{class:"button button--ghost",type:"button",onClick:v}," Cancelar "),R[6]||(R[6]=b("button",{class:"button",type:"submit"},"Salvar",-1))])],544)):ye("",!0),c.value&&i.value.length?(C(),Pe(ai,{key:1,summary:c.value,scope:"projeto"},null,8,["summary"])):ye("",!0),b("div",cv,[i.value.length?(C(),W("div",uv,[(C(!0),W(Ee,null,fn(i.value,w=>(C(),W("article",{key:w.id,class:"card-environment"},[F(X(Ce),{class:"card__link",to:`/projects/${r.value.id}/environments/${w.id}`},{default:pe(()=>[b("span",dv,[F(X(lh),{size:22,"aria-hidden":"true"})]),b("div",null,[b("h2",null,le(w.name),1),R[7]||(R[7]=b("p",null,"Ambiente",-1))])]),_:2},1032,["to"]),b("div",mv,[b("button",{class:"text-button",onClick:x=>f(w)}," Editar ",8,pv),b("button",{class:"icon-button icon-button--danger",title:"Excluir","aria-label":"Excluir",onClick:x=>B(w,x)},[F(X(Ar),{size:18,"aria-hidden":"true"})],8,fv)])]))),128))])):ye("",!0),i.value.length?ye("",!0):(C(),Pe(yn,{key:1,class:"collection-empty",title:"Nenhum ambiente ainda",text:"Adicione espaços como entrada, banheiro ou circulação."},{default:pe(()=>[b("button",{class:"button",onClick:m},[F(X(ar),{size:18,"aria-hidden":"true"}),R[8]||(R[8]=Be("Novo ambiente",-1))])]),_:1}))])],64)):(C(),Pe(yn,{key:1,title:"Projeto não encontrado",text:"Ele pode ter sido removido."},{default:pe(()=>[F(X(Ce),{class:"button",to:"/projects"},{default:pe(()=>[...R[9]||(R[9]=[Be("Voltar aos projetos",-1)])]),_:1})]),_:1}))}},vv={key:0,class:"muted",role:"status"},gv={key:0,class:"alert alert--error",role:"alert"},bv={key:2,class:"project-status","aria-label":"Status por ambiente"},_v={class:"project-status__heading"},yv=["aria-label"],Av={class:"status status--conforme"},Nv={class:"status status--nao_conforme"},xv={class:"status status--nao_avaliado"},Bv={key:1,class:"project-status__elements"},Tv={class:"project-status__element-name"},Rv={key:2,class:"muted"},Sv={__name:"ProjectStatusPage",props:{projectId:String},setup(e){const n=e,o=ze("services"),a=Te(null),r=Te(null),i=Te(!0),s=Te("");async function l(){try{a.value=await o.projectService.getProject(n.projectId),a.value&&(r.value=await o.evaluationService.getProjectStatus(n.projectId))}catch(d){s.value=d.message}finally{i.value=!1}}function c(d){return d.status==="nao_avaliado"?`/elements/${d.element.id}`:`/elements/${d.element.id}/evaluation`}function u(d,m,f){return`${d} ${d===1?m:f}`}return Vn(l),(d,m)=>i.value?(C(),W("p",vv,"Carregando…")):a.value&&r.value?(C(),W(Ee,{key:1},[F(X(Ce),{class:"back-link",to:`/projects/${e.projectId}`},{default:pe(()=>[F(X(fo),{size:18,"aria-hidden":"true"}),Be(le(a.value.name),1)]),_:1},8,["to"]),F(Zn,{title:"Status do projeto",description:`${a.value.name} · ${u(r.value.environments.length,"ambiente","ambientes")}`},{action:pe(()=>[F(X(Ce),{class:"button button--outline",to:`/projects/${e.projectId}`},{default:pe(()=>[...m[0]||(m[0]=[Be(" Abrir projeto ",-1)])]),_:1},8,["to"])]),_:1},8,["description"]),s.value?(C(),W("p",gv,le(s.value),1)):ye("",!0),r.value.summary.totalElements?(C(),Pe(ai,{key:1,summary:r.value.summary,scope:"projeto"},null,8,["summary"])):ye("",!0),r.value.environments.length?(C(),W("section",bv,[(C(!0),W(Ee,null,fn(r.value.environments,f=>(C(),W("article",{key:f.environment.id,class:"card project-status__environment"},[b("header",_v,[b("div",null,[b("h2",null,le(f.environment.name),1),b("p",null,le(u(f.elements.length,"elemento","elementos")),1)]),F(Uo,{status:f.summary.overallStatus},null,8,["status"])]),f.elements.length?(C(),W("div",{key:0,class:"project-status__counts","aria-label":`Situação dos elementos de ${f.environment.name}`},[b("span",Av,le(f.summary.conforme)+" conforme"+le(f.summary.conforme===1?"":"s"),1),b("span",Nv,le(f.summary.nao_conforme)+" não conforme"+le(f.summary.nao_conforme===1?"":"s"),1),b("span",xv,le(f.summary.nao_avaliado)+" pendente"+le(f.summary.nao_avaliado===1?"":"s"),1)],8,yv)):ye("",!0),f.elements.length?(C(),W("ul",Bv,[(C(!0),W(Ee,null,fn(f.elements,v=>(C(),W("li",{key:v.element.id},[F(X(Ce),{class:"project-status__element",to:c(v)},{default:pe(()=>[b("span",Tv,le(v.element.name),1),F(Uo,{status:v.status},null,8,["status"]),F(X(Ta),{size:18,class:"chevron","aria-hidden":"true"})]),_:2},1032,["to"])]))),128))])):(C(),W("p",Rv,"Nenhum elemento cadastrado neste ambiente.")),F(X(Ce),{class:"text-button",to:`/projects/${e.projectId}/environments/${f.environment.id}`},{default:pe(()=>[...m[1]||(m[1]=[Be(" Abrir ambiente ",-1)])]),_:1},8,["to"])]))),128))])):(C(),Pe(yn,{key:3,class:"collection-empty",title:"Nenhum ambiente cadastrado",text:"Crie um ambiente e cadastre elementos para acompanhar o status do projeto."},{default:pe(()=>[F(X(Ce),{class:"button",to:`/projects/${e.projectId}`},{default:pe(()=>[...m[2]||(m[2]=[Be("Abrir projeto",-1)])]),_:1},8,["to"])]),_:1}))],64)):a.value?(C(),Pe(yn,{key:2,title:"Não foi possível carregar o status",text:s.value||"Tente novamente mais tarde."},{default:pe(()=>[F(X(Ce),{class:"button",to:`/projects/${e.projectId}`},{default:pe(()=>[...m[3]||(m[3]=[Be("Abrir projeto",-1)])]),_:1},8,["to"])]),_:1},8,["text"])):(C(),Pe(yn,{key:3,title:"Projeto não encontrado",text:"Ele pode ter sido removido."},{default:pe(()=>[F(X(Ce),{class:"button",to:"/projects"},{default:pe(()=>[...m[4]||(m[4]=[Be("Projetos",-1)])]),_:1})]),_:1}))}},wv={class:"collection-form__heading"},Ev={class:"fields-grid"},Cv={class:"field"},kv={class:"field"},Iv={key:0,class:"muted"},Pv={key:1,class:"card-list collection-list"},Ov={class:"card__icon"},Vv={key:0},Dv={class:"card__menu"},jv=["onClick"],Lv=["onClick"],qv={__name:"ProjectsPage",setup(e){const n=ze("services"),o=ze("confirmPopup"),a=Te([]),r=Te(""),i=Te(""),s=Te(null),l=Te(""),c=Te(!1);function u(){c.value=!0}async function d(){a.value=await n.projectService.listProjects()}function m(){s.value={},r.value="",i.value="",l.value=""}function f(R){s.value=R,r.value=R.name,l.value="",i.value=R.description||""}function v(){s.value=null,r.value="",i.value="",l.value=""}async function N(){try{l.value="",s.value?.id?await n.projectService.updateProject(s.value.id,{name:r.value,description:i.value}):await n.projectService.createProject({name:r.value,description:i.value}),r.value="",i.value="",s.value=null,await d()}catch(R){l.value=R.message}}function B(R,w){o.open({target:w.currentTarget,message:`Excluir o projeto “${R.name}” e seus dados?`,onAccept:()=>D(R)})}async function D(R){const w=await n.projectService.listEnvironments(R.id);for(const x of w){const se=await n.projectService.listElements(x.id);for(const Z of se){const q=await n.evaluationService.listEvaluations(Z.id);for(const ae of q)await n.repositories.evaluationRepository.delete(ae.id);await n.repositories.elementRepository.delete(Z.id)}await n.repositories.environmentRepository.delete(x.id)}await n.repositories.projectRepository.delete(R.id),await d()}function Q(R){return new Intl.DateTimeFormat("pt-BR",{dateStyle:"medium"}).format(new Date(R))}return Vn(d),(R,w)=>(C(),W(Ee,null,[F(Zn,{title:"Projetos",description:"Acompanhe seus locais e avaliações.",helpButton:"",onHelp:u},{action:pe(()=>[a.value.length?(C(),W("button",{key:0,class:"button",onClick:m},[F(X(ar),{size:18,"aria-hidden":"true"}),w[3]||(w[3]=Be("Novo projeto",-1))])):ye("",!0)]),_:1}),s.value?(C(),W("form",{key:0,class:"form-card collection-form",onSubmit:Xn(N,["prevent"])},[b("div",wv,[b("h2",null,le(s.value.id?"Dados do projeto":"Novo projeto"),1),w[4]||(w[4]=b("p",null,"Defina um nome e, se quiser, uma breve descrição para este local.",-1))]),b("div",Ev,[b("label",Cv,[w[5]||(w[5]=b("span",null,"Nome do projeto",-1)),Cn(b("input",{"onUpdate:modelValue":w[0]||(w[0]=x=>r.value=x),required:"",autofocus:""},null,512),[[nr,r.value]])]),b("label",kv,[w[6]||(w[6]=b("span",null,[Be("Descrição "),b("small",null,"(opcional)")],-1)),Cn(b("input",{"onUpdate:modelValue":w[1]||(w[1]=x=>i.value=x)},null,512),[[nr,i.value]])])]),l.value?(C(),W("p",Iv,le(l.value),1)):ye("",!0),b("div",{class:"form-actions"},[b("button",{class:"button button--ghost",type:"button",onClick:v}," Cancelar "),w[7]||(w[7]=b("button",{class:"button",type:"submit"},"Salvar",-1))])],32)):ye("",!0),a.value.length?(C(),W("div",Pv,[(C(!0),W(Ee,null,fn(a.value,x=>(C(),W("article",{key:x.id,class:"card project-card"},[F(X(Ce),{class:"card__link",to:`/projects/${x.id}`},{default:pe(()=>[b("span",Ov,[F(X(Mc),{size:22,"aria-hidden":"true"})]),b("div",null,[b("h2",null,le(x.name),1),b("p",null,"Atualizado em "+le(Q(x.updatedAt)),1),x.description?(C(),W("p",Vv,le(x.description),1)):ye("",!0)]),F(X(Ta),{size:20,class:"chevron","aria-hidden":"true"})]),_:2},1032,["to"]),b("div",Dv,[b("button",{class:"text-button",onClick:se=>f(x)}," Editar ",8,jv),b("button",{class:"icon-button icon-button--danger",title:"Excluir","aria-label":"Excluir",onClick:se=>B(x,se)},[F(X(Ar),{size:18,"aria-hidden":"true"})],8,Lv)])]))),128))])):(C(),Pe(yn,{key:2,class:"collection-empty",title:"Comece por um projeto",text:"Organize as avaliações de acessibilidade por obra ou local."},{default:pe(()=>[b("button",{class:"button",onClick:m},[F(X(ar),{size:18,"aria-hidden":"true"}),w[8]||(w[8]=Be("Novo projeto",-1))])]),_:1})),c.value?(C(),Pe(Fc,{key:3,onClose:w[2]||(w[2]=x=>c.value=!1)})):ye("",!0)],64))}};function $v(e=""){const n=e.replace(/^(\.\.\/|\.\/|\/)+/,"").split("/");return n.length>1?n.slice(0,-1).join("/"):""}function Mv(e,n){const[o]=e,a=o?.norma;return a?.nome?`${a.nome}${a.versao?` · ${a.versao}`:""}`:n.split("/").at(-1)?.replaceAll("-"," ")??"Regras padrão"}function Fv(e){const n=new Map;for(const o of e){const a=$v(o.path)||o.ruleSet.id,r=n.get(a)??{id:a,source:"standard",ruleSets:[]};r.ruleSets.push(o.ruleSet),n.set(a,r)}return[...n.values()].map(o=>({...o,nome:Mv(o.ruleSets,o.id)})).sort((o,a)=>o.nome.localeCompare(a.nome))}function zv(e){const n=new Map;for(const o of e){const a=o.grupo,r=a?.id??o.id,i=n.get(r)??{id:r,nome:a?.nome??o.nome,source:"user",ruleSets:[]};i.ruleSets.push(o),n.set(r,i)}return[...n.values()].sort((o,a)=>o.nome.localeCompare(a.nome))}const Hv={class:"documentation"},Uv={class:"documentation__intro"},Kv={class:"documentation__icon"},Gv=["href"],Wv={class:"documentation__section"},Yv={key:0,class:"muted",role:"status"},Jv={key:0,class:"alert alert--error",role:"alert"},Qv={class:"rules-section rules-section--first"},Xv={class:"card-list ruleset-list"},Zv={key:0,class:"ruleset-card__actions"},eg=["onClick"],ng=["onClick"],og=["onClick"],ag={class:"rules-actions"},rg={class:"button import-button"},tg=["disabled"],ig={class:"button button--outline import-button"},sg=["disabled"],lg={key:0,class:"muted",role:"status"},cg={key:1,class:"alert alert--error",role:"alert"},ug={key:2,class:"muted",role:"status"},dg={key:3,class:"rules-library"},mg={class:"rules-section rules-section--first rules-library__section"},pg={class:"card-list rules-library__list"},fg={class:"card__icon"},hg={class:"rules-section rules-library__section"},vg={key:0,class:"card-list rules-library__list"},gg={class:"card__icon"},ut={__name:"RulesPage",props:{source:String,groupId:String,documentation:Boolean},setup(e){const n=e,o=ze("services"),a=ze("builtInRuleSets");$c();const r=ze("confirmPopup"),i=Le(()=>"/Extensao-26.2/rule-engine-skill/SKILL.md"),s=Te([]),l=Te(!0),c=Te(!1),u=Te(""),d=Le(()=>s.value.filter(Z=>Z.source==="standard")),m=Le(()=>s.value.filter(Z=>Z.source==="user")),f=Le(()=>s.value.find(Z=>Z.source===n.source&&Z.id===n.groupId));function v(Z){return Z.regras?.length??0}function N(Z){return Object.keys(Z.parametros??{}).length}function B(Z){return Z.ruleSets.reduce((q,ae)=>q+v(ae),0)}async function D(){l.value=!0;try{const Z=await o.ruleSetService.list();s.value=[...Fv(a),...zv(Z)]}finally{l.value=!1}}function Q(Z){return`/rules/${encodeURIComponent(Z.source)}/${encodeURIComponent(Z.id)}`}async function R(Z){const q=[...Z.target.files??[]];if(!q.length)return;const ae=q.filter(Y=>/\.(json|ya?ml)$/i.test(Y.name)),re=q.length-ae.length;if(!ae.length){u.value="Nenhum arquivo .json, .yaml ou .yml encontrado.",Z.target.value="";return}u.value="",c.value=!0;const ge=ae[0].webkitRelativePath?.split("/")[0],ee={id:`importado-${ge||crypto.randomUUID()}`,nome:ge||(ae.length===1?ae[0].name.replace(/\.(json|ya?ml)$/i,""):"Regras importadas")},T=[];for(const Y of ae)try{const de=await Y.text();/\.json$/i.test(Y.name)?await o.ruleSetService.importFromJson(de,ee):await o.ruleSetService.importFromYaml(de,ee)}catch(de){T.push(`${Y.name}: ${de.message}`)}const L=[];T.length&&L.push(ae.length===1?T[0]:`${T.length} de ${ae.length} arquivo(s) não importado(s) — ${T.join("; ")}`),re&&L.push(`${re} arquivo(s) ignorado(s) por não serem .json/.yaml/.yml.`),u.value=L.join(" "),await D(),Z.target.value="",c.value=!1}function w(Z,q){r.open({target:q.currentTarget,message:`Excluir "${Z.nome}"? Esta ação não pode ser desfeita.`,onAccept:()=>x(Z)})}async function x(Z){u.value="";try{await o.ruleSetService.delete(Z.id),await D()}catch(q){u.value=q.message}}async function se(Z,q){try{const ae=q==="json"?await o.ruleSetService.exportByIdToJson(Z.id):await o.ruleSetService.exportByIdToYaml(Z.id),re=q==="json"?"application/json":"text/yaml",ge=document.createElement("a");ge.href=URL.createObjectURL(new Blob([ae],{type:re})),ge.download=`${Z.id}.${q}`,ge.click(),URL.revokeObjectURL(ge.href)}catch(ae){u.value=ae.message}}return Vn(D),(Z,q)=>e.documentation?(C(),W(Ee,{key:0},[F(X(Ce),{class:"back-link",to:"/rules"},{default:pe(()=>[F(X(fo),{size:18,"aria-hidden":"true"}),q[0]||(q[0]=Be("Conjuntos de regras",-1))]),_:1}),F(Zn,{title:"Crie e importe regras",description:"Monte checklists em YAML para avaliar os elementos do seu projeto."}),b("div",Hv,[q[6]||(q[6]=Sd(`<section class="documentation__section"><h2>Formato mínimo de um checklist</h2><p>Cada arquivo é um checklist independente. Os campos obrigatórios são <code>id</code>, <code>nome</code>, <code>parametros</code> (objeto) e <code>regras</code> (lista). YAML e JSON são aceitos.</p><pre class="documentation-code"><code>id: bebedouros
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
      mensagem: Avaliar como rampa.</code></pre><p class="documentation__note"> Se nenhuma condição bater, o resultado fica <code>nao_avaliado</code>. Um parâmetro usado dentro de <code>verificar</code> (aqui, <code>possui_chanfro</code>) também precisa estar declarado em <code>parametros</code>. </p></details></section><section class="documentation__section"><h2>Resultados possíveis</h2><ul class="documentation__list"><li><code>conforme</code> / <code>nao_conforme</code> — comparação direta, ou condição explícita.</li><li><code>manual</code> — regra do tipo <code>checklist</code>.</li><li><code>atencao</code> — resultado explícito opcional numa condição de <code>conditional</code>.</li><li><code>nao_avaliado</code> — parâmetro opcional sem valor, ou nenhuma condição satisfeita.</li><li><code>invalido</code> — parâmetro obrigatório sem valor preenchido.</li></ul></section>`,4)),b("section",Uv,[b("span",Kv,[F(X(ni),{size:24,"aria-hidden":"true"})]),b("div",null,[q[1]||(q[1]=b("h1",null,"Crie suas regras com IA",-1)),b("a",{class:"button button--outline",href:`${i.value}`,download:"SKILL.md"}," Baixar SKILL.md ",8,Gv),q[2]||(q[2]=b("p",null,"Um arquivo de texto com instruções prontas para uma IA (Claude, ChatGPT, Cursor) gerar checklists neste formato a partir do que você descrever. Baixe, cole numa conversa com a IA e peça a regra que precisa — sem aprender YAML.",-1))])]),b("section",Wv,[q[4]||(q[4]=b("h2",null,"Importação",-1)),q[5]||(q[5]=b("p",null,[Be("Escolha um ou mais arquivos YAML/JSON, ou uma pasta com vários checklists — arquivos que não forem "),b("code",null,".yaml"),Be(", "),b("code",null,".yml"),Be(" ou "),b("code",null,".json"),Be(" são ignorados automaticamente. Tudo fica armazenado somente neste navegador.")],-1)),F(X(Ce),{class:"button",to:"/rules"},{default:pe(()=>[...q[3]||(q[3]=[Be("Ir para importação",-1)])]),_:1})])])],64)):e.groupId?(C(),W(Ee,{key:1},[F(X(Ce),{class:"back-link",to:"/rules"},{default:pe(()=>[F(X(fo),{size:18,"aria-hidden":"true"}),q[7]||(q[7]=Be("Conjuntos de regras",-1))]),_:1}),l.value?(C(),W("p",Yv,"Carregando…")):f.value?(C(),W(Ee,{key:1},[F(Zn,{title:f.value.nome,description:`${f.value.ruleSets.length} checklists que compõem este conjunto.`},null,8,["title","description"]),u.value?(C(),W("p",Jv,le(u.value),1)):ye("",!0),b("section",Qv,[q[8]||(q[8]=b("h2",null,"Checklists",-1)),b("div",Xv,[(C(!0),W(Ee,null,fn(f.value.ruleSets,ae=>(C(),W("article",{key:ae.id,class:"card ruleset-card"},[b("div",null,[b("h2",null,le(ae.nome),1),b("p",null,le(ae.norma?.nome??"Conjunto personalizado"),1),b("small",null,le(v(ae))+" regras · "+le(N(ae))+" campos",1)]),e.source==="user"?(C(),W("div",Zv,[b("button",{class:"button button--outline",onClick:re=>se(ae,"yaml")},"Exportar YAML",8,eg),b("button",{class:"button button--outline",onClick:re=>se(ae,"json")},"Exportar JSON",8,ng),b("button",{class:"icon-button icon-button--danger",title:"Excluir","aria-label":"Excluir",onClick:re=>w(ae,re)},[F(X(Ar),{size:18,"aria-hidden":"true"})],8,og)])):ye("",!0)]))),128))])])],64)):(C(),Pe(yn,{key:2,title:"Conjunto não encontrado",text:"Ele pode ter sido removido."}))],64)):(C(),W(Ee,{key:2},[F(Zn,{class:"rules-page-header",title:"Conjuntos de regras",description:"Cada pasta ou importação é exibida como um único conjunto."},{action:pe(()=>[b("div",ag,[b("label",rg,[q[9]||(q[9]=Be(" Importar arquivos ",-1)),b("input",{type:"file",accept:".json,.yaml,.yml",multiple:"",disabled:c.value,onChange:R},null,40,tg)]),b("label",ig,[q[10]||(q[10]=Be(" Importar pasta ",-1)),b("input",{type:"file",accept:".json,.yaml,.yml",webkitdirectory:"",disabled:c.value,onChange:R},null,40,sg)]),F(X(Ce),{class:"rules-help-link",to:"/rules/documentation"},{default:pe(()=>[...q[11]||(q[11]=[Be("Como criar regras",-1)])]),_:1})])]),_:1}),c.value?(C(),W("p",lg,"Importando…")):ye("",!0),u.value?(C(),W("p",cg,le(u.value),1)):ye("",!0),l.value?(C(),W("p",ug,"Carregando…")):(C(),W("div",dg,[b("section",mg,[q[12]||(q[12]=b("h2",null,"Regras padrão",-1)),b("div",pg,[(C(!0),W(Ee,null,fn(d.value,ae=>(C(),Pe(X(Ce),{key:ae.id,class:"card card--interactive rules-card",to:Q(ae)},{default:pe(()=>[b("span",fg,[F(X(mo),{size:22,"aria-hidden":"true"})]),b("div",null,[b("h2",null,le(ae.nome),1),b("p",null,le(ae.ruleSets.length)+" checklists · "+le(B(ae))+" regras",1)]),F(X(Ta),{size:20,class:"chevron","aria-hidden":"true"})]),_:2},1032,["to"]))),128))])]),b("section",hg,[q[13]||(q[13]=b("h2",null,"Suas regras",-1)),m.value.length?(C(),W("div",vg,[(C(!0),W(Ee,null,fn(m.value,ae=>(C(),Pe(X(Ce),{key:ae.id,class:"card card--interactive rules-card",to:Q(ae)},{default:pe(()=>[b("span",gg,[F(X(mo),{size:22,"aria-hidden":"true"})]),b("div",null,[b("h2",null,le(ae.nome),1),b("p",null,le(ae.ruleSets.length)+" checklists",1)]),F(X(Ta),{size:20,class:"chevron","aria-hidden":"true"})]),_:2},1032,["to"]))),128))])):(C(),Pe(yn,{key:1,title:"Nenhum conjunto importado",text:"Importe arquivos ou uma pasta para começar."}))])]))],64))}},bg=[{path:"/",redirect:"/projects"},{path:"/projects",name:"projects",component:qv},{path:"/projects/:projectId",name:"project-detail",component:hv,props:!0},{path:"/projects/:projectId/status",name:"project-status",component:Sv,props:!0},{path:"/projects/:projectId/environments/:environmentId",name:"project-environment",component:Y0,props:!0},{path:"/elements/new",name:"element-new",component:ct,meta:{hideBottomNav:!0}},{path:"/elements/:elementId",name:"element-detail",component:ct,props:!0},{path:"/elements/:elementId/evaluation",name:"element-evaluation",component:Us,props:!0},{path:"/quick-evaluation",name:"quick-evaluation",component:ct,props:{quick:!0}},{path:"/quick-evaluation/result",name:"quick-evaluation-result",component:Us,props:{quick:!0}},{path:"/rules",name:"rules",component:ut},{path:"/rules/documentation",name:"rules-documentation",component:ut,props:{documentation:!0}},{path:"/rules/:source/:groupId",name:"rules-group",component:ut,props:!0},{path:"/:pathMatch(.*)*",redirect:"/projects"}],zc=Ff({history:Nf("/Extensao-26.2/"),routes:bg}),_g={__name:"App",setup(e){const n=Te(null),o=Te(!1),a=ei();return la("confirmPopup",{open:r=>n.value?.open(r)}),Vn(async()=>{await zc.isReady();const r=window.matchMedia?.("(display-mode: standalone)")?.matches||navigator.standalone===!0,i=localStorage.getItem("welcomePopupSeen");a.path==="/projects"&&!r&&!i&&(localStorage.setItem("welcomePopupSeen","true"),o.value=!0)}),(r,i)=>(C(),W(Ee,null,[F(gh,null,{default:pe(()=>[F(X(qc))]),_:1}),F(Ah,{ref_key:"confirmPopup",ref:n},null,512),o.value?(C(),Pe(Fc,{key:0,onClose:i[0]||(i[0]=s=>o.value=!1)})):ye("",!0)],64))}};async function yg(){const[e,n]=await Promise.all([Qm(),jp()]);gm(_g).provide("services",e).provide("builtInRuleSets",n).use(zc).mount("#app"),xm({immediate:!0})}yg().catch(e=>{document.querySelector("#app").innerHTML=`<main class="fatal-error"><h1>Não foi possível abrir o aplicativo</h1><p>${e.message}</p></main>`});
