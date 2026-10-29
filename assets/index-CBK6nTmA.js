(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))a(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const f of c.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&a(f)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function a(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();var $d={exports:{}},tl={};var Yx;function Ub(){if(Yx)return tl;Yx=1;var r=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function i(a,l,c){var f=null;if(c!==void 0&&(f=""+c),l.key!==void 0&&(f=""+l.key),"key"in l){c={};for(var p in l)p!=="key"&&(c[p]=l[p])}else c=l;return l=c.ref,{$$typeof:r,type:a,key:f,ref:l!==void 0?l:null,props:c}}return tl.Fragment=e,tl.jsx=i,tl.jsxs=i,tl}var Zx;function Lb(){return Zx||(Zx=1,$d.exports=Ub()),$d.exports}var M=Lb(),eh={exports:{}},st={};var Kx;function Ob(){if(Kx)return st;Kx=1;var r=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),f=Symbol.for("react.context"),p=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),h=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),v=Symbol.for("react.activity"),x=Symbol.iterator;function b(D){return D===null||typeof D!="object"?null:(D=x&&D[x]||D["@@iterator"],typeof D=="function"?D:null)}var T={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},C=Object.assign,y={};function _(D,ne,ve){this.props=D,this.context=ne,this.refs=y,this.updater=ve||T}_.prototype.isReactComponent={},_.prototype.setState=function(D,ne){if(typeof D!="object"&&typeof D!="function"&&D!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,D,ne,"setState")},_.prototype.forceUpdate=function(D){this.updater.enqueueForceUpdate(this,D,"forceUpdate")};function U(){}U.prototype=_.prototype;function z(D,ne,ve){this.props=D,this.context=ne,this.refs=y,this.updater=ve||T}var N=z.prototype=new U;N.constructor=z,C(N,_.prototype),N.isPureReactComponent=!0;var L=Array.isArray;function O(){}var I={H:null,A:null,T:null,S:null},A=Object.prototype.hasOwnProperty;function B(D,ne,ve){var Te=ve.ref;return{$$typeof:r,type:D,key:ne,ref:Te!==void 0?Te:null,props:ve}}function X(D,ne){return B(D.type,ne,D.props)}function q(D){return typeof D=="object"&&D!==null&&D.$$typeof===r}function Q(D){var ne={"=":"=0",":":"=2"};return"$"+D.replace(/[=:]/g,function(ve){return ne[ve]})}var fe=/\/+/g;function Y(D,ne){return typeof D=="object"&&D!==null&&D.key!=null?Q(""+D.key):ne.toString(36)}function te(D){switch(D.status){case"fulfilled":return D.value;case"rejected":throw D.reason;default:switch(typeof D.status=="string"?D.then(O,O):(D.status="pending",D.then(function(ne){D.status==="pending"&&(D.status="fulfilled",D.value=ne)},function(ne){D.status==="pending"&&(D.status="rejected",D.reason=ne)})),D.status){case"fulfilled":return D.value;case"rejected":throw D.reason}}throw D}function H(D,ne,ve,Te,Oe){var Xe=typeof D;(Xe==="undefined"||Xe==="boolean")&&(D=null);var oe=!1;if(D===null)oe=!0;else switch(Xe){case"bigint":case"string":case"number":oe=!0;break;case"object":switch(D.$$typeof){case r:case e:oe=!0;break;case g:return oe=D._init,H(oe(D._payload),ne,ve,Te,Oe)}}if(oe)return Oe=Oe(D),oe=Te===""?"."+Y(D,0):Te,L(Oe)?(ve="",oe!=null&&(ve=oe.replace(fe,"$&/")+"/"),H(Oe,ne,ve,"",function(tt){return tt})):Oe!=null&&(q(Oe)&&(Oe=X(Oe,ve+(Oe.key==null||D&&D.key===Oe.key?"":(""+Oe.key).replace(fe,"$&/")+"/")+oe)),ne.push(Oe)),1;oe=0;var _e=Te===""?".":Te+":";if(L(D))for(var Re=0;Re<D.length;Re++)Te=D[Re],Xe=_e+Y(Te,Re),oe+=H(Te,ne,ve,Xe,Oe);else if(Re=b(D),typeof Re=="function")for(D=Re.call(D),Re=0;!(Te=D.next()).done;)Te=Te.value,Xe=_e+Y(Te,Re++),oe+=H(Te,ne,ve,Xe,Oe);else if(Xe==="object"){if(typeof D.then=="function")return H(te(D),ne,ve,Te,Oe);throw ne=String(D),Error("Objects are not valid as a React child (found: "+(ne==="[object Object]"?"object with keys {"+Object.keys(D).join(", ")+"}":ne)+"). If you meant to render a collection of children, use an array instead.")}return oe}function F(D,ne,ve){if(D==null)return D;var Te=[],Oe=0;return H(D,Te,"","",function(Xe){return ne.call(ve,Xe,Oe++)}),Te}function J(D){if(D._status===-1){var ne=D._result;ne=ne(),ne.then(function(ve){(D._status===0||D._status===-1)&&(D._status=1,D._result=ve)},function(ve){(D._status===0||D._status===-1)&&(D._status=2,D._result=ve)}),D._status===-1&&(D._status=0,D._result=ne)}if(D._status===1)return D._result.default;throw D._result}var $=typeof reportError=="function"?reportError:function(D){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var ne=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof D=="object"&&D!==null&&typeof D.message=="string"?String(D.message):String(D),error:D});if(!window.dispatchEvent(ne))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",D);return}console.error(D)},he={map:F,forEach:function(D,ne,ve){F(D,function(){ne.apply(this,arguments)},ve)},count:function(D){var ne=0;return F(D,function(){ne++}),ne},toArray:function(D){return F(D,function(ne){return ne})||[]},only:function(D){if(!q(D))throw Error("React.Children.only expected to receive a single React element child.");return D}};return st.Activity=v,st.Children=he,st.Component=_,st.Fragment=i,st.Profiler=l,st.PureComponent=z,st.StrictMode=a,st.Suspense=m,st.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=I,st.__COMPILER_RUNTIME={__proto__:null,c:function(D){return I.H.useMemoCache(D)}},st.cache=function(D){return function(){return D.apply(null,arguments)}},st.cacheSignal=function(){return null},st.cloneElement=function(D,ne,ve){if(D==null)throw Error("The argument must be a React element, but you passed "+D+".");var Te=C({},D.props),Oe=D.key;if(ne!=null)for(Xe in ne.key!==void 0&&(Oe=""+ne.key),ne)!A.call(ne,Xe)||Xe==="key"||Xe==="__self"||Xe==="__source"||Xe==="ref"&&ne.ref===void 0||(Te[Xe]=ne[Xe]);var Xe=arguments.length-2;if(Xe===1)Te.children=ve;else if(1<Xe){for(var oe=Array(Xe),_e=0;_e<Xe;_e++)oe[_e]=arguments[_e+2];Te.children=oe}return B(D.type,Oe,Te)},st.createContext=function(D){return D={$$typeof:f,_currentValue:D,_currentValue2:D,_threadCount:0,Provider:null,Consumer:null},D.Provider=D,D.Consumer={$$typeof:c,_context:D},D},st.createElement=function(D,ne,ve){var Te,Oe={},Xe=null;if(ne!=null)for(Te in ne.key!==void 0&&(Xe=""+ne.key),ne)A.call(ne,Te)&&Te!=="key"&&Te!=="__self"&&Te!=="__source"&&(Oe[Te]=ne[Te]);var oe=arguments.length-2;if(oe===1)Oe.children=ve;else if(1<oe){for(var _e=Array(oe),Re=0;Re<oe;Re++)_e[Re]=arguments[Re+2];Oe.children=_e}if(D&&D.defaultProps)for(Te in oe=D.defaultProps,oe)Oe[Te]===void 0&&(Oe[Te]=oe[Te]);return B(D,Xe,Oe)},st.createRef=function(){return{current:null}},st.forwardRef=function(D){return{$$typeof:p,render:D}},st.isValidElement=q,st.lazy=function(D){return{$$typeof:g,_payload:{_status:-1,_result:D},_init:J}},st.memo=function(D,ne){return{$$typeof:h,type:D,compare:ne===void 0?null:ne}},st.startTransition=function(D){var ne=I.T,ve={};I.T=ve;try{var Te=D(),Oe=I.S;Oe!==null&&Oe(ve,Te),typeof Te=="object"&&Te!==null&&typeof Te.then=="function"&&Te.then(O,$)}catch(Xe){$(Xe)}finally{ne!==null&&ve.types!==null&&(ne.types=ve.types),I.T=ne}},st.unstable_useCacheRefresh=function(){return I.H.useCacheRefresh()},st.use=function(D){return I.H.use(D)},st.useActionState=function(D,ne,ve){return I.H.useActionState(D,ne,ve)},st.useCallback=function(D,ne){return I.H.useCallback(D,ne)},st.useContext=function(D){return I.H.useContext(D)},st.useDebugValue=function(){},st.useDeferredValue=function(D,ne){return I.H.useDeferredValue(D,ne)},st.useEffect=function(D,ne){return I.H.useEffect(D,ne)},st.useEffectEvent=function(D){return I.H.useEffectEvent(D)},st.useId=function(){return I.H.useId()},st.useImperativeHandle=function(D,ne,ve){return I.H.useImperativeHandle(D,ne,ve)},st.useInsertionEffect=function(D,ne){return I.H.useInsertionEffect(D,ne)},st.useLayoutEffect=function(D,ne){return I.H.useLayoutEffect(D,ne)},st.useMemo=function(D,ne){return I.H.useMemo(D,ne)},st.useOptimistic=function(D,ne){return I.H.useOptimistic(D,ne)},st.useReducer=function(D,ne,ve){return I.H.useReducer(D,ne,ve)},st.useRef=function(D){return I.H.useRef(D)},st.useState=function(D){return I.H.useState(D)},st.useSyncExternalStore=function(D,ne,ve){return I.H.useSyncExternalStore(D,ne,ve)},st.useTransition=function(){return I.H.useTransition()},st.version="19.2.3",st}var Qx;function zp(){return Qx||(Qx=1,eh.exports=Ob()),eh.exports}var ee=zp(),th={exports:{}},nl={},nh={exports:{}},ih={};var Jx;function Pb(){return Jx||(Jx=1,(function(r){function e(H,F){var J=H.length;H.push(F);e:for(;0<J;){var $=J-1>>>1,he=H[$];if(0<l(he,F))H[$]=F,H[J]=he,J=$;else break e}}function i(H){return H.length===0?null:H[0]}function a(H){if(H.length===0)return null;var F=H[0],J=H.pop();if(J!==F){H[0]=J;e:for(var $=0,he=H.length,D=he>>>1;$<D;){var ne=2*($+1)-1,ve=H[ne],Te=ne+1,Oe=H[Te];if(0>l(ve,J))Te<he&&0>l(Oe,ve)?(H[$]=Oe,H[Te]=J,$=Te):(H[$]=ve,H[ne]=J,$=ne);else if(Te<he&&0>l(Oe,J))H[$]=Oe,H[Te]=J,$=Te;else break e}}return F}function l(H,F){var J=H.sortIndex-F.sortIndex;return J!==0?J:H.id-F.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;r.unstable_now=function(){return c.now()}}else{var f=Date,p=f.now();r.unstable_now=function(){return f.now()-p}}var m=[],h=[],g=1,v=null,x=3,b=!1,T=!1,C=!1,y=!1,_=typeof setTimeout=="function"?setTimeout:null,U=typeof clearTimeout=="function"?clearTimeout:null,z=typeof setImmediate<"u"?setImmediate:null;function N(H){for(var F=i(h);F!==null;){if(F.callback===null)a(h);else if(F.startTime<=H)a(h),F.sortIndex=F.expirationTime,e(m,F);else break;F=i(h)}}function L(H){if(C=!1,N(H),!T)if(i(m)!==null)T=!0,O||(O=!0,Q());else{var F=i(h);F!==null&&te(L,F.startTime-H)}}var O=!1,I=-1,A=5,B=-1;function X(){return y?!0:!(r.unstable_now()-B<A)}function q(){if(y=!1,O){var H=r.unstable_now();B=H;var F=!0;try{e:{T=!1,C&&(C=!1,U(I),I=-1),b=!0;var J=x;try{t:{for(N(H),v=i(m);v!==null&&!(v.expirationTime>H&&X());){var $=v.callback;if(typeof $=="function"){v.callback=null,x=v.priorityLevel;var he=$(v.expirationTime<=H);if(H=r.unstable_now(),typeof he=="function"){v.callback=he,N(H),F=!0;break t}v===i(m)&&a(m),N(H)}else a(m);v=i(m)}if(v!==null)F=!0;else{var D=i(h);D!==null&&te(L,D.startTime-H),F=!1}}break e}finally{v=null,x=J,b=!1}F=void 0}}finally{F?Q():O=!1}}}var Q;if(typeof z=="function")Q=function(){z(q)};else if(typeof MessageChannel<"u"){var fe=new MessageChannel,Y=fe.port2;fe.port1.onmessage=q,Q=function(){Y.postMessage(null)}}else Q=function(){_(q,0)};function te(H,F){I=_(function(){H(r.unstable_now())},F)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(H){H.callback=null},r.unstable_forceFrameRate=function(H){0>H||125<H?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):A=0<H?Math.floor(1e3/H):5},r.unstable_getCurrentPriorityLevel=function(){return x},r.unstable_next=function(H){switch(x){case 1:case 2:case 3:var F=3;break;default:F=x}var J=x;x=F;try{return H()}finally{x=J}},r.unstable_requestPaint=function(){y=!0},r.unstable_runWithPriority=function(H,F){switch(H){case 1:case 2:case 3:case 4:case 5:break;default:H=3}var J=x;x=H;try{return F()}finally{x=J}},r.unstable_scheduleCallback=function(H,F,J){var $=r.unstable_now();switch(typeof J=="object"&&J!==null?(J=J.delay,J=typeof J=="number"&&0<J?$+J:$):J=$,H){case 1:var he=-1;break;case 2:he=250;break;case 5:he=1073741823;break;case 4:he=1e4;break;default:he=5e3}return he=J+he,H={id:g++,callback:F,priorityLevel:H,startTime:J,expirationTime:he,sortIndex:-1},J>$?(H.sortIndex=J,e(h,H),i(m)===null&&H===i(h)&&(C?(U(I),I=-1):C=!0,te(L,J-$))):(H.sortIndex=he,e(m,H),T||b||(T=!0,O||(O=!0,Q()))),H},r.unstable_shouldYield=X,r.unstable_wrapCallback=function(H){var F=x;return function(){var J=x;x=F;try{return H.apply(this,arguments)}finally{x=J}}}})(ih)),ih}var $x;function Ib(){return $x||($x=1,nh.exports=Pb()),nh.exports}var ah={exports:{}},Ln={};var ev;function Bb(){if(ev)return Ln;ev=1;var r=zp();function e(m){var h="https://react.dev/errors/"+m;if(1<arguments.length){h+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)h+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+m+"; visit "+h+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var a={d:{f:i,r:function(){throw Error(e(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(m,h,g){var v=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:v==null?null:""+v,children:m,containerInfo:h,implementation:g}}var f=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function p(m,h){if(m==="font")return"";if(typeof h=="string")return h==="use-credentials"?h:""}return Ln.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=a,Ln.createPortal=function(m,h){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!h||h.nodeType!==1&&h.nodeType!==9&&h.nodeType!==11)throw Error(e(299));return c(m,h,null,g)},Ln.flushSync=function(m){var h=f.T,g=a.p;try{if(f.T=null,a.p=2,m)return m()}finally{f.T=h,a.p=g,a.d.f()}},Ln.preconnect=function(m,h){typeof m=="string"&&(h?(h=h.crossOrigin,h=typeof h=="string"?h==="use-credentials"?h:"":void 0):h=null,a.d.C(m,h))},Ln.prefetchDNS=function(m){typeof m=="string"&&a.d.D(m)},Ln.preinit=function(m,h){if(typeof m=="string"&&h&&typeof h.as=="string"){var g=h.as,v=p(g,h.crossOrigin),x=typeof h.integrity=="string"?h.integrity:void 0,b=typeof h.fetchPriority=="string"?h.fetchPriority:void 0;g==="style"?a.d.S(m,typeof h.precedence=="string"?h.precedence:void 0,{crossOrigin:v,integrity:x,fetchPriority:b}):g==="script"&&a.d.X(m,{crossOrigin:v,integrity:x,fetchPriority:b,nonce:typeof h.nonce=="string"?h.nonce:void 0})}},Ln.preinitModule=function(m,h){if(typeof m=="string")if(typeof h=="object"&&h!==null){if(h.as==null||h.as==="script"){var g=p(h.as,h.crossOrigin);a.d.M(m,{crossOrigin:g,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0})}}else h==null&&a.d.M(m)},Ln.preload=function(m,h){if(typeof m=="string"&&typeof h=="object"&&h!==null&&typeof h.as=="string"){var g=h.as,v=p(g,h.crossOrigin);a.d.L(m,g,{crossOrigin:v,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0,type:typeof h.type=="string"?h.type:void 0,fetchPriority:typeof h.fetchPriority=="string"?h.fetchPriority:void 0,referrerPolicy:typeof h.referrerPolicy=="string"?h.referrerPolicy:void 0,imageSrcSet:typeof h.imageSrcSet=="string"?h.imageSrcSet:void 0,imageSizes:typeof h.imageSizes=="string"?h.imageSizes:void 0,media:typeof h.media=="string"?h.media:void 0})}},Ln.preloadModule=function(m,h){if(typeof m=="string")if(h){var g=p(h.as,h.crossOrigin);a.d.m(m,{as:typeof h.as=="string"&&h.as!=="script"?h.as:void 0,crossOrigin:g,integrity:typeof h.integrity=="string"?h.integrity:void 0})}else a.d.m(m)},Ln.requestFormReset=function(m){a.d.r(m)},Ln.unstable_batchedUpdates=function(m,h){return m(h)},Ln.useFormState=function(m,h,g){return f.H.useFormState(m,h,g)},Ln.useFormStatus=function(){return f.H.useHostTransitionStatus()},Ln.version="19.2.3",Ln}var tv;function Fb(){if(tv)return ah.exports;tv=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),ah.exports=Bb(),ah.exports}var nv;function zb(){if(nv)return nl;nv=1;var r=Ib(),e=zp(),i=Fb();function a(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var s=2;s<arguments.length;s++)n+="&args[]="+encodeURIComponent(arguments[s])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function c(t){var n=t,s=t;if(t.alternate)for(;n.return;)n=n.return;else{t=n;do n=t,(n.flags&4098)!==0&&(s=n.return),t=n.return;while(t)}return n.tag===3?s:null}function f(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function p(t){if(t.tag===31){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function m(t){if(c(t)!==t)throw Error(a(188))}function h(t){var n=t.alternate;if(!n){if(n=c(t),n===null)throw Error(a(188));return n!==t?null:t}for(var s=t,o=n;;){var u=s.return;if(u===null)break;var d=u.alternate;if(d===null){if(o=u.return,o!==null){s=o;continue}break}if(u.child===d.child){for(d=u.child;d;){if(d===s)return m(u),t;if(d===o)return m(u),n;d=d.sibling}throw Error(a(188))}if(s.return!==o.return)s=u,o=d;else{for(var S=!1,w=u.child;w;){if(w===s){S=!0,s=u,o=d;break}if(w===o){S=!0,o=u,s=d;break}w=w.sibling}if(!S){for(w=d.child;w;){if(w===s){S=!0,s=d,o=u;break}if(w===o){S=!0,o=d,s=u;break}w=w.sibling}if(!S)throw Error(a(189))}}if(s.alternate!==o)throw Error(a(190))}if(s.tag!==3)throw Error(a(188));return s.stateNode.current===s?t:n}function g(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=g(t),n!==null)return n;t=t.sibling}return null}var v=Object.assign,x=Symbol.for("react.element"),b=Symbol.for("react.transitional.element"),T=Symbol.for("react.portal"),C=Symbol.for("react.fragment"),y=Symbol.for("react.strict_mode"),_=Symbol.for("react.profiler"),U=Symbol.for("react.consumer"),z=Symbol.for("react.context"),N=Symbol.for("react.forward_ref"),L=Symbol.for("react.suspense"),O=Symbol.for("react.suspense_list"),I=Symbol.for("react.memo"),A=Symbol.for("react.lazy"),B=Symbol.for("react.activity"),X=Symbol.for("react.memo_cache_sentinel"),q=Symbol.iterator;function Q(t){return t===null||typeof t!="object"?null:(t=q&&t[q]||t["@@iterator"],typeof t=="function"?t:null)}var fe=Symbol.for("react.client.reference");function Y(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===fe?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case C:return"Fragment";case _:return"Profiler";case y:return"StrictMode";case L:return"Suspense";case O:return"SuspenseList";case B:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case T:return"Portal";case z:return t.displayName||"Context";case U:return(t._context.displayName||"Context")+".Consumer";case N:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case I:return n=t.displayName||null,n!==null?n:Y(t.type)||"Memo";case A:n=t._payload,t=t._init;try{return Y(t(n))}catch{}}return null}var te=Array.isArray,H=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,F=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,J={pending:!1,data:null,method:null,action:null},$=[],he=-1;function D(t){return{current:t}}function ne(t){0>he||(t.current=$[he],$[he]=null,he--)}function ve(t,n){he++,$[he]=t.current,t.current=n}var Te=D(null),Oe=D(null),Xe=D(null),oe=D(null);function _e(t,n){switch(ve(Xe,n),ve(Oe,t),ve(Te,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?xx(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=xx(n),t=vx(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}ne(Te),ve(Te,t)}function Re(){ne(Te),ne(Oe),ne(Xe)}function tt(t){t.memoizedState!==null&&ve(oe,t);var n=Te.current,s=vx(n,t.type);n!==s&&(ve(Oe,t),ve(Te,s))}function Ge(t){Oe.current===t&&(ne(Te),ne(Oe)),oe.current===t&&(ne(oe),Qo._currentValue=J)}var lt,nn;function at(t){if(lt===void 0)try{throw Error()}catch(s){var n=s.stack.trim().match(/\n( *(at )?)/);lt=n&&n[1]||"",nn=-1<s.stack.indexOf(`
    at`)?" (<anonymous>)":-1<s.stack.indexOf("@")?"@unknown:0:0":""}return`
`+lt+t+nn}var _t=!1;function Ot(t,n){if(!t||_t)return"";_t=!0;var s=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(n){var Me=function(){throw Error()};if(Object.defineProperty(Me.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(Me,[])}catch(pe){var ue=pe}Reflect.construct(t,[],Me)}else{try{Me.call()}catch(pe){ue=pe}t.call(Me.prototype)}}else{try{throw Error()}catch(pe){ue=pe}(Me=t())&&typeof Me.catch=="function"&&Me.catch(function(){})}}catch(pe){if(pe&&ue&&typeof pe.stack=="string")return[pe.stack,ue.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var d=o.DetermineComponentFrameRoot(),S=d[0],w=d[1];if(S&&w){var G=S.split(`
`),le=w.split(`
`);for(u=o=0;o<G.length&&!G[o].includes("DetermineComponentFrameRoot");)o++;for(;u<le.length&&!le[u].includes("DetermineComponentFrameRoot");)u++;if(o===G.length||u===le.length)for(o=G.length-1,u=le.length-1;1<=o&&0<=u&&G[o]!==le[u];)u--;for(;1<=o&&0<=u;o--,u--)if(G[o]!==le[u]){if(o!==1||u!==1)do if(o--,u--,0>u||G[o]!==le[u]){var Se=`
`+G[o].replace(" at new "," at ");return t.displayName&&Se.includes("<anonymous>")&&(Se=Se.replace("<anonymous>",t.displayName)),Se}while(1<=o&&0<=u);break}}}finally{_t=!1,Error.prepareStackTrace=s}return(s=t?t.displayName||t.name:"")?at(s):""}function mt(t,n){switch(t.tag){case 26:case 27:case 5:return at(t.type);case 16:return at("Lazy");case 13:return t.child!==n&&n!==null?at("Suspense Fallback"):at("Suspense");case 19:return at("SuspenseList");case 0:case 15:return Ot(t.type,!1);case 11:return Ot(t.type.render,!1);case 1:return Ot(t.type,!0);case 31:return at("Activity");default:return""}}function Xt(t){try{var n="",s=null;do n+=mt(t,s),s=t,t=t.return;while(t);return n}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}var an=Object.prototype.hasOwnProperty,Mn=r.unstable_scheduleCallback,jt=r.unstable_cancelCallback,sn=r.unstable_shouldYield,j=r.unstable_requestPaint,Pt=r.unstable_now,Dt=r.unstable_getCurrentPriorityLevel,P=r.unstable_ImmediatePriority,E=r.unstable_UserBlockingPriority,K=r.unstable_NormalPriority,ce=r.unstable_LowPriority,me=r.unstable_IdlePriority,Ae=r.log,De=r.unstable_setDisableYieldValue,ge=null,xe=null;function we(t){if(typeof Ae=="function"&&De(t),xe&&typeof xe.setStrictMode=="function")try{xe.setStrictMode(ge,t)}catch{}}var Ve=Math.clz32?Math.clz32:Qe,Pe=Math.log,Ue=Math.LN2;function Qe(t){return t>>>=0,t===0?32:31-(Pe(t)/Ue|0)|0}var Je=256,nt=262144,W=4194304;function Ce(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function ye(t,n,s){var o=t.pendingLanes;if(o===0)return 0;var u=0,d=t.suspendedLanes,S=t.pingedLanes;t=t.warmLanes;var w=o&134217727;return w!==0?(o=w&~d,o!==0?u=Ce(o):(S&=w,S!==0?u=Ce(S):s||(s=w&~t,s!==0&&(u=Ce(s))))):(w=o&~d,w!==0?u=Ce(w):S!==0?u=Ce(S):s||(s=o&~t,s!==0&&(u=Ce(s)))),u===0?0:n!==0&&n!==u&&(n&d)===0&&(d=u&-u,s=n&-n,d>=s||d===32&&(s&4194048)!==0)?n:u}function Ne(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function Fe(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ee(){var t=W;return W<<=1,(W&62914560)===0&&(W=4194304),t}function Ke(t){for(var n=[],s=0;31>s;s++)n.push(t);return n}function je(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function zt(t,n,s,o,u,d){var S=t.pendingLanes;t.pendingLanes=s,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=s,t.entangledLanes&=s,t.errorRecoveryDisabledLanes&=s,t.shellSuspendCounter=0;var w=t.entanglements,G=t.expirationTimes,le=t.hiddenUpdates;for(s=S&~s;0<s;){var Se=31-Ve(s),Me=1<<Se;w[Se]=0,G[Se]=-1;var ue=le[Se];if(ue!==null)for(le[Se]=null,Se=0;Se<ue.length;Se++){var pe=ue[Se];pe!==null&&(pe.lane&=-536870913)}s&=~Me}o!==0&&At(t,o,0),d!==0&&u===0&&t.tag!==0&&(t.suspendedLanes|=d&~(S&~n))}function At(t,n,s){t.pendingLanes|=n,t.suspendedLanes&=~n;var o=31-Ve(n);t.entangledLanes|=n,t.entanglements[o]=t.entanglements[o]|1073741824|s&261930}function Wn(t,n){var s=t.entangledLanes|=n;for(t=t.entanglements;s;){var o=31-Ve(s),u=1<<o;u&n|t[o]&n&&(t[o]|=n),s&=~u}}function ei(t,n){var s=n&-n;return s=(s&42)!==0?1:co(s),(s&(t.suspendedLanes|n))!==0?0:s}function co(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function uo(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function fo(){var t=F.p;return t!==0?t:(t=window.event,t===void 0?32:Gx(t.type))}function ir(t,n){var s=F.p;try{return F.p=t,n()}finally{F.p=s}}var ki=Math.random().toString(36).slice(2),fn="__reactFiber$"+ki,An="__reactProps$"+ki,Xn="__reactContainer$"+ki,bs="__reactEvents$"+ki,Ul="__reactListeners$"+ki,Ll="__reactHandles$"+ki,Ms="__reactResources$"+ki,za="__reactMarker$"+ki;function Ha(t){delete t[fn],delete t[An],delete t[bs],delete t[Ul],delete t[Ll]}function ra(t){var n=t[fn];if(n)return n;for(var s=t.parentNode;s;){if(n=s[Xn]||s[fn]){if(s=n.alternate,n.child!==null||s!==null&&s.child!==null)for(t=Tx(t);t!==null;){if(s=t[fn])return s;t=Tx(t)}return n}t=s,s=t.parentNode}return null}function oa(t){if(t=t[fn]||t[Xn]){var n=t.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return t}return null}function Es(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(a(33))}function Ga(t){var n=t[Ms];return n||(n=t[Ms]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function dn(t){t[za]=!0}var Ol=new Set,ho={};function R(t,n){V(t,n),V(t+"Capture",n)}function V(t,n){for(ho[t]=n,t=0;t<n.length;t++)Ol.add(n[t])}var de=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),ie={},ae={};function Ie(t){return an.call(ae,t)?!0:an.call(ie,t)?!1:de.test(t)?ae[t]=!0:(ie[t]=!0,!1)}function ke(t,n,s){if(Ie(n))if(s===null)t.removeAttribute(n);else{switch(typeof s){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var o=n.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,""+s)}}function Le(t,n,s){if(s===null)t.removeAttribute(n);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,""+s)}}function ze(t,n,s,o){if(o===null)t.removeAttribute(s);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(s);return}t.setAttributeNS(n,s,""+o)}}function He(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function ot(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function pt(t,n,s){var o=Object.getOwnPropertyDescriptor(t.constructor.prototype,n);if(!t.hasOwnProperty(n)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var u=o.get,d=o.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return u.call(this)},set:function(S){s=""+S,d.call(this,S)}}),Object.defineProperty(t,n,{enumerable:o.enumerable}),{getValue:function(){return s},setValue:function(S){s=""+S},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function qe(t){if(!t._valueTracker){var n=ot(t)?"checked":"value";t._valueTracker=pt(t,n,""+t[n])}}function Rt(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var s=n.getValue(),o="";return t&&(o=ot(t)?t.checked?"true":"false":t.value),t=o,t!==s?(n.setValue(t),!0):!1}function Zt(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var qt=/[\n"\\]/g;function ft(t){return t.replace(qt,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function hn(t,n,s,o,u,d,S,w){t.name="",S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"?t.type=S:t.removeAttribute("type"),n!=null?S==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+He(n)):t.value!==""+He(n)&&(t.value=""+He(n)):S!=="submit"&&S!=="reset"||t.removeAttribute("value"),n!=null?_n(t,S,He(n)):s!=null?_n(t,S,He(s)):o!=null&&t.removeAttribute("value"),u==null&&d!=null&&(t.defaultChecked=!!d),u!=null&&(t.checked=u&&typeof u!="function"&&typeof u!="symbol"),w!=null&&typeof w!="function"&&typeof w!="symbol"&&typeof w!="boolean"?t.name=""+He(w):t.removeAttribute("name")}function We(t,n,s,o,u,d,S,w){if(d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"&&(t.type=d),n!=null||s!=null){if(!(d!=="submit"&&d!=="reset"||n!=null)){qe(t);return}s=s!=null?""+He(s):"",n=n!=null?""+He(n):s,w||n===t.value||(t.value=n),t.defaultValue=n}o=o??u,o=typeof o!="function"&&typeof o!="symbol"&&!!o,t.checked=w?t.checked:!!o,t.defaultChecked=!!o,S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"&&(t.name=S),qe(t)}function _n(t,n,s){n==="number"&&Zt(t.ownerDocument)===t||t.defaultValue===""+s||(t.defaultValue=""+s)}function dt(t,n,s,o){if(t=t.options,n){n={};for(var u=0;u<s.length;u++)n["$"+s[u]]=!0;for(s=0;s<t.length;s++)u=n.hasOwnProperty("$"+t[s].value),t[s].selected!==u&&(t[s].selected=u),u&&o&&(t[s].defaultSelected=!0)}else{for(s=""+He(s),n=null,u=0;u<t.length;u++){if(t[u].value===s){t[u].selected=!0,o&&(t[u].defaultSelected=!0);return}n!==null||t[u].disabled||(n=t[u])}n!==null&&(n.selected=!0)}}function zn(t,n,s){if(n!=null&&(n=""+He(n),n!==t.value&&(t.value=n),s==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=s!=null?""+He(s):""}function ti(t,n,s,o){if(n==null){if(o!=null){if(s!=null)throw Error(a(92));if(te(o)){if(1<o.length)throw Error(a(93));o=o[0]}s=o}s==null&&(s=""),n=s}s=He(n),t.defaultValue=s,o=t.textContent,o===s&&o!==""&&o!==null&&(t.value=o),qe(t)}function Hn(t,n){if(n){var s=t.firstChild;if(s&&s===t.lastChild&&s.nodeType===3){s.nodeValue=n;return}}t.textContent=n}var Va=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Ut(t,n,s){var o=n.indexOf("--")===0;s==null||typeof s=="boolean"||s===""?o?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":o?t.setProperty(n,s):typeof s!="number"||s===0||Va.has(n)?n==="float"?t.cssFloat=s:t[n]=(""+s).trim():t[n]=s+"px"}function Jt(t,n,s){if(n!=null&&typeof n!="object")throw Error(a(62));if(t=t.style,s!=null){for(var o in s)!s.hasOwnProperty(o)||n!=null&&n.hasOwnProperty(o)||(o.indexOf("--")===0?t.setProperty(o,""):o==="float"?t.cssFloat="":t[o]="");for(var u in n)o=n[u],n.hasOwnProperty(u)&&s[u]!==o&&Ut(t,u,o)}else for(var d in n)n.hasOwnProperty(d)&&Ut(t,d,n[d])}function hi(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ht=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Wi=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Ni(t){return Wi.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function pi(){}var Zu=null;function Ku(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var ar=null,sr=null;function gm(t){var n=oa(t);if(n&&(t=n.stateNode)){var s=t[An]||null;e:switch(t=n.stateNode,n.type){case"input":if(hn(t,s.value,s.defaultValue,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name),n=s.name,s.type==="radio"&&n!=null){for(s=t;s.parentNode;)s=s.parentNode;for(s=s.querySelectorAll('input[name="'+ft(""+n)+'"][type="radio"]'),n=0;n<s.length;n++){var o=s[n];if(o!==t&&o.form===t.form){var u=o[An]||null;if(!u)throw Error(a(90));hn(o,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<s.length;n++)o=s[n],o.form===t.form&&Rt(o)}break e;case"textarea":zn(t,s.value,s.defaultValue);break e;case"select":n=s.value,n!=null&&dt(t,!!s.multiple,n,!1)}}}var Qu=!1;function xm(t,n,s){if(Qu)return t(n,s);Qu=!0;try{var o=t(n);return o}finally{if(Qu=!1,(ar!==null||sr!==null)&&(yc(),ar&&(n=ar,t=sr,sr=ar=null,gm(n),t)))for(n=0;n<t.length;n++)gm(t[n])}}function po(t,n){var s=t.stateNode;if(s===null)return null;var o=s[An]||null;if(o===null)return null;s=o[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(t=t.type,o=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!o;break e;default:t=!1}if(t)return null;if(s&&typeof s!="function")throw Error(a(231,n,typeof s));return s}var la=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ju=!1;if(la)try{var mo={};Object.defineProperty(mo,"passive",{get:function(){Ju=!0}}),window.addEventListener("test",mo,mo),window.removeEventListener("test",mo,mo)}catch{Ju=!1}var ka=null,$u=null,Pl=null;function vm(){if(Pl)return Pl;var t,n=$u,s=n.length,o,u="value"in ka?ka.value:ka.textContent,d=u.length;for(t=0;t<s&&n[t]===u[t];t++);var S=s-t;for(o=1;o<=S&&n[s-o]===u[d-o];o++);return Pl=u.slice(t,1<o?1-o:void 0)}function Il(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function Bl(){return!0}function _m(){return!1}function jn(t){function n(s,o,u,d,S){this._reactName=s,this._targetInst=u,this.type=o,this.nativeEvent=d,this.target=S,this.currentTarget=null;for(var w in t)t.hasOwnProperty(w)&&(s=t[w],this[w]=s?s(d):d[w]);return this.isDefaultPrevented=(d.defaultPrevented!=null?d.defaultPrevented:d.returnValue===!1)?Bl:_m,this.isPropagationStopped=_m,this}return v(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var s=this.nativeEvent;s&&(s.preventDefault?s.preventDefault():typeof s.returnValue!="unknown"&&(s.returnValue=!1),this.isDefaultPrevented=Bl)},stopPropagation:function(){var s=this.nativeEvent;s&&(s.stopPropagation?s.stopPropagation():typeof s.cancelBubble!="unknown"&&(s.cancelBubble=!0),this.isPropagationStopped=Bl)},persist:function(){},isPersistent:Bl}),n}var Ts={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Fl=jn(Ts),go=v({},Ts,{view:0,detail:0}),NS=jn(go),ef,tf,xo,zl=v({},go,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:af,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==xo&&(xo&&t.type==="mousemove"?(ef=t.screenX-xo.screenX,tf=t.screenY-xo.screenY):tf=ef=0,xo=t),ef)},movementY:function(t){return"movementY"in t?t.movementY:tf}}),Sm=jn(zl),DS=v({},zl,{dataTransfer:0}),US=jn(DS),LS=v({},go,{relatedTarget:0}),nf=jn(LS),OS=v({},Ts,{animationName:0,elapsedTime:0,pseudoElement:0}),PS=jn(OS),IS=v({},Ts,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),BS=jn(IS),FS=v({},Ts,{data:0}),ym=jn(FS),zS={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},HS={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},GS={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function VS(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=GS[t])?!!n[t]:!1}function af(){return VS}var kS=v({},go,{key:function(t){if(t.key){var n=zS[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=Il(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?HS[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:af,charCode:function(t){return t.type==="keypress"?Il(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Il(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),WS=jn(kS),XS=v({},zl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),bm=jn(XS),jS=v({},go,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:af}),qS=jn(jS),YS=v({},Ts,{propertyName:0,elapsedTime:0,pseudoElement:0}),ZS=jn(YS),KS=v({},zl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),QS=jn(KS),JS=v({},Ts,{newState:0,oldState:0}),$S=jn(JS),ey=[9,13,27,32],sf=la&&"CompositionEvent"in window,vo=null;la&&"documentMode"in document&&(vo=document.documentMode);var ty=la&&"TextEvent"in window&&!vo,Mm=la&&(!sf||vo&&8<vo&&11>=vo),Em=" ",Tm=!1;function Am(t,n){switch(t){case"keyup":return ey.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Rm(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var rr=!1;function ny(t,n){switch(t){case"compositionend":return Rm(n);case"keypress":return n.which!==32?null:(Tm=!0,Em);case"textInput":return t=n.data,t===Em&&Tm?null:t;default:return null}}function iy(t,n){if(rr)return t==="compositionend"||!sf&&Am(t,n)?(t=vm(),Pl=$u=ka=null,rr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Mm&&n.locale!=="ko"?null:n.data;default:return null}}var ay={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function wm(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!ay[t.type]:n==="textarea"}function Cm(t,n,s,o){ar?sr?sr.push(o):sr=[o]:ar=o,n=wc(n,"onChange"),0<n.length&&(s=new Fl("onChange","change",null,s,o),t.push({event:s,listeners:n}))}var _o=null,So=null;function sy(t){fx(t,0)}function Hl(t){var n=Es(t);if(Rt(n))return t}function Nm(t,n){if(t==="change")return n}var Dm=!1;if(la){var rf;if(la){var of="oninput"in document;if(!of){var Um=document.createElement("div");Um.setAttribute("oninput","return;"),of=typeof Um.oninput=="function"}rf=of}else rf=!1;Dm=rf&&(!document.documentMode||9<document.documentMode)}function Lm(){_o&&(_o.detachEvent("onpropertychange",Om),So=_o=null)}function Om(t){if(t.propertyName==="value"&&Hl(So)){var n=[];Cm(n,So,t,Ku(t)),xm(sy,n)}}function ry(t,n,s){t==="focusin"?(Lm(),_o=n,So=s,_o.attachEvent("onpropertychange",Om)):t==="focusout"&&Lm()}function oy(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Hl(So)}function ly(t,n){if(t==="click")return Hl(n)}function cy(t,n){if(t==="input"||t==="change")return Hl(n)}function uy(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var ni=typeof Object.is=="function"?Object.is:uy;function yo(t,n){if(ni(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var s=Object.keys(t),o=Object.keys(n);if(s.length!==o.length)return!1;for(o=0;o<s.length;o++){var u=s[o];if(!an.call(n,u)||!ni(t[u],n[u]))return!1}return!0}function Pm(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Im(t,n){var s=Pm(t);t=0;for(var o;s;){if(s.nodeType===3){if(o=t+s.textContent.length,t<=n&&o>=n)return{node:s,offset:n-t};t=o}e:{for(;s;){if(s.nextSibling){s=s.nextSibling;break e}s=s.parentNode}s=void 0}s=Pm(s)}}function Bm(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?Bm(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function Fm(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=Zt(t.document);n instanceof t.HTMLIFrameElement;){try{var s=typeof n.contentWindow.location.href=="string"}catch{s=!1}if(s)t=n.contentWindow;else break;n=Zt(t.document)}return n}function lf(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var fy=la&&"documentMode"in document&&11>=document.documentMode,or=null,cf=null,bo=null,uf=!1;function zm(t,n,s){var o=s.window===s?s.document:s.nodeType===9?s:s.ownerDocument;uf||or==null||or!==Zt(o)||(o=or,"selectionStart"in o&&lf(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),bo&&yo(bo,o)||(bo=o,o=wc(cf,"onSelect"),0<o.length&&(n=new Fl("onSelect","select",null,n,s),t.push({event:n,listeners:o}),n.target=or)))}function As(t,n){var s={};return s[t.toLowerCase()]=n.toLowerCase(),s["Webkit"+t]="webkit"+n,s["Moz"+t]="moz"+n,s}var lr={animationend:As("Animation","AnimationEnd"),animationiteration:As("Animation","AnimationIteration"),animationstart:As("Animation","AnimationStart"),transitionrun:As("Transition","TransitionRun"),transitionstart:As("Transition","TransitionStart"),transitioncancel:As("Transition","TransitionCancel"),transitionend:As("Transition","TransitionEnd")},ff={},Hm={};la&&(Hm=document.createElement("div").style,"AnimationEvent"in window||(delete lr.animationend.animation,delete lr.animationiteration.animation,delete lr.animationstart.animation),"TransitionEvent"in window||delete lr.transitionend.transition);function Rs(t){if(ff[t])return ff[t];if(!lr[t])return t;var n=lr[t],s;for(s in n)if(n.hasOwnProperty(s)&&s in Hm)return ff[t]=n[s];return t}var Gm=Rs("animationend"),Vm=Rs("animationiteration"),km=Rs("animationstart"),dy=Rs("transitionrun"),hy=Rs("transitionstart"),py=Rs("transitioncancel"),Wm=Rs("transitionend"),Xm=new Map,df="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");df.push("scrollEnd");function Di(t,n){Xm.set(t,n),R(n,[t])}var Gl=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},mi=[],cr=0,hf=0;function Vl(){for(var t=cr,n=hf=cr=0;n<t;){var s=mi[n];mi[n++]=null;var o=mi[n];mi[n++]=null;var u=mi[n];mi[n++]=null;var d=mi[n];if(mi[n++]=null,o!==null&&u!==null){var S=o.pending;S===null?u.next=u:(u.next=S.next,S.next=u),o.pending=u}d!==0&&jm(s,u,d)}}function kl(t,n,s,o){mi[cr++]=t,mi[cr++]=n,mi[cr++]=s,mi[cr++]=o,hf|=o,t.lanes|=o,t=t.alternate,t!==null&&(t.lanes|=o)}function pf(t,n,s,o){return kl(t,n,s,o),Wl(t)}function ws(t,n){return kl(t,null,null,n),Wl(t)}function jm(t,n,s){t.lanes|=s;var o=t.alternate;o!==null&&(o.lanes|=s);for(var u=!1,d=t.return;d!==null;)d.childLanes|=s,o=d.alternate,o!==null&&(o.childLanes|=s),d.tag===22&&(t=d.stateNode,t===null||t._visibility&1||(u=!0)),t=d,d=d.return;return t.tag===3?(d=t.stateNode,u&&n!==null&&(u=31-Ve(s),t=d.hiddenUpdates,o=t[u],o===null?t[u]=[n]:o.push(n),n.lane=s|536870912),d):null}function Wl(t){if(50<Wo)throw Wo=0,Md=null,Error(a(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var ur={};function my(t,n,s,o){this.tag=t,this.key=s,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ii(t,n,s,o){return new my(t,n,s,o)}function mf(t){return t=t.prototype,!(!t||!t.isReactComponent)}function ca(t,n){var s=t.alternate;return s===null?(s=ii(t.tag,n,t.key,t.mode),s.elementType=t.elementType,s.type=t.type,s.stateNode=t.stateNode,s.alternate=t,t.alternate=s):(s.pendingProps=n,s.type=t.type,s.flags=0,s.subtreeFlags=0,s.deletions=null),s.flags=t.flags&65011712,s.childLanes=t.childLanes,s.lanes=t.lanes,s.child=t.child,s.memoizedProps=t.memoizedProps,s.memoizedState=t.memoizedState,s.updateQueue=t.updateQueue,n=t.dependencies,s.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},s.sibling=t.sibling,s.index=t.index,s.ref=t.ref,s.refCleanup=t.refCleanup,s}function qm(t,n){t.flags&=65011714;var s=t.alternate;return s===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=s.childLanes,t.lanes=s.lanes,t.child=s.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=s.memoizedProps,t.memoizedState=s.memoizedState,t.updateQueue=s.updateQueue,t.type=s.type,n=s.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function Xl(t,n,s,o,u,d){var S=0;if(o=t,typeof t=="function")mf(t)&&(S=1);else if(typeof t=="string")S=Sb(t,s,Te.current)?26:t==="html"||t==="head"||t==="body"?27:5;else e:switch(t){case B:return t=ii(31,s,n,u),t.elementType=B,t.lanes=d,t;case C:return Cs(s.children,u,d,n);case y:S=8,u|=24;break;case _:return t=ii(12,s,n,u|2),t.elementType=_,t.lanes=d,t;case L:return t=ii(13,s,n,u),t.elementType=L,t.lanes=d,t;case O:return t=ii(19,s,n,u),t.elementType=O,t.lanes=d,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case z:S=10;break e;case U:S=9;break e;case N:S=11;break e;case I:S=14;break e;case A:S=16,o=null;break e}S=29,s=Error(a(130,t===null?"null":typeof t,"")),o=null}return n=ii(S,s,n,u),n.elementType=t,n.type=o,n.lanes=d,n}function Cs(t,n,s,o){return t=ii(7,t,o,n),t.lanes=s,t}function gf(t,n,s){return t=ii(6,t,null,n),t.lanes=s,t}function Ym(t){var n=ii(18,null,null,0);return n.stateNode=t,n}function xf(t,n,s){return n=ii(4,t.children!==null?t.children:[],t.key,n),n.lanes=s,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var Zm=new WeakMap;function gi(t,n){if(typeof t=="object"&&t!==null){var s=Zm.get(t);return s!==void 0?s:(n={value:t,source:n,stack:Xt(n)},Zm.set(t,n),n)}return{value:t,source:n,stack:Xt(n)}}var fr=[],dr=0,jl=null,Mo=0,xi=[],vi=0,Wa=null,Xi=1,ji="";function ua(t,n){fr[dr++]=Mo,fr[dr++]=jl,jl=t,Mo=n}function Km(t,n,s){xi[vi++]=Xi,xi[vi++]=ji,xi[vi++]=Wa,Wa=t;var o=Xi;t=ji;var u=32-Ve(o)-1;o&=~(1<<u),s+=1;var d=32-Ve(n)+u;if(30<d){var S=u-u%5;d=(o&(1<<S)-1).toString(32),o>>=S,u-=S,Xi=1<<32-Ve(n)+u|s<<u|o,ji=d+t}else Xi=1<<d|s<<u|o,ji=t}function vf(t){t.return!==null&&(ua(t,1),Km(t,1,0))}function _f(t){for(;t===jl;)jl=fr[--dr],fr[dr]=null,Mo=fr[--dr],fr[dr]=null;for(;t===Wa;)Wa=xi[--vi],xi[vi]=null,ji=xi[--vi],xi[vi]=null,Xi=xi[--vi],xi[vi]=null}function Qm(t,n){xi[vi++]=Xi,xi[vi++]=ji,xi[vi++]=Wa,Xi=n.id,ji=n.overflow,Wa=t}var Rn=null,Kt=null,Mt=!1,Xa=null,_i=!1,Sf=Error(a(519));function ja(t){var n=Error(a(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Eo(gi(n,t)),Sf}function Jm(t){var n=t.stateNode,s=t.type,o=t.memoizedProps;switch(n[fn]=t,n[An]=o,s){case"dialog":vt("cancel",n),vt("close",n);break;case"iframe":case"object":case"embed":vt("load",n);break;case"video":case"audio":for(s=0;s<jo.length;s++)vt(jo[s],n);break;case"source":vt("error",n);break;case"img":case"image":case"link":vt("error",n),vt("load",n);break;case"details":vt("toggle",n);break;case"input":vt("invalid",n),We(n,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0);break;case"select":vt("invalid",n);break;case"textarea":vt("invalid",n),ti(n,o.value,o.defaultValue,o.children)}s=o.children,typeof s!="string"&&typeof s!="number"&&typeof s!="bigint"||n.textContent===""+s||o.suppressHydrationWarning===!0||mx(n.textContent,s)?(o.popover!=null&&(vt("beforetoggle",n),vt("toggle",n)),o.onScroll!=null&&vt("scroll",n),o.onScrollEnd!=null&&vt("scrollend",n),o.onClick!=null&&(n.onclick=pi),n=!0):n=!1,n||ja(t,!0)}function $m(t){for(Rn=t.return;Rn;)switch(Rn.tag){case 5:case 31:case 13:_i=!1;return;case 27:case 3:_i=!0;return;default:Rn=Rn.return}}function hr(t){if(t!==Rn)return!1;if(!Mt)return $m(t),Mt=!0,!1;var n=t.tag,s;if((s=n!==3&&n!==27)&&((s=n===5)&&(s=t.type,s=!(s!=="form"&&s!=="button")||Fd(t.type,t.memoizedProps)),s=!s),s&&Kt&&ja(t),$m(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(a(317));Kt=Ex(t)}else if(n===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(a(317));Kt=Ex(t)}else n===27?(n=Kt,rs(t.type)?(t=kd,kd=null,Kt=t):Kt=n):Kt=Rn?yi(t.stateNode.nextSibling):null;return!0}function Ns(){Kt=Rn=null,Mt=!1}function yf(){var t=Xa;return t!==null&&(Kn===null?Kn=t:Kn.push.apply(Kn,t),Xa=null),t}function Eo(t){Xa===null?Xa=[t]:Xa.push(t)}var bf=D(null),Ds=null,fa=null;function qa(t,n,s){ve(bf,n._currentValue),n._currentValue=s}function da(t){t._currentValue=bf.current,ne(bf)}function Mf(t,n,s){for(;t!==null;){var o=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),t===s)break;t=t.return}}function Ef(t,n,s,o){var u=t.child;for(u!==null&&(u.return=t);u!==null;){var d=u.dependencies;if(d!==null){var S=u.child;d=d.firstContext;e:for(;d!==null;){var w=d;d=u;for(var G=0;G<n.length;G++)if(w.context===n[G]){d.lanes|=s,w=d.alternate,w!==null&&(w.lanes|=s),Mf(d.return,s,t),o||(S=null);break e}d=w.next}}else if(u.tag===18){if(S=u.return,S===null)throw Error(a(341));S.lanes|=s,d=S.alternate,d!==null&&(d.lanes|=s),Mf(S,s,t),S=null}else S=u.child;if(S!==null)S.return=u;else for(S=u;S!==null;){if(S===t){S=null;break}if(u=S.sibling,u!==null){u.return=S.return,S=u;break}S=S.return}u=S}}function pr(t,n,s,o){t=null;for(var u=n,d=!1;u!==null;){if(!d){if((u.flags&524288)!==0)d=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var S=u.alternate;if(S===null)throw Error(a(387));if(S=S.memoizedProps,S!==null){var w=u.type;ni(u.pendingProps.value,S.value)||(t!==null?t.push(w):t=[w])}}else if(u===oe.current){if(S=u.alternate,S===null)throw Error(a(387));S.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(t!==null?t.push(Qo):t=[Qo])}u=u.return}t!==null&&Ef(n,t,s,o),n.flags|=262144}function ql(t){for(t=t.firstContext;t!==null;){if(!ni(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function Us(t){Ds=t,fa=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function wn(t){return eg(Ds,t)}function Yl(t,n){return Ds===null&&Us(t),eg(t,n)}function eg(t,n){var s=n._currentValue;if(n={context:n,memoizedValue:s,next:null},fa===null){if(t===null)throw Error(a(308));fa=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else fa=fa.next=n;return s}var gy=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(s,o){t.push(o)}};this.abort=function(){n.aborted=!0,t.forEach(function(s){return s()})}},xy=r.unstable_scheduleCallback,vy=r.unstable_NormalPriority,pn={$$typeof:z,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Tf(){return{controller:new gy,data:new Map,refCount:0}}function To(t){t.refCount--,t.refCount===0&&xy(vy,function(){t.controller.abort()})}var Ao=null,Af=0,mr=0,gr=null;function _y(t,n){if(Ao===null){var s=Ao=[];Af=0,mr=Cd(),gr={status:"pending",value:void 0,then:function(o){s.push(o)}}}return Af++,n.then(tg,tg),n}function tg(){if(--Af===0&&Ao!==null){gr!==null&&(gr.status="fulfilled");var t=Ao;Ao=null,mr=0,gr=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function Sy(t,n){var s=[],o={status:"pending",value:null,reason:null,then:function(u){s.push(u)}};return t.then(function(){o.status="fulfilled",o.value=n;for(var u=0;u<s.length;u++)(0,s[u])(n)},function(u){for(o.status="rejected",o.reason=u,u=0;u<s.length;u++)(0,s[u])(void 0)}),o}var ng=H.S;H.S=function(t,n){z0=Pt(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&_y(t,n),ng!==null&&ng(t,n)};var Ls=D(null);function Rf(){var t=Ls.current;return t!==null?t:Yt.pooledCache}function Zl(t,n){n===null?ve(Ls,Ls.current):ve(Ls,n.pool)}function ig(){var t=Rf();return t===null?null:{parent:pn._currentValue,pool:t}}var xr=Error(a(460)),wf=Error(a(474)),Kl=Error(a(542)),Ql={then:function(){}};function ag(t){return t=t.status,t==="fulfilled"||t==="rejected"}function sg(t,n,s){switch(s=t[s],s===void 0?t.push(n):s!==n&&(n.then(pi,pi),n=s),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,og(t),t;default:if(typeof n.status=="string")n.then(pi,pi);else{if(t=Yt,t!==null&&100<t.shellSuspendCounter)throw Error(a(482));t=n,t.status="pending",t.then(function(o){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=o}},function(o){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=o}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,og(t),t}throw Ps=n,xr}}function Os(t){try{var n=t._init;return n(t._payload)}catch(s){throw s!==null&&typeof s=="object"&&typeof s.then=="function"?(Ps=s,xr):s}}var Ps=null;function rg(){if(Ps===null)throw Error(a(459));var t=Ps;return Ps=null,t}function og(t){if(t===xr||t===Kl)throw Error(a(483))}var vr=null,Ro=0;function Jl(t){var n=Ro;return Ro+=1,vr===null&&(vr=[]),sg(vr,t,n)}function wo(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function $l(t,n){throw n.$$typeof===x?Error(a(525)):(t=Object.prototype.toString.call(n),Error(a(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function lg(t){function n(Z,k){if(t){var re=Z.deletions;re===null?(Z.deletions=[k],Z.flags|=16):re.push(k)}}function s(Z,k){if(!t)return null;for(;k!==null;)n(Z,k),k=k.sibling;return null}function o(Z){for(var k=new Map;Z!==null;)Z.key!==null?k.set(Z.key,Z):k.set(Z.index,Z),Z=Z.sibling;return k}function u(Z,k){return Z=ca(Z,k),Z.index=0,Z.sibling=null,Z}function d(Z,k,re){return Z.index=re,t?(re=Z.alternate,re!==null?(re=re.index,re<k?(Z.flags|=67108866,k):re):(Z.flags|=67108866,k)):(Z.flags|=1048576,k)}function S(Z){return t&&Z.alternate===null&&(Z.flags|=67108866),Z}function w(Z,k,re,be){return k===null||k.tag!==6?(k=gf(re,Z.mode,be),k.return=Z,k):(k=u(k,re),k.return=Z,k)}function G(Z,k,re,be){var $e=re.type;return $e===C?Se(Z,k,re.props.children,be,re.key):k!==null&&(k.elementType===$e||typeof $e=="object"&&$e!==null&&$e.$$typeof===A&&Os($e)===k.type)?(k=u(k,re.props),wo(k,re),k.return=Z,k):(k=Xl(re.type,re.key,re.props,null,Z.mode,be),wo(k,re),k.return=Z,k)}function le(Z,k,re,be){return k===null||k.tag!==4||k.stateNode.containerInfo!==re.containerInfo||k.stateNode.implementation!==re.implementation?(k=xf(re,Z.mode,be),k.return=Z,k):(k=u(k,re.children||[]),k.return=Z,k)}function Se(Z,k,re,be,$e){return k===null||k.tag!==7?(k=Cs(re,Z.mode,be,$e),k.return=Z,k):(k=u(k,re),k.return=Z,k)}function Me(Z,k,re){if(typeof k=="string"&&k!==""||typeof k=="number"||typeof k=="bigint")return k=gf(""+k,Z.mode,re),k.return=Z,k;if(typeof k=="object"&&k!==null){switch(k.$$typeof){case b:return re=Xl(k.type,k.key,k.props,null,Z.mode,re),wo(re,k),re.return=Z,re;case T:return k=xf(k,Z.mode,re),k.return=Z,k;case A:return k=Os(k),Me(Z,k,re)}if(te(k)||Q(k))return k=Cs(k,Z.mode,re,null),k.return=Z,k;if(typeof k.then=="function")return Me(Z,Jl(k),re);if(k.$$typeof===z)return Me(Z,Yl(Z,k),re);$l(Z,k)}return null}function ue(Z,k,re,be){var $e=k!==null?k.key:null;if(typeof re=="string"&&re!==""||typeof re=="number"||typeof re=="bigint")return $e!==null?null:w(Z,k,""+re,be);if(typeof re=="object"&&re!==null){switch(re.$$typeof){case b:return re.key===$e?G(Z,k,re,be):null;case T:return re.key===$e?le(Z,k,re,be):null;case A:return re=Os(re),ue(Z,k,re,be)}if(te(re)||Q(re))return $e!==null?null:Se(Z,k,re,be,null);if(typeof re.then=="function")return ue(Z,k,Jl(re),be);if(re.$$typeof===z)return ue(Z,k,Yl(Z,re),be);$l(Z,re)}return null}function pe(Z,k,re,be,$e){if(typeof be=="string"&&be!==""||typeof be=="number"||typeof be=="bigint")return Z=Z.get(re)||null,w(k,Z,""+be,$e);if(typeof be=="object"&&be!==null){switch(be.$$typeof){case b:return Z=Z.get(be.key===null?re:be.key)||null,G(k,Z,be,$e);case T:return Z=Z.get(be.key===null?re:be.key)||null,le(k,Z,be,$e);case A:return be=Os(be),pe(Z,k,re,be,$e)}if(te(be)||Q(be))return Z=Z.get(re)||null,Se(k,Z,be,$e,null);if(typeof be.then=="function")return pe(Z,k,re,Jl(be),$e);if(be.$$typeof===z)return pe(Z,k,re,Yl(k,be),$e);$l(k,be)}return null}function Ye(Z,k,re,be){for(var $e=null,Ct=null,Ze=k,ut=k=0,yt=null;Ze!==null&&ut<re.length;ut++){Ze.index>ut?(yt=Ze,Ze=null):yt=Ze.sibling;var Nt=ue(Z,Ze,re[ut],be);if(Nt===null){Ze===null&&(Ze=yt);break}t&&Ze&&Nt.alternate===null&&n(Z,Ze),k=d(Nt,k,ut),Ct===null?$e=Nt:Ct.sibling=Nt,Ct=Nt,Ze=yt}if(ut===re.length)return s(Z,Ze),Mt&&ua(Z,ut),$e;if(Ze===null){for(;ut<re.length;ut++)Ze=Me(Z,re[ut],be),Ze!==null&&(k=d(Ze,k,ut),Ct===null?$e=Ze:Ct.sibling=Ze,Ct=Ze);return Mt&&ua(Z,ut),$e}for(Ze=o(Ze);ut<re.length;ut++)yt=pe(Ze,Z,ut,re[ut],be),yt!==null&&(t&&yt.alternate!==null&&Ze.delete(yt.key===null?ut:yt.key),k=d(yt,k,ut),Ct===null?$e=yt:Ct.sibling=yt,Ct=yt);return t&&Ze.forEach(function(fs){return n(Z,fs)}),Mt&&ua(Z,ut),$e}function et(Z,k,re,be){if(re==null)throw Error(a(151));for(var $e=null,Ct=null,Ze=k,ut=k=0,yt=null,Nt=re.next();Ze!==null&&!Nt.done;ut++,Nt=re.next()){Ze.index>ut?(yt=Ze,Ze=null):yt=Ze.sibling;var fs=ue(Z,Ze,Nt.value,be);if(fs===null){Ze===null&&(Ze=yt);break}t&&Ze&&fs.alternate===null&&n(Z,Ze),k=d(fs,k,ut),Ct===null?$e=fs:Ct.sibling=fs,Ct=fs,Ze=yt}if(Nt.done)return s(Z,Ze),Mt&&ua(Z,ut),$e;if(Ze===null){for(;!Nt.done;ut++,Nt=re.next())Nt=Me(Z,Nt.value,be),Nt!==null&&(k=d(Nt,k,ut),Ct===null?$e=Nt:Ct.sibling=Nt,Ct=Nt);return Mt&&ua(Z,ut),$e}for(Ze=o(Ze);!Nt.done;ut++,Nt=re.next())Nt=pe(Ze,Z,ut,Nt.value,be),Nt!==null&&(t&&Nt.alternate!==null&&Ze.delete(Nt.key===null?ut:Nt.key),k=d(Nt,k,ut),Ct===null?$e=Nt:Ct.sibling=Nt,Ct=Nt);return t&&Ze.forEach(function(Db){return n(Z,Db)}),Mt&&ua(Z,ut),$e}function kt(Z,k,re,be){if(typeof re=="object"&&re!==null&&re.type===C&&re.key===null&&(re=re.props.children),typeof re=="object"&&re!==null){switch(re.$$typeof){case b:e:{for(var $e=re.key;k!==null;){if(k.key===$e){if($e=re.type,$e===C){if(k.tag===7){s(Z,k.sibling),be=u(k,re.props.children),be.return=Z,Z=be;break e}}else if(k.elementType===$e||typeof $e=="object"&&$e!==null&&$e.$$typeof===A&&Os($e)===k.type){s(Z,k.sibling),be=u(k,re.props),wo(be,re),be.return=Z,Z=be;break e}s(Z,k);break}else n(Z,k);k=k.sibling}re.type===C?(be=Cs(re.props.children,Z.mode,be,re.key),be.return=Z,Z=be):(be=Xl(re.type,re.key,re.props,null,Z.mode,be),wo(be,re),be.return=Z,Z=be)}return S(Z);case T:e:{for($e=re.key;k!==null;){if(k.key===$e)if(k.tag===4&&k.stateNode.containerInfo===re.containerInfo&&k.stateNode.implementation===re.implementation){s(Z,k.sibling),be=u(k,re.children||[]),be.return=Z,Z=be;break e}else{s(Z,k);break}else n(Z,k);k=k.sibling}be=xf(re,Z.mode,be),be.return=Z,Z=be}return S(Z);case A:return re=Os(re),kt(Z,k,re,be)}if(te(re))return Ye(Z,k,re,be);if(Q(re)){if($e=Q(re),typeof $e!="function")throw Error(a(150));return re=$e.call(re),et(Z,k,re,be)}if(typeof re.then=="function")return kt(Z,k,Jl(re),be);if(re.$$typeof===z)return kt(Z,k,Yl(Z,re),be);$l(Z,re)}return typeof re=="string"&&re!==""||typeof re=="number"||typeof re=="bigint"?(re=""+re,k!==null&&k.tag===6?(s(Z,k.sibling),be=u(k,re),be.return=Z,Z=be):(s(Z,k),be=gf(re,Z.mode,be),be.return=Z,Z=be),S(Z)):s(Z,k)}return function(Z,k,re,be){try{Ro=0;var $e=kt(Z,k,re,be);return vr=null,$e}catch(Ze){if(Ze===xr||Ze===Kl)throw Ze;var Ct=ii(29,Ze,null,Z.mode);return Ct.lanes=be,Ct.return=Z,Ct}}}var Is=lg(!0),cg=lg(!1),Ya=!1;function Cf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Nf(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Za(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Ka(t,n,s){var o=t.updateQueue;if(o===null)return null;if(o=o.shared,(Lt&2)!==0){var u=o.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),o.pending=n,n=Wl(t),jm(t,null,s),n}return kl(t,o,n,s),Wl(t)}function Co(t,n,s){if(n=n.updateQueue,n!==null&&(n=n.shared,(s&4194048)!==0)){var o=n.lanes;o&=t.pendingLanes,s|=o,n.lanes=s,Wn(t,s)}}function Df(t,n){var s=t.updateQueue,o=t.alternate;if(o!==null&&(o=o.updateQueue,s===o)){var u=null,d=null;if(s=s.firstBaseUpdate,s!==null){do{var S={lane:s.lane,tag:s.tag,payload:s.payload,callback:null,next:null};d===null?u=d=S:d=d.next=S,s=s.next}while(s!==null);d===null?u=d=n:d=d.next=n}else u=d=n;s={baseState:o.baseState,firstBaseUpdate:u,lastBaseUpdate:d,shared:o.shared,callbacks:o.callbacks},t.updateQueue=s;return}t=s.lastBaseUpdate,t===null?s.firstBaseUpdate=n:t.next=n,s.lastBaseUpdate=n}var Uf=!1;function No(){if(Uf){var t=gr;if(t!==null)throw t}}function Do(t,n,s,o){Uf=!1;var u=t.updateQueue;Ya=!1;var d=u.firstBaseUpdate,S=u.lastBaseUpdate,w=u.shared.pending;if(w!==null){u.shared.pending=null;var G=w,le=G.next;G.next=null,S===null?d=le:S.next=le,S=G;var Se=t.alternate;Se!==null&&(Se=Se.updateQueue,w=Se.lastBaseUpdate,w!==S&&(w===null?Se.firstBaseUpdate=le:w.next=le,Se.lastBaseUpdate=G))}if(d!==null){var Me=u.baseState;S=0,Se=le=G=null,w=d;do{var ue=w.lane&-536870913,pe=ue!==w.lane;if(pe?(St&ue)===ue:(o&ue)===ue){ue!==0&&ue===mr&&(Uf=!0),Se!==null&&(Se=Se.next={lane:0,tag:w.tag,payload:w.payload,callback:null,next:null});e:{var Ye=t,et=w;ue=n;var kt=s;switch(et.tag){case 1:if(Ye=et.payload,typeof Ye=="function"){Me=Ye.call(kt,Me,ue);break e}Me=Ye;break e;case 3:Ye.flags=Ye.flags&-65537|128;case 0:if(Ye=et.payload,ue=typeof Ye=="function"?Ye.call(kt,Me,ue):Ye,ue==null)break e;Me=v({},Me,ue);break e;case 2:Ya=!0}}ue=w.callback,ue!==null&&(t.flags|=64,pe&&(t.flags|=8192),pe=u.callbacks,pe===null?u.callbacks=[ue]:pe.push(ue))}else pe={lane:ue,tag:w.tag,payload:w.payload,callback:w.callback,next:null},Se===null?(le=Se=pe,G=Me):Se=Se.next=pe,S|=ue;if(w=w.next,w===null){if(w=u.shared.pending,w===null)break;pe=w,w=pe.next,pe.next=null,u.lastBaseUpdate=pe,u.shared.pending=null}}while(!0);Se===null&&(G=Me),u.baseState=G,u.firstBaseUpdate=le,u.lastBaseUpdate=Se,d===null&&(u.shared.lanes=0),ts|=S,t.lanes=S,t.memoizedState=Me}}function ug(t,n){if(typeof t!="function")throw Error(a(191,t));t.call(n)}function fg(t,n){var s=t.callbacks;if(s!==null)for(t.callbacks=null,t=0;t<s.length;t++)ug(s[t],n)}var _r=D(null),ec=D(0);function dg(t,n){t=ya,ve(ec,t),ve(_r,n),ya=t|n.baseLanes}function Lf(){ve(ec,ya),ve(_r,_r.current)}function Of(){ya=ec.current,ne(_r),ne(ec)}var ai=D(null),Si=null;function Qa(t){var n=t.alternate;ve(cn,cn.current&1),ve(ai,t),Si===null&&(n===null||_r.current!==null||n.memoizedState!==null)&&(Si=t)}function Pf(t){ve(cn,cn.current),ve(ai,t),Si===null&&(Si=t)}function hg(t){t.tag===22?(ve(cn,cn.current),ve(ai,t),Si===null&&(Si=t)):Ja()}function Ja(){ve(cn,cn.current),ve(ai,ai.current)}function si(t){ne(ai),Si===t&&(Si=null),ne(cn)}var cn=D(0);function tc(t){for(var n=t;n!==null;){if(n.tag===13){var s=n.memoizedState;if(s!==null&&(s=s.dehydrated,s===null||Gd(s)||Vd(s)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var ha=0,ct=null,Gt=null,mn=null,nc=!1,Sr=!1,Bs=!1,ic=0,Uo=0,yr=null,yy=0;function rn(){throw Error(a(321))}function If(t,n){if(n===null)return!1;for(var s=0;s<n.length&&s<t.length;s++)if(!ni(t[s],n[s]))return!1;return!0}function Bf(t,n,s,o,u,d){return ha=d,ct=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,H.H=t===null||t.memoizedState===null?Kg:Jf,Bs=!1,d=s(o,u),Bs=!1,Sr&&(d=mg(n,s,o,u)),pg(t),d}function pg(t){H.H=Po;var n=Gt!==null&&Gt.next!==null;if(ha=0,mn=Gt=ct=null,nc=!1,Uo=0,yr=null,n)throw Error(a(300));t===null||gn||(t=t.dependencies,t!==null&&ql(t)&&(gn=!0))}function mg(t,n,s,o){ct=t;var u=0;do{if(Sr&&(yr=null),Uo=0,Sr=!1,25<=u)throw Error(a(301));if(u+=1,mn=Gt=null,t.updateQueue!=null){var d=t.updateQueue;d.lastEffect=null,d.events=null,d.stores=null,d.memoCache!=null&&(d.memoCache.index=0)}H.H=Qg,d=n(s,o)}while(Sr);return d}function by(){var t=H.H,n=t.useState()[0];return n=typeof n.then=="function"?Lo(n):n,t=t.useState()[0],(Gt!==null?Gt.memoizedState:null)!==t&&(ct.flags|=1024),n}function Ff(){var t=ic!==0;return ic=0,t}function zf(t,n,s){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~s}function Hf(t){if(nc){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}nc=!1}ha=0,mn=Gt=ct=null,Sr=!1,Uo=ic=0,yr=null}function Gn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return mn===null?ct.memoizedState=mn=t:mn=mn.next=t,mn}function un(){if(Gt===null){var t=ct.alternate;t=t!==null?t.memoizedState:null}else t=Gt.next;var n=mn===null?ct.memoizedState:mn.next;if(n!==null)mn=n,Gt=t;else{if(t===null)throw ct.alternate===null?Error(a(467)):Error(a(310));Gt=t,t={memoizedState:Gt.memoizedState,baseState:Gt.baseState,baseQueue:Gt.baseQueue,queue:Gt.queue,next:null},mn===null?ct.memoizedState=mn=t:mn=mn.next=t}return mn}function ac(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Lo(t){var n=Uo;return Uo+=1,yr===null&&(yr=[]),t=sg(yr,t,n),n=ct,(mn===null?n.memoizedState:mn.next)===null&&(n=n.alternate,H.H=n===null||n.memoizedState===null?Kg:Jf),t}function sc(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return Lo(t);if(t.$$typeof===z)return wn(t)}throw Error(a(438,String(t)))}function Gf(t){var n=null,s=ct.updateQueue;if(s!==null&&(n=s.memoCache),n==null){var o=ct.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(n={data:o.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),s===null&&(s=ac(),ct.updateQueue=s),s.memoCache=n,s=n.data[n.index],s===void 0)for(s=n.data[n.index]=Array(t),o=0;o<t;o++)s[o]=X;return n.index++,s}function pa(t,n){return typeof n=="function"?n(t):n}function rc(t){var n=un();return Vf(n,Gt,t)}function Vf(t,n,s){var o=t.queue;if(o===null)throw Error(a(311));o.lastRenderedReducer=s;var u=t.baseQueue,d=o.pending;if(d!==null){if(u!==null){var S=u.next;u.next=d.next,d.next=S}n.baseQueue=u=d,o.pending=null}if(d=t.baseState,u===null)t.memoizedState=d;else{n=u.next;var w=S=null,G=null,le=n,Se=!1;do{var Me=le.lane&-536870913;if(Me!==le.lane?(St&Me)===Me:(ha&Me)===Me){var ue=le.revertLane;if(ue===0)G!==null&&(G=G.next={lane:0,revertLane:0,gesture:null,action:le.action,hasEagerState:le.hasEagerState,eagerState:le.eagerState,next:null}),Me===mr&&(Se=!0);else if((ha&ue)===ue){le=le.next,ue===mr&&(Se=!0);continue}else Me={lane:0,revertLane:le.revertLane,gesture:null,action:le.action,hasEagerState:le.hasEagerState,eagerState:le.eagerState,next:null},G===null?(w=G=Me,S=d):G=G.next=Me,ct.lanes|=ue,ts|=ue;Me=le.action,Bs&&s(d,Me),d=le.hasEagerState?le.eagerState:s(d,Me)}else ue={lane:Me,revertLane:le.revertLane,gesture:le.gesture,action:le.action,hasEagerState:le.hasEagerState,eagerState:le.eagerState,next:null},G===null?(w=G=ue,S=d):G=G.next=ue,ct.lanes|=Me,ts|=Me;le=le.next}while(le!==null&&le!==n);if(G===null?S=d:G.next=w,!ni(d,t.memoizedState)&&(gn=!0,Se&&(s=gr,s!==null)))throw s;t.memoizedState=d,t.baseState=S,t.baseQueue=G,o.lastRenderedState=d}return u===null&&(o.lanes=0),[t.memoizedState,o.dispatch]}function kf(t){var n=un(),s=n.queue;if(s===null)throw Error(a(311));s.lastRenderedReducer=t;var o=s.dispatch,u=s.pending,d=n.memoizedState;if(u!==null){s.pending=null;var S=u=u.next;do d=t(d,S.action),S=S.next;while(S!==u);ni(d,n.memoizedState)||(gn=!0),n.memoizedState=d,n.baseQueue===null&&(n.baseState=d),s.lastRenderedState=d}return[d,o]}function gg(t,n,s){var o=ct,u=un(),d=Mt;if(d){if(s===void 0)throw Error(a(407));s=s()}else s=n();var S=!ni((Gt||u).memoizedState,s);if(S&&(u.memoizedState=s,gn=!0),u=u.queue,jf(_g.bind(null,o,u,t),[t]),u.getSnapshot!==n||S||mn!==null&&mn.memoizedState.tag&1){if(o.flags|=2048,br(9,{destroy:void 0},vg.bind(null,o,u,s,n),null),Yt===null)throw Error(a(349));d||(ha&127)!==0||xg(o,n,s)}return s}function xg(t,n,s){t.flags|=16384,t={getSnapshot:n,value:s},n=ct.updateQueue,n===null?(n=ac(),ct.updateQueue=n,n.stores=[t]):(s=n.stores,s===null?n.stores=[t]:s.push(t))}function vg(t,n,s,o){n.value=s,n.getSnapshot=o,Sg(n)&&yg(t)}function _g(t,n,s){return s(function(){Sg(n)&&yg(t)})}function Sg(t){var n=t.getSnapshot;t=t.value;try{var s=n();return!ni(t,s)}catch{return!0}}function yg(t){var n=ws(t,2);n!==null&&Qn(n,t,2)}function Wf(t){var n=Gn();if(typeof t=="function"){var s=t;if(t=s(),Bs){we(!0);try{s()}finally{we(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:pa,lastRenderedState:t},n}function bg(t,n,s,o){return t.baseState=s,Vf(t,Gt,typeof o=="function"?o:pa)}function My(t,n,s,o,u){if(cc(t))throw Error(a(485));if(t=n.action,t!==null){var d={payload:u,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(S){d.listeners.push(S)}};H.T!==null?s(!0):d.isTransition=!1,o(d),s=n.pending,s===null?(d.next=n.pending=d,Mg(n,d)):(d.next=s.next,n.pending=s.next=d)}}function Mg(t,n){var s=n.action,o=n.payload,u=t.state;if(n.isTransition){var d=H.T,S={};H.T=S;try{var w=s(u,o),G=H.S;G!==null&&G(S,w),Eg(t,n,w)}catch(le){Xf(t,n,le)}finally{d!==null&&S.types!==null&&(d.types=S.types),H.T=d}}else try{d=s(u,o),Eg(t,n,d)}catch(le){Xf(t,n,le)}}function Eg(t,n,s){s!==null&&typeof s=="object"&&typeof s.then=="function"?s.then(function(o){Tg(t,n,o)},function(o){return Xf(t,n,o)}):Tg(t,n,s)}function Tg(t,n,s){n.status="fulfilled",n.value=s,Ag(n),t.state=s,n=t.pending,n!==null&&(s=n.next,s===n?t.pending=null:(s=s.next,n.next=s,Mg(t,s)))}function Xf(t,n,s){var o=t.pending;if(t.pending=null,o!==null){o=o.next;do n.status="rejected",n.reason=s,Ag(n),n=n.next;while(n!==o)}t.action=null}function Ag(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function Rg(t,n){return n}function wg(t,n){if(Mt){var s=Yt.formState;if(s!==null){e:{var o=ct;if(Mt){if(Kt){t:{for(var u=Kt,d=_i;u.nodeType!==8;){if(!d){u=null;break t}if(u=yi(u.nextSibling),u===null){u=null;break t}}d=u.data,u=d==="F!"||d==="F"?u:null}if(u){Kt=yi(u.nextSibling),o=u.data==="F!";break e}}ja(o)}o=!1}o&&(n=s[0])}}return s=Gn(),s.memoizedState=s.baseState=n,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Rg,lastRenderedState:n},s.queue=o,s=qg.bind(null,ct,o),o.dispatch=s,o=Wf(!1),d=Qf.bind(null,ct,!1,o.queue),o=Gn(),u={state:n,dispatch:null,action:t,pending:null},o.queue=u,s=My.bind(null,ct,u,d,s),u.dispatch=s,o.memoizedState=t,[n,s,!1]}function Cg(t){var n=un();return Ng(n,Gt,t)}function Ng(t,n,s){if(n=Vf(t,n,Rg)[0],t=rc(pa)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var o=Lo(n)}catch(S){throw S===xr?Kl:S}else o=n;n=un();var u=n.queue,d=u.dispatch;return s!==n.memoizedState&&(ct.flags|=2048,br(9,{destroy:void 0},Ey.bind(null,u,s),null)),[o,d,t]}function Ey(t,n){t.action=n}function Dg(t){var n=un(),s=Gt;if(s!==null)return Ng(n,s,t);un(),n=n.memoizedState,s=un();var o=s.queue.dispatch;return s.memoizedState=t,[n,o,!1]}function br(t,n,s,o){return t={tag:t,create:s,deps:o,inst:n,next:null},n=ct.updateQueue,n===null&&(n=ac(),ct.updateQueue=n),s=n.lastEffect,s===null?n.lastEffect=t.next=t:(o=s.next,s.next=t,t.next=o,n.lastEffect=t),t}function Ug(){return un().memoizedState}function oc(t,n,s,o){var u=Gn();ct.flags|=t,u.memoizedState=br(1|n,{destroy:void 0},s,o===void 0?null:o)}function lc(t,n,s,o){var u=un();o=o===void 0?null:o;var d=u.memoizedState.inst;Gt!==null&&o!==null&&If(o,Gt.memoizedState.deps)?u.memoizedState=br(n,d,s,o):(ct.flags|=t,u.memoizedState=br(1|n,d,s,o))}function Lg(t,n){oc(8390656,8,t,n)}function jf(t,n){lc(2048,8,t,n)}function Ty(t){ct.flags|=4;var n=ct.updateQueue;if(n===null)n=ac(),ct.updateQueue=n,n.events=[t];else{var s=n.events;s===null?n.events=[t]:s.push(t)}}function Og(t){var n=un().memoizedState;return Ty({ref:n,nextImpl:t}),function(){if((Lt&2)!==0)throw Error(a(440));return n.impl.apply(void 0,arguments)}}function Pg(t,n){return lc(4,2,t,n)}function Ig(t,n){return lc(4,4,t,n)}function Bg(t,n){if(typeof n=="function"){t=t();var s=n(t);return function(){typeof s=="function"?s():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function Fg(t,n,s){s=s!=null?s.concat([t]):null,lc(4,4,Bg.bind(null,n,t),s)}function qf(){}function zg(t,n){var s=un();n=n===void 0?null:n;var o=s.memoizedState;return n!==null&&If(n,o[1])?o[0]:(s.memoizedState=[t,n],t)}function Hg(t,n){var s=un();n=n===void 0?null:n;var o=s.memoizedState;if(n!==null&&If(n,o[1]))return o[0];if(o=t(),Bs){we(!0);try{t()}finally{we(!1)}}return s.memoizedState=[o,n],o}function Yf(t,n,s){return s===void 0||(ha&1073741824)!==0&&(St&261930)===0?t.memoizedState=n:(t.memoizedState=s,t=G0(),ct.lanes|=t,ts|=t,s)}function Gg(t,n,s,o){return ni(s,n)?s:_r.current!==null?(t=Yf(t,s,o),ni(t,n)||(gn=!0),t):(ha&42)===0||(ha&1073741824)!==0&&(St&261930)===0?(gn=!0,t.memoizedState=s):(t=G0(),ct.lanes|=t,ts|=t,n)}function Vg(t,n,s,o,u){var d=F.p;F.p=d!==0&&8>d?d:8;var S=H.T,w={};H.T=w,Qf(t,!1,n,s);try{var G=u(),le=H.S;if(le!==null&&le(w,G),G!==null&&typeof G=="object"&&typeof G.then=="function"){var Se=Sy(G,o);Oo(t,n,Se,li(t))}else Oo(t,n,o,li(t))}catch(Me){Oo(t,n,{then:function(){},status:"rejected",reason:Me},li())}finally{F.p=d,S!==null&&w.types!==null&&(S.types=w.types),H.T=S}}function Ay(){}function Zf(t,n,s,o){if(t.tag!==5)throw Error(a(476));var u=kg(t).queue;Vg(t,u,n,J,s===null?Ay:function(){return Wg(t),s(o)})}function kg(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:J,baseState:J,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:pa,lastRenderedState:J},next:null};var s={};return n.next={memoizedState:s,baseState:s,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:pa,lastRenderedState:s},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function Wg(t){var n=kg(t);n.next===null&&(n=t.alternate.memoizedState),Oo(t,n.next.queue,{},li())}function Kf(){return wn(Qo)}function Xg(){return un().memoizedState}function jg(){return un().memoizedState}function Ry(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var s=li();t=Za(s);var o=Ka(n,t,s);o!==null&&(Qn(o,n,s),Co(o,n,s)),n={cache:Tf()},t.payload=n;return}n=n.return}}function wy(t,n,s){var o=li();s={lane:o,revertLane:0,gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null},cc(t)?Yg(n,s):(s=pf(t,n,s,o),s!==null&&(Qn(s,t,o),Zg(s,n,o)))}function qg(t,n,s){var o=li();Oo(t,n,s,o)}function Oo(t,n,s,o){var u={lane:o,revertLane:0,gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null};if(cc(t))Yg(n,u);else{var d=t.alternate;if(t.lanes===0&&(d===null||d.lanes===0)&&(d=n.lastRenderedReducer,d!==null))try{var S=n.lastRenderedState,w=d(S,s);if(u.hasEagerState=!0,u.eagerState=w,ni(w,S))return kl(t,n,u,0),Yt===null&&Vl(),!1}catch{}if(s=pf(t,n,u,o),s!==null)return Qn(s,t,o),Zg(s,n,o),!0}return!1}function Qf(t,n,s,o){if(o={lane:2,revertLane:Cd(),gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},cc(t)){if(n)throw Error(a(479))}else n=pf(t,s,o,2),n!==null&&Qn(n,t,2)}function cc(t){var n=t.alternate;return t===ct||n!==null&&n===ct}function Yg(t,n){Sr=nc=!0;var s=t.pending;s===null?n.next=n:(n.next=s.next,s.next=n),t.pending=n}function Zg(t,n,s){if((s&4194048)!==0){var o=n.lanes;o&=t.pendingLanes,s|=o,n.lanes=s,Wn(t,s)}}var Po={readContext:wn,use:sc,useCallback:rn,useContext:rn,useEffect:rn,useImperativeHandle:rn,useLayoutEffect:rn,useInsertionEffect:rn,useMemo:rn,useReducer:rn,useRef:rn,useState:rn,useDebugValue:rn,useDeferredValue:rn,useTransition:rn,useSyncExternalStore:rn,useId:rn,useHostTransitionStatus:rn,useFormState:rn,useActionState:rn,useOptimistic:rn,useMemoCache:rn,useCacheRefresh:rn};Po.useEffectEvent=rn;var Kg={readContext:wn,use:sc,useCallback:function(t,n){return Gn().memoizedState=[t,n===void 0?null:n],t},useContext:wn,useEffect:Lg,useImperativeHandle:function(t,n,s){s=s!=null?s.concat([t]):null,oc(4194308,4,Bg.bind(null,n,t),s)},useLayoutEffect:function(t,n){return oc(4194308,4,t,n)},useInsertionEffect:function(t,n){oc(4,2,t,n)},useMemo:function(t,n){var s=Gn();n=n===void 0?null:n;var o=t();if(Bs){we(!0);try{t()}finally{we(!1)}}return s.memoizedState=[o,n],o},useReducer:function(t,n,s){var o=Gn();if(s!==void 0){var u=s(n);if(Bs){we(!0);try{s(n)}finally{we(!1)}}}else u=n;return o.memoizedState=o.baseState=u,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:u},o.queue=t,t=t.dispatch=wy.bind(null,ct,t),[o.memoizedState,t]},useRef:function(t){var n=Gn();return t={current:t},n.memoizedState=t},useState:function(t){t=Wf(t);var n=t.queue,s=qg.bind(null,ct,n);return n.dispatch=s,[t.memoizedState,s]},useDebugValue:qf,useDeferredValue:function(t,n){var s=Gn();return Yf(s,t,n)},useTransition:function(){var t=Wf(!1);return t=Vg.bind(null,ct,t.queue,!0,!1),Gn().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,s){var o=ct,u=Gn();if(Mt){if(s===void 0)throw Error(a(407));s=s()}else{if(s=n(),Yt===null)throw Error(a(349));(St&127)!==0||xg(o,n,s)}u.memoizedState=s;var d={value:s,getSnapshot:n};return u.queue=d,Lg(_g.bind(null,o,d,t),[t]),o.flags|=2048,br(9,{destroy:void 0},vg.bind(null,o,d,s,n),null),s},useId:function(){var t=Gn(),n=Yt.identifierPrefix;if(Mt){var s=ji,o=Xi;s=(o&~(1<<32-Ve(o)-1)).toString(32)+s,n="_"+n+"R_"+s,s=ic++,0<s&&(n+="H"+s.toString(32)),n+="_"}else s=yy++,n="_"+n+"r_"+s.toString(32)+"_";return t.memoizedState=n},useHostTransitionStatus:Kf,useFormState:wg,useActionState:wg,useOptimistic:function(t){var n=Gn();n.memoizedState=n.baseState=t;var s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=s,n=Qf.bind(null,ct,!0,s),s.dispatch=n,[t,n]},useMemoCache:Gf,useCacheRefresh:function(){return Gn().memoizedState=Ry.bind(null,ct)},useEffectEvent:function(t){var n=Gn(),s={impl:t};return n.memoizedState=s,function(){if((Lt&2)!==0)throw Error(a(440));return s.impl.apply(void 0,arguments)}}},Jf={readContext:wn,use:sc,useCallback:zg,useContext:wn,useEffect:jf,useImperativeHandle:Fg,useInsertionEffect:Pg,useLayoutEffect:Ig,useMemo:Hg,useReducer:rc,useRef:Ug,useState:function(){return rc(pa)},useDebugValue:qf,useDeferredValue:function(t,n){var s=un();return Gg(s,Gt.memoizedState,t,n)},useTransition:function(){var t=rc(pa)[0],n=un().memoizedState;return[typeof t=="boolean"?t:Lo(t),n]},useSyncExternalStore:gg,useId:Xg,useHostTransitionStatus:Kf,useFormState:Cg,useActionState:Cg,useOptimistic:function(t,n){var s=un();return bg(s,Gt,t,n)},useMemoCache:Gf,useCacheRefresh:jg};Jf.useEffectEvent=Og;var Qg={readContext:wn,use:sc,useCallback:zg,useContext:wn,useEffect:jf,useImperativeHandle:Fg,useInsertionEffect:Pg,useLayoutEffect:Ig,useMemo:Hg,useReducer:kf,useRef:Ug,useState:function(){return kf(pa)},useDebugValue:qf,useDeferredValue:function(t,n){var s=un();return Gt===null?Yf(s,t,n):Gg(s,Gt.memoizedState,t,n)},useTransition:function(){var t=kf(pa)[0],n=un().memoizedState;return[typeof t=="boolean"?t:Lo(t),n]},useSyncExternalStore:gg,useId:Xg,useHostTransitionStatus:Kf,useFormState:Dg,useActionState:Dg,useOptimistic:function(t,n){var s=un();return Gt!==null?bg(s,Gt,t,n):(s.baseState=t,[t,s.queue.dispatch])},useMemoCache:Gf,useCacheRefresh:jg};Qg.useEffectEvent=Og;function $f(t,n,s,o){n=t.memoizedState,s=s(o,n),s=s==null?n:v({},n,s),t.memoizedState=s,t.lanes===0&&(t.updateQueue.baseState=s)}var ed={enqueueSetState:function(t,n,s){t=t._reactInternals;var o=li(),u=Za(o);u.payload=n,s!=null&&(u.callback=s),n=Ka(t,u,o),n!==null&&(Qn(n,t,o),Co(n,t,o))},enqueueReplaceState:function(t,n,s){t=t._reactInternals;var o=li(),u=Za(o);u.tag=1,u.payload=n,s!=null&&(u.callback=s),n=Ka(t,u,o),n!==null&&(Qn(n,t,o),Co(n,t,o))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var s=li(),o=Za(s);o.tag=2,n!=null&&(o.callback=n),n=Ka(t,o,s),n!==null&&(Qn(n,t,s),Co(n,t,s))}};function Jg(t,n,s,o,u,d,S){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(o,d,S):n.prototype&&n.prototype.isPureReactComponent?!yo(s,o)||!yo(u,d):!0}function $g(t,n,s,o){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(s,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(s,o),n.state!==t&&ed.enqueueReplaceState(n,n.state,null)}function Fs(t,n){var s=n;if("ref"in n){s={};for(var o in n)o!=="ref"&&(s[o]=n[o])}if(t=t.defaultProps){s===n&&(s=v({},s));for(var u in t)s[u]===void 0&&(s[u]=t[u])}return s}function e0(t){Gl(t)}function t0(t){console.error(t)}function n0(t){Gl(t)}function uc(t,n){try{var s=t.onUncaughtError;s(n.value,{componentStack:n.stack})}catch(o){setTimeout(function(){throw o})}}function i0(t,n,s){try{var o=t.onCaughtError;o(s.value,{componentStack:s.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function td(t,n,s){return s=Za(s),s.tag=3,s.payload={element:null},s.callback=function(){uc(t,n)},s}function a0(t){return t=Za(t),t.tag=3,t}function s0(t,n,s,o){var u=s.type.getDerivedStateFromError;if(typeof u=="function"){var d=o.value;t.payload=function(){return u(d)},t.callback=function(){i0(n,s,o)}}var S=s.stateNode;S!==null&&typeof S.componentDidCatch=="function"&&(t.callback=function(){i0(n,s,o),typeof u!="function"&&(ns===null?ns=new Set([this]):ns.add(this));var w=o.stack;this.componentDidCatch(o.value,{componentStack:w!==null?w:""})})}function Cy(t,n,s,o,u){if(s.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(n=s.alternate,n!==null&&pr(n,s,u,!0),s=ai.current,s!==null){switch(s.tag){case 31:case 13:return Si===null?bc():s.alternate===null&&on===0&&(on=3),s.flags&=-257,s.flags|=65536,s.lanes=u,o===Ql?s.flags|=16384:(n=s.updateQueue,n===null?s.updateQueue=new Set([o]):n.add(o),Ad(t,o,u)),!1;case 22:return s.flags|=65536,o===Ql?s.flags|=16384:(n=s.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([o])},s.updateQueue=n):(s=n.retryQueue,s===null?n.retryQueue=new Set([o]):s.add(o)),Ad(t,o,u)),!1}throw Error(a(435,s.tag))}return Ad(t,o,u),bc(),!1}if(Mt)return n=ai.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,o!==Sf&&(t=Error(a(422),{cause:o}),Eo(gi(t,s)))):(o!==Sf&&(n=Error(a(423),{cause:o}),Eo(gi(n,s))),t=t.current.alternate,t.flags|=65536,u&=-u,t.lanes|=u,o=gi(o,s),u=td(t.stateNode,o,u),Df(t,u),on!==4&&(on=2)),!1;var d=Error(a(520),{cause:o});if(d=gi(d,s),ko===null?ko=[d]:ko.push(d),on!==4&&(on=2),n===null)return!0;o=gi(o,s),s=n;do{switch(s.tag){case 3:return s.flags|=65536,t=u&-u,s.lanes|=t,t=td(s.stateNode,o,t),Df(s,t),!1;case 1:if(n=s.type,d=s.stateNode,(s.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||d!==null&&typeof d.componentDidCatch=="function"&&(ns===null||!ns.has(d))))return s.flags|=65536,u&=-u,s.lanes|=u,u=a0(u),s0(u,t,s,o),Df(s,u),!1}s=s.return}while(s!==null);return!1}var nd=Error(a(461)),gn=!1;function Cn(t,n,s,o){n.child=t===null?cg(n,null,s,o):Is(n,t.child,s,o)}function r0(t,n,s,o,u){s=s.render;var d=n.ref;if("ref"in o){var S={};for(var w in o)w!=="ref"&&(S[w]=o[w])}else S=o;return Us(n),o=Bf(t,n,s,S,d,u),w=Ff(),t!==null&&!gn?(zf(t,n,u),ma(t,n,u)):(Mt&&w&&vf(n),n.flags|=1,Cn(t,n,o,u),n.child)}function o0(t,n,s,o,u){if(t===null){var d=s.type;return typeof d=="function"&&!mf(d)&&d.defaultProps===void 0&&s.compare===null?(n.tag=15,n.type=d,l0(t,n,d,o,u)):(t=Xl(s.type,null,o,n,n.mode,u),t.ref=n.ref,t.return=n,n.child=t)}if(d=t.child,!ud(t,u)){var S=d.memoizedProps;if(s=s.compare,s=s!==null?s:yo,s(S,o)&&t.ref===n.ref)return ma(t,n,u)}return n.flags|=1,t=ca(d,o),t.ref=n.ref,t.return=n,n.child=t}function l0(t,n,s,o,u){if(t!==null){var d=t.memoizedProps;if(yo(d,o)&&t.ref===n.ref)if(gn=!1,n.pendingProps=o=d,ud(t,u))(t.flags&131072)!==0&&(gn=!0);else return n.lanes=t.lanes,ma(t,n,u)}return id(t,n,s,o,u)}function c0(t,n,s,o){var u=o.children,d=t!==null?t.memoizedState:null;if(t===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),o.mode==="hidden"){if((n.flags&128)!==0){if(d=d!==null?d.baseLanes|s:s,t!==null){for(o=n.child=t.child,u=0;o!==null;)u=u|o.lanes|o.childLanes,o=o.sibling;o=u&~d}else o=0,n.child=null;return u0(t,n,d,s,o)}if((s&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&Zl(n,d!==null?d.cachePool:null),d!==null?dg(n,d):Lf(),hg(n);else return o=n.lanes=536870912,u0(t,n,d!==null?d.baseLanes|s:s,s,o)}else d!==null?(Zl(n,d.cachePool),dg(n,d),Ja(),n.memoizedState=null):(t!==null&&Zl(n,null),Lf(),Ja());return Cn(t,n,u,s),n.child}function Io(t,n){return t!==null&&t.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function u0(t,n,s,o,u){var d=Rf();return d=d===null?null:{parent:pn._currentValue,pool:d},n.memoizedState={baseLanes:s,cachePool:d},t!==null&&Zl(n,null),Lf(),hg(n),t!==null&&pr(t,n,o,!0),n.childLanes=u,null}function fc(t,n){return n=hc({mode:n.mode,children:n.children},t.mode),n.ref=t.ref,t.child=n,n.return=t,n}function f0(t,n,s){return Is(n,t.child,null,s),t=fc(n,n.pendingProps),t.flags|=2,si(n),n.memoizedState=null,t}function Ny(t,n,s){var o=n.pendingProps,u=(n.flags&128)!==0;if(n.flags&=-129,t===null){if(Mt){if(o.mode==="hidden")return t=fc(n,o),n.lanes=536870912,Io(null,t);if(Pf(n),(t=Kt)?(t=Mx(t,_i),t=t!==null&&t.data==="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:Wa!==null?{id:Xi,overflow:ji}:null,retryLane:536870912,hydrationErrors:null},s=Ym(t),s.return=n,n.child=s,Rn=n,Kt=null)):t=null,t===null)throw ja(n);return n.lanes=536870912,null}return fc(n,o)}var d=t.memoizedState;if(d!==null){var S=d.dehydrated;if(Pf(n),u)if(n.flags&256)n.flags&=-257,n=f0(t,n,s);else if(n.memoizedState!==null)n.child=t.child,n.flags|=128,n=null;else throw Error(a(558));else if(gn||pr(t,n,s,!1),u=(s&t.childLanes)!==0,gn||u){if(o=Yt,o!==null&&(S=ei(o,s),S!==0&&S!==d.retryLane))throw d.retryLane=S,ws(t,S),Qn(o,t,S),nd;bc(),n=f0(t,n,s)}else t=d.treeContext,Kt=yi(S.nextSibling),Rn=n,Mt=!0,Xa=null,_i=!1,t!==null&&Qm(n,t),n=fc(n,o),n.flags|=4096;return n}return t=ca(t.child,{mode:o.mode,children:o.children}),t.ref=n.ref,n.child=t,t.return=n,t}function dc(t,n){var s=n.ref;if(s===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof s!="function"&&typeof s!="object")throw Error(a(284));(t===null||t.ref!==s)&&(n.flags|=4194816)}}function id(t,n,s,o,u){return Us(n),s=Bf(t,n,s,o,void 0,u),o=Ff(),t!==null&&!gn?(zf(t,n,u),ma(t,n,u)):(Mt&&o&&vf(n),n.flags|=1,Cn(t,n,s,u),n.child)}function d0(t,n,s,o,u,d){return Us(n),n.updateQueue=null,s=mg(n,o,s,u),pg(t),o=Ff(),t!==null&&!gn?(zf(t,n,d),ma(t,n,d)):(Mt&&o&&vf(n),n.flags|=1,Cn(t,n,s,d),n.child)}function h0(t,n,s,o,u){if(Us(n),n.stateNode===null){var d=ur,S=s.contextType;typeof S=="object"&&S!==null&&(d=wn(S)),d=new s(o,d),n.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,d.updater=ed,n.stateNode=d,d._reactInternals=n,d=n.stateNode,d.props=o,d.state=n.memoizedState,d.refs={},Cf(n),S=s.contextType,d.context=typeof S=="object"&&S!==null?wn(S):ur,d.state=n.memoizedState,S=s.getDerivedStateFromProps,typeof S=="function"&&($f(n,s,S,o),d.state=n.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(S=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),S!==d.state&&ed.enqueueReplaceState(d,d.state,null),Do(n,o,d,u),No(),d.state=n.memoizedState),typeof d.componentDidMount=="function"&&(n.flags|=4194308),o=!0}else if(t===null){d=n.stateNode;var w=n.memoizedProps,G=Fs(s,w);d.props=G;var le=d.context,Se=s.contextType;S=ur,typeof Se=="object"&&Se!==null&&(S=wn(Se));var Me=s.getDerivedStateFromProps;Se=typeof Me=="function"||typeof d.getSnapshotBeforeUpdate=="function",w=n.pendingProps!==w,Se||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(w||le!==S)&&$g(n,d,o,S),Ya=!1;var ue=n.memoizedState;d.state=ue,Do(n,o,d,u),No(),le=n.memoizedState,w||ue!==le||Ya?(typeof Me=="function"&&($f(n,s,Me,o),le=n.memoizedState),(G=Ya||Jg(n,s,G,o,ue,le,S))?(Se||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount()),typeof d.componentDidMount=="function"&&(n.flags|=4194308)):(typeof d.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=le),d.props=o,d.state=le,d.context=S,o=G):(typeof d.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{d=n.stateNode,Nf(t,n),S=n.memoizedProps,Se=Fs(s,S),d.props=Se,Me=n.pendingProps,ue=d.context,le=s.contextType,G=ur,typeof le=="object"&&le!==null&&(G=wn(le)),w=s.getDerivedStateFromProps,(le=typeof w=="function"||typeof d.getSnapshotBeforeUpdate=="function")||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(S!==Me||ue!==G)&&$g(n,d,o,G),Ya=!1,ue=n.memoizedState,d.state=ue,Do(n,o,d,u),No();var pe=n.memoizedState;S!==Me||ue!==pe||Ya||t!==null&&t.dependencies!==null&&ql(t.dependencies)?(typeof w=="function"&&($f(n,s,w,o),pe=n.memoizedState),(Se=Ya||Jg(n,s,Se,o,ue,pe,G)||t!==null&&t.dependencies!==null&&ql(t.dependencies))?(le||typeof d.UNSAFE_componentWillUpdate!="function"&&typeof d.componentWillUpdate!="function"||(typeof d.componentWillUpdate=="function"&&d.componentWillUpdate(o,pe,G),typeof d.UNSAFE_componentWillUpdate=="function"&&d.UNSAFE_componentWillUpdate(o,pe,G)),typeof d.componentDidUpdate=="function"&&(n.flags|=4),typeof d.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof d.componentDidUpdate!="function"||S===t.memoizedProps&&ue===t.memoizedState||(n.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||S===t.memoizedProps&&ue===t.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=pe),d.props=o,d.state=pe,d.context=G,o=Se):(typeof d.componentDidUpdate!="function"||S===t.memoizedProps&&ue===t.memoizedState||(n.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||S===t.memoizedProps&&ue===t.memoizedState||(n.flags|=1024),o=!1)}return d=o,dc(t,n),o=(n.flags&128)!==0,d||o?(d=n.stateNode,s=o&&typeof s.getDerivedStateFromError!="function"?null:d.render(),n.flags|=1,t!==null&&o?(n.child=Is(n,t.child,null,u),n.child=Is(n,null,s,u)):Cn(t,n,s,u),n.memoizedState=d.state,t=n.child):t=ma(t,n,u),t}function p0(t,n,s,o){return Ns(),n.flags|=256,Cn(t,n,s,o),n.child}var ad={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function sd(t){return{baseLanes:t,cachePool:ig()}}function rd(t,n,s){return t=t!==null?t.childLanes&~s:0,n&&(t|=oi),t}function m0(t,n,s){var o=n.pendingProps,u=!1,d=(n.flags&128)!==0,S;if((S=d)||(S=t!==null&&t.memoizedState===null?!1:(cn.current&2)!==0),S&&(u=!0,n.flags&=-129),S=(n.flags&32)!==0,n.flags&=-33,t===null){if(Mt){if(u?Qa(n):Ja(),(t=Kt)?(t=Mx(t,_i),t=t!==null&&t.data!=="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:Wa!==null?{id:Xi,overflow:ji}:null,retryLane:536870912,hydrationErrors:null},s=Ym(t),s.return=n,n.child=s,Rn=n,Kt=null)):t=null,t===null)throw ja(n);return Vd(t)?n.lanes=32:n.lanes=536870912,null}var w=o.children;return o=o.fallback,u?(Ja(),u=n.mode,w=hc({mode:"hidden",children:w},u),o=Cs(o,u,s,null),w.return=n,o.return=n,w.sibling=o,n.child=w,o=n.child,o.memoizedState=sd(s),o.childLanes=rd(t,S,s),n.memoizedState=ad,Io(null,o)):(Qa(n),od(n,w))}var G=t.memoizedState;if(G!==null&&(w=G.dehydrated,w!==null)){if(d)n.flags&256?(Qa(n),n.flags&=-257,n=ld(t,n,s)):n.memoizedState!==null?(Ja(),n.child=t.child,n.flags|=128,n=null):(Ja(),w=o.fallback,u=n.mode,o=hc({mode:"visible",children:o.children},u),w=Cs(w,u,s,null),w.flags|=2,o.return=n,w.return=n,o.sibling=w,n.child=o,Is(n,t.child,null,s),o=n.child,o.memoizedState=sd(s),o.childLanes=rd(t,S,s),n.memoizedState=ad,n=Io(null,o));else if(Qa(n),Vd(w)){if(S=w.nextSibling&&w.nextSibling.dataset,S)var le=S.dgst;S=le,o=Error(a(419)),o.stack="",o.digest=S,Eo({value:o,source:null,stack:null}),n=ld(t,n,s)}else if(gn||pr(t,n,s,!1),S=(s&t.childLanes)!==0,gn||S){if(S=Yt,S!==null&&(o=ei(S,s),o!==0&&o!==G.retryLane))throw G.retryLane=o,ws(t,o),Qn(S,t,o),nd;Gd(w)||bc(),n=ld(t,n,s)}else Gd(w)?(n.flags|=192,n.child=t.child,n=null):(t=G.treeContext,Kt=yi(w.nextSibling),Rn=n,Mt=!0,Xa=null,_i=!1,t!==null&&Qm(n,t),n=od(n,o.children),n.flags|=4096);return n}return u?(Ja(),w=o.fallback,u=n.mode,G=t.child,le=G.sibling,o=ca(G,{mode:"hidden",children:o.children}),o.subtreeFlags=G.subtreeFlags&65011712,le!==null?w=ca(le,w):(w=Cs(w,u,s,null),w.flags|=2),w.return=n,o.return=n,o.sibling=w,n.child=o,Io(null,o),o=n.child,w=t.child.memoizedState,w===null?w=sd(s):(u=w.cachePool,u!==null?(G=pn._currentValue,u=u.parent!==G?{parent:G,pool:G}:u):u=ig(),w={baseLanes:w.baseLanes|s,cachePool:u}),o.memoizedState=w,o.childLanes=rd(t,S,s),n.memoizedState=ad,Io(t.child,o)):(Qa(n),s=t.child,t=s.sibling,s=ca(s,{mode:"visible",children:o.children}),s.return=n,s.sibling=null,t!==null&&(S=n.deletions,S===null?(n.deletions=[t],n.flags|=16):S.push(t)),n.child=s,n.memoizedState=null,s)}function od(t,n){return n=hc({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function hc(t,n){return t=ii(22,t,null,n),t.lanes=0,t}function ld(t,n,s){return Is(n,t.child,null,s),t=od(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function g0(t,n,s){t.lanes|=n;var o=t.alternate;o!==null&&(o.lanes|=n),Mf(t.return,n,s)}function cd(t,n,s,o,u,d){var S=t.memoizedState;S===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:s,tailMode:u,treeForkCount:d}:(S.isBackwards=n,S.rendering=null,S.renderingStartTime=0,S.last=o,S.tail=s,S.tailMode=u,S.treeForkCount=d)}function x0(t,n,s){var o=n.pendingProps,u=o.revealOrder,d=o.tail;o=o.children;var S=cn.current,w=(S&2)!==0;if(w?(S=S&1|2,n.flags|=128):S&=1,ve(cn,S),Cn(t,n,o,s),o=Mt?Mo:0,!w&&t!==null&&(t.flags&128)!==0)e:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&g0(t,s,n);else if(t.tag===19)g0(t,s,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break e;for(;t.sibling===null;){if(t.return===null||t.return===n)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(u){case"forwards":for(s=n.child,u=null;s!==null;)t=s.alternate,t!==null&&tc(t)===null&&(u=s),s=s.sibling;s=u,s===null?(u=n.child,n.child=null):(u=s.sibling,s.sibling=null),cd(n,!1,u,s,d,o);break;case"backwards":case"unstable_legacy-backwards":for(s=null,u=n.child,n.child=null;u!==null;){if(t=u.alternate,t!==null&&tc(t)===null){n.child=u;break}t=u.sibling,u.sibling=s,s=u,u=t}cd(n,!0,s,null,d,o);break;case"together":cd(n,!1,null,null,void 0,o);break;default:n.memoizedState=null}return n.child}function ma(t,n,s){if(t!==null&&(n.dependencies=t.dependencies),ts|=n.lanes,(s&n.childLanes)===0)if(t!==null){if(pr(t,n,s,!1),(s&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(a(153));if(n.child!==null){for(t=n.child,s=ca(t,t.pendingProps),n.child=s,s.return=n;t.sibling!==null;)t=t.sibling,s=s.sibling=ca(t,t.pendingProps),s.return=n;s.sibling=null}return n.child}function ud(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&ql(t)))}function Dy(t,n,s){switch(n.tag){case 3:_e(n,n.stateNode.containerInfo),qa(n,pn,t.memoizedState.cache),Ns();break;case 27:case 5:tt(n);break;case 4:_e(n,n.stateNode.containerInfo);break;case 10:qa(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,Pf(n),null;break;case 13:var o=n.memoizedState;if(o!==null)return o.dehydrated!==null?(Qa(n),n.flags|=128,null):(s&n.child.childLanes)!==0?m0(t,n,s):(Qa(n),t=ma(t,n,s),t!==null?t.sibling:null);Qa(n);break;case 19:var u=(t.flags&128)!==0;if(o=(s&n.childLanes)!==0,o||(pr(t,n,s,!1),o=(s&n.childLanes)!==0),u){if(o)return x0(t,n,s);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),ve(cn,cn.current),o)break;return null;case 22:return n.lanes=0,c0(t,n,s,n.pendingProps);case 24:qa(n,pn,t.memoizedState.cache)}return ma(t,n,s)}function v0(t,n,s){if(t!==null)if(t.memoizedProps!==n.pendingProps)gn=!0;else{if(!ud(t,s)&&(n.flags&128)===0)return gn=!1,Dy(t,n,s);gn=(t.flags&131072)!==0}else gn=!1,Mt&&(n.flags&1048576)!==0&&Km(n,Mo,n.index);switch(n.lanes=0,n.tag){case 16:e:{var o=n.pendingProps;if(t=Os(n.elementType),n.type=t,typeof t=="function")mf(t)?(o=Fs(t,o),n.tag=1,n=h0(null,n,t,o,s)):(n.tag=0,n=id(null,n,t,o,s));else{if(t!=null){var u=t.$$typeof;if(u===N){n.tag=11,n=r0(null,n,t,o,s);break e}else if(u===I){n.tag=14,n=o0(null,n,t,o,s);break e}}throw n=Y(t)||t,Error(a(306,n,""))}}return n;case 0:return id(t,n,n.type,n.pendingProps,s);case 1:return o=n.type,u=Fs(o,n.pendingProps),h0(t,n,o,u,s);case 3:e:{if(_e(n,n.stateNode.containerInfo),t===null)throw Error(a(387));o=n.pendingProps;var d=n.memoizedState;u=d.element,Nf(t,n),Do(n,o,null,s);var S=n.memoizedState;if(o=S.cache,qa(n,pn,o),o!==d.cache&&Ef(n,[pn],s,!0),No(),o=S.element,d.isDehydrated)if(d={element:o,isDehydrated:!1,cache:S.cache},n.updateQueue.baseState=d,n.memoizedState=d,n.flags&256){n=p0(t,n,o,s);break e}else if(o!==u){u=gi(Error(a(424)),n),Eo(u),n=p0(t,n,o,s);break e}else for(t=n.stateNode.containerInfo,t.nodeType===9?t=t.body:t=t.nodeName==="HTML"?t.ownerDocument.body:t,Kt=yi(t.firstChild),Rn=n,Mt=!0,Xa=null,_i=!0,s=cg(n,null,o,s),n.child=s;s;)s.flags=s.flags&-3|4096,s=s.sibling;else{if(Ns(),o===u){n=ma(t,n,s);break e}Cn(t,n,o,s)}n=n.child}return n;case 26:return dc(t,n),t===null?(s=Cx(n.type,null,n.pendingProps,null))?n.memoizedState=s:Mt||(s=n.type,t=n.pendingProps,o=Cc(Xe.current).createElement(s),o[fn]=n,o[An]=t,Nn(o,s,t),dn(o),n.stateNode=o):n.memoizedState=Cx(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return tt(n),t===null&&Mt&&(o=n.stateNode=Ax(n.type,n.pendingProps,Xe.current),Rn=n,_i=!0,u=Kt,rs(n.type)?(kd=u,Kt=yi(o.firstChild)):Kt=u),Cn(t,n,n.pendingProps.children,s),dc(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&Mt&&((u=o=Kt)&&(o=ob(o,n.type,n.pendingProps,_i),o!==null?(n.stateNode=o,Rn=n,Kt=yi(o.firstChild),_i=!1,u=!0):u=!1),u||ja(n)),tt(n),u=n.type,d=n.pendingProps,S=t!==null?t.memoizedProps:null,o=d.children,Fd(u,d)?o=null:S!==null&&Fd(u,S)&&(n.flags|=32),n.memoizedState!==null&&(u=Bf(t,n,by,null,null,s),Qo._currentValue=u),dc(t,n),Cn(t,n,o,s),n.child;case 6:return t===null&&Mt&&((t=s=Kt)&&(s=lb(s,n.pendingProps,_i),s!==null?(n.stateNode=s,Rn=n,Kt=null,t=!0):t=!1),t||ja(n)),null;case 13:return m0(t,n,s);case 4:return _e(n,n.stateNode.containerInfo),o=n.pendingProps,t===null?n.child=Is(n,null,o,s):Cn(t,n,o,s),n.child;case 11:return r0(t,n,n.type,n.pendingProps,s);case 7:return Cn(t,n,n.pendingProps,s),n.child;case 8:return Cn(t,n,n.pendingProps.children,s),n.child;case 12:return Cn(t,n,n.pendingProps.children,s),n.child;case 10:return o=n.pendingProps,qa(n,n.type,o.value),Cn(t,n,o.children,s),n.child;case 9:return u=n.type._context,o=n.pendingProps.children,Us(n),u=wn(u),o=o(u),n.flags|=1,Cn(t,n,o,s),n.child;case 14:return o0(t,n,n.type,n.pendingProps,s);case 15:return l0(t,n,n.type,n.pendingProps,s);case 19:return x0(t,n,s);case 31:return Ny(t,n,s);case 22:return c0(t,n,s,n.pendingProps);case 24:return Us(n),o=wn(pn),t===null?(u=Rf(),u===null&&(u=Yt,d=Tf(),u.pooledCache=d,d.refCount++,d!==null&&(u.pooledCacheLanes|=s),u=d),n.memoizedState={parent:o,cache:u},Cf(n),qa(n,pn,u)):((t.lanes&s)!==0&&(Nf(t,n),Do(n,null,null,s),No()),u=t.memoizedState,d=n.memoizedState,u.parent!==o?(u={parent:o,cache:o},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),qa(n,pn,o)):(o=d.cache,qa(n,pn,o),o!==u.cache&&Ef(n,[pn],s,!0))),Cn(t,n,n.pendingProps.children,s),n.child;case 29:throw n.pendingProps}throw Error(a(156,n.tag))}function ga(t){t.flags|=4}function fd(t,n,s,o,u){if((n=(t.mode&32)!==0)&&(n=!1),n){if(t.flags|=16777216,(u&335544128)===u)if(t.stateNode.complete)t.flags|=8192;else if(X0())t.flags|=8192;else throw Ps=Ql,wf}else t.flags&=-16777217}function _0(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!Ox(n))if(X0())t.flags|=8192;else throw Ps=Ql,wf}function pc(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?Ee():536870912,t.lanes|=n,Ar|=n)}function Bo(t,n){if(!Mt)switch(t.tailMode){case"hidden":n=t.tail;for(var s=null;n!==null;)n.alternate!==null&&(s=n),n=n.sibling;s===null?t.tail=null:s.sibling=null;break;case"collapsed":s=t.tail;for(var o=null;s!==null;)s.alternate!==null&&(o=s),s=s.sibling;o===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:o.sibling=null}}function Qt(t){var n=t.alternate!==null&&t.alternate.child===t.child,s=0,o=0;if(n)for(var u=t.child;u!==null;)s|=u.lanes|u.childLanes,o|=u.subtreeFlags&65011712,o|=u.flags&65011712,u.return=t,u=u.sibling;else for(u=t.child;u!==null;)s|=u.lanes|u.childLanes,o|=u.subtreeFlags,o|=u.flags,u.return=t,u=u.sibling;return t.subtreeFlags|=o,t.childLanes=s,n}function Uy(t,n,s){var o=n.pendingProps;switch(_f(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Qt(n),null;case 1:return Qt(n),null;case 3:return s=n.stateNode,o=null,t!==null&&(o=t.memoizedState.cache),n.memoizedState.cache!==o&&(n.flags|=2048),da(pn),Re(),s.pendingContext&&(s.context=s.pendingContext,s.pendingContext=null),(t===null||t.child===null)&&(hr(n)?ga(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,yf())),Qt(n),null;case 26:var u=n.type,d=n.memoizedState;return t===null?(ga(n),d!==null?(Qt(n),_0(n,d)):(Qt(n),fd(n,u,null,o,s))):d?d!==t.memoizedState?(ga(n),Qt(n),_0(n,d)):(Qt(n),n.flags&=-16777217):(t=t.memoizedProps,t!==o&&ga(n),Qt(n),fd(n,u,t,o,s)),null;case 27:if(Ge(n),s=Xe.current,u=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==o&&ga(n);else{if(!o){if(n.stateNode===null)throw Error(a(166));return Qt(n),null}t=Te.current,hr(n)?Jm(n):(t=Ax(u,o,s),n.stateNode=t,ga(n))}return Qt(n),null;case 5:if(Ge(n),u=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==o&&ga(n);else{if(!o){if(n.stateNode===null)throw Error(a(166));return Qt(n),null}if(d=Te.current,hr(n))Jm(n);else{var S=Cc(Xe.current);switch(d){case 1:d=S.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:d=S.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":d=S.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":d=S.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":d=S.createElement("div"),d.innerHTML="<script><\/script>",d=d.removeChild(d.firstChild);break;case"select":d=typeof o.is=="string"?S.createElement("select",{is:o.is}):S.createElement("select"),o.multiple?d.multiple=!0:o.size&&(d.size=o.size);break;default:d=typeof o.is=="string"?S.createElement(u,{is:o.is}):S.createElement(u)}}d[fn]=n,d[An]=o;e:for(S=n.child;S!==null;){if(S.tag===5||S.tag===6)d.appendChild(S.stateNode);else if(S.tag!==4&&S.tag!==27&&S.child!==null){S.child.return=S,S=S.child;continue}if(S===n)break e;for(;S.sibling===null;){if(S.return===null||S.return===n)break e;S=S.return}S.sibling.return=S.return,S=S.sibling}n.stateNode=d;e:switch(Nn(d,u,o),u){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break e;case"img":o=!0;break e;default:o=!1}o&&ga(n)}}return Qt(n),fd(n,n.type,t===null?null:t.memoizedProps,n.pendingProps,s),null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==o&&ga(n);else{if(typeof o!="string"&&n.stateNode===null)throw Error(a(166));if(t=Xe.current,hr(n)){if(t=n.stateNode,s=n.memoizedProps,o=null,u=Rn,u!==null)switch(u.tag){case 27:case 5:o=u.memoizedProps}t[fn]=n,t=!!(t.nodeValue===s||o!==null&&o.suppressHydrationWarning===!0||mx(t.nodeValue,s)),t||ja(n,!0)}else t=Cc(t).createTextNode(o),t[fn]=n,n.stateNode=t}return Qt(n),null;case 31:if(s=n.memoizedState,t===null||t.memoizedState!==null){if(o=hr(n),s!==null){if(t===null){if(!o)throw Error(a(318));if(t=n.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(a(557));t[fn]=n}else Ns(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Qt(n),t=!1}else s=yf(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=s),t=!0;if(!t)return n.flags&256?(si(n),n):(si(n),null);if((n.flags&128)!==0)throw Error(a(558))}return Qt(n),null;case 13:if(o=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(u=hr(n),o!==null&&o.dehydrated!==null){if(t===null){if(!u)throw Error(a(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(a(317));u[fn]=n}else Ns(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Qt(n),u=!1}else u=yf(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(si(n),n):(si(n),null)}return si(n),(n.flags&128)!==0?(n.lanes=s,n):(s=o!==null,t=t!==null&&t.memoizedState!==null,s&&(o=n.child,u=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(u=o.alternate.memoizedState.cachePool.pool),d=null,o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(d=o.memoizedState.cachePool.pool),d!==u&&(o.flags|=2048)),s!==t&&s&&(n.child.flags|=8192),pc(n,n.updateQueue),Qt(n),null);case 4:return Re(),t===null&&Ld(n.stateNode.containerInfo),Qt(n),null;case 10:return da(n.type),Qt(n),null;case 19:if(ne(cn),o=n.memoizedState,o===null)return Qt(n),null;if(u=(n.flags&128)!==0,d=o.rendering,d===null)if(u)Bo(o,!1);else{if(on!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(d=tc(t),d!==null){for(n.flags|=128,Bo(o,!1),t=d.updateQueue,n.updateQueue=t,pc(n,t),n.subtreeFlags=0,t=s,s=n.child;s!==null;)qm(s,t),s=s.sibling;return ve(cn,cn.current&1|2),Mt&&ua(n,o.treeForkCount),n.child}t=t.sibling}o.tail!==null&&Pt()>_c&&(n.flags|=128,u=!0,Bo(o,!1),n.lanes=4194304)}else{if(!u)if(t=tc(d),t!==null){if(n.flags|=128,u=!0,t=t.updateQueue,n.updateQueue=t,pc(n,t),Bo(o,!0),o.tail===null&&o.tailMode==="hidden"&&!d.alternate&&!Mt)return Qt(n),null}else 2*Pt()-o.renderingStartTime>_c&&s!==536870912&&(n.flags|=128,u=!0,Bo(o,!1),n.lanes=4194304);o.isBackwards?(d.sibling=n.child,n.child=d):(t=o.last,t!==null?t.sibling=d:n.child=d,o.last=d)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=Pt(),t.sibling=null,s=cn.current,ve(cn,u?s&1|2:s&1),Mt&&ua(n,o.treeForkCount),t):(Qt(n),null);case 22:case 23:return si(n),Of(),o=n.memoizedState!==null,t!==null?t.memoizedState!==null!==o&&(n.flags|=8192):o&&(n.flags|=8192),o?(s&536870912)!==0&&(n.flags&128)===0&&(Qt(n),n.subtreeFlags&6&&(n.flags|=8192)):Qt(n),s=n.updateQueue,s!==null&&pc(n,s.retryQueue),s=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(s=t.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==s&&(n.flags|=2048),t!==null&&ne(Ls),null;case 24:return s=null,t!==null&&(s=t.memoizedState.cache),n.memoizedState.cache!==s&&(n.flags|=2048),da(pn),Qt(n),null;case 25:return null;case 30:return null}throw Error(a(156,n.tag))}function Ly(t,n){switch(_f(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return da(pn),Re(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return Ge(n),null;case 31:if(n.memoizedState!==null){if(si(n),n.alternate===null)throw Error(a(340));Ns()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 13:if(si(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(a(340));Ns()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return ne(cn),null;case 4:return Re(),null;case 10:return da(n.type),null;case 22:case 23:return si(n),Of(),t!==null&&ne(Ls),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return da(pn),null;case 25:return null;default:return null}}function S0(t,n){switch(_f(n),n.tag){case 3:da(pn),Re();break;case 26:case 27:case 5:Ge(n);break;case 4:Re();break;case 31:n.memoizedState!==null&&si(n);break;case 13:si(n);break;case 19:ne(cn);break;case 10:da(n.type);break;case 22:case 23:si(n),Of(),t!==null&&ne(Ls);break;case 24:da(pn)}}function Fo(t,n){try{var s=n.updateQueue,o=s!==null?s.lastEffect:null;if(o!==null){var u=o.next;s=u;do{if((s.tag&t)===t){o=void 0;var d=s.create,S=s.inst;o=d(),S.destroy=o}s=s.next}while(s!==u)}}catch(w){Bt(n,n.return,w)}}function $a(t,n,s){try{var o=n.updateQueue,u=o!==null?o.lastEffect:null;if(u!==null){var d=u.next;o=d;do{if((o.tag&t)===t){var S=o.inst,w=S.destroy;if(w!==void 0){S.destroy=void 0,u=n;var G=s,le=w;try{le()}catch(Se){Bt(u,G,Se)}}}o=o.next}while(o!==d)}}catch(Se){Bt(n,n.return,Se)}}function y0(t){var n=t.updateQueue;if(n!==null){var s=t.stateNode;try{fg(n,s)}catch(o){Bt(t,t.return,o)}}}function b0(t,n,s){s.props=Fs(t.type,t.memoizedProps),s.state=t.memoizedState;try{s.componentWillUnmount()}catch(o){Bt(t,n,o)}}function zo(t,n){try{var s=t.ref;if(s!==null){switch(t.tag){case 26:case 27:case 5:var o=t.stateNode;break;case 30:o=t.stateNode;break;default:o=t.stateNode}typeof s=="function"?t.refCleanup=s(o):s.current=o}}catch(u){Bt(t,n,u)}}function qi(t,n){var s=t.ref,o=t.refCleanup;if(s!==null)if(typeof o=="function")try{o()}catch(u){Bt(t,n,u)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof s=="function")try{s(null)}catch(u){Bt(t,n,u)}else s.current=null}function M0(t){var n=t.type,s=t.memoizedProps,o=t.stateNode;try{e:switch(n){case"button":case"input":case"select":case"textarea":s.autoFocus&&o.focus();break e;case"img":s.src?o.src=s.src:s.srcSet&&(o.srcset=s.srcSet)}}catch(u){Bt(t,t.return,u)}}function dd(t,n,s){try{var o=t.stateNode;tb(o,t.type,s,n),o[An]=n}catch(u){Bt(t,t.return,u)}}function E0(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&rs(t.type)||t.tag===4}function hd(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||E0(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&rs(t.type)||t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function pd(t,n,s){var o=t.tag;if(o===5||o===6)t=t.stateNode,n?(s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s).insertBefore(t,n):(n=s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s,n.appendChild(t),s=s._reactRootContainer,s!=null||n.onclick!==null||(n.onclick=pi));else if(o!==4&&(o===27&&rs(t.type)&&(s=t.stateNode,n=null),t=t.child,t!==null))for(pd(t,n,s),t=t.sibling;t!==null;)pd(t,n,s),t=t.sibling}function mc(t,n,s){var o=t.tag;if(o===5||o===6)t=t.stateNode,n?s.insertBefore(t,n):s.appendChild(t);else if(o!==4&&(o===27&&rs(t.type)&&(s=t.stateNode),t=t.child,t!==null))for(mc(t,n,s),t=t.sibling;t!==null;)mc(t,n,s),t=t.sibling}function T0(t){var n=t.stateNode,s=t.memoizedProps;try{for(var o=t.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);Nn(n,o,s),n[fn]=t,n[An]=s}catch(d){Bt(t,t.return,d)}}var xa=!1,xn=!1,md=!1,A0=typeof WeakSet=="function"?WeakSet:Set,En=null;function Oy(t,n){if(t=t.containerInfo,Id=Ic,t=Fm(t),lf(t)){if("selectionStart"in t)var s={start:t.selectionStart,end:t.selectionEnd};else e:{s=(s=t.ownerDocument)&&s.defaultView||window;var o=s.getSelection&&s.getSelection();if(o&&o.rangeCount!==0){s=o.anchorNode;var u=o.anchorOffset,d=o.focusNode;o=o.focusOffset;try{s.nodeType,d.nodeType}catch{s=null;break e}var S=0,w=-1,G=-1,le=0,Se=0,Me=t,ue=null;t:for(;;){for(var pe;Me!==s||u!==0&&Me.nodeType!==3||(w=S+u),Me!==d||o!==0&&Me.nodeType!==3||(G=S+o),Me.nodeType===3&&(S+=Me.nodeValue.length),(pe=Me.firstChild)!==null;)ue=Me,Me=pe;for(;;){if(Me===t)break t;if(ue===s&&++le===u&&(w=S),ue===d&&++Se===o&&(G=S),(pe=Me.nextSibling)!==null)break;Me=ue,ue=Me.parentNode}Me=pe}s=w===-1||G===-1?null:{start:w,end:G}}else s=null}s=s||{start:0,end:0}}else s=null;for(Bd={focusedElem:t,selectionRange:s},Ic=!1,En=n;En!==null;)if(n=En,t=n.child,(n.subtreeFlags&1028)!==0&&t!==null)t.return=n,En=t;else for(;En!==null;){switch(n=En,d=n.alternate,t=n.flags,n.tag){case 0:if((t&4)!==0&&(t=n.updateQueue,t=t!==null?t.events:null,t!==null))for(s=0;s<t.length;s++)u=t[s],u.ref.impl=u.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&d!==null){t=void 0,s=n,u=d.memoizedProps,d=d.memoizedState,o=s.stateNode;try{var Ye=Fs(s.type,u);t=o.getSnapshotBeforeUpdate(Ye,d),o.__reactInternalSnapshotBeforeUpdate=t}catch(et){Bt(s,s.return,et)}}break;case 3:if((t&1024)!==0){if(t=n.stateNode.containerInfo,s=t.nodeType,s===9)Hd(t);else if(s===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":Hd(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(a(163))}if(t=n.sibling,t!==null){t.return=n.return,En=t;break}En=n.return}}function R0(t,n,s){var o=s.flags;switch(s.tag){case 0:case 11:case 15:_a(t,s),o&4&&Fo(5,s);break;case 1:if(_a(t,s),o&4)if(t=s.stateNode,n===null)try{t.componentDidMount()}catch(S){Bt(s,s.return,S)}else{var u=Fs(s.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(u,n,t.__reactInternalSnapshotBeforeUpdate)}catch(S){Bt(s,s.return,S)}}o&64&&y0(s),o&512&&zo(s,s.return);break;case 3:if(_a(t,s),o&64&&(t=s.updateQueue,t!==null)){if(n=null,s.child!==null)switch(s.child.tag){case 27:case 5:n=s.child.stateNode;break;case 1:n=s.child.stateNode}try{fg(t,n)}catch(S){Bt(s,s.return,S)}}break;case 27:n===null&&o&4&&T0(s);case 26:case 5:_a(t,s),n===null&&o&4&&M0(s),o&512&&zo(s,s.return);break;case 12:_a(t,s);break;case 31:_a(t,s),o&4&&N0(t,s);break;case 13:_a(t,s),o&4&&D0(t,s),o&64&&(t=s.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(s=ky.bind(null,s),cb(t,s))));break;case 22:if(o=s.memoizedState!==null||xa,!o){n=n!==null&&n.memoizedState!==null||xn,u=xa;var d=xn;xa=o,(xn=n)&&!d?Sa(t,s,(s.subtreeFlags&8772)!==0):_a(t,s),xa=u,xn=d}break;case 30:break;default:_a(t,s)}}function w0(t){var n=t.alternate;n!==null&&(t.alternate=null,w0(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&Ha(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var $t=null,qn=!1;function va(t,n,s){for(s=s.child;s!==null;)C0(t,n,s),s=s.sibling}function C0(t,n,s){if(xe&&typeof xe.onCommitFiberUnmount=="function")try{xe.onCommitFiberUnmount(ge,s)}catch{}switch(s.tag){case 26:xn||qi(s,n),va(t,n,s),s.memoizedState?s.memoizedState.count--:s.stateNode&&(s=s.stateNode,s.parentNode.removeChild(s));break;case 27:xn||qi(s,n);var o=$t,u=qn;rs(s.type)&&($t=s.stateNode,qn=!1),va(t,n,s),Yo(s.stateNode),$t=o,qn=u;break;case 5:xn||qi(s,n);case 6:if(o=$t,u=qn,$t=null,va(t,n,s),$t=o,qn=u,$t!==null)if(qn)try{($t.nodeType===9?$t.body:$t.nodeName==="HTML"?$t.ownerDocument.body:$t).removeChild(s.stateNode)}catch(d){Bt(s,n,d)}else try{$t.removeChild(s.stateNode)}catch(d){Bt(s,n,d)}break;case 18:$t!==null&&(qn?(t=$t,yx(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,s.stateNode),Or(t)):yx($t,s.stateNode));break;case 4:o=$t,u=qn,$t=s.stateNode.containerInfo,qn=!0,va(t,n,s),$t=o,qn=u;break;case 0:case 11:case 14:case 15:$a(2,s,n),xn||$a(4,s,n),va(t,n,s);break;case 1:xn||(qi(s,n),o=s.stateNode,typeof o.componentWillUnmount=="function"&&b0(s,n,o)),va(t,n,s);break;case 21:va(t,n,s);break;case 22:xn=(o=xn)||s.memoizedState!==null,va(t,n,s),xn=o;break;default:va(t,n,s)}}function N0(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{Or(t)}catch(s){Bt(n,n.return,s)}}}function D0(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{Or(t)}catch(s){Bt(n,n.return,s)}}function Py(t){switch(t.tag){case 31:case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new A0),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new A0),n;default:throw Error(a(435,t.tag))}}function gc(t,n){var s=Py(t);n.forEach(function(o){if(!s.has(o)){s.add(o);var u=Wy.bind(null,t,o);o.then(u,u)}})}function Yn(t,n){var s=n.deletions;if(s!==null)for(var o=0;o<s.length;o++){var u=s[o],d=t,S=n,w=S;e:for(;w!==null;){switch(w.tag){case 27:if(rs(w.type)){$t=w.stateNode,qn=!1;break e}break;case 5:$t=w.stateNode,qn=!1;break e;case 3:case 4:$t=w.stateNode.containerInfo,qn=!0;break e}w=w.return}if($t===null)throw Error(a(160));C0(d,S,u),$t=null,qn=!1,d=u.alternate,d!==null&&(d.return=null),u.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)U0(n,t),n=n.sibling}var Ui=null;function U0(t,n){var s=t.alternate,o=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:Yn(n,t),Zn(t),o&4&&($a(3,t,t.return),Fo(3,t),$a(5,t,t.return));break;case 1:Yn(n,t),Zn(t),o&512&&(xn||s===null||qi(s,s.return)),o&64&&xa&&(t=t.updateQueue,t!==null&&(o=t.callbacks,o!==null&&(s=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=s===null?o:s.concat(o))));break;case 26:var u=Ui;if(Yn(n,t),Zn(t),o&512&&(xn||s===null||qi(s,s.return)),o&4){var d=s!==null?s.memoizedState:null;if(o=t.memoizedState,s===null)if(o===null)if(t.stateNode===null){e:{o=t.type,s=t.memoizedProps,u=u.ownerDocument||u;t:switch(o){case"title":d=u.getElementsByTagName("title")[0],(!d||d[za]||d[fn]||d.namespaceURI==="http://www.w3.org/2000/svg"||d.hasAttribute("itemprop"))&&(d=u.createElement(o),u.head.insertBefore(d,u.querySelector("head > title"))),Nn(d,o,s),d[fn]=t,dn(d),o=d;break e;case"link":var S=Ux("link","href",u).get(o+(s.href||""));if(S){for(var w=0;w<S.length;w++)if(d=S[w],d.getAttribute("href")===(s.href==null||s.href===""?null:s.href)&&d.getAttribute("rel")===(s.rel==null?null:s.rel)&&d.getAttribute("title")===(s.title==null?null:s.title)&&d.getAttribute("crossorigin")===(s.crossOrigin==null?null:s.crossOrigin)){S.splice(w,1);break t}}d=u.createElement(o),Nn(d,o,s),u.head.appendChild(d);break;case"meta":if(S=Ux("meta","content",u).get(o+(s.content||""))){for(w=0;w<S.length;w++)if(d=S[w],d.getAttribute("content")===(s.content==null?null:""+s.content)&&d.getAttribute("name")===(s.name==null?null:s.name)&&d.getAttribute("property")===(s.property==null?null:s.property)&&d.getAttribute("http-equiv")===(s.httpEquiv==null?null:s.httpEquiv)&&d.getAttribute("charset")===(s.charSet==null?null:s.charSet)){S.splice(w,1);break t}}d=u.createElement(o),Nn(d,o,s),u.head.appendChild(d);break;default:throw Error(a(468,o))}d[fn]=t,dn(d),o=d}t.stateNode=o}else Lx(u,t.type,t.stateNode);else t.stateNode=Dx(u,o,t.memoizedProps);else d!==o?(d===null?s.stateNode!==null&&(s=s.stateNode,s.parentNode.removeChild(s)):d.count--,o===null?Lx(u,t.type,t.stateNode):Dx(u,o,t.memoizedProps)):o===null&&t.stateNode!==null&&dd(t,t.memoizedProps,s.memoizedProps)}break;case 27:Yn(n,t),Zn(t),o&512&&(xn||s===null||qi(s,s.return)),s!==null&&o&4&&dd(t,t.memoizedProps,s.memoizedProps);break;case 5:if(Yn(n,t),Zn(t),o&512&&(xn||s===null||qi(s,s.return)),t.flags&32){u=t.stateNode;try{Hn(u,"")}catch(Ye){Bt(t,t.return,Ye)}}o&4&&t.stateNode!=null&&(u=t.memoizedProps,dd(t,u,s!==null?s.memoizedProps:u)),o&1024&&(md=!0);break;case 6:if(Yn(n,t),Zn(t),o&4){if(t.stateNode===null)throw Error(a(162));o=t.memoizedProps,s=t.stateNode;try{s.nodeValue=o}catch(Ye){Bt(t,t.return,Ye)}}break;case 3:if(Uc=null,u=Ui,Ui=Nc(n.containerInfo),Yn(n,t),Ui=u,Zn(t),o&4&&s!==null&&s.memoizedState.isDehydrated)try{Or(n.containerInfo)}catch(Ye){Bt(t,t.return,Ye)}md&&(md=!1,L0(t));break;case 4:o=Ui,Ui=Nc(t.stateNode.containerInfo),Yn(n,t),Zn(t),Ui=o;break;case 12:Yn(n,t),Zn(t);break;case 31:Yn(n,t),Zn(t),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,gc(t,o)));break;case 13:Yn(n,t),Zn(t),t.child.flags&8192&&t.memoizedState!==null!=(s!==null&&s.memoizedState!==null)&&(vc=Pt()),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,gc(t,o)));break;case 22:u=t.memoizedState!==null;var G=s!==null&&s.memoizedState!==null,le=xa,Se=xn;if(xa=le||u,xn=Se||G,Yn(n,t),xn=Se,xa=le,Zn(t),o&8192)e:for(n=t.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,u&&(s===null||G||xa||xn||zs(t)),s=null,n=t;;){if(n.tag===5||n.tag===26){if(s===null){G=s=n;try{if(d=G.stateNode,u)S=d.style,typeof S.setProperty=="function"?S.setProperty("display","none","important"):S.display="none";else{w=G.stateNode;var Me=G.memoizedProps.style,ue=Me!=null&&Me.hasOwnProperty("display")?Me.display:null;w.style.display=ue==null||typeof ue=="boolean"?"":(""+ue).trim()}}catch(Ye){Bt(G,G.return,Ye)}}}else if(n.tag===6){if(s===null){G=n;try{G.stateNode.nodeValue=u?"":G.memoizedProps}catch(Ye){Bt(G,G.return,Ye)}}}else if(n.tag===18){if(s===null){G=n;try{var pe=G.stateNode;u?bx(pe,!0):bx(G.stateNode,!1)}catch(Ye){Bt(G,G.return,Ye)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===t)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break e;for(;n.sibling===null;){if(n.return===null||n.return===t)break e;s===n&&(s=null),n=n.return}s===n&&(s=null),n.sibling.return=n.return,n=n.sibling}o&4&&(o=t.updateQueue,o!==null&&(s=o.retryQueue,s!==null&&(o.retryQueue=null,gc(t,s))));break;case 19:Yn(n,t),Zn(t),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,gc(t,o)));break;case 30:break;case 21:break;default:Yn(n,t),Zn(t)}}function Zn(t){var n=t.flags;if(n&2){try{for(var s,o=t.return;o!==null;){if(E0(o)){s=o;break}o=o.return}if(s==null)throw Error(a(160));switch(s.tag){case 27:var u=s.stateNode,d=hd(t);mc(t,d,u);break;case 5:var S=s.stateNode;s.flags&32&&(Hn(S,""),s.flags&=-33);var w=hd(t);mc(t,w,S);break;case 3:case 4:var G=s.stateNode.containerInfo,le=hd(t);pd(t,le,G);break;default:throw Error(a(161))}}catch(Se){Bt(t,t.return,Se)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function L0(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;L0(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),t=t.sibling}}function _a(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)R0(t,n.alternate,n),n=n.sibling}function zs(t){for(t=t.child;t!==null;){var n=t;switch(n.tag){case 0:case 11:case 14:case 15:$a(4,n,n.return),zs(n);break;case 1:qi(n,n.return);var s=n.stateNode;typeof s.componentWillUnmount=="function"&&b0(n,n.return,s),zs(n);break;case 27:Yo(n.stateNode);case 26:case 5:qi(n,n.return),zs(n);break;case 22:n.memoizedState===null&&zs(n);break;case 30:zs(n);break;default:zs(n)}t=t.sibling}}function Sa(t,n,s){for(s=s&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var o=n.alternate,u=t,d=n,S=d.flags;switch(d.tag){case 0:case 11:case 15:Sa(u,d,s),Fo(4,d);break;case 1:if(Sa(u,d,s),o=d,u=o.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(le){Bt(o,o.return,le)}if(o=d,u=o.updateQueue,u!==null){var w=o.stateNode;try{var G=u.shared.hiddenCallbacks;if(G!==null)for(u.shared.hiddenCallbacks=null,u=0;u<G.length;u++)ug(G[u],w)}catch(le){Bt(o,o.return,le)}}s&&S&64&&y0(d),zo(d,d.return);break;case 27:T0(d);case 26:case 5:Sa(u,d,s),s&&o===null&&S&4&&M0(d),zo(d,d.return);break;case 12:Sa(u,d,s);break;case 31:Sa(u,d,s),s&&S&4&&N0(u,d);break;case 13:Sa(u,d,s),s&&S&4&&D0(u,d);break;case 22:d.memoizedState===null&&Sa(u,d,s),zo(d,d.return);break;case 30:break;default:Sa(u,d,s)}n=n.sibling}}function gd(t,n){var s=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(s=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==s&&(t!=null&&t.refCount++,s!=null&&To(s))}function xd(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&To(t))}function Li(t,n,s,o){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)O0(t,n,s,o),n=n.sibling}function O0(t,n,s,o){var u=n.flags;switch(n.tag){case 0:case 11:case 15:Li(t,n,s,o),u&2048&&Fo(9,n);break;case 1:Li(t,n,s,o);break;case 3:Li(t,n,s,o),u&2048&&(t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&To(t)));break;case 12:if(u&2048){Li(t,n,s,o),t=n.stateNode;try{var d=n.memoizedProps,S=d.id,w=d.onPostCommit;typeof w=="function"&&w(S,n.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(G){Bt(n,n.return,G)}}else Li(t,n,s,o);break;case 31:Li(t,n,s,o);break;case 13:Li(t,n,s,o);break;case 23:break;case 22:d=n.stateNode,S=n.alternate,n.memoizedState!==null?d._visibility&2?Li(t,n,s,o):Ho(t,n):d._visibility&2?Li(t,n,s,o):(d._visibility|=2,Mr(t,n,s,o,(n.subtreeFlags&10256)!==0||!1)),u&2048&&gd(S,n);break;case 24:Li(t,n,s,o),u&2048&&xd(n.alternate,n);break;default:Li(t,n,s,o)}}function Mr(t,n,s,o,u){for(u=u&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var d=t,S=n,w=s,G=o,le=S.flags;switch(S.tag){case 0:case 11:case 15:Mr(d,S,w,G,u),Fo(8,S);break;case 23:break;case 22:var Se=S.stateNode;S.memoizedState!==null?Se._visibility&2?Mr(d,S,w,G,u):Ho(d,S):(Se._visibility|=2,Mr(d,S,w,G,u)),u&&le&2048&&gd(S.alternate,S);break;case 24:Mr(d,S,w,G,u),u&&le&2048&&xd(S.alternate,S);break;default:Mr(d,S,w,G,u)}n=n.sibling}}function Ho(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var s=t,o=n,u=o.flags;switch(o.tag){case 22:Ho(s,o),u&2048&&gd(o.alternate,o);break;case 24:Ho(s,o),u&2048&&xd(o.alternate,o);break;default:Ho(s,o)}n=n.sibling}}var Go=8192;function Er(t,n,s){if(t.subtreeFlags&Go)for(t=t.child;t!==null;)P0(t,n,s),t=t.sibling}function P0(t,n,s){switch(t.tag){case 26:Er(t,n,s),t.flags&Go&&t.memoizedState!==null&&yb(s,Ui,t.memoizedState,t.memoizedProps);break;case 5:Er(t,n,s);break;case 3:case 4:var o=Ui;Ui=Nc(t.stateNode.containerInfo),Er(t,n,s),Ui=o;break;case 22:t.memoizedState===null&&(o=t.alternate,o!==null&&o.memoizedState!==null?(o=Go,Go=16777216,Er(t,n,s),Go=o):Er(t,n,s));break;default:Er(t,n,s)}}function I0(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function Vo(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var s=0;s<n.length;s++){var o=n[s];En=o,F0(o,t)}I0(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)B0(t),t=t.sibling}function B0(t){switch(t.tag){case 0:case 11:case 15:Vo(t),t.flags&2048&&$a(9,t,t.return);break;case 3:Vo(t);break;case 12:Vo(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,xc(t)):Vo(t);break;default:Vo(t)}}function xc(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var s=0;s<n.length;s++){var o=n[s];En=o,F0(o,t)}I0(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:$a(8,n,n.return),xc(n);break;case 22:s=n.stateNode,s._visibility&2&&(s._visibility&=-3,xc(n));break;default:xc(n)}t=t.sibling}}function F0(t,n){for(;En!==null;){var s=En;switch(s.tag){case 0:case 11:case 15:$a(8,s,n);break;case 23:case 22:if(s.memoizedState!==null&&s.memoizedState.cachePool!==null){var o=s.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:To(s.memoizedState.cache)}if(o=s.child,o!==null)o.return=s,En=o;else e:for(s=t;En!==null;){o=En;var u=o.sibling,d=o.return;if(w0(o),o===s){En=null;break e}if(u!==null){u.return=d,En=u;break e}En=d}}}var Iy={getCacheForType:function(t){var n=wn(pn),s=n.data.get(t);return s===void 0&&(s=t(),n.data.set(t,s)),s},cacheSignal:function(){return wn(pn).controller.signal}},By=typeof WeakMap=="function"?WeakMap:Map,Lt=0,Yt=null,xt=null,St=0,It=0,ri=null,es=!1,Tr=!1,vd=!1,ya=0,on=0,ts=0,Hs=0,_d=0,oi=0,Ar=0,ko=null,Kn=null,Sd=!1,vc=0,z0=0,_c=1/0,Sc=null,ns=null,Sn=0,is=null,Rr=null,ba=0,yd=0,bd=null,H0=null,Wo=0,Md=null;function li(){return(Lt&2)!==0&&St!==0?St&-St:H.T!==null?Cd():fo()}function G0(){if(oi===0)if((St&536870912)===0||Mt){var t=nt;nt<<=1,(nt&3932160)===0&&(nt=262144),oi=t}else oi=536870912;return t=ai.current,t!==null&&(t.flags|=32),oi}function Qn(t,n,s){(t===Yt&&(It===2||It===9)||t.cancelPendingCommit!==null)&&(wr(t,0),as(t,St,oi,!1)),je(t,s),((Lt&2)===0||t!==Yt)&&(t===Yt&&((Lt&2)===0&&(Hs|=s),on===4&&as(t,St,oi,!1)),Yi(t))}function V0(t,n,s){if((Lt&6)!==0)throw Error(a(327));var o=!s&&(n&127)===0&&(n&t.expiredLanes)===0||Ne(t,n),u=o?Hy(t,n):Td(t,n,!0),d=o;do{if(u===0){Tr&&!o&&as(t,n,0,!1);break}else{if(s=t.current.alternate,d&&!Fy(s)){u=Td(t,n,!1),d=!1;continue}if(u===2){if(d=n,t.errorRecoveryDisabledLanes&d)var S=0;else S=t.pendingLanes&-536870913,S=S!==0?S:S&536870912?536870912:0;if(S!==0){n=S;e:{var w=t;u=ko;var G=w.current.memoizedState.isDehydrated;if(G&&(wr(w,S).flags|=256),S=Td(w,S,!1),S!==2){if(vd&&!G){w.errorRecoveryDisabledLanes|=d,Hs|=d,u=4;break e}d=Kn,Kn=u,d!==null&&(Kn===null?Kn=d:Kn.push.apply(Kn,d))}u=S}if(d=!1,u!==2)continue}}if(u===1){wr(t,0),as(t,n,0,!0);break}e:{switch(o=t,d=u,d){case 0:case 1:throw Error(a(345));case 4:if((n&4194048)!==n)break;case 6:as(o,n,oi,!es);break e;case 2:Kn=null;break;case 3:case 5:break;default:throw Error(a(329))}if((n&62914560)===n&&(u=vc+300-Pt(),10<u)){if(as(o,n,oi,!es),ye(o,0,!0)!==0)break e;ba=n,o.timeoutHandle=_x(k0.bind(null,o,s,Kn,Sc,Sd,n,oi,Hs,Ar,es,d,"Throttled",-0,0),u);break e}k0(o,s,Kn,Sc,Sd,n,oi,Hs,Ar,es,d,null,-0,0)}}break}while(!0);Yi(t)}function k0(t,n,s,o,u,d,S,w,G,le,Se,Me,ue,pe){if(t.timeoutHandle=-1,Me=n.subtreeFlags,Me&8192||(Me&16785408)===16785408){Me={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:pi},P0(n,d,Me);var Ye=(d&62914560)===d?vc-Pt():(d&4194048)===d?z0-Pt():0;if(Ye=bb(Me,Ye),Ye!==null){ba=d,t.cancelPendingCommit=Ye(Q0.bind(null,t,n,d,s,o,u,S,w,G,Se,Me,null,ue,pe)),as(t,d,S,!le);return}}Q0(t,n,d,s,o,u,S,w,G)}function Fy(t){for(var n=t;;){var s=n.tag;if((s===0||s===11||s===15)&&n.flags&16384&&(s=n.updateQueue,s!==null&&(s=s.stores,s!==null)))for(var o=0;o<s.length;o++){var u=s[o],d=u.getSnapshot;u=u.value;try{if(!ni(d(),u))return!1}catch{return!1}}if(s=n.child,n.subtreeFlags&16384&&s!==null)s.return=n,n=s;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function as(t,n,s,o){n&=~_d,n&=~Hs,t.suspendedLanes|=n,t.pingedLanes&=~n,o&&(t.warmLanes|=n),o=t.expirationTimes;for(var u=n;0<u;){var d=31-Ve(u),S=1<<d;o[d]=-1,u&=~S}s!==0&&At(t,s,n)}function yc(){return(Lt&6)===0?(Xo(0),!1):!0}function Ed(){if(xt!==null){if(It===0)var t=xt.return;else t=xt,fa=Ds=null,Hf(t),vr=null,Ro=0,t=xt;for(;t!==null;)S0(t.alternate,t),t=t.return;xt=null}}function wr(t,n){var s=t.timeoutHandle;s!==-1&&(t.timeoutHandle=-1,ab(s)),s=t.cancelPendingCommit,s!==null&&(t.cancelPendingCommit=null,s()),ba=0,Ed(),Yt=t,xt=s=ca(t.current,null),St=n,It=0,ri=null,es=!1,Tr=Ne(t,n),vd=!1,Ar=oi=_d=Hs=ts=on=0,Kn=ko=null,Sd=!1,(n&8)!==0&&(n|=n&32);var o=t.entangledLanes;if(o!==0)for(t=t.entanglements,o&=n;0<o;){var u=31-Ve(o),d=1<<u;n|=t[u],o&=~d}return ya=n,Vl(),s}function W0(t,n){ct=null,H.H=Po,n===xr||n===Kl?(n=rg(),It=3):n===wf?(n=rg(),It=4):It=n===nd?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,ri=n,xt===null&&(on=1,uc(t,gi(n,t.current)))}function X0(){var t=ai.current;return t===null?!0:(St&4194048)===St?Si===null:(St&62914560)===St||(St&536870912)!==0?t===Si:!1}function j0(){var t=H.H;return H.H=Po,t===null?Po:t}function q0(){var t=H.A;return H.A=Iy,t}function bc(){on=4,es||(St&4194048)!==St&&ai.current!==null||(Tr=!0),(ts&134217727)===0&&(Hs&134217727)===0||Yt===null||as(Yt,St,oi,!1)}function Td(t,n,s){var o=Lt;Lt|=2;var u=j0(),d=q0();(Yt!==t||St!==n)&&(Sc=null,wr(t,n)),n=!1;var S=on;e:do try{if(It!==0&&xt!==null){var w=xt,G=ri;switch(It){case 8:Ed(),S=6;break e;case 3:case 2:case 9:case 6:ai.current===null&&(n=!0);var le=It;if(It=0,ri=null,Cr(t,w,G,le),s&&Tr){S=0;break e}break;default:le=It,It=0,ri=null,Cr(t,w,G,le)}}zy(),S=on;break}catch(Se){W0(t,Se)}while(!0);return n&&t.shellSuspendCounter++,fa=Ds=null,Lt=o,H.H=u,H.A=d,xt===null&&(Yt=null,St=0,Vl()),S}function zy(){for(;xt!==null;)Y0(xt)}function Hy(t,n){var s=Lt;Lt|=2;var o=j0(),u=q0();Yt!==t||St!==n?(Sc=null,_c=Pt()+500,wr(t,n)):Tr=Ne(t,n);e:do try{if(It!==0&&xt!==null){n=xt;var d=ri;t:switch(It){case 1:It=0,ri=null,Cr(t,n,d,1);break;case 2:case 9:if(ag(d)){It=0,ri=null,Z0(n);break}n=function(){It!==2&&It!==9||Yt!==t||(It=7),Yi(t)},d.then(n,n);break e;case 3:It=7;break e;case 4:It=5;break e;case 7:ag(d)?(It=0,ri=null,Z0(n)):(It=0,ri=null,Cr(t,n,d,7));break;case 5:var S=null;switch(xt.tag){case 26:S=xt.memoizedState;case 5:case 27:var w=xt;if(S?Ox(S):w.stateNode.complete){It=0,ri=null;var G=w.sibling;if(G!==null)xt=G;else{var le=w.return;le!==null?(xt=le,Mc(le)):xt=null}break t}}It=0,ri=null,Cr(t,n,d,5);break;case 6:It=0,ri=null,Cr(t,n,d,6);break;case 8:Ed(),on=6;break e;default:throw Error(a(462))}}Gy();break}catch(Se){W0(t,Se)}while(!0);return fa=Ds=null,H.H=o,H.A=u,Lt=s,xt!==null?0:(Yt=null,St=0,Vl(),on)}function Gy(){for(;xt!==null&&!sn();)Y0(xt)}function Y0(t){var n=v0(t.alternate,t,ya);t.memoizedProps=t.pendingProps,n===null?Mc(t):xt=n}function Z0(t){var n=t,s=n.alternate;switch(n.tag){case 15:case 0:n=d0(s,n,n.pendingProps,n.type,void 0,St);break;case 11:n=d0(s,n,n.pendingProps,n.type.render,n.ref,St);break;case 5:Hf(n);default:S0(s,n),n=xt=qm(n,ya),n=v0(s,n,ya)}t.memoizedProps=t.pendingProps,n===null?Mc(t):xt=n}function Cr(t,n,s,o){fa=Ds=null,Hf(n),vr=null,Ro=0;var u=n.return;try{if(Cy(t,u,n,s,St)){on=1,uc(t,gi(s,t.current)),xt=null;return}}catch(d){if(u!==null)throw xt=u,d;on=1,uc(t,gi(s,t.current)),xt=null;return}n.flags&32768?(Mt||o===1?t=!0:Tr||(St&536870912)!==0?t=!1:(es=t=!0,(o===2||o===9||o===3||o===6)&&(o=ai.current,o!==null&&o.tag===13&&(o.flags|=16384))),K0(n,t)):Mc(n)}function Mc(t){var n=t;do{if((n.flags&32768)!==0){K0(n,es);return}t=n.return;var s=Uy(n.alternate,n,ya);if(s!==null){xt=s;return}if(n=n.sibling,n!==null){xt=n;return}xt=n=t}while(n!==null);on===0&&(on=5)}function K0(t,n){do{var s=Ly(t.alternate,t);if(s!==null){s.flags&=32767,xt=s;return}if(s=t.return,s!==null&&(s.flags|=32768,s.subtreeFlags=0,s.deletions=null),!n&&(t=t.sibling,t!==null)){xt=t;return}xt=t=s}while(t!==null);on=6,xt=null}function Q0(t,n,s,o,u,d,S,w,G){t.cancelPendingCommit=null;do Ec();while(Sn!==0);if((Lt&6)!==0)throw Error(a(327));if(n!==null){if(n===t.current)throw Error(a(177));if(d=n.lanes|n.childLanes,d|=hf,zt(t,s,d,S,w,G),t===Yt&&(xt=Yt=null,St=0),Rr=n,is=t,ba=s,yd=d,bd=u,H0=o,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,Xy(K,function(){return nx(),null})):(t.callbackNode=null,t.callbackPriority=0),o=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||o){o=H.T,H.T=null,u=F.p,F.p=2,S=Lt,Lt|=4;try{Oy(t,n,s)}finally{Lt=S,F.p=u,H.T=o}}Sn=1,J0(),$0(),ex()}}function J0(){if(Sn===1){Sn=0;var t=is,n=Rr,s=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||s){s=H.T,H.T=null;var o=F.p;F.p=2;var u=Lt;Lt|=4;try{U0(n,t);var d=Bd,S=Fm(t.containerInfo),w=d.focusedElem,G=d.selectionRange;if(S!==w&&w&&w.ownerDocument&&Bm(w.ownerDocument.documentElement,w)){if(G!==null&&lf(w)){var le=G.start,Se=G.end;if(Se===void 0&&(Se=le),"selectionStart"in w)w.selectionStart=le,w.selectionEnd=Math.min(Se,w.value.length);else{var Me=w.ownerDocument||document,ue=Me&&Me.defaultView||window;if(ue.getSelection){var pe=ue.getSelection(),Ye=w.textContent.length,et=Math.min(G.start,Ye),kt=G.end===void 0?et:Math.min(G.end,Ye);!pe.extend&&et>kt&&(S=kt,kt=et,et=S);var Z=Im(w,et),k=Im(w,kt);if(Z&&k&&(pe.rangeCount!==1||pe.anchorNode!==Z.node||pe.anchorOffset!==Z.offset||pe.focusNode!==k.node||pe.focusOffset!==k.offset)){var re=Me.createRange();re.setStart(Z.node,Z.offset),pe.removeAllRanges(),et>kt?(pe.addRange(re),pe.extend(k.node,k.offset)):(re.setEnd(k.node,k.offset),pe.addRange(re))}}}}for(Me=[],pe=w;pe=pe.parentNode;)pe.nodeType===1&&Me.push({element:pe,left:pe.scrollLeft,top:pe.scrollTop});for(typeof w.focus=="function"&&w.focus(),w=0;w<Me.length;w++){var be=Me[w];be.element.scrollLeft=be.left,be.element.scrollTop=be.top}}Ic=!!Id,Bd=Id=null}finally{Lt=u,F.p=o,H.T=s}}t.current=n,Sn=2}}function $0(){if(Sn===2){Sn=0;var t=is,n=Rr,s=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||s){s=H.T,H.T=null;var o=F.p;F.p=2;var u=Lt;Lt|=4;try{R0(t,n.alternate,n)}finally{Lt=u,F.p=o,H.T=s}}Sn=3}}function ex(){if(Sn===4||Sn===3){Sn=0,j();var t=is,n=Rr,s=ba,o=H0;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?Sn=5:(Sn=0,Rr=is=null,tx(t,t.pendingLanes));var u=t.pendingLanes;if(u===0&&(ns=null),uo(s),n=n.stateNode,xe&&typeof xe.onCommitFiberRoot=="function")try{xe.onCommitFiberRoot(ge,n,void 0,(n.current.flags&128)===128)}catch{}if(o!==null){n=H.T,u=F.p,F.p=2,H.T=null;try{for(var d=t.onRecoverableError,S=0;S<o.length;S++){var w=o[S];d(w.value,{componentStack:w.stack})}}finally{H.T=n,F.p=u}}(ba&3)!==0&&Ec(),Yi(t),u=t.pendingLanes,(s&261930)!==0&&(u&42)!==0?t===Md?Wo++:(Wo=0,Md=t):Wo=0,Xo(0)}}function tx(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,To(n)))}function Ec(){return J0(),$0(),ex(),nx()}function nx(){if(Sn!==5)return!1;var t=is,n=yd;yd=0;var s=uo(ba),o=H.T,u=F.p;try{F.p=32>s?32:s,H.T=null,s=bd,bd=null;var d=is,S=ba;if(Sn=0,Rr=is=null,ba=0,(Lt&6)!==0)throw Error(a(331));var w=Lt;if(Lt|=4,B0(d.current),O0(d,d.current,S,s),Lt=w,Xo(0,!1),xe&&typeof xe.onPostCommitFiberRoot=="function")try{xe.onPostCommitFiberRoot(ge,d)}catch{}return!0}finally{F.p=u,H.T=o,tx(t,n)}}function ix(t,n,s){n=gi(s,n),n=td(t.stateNode,n,2),t=Ka(t,n,2),t!==null&&(je(t,2),Yi(t))}function Bt(t,n,s){if(t.tag===3)ix(t,t,s);else for(;n!==null;){if(n.tag===3){ix(n,t,s);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(ns===null||!ns.has(o))){t=gi(s,t),s=a0(2),o=Ka(n,s,2),o!==null&&(s0(s,o,n,t),je(o,2),Yi(o));break}}n=n.return}}function Ad(t,n,s){var o=t.pingCache;if(o===null){o=t.pingCache=new By;var u=new Set;o.set(n,u)}else u=o.get(n),u===void 0&&(u=new Set,o.set(n,u));u.has(s)||(vd=!0,u.add(s),t=Vy.bind(null,t,n,s),n.then(t,t))}function Vy(t,n,s){var o=t.pingCache;o!==null&&o.delete(n),t.pingedLanes|=t.suspendedLanes&s,t.warmLanes&=~s,Yt===t&&(St&s)===s&&(on===4||on===3&&(St&62914560)===St&&300>Pt()-vc?(Lt&2)===0&&wr(t,0):_d|=s,Ar===St&&(Ar=0)),Yi(t)}function ax(t,n){n===0&&(n=Ee()),t=ws(t,n),t!==null&&(je(t,n),Yi(t))}function ky(t){var n=t.memoizedState,s=0;n!==null&&(s=n.retryLane),ax(t,s)}function Wy(t,n){var s=0;switch(t.tag){case 31:case 13:var o=t.stateNode,u=t.memoizedState;u!==null&&(s=u.retryLane);break;case 19:o=t.stateNode;break;case 22:o=t.stateNode._retryCache;break;default:throw Error(a(314))}o!==null&&o.delete(n),ax(t,s)}function Xy(t,n){return Mn(t,n)}var Tc=null,Nr=null,Rd=!1,Ac=!1,wd=!1,ss=0;function Yi(t){t!==Nr&&t.next===null&&(Nr===null?Tc=Nr=t:Nr=Nr.next=t),Ac=!0,Rd||(Rd=!0,qy())}function Xo(t,n){if(!wd&&Ac){wd=!0;do for(var s=!1,o=Tc;o!==null;){if(t!==0){var u=o.pendingLanes;if(u===0)var d=0;else{var S=o.suspendedLanes,w=o.pingedLanes;d=(1<<31-Ve(42|t)+1)-1,d&=u&~(S&~w),d=d&201326741?d&201326741|1:d?d|2:0}d!==0&&(s=!0,lx(o,d))}else d=St,d=ye(o,o===Yt?d:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(d&3)===0||Ne(o,d)||(s=!0,lx(o,d));o=o.next}while(s);wd=!1}}function jy(){sx()}function sx(){Ac=Rd=!1;var t=0;ss!==0&&ib()&&(t=ss);for(var n=Pt(),s=null,o=Tc;o!==null;){var u=o.next,d=rx(o,n);d===0?(o.next=null,s===null?Tc=u:s.next=u,u===null&&(Nr=s)):(s=o,(t!==0||(d&3)!==0)&&(Ac=!0)),o=u}Sn!==0&&Sn!==5||Xo(t),ss!==0&&(ss=0)}function rx(t,n){for(var s=t.suspendedLanes,o=t.pingedLanes,u=t.expirationTimes,d=t.pendingLanes&-62914561;0<d;){var S=31-Ve(d),w=1<<S,G=u[S];G===-1?((w&s)===0||(w&o)!==0)&&(u[S]=Fe(w,n)):G<=n&&(t.expiredLanes|=w),d&=~w}if(n=Yt,s=St,s=ye(t,t===n?s:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o=t.callbackNode,s===0||t===n&&(It===2||It===9)||t.cancelPendingCommit!==null)return o!==null&&o!==null&&jt(o),t.callbackNode=null,t.callbackPriority=0;if((s&3)===0||Ne(t,s)){if(n=s&-s,n===t.callbackPriority)return n;switch(o!==null&&jt(o),uo(s)){case 2:case 8:s=E;break;case 32:s=K;break;case 268435456:s=me;break;default:s=K}return o=ox.bind(null,t),s=Mn(s,o),t.callbackPriority=n,t.callbackNode=s,n}return o!==null&&o!==null&&jt(o),t.callbackPriority=2,t.callbackNode=null,2}function ox(t,n){if(Sn!==0&&Sn!==5)return t.callbackNode=null,t.callbackPriority=0,null;var s=t.callbackNode;if(Ec()&&t.callbackNode!==s)return null;var o=St;return o=ye(t,t===Yt?o:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o===0?null:(V0(t,o,n),rx(t,Pt()),t.callbackNode!=null&&t.callbackNode===s?ox.bind(null,t):null)}function lx(t,n){if(Ec())return null;V0(t,n,!0)}function qy(){sb(function(){(Lt&6)!==0?Mn(P,jy):sx()})}function Cd(){if(ss===0){var t=mr;t===0&&(t=Je,Je<<=1,(Je&261888)===0&&(Je=256)),ss=t}return ss}function cx(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Ni(""+t)}function ux(t,n){var s=n.ownerDocument.createElement("input");return s.name=n.name,s.value=n.value,t.id&&s.setAttribute("form",t.id),n.parentNode.insertBefore(s,n),t=new FormData(t),s.parentNode.removeChild(s),t}function Yy(t,n,s,o,u){if(n==="submit"&&s&&s.stateNode===u){var d=cx((u[An]||null).action),S=o.submitter;S&&(n=(n=S[An]||null)?cx(n.formAction):S.getAttribute("formAction"),n!==null&&(d=n,S=null));var w=new Fl("action","action",null,o,u);t.push({event:w,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(ss!==0){var G=S?ux(u,S):new FormData(u);Zf(s,{pending:!0,data:G,method:u.method,action:d},null,G)}}else typeof d=="function"&&(w.preventDefault(),G=S?ux(u,S):new FormData(u),Zf(s,{pending:!0,data:G,method:u.method,action:d},d,G))},currentTarget:u}]})}}for(var Nd=0;Nd<df.length;Nd++){var Dd=df[Nd],Zy=Dd.toLowerCase(),Ky=Dd[0].toUpperCase()+Dd.slice(1);Di(Zy,"on"+Ky)}Di(Gm,"onAnimationEnd"),Di(Vm,"onAnimationIteration"),Di(km,"onAnimationStart"),Di("dblclick","onDoubleClick"),Di("focusin","onFocus"),Di("focusout","onBlur"),Di(dy,"onTransitionRun"),Di(hy,"onTransitionStart"),Di(py,"onTransitionCancel"),Di(Wm,"onTransitionEnd"),V("onMouseEnter",["mouseout","mouseover"]),V("onMouseLeave",["mouseout","mouseover"]),V("onPointerEnter",["pointerout","pointerover"]),V("onPointerLeave",["pointerout","pointerover"]),R("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),R("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),R("onBeforeInput",["compositionend","keypress","textInput","paste"]),R("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),R("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),R("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var jo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Qy=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(jo));function fx(t,n){n=(n&4)!==0;for(var s=0;s<t.length;s++){var o=t[s],u=o.event;o=o.listeners;e:{var d=void 0;if(n)for(var S=o.length-1;0<=S;S--){var w=o[S],G=w.instance,le=w.currentTarget;if(w=w.listener,G!==d&&u.isPropagationStopped())break e;d=w,u.currentTarget=le;try{d(u)}catch(Se){Gl(Se)}u.currentTarget=null,d=G}else for(S=0;S<o.length;S++){if(w=o[S],G=w.instance,le=w.currentTarget,w=w.listener,G!==d&&u.isPropagationStopped())break e;d=w,u.currentTarget=le;try{d(u)}catch(Se){Gl(Se)}u.currentTarget=null,d=G}}}}function vt(t,n){var s=n[bs];s===void 0&&(s=n[bs]=new Set);var o=t+"__bubble";s.has(o)||(dx(n,t,2,!1),s.add(o))}function Ud(t,n,s){var o=0;n&&(o|=4),dx(s,t,o,n)}var Rc="_reactListening"+Math.random().toString(36).slice(2);function Ld(t){if(!t[Rc]){t[Rc]=!0,Ol.forEach(function(s){s!=="selectionchange"&&(Qy.has(s)||Ud(s,!1,t),Ud(s,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[Rc]||(n[Rc]=!0,Ud("selectionchange",!1,n))}}function dx(t,n,s,o){switch(Gx(n)){case 2:var u=Tb;break;case 8:u=Ab;break;default:u=Yd}s=u.bind(null,n,s,t),u=void 0,!Ju||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),o?u!==void 0?t.addEventListener(n,s,{capture:!0,passive:u}):t.addEventListener(n,s,!0):u!==void 0?t.addEventListener(n,s,{passive:u}):t.addEventListener(n,s,!1)}function Od(t,n,s,o,u){var d=o;if((n&1)===0&&(n&2)===0&&o!==null)e:for(;;){if(o===null)return;var S=o.tag;if(S===3||S===4){var w=o.stateNode.containerInfo;if(w===u)break;if(S===4)for(S=o.return;S!==null;){var G=S.tag;if((G===3||G===4)&&S.stateNode.containerInfo===u)return;S=S.return}for(;w!==null;){if(S=ra(w),S===null)return;if(G=S.tag,G===5||G===6||G===26||G===27){o=d=S;continue e}w=w.parentNode}}o=o.return}xm(function(){var le=d,Se=Ku(s),Me=[];e:{var ue=Xm.get(t);if(ue!==void 0){var pe=Fl,Ye=t;switch(t){case"keypress":if(Il(s)===0)break e;case"keydown":case"keyup":pe=WS;break;case"focusin":Ye="focus",pe=nf;break;case"focusout":Ye="blur",pe=nf;break;case"beforeblur":case"afterblur":pe=nf;break;case"click":if(s.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":pe=Sm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":pe=US;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":pe=qS;break;case Gm:case Vm:case km:pe=PS;break;case Wm:pe=ZS;break;case"scroll":case"scrollend":pe=NS;break;case"wheel":pe=QS;break;case"copy":case"cut":case"paste":pe=BS;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":pe=bm;break;case"toggle":case"beforetoggle":pe=$S}var et=(n&4)!==0,kt=!et&&(t==="scroll"||t==="scrollend"),Z=et?ue!==null?ue+"Capture":null:ue;et=[];for(var k=le,re;k!==null;){var be=k;if(re=be.stateNode,be=be.tag,be!==5&&be!==26&&be!==27||re===null||Z===null||(be=po(k,Z),be!=null&&et.push(qo(k,be,re))),kt)break;k=k.return}0<et.length&&(ue=new pe(ue,Ye,null,s,Se),Me.push({event:ue,listeners:et}))}}if((n&7)===0){e:{if(ue=t==="mouseover"||t==="pointerover",pe=t==="mouseout"||t==="pointerout",ue&&s!==Zu&&(Ye=s.relatedTarget||s.fromElement)&&(ra(Ye)||Ye[Xn]))break e;if((pe||ue)&&(ue=Se.window===Se?Se:(ue=Se.ownerDocument)?ue.defaultView||ue.parentWindow:window,pe?(Ye=s.relatedTarget||s.toElement,pe=le,Ye=Ye?ra(Ye):null,Ye!==null&&(kt=c(Ye),et=Ye.tag,Ye!==kt||et!==5&&et!==27&&et!==6)&&(Ye=null)):(pe=null,Ye=le),pe!==Ye)){if(et=Sm,be="onMouseLeave",Z="onMouseEnter",k="mouse",(t==="pointerout"||t==="pointerover")&&(et=bm,be="onPointerLeave",Z="onPointerEnter",k="pointer"),kt=pe==null?ue:Es(pe),re=Ye==null?ue:Es(Ye),ue=new et(be,k+"leave",pe,s,Se),ue.target=kt,ue.relatedTarget=re,be=null,ra(Se)===le&&(et=new et(Z,k+"enter",Ye,s,Se),et.target=re,et.relatedTarget=kt,be=et),kt=be,pe&&Ye)t:{for(et=Jy,Z=pe,k=Ye,re=0,be=Z;be;be=et(be))re++;be=0;for(var $e=k;$e;$e=et($e))be++;for(;0<re-be;)Z=et(Z),re--;for(;0<be-re;)k=et(k),be--;for(;re--;){if(Z===k||k!==null&&Z===k.alternate){et=Z;break t}Z=et(Z),k=et(k)}et=null}else et=null;pe!==null&&hx(Me,ue,pe,et,!1),Ye!==null&&kt!==null&&hx(Me,kt,Ye,et,!0)}}e:{if(ue=le?Es(le):window,pe=ue.nodeName&&ue.nodeName.toLowerCase(),pe==="select"||pe==="input"&&ue.type==="file")var Ct=Nm;else if(wm(ue))if(Dm)Ct=cy;else{Ct=oy;var Ze=ry}else pe=ue.nodeName,!pe||pe.toLowerCase()!=="input"||ue.type!=="checkbox"&&ue.type!=="radio"?le&&hi(le.elementType)&&(Ct=Nm):Ct=ly;if(Ct&&(Ct=Ct(t,le))){Cm(Me,Ct,s,Se);break e}Ze&&Ze(t,ue,le),t==="focusout"&&le&&ue.type==="number"&&le.memoizedProps.value!=null&&_n(ue,"number",ue.value)}switch(Ze=le?Es(le):window,t){case"focusin":(wm(Ze)||Ze.contentEditable==="true")&&(or=Ze,cf=le,bo=null);break;case"focusout":bo=cf=or=null;break;case"mousedown":uf=!0;break;case"contextmenu":case"mouseup":case"dragend":uf=!1,zm(Me,s,Se);break;case"selectionchange":if(fy)break;case"keydown":case"keyup":zm(Me,s,Se)}var ut;if(sf)e:{switch(t){case"compositionstart":var yt="onCompositionStart";break e;case"compositionend":yt="onCompositionEnd";break e;case"compositionupdate":yt="onCompositionUpdate";break e}yt=void 0}else rr?Am(t,s)&&(yt="onCompositionEnd"):t==="keydown"&&s.keyCode===229&&(yt="onCompositionStart");yt&&(Mm&&s.locale!=="ko"&&(rr||yt!=="onCompositionStart"?yt==="onCompositionEnd"&&rr&&(ut=vm()):(ka=Se,$u="value"in ka?ka.value:ka.textContent,rr=!0)),Ze=wc(le,yt),0<Ze.length&&(yt=new ym(yt,t,null,s,Se),Me.push({event:yt,listeners:Ze}),ut?yt.data=ut:(ut=Rm(s),ut!==null&&(yt.data=ut)))),(ut=ty?ny(t,s):iy(t,s))&&(yt=wc(le,"onBeforeInput"),0<yt.length&&(Ze=new ym("onBeforeInput","beforeinput",null,s,Se),Me.push({event:Ze,listeners:yt}),Ze.data=ut)),Yy(Me,t,le,s,Se)}fx(Me,n)})}function qo(t,n,s){return{instance:t,listener:n,currentTarget:s}}function wc(t,n){for(var s=n+"Capture",o=[];t!==null;){var u=t,d=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||d===null||(u=po(t,s),u!=null&&o.unshift(qo(t,u,d)),u=po(t,n),u!=null&&o.push(qo(t,u,d))),t.tag===3)return o;t=t.return}return[]}function Jy(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function hx(t,n,s,o,u){for(var d=n._reactName,S=[];s!==null&&s!==o;){var w=s,G=w.alternate,le=w.stateNode;if(w=w.tag,G!==null&&G===o)break;w!==5&&w!==26&&w!==27||le===null||(G=le,u?(le=po(s,d),le!=null&&S.unshift(qo(s,le,G))):u||(le=po(s,d),le!=null&&S.push(qo(s,le,G)))),s=s.return}S.length!==0&&t.push({event:n,listeners:S})}var $y=/\r\n?/g,eb=/\u0000|\uFFFD/g;function px(t){return(typeof t=="string"?t:""+t).replace($y,`
`).replace(eb,"")}function mx(t,n){return n=px(n),px(t)===n}function Vt(t,n,s,o,u,d){switch(s){case"children":typeof o=="string"?n==="body"||n==="textarea"&&o===""||Hn(t,o):(typeof o=="number"||typeof o=="bigint")&&n!=="body"&&Hn(t,""+o);break;case"className":Le(t,"class",o);break;case"tabIndex":Le(t,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":Le(t,s,o);break;case"style":Jt(t,o,d);break;case"data":if(n!=="object"){Le(t,"data",o);break}case"src":case"href":if(o===""&&(n!=="a"||s!=="href")){t.removeAttribute(s);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(s);break}o=Ni(""+o),t.setAttribute(s,o);break;case"action":case"formAction":if(typeof o=="function"){t.setAttribute(s,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof d=="function"&&(s==="formAction"?(n!=="input"&&Vt(t,n,"name",u.name,u,null),Vt(t,n,"formEncType",u.formEncType,u,null),Vt(t,n,"formMethod",u.formMethod,u,null),Vt(t,n,"formTarget",u.formTarget,u,null)):(Vt(t,n,"encType",u.encType,u,null),Vt(t,n,"method",u.method,u,null),Vt(t,n,"target",u.target,u,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(s);break}o=Ni(""+o),t.setAttribute(s,o);break;case"onClick":o!=null&&(t.onclick=pi);break;case"onScroll":o!=null&&vt("scroll",t);break;case"onScrollEnd":o!=null&&vt("scrollend",t);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(a(61));if(s=o.__html,s!=null){if(u.children!=null)throw Error(a(60));t.innerHTML=s}}break;case"multiple":t.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":t.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){t.removeAttribute("xlink:href");break}s=Ni(""+o),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",s);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(s,""+o):t.removeAttribute(s);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(s,""):t.removeAttribute(s);break;case"capture":case"download":o===!0?t.setAttribute(s,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(s,o):t.removeAttribute(s);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?t.setAttribute(s,o):t.removeAttribute(s);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?t.removeAttribute(s):t.setAttribute(s,o);break;case"popover":vt("beforetoggle",t),vt("toggle",t),ke(t,"popover",o);break;case"xlinkActuate":ze(t,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":ze(t,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":ze(t,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":ze(t,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":ze(t,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":ze(t,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":ze(t,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":ze(t,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":ze(t,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":ke(t,"is",o);break;case"innerText":case"textContent":break;default:(!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&(s=Ht.get(s)||s,ke(t,s,o))}}function Pd(t,n,s,o,u,d){switch(s){case"style":Jt(t,o,d);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(a(61));if(s=o.__html,s!=null){if(u.children!=null)throw Error(a(60));t.innerHTML=s}}break;case"children":typeof o=="string"?Hn(t,o):(typeof o=="number"||typeof o=="bigint")&&Hn(t,""+o);break;case"onScroll":o!=null&&vt("scroll",t);break;case"onScrollEnd":o!=null&&vt("scrollend",t);break;case"onClick":o!=null&&(t.onclick=pi);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!ho.hasOwnProperty(s))e:{if(s[0]==="o"&&s[1]==="n"&&(u=s.endsWith("Capture"),n=s.slice(2,u?s.length-7:void 0),d=t[An]||null,d=d!=null?d[s]:null,typeof d=="function"&&t.removeEventListener(n,d,u),typeof o=="function")){typeof d!="function"&&d!==null&&(s in t?t[s]=null:t.hasAttribute(s)&&t.removeAttribute(s)),t.addEventListener(n,o,u);break e}s in t?t[s]=o:o===!0?t.setAttribute(s,""):ke(t,s,o)}}}function Nn(t,n,s){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":vt("error",t),vt("load",t);var o=!1,u=!1,d;for(d in s)if(s.hasOwnProperty(d)){var S=s[d];if(S!=null)switch(d){case"src":o=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(a(137,n));default:Vt(t,n,d,S,s,null)}}u&&Vt(t,n,"srcSet",s.srcSet,s,null),o&&Vt(t,n,"src",s.src,s,null);return;case"input":vt("invalid",t);var w=d=S=u=null,G=null,le=null;for(o in s)if(s.hasOwnProperty(o)){var Se=s[o];if(Se!=null)switch(o){case"name":u=Se;break;case"type":S=Se;break;case"checked":G=Se;break;case"defaultChecked":le=Se;break;case"value":d=Se;break;case"defaultValue":w=Se;break;case"children":case"dangerouslySetInnerHTML":if(Se!=null)throw Error(a(137,n));break;default:Vt(t,n,o,Se,s,null)}}We(t,d,w,G,le,S,u,!1);return;case"select":vt("invalid",t),o=S=d=null;for(u in s)if(s.hasOwnProperty(u)&&(w=s[u],w!=null))switch(u){case"value":d=w;break;case"defaultValue":S=w;break;case"multiple":o=w;default:Vt(t,n,u,w,s,null)}n=d,s=S,t.multiple=!!o,n!=null?dt(t,!!o,n,!1):s!=null&&dt(t,!!o,s,!0);return;case"textarea":vt("invalid",t),d=u=o=null;for(S in s)if(s.hasOwnProperty(S)&&(w=s[S],w!=null))switch(S){case"value":o=w;break;case"defaultValue":u=w;break;case"children":d=w;break;case"dangerouslySetInnerHTML":if(w!=null)throw Error(a(91));break;default:Vt(t,n,S,w,s,null)}ti(t,o,u,d);return;case"option":for(G in s)s.hasOwnProperty(G)&&(o=s[G],o!=null)&&(G==="selected"?t.selected=o&&typeof o!="function"&&typeof o!="symbol":Vt(t,n,G,o,s,null));return;case"dialog":vt("beforetoggle",t),vt("toggle",t),vt("cancel",t),vt("close",t);break;case"iframe":case"object":vt("load",t);break;case"video":case"audio":for(o=0;o<jo.length;o++)vt(jo[o],t);break;case"image":vt("error",t),vt("load",t);break;case"details":vt("toggle",t);break;case"embed":case"source":case"link":vt("error",t),vt("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(le in s)if(s.hasOwnProperty(le)&&(o=s[le],o!=null))switch(le){case"children":case"dangerouslySetInnerHTML":throw Error(a(137,n));default:Vt(t,n,le,o,s,null)}return;default:if(hi(n)){for(Se in s)s.hasOwnProperty(Se)&&(o=s[Se],o!==void 0&&Pd(t,n,Se,o,s,void 0));return}}for(w in s)s.hasOwnProperty(w)&&(o=s[w],o!=null&&Vt(t,n,w,o,s,null))}function tb(t,n,s,o){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,d=null,S=null,w=null,G=null,le=null,Se=null;for(pe in s){var Me=s[pe];if(s.hasOwnProperty(pe)&&Me!=null)switch(pe){case"checked":break;case"value":break;case"defaultValue":G=Me;default:o.hasOwnProperty(pe)||Vt(t,n,pe,null,o,Me)}}for(var ue in o){var pe=o[ue];if(Me=s[ue],o.hasOwnProperty(ue)&&(pe!=null||Me!=null))switch(ue){case"type":d=pe;break;case"name":u=pe;break;case"checked":le=pe;break;case"defaultChecked":Se=pe;break;case"value":S=pe;break;case"defaultValue":w=pe;break;case"children":case"dangerouslySetInnerHTML":if(pe!=null)throw Error(a(137,n));break;default:pe!==Me&&Vt(t,n,ue,pe,o,Me)}}hn(t,S,w,G,le,Se,d,u);return;case"select":pe=S=w=ue=null;for(d in s)if(G=s[d],s.hasOwnProperty(d)&&G!=null)switch(d){case"value":break;case"multiple":pe=G;default:o.hasOwnProperty(d)||Vt(t,n,d,null,o,G)}for(u in o)if(d=o[u],G=s[u],o.hasOwnProperty(u)&&(d!=null||G!=null))switch(u){case"value":ue=d;break;case"defaultValue":w=d;break;case"multiple":S=d;default:d!==G&&Vt(t,n,u,d,o,G)}n=w,s=S,o=pe,ue!=null?dt(t,!!s,ue,!1):!!o!=!!s&&(n!=null?dt(t,!!s,n,!0):dt(t,!!s,s?[]:"",!1));return;case"textarea":pe=ue=null;for(w in s)if(u=s[w],s.hasOwnProperty(w)&&u!=null&&!o.hasOwnProperty(w))switch(w){case"value":break;case"children":break;default:Vt(t,n,w,null,o,u)}for(S in o)if(u=o[S],d=s[S],o.hasOwnProperty(S)&&(u!=null||d!=null))switch(S){case"value":ue=u;break;case"defaultValue":pe=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(a(91));break;default:u!==d&&Vt(t,n,S,u,o,d)}zn(t,ue,pe);return;case"option":for(var Ye in s)ue=s[Ye],s.hasOwnProperty(Ye)&&ue!=null&&!o.hasOwnProperty(Ye)&&(Ye==="selected"?t.selected=!1:Vt(t,n,Ye,null,o,ue));for(G in o)ue=o[G],pe=s[G],o.hasOwnProperty(G)&&ue!==pe&&(ue!=null||pe!=null)&&(G==="selected"?t.selected=ue&&typeof ue!="function"&&typeof ue!="symbol":Vt(t,n,G,ue,o,pe));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var et in s)ue=s[et],s.hasOwnProperty(et)&&ue!=null&&!o.hasOwnProperty(et)&&Vt(t,n,et,null,o,ue);for(le in o)if(ue=o[le],pe=s[le],o.hasOwnProperty(le)&&ue!==pe&&(ue!=null||pe!=null))switch(le){case"children":case"dangerouslySetInnerHTML":if(ue!=null)throw Error(a(137,n));break;default:Vt(t,n,le,ue,o,pe)}return;default:if(hi(n)){for(var kt in s)ue=s[kt],s.hasOwnProperty(kt)&&ue!==void 0&&!o.hasOwnProperty(kt)&&Pd(t,n,kt,void 0,o,ue);for(Se in o)ue=o[Se],pe=s[Se],!o.hasOwnProperty(Se)||ue===pe||ue===void 0&&pe===void 0||Pd(t,n,Se,ue,o,pe);return}}for(var Z in s)ue=s[Z],s.hasOwnProperty(Z)&&ue!=null&&!o.hasOwnProperty(Z)&&Vt(t,n,Z,null,o,ue);for(Me in o)ue=o[Me],pe=s[Me],!o.hasOwnProperty(Me)||ue===pe||ue==null&&pe==null||Vt(t,n,Me,ue,o,pe)}function gx(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function nb(){if(typeof performance.getEntriesByType=="function"){for(var t=0,n=0,s=performance.getEntriesByType("resource"),o=0;o<s.length;o++){var u=s[o],d=u.transferSize,S=u.initiatorType,w=u.duration;if(d&&w&&gx(S)){for(S=0,w=u.responseEnd,o+=1;o<s.length;o++){var G=s[o],le=G.startTime;if(le>w)break;var Se=G.transferSize,Me=G.initiatorType;Se&&gx(Me)&&(G=G.responseEnd,S+=Se*(G<w?1:(w-le)/(G-le)))}if(--o,n+=8*(d+S)/(u.duration/1e3),t++,10<t)break}}if(0<t)return n/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var Id=null,Bd=null;function Cc(t){return t.nodeType===9?t:t.ownerDocument}function xx(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function vx(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function Fd(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var zd=null;function ib(){var t=window.event;return t&&t.type==="popstate"?t===zd?!1:(zd=t,!0):(zd=null,!1)}var _x=typeof setTimeout=="function"?setTimeout:void 0,ab=typeof clearTimeout=="function"?clearTimeout:void 0,Sx=typeof Promise=="function"?Promise:void 0,sb=typeof queueMicrotask=="function"?queueMicrotask:typeof Sx<"u"?function(t){return Sx.resolve(null).then(t).catch(rb)}:_x;function rb(t){setTimeout(function(){throw t})}function rs(t){return t==="head"}function yx(t,n){var s=n,o=0;do{var u=s.nextSibling;if(t.removeChild(s),u&&u.nodeType===8)if(s=u.data,s==="/$"||s==="/&"){if(o===0){t.removeChild(u),Or(n);return}o--}else if(s==="$"||s==="$?"||s==="$~"||s==="$!"||s==="&")o++;else if(s==="html")Yo(t.ownerDocument.documentElement);else if(s==="head"){s=t.ownerDocument.head,Yo(s);for(var d=s.firstChild;d;){var S=d.nextSibling,w=d.nodeName;d[za]||w==="SCRIPT"||w==="STYLE"||w==="LINK"&&d.rel.toLowerCase()==="stylesheet"||s.removeChild(d),d=S}}else s==="body"&&Yo(t.ownerDocument.body);s=u}while(s);Or(n)}function bx(t,n){var s=t;t=0;do{var o=s.nextSibling;if(s.nodeType===1?n?(s._stashedDisplay=s.style.display,s.style.display="none"):(s.style.display=s._stashedDisplay||"",s.getAttribute("style")===""&&s.removeAttribute("style")):s.nodeType===3&&(n?(s._stashedText=s.nodeValue,s.nodeValue=""):s.nodeValue=s._stashedText||""),o&&o.nodeType===8)if(s=o.data,s==="/$"){if(t===0)break;t--}else s!=="$"&&s!=="$?"&&s!=="$~"&&s!=="$!"||t++;s=o}while(s)}function Hd(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var s=n;switch(n=n.nextSibling,s.nodeName){case"HTML":case"HEAD":case"BODY":Hd(s),Ha(s);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(s.rel.toLowerCase()==="stylesheet")continue}t.removeChild(s)}}function ob(t,n,s,o){for(;t.nodeType===1;){var u=s;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!o&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(o){if(!t[za])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(d=t.getAttribute("rel"),d==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(d!==u.rel||t.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||t.getAttribute("title")!==(u.title==null?null:u.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(d=t.getAttribute("src"),(d!==(u.src==null?null:u.src)||t.getAttribute("type")!==(u.type==null?null:u.type)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&d&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var d=u.name==null?null:""+u.name;if(u.type==="hidden"&&t.getAttribute("name")===d)return t}else return t;if(t=yi(t.nextSibling),t===null)break}return null}function lb(t,n,s){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!s||(t=yi(t.nextSibling),t===null))return null;return t}function Mx(t,n){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=yi(t.nextSibling),t===null))return null;return t}function Gd(t){return t.data==="$?"||t.data==="$~"}function Vd(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function cb(t,n){var s=t.ownerDocument;if(t.data==="$~")t._reactRetry=n;else if(t.data!=="$?"||s.readyState!=="loading")n();else{var o=function(){n(),s.removeEventListener("DOMContentLoaded",o)};s.addEventListener("DOMContentLoaded",o),t._reactRetry=o}}function yi(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return t}var kd=null;function Ex(t){t=t.nextSibling;for(var n=0;t;){if(t.nodeType===8){var s=t.data;if(s==="/$"||s==="/&"){if(n===0)return yi(t.nextSibling);n--}else s!=="$"&&s!=="$!"&&s!=="$?"&&s!=="$~"&&s!=="&"||n++}t=t.nextSibling}return null}function Tx(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var s=t.data;if(s==="$"||s==="$!"||s==="$?"||s==="$~"||s==="&"){if(n===0)return t;n--}else s!=="/$"&&s!=="/&"||n++}t=t.previousSibling}return null}function Ax(t,n,s){switch(n=Cc(s),t){case"html":if(t=n.documentElement,!t)throw Error(a(452));return t;case"head":if(t=n.head,!t)throw Error(a(453));return t;case"body":if(t=n.body,!t)throw Error(a(454));return t;default:throw Error(a(451))}}function Yo(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);Ha(t)}var bi=new Map,Rx=new Set;function Nc(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var Ma=F.d;F.d={f:ub,r:fb,D:db,C:hb,L:pb,m:mb,X:xb,S:gb,M:vb};function ub(){var t=Ma.f(),n=yc();return t||n}function fb(t){var n=oa(t);n!==null&&n.tag===5&&n.type==="form"?Wg(n):Ma.r(t)}var Dr=typeof document>"u"?null:document;function wx(t,n,s){var o=Dr;if(o&&typeof n=="string"&&n){var u=ft(n);u='link[rel="'+t+'"][href="'+u+'"]',typeof s=="string"&&(u+='[crossorigin="'+s+'"]'),Rx.has(u)||(Rx.add(u),t={rel:t,crossOrigin:s,href:n},o.querySelector(u)===null&&(n=o.createElement("link"),Nn(n,"link",t),dn(n),o.head.appendChild(n)))}}function db(t){Ma.D(t),wx("dns-prefetch",t,null)}function hb(t,n){Ma.C(t,n),wx("preconnect",t,n)}function pb(t,n,s){Ma.L(t,n,s);var o=Dr;if(o&&t&&n){var u='link[rel="preload"][as="'+ft(n)+'"]';n==="image"&&s&&s.imageSrcSet?(u+='[imagesrcset="'+ft(s.imageSrcSet)+'"]',typeof s.imageSizes=="string"&&(u+='[imagesizes="'+ft(s.imageSizes)+'"]')):u+='[href="'+ft(t)+'"]';var d=u;switch(n){case"style":d=Ur(t);break;case"script":d=Lr(t)}bi.has(d)||(t=v({rel:"preload",href:n==="image"&&s&&s.imageSrcSet?void 0:t,as:n},s),bi.set(d,t),o.querySelector(u)!==null||n==="style"&&o.querySelector(Zo(d))||n==="script"&&o.querySelector(Ko(d))||(n=o.createElement("link"),Nn(n,"link",t),dn(n),o.head.appendChild(n)))}}function mb(t,n){Ma.m(t,n);var s=Dr;if(s&&t){var o=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+ft(o)+'"][href="'+ft(t)+'"]',d=u;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":d=Lr(t)}if(!bi.has(d)&&(t=v({rel:"modulepreload",href:t},n),bi.set(d,t),s.querySelector(u)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(s.querySelector(Ko(d)))return}o=s.createElement("link"),Nn(o,"link",t),dn(o),s.head.appendChild(o)}}}function gb(t,n,s){Ma.S(t,n,s);var o=Dr;if(o&&t){var u=Ga(o).hoistableStyles,d=Ur(t);n=n||"default";var S=u.get(d);if(!S){var w={loading:0,preload:null};if(S=o.querySelector(Zo(d)))w.loading=5;else{t=v({rel:"stylesheet",href:t,"data-precedence":n},s),(s=bi.get(d))&&Wd(t,s);var G=S=o.createElement("link");dn(G),Nn(G,"link",t),G._p=new Promise(function(le,Se){G.onload=le,G.onerror=Se}),G.addEventListener("load",function(){w.loading|=1}),G.addEventListener("error",function(){w.loading|=2}),w.loading|=4,Dc(S,n,o)}S={type:"stylesheet",instance:S,count:1,state:w},u.set(d,S)}}}function xb(t,n){Ma.X(t,n);var s=Dr;if(s&&t){var o=Ga(s).hoistableScripts,u=Lr(t),d=o.get(u);d||(d=s.querySelector(Ko(u)),d||(t=v({src:t,async:!0},n),(n=bi.get(u))&&Xd(t,n),d=s.createElement("script"),dn(d),Nn(d,"link",t),s.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},o.set(u,d))}}function vb(t,n){Ma.M(t,n);var s=Dr;if(s&&t){var o=Ga(s).hoistableScripts,u=Lr(t),d=o.get(u);d||(d=s.querySelector(Ko(u)),d||(t=v({src:t,async:!0,type:"module"},n),(n=bi.get(u))&&Xd(t,n),d=s.createElement("script"),dn(d),Nn(d,"link",t),s.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},o.set(u,d))}}function Cx(t,n,s,o){var u=(u=Xe.current)?Nc(u):null;if(!u)throw Error(a(446));switch(t){case"meta":case"title":return null;case"style":return typeof s.precedence=="string"&&typeof s.href=="string"?(n=Ur(s.href),s=Ga(u).hoistableStyles,o=s.get(n),o||(o={type:"style",instance:null,count:0,state:null},s.set(n,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(s.rel==="stylesheet"&&typeof s.href=="string"&&typeof s.precedence=="string"){t=Ur(s.href);var d=Ga(u).hoistableStyles,S=d.get(t);if(S||(u=u.ownerDocument||u,S={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},d.set(t,S),(d=u.querySelector(Zo(t)))&&!d._p&&(S.instance=d,S.state.loading=5),bi.has(t)||(s={rel:"preload",as:"style",href:s.href,crossOrigin:s.crossOrigin,integrity:s.integrity,media:s.media,hrefLang:s.hrefLang,referrerPolicy:s.referrerPolicy},bi.set(t,s),d||_b(u,t,s,S.state))),n&&o===null)throw Error(a(528,""));return S}if(n&&o!==null)throw Error(a(529,""));return null;case"script":return n=s.async,s=s.src,typeof s=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=Lr(s),s=Ga(u).hoistableScripts,o=s.get(n),o||(o={type:"script",instance:null,count:0,state:null},s.set(n,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(a(444,t))}}function Ur(t){return'href="'+ft(t)+'"'}function Zo(t){return'link[rel="stylesheet"]['+t+"]"}function Nx(t){return v({},t,{"data-precedence":t.precedence,precedence:null})}function _b(t,n,s,o){t.querySelector('link[rel="preload"][as="style"]['+n+"]")?o.loading=1:(n=t.createElement("link"),o.preload=n,n.addEventListener("load",function(){return o.loading|=1}),n.addEventListener("error",function(){return o.loading|=2}),Nn(n,"link",s),dn(n),t.head.appendChild(n))}function Lr(t){return'[src="'+ft(t)+'"]'}function Ko(t){return"script[async]"+t}function Dx(t,n,s){if(n.count++,n.instance===null)switch(n.type){case"style":var o=t.querySelector('style[data-href~="'+ft(s.href)+'"]');if(o)return n.instance=o,dn(o),o;var u=v({},s,{"data-href":s.href,"data-precedence":s.precedence,href:null,precedence:null});return o=(t.ownerDocument||t).createElement("style"),dn(o),Nn(o,"style",u),Dc(o,s.precedence,t),n.instance=o;case"stylesheet":u=Ur(s.href);var d=t.querySelector(Zo(u));if(d)return n.state.loading|=4,n.instance=d,dn(d),d;o=Nx(s),(u=bi.get(u))&&Wd(o,u),d=(t.ownerDocument||t).createElement("link"),dn(d);var S=d;return S._p=new Promise(function(w,G){S.onload=w,S.onerror=G}),Nn(d,"link",o),n.state.loading|=4,Dc(d,s.precedence,t),n.instance=d;case"script":return d=Lr(s.src),(u=t.querySelector(Ko(d)))?(n.instance=u,dn(u),u):(o=s,(u=bi.get(d))&&(o=v({},s),Xd(o,u)),t=t.ownerDocument||t,u=t.createElement("script"),dn(u),Nn(u,"link",o),t.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(a(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(o=n.instance,n.state.loading|=4,Dc(o,s.precedence,t));return n.instance}function Dc(t,n,s){for(var o=s.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=o.length?o[o.length-1]:null,d=u,S=0;S<o.length;S++){var w=o[S];if(w.dataset.precedence===n)d=w;else if(d!==u)break}d?d.parentNode.insertBefore(t,d.nextSibling):(n=s.nodeType===9?s.head:s,n.insertBefore(t,n.firstChild))}function Wd(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function Xd(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var Uc=null;function Ux(t,n,s){if(Uc===null){var o=new Map,u=Uc=new Map;u.set(s,o)}else u=Uc,o=u.get(s),o||(o=new Map,u.set(s,o));if(o.has(t))return o;for(o.set(t,null),s=s.getElementsByTagName(t),u=0;u<s.length;u++){var d=s[u];if(!(d[za]||d[fn]||t==="link"&&d.getAttribute("rel")==="stylesheet")&&d.namespaceURI!=="http://www.w3.org/2000/svg"){var S=d.getAttribute(n)||"";S=t+S;var w=o.get(S);w?w.push(d):o.set(S,[d])}}return o}function Lx(t,n,s){t=t.ownerDocument||t,t.head.insertBefore(s,n==="title"?t.querySelector("head > title"):null)}function Sb(t,n,s){if(s===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;return n.rel==="stylesheet"?(t=n.disabled,typeof n.precedence=="string"&&t==null):!0;case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function Ox(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function yb(t,n,s,o){if(s.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(s.state.loading&4)===0){if(s.instance===null){var u=Ur(o.href),d=n.querySelector(Zo(u));if(d){n=d._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(t.count++,t=Lc.bind(t),n.then(t,t)),s.state.loading|=4,s.instance=d,dn(d);return}d=n.ownerDocument||n,o=Nx(o),(u=bi.get(u))&&Wd(o,u),d=d.createElement("link"),dn(d);var S=d;S._p=new Promise(function(w,G){S.onload=w,S.onerror=G}),Nn(d,"link",o),s.instance=d}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(s,n),(n=s.state.preload)&&(s.state.loading&3)===0&&(t.count++,s=Lc.bind(t),n.addEventListener("load",s),n.addEventListener("error",s))}}var jd=0;function bb(t,n){return t.stylesheets&&t.count===0&&Pc(t,t.stylesheets),0<t.count||0<t.imgCount?function(s){var o=setTimeout(function(){if(t.stylesheets&&Pc(t,t.stylesheets),t.unsuspend){var d=t.unsuspend;t.unsuspend=null,d()}},6e4+n);0<t.imgBytes&&jd===0&&(jd=62500*nb());var u=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&Pc(t,t.stylesheets),t.unsuspend)){var d=t.unsuspend;t.unsuspend=null,d()}},(t.imgBytes>jd?50:800)+n);return t.unsuspend=s,function(){t.unsuspend=null,clearTimeout(o),clearTimeout(u)}}:null}function Lc(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Pc(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var Oc=null;function Pc(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Oc=new Map,n.forEach(Mb,t),Oc=null,Lc.call(t))}function Mb(t,n){if(!(n.state.loading&4)){var s=Oc.get(t);if(s)var o=s.get(null);else{s=new Map,Oc.set(t,s);for(var u=t.querySelectorAll("link[data-precedence],style[data-precedence]"),d=0;d<u.length;d++){var S=u[d];(S.nodeName==="LINK"||S.getAttribute("media")!=="not all")&&(s.set(S.dataset.precedence,S),o=S)}o&&s.set(null,o)}u=n.instance,S=u.getAttribute("data-precedence"),d=s.get(S)||o,d===o&&s.set(null,u),s.set(S,u),this.count++,o=Lc.bind(this),u.addEventListener("load",o),u.addEventListener("error",o),d?d.parentNode.insertBefore(u,d.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(u,t.firstChild)),n.state.loading|=4}}var Qo={$$typeof:z,Provider:null,Consumer:null,_currentValue:J,_currentValue2:J,_threadCount:0};function Eb(t,n,s,o,u,d,S,w,G){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ke(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ke(0),this.hiddenUpdates=Ke(null),this.identifierPrefix=o,this.onUncaughtError=u,this.onCaughtError=d,this.onRecoverableError=S,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=G,this.incompleteTransitions=new Map}function Px(t,n,s,o,u,d,S,w,G,le,Se,Me){return t=new Eb(t,n,s,S,G,le,Se,Me,w),n=1,d===!0&&(n|=24),d=ii(3,null,null,n),t.current=d,d.stateNode=t,n=Tf(),n.refCount++,t.pooledCache=n,n.refCount++,d.memoizedState={element:o,isDehydrated:s,cache:n},Cf(d),t}function Ix(t){return t?(t=ur,t):ur}function Bx(t,n,s,o,u,d){u=Ix(u),o.context===null?o.context=u:o.pendingContext=u,o=Za(n),o.payload={element:s},d=d===void 0?null:d,d!==null&&(o.callback=d),s=Ka(t,o,n),s!==null&&(Qn(s,t,n),Co(s,t,n))}function Fx(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var s=t.retryLane;t.retryLane=s!==0&&s<n?s:n}}function qd(t,n){Fx(t,n),(t=t.alternate)&&Fx(t,n)}function zx(t){if(t.tag===13||t.tag===31){var n=ws(t,67108864);n!==null&&Qn(n,t,67108864),qd(t,67108864)}}function Hx(t){if(t.tag===13||t.tag===31){var n=li();n=co(n);var s=ws(t,n);s!==null&&Qn(s,t,n),qd(t,n)}}var Ic=!0;function Tb(t,n,s,o){var u=H.T;H.T=null;var d=F.p;try{F.p=2,Yd(t,n,s,o)}finally{F.p=d,H.T=u}}function Ab(t,n,s,o){var u=H.T;H.T=null;var d=F.p;try{F.p=8,Yd(t,n,s,o)}finally{F.p=d,H.T=u}}function Yd(t,n,s,o){if(Ic){var u=Zd(o);if(u===null)Od(t,n,o,Bc,s),Vx(t,o);else if(wb(u,t,n,s,o))o.stopPropagation();else if(Vx(t,o),n&4&&-1<Rb.indexOf(t)){for(;u!==null;){var d=oa(u);if(d!==null)switch(d.tag){case 3:if(d=d.stateNode,d.current.memoizedState.isDehydrated){var S=Ce(d.pendingLanes);if(S!==0){var w=d;for(w.pendingLanes|=2,w.entangledLanes|=2;S;){var G=1<<31-Ve(S);w.entanglements[1]|=G,S&=~G}Yi(d),(Lt&6)===0&&(_c=Pt()+500,Xo(0))}}break;case 31:case 13:w=ws(d,2),w!==null&&Qn(w,d,2),yc(),qd(d,2)}if(d=Zd(o),d===null&&Od(t,n,o,Bc,s),d===u)break;u=d}u!==null&&o.stopPropagation()}else Od(t,n,o,null,s)}}function Zd(t){return t=Ku(t),Kd(t)}var Bc=null;function Kd(t){if(Bc=null,t=ra(t),t!==null){var n=c(t);if(n===null)t=null;else{var s=n.tag;if(s===13){if(t=f(n),t!==null)return t;t=null}else if(s===31){if(t=p(n),t!==null)return t;t=null}else if(s===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return Bc=t,null}function Gx(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Dt()){case P:return 2;case E:return 8;case K:case ce:return 32;case me:return 268435456;default:return 32}default:return 32}}var Qd=!1,os=null,ls=null,cs=null,Jo=new Map,$o=new Map,us=[],Rb="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Vx(t,n){switch(t){case"focusin":case"focusout":os=null;break;case"dragenter":case"dragleave":ls=null;break;case"mouseover":case"mouseout":cs=null;break;case"pointerover":case"pointerout":Jo.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":$o.delete(n.pointerId)}}function el(t,n,s,o,u,d){return t===null||t.nativeEvent!==d?(t={blockedOn:n,domEventName:s,eventSystemFlags:o,nativeEvent:d,targetContainers:[u]},n!==null&&(n=oa(n),n!==null&&zx(n)),t):(t.eventSystemFlags|=o,n=t.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),t)}function wb(t,n,s,o,u){switch(n){case"focusin":return os=el(os,t,n,s,o,u),!0;case"dragenter":return ls=el(ls,t,n,s,o,u),!0;case"mouseover":return cs=el(cs,t,n,s,o,u),!0;case"pointerover":var d=u.pointerId;return Jo.set(d,el(Jo.get(d)||null,t,n,s,o,u)),!0;case"gotpointercapture":return d=u.pointerId,$o.set(d,el($o.get(d)||null,t,n,s,o,u)),!0}return!1}function kx(t){var n=ra(t.target);if(n!==null){var s=c(n);if(s!==null){if(n=s.tag,n===13){if(n=f(s),n!==null){t.blockedOn=n,ir(t.priority,function(){Hx(s)});return}}else if(n===31){if(n=p(s),n!==null){t.blockedOn=n,ir(t.priority,function(){Hx(s)});return}}else if(n===3&&s.stateNode.current.memoizedState.isDehydrated){t.blockedOn=s.tag===3?s.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Fc(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var s=Zd(t.nativeEvent);if(s===null){s=t.nativeEvent;var o=new s.constructor(s.type,s);Zu=o,s.target.dispatchEvent(o),Zu=null}else return n=oa(s),n!==null&&zx(n),t.blockedOn=s,!1;n.shift()}return!0}function Wx(t,n,s){Fc(t)&&s.delete(n)}function Cb(){Qd=!1,os!==null&&Fc(os)&&(os=null),ls!==null&&Fc(ls)&&(ls=null),cs!==null&&Fc(cs)&&(cs=null),Jo.forEach(Wx),$o.forEach(Wx)}function zc(t,n){t.blockedOn===n&&(t.blockedOn=null,Qd||(Qd=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,Cb)))}var Hc=null;function Xx(t){Hc!==t&&(Hc=t,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){Hc===t&&(Hc=null);for(var n=0;n<t.length;n+=3){var s=t[n],o=t[n+1],u=t[n+2];if(typeof o!="function"){if(Kd(o||s)===null)continue;break}var d=oa(s);d!==null&&(t.splice(n,3),n-=3,Zf(d,{pending:!0,data:u,method:s.method,action:o},o,u))}}))}function Or(t){function n(G){return zc(G,t)}os!==null&&zc(os,t),ls!==null&&zc(ls,t),cs!==null&&zc(cs,t),Jo.forEach(n),$o.forEach(n);for(var s=0;s<us.length;s++){var o=us[s];o.blockedOn===t&&(o.blockedOn=null)}for(;0<us.length&&(s=us[0],s.blockedOn===null);)kx(s),s.blockedOn===null&&us.shift();if(s=(t.ownerDocument||t).$$reactFormReplay,s!=null)for(o=0;o<s.length;o+=3){var u=s[o],d=s[o+1],S=u[An]||null;if(typeof d=="function")S||Xx(s);else if(S){var w=null;if(d&&d.hasAttribute("formAction")){if(u=d,S=d[An]||null)w=S.formAction;else if(Kd(u)!==null)continue}else w=S.action;typeof w=="function"?s[o+1]=w:(s.splice(o,3),o-=3),Xx(s)}}}function jx(){function t(d){d.canIntercept&&d.info==="react-transition"&&d.intercept({handler:function(){return new Promise(function(S){return u=S})},focusReset:"manual",scroll:"manual"})}function n(){u!==null&&(u(),u=null),o||setTimeout(s,20)}function s(){if(!o&&!navigation.transition){var d=navigation.currentEntry;d&&d.url!=null&&navigation.navigate(d.url,{state:d.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var o=!1,u=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(s,100),function(){o=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),u!==null&&(u(),u=null)}}}function Jd(t){this._internalRoot=t}Gc.prototype.render=Jd.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(a(409));var s=n.current,o=li();Bx(s,o,t,n,null,null)},Gc.prototype.unmount=Jd.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;Bx(t.current,2,null,t,null,null),yc(),n[Xn]=null}};function Gc(t){this._internalRoot=t}Gc.prototype.unstable_scheduleHydration=function(t){if(t){var n=fo();t={blockedOn:null,target:t,priority:n};for(var s=0;s<us.length&&n!==0&&n<us[s].priority;s++);us.splice(s,0,t),s===0&&kx(t)}};var qx=e.version;if(qx!=="19.2.3")throw Error(a(527,qx,"19.2.3"));F.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(a(188)):(t=Object.keys(t).join(","),Error(a(268,t)));return t=h(n),t=t!==null?g(t):null,t=t===null?null:t.stateNode,t};var Nb={bundleType:0,version:"19.2.3",rendererPackageName:"react-dom",currentDispatcherRef:H,reconcilerVersion:"19.2.3"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Vc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Vc.isDisabled&&Vc.supportsFiber)try{ge=Vc.inject(Nb),xe=Vc}catch{}}return nl.createRoot=function(t,n){if(!l(t))throw Error(a(299));var s=!1,o="",u=e0,d=t0,S=n0;return n!=null&&(n.unstable_strictMode===!0&&(s=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(d=n.onCaughtError),n.onRecoverableError!==void 0&&(S=n.onRecoverableError)),n=Px(t,1,!1,null,null,s,o,null,u,d,S,jx),t[Xn]=n.current,Ld(t),new Jd(n)},nl.hydrateRoot=function(t,n,s){if(!l(t))throw Error(a(299));var o=!1,u="",d=e0,S=t0,w=n0,G=null;return s!=null&&(s.unstable_strictMode===!0&&(o=!0),s.identifierPrefix!==void 0&&(u=s.identifierPrefix),s.onUncaughtError!==void 0&&(d=s.onUncaughtError),s.onCaughtError!==void 0&&(S=s.onCaughtError),s.onRecoverableError!==void 0&&(w=s.onRecoverableError),s.formState!==void 0&&(G=s.formState)),n=Px(t,1,!0,n,s??null,o,u,G,d,S,w,jx),n.context=Ix(null),s=n.current,o=li(),o=co(o),u=Za(o),u.callback=null,Ka(s,u,o),s=o,n.current.lanes=s,je(n,s),Yi(n),t[Xn]=n.current,Ld(t),new Gc(n)},nl.version="19.2.3",nl}var iv;function Hb(){if(iv)return th.exports;iv=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),th.exports=zb(),th.exports}var Gb=Hb();var av="popstate";function Vb(r={}){function e(a,l){let{pathname:c,search:f,hash:p}=a.location;return qh("",{pathname:c,search:f,hash:p},l.state&&l.state.usr||null,l.state&&l.state.key||"default")}function i(a,l){return typeof l=="string"?l:yl(l)}return Wb(e,i,null,r)}function en(r,e){if(r===!1||r===null||typeof r>"u")throw new Error(e)}function Vi(r,e){if(!r){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function kb(){return Math.random().toString(36).substring(2,10)}function sv(r,e){return{usr:r.state,key:r.key,idx:e}}function qh(r,e,i=null,a){return{pathname:typeof r=="string"?r:r.pathname,search:"",hash:"",...typeof e=="string"?ao(e):e,state:i,key:e&&e.key||a||kb()}}function yl({pathname:r="/",search:e="",hash:i=""}){return e&&e!=="?"&&(r+=e.charAt(0)==="?"?e:"?"+e),i&&i!=="#"&&(r+=i.charAt(0)==="#"?i:"#"+i),r}function ao(r){let e={};if(r){let i=r.indexOf("#");i>=0&&(e.hash=r.substring(i),r=r.substring(0,i));let a=r.indexOf("?");a>=0&&(e.search=r.substring(a),r=r.substring(0,a)),r&&(e.pathname=r)}return e}function Wb(r,e,i,a={}){let{window:l=document.defaultView,v5Compat:c=!1}=a,f=l.history,p="POP",m=null,h=g();h==null&&(h=0,f.replaceState({...f.state,idx:h},""));function g(){return(f.state||{idx:null}).idx}function v(){p="POP";let y=g(),_=y==null?null:y-h;h=y,m&&m({action:p,location:C.location,delta:_})}function x(y,_){p="PUSH";let U=qh(C.location,y,_);h=g()+1;let z=sv(U,h),N=C.createHref(U);try{f.pushState(z,"",N)}catch(L){if(L instanceof DOMException&&L.name==="DataCloneError")throw L;l.location.assign(N)}c&&m&&m({action:p,location:C.location,delta:1})}function b(y,_){p="REPLACE";let U=qh(C.location,y,_);h=g();let z=sv(U,h),N=C.createHref(U);f.replaceState(z,"",N),c&&m&&m({action:p,location:C.location,delta:0})}function T(y){return Xb(y)}let C={get action(){return p},get location(){return r(l,f)},listen(y){if(m)throw new Error("A history only accepts one active listener");return l.addEventListener(av,v),m=y,()=>{l.removeEventListener(av,v),m=null}},createHref(y){return e(l,y)},createURL:T,encodeLocation(y){let _=T(y);return{pathname:_.pathname,search:_.search,hash:_.hash}},push:x,replace:b,go(y){return f.go(y)}};return C}function Xb(r,e=!1){let i="http://localhost";typeof window<"u"&&(i=window.location.origin!=="null"?window.location.origin:window.location.href),en(i,"No window.location.(origin|href) available to create URL");let a=typeof r=="string"?r:yl(r);return a=a.replace(/ $/,"%20"),!e&&a.startsWith("//")&&(a=i+a),new URL(a,i)}function g_(r,e,i="/"){return jb(r,e,i,!1)}function jb(r,e,i,a){let l=typeof e=="string"?ao(e):e,c=Ia(l.pathname||"/",i);if(c==null)return null;let f=x_(r);qb(f);let p=null;for(let m=0;p==null&&m<f.length;++m){let h=aM(c);p=nM(f[m],h,a)}return p}function x_(r,e=[],i=[],a="",l=!1){let c=(f,p,m=l,h)=>{let g={relativePath:h===void 0?f.path||"":h,caseSensitive:f.caseSensitive===!0,childrenIndex:p,route:f};if(g.relativePath.startsWith("/")){if(!g.relativePath.startsWith(a)&&m)return;en(g.relativePath.startsWith(a),`Absolute route path "${g.relativePath}" nested under path "${a}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),g.relativePath=g.relativePath.slice(a.length)}let v=La([a,g.relativePath]),x=i.concat(g);f.children&&f.children.length>0&&(en(f.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${v}".`),x_(f.children,e,x,v,m)),!(f.path==null&&!f.index)&&e.push({path:v,score:eM(v,f.index),routesMeta:x})};return r.forEach((f,p)=>{if(f.path===""||!f.path?.includes("?"))c(f,p);else for(let m of v_(f.path))c(f,p,!0,m)}),e}function v_(r){let e=r.split("/");if(e.length===0)return[];let[i,...a]=e,l=i.endsWith("?"),c=i.replace(/\?$/,"");if(a.length===0)return l?[c,""]:[c];let f=v_(a.join("/")),p=[];return p.push(...f.map(m=>m===""?c:[c,m].join("/"))),l&&p.push(...f),p.map(m=>r.startsWith("/")&&m===""?"/":m)}function qb(r){r.sort((e,i)=>e.score!==i.score?i.score-e.score:tM(e.routesMeta.map(a=>a.childrenIndex),i.routesMeta.map(a=>a.childrenIndex)))}var Yb=/^:[\w-]+$/,Zb=3,Kb=2,Qb=1,Jb=10,$b=-2,rv=r=>r==="*";function eM(r,e){let i=r.split("/"),a=i.length;return i.some(rv)&&(a+=$b),e&&(a+=Kb),i.filter(l=>!rv(l)).reduce((l,c)=>l+(Yb.test(c)?Zb:c===""?Qb:Jb),a)}function tM(r,e){return r.length===e.length&&r.slice(0,-1).every((a,l)=>a===e[l])?r[r.length-1]-e[e.length-1]:0}function nM(r,e,i=!1){let{routesMeta:a}=r,l={},c="/",f=[];for(let p=0;p<a.length;++p){let m=a[p],h=p===a.length-1,g=c==="/"?e:e.slice(c.length)||"/",v=Cu({path:m.relativePath,caseSensitive:m.caseSensitive,end:h},g),x=m.route;if(!v&&h&&i&&!a[a.length-1].route.index&&(v=Cu({path:m.relativePath,caseSensitive:m.caseSensitive,end:!1},g)),!v)return null;Object.assign(l,v.params),f.push({params:l,pathname:La([c,v.pathname]),pathnameBase:lM(La([c,v.pathnameBase])),route:x}),v.pathnameBase!=="/"&&(c=La([c,v.pathnameBase]))}return f}function Cu(r,e){typeof r=="string"&&(r={path:r,caseSensitive:!1,end:!0});let[i,a]=iM(r.path,r.caseSensitive,r.end),l=e.match(i);if(!l)return null;let c=l[0],f=c.replace(/(.)\/+$/,"$1"),p=l.slice(1);return{params:a.reduce((h,{paramName:g,isOptional:v},x)=>{if(g==="*"){let T=p[x]||"";f=c.slice(0,c.length-T.length).replace(/(.)\/+$/,"$1")}const b=p[x];return v&&!b?h[g]=void 0:h[g]=(b||"").replace(/%2F/g,"/"),h},{}),pathname:c,pathnameBase:f,pattern:r}}function iM(r,e=!1,i=!0){Vi(r==="*"||!r.endsWith("*")||r.endsWith("/*"),`Route path "${r}" will be treated as if it were "${r.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${r.replace(/\*$/,"/*")}".`);let a=[],l="^"+r.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(f,p,m)=>(a.push({paramName:p,isOptional:m!=null}),m?"/?([^\\/]+)?":"/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return r.endsWith("*")?(a.push({paramName:"*"}),l+=r==="*"||r==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):i?l+="\\/*$":r!==""&&r!=="/"&&(l+="(?:(?=\\/|$))"),[new RegExp(l,e?void 0:"i"),a]}function aM(r){try{return r.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return Vi(!1,`The URL path "${r}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${e}).`),r}}function Ia(r,e){if(e==="/")return r;if(!r.toLowerCase().startsWith(e.toLowerCase()))return null;let i=e.endsWith("/")?e.length-1:e.length,a=r.charAt(i);return a&&a!=="/"?null:r.slice(i)||"/"}var sM=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;function rM(r,e="/"){let{pathname:i,search:a="",hash:l=""}=typeof r=="string"?ao(r):r,c;return i?(i=i.replace(/\/\/+/g,"/"),i.startsWith("/")?c=ov(i.substring(1),"/"):c=ov(i,e)):c=e,{pathname:c,search:cM(a),hash:uM(l)}}function ov(r,e){let i=e.replace(/\/+$/,"").split("/");return r.split("/").forEach(l=>{l===".."?i.length>1&&i.pop():l!=="."&&i.push(l)}),i.length>1?i.join("/"):"/"}function sh(r,e,i,a){return`Cannot include a '${r}' character in a manually specified \`to.${e}\` field [${JSON.stringify(a)}].  Please separate it out to the \`to.${i}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function oM(r){return r.filter((e,i)=>i===0||e.route.path&&e.route.path.length>0)}function Hp(r){let e=oM(r);return e.map((i,a)=>a===e.length-1?i.pathname:i.pathnameBase)}function Gp(r,e,i,a=!1){let l;typeof r=="string"?l=ao(r):(l={...r},en(!l.pathname||!l.pathname.includes("?"),sh("?","pathname","search",l)),en(!l.pathname||!l.pathname.includes("#"),sh("#","pathname","hash",l)),en(!l.search||!l.search.includes("#"),sh("#","search","hash",l)));let c=r===""||l.pathname==="",f=c?"/":l.pathname,p;if(f==null)p=i;else{let v=e.length-1;if(!a&&f.startsWith("..")){let x=f.split("/");for(;x[0]==="..";)x.shift(),v-=1;l.pathname=x.join("/")}p=v>=0?e[v]:"/"}let m=rM(l,p),h=f&&f!=="/"&&f.endsWith("/"),g=(c||f===".")&&i.endsWith("/");return!m.pathname.endsWith("/")&&(h||g)&&(m.pathname+="/"),m}var La=r=>r.join("/").replace(/\/\/+/g,"/"),lM=r=>r.replace(/\/+$/,"").replace(/^\/*/,"/"),cM=r=>!r||r==="?"?"":r.startsWith("?")?r:"?"+r,uM=r=>!r||r==="#"?"":r.startsWith("#")?r:"#"+r,fM=class{constructor(r,e,i,a=!1){this.status=r,this.statusText=e||"",this.internal=a,i instanceof Error?(this.data=i.toString(),this.error=i):this.data=i}};function dM(r){return r!=null&&typeof r.status=="number"&&typeof r.statusText=="string"&&typeof r.internal=="boolean"&&"data"in r}function hM(r){return r.map(e=>e.route.path).filter(Boolean).join("/").replace(/\/\/*/g,"/")||"/"}var __=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function S_(r,e){let i=r;if(typeof i!="string"||!sM.test(i))return{absoluteURL:void 0,isExternal:!1,to:i};let a=i,l=!1;if(__)try{let c=new URL(window.location.href),f=i.startsWith("//")?new URL(c.protocol+i):new URL(i),p=Ia(f.pathname,e);f.origin===c.origin&&p!=null?i=p+f.search+f.hash:l=!0}catch{Vi(!1,`<Link to="${i}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:a,isExternal:l,to:i}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var y_=["POST","PUT","PATCH","DELETE"];new Set(y_);var pM=["GET",...y_];new Set(pM);var so=ee.createContext(null);so.displayName="DataRouter";var ku=ee.createContext(null);ku.displayName="DataRouterState";var mM=ee.createContext(!1),b_=ee.createContext({isTransitioning:!1});b_.displayName="ViewTransition";var gM=ee.createContext(new Map);gM.displayName="Fetchers";var xM=ee.createContext(null);xM.displayName="Await";var di=ee.createContext(null);di.displayName="Navigation";var Rl=ee.createContext(null);Rl.displayName="Location";var sa=ee.createContext({outlet:null,matches:[],isDataRoute:!1});sa.displayName="Route";var Vp=ee.createContext(null);Vp.displayName="RouteError";var M_="REACT_ROUTER_ERROR",vM="REDIRECT",_M="ROUTE_ERROR_RESPONSE";function SM(r){if(r.startsWith(`${M_}:${vM}:{`))try{let e=JSON.parse(r.slice(28));if(typeof e=="object"&&e&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.location=="string"&&typeof e.reloadDocument=="boolean"&&typeof e.replace=="boolean")return e}catch{}}function yM(r){if(r.startsWith(`${M_}:${_M}:{`))try{let e=JSON.parse(r.slice(40));if(typeof e=="object"&&e&&typeof e.status=="number"&&typeof e.statusText=="string")return new fM(e.status,e.statusText,e.data)}catch{}}function bM(r,{relative:e}={}){en(ro(),"useHref() may be used only in the context of a <Router> component.");let{basename:i,navigator:a}=ee.useContext(di),{hash:l,pathname:c,search:f}=wl(r,{relative:e}),p=c;return i!=="/"&&(p=c==="/"?i:La([i,c])),a.createHref({pathname:p,search:f,hash:l})}function ro(){return ee.useContext(Rl)!=null}function ys(){return en(ro(),"useLocation() may be used only in the context of a <Router> component."),ee.useContext(Rl).location}var E_="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function T_(r){ee.useContext(di).static||ee.useLayoutEffect(r)}function A_(){let{isDataRoute:r}=ee.useContext(sa);return r?PM():MM()}function MM(){en(ro(),"useNavigate() may be used only in the context of a <Router> component.");let r=ee.useContext(so),{basename:e,navigator:i}=ee.useContext(di),{matches:a}=ee.useContext(sa),{pathname:l}=ys(),c=JSON.stringify(Hp(a)),f=ee.useRef(!1);return T_(()=>{f.current=!0}),ee.useCallback((m,h={})=>{if(Vi(f.current,E_),!f.current)return;if(typeof m=="number"){i.go(m);return}let g=Gp(m,JSON.parse(c),l,h.relative==="path");r==null&&e!=="/"&&(g.pathname=g.pathname==="/"?e:La([e,g.pathname])),(h.replace?i.replace:i.push)(g,h.state,h)},[e,i,c,l,r])}ee.createContext(null);function wl(r,{relative:e}={}){let{matches:i}=ee.useContext(sa),{pathname:a}=ys(),l=JSON.stringify(Hp(i));return ee.useMemo(()=>Gp(r,JSON.parse(l),a,e==="path"),[r,l,a,e])}function EM(r,e){return R_(r,e)}function R_(r,e,i,a,l){en(ro(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:c}=ee.useContext(di),{matches:f}=ee.useContext(sa),p=f[f.length-1],m=p?p.params:{},h=p?p.pathname:"/",g=p?p.pathnameBase:"/",v=p&&p.route;{let U=v&&v.path||"";C_(h,!v||U.endsWith("*")||U.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${h}" (under <Route path="${U}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${U}"> to <Route path="${U==="/"?"*":`${U}/*`}">.`)}let x=ys(),b;if(e){let U=typeof e=="string"?ao(e):e;en(g==="/"||U.pathname?.startsWith(g),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${g}" but pathname "${U.pathname}" was given in the \`location\` prop.`),b=U}else b=x;let T=b.pathname||"/",C=T;if(g!=="/"){let U=g.replace(/^\//,"").split("/");C="/"+T.replace(/^\//,"").split("/").slice(U.length).join("/")}let y=g_(r,{pathname:C});Vi(v||y!=null,`No routes matched location "${b.pathname}${b.search}${b.hash}" `),Vi(y==null||y[y.length-1].route.element!==void 0||y[y.length-1].route.Component!==void 0||y[y.length-1].route.lazy!==void 0,`Matched leaf route at location "${b.pathname}${b.search}${b.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let _=CM(y&&y.map(U=>Object.assign({},U,{params:Object.assign({},m,U.params),pathname:La([g,c.encodeLocation?c.encodeLocation(U.pathname.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:U.pathname]),pathnameBase:U.pathnameBase==="/"?g:La([g,c.encodeLocation?c.encodeLocation(U.pathnameBase.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:U.pathnameBase])})),f,i,a,l);return e&&_?ee.createElement(Rl.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...b},navigationType:"POP"}},_):_}function TM(){let r=OM(),e=dM(r)?`${r.status} ${r.statusText}`:r instanceof Error?r.message:JSON.stringify(r),i=r instanceof Error?r.stack:null,a="rgba(200,200,200, 0.5)",l={padding:"0.5rem",backgroundColor:a},c={padding:"2px 4px",backgroundColor:a},f=null;return console.error("Error handled by React Router default ErrorBoundary:",r),f=ee.createElement(ee.Fragment,null,ee.createElement("p",null,"💿 Hey developer 👋"),ee.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",ee.createElement("code",{style:c},"ErrorBoundary")," or"," ",ee.createElement("code",{style:c},"errorElement")," prop on your route.")),ee.createElement(ee.Fragment,null,ee.createElement("h2",null,"Unexpected Application Error!"),ee.createElement("h3",{style:{fontStyle:"italic"}},e),i?ee.createElement("pre",{style:l},i):null,f)}var AM=ee.createElement(TM,null),w_=class extends ee.Component{constructor(r){super(r),this.state={location:r.location,revalidation:r.revalidation,error:r.error}}static getDerivedStateFromError(r){return{error:r}}static getDerivedStateFromProps(r,e){return e.location!==r.location||e.revalidation!=="idle"&&r.revalidation==="idle"?{error:r.error,location:r.location,revalidation:r.revalidation}:{error:r.error!==void 0?r.error:e.error,location:e.location,revalidation:r.revalidation||e.revalidation}}componentDidCatch(r,e){this.props.onError?this.props.onError(r,e):console.error("React Router caught the following error during render",r)}render(){let r=this.state.error;if(this.context&&typeof r=="object"&&r&&"digest"in r&&typeof r.digest=="string"){const i=yM(r.digest);i&&(r=i)}let e=r!==void 0?ee.createElement(sa.Provider,{value:this.props.routeContext},ee.createElement(Vp.Provider,{value:r,children:this.props.component})):this.props.children;return this.context?ee.createElement(RM,{error:r},e):e}};w_.contextType=mM;var rh=new WeakMap;function RM({children:r,error:e}){let{basename:i}=ee.useContext(di);if(typeof e=="object"&&e&&"digest"in e&&typeof e.digest=="string"){let a=SM(e.digest);if(a){let l=rh.get(e);if(l)throw l;let c=S_(a.location,i);if(__&&!rh.get(e))if(c.isExternal||a.reloadDocument)window.location.href=c.absoluteURL||c.to;else{const f=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(c.to,{replace:a.replace}));throw rh.set(e,f),f}return ee.createElement("meta",{httpEquiv:"refresh",content:`0;url=${c.absoluteURL||c.to}`})}}return r}function wM({routeContext:r,match:e,children:i}){let a=ee.useContext(so);return a&&a.static&&a.staticContext&&(e.route.errorElement||e.route.ErrorBoundary)&&(a.staticContext._deepestRenderedBoundaryId=e.route.id),ee.createElement(sa.Provider,{value:r},i)}function CM(r,e=[],i=null,a=null,l=null){if(r==null){if(!i)return null;if(i.errors)r=i.matches;else if(e.length===0&&!i.initialized&&i.matches.length>0)r=i.matches;else return null}let c=r,f=i?.errors;if(f!=null){let g=c.findIndex(v=>v.route.id&&f?.[v.route.id]!==void 0);en(g>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(f).join(",")}`),c=c.slice(0,Math.min(c.length,g+1))}let p=!1,m=-1;if(i)for(let g=0;g<c.length;g++){let v=c[g];if((v.route.HydrateFallback||v.route.hydrateFallbackElement)&&(m=g),v.route.id){let{loaderData:x,errors:b}=i,T=v.route.loader&&!x.hasOwnProperty(v.route.id)&&(!b||b[v.route.id]===void 0);if(v.route.lazy||T){p=!0,m>=0?c=c.slice(0,m+1):c=[c[0]];break}}}let h=i&&a?(g,v)=>{a(g,{location:i.location,params:i.matches?.[0]?.params??{},unstable_pattern:hM(i.matches),errorInfo:v})}:void 0;return c.reduceRight((g,v,x)=>{let b,T=!1,C=null,y=null;i&&(b=f&&v.route.id?f[v.route.id]:void 0,C=v.route.errorElement||AM,p&&(m<0&&x===0?(C_("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),T=!0,y=null):m===x&&(T=!0,y=v.route.hydrateFallbackElement||null)));let _=e.concat(c.slice(0,x+1)),U=()=>{let z;return b?z=C:T?z=y:v.route.Component?z=ee.createElement(v.route.Component,null):v.route.element?z=v.route.element:z=g,ee.createElement(wM,{match:v,routeContext:{outlet:g,matches:_,isDataRoute:i!=null},children:z})};return i&&(v.route.ErrorBoundary||v.route.errorElement||x===0)?ee.createElement(w_,{location:i.location,revalidation:i.revalidation,component:C,error:b,children:U(),routeContext:{outlet:null,matches:_,isDataRoute:!0},onError:h}):U()},null)}function kp(r){return`${r} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function NM(r){let e=ee.useContext(so);return en(e,kp(r)),e}function DM(r){let e=ee.useContext(ku);return en(e,kp(r)),e}function UM(r){let e=ee.useContext(sa);return en(e,kp(r)),e}function Wp(r){let e=UM(r),i=e.matches[e.matches.length-1];return en(i.route.id,`${r} can only be used on routes that contain a unique "id"`),i.route.id}function LM(){return Wp("useRouteId")}function OM(){let r=ee.useContext(Vp),e=DM("useRouteError"),i=Wp("useRouteError");return r!==void 0?r:e.errors?.[i]}function PM(){let{router:r}=NM("useNavigate"),e=Wp("useNavigate"),i=ee.useRef(!1);return T_(()=>{i.current=!0}),ee.useCallback(async(l,c={})=>{Vi(i.current,E_),i.current&&(typeof l=="number"?await r.navigate(l):await r.navigate(l,{fromRouteId:e,...c}))},[r,e])}var lv={};function C_(r,e,i){!e&&!lv[r]&&(lv[r]=!0,Vi(!1,i))}ee.memo(IM);function IM({routes:r,future:e,state:i,onError:a}){return R_(r,void 0,i,a,e)}function oh({to:r,replace:e,state:i,relative:a}){en(ro(),"<Navigate> may be used only in the context of a <Router> component.");let{static:l}=ee.useContext(di);Vi(!l,"<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");let{matches:c}=ee.useContext(sa),{pathname:f}=ys(),p=A_(),m=Gp(r,Hp(c),f,a==="path"),h=JSON.stringify(m);return ee.useEffect(()=>{p(JSON.parse(h),{replace:e,state:i,relative:a})},[p,h,a,e,i]),null}function Bi(r){en(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function BM({basename:r="/",children:e=null,location:i,navigationType:a="POP",navigator:l,static:c=!1,unstable_useTransitions:f}){en(!ro(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let p=r.replace(/^\/*/,"/"),m=ee.useMemo(()=>({basename:p,navigator:l,static:c,unstable_useTransitions:f,future:{}}),[p,l,c,f]);typeof i=="string"&&(i=ao(i));let{pathname:h="/",search:g="",hash:v="",state:x=null,key:b="default"}=i,T=ee.useMemo(()=>{let C=Ia(h,p);return C==null?null:{location:{pathname:C,search:g,hash:v,state:x,key:b},navigationType:a}},[p,h,g,v,x,b,a]);return Vi(T!=null,`<Router basename="${p}"> is not able to match the URL "${h}${g}${v}" because it does not start with the basename, so the <Router> won't render anything.`),T==null?null:ee.createElement(di.Provider,{value:m},ee.createElement(Rl.Provider,{children:e,value:T}))}function FM({children:r,location:e}){return EM(Yh(r),e)}function Yh(r,e=[]){let i=[];return ee.Children.forEach(r,(a,l)=>{if(!ee.isValidElement(a))return;let c=[...e,l];if(a.type===ee.Fragment){i.push.apply(i,Yh(a.props.children,c));return}en(a.type===Bi,`[${typeof a.type=="string"?a.type:a.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),en(!a.props.index||!a.props.children,"An index route cannot have child routes.");let f={id:a.props.id||c.join("-"),caseSensitive:a.props.caseSensitive,element:a.props.element,Component:a.props.Component,index:a.props.index,path:a.props.path,middleware:a.props.middleware,loader:a.props.loader,action:a.props.action,hydrateFallbackElement:a.props.hydrateFallbackElement,HydrateFallback:a.props.HydrateFallback,errorElement:a.props.errorElement,ErrorBoundary:a.props.ErrorBoundary,hasErrorBoundary:a.props.hasErrorBoundary===!0||a.props.ErrorBoundary!=null||a.props.errorElement!=null,shouldRevalidate:a.props.shouldRevalidate,handle:a.props.handle,lazy:a.props.lazy};a.props.children&&(f.children=Yh(a.props.children,c)),i.push(f)}),i}var yu="get",bu="application/x-www-form-urlencoded";function Wu(r){return typeof HTMLElement<"u"&&r instanceof HTMLElement}function zM(r){return Wu(r)&&r.tagName.toLowerCase()==="button"}function HM(r){return Wu(r)&&r.tagName.toLowerCase()==="form"}function GM(r){return Wu(r)&&r.tagName.toLowerCase()==="input"}function VM(r){return!!(r.metaKey||r.altKey||r.ctrlKey||r.shiftKey)}function kM(r,e){return r.button===0&&(!e||e==="_self")&&!VM(r)}var kc=null;function WM(){if(kc===null)try{new FormData(document.createElement("form"),0),kc=!1}catch{kc=!0}return kc}var XM=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function lh(r){return r!=null&&!XM.has(r)?(Vi(!1,`"${r}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${bu}"`),null):r}function jM(r,e){let i,a,l,c,f;if(HM(r)){let p=r.getAttribute("action");a=p?Ia(p,e):null,i=r.getAttribute("method")||yu,l=lh(r.getAttribute("enctype"))||bu,c=new FormData(r)}else if(zM(r)||GM(r)&&(r.type==="submit"||r.type==="image")){let p=r.form;if(p==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let m=r.getAttribute("formaction")||p.getAttribute("action");if(a=m?Ia(m,e):null,i=r.getAttribute("formmethod")||p.getAttribute("method")||yu,l=lh(r.getAttribute("formenctype"))||lh(p.getAttribute("enctype"))||bu,c=new FormData(p,r),!WM()){let{name:h,type:g,value:v}=r;if(g==="image"){let x=h?`${h}.`:"";c.append(`${x}x`,"0"),c.append(`${x}y`,"0")}else h&&c.append(h,v)}}else{if(Wu(r))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');i=yu,a=null,l=bu,f=r}return c&&l==="text/plain"&&(f=c,c=void 0),{action:a,method:i.toLowerCase(),encType:l,formData:c,body:f}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function Xp(r,e){if(r===!1||r===null||typeof r>"u")throw new Error(e)}function qM(r,e,i,a){let l=typeof r=="string"?new URL(r,typeof window>"u"?"server://singlefetch/":window.location.origin):r;return i?l.pathname.endsWith("/")?l.pathname=`${l.pathname}_.${a}`:l.pathname=`${l.pathname}.${a}`:l.pathname==="/"?l.pathname=`_root.${a}`:e&&Ia(l.pathname,e)==="/"?l.pathname=`${e.replace(/\/$/,"")}/_root.${a}`:l.pathname=`${l.pathname.replace(/\/$/,"")}.${a}`,l}async function YM(r,e){if(r.id in e)return e[r.id];try{let i=await import(r.module);return e[r.id]=i,i}catch(i){return console.error(`Error loading route module \`${r.module}\`, reloading page...`),console.error(i),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function ZM(r){return r==null?!1:r.href==null?r.rel==="preload"&&typeof r.imageSrcSet=="string"&&typeof r.imageSizes=="string":typeof r.rel=="string"&&typeof r.href=="string"}async function KM(r,e,i){let a=await Promise.all(r.map(async l=>{let c=e.routes[l.route.id];if(c){let f=await YM(c,i);return f.links?f.links():[]}return[]}));return e1(a.flat(1).filter(ZM).filter(l=>l.rel==="stylesheet"||l.rel==="preload").map(l=>l.rel==="stylesheet"?{...l,rel:"prefetch",as:"style"}:{...l,rel:"prefetch"}))}function cv(r,e,i,a,l,c){let f=(m,h)=>i[h]?m.route.id!==i[h].route.id:!0,p=(m,h)=>i[h].pathname!==m.pathname||i[h].route.path?.endsWith("*")&&i[h].params["*"]!==m.params["*"];return c==="assets"?e.filter((m,h)=>f(m,h)||p(m,h)):c==="data"?e.filter((m,h)=>{let g=a.routes[m.route.id];if(!g||!g.hasLoader)return!1;if(f(m,h)||p(m,h))return!0;if(m.route.shouldRevalidate){let v=m.route.shouldRevalidate({currentUrl:new URL(l.pathname+l.search+l.hash,window.origin),currentParams:i[0]?.params||{},nextUrl:new URL(r,window.origin),nextParams:m.params,defaultShouldRevalidate:!0});if(typeof v=="boolean")return v}return!0}):[]}function QM(r,e,{includeHydrateFallback:i}={}){return JM(r.map(a=>{let l=e.routes[a.route.id];if(!l)return[];let c=[l.module];return l.clientActionModule&&(c=c.concat(l.clientActionModule)),l.clientLoaderModule&&(c=c.concat(l.clientLoaderModule)),i&&l.hydrateFallbackModule&&(c=c.concat(l.hydrateFallbackModule)),l.imports&&(c=c.concat(l.imports)),c}).flat(1))}function JM(r){return[...new Set(r)]}function $M(r){let e={},i=Object.keys(r).sort();for(let a of i)e[a]=r[a];return e}function e1(r,e){let i=new Set;return new Set(e),r.reduce((a,l)=>{let c=JSON.stringify($M(l));return i.has(c)||(i.add(c),a.push({key:c,link:l})),a},[])}function N_(){let r=ee.useContext(so);return Xp(r,"You must render this element inside a <DataRouterContext.Provider> element"),r}function t1(){let r=ee.useContext(ku);return Xp(r,"You must render this element inside a <DataRouterStateContext.Provider> element"),r}var jp=ee.createContext(void 0);jp.displayName="FrameworkContext";function D_(){let r=ee.useContext(jp);return Xp(r,"You must render this element inside a <HydratedRouter> element"),r}function n1(r,e){let i=ee.useContext(jp),[a,l]=ee.useState(!1),[c,f]=ee.useState(!1),{onFocus:p,onBlur:m,onMouseEnter:h,onMouseLeave:g,onTouchStart:v}=e,x=ee.useRef(null);ee.useEffect(()=>{if(r==="render"&&f(!0),r==="viewport"){let C=_=>{_.forEach(U=>{f(U.isIntersecting)})},y=new IntersectionObserver(C,{threshold:.5});return x.current&&y.observe(x.current),()=>{y.disconnect()}}},[r]),ee.useEffect(()=>{if(a){let C=setTimeout(()=>{f(!0)},100);return()=>{clearTimeout(C)}}},[a]);let b=()=>{l(!0)},T=()=>{l(!1),f(!1)};return i?r!=="intent"?[c,x,{}]:[c,x,{onFocus:il(p,b),onBlur:il(m,T),onMouseEnter:il(h,b),onMouseLeave:il(g,T),onTouchStart:il(v,b)}]:[!1,x,{}]}function il(r,e){return i=>{r&&r(i),i.defaultPrevented||e(i)}}function i1({page:r,...e}){let{router:i}=N_(),a=ee.useMemo(()=>g_(i.routes,r,i.basename),[i.routes,r,i.basename]);return a?ee.createElement(s1,{page:r,matches:a,...e}):null}function a1(r){let{manifest:e,routeModules:i}=D_(),[a,l]=ee.useState([]);return ee.useEffect(()=>{let c=!1;return KM(r,e,i).then(f=>{c||l(f)}),()=>{c=!0}},[r,e,i]),a}function s1({page:r,matches:e,...i}){let a=ys(),{future:l,manifest:c,routeModules:f}=D_(),{basename:p}=N_(),{loaderData:m,matches:h}=t1(),g=ee.useMemo(()=>cv(r,e,h,c,a,"data"),[r,e,h,c,a]),v=ee.useMemo(()=>cv(r,e,h,c,a,"assets"),[r,e,h,c,a]),x=ee.useMemo(()=>{if(r===a.pathname+a.search+a.hash)return[];let C=new Set,y=!1;if(e.forEach(U=>{let z=c.routes[U.route.id];!z||!z.hasLoader||(!g.some(N=>N.route.id===U.route.id)&&U.route.id in m&&f[U.route.id]?.shouldRevalidate||z.hasClientLoader?y=!0:C.add(U.route.id))}),C.size===0)return[];let _=qM(r,p,l.unstable_trailingSlashAwareDataRequests,"data");return y&&C.size>0&&_.searchParams.set("_routes",e.filter(U=>C.has(U.route.id)).map(U=>U.route.id).join(",")),[_.pathname+_.search]},[p,l.unstable_trailingSlashAwareDataRequests,m,a,c,g,e,r,f]),b=ee.useMemo(()=>QM(v,c),[v,c]),T=a1(v);return ee.createElement(ee.Fragment,null,x.map(C=>ee.createElement("link",{key:C,rel:"prefetch",as:"fetch",href:C,...i})),b.map(C=>ee.createElement("link",{key:C,rel:"modulepreload",href:C,...i})),T.map(({key:C,link:y})=>ee.createElement("link",{key:C,nonce:i.nonce,...y,crossOrigin:y.crossOrigin??i.crossOrigin})))}function r1(...r){return e=>{r.forEach(i=>{typeof i=="function"?i(e):i!=null&&(i.current=e)})}}var o1=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{o1&&(window.__reactRouterVersion="7.13.0")}catch{}function l1({basename:r,children:e,unstable_useTransitions:i,window:a}){let l=ee.useRef();l.current==null&&(l.current=Vb({window:a,v5Compat:!0}));let c=l.current,[f,p]=ee.useState({action:c.action,location:c.location}),m=ee.useCallback(h=>{i===!1?p(h):ee.startTransition(()=>p(h))},[i]);return ee.useLayoutEffect(()=>c.listen(m),[c,m]),ee.createElement(BM,{basename:r,children:e,location:f.location,navigationType:f.action,navigator:c,unstable_useTransitions:i})}var U_=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,zi=ee.forwardRef(function({onClick:e,discover:i="render",prefetch:a="none",relative:l,reloadDocument:c,replace:f,state:p,target:m,to:h,preventScrollReset:g,viewTransition:v,unstable_defaultShouldRevalidate:x,...b},T){let{basename:C,unstable_useTransitions:y}=ee.useContext(di),_=typeof h=="string"&&U_.test(h),U=S_(h,C);h=U.to;let z=bM(h,{relative:l}),[N,L,O]=n1(a,b),I=d1(h,{replace:f,state:p,target:m,preventScrollReset:g,relative:l,viewTransition:v,unstable_defaultShouldRevalidate:x,unstable_useTransitions:y});function A(X){e&&e(X),X.defaultPrevented||I(X)}let B=ee.createElement("a",{...b,...O,href:U.absoluteURL||z,onClick:U.isExternal||c?e:A,ref:r1(T,L),target:m,"data-discover":!_&&i==="render"?"true":void 0});return N&&!_?ee.createElement(ee.Fragment,null,B,ee.createElement(i1,{page:z})):B});zi.displayName="Link";var c1=ee.forwardRef(function({"aria-current":e="page",caseSensitive:i=!1,className:a="",end:l=!1,style:c,to:f,viewTransition:p,children:m,...h},g){let v=wl(f,{relative:h.relative}),x=ys(),b=ee.useContext(ku),{navigator:T,basename:C}=ee.useContext(di),y=b!=null&&x1(v)&&p===!0,_=T.encodeLocation?T.encodeLocation(v).pathname:v.pathname,U=x.pathname,z=b&&b.navigation&&b.navigation.location?b.navigation.location.pathname:null;i||(U=U.toLowerCase(),z=z?z.toLowerCase():null,_=_.toLowerCase()),z&&C&&(z=Ia(z,C)||z);const N=_!=="/"&&_.endsWith("/")?_.length-1:_.length;let L=U===_||!l&&U.startsWith(_)&&U.charAt(N)==="/",O=z!=null&&(z===_||!l&&z.startsWith(_)&&z.charAt(_.length)==="/"),I={isActive:L,isPending:O,isTransitioning:y},A=L?e:void 0,B;typeof a=="function"?B=a(I):B=[a,L?"active":null,O?"pending":null,y?"transitioning":null].filter(Boolean).join(" ");let X=typeof c=="function"?c(I):c;return ee.createElement(zi,{...h,"aria-current":A,className:B,ref:g,style:X,to:f,viewTransition:p},typeof m=="function"?m(I):m)});c1.displayName="NavLink";var u1=ee.forwardRef(({discover:r="render",fetcherKey:e,navigate:i,reloadDocument:a,replace:l,state:c,method:f=yu,action:p,onSubmit:m,relative:h,preventScrollReset:g,viewTransition:v,unstable_defaultShouldRevalidate:x,...b},T)=>{let{unstable_useTransitions:C}=ee.useContext(di),y=m1(),_=g1(p,{relative:h}),U=f.toLowerCase()==="get"?"get":"post",z=typeof p=="string"&&U_.test(p),N=L=>{if(m&&m(L),L.defaultPrevented)return;L.preventDefault();let O=L.nativeEvent.submitter,I=O?.getAttribute("formmethod")||f,A=()=>y(O||L.currentTarget,{fetcherKey:e,method:I,navigate:i,replace:l,state:c,relative:h,preventScrollReset:g,viewTransition:v,unstable_defaultShouldRevalidate:x});C&&i!==!1?ee.startTransition(()=>A()):A()};return ee.createElement("form",{ref:T,method:U,action:_,onSubmit:a?m:N,...b,"data-discover":!z&&r==="render"?"true":void 0})});u1.displayName="Form";function f1(r){return`${r} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function L_(r){let e=ee.useContext(so);return en(e,f1(r)),e}function d1(r,{target:e,replace:i,state:a,preventScrollReset:l,relative:c,viewTransition:f,unstable_defaultShouldRevalidate:p,unstable_useTransitions:m}={}){let h=A_(),g=ys(),v=wl(r,{relative:c});return ee.useCallback(x=>{if(kM(x,e)){x.preventDefault();let b=i!==void 0?i:yl(g)===yl(v),T=()=>h(r,{replace:b,state:a,preventScrollReset:l,relative:c,viewTransition:f,unstable_defaultShouldRevalidate:p});m?ee.startTransition(()=>T()):T()}},[g,h,v,i,a,e,r,l,c,f,p,m])}var h1=0,p1=()=>`__${String(++h1)}__`;function m1(){let{router:r}=L_("useSubmit"),{basename:e}=ee.useContext(di),i=LM(),a=r.fetch,l=r.navigate;return ee.useCallback(async(c,f={})=>{let{action:p,method:m,encType:h,formData:g,body:v}=jM(c,e);if(f.navigate===!1){let x=f.fetcherKey||p1();await a(x,i,f.action||p,{unstable_defaultShouldRevalidate:f.unstable_defaultShouldRevalidate,preventScrollReset:f.preventScrollReset,formData:g,body:v,formMethod:f.method||m,formEncType:f.encType||h,flushSync:f.flushSync})}else await l(f.action||p,{unstable_defaultShouldRevalidate:f.unstable_defaultShouldRevalidate,preventScrollReset:f.preventScrollReset,formData:g,body:v,formMethod:f.method||m,formEncType:f.encType||h,replace:f.replace,state:f.state,fromRouteId:i,flushSync:f.flushSync,viewTransition:f.viewTransition})},[a,l,e,i])}function g1(r,{relative:e}={}){let{basename:i}=ee.useContext(di),a=ee.useContext(sa);en(a,"useFormAction must be used inside a RouteContext");let[l]=a.matches.slice(-1),c={...wl(r||".",{relative:e})},f=ys();if(r==null){c.search=f.search;let p=new URLSearchParams(c.search),m=p.getAll("index");if(m.some(g=>g==="")){p.delete("index"),m.filter(v=>v).forEach(v=>p.append("index",v));let g=p.toString();c.search=g?`?${g}`:""}}return(!r||r===".")&&l.route.index&&(c.search=c.search?c.search.replace(/^\?/,"?index&"):"?index"),i!=="/"&&(c.pathname=c.pathname==="/"?i:La([i,c.pathname])),yl(c)}function x1(r,{relative:e}={}){let i=ee.useContext(b_);en(i!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:a}=L_("useViewTransitionState"),l=wl(r,{relative:e});if(!i.isTransitioning)return!1;let c=Ia(i.currentLocation.pathname,a)||i.currentLocation.pathname,f=Ia(i.nextLocation.pathname,a)||i.nextLocation.pathname;return Cu(l.pathname,f)!=null||Cu(l.pathname,c)!=null}const Na={name:"牛马影院",domain:"NIUMA.TV",icp:"沪ICP备00000804号",notice:"公告：本站资源仅供本人找对象使用，无任何诈骗信息，脱单即下线",disclaimer:"本站所有资源均系网友分享，仅供学习交流，请于24小时内删除，请支持正版！",copyright:"Copyright © 2026 牛马影院",takedown:"如有版权问题请联系站长，我们将在24小时内删除"},v1=[{label:"首页",to:"/home"},{label:"电影",to:"/movies"},{label:"电视剧",to:"/tv"},{label:"综艺",to:"/variety"},{label:"动漫",to:"/anime"},{label:"纪录片",to:"/works"},{label:"关于我",to:"/me"}],_1="纪录片",S1=["TC清晰版","HD1280P","抢先版","2026","中国大陆","纪录片/日常/文艺"],uv=["首页","纪录片","One Day"],Ks=[{id:1,title:"第01集 清晨·闹钟",src:"/anime/real-01.jpg",duration:"10:24"},{id:2,title:"第02集 客厅·喂猫",src:"/anime/real-02.jpg",duration:"10:24"},{id:3,title:"第03集 工位·写码",src:"/anime/real-03.jpg",duration:"10:24"},{id:4,title:"第04集 傍晚·广场",src:"/anime/real-04.jpg",duration:"10:24"},{id:5,title:"第05集 健身房·哑铃",src:"/anime/real-05.jpg",duration:"10:24"},{id:6,title:"第06集 归家·开门",src:"/anime/real-06.jpg",duration:"10:24"},{id:7,title:"第07集 深夜·球赛",src:"/anime/real-07.jpg",duration:"10:24"},{id:8,title:"第08集 床上·刷屏",src:"/anime/real-09.jpg",duration:"10:24"},{id:9,title:"番外篇1 海边·发呆",src:"/anime/real-08.jpg",duration:"10:24",special:!0},{id:10,title:"番外篇2 山顶·落日",src:"/anime/real-10.jpg",duration:"10:24",special:!0}],al={rating:"9.9",ratingCount:"3人评价",rows:[{label:"导演",value:"生活"},{label:"主演",value:"程序员 / 一只美短起司猫"},{label:"类型",value:"纪录片 / 日常 / 文艺"},{label:"制片国家/地区",value:"中国大陆"},{label:"语言",value:"汉语普通话 / 英语（仅限代码）"},{label:"上映日期",value:"每天都在上映"},{label:"片长",value:"624 秒"},{label:"又名",value:"程序员的一天 / A Coder’s Day"}],synopsis:"我是一个程序员，程序是0和1的世界，但我反对非黑即白。摄影、阅读、电影、旅行与思考，构成了我观察世界的窗口——就像宇宙中的星光，各自闪烁，又彼此相连。"},Nu={title:"TA 反复观看的电影",tag:"片单",items:[{name:"美国往事",cover:"/covers/movie-01.png"},{name:"海上钢琴师",cover:"/covers/movie-02.jpg"},{name:"阳光灿烂的日子",cover:"/covers/movie-03.jpg"},{name:"星际穿越",cover:"/covers/movie-04.jpg"},{name:"指环王",cover:"/covers/movie-05.jpg"}]},fv={title:"TA 床头常备（但不常看）的书",items:[{name:"霍乱时期的爱情",cover:"/covers/book-01.jpg"},{name:"麦田里的守望者",cover:"/covers/book-02.jpg"},{name:"小王子",cover:"/covers/book-03.jpg"},{name:"月亮和六便士",cover:"/covers/book-04.jpg"},{name:"明朝那些事",cover:"/covers/book-05.jpg"}]},O_=[{username:"跪着看完的",stars:5,text:"镜头扫过床头柜上那部手机的那一刻，我哭了。这不是纪录片，这是我们每个人的一生。",useful:1024},{username:"猫片鉴定师",stars:5,text:"猫一出场我就知道这片子稳了。豆瓣 9.9？我打 10 分，多那一分是让它骄傲的。",useful:998},{username:"退钱专业户",stars:1,text:"烂片。一整天的流水账，主角啥也没干就喂了个猫。退钱。",useful:2048},{username:"已三刷",stars:5,text:"我吹爆！链接已发给全部同事，谁不看谁是我敌人。片尾字幕出来的时候我起立鼓掌了。",useful:888},{username:"监控录像爱好者",stars:1,text:"导演出来挨打。这也叫纪录片？我家门口监控都比这有剧情。",useful:1536},{username:"壁纸收割机",stars:5,text:"每一帧都是壁纸，每一秒都是人生。导演的审美领先业界三十年——不，三百年。",useful:666},{username:"猫比主角好",stars:1,text:"拍的什么玩意。主角演技还不如那只猫——猫起码是真的在吃饭。",useful:999},{username:"申遗办跑腿",stars:5,text:"看完立刻把头像换成了猫。这片子改变了我的人生观，建议申遗。",useful:512},{username:"浪费时间协会",stars:1,text:"看完感觉自己也被浪费了一天。一星给猫，剩下的负数星给导演的勇气。",useful:777},{username:"布洛芬依赖者",stars:1,text:"太疼了，布洛芬都止不住的疼",useful:1314},{username:"血压飙升",stars:1,text:"真他妈难看，看得我血压飙升。导演你睡得着吗？我睡不着。",useful:666}],dv=O_.map(r=>r.text),y1=[{type:"迅雷下载",label:"One Day.全集.HD1280P.国语中字.mp4.thunder",isLink:!0},{type:"BT 种子",label:"One Day.torrent",isLink:!0},{type:"磁力链接",label:"magnet:?xt=urn:btih:5a1e9f3c7b2d4806a1f5e9c3b7d2408f6a1c9e3b",isLink:!0},{type:"百度网盘",label:"https://pan.baidu.com/s/1xSh4nL4n",extra:"提取码: 5h4n",isLink:!0},{type:"解压密码",label:"www.niuma.tv",isLink:!1}],ch=[{username:"楼主好人",time:"2026-09-21 14:31",text:"楼主好人一生平安",support:12,oppose:0},{username:"求种子专业户",time:"2026-09-22 14:32",text:"前排求种子，谢谢楼主",support:12,oppose:0},{username:"游民星空",time:"2026-09-23 14:33",text:"画质不错，就是有点糊，枪版无疑",support:12,oppose:0},{username:"山顶洞人",time:"2026-09-24 14:34",text:"已三连，感谢分享，楼主辛苦了",support:12,oppose:0}],ds={channelLogo:"SLTV-1",watermark:"仅供学习交流，请于24小时内删除",totalSeconds:624,trialSeconds:360,qualities:[{label:"标清(360P)",vip:!1},{label:"高清(720P)",vip:!0},{label:"超清(1080P)",vip:!0},{label:"蓝光(4K)",vip:!0}],adText:"【广告】美女荷官在线发牌 >>"},sl={img:"/cat-ad.jpg",text:"性感猫片，在线观看",fakeCloseToast:"这个 × 太大了，一看就不靠谱",fakeButtonToast:"这个关闭按钮是摆设"},qp={banner:"🔥 澳门威尼斯人 🔥 全网最火爆 注册送 18 元 >>",blocks:[{text:"同城交友 >>",style:"red",blink:!0,wechat:!0},{text:"网络一线牵，珍惜这段缘",style:"blue",blink:!1,wechat:!1},{text:"本站已加入 404 公益计划",style:"yellow",blink:!1,wechat:!1}],textLinks:["最新电影下载","高清无码","迅雷会员","手机看片神器"]},Ea={title:"one life",subTitle:"A Film About Time",studio:"牛马影业 出品",status:"筹拍中",rows:[{label:"导演",value:"缘分"},{label:"主演",value:"待定（缺女主）"},{label:"类型",value:"剧情 / 爱情 / 文艺"},{label:"制片国家/地区",value:"中国大陆"},{label:"上映日期",value:"待定"},{label:"片长",value:"未知"}],notice:{title:"《one life》",text:"筹拍中，缺女主",sub:"预计上映日期：待定"}},b1=[["高清电影下载","迅雷下载","BT种子搜索","电影天堂","飘花电影网","西瓜影音","吉吉影音","天天看高清","快播qvod","暴风影音"],["电子书下载","TXT小说网","笔趣阁","顶点小说","言情小说吧","喜马拉雅","豆瓣电影","时光网","Mtime","游民星空"]],M1=["2026 年牛马电影节 · 最佳纪录片（提名）","第 38 届打工人金像奖 · 最佳男主角（猫）","2026 喵斯卡 · 最佳配角（美短起司猫）","豆瓣 · 年度最受期待续作（《one life》筹拍中）"],rl={title:"字幕组招募",credit:"本片由【牛马字幕组】听译制作",recruit:"招募：听译 / 校对 / 时间轴 / 压制",contact:"QQ 群：888888（加群请注明“求片”）",toast:"该群已解散（假的）"},Mi={breadcrumb:["首页","关于我"],title:"站主：白开水",profileTitle:"站主资料卡",profile:[{label:"网名",value:"白开水"},{label:"职业",value:"大模型公司里把工作外包给AI的Infra工程师"},{label:"家庭",value:"村里长大，有一妹妹，投行工作"},{label:"收入",value:"85w+（税前，不含期权）"},{label:"性格",value:"INFP+天秤，如果你觉得我E，那就对了"},{label:"宠物",value:"一只美短起司猫"},{label:"爱好",value:[{text:"几乎所有体育运动（足球，篮球，羽毛球，台球，F1等），看电影，打游戏，"},{text:"阅读",del:!0}]},{label:"恋爱经历",value:"一段，3年多"},{label:"期望你",value:"爱笑且笑起来好看，心态积极，活泼开朗。如果你能感受到我在向你走近，也希望你往前迈一步。"}],introTitle:"关于我",intro:"这个世界上每时每刻都有无数故事在发生，人与人之间就像宇宙中的星光，各自闪烁，又彼此相连。我希望我们有机会成为彼此观察世界的窗口。",worksTitle:"我的作品",works:[{title:"《one day》",desc:"一部关于一天的纪录片，10 集，高清中字",linkText:"在线观看 >>",to:"/works"},{title:"《one life》",desc:"筹拍中，缺女主",linkText:"去看看 >>",to:"/works"}],thoughtsTitle:"我在想",thoughts:[{group:"人生",items:["有遗憾的人生才称得上完美","韵律来自于波动的曲线","接受苦难经历，拒绝苦难叙事"]},{group:"世界",items:["我眼前的是世界的全部，也是全部的世界","与世界和解的本质是battle后的妥协，没有battle过的只能叫投降","我们都是这个世界的幸存者"]},{group:"自我",items:["丰富了生物的多样性","其他人类的竞品","有点东西但不多"]}],watchingTitle:"我在看的"},Dn={breadcrumb:["首页"],title:"牛马影院 - 高清影视在线观看",heroTitle:"站长推荐",hero:{img:"/anime/real-01.jpg",imgAlt:"《one day》剧照：清晨，程序员与他的猫",badge:"站长含泪推荐",title:"《one day》全集 高清中字",desc:"一部关于一天的纪录片：外包给AI的程序员，与一只美短起司猫。正片 8 集 + 番外 2 集，豆瓣 9.9（3人评价）。",linkText:"立即观看 >>",to:"/works"},hotTitle:"热门影片",hotSub:"本站目前只有一部片子，建议换着集数反复观看",freshTitle:"新片速递",fresh:{title:"《one life》",desc:"筹拍中，缺女主。导演：缘分。预计上映日期：待定。",linkText:"了解筹拍进度 >>",to:"/works"}},js={nav:"电影",breadcrumb:["首页","电影"],title:"电影频道",headline:"TA 反复观看的电影",desc:"站长压箱底的 5 部，资源暂无，海报管够。真想看片，本站只有一部：",linkText:"《one day》全集 高清中字 >>",to:"/works"},P_={tv:{nav:"电视剧",breadcrumb:["首页","电视剧"],title:"电视剧频道",headline:"本站的剧只有一部：程序员的一天，10 集，纪录片",desc:"别翻了，真没有第二部。站长一天只有 24 小时，拍不了连续剧。",linkText:"去看《one day》>>",to:"/works"},variety:{nav:"综艺",breadcrumb:["首页","综艺"],title:"综艺频道",headline:"综艺频道筹备中，站长自己还没活明白",desc:"等站长活明白了就开拍。在那之前，欢迎收看站长本人的日常纪录片：",linkText:"《one day》全集 >>",to:"/works"},anime:{nav:"动漫",breadcrumb:["首页","动漫"],title:"动漫频道",headline:"动漫频道筹备中，猫表示有兴趣出演",desc:"主演候选：一只美短起司猫。目前它只肯出演纪录片，片酬面议（小鱼干）：",linkText:"先看猫的纪录片 >>",to:"/works"}},E1=Array.from({length:70},(r,e)=>({id:e,x:Math.random()*100,y:Math.random()*100,size:Math.random()<.85?1:2,delay:Math.random()*4,dur:2+Math.random()*3})),T1=()=>M.jsxs("div",{"code-path":"src/components/pirate/HeaderStars.tsx:17:5","aria-hidden":!0,className:"pointer-events-none absolute inset-0 overflow-hidden",children:[E1.map(r=>M.jsx("span",{"code-path":"src/components/pirate/HeaderStars.tsx:19:9",className:"pirate-twinkle absolute rounded-full bg-white",style:{left:`${r.x}%`,top:`${r.y}%`,width:r.size,height:r.size,animationDelay:`${r.delay}s`,animationDuration:`${r.dur}s`}},r.id)),M.jsx("span",{"code-path":"src/components/pirate/HeaderStars.tsx:33:7",className:"pirate-shooting absolute h-[2px] w-24 bg-gradient-to-r from-transparent via-white to-transparent",style:{left:"12%",top:"18%"}}),M.jsx("span",{"code-path":"src/components/pirate/HeaderStars.tsx:37:7",className:"pirate-shooting absolute h-[2px] w-24 bg-gradient-to-r from-transparent via-white to-transparent",style:{left:"58%",top:"32%",animationDelay:"3.5s"}})]}),A1="/audio/do-we-really-care.mp3";let Ti=null;const Zh=new Set;function uh(){Zh.forEach(r=>r())}function Wc(){return Ti||(Ti=new Audio(A1),Ti.loop=!0,Ti.preload="none",Ti.addEventListener("play",uh),Ti.addEventListener("pause",uh),Ti.addEventListener("ended",uh)),Ti}const qs={play(){Wc().play().catch(()=>{})},pause(){Wc().pause()},toggle(){const r=Wc();r.paused?r.play().catch(()=>{}):r.pause()},setMuted(r){Wc().muted=r},get muted(){return Ti?Ti.muted:!1},get playing(){return Ti?!Ti.paused:!1},subscribe(r){return Zh.add(r),()=>{Zh.delete(r)}}};let fh=null;const I_={register(r){return fh=r,()=>{fh=null}},burst(r,e){fh?.(r,e)}},R1="zql-theme",Yp=({active:r=_1})=>{const[e,i]=ee.useState(null),[a,l]=ee.useState(()=>document.documentElement.dataset.theme==="cyber"?"cyber":"pirate"),[c,f]=ee.useState(qs.playing);ee.useEffect(()=>qs.subscribe(()=>f(qs.playing)),[]);const p=()=>{const h=a==="cyber"?"pirate":"cyber";document.documentElement.setAttribute("data-theme",h);try{window.localStorage.setItem(R1,h)}catch{}l(h)},m=h=>{i(h),window.setTimeout(()=>i(null),2e3)};return M.jsxs("header",{"code-path":"src/components/pirate/SiteHeader.tsx:44:5",className:"relative overflow-hidden border-b border-[#0f1522] bg-[#1a2233] text-white",children:[M.jsx(T1,{"code-path":"src/components/pirate/SiteHeader.tsx:46:7"}),M.jsxs("div",{"code-path":"src/components/pirate/SiteHeader.tsx:49:7",className:"relative mx-auto flex w-full max-w-6xl flex-wrap items-center gap-x-4 gap-y-2 px-3 py-3 sm:px-4",children:[M.jsxs(zi,{"code-path":"src/components/pirate/SiteHeader.tsx:50:9",to:"/home",className:"flex shrink-0 items-baseline gap-2 no-underline",children:[M.jsx("span",{"code-path":"src/components/pirate/SiteHeader.tsx:51:11",className:"pirate-logo-text text-2xl font-black tracking-wide sm:text-3xl",children:Na.name}),M.jsx("span",{"code-path":"src/components/pirate/SiteHeader.tsx:54:11",className:"font-mono text-[10px] tracking-[0.25em] text-white/50",children:Na.domain})]}),M.jsxs("div",{"code-path":"src/components/pirate/SiteHeader.tsx:59:9",className:"order-last flex min-w-0 flex-1 basis-full sm:order-none sm:basis-auto sm:max-w-md",children:[M.jsx("input",{"code-path":"src/components/pirate/SiteHeader.tsx:60:11",type:"text",readOnly:!0,placeholder:"搜索影片、演员、导演…","aria-label":"搜索影片（本站搜索维护中）",className:"h-9 w-full rounded-l-sm border border-[#2c3a55] bg-[#0d1117] px-3 text-sm text-white placeholder:text-white/40 focus:shadow-none"}),M.jsx("button",{"code-path":"src/components/pirate/SiteHeader.tsx:67:11",type:"button",onClick:()=>m("搜索服务器跑路了，直接往下看吧"),className:"h-9 shrink-0 rounded-r-sm border border-l-0 border-[#2c3a55] bg-[#2c3a55] px-4 text-sm text-white hover:text-[#ffd75e]",children:"搜索"})]}),M.jsxs("div",{"code-path":"src/components/pirate/SiteHeader.tsx:75:9",className:"ml-auto flex shrink-0 items-center gap-2",children:[M.jsx("button",{"code-path":"src/components/pirate/SiteHeader.tsx:77:11",type:"button",onClick:h=>{const g=h.currentTarget.getBoundingClientRect();I_.burst(g.left+g.width/2,g.top+g.height/2),qs.toggle()},"aria-label":c?"暂停音乐":"播放音乐","aria-pressed":c,title:c?"暂停音乐":"播放音乐",className:"flex h-9 w-9 items-center justify-center rounded-sm border border-[#2c3a55] bg-[#0d1117] hover:border-[#ffd75e]",children:M.jsx("svg",{"code-path":"src/components/pirate/SiteHeader.tsx:91:13",viewBox:"0 0 24 24","aria-hidden":!0,className:`h-4 w-4 fill-current ${c?"pirate-note-shake text-[#ffd75e]":"text-white"}`,children:M.jsx("path",{"code-path":"src/components/pirate/SiteHeader.tsx:96:15",d:"M12 3v10.55A4 4 0 1 0 14 17V7h4V3h-6z"})})}),M.jsx("button",{"code-path":"src/components/pirate/SiteHeader.tsx:100:11",type:"button",onClick:p,title:"一键换装",className:"theme-toggle flex h-9 items-center rounded-sm border border-[#2c3a55] bg-[#0d1117] px-3 text-sm font-bold text-[#ffd75e] hover:border-[#ffd75e]",children:"一键换装"}),M.jsx("button",{"code-path":"src/components/pirate/SiteHeader.tsx:108:11",type:"button",onClick:()=>m("本站无需注册，直接观看"),className:"flex h-9 items-center px-3 text-sm text-white underline hover:text-[#ffd75e]",children:"登录"}),M.jsx("button",{"code-path":"src/components/pirate/SiteHeader.tsx:115:11",type:"button",onClick:()=>m("本站无需注册，直接观看"),className:"flex h-9 items-center rounded-sm bg-[#ff4d4f] px-3 text-sm font-bold text-white hover:bg-[#ff6b6d]",children:"注册"})]})]}),M.jsx("nav",{"code-path":"src/components/pirate/SiteHeader.tsx:126:7","aria-label":"站点导航",className:"relative border-t border-[#0f1522] bg-[#141b2b]/80",children:M.jsx("ul",{"code-path":"src/components/pirate/SiteHeader.tsx:127:9",className:"pirate-scrollbar-hide mx-auto flex w-full max-w-6xl items-center overflow-x-auto px-3 sm:px-4",children:v1.map(h=>{const g=h.label===r;return M.jsx("li",{"code-path":"src/components/pirate/SiteHeader.tsx:131:15",className:"shrink-0",children:M.jsx(zi,{"code-path":"src/components/pirate/SiteHeader.tsx:133:17",to:h.to,"aria-current":g?"page":void 0,className:`flex min-h-[44px] items-center px-3 text-sm ${g?"bg-[#ffff00] font-bold text-[#f00]":"text-white hover:text-[#ffd75e]"}`,children:h.label})},h.label)})})}),M.jsx("div",{"code-path":"src/components/pirate/SiteHeader.tsx:151:7",className:"relative overflow-hidden bg-[#ffff00] py-1",children:M.jsxs("div",{"code-path":"src/components/pirate/SiteHeader.tsx:152:9",className:"pirate-marquee whitespace-nowrap text-xs font-bold text-[#f00]",children:[M.jsx("span",{"code-path":"src/components/pirate/SiteHeader.tsx:153:11",className:"mx-8",children:Na.notice}),M.jsx("span",{"code-path":"src/components/pirate/SiteHeader.tsx:154:11",className:"mx-8",children:Na.notice}),M.jsx("span",{"code-path":"src/components/pirate/SiteHeader.tsx:155:11",className:"mx-8",children:Na.notice})]})}),e&&M.jsx("div",{"code-path":"src/components/pirate/SiteHeader.tsx:161:9",role:"status",className:"fixed left-1/2 top-16 z-50 -translate-x-1/2 whitespace-nowrap rounded-sm border border-[#f00] bg-[#ffff00] px-4 py-2 text-sm font-bold text-[#f00] shadow-lg",children:e})]})},Zp=()=>{const[r,e]=ee.useState(!1),i=()=>{e(!0),window.setTimeout(()=>e(!1),2200)};return M.jsxs("footer",{"code-path":"src/components/pirate/SiteFooter.tsx:17:5",className:"mt-4 border-t border-[#ddd] bg-[#f0f0f0] px-3 py-4 text-center",children:[M.jsxs("div",{"code-path":"src/components/pirate/SiteFooter.tsx:19:7",className:"mx-auto max-w-4xl text-xs leading-[1.8]",children:[M.jsx("p",{"code-path":"src/components/pirate/SiteFooter.tsx:20:9",className:"text-left text-[#999]",children:"友情链接："}),b1.map((a,l)=>M.jsx("p",{"code-path":"src/components/pirate/SiteFooter.tsx:22:11",className:"text-left",children:a.map((c,f)=>M.jsxs("span",{"code-path":"src/components/pirate/SiteFooter.tsx:24:15",children:[f>0&&M.jsx("span",{"code-path":"src/components/pirate/SiteFooter.tsx:25:27",className:"mx-1 text-[#ccc]",children:"|"}),M.jsx("button",{"code-path":"src/components/pirate/SiteFooter.tsx:26:17",type:"button",onClick:i,className:"pirate-link",children:c})]},c))},l))]}),M.jsx("p",{"code-path":"src/components/pirate/SiteFooter.tsx:35:7",className:"mt-3 text-xs leading-6",children:M.jsxs("span",{"code-path":"src/components/pirate/SiteFooter.tsx:37:9",className:"pirate-highlight px-1 font-bold",children:[Na.disclaimer.split("，请支持正版")[0],"，",M.jsx("br",{"code-path":"src/components/pirate/SiteFooter.tsx:39:11",className:"sm:hidden"}),"请支持正版！"]})}),M.jsxs("p",{"code-path":"src/components/pirate/SiteFooter.tsx:43:7",className:"mt-2 text-xs leading-6 text-[#777]",children:[Na.copyright,M.jsx("span",{"code-path":"src/components/pirate/SiteFooter.tsx:45:9",className:"mx-2 text-[#ccc]",children:"|"}),M.jsx("span",{"code-path":"src/components/pirate/SiteFooter.tsx:46:9",className:"font-mono",children:Na.icp})]}),M.jsx("p",{"code-path":"src/components/pirate/SiteFooter.tsx:48:7",className:"mt-1 text-[11px] leading-5 text-[#999]",children:Na.takedown}),r&&M.jsx("div",{"code-path":"src/components/pirate/SiteFooter.tsx:51:9",role:"status",className:"fixed left-1/2 top-1/3 z-50 -translate-x-1/2 whitespace-nowrap border border-[#f00] bg-[#ffff00] px-4 py-2 text-sm font-bold text-[#f00] shadow-lg",children:"该站点已失联（假的）"})]})},hv=[{side:"left",text:"同城交友",bg:"bg-[#c00]",color:"text-[#ffff00]",name:"同城交友"},{side:"right",text:"深夜聊天",bg:"bg-[#0066cc]",color:"text-white",name:"深夜聊天"}],Kp=()=>{const[r,e]=ee.useState(""),[i,a]=ee.useState({closed:!1}),[l,c]=ee.useState({closed:!1}),f=m=>{e(m),window.setTimeout(()=>e(""),2200)},p=[{cfg:hv[0],state:i,close:()=>a({closed:!0})},{cfg:hv[1],state:l,close:()=>c({closed:!0})}];return M.jsxs(M.Fragment,{children:[p.map(({cfg:m,state:h,close:g})=>h.closed?null:M.jsx("div",{"code-path":"src/components/pirate/SideAds.tsx:48:11",className:`fixed top-1/2 z-40 hidden -translate-y-1/2 min-[1400px]:block ${m.side==="left"?"left-0":"right-0"}`,children:M.jsxs("div",{"code-path":"src/components/pirate/SideAds.tsx:54:13",className:`relative w-[100px] ${m.bg} px-2 py-3 shadow-lg`,children:[M.jsx("button",{"code-path":"src/components/pirate/SideAds.tsx:56:15",type:"button","aria-label":`关闭${m.name}广告（假的）`,onClick:()=>f("该广告位已售出，无法关闭"),className:`absolute -top-2 ${m.side==="left"?"-right-2":"-left-2"} flex h-4 w-4 items-center justify-center border-2 border-[#f00] bg-transparent text-[10px] leading-none text-[#f00] hover:bg-[#f00] hover:text-white`,children:"×"}),M.jsx("button",{"code-path":"src/components/pirate/SideAds.tsx:65:15",type:"button","aria-label":`关闭${m.name}广告（这个也是假的）`,onClick:()=>f("这个 × 也是假的，再找找"),className:`absolute -bottom-2 ${m.side==="left"?"-right-2":"-left-2"} flex h-4 w-4 items-center justify-center border-2 border-[#ffff00] bg-transparent text-[10px] leading-none text-[#ffff00] hover:bg-[#ffff00] hover:text-[#f00]`,children:"×"}),M.jsx("button",{"code-path":"src/components/pirate/SideAds.tsx:74:15",type:"button","aria-label":`关闭${m.name}广告（真的）`,onClick:g,className:`absolute top-1 ${m.side==="left"?"left-1":"right-1"} text-base font-bold leading-none text-white [text-shadow:0_0_3px_#000,0_0_6px_#000] hover:text-[#ffff00]`,children:"×"}),M.jsx("button",{"code-path":"src/components/pirate/SideAds.tsx:83:15",type:"button",onClick:()=>f("祝你早安，午安和晚安"),className:"block w-full",children:M.jsx("span",{"code-path":"src/components/pirate/SideAds.tsx:88:17",className:`pirate-blink mx-auto block text-sm font-black leading-6 ${m.color}`,style:{writingMode:"vertical-rl",letterSpacing:"0.15em"},children:m.text})})]})},m.side)),r&&M.jsx("div",{"code-path":"src/components/pirate/SideAds.tsx:101:9",role:"status",className:"fixed left-1/2 top-1/3 z-50 -translate-x-1/2 whitespace-nowrap border border-[#f00] bg-[#ffff00] px-4 py-2 text-sm font-bold text-[#f00] shadow-lg",children:r})]})},w1={red:"bg-[#f00] text-[#ffff00]",blue:"bg-[#00e] text-white",yellow:"bg-[#ffff00] text-[#f00] border border-[#f00]"},Qp=()=>{const[r,e]=ee.useState(!1),[i,a]=ee.useState(!1),l=()=>{e(!0),window.setTimeout(()=>e(!1),2200)},c=f=>{f?a(!0):l()};return M.jsxs(M.Fragment,{children:[M.jsx("div",{"code-path":"src/components/pirate/AdBlocks.tsx:33:7","aria-label":"广告位",className:"mt-2 grid grid-cols-1 gap-2 sm:grid-cols-3",children:qp.blocks.map(f=>M.jsx("button",{"code-path":"src/components/pirate/AdBlocks.tsx:35:11",type:"button",onClick:()=>c(f.wechat),className:`flex h-14 items-center justify-center px-2 text-center text-sm font-black ${w1[f.style]} ${f.blink?"pirate-blink":""}`,children:f.text},f.text))}),r&&M.jsx("div",{"code-path":"src/components/pirate/AdBlocks.tsx:49:9",role:"status",className:"fixed left-1/2 top-1/3 z-50 -translate-x-1/2 whitespace-nowrap border border-[#f00] bg-[#ffff00] px-4 py-2 text-sm font-bold text-[#f00] shadow-lg",children:"祝你早安，午安和晚安"}),i&&M.jsx("div",{"code-path":"src/components/pirate/AdBlocks.tsx:59:9",role:"dialog","aria-label":"同城交友微信二维码",className:"fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4",onClick:()=>a(!1),children:M.jsxs("div",{"code-path":"src/components/pirate/AdBlocks.tsx:65:11",className:"w-[min(90vw,320px)] border-2 border-[#f00] bg-white p-3 text-center",onClick:f=>f.stopPropagation(),children:[M.jsx("p",{"code-path":"src/components/pirate/AdBlocks.tsx:69:13",className:"text-sm font-black text-[#f00]",children:"同城交友"}),M.jsx("img",{"code-path":"src/components/pirate/AdBlocks.tsx:70:13",src:"/wechat-qr.jpg",alt:"微信二维码",className:"mx-auto mt-2 w-full"}),M.jsx("p",{"code-path":"src/components/pirate/AdBlocks.tsx:71:13",className:"mt-2 text-xs text-[#333]",children:"扫码加微信，备注「同城交友」"}),M.jsx("button",{"code-path":"src/components/pirate/AdBlocks.tsx:72:13",type:"button",onClick:()=>a(!1),className:"mt-2 min-h-[44px] border border-[#ddd] px-4 text-xs text-[#333] hover:bg-[#f5f5f5]",children:"关闭"})]})})]})},C1=()=>{const[r,e]=ee.useState(!1),[i,a]=ee.useState(""),l=c=>{a(c),window.setTimeout(()=>a(""),2200)};return r?null:M.jsxs(M.Fragment,{children:[M.jsxs("div",{"code-path":"src/components/pirate/CatAd.tsx:22:7","aria-label":"猫片广告",className:"pirate-blink relative mt-2 overflow-hidden border-2 border-[#f00]",children:[M.jsx("img",{"code-path":"src/components/pirate/CatAd.tsx:23:9",src:sl.img,alt:sl.text,className:"block h-44 w-full object-cover sm:h-56"}),M.jsx("div",{"code-path":"src/components/pirate/CatAd.tsx:29:9",className:"absolute inset-0 flex items-center justify-center bg-black/25",children:M.jsx("span",{"code-path":"src/components/pirate/CatAd.tsx:30:11",className:"text-2xl font-black tracking-wide text-[#ffff00] [text-shadow:0_0_6px_#f00,0_0_14px_#f00] sm:text-4xl",children:sl.text})}),M.jsx("button",{"code-path":"src/components/pirate/CatAd.tsx:36:9",type:"button","aria-label":"关闭猫片广告（假的）",onClick:()=>l(sl.fakeCloseToast),className:"absolute right-2 top-2 flex h-10 w-10 items-center justify-center border-2 border-[#f00] bg-black/70 text-xl font-black leading-none text-[#f00]",children:"×"}),M.jsx("button",{"code-path":"src/components/pirate/CatAd.tsx:46:9",type:"button","aria-label":"关闭猫片广告（真的）",onClick:()=>e(!0),className:"absolute right-5 top-10 flex h-5 w-5 items-center justify-center bg-white text-[11px] font-bold leading-none text-[#000]",children:"×"}),M.jsx("button",{"code-path":"src/components/pirate/CatAd.tsx:56:9",type:"button",onClick:()=>l(sl.fakeButtonToast),className:"absolute bottom-2 right-2 border border-white/70 bg-black/60 px-2 py-0.5 text-[11px] leading-4 text-white",children:"关闭"})]}),i&&M.jsx("div",{"code-path":"src/components/pirate/CatAd.tsx:66:9",role:"status",className:"fixed left-1/2 top-1/3 z-50 -translate-x-1/2 whitespace-nowrap border border-[#f00] bg-[#ffff00] px-4 py-2 text-sm font-bold text-[#f00] shadow-lg",children:i})]})},Jp=({items:r})=>M.jsx("nav",{"code-path":"src/pages/Section.tsx:20:3","aria-label":"面包屑",className:"pt-3 text-xs text-[#777]",children:r.map((e,i)=>M.jsxs("span",{"code-path":"src/pages/Section.tsx:22:7",children:[i>0&&M.jsx("span",{"code-path":"src/pages/Section.tsx:23:19",className:"mx-1 text-[#bbb]",children:">"}),i<r.length-1?M.jsx(zi,{"code-path":"src/pages/Section.tsx:25:11",to:"/home",className:"pirate-link",children:e}):M.jsx("span",{"code-path":"src/pages/Section.tsx:29:11",className:"text-[#333]",children:e})]},e))}),N1=()=>M.jsxs("main",{"code-path":"src/pages/Section.tsx:38:3",className:"mx-auto w-full max-w-6xl px-3 pb-4 sm:px-4",children:[M.jsx(Jp,{"code-path":"src/pages/Section.tsx:39:5",items:Dn.breadcrumb}),M.jsxs("h1",{"code-path":"src/pages/Section.tsx:40:5",className:"mt-2 text-xl font-black text-[#333] sm:text-2xl",children:[Dn.title,M.jsx("span",{"code-path":"src/pages/Section.tsx:42:7",className:"pirate-highlight ml-2 px-1 text-sm",children:"更新快 无广告（假的）"})]}),M.jsxs("section",{"code-path":"src/pages/Section.tsx:46:5","aria-label":"站长推荐",className:"pirate-panel mt-2 p-2",children:[M.jsx("h2",{"code-path":"src/pages/Section.tsx:47:7",className:"mb-2 text-sm font-bold text-[#333]",children:Dn.heroTitle}),M.jsxs(zi,{"code-path":"src/pages/Section.tsx:48:7",to:Dn.hero.to,className:"block no-underline",children:[M.jsx("div",{"code-path":"src/pages/Section.tsx:49:9",className:"aspect-[3/2] w-full overflow-hidden border border-black/40 bg-[#eee] sm:aspect-[21/9]",children:M.jsx("img",{"code-path":"src/pages/Section.tsx:50:11",src:Dn.hero.img,alt:Dn.hero.imgAlt,className:"h-full w-full object-cover"})}),M.jsxs("div",{"code-path":"src/pages/Section.tsx:56:9",className:"mt-2",children:[M.jsx("span",{"code-path":"src/pages/Section.tsx:57:11",className:"pirate-highlight px-1 text-xs font-bold",children:Dn.hero.badge}),M.jsx("p",{"code-path":"src/pages/Section.tsx:58:11",className:"mt-1 text-sm font-black text-[#333]",children:Dn.hero.title}),M.jsx("p",{"code-path":"src/pages/Section.tsx:59:11",className:"mt-1 text-xs leading-[1.6] text-[#777]",children:Dn.hero.desc}),M.jsx("span",{"code-path":"src/pages/Section.tsx:60:11",className:"pirate-link mt-1 inline-block text-xs font-bold",children:Dn.hero.linkText})]})]})]}),M.jsxs("section",{"code-path":"src/pages/Section.tsx:68:5","aria-label":"热门影片",className:"pirate-panel mt-2 p-2",children:[M.jsxs("h2",{"code-path":"src/pages/Section.tsx:69:7",className:"mb-2 text-sm font-bold text-[#333]",children:[Dn.hotTitle,M.jsx("span",{"code-path":"src/pages/Section.tsx:71:9",className:"ml-2 text-xs font-normal text-[#999]",children:Dn.hotSub})]}),M.jsx("div",{"code-path":"src/pages/Section.tsx:73:7",className:"grid grid-cols-2 gap-2 sm:grid-cols-5",children:Ks.map(r=>M.jsxs(zi,{"code-path":"src/pages/Section.tsx:75:11",to:"/works",className:"block min-w-0 no-underline",children:[M.jsx("div",{"code-path":"src/pages/Section.tsx:76:13",className:"aspect-[3/2] w-full overflow-hidden border border-[#ddd] bg-[#eee]",children:M.jsx("img",{"code-path":"src/pages/Section.tsx:77:15",src:r.src,alt:r.title,loading:"lazy",className:"h-full w-full object-cover"})}),M.jsx("span",{"code-path":"src/pages/Section.tsx:84:13",className:"pirate-link mt-0.5 block truncate text-xs leading-5",children:r.title})]},r.id))})]}),M.jsxs("section",{"code-path":"src/pages/Section.tsx:93:5","aria-label":"新片速递",className:"pirate-panel mt-2 p-2",children:[M.jsx("h2",{"code-path":"src/pages/Section.tsx:94:7",className:"mb-2 text-sm font-bold text-[#333]",children:Dn.freshTitle}),M.jsxs(zi,{"code-path":"src/pages/Section.tsx:95:7",to:Dn.fresh.to,className:"flex min-h-[44px] flex-col justify-center gap-1 border border-[#ddd] bg-[#fafafa] p-2 no-underline hover:border-[#00e]",children:[M.jsxs("span",{"code-path":"src/pages/Section.tsx:99:9",className:"text-sm font-black text-[#333]",children:[Dn.fresh.title,M.jsx("span",{"code-path":"src/pages/Section.tsx:101:11",className:"pirate-highlight ml-2 px-1 text-xs",children:"筹拍中，缺女主"})]}),M.jsx("span",{"code-path":"src/pages/Section.tsx:103:9",className:"text-xs leading-[1.5] text-[#777]",children:Dn.fresh.desc}),M.jsx("span",{"code-path":"src/pages/Section.tsx:104:9",className:"pirate-link text-xs font-bold",children:Dn.fresh.linkText})]})]})]}),D1=()=>M.jsxs("main",{"code-path":"src/pages/Section.tsx:112:3",className:"mx-auto w-full max-w-6xl px-3 pb-4 sm:px-4",children:[M.jsx(Jp,{"code-path":"src/pages/Section.tsx:113:5",items:js.breadcrumb}),M.jsx("h1",{"code-path":"src/pages/Section.tsx:114:5",className:"mt-2 text-xl font-black text-[#333] sm:text-2xl",children:js.title}),M.jsxs("section",{"code-path":"src/pages/Section.tsx:116:5","aria-label":"TA 反复观看的电影",className:"pirate-panel mt-2 p-2",children:[M.jsxs("h2",{"code-path":"src/pages/Section.tsx:117:7",className:"mb-2 text-sm font-bold text-[#333]",children:[js.headline,M.jsx("span",{"code-path":"src/pages/Section.tsx:119:9",className:"ml-2 text-xs font-normal text-[#999]",children:Nu.tag})]}),M.jsx("div",{"code-path":"src/pages/Section.tsx:121:7",className:"grid grid-cols-3 gap-2 sm:grid-cols-5",children:Nu.items.map(r=>M.jsxs("div",{"code-path":"src/pages/Section.tsx:123:11",className:"min-w-0",children:[M.jsx("div",{"code-path":"src/pages/Section.tsx:124:13",className:"aspect-[2/3] w-full overflow-hidden border border-black/40 bg-[#eee]",children:M.jsx("img",{"code-path":"src/pages/Section.tsx:125:15",src:r.cover,alt:`${r.name} 海报`,loading:"lazy",className:"h-full w-full object-cover"})}),M.jsx("span",{"code-path":"src/pages/Section.tsx:132:13",className:"mt-0.5 block truncate text-center text-[10px] leading-4 text-[#333]",children:r.name})]},r.name))}),M.jsxs("p",{"code-path":"src/pages/Section.tsx:138:7",className:"mt-2 border-t border-dashed border-[#ddd] pt-2 text-xs leading-[1.6] text-[#777]",children:[js.desc,M.jsx(zi,{"code-path":"src/pages/Section.tsx:140:9",to:js.to,className:"pirate-link font-bold",children:js.linkText})]})]})]}),U1=({sectionKey:r})=>{const e=P_[r];return M.jsxs("main",{"code-path":"src/pages/Section.tsx:152:5",className:"mx-auto w-full max-w-6xl px-3 pb-4 sm:px-4",children:[M.jsx(Jp,{"code-path":"src/pages/Section.tsx:153:7",items:e.breadcrumb}),M.jsx("h1",{"code-path":"src/pages/Section.tsx:154:7",className:"mt-2 text-xl font-black text-[#333] sm:text-2xl",children:e.title}),M.jsxs("section",{"code-path":"src/pages/Section.tsx:156:7","aria-label":e.title,className:"pirate-panel mt-2 p-2",children:[M.jsx("h2",{"code-path":"src/pages/Section.tsx:157:9",className:"mb-2 text-sm font-bold text-[#333]",children:M.jsx("span",{"code-path":"src/pages/Section.tsx:158:11",className:"pirate-highlight px-1",children:e.headline})}),M.jsx("p",{"code-path":"src/pages/Section.tsx:160:9",className:"text-xs leading-[1.6] text-[#777]",children:e.desc}),M.jsx(zi,{"code-path":"src/pages/Section.tsx:161:9",to:e.to,className:"pirate-link mt-2 inline-flex min-h-[44px] items-center text-sm font-bold",children:e.linkText})]})]})},ol=({section:r})=>{const e=r==="home"?"首页":r==="movies"?js.nav:P_[r].nav;return M.jsxs("div",{"code-path":"src/pages/Section.tsx:185:5",className:"min-h-screen bg-[#f5f5f5] text-[#333]",children:[M.jsx(Yp,{"code-path":"src/pages/Section.tsx:186:7",active:e}),r==="home"&&M.jsx(N1,{"code-path":"src/pages/Section.tsx:187:30"}),r==="movies"&&M.jsx(D1,{"code-path":"src/pages/Section.tsx:188:32"}),(r==="tv"||r==="variety"||r==="anime")&&M.jsx(U1,{"code-path":"src/pages/Section.tsx:190:9",sectionKey:r}),M.jsxs("div",{"code-path":"src/pages/Section.tsx:193:7",className:"mx-auto w-full max-w-6xl px-3 pb-4 sm:px-4",children:[r==="anime"&&M.jsx(C1,{"code-path":"src/pages/Section.tsx:194:33"}),M.jsx(Qp,{"code-path":"src/pages/Section.tsx:195:9"})]}),M.jsx(Kp,{"code-path":"src/pages/Section.tsx:199:7"}),M.jsx(Zp,{"code-path":"src/pages/Section.tsx:201:7"})]})},pv=({item:r})=>M.jsxs("div",{"code-path":"src/pages/AboutMe.tsx:11:3",className:"min-w-0",children:[M.jsx("div",{"code-path":"src/pages/AboutMe.tsx:12:5",className:"aspect-[2/3] w-full overflow-hidden border border-black/40 bg-[#eee]",children:M.jsx("img",{"code-path":"src/pages/AboutMe.tsx:13:7",src:r.cover,alt:`${r.name} 封面`,loading:"lazy",className:"h-full w-full object-cover"})}),M.jsx("span",{"code-path":"src/pages/AboutMe.tsx:20:5",className:"mt-0.5 block truncate text-center text-[10px] leading-4 text-[#333]",children:r.name})]}),L1=()=>{const[r,e]=ee.useState(!1),i=()=>{e(!0),window.setTimeout(()=>e(!1),2200)};return M.jsxs("div",{"code-path":"src/pages/AboutMe.tsx:42:5",className:"min-h-screen bg-[#f5f5f5] text-[#333]",children:[M.jsx(Yp,{"code-path":"src/pages/AboutMe.tsx:43:7",active:"关于我"}),M.jsxs("main",{"code-path":"src/pages/AboutMe.tsx:45:7",className:"mx-auto w-full max-w-6xl px-3 pb-4 sm:px-4",children:[M.jsx("nav",{"code-path":"src/pages/AboutMe.tsx:47:9","aria-label":"面包屑",className:"pt-3 text-xs text-[#777]",children:Mi.breadcrumb.map((a,l)=>M.jsxs("span",{"code-path":"src/pages/AboutMe.tsx:49:13",children:[l>0&&M.jsx("span",{"code-path":"src/pages/AboutMe.tsx:50:25",className:"mx-1 text-[#bbb]",children:">"}),l<Mi.breadcrumb.length-1?M.jsx("span",{"code-path":"src/pages/AboutMe.tsx:52:17",className:"pirate-link cursor-pointer",children:a}):M.jsx("span",{"code-path":"src/pages/AboutMe.tsx:54:17",className:"text-[#333]",children:a})]},a))}),M.jsxs("h1",{"code-path":"src/pages/AboutMe.tsx:60:9",className:"mt-2 text-xl font-black text-[#333] sm:text-2xl",children:[Mi.title,M.jsx("span",{"code-path":"src/pages/AboutMe.tsx:62:11",className:"pirate-highlight ml-2 px-1 text-sm",children:"本人亲测是真的"})]}),M.jsxs("section",{"code-path":"src/pages/AboutMe.tsx:66:9","aria-label":"站主资料卡",className:"pirate-panel mt-2 p-2",children:[M.jsx("h2",{"code-path":"src/pages/AboutMe.tsx:67:11",className:"mb-2 text-sm font-bold text-[#333]",children:Mi.profileTitle}),M.jsxs("div",{"code-path":"src/pages/AboutMe.tsx:68:11",className:"flex flex-col gap-3 sm:flex-row",children:[M.jsx("dl",{"code-path":"src/pages/AboutMe.tsx:69:13",className:"min-w-0 flex-1 text-[13px] leading-[1.5]",children:Mi.profile.map(a=>M.jsxs("div",{"code-path":"src/pages/AboutMe.tsx:71:17",className:"flex gap-2 border-b border-dashed border-[#ddd] py-1 last:border-b-0",children:[M.jsxs("dt",{"code-path":"src/pages/AboutMe.tsx:72:19",className:"shrink-0 text-[#777]",children:[a.label,"："]}),M.jsx("dd",{"code-path":"src/pages/AboutMe.tsx:73:19",className:"min-w-0 text-[#333]",children:Array.isArray(a.value)?a.value.map((l,c)=>M.jsx("span",{"code-path":"src/pages/AboutMe.tsx:77:27",className:l.del?"line-through decoration-[#000] decoration-2":void 0,children:l.text},c)):a.value})]},a.label))}),M.jsxs("button",{"code-path":"src/pages/AboutMe.tsx:90:13",type:"button","aria-label":"个人照片（加载失败）",onClick:i,className:"mx-auto flex aspect-[3/4] w-32 shrink-0 flex-col items-center justify-center gap-1.5 border border-[#ccc] bg-[#fafafa] hover:border-[#999] sm:mx-0 sm:w-36",children:[M.jsxs("svg",{"code-path":"src/pages/AboutMe.tsx:96:15",viewBox:"0 0 48 48",className:"h-9 w-9 text-[#aaa]",fill:"none",stroke:"currentColor",strokeWidth:"2","aria-hidden":!0,children:[M.jsx("rect",{"code-path":"src/pages/AboutMe.tsx:97:17",x:"6",y:"10",width:"36",height:"28",rx:"2"}),M.jsx("circle",{"code-path":"src/pages/AboutMe.tsx:98:17",cx:"17",cy:"20",r:"3"}),M.jsx("path",{"code-path":"src/pages/AboutMe.tsx:99:17",d:"M6 34l10-8 8 6 10-9 8 7"}),M.jsx("path",{"code-path":"src/pages/AboutMe.tsx:100:17",d:"M8 6l32 36",stroke:"#999"})]}),M.jsx("p",{"code-path":"src/pages/AboutMe.tsx:102:15",className:"px-2 text-center text-[10px] leading-4 text-[#999]",children:"个人照片.jpg"}),M.jsx("p",{"code-path":"src/pages/AboutMe.tsx:103:15",className:"text-[10px] text-[#bbb]",children:"（图片加载失败）"})]})]})]}),M.jsxs("section",{"code-path":"src/pages/AboutMe.tsx:109:9","aria-label":"关于我",className:"pirate-panel mt-2 p-2",children:[M.jsx("h2",{"code-path":"src/pages/AboutMe.tsx:110:11",className:"mb-2 text-sm font-bold text-[#333]",children:Mi.introTitle}),M.jsxs("blockquote",{"code-path":"src/pages/AboutMe.tsx:111:11",className:"border-l-2 border-[#f5a623] pl-2 text-xs leading-[1.6] whitespace-pre-line text-[#333]",children:[M.jsx("span",{"code-path":"src/pages/AboutMe.tsx:112:13",className:"pirate-highlight px-1",children:"站长自白："}),Mi.intro]})]}),M.jsxs("section",{"code-path":"src/pages/AboutMe.tsx:118:9","aria-label":"我的作品",className:"pirate-panel mt-2 p-2",children:[M.jsx("h2",{"code-path":"src/pages/AboutMe.tsx:119:11",className:"mb-2 text-sm font-bold text-[#333]",children:Mi.worksTitle}),M.jsx("div",{"code-path":"src/pages/AboutMe.tsx:120:11",className:"grid gap-2 sm:grid-cols-2",children:Mi.works.map(a=>M.jsxs(zi,{"code-path":"src/pages/AboutMe.tsx:122:15",to:a.to,className:"flex min-h-[44px] flex-col justify-center gap-1 border border-[#ddd] bg-[#fafafa] p-2 no-underline hover:border-[#00e]",children:[M.jsx("span",{"code-path":"src/pages/AboutMe.tsx:127:17",className:"text-sm font-black text-[#333]",children:a.title}),M.jsx("span",{"code-path":"src/pages/AboutMe.tsx:128:17",className:"text-xs leading-[1.5] text-[#777]",children:a.desc}),M.jsx("span",{"code-path":"src/pages/AboutMe.tsx:129:17",className:"pirate-link text-xs font-bold",children:a.linkText})]},a.title))})]}),M.jsxs("section",{"code-path":"src/pages/AboutMe.tsx:136:9","aria-label":"我在想",className:"pirate-panel mt-2 p-2",children:[M.jsx("h2",{"code-path":"src/pages/AboutMe.tsx:137:11",className:"mb-2 text-sm font-bold text-[#333]",children:Mi.thoughtsTitle}),M.jsx("div",{"code-path":"src/pages/AboutMe.tsx:138:11",className:"text-xs leading-[1.6]",children:Mi.thoughts.map(a=>M.jsxs("div",{"code-path":"src/pages/AboutMe.tsx:140:15",className:"flex flex-wrap items-baseline gap-x-2 gap-y-0.5 border-b border-dashed border-[#ddd] py-1.5 last:border-b-0",children:[M.jsxs("span",{"code-path":"src/pages/AboutMe.tsx:144:17",className:"pirate-highlight shrink-0 px-1 font-bold",children:[a.group,"："]}),M.jsx("span",{"code-path":"src/pages/AboutMe.tsx:145:17",className:"min-w-0 text-[#333]",children:a.items.map((l,c)=>M.jsxs("span",{"code-path":"src/pages/AboutMe.tsx:147:21",children:[c>0&&M.jsx("span",{"code-path":"src/pages/AboutMe.tsx:148:33",className:"mx-1 text-[#bbb]",children:"｜"}),l]},l))})]},a.group))})]}),M.jsxs("section",{"code-path":"src/pages/AboutMe.tsx:159:9","aria-label":"我在看的",className:"pirate-panel mt-2 p-2",children:[M.jsx("h2",{"code-path":"src/pages/AboutMe.tsx:160:11",className:"mb-2 text-sm font-bold text-[#333]",children:Mi.watchingTitle}),M.jsxs("div",{"code-path":"src/pages/AboutMe.tsx:161:11",className:"grid gap-2 sm:grid-cols-2",children:[M.jsxs("div",{"code-path":"src/pages/AboutMe.tsx:162:13",className:"border border-[#ddd] bg-[#fafafa] p-2",children:[M.jsxs("div",{"code-path":"src/pages/AboutMe.tsx:163:15",className:"mb-2 flex items-center gap-2",children:[M.jsx("span",{"code-path":"src/pages/AboutMe.tsx:164:17",className:"bg-[#f00] px-1.5 py-0.5 text-[10px] font-bold text-white",children:"电影"}),M.jsx("h3",{"code-path":"src/pages/AboutMe.tsx:165:17",className:"text-xs font-bold text-[#333]",children:Nu.title})]}),M.jsx("div",{"code-path":"src/pages/AboutMe.tsx:167:15",className:"grid grid-cols-3 gap-2 sm:grid-cols-5",children:Nu.items.map(a=>M.jsx(pv,{"code-path":"src/pages/AboutMe.tsx:169:19",item:a},a.name))})]}),M.jsxs("div",{"code-path":"src/pages/AboutMe.tsx:173:13",className:"border border-[#ddd] bg-[#fafafa] p-2",children:[M.jsxs("div",{"code-path":"src/pages/AboutMe.tsx:174:15",className:"mb-2 flex items-center gap-2",children:[M.jsx("span",{"code-path":"src/pages/AboutMe.tsx:175:17",className:"bg-[#f00] px-1.5 py-0.5 text-[10px] font-bold text-white",children:"书"}),M.jsx("h3",{"code-path":"src/pages/AboutMe.tsx:176:17",className:"text-xs font-bold text-[#333]",children:fv.title})]}),M.jsx("div",{"code-path":"src/pages/AboutMe.tsx:178:15",className:"grid grid-cols-3 gap-2 sm:grid-cols-5",children:fv.items.map(a=>M.jsx(pv,{"code-path":"src/pages/AboutMe.tsx:180:19",item:a},a.name))})]})]})]})]}),M.jsx("div",{"code-path":"src/pages/AboutMe.tsx:189:7",className:"mx-auto w-full max-w-6xl px-3 pb-4 sm:px-4",children:M.jsx(Qp,{"code-path":"src/pages/AboutMe.tsx:190:9"})}),M.jsx(Kp,{"code-path":"src/pages/AboutMe.tsx:194:7"}),M.jsx(Zp,{"code-path":"src/pages/AboutMe.tsx:196:7"}),r&&M.jsx("div",{"code-path":"src/pages/AboutMe.tsx:200:9",role:"status",className:"fixed left-1/2 top-1/3 z-50 -translate-x-1/2 whitespace-nowrap border border-[#f00] bg-[#ffff00] px-4 py-2 text-sm font-bold text-[#f00] shadow-lg",children:"别点了，已裂开"})]})},mv=r=>{const e=Math.max(0,Math.floor(r)),i=Math.floor(e/3600),a=Math.floor(e%3600/60),l=e%60;return`${i}:${String(a).padStart(2,"0")}:${String(l).padStart(2,"0")}`};let O1=0;const P1=({episode:r,episodeIndex:e,onSelectEpisode:i})=>{const a=ee.useRef(null),[l,c]=ee.useState(!1),[f,p]=ee.useState(ds.trialSeconds),[m,h]=ee.useState(!1),[g,v]=ee.useState(!1),[x,b]=ee.useState(0),[T,C]=ee.useState(!1),[y,_]=ee.useState(null),[U,z]=ee.useState(null),[N,L]=ee.useState([]),[O,I]=ee.useState(!0),[A,B]=ee.useState({x:0,y:0}),[X,q]=ee.useState(!1),Q=F=>{_(F),window.setTimeout(()=>_(null),2e3)};ee.useEffect(()=>{b(Math.floor(e*ds.totalSeconds/Ks.length))},[e]),ee.useEffect(()=>{g?qs.play():qs.pause()},[g]),ee.useEffect(()=>{qs.setMuted(X)},[X]),ee.useEffect(()=>{const F=window.setInterval(()=>{p(J=>J>0?J-1:0)},1e3);return()=>window.clearInterval(F)},[]),ee.useEffect(()=>{if(!g)return;const F=window.setInterval(()=>{b(J=>Math.min(J+1,ds.totalSeconds))},1e3);return()=>window.clearInterval(F)},[g]),ee.useEffect(()=>{if(!g)return;let F=0,J=0;const $=()=>{J=window.setTimeout(()=>{z(30+Math.floor(Math.random()*65)),F=window.setTimeout(()=>{z(null),$()},1500)},8e3+Math.random()*7e3)};return $(),()=>{window.clearTimeout(J),window.clearTimeout(F)}},[g]),ee.useEffect(()=>{if(!g)return;let F=0;const J=()=>{const $={id:++O1,text:dv[Math.floor(Math.random()*dv.length)],top:8+Math.random()*55,duration:7+Math.random()*5};L(he=>[...he.slice(-15),$]),window.setTimeout(()=>{L(he=>he.filter(D=>D.id!==$.id))},$.duration*1e3+500),F=window.setTimeout(J,2500+Math.random()*1500)};return F=window.setTimeout(J,600),()=>window.clearTimeout(F)},[g]),ee.useEffect(()=>{if(O)return;const F=window.setTimeout(()=>I(!0),15e3);return()=>window.clearTimeout(F)},[O]);const fe=()=>{try{navigator.clipboard?.writeText(window.location.href)}catch{}Q("复制链接成功")},Y=()=>{document.fullscreenElement?document.exitFullscreen():a.current?.requestFullscreen?.()},te=()=>{h(!1),c(!0),v(!0)},H=Math.min(100,x/ds.totalSeconds*100);return M.jsxs("section",{"code-path":"src/components/pirate/Player.tsx:167:5","aria-label":"在线播放器",className:"mt-2",children:[M.jsxs("div",{"code-path":"src/components/pirate/Player.tsx:168:7",ref:a,className:"group relative aspect-video w-full select-none overflow-hidden border-2 border-[#222] bg-black",children:[M.jsx("img",{"code-path":"src/components/pirate/Player.tsx:173:9",src:r.src,alt:`${r.title} 播放画面`,className:"absolute inset-0 h-full w-full object-cover",style:{filter:"contrast(1.08) saturate(0.9) brightness(0.96)"},draggable:!1}),M.jsxs("svg",{"code-path":"src/components/pirate/Player.tsx:181:9","aria-hidden":!0,className:"pointer-events-none absolute inset-0 h-full w-full opacity-[0.08] mix-blend-overlay",children:[M.jsx("filter",{"code-path":"src/components/pirate/Player.tsx:182:11",id:"pirate-noise",children:M.jsx("feTurbulence",{"code-path":"src/components/pirate/Player.tsx:183:13",type:"fractalNoise",baseFrequency:"0.9",numOctaves:"2",stitchTiles:"stitch"})}),M.jsx("rect",{"code-path":"src/components/pirate/Player.tsx:185:11",width:"100%",height:"100%",filter:"url(#pirate-noise)"})]}),M.jsx("div",{"code-path":"src/components/pirate/Player.tsx:189:9",className:"absolute left-2 top-2 z-10 rounded bg-black/40 px-2 py-0.5 font-mono text-[10px] tracking-[0.2em] text-white/70 sm:text-xs",children:ds.channelLogo}),M.jsx("div",{"code-path":"src/components/pirate/Player.tsx:194:9",className:"absolute right-0 top-2 z-10 w-1/2 overflow-hidden sm:w-2/5",children:M.jsx("div",{"code-path":"src/components/pirate/Player.tsx:195:11",className:"pirate-watermark whitespace-nowrap text-[10px] text-white/40 sm:text-xs",children:ds.watermark})}),M.jsx("div",{"code-path":"src/components/pirate/Player.tsx:201:9","aria-hidden":!0,className:"pointer-events-none absolute inset-0 z-10 overflow-hidden",children:N.map(F=>M.jsx("span",{"code-path":"src/components/pirate/Player.tsx:203:13",className:"pirate-danmaku absolute whitespace-nowrap text-xs text-white/60 sm:text-sm",style:{top:`${F.top}%`,animationDuration:`${F.duration}s`},children:F.text},F.id))}),!g&&l&&M.jsx("button",{"code-path":"src/components/pirate/Player.tsx:215:11",type:"button","aria-label":"播放",onClick:()=>v(!0),className:"absolute left-1/2 top-1/2 z-20 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white/70 transition hover:bg-white/90 sm:h-20 sm:w-20",children:M.jsx("span",{"code-path":"src/components/pirate/Player.tsx:221:13",className:"ml-1 inline-block h-0 w-0 border-y-[14px] border-l-[22px] border-y-transparent border-l-black sm:border-y-[16px] sm:border-l-[26px]"})}),U!==null&&M.jsxs("div",{"code-path":"src/components/pirate/Player.tsx:227:11",className:"absolute bottom-16 left-1/2 z-20 -translate-x-1/2 whitespace-nowrap rounded bg-black/70 px-3 py-1 text-xs text-[#ffd75e]",children:["正在缓冲… ",U,"%"]}),y&&M.jsx("div",{"code-path":"src/components/pirate/Player.tsx:234:11",role:"status",className:"absolute left-1/2 top-10 z-[70] -translate-x-1/2 whitespace-nowrap rounded bg-black/85 px-3 py-1.5 text-xs text-[#ffd75e] sm:text-sm",children:y}),O&&M.jsxs("div",{"code-path":"src/components/pirate/Player.tsx:244:11",className:"pirate-blink absolute bottom-14 right-2 z-20 rounded-sm border border-[#f00] bg-[#ffff00] px-2 py-1 text-[10px] font-bold text-[#f00] sm:text-xs",style:{transform:`translate(${A.x}px, ${A.y}px)`},children:[M.jsx("span",{"code-path":"src/components/pirate/Player.tsx:248:13",className:"cursor-pointer",children:ds.adText}),M.jsx("button",{"code-path":"src/components/pirate/Player.tsx:249:13",type:"button","aria-label":"关闭广告（很难点中）",onClick:()=>I(!1),onMouseEnter:()=>B({x:Math.floor(Math.random()*21)-10,y:Math.floor(Math.random()*13)-6}),className:"absolute -right-2 -top-2 flex h-4 w-4 items-center justify-center rounded-full bg-[#ff4d4f] text-[9px] leading-none text-white",children:"×"})]}),M.jsxs("div",{"code-path":"src/components/pirate/Player.tsx:264:9",className:"absolute inset-x-0 bottom-0 z-20 bg-gradient-to-t from-black/90 via-black/60 to-transparent px-2 pb-1.5 pt-6 opacity-100 transition-opacity md:opacity-55 md:group-hover:opacity-100",children:[M.jsxs("div",{"code-path":"src/components/pirate/Player.tsx:266:11",className:"relative mb-1 h-4",children:[M.jsx("div",{"code-path":"src/components/pirate/Player.tsx:267:13",className:"absolute top-1/2 h-1.5 w-full -translate-y-1/2 rounded bg-white/20",children:M.jsx("div",{"code-path":"src/components/pirate/Player.tsx:268:15",className:"h-full rounded bg-[#ff4d4f]",style:{width:`${H}%`}})}),Ks.map((F,J)=>M.jsxs("button",{"code-path":"src/components/pirate/Player.tsx:271:15",type:"button",title:F.title,"aria-label":`跳到${F.title}`,onClick:()=>i(J),className:"group/mark absolute top-1/2 flex h-4 w-4 -translate-x-1/2 -translate-y-1/2 items-center justify-center",style:{left:`${(J+.5)/Ks.length*100}%`},children:[M.jsx("span",{"code-path":"src/components/pirate/Player.tsx:280:17",className:`h-1.5 w-1.5 rounded-full ${J<=e?"bg-[#ffd75e]":"bg-white/50"} group-hover/mark:scale-150`}),M.jsx("span",{"code-path":"src/components/pirate/Player.tsx:285:17",className:"pointer-events-none absolute -top-7 left-1/2 hidden -translate-x-1/2 whitespace-nowrap rounded bg-black/90 px-1.5 py-0.5 text-[10px] text-[#ffd75e] group-hover/mark:block",children:F.title})]},F.id))]}),M.jsxs("div",{"code-path":"src/components/pirate/Player.tsx:291:11",className:"flex items-center gap-1 sm:gap-2",children:[M.jsx("button",{"code-path":"src/components/pirate/Player.tsx:293:13",type:"button","aria-label":g?"暂停":"播放",onClick:()=>l?v(F=>!F):h(!0),className:"flex h-11 w-11 items-center justify-center text-white hover:text-[#ffd75e]",children:g?M.jsxs("span",{"code-path":"src/components/pirate/Player.tsx:300:17",className:"flex gap-1",children:[M.jsx("span",{"code-path":"src/components/pirate/Player.tsx:301:19",className:"h-4 w-1.5 bg-current"}),M.jsx("span",{"code-path":"src/components/pirate/Player.tsx:302:19",className:"h-4 w-1.5 bg-current"})]}):M.jsx("span",{"code-path":"src/components/pirate/Player.tsx:305:17",className:"ml-0.5 inline-block h-0 w-0 border-y-[8px] border-l-[13px] border-y-transparent border-l-current"})}),M.jsxs("span",{"code-path":"src/components/pirate/Player.tsx:309:13",className:"whitespace-nowrap font-mono text-[10px] text-[#c9d1d9] sm:text-xs",children:[mv(x)," ",M.jsx("span",{"code-path":"src/components/pirate/Player.tsx:310:37",className:"text-[#8b949e]",children:"/ 00:10:24"})]}),M.jsx("span",{"code-path":"src/components/pirate/Player.tsx:312:13",className:"flex-1"}),M.jsx("button",{"code-path":"src/components/pirate/Player.tsx:314:13",type:"button","aria-label":X?"取消静音":"静音","aria-pressed":X,onClick:()=>q(F=>!F),className:"hidden h-11 w-11 items-center justify-center text-white hover:text-[#ffd75e] sm:flex",children:M.jsx("svg",{"code-path":"src/components/pirate/Player.tsx:321:15",viewBox:"0 0 24 24",className:"h-5 w-5 fill-current","aria-hidden":!0,children:M.jsx("path",{"code-path":"src/components/pirate/Player.tsx:322:17",d:"M3 9v6h4l5 5V4L7 9H3zm13.5 3a4.5 4.5 0 0 0-2.5-4v8a4.5 4.5 0 0 0 2.5-4zM14 3.2v2.1a7 7 0 0 1 0 13.4v2.1a9 9 0 0 0 0-17.6z"})})}),M.jsxs("div",{"code-path":"src/components/pirate/Player.tsx:326:13",className:"relative",children:[M.jsx("button",{"code-path":"src/components/pirate/Player.tsx:327:15",type:"button","aria-haspopup":"menu","aria-expanded":T,onClick:()=>C(F=>!F),className:"flex h-11 items-center whitespace-nowrap px-2 text-xs text-white hover:text-[#ffd75e] sm:text-sm",children:"标清(360P)"}),T&&M.jsx("ul",{"code-path":"src/components/pirate/Player.tsx:337:17",role:"menu",className:"absolute bottom-12 right-0 w-32 rounded border border-[#232a3a] bg-[#161b27] py-1 shadow-xl",children:ds.qualities.map(F=>F.vip?M.jsxs("li",{"code-path":"src/components/pirate/Player.tsx:343:23",className:"group/q relative",children:[M.jsxs("button",{"code-path":"src/components/pirate/Player.tsx:344:25",type:"button",onClick:()=>Q("VIP 专享，请开通 VIP"),className:"flex w-full cursor-not-allowed items-center justify-between px-3 py-2 text-left text-xs text-[#8b949e]/60",children:[F.label,M.jsx("span",{"code-path":"src/components/pirate/Player.tsx:350:27",className:"text-[#ff4d4f]",children:"VIP"})]}),M.jsx("span",{"code-path":"src/components/pirate/Player.tsx:352:25",className:"pointer-events-none absolute bottom-full right-0 mb-1 hidden whitespace-nowrap rounded bg-black/90 px-2 py-1 text-[10px] text-[#ffd75e] group-hover/q:block",children:"VIP 专享，请开通 VIP"})]},F.label):M.jsx("li",{"code-path":"src/components/pirate/Player.tsx:357:23",children:M.jsxs("button",{"code-path":"src/components/pirate/Player.tsx:358:25",type:"button",onClick:()=>C(!1),className:"w-full px-3 py-2 text-left text-xs text-[#ffd75e]",children:[F.label," ✓"]})},F.label))})]}),M.jsx("button",{"code-path":"src/components/pirate/Player.tsx:372:13",type:"button","aria-label":"分享",onClick:fe,className:"flex h-11 items-center px-2 text-xs text-white hover:text-[#ffd75e] sm:text-sm",children:"分享"}),M.jsx("button",{"code-path":"src/components/pirate/Player.tsx:381:13",type:"button","aria-label":"全屏",onClick:Y,className:"flex h-11 w-11 items-center justify-center text-white hover:text-[#ffd75e]",children:M.jsx("svg",{"code-path":"src/components/pirate/Player.tsx:387:15",viewBox:"0 0 24 24",className:"h-5 w-5 fill-none stroke-current",strokeWidth:"2","aria-hidden":!0,children:M.jsx("path",{"code-path":"src/components/pirate/Player.tsx:388:17",d:"M4 9V4h5M20 9V4h-5M4 15v5h5M20 15v5h-5"})})})]})]}),!l&&M.jsxs("div",{"code-path":"src/components/pirate/Player.tsx:396:11",className:"absolute inset-0 z-40 flex flex-col items-center justify-center bg-black/80 px-4 text-center",children:[M.jsx("p",{"code-path":"src/components/pirate/Player.tsx:397:13",className:"text-2xl font-black tracking-widest text-[#ffd75e] sm:text-4xl",children:"试看 6 分钟"}),M.jsxs("p",{"code-path":"src/components/pirate/Player.tsx:398:13",className:"mt-2 font-mono text-sm text-[#c9d1d9] sm:text-base",children:["剩余试看时间 ",mv(f)]}),M.jsx("button",{"code-path":"src/components/pirate/Player.tsx:401:13",type:"button",onClick:()=>h(!0),className:"mt-4 flex min-h-[44px] items-center rounded bg-[#ff4d4f] px-6 text-sm font-bold text-white hover:bg-[#ff6b6d] sm:text-base",children:"开通 VIP 观看完整版"}),M.jsx("p",{"code-path":"src/components/pirate/Player.tsx:408:13",className:"mt-3 text-[10px] text-[#8b949e] sm:text-xs",children:"VIP 尊享蓝光画质 · 免广告 · 全集抢先看"})]})]}),M.jsx("button",{"code-path":"src/components/pirate/Player.tsx:414:7",type:"button",onClick:()=>Q("广告也敢点？年轻人耗子尾汁"),className:"pirate-blink mx-auto mt-2 flex h-[90px] w-full max-w-[728px] items-center justify-center border border-[#f00] bg-[#ffff00] px-2 text-center text-sm font-black text-[#f00] sm:text-lg",children:qp.banner}),M.jsxs("div",{"code-path":"src/components/pirate/Player.tsx:423:7",className:"mt-1 flex flex-wrap items-center gap-x-3 gap-y-1 text-[11px] text-[#777]",children:[M.jsx("span",{"code-path":"src/components/pirate/Player.tsx:424:9",className:"pirate-highlight px-1 font-bold",children:"提示：播放卡顿请切换线路"}),["线路①","线路②","线路③","备用线路"].map((F,J)=>M.jsx("button",{"code-path":"src/components/pirate/Player.tsx:426:11",type:"button",onClick:()=>Q(J===0?"当前已是最优线路（并没有）":"切换失败，该线路已被查封"),className:`min-h-[32px] underline ${J===0?"pirate-highlight px-1 font-bold":"pirate-link"}`,children:F},F))]}),m&&M.jsx("div",{"code-path":"src/components/pirate/Player.tsx:439:9",role:"dialog","aria-modal":"true","aria-label":"开通 VIP",className:"fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-4",onClick:()=>h(!1),children:M.jsxs("div",{"code-path":"src/components/pirate/Player.tsx:446:11",className:"w-full max-w-xs border border-[#ddd] bg-white p-5 text-center",onClick:F=>F.stopPropagation(),children:[M.jsx("p",{"code-path":"src/components/pirate/Player.tsx:450:13",className:"text-lg font-bold text-[#f00]",children:"开通 VIP"}),M.jsx("p",{"code-path":"src/components/pirate/Player.tsx:451:13",className:"mt-1 text-[11px] text-[#777]",children:"本站片源均为枪版，VIP 也救不了画质"}),M.jsx("ul",{"code-path":"src/components/pirate/Player.tsx:452:13",className:"mt-3 space-y-1.5 text-left text-xs",children:[["月度会员","¥25"],["年度会员","¥198"],["终身会员","¥998"]].map(([F,J],$)=>M.jsxs("li",{"code-path":"src/components/pirate/Player.tsx:458:17",className:`flex items-center justify-between border px-2 py-1.5 ${$===1?"border-[#f00] bg-[#fff5f5]":"border-[#ddd]"}`,children:[M.jsxs("span",{"code-path":"src/components/pirate/Player.tsx:464:19",className:"text-[#333]",children:[F,$===1&&M.jsx("span",{"code-path":"src/components/pirate/Player.tsx:466:33",className:"ml-1 text-[10px] text-[#f00]",children:"（推荐）"})]}),M.jsx("span",{"code-path":"src/components/pirate/Player.tsx:468:19",className:"font-mono font-bold text-[#f00]",children:J})]},F))}),M.jsx("button",{"code-path":"src/components/pirate/Player.tsx:472:13",type:"button",onClick:()=>Q("上网谨慎，不要付费 —— 本站是戏仿页面，没有真的 VIP"),className:"mt-4 flex min-h-[44px] w-full items-center justify-center bg-[#ff4d4f] text-sm font-bold text-white hover:bg-[#ff6b6d]",children:"立即开通"}),M.jsx("button",{"code-path":"src/components/pirate/Player.tsx:479:13",type:"button",onClick:te,className:"mt-2 flex min-h-[44px] w-full items-center justify-center border border-[#ddd] text-sm text-[#333] hover:bg-[#f5f5f5]",children:"先试看，稍后再说"}),M.jsx("button",{"code-path":"src/components/pirate/Player.tsx:486:13",type:"button",onClick:()=>h(!1),className:"mt-2 flex min-h-[44px] w-full items-center justify-center text-xs text-[#777] underline hover:text-[#333]",children:"我再想想"})]})})]})},B_=({score:r,className:e=""})=>{const i=Math.min(100,r/10*100);return M.jsxs("span",{"code-path":"src/components/pirate/MovieInfo.tsx:7:5",className:`relative inline-block whitespace-nowrap leading-none ${e}`,"aria-label":`评分 ${r}`,children:[M.jsx("span",{"code-path":"src/components/pirate/MovieInfo.tsx:8:7",className:"text-[#ddd]",children:"★★★★★"}),M.jsx("span",{"code-path":"src/components/pirate/MovieInfo.tsx:9:7",className:"absolute inset-0 overflow-hidden text-[#f5a623]",style:{width:`${i}%`},children:"★★★★★"})]})},I1=()=>M.jsxs("section",{"code-path":"src/components/pirate/MovieInfo.tsx:22:5","aria-label":"影片信息",className:"pirate-panel mt-2 p-2",children:[M.jsxs("h2",{"code-path":"src/components/pirate/MovieInfo.tsx:23:7",className:"mb-2 text-sm font-bold text-[#333]",children:["影片信息",M.jsx("span",{"code-path":"src/components/pirate/MovieInfo.tsx:24:13",className:"ml-1 text-sm font-normal text-[#777]",children:"（《one day》）"})]}),M.jsxs("div",{"code-path":"src/components/pirate/MovieInfo.tsx:26:7",className:"flex flex-col gap-4 sm:flex-row",children:[M.jsxs("div",{"code-path":"src/components/pirate/MovieInfo.tsx:28:9",className:"mx-auto flex aspect-[2/3] w-40 shrink-0 flex-col items-center justify-center gap-2 border border-dashed border-[#ccc] bg-[#fafafa] sm:mx-0 sm:w-48",children:[M.jsxs("svg",{"code-path":"src/components/pirate/MovieInfo.tsx:29:11",viewBox:"0 0 48 48",className:"h-10 w-10 text-[#bbb]",fill:"none",stroke:"currentColor",strokeWidth:"2","aria-hidden":!0,children:[M.jsx("rect",{"code-path":"src/components/pirate/MovieInfo.tsx:30:13",x:"6",y:"10",width:"36",height:"28",rx:"2"}),M.jsx("circle",{"code-path":"src/components/pirate/MovieInfo.tsx:31:13",cx:"17",cy:"20",r:"3"}),M.jsx("path",{"code-path":"src/components/pirate/MovieInfo.tsx:32:13",d:"M6 34l10-8 8 6 10-9 8 7"}),M.jsx("path",{"code-path":"src/components/pirate/MovieInfo.tsx:33:13",d:"M4 4l40 40",stroke:"#f00"})]}),M.jsx("p",{"code-path":"src/components/pirate/MovieInfo.tsx:35:11",className:"text-xs text-[#777]",children:"海报加载失败"}),M.jsx("p",{"code-path":"src/components/pirate/MovieInfo.tsx:36:11",className:"px-2 text-center text-[10px] leading-4 text-[#bbb]",children:"该图片涉嫌违规已被删除"})]}),M.jsxs("div",{"code-path":"src/components/pirate/MovieInfo.tsx:40:9",className:"min-w-0 flex-1 text-[13px] leading-[1.5]",children:[M.jsxs("div",{"code-path":"src/components/pirate/MovieInfo.tsx:41:11",className:"flex flex-wrap items-baseline gap-x-3 gap-y-1",children:[M.jsx("span",{"code-path":"src/components/pirate/MovieInfo.tsx:42:13",className:"text-2xl font-black text-[#f00]",children:al.rating}),M.jsx(B_,{"code-path":"src/components/pirate/MovieInfo.tsx:43:13",score:Number(al.rating),className:"text-base"}),M.jsxs("span",{"code-path":"src/components/pirate/MovieInfo.tsx:44:13",className:"text-xs text-[#777]",children:["豆瓣评分（",al.ratingCount,"）"]})]}),M.jsx("dl",{"code-path":"src/components/pirate/MovieInfo.tsx:46:11",className:"mt-1.5",children:al.rows.map(r=>M.jsxs("div",{"code-path":"src/components/pirate/MovieInfo.tsx:48:15",className:"flex gap-2",children:[M.jsxs("dt",{"code-path":"src/components/pirate/MovieInfo.tsx:49:17",className:"shrink-0 text-[#777]",children:[r.label,"："]}),M.jsx("dd",{"code-path":"src/components/pirate/MovieInfo.tsx:50:17",className:"min-w-0 text-[#333]",children:r.value})]},r.label))}),M.jsxs("blockquote",{"code-path":"src/components/pirate/MovieInfo.tsx:55:11",className:"mt-2 border-l-2 border-[#f5a623] pl-2 text-xs leading-[1.5] text-[#333]",children:[M.jsx("span",{"code-path":"src/components/pirate/MovieInfo.tsx:56:13",className:"pirate-highlight px-1",children:"剧情简介："}),al.synopsis]})]})]})]}),B1=({current:r,onSelect:e,children:i})=>{const[a,l]=ee.useState(!1),c=a?[...Ks].reverse():Ks;return M.jsxs("section",{"code-path":"src/components/pirate/EpisodeList.tsx:20:5","aria-label":"选集",className:"pirate-panel mt-2 p-2",children:[M.jsxs("div",{"code-path":"src/components/pirate/EpisodeList.tsx:21:7",className:"mb-2 flex items-center justify-between",children:[M.jsxs("h2",{"code-path":"src/components/pirate/EpisodeList.tsx:22:9",className:"text-sm font-bold text-[#333]",children:["选集",M.jsx("span",{"code-path":"src/components/pirate/EpisodeList.tsx:23:13",className:"ml-1 text-sm font-normal text-[#777]",children:"（正片8集 + 番外2集）"})]}),M.jsx("div",{"code-path":"src/components/pirate/EpisodeList.tsx:25:9",className:"flex overflow-hidden border border-[#ddd] text-xs",children:["正序","倒序"].map(f=>{const p=f==="倒序"===a;return M.jsx("button",{"code-path":"src/components/pirate/EpisodeList.tsx:29:15",type:"button","aria-pressed":p,onClick:()=>l(f==="倒序"),className:`flex min-h-[36px] items-center px-3 ${p?"bg-[#ffff00] font-bold text-[#f00]":"bg-white text-[#777] hover:text-[#333]"}`,children:f},f)})})]}),M.jsx("ul",{"code-path":"src/components/pirate/EpisodeList.tsx:45:7",className:"grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-5",children:c.map(f=>{const p=f.id-1,m=p===r;return M.jsx("li",{"code-path":"src/components/pirate/EpisodeList.tsx:50:13",children:M.jsxs("button",{"code-path":"src/components/pirate/EpisodeList.tsx:51:15",type:"button","aria-current":m?"true":void 0,onClick:()=>e(p),className:`block w-full overflow-hidden border text-left transition ${m?"border-[#f00] ring-1 ring-[#f00]":f.special?"border-dashed border-[#00e] hover:border-[#f00]":"border-[#ddd] hover:border-[#00e]"}`,children:[M.jsxs("span",{"code-path":"src/components/pirate/EpisodeList.tsx:63:17",className:"relative block aspect-video w-full overflow-hidden bg-[#eee]",children:[M.jsx("img",{"code-path":"src/components/pirate/EpisodeList.tsx:64:19",src:f.src,alt:`${f.title} 缩略图`,loading:"lazy",className:"absolute inset-0 h-full w-full object-cover",style:{filter:"contrast(1.08) saturate(0.9) brightness(0.96)"}}),f.special&&M.jsx("span",{"code-path":"src/components/pirate/EpisodeList.tsx:72:21",className:"absolute left-1 top-1 bg-[#00e] px-1 text-[10px] font-bold text-white",children:"番外"}),M.jsx("span",{"code-path":"src/components/pirate/EpisodeList.tsx:76:19",className:"absolute bottom-1 right-1 rounded-sm bg-black/75 px-1 font-mono text-[10px] text-white",children:f.duration}),m&&M.jsx("span",{"code-path":"src/components/pirate/EpisodeList.tsx:80:21",className:"absolute right-1 top-1 rounded-sm bg-[#ffff00] px-1 text-[10px] font-bold text-[#f00]",children:"播放中"})]}),M.jsx("span",{"code-path":"src/components/pirate/EpisodeList.tsx:85:17",className:`block truncate px-1.5 py-1.5 text-xs ${m?"bg-[#ffff00] font-bold text-[#f00]":"text-[#333]"}`,children:f.title})]})},f.id)})}),i]})},F1=()=>{const[r,e]=ee.useState(!1),i=()=>{e(!0),window.setTimeout(()=>e(!1),4e3)};return M.jsxs("section",{"code-path":"src/components/pirate/RelatedWork.tsx:17:5","aria-label":"相关推荐",className:"pirate-panel mt-2 p-2",children:[M.jsxs("h2",{"code-path":"src/components/pirate/RelatedWork.tsx:18:7",className:"mb-2 text-sm font-bold text-[#333]",children:["相关推荐",M.jsx("span",{"code-path":"src/components/pirate/RelatedWork.tsx:19:13",className:"ml-1 text-sm font-normal text-[#777]",children:"（另一部片子）"})]}),M.jsxs("div",{"code-path":"src/components/pirate/RelatedWork.tsx:22:7",className:"flex gap-3 border border-dashed border-[#ccc] bg-white p-2",children:[M.jsxs("button",{"code-path":"src/components/pirate/RelatedWork.tsx:24:9",type:"button",onClick:i,"aria-label":"《one life》海报，点击查看筹拍消息",className:"relative flex aspect-[2/3] w-24 shrink-0 flex-col items-center justify-center gap-1 overflow-hidden bg-gradient-to-b from-[#1a2233] to-[#0a0e17] transition hover:brightness-110 sm:w-28",children:[M.jsx("span",{"code-path":"src/components/pirate/RelatedWork.tsx:30:11",className:"text-[10px] tracking-[0.3em] text-[#8b949e]",children:Ea.studio}),M.jsx("span",{"code-path":"src/components/pirate/RelatedWork.tsx:31:11",className:"px-1 text-center font-black leading-tight text-[#ffd75e]",style:{fontFamily:'Georgia, "Songti SC", serif',fontSize:"1.15rem"},children:Ea.title}),M.jsx("span",{"code-path":"src/components/pirate/RelatedWork.tsx:37:11",className:"text-[10px] text-[#8b949e]",children:Ea.subTitle}),M.jsx("span",{"code-path":"src/components/pirate/RelatedWork.tsx:39:11",className:"absolute bottom-5 left-1 -rotate-12 border-2 border-[#f00] px-1 py-0.5 text-xs font-black text-[#f00]",children:Ea.status})]}),M.jsxs("div",{"code-path":"src/components/pirate/RelatedWork.tsx:45:9",className:"min-w-0 flex-1 text-xs leading-[1.5]",children:[M.jsxs("p",{"code-path":"src/components/pirate/RelatedWork.tsx:46:11",className:"text-sm font-black text-[#333]",children:["《",Ea.title,"》"]}),M.jsx("dl",{"code-path":"src/components/pirate/RelatedWork.tsx:47:11",className:"mt-1",children:Ea.rows.map(a=>M.jsxs("div",{"code-path":"src/components/pirate/RelatedWork.tsx:49:15",className:"flex gap-2",children:[M.jsxs("dt",{"code-path":"src/components/pirate/RelatedWork.tsx:50:17",className:"shrink-0 text-[#777]",children:[a.label,"："]}),M.jsx("dd",{"code-path":"src/components/pirate/RelatedWork.tsx:51:17",className:"min-w-0 text-[#333]",children:a.value})]},a.label))}),M.jsx("button",{"code-path":"src/components/pirate/RelatedWork.tsx:55:11",type:"button",onClick:i,className:"pirate-link mt-1.5 min-h-[44px] text-xs",children:"查看筹拍消息 >>"})]})]}),r&&M.jsxs("div",{"code-path":"src/components/pirate/RelatedWork.tsx:67:9",role:"status",className:"fixed left-1/2 top-1/3 z-50 w-[min(90vw,320px)] -translate-x-1/2 border-2 border-[#f00] bg-[#ffff00] p-3 text-center shadow-lg",children:[M.jsx("p",{"code-path":"src/components/pirate/RelatedWork.tsx:71:11",className:"text-sm font-black text-[#f00]",children:Ea.notice.title}),M.jsx("p",{"code-path":"src/components/pirate/RelatedWork.tsx:72:11",className:"mt-1 text-base font-black text-[#f00]",children:Ea.notice.text}),M.jsx("p",{"code-path":"src/components/pirate/RelatedWork.tsx:73:11",className:"mt-1 text-[11px] text-[#a00]",children:Ea.notice.sub})]})]})},z1=()=>M.jsxs("section",{"code-path":"src/components/pirate/Awards.tsx:7:3","aria-label":"获奖记录",className:"pirate-panel mt-2 p-2",children:[M.jsxs("h2",{"code-path":"src/components/pirate/Awards.tsx:8:5",className:"mb-2 text-sm font-bold text-[#333]",children:["获奖记录",M.jsx("span",{"code-path":"src/components/pirate/Awards.tsx:10:7",className:"ml-2 text-xs font-normal text-[#777]",children:"奖项含金量与本站片源画质相当"})]}),M.jsx("ul",{"code-path":"src/components/pirate/Awards.tsx:12:5",className:"text-xs leading-[1.5]",children:M1.map(r=>M.jsxs("li",{"code-path":"src/components/pirate/Awards.tsx:14:9",className:"border-b border-dashed border-[#ddd] py-1.5 text-[#333] last:border-b-0",children:[M.jsx("span",{"code-path":"src/components/pirate/Awards.tsx:18:11",className:"mr-1 text-[#f00]",children:"◆"}),r]},r))})]}),gv=["#7c5cbf","#2f7d5b","#b05c3a","#3a6ea5","#a53a5c","#8a6d2f","#4a7c8c","#6b4fa0"],H1=r=>{let e=0;for(let i=0;i<r.length;i+=1)e=(e*31+r.charCodeAt(i))%997;return gv[e%gv.length]},G1=()=>{const[r,e]=ee.useState(""),i=a=>{e(a),window.setTimeout(()=>e(""),2200)};return M.jsxs("section",{"code-path":"src/components/pirate/Reviews.tsx:28:5","aria-label":"豆瓣热评",className:"pirate-panel mt-2 p-2",children:[M.jsxs("h2",{"code-path":"src/components/pirate/Reviews.tsx:29:7",className:"mb-2 text-sm font-bold text-[#333]",children:["豆瓣热评",M.jsx("span",{"code-path":"src/components/pirate/Reviews.tsx:31:9",className:"ml-2 text-xs font-normal text-[#777]",children:"以下评论由网友发布，与本站立场无关"})]}),M.jsx("ul",{"code-path":"src/components/pirate/Reviews.tsx:35:7",className:"text-xs leading-[1.5]",children:O_.map((a,l)=>M.jsxs("li",{"code-path":"src/components/pirate/Reviews.tsx:37:11",className:"flex flex-wrap items-center gap-x-2 gap-y-0.5 border-b border-dashed border-[#ddd] py-1.5 last:border-b-0",children:[M.jsx("span",{"code-path":"src/components/pirate/Reviews.tsx:42:13","aria-hidden":!0,className:"flex h-6 w-6 shrink-0 items-center justify-center text-[10px] font-bold text-white",style:{background:H1(a.username)},children:a.username[0]}),M.jsx("span",{"code-path":"src/components/pirate/Reviews.tsx:49:13",className:"pirate-link cursor-pointer",children:a.username}),M.jsx(B_,{"code-path":"src/components/pirate/Reviews.tsx:50:13",score:a.stars*2,className:"text-[10px]"}),M.jsx("span",{"code-path":"src/components/pirate/Reviews.tsx:51:13",className:"min-w-0 text-[#333]",children:a.text}),M.jsxs("span",{"code-path":"src/components/pirate/Reviews.tsx:52:13",className:"ml-auto shrink-0 text-[#777]",children:["有用(",a.useful,")"]})]},`${a.username}-${l}`))}),M.jsxs("div",{"code-path":"src/components/pirate/Reviews.tsx:58:7",className:"mt-2 border-t border-dashed border-[#ddd] pt-1.5 text-xs leading-[1.5]",children:[M.jsx("span",{"code-path":"src/components/pirate/Reviews.tsx:59:9",className:"mr-1 text-[#777]",children:"赞助链接："}),qp.textLinks.map((a,l)=>M.jsxs("span",{"code-path":"src/components/pirate/Reviews.tsx:61:11",children:[l>0&&M.jsx("span",{"code-path":"src/components/pirate/Reviews.tsx:62:23",className:"mx-1 text-[#ccc]",children:"|"}),M.jsx("button",{"code-path":"src/components/pirate/Reviews.tsx:63:13",type:"button",onClick:()=>i("该站点已失联（假的）"),className:"pirate-link",children:a})]},a))]}),r&&M.jsx("div",{"code-path":"src/components/pirate/Reviews.tsx:71:9",role:"status",className:"fixed left-1/2 top-1/3 z-50 -translate-x-1/2 whitespace-nowrap border border-[#f00] bg-[#ffff00] px-4 py-2 text-sm font-bold text-[#f00] shadow-lg",children:r})]})},V1=()=>{const[r,e]=ee.useState(!1),i=()=>{e(!0),window.setTimeout(()=>e(!1),2200)};return M.jsxs("section",{"code-path":"src/components/pirate/DownloadArea.tsx:16:5","aria-label":"资源下载",className:"pirate-panel mt-2 p-2",children:[M.jsxs("h2",{"code-path":"src/components/pirate/DownloadArea.tsx:17:7",className:"mb-1 text-sm font-bold text-[#333]",children:["资源下载",M.jsx("span",{"code-path":"src/components/pirate/DownloadArea.tsx:19:9",className:"pirate-highlight ml-2 px-1 text-xs font-bold",children:"迅雷会员极速通道已开启"})]}),M.jsx("p",{"code-path":"src/components/pirate/DownloadArea.tsx:21:7",className:"mb-3 text-[11px] text-[#777]",children:"右键另存为无效，请使用下载工具（并没有用）"}),M.jsx("ul",{"code-path":"src/components/pirate/DownloadArea.tsx:23:7",className:"divide-y divide-[#eee] border border-[#ddd] bg-white",children:y1.map(a=>M.jsxs("li",{"code-path":"src/components/pirate/DownloadArea.tsx:25:11",className:"flex flex-wrap items-baseline gap-x-3 gap-y-1 px-2 py-1.5 text-xs",children:[M.jsx("span",{"code-path":"src/components/pirate/DownloadArea.tsx:26:13",className:"pirate-highlight shrink-0 px-1.5 py-0.5 text-[11px] font-bold",children:a.type}),a.isLink?M.jsx("button",{"code-path":"src/components/pirate/DownloadArea.tsx:30:15",type:"button",onClick:i,className:"pirate-link min-h-[32px] min-w-0 break-all text-left font-mono",children:a.label}):M.jsx("span",{"code-path":"src/components/pirate/DownloadArea.tsx:38:15",className:"min-h-[32px] min-w-0 break-all font-mono text-[#333]",children:a.label}),a.extra&&M.jsx("span",{"code-path":"src/components/pirate/DownloadArea.tsx:40:28",className:"font-mono text-xs text-[#777]",children:a.extra})]},a.type))}),r&&M.jsx("div",{"code-path":"src/components/pirate/DownloadArea.tsx:46:9",role:"status",className:"fixed left-1/2 top-1/3 z-50 -translate-x-1/2 whitespace-nowrap border border-[#f00] bg-[#ffff00] px-4 py-2 text-sm font-bold text-[#f00] shadow-lg",children:"该资源已被举报下架（假的，点我试试）"})]})},k1=()=>{const[r,e]=ee.useState(!1),i=()=>{e(!0),window.setTimeout(()=>e(!1),2200)};return M.jsxs("section",{"code-path":"src/components/pirate/FansubRecruit.tsx:16:5","aria-label":"字幕组招募",className:"pirate-panel mt-2 p-2",children:[M.jsx("h2",{"code-path":"src/components/pirate/FansubRecruit.tsx:17:7",className:"mb-1 text-sm font-bold text-[#333]",children:rl.title}),M.jsxs("div",{"code-path":"src/components/pirate/FansubRecruit.tsx:18:7",className:"text-xs leading-[1.6] text-[#333]",children:[M.jsx("p",{"code-path":"src/components/pirate/FansubRecruit.tsx:19:9",children:rl.credit}),M.jsx("p",{"code-path":"src/components/pirate/FansubRecruit.tsx:20:9",children:M.jsx("span",{"code-path":"src/components/pirate/FansubRecruit.tsx:21:11",className:"pirate-highlight inline-block px-1 font-bold",children:rl.recruit})}),M.jsx("p",{"code-path":"src/components/pirate/FansubRecruit.tsx:23:9",children:M.jsx("button",{"code-path":"src/components/pirate/FansubRecruit.tsx:24:11",type:"button",onClick:i,className:"pirate-link inline-flex min-h-[44px] items-center text-left sm:min-h-0",children:rl.contact})})]}),r&&M.jsx("div",{"code-path":"src/components/pirate/FansubRecruit.tsx:35:9",role:"status",className:"fixed left-1/2 top-1/3 z-50 -translate-x-1/2 whitespace-nowrap border border-[#f00] bg-[#ffff00] px-4 py-2 text-sm font-bold text-[#f00] shadow-lg",children:rl.toast})]})},W1=()=>{const[r,e]=ee.useState({});return M.jsxs("section",{"code-path":"src/components/pirate/Comments.tsx:12:5","aria-label":"评论",className:"pirate-panel mt-2 p-2",children:[M.jsxs("h2",{"code-path":"src/components/pirate/Comments.tsx:13:7",className:"mb-2 text-sm font-bold text-[#333]",children:["评论",M.jsxs("span",{"code-path":"src/components/pirate/Comments.tsx:14:11",className:"ml-1 text-sm font-normal text-[#777]",children:["(",ch.length,")"]})]}),M.jsx("ul",{"code-path":"src/components/pirate/Comments.tsx:17:7",className:"divide-y divide-[#eee]",children:ch.map((i,a)=>{const l=r[a];return M.jsxs("li",{"code-path":"src/components/pirate/Comments.tsx:21:13",className:"py-2",children:[M.jsxs("div",{"code-path":"src/components/pirate/Comments.tsx:22:15",className:"flex flex-wrap items-baseline gap-x-3 gap-y-0.5",children:[M.jsx("span",{"code-path":"src/components/pirate/Comments.tsx:23:17",className:"text-xs text-[#00e]",children:i.username}),M.jsx("span",{"code-path":"src/components/pirate/Comments.tsx:24:17",className:"font-mono text-[11px] text-[#777]",children:i.time}),M.jsxs("span",{"code-path":"src/components/pirate/Comments.tsx:25:17",className:"text-[11px] text-[#777]",children:[a+1,"楼"]})]}),M.jsx("p",{"code-path":"src/components/pirate/Comments.tsx:27:15",className:"mt-0.5 text-xs leading-[1.5] text-[#333]",children:i.text}),M.jsxs("div",{"code-path":"src/components/pirate/Comments.tsx:28:15",className:"mt-1 flex gap-4 text-[11px]",children:[M.jsxs("button",{"code-path":"src/components/pirate/Comments.tsx:29:17",type:"button",disabled:!!l,onClick:()=>e(c=>({...c,[a]:"support"})),className:`flex min-h-[32px] items-center gap-1 ${l==="support"?"font-bold text-[#f00]":"text-[#777] hover:text-[#333]"} disabled:cursor-default`,children:["👍 支持(",i.support+(l==="support"?1:0),")"]}),M.jsxs("button",{"code-path":"src/components/pirate/Comments.tsx:39:17",type:"button",disabled:!!l,onClick:()=>e(c=>({...c,[a]:"oppose"})),className:`flex min-h-[32px] items-center gap-1 ${l==="oppose"?"font-bold text-[#f00]":"text-[#777] hover:text-[#333]"} disabled:cursor-default`,children:["👎 反对(",i.oppose+(l==="oppose"?1:0),")"]})]})]},i.time)})}),M.jsxs("p",{"code-path":"src/components/pirate/Comments.tsx:55:7",className:"mt-2 text-center text-[11px] text-[#777]",children:["评论审核中，仅展示 ",ch.length," 条 · 文明上网，理性求种"]})]})},X1=()=>{const[r,e]=ee.useState(0);return M.jsxs("div",{"code-path":"src/pages/Works.tsx:25:5",className:"min-h-screen bg-[#f5f5f5] text-[#333]",children:[M.jsx(Yp,{"code-path":"src/pages/Works.tsx:26:7"}),M.jsxs("main",{"code-path":"src/pages/Works.tsx:28:7",className:"mx-auto w-full max-w-6xl px-3 pb-4 sm:px-4",children:[M.jsx("nav",{"code-path":"src/pages/Works.tsx:30:9","aria-label":"面包屑",className:"pt-3 text-xs text-[#777]",children:uv.map((i,a)=>M.jsxs("span",{"code-path":"src/pages/Works.tsx:32:13",children:[a>0&&M.jsx("span",{"code-path":"src/pages/Works.tsx:33:25",className:"mx-1 text-[#bbb]",children:">"}),a<uv.length-1?M.jsx("span",{"code-path":"src/pages/Works.tsx:35:17",className:"pirate-link cursor-pointer",children:i}):M.jsx("span",{"code-path":"src/pages/Works.tsx:37:17",className:"text-[#333]",children:i})]},i))}),M.jsxs("div",{"code-path":"src/pages/Works.tsx:44:9",className:"mt-2 flex flex-wrap items-center gap-x-3 gap-y-2",children:[M.jsxs("h1",{"code-path":"src/pages/Works.tsx:45:11",className:"text-xl font-black text-[#333] sm:text-2xl",children:["《one day》全集 ",M.jsx("span",{"code-path":"src/pages/Works.tsx:46:25",className:"pirate-highlight px-1",children:"高清中字"})]}),M.jsx("ul",{"code-path":"src/pages/Works.tsx:48:11",className:"flex flex-wrap gap-1.5",children:S1.map(i=>M.jsx("li",{"code-path":"src/pages/Works.tsx:50:15",className:"border border-[#ddd] bg-white px-1.5 py-0.5 text-[10px] text-[#777]",children:i},i))})]}),M.jsx(P1,{"code-path":"src/pages/Works.tsx:61:9",episode:Ks[r],episodeIndex:r,onSelectEpisode:e}),M.jsx(I1,{"code-path":"src/pages/Works.tsx:63:9"}),M.jsx(B1,{"code-path":"src/pages/Works.tsx:64:9",current:r,onSelect:e,children:M.jsx(Qp,{"code-path":"src/pages/Works.tsx:66:11"})}),M.jsx(F1,{"code-path":"src/pages/Works.tsx:69:9"}),M.jsx(z1,{"code-path":"src/pages/Works.tsx:70:9"}),M.jsx(G1,{"code-path":"src/pages/Works.tsx:71:9"}),M.jsx(V1,{"code-path":"src/pages/Works.tsx:72:9"}),M.jsx(k1,{"code-path":"src/pages/Works.tsx:73:9"}),M.jsx(W1,{"code-path":"src/pages/Works.tsx:74:9"})]}),M.jsx(Kp,{"code-path":"src/pages/Works.tsx:78:7"}),M.jsx(Zp,{"code-path":"src/pages/Works.tsx:80:7"})]})},j1=["#00f0ff","#ff2e88","#fcee0a","#7b5cff","#ff6b35","#4ade80","#ffffff"],q1=()=>{const r=ee.useRef(null);return ee.useEffect(()=>{const e=r.current;if(!e)return;const i=e.getContext("2d");if(!i)return;let a=[],l=0;const c=Math.min(window.devicePixelRatio||1,2),f=()=>{e.width=window.innerWidth*c,e.height=window.innerHeight*c,e.style.width=`${window.innerWidth}px`,e.style.height=`${window.innerHeight}px`};f(),window.addEventListener("resize",f);const p=(g,v)=>{const x=90+Math.floor(Math.random()*40),b=[...j1].sort(()=>Math.random()-.5),[T,C,y]=b;for(let _=0;_<x;_+=1){const U=Math.PI*2*_/x+Math.random()*.25,z=2.5+Math.random()*5,N=Math.random();a.push({x:g*c,y:v*c,px:g*c,py:v*c,vx:Math.cos(U)*z*c,vy:Math.sin(U)*z*c,life:1,maxLife:70+Math.random()*50,color:N<.6?T:N<.85?C:y,size:1.8+Math.random()*2})}},m=()=>{i.clearRect(0,0,e.width,e.height),a=a.filter(g=>g.life>0),i.lineCap="round";for(const g of a)g.px=g.x,g.py=g.y,g.x+=g.vx,g.y+=g.vy,g.vy+=.045*c,g.vx*=.985,g.vy*=.985,g.life-=1/g.maxLife,i.globalAlpha=Math.max(g.life*.55,0),i.strokeStyle=g.color,i.lineWidth=Math.max(g.size*c*g.life,.5),i.beginPath(),i.moveTo(g.px,g.py),i.lineTo(g.x,g.y),i.stroke(),i.globalAlpha=Math.max(g.life,0),i.shadowColor=g.color,i.shadowBlur=12*g.life,i.fillStyle=g.color,i.beginPath(),i.arc(g.x,g.y,Math.max(g.size*c*g.life,.6),0,Math.PI*2),i.fill();i.globalAlpha=1,i.shadowBlur=0,l=requestAnimationFrame(m)};l=requestAnimationFrame(m);const h=I_.register(p);return()=>{h(),cancelAnimationFrame(l),window.removeEventListener("resize",f)}},[]),M.jsx("canvas",{"code-path":"src/components/pirate/FireworksCanvas.tsx:116:10",ref:r,"aria-hidden":!0,className:"pointer-events-none fixed inset-0 z-[60]"})};const $p="186",Y1=0,xv=1,Z1=2,Mu=1,K1=2,vl=3,Qs=0,Jn=1,Da=2,Oa=0,Sl=1,bl=2,vv=3,_v=4,Q1=5,Jr=100,J1=101,$1=102,eE=103,tE=104,nE=200,iE=201,aE=202,sE=203,F_=204,z_=205,rE=206,oE=207,lE=208,cE=209,uE=210,fE=211,dE=212,hE=213,pE=214,Kh=0,Qh=1,Jh=2,Ml=3,$h=4,ep=5,tp=6,np=7,H_=0,mE=1,gE=2,ta=0,G_=1,V_=2,k_=3,W_=4,X_=5,j_=6,q_=7,Y_=300,Js=301,no=302,dh=303,hh=304,Xu=306,ip=1e3,Ua=1001,ap=1002,Un=1003,xE=1004,Xc=1005,In=1006,ph=1007,Ys=1008,Ri=1009,Z_=1010,K_=1011,El=1012,em=1013,na=1014,$i=1015,ia=1016,tm=1017,nm=1018,Tl=1020,Q_=35902,J_=35899,$_=1021,eS=1022,Fi=1023,Ba=1026,Zs=1027,tS=1028,im=1029,$s=1030,am=1031,sm=1033,Eu=33776,Tu=33777,Au=33778,Ru=33779,sp=35840,rp=35841,op=35842,lp=35843,cp=36196,up=37492,fp=37496,dp=37488,hp=37489,Du=37490,pp=37491,mp=37808,gp=37809,xp=37810,vp=37811,_p=37812,Sp=37813,yp=37814,bp=37815,Mp=37816,Ep=37817,Tp=37818,Ap=37819,Rp=37820,wp=37821,Cp=36492,Np=36494,Dp=36495,Up=36283,Lp=36284,Uu=36285,Op=36286,vE=3200,Sv=0,_E=1,_s="",fi="srgb",Lu="srgb-linear",Ou="linear",Ft="srgb",mh=7680,SE=519,yE=512,bE=513,ME=514,rm=515,EE=516,TE=517,om=518,AE=519,nS=35044,yv="300 es",ea=2e3,Pu=2001;function RE(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function Iu(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function wE(){const r=Iu("canvas");return r.style.display="block",r}const bv={};function Bu(...r){const e="THREE."+r.shift();console.log(e,...r)}function iS(r){const e=r[0];if(typeof e=="string"&&e.startsWith("TSL:")){const i=r[1];i&&i.isStackTrace?r[0]+=" "+i.getLocation():r[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return r}function it(...r){r=iS(r);const e="THREE."+r.shift();{const i=r[0];i&&i.isStackTrace?console.warn(i.getError(e)):console.warn(e,...r)}}function wt(...r){r=iS(r);const e="THREE."+r.shift();{const i=r[0];i&&i.isStackTrace?console.error(i.getError(e)):console.error(e,...r)}}function eo(...r){const e=r.join(" ");e in bv||(bv[e]=!0,it(...r))}function CE(r,e,i){return new Promise(function(a,l){function c(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:l();break;case r.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:a()}}setTimeout(c,i)})}const NE={[Kh]:Qh,[Jh]:tp,[$h]:np,[Ml]:ep,[Qh]:Kh,[tp]:Jh,[np]:$h,[ep]:Ml};class tr{addEventListener(e,i){this._listeners===void 0&&(this._listeners={});const a=this._listeners;a[e]===void 0&&(a[e]=[]),a[e].indexOf(i)===-1&&a[e].push(i)}hasEventListener(e,i){const a=this._listeners;return a===void 0?!1:a[e]!==void 0&&a[e].indexOf(i)!==-1}removeEventListener(e,i){const a=this._listeners;if(a===void 0)return;const l=a[e];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(e){const i=this._listeners;if(i===void 0)return;const a=i[e.type];if(a!==void 0){e.target=this;const l=a.slice(0);for(let c=0,f=l.length;c<f;c++)l[c].call(this,e);e.target=null}}}const On=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],gh=Math.PI/180,Pp=180/Math.PI;function Ss(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0,a=Math.random()*4294967295|0;return(On[r&255]+On[r>>8&255]+On[r>>16&255]+On[r>>24&255]+"-"+On[e&255]+On[e>>8&255]+"-"+On[e>>16&15|64]+On[e>>24&255]+"-"+On[i&63|128]+On[i>>8&255]+"-"+On[i>>16&255]+On[i>>24&255]+On[a&255]+On[a>>8&255]+On[a>>16&255]+On[a>>24&255]).toLowerCase()}function Tt(r,e,i){return Math.max(e,Math.min(i,r))}function DE(r,e){return(r%e+e)%e}function xh(r,e,i){return(1-i)*r+i*e}function Ji(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:case Uint8ClampedArray:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Wt(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const fm=class fm{constructor(e=0,i=0){this.x=e,this.y=i}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,i){return this.x=e,this.y=i,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const i=this.x,a=this.y,l=e.elements;return this.x=l[0]*i+l[3]*a+l[6],this.y=l[1]*i+l[4]*a+l[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,i){return this.x=Tt(this.x,e.x,i.x),this.y=Tt(this.y,e.y,i.y),this}clampScalar(e,i){return this.x=Tt(this.x,e,i),this.y=Tt(this.y,e,i),this}clampLength(e,i){const a=this.length();return this.divideScalar(a||1).multiplyScalar(Tt(a,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const a=this.dot(e)/i;return Math.acos(Tt(a,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,a=this.y-e.y;return i*i+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this}lerpVectors(e,i,a){return this.x=e.x+(i.x-e.x)*a,this.y=e.y+(i.y-e.y)*a,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this}rotateAround(e,i){const a=Math.cos(i),l=Math.sin(i),c=this.x-e.x,f=this.y-e.y;return this.x=c*a-f*l+e.x,this.y=c*l+f*a+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};fm.prototype.isVector2=!0;let gt=fm;class oo{constructor(e=0,i=0,a=0,l=1){this.isQuaternion=!0,this._x=e,this._y=i,this._z=a,this._w=l}static slerpFlat(e,i,a,l,c,f,p){let m=a[l+0],h=a[l+1],g=a[l+2],v=a[l+3],x=c[f+0],b=c[f+1],T=c[f+2],C=c[f+3];if(v!==C||m!==x||h!==b||g!==T){let y=m*x+h*b+g*T+v*C;y<0&&(x=-x,b=-b,T=-T,C=-C,y=-y);let _=1-p;if(y<.9995){const U=Math.acos(y),z=Math.sin(U);_=Math.sin(_*U)/z,p=Math.sin(p*U)/z,m=m*_+x*p,h=h*_+b*p,g=g*_+T*p,v=v*_+C*p}else{m=m*_+x*p,h=h*_+b*p,g=g*_+T*p,v=v*_+C*p;const U=1/Math.sqrt(m*m+h*h+g*g+v*v);m*=U,h*=U,g*=U,v*=U}}e[i]=m,e[i+1]=h,e[i+2]=g,e[i+3]=v}static multiplyQuaternionsFlat(e,i,a,l,c,f){const p=a[l],m=a[l+1],h=a[l+2],g=a[l+3],v=c[f],x=c[f+1],b=c[f+2],T=c[f+3];return e[i]=p*T+g*v+m*b-h*x,e[i+1]=m*T+g*x+h*v-p*b,e[i+2]=h*T+g*b+p*x-m*v,e[i+3]=g*T-p*v-m*x-h*b,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,i,a,l){return this._x=e,this._y=i,this._z=a,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,i=!0){const a=e._x,l=e._y,c=e._z,f=e._order,p=Math.cos,m=Math.sin,h=p(a/2),g=p(l/2),v=p(c/2),x=m(a/2),b=m(l/2),T=m(c/2);switch(f){case"XYZ":this._x=x*g*v+h*b*T,this._y=h*b*v-x*g*T,this._z=h*g*T+x*b*v,this._w=h*g*v-x*b*T;break;case"YXZ":this._x=x*g*v+h*b*T,this._y=h*b*v-x*g*T,this._z=h*g*T-x*b*v,this._w=h*g*v+x*b*T;break;case"ZXY":this._x=x*g*v-h*b*T,this._y=h*b*v+x*g*T,this._z=h*g*T+x*b*v,this._w=h*g*v-x*b*T;break;case"ZYX":this._x=x*g*v-h*b*T,this._y=h*b*v+x*g*T,this._z=h*g*T-x*b*v,this._w=h*g*v+x*b*T;break;case"YZX":this._x=x*g*v+h*b*T,this._y=h*b*v+x*g*T,this._z=h*g*T-x*b*v,this._w=h*g*v-x*b*T;break;case"XZY":this._x=x*g*v-h*b*T,this._y=h*b*v-x*g*T,this._z=h*g*T+x*b*v,this._w=h*g*v+x*b*T;break;default:it("Quaternion: .setFromEuler() encountered an unknown order: "+f)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,i){const a=i/2,l=Math.sin(a);return this._x=e.x*l,this._y=e.y*l,this._z=e.z*l,this._w=Math.cos(a),this._onChangeCallback(),this}setFromRotationMatrix(e){const i=e.elements,a=i[0],l=i[4],c=i[8],f=i[1],p=i[5],m=i[9],h=i[2],g=i[6],v=i[10],x=a+p+v;if(x>0){const b=.5/Math.sqrt(x+1);this._w=.25/b,this._x=(g-m)*b,this._y=(c-h)*b,this._z=(f-l)*b}else if(a>p&&a>v){const b=2*Math.sqrt(1+a-p-v);this._w=(g-m)/b,this._x=.25*b,this._y=(l+f)/b,this._z=(c+h)/b}else if(p>v){const b=2*Math.sqrt(1+p-a-v);this._w=(c-h)/b,this._x=(l+f)/b,this._y=.25*b,this._z=(m+g)/b}else{const b=2*Math.sqrt(1+v-a-p);this._w=(f-l)/b,this._x=(c+h)/b,this._y=(m+g)/b,this._z=.25*b}return this._onChangeCallback(),this}setFromUnitVectors(e,i){let a=e.dot(i)+1;return a<1e-8?(a=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=a):(this._x=0,this._y=-e.z,this._z=e.y,this._w=a)):(this._x=e.y*i.z-e.z*i.y,this._y=e.z*i.x-e.x*i.z,this._z=e.x*i.y-e.y*i.x,this._w=a),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Tt(this.dot(e),-1,1)))}rotateTowards(e,i){const a=this.angleTo(e);if(a===0)return this;const l=Math.min(1,i/a);return this.slerp(e,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,i){const a=e._x,l=e._y,c=e._z,f=e._w,p=i._x,m=i._y,h=i._z,g=i._w;return this._x=a*g+f*p+l*h-c*m,this._y=l*g+f*m+c*p-a*h,this._z=c*g+f*h+a*m-l*p,this._w=f*g-a*p-l*m-c*h,this._onChangeCallback(),this}slerp(e,i){let a=e._x,l=e._y,c=e._z,f=e._w,p=this.dot(e);p<0&&(a=-a,l=-l,c=-c,f=-f,p=-p);let m=1-i;if(p<.9995){const h=Math.acos(p),g=Math.sin(h);m=Math.sin(m*h)/g,i=Math.sin(i*h)/g,this._x=this._x*m+a*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+f*i,this._onChangeCallback()}else this._x=this._x*m+a*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+f*i,this.normalize();return this}slerpQuaternions(e,i,a){return this.copy(e).slerp(i,a)}random(){const e=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),a=Math.random(),l=Math.sqrt(1-a),c=Math.sqrt(a);return this.set(l*Math.sin(e),l*Math.cos(e),c*Math.sin(i),c*Math.cos(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,i=0){return this._x=e[i],this._y=e[i+1],this._z=e[i+2],this._w=e[i+3],this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._w,e}fromBufferAttribute(e,i){return this._x=e.getX(i),this._y=e.getY(i),this._z=e.getZ(i),this._w=e.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const dm=class dm{constructor(e=0,i=0,a=0){this.x=e,this.y=i,this.z=a}set(e,i,a){return a===void 0&&(a=this.z),this.x=e,this.y=i,this.z=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,i){return this.x=e.x*i.x,this.y=e.y*i.y,this.z=e.z*i.z,this}applyEuler(e){return this.applyQuaternion(Mv.setFromEuler(e))}applyAxisAngle(e,i){return this.applyQuaternion(Mv.setFromAxisAngle(e,i))}applyMatrix3(e){const i=this.x,a=this.y,l=this.z,c=e.elements;return this.x=c[0]*i+c[3]*a+c[6]*l,this.y=c[1]*i+c[4]*a+c[7]*l,this.z=c[2]*i+c[5]*a+c[8]*l,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const i=this.x,a=this.y,l=this.z,c=e.elements,f=1/(c[3]*i+c[7]*a+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*a+c[8]*l+c[12])*f,this.y=(c[1]*i+c[5]*a+c[9]*l+c[13])*f,this.z=(c[2]*i+c[6]*a+c[10]*l+c[14])*f,this}applyQuaternion(e){const i=this.x,a=this.y,l=this.z,c=e.x,f=e.y,p=e.z,m=e.w,h=2*(f*l-p*a),g=2*(p*i-c*l),v=2*(c*a-f*i);return this.x=i+m*h+f*v-p*g,this.y=a+m*g+p*h-c*v,this.z=l+m*v+c*g-f*h,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const i=this.x,a=this.y,l=this.z,c=e.elements;return this.x=c[0]*i+c[4]*a+c[8]*l,this.y=c[1]*i+c[5]*a+c[9]*l,this.z=c[2]*i+c[6]*a+c[10]*l,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,i){return this.x=Tt(this.x,e.x,i.x),this.y=Tt(this.y,e.y,i.y),this.z=Tt(this.z,e.z,i.z),this}clampScalar(e,i){return this.x=Tt(this.x,e,i),this.y=Tt(this.y,e,i),this.z=Tt(this.z,e,i),this}clampLength(e,i){const a=this.length();return this.divideScalar(a||1).multiplyScalar(Tt(a,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this}lerpVectors(e,i,a){return this.x=e.x+(i.x-e.x)*a,this.y=e.y+(i.y-e.y)*a,this.z=e.z+(i.z-e.z)*a,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,i){const a=e.x,l=e.y,c=e.z,f=i.x,p=i.y,m=i.z;return this.x=l*m-c*p,this.y=c*f-a*m,this.z=a*p-l*f,this}projectOnVector(e){const i=e.lengthSq();if(i===0)return this.set(0,0,0);const a=e.dot(this)/i;return this.copy(e).multiplyScalar(a)}projectOnPlane(e){return vh.copy(this).projectOnVector(e),this.sub(vh)}reflect(e){return this.sub(vh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const a=this.dot(e)/i;return Math.acos(Tt(a,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,a=this.y-e.y,l=this.z-e.z;return i*i+a*a+l*l}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,i,a){const l=Math.sin(i)*e;return this.x=l*Math.sin(a),this.y=Math.cos(i)*e,this.z=l*Math.cos(a),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,i,a){return this.x=e*Math.sin(i),this.y=a,this.z=e*Math.cos(i),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(e){const i=this.setFromMatrixColumn(e,0).length(),a=this.setFromMatrixColumn(e,1).length(),l=this.setFromMatrixColumn(e,2).length();return this.x=i,this.y=a,this.z=l,this}setFromMatrixColumn(e,i){return this.fromArray(e.elements,i*4)}setFromMatrix3Column(e,i){return this.fromArray(e.elements,i*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,i=Math.random()*2-1,a=Math.sqrt(1-i*i);return this.x=a*Math.cos(e),this.y=i,this.z=a*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};dm.prototype.isVector3=!0;let se=dm;const vh=new se,Mv=new oo,hm=class hm{constructor(e,i,a,l,c,f,p,m,h){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,i,a,l,c,f,p,m,h)}set(e,i,a,l,c,f,p,m,h){const g=this.elements;return g[0]=e,g[1]=l,g[2]=p,g[3]=i,g[4]=c,g[5]=m,g[6]=a,g[7]=f,g[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const i=this.elements,a=e.elements;return i[0]=a[0],i[1]=a[1],i[2]=a[2],i[3]=a[3],i[4]=a[4],i[5]=a[5],i[6]=a[6],i[7]=a[7],i[8]=a[8],this}extractBasis(e,i,a){return e.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),a.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const i=e.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const a=e.elements,l=i.elements,c=this.elements,f=a[0],p=a[3],m=a[6],h=a[1],g=a[4],v=a[7],x=a[2],b=a[5],T=a[8],C=l[0],y=l[3],_=l[6],U=l[1],z=l[4],N=l[7],L=l[2],O=l[5],I=l[8];return c[0]=f*C+p*U+m*L,c[3]=f*y+p*z+m*O,c[6]=f*_+p*N+m*I,c[1]=h*C+g*U+v*L,c[4]=h*y+g*z+v*O,c[7]=h*_+g*N+v*I,c[2]=x*C+b*U+T*L,c[5]=x*y+b*z+T*O,c[8]=x*_+b*N+T*I,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=e,i[4]*=e,i[7]*=e,i[2]*=e,i[5]*=e,i[8]*=e,this}determinant(){const e=this.elements,i=e[0],a=e[1],l=e[2],c=e[3],f=e[4],p=e[5],m=e[6],h=e[7],g=e[8];return i*f*g-i*p*h-a*c*g+a*p*m+l*c*h-l*f*m}invert(){const e=this.elements,i=e[0],a=e[1],l=e[2],c=e[3],f=e[4],p=e[5],m=e[6],h=e[7],g=e[8],v=g*f-p*h,x=p*m-g*c,b=h*c-f*m,T=i*v+a*x+l*b;if(T===0)return this.set(0,0,0,0,0,0,0,0,0);const C=1/T;return e[0]=v*C,e[1]=(l*h-g*a)*C,e[2]=(p*a-l*f)*C,e[3]=x*C,e[4]=(g*i-l*m)*C,e[5]=(l*c-p*i)*C,e[6]=b*C,e[7]=(a*m-h*i)*C,e[8]=(f*i-a*c)*C,this}transpose(){let e;const i=this.elements;return e=i[1],i[1]=i[3],i[3]=e,e=i[2],i[2]=i[6],i[6]=e,e=i[5],i[5]=i[7],i[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const i=this.elements;return e[0]=i[0],e[1]=i[3],e[2]=i[6],e[3]=i[1],e[4]=i[4],e[5]=i[7],e[6]=i[2],e[7]=i[5],e[8]=i[8],this}setUvTransform(e,i,a,l,c,f,p){const m=Math.cos(c),h=Math.sin(c);return this.set(a*m,a*h,-a*(m*f+h*p)+f+e,-l*h,l*m,-l*(-h*f+m*p)+p+i,0,0,1),this}scale(e,i){return eo("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(_h.makeScale(e,i)),this}rotate(e){return eo("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(_h.makeRotation(-e)),this}translate(e,i){return eo("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(_h.makeTranslation(e,i)),this}makeTranslation(e,i){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,i,0,0,1),this}makeRotation(e){const i=Math.cos(e),a=Math.sin(e);return this.set(i,-a,0,a,i,0,0,0,1),this}makeScale(e,i){return this.set(e,0,0,0,i,0,0,0,1),this}equals(e){const i=this.elements,a=e.elements;for(let l=0;l<9;l++)if(i[l]!==a[l])return!1;return!0}fromArray(e,i=0){for(let a=0;a<9;a++)this.elements[a]=e[a+i];return this}toArray(e=[],i=0){const a=this.elements;return e[i]=a[0],e[i+1]=a[1],e[i+2]=a[2],e[i+3]=a[3],e[i+4]=a[4],e[i+5]=a[5],e[i+6]=a[6],e[i+7]=a[7],e[i+8]=a[8],e}clone(){return new this.constructor().fromArray(this.elements)}};hm.prototype.isMatrix3=!0;let rt=hm;const _h=new rt,Ev=new rt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Tv=new rt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function UE(){const r={enabled:!0,workingColorSpace:Lu,spaces:{},convert:function(l,c,f){return this.enabled===!1||c===f||!c||!f||(this.spaces[c].transfer===Ft&&(l.r=Pa(l.r),l.g=Pa(l.g),l.b=Pa(l.b)),this.spaces[c].primaries!==this.spaces[f].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[f].fromXYZ)),this.spaces[f].transfer===Ft&&(l.r=to(l.r),l.g=to(l.g),l.b=to(l.b))),l},workingToColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},colorSpaceToWorking:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===_s?Ou:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,f){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[f].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,c){return eo("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(l,c)},toWorkingColorSpace:function(l,c){return eo("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(l,c)}},e=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],a=[.3127,.329];return r.define({[Lu]:{primaries:e,whitePoint:a,transfer:Ou,toXYZ:Ev,fromXYZ:Tv,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:fi},outputColorSpaceConfig:{drawingBufferColorSpace:fi}},[fi]:{primaries:e,whitePoint:a,transfer:Ft,toXYZ:Ev,fromXYZ:Tv,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:fi}}}),r}const Et=UE();function Pa(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function to(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let Pr;class LE{static getDataURL(e,i="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let a;if(e instanceof HTMLCanvasElement)a=e;else{Pr===void 0&&(Pr=Iu("canvas")),Pr.width=e.width,Pr.height=e.height;const l=Pr.getContext("2d");e instanceof ImageData?l.putImageData(e,0,0):l.drawImage(e,0,0,e.width,e.height),a=Pr}return a.toDataURL(i)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const i=Iu("canvas");i.width=e.width,i.height=e.height;const a=i.getContext("2d");a.drawImage(e,0,0,e.width,e.height);const l=a.getImageData(0,0,e.width,e.height),c=l.data;for(let f=0;f<c.length;f++)c[f]=Pa(c[f]/255)*255;return a.putImageData(l,0,0),i}else if(e.data){const i=e.data.slice(0);for(let a=0;a<i.length;a++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[a]=Math.floor(Pa(i[a]/255)*255):i[a]=Pa(i[a]);return{data:i,width:e.width,height:e.height}}else return it("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let OE=0;class lm{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:OE++}),this.uuid=Ss(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?e.set(i.videoWidth,i.videoHeight,0):typeof VideoFrame<"u"&&i instanceof VideoFrame?e.set(i.displayWidth,i.displayHeight,0):i!==null?e.set(i.width,i.height,i.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const a={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let f=0,p=l.length;f<p;f++)l[f].isDataTexture?c.push(Sh(l[f].image)):c.push(Sh(l[f]))}else c=Sh(l);a.url=c}return i||(e.images[this.uuid]=a),a}}function Sh(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?LE.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(it("Texture: Unable to serialize Texture."),{})}let PE=0;const yh=new se;class Bn extends tr{constructor(e=Bn.DEFAULT_IMAGE,i=Bn.DEFAULT_MAPPING,a=Ua,l=Ua,c=In,f=Ys,p=Fi,m=Ri,h=Bn.DEFAULT_ANISOTROPY,g=_s){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:PE++}),this.uuid=Ss(),this.name="",this.source=new lm(e),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=a,this.wrapT=l,this.magFilter=c,this.minFilter=f,this.anisotropy=h,this.format=p,this.internalFormat=null,this.type=m,this.offset=new gt(0,0),this.repeat=new gt(1,1),this.center=new gt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new rt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(yh).x}get height(){return this.source.getSize(yh).y}get depth(){return this.source.getSize(yh).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const i in e){const a=e[i];if(a===void 0){it(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){it(`Texture.setValues(): property '${i}' does not exist.`);continue}l&&a&&l.isVector2&&a.isVector2||l&&a&&l.isVector3&&a.isVector3||l&&a&&l.isMatrix3&&a.isMatrix3?l.copy(a):this[i]=a}}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const a={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(a.userData=this.userData),i||(e.textures[this.uuid]=a),a}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Y_)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ip:e.x=e.x-Math.floor(e.x);break;case Ua:e.x=e.x<0?0:1;break;case ap:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ip:e.y=e.y-Math.floor(e.y);break;case Ua:e.y=e.y<0?0:1;break;case ap:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Bn.DEFAULT_IMAGE=null;Bn.DEFAULT_MAPPING=Y_;Bn.DEFAULT_ANISOTROPY=1;const pm=class pm{constructor(e=0,i=0,a=0,l=1){this.x=e,this.y=i,this.z=a,this.w=l}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,i,a,l){return this.x=e,this.y=i,this.z=a,this.w=l,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this.w=e.w+i.w,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this.w+=e.w*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this.w=e.w-i.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const i=this.x,a=this.y,l=this.z,c=this.w,f=e.elements;return this.x=f[0]*i+f[4]*a+f[8]*l+f[12]*c,this.y=f[1]*i+f[5]*a+f[9]*l+f[13]*c,this.z=f[2]*i+f[6]*a+f[10]*l+f[14]*c,this.w=f[3]*i+f[7]*a+f[11]*l+f[15]*c,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const i=Math.sqrt(1-e.w*e.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/i,this.y=e.y/i,this.z=e.z/i),this}setAxisAngleFromRotationMatrix(e){let i,a,l,c;const m=e.elements,h=m[0],g=m[4],v=m[8],x=m[1],b=m[5],T=m[9],C=m[2],y=m[6],_=m[10];if(Math.abs(g-x)<.01&&Math.abs(v-C)<.01&&Math.abs(T-y)<.01){if(Math.abs(g+x)<.1&&Math.abs(v+C)<.1&&Math.abs(T+y)<.1&&Math.abs(h+b+_-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const z=(h+1)/2,N=(b+1)/2,L=(_+1)/2,O=(g+x)/4,I=(v+C)/4,A=(T+y)/4;return z>N&&z>L?z<.01?(a=0,l=.707106781,c=.707106781):(a=Math.sqrt(z),l=O/a,c=I/a):N>L?N<.01?(a=.707106781,l=0,c=.707106781):(l=Math.sqrt(N),a=O/l,c=A/l):L<.01?(a=.707106781,l=.707106781,c=0):(c=Math.sqrt(L),a=I/c,l=A/c),this.set(a,l,c,i),this}let U=Math.sqrt((y-T)*(y-T)+(v-C)*(v-C)+(x-g)*(x-g));return Math.abs(U)<.001&&(U=1),this.x=(y-T)/U,this.y=(v-C)/U,this.z=(x-g)/U,this.w=Math.acos((h+b+_-1)/2),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,i){return this.x=Tt(this.x,e.x,i.x),this.y=Tt(this.y,e.y,i.y),this.z=Tt(this.z,e.z,i.z),this.w=Tt(this.w,e.w,i.w),this}clampScalar(e,i){return this.x=Tt(this.x,e,i),this.y=Tt(this.y,e,i),this.z=Tt(this.z,e,i),this.w=Tt(this.w,e,i),this}clampLength(e,i){const a=this.length();return this.divideScalar(a||1).multiplyScalar(Tt(a,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this.w+=(e.w-this.w)*i,this}lerpVectors(e,i,a){return this.x=e.x+(i.x-e.x)*a,this.y=e.y+(i.y-e.y)*a,this.z=e.z+(i.z-e.z)*a,this.w=e.w+(i.w-e.w)*a,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this.w=e[i+3],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e[i+3]=this.w,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this.w=e.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};pm.prototype.isVector4=!0;let ln=pm;class IE extends tr{constructor(e=1,i=1,a={}){super(),a=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:In,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},a),this.isRenderTarget=!0,this.width=e,this.height=i,this.depth=a.depth,this.scissor=new ln(0,0,e,i),this.scissorTest=!1,this.viewport=new ln(0,0,e,i),this.textures=[];const l={width:e,height:i,depth:a.depth},c=new Bn(l),f=a.count;for(let p=0;p<f;p++)this.textures[p]=c.clone(),this.textures[p].isRenderTargetTexture=!0,this.textures[p].renderTarget=this;this._setTextureOptions(a),this.depthBuffer=a.depthBuffer,this.stencilBuffer=a.stencilBuffer,this.resolveColorBuffer=a.resolveColorBuffer,this.resolveDepthBuffer=a.resolveDepthBuffer,this.resolveStencilBuffer=a.resolveStencilBuffer,this.storeMultisampledColorBuffer=a.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=a.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=a.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=a.depthTexture,this.samples=a.samples,this.multiview=a.multiview,this.useArrayDepthTexture=a.useArrayDepthTexture}_setTextureOptions(e={}){const i={minFilter:In,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(i.mapping=e.mapping),e.wrapS!==void 0&&(i.wrapS=e.wrapS),e.wrapT!==void 0&&(i.wrapT=e.wrapT),e.wrapR!==void 0&&(i.wrapR=e.wrapR),e.magFilter!==void 0&&(i.magFilter=e.magFilter),e.minFilter!==void 0&&(i.minFilter=e.minFilter),e.format!==void 0&&(i.format=e.format),e.type!==void 0&&(i.type=e.type),e.anisotropy!==void 0&&(i.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(i.colorSpace=e.colorSpace),e.flipY!==void 0&&(i.flipY=e.flipY),e.generateMipmaps!==void 0&&(i.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(i.internalFormat=e.internalFormat);for(let a=0;a<this.textures.length;a++)this.textures[a].setValues(i)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,i,a=1){if(this.width!==e||this.height!==i||this.depth!==a){this.width=e,this.height=i,this.depth=a;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=e,this.textures[l].image.height=i,this.textures[l].image.depth=a,this.textures[l].isData3DTexture!==!0&&(this.textures[l].isArrayTexture=this.textures[l].image.depth>1);this.dispose()}this.viewport.set(0,0,e,i),this.scissor.set(0,0,e,i)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,a=e.textures.length;i<a;i++){this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},e.textures[i].image);this.textures[i].source=new lm(l)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const i=e.depthTexture.clone();i.renderTarget=null,this.depthTexture=i}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Hi extends IE{constructor(e=1,i=1,a={}){super(e,i,a),this.isWebGLRenderTarget=!0}}class aS extends Bn{constructor(e=null,i=1,a=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:i,height:a,depth:l},this.magFilter=Un,this.minFilter=Un,this.wrapR=Ua,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class BE extends Bn{constructor(e=null,i=1,a=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:i,height:a,depth:l},this.magFilter=Un,this.minFilter=Un,this.wrapR=Ua,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}const Vu=class Vu{constructor(e,i,a,l,c,f,p,m,h,g,v,x,b,T,C,y){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,i,a,l,c,f,p,m,h,g,v,x,b,T,C,y)}set(e,i,a,l,c,f,p,m,h,g,v,x,b,T,C,y){const _=this.elements;return _[0]=e,_[4]=i,_[8]=a,_[12]=l,_[1]=c,_[5]=f,_[9]=p,_[13]=m,_[2]=h,_[6]=g,_[10]=v,_[14]=x,_[3]=b,_[7]=T,_[11]=C,_[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Vu().fromArray(this.elements)}copy(e){const i=this.elements,a=e.elements;return i[0]=a[0],i[1]=a[1],i[2]=a[2],i[3]=a[3],i[4]=a[4],i[5]=a[5],i[6]=a[6],i[7]=a[7],i[8]=a[8],i[9]=a[9],i[10]=a[10],i[11]=a[11],i[12]=a[12],i[13]=a[13],i[14]=a[14],i[15]=a[15],this}copyPosition(e){const i=this.elements,a=e.elements;return i[12]=a[12],i[13]=a[13],i[14]=a[14],this}setFromMatrix3(e){const i=e.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(e,i,a){return this.determinantAffine()===0?(e.set(1,0,0),i.set(0,1,0),a.set(0,0,1),this):(e.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),a.setFromMatrixColumn(this,2),this)}makeBasis(e,i,a){return this.set(e.x,i.x,a.x,0,e.y,i.y,a.y,0,e.z,i.z,a.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const i=this.elements,a=e.elements,l=1/Ir.setFromMatrixColumn(e,0).length(),c=1/Ir.setFromMatrixColumn(e,1).length(),f=1/Ir.setFromMatrixColumn(e,2).length();return i[0]=a[0]*l,i[1]=a[1]*l,i[2]=a[2]*l,i[3]=0,i[4]=a[4]*c,i[5]=a[5]*c,i[6]=a[6]*c,i[7]=0,i[8]=a[8]*f,i[9]=a[9]*f,i[10]=a[10]*f,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(e){const i=this.elements,a=e.x,l=e.y,c=e.z,f=Math.cos(a),p=Math.sin(a),m=Math.cos(l),h=Math.sin(l),g=Math.cos(c),v=Math.sin(c);if(e.order==="XYZ"){const x=f*g,b=f*v,T=p*g,C=p*v;i[0]=m*g,i[4]=-m*v,i[8]=h,i[1]=b+T*h,i[5]=x-C*h,i[9]=-p*m,i[2]=C-x*h,i[6]=T+b*h,i[10]=f*m}else if(e.order==="YXZ"){const x=m*g,b=m*v,T=h*g,C=h*v;i[0]=x+C*p,i[4]=T*p-b,i[8]=f*h,i[1]=f*v,i[5]=f*g,i[9]=-p,i[2]=b*p-T,i[6]=C+x*p,i[10]=f*m}else if(e.order==="ZXY"){const x=m*g,b=m*v,T=h*g,C=h*v;i[0]=x-C*p,i[4]=-f*v,i[8]=T+b*p,i[1]=b+T*p,i[5]=f*g,i[9]=C-x*p,i[2]=-f*h,i[6]=p,i[10]=f*m}else if(e.order==="ZYX"){const x=f*g,b=f*v,T=p*g,C=p*v;i[0]=m*g,i[4]=T*h-b,i[8]=x*h+C,i[1]=m*v,i[5]=C*h+x,i[9]=b*h-T,i[2]=-h,i[6]=p*m,i[10]=f*m}else if(e.order==="YZX"){const x=f*m,b=f*h,T=p*m,C=p*h;i[0]=m*g,i[4]=C-x*v,i[8]=T*v+b,i[1]=v,i[5]=f*g,i[9]=-p*g,i[2]=-h*g,i[6]=b*v+T,i[10]=x-C*v}else if(e.order==="XZY"){const x=f*m,b=f*h,T=p*m,C=p*h;i[0]=m*g,i[4]=-v,i[8]=h*g,i[1]=x*v+C,i[5]=f*g,i[9]=b*v-T,i[2]=T*v-b,i[6]=p*g,i[10]=C*v+x}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(e){return this.compose(FE,e,zE)}lookAt(e,i,a){const l=this.elements;return ci.subVectors(e,i),ci.lengthSq()===0&&(ci.z=1),ci.normalize(),hs.crossVectors(a,ci),hs.lengthSq()===0&&(Math.abs(a.z)===1?ci.x+=1e-4:ci.z+=1e-4,ci.normalize(),hs.crossVectors(a,ci)),hs.normalize(),jc.crossVectors(ci,hs),l[0]=hs.x,l[4]=jc.x,l[8]=ci.x,l[1]=hs.y,l[5]=jc.y,l[9]=ci.y,l[2]=hs.z,l[6]=jc.z,l[10]=ci.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const a=e.elements,l=i.elements,c=this.elements,f=a[0],p=a[4],m=a[8],h=a[12],g=a[1],v=a[5],x=a[9],b=a[13],T=a[2],C=a[6],y=a[10],_=a[14],U=a[3],z=a[7],N=a[11],L=a[15],O=l[0],I=l[4],A=l[8],B=l[12],X=l[1],q=l[5],Q=l[9],fe=l[13],Y=l[2],te=l[6],H=l[10],F=l[14],J=l[3],$=l[7],he=l[11],D=l[15];return c[0]=f*O+p*X+m*Y+h*J,c[4]=f*I+p*q+m*te+h*$,c[8]=f*A+p*Q+m*H+h*he,c[12]=f*B+p*fe+m*F+h*D,c[1]=g*O+v*X+x*Y+b*J,c[5]=g*I+v*q+x*te+b*$,c[9]=g*A+v*Q+x*H+b*he,c[13]=g*B+v*fe+x*F+b*D,c[2]=T*O+C*X+y*Y+_*J,c[6]=T*I+C*q+y*te+_*$,c[10]=T*A+C*Q+y*H+_*he,c[14]=T*B+C*fe+y*F+_*D,c[3]=U*O+z*X+N*Y+L*J,c[7]=U*I+z*q+N*te+L*$,c[11]=U*A+z*Q+N*H+L*he,c[15]=U*B+z*fe+N*F+L*D,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[4]*=e,i[8]*=e,i[12]*=e,i[1]*=e,i[5]*=e,i[9]*=e,i[13]*=e,i[2]*=e,i[6]*=e,i[10]*=e,i[14]*=e,i[3]*=e,i[7]*=e,i[11]*=e,i[15]*=e,this}determinant(){const e=this.elements,i=e[0],a=e[4],l=e[8],c=e[12],f=e[1],p=e[5],m=e[9],h=e[13],g=e[2],v=e[6],x=e[10],b=e[14],T=e[3],C=e[7],y=e[11],_=e[15],U=m*b-h*x,z=p*b-h*v,N=p*x-m*v,L=f*b-h*g,O=f*x-m*g,I=f*v-p*g;return i*(C*U-y*z+_*N)-a*(T*U-y*L+_*O)+l*(T*z-C*L+_*I)-c*(T*N-C*O+y*I)}determinantAffine(){const e=this.elements,i=e[0],a=e[4],l=e[8],c=e[1],f=e[5],p=e[9],m=e[2],h=e[6],g=e[10];return i*(f*g-p*h)-a*(c*g-p*m)+l*(c*h-f*m)}transpose(){const e=this.elements;let i;return i=e[1],e[1]=e[4],e[4]=i,i=e[2],e[2]=e[8],e[8]=i,i=e[6],e[6]=e[9],e[9]=i,i=e[3],e[3]=e[12],e[12]=i,i=e[7],e[7]=e[13],e[13]=i,i=e[11],e[11]=e[14],e[14]=i,this}setPosition(e,i,a){const l=this.elements;return e.isVector3?(l[12]=e.x,l[13]=e.y,l[14]=e.z):(l[12]=e,l[13]=i,l[14]=a),this}invert(){const e=this.elements,i=e[0],a=e[1],l=e[2],c=e[3],f=e[4],p=e[5],m=e[6],h=e[7],g=e[8],v=e[9],x=e[10],b=e[11],T=e[12],C=e[13],y=e[14],_=e[15],U=i*p-a*f,z=i*m-l*f,N=i*h-c*f,L=a*m-l*p,O=a*h-c*p,I=l*h-c*m,A=g*C-v*T,B=g*y-x*T,X=g*_-b*T,q=v*y-x*C,Q=v*_-b*C,fe=x*_-b*y,Y=U*fe-z*Q+N*q+L*X-O*B+I*A;if(Y===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const te=1/Y;return e[0]=(p*fe-m*Q+h*q)*te,e[1]=(l*Q-a*fe-c*q)*te,e[2]=(C*I-y*O+_*L)*te,e[3]=(x*O-v*I-b*L)*te,e[4]=(m*X-f*fe-h*B)*te,e[5]=(i*fe-l*X+c*B)*te,e[6]=(y*N-T*I-_*z)*te,e[7]=(g*I-x*N+b*z)*te,e[8]=(f*Q-p*X+h*A)*te,e[9]=(a*X-i*Q-c*A)*te,e[10]=(T*O-C*N+_*U)*te,e[11]=(v*N-g*O-b*U)*te,e[12]=(p*B-f*q-m*A)*te,e[13]=(i*q-a*B+l*A)*te,e[14]=(C*z-T*L-y*U)*te,e[15]=(g*L-v*z+x*U)*te,this}scale(e){const i=this.elements,a=e.x,l=e.y,c=e.z;return i[0]*=a,i[4]*=l,i[8]*=c,i[1]*=a,i[5]*=l,i[9]*=c,i[2]*=a,i[6]*=l,i[10]*=c,i[3]*=a,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const e=this.elements,i=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],a=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],l=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(i,a,l))}makeTranslation(e,i,a){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,i,0,0,1,a,0,0,0,1),this}makeRotationX(e){const i=Math.cos(e),a=Math.sin(e);return this.set(1,0,0,0,0,i,-a,0,0,a,i,0,0,0,0,1),this}makeRotationY(e){const i=Math.cos(e),a=Math.sin(e);return this.set(i,0,a,0,0,1,0,0,-a,0,i,0,0,0,0,1),this}makeRotationZ(e){const i=Math.cos(e),a=Math.sin(e);return this.set(i,-a,0,0,a,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,i){const a=Math.cos(i),l=Math.sin(i),c=1-a,f=e.x,p=e.y,m=e.z,h=c*f,g=c*p;return this.set(h*f+a,h*p-l*m,h*m+l*p,0,h*p+l*m,g*p+a,g*m-l*f,0,h*m-l*p,g*m+l*f,c*m*m+a,0,0,0,0,1),this}makeScale(e,i,a){return this.set(e,0,0,0,0,i,0,0,0,0,a,0,0,0,0,1),this}makeShear(e,i,a,l,c,f){return this.set(1,a,c,0,e,1,f,0,i,l,1,0,0,0,0,1),this}compose(e,i,a){const l=this.elements,c=i._x,f=i._y,p=i._z,m=i._w,h=c+c,g=f+f,v=p+p,x=c*h,b=c*g,T=c*v,C=f*g,y=f*v,_=p*v,U=m*h,z=m*g,N=m*v,L=a.x,O=a.y,I=a.z;return l[0]=(1-(C+_))*L,l[1]=(b+N)*L,l[2]=(T-z)*L,l[3]=0,l[4]=(b-N)*O,l[5]=(1-(x+_))*O,l[6]=(y+U)*O,l[7]=0,l[8]=(T+z)*I,l[9]=(y-U)*I,l[10]=(1-(x+C))*I,l[11]=0,l[12]=e.x,l[13]=e.y,l[14]=e.z,l[15]=1,this}decompose(e,i,a){const l=this.elements;e.x=l[12],e.y=l[13],e.z=l[14];const c=this.determinantAffine();if(c===0)return a.set(1,1,1),i.identity(),this;let f=Ir.set(l[0],l[1],l[2]).length();const p=Ir.set(l[4],l[5],l[6]).length(),m=Ir.set(l[8],l[9],l[10]).length();c<0&&(f=-f),Oi.copy(this);const h=1/f,g=1/p,v=1/m;return Oi.elements[0]*=h,Oi.elements[1]*=h,Oi.elements[2]*=h,Oi.elements[4]*=g,Oi.elements[5]*=g,Oi.elements[6]*=g,Oi.elements[8]*=v,Oi.elements[9]*=v,Oi.elements[10]*=v,i.setFromRotationMatrix(Oi),a.x=f,a.y=p,a.z=m,this}makePerspective(e,i,a,l,c,f,p=ea,m=!1){const h=this.elements,g=2*c/(i-e),v=2*c/(a-l),x=(i+e)/(i-e),b=(a+l)/(a-l);let T,C;if(m)T=c/(f-c),C=f*c/(f-c);else if(p===ea)T=-(f+c)/(f-c),C=-2*f*c/(f-c);else if(p===Pu)T=-f/(f-c),C=-f*c/(f-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+p);return h[0]=g,h[4]=0,h[8]=x,h[12]=0,h[1]=0,h[5]=v,h[9]=b,h[13]=0,h[2]=0,h[6]=0,h[10]=T,h[14]=C,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(e,i,a,l,c,f,p=ea,m=!1){const h=this.elements,g=2/(i-e),v=2/(a-l),x=-(i+e)/(i-e),b=-(a+l)/(a-l);let T,C;if(m)T=1/(f-c),C=f/(f-c);else if(p===ea)T=-2/(f-c),C=-(f+c)/(f-c);else if(p===Pu)T=-1/(f-c),C=-c/(f-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+p);return h[0]=g,h[4]=0,h[8]=0,h[12]=x,h[1]=0,h[5]=v,h[9]=0,h[13]=b,h[2]=0,h[6]=0,h[10]=T,h[14]=C,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(e){const i=this.elements,a=e.elements;for(let l=0;l<16;l++)if(i[l]!==a[l])return!1;return!0}fromArray(e,i=0){for(let a=0;a<16;a++)this.elements[a]=e[a+i];return this}toArray(e=[],i=0){const a=this.elements;return e[i]=a[0],e[i+1]=a[1],e[i+2]=a[2],e[i+3]=a[3],e[i+4]=a[4],e[i+5]=a[5],e[i+6]=a[6],e[i+7]=a[7],e[i+8]=a[8],e[i+9]=a[9],e[i+10]=a[10],e[i+11]=a[11],e[i+12]=a[12],e[i+13]=a[13],e[i+14]=a[14],e[i+15]=a[15],e}};Vu.prototype.isMatrix4=!0;let tn=Vu;const Ir=new se,Oi=new tn,FE=new se(0,0,0),zE=new se(1,1,1),hs=new se,jc=new se,ci=new se,Av=new tn,Rv=new oo;class er{constructor(e=0,i=0,a=0,l=er.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=i,this._z=a,this._order=l}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,i,a,l=this._order){return this._x=e,this._y=i,this._z=a,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,i=this._order,a=!0){const l=e.elements,c=l[0],f=l[4],p=l[8],m=l[1],h=l[5],g=l[9],v=l[2],x=l[6],b=l[10];switch(i){case"XYZ":this._y=Math.asin(Tt(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-g,b),this._z=Math.atan2(-f,c)):(this._x=Math.atan2(x,h),this._z=0);break;case"YXZ":this._x=Math.asin(-Tt(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(p,b),this._z=Math.atan2(m,h)):(this._y=Math.atan2(-v,c),this._z=0);break;case"ZXY":this._x=Math.asin(Tt(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(-v,b),this._z=Math.atan2(-f,h)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-Tt(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(x,b),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-f,h));break;case"YZX":this._z=Math.asin(Tt(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-g,h),this._y=Math.atan2(-v,c)):(this._x=0,this._y=Math.atan2(p,b));break;case"XZY":this._z=Math.asin(-Tt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(x,h),this._y=Math.atan2(p,c)):(this._x=Math.atan2(-g,b),this._y=0);break;default:it("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,a===!0&&this._onChangeCallback(),this}setFromQuaternion(e,i,a){return Av.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Av,i,a)}setFromVector3(e,i=this._order){return this.set(e.x,e.y,e.z,i)}reorder(e){return Rv.setFromEuler(this),this.setFromQuaternion(Rv,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}er.DEFAULT_ORDER="XYZ";class sS{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let HE=0;const wv=new se,Br=new oo,Ta=new tn,qc=new se,ll=new se,GE=new se,VE=new oo,Cv=new se(1,0,0),Nv=new se(0,1,0),Dv=new se(0,0,1),Uv={type:"added"},kE={type:"removed"},Fr={type:"childadded",child:null},bh={type:"childremoved",child:null};class Fn extends tr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:HE++}),this.uuid=Ss(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Fn.DEFAULT_UP.clone();const e=new se,i=new er,a=new oo,l=new se(1,1,1);function c(){a.setFromEuler(i,!1)}function f(){i.setFromQuaternion(a,void 0,!1)}i._onChange(c),a._onChange(f),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:a},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new tn},normalMatrix:{value:new rt}}),this.matrix=new tn,this.matrixWorld=new tn,this.matrixAutoUpdate=Fn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Fn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new sS,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,i){this.quaternion.setFromAxisAngle(e,i)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,i){return Br.setFromAxisAngle(e,i),this.quaternion.multiply(Br),this}rotateOnWorldAxis(e,i){return Br.setFromAxisAngle(e,i),this.quaternion.premultiply(Br),this}rotateX(e){return this.rotateOnAxis(Cv,e)}rotateY(e){return this.rotateOnAxis(Nv,e)}rotateZ(e){return this.rotateOnAxis(Dv,e)}translateOnAxis(e,i){return wv.copy(e).applyQuaternion(this.quaternion),this.position.add(wv.multiplyScalar(i)),this}translateX(e){return this.translateOnAxis(Cv,e)}translateY(e){return this.translateOnAxis(Nv,e)}translateZ(e){return this.translateOnAxis(Dv,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ta.copy(this.matrixWorld).invert())}lookAt(e,i,a){e.isVector3?qc.copy(e):qc.set(e,i,a);const l=this.parent;this.updateWorldMatrix(!0,!1),ll.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ta.lookAt(ll,qc,this.up):Ta.lookAt(qc,ll,this.up),this.quaternion.setFromRotationMatrix(Ta),l&&(Ta.extractRotation(l.matrixWorld),Br.setFromRotationMatrix(Ta),this.quaternion.premultiply(Br.invert()))}add(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return e===this?(wt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Uv),Fr.child=e,this.dispatchEvent(Fr),Fr.child=null):wt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let a=0;a<arguments.length;a++)this.remove(arguments[a]);return this}const i=this.children.indexOf(e);return i!==-1&&(e.parent=null,this.children.splice(i,1),e.dispatchEvent(kE),bh.child=e,this.dispatchEvent(bh),bh.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ta.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ta.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ta),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Uv),Fr.child=e,this.dispatchEvent(Fr),Fr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,i){if(this[e]===i)return this;for(let a=0,l=this.children.length;a<l;a++){const f=this.children[a].getObjectByProperty(e,i);if(f!==void 0)return f}}getObjectsByProperty(e,i,a=[]){this[e]===i&&a.push(this);const l=this.children;for(let c=0,f=l.length;c<f;c++)l[c].getObjectsByProperty(e,i,a);return a}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ll,e,GE),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ll,VE,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return e.set(i[8],i[9],i[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);const i=this.children;for(let a=0,l=i.length;a<l;a++)i[a].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const i=this.children;for(let a=0,l=i.length;a<l;a++)i[a].traverseVisible(e)}traverseAncestors(e){const i=this.parent;i!==null&&(e(i),i.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const i=e.x,a=e.y,l=e.z,c=this.matrix.elements;c[12]+=i-c[0]*i-c[4]*a-c[8]*l,c[13]+=a-c[1]*i-c[5]*a-c[9]*l,c[14]+=l-c[2]*i-c[6]*a-c[10]*l}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const i=this.children;for(let a=0,l=i.length;a<l;a++)i[a].updateMatrixWorld(e)}updateWorldMatrix(e,i,a=!1){const l=this.parent;if(e===!0&&l!==null&&l.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||a)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,a=!0),i===!0){const c=this.children;for(let f=0,p=c.length;f<p;f++)c[f].updateWorldMatrix(!1,!0,a)}}toJSON(e){const i=e===void 0||typeof e=="string",a={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},a.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,l.name=this.name,l.castShadow=this.castShadow,l.receiveShadow=this.receiveShadow,l.visible=this.visible,l.frustumCulled=this.frustumCulled,l.renderOrder=this.renderOrder,l.static=this.static,l.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.pivot!==null&&(l.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(l.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(l.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(p=>({...p,boundingBox:p.boundingBox?p.boundingBox.toJSON():void 0,boundingSphere:p.boundingSphere?p.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(p=>({...p})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(e),l.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function c(p,m){return p[m.uuid]===void 0&&(p[m.uuid]=m.toJSON(e)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(e.geometries,this.geometry);const p=this.geometry.parameters;if(p!==void 0&&p.shapes!==void 0){const m=p.shapes;if(Array.isArray(m))for(let h=0,g=m.length;h<g;h++){const v=m[h];c(e.shapes,v)}else c(e.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(e.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const p=[];for(let m=0,h=this.material.length;m<h;m++)p.push(c(e.materials,this.material[m]));l.material=p}else l.material=c(e.materials,this.material);if(this.children.length>0){l.children=[];for(let p=0;p<this.children.length;p++)l.children.push(this.children[p].toJSON(e).object)}if(this.animations.length>0){l.animations=[];for(let p=0;p<this.animations.length;p++){const m=this.animations[p];l.animations.push(c(e.animations,m))}}if(i){const p=f(e.geometries),m=f(e.materials),h=f(e.textures),g=f(e.images),v=f(e.shapes),x=f(e.skeletons),b=f(e.animations),T=f(e.nodes);p.length>0&&(a.geometries=p),m.length>0&&(a.materials=m),h.length>0&&(a.textures=h),g.length>0&&(a.images=g),v.length>0&&(a.shapes=v),x.length>0&&(a.skeletons=x),b.length>0&&(a.animations=b),T.length>0&&(a.nodes=T)}return a.object=l,a;function f(p){const m=[];for(const h in p){const g=p[h];delete g.metadata,m.push(g)}return m}}clone(e){return new this.constructor().copy(this,e)}copy(e,i=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),i===!0)for(let a=0;a<e.children.length;a++){const l=e.children[a];this.add(l.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}Fn.DEFAULT_UP=new se(0,1,0);Fn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Fn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Yc extends Fn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const WE={type:"move"};class Mh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Yc,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Yc,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new se,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new se),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Yc,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new se,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new se,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const i=this._hand;if(i)for(const a of e.hand.values())this._getHandJoint(i,a)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,i,a){let l=null,c=null,f=null;const p=this._targetRay,m=this._grip,h=this._hand;if(e&&i.session.visibilityState!=="visible-blurred"){if(h&&e.hand){f=!0;for(const C of e.hand.values()){const y=i.getJointPose(C,a),_=this._getHandJoint(h,C);y!==null&&(_.matrix.fromArray(y.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=y.radius),_.visible=y!==null}const g=h.joints["index-finger-tip"],v=h.joints["thumb-tip"],x=g.position.distanceTo(v.position),b=.02,T=.005;h.inputState.pinching&&x>b+T?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!h.inputState.pinching&&x<=b-T&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else m!==null&&e.gripSpace&&(c=i.getPose(e.gripSpace,a),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1,m.eventsEnabled&&m.dispatchEvent({type:"gripUpdated",data:e,target:this})));p!==null&&(l=i.getPose(e.targetRaySpace,a),l===null&&c!==null&&(l=c),l!==null&&(p.matrix.fromArray(l.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,l.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(l.linearVelocity)):p.hasLinearVelocity=!1,l.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(l.angularVelocity)):p.hasAngularVelocity=!1,this.dispatchEvent(WE)))}return p!==null&&(p.visible=l!==null),m!==null&&(m.visible=c!==null),h!==null&&(h.visible=f!==null),this}_getHandJoint(e,i){if(e.joints[i.jointName]===void 0){const a=new Yc;a.matrixAutoUpdate=!1,a.visible=!1,e.joints[i.jointName]=a,e.add(a)}return e.joints[i.jointName]}}const rS={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ps={h:0,s:0,l:0},Zc={h:0,s:0,l:0};function Eh(r,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?r+(e-r)*6*i:i<1/2?e:i<2/3?r+(e-r)*6*(2/3-i):r}class bt{constructor(e,i,a){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,i,a)}set(e,i,a){if(i===void 0&&a===void 0){const l=e;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(e,i,a);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,i=fi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Et.colorSpaceToWorking(this,i),this}setRGB(e,i,a,l=Et.workingColorSpace){return this.r=e,this.g=i,this.b=a,Et.colorSpaceToWorking(this,l),this}setHSL(e,i,a,l=Et.workingColorSpace){if(e=DE(e,1),i=Tt(i,0,1),a=Tt(a,0,1),i===0)this.r=this.g=this.b=a;else{const c=a<=.5?a*(1+i):a+i-a*i,f=2*a-c;this.r=Eh(f,c,e+1/3),this.g=Eh(f,c,e),this.b=Eh(f,c,e-1/3)}return Et.colorSpaceToWorking(this,l),this}setStyle(e,i=fi){function a(c){c!==void 0&&parseFloat(c)<1&&it("Color: Alpha component of "+e+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(e)){let c;const f=l[1],p=l[2];switch(f){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(p))return a(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(p))return a(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(p))return a(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:it("Color: Unknown color model "+e)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(e)){const c=l[1],f=c.length;if(f===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(f===6)return this.setHex(parseInt(c,16),i);it("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,i);return this}setColorName(e,i=fi){const a=rS[e.toLowerCase()];return a!==void 0?this.setHex(a,i):it("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Pa(e.r),this.g=Pa(e.g),this.b=Pa(e.b),this}copyLinearToSRGB(e){return this.r=to(e.r),this.g=to(e.g),this.b=to(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=fi){return Et.workingToColorSpace(Pn.copy(this),e),Math.round(Tt(Pn.r*255,0,255))*65536+Math.round(Tt(Pn.g*255,0,255))*256+Math.round(Tt(Pn.b*255,0,255))}getHexString(e=fi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,i=Et.workingColorSpace){Et.workingToColorSpace(Pn.copy(this),i);const a=Pn.r,l=Pn.g,c=Pn.b,f=Math.max(a,l,c),p=Math.min(a,l,c);let m,h;const g=(p+f)/2;if(p===f)m=0,h=0;else{const v=f-p;switch(h=g<=.5?v/(f+p):v/(2-f-p),f){case a:m=(l-c)/v+(l<c?6:0);break;case l:m=(c-a)/v+2;break;case c:m=(a-l)/v+4;break}m/=6}return e.h=m,e.s=h,e.l=g,e}getRGB(e,i=Et.workingColorSpace){return Et.workingToColorSpace(Pn.copy(this),i),e.r=Pn.r,e.g=Pn.g,e.b=Pn.b,e}getStyle(e=fi){Et.workingToColorSpace(Pn.copy(this),e);const i=Pn.r,a=Pn.g,l=Pn.b;return e!==fi?`color(${e} ${i.toFixed(3)} ${a.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(a*255)},${Math.round(l*255)})`}offsetHSL(e,i,a){return this.getHSL(ps),this.setHSL(ps.h+e,ps.s+i,ps.l+a)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,i){return this.r=e.r+i.r,this.g=e.g+i.g,this.b=e.b+i.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,i){return this.r+=(e.r-this.r)*i,this.g+=(e.g-this.g)*i,this.b+=(e.b-this.b)*i,this}lerpColors(e,i,a){return this.r=e.r+(i.r-e.r)*a,this.g=e.g+(i.g-e.g)*a,this.b=e.b+(i.b-e.b)*a,this}lerpHSL(e,i){this.getHSL(ps),e.getHSL(Zc);const a=xh(ps.h,Zc.h,i),l=xh(ps.s,Zc.s,i),c=xh(ps.l,Zc.l,i);return this.setHSL(a,l,c),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const i=this.r,a=this.g,l=this.b,c=e.elements;return this.r=c[0]*i+c[3]*a+c[6]*l,this.g=c[1]*i+c[4]*a+c[7]*l,this.b=c[2]*i+c[5]*a+c[8]*l,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,i=0){return this.r=e[i],this.g=e[i+1],this.b=e[i+2],this}toArray(e=[],i=0){return e[i]=this.r,e[i+1]=this.g,e[i+2]=this.b,e}fromBufferAttribute(e,i){return this.r=e.getX(i),this.g=e.getY(i),this.b=e.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Pn=new bt;bt.NAMES=rS;class cm{constructor(e,i=1,a=1e3){this.isFog=!0,this.name="",this.color=new bt(e),this.near=i,this.far=a}clone(){return new cm(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class XE extends Fn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new er,this.environmentIntensity=1,this.environmentRotation=new er,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,i){return super.copy(e,i),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const i=super.toJSON(e);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),i.object.backgroundBlurriness=this.backgroundBlurriness,i.object.backgroundIntensity=this.backgroundIntensity,i.object.backgroundRotation=this.backgroundRotation.toArray(),i.object.environmentIntensity=this.environmentIntensity,i.object.environmentRotation=this.environmentRotation.toArray(),i}}const Pi=new se,Aa=new se,Th=new se,Ra=new se,zr=new se,Hr=new se,Lv=new se,Ah=new se,Rh=new se,wh=new se,Ch=new ln,Nh=new ln,Dh=new ln;class wi{constructor(e=new se,i=new se,a=new se){this.a=e,this.b=i,this.c=a}static getNormal(e,i,a,l){l.subVectors(a,i),Pi.subVectors(e,i),l.cross(Pi);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(e,i,a,l,c){Pi.subVectors(l,i),Aa.subVectors(a,i),Th.subVectors(e,i);const f=Pi.dot(Pi),p=Pi.dot(Aa),m=Pi.dot(Th),h=Aa.dot(Aa),g=Aa.dot(Th),v=f*h-p*p;if(v===0)return c.set(0,0,0),null;const x=1/v,b=(h*m-p*g)*x,T=(f*g-p*m)*x;return c.set(1-b-T,T,b)}static containsPoint(e,i,a,l){return this.getBarycoord(e,i,a,l,Ra)===null?!1:Ra.x>=0&&Ra.y>=0&&Ra.x+Ra.y<=1}static getInterpolation(e,i,a,l,c,f,p,m){return this.getBarycoord(e,i,a,l,Ra)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,Ra.x),m.addScaledVector(f,Ra.y),m.addScaledVector(p,Ra.z),m)}static getInterpolatedAttribute(e,i,a,l,c,f){return Ch.setScalar(0),Nh.setScalar(0),Dh.setScalar(0),Ch.fromBufferAttribute(e,i),Nh.fromBufferAttribute(e,a),Dh.fromBufferAttribute(e,l),f.setScalar(0),f.addScaledVector(Ch,c.x),f.addScaledVector(Nh,c.y),f.addScaledVector(Dh,c.z),f}static isFrontFacing(e,i,a,l){return Pi.subVectors(a,i),Aa.subVectors(e,i),Pi.cross(Aa).dot(l)<0}set(e,i,a){return this.a.copy(e),this.b.copy(i),this.c.copy(a),this}setFromPointsAndIndices(e,i,a,l){return this.a.copy(e[i]),this.b.copy(e[a]),this.c.copy(e[l]),this}setFromAttributeAndIndices(e,i,a,l){return this.a.fromBufferAttribute(e,i),this.b.fromBufferAttribute(e,a),this.c.fromBufferAttribute(e,l),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Pi.subVectors(this.c,this.b),Aa.subVectors(this.a,this.b),Pi.cross(Aa).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return wi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,i){return wi.getBarycoord(e,this.a,this.b,this.c,i)}getInterpolation(e,i,a,l,c){return wi.getInterpolation(e,this.a,this.b,this.c,i,a,l,c)}containsPoint(e){return wi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return wi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,i){const a=this.a,l=this.b,c=this.c;let f,p;zr.subVectors(l,a),Hr.subVectors(c,a),Ah.subVectors(e,a);const m=zr.dot(Ah),h=Hr.dot(Ah);if(m<=0&&h<=0)return i.copy(a);Rh.subVectors(e,l);const g=zr.dot(Rh),v=Hr.dot(Rh);if(g>=0&&v<=g)return i.copy(l);const x=m*v-g*h;if(x<=0&&m>=0&&g<=0)return f=m/(m-g),i.copy(a).addScaledVector(zr,f);wh.subVectors(e,c);const b=zr.dot(wh),T=Hr.dot(wh);if(T>=0&&b<=T)return i.copy(c);const C=b*h-m*T;if(C<=0&&h>=0&&T<=0)return p=h/(h-T),i.copy(a).addScaledVector(Hr,p);const y=g*T-b*v;if(y<=0&&v-g>=0&&b-T>=0)return Lv.subVectors(c,l),p=(v-g)/(v-g+(b-T)),i.copy(l).addScaledVector(Lv,p);const _=1/(y+C+x);return f=C*_,p=x*_,i.copy(a).addScaledVector(zr,f).addScaledVector(Hr,p)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Cl{constructor(e=new se(1/0,1/0,1/0),i=new se(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=i}set(e,i){return this.min.copy(e),this.max.copy(i),this}setFromArray(e){this.makeEmpty();for(let i=0,a=e.length;i<a;i+=3)this.expandByPoint(Ii.fromArray(e,i));return this}setFromBufferAttribute(e){this.makeEmpty();for(let i=0,a=e.count;i<a;i++)this.expandByPoint(Ii.fromBufferAttribute(e,i));return this}setFromPoints(e){this.makeEmpty();for(let i=0,a=e.length;i<a;i++)this.expandByPoint(e[i]);return this}setFromCenterAndSize(e,i){const a=Ii.copy(i).multiplyScalar(.5);return this.min.copy(e).sub(a),this.max.copy(e).add(a),this}setFromObject(e,i=!1){return this.makeEmpty(),this.expandByObject(e,i)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,i=!1){e.updateWorldMatrix(!1,!1);const a=e.geometry;if(a!==void 0){const c=a.getAttribute("position");if(i===!0&&c!==void 0&&e.isInstancedMesh!==!0)for(let f=0,p=c.count;f<p;f++)e.isMesh===!0?e.getVertexPosition(f,Ii):Ii.fromBufferAttribute(c,f),Ii.applyMatrix4(e.matrixWorld),this.expandByPoint(Ii);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Kc.copy(e.boundingBox)):(a.boundingBox===null&&a.computeBoundingBox(),Kc.copy(a.boundingBox)),Kc.applyMatrix4(e.matrixWorld),this.union(Kc)}const l=e.children;for(let c=0,f=l.length;c<f;c++)this.expandByObject(l[c],i);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,i){return i.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ii),Ii.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let i,a;return e.normal.x>0?(i=e.normal.x*this.min.x,a=e.normal.x*this.max.x):(i=e.normal.x*this.max.x,a=e.normal.x*this.min.x),e.normal.y>0?(i+=e.normal.y*this.min.y,a+=e.normal.y*this.max.y):(i+=e.normal.y*this.max.y,a+=e.normal.y*this.min.y),e.normal.z>0?(i+=e.normal.z*this.min.z,a+=e.normal.z*this.max.z):(i+=e.normal.z*this.max.z,a+=e.normal.z*this.min.z),i<=-e.constant&&a>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(cl),Qc.subVectors(this.max,cl),Gr.subVectors(e.a,cl),Vr.subVectors(e.b,cl),kr.subVectors(e.c,cl),ms.subVectors(Vr,Gr),gs.subVectors(kr,Vr),Gs.subVectors(Gr,kr);let i=[0,-ms.z,ms.y,0,-gs.z,gs.y,0,-Gs.z,Gs.y,ms.z,0,-ms.x,gs.z,0,-gs.x,Gs.z,0,-Gs.x,-ms.y,ms.x,0,-gs.y,gs.x,0,-Gs.y,Gs.x,0];return!Uh(i,Gr,Vr,kr,Qc)||(i=[1,0,0,0,1,0,0,0,1],!Uh(i,Gr,Vr,kr,Qc))?!1:(Jc.crossVectors(ms,gs),i=[Jc.x,Jc.y,Jc.z],Uh(i,Gr,Vr,kr,Qc))}clampPoint(e,i){return i.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ii).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ii).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(wa[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),wa[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),wa[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),wa[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),wa[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),wa[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),wa[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),wa[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(wa),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const wa=[new se,new se,new se,new se,new se,new se,new se,new se],Ii=new se,Kc=new Cl,Gr=new se,Vr=new se,kr=new se,ms=new se,gs=new se,Gs=new se,cl=new se,Qc=new se,Jc=new se,Vs=new se;function Uh(r,e,i,a,l){for(let c=0,f=r.length-3;c<=f;c+=3){Vs.fromArray(r,c);const p=l.x*Math.abs(Vs.x)+l.y*Math.abs(Vs.y)+l.z*Math.abs(Vs.z),m=e.dot(Vs),h=i.dot(Vs),g=a.dot(Vs);if(Math.max(-Math.max(m,h,g),Math.min(m,h,g))>p)return!1}return!0}const vn=new se,$c=new gt;let jE=0;class Ci extends tr{constructor(e,i,a=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:jE++}),this.name="",this.array=e,this.itemSize=i,this.count=e!==void 0?e.length/i:0,this.normalized=a,this.usage=nS,this.updateRanges=[],this.gpuType=$i,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,i,a){e*=this.itemSize,a*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[e+l]=i.array[a+l];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let i=0,a=this.count;i<a;i++)$c.fromBufferAttribute(this,i),$c.applyMatrix3(e),this.setXY(i,$c.x,$c.y);else if(this.itemSize===3)for(let i=0,a=this.count;i<a;i++)vn.fromBufferAttribute(this,i),vn.applyMatrix3(e),this.setXYZ(i,vn.x,vn.y,vn.z);return this}applyMatrix4(e){for(let i=0,a=this.count;i<a;i++)vn.fromBufferAttribute(this,i),vn.applyMatrix4(e),this.setXYZ(i,vn.x,vn.y,vn.z);return this}applyNormalMatrix(e){for(let i=0,a=this.count;i<a;i++)vn.fromBufferAttribute(this,i),vn.applyNormalMatrix(e),this.setXYZ(i,vn.x,vn.y,vn.z);return this}transformDirection(e){for(let i=0,a=this.count;i<a;i++)vn.fromBufferAttribute(this,i),vn.transformDirection(e),this.setXYZ(i,vn.x,vn.y,vn.z);return this}set(e,i=0){return this.array.set(e,i),this}getComponent(e,i){let a=this.array[e*this.itemSize+i];return this.normalized&&(a=Ji(a,this.array)),a}setComponent(e,i,a){return this.normalized&&(a=Wt(a,this.array)),this.array[e*this.itemSize+i]=a,this}getX(e){let i=this.array[e*this.itemSize];return this.normalized&&(i=Ji(i,this.array)),i}setX(e,i){return this.normalized&&(i=Wt(i,this.array)),this.array[e*this.itemSize]=i,this}getY(e){let i=this.array[e*this.itemSize+1];return this.normalized&&(i=Ji(i,this.array)),i}setY(e,i){return this.normalized&&(i=Wt(i,this.array)),this.array[e*this.itemSize+1]=i,this}getZ(e){let i=this.array[e*this.itemSize+2];return this.normalized&&(i=Ji(i,this.array)),i}setZ(e,i){return this.normalized&&(i=Wt(i,this.array)),this.array[e*this.itemSize+2]=i,this}getW(e){let i=this.array[e*this.itemSize+3];return this.normalized&&(i=Ji(i,this.array)),i}setW(e,i){return this.normalized&&(i=Wt(i,this.array)),this.array[e*this.itemSize+3]=i,this}setXY(e,i,a){return e*=this.itemSize,this.normalized&&(i=Wt(i,this.array),a=Wt(a,this.array)),this.array[e+0]=i,this.array[e+1]=a,this}setXYZ(e,i,a,l){return e*=this.itemSize,this.normalized&&(i=Wt(i,this.array),a=Wt(a,this.array),l=Wt(l,this.array)),this.array[e+0]=i,this.array[e+1]=a,this.array[e+2]=l,this}setXYZW(e,i,a,l,c){return e*=this.itemSize,this.normalized&&(i=Wt(i,this.array),a=Wt(a,this.array),l=Wt(l,this.array),c=Wt(c,this.array)),this.array[e+0]=i,this.array[e+1]=a,this.array[e+2]=l,this.array[e+3]=c,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}}class oS extends Ci{constructor(e,i,a){super(new Uint16Array(e),i,a)}}class lS extends Ci{constructor(e,i,a){super(new Uint32Array(e),i,a)}}class Gi extends Ci{constructor(e,i,a){super(new Float32Array(e),i,a)}}const qE=new Cl,ul=new se,Lh=new se;class Nl{constructor(e=new se,i=-1){this.isSphere=!0,this.center=e,this.radius=i}set(e,i){return this.center.copy(e),this.radius=i,this}setFromPoints(e,i){const a=this.center;i!==void 0?a.copy(i):qE.setFromPoints(e).getCenter(a);let l=0;for(let c=0,f=e.length;c<f;c++)l=Math.max(l,a.distanceToSquared(e[c]));return this.radius=Math.sqrt(l),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const i=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=i*i}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,i){const a=this.center.distanceToSquared(e);return i.copy(e),a>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ul.subVectors(e,this.center);const i=ul.lengthSq();if(i>this.radius*this.radius){const a=Math.sqrt(i),l=(a-this.radius)*.5;this.center.addScaledVector(ul,l/a),this.radius+=l}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Lh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ul.copy(e.center).add(Lh)),this.expandByPoint(ul.copy(e.center).sub(Lh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let YE=0;const Ei=new tn,Oh=new Fn,Wr=new se,ui=new Cl,fl=new Cl,Tn=new se;class $n extends tr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:YE++}),this.uuid=Ss(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(RE(e)?lS:oS)(e,1):this.index=e,this}setIndirect(e,i=0){return this.indirect=e,this.indirectOffset=i,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,i){return this.attributes[e]=i,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,i,a=0){this.groups.push({start:e,count:i,materialIndex:a})}clearGroups(){this.groups=[]}setDrawRange(e,i){this.drawRange.start=e,this.drawRange.count=i}applyMatrix4(e){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(e),i.needsUpdate=!0);const a=this.attributes.normal;if(a!==void 0){const c=new rt().getNormalMatrix(e);a.applyNormalMatrix(c),a.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(e),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Ei.makeRotationFromQuaternion(e),this.applyMatrix4(Ei),this}rotateX(e){return Ei.makeRotationX(e),this.applyMatrix4(Ei),this}rotateY(e){return Ei.makeRotationY(e),this.applyMatrix4(Ei),this}rotateZ(e){return Ei.makeRotationZ(e),this.applyMatrix4(Ei),this}translate(e,i,a){return Ei.makeTranslation(e,i,a),this.applyMatrix4(Ei),this}scale(e,i,a){return Ei.makeScale(e,i,a),this.applyMatrix4(Ei),this}lookAt(e){return Oh.lookAt(e),Oh.updateMatrix(),this.applyMatrix4(Oh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Wr).negate(),this.translate(Wr.x,Wr.y,Wr.z),this}setFromPoints(e){const i=this.getAttribute("position");if(i===void 0){const a=[];for(let l=0,c=e.length;l<c;l++){const f=e[l];a.push(f.x,f.y,f.z||0)}this.setAttribute("position",new Gi(a,3))}else{const a=Math.min(e.length,i.count);for(let l=0;l<a;l++){const c=e[l];i.setXYZ(l,c.x,c.y,c.z||0)}e.length>i.count&&it("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Cl);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){wt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new se(-1/0,-1/0,-1/0),new se(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),i)for(let a=0,l=i.length;a<l;a++){const c=i[a];ui.setFromBufferAttribute(c),this.morphTargetsRelative?(Tn.addVectors(this.boundingBox.min,ui.min),this.boundingBox.expandByPoint(Tn),Tn.addVectors(this.boundingBox.max,ui.max),this.boundingBox.expandByPoint(Tn)):(this.boundingBox.expandByPoint(ui.min),this.boundingBox.expandByPoint(ui.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&wt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Nl);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){wt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new se,1/0);return}if(e){const a=this.boundingSphere.center;if(ui.setFromBufferAttribute(e),i)for(let c=0,f=i.length;c<f;c++){const p=i[c];fl.setFromBufferAttribute(p),this.morphTargetsRelative?(Tn.addVectors(ui.min,fl.min),ui.expandByPoint(Tn),Tn.addVectors(ui.max,fl.max),ui.expandByPoint(Tn)):(ui.expandByPoint(fl.min),ui.expandByPoint(fl.max))}ui.getCenter(a);let l=0;for(let c=0,f=e.count;c<f;c++)Tn.fromBufferAttribute(e,c),l=Math.max(l,a.distanceToSquared(Tn));if(i)for(let c=0,f=i.length;c<f;c++){const p=i[c],m=this.morphTargetsRelative;for(let h=0,g=p.count;h<g;h++)Tn.fromBufferAttribute(p,h),m&&(Wr.fromBufferAttribute(e,h),Tn.add(Wr)),l=Math.max(l,a.distanceToSquared(Tn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&wt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,i=this.attributes;if(e===null||i.position===void 0||i.normal===void 0||i.uv===void 0){wt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const a=i.position,l=i.normal,c=i.uv;let f=this.getAttribute("tangent");(f===void 0||f.count!==a.count)&&(f=new Ci(new Float32Array(4*a.count),4),this.setAttribute("tangent",f));const p=[],m=[];for(let A=0;A<a.count;A++)p[A]=new se,m[A]=new se;const h=new se,g=new se,v=new se,x=new gt,b=new gt,T=new gt,C=new se,y=new se;function _(A,B,X){h.fromBufferAttribute(a,A),g.fromBufferAttribute(a,B),v.fromBufferAttribute(a,X),x.fromBufferAttribute(c,A),b.fromBufferAttribute(c,B),T.fromBufferAttribute(c,X),g.sub(h),v.sub(h),b.sub(x),T.sub(x);const q=1/(b.x*T.y-T.x*b.y);isFinite(q)&&(C.copy(g).multiplyScalar(T.y).addScaledVector(v,-b.y).multiplyScalar(q),y.copy(v).multiplyScalar(b.x).addScaledVector(g,-T.x).multiplyScalar(q),p[A].add(C),p[B].add(C),p[X].add(C),m[A].add(y),m[B].add(y),m[X].add(y))}let U=this.groups;U.length===0&&(U=[{start:0,count:e.count}]);for(let A=0,B=U.length;A<B;++A){const X=U[A],q=X.start,Q=X.count;for(let fe=q,Y=q+Q;fe<Y;fe+=3)_(e.getX(fe+0),e.getX(fe+1),e.getX(fe+2))}const z=new se,N=new se,L=new se,O=new se;function I(A){L.fromBufferAttribute(l,A),O.copy(L);const B=p[A];z.copy(B),z.sub(L.multiplyScalar(L.dot(B))).normalize(),N.crossVectors(O,B);const q=N.dot(m[A])<0?-1:1;f.setXYZW(A,z.x,z.y,z.z,q)}for(let A=0,B=U.length;A<B;++A){const X=U[A],q=X.start,Q=X.count;for(let fe=q,Y=q+Q;fe<Y;fe+=3)I(e.getX(fe+0)),I(e.getX(fe+1)),I(e.getX(fe+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,i=this.getAttribute("position");if(i!==void 0){let a=this.getAttribute("normal");if(a===void 0||a.count!==i.count)a=new Ci(new Float32Array(i.count*3),3),this.setAttribute("normal",a);else for(let x=0,b=a.count;x<b;x++)a.setXYZ(x,0,0,0);const l=new se,c=new se,f=new se,p=new se,m=new se,h=new se,g=new se,v=new se;if(e)for(let x=0,b=e.count;x<b;x+=3){const T=e.getX(x+0),C=e.getX(x+1),y=e.getX(x+2);l.fromBufferAttribute(i,T),c.fromBufferAttribute(i,C),f.fromBufferAttribute(i,y),g.subVectors(f,c),v.subVectors(l,c),g.cross(v),p.fromBufferAttribute(a,T),m.fromBufferAttribute(a,C),h.fromBufferAttribute(a,y),p.add(g),m.add(g),h.add(g),a.setXYZ(T,p.x,p.y,p.z),a.setXYZ(C,m.x,m.y,m.z),a.setXYZ(y,h.x,h.y,h.z)}else for(let x=0,b=i.count;x<b;x+=3)l.fromBufferAttribute(i,x+0),c.fromBufferAttribute(i,x+1),f.fromBufferAttribute(i,x+2),g.subVectors(f,c),v.subVectors(l,c),g.cross(v),a.setXYZ(x+0,g.x,g.y,g.z),a.setXYZ(x+1,g.x,g.y,g.z),a.setXYZ(x+2,g.x,g.y,g.z);this.normalizeNormals(),a.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let i=0,a=e.count;i<a;i++)Tn.fromBufferAttribute(e,i),Tn.normalize(),e.setXYZ(i,Tn.x,Tn.y,Tn.z)}toNonIndexed(){function e(p,m){const h=p.array,g=p.itemSize,v=p.normalized,x=new h.constructor(m.length*g);let b=0,T=0;for(let C=0,y=m.length;C<y;C++){p.isInterleavedBufferAttribute?b=m[C]*p.data.stride+p.offset:b=m[C]*g;for(let _=0;_<g;_++)x[T++]=h[b++]}return new Ci(x,g,v)}if(this.index===null)return it("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new $n,a=this.index.array,l=this.attributes;for(const p in l){const m=l[p],h=e(m,a);i.setAttribute(p,h)}const c=this.morphAttributes;for(const p in c){const m=[],h=c[p];for(let g=0,v=h.length;g<v;g++){const x=h[g],b=e(x,a);m.push(b)}i.morphAttributes[p]=m}i.morphTargetsRelative=this.morphTargetsRelative;const f=this.groups;for(let p=0,m=f.length;p<m;p++){const h=f[p];i.addGroup(h.start,h.count,h.materialIndex)}return i}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const m=this.parameters;for(const h in m)m[h]!==void 0&&(e[h]=m[h]);return e}e.data={attributes:{}};const i=this.index;i!==null&&(e.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const a=this.attributes;for(const m in a){const h=a[m];e.data.attributes[m]=h.toJSON(e.data)}const l={};let c=!1;for(const m in this.morphAttributes){const h=this.morphAttributes[m],g=[];for(let v=0,x=h.length;v<x;v++){const b=h[v];g.push(b.toJSON(e.data))}g.length>0&&(l[m]=g,c=!0)}c&&(e.data.morphAttributes=l,e.data.morphTargetsRelative=this.morphTargetsRelative);const f=this.groups;f.length>0&&(e.data.groups=JSON.parse(JSON.stringify(f)));const p=this.boundingSphere;return p!==null&&(e.data.boundingSphere=p.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=e.name;const a=e.index;a!==null&&this.setIndex(a.clone());const l=e.attributes;for(const h in l){const g=l[h];this.setAttribute(h,g.clone(i))}const c=e.morphAttributes;for(const h in c){const g=[],v=c[h];for(let x=0,b=v.length;x<b;x++)g.push(v[x].clone(i));this.morphAttributes[h]=g}this.morphTargetsRelative=e.morphTargetsRelative;const f=e.groups;for(let h=0,g=f.length;h<g;h++){const v=f[h];this.addGroup(v.start,v.count,v.materialIndex)}const p=e.boundingBox;p!==null&&(this.boundingBox=p.clone());const m=e.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ZE{constructor(e,i){this.isInterleavedBuffer=!0,this.array=e,this.stride=i,this.count=e!==void 0?e.length/i:0,this.usage=nS,this.updateRanges=[],this.version=0,this.uuid=Ss()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,i,a){e*=this.stride,a*=i.stride;for(let l=0,c=this.stride;l<c;l++)this.array[e+l]=i.array[a+l];return this}set(e,i=0){return this.array.set(e,i),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ss()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const i=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),a=new this.constructor(i,this.stride);return a.setUsage(this.usage),a}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ss()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));const i={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return i.usage=this.usage,i}}const Vn=new se;class Fu{constructor(e,i,a,l=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=i,this.offset=a,this.normalized=l}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let i=0,a=this.data.count;i<a;i++)Vn.fromBufferAttribute(this,i),Vn.applyMatrix4(e),this.setXYZ(i,Vn.x,Vn.y,Vn.z);return this}applyNormalMatrix(e){for(let i=0,a=this.count;i<a;i++)Vn.fromBufferAttribute(this,i),Vn.applyNormalMatrix(e),this.setXYZ(i,Vn.x,Vn.y,Vn.z);return this}transformDirection(e){for(let i=0,a=this.count;i<a;i++)Vn.fromBufferAttribute(this,i),Vn.transformDirection(e),this.setXYZ(i,Vn.x,Vn.y,Vn.z);return this}getComponent(e,i){let a=this.array[e*this.data.stride+this.offset+i];return this.normalized&&(a=Ji(a,this.array)),a}setComponent(e,i,a){return this.normalized&&(a=Wt(a,this.array)),this.data.array[e*this.data.stride+this.offset+i]=a,this}setX(e,i){return this.normalized&&(i=Wt(i,this.array)),this.data.array[e*this.data.stride+this.offset]=i,this}setY(e,i){return this.normalized&&(i=Wt(i,this.array)),this.data.array[e*this.data.stride+this.offset+1]=i,this}setZ(e,i){return this.normalized&&(i=Wt(i,this.array)),this.data.array[e*this.data.stride+this.offset+2]=i,this}setW(e,i){return this.normalized&&(i=Wt(i,this.array)),this.data.array[e*this.data.stride+this.offset+3]=i,this}getX(e){let i=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(i=Ji(i,this.array)),i}getY(e){let i=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(i=Ji(i,this.array)),i}getZ(e){let i=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(i=Ji(i,this.array)),i}getW(e){let i=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(i=Ji(i,this.array)),i}setXY(e,i,a){return e=e*this.data.stride+this.offset,this.normalized&&(i=Wt(i,this.array),a=Wt(a,this.array)),this.data.array[e+0]=i,this.data.array[e+1]=a,this}setXYZ(e,i,a,l){return e=e*this.data.stride+this.offset,this.normalized&&(i=Wt(i,this.array),a=Wt(a,this.array),l=Wt(l,this.array)),this.data.array[e+0]=i,this.data.array[e+1]=a,this.data.array[e+2]=l,this}setXYZW(e,i,a,l,c){return e=e*this.data.stride+this.offset,this.normalized&&(i=Wt(i,this.array),a=Wt(a,this.array),l=Wt(l,this.array),c=Wt(c,this.array)),this.data.array[e+0]=i,this.data.array[e+1]=a,this.data.array[e+2]=l,this.data.array[e+3]=c,this}clone(e){if(e===void 0){Bu("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const i=[];for(let a=0;a<this.count;a++){const l=a*this.data.stride+this.offset;for(let c=0;c<this.itemSize;c++)i.push(this.data.array[l+c])}return new Ci(new this.array.constructor(i),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Fu(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Bu("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const i=[];for(let a=0;a<this.count;a++){const l=a*this.data.stride+this.offset;for(let c=0;c<this.itemSize;c++)i.push(this.data.array[l+c])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:i,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const Ph=new se,KE=new se,QE=new rt;class vs{constructor(e=new se(1,0,0),i=0){this.isPlane=!0,this.normal=e,this.constant=i}set(e,i){return this.normal.copy(e),this.constant=i,this}setComponents(e,i,a,l){return this.normal.set(e,i,a),this.constant=l,this}setFromNormalAndCoplanarPoint(e,i){return this.normal.copy(e),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(e,i,a){const l=Ph.subVectors(a,i).cross(KE.subVectors(e,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,i){return i.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,i,a=!0){const l=e.delta(Ph),c=this.normal.dot(l);if(c===0)return this.distanceToPoint(e.start)===0?i.copy(e.start):null;const f=-(e.start.dot(this.normal)+this.constant)/c;return a===!0&&(f<0||f>1)?null:i.copy(e.start).addScaledVector(l,f)}intersectsLine(e){const i=this.distanceToPoint(e.start),a=this.distanceToPoint(e.end);return i<0&&a>0||a<0&&i>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,i){const a=i||QE.getNormalMatrix(e),l=this.coplanarPoint(Ph).applyMatrix4(e),c=this.normal.applyMatrix3(a).normalize();return this.constant=-l.dot(c),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let JE=0;class nr extends tr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:JE++}),this.uuid=Ss(),this.name="",this.type="Material",this.blending=Sl,this.side=Qs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=F_,this.blendDst=z_,this.blendEquation=Jr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new bt(0,0,0),this.blendAlpha=0,this.depthFunc=Ml,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=SE,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=mh,this.stencilZFail=mh,this.stencilZPass=mh,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const i in e){const a=e[i];if(a===void 0){it(`Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){it(`Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(a):l&&l.isVector2&&a&&a.isVector2||l&&l.isEuler&&a&&a.isEuler||l&&l.isVector3&&a&&a.isVector3?l.copy(a):this[i]=a}}toJSON(e){const i=e===void 0||typeof e=="string";i&&(e={textures:{},images:{}});const a={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};a.uuid=this.uuid,a.type=this.type,a.blending=this.blending,a.side=this.side,a.shadowSide=this.shadowSide,a.vertexColors=this.vertexColors,a.opacity=this.opacity,a.transparent=this.transparent,a.blendSrc=this.blendSrc,a.blendDst=this.blendDst,a.blendEquation=this.blendEquation,a.blendSrcAlpha=this.blendSrcAlpha,a.blendDstAlpha=this.blendDstAlpha,a.blendEquationAlpha=this.blendEquationAlpha,a.blendColor=this.blendColor.getHex(),a.blendAlpha=this.blendAlpha,a.depthFunc=this.depthFunc,a.depthTest=this.depthTest,a.depthWrite=this.depthWrite,a.colorWrite=this.colorWrite,a.clipIntersection=this.clipIntersection,a.clipShadows=this.clipShadows,a.stencilWriteMask=this.stencilWriteMask,a.stencilFunc=this.stencilFunc,a.stencilRef=this.stencilRef,a.stencilFuncMask=this.stencilFuncMask,a.stencilFail=this.stencilFail,a.stencilZFail=this.stencilZFail,a.stencilZPass=this.stencilZPass,a.stencilWrite=this.stencilWrite,a.polygonOffset=this.polygonOffset,a.polygonOffsetFactor=this.polygonOffsetFactor,a.polygonOffsetUnits=this.polygonOffsetUnits,a.dithering=this.dithering,a.alphaTest=this.alphaTest,a.alphaHash=this.alphaHash,a.alphaToCoverage=this.alphaToCoverage,a.premultipliedAlpha=this.premultipliedAlpha,a.forceSinglePass=this.forceSinglePass,a.allowOverride=this.allowOverride,a.visible=this.visible,a.toneMapped=this.toneMapped,a.name=this.name,this.color&&this.color.isColor&&(a.color=this.color.getHex()),this.roughness!==void 0&&(a.roughness=this.roughness),this.metalness!==void 0&&(a.metalness=this.metalness),this.sheen!==void 0&&(a.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(a.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(a.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(a.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(a.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(a.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(a.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(a.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(a.shininess=this.shininess),this.clearcoat!==void 0&&(a.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(a.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(a.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(a.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(a.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,a.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(a.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(a.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(a.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(a.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(a.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(a.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(a.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(a.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(a.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(a.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(a.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(a.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(a.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(a.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(a.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(a.lightMap=this.lightMap.toJSON(e).uuid,a.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(a.aoMap=this.aoMap.toJSON(e).uuid,a.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(a.bumpMap=this.bumpMap.toJSON(e).uuid,a.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(a.normalMap=this.normalMap.toJSON(e).uuid,a.normalMapType=this.normalMapType,a.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(a.displacementMap=this.displacementMap.toJSON(e).uuid,a.displacementScale=this.displacementScale,a.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(a.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(a.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(a.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(a.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(a.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(a.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(a.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(a.combine=this.combine)),this.envMapRotation!==void 0&&(a.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(a.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(a.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(a.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(a.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(a.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(a.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(a.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(a.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(a.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(a.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(a.size=this.size),this.sizeAttenuation!==void 0&&(a.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(a.clippingPlanes=this.clippingPlanes.map(c=>c.toJSON())),this.rotation!==void 0&&(a.rotation=this.rotation),this.depthPacking!==void 0&&(a.depthPacking=this.depthPacking),this.linewidth!==void 0&&(a.linewidth=this.linewidth),this.linecap!==void 0&&(a.linecap=this.linecap),this.linejoin!==void 0&&(a.linejoin=this.linejoin),this.dashSize!==void 0&&(a.dashSize=this.dashSize),this.gapSize!==void 0&&(a.gapSize=this.gapSize),this.scale!==void 0&&(a.scale=this.scale),this.wireframe!==void 0&&(a.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(a.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(a.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(a.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(a.flatShading=this.flatShading),this.fog!==void 0&&(a.fog=this.fog),Object.keys(this.userData).length>0&&(a.userData=this.userData);function l(c){const f=[];for(const p in c){const m=c[p];delete m.metadata,f.push(m)}return f}if(i){const c=l(e.textures),f=l(e.images);c.length>0&&(a.textures=c),f.length>0&&(a.images=f)}return a}fromJSON(e,i){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new bt().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(a=>new vs().fromJSON(a))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=i[e.map]||null),e.matcap!==void 0&&(this.matcap=i[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=i[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=i[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=i[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let a=e.normalScale;Array.isArray(a)===!1&&(a=[a,a]),this.normalScale=new gt().fromArray(a)}return e.displacementMap!==void 0&&(this.displacementMap=i[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=i[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=i[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=i[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=i[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=i[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=i[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=i[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=i[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=i[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=i[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=i[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=i[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=i[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new gt().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=i[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=i[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=i[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=i[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=i[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=i[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=i[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const i=e.clippingPlanes;let a=null;if(i!==null){const l=i.length;a=new Array(l);for(let c=0;c!==l;++c)a[c]=i[c].clone()}return this.clippingPlanes=a,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class cS extends nr{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new bt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let Xr;const dl=new se,jr=new se,qr=new se,Yr=new gt,hl=new gt,uS=new tn,eu=new se,pl=new se,tu=new se,Ov=new gt,Ih=new gt,Pv=new gt;class $E extends Fn{constructor(e=new cS){if(super(),this.isSprite=!0,this.type="Sprite",Xr===void 0){Xr=new $n;const i=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),a=new ZE(i,5);Xr.setIndex([0,1,2,0,2,3]),Xr.setAttribute("position",new Fu(a,3,0,!1)),Xr.setAttribute("uv",new Fu(a,2,3,!1))}this.geometry=Xr,this.material=e,this.center=new gt(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,i){e.camera===null&&wt('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),jr.setFromMatrixScale(this.matrixWorld),uS.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),qr.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&jr.multiplyScalar(-qr.z);const a=this.material.rotation;let l,c;a!==0&&(c=Math.cos(a),l=Math.sin(a));const f=this.center;nu(eu.set(-.5,-.5,0),qr,f,jr,l,c),nu(pl.set(.5,-.5,0),qr,f,jr,l,c),nu(tu.set(.5,.5,0),qr,f,jr,l,c),Ov.set(0,0),Ih.set(1,0),Pv.set(1,1);let p=e.ray.intersectTriangle(eu,pl,tu,!1,dl);if(p===null&&(nu(pl.set(-.5,.5,0),qr,f,jr,l,c),Ih.set(0,1),p=e.ray.intersectTriangle(eu,tu,pl,!1,dl),p===null))return;const m=e.ray.origin.distanceTo(dl);m<e.near||m>e.far||i.push({distance:m,point:dl.clone(),uv:wi.getInterpolation(dl,eu,pl,tu,Ov,Ih,Pv,new gt),face:null,object:this})}copy(e,i){return super.copy(e,i),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function nu(r,e,i,a,l,c){Yr.subVectors(r,i).addScalar(.5).multiply(a),l!==void 0?(hl.x=c*Yr.x-l*Yr.y,hl.y=l*Yr.x+c*Yr.y):hl.copy(Yr),r.copy(e),r.x+=hl.x,r.y+=hl.y,r.applyMatrix4(uS)}const Ca=new se,Bh=new se,iu=new se,au=new se;class um{constructor(e=new se,i=new se(0,0,-1)){this.origin=e,this.direction=i}set(e,i){return this.origin.copy(e),this.direction.copy(i),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,i){return i.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ca)),this}closestPointToPoint(e,i){i.subVectors(e,this.origin);const a=i.dot(this.direction);return a<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,a)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const i=Ca.subVectors(e,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(e):(Ca.copy(this.origin).addScaledVector(this.direction,i),Ca.distanceToSquared(e))}distanceSqToSegment(e,i,a,l){Bh.copy(e).add(i).multiplyScalar(.5),iu.copy(i).sub(e).normalize(),au.copy(this.origin).sub(Bh);const c=e.distanceTo(i)*.5,f=-this.direction.dot(iu),p=au.dot(this.direction),m=-au.dot(iu),h=au.lengthSq(),g=Math.abs(1-f*f);let v,x,b,T;if(g>0)if(v=f*m-p,x=f*p-m,T=c*g,v>=0)if(x>=-T)if(x<=T){const C=1/g;v*=C,x*=C,b=v*(v+f*x+2*p)+x*(f*v+x+2*m)+h}else x=c,v=Math.max(0,-(f*x+p)),b=-v*v+x*(x+2*m)+h;else x=-c,v=Math.max(0,-(f*x+p)),b=-v*v+x*(x+2*m)+h;else x<=-T?(v=Math.max(0,-(-f*c+p)),x=v>0?-c:Math.min(Math.max(-c,-m),c),b=-v*v+x*(x+2*m)+h):x<=T?(v=0,x=Math.min(Math.max(-c,-m),c),b=x*(x+2*m)+h):(v=Math.max(0,-(f*c+p)),x=v>0?c:Math.min(Math.max(-c,-m),c),b=-v*v+x*(x+2*m)+h);else x=f>0?-c:c,v=Math.max(0,-(f*x+p)),b=-v*v+x*(x+2*m)+h;return a&&a.copy(this.origin).addScaledVector(this.direction,v),l&&l.copy(Bh).addScaledVector(iu,x),b}intersectSphere(e,i){if(e.radius<0)return null;Ca.subVectors(e.center,this.origin);const a=Ca.dot(this.direction),l=Ca.dot(Ca)-a*a,c=e.radius*e.radius;if(l>c)return null;const f=Math.sqrt(c-l),p=a-f,m=a+f;return m<0?null:p<0?this.at(m,i):this.at(p,i)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const i=e.normal.dot(this.direction);if(i===0)return e.distanceToPoint(this.origin)===0?0:null;const a=-(this.origin.dot(e.normal)+e.constant)/i;return a>=0?a:null}intersectPlane(e,i){const a=this.distanceToPlane(e);return a===null?null:this.at(a,i)}intersectsPlane(e){const i=e.distanceToPoint(this.origin);return i===0||e.normal.dot(this.direction)*i<0}intersectBox(e,i){let a,l,c,f,p,m;const h=1/this.direction.x,g=1/this.direction.y,v=1/this.direction.z,x=this.origin;return h>=0?(a=(e.min.x-x.x)*h,l=(e.max.x-x.x)*h):(a=(e.max.x-x.x)*h,l=(e.min.x-x.x)*h),g>=0?(c=(e.min.y-x.y)*g,f=(e.max.y-x.y)*g):(c=(e.max.y-x.y)*g,f=(e.min.y-x.y)*g),a>f||c>l||((c>a||isNaN(a))&&(a=c),(f<l||isNaN(l))&&(l=f),v>=0?(p=(e.min.z-x.z)*v,m=(e.max.z-x.z)*v):(p=(e.max.z-x.z)*v,m=(e.min.z-x.z)*v),a>m||p>l)||((p>a||a!==a)&&(a=p),(m<l||l!==l)&&(l=m),l<0)?null:this.at(a>=0?a:l,i)}intersectsBox(e){return this.intersectBox(e,Ca)!==null}intersectTriangle(e,i,a,l,c){const f=this.origin,p=this.direction,m=p.x,h=p.y,g=p.z,v=e.x-f.x,x=e.y-f.y,b=e.z-f.z,T=i.x-f.x,C=i.y-f.y,y=i.z-f.z,_=a.x-f.x,U=a.y-f.y,z=a.z-f.z,N=Math.abs(m),L=Math.abs(h),O=Math.abs(g);let I,A,B,X,q,Q,fe,Y,te,H,F,J;if(N>=L&&N>=O?(B=m,Q=v,te=T,J=_,m>=0?(I=h,A=g,X=x,q=b,fe=C,Y=y,H=U,F=z):(I=g,A=h,X=b,q=x,fe=y,Y=C,H=z,F=U)):L>=O?(B=h,Q=x,te=C,J=U,h>=0?(I=g,A=m,X=b,q=v,fe=y,Y=T,H=z,F=_):(I=m,A=g,X=v,q=b,fe=T,Y=y,H=_,F=z)):(B=g,Q=b,te=y,J=z,g>=0?(I=m,A=h,X=v,q=x,fe=T,Y=C,H=_,F=U):(I=h,A=m,X=x,q=v,fe=C,Y=T,H=U,F=_)),B===0)return null;const $=I/B,he=A/B,D=1/B,ne=X-$*Q,ve=q-he*Q,Te=fe-$*te,Oe=Y-he*te,Xe=H-$*J,oe=F-he*J,_e=Xe*Oe-oe*Te,Re=ne*oe-ve*Xe,tt=Te*ve-Oe*ne;if(l){if(_e<0||Re<0||tt<0)return null}else if((_e<0||Re<0||tt<0)&&(_e>0||Re>0||tt>0))return null;const Ge=_e+Re+tt;if(Ge===0)return null;const lt=D*(_e*Q+Re*te+tt*J);return(Ge>0?lt<0:lt>0)?null:this.at(lt/Ge,c)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class fS extends nr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new bt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new er,this.combine=H_,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Iv=new tn,ks=new um,su=new Nl,Bv=new se,ru=new se,ou=new se,lu=new se,Fh=new se,cu=new se,Fv=new se,uu=new se;class Fa extends Fn{constructor(e=new $n,i=new fS){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,a=Object.keys(i);if(a.length>0){const l=i[a[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,f=l.length;c<f;c++){const p=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[p]=c}}}}getVertexPosition(e,i){const a=this.geometry,l=a.attributes.position,c=a.morphAttributes.position,f=a.morphTargetsRelative;i.fromBufferAttribute(l,e);const p=this.morphTargetInfluences;if(c&&p){cu.set(0,0,0);for(let m=0,h=c.length;m<h;m++){const g=p[m],v=c[m];g!==0&&(Fh.fromBufferAttribute(v,e),f?cu.addScaledVector(Fh,g):cu.addScaledVector(Fh.sub(i),g))}i.add(cu)}return i}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,i){const a=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(a.boundingSphere===null&&a.computeBoundingSphere(),su.copy(a.boundingSphere),su.applyMatrix4(c),ks.copy(e.ray).recast(e.near),!(su.containsPoint(ks.origin)===!1&&(ks.intersectSphere(su,Bv)===null||ks.origin.distanceToSquared(Bv)>(e.far-e.near)**2))&&(Iv.copy(c).invert(),ks.copy(e.ray).applyMatrix4(Iv),!(a.boundingBox!==null&&ks.intersectsBox(a.boundingBox)===!1)&&this._computeIntersections(e,i,ks)))}_computeIntersections(e,i,a){let l;const c=this.geometry,f=this.material,p=c.index,m=c.attributes.position,h=c.attributes.uv,g=c.attributes.uv1,v=c.attributes.normal,x=c.groups,b=c.drawRange;if(p!==null)if(Array.isArray(f))for(let T=0,C=x.length;T<C;T++){const y=x[T],_=f[y.materialIndex],U=Math.max(y.start,b.start),z=Math.min(p.count,Math.min(y.start+y.count,b.start+b.count));for(let N=U,L=z;N<L;N+=3){const O=p.getX(N),I=p.getX(N+1),A=p.getX(N+2);l=fu(this,_,e,a,h,g,v,O,I,A),l&&(l.faceIndex=Math.floor(N/3),l.face.materialIndex=y.materialIndex,i.push(l))}}else{const T=Math.max(0,b.start),C=Math.min(p.count,b.start+b.count);for(let y=T,_=C;y<_;y+=3){const U=p.getX(y),z=p.getX(y+1),N=p.getX(y+2);l=fu(this,f,e,a,h,g,v,U,z,N),l&&(l.faceIndex=Math.floor(y/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(f))for(let T=0,C=x.length;T<C;T++){const y=x[T],_=f[y.materialIndex],U=Math.max(y.start,b.start),z=Math.min(m.count,Math.min(y.start+y.count,b.start+b.count));for(let N=U,L=z;N<L;N+=3){const O=N,I=N+1,A=N+2;l=fu(this,_,e,a,h,g,v,O,I,A),l&&(l.faceIndex=Math.floor(N/3),l.face.materialIndex=y.materialIndex,i.push(l))}}else{const T=Math.max(0,b.start),C=Math.min(m.count,b.start+b.count);for(let y=T,_=C;y<_;y+=3){const U=y,z=y+1,N=y+2;l=fu(this,f,e,a,h,g,v,U,z,N),l&&(l.faceIndex=Math.floor(y/3),i.push(l))}}}}function eT(r,e,i,a,l,c,f,p){let m;if(e.side===Jn?m=a.intersectTriangle(f,c,l,!0,p):m=a.intersectTriangle(l,c,f,e.side===Qs,p),m===null)return null;uu.copy(p),uu.applyMatrix4(r.matrixWorld);const h=i.ray.origin.distanceTo(uu);return h<i.near||h>i.far?null:{distance:h,point:uu.clone(),object:r}}function fu(r,e,i,a,l,c,f,p,m,h){r.getVertexPosition(p,ru),r.getVertexPosition(m,ou),r.getVertexPosition(h,lu);const g=eT(r,e,i,a,ru,ou,lu,Fv);if(g){const v=new se;wi.getBarycoord(Fv,ru,ou,lu,v),l&&(g.uv=wi.getInterpolatedAttribute(l,p,m,h,v,new gt)),c&&(g.uv1=wi.getInterpolatedAttribute(c,p,m,h,v,new gt)),f&&(g.normal=wi.getInterpolatedAttribute(f,p,m,h,v,new se),g.normal.dot(a.direction)>0&&g.normal.multiplyScalar(-1));const x={a:p,b:m,c:h,normal:new se,materialIndex:0};wi.getNormal(ru,ou,lu,x.normal),g.face=x,g.barycoord=v}return g}class tT extends Bn{constructor(e=null,i=1,a=1,l,c,f,p,m,h=Un,g=Un,v,x){super(null,f,p,m,h,g,l,c,v,x),this.isDataTexture=!0,this.image={data:e,width:i,height:a},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Ws=new Nl,nT=new gt(.5,.5),du=new se;class dS{constructor(e=new vs,i=new vs,a=new vs,l=new vs,c=new vs,f=new vs){this.planes=[e,i,a,l,c,f]}set(e,i,a,l,c,f){const p=this.planes;return p[0].copy(e),p[1].copy(i),p[2].copy(a),p[3].copy(l),p[4].copy(c),p[5].copy(f),this}copy(e){const i=this.planes;for(let a=0;a<6;a++)i[a].copy(e.planes[a]);return this}setFromProjectionMatrix(e,i=ea,a=!1){const l=this.planes,c=e.elements,f=c[0],p=c[1],m=c[2],h=c[3],g=c[4],v=c[5],x=c[6],b=c[7],T=c[8],C=c[9],y=c[10],_=c[11],U=c[12],z=c[13],N=c[14],L=c[15];if(l[0].setComponents(h-f,b-g,_-T,L-U).normalize(),l[1].setComponents(h+f,b+g,_+T,L+U).normalize(),l[2].setComponents(h+p,b+v,_+C,L+z).normalize(),l[3].setComponents(h-p,b-v,_-C,L-z).normalize(),a)l[4].setComponents(m,x,y,N).normalize(),l[5].setComponents(h-m,b-x,_-y,L-N).normalize();else if(l[4].setComponents(h-m,b-x,_-y,L-N).normalize(),i===ea)l[5].setComponents(h+m,b+x,_+y,L+N).normalize();else if(i===Pu)l[5].setComponents(m,x,y,N).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ws.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const i=e.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),Ws.copy(i.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ws)}intersectsSprite(e){Ws.center.set(0,0,0);const i=nT.distanceTo(e.center);return Ws.radius=.7071067811865476+i,Ws.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ws)}intersectsSphere(e){const i=this.planes,a=e.center,l=-e.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(a)<l)return!1;return!0}intersectsBox(e){const i=this.planes;for(let a=0;a<6;a++){const l=i[a];if(du.x=l.normal.x>0?e.max.x:e.min.x,du.y=l.normal.y>0?e.max.y:e.min.y,du.z=l.normal.z>0?e.max.z:e.min.z,l.distanceToPoint(du)<0)return!1}return!0}containsPoint(e){const i=this.planes;for(let a=0;a<6;a++)if(i[a].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class hS extends nr{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new bt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const zu=new se,Hu=new se,zv=new tn,ml=new um,hu=new Nl,zh=new se,Hv=new se;class iT extends Fn{constructor(e=new $n,i=new hS){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const i=e.attributes.position,a=[0];for(let l=1,c=i.count;l<c;l++)zu.fromBufferAttribute(i,l-1),Hu.fromBufferAttribute(i,l),a[l]=a[l-1],a[l]+=zu.distanceTo(Hu);e.setAttribute("lineDistance",new Gi(a,1))}else it("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,i){const a=this.geometry,l=this.matrixWorld,c=e.params.Line.threshold,f=a.drawRange;if(a.boundingSphere===null&&a.computeBoundingSphere(),hu.copy(a.boundingSphere),hu.applyMatrix4(l),hu.radius+=c,e.ray.intersectsSphere(hu)===!1)return;zv.copy(l).invert(),ml.copy(e.ray).applyMatrix4(zv);const p=c/((this.scale.x+this.scale.y+this.scale.z)/3),m=p*p,h=this.isLineSegments?2:1,g=a.index,x=a.attributes.position;if(g!==null){const b=Math.max(0,f.start),T=Math.min(g.count,f.start+f.count);for(let C=b,y=T-1;C<y;C+=h){const _=g.getX(C),U=g.getX(C+1),z=pu(this,e,ml,m,_,U,C);z&&i.push(z)}if(this.isLineLoop){const C=g.getX(T-1),y=g.getX(b),_=pu(this,e,ml,m,C,y,T-1);_&&i.push(_)}}else{const b=Math.max(0,f.start),T=Math.min(x.count,f.start+f.count);for(let C=b,y=T-1;C<y;C+=h){const _=pu(this,e,ml,m,C,C+1,C);_&&i.push(_)}if(this.isLineLoop){const C=pu(this,e,ml,m,T-1,b,T-1);C&&i.push(C)}}}updateMorphTargets(){const i=this.geometry.morphAttributes,a=Object.keys(i);if(a.length>0){const l=i[a[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,f=l.length;c<f;c++){const p=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[p]=c}}}}}function pu(r,e,i,a,l,c,f){const p=r.geometry.attributes.position;if(zu.fromBufferAttribute(p,l),Hu.fromBufferAttribute(p,c),i.distanceSqToSegment(zu,Hu,zh,Hv)>a)return;zh.applyMatrix4(r.matrixWorld);const h=e.ray.origin.distanceTo(zh);if(!(h<e.near||h>e.far))return{distance:h,point:Hv.clone().applyMatrix4(r.matrixWorld),index:f,face:null,faceIndex:null,barycoord:null,object:r}}class pS extends nr{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new bt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Gv=new tn,Ip=new um,mu=new Nl,gu=new se;class aT extends Fn{constructor(e=new $n,i=new pS){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,i){const a=this.geometry,l=this.matrixWorld,c=e.params.Points.threshold,f=a.drawRange;if(a.boundingSphere===null&&a.computeBoundingSphere(),mu.copy(a.boundingSphere),mu.applyMatrix4(l),mu.radius+=c,e.ray.intersectsSphere(mu)===!1)return;Gv.copy(l).invert(),Ip.copy(e.ray).applyMatrix4(Gv);const p=c/((this.scale.x+this.scale.y+this.scale.z)/3),m=p*p,h=a.index,v=a.attributes.position;if(h!==null){const x=Math.max(0,f.start),b=Math.min(h.count,f.start+f.count);for(let T=x,C=b;T<C;T++){const y=h.getX(T);gu.fromBufferAttribute(v,y),Vv(gu,y,m,l,e,i,this)}}else{const x=Math.max(0,f.start),b=Math.min(v.count,f.start+f.count);for(let T=x,C=b;T<C;T++)gu.fromBufferAttribute(v,T),Vv(gu,T,m,l,e,i,this)}}updateMorphTargets(){const i=this.geometry.morphAttributes,a=Object.keys(i);if(a.length>0){const l=i[a[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,f=l.length;c<f;c++){const p=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[p]=c}}}}}function Vv(r,e,i,a,l,c,f){const p=Ip.distanceSqToPoint(r);if(p<i){const m=new se;Ip.closestPointToPoint(r,m),m.applyMatrix4(a);const h=l.ray.origin.distanceTo(m);if(h<l.near||h>l.far)return;c.push({distance:h,distanceToRay:Math.sqrt(p),point:m,index:e,face:null,faceIndex:null,barycoord:null,object:f})}}class mS extends Bn{constructor(e=[],i=Js,a,l,c,f,p,m,h,g){super(e,i,a,l,c,f,p,m,h,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class gS extends Bn{constructor(e,i,a,l,c,f,p,m,h){super(e,i,a,l,c,f,p,m,h),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Al extends Bn{constructor(e,i,a=na,l,c,f,p=Un,m=Un,h,g=Ba,v=1){if(g!==Ba&&g!==Zs)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const x={width:e,height:i,depth:v};super(x,l,c,f,p,m,g,a,h),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new lm(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const i=super.toJSON(e);return i.compareFunction=this.compareFunction,i}}class sT extends Al{constructor(e,i=na,a=Js,l,c,f=Un,p=Un,m,h=Ba){const g={width:e,height:e,depth:1},v=[g,g,g,g,g,g];super(e,e,i,a,l,c,f,p,m,h),this.image=v,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class xS extends Bn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Dl extends $n{constructor(e=1,i=1,a=1,l=1,c=1,f=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:i,depth:a,widthSegments:l,heightSegments:c,depthSegments:f};const p=this;l=Math.floor(l),c=Math.floor(c),f=Math.floor(f);const m=[],h=[],g=[],v=[];let x=0,b=0;T("z","y","x",-1,-1,a,i,e,f,c,0),T("z","y","x",1,-1,a,i,-e,f,c,1),T("x","z","y",1,1,e,a,i,l,f,2),T("x","z","y",1,-1,e,a,-i,l,f,3),T("x","y","z",1,-1,e,i,a,l,c,4),T("x","y","z",-1,-1,e,i,-a,l,c,5),this.setIndex(m),this.setAttribute("position",new Gi(h,3)),this.setAttribute("normal",new Gi(g,3)),this.setAttribute("uv",new Gi(v,2));function T(C,y,_,U,z,N,L,O,I,A,B){const X=N/I,q=L/A,Q=N/2,fe=L/2,Y=O/2,te=I+1,H=A+1;let F=0,J=0;const $=new se;for(let he=0;he<H;he++){const D=he*q-fe;for(let ne=0;ne<te;ne++){const ve=ne*X-Q;$[C]=ve*U,$[y]=D*z,$[_]=Y,h.push($.x,$.y,$.z),$[C]=0,$[y]=0,$[_]=O>0?1:-1,g.push($.x,$.y,$.z),v.push(ne/I),v.push(1-he/A),F+=1}}for(let he=0;he<A;he++)for(let D=0;D<I;D++){const ne=x+D+te*he,ve=x+D+te*(he+1),Te=x+(D+1)+te*(he+1),Oe=x+(D+1)+te*he;m.push(ne,ve,Oe),m.push(ve,Te,Oe),J+=6}p.addGroup(b,J,B),b+=J,x+=F}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Dl(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class ju extends $n{constructor(e=1,i=1,a=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:i,widthSegments:a,heightSegments:l};const c=e/2,f=i/2,p=Math.floor(a),m=Math.floor(l),h=p+1,g=m+1,v=e/p,x=i/m,b=[],T=[],C=[],y=[];for(let _=0;_<g;_++){const U=_*x-f;for(let z=0;z<h;z++){const N=z*v-c;T.push(N,-U,0),C.push(0,0,1),y.push(z/p),y.push(1-_/m)}}for(let _=0;_<m;_++)for(let U=0;U<p;U++){const z=U+h*_,N=U+h*(_+1),L=U+1+h*(_+1),O=U+1+h*_;b.push(z,N,O),b.push(N,L,O)}this.setIndex(b),this.setAttribute("position",new Gi(T,3)),this.setAttribute("normal",new Gi(C,3)),this.setAttribute("uv",new Gi(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ju(e.width,e.height,e.widthSegments,e.heightSegments)}}function io(r){const e={};for(const i in r){e[i]={};for(const a in r[i]){const l=r[i][a];if(kv(l))l.isRenderTargetTexture?(it("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[i][a]=null):e[i][a]=l.clone();else if(Array.isArray(l))if(kv(l[0])){const c=[];for(let f=0,p=l.length;f<p;f++)c[f]=l[f].clone();e[i][a]=c}else e[i][a]=l.slice();else e[i][a]=l}}return e}function kn(r){const e={};for(let i=0;i<r.length;i++){const a=io(r[i]);for(const l in a)e[l]=a[l]}return e}function kv(r){return r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)}function rT(r){const e=[];for(let i=0;i<r.length;i++)e.push(r[i].clone());return e}function vS(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Et.workingColorSpace}const oT={clone:io,merge:kn};var lT=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,cT=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class aa extends nr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=lT,this.fragmentShader=cT,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=io(e.uniforms),this.uniformsGroups=rT(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const i=super.toJSON(e);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const f=this.uniforms[l].value;f&&f.isTexture?i.uniforms[l]={type:"t",value:f.toJSON(e).uuid}:f&&f.isColor?i.uniforms[l]={type:"c",value:f.getHex()}:f&&f.isVector2?i.uniforms[l]={type:"v2",value:f.toArray()}:f&&f.isVector3?i.uniforms[l]={type:"v3",value:f.toArray()}:f&&f.isVector4?i.uniforms[l]={type:"v4",value:f.toArray()}:f&&f.isMatrix3?i.uniforms[l]={type:"m3",value:f.toArray()}:f&&f.isMatrix4?i.uniforms[l]={type:"m4",value:f.toArray()}:i.uniforms[l]={value:f}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const a={};for(const l in this.extensions)this.extensions[l]===!0&&(a[l]=!0);return Object.keys(a).length>0&&(i.extensions=a),i}fromJSON(e,i){if(super.fromJSON(e,i),e.uniforms!==void 0)for(const a in e.uniforms){const l=e.uniforms[a];switch(this.uniforms[a]={},l.type){case"t":this.uniforms[a].value=i[l.value]||null;break;case"c":this.uniforms[a].value=new bt().setHex(l.value);break;case"v2":this.uniforms[a].value=new gt().fromArray(l.value);break;case"v3":this.uniforms[a].value=new se().fromArray(l.value);break;case"v4":this.uniforms[a].value=new ln().fromArray(l.value);break;case"m3":this.uniforms[a].value=new rt().fromArray(l.value);break;case"m4":this.uniforms[a].value=new tn().fromArray(l.value);break;default:this.uniforms[a].value=l.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const a in e.extensions)this.extensions[a]=e.extensions[a];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class uT extends aa{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class fT extends nr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=vE,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class dT extends nr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const xu=new se,vu=new oo,Zi=new se;class _S extends Fn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new tn,this.projectionMatrix=new tn,this.projectionMatrixInverse=new tn,this.coordinateSystem=ea,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,i){return super.copy(e,i),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(xu,vu,Zi),Zi.x===1&&Zi.y===1&&Zi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(xu,vu,Zi.set(1,1,1)).invert()}updateWorldMatrix(e,i,a=!1){super.updateWorldMatrix(e,i,a),this.matrixWorld.decompose(xu,vu,Zi),Zi.x===1&&Zi.y===1&&Zi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(xu,vu,Zi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const xs=new se,Wv=new gt,Xv=new gt;class Ai extends _S{constructor(e=50,i=1,a=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=a,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const i=.5*this.getFilmHeight()/e;this.fov=Pp*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(gh*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Pp*2*Math.atan(Math.tan(gh*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,i,a){xs.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(xs.x,xs.y).multiplyScalar(-e/xs.z),xs.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),a.set(xs.x,xs.y).multiplyScalar(-e/xs.z)}getViewSize(e,i){return this.getViewBounds(e,Wv,Xv),i.subVectors(Xv,Wv)}setViewOffset(e,i,a,l,c,f){this.aspect=e/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=a,this.view.offsetY=l,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let i=e*Math.tan(gh*.5*this.fov)/this.zoom,a=2*i,l=this.aspect*a,c=-.5*l;const f=this.view;if(this.view!==null&&this.view.enabled){const m=f.fullWidth,h=f.fullHeight;c+=f.offsetX*l/m,i-=f.offsetY*a/h,l*=f.width/m,a*=f.height/h}const p=this.filmOffset;p!==0&&(c+=e*p/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-a,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}class SS extends _S{constructor(e=-1,i=1,a=1,l=-1,c=.1,f=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=i,this.top=a,this.bottom=l,this.near=c,this.far=f,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,i,a,l,c,f){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=a,this.view.offsetY=l,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),a=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=a-e,f=a+e,p=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=h*this.view.offsetX,f=c+h*this.view.width,p-=g*this.view.offsetY,m=p-g*this.view.height}this.projectionMatrix.makeOrthographic(c,f,p,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}const Zr=-90,Kr=1;class hT extends Fn{constructor(e,i,a){super(),this.type="CubeCamera",this.renderTarget=a,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new Ai(Zr,Kr,e,i);l.layers=this.layers,this.add(l);const c=new Ai(Zr,Kr,e,i);c.layers=this.layers,this.add(c);const f=new Ai(Zr,Kr,e,i);f.layers=this.layers,this.add(f);const p=new Ai(Zr,Kr,e,i);p.layers=this.layers,this.add(p);const m=new Ai(Zr,Kr,e,i);m.layers=this.layers,this.add(m);const h=new Ai(Zr,Kr,e,i);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const e=this.coordinateSystem,i=this.children.concat(),[a,l,c,f,p,m]=i;for(const h of i)this.remove(h);if(e===ea)a.up.set(0,1,0),a.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),f.up.set(0,0,1),f.lookAt(0,-1,0),p.up.set(0,1,0),p.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(e===Pu)a.up.set(0,-1,0),a.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),f.up.set(0,0,-1),f.lookAt(0,-1,0),p.up.set(0,-1,0),p.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const h of i)this.add(h),h.updateMatrixWorld()}update(e,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:a,activeMipmapLevel:l}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[c,f,p,m,h,g]=this.children,v=e.getRenderTarget(),x=e.getActiveCubeFace(),b=e.getActiveMipmapLevel(),T=e.xr.enabled;e.xr.enabled=!1;const C=a.texture.generateMipmaps;a.texture.generateMipmaps=!1;let y=!1;e.isWebGLRenderer===!0?y=e.state.buffers.depth.getReversed():y=e.reversedDepthBuffer,e.setRenderTarget(a,0,l),y&&e.autoClear===!1&&e.clearDepth(),e.render(i,c),e.setRenderTarget(a,1,l),y&&e.autoClear===!1&&e.clearDepth(),e.render(i,f),e.setRenderTarget(a,2,l),y&&e.autoClear===!1&&e.clearDepth(),e.render(i,p),e.setRenderTarget(a,3,l),y&&e.autoClear===!1&&e.clearDepth(),e.render(i,m),e.setRenderTarget(a,4,l),y&&e.autoClear===!1&&e.clearDepth(),e.render(i,h),a.texture.generateMipmaps=C,e.setRenderTarget(a,5,l),y&&e.autoClear===!1&&e.clearDepth(),e.render(i,g),e.setRenderTarget(v,x,b),e.xr.enabled=T,a.texture.needsPMREMUpdate=!0}}class pT extends Ai{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const mm=class mm{constructor(e,i,a,l){this.elements=[1,0,0,1],e!==void 0&&this.set(e,i,a,l)}identity(){return this.set(1,0,0,1),this}fromArray(e,i=0){for(let a=0;a<4;a++)this.elements[a]=e[a+i];return this}set(e,i,a,l){const c=this.elements;return c[0]=e,c[2]=i,c[1]=a,c[3]=l,this}};mm.prototype.isMatrix2=!0;let jv=mm;function qv(r,e,i,a){const l=mT(a);switch(i){case $_:return r*e;case tS:return r*e/l.components*l.byteLength;case im:return r*e/l.components*l.byteLength;case $s:return r*e*2/l.components*l.byteLength;case am:return r*e*2/l.components*l.byteLength;case eS:return r*e*3/l.components*l.byteLength;case Fi:return r*e*4/l.components*l.byteLength;case sm:return r*e*4/l.components*l.byteLength;case Eu:case Tu:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Au:case Ru:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case rp:case lp:return Math.max(r,16)*Math.max(e,8)/4;case sp:case op:return Math.max(r,8)*Math.max(e,8)/2;case cp:case up:case dp:case hp:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case fp:case Du:case pp:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case mp:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case gp:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case xp:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case vp:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case _p:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case Sp:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case yp:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case bp:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case Mp:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case Ep:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case Tp:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case Ap:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case Rp:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case wp:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case Cp:case Np:case Dp:return Math.ceil(r/4)*Math.ceil(e/4)*16;case Up:case Lp:return Math.ceil(r/4)*Math.ceil(e/4)*8;case Uu:case Op:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function mT(r){switch(r){case Ri:case Z_:return{byteLength:1,components:1};case El:case K_:case ia:return{byteLength:2,components:1};case tm:case nm:return{byteLength:2,components:4};case na:case em:case $i:return{byteLength:4,components:1};case Q_:case J_:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:$p}}));typeof window<"u"&&(window.__THREE__?it("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=$p);function yS(){let r=null,e=!1,i=null,a=null;function l(c,f){a=r.requestAnimationFrame(l),i(c,f)}return{start:function(){e!==!0&&i!==null&&r!==null&&(a=r.requestAnimationFrame(l),e=!0)},stop:function(){r!==null&&r.cancelAnimationFrame(a),e=!1},setAnimationLoop:function(c){i=c},setContext:function(c){r=c}}}function gT(r){const e=new WeakMap;function i(p,m){const h=p.array,g=p.usage,v=h.byteLength,x=r.createBuffer();r.bindBuffer(m,x),r.bufferData(m,h,g),p.onUploadCallback();let b;if(h instanceof Float32Array)b=r.FLOAT;else if(typeof Float16Array<"u"&&h instanceof Float16Array)b=r.HALF_FLOAT;else if(h instanceof Uint16Array)p.isFloat16BufferAttribute?b=r.HALF_FLOAT:b=r.UNSIGNED_SHORT;else if(h instanceof Int16Array)b=r.SHORT;else if(h instanceof Uint32Array)b=r.UNSIGNED_INT;else if(h instanceof Int32Array)b=r.INT;else if(h instanceof Int8Array)b=r.BYTE;else if(h instanceof Uint8Array)b=r.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)b=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:x,type:b,bytesPerElement:h.BYTES_PER_ELEMENT,version:p.version,size:v}}function a(p,m,h){const g=m.array,v=m.updateRanges;if(r.bindBuffer(h,p),v.length===0)r.bufferSubData(h,0,g);else{v.sort((b,T)=>b.start-T.start);let x=0;for(let b=1;b<v.length;b++){const T=v[x],C=v[b];C.start<=T.start+T.count+1?T.count=Math.max(T.count,C.start+C.count-T.start):(++x,v[x]=C)}v.length=x+1;for(let b=0,T=v.length;b<T;b++){const C=v[b];r.bufferSubData(h,C.start*g.BYTES_PER_ELEMENT,g,C.start,C.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(p){return p.isInterleavedBufferAttribute&&(p=p.data),e.get(p)}function c(p){p.isInterleavedBufferAttribute&&(p=p.data);const m=e.get(p);m&&(r.deleteBuffer(m.buffer),e.delete(p))}function f(p,m){if(p.isInterleavedBufferAttribute&&(p=p.data),p.isGLBufferAttribute){const g=e.get(p);(!g||g.version<p.version)&&e.set(p,{buffer:p.buffer,type:p.type,bytesPerElement:p.elementSize,version:p.version});return}const h=e.get(p);if(h===void 0)e.set(p,i(p,m));else if(h.version<p.version){if(h.size!==p.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");a(h.buffer,p,m),h.version=p.version}}return{get:l,remove:c,update:f}}var xT=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,vT=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,_T=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ST=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,yT=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,bT=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,MT=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,ET=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,TT=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,AT=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,RT=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,wT=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,CT=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,NT=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,DT=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,UT=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,LT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,OT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,PT=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,IT=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,BT=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,FT=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,zT=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,HT=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,GT=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,VT=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,kT=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,WT=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,XT=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,jT=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,qT="gl_FragColor = linearToOutputTexel( gl_FragColor );",YT=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,ZT=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,KT=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,QT=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,JT=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,$T=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,eA=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,tA=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,nA=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,iA=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,aA=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,sA=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,rA=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,oA=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lA=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,cA=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,uA=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,fA=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,dA=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,hA=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,pA=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,mA=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,gA=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,xA=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,vA=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,_A=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,SA=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,yA=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,bA=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,MA=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,EA=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,TA=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,AA=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,RA=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,wA=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,CA=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,NA=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,DA=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,UA=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,LA=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,OA=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,PA=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,IA=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,BA=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,FA=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,zA=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,HA=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,GA=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,VA=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,kA=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,WA=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,XA=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,jA=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,qA=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,YA=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ZA=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,KA=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,QA=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,JA=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,$A=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,e3=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,t3=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,n3=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,i3=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,a3=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,s3=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,r3=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,o3=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,l3=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,c3=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,u3=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,f3=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,d3=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,h3=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,p3=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,m3=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,g3=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const x3=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,v3=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_3=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,S3=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,y3=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,b3=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,M3=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,E3=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,T3=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,A3=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,R3=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,w3=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,C3=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,N3=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,D3=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,U3=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,L3=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,O3=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,P3=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,I3=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,B3=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,F3=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,z3=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,H3=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,G3=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,V3=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,k3=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,W3=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,X3=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,j3=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,q3=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Y3=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Z3=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,K3=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ht={alphahash_fragment:xT,alphahash_pars_fragment:vT,alphamap_fragment:_T,alphamap_pars_fragment:ST,alphatest_fragment:yT,alphatest_pars_fragment:bT,aomap_fragment:MT,aomap_pars_fragment:ET,batching_pars_vertex:TT,batching_vertex:AT,begin_vertex:RT,beginnormal_vertex:wT,bsdfs:CT,iridescence_fragment:NT,bumpmap_pars_fragment:DT,clipping_planes_fragment:UT,clipping_planes_pars_fragment:LT,clipping_planes_pars_vertex:OT,clipping_planes_vertex:PT,color_fragment:IT,color_pars_fragment:BT,color_pars_vertex:FT,color_vertex:zT,common:HT,cube_uv_reflection_fragment:GT,defaultnormal_vertex:VT,displacementmap_pars_vertex:kT,displacementmap_vertex:WT,emissivemap_fragment:XT,emissivemap_pars_fragment:jT,colorspace_fragment:qT,colorspace_pars_fragment:YT,envmap_fragment:ZT,envmap_common_pars_fragment:KT,envmap_pars_fragment:QT,envmap_pars_vertex:JT,envmap_physical_pars_fragment:cA,envmap_vertex:$T,fog_vertex:eA,fog_pars_vertex:tA,fog_fragment:nA,fog_pars_fragment:iA,gradientmap_pars_fragment:aA,lightmap_pars_fragment:sA,lights_lambert_fragment:rA,lights_lambert_pars_fragment:oA,lights_pars_begin:lA,lights_toon_fragment:uA,lights_toon_pars_fragment:fA,lights_phong_fragment:dA,lights_phong_pars_fragment:hA,lights_physical_fragment:pA,lights_physical_pars_fragment:mA,lights_fragment_begin:gA,lights_fragment_maps:xA,lights_fragment_end:vA,lightprobes_pars_fragment:_A,logdepthbuf_fragment:SA,logdepthbuf_pars_fragment:yA,logdepthbuf_pars_vertex:bA,logdepthbuf_vertex:MA,map_fragment:EA,map_pars_fragment:TA,map_particle_fragment:AA,map_particle_pars_fragment:RA,metalnessmap_fragment:wA,metalnessmap_pars_fragment:CA,morphinstance_vertex:NA,morphcolor_vertex:DA,morphnormal_vertex:UA,morphtarget_pars_vertex:LA,morphtarget_vertex:OA,normal_fragment_begin:PA,normal_fragment_maps:IA,normal_pars_fragment:BA,normal_pars_vertex:FA,normal_vertex:zA,normalmap_pars_fragment:HA,clearcoat_normal_fragment_begin:GA,clearcoat_normal_fragment_maps:VA,clearcoat_pars_fragment:kA,iridescence_pars_fragment:WA,opaque_fragment:XA,packing:jA,premultiplied_alpha_fragment:qA,project_vertex:YA,dithering_fragment:ZA,dithering_pars_fragment:KA,roughnessmap_fragment:QA,roughnessmap_pars_fragment:JA,shadowmap_pars_fragment:$A,shadowmap_pars_vertex:e3,shadowmap_vertex:t3,shadowmask_pars_fragment:n3,skinbase_vertex:i3,skinning_pars_vertex:a3,skinning_vertex:s3,skinnormal_vertex:r3,specularmap_fragment:o3,specularmap_pars_fragment:l3,tonemapping_fragment:c3,tonemapping_pars_fragment:u3,transmission_fragment:f3,transmission_pars_fragment:d3,uv_pars_fragment:h3,uv_pars_vertex:p3,uv_vertex:m3,worldpos_vertex:g3,background_vert:x3,background_frag:v3,backgroundCube_vert:_3,backgroundCube_frag:S3,cube_vert:y3,cube_frag:b3,depth_vert:M3,depth_frag:E3,distance_vert:T3,distance_frag:A3,equirect_vert:R3,equirect_frag:w3,linedashed_vert:C3,linedashed_frag:N3,meshbasic_vert:D3,meshbasic_frag:U3,meshlambert_vert:L3,meshlambert_frag:O3,meshmatcap_vert:P3,meshmatcap_frag:I3,meshnormal_vert:B3,meshnormal_frag:F3,meshphong_vert:z3,meshphong_frag:H3,meshphysical_vert:G3,meshphysical_frag:V3,meshtoon_vert:k3,meshtoon_frag:W3,points_vert:X3,points_frag:j3,shadow_vert:q3,shadow_frag:Y3,sprite_vert:Z3,sprite_frag:K3},Be={common:{diffuse:{value:new bt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new rt},alphaMap:{value:null},alphaMapTransform:{value:new rt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new rt}},envmap:{envMap:{value:null},envMapRotation:{value:new rt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new rt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new rt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new rt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new rt},normalScale:{value:new gt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new rt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new rt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new rt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new rt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new bt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new se},probesMax:{value:new se},probesResolution:{value:new se}},points:{diffuse:{value:new bt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new rt},alphaTest:{value:0},uvTransform:{value:new rt}},sprite:{diffuse:{value:new bt(16777215)},opacity:{value:1},center:{value:new gt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new rt},alphaMap:{value:null},alphaMapTransform:{value:new rt},alphaTest:{value:0}}},Qi={basic:{uniforms:kn([Be.common,Be.specularmap,Be.envmap,Be.aomap,Be.lightmap,Be.fog]),vertexShader:ht.meshbasic_vert,fragmentShader:ht.meshbasic_frag},lambert:{uniforms:kn([Be.common,Be.specularmap,Be.envmap,Be.aomap,Be.lightmap,Be.emissivemap,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.fog,Be.lights,{emissive:{value:new bt(0)},envMapIntensity:{value:1}}]),vertexShader:ht.meshlambert_vert,fragmentShader:ht.meshlambert_frag},phong:{uniforms:kn([Be.common,Be.specularmap,Be.envmap,Be.aomap,Be.lightmap,Be.emissivemap,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.fog,Be.lights,{emissive:{value:new bt(0)},specular:{value:new bt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ht.meshphong_vert,fragmentShader:ht.meshphong_frag},standard:{uniforms:kn([Be.common,Be.envmap,Be.aomap,Be.lightmap,Be.emissivemap,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.roughnessmap,Be.metalnessmap,Be.fog,Be.lights,{emissive:{value:new bt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ht.meshphysical_vert,fragmentShader:ht.meshphysical_frag},toon:{uniforms:kn([Be.common,Be.aomap,Be.lightmap,Be.emissivemap,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.gradientmap,Be.fog,Be.lights,{emissive:{value:new bt(0)}}]),vertexShader:ht.meshtoon_vert,fragmentShader:ht.meshtoon_frag},matcap:{uniforms:kn([Be.common,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.fog,{matcap:{value:null}}]),vertexShader:ht.meshmatcap_vert,fragmentShader:ht.meshmatcap_frag},points:{uniforms:kn([Be.points,Be.fog]),vertexShader:ht.points_vert,fragmentShader:ht.points_frag},dashed:{uniforms:kn([Be.common,Be.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ht.linedashed_vert,fragmentShader:ht.linedashed_frag},depth:{uniforms:kn([Be.common,Be.displacementmap]),vertexShader:ht.depth_vert,fragmentShader:ht.depth_frag},normal:{uniforms:kn([Be.common,Be.bumpmap,Be.normalmap,Be.displacementmap,{opacity:{value:1}}]),vertexShader:ht.meshnormal_vert,fragmentShader:ht.meshnormal_frag},sprite:{uniforms:kn([Be.sprite,Be.fog]),vertexShader:ht.sprite_vert,fragmentShader:ht.sprite_frag},background:{uniforms:{uvTransform:{value:new rt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ht.background_vert,fragmentShader:ht.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new rt}},vertexShader:ht.backgroundCube_vert,fragmentShader:ht.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ht.cube_vert,fragmentShader:ht.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ht.equirect_vert,fragmentShader:ht.equirect_frag},distance:{uniforms:kn([Be.common,Be.displacementmap,{referencePosition:{value:new se},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ht.distance_vert,fragmentShader:ht.distance_frag},shadow:{uniforms:kn([Be.lights,Be.fog,{color:{value:new bt(0)},opacity:{value:1}}]),vertexShader:ht.shadow_vert,fragmentShader:ht.shadow_frag}};Qi.physical={uniforms:kn([Qi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new rt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new rt},clearcoatNormalScale:{value:new gt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new rt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new rt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new rt},sheen:{value:0},sheenColor:{value:new bt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new rt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new rt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new rt},transmissionSamplerSize:{value:new gt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new rt},attenuationDistance:{value:0},attenuationColor:{value:new bt(0)},specularColor:{value:new bt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new rt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new rt},anisotropyVector:{value:new gt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new rt}}]),vertexShader:ht.meshphysical_vert,fragmentShader:ht.meshphysical_frag};const _u={r:0,b:0,g:0},Q3=new tn,bS=new rt;bS.set(-1,0,0,0,1,0,0,0,1);function J3(r,e,i,a,l,c){const f=new bt(0);let p=l===!0?0:1,m,h,g=null,v=0,x=null;function b(U){let z=U.isScene===!0?U.background:null;if(z&&z.isTexture){const N=U.backgroundBlurriness>0;z=e.get(z,N)}return z}function T(U){let z=!1;const N=b(U);N===null?y(f,p):N&&N.isColor&&(y(N,1),z=!0);const L=r.xr.getEnvironmentBlendMode();L==="additive"?i.buffers.color.setClear(0,0,0,1,c):L==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,c),(r.autoClear||z)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function C(U,z){const N=b(z);N&&(N.isCubeTexture||N.mapping===Xu)?(h===void 0&&(h=new Fa(new Dl(1,1,1),new aa({name:"BackgroundCubeMaterial",uniforms:io(Qi.backgroundCube.uniforms),vertexShader:Qi.backgroundCube.vertexShader,fragmentShader:Qi.backgroundCube.fragmentShader,side:Jn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(L,O,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),a.update(h)),h.material.uniforms.envMap.value=N,h.material.uniforms.backgroundBlurriness.value=z.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=z.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Q3.makeRotationFromEuler(z.backgroundRotation)).transpose(),N.isCubeTexture&&N.isRenderTargetTexture===!1&&h.material.uniforms.backgroundRotation.value.premultiply(bS),h.material.toneMapped=Et.getTransfer(N.colorSpace)!==Ft,(g!==N||v!==N.version||x!==r.toneMapping)&&(h.material.needsUpdate=!0,g=N,v=N.version,x=r.toneMapping),h.layers.enableAll(),U.unshift(h,h.geometry,h.material,0,0,null)):N&&N.isTexture&&(m===void 0&&(m=new Fa(new ju(2,2),new aa({name:"BackgroundMaterial",uniforms:io(Qi.background.uniforms),vertexShader:Qi.background.vertexShader,fragmentShader:Qi.background.fragmentShader,side:Qs,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),a.update(m)),m.material.uniforms.t2D.value=N,m.material.uniforms.backgroundIntensity.value=z.backgroundIntensity,m.material.toneMapped=Et.getTransfer(N.colorSpace)!==Ft,N.matrixAutoUpdate===!0&&N.updateMatrix(),m.material.uniforms.uvTransform.value.copy(N.matrix),(g!==N||v!==N.version||x!==r.toneMapping)&&(m.material.needsUpdate=!0,g=N,v=N.version,x=r.toneMapping),m.layers.enableAll(),U.unshift(m,m.geometry,m.material,0,0,null))}function y(U,z){U.getRGB(_u,vS(r)),i.buffers.color.setClear(_u.r,_u.g,_u.b,z,c)}function _(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0)}return{getClearColor:function(){return f},setClearColor:function(U,z=1){f.set(U),p=z,y(f,p)},getClearAlpha:function(){return p},setClearAlpha:function(U){p=U,y(f,p)},render:T,addToRenderList:C,dispose:_}}function $3(r,e){const i=r.getParameter(r.MAX_VERTEX_ATTRIBS),a={},l=x(null);let c=l,f=!1;function p(q,Q,fe,Y,te){let H=!1;const F=v(q,Y,fe,Q);c!==F&&(c=F,h(c.object)),H=b(q,Y,fe,te),H&&T(q,Y,fe,te),te!==null&&e.update(te,r.ELEMENT_ARRAY_BUFFER),(H||f)&&(f=!1,N(q,Q,fe,Y),te!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(te).buffer))}function m(){return r.createVertexArray()}function h(q){return r.bindVertexArray(q)}function g(q){return r.deleteVertexArray(q)}function v(q,Q,fe,Y){const te=Y.wireframe===!0;let H=a[Q.id];H===void 0&&(H={},a[Q.id]=H);const F=q.isInstancedMesh===!0?q.id:0;let J=H[F];J===void 0&&(J={},H[F]=J);let $=J[fe.id];$===void 0&&($={},J[fe.id]=$);let he=$[te];return he===void 0&&(he=x(m()),$[te]=he),he}function x(q){const Q=[],fe=[],Y=[];for(let te=0;te<i;te++)Q[te]=0,fe[te]=0,Y[te]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:Q,enabledAttributes:fe,attributeDivisors:Y,object:q,attributes:{},index:null}}function b(q,Q,fe,Y){const te=c.attributes,H=Q.attributes;let F=0;const J=fe.getAttributes();for(const $ in J)if(J[$].location>=0){const D=te[$];let ne=H[$];if(ne===void 0&&($==="instanceMatrix"&&q.instanceMatrix&&(ne=q.instanceMatrix),$==="instanceColor"&&q.instanceColor&&(ne=q.instanceColor)),D===void 0||D.attribute!==ne||ne&&D.data!==ne.data)return!0;F++}return c.attributesNum!==F||c.index!==Y}function T(q,Q,fe,Y){const te={},H=Q.attributes;let F=0;const J=fe.getAttributes();for(const $ in J)if(J[$].location>=0){let D=H[$];D===void 0&&($==="instanceMatrix"&&q.instanceMatrix&&(D=q.instanceMatrix),$==="instanceColor"&&q.instanceColor&&(D=q.instanceColor));const ne={};ne.attribute=D,D&&D.data&&(ne.data=D.data),te[$]=ne,F++}c.attributes=te,c.attributesNum=F,c.index=Y}function C(){const q=c.newAttributes;for(let Q=0,fe=q.length;Q<fe;Q++)q[Q]=0}function y(q){_(q,0)}function _(q,Q){const fe=c.newAttributes,Y=c.enabledAttributes,te=c.attributeDivisors;fe[q]=1,Y[q]===0&&(r.enableVertexAttribArray(q),Y[q]=1),te[q]!==Q&&(r.vertexAttribDivisor(q,Q),te[q]=Q)}function U(){const q=c.newAttributes,Q=c.enabledAttributes;for(let fe=0,Y=Q.length;fe<Y;fe++)Q[fe]!==q[fe]&&(r.disableVertexAttribArray(fe),Q[fe]=0)}function z(q,Q,fe,Y,te,H,F){F===!0?r.vertexAttribIPointer(q,Q,fe,te,H):r.vertexAttribPointer(q,Q,fe,Y,te,H)}function N(q,Q,fe,Y){C();const te=Y.attributes,H=fe.getAttributes(),F=Q.defaultAttributeValues;for(const J in H){const $=H[J];if($.location>=0){let he=te[J];if(he===void 0&&(J==="instanceMatrix"&&q.instanceMatrix&&(he=q.instanceMatrix),J==="instanceColor"&&q.instanceColor&&(he=q.instanceColor)),he!==void 0){const D=he.normalized,ne=he.itemSize,ve=e.get(he);if(ve===void 0)continue;const Te=ve.buffer,Oe=ve.type,Xe=ve.bytesPerElement,oe=Oe===r.INT||Oe===r.UNSIGNED_INT||he.gpuType===em;if(he.isInterleavedBufferAttribute){const _e=he.data,Re=_e.stride,tt=he.offset;if(_e.isInstancedInterleavedBuffer){for(let Ge=0;Ge<$.locationSize;Ge++)_($.location+Ge,_e.meshPerAttribute);q.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=_e.meshPerAttribute*_e.count)}else for(let Ge=0;Ge<$.locationSize;Ge++)y($.location+Ge);r.bindBuffer(r.ARRAY_BUFFER,Te);for(let Ge=0;Ge<$.locationSize;Ge++)z($.location+Ge,ne/$.locationSize,Oe,D,Re*Xe,(tt+ne/$.locationSize*Ge)*Xe,oe)}else{if(he.isInstancedBufferAttribute){for(let _e=0;_e<$.locationSize;_e++)_($.location+_e,he.meshPerAttribute);q.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=he.meshPerAttribute*he.count)}else for(let _e=0;_e<$.locationSize;_e++)y($.location+_e);r.bindBuffer(r.ARRAY_BUFFER,Te);for(let _e=0;_e<$.locationSize;_e++)z($.location+_e,ne/$.locationSize,Oe,D,ne*Xe,ne/$.locationSize*_e*Xe,oe)}}else if(F!==void 0){const D=F[J];if(D!==void 0)switch(D.length){case 2:r.vertexAttrib2fv($.location,D);break;case 3:r.vertexAttrib3fv($.location,D);break;case 4:r.vertexAttrib4fv($.location,D);break;default:r.vertexAttrib1fv($.location,D)}}}}U()}function L(){B();for(const q in a){const Q=a[q];for(const fe in Q){const Y=Q[fe];for(const te in Y){const H=Y[te];for(const F in H)g(H[F].object),delete H[F];delete Y[te]}}delete a[q]}}function O(q){if(a[q.id]===void 0)return;const Q=a[q.id];for(const fe in Q){const Y=Q[fe];for(const te in Y){const H=Y[te];for(const F in H)g(H[F].object),delete H[F];delete Y[te]}}delete a[q.id]}function I(q){for(const Q in a){const fe=a[Q];for(const Y in fe){const te=fe[Y];if(te[q.id]===void 0)continue;const H=te[q.id];for(const F in H)g(H[F].object),delete H[F];delete te[q.id]}}}function A(q){for(const Q in a){const fe=a[Q],Y=q.isInstancedMesh===!0?q.id:0,te=fe[Y];if(te!==void 0){for(const H in te){const F=te[H];for(const J in F)g(F[J].object),delete F[J];delete te[H]}delete fe[Y],Object.keys(fe).length===0&&delete a[Q]}}}function B(){X(),f=!0,c!==l&&(c=l,h(c.object))}function X(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:p,reset:B,resetDefaultState:X,dispose:L,releaseStatesOfGeometry:O,releaseStatesOfObject:A,releaseStatesOfProgram:I,initAttributes:C,enableAttribute:y,disableUnusedAttributes:U}}function e2(r,e,i){let a;function l(m){a=m}function c(m,h){r.drawArrays(a,m,h),i.update(h,a,1)}function f(m,h,g){g!==0&&(r.drawArraysInstanced(a,m,h,g),i.update(h,a,g))}function p(m,h,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(a,m,0,h,0,g);let x=0;for(let b=0;b<g;b++)x+=h[b];i.update(x,a,1)}this.setMode=l,this.render=c,this.renderInstances=f,this.renderMultiDraw=p}function t2(r,e,i,a){let l;function c(){if(l!==void 0)return l;if(e.has("EXT_texture_filter_anisotropic")===!0){const I=e.get("EXT_texture_filter_anisotropic");l=r.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function f(I){return!(I!==Fi&&a.convert(I)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function p(I){const A=I===ia&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(I!==Ri&&I!==$i&&!A&&a.convert(I)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE))}function m(I){if(I==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=i.precision!==void 0?i.precision:"highp";const g=m(h);g!==h&&(it("WebGLRenderer:",h,"not supported, using",g,"instead."),h=g);const v=i.logarithmicDepthBuffer===!0,x=i.reversedDepthBuffer===!0&&e.has("EXT_clip_control");i.reversedDepthBuffer===!0&&x===!1&&it("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const b=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),T=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),C=r.getParameter(r.MAX_TEXTURE_SIZE),y=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),_=r.getParameter(r.MAX_VERTEX_ATTRIBS),U=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),z=r.getParameter(r.MAX_VARYING_VECTORS),N=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),L=r.getParameter(r.MAX_SAMPLES),O=r.getParameter(r.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:m,textureFormatReadable:f,textureTypeReadable:p,precision:h,logarithmicDepthBuffer:v,reversedDepthBuffer:x,maxTextures:b,maxVertexTextures:T,maxTextureSize:C,maxCubemapSize:y,maxAttributes:_,maxVertexUniforms:U,maxVaryings:z,maxFragmentUniforms:N,maxSamples:L,samples:O}}function n2(r){const e=this;let i=null,a=0,l=!1,c=!1;const f=new vs,p=new rt,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(v,x){const b=v.length!==0||x||a!==0||l;return l=x,a=v.length,b},this.beginShadows=function(){c=!0,g(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(v,x){i=g(v,x,0)},this.setState=function(v,x,b){const T=v.clippingPlanes,C=v.clipIntersection,y=v.clipShadows,_=r.get(v);if(!l||T===null||T.length===0||c&&!y)c?g(null):h();else{const U=c?0:a,z=U*4;let N=_.clippingState||null;m.value=N,N=g(T,x,z,b);for(let L=0;L!==z;++L)N[L]=i[L];_.clippingState=N,this.numIntersection=C?this.numPlanes:0,this.numPlanes+=U}};function h(){m.value!==i&&(m.value=i,m.needsUpdate=a>0),e.numPlanes=a,e.numIntersection=0}function g(v,x,b,T){const C=v!==null?v.length:0;let y=null;if(C!==0){if(y=m.value,T!==!0||y===null){const _=b+C*4,U=x.matrixWorldInverse;p.getNormalMatrix(U),(y===null||y.length<_)&&(y=new Float32Array(_));for(let z=0,N=b;z!==C;++z,N+=4)f.copy(v[z]).applyMatrix4(U,p),f.normal.toArray(y,N),y[N+3]=f.constant}m.value=y,m.needsUpdate=!0}return e.numPlanes=C,e.numIntersection=0,y}}const $r=4,i2=6,a2=20,s2=256,gl=new SS,Yv=new bt;let Hh=null,Gh=0,Vh=0,kh=!1;const r2=new se,Xs=new se;class Zv{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,i=0,a=.1,l=100,c={}){const{size:f=256,position:p=r2}=c;Hh=this._renderer.getRenderTarget(),Gh=this._renderer.getActiveCubeFace(),Vh=this._renderer.getActiveMipmapLevel(),kh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(f);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(e,a,l,m,p),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(e,i=null){return this._fromTexture(e,i)}fromCubemap(e,i=null){return this._fromTexture(e,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Jv(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Qv(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Hh,Gh,Vh),this._renderer.xr.enabled=kh,e.scissorTest=!1,Qr(e,0,0,e.width,e.height)}_fromTexture(e,i){e.mapping===Js||e.mapping===no?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Hh=this._renderer.getRenderTarget(),Gh=this._renderer.getActiveCubeFace(),Vh=this._renderer.getActiveMipmapLevel(),kh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const a=i||this._allocateTargets();return this._textureToCubeUV(e,a),this._applyPMREM(a),this._cleanup(a),a}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,a={magFilter:In,minFilter:In,generateMipmaps:!1,type:ia,format:Fi,colorSpace:Lu,depthBuffer:!1},l=Kv(e,i,a);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Kv(e,i,a);const{_lodMax:c}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=o2(c)),this._blurMaterial=c2(c,e,i),this._ggxMaterial=l2(c,e,i)}return l}_compileMaterial(e){const i=new Fa(new $n,e);this._renderer.compile(i,gl)}_sceneToCubeUV(e,i,a,l,c){const m=new Ai(90,1,i,a),h=[1,-1,1,1,1,1],g=[1,1,1,-1,-1,-1],v=this._renderer,x=v.autoClear,b=v.toneMapping;v.getClearColor(Yv),v.toneMapping=ta,v.autoClear=!1,v.state.buffers.depth.getReversed()&&(v.setRenderTarget(l),v.clearDepth(),v.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Fa(new Dl,new fS({name:"PMREM.Background",side:Jn,depthWrite:!1,depthTest:!1})));const C=this._backgroundBox,y=C.material;let _=!1;const U=e.background;U?U.isColor&&(y.color.copy(U),e.background=null,_=!0):(y.color.copy(Yv),_=!0);for(let z=0;z<6;z++){const N=z%3;N===0?(m.up.set(0,h[z],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x+g[z],c.y,c.z)):N===1?(m.up.set(0,0,h[z]),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y+g[z],c.z)):(m.up.set(0,h[z],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y,c.z+g[z]));const L=this._cubeSize;Qr(l,N*L,z>2?L:0,L,L),v.setRenderTarget(l),_&&v.render(C,m),v.render(e,m)}v.toneMapping=b,v.autoClear=x,e.background=U}_textureToCubeUV(e,i){const a=this._renderer,l=e.mapping===Js||e.mapping===no;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=Jv()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Qv());const c=l?this._cubemapMaterial:this._equirectMaterial,f=this._lodMeshes[0];f.material=c;const p=c.uniforms;p.envMap.value=e;const m=this._cubeSize;Qr(i,0,0,3*m,2*m),a.setRenderTarget(i),a.render(f,gl)}_applyPMREM(e){const i=this._renderer,a=i.autoClear;i.autoClear=!1;const l=this._lodMeshes.length;for(let c=1;c<l;c++)this._applyGGXFilter(e,c-1,c);i.autoClear=a}_applyGGXFilter(e,i,a){const l=this._renderer,c=this._pingPongRenderTarget,f=this._ggxMaterial,p=this._lodMeshes[a];p.material=f;const m=f.uniforms,h=a/(this._lodMeshes.length-1),g=i/(this._lodMeshes.length-1),v=Math.sqrt(h*h-g*g),x=h*1.25,b=v*x,{_lodMax:T}=this,C=this._sizeLods[a],y=3*C*(a>T-$r?a-T+$r:0),_=4*(this._cubeSize-C);m.envMap.value=e.texture,m.roughness.value=b,m.mipInt.value=T-i,Qr(c,y,_,3*C,2*C),l.setRenderTarget(c),l.render(p,gl),m.envMap.value=c.texture,m.roughness.value=0,m.mipInt.value=T-a,Qr(e,y,_,3*C,2*C),l.setRenderTarget(e),l.render(p,gl)}_blur(e,i,a,l){const c=this._pingPongRenderTarget,f=Math.min(l,Math.PI)/Math.SQRT2;this._blurPass(e,c,i,a,f),this._blurPass(c,e,a,a,f)}_blurPass(e,i,a,l,c){const f=this._renderer,p=this._blurMaterial,m=this._lodMeshes[l];m.material=p;const h=p.uniforms;h.envMap.value=e.texture,h.sigma.value=c,h.mipInt.value=this._lodMax-a;const g=this._sizeLods[l],v=3*g*(l>this._lodMax-$r?l-this._lodMax+$r:0),x=4*(this._cubeSize-g);Qr(i,v,x,3*g,2*g),f.setRenderTarget(i),f.render(m,gl)}}function o2(r){const e=[],i=[];let a=r;const l=r-$r+1+i2;for(let c=0;c<l;c++){const f=Math.pow(2,a);e.push(f);const p=1/(f-2),m=-p,h=1+p,g=[m,m,h,m,h,h,m,m,h,h,m,h],v=6,x=6,b=3,T=new Float32Array(b*x*v),C=new Float32Array(b*x*v);for(let _=0;_<v;_++){const U=_%3*2/3-1,z=_>2?0:-1,N=[U,z,0,U+2/3,z,0,U+2/3,z+1,0,U,z,0,U+2/3,z+1,0,U,z+1,0];T.set(N,b*x*_);for(let L=0;L<x;L++){const O=g[L*2]*2-1,I=g[L*2+1]*2-1;_===0?Xs.set(1,I,O):_===1?Xs.set(-O,1,-I):_===2?Xs.set(-O,I,1):_===3?Xs.set(-1,I,-O):_===4?Xs.set(-O,-1,I):Xs.set(O,I,-1),Xs.toArray(C,(_*x+L)*b)}}const y=new $n;y.setAttribute("position",new Ci(T,b)),y.setAttribute("outputDirection",new Ci(C,b)),i.push(new Fa(y,null)),a>$r&&a--}return{lodMeshes:i,sizeLods:e}}function Kv(r,e,i){const a=new Hi(r,e,i);return a.texture.mapping=Xu,a.texture.name="PMREM.cubeUv",a.scissorTest=!0,a}function Qr(r,e,i,a,l){r.viewport.set(e,i,a,l),r.scissor.set(e,i,a,l)}function l2(r,e,i){return new aa({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:s2,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:qu(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Oa,depthTest:!1,depthWrite:!1})}function c2(r,e,i){return new aa({name:"SphericalGaussianBlur",defines:{SAMPLES:a2,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:qu(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:Oa,depthTest:!1,depthWrite:!1})}function Qv(){return new aa({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:qu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Oa,depthTest:!1,depthWrite:!1})}function Jv(){return new aa({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:qu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Oa,depthTest:!1,depthWrite:!1})}function qu(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class MS extends Hi{constructor(e=1,i={}){super(e,e,i),this.isWebGLCubeRenderTarget=!0;const a={width:e,height:e,depth:1},l=[a,a,a,a,a,a];this.texture=new mS(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const a={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},l=new Dl(5,5,5),c=new aa({name:"CubemapFromEquirect",uniforms:io(a.uniforms),vertexShader:a.vertexShader,fragmentShader:a.fragmentShader,side:Jn,blending:Oa});c.uniforms.tEquirect.value=i;const f=new Fa(l,c),p=i.minFilter;return i.minFilter===Ys&&(i.minFilter=In),new hT(1,10,this).update(e,f),i.minFilter=p,f.geometry.dispose(),f.material.dispose(),this}clear(e,i=!0,a=!0,l=!0){const c=e.getRenderTarget();for(let f=0;f<6;f++)e.setRenderTarget(this,f),e.clear(i,a,l);e.setRenderTarget(c)}}function u2(r){let e=new WeakMap,i=new WeakMap,a=null;function l(x,b=!1){return x==null?null:b?f(x):c(x)}function c(x){if(x&&x.isTexture){const b=x.mapping;if(b===dh||b===hh)if(e.has(x)){const T=e.get(x).texture;return p(T,x.mapping)}else{const T=x.image;if(T&&T.height>0){const C=new MS(T.height);return C.fromEquirectangularTexture(r,x),e.set(x,C),x.addEventListener("dispose",h),p(C.texture,x.mapping)}else return null}}return x}function f(x){if(x&&x.isTexture){const b=x.mapping,T=b===dh||b===hh,C=b===Js||b===no;if(T||C){let y=i.get(x);const _=y!==void 0?y.texture.pmremVersion:0;if(x.isRenderTargetTexture&&x.pmremVersion!==_)return a===null&&(a=new Zv(r)),y=T?a.fromEquirectangular(x,y):a.fromCubemap(x,y),y.texture.pmremVersion=x.pmremVersion,i.set(x,y),y.texture;if(y!==void 0)return y.texture;{const U=x.image;return T&&U&&U.height>0||C&&U&&m(U)?(a===null&&(a=new Zv(r)),y=T?a.fromEquirectangular(x):a.fromCubemap(x),y.texture.pmremVersion=x.pmremVersion,i.set(x,y),x.addEventListener("dispose",g),y.texture):null}}}return x}function p(x,b){return b===dh?x.mapping=Js:b===hh&&(x.mapping=no),x}function m(x){let b=0;const T=6;for(let C=0;C<T;C++)x[C]!==void 0&&b++;return b===T}function h(x){const b=x.target;b.removeEventListener("dispose",h);const T=e.get(b);T!==void 0&&(e.delete(b),T.dispose())}function g(x){const b=x.target;b.removeEventListener("dispose",g);const T=i.get(b);T!==void 0&&(i.delete(b),T.dispose())}function v(){e=new WeakMap,i=new WeakMap,a!==null&&(a.dispose(),a=null)}return{get:l,dispose:v}}function f2(r){const e={};function i(a){if(e[a]!==void 0)return e[a];const l=r.getExtension(a);return e[a]=l,l}return{has:function(a){return i(a)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(a){const l=i(a);return l===null&&eo("WebGLRenderer: "+a+" extension not supported."),l}}}function d2(r,e,i,a){const l={},c=new WeakMap;function f(v){const x=v.target;x.index!==null&&e.remove(x.index);for(const T in x.attributes)e.remove(x.attributes[T]);x.removeEventListener("dispose",f),delete l[x.id];const b=c.get(x);b&&(e.remove(b),c.delete(x)),a.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0&&delete x._maxInstanceCount,i.memory.geometries--}function p(v,x){return l[x.id]===!0||(x.addEventListener("dispose",f),l[x.id]=!0,i.memory.geometries++),x}function m(v){const x=v.attributes;for(const b in x)e.update(x[b],r.ARRAY_BUFFER)}function h(v){const x=[],b=v.index,T=v.attributes.position;let C=0;if(T===void 0)return;if(b!==null){const U=b.array;C=b.version;for(let z=0,N=U.length;z<N;z+=3){const L=U[z+0],O=U[z+1],I=U[z+2];x.push(L,O,O,I,I,L)}}else{const U=T.array;C=T.version;for(let z=0,N=U.length/3-1;z<N;z+=3){const L=z+0,O=z+1,I=z+2;x.push(L,O,O,I,I,L)}}const y=new(T.count>=65535?lS:oS)(x,1);y.version=C;const _=c.get(v);_&&e.remove(_),c.set(v,y)}function g(v){const x=c.get(v);if(x){const b=v.index;b!==null&&x.version<b.version&&h(v)}else h(v);return c.get(v)}return{get:p,update:m,getWireframeAttribute:g}}function h2(r,e,i){let a;function l(v){a=v}let c,f;function p(v){c=v.type,f=v.bytesPerElement}function m(v,x){r.drawElements(a,x,c,v*f),i.update(x,a,1)}function h(v,x,b){b!==0&&(r.drawElementsInstanced(a,x,c,v*f,b),i.update(x,a,b))}function g(v,x,b){if(b===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(a,x,0,c,v,0,b);let C=0;for(let y=0;y<b;y++)C+=x[y];i.update(C,a,1)}this.setMode=l,this.setIndex=p,this.render=m,this.renderInstances=h,this.renderMultiDraw=g}function p2(r){const e={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function a(c,f,p){switch(i.calls++,f){case r.TRIANGLES:i.triangles+=p*(c/3);break;case r.LINES:i.lines+=p*(c/2);break;case r.LINE_STRIP:i.lines+=p*(c-1);break;case r.LINE_LOOP:i.lines+=p*c;break;case r.POINTS:i.points+=p*c;break;default:wt("WebGLInfo: Unknown draw mode:",f);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:e,render:i,programs:null,autoReset:!0,reset:l,update:a}}function m2(r,e,i){const a=new WeakMap,l=new ln;function c(f,p,m){const h=f.morphTargetInfluences,g=p.morphAttributes.position||p.morphAttributes.normal||p.morphAttributes.color,v=g!==void 0?g.length:0;let x=a.get(p);if(x===void 0||x.count!==v){let X=function(){A.dispose(),a.delete(p),p.removeEventListener("dispose",X)};var b=X;x!==void 0&&x.texture.dispose();const T=p.morphAttributes.position!==void 0,C=p.morphAttributes.normal!==void 0,y=p.morphAttributes.color!==void 0,_=p.morphAttributes.position||[],U=p.morphAttributes.normal||[],z=p.morphAttributes.color||[];let N=0;T===!0&&(N=1),C===!0&&(N=2),y===!0&&(N=3);let L=p.attributes.position.count*N,O=1;L>e.maxTextureSize&&(O=Math.ceil(L/e.maxTextureSize),L=e.maxTextureSize);const I=new Float32Array(L*O*4*v),A=new aS(I,L,O,v);A.type=$i,A.needsUpdate=!0;const B=N*4;for(let q=0;q<v;q++){const Q=_[q],fe=U[q],Y=z[q],te=L*O*4*q;for(let H=0;H<Q.count;H++){const F=H*B;T===!0&&(l.fromBufferAttribute(Q,H),I[te+F+0]=l.x,I[te+F+1]=l.y,I[te+F+2]=l.z,I[te+F+3]=0),C===!0&&(l.fromBufferAttribute(fe,H),I[te+F+4]=l.x,I[te+F+5]=l.y,I[te+F+6]=l.z,I[te+F+7]=0),y===!0&&(l.fromBufferAttribute(Y,H),I[te+F+8]=l.x,I[te+F+9]=l.y,I[te+F+10]=l.z,I[te+F+11]=Y.itemSize===4?l.w:1)}}x={count:v,texture:A,size:new gt(L,O)},a.set(p,x),p.addEventListener("dispose",X)}if(f.isInstancedMesh===!0&&f.morphTexture!==null)m.getUniforms().setValue(r,"morphTexture",f.morphTexture,i);else{let T=0;for(let y=0;y<h.length;y++)T+=h[y];const C=p.morphTargetsRelative?1:1-T;m.getUniforms().setValue(r,"morphTargetBaseInfluence",C),m.getUniforms().setValue(r,"morphTargetInfluences",h)}m.getUniforms().setValue(r,"morphTargetsTexture",x.texture,i),m.getUniforms().setValue(r,"morphTargetsTextureSize",x.size)}return{update:c}}function g2(r,e,i,a,l){let c=new WeakMap;function f(h){const g=l.render.frame,v=h.geometry,x=e.get(h,v);if(c.get(x)!==g&&(e.update(x),c.set(x,g)),h.isInstancedMesh&&(h.hasEventListener("dispose",m)===!1&&h.addEventListener("dispose",m),c.get(h)!==g&&(i.update(h.instanceMatrix,r.ARRAY_BUFFER),h.instanceColor!==null&&i.update(h.instanceColor,r.ARRAY_BUFFER),c.set(h,g))),h.isSkinnedMesh){const b=h.skeleton;c.get(b)!==g&&(b.update(),c.set(b,g))}return x}function p(){c=new WeakMap}function m(h){const g=h.target;g.removeEventListener("dispose",m),a.releaseStatesOfObject(g),i.remove(g.instanceMatrix),g.instanceColor!==null&&i.remove(g.instanceColor)}return{update:f,dispose:p}}const x2={[G_]:"LINEAR_TONE_MAPPING",[V_]:"REINHARD_TONE_MAPPING",[k_]:"CINEON_TONE_MAPPING",[W_]:"ACES_FILMIC_TONE_MAPPING",[j_]:"AGX_TONE_MAPPING",[q_]:"NEUTRAL_TONE_MAPPING",[X_]:"CUSTOM_TONE_MAPPING"};function v2(r,e,i,a,l,c){const f=new Hi(e,i,{type:r,depthBuffer:l,stencilBuffer:c,samples:a?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let p=null,m=null;const h=new $n;h.setAttribute("position",new Gi([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new Gi([0,2,0,0,2,0],2));const g=new uT({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),v=new Fa(h,g),x=new SS(-1,1,1,-1,0,1);let b=null,T=null,C=!1,y,_=null,U=[],z=!1;this.setSize=function(N,L){f.setSize(N,L),p!==null&&p.setSize(N,L),m!==null&&m.setSize(N,L);for(let O=0;O<U.length;O++){const I=U[O];I.setSize&&I.setSize(N,L)}},this.setEffects=function(N){U=N,z=U.length>0&&U[0].isRenderPass===!0;const L=f.width,O=f.height;U.length>0&&p===null&&(p=new Hi(L,O,{type:ia,depthBuffer:!1,stencilBuffer:!1}),m=new Hi(L,O,{type:ia,depthBuffer:!1,stencilBuffer:!1}));for(let I=0;I<U.length;I++){const A=U[I];A.setSize&&A.setSize(L,O)}},this.begin=function(N,L){if(C||N.toneMapping===ta&&U.length===0)return!1;if(_=L,L!==null){const O=L.width,I=L.height;(f.width!==O||f.height!==I)&&this.setSize(O,I)}return z===!1&&N.setRenderTarget(f),y=N.toneMapping,N.toneMapping=ta,!0},this.hasRenderPass=function(){return z},this.end=function(N,L){N.toneMapping=y,C=!0;let O=f,I=p;for(let A=0;A<U.length;A++){const B=U[A];B.enabled!==!1&&(B.render(N,I,O,L),B.needsSwap!==!1&&(O=I,I=I===p?m:p))}if(b!==N.outputColorSpace||T!==N.toneMapping){b=N.outputColorSpace,T=N.toneMapping,g.defines={},Et.getTransfer(b)===Ft&&(g.defines.SRGB_TRANSFER="");const A=x2[T];A&&(g.defines[A]=""),g.needsUpdate=!0}g.uniforms.tDiffuse.value=O.texture,N.setRenderTarget(_),N.render(v,x),_=null,C=!1},this.isCompositing=function(){return C},this.dispose=function(){f.dispose(),p!==null&&p.dispose(),m!==null&&m.dispose(),h.dispose(),g.dispose()}}const ES=new Bn,Bp=new Al(1,1),TS=new aS,AS=new BE,RS=new mS,$v=[],e_=[],t_=new Float32Array(16),n_=new Float32Array(9),i_=new Float32Array(4);function lo(r,e,i){const a=r[0];if(a<=0||a>0)return r;const l=e*i;let c=$v[l];if(c===void 0&&(c=new Float32Array(l),$v[l]=c),e!==0){a.toArray(c,0);for(let f=1,p=0;f!==e;++f)p+=i,r[f].toArray(c,p)}return c}function yn(r,e){if(r.length!==e.length)return!1;for(let i=0,a=r.length;i<a;i++)if(r[i]!==e[i])return!1;return!0}function bn(r,e){for(let i=0,a=e.length;i<a;i++)r[i]=e[i]}function Yu(r,e){let i=e_[e];i===void 0&&(i=new Int32Array(e),e_[e]=i);for(let a=0;a!==e;++a)i[a]=r.allocateTextureUnit();return i}function _2(r,e){const i=this.cache;i[0]!==e&&(r.uniform1f(this.addr,e),i[0]=e)}function S2(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(yn(i,e))return;r.uniform2fv(this.addr,e),bn(i,e)}}function y2(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else if(e.r!==void 0)(i[0]!==e.r||i[1]!==e.g||i[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),i[0]=e.r,i[1]=e.g,i[2]=e.b);else{if(yn(i,e))return;r.uniform3fv(this.addr,e),bn(i,e)}}function b2(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(yn(i,e))return;r.uniform4fv(this.addr,e),bn(i,e)}}function M2(r,e){const i=this.cache,a=e.elements;if(a===void 0){if(yn(i,e))return;r.uniformMatrix2fv(this.addr,!1,e),bn(i,e)}else{if(yn(i,a))return;i_.set(a),r.uniformMatrix2fv(this.addr,!1,i_),bn(i,a)}}function E2(r,e){const i=this.cache,a=e.elements;if(a===void 0){if(yn(i,e))return;r.uniformMatrix3fv(this.addr,!1,e),bn(i,e)}else{if(yn(i,a))return;n_.set(a),r.uniformMatrix3fv(this.addr,!1,n_),bn(i,a)}}function T2(r,e){const i=this.cache,a=e.elements;if(a===void 0){if(yn(i,e))return;r.uniformMatrix4fv(this.addr,!1,e),bn(i,e)}else{if(yn(i,a))return;t_.set(a),r.uniformMatrix4fv(this.addr,!1,t_),bn(i,a)}}function A2(r,e){const i=this.cache;i[0]!==e&&(r.uniform1i(this.addr,e),i[0]=e)}function R2(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(yn(i,e))return;r.uniform2iv(this.addr,e),bn(i,e)}}function w2(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(yn(i,e))return;r.uniform3iv(this.addr,e),bn(i,e)}}function C2(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(yn(i,e))return;r.uniform4iv(this.addr,e),bn(i,e)}}function N2(r,e){const i=this.cache;i[0]!==e&&(r.uniform1ui(this.addr,e),i[0]=e)}function D2(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(yn(i,e))return;r.uniform2uiv(this.addr,e),bn(i,e)}}function U2(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(yn(i,e))return;r.uniform3uiv(this.addr,e),bn(i,e)}}function L2(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(yn(i,e))return;r.uniform4uiv(this.addr,e),bn(i,e)}}function O2(r,e,i){const a=this.cache,l=i.allocateTextureUnit();a[0]!==l&&(r.uniform1i(this.addr,l),a[0]=l);let c;this.type===r.SAMPLER_2D_SHADOW?(Bp.compareFunction=i.isReversedDepthBuffer()?om:rm,c=Bp):c=ES,i.setTexture2D(e||c,l)}function P2(r,e,i){const a=this.cache,l=i.allocateTextureUnit();a[0]!==l&&(r.uniform1i(this.addr,l),a[0]=l),i.setTexture3D(e||AS,l)}function I2(r,e,i){const a=this.cache,l=i.allocateTextureUnit();a[0]!==l&&(r.uniform1i(this.addr,l),a[0]=l),i.setTextureCube(e||RS,l)}function B2(r,e,i){const a=this.cache,l=i.allocateTextureUnit();a[0]!==l&&(r.uniform1i(this.addr,l),a[0]=l),i.setTexture2DArray(e||TS,l)}function F2(r){switch(r){case 5126:return _2;case 35664:return S2;case 35665:return y2;case 35666:return b2;case 35674:return M2;case 35675:return E2;case 35676:return T2;case 5124:case 35670:return A2;case 35667:case 35671:return R2;case 35668:case 35672:return w2;case 35669:case 35673:return C2;case 5125:return N2;case 36294:return D2;case 36295:return U2;case 36296:return L2;case 35678:case 36198:case 36298:case 36306:case 35682:return O2;case 35679:case 36299:case 36307:return P2;case 35680:case 36300:case 36308:case 36293:return I2;case 36289:case 36303:case 36311:case 36292:return B2}}function z2(r,e){r.uniform1fv(this.addr,e)}function H2(r,e){const i=lo(e,this.size,2);r.uniform2fv(this.addr,i)}function G2(r,e){const i=lo(e,this.size,3);r.uniform3fv(this.addr,i)}function V2(r,e){const i=lo(e,this.size,4);r.uniform4fv(this.addr,i)}function k2(r,e){const i=lo(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,i)}function W2(r,e){const i=lo(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,i)}function X2(r,e){const i=lo(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,i)}function j2(r,e){r.uniform1iv(this.addr,e)}function q2(r,e){r.uniform2iv(this.addr,e)}function Y2(r,e){r.uniform3iv(this.addr,e)}function Z2(r,e){r.uniform4iv(this.addr,e)}function K2(r,e){r.uniform1uiv(this.addr,e)}function Q2(r,e){r.uniform2uiv(this.addr,e)}function J2(r,e){r.uniform3uiv(this.addr,e)}function $2(r,e){r.uniform4uiv(this.addr,e)}function eR(r,e,i){const a=this.cache,l=e.length,c=Yu(i,l);yn(a,c)||(r.uniform1iv(this.addr,c),bn(a,c));let f;this.type===r.SAMPLER_2D_SHADOW?f=Bp:f=ES;for(let p=0;p!==l;++p)i.setTexture2D(e[p]||f,c[p])}function tR(r,e,i){const a=this.cache,l=e.length,c=Yu(i,l);yn(a,c)||(r.uniform1iv(this.addr,c),bn(a,c));for(let f=0;f!==l;++f)i.setTexture3D(e[f]||AS,c[f])}function nR(r,e,i){const a=this.cache,l=e.length,c=Yu(i,l);yn(a,c)||(r.uniform1iv(this.addr,c),bn(a,c));for(let f=0;f!==l;++f)i.setTextureCube(e[f]||RS,c[f])}function iR(r,e,i){const a=this.cache,l=e.length,c=Yu(i,l);yn(a,c)||(r.uniform1iv(this.addr,c),bn(a,c));for(let f=0;f!==l;++f)i.setTexture2DArray(e[f]||TS,c[f])}function aR(r){switch(r){case 5126:return z2;case 35664:return H2;case 35665:return G2;case 35666:return V2;case 35674:return k2;case 35675:return W2;case 35676:return X2;case 5124:case 35670:return j2;case 35667:case 35671:return q2;case 35668:case 35672:return Y2;case 35669:case 35673:return Z2;case 5125:return K2;case 36294:return Q2;case 36295:return J2;case 36296:return $2;case 35678:case 36198:case 36298:case 36306:case 35682:return eR;case 35679:case 36299:case 36307:return tR;case 35680:case 36300:case 36308:case 36293:return nR;case 36289:case 36303:case 36311:case 36292:return iR}}class sR{constructor(e,i,a){this.id=e,this.addr=a,this.cache=[],this.type=i.type,this.setValue=F2(i.type)}}class rR{constructor(e,i,a){this.id=e,this.addr=a,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=aR(i.type)}}class oR{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,i,a){const l=this.seq;for(let c=0,f=l.length;c!==f;++c){const p=l[c];p.setValue(e,i[p.id],a)}}}const Wh=/(\w+)(\])?(\[|\.)?/g;function a_(r,e){r.seq.push(e),r.map[e.id]=e}function lR(r,e,i){const a=r.name,l=a.length;for(Wh.lastIndex=0;;){const c=Wh.exec(a),f=Wh.lastIndex;let p=c[1];const m=c[2]==="]",h=c[3];if(m&&(p=p|0),h===void 0||h==="["&&f+2===l){a_(i,h===void 0?new sR(p,r,e):new rR(p,r,e));break}else{let v=i.map[p];v===void 0&&(v=new oR(p),a_(i,v)),i=v}}}class wu{constructor(e,i){this.seq=[],this.map={};const a=e.getProgramParameter(i,e.ACTIVE_UNIFORMS);for(let f=0;f<a;++f){const p=e.getActiveUniform(i,f),m=e.getUniformLocation(i,p.name);lR(p,m,this)}const l=[],c=[];for(const f of this.seq)f.type===e.SAMPLER_2D_SHADOW||f.type===e.SAMPLER_CUBE_SHADOW||f.type===e.SAMPLER_2D_ARRAY_SHADOW?l.push(f):c.push(f);l.length>0&&(this.seq=l.concat(c))}setValue(e,i,a,l){const c=this.map[i];c!==void 0&&c.setValue(e,a,l)}setOptional(e,i,a){const l=i[a];l!==void 0&&this.setValue(e,a,l)}static upload(e,i,a,l){for(let c=0,f=i.length;c!==f;++c){const p=i[c],m=a[p.id];m.needsUpdate!==!1&&p.setValue(e,m.value,l)}}static seqWithValue(e,i){const a=[];for(let l=0,c=e.length;l!==c;++l){const f=e[l];f.id in i&&a.push(f)}return a}}function s_(r,e,i){const a=r.createShader(e);return r.shaderSource(a,i),r.compileShader(a),a}const cR=37297;let uR=0;function fR(r,e){const i=r.split(`
`),a=[],l=Math.max(e-6,0),c=Math.min(e+6,i.length);for(let f=l;f<c;f++){const p=f+1;a.push(`${p===e?">":" "} ${p}: ${i[f]}`)}return a.join(`
`)}const r_=new rt;function dR(r){Et._getMatrix(r_,Et.workingColorSpace,r);const e=`mat3( ${r_.elements.map(i=>i.toFixed(4))} )`;switch(Et.getTransfer(r)){case Ou:return[e,"LinearTransferOETF"];case Ft:return[e,"sRGBTransferOETF"];default:return it("WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function o_(r,e,i){const a=r.getShaderParameter(e,r.COMPILE_STATUS),c=(r.getShaderInfoLog(e)||"").trim();if(a&&c==="")return"";const f=/ERROR: 0:(\d+)/.exec(c);if(f){const p=parseInt(f[1]);return i.toUpperCase()+`

`+c+`

`+fR(r.getShaderSource(e),p)}else return c}function hR(r,e){const i=dR(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}const pR={[G_]:"Linear",[V_]:"Reinhard",[k_]:"Cineon",[W_]:"ACESFilmic",[j_]:"AgX",[q_]:"Neutral",[X_]:"Custom"};function mR(r,e){const i=pR[e];return i===void 0?(it("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+r+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+r+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Su=new se;function gR(){Et.getLuminanceCoefficients(Su);const r=Su.x.toFixed(4),e=Su.y.toFixed(4),i=Su.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function xR(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(_l).join(`
`)}function vR(r){const e=[];for(const i in r){const a=r[i];a!==!1&&e.push("#define "+i+" "+a)}return e.join(`
`)}function _R(r,e){const i={},a=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let l=0;l<a;l++){const c=r.getActiveAttrib(e,l),f=c.name;let p=1;c.type===r.FLOAT_MAT2&&(p=2),c.type===r.FLOAT_MAT3&&(p=3),c.type===r.FLOAT_MAT4&&(p=4),i[f]={type:c.type,location:r.getAttribLocation(e,f),locationSize:p}}return i}function _l(r){return r!==""}function l_(r,e){const i=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function c_(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const SR=/^[ \t]*#include +<([\w\d./]+)>/gm;function Fp(r){return r.replace(SR,bR)}const yR=new Map;function bR(r,e){let i=ht[e];if(i===void 0){const a=yR.get(e);if(a!==void 0)i=ht[a],it('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,a);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Fp(i)}const MR=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function u_(r){return r.replace(MR,ER)}function ER(r,e,i,a){let l="";for(let c=parseInt(e);c<parseInt(i);c++)l+=a.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function f_(r){let e=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const TR={[Mu]:"SHADOWMAP_TYPE_PCF",[vl]:"SHADOWMAP_TYPE_VSM"};function AR(r){return TR[r.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const RR={[Js]:"ENVMAP_TYPE_CUBE",[no]:"ENVMAP_TYPE_CUBE",[Xu]:"ENVMAP_TYPE_CUBE_UV"};function wR(r){return r.envMap===!1?"ENVMAP_TYPE_CUBE":RR[r.envMapMode]||"ENVMAP_TYPE_CUBE"}const CR={[no]:"ENVMAP_MODE_REFRACTION"};function NR(r){return r.envMap===!1?"ENVMAP_MODE_REFLECTION":CR[r.envMapMode]||"ENVMAP_MODE_REFLECTION"}const DR={[H_]:"ENVMAP_BLENDING_MULTIPLY",[mE]:"ENVMAP_BLENDING_MIX",[gE]:"ENVMAP_BLENDING_ADD"};function UR(r){return r.envMap===!1?"ENVMAP_BLENDING_NONE":DR[r.combine]||"ENVMAP_BLENDING_NONE"}function LR(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const i=Math.log2(e)-2,a=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:a,maxMip:i}}function OR(r,e,i,a){const l=r.getContext(),c=i.defines;let f=i.vertexShader,p=i.fragmentShader;const m=AR(i),h=wR(i),g=NR(i),v=UR(i),x=LR(i),b=xR(i),T=vR(c),C=l.createProgram();let y,_,U=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(y=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T].filter(_l).join(`
`),y.length>0&&(y+=`
`),_=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T].filter(_l).join(`
`),_.length>0&&(_+=`
`)):(y=[f_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+g:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexNormals?"#define HAS_NORMAL":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(_l).join(`
`),_=[f_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+h:"",i.envMap?"#define "+g:"",i.envMap?"#define "+v:"",x?"#define CUBEUV_TEXEL_WIDTH "+x.texelWidth:"",x?"#define CUBEUV_TEXEL_HEIGHT "+x.texelHeight:"",x?"#define CUBEUV_MAX_MIP "+x.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.retroreflection?"#define USE_RETROREFLECTION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor?"#define USE_COLOR":"",i.vertexAlphas||i.batchingColor?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==ta?"#define TONE_MAPPING":"",i.toneMapping!==ta?ht.tonemapping_pars_fragment:"",i.toneMapping!==ta?mR("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",ht.colorspace_pars_fragment,hR("linearToOutputTexel",i.outputColorSpace),gR(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(_l).join(`
`)),f=Fp(f),f=l_(f,i),f=c_(f,i),p=Fp(p),p=l_(p,i),p=c_(p,i),f=u_(f),p=u_(p),i.isRawShaderMaterial!==!0&&(U=`#version 300 es
`,y=[b,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,_=["#define varying in",i.glslVersion===yv?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===yv?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const z=U+y+f,N=U+_+p,L=s_(l,l.VERTEX_SHADER,z),O=s_(l,l.FRAGMENT_SHADER,N);l.attachShader(C,L),l.attachShader(C,O),i.index0AttributeName!==void 0?l.bindAttribLocation(C,0,i.index0AttributeName):i.hasPositionAttribute===!0&&l.bindAttribLocation(C,0,"position"),l.linkProgram(C);function I(q){if(r.debug.checkShaderErrors){const Q=l.getProgramInfoLog(C)||"",fe=l.getShaderInfoLog(L)||"",Y=l.getShaderInfoLog(O)||"",te=Q.trim(),H=fe.trim(),F=Y.trim();let J=!0,$=!0;if(l.getProgramParameter(C,l.LINK_STATUS)===!1)if(J=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(l,C,L,O);else{const he=o_(l,L,"vertex"),D=o_(l,O,"fragment");wt("WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(C,l.VALIDATE_STATUS)+`

Material Name: `+q.name+`
Material Type: `+q.type+`

Program Info Log: `+te+`
`+he+`
`+D)}else te!==""?it("WebGLProgram: Program Info Log:",te):(H===""||F==="")&&($=!1);$&&(q.diagnostics={runnable:J,programLog:te,vertexShader:{log:H,prefix:y},fragmentShader:{log:F,prefix:_}})}l.deleteShader(L),l.deleteShader(O),A=new wu(l,C),B=_R(l,C)}let A;this.getUniforms=function(){return A===void 0&&I(this),A};let B;this.getAttributes=function(){return B===void 0&&I(this),B};let X=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return X===!1&&(X=l.getProgramParameter(C,cR)),X},this.destroy=function(){a.releaseStatesOfProgram(this),l.deleteProgram(C),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=uR++,this.cacheKey=e,this.usedTimes=1,this.program=C,this.vertexShader=L,this.fragmentShader=O,this}let PR=0;class IR{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,i,a){const l=this._getShaderCacheForMaterial(e);return l.has(i)===!1&&(l.add(i),i.usedTimes++),l.has(a)===!1&&(l.add(a),a.usedTimes++),this}remove(e){const i=this.materialCache.get(e);for(const a of i)a.usedTimes--,a.usedTimes===0&&this.shaderCache.delete(a.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const i=this.materialCache;let a=i.get(e);return a===void 0&&(a=new Set,i.set(e,a)),a}_getShaderStage(e){const i=this.shaderCache;let a=i.get(e);return a===void 0&&(a=new BR(e),i.set(e,a)),a}}class BR{constructor(e){this.id=PR++,this.code=e,this.usedTimes=0}}function FR(r){return r===$s||r===Du||r===Uu}function zR(r,e,i,a,l,c){const f=new sS,p=new IR,m=new Set,h=[],g=new Map,v=a.logarithmicDepthBuffer;let x=a.precision;const b={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function T(A){return m.add(A),A===0?"uv":`uv${A}`}function C(A,B,X,q,Q,fe){const Y=q.fog,te=Q.geometry,H=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?q.environment:null,F=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap,J=e.get(A.envMap||H,F),$=J&&J.mapping===Xu?J.image.height:null,he=b[A.type];A.precision!==null&&(x=a.getMaxPrecision(A.precision),x!==A.precision&&it("WebGLProgram.getParameters:",A.precision,"not supported, using",x,"instead."));const D=te.morphAttributes.position||te.morphAttributes.normal||te.morphAttributes.color,ne=D!==void 0?D.length:0;let ve=0;te.morphAttributes.position!==void 0&&(ve=1),te.morphAttributes.normal!==void 0&&(ve=2),te.morphAttributes.color!==void 0&&(ve=3);let Te,Oe,Xe,oe;if(he){const zt=Qi[he];Te=zt.vertexShader,Oe=zt.fragmentShader}else{Te=A.vertexShader,Oe=A.fragmentShader;const zt=p.getVertexShaderStage(A),At=p.getFragmentShaderStage(A);p.update(A,zt,At),Xe=zt.id,oe=At.id}const _e=r.getRenderTarget(),Re=r.state.buffers.depth.getReversed(),tt=Q.isInstancedMesh===!0,Ge=Q.isBatchedMesh===!0,lt=!!A.map,nn=!!A.matcap,at=!!J,_t=!!A.aoMap,Ot=!!A.lightMap,mt=!!A.bumpMap&&A.wireframe===!1,Xt=!!A.normalMap,an=!!A.displacementMap,Mn=!!A.emissiveMap,jt=!!A.metalnessMap,sn=!!A.roughnessMap,j=A.anisotropy>0,Pt=A.clearcoat>0,Dt=A.dispersion>0,P=A.retroreflectivity>0,E=A.iridescence>0,K=A.sheen>0,ce=A.transmission>0,me=j&&!!A.anisotropyMap,Ae=Pt&&!!A.clearcoatMap,De=Pt&&!!A.clearcoatNormalMap,ge=Pt&&!!A.clearcoatRoughnessMap,xe=E&&!!A.iridescenceMap,we=E&&!!A.iridescenceThicknessMap,Ve=K&&!!A.sheenColorMap,Pe=K&&!!A.sheenRoughnessMap,Ue=!!A.specularMap,Qe=!!A.specularColorMap,Je=!!A.specularIntensityMap,nt=ce&&!!A.transmissionMap,W=ce&&!!A.thicknessMap,Ce=!!A.gradientMap,ye=!!A.alphaMap,Ne=A.alphaTest>0,Fe=!!A.alphaHash,Ee=!!A.extensions;let Ke=ta;A.toneMapped&&(_e===null||_e.isXRRenderTarget===!0)&&(Ke=r.toneMapping);const je={shaderID:he,shaderType:A.type,shaderName:A.name,vertexShader:Te,fragmentShader:Oe,defines:A.defines,customVertexShaderID:Xe,customFragmentShaderID:oe,isRawShaderMaterial:A.isRawShaderMaterial===!0,glslVersion:A.glslVersion,precision:x,batching:Ge,batchingColor:Ge&&Q._colorsTexture!==null,instancing:tt,instancingColor:tt&&Q.instanceColor!==null,instancingMorph:tt&&Q.morphTexture!==null,outputColorSpace:_e===null?r.outputColorSpace:_e.isXRRenderTarget===!0?_e.texture.colorSpace:Et.workingColorSpace,alphaToCoverage:!!A.alphaToCoverage,map:lt,matcap:nn,envMap:at,envMapMode:at&&J.mapping,envMapCubeUVHeight:$,aoMap:_t,lightMap:Ot,bumpMap:mt,normalMap:Xt,displacementMap:an,emissiveMap:Mn,normalMapObjectSpace:Xt&&A.normalMapType===_E,normalMapTangentSpace:Xt&&A.normalMapType===Sv,packedNormalMap:Xt&&A.normalMapType===Sv&&FR(A.normalMap.format),metalnessMap:jt,roughnessMap:sn,anisotropy:j,anisotropyMap:me,clearcoat:Pt,clearcoatMap:Ae,clearcoatNormalMap:De,clearcoatRoughnessMap:ge,dispersion:Dt,retroreflection:P,iridescence:E,iridescenceMap:xe,iridescenceThicknessMap:we,sheen:K,sheenColorMap:Ve,sheenRoughnessMap:Pe,specularMap:Ue,specularColorMap:Qe,specularIntensityMap:Je,transmission:ce,transmissionMap:nt,thicknessMap:W,gradientMap:Ce,opaque:A.transparent===!1&&A.blending===Sl&&A.alphaToCoverage===!1,alphaMap:ye,alphaTest:Ne,alphaHash:Fe,combine:A.combine,mapUv:lt&&T(A.map.channel),aoMapUv:_t&&T(A.aoMap.channel),lightMapUv:Ot&&T(A.lightMap.channel),bumpMapUv:mt&&T(A.bumpMap.channel),normalMapUv:Xt&&T(A.normalMap.channel),displacementMapUv:an&&T(A.displacementMap.channel),emissiveMapUv:Mn&&T(A.emissiveMap.channel),metalnessMapUv:jt&&T(A.metalnessMap.channel),roughnessMapUv:sn&&T(A.roughnessMap.channel),anisotropyMapUv:me&&T(A.anisotropyMap.channel),clearcoatMapUv:Ae&&T(A.clearcoatMap.channel),clearcoatNormalMapUv:De&&T(A.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ge&&T(A.clearcoatRoughnessMap.channel),iridescenceMapUv:xe&&T(A.iridescenceMap.channel),iridescenceThicknessMapUv:we&&T(A.iridescenceThicknessMap.channel),sheenColorMapUv:Ve&&T(A.sheenColorMap.channel),sheenRoughnessMapUv:Pe&&T(A.sheenRoughnessMap.channel),specularMapUv:Ue&&T(A.specularMap.channel),specularColorMapUv:Qe&&T(A.specularColorMap.channel),specularIntensityMapUv:Je&&T(A.specularIntensityMap.channel),transmissionMapUv:nt&&T(A.transmissionMap.channel),thicknessMapUv:W&&T(A.thicknessMap.channel),alphaMapUv:ye&&T(A.alphaMap.channel),vertexTangents:!!te.attributes.tangent&&(Xt||j),vertexNormals:!!te.attributes.normal,vertexColors:A.vertexColors,vertexAlphas:A.vertexColors===!0&&!!te.attributes.color&&te.attributes.color.itemSize===4,pointsUvs:Q.isPoints===!0&&!!te.attributes.uv&&(lt||ye),fog:!!Y,useFog:A.fog===!0,fogExp2:!!Y&&Y.isFogExp2,flatShading:A.wireframe===!1&&(A.flatShading===!0||te.attributes.normal===void 0&&Xt===!1&&(A.isMeshLambertMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isMeshPhysicalMaterial)),sizeAttenuation:A.sizeAttenuation===!0,logarithmicDepthBuffer:v,reversedDepthBuffer:Re,skinning:Q.isSkinnedMesh===!0,hasPositionAttribute:te.attributes.position!==void 0,morphTargets:te.morphAttributes.position!==void 0,morphNormals:te.morphAttributes.normal!==void 0,morphColors:te.morphAttributes.color!==void 0,morphTargetsCount:ne,morphTextureStride:ve,numSunLights:B.sun.length,numDirLights:B.directional.length,numPointLights:B.point.length,numSpotLights:B.spot.length,numSpotLightMaps:B.spotLightMap.length,numRectAreaLights:B.rectArea.length,numHemiLights:B.hemi.length,numSunLightShadows:B.sunShadowMap.length,numDirLightShadows:B.directionalShadowMap.length,numPointLightShadows:B.pointShadowMap.length,numSpotLightShadows:B.spotShadowMap.length,numSpotLightShadowsWithMaps:B.numSpotLightShadowsWithMaps,numLightProbes:B.numLightProbes,numLightProbeGrids:fe.length,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:A.dithering,shadowMapEnabled:r.shadowMap.enabled&&X.length>0,shadowMapType:r.shadowMap.type,toneMapping:Ke,decodeVideoTexture:lt&&A.map.isVideoTexture===!0&&Et.getTransfer(A.map.colorSpace)===Ft,decodeVideoTextureEmissive:Mn&&A.emissiveMap.isVideoTexture===!0&&Et.getTransfer(A.emissiveMap.colorSpace)===Ft,premultipliedAlpha:A.premultipliedAlpha,doubleSided:A.side===Da,flipSided:A.side===Jn,useDepthPacking:A.depthPacking>=0,depthPacking:A.depthPacking||0,index0AttributeName:A.index0AttributeName,extensionClipCullDistance:Ee&&A.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ee&&A.extensions.multiDraw===!0||Ge)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:A.customProgramCacheKey()};return je.vertexUv1s=m.has(1),je.vertexUv2s=m.has(2),je.vertexUv3s=m.has(3),m.clear(),je}function y(A){const B=[];if(A.shaderID?B.push(A.shaderID):(B.push(A.customVertexShaderID),B.push(A.customFragmentShaderID)),A.defines!==void 0)for(const X in A.defines)B.push(X),B.push(A.defines[X]);return A.isRawShaderMaterial===!1&&(_(B,A),U(B,A),B.push(r.outputColorSpace)),B.push(A.customProgramCacheKey),B.join()}function _(A,B){A.push(B.precision),A.push(B.outputColorSpace),A.push(B.envMapMode),A.push(B.envMapCubeUVHeight),A.push(B.mapUv),A.push(B.alphaMapUv),A.push(B.lightMapUv),A.push(B.aoMapUv),A.push(B.bumpMapUv),A.push(B.normalMapUv),A.push(B.displacementMapUv),A.push(B.emissiveMapUv),A.push(B.metalnessMapUv),A.push(B.roughnessMapUv),A.push(B.anisotropyMapUv),A.push(B.clearcoatMapUv),A.push(B.clearcoatNormalMapUv),A.push(B.clearcoatRoughnessMapUv),A.push(B.iridescenceMapUv),A.push(B.iridescenceThicknessMapUv),A.push(B.sheenColorMapUv),A.push(B.sheenRoughnessMapUv),A.push(B.specularMapUv),A.push(B.specularColorMapUv),A.push(B.specularIntensityMapUv),A.push(B.transmissionMapUv),A.push(B.thicknessMapUv),A.push(B.combine),A.push(B.fogExp2),A.push(B.sizeAttenuation),A.push(B.morphTargetsCount),A.push(B.morphAttributeCount),A.push(B.numSunLights),A.push(B.numDirLights),A.push(B.numPointLights),A.push(B.numSpotLights),A.push(B.numSpotLightMaps),A.push(B.numHemiLights),A.push(B.numRectAreaLights),A.push(B.numSunLightShadows),A.push(B.numDirLightShadows),A.push(B.numPointLightShadows),A.push(B.numSpotLightShadows),A.push(B.numSpotLightShadowsWithMaps),A.push(B.numLightProbes),A.push(B.shadowMapType),A.push(B.toneMapping),A.push(B.numClippingPlanes),A.push(B.numClipIntersection),A.push(B.depthPacking)}function U(A,B){f.disableAll(),B.instancing&&f.enable(0),B.instancingColor&&f.enable(1),B.instancingMorph&&f.enable(2),B.matcap&&f.enable(3),B.envMap&&f.enable(4),B.normalMapObjectSpace&&f.enable(5),B.normalMapTangentSpace&&f.enable(6),B.clearcoat&&f.enable(7),B.iridescence&&f.enable(8),B.alphaTest&&f.enable(9),B.vertexColors&&f.enable(10),B.vertexAlphas&&f.enable(11),B.vertexUv1s&&f.enable(12),B.vertexUv2s&&f.enable(13),B.vertexUv3s&&f.enable(14),B.vertexTangents&&f.enable(15),B.anisotropy&&f.enable(16),B.alphaHash&&f.enable(17),B.batching&&f.enable(18),B.dispersion&&f.enable(19),B.retroreflection&&f.enable(24),B.batchingColor&&f.enable(20),B.gradientMap&&f.enable(21),B.packedNormalMap&&f.enable(22),B.vertexNormals&&f.enable(23),A.push(f.mask),f.disableAll(),B.fog&&f.enable(0),B.useFog&&f.enable(1),B.flatShading&&f.enable(2),B.logarithmicDepthBuffer&&f.enable(3),B.reversedDepthBuffer&&f.enable(4),B.skinning&&f.enable(5),B.morphTargets&&f.enable(6),B.morphNormals&&f.enable(7),B.morphColors&&f.enable(8),B.premultipliedAlpha&&f.enable(9),B.shadowMapEnabled&&f.enable(10),B.doubleSided&&f.enable(11),B.flipSided&&f.enable(12),B.useDepthPacking&&f.enable(13),B.dithering&&f.enable(14),B.transmission&&f.enable(15),B.sheen&&f.enable(16),B.opaque&&f.enable(17),B.pointsUvs&&f.enable(18),B.decodeVideoTexture&&f.enable(19),B.decodeVideoTextureEmissive&&f.enable(20),B.alphaToCoverage&&f.enable(21),B.numLightProbeGrids>0&&f.enable(22),B.hasPositionAttribute&&f.enable(23),A.push(f.mask)}function z(A){const B=b[A.type];let X;if(B){const q=Qi[B];X=oT.clone(q.uniforms)}else X=A.uniforms;return X}function N(A,B){let X=g.get(B);return X!==void 0?++X.usedTimes:(X=new OR(r,B,A,l),h.push(X),g.set(B,X)),X}function L(A){if(--A.usedTimes===0){const B=h.indexOf(A);h[B]=h[h.length-1],h.pop(),g.delete(A.cacheKey),A.destroy()}}function O(A){p.remove(A)}function I(){p.dispose()}return{getParameters:C,getProgramCacheKey:y,getUniforms:z,acquireProgram:N,releaseProgram:L,releaseShaderCache:O,programs:h,dispose:I}}function HR(){let r=new WeakMap;function e(f){return r.has(f)}function i(f){let p=r.get(f);return p===void 0&&(p={},r.set(f,p)),p}function a(f){r.delete(f)}function l(f,p,m){r.get(f)[p]=m}function c(){r=new WeakMap}return{has:e,get:i,remove:a,update:l,dispose:c}}function GR(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.materialVariant!==e.materialVariant?r.materialVariant-e.materialVariant:r.z!==e.z?r.z-e.z:r.id-e.id}function d_(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function h_(){const r=[];let e=0;const i=[],a=[],l=[];function c(){e=0,i.length=0,a.length=0,l.length=0}function f(x){let b=0;return x.isInstancedMesh&&(b+=2),x.isSkinnedMesh&&(b+=1),b}function p(x,b,T,C,y,_){let U=r[e];return U===void 0?(U={id:x.id,object:x,geometry:b,material:T,materialVariant:f(x),groupOrder:C,renderOrder:x.renderOrder,z:y,group:_},r[e]=U):(U.id=x.id,U.object=x,U.geometry=b,U.material=T,U.materialVariant=f(x),U.groupOrder=C,U.renderOrder=x.renderOrder,U.z=y,U.group=_),e++,U}function m(x,b,T,C,y,_,U){U.reversedDepth===!0&&(y=-y);const z=p(x,b,T,C,y,_);T.transmission>0?a.push(z):T.transparent===!0?l.push(z):i.push(z)}function h(x,b,T,C,y,_){const U=p(x,b,T,C,y,_);T.transmission>0?a.unshift(U):T.transparent===!0?l.unshift(U):i.unshift(U)}function g(x,b){i.length>1&&i.sort(x||GR),a.length>1&&a.sort(b||d_),l.length>1&&l.sort(b||d_)}function v(){for(let x=e,b=r.length;x<b;x++){const T=r[x];if(T.id===null)break;T.id=null,T.object=null,T.geometry=null,T.material=null,T.group=null}}return{opaque:i,transmissive:a,transparent:l,init:c,push:m,unshift:h,finish:v,sort:g}}function VR(){let r=new WeakMap;function e(a,l){const c=r.get(a);let f;return c===void 0?(f=new h_,r.set(a,[f])):l>=c.length?(f=new h_,c.push(f)):f=c[l],f}function i(){r=new WeakMap}return{get:e,dispose:i}}function kR(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let i;switch(e.type){case"SunLight":case"DirectionalLight":i={direction:new se,color:new bt};break;case"SpotLight":i={position:new se,direction:new se,color:new bt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new se,color:new bt,distance:0,decay:0};break;case"HemisphereLight":i={direction:new se,skyColor:new bt,groundColor:new bt};break;case"RectAreaLight":i={color:new bt,position:new se,halfWidth:new se,halfHeight:new se};break}return r[e.id]=i,i}}}function WR(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let i;switch(e.type){case"SunLight":case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new gt};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new gt};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new gt,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=i,i}}}let XR=0;function jR(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function qR(r){const e=new kR,i=WR(),a={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)a.probe.push(new se);const l=new se,c=new tn,f=new tn;function p(h){let g=0,v=0,x=0;for(let Q=0;Q<9;Q++)a.probe[Q].set(0,0,0);let b=0,T=0,C=0,y=0,_=0,U=0,z=0,N=0,L=0,O=0,I=0,A=0,B=0,X=0;h.sort(jR);for(let Q=0,fe=h.length;Q<fe;Q++){const Y=h[Q],te=Y.color,H=Y.intensity,F=Y.distance;let J=null;if(Y.shadow&&Y.shadow.map&&(Y.shadow.map.texture.format===$s?J=Y.shadow.map.texture:J=Y.shadow.map.depthTexture||Y.shadow.map.texture),Y.isAmbientLight)g+=te.r*H,v+=te.g*H,x+=te.b*H;else if(Y.isLightProbe){for(let $=0;$<9;$++)a.probe[$].addScaledVector(Y.sh.coefficients[$],H);X++}else if(Y.isSunLight){const $=e.get(Y);if($.color.copy(Y.color).multiplyScalar(Y.intensity),Y.castShadow){const he=Y.shadow,D=i.get(Y);D.shadowIntensity=he.intensity,D.shadowBias=he.bias,D.shadowNormalBias=he.normalBias,D.shadowRadius=he.radius,D.shadowMapSize.copy(he.mapSize).multiply(he.getFrameExtents()),a.sunShadow[T]=D,a.sunShadowMap[T]=J;const ne=he.getViewportCount();for(let ve=0;ve<ne;ve++)a.sunShadowMatrix[C+ve]=he.getMatrix(ve),a.sunShadowCascade[C+ve]=he._cascadeData[ve];C+=ne,T++}a.sun[b]=$,b++}else if(Y.isDirectionalLight){const $=e.get(Y);if($.color.copy(Y.color).multiplyScalar(Y.intensity),Y.castShadow){const he=Y.shadow,D=i.get(Y);D.shadowIntensity=he.intensity,D.shadowBias=he.bias,D.shadowNormalBias=he.normalBias,D.shadowRadius=he.radius,D.shadowMapSize=he.mapSize,a.directionalShadow[y]=D,a.directionalShadowMap[y]=J,a.directionalShadowMatrix[y]=Y.shadow.matrix,L++}a.directional[y]=$,y++}else if(Y.isSpotLight){const $=e.get(Y);$.position.setFromMatrixPosition(Y.matrixWorld),$.color.copy(te).multiplyScalar(H),$.distance=F,$.coneCos=Math.cos(Y.angle),$.penumbraCos=Math.cos(Y.angle*(1-Y.penumbra)),$.decay=Y.decay,a.spot[U]=$;const he=Y.shadow;if(Y.map&&(a.spotLightMap[A]=Y.map,A++,he.updateMatrices(Y),Y.castShadow&&B++),a.spotLightMatrix[U]=he.matrix,Y.castShadow){const D=i.get(Y);D.shadowIntensity=he.intensity,D.shadowBias=he.bias,D.shadowNormalBias=he.normalBias,D.shadowRadius=he.radius,D.shadowMapSize=he.mapSize,a.spotShadow[U]=D,a.spotShadowMap[U]=J,I++}U++}else if(Y.isRectAreaLight){const $=e.get(Y);$.color.copy(te).multiplyScalar(H),$.halfWidth.set(Y.width*.5,0,0),$.halfHeight.set(0,Y.height*.5,0),a.rectArea[z]=$,z++}else if(Y.isPointLight){const $=e.get(Y);if($.color.copy(Y.color).multiplyScalar(Y.intensity),$.distance=Y.distance,$.decay=Y.decay,Y.castShadow){const he=Y.shadow,D=i.get(Y);D.shadowIntensity=he.intensity,D.shadowBias=he.bias,D.shadowNormalBias=he.normalBias,D.shadowRadius=he.radius,D.shadowMapSize=he.mapSize,D.shadowCameraNear=he.camera.near,D.shadowCameraFar=he.camera.far,a.pointShadow[_]=D,a.pointShadowMap[_]=J,a.pointShadowMatrix[_]=Y.shadow.matrix,O++}a.point[_]=$,_++}else if(Y.isHemisphereLight){const $=e.get(Y);$.skyColor.copy(Y.color).multiplyScalar(H),$.groundColor.copy(Y.groundColor).multiplyScalar(H),a.hemi[N]=$,N++}}z>0&&(r.has("OES_texture_float_linear")===!0?(a.rectAreaLTC1=Be.LTC_FLOAT_1,a.rectAreaLTC2=Be.LTC_FLOAT_2):(a.rectAreaLTC1=Be.LTC_HALF_1,a.rectAreaLTC2=Be.LTC_HALF_2)),a.ambient[0]=g,a.ambient[1]=v,a.ambient[2]=x;const q=a.hash;(q.sunLength!==b||q.directionalLength!==y||q.pointLength!==_||q.spotLength!==U||q.rectAreaLength!==z||q.hemiLength!==N||q.numSunShadows!==T||q.numDirectionalShadows!==L||q.numPointShadows!==O||q.numSpotShadows!==I||q.numSpotMaps!==A||q.numLightProbes!==X)&&(a.sun.length=b,a.directional.length=y,a.spot.length=U,a.rectArea.length=z,a.point.length=_,a.hemi.length=N,a.sunShadow.length=T,a.sunShadowMap.length=T,a.sunShadowMatrix.length=C,a.sunShadowCascade.length=C,a.directionalShadow.length=L,a.directionalShadowMap.length=L,a.directionalShadowMatrix.length=L,a.pointShadow.length=O,a.pointShadowMap.length=O,a.pointShadowMatrix.length=O,a.spotShadow.length=I,a.spotShadowMap.length=I,a.spotLightMatrix.length=I+A-B,a.spotLightMap.length=A,a.numSpotLightShadowsWithMaps=B,a.numLightProbes=X,q.sunLength=b,q.directionalLength=y,q.pointLength=_,q.spotLength=U,q.rectAreaLength=z,q.hemiLength=N,q.numSunShadows=T,q.numDirectionalShadows=L,q.numPointShadows=O,q.numSpotShadows=I,q.numSpotMaps=A,q.numLightProbes=X,a.version=XR++)}function m(h,g){let v=0,x=0,b=0,T=0,C=0,y=0;const _=g.matrixWorldInverse;for(let U=0,z=h.length;U<z;U++){const N=h[U];if(N.isSunLight){const L=a.sun[v];L.direction.setFromMatrixPosition(N.matrixWorld),L.direction.transformDirection(_),v++}else if(N.isDirectionalLight){const L=a.directional[x];L.direction.setFromMatrixPosition(N.matrixWorld),l.setFromMatrixPosition(N.target.matrixWorld),L.direction.sub(l),L.direction.transformDirection(_),x++}else if(N.isSpotLight){const L=a.spot[T];L.position.setFromMatrixPosition(N.matrixWorld),L.position.applyMatrix4(_),L.direction.setFromMatrixPosition(N.matrixWorld),l.setFromMatrixPosition(N.target.matrixWorld),L.direction.sub(l),L.direction.transformDirection(_),T++}else if(N.isRectAreaLight){const L=a.rectArea[C];L.position.setFromMatrixPosition(N.matrixWorld),L.position.applyMatrix4(_),f.identity(),c.copy(N.matrixWorld),c.premultiply(_),f.extractRotation(c),L.halfWidth.set(N.width*.5,0,0),L.halfHeight.set(0,N.height*.5,0),L.halfWidth.applyMatrix4(f),L.halfHeight.applyMatrix4(f),C++}else if(N.isPointLight){const L=a.point[b];L.position.setFromMatrixPosition(N.matrixWorld),L.position.applyMatrix4(_),b++}else if(N.isHemisphereLight){const L=a.hemi[y];L.direction.setFromMatrixPosition(N.matrixWorld),L.direction.transformDirection(_),y++}}}return{setup:p,setupView:m,state:a}}function p_(r){const e=new qR(r),i=[],a=[],l=[];function c(x){v.camera=x,i.length=0,a.length=0,l.length=0}function f(x){i.push(x)}function p(x){a.push(x)}function m(x){l.push(x)}function h(){e.setup(i)}function g(x){e.setupView(i,x)}const v={lightsArray:i,shadowsArray:a,lightProbeGridArray:l,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:c,state:v,setupLights:h,setupLightsView:g,pushLight:f,pushShadow:p,pushLightProbeGrid:m}}function YR(r){let e=new WeakMap;function i(l,c=0){const f=e.get(l);let p;return f===void 0?(p=new p_(r),e.set(l,[p])):c>=f.length?(p=new p_(r),f.push(p)):p=f[c],p}function a(){e=new WeakMap}return{get:i,dispose:a}}const ZR=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,KR=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,QR=[new se(1,0,0),new se(-1,0,0),new se(0,1,0),new se(0,-1,0),new se(0,0,1),new se(0,0,-1)],JR=[new se(0,-1,0),new se(0,-1,0),new se(0,0,1),new se(0,0,-1),new se(0,-1,0),new se(0,-1,0)],m_=new tn,xl=new se,Xh=new se;function $R(r,e,i){let a=new dS;const l=new gt,c=new gt,f=new ln,p=new fT,m=new dT,h={},g=i.maxTextureSize,v={[Qs]:Jn,[Jn]:Qs,[Da]:Da},x=new aa({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new gt},radius:{value:4}},vertexShader:ZR,fragmentShader:KR}),b=x.clone();b.defines.HORIZONTAL_PASS=1;const T=new $n;T.setAttribute("position",new Ci(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const C=new Fa(T,x),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Mu;let _=this.type;this.render=function(O,I,A){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||O.length===0)return;this.type===K1&&(it("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Mu);const B=r.getRenderTarget(),X=r.getActiveCubeFace(),q=r.getActiveMipmapLevel(),Q=r.state;Q.setBlending(Oa),Q.buffers.depth.getReversed()===!0?Q.buffers.color.setClear(0,0,0,0):Q.buffers.color.setClear(1,1,1,1),Q.buffers.depth.setTest(!0),Q.setScissorTest(!1);const fe=_!==this.type;fe&&I.traverse(function(Y){Y.material&&(Array.isArray(Y.material)?Y.material.forEach(te=>te.needsUpdate=!0):Y.material.needsUpdate=!0)});for(let Y=0,te=O.length;Y<te;Y++){const H=O[Y],F=H.shadow;if(F===void 0){it("WebGLShadowMap:",H,"has no shadow.");continue}if(F.autoUpdate===!1&&F.needsUpdate===!1)continue;l.copy(F.mapSize);const J=F.getFrameExtents();l.multiply(J),c.copy(F.mapSize),(l.x>g||l.y>g)&&(l.x>g&&(c.x=Math.floor(g/J.x),l.x=c.x*J.x,F.mapSize.x=c.x),l.y>g&&(c.y=Math.floor(g/J.y),l.y=c.y*J.y,F.mapSize.y=c.y));const $=r.state.buffers.depth.getReversed();if(F.camera._reversedDepth=$,F.map===null||fe===!0){if(F.map!==null&&(F.map.depthTexture!==null&&(F.map.depthTexture.dispose(),F.map.depthTexture=null),F.map.dispose()),this.type===vl){if(H.isPointLight){it("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}F.map=new Hi(l.x,l.y,{format:$s,type:ia,minFilter:In,magFilter:In,generateMipmaps:!1}),F.map.texture.name=H.name+".shadowMap",F.map.depthTexture=new Al(l.x,l.y,$i),F.map.depthTexture.name=H.name+".shadowMapDepth",F.map.depthTexture.format=Ba,F.map.depthTexture.compareFunction=null,F.map.depthTexture.minFilter=Un,F.map.depthTexture.magFilter=Un}else H.isPointLight?(F.map=new MS(l.x),F.map.depthTexture=new sT(l.x,na)):(F.map=new Hi(l.x,l.y),F.map.depthTexture=new Al(l.x,l.y,na)),F.map.depthTexture.name=H.name+".shadowMap",F.map.depthTexture.format=Ba,this.type===Mu?(F.map.depthTexture.compareFunction=$?om:rm,F.map.depthTexture.minFilter=In,F.map.depthTexture.magFilter=In):(F.map.depthTexture.compareFunction=null,F.map.depthTexture.minFilter=Un,F.map.depthTexture.magFilter=Un);F.camera.updateProjectionMatrix()}F.map.isWebGLCubeRenderTarget!==!0&&(F.map.width!==l.x||F.map.height!==l.y)&&F.map.setSize(l.x,l.y);const he=F.map.isWebGLCubeRenderTarget?6:F.getViewportCount();H.isPointLight!==!0&&F.updateMatrices(H,A);for(let D=0;D<he;D++){const ne=F.getCamera(D);if(H.isPointLight){const ve=F.camera,Te=F.matrix,Oe=H.distance||ve.far;Oe!==ve.far&&(ve.far=Oe,ve.updateProjectionMatrix()),xl.setFromMatrixPosition(H.matrixWorld),ve.position.copy(xl),Xh.copy(ve.position),Xh.add(QR[D]),ve.up.copy(JR[D]),ve.lookAt(Xh),ve.updateMatrixWorld(),Te.makeTranslation(-xl.x,-xl.y,-xl.z),m_.multiplyMatrices(ve.projectionMatrix,ve.matrixWorldInverse),F._frustum.setFromProjectionMatrix(m_,ve.coordinateSystem,ve.reversedDepth)}if(F.map.isWebGLCubeRenderTarget)r.setRenderTarget(F.map,D),r.clear();else{D===0&&(r.setRenderTarget(F.map),r.clear());const ve=F.getViewport(D);f.set(c.x*ve.x,c.y*ve.y,c.x*ve.z,c.y*ve.w),Q.viewport(f)}a=F.getFrustum(D),N(I,A,ne,H,this.type)}F.isPointLightShadow!==!0&&this.type===vl&&U(F,A),F.needsUpdate=!1}_=this.type,y.needsUpdate=!1,r.setRenderTarget(B,X,q)};function U(O,I){const A=e.update(C);x.defines.VSM_SAMPLES!==O.blurSamples&&(x.defines.VSM_SAMPLES=O.blurSamples,b.defines.VSM_SAMPLES=O.blurSamples,x.needsUpdate=!0,b.needsUpdate=!0),O.mapPass===null?O.mapPass=new Hi(l.x,l.y,{format:$s,type:ia}):(O.mapPass.width!==O.map.width||O.mapPass.height!==O.map.height)&&O.mapPass.setSize(O.map.width,O.map.height),x.uniforms.shadow_pass.value=O.map.depthTexture,x.uniforms.resolution.value.set(O.map.width,O.map.height),x.uniforms.radius.value=O.radius,r.setRenderTarget(O.mapPass),r.clear(),r.renderBufferDirect(I,null,A,x,C,null),b.uniforms.shadow_pass.value=O.mapPass.texture,b.uniforms.resolution.value.set(O.map.width,O.map.height),b.uniforms.radius.value=O.radius,r.setRenderTarget(O.map),r.clear(),r.renderBufferDirect(I,null,A,b,C,null)}function z(O,I,A,B){let X=null;const q=A.isPointLight===!0?O.customDistanceMaterial:O.customDepthMaterial;if(q!==void 0)X=q;else if(X=A.isPointLight===!0?m:p,r.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0||I.alphaToCoverage===!0){const Q=X.uuid,fe=I.uuid;let Y=h[Q];Y===void 0&&(Y={},h[Q]=Y);let te=Y[fe];te===void 0&&(te=X.clone(),Y[fe]=te,I.addEventListener("dispose",L)),X=te}if(X.visible=I.visible,X.wireframe=I.wireframe,B===vl?X.side=I.shadowSide!==null?I.shadowSide:I.side:X.side=I.shadowSide!==null?I.shadowSide:v[I.side],X.alphaMap=I.alphaMap,X.alphaTest=I.alphaToCoverage===!0?.5:I.alphaTest,X.map=I.map,X.clipShadows=I.clipShadows,X.clippingPlanes=I.clippingPlanes,X.clipIntersection=I.clipIntersection,X.displacementMap=I.displacementMap,X.displacementScale=I.displacementScale,X.displacementBias=I.displacementBias,X.wireframeLinewidth=I.wireframeLinewidth,X.linewidth=I.linewidth,A.isPointLight===!0&&X.isMeshDistanceMaterial===!0){const Q=r.properties.get(X);Q.light=A}return X}function N(O,I,A,B,X){if(O.visible===!1)return;if(O.layers.test(I.layers)&&(O.isMesh||O.isLine||O.isPoints)&&(O.castShadow||O.receiveShadow&&X===vl)&&(!O.frustumCulled||O.intersectsFrustum(a))){O.modelViewMatrix.multiplyMatrices(A.matrixWorldInverse,O.matrixWorld);const fe=e.update(O),Y=O.material;if(Array.isArray(Y)){const te=fe.groups;for(let H=0,F=te.length;H<F;H++){const J=te[H],$=Y[J.materialIndex];if($&&$.visible){const he=z(O,$,B,X);O.onBeforeShadow(r,O,I,A,fe,he,J),r.renderBufferDirect(A,null,fe,he,O,J),O.onAfterShadow(r,O,I,A,fe,he,J)}}}else if(Y.visible){const te=z(O,Y,B,X);O.onBeforeShadow(r,O,I,A,fe,te,null),r.renderBufferDirect(A,null,fe,te,O,null),O.onAfterShadow(r,O,I,A,fe,te,null)}}const Q=O.children;for(let fe=0,Y=Q.length;fe<Y;fe++)N(Q[fe],I,A,B,X)}function L(O){O.target.removeEventListener("dispose",L);for(const A in h){const B=h[A],X=O.target.uuid;X in B&&(B[X].dispose(),delete B[X])}}}function ew(r,e){function i(){let W=!1;const Ce=new ln;let ye=null;const Ne=new ln(0,0,0,0);return{setMask:function(Fe){ye!==Fe&&!W&&(r.colorMask(Fe,Fe,Fe,Fe),ye=Fe)},setLocked:function(Fe){W=Fe},setClear:function(Fe,Ee,Ke,je,zt){zt===!0&&(Fe*=je,Ee*=je,Ke*=je),Ce.set(Fe,Ee,Ke,je),Ne.equals(Ce)===!1&&(r.clearColor(Fe,Ee,Ke,je),Ne.copy(Ce))},reset:function(){W=!1,ye=null,Ne.set(-1,0,0,0)}}}function a(){let W=!1,Ce=!1,ye=null,Ne=null,Fe=null;return{setReversed:function(Ee){if(Ce!==Ee){const Ke=e.get("EXT_clip_control");Ee?Ke.clipControlEXT(Ke.LOWER_LEFT_EXT,Ke.ZERO_TO_ONE_EXT):Ke.clipControlEXT(Ke.LOWER_LEFT_EXT,Ke.NEGATIVE_ONE_TO_ONE_EXT),Ce=Ee;const je=Fe;Fe=null,this.setClear(je)}},getReversed:function(){return Ce},setTest:function(Ee){Ee?_e(r.DEPTH_TEST):Re(r.DEPTH_TEST)},setMask:function(Ee){ye!==Ee&&!W&&(r.depthMask(Ee),ye=Ee)},setFunc:function(Ee){if(Ce&&(Ee=NE[Ee]),Ne!==Ee){switch(Ee){case Kh:r.depthFunc(r.NEVER);break;case Qh:r.depthFunc(r.ALWAYS);break;case Jh:r.depthFunc(r.LESS);break;case Ml:r.depthFunc(r.LEQUAL);break;case $h:r.depthFunc(r.EQUAL);break;case ep:r.depthFunc(r.GEQUAL);break;case tp:r.depthFunc(r.GREATER);break;case np:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}Ne=Ee}},setLocked:function(Ee){W=Ee},setClear:function(Ee){Fe!==Ee&&(Fe=Ee,Ce&&(Ee=1-Ee),r.clearDepth(Ee))},reset:function(){W=!1,ye=null,Ne=null,Fe=null,Ce=!1}}}function l(){let W=!1,Ce=null,ye=null,Ne=null,Fe=null,Ee=null,Ke=null,je=null,zt=null;return{setTest:function(At){W||(At?_e(r.STENCIL_TEST):Re(r.STENCIL_TEST))},setMask:function(At){Ce!==At&&!W&&(r.stencilMask(At),Ce=At)},setFunc:function(At,Wn,ei){(ye!==At||Ne!==Wn||Fe!==ei)&&(r.stencilFunc(At,Wn,ei),ye=At,Ne=Wn,Fe=ei)},setOp:function(At,Wn,ei){(Ee!==At||Ke!==Wn||je!==ei)&&(r.stencilOp(At,Wn,ei),Ee=At,Ke=Wn,je=ei)},setLocked:function(At){W=At},setClear:function(At){zt!==At&&(r.clearStencil(At),zt=At)},reset:function(){W=!1,Ce=null,ye=null,Ne=null,Fe=null,Ee=null,Ke=null,je=null,zt=null}}}const c=new i,f=new a,p=new l,m=new WeakMap,h=new WeakMap;let g={},v={},x={},b=new WeakMap,T=[],C=null,y=!1,_=null,U=null,z=null,N=null,L=null,O=null,I=null,A=new bt(0,0,0),B=0,X=!1,q=null,Q=null,fe=null,Y=null,te=null;const H=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let F=!1,J=0;const $=r.getParameter(r.VERSION);$.indexOf("WebGL")!==-1?(J=parseFloat(/^WebGL (\d)/.exec($)[1]),F=J>=1):$.indexOf("OpenGL ES")!==-1&&(J=parseFloat(/^OpenGL ES (\d)/.exec($)[1]),F=J>=2);let he=null,D={};const ne=r.getParameter(r.SCISSOR_BOX),ve=r.getParameter(r.VIEWPORT),Te=new ln().fromArray(ne),Oe=new ln().fromArray(ve);function Xe(W,Ce,ye,Ne){const Fe=new Uint8Array(4),Ee=r.createTexture();r.bindTexture(W,Ee),r.texParameteri(W,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(W,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Ke=0;Ke<ye;Ke++)W===r.TEXTURE_3D||W===r.TEXTURE_2D_ARRAY?r.texImage3D(Ce,0,r.RGBA,1,1,Ne,0,r.RGBA,r.UNSIGNED_BYTE,Fe):r.texImage2D(Ce+Ke,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,Fe);return Ee}const oe={};oe[r.TEXTURE_2D]=Xe(r.TEXTURE_2D,r.TEXTURE_2D,1),oe[r.TEXTURE_CUBE_MAP]=Xe(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),oe[r.TEXTURE_2D_ARRAY]=Xe(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),oe[r.TEXTURE_3D]=Xe(r.TEXTURE_3D,r.TEXTURE_3D,1,1),c.setClear(0,0,0,1),f.setClear(1),p.setClear(0),_e(r.DEPTH_TEST),f.setFunc(Ml),mt(!1),Xt(xv),_e(r.CULL_FACE),_t(Oa);function _e(W){g[W]!==!0&&(r.enable(W),g[W]=!0)}function Re(W){g[W]!==!1&&(r.disable(W),g[W]=!1)}function tt(W,Ce){return x[W]!==Ce?(r.bindFramebuffer(W,Ce),x[W]=Ce,W===r.DRAW_FRAMEBUFFER&&(x[r.FRAMEBUFFER]=Ce),W===r.FRAMEBUFFER&&(x[r.DRAW_FRAMEBUFFER]=Ce),!0):!1}function Ge(W,Ce){let ye=T,Ne=!1;if(W){ye=b.get(Ce),ye===void 0&&(ye=[],b.set(Ce,ye));const Fe=W.textures;if(ye.length!==Fe.length||ye[0]!==r.COLOR_ATTACHMENT0){for(let Ee=0,Ke=Fe.length;Ee<Ke;Ee++)ye[Ee]=r.COLOR_ATTACHMENT0+Ee;ye.length=Fe.length,Ne=!0}}else ye[0]!==r.BACK&&(ye[0]=r.BACK,Ne=!0);Ne&&r.drawBuffers(ye)}function lt(W){return C!==W?(r.useProgram(W),C=W,!0):!1}const nn={[Jr]:r.FUNC_ADD,[J1]:r.FUNC_SUBTRACT,[$1]:r.FUNC_REVERSE_SUBTRACT};nn[eE]=r.MIN,nn[tE]=r.MAX;const at={[nE]:r.ZERO,[iE]:r.ONE,[aE]:r.SRC_COLOR,[F_]:r.SRC_ALPHA,[uE]:r.SRC_ALPHA_SATURATE,[lE]:r.DST_COLOR,[rE]:r.DST_ALPHA,[sE]:r.ONE_MINUS_SRC_COLOR,[z_]:r.ONE_MINUS_SRC_ALPHA,[cE]:r.ONE_MINUS_DST_COLOR,[oE]:r.ONE_MINUS_DST_ALPHA,[fE]:r.CONSTANT_COLOR,[dE]:r.ONE_MINUS_CONSTANT_COLOR,[hE]:r.CONSTANT_ALPHA,[pE]:r.ONE_MINUS_CONSTANT_ALPHA};function _t(W,Ce,ye,Ne,Fe,Ee,Ke,je,zt,At){if(W===Oa){y===!0&&(Re(r.BLEND),y=!1);return}if(y===!1&&(_e(r.BLEND),y=!0),W!==Q1){if(W!==_||At!==X){if((U!==Jr||L!==Jr)&&(r.blendEquation(r.FUNC_ADD),U=Jr,L=Jr),At)switch(W){case Sl:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case bl:r.blendFunc(r.ONE,r.ONE);break;case vv:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case _v:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:wt("WebGLState: Invalid blending: ",W);break}else switch(W){case Sl:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case bl:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case vv:wt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case _v:wt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:wt("WebGLState: Invalid blending: ",W);break}z=null,N=null,O=null,I=null,A.set(0,0,0),B=0,_=W,X=At}return}Fe=Fe||Ce,Ee=Ee||ye,Ke=Ke||Ne,(Ce!==U||Fe!==L)&&(r.blendEquationSeparate(nn[Ce],nn[Fe]),U=Ce,L=Fe),(ye!==z||Ne!==N||Ee!==O||Ke!==I)&&(r.blendFuncSeparate(at[ye],at[Ne],at[Ee],at[Ke]),z=ye,N=Ne,O=Ee,I=Ke),(je.equals(A)===!1||zt!==B)&&(r.blendColor(je.r,je.g,je.b,zt),A.copy(je),B=zt),_=W,X=!1}function Ot(W,Ce){W.side===Da?Re(r.CULL_FACE):_e(r.CULL_FACE);let ye=W.side===Jn;Ce&&(ye=!ye),mt(ye),W.blending===Sl&&W.transparent===!1?_t(Oa):_t(W.blending,W.blendEquation,W.blendSrc,W.blendDst,W.blendEquationAlpha,W.blendSrcAlpha,W.blendDstAlpha,W.blendColor,W.blendAlpha,W.premultipliedAlpha),f.setFunc(W.depthFunc),f.setTest(W.depthTest),f.setMask(W.depthWrite),c.setMask(W.colorWrite);const Ne=W.stencilWrite;p.setTest(Ne),Ne&&(p.setMask(W.stencilWriteMask),p.setFunc(W.stencilFunc,W.stencilRef,W.stencilFuncMask),p.setOp(W.stencilFail,W.stencilZFail,W.stencilZPass)),Mn(W.polygonOffset,W.polygonOffsetFactor,W.polygonOffsetUnits),W.alphaToCoverage===!0?_e(r.SAMPLE_ALPHA_TO_COVERAGE):Re(r.SAMPLE_ALPHA_TO_COVERAGE)}function mt(W){q!==W&&(W?r.frontFace(r.CW):r.frontFace(r.CCW),q=W)}function Xt(W){W!==Y1?(_e(r.CULL_FACE),W!==Q&&(W===xv?r.cullFace(r.BACK):W===Z1?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Re(r.CULL_FACE),Q=W}function an(W){W!==fe&&(F&&r.lineWidth(W),fe=W)}function Mn(W,Ce,ye){W?(_e(r.POLYGON_OFFSET_FILL),(Y!==Ce||te!==ye)&&(Y=Ce,te=ye,f.getReversed()&&(Ce=-Ce),r.polygonOffset(Ce,ye))):Re(r.POLYGON_OFFSET_FILL)}function jt(W){W?_e(r.SCISSOR_TEST):Re(r.SCISSOR_TEST)}function sn(W){W===void 0&&(W=r.TEXTURE0+H-1),he!==W&&(r.activeTexture(W),he=W)}function j(W,Ce,ye){ye===void 0&&(he===null?ye=r.TEXTURE0+H-1:ye=he);let Ne=D[ye];Ne===void 0&&(Ne={type:void 0,texture:void 0},D[ye]=Ne),(Ne.type!==W||Ne.texture!==Ce)&&(he!==ye&&(r.activeTexture(ye),he=ye),r.bindTexture(W,Ce||oe[W]),Ne.type=W,Ne.texture=Ce)}function Pt(){const W=D[he];W!==void 0&&W.type!==void 0&&(r.bindTexture(W.type,null),W.type=void 0,W.texture=void 0)}function Dt(){try{r.compressedTexImage2D(...arguments)}catch(W){wt("WebGLState:",W)}}function P(){try{r.compressedTexImage3D(...arguments)}catch(W){wt("WebGLState:",W)}}function E(){try{r.texSubImage2D(...arguments)}catch(W){wt("WebGLState:",W)}}function K(){try{r.texSubImage3D(...arguments)}catch(W){wt("WebGLState:",W)}}function ce(){try{r.compressedTexSubImage2D(...arguments)}catch(W){wt("WebGLState:",W)}}function me(){try{r.compressedTexSubImage3D(...arguments)}catch(W){wt("WebGLState:",W)}}function Ae(){try{r.texStorage2D(...arguments)}catch(W){wt("WebGLState:",W)}}function De(){try{r.texStorage3D(...arguments)}catch(W){wt("WebGLState:",W)}}function ge(){try{r.texImage2D(...arguments)}catch(W){wt("WebGLState:",W)}}function xe(){try{r.texImage3D(...arguments)}catch(W){wt("WebGLState:",W)}}function we(W){return v[W]!==void 0?v[W]:r.getParameter(W)}function Ve(W,Ce){v[W]!==Ce&&(r.pixelStorei(W,Ce),v[W]=Ce)}function Pe(W){Te.equals(W)===!1&&(r.scissor(W.x,W.y,W.z,W.w),Te.copy(W))}function Ue(W){Oe.equals(W)===!1&&(r.viewport(W.x,W.y,W.z,W.w),Oe.copy(W))}function Qe(W,Ce){let ye=h.get(Ce);ye===void 0&&(ye=new WeakMap,h.set(Ce,ye));let Ne=ye.get(W);Ne===void 0&&(Ne=r.getUniformBlockIndex(Ce,W.name),ye.set(W,Ne))}function Je(W,Ce){const Ne=h.get(Ce).get(W);m.get(Ce)!==Ne&&(r.uniformBlockBinding(Ce,Ne,W.__bindingPointIndex),m.set(Ce,Ne))}function nt(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),f.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),r.pixelStorei(r.PACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,!1),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,r.BROWSER_DEFAULT_WEBGL),r.pixelStorei(r.PACK_ROW_LENGTH,0),r.pixelStorei(r.PACK_SKIP_PIXELS,0),r.pixelStorei(r.PACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_ROW_LENGTH,0),r.pixelStorei(r.UNPACK_IMAGE_HEIGHT,0),r.pixelStorei(r.UNPACK_SKIP_PIXELS,0),r.pixelStorei(r.UNPACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_SKIP_IMAGES,0),g={},v={},he=null,D={},x={},b=new WeakMap,T=[],C=null,y=!1,_=null,U=null,z=null,N=null,L=null,O=null,I=null,A=new bt(0,0,0),B=0,X=!1,q=null,Q=null,fe=null,Y=null,te=null,Te.set(0,0,r.canvas.width,r.canvas.height),Oe.set(0,0,r.canvas.width,r.canvas.height),c.reset(),f.reset(),p.reset()}return{buffers:{color:c,depth:f,stencil:p},enable:_e,disable:Re,bindFramebuffer:tt,drawBuffers:Ge,useProgram:lt,setBlending:_t,setMaterial:Ot,setFlipSided:mt,setCullFace:Xt,setLineWidth:an,setPolygonOffset:Mn,setScissorTest:jt,activeTexture:sn,bindTexture:j,unbindTexture:Pt,compressedTexImage2D:Dt,compressedTexImage3D:P,texImage2D:ge,texImage3D:xe,pixelStorei:Ve,getParameter:we,updateUBOMapping:Qe,uniformBlockBinding:Je,texStorage2D:Ae,texStorage3D:De,texSubImage2D:E,texSubImage3D:K,compressedTexSubImage2D:ce,compressedTexSubImage3D:me,scissor:Pe,viewport:Ue,reset:nt}}function tw(r,e,i,a,l,c,f){const p=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new gt,g=new WeakMap,v=new Set;let x;const b=new WeakMap;let T=!1;try{T=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function C(P,E){return T?new OffscreenCanvas(P,E):Iu("canvas")}function y(P,E,K){let ce=1;const me=Dt(P);if((me.width>K||me.height>K)&&(ce=K/Math.max(me.width,me.height)),ce<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const Ae=Math.floor(ce*me.width),De=Math.floor(ce*me.height);x===void 0&&(x=C(Ae,De));const ge=E?C(Ae,De):x;return ge.width=Ae,ge.height=De,ge.getContext("2d").drawImage(P,0,0,Ae,De),it("WebGLRenderer: Texture has been resized from ("+me.width+"x"+me.height+") to ("+Ae+"x"+De+")."),ge}else return"data"in P&&it("WebGLRenderer: Image in DataTexture is too big ("+me.width+"x"+me.height+")."),P;return P}function _(P){return P.generateMipmaps}function U(P){r.generateMipmap(P)}function z(P){return P.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?r.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function N(P,E,K,ce,me,Ae=!1){if(P!==null){if(r[P]!==void 0)return r[P];it("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let De;ce&&(De=e.get("EXT_texture_norm16"),De||it("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ge=E;if(E===r.RED&&(K===r.FLOAT&&(ge=r.R32F),K===r.HALF_FLOAT&&(ge=r.R16F),K===r.UNSIGNED_BYTE&&(ge=r.R8),K===r.UNSIGNED_SHORT&&De&&(ge=De.R16_EXT),K===r.SHORT&&De&&(ge=De.R16_SNORM_EXT)),E===r.RED_INTEGER&&(K===r.UNSIGNED_BYTE&&(ge=r.R8UI),K===r.UNSIGNED_SHORT&&(ge=r.R16UI),K===r.UNSIGNED_INT&&(ge=r.R32UI),K===r.BYTE&&(ge=r.R8I),K===r.SHORT&&(ge=r.R16I),K===r.INT&&(ge=r.R32I)),E===r.RG&&(K===r.FLOAT&&(ge=r.RG32F),K===r.HALF_FLOAT&&(ge=r.RG16F),K===r.UNSIGNED_BYTE&&(ge=r.RG8),K===r.UNSIGNED_SHORT&&De&&(ge=De.RG16_EXT),K===r.SHORT&&De&&(ge=De.RG16_SNORM_EXT)),E===r.RG_INTEGER&&(K===r.UNSIGNED_BYTE&&(ge=r.RG8UI),K===r.UNSIGNED_SHORT&&(ge=r.RG16UI),K===r.UNSIGNED_INT&&(ge=r.RG32UI),K===r.BYTE&&(ge=r.RG8I),K===r.SHORT&&(ge=r.RG16I),K===r.INT&&(ge=r.RG32I)),E===r.RGB_INTEGER&&(K===r.UNSIGNED_BYTE&&(ge=r.RGB8UI),K===r.UNSIGNED_SHORT&&(ge=r.RGB16UI),K===r.UNSIGNED_INT&&(ge=r.RGB32UI),K===r.BYTE&&(ge=r.RGB8I),K===r.SHORT&&(ge=r.RGB16I),K===r.INT&&(ge=r.RGB32I)),E===r.RGBA_INTEGER&&(K===r.UNSIGNED_BYTE&&(ge=r.RGBA8UI),K===r.UNSIGNED_SHORT&&(ge=r.RGBA16UI),K===r.UNSIGNED_INT&&(ge=r.RGBA32UI),K===r.BYTE&&(ge=r.RGBA8I),K===r.SHORT&&(ge=r.RGBA16I),K===r.INT&&(ge=r.RGBA32I)),E===r.RGB&&(K===r.UNSIGNED_SHORT&&De&&(ge=De.RGB16_EXT),K===r.SHORT&&De&&(ge=De.RGB16_SNORM_EXT),K===r.UNSIGNED_INT_5_9_9_9_REV&&(ge=r.RGB9_E5),K===r.UNSIGNED_INT_10F_11F_11F_REV&&(ge=r.R11F_G11F_B10F)),E===r.RGBA){const xe=Ae?Ou:Et.getTransfer(me);K===r.FLOAT&&(ge=r.RGBA32F),K===r.HALF_FLOAT&&(ge=r.RGBA16F),K===r.UNSIGNED_BYTE&&(ge=xe===Ft?r.SRGB8_ALPHA8:r.RGBA8),K===r.UNSIGNED_SHORT&&De&&(ge=De.RGBA16_EXT),K===r.SHORT&&De&&(ge=De.RGBA16_SNORM_EXT),K===r.UNSIGNED_SHORT_4_4_4_4&&(ge=r.RGBA4),K===r.UNSIGNED_SHORT_5_5_5_1&&(ge=r.RGB5_A1)}return(ge===r.R16F||ge===r.R32F||ge===r.RG16F||ge===r.RG32F||ge===r.RGBA16F||ge===r.RGBA32F)&&e.get("EXT_color_buffer_float"),ge}function L(P,E){let K;return P?E===null||E===na||E===Tl?K=r.DEPTH24_STENCIL8:E===$i?K=r.DEPTH32F_STENCIL8:E===El&&(K=r.DEPTH24_STENCIL8,it("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===na||E===Tl?K=r.DEPTH_COMPONENT24:E===$i?K=r.DEPTH_COMPONENT32F:E===El&&(K=r.DEPTH_COMPONENT16),K}function O(P,E){return _(P)===!0||P.isFramebufferTexture&&P.minFilter!==Un&&P.minFilter!==In?Math.log2(Math.max(E.width,E.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?E.mipmaps.length:1}function I(P){const E=P.target;E.removeEventListener("dispose",I),B(E),E.isVideoTexture&&g.delete(E),E.isHTMLTexture&&v.delete(E)}function A(P){const E=P.target;E.removeEventListener("dispose",A),q(E)}function B(P){const E=a.get(P);if(E.__webglInit===void 0)return;const K=P.source,ce=b.get(K);if(ce){const me=ce[E.__cacheKey];me.usedTimes--,me.usedTimes===0&&X(P),Object.keys(ce).length===0&&b.delete(K)}a.remove(P)}function X(P){const E=a.get(P);r.deleteTexture(E.__webglTexture);const K=P.source,ce=b.get(K);delete ce[E.__cacheKey],f.memory.textures--}function q(P){const E=a.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),a.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let ce=0;ce<6;ce++){if(Array.isArray(E.__webglFramebuffer[ce]))for(let me=0;me<E.__webglFramebuffer[ce].length;me++)r.deleteFramebuffer(E.__webglFramebuffer[ce][me]);else r.deleteFramebuffer(E.__webglFramebuffer[ce]);E.__webglDepthbuffer&&r.deleteRenderbuffer(E.__webglDepthbuffer[ce])}else{if(Array.isArray(E.__webglFramebuffer))for(let ce=0;ce<E.__webglFramebuffer.length;ce++)r.deleteFramebuffer(E.__webglFramebuffer[ce]);else r.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&r.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&r.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let ce=0;ce<E.__webglColorRenderbuffer.length;ce++)E.__webglColorRenderbuffer[ce]&&r.deleteRenderbuffer(E.__webglColorRenderbuffer[ce]);E.__webglDepthRenderbuffer&&r.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const K=P.textures;for(let ce=0,me=K.length;ce<me;ce++){const Ae=a.get(K[ce]);Ae.__webglTexture&&(r.deleteTexture(Ae.__webglTexture),f.memory.textures--),a.remove(K[ce])}a.remove(P)}let Q=0;function fe(){Q=0}function Y(){return Q}function te(P){Q=P}function H(){const P=Q;return P>=l.maxTextures&&it("WebGLTextures: Trying to use "+(P+1)+" texture units while this GPU supports only "+l.maxTextures),Q+=1,P}function F(P){const E=[];return E.push(P.wrapS),E.push(P.wrapT),E.push(P.wrapR||0),E.push(P.magFilter),E.push(P.minFilter),E.push(P.anisotropy),E.push(P.internalFormat),E.push(P.format),E.push(P.type),E.push(P.generateMipmaps),E.push(P.premultiplyAlpha),E.push(P.flipY),E.push(P.unpackAlignment),E.push(P.colorSpace),E.join()}function J(P,E){const K=a.get(P);if(P.isVideoTexture&&j(P),P.isRenderTargetTexture===!1&&P.isExternalTexture!==!0&&P.version>0&&K.__version!==P.version){const ce=P.image;if(ce===null)it("WebGLRenderer: Texture marked for update but no image data found.");else if(ce.complete===!1)it("WebGLRenderer: Texture marked for update but image is incomplete");else{Re(K,P,E);return}}else P.isExternalTexture&&(K.__webglTexture=P.sourceTexture?P.sourceTexture:null);i.bindTexture(r.TEXTURE_2D,K.__webglTexture,r.TEXTURE0+E)}function $(P,E){const K=a.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&K.__version!==P.version){Re(K,P,E);return}else P.isExternalTexture&&(K.__webglTexture=P.sourceTexture?P.sourceTexture:null);i.bindTexture(r.TEXTURE_2D_ARRAY,K.__webglTexture,r.TEXTURE0+E)}function he(P,E){const K=a.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&K.__version!==P.version){Re(K,P,E);return}i.bindTexture(r.TEXTURE_3D,K.__webglTexture,r.TEXTURE0+E)}function D(P,E){const K=a.get(P);if(P.isCubeDepthTexture!==!0&&P.version>0&&K.__version!==P.version){tt(K,P,E);return}i.bindTexture(r.TEXTURE_CUBE_MAP,K.__webglTexture,r.TEXTURE0+E)}const ne={[ip]:r.REPEAT,[Ua]:r.CLAMP_TO_EDGE,[ap]:r.MIRRORED_REPEAT},ve={[Un]:r.NEAREST,[xE]:r.NEAREST_MIPMAP_NEAREST,[Xc]:r.NEAREST_MIPMAP_LINEAR,[In]:r.LINEAR,[ph]:r.LINEAR_MIPMAP_NEAREST,[Ys]:r.LINEAR_MIPMAP_LINEAR},Te={[yE]:r.NEVER,[AE]:r.ALWAYS,[bE]:r.LESS,[rm]:r.LEQUAL,[ME]:r.EQUAL,[om]:r.GEQUAL,[EE]:r.GREATER,[TE]:r.NOTEQUAL};function Oe(P,E){if(E.type===$i&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===In||E.magFilter===ph||E.magFilter===Xc||E.magFilter===Ys||E.minFilter===In||E.minFilter===ph||E.minFilter===Xc||E.minFilter===Ys)&&it("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(P,r.TEXTURE_WRAP_S,ne[E.wrapS]),r.texParameteri(P,r.TEXTURE_WRAP_T,ne[E.wrapT]),(P===r.TEXTURE_3D||P===r.TEXTURE_2D_ARRAY)&&r.texParameteri(P,r.TEXTURE_WRAP_R,ne[E.wrapR]),r.texParameteri(P,r.TEXTURE_MAG_FILTER,ve[E.magFilter]),r.texParameteri(P,r.TEXTURE_MIN_FILTER,ve[E.minFilter]),E.compareFunction&&(r.texParameteri(P,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(P,r.TEXTURE_COMPARE_FUNC,Te[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===Un||E.minFilter!==Xc&&E.minFilter!==Ys||E.type===$i&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||a.get(E).__currentAnisotropy){const K=e.get("EXT_texture_filter_anisotropic");r.texParameterf(P,K.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,l.getMaxAnisotropy())),a.get(E).__currentAnisotropy=E.anisotropy}}}function Xe(P,E){let K=!1;P.__webglInit===void 0&&(P.__webglInit=!0,E.addEventListener("dispose",I));const ce=E.source;let me=b.get(ce);me===void 0&&(me={},b.set(ce,me));const Ae=F(E);if(Ae!==P.__cacheKey){me[Ae]===void 0&&(me[Ae]={texture:r.createTexture(),usedTimes:0},f.memory.textures++,K=!0),me[Ae].usedTimes++;const De=me[P.__cacheKey];De!==void 0&&(me[P.__cacheKey].usedTimes--,De.usedTimes===0&&X(E)),P.__cacheKey=Ae,P.__webglTexture=me[Ae].texture}return K}function oe(P,E,K){return Math.floor(Math.floor(P/K)/E)}function _e(P,E,K,ce){const Ae=P.updateRanges;if(Ae.length===0)i.texSubImage2D(r.TEXTURE_2D,0,0,0,E.width,E.height,K,ce,E.data);else{Ae.sort((Ve,Pe)=>Ve.start-Pe.start);let De=0;for(let Ve=1;Ve<Ae.length;Ve++){const Pe=Ae[De],Ue=Ae[Ve],Qe=Pe.start+Pe.count,Je=oe(Ue.start,E.width,4),nt=oe(Pe.start,E.width,4);Ue.start<=Qe+1&&Je===nt&&oe(Ue.start+Ue.count-1,E.width,4)===Je?Pe.count=Math.max(Pe.count,Ue.start+Ue.count-Pe.start):(++De,Ae[De]=Ue)}Ae.length=De+1;const ge=i.getParameter(r.UNPACK_ROW_LENGTH),xe=i.getParameter(r.UNPACK_SKIP_PIXELS),we=i.getParameter(r.UNPACK_SKIP_ROWS);i.pixelStorei(r.UNPACK_ROW_LENGTH,E.width);for(let Ve=0,Pe=Ae.length;Ve<Pe;Ve++){const Ue=Ae[Ve],Qe=Math.floor(Ue.start/4),Je=Math.ceil(Ue.count/4),nt=Qe%E.width,W=Math.floor(Qe/E.width),Ce=Je,ye=1;i.pixelStorei(r.UNPACK_SKIP_PIXELS,nt),i.pixelStorei(r.UNPACK_SKIP_ROWS,W),i.texSubImage2D(r.TEXTURE_2D,0,nt,W,Ce,ye,K,ce,E.data)}P.clearUpdateRanges(),i.pixelStorei(r.UNPACK_ROW_LENGTH,ge),i.pixelStorei(r.UNPACK_SKIP_PIXELS,xe),i.pixelStorei(r.UNPACK_SKIP_ROWS,we)}}function Re(P,E,K){let ce=r.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(ce=r.TEXTURE_2D_ARRAY),E.isData3DTexture&&(ce=r.TEXTURE_3D);const me=Xe(P,E),Ae=E.source;i.bindTexture(ce,P.__webglTexture,r.TEXTURE0+K);const De=a.get(Ae);if(Ae.version!==De.__version||me===!0){if(i.activeTexture(r.TEXTURE0+K),(typeof ImageBitmap<"u"&&E.image instanceof ImageBitmap)===!1){const ye=Et.getPrimaries(Et.workingColorSpace),Ne=E.colorSpace===_s?null:Et.getPrimaries(E.colorSpace),Fe=E.colorSpace===_s||ye===Ne?r.NONE:r.BROWSER_DEFAULT_WEBGL;i.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,E.flipY),i.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),i.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Fe)}i.pixelStorei(r.UNPACK_ALIGNMENT,E.unpackAlignment);let xe=y(E.image,!1,l.maxTextureSize);xe=Pt(E,xe);const we=c.convert(E.format,E.colorSpace),Ve=c.convert(E.type);let Pe=N(E.internalFormat,we,Ve,E.normalized,E.colorSpace,E.isVideoTexture);Oe(ce,E);let Ue;const Qe=E.mipmaps,Je=E.isVideoTexture!==!0,nt=De.__version===void 0||me===!0,W=Ae.dataReady,Ce=O(E,xe);if(E.isDepthTexture)Pe=L(E.format===Zs,E.type),nt&&(Je?i.texStorage2D(r.TEXTURE_2D,1,Pe,xe.width,xe.height):i.texImage2D(r.TEXTURE_2D,0,Pe,xe.width,xe.height,0,we,Ve,null));else if(E.isDataTexture)if(Qe.length>0){Je&&nt&&i.texStorage2D(r.TEXTURE_2D,Ce,Pe,Qe[0].width,Qe[0].height);for(let ye=0,Ne=Qe.length;ye<Ne;ye++)Ue=Qe[ye],Je?W&&i.texSubImage2D(r.TEXTURE_2D,ye,0,0,Ue.width,Ue.height,we,Ve,Ue.data):i.texImage2D(r.TEXTURE_2D,ye,Pe,Ue.width,Ue.height,0,we,Ve,Ue.data);E.generateMipmaps=!1}else Je?(nt&&i.texStorage2D(r.TEXTURE_2D,Ce,Pe,xe.width,xe.height),W&&_e(E,xe,we,Ve)):i.texImage2D(r.TEXTURE_2D,0,Pe,xe.width,xe.height,0,we,Ve,xe.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){Je&&nt&&i.texStorage3D(r.TEXTURE_2D_ARRAY,Ce,Pe,Qe[0].width,Qe[0].height,xe.depth);for(let ye=0,Ne=Qe.length;ye<Ne;ye++)if(Ue=Qe[ye],E.format!==Fi)if(we!==null)if(Je){if(W)if(E.layerUpdates.size>0){const Fe=qv(Ue.width,Ue.height,E.format,E.type);for(const Ee of E.layerUpdates){const Ke=Ue.data.subarray(Ee*Fe/Ue.data.BYTES_PER_ELEMENT,(Ee+1)*Fe/Ue.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,ye,0,0,Ee,Ue.width,Ue.height,1,we,Ke)}}else i.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,ye,0,0,0,Ue.width,Ue.height,xe.depth,we,Ue.data)}else i.compressedTexImage3D(r.TEXTURE_2D_ARRAY,ye,Pe,Ue.width,Ue.height,xe.depth,0,Ue.data,0,0);else it("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Je?W&&i.texSubImage3D(r.TEXTURE_2D_ARRAY,ye,0,0,0,Ue.width,Ue.height,xe.depth,we,Ve,Ue.data):i.texImage3D(r.TEXTURE_2D_ARRAY,ye,Pe,Ue.width,Ue.height,xe.depth,0,we,Ve,Ue.data);E.layerUpdates.size>0&&E.clearLayerUpdates()}else{Je&&nt&&i.texStorage2D(r.TEXTURE_2D,Ce,Pe,Qe[0].width,Qe[0].height);for(let ye=0,Ne=Qe.length;ye<Ne;ye++)Ue=Qe[ye],E.format!==Fi?we!==null?Je?W&&i.compressedTexSubImage2D(r.TEXTURE_2D,ye,0,0,Ue.width,Ue.height,we,Ue.data):i.compressedTexImage2D(r.TEXTURE_2D,ye,Pe,Ue.width,Ue.height,0,Ue.data):it("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Je?W&&i.texSubImage2D(r.TEXTURE_2D,ye,0,0,Ue.width,Ue.height,we,Ve,Ue.data):i.texImage2D(r.TEXTURE_2D,ye,Pe,Ue.width,Ue.height,0,we,Ve,Ue.data)}else if(E.isDataArrayTexture)if(Je){if(nt&&i.texStorage3D(r.TEXTURE_2D_ARRAY,Ce,Pe,xe.width,xe.height,xe.depth),W)if(E.layerUpdates.size>0){const ye=qv(xe.width,xe.height,E.format,E.type);for(const Ne of E.layerUpdates){const Fe=xe.data.subarray(Ne*ye/xe.data.BYTES_PER_ELEMENT,(Ne+1)*ye/xe.data.BYTES_PER_ELEMENT);i.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,Ne,xe.width,xe.height,1,we,Ve,Fe)}E.clearLayerUpdates()}else i.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,xe.width,xe.height,xe.depth,we,Ve,xe.data)}else i.texImage3D(r.TEXTURE_2D_ARRAY,0,Pe,xe.width,xe.height,xe.depth,0,we,Ve,xe.data);else if(E.isData3DTexture)Je?(nt&&i.texStorage3D(r.TEXTURE_3D,Ce,Pe,xe.width,xe.height,xe.depth),W&&i.texSubImage3D(r.TEXTURE_3D,0,0,0,0,xe.width,xe.height,xe.depth,we,Ve,xe.data)):i.texImage3D(r.TEXTURE_3D,0,Pe,xe.width,xe.height,xe.depth,0,we,Ve,xe.data);else if(E.isFramebufferTexture){if(nt)if(Je)i.texStorage2D(r.TEXTURE_2D,Ce,Pe,xe.width,xe.height);else{let ye=xe.width,Ne=xe.height;for(let Fe=0;Fe<Ce;Fe++)i.texImage2D(r.TEXTURE_2D,Fe,Pe,ye,Ne,0,we,Ve,null),ye>>=1,Ne>>=1}}else if(E.isHTMLTexture){if("texElementImage2D"in r){const ye=r.canvas;if(ye.hasAttribute("layoutsubtree")||ye.setAttribute("layoutsubtree","true"),xe.parentNode!==ye){ye.appendChild(xe),v.add(E),ye.onpaint=Ne=>{const Fe=Ne.changedElements;for(const Ee of v)Fe.includes(Ee.image)&&(Ee.needsUpdate=!0)},ye.requestPaint();return}if(r.texElementImage2D.length===3)r.texElementImage2D(r.TEXTURE_2D,r.RGBA8,xe);else{const Fe=r.RGBA,Ee=r.RGBA,Ke=r.UNSIGNED_BYTE;r.texElementImage2D(r.TEXTURE_2D,0,Fe,Ee,Ke,xe)}r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MIN_FILTER,r.LINEAR),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE)}}else if(Qe.length>0){if(Je&&nt){const ye=Dt(Qe[0]);i.texStorage2D(r.TEXTURE_2D,Ce,Pe,ye.width,ye.height)}for(let ye=0,Ne=Qe.length;ye<Ne;ye++)Ue=Qe[ye],Je?W&&i.texSubImage2D(r.TEXTURE_2D,ye,0,0,we,Ve,Ue):i.texImage2D(r.TEXTURE_2D,ye,Pe,we,Ve,Ue);E.generateMipmaps=!1}else if(Je){if(nt){const ye=Dt(xe);i.texStorage2D(r.TEXTURE_2D,Ce,Pe,ye.width,ye.height)}W&&i.texSubImage2D(r.TEXTURE_2D,0,0,0,we,Ve,xe)}else i.texImage2D(r.TEXTURE_2D,0,Pe,we,Ve,xe);_(E)&&U(ce),De.__version=Ae.version,E.onUpdate&&E.onUpdate(E)}P.__version=E.version}function tt(P,E,K){if(E.image.length!==6)return;const ce=Xe(P,E),me=E.source;i.bindTexture(r.TEXTURE_CUBE_MAP,P.__webglTexture,r.TEXTURE0+K);const Ae=a.get(me);if(me.version!==Ae.__version||ce===!0){i.activeTexture(r.TEXTURE0+K);const De=Et.getPrimaries(Et.workingColorSpace),ge=E.colorSpace===_s?null:Et.getPrimaries(E.colorSpace),xe=E.colorSpace===_s||De===ge?r.NONE:r.BROWSER_DEFAULT_WEBGL;i.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,E.flipY),i.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),i.pixelStorei(r.UNPACK_ALIGNMENT,E.unpackAlignment),i.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,xe);const we=E.isCompressedTexture||E.image[0].isCompressedTexture,Ve=E.image[0]&&E.image[0].isDataTexture,Pe=[];for(let Ee=0;Ee<6;Ee++)!we&&!Ve?Pe[Ee]=y(E.image[Ee],!0,l.maxCubemapSize):Pe[Ee]=Ve?E.image[Ee].image:E.image[Ee],Pe[Ee]=Pt(E,Pe[Ee]);const Ue=Pe[0],Qe=c.convert(E.format,E.colorSpace),Je=c.convert(E.type),nt=N(E.internalFormat,Qe,Je,E.normalized,E.colorSpace),W=E.isVideoTexture!==!0,Ce=Ae.__version===void 0||ce===!0,ye=me.dataReady;let Ne=O(E,Ue);Oe(r.TEXTURE_CUBE_MAP,E);let Fe;if(we){W&&Ce&&i.texStorage2D(r.TEXTURE_CUBE_MAP,Ne,nt,Ue.width,Ue.height);for(let Ee=0;Ee<6;Ee++){Fe=Pe[Ee].mipmaps;for(let Ke=0;Ke<Fe.length;Ke++){const je=Fe[Ke];E.format!==Fi?Qe!==null?W?ye&&i.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,Ke,0,0,je.width,je.height,Qe,je.data):i.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,Ke,nt,je.width,je.height,0,je.data):it("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):W?ye&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,Ke,0,0,je.width,je.height,Qe,Je,je.data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,Ke,nt,je.width,je.height,0,Qe,Je,je.data)}}}else{if(Fe=E.mipmaps,W&&Ce){Fe.length>0&&Ne++;const Ee=Dt(Pe[0]);i.texStorage2D(r.TEXTURE_CUBE_MAP,Ne,nt,Ee.width,Ee.height)}for(let Ee=0;Ee<6;Ee++)if(Ve){W?ye&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,0,0,0,Pe[Ee].width,Pe[Ee].height,Qe,Je,Pe[Ee].data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,0,nt,Pe[Ee].width,Pe[Ee].height,0,Qe,Je,Pe[Ee].data);for(let Ke=0;Ke<Fe.length;Ke++){const zt=Fe[Ke].image[Ee].image;W?ye&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,Ke+1,0,0,zt.width,zt.height,Qe,Je,zt.data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,Ke+1,nt,zt.width,zt.height,0,Qe,Je,zt.data)}}else{W?ye&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,0,0,0,Qe,Je,Pe[Ee]):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,0,nt,Qe,Je,Pe[Ee]);for(let Ke=0;Ke<Fe.length;Ke++){const je=Fe[Ke];W?ye&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,Ke+1,0,0,Qe,Je,je.image[Ee]):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,Ke+1,nt,Qe,Je,je.image[Ee])}}}_(E)&&U(r.TEXTURE_CUBE_MAP),Ae.__version=me.version,E.onUpdate&&E.onUpdate(E)}P.__version=E.version}function Ge(P,E,K,ce,me,Ae){const De=c.convert(K.format,K.colorSpace),ge=c.convert(K.type),xe=N(K.internalFormat,De,ge,K.normalized,K.colorSpace),we=a.get(E),Ve=a.get(K);if(Ve.__renderTarget=E,!we.__hasExternalTextures){const Pe=Math.max(1,E.width>>Ae),Ue=Math.max(1,E.height>>Ae);me===r.TEXTURE_3D||me===r.TEXTURE_2D_ARRAY?i.texImage3D(me,Ae,xe,Pe,Ue,E.depth,0,De,ge,null):i.texImage2D(me,Ae,xe,Pe,Ue,0,De,ge,null)}i.bindFramebuffer(r.FRAMEBUFFER,P),sn(E)?p.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,ce,me,Ve.__webglTexture,0,jt(E)):(me===r.TEXTURE_2D||me>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&me<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,ce,me,Ve.__webglTexture,Ae),i.bindFramebuffer(r.FRAMEBUFFER,null)}function lt(P,E,K){if(r.bindRenderbuffer(r.RENDERBUFFER,P),E.depthBuffer){const ce=E.depthTexture,me=ce&&ce.isDepthTexture?ce.type:null,Ae=L(E.stencilBuffer,me),De=E.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;sn(E)?p.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,jt(E),Ae,E.width,E.height):K?r.renderbufferStorageMultisample(r.RENDERBUFFER,jt(E),Ae,E.width,E.height):r.renderbufferStorage(r.RENDERBUFFER,Ae,E.width,E.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,De,r.RENDERBUFFER,P)}else{const ce=E.textures;for(let me=0;me<ce.length;me++){const Ae=ce[me],De=c.convert(Ae.format,Ae.colorSpace),ge=c.convert(Ae.type),xe=N(Ae.internalFormat,De,ge,Ae.normalized,Ae.colorSpace);sn(E)?p.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,jt(E),xe,E.width,E.height):K?r.renderbufferStorageMultisample(r.RENDERBUFFER,jt(E),xe,E.width,E.height):r.renderbufferStorage(r.RENDERBUFFER,xe,E.width,E.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function nn(P,E,K){const ce=E.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(r.FRAMEBUFFER,P),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const me=a.get(E.depthTexture);if(me.__renderTarget=E,(!me.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),ce){if(me.__webglInit===void 0&&(me.__webglInit=!0,E.depthTexture.addEventListener("dispose",I)),me.__webglTexture===void 0){me.__webglTexture=r.createTexture(),i.bindTexture(r.TEXTURE_CUBE_MAP,me.__webglTexture),Oe(r.TEXTURE_CUBE_MAP,E.depthTexture);const we=c.convert(E.depthTexture.format),Ve=c.convert(E.depthTexture.type);let Pe;E.depthTexture.format===Ba?Pe=r.DEPTH_COMPONENT24:E.depthTexture.format===Zs&&(Pe=r.DEPTH24_STENCIL8);for(let Ue=0;Ue<6;Ue++)r.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ue,0,Pe,E.width,E.height,0,we,Ve,null)}}else J(E.depthTexture,0);const Ae=me.__webglTexture,De=jt(E),ge=ce?r.TEXTURE_CUBE_MAP_POSITIVE_X+K:r.TEXTURE_2D,xe=E.depthTexture.format===Zs?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;if(E.depthTexture.format===Ba)sn(E)?p.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,xe,ge,Ae,0,De):r.framebufferTexture2D(r.FRAMEBUFFER,xe,ge,Ae,0);else if(E.depthTexture.format===Zs)sn(E)?p.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,xe,ge,Ae,0,De):r.framebufferTexture2D(r.FRAMEBUFFER,xe,ge,Ae,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function at(P){const E=a.get(P),K=P.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==P.depthTexture){const ce=P.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),ce){const me=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,ce.removeEventListener("dispose",me)};ce.addEventListener("dispose",me),E.__depthDisposeCallback=me}E.__boundDepthTexture=ce}if(P.depthTexture&&!E.__autoAllocateDepthBuffer)if(K)for(let ce=0;ce<6;ce++)nn(E.__webglFramebuffer[ce],P,ce);else{const ce=P.texture.mipmaps;ce&&ce.length>0?nn(E.__webglFramebuffer[0],P,0):nn(E.__webglFramebuffer,P,0)}else if(K){E.__webglDepthbuffer=[];for(let ce=0;ce<6;ce++)if(i.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer[ce]),E.__webglDepthbuffer[ce]===void 0)E.__webglDepthbuffer[ce]=r.createRenderbuffer(),lt(E.__webglDepthbuffer[ce],P,!1);else{const me=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Ae=E.__webglDepthbuffer[ce];r.bindRenderbuffer(r.RENDERBUFFER,Ae),r.framebufferRenderbuffer(r.FRAMEBUFFER,me,r.RENDERBUFFER,Ae)}}else{const ce=P.texture.mipmaps;if(ce&&ce.length>0?i.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer[0]):i.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=r.createRenderbuffer(),lt(E.__webglDepthbuffer,P,!1);else{const me=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Ae=E.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,Ae),r.framebufferRenderbuffer(r.FRAMEBUFFER,me,r.RENDERBUFFER,Ae)}}i.bindFramebuffer(r.FRAMEBUFFER,null)}function _t(P,E,K){const ce=a.get(P);E!==void 0&&Ge(ce.__webglFramebuffer,P,P.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),K!==void 0&&at(P)}function Ot(P){const E=P.texture,K=a.get(P),ce=a.get(E);P.addEventListener("dispose",A);const me=P.textures,Ae=P.isWebGLCubeRenderTarget===!0,De=me.length>1;if(De||(ce.__webglTexture===void 0&&(ce.__webglTexture=r.createTexture()),ce.__version=E.version,f.memory.textures++),Ae){K.__webglFramebuffer=[];for(let ge=0;ge<6;ge++)if(E.mipmaps&&E.mipmaps.length>0){K.__webglFramebuffer[ge]=[];for(let xe=0;xe<E.mipmaps.length;xe++)K.__webglFramebuffer[ge][xe]=r.createFramebuffer()}else K.__webglFramebuffer[ge]=r.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){K.__webglFramebuffer=[];for(let ge=0;ge<E.mipmaps.length;ge++)K.__webglFramebuffer[ge]=r.createFramebuffer()}else K.__webglFramebuffer=r.createFramebuffer();if(De)for(let ge=0,xe=me.length;ge<xe;ge++){const we=a.get(me[ge]);we.__webglTexture===void 0&&(we.__webglTexture=r.createTexture(),f.memory.textures++)}if(P.samples>0&&sn(P)===!1){K.__webglMultisampledFramebuffer=r.createFramebuffer(),K.__webglColorRenderbuffer=[],i.bindFramebuffer(r.FRAMEBUFFER,K.__webglMultisampledFramebuffer);for(let ge=0;ge<me.length;ge++){const xe=me[ge];K.__webglColorRenderbuffer[ge]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,K.__webglColorRenderbuffer[ge]);const we=c.convert(xe.format,xe.colorSpace),Ve=c.convert(xe.type),Pe=N(xe.internalFormat,we,Ve,xe.normalized,xe.colorSpace,P.isXRRenderTarget===!0),Ue=jt(P);r.renderbufferStorageMultisample(r.RENDERBUFFER,Ue,Pe,P.width,P.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ge,r.RENDERBUFFER,K.__webglColorRenderbuffer[ge])}r.bindRenderbuffer(r.RENDERBUFFER,null),P.depthBuffer&&(K.__webglDepthRenderbuffer=r.createRenderbuffer(),lt(K.__webglDepthRenderbuffer,P,!0)),i.bindFramebuffer(r.FRAMEBUFFER,null)}}if(Ae){i.bindTexture(r.TEXTURE_CUBE_MAP,ce.__webglTexture),Oe(r.TEXTURE_CUBE_MAP,E);for(let ge=0;ge<6;ge++)if(E.mipmaps&&E.mipmaps.length>0)for(let xe=0;xe<E.mipmaps.length;xe++)Ge(K.__webglFramebuffer[ge][xe],P,E,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ge,xe);else Ge(K.__webglFramebuffer[ge],P,E,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0);_(E)&&U(r.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(De){for(let ge=0,xe=me.length;ge<xe;ge++){const we=me[ge],Ve=a.get(we);let Pe=r.TEXTURE_2D;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(Pe=P.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),i.bindTexture(Pe,Ve.__webglTexture),Oe(Pe,we),Ge(K.__webglFramebuffer,P,we,r.COLOR_ATTACHMENT0+ge,Pe,0),_(we)&&U(Pe)}i.unbindTexture()}else{let ge=r.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(ge=P.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),i.bindTexture(ge,ce.__webglTexture),Oe(ge,E),E.mipmaps&&E.mipmaps.length>0)for(let xe=0;xe<E.mipmaps.length;xe++)Ge(K.__webglFramebuffer[xe],P,E,r.COLOR_ATTACHMENT0,ge,xe);else Ge(K.__webglFramebuffer,P,E,r.COLOR_ATTACHMENT0,ge,0);_(E)&&U(ge),i.unbindTexture()}P.depthBuffer&&at(P)}function mt(P){const E=P.textures;for(let K=0,ce=E.length;K<ce;K++){const me=E[K];if(_(me)){const Ae=z(P),De=a.get(me).__webglTexture;i.bindTexture(Ae,De),U(Ae),i.unbindTexture()}}}const Xt=[],an=[];function Mn(P){if(P.samples>0){if(sn(P)===!1){const E=P.textures,K=P.width,ce=P.height;let me=r.COLOR_BUFFER_BIT;const Ae=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,De=a.get(P),ge=E.length>1;if(ge)for(let we=0;we<E.length;we++)i.bindFramebuffer(r.FRAMEBUFFER,De.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+we,r.RENDERBUFFER,null),i.bindFramebuffer(r.FRAMEBUFFER,De.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+we,r.TEXTURE_2D,null,0);i.bindFramebuffer(r.READ_FRAMEBUFFER,De.__webglMultisampledFramebuffer);const xe=P.texture.mipmaps;xe&&xe.length>0?i.bindFramebuffer(r.DRAW_FRAMEBUFFER,De.__webglFramebuffer[0]):i.bindFramebuffer(r.DRAW_FRAMEBUFFER,De.__webglFramebuffer);for(let we=0;we<E.length;we++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(me|=r.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(me|=r.STENCIL_BUFFER_BIT)),ge){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,De.__webglColorRenderbuffer[we]);const Ve=a.get(E[we]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Ve,0)}r.blitFramebuffer(0,0,K,ce,0,0,K,ce,me,r.NEAREST),m===!0&&(Xt.length=0,an.length=0,Xt.push(r.COLOR_ATTACHMENT0+we),P.depthBuffer&&P.storeMultisampledDepthBuffer===!1&&(Xt.push(Ae),an.push(Ae),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,an)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,Xt))}if(i.bindFramebuffer(r.READ_FRAMEBUFFER,null),i.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),ge)for(let we=0;we<E.length;we++){i.bindFramebuffer(r.FRAMEBUFFER,De.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+we,r.RENDERBUFFER,De.__webglColorRenderbuffer[we]);const Ve=a.get(E[we]).__webglTexture;i.bindFramebuffer(r.FRAMEBUFFER,De.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+we,r.TEXTURE_2D,Ve,0)}i.bindFramebuffer(r.DRAW_FRAMEBUFFER,De.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.storeMultisampledDepthBuffer===!1&&m){const E=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[E])}}}function jt(P){return Math.min(l.maxSamples,P.samples)}function sn(P){const E=a.get(P);return P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function j(P){const E=f.render.frame;g.get(P)!==E&&(g.set(P,E),P.update())}function Pt(P,E){const K=P.colorSpace,ce=P.format,me=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||K!==Lu&&K!==_s&&(Et.getTransfer(K)===Ft?(ce!==Fi||me!==Ri)&&it("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):wt("WebGLTextures: Unsupported texture color space:",K)),E}function Dt(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(h.width=P.naturalWidth||P.width,h.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(h.width=P.displayWidth,h.height=P.displayHeight):(h.width=P.width,h.height=P.height),h}this.allocateTextureUnit=H,this.resetTextureUnits=fe,this.getTextureUnits=Y,this.setTextureUnits=te,this.setTexture2D=J,this.setTexture2DArray=$,this.setTexture3D=he,this.setTextureCube=D,this.rebindTextures=_t,this.setupRenderTarget=Ot,this.updateRenderTargetMipmap=mt,this.updateMultisampleRenderTarget=Mn,this.setupDepthRenderbuffer=at,this.setupFrameBufferTexture=Ge,this.useMultisampledRTT=sn,this.isReversedDepthBuffer=function(){return i.buffers.depth.getReversed()}}function nw(r,e){function i(a,l=_s){let c;const f=Et.getTransfer(l);if(a===Ri)return r.UNSIGNED_BYTE;if(a===tm)return r.UNSIGNED_SHORT_4_4_4_4;if(a===nm)return r.UNSIGNED_SHORT_5_5_5_1;if(a===Q_)return r.UNSIGNED_INT_5_9_9_9_REV;if(a===J_)return r.UNSIGNED_INT_10F_11F_11F_REV;if(a===Z_)return r.BYTE;if(a===K_)return r.SHORT;if(a===El)return r.UNSIGNED_SHORT;if(a===em)return r.INT;if(a===na)return r.UNSIGNED_INT;if(a===$i)return r.FLOAT;if(a===ia)return r.HALF_FLOAT;if(a===$_)return r.ALPHA;if(a===eS)return r.RGB;if(a===Fi)return r.RGBA;if(a===Ba)return r.DEPTH_COMPONENT;if(a===Zs)return r.DEPTH_STENCIL;if(a===tS)return r.RED;if(a===im)return r.RED_INTEGER;if(a===$s)return r.RG;if(a===am)return r.RG_INTEGER;if(a===sm)return r.RGBA_INTEGER;if(a===Eu||a===Tu||a===Au||a===Ru)if(f===Ft)if(c=e.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(a===Eu)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(a===Tu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(a===Au)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(a===Ru)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=e.get("WEBGL_compressed_texture_s3tc"),c!==null){if(a===Eu)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(a===Tu)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(a===Au)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(a===Ru)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(a===sp||a===rp||a===op||a===lp)if(c=e.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(a===sp)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(a===rp)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(a===op)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(a===lp)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(a===cp||a===up||a===fp||a===dp||a===hp||a===Du||a===pp)if(c=e.get("WEBGL_compressed_texture_etc"),c!==null){if(a===cp||a===up)return f===Ft?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(a===fp)return f===Ft?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC;if(a===dp)return c.COMPRESSED_R11_EAC;if(a===hp)return c.COMPRESSED_SIGNED_R11_EAC;if(a===Du)return c.COMPRESSED_RG11_EAC;if(a===pp)return c.COMPRESSED_SIGNED_RG11_EAC}else return null;if(a===mp||a===gp||a===xp||a===vp||a===_p||a===Sp||a===yp||a===bp||a===Mp||a===Ep||a===Tp||a===Ap||a===Rp||a===wp)if(c=e.get("WEBGL_compressed_texture_astc"),c!==null){if(a===mp)return f===Ft?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(a===gp)return f===Ft?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(a===xp)return f===Ft?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(a===vp)return f===Ft?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(a===_p)return f===Ft?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(a===Sp)return f===Ft?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(a===yp)return f===Ft?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(a===bp)return f===Ft?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(a===Mp)return f===Ft?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(a===Ep)return f===Ft?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(a===Tp)return f===Ft?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(a===Ap)return f===Ft?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(a===Rp)return f===Ft?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(a===wp)return f===Ft?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(a===Cp||a===Np||a===Dp)if(c=e.get("EXT_texture_compression_bptc"),c!==null){if(a===Cp)return f===Ft?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(a===Np)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(a===Dp)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(a===Up||a===Lp||a===Uu||a===Op)if(c=e.get("EXT_texture_compression_rgtc"),c!==null){if(a===Up)return c.COMPRESSED_RED_RGTC1_EXT;if(a===Lp)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(a===Uu)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(a===Op)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return a===Tl?r.UNSIGNED_INT_24_8:r[a]!==void 0?r[a]:null}return{convert:i}}const iw=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,aw=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class sw{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,i){if(this.texture===null){const a=new xS(e.texture);(e.depthNear!==i.depthNear||e.depthFar!==i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=a}}getMesh(e){if(this.texture!==null&&this.mesh===null){const i=e.cameras[0].viewport,a=new aa({vertexShader:iw,fragmentShader:aw,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new Fa(new ju(20,20),a)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class rw extends tr{constructor(e,i){super();const a=this;let l=null,c=1,f=null,p="local-floor",m=1,h=null,g=null,v=null,x=null,b=null,T=null;const C=typeof XRWebGLBinding<"u",y=new sw,_={},U=i.getContextAttributes();let z=null,N=null;const L=[],O=[],I=new gt;let A=null,B=null;const X=new Ai;X.viewport=new ln;const q=new Ai;q.viewport=new ln;const Q=[X,q],fe=new pT;let Y=null,te=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(oe){let _e=L[oe];return _e===void 0&&(_e=new Mh,L[oe]=_e),_e.getTargetRaySpace()},this.getControllerGrip=function(oe){let _e=L[oe];return _e===void 0&&(_e=new Mh,L[oe]=_e),_e.getGripSpace()},this.getHand=function(oe){let _e=L[oe];return _e===void 0&&(_e=new Mh,L[oe]=_e),_e.getHandSpace()};function H(oe){const _e=O.indexOf(oe.inputSource);if(_e===-1)return;const Re=L[_e];Re!==void 0&&(Re.update(oe.inputSource,oe.frame,h||f),Re.dispatchEvent({type:oe.type,data:oe.inputSource}))}function F(){l.removeEventListener("select",H),l.removeEventListener("selectstart",H),l.removeEventListener("selectend",H),l.removeEventListener("squeeze",H),l.removeEventListener("squeezestart",H),l.removeEventListener("squeezeend",H),l.removeEventListener("end",F),l.removeEventListener("inputsourceschange",J);for(let oe=0;oe<L.length;oe++){const _e=O[oe];_e!==null&&(O[oe]=null,L[oe].disconnect(_e))}Y=null,te=null,y.reset();for(const oe in _)delete _[oe];if(e.setRenderTarget(z),b=null,x=null,v=null,l=null,N=null,Xe.stop(),a.isPresenting=!1,e.setPixelRatio(A),e.setSize(I.width,I.height,!1),B!==null){const oe=B.camera;oe.fov=B.fov,oe.zoom=B.zoom,oe.updateProjectionMatrix(),B=null}a.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(oe){c=oe,a.isPresenting===!0&&it("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(oe){p=oe,a.isPresenting===!0&&it("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||f},this.setReferenceSpace=function(oe){h=oe},this.getBaseLayer=function(){return x!==null?x:b},this.getBinding=function(){return v===null&&C&&(v=new XRWebGLBinding(l,i)),v},this.getFrame=function(){return T},this.getSession=function(){return l},this.setSession=async function(oe){if(l=oe,l!==null){if(z=e.getRenderTarget(),l.addEventListener("select",H),l.addEventListener("selectstart",H),l.addEventListener("selectend",H),l.addEventListener("squeeze",H),l.addEventListener("squeezestart",H),l.addEventListener("squeezeend",H),l.addEventListener("end",F),l.addEventListener("inputsourceschange",J),U.xrCompatible!==!0&&await i.makeXRCompatible(),A=e.getPixelRatio(),e.getSize(I),C&&"createProjectionLayer"in XRWebGLBinding.prototype){let Re=null,tt=null,Ge=null;U.depth&&(Ge=U.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,Re=U.stencil?Zs:Ba,tt=U.stencil?Tl:na);const lt={colorFormat:i.RGBA8,depthFormat:Ge,scaleFactor:c};v=this.getBinding(),x=v.createProjectionLayer(lt),l.updateRenderState({layers:[x]}),e.setPixelRatio(1),e.setSize(x.textureWidth,x.textureHeight,!1),N=new Hi(x.textureWidth,x.textureHeight,{format:Fi,type:Ri,depthTexture:new Al(x.textureWidth,x.textureHeight,tt,void 0,void 0,void 0,void 0,void 0,void 0,Re),stencilBuffer:U.stencil,colorSpace:e.outputColorSpace,samples:U.antialias?4:0,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1,storeMultisampledDepthBuffer:x.ignoreDepthValues===!1,storeMultisampledStencilBuffer:x.ignoreDepthValues===!1})}else{const Re={antialias:U.antialias,alpha:!0,depth:U.depth,stencil:U.stencil,framebufferScaleFactor:c};b=new XRWebGLLayer(l,i,Re),l.updateRenderState({baseLayer:b}),e.setPixelRatio(1),e.setSize(b.framebufferWidth,b.framebufferHeight,!1),N=new Hi(b.framebufferWidth,b.framebufferHeight,{format:Fi,type:Ri,colorSpace:e.outputColorSpace,stencilBuffer:U.stencil,resolveDepthBuffer:b.ignoreDepthValues===!1,resolveStencilBuffer:b.ignoreDepthValues===!1,storeMultisampledDepthBuffer:b.ignoreDepthValues===!1,storeMultisampledStencilBuffer:b.ignoreDepthValues===!1})}N.isXRRenderTarget=!0,this.setFoveation(m),h=null,f=await l.requestReferenceSpace(p),Xe.setContext(l),Xe.start(),a.isPresenting=!0,a.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function J(oe){for(let _e=0;_e<oe.removed.length;_e++){const Re=oe.removed[_e],tt=O.indexOf(Re);tt>=0&&(O[tt]=null,L[tt].disconnect(Re))}for(let _e=0;_e<oe.added.length;_e++){const Re=oe.added[_e];let tt=O.indexOf(Re);if(tt===-1){for(let lt=0;lt<L.length;lt++)if(lt>=O.length){O.push(Re),tt=lt;break}else if(O[lt]===null){O[lt]=Re,tt=lt;break}if(tt===-1)break}const Ge=L[tt];Ge&&Ge.connect(Re)}}const $=new se,he=new se;function D(oe,_e,Re){$.setFromMatrixPosition(_e.matrixWorld),he.setFromMatrixPosition(Re.matrixWorld);const tt=$.distanceTo(he),Ge=_e.projectionMatrix.elements,lt=Re.projectionMatrix.elements,nn=Ge[14]/(Ge[10]-1),at=Ge[14]/(Ge[10]+1),_t=(Ge[9]+1)/Ge[5],Ot=(Ge[9]-1)/Ge[5],mt=(Ge[8]-1)/Ge[0],Xt=(lt[8]+1)/lt[0],an=nn*mt,Mn=nn*Xt,jt=tt/(-mt+Xt),sn=jt*-mt;if(_e.matrixWorld.decompose(oe.position,oe.quaternion,oe.scale),oe.translateX(sn),oe.translateZ(jt),oe.matrixWorld.compose(oe.position,oe.quaternion,oe.scale),oe.matrixWorldInverse.copy(oe.matrixWorld).invert(),Ge[10]===-1)oe.projectionMatrix.copy(_e.projectionMatrix),oe.projectionMatrixInverse.copy(_e.projectionMatrixInverse);else{const j=nn+jt,Pt=at+jt,Dt=an-sn,P=Mn+(tt-sn),E=_t*at/Pt*j,K=Ot*at/Pt*j;oe.projectionMatrix.makePerspective(Dt,P,E,K,j,Pt),oe.projectionMatrixInverse.copy(oe.projectionMatrix).invert()}}function ne(oe,_e){_e===null?oe.matrixWorld.copy(oe.matrix):oe.matrixWorld.multiplyMatrices(_e.matrixWorld,oe.matrix),oe.matrixWorldInverse.copy(oe.matrixWorld).invert()}this.updateCamera=function(oe){if(l===null)return;let _e=oe.near,Re=oe.far;y.texture!==null&&(y.depthNear>0&&(_e=y.depthNear),y.depthFar>0&&(Re=y.depthFar)),fe.near=q.near=X.near=_e,fe.far=q.far=X.far=Re,(Y!==fe.near||te!==fe.far)&&(l.updateRenderState({depthNear:fe.near,depthFar:fe.far}),Y=fe.near,te=fe.far),fe.layers.mask=oe.layers.mask|6,X.layers.mask=fe.layers.mask&-5,q.layers.mask=fe.layers.mask&-3;const tt=oe.parent,Ge=fe.cameras;ne(fe,tt);for(let lt=0;lt<Ge.length;lt++)ne(Ge[lt],tt);Ge.length===2?D(fe,X,q):fe.projectionMatrix.copy(X.projectionMatrix),B===null&&oe.isPerspectiveCamera&&(B={camera:oe,fov:oe.fov,zoom:oe.zoom}),ve(oe,fe,tt)};function ve(oe,_e,Re){Re===null?oe.matrix.copy(_e.matrixWorld):(oe.matrix.copy(Re.matrixWorld),oe.matrix.invert(),oe.matrix.multiply(_e.matrixWorld)),oe.matrix.decompose(oe.position,oe.quaternion,oe.scale),oe.updateMatrixWorld(!0),oe.projectionMatrix.copy(_e.projectionMatrix),oe.projectionMatrixInverse.copy(_e.projectionMatrixInverse),oe.isPerspectiveCamera&&(oe.fov=Pp*2*Math.atan(1/oe.projectionMatrix.elements[5]),oe.zoom=1)}this.getCamera=function(){return fe},this.getFoveation=function(){if(!(x===null&&b===null))return m},this.setFoveation=function(oe){m=oe,x!==null&&(x.fixedFoveation=oe),b!==null&&b.fixedFoveation!==void 0&&(b.fixedFoveation=oe)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(fe)},this.getCameraTexture=function(oe){return _[oe]};let Te=null;function Oe(oe,_e){if(g=_e.getViewerPose(h||f),T=_e,g!==null){const Re=g.views;b!==null&&(e.setRenderTargetFramebuffer(N,b.framebuffer),e.setRenderTarget(N));let tt=!1;Re.length!==fe.cameras.length&&(fe.cameras.length=0,tt=!0);for(let at=0;at<Re.length;at++){const _t=Re[at];let Ot=null;if(b!==null)Ot=b.getViewport(_t);else{const Xt=v.getViewSubImage(x,_t);Ot=Xt.viewport,at===0&&(e.setRenderTargetTextures(N,Xt.colorTexture,Xt.depthStencilTexture),e.setRenderTarget(N))}let mt=Q[at];mt===void 0&&(mt=new Ai,mt.layers.enable(at),mt.viewport=new ln,Q[at]=mt),mt.matrix.fromArray(_t.transform.matrix),mt.matrix.decompose(mt.position,mt.quaternion,mt.scale),mt.projectionMatrix.fromArray(_t.projectionMatrix),mt.projectionMatrixInverse.copy(mt.projectionMatrix).invert(),mt.viewport.set(Ot.x,Ot.y,Ot.width,Ot.height),at===0&&(fe.matrix.copy(mt.matrix),fe.matrix.decompose(fe.position,fe.quaternion,fe.scale)),tt===!0&&fe.cameras.push(mt)}const Ge=l.enabledFeatures;if(Ge&&Ge.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&C){v=a.getBinding();const at=v.getDepthInformation(Re[0]);at&&at.isValid&&at.texture&&y.init(at,l.renderState)}if(Ge&&Ge.includes("camera-access")&&C){e.state.unbindTexture(),v=a.getBinding();for(let at=0;at<Re.length;at++){const _t=Re[at].camera;if(_t){let Ot=_[_t];Ot||(Ot=new xS,_[_t]=Ot);const mt=v.getCameraImage(_t);Ot.sourceTexture=mt}}}}for(let Re=0;Re<L.length;Re++){const tt=O[Re],Ge=L[Re];tt!==null&&Ge!==void 0&&Ge.update(tt,_e,h||f)}Te&&Te(oe,_e),_e.detectedPlanes&&a.dispatchEvent({type:"planesdetected",data:_e}),T=null}const Xe=new yS;Xe.setAnimationLoop(Oe),this.setAnimationLoop=function(oe){Te=oe},this.dispose=function(){}}}const ow=new tn,wS=new rt;wS.set(-1,0,0,0,1,0,0,0,1);function lw(r,e){function i(y,_){y.matrixAutoUpdate===!0&&y.updateMatrix(),_.value.copy(y.matrix)}function a(y,_){_.color.getRGB(y.fogColor.value,vS(r)),_.isFog?(y.fogNear.value=_.near,y.fogFar.value=_.far):_.isFogExp2&&(y.fogDensity.value=_.density)}function l(y,_,U,z,N){_.isNodeMaterial?_.uniformsNeedUpdate=!1:_.isMeshBasicMaterial?c(y,_):_.isMeshLambertMaterial?(c(y,_),_.envMap&&(y.envMapIntensity.value=_.envMapIntensity)):_.isMeshToonMaterial?(c(y,_),v(y,_)):_.isMeshPhongMaterial?(c(y,_),g(y,_),_.envMap&&(y.envMapIntensity.value=_.envMapIntensity)):_.isMeshStandardMaterial?(c(y,_),x(y,_),_.isMeshPhysicalMaterial&&b(y,_,N)):_.isMeshMatcapMaterial?(c(y,_),T(y,_)):_.isMeshDepthMaterial?c(y,_):_.isMeshDistanceMaterial?(c(y,_),C(y,_)):_.isMeshNormalMaterial?c(y,_):_.isLineBasicMaterial?(f(y,_),_.isLineDashedMaterial&&p(y,_)):_.isPointsMaterial?m(y,_,U,z):_.isSpriteMaterial?h(y,_):_.isShadowMaterial?(y.color.value.copy(_.color),y.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function c(y,_){y.opacity.value=_.opacity,_.color&&y.diffuse.value.copy(_.color),_.emissive&&y.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(y.map.value=_.map,i(_.map,y.mapTransform)),_.alphaMap&&(y.alphaMap.value=_.alphaMap,i(_.alphaMap,y.alphaMapTransform)),_.bumpMap&&(y.bumpMap.value=_.bumpMap,i(_.bumpMap,y.bumpMapTransform),y.bumpScale.value=_.bumpScale,_.side===Jn&&(y.bumpScale.value*=-1)),_.normalMap&&(y.normalMap.value=_.normalMap,i(_.normalMap,y.normalMapTransform),y.normalScale.value.copy(_.normalScale),_.side===Jn&&y.normalScale.value.negate()),_.displacementMap&&(y.displacementMap.value=_.displacementMap,i(_.displacementMap,y.displacementMapTransform),y.displacementScale.value=_.displacementScale,y.displacementBias.value=_.displacementBias),_.emissiveMap&&(y.emissiveMap.value=_.emissiveMap,i(_.emissiveMap,y.emissiveMapTransform)),_.specularMap&&(y.specularMap.value=_.specularMap,i(_.specularMap,y.specularMapTransform)),_.alphaTest>0&&(y.alphaTest.value=_.alphaTest);const U=e.get(_),z=U.envMap,N=U.envMapRotation;z&&(y.envMap.value=z,y.envMapRotation.value.setFromMatrix4(ow.makeRotationFromEuler(N)).transpose(),z.isCubeTexture&&z.isRenderTargetTexture===!1&&y.envMapRotation.value.premultiply(wS),y.reflectivity.value=_.reflectivity,y.ior.value=_.ior,y.refractionRatio.value=_.refractionRatio),_.lightMap&&(y.lightMap.value=_.lightMap,y.lightMapIntensity.value=_.lightMapIntensity,i(_.lightMap,y.lightMapTransform)),_.aoMap&&(y.aoMap.value=_.aoMap,y.aoMapIntensity.value=_.aoMapIntensity,i(_.aoMap,y.aoMapTransform))}function f(y,_){y.diffuse.value.copy(_.color),y.opacity.value=_.opacity,_.map&&(y.map.value=_.map,i(_.map,y.mapTransform))}function p(y,_){y.dashSize.value=_.dashSize,y.totalSize.value=_.dashSize+_.gapSize,y.scale.value=_.scale}function m(y,_,U,z){y.diffuse.value.copy(_.color),y.opacity.value=_.opacity,y.size.value=_.size*U,y.scale.value=z*.5,_.map&&(y.map.value=_.map,i(_.map,y.uvTransform)),_.alphaMap&&(y.alphaMap.value=_.alphaMap,i(_.alphaMap,y.alphaMapTransform)),_.alphaTest>0&&(y.alphaTest.value=_.alphaTest)}function h(y,_){y.diffuse.value.copy(_.color),y.opacity.value=_.opacity,y.rotation.value=_.rotation,_.map&&(y.map.value=_.map,i(_.map,y.mapTransform)),_.alphaMap&&(y.alphaMap.value=_.alphaMap,i(_.alphaMap,y.alphaMapTransform)),_.alphaTest>0&&(y.alphaTest.value=_.alphaTest)}function g(y,_){y.specular.value.copy(_.specular),y.shininess.value=Math.max(_.shininess,1e-4)}function v(y,_){_.gradientMap&&(y.gradientMap.value=_.gradientMap)}function x(y,_){y.metalness.value=_.metalness,_.metalnessMap&&(y.metalnessMap.value=_.metalnessMap,i(_.metalnessMap,y.metalnessMapTransform)),y.roughness.value=_.roughness,_.roughnessMap&&(y.roughnessMap.value=_.roughnessMap,i(_.roughnessMap,y.roughnessMapTransform)),_.envMap&&(y.envMapIntensity.value=_.envMapIntensity)}function b(y,_,U){y.ior.value=_.ior,_.sheen>0&&(y.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),y.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(y.sheenColorMap.value=_.sheenColorMap,i(_.sheenColorMap,y.sheenColorMapTransform)),_.sheenRoughnessMap&&(y.sheenRoughnessMap.value=_.sheenRoughnessMap,i(_.sheenRoughnessMap,y.sheenRoughnessMapTransform))),_.clearcoat>0&&(y.clearcoat.value=_.clearcoat,y.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(y.clearcoatMap.value=_.clearcoatMap,i(_.clearcoatMap,y.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,i(_.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(y.clearcoatNormalMap.value=_.clearcoatNormalMap,i(_.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===Jn&&y.clearcoatNormalScale.value.negate())),_.dispersion>0&&(y.dispersion.value=_.dispersion),_.retroreflectivity>0&&(y.retroreflectivity.value=_.retroreflectivity),_.iridescence>0&&(y.iridescence.value=_.iridescence,y.iridescenceIOR.value=_.iridescenceIOR,y.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(y.iridescenceMap.value=_.iridescenceMap,i(_.iridescenceMap,y.iridescenceMapTransform)),_.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=_.iridescenceThicknessMap,i(_.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),_.transmission>0&&(y.transmission.value=_.transmission,y.transmissionSamplerMap.value=U.texture,y.transmissionSamplerSize.value.set(U.width,U.height),_.transmissionMap&&(y.transmissionMap.value=_.transmissionMap,i(_.transmissionMap,y.transmissionMapTransform)),y.thickness.value=_.thickness,_.thicknessMap&&(y.thicknessMap.value=_.thicknessMap,i(_.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=_.attenuationDistance,y.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(y.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(y.anisotropyMap.value=_.anisotropyMap,i(_.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=_.specularIntensity,y.specularColor.value.copy(_.specularColor),_.specularColorMap&&(y.specularColorMap.value=_.specularColorMap,i(_.specularColorMap,y.specularColorMapTransform)),_.specularIntensityMap&&(y.specularIntensityMap.value=_.specularIntensityMap,i(_.specularIntensityMap,y.specularIntensityMapTransform))}function T(y,_){_.matcap&&(y.matcap.value=_.matcap)}function C(y,_){const U=e.get(_).light;y.referencePosition.value.setFromMatrixPosition(U.matrixWorld),y.nearDistance.value=U.shadow.camera.near,y.farDistance.value=U.shadow.camera.far}return{refreshFogUniforms:a,refreshMaterialUniforms:l}}function cw(r,e,i,a){let l={},c={},f=[];const p=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function m(N,L){const O=L.program;a.uniformBlockBinding(N,O)}function h(N,L){let O=l[N.id];O===void 0&&(y(N),O=g(N),l[N.id]=O,N.addEventListener("dispose",U));const I=L.program;a.updateUBOMapping(N,I);const A=e.render.frame;c[N.id]!==A&&(x(N),c[N.id]=A)}function g(N){const L=v();N.__bindingPointIndex=L;const O=r.createBuffer(),I=N.__size,A=N.usage;return r.bindBuffer(r.UNIFORM_BUFFER,O),r.bufferData(r.UNIFORM_BUFFER,I,A),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,L,O),O}function v(){for(let N=0;N<p;N++)if(f.indexOf(N)===-1)return f.push(N),N;return wt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function x(N){const L=l[N.id],O=N.uniforms,I=N.__cache;r.bindBuffer(r.UNIFORM_BUFFER,L);for(let A=0,B=O.length;A<B;A++){const X=O[A];if(Array.isArray(X))for(let q=0,Q=X.length;q<Q;q++)b(X[q],A,q,I);else b(X,A,0,I)}r.bindBuffer(r.UNIFORM_BUFFER,null)}function b(N,L,O,I){if(C(N,L,O,I)===!0){const A=N.__offset,B=N.value;if(Array.isArray(B)){let X=0;for(let q=0;q<B.length;q++){const Q=B[q],fe=_(Q);T(Q,N.__data,X),typeof Q!="number"&&typeof Q!="boolean"&&!Q.isMatrix3&&!ArrayBuffer.isView(Q)&&(X+=fe.storage/Float32Array.BYTES_PER_ELEMENT)}}else T(B,N.__data,0);r.bufferSubData(r.UNIFORM_BUFFER,A,N.__data)}}function T(N,L,O){typeof N=="number"||typeof N=="boolean"?L[0]=N:N.isMatrix3?(L[0]=N.elements[0],L[1]=N.elements[1],L[2]=N.elements[2],L[3]=0,L[4]=N.elements[3],L[5]=N.elements[4],L[6]=N.elements[5],L[7]=0,L[8]=N.elements[6],L[9]=N.elements[7],L[10]=N.elements[8],L[11]=0):ArrayBuffer.isView(N)?L.set(new N.constructor(N.buffer,N.byteOffset,L.length)):N.toArray(L,O)}function C(N,L,O,I){const A=N.value,B=L+"_"+O;if(I[B]===void 0)return typeof A=="number"||typeof A=="boolean"?I[B]=A:ArrayBuffer.isView(A)?I[B]=A.slice():I[B]=A.clone(),!0;{const X=I[B];if(typeof A=="number"||typeof A=="boolean"){if(X!==A)return I[B]=A,!0}else{if(ArrayBuffer.isView(A))return!0;if(X.equals(A)===!1)return X.copy(A),!0}}return!1}function y(N){const L=N.uniforms;let O=0;const I=16;for(let B=0,X=L.length;B<X;B++){const q=Array.isArray(L[B])?L[B]:[L[B]];for(let Q=0,fe=q.length;Q<fe;Q++){const Y=q[Q],te=Array.isArray(Y.value)?Y.value:[Y.value];for(let H=0,F=te.length;H<F;H++){const J=te[H],$=_(J),he=O%I,D=he%$.boundary,ne=he+D;O+=D,ne!==0&&I-ne<$.storage&&(O+=I-ne),Y.__data=new Float32Array($.storage/Float32Array.BYTES_PER_ELEMENT),Y.__offset=O,O+=$.storage}}}const A=O%I;return A>0&&(O+=I-A),N.__size=O,N.__cache={},this}function _(N){const L={boundary:0,storage:0};return typeof N=="number"||typeof N=="boolean"?(L.boundary=4,L.storage=4):N.isVector2?(L.boundary=8,L.storage=8):N.isVector3||N.isColor?(L.boundary=16,L.storage=12):N.isVector4?(L.boundary=16,L.storage=16):N.isMatrix3?(L.boundary=48,L.storage=48):N.isMatrix4?(L.boundary=64,L.storage=64):N.isTexture?it("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(N)?(L.boundary=16,L.storage=N.byteLength):it("WebGLRenderer: Unsupported uniform value type.",N),L}function U(N){const L=N.target;L.removeEventListener("dispose",U);const O=f.indexOf(L.__bindingPointIndex);f.splice(O,1),r.deleteBuffer(l[L.id]),delete l[L.id],delete c[L.id]}function z(){for(const N in l)r.deleteBuffer(l[N]);f=[],l={},c={}}return{bind:m,update:h,dispose:z}}const uw=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Ki=null;function fw(){return Ki===null&&(Ki=new tT(uw,16,16,$s,ia),Ki.name="DFG_LUT",Ki.minFilter=In,Ki.magFilter=In,Ki.wrapS=Ua,Ki.wrapT=Ua,Ki.generateMipmaps=!1,Ki.needsUpdate=!0),Ki}class dw{constructor(e={}){const{canvas:i=wE(),context:a=null,depth:l=!0,stencil:c=!1,alpha:f=!1,antialias:p=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:h=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:v=!1,reversedDepthBuffer:x=!1,outputBufferType:b=Ri}=e;this.isWebGLRenderer=!0;let T;if(a!==null){if(typeof WebGLRenderingContext<"u"&&a instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");T=a.getContextAttributes().alpha}else T=f;const C=b,y=new Set([sm,am,im]),_=new Set([Ri,na,El,Tl,tm,nm]),U=new Uint32Array(4),z=new Int32Array(4),N=new se;let L=null,O=null;const I=[],A=[];let B=null;this.domElement=i,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ta,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const X=this;let q=!1,Q=null,fe=null,Y=null,te=null;this._outputColorSpace=fi;let H=0,F=0,J=null,$=-1,he=null;const D=new ln,ne=new ln;let ve=null;const Te=new bt(0);let Oe=0,Xe=i.width,oe=i.height,_e=1,Re=null,tt=null;const Ge=new ln(0,0,Xe,oe),lt=new ln(0,0,Xe,oe);let nn=!1;const at=new dS;let _t=!1,Ot=!1;const mt=new tn,Xt=new se,an=new ln,Mn={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let jt=!1;function sn(){return J===null?_e:1}let j=a;function Pt(R,V){return i.getContext(R,V)}let Dt,P,E,K,ce,me,Ae,De,ge,xe,we,Ve,Pe,Ue,Qe,Je,nt,W,Ce,ye,Ne,Fe,Ee;try{const R={alpha:!0,depth:l,stencil:c,antialias:p,premultipliedAlpha:m,preserveDrawingBuffer:h,powerPreference:g,failIfMajorPerformanceCaveat:v};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${$p}`),i.addEventListener("webglcontextlost",zt,!1),i.addEventListener("webglcontextrestored",At,!1),i.addEventListener("webglcontextcreationerror",Wn,!1),j===null){const V="webgl2";if(j=Pt(V,R),j===null)throw Pt(V)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Ke()}catch(R){throw i.removeEventListener("webglcontextlost",zt,!1),i.removeEventListener("webglcontextrestored",At,!1),i.removeEventListener("webglcontextcreationerror",Wn,!1),wt("WebGLRenderer: "+R.message),R}function Ke(){Dt=new f2(j),Dt.init(),Ne=new nw(j,Dt),P=new t2(j,Dt,e,Ne),E=new ew(j,Dt),P.reversedDepthBuffer&&x&&E.buffers.depth.setReversed(!0),fe=j.createFramebuffer(),Y=j.createFramebuffer(),te=j.createFramebuffer(),K=new p2(j),ce=new HR,me=new tw(j,Dt,E,ce,P,Ne,K),Ae=new u2(X),De=new gT(j),Fe=new $3(j,De),ge=new d2(j,De,K,Fe),xe=new g2(j,ge,De,Fe,K),W=new m2(j,P,me),Qe=new n2(ce),we=new zR(X,Ae,Dt,P,Fe,Qe),Ve=new lw(X,ce),Pe=new VR,Ue=new YR(Dt),nt=new J3(X,Ae,E,xe,T,m),Je=new $R(X,xe,P),Ee=new cw(j,K,P,E),Ce=new e2(j,Dt,K),ye=new h2(j,Dt,K),K.programs=we.programs,X.capabilities=P,X.extensions=Dt,X.properties=ce,X.renderLists=Pe,X.shadowMap=Je,X.state=E,X.info=K}C!==Ri&&(B=new v2(C,i.width,i.height,p,l,c));const je=new rw(X,j);this.xr=je,this.getContext=function(){return j},this.getContextAttributes=function(){return j.getContextAttributes()},this.forceContextLoss=function(){const R=Dt.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=Dt.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return _e},this.setPixelRatio=function(R){R!==void 0&&(_e=R,this.setSize(Xe,oe,!1))},this.getSize=function(R){return R.set(Xe,oe)},this.setSize=function(R,V,de=!0){if(je.isPresenting){it("WebGLRenderer: Can't change size while VR device is presenting.");return}Xe=R,oe=V,i.width=Math.floor(R*_e),i.height=Math.floor(V*_e),de===!0&&(i.style.width=R+"px",i.style.height=V+"px"),B!==null&&B.setSize(i.width,i.height),this.setViewport(0,0,R,V)},this.getDrawingBufferSize=function(R){return R.set(Xe*_e,oe*_e).floor()},this.setDrawingBufferSize=function(R,V,de){Xe=R,oe=V,_e=de,i.width=Math.floor(R*de),i.height=Math.floor(V*de),this.setViewport(0,0,R,V)},this.setEffects=function(R){if(C===Ri){wt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(R){for(let V=0;V<R.length;V++)if(R[V].isOutputPass===!0){it("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}B.setEffects(R||[])},this.getCurrentViewport=function(R){return R.copy(D)},this.getViewport=function(R){return R.copy(Ge)},this.setViewport=function(R,V,de,ie){R.isVector4?Ge.set(R.x,R.y,R.z,R.w):Ge.set(R,V,de,ie),E.viewport(D.copy(Ge).multiplyScalar(_e).round())},this.getScissor=function(R){return R.copy(lt)},this.setScissor=function(R,V,de,ie){R.isVector4?lt.set(R.x,R.y,R.z,R.w):lt.set(R,V,de,ie),E.scissor(ne.copy(lt).multiplyScalar(_e).round())},this.getScissorTest=function(){return nn},this.setScissorTest=function(R){E.setScissorTest(nn=R)},this.setOpaqueSort=function(R){Re=R},this.setTransparentSort=function(R){tt=R},this.getClearColor=function(R){return R.copy(nt.getClearColor())},this.setClearColor=function(){nt.setClearColor(...arguments)},this.getClearAlpha=function(){return nt.getClearAlpha()},this.setClearAlpha=function(){nt.setClearAlpha(...arguments)},this.clear=function(R=!0,V=!0,de=!0){let ie=0;if(R){let ae=!1;if(J!==null){const Ie=J.texture.format;ae=y.has(Ie)}if(ae){const Ie=J.texture.type,ke=_.has(Ie),Le=nt.getClearColor(),ze=nt.getClearAlpha(),He=Le.r,ot=Le.g,pt=Le.b;ke?(U[0]=He,U[1]=ot,U[2]=pt,U[3]=ze,j.clearBufferuiv(j.COLOR,0,U)):(z[0]=He,z[1]=ot,z[2]=pt,z[3]=ze,j.clearBufferiv(j.COLOR,0,z))}else ie|=j.COLOR_BUFFER_BIT}V&&(ie|=j.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),de&&(ie|=j.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),ie!==0&&j.clear(ie)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(R){R.setRenderer(this),Q=R},this.dispose=function(){i.removeEventListener("webglcontextlost",zt,!1),i.removeEventListener("webglcontextrestored",At,!1),i.removeEventListener("webglcontextcreationerror",Wn,!1),nt.dispose(),Pe.dispose(),Ue.dispose(),ce.dispose(),Ae.dispose(),xe.dispose(),Fe.dispose(),Ee.dispose(),we.dispose(),je.dispose(),je.removeEventListener("sessionstart",fn),je.removeEventListener("sessionend",An),Xn.stop()};function zt(R){R.preventDefault(),Bu("WebGLRenderer: Context Lost."),q=!0}function At(){Bu("WebGLRenderer: Context Restored."),q=!1;const R=K.autoReset,V=Je.enabled,de=Je.autoUpdate,ie=Je.needsUpdate,ae=Je.type;Ke(),K.autoReset=R,Je.enabled=V,Je.autoUpdate=de,Je.needsUpdate=ie,Je.type=ae}function Wn(R){wt("WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function ei(R){const V=R.target;V.removeEventListener("dispose",ei),co(V)}function co(R){uo(R),ce.remove(R)}function uo(R){const V=ce.get(R).programs;V!==void 0&&(V.forEach(function(de){we.releaseProgram(de)}),R.isShaderMaterial&&we.releaseShaderCache(R))}this.renderBufferDirect=function(R,V,de,ie,ae,Ie){V===null&&(V=Mn);const ke=ae.isMesh&&ae.matrixWorld.determinantAffine()<0,Le=Ga(R,V,de,ie,ae);E.setMaterial(ie,ke);let ze=de.index,He=1;if(ie.wireframe===!0){if(ze=ge.getWireframeAttribute(de),ze===void 0)return;He=2}const ot=de.drawRange,pt=de.attributes.position;let qe=ot.start*He,Rt=(ot.start+ot.count)*He;Ie!==null&&(qe=Math.max(qe,Ie.start*He),Rt=Math.min(Rt,(Ie.start+Ie.count)*He)),ze!==null?(qe=Math.max(qe,0),Rt=Math.min(Rt,ze.count)):pt!=null&&(qe=Math.max(qe,0),Rt=Math.min(Rt,pt.count));const Zt=Rt-qe;if(Zt<0||Zt===1/0)return;Fe.setup(ae,ie,Le,de,ze);let qt,ft=Ce;if(ze!==null&&(qt=De.get(ze),ft=ye,ft.setIndex(qt)),ae.isMesh)ie.wireframe===!0?(E.setLineWidth(ie.wireframeLinewidth*sn()),ft.setMode(j.LINES)):ft.setMode(j.TRIANGLES);else if(ae.isLine){let hn=ie.linewidth;hn===void 0&&(hn=1),E.setLineWidth(hn*sn()),ae.isLineSegments?ft.setMode(j.LINES):ae.isLineLoop?ft.setMode(j.LINE_LOOP):ft.setMode(j.LINE_STRIP)}else ae.isPoints?ft.setMode(j.POINTS):ae.isSprite&&ft.setMode(j.TRIANGLES);if(ae.isBatchedMesh)if(Dt.get("WEBGL_multi_draw"))ft.renderMultiDraw(ae._multiDrawStarts,ae._multiDrawCounts,ae._multiDrawCount);else{const hn=ae._multiDrawStarts,We=ae._multiDrawCounts,_n=ae._multiDrawCount,dt=ze?De.get(ze).bytesPerElement:1,zn=ce.get(ie).currentProgram.getUniforms();for(let ti=0;ti<_n;ti++)zn.setValue(j,"_gl_DrawID",ti),ft.render(hn[ti]/dt,We[ti])}else if(ae.isInstancedMesh)ft.renderInstances(qe,Zt,ae.count);else if(de.isInstancedBufferGeometry){const hn=de._maxInstanceCount!==void 0?de._maxInstanceCount:1/0,We=Math.min(de.instanceCount,hn);ft.renderInstances(qe,Zt,We)}else ft.render(qe,Zt)};function fo(R,V,de,ie){Q!==null&&R.isNodeMaterial&&Q.setObject(ie,R),_t===!0&&Qe.setState(R,de,!1),R.transparent===!0&&R.side===Da&&R.forceSinglePass===!1?(R.side=Jn,R.needsUpdate=!0,Ha(R,V,ie),R.side=Qs,R.needsUpdate=!0,Ha(R,V,ie),R.side=Da):Ha(R,V,ie)}this.compile=function(R,V,de=null){de===null&&(de=R),Q!==null&&Q.renderStart(R,V,de),O=Ue.get(de),O.init(V),A.push(O),de.traverseVisible(function(ae){ae.isLight&&ae.layers.test(V.layers)&&(O.pushLight(ae),ae.castShadow&&O.pushShadow(ae))}),R!==de&&R.traverseVisible(function(ae){ae.isLight&&ae.layers.test(V.layers)&&(O.pushLight(ae),ae.castShadow&&O.pushShadow(ae))}),O.setupLights(),Q!==null&&Q.updateLights(O.state.lightsArray),Ot=this.localClippingEnabled,_t=Qe.init(this.clippingPlanes,Ot),_t===!0&&Qe.setGlobalState(this.clippingPlanes,V),Q!==null&&Je.render(O.state.shadowsArray,de,V);const ie=new Set;return R.traverse(function(ae){if(!(ae.isMesh||ae.isPoints||ae.isLine||ae.isSprite))return;const Ie=ae.material;if(Ie)if(Array.isArray(Ie))for(let ke=0;ke<Ie.length;ke++){const Le=Ie[ke];fo(Le,de,V,ae),ie.add(Le)}else fo(Ie,de,V,ae),ie.add(Ie)}),O=A.pop(),Q!==null&&Q.renderEnd(),ie},this.compileAsync=function(R,V,de=null){const ie=this.compile(R,V,de);return new Promise(ae=>{function Ie(){if(ie.forEach(function(ke){const ze=ce.get(ke).currentProgram;(ze===void 0||ze.isReady())&&ie.delete(ke)}),ie.size===0){ae(R);return}setTimeout(Ie,10)}Dt.get("KHR_parallel_shader_compile")!==null?Ie():setTimeout(Ie,10)})};let ir=null;function ki(R){ir&&ir(R)}function fn(){Xn.stop()}function An(){Xn.start()}const Xn=new yS;Xn.setAnimationLoop(ki),typeof self<"u"&&Xn.setContext(self),this.setAnimationLoop=function(R){ir=R,je.setAnimationLoop(R),R===null?Xn.stop():Xn.start()},je.addEventListener("sessionstart",fn),je.addEventListener("sessionend",An),this.render=function(R,V){if(V!==void 0&&V.isCamera!==!0){wt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(q===!0)return;Q!==null&&Q.renderStart(R,V);const de=je.enabled===!0&&je.isPresenting===!0,ie=B!==null&&(J===null||de)&&B.begin(X,J);if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),V.parent===null&&V.matrixWorldAutoUpdate===!0&&V.updateMatrixWorld(),je.enabled===!0&&je.isPresenting===!0&&(B===null||B.isCompositing()===!1)&&(je.cameraAutoUpdate===!0&&je.updateCamera(V),V=je.getCamera()),R.isScene===!0&&R.onBeforeRender(X,R,V,J),O=Ue.get(R,A.length),O.init(V),O.state.textureUnits=me.getTextureUnits(),A.push(O),mt.multiplyMatrices(V.projectionMatrix,V.matrixWorldInverse),at.setFromProjectionMatrix(mt,ea,V.reversedDepth),Ot=this.localClippingEnabled,_t=Qe.init(this.clippingPlanes,Ot),L=Pe.get(R,I.length),L.init(),I.push(L),je.enabled===!0&&je.isPresenting===!0){const ke=X.xr.getDepthSensingMesh();ke!==null&&bs(ke,V,-1/0,X.sortObjects)}bs(R,V,0,X.sortObjects),L.finish(),Q!==null&&Q.updateLights(O.state.lightsArray),X.sortObjects===!0&&L.sort(Re,tt),jt=je.enabled===!1||je.isPresenting===!1||je.hasDepthSensing()===!1,jt&&nt.addToRenderList(L,R),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),_t===!0&&Qe.beginShadows();const ae=O.state.shadowsArray;if(Je.render(ae,R,V),_t===!0&&Qe.endShadows(),(ie&&B.hasRenderPass())===!1){const ke=L.opaque,Le=L.transmissive;if(O.setupLights(),V.isArrayCamera){const ze=V.cameras;if(Le.length>0)for(let He=0,ot=ze.length;He<ot;He++){const pt=ze[He];Ll(ke,Le,R,pt)}jt&&nt.render(R);for(let He=0,ot=ze.length;He<ot;He++){const pt=ze[He];Ul(L,R,pt,pt.viewport)}}else Le.length>0&&Ll(ke,Le,R,V),jt&&nt.render(R),Ul(L,R,V)}J!==null&&F===0&&(me.updateMultisampleRenderTarget(J),me.updateRenderTargetMipmap(J)),ie&&B.end(X),R.isScene===!0&&R.onAfterRender(X,R,V),Fe.resetDefaultState(),$=-1,he=null,A.pop(),A.length>0?(O=A[A.length-1],me.setTextureUnits(O.state.textureUnits),_t===!0&&Qe.setGlobalState(X.clippingPlanes,O.state.camera)):O=null,I.pop(),I.length>0?L=I[I.length-1]:L=null,Q!==null&&Q.renderEnd()};function bs(R,V,de,ie){if(R.visible===!1)return;if(R.layers.test(V.layers)){if(R.isGroup)de=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(V);else if(R.isLightProbeGrid)O.pushLightProbeGrid(R);else if(R.isLight)O.pushLight(R),R.castShadow&&O.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||R.intersectsFrustum(at)){ie&&an.setFromMatrixPosition(R.matrixWorld).applyMatrix4(mt);const ke=xe.update(R),Le=R.material;Le.visible&&L.push(R,ke,Le,de,an.z,null,V)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||R.intersectsFrustum(at))){const ke=xe.update(R),Le=R.material;if(ie&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),an.copy(R.boundingSphere.center)):(ke.boundingSphere===null&&ke.computeBoundingSphere(),an.copy(ke.boundingSphere.center)),an.applyMatrix4(R.matrixWorld).applyMatrix4(mt)),Array.isArray(Le)){const ze=ke.groups;for(let He=0,ot=ze.length;He<ot;He++){const pt=ze[He],qe=Le[pt.materialIndex];qe&&qe.visible&&L.push(R,ke,qe,de,an.z,pt,V)}}else Le.visible&&L.push(R,ke,Le,de,an.z,null,V)}}const Ie=R.children;for(let ke=0,Le=Ie.length;ke<Le;ke++)bs(Ie[ke],V,de,ie)}function Ul(R,V,de,ie){const{opaque:ae,transmissive:Ie,transparent:ke}=R;O.setupLightsView(de),_t===!0&&Qe.setGlobalState(X.clippingPlanes,de),ie&&E.viewport(D.copy(ie)),ae.length>0&&Ms(ae,V,de),Ie.length>0&&Ms(Ie,V,de),ke.length>0&&Ms(ke,V,de),E.buffers.depth.setTest(!0),E.buffers.depth.setMask(!0),E.buffers.color.setMask(!0),E.setPolygonOffset(!1)}function Ll(R,V,de,ie){if((de.isScene===!0?de.overrideMaterial:null)!==null)return;if(O.state.transmissionRenderTarget[ie.id]===void 0){const qe=Dt.has("EXT_color_buffer_half_float")||Dt.has("EXT_color_buffer_float");O.state.transmissionRenderTarget[ie.id]=new Hi(1,1,{generateMipmaps:!0,type:qe?ia:Ri,minFilter:Ys,samples:Math.max(4,P.samples),stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Et.workingColorSpace})}const Ie=O.state.transmissionRenderTarget[ie.id],ke=ie.viewport||D;Ie.setSize(ke.z*X.transmissionResolutionScale,ke.w*X.transmissionResolutionScale);const Le=X.getRenderTarget(),ze=X.getActiveCubeFace(),He=X.getActiveMipmapLevel();X.setRenderTarget(Ie),X.getClearColor(Te),Oe=X.getClearAlpha(),Oe<1&&X.setClearColor(16777215,.5),X.clear(),jt&&nt.render(de);const ot=X.toneMapping;X.toneMapping=ta;const pt=ie.viewport;if(ie.viewport!==void 0&&(ie.viewport=void 0),O.setupLightsView(ie),_t===!0&&Qe.setGlobalState(X.clippingPlanes,ie),Ms(R,de,ie),me.updateMultisampleRenderTarget(Ie),me.updateRenderTargetMipmap(Ie),Dt.has("WEBGL_multisampled_render_to_texture")===!1){let qe=!1;for(let Rt=0,Zt=V.length;Rt<Zt;Rt++){const qt=V[Rt],{object:ft,geometry:hn,material:We,group:_n}=qt;if(We.side===Da&&ft.layers.test(ie.layers)){const dt=We.side;We.side=Jn,We.needsUpdate=!0,za(ft,de,ie,hn,We,_n),We.side=dt,We.needsUpdate=!0,qe=!0}}qe===!0&&(me.updateMultisampleRenderTarget(Ie),me.updateRenderTargetMipmap(Ie))}X.setRenderTarget(Le,ze,He),X.setClearColor(Te,Oe),pt!==void 0&&(ie.viewport=pt),X.toneMapping=ot}function Ms(R,V,de){const ie=V.isScene===!0?V.overrideMaterial:null;for(let ae=0,Ie=R.length;ae<Ie;ae++){const ke=R[ae],{object:Le,geometry:ze,group:He}=ke;let ot=ke.material;ot.allowOverride===!0&&ie!==null&&(ot=ie),Le.layers.test(de.layers)&&za(Le,V,de,ze,ot,He)}}function za(R,V,de,ie,ae,Ie){Q!==null&&ae.isNodeMaterial&&Q.setObject(R,ae),R.onBeforeRender(X,V,de,ie,ae,Ie),R.modelViewMatrix.multiplyMatrices(de.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),ae.onBeforeRender(X,V,de,ie,R,Ie),ae.transparent===!0&&ae.side===Da&&ae.forceSinglePass===!1?(ae.side=Jn,ae.needsUpdate=!0,X.renderBufferDirect(de,V,ie,ae,R,Ie),ae.side=Qs,ae.needsUpdate=!0,X.renderBufferDirect(de,V,ie,ae,R,Ie),ae.side=Da):X.renderBufferDirect(de,V,ie,ae,R,Ie),R.onAfterRender(X,V,de,ie,ae,Ie)}function Ha(R,V,de){V.isScene!==!0&&(V=Mn);const ie=ce.get(R),ae=O.state.lights,Ie=O.state.shadowsArray,ke=ae.state.version,Le=we.getParameters(R,ae.state,Ie,V,de,O.state.lightProbeGridArray),ze=we.getProgramCacheKey(Le);let He=ie.programs;ie.environment=R.isMeshStandardMaterial||R.isMeshLambertMaterial||R.isMeshPhongMaterial?V.environment:null,ie.fog=V.fog;const ot=R.isMeshStandardMaterial||R.isMeshLambertMaterial&&!R.envMap||R.isMeshPhongMaterial&&!R.envMap;ie.envMap=Ae.get(R.envMap||ie.environment,ot),ie.envMapRotation=ie.environment!==null&&R.envMap===null?V.environmentRotation:R.envMapRotation,He===void 0&&(R.addEventListener("dispose",ei),He=new Map,ie.programs=He);let pt=He.get(ze);if(pt!==void 0){if(ie.currentProgram===pt&&ie.lightsStateVersion===ke)return oa(R,Le),pt}else Le.uniforms=we.getUniforms(R),Q!==null&&R.isNodeMaterial&&Q.build(R,de,Le),R.onBeforeCompile(Le,X),pt=we.acquireProgram(Le,ze),He.set(ze,pt),ie.uniforms=Le.uniforms;const qe=ie.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(qe.clippingPlanes=Qe.uniform),oa(R,Le),ie.needsLights=Ol(R),ie.lightsStateVersion=ke,ie.needsLights&&(qe.ambientLightColor.value=ae.state.ambient,qe.lightProbe.value=ae.state.probe,qe.sunLights.value=ae.state.sun,qe.sunLightShadows.value=ae.state.sunShadow,qe.directionalLights.value=ae.state.directional,qe.directionalLightShadows.value=ae.state.directionalShadow,qe.spotLights.value=ae.state.spot,qe.spotLightShadows.value=ae.state.spotShadow,qe.rectAreaLights.value=ae.state.rectArea,qe.ltc_1.value=ae.state.rectAreaLTC1,qe.ltc_2.value=ae.state.rectAreaLTC2,qe.pointLights.value=ae.state.point,qe.pointLightShadows.value=ae.state.pointShadow,qe.hemisphereLights.value=ae.state.hemi,qe.sunShadowMatrix.value=ae.state.sunShadowMatrix,qe.sunShadowCascade.value=ae.state.sunShadowCascade,qe.directionalShadowMatrix.value=ae.state.directionalShadowMatrix,qe.spotLightMatrix.value=ae.state.spotLightMatrix,qe.spotLightMap.value=ae.state.spotLightMap,qe.pointShadowMatrix.value=ae.state.pointShadowMatrix),ie.lightProbeGrid=O.state.lightProbeGridArray.length>0,ie.currentProgram=pt,ie.uniformsList=null,pt}function ra(R){if(R.uniformsList===null){const V=R.currentProgram.getUniforms();R.uniformsList=wu.seqWithValue(V.seq,R.uniforms)}return R.uniformsList}function oa(R,V){const de=ce.get(R);de.outputColorSpace=V.outputColorSpace,de.batching=V.batching,de.batchingColor=V.batchingColor,de.instancing=V.instancing,de.instancingColor=V.instancingColor,de.instancingMorph=V.instancingMorph,de.skinning=V.skinning,de.morphTargets=V.morphTargets,de.morphNormals=V.morphNormals,de.morphColors=V.morphColors,de.morphTargetsCount=V.morphTargetsCount,de.numClippingPlanes=V.numClippingPlanes,de.numIntersection=V.numClipIntersection,de.vertexAlphas=V.vertexAlphas,de.vertexTangents=V.vertexTangents,de.toneMapping=V.toneMapping}function Es(R,V){if(R.length===0)return null;if(R.length===1)return R[0].texture!==null?R[0]:null;N.setFromMatrixPosition(V.matrixWorld);for(let de=0,ie=R.length;de<ie;de++){const ae=R[de];if(ae.texture!==null&&ae.boundingBox.containsPoint(N))return ae}return null}function Ga(R,V,de,ie,ae){V.isScene!==!0&&(V=Mn),me.resetTextureUnits();const Ie=V.fog,ke=ie.isMeshStandardMaterial||ie.isMeshLambertMaterial||ie.isMeshPhongMaterial?V.environment:null,Le=J===null?X.outputColorSpace:J.isXRRenderTarget===!0?J.texture.colorSpace:Et.workingColorSpace,ze=ie.isMeshStandardMaterial||ie.isMeshLambertMaterial&&!ie.envMap||ie.isMeshPhongMaterial&&!ie.envMap,He=Ae.get(ie.envMap||ke,ze),ot=ie.vertexColors===!0&&!!de.attributes.color&&de.attributes.color.itemSize===4,pt=!!de.attributes.tangent&&(!!ie.normalMap||ie.anisotropy>0),qe=!!de.morphAttributes.position,Rt=!!de.morphAttributes.normal,Zt=!!de.morphAttributes.color;let qt=ta;ie.toneMapped&&(J===null||J.isXRRenderTarget===!0)&&(qt=X.toneMapping);const ft=de.morphAttributes.position||de.morphAttributes.normal||de.morphAttributes.color,hn=ft!==void 0?ft.length:0,We=ce.get(ie),_n=O.state.lights;if(_t===!0&&(Ot===!0||R!==he)){const Ht=R===he&&ie.id===$;Qe.setState(ie,R,Ht)}let dt=!1;ie.version===We.__version?(We.needsLights&&We.lightsStateVersion!==_n.state.version||We.outputColorSpace!==Le||ae.isBatchedMesh&&We.batching===!1||!ae.isBatchedMesh&&We.batching===!0||ae.isBatchedMesh&&We.batchingColor===!0&&ae._colorsTexture===null||ae.isBatchedMesh&&We.batchingColor===!1&&ae._colorsTexture!==null||ae.isInstancedMesh&&We.instancing===!1||!ae.isInstancedMesh&&We.instancing===!0||ae.isSkinnedMesh&&We.skinning===!1||!ae.isSkinnedMesh&&We.skinning===!0||ae.isInstancedMesh&&We.instancingColor===!0&&ae.instanceColor===null||ae.isInstancedMesh&&We.instancingColor===!1&&ae.instanceColor!==null||ae.isInstancedMesh&&We.instancingMorph===!0&&ae.morphTexture===null||ae.isInstancedMesh&&We.instancingMorph===!1&&ae.morphTexture!==null||We.envMap!==He||ie.fog===!0&&We.fog!==Ie||We.numClippingPlanes!==void 0&&(We.numClippingPlanes!==Qe.numPlanes||We.numIntersection!==Qe.numIntersection)||We.vertexAlphas!==ot||We.vertexTangents!==pt||We.morphTargets!==qe||We.morphNormals!==Rt||We.morphColors!==Zt||We.toneMapping!==qt||We.morphTargetsCount!==hn||!!We.lightProbeGrid!=O.state.lightProbeGridArray.length>0)&&(dt=!0):(dt=!0,We.__version=ie.version);let zn=We.currentProgram;dt===!0&&(zn=Ha(ie,V,ae),Q&&ie.isNodeMaterial&&Q.onUpdateProgram(ie,zn,We));let ti=!1,Hn=!1,Va=!1;const Ut=zn.getUniforms(),Jt=We.uniforms;if(E.useProgram(zn.program)&&(ti=!0,Hn=!0,Va=!0),ie.id!==$&&($=ie.id,Hn=!0),We.needsLights){const Ht=Es(O.state.lightProbeGridArray,ae);We.lightProbeGrid!==Ht&&(We.lightProbeGrid=Ht,Hn=!0)}if(ti||he!==R){E.buffers.depth.getReversed()&&R.reversedDepth!==!0&&(R._reversedDepth=!0,R.updateProjectionMatrix()),Ut.setValue(j,"projectionMatrix",R.projectionMatrix),Ut.setValue(j,"viewMatrix",R.matrixWorldInverse);const Wi=Ut.map.cameraPosition;Wi!==void 0&&Wi.setValue(j,Xt.setFromMatrixPosition(R.matrixWorld)),P.logarithmicDepthBuffer&&Ut.setValue(j,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(ie.isMeshPhongMaterial||ie.isMeshToonMaterial||ie.isMeshLambertMaterial||ie.isMeshBasicMaterial||ie.isMeshStandardMaterial||ie.isShaderMaterial)&&Ut.setValue(j,"isOrthographic",R.isOrthographicCamera===!0),he!==R&&(he=R,Hn=!0,Va=!0)}if(We.needsLights&&(_n.state.sunShadowMap.length>0&&Ut.setValue(j,"sunShadowMap",_n.state.sunShadowMap,me),_n.state.directionalShadowMap.length>0&&Ut.setValue(j,"directionalShadowMap",_n.state.directionalShadowMap,me),_n.state.spotShadowMap.length>0&&Ut.setValue(j,"spotShadowMap",_n.state.spotShadowMap,me),_n.state.pointShadowMap.length>0&&Ut.setValue(j,"pointShadowMap",_n.state.pointShadowMap,me)),ae.isSkinnedMesh){Ut.setOptional(j,ae,"bindMatrix"),Ut.setOptional(j,ae,"bindMatrixInverse");const Ht=ae.skeleton;Ht&&(Ht.boneTexture===null&&Ht.computeBoneTexture(),Ut.setValue(j,"boneTexture",Ht.boneTexture,me))}ae.isBatchedMesh&&(Ut.setOptional(j,ae,"batchingTexture"),Ut.setValue(j,"batchingTexture",ae._matricesTexture,me),Ut.setOptional(j,ae,"batchingIdTexture"),Ut.setValue(j,"batchingIdTexture",ae._indirectTexture,me),Ut.setOptional(j,ae,"batchingColorTexture"),ae._colorsTexture!==null&&Ut.setValue(j,"batchingColorTexture",ae._colorsTexture,me));const hi=de.morphAttributes;if((hi.position!==void 0||hi.normal!==void 0||hi.color!==void 0)&&W.update(ae,de,zn),(Hn||We.receiveShadow!==ae.receiveShadow)&&(We.receiveShadow=ae.receiveShadow,Ut.setValue(j,"receiveShadow",ae.receiveShadow)),(ie.isMeshStandardMaterial||ie.isMeshLambertMaterial||ie.isMeshPhongMaterial)&&ie.envMap===null&&V.environment!==null&&(Jt.envMapIntensity.value=V.environmentIntensity),Jt.dfgLUT!==void 0&&(Jt.dfgLUT.value=fw()),Hn){if(Ut.setValue(j,"toneMappingExposure",X.toneMappingExposure),We.needsLights&&dn(Jt,Va),Ie&&ie.fog===!0&&Ve.refreshFogUniforms(Jt,Ie),Ve.refreshMaterialUniforms(Jt,ie,_e,oe,O.state.transmissionRenderTarget[R.id]),We.needsLights&&We.lightProbeGrid){const Ht=We.lightProbeGrid;Jt.probesSH.value=Ht.texture,Jt.probesMin.value.copy(Ht.boundingBox.min),Jt.probesMax.value.copy(Ht.boundingBox.max),Jt.probesResolution.value.copy(Ht.resolution)}wu.upload(j,ra(We),Jt,me)}if(ie.isShaderMaterial&&ie.uniformsNeedUpdate===!0&&(wu.upload(j,ra(We),Jt,me),ie.uniformsNeedUpdate=!1),ie.isSpriteMaterial&&Ut.setValue(j,"center",ae.center),Ut.setValue(j,"modelViewMatrix",ae.modelViewMatrix),Ut.setValue(j,"normalMatrix",ae.normalMatrix),Ut.setValue(j,"modelMatrix",ae.matrixWorld),ie.uniformsGroups!==void 0){const Ht=ie.uniformsGroups;for(let Wi=0,Ni=Ht.length;Wi<Ni;Wi++){const pi=Ht[Wi];Ee.update(pi,zn),Ee.bind(pi,zn)}}return zn}function dn(R,V){R.ambientLightColor.needsUpdate=V,R.lightProbe.needsUpdate=V,R.sunLights.needsUpdate=V,R.sunLightShadows.needsUpdate=V,R.directionalLights.needsUpdate=V,R.directionalLightShadows.needsUpdate=V,R.pointLights.needsUpdate=V,R.pointLightShadows.needsUpdate=V,R.spotLights.needsUpdate=V,R.spotLightShadows.needsUpdate=V,R.rectAreaLights.needsUpdate=V,R.hemisphereLights.needsUpdate=V}function Ol(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return H},this.getActiveMipmapLevel=function(){return F},this.getRenderTarget=function(){return J},this.setRenderTargetTextures=function(R,V,de){const ie=ce.get(R);ie.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,ie.__autoAllocateDepthBuffer===!1&&(ie.__useRenderToTexture=!1),ce.get(R.texture).__webglTexture=V,ce.get(R.depthTexture).__webglTexture=ie.__autoAllocateDepthBuffer?void 0:de,ie.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,V){const de=ce.get(R);de.__webglFramebuffer=V,de.__useDefaultFramebuffer=V===void 0},this.setRenderTarget=function(R,V=0,de=0){J=R,H=V,F=de;let ie=null,ae=!1,Ie=!1;if(R){const Le=ce.get(R);if(Le.__useDefaultFramebuffer!==void 0){E.bindFramebuffer(j.FRAMEBUFFER,Le.__webglFramebuffer),D.copy(R.viewport),ne.copy(R.scissor),ve=R.scissorTest,E.viewport(D),E.scissor(ne),E.setScissorTest(ve),$=-1;return}else if(Le.__webglFramebuffer===void 0)me.setupRenderTarget(R);else if(Le.__hasExternalTextures)me.rebindTextures(R,ce.get(R.texture).__webglTexture,ce.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const ot=R.depthTexture;if(Le.__boundDepthTexture!==ot){if(ot!==null&&ce.has(ot)&&(R.width!==ot.image.width||R.height!==ot.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");me.setupDepthRenderbuffer(R)}}const ze=R.texture;(ze.isData3DTexture||ze.isDataArrayTexture||ze.isCompressedArrayTexture)&&(Ie=!0);const He=ce.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(He[V])?ie=He[V][de]:ie=He[V],ae=!0):R.samples>0&&me.useMultisampledRTT(R)===!1?ie=ce.get(R).__webglMultisampledFramebuffer:Array.isArray(He)?ie=He[de]:ie=He,D.copy(R.viewport),ne.copy(R.scissor),ve=R.scissorTest}else D.copy(Ge).multiplyScalar(_e).floor(),ne.copy(lt).multiplyScalar(_e).floor(),ve=nn;if(de!==0&&(ie=fe),E.bindFramebuffer(j.FRAMEBUFFER,ie)&&E.drawBuffers(R,ie),E.viewport(D),E.scissor(ne),E.setScissorTest(ve),ae){const Le=ce.get(R.texture);j.framebufferTexture2D(j.FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_CUBE_MAP_POSITIVE_X+V,Le.__webglTexture,de)}else if(Ie){const Le=V;for(let ze=0;ze<R.textures.length;ze++){const He=ce.get(R.textures[ze]);j.framebufferTextureLayer(j.FRAMEBUFFER,j.COLOR_ATTACHMENT0+ze,He.__webglTexture,de,Le)}}else if(R!==null&&de!==0){const Le=ce.get(R.texture);j.framebufferTexture2D(j.FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_2D,Le.__webglTexture,de)}$=-1};function ho(R){const V=ce.get(R);return(V.__readFormat!==R.format||V.__readType!==R.type)&&(V.__readFormat=R.format,V.__readType=R.type,V.__formatReadable=P.textureFormatReadable(R.format),V.__typeReadable=P.textureTypeReadable(R.type)),V}this.readRenderTargetPixels=function(R,V,de,ie,ae,Ie,ke,Le=0){if(!(R&&R.isWebGLRenderTarget)){wt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ze=ce.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&ke!==void 0&&(ze=ze[ke]),ze){E.bindFramebuffer(j.FRAMEBUFFER,ze);try{const He=R.textures[Le],ot=He.format,pt=He.type;R.textures.length>1&&j.readBuffer(j.COLOR_ATTACHMENT0+Le);const qe=ho(He);if(qe.__formatReadable===!1){wt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(qe.__typeReadable===!1){wt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}V>=0&&V<=R.width-ie&&de>=0&&de<=R.height-ae&&j.readPixels(V,de,ie,ae,Ne.convert(ot),Ne.convert(pt),Ie)}finally{const He=J!==null?ce.get(J).__webglFramebuffer:null;E.bindFramebuffer(j.FRAMEBUFFER,He)}}},this.readRenderTargetPixelsAsync=async function(R,V,de,ie,ae,Ie,ke,Le=0){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ze=ce.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&ke!==void 0&&(ze=ze[ke]),ze)if(V>=0&&V<=R.width-ie&&de>=0&&de<=R.height-ae){E.bindFramebuffer(j.FRAMEBUFFER,ze);const He=R.textures[Le],ot=He.format,pt=He.type;R.textures.length>1&&j.readBuffer(j.COLOR_ATTACHMENT0+Le);const qe=ho(He);if(qe.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(qe.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Rt=j.createBuffer();j.bindBuffer(j.PIXEL_PACK_BUFFER,Rt),j.bufferData(j.PIXEL_PACK_BUFFER,Ie.byteLength,j.STREAM_READ),j.readPixels(V,de,ie,ae,Ne.convert(ot),Ne.convert(pt),0),j.bindBuffer(j.PIXEL_PACK_BUFFER,null);const Zt=J!==null?ce.get(J).__webglFramebuffer:null;E.bindFramebuffer(j.FRAMEBUFFER,Zt);const qt=j.fenceSync(j.SYNC_GPU_COMMANDS_COMPLETE,0);return j.flush(),await CE(j,qt,4),j.bindBuffer(j.PIXEL_PACK_BUFFER,Rt),j.getBufferSubData(j.PIXEL_PACK_BUFFER,0,Ie),j.bindBuffer(j.PIXEL_PACK_BUFFER,null),j.deleteBuffer(Rt),j.deleteSync(qt),Ie}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,V=null,de=0){const ie=Math.pow(2,-de),ae=Math.floor(R.image.width*ie),Ie=Math.floor(R.image.height*ie),ke=V!==null?V.x:0,Le=V!==null?V.y:0;me.setTexture2D(R,0),j.copyTexSubImage2D(j.TEXTURE_2D,de,0,0,ke,Le,ae,Ie),E.unbindTexture()},this.copyTextureToTexture=function(R,V,de=null,ie=null,ae=0,Ie=0){let ke,Le,ze,He,ot,pt,qe,Rt,Zt;const qt=R.isCompressedTexture?R.mipmaps[Ie]:R.image;if(de!==null)ke=de.max.x-de.min.x,Le=de.max.y-de.min.y,ze=de.isBox3?de.max.z-de.min.z:1,He=de.min.x,ot=de.min.y,pt=de.isBox3?de.min.z:0;else{const Jt=Math.pow(2,-ae);ke=Math.floor(qt.width*Jt),Le=Math.floor(qt.height*Jt),R.isDataArrayTexture?ze=qt.depth:R.isData3DTexture?ze=Math.floor(qt.depth*Jt):ze=1,He=0,ot=0,pt=0}ie!==null?(qe=ie.x,Rt=ie.y,Zt=ie.z):(qe=0,Rt=0,Zt=0);const ft=Ne.convert(V.format),hn=Ne.convert(V.type);let We;V.isData3DTexture?(me.setTexture3D(V,0),We=j.TEXTURE_3D):V.isDataArrayTexture||V.isCompressedArrayTexture?(me.setTexture2DArray(V,0),We=j.TEXTURE_2D_ARRAY):(me.setTexture2D(V,0),We=j.TEXTURE_2D),E.activeTexture(j.TEXTURE0),E.pixelStorei(j.UNPACK_FLIP_Y_WEBGL,V.flipY),E.pixelStorei(j.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),E.pixelStorei(j.UNPACK_ALIGNMENT,V.unpackAlignment);const _n=E.getParameter(j.UNPACK_ROW_LENGTH),dt=E.getParameter(j.UNPACK_IMAGE_HEIGHT),zn=E.getParameter(j.UNPACK_SKIP_PIXELS),ti=E.getParameter(j.UNPACK_SKIP_ROWS),Hn=E.getParameter(j.UNPACK_SKIP_IMAGES);E.pixelStorei(j.UNPACK_ROW_LENGTH,qt.width),E.pixelStorei(j.UNPACK_IMAGE_HEIGHT,qt.height),E.pixelStorei(j.UNPACK_SKIP_PIXELS,He),E.pixelStorei(j.UNPACK_SKIP_ROWS,ot),E.pixelStorei(j.UNPACK_SKIP_IMAGES,pt);const Va=R.isDataArrayTexture||R.isData3DTexture,Ut=V.isDataArrayTexture||V.isData3DTexture;if(R.isDepthTexture){const Jt=ce.get(R),hi=ce.get(V),Ht=ce.get(Jt.__renderTarget),Wi=ce.get(hi.__renderTarget);E.bindFramebuffer(j.READ_FRAMEBUFFER,Ht.__webglFramebuffer),E.bindFramebuffer(j.DRAW_FRAMEBUFFER,Wi.__webglFramebuffer);for(let Ni=0;Ni<ze;Ni++)Va&&(j.framebufferTextureLayer(j.READ_FRAMEBUFFER,j.COLOR_ATTACHMENT0,ce.get(R).__webglTexture,ae,pt+Ni),j.framebufferTextureLayer(j.DRAW_FRAMEBUFFER,j.COLOR_ATTACHMENT0,ce.get(V).__webglTexture,Ie,Zt+Ni)),j.blitFramebuffer(He,ot,ke,Le,qe,Rt,ke,Le,j.DEPTH_BUFFER_BIT,j.NEAREST);E.bindFramebuffer(j.READ_FRAMEBUFFER,null),E.bindFramebuffer(j.DRAW_FRAMEBUFFER,null)}else if(ae!==0||R.isRenderTargetTexture||ce.has(R)){const Jt=ce.get(R),hi=ce.get(V);E.bindFramebuffer(j.READ_FRAMEBUFFER,Y),E.bindFramebuffer(j.DRAW_FRAMEBUFFER,te);for(let Ht=0;Ht<ze;Ht++)Va?j.framebufferTextureLayer(j.READ_FRAMEBUFFER,j.COLOR_ATTACHMENT0,Jt.__webglTexture,ae,pt+Ht):j.framebufferTexture2D(j.READ_FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_2D,Jt.__webglTexture,ae),Ut?j.framebufferTextureLayer(j.DRAW_FRAMEBUFFER,j.COLOR_ATTACHMENT0,hi.__webglTexture,Ie,Zt+Ht):j.framebufferTexture2D(j.DRAW_FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_2D,hi.__webglTexture,Ie),ae!==0?j.blitFramebuffer(He,ot,ke,Le,qe,Rt,ke,Le,j.COLOR_BUFFER_BIT,j.NEAREST):Ut?j.copyTexSubImage3D(We,Ie,qe,Rt,Zt+Ht,He,ot,ke,Le):j.copyTexSubImage2D(We,Ie,qe,Rt,He,ot,ke,Le);E.bindFramebuffer(j.READ_FRAMEBUFFER,null),E.bindFramebuffer(j.DRAW_FRAMEBUFFER,null)}else Ut?R.isDataTexture||R.isData3DTexture?j.texSubImage3D(We,Ie,qe,Rt,Zt,ke,Le,ze,ft,hn,qt.data):V.isCompressedArrayTexture?j.compressedTexSubImage3D(We,Ie,qe,Rt,Zt,ke,Le,ze,ft,qt.data):j.texSubImage3D(We,Ie,qe,Rt,Zt,ke,Le,ze,ft,hn,qt):R.isDataTexture?j.texSubImage2D(j.TEXTURE_2D,Ie,qe,Rt,ke,Le,ft,hn,qt.data):R.isCompressedTexture?j.compressedTexSubImage2D(j.TEXTURE_2D,Ie,qe,Rt,qt.width,qt.height,ft,qt.data):j.texSubImage2D(j.TEXTURE_2D,Ie,qe,Rt,ke,Le,ft,hn,qt);E.pixelStorei(j.UNPACK_ROW_LENGTH,_n),E.pixelStorei(j.UNPACK_IMAGE_HEIGHT,dt),E.pixelStorei(j.UNPACK_SKIP_PIXELS,zn),E.pixelStorei(j.UNPACK_SKIP_ROWS,ti),E.pixelStorei(j.UNPACK_SKIP_IMAGES,Hn),Ie===0&&V.generateMipmaps&&j.generateMipmap(We),E.unbindTexture()},this.initRenderTarget=function(R){ce.get(R).__webglFramebuffer===void 0&&me.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?me.setTextureCube(R,0):R.isData3DTexture?me.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?me.setTexture2DArray(R,0):me.setTexture2D(R,0),E.unbindTexture()},this.resetState=function(){H=0,F=0,J=null,E.reset(),Fe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ea}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const i=this.getContext();i.drawingBufferColorSpace=Et._getDrawingBufferColorSpace(e),i.unpackColorSpace=Et._getUnpackColorSpace()}}const jh=460559,Gu=-150,hw=65,CS=hw-Gu,pw=[{count:1600,size:.22,speed:.65,opacity:.82},{count:700,size:.42,speed:1.4,opacity:.9},{count:180,size:.85,speed:2.3,opacity:.98}],mw=()=>{const r=document.createElement("canvas");r.width=64,r.height=64;const e=r.getContext("2d");if(e){const i=e.createRadialGradient(32,32,0,32,32,32);i.addColorStop(0,"rgba(255,255,255,1)"),i.addColorStop(.18,"rgba(255,255,255,0.95)"),i.addColorStop(.45,"rgba(255,255,255,0.28)"),i.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=i,e.fillRect(0,0,64,64)}return new gS(r)},gw=()=>{const r=document.createElement("canvas");r.width=512,r.height=512;const e=r.getContext("2d");if(e){let a=731;const l=()=>(a=a*16807%2147483647,(a-1)/2147483646);e.globalCompositeOperation="lighter";for(let c=0;c<30;c+=1){const f=46+c*14+(l()-.5)*42,p=340-c*5+Math.sin(c*.58)*58+(l()-.5)*54,m=42+l()*76;e.save(),e.translate(f,p),e.rotate(-.5+l()*.35),e.scale(1.5,.55+l()*.45);const h=e.createRadialGradient(0,0,0,0,0,m);h.addColorStop(0,"rgba(255,255,255,0.24)"),h.addColorStop(.35,"rgba(255,255,255,0.14)"),h.addColorStop(.72,"rgba(255,255,255,0.045)"),h.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=h,e.fillRect(-m,-m,m*2,m*2),e.restore()}e.filter="blur(9px)",e.lineCap="round";for(let c=0;c<5;c+=1)e.beginPath(),e.moveTo(40,350+c*14),e.bezierCurveTo(170,210-c*18,300,360-c*32,486,150+c*13),e.strokeStyle=`rgba(255,255,255,${.12-c*.014})`,e.lineWidth=18-c*2,e.stroke();e.filter="none"}const i=new gS(r);return i.colorSpace=fi,i},xw=(r,e,i)=>{const a=i?Math.floor(r.count/2):r.count,l=new Float32Array(a*3),c=new Float32Array(a),f=new Float32Array(a*3),p=new bt;for(let v=0;v<a;v+=1){const x=v*3;l[x]=(Math.random()-.5)*180,l[x+1]=-25+Math.random()*90,c[v]=Gu+Math.random()*CS,l[x+2]=c[v];const b=Math.random();p.setHex(b<.75?15135487:b<.97?9418495:16768962),f[x]=p.r,f[x+1]=p.g,f[x+2]=p.b}const m=new $n;m.setAttribute("position",new Ci(l,3)),m.setAttribute("color",new Ci(f,3));const h=new pS({size:r.size,map:e,vertexColors:!0,transparent:!0,opacity:r.opacity,alphaTest:.01,depthWrite:!1,blending:bl,sizeAttenuation:!0});return{points:new aT(m,h),geometry:m,material:h,positions:l,baseZ:c,count:a,speed:r.speed}},vw=r=>[{position:[-32,20,-105],scale:[92,62],color:7310591,opacity:.65,rotation:-.35},{position:[35,25,-120],scale:[80,68],color:10517472,opacity:.58,rotation:.5},{position:[0,22,-105],scale:[110,70],color:5405652,opacity:.52,rotation:.1}].map(i=>{const a=new cS({map:r,color:i.color,transparent:!0,opacity:i.opacity,depthWrite:!1,blending:bl,rotation:i.rotation,fog:!1}),l=new $E(a);return l.position.set(i.position[0],i.position[1],i.position[2]),l.scale.set(i.scale[0],i.scale[1],1),{sprite:l,material:a}}),_w=()=>{const r=new $n;r.setAttribute("position",new Gi([0,0,0,7,3.4,0],3));const e=new hS({color:13230847,transparent:!0,opacity:0,depthWrite:!1,blending:bl}),i=new iT(r,e);return i.visible=!1,{line:i,geometry:r,material:e}},Sw=()=>{const r=ee.useRef(null),[e,i]=ee.useState(()=>document.documentElement.dataset.theme==="cyber");return ee.useEffect(()=>{const a=new MutationObserver(()=>{i(document.documentElement.dataset.theme==="cyber")});return a.observe(document.documentElement,{attributes:!0,attributeFilter:["data-theme"]}),()=>a.disconnect()},[]),ee.useEffect(()=>{const a=r.current;if(!e||!a)return;let l;try{l=new dw({antialias:window.innerWidth>=640,powerPreference:"high-performance"})}catch{return}let c=!1,f=0;const p=new XE;p.background=new bt(jh),p.fog=new cm(jh,70,230);const m=new Ai(58,window.innerWidth/window.innerHeight,.1,260);l.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),l.setSize(window.innerWidth,window.innerHeight),l.setClearColor(jh,1),l.domElement.dataset.cyberScene="starfield",l.domElement.setAttribute("aria-hidden","true"),Object.assign(l.domElement.style,{position:"fixed",inset:"0",zIndex:"0",pointerEvents:"none",display:"block"}),a.appendChild(l.domElement);const h=mw(),g=window.innerWidth<640,v=pw.map(z=>xw(z,h,g));v.forEach(({points:z})=>p.add(z));const x=gw(),b=vw(x);b.forEach(({sprite:z})=>p.add(z));const T=_w();p.add(T.line);let C=-1,y=4+Math.random()*4;const _=()=>{m.aspect=window.innerWidth/window.innerHeight,m.updateProjectionMatrix(),l.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),l.setSize(window.innerWidth,window.innerHeight)};window.addEventListener("resize",_);const U=z=>{if(c)return;const N=z*.001,L=Math.sin(N*.08)*.45,O=Math.sin(N*.11)*.16;if(m.position.set(L,1.2+O,45),m.lookAt(L*.25,0,-45),v.forEach(I=>{for(let A=0;A<I.count;A+=1)I.positions[A*3+2]=Gu+(I.baseZ[A]+N*I.speed-Gu)%CS;I.geometry.attributes.position.needsUpdate=!0}),C<0&&N>=y&&(C=N),C>=0){const I=(N-C)/1.15;I>=1?(C=-1,y=N+9+Math.random()*10,T.line.visible=!1):(T.line.visible=!0,T.line.position.set(55-I*95,38-I*48,-30),T.material.opacity=Math.sin(I*Math.PI)*.72)}l.render(p,m),f=window.requestAnimationFrame(U)};return f=window.requestAnimationFrame(U),()=>{c=!0,window.cancelAnimationFrame(f),window.removeEventListener("resize",_),v.forEach(({points:z,geometry:N,material:L})=>{p.remove(z),N.dispose(),L.dispose()}),b.forEach(({sprite:z,material:N})=>{p.remove(z),N.dispose()}),p.remove(T.line),T.geometry.dispose(),T.material.dispose(),h.dispose(),x.dispose(),l.dispose(),l.forceContextLoss(),l.domElement.remove()}},[e]),e?M.jsx("div",{"code-path":"src/components/pirate/CyberScene.tsx:317:10",ref:r,"aria-hidden":!0,className:"pointer-events-none fixed inset-0 z-0"}):null};function yw(){const r=new URLSearchParams(window.location.search).get("redirect");return M.jsxs(l1,{"code-path":"src/App.tsx:15:5",children:[M.jsx("div",{"code-path":"src/App.tsx:16:7",className:"relative z-[1]",children:M.jsxs(FM,{"code-path":"src/App.tsx:17:9",children:[r&&M.jsx(Bi,{"code-path":"src/App.tsx:18:24",path:"*",element:M.jsx(oh,{"code-path":"src/App.tsx:18:49",to:r,replace:!0})}),M.jsx(Bi,{"code-path":"src/App.tsx:20:11",path:"/",element:M.jsx(oh,{"code-path":"src/App.tsx:20:36",to:"/me",replace:!0})}),M.jsx(Bi,{"code-path":"src/App.tsx:22:11",path:"/home",element:M.jsx(ol,{"code-path":"src/App.tsx:22:40",section:"home"})}),M.jsx(Bi,{"code-path":"src/App.tsx:23:11",path:"/movies",element:M.jsx(ol,{"code-path":"src/App.tsx:23:42",section:"movies"})}),M.jsx(Bi,{"code-path":"src/App.tsx:24:11",path:"/tv",element:M.jsx(ol,{"code-path":"src/App.tsx:24:38",section:"tv"})}),M.jsx(Bi,{"code-path":"src/App.tsx:25:11",path:"/variety",element:M.jsx(ol,{"code-path":"src/App.tsx:25:43",section:"variety"})}),M.jsx(Bi,{"code-path":"src/App.tsx:26:11",path:"/anime",element:M.jsx(ol,{"code-path":"src/App.tsx:26:41",section:"anime"})}),M.jsx(Bi,{"code-path":"src/App.tsx:27:11",path:"/works",element:M.jsx(X1,{"code-path":"src/App.tsx:27:41"})}),M.jsx(Bi,{"code-path":"src/App.tsx:28:11",path:"/me",element:M.jsx(L1,{"code-path":"src/App.tsx:28:38"})}),M.jsx(Bi,{"code-path":"src/App.tsx:30:11",path:"*",element:M.jsx(oh,{"code-path":"src/App.tsx:30:36",to:"/",replace:!0})})]})}),M.jsx(Sw,{"code-path":"src/App.tsx:33:7"}),M.jsx(q1,{"code-path":"src/App.tsx:35:7"})]})}Gb.createRoot(document.getElementById("root")).render(M.jsx(ee.StrictMode,{"code-path":"src/main.tsx:8:3",children:M.jsx(yw,{"code-path":"src/main.tsx:9:5"})}));
