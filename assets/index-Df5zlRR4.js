(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))a(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function o(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function a(r){if(r.ep)return;r.ep=!0;const i=o(r);fetch(r.href,i)}})();function It(e){const n=Object.create(null);for(const o of e.split(","))n[o]=1;return o=>o in n}const qe={},Po=[],Mn=()=>{},$s=()=>!1,tr=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),ir=e=>e.startsWith("onUpdate:"),Je=Object.assign,Ot=(e,n)=>{const o=e.indexOf(n);o>-1&&e.splice(o,1)},$c=Object.prototype.hasOwnProperty,De=(e,n)=>$c.call(e,n),_e=Array.isArray,ko=e=>Ba(e)==="[object Map]",Uo=e=>Ba(e)==="[object Set]",oi=e=>Ba(e)==="[object Date]",xe=e=>typeof e=="function",$e=e=>typeof e=="string",In=e=>typeof e=="symbol",Le=e=>e!==null&&typeof e=="object",zs=e=>(Le(e)||xe(e))&&xe(e.then)&&xe(e.catch),Hs=Object.prototype.toString,Ba=e=>Hs.call(e),zc=e=>Ba(e).slice(8,-1),Us=e=>Ba(e)==="[object Object]",Pt=e=>$e(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,ra=It(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),sr=e=>{const n=Object.create(null);return(o=>n[o]||(n[o]=e(o)))},Hc=/-\w/g,mn=sr(e=>e.replace(Hc,n=>n.slice(1).toUpperCase())),Uc=/\B([A-Z])/g,So=sr(e=>e.replace(Uc,"-$1").toLowerCase()),lr=sr(e=>e.charAt(0).toUpperCase()+e.slice(1)),Ma=sr(e=>e?`on${lr(e)}`:""),jn=(e,n)=>!Object.is(e,n),Fa=(e,...n)=>{for(let o=0;o<e.length;o++)e[o](...n)},Ks=(e,n,o,a=!1)=>{Object.defineProperty(e,n,{configurable:!0,enumerable:!1,writable:a,value:o})},cr=e=>{const n=parseFloat(e);return isNaN(n)?e:n},Kc=e=>{const n=$e(e)?Number(e):NaN;return isNaN(n)?e:n};let ai;const ur=()=>ai||(ai=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Ta(e){if(_e(e)){const n={};for(let o=0;o<e.length;o++){const a=e[o],r=$e(a)?Jc(a):Ta(a);if(r)for(const i in r)n[i]=r[i]}return n}else if($e(e)||Le(e))return e}const Gc=/;(?![^(]*\))/g,Wc=/:([^]+)/,Yc=/\/\*[^]*?\*\//g;function Jc(e){const n={};return e.replace(Yc,"").split(Gc).forEach(o=>{if(o){const a=o.split(Wc);a.length>1&&(n[a[0].trim()]=a[1].trim())}}),n}function un(e){let n="";if($e(e))n=e;else if(_e(e))for(let o=0;o<e.length;o++){const a=un(e[o]);a&&(n+=a+" ")}else if(Le(e))for(const o in e)e[o]&&(n+=o+" ");return n.trim()}function wn(e){if(!e)return null;let{class:n,style:o}=e;return n&&!$e(n)&&(e.class=un(n)),o&&(e.style=Ta(o)),e}const Qc="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Xc=It(Qc);function Gs(e){return!!e||e===""}function Zc(e,n){if(e.length!==n.length)return!1;let o=!0;for(let a=0;o&&a<e.length;a++)o=Ko(e[a],n[a]);return o}function Ko(e,n){if(e===n)return!0;let o=oi(e),a=oi(n);if(o||a)return o&&a?e.getTime()===n.getTime():!1;if(o=In(e),a=In(n),o||a)return e===n;if(o=_e(e),a=_e(n),o||a)return o&&a?Zc(e,n):!1;if(o=Le(e),a=Le(n),o||a){if(!o||!a)return!1;const r=Object.keys(e).length,i=Object.keys(n).length;if(r!==i)return!1;for(const s in e){const l=e.hasOwnProperty(s),c=n.hasOwnProperty(s);if(l&&!c||!l&&c||!Ko(e[s],n[s]))return!1}}return String(e)===String(n)}function kt(e,n){return e.findIndex(o=>Ko(o,n))}const Ws=e=>!!(e&&e.__v_isRef===!0),pe=e=>$e(e)?e:e==null?"":_e(e)||Le(e)&&(e.toString===Hs||!xe(e.toString))?Ws(e)?pe(e.value):JSON.stringify(e,Ys,2):String(e),Ys=(e,n)=>Ws(n)?Ys(e,n.value):ko(n)?{[`Map(${n.size})`]:[...n.entries()].reduce((o,[a,r],i)=>(o[Nr(a,i)+" =>"]=r,o),{})}:Uo(n)?{[`Set(${n.size})`]:[...n.values()].map(o=>Nr(o))}:In(n)?Nr(n):Le(n)&&!_e(n)&&!Us(n)?String(n):n,Nr=(e,n="")=>{var o;return In(e)?`Symbol(${(o=e.description)!=null?o:n})`:e};let Qe;class eu{constructor(n=!1){this.detached=n,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this._warnOnRun=!0,this.__v_skip=!0,!n&&Qe&&(Qe.active?(this.parent=Qe,this.index=(Qe.scopes||(Qe.scopes=[])).push(this)-1):(this._active=!1,this._warnOnRun=!1))}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let n,o;if(this.scopes){const a=this.scopes.slice();for(n=0,o=a.length;n<o;n++)a[n].pause()}for(n=0,o=this.effects.length;n<o;n++)this.effects[n].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let n,o;if(this.scopes){const r=this.scopes.slice();for(n=0,o=r.length;n<o;n++)r[n].resume()}const a=this.effects.slice();for(n=0,o=a.length;n<o;n++)a[n].resume()}}run(n){if(this._active){const o=Qe;try{return Qe=this,n()}finally{Qe=o}}}on(){++this._on===1&&(this.prevScope=Qe,Qe=this)}off(){if(this._on>0&&--this._on===0){if(Qe===this)Qe=this.prevScope;else{let n=Qe;for(;n;){if(n.prevScope===this){n.prevScope=this.prevScope;break}n=n.prevScope}}this.prevScope=void 0}}stop(n){if(this._active){this._active=!1;let o,a;for(o=0,a=this.effects.length;o<a;o++)this.effects[o].stop();for(this.effects.length=0,o=0,a=this.cleanups.length;o<a;o++)this.cleanups[o]();if(this.cleanups.length=0,this.scopes){const r=this.scopes.slice();for(o=0,a=r.length;o<a;o++)r[o].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!n){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0}}}function nu(){return Qe}let Me;const xr=new WeakSet;class Js{constructor(n){this.fn=n,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Qe&&(Qe.active?Qe.effects.push(this):this.flags&=-2)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,xr.has(this)&&(xr.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Xs(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,ri(this),Zs(this);const n=Me,o=Cn;Me=this,Cn=!0;try{return this.fn()}finally{el(this),Me=n,Cn=o,this.flags&=-3}}stop(){if(this.flags&1){for(let n=this.deps;n;n=n.nextDep)Lt(n);this.deps=this.depsTail=void 0,ri(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?xr.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){dt(this)&&this.run()}get dirty(){return dt(this)}}let Qs=0,ta,ia;function Xs(e,n=!1){if(e.flags|=8,n){e.next=ia,ia=e;return}e.next=ta,ta=e}function Vt(){Qs++}function Dt(){if(--Qs>0)return;if(ia){let n=ia;for(ia=void 0;n;){const o=n.next;n.next=void 0,n.flags&=-9,n=o}}let e;for(;ta;){let n=ta;for(ta=void 0;n;){const o=n.next;if(n.next=void 0,n.flags&=-9,n.flags&1)try{n.trigger()}catch(a){e||(e=a)}n=o}}if(e)throw e}function Zs(e){for(let n=e.deps;n;n=n.nextDep)n.version=-1,n.prevActiveLink=n.dep.activeLink,n.dep.activeLink=n}function el(e){let n,o=e.depsTail,a=o;for(;a;){const r=a.prevDep;a.version===-1?(a===o&&(o=r),Lt(a),ou(a)):n=a,a.dep.activeLink=a.prevActiveLink,a.prevActiveLink=void 0,a=r}e.deps=n,e.depsTail=o}function dt(e){for(let n=e.deps;n;n=n.nextDep)if(n.dep.version!==n.version||n.dep.computed&&(nl(n.dep.computed)||n.dep.version!==n.version))return!0;return!!e._dirty}function nl(e){if(e.flags&4&&!(e.flags&16)||(e.flags&=-17,e.globalVersion===ma)||(e.globalVersion=ma,!e.isSSR&&e.flags&128&&(!e.deps&&!e._dirty||!dt(e))))return;e.flags|=2;const n=e.dep,o=Me,a=Cn;Me=e,Cn=!0;try{Zs(e);const r=e.fn(e._value);(n.version===0||jn(r,e._value))&&(e.flags|=128,e._value=r,n.version++)}catch(r){throw n.version++,r}finally{Me=o,Cn=a,el(e),e.flags&=-3}}function Lt(e,n=!1){const{dep:o,prevSub:a,nextSub:r}=e;if(a&&(a.nextSub=r,e.prevSub=void 0),r&&(r.prevSub=a,e.nextSub=void 0),o.subs===e&&(o.subs=a,!a&&o.computed)){o.computed.flags&=-5;for(let i=o.computed.deps;i;i=i.nextDep)Lt(i,!0)}!n&&!--o.sc&&o.map&&o.map.delete(o.key)}function ou(e){const{prevDep:n,nextDep:o}=e;n&&(n.nextDep=o,e.prevDep=void 0),o&&(o.prevDep=n,e.nextDep=void 0)}let Cn=!0;const ol=[];function Xn(){ol.push(Cn),Cn=!1}function Zn(){const e=ol.pop();Cn=e===void 0?!0:e}function ri(e){const{cleanup:n}=e;if(e.cleanup=void 0,n){const o=Me;Me=void 0;try{n()}finally{Me=o}}}let ma=0;class au{constructor(n,o){this.sub=n,this.dep=o,this.version=o.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class jt{constructor(n){this.computed=n,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(n){if(!Me||!Cn||Me===this.computed)return;let o=this.activeLink;if(o===void 0||o.sub!==Me)o=this.activeLink=new au(Me,this),Me.deps?(o.prevDep=Me.depsTail,Me.depsTail.nextDep=o,Me.depsTail=o):Me.deps=Me.depsTail=o,al(o);else if(o.version===-1&&(o.version=this.version,o.nextDep)){const a=o.nextDep;a.prevDep=o.prevDep,o.prevDep&&(o.prevDep.nextDep=a),o.prevDep=Me.depsTail,o.nextDep=void 0,Me.depsTail.nextDep=o,Me.depsTail=o,Me.deps===o&&(Me.deps=a)}return o}trigger(n){this.version++,ma++,this.notify(n)}notify(n){Vt();try{for(let o=this.subs;o;o=o.prevSub)o.sub.notify()&&o.sub.dep.notify()}finally{Dt()}}}function al(e){if(e.dep.sc++,e.sub.flags&4){const n=e.dep.computed;if(n&&!e.dep.subs){n.flags|=20;for(let a=n.deps;a;a=a.nextDep)al(a)}const o=e.dep.subs;o!==e&&(e.prevSub=o,o&&(o.nextSub=e)),e.dep.subs=e}}const mt=new WeakMap,xo=Symbol(""),pt=Symbol(""),pa=Symbol("");function nn(e,n,o){if(Cn&&Me){let a=mt.get(e);a||mt.set(e,a=new Map);let r=a.get(o);r||(a.set(o,r=new jt),r.map=a,r.key=o),r.track()}}function Yn(e,n,o,a,r,i){const s=mt.get(e);if(!s){ma++;return}const l=c=>{c&&c.trigger()};if(Vt(),n==="clear")s.forEach(l);else{const c=_e(e),u=c&&Pt(o);if(c&&o==="length"){const d=Number(a);s.forEach((m,f)=>{(f==="length"||f===pa||!In(f)&&f>=d)&&l(m)})}else switch((o!==void 0||s.has(void 0))&&l(s.get(o)),u&&l(s.get(pa)),n){case"add":c?u&&l(s.get("length")):(l(s.get(xo)),ko(e)&&l(s.get(pt)));break;case"delete":c||(l(s.get(xo)),ko(e)&&l(s.get(pt)));break;case"set":ko(e)&&l(s.get(xo));break}}Dt()}function wo(e){const n=Pe(e);return n===e?n:(nn(n,"iterate",pa),xn(e)?n:n.map(On))}function dr(e){return nn(e=Pe(e),"iterate",pa),e}function Dn(e,n){return eo(e)?qo(Bo(e)?On(n):n):On(n)}const ru={__proto__:null,[Symbol.iterator](){return Br(this,Symbol.iterator,e=>Dn(this,e))},concat(...e){return wo(this).concat(...e.map(n=>_e(n)?wo(n):n))},entries(){return Br(this,"entries",e=>(e[1]=Dn(this,e[1]),e))},every(e,n){return Hn(this,"every",e,n,void 0,arguments)},filter(e,n){return Hn(this,"filter",e,n,o=>o.map(a=>Dn(this,a)),arguments)},find(e,n){return Hn(this,"find",e,n,o=>Dn(this,o),arguments)},findIndex(e,n){return Hn(this,"findIndex",e,n,void 0,arguments)},findLast(e,n){return Hn(this,"findLast",e,n,o=>Dn(this,o),arguments)},findLastIndex(e,n){return Hn(this,"findLastIndex",e,n,void 0,arguments)},forEach(e,n){return Hn(this,"forEach",e,n,void 0,arguments)},includes(...e){return Tr(this,"includes",e)},indexOf(...e){return Tr(this,"indexOf",e)},join(e){return wo(this).join(e)},lastIndexOf(...e){return Tr(this,"lastIndexOf",e)},map(e,n){return Hn(this,"map",e,n,void 0,arguments)},pop(){return Yo(this,"pop")},push(...e){return Yo(this,"push",e)},reduce(e,...n){return ti(this,"reduce",e,n)},reduceRight(e,...n){return ti(this,"reduceRight",e,n)},shift(){return Yo(this,"shift")},some(e,n){return Hn(this,"some",e,n,void 0,arguments)},splice(...e){return Yo(this,"splice",e)},toReversed(){return wo(this).toReversed()},toSorted(e){return wo(this).toSorted(e)},toSpliced(...e){return wo(this).toSpliced(...e)},unshift(...e){return Yo(this,"unshift",e)},values(){return Br(this,"values",e=>Dn(this,e))}};function Br(e,n,o){const a=dr(e),r=a[n]();return a!==e&&!xn(e)&&(r._next=r.next,r.next=()=>{const i=r._next();return i.done||(i.value=o(i.value)),i}),r}const tu=Array.prototype;function Hn(e,n,o,a,r,i){const s=dr(e),l=s!==e&&!xn(e),c=s[n];if(c!==tu[n]){const m=c.apply(e,i);return l?On(m):m}let u=o;s!==e&&(l?u=function(m,f){return o.call(this,Dn(e,m),f,e)}:o.length>2&&(u=function(m,f){return o.call(this,m,f,e)}));const d=c.call(s,u,a);return l&&r?r(d):d}function ti(e,n,o,a){const r=dr(e),i=r!==e&&!xn(e);let s=o,l=!1;r!==e&&(i?(l=a.length===0,s=function(u,d,m){return l&&(l=!1,u=Dn(e,u)),o.call(this,u,Dn(e,d),m,e)}):o.length>3&&(s=function(u,d,m){return o.call(this,u,d,m,e)}));const c=r[n](s,...a);return l?Dn(e,c):c}function Tr(e,n,o){const a=Pe(e);nn(a,"iterate",pa);const r=a[n](...o);return(r===-1||r===!1)&&Ft(o[0])?(o[0]=Pe(o[0]),a[n](...o)):r}function Yo(e,n,o=[]){Xn(),Vt();const a=Pe(e)[n].apply(e,o);return Dt(),Zn(),a}const iu=It("__proto__,__v_isRef,__isVue"),rl=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(In));function su(e){In(e)||(e=String(e));const n=Pe(this);return nn(n,"has",e),n.hasOwnProperty(e)}class tl{constructor(n=!1,o=!1){this._isReadonly=n,this._isShallow=o}get(n,o,a){if(o==="__v_skip")return n.__v_skip;const r=this._isReadonly,i=this._isShallow;if(o==="__v_isReactive")return!r;if(o==="__v_isReadonly")return r;if(o==="__v_isShallow")return i;if(o==="__v_raw")return a===(r?i?gu:cl:i?ll:sl).get(n)||Object.getPrototypeOf(n)===Object.getPrototypeOf(a)?n:void 0;const s=_e(n);if(!r){let c;if(s&&(c=ru[o]))return c;if(o==="hasOwnProperty")return su}const l=Reflect.get(n,o,rn(n)?n:a);if((In(o)?rl.has(o):iu(o))||(r||nn(n,"get",o),i))return l;if(rn(l)){const c=s&&Pt(o)?l:l.value;return r&&Le(c)?ht(c):c}return Le(l)?r?ht(l):Ra(l):l}}class il extends tl{constructor(n=!1){super(!1,n)}set(n,o,a,r){let i=n[o];const s=_e(n)&&Pt(o);if(!this._isShallow){const u=eo(i);if(!xn(a)&&!eo(a)&&(i=Pe(i),a=Pe(a)),!s&&rn(i)&&!rn(a))return u||(i.value=a),!0}const l=s?Number(o)<n.length:De(n,o),c=Reflect.set(n,o,a,rn(n)?n:r);return n===Pe(r)&&c&&(l?jn(a,i)&&Yn(n,"set",o,a):Yn(n,"add",o,a)),c}deleteProperty(n,o){const a=De(n,o);n[o];const r=Reflect.deleteProperty(n,o);return r&&a&&Yn(n,"delete",o,void 0),r}has(n,o){const a=Reflect.has(n,o);return(!In(o)||!rl.has(o))&&nn(n,"has",o),a}ownKeys(n){return nn(n,"iterate",_e(n)?"length":xo),Reflect.ownKeys(n)}}class lu extends tl{constructor(n=!1){super(!0,n)}set(n,o){return!0}deleteProperty(n,o){return!0}}const cu=new il,uu=new lu,du=new il(!0);const ft=e=>e,Pa=e=>Reflect.getPrototypeOf(e);function mu(e,n,o){return function(...a){const r=this.__v_raw,i=Pe(r),s=ko(i),l=e==="entries"||e===Symbol.iterator&&s,c=e==="keys"&&s,u=r[e](...a),d=o?ft:n?qo:On;return!n&&nn(i,"iterate",c?pt:xo),Je(Object.create(u),{next(){const{value:m,done:f}=u.next();return f?{value:m,done:f}:{value:l?[d(m[0]),d(m[1])]:d(m),done:f}}})}}function ka(e){return function(...n){return e==="delete"?!1:e==="clear"?void 0:this}}function pu(e,n){const o={get(r){const i=this.__v_raw,s=Pe(i),l=Pe(r);e||(jn(r,l)&&nn(s,"get",r),nn(s,"get",l));const{has:c}=Pa(s),u=n?ft:e?qo:On;if(c.call(s,r))return u(i.get(r));if(c.call(s,l))return u(i.get(l));i!==s&&i.get(r)},get size(){const r=this.__v_raw;return!e&&nn(Pe(r),"iterate",xo),r.size},has(r){const i=this.__v_raw,s=Pe(i),l=Pe(r);return e||(jn(r,l)&&nn(s,"has",r),nn(s,"has",l)),r===l?i.has(r):i.has(r)||i.has(l)},forEach(r,i){const s=this,l=s.__v_raw,c=Pe(l),u=n?ft:e?qo:On;return!e&&nn(c,"iterate",xo),l.forEach((d,m)=>r.call(i,u(d),u(m),s))}};return Je(o,e?{add:ka("add"),set:ka("set"),delete:ka("delete"),clear:ka("clear")}:{add(r){const i=Pe(this),s=Pa(i),l=Pe(r),c=!n&&!xn(r)&&!eo(r)?l:r;return s.has.call(i,c)||jn(r,c)&&s.has.call(i,r)||jn(l,c)&&s.has.call(i,l)||(i.add(c),Yn(i,"add",c,c)),this},set(r,i){!n&&!xn(i)&&!eo(i)&&(i=Pe(i));const s=Pe(this),{has:l,get:c}=Pa(s);let u=l.call(s,r);u||(r=Pe(r),u=l.call(s,r));const d=c.call(s,r);return s.set(r,i),u?jn(i,d)&&Yn(s,"set",r,i):Yn(s,"add",r,i),this},delete(r){const i=Pe(this),{has:s,get:l}=Pa(i);let c=s.call(i,r);c||(r=Pe(r),c=s.call(i,r)),l&&l.call(i,r);const u=i.delete(r);return c&&Yn(i,"delete",r,void 0),u},clear(){const r=Pe(this),i=r.size!==0,s=r.clear();return i&&Yn(r,"clear",void 0,void 0),s}}),["keys","values","entries",Symbol.iterator].forEach(r=>{o[r]=mu(r,e,n)}),o}function qt(e,n){const o=pu(e,n);return(a,r,i)=>r==="__v_isReactive"?!e:r==="__v_isReadonly"?e:r==="__v_raw"?a:Reflect.get(De(o,r)&&r in a?o:a,r,i)}const fu={get:qt(!1,!1)},hu={get:qt(!1,!0)},vu={get:qt(!0,!1)};const sl=new WeakMap,ll=new WeakMap,cl=new WeakMap,gu=new WeakMap;function bu(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Ra(e){return eo(e)?e:Mt(e,!1,cu,fu,sl)}function ul(e){return Mt(e,!1,du,hu,ll)}function ht(e){return Mt(e,!0,uu,vu,cl)}function Mt(e,n,o,a,r){if(!Le(e)||e.__v_raw&&!(n&&e.__v_isReactive)||e.__v_skip||!Object.isExtensible(e))return e;const i=r.get(e);if(i)return i;const s=bu(zc(e));if(s===0)return e;const l=new Proxy(e,s===2?a:o);return r.set(e,l),l}function Bo(e){return eo(e)?Bo(e.__v_raw):!!(e&&e.__v_isReactive)}function eo(e){return!!(e&&e.__v_isReadonly)}function xn(e){return!!(e&&e.__v_isShallow)}function Ft(e){return e?!!e.__v_raw:!1}function Pe(e){const n=e&&e.__v_raw;return n?Pe(n):e}function _u(e){return!De(e,"__v_skip")&&Object.isExtensible(e)&&Ks(e,"__v_skip",!0),e}const On=e=>Le(e)?Ra(e):e,qo=e=>Le(e)?ht(e):e;function rn(e){return e?e.__v_isRef===!0:!1}function Se(e){return dl(e,!1)}function yu(e){return dl(e,!0)}function dl(e,n){return rn(e)?e:new Au(e,n)}class Au{constructor(n,o){this.dep=new jt,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=o?n:Pe(n),this._value=o?n:On(n),this.__v_isShallow=o}get value(){return this.dep.track(),this._value}set value(n){const o=this._rawValue,a=this.__v_isShallow||xn(n)||eo(n);n=a?n:Pe(n),jn(n,o)&&(this._rawValue=n,this._value=a?n:On(n),this.dep.trigger())}}function ie(e){return rn(e)?e.value:e}const Nu={get:(e,n,o)=>n==="__v_raw"?e:ie(Reflect.get(e,n,o)),set:(e,n,o,a)=>{const r=e[n];return rn(r)&&!rn(o)?(r.value=o,!0):Reflect.set(e,n,o,a)}};function ml(e){return Bo(e)?e:new Proxy(e,Nu)}class xu{constructor(n,o,a){this.fn=n,this.setter=o,this._value=void 0,this.dep=new jt(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=ma-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!o,this.isSSR=a}notify(){if(this.flags|=16,!(this.flags&8)&&Me!==this)return Xs(this,!0),!0}get value(){const n=this.dep.track();return nl(this),n&&(n.version=this.dep.version),this._value}set value(n){this.setter&&this.setter(n)}}function Bu(e,n,o=!1){let a,r;return xe(e)?a=e:(a=e.get,r=e.set),new xu(a,r,o)}const Va={},Ua=new WeakMap;let bo;function Tu(e,n=!1,o=bo){if(o){let a=Ua.get(o);a||Ua.set(o,a=[]),a.push(e)}}function Ru(e,n,o=qe){const{immediate:a,deep:r,once:i,scheduler:s,augmentJob:l,call:c}=o,u=D=>r?D:xn(D)||r===!1||r===0?Jn(D,1):Jn(D);let d,m,f,v,B=!1,w=!1;if(rn(e)?(m=()=>e.value,B=xn(e)):Bo(e)?(m=()=>u(e),B=!0):_e(e)?(w=!0,B=e.some(D=>Bo(D)||xn(D)),m=()=>e.map(D=>{if(rn(D))return D.value;if(Bo(D))return u(D);if(xe(D))return c?c(D,2):D()})):xe(e)?n?m=c?()=>c(e,2):e:m=()=>{if(f){Xn();try{f()}finally{Zn()}}const D=bo;bo=d;try{return c?c(e,3,[v]):e(v)}finally{bo=D}}:m=Mn,n&&r){const D=m,de=r===!0?1/0:r;m=()=>Jn(D(),de)}const x=nu(),E=()=>{d.stop(),x&&x.active&&Ot(x.effects,d)};if(i&&n){const D=n;n=(...de)=>{const re=D(...de);return E(),re}}let N=w?new Array(e.length).fill(Va):Va;const q=D=>{if(!(!(d.flags&1)||!d.dirty&&!D))if(n){const de=d.run();if(D||r||B||(w?de.some((re,z)=>jn(re,N[z])):jn(de,N))){f&&f();const re=bo;bo=d;try{const z=[de,N===Va?void 0:w&&N[0]===Va?[]:N,v];N=de,c?c(n,3,z):n(...z)}finally{bo=re}}}else d.run()};return l&&l(q),d=new Js(m),d.scheduler=s?()=>s(q,!1):q,v=D=>Tu(D,!1,d),f=d.onStop=()=>{const D=Ua.get(d);if(D){if(c)c(D,4);else for(const de of D)de();Ua.delete(d)}},n?a?q(!0):N=d.run():s?s(q.bind(null,!0),!0):d.run(),E.pause=d.pause.bind(d),E.resume=d.resume.bind(d),E.stop=E,E}function Jn(e,n=1/0,o){if(n<=0||!Le(e)||e.__v_skip||(o=o||new Map,(o.get(e)||0)>=n))return e;if(o.set(e,n),n--,rn(e))Jn(e.value,n,o);else if(_e(e))for(let a=0;a<e.length;a++)Jn(e[a],n,o);else if(Uo(e)||ko(e))e.forEach(a=>{Jn(a,n,o)});else if(Us(e)){for(const a in e)Jn(e[a],n,o);for(const a of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,a)&&Jn(e[a],n,o)}return e}function Sa(e,n,o,a){try{return a?e(...a):e()}catch(r){mr(r,n,o)}}function Tn(e,n,o,a){if(xe(e)){const r=Sa(e,n,o,a);return r&&zs(r)&&r.catch(i=>{mr(i,n,o)}),r}if(_e(e)){const r=[];for(let i=0;i<e.length;i++)r.push(Tn(e[i],n,o,a));return r}}function mr(e,n,o,a=!0){const r=n?n.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:s}=n&&n.appContext.config||qe;if(n){let l=n.parent;const c=n.proxy,u=`https://vuejs.org/error-reference/#runtime-${o}`;for(;l;){const d=l.ec;if(d){for(let m=0;m<d.length;m++)if(d[m](e,c,u)===!1)return}l=l.parent}if(i){Xn(),Sa(i,null,10,[e,c,u]),Zn();return}}Su(e,o,r,a,s)}function Su(e,n,o,a=!0,r=!1){if(r)throw e;console.error(e)}const dn=[];let Vn=-1;const Vo=[];let io=null,Co=0;const pl=Promise.resolve();let Ka=null;function Mo(e){const n=Ka||pl;return e?n.then(this?e.bind(this):e):n}function wu(e){let n=Vn+1,o=dn.length;for(;n<o;){const a=n+o>>>1,r=dn[a],i=fa(r);i<e||i===e&&r.flags&2?n=a+1:o=a}return n}function $t(e){if(!(e.flags&1)){const n=fa(e),o=dn[dn.length-1];!o||!(e.flags&2)&&n>=fa(o)?dn.push(e):dn.splice(wu(n),0,e),e.flags|=1,fl()}}function fl(){Ka||(Ka=pl.then(vl))}function Eu(e){if(!_e(e))io&&e.id===-1?io.splice(Co+1,0,e):e.flags&1||(Vo.push(e),e.flags|=1);else for(let n=0;n<e.length;n++)Vo.push(e[n]);fl()}function ii(e,n,o=Vn+1){for(;o<dn.length;o++){const a=dn[o];if(a&&a.flags&2){if(e&&a.id!==e.uid)continue;dn.splice(o,1),o--,a.flags&4&&(a.flags&=-2),a(),a.flags&4||(a.flags&=-2)}}}function hl(e){if(Vo.length){const n=[...new Set(Vo)].sort((o,a)=>fa(o)-fa(a));if(Vo.length=0,io){for(let o=0;o<n.length;o++)io.push(n[o]);return}for(io=n,Co=0;Co<io.length;Co++){const o=io[Co];o.flags&4&&(o.flags&=-2),o.flags&8||o(),o.flags&=-2}io=null,Co=0}}const fa=e=>e.id==null?e.flags&2?-1:1/0:e.id;function vl(e){try{for(Vn=0;Vn<dn.length;Vn++){const n=dn[Vn];n&&!(n.flags&8)&&(n.flags&4&&(n.flags&=-2),Sa(n,n.i,n.i?15:14),n.flags&4||(n.flags&=-2))}}finally{for(;Vn<dn.length;Vn++){const n=dn[Vn];n&&(n.flags&=-2)}Vn=-1,dn.length=0,hl(),Ka=null,(dn.length||Vo.length)&&vl()}}let Xe=null,gl=null;function Ga(e){const n=Xe;return Xe=e,gl=e&&e.type.__scopeId||null,n}function Ae(e,n=Xe,o){if(!n||e._n)return e;const a=(...r)=>{a._d&&Qa(-1);const i=Ga(n),s=Qn.length;let l;try{l=e(...r)}finally{for(let c=Qn.length;c>s;c--)Wt();Ga(i),a._d&&Qa(1)}return l};return a._n=!0,a._c=!0,a._d=!0,a}function An(e,n){if(Xe===null)return e;const o=br(Xe),a=e.dirs||(e.dirs=[]);for(let r=0;r<n.length;r++){let[i,s,l,c=qe]=n[r];i&&(xe(i)&&(i={mounted:i,updated:i}),i.deep&&Jn(s),a.push({dir:i,instance:o,value:s,oldValue:void 0,arg:l,modifiers:c}))}return e}function po(e,n,o,a){const r=e.dirs,i=n&&n.dirs;for(let s=0;s<r.length;s++){const l=r[s];i&&(l.oldValue=i[s].value);let c=l.dir[a];c&&(Xn(),Tn(c,o,8,[e.el,l,e,n]),Zn())}}function sa(e,n){if(an){let o=an.provides;const a=an.parent&&an.parent.provides;a===o&&(o=an.provides=Object.create(a)),o[e]=n}}function He(e,n,o=!1){const a=Xl();if(a||Lo){let r=Lo?Lo._context.provides:a?a.parent==null||a.ce?a.vnode.appContext&&a.vnode.appContext.provides:a.parent.provides:void 0;if(r&&e in r)return r[e];if(arguments.length>1)return o&&xe(n)?n.call(a&&a.proxy):n}}const Cu=Symbol.for("v-scx"),Iu=()=>He(Cu);function To(e,n,o){return bl(e,n,o)}function bl(e,n,o=qe){const{immediate:a,deep:r,flush:i,once:s}=o,l=Je({},o),c=n&&a||!n&&i!=="post";let u;if(_a){if(i==="sync"){const v=Iu();u=v.__watcherHandles||(v.__watcherHandles=[])}else if(!c){const v=()=>{};return v.stop=Mn,v.resume=Mn,v.pause=Mn,v}}const d=an;l.call=(v,B,w)=>Tn(v,d,B,w);let m=!1;i==="post"?l.scheduler=v=>{sn(v,d&&d.suspense)}:i!=="sync"&&(m=!0,l.scheduler=(v,B)=>{B?v():$t(v)}),l.augmentJob=v=>{n&&(v.flags|=4),m&&(v.flags|=2,d&&(v.id=d.uid,v.i=d))};const f=Ru(e,n,l);return _a&&(u?u.push(f):c&&f()),f}function Ou(e,n,o){const a=this.proxy,r=$e(e)?e.includes(".")?_l(a,e):()=>a[e]:e.bind(a,a);let i;xe(n)?i=n:(i=n.handler,o=n);const s=wa(this),l=bl(r,i.bind(a),o);return s(),l}function _l(e,n){const o=n.split(".");return()=>{let a=e;for(let r=0;r<o.length&&a;r++)a=a[o[r]];return a}}const to=new WeakMap,yl=Symbol("_vte"),pr=e=>e.__isTeleport,_o=e=>e&&(e.disabled||e.disabled===""),Pu=e=>e&&(e.defer||e.defer===""),si=e=>typeof SVGElement<"u"&&e instanceof SVGElement,li=e=>typeof MathMLElement=="function"&&e instanceof MathMLElement,vt=(e,n)=>{const o=e&&e.to;return $e(o)?n?n(o):null:o},ku={name:"Teleport",__isTeleport:!0,process(e,n,o,a,r,i,s,l,c,u){const{mc:d,pc:m,pbc:f,o:{insert:v,querySelector:B,createText:w,createComment:x,parentNode:E}}=u,N=_o(n.props);let{dynamicChildren:q}=n;const D=(z,te,ae)=>{z.shapeFlag&16&&d(z.children,te,ae,r,i,s,l,c)},de=(z=n)=>{const te=_o(z.props),ae=z.target=vt(z.props,B),ge=gt(ae,z,w,v);ae&&(s!=="svg"&&si(ae)?s="svg":s!=="mathml"&&li(ae)&&(s="mathml"),r&&r.isCE&&(r.ce._teleportTargets||(r.ce._teleportTargets=new Set)).add(ae),te||(D(z,ae,ge),na(z,!1)))},re=z=>{const te=()=>{if(to.get(z)===te){if(to.delete(z),_o(z.props)){const ae=E(z.el)||o;D(z,ae,z.anchor),na(z,!0)}de(z)}};to.set(z,te),sn(te,i)};if(e==null){const z=n.el=w(""),te=n.anchor=w("");if(v(z,o,a),v(te,o,a),Pu(n.props)||i&&i.pendingBranch){re(n);return}N&&(D(n,o,te),na(n,!0)),de()}else{n.el=e.el;const z=n.anchor=e.anchor,te=to.get(e);if(te){te.flags|=8,to.delete(e),re(n);return}n.targetStart=e.targetStart;const ae=n.target=e.target,ge=n.targetAnchor=e.targetAnchor,X=_o(e.props),T=X?o:ae,F=X?z:ge;if(s==="svg"||si(ae)?s="svg":(s==="mathml"||li(ae))&&(s="mathml"),q?(f(e.dynamicChildren,q,T,r,i,s,l),Gt(e,n,!0)):c||m(e,n,T,F,r,i,s,l,!1),N)X?n.props&&e.props&&n.props.to!==e.props.to&&(n.props.to=e.props.to):Da(n,o,z,u,1);else if((n.props&&n.props.to)!==(e.props&&e.props.to)){const Y=vt(n.props,B);Y&&(n.target=Y,Da(n,Y,null,u,0))}else X&&Da(n,ae,ge,u,1);na(n,N)}},remove(e,n,o,{um:a,o:{remove:r}},i){const{shapeFlag:s,children:l,anchor:c,targetStart:u,targetAnchor:d,target:m,props:f}=e,v=_o(f),B=i||!v,w=to.get(e);if(w&&(w.flags|=8,to.delete(e)),m&&(r(u),r(d)),i&&r(c),!w&&(v||m)&&s&16)for(let x=0;x<l.length;x++){const E=l[x];a(E,n,o,B,!!E.dynamicChildren)}},move:Da,hydrate:Vu};function Da(e,n,o,{o:{insert:a},m:r},i=2){i===0&&a(e.targetAnchor,n,o);const{el:s,anchor:l,shapeFlag:c,children:u,props:d}=e,m=i===2;if(m&&a(s,n,o),!to.has(e)&&(!m||_o(d))&&c&16)for(let f=0;f<u.length;f++)r(u[f],n,o,2);m&&a(l,n,o)}function Vu(e,n,o,a,r,i,{o:{nextSibling:s,parentNode:l,querySelector:c,insert:u,createText:d}},m){function f(x,E){let N=E;for(;N;){if(N&&N.nodeType===8){if(N.data==="teleport start anchor")n.targetStart=N;else if(N.data==="teleport anchor"){n.targetAnchor=N,x._lpa=n.targetAnchor&&s(n.targetAnchor);break}}N=s(N)}}function v(x,E){E.anchor=m(s(x),E,l(x),o,a,r,i)}const B=n.target=vt(n.props,c),w=_o(n.props);if(B){const x=B._lpa||B.firstChild;n.shapeFlag&16&&(w?(v(e,n),f(B,x),n.targetAnchor||gt(B,n,d,u,l(e)===B?e:null)):(n.anchor=s(e),f(B,x),n.targetAnchor||gt(B,n,d,u),m(x&&s(x),n,B,o,a,r,i))),na(n,w)}else w&&n.shapeFlag&16&&(v(e,n),n.targetStart=e,n.targetAnchor=s(e));return n.anchor&&s(n.anchor)}const Al=ku;function na(e,n){const o=e.ctx;if(o&&o.ut){let a,r;for(n?(a=e.el,r=e.anchor):(a=e.targetStart,r=e.targetAnchor);a&&a!==r;)a.nodeType===1&&a.setAttribute("data-v-owner",o.uid),a=a.nextSibling;o.ut()}}function gt(e,n,o,a,r=null){const i=n.targetStart=o(""),s=n.targetAnchor=o("");return i[yl]=s,e&&(a(i,e,r),a(s,e,r)),s}const yn=Symbol("_leaveCb"),Jo=Symbol("_enterCb");function Du(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return zn(()=>{e.isMounted=!0}),zt(()=>{e.isUnmounting=!0}),e}const _n=[Function,Array],Nl={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:_n,onEnter:_n,onAfterEnter:_n,onEnterCancelled:_n,onBeforeLeave:_n,onLeave:_n,onAfterLeave:_n,onLeaveCancelled:_n,onBeforeAppear:_n,onAppear:_n,onAfterAppear:_n,onAppearCancelled:_n},xl=e=>{const n=e.subTree;return n.component?xl(n.component):n},Lu={name:"BaseTransition",props:Nl,setup(e,{slots:n}){const o=Xl(),a=Du();return()=>{const r=n.default&&Rl(n.default(),!0),i=r&&r.length?Bl(r):o.subTree?Te():void 0;if(!i)return;const s=Pe(e),{mode:l}=s;if(a.isLeaving)return Rr(i);const c=Wa(i);if(!c)return Rr(i);let u=bt(c,s,a,o,m=>u=m);c.type!==on&&ha(c,u);let d=o.subTree&&Wa(o.subTree);if(d&&d.type!==on&&!yo(d,c)&&xl(o).type!==on){let m=bt(d,s,a,o);if(ha(d,m),l==="out-in"&&c.type!==on)return a.isLeaving=!0,m.afterLeave=()=>{a.isLeaving=!1,o.job.flags&8||o.update(),delete m.afterLeave,d=void 0},Rr(i);l==="in-out"&&c.type!==on?m.delayLeave=(f,v,B)=>{const w=Tl(a,d);w[String(d.key)]=d,f[yn]=()=>{v(),f[yn]=void 0,delete u.delayedLeave,d=void 0},u.delayedLeave=()=>{B(),delete u.delayedLeave,d=void 0}}:d=void 0}else d&&(d=void 0);return i}}};function Bl(e){let n=e[0];if(e.length>1){for(const o of e)if(o.type!==on){n=o;break}}return n}const ju=Lu;function Tl(e,n){const{leavingVNodes:o}=e;let a=o.get(n.type);return a||(a=Object.create(null),o.set(n.type,a)),a}function bt(e,n,o,a,r){const{appear:i,mode:s,persisted:l=!1,onBeforeEnter:c,onEnter:u,onAfterEnter:d,onEnterCancelled:m,onBeforeLeave:f,onLeave:v,onAfterLeave:B,onLeaveCancelled:w,onBeforeAppear:x,onAppear:E,onAfterAppear:N,onAppearCancelled:q}=n,D=String(e.key),de=Tl(o,e),re=(ae,ge)=>{ae&&Tn(ae,a,9,ge)},z=(ae,ge)=>{const X=ge[1];re(ae,ge),_e(ae)?ae.every(T=>T.length<=1)&&X():ae.length<=1&&X()},te={mode:s,persisted:l,beforeEnter(ae){let ge=c;if(!o.isMounted)if(i)ge=x||c;else return;ae[yn]&&ae[yn](!0);const X=de[D];X&&yo(e,X)&&X.el[yn]&&X.el[yn](),re(ge,[ae])},enter(ae){if(de[D]===e)return;let ge=u,X=d,T=m;if(!o.isMounted)if(i)ge=E||u,X=N||d,T=q||m;else return;let F=!1;ae[Jo]=ue=>{F||(F=!0,ue?re(T,[ae]):re(X,[ae]),te.delayedLeave&&te.delayedLeave(),ae[Jo]=void 0)};const Y=ae[Jo].bind(null,!1);ge?z(ge,[ae,Y]):Y()},leave(ae,ge){const X=String(e.key);if(ae[Jo]&&ae[Jo](!0),o.isUnmounting)return ge();re(f,[ae]);let T=!1;ae[yn]=Y=>{T||(T=!0,ge(),Y?re(w,[ae]):re(B,[ae]),ae[yn]=void 0,de[X]===e&&delete de[X])};const F=ae[yn].bind(null,!1);de[X]=e,v?z(v,[ae,F]):F()},clone(ae){const ge=bt(ae,n,o,a,r);return r&&r(ge),ge}};return te}function Rr(e){if(fr(e))return e=mo(e),e.children=null,e}function Wa(e){if(!fr(e))return pr(e.type)&&e.children?Bl(e.children):e;if(e.component)return e.component.subTree;const{shapeFlag:n,children:o}=e;if(o){if(n&16)return o[0];if(n&32&&xe(o.default))return o.default()}}function ha(e,n){if(e.shapeFlag&6&&e.component){e.transition=n;const o=e.component.subTree;ha(pr(o.type)&&Wa(o)||o,n)}else e.shapeFlag&128?(e.ssContent.transition=n.clone(e.ssContent),e.ssFallback.transition=n.clone(e.ssFallback)):e.transition=n}function Rl(e,n=!1,o){let a=[],r=0;for(let i=0;i<e.length;i++){let s=e[i];const l=o==null?s.key:String(o)+String(s.key!=null?s.key:i);s.type===we?(s.patchFlag&128&&r++,a=a.concat(Rl(s.children,n,l))):(n||s.type!==on)&&a.push(l!=null?mo(s,{key:l}):s)}if(r>1)for(let i=0;i<a.length;i++)a[i].patchFlag=-2;return a}function Sl(e,n){return xe(e)?Je({name:e.name},n,{setup:e}):e}function wl(e){e.ids=[e.ids[0]+e.ids[2]+++"-",0,0]}function ci(e,n){let o;return!!((o=Object.getOwnPropertyDescriptor(e,n))&&!o.configurable)}const Ya=new WeakMap;function la(e,n,o,a,r=!1){if(_e(e)){e.forEach((w,x)=>la(w,n&&(_e(n)?n[x]:n),o,a,r));return}if(Do(a)&&!r){a.shapeFlag&512&&a.type.__asyncResolved&&a.component.subTree.component&&la(e,n,o,a.component.subTree);return}const i=a.shapeFlag&4?br(a.component):a.el,s=r?null:i,{i:l,r:c}=e,u=n&&n.r,d=l.refs===qe?l.refs={}:l.refs,m=l.setupState,f=Pe(m),v=m===qe?$s:w=>ci(d,w)?!1:De(f,w),B=(w,x)=>!(x&&ci(d,x));if(u!=null&&u!==c){if(ui(n),$e(u))d[u]=null,v(u)&&(m[u]=null);else if(rn(u)){const w=n;B(u,w.k)&&(u.value=null),w.k&&(d[w.k]=null)}}if(xe(c))Sa(c,l,12,[s,d]);else{const w=$e(c),x=rn(c);if(w||x){const E=()=>{if(e.f){const N=w?v(c)?m[c]:d[c]:B()||!e.k?c.value:d[e.k];if(r)_e(N)&&Ot(N,i);else if(_e(N))N.includes(i)||N.push(i);else if(w)d[c]=[i],v(c)&&(m[c]=d[c]);else{const q=[i];B(c,e.k)&&(c.value=q),e.k&&(d[e.k]=q)}}else w?(d[c]=s,v(c)&&(m[c]=s)):x&&(B(c,e.k)&&(c.value=s),e.k&&(d[e.k]=s))};if(s){const N=()=>{E(),Ya.delete(e)};N.id=-1,Ya.set(e,N),sn(N,o)}else ui(e),E()}}}function ui(e){const n=Ya.get(e);n&&(n.flags|=8,Ya.delete(e))}ur().requestIdleCallback;ur().cancelIdleCallback;const Do=e=>!!e.type.__asyncLoader,fr=e=>e.type.__isKeepAlive;function qu(e,n){El(e,"a",n)}function Mu(e,n){El(e,"da",n)}function El(e,n,o=an){const a=e.__wdc||(e.__wdc=()=>{let r=o;for(;r;){if(r.isDeactivated)return;r=r.parent}return e()});if(hr(n,a,o),o){let r=o.parent;for(;r&&r.parent;)fr(r.parent.vnode)&&Fu(a,n,o,r),r=r.parent}}function Fu(e,n,o,a){const r=hr(n,e,a,!0);Ht(()=>{Ot(a[n],r)},o)}function hr(e,n,o=an,a=!1){if(o){const r=o[e]||(o[e]=[]),i=n.__weh||(n.__weh=(...s)=>{Xn();const l=wa(o),c=Tn(n,o,e,s);return l(),Zn(),c});return a?r.unshift(i):r.push(i),i}}const no=e=>(n,o=an)=>{(!_a||e==="sp")&&hr(e,(...a)=>n(...a),o)},$u=no("bm"),zn=no("m"),zu=no("bu"),Hu=no("u"),zt=no("bum"),Ht=no("um"),Uu=no("sp"),Ku=no("rtg"),Gu=no("rtc");function Wu(e,n=an){hr("ec",e,n)}const Cl="components",Yu="directives",Il=Symbol.for("v-ndc");function Sr(e){return $e(e)?Ol(Cl,e,!1)||e:e||Il}function Ju(e){return Ol(Yu,e)}function Ol(e,n,o=!0,a=!1){const r=Xe||an;if(r){const i=r.type;if(e===Cl){const l=Pd(i,!1);if(l&&(l===n||l===mn(n)||l===lr(mn(n))))return i}const s=di(r[e]||i[e],n)||di(r.appContext[e],n);return!s&&a?i:s}}function di(e,n){return e&&(e[n]||e[mn(n)]||e[lr(mn(n))])}function Bn(e,n,o,a){let r;const i=o,s=_e(e);if(s||$e(e)){const l=s&&Bo(e);let c=!1,u=!1;l&&(c=!xn(e),u=eo(e),e=dr(e)),r=new Array(e.length);for(let d=0,m=e.length;d<m;d++)r[d]=n(c?u?qo(On(e[d])):On(e[d]):e[d],d,void 0,i)}else if(typeof e=="number"){r=new Array(e);for(let l=0;l<e;l++)r[l]=n(l+1,l,void 0,i)}else if(Le(e))if(e[Symbol.iterator])r=Array.from(e,(l,c)=>n(l,c,void 0,i));else{const l=Object.keys(e);r=new Array(l.length);for(let c=0,u=l.length;c<u;c++){const d=l[c];r[c]=n(e[d],d,c,i)}}else r=[];return r}function hn(e,n,o,a,r,i){if(o==null&&(o={}),Xe.ce||Xe.parent&&Do(Xe.parent)&&Xe.parent.ce){const u=o,d=Object.keys(u).length>0;return n!=="default"&&(u.name=n),M(),Fe(we,null,[W("slot",u,a&&a())],d?-2:64)}let s=e[n];s&&s._c&&(s._d=!1);const l=Qn.length;M();let c;try{const u=s&&Pl(s(o)),d=o.key||i||u&&u.key;c=Fe(we,{key:(d&&!In(d)?d:`_${n}`)+(!u&&a?"_fb":"")},u||(a?a():[]),u&&e._===1?64:-2)}catch(u){for(let d=Qn.length;d>l;d--)Wt();throw u}finally{s&&s._c&&(s._d=!0)}return c.scopeId&&(c.slotScopeIds=[c.scopeId+"-s"]),c}function Pl(e){return e.some(n=>ga(n)?!(n.type===on||n.type===we&&!Pl(n.children)):!0)?e:null}function Qu(e,n){const o={};for(const a in e)o[Ma(a)]=e[a];return o}const _t=e=>e?Zl(e)?br(e):_t(e.parent):null,ca=Je(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>_t(e.parent),$root:e=>_t(e.root),$host:e=>e.ce,$emit:e=>e.emit,$options:e=>Vl(e),$forceUpdate:e=>e.f||(e.f=()=>{$t(e.update)}),$nextTick:e=>e.n||(e.n=Mo.bind(e.proxy)),$watch:e=>Ou.bind(e)}),wr=(e,n)=>e!==qe&&!e.__isScriptSetup&&De(e,n),Xu={get({_:e},n){if(n==="__v_skip")return!0;const{ctx:o,setupState:a,data:r,props:i,accessCache:s,type:l,appContext:c}=e;if(n[0]!=="$"){const f=s[n];if(f!==void 0)switch(f){case 1:return a[n];case 2:return r[n];case 4:return o[n];case 3:return i[n]}else{if(wr(a,n))return s[n]=1,a[n];if(r!==qe&&De(r,n))return s[n]=2,r[n];if(De(i,n))return s[n]=3,i[n];if(o!==qe&&De(o,n))return s[n]=4,o[n];yt&&(s[n]=0)}}const u=ca[n];let d,m;if(u)return n==="$attrs"&&nn(e.attrs,"get",""),u(e);if((d=l.__cssModules)&&(d=d[n]))return d;if(o!==qe&&De(o,n))return s[n]=4,o[n];if(m=c.config.globalProperties,De(m,n))return m[n]},set({_:e},n,o){const{data:a,setupState:r,ctx:i}=e;return wr(r,n)?(r[n]=o,!0):a!==qe&&De(a,n)?(a[n]=o,!0):De(e.props,n)||n[0]==="$"&&n.slice(1)in e?!1:(i[n]=o,!0)},has({_:{data:e,setupState:n,accessCache:o,ctx:a,appContext:r,props:i,type:s}},l){let c;return!!(o[l]||e!==qe&&l[0]!=="$"&&De(e,l)||wr(n,l)||De(i,l)||De(a,l)||De(ca,l)||De(r.config.globalProperties,l)||(c=s.__cssModules)&&c[l])},defineProperty(e,n,o){return o.get!=null?e._.accessCache[n]=0:De(o,"value")&&this.set(e,n,o.value,null),Reflect.defineProperty(e,n,o)}};function mi(e){return _e(e)?e.reduce((n,o)=>(n[o]=null,n),{}):e}let yt=!0;function Zu(e){const n=Vl(e),o=e.proxy,a=e.ctx;yt=!1,n.beforeCreate&&pi(n.beforeCreate,e,"bc");const{data:r,computed:i,methods:s,watch:l,provide:c,inject:u,created:d,beforeMount:m,mounted:f,beforeUpdate:v,updated:B,activated:w,deactivated:x,beforeDestroy:E,beforeUnmount:N,destroyed:q,unmounted:D,render:de,renderTracked:re,renderTriggered:z,errorCaptured:te,serverPrefetch:ae,expose:ge,inheritAttrs:X,components:T,directives:F,filters:Y}=n;if(u&&ed(u,a,null),s)for(const Ce in s){const Be=s[Ce];xe(Be)&&(a[Ce]=Be.bind(o))}if(r){const Ce=r.call(o,o);Le(Ce)&&(e.data=Ra(Ce))}if(yt=!0,i)for(const Ce in i){const Be=i[Ce],vn=xe(Be)?Be.bind(o,o):xe(Be.get)?Be.get.bind(o,o):Mn,Ze=!xe(Be)&&xe(Be.set)?Be.set.bind(o):Mn,fn=je({get:vn,set:Ze});Object.defineProperty(a,Ce,{enumerable:!0,configurable:!0,get:()=>fn.value,set:We=>fn.value=We})}if(l)for(const Ce in l)kl(l[Ce],a,o,Ce);if(c){const Ce=xe(c)?c.call(o):c;Reflect.ownKeys(Ce).forEach(Be=>{sa(Be,Ce[Be])})}d&&pi(d,e,"c");function J(Ce,Be){_e(Be)?Be.forEach(vn=>Ce(vn.bind(o))):Be&&Ce(Be.bind(o))}if(J($u,m),J(zn,f),J(zu,v),J(Hu,B),J(qu,w),J(Mu,x),J(Wu,te),J(Gu,re),J(Ku,z),J(zt,N),J(Ht,D),J(Uu,ae),_e(ge))if(ge.length){const Ce=e.exposed||(e.exposed={});ge.forEach(Be=>{Object.defineProperty(Ce,Be,{get:()=>o[Be],set:vn=>o[Be]=vn,enumerable:!0})})}else e.exposed||(e.exposed={});de&&e.render===Mn&&(e.render=de),X!=null&&(e.inheritAttrs=X),T&&(e.components=T),F&&(e.directives=F),ae&&wl(e)}function ed(e,n,o=Mn){_e(e)&&(e=At(e));for(const a in e){const r=e[a];let i;Le(r)?"default"in r?i=He(r.from||a,r.default,!0):i=He(r.from||a):i=He(r),rn(i)?Object.defineProperty(n,a,{enumerable:!0,configurable:!0,get:()=>i.value,set:s=>i.value=s}):n[a]=i}}function pi(e,n,o){Tn(_e(e)?e.map(a=>a.bind(n.proxy)):e.bind(n.proxy),n,o)}function kl(e,n,o,a){let r=a.includes(".")?_l(o,a):()=>o[a];if($e(e)){const i=n[e];xe(i)&&To(r,i)}else if(xe(e))To(r,e.bind(o));else if(Le(e))if(_e(e))e.forEach(i=>kl(i,n,o,a));else{const i=xe(e.handler)?e.handler.bind(o):n[e.handler];xe(i)&&To(r,i,e)}}function Vl(e){const n=e.type,{mixins:o,extends:a}=n,{mixins:r,optionsCache:i,config:{optionMergeStrategies:s}}=e.appContext,l=i.get(n);let c;return l?c=l:!r.length&&!o&&!a?c=n:(c={},r.length&&r.forEach(u=>Ja(c,u,s,!0)),Ja(c,n,s)),Le(n)&&i.set(n,c),c}function Ja(e,n,o,a=!1){const{mixins:r,extends:i}=n;i&&Ja(e,i,o,!0),r&&r.forEach(s=>Ja(e,s,o,!0));for(const s in n)if(!(a&&s==="expose")){const l=nd[s]||o&&o[s];e[s]=l?l(e[s],n[s]):n[s]}return e}const nd={data:fi,props:hi,emits:hi,methods:oa,computed:oa,beforeCreate:tn,created:tn,beforeMount:tn,mounted:tn,beforeUpdate:tn,updated:tn,beforeDestroy:tn,beforeUnmount:tn,destroyed:tn,unmounted:tn,activated:tn,deactivated:tn,errorCaptured:tn,serverPrefetch:tn,components:oa,directives:oa,watch:ad,provide:fi,inject:od};function fi(e,n){return n?e?function(){return Je(xe(e)?e.call(this,this):e,xe(n)?n.call(this,this):n)}:n:e}function od(e,n){return oa(At(e),At(n))}function At(e){if(_e(e)){const n={};for(let o=0;o<e.length;o++)n[e[o]]=e[o];return n}return e}function tn(e,n){return e?[...new Set([].concat(e,n))]:n}function oa(e,n){return e?Je(Object.create(null),e,n):n}function hi(e,n){return e?_e(e)&&_e(n)?[...new Set([...e,...n])]:Je(Object.create(null),mi(e),mi(n??{})):n}function ad(e,n){if(!e)return n;if(!n)return e;const o=Je(Object.create(null),e);for(const a in n)o[a]=tn(e[a],n[a]);return o}function Dl(){return{app:null,config:{isNativeTag:$s,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let rd=0;function td(e,n){return function(a,r=null){xe(a)||(a=Je({},a)),r!=null&&!Le(r)&&(r=null);const i=Dl(),s=new WeakSet,l=[];let c=!1;const u=i.app={_uid:rd++,_component:a,_props:r,_container:null,_context:i,_instance:null,version:Vd,get config(){return i.config},set config(d){},use(d,...m){return s.has(d)||(d&&xe(d.install)?(s.add(d),d.install(u,...m)):xe(d)&&(s.add(d),d(u,...m))),u},mixin(d){return i.mixins.includes(d)||i.mixins.push(d),u},component(d,m){return m?(i.components[d]=m,u):i.components[d]},directive(d,m){return m?(i.directives[d]=m,u):i.directives[d]},mount(d,m,f){if(!c){const v=u._ceVNode||W(a,r);return v.appContext=i,f===!0?f="svg":f===!1&&(f=void 0),e(v,d,f),c=!0,u._container=d,d.__vue_app__=u,br(v.component)}},onUnmount(d){l.push(d)},unmount(){c&&(Tn(l,u._instance,16),e(null,u._container),delete u._container.__vue_app__)},provide(d,m){return i.provides[d]=m,u},runWithContext(d){const m=Lo;Lo=u;try{return d()}finally{Lo=m}}};return u}}let Lo=null;const id=(e,n)=>n==="modelValue"||n==="model-value"?e.modelModifiers:e[`${n}Modifiers`]||e[`${mn(n)}Modifiers`]||e[`${So(n)}Modifiers`];function sd(e,n,...o){if(e.isUnmounted)return;const a=e.vnode.props||qe;let r=o;const i=n.startsWith("update:"),s=i&&id(a,n.slice(7));s&&(s.trim&&(r=o.map(d=>$e(d)?d.trim():d)),s.number&&(r=o.map(cr)));let l,c=a[l=Ma(n)]||a[l=Ma(mn(n))];!c&&i&&(c=a[l=Ma(So(n))]),c&&Tn(c,e,6,r);const u=a[l+"Once"];if(u){if(!e.emitted)e.emitted={};else if(e.emitted[l])return;e.emitted[l]=!0,Tn(u,e,6,r)}}const ld=new WeakMap;function Ll(e,n,o=!1){const a=o?ld:n.emitsCache,r=a.get(e);if(r!==void 0)return r;const i=e.emits;let s={},l=!1;if(!xe(e)){const c=u=>{const d=Ll(u,n,!0);d&&(l=!0,Je(s,d))};!o&&n.mixins.length&&n.mixins.forEach(c),e.extends&&c(e.extends),e.mixins&&e.mixins.forEach(c)}return!i&&!l?(Le(e)&&a.set(e,null),null):(_e(i)?i.forEach(c=>s[c]=null):Je(s,i),Le(e)&&a.set(e,s),s)}function vr(e,n){return!e||!tr(n)?!1:(n=n.slice(2),n=n==="Once"?n:n.replace(/Once$/,""),De(e,n[0].toLowerCase()+n.slice(1))||De(e,So(n))||De(e,n))}function vi(e){const{type:n,vnode:o,proxy:a,withProxy:r,propsOptions:[i],slots:s,attrs:l,emit:c,render:u,renderCache:d,props:m,data:f,setupState:v,ctx:B,inheritAttrs:w}=e,x=Ga(e);let E,N;try{if(o.shapeFlag&4){const D=r||a,de=D;E=Ln(u.call(de,D,d,m,v,f,B)),N=l}else{const D=n;E=Ln(D.length>1?D(m,{attrs:l,slots:s,emit:c}):D(m,null)),N=n.props?l:cd(l)}}catch(D){Qn.length=0,mr(D,e,1),E=W(on)}let q=E;if(N&&w!==!1){const D=Object.keys(N),{shapeFlag:de}=q;D.length&&de&7&&(i&&D.some(ir)&&(N=ud(N,i)),q=mo(q,N,!1,!0))}if(o.dirs&&(q=mo(q,null,!1,!0),q.dirs=q.dirs?q.dirs.concat(o.dirs):o.dirs),o.transition){const D=pr(q.type)&&Wa(q)||q;ha(D,o.transition)}return E=q,Ga(x),E}const cd=e=>{let n;for(const o in e)(o==="class"||o==="style"||tr(o))&&((n||(n={}))[o]=e[o]);return n},ud=(e,n)=>{const o={};for(const a in e)(!ir(a)||!(a.slice(9)in n))&&(o[a]=e[a]);return o};function dd(e,n,o){const{props:a,children:r,component:i}=e,{props:s,children:l,patchFlag:c}=n,u=i.emitsOptions;if(n.dirs||n.transition)return!0;if(o&&c>=0){if(c&1024)return!0;if(c&16)return a?gi(a,s,u):!!s;if(c&8){const d=n.dynamicProps;for(let m=0;m<d.length;m++){const f=d[m];if(jl(s,a,f)&&!vr(u,f))return!0}}}else return(r||l)&&(!l||!l.$stable)?!0:a===s?!1:a?s?gi(a,s,u):!0:!!s;return!1}function gi(e,n,o){const a=Object.keys(n);if(a.length!==Object.keys(e).length)return!0;for(let r=0;r<a.length;r++){const i=a[r];if(jl(n,e,i)&&!vr(o,i))return!0}return!1}function jl(e,n,o){const a=e[o],r=n[o];return o==="style"&&Le(a)&&Le(r)?!Ko(a,r):a!==r}function md({vnode:e,parent:n,suspense:o},a){for(;n;){const r=n.subTree;if(r.suspense&&r.suspense.activeBranch===e&&(r.suspense.vnode.el=r.el=a,e=r),r===e)(e=n.vnode).el=a,n=n.parent;else break}o&&o.activeBranch===e&&(o.vnode.el=a)}const ql={},Ml=()=>Object.create(ql),Fl=e=>Object.getPrototypeOf(e)===ql;function pd(e,n,o,a=!1){const r={},i=Ml();e.propsDefaults=Object.create(null),$l(e,n,r,i);for(const s in e.propsOptions[0])s in r||(r[s]=void 0);o?e.props=a?r:ul(r):e.type.props?e.props=r:e.props=i,e.attrs=i}function fd(e,n,o,a){const{props:r,attrs:i,vnode:{patchFlag:s}}=e,l=Pe(r),[c]=e.propsOptions;let u=!1;if((a||s>0)&&!(s&16)){if(s&8){const d=e.vnode.dynamicProps;for(let m=0;m<d.length;m++){let f=d[m];if(vr(e.emitsOptions,f))continue;const v=n[f];if(c)if(De(i,f))v!==i[f]&&(i[f]=v,u=!0);else{const B=mn(f);r[B]=Nt(c,l,B,v,e,!1)}else v!==i[f]&&(i[f]=v,u=!0)}}}else{$l(e,n,r,i)&&(u=!0);let d;for(const m in l)(!n||!De(n,m)&&((d=So(m))===m||!De(n,d)))&&(c?o&&(o[m]!==void 0||o[d]!==void 0)&&(r[m]=Nt(c,l,m,void 0,e,!0)):delete r[m]);if(i!==l)for(const m in i)(!n||!De(n,m))&&(delete i[m],u=!0)}u&&Yn(e.attrs,"set","")}function $l(e,n,o,a){const[r,i]=e.propsOptions;let s=!1,l;if(n)for(let c in n){if(ra(c))continue;const u=n[c];let d;r&&De(r,d=mn(c))?!i||!i.includes(d)?o[d]=u:(l||(l={}))[d]=u:vr(e.emitsOptions,c)||(!(c in a)||u!==a[c])&&(a[c]=u,s=!0)}if(i){const c=Pe(o),u=l||qe;for(let d=0;d<i.length;d++){const m=i[d];o[m]=Nt(r,c,m,u[m],e,!De(u,m))}}return s}function Nt(e,n,o,a,r,i){const s=e[o];if(s!=null){const l=De(s,"default");if(l&&a===void 0){const c=s.default;if(s.type!==Function&&!s.skipFactory&&xe(c)){const{propsDefaults:u}=r;if(o in u)a=u[o];else{const d=wa(r);a=u[o]=c.call(null,n),d()}}else a=c;r.ce&&r.ce._setProp(o,a)}s[0]&&(i&&!l?a=!1:s[1]&&(a===""||a===So(o))&&(a=!0))}return a}const hd=new WeakMap;function zl(e,n,o=!1){const a=o?hd:n.propsCache,r=a.get(e);if(r)return r;const i=e.props,s={},l=[];let c=!1;if(!xe(e)){const d=m=>{c=!0;const[f,v]=zl(m,n,!0);Je(s,f),v&&l.push(...v)};!o&&n.mixins.length&&n.mixins.forEach(d),e.extends&&d(e.extends),e.mixins&&e.mixins.forEach(d)}if(!i&&!c)return Le(e)&&a.set(e,Po),Po;if(_e(i))for(let d=0;d<i.length;d++){const m=mn(i[d]);bi(m)&&(s[m]=qe)}else if(i)for(const d in i){const m=mn(d);if(bi(m)){const f=i[d],v=s[m]=_e(f)||xe(f)?{type:f}:Je({},f),B=v.type;let w=!1,x=!0;if(_e(B))for(let E=0;E<B.length;++E){const N=B[E],q=xe(N)&&N.name;if(q==="Boolean"){w=!0;break}else q==="String"&&(x=!1)}else w=xe(B)&&B.name==="Boolean";v[0]=w,v[1]=x,(w||De(v,"default"))&&l.push(m)}}const u=[s,l];return Le(e)&&a.set(e,u),u}function bi(e){return e[0]!=="$"&&!ra(e)}const Ut=e=>e==="_"||e==="_ctx"||e==="$stable",Kt=e=>_e(e)?e.map(Ln):[Ln(e)],vd=(e,n,o)=>{if(n._n)return n;const a=Ae((...r)=>Kt(n(...r)),o);return a._c=!1,a},Hl=(e,n,o)=>{const a=e._ctx;for(const r in e){if(Ut(r))continue;const i=e[r];if(xe(i))n[r]=vd(r,i,a);else if(i!=null){const s=Kt(i);n[r]=()=>s}}},Ul=(e,n)=>{const o=Kt(n);e.slots.default=()=>o},Kl=(e,n,o)=>{for(const a in n)(o||!Ut(a))&&(e[a]=n[a])},gd=(e,n,o)=>{const a=e.slots=Ml();if(e.vnode.shapeFlag&32){const r=n._;r?(Kl(a,n,o),o&&Ks(a,"_",r,!0)):Hl(n,a)}else n&&Ul(e,n)},bd=(e,n,o)=>{const{vnode:a,slots:r}=e;let i=!0,s=qe;if(a.shapeFlag&32){const l=n._;l?o&&l===1?i=!1:Kl(r,n,o):(i=!n.$stable,Hl(n,r)),s=n}else n&&(Ul(e,n),s={default:1});if(i)for(const l in r)!Ut(l)&&s[l]==null&&delete r[l]},sn=xd;function _d(e){return yd(e)}function yd(e,n){const o=ur();o.__VUE__=!0;const{insert:a,remove:r,patchProp:i,createElement:s,createText:l,createComment:c,setText:u,setElementText:d,parentNode:m,nextSibling:f,setScopeId:v=Mn,insertStaticContent:B}=e,w=(h,g,y,P=null,L=null,C=null,ne=void 0,Z=null,Q=!!g.dynamicChildren)=>{if(h===g)return;h&&!yo(h,g)&&(P=O(h),We(h,L,C,!0),h=null),g.patchFlag===-2&&(Q=!1,g.dynamicChildren=null);const{type:$,ref:ve,shapeFlag:oe}=g;switch($){case gr:x(h,g,y,P);break;case on:E(h,g,y,P);break;case $a:h==null&&N(g,y,P,ne);break;case we:T(h,g,y,P,L,C,ne,Z,Q);break;default:oe&1?de(h,g,y,P,L,C,ne,Z,Q):oe&6?F(h,g,y,P,L,C,ne,Z,Q):(oe&64||oe&128)&&$.process(h,g,y,P,L,C,ne,Z,Q,me)}ve!=null&&L?la(ve,h&&h.ref,C,g||h,!g):ve==null&&h&&h.ref!=null&&la(h.ref,null,C,h,!0)},x=(h,g,y,P)=>{if(h==null)a(g.el=l(g.children),y,P);else{const L=g.el=h.el;g.children!==h.children&&u(L,g.children)}},E=(h,g,y,P)=>{h==null?a(g.el=c(g.children||""),y,P):g.el=h.el},N=(h,g,y,P)=>{[h.el,h.anchor]=B(h.children,g,y,P,h.el,h.anchor)},q=({el:h,anchor:g},y,P)=>{let L;for(;h&&h!==g;)L=f(h),a(h,y,P),h=L;a(g,y,P)},D=({el:h,anchor:g})=>{let y;for(;h&&h!==g;)y=f(h),r(h),h=y;r(g)},de=(h,g,y,P,L,C,ne,Z,Q)=>{if(g.type==="svg"?ne="svg":g.type==="math"&&(ne="mathml"),h==null)re(g,y,P,L,C,ne,Z,Q);else{const $=h.el&&h.el._isVueCE?h.el:null;try{$&&$._beginPatch(),ae(h,g,L,C,ne,Z,Q)}finally{$&&$._endPatch()}}},re=(h,g,y,P,L,C,ne,Z)=>{let Q,$;const{props:ve,shapeFlag:oe,transition:fe,dirs:ye}=h;if(Q=h.el=s(h.type,C,ve&&ve.is,ve),oe&8?d(Q,h.children):oe&16&&te(h.children,Q,null,P,L,Er(h,C),ne,Z),ye&&po(h,null,P,"created"),z(Q,h,h.scopeId,ne,P),ve){for(const Oe in ve)Oe!=="value"&&!ra(Oe)&&i(Q,Oe,null,ve[Oe],C,P);"value"in ve&&i(Q,"value",null,ve.value,C),($=ve.onVnodeBeforeMount)&&kn($,P,h)}ye&&po(h,null,P,"beforeMount");const Ee=Ad(L,fe);Ee&&fe.beforeEnter(Q),a(Q,g,y),(($=ve&&ve.onVnodeMounted)||Ee||ye)&&sn(()=>{$&&kn($,P,h),Ee&&fe.enter(Q),ye&&po(h,null,P,"mounted")},L)},z=(h,g,y,P,L)=>{if(y&&v(h,y),P)for(let C=0;C<P.length;C++)v(h,P[C]);if(L){let C=L.subTree;if(g===C||Yl(C.type)&&(C.ssContent===g||C.ssFallback===g)){const ne=L.vnode;z(h,ne,ne.scopeId,ne.slotScopeIds,L.parent)}}},te=(h,g,y,P,L,C,ne,Z,Q=0)=>{for(let $=Q;$<h.length;$++){const ve=h[$]=Z?Wn(h[$]):Ln(h[$]);w(null,ve,g,y,P,L,C,ne,Z)}},ae=(h,g,y,P,L,C,ne)=>{const Z=g.el=h.el;let{patchFlag:Q,dynamicChildren:$,dirs:ve}=g;Q|=h.patchFlag&16;const oe=h.props||qe,fe=g.props||qe;let ye;if(y&&fo(y,!1),(ye=fe.onVnodeBeforeUpdate)&&kn(ye,y,g,h),ve&&po(g,h,y,"beforeUpdate"),y&&fo(y,!0),$&&(!h.dynamicChildren||h.dynamicChildren.length!==$.length)&&(Q=0,ne=!1,$=null),(oe.innerHTML&&fe.innerHTML==null||oe.textContent&&fe.textContent==null)&&d(Z,""),$?ge(h.dynamicChildren,$,Z,y,P,Er(g,L),C):ne||Be(h,g,Z,null,y,P,Er(g,L),C,!1),Q>0){if(Q&16)X(Z,oe,fe,y,L);else if(Q&2&&oe.class!==fe.class&&i(Z,"class",null,fe.class,L),Q&4&&i(Z,"style",oe.style,fe.style,L),Q&8){const Ee=g.dynamicProps;for(let Oe=0;Oe<Ee.length;Oe++){const t=Ee[Oe],_=oe[t],S=fe[t];(S!==_||t==="value")&&i(Z,t,_,S,L,y)}}Q&1&&h.children!==g.children&&d(Z,g.children)}else!ne&&$==null&&X(Z,oe,fe,y,L);((ye=fe.onVnodeUpdated)||ve)&&sn(()=>{ye&&kn(ye,y,g,h),ve&&po(g,h,y,"updated")},P)},ge=(h,g,y,P,L,C,ne)=>{for(let Z=0;Z<g.length;Z++){const Q=h[Z],$=g[Z],ve=Q.el&&(Q.type===we||!yo(Q,$)||Q.shapeFlag&198)?m(Q.el):y;w(Q,$,ve,null,P,L,C,ne,!0)}},X=(h,g,y,P,L)=>{if(g!==y){if(g!==qe)for(const C in g)!ra(C)&&!(C in y)&&i(h,C,g[C],null,L,P);for(const C in y){if(ra(C))continue;const ne=y[C],Z=g[C];ne!==Z&&C!=="value"&&i(h,C,Z,ne,L,P)}"value"in y&&i(h,"value",g.value,y.value,L)}},T=(h,g,y,P,L,C,ne,Z,Q)=>{const $=g.el=h?h.el:l(""),ve=g.anchor=h?h.anchor:l("");let{patchFlag:oe,dynamicChildren:fe,slotScopeIds:ye}=g;ye&&(Z=Z?Z.concat(ye):ye),h==null?(a($,y,P),a(ve,y,P),te(g.children||[],y,ve,L,C,ne,Z,Q)):oe>0&&oe&64&&fe&&h.dynamicChildren&&h.dynamicChildren.length===fe.length?(ge(h.dynamicChildren,fe,y,L,C,ne,Z),(g.key!=null||L&&g===L.subTree)&&Gt(h,g,!0)):Be(h,g,y,ve,L,C,ne,Z,Q)},F=(h,g,y,P,L,C,ne,Z,Q)=>{g.slotScopeIds=Z,h==null?g.shapeFlag&512?L.ctx.activate(g,y,P,ne,Q):Y(g,y,P,L,C,ne,Q):ue(h,g,Q)},Y=(h,g,y,P,L,C,ne)=>{const Z=h.component=wd(h,P,L);if(fr(h)&&(Z.ctx.renderer=me),Ed(Z,!1,ne),Z.asyncDep){if(L&&L.registerDep(Z,J,ne),!h.el){const Q=Z.subTree=W(on);E(null,Q,g,y),h.placeholder=Q.el}}else J(Z,h,g,y,L,C,ne)},ue=(h,g,y)=>{const P=g.component=h.component;if(dd(h,g,y))if(P.asyncDep&&!P.asyncResolved){Ce(P,g,y);return}else P.next=g,P.update();else g.el=h.el,P.vnode=g},J=(h,g,y,P,L,C,ne)=>{const Z=()=>{if(h.isMounted){let{next:oe,bu:fe,u:ye,parent:Ee,vnode:Oe}=h;{const R=Gl(h);if(R){oe&&(oe.el=Oe.el,Ce(h,oe,ne)),R.asyncDep.then(()=>{sn(()=>{h.isUnmounted||$()},L)});return}}let t=oe,_;fo(h,!1),oe?(oe.el=Oe.el,Ce(h,oe,ne)):oe=Oe,fe&&Fa(fe),(_=oe.props&&oe.props.onVnodeBeforeUpdate)&&kn(_,Ee,oe,Oe),fo(h,!0);const S=vi(h),I=h.subTree;h.subTree=S,w(I,S,m(I.el),O(I),h,L,C),oe.el=S.el,t===null&&md(h,S.el),ye&&sn(ye,L),(_=oe.props&&oe.props.onVnodeUpdated)&&sn(()=>kn(_,Ee,oe,Oe),L)}else{let oe;const{el:fe,props:ye}=g,{bm:Ee,m:Oe,parent:t,root:_,type:S}=h,I=Do(g);fo(h,!1),Ee&&Fa(Ee),!I&&(oe=ye&&ye.onVnodeBeforeMount)&&kn(oe,t,g),fo(h,!0);{_.ce&&_.ce._hasShadowRoot()&&_.ce._injectChildStyle(S,h.parent?h.parent.type:void 0);const R=h.subTree=vi(h);w(null,R,y,P,h,L,C),g.el=R.el}if(Oe&&sn(Oe,L),!I&&(oe=ye&&ye.onVnodeMounted)){const R=g;sn(()=>kn(oe,t,R),L)}(g.shapeFlag&256||t&&Do(t.vnode)&&t.vnode.shapeFlag&256)&&h.a&&sn(h.a,L),h.isMounted=!0,g=y=P=null}};h.scope.on();const Q=h.effect=new Js(Z);h.scope.off();const $=h.update=Q.run.bind(Q),ve=h.job=Q.runIfDirty.bind(Q);ve.i=h,ve.id=h.uid,Q.scheduler=()=>$t(ve),fo(h,!0),$()},Ce=(h,g,y)=>{g.component=h;const P=h.vnode.props;h.vnode=g,h.next=null,fd(h,g.props,P,y),bd(h,g.children,y),Xn(),ii(h),Zn()},Be=(h,g,y,P,L,C,ne,Z,Q=!1)=>{const $=h&&h.children,ve=h?h.shapeFlag:0,oe=g.children,{patchFlag:fe,shapeFlag:ye}=g;if(fe>0){if(fe&128){Ze($,oe,y,P,L,C,ne,Z,Q);return}else if(fe&256){vn($,oe,y,P,L,C,ne,Z,Q);return}}ye&8?(ve&16&&Ge($,L,C),oe!==$&&d(y,oe)):ve&16?ye&16?Ze($,oe,y,P,L,C,ne,Z,Q):Ge($,L,C,!0):(ve&8&&d(y,""),ye&16&&te(oe,y,P,L,C,ne,Z,Q))},vn=(h,g,y,P,L,C,ne,Z,Q)=>{h=h||Po,g=g||Po;const $=h.length,ve=g.length,oe=Math.min($,ve);let fe;for(fe=0;fe<oe;fe++){const ye=g[fe]=Q?Wn(g[fe]):Ln(g[fe]);w(h[fe],ye,y,null,L,C,ne,Z,Q)}$>ve?Ge(h,L,C,!0,!1,oe):te(g,y,P,L,C,ne,Z,Q,oe)},Ze=(h,g,y,P,L,C,ne,Z,Q)=>{let $=0;const ve=g.length;let oe=h.length-1,fe=ve-1;for(;$<=oe&&$<=fe;){const ye=h[$],Ee=g[$]=Q?Wn(g[$]):Ln(g[$]);if(yo(ye,Ee))w(ye,Ee,y,null,L,C,ne,Z,Q);else break;$++}for(;$<=oe&&$<=fe;){const ye=h[oe],Ee=g[fe]=Q?Wn(g[fe]):Ln(g[fe]);if(yo(ye,Ee))w(ye,Ee,y,null,L,C,ne,Z,Q);else break;oe--,fe--}if($>oe){if($<=fe){const ye=fe+1,Ee=ye<ve?g[ye].el:P;for(;$<=fe;)w(null,g[$]=Q?Wn(g[$]):Ln(g[$]),y,Ee,L,C,ne,Z,Q),$++}}else if($>fe)for(;$<=oe;)We(h[$],L,C,!0),$++;else{const ye=$,Ee=$,Oe=new Map;for($=Ee;$<=fe;$++){const A=g[$]=Q?Wn(g[$]):Ln(g[$]);A.key!=null&&Oe.set(A.key,$)}let t,_=0;const S=fe-Ee+1;let I=!1,R=0;const U=new Array(S);for($=0;$<S;$++)U[$]=0;for($=ye;$<=oe;$++){const A=h[$];if(_>=S){We(A,L,C,!0);continue}let j;if(A.key!=null)j=Oe.get(A.key);else for(t=Ee;t<=fe;t++)if(U[t-Ee]===0&&yo(A,g[t])){j=t;break}j===void 0?We(A,L,C,!0):(U[j-Ee]=$+1,j>=R?R=j:I=!0,w(A,g[j],y,null,L,C,ne,Z,Q),_++)}const p=I?Nd(U):Po;for(t=p.length-1,$=S-1;$>=0;$--){const A=Ee+$,j=g[A],k=g[A+1],V=A+1<ve?k.el||Wl(k):P;U[$]===0?w(null,j,y,V,L,C,ne,Z,Q):I&&(t<0||$!==p[t]?fn(j,y,V,2):t--)}}},fn=(h,g,y,P,L=null)=>{const{el:C,type:ne,transition:Z,children:Q,shapeFlag:$}=h;if($&6){fn(h.component.subTree,g,y,P);return}if($&128){h.suspense.move(g,y,P);return}if($&64){ne.move(h,g,y,me);return}if(ne===we){a(C,g,y);for(let oe=0;oe<Q.length;oe++)fn(Q[oe],g,y,P);a(h.anchor,g,y);return}if(ne===$a){q(h,g,y);return}if(P!==2&&$&1&&Z)if(P===0)Z.persisted&&!C[yn]?a(C,g,y):(Z.beforeEnter(C),a(C,g,y),sn(()=>Z.enter(C),L));else{const{leave:oe,delayLeave:fe,afterLeave:ye}=Z,Ee=()=>{h.ctx.isUnmounted?r(C):a(C,g,y)},Oe=()=>{const t=C._isLeaving||!!C[yn];C._isLeaving&&C[yn](!0),Z.persisted&&!t?Ee():oe(C,()=>{Ee(),ye&&ye()})};fe?fe(C,Ee,Oe):Oe()}else a(C,g,y)},We=(h,g,y,P=!1,L=!1)=>{const{type:C,props:ne,ref:Z,children:Q,dynamicChildren:$,shapeFlag:ve,patchFlag:oe,dirs:fe,cacheIndex:ye,memo:Ee}=h;if(oe===-2&&(L=!1),Z!=null&&(Xn(),la(Z,null,y,h,!0),Zn()),ye!=null&&(g.renderCache[ye]=void 0),ve&256){g.ctx.deactivate(h);return}const Oe=ve&1&&fe,t=!Do(h);let _;if(t&&(_=ne&&ne.onVnodeBeforeUnmount)&&kn(_,g,h),ve&6)Ke(h.component,y,P);else{if(ve&128){h.suspense.unmount(y,P);return}Oe&&po(h,null,g,"beforeUnmount"),ve&64?h.type.remove(h,g,y,me,P):$&&!$.hasOnce&&(C!==we||oe>0&&oe&64)?Ge($,g,y,!1,!0):(C===we&&oe&384||!L&&ve&16)&&Ge(Q,g,y),P&&gn(h)}const S=Ee!=null&&ye==null;(t&&(_=ne&&ne.onVnodeUnmounted)||Oe||S)&&sn(()=>{_&&kn(_,g,h),Oe&&po(h,null,g,"unmounted"),S&&(h.el=null)},y)},gn=h=>{const{type:g,el:y,anchor:P,transition:L}=h;if(g===we){Sn(y,P);return}if(g===$a){D(h);return}const C=()=>{r(y),L&&!L.persisted&&L.afterLeave&&L.afterLeave()};if(h.shapeFlag&1&&L&&!L.persisted){const{leave:ne,delayLeave:Z}=L,Q=()=>ne(y,C);Z?Z(h.el,C,Q):Q()}else C()},Sn=(h,g)=>{let y;for(;h!==g;)y=f(h),r(h),h=y;r(g)},Ke=(h,g,y)=>{const{bum:P,scope:L,job:C,subTree:ne,um:Z,m:Q,a:$}=h;_i(Q),_i($),P&&Fa(P),L.stop(),C&&(C.flags|=8,We(ne,h,g,y)),Z&&sn(Z,g),sn(()=>{h.isUnmounted=!0},g)},Ge=(h,g,y,P=!1,L=!1,C=0)=>{for(let ne=C;ne<h.length;ne++)We(h[ne],g,y,P,L)},O=h=>{if(h.shapeFlag&6)return O(h.component.subTree);if(h.shapeFlag&128)return h.suspense.next();const g=f(h.anchor||h.el),y=g&&g[yl];return y?f(y):g};let se=!1;const G=(h,g,y)=>{let P;h==null?g._vnode&&(We(g._vnode,null,null,!0),P=g._vnode.component):w(g._vnode||null,h,g,null,null,null,y),g._vnode=h,se||(se=!0,ii(P),hl(),se=!1)},me={p:w,um:We,m:fn,r:gn,mt:Y,mc:te,pc:Be,pbc:ge,n:O,o:e};return{render:G,hydrate:void 0,createApp:td(G)}}function Er({type:e,props:n},o){return o==="svg"&&e==="foreignObject"||o==="mathml"&&e==="annotation-xml"&&n&&n.encoding&&n.encoding.includes("html")?void 0:o}function fo({effect:e,job:n},o){o?(e.flags|=32,n.flags|=4):(e.flags&=-33,n.flags&=-5)}function Ad(e,n){return(!e||e&&!e.pendingBranch)&&n&&!n.persisted}function Gt(e,n,o=!1){const a=e.children,r=n.children;if(_e(a)&&_e(r))for(let i=0;i<a.length;i++){const s=a[i];let l=r[i];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=r[i]=Wn(r[i]),l.el=s.el),!o&&l.patchFlag!==-2&&Gt(s,l)),l.type===gr&&(l.patchFlag===-1&&(l=r[i]=Wn(l)),l.el=s.el),l.type===on&&!l.el&&(l.el=s.el)}}function Nd(e){const n=e.slice(),o=[0];let a,r,i,s,l;const c=e.length;for(a=0;a<c;a++){const u=e[a];if(u!==0){if(r=o[o.length-1],e[r]<u){n[a]=r,o.push(a);continue}for(i=0,s=o.length-1;i<s;)l=i+s>>1,e[o[l]]<u?i=l+1:s=l;u<e[o[i]]&&(i>0&&(n[a]=o[i-1]),o[i]=a)}}for(i=o.length,s=o[i-1];i-- >0;)o[i]=s,s=n[s];return o}function Gl(e){const n=e.subTree.component;if(n)return n.asyncDep&&!n.asyncResolved?n:Gl(n)}function _i(e){if(e)for(let n=0;n<e.length;n++)e[n].flags|=8}function Wl(e){if(e.placeholder)return e.placeholder;const n=e.component;return n?Wl(n.subTree):null}const Yl=e=>e.__isSuspense;function xd(e,n){n&&n.pendingBranch?_e(e)?n.effects.push(...e):n.effects.push(e):Eu(e)}const we=Symbol.for("v-fgt"),gr=Symbol.for("v-txt"),on=Symbol.for("v-cmt"),$a=Symbol.for("v-stc"),Qn=[];let bn=null;function M(e=!1){Qn.push(bn=e?null:[])}function Wt(){Qn.pop(),bn=Qn[Qn.length-1]||null}let va=1;function Qa(e,n=!1){va+=e,e<0&&bn&&n&&(bn.hasOnce=!0)}function Jl(e){return e.dynamicChildren=va>0?bn||Po:null,Wt(),va>0&&bn&&bn.push(e),e}function ee(e,n,o,a,r,i){return Jl(b(e,n,o,a,r,i,!0))}function Fe(e,n,o,a,r){return Jl(W(e,n,o,a,r,!0))}function ga(e){return e?e.__v_isVNode===!0:!1}function yo(e,n){return e.type===n.type&&e.key===n.key}const Ql=({key:e})=>e??null,za=({ref:e,ref_key:n,ref_for:o})=>(typeof e=="number"&&(e=""+e),e!=null?$e(e)||rn(e)||xe(e)?{i:Xe,r:e,k:n,f:!!o}:e:null);function b(e,n=null,o=null,a=0,r=null,i=e===we?0:1,s=!1,l=!1){const c={__v_isVNode:!0,__v_skip:!0,type:e,props:n,key:n&&Ql(n),ref:n&&za(n),scopeId:gl,slotScopeIds:null,children:o,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:a,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:Xe};return l?(Xa(c,o),i&128&&e.normalize(c)):o&&(c.shapeFlag|=$e(o)?8:16),va>0&&!s&&bn&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&bn.push(c),c}const W=Bd;function Bd(e,n=null,o=null,a=0,r=null,i=!1){if((!e||e===Il)&&(e=on),ga(e)){const l=mo(e,n,!0);return o&&Xa(l,o),va>0&&!i&&bn&&(l.shapeFlag&6?bn[bn.indexOf(e)]=l:bn.push(l)),l.patchFlag=-2,l}if(kd(e)&&(e=e.__vccOpts),n){n=En(n);let{class:l,style:c}=n;l&&!$e(l)&&(n.class=un(l)),Le(c)&&(Ft(c)&&!_e(c)&&(c=Je({},c)),n.style=Ta(c))}const s=$e(e)?1:Yl(e)?128:pr(e)?64:Le(e)?4:xe(e)?2:0;return b(e,n,o,a,r,s,i,!0)}function En(e){return e?Ft(e)||Fl(e)?Je({},e):e:null}function mo(e,n,o=!1,a=!1){const{props:r,ref:i,patchFlag:s,children:l,transition:c}=e,u=n?xt(r||{},n):r,d={__v_isVNode:!0,__v_skip:!0,type:e.type,props:u,key:u&&Ql(u),ref:n&&n.ref?o&&i?_e(i)?i.concat(za(n)):[i,za(n)]:za(n):i,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:l,target:e.target,targetStart:e.targetStart,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:n&&e.type!==we?s===-1?16:s|16:s,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:c,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&mo(e.ssContent),ssFallback:e.ssFallback&&mo(e.ssFallback),placeholder:e.placeholder,el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return c&&a&&ha(d,c.clone(d)),d}function Re(e=" ",n=0){return W(gr,null,e,n)}function Td(e,n){const o=W($a,null,e);return o.staticCount=n,o}function Te(e="",n=!1){return n?(M(),Fe(on,null,e)):W(on,null,e)}function Ln(e){return e==null||typeof e=="boolean"?W(on):_e(e)?W(we,null,e.slice()):ga(e)?Wn(e):W(gr,null,String(e))}function Wn(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:mo(e)}function Xa(e,n){let o=0;const{shapeFlag:a}=e;if(n==null)n=null;else if(_e(n))o=16;else if(typeof n=="object")if(a&65){const r=n.default;r&&(r._c&&(r._d=!1),Xa(e,r()),r._c&&(r._d=!0));return}else{o=32;const r=n._;!r&&!Fl(n)?n._ctx=Xe:r===3&&Xe&&(Xe.slots._===1?n._=1:(n._=2,e.patchFlag|=1024))}else if(xe(n)){if(a&65){Xa(e,{default:n});return}n={default:n,_ctx:Xe},o=32}else n=String(n),a&64?(o=16,n=[Re(n)]):o=8;e.children=n,e.shapeFlag|=o}function xt(...e){const n={};for(let o=0;o<e.length;o++){const a=e[o];for(const r in a)if(r==="class")n.class!==a.class&&(n.class=un([n.class,a.class]));else if(r==="style")n.style=Ta([n.style,a.style]);else if(tr(r)){const i=n[r],s=a[r];s&&i!==s&&!(_e(i)&&i.includes(s))?n[r]=i?[].concat(i,s):s:s==null&&i==null&&!ir(r)&&(n[r]=s)}else r!==""&&(n[r]=a[r])}return n}function kn(e,n,o,a=null){Tn(e,n,7,[o,a])}const Rd=Dl();let Sd=0;function wd(e,n,o){const a=e.type,r=(n?n.appContext:e.appContext)||Rd,i={uid:Sd++,vnode:e,type:a,parent:n,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new eu(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:n?n.provides:Object.create(r.provides),ids:n?n.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:zl(a,r),emitsOptions:Ll(a,r),emit:null,emitted:null,propsDefaults:qe,inheritAttrs:a.inheritAttrs,ctx:qe,data:qe,props:qe,attrs:qe,slots:qe,refs:qe,setupState:qe,setupContext:null,suspense:o,suspenseId:o?o.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=n?n.root:i,i.emit=sd.bind(null,i),e.ce&&e.ce(i),i}let an=null;const Xl=()=>an||Xe;let Za,ba;{const e=ur(),n=(o,a)=>{let r;return(r=e[o])||(r=e[o]=[]),r.push(a),i=>{r.length>1?r.forEach(s=>s(i)):r[0](i)}};Za=n("__VUE_INSTANCE_SETTERS__",o=>an=o),ba=n("__VUE_SSR_SETTERS__",o=>_a=o)}const wa=e=>{const n=an;return Za(e),e.scope.on(),()=>{e.scope.off(),Za(n)}},yi=()=>{an&&an.scope.off(),Za(null)};function Zl(e){return e.vnode.shapeFlag&4}let _a=!1;function Ed(e,n=!1,o=!1){n&&ba(n);const{props:a,children:r}=e.vnode,i=Zl(e);pd(e,a,i,n),gd(e,r,o||n);const s=i?Cd(e,n):void 0;return n&&ba(!1),s}function Cd(e,n){const o=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,Xu);const{setup:a}=o;if(a){Xn();const r=e.setupContext=a.length>1?Od(e):null,i=wa(e),s=Sa(a,e,0,[e.props,r]),l=zs(s);if(Zn(),i(),(l||e.sp)&&!Do(e)&&wl(e),l){if(s.then(yi,yi),n)return s.then(c=>{ba(!0);try{Ai(e,c,n)}finally{ba(!1)}}).catch(c=>{mr(c,e,0)});e.asyncDep=s}else Ai(e,s)}else ec(e)}function Ai(e,n,o){xe(n)?e.type.__ssrInlineRender?e.ssrRender=n:e.render=n:Le(n)&&(e.setupState=ml(n)),ec(e)}function ec(e,n,o){const a=e.type;e.render||(e.render=a.render||Mn);{const r=wa(e);Xn();try{Zu(e)}finally{Zn(),r()}}}const Id={get(e,n){return nn(e,"get",""),e[n]}};function Od(e){const n=o=>{e.exposed=o||{}};return{attrs:new Proxy(e.attrs,Id),slots:e.slots,emit:e.emit,expose:n}}function br(e){return e.exposed?e.exposeProxy||(e.exposeProxy=new Proxy(ml(_u(e.exposed)),{get(n,o){if(o in n)return n[o];if(o in ca)return ca[o](e)},has(n,o){return o in n||o in ca}})):e.proxy}function Pd(e,n=!0){return xe(e)?e.displayName||e.name:e.name||n&&e.__name}function kd(e){return xe(e)&&"__vccOpts"in e}const je=(e,n)=>Bu(e,n,_a);function Fo(e,n,o){try{Qa(-1);const a=arguments.length;return a===2?Le(n)&&!_e(n)?ga(n)?W(e,null,[n]):W(e,n):W(e,null,n):(a>3?o=Array.prototype.slice.call(arguments,2):a===3&&ga(o)&&(o=[o]),W(e,n,o))}finally{Qa(1)}}const Vd="3.5.41";let Bt;const Ni=typeof window<"u"&&window.trustedTypes;if(Ni)try{Bt=Ni.createPolicy("vue",{createHTML:e=>e})}catch{}const nc=Bt?e=>Bt.createHTML(e):e=>e,Dd="http://www.w3.org/2000/svg",Ld="http://www.w3.org/1998/Math/MathML",Gn=typeof document<"u"?document:null,xi=Gn&&Gn.createElement("template"),jd={insert:(e,n,o)=>{n.insertBefore(e,o||null)},remove:e=>{const n=e.parentNode;n&&n.removeChild(e)},createElement:(e,n,o,a)=>{const r=n==="svg"?Gn.createElementNS(Dd,e):n==="mathml"?Gn.createElementNS(Ld,e):o?Gn.createElement(e,{is:o}):Gn.createElement(e);return e==="select"&&a&&a.multiple!=null&&r.setAttribute("multiple",a.multiple),r},createText:e=>Gn.createTextNode(e),createComment:e=>Gn.createComment(e),setText:(e,n)=>{e.nodeValue=n},setElementText:(e,n)=>{e.textContent=n},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>Gn.querySelector(e),setScopeId(e,n){e.setAttribute(n,"")},insertStaticContent(e,n,o,a,r,i){const s=o?o.previousSibling:n.lastChild;if(r&&(r===i||r.nextSibling))for(;n.insertBefore(r.cloneNode(!0),o),!(r===i||!(r=r.nextSibling)););else{xi.innerHTML=nc(a==="svg"?`<svg>${e}</svg>`:a==="mathml"?`<math>${e}</math>`:e);const l=xi.content;if(a==="svg"||a==="mathml"){const c=l.firstChild;for(;c.firstChild;)l.appendChild(c.firstChild);l.removeChild(c)}n.insertBefore(l,o)}return[s?s.nextSibling:n.firstChild,o?o.previousSibling:n.lastChild]}},oo="transition",Qo="animation",ya=Symbol("_vtc"),oc={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},qd=Je({},Nl,oc),Md=e=>(e.displayName="Transition",e.props=qd,e),Fd=Md((e,{slots:n})=>Fo(ju,$d(e),n)),ho=(e,n=[])=>{_e(e)?e.forEach(o=>o(...n)):e&&e(...n)},Bi=e=>e?_e(e)?e.some(n=>n.length>1):e.length>1:!1;function $d(e){const n={};for(const T in e)T in oc||(n[T]=e[T]);if(e.css===!1)return n;const{name:o="v",type:a,duration:r,enterFromClass:i=`${o}-enter-from`,enterActiveClass:s=`${o}-enter-active`,enterToClass:l=`${o}-enter-to`,appearFromClass:c=i,appearActiveClass:u=s,appearToClass:d=l,leaveFromClass:m=`${o}-leave-from`,leaveActiveClass:f=`${o}-leave-active`,leaveToClass:v=`${o}-leave-to`}=e,B=zd(r),w=B&&B[0],x=B&&B[1],{onBeforeEnter:E,onEnter:N,onEnterCancelled:q,onLeave:D,onLeaveCancelled:de,onBeforeAppear:re=E,onAppear:z=N,onAppearCancelled:te=q}=n,ae=(T,F,Y,ue)=>{T._enterCancelled=ue,vo(T,F?d:l),vo(T,F?u:s),Y&&Y()},ge=(T,F)=>{T._isLeaving=!1,vo(T,m),vo(T,v),vo(T,f),F&&F()},X=T=>(F,Y)=>{const ue=T?z:N,J=()=>ae(F,T,Y);ho(ue,[F,J]),Ti(()=>{vo(F,T?c:i),Un(F,T?d:l),Bi(ue)||Ri(F,a,w,J)})};return Je(n,{onBeforeEnter(T){ho(E,[T]),Un(T,i),Un(T,s)},onBeforeAppear(T){ho(re,[T]),Un(T,c),Un(T,u)},onEnter:X(!1),onAppear:X(!0),onLeave(T,F){T._isLeaving=!0;const Y=()=>ge(T,F);Un(T,m),T._enterCancelled?(Un(T,f),Ei(T)):(Ei(T),Un(T,f)),Ti(()=>{T._isLeaving&&(vo(T,m),Un(T,v),Bi(D)||Ri(T,a,x,Y))}),ho(D,[T,Y])},onEnterCancelled(T){ae(T,!1,void 0,!0),ho(q,[T])},onAppearCancelled(T){ae(T,!0,void 0,!0),ho(te,[T])},onLeaveCancelled(T){ge(T),ho(de,[T])}})}function zd(e){if(e==null)return null;if(Le(e))return[Cr(e.enter),Cr(e.leave)];{const n=Cr(e);return[n,n]}}function Cr(e){return Kc(e)}function Un(e,n){n.split(/\s+/).forEach(o=>o&&e.classList.add(o)),(e[ya]||(e[ya]=new Set)).add(n)}function vo(e,n){n.split(/\s+/).forEach(a=>a&&e.classList.remove(a));const o=e[ya];o&&(o.delete(n),o.size||(e[ya]=void 0))}function Ti(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}let Hd=0;function Ri(e,n,o,a){const r=e._endId=++Hd,i=()=>{r===e._endId&&a()};if(o!=null)return setTimeout(i,o);const{type:s,timeout:l,propCount:c}=Ud(e,n);if(!s)return a();const u=s+"end";let d=0;const m=()=>{e.removeEventListener(u,f),i()},f=v=>{v.target===e&&++d>=c&&m()};setTimeout(()=>{d<c&&m()},l+1),e.addEventListener(u,f)}function Ud(e,n){const o=window.getComputedStyle(e),a=B=>(o[B]||"").split(", "),r=a(`${oo}Delay`),i=a(`${oo}Duration`),s=Si(r,i),l=a(`${Qo}Delay`),c=a(`${Qo}Duration`),u=Si(l,c);let d=null,m=0,f=0;n===oo?s>0&&(d=oo,m=s,f=i.length):n===Qo?u>0&&(d=Qo,m=u,f=c.length):(m=Math.max(s,u),d=m>0?s>u?oo:Qo:null,f=d?d===oo?i.length:c.length:0);const v=d===oo&&/\b(?:transform|all)(?:,|$)/.test(a(`${oo}Property`).toString());return{type:d,timeout:m,propCount:f,hasTransform:v}}function Si(e,n){for(;e.length<n.length;)e=e.concat(e);return Math.max(...n.map((o,a)=>wi(o)+wi(e[a])))}function wi(e){return e==="auto"?0:Number(e.slice(0,-1).replace(",","."))*1e3}function Ei(e){return(e?e.ownerDocument:document).body.offsetHeight}function Kd(e,n,o){const a=e[ya];a&&(n=(n?[n,...a]:[...a]).join(" ")),n==null?e.removeAttribute("class"):o?e.setAttribute("class",n):e.className=n}const er=Symbol("_vod"),ac=Symbol("_vsh"),Ci={name:"show",beforeMount(e,{value:n},{transition:o}){e[er]=e.style.display==="none"?"":e.style.display,o&&n?o.beforeEnter(e):Xo(e,n)},mounted(e,{value:n},{transition:o}){o&&n&&o.enter(e)},updated(e,{value:n,oldValue:o},{transition:a}){!n!=!o&&(a?n?(a.beforeEnter(e),Xo(e,!0),a.enter(e)):a.leave(e,()=>{Xo(e,!1)}):Xo(e,n))},beforeUnmount(e,{value:n}){Xo(e,n)}};function Xo(e,n){e.style.display=n?e[er]:"none",e[ac]=!n}const Gd=Symbol(""),Wd=/(?:^|;)\s*display\s*:/;function Yd(e,n,o){const a=e.style,r=$e(o);let i=!1;if(o&&!r){if(n)if($e(n))for(const s of n.split(";")){const l=s.slice(0,s.indexOf(":")).trim();o[l]==null&&aa(a,l,"")}else for(const s in n)o[s]==null&&aa(a,s,"");for(const s in o){s==="display"&&(i=!0);const l=o[s];l!=null?Qd(e,s,!$e(n)&&n?n[s]:void 0,l)||aa(a,s,l):aa(a,s,"")}}else if(r){if(n!==o){const s=a[Gd];s&&(o+=";"+s),a.cssText=o,i=Wd.test(o)}}else n&&e.removeAttribute("style");er in e&&(e[er]=i?a.display:"",e[ac]&&(a.display="none"))}const Ii=/\s*!important$/;function aa(e,n,o){if(_e(o))o.forEach(a=>aa(e,n,a));else if(o==null&&(o=""),n.startsWith("--"))e.setProperty(n,o);else{const a=Jd(e,n);Ii.test(o)?e.setProperty(So(a),o.replace(Ii,""),"important"):e[a]=o}}const Oi=["Webkit","Moz","ms"],Ir={};function Jd(e,n){const o=Ir[n];if(o)return o;let a=mn(n);if(a!=="filter"&&a in e)return Ir[n]=a;a=lr(a);for(let r=0;r<Oi.length;r++){const i=Oi[r]+a;if(i in e)return Ir[n]=i}return n}function Qd(e,n,o,a){return e.tagName==="TEXTAREA"&&(n==="width"||n==="height")&&$e(a)&&o===a}const Pi="http://www.w3.org/1999/xlink";function ki(e,n,o,a,r,i=Xc(n)){a&&n.startsWith("xlink:")?o==null?e.removeAttributeNS(Pi,n.slice(6,n.length)):e.setAttributeNS(Pi,n,o):o==null||i&&!Gs(o)?e.removeAttribute(n):e.setAttribute(n,i?"":In(o)?String(o):o)}function Vi(e,n,o,a,r){if(n==="innerHTML"||n==="textContent"){o!=null&&(e[n]=n==="innerHTML"?nc(o):o);return}const i=e.tagName;if(n==="value"&&i!=="PROGRESS"&&!i.includes("-")){const l=i==="OPTION"?e.getAttribute("value")||"":e.value,c=o==null?e.type==="checkbox"?"on":"":String(o);(l!==c||!("_value"in e))&&(e.value=c),o==null&&e.removeAttribute(n),e._value=o;return}let s=!1;if(o===""||o==null){const l=typeof e[n];l==="boolean"?o=Gs(o):o==null&&l==="string"?(o="",s=!0):l==="number"&&(o=0,s=!0)}try{e[n]=o}catch{}s&&e.removeAttribute(r||n)}function lo(e,n,o,a){e.addEventListener(n,o,a)}function Xd(e,n,o,a){e.removeEventListener(n,o,a)}const Di=Symbol("_vei");function Zd(e,n,o,a,r=null){const i=e[Di]||(e[Di]={}),s=i[n];if(a&&s)s.value=a;else{const[l,c]=om(n);if(a){const u=i[n]=tm(a,r);lo(e,l,u,c)}else s&&(Xd(e,l,s,c),i[n]=void 0)}}const em=/(Once|Passive|Capture)$/,nm=/^on:?(?:Once|Passive|Capture)$/;function om(e){let n,o;for(;(o=e.match(em))&&!nm.test(e);)n||(n={}),e=e.slice(0,e.length-o[1].length),n[o[1].toLowerCase()]=!0;return[e[2]===":"?e.slice(3):So(e.slice(2)),n]}let Or=0;const am=Promise.resolve(),rm=()=>Or||(am.then(()=>Or=0),Or=Date.now());function tm(e,n){const o=a=>{if(!a._vts)a._vts=Date.now();else if(a._vts<=o.attached)return;const r=o.value;if(_e(r)){const i=a.stopImmediatePropagation;a.stopImmediatePropagation=()=>{i.call(a),a._stopped=!0};const s=r.slice(),l=[a];for(let c=0;c<s.length&&!a._stopped;c++){const u=s[c];u&&Tn(u,n,5,l)}}else Tn(r,n,5,[a])};return o.value=e,o.attached=rm(),o}const Li=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,im=(e,n,o,a,r,i)=>{const s=r==="svg";n==="class"?Kd(e,a,s):n==="style"?Yd(e,o,a):tr(n)?ir(n)||Zd(e,n,o,a,i):(n[0]==="."?(n=n.slice(1),!0):n[0]==="^"?(n=n.slice(1),!1):sm(e,n,a,s))?(Vi(e,n,a),!e.tagName.includes("-")&&(n==="value"||n==="checked"||n==="selected")&&ki(e,n,a,s,i,n!=="value")):e._isVueCE&&(lm(e,n)||e._def.__asyncLoader&&(/[A-Z]/.test(n)||!$e(a)))?Vi(e,mn(n),a,i,n):(n==="true-value"?e._trueValue=a:n==="false-value"&&(e._falseValue=a),ki(e,n,a,s))};function sm(e,n,o,a){if(a)return!!(n==="innerHTML"||n==="textContent"||n in e&&Li(n)&&xe(o));if(n==="spellcheck"||n==="draggable"||n==="translate"||n==="autocorrect"||n==="sandbox"&&e.tagName==="IFRAME"||n==="form"||n==="list"&&e.tagName==="INPUT"||n==="type"&&e.tagName==="TEXTAREA")return!1;if(n==="width"||n==="height"){const r=e.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return Li(n)&&$e(o)?!1:n in e}function lm(e,n){const o=e._def.props;if(!o)return!1;const a=mn(n);return Array.isArray(o)?o.some(r=>mn(r)===a):Object.keys(o).some(r=>mn(r)===a)}const $o=e=>{const n=e.props["onUpdate:modelValue"]||!1;return _e(n)?o=>Fa(n,o):n};function cm(e){e.target.composing=!0}function ji(e){const n=e.target;n.composing&&(n.composing=!1,n.dispatchEvent(new Event("input")))}const qn=Symbol("_assign"),La=Symbol("_initialValue");function Pr(e,n,o){return n&&(e=e.trim()),o&&(e=cr(e)),e}const Aa={created(e,{modifiers:{lazy:n,trim:o,number:a}},r){e.parentNode&&(e.type==="text"?e[La]=e.defaultValue.replace(/[\r\n]/g,""):e.type==="textarea"&&(e[La]=e.defaultValue.replace(/\r\n?/g,`
`))),e[qn]=$o(r);const i=a||r.props&&r.props.type==="number";lo(e,n?"change":"input",s=>{s.target.composing||e[qn](Pr(e.value,o,i))}),(o||i)&&lo(e,"change",()=>{e.value=Pr(e.value,o,i)}),n||(lo(e,"compositionstart",cm),lo(e,"compositionend",ji),lo(e,"change",ji))},mounted(e,{value:n,modifiers:{trim:o,number:a}}){const r=n??"",i=e[La];delete e[La],i!==void 0&&(e.type==="text"||e.type==="textarea")&&e.value!==i?e[qn](Pr(e.value,o,a)):e.value=r},beforeUpdate(e,{value:n,oldValue:o,modifiers:{lazy:a,trim:r,number:i}},s){if(e[qn]=$o(s),e.composing)return;const l=(i||e.type==="number")&&!/^0\d/.test(e.value)?cr(e.value):e.value,c=n??"";if(l===c)return;const u=e.getRootNode();(u instanceof Document||u instanceof ShadowRoot)&&u.activeElement===e&&e.type!=="range"&&(a&&n===o||r&&e.value.trim()===c)||(e.value=c)}},um={deep:!0,created(e,n,o){e[qn]=$o(o),lo(e,"change",()=>{const a=e._modelValue,r=Na(e),i=e.checked,s=e[qn];if(_e(a)){const l=kt(a,r),c=l!==-1;if(i&&!c)s(a.concat(r));else if(!i&&c){const u=[...a];u.splice(l,1),s(u)}}else if(Uo(a)){const l=new Set(a);i?l.add(r):l.delete(r),s(l)}else s(rc(e,i))})},mounted:qi,beforeUpdate(e,n,o){e[qn]=$o(o),qi(e,n,o)}};function qi(e,{value:n,oldValue:o},a){e._modelValue=n;let r;if(_e(n))r=kt(n,a.props.value)>-1;else if(Uo(n))r=n.has(a.props.value);else{if(n===o)return;r=Ko(n,rc(e,!0))}e.checked!==r&&(e.checked=r)}const kr={deep:!0,created(e,{value:n,modifiers:{number:o}},a){e._modelValue=n,lo(e,"change",()=>{const r=Array.prototype.filter.call(e.options,i=>i.selected).map(i=>o?cr(Na(i)):Na(i));e[qn](e.multiple?Uo(e._modelValue)?new Set(r):r:r[0]),e._assigning=!0,Mo(()=>{e._assigning=!1})}),e[qn]=$o(a)},mounted(e,{value:n}){Mi(e,n)},beforeUpdate(e,{value:n},o){e._modelValue=n,e[qn]=$o(o)},updated(e,{value:n}){e._assigning||Mi(e,n)}};function Mi(e,n){const o=e.multiple,a=_e(n);if(!(o&&!a&&!Uo(n))){for(let r=0,i=e.options.length;r<i;r++){const s=e.options[r],l=Na(s);if(o)if(a){const c=typeof l;c==="string"||c==="number"?s.selected=n.some(u=>String(u)===String(l)):s.selected=kt(n,l)>-1}else s.selected=n.has(l);else if(Ko(Na(s),n)){e.selectedIndex!==r&&(e.selectedIndex=r);return}}!o&&e.selectedIndex!==-1&&(e.selectedIndex=-1)}}function Na(e){return"_value"in e?e._value:e.value}function rc(e,n){const o=n?"_trueValue":"_falseValue";return o in e?e[o]:n}const dm=["ctrl","shift","alt","meta"],mm={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&e.button!==0,middle:e=>"button"in e&&e.button!==1,right:e=>"button"in e&&e.button!==2,exact:(e,n)=>dm.some(o=>e[`${o}Key`]&&!n.includes(o))},co=(e,n)=>{if(!e)return e;const o=e._withMods||(e._withMods={}),a=n.join(".");return o[a]||(o[a]=((r,...i)=>{for(let s=0;s<n.length;s++){const l=mm[n[s]];if(l&&l(r,n))return}return e(r,...i)}))},pm=Je({patchProp:im},jd);let Fi;function fm(){return Fi||(Fi=_d(pm))}const hm=((...e)=>{const n=fm().createApp(...e),{mount:o}=n;return n.mount=a=>{const r=gm(a);if(!r)return;const i=n._component;!xe(i)&&!i.render&&!i.template&&(i.template=r.innerHTML),r.nodeType===1&&(r.textContent="");const s=o(r,!1,vm(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),s},n});function vm(e){if(e instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&e instanceof MathMLElement)return"mathml"}function gm(e){return $e(e)?document.querySelector(e):e}const bm="modulepreload",_m=function(e){return"/Extensao-26.2/"+e},$i={},ym=function(n,o,a){let r=Promise.resolve();if(o&&o.length>0){let u=function(d){return Promise.all(d.map(m=>Promise.resolve(m).then(f=>({status:"fulfilled",value:f}),f=>({status:"rejected",reason:f}))))};var s=u;document.getElementsByTagName("link");const l=document.querySelector("meta[property=csp-nonce]"),c=l?.nonce||l?.getAttribute("nonce");r=u(o.map(d=>{if(d=_m(d),d in $i)return;$i[d]=!0;const m=d.endsWith(".css"),f=m?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${d}"]${f}`))return;const v=document.createElement("link");if(v.rel=m?"stylesheet":bm,m||(v.as="script"),v.crossOrigin="",v.href=d,c&&v.setAttribute("nonce",c),document.head.appendChild(v),m)return new Promise((B,w)=>{v.addEventListener("load",B),v.addEventListener("error",()=>w(new Error(`Unable to preload CSS for ${d}`)))})}))}function i(l){const c=new Event("vite:preloadError",{cancelable:!0});if(c.payload=l,window.dispatchEvent(c),!c.defaultPrevented)throw l}return r.then(l=>{for(const c of l||[])c.status==="rejected"&&i(c.reason);return n().catch(i)})};function Am(e={}){const{immediate:n=!1,onNeedReload:o,onNeedRefresh:a,onOfflineReady:r,onRegistered:i,onRegisteredSW:s,onRegisterError:l}=e;let c,u;const d=async(f=!0)=>{await u};async function m(){if("serviceWorker"in navigator){if(c=await ym(async()=>{const{Workbox:f}=await import("./workbox-window.prod.es5-BBnX5xw4.js");return{Workbox:f}},[]).then(({Workbox:f})=>new f("/Extensao-26.2/sw.js",{scope:"/Extensao-26.2/",type:"classic"})).catch(f=>{l?.(f)}),!c)return;c.addEventListener("activated",f=>{(f.isUpdate||f.isExternal)&&(o?o():window.location.reload())}),c.addEventListener("installed",f=>{f.isUpdate||r?.()}),c.register({immediate:n}).then(f=>{s?s("/Extensao-26.2/sw.js",f):i?.(f)}).catch(f=>{l?.(f)})}}return u=m(),d}const Nm="acessibilidade-checker",xm=2,ln=Object.freeze({projects:"projects",environments:"environments",elements:"elements",evaluations:"evaluations",ruleSets:"ruleSets"});function Io(e){return new Promise((n,o)=>{e.onsuccess=()=>n(e.result),e.onerror=()=>o(e.error??new Error("Falha no IndexedDB."))})}function Bm(e=globalThis.indexedDB){if(!e)return Promise.reject(new Error("IndexedDB não está disponível neste ambiente."));const n=e.open(Nm,xm);return n.onupgradeneeded=()=>{const o=n.result;if(o.objectStoreNames.contains(ln.projects)||o.createObjectStore(ln.projects,{keyPath:"id"}),o.objectStoreNames.contains(ln.environments)||o.createObjectStore(ln.environments,{keyPath:"id"}).createIndex("projectId","projectId",{unique:!1}),o.objectStoreNames.contains(ln.elements)||o.createObjectStore(ln.elements,{keyPath:"id"}).createIndex("environmentId","environmentId",{unique:!1}),!o.objectStoreNames.contains(ln.evaluations)){const a=o.createObjectStore(ln.evaluations,{keyPath:"id"});a.createIndex("elementId","elementId",{unique:!1}),a.createIndex("evaluatedAt","evaluatedAt",{unique:!1})}o.objectStoreNames.contains(ln.ruleSets)||o.createObjectStore(ln.ruleSets,{keyPath:"id"})},Io(n)}async function Zo(e,n,o,a){const r=e.transaction(n,o),i=r.objectStore(n),s=await a(i);return await new Promise((l,c)=>{r.oncomplete=l,r.onabort=r.onerror=()=>c(r.error??new Error("Transação IndexedDB não concluída."))}),s}class Ea{constructor(n,o){this.database=n,this.storeName=o}get(n){return Zo(this.database,this.storeName,"readonly",o=>Io(o.get(n)))}getAll(){return Zo(this.database,this.storeName,"readonly",n=>Io(n.getAll()))}getAllBy(n,o){return Zo(this.database,this.storeName,"readonly",a=>Io(a.index(n).getAll(o)))}put(n){return Zo(this.database,this.storeName,"readwrite",async o=>(await Io(o.put(n)),n))}delete(n){return Zo(this.database,this.storeName,"readwrite",o=>Io(o.delete(n)))}}class Tm extends Ea{constructor(n){super(n,ln.elements)}getByEnvironmentId(n){return this.getAllBy("environmentId",n)}}class Rm extends Ea{constructor(n){super(n,ln.environments)}getByProjectId(n){return this.getAllBy("projectId",n)}}class Sm extends Ea{constructor(n){super(n,ln.evaluations)}getByElementId(n){return this.getAllBy("elementId",n)}}class wm extends Ea{constructor(n){super(n,ln.projects)}}class Em extends Ea{constructor(n){super(n,ln.ruleSets)}}const Cm=new Set([">=","<=",">","<","==","!="]);function Ha(e,n,o){switch(n){case">=":return e>=o;case"<=":return e<=o;case">":return e>o;case"<":return e<o;case"==":return e===o;case"!=":return e!==o;default:throw new Error(`Operador não suportado: ${n}`)}}function Im(e,n){return n.obrigatorio&&(e==null||e==="")?{valid:!1,reason:"Campo obrigatório não preenchido."}:e==null||e===""?{valid:!0}:n.tipo==="number"&&typeof e!="number"?{valid:!1,reason:"O valor deve ser numérico."}:n.tipo==="boolean"&&typeof e!="boolean"?{valid:!1,reason:"O valor deve ser booleano."}:{valid:!0}}class Om{evaluate(n,o,a={}){return n.map(r=>this.evaluateRule(r,o,a))}evaluateRule(n,o,a){const r=a[n.parametro],i=o[n.parametro];if(!r)return{id:n.id,status:"erro",mensagem:`Parâmetro não definido: ${n.parametro}`};const s=Im(i,r);if(!s.valid)return{id:n.id,nome:n.nome,status:"invalido",mensagem:s.reason,referencia:n.referencia};if(i==null||i==="")return{id:n.id,nome:n.nome,status:"nao_avaliado",referencia:n.referencia};if(n.tipo==="checklist")return{id:n.id,nome:n.nome,status:"manual",valor:i,referencia:n.referencia};if(n.tipo==="conditional")return this.evaluateConditional(n,o,a);const l=Ha(i,n.operador,n.valor);return{id:n.id,nome:n.nome,status:l?"conforme":"nao_conforme",valorInformado:i,valorEsperado:n.valor,unidade:r.unidade,referencia:n.referencia}}evaluateConditional(n,o,a){for(const r of n.condicoes??[]){const i=o[n.parametro];if(r.quando&&Ha(i,r.quando.operador,r.quando.valor)){if(r.resultado)return{id:n.id,nome:n.nome,status:r.resultado,valorInformado:i,referencia:n.referencia,mensagem:r.mensagem};if(r.verificar){const s=o[r.verificar.parametro],l=Ha(s,r.verificar.operador,r.verificar.valor);return{id:n.id,nome:n.nome,status:l?"conforme":"nao_conforme",valorInformado:s,valorEsperado:r.verificar.valor,referencia:n.referencia}}}}return{id:n.id,nome:n.nome,status:"nao_avaliado",referencia:n.referencia}}}function Nn(e,n){if(typeof e!="string"||e.trim()==="")throw new TypeError(`${n} deve ser um texto não vazio.`);return e.trim()}function Ca(){return typeof globalThis.crypto?.randomUUID=="function"?globalThis.crypto.randomUUID():`${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`}function Fn(e=new Date,n="data"){const o=e instanceof Date?e:new Date(e);if(Number.isNaN(o.getTime()))throw new TypeError(`${n} deve ser uma data válida.`);return o.toISOString()}function Tt(e){return typeof structuredClone=="function"?structuredClone(e):JSON.parse(JSON.stringify(e))}function Vr({id:e=Ca(),elementId:n,data:o,result:a,evaluatedAt:r=new Date}={}){if(o===void 0||a===void 0)throw new TypeError("data e result são obrigatórios.");return{id:Nn(e,"id"),elementId:Nn(n,"elementId"),data:Tt(o),result:Tt(a),evaluatedAt:Fn(r,"evaluatedAt")}}const Pm=["nao_conforme","erro","invalido"],km=["atencao","manual","nao_avaliado"];function tc(e){const n=e[0]?.result;return n?.length?n.some(o=>Pm.includes(o.status))?"nao_conforme":n.some(o=>km.includes(o.status))?"nao_avaliado":"conforme":"nao_avaliado"}class Vm{constructor({elementRepository:n,environmentRepository:o,evaluationRepository:a,ruleEngine:r=new Om}){this.elementRepository=n,this.environmentRepository=o,this.evaluationRepository=a,this.ruleEngine=r}async evaluateElement({elementId:n,checklist:o,data:a,evaluatedAt:r}){if(!await this.elementRepository.get(n))throw new Error("Elemento não encontrado.");const s=this.ruleEngine.evaluate(o.regras??[],a,o.parametros??{}),l=Vr({elementId:n,data:a,result:s,evaluatedAt:r});return this.evaluationRepository.put(l)}async saveElementData({elementId:n,data:o,savedAt:a}){if(!await this.elementRepository.get(n))throw new Error("Elemento não encontrado.");const i=Vr({elementId:n,data:o,result:[],evaluatedAt:a});return this.evaluationRepository.put(i)}evaluateTransientElement({elementId:n,checklist:o,data:a,evaluatedAt:r}){const i=this.ruleEngine.evaluate(o.regras??[],a,o.parametros??{});return Vr({elementId:n,data:a,result:i,evaluatedAt:r})}async listEvaluations(n){return(await this.evaluationRepository.getByElementId(n)).sort((a,r)=>r.evaluatedAt.localeCompare(a.evaluatedAt))}async getEnvironmentSummary(n){const o=await this.elementRepository.getByEnvironmentId(n);return this.#e(o)}async getProjectSummary(n){if(!this.environmentRepository)throw new Error("Repositório de ambientes não configurado.");const o=await this.environmentRepository.getByProjectId(n),a=await Promise.all(o.map(r=>this.elementRepository.getByEnvironmentId(r.id)));return this.#e(a.flat())}async#e(n){const o=await Promise.all(n.map(async r=>tc(await this.listEvaluations(r.id)))),a={totalElements:n.length,conforme:0,nao_conforme:0,nao_avaliado:0,pendente:0,score:0,overallStatus:"nao_avaliado"};for(const r of o)a[r]+=1;return a.pendente=a.nao_avaliado,a.score=a.totalElements?Math.round(a.conforme/a.totalElements*100):0,a.nao_conforme>0?a.overallStatus="nao_conforme":a.nao_avaliado===0&&a.totalElements>0&&(a.overallStatus="conforme"),a}}function zi({id:e=Ca(),environmentId:n,name:o,type:a,rule:r,createdAt:i=new Date,updatedAt:s=i}={}){return{id:Nn(e,"id"),environmentId:Nn(n,"environmentId"),name:Nn(o,"name"),type:Nn(a,"type"),rule:Nn(r,"rule"),createdAt:Fn(i,"createdAt"),updatedAt:Fn(s,"updatedAt")}}function Hi({id:e=Ca(),projectId:n,name:o,createdAt:a=new Date,updatedAt:r=a}={}){return{id:Nn(e,"id"),projectId:Nn(n,"projectId"),name:Nn(o,"name"),createdAt:Fn(a,"createdAt"),updatedAt:Fn(r,"updatedAt")}}function Ui({id:e=Ca(),name:n,description:o="",createdAt:a=new Date,updatedAt:r=a}={}){return{id:Nn(e,"id"),name:Nn(n,"name"),description:typeof o=="string"?o.trim():"",createdAt:Fn(a,"createdAt"),updatedAt:Fn(r,"updatedAt")}}class Dm{constructor({projectRepository:n,environmentRepository:o,elementRepository:a}){this.projectRepository=n,this.environmentRepository=o,this.elementRepository=a}async createProject(n){const o=Ui(n);return this.projectRepository.put(o)}listProjects(){return this.projectRepository.getAll()}getProject(n){return this.projectRepository.get(n)}async updateProject(n,{name:o,description:a}){const r=await this.#e(this.projectRepository.get(n),"Projeto");return this.projectRepository.put(Ui({...r,name:o,description:a,updatedAt:new Date}))}async renameProject(n,o){const a=await this.#e(this.projectRepository.get(n),"Projeto");return this.updateProject(n,{name:o,description:a.description})}async createEnvironment(n,o){await this.#e(this.projectRepository.get(n),"Projeto");const a=Hi({...o,projectId:n});return this.environmentRepository.put(a)}listEnvironments(n){return this.environmentRepository.getByProjectId(n)}async renameEnvironment(n,o){const a=await this.#e(this.environmentRepository.get(n),"Ambiente");return this.environmentRepository.put(Hi({...a,name:o,updatedAt:new Date}))}async createElement(n,o){await this.#e(this.environmentRepository.get(n),"Ambiente");const a=zi({...o,environmentId:n});return this.elementRepository.put(a)}listElements(n){return this.elementRepository.getByEnvironmentId(n)}async updateElement(n,o){const a=await this.#e(this.elementRepository.get(n),"Elemento");return this.elementRepository.put(zi({...a,...o,id:a.id,environmentId:a.environmentId,createdAt:a.createdAt,updatedAt:Fn(new Date)}))}async#e(n,o){const a=await n;if(!a)throw new Error(`${o} não encontrado.`);return a}}class Lm{constructor({evaluationService:n}){this.evaluationService=n,this.current=null}evaluate({name:n,checklist:o,data:a}){const r={id:Ca(),name:n?.trim()||o.nome,type:o.nome,rule:o.id},i=this.evaluationService.evaluateTransientElement({elementId:r.id,checklist:o,data:a});return this.current={element:r,evaluation:i},this.current}getCurrent(){return this.current}clear(){this.current=null}}const jm=new Set(["checklist","conditional"]);function jo(e){return e!==null&&typeof e=="object"&&!Array.isArray(e)}function ua(e,n,o){(typeof e!="string"||e.trim()==="")&&o.push(`${n} deve ser um texto não vazio.`)}function ic(e,n,o){Cm.has(e)||o.push(`${n} deve ser um operador suportado.`)}function Ki(e,n,o){if(!jo(e)){o.push(`${n} deve ser um objeto.`);return}ic(e.operador,`${n}.operador`,o),"valor"in e||o.push(`${n}.valor é obrigatório.`)}function qm(e,n,o,a){const r=`regras[${n}]`;if(!jo(e)){a.push(`${r} deve ser um objeto.`);return}if(ua(e.id,`${r}.id`,a),ua(e.nome,`${r}.nome`,a),ua(e.parametro,`${r}.parametro`,a),typeof e.parametro=="string"&&!(e.parametro in o)&&a.push(`${r}.parametro deve existir em parametros.`),e.tipo!=="checklist"){if(e.tipo==="conditional"){if(!Array.isArray(e.condicoes)||e.condicoes.length===0){a.push(`${r}.condicoes deve conter ao menos uma condição.`);return}e.condicoes.forEach((i,s)=>{const l=`${r}.condicoes[${s}]`;if(!jo(i)){a.push(`${l} deve ser um objeto.`);return}Ki(i.quando,`${l}.quando`,a);const c=typeof i.resultado=="string"&&i.resultado!=="",u="verificar"in i;c===u&&a.push(`${l} deve informar exatamente resultado ou verificar.`),u&&(Ki(i.verificar,`${l}.verificar`,a),(typeof i.verificar?.parametro!="string"||!(i.verificar.parametro in o))&&a.push(`${l}.verificar.parametro deve existir em parametros.`))});return}e.tipo!==void 0&&!jm.has(e.tipo)&&a.push(`${r}.tipo não é suportado.`),ic(e.operador,`${r}.operador`,a),"valor"in e||a.push(`${r}.valor é obrigatório.`)}}function Mm(e){const n=[];return jo(e)?(ua(e.id,"id",n),ua(e.nome,"nome",n),jo(e.parametros)||n.push("parametros deve ser um objeto."),Array.isArray(e.regras)||n.push("regras deve ser uma lista."),jo(e.parametros)&&Array.isArray(e.regras)&&e.regras.forEach((o,a)=>qm(o,a,e.parametros,n)),{valid:n.length===0,errors:n}):{valid:!1,errors:["O conjunto de regras deve ser um objeto."]}}function Rt(e){const n=Mm(e);if(!n.valid)throw new TypeError(`Conjunto de regras inválido: ${n.errors.join(" ")}`);return e}function Fm(e,{createdAt:n=new Date,updatedAt:o=n}={}){return Rt(e),{...Tt(e),source:"user",createdAt:Fn(n,"createdAt"),updatedAt:Fn(o,"updatedAt")}}function $m(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var en={},ja={},ao={},Gi;function Ia(){if(Gi)return ao;Gi=1;function e(s){return typeof s>"u"||s===null}function n(s){return typeof s=="object"&&s!==null}function o(s){return Array.isArray(s)?s:e(s)?[]:[s]}function a(s,l){if(l){const c=Object.keys(l);for(let u=0,d=c.length;u<d;u+=1){const m=c[u];s[m]=l[m]}}return s}function r(s,l){let c="";for(let u=0;u<l;u+=1)c+=s;return c}function i(s){return s===0&&Number.NEGATIVE_INFINITY===1/s}return ao.isNothing=e,ao.isObject=n,ao.toArray=o,ao.repeat=r,ao.isNegativeZero=i,ao.extend=a,ao}var Dr,Wi;function Oa(){if(Wi)return Dr;Wi=1;function e(o,a){let r="";const i=o.reason||"(unknown reason)";return o.mark?(o.mark.name&&(r+='in "'+o.mark.name+'" '),r+="("+(o.mark.line+1)+":"+(o.mark.column+1)+")",!a&&o.mark.snippet&&(r+=`

`+o.mark.snippet),i+" "+r):i}function n(o,a){Error.call(this),this.name="YAMLException",this.reason=o,this.mark=a,this.message=e(this,!1),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack||""}return n.prototype=Object.create(Error.prototype),n.prototype.constructor=n,n.prototype.toString=function(a){return this.name+": "+e(this,a)},Dr=n,Dr}var Lr,Yi;function zm(){if(Yi)return Lr;Yi=1;const e=Ia();function n(r,i,s,l,c){let u="",d="";const m=Math.floor(c/2)-1;return l-i>m&&(u=" ... ",i=l-m+u.length),s-l>m&&(d=" ...",s=l+m-d.length),{str:u+r.slice(i,s).replace(/\t/g,"→")+d,pos:l-i+u.length}}function o(r,i){return e.repeat(" ",i-r.length)+r}function a(r,i){if(i=Object.create(i||null),!r.buffer)return null;i.maxLength||(i.maxLength=79),typeof i.indent!="number"&&(i.indent=1),typeof i.linesBefore!="number"&&(i.linesBefore=3),typeof i.linesAfter!="number"&&(i.linesAfter=2);const s=/\r?\n|\r|\0/g,l=[0],c=[];let u,d=-1;for(;u=s.exec(r.buffer);)c.push(u.index),l.push(u.index+u[0].length),r.position<=u.index&&d<0&&(d=l.length-2);d<0&&(d=l.length-1);let m="";const f=Math.min(r.line+i.linesAfter,c.length).toString().length,v=i.maxLength-(i.indent+f+3);for(let w=1;w<=i.linesBefore&&!(d-w<0);w++){const x=n(r.buffer,l[d-w],c[d-w],r.position-(l[d]-l[d-w]),v);m=e.repeat(" ",i.indent)+o((r.line-w+1).toString(),f)+" | "+x.str+`
`+m}const B=n(r.buffer,l[d],c[d],r.position,v);m+=e.repeat(" ",i.indent)+o((r.line+1).toString(),f)+" | "+B.str+`
`,m+=e.repeat("-",i.indent+f+3+B.pos)+`^
`;for(let w=1;w<=i.linesAfter&&!(d+w>=c.length);w++){const x=n(r.buffer,l[d+w],c[d+w],r.position-(l[d]-l[d+w]),v);m+=e.repeat(" ",i.indent)+o((r.line+w+1).toString(),f)+" | "+x.str+`
`}return m.replace(/\n$/,"")}return Lr=a,Lr}var jr,Ji;function pn(){if(Ji)return jr;Ji=1;const e=Oa(),n=["kind","multi","resolve","construct","instanceOf","predicate","represent","representName","defaultStyle","styleAliases"],o=["scalar","sequence","mapping"];function a(i){const s={};return i!==null&&Object.keys(i).forEach(function(l){i[l].forEach(function(c){s[String(c)]=l})}),s}function r(i,s){if(s=s||{},Object.keys(s).forEach(function(l){if(n.indexOf(l)===-1)throw new e('Unknown option "'+l+'" is met in definition of "'+i+'" YAML type.')}),this.options=s,this.tag=i,this.kind=s.kind||null,this.resolve=s.resolve||function(){return!0},this.construct=s.construct||function(l){return l},this.instanceOf=s.instanceOf||null,this.predicate=s.predicate||null,this.represent=s.represent||null,this.representName=s.representName||null,this.defaultStyle=s.defaultStyle||null,this.multi=s.multi||!1,this.styleAliases=a(s.styleAliases||null),o.indexOf(this.kind)===-1)throw new e('Unknown kind "'+this.kind+'" is specified for "'+i+'" YAML type.')}return jr=r,jr}var qr,Qi;function sc(){if(Qi)return qr;Qi=1;const e=Oa(),n=pn();function o(i,s){const l=[];return i[s].forEach(function(c){let u=l.length;l.forEach(function(d,m){d.tag===c.tag&&d.kind===c.kind&&d.multi===c.multi&&(u=m)}),l[u]=c}),l}function a(){const i={scalar:{},sequence:{},mapping:{},fallback:{},multi:{scalar:[],sequence:[],mapping:[],fallback:[]}};function s(l){l.multi?(i.multi[l.kind].push(l),i.multi.fallback.push(l)):i[l.kind][l.tag]=i.fallback[l.tag]=l}for(let l=0,c=arguments.length;l<c;l+=1)arguments[l].forEach(s);return i}function r(i){return this.extend(i)}return r.prototype.extend=function(s){let l=[],c=[];if(s instanceof n)c.push(s);else if(Array.isArray(s))c=c.concat(s);else if(s&&(Array.isArray(s.implicit)||Array.isArray(s.explicit)))s.implicit&&(l=l.concat(s.implicit)),s.explicit&&(c=c.concat(s.explicit));else throw new e("Schema.extend argument should be a Type, [ Type ], or a schema definition ({ implicit: [...], explicit: [...] })");l.forEach(function(d){if(!(d instanceof n))throw new e("Specified list of YAML types (or a single Type object) contains a non-Type object.");if(d.loadKind&&d.loadKind!=="scalar")throw new e("There is a non-scalar type in the implicit list of a schema. Implicit resolving of such types is not supported.");if(d.multi)throw new e("There is a multi type in the implicit list of a schema. Multi tags can only be listed as explicit.")}),c.forEach(function(d){if(!(d instanceof n))throw new e("Specified list of YAML types (or a single Type object) contains a non-Type object.")});const u=Object.create(r.prototype);return u.implicit=(this.implicit||[]).concat(l),u.explicit=(this.explicit||[]).concat(c),u.compiledImplicit=o(u,"implicit"),u.compiledExplicit=o(u,"explicit"),u.compiledTypeMap=a(u.compiledImplicit,u.compiledExplicit),u},qr=r,qr}var Mr,Xi;function lc(){if(Xi)return Mr;Xi=1;const e=pn();return Mr=new e("tag:yaml.org,2002:str",{kind:"scalar",construct:function(n){return n!==null?n:""}}),Mr}var Fr,Zi;function cc(){if(Zi)return Fr;Zi=1;const e=pn();return Fr=new e("tag:yaml.org,2002:seq",{kind:"sequence",construct:function(n){return n!==null?n:[]}}),Fr}var $r,es;function uc(){if(es)return $r;es=1;const e=pn();return $r=new e("tag:yaml.org,2002:map",{kind:"mapping",construct:function(n){return n!==null?n:{}}}),$r}var zr,ns;function dc(){if(ns)return zr;ns=1;const e=sc();return zr=new e({explicit:[lc(),cc(),uc()]}),zr}var Hr,os;function mc(){if(os)return Hr;os=1;const e=pn();function n(r){if(r===null)return!0;const i=r.length;return i===1&&r==="~"||i===4&&(r==="null"||r==="Null"||r==="NULL")}function o(){return null}function a(r){return r===null}return Hr=new e("tag:yaml.org,2002:null",{kind:"scalar",resolve:n,construct:o,predicate:a,represent:{canonical:function(){return"~"},lowercase:function(){return"null"},uppercase:function(){return"NULL"},camelcase:function(){return"Null"},empty:function(){return""}},defaultStyle:"lowercase"}),Hr}var Ur,as;function pc(){if(as)return Ur;as=1;const e=pn();function n(r){if(r===null)return!1;const i=r.length;return i===4&&(r==="true"||r==="True"||r==="TRUE")||i===5&&(r==="false"||r==="False"||r==="FALSE")}function o(r){return r==="true"||r==="True"||r==="TRUE"}function a(r){return Object.prototype.toString.call(r)==="[object Boolean]"}return Ur=new e("tag:yaml.org,2002:bool",{kind:"scalar",resolve:n,construct:o,predicate:a,represent:{lowercase:function(r){return r?"true":"false"},uppercase:function(r){return r?"TRUE":"FALSE"},camelcase:function(r){return r?"True":"False"}},defaultStyle:"lowercase"}),Ur}var Kr,rs;function fc(){if(rs)return Kr;rs=1;const e=Ia(),n=pn();function o(u){return u>=48&&u<=57||u>=65&&u<=70||u>=97&&u<=102}function a(u){return u>=48&&u<=55}function r(u){return u>=48&&u<=57}function i(u){if(u===null)return!1;const d=u.length;let m=0,f=!1;if(!d)return!1;let v=u[m];if((v==="-"||v==="+")&&(v=u[++m]),v==="0"){if(m+1===d)return!0;if(v=u[++m],v==="b"){for(m++;m<d;m++){if(v=u[m],v!=="0"&&v!=="1")return!1;f=!0}return f&&isFinite(s(u))}if(v==="x"){for(m++;m<d;m++){if(!o(u.charCodeAt(m)))return!1;f=!0}return f&&isFinite(s(u))}if(v==="o"){for(m++;m<d;m++){if(!a(u.charCodeAt(m)))return!1;f=!0}return f&&isFinite(s(u))}}for(;m<d;m++){if(!r(u.charCodeAt(m)))return!1;f=!0}return f?isFinite(s(u)):!1}function s(u){let d=u,m=1,f=d[0];if((f==="-"||f==="+")&&(f==="-"&&(m=-1),d=d.slice(1),f=d[0]),d==="0")return 0;if(f==="0"){if(d[1]==="b")return m*parseInt(d.slice(2),2);if(d[1]==="x")return m*parseInt(d.slice(2),16);if(d[1]==="o")return m*parseInt(d.slice(2),8)}return m*parseInt(d,10)}function l(u){return s(u)}function c(u){return Object.prototype.toString.call(u)==="[object Number]"&&u%1===0&&!e.isNegativeZero(u)}return Kr=new n("tag:yaml.org,2002:int",{kind:"scalar",resolve:i,construct:l,predicate:c,represent:{binary:function(u){return u>=0?"0b"+u.toString(2):"-0b"+u.toString(2).slice(1)},octal:function(u){return u>=0?"0o"+u.toString(8):"-0o"+u.toString(8).slice(1)},decimal:function(u){return u.toString(10)},hexadecimal:function(u){return u>=0?"0x"+u.toString(16).toUpperCase():"-0x"+u.toString(16).toUpperCase().slice(1)}},defaultStyle:"decimal",styleAliases:{binary:[2,"bin"],octal:[8,"oct"],decimal:[10,"dec"],hexadecimal:[16,"hex"]}}),Kr}var Gr,ts;function hc(){if(ts)return Gr;ts=1;const e=Ia(),n=pn(),o=new RegExp("^(?:[-+]?(?:[0-9]+)(?:\\.[0-9]*)?(?:[eE][-+]?[0-9]+)?|\\.[0-9]+(?:[eE][-+]?[0-9]+)?|[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$"),a=new RegExp("^(?:[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$");function r(u){return u===null||!o.test(u)?!1:isFinite(parseFloat(u,10))?!0:a.test(u)}function i(u){let d=u.toLowerCase();const m=d[0]==="-"?-1:1;return"+-".indexOf(d[0])>=0&&(d=d.slice(1)),d===".inf"?m===1?Number.POSITIVE_INFINITY:Number.NEGATIVE_INFINITY:d===".nan"?NaN:m*parseFloat(d,10)}const s=/^[-+]?[0-9]+e/;function l(u,d){if(isNaN(u))switch(d){case"lowercase":return".nan";case"uppercase":return".NAN";case"camelcase":return".NaN"}else if(Number.POSITIVE_INFINITY===u)switch(d){case"lowercase":return".inf";case"uppercase":return".INF";case"camelcase":return".Inf"}else if(Number.NEGATIVE_INFINITY===u)switch(d){case"lowercase":return"-.inf";case"uppercase":return"-.INF";case"camelcase":return"-.Inf"}else if(e.isNegativeZero(u))return"-0.0";const m=u.toString(10);return s.test(m)?m.replace("e",".e"):m}function c(u){return Object.prototype.toString.call(u)==="[object Number]"&&(u%1!==0||e.isNegativeZero(u))}return Gr=new n("tag:yaml.org,2002:float",{kind:"scalar",resolve:r,construct:i,predicate:c,represent:l,defaultStyle:"lowercase"}),Gr}var Wr,is;function vc(){return is||(is=1,Wr=dc().extend({implicit:[mc(),pc(),fc(),hc()]})),Wr}var Yr,ss;function gc(){return ss||(ss=1,Yr=vc()),Yr}var Jr,ls;function bc(){if(ls)return Jr;ls=1;const e=pn(),n=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9])-([0-9][0-9])$"),o=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9]?)-([0-9][0-9]?)(?:[Tt]|[ \\t]+)([0-9][0-9]?):([0-9][0-9]):([0-9][0-9])(?:\\.([0-9]*))?(?:[ \\t]*(Z|([-+])([0-9][0-9]?)(?::([0-9][0-9]))?))?$");function a(s){return s===null?!1:n.exec(s)!==null||o.exec(s)!==null}function r(s){let l=0,c=null,u=n.exec(s);if(u===null&&(u=o.exec(s)),u===null)throw new Error("Date resolve error");const d=+u[1],m=+u[2]-1,f=+u[3];if(!u[4])return new Date(Date.UTC(d,m,f));const v=+u[4],B=+u[5],w=+u[6];if(u[7]){for(l=u[7].slice(0,3);l.length<3;)l+="0";l=+l}if(u[9]){const E=+u[10],N=+(u[11]||0);c=(E*60+N)*6e4,u[9]==="-"&&(c=-c)}const x=new Date(Date.UTC(d,m,f,v,B,w,l));return c&&x.setTime(x.getTime()-c),x}function i(s){return s.toISOString()}return Jr=new e("tag:yaml.org,2002:timestamp",{kind:"scalar",resolve:a,construct:r,instanceOf:Date,represent:i}),Jr}var Qr,cs;function _c(){if(cs)return Qr;cs=1;const e=pn();function n(o){return o==="<<"||o===null}return Qr=new e("tag:yaml.org,2002:merge",{kind:"scalar",resolve:n}),Qr}var Xr,us;function yc(){if(us)return Xr;us=1;const e=pn(),n=`ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=
\r`;function o(s){if(s===null)return!1;let l=0;const c=s.length,u=n;for(let d=0;d<c;d++){const m=u.indexOf(s.charAt(d));if(!(m>64)){if(m<0)return!1;l+=6}}return l%8===0}function a(s){const l=s.replace(/[\r\n=]/g,""),c=l.length,u=n;let d=0;const m=[];for(let v=0;v<c;v++)v%4===0&&v&&(m.push(d>>16&255),m.push(d>>8&255),m.push(d&255)),d=d<<6|u.indexOf(l.charAt(v));const f=c%4*6;return f===0?(m.push(d>>16&255),m.push(d>>8&255),m.push(d&255)):f===18?(m.push(d>>10&255),m.push(d>>2&255)):f===12&&m.push(d>>4&255),new Uint8Array(m)}function r(s){let l="",c=0;const u=s.length,d=n;for(let f=0;f<u;f++)f%3===0&&f&&(l+=d[c>>18&63],l+=d[c>>12&63],l+=d[c>>6&63],l+=d[c&63]),c=(c<<8)+s[f];const m=u%3;return m===0?(l+=d[c>>18&63],l+=d[c>>12&63],l+=d[c>>6&63],l+=d[c&63]):m===2?(l+=d[c>>10&63],l+=d[c>>4&63],l+=d[c<<2&63],l+=d[64]):m===1&&(l+=d[c>>2&63],l+=d[c<<4&63],l+=d[64],l+=d[64]),l}function i(s){return Object.prototype.toString.call(s)==="[object Uint8Array]"}return Xr=new e("tag:yaml.org,2002:binary",{kind:"scalar",resolve:o,construct:a,predicate:i,represent:r}),Xr}var Zr,ds;function Ac(){if(ds)return Zr;ds=1;const e=pn(),n=Object.prototype.hasOwnProperty,o=Object.prototype.toString;function a(i){if(i===null)return!0;const s={},l=i;for(let c=0,u=l.length;c<u;c+=1){const d=l[c];let m=!1;if(o.call(d)!=="[object Object]")return!1;let f;for(f in d)if(n.call(d,f))if(!m)m=!0;else return!1;if(!m||n.call(s,f))return!1;Object.defineProperty(s,f,{value:!0})}return!0}function r(i){return i!==null?i:[]}return Zr=new e("tag:yaml.org,2002:omap",{kind:"sequence",resolve:a,construct:r}),Zr}var et,ms;function Nc(){if(ms)return et;ms=1;const e=pn(),n=Object.prototype.toString;function o(r){if(r===null)return!0;const i=r,s=new Array(i.length);for(let l=0,c=i.length;l<c;l+=1){const u=i[l];if(n.call(u)!=="[object Object]")return!1;const d=Object.keys(u);if(d.length!==1)return!1;s[l]=[d[0],u[d[0]]]}return!0}function a(r){if(r===null)return[];const i=r,s=new Array(i.length);for(let l=0,c=i.length;l<c;l+=1){const u=i[l],d=Object.keys(u);s[l]=[d[0],u[d[0]]]}return s}return et=new e("tag:yaml.org,2002:pairs",{kind:"sequence",resolve:o,construct:a}),et}var nt,ps;function xc(){if(ps)return nt;ps=1;const e=pn(),n=Object.prototype.hasOwnProperty;function o(r){if(r===null)return!0;const i=r;for(const s in i)if(n.call(i,s)&&i[s]!==null)return!1;return!0}function a(r){return r!==null?r:{}}return nt=new e("tag:yaml.org,2002:set",{kind:"mapping",resolve:o,construct:a}),nt}var ot,fs;function Yt(){return fs||(fs=1,ot=gc().extend({implicit:[bc(),_c()],explicit:[yc(),Ac(),Nc(),xc()]})),ot}var hs;function Hm(){if(hs)return ja;hs=1;const e=Ia(),n=Oa(),o=zm(),a=Yt(),r=Object.prototype.hasOwnProperty,i=1,s=2,l=3,c=4,u=1,d=2,m=3,f=/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F-\x84\x86-\x9F\uFFFE\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/,v=/[\x85\u2028\u2029]/,B=/[,\[\]{}]/,w=/^(?:!|!!|![0-9A-Za-z-]+!)$/,x=/^(?:!|[^,\[\]{}])(?:%[0-9a-f]{2}|[0-9a-z\-#;/?:@&=+$,_.!~*'()\[\]])*$/i;function E(t){return Object.prototype.toString.call(t)}function N(t){return t===10||t===13}function q(t){return t===9||t===32}function D(t){return t===9||t===32||t===10||t===13}function de(t){return t===44||t===91||t===93||t===123||t===125}function re(t){if(t>=48&&t<=57)return t-48;const _=t|32;return _>=97&&_<=102?_-97+10:-1}function z(t){return t===120?2:t===117?4:t===85?8:0}function te(t){return t>=48&&t<=57?t-48:-1}function ae(t){switch(t){case 48:return"\0";case 97:return"\x07";case 98:return"\b";case 116:return"	";case 9:return"	";case 110:return`
`;case 118:return"\v";case 102:return"\f";case 114:return"\r";case 101:return"\x1B";case 32:return" ";case 34:return'"';case 47:return"/";case 92:return"\\";case 78:return"";case 95:return" ";case 76:return"\u2028";case 80:return"\u2029";default:return""}}function ge(t){return t<=65535?String.fromCharCode(t):String.fromCharCode((t-65536>>10)+55296,(t-65536&1023)+56320)}function X(t,_,S){_==="__proto__"?Object.defineProperty(t,_,{configurable:!0,enumerable:!0,writable:!0,value:S}):t[_]=S}const T=new Array(256),F=new Array(256);for(let t=0;t<256;t++)T[t]=ae(t)?1:0,F[t]=ae(t);function Y(t,_){this.input=t,this.filename=_.filename||null,this.schema=_.schema||a,this.onWarning=_.onWarning||null,this.legacy=_.legacy||!1,this.json=_.json||!1,this.listener=_.listener||null,this.maxDepth=typeof _.maxDepth=="number"?_.maxDepth:100,this.maxTotalMergeKeys=typeof _.maxTotalMergeKeys=="number"?_.maxTotalMergeKeys:1e4,this.implicitTypes=this.schema.compiledImplicit,this.typeMap=this.schema.compiledTypeMap,this.length=t.length,this.position=0,this.line=0,this.lineStart=0,this.lineIndent=0,this.depth=0,this.totalMergeKeys=0,this.firstTabInLine=-1,this.documents=[],this.anchorMapTransactions=[]}function ue(t,_){const S={name:t.filename,buffer:t.input.slice(0,-1),position:t.position,line:t.line,column:t.position-t.lineStart};return S.snippet=o(S),new n(_,S)}function J(t,_){throw ue(t,_)}function Ce(t,_){t.onWarning&&t.onWarning.call(null,ue(t,_))}function Be(t,_,S){const I=t.anchorMapTransactions;if(I.length!==0){const R=I[I.length-1];r.call(R,_)||(R[_]={existed:r.call(t.anchorMap,_),value:t.anchorMap[_]})}t.anchorMap[_]=S}function vn(t){t.anchorMapTransactions.push(Object.create(null))}function Ze(t){const _=t.anchorMapTransactions.pop(),S=t.anchorMapTransactions;if(S.length===0)return;const I=S[S.length-1],R=Object.keys(_);for(let U=0,p=R.length;U<p;U+=1){const A=R[U];r.call(I,A)||(I[A]=_[A])}}function fn(t){const _=t.anchorMapTransactions.pop(),S=Object.keys(_);for(let I=S.length-1;I>=0;I-=1){const R=_[S[I]];R.existed?t.anchorMap[S[I]]=R.value:delete t.anchorMap[S[I]]}}function We(t){return{position:t.position,line:t.line,lineStart:t.lineStart,lineIndent:t.lineIndent,firstTabInLine:t.firstTabInLine,tag:t.tag,anchor:t.anchor,kind:t.kind,result:t.result}}function gn(t,_){t.position=_.position,t.line=_.line,t.lineStart=_.lineStart,t.lineIndent=_.lineIndent,t.firstTabInLine=_.firstTabInLine,t.tag=_.tag,t.anchor=_.anchor,t.kind=_.kind,t.result=_.result}const Sn={YAML:function(_,S,I){_.version!==null&&J(_,"duplication of %YAML directive"),I.length!==1&&J(_,"YAML directive accepts exactly one argument");const R=/^([0-9]+)\.([0-9]+)$/.exec(I[0]);R===null&&J(_,"ill-formed argument of the YAML directive");const U=parseInt(R[1],10),p=parseInt(R[2],10);U!==1&&J(_,"unacceptable YAML version of the document"),_.version=I[0],_.checkLineBreaks=p<2,p!==1&&p!==2&&Ce(_,"unsupported YAML version of the document")},TAG:function(_,S,I){let R;I.length!==2&&J(_,"TAG directive accepts exactly two arguments");const U=I[0];R=I[1],w.test(U)||J(_,"ill-formed tag handle (first argument) of the TAG directive"),r.call(_.tagMap,U)&&J(_,'there is a previously declared suffix for "'+U+'" tag handle'),x.test(R)||J(_,"ill-formed tag prefix (second argument) of the TAG directive");try{R=decodeURIComponent(R)}catch{J(_,"tag prefix is malformed: "+R)}_.tagMap[U]=R}};function Ke(t,_,S,I){if(_<S){const R=t.input.slice(_,S);if(I)for(let U=0,p=R.length;U<p;U+=1){const A=R.charCodeAt(U);A===9||A>=32&&A<=1114111||J(t,"expected valid JSON character")}else f.test(R)&&J(t,"the stream contains non-printable characters");t.result+=R}}function Ge(t,_,S,I){e.isObject(S)||J(t,"cannot merge mappings; the provided source object is unacceptable");const R=Object.keys(S);for(let U=0,p=R.length;U<p;U+=1){const A=R[U];t.maxTotalMergeKeys!==-1&&++t.totalMergeKeys>t.maxTotalMergeKeys&&J(t,"merge keys exceeded maxTotalMergeKeys ("+t.maxTotalMergeKeys+")"),r.call(_,A)||(X(_,A,S[A]),I[A]=!0)}}function O(t,_,S,I,R,U,p,A,j){if(Array.isArray(R)){R=Array.prototype.slice.call(R);for(let k=0,V=R.length;k<V;k+=1)Array.isArray(R[k])&&J(t,"nested arrays are not supported inside keys"),typeof R=="object"&&E(R[k])==="[object Object]"&&(R[k]="[object Object]")}if(typeof R=="object"&&E(R)==="[object Object]"&&(R="[object Object]"),R=String(R),_===null&&(_={}),I==="tag:yaml.org,2002:merge")if(Array.isArray(U))for(let k=0,V=U.length;k<V;k+=1)Ge(t,_,U[k],S);else Ge(t,_,U,S);else!t.json&&!r.call(S,R)&&r.call(_,R)&&(t.line=p||t.line,t.lineStart=A||t.lineStart,t.position=j||t.position,J(t,"duplicated mapping key")),X(_,R,U),delete S[R];return _}function se(t){const _=t.input.charCodeAt(t.position);_===10?t.position++:_===13?(t.position++,t.input.charCodeAt(t.position)===10&&t.position++):J(t,"a line break is expected"),t.line+=1,t.lineStart=t.position,t.firstTabInLine=-1}function G(t,_,S){let I=0,R=t.input.charCodeAt(t.position);for(;R!==0;){for(;q(R);)R===9&&t.firstTabInLine===-1&&(t.firstTabInLine=t.position),R=t.input.charCodeAt(++t.position);if(_&&R===35)do R=t.input.charCodeAt(++t.position);while(R!==10&&R!==13&&R!==0);if(N(R))for(se(t),R=t.input.charCodeAt(t.position),I++,t.lineIndent=0;R===32;)t.lineIndent++,R=t.input.charCodeAt(++t.position);else break}return S!==-1&&I!==0&&t.lineIndent<S&&Ce(t,"deficient indentation"),I}function me(t){let _=t.position,S=t.input.charCodeAt(_);return!!((S===45||S===46)&&S===t.input.charCodeAt(_+1)&&S===t.input.charCodeAt(_+2)&&(_+=3,S=t.input.charCodeAt(_),S===0||D(S)))}function Ne(t,_){_===1?t.result+=" ":_>1&&(t.result+=e.repeat(`
`,_-1))}function h(t,_,S){let I,R,U,p,A,j;const k=t.kind,V=t.result;let K=t.input.charCodeAt(t.position);if(D(K)||de(K)||K===35||K===38||K===42||K===33||K===124||K===62||K===39||K===34||K===37||K===64||K===96)return!1;if(K===63||K===45){const H=t.input.charCodeAt(t.position+1);if(D(H)||S&&de(H))return!1}for(t.kind="scalar",t.result="",I=R=t.position,U=!1;K!==0;){if(K===58){const H=t.input.charCodeAt(t.position+1);if(D(H)||S&&de(H))break}else if(K===35){const H=t.input.charCodeAt(t.position-1);if(D(H))break}else{if(t.position===t.lineStart&&me(t)||S&&de(K))break;if(N(K))if(p=t.line,A=t.lineStart,j=t.lineIndent,G(t,!1,-1),t.lineIndent>=_){U=!0,K=t.input.charCodeAt(t.position);continue}else{t.position=R,t.line=p,t.lineStart=A,t.lineIndent=j;break}}U&&(Ke(t,I,R,!1),Ne(t,t.line-p),I=R=t.position,U=!1),q(K)||(R=t.position+1),K=t.input.charCodeAt(++t.position)}return Ke(t,I,R,!1),t.result?!0:(t.kind=k,t.result=V,!1)}function g(t,_){let S,I,R=t.input.charCodeAt(t.position);if(R!==39)return!1;for(t.kind="scalar",t.result="",t.position++,S=I=t.position;(R=t.input.charCodeAt(t.position))!==0;)if(R===39)if(Ke(t,S,t.position,!0),R=t.input.charCodeAt(++t.position),R===39)S=t.position,t.position++,I=t.position;else return!0;else N(R)?(Ke(t,S,I,!0),Ne(t,G(t,!1,_)),S=I=t.position):t.position===t.lineStart&&me(t)?J(t,"unexpected end of the document within a single quoted scalar"):(t.position++,q(R)||(I=t.position));J(t,"unexpected end of the stream within a single quoted scalar")}function y(t,_){let S,I,R,U=t.input.charCodeAt(t.position);if(U!==34)return!1;for(t.kind="scalar",t.result="",t.position++,S=I=t.position;(U=t.input.charCodeAt(t.position))!==0;){if(U===34)return Ke(t,S,t.position,!0),t.position++,!0;if(U===92){if(Ke(t,S,t.position,!0),U=t.input.charCodeAt(++t.position),N(U))G(t,!1,_);else if(U<256&&T[U])t.result+=F[U],t.position++;else if((R=z(U))>0){let p=R,A=0;for(;p>0;p--)U=t.input.charCodeAt(++t.position),(R=re(U))>=0?A=(A<<4)+R:J(t,"expected hexadecimal character");t.result+=ge(A),t.position++}else J(t,"unknown escape sequence");S=I=t.position}else N(U)?(Ke(t,S,I,!0),Ne(t,G(t,!1,_)),S=I=t.position):t.position===t.lineStart&&me(t)?J(t,"unexpected end of the document within a double quoted scalar"):(t.position++,q(U)||(I=t.position))}J(t,"unexpected end of the stream within a double quoted scalar")}function P(t,_){let S=!0,I,R,U;const p=t.tag;let A;const j=t.anchor;let k,V,K,H;const ce=Object.create(null);let le,he,be,Ie=t.input.charCodeAt(t.position);if(Ie===91)k=93,H=!1,A=[];else if(Ie===123)k=125,H=!0,A={};else return!1;for(t.anchor!==null&&Be(t,t.anchor,A),Ie=t.input.charCodeAt(++t.position);Ie!==0;){if(G(t,!0,_),Ie=t.input.charCodeAt(t.position),Ie===k)return t.position++,t.tag=p,t.anchor=j,t.kind=H?"mapping":"sequence",t.result=A,!0;if(S?Ie===44&&J(t,"expected the node content, but found ','"):J(t,"missed comma between flow collection entries"),he=le=be=null,V=K=!1,Ie===63){const ze=t.input.charCodeAt(t.position+1);D(ze)&&(V=K=!0,t.position++,G(t,!0,_))}I=t.line,R=t.lineStart,U=t.position,oe(t,_,i,!1,!0),he=t.tag,le=t.result,G(t,!0,_),Ie=t.input.charCodeAt(t.position),(K||t.line===I)&&Ie===58&&(V=!0,Ie=t.input.charCodeAt(++t.position),G(t,!0,_),oe(t,_,i,!1,!0),be=t.result),H?O(t,A,ce,he,le,be,I,R,U):V?A.push(O(t,null,ce,he,le,be,I,R,U)):A.push(le),G(t,!0,_),Ie=t.input.charCodeAt(t.position),Ie===44?(S=!0,Ie=t.input.charCodeAt(++t.position)):S=!1}J(t,"unexpected end of the stream within a flow collection")}function L(t,_){let S,I=u,R=!1,U=!1,p=_,A=0,j=!1,k,V=t.input.charCodeAt(t.position);if(V===124)S=!1;else if(V===62)S=!0;else return!1;for(t.kind="scalar",t.result="";V!==0;)if(V=t.input.charCodeAt(++t.position),V===43||V===45)u===I?I=V===43?m:d:J(t,"repeat of a chomping mode identifier");else if((k=te(V))>=0)k===0?J(t,"bad explicit indentation width of a block scalar; it cannot be less than one"):U?J(t,"repeat of an indentation width identifier"):(p=_+k-1,U=!0);else break;if(q(V)){do V=t.input.charCodeAt(++t.position);while(q(V));if(V===35)do V=t.input.charCodeAt(++t.position);while(!N(V)&&V!==0)}for(;V!==0;){for(se(t),t.lineIndent=0,V=t.input.charCodeAt(t.position);(!U||t.lineIndent<p)&&V===32;)t.lineIndent++,V=t.input.charCodeAt(++t.position);if(!U&&t.lineIndent>p&&(p=t.lineIndent),N(V)){A++;continue}if(!U&&p===0&&J(t,"missing indentation for block scalar"),t.lineIndent<p){I===m?t.result+=e.repeat(`
`,R?1+A:A):I===u&&R&&(t.result+=`
`);break}S?q(V)?(j=!0,t.result+=e.repeat(`
`,R?1+A:A)):j?(j=!1,t.result+=e.repeat(`
`,A+1)):A===0?R&&(t.result+=" "):t.result+=e.repeat(`
`,A):t.result+=e.repeat(`
`,R?1+A:A),R=!0,U=!0,A=0;const K=t.position;for(;!N(V)&&V!==0;)V=t.input.charCodeAt(++t.position);Ke(t,K,t.position,!1)}return!0}function C(t,_){const S=t.tag,I=t.anchor,R=[];let U=!1;if(t.firstTabInLine!==-1)return!1;t.anchor!==null&&Be(t,t.anchor,R);let p=t.input.charCodeAt(t.position);for(;p!==0&&(t.firstTabInLine!==-1&&(t.position=t.firstTabInLine,J(t,"tab characters must not be used in indentation")),p===45);){const A=t.input.charCodeAt(t.position+1);if(!D(A))break;if(U=!0,t.position++,G(t,!0,-1)&&t.lineIndent<=_){R.push(null),p=t.input.charCodeAt(t.position);continue}const j=t.line;if(oe(t,_,l,!1,!0),R.push(t.result),G(t,!0,-1),p=t.input.charCodeAt(t.position),(t.line===j||t.lineIndent>_)&&p!==0)J(t,"bad indentation of a sequence entry");else if(t.lineIndent<_)break}return U?(t.tag=S,t.anchor=I,t.kind="sequence",t.result=R,!0):!1}function ne(t,_,S){let I,R,U,p;const A=t.tag,j=t.anchor,k={},V=Object.create(null);let K=null,H=null,ce=null,le=!1,he=!1;if(t.firstTabInLine!==-1)return!1;t.anchor!==null&&Be(t,t.anchor,k);let be=t.input.charCodeAt(t.position);for(;be!==0;){!le&&t.firstTabInLine!==-1&&(t.position=t.firstTabInLine,J(t,"tab characters must not be used in indentation"));const Ie=t.input.charCodeAt(t.position+1),ze=t.line;if((be===63||be===58)&&D(Ie))be===63?(le&&(O(t,k,V,K,H,null,R,U,p),K=H=ce=null),he=!0,le=!0,I=!0):le?(le=!1,I=!0):J(t,"incomplete explicit mapping pair; a key node is missed; or followed by a non-tabulated empty line"),t.position+=1,be=Ie;else{if(R=t.line,U=t.lineStart,p=t.position,!oe(t,S,s,!1,!0))break;if(t.line===ze){for(be=t.input.charCodeAt(t.position);q(be);)be=t.input.charCodeAt(++t.position);if(be===58)be=t.input.charCodeAt(++t.position),D(be)||J(t,"a whitespace character is expected after the key-value separator within a block mapping"),le&&(O(t,k,V,K,H,null,R,U,p),K=H=ce=null),he=!0,le=!1,I=!1,K=t.tag,H=t.result;else if(he)J(t,"can not read an implicit mapping pair; a colon is missed");else return t.tag=A,t.anchor=j,!0}else if(he)J(t,"can not read a block mapping entry; a multiline key may not be an implicit key");else return t.tag=A,t.anchor=j,!0}if((t.line===ze||t.lineIndent>_)&&(le&&(R=t.line,U=t.lineStart,p=t.position),oe(t,_,c,!0,I)&&(le?H=t.result:ce=t.result),le||(O(t,k,V,K,H,ce,R,U,p),K=H=ce=null),G(t,!0,-1),be=t.input.charCodeAt(t.position)),(t.line===ze||t.lineIndent>_)&&be!==0)J(t,"bad indentation of a mapping entry");else if(t.lineIndent<_)break}return le&&O(t,k,V,K,H,null,R,U,p),he&&(t.tag=A,t.anchor=j,t.kind="mapping",t.result=k),he}function Z(t){let _=!1,S=!1,I,R,U=t.input.charCodeAt(t.position);if(U!==33)return!1;t.tag!==null&&J(t,"duplication of a tag property"),U=t.input.charCodeAt(++t.position),U===60?(_=!0,U=t.input.charCodeAt(++t.position)):U===33?(S=!0,I="!!",U=t.input.charCodeAt(++t.position)):I="!";let p=t.position;if(_){do U=t.input.charCodeAt(++t.position);while(U!==0&&U!==62);t.position<t.length?(R=t.input.slice(p,t.position),U=t.input.charCodeAt(++t.position)):J(t,"unexpected end of the stream within a verbatim tag")}else{for(;U!==0&&!D(U);)U===33&&(S?J(t,"tag suffix cannot contain exclamation marks"):(I=t.input.slice(p-1,t.position+1),w.test(I)||J(t,"named tag handle cannot contain such characters"),S=!0,p=t.position+1)),U=t.input.charCodeAt(++t.position);R=t.input.slice(p,t.position),B.test(R)&&J(t,"tag suffix cannot contain flow indicator characters")}R&&!x.test(R)&&J(t,"tag name cannot contain such characters: "+R);try{R=decodeURIComponent(R)}catch{J(t,"tag name is malformed: "+R)}return _?t.tag=R:r.call(t.tagMap,I)?t.tag=t.tagMap[I]+R:I==="!"?t.tag="!"+R:I==="!!"?t.tag="tag:yaml.org,2002:"+R:J(t,'undeclared tag handle "'+I+'"'),!0}function Q(t){let _=t.input.charCodeAt(t.position);if(_!==38)return!1;t.anchor!==null&&J(t,"duplication of an anchor property"),_=t.input.charCodeAt(++t.position);const S=t.position;for(;_!==0&&!D(_)&&!de(_);)_=t.input.charCodeAt(++t.position);return t.position===S&&J(t,"name of an anchor node must contain at least one character"),t.anchor=t.input.slice(S,t.position),!0}function $(t){let _=t.input.charCodeAt(t.position);if(_!==42)return!1;_=t.input.charCodeAt(++t.position);const S=t.position;for(;_!==0&&!D(_)&&!de(_);)_=t.input.charCodeAt(++t.position);t.position===S&&J(t,"name of an alias node must contain at least one character");const I=t.input.slice(S,t.position);return r.call(t.anchorMap,I)||J(t,'unidentified alias "'+I+'"'),t.result=t.anchorMap[I],G(t,!0,-1),!0}function ve(t,_,S,I){const R=We(t);return vn(t),gn(t,_),t.tag=null,t.anchor=null,t.kind=null,t.result=null,ne(t,S,I)&&t.kind==="mapping"?(Ze(t),!0):(fn(t),gn(t,R),!1)}function oe(t,_,S,I,R){let U,p,A=1,j=!1,k=!1,V=null,K,H,ce;t.depth>=t.maxDepth&&J(t,"nesting exceeded maxDepth ("+t.maxDepth+")"),t.depth+=1,t.listener!==null&&t.listener("open",t),t.tag=null,t.anchor=null,t.kind=null,t.result=null;const le=U=p=c===S||l===S;if(I&&G(t,!0,-1)&&(j=!0,t.lineIndent>_?A=1:t.lineIndent===_?A=0:t.lineIndent<_&&(A=-1)),A===1)for(;;){const he=t.input.charCodeAt(t.position),be=We(t);if(j&&(he===33&&t.tag!==null||he===38&&t.anchor!==null)||!Z(t)&&!Q(t))break;V===null&&(V=be),G(t,!0,-1)?(j=!0,p=le,t.lineIndent>_?A=1:t.lineIndent===_?A=0:t.lineIndent<_&&(A=-1)):p=!1}if(p&&(p=j||R),A===1||c===S)if(i===S||s===S?H=_:H=_+1,ce=t.position-t.lineStart,A===1)if(p&&(C(t,ce)||ne(t,ce,H))||P(t,H))k=!0;else{const he=t.input.charCodeAt(t.position);V!==null&&le&&!p&&he!==124&&he!==62&&ve(t,V,V.position-V.lineStart,H)||U&&L(t,H)||g(t,H)||y(t,H)?k=!0:$(t)?(k=!0,(t.tag!==null||t.anchor!==null)&&J(t,"alias node should not have any properties")):h(t,H,i===S)&&(k=!0,t.tag===null&&(t.tag="?")),t.anchor!==null&&Be(t,t.anchor,t.result)}else A===0&&(k=p&&C(t,ce));if(t.tag===null)t.anchor!==null&&Be(t,t.anchor,t.result);else if(t.tag==="?"){t.result!==null&&t.kind!=="scalar"&&J(t,'unacceptable node kind for !<?> tag; it should be "scalar", not "'+t.kind+'"');for(let he=0,be=t.implicitTypes.length;he<be;he+=1)if(K=t.implicitTypes[he],K.resolve(t.result)){t.result=K.construct(t.result),t.tag=K.tag,t.anchor!==null&&Be(t,t.anchor,t.result);break}}else if(t.tag!=="!"){if(r.call(t.typeMap[t.kind||"fallback"],t.tag))K=t.typeMap[t.kind||"fallback"][t.tag];else{K=null;const he=t.typeMap.multi[t.kind||"fallback"];for(let be=0,Ie=he.length;be<Ie;be+=1)if(t.tag.slice(0,he[be].tag.length)===he[be].tag){K=he[be];break}}K||J(t,"unknown tag !<"+t.tag+">"),t.result!==null&&K.kind!==t.kind&&J(t,"unacceptable node kind for !<"+t.tag+'> tag; it should be "'+K.kind+'", not "'+t.kind+'"'),K.resolve(t.result,t.tag)?(t.result=K.construct(t.result,t.tag),t.anchor!==null&&Be(t,t.anchor,t.result)):J(t,"cannot resolve a node with !<"+t.tag+"> explicit tag")}return t.listener!==null&&t.listener("close",t),t.depth-=1,t.tag!==null||t.anchor!==null||k}function fe(t){const _=t.position;let S=!1,I;for(t.version=null,t.checkLineBreaks=t.legacy,t.tagMap=Object.create(null),t.anchorMap=Object.create(null);(I=t.input.charCodeAt(t.position))!==0&&(G(t,!0,-1),I=t.input.charCodeAt(t.position),!(t.lineIndent>0||I!==37));){S=!0,I=t.input.charCodeAt(++t.position);let R=t.position;for(;I!==0&&!D(I);)I=t.input.charCodeAt(++t.position);const U=t.input.slice(R,t.position),p=[];for(U.length<1&&J(t,"directive name must not be less than one character in length");I!==0;){for(;q(I);)I=t.input.charCodeAt(++t.position);if(I===35){do I=t.input.charCodeAt(++t.position);while(I!==0&&!N(I));break}if(N(I))break;for(R=t.position;I!==0&&!D(I);)I=t.input.charCodeAt(++t.position);p.push(t.input.slice(R,t.position))}I!==0&&se(t),r.call(Sn,U)?Sn[U](t,U,p):Ce(t,'unknown document directive "'+U+'"')}if(G(t,!0,-1),t.lineIndent===0&&t.input.charCodeAt(t.position)===45&&t.input.charCodeAt(t.position+1)===45&&t.input.charCodeAt(t.position+2)===45?(t.position+=3,G(t,!0,-1)):S&&J(t,"directives end mark is expected"),oe(t,t.lineIndent-1,c,!1,!0),G(t,!0,-1),t.checkLineBreaks&&v.test(t.input.slice(_,t.position))&&Ce(t,"non-ASCII line breaks are interpreted as content"),t.documents.push(t.result),t.position===t.lineStart&&me(t)){t.input.charCodeAt(t.position)===46&&(t.position+=3,G(t,!0,-1));return}t.position<t.length-1&&J(t,"end of the stream or a document separator is expected")}function ye(t,_){t=String(t),_=_||{},t.length!==0&&(t.charCodeAt(t.length-1)!==10&&t.charCodeAt(t.length-1)!==13&&(t+=`
`),t.charCodeAt(0)===65279&&(t=t.slice(1)));const S=new Y(t,_),I=t.indexOf("\0");for(I!==-1&&(S.position=I,J(S,"null byte is not allowed in input")),S.input+="\0";S.input.charCodeAt(S.position)===32;)S.lineIndent+=1,S.position+=1;for(;S.position<S.length-1;)fe(S);return S.documents}function Ee(t,_,S){_!==null&&typeof _=="object"&&typeof S>"u"&&(S=_,_=null);const I=ye(t,S);if(typeof _!="function")return I;for(let R=0,U=I.length;R<U;R+=1)_(I[R])}function Oe(t,_){const S=ye(t,_);if(S.length!==0){if(S.length===1)return S[0];throw new n("expected a single document in the stream, but found more")}}return ja.loadAll=Ee,ja.load=Oe,ja}var at={},vs;function Um(){if(vs)return at;vs=1;const e=Ia(),n=Oa(),o=Yt(),a=Object.prototype.toString,r=Object.prototype.hasOwnProperty,i=65279,s=9,l=10,c=13,u=32,d=33,m=34,f=35,v=37,B=38,w=39,x=42,E=44,N=45,q=58,D=61,de=62,re=63,z=64,te=91,ae=93,ge=96,X=123,T=124,F=125,Y={};Y[0]="\\0",Y[7]="\\a",Y[8]="\\b",Y[9]="\\t",Y[10]="\\n",Y[11]="\\v",Y[12]="\\f",Y[13]="\\r",Y[27]="\\e",Y[34]='\\"',Y[92]="\\\\",Y[133]="\\N",Y[160]="\\_",Y[8232]="\\L",Y[8233]="\\P";const ue=["y","Y","yes","Yes","YES","on","On","ON","n","N","no","No","NO","off","Off","OFF"],J=/^[-+]?[0-9_]+(?::[0-9_]+)+(?:\.[0-9_]*)?$/;function Ce(p,A){if(A===null)return{};const j={},k=Object.keys(A);for(let V=0,K=k.length;V<K;V+=1){let H=k[V],ce=String(A[H]);H.slice(0,2)==="!!"&&(H="tag:yaml.org,2002:"+H.slice(2));const le=p.compiledTypeMap.fallback[H];le&&r.call(le.styleAliases,ce)&&(ce=le.styleAliases[ce]),j[H]=ce}return j}function Be(p){let A,j;const k=p.toString(16).toUpperCase();if(p<=255)A="x",j=2;else if(p<=65535)A="u",j=4;else if(p<=4294967295)A="U",j=8;else throw new n("code point within a string may not be greater than 0xFFFFFFFF");return"\\"+A+e.repeat("0",j-k.length)+k}const vn=1,Ze=2;function fn(p){this.schema=p.schema||o,this.indent=Math.max(1,p.indent||2),this.noArrayIndent=p.noArrayIndent||!1,this.skipInvalid=p.skipInvalid||!1,this.flowLevel=e.isNothing(p.flowLevel)?-1:p.flowLevel,this.styleMap=Ce(this.schema,p.styles||null),this.sortKeys=p.sortKeys||!1,this.lineWidth=p.lineWidth||80,this.noRefs=p.noRefs||!1,this.noCompatMode=p.noCompatMode||!1,this.condenseFlow=p.condenseFlow||!1,this.quotingType=p.quotingType==='"'?Ze:vn,this.forceQuotes=p.forceQuotes||!1,this.replacer=typeof p.replacer=="function"?p.replacer:null,this.implicitTypes=this.schema.compiledImplicit,this.explicitTypes=this.schema.compiledExplicit,this.tag=null,this.result="",this.duplicates=[],this.usedDuplicates=null}function We(p,A){const j=e.repeat(" ",A);let k=0,V="";const K=p.length;for(;k<K;){let H;const ce=p.indexOf(`
`,k);ce===-1?(H=p.slice(k),k=K):(H=p.slice(k,ce+1),k=ce+1),H.length&&H!==`
`&&(V+=j),V+=H}return V}function gn(p,A){return`
`+e.repeat(" ",p.indent*A)}function Sn(p,A){for(let j=0,k=p.implicitTypes.length;j<k;j+=1)if(p.implicitTypes[j].resolve(A))return!0;return!1}function Ke(p){return p===u||p===s}function Ge(p){return p>=32&&p<=126||p>=161&&p<=55295&&p!==8232&&p!==8233||p>=57344&&p<=65533&&p!==i||p>=65536&&p<=1114111}function O(p){return Ge(p)&&p!==i&&p!==c&&p!==l}function se(p,A,j){const k=O(p),V=k&&!Ke(p);return(j?k:k&&p!==E&&p!==te&&p!==ae&&p!==X&&p!==F)&&p!==f&&!(A===q&&!V)||O(A)&&!Ke(A)&&p===f||A===q&&V}function G(p){return Ge(p)&&p!==i&&!Ke(p)&&p!==N&&p!==re&&p!==q&&p!==E&&p!==te&&p!==ae&&p!==X&&p!==F&&p!==f&&p!==B&&p!==x&&p!==d&&p!==T&&p!==D&&p!==de&&p!==w&&p!==m&&p!==v&&p!==z&&p!==ge}function me(p){return!Ke(p)&&p!==q}function Ne(p,A){const j=p.charCodeAt(A);let k;return j>=55296&&j<=56319&&A+1<p.length&&(k=p.charCodeAt(A+1),k>=56320&&k<=57343)?(j-55296)*1024+k-56320+65536:j}function h(p){return/^\n* /.test(p)}const g=1,y=2,P=3,L=4,C=5;function ne(p,A,j,k,V,K,H,ce){let le,he=0,be=null,Ie=!1,ze=!1;const ni=k!==-1;let Go=-1,Wo=G(Ne(p,0))&&me(Ne(p,p.length-1));if(A||H)for(le=0;le<p.length;he>=65536?le+=2:le++){if(he=Ne(p,le),!Ge(he))return C;Wo=Wo&&se(he,be,ce),be=he}else{for(le=0;le<p.length;he>=65536?le+=2:le++){if(he=Ne(p,le),he===l)Ie=!0,ni&&(ze=ze||le-Go-1>k&&p[Go+1]!==" ",Go=le);else if(!Ge(he))return C;Wo=Wo&&se(he,be,ce),be=he}ze=ze||ni&&le-Go-1>k&&p[Go+1]!==" "}return!Ie&&!ze?Wo&&!H&&!V(p)?g:K===Ze?C:y:j>9&&h(p)?C:H?K===Ze?C:y:ze?L:P}function Z(p,A,j,k,V){p.dump=(function(){if(A.length===0)return p.quotingType===Ze?'""':"''";if(!p.noCompatMode&&(ue.indexOf(A)!==-1||J.test(A)))return p.quotingType===Ze?'"'+A+'"':"'"+A+"'";const K=p.indent*Math.max(1,j),H=p.lineWidth===-1?-1:Math.max(Math.min(p.lineWidth,40),p.lineWidth-K),ce=k||p.flowLevel>-1&&j>=p.flowLevel;function le(he){return Sn(p,he)}switch(ne(A,ce,p.indent,H,le,p.quotingType,p.forceQuotes&&!k,V)){case g:return A;case y:return"'"+A.replace(/'/g,"''")+"'";case P:return"|"+Q(A,p.indent)+$(We(A,K));case L:return">"+Q(A,p.indent)+$(We(ve(A,H),K));case C:return'"'+fe(A)+'"';default:throw new n("impossible error: invalid scalar style")}})()}function Q(p,A){const j=h(p)?String(A):"",k=p[p.length-1]===`
`,K=k&&(p[p.length-2]===`
`||p===`
`)?"+":k?"":"-";return j+K+`
`}function $(p){return p[p.length-1]===`
`?p.slice(0,-1):p}function ve(p,A){const j=/(\n+)([^\n]*)/g;let k=(function(){let ce=p.indexOf(`
`);return ce=ce!==-1?ce:p.length,j.lastIndex=ce,oe(p.slice(0,ce),A)})(),V=p[0]===`
`||p[0]===" ",K,H;for(;H=j.exec(p);){const ce=H[1],le=H[2];K=le[0]===" ",k+=ce+(!V&&!K&&le!==""?`
`:"")+oe(le,A),V=K}return k}function oe(p,A){if(p===""||p[0]===" ")return p;const j=/ [^ ]/g;let k,V=0,K,H=0,ce=0,le="";for(;k=j.exec(p);)ce=k.index,ce-V>A&&(K=H>V?H:ce,le+=`
`+p.slice(V,K),V=K+1),H=ce;return le+=`
`,p.length-V>A&&H>V?le+=p.slice(V,H)+`
`+p.slice(H+1):le+=p.slice(V),le.slice(1)}function fe(p){let A="",j=0;for(let k=0;k<p.length;j>=65536?k+=2:k++){j=Ne(p,k);const V=Y[j];!V&&Ge(j)?(A+=p[k],j>=65536&&(A+=p[k+1])):A+=V||Be(j)}return A}function ye(p,A,j){let k="";const V=p.tag;for(let K=0,H=j.length;K<H;K+=1){let ce=j[K];p.replacer&&(ce=p.replacer.call(j,String(K),ce)),(S(p,A,ce,!1,!1)||typeof ce>"u"&&S(p,A,null,!1,!1))&&(k!==""&&(k+=","+(p.condenseFlow?"":" ")),k+=p.dump)}p.tag=V,p.dump="["+k+"]"}function Ee(p,A,j,k){let V="";const K=p.tag;for(let H=0,ce=j.length;H<ce;H+=1){let le=j[H];p.replacer&&(le=p.replacer.call(j,String(H),le)),(S(p,A+1,le,!0,!0,!1,!0)||typeof le>"u"&&S(p,A+1,null,!0,!0,!1,!0))&&((!k||V!=="")&&(V+=gn(p,A)),p.dump&&l===p.dump.charCodeAt(0)?V+="-":V+="- ",V+=p.dump)}p.tag=K,p.dump=V||"[]"}function Oe(p,A,j){let k="";const V=p.tag,K=Object.keys(j);for(let H=0,ce=K.length;H<ce;H+=1){let le="";k!==""&&(le+=", "),p.condenseFlow&&(le+='"');const he=K[H];let be=j[he];p.replacer&&(be=p.replacer.call(j,he,be)),S(p,A,he,!1,!1)&&(p.dump.length>1024&&(le+="? "),le+=p.dump+(p.condenseFlow?'"':"")+":"+(p.condenseFlow?"":" "),S(p,A,be,!1,!1)&&(le+=p.dump,k+=le))}p.tag=V,p.dump="{"+k+"}"}function t(p,A,j,k){let V="";const K=p.tag,H=Object.keys(j);if(p.sortKeys===!0)H.sort();else if(typeof p.sortKeys=="function")H.sort(p.sortKeys);else if(p.sortKeys)throw new n("sortKeys must be a boolean or a function");for(let ce=0,le=H.length;ce<le;ce+=1){let he="";(!k||V!=="")&&(he+=gn(p,A));const be=H[ce];let Ie=j[be];if(p.replacer&&(Ie=p.replacer.call(j,be,Ie)),!S(p,A+1,be,!0,!0,!0))continue;const ze=p.tag!==null&&p.tag!=="?"||p.dump&&p.dump.length>1024;ze&&(p.dump&&l===p.dump.charCodeAt(0)?he+="?":he+="? "),he+=p.dump,ze&&(he+=gn(p,A)),S(p,A+1,Ie,!0,ze)&&(p.dump&&l===p.dump.charCodeAt(0)?he+=":":he+=": ",he+=p.dump,V+=he)}p.tag=K,p.dump=V||"{}"}function _(p,A,j){const k=j?p.explicitTypes:p.implicitTypes;for(let V=0,K=k.length;V<K;V+=1){const H=k[V];if((H.instanceOf||H.predicate)&&(!H.instanceOf||typeof A=="object"&&A instanceof H.instanceOf)&&(!H.predicate||H.predicate(A))){if(j?H.multi&&H.representName?p.tag=H.representName(A):p.tag=H.tag:p.tag="?",H.represent){const ce=p.styleMap[H.tag]||H.defaultStyle;let le;if(a.call(H.represent)==="[object Function]")le=H.represent(A,ce);else if(r.call(H.represent,ce))le=H.represent[ce](A,ce);else throw new n("!<"+H.tag+'> tag resolver accepts not "'+ce+'" style');p.dump=le}return!0}}return!1}function S(p,A,j,k,V,K,H){p.tag=null,p.dump=j,_(p,j,!1)||_(p,j,!0);const ce=a.call(p.dump),le=k;k&&(k=p.flowLevel<0||p.flowLevel>A);const he=ce==="[object Object]"||ce==="[object Array]";let be,Ie;if(he&&(be=p.duplicates.indexOf(j),Ie=be!==-1),(p.tag!==null&&p.tag!=="?"||Ie||p.indent!==2&&A>0)&&(V=!1),Ie&&p.usedDuplicates[be])p.dump="*ref_"+be;else{if(he&&Ie&&!p.usedDuplicates[be]&&(p.usedDuplicates[be]=!0),ce==="[object Object]")k&&Object.keys(p.dump).length!==0?(t(p,A,p.dump,V),Ie&&(p.dump="&ref_"+be+p.dump)):(Oe(p,A,p.dump),Ie&&(p.dump="&ref_"+be+" "+p.dump));else if(ce==="[object Array]")k&&p.dump.length!==0?(p.noArrayIndent&&!H&&A>0?Ee(p,A-1,p.dump,V):Ee(p,A,p.dump,V),Ie&&(p.dump="&ref_"+be+p.dump)):(ye(p,A,p.dump),Ie&&(p.dump="&ref_"+be+" "+p.dump));else if(ce==="[object String]")p.tag!=="?"&&Z(p,p.dump,A,K,le);else{if(ce==="[object Undefined]")return!1;if(p.skipInvalid)return!1;throw new n("unacceptable kind of an object to dump "+ce)}if(p.tag!==null&&p.tag!=="?"){let ze=encodeURI(p.tag[0]==="!"?p.tag.slice(1):p.tag).replace(/!/g,"%21");p.tag[0]==="!"?ze="!"+ze:ze.slice(0,18)==="tag:yaml.org,2002:"?ze="!!"+ze.slice(18):ze="!<"+ze+">",p.dump=ze+" "+p.dump}}return!0}function I(p,A){const j=[],k=[];R(p,j,k);const V=k.length;for(let K=0;K<V;K+=1)A.duplicates.push(j[k[K]]);A.usedDuplicates=new Array(V)}function R(p,A,j){if(p!==null&&typeof p=="object"){const k=A.indexOf(p);if(k!==-1)j.indexOf(k)===-1&&j.push(k);else if(A.push(p),Array.isArray(p))for(let V=0,K=p.length;V<K;V+=1)R(p[V],A,j);else{const V=Object.keys(p);for(let K=0,H=V.length;K<H;K+=1)R(p[V[K]],A,j)}}}function U(p,A){A=A||{};const j=new fn(A);j.noRefs||I(p,j);let k=p;return j.replacer&&(k=j.replacer.call({"":k},"",k)),S(j,0,k,!0,!0)?j.dump+`
`:""}return at.dump=U,at}var gs;function Km(){if(gs)return en;gs=1;const e=Hm(),n=Um();function o(a,r){return function(){throw new Error("Function yaml."+a+" is removed in js-yaml 4. Use yaml."+r+" instead, which is now safe by default.")}}return en.Type=pn(),en.Schema=sc(),en.FAILSAFE_SCHEMA=dc(),en.JSON_SCHEMA=vc(),en.CORE_SCHEMA=gc(),en.DEFAULT_SCHEMA=Yt(),en.load=e.load,en.loadAll=e.loadAll,en.dump=n.dump,en.YAMLException=Oa(),en.types={binary:yc(),float:hc(),map:uc(),null:mc(),pairs:Nc(),set:xc(),timestamp:bc(),bool:pc(),int:fc(),merge:_c(),omap:Ac(),seq:cc(),str:lc()},en.safeLoad=o("safeLoad","load"),en.safeLoadAll=o("safeLoadAll","loadAll"),en.safeDump=o("safeDump","dump"),en}var Gm=Km();const nr=$m(Gm),{Type:Zv,Schema:eg,FAILSAFE_SCHEMA:ng,JSON_SCHEMA:og,CORE_SCHEMA:ag,DEFAULT_SCHEMA:rg,load:tg,loadAll:ig,dump:sg,YAMLException:lg,types:cg,safeLoad:ug,safeLoadAll:dg,safeDump:mg}=nr;class Wm{constructor({ruleSetRepository:n}){this.ruleSetRepository=n}list(){return this.ruleSetRepository.getAll()}get(n){return this.ruleSetRepository.get(n)}async save(n){const o=await this.ruleSetRepository.get(n.id),a=Fm(n,{createdAt:o?.createdAt??new Date,updatedAt:new Date});return this.ruleSetRepository.put(a)}async importFromJson(n,o){let a;try{a=JSON.parse(n)}catch{throw new TypeError("Arquivo de regras inválido: JSON malformado.")}return this.save(o?{...a,grupo:o}:a)}async importFromYaml(n,o){let a;try{a=nr.load(n)}catch{throw new TypeError("Arquivo de regras inválido: YAML malformado.")}return this.save(o?{...a,grupo:o}:a)}exportToJson(n){Rt(n);const{source:o,createdAt:a,updatedAt:r,...i}=n;return JSON.stringify(i,null,2)}exportToYaml(n){Rt(n);const{source:o,createdAt:a,updatedAt:r,...i}=n;return nr.dump(i,{noRefs:!0})}async exportByIdToJson(n){const o=await this.ruleSetRepository.get(n);if(!o)throw new Error("Conjunto de regras não encontrado.");return this.exportToJson(o)}async exportByIdToYaml(n){const o=await this.ruleSetRepository.get(n);if(!o)throw new Error("Conjunto de regras não encontrado.");return this.exportToYaml(o)}delete(n){return this.ruleSetRepository.delete(n)}}async function Ym({indexedDB:e}={}){const n=await Bm(e),o={projectRepository:new wm(n),environmentRepository:new Rm(n),elementRepository:new Tm(n),evaluationRepository:new Sm(n),ruleSetRepository:new Em(n)},a=new Vm(o);return{projectService:new Dm(o),evaluationService:a,quickEvaluationService:new Lm({evaluationService:a}),ruleSetService:new Wm(o),repositories:o,close:()=>n.close()}}const Jm=`id: area_descanso
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
`,Qm=`id: armario_vestiario
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
`,Xm=`id: assento_pmr_plateia
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
`,Zm=`id: bacia_sanitaria
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
`,ep=`id: balcao
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
`,np=`id: banco_vestiario
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
`,op=`id: banheira_acessivel
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
`,ap=`id: barras_apoio
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
`,rp=`id: bebedouro
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
`,tp=`id: cabides
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
`,ip=`id: cabina_vestiario
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
`,sp=`id: caixa_autoatendimento
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
`,lp=`id: calcada
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
`,cp=`id: chuveiro
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
`,up=`id: corredores
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
`,dp=`id: corrimaos
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
`,mp=`id: degraus-isolados
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
`,pp=`id: elevadores
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
`,fp=`id: escadas
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
`,hp=`id: espaco_cao_guia
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
`,vp=`id: espaco_pcr_plateia
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
`,gp=`id: espelhos_acessiveis
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
`,bp=`id: estacionamento
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
`,_p=`id: guarda_corpos
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
`,yp=`id: janelas
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
`,Ap=`id: lavatorio
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
`,Np=`id: mesa
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
`,xp=`id: mictorio
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
`,Bp=`id: papeleiras
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
`,Tp=`id: piscina
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
`,Rp=`id: piso-desnivel
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
`,Sp=`id: piso_tatil
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
`,wp=`id: porta_objetos
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
`,Ep=`id: portas
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
`,Cp=`id: rampas
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
`,Ip=`id: sanitario_acessivel
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
`,Pp=`id: vagas_acessiveis
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
`,kp=Object.assign({"../rules/nbr9050-2020/area_descanso.yaml":Jm,"../rules/nbr9050-2020/armario_vestiario.yaml":Qm,"../rules/nbr9050-2020/assento_pmr_plateia.yaml":Xm,"../rules/nbr9050-2020/bacia_sanitaria.yaml":Zm,"../rules/nbr9050-2020/balcao.yaml":ep,"../rules/nbr9050-2020/banco_vestiario.yaml":np,"../rules/nbr9050-2020/banheira_acessivel.yaml":op,"../rules/nbr9050-2020/barras_apoio.yaml":ap,"../rules/nbr9050-2020/bebedouro.yaml":rp,"../rules/nbr9050-2020/cabides.yaml":tp,"../rules/nbr9050-2020/cabina_vestiario.yaml":ip,"../rules/nbr9050-2020/caixa_autoatendimento.yaml":sp,"../rules/nbr9050-2020/calcada.yaml":lp,"../rules/nbr9050-2020/chuveiro.yaml":cp,"../rules/nbr9050-2020/corredores.yaml":up,"../rules/nbr9050-2020/corrimaos.yaml":dp,"../rules/nbr9050-2020/degraus-isolados.yaml":mp,"../rules/nbr9050-2020/elevadores.yaml":pp,"../rules/nbr9050-2020/escadas.yaml":fp,"../rules/nbr9050-2020/espaco_cao_guia.yaml":hp,"../rules/nbr9050-2020/espaco_pcr_plateia.yaml":vp,"../rules/nbr9050-2020/espelhos_acessiveis.yaml":gp,"../rules/nbr9050-2020/estacionamento.yaml":bp,"../rules/nbr9050-2020/guarda_corpos.yaml":_p,"../rules/nbr9050-2020/janelas.yaml":yp,"../rules/nbr9050-2020/lavatorio.yaml":Ap,"../rules/nbr9050-2020/mesa.yaml":Np,"../rules/nbr9050-2020/mictorio.yaml":xp,"../rules/nbr9050-2020/papeleiras.yaml":Bp,"../rules/nbr9050-2020/piscina.yaml":Tp,"../rules/nbr9050-2020/piso-desnivel.yaml":Rp,"../rules/nbr9050-2020/piso_tatil.yaml":Sp,"../rules/nbr9050-2020/porta_objetos.yaml":wp,"../rules/nbr9050-2020/portas.yaml":Ep,"../rules/nbr9050-2020/rampas.yaml":Cp,"../rules/nbr9050-2020/sanitario_acessivel.yaml":Ip,"../rules/nbr9050-2020/sinalizacao.yaml":Op,"../rules/nbr9050-2020/vagas_acessiveis.yaml":Pp});async function Vp(){return Object.entries(kp).map(([e,n])=>({path:e,ruleSet:nr.load(n)})).sort((e,n)=>e.ruleSet.nome.localeCompare(n.ruleSet.nome))}const Oo=typeof document<"u";function Bc(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function Dp(e){return e.__esModule||e[Symbol.toStringTag]==="Module"||e.default&&Bc(e.default)}const Ve=Object.assign;function rt(e,n){const o={};for(const a in n){const r=n[a];o[a]=Pn(r)?r.map(e):e(r)}return o}const da=()=>{},Pn=Array.isArray;function bs(e,n){const o={};for(const a in e)o[a]=a in n?n[a]:e[a];return o}const Tc=/#/g,Lp=/&/g,jp=/\//g,qp=/=/g,Mp=/\?/g,Rc=/\+/g,Fp=/%5B/g,$p=/%5D/g,Sc=/%5E/g,zp=/%60/g,wc=/%7B/g,Hp=/%7C/g,Ec=/%7D/g,Up=/%20/g;function Jt(e){return e==null?"":encodeURI(""+e).replace(Hp,"|").replace(Fp,"[").replace($p,"]")}function Kp(e){return Jt(e).replace(wc,"{").replace(Ec,"}").replace(Sc,"^")}function St(e){return Jt(e).replace(Rc,"%2B").replace(Up,"+").replace(Tc,"%23").replace(Lp,"%26").replace(zp,"`").replace(wc,"{").replace(Ec,"}").replace(Sc,"^")}function Gp(e){return St(e).replace(qp,"%3D")}function Wp(e){return Jt(e).replace(Tc,"%23").replace(Mp,"%3F")}function Yp(e){return Wp(e).replace(jp,"%2F")}function xa(e){if(e==null)return null;try{return decodeURIComponent(""+e)}catch{}return""+e}const Jp=/\/$/,Qp=e=>e.replace(Jp,"");function tt(e,n,o="/"){let a,r={},i="",s="";const l=n.indexOf("#");let c=n.indexOf("?");return c=l>=0&&c>l?-1:c,c>=0&&(a=n.slice(0,c),i=n.slice(c,l>0?l:n.length),r=e(i.slice(1))),l>=0&&(a=a||n.slice(0,l),s=n.slice(l,n.length)),a=nf(a??n,o),{fullPath:a+i+s,path:a,query:r,hash:xa(s)}}function Xp(e,n){const o=n.query?e(n.query):"";return n.path+(o&&"?")+o+(n.hash||"")}function _s(e,n){return!n||!e.toLowerCase().startsWith(n.toLowerCase())?e:e.slice(n.length)||"/"}function Zp(e,n,o){const a=n.matched.length-1,r=o.matched.length-1;return a>-1&&a===r&&zo(n.matched[a],o.matched[r])&&Cc(n.params,o.params)&&e(n.query)===e(o.query)&&n.hash===o.hash}function zo(e,n){return(e.aliasOf||e)===(n.aliasOf||n)}function Cc(e,n){if(Object.keys(e).length!==Object.keys(n).length)return!1;for(var o in e)if(!ef(e[o],n[o]))return!1;return!0}function ef(e,n){return Pn(e)?ys(e,n):Pn(n)?ys(n,e):e?.valueOf()===n?.valueOf()}function ys(e,n){return Pn(n)?e.length===n.length&&e.every((o,a)=>o===n[a]):e.length===1&&e[0]===n}function nf(e,n){if(e.startsWith("/"))return e;if(!e)return n;const o=n.split("/"),a=e.split("/"),r=a[a.length-1];(r===".."||r===".")&&a.push("");let i=o.length-1,s,l;for(s=0;s<a.length;s++)if(l=a[s],l!==".")if(l==="..")i>1&&i--;else break;return o.slice(0,i).join("/")+"/"+a.slice(s).join("/")}const ro={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};let wt=(function(e){return e.pop="pop",e.push="push",e})({}),it=(function(e){return e.back="back",e.forward="forward",e.unknown="",e})({});function of(e){if(!e)if(Oo){const n=document.querySelector("base");e=n&&n.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),Qp(e)}const af=/^[^#]+#/;function rf(e,n){return e.replace(af,"#")+n}function tf(e,n){const o=document.documentElement.getBoundingClientRect(),a=e.getBoundingClientRect();return{behavior:n.behavior,left:a.left-o.left-(n.left||0),top:a.top-o.top-(n.top||0)}}const _r=()=>({left:window.scrollX,top:window.scrollY});function sf(e){let n;if("el"in e){const o=e.el,a=typeof o=="string"&&o.startsWith("#"),r=typeof o=="string"?a?document.getElementById(o.slice(1)):document.querySelector(o):o;if(!r)return;n=tf(r,e)}else n=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(n):window.scrollTo(n.left!=null?n.left:window.scrollX,n.top!=null?n.top:window.scrollY)}function As(e,n){return(history.state?history.state.position-n:-1)+e}const Et=new Map;function lf(e,n){Et.set(e,n)}function cf(e){const n=Et.get(e);return Et.delete(e),n}function uf(e){return typeof e=="string"||e&&typeof e=="object"}function Ic(e){return typeof e=="string"||typeof e=="symbol"}let Ue=(function(e){return e[e.MATCHER_NOT_FOUND=1]="MATCHER_NOT_FOUND",e[e.NAVIGATION_GUARD_REDIRECT=2]="NAVIGATION_GUARD_REDIRECT",e[e.NAVIGATION_ABORTED=4]="NAVIGATION_ABORTED",e[e.NAVIGATION_CANCELLED=8]="NAVIGATION_CANCELLED",e[e.NAVIGATION_DUPLICATED=16]="NAVIGATION_DUPLICATED",e})({});const Oc=Symbol("");Ue.MATCHER_NOT_FOUND+"",Ue.NAVIGATION_GUARD_REDIRECT+"",Ue.NAVIGATION_ABORTED+"",Ue.NAVIGATION_CANCELLED+"",Ue.NAVIGATION_DUPLICATED+"";function Ho(e,n){return Ve(new Error,{type:e,[Oc]:!0},n)}function Kn(e,n){return e instanceof Error&&Oc in e&&(n==null||!!(e.type&n))}const df=["params","query","hash"];function mf(e){if(typeof e=="string")return e;if(e.path!=null)return e.path;const n={};for(const o of df)o in e&&(n[o]=e[o]);return JSON.stringify(n,null,2)}function pf(e){const n={};if(e===""||e==="?")return n;const o=(e[0]==="?"?e.slice(1):e).split("&");for(let a=0;a<o.length;++a){const r=o[a].replace(Rc," "),i=r.indexOf("="),s=xa(i<0?r:r.slice(0,i)),l=i<0?null:xa(r.slice(i+1));if(s in n){let c=n[s];Pn(c)||(c=n[s]=[c]),c.push(l)}else n[s]=l}return n}function Ns(e){let n="";for(let o in e){const a=e[o];if(o=Gp(o),a==null){a!==void 0&&(n+=(n.length?"&":"")+o);continue}(Pn(a)?a.map(r=>r&&St(r)):[a&&St(a)]).forEach(r=>{r!==void 0&&(n+=(n.length?"&":"")+o,r!=null&&(n+="="+r))})}return n}function ff(e){const n={};for(const o in e){const a=e[o];a!==void 0&&(n[o]=Pn(a)?a.map(r=>r==null?null:""+r):a==null?a:""+a)}return n}const hf=Symbol(""),xs=Symbol(""),yr=Symbol(""),Qt=Symbol(""),Ct=Symbol("");function ea(){let e=[];function n(a){return e.push(a),()=>{const r=e.indexOf(a);r>-1&&e.splice(r,1)}}function o(){e=[]}return{add:n,list:()=>e.slice(),reset:o}}function so(e,n,o,a,r,i=s=>s()){const s=a&&(a.enterCallbacks[r]=a.enterCallbacks[r]||[]);return()=>new Promise((l,c)=>{const u=f=>{f===!1?c(Ho(Ue.NAVIGATION_ABORTED,{from:o,to:n})):f instanceof Error?c(f):uf(f)?c(Ho(Ue.NAVIGATION_GUARD_REDIRECT,{from:n,to:f})):(s&&a.enterCallbacks[r]===s&&typeof f=="function"&&s.push(f),l())},d=i(()=>e.call(a&&a.instances[r],n,o,u));let m=Promise.resolve(d);e.length<3&&(m=m.then(u)),m.catch(f=>c(f))})}function st(e,n,o,a,r=i=>i()){const i=[];for(const s of e)for(const l in s.components){let c=s.components[l];if(!(n!=="beforeRouteEnter"&&!s.instances[l]))if(Bc(c)){const u=(c.__vccOpts||c)[n];u&&i.push(so(u,o,a,s,l,r))}else{let u=c();i.push(()=>u.then(d=>{if(!d)throw new Error(`Couldn't resolve component "${l}" at "${s.path}"`);const m=Dp(d)?d.default:d;s.mods[l]=d,s.components[l]=m;const f=(m.__vccOpts||m)[n];return f&&so(f,o,a,s,l,r)()}))}}return i}function vf(e,n){const o=[],a=[],r=[],i=Math.max(n.matched.length,e.matched.length);for(let s=0;s<i;s++){const l=n.matched[s];l&&(e.matched.find(u=>zo(u,l))?a.push(l):o.push(l));const c=e.matched[s];c&&(n.matched.find(u=>zo(u,c))||r.push(c))}return[o,a,r]}let gf=()=>location.protocol+"//"+location.host;function Pc(e,n){const{pathname:o,search:a,hash:r}=n,i=e.indexOf("#");if(i>-1){let s=r.includes(e.slice(i))?e.slice(i).length:1,l=r.slice(s);return l[0]!=="/"&&(l="/"+l),_s(l,"")}return _s(o,e)+a+r}function bf(e,n,o,a){let r=[],i=[],s=null;const l=({state:f})=>{const v=Pc(e,location),B=o.value,w=n.value;let x=0;if(f){if(o.value=v,n.value=f,s&&s===B){s=null;return}x=w?f.position-w.position:0}else a(v);r.forEach(E=>{E(o.value,B,{delta:x,type:wt.pop,direction:x?x>0?it.forward:it.back:it.unknown})})};function c(){s=o.value}function u(f){r.push(f);const v=()=>{const B=r.indexOf(f);B>-1&&r.splice(B,1)};return i.push(v),v}function d(){if(document.visibilityState==="hidden"){const{history:f}=window;if(!f.state)return;f.replaceState(Ve({},f.state,{scroll:_r()}),"")}}function m(){for(const f of i)f();i=[],window.removeEventListener("popstate",l),window.removeEventListener("pagehide",d),document.removeEventListener("visibilitychange",d)}return window.addEventListener("popstate",l),window.addEventListener("pagehide",d),document.addEventListener("visibilitychange",d),{pauseListeners:c,listen:u,destroy:m}}function Bs(e,n,o,a=!1,r=!1){return{back:e,current:n,forward:o,replaced:a,position:window.history.length,scroll:r?_r():null}}function _f(e){const{history:n,location:o}=window,a={value:Pc(e,o)},r={value:n.state};r.value||i(a.value,{back:null,current:a.value,forward:null,position:n.length-1,replaced:!0,scroll:null},!0);function i(c,u,d){const m=e.indexOf("#"),f=m>-1?(o.host&&document.querySelector("base")?e:e.slice(m))+c:gf()+e+c;try{n[d?"replaceState":"pushState"](u,"",f),r.value=u}catch(v){console.error(v),o[d?"replace":"assign"](f)}}function s(c,u){i(c,Ve({},n.state,Bs(r.value.back,c,r.value.forward,!0),u,{position:r.value.position}),!0),a.value=c}function l(c,u){const d=Ve({},r.value,n.state,{forward:c,scroll:_r()});i(d.current,d,!0),i(c,Ve({},Bs(a.value,c,null),{position:d.position+1},u),!1),a.value=c}return{location:a,state:r,push:l,replace:s}}function yf(e){e=of(e);const n=_f(e),o=bf(e,n.state,n.location,n.replace);function a(i,s=!0){s||o.pauseListeners(),history.go(i)}const r=Ve({location:"",base:e,go:a,createHref:rf.bind(null,e)},n,o);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>n.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>n.state.value}),r}let Ao=(function(e){return e[e.Static=0]="Static",e[e.Param=1]="Param",e[e.Group=2]="Group",e})({});var Ye=(function(e){return e[e.Static=0]="Static",e[e.Param=1]="Param",e[e.ParamRegExp=2]="ParamRegExp",e[e.ParamRegExpEnd=3]="ParamRegExpEnd",e[e.EscapeNext=4]="EscapeNext",e})(Ye||{});const Af={type:Ao.Static,value:""},Nf=/[a-zA-Z0-9_]/;function xf(e){if(!e)return[[]];if(e==="/")return[[Af]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function n(v){throw new Error(`ERR (${o})/"${u}": ${v}`)}let o=Ye.Static,a=o;const r=[];let i;function s(){i&&r.push(i),i=[]}let l=0,c,u="",d="";function m(){u&&(o===Ye.Static?i.push({type:Ao.Static,value:u}):o===Ye.Param||o===Ye.ParamRegExp||o===Ye.ParamRegExpEnd?(i.length>1&&(c==="*"||c==="+")&&n(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),i.push({type:Ao.Param,value:u,regexp:d,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):n("Invalid state to consume buffer"),u="")}function f(){u+=c}for(;l<e.length;){if(c=e[l++],c==="\\"&&o!==Ye.ParamRegExp){a=o,o=Ye.EscapeNext;continue}switch(o){case Ye.Static:c==="/"?(u&&m(),s()):c===":"?(m(),o=Ye.Param):f();break;case Ye.EscapeNext:f(),o=a;break;case Ye.Param:c==="("?o=Ye.ParamRegExp:Nf.test(c)?f():(m(),o=Ye.Static,c!=="*"&&c!=="?"&&c!=="+"&&l--);break;case Ye.ParamRegExp:c===")"?d[d.length-1]=="\\"?d=d.slice(0,-1)+c:o=Ye.ParamRegExpEnd:d+=c;break;case Ye.ParamRegExpEnd:m(),o=Ye.Static,c!=="*"&&c!=="?"&&c!=="+"&&l--,d="";break;default:n("Unknown state");break}}return o===Ye.ParamRegExp&&n(`Unfinished custom RegExp for param "${u}"`),m(),s(),r}const Ts="[^/]+?",Bf={sensitive:!1,strict:!1,start:!0,end:!0};var cn=(function(e){return e[e._multiplier=10]="_multiplier",e[e.Root=90]="Root",e[e.Segment=40]="Segment",e[e.SubSegment=30]="SubSegment",e[e.Static=40]="Static",e[e.Dynamic=20]="Dynamic",e[e.BonusCustomRegExp=10]="BonusCustomRegExp",e[e.BonusWildcard=-50]="BonusWildcard",e[e.BonusRepeatable=-20]="BonusRepeatable",e[e.BonusOptional=-8]="BonusOptional",e[e.BonusStrict=.7000000000000001]="BonusStrict",e[e.BonusCaseSensitive=.25]="BonusCaseSensitive",e})(cn||{});const Tf=/[.+*?^${}()[\]/\\]/g;function Rf(e,n){const o=Ve({},Bf,n),a=[];let r=o.start?"^":"";const i=[];for(const u of e){const d=u.length?[]:[cn.Root];o.strict&&!u.length&&(r+="/");for(let m=0;m<u.length;m++){const f=u[m];let v=cn.Segment+(o.sensitive?cn.BonusCaseSensitive:0);if(f.type===Ao.Static)m||(r+="/"),r+=f.value.replace(Tf,"\\$&"),v+=cn.Static;else if(f.type===Ao.Param){const{value:B,repeatable:w,optional:x,regexp:E}=f;i.push({name:B,repeatable:w,optional:x});const N=E||Ts;if(N!==Ts){v+=cn.BonusCustomRegExp;try{`${N}`}catch(D){throw new Error(`Invalid custom RegExp for param "${B}" (${N}): `+D.message)}}let q=w?`((?:${N})(?:/(?:${N}))*)`:`(${N})`;m||(q=x&&u.length<2?`(?:/${q})`:"/"+q),x&&(q+="?"),r+=q,v+=cn.Dynamic,x&&(v+=cn.BonusOptional),w&&(v+=cn.BonusRepeatable),N===".*"&&(v+=cn.BonusWildcard)}d.push(v)}a.push(d)}if(o.strict&&o.end){const u=a.length-1;a[u][a[u].length-1]+=cn.BonusStrict}o.strict||(r+="/?"),o.end?r+="$":o.strict&&!r.endsWith("/")&&(r+="(?:/|$)");const s=new RegExp(r,o.sensitive?"":"i");function l(u){const d=u.match(s),m={};if(!d)return null;for(let f=1;f<d.length;f++){const v=d[f]||"",B=i[f-1];m[B.name]=v&&B.repeatable?v.split("/"):v}return m}function c(u){let d="",m=!1;for(const f of e){(!m||!d.endsWith("/"))&&(d+="/"),m=!1;for(const v of f)if(v.type===Ao.Static)d+=v.value;else if(v.type===Ao.Param){const{value:B,repeatable:w,optional:x}=v,E=B in u?u[B]:"";if(Pn(E)&&!w)throw new Error(`Provided param "${B}" is an array but it is not repeatable (* or + modifiers)`);const N=Pn(E)?E.join("/"):E;if(!N)if(x)f.length<2&&(d.endsWith("/")?d=d.slice(0,-1):m=!0);else throw new Error(`Missing required param "${B}"`);d+=N}}return d||"/"}return{re:s,score:a,keys:i,parse:l,stringify:c}}function Sf(e,n){let o=0;for(;o<e.length&&o<n.length;){const a=n[o]-e[o];if(a)return a;o++}return e.length<n.length?e.length===1&&e[0]===cn.Static+cn.Segment?-1:1:e.length>n.length?n.length===1&&n[0]===cn.Static+cn.Segment?1:-1:0}function kc(e,n){let o=0;const a=e.score,r=n.score;for(;o<a.length&&o<r.length;){const i=Sf(a[o],r[o]);if(i)return i;o++}if(Math.abs(r.length-a.length)===1){if(Rs(a))return 1;if(Rs(r))return-1}return r.length-a.length}function Rs(e){const n=e[e.length-1];return e.length>0&&n[n.length-1]<0}const wf={strict:!1,end:!0,sensitive:!1};function Ef(e,n,o){const a=Rf(xf(e.path),o),r=Ve(a,{record:e,parent:n,children:[],alias:[]});return n&&!r.record.aliasOf==!n.record.aliasOf&&n.children.push(r),r}function Cf(e,n){const o=[],a=new Map;n=bs(wf,n);function r(m){return a.get(m)}function i(m,f,v){const B=!v,w=ws(m);w.aliasOf=v&&v.record;const x=bs(n,m),E=[w];if("alias"in m){const D=typeof m.alias=="string"?[m.alias]:m.alias;for(const de of D)E.push(ws(Ve({},w,{components:v?v.record.components:w.components,path:de,aliasOf:v?v.record:w})))}let N,q;for(const D of E){const{path:de}=D;if(f&&de[0]!=="/"){const re=f.record.path,z=re[re.length-1]==="/"?"":"/";D.path=f.record.path+(de&&z+de)}if(N=Ef(D,f,x),v?v.alias.push(N):(q=q||N,q!==N&&q.alias.push(N),B&&m.name&&!Es(N)&&s(m.name)),Vc(N)&&c(N),w.children){const re=w.children;for(let z=0;z<re.length;z++)i(re[z],N,v&&v.children[z])}v=v||N}return q?()=>{s(q)}:da}function s(m){if(Ic(m)){const f=a.get(m);f&&(a.delete(m),o.splice(o.indexOf(f),1),f.children.forEach(s),f.alias.forEach(s))}else{const f=o.indexOf(m);f>-1&&(o.splice(f,1),m.record.name&&a.delete(m.record.name),m.children.forEach(s),m.alias.forEach(s))}}function l(){return o}function c(m){const f=Pf(m,o);o.splice(f,0,m),m.record.name&&!Es(m)&&a.set(m.record.name,m)}function u(m,f){let v,B={},w,x;if("name"in m&&m.name){if(v=a.get(m.name),!v)throw Ho(Ue.MATCHER_NOT_FOUND,{location:m});x=v.record.name,B=Ve(Ss(f.params,v.keys.filter(q=>!q.optional).concat(v.parent?v.parent.keys.filter(q=>q.optional):[]).map(q=>q.name)),m.params&&Ss(m.params,v.keys.map(q=>q.name))),w=v.stringify(B)}else if(m.path!=null)w=m.path,v=o.find(q=>q.re.test(w)),v&&(B=v.parse(w),x=v.record.name);else{if(v=f.name?a.get(f.name):o.find(q=>q.re.test(f.path)),!v)throw Ho(Ue.MATCHER_NOT_FOUND,{location:m,currentLocation:f});x=v.record.name,B=Ve({},f.params,m.params),w=v.stringify(B)}const E=[];let N=v;for(;N;)E.unshift(N.record),N=N.parent;return{name:x,path:w,params:B,matched:E,meta:Of(E)}}e.forEach(m=>i(m));function d(){o.length=0,a.clear()}return{addRoute:i,resolve:u,removeRoute:s,clearRoutes:d,getRoutes:l,getRecordMatcher:r}}function Ss(e,n){const o={};for(const a of n)a in e&&(o[a]=e[a]);return o}function ws(e){const n={path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:e.aliasOf,beforeEnter:e.beforeEnter,props:If(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}};return Object.defineProperty(n,"mods",{value:{}}),n}function If(e){const n={},o=e.props||!1;if("component"in e)n.default=o;else for(const a in e.components)n[a]=typeof o=="object"?o[a]:o;return n}function Es(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function Of(e){return e.reduce((n,o)=>Ve(n,o.meta),{})}function Pf(e,n){let o=0,a=n.length;for(;o!==a;){const i=o+a>>1;kc(e,n[i])<0?a=i:o=i+1}const r=kf(e);return r&&(a=n.lastIndexOf(r,a-1)),a}function kf(e){let n=e;for(;n=n.parent;)if(Vc(n)&&kc(e,n)===0)return n}function Vc({record:e}){return!!(e.name||e.components&&Object.keys(e.components).length||e.redirect)}function Cs(e){const n=He(yr),o=He(Qt),a=je(()=>{const c=ie(e.to);return n.resolve(c)}),r=je(()=>{const{matched:c}=a.value,{length:u}=c,d=c[u-1],m=o.matched;if(!d||!m.length)return-1;const f=m.findIndex(zo.bind(null,d));if(f>-1)return f;const v=Is(c[u-2]);return u>1&&Is(d)===v&&m[m.length-1].path!==v?m.findIndex(zo.bind(null,c[u-2])):f}),i=je(()=>r.value>-1&&jf(o.params,a.value.params)),s=je(()=>r.value>-1&&r.value===o.matched.length-1&&Cc(o.params,a.value.params));function l(c={}){if(Lf(c)){const u=n[ie(e.replace)?"replace":"push"](ie(e.to)).catch(da);return e.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>u),u}return Promise.resolve()}return{route:a,href:je(()=>a.value.href),isActive:i,isExactActive:s,navigate:l}}function Vf(e){return e.length===1?e[0]:e}const Df=Sl({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:Cs,setup(e,{slots:n}){const o=Ra(Cs(e)),{options:a}=He(yr),r=je(()=>({[Os(e.activeClass,a.linkActiveClass,"router-link-active")]:o.isActive,[Os(e.exactActiveClass,a.linkExactActiveClass,"router-link-exact-active")]:o.isExactActive}));return()=>{const i=n.default&&Vf(n.default(o));return e.custom?i:Fo("a",{"aria-current":o.isExactActive?e.ariaCurrentValue:null,href:o.href,onClick:o.navigate,class:r.value},i)}}}),ke=Df;function Lf(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const n=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(n))return}return e.preventDefault&&e.preventDefault(),!0}}function jf(e,n){for(const o in n){const a=n[o],r=e[o];if(typeof a=="string"){if(a!==r)return!1}else if(!Pn(r)||r.length!==a.length||a.some((i,s)=>i.valueOf()!==r[s].valueOf()))return!1}return!0}function Is(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const Os=(e,n,o)=>e??n??o,qf=Sl({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:n,slots:o}){const a=He(Ct),r=je(()=>e.route||a.value),i=He(xs,0),s=je(()=>{let u=ie(i);const{matched:d}=r.value;let m;for(;(m=d[u])&&!m.components;)u++;return u}),l=je(()=>r.value.matched[s.value]);sa(xs,je(()=>s.value+1)),sa(hf,l),sa(Ct,r);const c=Se();return To(()=>[c.value,l.value,e.name],([u,d,m],[f,v,B])=>{d&&(d.instances[m]=u,v&&v!==d&&u&&u===f&&(d.leaveGuards.size||(d.leaveGuards=v.leaveGuards),d.updateGuards.size||(d.updateGuards=v.updateGuards))),u&&d&&(!v||!zo(d,v)||!f)&&(d.enterCallbacks[m]||[]).forEach(w=>w(u))},{flush:"post"}),()=>{const u=r.value,d=e.name,m=l.value,f=m&&m.components[d];if(!f)return Ps(o.default,{Component:f,route:u});const v=m.props[d],B=v?v===!0?u.params:typeof v=="function"?v(u):v:null,x=Fo(f,Ve({},B,n,{onVnodeUnmounted:E=>{E.component.isUnmounted&&(m.instances[d]=null)},ref:c}));return Ps(o.default,{Component:x,route:u})||x}}});function Ps(e,n){if(!e)return null;const o=e(n);return o.length===1?o[0]:o}const Dc=qf;function Mf(e){const n=Cf(e.routes,e),o=e.parseQuery||pf,a=e.stringifyQuery||Ns,r=e.history,i=ea(),s=ea(),l=ea(),c=yu(ro);let u=ro;Oo&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const d=rt.bind(null,O=>""+O),m=rt.bind(null,Yp),f=rt.bind(null,xa);function v(O,se){let G,me;return Ic(O)?(G=n.getRecordMatcher(O),me=se):me=O,n.addRoute(me,G)}function B(O){const se=n.getRecordMatcher(O);se&&n.removeRoute(se)}function w(){return n.getRoutes().map(O=>O.record)}function x(O){return!!n.getRecordMatcher(O)}function E(O,se){if(se=Ve({},se||c.value),typeof O=="string"){const y=tt(o,O,se.path),P=n.resolve({path:y.path},se),L=r.createHref(y.fullPath);return Ve(y,P,{params:f(P.params),hash:xa(y.hash),redirectedFrom:void 0,href:L})}let G;if(O.path!=null)G=Ve({},O,{path:tt(o,O.path,se.path).path});else{const y=Ve({},O.params);for(const P in y)y[P]==null&&delete y[P];G=Ve({},O,{params:m(y)}),se.params=m(se.params)}const me=n.resolve(G,se),Ne=O.hash||"";me.params=d(f(me.params));const h=Xp(a,Ve({},O,{hash:Kp(Ne),path:me.path})),g=r.createHref(h);return Ve({fullPath:h,hash:Ne,query:a===Ns?ff(O.query):O.query||{}},me,{redirectedFrom:void 0,href:g})}function N(O){return typeof O=="string"?tt(o,O,c.value.path):Ve({},O)}function q(O,se){if(u!==O)return Ho(Ue.NAVIGATION_CANCELLED,{from:se,to:O})}function D(O){return z(O)}function de(O){return D(Ve(N(O),{replace:!0}))}function re(O,se){const G=O.matched[O.matched.length-1];if(G&&G.redirect){const{redirect:me}=G;let Ne=typeof me=="function"?me(O,se):me;return typeof Ne=="string"&&(Ne=Ne.includes("?")||Ne.includes("#")?Ne=N(Ne):{path:Ne},Ne.params={}),Ve({query:O.query,hash:O.hash,params:Ne.path!=null?{}:O.params},Ne)}}function z(O,se){const G=u=E(O),me=c.value,Ne=O.state,h=O.force,g=O.replace===!0,y=re(G,me);if(y)return z(Ve(N(y),{state:typeof y=="object"?Ve({},Ne,y.state):Ne,force:h,replace:g}),se||G);const P=G;P.redirectedFrom=se;let L;return!h&&Zp(a,me,G)&&(L=Ho(Ue.NAVIGATION_DUPLICATED,{to:P,from:me}),fn(me,me,!0,!1)),(L?Promise.resolve(L):ge(P,me)).catch(C=>Kn(C)?Kn(C,Ue.NAVIGATION_GUARD_REDIRECT)?C:Ze(C):Be(C,P,me)).then(C=>{if(C){if(Kn(C,Ue.NAVIGATION_GUARD_REDIRECT))return z(Ve({replace:g},N(C.to),{state:typeof C.to=="object"?Ve({},Ne,C.to.state):Ne,force:h}),se||P)}else C=T(P,me,!0,g,Ne);return X(P,me,C),C})}function te(O,se){const G=q(O,se);return G?Promise.reject(G):Promise.resolve()}function ae(O){const se=Sn.values().next().value;return se&&typeof se.runWithContext=="function"?se.runWithContext(O):O()}function ge(O,se){let G;const[me,Ne,h]=vf(O,se);G=st(me.reverse(),"beforeRouteLeave",O,se);for(const y of me)y.leaveGuards.forEach(P=>{G.push(so(P,O,se))});const g=te.bind(null,O,se);return G.push(g),Ge(G).then(()=>{G=[];for(const y of i.list())G.push(so(y,O,se));return G.push(g),Ge(G)}).then(()=>{G=st(Ne,"beforeRouteUpdate",O,se);for(const y of Ne)y.updateGuards.forEach(P=>{G.push(so(P,O,se))});return G.push(g),Ge(G)}).then(()=>{G=[];for(const y of h)if(y.beforeEnter)if(Pn(y.beforeEnter))for(const P of y.beforeEnter)G.push(so(P,O,se));else G.push(so(y.beforeEnter,O,se));return G.push(g),Ge(G)}).then(()=>(O.matched.forEach(y=>y.enterCallbacks={}),G=st(h,"beforeRouteEnter",O,se,ae),G.push(g),Ge(G))).then(()=>{G=[];for(const y of s.list())G.push(so(y,O,se));return G.push(g),Ge(G)}).catch(y=>Kn(y,Ue.NAVIGATION_CANCELLED)?y:Promise.reject(y))}function X(O,se,G){l.list().forEach(me=>ae(()=>me(O,se,G)))}function T(O,se,G,me,Ne){const h=q(O,se);if(h)return h;const g=se===ro,y=Oo?history.state:{};G&&(me||g?r.replace(O.fullPath,Ve({scroll:g&&y&&y.scroll},Ne)):r.push(O.fullPath,Ne)),c.value=O,fn(O,se,G,g),Ze()}let F;function Y(){F||(F=r.listen((O,se,G)=>{if(!Ke.listening)return;const me=E(O),Ne=re(me,Ke.currentRoute.value);if(Ne){z(Ve(Ne,{replace:!0,force:!0}),me).catch(da);return}u=me;const h=c.value;Oo&&lf(As(h.fullPath,G.delta),_r()),ge(me,h).catch(g=>Kn(g,Ue.NAVIGATION_ABORTED|Ue.NAVIGATION_CANCELLED)?g:Kn(g,Ue.NAVIGATION_GUARD_REDIRECT)?(z(Ve(N(g.to),{force:!0}),me).then(y=>{Kn(y,Ue.NAVIGATION_ABORTED|Ue.NAVIGATION_DUPLICATED)&&!G.delta&&G.type===wt.pop&&r.go(-1,!1)}).catch(da),Promise.reject()):(G.delta&&r.go(-G.delta,!1),Be(g,me,h))).then(g=>{g=g||T(me,h,!1),g&&(G.delta&&!Kn(g,Ue.NAVIGATION_CANCELLED)?r.go(-G.delta,!1):G.type===wt.pop&&Kn(g,Ue.NAVIGATION_ABORTED|Ue.NAVIGATION_DUPLICATED)&&r.go(-1,!1)),X(me,h,g)}).catch(da)}))}let ue=ea(),J=ea(),Ce;function Be(O,se,G){Ze(O);const me=J.list();return me.length?me.forEach(Ne=>Ne(O,se,G)):console.error(O),Promise.reject(O)}function vn(){return Ce&&c.value!==ro?Promise.resolve():new Promise((O,se)=>{ue.add([O,se])})}function Ze(O){return Ce||(Ce=!O,Y(),ue.list().forEach(([se,G])=>O?G(O):se()),ue.reset()),O}function fn(O,se,G,me){const{scrollBehavior:Ne}=e;if(!Oo||!Ne)return Promise.resolve();const h=!G&&cf(As(O.fullPath,0))||(me||!G)&&history.state&&history.state.scroll||null;return Mo().then(()=>Ne(O,se,h)).then(g=>g&&sf(g)).catch(g=>Be(g,O,se))}const We=O=>r.go(O);let gn;const Sn=new Set,Ke={currentRoute:c,listening:!0,addRoute:v,removeRoute:B,clearRoutes:n.clearRoutes,hasRoute:x,getRoutes:w,resolve:E,options:e,push:D,replace:de,go:We,back:()=>We(-1),forward:()=>We(1),beforeEach:i.add,beforeResolve:s.add,afterEach:l.add,onError:J.add,isReady:vn,install(O){O.component("RouterLink",ke),O.component("RouterView",Dc),O.config.globalProperties.$router=Ke,Object.defineProperty(O.config.globalProperties,"$route",{enumerable:!0,get:()=>ie(c)}),Oo&&!gn&&c.value===ro&&(gn=!0,D(r.location).catch(me=>{}));const se={};for(const me in ro)Object.defineProperty(se,me,{get:()=>c.value[me],enumerable:!0});O.provide(yr,Ke),O.provide(Qt,ul(se)),O.provide(Ct,c);const G=O.unmount;Sn.add(O),O.unmount=function(){Sn.delete(O),Sn.size<1&&(u=ro,F&&F(),F=null,c.value=ro,gn=!1,Ce=!1),G()}}};function Ge(O){return O.reduce((se,G)=>se.then(()=>ae(G)),Promise.resolve())}return Ke}function Lc(){return He(yr)}function Xt(e){return He(Qt)}const Ff="/Extensao-26.2/icon-512.png";const go={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};const ks=(...e)=>e.filter((n,o,a)=>!!n&&n.trim()!==""&&a.indexOf(n)===o).join(" ").trim();function lt(e){return e!=null}function $f(e,n={}){const o=n.attributeNames??{},a=f=>o[f]??f,r=e.size??e.width??go.width,i=e.size??e.height??go.height,s=e.aliases?.filter(f=>typeof f=="string"&&f.trim()!=="").map(f=>`lucide-${f}`)??[],l=[...e.name?[`lucide-${e.name}`]:[],...s],c=n.className?.split(" ").filter(Boolean)??[],u=n.includeDefaultClasses===!1?ks(...c):ks("lucide",...l,...c),d=n.absoluteStrokeWidth?Number(n.strokeWidth??go["stroke-width"])*Number(e.size??e.width??go.width)/Number(n.size??n.width??go.width):n.strokeWidth??go["stroke-width"];return["svg",{...Object.entries(go).reduce((f,[v,B])=>(f[a(v)]=B,f),{}),..."color"in n&&n.color&&{[a("stroke")]:n.color},..."size"in n&&lt(n.size)&&{[a("width")]:n.size,[a("height")]:n.size},..."width"in n&&lt(n.width)&&{[a("width")]:n.width},..."height"in n&&lt(n.height)&&{[a("height")]:n.height},[a("stroke-width")]:d,...u&&{[a("class")]:u},[a("viewBox")]:`0 0 ${r} ${i}`,...n.hasA11yProp===!1?{[a("aria-hidden")]:"true"}:{},..."attributes"in n&&n.attributes},e.node.map(f=>{const[v,B,w]=f,x=n.nonScalingStroke?{[a("vector-effect")]:"non-scaling-stroke",...B}:B;return w?[v,x,w]:[v,x]})]}const zf=e=>{for(const n in e)if(n.startsWith("aria-")||n==="role"||n==="title")return!0;return!1};const qa=e=>e==="";const Hf=e=>e?.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();const Uf=Symbol("lucide-icons");function Kf(){return He(Uf,{})}const Gf=({name:e,iconNode:n,"icon-node":o,icon:a={name:Hf(e),node:n??o,size:24,aliases:[]},absoluteStrokeWidth:r,"absolute-stroke-width":i,nonScalingStroke:s,"non-scaling-stroke":l,strokeWidth:c,"stroke-width":u,size:d,width:m=d,height:f=d,color:v,...B},{slots:w})=>{const{size:x,color:E,strokeWidth:N=2,absoluteStrokeWidth:q=!1,nonScalingStroke:D=!1,class:de=""}=Kf(),re=qa(r)||qa(i)||r===!0||i===!0||q===!0,z=qa(s)||qa(l)||s===!0||l===!0||D===!0;delete B.class;const te=w.default?.(),[,ae,ge=[]]=$f(a,{color:v??E,width:m??d??x,height:f??d??x,strokeWidth:c??u??N,absoluteStrokeWidth:re,nonScalingStroke:z,className:de,hasA11yProp:te!=null&&te.length>0||zf(B),attributes:B});return Fo("svg",ae,[...ge.map(X=>Fo(...X)),...te??[]])};function Rn(e,n=[]){const o=typeof e=="string"?{name:e,node:n}:e;return(a,{slots:r})=>Fo(Gf,{...a,icon:o},r.default?{default:r.default}:void 0)}const Wf={name:"arrow-right",size:24,node:[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]},Yf=Rn(Wf);const Jf={name:"box",size:24,node:[["path",{d:"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",key:"hh9hay"}],["path",{d:"m3.3 7 8.7 5 8.7-5",key:"g66t2b"}],["path",{d:"M12 22V12",key:"d0xqtd"}]]},Qf=Rn(Jf);const Xf={name:"chevron-right",size:24,node:[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]},or=Rn(Xf);const Zf={name:"chevron-left",size:24,node:[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]},Ro=Rn(Zf);const eh={name:"circle-question-mark",size:24,node:[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",key:"1u773s"}],["path",{d:"M12 17h.01",key:"p32p05"}]],aliases:["help-circle","circle-help"]},jc=Rn(eh);const nh={name:"clipboard-check",size:24,node:[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1",key:"tgr4d6"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",key:"116196"}],["path",{d:"m9 14 2 2 4-4",key:"df797q"}]]},No=Rn(nh);const oh={name:"folder-kanban",size:24,node:[["path",{d:"M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z",key:"1fr9dc"}],["path",{d:"M8 10v4",key:"tgpxqk"}],["path",{d:"M12 10v2",key:"hh53o1"}],["path",{d:"M16 10v6",key:"1d6xys"}]]},qc=Rn(oh);const ah={name:"folder-plus",size:24,node:[["path",{d:"M12 10v6",key:"1bos4e"}],["path",{d:"M9 13h6",key:"1uhe8q"}],["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",key:"1kt360"}]]},ar=Rn(ah);const rh={name:"folder",size:24,node:[["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",key:"1kt360"}]]},Vs=Rn(rh);const th={name:"house",size:24,node:[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"r6nss1"}]],aliases:["home"]},ih=Rn(th);const sh={name:"plus",size:24,node:[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]},Ds=Rn(sh);const lh={name:"trash",size:24,node:[["path",{d:"M10 11v6",key:"nco0om"}],["path",{d:"M14 11v6",key:"outv1u"}],["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",key:"miytrc"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",key:"e791ji"}]],aliases:["trash-2"]},Ar=Rn(lh),ch={class:"app-shell"},uh={class:"sidebar"},dh={class:"content",tabindex:"-1"},mh={key:0,class:"bottom-nav"},ph={__name:"AppLayout",setup(e){const n=Xt(),o=je(()=>n.path.startsWith("/rules")?"rules":n.path.startsWith("/quick-evaluation")?"quick":"projects");return(a,r)=>(M(),ee("div",ch,[b("aside",uh,[W(ie(ke),{class:"brand",to:"/projects"},{default:Ae(()=>[...r[0]||(r[0]=[b("img",{class:"brand__mark",src:Ff,alt:"Acesso Verificador"},null,-1),b("span",null,[Re("Acesso"),b("br"),b("small",null,"Verificador")],-1)])]),_:1}),b("nav",null,[W(ie(ke),{class:un(["nav-item",{"is-active":o.value==="projects"}]),to:"/projects"},{default:Ae(()=>[W(ie(Vs),{size:20,"aria-hidden":"true"}),r[1]||(r[1]=b("span",null,"Projetos",-1))]),_:1},8,["class"]),W(ie(ke),{class:un(["nav-item",{"is-active":o.value==="quick"}]),to:"/quick-evaluation"},{default:Ae(()=>[W(ie(No),{size:20,"aria-hidden":"true"}),r[2]||(r[2]=b("span",null,"Avaliação rápida",-1))]),_:1},8,["class"]),W(ie(ke),{class:un(["nav-item",{"is-active":o.value==="rules"}]),to:"/rules"},{default:Ae(()=>[W(ie(No),{size:20,"aria-hidden":"true"}),r[3]||(r[3]=b("span",null,"Regras",-1))]),_:1},8,["class"])])]),b("main",dh,[hn(a.$slots,"default")]),ie(n).meta.hideBottomNav?Te("",!0):(M(),ee("nav",mh,[W(ie(ke),{class:un(["nav-item",{"is-active":o.value==="projects"}]),to:"/projects"},{default:Ae(()=>[W(ie(Vs),{size:20,"aria-hidden":"true"}),r[4]||(r[4]=b("span",null,"Projetos",-1))]),_:1},8,["class"]),W(ie(ke),{class:un(["nav-item",{"is-active":o.value==="quick"}]),to:"/quick-evaluation"},{default:Ae(()=>[W(ie(No),{size:20,"aria-hidden":"true"}),r[5]||(r[5]=b("span",null,"Avaliação rápida",-1))]),_:1},8,["class"]),W(ie(ke),{class:un(["nav-item",{"is-active":o.value==="rules"}]),to:"/rules"},{default:Ae(()=>[W(ie(No),{size:20,"aria-hidden":"true"}),r[6]||(r[6]=b("span",null,"Regras",-1))]),_:1},8,["class"])]))]))}},Zt=(e,n)=>{const o=e.__vccOpts||e;for(const[a,r]of n)o[a]=r;return o},fh={id:"confirm-popup-message",class:"confirm-popup__message"},hh={class:"confirm-popup__actions"},vh={__name:"ConfirmPopup",setup(e,{expose:n}){const o=Se(null),a=Se(null),r=Se(!1),i=Se(""),s=Se({top:"0px",left:"0px"});let l=null,c=null;function u(){if(!l||!o.value)return;const x=l.getBoundingClientRect(),E=o.value.getBoundingClientRect(),N=8,q=12,de=x.bottom+N+E.height<=window.innerHeight-q?x.bottom+N:Math.max(q,x.top-E.height-N),re=Math.min(Math.max(q,x.left),Math.max(q,window.innerWidth-E.width-q));s.value={top:`${de}px`,left:`${re}px`}}function d(x){!o.value?.contains(x.target)&&!l?.contains(x.target)&&v({restoreFocus:!1})}function m(x){x.key==="Escape"&&(x.preventDefault(),v())}function f(){document.removeEventListener("pointerdown",d,!0),document.removeEventListener("keydown",m),window.removeEventListener("resize",u),window.removeEventListener("scroll",u,!0)}function v({restoreFocus:x=!0}={}){if(!r.value)return;r.value=!1,f(),l?.removeAttribute("aria-expanded"),l?.removeAttribute("aria-controls");const E=l;l=null,c=null,x&&Mo(()=>E?.focus?.())}async function B(x){v({restoreFocus:!1}),l=x.target,i.value=x.message,c=x.onAccept,r.value=!0,l?.setAttribute("aria-expanded","true"),l?.setAttribute("aria-controls","confirm-popup"),await Mo(),u(),document.addEventListener("pointerdown",d,!0),document.addEventListener("keydown",m),window.addEventListener("resize",u),window.addEventListener("scroll",u,!0),a.value?.focus()}async function w(){const x=c;v({restoreFocus:!1}),await x?.()}return n({open:B}),zt(()=>{f(),l?.removeAttribute("aria-expanded"),l?.removeAttribute("aria-controls")}),(x,E)=>(M(),Fe(Al,{to:"body"},[r.value?(M(),ee("section",{key:0,id:"confirm-popup",ref_key:"popup",ref:o,class:"confirm-popup",role:"alertdialog","aria-modal":"false","aria-labelledby":"confirm-popup-message",style:Ta(s.value)},[b("p",fh,pe(i.value),1),b("div",hh,[b("button",{ref_key:"cancelButton",ref:a,class:"confirm-popup__button confirm-popup__button--cancel",type:"button",onClick:E[0]||(E[0]=N=>v())}," Cancelar ",512),b("button",{class:"confirm-popup__button confirm-popup__button--accept",type:"button",onClick:w}," Excluir ")])],4)):Te("",!0)]))}},gh=Zt(vh,[["__scopeId","data-v-86763dfc"]]),bh={class:"welcome-popup",role:"dialog","aria-modal":"true","aria-labelledby":"welcome-title","aria-describedby":"welcome-description"},_h={class:"welcome-popup__content"},yh={class:"welcome-popup__steps"},Ah={__name:"WelcomePopup",emits:["close"],setup(e,{emit:n}){const o=n,a=Se(null),r=Se(null);let i="";function s(l){if(l.key==="Escape"){o("close");return}l.key==="Tab"&&l.shiftKey&&document.activeElement===a.value?(l.preventDefault(),r.value?.focus()):l.key==="Tab"&&!l.shiftKey&&document.activeElement===r.value&&(l.preventDefault(),a.value?.focus())}return zn(()=>{document.addEventListener("keydown",s),i=document.body.style.overflow,document.body.style.overflow="hidden",a.value?.focus()}),Ht(()=>{document.removeEventListener("keydown",s),document.body.style.overflow=i}),(l,c)=>(M(),Fe(Al,{to:"body"},[b("div",{class:"welcome-backdrop",onClick:c[2]||(c[2]=co(u=>o("close"),["self"]))},[b("section",bh,[b("button",{ref_key:"closeButton",ref:a,class:"welcome-popup__close",type:"button","aria-label":"Fechar apresentação",onClick:c[0]||(c[0]=u=>o("close"))}," × ",512),c[8]||(c[8]=b("div",{class:"welcome-popup__hero"},[b("h1",{id:"welcome-title"},"Acessibilidade começa com atenção aos detalhes."),b("p",{id:"welcome-description"}," Este espaço ajuda você a organizar e apoiar avaliações de acessibilidade em locais e ambientes. ")],-1)),b("div",_h,[c[6]||(c[6]=b("h2",null,"Como funciona",-1)),b("div",yh,[b("article",null,[W(ie(qc),{size:22,"aria-hidden":"true"}),c[3]||(c[3]=b("div",null,[b("h3",null,"Organize seus locais"),b("p",null,"Crie projetos, separe os ambientes e cadastre os elementos que deseja avaliar.")],-1))]),b("article",null,[W(ie(No),{size:22,"aria-hidden":"true"}),c[4]||(c[4]=b("div",null,[b("h3",null,"Faça as verificações"),b("p",null,"Preencha checklists e consulte resultados por elemento, ambiente ou projeto.")],-1))])]),c[7]||(c[7]=b("p",{class:"welcome-popup__note"}," Os resultados são um apoio à avaliação e não substituem a análise de um profissional nem a consulta às normas aplicáveis. ",-1)),b("button",{ref_key:"actionButton",ref:r,class:"button welcome-popup__action",type:"button",onClick:c[1]||(c[1]=u=>o("close"))},[c[5]||(c[5]=Re(" Começar ",-1)),W(ie(Yf),{size:18,"aria-hidden":"true"})],512)])])])]))}},Nh=Zt(Ah,[["__scopeId","data-v-06138522"]]);var xh=Object.defineProperty,Bh=Object.defineProperties,Th=Object.getOwnPropertyDescriptors,Ls=Object.getOwnPropertySymbols,Rh=Object.prototype.hasOwnProperty,Sh=Object.prototype.propertyIsEnumerable,js=(e,n,o)=>n in e?xh(e,n,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[n]=o,Eo=(e,n)=>{for(var o in n||(n={}))Rh.call(n,o)&&js(e,o,n[o]);if(Ls)for(var o of Ls(n))Sh.call(n,o)&&js(e,o,n[o]);return e},qs=(e,n)=>Bh(e,Th(n));const wh={props:{autoscroll:{type:Boolean,default:!0}},watch:{typeAheadPointer(){this.autoscroll&&this.maybeAdjustScroll()},open(e){this.autoscroll&&e&&this.$nextTick(()=>this.maybeAdjustScroll())}},methods:{maybeAdjustScroll(){var e;const n=((e=this.$refs.dropdownMenu)==null?void 0:e.children[this.typeAheadPointer])||!1;if(n){const o=this.getDropdownViewport(),{top:a,bottom:r,height:i}=n.getBoundingClientRect();if(a<o.top)return this.$refs.dropdownMenu.scrollTop=n.offsetTop;if(r>o.bottom)return this.$refs.dropdownMenu.scrollTop=n.offsetTop-(o.height-i)}},getDropdownViewport(){return this.$refs.dropdownMenu?this.$refs.dropdownMenu.getBoundingClientRect():{height:0,top:0,bottom:0}}}},Eh={data(){return{typeAheadPointer:-1}},watch:{filteredOptions(){for(let e=0;e<this.filteredOptions.length;e++)if(this.selectable(this.filteredOptions[e])){this.typeAheadPointer=e;break}},open(e){e&&this.typeAheadToLastSelected()},selectedValue(){this.open&&this.typeAheadToLastSelected()}},methods:{typeAheadUp(){for(let e=this.typeAheadPointer-1;e>=0;e--)if(this.selectable(this.filteredOptions[e])){this.typeAheadPointer=e;break}},typeAheadDown(){for(let e=this.typeAheadPointer+1;e<this.filteredOptions.length;e++)if(this.selectable(this.filteredOptions[e])){this.typeAheadPointer=e;break}},typeAheadSelect(){const e=this.filteredOptions[this.typeAheadPointer];e&&this.selectable(e)&&this.select(e)},typeAheadToLastSelected(){this.typeAheadPointer=this.selectedValue.length!==0?this.filteredOptions.indexOf(this.selectedValue[this.selectedValue.length-1]):-1}}},Ch={props:{loading:{type:Boolean,default:!1}},data(){return{mutableLoading:!1}},watch:{search(){this.$emit("search",this.search,this.toggleLoading)},loading(e){this.mutableLoading=e}},methods:{toggleLoading(e=null){return e==null?this.mutableLoading=!this.mutableLoading:this.mutableLoading=e}}},ei=(e,n)=>{const o=e.__vccOpts||e;for(const[a,r]of n)o[a]=r;return o},Ih={},Oh={xmlns:"http://www.w3.org/2000/svg",width:"10",height:"10"},Ph=b("path",{d:"M6.895455 5l2.842897-2.842898c.348864-.348863.348864-.914488 0-1.263636L9.106534.261648c-.348864-.348864-.914489-.348864-1.263636 0L5 3.104545 2.157102.261648c-.348863-.348864-.914488-.348864-1.263636 0L.261648.893466c-.348864.348864-.348864.914489 0 1.263636L3.104545 5 .261648 7.842898c-.348864.348863-.348864.914488 0 1.263636l.631818.631818c.348864.348864.914773.348864 1.263636 0L5 6.895455l2.842898 2.842897c.348863.348864.914772.348864 1.263636 0l.631818-.631818c.348864-.348864.348864-.914489 0-1.263636L6.895455 5z"},null,-1),kh=[Ph];function Vh(e,n){return M(),ee("svg",Oh,kh)}const Dh=ei(Ih,[["render",Vh]]),Lh={},jh={xmlns:"http://www.w3.org/2000/svg",width:"14",height:"10"},qh=b("path",{d:"M9.211364 7.59931l4.48338-4.867229c.407008-.441854.407008-1.158247 0-1.60046l-.73712-.80023c-.407008-.441854-1.066904-.441854-1.474243 0L7 5.198617 2.51662.33139c-.407008-.441853-1.066904-.441853-1.474243 0l-.737121.80023c-.407008.441854-.407008 1.158248 0 1.600461l4.48338 4.867228L7 10l2.211364-2.40069z"},null,-1),Mh=[qh];function Fh(e,n){return M(),ee("svg",jh,Mh)}const $h=ei(Lh,[["render",Fh]]),Ms={Deselect:Dh,OpenIndicator:$h},zh={mounted(e,{instance:n}){if(n.appendToBody){const{height:o,top:a,left:r,width:i}=n.$refs.toggle.getBoundingClientRect();let s=window.scrollX||window.pageXOffset,l=window.scrollY||window.pageYOffset;e.unbindPosition=n.calculatePosition(e,n,{width:i+"px",left:s+r+"px",top:l+a+o+"px"}),document.body.appendChild(e)}},unmounted(e,{instance:n}){n.appendToBody&&(e.unbindPosition&&typeof e.unbindPosition=="function"&&e.unbindPosition(),e.parentNode&&e.parentNode.removeChild(e))}};function Hh(e){const n={};return Object.keys(e).sort().forEach(o=>{n[o]=e[o]}),JSON.stringify(n)}let Uh=0;function Kh(){return++Uh}const Gh={components:Eo({},Ms),directives:{appendToBody:zh},mixins:[wh,Eh,Ch],compatConfig:{MODE:3},emits:["open","close","update:modelValue","search","search:compositionstart","search:compositionend","search:keydown","search:blur","search:focus","search:input","option:created","option:selecting","option:selected","option:deselecting","option:deselected"],props:{modelValue:{},components:{type:Object,default:()=>({})},options:{type:Array,default(){return[]}},disabled:{type:Boolean,default:!1},clearable:{type:Boolean,default:!0},deselectFromDropdown:{type:Boolean,default:!1},searchable:{type:Boolean,default:!0},multiple:{type:Boolean,default:!1},placeholder:{type:String,default:""},transition:{type:String,default:"vs__fade"},clearSearchOnSelect:{type:Boolean,default:!0},closeOnSelect:{type:Boolean,default:!0},label:{type:String,default:"label"},autocomplete:{type:String,default:"off"},reduce:{type:Function,default:e=>e},selectable:{type:Function,default:e=>!0},getOptionLabel:{type:Function,default(e){return typeof e=="object"?e.hasOwnProperty(this.label)?e[this.label]:console.warn(`[vue-select warn]: Label key "option.${this.label}" does not exist in options object ${JSON.stringify(e)}.
https://vue-select.org/api/props.html#getoptionlabel`):e}},getOptionKey:{type:Function,default(e){if(typeof e!="object")return e;try{return e.hasOwnProperty("id")?e.id:Hh(e)}catch(n){return console.warn(`[vue-select warn]: Could not stringify this option to generate unique key. Please provide'getOptionKey' prop to return a unique key for each option.
https://vue-select.org/api/props.html#getoptionkey`,e,n)}}},onTab:{type:Function,default:function(){this.selectOnTab&&!this.isComposing&&this.typeAheadSelect()}},taggable:{type:Boolean,default:!1},tabindex:{type:Number,default:null},pushTags:{type:Boolean,default:!1},filterable:{type:Boolean,default:!0},filterBy:{type:Function,default(e,n,o){return(n||"").toLocaleLowerCase().indexOf(o.toLocaleLowerCase())>-1}},filter:{type:Function,default(e,n){return e.filter(o=>{let a=this.getOptionLabel(o);return typeof a=="number"&&(a=a.toString()),this.filterBy(o,a,n)})}},createOption:{type:Function,default(e){return typeof this.optionList[0]=="object"?{[this.label]:e}:e}},resetOnOptionsChange:{default:!1,validator:e=>["function","boolean"].includes(typeof e)},clearSearchOnBlur:{type:Function,default:function({clearSearchOnSelect:e,multiple:n}){return e&&!n}},noDrop:{type:Boolean,default:!1},inputId:{type:String},dir:{type:String,default:"auto"},selectOnTab:{type:Boolean,default:!1},selectOnKeyCodes:{type:Array,default:()=>[13]},searchInputQuerySelector:{type:String,default:"[type=search]"},mapKeydown:{type:Function,default:(e,n)=>e},appendToBody:{type:Boolean,default:!1},calculatePosition:{type:Function,default(e,n,{width:o,top:a,left:r}){e.style.top=a,e.style.left=r,e.style.width=o}},dropdownShouldOpen:{type:Function,default({noDrop:e,open:n,mutableLoading:o}){return e?!1:n&&!o}},uid:{type:[String,Number],default:()=>Kh()}},data(){return{search:"",open:!1,isComposing:!1,pushedTags:[],_value:[],deselectButtons:[]}},computed:{isReducingValues(){return this.$props.reduce!==this.$options.props.reduce.default},isTrackingValues(){return typeof this.modelValue>"u"||this.isReducingValues},selectedValue(){let e=this.modelValue;return this.isTrackingValues&&(e=this.$data._value),e!=null&&e!==""?[].concat(e):[]},optionList(){return this.options.concat(this.pushTags?this.pushedTags:[])},searchEl(){return this.$slots.search?this.$refs.selectedOptions.querySelector(this.searchInputQuerySelector):this.$refs.search},scope(){const e={search:this.search,loading:this.loading,searching:this.searching,filteredOptions:this.filteredOptions};return{search:{attributes:Eo({disabled:this.disabled,placeholder:this.searchPlaceholder,tabindex:this.tabindex,readonly:!this.searchable,id:this.inputId,"aria-autocomplete":"list","aria-labelledby":`vs${this.uid}__combobox`,"aria-controls":`vs${this.uid}__listbox`,ref:"search",type:"search",autocomplete:this.autocomplete,value:this.search},this.dropdownOpen&&this.filteredOptions[this.typeAheadPointer]?{"aria-activedescendant":`vs${this.uid}__option-${this.typeAheadPointer}`}:{}),events:{compositionstart:()=>this.isComposing=!0,compositionend:()=>this.isComposing=!1,keydown:this.onSearchKeyDown,blur:this.onSearchBlur,focus:this.onSearchFocus,input:n=>this.search=n.target.value}},spinner:{loading:this.mutableLoading},noOptions:{search:this.search,loading:this.mutableLoading,searching:this.searching},openIndicator:{attributes:{ref:"openIndicator",role:"presentation",class:"vs__open-indicator"}},listHeader:e,listFooter:e,header:qs(Eo({},e),{deselect:this.deselect}),footer:qs(Eo({},e),{deselect:this.deselect})}},childComponents(){return Eo(Eo({},Ms),this.components)},stateClasses(){return{"vs--open":this.dropdownOpen,"vs--single":!this.multiple,"vs--multiple":this.multiple,"vs--searching":this.searching&&!this.noDrop,"vs--searchable":this.searchable&&!this.noDrop,"vs--unsearchable":!this.searchable,"vs--loading":this.mutableLoading,"vs--disabled":this.disabled}},searching(){return!!this.search},dropdownOpen(){return this.dropdownShouldOpen(this)},searchPlaceholder(){return this.isValueEmpty&&this.placeholder?this.placeholder:void 0},filteredOptions(){const e=[].concat(this.optionList);if(!this.filterable&&!this.taggable)return e;const n=this.search.length?this.filter(e,this.search,this):e;if(this.taggable&&this.search.length){const o=this.createOption(this.search);this.optionExists(o)||n.unshift(o)}return n},isValueEmpty(){return this.selectedValue.length===0},showClearButton(){return!this.multiple&&this.clearable&&!this.open&&!this.isValueEmpty}},watch:{options(e,n){const o=()=>typeof this.resetOnOptionsChange=="function"?this.resetOnOptionsChange(e,n,this.selectedValue):this.resetOnOptionsChange;!this.taggable&&o()&&this.clearSelection(),this.modelValue&&this.isTrackingValues&&this.setInternalValueFromOptions(this.modelValue)},modelValue:{immediate:!0,handler(e){this.isTrackingValues&&this.setInternalValueFromOptions(e)}},multiple(){this.clearSelection()},open(e){this.$emit(e?"open":"close")}},created(){this.mutableLoading=this.loading},methods:{setInternalValueFromOptions(e){Array.isArray(e)?this.$data._value=e.map(n=>this.findOptionFromReducedValue(n)):this.$data._value=this.findOptionFromReducedValue(e)},select(e){this.$emit("option:selecting",e),this.isOptionSelected(e)?this.deselectFromDropdown&&(this.clearable||this.multiple&&this.selectedValue.length>1)&&this.deselect(e):(this.taggable&&!this.optionExists(e)&&(this.$emit("option:created",e),this.pushTag(e)),this.multiple&&(e=this.selectedValue.concat(e)),this.updateValue(e),this.$emit("option:selected",e)),this.onAfterSelect(e)},deselect(e){this.$emit("option:deselecting",e),this.updateValue(this.selectedValue.filter(n=>!this.optionComparator(n,e))),this.$emit("option:deselected",e)},clearSelection(){this.updateValue(this.multiple?[]:null)},onAfterSelect(e){this.closeOnSelect&&(this.open=!this.open,this.searchEl.blur()),this.clearSearchOnSelect&&(this.search="")},updateValue(e){typeof this.modelValue>"u"&&(this.$data._value=e),e!==null&&(Array.isArray(e)?e=e.map(n=>this.reduce(n)):e=this.reduce(e)),this.$emit("update:modelValue",e)},toggleDropdown(e){const n=e.target!==this.searchEl;n&&e.preventDefault();const o=[...this.deselectButtons||[],this.$refs.clearButton];if(this.searchEl===void 0||o.filter(Boolean).some(a=>a.contains(e.target)||a===e.target)){e.preventDefault();return}this.open&&n?this.searchEl.blur():this.disabled||(this.open=!0,this.searchEl.focus())},isOptionSelected(e){return this.selectedValue.some(n=>this.optionComparator(n,e))},isOptionDeselectable(e){return this.isOptionSelected(e)&&this.deselectFromDropdown},optionComparator(e,n){return this.getOptionKey(e)===this.getOptionKey(n)},findOptionFromReducedValue(e){const n=a=>JSON.stringify(this.reduce(a))===JSON.stringify(e),o=[...this.options,...this.pushedTags].filter(n);return o.length===1?o[0]:o.find(a=>this.optionComparator(a,this.$data._value))||e},closeSearchOptions(){this.open=!1,this.$emit("search:blur")},maybeDeleteValue(){if(!this.searchEl.value.length&&this.selectedValue&&this.selectedValue.length&&this.clearable){let e=null;this.multiple&&(e=[...this.selectedValue.slice(0,this.selectedValue.length-1)]),this.updateValue(e)}},optionExists(e){return this.optionList.some(n=>this.optionComparator(n,e))},normalizeOptionForSlot(e){return typeof e=="object"?e:{[this.label]:e}},pushTag(e){this.pushedTags.push(e)},onEscape(){this.search.length?this.search="":this.searchEl.blur()},onSearchBlur(){if(this.mousedown&&!this.searching)this.mousedown=!1;else{const{clearSearchOnSelect:e,multiple:n}=this;this.clearSearchOnBlur({clearSearchOnSelect:e,multiple:n})&&(this.search=""),this.closeSearchOptions();return}if(this.search.length===0&&this.options.length===0){this.closeSearchOptions();return}},onSearchFocus(){this.open=!0,this.$emit("search:focus")},onMousedown(){this.mousedown=!0},onMouseUp(){this.mousedown=!1},onSearchKeyDown(e){const n=r=>(r.preventDefault(),!this.isComposing&&this.typeAheadSelect()),o={8:r=>this.maybeDeleteValue(),9:r=>this.onTab(),27:r=>this.onEscape(),38:r=>(r.preventDefault(),this.typeAheadUp()),40:r=>(r.preventDefault(),this.typeAheadDown())};this.selectOnKeyCodes.forEach(r=>o[r]=n);const a=this.mapKeydown(o,this);if(typeof a[e.keyCode]=="function")return a[e.keyCode](e)}}},Wh=["dir"],Yh=["id","aria-expanded","aria-owns"],Jh={ref:"selectedOptions",class:"vs__selected-options"},Qh=["disabled","title","aria-label","onClick"],Xh={ref:"actions",class:"vs__actions"},Zh=["disabled"],e0={class:"vs__spinner"},n0=["id"],o0=["id","aria-selected","onMouseover","onClick"],a0={key:0,class:"vs__no-options"},r0=Re(" Sorry, no matching options. "),t0=["id"];function i0(e,n,o,a,r,i){const s=Ju("append-to-body");return M(),ee("div",{dir:o.dir,class:un(["v-select",i.stateClasses])},[hn(e.$slots,"header",wn(En(i.scope.header))),b("div",{id:`vs${o.uid}__combobox`,ref:"toggle",class:"vs__dropdown-toggle",role:"combobox","aria-expanded":i.dropdownOpen.toString(),"aria-owns":`vs${o.uid}__listbox`,"aria-label":"Search for option",onMousedown:n[1]||(n[1]=l=>i.toggleDropdown(l))},[b("div",Jh,[(M(!0),ee(we,null,Bn(i.selectedValue,(l,c)=>hn(e.$slots,"selected-option-container",{option:i.normalizeOptionForSlot(l),deselect:i.deselect,multiple:o.multiple,disabled:o.disabled},()=>[(M(),ee("span",{key:o.getOptionKey(l),class:"vs__selected"},[hn(e.$slots,"selected-option",wn(En(i.normalizeOptionForSlot(l))),()=>[Re(pe(o.getOptionLabel(l)),1)]),o.multiple?(M(),ee("button",{key:0,ref_for:!0,ref:u=>r.deselectButtons[c]=u,disabled:o.disabled,type:"button",class:"vs__deselect",title:`Deselect ${o.getOptionLabel(l)}`,"aria-label":`Deselect ${o.getOptionLabel(l)}`,onClick:u=>i.deselect(l)},[(M(),Fe(Sr(i.childComponents.Deselect)))],8,Qh)):Te("",!0)]))])),256)),hn(e.$slots,"search",wn(En(i.scope.search)),()=>[b("input",xt({class:"vs__search"},i.scope.search.attributes,Qu(i.scope.search.events)),null,16)])],512),b("div",Xh,[An(b("button",{ref:"clearButton",disabled:o.disabled,type:"button",class:"vs__clear",title:"Clear Selected","aria-label":"Clear Selected",onClick:n[0]||(n[0]=(...l)=>i.clearSelection&&i.clearSelection(...l))},[(M(),Fe(Sr(i.childComponents.Deselect)))],8,Zh),[[Ci,i.showClearButton]]),hn(e.$slots,"open-indicator",wn(En(i.scope.openIndicator)),()=>[o.noDrop?Te("",!0):(M(),Fe(Sr(i.childComponents.OpenIndicator),wn(xt({key:0},i.scope.openIndicator.attributes)),null,16))]),hn(e.$slots,"spinner",wn(En(i.scope.spinner)),()=>[An(b("div",e0,"Loading...",512),[[Ci,e.mutableLoading]])])],512)],40,Yh),W(Fd,{name:o.transition},{default:Ae(()=>[i.dropdownOpen?An((M(),ee("ul",{id:`vs${o.uid}__listbox`,ref:"dropdownMenu",key:`vs${o.uid}__listbox`,class:"vs__dropdown-menu",role:"listbox",tabindex:"-1",onMousedown:n[2]||(n[2]=co((...l)=>i.onMousedown&&i.onMousedown(...l),["prevent"])),onMouseup:n[3]||(n[3]=(...l)=>i.onMouseUp&&i.onMouseUp(...l))},[hn(e.$slots,"list-header",wn(En(i.scope.listHeader))),(M(!0),ee(we,null,Bn(i.filteredOptions,(l,c)=>(M(),ee("li",{id:`vs${o.uid}__option-${c}`,key:o.getOptionKey(l),role:"option",class:un(["vs__dropdown-option",{"vs__dropdown-option--deselect":i.isOptionDeselectable(l)&&c===e.typeAheadPointer,"vs__dropdown-option--selected":i.isOptionSelected(l),"vs__dropdown-option--highlight":c===e.typeAheadPointer,"vs__dropdown-option--disabled":!o.selectable(l)}]),"aria-selected":c===e.typeAheadPointer?!0:null,onMouseover:u=>o.selectable(l)?e.typeAheadPointer=c:null,onClick:co(u=>o.selectable(l)?i.select(l):null,["prevent","stop"])},[hn(e.$slots,"option",wn(En(i.normalizeOptionForSlot(l))),()=>[Re(pe(o.getOptionLabel(l)),1)])],42,o0))),128)),i.filteredOptions.length===0?(M(),ee("li",a0,[hn(e.$slots,"no-options",wn(En(i.scope.noOptions)),()=>[r0])])):Te("",!0),hn(e.$slots,"list-footer",wn(En(i.scope.listFooter)))],40,n0)),[[s]]):(M(),ee("ul",{key:1,id:`vs${o.uid}__listbox`,role:"listbox",style:{display:"none",visibility:"hidden"}},null,8,t0))]),_:3},8,["name"]),hn(e.$slots,"footer",wn(En(i.scope.footer)))],10,Wh)}const s0=ei(Gh,[["render",i0]]),l0={class:"page-header"},c0={class:"page-header__row"},u0={key:0},uo={__name:"PageHeader",props:{title:{type:String,required:!0},description:String},setup(e){return(n,o)=>(M(),ee("header",l0,[b("div",c0,[b("div",null,[b("h1",null,pe(e.title),1),e.description?(M(),ee("p",u0,pe(e.description),1)):Te("",!0)]),hn(n.$slots,"action")])]))}},d0={class:"empty-state"},m0={key:0,class:"empty-state__actions"},$n={__name:"EmptyState",props:{title:String,text:String},setup(e){return(n,o)=>(M(),ee("section",d0,[o[0]||(o[0]=b("div",{class:"empty-state__icon","aria-hidden":"true"},"+",-1)),b("h2",null,pe(e.title),1),b("p",null,pe(e.text),1),n.$slots.default?(M(),ee("div",m0,[hn(n.$slots,"default")])):Te("",!0)]))}},p0={class:"ruleset-grid"},f0={class:"field"},h0=["value"],v0={class:"field"},g0={class:"ruleset-option"},b0={class:"ruleset-title"},_0={key:0,class:"ruleset-norma"},y0={key:0,class:"field"},A0={class:"field-name-input"},N0={id:"field-name-input__checkbox"},x0={class:"fields-grid"},B0={key:1},T0=["title","aria-label","aria-expanded","onClick"],R0={key:3,class:"parameter-definition"},S0={key:4,class:"expected-value"},w0=["onUpdate:modelValue"],E0=["onUpdate:modelValue"],C0=["value"],I0=["onUpdate:modelValue"],O0={class:"form-actions"},P0={__name:"ElementPage",props:{elementId:String,quick:Boolean},setup(e){const n=e,o=He("services"),a=He("builtInRuleSets"),r=Xt(),i=Lc(),s=Se(null),l=Se(null),c=Se([]),u=Se([]),d=Se(null),m=Se("todas"),f=Se(localStorage.getItem("elementAutoName")==="true"),v=Se(null),B=Ra({name:"",ruleSet:"",data:{}}),w=je(()=>!n.elementId),x=je(()=>u.value.find(X=>X.id===B.ruleSet)),E=je(()=>{const X={};for(const T of x.value?.regras??[]){const F=T.tipo==="conditional"?(()=>{const Y=B.data[T.parametro];if(Y==null||Y==="")return[];const ue=(T.condicoes??[]).find(J=>J.quando&&Ha(Y,J.quando.operador,J.quando.valor));return ue?.verificar?[ue.verificar]:[]})():T.operador&&T.valor!==void 0?[{...T,parametro:T.parametro}]:[];for(const Y of F){if(!Y.parametro||Y.valor===void 0)continue;X[Y.parametro]??=[];const ue=N(Y.operador,Y.valor,x.value.parametros?.[Y.parametro]?.unidade);X[Y.parametro].includes(ue)||X[Y.parametro].push(ue)}}return X});function N(X,T,F=""){const ue=`${typeof T=="boolean"?T?"Sim":"Não":T}${F??""}`;switch(X){case">=":return`no mínimo, ${ue}`;case"<=":return`no máximo, ${ue}`;case">":return`maior que ${ue}`;case"<":return`menor que ${ue}`;case"==":case"eq":return`igual a ${ue}`;default:return ue}}const q=je(()=>{const X=u.value.map(T=>T.norma?.nome).filter(Boolean);return["todas",...new Set(X)]}),D=je(()=>m.value==="todas"?u.value:u.value.filter(X=>X.norma?.nome===m.value));async function de(){n.quick&&o.quickEvaluationService.clear();const X=await o.ruleSetService.list();u.value=[...a.map(F=>F.ruleSet),...X],w.value||(s.value=await o.repositories.elementRepository.get(n.elementId));const T=s.value?.environmentId??r.query.environmentId;if(!(!n.quick&&(!T||!w.value&&!s.value))){if(n.quick||(l.value=await o.repositories.environmentRepository.get(T),c.value=await o.projectService.listElements(T)),s.value){const F=await o.evaluationService.listEvaluations(s.value.id);d.value=F[0]}B.name=s.value?.name??"",B.ruleSet=r.query.ruleSet??s.value?.rule??u.value[0]?.id??"",Object.assign(B.data,d.value?.data??{})}}function re(){const X={},T=x.value?.parametros??{};for(const[F,Y]of Object.entries(T)){const ue=B.data[F];ue===""||ue===void 0||ue===null||(Y.tipo==="number"?X[F]=Number(ue):Y.tipo==="boolean"?X[F]=ue===!0||ue==="true":X[F]=ue)}return X}async function z(){if(!x.value)return window.alert("Selecione um conjunto de regras.");const X=re(),T={name:B.name,type:x.value.nome,rule:x.value.id};try{const F=s.value?await o.projectService.updateElement(s.value.id,T):await o.projectService.createElement(l.value.id,T);await o.evaluationService.saveElementData({elementId:F.id,data:X}),i.push(`/projects/${l.value.projectId}/environments/${l.value.id}`)}catch(F){window.alert(F.message)}}function te(X){if(!X)return"";const T=new Set(c.value.filter(ue=>ue.id!==s.value?.id).map(ue=>ue.name));if(!T.has(X))return X;let F=1,Y=`${X} (${F})`;for(;T.has(Y);)F++,Y=`${X} (${F})`;return Y}To([f,()=>B.ruleSet],([X,T])=>{if(localStorage.setItem("elementAutoName",String(X)),X){const Y=u.value.find(ue=>ue.id===T)?.nome??"";B.name=te(Y)}});async function ae(){if(!x.value)return window.alert("Selecione um conjunto de regras.");const X=re();if(n.quick){try{o.quickEvaluationService.evaluate({name:B.name,checklist:x.value,data:X}),i.push("/quick-evaluation/result")}catch(F){window.alert(F.message)}return}const T={name:B.name,type:x.value.nome,rule:x.value.id};try{const F=s.value?await o.projectService.updateElement(s.value.id,T):await o.projectService.createElement(l.value.id,T);await o.evaluationService.evaluateElement({elementId:F.id,checklist:x.value,data:X}),i.push(`/elements/${F.id}/evaluation`)}catch(F){window.alert(F.message)}}To(m,()=>{D.value.some(T=>T.id===B.ruleSet)||(B.ruleSet=D.value[0]?.id??"")}),To(()=>B.ruleSet,()=>{const X=Object.keys(x.value?.parametros??{});Object.keys(B.data).forEach(T=>{X.includes(T)||delete B.data[T]})});function ge(X,T,F){const Y=(F||"").toLowerCase().trim();if(!Y)return!0;const ue=X.nome?.toLowerCase().includes(Y),J=X.norma?.nome?.toLowerCase().includes(Y),Ce=X.regras?.some(Be=>Be.nome?.toLowerCase().includes(Y)||Be.id?.toLowerCase().includes(Y));return!!(ue||J||Ce)}return zn(de),(X,T)=>e.quick||l.value?(M(),ee(we,{key:0},[e.quick?Te("",!0):(M(),Fe(ie(ke),{key:0,class:"back-link",to:`/projects/${l.value.projectId}/environments/${l.value.id}`},{default:Ae(()=>[W(ie(Ro),{size:18,"aria-hidden":"true"}),Re(pe(l.value.name),1)]),_:1},8,["to"])),W(uo,{title:e.quick?"Avaliação rápida":w.value?"Novo elemento":s.value.name,description:"Escolha o tipo e informe as medidas observadas."},null,8,["title"]),b("form",{class:"form-card",onSubmit:T[5]||(T[5]=co(()=>{},["prevent"]))},[b("div",p0,[b("label",f0,[T[7]||(T[7]=b("span",null,"Norma de referência",-1)),An(b("select",{"onUpdate:modelValue":T[0]||(T[0]=F=>m.value=F)},[T[6]||(T[6]=b("option",{value:"todas"},"Todas as normas",-1)),(M(!0),ee(we,null,Bn(q.value.filter(F=>F!=="todas"),F=>(M(),ee("option",{key:F,value:F},pe(F),9,h0))),128))],512),[[kr,m.value]])]),b("label",v0,[T[8]||(T[8]=b("span",null,"Tipo de elemento *",-1)),W(ie(s0),{modelValue:B.ruleSet,"onUpdate:modelValue":T[1]||(T[1]=F=>B.ruleSet=F),options:D.value,label:"nome",reduce:F=>F.id,"filter-by":ge,placeholder:"Pesquise o elemento ou regra..."},{option:Ae(F=>[b("div",g0,[b("span",b0,pe(F.nome),1),F.norma?.nome?(M(),ee("small",_0," ("+pe(F.norma.nome)+") ",1)):Te("",!0)])]),_:1},8,["modelValue","options","reduce"])])]),e.quick?Te("",!0):(M(),ee("label",y0,[b("div",A0,[T[9]||(T[9]=b("span",null,"Nome do elemento *",-1)),b("div",N0,[An(b("input",{type:"checkbox",id:"auto-name-chk","onUpdate:modelValue":T[2]||(T[2]=F=>f.value=F)},null,512),[[um,f.value]]),b("p",{onClick:T[3]||(T[3]=co(F=>f.value=!f.value,["stop"]))},"Auto Nomear")])]),An(b("input",{"onUpdate:modelValue":T[4]||(T[4]=F=>B.name=F),required:"",placeholder:"Ex.: Porta principal"},null,512),[[Aa,B.name]])])),T[13]||(T[13]=b("div",{class:"form-divider"},[b("strong",null,"Dados para avaliação"),b("span",null,"Campos definidos pelo conjunto de regras selecionado.")],-1)),b("div",x0,[(M(!0),ee(we,null,Bn(x.value?.parametros,(F,Y)=>(M(),ee("label",{key:Y,class:"field"},[b("span",null,[Re(pe(F.label??Y)+" ",1),F.obrigatorio?(M(),ee(we,{key:0},[Re(" *")],64)):Te("",!0),F.unidade?(M(),ee("small",B0," ("+pe(F.unidade)+")",1)):Te("",!0),F.definicao?(M(),ee("button",{key:2,class:"parameter-help",type:"button",title:F.definicao,"aria-label":`Definição: ${F.label??Y}`,"aria-expanded":v.value===Y,onClick:co(ue=>v.value=v.value===Y?null:Y,["stop"])},[W(ie(jc),{size:16,"aria-hidden":"true"})],8,T0)):Te("",!0),F.definicao&&v.value===Y?(M(),ee("small",R0,pe(F.definicao),1)):Te("",!0),E.value[Y]?.length?(M(),ee("small",S0," Esperado: "+pe(E.value[Y].join(" ou ")),1)):Te("",!0)]),F.tipo==="boolean"?An((M(),ee("select",{key:0,"onUpdate:modelValue":ue=>B.data[Y]=ue},[...T[10]||(T[10]=[b("option",{value:""},"Não informado",-1),b("option",{value:!0},"Sim",-1),b("option",{value:!1},"Não",-1)])],8,w0)),[[kr,B.data[Y]]]):F.tipo==="select"?An((M(),ee("select",{key:1,"onUpdate:modelValue":ue=>B.data[Y]=ue},[T[11]||(T[11]=b("option",{value:""},"Selecione",-1)),(M(!0),ee(we,null,Bn(F.opcoes??[],ue=>(M(),ee("option",{key:ue,value:ue},pe(ue),9,C0))),128))],8,E0)),[[kr,B.data[Y]]]):An((M(),ee("input",{key:2,"onUpdate:modelValue":ue=>B.data[Y]=ue,type:"number",inputmode:"decimal",step:"any"},null,8,I0)),[[Aa,B.data[Y],void 0,{number:!0}]])]))),128))]),b("div",O0,[W(ie(ke),{class:"button button--ghost",to:e.quick?"/projects":`/projects/${l.value.projectId}/environments/${l.value.id}`},{default:Ae(()=>[...T[12]||(T[12]=[Re(" Cancelar ",-1)])]),_:1},8,["to"]),e.quick?Te("",!0):(M(),ee("button",{key:0,class:"button button--outline",type:"button",onClick:z}," Salvar e voltar ")),b("button",{class:"button",type:"button",onClick:ae},pe(e.quick?"Avaliar":"Salvar e avaliar"),1)])],32)],64)):(M(),Fe($n,{key:1,title:"Elemento não encontrado",text:"Volte para o ambiente e tente novamente."},{default:Ae(()=>[W(ie(ke),{class:"button",to:"/projects"},{default:Ae(()=>[...T[14]||(T[14]=[Re("Projetos",-1)])]),_:1})]),_:1}))}},ct=Zt(P0,[["__scopeId","data-v-ece756ab"]]),rr={__name:"StatusBadge",props:{status:{type:String,default:"nao_avaliado"}},setup(e){const n={conforme:"Conforme",nao_conforme:"Não conforme",nao_avaliado:"Pendente",invalido:"Pendente",erro:"Pendente",atencao:"Atenção",manual:"Verificar"};return(o,a)=>(M(),ee("span",{class:un(["status",`status--${e.status}`])},pe(n[e.status]??"Pendente"),3))}},k0={class:"evaluation-summary","aria-labelledby":"evaluation-summary-title"},V0={class:"evaluation-summary__heading"},D0={id:"evaluation-summary-title"},L0={class:"evaluation-summary__score"},j0={class:"evaluation-summary__cards"},q0={class:"evaluation-summary__card evaluation-summary__card--conforme"},M0={class:"evaluation-summary__card evaluation-summary__card--nao_conforme"},F0={class:"evaluation-summary__card evaluation-summary__card--nao_avaliado"},Mc={__name:"EvaluationSummary",props:{summary:{type:Object,required:!0},scope:{type:String,default:"elementos"}},setup(e){const n=e,o=je(()=>n.summary.totalElements?n.summary.overallStatus==="conforme"?"Todos os elementos estão conformes":n.summary.overallStatus==="nao_conforme"?"Há elementos não conformes":"Há elementos pendentes de avaliação":"Nenhum elemento cadastrado");return(a,r)=>(M(),ee("section",k0,[b("div",V0,[b("div",null,[b("h2",D0,"Situação do "+pe(e.scope),1),b("p",null,pe(o.value),1)]),b("div",L0,[b("strong",null,pe(e.summary.score)+"%",1),r[0]||(r[0]=b("span",null,"conformes",-1))])]),b("div",j0,[b("div",q0,[r[1]||(r[1]=b("span",null,"Conformes",-1)),b("strong",null,pe(e.summary.conforme),1)]),b("div",M0,[r[2]||(r[2]=b("span",null,"Não conformes",-1)),b("strong",null,pe(e.summary.nao_conforme),1)]),b("div",F0,[r[3]||(r[3]=b("span",null,"Pendentes",-1)),b("strong",null,pe(e.summary.nao_avaliado),1)])]),e.summary.totalElements?(M(),Fe(rr,{key:0,status:e.summary.overallStatus},null,8,["status"])):Te("",!0)]))}},$0={key:1,class:"card-list collection-list"},z0={class:"card__icon"},H0={class:"card__menu"},U0=["onClick"],K0={__name:"EnvironmentPage",props:{projectId:String,environmentId:String},setup(e){const n=e,o=He("services"),a=He("confirmPopup"),r=Se(null),i=Se(null),s=Se([]),l=Se(null);function c(m,f){a.open({target:f.currentTarget,message:`Excluir o elemento ${m.name} e suas avaliações?`,onAccept:()=>u(m)})}async function u(m){const f=await o.evaluationService.listEvaluations(m.id);for(const v of f)await o.repositories.evaluationRepository.delete(v.id);await o.repositories.elementRepository.delete(m.id),await d()}async function d(){if(r.value=await o.repositories.environmentRepository.get(n.environmentId),!r.value)return;i.value=await o.projectService.getProject(r.value.projectId);const m=await o.projectService.listElements(r.value.id),[f,v]=await Promise.all([Promise.all(m.map(async B=>{const w=await o.evaluationService.listEvaluations(B.id);return{element:B,status:tc(w)}})),o.evaluationService.getEnvironmentSummary(r.value.id)]);s.value=f,l.value=v}return zn(d),(m,f)=>r.value?(M(),ee(we,{key:0},[W(ie(ke),{class:"back-link",to:`/projects/${r.value.projectId}`},{default:Ae(()=>[W(ie(Ro),{size:18,"aria-hidden":"true"}),Re(pe(i.value?.name??"Projeto"),1)]),_:1},8,["to"]),W(uo,{title:r.value.name},{action:Ae(()=>[s.value.length?(M(),Fe(ie(ke),{key:0,class:"button",to:{path:"/elements/new",query:{environmentId:r.value.id}}},{default:Ae(()=>[W(ie(Ds),{size:18,"aria-hidden":"true"}),f[0]||(f[0]=Re("Adicionar elemento ",-1))]),_:1},8,["to"])):Te("",!0)]),_:1},8,["title"]),l.value&&s.value.length?(M(),Fe(Mc,{key:0,summary:l.value,scope:"ambiente"},null,8,["summary"])):Te("",!0),s.value.length?(M(),ee("div",$0,[(M(!0),ee(we,null,Bn(s.value,v=>(M(),ee("article",{key:v.element.id,class:"card card--interactive"},[W(ie(ke),{class:"card__link",to:`/elements/${v.element.id}`},{default:Ae(()=>[b("span",z0,[W(ie(Qf),{size:22,"aria-hidden":"true"})]),b("div",null,[b("h2",null,pe(v.element.name),1),b("p",null,pe(v.element.type),1)]),W(rr,{status:v.status},null,8,["status"]),W(ie(or),{size:20,class:"chevron","aria-hidden":"true"})]),_:2},1032,["to"]),b("div",H0,[b("button",{class:"icon-button icon-button--danger",title:"Excluir","aria-label":"Excluir",onClick:B=>c(v.element,B)},[W(ie(Ar),{size:18,"aria-hidden":"true"})],8,U0)])]))),128))])):Te("",!0),s.value.length?Te("",!0):(M(),Fe($n,{key:2,class:"collection-empty",title:"Nenhum elemento ainda",text:"Cadastre portas, rampas, sanitários e outros itens para avaliar."},{default:Ae(()=>[W(ie(ke),{class:"button",to:{path:"/elements/new",query:{environmentId:r.value.id}}},{default:Ae(()=>[W(ie(Ds),{size:18,"aria-hidden":"true"}),f[1]||(f[1]=Re("Adicionar elemento ",-1))]),_:1},8,["to"])]),_:1}))],64)):(M(),Fe($n,{key:1,title:"Ambiente não encontrado",text:"Ele pode ter sido removido."},{default:Ae(()=>[W(ie(ke),{class:"button",to:"/projects"},{default:Ae(()=>[...f[2]||(f[2]=[Re("Projetos",-1)])]),_:1})]),_:1}))}},G0={class:"results"},W0={key:0},Y0={key:1,class:"result-values"},J0={key:2},Fs={__name:"EvaluationPage",props:{elementId:String,quick:Boolean},setup(e){const n=e,o=He("services"),a=Se(null),r=Se(null),i=Se(null),s=je(()=>r.value?`/projects/${r.value.projectId}/environments/${r.value.id}`:"/projects"),l=je(()=>i.value?.result??[]),c=je(()=>l.value.filter(x=>["nao_conforme","erro","invalido"].includes(x.status)).length),u=je(()=>l.value.filter(x=>["nao_avaliado","manual","atencao"].includes(x.status)).length),d=je(()=>l.value.length-c.value-u.value),m=je(()=>c.value>0?"nao_conforme":u.value>0?"nao_avaliado":"conforme"),f=je(()=>{switch(m.value){case"conforme":return"Elemento conforme";case"nao_conforme":return"Há itens não conformes";default:return"Avaliação pendente"}});function v(x){return x?new Intl.DateTimeFormat("pt-BR",{dateStyle:"medium",timeStyle:"short"}).format(new Date(x)):""}function B(x,E,N=""){const D=`${typeof E=="boolean"?E?"Sim":"Não":E}${N??""}`;switch(x){case">=":return`no mínimo, ${D}`;case"<=":return`no máximo, ${D}`;case">":return`maior que ${D}`;case"<":return`menor que ${D}`;case"==":case"eq":return`igual a ${D}`;default:return D}}async function w(){if(n.quick){const x=o.quickEvaluationService.getCurrent();a.value=x?.element??null,i.value=x?.evaluation??null;return}if(a.value=await o.repositories.elementRepository.get(n.elementId),a.value){r.value=await o.repositories.environmentRepository.get(a.value.environmentId);const x=await o.evaluationService.listEvaluations(a.value.id);i.value=x[0]??null}}return zn(w),(x,E)=>a.value&&i.value?(M(),ee(we,{key:0},[W(ie(ke),{class:"back-link",to:e.quick?"/quick-evaluation":s.value},{default:Ae(()=>[W(ie(Ro),{size:18,"aria-hidden":"true"}),Re(pe(a.value.name),1)]),_:1},8,["to"]),W(uo,{title:"Avaliação",description:`Realizada em ${v(i.value.evaluatedAt)}`},null,8,["description"]),b("section",{class:un(["result-summary",`result-summary--${m.value}`])},[W(rr,{status:m.value},null,8,["status"]),b("h2",null,pe(f.value),1),b("p",null,pe(d.value)+" regra(s) atendida(s), "+pe(c.value)+" não conforme(s) e "+pe(u.value)+" para verificar. ",1)],2),b("section",G0,[E[1]||(E[1]=b("h2",null,"Regras avaliadas",-1)),(M(!0),ee(we,null,Bn(l.value,N=>(M(),ee("article",{key:N.id,class:un(["result-row",`result-row--${N.status}`])},[b("div",null,[W(rr,{status:N.status},null,8,["status"]),b("h3",null,pe(N.nome??N.id),1),N.mensagem?(M(),ee("p",W0,pe(N.mensagem),1)):Te("",!0),N.valorInformado!==void 0?(M(),ee("p",Y0,[E[0]||(E[0]=Re(" Informado: ",-1)),b("strong",null,pe(N.valorInformado),1),N.unidade?(M(),ee(we,{key:0},[Re(pe(N.unidade),1)],64)):Te("",!0),N.valorEsperado!==void 0?(M(),ee(we,{key:1},[Re(" · Esperado: "+pe(B(N.operador,N.valorEsperado,N.unidade)),1)],64)):Te("",!0)])):Te("",!0),N.referencia?(M(),ee("small",J0,pe(N.referencia),1)):Te("",!0)])],2))),128))]),e.quick?(M(),Fe(ie(ke),{key:0,class:"button",to:"/quick-evaluation"},{default:Ae(()=>[...E[2]||(E[2]=[Re(" Nova avaliação rápida ",-1)])]),_:1})):Te("",!0)],64)):a.value?(M(),ee(we,{key:1},[W(ie(ke),{class:"back-link",to:e.quick?"/quick-evaluation":s.value},{default:Ae(()=>[W(ie(Ro),{size:18,"aria-hidden":"true"}),E[3]||(E[3]=Re("Elemento ",-1))]),_:1},8,["to"]),W($n,{title:"Ainda não há avaliação",text:"Preencha os dados do elemento para executar as regras."},{default:Ae(()=>[W(ie(ke),{class:"button",to:e.quick?"/quick-evaluation":`/elements/${a.value.id}`},{default:Ae(()=>[Re(pe(e.quick?"Nova avaliação rápida":"Avaliar elemento"),1)]),_:1},8,["to"])]),_:1})],64)):(M(),Fe($n,{key:2,title:"Avaliação não encontrada",text:e.quick?"Inicie uma avaliação rápida para ver o resultado.":"O elemento pode ter sido removido."},{default:Ae(()=>[W(ie(ke),{class:"button",to:e.quick?"/quick-evaluation":"/projects"},{default:Ae(()=>[Re(pe(e.quick?"Avaliação rápida":"Projetos"),1)]),_:1},8,["to"])]),_:1},8,["text"]))}},Q0={class:"collection-form__heading"},X0={class:"field"},Z0={class:"environments-summary-container"},ev={key:0,class:"card-grid-environment collection-list"},nv={class:"card__icon"},ov={class:"card__menu"},av=["onClick"],rv=["onClick"],tv={__name:"ProjectPage",props:{projectId:String},setup(e){const n=e,o=He("services"),a=He("confirmPopup"),r=Se(null),i=Se([]),s=Se(""),l=Se(null),c=Se(null),u=Se(null);async function d(){r.value=await o.projectService.getProject(n.projectId),r.value&&([i.value,c.value]=await Promise.all([o.projectService.listEnvironments(n.projectId),o.evaluationService.getProjectSummary(n.projectId)]))}async function m(){l.value={},s.value="",await Mo(),u.value?.scrollIntoView({behavior:"smooth"})}function f(E){l.value=E,s.value=E.name}function v(){l.value=null,s.value=""}async function B(){l.value?.id?await o.projectService.renameEnvironment(l.value.id,s.value):await o.projectService.createEnvironment(n.projectId,{name:s.value}),v(),await d()}function w(E,N){a.open({target:N.currentTarget,message:`Excluir o ambiente “${E.name}” e seus elementos?`,onAccept:()=>x(E)})}async function x(E){const N=await o.projectService.listElements(E.id);for(const q of N){const D=await o.evaluationService.listEvaluations(q.id);for(const de of D)await o.repositories.evaluationRepository.delete(de.id);await o.repositories.elementRepository.delete(q.id)}await o.repositories.environmentRepository.delete(E.id),await d()}return zn(d),(E,N)=>r.value?(M(),ee(we,{key:0},[W(ie(ke),{class:"back-link",to:"/projects"},{default:Ae(()=>[W(ie(Ro),{size:18,"aria-hidden":"true"}),N[1]||(N[1]=Re("Projetos",-1))]),_:1}),W(uo,{title:r.value.name,description:`${i.value.length} ambiente${i.value.length===1?"":"s"} cadastrado${i.value.length===1?"":"s"}.
      
${r.value.description}`},{action:Ae(()=>[i.value.length?(M(),ee("button",{key:0,class:"button",onClick:m},[W(ie(ar),{size:18,"aria-hidden":"true"}),N[2]||(N[2]=Re("Novo ambiente",-1))])):Te("",!0)]),_:1},8,["title","description"]),l.value?(M(),ee("form",{key:0,class:"form-card collection-form",onSubmit:co(B,["prevent"]),ref_key:"inputCreate",ref:u},[b("div",Q0,[b("h2",null,pe(l.value.id?"Nome do ambiente":"Novo ambiente"),1),N[3]||(N[3]=b("p",null,"Use um nome que ajude a identificar este espaço no projeto.",-1))]),b("label",X0,[N[4]||(N[4]=b("span",null,"Nome do ambiente",-1)),An(b("input",{"onUpdate:modelValue":N[0]||(N[0]=q=>s.value=q),required:"",autofocus:""},null,512),[[Aa,s.value]])]),b("div",{class:"form-actions"},[b("button",{class:"button button--ghost",type:"button",onClick:v}," Cancelar "),N[5]||(N[5]=b("button",{class:"button",type:"submit"},"Salvar",-1))])],544)):Te("",!0),c.value&&i.value.length?(M(),Fe(Mc,{key:1,summary:c.value,scope:"projeto"},null,8,["summary"])):Te("",!0),b("div",Z0,[i.value.length?(M(),ee("div",ev,[(M(!0),ee(we,null,Bn(i.value,q=>(M(),ee("article",{key:q.id,class:"card-environment"},[W(ie(ke),{class:"card__link",to:`/projects/${r.value.id}/environments/${q.id}`},{default:Ae(()=>[b("span",nv,[W(ie(ih),{size:22,"aria-hidden":"true"})]),b("div",null,[b("h2",null,pe(q.name),1),N[6]||(N[6]=b("p",null,"Ambiente",-1))])]),_:2},1032,["to"]),b("div",ov,[b("button",{class:"text-button",onClick:D=>f(q)}," Editar ",8,av),b("button",{class:"icon-button icon-button--danger",title:"Excluir","aria-label":"Excluir",onClick:D=>w(q,D)},[W(ie(Ar),{size:18,"aria-hidden":"true"})],8,rv)])]))),128))])):Te("",!0),i.value.length?Te("",!0):(M(),Fe($n,{key:1,class:"collection-empty",title:"Nenhum ambiente ainda",text:"Adicione espaços como entrada, banheiro ou circulação."},{default:Ae(()=>[b("button",{class:"button",onClick:m},[W(ie(ar),{size:18,"aria-hidden":"true"}),N[7]||(N[7]=Re("Novo ambiente",-1))])]),_:1}))])],64)):(M(),Fe($n,{key:1,title:"Projeto não encontrado",text:"Ele pode ter sido removido."},{default:Ae(()=>[W(ie(ke),{class:"button",to:"/projects"},{default:Ae(()=>[...N[8]||(N[8]=[Re("Voltar aos projetos",-1)])]),_:1})]),_:1}))}},iv={class:"collection-form__heading"},sv={class:"fields-grid"},lv={class:"field"},cv={class:"field"},uv={key:0,class:"muted"},dv={key:1,class:"card-list collection-list"},mv={class:"card__icon"},pv={key:0},fv={class:"card__menu"},hv=["onClick"],vv=["onClick"],gv={__name:"ProjectsPage",setup(e){const n=He("services"),o=He("confirmPopup"),a=Se([]),r=Se(""),i=Se(""),s=Se(null),l=Se("");async function c(){a.value=await n.projectService.listProjects()}function u(){s.value={},r.value="",i.value="",l.value=""}function d(x){s.value=x,r.value=x.name,l.value="",i.value=x.description||""}function m(){s.value=null,r.value="",i.value="",l.value=""}async function f(){try{l.value="",s.value?.id?await n.projectService.updateProject(s.value.id,{name:r.value,description:i.value}):await n.projectService.createProject({name:r.value,description:i.value}),r.value="",i.value="",s.value=null,await c()}catch(x){l.value=x.message}}function v(x,E){o.open({target:E.currentTarget,message:`Excluir o projeto “${x.name}” e seus dados?`,onAccept:()=>B(x)})}async function B(x){const E=await n.projectService.listEnvironments(x.id);for(const N of E){const q=await n.projectService.listElements(N.id);for(const D of q){const de=await n.evaluationService.listEvaluations(D.id);for(const re of de)await n.repositories.evaluationRepository.delete(re.id);await n.repositories.elementRepository.delete(D.id)}await n.repositories.environmentRepository.delete(N.id)}await n.repositories.projectRepository.delete(x.id),await c()}function w(x){return new Intl.DateTimeFormat("pt-BR",{dateStyle:"medium"}).format(new Date(x))}return zn(c),(x,E)=>(M(),ee(we,null,[W(uo,{title:"Projetos",description:"Acompanhe seus locais e avaliações."},{action:Ae(()=>[a.value.length?(M(),ee("button",{key:0,class:"button",onClick:u},[W(ie(ar),{size:18,"aria-hidden":"true"}),E[2]||(E[2]=Re("Novo projeto",-1))])):Te("",!0)]),_:1}),s.value?(M(),ee("form",{key:0,class:"form-card collection-form",onSubmit:co(f,["prevent"])},[b("div",iv,[b("h2",null,pe(s.value.id?"Dados do projeto":"Novo projeto"),1),E[3]||(E[3]=b("p",null,"Defina um nome e, se quiser, uma breve descrição para este local.",-1))]),b("div",sv,[b("label",lv,[E[4]||(E[4]=b("span",null,"Nome do projeto",-1)),An(b("input",{"onUpdate:modelValue":E[0]||(E[0]=N=>r.value=N),required:"",autofocus:""},null,512),[[Aa,r.value]])]),b("label",cv,[E[5]||(E[5]=b("span",null,[Re("Descrição "),b("small",null,"(opcional)")],-1)),An(b("input",{"onUpdate:modelValue":E[1]||(E[1]=N=>i.value=N)},null,512),[[Aa,i.value]])])]),l.value?(M(),ee("p",uv,pe(l.value),1)):Te("",!0),b("div",{class:"form-actions"},[b("button",{class:"button button--ghost",type:"button",onClick:m}," Cancelar "),E[6]||(E[6]=b("button",{class:"button",type:"submit"},"Salvar",-1))])],32)):Te("",!0),a.value.length?(M(),ee("div",dv,[(M(!0),ee(we,null,Bn(a.value,N=>(M(),ee("article",{key:N.id,class:"card project-card"},[W(ie(ke),{class:"card__link",to:`/projects/${N.id}`},{default:Ae(()=>[b("span",mv,[W(ie(qc),{size:22,"aria-hidden":"true"})]),b("div",null,[b("h2",null,pe(N.name),1),b("p",null,"Atualizado em "+pe(w(N.updatedAt)),1),N.description?(M(),ee("p",pv,pe(N.description),1)):Te("",!0)]),W(ie(or),{size:20,class:"chevron","aria-hidden":"true"})]),_:2},1032,["to"]),b("div",fv,[b("button",{class:"text-button",onClick:q=>d(N)}," Editar ",8,hv),b("button",{class:"icon-button icon-button--danger",title:"Excluir","aria-label":"Excluir",onClick:q=>v(N,q)},[W(ie(Ar),{size:18,"aria-hidden":"true"})],8,vv)])]))),128))])):(M(),Fe($n,{key:2,class:"collection-empty",title:"Comece por um projeto",text:"Organize as avaliações de acessibilidade por obra ou local."},{default:Ae(()=>[b("button",{class:"button",onClick:u},[W(ie(ar),{size:18,"aria-hidden":"true"}),E[7]||(E[7]=Re("Novo projeto",-1))])]),_:1}))],64))}};function bv(e=""){const n=e.replace(/^(\.\.\/|\.\/|\/)+/,"").split("/");return n.length>1?n.slice(0,-1).join("/"):""}function _v(e,n){const[o]=e,a=o?.norma;return a?.nome?`${a.nome}${a.versao?` · ${a.versao}`:""}`:n.split("/").at(-1)?.replaceAll("-"," ")??"Regras padrão"}function yv(e){const n=new Map;for(const o of e){const a=bv(o.path)||o.ruleSet.id,r=n.get(a)??{id:a,source:"standard",ruleSets:[]};r.ruleSets.push(o.ruleSet),n.set(a,r)}return[...n.values()].map(o=>({...o,nome:_v(o.ruleSets,o.id)})).sort((o,a)=>o.nome.localeCompare(a.nome))}function Av(e){const n=new Map;for(const o of e){const a=o.grupo,r=a?.id??o.id,i=n.get(r)??{id:r,nome:a?.nome??o.nome,source:"user",ruleSets:[]};i.ruleSets.push(o),n.set(r,i)}return[...n.values()].sort((o,a)=>o.nome.localeCompare(a.nome))}const Nv={class:"documentation"},xv={class:"documentation__intro"},Bv={class:"documentation__icon"},Tv=["href"],Rv={class:"documentation__section"},Sv={key:0,class:"muted",role:"status"},wv={key:0,class:"alert alert--error",role:"alert"},Ev={class:"rules-section rules-section--first"},Cv={class:"card-list ruleset-list"},Iv={key:0,class:"ruleset-card__actions"},Ov=["onClick"],Pv=["onClick"],kv=["onClick"],Vv={class:"rules-actions"},Dv={class:"button import-button"},Lv=["disabled"],jv={class:"button button--outline import-button"},qv=["disabled"],Mv={key:0,class:"muted",role:"status"},Fv={key:1,class:"alert alert--error",role:"alert"},$v={key:2,class:"muted",role:"status"},zv={key:3,class:"rules-library"},Hv={class:"rules-section rules-section--first rules-library__section"},Uv={class:"card-list rules-library__list"},Kv={class:"card__icon"},Gv={class:"rules-section rules-library__section"},Wv={key:0,class:"card-list rules-library__list"},Yv={class:"card__icon"},ut={__name:"RulesPage",props:{source:String,groupId:String,documentation:Boolean},setup(e){const n=e,o=He("services"),a=He("builtInRuleSets");Lc();const r=He("confirmPopup"),i=je(()=>"/Extensao-26.2/rule-engine-skill/SKILL.md"),s=Se([]),l=Se(!0),c=Se(!1),u=Se(""),d=je(()=>s.value.filter(re=>re.source==="standard")),m=je(()=>s.value.filter(re=>re.source==="user")),f=je(()=>s.value.find(re=>re.source===n.source&&re.id===n.groupId));function v(re){return re.regras?.length??0}function B(re){return Object.keys(re.parametros??{}).length}function w(re){return re.ruleSets.reduce((z,te)=>z+v(te),0)}async function x(){l.value=!0;try{const re=await o.ruleSetService.list();s.value=[...yv(a),...Av(re)]}finally{l.value=!1}}function E(re){return`/rules/${encodeURIComponent(re.source)}/${encodeURIComponent(re.id)}`}async function N(re){const z=[...re.target.files??[]];if(!z.length)return;const te=z.filter(Y=>/\.(json|ya?ml)$/i.test(Y.name)),ae=z.length-te.length;if(!te.length){u.value="Nenhum arquivo .json, .yaml ou .yml encontrado.",re.target.value="";return}u.value="",c.value=!0;const ge=te[0].webkitRelativePath?.split("/")[0],X={id:`importado-${ge||crypto.randomUUID()}`,nome:ge||(te.length===1?te[0].name.replace(/\.(json|ya?ml)$/i,""):"Regras importadas")},T=[];for(const Y of te)try{const ue=await Y.text();/\.json$/i.test(Y.name)?await o.ruleSetService.importFromJson(ue,X):await o.ruleSetService.importFromYaml(ue,X)}catch(ue){T.push(`${Y.name}: ${ue.message}`)}const F=[];T.length&&F.push(te.length===1?T[0]:`${T.length} de ${te.length} arquivo(s) não importado(s) — ${T.join("; ")}`),ae&&F.push(`${ae} arquivo(s) ignorado(s) por não serem .json/.yaml/.yml.`),u.value=F.join(" "),await x(),re.target.value="",c.value=!1}function q(re,z){r.open({target:z.currentTarget,message:`Excluir "${re.nome}"? Esta ação não pode ser desfeita.`,onAccept:()=>D(re)})}async function D(re){u.value="";try{await o.ruleSetService.delete(re.id),await x()}catch(z){u.value=z.message}}async function de(re,z){try{const te=z==="json"?await o.ruleSetService.exportByIdToJson(re.id):await o.ruleSetService.exportByIdToYaml(re.id),ae=z==="json"?"application/json":"text/yaml",ge=document.createElement("a");ge.href=URL.createObjectURL(new Blob([te],{type:ae})),ge.download=`${re.id}.${z}`,ge.click(),URL.revokeObjectURL(ge.href)}catch(te){u.value=te.message}}return zn(x),(re,z)=>e.documentation?(M(),ee(we,{key:0},[W(ie(ke),{class:"back-link",to:"/rules"},{default:Ae(()=>[W(ie(Ro),{size:18,"aria-hidden":"true"}),z[0]||(z[0]=Re("Conjuntos de regras",-1))]),_:1}),W(uo,{title:"Crie e importe regras",description:"Monte checklists em YAML para avaliar os elementos do seu projeto."}),b("div",Nv,[z[6]||(z[6]=Td(`<section class="documentation__section"><h2>Formato mínimo de um checklist</h2><p>Cada arquivo é um checklist independente. Os campos obrigatórios são <code>id</code>, <code>nome</code>, <code>parametros</code> (objeto) e <code>regras</code> (lista). YAML e JSON são aceitos.</p><pre class="documentation-code"><code>id: bebedouros
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
      mensagem: Avaliar como rampa.</code></pre><p class="documentation__note"> Se nenhuma condição bater, o resultado fica <code>nao_avaliado</code>. Um parâmetro usado dentro de <code>verificar</code> (aqui, <code>possui_chanfro</code>) também precisa estar declarado em <code>parametros</code>. </p></details></section><section class="documentation__section"><h2>Resultados possíveis</h2><ul class="documentation__list"><li><code>conforme</code> / <code>nao_conforme</code> — comparação direta, ou condição explícita.</li><li><code>manual</code> — regra do tipo <code>checklist</code>.</li><li><code>atencao</code> — resultado explícito opcional numa condição de <code>conditional</code>.</li><li><code>nao_avaliado</code> — parâmetro opcional sem valor, ou nenhuma condição satisfeita.</li><li><code>invalido</code> — parâmetro obrigatório sem valor preenchido.</li></ul></section>`,4)),b("section",xv,[b("span",Bv,[W(ie(jc),{size:24,"aria-hidden":"true"})]),b("div",null,[z[1]||(z[1]=b("h1",null,"Crie suas regras com IA",-1)),b("a",{class:"button button--outline",href:`${i.value}`,download:"SKILL.md"}," Baixar SKILL.md ",8,Tv),z[2]||(z[2]=b("p",null,"Um arquivo de texto com instruções prontas para uma IA (Claude, ChatGPT, Cursor) gerar checklists neste formato a partir do que você descrever. Baixe, cole numa conversa com a IA e peça a regra que precisa — sem aprender YAML.",-1))])]),b("section",Rv,[z[4]||(z[4]=b("h2",null,"Importação",-1)),z[5]||(z[5]=b("p",null,[Re("Escolha um ou mais arquivos YAML/JSON, ou uma pasta com vários checklists — arquivos que não forem "),b("code",null,".yaml"),Re(", "),b("code",null,".yml"),Re(" ou "),b("code",null,".json"),Re(" são ignorados automaticamente. Tudo fica armazenado somente neste navegador.")],-1)),W(ie(ke),{class:"button",to:"/rules"},{default:Ae(()=>[...z[3]||(z[3]=[Re("Ir para importação",-1)])]),_:1})])])],64)):e.groupId?(M(),ee(we,{key:1},[W(ie(ke),{class:"back-link",to:"/rules"},{default:Ae(()=>[W(ie(Ro),{size:18,"aria-hidden":"true"}),z[7]||(z[7]=Re("Conjuntos de regras",-1))]),_:1}),l.value?(M(),ee("p",Sv,"Carregando…")):f.value?(M(),ee(we,{key:1},[W(uo,{title:f.value.nome,description:`${f.value.ruleSets.length} checklists que compõem este conjunto.`},null,8,["title","description"]),u.value?(M(),ee("p",wv,pe(u.value),1)):Te("",!0),b("section",Ev,[z[8]||(z[8]=b("h2",null,"Checklists",-1)),b("div",Cv,[(M(!0),ee(we,null,Bn(f.value.ruleSets,te=>(M(),ee("article",{key:te.id,class:"card ruleset-card"},[b("div",null,[b("h2",null,pe(te.nome),1),b("p",null,pe(te.norma?.nome??"Conjunto personalizado"),1),b("small",null,pe(v(te))+" regras · "+pe(B(te))+" campos",1)]),e.source==="user"?(M(),ee("div",Iv,[b("button",{class:"button button--outline",onClick:ae=>de(te,"yaml")},"Exportar YAML",8,Ov),b("button",{class:"button button--outline",onClick:ae=>de(te,"json")},"Exportar JSON",8,Pv),b("button",{class:"icon-button icon-button--danger",title:"Excluir","aria-label":"Excluir",onClick:ae=>q(te,ae)},[W(ie(Ar),{size:18,"aria-hidden":"true"})],8,kv)])):Te("",!0)]))),128))])])],64)):(M(),Fe($n,{key:2,title:"Conjunto não encontrado",text:"Ele pode ter sido removido."}))],64)):(M(),ee(we,{key:2},[W(uo,{class:"rules-page-header",title:"Conjuntos de regras",description:"Cada pasta ou importação é exibida como um único conjunto."},{action:Ae(()=>[b("div",Vv,[b("label",Dv,[z[9]||(z[9]=Re(" Importar arquivos ",-1)),b("input",{type:"file",accept:".json,.yaml,.yml",multiple:"",disabled:c.value,onChange:N},null,40,Lv)]),b("label",jv,[z[10]||(z[10]=Re(" Importar pasta ",-1)),b("input",{type:"file",accept:".json,.yaml,.yml",webkitdirectory:"",disabled:c.value,onChange:N},null,40,qv)]),W(ie(ke),{class:"rules-help-link",to:"/rules/documentation"},{default:Ae(()=>[...z[11]||(z[11]=[Re("Como criar regras",-1)])]),_:1})])]),_:1}),c.value?(M(),ee("p",Mv,"Importando…")):Te("",!0),u.value?(M(),ee("p",Fv,pe(u.value),1)):Te("",!0),l.value?(M(),ee("p",$v,"Carregando…")):(M(),ee("div",zv,[b("section",Hv,[z[12]||(z[12]=b("h2",null,"Regras padrão",-1)),b("div",Uv,[(M(!0),ee(we,null,Bn(d.value,te=>(M(),Fe(ie(ke),{key:te.id,class:"card card--interactive rules-card",to:E(te)},{default:Ae(()=>[b("span",Kv,[W(ie(No),{size:22,"aria-hidden":"true"})]),b("div",null,[b("h2",null,pe(te.nome),1),b("p",null,pe(te.ruleSets.length)+" checklists · "+pe(w(te))+" regras",1)]),W(ie(or),{size:20,class:"chevron","aria-hidden":"true"})]),_:2},1032,["to"]))),128))])]),b("section",Gv,[z[13]||(z[13]=b("h2",null,"Suas regras",-1)),m.value.length?(M(),ee("div",Wv,[(M(!0),ee(we,null,Bn(m.value,te=>(M(),Fe(ie(ke),{key:te.id,class:"card card--interactive rules-card",to:E(te)},{default:Ae(()=>[b("span",Yv,[W(ie(No),{size:22,"aria-hidden":"true"})]),b("div",null,[b("h2",null,pe(te.nome),1),b("p",null,pe(te.ruleSets.length)+" checklists",1)]),W(ie(or),{size:20,class:"chevron","aria-hidden":"true"})]),_:2},1032,["to"]))),128))])):(M(),Fe($n,{key:1,title:"Nenhum conjunto importado",text:"Importe arquivos ou uma pasta para começar."}))])]))],64))}},Jv=[{path:"/",redirect:"/projects"},{path:"/banner",beforeEnter:()=>{window.location.assign("/Extensao-26.2/banner-siic-2026.pdf")}},{path:"/projects",name:"projects",component:gv},{path:"/projects/:projectId",name:"project-detail",component:tv,props:!0},{path:"/projects/:projectId/environments/:environmentId",name:"project-environment",component:K0,props:!0},{path:"/elements/new",name:"element-new",component:ct,meta:{hideBottomNav:!0}},{path:"/elements/:elementId",name:"element-detail",component:ct,props:!0},{path:"/elements/:elementId/evaluation",name:"element-evaluation",component:Fs,props:!0},{path:"/quick-evaluation",name:"quick-evaluation",component:ct,props:{quick:!0}},{path:"/quick-evaluation/result",name:"quick-evaluation-result",component:Fs,props:{quick:!0}},{path:"/rules",name:"rules",component:ut},{path:"/rules/documentation",name:"rules-documentation",component:ut,props:{documentation:!0}},{path:"/rules/:source/:groupId",name:"rules-group",component:ut,props:!0},{path:"/:pathMatch(.*)*",redirect:"/projects"}],Fc=Mf({history:yf("/Extensao-26.2/"),routes:Jv}),Qv={__name:"App",setup(e){const n=Se(null),o=Se(!1),a=Xt();return sa("confirmPopup",{open:r=>n.value?.open(r)}),zn(async()=>{await Fc.isReady();const r=window.matchMedia?.("(display-mode: standalone)")?.matches||navigator.standalone===!0,i=localStorage.getItem("welcomePopupSeen");a.path==="/projects"&&!r&&!i&&(localStorage.setItem("welcomePopupSeen","true"),o.value=!0)}),(r,i)=>(M(),ee(we,null,[W(ph,null,{default:Ae(()=>[W(ie(Dc))]),_:1}),W(gh,{ref_key:"confirmPopup",ref:n},null,512),o.value?(M(),Fe(Nh,{key:0,onClose:i[0]||(i[0]=s=>o.value=!1)})):Te("",!0)],64))}};async function Xv(){const[e,n]=await Promise.all([Ym(),Vp()]);hm(Qv).provide("services",e).provide("builtInRuleSets",n).use(Fc).mount("#app"),Am({immediate:!0})}Xv().catch(e=>{document.querySelector("#app").innerHTML=`<main class="fatal-error"><h1>Não foi possível abrir o aplicativo</h1><p>${e.message}</p></main>`});
