(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))a(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function o(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function a(r){if(r.ep)return;r.ep=!0;const i=o(r);fetch(r.href,i)}})();function Ot(e){const n=Object.create(null);for(const o of e.split(","))n[o]=1;return o=>o in n}const qe={},Po=[],Mn=()=>{},zs=()=>!1,tr=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),ir=e=>e.startsWith("onUpdate:"),Je=Object.assign,Pt=(e,n)=>{const o=e.indexOf(n);o>-1&&e.splice(o,1)},zc=Object.prototype.hasOwnProperty,De=(e,n)=>zc.call(e,n),be=Array.isArray,ko=e=>Ta(e)==="[object Map]",Uo=e=>Ta(e)==="[object Set]",ai=e=>Ta(e)==="[object Date]",xe=e=>typeof e=="function",$e=e=>typeof e=="string",In=e=>typeof e=="symbol",je=e=>e!==null&&typeof e=="object",Hs=e=>(je(e)||xe(e))&&xe(e.then)&&xe(e.catch),Us=Object.prototype.toString,Ta=e=>Us.call(e),Hc=e=>Ta(e).slice(8,-1),Ks=e=>Ta(e)==="[object Object]",kt=e=>$e(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,ra=Ot(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),sr=e=>{const n=Object.create(null);return(o=>n[o]||(n[o]=e(o)))},Uc=/-\w/g,mn=sr(e=>e.replace(Uc,n=>n.slice(1).toUpperCase())),Kc=/\B([A-Z])/g,So=sr(e=>e.replace(Kc,"-$1").toLowerCase()),lr=sr(e=>e.charAt(0).toUpperCase()+e.slice(1)),Fa=sr(e=>e?`on${lr(e)}`:""),jn=(e,n)=>!Object.is(e,n),$a=(e,...n)=>{for(let o=0;o<e.length;o++)e[o](...n)},Gs=(e,n,o,a=!1)=>{Object.defineProperty(e,n,{configurable:!0,enumerable:!1,writable:a,value:o})},cr=e=>{const n=parseFloat(e);return isNaN(n)?e:n},Gc=e=>{const n=$e(e)?Number(e):NaN;return isNaN(n)?e:n};let ri;const ur=()=>ri||(ri=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Ra(e){if(be(e)){const n={};for(let o=0;o<e.length;o++){const a=e[o],r=$e(a)?Qc(a):Ra(a);if(r)for(const i in r)n[i]=r[i]}return n}else if($e(e)||je(e))return e}const Wc=/;(?![^(]*\))/g,Yc=/:([^]+)/,Jc=/\/\*[^]*?\*\//g;function Qc(e){const n={};return e.replace(Jc,"").split(Wc).forEach(o=>{if(o){const a=o.split(Yc);a.length>1&&(n[a[0].trim()]=a[1].trim())}}),n}function un(e){let n="";if($e(e))n=e;else if(be(e))for(let o=0;o<e.length;o++){const a=un(e[o]);a&&(n+=a+" ")}else if(je(e))for(const o in e)e[o]&&(n+=o+" ");return n.trim()}function wn(e){if(!e)return null;let{class:n,style:o}=e;return n&&!$e(n)&&(e.class=un(n)),o&&(e.style=Ra(o)),e}const Xc="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Zc=Ot(Xc);function Ws(e){return!!e||e===""}function eu(e,n){if(e.length!==n.length)return!1;let o=!0;for(let a=0;o&&a<e.length;a++)o=Ko(e[a],n[a]);return o}function Ko(e,n){if(e===n)return!0;let o=ai(e),a=ai(n);if(o||a)return o&&a?e.getTime()===n.getTime():!1;if(o=In(e),a=In(n),o||a)return e===n;if(o=be(e),a=be(n),o||a)return o&&a?eu(e,n):!1;if(o=je(e),a=je(n),o||a){if(!o||!a)return!1;const r=Object.keys(e).length,i=Object.keys(n).length;if(r!==i)return!1;for(const s in e){const l=e.hasOwnProperty(s),c=n.hasOwnProperty(s);if(l&&!c||!l&&c||!Ko(e[s],n[s]))return!1}}return String(e)===String(n)}function Vt(e,n){return e.findIndex(o=>Ko(o,n))}const Ys=e=>!!(e&&e.__v_isRef===!0),me=e=>$e(e)?e:e==null?"":be(e)||je(e)&&(e.toString===Us||!xe(e.toString))?Ys(e)?me(e.value):JSON.stringify(e,Js,2):String(e),Js=(e,n)=>Ys(n)?Js(e,n.value):ko(n)?{[`Map(${n.size})`]:[...n.entries()].reduce((o,[a,r],i)=>(o[Nr(a,i)+" =>"]=r,o),{})}:Uo(n)?{[`Set(${n.size})`]:[...n.values()].map(o=>Nr(o))}:In(n)?Nr(n):je(n)&&!be(n)&&!Ks(n)?String(n):n,Nr=(e,n="")=>{var o;return In(e)?`Symbol(${(o=e.description)!=null?o:n})`:e};let Qe;class nu{constructor(n=!1){this.detached=n,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this._warnOnRun=!0,this.__v_skip=!0,!n&&Qe&&(Qe.active?(this.parent=Qe,this.index=(Qe.scopes||(Qe.scopes=[])).push(this)-1):(this._active=!1,this._warnOnRun=!1))}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let n,o;if(this.scopes){const a=this.scopes.slice();for(n=0,o=a.length;n<o;n++)a[n].pause()}for(n=0,o=this.effects.length;n<o;n++)this.effects[n].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let n,o;if(this.scopes){const r=this.scopes.slice();for(n=0,o=r.length;n<o;n++)r[n].resume()}const a=this.effects.slice();for(n=0,o=a.length;n<o;n++)a[n].resume()}}run(n){if(this._active){const o=Qe;try{return Qe=this,n()}finally{Qe=o}}}on(){++this._on===1&&(this.prevScope=Qe,Qe=this)}off(){if(this._on>0&&--this._on===0){if(Qe===this)Qe=this.prevScope;else{let n=Qe;for(;n;){if(n.prevScope===this){n.prevScope=this.prevScope;break}n=n.prevScope}}this.prevScope=void 0}}stop(n){if(this._active){this._active=!1;let o,a;for(o=0,a=this.effects.length;o<a;o++)this.effects[o].stop();for(this.effects.length=0,o=0,a=this.cleanups.length;o<a;o++)this.cleanups[o]();if(this.cleanups.length=0,this.scopes){const r=this.scopes.slice();for(o=0,a=r.length;o<a;o++)r[o].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!n){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0}}}function ou(){return Qe}let Me;const xr=new WeakSet;class Qs{constructor(n){this.fn=n,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Qe&&(Qe.active?Qe.effects.push(this):this.flags&=-2)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,xr.has(this)&&(xr.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Zs(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,ti(this),el(this);const n=Me,o=Cn;Me=this,Cn=!0;try{return this.fn()}finally{nl(this),Me=n,Cn=o,this.flags&=-3}}stop(){if(this.flags&1){for(let n=this.deps;n;n=n.nextDep)jt(n);this.deps=this.depsTail=void 0,ti(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?xr.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){dt(this)&&this.run()}get dirty(){return dt(this)}}let Xs=0,ta,ia;function Zs(e,n=!1){if(e.flags|=8,n){e.next=ia,ia=e;return}e.next=ta,ta=e}function Dt(){Xs++}function Lt(){if(--Xs>0)return;if(ia){let n=ia;for(ia=void 0;n;){const o=n.next;n.next=void 0,n.flags&=-9,n=o}}let e;for(;ta;){let n=ta;for(ta=void 0;n;){const o=n.next;if(n.next=void 0,n.flags&=-9,n.flags&1)try{n.trigger()}catch(a){e||(e=a)}n=o}}if(e)throw e}function el(e){for(let n=e.deps;n;n=n.nextDep)n.version=-1,n.prevActiveLink=n.dep.activeLink,n.dep.activeLink=n}function nl(e){let n,o=e.depsTail,a=o;for(;a;){const r=a.prevDep;a.version===-1?(a===o&&(o=r),jt(a),au(a)):n=a,a.dep.activeLink=a.prevActiveLink,a.prevActiveLink=void 0,a=r}e.deps=n,e.depsTail=o}function dt(e){for(let n=e.deps;n;n=n.nextDep)if(n.dep.version!==n.version||n.dep.computed&&(ol(n.dep.computed)||n.dep.version!==n.version))return!0;return!!e._dirty}function ol(e){if(e.flags&4&&!(e.flags&16)||(e.flags&=-17,e.globalVersion===pa)||(e.globalVersion=pa,!e.isSSR&&e.flags&128&&(!e.deps&&!e._dirty||!dt(e))))return;e.flags|=2;const n=e.dep,o=Me,a=Cn;Me=e,Cn=!0;try{el(e);const r=e.fn(e._value);(n.version===0||jn(r,e._value))&&(e.flags|=128,e._value=r,n.version++)}catch(r){throw n.version++,r}finally{Me=o,Cn=a,nl(e),e.flags&=-3}}function jt(e,n=!1){const{dep:o,prevSub:a,nextSub:r}=e;if(a&&(a.nextSub=r,e.prevSub=void 0),r&&(r.prevSub=a,e.nextSub=void 0),o.subs===e&&(o.subs=a,!a&&o.computed)){o.computed.flags&=-5;for(let i=o.computed.deps;i;i=i.nextDep)jt(i,!0)}!n&&!--o.sc&&o.map&&o.map.delete(o.key)}function au(e){const{prevDep:n,nextDep:o}=e;n&&(n.nextDep=o,e.prevDep=void 0),o&&(o.prevDep=n,e.nextDep=void 0)}let Cn=!0;const al=[];function Xn(){al.push(Cn),Cn=!1}function Zn(){const e=al.pop();Cn=e===void 0?!0:e}function ti(e){const{cleanup:n}=e;if(e.cleanup=void 0,n){const o=Me;Me=void 0;try{n()}finally{Me=o}}}let pa=0;class ru{constructor(n,o){this.sub=n,this.dep=o,this.version=o.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class qt{constructor(n){this.computed=n,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(n){if(!Me||!Cn||Me===this.computed)return;let o=this.activeLink;if(o===void 0||o.sub!==Me)o=this.activeLink=new ru(Me,this),Me.deps?(o.prevDep=Me.depsTail,Me.depsTail.nextDep=o,Me.depsTail=o):Me.deps=Me.depsTail=o,rl(o);else if(o.version===-1&&(o.version=this.version,o.nextDep)){const a=o.nextDep;a.prevDep=o.prevDep,o.prevDep&&(o.prevDep.nextDep=a),o.prevDep=Me.depsTail,o.nextDep=void 0,Me.depsTail.nextDep=o,Me.depsTail=o,Me.deps===o&&(Me.deps=a)}return o}trigger(n){this.version++,pa++,this.notify(n)}notify(n){Dt();try{for(let o=this.subs;o;o=o.prevSub)o.sub.notify()&&o.sub.dep.notify()}finally{Lt()}}}function rl(e){if(e.dep.sc++,e.sub.flags&4){const n=e.dep.computed;if(n&&!e.dep.subs){n.flags|=20;for(let a=n.deps;a;a=a.nextDep)rl(a)}const o=e.dep.subs;o!==e&&(e.prevSub=o,o&&(o.nextSub=e)),e.dep.subs=e}}const mt=new WeakMap,xo=Symbol(""),pt=Symbol(""),fa=Symbol("");function nn(e,n,o){if(Cn&&Me){let a=mt.get(e);a||mt.set(e,a=new Map);let r=a.get(o);r||(a.set(o,r=new qt),r.map=a,r.key=o),r.track()}}function Yn(e,n,o,a,r,i){const s=mt.get(e);if(!s){pa++;return}const l=c=>{c&&c.trigger()};if(Dt(),n==="clear")s.forEach(l);else{const c=be(e),u=c&&kt(o);if(c&&o==="length"){const d=Number(a);s.forEach((p,f)=>{(f==="length"||f===fa||!In(f)&&f>=d)&&l(p)})}else switch((o!==void 0||s.has(void 0))&&l(s.get(o)),u&&l(s.get(fa)),n){case"add":c?u&&l(s.get("length")):(l(s.get(xo)),ko(e)&&l(s.get(pt)));break;case"delete":c||(l(s.get(xo)),ko(e)&&l(s.get(pt)));break;case"set":ko(e)&&l(s.get(xo));break}}Lt()}function wo(e){const n=Pe(e);return n===e?n:(nn(n,"iterate",fa),Bn(e)?n:n.map(On))}function dr(e){return nn(e=Pe(e),"iterate",fa),e}function Dn(e,n){return eo(e)?qo(Bo(e)?On(n):n):On(n)}const tu={__proto__:null,[Symbol.iterator](){return Br(this,Symbol.iterator,e=>Dn(this,e))},concat(...e){return wo(this).concat(...e.map(n=>be(n)?wo(n):n))},entries(){return Br(this,"entries",e=>(e[1]=Dn(this,e[1]),e))},every(e,n){return Hn(this,"every",e,n,void 0,arguments)},filter(e,n){return Hn(this,"filter",e,n,o=>o.map(a=>Dn(this,a)),arguments)},find(e,n){return Hn(this,"find",e,n,o=>Dn(this,o),arguments)},findIndex(e,n){return Hn(this,"findIndex",e,n,void 0,arguments)},findLast(e,n){return Hn(this,"findLast",e,n,o=>Dn(this,o),arguments)},findLastIndex(e,n){return Hn(this,"findLastIndex",e,n,void 0,arguments)},forEach(e,n){return Hn(this,"forEach",e,n,void 0,arguments)},includes(...e){return Tr(this,"includes",e)},indexOf(...e){return Tr(this,"indexOf",e)},join(e){return wo(this).join(e)},lastIndexOf(...e){return Tr(this,"lastIndexOf",e)},map(e,n){return Hn(this,"map",e,n,void 0,arguments)},pop(){return Yo(this,"pop")},push(...e){return Yo(this,"push",e)},reduce(e,...n){return ii(this,"reduce",e,n)},reduceRight(e,...n){return ii(this,"reduceRight",e,n)},shift(){return Yo(this,"shift")},some(e,n){return Hn(this,"some",e,n,void 0,arguments)},splice(...e){return Yo(this,"splice",e)},toReversed(){return wo(this).toReversed()},toSorted(e){return wo(this).toSorted(e)},toSpliced(...e){return wo(this).toSpliced(...e)},unshift(...e){return Yo(this,"unshift",e)},values(){return Br(this,"values",e=>Dn(this,e))}};function Br(e,n,o){const a=dr(e),r=a[n]();return a!==e&&!Bn(e)&&(r._next=r.next,r.next=()=>{const i=r._next();return i.done||(i.value=o(i.value)),i}),r}const iu=Array.prototype;function Hn(e,n,o,a,r,i){const s=dr(e),l=s!==e&&!Bn(e),c=s[n];if(c!==iu[n]){const p=c.apply(e,i);return l?On(p):p}let u=o;s!==e&&(l?u=function(p,f){return o.call(this,Dn(e,p),f,e)}:o.length>2&&(u=function(p,f){return o.call(this,p,f,e)}));const d=c.call(s,u,a);return l&&r?r(d):d}function ii(e,n,o,a){const r=dr(e),i=r!==e&&!Bn(e);let s=o,l=!1;r!==e&&(i?(l=a.length===0,s=function(u,d,p){return l&&(l=!1,u=Dn(e,u)),o.call(this,u,Dn(e,d),p,e)}):o.length>3&&(s=function(u,d,p){return o.call(this,u,d,p,e)}));const c=r[n](s,...a);return l?Dn(e,c):c}function Tr(e,n,o){const a=Pe(e);nn(a,"iterate",fa);const r=a[n](...o);return(r===-1||r===!1)&&$t(o[0])?(o[0]=Pe(o[0]),a[n](...o)):r}function Yo(e,n,o=[]){Xn(),Dt();const a=Pe(e)[n].apply(e,o);return Lt(),Zn(),a}const su=Ot("__proto__,__v_isRef,__isVue"),tl=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(In));function lu(e){In(e)||(e=String(e));const n=Pe(this);return nn(n,"has",e),n.hasOwnProperty(e)}class il{constructor(n=!1,o=!1){this._isReadonly=n,this._isShallow=o}get(n,o,a){if(o==="__v_skip")return n.__v_skip;const r=this._isReadonly,i=this._isShallow;if(o==="__v_isReactive")return!r;if(o==="__v_isReadonly")return r;if(o==="__v_isShallow")return i;if(o==="__v_raw")return a===(r?i?bu:ul:i?cl:ll).get(n)||Object.getPrototypeOf(n)===Object.getPrototypeOf(a)?n:void 0;const s=be(n);if(!r){let c;if(s&&(c=tu[o]))return c;if(o==="hasOwnProperty")return lu}const l=Reflect.get(n,o,rn(n)?n:a);if((In(o)?tl.has(o):su(o))||(r||nn(n,"get",o),i))return l;if(rn(l)){const c=s&&kt(o)?l:l.value;return r&&je(c)?ht(c):c}return je(l)?r?ht(l):Sa(l):l}}class sl extends il{constructor(n=!1){super(!1,n)}set(n,o,a,r){let i=n[o];const s=be(n)&&kt(o);if(!this._isShallow){const u=eo(i);if(!Bn(a)&&!eo(a)&&(i=Pe(i),a=Pe(a)),!s&&rn(i)&&!rn(a))return u||(i.value=a),!0}const l=s?Number(o)<n.length:De(n,o),c=Reflect.set(n,o,a,rn(n)?n:r);return n===Pe(r)&&c&&(l?jn(a,i)&&Yn(n,"set",o,a):Yn(n,"add",o,a)),c}deleteProperty(n,o){const a=De(n,o);n[o];const r=Reflect.deleteProperty(n,o);return r&&a&&Yn(n,"delete",o,void 0),r}has(n,o){const a=Reflect.has(n,o);return(!In(o)||!tl.has(o))&&nn(n,"has",o),a}ownKeys(n){return nn(n,"iterate",be(n)?"length":xo),Reflect.ownKeys(n)}}class cu extends il{constructor(n=!1){super(!0,n)}set(n,o){return!0}deleteProperty(n,o){return!0}}const uu=new sl,du=new cu,mu=new sl(!0);const ft=e=>e,ka=e=>Reflect.getPrototypeOf(e);function pu(e,n,o){return function(...a){const r=this.__v_raw,i=Pe(r),s=ko(i),l=e==="entries"||e===Symbol.iterator&&s,c=e==="keys"&&s,u=r[e](...a),d=o?ft:n?qo:On;return!n&&nn(i,"iterate",c?pt:xo),Je(Object.create(u),{next(){const{value:p,done:f}=u.next();return f?{value:p,done:f}:{value:l?[d(p[0]),d(p[1])]:d(p),done:f}}})}}function Va(e){return function(...n){return e==="delete"?!1:e==="clear"?void 0:this}}function fu(e,n){const o={get(r){const i=this.__v_raw,s=Pe(i),l=Pe(r);e||(jn(r,l)&&nn(s,"get",r),nn(s,"get",l));const{has:c}=ka(s),u=n?ft:e?qo:On;if(c.call(s,r))return u(i.get(r));if(c.call(s,l))return u(i.get(l));i!==s&&i.get(r)},get size(){const r=this.__v_raw;return!e&&nn(Pe(r),"iterate",xo),r.size},has(r){const i=this.__v_raw,s=Pe(i),l=Pe(r);return e||(jn(r,l)&&nn(s,"has",r),nn(s,"has",l)),r===l?i.has(r):i.has(r)||i.has(l)},forEach(r,i){const s=this,l=s.__v_raw,c=Pe(l),u=n?ft:e?qo:On;return!e&&nn(c,"iterate",xo),l.forEach((d,p)=>r.call(i,u(d),u(p),s))}};return Je(o,e?{add:Va("add"),set:Va("set"),delete:Va("delete"),clear:Va("clear")}:{add(r){const i=Pe(this),s=ka(i),l=Pe(r),c=!n&&!Bn(r)&&!eo(r)?l:r;return s.has.call(i,c)||jn(r,c)&&s.has.call(i,r)||jn(l,c)&&s.has.call(i,l)||(i.add(c),Yn(i,"add",c,c)),this},set(r,i){!n&&!Bn(i)&&!eo(i)&&(i=Pe(i));const s=Pe(this),{has:l,get:c}=ka(s);let u=l.call(s,r);u||(r=Pe(r),u=l.call(s,r));const d=c.call(s,r);return s.set(r,i),u?jn(i,d)&&Yn(s,"set",r,i):Yn(s,"add",r,i),this},delete(r){const i=Pe(this),{has:s,get:l}=ka(i);let c=s.call(i,r);c||(r=Pe(r),c=s.call(i,r)),l&&l.call(i,r);const u=i.delete(r);return c&&Yn(i,"delete",r,void 0),u},clear(){const r=Pe(this),i=r.size!==0,s=r.clear();return i&&Yn(r,"clear",void 0,void 0),s}}),["keys","values","entries",Symbol.iterator].forEach(r=>{o[r]=pu(r,e,n)}),o}function Mt(e,n){const o=fu(e,n);return(a,r,i)=>r==="__v_isReactive"?!e:r==="__v_isReadonly"?e:r==="__v_raw"?a:Reflect.get(De(o,r)&&r in a?o:a,r,i)}const hu={get:Mt(!1,!1)},vu={get:Mt(!1,!0)},gu={get:Mt(!0,!1)};const ll=new WeakMap,cl=new WeakMap,ul=new WeakMap,bu=new WeakMap;function _u(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Sa(e){return eo(e)?e:Ft(e,!1,uu,hu,ll)}function dl(e){return Ft(e,!1,mu,vu,cl)}function ht(e){return Ft(e,!0,du,gu,ul)}function Ft(e,n,o,a,r){if(!je(e)||e.__v_raw&&!(n&&e.__v_isReactive)||e.__v_skip||!Object.isExtensible(e))return e;const i=r.get(e);if(i)return i;const s=_u(Hc(e));if(s===0)return e;const l=new Proxy(e,s===2?a:o);return r.set(e,l),l}function Bo(e){return eo(e)?Bo(e.__v_raw):!!(e&&e.__v_isReactive)}function eo(e){return!!(e&&e.__v_isReadonly)}function Bn(e){return!!(e&&e.__v_isShallow)}function $t(e){return e?!!e.__v_raw:!1}function Pe(e){const n=e&&e.__v_raw;return n?Pe(n):e}function yu(e){return!De(e,"__v_skip")&&Object.isExtensible(e)&&Gs(e,"__v_skip",!0),e}const On=e=>je(e)?Sa(e):e,qo=e=>je(e)?ht(e):e;function rn(e){return e?e.__v_isRef===!0:!1}function Te(e){return ml(e,!1)}function Au(e){return ml(e,!0)}function ml(e,n){return rn(e)?e:new Nu(e,n)}class Nu{constructor(n,o){this.dep=new qt,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=o?n:Pe(n),this._value=o?n:On(n),this.__v_isShallow=o}get value(){return this.dep.track(),this._value}set value(n){const o=this._rawValue,a=this.__v_isShallow||Bn(n)||eo(n);n=a?n:Pe(n),jn(n,o)&&(this._rawValue=n,this._value=a?n:On(n),this.dep.trigger())}}function le(e){return rn(e)?e.value:e}const xu={get:(e,n,o)=>n==="__v_raw"?e:le(Reflect.get(e,n,o)),set:(e,n,o,a)=>{const r=e[n];return rn(r)&&!rn(o)?(r.value=o,!0):Reflect.set(e,n,o,a)}};function pl(e){return Bo(e)?e:new Proxy(e,xu)}class Bu{constructor(n,o,a){this.fn=n,this.setter=o,this._value=void 0,this.dep=new qt(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=pa-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!o,this.isSSR=a}notify(){if(this.flags|=16,!(this.flags&8)&&Me!==this)return Zs(this,!0),!0}get value(){const n=this.dep.track();return ol(this),n&&(n.version=this.dep.version),this._value}set value(n){this.setter&&this.setter(n)}}function Tu(e,n,o=!1){let a,r;return xe(e)?a=e:(a=e.get,r=e.set),new Bu(a,r,o)}const Da={},Ua=new WeakMap;let bo;function Ru(e,n=!1,o=bo){if(o){let a=Ua.get(o);a||Ua.set(o,a=[]),a.push(e)}}function Su(e,n,o=qe){const{immediate:a,deep:r,once:i,scheduler:s,augmentJob:l,call:c}=o,u=E=>r?E:Bn(E)||r===!1||r===0?Jn(E,1):Jn(E);let d,p,f,v,x=!1,w=!1;if(rn(e)?(p=()=>e.value,x=Bn(e)):Bo(e)?(p=()=>u(e),x=!0):be(e)?(w=!0,x=e.some(E=>Bo(E)||Bn(E)),p=()=>e.map(E=>{if(rn(E))return E.value;if(Bo(E))return u(E);if(xe(E))return c?c(E,2):E()})):xe(e)?n?p=c?()=>c(e,2):e:p=()=>{if(f){Xn();try{f()}finally{Zn()}}const E=bo;bo=d;try{return c?c(e,3,[v]):e(v)}finally{bo=E}}:p=Mn,n&&r){const E=p,se=r===!0?1/0:r;p=()=>Jn(E(),se)}const S=ou(),k=()=>{d.stop(),S&&S.active&&Pt(S.effects,d)};if(i&&n){const E=n;n=(...se)=>{const Q=E(...se);return k(),Q}}let N=w?new Array(e.length).fill(Da):Da;const C=E=>{if(!(!(d.flags&1)||!d.dirty&&!E))if(n){const se=d.run();if(E||r||x||(w?se.some((Q,$)=>jn(Q,N[$])):jn(se,N))){f&&f();const Q=bo;bo=d;try{const $=[se,N===Da?void 0:w&&N[0]===Da?[]:N,v];N=se,c?c(n,3,$):n(...$)}finally{bo=Q}}}else d.run()};return l&&l(C),d=new Qs(p),d.scheduler=s?()=>s(C,!1):C,v=E=>Ru(E,!1,d),f=d.onStop=()=>{const E=Ua.get(d);if(E){if(c)c(E,4);else for(const se of E)se();Ua.delete(d)}},n?a?C(!0):N=d.run():s?s(C.bind(null,!0),!0):d.run(),k.pause=d.pause.bind(d),k.resume=d.resume.bind(d),k.stop=k,k}function Jn(e,n=1/0,o){if(n<=0||!je(e)||e.__v_skip||(o=o||new Map,(o.get(e)||0)>=n))return e;if(o.set(e,n),n--,rn(e))Jn(e.value,n,o);else if(be(e))for(let a=0;a<e.length;a++)Jn(e[a],n,o);else if(Uo(e)||ko(e))e.forEach(a=>{Jn(a,n,o)});else if(Ks(e)){for(const a in e)Jn(e[a],n,o);for(const a of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,a)&&Jn(e[a],n,o)}return e}function wa(e,n,o,a){try{return a?e(...a):e()}catch(r){mr(r,n,o)}}function Tn(e,n,o,a){if(xe(e)){const r=wa(e,n,o,a);return r&&Hs(r)&&r.catch(i=>{mr(i,n,o)}),r}if(be(e)){const r=[];for(let i=0;i<e.length;i++)r.push(Tn(e[i],n,o,a));return r}}function mr(e,n,o,a=!0){const r=n?n.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:s}=n&&n.appContext.config||qe;if(n){let l=n.parent;const c=n.proxy,u=`https://vuejs.org/error-reference/#runtime-${o}`;for(;l;){const d=l.ec;if(d){for(let p=0;p<d.length;p++)if(d[p](e,c,u)===!1)return}l=l.parent}if(i){Xn(),wa(i,null,10,[e,c,u]),Zn();return}}wu(e,o,r,a,s)}function wu(e,n,o,a=!0,r=!1){if(r)throw e;console.error(e)}const dn=[];let Vn=-1;const Vo=[];let io=null,Co=0;const fl=Promise.resolve();let Ka=null;function Mo(e){const n=Ka||fl;return e?n.then(this?e.bind(this):e):n}function Eu(e){let n=Vn+1,o=dn.length;for(;n<o;){const a=n+o>>>1,r=dn[a],i=ha(r);i<e||i===e&&r.flags&2?n=a+1:o=a}return n}function zt(e){if(!(e.flags&1)){const n=ha(e),o=dn[dn.length-1];!o||!(e.flags&2)&&n>=ha(o)?dn.push(e):dn.splice(Eu(n),0,e),e.flags|=1,hl()}}function hl(){Ka||(Ka=fl.then(gl))}function Cu(e){if(!be(e))io&&e.id===-1?io.splice(Co+1,0,e):e.flags&1||(Vo.push(e),e.flags|=1);else for(let n=0;n<e.length;n++)Vo.push(e[n]);hl()}function si(e,n,o=Vn+1){for(;o<dn.length;o++){const a=dn[o];if(a&&a.flags&2){if(e&&a.id!==e.uid)continue;dn.splice(o,1),o--,a.flags&4&&(a.flags&=-2),a(),a.flags&4||(a.flags&=-2)}}}function vl(e){if(Vo.length){const n=[...new Set(Vo)].sort((o,a)=>ha(o)-ha(a));if(Vo.length=0,io){for(let o=0;o<n.length;o++)io.push(n[o]);return}for(io=n,Co=0;Co<io.length;Co++){const o=io[Co];o.flags&4&&(o.flags&=-2),o.flags&8||o(),o.flags&=-2}io=null,Co=0}}const ha=e=>e.id==null?e.flags&2?-1:1/0:e.id;function gl(e){try{for(Vn=0;Vn<dn.length;Vn++){const n=dn[Vn];n&&!(n.flags&8)&&(n.flags&4&&(n.flags&=-2),wa(n,n.i,n.i?15:14),n.flags&4||(n.flags&=-2))}}finally{for(;Vn<dn.length;Vn++){const n=dn[Vn];n&&(n.flags&=-2)}Vn=-1,dn.length=0,vl(),Ka=null,(dn.length||Vo.length)&&gl()}}let Xe=null,bl=null;function Ga(e){const n=Xe;return Xe=e,bl=e&&e.type.__scopeId||null,n}function ye(e,n=Xe,o){if(!n||e._n)return e;const a=(...r)=>{a._d&&Qa(-1);const i=Ga(n),s=Qn.length;let l;try{l=e(...r)}finally{for(let c=Qn.length;c>s;c--)Yt();Ga(i),a._d&&Qa(1)}return l};return a._n=!0,a._c=!0,a._d=!0,a}function Nn(e,n){if(Xe===null)return e;const o=br(Xe),a=e.dirs||(e.dirs=[]);for(let r=0;r<n.length;r++){let[i,s,l,c=qe]=n[r];i&&(xe(i)&&(i={mounted:i,updated:i}),i.deep&&Jn(s),a.push({dir:i,instance:o,value:s,oldValue:void 0,arg:l,modifiers:c}))}return e}function po(e,n,o,a){const r=e.dirs,i=n&&n.dirs;for(let s=0;s<r.length;s++){const l=r[s];i&&(l.oldValue=i[s].value);let c=l.dir[a];c&&(Xn(),Tn(c,o,8,[e.el,l,e,n]),Zn())}}function sa(e,n){if(an){let o=an.provides;const a=an.parent&&an.parent.provides;a===o&&(o=an.provides=Object.create(a)),o[e]=n}}function He(e,n,o=!1){const a=Zl();if(a||Lo){let r=Lo?Lo._context.provides:a?a.parent==null||a.ce?a.vnode.appContext&&a.vnode.appContext.provides:a.parent.provides:void 0;if(r&&e in r)return r[e];if(arguments.length>1)return o&&xe(n)?n.call(a&&a.proxy):n}}const Iu=Symbol.for("v-scx"),Ou=()=>He(Iu);function To(e,n,o){return _l(e,n,o)}function _l(e,n,o=qe){const{immediate:a,deep:r,flush:i,once:s}=o,l=Je({},o),c=n&&a||!n&&i!=="post";let u;if(ya){if(i==="sync"){const v=Ou();u=v.__watcherHandles||(v.__watcherHandles=[])}else if(!c){const v=()=>{};return v.stop=Mn,v.resume=Mn,v.pause=Mn,v}}const d=an;l.call=(v,x,w)=>Tn(v,d,x,w);let p=!1;i==="post"?l.scheduler=v=>{sn(v,d&&d.suspense)}:i!=="sync"&&(p=!0,l.scheduler=(v,x)=>{x?v():zt(v)}),l.augmentJob=v=>{n&&(v.flags|=4),p&&(v.flags|=2,d&&(v.id=d.uid,v.i=d))};const f=Su(e,n,l);return ya&&(u?u.push(f):c&&f()),f}function Pu(e,n,o){const a=this.proxy,r=$e(e)?e.includes(".")?yl(a,e):()=>a[e]:e.bind(a,a);let i;xe(n)?i=n:(i=n.handler,o=n);const s=Ea(this),l=_l(r,i.bind(a),o);return s(),l}function yl(e,n){const o=n.split(".");return()=>{let a=e;for(let r=0;r<o.length&&a;r++)a=a[o[r]];return a}}const to=new WeakMap,Al=Symbol("_vte"),pr=e=>e.__isTeleport,_o=e=>e&&(e.disabled||e.disabled===""),ku=e=>e&&(e.defer||e.defer===""),li=e=>typeof SVGElement<"u"&&e instanceof SVGElement,ci=e=>typeof MathMLElement=="function"&&e instanceof MathMLElement,vt=(e,n)=>{const o=e&&e.to;return $e(o)?n?n(o):null:o},Vu={name:"Teleport",__isTeleport:!0,process(e,n,o,a,r,i,s,l,c,u){const{mc:d,pc:p,pbc:f,o:{insert:v,querySelector:x,createText:w,createComment:S,parentNode:k}}=u,N=_o(n.props);let{dynamicChildren:C}=n;const E=($,re,ae)=>{$.shapeFlag&16&&d($.children,re,ae,r,i,s,l,c)},se=($=n)=>{const re=_o($.props),ae=$.target=vt($.props,x),Y=gt(ae,$,w,v);ae&&(s!=="svg"&&li(ae)?s="svg":s!=="mathml"&&ci(ae)&&(s="mathml"),r&&r.isCE&&(r.ce._teleportTargets||(r.ce._teleportTargets=new Set)).add(ae),re||(E($,ae,Y),na($,!1)))},Q=$=>{const re=()=>{if(to.get($)===re){if(to.delete($),_o($.props)){const ae=k($.el)||o;E($,ae,$.anchor),na($,!0)}se($)}};to.set($,re),sn(re,i)};if(e==null){const $=n.el=w(""),re=n.anchor=w("");if(v($,o,a),v(re,o,a),ku(n.props)||i&&i.pendingBranch){Q(n);return}N&&(E(n,o,re),na(n,!0)),se()}else{n.el=e.el;const $=n.anchor=e.anchor,re=to.get(e);if(re){re.flags|=8,to.delete(e),Q(n);return}n.targetStart=e.targetStart;const ae=n.target=e.target,Y=n.targetAnchor=e.targetAnchor,F=_o(e.props),B=F?o:ae,X=F?$:Y;if(s==="svg"||li(ae)?s="svg":(s==="mathml"||ci(ae))&&(s="mathml"),C?(f(e.dynamicChildren,C,B,r,i,s,l),Wt(e,n,!0)):c||p(e,n,B,X,r,i,s,l,!1),N)F?n.props&&e.props&&n.props.to!==e.props.to&&(n.props.to=e.props.to):La(n,o,$,u,1);else if((n.props&&n.props.to)!==(e.props&&e.props.to)){const ne=vt(n.props,x);ne&&(n.target=ne,La(n,ne,null,u,0))}else F&&La(n,ae,Y,u,1);na(n,N)}},remove(e,n,o,{um:a,o:{remove:r}},i){const{shapeFlag:s,children:l,anchor:c,targetStart:u,targetAnchor:d,target:p,props:f}=e,v=_o(f),x=i||!v,w=to.get(e);if(w&&(w.flags|=8,to.delete(e)),p&&(r(u),r(d)),i&&r(c),!w&&(v||p)&&s&16)for(let S=0;S<l.length;S++){const k=l[S];a(k,n,o,x,!!k.dynamicChildren)}},move:La,hydrate:Du};function La(e,n,o,{o:{insert:a},m:r},i=2){i===0&&a(e.targetAnchor,n,o);const{el:s,anchor:l,shapeFlag:c,children:u,props:d}=e,p=i===2;if(p&&a(s,n,o),!to.has(e)&&(!p||_o(d))&&c&16)for(let f=0;f<u.length;f++)r(u[f],n,o,2);p&&a(l,n,o)}function Du(e,n,o,a,r,i,{o:{nextSibling:s,parentNode:l,querySelector:c,insert:u,createText:d}},p){function f(S,k){let N=k;for(;N;){if(N&&N.nodeType===8){if(N.data==="teleport start anchor")n.targetStart=N;else if(N.data==="teleport anchor"){n.targetAnchor=N,S._lpa=n.targetAnchor&&s(n.targetAnchor);break}}N=s(N)}}function v(S,k){k.anchor=p(s(S),k,l(S),o,a,r,i)}const x=n.target=vt(n.props,c),w=_o(n.props);if(x){const S=x._lpa||x.firstChild;n.shapeFlag&16&&(w?(v(e,n),f(x,S),n.targetAnchor||gt(x,n,d,u,l(e)===x?e:null)):(n.anchor=s(e),f(x,S),n.targetAnchor||gt(x,n,d,u),p(S&&s(S),n,x,o,a,r,i))),na(n,w)}else w&&n.shapeFlag&16&&(v(e,n),n.targetStart=e,n.targetAnchor=s(e));return n.anchor&&s(n.anchor)}const Nl=Vu;function na(e,n){const o=e.ctx;if(o&&o.ut){let a,r;for(n?(a=e.el,r=e.anchor):(a=e.targetStart,r=e.targetAnchor);a&&a!==r;)a.nodeType===1&&a.setAttribute("data-v-owner",o.uid),a=a.nextSibling;o.ut()}}function gt(e,n,o,a,r=null){const i=n.targetStart=o(""),s=n.targetAnchor=o("");return i[Al]=s,e&&(a(i,e,r),a(s,e,r)),s}const An=Symbol("_leaveCb"),Jo=Symbol("_enterCb");function Lu(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return zn(()=>{e.isMounted=!0}),Ht(()=>{e.isUnmounting=!0}),e}const yn=[Function,Array],xl={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:yn,onEnter:yn,onAfterEnter:yn,onEnterCancelled:yn,onBeforeLeave:yn,onLeave:yn,onAfterLeave:yn,onLeaveCancelled:yn,onBeforeAppear:yn,onAppear:yn,onAfterAppear:yn,onAppearCancelled:yn},Bl=e=>{const n=e.subTree;return n.component?Bl(n.component):n},ju={name:"BaseTransition",props:xl,setup(e,{slots:n}){const o=Zl(),a=Lu();return()=>{const r=n.default&&Sl(n.default(),!0),i=r&&r.length?Tl(r):o.subTree?Ne():void 0;if(!i)return;const s=Pe(e),{mode:l}=s;if(a.isLeaving)return Rr(i);const c=Wa(i);if(!c)return Rr(i);let u=bt(c,s,a,o,p=>u=p);c.type!==on&&va(c,u);let d=o.subTree&&Wa(o.subTree);if(d&&d.type!==on&&!yo(d,c)&&Bl(o).type!==on){let p=bt(d,s,a,o);if(va(d,p),l==="out-in"&&c.type!==on)return a.isLeaving=!0,p.afterLeave=()=>{a.isLeaving=!1,o.job.flags&8||o.update(),delete p.afterLeave,d=void 0},Rr(i);l==="in-out"&&c.type!==on?p.delayLeave=(f,v,x)=>{const w=Rl(a,d);w[String(d.key)]=d,f[An]=()=>{v(),f[An]=void 0,delete u.delayedLeave,d=void 0},u.delayedLeave=()=>{x(),delete u.delayedLeave,d=void 0}}:d=void 0}else d&&(d=void 0);return i}}};function Tl(e){let n=e[0];if(e.length>1){for(const o of e)if(o.type!==on){n=o;break}}return n}const qu=ju;function Rl(e,n){const{leavingVNodes:o}=e;let a=o.get(n.type);return a||(a=Object.create(null),o.set(n.type,a)),a}function bt(e,n,o,a,r){const{appear:i,mode:s,persisted:l=!1,onBeforeEnter:c,onEnter:u,onAfterEnter:d,onEnterCancelled:p,onBeforeLeave:f,onLeave:v,onAfterLeave:x,onLeaveCancelled:w,onBeforeAppear:S,onAppear:k,onAfterAppear:N,onAppearCancelled:C}=n,E=String(e.key),se=Rl(o,e),Q=(ae,Y)=>{ae&&Tn(ae,a,9,Y)},$=(ae,Y)=>{const F=Y[1];Q(ae,Y),be(ae)?ae.every(B=>B.length<=1)&&F():ae.length<=1&&F()},re={mode:s,persisted:l,beforeEnter(ae){let Y=c;if(!o.isMounted)if(i)Y=S||c;else return;ae[An]&&ae[An](!0);const F=se[E];F&&yo(e,F)&&F.el[An]&&F.el[An](),Q(Y,[ae])},enter(ae){if(se[E]===e)return;let Y=u,F=d,B=p;if(!o.isMounted)if(i)Y=k||u,F=N||d,B=C||p;else return;let X=!1;ae[Jo]=Ce=>{X||(X=!0,Ce?Q(B,[ae]):Q(F,[ae]),re.delayedLeave&&re.delayedLeave(),ae[Jo]=void 0)};const ne=ae[Jo].bind(null,!1);Y?$(Y,[ae,ne]):ne()},leave(ae,Y){const F=String(e.key);if(ae[Jo]&&ae[Jo](!0),o.isUnmounting)return Y();Q(f,[ae]);let B=!1;ae[An]=ne=>{B||(B=!0,Y(),ne?Q(w,[ae]):Q(x,[ae]),ae[An]=void 0,se[F]===e&&delete se[F])};const X=ae[An].bind(null,!1);se[F]=e,v?$(v,[ae,X]):X()},clone(ae){const Y=bt(ae,n,o,a,r);return r&&r(Y),Y}};return re}function Rr(e){if(fr(e))return e=mo(e),e.children=null,e}function Wa(e){if(!fr(e))return pr(e.type)&&e.children?Tl(e.children):e;if(e.component)return e.component.subTree;const{shapeFlag:n,children:o}=e;if(o){if(n&16)return o[0];if(n&32&&xe(o.default))return o.default()}}function va(e,n){if(e.shapeFlag&6&&e.component){e.transition=n;const o=e.component.subTree;va(pr(o.type)&&Wa(o)||o,n)}else e.shapeFlag&128?(e.ssContent.transition=n.clone(e.ssContent),e.ssFallback.transition=n.clone(e.ssFallback)):e.transition=n}function Sl(e,n=!1,o){let a=[],r=0;for(let i=0;i<e.length;i++){let s=e[i];const l=o==null?s.key:String(o)+String(s.key!=null?s.key:i);s.type===Se?(s.patchFlag&128&&r++,a=a.concat(Sl(s.children,n,l))):(n||s.type!==on)&&a.push(l!=null?mo(s,{key:l}):s)}if(r>1)for(let i=0;i<a.length;i++)a[i].patchFlag=-2;return a}function wl(e,n){return xe(e)?Je({name:e.name},n,{setup:e}):e}function El(e){e.ids=[e.ids[0]+e.ids[2]+++"-",0,0]}function ui(e,n){let o;return!!((o=Object.getOwnPropertyDescriptor(e,n))&&!o.configurable)}const Ya=new WeakMap;function la(e,n,o,a,r=!1){if(be(e)){e.forEach((w,S)=>la(w,n&&(be(n)?n[S]:n),o,a,r));return}if(Do(a)&&!r){a.shapeFlag&512&&a.type.__asyncResolved&&a.component.subTree.component&&la(e,n,o,a.component.subTree);return}const i=a.shapeFlag&4?br(a.component):a.el,s=r?null:i,{i:l,r:c}=e,u=n&&n.r,d=l.refs===qe?l.refs={}:l.refs,p=l.setupState,f=Pe(p),v=p===qe?zs:w=>ui(d,w)?!1:De(f,w),x=(w,S)=>!(S&&ui(d,S));if(u!=null&&u!==c){if(di(n),$e(u))d[u]=null,v(u)&&(p[u]=null);else if(rn(u)){const w=n;x(u,w.k)&&(u.value=null),w.k&&(d[w.k]=null)}}if(xe(c))wa(c,l,12,[s,d]);else{const w=$e(c),S=rn(c);if(w||S){const k=()=>{if(e.f){const N=w?v(c)?p[c]:d[c]:x()||!e.k?c.value:d[e.k];if(r)be(N)&&Pt(N,i);else if(be(N))N.includes(i)||N.push(i);else if(w)d[c]=[i],v(c)&&(p[c]=d[c]);else{const C=[i];x(c,e.k)&&(c.value=C),e.k&&(d[e.k]=C)}}else w?(d[c]=s,v(c)&&(p[c]=s)):S&&(x(c,e.k)&&(c.value=s),e.k&&(d[e.k]=s))};if(s){const N=()=>{k(),Ya.delete(e)};N.id=-1,Ya.set(e,N),sn(N,o)}else di(e),k()}}}function di(e){const n=Ya.get(e);n&&(n.flags|=8,Ya.delete(e))}ur().requestIdleCallback;ur().cancelIdleCallback;const Do=e=>!!e.type.__asyncLoader,fr=e=>e.type.__isKeepAlive;function Mu(e,n){Cl(e,"a",n)}function Fu(e,n){Cl(e,"da",n)}function Cl(e,n,o=an){const a=e.__wdc||(e.__wdc=()=>{let r=o;for(;r;){if(r.isDeactivated)return;r=r.parent}return e()});if(hr(n,a,o),o){let r=o.parent;for(;r&&r.parent;)fr(r.parent.vnode)&&$u(a,n,o,r),r=r.parent}}function $u(e,n,o,a){const r=hr(n,e,a,!0);Ut(()=>{Pt(a[n],r)},o)}function hr(e,n,o=an,a=!1){if(o){const r=o[e]||(o[e]=[]),i=n.__weh||(n.__weh=(...s)=>{Xn();const l=Ea(o),c=Tn(n,o,e,s);return l(),Zn(),c});return a?r.unshift(i):r.push(i),i}}const no=e=>(n,o=an)=>{(!ya||e==="sp")&&hr(e,(...a)=>n(...a),o)},zu=no("bm"),zn=no("m"),Hu=no("bu"),Uu=no("u"),Ht=no("bum"),Ut=no("um"),Ku=no("sp"),Gu=no("rtg"),Wu=no("rtc");function Yu(e,n=an){hr("ec",e,n)}const Il="components",Ju="directives",Ol=Symbol.for("v-ndc");function Sr(e){return $e(e)?Pl(Il,e,!1)||e:e||Ol}function Qu(e){return Pl(Ju,e)}function Pl(e,n,o=!0,a=!1){const r=Xe||an;if(r){const i=r.type;if(e===Il){const l=kd(i,!1);if(l&&(l===n||l===mn(n)||l===lr(mn(n))))return i}const s=mi(r[e]||i[e],n)||mi(r.appContext[e],n);return!s&&a?i:s}}function mi(e,n){return e&&(e[n]||e[mn(n)]||e[lr(mn(n))])}function _n(e,n,o,a){let r;const i=o,s=be(e);if(s||$e(e)){const l=s&&Bo(e);let c=!1,u=!1;l&&(c=!Bn(e),u=eo(e),e=dr(e)),r=new Array(e.length);for(let d=0,p=e.length;d<p;d++)r[d]=n(c?u?qo(On(e[d])):On(e[d]):e[d],d,void 0,i)}else if(typeof e=="number"){r=new Array(e);for(let l=0;l<e;l++)r[l]=n(l+1,l,void 0,i)}else if(je(e))if(e[Symbol.iterator])r=Array.from(e,(l,c)=>n(l,c,void 0,i));else{const l=Object.keys(e);r=new Array(l.length);for(let c=0,u=l.length;c<u;c++){const d=l[c];r[c]=n(e[d],d,c,i)}}else r=[];return r}function hn(e,n,o,a,r,i){if(o==null&&(o={}),Xe.ce||Xe.parent&&Do(Xe.parent)&&Xe.parent.ce){const u=o,d=Object.keys(u).length>0;return n!=="default"&&(u.name=n),j(),Fe(Se,null,[W("slot",u,a&&a())],d?-2:64)}let s=e[n];s&&s._c&&(s._d=!1);const l=Qn.length;j();let c;try{const u=s&&kl(s(o)),d=o.key||i||u&&u.key;c=Fe(Se,{key:(d&&!In(d)?d:`_${n}`)+(!u&&a?"_fb":"")},u||(a?a():[]),u&&e._===1?64:-2)}catch(u){for(let d=Qn.length;d>l;d--)Yt();throw u}finally{s&&s._c&&(s._d=!0)}return c.scopeId&&(c.slotScopeIds=[c.scopeId+"-s"]),c}function kl(e){return e.some(n=>ba(n)?!(n.type===on||n.type===Se&&!kl(n.children)):!0)?e:null}function Xu(e,n){const o={};for(const a in e)o[Fa(a)]=e[a];return o}const _t=e=>e?ec(e)?br(e):_t(e.parent):null,ca=Je(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>_t(e.parent),$root:e=>_t(e.root),$host:e=>e.ce,$emit:e=>e.emit,$options:e=>Dl(e),$forceUpdate:e=>e.f||(e.f=()=>{zt(e.update)}),$nextTick:e=>e.n||(e.n=Mo.bind(e.proxy)),$watch:e=>Pu.bind(e)}),wr=(e,n)=>e!==qe&&!e.__isScriptSetup&&De(e,n),Zu={get({_:e},n){if(n==="__v_skip")return!0;const{ctx:o,setupState:a,data:r,props:i,accessCache:s,type:l,appContext:c}=e;if(n[0]!=="$"){const f=s[n];if(f!==void 0)switch(f){case 1:return a[n];case 2:return r[n];case 4:return o[n];case 3:return i[n]}else{if(wr(a,n))return s[n]=1,a[n];if(r!==qe&&De(r,n))return s[n]=2,r[n];if(De(i,n))return s[n]=3,i[n];if(o!==qe&&De(o,n))return s[n]=4,o[n];yt&&(s[n]=0)}}const u=ca[n];let d,p;if(u)return n==="$attrs"&&nn(e.attrs,"get",""),u(e);if((d=l.__cssModules)&&(d=d[n]))return d;if(o!==qe&&De(o,n))return s[n]=4,o[n];if(p=c.config.globalProperties,De(p,n))return p[n]},set({_:e},n,o){const{data:a,setupState:r,ctx:i}=e;return wr(r,n)?(r[n]=o,!0):a!==qe&&De(a,n)?(a[n]=o,!0):De(e.props,n)||n[0]==="$"&&n.slice(1)in e?!1:(i[n]=o,!0)},has({_:{data:e,setupState:n,accessCache:o,ctx:a,appContext:r,props:i,type:s}},l){let c;return!!(o[l]||e!==qe&&l[0]!=="$"&&De(e,l)||wr(n,l)||De(i,l)||De(a,l)||De(ca,l)||De(r.config.globalProperties,l)||(c=s.__cssModules)&&c[l])},defineProperty(e,n,o){return o.get!=null?e._.accessCache[n]=0:De(o,"value")&&this.set(e,n,o.value,null),Reflect.defineProperty(e,n,o)}};function pi(e){return be(e)?e.reduce((n,o)=>(n[o]=null,n),{}):e}let yt=!0;function ed(e){const n=Dl(e),o=e.proxy,a=e.ctx;yt=!1,n.beforeCreate&&fi(n.beforeCreate,e,"bc");const{data:r,computed:i,methods:s,watch:l,provide:c,inject:u,created:d,beforeMount:p,mounted:f,beforeUpdate:v,updated:x,activated:w,deactivated:S,beforeDestroy:k,beforeUnmount:N,destroyed:C,unmounted:E,render:se,renderTracked:Q,renderTriggered:$,errorCaptured:re,serverPrefetch:ae,expose:Y,inheritAttrs:F,components:B,directives:X,filters:ne}=n;if(u&&nd(u,a,null),s)for(const we in s){const Re=s[we];xe(Re)&&(a[we]=Re.bind(o))}if(r){const we=r.call(o,o);je(we)&&(e.data=Sa(we))}if(yt=!0,i)for(const we in i){const Re=i[we],vn=xe(Re)?Re.bind(o,o):xe(Re.get)?Re.get.bind(o,o):Mn,Ze=!xe(Re)&&xe(Re.set)?Re.set.bind(o):Mn,fn=Le({get:vn,set:Ze});Object.defineProperty(a,we,{enumerable:!0,configurable:!0,get:()=>fn.value,set:We=>fn.value=We})}if(l)for(const we in l)Vl(l[we],a,o,we);if(c){const we=xe(c)?c.call(o):c;Reflect.ownKeys(we).forEach(Re=>{sa(Re,we[Re])})}d&&fi(d,e,"c");function J(we,Re){be(Re)?Re.forEach(vn=>we(vn.bind(o))):Re&&we(Re.bind(o))}if(J(zu,p),J(zn,f),J(Hu,v),J(Uu,x),J(Mu,w),J(Fu,S),J(Yu,re),J(Wu,Q),J(Gu,$),J(Ht,N),J(Ut,E),J(Ku,ae),be(Y))if(Y.length){const we=e.exposed||(e.exposed={});Y.forEach(Re=>{Object.defineProperty(we,Re,{get:()=>o[Re],set:vn=>o[Re]=vn,enumerable:!0})})}else e.exposed||(e.exposed={});se&&e.render===Mn&&(e.render=se),F!=null&&(e.inheritAttrs=F),B&&(e.components=B),X&&(e.directives=X),ae&&El(e)}function nd(e,n,o=Mn){be(e)&&(e=At(e));for(const a in e){const r=e[a];let i;je(r)?"default"in r?i=He(r.from||a,r.default,!0):i=He(r.from||a):i=He(r),rn(i)?Object.defineProperty(n,a,{enumerable:!0,configurable:!0,get:()=>i.value,set:s=>i.value=s}):n[a]=i}}function fi(e,n,o){Tn(be(e)?e.map(a=>a.bind(n.proxy)):e.bind(n.proxy),n,o)}function Vl(e,n,o,a){let r=a.includes(".")?yl(o,a):()=>o[a];if($e(e)){const i=n[e];xe(i)&&To(r,i)}else if(xe(e))To(r,e.bind(o));else if(je(e))if(be(e))e.forEach(i=>Vl(i,n,o,a));else{const i=xe(e.handler)?e.handler.bind(o):n[e.handler];xe(i)&&To(r,i,e)}}function Dl(e){const n=e.type,{mixins:o,extends:a}=n,{mixins:r,optionsCache:i,config:{optionMergeStrategies:s}}=e.appContext,l=i.get(n);let c;return l?c=l:!r.length&&!o&&!a?c=n:(c={},r.length&&r.forEach(u=>Ja(c,u,s,!0)),Ja(c,n,s)),je(n)&&i.set(n,c),c}function Ja(e,n,o,a=!1){const{mixins:r,extends:i}=n;i&&Ja(e,i,o,!0),r&&r.forEach(s=>Ja(e,s,o,!0));for(const s in n)if(!(a&&s==="expose")){const l=od[s]||o&&o[s];e[s]=l?l(e[s],n[s]):n[s]}return e}const od={data:hi,props:vi,emits:vi,methods:oa,computed:oa,beforeCreate:tn,created:tn,beforeMount:tn,mounted:tn,beforeUpdate:tn,updated:tn,beforeDestroy:tn,beforeUnmount:tn,destroyed:tn,unmounted:tn,activated:tn,deactivated:tn,errorCaptured:tn,serverPrefetch:tn,components:oa,directives:oa,watch:rd,provide:hi,inject:ad};function hi(e,n){return n?e?function(){return Je(xe(e)?e.call(this,this):e,xe(n)?n.call(this,this):n)}:n:e}function ad(e,n){return oa(At(e),At(n))}function At(e){if(be(e)){const n={};for(let o=0;o<e.length;o++)n[e[o]]=e[o];return n}return e}function tn(e,n){return e?[...new Set([].concat(e,n))]:n}function oa(e,n){return e?Je(Object.create(null),e,n):n}function vi(e,n){return e?be(e)&&be(n)?[...new Set([...e,...n])]:Je(Object.create(null),pi(e),pi(n??{})):n}function rd(e,n){if(!e)return n;if(!n)return e;const o=Je(Object.create(null),e);for(const a in n)o[a]=tn(e[a],n[a]);return o}function Ll(){return{app:null,config:{isNativeTag:zs,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let td=0;function id(e,n){return function(a,r=null){xe(a)||(a=Je({},a)),r!=null&&!je(r)&&(r=null);const i=Ll(),s=new WeakSet,l=[];let c=!1;const u=i.app={_uid:td++,_component:a,_props:r,_container:null,_context:i,_instance:null,version:Dd,get config(){return i.config},set config(d){},use(d,...p){return s.has(d)||(d&&xe(d.install)?(s.add(d),d.install(u,...p)):xe(d)&&(s.add(d),d(u,...p))),u},mixin(d){return i.mixins.includes(d)||i.mixins.push(d),u},component(d,p){return p?(i.components[d]=p,u):i.components[d]},directive(d,p){return p?(i.directives[d]=p,u):i.directives[d]},mount(d,p,f){if(!c){const v=u._ceVNode||W(a,r);return v.appContext=i,f===!0?f="svg":f===!1&&(f=void 0),e(v,d,f),c=!0,u._container=d,d.__vue_app__=u,br(v.component)}},onUnmount(d){l.push(d)},unmount(){c&&(Tn(l,u._instance,16),e(null,u._container),delete u._container.__vue_app__)},provide(d,p){return i.provides[d]=p,u},runWithContext(d){const p=Lo;Lo=u;try{return d()}finally{Lo=p}}};return u}}let Lo=null;const sd=(e,n)=>n==="modelValue"||n==="model-value"?e.modelModifiers:e[`${n}Modifiers`]||e[`${mn(n)}Modifiers`]||e[`${So(n)}Modifiers`];function ld(e,n,...o){if(e.isUnmounted)return;const a=e.vnode.props||qe;let r=o;const i=n.startsWith("update:"),s=i&&sd(a,n.slice(7));s&&(s.trim&&(r=o.map(d=>$e(d)?d.trim():d)),s.number&&(r=o.map(cr)));let l,c=a[l=Fa(n)]||a[l=Fa(mn(n))];!c&&i&&(c=a[l=Fa(So(n))]),c&&Tn(c,e,6,r);const u=a[l+"Once"];if(u){if(!e.emitted)e.emitted={};else if(e.emitted[l])return;e.emitted[l]=!0,Tn(u,e,6,r)}}const cd=new WeakMap;function jl(e,n,o=!1){const a=o?cd:n.emitsCache,r=a.get(e);if(r!==void 0)return r;const i=e.emits;let s={},l=!1;if(!xe(e)){const c=u=>{const d=jl(u,n,!0);d&&(l=!0,Je(s,d))};!o&&n.mixins.length&&n.mixins.forEach(c),e.extends&&c(e.extends),e.mixins&&e.mixins.forEach(c)}return!i&&!l?(je(e)&&a.set(e,null),null):(be(i)?i.forEach(c=>s[c]=null):Je(s,i),je(e)&&a.set(e,s),s)}function vr(e,n){return!e||!tr(n)?!1:(n=n.slice(2),n=n==="Once"?n:n.replace(/Once$/,""),De(e,n[0].toLowerCase()+n.slice(1))||De(e,So(n))||De(e,n))}function gi(e){const{type:n,vnode:o,proxy:a,withProxy:r,propsOptions:[i],slots:s,attrs:l,emit:c,render:u,renderCache:d,props:p,data:f,setupState:v,ctx:x,inheritAttrs:w}=e,S=Ga(e);let k,N;try{if(o.shapeFlag&4){const E=r||a,se=E;k=Ln(u.call(se,E,d,p,v,f,x)),N=l}else{const E=n;k=Ln(E.length>1?E(p,{attrs:l,slots:s,emit:c}):E(p,null)),N=n.props?l:ud(l)}}catch(E){Qn.length=0,mr(E,e,1),k=W(on)}let C=k;if(N&&w!==!1){const E=Object.keys(N),{shapeFlag:se}=C;E.length&&se&7&&(i&&E.some(ir)&&(N=dd(N,i)),C=mo(C,N,!1,!0))}if(o.dirs&&(C=mo(C,null,!1,!0),C.dirs=C.dirs?C.dirs.concat(o.dirs):o.dirs),o.transition){const E=pr(C.type)&&Wa(C)||C;va(E,o.transition)}return k=C,Ga(S),k}const ud=e=>{let n;for(const o in e)(o==="class"||o==="style"||tr(o))&&((n||(n={}))[o]=e[o]);return n},dd=(e,n)=>{const o={};for(const a in e)(!ir(a)||!(a.slice(9)in n))&&(o[a]=e[a]);return o};function md(e,n,o){const{props:a,children:r,component:i}=e,{props:s,children:l,patchFlag:c}=n,u=i.emitsOptions;if(n.dirs||n.transition)return!0;if(o&&c>=0){if(c&1024)return!0;if(c&16)return a?bi(a,s,u):!!s;if(c&8){const d=n.dynamicProps;for(let p=0;p<d.length;p++){const f=d[p];if(ql(s,a,f)&&!vr(u,f))return!0}}}else return(r||l)&&(!l||!l.$stable)?!0:a===s?!1:a?s?bi(a,s,u):!0:!!s;return!1}function bi(e,n,o){const a=Object.keys(n);if(a.length!==Object.keys(e).length)return!0;for(let r=0;r<a.length;r++){const i=a[r];if(ql(n,e,i)&&!vr(o,i))return!0}return!1}function ql(e,n,o){const a=e[o],r=n[o];return o==="style"&&je(a)&&je(r)?!Ko(a,r):a!==r}function pd({vnode:e,parent:n,suspense:o},a){for(;n;){const r=n.subTree;if(r.suspense&&r.suspense.activeBranch===e&&(r.suspense.vnode.el=r.el=a,e=r),r===e)(e=n.vnode).el=a,n=n.parent;else break}o&&o.activeBranch===e&&(o.vnode.el=a)}const Ml={},Fl=()=>Object.create(Ml),$l=e=>Object.getPrototypeOf(e)===Ml;function fd(e,n,o,a=!1){const r={},i=Fl();e.propsDefaults=Object.create(null),zl(e,n,r,i);for(const s in e.propsOptions[0])s in r||(r[s]=void 0);o?e.props=a?r:dl(r):e.type.props?e.props=r:e.props=i,e.attrs=i}function hd(e,n,o,a){const{props:r,attrs:i,vnode:{patchFlag:s}}=e,l=Pe(r),[c]=e.propsOptions;let u=!1;if((a||s>0)&&!(s&16)){if(s&8){const d=e.vnode.dynamicProps;for(let p=0;p<d.length;p++){let f=d[p];if(vr(e.emitsOptions,f))continue;const v=n[f];if(c)if(De(i,f))v!==i[f]&&(i[f]=v,u=!0);else{const x=mn(f);r[x]=Nt(c,l,x,v,e,!1)}else v!==i[f]&&(i[f]=v,u=!0)}}}else{zl(e,n,r,i)&&(u=!0);let d;for(const p in l)(!n||!De(n,p)&&((d=So(p))===p||!De(n,d)))&&(c?o&&(o[p]!==void 0||o[d]!==void 0)&&(r[p]=Nt(c,l,p,void 0,e,!0)):delete r[p]);if(i!==l)for(const p in i)(!n||!De(n,p))&&(delete i[p],u=!0)}u&&Yn(e.attrs,"set","")}function zl(e,n,o,a){const[r,i]=e.propsOptions;let s=!1,l;if(n)for(let c in n){if(ra(c))continue;const u=n[c];let d;r&&De(r,d=mn(c))?!i||!i.includes(d)?o[d]=u:(l||(l={}))[d]=u:vr(e.emitsOptions,c)||(!(c in a)||u!==a[c])&&(a[c]=u,s=!0)}if(i){const c=Pe(o),u=l||qe;for(let d=0;d<i.length;d++){const p=i[d];o[p]=Nt(r,c,p,u[p],e,!De(u,p))}}return s}function Nt(e,n,o,a,r,i){const s=e[o];if(s!=null){const l=De(s,"default");if(l&&a===void 0){const c=s.default;if(s.type!==Function&&!s.skipFactory&&xe(c)){const{propsDefaults:u}=r;if(o in u)a=u[o];else{const d=Ea(r);a=u[o]=c.call(null,n),d()}}else a=c;r.ce&&r.ce._setProp(o,a)}s[0]&&(i&&!l?a=!1:s[1]&&(a===""||a===So(o))&&(a=!0))}return a}const vd=new WeakMap;function Hl(e,n,o=!1){const a=o?vd:n.propsCache,r=a.get(e);if(r)return r;const i=e.props,s={},l=[];let c=!1;if(!xe(e)){const d=p=>{c=!0;const[f,v]=Hl(p,n,!0);Je(s,f),v&&l.push(...v)};!o&&n.mixins.length&&n.mixins.forEach(d),e.extends&&d(e.extends),e.mixins&&e.mixins.forEach(d)}if(!i&&!c)return je(e)&&a.set(e,Po),Po;if(be(i))for(let d=0;d<i.length;d++){const p=mn(i[d]);_i(p)&&(s[p]=qe)}else if(i)for(const d in i){const p=mn(d);if(_i(p)){const f=i[d],v=s[p]=be(f)||xe(f)?{type:f}:Je({},f),x=v.type;let w=!1,S=!0;if(be(x))for(let k=0;k<x.length;++k){const N=x[k],C=xe(N)&&N.name;if(C==="Boolean"){w=!0;break}else C==="String"&&(S=!1)}else w=xe(x)&&x.name==="Boolean";v[0]=w,v[1]=S,(w||De(v,"default"))&&l.push(p)}}const u=[s,l];return je(e)&&a.set(e,u),u}function _i(e){return e[0]!=="$"&&!ra(e)}const Kt=e=>e==="_"||e==="_ctx"||e==="$stable",Gt=e=>be(e)?e.map(Ln):[Ln(e)],gd=(e,n,o)=>{if(n._n)return n;const a=ye((...r)=>Gt(n(...r)),o);return a._c=!1,a},Ul=(e,n,o)=>{const a=e._ctx;for(const r in e){if(Kt(r))continue;const i=e[r];if(xe(i))n[r]=gd(r,i,a);else if(i!=null){const s=Gt(i);n[r]=()=>s}}},Kl=(e,n)=>{const o=Gt(n);e.slots.default=()=>o},Gl=(e,n,o)=>{for(const a in n)(o||!Kt(a))&&(e[a]=n[a])},bd=(e,n,o)=>{const a=e.slots=Fl();if(e.vnode.shapeFlag&32){const r=n._;r?(Gl(a,n,o),o&&Gs(a,"_",r,!0)):Ul(n,a)}else n&&Kl(e,n)},_d=(e,n,o)=>{const{vnode:a,slots:r}=e;let i=!0,s=qe;if(a.shapeFlag&32){const l=n._;l?o&&l===1?i=!1:Gl(r,n,o):(i=!n.$stable,Ul(n,r)),s=n}else n&&(Kl(e,n),s={default:1});if(i)for(const l in r)!Kt(l)&&s[l]==null&&delete r[l]},sn=Bd;function yd(e){return Ad(e)}function Ad(e,n){const o=ur();o.__VUE__=!0;const{insert:a,remove:r,patchProp:i,createElement:s,createText:l,createComment:c,setText:u,setElementText:d,parentNode:p,nextSibling:f,setScopeId:v=Mn,insertStaticContent:x}=e,w=(h,g,y,V=null,q=null,I=null,te=void 0,oe=null,Z=!!g.dynamicChildren)=>{if(h===g)return;h&&!yo(h,g)&&(V=P(h),We(h,q,I,!0),h=null),g.patchFlag===-2&&(Z=!1,g.dynamicChildren=null);const{type:z,ref:ve,shapeFlag:ie}=g;switch(z){case gr:S(h,g,y,V);break;case on:k(h,g,y,V);break;case za:h==null&&N(g,y,V,te);break;case Se:B(h,g,y,V,q,I,te,oe,Z);break;default:ie&1?se(h,g,y,V,q,I,te,oe,Z):ie&6?X(h,g,y,V,q,I,te,oe,Z):(ie&64||ie&128)&&z.process(h,g,y,V,q,I,te,oe,Z,pe)}ve!=null&&q?la(ve,h&&h.ref,I,g||h,!g):ve==null&&h&&h.ref!=null&&la(h.ref,null,I,h,!0)},S=(h,g,y,V)=>{if(h==null)a(g.el=l(g.children),y,V);else{const q=g.el=h.el;g.children!==h.children&&u(q,g.children)}},k=(h,g,y,V)=>{h==null?a(g.el=c(g.children||""),y,V):g.el=h.el},N=(h,g,y,V)=>{[h.el,h.anchor]=x(h.children,g,y,V,h.el,h.anchor)},C=({el:h,anchor:g},y,V)=>{let q;for(;h&&h!==g;)q=f(h),a(h,y,V),h=q;a(g,y,V)},E=({el:h,anchor:g})=>{let y;for(;h&&h!==g;)y=f(h),r(h),h=y;r(g)},se=(h,g,y,V,q,I,te,oe,Z)=>{if(g.type==="svg"?te="svg":g.type==="math"&&(te="mathml"),h==null)Q(g,y,V,q,I,te,oe,Z);else{const z=h.el&&h.el._isVueCE?h.el:null;try{z&&z._beginPatch(),ae(h,g,q,I,te,oe,Z)}finally{z&&z._endPatch()}}},Q=(h,g,y,V,q,I,te,oe)=>{let Z,z;const{props:ve,shapeFlag:ie,transition:fe,dirs:_e}=h;if(Z=h.el=s(h.type,I,ve&&ve.is,ve),ie&8?d(Z,h.children):ie&16&&re(h.children,Z,null,V,q,Er(h,I),te,oe),_e&&po(h,null,V,"created"),$(Z,h,h.scopeId,te,V),ve){for(const Oe in ve)Oe!=="value"&&!ra(Oe)&&i(Z,Oe,null,ve[Oe],I,V);"value"in ve&&i(Z,"value",null,ve.value,I),(z=ve.onVnodeBeforeMount)&&kn(z,V,h)}_e&&po(h,null,V,"beforeMount");const Ee=Nd(q,fe);Ee&&fe.beforeEnter(Z),a(Z,g,y),((z=ve&&ve.onVnodeMounted)||Ee||_e)&&sn(()=>{z&&kn(z,V,h),Ee&&fe.enter(Z),_e&&po(h,null,V,"mounted")},q)},$=(h,g,y,V,q)=>{if(y&&v(h,y),V)for(let I=0;I<V.length;I++)v(h,V[I]);if(q){let I=q.subTree;if(g===I||Jl(I.type)&&(I.ssContent===g||I.ssFallback===g)){const te=q.vnode;$(h,te,te.scopeId,te.slotScopeIds,q.parent)}}},re=(h,g,y,V,q,I,te,oe,Z=0)=>{for(let z=Z;z<h.length;z++){const ve=h[z]=oe?Wn(h[z]):Ln(h[z]);w(null,ve,g,y,V,q,I,te,oe)}},ae=(h,g,y,V,q,I,te)=>{const oe=g.el=h.el;let{patchFlag:Z,dynamicChildren:z,dirs:ve}=g;Z|=h.patchFlag&16;const ie=h.props||qe,fe=g.props||qe;let _e;if(y&&fo(y,!1),(_e=fe.onVnodeBeforeUpdate)&&kn(_e,y,g,h),ve&&po(g,h,y,"beforeUpdate"),y&&fo(y,!0),z&&(!h.dynamicChildren||h.dynamicChildren.length!==z.length)&&(Z=0,te=!1,z=null),(ie.innerHTML&&fe.innerHTML==null||ie.textContent&&fe.textContent==null)&&d(oe,""),z?Y(h.dynamicChildren,z,oe,y,V,Er(g,q),I):te||Re(h,g,oe,null,y,V,Er(g,q),I,!1),Z>0){if(Z&16)F(oe,ie,fe,y,q);else if(Z&2&&ie.class!==fe.class&&i(oe,"class",null,fe.class,q),Z&4&&i(oe,"style",ie.style,fe.style,q),Z&8){const Ee=g.dynamicProps;for(let Oe=0;Oe<Ee.length;Oe++){const t=Ee[Oe],_=ie[t],R=fe[t];(R!==_||t==="value")&&i(oe,t,_,R,q,y)}}Z&1&&h.children!==g.children&&d(oe,g.children)}else!te&&z==null&&F(oe,ie,fe,y,q);((_e=fe.onVnodeUpdated)||ve)&&sn(()=>{_e&&kn(_e,y,g,h),ve&&po(g,h,y,"updated")},V)},Y=(h,g,y,V,q,I,te)=>{for(let oe=0;oe<g.length;oe++){const Z=h[oe],z=g[oe],ve=Z.el&&(Z.type===Se||!yo(Z,z)||Z.shapeFlag&198)?p(Z.el):y;w(Z,z,ve,null,V,q,I,te,!0)}},F=(h,g,y,V,q)=>{if(g!==y){if(g!==qe)for(const I in g)!ra(I)&&!(I in y)&&i(h,I,g[I],null,q,V);for(const I in y){if(ra(I))continue;const te=y[I],oe=g[I];te!==oe&&I!=="value"&&i(h,I,oe,te,q,V)}"value"in y&&i(h,"value",g.value,y.value,q)}},B=(h,g,y,V,q,I,te,oe,Z)=>{const z=g.el=h?h.el:l(""),ve=g.anchor=h?h.anchor:l("");let{patchFlag:ie,dynamicChildren:fe,slotScopeIds:_e}=g;_e&&(oe=oe?oe.concat(_e):_e),h==null?(a(z,y,V),a(ve,y,V),re(g.children||[],y,ve,q,I,te,oe,Z)):ie>0&&ie&64&&fe&&h.dynamicChildren&&h.dynamicChildren.length===fe.length?(Y(h.dynamicChildren,fe,y,q,I,te,oe),(g.key!=null||q&&g===q.subTree)&&Wt(h,g,!0)):Re(h,g,y,ve,q,I,te,oe,Z)},X=(h,g,y,V,q,I,te,oe,Z)=>{g.slotScopeIds=oe,h==null?g.shapeFlag&512?q.ctx.activate(g,y,V,te,Z):ne(g,y,V,q,I,te,Z):Ce(h,g,Z)},ne=(h,g,y,V,q,I,te)=>{const oe=h.component=Ed(h,V,q);if(fr(h)&&(oe.ctx.renderer=pe),Cd(oe,!1,te),oe.asyncDep){if(q&&q.registerDep(oe,J,te),!h.el){const Z=oe.subTree=W(on);k(null,Z,g,y),h.placeholder=Z.el}}else J(oe,h,g,y,q,I,te)},Ce=(h,g,y)=>{const V=g.component=h.component;if(md(h,g,y))if(V.asyncDep&&!V.asyncResolved){we(V,g,y);return}else V.next=g,V.update();else g.el=h.el,V.vnode=g},J=(h,g,y,V,q,I,te)=>{const oe=()=>{if(h.isMounted){let{next:ie,bu:fe,u:_e,parent:Ee,vnode:Oe}=h;{const T=Wl(h);if(T){ie&&(ie.el=Oe.el,we(h,ie,te)),T.asyncDep.then(()=>{sn(()=>{h.isUnmounted||z()},q)});return}}let t=ie,_;fo(h,!1),ie?(ie.el=Oe.el,we(h,ie,te)):ie=Oe,fe&&$a(fe),(_=ie.props&&ie.props.onVnodeBeforeUpdate)&&kn(_,Ee,ie,Oe),fo(h,!0);const R=gi(h),O=h.subTree;h.subTree=R,w(O,R,p(O.el),P(O),h,q,I),ie.el=R.el,t===null&&pd(h,R.el),_e&&sn(_e,q),(_=ie.props&&ie.props.onVnodeUpdated)&&sn(()=>kn(_,Ee,ie,Oe),q)}else{let ie;const{el:fe,props:_e}=g,{bm:Ee,m:Oe,parent:t,root:_,type:R}=h,O=Do(g);fo(h,!1),Ee&&$a(Ee),!O&&(ie=_e&&_e.onVnodeBeforeMount)&&kn(ie,t,g),fo(h,!0);{_.ce&&_.ce._hasShadowRoot()&&_.ce._injectChildStyle(R,h.parent?h.parent.type:void 0);const T=h.subTree=gi(h);w(null,T,y,V,h,q,I),g.el=T.el}if(Oe&&sn(Oe,q),!O&&(ie=_e&&_e.onVnodeMounted)){const T=g;sn(()=>kn(ie,t,T),q)}(g.shapeFlag&256||t&&Do(t.vnode)&&t.vnode.shapeFlag&256)&&h.a&&sn(h.a,q),h.isMounted=!0,g=y=V=null}};h.scope.on();const Z=h.effect=new Qs(oe);h.scope.off();const z=h.update=Z.run.bind(Z),ve=h.job=Z.runIfDirty.bind(Z);ve.i=h,ve.id=h.uid,Z.scheduler=()=>zt(ve),fo(h,!0),z()},we=(h,g,y)=>{g.component=h;const V=h.vnode.props;h.vnode=g,h.next=null,hd(h,g.props,V,y),_d(h,g.children,y),Xn(),si(h),Zn()},Re=(h,g,y,V,q,I,te,oe,Z=!1)=>{const z=h&&h.children,ve=h?h.shapeFlag:0,ie=g.children,{patchFlag:fe,shapeFlag:_e}=g;if(fe>0){if(fe&128){Ze(z,ie,y,V,q,I,te,oe,Z);return}else if(fe&256){vn(z,ie,y,V,q,I,te,oe,Z);return}}_e&8?(ve&16&&Ge(z,q,I),ie!==z&&d(y,ie)):ve&16?_e&16?Ze(z,ie,y,V,q,I,te,oe,Z):Ge(z,q,I,!0):(ve&8&&d(y,""),_e&16&&re(ie,y,V,q,I,te,oe,Z))},vn=(h,g,y,V,q,I,te,oe,Z)=>{h=h||Po,g=g||Po;const z=h.length,ve=g.length,ie=Math.min(z,ve);let fe;for(fe=0;fe<ie;fe++){const _e=g[fe]=Z?Wn(g[fe]):Ln(g[fe]);w(h[fe],_e,y,null,q,I,te,oe,Z)}z>ve?Ge(h,q,I,!0,!1,ie):re(g,y,V,q,I,te,oe,Z,ie)},Ze=(h,g,y,V,q,I,te,oe,Z)=>{let z=0;const ve=g.length;let ie=h.length-1,fe=ve-1;for(;z<=ie&&z<=fe;){const _e=h[z],Ee=g[z]=Z?Wn(g[z]):Ln(g[z]);if(yo(_e,Ee))w(_e,Ee,y,null,q,I,te,oe,Z);else break;z++}for(;z<=ie&&z<=fe;){const _e=h[ie],Ee=g[fe]=Z?Wn(g[fe]):Ln(g[fe]);if(yo(_e,Ee))w(_e,Ee,y,null,q,I,te,oe,Z);else break;ie--,fe--}if(z>ie){if(z<=fe){const _e=fe+1,Ee=_e<ve?g[_e].el:V;for(;z<=fe;)w(null,g[z]=Z?Wn(g[z]):Ln(g[z]),y,Ee,q,I,te,oe,Z),z++}}else if(z>fe)for(;z<=ie;)We(h[z],q,I,!0),z++;else{const _e=z,Ee=z,Oe=new Map;for(z=Ee;z<=fe;z++){const A=g[z]=Z?Wn(g[z]):Ln(g[z]);A.key!=null&&Oe.set(A.key,z)}let t,_=0;const R=fe-Ee+1;let O=!1,T=0;const U=new Array(R);for(z=0;z<R;z++)U[z]=0;for(z=_e;z<=ie;z++){const A=h[z];if(_>=R){We(A,q,I,!0);continue}let M;if(A.key!=null)M=Oe.get(A.key);else for(t=Ee;t<=fe;t++)if(U[t-Ee]===0&&yo(A,g[t])){M=t;break}M===void 0?We(A,q,I,!0):(U[M-Ee]=z+1,M>=T?T=M:O=!0,w(A,g[M],y,null,q,I,te,oe,Z),_++)}const m=O?xd(U):Po;for(t=m.length-1,z=R-1;z>=0;z--){const A=Ee+z,M=g[A],D=g[A+1],L=A+1<ve?D.el||Yl(D):V;U[z]===0?w(null,M,y,L,q,I,te,oe,Z):O&&(t<0||z!==m[t]?fn(M,y,L,2):t--)}}},fn=(h,g,y,V,q=null)=>{const{el:I,type:te,transition:oe,children:Z,shapeFlag:z}=h;if(z&6){fn(h.component.subTree,g,y,V);return}if(z&128){h.suspense.move(g,y,V);return}if(z&64){te.move(h,g,y,pe);return}if(te===Se){a(I,g,y);for(let ie=0;ie<Z.length;ie++)fn(Z[ie],g,y,V);a(h.anchor,g,y);return}if(te===za){C(h,g,y);return}if(V!==2&&z&1&&oe)if(V===0)oe.persisted&&!I[An]?a(I,g,y):(oe.beforeEnter(I),a(I,g,y),sn(()=>oe.enter(I),q));else{const{leave:ie,delayLeave:fe,afterLeave:_e}=oe,Ee=()=>{h.ctx.isUnmounted?r(I):a(I,g,y)},Oe=()=>{const t=I._isLeaving||!!I[An];I._isLeaving&&I[An](!0),oe.persisted&&!t?Ee():ie(I,()=>{Ee(),_e&&_e()})};fe?fe(I,Ee,Oe):Oe()}else a(I,g,y)},We=(h,g,y,V=!1,q=!1)=>{const{type:I,props:te,ref:oe,children:Z,dynamicChildren:z,shapeFlag:ve,patchFlag:ie,dirs:fe,cacheIndex:_e,memo:Ee}=h;if(ie===-2&&(q=!1),oe!=null&&(Xn(),la(oe,null,y,h,!0),Zn()),_e!=null&&(g.renderCache[_e]=void 0),ve&256){g.ctx.deactivate(h);return}const Oe=ve&1&&fe,t=!Do(h);let _;if(t&&(_=te&&te.onVnodeBeforeUnmount)&&kn(_,g,h),ve&6)Ke(h.component,y,V);else{if(ve&128){h.suspense.unmount(y,V);return}Oe&&po(h,null,g,"beforeUnmount"),ve&64?h.type.remove(h,g,y,pe,V):z&&!z.hasOnce&&(I!==Se||ie>0&&ie&64)?Ge(z,g,y,!1,!0):(I===Se&&ie&384||!q&&ve&16)&&Ge(Z,g,y),V&&gn(h)}const R=Ee!=null&&_e==null;(t&&(_=te&&te.onVnodeUnmounted)||Oe||R)&&sn(()=>{_&&kn(_,g,h),Oe&&po(h,null,g,"unmounted"),R&&(h.el=null)},y)},gn=h=>{const{type:g,el:y,anchor:V,transition:q}=h;if(g===Se){Sn(y,V);return}if(g===za){E(h);return}const I=()=>{r(y),q&&!q.persisted&&q.afterLeave&&q.afterLeave()};if(h.shapeFlag&1&&q&&!q.persisted){const{leave:te,delayLeave:oe}=q,Z=()=>te(y,I);oe?oe(h.el,I,Z):Z()}else I()},Sn=(h,g)=>{let y;for(;h!==g;)y=f(h),r(h),h=y;r(g)},Ke=(h,g,y)=>{const{bum:V,scope:q,job:I,subTree:te,um:oe,m:Z,a:z}=h;yi(Z),yi(z),V&&$a(V),q.stop(),I&&(I.flags|=8,We(te,h,g,y)),oe&&sn(oe,g),sn(()=>{h.isUnmounted=!0},g)},Ge=(h,g,y,V=!1,q=!1,I=0)=>{for(let te=I;te<h.length;te++)We(h[te],g,y,V,q)},P=h=>{if(h.shapeFlag&6)return P(h.component.subTree);if(h.shapeFlag&128)return h.suspense.next();const g=f(h.anchor||h.el),y=g&&g[Al];return y?f(y):g};let ce=!1;const G=(h,g,y)=>{let V;h==null?g._vnode&&(We(g._vnode,null,null,!0),V=g._vnode.component):w(g._vnode||null,h,g,null,null,null,y),g._vnode=h,ce||(ce=!0,si(V),vl(),ce=!1)},pe={p:w,um:We,m:fn,r:gn,mt:ne,mc:re,pc:Re,pbc:Y,n:P,o:e};return{render:G,hydrate:void 0,createApp:id(G)}}function Er({type:e,props:n},o){return o==="svg"&&e==="foreignObject"||o==="mathml"&&e==="annotation-xml"&&n&&n.encoding&&n.encoding.includes("html")?void 0:o}function fo({effect:e,job:n},o){o?(e.flags|=32,n.flags|=4):(e.flags&=-33,n.flags&=-5)}function Nd(e,n){return(!e||e&&!e.pendingBranch)&&n&&!n.persisted}function Wt(e,n,o=!1){const a=e.children,r=n.children;if(be(a)&&be(r))for(let i=0;i<a.length;i++){const s=a[i];let l=r[i];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=r[i]=Wn(r[i]),l.el=s.el),!o&&l.patchFlag!==-2&&Wt(s,l)),l.type===gr&&(l.patchFlag===-1&&(l=r[i]=Wn(l)),l.el=s.el),l.type===on&&!l.el&&(l.el=s.el)}}function xd(e){const n=e.slice(),o=[0];let a,r,i,s,l;const c=e.length;for(a=0;a<c;a++){const u=e[a];if(u!==0){if(r=o[o.length-1],e[r]<u){n[a]=r,o.push(a);continue}for(i=0,s=o.length-1;i<s;)l=i+s>>1,e[o[l]]<u?i=l+1:s=l;u<e[o[i]]&&(i>0&&(n[a]=o[i-1]),o[i]=a)}}for(i=o.length,s=o[i-1];i-- >0;)o[i]=s,s=n[s];return o}function Wl(e){const n=e.subTree.component;if(n)return n.asyncDep&&!n.asyncResolved?n:Wl(n)}function yi(e){if(e)for(let n=0;n<e.length;n++)e[n].flags|=8}function Yl(e){if(e.placeholder)return e.placeholder;const n=e.component;return n?Yl(n.subTree):null}const Jl=e=>e.__isSuspense;function Bd(e,n){n&&n.pendingBranch?be(e)?n.effects.push(...e):n.effects.push(e):Cu(e)}const Se=Symbol.for("v-fgt"),gr=Symbol.for("v-txt"),on=Symbol.for("v-cmt"),za=Symbol.for("v-stc"),Qn=[];let bn=null;function j(e=!1){Qn.push(bn=e?null:[])}function Yt(){Qn.pop(),bn=Qn[Qn.length-1]||null}let ga=1;function Qa(e,n=!1){ga+=e,e<0&&bn&&n&&(bn.hasOnce=!0)}function Ql(e){return e.dynamicChildren=ga>0?bn||Po:null,Yt(),ga>0&&bn&&bn.push(e),e}function ee(e,n,o,a,r,i){return Ql(b(e,n,o,a,r,i,!0))}function Fe(e,n,o,a,r){return Ql(W(e,n,o,a,r,!0))}function ba(e){return e?e.__v_isVNode===!0:!1}function yo(e,n){return e.type===n.type&&e.key===n.key}const Xl=({key:e})=>e??null,Ha=({ref:e,ref_key:n,ref_for:o})=>(typeof e=="number"&&(e=""+e),e!=null?$e(e)||rn(e)||xe(e)?{i:Xe,r:e,k:n,f:!!o}:e:null);function b(e,n=null,o=null,a=0,r=null,i=e===Se?0:1,s=!1,l=!1){const c={__v_isVNode:!0,__v_skip:!0,type:e,props:n,key:n&&Xl(n),ref:n&&Ha(n),scopeId:bl,slotScopeIds:null,children:o,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:a,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:Xe};return l?(Xa(c,o),i&128&&e.normalize(c)):o&&(c.shapeFlag|=$e(o)?8:16),ga>0&&!s&&bn&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&bn.push(c),c}const W=Td;function Td(e,n=null,o=null,a=0,r=null,i=!1){if((!e||e===Ol)&&(e=on),ba(e)){const l=mo(e,n,!0);return o&&Xa(l,o),ga>0&&!i&&bn&&(l.shapeFlag&6?bn[bn.indexOf(e)]=l:bn.push(l)),l.patchFlag=-2,l}if(Vd(e)&&(e=e.__vccOpts),n){n=En(n);let{class:l,style:c}=n;l&&!$e(l)&&(n.class=un(l)),je(c)&&($t(c)&&!be(c)&&(c=Je({},c)),n.style=Ra(c))}const s=$e(e)?1:Jl(e)?128:pr(e)?64:je(e)?4:xe(e)?2:0;return b(e,n,o,a,r,s,i,!0)}function En(e){return e?$t(e)||$l(e)?Je({},e):e:null}function mo(e,n,o=!1,a=!1){const{props:r,ref:i,patchFlag:s,children:l,transition:c}=e,u=n?xt(r||{},n):r,d={__v_isVNode:!0,__v_skip:!0,type:e.type,props:u,key:u&&Xl(u),ref:n&&n.ref?o&&i?be(i)?i.concat(Ha(n)):[i,Ha(n)]:Ha(n):i,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:l,target:e.target,targetStart:e.targetStart,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:n&&e.type!==Se?s===-1?16:s|16:s,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:c,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&mo(e.ssContent),ssFallback:e.ssFallback&&mo(e.ssFallback),placeholder:e.placeholder,el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return c&&a&&va(d,c.clone(d)),d}function Be(e=" ",n=0){return W(gr,null,e,n)}function Rd(e,n){const o=W(za,null,e);return o.staticCount=n,o}function Ne(e="",n=!1){return n?(j(),Fe(on,null,e)):W(on,null,e)}function Ln(e){return e==null||typeof e=="boolean"?W(on):be(e)?W(Se,null,e.slice()):ba(e)?Wn(e):W(gr,null,String(e))}function Wn(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:mo(e)}function Xa(e,n){let o=0;const{shapeFlag:a}=e;if(n==null)n=null;else if(be(n))o=16;else if(typeof n=="object")if(a&65){const r=n.default;r&&(r._c&&(r._d=!1),Xa(e,r()),r._c&&(r._d=!0));return}else{o=32;const r=n._;!r&&!$l(n)?n._ctx=Xe:r===3&&Xe&&(Xe.slots._===1?n._=1:(n._=2,e.patchFlag|=1024))}else if(xe(n)){if(a&65){Xa(e,{default:n});return}n={default:n,_ctx:Xe},o=32}else n=String(n),a&64?(o=16,n=[Be(n)]):o=8;e.children=n,e.shapeFlag|=o}function xt(...e){const n={};for(let o=0;o<e.length;o++){const a=e[o];for(const r in a)if(r==="class")n.class!==a.class&&(n.class=un([n.class,a.class]));else if(r==="style")n.style=Ra([n.style,a.style]);else if(tr(r)){const i=n[r],s=a[r];s&&i!==s&&!(be(i)&&i.includes(s))?n[r]=i?[].concat(i,s):s:s==null&&i==null&&!ir(r)&&(n[r]=s)}else r!==""&&(n[r]=a[r])}return n}function kn(e,n,o,a=null){Tn(e,n,7,[o,a])}const Sd=Ll();let wd=0;function Ed(e,n,o){const a=e.type,r=(n?n.appContext:e.appContext)||Sd,i={uid:wd++,vnode:e,type:a,parent:n,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new nu(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:n?n.provides:Object.create(r.provides),ids:n?n.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Hl(a,r),emitsOptions:jl(a,r),emit:null,emitted:null,propsDefaults:qe,inheritAttrs:a.inheritAttrs,ctx:qe,data:qe,props:qe,attrs:qe,slots:qe,refs:qe,setupState:qe,setupContext:null,suspense:o,suspenseId:o?o.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=n?n.root:i,i.emit=ld.bind(null,i),e.ce&&e.ce(i),i}let an=null;const Zl=()=>an||Xe;let Za,_a;{const e=ur(),n=(o,a)=>{let r;return(r=e[o])||(r=e[o]=[]),r.push(a),i=>{r.length>1?r.forEach(s=>s(i)):r[0](i)}};Za=n("__VUE_INSTANCE_SETTERS__",o=>an=o),_a=n("__VUE_SSR_SETTERS__",o=>ya=o)}const Ea=e=>{const n=an;return Za(e),e.scope.on(),()=>{e.scope.off(),Za(n)}},Ai=()=>{an&&an.scope.off(),Za(null)};function ec(e){return e.vnode.shapeFlag&4}let ya=!1;function Cd(e,n=!1,o=!1){n&&_a(n);const{props:a,children:r}=e.vnode,i=ec(e);fd(e,a,i,n),bd(e,r,o||n);const s=i?Id(e,n):void 0;return n&&_a(!1),s}function Id(e,n){const o=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,Zu);const{setup:a}=o;if(a){Xn();const r=e.setupContext=a.length>1?Pd(e):null,i=Ea(e),s=wa(a,e,0,[e.props,r]),l=Hs(s);if(Zn(),i(),(l||e.sp)&&!Do(e)&&El(e),l){if(s.then(Ai,Ai),n)return s.then(c=>{_a(!0);try{Ni(e,c,n)}finally{_a(!1)}}).catch(c=>{mr(c,e,0)});e.asyncDep=s}else Ni(e,s)}else nc(e)}function Ni(e,n,o){xe(n)?e.type.__ssrInlineRender?e.ssrRender=n:e.render=n:je(n)&&(e.setupState=pl(n)),nc(e)}function nc(e,n,o){const a=e.type;e.render||(e.render=a.render||Mn);{const r=Ea(e);Xn();try{ed(e)}finally{Zn(),r()}}}const Od={get(e,n){return nn(e,"get",""),e[n]}};function Pd(e){const n=o=>{e.exposed=o||{}};return{attrs:new Proxy(e.attrs,Od),slots:e.slots,emit:e.emit,expose:n}}function br(e){return e.exposed?e.exposeProxy||(e.exposeProxy=new Proxy(pl(yu(e.exposed)),{get(n,o){if(o in n)return n[o];if(o in ca)return ca[o](e)},has(n,o){return o in n||o in ca}})):e.proxy}function kd(e,n=!0){return xe(e)?e.displayName||e.name:e.name||n&&e.__name}function Vd(e){return xe(e)&&"__vccOpts"in e}const Le=(e,n)=>Tu(e,n,ya);function Fo(e,n,o){try{Qa(-1);const a=arguments.length;return a===2?je(n)&&!be(n)?ba(n)?W(e,null,[n]):W(e,n):W(e,null,n):(a>3?o=Array.prototype.slice.call(arguments,2):a===3&&ba(o)&&(o=[o]),W(e,n,o))}finally{Qa(1)}}const Dd="3.5.41";let Bt;const xi=typeof window<"u"&&window.trustedTypes;if(xi)try{Bt=xi.createPolicy("vue",{createHTML:e=>e})}catch{}const oc=Bt?e=>Bt.createHTML(e):e=>e,Ld="http://www.w3.org/2000/svg",jd="http://www.w3.org/1998/Math/MathML",Gn=typeof document<"u"?document:null,Bi=Gn&&Gn.createElement("template"),qd={insert:(e,n,o)=>{n.insertBefore(e,o||null)},remove:e=>{const n=e.parentNode;n&&n.removeChild(e)},createElement:(e,n,o,a)=>{const r=n==="svg"?Gn.createElementNS(Ld,e):n==="mathml"?Gn.createElementNS(jd,e):o?Gn.createElement(e,{is:o}):Gn.createElement(e);return e==="select"&&a&&a.multiple!=null&&r.setAttribute("multiple",a.multiple),r},createText:e=>Gn.createTextNode(e),createComment:e=>Gn.createComment(e),setText:(e,n)=>{e.nodeValue=n},setElementText:(e,n)=>{e.textContent=n},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>Gn.querySelector(e),setScopeId(e,n){e.setAttribute(n,"")},insertStaticContent(e,n,o,a,r,i){const s=o?o.previousSibling:n.lastChild;if(r&&(r===i||r.nextSibling))for(;n.insertBefore(r.cloneNode(!0),o),!(r===i||!(r=r.nextSibling)););else{Bi.innerHTML=oc(a==="svg"?`<svg>${e}</svg>`:a==="mathml"?`<math>${e}</math>`:e);const l=Bi.content;if(a==="svg"||a==="mathml"){const c=l.firstChild;for(;c.firstChild;)l.appendChild(c.firstChild);l.removeChild(c)}n.insertBefore(l,o)}return[s?s.nextSibling:n.firstChild,o?o.previousSibling:n.lastChild]}},oo="transition",Qo="animation",Aa=Symbol("_vtc"),ac={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},Md=Je({},xl,ac),Fd=e=>(e.displayName="Transition",e.props=Md,e),$d=Fd((e,{slots:n})=>Fo(qu,zd(e),n)),ho=(e,n=[])=>{be(e)?e.forEach(o=>o(...n)):e&&e(...n)},Ti=e=>e?be(e)?e.some(n=>n.length>1):e.length>1:!1;function zd(e){const n={};for(const B in e)B in ac||(n[B]=e[B]);if(e.css===!1)return n;const{name:o="v",type:a,duration:r,enterFromClass:i=`${o}-enter-from`,enterActiveClass:s=`${o}-enter-active`,enterToClass:l=`${o}-enter-to`,appearFromClass:c=i,appearActiveClass:u=s,appearToClass:d=l,leaveFromClass:p=`${o}-leave-from`,leaveActiveClass:f=`${o}-leave-active`,leaveToClass:v=`${o}-leave-to`}=e,x=Hd(r),w=x&&x[0],S=x&&x[1],{onBeforeEnter:k,onEnter:N,onEnterCancelled:C,onLeave:E,onLeaveCancelled:se,onBeforeAppear:Q=k,onAppear:$=N,onAppearCancelled:re=C}=n,ae=(B,X,ne,Ce)=>{B._enterCancelled=Ce,vo(B,X?d:l),vo(B,X?u:s),ne&&ne()},Y=(B,X)=>{B._isLeaving=!1,vo(B,p),vo(B,v),vo(B,f),X&&X()},F=B=>(X,ne)=>{const Ce=B?$:N,J=()=>ae(X,B,ne);ho(Ce,[X,J]),Ri(()=>{vo(X,B?c:i),Un(X,B?d:l),Ti(Ce)||Si(X,a,w,J)})};return Je(n,{onBeforeEnter(B){ho(k,[B]),Un(B,i),Un(B,s)},onBeforeAppear(B){ho(Q,[B]),Un(B,c),Un(B,u)},onEnter:F(!1),onAppear:F(!0),onLeave(B,X){B._isLeaving=!0;const ne=()=>Y(B,X);Un(B,p),B._enterCancelled?(Un(B,f),Ci(B)):(Ci(B),Un(B,f)),Ri(()=>{B._isLeaving&&(vo(B,p),Un(B,v),Ti(E)||Si(B,a,S,ne))}),ho(E,[B,ne])},onEnterCancelled(B){ae(B,!1,void 0,!0),ho(C,[B])},onAppearCancelled(B){ae(B,!0,void 0,!0),ho(re,[B])},onLeaveCancelled(B){Y(B),ho(se,[B])}})}function Hd(e){if(e==null)return null;if(je(e))return[Cr(e.enter),Cr(e.leave)];{const n=Cr(e);return[n,n]}}function Cr(e){return Gc(e)}function Un(e,n){n.split(/\s+/).forEach(o=>o&&e.classList.add(o)),(e[Aa]||(e[Aa]=new Set)).add(n)}function vo(e,n){n.split(/\s+/).forEach(a=>a&&e.classList.remove(a));const o=e[Aa];o&&(o.delete(n),o.size||(e[Aa]=void 0))}function Ri(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}let Ud=0;function Si(e,n,o,a){const r=e._endId=++Ud,i=()=>{r===e._endId&&a()};if(o!=null)return setTimeout(i,o);const{type:s,timeout:l,propCount:c}=Kd(e,n);if(!s)return a();const u=s+"end";let d=0;const p=()=>{e.removeEventListener(u,f),i()},f=v=>{v.target===e&&++d>=c&&p()};setTimeout(()=>{d<c&&p()},l+1),e.addEventListener(u,f)}function Kd(e,n){const o=window.getComputedStyle(e),a=x=>(o[x]||"").split(", "),r=a(`${oo}Delay`),i=a(`${oo}Duration`),s=wi(r,i),l=a(`${Qo}Delay`),c=a(`${Qo}Duration`),u=wi(l,c);let d=null,p=0,f=0;n===oo?s>0&&(d=oo,p=s,f=i.length):n===Qo?u>0&&(d=Qo,p=u,f=c.length):(p=Math.max(s,u),d=p>0?s>u?oo:Qo:null,f=d?d===oo?i.length:c.length:0);const v=d===oo&&/\b(?:transform|all)(?:,|$)/.test(a(`${oo}Property`).toString());return{type:d,timeout:p,propCount:f,hasTransform:v}}function wi(e,n){for(;e.length<n.length;)e=e.concat(e);return Math.max(...n.map((o,a)=>Ei(o)+Ei(e[a])))}function Ei(e){return e==="auto"?0:Number(e.slice(0,-1).replace(",","."))*1e3}function Ci(e){return(e?e.ownerDocument:document).body.offsetHeight}function Gd(e,n,o){const a=e[Aa];a&&(n=(n?[n,...a]:[...a]).join(" ")),n==null?e.removeAttribute("class"):o?e.setAttribute("class",n):e.className=n}const er=Symbol("_vod"),rc=Symbol("_vsh"),Ii={name:"show",beforeMount(e,{value:n},{transition:o}){e[er]=e.style.display==="none"?"":e.style.display,o&&n?o.beforeEnter(e):Xo(e,n)},mounted(e,{value:n},{transition:o}){o&&n&&o.enter(e)},updated(e,{value:n,oldValue:o},{transition:a}){!n!=!o&&(a?n?(a.beforeEnter(e),Xo(e,!0),a.enter(e)):a.leave(e,()=>{Xo(e,!1)}):Xo(e,n))},beforeUnmount(e,{value:n}){Xo(e,n)}};function Xo(e,n){e.style.display=n?e[er]:"none",e[rc]=!n}const Wd=Symbol(""),Yd=/(?:^|;)\s*display\s*:/;function Jd(e,n,o){const a=e.style,r=$e(o);let i=!1;if(o&&!r){if(n)if($e(n))for(const s of n.split(";")){const l=s.slice(0,s.indexOf(":")).trim();o[l]==null&&aa(a,l,"")}else for(const s in n)o[s]==null&&aa(a,s,"");for(const s in o){s==="display"&&(i=!0);const l=o[s];l!=null?Xd(e,s,!$e(n)&&n?n[s]:void 0,l)||aa(a,s,l):aa(a,s,"")}}else if(r){if(n!==o){const s=a[Wd];s&&(o+=";"+s),a.cssText=o,i=Yd.test(o)}}else n&&e.removeAttribute("style");er in e&&(e[er]=i?a.display:"",e[rc]&&(a.display="none"))}const Oi=/\s*!important$/;function aa(e,n,o){if(be(o))o.forEach(a=>aa(e,n,a));else if(o==null&&(o=""),n.startsWith("--"))e.setProperty(n,o);else{const a=Qd(e,n);Oi.test(o)?e.setProperty(So(a),o.replace(Oi,""),"important"):e[a]=o}}const Pi=["Webkit","Moz","ms"],Ir={};function Qd(e,n){const o=Ir[n];if(o)return o;let a=mn(n);if(a!=="filter"&&a in e)return Ir[n]=a;a=lr(a);for(let r=0;r<Pi.length;r++){const i=Pi[r]+a;if(i in e)return Ir[n]=i}return n}function Xd(e,n,o,a){return e.tagName==="TEXTAREA"&&(n==="width"||n==="height")&&$e(a)&&o===a}const ki="http://www.w3.org/1999/xlink";function Vi(e,n,o,a,r,i=Zc(n)){a&&n.startsWith("xlink:")?o==null?e.removeAttributeNS(ki,n.slice(6,n.length)):e.setAttributeNS(ki,n,o):o==null||i&&!Ws(o)?e.removeAttribute(n):e.setAttribute(n,i?"":In(o)?String(o):o)}function Di(e,n,o,a,r){if(n==="innerHTML"||n==="textContent"){o!=null&&(e[n]=n==="innerHTML"?oc(o):o);return}const i=e.tagName;if(n==="value"&&i!=="PROGRESS"&&!i.includes("-")){const l=i==="OPTION"?e.getAttribute("value")||"":e.value,c=o==null?e.type==="checkbox"?"on":"":String(o);(l!==c||!("_value"in e))&&(e.value=c),o==null&&e.removeAttribute(n),e._value=o;return}let s=!1;if(o===""||o==null){const l=typeof e[n];l==="boolean"?o=Ws(o):o==null&&l==="string"?(o="",s=!0):l==="number"&&(o=0,s=!0)}try{e[n]=o}catch{}s&&e.removeAttribute(r||n)}function lo(e,n,o,a){e.addEventListener(n,o,a)}function Zd(e,n,o,a){e.removeEventListener(n,o,a)}const Li=Symbol("_vei");function em(e,n,o,a,r=null){const i=e[Li]||(e[Li]={}),s=i[n];if(a&&s)s.value=a;else{const[l,c]=am(n);if(a){const u=i[n]=im(a,r);lo(e,l,u,c)}else s&&(Zd(e,l,s,c),i[n]=void 0)}}const nm=/(Once|Passive|Capture)$/,om=/^on:?(?:Once|Passive|Capture)$/;function am(e){let n,o;for(;(o=e.match(nm))&&!om.test(e);)n||(n={}),e=e.slice(0,e.length-o[1].length),n[o[1].toLowerCase()]=!0;return[e[2]===":"?e.slice(3):So(e.slice(2)),n]}let Or=0;const rm=Promise.resolve(),tm=()=>Or||(rm.then(()=>Or=0),Or=Date.now());function im(e,n){const o=a=>{if(!a._vts)a._vts=Date.now();else if(a._vts<=o.attached)return;const r=o.value;if(be(r)){const i=a.stopImmediatePropagation;a.stopImmediatePropagation=()=>{i.call(a),a._stopped=!0};const s=r.slice(),l=[a];for(let c=0;c<s.length&&!a._stopped;c++){const u=s[c];u&&Tn(u,n,5,l)}}else Tn(r,n,5,[a])};return o.value=e,o.attached=tm(),o}const ji=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,sm=(e,n,o,a,r,i)=>{const s=r==="svg";n==="class"?Gd(e,a,s):n==="style"?Jd(e,o,a):tr(n)?ir(n)||em(e,n,o,a,i):(n[0]==="."?(n=n.slice(1),!0):n[0]==="^"?(n=n.slice(1),!1):lm(e,n,a,s))?(Di(e,n,a),!e.tagName.includes("-")&&(n==="value"||n==="checked"||n==="selected")&&Vi(e,n,a,s,i,n!=="value")):e._isVueCE&&(cm(e,n)||e._def.__asyncLoader&&(/[A-Z]/.test(n)||!$e(a)))?Di(e,mn(n),a,i,n):(n==="true-value"?e._trueValue=a:n==="false-value"&&(e._falseValue=a),Vi(e,n,a,s))};function lm(e,n,o,a){if(a)return!!(n==="innerHTML"||n==="textContent"||n in e&&ji(n)&&xe(o));if(n==="spellcheck"||n==="draggable"||n==="translate"||n==="autocorrect"||n==="sandbox"&&e.tagName==="IFRAME"||n==="form"||n==="list"&&e.tagName==="INPUT"||n==="type"&&e.tagName==="TEXTAREA")return!1;if(n==="width"||n==="height"){const r=e.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return ji(n)&&$e(o)?!1:n in e}function cm(e,n){const o=e._def.props;if(!o)return!1;const a=mn(n);return Array.isArray(o)?o.some(r=>mn(r)===a):Object.keys(o).some(r=>mn(r)===a)}const $o=e=>{const n=e.props["onUpdate:modelValue"]||!1;return be(n)?o=>$a(n,o):n};function um(e){e.target.composing=!0}function qi(e){const n=e.target;n.composing&&(n.composing=!1,n.dispatchEvent(new Event("input")))}const qn=Symbol("_assign"),ja=Symbol("_initialValue");function Pr(e,n,o){return n&&(e=e.trim()),o&&(e=cr(e)),e}const Na={created(e,{modifiers:{lazy:n,trim:o,number:a}},r){e.parentNode&&(e.type==="text"?e[ja]=e.defaultValue.replace(/[\r\n]/g,""):e.type==="textarea"&&(e[ja]=e.defaultValue.replace(/\r\n?/g,`
`))),e[qn]=$o(r);const i=a||r.props&&r.props.type==="number";lo(e,n?"change":"input",s=>{s.target.composing||e[qn](Pr(e.value,o,i))}),(o||i)&&lo(e,"change",()=>{e.value=Pr(e.value,o,i)}),n||(lo(e,"compositionstart",um),lo(e,"compositionend",qi),lo(e,"change",qi))},mounted(e,{value:n,modifiers:{trim:o,number:a}}){const r=n??"",i=e[ja];delete e[ja],i!==void 0&&(e.type==="text"||e.type==="textarea")&&e.value!==i?e[qn](Pr(e.value,o,a)):e.value=r},beforeUpdate(e,{value:n,oldValue:o,modifiers:{lazy:a,trim:r,number:i}},s){if(e[qn]=$o(s),e.composing)return;const l=(i||e.type==="number")&&!/^0\d/.test(e.value)?cr(e.value):e.value,c=n??"";if(l===c)return;const u=e.getRootNode();(u instanceof Document||u instanceof ShadowRoot)&&u.activeElement===e&&e.type!=="range"&&(a&&n===o||r&&e.value.trim()===c)||(e.value=c)}},dm={deep:!0,created(e,n,o){e[qn]=$o(o),lo(e,"change",()=>{const a=e._modelValue,r=xa(e),i=e.checked,s=e[qn];if(be(a)){const l=Vt(a,r),c=l!==-1;if(i&&!c)s(a.concat(r));else if(!i&&c){const u=[...a];u.splice(l,1),s(u)}}else if(Uo(a)){const l=new Set(a);i?l.add(r):l.delete(r),s(l)}else s(tc(e,i))})},mounted:Mi,beforeUpdate(e,n,o){e[qn]=$o(o),Mi(e,n,o)}};function Mi(e,{value:n,oldValue:o},a){e._modelValue=n;let r;if(be(n))r=Vt(n,a.props.value)>-1;else if(Uo(n))r=n.has(a.props.value);else{if(n===o)return;r=Ko(n,tc(e,!0))}e.checked!==r&&(e.checked=r)}const kr={deep:!0,created(e,{value:n,modifiers:{number:o}},a){e._modelValue=n,lo(e,"change",()=>{const r=Array.prototype.filter.call(e.options,i=>i.selected).map(i=>o?cr(xa(i)):xa(i));e[qn](e.multiple?Uo(e._modelValue)?new Set(r):r:r[0]),e._assigning=!0,Mo(()=>{e._assigning=!1})}),e[qn]=$o(a)},mounted(e,{value:n}){Fi(e,n)},beforeUpdate(e,{value:n},o){e._modelValue=n,e[qn]=$o(o)},updated(e,{value:n}){e._assigning||Fi(e,n)}};function Fi(e,n){const o=e.multiple,a=be(n);if(!(o&&!a&&!Uo(n))){for(let r=0,i=e.options.length;r<i;r++){const s=e.options[r],l=xa(s);if(o)if(a){const c=typeof l;c==="string"||c==="number"?s.selected=n.some(u=>String(u)===String(l)):s.selected=Vt(n,l)>-1}else s.selected=n.has(l);else if(Ko(xa(s),n)){e.selectedIndex!==r&&(e.selectedIndex=r);return}}!o&&e.selectedIndex!==-1&&(e.selectedIndex=-1)}}function xa(e){return"_value"in e?e._value:e.value}function tc(e,n){const o=n?"_trueValue":"_falseValue";return o in e?e[o]:n}const mm=["ctrl","shift","alt","meta"],pm={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&e.button!==0,middle:e=>"button"in e&&e.button!==1,right:e=>"button"in e&&e.button!==2,exact:(e,n)=>mm.some(o=>e[`${o}Key`]&&!n.includes(o))},co=(e,n)=>{if(!e)return e;const o=e._withMods||(e._withMods={}),a=n.join(".");return o[a]||(o[a]=((r,...i)=>{for(let s=0;s<n.length;s++){const l=pm[n[s]];if(l&&l(r,n))return}return e(r,...i)}))},fm=Je({patchProp:sm},qd);let $i;function hm(){return $i||($i=yd(fm))}const vm=((...e)=>{const n=hm().createApp(...e),{mount:o}=n;return n.mount=a=>{const r=bm(a);if(!r)return;const i=n._component;!xe(i)&&!i.render&&!i.template&&(i.template=r.innerHTML),r.nodeType===1&&(r.textContent="");const s=o(r,!1,gm(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),s},n});function gm(e){if(e instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&e instanceof MathMLElement)return"mathml"}function bm(e){return $e(e)?document.querySelector(e):e}const _m="modulepreload",ym=function(e){return"/Extensao-26.2/"+e},zi={},Am=function(n,o,a){let r=Promise.resolve();if(o&&o.length>0){let u=function(d){return Promise.all(d.map(p=>Promise.resolve(p).then(f=>({status:"fulfilled",value:f}),f=>({status:"rejected",reason:f}))))};var s=u;document.getElementsByTagName("link");const l=document.querySelector("meta[property=csp-nonce]"),c=l?.nonce||l?.getAttribute("nonce");r=u(o.map(d=>{if(d=ym(d),d in zi)return;zi[d]=!0;const p=d.endsWith(".css"),f=p?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${d}"]${f}`))return;const v=document.createElement("link");if(v.rel=p?"stylesheet":_m,p||(v.as="script"),v.crossOrigin="",v.href=d,c&&v.setAttribute("nonce",c),document.head.appendChild(v),p)return new Promise((x,w)=>{v.addEventListener("load",x),v.addEventListener("error",()=>w(new Error(`Unable to preload CSS for ${d}`)))})}))}function i(l){const c=new Event("vite:preloadError",{cancelable:!0});if(c.payload=l,window.dispatchEvent(c),!c.defaultPrevented)throw l}return r.then(l=>{for(const c of l||[])c.status==="rejected"&&i(c.reason);return n().catch(i)})};function Nm(e={}){const{immediate:n=!1,onNeedReload:o,onNeedRefresh:a,onOfflineReady:r,onRegistered:i,onRegisteredSW:s,onRegisterError:l}=e;let c,u;const d=async(f=!0)=>{await u};async function p(){if("serviceWorker"in navigator){if(c=await Am(async()=>{const{Workbox:f}=await import("./workbox-window.prod.es5-BBnX5xw4.js");return{Workbox:f}},[]).then(({Workbox:f})=>new f("/Extensao-26.2/sw.js",{scope:"/Extensao-26.2/",type:"classic"})).catch(f=>{l?.(f)}),!c)return;c.addEventListener("activated",f=>{(f.isUpdate||f.isExternal)&&(o?o():window.location.reload())}),c.addEventListener("installed",f=>{f.isUpdate||r?.()}),c.register({immediate:n}).then(f=>{s?s("/Extensao-26.2/sw.js",f):i?.(f)}).catch(f=>{l?.(f)})}}return u=p(),d}const xm="acessibilidade-checker",Bm=2,ln=Object.freeze({projects:"projects",environments:"environments",elements:"elements",evaluations:"evaluations",ruleSets:"ruleSets"});function Io(e){return new Promise((n,o)=>{e.onsuccess=()=>n(e.result),e.onerror=()=>o(e.error??new Error("Falha no IndexedDB."))})}function Tm(e=globalThis.indexedDB){if(!e)return Promise.reject(new Error("IndexedDB não está disponível neste ambiente."));const n=e.open(xm,Bm);return n.onupgradeneeded=()=>{const o=n.result;if(o.objectStoreNames.contains(ln.projects)||o.createObjectStore(ln.projects,{keyPath:"id"}),o.objectStoreNames.contains(ln.environments)||o.createObjectStore(ln.environments,{keyPath:"id"}).createIndex("projectId","projectId",{unique:!1}),o.objectStoreNames.contains(ln.elements)||o.createObjectStore(ln.elements,{keyPath:"id"}).createIndex("environmentId","environmentId",{unique:!1}),!o.objectStoreNames.contains(ln.evaluations)){const a=o.createObjectStore(ln.evaluations,{keyPath:"id"});a.createIndex("elementId","elementId",{unique:!1}),a.createIndex("evaluatedAt","evaluatedAt",{unique:!1})}o.objectStoreNames.contains(ln.ruleSets)||o.createObjectStore(ln.ruleSets,{keyPath:"id"})},Io(n)}async function Zo(e,n,o,a){const r=e.transaction(n,o),i=r.objectStore(n),s=await a(i);return await new Promise((l,c)=>{r.oncomplete=l,r.onabort=r.onerror=()=>c(r.error??new Error("Transação IndexedDB não concluída."))}),s}class Ca{constructor(n,o){this.database=n,this.storeName=o}get(n){return Zo(this.database,this.storeName,"readonly",o=>Io(o.get(n)))}getAll(){return Zo(this.database,this.storeName,"readonly",n=>Io(n.getAll()))}getAllBy(n,o){return Zo(this.database,this.storeName,"readonly",a=>Io(a.index(n).getAll(o)))}put(n){return Zo(this.database,this.storeName,"readwrite",async o=>(await Io(o.put(n)),n))}delete(n){return Zo(this.database,this.storeName,"readwrite",o=>Io(o.delete(n)))}}class Rm extends Ca{constructor(n){super(n,ln.elements)}getByEnvironmentId(n){return this.getAllBy("environmentId",n)}}class Sm extends Ca{constructor(n){super(n,ln.environments)}getByProjectId(n){return this.getAllBy("projectId",n)}}class wm extends Ca{constructor(n){super(n,ln.evaluations)}getByElementId(n){return this.getAllBy("elementId",n)}}class Em extends Ca{constructor(n){super(n,ln.projects)}}class Cm extends Ca{constructor(n){super(n,ln.ruleSets)}}const Im=new Set([">=","<=",">","<","==","!="]);function ua(e,n,o){switch(n){case">=":return e>=o;case"<=":return e<=o;case">":return e>o;case"<":return e<o;case"==":return e===o;case"!=":return e!==o;default:throw new Error(`Operador não suportado: ${n}`)}}function Om(e,n){return n.obrigatorio&&(e==null||e==="")?{valid:!1,reason:"Campo obrigatório não preenchido."}:e==null||e===""?{valid:!0}:n.tipo==="number"&&typeof e!="number"?{valid:!1,reason:"O valor deve ser numérico."}:n.tipo==="boolean"&&typeof e!="boolean"?{valid:!1,reason:"O valor deve ser booleano."}:{valid:!0}}class Pm{evaluate(n,o,a={}){return n.map(r=>this.evaluateRule(r,o,a))}evaluateRule(n,o,a){const r=a[n.parametro],i=o[n.parametro];if(!r)return{id:n.id,status:"erro",mensagem:`Parâmetro não definido: ${n.parametro}`};const s=Om(i,r);if(!s.valid)return{id:n.id,nome:n.nome,status:"invalido",mensagem:s.reason,referencia:n.referencia};if(i==null||i==="")return{id:n.id,nome:n.nome,status:"nao_avaliado",referencia:n.referencia};if(n.tipo==="checklist")return r.tipo==="boolean"?{id:n.id,nome:n.nome,status:i?"conforme":"nao_conforme",valorInformado:i,valorEsperado:!0,operador:"==",parametro:n.parametro,unidade:r.unidade,referencia:n.referencia}:{id:n.id,nome:n.nome,status:"manual",valor:i,referencia:n.referencia};if(n.tipo==="conditional")return this.evaluateConditional(n,o,a);const l=ua(i,n.operador,n.valor);return{id:n.id,nome:n.nome,status:l?"conforme":"nao_conforme",valorInformado:i,valorEsperado:n.valor,operador:n.operador,parametro:n.parametro,unidade:r.unidade,referencia:n.referencia}}evaluateConditional(n,o,a){for(const r of n.condicoes??[]){const i=o[n.parametro];if(r.quando&&ua(i,r.quando.operador,r.quando.valor)){if(r.resultado)return{id:n.id,nome:n.nome,status:r.resultado,valorInformado:i,referencia:n.referencia,mensagem:r.mensagem};if(r.verificar){const s=o[r.verificar.parametro],l=ua(s,r.verificar.operador,r.verificar.valor);return{id:n.id,nome:n.nome,status:l?"conforme":"nao_conforme",valorInformado:s,valorEsperado:r.verificar.valor,operador:r.verificar.operador,parametro:r.verificar.parametro,unidade:a[r.verificar.parametro]?.unidade,parametroCondicional:n.parametro,valorCondicional:i,operadorCondicional:r.quando.operador,limiteCondicional:r.quando.valor,mensagem:r.mensagem,referencia:n.referencia}}}}return{id:n.id,nome:n.nome,status:"nao_avaliado",referencia:n.referencia}}}function xn(e,n){if(typeof e!="string"||e.trim()==="")throw new TypeError(`${n} deve ser um texto não vazio.`);return e.trim()}function Ia(){return typeof globalThis.crypto?.randomUUID=="function"?globalThis.crypto.randomUUID():`${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`}function Fn(e=new Date,n="data"){const o=e instanceof Date?e:new Date(e);if(Number.isNaN(o.getTime()))throw new TypeError(`${n} deve ser uma data válida.`);return o.toISOString()}function Tt(e){return typeof structuredClone=="function"?structuredClone(e):JSON.parse(JSON.stringify(e))}function Vr({id:e=Ia(),elementId:n,data:o,result:a,evaluatedAt:r=new Date}={}){if(o===void 0||a===void 0)throw new TypeError("data e result são obrigatórios.");return{id:xn(e,"id"),elementId:xn(n,"elementId"),data:Tt(o),result:Tt(a),evaluatedAt:Fn(r,"evaluatedAt")}}const km=["nao_conforme","erro","invalido"],Vm=["atencao","manual","nao_avaliado"];function ic(e){const n=e[0]?.result;return n?.length?n.some(o=>km.includes(o.status))?"nao_conforme":n.some(o=>Vm.includes(o.status))?"nao_avaliado":"conforme":"nao_avaliado"}class Dm{constructor({elementRepository:n,environmentRepository:o,evaluationRepository:a,ruleEngine:r=new Pm}){this.elementRepository=n,this.environmentRepository=o,this.evaluationRepository=a,this.ruleEngine=r}async evaluateElement({elementId:n,checklist:o,data:a,evaluatedAt:r}){if(!await this.elementRepository.get(n))throw new Error("Elemento não encontrado.");const s=this.ruleEngine.evaluate(o.regras??[],a,o.parametros??{}),l=Vr({elementId:n,data:a,result:s,evaluatedAt:r});return this.evaluationRepository.put(l)}async saveElementData({elementId:n,data:o,savedAt:a}){if(!await this.elementRepository.get(n))throw new Error("Elemento não encontrado.");const i=Vr({elementId:n,data:o,result:[],evaluatedAt:a});return this.evaluationRepository.put(i)}evaluateTransientElement({elementId:n,checklist:o,data:a,evaluatedAt:r}){const i=this.ruleEngine.evaluate(o.regras??[],a,o.parametros??{});return Vr({elementId:n,data:a,result:i,evaluatedAt:r})}async listEvaluations(n){return(await this.evaluationRepository.getByElementId(n)).sort((a,r)=>r.evaluatedAt.localeCompare(a.evaluatedAt))}async getEnvironmentSummary(n){const o=await this.elementRepository.getByEnvironmentId(n);return this.#e(o)}async getProjectSummary(n){if(!this.environmentRepository)throw new Error("Repositório de ambientes não configurado.");const o=await this.environmentRepository.getByProjectId(n),a=await Promise.all(o.map(r=>this.elementRepository.getByEnvironmentId(r.id)));return this.#e(a.flat())}async#e(n){const o=await Promise.all(n.map(async r=>ic(await this.listEvaluations(r.id)))),a={totalElements:n.length,conforme:0,nao_conforme:0,nao_avaliado:0,pendente:0,score:0,overallStatus:"nao_avaliado"};for(const r of o)a[r]+=1;return a.pendente=a.nao_avaliado,a.score=a.totalElements?Math.round(a.conforme/a.totalElements*100):0,a.nao_conforme>0?a.overallStatus="nao_conforme":a.nao_avaliado===0&&a.totalElements>0&&(a.overallStatus="conforme"),a}}function Hi({id:e=Ia(),environmentId:n,name:o,type:a,rule:r,createdAt:i=new Date,updatedAt:s=i}={}){return{id:xn(e,"id"),environmentId:xn(n,"environmentId"),name:xn(o,"name"),type:xn(a,"type"),rule:xn(r,"rule"),createdAt:Fn(i,"createdAt"),updatedAt:Fn(s,"updatedAt")}}function Ui({id:e=Ia(),projectId:n,name:o,createdAt:a=new Date,updatedAt:r=a}={}){return{id:xn(e,"id"),projectId:xn(n,"projectId"),name:xn(o,"name"),createdAt:Fn(a,"createdAt"),updatedAt:Fn(r,"updatedAt")}}function Ki({id:e=Ia(),name:n,description:o="",createdAt:a=new Date,updatedAt:r=a}={}){return{id:xn(e,"id"),name:xn(n,"name"),description:typeof o=="string"?o.trim():"",createdAt:Fn(a,"createdAt"),updatedAt:Fn(r,"updatedAt")}}class Lm{constructor({projectRepository:n,environmentRepository:o,elementRepository:a}){this.projectRepository=n,this.environmentRepository=o,this.elementRepository=a}async createProject(n){const o=Ki(n);return this.projectRepository.put(o)}listProjects(){return this.projectRepository.getAll()}getProject(n){return this.projectRepository.get(n)}async updateProject(n,{name:o,description:a}){const r=await this.#e(this.projectRepository.get(n),"Projeto");return this.projectRepository.put(Ki({...r,name:o,description:a,updatedAt:new Date}))}async renameProject(n,o){const a=await this.#e(this.projectRepository.get(n),"Projeto");return this.updateProject(n,{name:o,description:a.description})}async createEnvironment(n,o){await this.#e(this.projectRepository.get(n),"Projeto");const a=Ui({...o,projectId:n});return this.environmentRepository.put(a)}listEnvironments(n){return this.environmentRepository.getByProjectId(n)}async renameEnvironment(n,o){const a=await this.#e(this.environmentRepository.get(n),"Ambiente");return this.environmentRepository.put(Ui({...a,name:o,updatedAt:new Date}))}async createElement(n,o){await this.#e(this.environmentRepository.get(n),"Ambiente");const a=Hi({...o,environmentId:n});return this.elementRepository.put(a)}listElements(n){return this.elementRepository.getByEnvironmentId(n)}async updateElement(n,o){const a=await this.#e(this.elementRepository.get(n),"Elemento");return this.elementRepository.put(Hi({...a,...o,id:a.id,environmentId:a.environmentId,createdAt:a.createdAt,updatedAt:Fn(new Date)}))}async#e(n,o){const a=await n;if(!a)throw new Error(`${o} não encontrado.`);return a}}class jm{constructor({evaluationService:n}){this.evaluationService=n,this.current=null}evaluate({name:n,checklist:o,data:a}){const r={id:Ia(),name:n?.trim()||o.nome,type:o.nome,rule:o.id},i=this.evaluationService.evaluateTransientElement({elementId:r.id,checklist:o,data:a});return this.current={element:r,evaluation:i},this.current}getCurrent(){return this.current}clear(){this.current=null}}const qm=new Set(["checklist","conditional"]);function jo(e){return e!==null&&typeof e=="object"&&!Array.isArray(e)}function da(e,n,o){(typeof e!="string"||e.trim()==="")&&o.push(`${n} deve ser um texto não vazio.`)}function sc(e,n,o){Im.has(e)||o.push(`${n} deve ser um operador suportado.`)}function Gi(e,n,o){if(!jo(e)){o.push(`${n} deve ser um objeto.`);return}sc(e.operador,`${n}.operador`,o),"valor"in e||o.push(`${n}.valor é obrigatório.`)}function Mm(e,n,o,a){const r=`regras[${n}]`;if(!jo(e)){a.push(`${r} deve ser um objeto.`);return}if(da(e.id,`${r}.id`,a),da(e.nome,`${r}.nome`,a),da(e.parametro,`${r}.parametro`,a),typeof e.parametro=="string"&&!(e.parametro in o)&&a.push(`${r}.parametro deve existir em parametros.`),e.tipo!=="checklist"){if(e.tipo==="conditional"){if(!Array.isArray(e.condicoes)||e.condicoes.length===0){a.push(`${r}.condicoes deve conter ao menos uma condição.`);return}e.condicoes.forEach((i,s)=>{const l=`${r}.condicoes[${s}]`;if(!jo(i)){a.push(`${l} deve ser um objeto.`);return}Gi(i.quando,`${l}.quando`,a);const c=typeof i.resultado=="string"&&i.resultado!=="",u="verificar"in i;c===u&&a.push(`${l} deve informar exatamente resultado ou verificar.`),u&&(Gi(i.verificar,`${l}.verificar`,a),(typeof i.verificar?.parametro!="string"||!(i.verificar.parametro in o))&&a.push(`${l}.verificar.parametro deve existir em parametros.`))});return}e.tipo!==void 0&&!qm.has(e.tipo)&&a.push(`${r}.tipo não é suportado.`),sc(e.operador,`${r}.operador`,a),"valor"in e||a.push(`${r}.valor é obrigatório.`)}}function Fm(e){const n=[];return jo(e)?(da(e.id,"id",n),da(e.nome,"nome",n),jo(e.parametros)||n.push("parametros deve ser um objeto."),Array.isArray(e.regras)||n.push("regras deve ser uma lista."),jo(e.parametros)&&Array.isArray(e.regras)&&e.regras.forEach((o,a)=>Mm(o,a,e.parametros,n)),{valid:n.length===0,errors:n}):{valid:!1,errors:["O conjunto de regras deve ser um objeto."]}}function Rt(e){const n=Fm(e);if(!n.valid)throw new TypeError(`Conjunto de regras inválido: ${n.errors.join(" ")}`);return e}function $m(e,{createdAt:n=new Date,updatedAt:o=n}={}){return Rt(e),{...Tt(e),source:"user",createdAt:Fn(n,"createdAt"),updatedAt:Fn(o,"updatedAt")}}function zm(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var en={},qa={},ao={},Wi;function Oa(){if(Wi)return ao;Wi=1;function e(s){return typeof s>"u"||s===null}function n(s){return typeof s=="object"&&s!==null}function o(s){return Array.isArray(s)?s:e(s)?[]:[s]}function a(s,l){if(l){const c=Object.keys(l);for(let u=0,d=c.length;u<d;u+=1){const p=c[u];s[p]=l[p]}}return s}function r(s,l){let c="";for(let u=0;u<l;u+=1)c+=s;return c}function i(s){return s===0&&Number.NEGATIVE_INFINITY===1/s}return ao.isNothing=e,ao.isObject=n,ao.toArray=o,ao.repeat=r,ao.isNegativeZero=i,ao.extend=a,ao}var Dr,Yi;function Pa(){if(Yi)return Dr;Yi=1;function e(o,a){let r="";const i=o.reason||"(unknown reason)";return o.mark?(o.mark.name&&(r+='in "'+o.mark.name+'" '),r+="("+(o.mark.line+1)+":"+(o.mark.column+1)+")",!a&&o.mark.snippet&&(r+=`

`+o.mark.snippet),i+" "+r):i}function n(o,a){Error.call(this),this.name="YAMLException",this.reason=o,this.mark=a,this.message=e(this,!1),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack||""}return n.prototype=Object.create(Error.prototype),n.prototype.constructor=n,n.prototype.toString=function(a){return this.name+": "+e(this,a)},Dr=n,Dr}var Lr,Ji;function Hm(){if(Ji)return Lr;Ji=1;const e=Oa();function n(r,i,s,l,c){let u="",d="";const p=Math.floor(c/2)-1;return l-i>p&&(u=" ... ",i=l-p+u.length),s-l>p&&(d=" ...",s=l+p-d.length),{str:u+r.slice(i,s).replace(/\t/g,"→")+d,pos:l-i+u.length}}function o(r,i){return e.repeat(" ",i-r.length)+r}function a(r,i){if(i=Object.create(i||null),!r.buffer)return null;i.maxLength||(i.maxLength=79),typeof i.indent!="number"&&(i.indent=1),typeof i.linesBefore!="number"&&(i.linesBefore=3),typeof i.linesAfter!="number"&&(i.linesAfter=2);const s=/\r?\n|\r|\0/g,l=[0],c=[];let u,d=-1;for(;u=s.exec(r.buffer);)c.push(u.index),l.push(u.index+u[0].length),r.position<=u.index&&d<0&&(d=l.length-2);d<0&&(d=l.length-1);let p="";const f=Math.min(r.line+i.linesAfter,c.length).toString().length,v=i.maxLength-(i.indent+f+3);for(let w=1;w<=i.linesBefore&&!(d-w<0);w++){const S=n(r.buffer,l[d-w],c[d-w],r.position-(l[d]-l[d-w]),v);p=e.repeat(" ",i.indent)+o((r.line-w+1).toString(),f)+" | "+S.str+`
`+p}const x=n(r.buffer,l[d],c[d],r.position,v);p+=e.repeat(" ",i.indent)+o((r.line+1).toString(),f)+" | "+x.str+`
`,p+=e.repeat("-",i.indent+f+3+x.pos)+`^
`;for(let w=1;w<=i.linesAfter&&!(d+w>=c.length);w++){const S=n(r.buffer,l[d+w],c[d+w],r.position-(l[d]-l[d+w]),v);p+=e.repeat(" ",i.indent)+o((r.line+w+1).toString(),f)+" | "+S.str+`
`}return p.replace(/\n$/,"")}return Lr=a,Lr}var jr,Qi;function pn(){if(Qi)return jr;Qi=1;const e=Pa(),n=["kind","multi","resolve","construct","instanceOf","predicate","represent","representName","defaultStyle","styleAliases"],o=["scalar","sequence","mapping"];function a(i){const s={};return i!==null&&Object.keys(i).forEach(function(l){i[l].forEach(function(c){s[String(c)]=l})}),s}function r(i,s){if(s=s||{},Object.keys(s).forEach(function(l){if(n.indexOf(l)===-1)throw new e('Unknown option "'+l+'" is met in definition of "'+i+'" YAML type.')}),this.options=s,this.tag=i,this.kind=s.kind||null,this.resolve=s.resolve||function(){return!0},this.construct=s.construct||function(l){return l},this.instanceOf=s.instanceOf||null,this.predicate=s.predicate||null,this.represent=s.represent||null,this.representName=s.representName||null,this.defaultStyle=s.defaultStyle||null,this.multi=s.multi||!1,this.styleAliases=a(s.styleAliases||null),o.indexOf(this.kind)===-1)throw new e('Unknown kind "'+this.kind+'" is specified for "'+i+'" YAML type.')}return jr=r,jr}var qr,Xi;function lc(){if(Xi)return qr;Xi=1;const e=Pa(),n=pn();function o(i,s){const l=[];return i[s].forEach(function(c){let u=l.length;l.forEach(function(d,p){d.tag===c.tag&&d.kind===c.kind&&d.multi===c.multi&&(u=p)}),l[u]=c}),l}function a(){const i={scalar:{},sequence:{},mapping:{},fallback:{},multi:{scalar:[],sequence:[],mapping:[],fallback:[]}};function s(l){l.multi?(i.multi[l.kind].push(l),i.multi.fallback.push(l)):i[l.kind][l.tag]=i.fallback[l.tag]=l}for(let l=0,c=arguments.length;l<c;l+=1)arguments[l].forEach(s);return i}function r(i){return this.extend(i)}return r.prototype.extend=function(s){let l=[],c=[];if(s instanceof n)c.push(s);else if(Array.isArray(s))c=c.concat(s);else if(s&&(Array.isArray(s.implicit)||Array.isArray(s.explicit)))s.implicit&&(l=l.concat(s.implicit)),s.explicit&&(c=c.concat(s.explicit));else throw new e("Schema.extend argument should be a Type, [ Type ], or a schema definition ({ implicit: [...], explicit: [...] })");l.forEach(function(d){if(!(d instanceof n))throw new e("Specified list of YAML types (or a single Type object) contains a non-Type object.");if(d.loadKind&&d.loadKind!=="scalar")throw new e("There is a non-scalar type in the implicit list of a schema. Implicit resolving of such types is not supported.");if(d.multi)throw new e("There is a multi type in the implicit list of a schema. Multi tags can only be listed as explicit.")}),c.forEach(function(d){if(!(d instanceof n))throw new e("Specified list of YAML types (or a single Type object) contains a non-Type object.")});const u=Object.create(r.prototype);return u.implicit=(this.implicit||[]).concat(l),u.explicit=(this.explicit||[]).concat(c),u.compiledImplicit=o(u,"implicit"),u.compiledExplicit=o(u,"explicit"),u.compiledTypeMap=a(u.compiledImplicit,u.compiledExplicit),u},qr=r,qr}var Mr,Zi;function cc(){if(Zi)return Mr;Zi=1;const e=pn();return Mr=new e("tag:yaml.org,2002:str",{kind:"scalar",construct:function(n){return n!==null?n:""}}),Mr}var Fr,es;function uc(){if(es)return Fr;es=1;const e=pn();return Fr=new e("tag:yaml.org,2002:seq",{kind:"sequence",construct:function(n){return n!==null?n:[]}}),Fr}var $r,ns;function dc(){if(ns)return $r;ns=1;const e=pn();return $r=new e("tag:yaml.org,2002:map",{kind:"mapping",construct:function(n){return n!==null?n:{}}}),$r}var zr,os;function mc(){if(os)return zr;os=1;const e=lc();return zr=new e({explicit:[cc(),uc(),dc()]}),zr}var Hr,as;function pc(){if(as)return Hr;as=1;const e=pn();function n(r){if(r===null)return!0;const i=r.length;return i===1&&r==="~"||i===4&&(r==="null"||r==="Null"||r==="NULL")}function o(){return null}function a(r){return r===null}return Hr=new e("tag:yaml.org,2002:null",{kind:"scalar",resolve:n,construct:o,predicate:a,represent:{canonical:function(){return"~"},lowercase:function(){return"null"},uppercase:function(){return"NULL"},camelcase:function(){return"Null"},empty:function(){return""}},defaultStyle:"lowercase"}),Hr}var Ur,rs;function fc(){if(rs)return Ur;rs=1;const e=pn();function n(r){if(r===null)return!1;const i=r.length;return i===4&&(r==="true"||r==="True"||r==="TRUE")||i===5&&(r==="false"||r==="False"||r==="FALSE")}function o(r){return r==="true"||r==="True"||r==="TRUE"}function a(r){return Object.prototype.toString.call(r)==="[object Boolean]"}return Ur=new e("tag:yaml.org,2002:bool",{kind:"scalar",resolve:n,construct:o,predicate:a,represent:{lowercase:function(r){return r?"true":"false"},uppercase:function(r){return r?"TRUE":"FALSE"},camelcase:function(r){return r?"True":"False"}},defaultStyle:"lowercase"}),Ur}var Kr,ts;function hc(){if(ts)return Kr;ts=1;const e=Oa(),n=pn();function o(u){return u>=48&&u<=57||u>=65&&u<=70||u>=97&&u<=102}function a(u){return u>=48&&u<=55}function r(u){return u>=48&&u<=57}function i(u){if(u===null)return!1;const d=u.length;let p=0,f=!1;if(!d)return!1;let v=u[p];if((v==="-"||v==="+")&&(v=u[++p]),v==="0"){if(p+1===d)return!0;if(v=u[++p],v==="b"){for(p++;p<d;p++){if(v=u[p],v!=="0"&&v!=="1")return!1;f=!0}return f&&isFinite(s(u))}if(v==="x"){for(p++;p<d;p++){if(!o(u.charCodeAt(p)))return!1;f=!0}return f&&isFinite(s(u))}if(v==="o"){for(p++;p<d;p++){if(!a(u.charCodeAt(p)))return!1;f=!0}return f&&isFinite(s(u))}}for(;p<d;p++){if(!r(u.charCodeAt(p)))return!1;f=!0}return f?isFinite(s(u)):!1}function s(u){let d=u,p=1,f=d[0];if((f==="-"||f==="+")&&(f==="-"&&(p=-1),d=d.slice(1),f=d[0]),d==="0")return 0;if(f==="0"){if(d[1]==="b")return p*parseInt(d.slice(2),2);if(d[1]==="x")return p*parseInt(d.slice(2),16);if(d[1]==="o")return p*parseInt(d.slice(2),8)}return p*parseInt(d,10)}function l(u){return s(u)}function c(u){return Object.prototype.toString.call(u)==="[object Number]"&&u%1===0&&!e.isNegativeZero(u)}return Kr=new n("tag:yaml.org,2002:int",{kind:"scalar",resolve:i,construct:l,predicate:c,represent:{binary:function(u){return u>=0?"0b"+u.toString(2):"-0b"+u.toString(2).slice(1)},octal:function(u){return u>=0?"0o"+u.toString(8):"-0o"+u.toString(8).slice(1)},decimal:function(u){return u.toString(10)},hexadecimal:function(u){return u>=0?"0x"+u.toString(16).toUpperCase():"-0x"+u.toString(16).toUpperCase().slice(1)}},defaultStyle:"decimal",styleAliases:{binary:[2,"bin"],octal:[8,"oct"],decimal:[10,"dec"],hexadecimal:[16,"hex"]}}),Kr}var Gr,is;function vc(){if(is)return Gr;is=1;const e=Oa(),n=pn(),o=new RegExp("^(?:[-+]?(?:[0-9]+)(?:\\.[0-9]*)?(?:[eE][-+]?[0-9]+)?|\\.[0-9]+(?:[eE][-+]?[0-9]+)?|[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$"),a=new RegExp("^(?:[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$");function r(u){return u===null||!o.test(u)?!1:isFinite(parseFloat(u,10))?!0:a.test(u)}function i(u){let d=u.toLowerCase();const p=d[0]==="-"?-1:1;return"+-".indexOf(d[0])>=0&&(d=d.slice(1)),d===".inf"?p===1?Number.POSITIVE_INFINITY:Number.NEGATIVE_INFINITY:d===".nan"?NaN:p*parseFloat(d,10)}const s=/^[-+]?[0-9]+e/;function l(u,d){if(isNaN(u))switch(d){case"lowercase":return".nan";case"uppercase":return".NAN";case"camelcase":return".NaN"}else if(Number.POSITIVE_INFINITY===u)switch(d){case"lowercase":return".inf";case"uppercase":return".INF";case"camelcase":return".Inf"}else if(Number.NEGATIVE_INFINITY===u)switch(d){case"lowercase":return"-.inf";case"uppercase":return"-.INF";case"camelcase":return"-.Inf"}else if(e.isNegativeZero(u))return"-0.0";const p=u.toString(10);return s.test(p)?p.replace("e",".e"):p}function c(u){return Object.prototype.toString.call(u)==="[object Number]"&&(u%1!==0||e.isNegativeZero(u))}return Gr=new n("tag:yaml.org,2002:float",{kind:"scalar",resolve:r,construct:i,predicate:c,represent:l,defaultStyle:"lowercase"}),Gr}var Wr,ss;function gc(){return ss||(ss=1,Wr=mc().extend({implicit:[pc(),fc(),hc(),vc()]})),Wr}var Yr,ls;function bc(){return ls||(ls=1,Yr=gc()),Yr}var Jr,cs;function _c(){if(cs)return Jr;cs=1;const e=pn(),n=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9])-([0-9][0-9])$"),o=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9]?)-([0-9][0-9]?)(?:[Tt]|[ \\t]+)([0-9][0-9]?):([0-9][0-9]):([0-9][0-9])(?:\\.([0-9]*))?(?:[ \\t]*(Z|([-+])([0-9][0-9]?)(?::([0-9][0-9]))?))?$");function a(s){return s===null?!1:n.exec(s)!==null||o.exec(s)!==null}function r(s){let l=0,c=null,u=n.exec(s);if(u===null&&(u=o.exec(s)),u===null)throw new Error("Date resolve error");const d=+u[1],p=+u[2]-1,f=+u[3];if(!u[4])return new Date(Date.UTC(d,p,f));const v=+u[4],x=+u[5],w=+u[6];if(u[7]){for(l=u[7].slice(0,3);l.length<3;)l+="0";l=+l}if(u[9]){const k=+u[10],N=+(u[11]||0);c=(k*60+N)*6e4,u[9]==="-"&&(c=-c)}const S=new Date(Date.UTC(d,p,f,v,x,w,l));return c&&S.setTime(S.getTime()-c),S}function i(s){return s.toISOString()}return Jr=new e("tag:yaml.org,2002:timestamp",{kind:"scalar",resolve:a,construct:r,instanceOf:Date,represent:i}),Jr}var Qr,us;function yc(){if(us)return Qr;us=1;const e=pn();function n(o){return o==="<<"||o===null}return Qr=new e("tag:yaml.org,2002:merge",{kind:"scalar",resolve:n}),Qr}var Xr,ds;function Ac(){if(ds)return Xr;ds=1;const e=pn(),n=`ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=
\r`;function o(s){if(s===null)return!1;let l=0;const c=s.length,u=n;for(let d=0;d<c;d++){const p=u.indexOf(s.charAt(d));if(!(p>64)){if(p<0)return!1;l+=6}}return l%8===0}function a(s){const l=s.replace(/[\r\n=]/g,""),c=l.length,u=n;let d=0;const p=[];for(let v=0;v<c;v++)v%4===0&&v&&(p.push(d>>16&255),p.push(d>>8&255),p.push(d&255)),d=d<<6|u.indexOf(l.charAt(v));const f=c%4*6;return f===0?(p.push(d>>16&255),p.push(d>>8&255),p.push(d&255)):f===18?(p.push(d>>10&255),p.push(d>>2&255)):f===12&&p.push(d>>4&255),new Uint8Array(p)}function r(s){let l="",c=0;const u=s.length,d=n;for(let f=0;f<u;f++)f%3===0&&f&&(l+=d[c>>18&63],l+=d[c>>12&63],l+=d[c>>6&63],l+=d[c&63]),c=(c<<8)+s[f];const p=u%3;return p===0?(l+=d[c>>18&63],l+=d[c>>12&63],l+=d[c>>6&63],l+=d[c&63]):p===2?(l+=d[c>>10&63],l+=d[c>>4&63],l+=d[c<<2&63],l+=d[64]):p===1&&(l+=d[c>>2&63],l+=d[c<<4&63],l+=d[64],l+=d[64]),l}function i(s){return Object.prototype.toString.call(s)==="[object Uint8Array]"}return Xr=new e("tag:yaml.org,2002:binary",{kind:"scalar",resolve:o,construct:a,predicate:i,represent:r}),Xr}var Zr,ms;function Nc(){if(ms)return Zr;ms=1;const e=pn(),n=Object.prototype.hasOwnProperty,o=Object.prototype.toString;function a(i){if(i===null)return!0;const s={},l=i;for(let c=0,u=l.length;c<u;c+=1){const d=l[c];let p=!1;if(o.call(d)!=="[object Object]")return!1;let f;for(f in d)if(n.call(d,f))if(!p)p=!0;else return!1;if(!p||n.call(s,f))return!1;Object.defineProperty(s,f,{value:!0})}return!0}function r(i){return i!==null?i:[]}return Zr=new e("tag:yaml.org,2002:omap",{kind:"sequence",resolve:a,construct:r}),Zr}var et,ps;function xc(){if(ps)return et;ps=1;const e=pn(),n=Object.prototype.toString;function o(r){if(r===null)return!0;const i=r,s=new Array(i.length);for(let l=0,c=i.length;l<c;l+=1){const u=i[l];if(n.call(u)!=="[object Object]")return!1;const d=Object.keys(u);if(d.length!==1)return!1;s[l]=[d[0],u[d[0]]]}return!0}function a(r){if(r===null)return[];const i=r,s=new Array(i.length);for(let l=0,c=i.length;l<c;l+=1){const u=i[l],d=Object.keys(u);s[l]=[d[0],u[d[0]]]}return s}return et=new e("tag:yaml.org,2002:pairs",{kind:"sequence",resolve:o,construct:a}),et}var nt,fs;function Bc(){if(fs)return nt;fs=1;const e=pn(),n=Object.prototype.hasOwnProperty;function o(r){if(r===null)return!0;const i=r;for(const s in i)if(n.call(i,s)&&i[s]!==null)return!1;return!0}function a(r){return r!==null?r:{}}return nt=new e("tag:yaml.org,2002:set",{kind:"mapping",resolve:o,construct:a}),nt}var ot,hs;function Jt(){return hs||(hs=1,ot=bc().extend({implicit:[_c(),yc()],explicit:[Ac(),Nc(),xc(),Bc()]})),ot}var vs;function Um(){if(vs)return qa;vs=1;const e=Oa(),n=Pa(),o=Hm(),a=Jt(),r=Object.prototype.hasOwnProperty,i=1,s=2,l=3,c=4,u=1,d=2,p=3,f=/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F-\x84\x86-\x9F\uFFFE\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/,v=/[\x85\u2028\u2029]/,x=/[,\[\]{}]/,w=/^(?:!|!!|![0-9A-Za-z-]+!)$/,S=/^(?:!|[^,\[\]{}])(?:%[0-9a-f]{2}|[0-9a-z\-#;/?:@&=+$,_.!~*'()\[\]])*$/i;function k(t){return Object.prototype.toString.call(t)}function N(t){return t===10||t===13}function C(t){return t===9||t===32}function E(t){return t===9||t===32||t===10||t===13}function se(t){return t===44||t===91||t===93||t===123||t===125}function Q(t){if(t>=48&&t<=57)return t-48;const _=t|32;return _>=97&&_<=102?_-97+10:-1}function $(t){return t===120?2:t===117?4:t===85?8:0}function re(t){return t>=48&&t<=57?t-48:-1}function ae(t){switch(t){case 48:return"\0";case 97:return"\x07";case 98:return"\b";case 116:return"	";case 9:return"	";case 110:return`
`;case 118:return"\v";case 102:return"\f";case 114:return"\r";case 101:return"\x1B";case 32:return" ";case 34:return'"';case 47:return"/";case 92:return"\\";case 78:return"";case 95:return" ";case 76:return"\u2028";case 80:return"\u2029";default:return""}}function Y(t){return t<=65535?String.fromCharCode(t):String.fromCharCode((t-65536>>10)+55296,(t-65536&1023)+56320)}function F(t,_,R){_==="__proto__"?Object.defineProperty(t,_,{configurable:!0,enumerable:!0,writable:!0,value:R}):t[_]=R}const B=new Array(256),X=new Array(256);for(let t=0;t<256;t++)B[t]=ae(t)?1:0,X[t]=ae(t);function ne(t,_){this.input=t,this.filename=_.filename||null,this.schema=_.schema||a,this.onWarning=_.onWarning||null,this.legacy=_.legacy||!1,this.json=_.json||!1,this.listener=_.listener||null,this.maxDepth=typeof _.maxDepth=="number"?_.maxDepth:100,this.maxTotalMergeKeys=typeof _.maxTotalMergeKeys=="number"?_.maxTotalMergeKeys:1e4,this.implicitTypes=this.schema.compiledImplicit,this.typeMap=this.schema.compiledTypeMap,this.length=t.length,this.position=0,this.line=0,this.lineStart=0,this.lineIndent=0,this.depth=0,this.totalMergeKeys=0,this.firstTabInLine=-1,this.documents=[],this.anchorMapTransactions=[]}function Ce(t,_){const R={name:t.filename,buffer:t.input.slice(0,-1),position:t.position,line:t.line,column:t.position-t.lineStart};return R.snippet=o(R),new n(_,R)}function J(t,_){throw Ce(t,_)}function we(t,_){t.onWarning&&t.onWarning.call(null,Ce(t,_))}function Re(t,_,R){const O=t.anchorMapTransactions;if(O.length!==0){const T=O[O.length-1];r.call(T,_)||(T[_]={existed:r.call(t.anchorMap,_),value:t.anchorMap[_]})}t.anchorMap[_]=R}function vn(t){t.anchorMapTransactions.push(Object.create(null))}function Ze(t){const _=t.anchorMapTransactions.pop(),R=t.anchorMapTransactions;if(R.length===0)return;const O=R[R.length-1],T=Object.keys(_);for(let U=0,m=T.length;U<m;U+=1){const A=T[U];r.call(O,A)||(O[A]=_[A])}}function fn(t){const _=t.anchorMapTransactions.pop(),R=Object.keys(_);for(let O=R.length-1;O>=0;O-=1){const T=_[R[O]];T.existed?t.anchorMap[R[O]]=T.value:delete t.anchorMap[R[O]]}}function We(t){return{position:t.position,line:t.line,lineStart:t.lineStart,lineIndent:t.lineIndent,firstTabInLine:t.firstTabInLine,tag:t.tag,anchor:t.anchor,kind:t.kind,result:t.result}}function gn(t,_){t.position=_.position,t.line=_.line,t.lineStart=_.lineStart,t.lineIndent=_.lineIndent,t.firstTabInLine=_.firstTabInLine,t.tag=_.tag,t.anchor=_.anchor,t.kind=_.kind,t.result=_.result}const Sn={YAML:function(_,R,O){_.version!==null&&J(_,"duplication of %YAML directive"),O.length!==1&&J(_,"YAML directive accepts exactly one argument");const T=/^([0-9]+)\.([0-9]+)$/.exec(O[0]);T===null&&J(_,"ill-formed argument of the YAML directive");const U=parseInt(T[1],10),m=parseInt(T[2],10);U!==1&&J(_,"unacceptable YAML version of the document"),_.version=O[0],_.checkLineBreaks=m<2,m!==1&&m!==2&&we(_,"unsupported YAML version of the document")},TAG:function(_,R,O){let T;O.length!==2&&J(_,"TAG directive accepts exactly two arguments");const U=O[0];T=O[1],w.test(U)||J(_,"ill-formed tag handle (first argument) of the TAG directive"),r.call(_.tagMap,U)&&J(_,'there is a previously declared suffix for "'+U+'" tag handle'),S.test(T)||J(_,"ill-formed tag prefix (second argument) of the TAG directive");try{T=decodeURIComponent(T)}catch{J(_,"tag prefix is malformed: "+T)}_.tagMap[U]=T}};function Ke(t,_,R,O){if(_<R){const T=t.input.slice(_,R);if(O)for(let U=0,m=T.length;U<m;U+=1){const A=T.charCodeAt(U);A===9||A>=32&&A<=1114111||J(t,"expected valid JSON character")}else f.test(T)&&J(t,"the stream contains non-printable characters");t.result+=T}}function Ge(t,_,R,O){e.isObject(R)||J(t,"cannot merge mappings; the provided source object is unacceptable");const T=Object.keys(R);for(let U=0,m=T.length;U<m;U+=1){const A=T[U];t.maxTotalMergeKeys!==-1&&++t.totalMergeKeys>t.maxTotalMergeKeys&&J(t,"merge keys exceeded maxTotalMergeKeys ("+t.maxTotalMergeKeys+")"),r.call(_,A)||(F(_,A,R[A]),O[A]=!0)}}function P(t,_,R,O,T,U,m,A,M){if(Array.isArray(T)){T=Array.prototype.slice.call(T);for(let D=0,L=T.length;D<L;D+=1)Array.isArray(T[D])&&J(t,"nested arrays are not supported inside keys"),typeof T=="object"&&k(T[D])==="[object Object]"&&(T[D]="[object Object]")}if(typeof T=="object"&&k(T)==="[object Object]"&&(T="[object Object]"),T=String(T),_===null&&(_={}),O==="tag:yaml.org,2002:merge")if(Array.isArray(U))for(let D=0,L=U.length;D<L;D+=1)Ge(t,_,U[D],R);else Ge(t,_,U,R);else!t.json&&!r.call(R,T)&&r.call(_,T)&&(t.line=m||t.line,t.lineStart=A||t.lineStart,t.position=M||t.position,J(t,"duplicated mapping key")),F(_,T,U),delete R[T];return _}function ce(t){const _=t.input.charCodeAt(t.position);_===10?t.position++:_===13?(t.position++,t.input.charCodeAt(t.position)===10&&t.position++):J(t,"a line break is expected"),t.line+=1,t.lineStart=t.position,t.firstTabInLine=-1}function G(t,_,R){let O=0,T=t.input.charCodeAt(t.position);for(;T!==0;){for(;C(T);)T===9&&t.firstTabInLine===-1&&(t.firstTabInLine=t.position),T=t.input.charCodeAt(++t.position);if(_&&T===35)do T=t.input.charCodeAt(++t.position);while(T!==10&&T!==13&&T!==0);if(N(T))for(ce(t),T=t.input.charCodeAt(t.position),O++,t.lineIndent=0;T===32;)t.lineIndent++,T=t.input.charCodeAt(++t.position);else break}return R!==-1&&O!==0&&t.lineIndent<R&&we(t,"deficient indentation"),O}function pe(t){let _=t.position,R=t.input.charCodeAt(_);return!!((R===45||R===46)&&R===t.input.charCodeAt(_+1)&&R===t.input.charCodeAt(_+2)&&(_+=3,R=t.input.charCodeAt(_),R===0||E(R)))}function Ae(t,_){_===1?t.result+=" ":_>1&&(t.result+=e.repeat(`
`,_-1))}function h(t,_,R){let O,T,U,m,A,M;const D=t.kind,L=t.result;let K=t.input.charCodeAt(t.position);if(E(K)||se(K)||K===35||K===38||K===42||K===33||K===124||K===62||K===39||K===34||K===37||K===64||K===96)return!1;if(K===63||K===45){const H=t.input.charCodeAt(t.position+1);if(E(H)||R&&se(H))return!1}for(t.kind="scalar",t.result="",O=T=t.position,U=!1;K!==0;){if(K===58){const H=t.input.charCodeAt(t.position+1);if(E(H)||R&&se(H))break}else if(K===35){const H=t.input.charCodeAt(t.position-1);if(E(H))break}else{if(t.position===t.lineStart&&pe(t)||R&&se(K))break;if(N(K))if(m=t.line,A=t.lineStart,M=t.lineIndent,G(t,!1,-1),t.lineIndent>=_){U=!0,K=t.input.charCodeAt(t.position);continue}else{t.position=T,t.line=m,t.lineStart=A,t.lineIndent=M;break}}U&&(Ke(t,O,T,!1),Ae(t,t.line-m),O=T=t.position,U=!1),C(K)||(T=t.position+1),K=t.input.charCodeAt(++t.position)}return Ke(t,O,T,!1),t.result?!0:(t.kind=D,t.result=L,!1)}function g(t,_){let R,O,T=t.input.charCodeAt(t.position);if(T!==39)return!1;for(t.kind="scalar",t.result="",t.position++,R=O=t.position;(T=t.input.charCodeAt(t.position))!==0;)if(T===39)if(Ke(t,R,t.position,!0),T=t.input.charCodeAt(++t.position),T===39)R=t.position,t.position++,O=t.position;else return!0;else N(T)?(Ke(t,R,O,!0),Ae(t,G(t,!1,_)),R=O=t.position):t.position===t.lineStart&&pe(t)?J(t,"unexpected end of the document within a single quoted scalar"):(t.position++,C(T)||(O=t.position));J(t,"unexpected end of the stream within a single quoted scalar")}function y(t,_){let R,O,T,U=t.input.charCodeAt(t.position);if(U!==34)return!1;for(t.kind="scalar",t.result="",t.position++,R=O=t.position;(U=t.input.charCodeAt(t.position))!==0;){if(U===34)return Ke(t,R,t.position,!0),t.position++,!0;if(U===92){if(Ke(t,R,t.position,!0),U=t.input.charCodeAt(++t.position),N(U))G(t,!1,_);else if(U<256&&B[U])t.result+=X[U],t.position++;else if((T=$(U))>0){let m=T,A=0;for(;m>0;m--)U=t.input.charCodeAt(++t.position),(T=Q(U))>=0?A=(A<<4)+T:J(t,"expected hexadecimal character");t.result+=Y(A),t.position++}else J(t,"unknown escape sequence");R=O=t.position}else N(U)?(Ke(t,R,O,!0),Ae(t,G(t,!1,_)),R=O=t.position):t.position===t.lineStart&&pe(t)?J(t,"unexpected end of the document within a double quoted scalar"):(t.position++,C(U)||(O=t.position))}J(t,"unexpected end of the stream within a double quoted scalar")}function V(t,_){let R=!0,O,T,U;const m=t.tag;let A;const M=t.anchor;let D,L,K,H;const de=Object.create(null);let ue,he,ge,Ie=t.input.charCodeAt(t.position);if(Ie===91)D=93,H=!1,A=[];else if(Ie===123)D=125,H=!0,A={};else return!1;for(t.anchor!==null&&Re(t,t.anchor,A),Ie=t.input.charCodeAt(++t.position);Ie!==0;){if(G(t,!0,_),Ie=t.input.charCodeAt(t.position),Ie===D)return t.position++,t.tag=m,t.anchor=M,t.kind=H?"mapping":"sequence",t.result=A,!0;if(R?Ie===44&&J(t,"expected the node content, but found ','"):J(t,"missed comma between flow collection entries"),he=ue=ge=null,L=K=!1,Ie===63){const ze=t.input.charCodeAt(t.position+1);E(ze)&&(L=K=!0,t.position++,G(t,!0,_))}O=t.line,T=t.lineStart,U=t.position,ie(t,_,i,!1,!0),he=t.tag,ue=t.result,G(t,!0,_),Ie=t.input.charCodeAt(t.position),(K||t.line===O)&&Ie===58&&(L=!0,Ie=t.input.charCodeAt(++t.position),G(t,!0,_),ie(t,_,i,!1,!0),ge=t.result),H?P(t,A,de,he,ue,ge,O,T,U):L?A.push(P(t,null,de,he,ue,ge,O,T,U)):A.push(ue),G(t,!0,_),Ie=t.input.charCodeAt(t.position),Ie===44?(R=!0,Ie=t.input.charCodeAt(++t.position)):R=!1}J(t,"unexpected end of the stream within a flow collection")}function q(t,_){let R,O=u,T=!1,U=!1,m=_,A=0,M=!1,D,L=t.input.charCodeAt(t.position);if(L===124)R=!1;else if(L===62)R=!0;else return!1;for(t.kind="scalar",t.result="";L!==0;)if(L=t.input.charCodeAt(++t.position),L===43||L===45)u===O?O=L===43?p:d:J(t,"repeat of a chomping mode identifier");else if((D=re(L))>=0)D===0?J(t,"bad explicit indentation width of a block scalar; it cannot be less than one"):U?J(t,"repeat of an indentation width identifier"):(m=_+D-1,U=!0);else break;if(C(L)){do L=t.input.charCodeAt(++t.position);while(C(L));if(L===35)do L=t.input.charCodeAt(++t.position);while(!N(L)&&L!==0)}for(;L!==0;){for(ce(t),t.lineIndent=0,L=t.input.charCodeAt(t.position);(!U||t.lineIndent<m)&&L===32;)t.lineIndent++,L=t.input.charCodeAt(++t.position);if(!U&&t.lineIndent>m&&(m=t.lineIndent),N(L)){A++;continue}if(!U&&m===0&&J(t,"missing indentation for block scalar"),t.lineIndent<m){O===p?t.result+=e.repeat(`
`,T?1+A:A):O===u&&T&&(t.result+=`
`);break}R?C(L)?(M=!0,t.result+=e.repeat(`
`,T?1+A:A)):M?(M=!1,t.result+=e.repeat(`
`,A+1)):A===0?T&&(t.result+=" "):t.result+=e.repeat(`
`,A):t.result+=e.repeat(`
`,T?1+A:A),T=!0,U=!0,A=0;const K=t.position;for(;!N(L)&&L!==0;)L=t.input.charCodeAt(++t.position);Ke(t,K,t.position,!1)}return!0}function I(t,_){const R=t.tag,O=t.anchor,T=[];let U=!1;if(t.firstTabInLine!==-1)return!1;t.anchor!==null&&Re(t,t.anchor,T);let m=t.input.charCodeAt(t.position);for(;m!==0&&(t.firstTabInLine!==-1&&(t.position=t.firstTabInLine,J(t,"tab characters must not be used in indentation")),m===45);){const A=t.input.charCodeAt(t.position+1);if(!E(A))break;if(U=!0,t.position++,G(t,!0,-1)&&t.lineIndent<=_){T.push(null),m=t.input.charCodeAt(t.position);continue}const M=t.line;if(ie(t,_,l,!1,!0),T.push(t.result),G(t,!0,-1),m=t.input.charCodeAt(t.position),(t.line===M||t.lineIndent>_)&&m!==0)J(t,"bad indentation of a sequence entry");else if(t.lineIndent<_)break}return U?(t.tag=R,t.anchor=O,t.kind="sequence",t.result=T,!0):!1}function te(t,_,R){let O,T,U,m;const A=t.tag,M=t.anchor,D={},L=Object.create(null);let K=null,H=null,de=null,ue=!1,he=!1;if(t.firstTabInLine!==-1)return!1;t.anchor!==null&&Re(t,t.anchor,D);let ge=t.input.charCodeAt(t.position);for(;ge!==0;){!ue&&t.firstTabInLine!==-1&&(t.position=t.firstTabInLine,J(t,"tab characters must not be used in indentation"));const Ie=t.input.charCodeAt(t.position+1),ze=t.line;if((ge===63||ge===58)&&E(Ie))ge===63?(ue&&(P(t,D,L,K,H,null,T,U,m),K=H=de=null),he=!0,ue=!0,O=!0):ue?(ue=!1,O=!0):J(t,"incomplete explicit mapping pair; a key node is missed; or followed by a non-tabulated empty line"),t.position+=1,ge=Ie;else{if(T=t.line,U=t.lineStart,m=t.position,!ie(t,R,s,!1,!0))break;if(t.line===ze){for(ge=t.input.charCodeAt(t.position);C(ge);)ge=t.input.charCodeAt(++t.position);if(ge===58)ge=t.input.charCodeAt(++t.position),E(ge)||J(t,"a whitespace character is expected after the key-value separator within a block mapping"),ue&&(P(t,D,L,K,H,null,T,U,m),K=H=de=null),he=!0,ue=!1,O=!1,K=t.tag,H=t.result;else if(he)J(t,"can not read an implicit mapping pair; a colon is missed");else return t.tag=A,t.anchor=M,!0}else if(he)J(t,"can not read a block mapping entry; a multiline key may not be an implicit key");else return t.tag=A,t.anchor=M,!0}if((t.line===ze||t.lineIndent>_)&&(ue&&(T=t.line,U=t.lineStart,m=t.position),ie(t,_,c,!0,O)&&(ue?H=t.result:de=t.result),ue||(P(t,D,L,K,H,de,T,U,m),K=H=de=null),G(t,!0,-1),ge=t.input.charCodeAt(t.position)),(t.line===ze||t.lineIndent>_)&&ge!==0)J(t,"bad indentation of a mapping entry");else if(t.lineIndent<_)break}return ue&&P(t,D,L,K,H,null,T,U,m),he&&(t.tag=A,t.anchor=M,t.kind="mapping",t.result=D),he}function oe(t){let _=!1,R=!1,O,T,U=t.input.charCodeAt(t.position);if(U!==33)return!1;t.tag!==null&&J(t,"duplication of a tag property"),U=t.input.charCodeAt(++t.position),U===60?(_=!0,U=t.input.charCodeAt(++t.position)):U===33?(R=!0,O="!!",U=t.input.charCodeAt(++t.position)):O="!";let m=t.position;if(_){do U=t.input.charCodeAt(++t.position);while(U!==0&&U!==62);t.position<t.length?(T=t.input.slice(m,t.position),U=t.input.charCodeAt(++t.position)):J(t,"unexpected end of the stream within a verbatim tag")}else{for(;U!==0&&!E(U);)U===33&&(R?J(t,"tag suffix cannot contain exclamation marks"):(O=t.input.slice(m-1,t.position+1),w.test(O)||J(t,"named tag handle cannot contain such characters"),R=!0,m=t.position+1)),U=t.input.charCodeAt(++t.position);T=t.input.slice(m,t.position),x.test(T)&&J(t,"tag suffix cannot contain flow indicator characters")}T&&!S.test(T)&&J(t,"tag name cannot contain such characters: "+T);try{T=decodeURIComponent(T)}catch{J(t,"tag name is malformed: "+T)}return _?t.tag=T:r.call(t.tagMap,O)?t.tag=t.tagMap[O]+T:O==="!"?t.tag="!"+T:O==="!!"?t.tag="tag:yaml.org,2002:"+T:J(t,'undeclared tag handle "'+O+'"'),!0}function Z(t){let _=t.input.charCodeAt(t.position);if(_!==38)return!1;t.anchor!==null&&J(t,"duplication of an anchor property"),_=t.input.charCodeAt(++t.position);const R=t.position;for(;_!==0&&!E(_)&&!se(_);)_=t.input.charCodeAt(++t.position);return t.position===R&&J(t,"name of an anchor node must contain at least one character"),t.anchor=t.input.slice(R,t.position),!0}function z(t){let _=t.input.charCodeAt(t.position);if(_!==42)return!1;_=t.input.charCodeAt(++t.position);const R=t.position;for(;_!==0&&!E(_)&&!se(_);)_=t.input.charCodeAt(++t.position);t.position===R&&J(t,"name of an alias node must contain at least one character");const O=t.input.slice(R,t.position);return r.call(t.anchorMap,O)||J(t,'unidentified alias "'+O+'"'),t.result=t.anchorMap[O],G(t,!0,-1),!0}function ve(t,_,R,O){const T=We(t);return vn(t),gn(t,_),t.tag=null,t.anchor=null,t.kind=null,t.result=null,te(t,R,O)&&t.kind==="mapping"?(Ze(t),!0):(fn(t),gn(t,T),!1)}function ie(t,_,R,O,T){let U,m,A=1,M=!1,D=!1,L=null,K,H,de;t.depth>=t.maxDepth&&J(t,"nesting exceeded maxDepth ("+t.maxDepth+")"),t.depth+=1,t.listener!==null&&t.listener("open",t),t.tag=null,t.anchor=null,t.kind=null,t.result=null;const ue=U=m=c===R||l===R;if(O&&G(t,!0,-1)&&(M=!0,t.lineIndent>_?A=1:t.lineIndent===_?A=0:t.lineIndent<_&&(A=-1)),A===1)for(;;){const he=t.input.charCodeAt(t.position),ge=We(t);if(M&&(he===33&&t.tag!==null||he===38&&t.anchor!==null)||!oe(t)&&!Z(t))break;L===null&&(L=ge),G(t,!0,-1)?(M=!0,m=ue,t.lineIndent>_?A=1:t.lineIndent===_?A=0:t.lineIndent<_&&(A=-1)):m=!1}if(m&&(m=M||T),A===1||c===R)if(i===R||s===R?H=_:H=_+1,de=t.position-t.lineStart,A===1)if(m&&(I(t,de)||te(t,de,H))||V(t,H))D=!0;else{const he=t.input.charCodeAt(t.position);L!==null&&ue&&!m&&he!==124&&he!==62&&ve(t,L,L.position-L.lineStart,H)||U&&q(t,H)||g(t,H)||y(t,H)?D=!0:z(t)?(D=!0,(t.tag!==null||t.anchor!==null)&&J(t,"alias node should not have any properties")):h(t,H,i===R)&&(D=!0,t.tag===null&&(t.tag="?")),t.anchor!==null&&Re(t,t.anchor,t.result)}else A===0&&(D=m&&I(t,de));if(t.tag===null)t.anchor!==null&&Re(t,t.anchor,t.result);else if(t.tag==="?"){t.result!==null&&t.kind!=="scalar"&&J(t,'unacceptable node kind for !<?> tag; it should be "scalar", not "'+t.kind+'"');for(let he=0,ge=t.implicitTypes.length;he<ge;he+=1)if(K=t.implicitTypes[he],K.resolve(t.result)){t.result=K.construct(t.result),t.tag=K.tag,t.anchor!==null&&Re(t,t.anchor,t.result);break}}else if(t.tag!=="!"){if(r.call(t.typeMap[t.kind||"fallback"],t.tag))K=t.typeMap[t.kind||"fallback"][t.tag];else{K=null;const he=t.typeMap.multi[t.kind||"fallback"];for(let ge=0,Ie=he.length;ge<Ie;ge+=1)if(t.tag.slice(0,he[ge].tag.length)===he[ge].tag){K=he[ge];break}}K||J(t,"unknown tag !<"+t.tag+">"),t.result!==null&&K.kind!==t.kind&&J(t,"unacceptable node kind for !<"+t.tag+'> tag; it should be "'+K.kind+'", not "'+t.kind+'"'),K.resolve(t.result,t.tag)?(t.result=K.construct(t.result,t.tag),t.anchor!==null&&Re(t,t.anchor,t.result)):J(t,"cannot resolve a node with !<"+t.tag+"> explicit tag")}return t.listener!==null&&t.listener("close",t),t.depth-=1,t.tag!==null||t.anchor!==null||D}function fe(t){const _=t.position;let R=!1,O;for(t.version=null,t.checkLineBreaks=t.legacy,t.tagMap=Object.create(null),t.anchorMap=Object.create(null);(O=t.input.charCodeAt(t.position))!==0&&(G(t,!0,-1),O=t.input.charCodeAt(t.position),!(t.lineIndent>0||O!==37));){R=!0,O=t.input.charCodeAt(++t.position);let T=t.position;for(;O!==0&&!E(O);)O=t.input.charCodeAt(++t.position);const U=t.input.slice(T,t.position),m=[];for(U.length<1&&J(t,"directive name must not be less than one character in length");O!==0;){for(;C(O);)O=t.input.charCodeAt(++t.position);if(O===35){do O=t.input.charCodeAt(++t.position);while(O!==0&&!N(O));break}if(N(O))break;for(T=t.position;O!==0&&!E(O);)O=t.input.charCodeAt(++t.position);m.push(t.input.slice(T,t.position))}O!==0&&ce(t),r.call(Sn,U)?Sn[U](t,U,m):we(t,'unknown document directive "'+U+'"')}if(G(t,!0,-1),t.lineIndent===0&&t.input.charCodeAt(t.position)===45&&t.input.charCodeAt(t.position+1)===45&&t.input.charCodeAt(t.position+2)===45?(t.position+=3,G(t,!0,-1)):R&&J(t,"directives end mark is expected"),ie(t,t.lineIndent-1,c,!1,!0),G(t,!0,-1),t.checkLineBreaks&&v.test(t.input.slice(_,t.position))&&we(t,"non-ASCII line breaks are interpreted as content"),t.documents.push(t.result),t.position===t.lineStart&&pe(t)){t.input.charCodeAt(t.position)===46&&(t.position+=3,G(t,!0,-1));return}t.position<t.length-1&&J(t,"end of the stream or a document separator is expected")}function _e(t,_){t=String(t),_=_||{},t.length!==0&&(t.charCodeAt(t.length-1)!==10&&t.charCodeAt(t.length-1)!==13&&(t+=`
`),t.charCodeAt(0)===65279&&(t=t.slice(1)));const R=new ne(t,_),O=t.indexOf("\0");for(O!==-1&&(R.position=O,J(R,"null byte is not allowed in input")),R.input+="\0";R.input.charCodeAt(R.position)===32;)R.lineIndent+=1,R.position+=1;for(;R.position<R.length-1;)fe(R);return R.documents}function Ee(t,_,R){_!==null&&typeof _=="object"&&typeof R>"u"&&(R=_,_=null);const O=_e(t,R);if(typeof _!="function")return O;for(let T=0,U=O.length;T<U;T+=1)_(O[T])}function Oe(t,_){const R=_e(t,_);if(R.length!==0){if(R.length===1)return R[0];throw new n("expected a single document in the stream, but found more")}}return qa.loadAll=Ee,qa.load=Oe,qa}var at={},gs;function Km(){if(gs)return at;gs=1;const e=Oa(),n=Pa(),o=Jt(),a=Object.prototype.toString,r=Object.prototype.hasOwnProperty,i=65279,s=9,l=10,c=13,u=32,d=33,p=34,f=35,v=37,x=38,w=39,S=42,k=44,N=45,C=58,E=61,se=62,Q=63,$=64,re=91,ae=93,Y=96,F=123,B=124,X=125,ne={};ne[0]="\\0",ne[7]="\\a",ne[8]="\\b",ne[9]="\\t",ne[10]="\\n",ne[11]="\\v",ne[12]="\\f",ne[13]="\\r",ne[27]="\\e",ne[34]='\\"',ne[92]="\\\\",ne[133]="\\N",ne[160]="\\_",ne[8232]="\\L",ne[8233]="\\P";const Ce=["y","Y","yes","Yes","YES","on","On","ON","n","N","no","No","NO","off","Off","OFF"],J=/^[-+]?[0-9_]+(?::[0-9_]+)+(?:\.[0-9_]*)?$/;function we(m,A){if(A===null)return{};const M={},D=Object.keys(A);for(let L=0,K=D.length;L<K;L+=1){let H=D[L],de=String(A[H]);H.slice(0,2)==="!!"&&(H="tag:yaml.org,2002:"+H.slice(2));const ue=m.compiledTypeMap.fallback[H];ue&&r.call(ue.styleAliases,de)&&(de=ue.styleAliases[de]),M[H]=de}return M}function Re(m){let A,M;const D=m.toString(16).toUpperCase();if(m<=255)A="x",M=2;else if(m<=65535)A="u",M=4;else if(m<=4294967295)A="U",M=8;else throw new n("code point within a string may not be greater than 0xFFFFFFFF");return"\\"+A+e.repeat("0",M-D.length)+D}const vn=1,Ze=2;function fn(m){this.schema=m.schema||o,this.indent=Math.max(1,m.indent||2),this.noArrayIndent=m.noArrayIndent||!1,this.skipInvalid=m.skipInvalid||!1,this.flowLevel=e.isNothing(m.flowLevel)?-1:m.flowLevel,this.styleMap=we(this.schema,m.styles||null),this.sortKeys=m.sortKeys||!1,this.lineWidth=m.lineWidth||80,this.noRefs=m.noRefs||!1,this.noCompatMode=m.noCompatMode||!1,this.condenseFlow=m.condenseFlow||!1,this.quotingType=m.quotingType==='"'?Ze:vn,this.forceQuotes=m.forceQuotes||!1,this.replacer=typeof m.replacer=="function"?m.replacer:null,this.implicitTypes=this.schema.compiledImplicit,this.explicitTypes=this.schema.compiledExplicit,this.tag=null,this.result="",this.duplicates=[],this.usedDuplicates=null}function We(m,A){const M=e.repeat(" ",A);let D=0,L="";const K=m.length;for(;D<K;){let H;const de=m.indexOf(`
`,D);de===-1?(H=m.slice(D),D=K):(H=m.slice(D,de+1),D=de+1),H.length&&H!==`
`&&(L+=M),L+=H}return L}function gn(m,A){return`
`+e.repeat(" ",m.indent*A)}function Sn(m,A){for(let M=0,D=m.implicitTypes.length;M<D;M+=1)if(m.implicitTypes[M].resolve(A))return!0;return!1}function Ke(m){return m===u||m===s}function Ge(m){return m>=32&&m<=126||m>=161&&m<=55295&&m!==8232&&m!==8233||m>=57344&&m<=65533&&m!==i||m>=65536&&m<=1114111}function P(m){return Ge(m)&&m!==i&&m!==c&&m!==l}function ce(m,A,M){const D=P(m),L=D&&!Ke(m);return(M?D:D&&m!==k&&m!==re&&m!==ae&&m!==F&&m!==X)&&m!==f&&!(A===C&&!L)||P(A)&&!Ke(A)&&m===f||A===C&&L}function G(m){return Ge(m)&&m!==i&&!Ke(m)&&m!==N&&m!==Q&&m!==C&&m!==k&&m!==re&&m!==ae&&m!==F&&m!==X&&m!==f&&m!==x&&m!==S&&m!==d&&m!==B&&m!==E&&m!==se&&m!==w&&m!==p&&m!==v&&m!==$&&m!==Y}function pe(m){return!Ke(m)&&m!==C}function Ae(m,A){const M=m.charCodeAt(A);let D;return M>=55296&&M<=56319&&A+1<m.length&&(D=m.charCodeAt(A+1),D>=56320&&D<=57343)?(M-55296)*1024+D-56320+65536:M}function h(m){return/^\n* /.test(m)}const g=1,y=2,V=3,q=4,I=5;function te(m,A,M,D,L,K,H,de){let ue,he=0,ge=null,Ie=!1,ze=!1;const oi=D!==-1;let Go=-1,Wo=G(Ae(m,0))&&pe(Ae(m,m.length-1));if(A||H)for(ue=0;ue<m.length;he>=65536?ue+=2:ue++){if(he=Ae(m,ue),!Ge(he))return I;Wo=Wo&&ce(he,ge,de),ge=he}else{for(ue=0;ue<m.length;he>=65536?ue+=2:ue++){if(he=Ae(m,ue),he===l)Ie=!0,oi&&(ze=ze||ue-Go-1>D&&m[Go+1]!==" ",Go=ue);else if(!Ge(he))return I;Wo=Wo&&ce(he,ge,de),ge=he}ze=ze||oi&&ue-Go-1>D&&m[Go+1]!==" "}return!Ie&&!ze?Wo&&!H&&!L(m)?g:K===Ze?I:y:M>9&&h(m)?I:H?K===Ze?I:y:ze?q:V}function oe(m,A,M,D,L){m.dump=(function(){if(A.length===0)return m.quotingType===Ze?'""':"''";if(!m.noCompatMode&&(Ce.indexOf(A)!==-1||J.test(A)))return m.quotingType===Ze?'"'+A+'"':"'"+A+"'";const K=m.indent*Math.max(1,M),H=m.lineWidth===-1?-1:Math.max(Math.min(m.lineWidth,40),m.lineWidth-K),de=D||m.flowLevel>-1&&M>=m.flowLevel;function ue(he){return Sn(m,he)}switch(te(A,de,m.indent,H,ue,m.quotingType,m.forceQuotes&&!D,L)){case g:return A;case y:return"'"+A.replace(/'/g,"''")+"'";case V:return"|"+Z(A,m.indent)+z(We(A,K));case q:return">"+Z(A,m.indent)+z(We(ve(A,H),K));case I:return'"'+fe(A)+'"';default:throw new n("impossible error: invalid scalar style")}})()}function Z(m,A){const M=h(m)?String(A):"",D=m[m.length-1]===`
`,K=D&&(m[m.length-2]===`
`||m===`
`)?"+":D?"":"-";return M+K+`
`}function z(m){return m[m.length-1]===`
`?m.slice(0,-1):m}function ve(m,A){const M=/(\n+)([^\n]*)/g;let D=(function(){let de=m.indexOf(`
`);return de=de!==-1?de:m.length,M.lastIndex=de,ie(m.slice(0,de),A)})(),L=m[0]===`
`||m[0]===" ",K,H;for(;H=M.exec(m);){const de=H[1],ue=H[2];K=ue[0]===" ",D+=de+(!L&&!K&&ue!==""?`
`:"")+ie(ue,A),L=K}return D}function ie(m,A){if(m===""||m[0]===" ")return m;const M=/ [^ ]/g;let D,L=0,K,H=0,de=0,ue="";for(;D=M.exec(m);)de=D.index,de-L>A&&(K=H>L?H:de,ue+=`
`+m.slice(L,K),L=K+1),H=de;return ue+=`
`,m.length-L>A&&H>L?ue+=m.slice(L,H)+`
`+m.slice(H+1):ue+=m.slice(L),ue.slice(1)}function fe(m){let A="",M=0;for(let D=0;D<m.length;M>=65536?D+=2:D++){M=Ae(m,D);const L=ne[M];!L&&Ge(M)?(A+=m[D],M>=65536&&(A+=m[D+1])):A+=L||Re(M)}return A}function _e(m,A,M){let D="";const L=m.tag;for(let K=0,H=M.length;K<H;K+=1){let de=M[K];m.replacer&&(de=m.replacer.call(M,String(K),de)),(R(m,A,de,!1,!1)||typeof de>"u"&&R(m,A,null,!1,!1))&&(D!==""&&(D+=","+(m.condenseFlow?"":" ")),D+=m.dump)}m.tag=L,m.dump="["+D+"]"}function Ee(m,A,M,D){let L="";const K=m.tag;for(let H=0,de=M.length;H<de;H+=1){let ue=M[H];m.replacer&&(ue=m.replacer.call(M,String(H),ue)),(R(m,A+1,ue,!0,!0,!1,!0)||typeof ue>"u"&&R(m,A+1,null,!0,!0,!1,!0))&&((!D||L!=="")&&(L+=gn(m,A)),m.dump&&l===m.dump.charCodeAt(0)?L+="-":L+="- ",L+=m.dump)}m.tag=K,m.dump=L||"[]"}function Oe(m,A,M){let D="";const L=m.tag,K=Object.keys(M);for(let H=0,de=K.length;H<de;H+=1){let ue="";D!==""&&(ue+=", "),m.condenseFlow&&(ue+='"');const he=K[H];let ge=M[he];m.replacer&&(ge=m.replacer.call(M,he,ge)),R(m,A,he,!1,!1)&&(m.dump.length>1024&&(ue+="? "),ue+=m.dump+(m.condenseFlow?'"':"")+":"+(m.condenseFlow?"":" "),R(m,A,ge,!1,!1)&&(ue+=m.dump,D+=ue))}m.tag=L,m.dump="{"+D+"}"}function t(m,A,M,D){let L="";const K=m.tag,H=Object.keys(M);if(m.sortKeys===!0)H.sort();else if(typeof m.sortKeys=="function")H.sort(m.sortKeys);else if(m.sortKeys)throw new n("sortKeys must be a boolean or a function");for(let de=0,ue=H.length;de<ue;de+=1){let he="";(!D||L!=="")&&(he+=gn(m,A));const ge=H[de];let Ie=M[ge];if(m.replacer&&(Ie=m.replacer.call(M,ge,Ie)),!R(m,A+1,ge,!0,!0,!0))continue;const ze=m.tag!==null&&m.tag!=="?"||m.dump&&m.dump.length>1024;ze&&(m.dump&&l===m.dump.charCodeAt(0)?he+="?":he+="? "),he+=m.dump,ze&&(he+=gn(m,A)),R(m,A+1,Ie,!0,ze)&&(m.dump&&l===m.dump.charCodeAt(0)?he+=":":he+=": ",he+=m.dump,L+=he)}m.tag=K,m.dump=L||"{}"}function _(m,A,M){const D=M?m.explicitTypes:m.implicitTypes;for(let L=0,K=D.length;L<K;L+=1){const H=D[L];if((H.instanceOf||H.predicate)&&(!H.instanceOf||typeof A=="object"&&A instanceof H.instanceOf)&&(!H.predicate||H.predicate(A))){if(M?H.multi&&H.representName?m.tag=H.representName(A):m.tag=H.tag:m.tag="?",H.represent){const de=m.styleMap[H.tag]||H.defaultStyle;let ue;if(a.call(H.represent)==="[object Function]")ue=H.represent(A,de);else if(r.call(H.represent,de))ue=H.represent[de](A,de);else throw new n("!<"+H.tag+'> tag resolver accepts not "'+de+'" style');m.dump=ue}return!0}}return!1}function R(m,A,M,D,L,K,H){m.tag=null,m.dump=M,_(m,M,!1)||_(m,M,!0);const de=a.call(m.dump),ue=D;D&&(D=m.flowLevel<0||m.flowLevel>A);const he=de==="[object Object]"||de==="[object Array]";let ge,Ie;if(he&&(ge=m.duplicates.indexOf(M),Ie=ge!==-1),(m.tag!==null&&m.tag!=="?"||Ie||m.indent!==2&&A>0)&&(L=!1),Ie&&m.usedDuplicates[ge])m.dump="*ref_"+ge;else{if(he&&Ie&&!m.usedDuplicates[ge]&&(m.usedDuplicates[ge]=!0),de==="[object Object]")D&&Object.keys(m.dump).length!==0?(t(m,A,m.dump,L),Ie&&(m.dump="&ref_"+ge+m.dump)):(Oe(m,A,m.dump),Ie&&(m.dump="&ref_"+ge+" "+m.dump));else if(de==="[object Array]")D&&m.dump.length!==0?(m.noArrayIndent&&!H&&A>0?Ee(m,A-1,m.dump,L):Ee(m,A,m.dump,L),Ie&&(m.dump="&ref_"+ge+m.dump)):(_e(m,A,m.dump),Ie&&(m.dump="&ref_"+ge+" "+m.dump));else if(de==="[object String]")m.tag!=="?"&&oe(m,m.dump,A,K,ue);else{if(de==="[object Undefined]")return!1;if(m.skipInvalid)return!1;throw new n("unacceptable kind of an object to dump "+de)}if(m.tag!==null&&m.tag!=="?"){let ze=encodeURI(m.tag[0]==="!"?m.tag.slice(1):m.tag).replace(/!/g,"%21");m.tag[0]==="!"?ze="!"+ze:ze.slice(0,18)==="tag:yaml.org,2002:"?ze="!!"+ze.slice(18):ze="!<"+ze+">",m.dump=ze+" "+m.dump}}return!0}function O(m,A){const M=[],D=[];T(m,M,D);const L=D.length;for(let K=0;K<L;K+=1)A.duplicates.push(M[D[K]]);A.usedDuplicates=new Array(L)}function T(m,A,M){if(m!==null&&typeof m=="object"){const D=A.indexOf(m);if(D!==-1)M.indexOf(D)===-1&&M.push(D);else if(A.push(m),Array.isArray(m))for(let L=0,K=m.length;L<K;L+=1)T(m[L],A,M);else{const L=Object.keys(m);for(let K=0,H=L.length;K<H;K+=1)T(m[L[K]],A,M)}}}function U(m,A){A=A||{};const M=new fn(A);M.noRefs||O(m,M);let D=m;return M.replacer&&(D=M.replacer.call({"":D},"",D)),R(M,0,D,!0,!0)?M.dump+`
`:""}return at.dump=U,at}var bs;function Gm(){if(bs)return en;bs=1;const e=Um(),n=Km();function o(a,r){return function(){throw new Error("Function yaml."+a+" is removed in js-yaml 4. Use yaml."+r+" instead, which is now safe by default.")}}return en.Type=pn(),en.Schema=lc(),en.FAILSAFE_SCHEMA=mc(),en.JSON_SCHEMA=gc(),en.CORE_SCHEMA=bc(),en.DEFAULT_SCHEMA=Jt(),en.load=e.load,en.loadAll=e.loadAll,en.dump=n.dump,en.YAMLException=Pa(),en.types={binary:Ac(),float:vc(),map:dc(),null:pc(),pairs:xc(),set:Bc(),timestamp:_c(),bool:fc(),int:hc(),merge:yc(),omap:Nc(),seq:uc(),str:cc()},en.safeLoad=o("safeLoad","load"),en.safeLoadAll=o("safeLoadAll","loadAll"),en.safeDump=o("safeDump","dump"),en}var Wm=Gm();const nr=zm(Wm),{Type:tg,Schema:ig,FAILSAFE_SCHEMA:sg,JSON_SCHEMA:lg,CORE_SCHEMA:cg,DEFAULT_SCHEMA:ug,load:dg,loadAll:mg,dump:pg,YAMLException:fg,types:hg,safeLoad:vg,safeLoadAll:gg,safeDump:bg}=nr;class Ym{constructor({ruleSetRepository:n}){this.ruleSetRepository=n}list(){return this.ruleSetRepository.getAll()}get(n){return this.ruleSetRepository.get(n)}async save(n){const o=await this.ruleSetRepository.get(n.id),a=$m(n,{createdAt:o?.createdAt??new Date,updatedAt:new Date});return this.ruleSetRepository.put(a)}async importFromJson(n,o){let a;try{a=JSON.parse(n)}catch{throw new TypeError("Arquivo de regras inválido: JSON malformado.")}return this.save(o?{...a,grupo:o}:a)}async importFromYaml(n,o){let a;try{a=nr.load(n)}catch{throw new TypeError("Arquivo de regras inválido: YAML malformado.")}return this.save(o?{...a,grupo:o}:a)}exportToJson(n){Rt(n);const{source:o,createdAt:a,updatedAt:r,...i}=n;return JSON.stringify(i,null,2)}exportToYaml(n){Rt(n);const{source:o,createdAt:a,updatedAt:r,...i}=n;return nr.dump(i,{noRefs:!0})}async exportByIdToJson(n){const o=await this.ruleSetRepository.get(n);if(!o)throw new Error("Conjunto de regras não encontrado.");return this.exportToJson(o)}async exportByIdToYaml(n){const o=await this.ruleSetRepository.get(n);if(!o)throw new Error("Conjunto de regras não encontrado.");return this.exportToYaml(o)}delete(n){return this.ruleSetRepository.delete(n)}}async function Jm({indexedDB:e}={}){const n=await Tm(e),o={projectRepository:new Em(n),environmentRepository:new Sm(n),elementRepository:new Rm(n),evaluationRepository:new wm(n),ruleSetRepository:new Cm(n)},a=new Dm(o);return{projectService:new Lm(o),evaluationService:a,quickEvaluationService:new jm({evaluationService:a}),ruleSetService:new Ym(o),repositories:o,close:()=>n.close()}}const Qm=`id: area_descanso
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
`,Xm=`id: armario_vestiario
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
`,Zm=`id: assento_pmr_plateia
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
`,ep=`id: bacia_sanitaria
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
`,np=`id: balcao
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
`,op=`id: banco_vestiario
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
`,ap=`id: banheira_acessivel
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
`,rp=`id: barras_apoio
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
`,tp=`id: bebedouro
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
`,ip=`id: cabides
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
`,sp=`id: cabina_vestiario
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
`,lp=`id: caixa_autoatendimento
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
`,cp=`id: calcada
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
`,up=`id: chuveiro
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
`,dp=`id: corredores
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
`,mp=`id: corrimaos
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
`,pp=`id: degraus-isolados
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
`,fp=`id: elevadores
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
`,hp=`id: escadas
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
`,vp=`id: espaco_cao_guia
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
`,gp=`id: espaco_pcr_plateia
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
`,bp=`id: espelhos_acessiveis
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
`,_p=`id: estacionamento
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
`,yp=`id: guarda_corpos
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
`,Ap=`id: janelas
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
`,Np=`id: lavatorio
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
`,xp=`id: mesa
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
`,Bp=`id: mictorio
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
`,Tp=`id: papeleiras
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
`,Rp=`id: piscina
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
`,Sp=`id: piso-desnivel
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
`,Ep=`id: porta_objetos
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
`,Cp=`id: portas
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
`,Op=`id: sanitario_acessivel
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
`,Pp=`id: sinalizacao
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
`,kp=`id: vagas_acessiveis
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
`,Vp=Object.assign({"../rules/nbr9050-2020/area_descanso.yaml":Qm,"../rules/nbr9050-2020/armario_vestiario.yaml":Xm,"../rules/nbr9050-2020/assento_pmr_plateia.yaml":Zm,"../rules/nbr9050-2020/bacia_sanitaria.yaml":ep,"../rules/nbr9050-2020/balcao.yaml":np,"../rules/nbr9050-2020/banco_vestiario.yaml":op,"../rules/nbr9050-2020/banheira_acessivel.yaml":ap,"../rules/nbr9050-2020/barras_apoio.yaml":rp,"../rules/nbr9050-2020/bebedouro.yaml":tp,"../rules/nbr9050-2020/cabides.yaml":ip,"../rules/nbr9050-2020/cabina_vestiario.yaml":sp,"../rules/nbr9050-2020/caixa_autoatendimento.yaml":lp,"../rules/nbr9050-2020/calcada.yaml":cp,"../rules/nbr9050-2020/chuveiro.yaml":up,"../rules/nbr9050-2020/corredores.yaml":dp,"../rules/nbr9050-2020/corrimaos.yaml":mp,"../rules/nbr9050-2020/degraus-isolados.yaml":pp,"../rules/nbr9050-2020/elevadores.yaml":fp,"../rules/nbr9050-2020/escadas.yaml":hp,"../rules/nbr9050-2020/espaco_cao_guia.yaml":vp,"../rules/nbr9050-2020/espaco_pcr_plateia.yaml":gp,"../rules/nbr9050-2020/espelhos_acessiveis.yaml":bp,"../rules/nbr9050-2020/estacionamento.yaml":_p,"../rules/nbr9050-2020/guarda_corpos.yaml":yp,"../rules/nbr9050-2020/janelas.yaml":Ap,"../rules/nbr9050-2020/lavatorio.yaml":Np,"../rules/nbr9050-2020/mesa.yaml":xp,"../rules/nbr9050-2020/mictorio.yaml":Bp,"../rules/nbr9050-2020/papeleiras.yaml":Tp,"../rules/nbr9050-2020/piscina.yaml":Rp,"../rules/nbr9050-2020/piso-desnivel.yaml":Sp,"../rules/nbr9050-2020/piso_tatil.yaml":wp,"../rules/nbr9050-2020/porta_objetos.yaml":Ep,"../rules/nbr9050-2020/portas.yaml":Cp,"../rules/nbr9050-2020/rampas.yaml":Ip,"../rules/nbr9050-2020/sanitario_acessivel.yaml":Op,"../rules/nbr9050-2020/sinalizacao.yaml":Pp,"../rules/nbr9050-2020/vagas_acessiveis.yaml":kp});async function Dp(){return Object.entries(Vp).map(([e,n])=>({path:e,ruleSet:nr.load(n)})).sort((e,n)=>e.ruleSet.nome.localeCompare(n.ruleSet.nome))}const Oo=typeof document<"u";function Tc(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function Lp(e){return e.__esModule||e[Symbol.toStringTag]==="Module"||e.default&&Tc(e.default)}const Ve=Object.assign;function rt(e,n){const o={};for(const a in n){const r=n[a];o[a]=Pn(r)?r.map(e):e(r)}return o}const ma=()=>{},Pn=Array.isArray;function _s(e,n){const o={};for(const a in e)o[a]=a in n?n[a]:e[a];return o}const Rc=/#/g,jp=/&/g,qp=/\//g,Mp=/=/g,Fp=/\?/g,Sc=/\+/g,$p=/%5B/g,zp=/%5D/g,wc=/%5E/g,Hp=/%60/g,Ec=/%7B/g,Up=/%7C/g,Cc=/%7D/g,Kp=/%20/g;function Qt(e){return e==null?"":encodeURI(""+e).replace(Up,"|").replace($p,"[").replace(zp,"]")}function Gp(e){return Qt(e).replace(Ec,"{").replace(Cc,"}").replace(wc,"^")}function St(e){return Qt(e).replace(Sc,"%2B").replace(Kp,"+").replace(Rc,"%23").replace(jp,"%26").replace(Hp,"`").replace(Ec,"{").replace(Cc,"}").replace(wc,"^")}function Wp(e){return St(e).replace(Mp,"%3D")}function Yp(e){return Qt(e).replace(Rc,"%23").replace(Fp,"%3F")}function Jp(e){return Yp(e).replace(qp,"%2F")}function Ba(e){if(e==null)return null;try{return decodeURIComponent(""+e)}catch{}return""+e}const Qp=/\/$/,Xp=e=>e.replace(Qp,"");function tt(e,n,o="/"){let a,r={},i="",s="";const l=n.indexOf("#");let c=n.indexOf("?");return c=l>=0&&c>l?-1:c,c>=0&&(a=n.slice(0,c),i=n.slice(c,l>0?l:n.length),r=e(i.slice(1))),l>=0&&(a=a||n.slice(0,l),s=n.slice(l,n.length)),a=of(a??n,o),{fullPath:a+i+s,path:a,query:r,hash:Ba(s)}}function Zp(e,n){const o=n.query?e(n.query):"";return n.path+(o&&"?")+o+(n.hash||"")}function ys(e,n){return!n||!e.toLowerCase().startsWith(n.toLowerCase())?e:e.slice(n.length)||"/"}function ef(e,n,o){const a=n.matched.length-1,r=o.matched.length-1;return a>-1&&a===r&&zo(n.matched[a],o.matched[r])&&Ic(n.params,o.params)&&e(n.query)===e(o.query)&&n.hash===o.hash}function zo(e,n){return(e.aliasOf||e)===(n.aliasOf||n)}function Ic(e,n){if(Object.keys(e).length!==Object.keys(n).length)return!1;for(var o in e)if(!nf(e[o],n[o]))return!1;return!0}function nf(e,n){return Pn(e)?As(e,n):Pn(n)?As(n,e):e?.valueOf()===n?.valueOf()}function As(e,n){return Pn(n)?e.length===n.length&&e.every((o,a)=>o===n[a]):e.length===1&&e[0]===n}function of(e,n){if(e.startsWith("/"))return e;if(!e)return n;const o=n.split("/"),a=e.split("/"),r=a[a.length-1];(r===".."||r===".")&&a.push("");let i=o.length-1,s,l;for(s=0;s<a.length;s++)if(l=a[s],l!==".")if(l==="..")i>1&&i--;else break;return o.slice(0,i).join("/")+"/"+a.slice(s).join("/")}const ro={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};let wt=(function(e){return e.pop="pop",e.push="push",e})({}),it=(function(e){return e.back="back",e.forward="forward",e.unknown="",e})({});function af(e){if(!e)if(Oo){const n=document.querySelector("base");e=n&&n.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),Xp(e)}const rf=/^[^#]+#/;function tf(e,n){return e.replace(rf,"#")+n}function sf(e,n){const o=document.documentElement.getBoundingClientRect(),a=e.getBoundingClientRect();return{behavior:n.behavior,left:a.left-o.left-(n.left||0),top:a.top-o.top-(n.top||0)}}const _r=()=>({left:window.scrollX,top:window.scrollY});function lf(e){let n;if("el"in e){const o=e.el,a=typeof o=="string"&&o.startsWith("#"),r=typeof o=="string"?a?document.getElementById(o.slice(1)):document.querySelector(o):o;if(!r)return;n=sf(r,e)}else n=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(n):window.scrollTo(n.left!=null?n.left:window.scrollX,n.top!=null?n.top:window.scrollY)}function Ns(e,n){return(history.state?history.state.position-n:-1)+e}const Et=new Map;function cf(e,n){Et.set(e,n)}function uf(e){const n=Et.get(e);return Et.delete(e),n}function df(e){return typeof e=="string"||e&&typeof e=="object"}function Oc(e){return typeof e=="string"||typeof e=="symbol"}let Ue=(function(e){return e[e.MATCHER_NOT_FOUND=1]="MATCHER_NOT_FOUND",e[e.NAVIGATION_GUARD_REDIRECT=2]="NAVIGATION_GUARD_REDIRECT",e[e.NAVIGATION_ABORTED=4]="NAVIGATION_ABORTED",e[e.NAVIGATION_CANCELLED=8]="NAVIGATION_CANCELLED",e[e.NAVIGATION_DUPLICATED=16]="NAVIGATION_DUPLICATED",e})({});const Pc=Symbol("");Ue.MATCHER_NOT_FOUND+"",Ue.NAVIGATION_GUARD_REDIRECT+"",Ue.NAVIGATION_ABORTED+"",Ue.NAVIGATION_CANCELLED+"",Ue.NAVIGATION_DUPLICATED+"";function Ho(e,n){return Ve(new Error,{type:e,[Pc]:!0},n)}function Kn(e,n){return e instanceof Error&&Pc in e&&(n==null||!!(e.type&n))}const mf=["params","query","hash"];function pf(e){if(typeof e=="string")return e;if(e.path!=null)return e.path;const n={};for(const o of mf)o in e&&(n[o]=e[o]);return JSON.stringify(n,null,2)}function ff(e){const n={};if(e===""||e==="?")return n;const o=(e[0]==="?"?e.slice(1):e).split("&");for(let a=0;a<o.length;++a){const r=o[a].replace(Sc," "),i=r.indexOf("="),s=Ba(i<0?r:r.slice(0,i)),l=i<0?null:Ba(r.slice(i+1));if(s in n){let c=n[s];Pn(c)||(c=n[s]=[c]),c.push(l)}else n[s]=l}return n}function xs(e){let n="";for(let o in e){const a=e[o];if(o=Wp(o),a==null){a!==void 0&&(n+=(n.length?"&":"")+o);continue}(Pn(a)?a.map(r=>r&&St(r)):[a&&St(a)]).forEach(r=>{r!==void 0&&(n+=(n.length?"&":"")+o,r!=null&&(n+="="+r))})}return n}function hf(e){const n={};for(const o in e){const a=e[o];a!==void 0&&(n[o]=Pn(a)?a.map(r=>r==null?null:""+r):a==null?a:""+a)}return n}const vf=Symbol(""),Bs=Symbol(""),yr=Symbol(""),Xt=Symbol(""),Ct=Symbol("");function ea(){let e=[];function n(a){return e.push(a),()=>{const r=e.indexOf(a);r>-1&&e.splice(r,1)}}function o(){e=[]}return{add:n,list:()=>e.slice(),reset:o}}function so(e,n,o,a,r,i=s=>s()){const s=a&&(a.enterCallbacks[r]=a.enterCallbacks[r]||[]);return()=>new Promise((l,c)=>{const u=f=>{f===!1?c(Ho(Ue.NAVIGATION_ABORTED,{from:o,to:n})):f instanceof Error?c(f):df(f)?c(Ho(Ue.NAVIGATION_GUARD_REDIRECT,{from:n,to:f})):(s&&a.enterCallbacks[r]===s&&typeof f=="function"&&s.push(f),l())},d=i(()=>e.call(a&&a.instances[r],n,o,u));let p=Promise.resolve(d);e.length<3&&(p=p.then(u)),p.catch(f=>c(f))})}function st(e,n,o,a,r=i=>i()){const i=[];for(const s of e)for(const l in s.components){let c=s.components[l];if(!(n!=="beforeRouteEnter"&&!s.instances[l]))if(Tc(c)){const u=(c.__vccOpts||c)[n];u&&i.push(so(u,o,a,s,l,r))}else{let u=c();i.push(()=>u.then(d=>{if(!d)throw new Error(`Couldn't resolve component "${l}" at "${s.path}"`);const p=Lp(d)?d.default:d;s.mods[l]=d,s.components[l]=p;const f=(p.__vccOpts||p)[n];return f&&so(f,o,a,s,l,r)()}))}}return i}function gf(e,n){const o=[],a=[],r=[],i=Math.max(n.matched.length,e.matched.length);for(let s=0;s<i;s++){const l=n.matched[s];l&&(e.matched.find(u=>zo(u,l))?a.push(l):o.push(l));const c=e.matched[s];c&&(n.matched.find(u=>zo(u,c))||r.push(c))}return[o,a,r]}let bf=()=>location.protocol+"//"+location.host;function kc(e,n){const{pathname:o,search:a,hash:r}=n,i=e.indexOf("#");if(i>-1){let s=r.includes(e.slice(i))?e.slice(i).length:1,l=r.slice(s);return l[0]!=="/"&&(l="/"+l),ys(l,"")}return ys(o,e)+a+r}function _f(e,n,o,a){let r=[],i=[],s=null;const l=({state:f})=>{const v=kc(e,location),x=o.value,w=n.value;let S=0;if(f){if(o.value=v,n.value=f,s&&s===x){s=null;return}S=w?f.position-w.position:0}else a(v);r.forEach(k=>{k(o.value,x,{delta:S,type:wt.pop,direction:S?S>0?it.forward:it.back:it.unknown})})};function c(){s=o.value}function u(f){r.push(f);const v=()=>{const x=r.indexOf(f);x>-1&&r.splice(x,1)};return i.push(v),v}function d(){if(document.visibilityState==="hidden"){const{history:f}=window;if(!f.state)return;f.replaceState(Ve({},f.state,{scroll:_r()}),"")}}function p(){for(const f of i)f();i=[],window.removeEventListener("popstate",l),window.removeEventListener("pagehide",d),document.removeEventListener("visibilitychange",d)}return window.addEventListener("popstate",l),window.addEventListener("pagehide",d),document.addEventListener("visibilitychange",d),{pauseListeners:c,listen:u,destroy:p}}function Ts(e,n,o,a=!1,r=!1){return{back:e,current:n,forward:o,replaced:a,position:window.history.length,scroll:r?_r():null}}function yf(e){const{history:n,location:o}=window,a={value:kc(e,o)},r={value:n.state};r.value||i(a.value,{back:null,current:a.value,forward:null,position:n.length-1,replaced:!0,scroll:null},!0);function i(c,u,d){const p=e.indexOf("#"),f=p>-1?(o.host&&document.querySelector("base")?e:e.slice(p))+c:bf()+e+c;try{n[d?"replaceState":"pushState"](u,"",f),r.value=u}catch(v){console.error(v),o[d?"replace":"assign"](f)}}function s(c,u){i(c,Ve({},n.state,Ts(r.value.back,c,r.value.forward,!0),u,{position:r.value.position}),!0),a.value=c}function l(c,u){const d=Ve({},r.value,n.state,{forward:c,scroll:_r()});i(d.current,d,!0),i(c,Ve({},Ts(a.value,c,null),{position:d.position+1},u),!1),a.value=c}return{location:a,state:r,push:l,replace:s}}function Af(e){e=af(e);const n=yf(e),o=_f(e,n.state,n.location,n.replace);function a(i,s=!0){s||o.pauseListeners(),history.go(i)}const r=Ve({location:"",base:e,go:a,createHref:tf.bind(null,e)},n,o);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>n.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>n.state.value}),r}let Ao=(function(e){return e[e.Static=0]="Static",e[e.Param=1]="Param",e[e.Group=2]="Group",e})({});var Ye=(function(e){return e[e.Static=0]="Static",e[e.Param=1]="Param",e[e.ParamRegExp=2]="ParamRegExp",e[e.ParamRegExpEnd=3]="ParamRegExpEnd",e[e.EscapeNext=4]="EscapeNext",e})(Ye||{});const Nf={type:Ao.Static,value:""},xf=/[a-zA-Z0-9_]/;function Bf(e){if(!e)return[[]];if(e==="/")return[[Nf]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function n(v){throw new Error(`ERR (${o})/"${u}": ${v}`)}let o=Ye.Static,a=o;const r=[];let i;function s(){i&&r.push(i),i=[]}let l=0,c,u="",d="";function p(){u&&(o===Ye.Static?i.push({type:Ao.Static,value:u}):o===Ye.Param||o===Ye.ParamRegExp||o===Ye.ParamRegExpEnd?(i.length>1&&(c==="*"||c==="+")&&n(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),i.push({type:Ao.Param,value:u,regexp:d,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):n("Invalid state to consume buffer"),u="")}function f(){u+=c}for(;l<e.length;){if(c=e[l++],c==="\\"&&o!==Ye.ParamRegExp){a=o,o=Ye.EscapeNext;continue}switch(o){case Ye.Static:c==="/"?(u&&p(),s()):c===":"?(p(),o=Ye.Param):f();break;case Ye.EscapeNext:f(),o=a;break;case Ye.Param:c==="("?o=Ye.ParamRegExp:xf.test(c)?f():(p(),o=Ye.Static,c!=="*"&&c!=="?"&&c!=="+"&&l--);break;case Ye.ParamRegExp:c===")"?d[d.length-1]=="\\"?d=d.slice(0,-1)+c:o=Ye.ParamRegExpEnd:d+=c;break;case Ye.ParamRegExpEnd:p(),o=Ye.Static,c!=="*"&&c!=="?"&&c!=="+"&&l--,d="";break;default:n("Unknown state");break}}return o===Ye.ParamRegExp&&n(`Unfinished custom RegExp for param "${u}"`),p(),s(),r}const Rs="[^/]+?",Tf={sensitive:!1,strict:!1,start:!0,end:!0};var cn=(function(e){return e[e._multiplier=10]="_multiplier",e[e.Root=90]="Root",e[e.Segment=40]="Segment",e[e.SubSegment=30]="SubSegment",e[e.Static=40]="Static",e[e.Dynamic=20]="Dynamic",e[e.BonusCustomRegExp=10]="BonusCustomRegExp",e[e.BonusWildcard=-50]="BonusWildcard",e[e.BonusRepeatable=-20]="BonusRepeatable",e[e.BonusOptional=-8]="BonusOptional",e[e.BonusStrict=.7000000000000001]="BonusStrict",e[e.BonusCaseSensitive=.25]="BonusCaseSensitive",e})(cn||{});const Rf=/[.+*?^${}()[\]/\\]/g;function Sf(e,n){const o=Ve({},Tf,n),a=[];let r=o.start?"^":"";const i=[];for(const u of e){const d=u.length?[]:[cn.Root];o.strict&&!u.length&&(r+="/");for(let p=0;p<u.length;p++){const f=u[p];let v=cn.Segment+(o.sensitive?cn.BonusCaseSensitive:0);if(f.type===Ao.Static)p||(r+="/"),r+=f.value.replace(Rf,"\\$&"),v+=cn.Static;else if(f.type===Ao.Param){const{value:x,repeatable:w,optional:S,regexp:k}=f;i.push({name:x,repeatable:w,optional:S});const N=k||Rs;if(N!==Rs){v+=cn.BonusCustomRegExp;try{`${N}`}catch(E){throw new Error(`Invalid custom RegExp for param "${x}" (${N}): `+E.message)}}let C=w?`((?:${N})(?:/(?:${N}))*)`:`(${N})`;p||(C=S&&u.length<2?`(?:/${C})`:"/"+C),S&&(C+="?"),r+=C,v+=cn.Dynamic,S&&(v+=cn.BonusOptional),w&&(v+=cn.BonusRepeatable),N===".*"&&(v+=cn.BonusWildcard)}d.push(v)}a.push(d)}if(o.strict&&o.end){const u=a.length-1;a[u][a[u].length-1]+=cn.BonusStrict}o.strict||(r+="/?"),o.end?r+="$":o.strict&&!r.endsWith("/")&&(r+="(?:/|$)");const s=new RegExp(r,o.sensitive?"":"i");function l(u){const d=u.match(s),p={};if(!d)return null;for(let f=1;f<d.length;f++){const v=d[f]||"",x=i[f-1];p[x.name]=v&&x.repeatable?v.split("/"):v}return p}function c(u){let d="",p=!1;for(const f of e){(!p||!d.endsWith("/"))&&(d+="/"),p=!1;for(const v of f)if(v.type===Ao.Static)d+=v.value;else if(v.type===Ao.Param){const{value:x,repeatable:w,optional:S}=v,k=x in u?u[x]:"";if(Pn(k)&&!w)throw new Error(`Provided param "${x}" is an array but it is not repeatable (* or + modifiers)`);const N=Pn(k)?k.join("/"):k;if(!N)if(S)f.length<2&&(d.endsWith("/")?d=d.slice(0,-1):p=!0);else throw new Error(`Missing required param "${x}"`);d+=N}}return d||"/"}return{re:s,score:a,keys:i,parse:l,stringify:c}}function wf(e,n){let o=0;for(;o<e.length&&o<n.length;){const a=n[o]-e[o];if(a)return a;o++}return e.length<n.length?e.length===1&&e[0]===cn.Static+cn.Segment?-1:1:e.length>n.length?n.length===1&&n[0]===cn.Static+cn.Segment?1:-1:0}function Vc(e,n){let o=0;const a=e.score,r=n.score;for(;o<a.length&&o<r.length;){const i=wf(a[o],r[o]);if(i)return i;o++}if(Math.abs(r.length-a.length)===1){if(Ss(a))return 1;if(Ss(r))return-1}return r.length-a.length}function Ss(e){const n=e[e.length-1];return e.length>0&&n[n.length-1]<0}const Ef={strict:!1,end:!0,sensitive:!1};function Cf(e,n,o){const a=Sf(Bf(e.path),o),r=Ve(a,{record:e,parent:n,children:[],alias:[]});return n&&!r.record.aliasOf==!n.record.aliasOf&&n.children.push(r),r}function If(e,n){const o=[],a=new Map;n=_s(Ef,n);function r(p){return a.get(p)}function i(p,f,v){const x=!v,w=Es(p);w.aliasOf=v&&v.record;const S=_s(n,p),k=[w];if("alias"in p){const E=typeof p.alias=="string"?[p.alias]:p.alias;for(const se of E)k.push(Es(Ve({},w,{components:v?v.record.components:w.components,path:se,aliasOf:v?v.record:w})))}let N,C;for(const E of k){const{path:se}=E;if(f&&se[0]!=="/"){const Q=f.record.path,$=Q[Q.length-1]==="/"?"":"/";E.path=f.record.path+(se&&$+se)}if(N=Cf(E,f,S),v?v.alias.push(N):(C=C||N,C!==N&&C.alias.push(N),x&&p.name&&!Cs(N)&&s(p.name)),Dc(N)&&c(N),w.children){const Q=w.children;for(let $=0;$<Q.length;$++)i(Q[$],N,v&&v.children[$])}v=v||N}return C?()=>{s(C)}:ma}function s(p){if(Oc(p)){const f=a.get(p);f&&(a.delete(p),o.splice(o.indexOf(f),1),f.children.forEach(s),f.alias.forEach(s))}else{const f=o.indexOf(p);f>-1&&(o.splice(f,1),p.record.name&&a.delete(p.record.name),p.children.forEach(s),p.alias.forEach(s))}}function l(){return o}function c(p){const f=kf(p,o);o.splice(f,0,p),p.record.name&&!Cs(p)&&a.set(p.record.name,p)}function u(p,f){let v,x={},w,S;if("name"in p&&p.name){if(v=a.get(p.name),!v)throw Ho(Ue.MATCHER_NOT_FOUND,{location:p});S=v.record.name,x=Ve(ws(f.params,v.keys.filter(C=>!C.optional).concat(v.parent?v.parent.keys.filter(C=>C.optional):[]).map(C=>C.name)),p.params&&ws(p.params,v.keys.map(C=>C.name))),w=v.stringify(x)}else if(p.path!=null)w=p.path,v=o.find(C=>C.re.test(w)),v&&(x=v.parse(w),S=v.record.name);else{if(v=f.name?a.get(f.name):o.find(C=>C.re.test(f.path)),!v)throw Ho(Ue.MATCHER_NOT_FOUND,{location:p,currentLocation:f});S=v.record.name,x=Ve({},f.params,p.params),w=v.stringify(x)}const k=[];let N=v;for(;N;)k.unshift(N.record),N=N.parent;return{name:S,path:w,params:x,matched:k,meta:Pf(k)}}e.forEach(p=>i(p));function d(){o.length=0,a.clear()}return{addRoute:i,resolve:u,removeRoute:s,clearRoutes:d,getRoutes:l,getRecordMatcher:r}}function ws(e,n){const o={};for(const a of n)a in e&&(o[a]=e[a]);return o}function Es(e){const n={path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:e.aliasOf,beforeEnter:e.beforeEnter,props:Of(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}};return Object.defineProperty(n,"mods",{value:{}}),n}function Of(e){const n={},o=e.props||!1;if("component"in e)n.default=o;else for(const a in e.components)n[a]=typeof o=="object"?o[a]:o;return n}function Cs(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function Pf(e){return e.reduce((n,o)=>Ve(n,o.meta),{})}function kf(e,n){let o=0,a=n.length;for(;o!==a;){const i=o+a>>1;Vc(e,n[i])<0?a=i:o=i+1}const r=Vf(e);return r&&(a=n.lastIndexOf(r,a-1)),a}function Vf(e){let n=e;for(;n=n.parent;)if(Dc(n)&&Vc(e,n)===0)return n}function Dc({record:e}){return!!(e.name||e.components&&Object.keys(e.components).length||e.redirect)}function Is(e){const n=He(yr),o=He(Xt),a=Le(()=>{const c=le(e.to);return n.resolve(c)}),r=Le(()=>{const{matched:c}=a.value,{length:u}=c,d=c[u-1],p=o.matched;if(!d||!p.length)return-1;const f=p.findIndex(zo.bind(null,d));if(f>-1)return f;const v=Os(c[u-2]);return u>1&&Os(d)===v&&p[p.length-1].path!==v?p.findIndex(zo.bind(null,c[u-2])):f}),i=Le(()=>r.value>-1&&qf(o.params,a.value.params)),s=Le(()=>r.value>-1&&r.value===o.matched.length-1&&Ic(o.params,a.value.params));function l(c={}){if(jf(c)){const u=n[le(e.replace)?"replace":"push"](le(e.to)).catch(ma);return e.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>u),u}return Promise.resolve()}return{route:a,href:Le(()=>a.value.href),isActive:i,isExactActive:s,navigate:l}}function Df(e){return e.length===1?e[0]:e}const Lf=wl({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:Is,setup(e,{slots:n}){const o=Sa(Is(e)),{options:a}=He(yr),r=Le(()=>({[Ps(e.activeClass,a.linkActiveClass,"router-link-active")]:o.isActive,[Ps(e.exactActiveClass,a.linkExactActiveClass,"router-link-exact-active")]:o.isExactActive}));return()=>{const i=n.default&&Df(n.default(o));return e.custom?i:Fo("a",{"aria-current":o.isExactActive?e.ariaCurrentValue:null,href:o.href,onClick:o.navigate,class:r.value},i)}}}),ke=Lf;function jf(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const n=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(n))return}return e.preventDefault&&e.preventDefault(),!0}}function qf(e,n){for(const o in n){const a=n[o],r=e[o];if(typeof a=="string"){if(a!==r)return!1}else if(!Pn(r)||r.length!==a.length||a.some((i,s)=>i.valueOf()!==r[s].valueOf()))return!1}return!0}function Os(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const Ps=(e,n,o)=>e??n??o,Mf=wl({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:n,slots:o}){const a=He(Ct),r=Le(()=>e.route||a.value),i=He(Bs,0),s=Le(()=>{let u=le(i);const{matched:d}=r.value;let p;for(;(p=d[u])&&!p.components;)u++;return u}),l=Le(()=>r.value.matched[s.value]);sa(Bs,Le(()=>s.value+1)),sa(vf,l),sa(Ct,r);const c=Te();return To(()=>[c.value,l.value,e.name],([u,d,p],[f,v,x])=>{d&&(d.instances[p]=u,v&&v!==d&&u&&u===f&&(d.leaveGuards.size||(d.leaveGuards=v.leaveGuards),d.updateGuards.size||(d.updateGuards=v.updateGuards))),u&&d&&(!v||!zo(d,v)||!f)&&(d.enterCallbacks[p]||[]).forEach(w=>w(u))},{flush:"post"}),()=>{const u=r.value,d=e.name,p=l.value,f=p&&p.components[d];if(!f)return ks(o.default,{Component:f,route:u});const v=p.props[d],x=v?v===!0?u.params:typeof v=="function"?v(u):v:null,S=Fo(f,Ve({},x,n,{onVnodeUnmounted:k=>{k.component.isUnmounted&&(p.instances[d]=null)},ref:c}));return ks(o.default,{Component:S,route:u})||S}}});function ks(e,n){if(!e)return null;const o=e(n);return o.length===1?o[0]:o}const Lc=Mf;function Ff(e){const n=If(e.routes,e),o=e.parseQuery||ff,a=e.stringifyQuery||xs,r=e.history,i=ea(),s=ea(),l=ea(),c=Au(ro);let u=ro;Oo&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const d=rt.bind(null,P=>""+P),p=rt.bind(null,Jp),f=rt.bind(null,Ba);function v(P,ce){let G,pe;return Oc(P)?(G=n.getRecordMatcher(P),pe=ce):pe=P,n.addRoute(pe,G)}function x(P){const ce=n.getRecordMatcher(P);ce&&n.removeRoute(ce)}function w(){return n.getRoutes().map(P=>P.record)}function S(P){return!!n.getRecordMatcher(P)}function k(P,ce){if(ce=Ve({},ce||c.value),typeof P=="string"){const y=tt(o,P,ce.path),V=n.resolve({path:y.path},ce),q=r.createHref(y.fullPath);return Ve(y,V,{params:f(V.params),hash:Ba(y.hash),redirectedFrom:void 0,href:q})}let G;if(P.path!=null)G=Ve({},P,{path:tt(o,P.path,ce.path).path});else{const y=Ve({},P.params);for(const V in y)y[V]==null&&delete y[V];G=Ve({},P,{params:p(y)}),ce.params=p(ce.params)}const pe=n.resolve(G,ce),Ae=P.hash||"";pe.params=d(f(pe.params));const h=Zp(a,Ve({},P,{hash:Gp(Ae),path:pe.path})),g=r.createHref(h);return Ve({fullPath:h,hash:Ae,query:a===xs?hf(P.query):P.query||{}},pe,{redirectedFrom:void 0,href:g})}function N(P){return typeof P=="string"?tt(o,P,c.value.path):Ve({},P)}function C(P,ce){if(u!==P)return Ho(Ue.NAVIGATION_CANCELLED,{from:ce,to:P})}function E(P){return $(P)}function se(P){return E(Ve(N(P),{replace:!0}))}function Q(P,ce){const G=P.matched[P.matched.length-1];if(G&&G.redirect){const{redirect:pe}=G;let Ae=typeof pe=="function"?pe(P,ce):pe;return typeof Ae=="string"&&(Ae=Ae.includes("?")||Ae.includes("#")?Ae=N(Ae):{path:Ae},Ae.params={}),Ve({query:P.query,hash:P.hash,params:Ae.path!=null?{}:P.params},Ae)}}function $(P,ce){const G=u=k(P),pe=c.value,Ae=P.state,h=P.force,g=P.replace===!0,y=Q(G,pe);if(y)return $(Ve(N(y),{state:typeof y=="object"?Ve({},Ae,y.state):Ae,force:h,replace:g}),ce||G);const V=G;V.redirectedFrom=ce;let q;return!h&&ef(a,pe,G)&&(q=Ho(Ue.NAVIGATION_DUPLICATED,{to:V,from:pe}),fn(pe,pe,!0,!1)),(q?Promise.resolve(q):Y(V,pe)).catch(I=>Kn(I)?Kn(I,Ue.NAVIGATION_GUARD_REDIRECT)?I:Ze(I):Re(I,V,pe)).then(I=>{if(I){if(Kn(I,Ue.NAVIGATION_GUARD_REDIRECT))return $(Ve({replace:g},N(I.to),{state:typeof I.to=="object"?Ve({},Ae,I.to.state):Ae,force:h}),ce||V)}else I=B(V,pe,!0,g,Ae);return F(V,pe,I),I})}function re(P,ce){const G=C(P,ce);return G?Promise.reject(G):Promise.resolve()}function ae(P){const ce=Sn.values().next().value;return ce&&typeof ce.runWithContext=="function"?ce.runWithContext(P):P()}function Y(P,ce){let G;const[pe,Ae,h]=gf(P,ce);G=st(pe.reverse(),"beforeRouteLeave",P,ce);for(const y of pe)y.leaveGuards.forEach(V=>{G.push(so(V,P,ce))});const g=re.bind(null,P,ce);return G.push(g),Ge(G).then(()=>{G=[];for(const y of i.list())G.push(so(y,P,ce));return G.push(g),Ge(G)}).then(()=>{G=st(Ae,"beforeRouteUpdate",P,ce);for(const y of Ae)y.updateGuards.forEach(V=>{G.push(so(V,P,ce))});return G.push(g),Ge(G)}).then(()=>{G=[];for(const y of h)if(y.beforeEnter)if(Pn(y.beforeEnter))for(const V of y.beforeEnter)G.push(so(V,P,ce));else G.push(so(y.beforeEnter,P,ce));return G.push(g),Ge(G)}).then(()=>(P.matched.forEach(y=>y.enterCallbacks={}),G=st(h,"beforeRouteEnter",P,ce,ae),G.push(g),Ge(G))).then(()=>{G=[];for(const y of s.list())G.push(so(y,P,ce));return G.push(g),Ge(G)}).catch(y=>Kn(y,Ue.NAVIGATION_CANCELLED)?y:Promise.reject(y))}function F(P,ce,G){l.list().forEach(pe=>ae(()=>pe(P,ce,G)))}function B(P,ce,G,pe,Ae){const h=C(P,ce);if(h)return h;const g=ce===ro,y=Oo?history.state:{};G&&(pe||g?r.replace(P.fullPath,Ve({scroll:g&&y&&y.scroll},Ae)):r.push(P.fullPath,Ae)),c.value=P,fn(P,ce,G,g),Ze()}let X;function ne(){X||(X=r.listen((P,ce,G)=>{if(!Ke.listening)return;const pe=k(P),Ae=Q(pe,Ke.currentRoute.value);if(Ae){$(Ve(Ae,{replace:!0,force:!0}),pe).catch(ma);return}u=pe;const h=c.value;Oo&&cf(Ns(h.fullPath,G.delta),_r()),Y(pe,h).catch(g=>Kn(g,Ue.NAVIGATION_ABORTED|Ue.NAVIGATION_CANCELLED)?g:Kn(g,Ue.NAVIGATION_GUARD_REDIRECT)?($(Ve(N(g.to),{force:!0}),pe).then(y=>{Kn(y,Ue.NAVIGATION_ABORTED|Ue.NAVIGATION_DUPLICATED)&&!G.delta&&G.type===wt.pop&&r.go(-1,!1)}).catch(ma),Promise.reject()):(G.delta&&r.go(-G.delta,!1),Re(g,pe,h))).then(g=>{g=g||B(pe,h,!1),g&&(G.delta&&!Kn(g,Ue.NAVIGATION_CANCELLED)?r.go(-G.delta,!1):G.type===wt.pop&&Kn(g,Ue.NAVIGATION_ABORTED|Ue.NAVIGATION_DUPLICATED)&&r.go(-1,!1)),F(pe,h,g)}).catch(ma)}))}let Ce=ea(),J=ea(),we;function Re(P,ce,G){Ze(P);const pe=J.list();return pe.length?pe.forEach(Ae=>Ae(P,ce,G)):console.error(P),Promise.reject(P)}function vn(){return we&&c.value!==ro?Promise.resolve():new Promise((P,ce)=>{Ce.add([P,ce])})}function Ze(P){return we||(we=!P,ne(),Ce.list().forEach(([ce,G])=>P?G(P):ce()),Ce.reset()),P}function fn(P,ce,G,pe){const{scrollBehavior:Ae}=e;if(!Oo||!Ae)return Promise.resolve();const h=!G&&uf(Ns(P.fullPath,0))||(pe||!G)&&history.state&&history.state.scroll||null;return Mo().then(()=>Ae(P,ce,h)).then(g=>g&&lf(g)).catch(g=>Re(g,P,ce))}const We=P=>r.go(P);let gn;const Sn=new Set,Ke={currentRoute:c,listening:!0,addRoute:v,removeRoute:x,clearRoutes:n.clearRoutes,hasRoute:S,getRoutes:w,resolve:k,options:e,push:E,replace:se,go:We,back:()=>We(-1),forward:()=>We(1),beforeEach:i.add,beforeResolve:s.add,afterEach:l.add,onError:J.add,isReady:vn,install(P){P.component("RouterLink",ke),P.component("RouterView",Lc),P.config.globalProperties.$router=Ke,Object.defineProperty(P.config.globalProperties,"$route",{enumerable:!0,get:()=>le(c)}),Oo&&!gn&&c.value===ro&&(gn=!0,E(r.location).catch(pe=>{}));const ce={};for(const pe in ro)Object.defineProperty(ce,pe,{get:()=>c.value[pe],enumerable:!0});P.provide(yr,Ke),P.provide(Xt,dl(ce)),P.provide(Ct,c);const G=P.unmount;Sn.add(P),P.unmount=function(){Sn.delete(P),Sn.size<1&&(u=ro,X&&X(),X=null,c.value=ro,gn=!1,we=!1),G()}}};function Ge(P){return P.reduce((ce,G)=>ce.then(()=>ae(G)),Promise.resolve())}return Ke}function jc(){return He(yr)}function Zt(e){return He(Xt)}const $f="/Extensao-26.2/icon-512.png";const go={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};const Vs=(...e)=>e.filter((n,o,a)=>!!n&&n.trim()!==""&&a.indexOf(n)===o).join(" ").trim();function lt(e){return e!=null}function zf(e,n={}){const o=n.attributeNames??{},a=f=>o[f]??f,r=e.size??e.width??go.width,i=e.size??e.height??go.height,s=e.aliases?.filter(f=>typeof f=="string"&&f.trim()!=="").map(f=>`lucide-${f}`)??[],l=[...e.name?[`lucide-${e.name}`]:[],...s],c=n.className?.split(" ").filter(Boolean)??[],u=n.includeDefaultClasses===!1?Vs(...c):Vs("lucide",...l,...c),d=n.absoluteStrokeWidth?Number(n.strokeWidth??go["stroke-width"])*Number(e.size??e.width??go.width)/Number(n.size??n.width??go.width):n.strokeWidth??go["stroke-width"];return["svg",{...Object.entries(go).reduce((f,[v,x])=>(f[a(v)]=x,f),{}),..."color"in n&&n.color&&{[a("stroke")]:n.color},..."size"in n&&lt(n.size)&&{[a("width")]:n.size,[a("height")]:n.size},..."width"in n&&lt(n.width)&&{[a("width")]:n.width},..."height"in n&&lt(n.height)&&{[a("height")]:n.height},[a("stroke-width")]:d,...u&&{[a("class")]:u},[a("viewBox")]:`0 0 ${r} ${i}`,...n.hasA11yProp===!1?{[a("aria-hidden")]:"true"}:{},..."attributes"in n&&n.attributes},e.node.map(f=>{const[v,x,w]=f,S=n.nonScalingStroke?{[a("vector-effect")]:"non-scaling-stroke",...x}:x;return w?[v,S,w]:[v,S]})]}const Hf=e=>{for(const n in e)if(n.startsWith("aria-")||n==="role"||n==="title")return!0;return!1};const Ma=e=>e==="";const Uf=e=>e?.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();const Kf=Symbol("lucide-icons");function Gf(){return He(Kf,{})}const Wf=({name:e,iconNode:n,"icon-node":o,icon:a={name:Uf(e),node:n??o,size:24,aliases:[]},absoluteStrokeWidth:r,"absolute-stroke-width":i,nonScalingStroke:s,"non-scaling-stroke":l,strokeWidth:c,"stroke-width":u,size:d,width:p=d,height:f=d,color:v,...x},{slots:w})=>{const{size:S,color:k,strokeWidth:N=2,absoluteStrokeWidth:C=!1,nonScalingStroke:E=!1,class:se=""}=Gf(),Q=Ma(r)||Ma(i)||r===!0||i===!0||C===!0,$=Ma(s)||Ma(l)||s===!0||l===!0||E===!0;delete x.class;const re=w.default?.(),[,ae,Y=[]]=zf(a,{color:v??k,width:p??d??S,height:f??d??S,strokeWidth:c??u??N,absoluteStrokeWidth:Q,nonScalingStroke:$,className:se,hasA11yProp:re!=null&&re.length>0||Hf(x),attributes:x});return Fo("svg",ae,[...Y.map(F=>Fo(...F)),...re??[]])};function Rn(e,n=[]){const o=typeof e=="string"?{name:e,node:n}:e;return(a,{slots:r})=>Fo(Wf,{...a,icon:o},r.default?{default:r.default}:void 0)}const Yf={name:"arrow-right",size:24,node:[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]},Jf=Rn(Yf);const Qf={name:"box",size:24,node:[["path",{d:"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",key:"hh9hay"}],["path",{d:"m3.3 7 8.7 5 8.7-5",key:"g66t2b"}],["path",{d:"M12 22V12",key:"d0xqtd"}]]},Xf=Rn(Qf);const Zf={name:"chevron-right",size:24,node:[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]},or=Rn(Zf);const eh={name:"chevron-left",size:24,node:[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]},Ro=Rn(eh);const nh={name:"circle-question-mark",size:24,node:[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",key:"1u773s"}],["path",{d:"M12 17h.01",key:"p32p05"}]],aliases:["help-circle","circle-help"]},qc=Rn(nh);const oh={name:"clipboard-check",size:24,node:[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1",key:"tgr4d6"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",key:"116196"}],["path",{d:"m9 14 2 2 4-4",key:"df797q"}]]},No=Rn(oh);const ah={name:"folder-kanban",size:24,node:[["path",{d:"M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z",key:"1fr9dc"}],["path",{d:"M8 10v4",key:"tgpxqk"}],["path",{d:"M12 10v2",key:"hh53o1"}],["path",{d:"M16 10v6",key:"1d6xys"}]]},Mc=Rn(ah);const rh={name:"folder-plus",size:24,node:[["path",{d:"M12 10v6",key:"1bos4e"}],["path",{d:"M9 13h6",key:"1uhe8q"}],["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",key:"1kt360"}]]},ar=Rn(rh);const th={name:"folder",size:24,node:[["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",key:"1kt360"}]]},Ds=Rn(th);const ih={name:"house",size:24,node:[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"r6nss1"}]],aliases:["home"]},sh=Rn(ih);const lh={name:"plus",size:24,node:[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]},Ls=Rn(lh);const ch={name:"trash",size:24,node:[["path",{d:"M10 11v6",key:"nco0om"}],["path",{d:"M14 11v6",key:"outv1u"}],["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",key:"miytrc"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",key:"e791ji"}]],aliases:["trash-2"]},Ar=Rn(ch),uh={class:"app-shell"},dh={class:"sidebar"},mh={class:"content",tabindex:"-1"},ph={key:0,class:"bottom-nav"},fh={__name:"AppLayout",setup(e){const n=Zt(),o=Le(()=>n.path.startsWith("/rules")?"rules":n.path.startsWith("/quick-evaluation")?"quick":"projects");return(a,r)=>(j(),ee("div",uh,[b("aside",dh,[W(le(ke),{class:"brand",to:"/projects"},{default:ye(()=>[...r[0]||(r[0]=[b("img",{class:"brand__mark",src:$f,alt:"Acesso Verificador"},null,-1),b("span",null,[Be("Acesso"),b("br"),b("small",null,"Verificador")],-1)])]),_:1}),b("nav",null,[W(le(ke),{class:un(["nav-item",{"is-active":o.value==="projects"}]),to:"/projects"},{default:ye(()=>[W(le(Ds),{size:20,"aria-hidden":"true"}),r[1]||(r[1]=b("span",null,"Projetos",-1))]),_:1},8,["class"]),W(le(ke),{class:un(["nav-item",{"is-active":o.value==="quick"}]),to:"/quick-evaluation"},{default:ye(()=>[W(le(No),{size:20,"aria-hidden":"true"}),r[2]||(r[2]=b("span",null,"Avaliação rápida",-1))]),_:1},8,["class"]),W(le(ke),{class:un(["nav-item",{"is-active":o.value==="rules"}]),to:"/rules"},{default:ye(()=>[W(le(No),{size:20,"aria-hidden":"true"}),r[3]||(r[3]=b("span",null,"Regras",-1))]),_:1},8,["class"])])]),b("main",mh,[hn(a.$slots,"default")]),le(n).meta.hideBottomNav?Ne("",!0):(j(),ee("nav",ph,[W(le(ke),{class:un(["nav-item",{"is-active":o.value==="projects"}]),to:"/projects"},{default:ye(()=>[W(le(Ds),{size:20,"aria-hidden":"true"}),r[4]||(r[4]=b("span",null,"Projetos",-1))]),_:1},8,["class"]),W(le(ke),{class:un(["nav-item",{"is-active":o.value==="quick"}]),to:"/quick-evaluation"},{default:ye(()=>[W(le(No),{size:20,"aria-hidden":"true"}),r[5]||(r[5]=b("span",null,"Avaliação rápida",-1))]),_:1},8,["class"]),W(le(ke),{class:un(["nav-item",{"is-active":o.value==="rules"}]),to:"/rules"},{default:ye(()=>[W(le(No),{size:20,"aria-hidden":"true"}),r[6]||(r[6]=b("span",null,"Regras",-1))]),_:1},8,["class"])]))]))}},ei=(e,n)=>{const o=e.__vccOpts||e;for(const[a,r]of n)o[a]=r;return o},hh={id:"confirm-popup-message",class:"confirm-popup__message"},vh={class:"confirm-popup__actions"},gh={__name:"ConfirmPopup",setup(e,{expose:n}){const o=Te(null),a=Te(null),r=Te(!1),i=Te(""),s=Te({top:"0px",left:"0px"});let l=null,c=null;function u(){if(!l||!o.value)return;const S=l.getBoundingClientRect(),k=o.value.getBoundingClientRect(),N=8,C=12,se=S.bottom+N+k.height<=window.innerHeight-C?S.bottom+N:Math.max(C,S.top-k.height-N),Q=Math.min(Math.max(C,S.left),Math.max(C,window.innerWidth-k.width-C));s.value={top:`${se}px`,left:`${Q}px`}}function d(S){!o.value?.contains(S.target)&&!l?.contains(S.target)&&v({restoreFocus:!1})}function p(S){S.key==="Escape"&&(S.preventDefault(),v())}function f(){document.removeEventListener("pointerdown",d,!0),document.removeEventListener("keydown",p),window.removeEventListener("resize",u),window.removeEventListener("scroll",u,!0)}function v({restoreFocus:S=!0}={}){if(!r.value)return;r.value=!1,f(),l?.removeAttribute("aria-expanded"),l?.removeAttribute("aria-controls");const k=l;l=null,c=null,S&&Mo(()=>k?.focus?.())}async function x(S){v({restoreFocus:!1}),l=S.target,i.value=S.message,c=S.onAccept,r.value=!0,l?.setAttribute("aria-expanded","true"),l?.setAttribute("aria-controls","confirm-popup"),await Mo(),u(),document.addEventListener("pointerdown",d,!0),document.addEventListener("keydown",p),window.addEventListener("resize",u),window.addEventListener("scroll",u,!0),a.value?.focus()}async function w(){const S=c;v({restoreFocus:!1}),await S?.()}return n({open:x}),Ht(()=>{f(),l?.removeAttribute("aria-expanded"),l?.removeAttribute("aria-controls")}),(S,k)=>(j(),Fe(Nl,{to:"body"},[r.value?(j(),ee("section",{key:0,id:"confirm-popup",ref_key:"popup",ref:o,class:"confirm-popup",role:"alertdialog","aria-modal":"false","aria-labelledby":"confirm-popup-message",style:Ra(s.value)},[b("p",hh,me(i.value),1),b("div",vh,[b("button",{ref_key:"cancelButton",ref:a,class:"confirm-popup__button confirm-popup__button--cancel",type:"button",onClick:k[0]||(k[0]=N=>v())}," Cancelar ",512),b("button",{class:"confirm-popup__button confirm-popup__button--accept",type:"button",onClick:w}," Excluir ")])],4)):Ne("",!0)]))}},bh=ei(gh,[["__scopeId","data-v-24856a3e"]]),_h={class:"welcome-popup",role:"dialog","aria-modal":"true","aria-labelledby":"welcome-title","aria-describedby":"welcome-description"},yh={class:"welcome-popup__content"},Ah={class:"welcome-popup__steps"},Nh={__name:"WelcomePopup",emits:["close"],setup(e,{emit:n}){const o=n,a=Te(null),r=Te(null);let i="";function s(l){if(l.key==="Escape"){o("close");return}l.key==="Tab"&&l.shiftKey&&document.activeElement===a.value?(l.preventDefault(),r.value?.focus()):l.key==="Tab"&&!l.shiftKey&&document.activeElement===r.value&&(l.preventDefault(),a.value?.focus())}return zn(()=>{document.addEventListener("keydown",s),i=document.body.style.overflow,document.body.style.overflow="hidden",a.value?.focus()}),Ut(()=>{document.removeEventListener("keydown",s),document.body.style.overflow=i}),(l,c)=>(j(),Fe(Nl,{to:"body"},[b("div",{class:"welcome-backdrop",onClick:c[2]||(c[2]=co(u=>o("close"),["self"]))},[b("section",_h,[b("button",{ref_key:"closeButton",ref:a,class:"welcome-popup__close",type:"button","aria-label":"Fechar apresentação",onClick:c[0]||(c[0]=u=>o("close"))}," × ",512),c[8]||(c[8]=b("div",{class:"welcome-popup__hero"},[b("h1",{id:"welcome-title"},"Acessibilidade começa com atenção aos detalhes."),b("p",{id:"welcome-description"}," Este espaço ajuda você a organizar e apoiar avaliações de acessibilidade em locais e ambientes. ")],-1)),b("div",yh,[c[6]||(c[6]=b("h2",null,"Como funciona",-1)),b("div",Ah,[b("article",null,[W(le(Mc),{size:22,"aria-hidden":"true"}),c[3]||(c[3]=b("div",null,[b("h3",null,"Organize seus locais"),b("p",null,"Crie projetos, separe os ambientes e cadastre os elementos que deseja avaliar.")],-1))]),b("article",null,[W(le(No),{size:22,"aria-hidden":"true"}),c[4]||(c[4]=b("div",null,[b("h3",null,"Faça as verificações"),b("p",null,"Preencha checklists e consulte resultados por elemento, ambiente ou projeto.")],-1))])]),c[7]||(c[7]=b("p",{class:"welcome-popup__note"}," Os resultados são um apoio à avaliação e não substituem a análise de um profissional nem a consulta às normas aplicáveis. ",-1)),b("button",{ref_key:"actionButton",ref:r,class:"button welcome-popup__action",type:"button",onClick:c[1]||(c[1]=u=>o("close"))},[c[5]||(c[5]=Be(" Começar ",-1)),W(le(Jf),{size:18,"aria-hidden":"true"})],512)])])])]))}},xh=ei(Nh,[["__scopeId","data-v-4af1e780"]]);var Bh=Object.defineProperty,Th=Object.defineProperties,Rh=Object.getOwnPropertyDescriptors,js=Object.getOwnPropertySymbols,Sh=Object.prototype.hasOwnProperty,wh=Object.prototype.propertyIsEnumerable,qs=(e,n,o)=>n in e?Bh(e,n,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[n]=o,Eo=(e,n)=>{for(var o in n||(n={}))Sh.call(n,o)&&qs(e,o,n[o]);if(js)for(var o of js(n))wh.call(n,o)&&qs(e,o,n[o]);return e},Ms=(e,n)=>Th(e,Rh(n));const Eh={props:{autoscroll:{type:Boolean,default:!0}},watch:{typeAheadPointer(){this.autoscroll&&this.maybeAdjustScroll()},open(e){this.autoscroll&&e&&this.$nextTick(()=>this.maybeAdjustScroll())}},methods:{maybeAdjustScroll(){var e;const n=((e=this.$refs.dropdownMenu)==null?void 0:e.children[this.typeAheadPointer])||!1;if(n){const o=this.getDropdownViewport(),{top:a,bottom:r,height:i}=n.getBoundingClientRect();if(a<o.top)return this.$refs.dropdownMenu.scrollTop=n.offsetTop;if(r>o.bottom)return this.$refs.dropdownMenu.scrollTop=n.offsetTop-(o.height-i)}},getDropdownViewport(){return this.$refs.dropdownMenu?this.$refs.dropdownMenu.getBoundingClientRect():{height:0,top:0,bottom:0}}}},Ch={data(){return{typeAheadPointer:-1}},watch:{filteredOptions(){for(let e=0;e<this.filteredOptions.length;e++)if(this.selectable(this.filteredOptions[e])){this.typeAheadPointer=e;break}},open(e){e&&this.typeAheadToLastSelected()},selectedValue(){this.open&&this.typeAheadToLastSelected()}},methods:{typeAheadUp(){for(let e=this.typeAheadPointer-1;e>=0;e--)if(this.selectable(this.filteredOptions[e])){this.typeAheadPointer=e;break}},typeAheadDown(){for(let e=this.typeAheadPointer+1;e<this.filteredOptions.length;e++)if(this.selectable(this.filteredOptions[e])){this.typeAheadPointer=e;break}},typeAheadSelect(){const e=this.filteredOptions[this.typeAheadPointer];e&&this.selectable(e)&&this.select(e)},typeAheadToLastSelected(){this.typeAheadPointer=this.selectedValue.length!==0?this.filteredOptions.indexOf(this.selectedValue[this.selectedValue.length-1]):-1}}},Ih={props:{loading:{type:Boolean,default:!1}},data(){return{mutableLoading:!1}},watch:{search(){this.$emit("search",this.search,this.toggleLoading)},loading(e){this.mutableLoading=e}},methods:{toggleLoading(e=null){return e==null?this.mutableLoading=!this.mutableLoading:this.mutableLoading=e}}},ni=(e,n)=>{const o=e.__vccOpts||e;for(const[a,r]of n)o[a]=r;return o},Oh={},Ph={xmlns:"http://www.w3.org/2000/svg",width:"10",height:"10"},kh=b("path",{d:"M6.895455 5l2.842897-2.842898c.348864-.348863.348864-.914488 0-1.263636L9.106534.261648c-.348864-.348864-.914489-.348864-1.263636 0L5 3.104545 2.157102.261648c-.348863-.348864-.914488-.348864-1.263636 0L.261648.893466c-.348864.348864-.348864.914489 0 1.263636L3.104545 5 .261648 7.842898c-.348864.348863-.348864.914488 0 1.263636l.631818.631818c.348864.348864.914773.348864 1.263636 0L5 6.895455l2.842898 2.842897c.348863.348864.914772.348864 1.263636 0l.631818-.631818c.348864-.348864.348864-.914489 0-1.263636L6.895455 5z"},null,-1),Vh=[kh];function Dh(e,n){return j(),ee("svg",Ph,Vh)}const Lh=ni(Oh,[["render",Dh]]),jh={},qh={xmlns:"http://www.w3.org/2000/svg",width:"14",height:"10"},Mh=b("path",{d:"M9.211364 7.59931l4.48338-4.867229c.407008-.441854.407008-1.158247 0-1.60046l-.73712-.80023c-.407008-.441854-1.066904-.441854-1.474243 0L7 5.198617 2.51662.33139c-.407008-.441853-1.066904-.441853-1.474243 0l-.737121.80023c-.407008.441854-.407008 1.158248 0 1.600461l4.48338 4.867228L7 10l2.211364-2.40069z"},null,-1),Fh=[Mh];function $h(e,n){return j(),ee("svg",qh,Fh)}const zh=ni(jh,[["render",$h]]),Fs={Deselect:Lh,OpenIndicator:zh},Hh={mounted(e,{instance:n}){if(n.appendToBody){const{height:o,top:a,left:r,width:i}=n.$refs.toggle.getBoundingClientRect();let s=window.scrollX||window.pageXOffset,l=window.scrollY||window.pageYOffset;e.unbindPosition=n.calculatePosition(e,n,{width:i+"px",left:s+r+"px",top:l+a+o+"px"}),document.body.appendChild(e)}},unmounted(e,{instance:n}){n.appendToBody&&(e.unbindPosition&&typeof e.unbindPosition=="function"&&e.unbindPosition(),e.parentNode&&e.parentNode.removeChild(e))}};function Uh(e){const n={};return Object.keys(e).sort().forEach(o=>{n[o]=e[o]}),JSON.stringify(n)}let Kh=0;function Gh(){return++Kh}const Wh={components:Eo({},Fs),directives:{appendToBody:Hh},mixins:[Eh,Ch,Ih],compatConfig:{MODE:3},emits:["open","close","update:modelValue","search","search:compositionstart","search:compositionend","search:keydown","search:blur","search:focus","search:input","option:created","option:selecting","option:selected","option:deselecting","option:deselected"],props:{modelValue:{},components:{type:Object,default:()=>({})},options:{type:Array,default(){return[]}},disabled:{type:Boolean,default:!1},clearable:{type:Boolean,default:!0},deselectFromDropdown:{type:Boolean,default:!1},searchable:{type:Boolean,default:!0},multiple:{type:Boolean,default:!1},placeholder:{type:String,default:""},transition:{type:String,default:"vs__fade"},clearSearchOnSelect:{type:Boolean,default:!0},closeOnSelect:{type:Boolean,default:!0},label:{type:String,default:"label"},autocomplete:{type:String,default:"off"},reduce:{type:Function,default:e=>e},selectable:{type:Function,default:e=>!0},getOptionLabel:{type:Function,default(e){return typeof e=="object"?e.hasOwnProperty(this.label)?e[this.label]:console.warn(`[vue-select warn]: Label key "option.${this.label}" does not exist in options object ${JSON.stringify(e)}.
https://vue-select.org/api/props.html#getoptionlabel`):e}},getOptionKey:{type:Function,default(e){if(typeof e!="object")return e;try{return e.hasOwnProperty("id")?e.id:Uh(e)}catch(n){return console.warn(`[vue-select warn]: Could not stringify this option to generate unique key. Please provide'getOptionKey' prop to return a unique key for each option.
https://vue-select.org/api/props.html#getoptionkey`,e,n)}}},onTab:{type:Function,default:function(){this.selectOnTab&&!this.isComposing&&this.typeAheadSelect()}},taggable:{type:Boolean,default:!1},tabindex:{type:Number,default:null},pushTags:{type:Boolean,default:!1},filterable:{type:Boolean,default:!0},filterBy:{type:Function,default(e,n,o){return(n||"").toLocaleLowerCase().indexOf(o.toLocaleLowerCase())>-1}},filter:{type:Function,default(e,n){return e.filter(o=>{let a=this.getOptionLabel(o);return typeof a=="number"&&(a=a.toString()),this.filterBy(o,a,n)})}},createOption:{type:Function,default(e){return typeof this.optionList[0]=="object"?{[this.label]:e}:e}},resetOnOptionsChange:{default:!1,validator:e=>["function","boolean"].includes(typeof e)},clearSearchOnBlur:{type:Function,default:function({clearSearchOnSelect:e,multiple:n}){return e&&!n}},noDrop:{type:Boolean,default:!1},inputId:{type:String},dir:{type:String,default:"auto"},selectOnTab:{type:Boolean,default:!1},selectOnKeyCodes:{type:Array,default:()=>[13]},searchInputQuerySelector:{type:String,default:"[type=search]"},mapKeydown:{type:Function,default:(e,n)=>e},appendToBody:{type:Boolean,default:!1},calculatePosition:{type:Function,default(e,n,{width:o,top:a,left:r}){e.style.top=a,e.style.left=r,e.style.width=o}},dropdownShouldOpen:{type:Function,default({noDrop:e,open:n,mutableLoading:o}){return e?!1:n&&!o}},uid:{type:[String,Number],default:()=>Gh()}},data(){return{search:"",open:!1,isComposing:!1,pushedTags:[],_value:[],deselectButtons:[]}},computed:{isReducingValues(){return this.$props.reduce!==this.$options.props.reduce.default},isTrackingValues(){return typeof this.modelValue>"u"||this.isReducingValues},selectedValue(){let e=this.modelValue;return this.isTrackingValues&&(e=this.$data._value),e!=null&&e!==""?[].concat(e):[]},optionList(){return this.options.concat(this.pushTags?this.pushedTags:[])},searchEl(){return this.$slots.search?this.$refs.selectedOptions.querySelector(this.searchInputQuerySelector):this.$refs.search},scope(){const e={search:this.search,loading:this.loading,searching:this.searching,filteredOptions:this.filteredOptions};return{search:{attributes:Eo({disabled:this.disabled,placeholder:this.searchPlaceholder,tabindex:this.tabindex,readonly:!this.searchable,id:this.inputId,"aria-autocomplete":"list","aria-labelledby":`vs${this.uid}__combobox`,"aria-controls":`vs${this.uid}__listbox`,ref:"search",type:"search",autocomplete:this.autocomplete,value:this.search},this.dropdownOpen&&this.filteredOptions[this.typeAheadPointer]?{"aria-activedescendant":`vs${this.uid}__option-${this.typeAheadPointer}`}:{}),events:{compositionstart:()=>this.isComposing=!0,compositionend:()=>this.isComposing=!1,keydown:this.onSearchKeyDown,blur:this.onSearchBlur,focus:this.onSearchFocus,input:n=>this.search=n.target.value}},spinner:{loading:this.mutableLoading},noOptions:{search:this.search,loading:this.mutableLoading,searching:this.searching},openIndicator:{attributes:{ref:"openIndicator",role:"presentation",class:"vs__open-indicator"}},listHeader:e,listFooter:e,header:Ms(Eo({},e),{deselect:this.deselect}),footer:Ms(Eo({},e),{deselect:this.deselect})}},childComponents(){return Eo(Eo({},Fs),this.components)},stateClasses(){return{"vs--open":this.dropdownOpen,"vs--single":!this.multiple,"vs--multiple":this.multiple,"vs--searching":this.searching&&!this.noDrop,"vs--searchable":this.searchable&&!this.noDrop,"vs--unsearchable":!this.searchable,"vs--loading":this.mutableLoading,"vs--disabled":this.disabled}},searching(){return!!this.search},dropdownOpen(){return this.dropdownShouldOpen(this)},searchPlaceholder(){return this.isValueEmpty&&this.placeholder?this.placeholder:void 0},filteredOptions(){const e=[].concat(this.optionList);if(!this.filterable&&!this.taggable)return e;const n=this.search.length?this.filter(e,this.search,this):e;if(this.taggable&&this.search.length){const o=this.createOption(this.search);this.optionExists(o)||n.unshift(o)}return n},isValueEmpty(){return this.selectedValue.length===0},showClearButton(){return!this.multiple&&this.clearable&&!this.open&&!this.isValueEmpty}},watch:{options(e,n){const o=()=>typeof this.resetOnOptionsChange=="function"?this.resetOnOptionsChange(e,n,this.selectedValue):this.resetOnOptionsChange;!this.taggable&&o()&&this.clearSelection(),this.modelValue&&this.isTrackingValues&&this.setInternalValueFromOptions(this.modelValue)},modelValue:{immediate:!0,handler(e){this.isTrackingValues&&this.setInternalValueFromOptions(e)}},multiple(){this.clearSelection()},open(e){this.$emit(e?"open":"close")}},created(){this.mutableLoading=this.loading},methods:{setInternalValueFromOptions(e){Array.isArray(e)?this.$data._value=e.map(n=>this.findOptionFromReducedValue(n)):this.$data._value=this.findOptionFromReducedValue(e)},select(e){this.$emit("option:selecting",e),this.isOptionSelected(e)?this.deselectFromDropdown&&(this.clearable||this.multiple&&this.selectedValue.length>1)&&this.deselect(e):(this.taggable&&!this.optionExists(e)&&(this.$emit("option:created",e),this.pushTag(e)),this.multiple&&(e=this.selectedValue.concat(e)),this.updateValue(e),this.$emit("option:selected",e)),this.onAfterSelect(e)},deselect(e){this.$emit("option:deselecting",e),this.updateValue(this.selectedValue.filter(n=>!this.optionComparator(n,e))),this.$emit("option:deselected",e)},clearSelection(){this.updateValue(this.multiple?[]:null)},onAfterSelect(e){this.closeOnSelect&&(this.open=!this.open,this.searchEl.blur()),this.clearSearchOnSelect&&(this.search="")},updateValue(e){typeof this.modelValue>"u"&&(this.$data._value=e),e!==null&&(Array.isArray(e)?e=e.map(n=>this.reduce(n)):e=this.reduce(e)),this.$emit("update:modelValue",e)},toggleDropdown(e){const n=e.target!==this.searchEl;n&&e.preventDefault();const o=[...this.deselectButtons||[],this.$refs.clearButton];if(this.searchEl===void 0||o.filter(Boolean).some(a=>a.contains(e.target)||a===e.target)){e.preventDefault();return}this.open&&n?this.searchEl.blur():this.disabled||(this.open=!0,this.searchEl.focus())},isOptionSelected(e){return this.selectedValue.some(n=>this.optionComparator(n,e))},isOptionDeselectable(e){return this.isOptionSelected(e)&&this.deselectFromDropdown},optionComparator(e,n){return this.getOptionKey(e)===this.getOptionKey(n)},findOptionFromReducedValue(e){const n=a=>JSON.stringify(this.reduce(a))===JSON.stringify(e),o=[...this.options,...this.pushedTags].filter(n);return o.length===1?o[0]:o.find(a=>this.optionComparator(a,this.$data._value))||e},closeSearchOptions(){this.open=!1,this.$emit("search:blur")},maybeDeleteValue(){if(!this.searchEl.value.length&&this.selectedValue&&this.selectedValue.length&&this.clearable){let e=null;this.multiple&&(e=[...this.selectedValue.slice(0,this.selectedValue.length-1)]),this.updateValue(e)}},optionExists(e){return this.optionList.some(n=>this.optionComparator(n,e))},normalizeOptionForSlot(e){return typeof e=="object"?e:{[this.label]:e}},pushTag(e){this.pushedTags.push(e)},onEscape(){this.search.length?this.search="":this.searchEl.blur()},onSearchBlur(){if(this.mousedown&&!this.searching)this.mousedown=!1;else{const{clearSearchOnSelect:e,multiple:n}=this;this.clearSearchOnBlur({clearSearchOnSelect:e,multiple:n})&&(this.search=""),this.closeSearchOptions();return}if(this.search.length===0&&this.options.length===0){this.closeSearchOptions();return}},onSearchFocus(){this.open=!0,this.$emit("search:focus")},onMousedown(){this.mousedown=!0},onMouseUp(){this.mousedown=!1},onSearchKeyDown(e){const n=r=>(r.preventDefault(),!this.isComposing&&this.typeAheadSelect()),o={8:r=>this.maybeDeleteValue(),9:r=>this.onTab(),27:r=>this.onEscape(),38:r=>(r.preventDefault(),this.typeAheadUp()),40:r=>(r.preventDefault(),this.typeAheadDown())};this.selectOnKeyCodes.forEach(r=>o[r]=n);const a=this.mapKeydown(o,this);if(typeof a[e.keyCode]=="function")return a[e.keyCode](e)}}},Yh=["dir"],Jh=["id","aria-expanded","aria-owns"],Qh={ref:"selectedOptions",class:"vs__selected-options"},Xh=["disabled","title","aria-label","onClick"],Zh={ref:"actions",class:"vs__actions"},e0=["disabled"],n0={class:"vs__spinner"},o0=["id"],a0=["id","aria-selected","onMouseover","onClick"],r0={key:0,class:"vs__no-options"},t0=Be(" Sorry, no matching options. "),i0=["id"];function s0(e,n,o,a,r,i){const s=Qu("append-to-body");return j(),ee("div",{dir:o.dir,class:un(["v-select",i.stateClasses])},[hn(e.$slots,"header",wn(En(i.scope.header))),b("div",{id:`vs${o.uid}__combobox`,ref:"toggle",class:"vs__dropdown-toggle",role:"combobox","aria-expanded":i.dropdownOpen.toString(),"aria-owns":`vs${o.uid}__listbox`,"aria-label":"Search for option",onMousedown:n[1]||(n[1]=l=>i.toggleDropdown(l))},[b("div",Qh,[(j(!0),ee(Se,null,_n(i.selectedValue,(l,c)=>hn(e.$slots,"selected-option-container",{option:i.normalizeOptionForSlot(l),deselect:i.deselect,multiple:o.multiple,disabled:o.disabled},()=>[(j(),ee("span",{key:o.getOptionKey(l),class:"vs__selected"},[hn(e.$slots,"selected-option",wn(En(i.normalizeOptionForSlot(l))),()=>[Be(me(o.getOptionLabel(l)),1)]),o.multiple?(j(),ee("button",{key:0,ref_for:!0,ref:u=>r.deselectButtons[c]=u,disabled:o.disabled,type:"button",class:"vs__deselect",title:`Deselect ${o.getOptionLabel(l)}`,"aria-label":`Deselect ${o.getOptionLabel(l)}`,onClick:u=>i.deselect(l)},[(j(),Fe(Sr(i.childComponents.Deselect)))],8,Xh)):Ne("",!0)]))])),256)),hn(e.$slots,"search",wn(En(i.scope.search)),()=>[b("input",xt({class:"vs__search"},i.scope.search.attributes,Xu(i.scope.search.events)),null,16)])],512),b("div",Zh,[Nn(b("button",{ref:"clearButton",disabled:o.disabled,type:"button",class:"vs__clear",title:"Clear Selected","aria-label":"Clear Selected",onClick:n[0]||(n[0]=(...l)=>i.clearSelection&&i.clearSelection(...l))},[(j(),Fe(Sr(i.childComponents.Deselect)))],8,e0),[[Ii,i.showClearButton]]),hn(e.$slots,"open-indicator",wn(En(i.scope.openIndicator)),()=>[o.noDrop?Ne("",!0):(j(),Fe(Sr(i.childComponents.OpenIndicator),wn(xt({key:0},i.scope.openIndicator.attributes)),null,16))]),hn(e.$slots,"spinner",wn(En(i.scope.spinner)),()=>[Nn(b("div",n0,"Loading...",512),[[Ii,e.mutableLoading]])])],512)],40,Jh),W($d,{name:o.transition},{default:ye(()=>[i.dropdownOpen?Nn((j(),ee("ul",{id:`vs${o.uid}__listbox`,ref:"dropdownMenu",key:`vs${o.uid}__listbox`,class:"vs__dropdown-menu",role:"listbox",tabindex:"-1",onMousedown:n[2]||(n[2]=co((...l)=>i.onMousedown&&i.onMousedown(...l),["prevent"])),onMouseup:n[3]||(n[3]=(...l)=>i.onMouseUp&&i.onMouseUp(...l))},[hn(e.$slots,"list-header",wn(En(i.scope.listHeader))),(j(!0),ee(Se,null,_n(i.filteredOptions,(l,c)=>(j(),ee("li",{id:`vs${o.uid}__option-${c}`,key:o.getOptionKey(l),role:"option",class:un(["vs__dropdown-option",{"vs__dropdown-option--deselect":i.isOptionDeselectable(l)&&c===e.typeAheadPointer,"vs__dropdown-option--selected":i.isOptionSelected(l),"vs__dropdown-option--highlight":c===e.typeAheadPointer,"vs__dropdown-option--disabled":!o.selectable(l)}]),"aria-selected":c===e.typeAheadPointer?!0:null,onMouseover:u=>o.selectable(l)?e.typeAheadPointer=c:null,onClick:co(u=>o.selectable(l)?i.select(l):null,["prevent","stop"])},[hn(e.$slots,"option",wn(En(i.normalizeOptionForSlot(l))),()=>[Be(me(o.getOptionLabel(l)),1)])],42,a0))),128)),i.filteredOptions.length===0?(j(),ee("li",r0,[hn(e.$slots,"no-options",wn(En(i.scope.noOptions)),()=>[t0])])):Ne("",!0),hn(e.$slots,"list-footer",wn(En(i.scope.listFooter)))],40,o0)),[[s]]):(j(),ee("ul",{key:1,id:`vs${o.uid}__listbox`,role:"listbox",style:{display:"none",visibility:"hidden"}},null,8,i0))]),_:3},8,["name"]),hn(e.$slots,"footer",wn(En(i.scope.footer)))],10,Yh)}const l0=ni(Wh,[["render",s0]]),c0={class:"page-header"},u0={class:"page-header__row"},d0={key:0},uo={__name:"PageHeader",props:{title:{type:String,required:!0},description:String},setup(e){return(n,o)=>(j(),ee("header",c0,[b("div",u0,[b("div",null,[b("h1",null,me(e.title),1),e.description?(j(),ee("p",d0,me(e.description),1)):Ne("",!0)]),hn(n.$slots,"action")])]))}},m0={class:"empty-state"},p0={key:0,class:"empty-state__actions"},$n={__name:"EmptyState",props:{title:String,text:String},setup(e){return(n,o)=>(j(),ee("section",m0,[o[0]||(o[0]=b("div",{class:"empty-state__icon","aria-hidden":"true"},"+",-1)),b("h2",null,me(e.title),1),b("p",null,me(e.text),1),n.$slots.default?(j(),ee("div",p0,[hn(n.$slots,"default")])):Ne("",!0)]))}};function It(e,n,o=""){const r=`${typeof n=="boolean"?n?"Sim":"Não":n}${o??""}`;switch(e){case">=":return`No mínimo ${r} (inclusive)`;case"<=":return`No máximo ${r} (inclusive)`;case">":return`Acima de ${r} (sem incluir o limite)`;case"<":return`Abaixo de ${r} (sem incluir o limite)`;case"==":case"eq":return`Igual a ${r}`;case"!=":return`Diferente de ${r}`;default:return r}}const f0={class:"ruleset-grid"},h0={class:"field"},v0=["value"],g0={class:"field"},b0={class:"ruleset-option"},_0={class:"ruleset-title"},y0={key:0,class:"ruleset-norma"},A0={key:0,class:"field"},N0={class:"field-name-input"},x0={id:"field-name-input__checkbox"},B0={class:"fields-grid"},T0={key:1},R0=["title","aria-label","aria-expanded","onClick"],S0={key:3,class:"parameter-definition"},w0={key:4,class:"expected-value"},E0=["onUpdate:modelValue"],C0=["onUpdate:modelValue"],I0=["value"],O0=["onUpdate:modelValue"],P0={class:"form-actions"},k0={__name:"ElementPage",props:{elementId:String,quick:Boolean},setup(e){const n=e,o=He("services"),a=He("builtInRuleSets"),r=Zt(),i=jc(),s=Te(null),l=Te(null),c=Te([]),u=Te([]),d=Te(null),p=Te("todas"),f=Te(localStorage.getItem("elementAutoName")==="true"),v=Te(null),x=Sa({name:"",ruleSet:"",data:{}}),w=Le(()=>!n.elementId),S=Le(()=>u.value.find(Y=>Y.id===x.ruleSet)),k=Le(()=>{const Y={};for(const F of S.value?.regras??[]){const B=F.tipo==="conditional"?(()=>{const X=x.data[F.parametro];if(X==null||X==="")return[];const ne=(F.condicoes??[]).find(Ce=>Ce.quando&&ua(X,Ce.quando.operador,Ce.quando.valor));return ne?.verificar?[ne.verificar]:[]})():F.operador&&F.valor!==void 0?[{...F,parametro:F.parametro}]:[];for(const X of B){if(!X.parametro||X.valor===void 0)continue;Y[X.parametro]??=[];const ne=It(X.operador,X.valor,S.value.parametros?.[X.parametro]?.unidade);Y[X.parametro].includes(ne)||Y[X.parametro].push(ne)}}return Y}),N=Le(()=>{const Y=u.value.map(F=>F.norma?.nome).filter(Boolean);return["todas",...new Set(Y)]}),C=Le(()=>p.value==="todas"?u.value:u.value.filter(Y=>Y.norma?.nome===p.value));async function E(){n.quick&&o.quickEvaluationService.clear();const Y=await o.ruleSetService.list();u.value=[...a.map(B=>B.ruleSet),...Y],w.value||(s.value=await o.repositories.elementRepository.get(n.elementId));const F=s.value?.environmentId??r.query.environmentId;if(!(!n.quick&&(!F||!w.value&&!s.value))){if(n.quick||(l.value=await o.repositories.environmentRepository.get(F),c.value=await o.projectService.listElements(F)),s.value){const B=await o.evaluationService.listEvaluations(s.value.id);d.value=B[0]}x.name=s.value?.name??"",x.ruleSet=r.query.ruleSet??s.value?.rule??u.value[0]?.id??"",Object.assign(x.data,d.value?.data??{})}}function se(){const Y={},F=S.value?.parametros??{};for(const[B,X]of Object.entries(F)){const ne=x.data[B];ne===""||ne===void 0||ne===null||(X.tipo==="number"?Y[B]=Number(ne):X.tipo==="boolean"?Y[B]=ne===!0||ne==="true":Y[B]=ne)}return Y}async function Q(){if(!S.value)return window.alert("Selecione um conjunto de regras.");const Y=se(),F={name:x.name,type:S.value.nome,rule:S.value.id};try{const B=s.value?await o.projectService.updateElement(s.value.id,F):await o.projectService.createElement(l.value.id,F);await o.evaluationService.saveElementData({elementId:B.id,data:Y}),i.push(`/projects/${l.value.projectId}/environments/${l.value.id}`)}catch(B){window.alert(B.message)}}function $(Y){if(!Y)return"";const F=new Set(c.value.filter(ne=>ne.id!==s.value?.id).map(ne=>ne.name));if(!F.has(Y))return Y;let B=1,X=`${Y} (${B})`;for(;F.has(X);)B++,X=`${Y} (${B})`;return X}To([f,()=>x.ruleSet],([Y,F])=>{if(localStorage.setItem("elementAutoName",String(Y)),Y){const X=u.value.find(ne=>ne.id===F)?.nome??"";x.name=$(X)}});async function re(){if(!S.value)return window.alert("Selecione um conjunto de regras.");const Y=se();if(n.quick){try{o.quickEvaluationService.evaluate({name:x.name,checklist:S.value,data:Y}),i.push("/quick-evaluation/result")}catch(B){window.alert(B.message)}return}const F={name:x.name,type:S.value.nome,rule:S.value.id};try{const B=s.value?await o.projectService.updateElement(s.value.id,F):await o.projectService.createElement(l.value.id,F);await o.evaluationService.evaluateElement({elementId:B.id,checklist:S.value,data:Y}),i.push(`/elements/${B.id}/evaluation`)}catch(B){window.alert(B.message)}}To(p,()=>{C.value.some(F=>F.id===x.ruleSet)||(x.ruleSet=C.value[0]?.id??"")}),To(()=>x.ruleSet,()=>{const Y=Object.keys(S.value?.parametros??{});Object.keys(x.data).forEach(F=>{Y.includes(F)||delete x.data[F]})});function ae(Y,F,B){const X=(B||"").toLowerCase().trim();if(!X)return!0;const ne=Y.nome?.toLowerCase().includes(X),Ce=Y.norma?.nome?.toLowerCase().includes(X),J=Y.regras?.some(we=>we.nome?.toLowerCase().includes(X)||we.id?.toLowerCase().includes(X));return!!(ne||Ce||J)}return zn(E),(Y,F)=>e.quick||l.value?(j(),ee(Se,{key:0},[e.quick?Ne("",!0):(j(),Fe(le(ke),{key:0,class:"back-link",to:`/projects/${l.value.projectId}/environments/${l.value.id}`},{default:ye(()=>[W(le(Ro),{size:18,"aria-hidden":"true"}),Be(me(l.value.name),1)]),_:1},8,["to"])),W(uo,{title:e.quick?"Avaliação rápida":w.value?"Novo elemento":s.value.name,description:"Escolha o tipo e informe as medidas observadas."},null,8,["title"]),b("form",{class:"form-card",onSubmit:F[5]||(F[5]=co(()=>{},["prevent"]))},[b("div",f0,[b("label",h0,[F[7]||(F[7]=b("span",null,"Norma de referência",-1)),Nn(b("select",{"onUpdate:modelValue":F[0]||(F[0]=B=>p.value=B)},[F[6]||(F[6]=b("option",{value:"todas"},"Todas as normas",-1)),(j(!0),ee(Se,null,_n(N.value.filter(B=>B!=="todas"),B=>(j(),ee("option",{key:B,value:B},me(B),9,v0))),128))],512),[[kr,p.value]])]),b("label",g0,[F[8]||(F[8]=b("span",null,"Tipo de elemento *",-1)),W(le(l0),{modelValue:x.ruleSet,"onUpdate:modelValue":F[1]||(F[1]=B=>x.ruleSet=B),options:C.value,label:"nome",reduce:B=>B.id,"filter-by":ae,placeholder:"Pesquise o elemento ou regra..."},{option:ye(B=>[b("div",b0,[b("span",_0,me(B.nome),1),B.norma?.nome?(j(),ee("small",y0," ("+me(B.norma.nome)+") ",1)):Ne("",!0)])]),_:1},8,["modelValue","options","reduce"])])]),e.quick?Ne("",!0):(j(),ee("label",A0,[b("div",N0,[F[9]||(F[9]=b("span",null,"Nome do elemento *",-1)),b("div",x0,[Nn(b("input",{type:"checkbox",id:"auto-name-chk","onUpdate:modelValue":F[2]||(F[2]=B=>f.value=B)},null,512),[[dm,f.value]]),b("p",{onClick:F[3]||(F[3]=co(B=>f.value=!f.value,["stop"]))},"Auto Nomear")])]),Nn(b("input",{"onUpdate:modelValue":F[4]||(F[4]=B=>x.name=B),required:"",placeholder:"Ex.: Porta principal"},null,512),[[Na,x.name]])])),F[13]||(F[13]=b("div",{class:"form-divider"},[b("strong",null,"Dados para avaliação"),b("span",null,"Campos definidos pelo conjunto de regras selecionado.")],-1)),b("div",B0,[(j(!0),ee(Se,null,_n(S.value?.parametros,(B,X)=>(j(),ee("label",{key:X,class:"field"},[b("span",null,[Be(me(B.label??X)+" ",1),B.obrigatorio?(j(),ee(Se,{key:0},[Be(" *")],64)):Ne("",!0),B.unidade?(j(),ee("small",T0," ("+me(B.unidade)+")",1)):Ne("",!0),B.definicao?(j(),ee("button",{key:2,class:"parameter-help",type:"button",title:B.definicao,"aria-label":`Definição: ${B.label??X}`,"aria-expanded":v.value===X,onClick:co(ne=>v.value=v.value===X?null:X,["stop"])},[W(le(qc),{size:16,"aria-hidden":"true"})],8,R0)):Ne("",!0),B.definicao&&v.value===X?(j(),ee("small",S0,me(B.definicao),1)):Ne("",!0),k.value[X]?.length?(j(),ee("small",w0," Esperado: "+me(k.value[X].join(" ou ")),1)):Ne("",!0)]),B.tipo==="boolean"?Nn((j(),ee("select",{key:0,"onUpdate:modelValue":ne=>x.data[X]=ne},[...F[10]||(F[10]=[b("option",{value:""},"Não informado",-1),b("option",{value:!0},"Sim",-1),b("option",{value:!1},"Não",-1)])],8,E0)),[[kr,x.data[X]]]):B.tipo==="select"?Nn((j(),ee("select",{key:1,"onUpdate:modelValue":ne=>x.data[X]=ne},[F[11]||(F[11]=b("option",{value:""},"Selecione",-1)),(j(!0),ee(Se,null,_n(B.opcoes??[],ne=>(j(),ee("option",{key:ne,value:ne},me(ne),9,I0))),128))],8,C0)),[[kr,x.data[X]]]):Nn((j(),ee("input",{key:2,"onUpdate:modelValue":ne=>x.data[X]=ne,type:"number",inputmode:"decimal",step:"any"},null,8,O0)),[[Na,x.data[X],void 0,{number:!0}]])]))),128))]),b("div",P0,[W(le(ke),{class:"button button--ghost",to:e.quick?"/projects":`/projects/${l.value.projectId}/environments/${l.value.id}`},{default:ye(()=>[...F[12]||(F[12]=[Be(" Cancelar ",-1)])]),_:1},8,["to"]),e.quick?Ne("",!0):(j(),ee("button",{key:0,class:"button button--outline",type:"button",onClick:Q}," Salvar e voltar ")),b("button",{class:"button",type:"button",onClick:re},me(e.quick?"Avaliar":"Salvar e avaliar"),1)])],32)],64)):(j(),Fe($n,{key:1,title:"Elemento não encontrado",text:"Volte para o ambiente e tente novamente."},{default:ye(()=>[W(le(ke),{class:"button",to:"/projects"},{default:ye(()=>[...F[14]||(F[14]=[Be("Projetos",-1)])]),_:1})]),_:1}))}},ct=ei(k0,[["__scopeId","data-v-ddaf12a5"]]),rr={__name:"StatusBadge",props:{status:{type:String,default:"nao_avaliado"}},setup(e){const n={conforme:"Conforme",nao_conforme:"Não conforme",nao_avaliado:"Pendente",invalido:"Pendente",erro:"Pendente",atencao:"Atenção",manual:"Verificar"};return(o,a)=>(j(),ee("span",{class:un(["status",`status--${e.status}`])},me(n[e.status]??"Pendente"),3))}},V0={class:"evaluation-summary","aria-labelledby":"evaluation-summary-title"},D0={class:"evaluation-summary__heading"},L0={id:"evaluation-summary-title"},j0={class:"evaluation-summary__score"},q0={class:"evaluation-summary__cards"},M0={class:"evaluation-summary__card evaluation-summary__card--conforme"},F0={class:"evaluation-summary__card evaluation-summary__card--nao_conforme"},$0={class:"evaluation-summary__card evaluation-summary__card--nao_avaliado"},Fc={__name:"EvaluationSummary",props:{summary:{type:Object,required:!0},scope:{type:String,default:"elementos"}},setup(e){const n=e,o=Le(()=>n.summary.totalElements?n.summary.overallStatus==="conforme"?"Todos os elementos estão conformes":n.summary.overallStatus==="nao_conforme"?"Há elementos não conformes":"Há elementos pendentes de avaliação":"Nenhum elemento cadastrado");return(a,r)=>(j(),ee("section",V0,[b("div",D0,[b("div",null,[b("h2",L0,"Situação do "+me(e.scope),1),b("p",null,me(o.value),1)]),b("div",j0,[b("strong",null,me(e.summary.score)+"%",1),r[0]||(r[0]=b("span",null,"conformes",-1))])]),b("div",q0,[b("div",M0,[r[1]||(r[1]=b("span",null,"Conformes",-1)),b("strong",null,me(e.summary.conforme),1)]),b("div",F0,[r[2]||(r[2]=b("span",null,"Não conformes",-1)),b("strong",null,me(e.summary.nao_conforme),1)]),b("div",$0,[r[3]||(r[3]=b("span",null,"Pendentes",-1)),b("strong",null,me(e.summary.nao_avaliado),1)])]),e.summary.totalElements?(j(),Fe(rr,{key:0,status:e.summary.overallStatus},null,8,["status"])):Ne("",!0)]))}},z0={key:1,class:"card-list collection-list"},H0={class:"card__icon"},U0={class:"card__menu"},K0=["onClick"],G0={__name:"EnvironmentPage",props:{projectId:String,environmentId:String},setup(e){const n=e,o=He("services"),a=He("confirmPopup"),r=Te(null),i=Te(null),s=Te([]),l=Te(null);function c(p,f){a.open({target:f.currentTarget,message:`Excluir o elemento ${p.name} e suas avaliações?`,onAccept:()=>u(p)})}async function u(p){const f=await o.evaluationService.listEvaluations(p.id);for(const v of f)await o.repositories.evaluationRepository.delete(v.id);await o.repositories.elementRepository.delete(p.id),await d()}async function d(){if(r.value=await o.repositories.environmentRepository.get(n.environmentId),!r.value)return;i.value=await o.projectService.getProject(r.value.projectId);const p=await o.projectService.listElements(r.value.id),[f,v]=await Promise.all([Promise.all(p.map(async x=>{const w=await o.evaluationService.listEvaluations(x.id);return{element:x,status:ic(w)}})),o.evaluationService.getEnvironmentSummary(r.value.id)]);s.value=f,l.value=v}return zn(d),(p,f)=>r.value?(j(),ee(Se,{key:0},[W(le(ke),{class:"back-link",to:`/projects/${r.value.projectId}`},{default:ye(()=>[W(le(Ro),{size:18,"aria-hidden":"true"}),Be(me(i.value?.name??"Projeto"),1)]),_:1},8,["to"]),W(uo,{title:r.value.name},{action:ye(()=>[s.value.length?(j(),Fe(le(ke),{key:0,class:"button",to:{path:"/elements/new",query:{environmentId:r.value.id}}},{default:ye(()=>[W(le(Ls),{size:18,"aria-hidden":"true"}),f[0]||(f[0]=Be("Adicionar elemento ",-1))]),_:1},8,["to"])):Ne("",!0)]),_:1},8,["title"]),l.value&&s.value.length?(j(),Fe(Fc,{key:0,summary:l.value,scope:"ambiente"},null,8,["summary"])):Ne("",!0),s.value.length?(j(),ee("div",z0,[(j(!0),ee(Se,null,_n(s.value,v=>(j(),ee("article",{key:v.element.id,class:"card card--interactive"},[W(le(ke),{class:"card__link",to:`/elements/${v.element.id}`},{default:ye(()=>[b("span",H0,[W(le(Xf),{size:22,"aria-hidden":"true"})]),b("div",null,[b("h2",null,me(v.element.name),1),b("p",null,me(v.element.type),1)]),W(rr,{status:v.status},null,8,["status"]),W(le(or),{size:20,class:"chevron","aria-hidden":"true"})]),_:2},1032,["to"]),b("div",U0,[b("button",{class:"icon-button icon-button--danger",title:"Excluir","aria-label":"Excluir",onClick:x=>c(v.element,x)},[W(le(Ar),{size:18,"aria-hidden":"true"})],8,K0)])]))),128))])):Ne("",!0),s.value.length?Ne("",!0):(j(),Fe($n,{key:2,class:"collection-empty",title:"Nenhum elemento ainda",text:"Cadastre portas, rampas, sanitários e outros itens para avaliar."},{default:ye(()=>[W(le(ke),{class:"button",to:{path:"/elements/new",query:{environmentId:r.value.id}}},{default:ye(()=>[W(le(Ls),{size:18,"aria-hidden":"true"}),f[1]||(f[1]=Be("Adicionar elemento ",-1))]),_:1},8,["to"])]),_:1}))],64)):(j(),Fe($n,{key:1,title:"Ambiente não encontrado",text:"Ele pode ter sido removido."},{default:ye(()=>[W(le(ke),{class:"button",to:"/projects"},{default:ye(()=>[...f[2]||(f[2]=[Be("Projetos",-1)])]),_:1})]),_:1}))}},W0={class:"result-summary__counts","aria-label":"Resumo das regras"},Y0={class:"results"},J0={class:"result-row__content"},Q0={key:0},X0={key:0,class:"result-values"},Z0={key:0,class:"result-values__context"},ev={key:1,class:"result-values__item"},nv={key:2,class:"result-values__item result-values__item--expected"},ov={key:1,class:"result-row__reference"},$s={__name:"EvaluationPage",props:{elementId:String,quick:Boolean},setup(e){const n=e,o=He("services"),a=He("builtInRuleSets"),r=Te(null),i=Te(null),s=Te(null),l=Te([]),c=Le(()=>i.value?`/projects/${i.value.projectId}/environments/${i.value.id}`:"/projects"),u=Le(()=>s.value?.result??[]),d=Le(()=>l.value.find(C=>C.id===r.value?.rule));function p(C){const E=d.value?.regras?.find(ne=>ne.id===C.id),se=s.value?.data??{},Q=d.value?.parametros??{};let $=C.parametro??E?.parametro,re=C.operador??E?.operador,ae=C.valorEsperado??E?.valor,Y="";if(E?.tipo==="conditional"){const ne=se[E.parametro],Ce=(E.condicoes??[]).find(J=>J.quando&&ua(ne,J.quando.operador,J.quando.valor));if(Ce?.verificar){$=Ce.verificar.parametro,re=Ce.verificar.operador,ae=Ce.verificar.valor;const J=Q[E.parametro];Y=`${J?.label??E.parametro}: ${It(Ce.quando.operador,Ce.quando.valor,J?.unidade)}`}}const F=Q[$]??{},B=C.valorInformado!==void 0?C.valorInformado:se[$],X=ae!==void 0&&re!==void 0;return{parameterLabel:F.label??$,actual:typeof B=="boolean"?B?"Sim":"Não":B,unit:typeof B=="boolean"?"":C.unidade??F.unidade??"",expected:X?It(re,ae,C.unidade??F.unidade):"",conditionalDescription:Y}}const f=Le(()=>u.value.filter(C=>["nao_conforme","erro","invalido"].includes(C.status)).length),v=Le(()=>u.value.filter(C=>["nao_avaliado","manual","atencao"].includes(C.status)).length),x=Le(()=>u.value.length-f.value-v.value),w=Le(()=>f.value>0?"nao_conforme":v.value>0?"nao_avaliado":"conforme"),S=Le(()=>{switch(w.value){case"conforme":return"Elemento conforme";case"nao_conforme":return"Há itens não conformes";default:return"Avaliação pendente"}});function k(C){return C?new Intl.DateTimeFormat("pt-BR",{dateStyle:"medium",timeStyle:"short"}).format(new Date(C)):""}async function N(){const C=await o.ruleSetService.list();if(l.value=[...(a??[]).map(E=>E.ruleSet),...C],n.quick){const E=o.quickEvaluationService.getCurrent();r.value=E?.element??null,s.value=E?.evaluation??null;return}if(r.value=await o.repositories.elementRepository.get(n.elementId),r.value){i.value=await o.repositories.environmentRepository.get(r.value.environmentId);const E=await o.evaluationService.listEvaluations(r.value.id);s.value=E[0]??null}}return zn(N),(C,E)=>r.value&&s.value?(j(),ee(Se,{key:0},[W(le(ke),{class:"back-link",to:e.quick?"/quick-evaluation":c.value},{default:ye(()=>[W(le(Ro),{size:18,"aria-hidden":"true"}),Be(me(r.value.name),1)]),_:1},8,["to"]),W(uo,{title:"Avaliação",description:`Realizada em ${k(s.value.evaluatedAt)}`},null,8,["description"]),b("section",{class:un(["result-summary",`result-summary--${w.value}`])},[W(rr,{status:w.value},null,8,["status"]),b("h2",null,me(S.value),1),b("div",W0,[b("span",null,[b("strong",null,me(x.value),1),E[0]||(E[0]=Be(" conformes",-1))]),b("span",null,[b("strong",null,me(f.value),1),E[1]||(E[1]=Be(" não conformes",-1))]),b("span",null,[b("strong",null,me(v.value),1),E[2]||(E[2]=Be(" pendentes ou para verificar",-1))])])],2),b("section",Y0,[E[5]||(E[5]=b("h2",null,"Regras avaliadas",-1)),(j(!0),ee(Se,null,_n(u.value,se=>(j(),ee("article",{key:se.id,class:un(["result-row",`result-row--${se.status}`])},[b("div",J0,[W(rr,{status:se.status},null,8,["status"]),b("h3",null,me(se.nome??se.id),1),se.mensagem?(j(),ee("p",Q0,me(se.mensagem),1)):Ne("",!0),(j(!0),ee(Se,null,_n([p(se)],Q=>(j(),ee("div",{key:se.id,class:"result-row__details"},[Q.actual!==void 0||Q.expected?(j(),ee("div",X0,[Q.conditionalDescription?(j(),ee("div",Z0,[E[3]||(E[3]=b("span",null,"Condição desta regra",-1)),b("strong",null,me(Q.conditionalDescription),1)])):Ne("",!0),Q.actual!==void 0?(j(),ee("div",ev,[b("span",null,"Valor informado · "+me(Q.parameterLabel),1),b("strong",null,[Be(me(Q.actual),1),Q.unit?(j(),ee(Se,{key:0},[Be(me(Q.unit),1)],64)):Ne("",!0)])])):Ne("",!0),Q.expected?(j(),ee("div",nv,[E[4]||(E[4]=b("span",null,"Critério esperado",-1)),b("strong",null,me(Q.expected),1)])):Ne("",!0)])):Ne("",!0)]))),128)),se.referencia?(j(),ee("small",ov,"Referência: "+me(se.referencia),1)):Ne("",!0)])],2))),128))]),e.quick?(j(),Fe(le(ke),{key:0,class:"button",to:"/quick-evaluation"},{default:ye(()=>[...E[6]||(E[6]=[Be(" Nova avaliação rápida ",-1)])]),_:1})):Ne("",!0)],64)):r.value?(j(),ee(Se,{key:1},[W(le(ke),{class:"back-link",to:e.quick?"/quick-evaluation":c.value},{default:ye(()=>[W(le(Ro),{size:18,"aria-hidden":"true"}),E[7]||(E[7]=Be("Elemento ",-1))]),_:1},8,["to"]),W($n,{title:"Ainda não há avaliação",text:"Preencha os dados do elemento para executar as regras."},{default:ye(()=>[W(le(ke),{class:"button",to:e.quick?"/quick-evaluation":`/elements/${r.value.id}`},{default:ye(()=>[Be(me(e.quick?"Nova avaliação rápida":"Avaliar elemento"),1)]),_:1},8,["to"])]),_:1})],64)):(j(),Fe($n,{key:2,title:"Avaliação não encontrada",text:e.quick?"Inicie uma avaliação rápida para ver o resultado.":"O elemento pode ter sido removido."},{default:ye(()=>[W(le(ke),{class:"button",to:e.quick?"/quick-evaluation":"/projects"},{default:ye(()=>[Be(me(e.quick?"Avaliação rápida":"Projetos"),1)]),_:1},8,["to"])]),_:1},8,["text"]))}},av={class:"collection-form__heading"},rv={class:"field"},tv={class:"environments-summary-container"},iv={key:0,class:"card-grid-environment collection-list"},sv={class:"card__icon"},lv={class:"card__menu"},cv=["onClick"],uv=["onClick"],dv={__name:"ProjectPage",props:{projectId:String},setup(e){const n=e,o=He("services"),a=He("confirmPopup"),r=Te(null),i=Te([]),s=Te(""),l=Te(null),c=Te(null),u=Te(null);async function d(){r.value=await o.projectService.getProject(n.projectId),r.value&&([i.value,c.value]=await Promise.all([o.projectService.listEnvironments(n.projectId),o.evaluationService.getProjectSummary(n.projectId)]))}async function p(){l.value={},s.value="",await Mo(),u.value?.scrollIntoView({behavior:"smooth"})}function f(k){l.value=k,s.value=k.name}function v(){l.value=null,s.value=""}async function x(){l.value?.id?await o.projectService.renameEnvironment(l.value.id,s.value):await o.projectService.createEnvironment(n.projectId,{name:s.value}),v(),await d()}function w(k,N){a.open({target:N.currentTarget,message:`Excluir o ambiente “${k.name}” e seus elementos?`,onAccept:()=>S(k)})}async function S(k){const N=await o.projectService.listElements(k.id);for(const C of N){const E=await o.evaluationService.listEvaluations(C.id);for(const se of E)await o.repositories.evaluationRepository.delete(se.id);await o.repositories.elementRepository.delete(C.id)}await o.repositories.environmentRepository.delete(k.id),await d()}return zn(d),(k,N)=>r.value?(j(),ee(Se,{key:0},[W(le(ke),{class:"back-link",to:"/projects"},{default:ye(()=>[W(le(Ro),{size:18,"aria-hidden":"true"}),N[1]||(N[1]=Be("Projetos",-1))]),_:1}),W(uo,{title:r.value.name,description:`${i.value.length} ambiente${i.value.length===1?"":"s"} cadastrado${i.value.length===1?"":"s"}.
      
${r.value.description}`},{action:ye(()=>[i.value.length?(j(),ee("button",{key:0,class:"button",onClick:p},[W(le(ar),{size:18,"aria-hidden":"true"}),N[2]||(N[2]=Be("Novo ambiente",-1))])):Ne("",!0)]),_:1},8,["title","description"]),l.value?(j(),ee("form",{key:0,class:"form-card collection-form",onSubmit:co(x,["prevent"]),ref_key:"inputCreate",ref:u},[b("div",av,[b("h2",null,me(l.value.id?"Nome do ambiente":"Novo ambiente"),1),N[3]||(N[3]=b("p",null,"Use um nome que ajude a identificar este espaço no projeto.",-1))]),b("label",rv,[N[4]||(N[4]=b("span",null,"Nome do ambiente",-1)),Nn(b("input",{"onUpdate:modelValue":N[0]||(N[0]=C=>s.value=C),required:"",autofocus:""},null,512),[[Na,s.value]])]),b("div",{class:"form-actions"},[b("button",{class:"button button--ghost",type:"button",onClick:v}," Cancelar "),N[5]||(N[5]=b("button",{class:"button",type:"submit"},"Salvar",-1))])],544)):Ne("",!0),c.value&&i.value.length?(j(),Fe(Fc,{key:1,summary:c.value,scope:"projeto"},null,8,["summary"])):Ne("",!0),b("div",tv,[i.value.length?(j(),ee("div",iv,[(j(!0),ee(Se,null,_n(i.value,C=>(j(),ee("article",{key:C.id,class:"card-environment"},[W(le(ke),{class:"card__link",to:`/projects/${r.value.id}/environments/${C.id}`},{default:ye(()=>[b("span",sv,[W(le(sh),{size:22,"aria-hidden":"true"})]),b("div",null,[b("h2",null,me(C.name),1),N[6]||(N[6]=b("p",null,"Ambiente",-1))])]),_:2},1032,["to"]),b("div",lv,[b("button",{class:"text-button",onClick:E=>f(C)}," Editar ",8,cv),b("button",{class:"icon-button icon-button--danger",title:"Excluir","aria-label":"Excluir",onClick:E=>w(C,E)},[W(le(Ar),{size:18,"aria-hidden":"true"})],8,uv)])]))),128))])):Ne("",!0),i.value.length?Ne("",!0):(j(),Fe($n,{key:1,class:"collection-empty",title:"Nenhum ambiente ainda",text:"Adicione espaços como entrada, banheiro ou circulação."},{default:ye(()=>[b("button",{class:"button",onClick:p},[W(le(ar),{size:18,"aria-hidden":"true"}),N[7]||(N[7]=Be("Novo ambiente",-1))])]),_:1}))])],64)):(j(),Fe($n,{key:1,title:"Projeto não encontrado",text:"Ele pode ter sido removido."},{default:ye(()=>[W(le(ke),{class:"button",to:"/projects"},{default:ye(()=>[...N[8]||(N[8]=[Be("Voltar aos projetos",-1)])]),_:1})]),_:1}))}},mv={class:"collection-form__heading"},pv={class:"fields-grid"},fv={class:"field"},hv={class:"field"},vv={key:0,class:"muted"},gv={key:1,class:"card-list collection-list"},bv={class:"card__icon"},_v={key:0},yv={class:"card__menu"},Av=["onClick"],Nv=["onClick"],xv={__name:"ProjectsPage",setup(e){const n=He("services"),o=He("confirmPopup"),a=Te([]),r=Te(""),i=Te(""),s=Te(null),l=Te("");async function c(){a.value=await n.projectService.listProjects()}function u(){s.value={},r.value="",i.value="",l.value=""}function d(S){s.value=S,r.value=S.name,l.value="",i.value=S.description||""}function p(){s.value=null,r.value="",i.value="",l.value=""}async function f(){try{l.value="",s.value?.id?await n.projectService.updateProject(s.value.id,{name:r.value,description:i.value}):await n.projectService.createProject({name:r.value,description:i.value}),r.value="",i.value="",s.value=null,await c()}catch(S){l.value=S.message}}function v(S,k){o.open({target:k.currentTarget,message:`Excluir o projeto “${S.name}” e seus dados?`,onAccept:()=>x(S)})}async function x(S){const k=await n.projectService.listEnvironments(S.id);for(const N of k){const C=await n.projectService.listElements(N.id);for(const E of C){const se=await n.evaluationService.listEvaluations(E.id);for(const Q of se)await n.repositories.evaluationRepository.delete(Q.id);await n.repositories.elementRepository.delete(E.id)}await n.repositories.environmentRepository.delete(N.id)}await n.repositories.projectRepository.delete(S.id),await c()}function w(S){return new Intl.DateTimeFormat("pt-BR",{dateStyle:"medium"}).format(new Date(S))}return zn(c),(S,k)=>(j(),ee(Se,null,[W(uo,{title:"Projetos",description:"Acompanhe seus locais e avaliações."},{action:ye(()=>[a.value.length?(j(),ee("button",{key:0,class:"button",onClick:u},[W(le(ar),{size:18,"aria-hidden":"true"}),k[2]||(k[2]=Be("Novo projeto",-1))])):Ne("",!0)]),_:1}),s.value?(j(),ee("form",{key:0,class:"form-card collection-form",onSubmit:co(f,["prevent"])},[b("div",mv,[b("h2",null,me(s.value.id?"Dados do projeto":"Novo projeto"),1),k[3]||(k[3]=b("p",null,"Defina um nome e, se quiser, uma breve descrição para este local.",-1))]),b("div",pv,[b("label",fv,[k[4]||(k[4]=b("span",null,"Nome do projeto",-1)),Nn(b("input",{"onUpdate:modelValue":k[0]||(k[0]=N=>r.value=N),required:"",autofocus:""},null,512),[[Na,r.value]])]),b("label",hv,[k[5]||(k[5]=b("span",null,[Be("Descrição "),b("small",null,"(opcional)")],-1)),Nn(b("input",{"onUpdate:modelValue":k[1]||(k[1]=N=>i.value=N)},null,512),[[Na,i.value]])])]),l.value?(j(),ee("p",vv,me(l.value),1)):Ne("",!0),b("div",{class:"form-actions"},[b("button",{class:"button button--ghost",type:"button",onClick:p}," Cancelar "),k[6]||(k[6]=b("button",{class:"button",type:"submit"},"Salvar",-1))])],32)):Ne("",!0),a.value.length?(j(),ee("div",gv,[(j(!0),ee(Se,null,_n(a.value,N=>(j(),ee("article",{key:N.id,class:"card project-card"},[W(le(ke),{class:"card__link",to:`/projects/${N.id}`},{default:ye(()=>[b("span",bv,[W(le(Mc),{size:22,"aria-hidden":"true"})]),b("div",null,[b("h2",null,me(N.name),1),b("p",null,"Atualizado em "+me(w(N.updatedAt)),1),N.description?(j(),ee("p",_v,me(N.description),1)):Ne("",!0)]),W(le(or),{size:20,class:"chevron","aria-hidden":"true"})]),_:2},1032,["to"]),b("div",yv,[b("button",{class:"text-button",onClick:C=>d(N)}," Editar ",8,Av),b("button",{class:"icon-button icon-button--danger",title:"Excluir","aria-label":"Excluir",onClick:C=>v(N,C)},[W(le(Ar),{size:18,"aria-hidden":"true"})],8,Nv)])]))),128))])):(j(),Fe($n,{key:2,class:"collection-empty",title:"Comece por um projeto",text:"Organize as avaliações de acessibilidade por obra ou local."},{default:ye(()=>[b("button",{class:"button",onClick:u},[W(le(ar),{size:18,"aria-hidden":"true"}),k[7]||(k[7]=Be("Novo projeto",-1))])]),_:1}))],64))}};function Bv(e=""){const n=e.replace(/^(\.\.\/|\.\/|\/)+/,"").split("/");return n.length>1?n.slice(0,-1).join("/"):""}function Tv(e,n){const[o]=e,a=o?.norma;return a?.nome?`${a.nome}${a.versao?` · ${a.versao}`:""}`:n.split("/").at(-1)?.replaceAll("-"," ")??"Regras padrão"}function Rv(e){const n=new Map;for(const o of e){const a=Bv(o.path)||o.ruleSet.id,r=n.get(a)??{id:a,source:"standard",ruleSets:[]};r.ruleSets.push(o.ruleSet),n.set(a,r)}return[...n.values()].map(o=>({...o,nome:Tv(o.ruleSets,o.id)})).sort((o,a)=>o.nome.localeCompare(a.nome))}function Sv(e){const n=new Map;for(const o of e){const a=o.grupo,r=a?.id??o.id,i=n.get(r)??{id:r,nome:a?.nome??o.nome,source:"user",ruleSets:[]};i.ruleSets.push(o),n.set(r,i)}return[...n.values()].sort((o,a)=>o.nome.localeCompare(a.nome))}const wv={class:"documentation"},Ev={class:"documentation__intro"},Cv={class:"documentation__icon"},Iv=["href"],Ov={class:"documentation__section"},Pv={key:0,class:"muted",role:"status"},kv={key:0,class:"alert alert--error",role:"alert"},Vv={class:"rules-section rules-section--first"},Dv={class:"card-list ruleset-list"},Lv={key:0,class:"ruleset-card__actions"},jv=["onClick"],qv=["onClick"],Mv=["onClick"],Fv={class:"rules-actions"},$v={class:"button import-button"},zv=["disabled"],Hv={class:"button button--outline import-button"},Uv=["disabled"],Kv={key:0,class:"muted",role:"status"},Gv={key:1,class:"alert alert--error",role:"alert"},Wv={key:2,class:"muted",role:"status"},Yv={key:3,class:"rules-library"},Jv={class:"rules-section rules-section--first rules-library__section"},Qv={class:"card-list rules-library__list"},Xv={class:"card__icon"},Zv={class:"rules-section rules-library__section"},eg={key:0,class:"card-list rules-library__list"},ng={class:"card__icon"},ut={__name:"RulesPage",props:{source:String,groupId:String,documentation:Boolean},setup(e){const n=e,o=He("services"),a=He("builtInRuleSets");jc();const r=He("confirmPopup"),i=Le(()=>"/Extensao-26.2/rule-engine-skill/SKILL.md"),s=Te([]),l=Te(!0),c=Te(!1),u=Te(""),d=Le(()=>s.value.filter(Q=>Q.source==="standard")),p=Le(()=>s.value.filter(Q=>Q.source==="user")),f=Le(()=>s.value.find(Q=>Q.source===n.source&&Q.id===n.groupId));function v(Q){return Q.regras?.length??0}function x(Q){return Object.keys(Q.parametros??{}).length}function w(Q){return Q.ruleSets.reduce(($,re)=>$+v(re),0)}async function S(){l.value=!0;try{const Q=await o.ruleSetService.list();s.value=[...Rv(a),...Sv(Q)]}finally{l.value=!1}}function k(Q){return`/rules/${encodeURIComponent(Q.source)}/${encodeURIComponent(Q.id)}`}async function N(Q){const $=[...Q.target.files??[]];if(!$.length)return;const re=$.filter(ne=>/\.(json|ya?ml)$/i.test(ne.name)),ae=$.length-re.length;if(!re.length){u.value="Nenhum arquivo .json, .yaml ou .yml encontrado.",Q.target.value="";return}u.value="",c.value=!0;const Y=re[0].webkitRelativePath?.split("/")[0],F={id:`importado-${Y||crypto.randomUUID()}`,nome:Y||(re.length===1?re[0].name.replace(/\.(json|ya?ml)$/i,""):"Regras importadas")},B=[];for(const ne of re)try{const Ce=await ne.text();/\.json$/i.test(ne.name)?await o.ruleSetService.importFromJson(Ce,F):await o.ruleSetService.importFromYaml(Ce,F)}catch(Ce){B.push(`${ne.name}: ${Ce.message}`)}const X=[];B.length&&X.push(re.length===1?B[0]:`${B.length} de ${re.length} arquivo(s) não importado(s) — ${B.join("; ")}`),ae&&X.push(`${ae} arquivo(s) ignorado(s) por não serem .json/.yaml/.yml.`),u.value=X.join(" "),await S(),Q.target.value="",c.value=!1}function C(Q,$){r.open({target:$.currentTarget,message:`Excluir "${Q.nome}"? Esta ação não pode ser desfeita.`,onAccept:()=>E(Q)})}async function E(Q){u.value="";try{await o.ruleSetService.delete(Q.id),await S()}catch($){u.value=$.message}}async function se(Q,$){try{const re=$==="json"?await o.ruleSetService.exportByIdToJson(Q.id):await o.ruleSetService.exportByIdToYaml(Q.id),ae=$==="json"?"application/json":"text/yaml",Y=document.createElement("a");Y.href=URL.createObjectURL(new Blob([re],{type:ae})),Y.download=`${Q.id}.${$}`,Y.click(),URL.revokeObjectURL(Y.href)}catch(re){u.value=re.message}}return zn(S),(Q,$)=>e.documentation?(j(),ee(Se,{key:0},[W(le(ke),{class:"back-link",to:"/rules"},{default:ye(()=>[W(le(Ro),{size:18,"aria-hidden":"true"}),$[0]||($[0]=Be("Conjuntos de regras",-1))]),_:1}),W(uo,{title:"Crie e importe regras",description:"Monte checklists em YAML para avaliar os elementos do seu projeto."}),b("div",wv,[$[6]||($[6]=Rd(`<section class="documentation__section"><h2>Formato mínimo de um checklist</h2><p>Cada arquivo é um checklist independente. Os campos obrigatórios são <code>id</code>, <code>nome</code>, <code>parametros</code> (objeto) e <code>regras</code> (lista). YAML e JSON são aceitos.</p><pre class="documentation-code"><code>id: bebedouros
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
      mensagem: Avaliar como rampa.</code></pre><p class="documentation__note"> Se nenhuma condição bater, o resultado fica <code>nao_avaliado</code>. Um parâmetro usado dentro de <code>verificar</code> (aqui, <code>possui_chanfro</code>) também precisa estar declarado em <code>parametros</code>. </p></details></section><section class="documentation__section"><h2>Resultados possíveis</h2><ul class="documentation__list"><li><code>conforme</code> / <code>nao_conforme</code> — comparação direta, ou condição explícita.</li><li><code>manual</code> — regra do tipo <code>checklist</code>.</li><li><code>atencao</code> — resultado explícito opcional numa condição de <code>conditional</code>.</li><li><code>nao_avaliado</code> — parâmetro opcional sem valor, ou nenhuma condição satisfeita.</li><li><code>invalido</code> — parâmetro obrigatório sem valor preenchido.</li></ul></section>`,4)),b("section",Ev,[b("span",Cv,[W(le(qc),{size:24,"aria-hidden":"true"})]),b("div",null,[$[1]||($[1]=b("h1",null,"Crie suas regras com IA",-1)),b("a",{class:"button button--outline",href:`${i.value}`,download:"SKILL.md"}," Baixar SKILL.md ",8,Iv),$[2]||($[2]=b("p",null,"Um arquivo de texto com instruções prontas para uma IA (Claude, ChatGPT, Cursor) gerar checklists neste formato a partir do que você descrever. Baixe, cole numa conversa com a IA e peça a regra que precisa — sem aprender YAML.",-1))])]),b("section",Ov,[$[4]||($[4]=b("h2",null,"Importação",-1)),$[5]||($[5]=b("p",null,[Be("Escolha um ou mais arquivos YAML/JSON, ou uma pasta com vários checklists — arquivos que não forem "),b("code",null,".yaml"),Be(", "),b("code",null,".yml"),Be(" ou "),b("code",null,".json"),Be(" são ignorados automaticamente. Tudo fica armazenado somente neste navegador.")],-1)),W(le(ke),{class:"button",to:"/rules"},{default:ye(()=>[...$[3]||($[3]=[Be("Ir para importação",-1)])]),_:1})])])],64)):e.groupId?(j(),ee(Se,{key:1},[W(le(ke),{class:"back-link",to:"/rules"},{default:ye(()=>[W(le(Ro),{size:18,"aria-hidden":"true"}),$[7]||($[7]=Be("Conjuntos de regras",-1))]),_:1}),l.value?(j(),ee("p",Pv,"Carregando…")):f.value?(j(),ee(Se,{key:1},[W(uo,{title:f.value.nome,description:`${f.value.ruleSets.length} checklists que compõem este conjunto.`},null,8,["title","description"]),u.value?(j(),ee("p",kv,me(u.value),1)):Ne("",!0),b("section",Vv,[$[8]||($[8]=b("h2",null,"Checklists",-1)),b("div",Dv,[(j(!0),ee(Se,null,_n(f.value.ruleSets,re=>(j(),ee("article",{key:re.id,class:"card ruleset-card"},[b("div",null,[b("h2",null,me(re.nome),1),b("p",null,me(re.norma?.nome??"Conjunto personalizado"),1),b("small",null,me(v(re))+" regras · "+me(x(re))+" campos",1)]),e.source==="user"?(j(),ee("div",Lv,[b("button",{class:"button button--outline",onClick:ae=>se(re,"yaml")},"Exportar YAML",8,jv),b("button",{class:"button button--outline",onClick:ae=>se(re,"json")},"Exportar JSON",8,qv),b("button",{class:"icon-button icon-button--danger",title:"Excluir","aria-label":"Excluir",onClick:ae=>C(re,ae)},[W(le(Ar),{size:18,"aria-hidden":"true"})],8,Mv)])):Ne("",!0)]))),128))])])],64)):(j(),Fe($n,{key:2,title:"Conjunto não encontrado",text:"Ele pode ter sido removido."}))],64)):(j(),ee(Se,{key:2},[W(uo,{class:"rules-page-header",title:"Conjuntos de regras",description:"Cada pasta ou importação é exibida como um único conjunto."},{action:ye(()=>[b("div",Fv,[b("label",$v,[$[9]||($[9]=Be(" Importar arquivos ",-1)),b("input",{type:"file",accept:".json,.yaml,.yml",multiple:"",disabled:c.value,onChange:N},null,40,zv)]),b("label",Hv,[$[10]||($[10]=Be(" Importar pasta ",-1)),b("input",{type:"file",accept:".json,.yaml,.yml",webkitdirectory:"",disabled:c.value,onChange:N},null,40,Uv)]),W(le(ke),{class:"rules-help-link",to:"/rules/documentation"},{default:ye(()=>[...$[11]||($[11]=[Be("Como criar regras",-1)])]),_:1})])]),_:1}),c.value?(j(),ee("p",Kv,"Importando…")):Ne("",!0),u.value?(j(),ee("p",Gv,me(u.value),1)):Ne("",!0),l.value?(j(),ee("p",Wv,"Carregando…")):(j(),ee("div",Yv,[b("section",Jv,[$[12]||($[12]=b("h2",null,"Regras padrão",-1)),b("div",Qv,[(j(!0),ee(Se,null,_n(d.value,re=>(j(),Fe(le(ke),{key:re.id,class:"card card--interactive rules-card",to:k(re)},{default:ye(()=>[b("span",Xv,[W(le(No),{size:22,"aria-hidden":"true"})]),b("div",null,[b("h2",null,me(re.nome),1),b("p",null,me(re.ruleSets.length)+" checklists · "+me(w(re))+" regras",1)]),W(le(or),{size:20,class:"chevron","aria-hidden":"true"})]),_:2},1032,["to"]))),128))])]),b("section",Zv,[$[13]||($[13]=b("h2",null,"Suas regras",-1)),p.value.length?(j(),ee("div",eg,[(j(!0),ee(Se,null,_n(p.value,re=>(j(),Fe(le(ke),{key:re.id,class:"card card--interactive rules-card",to:k(re)},{default:ye(()=>[b("span",ng,[W(le(No),{size:22,"aria-hidden":"true"})]),b("div",null,[b("h2",null,me(re.nome),1),b("p",null,me(re.ruleSets.length)+" checklists",1)]),W(le(or),{size:20,class:"chevron","aria-hidden":"true"})]),_:2},1032,["to"]))),128))])):(j(),Fe($n,{key:1,title:"Nenhum conjunto importado",text:"Importe arquivos ou uma pasta para começar."}))])]))],64))}},og=[{path:"/",redirect:"/projects"},{path:"/projects",name:"projects",component:xv},{path:"/projects/:projectId",name:"project-detail",component:dv,props:!0},{path:"/projects/:projectId/environments/:environmentId",name:"project-environment",component:G0,props:!0},{path:"/elements/new",name:"element-new",component:ct,meta:{hideBottomNav:!0}},{path:"/elements/:elementId",name:"element-detail",component:ct,props:!0},{path:"/elements/:elementId/evaluation",name:"element-evaluation",component:$s,props:!0},{path:"/quick-evaluation",name:"quick-evaluation",component:ct,props:{quick:!0}},{path:"/quick-evaluation/result",name:"quick-evaluation-result",component:$s,props:{quick:!0}},{path:"/rules",name:"rules",component:ut},{path:"/rules/documentation",name:"rules-documentation",component:ut,props:{documentation:!0}},{path:"/rules/:source/:groupId",name:"rules-group",component:ut,props:!0},{path:"/:pathMatch(.*)*",redirect:"/projects"}],$c=Ff({history:Af("/Extensao-26.2/"),routes:og}),ag={__name:"App",setup(e){const n=Te(null),o=Te(!1),a=Zt();return sa("confirmPopup",{open:r=>n.value?.open(r)}),zn(async()=>{await $c.isReady();const r=window.matchMedia?.("(display-mode: standalone)")?.matches||navigator.standalone===!0,i=localStorage.getItem("welcomePopupSeen");a.path==="/projects"&&!r&&!i&&(localStorage.setItem("welcomePopupSeen","true"),o.value=!0)}),(r,i)=>(j(),ee(Se,null,[W(fh,null,{default:ye(()=>[W(le(Lc))]),_:1}),W(bh,{ref_key:"confirmPopup",ref:n},null,512),o.value?(j(),Fe(xh,{key:0,onClose:i[0]||(i[0]=s=>o.value=!1)})):Ne("",!0)],64))}};async function rg(){const[e,n]=await Promise.all([Jm(),Dp()]);vm(ag).provide("services",e).provide("builtInRuleSets",n).use($c).mount("#app"),Nm({immediate:!0})}rg().catch(e=>{document.querySelector("#app").innerHTML=`<main class="fatal-error"><h1>Não foi possível abrir o aplicativo</h1><p>${e.message}</p></main>`});
