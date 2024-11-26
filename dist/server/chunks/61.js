exports.id=61,exports.ids=[61],exports.modules={6593:(e,t)=>{"use strict";function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{ACTION_FAST_REFRESH:function(){return f},ACTION_NAVIGATE:function(){return u},ACTION_PREFETCH:function(){return c},ACTION_REFRESH:function(){return i},ACTION_RESTORE:function(){return a},ACTION_SERVER_ACTION:function(){return s},ACTION_SERVER_PATCH:function(){return l},PrefetchCacheEntryStatus:function(){return o},PrefetchKind:function(){return n},isThenable:function(){return d}});var n,o,i="refresh",u="navigate",a="restore",l="server-patch",c="prefetch",f="fast-refresh",s="server-action";function d(e){return e&&("object"===r(e)||"function"==typeof e)&&"function"==typeof e.then}(function(e){e.AUTO="auto",e.FULL="full",e.TEMPORARY="temporary"})(n||(n={})),function(e){e.fresh="fresh",e.reusable="reusable",e.expired="expired",e.stale="stale"}(o||(o={})),("function"==typeof t.default||"object"===r(t.default)&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},3617:(e,t,r)=>{"use strict";function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function o(e,t,r,n){return!1}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getDomainLocale",{enumerable:!0,get:function(){return o}}),r(1063),("function"==typeof t.default||"object"===n(t.default)&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},8880:(e,t,r)=>{"use strict";var n=["src","srcSet","sizes","height","width","decoding","className","style","fetchPriority","placeholder","loading","unoptimized","fill","onLoadRef","onLoadingCompleteRef","setBlurComplete","setShowAltText","sizesInput","onLoad","onError"];function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,i,u,a=[],l=!0,c=!1;try{if(i=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;l=!1}else for(;!(l=(n=i.call(r)).done)&&(a.push(n.value),a.length!==t);l=!0);}catch(e){c=!0,o=e}finally{try{if(!l&&null!=r.return&&(u=r.return(),Object(u)!==u))return}finally{if(c)throw o}}return a}}(e,t)||u(e,t)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(e){return function(e){if(Array.isArray(e))return a(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||u(e)||function(){throw TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function u(e,t){if(e){if("string"==typeof e)return a(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);if("Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return a(e,t)}}function a(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=Array(t);r<t;r++)n[r]=e[r];return n}function l(e){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function f(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach(function(t){var n,o;n=t,o=r[t],(n=function(e){var t=function(e,t){if("object"!==l(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!==l(n))return n;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===l(t)?t:String(t)}(n))in e?Object.defineProperty(e,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[n]=o}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Image",{enumerable:!0,get:function(){return C}});var s=r(167),d=r(8760),p=r(997),y=d._(r(6689)),b=s._(r(3973)),m=s._(r(9903)),v=r(6869),g=r(2296),h=r(6218);r(7668);var O=r(5469),j=s._(r(4436)),S={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1};function w(e,t,r,n,o,i,u){var a=null==e?void 0:e.src;e&&e["data-loaded-src"]!==a&&(e["data-loaded-src"]=a,("decode"in e?e.decode():Promise.resolve()).catch(function(){}).then(function(){if(e.parentElement&&e.isConnected){if("empty"!==t&&o(!0),null==r?void 0:r.current){var i=new Event("load");Object.defineProperty(i,"target",{writable:!1,value:e});var u=!1,a=!1;r.current(f(f({},i),{},{nativeEvent:i,currentTarget:e,target:e,isDefaultPrevented:function(){return u},isPropagationStopped:function(){return a},persist:function(){},preventDefault:function(){u=!0,i.preventDefault()},stopPropagation:function(){a=!0,i.stopPropagation()}}))}(null==n?void 0:n.current)&&n.current(e)}}))}function P(e){return y.use?{fetchPriority:e}:{fetchpriority:e}}globalThis.__NEXT_IMAGE_IMPORTED=!0;var _=(0,y.forwardRef)(function(e,t){var r=e.src,o=e.srcSet,i=e.sizes,u=e.height,a=e.width,c=e.decoding,s=e.className,d=e.style,b=e.fetchPriority,m=e.placeholder,v=e.loading,g=e.unoptimized,h=e.fill,O=e.onLoadRef,j=e.onLoadingCompleteRef,S=e.setBlurComplete,_=e.setShowAltText,x=e.sizesInput,C=(e.onLoad,e.onError),A=function(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}(e,n);return(0,p.jsx)("img",f(f(f({},A),P(b)),{},{loading:v,width:a,height:u,decoding:c,"data-nimg":h?"fill":"1",className:s,style:d,sizes:i,srcSet:o,src:r,ref:(0,y.useCallback)(function(e){t&&("function"==typeof t?t(e):"object"===l(t)&&(t.current=e)),e&&(C&&(e.src=e.src),e.complete&&w(e,m,O,j,S,g,x))},[r,m,O,j,S,C,g,x,t]),onLoad:function(e){w(e.currentTarget,m,O,j,S,g,x)},onError:function(e){_(!0),"empty"!==m&&S(!0),C&&C(e)}}))});function x(e){var t=e.isAppRouter,r=e.imgAttributes,n=f({as:"image",imageSrcSet:r.srcSet,imageSizes:r.sizes,crossOrigin:r.crossOrigin,referrerPolicy:r.referrerPolicy},P(r.fetchPriority));return t&&b.default.preload?(b.default.preload(r.src,n),null):(0,p.jsx)(m.default,{children:(0,p.jsx)("link",f({rel:"preload",href:r.srcSet?void 0:r.src},n),"__nimg-"+r.src+r.srcSet+r.sizes)})}var C=(0,y.forwardRef)(function(e,t){var r=(0,y.useContext)(O.RouterContext),n=(0,y.useContext)(h.ImageConfigContext),u=(0,y.useMemo)(function(){var e=S||n||g.imageConfigDefault,t=[].concat(i(e.deviceSizes),i(e.imageSizes)).sort(function(e,t){return e-t}),r=e.deviceSizes.sort(function(e,t){return e-t});return f(f({},e),{},{allSizes:t,deviceSizes:r})},[n]),a=e.onLoad,l=e.onLoadingComplete,c=(0,y.useRef)(a);(0,y.useEffect)(function(){c.current=a},[a]);var s=(0,y.useRef)(l);(0,y.useEffect)(function(){s.current=l},[l]);var d=o((0,y.useState)(!1),2),b=d[0],m=d[1],w=o((0,y.useState)(!1),2),P=w[0],C=w[1],A=(0,v.getImgProps)(e,{defaultLoader:j.default,imgConf:u,blurComplete:b,showAltText:P}),E=A.props,I=A.meta;return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(_,f(f({},E),{},{unoptimized:I.unoptimized,placeholder:I.placeholder,fill:I.fill,onLoadRef:c,onLoadingCompleteRef:s,setBlurComplete:m,setShowAltText:C,sizesInput:e.sizes,ref:t})),I.priority?(0,p.jsx)(x,{isAppRouter:!r,imgAttributes:E}):null]})});("function"==typeof t.default||"object"===l(t.default)&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},8065:(e,t,r)=>{"use strict";var n=["href","as","children","prefetch","passHref","replace","shallow","scroll","locale","onClick","onMouseEnter","onTouchStart","legacyBehavior"];function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach(function(t){var n,o;n=t,o=r[t],(n=function(e){var t=function(e,t){if("object"!==l(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!==l(n))return n;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===l(t)?t:String(t)}(n))in e?Object.defineProperty(e,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[n]=o}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function u(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,i,u,a=[],l=!0,c=!1;try{if(i=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;l=!1}else for(;!(l=(n=i.call(r)).done)&&(a.push(n.value),a.length!==t);l=!0);}catch(e){c=!0,o=e}finally{try{if(!l&&null!=r.return&&(u=r.return(),Object(u)!==u))return}finally{if(c)throw o}}return a}}(e,t)||function(e,t){if(e){if("string"==typeof e)return a(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);if("Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return a(e,t)}}(e,t)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function a(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=Array(t);r<t;r++)n[r]=e[r];return n}function l(e){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return P}});var c=r(167),f=r(997),s=c._(r(6689)),d=r(8364),p=r(5656),y=r(2151),b=r(9642),m=r(3443),v=r(5469),g=r(7443),h=r(1561),O=r(3617),j=r(5439),S=r(6593);function w(e){return"string"==typeof e?e:(0,y.formatUrl)(e)}var P=s.default.forwardRef(function(e,t){var r,o,a=e.href,c=e.as,y=e.children,P=e.prefetch,_=void 0===P?null:P,x=e.passHref,C=e.replace,A=e.shallow,E=e.scroll,I=e.locale,M=e.onClick,z=e.onMouseEnter,R=e.onTouchStart,T=e.legacyBehavior,k=void 0!==T&&T,L=function(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}(e,n);r=y,k&&("string"==typeof r||"number"==typeof r)&&(r=(0,f.jsx)("a",{children:r}));var D=s.default.useContext(v.RouterContext),N=s.default.useContext(g.AppRouterContext),U=null!=D?D:N,F=!D,B=!1!==_,H=null===_?S.PrefetchKind.AUTO:S.PrefetchKind.FULL,q=s.default.useMemo(function(){if(!D){var e=w(a);return{href:e,as:c?w(c):e}}var t=u((0,d.resolveHref)(D,a,!0),2),r=t[0],n=t[1];return{href:r,as:c?(0,d.resolveHref)(D,c):n||r}},[D,a,c]),G=q.href,V=q.as,W=s.default.useRef(G),$=s.default.useRef(V);k&&(o=s.default.Children.only(r));var K=k?o&&"object"===l(o)&&o.ref:t,Y=u((0,h.useIntersection)({rootMargin:"200px"}),3),J=Y[0],Q=Y[1],X=Y[2],Z=s.default.useCallback(function(e){($.current!==V||W.current!==G)&&(X(),$.current=V,W.current=G),J(e),K&&("function"==typeof K?K(e):"object"===l(K)&&(K.current=e))},[V,K,G,X,J]);s.default.useEffect(function(){},[V,G,Q,I,B,null==D?void 0:D.locale,U,F,H]);var ee={ref:Z,onClick:function(e){k||"function"!=typeof M||M(e),k&&o.props&&"function"==typeof o.props.onClick&&o.props.onClick(e),U&&!e.defaultPrevented&&function(e,t,r,n,o,i,u,a,l){if(!("A"===e.currentTarget.nodeName.toUpperCase()&&((c=e.currentTarget.getAttribute("target"))&&"_self"!==c||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which||!l&&!(0,p.isLocalURL)(r)))){e.preventDefault();var c,f=function(){var e=null==u||u;"beforePopState"in t?t[o?"replace":"push"](r,n,{shallow:i,locale:a,scroll:e}):t[o?"replace":"push"](n||r,{scroll:e})};l?s.default.startTransition(f):f()}}(e,U,G,V,C,A,E,I,F)},onMouseEnter:function(e){k||"function"!=typeof z||z(e),k&&o.props&&"function"==typeof o.props.onMouseEnter&&o.props.onMouseEnter(e)},onTouchStart:function(e){k||"function"!=typeof R||R(e),k&&o.props&&"function"==typeof o.props.onTouchStart&&o.props.onTouchStart(e)}};if((0,b.isAbsoluteUrl)(V))ee.href=V;else if(!k||x||"a"===o.type&&!("href"in o.props)){var et=void 0!==I?I:null==D?void 0:D.locale,er=(null==D?void 0:D.isLocaleDomain)&&(0,O.getDomainLocale)(V,et,null==D?void 0:D.locales,null==D?void 0:D.domainLocales);ee.href=er||(0,j.addBasePath)((0,m.addLocale)(V,et,null==D?void 0:D.defaultLocale))}return k?s.default.cloneElement(o,ee):(0,f.jsx)("a",i(i(i({},L),ee),{},{children:r}))});("function"==typeof t.default||"object"===l(t.default)&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1561:(e,t,r)=>{"use strict";function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function o(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=Array(t);r<t;r++)n[r]=e[r];return n}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"useIntersection",{enumerable:!0,get:function(){return f}});var i=r(6689),u=r(1650),a="function"==typeof IntersectionObserver,l=new Map,c=[];function f(e){var t,r=e.rootRef,n=e.rootMargin,f=e.disabled||!a,s=function(e){if(Array.isArray(e))return e}(t=(0,i.useState)(!1))||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,i,u,a=[],l=!0,c=!1;try{for(i=(r=r.call(e)).next;!(l=(n=i.call(r)).done)&&(a.push(n.value),2!==a.length);l=!0);}catch(e){c=!0,o=e}finally{try{if(!l&&null!=r.return&&(u=r.return(),Object(u)!==u))return}finally{if(c)throw o}}return a}}(t,2)||function(e,t){if(e){if("string"==typeof e)return o(e,2);var r=Object.prototype.toString.call(e).slice(8,-1);if("Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return o(e,2)}}(t,2)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),d=s[0],p=s[1],y=(0,i.useRef)(null),b=(0,i.useCallback)(function(e){y.current=e},[]);return(0,i.useEffect)(function(){if(a){if(!f&&!d){var e,t,o,i,s,b=y.current;if(b&&b.tagName)return e=function(e){return e&&p(e)},o=(t=function(e){var t,r={root:e.root||null,margin:e.rootMargin||""},n=c.find(function(e){return e.root===r.root&&e.margin===r.margin});if(n&&(t=l.get(n)))return t;var o=new Map;return t={id:r,observer:new IntersectionObserver(function(e){e.forEach(function(e){var t=o.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)})},e),elements:o},c.push(r),l.set(r,t),t}({root:null==r?void 0:r.current,rootMargin:n})).id,i=t.observer,(s=t.elements).set(b,e),i.observe(b),function(){if(s.delete(b),i.unobserve(b),0===s.size){i.disconnect(),l.delete(o);var e=c.findIndex(function(e){return e.root===o.root&&e.margin===o.margin});e>-1&&c.splice(e,1)}}}}else if(!d){var m=(0,u.requestIdleCallback)(function(){return p(!0)});return function(){return(0,u.cancelIdleCallback)(m)}}},[f,n,r,d,y.current]),[b,d,(0,i.useCallback)(function(){p(!1)},[])]}("function"==typeof t.default||"object"===n(t.default)&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},8911:(e,t)=>{"use strict";function r(e){var t=void 0===e?{}:e,r=t.ampFirst,n=t.hybrid,o=t.hasQuery;return void 0!==r&&r||void 0!==n&&n&&void 0!==o&&o}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"isInAmpMode",{enumerable:!0,get:function(){return r}})},6869:(e,t,r)=>{"use strict";var n=["src","sizes","unoptimized","priority","loading","className","quality","width","height","fill","style","overrideSrc","onLoad","onLoadingComplete","placeholder","blurDataURL","fetchPriority","decoding","layout","objectFit","objectPosition","lazyBoundary","lazyRoot"],o=["config"];function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach(function(t){var n,o;n=t,o=r[t],(n=function(e){var t=function(e,t){if("object"!==f(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!==f(n))return n;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===f(t)?t:String(t)}(n))in e?Object.defineProperty(e,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[n]=o}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}function l(e){return function(e){if(Array.isArray(e))return c(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return c(e,void 0);var r=Object.prototype.toString.call(e).slice(8,-1);if("Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return c(e,t)}}(e)||function(){throw TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function c(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=Array(t);r<t;r++)n[r]=e[r];return n}function f(e){return(f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImgProps",{enumerable:!0,get:function(){return b}}),r(7668);var s=r(6921),d=r(2296);function p(e){return void 0!==e.default}function y(e){return void 0===e?e:"number"==typeof e?Number.isFinite(e)?e:NaN:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function b(e,t){var r,i,c,b,m=e.src,v=e.sizes,g=e.unoptimized,h=void 0!==g&&g,O=e.priority,j=void 0!==O&&O,S=e.loading,w=e.className,P=e.quality,_=e.width,x=e.height,C=e.fill,A=void 0!==C&&C,E=e.style,I=e.overrideSrc,M=(e.onLoad,e.onLoadingComplete,e.placeholder),z=void 0===M?"empty":M,R=e.blurDataURL,T=e.fetchPriority,k=e.decoding,L=e.layout,D=e.objectFit,N=e.objectPosition,U=(e.lazyBoundary,e.lazyRoot,a(e,n)),F=t.imgConf,B=t.showAltText,H=t.blurComplete,q=t.defaultLoader,G=F||d.imageConfigDefault;if("allSizes"in G)i=G;else{var V=[].concat(l(G.deviceSizes),l(G.imageSizes)).sort(function(e,t){return e-t}),W=G.deviceSizes.sort(function(e,t){return e-t});i=u(u({},G),{},{allSizes:V,deviceSizes:W})}if(void 0===q)throw Error("images.loaderFile detected but the file is missing default export.\nRead more: https://nextjs.org/docs/messages/invalid-images-config");var $=U.loader||q;delete U.loader,delete U.srcSet;var K="__next_img_default"in $;if(K){if("custom"===i.loader)throw Error('Image with src "'+m+'" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader')}else{var Y=$;$=function(e){return e.config,Y(a(e,o))}}if(L){"fill"===L&&(A=!0);var J={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[L];J&&(E=u(u({},E),J));var Q={responsive:"100vw",fill:"100vw"}[L];Q&&!v&&(v=Q)}var X="",Z=y(_),ee=y(x);if("object"===f(r=m)&&(p(r)||void 0!==r.src)){var et=p(m)?m.default:m;if(!et.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received "+JSON.stringify(et));if(!et.height||!et.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received "+JSON.stringify(et));if(c=et.blurWidth,b=et.blurHeight,R=R||et.blurDataURL,X=et.src,!A){if(Z||ee){if(Z&&!ee){var er=Z/et.width;ee=Math.round(et.height*er)}else if(!Z&&ee){var en=ee/et.height;Z=Math.round(et.width*en)}}else Z=et.width,ee=et.height}}var eo=!j&&("lazy"===S||void 0===S);(!(m="string"==typeof m?m:X)||m.startsWith("data:")||m.startsWith("blob:"))&&(h=!0,eo=!1),i.unoptimized&&(h=!0),K&&m.endsWith(".svg")&&!i.dangerouslyAllowSVG&&(h=!0),j&&(T="high");var ei=y(P),eu=Object.assign(A?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:D,objectPosition:N}:{},B?{}:{color:"transparent"},E),ea=H||"empty"===z?null:"blur"===z?'url("data:image/svg+xml;charset=utf-8,'+(0,s.getImageBlurSvg)({widthInt:Z,heightInt:ee,blurWidth:c,blurHeight:b,blurDataURL:R||"",objectFit:eu.objectFit})+'")':'url("'+z+'")',el=ea?{backgroundSize:eu.objectFit||"cover",backgroundPosition:eu.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:ea}:{},ec=function(e){var t=e.config,r=e.src,n=e.unoptimized,o=e.width,i=e.quality,u=e.sizes,a=e.loader;if(n)return{src:r,srcSet:void 0,sizes:void 0};var c=function(e,t,r){var n=e.deviceSizes,o=e.allSizes;if(r){for(var i,u=/(^|\s)(1?\d?\d)vw/g,a=[];i=u.exec(r);i)a.push(parseInt(i[2]));if(a.length){var c=.01*Math.min.apply(Math,a);return{widths:o.filter(function(e){return e>=n[0]*c}),kind:"w"}}return{widths:o,kind:"w"}}return"number"!=typeof t?{widths:n,kind:"w"}:{widths:l(new Set([t,2*t].map(function(e){return o.find(function(t){return t>=e})||o[o.length-1]}))),kind:"x"}}(t,o,u),f=c.widths,s=c.kind,d=f.length-1;return{sizes:u||"w"!==s?u:"100vw",srcSet:f.map(function(e,n){return a({config:t,src:r,quality:i,width:e})+" "+("w"===s?e:n+1)+s}).join(", "),src:a({config:t,src:r,quality:i,width:f[d]})}}({config:i,src:m,unoptimized:h,width:Z,quality:ei,sizes:v,loader:$});return{props:u(u({},U),{},{loading:eo?"lazy":S,fetchPriority:T,width:Z,height:ee,decoding:void 0===k?"async":k,className:w,style:u(u({},eu),el),sizes:ec.sizes,srcSet:ec.srcSet,src:I||ec.src}),meta:{unoptimized:h,priority:j,placeholder:z,fill:A}}}},9903:(e,t,r)=>{"use strict";function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{default:function(){return v},defaultHead:function(){return p}});var i=r(167),u=r(8760),a=r(997),l=u._(r(6689)),c=i._(r(3367)),f=r(8039),s=r(1988),d=r(8911);function p(e){void 0===e&&(e=!1);var t=[(0,a.jsx)("meta",{charSet:"utf-8"})];return e||t.push((0,a.jsx)("meta",{name:"viewport",content:"width=device-width"})),t}function y(e,t){return"string"==typeof t||"number"==typeof t?e:t.type===l.default.Fragment?e.concat(l.default.Children.toArray(t.props.children).reduce(function(e,t){return"string"==typeof t||"number"==typeof t?e:e.concat(t)},[])):e.concat(t)}r(7668);var b=["name","httpEquiv","charSet","itemProp"];function m(e,t){var r,i,u,a,c=t.inAmpMode;return e.reduce(y,[]).reverse().concat(p(c).reverse()).filter((r=new Set,i=new Set,u=new Set,a={},function(e){var t=!0,n=!1;if(e.key&&"number"!=typeof e.key&&e.key.indexOf("$")>0){n=!0;var o=e.key.slice(e.key.indexOf("$")+1);r.has(o)?t=!1:r.add(o)}switch(e.type){case"title":case"base":i.has(e.type)?t=!1:i.add(e.type);break;case"meta":for(var l=0,c=b.length;l<c;l++){var f=b[l];if(e.props.hasOwnProperty(f)){if("charSet"===f)u.has(f)?t=!1:u.add(f);else{var s=e.props[f],d=a[f]||new Set;("name"!==f||!n)&&d.has(s)?t=!1:(d.add(s),a[f]=d)}}}}return t})).reverse().map(function(e,t){var r=e.key||t;if(!c&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some(function(t){return e.props.href.startsWith(t)})){var i=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach(function(t){var o,i;o=t,i=r[t],(o=function(e){var t=function(e,t){if("object"!==n(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var o=r.call(e,t||"default");if("object"!==n(o))return o;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===n(t)?t:String(t)}(o))in e?Object.defineProperty(e,o,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[o]=i}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}({},e.props||{});return i["data-href"]=i.href,i.href=void 0,i["data-optimized-fonts"]=!0,l.default.cloneElement(e,i)}return l.default.cloneElement(e,{key:r})})}var v=function(e){var t=e.children,r=(0,l.useContext)(f.AmpStateContext),n=(0,l.useContext)(s.HeadManagerContext);return(0,a.jsx)(c.default,{reduceComponentsToState:m,headManager:n,inAmpMode:(0,d.isInAmpMode)(r),children:t})};("function"==typeof t.default||"object"===n(t.default)&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},6921:(e,t)=>{"use strict";function r(e){var t=e.widthInt,r=e.heightInt,n=e.blurWidth,o=e.blurHeight,i=e.blurDataURL,u=e.objectFit,a=n?40*n:t,l=o?40*o:r,c=a&&l?"viewBox='0 0 "+a+" "+l+"'":"";return"%3Csvg xmlns='http://www.w3.org/2000/svg' "+c+"%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='"+(c?"none":"contain"===u?"xMidYMid":"cover"===u?"xMidYMid slice":"none")+"' style='filter: url(%23b);' href='"+i+"'/%3E%3C/svg%3E"}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImageBlurSvg",{enumerable:!0,get:function(){return r}})},2296:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{VALID_LOADERS:function(){return r},imageConfigDefault:function(){return n}});var r=["default","imgix","cloudinary","akamai","custom"],n={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",loaderFile:"",domains:[],disableStaticImages:!1,minimumCacheTTL:60,formats:["image/webp"],dangerouslyAllowSVG:!1,contentSecurityPolicy:"script-src 'none'; frame-src 'none'; sandbox;",contentDispositionType:"inline",localPatterns:void 0,remotePatterns:[],unoptimized:!1}},3122:(e,t,r)=>{"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=Array(t);r<t;r++)n[r]=e[r];return n}Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{default:function(){return c},getImageProps:function(){return l}});var o=r(167),i=r(6869),u=r(8880),a=o._(r(4436));function l(e){for(var t=(0,i.getImgProps)(e,{defaultLoader:a.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1}}).props,r=0,o=Object.entries(t);r<o.length;r++){var u,l=function(e){if(Array.isArray(e))return e}(u=o[r])||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,i,u,a=[],l=!0,c=!1;try{for(i=(r=r.call(e)).next;!(l=(n=i.call(r)).done)&&(a.push(n.value),2!==a.length);l=!0);}catch(e){c=!0,o=e}finally{try{if(!l&&null!=r.return&&(u=r.return(),Object(u)!==u))return}finally{if(c)throw o}}return a}}(u,2)||function(e,t){if(e){if("string"==typeof e)return n(e,2);var r=Object.prototype.toString.call(e).slice(8,-1);if("Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n(e,2)}}(u,2)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),c=l[0];void 0===l[1]&&delete t[c]}return{props:t}}var c=u.Image},4436:(e,t)=>{"use strict";function r(e){var t=e.config,r=e.src,n=e.width,o=e.quality;return t.path+"?url="+encodeURIComponent(r)+"&w="+n+"&q="+(o||75)}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return n}}),r.__next_img_default=!0;var n=r},3367:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return u}});var n=r(6689),o=function(){},i=function(){};function u(e){var t,r=e.headManager,u=e.reduceComponentsToState;function a(){if(r&&r.mountedInstances){var t=n.Children.toArray(Array.from(r.mountedInstances).filter(Boolean));r.updateHead(u(t,e))}}return null==r||null==(t=r.mountedInstances)||t.add(e.children),a(),o(function(){var t;return null==r||null==(t=r.mountedInstances)||t.add(e.children),function(){var t;null==r||null==(t=r.mountedInstances)||t.delete(e.children)}}),o(function(){return r&&(r._pendingUpdate=a),function(){r&&(r._pendingUpdate=a)}}),i(function(){return r&&r._pendingUpdate&&(r._pendingUpdate(),r._pendingUpdate=null),function(){r&&r._pendingUpdate&&(r._pendingUpdate(),r._pendingUpdate=null)}}),null}},7668:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"warnOnce",{enumerable:!0,get:function(){return r}});var r=function(e){}},8039:(e,t,r)=>{"use strict";e.exports=r(7093).vendored.contexts.AmpContext},7443:(e,t,r)=>{"use strict";e.exports=r(7093).vendored.contexts.AppRouterContext},6218:(e,t,r)=>{"use strict";e.exports=r(7093).vendored.contexts.ImageConfigContext},5675:(e,t,r)=>{e.exports=r(3122)},1664:(e,t,r)=>{e.exports=r(8065)}};