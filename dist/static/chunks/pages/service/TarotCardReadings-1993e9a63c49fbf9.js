(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[928],{48158:function(e,t,r){var n=r(83454),s=r(12092);r(91479);var i=r(67294),o=i&&"object"===s(i)&&"default"in i?i:{default:i},a=void 0!==n&&n.env&&!0,c=function(e){return"[object String]"===Object.prototype.toString.call(e)},l=function(){function e(e){var t=void 0===e?{}:e,r=t.name,n=void 0===r?"stylesheet":r,s=t.optimizeForSpeed,i=void 0===s?a:s;u(c(n),"`name` must be a string"),this._name=n,this._deletedRulePlaceholder="#"+n+"-deleted-rule____{}",u("boolean"==typeof i,"`optimizeForSpeed` must be a boolean"),this._optimizeForSpeed=i,this._serverSheet=void 0,this._tags=[],this._injected=!1,this._rulesCount=0;var o=document.querySelector('meta[property="csp-nonce"]');this._nonce=o?o.getAttribute("content"):null}var t=e.prototype;return t.setOptimizeForSpeed=function(e){u("boolean"==typeof e,"`setOptimizeForSpeed` accepts a boolean"),u(0===this._rulesCount,"optimizeForSpeed cannot be when rules have already been inserted"),this.flush(),this._optimizeForSpeed=e,this.inject()},t.isOptimizeForSpeed=function(){return this._optimizeForSpeed},t.inject=function(){var e=this;if(u(!this._injected,"sheet already injected"),this._injected=!0,this._optimizeForSpeed){this._tags[0]=this.makeStyleTag(this._name),this._optimizeForSpeed="insertRule"in this.getSheet(),this._optimizeForSpeed||(a||console.warn("StyleSheet: optimizeForSpeed mode not supported falling back to standard mode."),this.flush(),this._injected=!0);return}this._serverSheet={cssRules:[],insertRule:function(t,r){return"number"==typeof r?e._serverSheet.cssRules[r]={cssText:t}:e._serverSheet.cssRules.push({cssText:t}),r},deleteRule:function(t){e._serverSheet.cssRules[t]=null}}},t.getSheetForTag=function(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]},t.getSheet=function(){return this.getSheetForTag(this._tags[this._tags.length-1])},t.insertRule=function(e,t){if(u(c(e),"`insertRule` accepts only strings"),this._optimizeForSpeed){var r=this.getSheet();"number"!=typeof t&&(t=r.cssRules.length);try{r.insertRule(e,t)}catch(t){return a||console.warn("StyleSheet: illegal rule: \n\n"+e+"\n\nSee https://stackoverflow.com/q/20007992 for more info"),-1}}else{var n=this._tags[t];this._tags.push(this.makeStyleTag(this._name,e,n))}return this._rulesCount++},t.replaceRule=function(e,t){if(this._optimizeForSpeed){var r=this.getSheet();if(t.trim()||(t=this._deletedRulePlaceholder),!r.cssRules[e])return e;r.deleteRule(e);try{r.insertRule(t,e)}catch(n){a||console.warn("StyleSheet: illegal rule: \n\n"+t+"\n\nSee https://stackoverflow.com/q/20007992 for more info"),r.insertRule(this._deletedRulePlaceholder,e)}}else{var n=this._tags[e];u(n,"old rule at index `"+e+"` not found"),n.textContent=t}return e},t.deleteRule=function(e){if(this._optimizeForSpeed)this.replaceRule(e,"");else{var t=this._tags[e];u(t,"rule at index `"+e+"` not found"),t.parentNode.removeChild(t),this._tags[e]=null}},t.flush=function(){this._injected=!1,this._rulesCount=0,this._tags.forEach(function(e){return e&&e.parentNode.removeChild(e)}),this._tags=[]},t.cssRules=function(){var e=this;return this._tags.reduce(function(t,r){return r?t=t.concat(Array.prototype.map.call(e.getSheetForTag(r).cssRules,function(t){return t.cssText===e._deletedRulePlaceholder?null:t})):t.push(null),t},[])},t.makeStyleTag=function(e,t,r){t&&u(c(t),"makeStyleTag accepts only strings as second parameter");var n=document.createElement("style");this._nonce&&n.setAttribute("nonce",this._nonce),n.type="text/css",n.setAttribute("data-"+e,""),t&&n.appendChild(document.createTextNode(t));var s=document.head||document.getElementsByTagName("head")[0];return r?s.insertBefore(n,r):s.appendChild(n),n},function(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}(e.prototype,[{key:"length",get:function(){return this._rulesCount}}]),e}();function u(e,t){if(!e)throw Error("StyleSheet: "+t+".")}var d=function(e){for(var t=5381,r=e.length;r;)t=33*t^e.charCodeAt(--r);return t>>>0},h={};function m(e,t){if(!t)return"jsx-"+e;var r=String(t),n=e+r;return h[n]||(h[n]="jsx-"+d(e+"-"+r)),h[n]}function f(e,t){var r=e+t;return h[r]||(h[r]=t.replace(/__jsx-style-dynamic-selector/g,e)),h[r]}var p=function(){function e(e){var t=void 0===e?{}:e,r=t.styleSheet,n=void 0===r?null:r,s=t.optimizeForSpeed,i=void 0!==s&&s;this._sheet=n||new l({name:"styled-jsx",optimizeForSpeed:i}),this._sheet.inject(),n&&"boolean"==typeof i&&(this._sheet.setOptimizeForSpeed(i),this._optimizeForSpeed=this._sheet.isOptimizeForSpeed()),this._fromServer=void 0,this._indices={},this._instancesCounts={}}var t=e.prototype;return t.add=function(e){var t=this;void 0===this._optimizeForSpeed&&(this._optimizeForSpeed=Array.isArray(e.children),this._sheet.setOptimizeForSpeed(this._optimizeForSpeed),this._optimizeForSpeed=this._sheet.isOptimizeForSpeed()),this._fromServer||(this._fromServer=this.selectFromServer(),this._instancesCounts=Object.keys(this._fromServer).reduce(function(e,t){return e[t]=0,e},{}));var r=this.getIdAndRules(e),n=r.styleId,s=r.rules;if(n in this._instancesCounts){this._instancesCounts[n]+=1;return}var i=s.map(function(e){return t._sheet.insertRule(e)}).filter(function(e){return -1!==e});this._indices[n]=i,this._instancesCounts[n]=1},t.remove=function(e){var t=this,r=this.getIdAndRules(e).styleId;if(function(e,t){if(!e)throw Error("StyleSheetRegistry: "+t+".")}(r in this._instancesCounts,"styleId: `"+r+"` not found"),this._instancesCounts[r]-=1,this._instancesCounts[r]<1){var n=this._fromServer&&this._fromServer[r];n?(n.parentNode.removeChild(n),delete this._fromServer[r]):(this._indices[r].forEach(function(e){return t._sheet.deleteRule(e)}),delete this._indices[r]),delete this._instancesCounts[r]}},t.update=function(e,t){this.add(t),this.remove(e)},t.flush=function(){this._sheet.flush(),this._sheet.inject(),this._fromServer=void 0,this._indices={},this._instancesCounts={}},t.cssRules=function(){var e=this,t=this._fromServer?Object.keys(this._fromServer).map(function(t){return[t,e._fromServer[t]]}):[],r=this._sheet.cssRules();return t.concat(Object.keys(this._indices).map(function(t){return[t,e._indices[t].map(function(e){return r[e].cssText}).join(e._optimizeForSpeed?"":"\n")]}).filter(function(e){return!!e[1]}))},t.styles=function(e){var t,r;return t=this.cssRules(),void 0===(r=e)&&(r={}),t.map(function(e){var t=e[0],n=e[1];return o.default.createElement("style",{id:"__"+t,key:"__"+t,nonce:r.nonce?r.nonce:void 0,dangerouslySetInnerHTML:{__html:n}})})},t.getIdAndRules=function(e){var t=e.children,r=e.dynamic,n=e.id;if(r){var s=m(n,r);return{styleId:s,rules:Array.isArray(t)?t.map(function(e){return f(s,e)}):[f(s,t)]}}return{styleId:m(n),rules:Array.isArray(t)?t:[t]}},t.selectFromServer=function(){return Array.prototype.slice.call(document.querySelectorAll('[id^="__jsx-"]')).reduce(function(e,t){return e[t.id.slice(2)]=t,e},{})},e}(),v=i.createContext(null);v.displayName="StyleSheetContext";var g=o.default.useInsertionEffect||o.default.useLayoutEffect,y=new p;function _(e){var t=y||i.useContext(v);return t&&g(function(){return t.add(e),function(){t.remove(e)}},[e.id,String(e.dynamic)]),null}_.dynamic=function(e){return e.map(function(e){return m(e[0],e[1])}).join(" ")},t.style=_},79760:function(e,t,r){e.exports=r(48158).style},97049:function(e,t,r){"use strict";r.r(t);var n=r(79760),s=r.n(n),i=r(67294),o=r(41664),a=r.n(o),c=r(25675),l=r.n(c);t.default=function(){return i.createElement("div",{className:"jsx-2444115128"},i.createElement("nav",{className:"jsx-2444115128 navbar navbar-expand-lg navbar-dark bg-dark"},i.createElement("div",{className:"jsx-2444115128 container"},i.createElement(a(),{className:"navbar-brand",href:"/dashboard"},i.createElement(l(),{src:"/logo.jpeg",alt:"Logo",width:30,height:30,className:"d-inline-block align-top"}),i.createElement("span",{className:"jsx-2444115128 ms-2"},"Astrology")),i.createElement("button",{type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation",className:"jsx-2444115128 navbar-toggler"},i.createElement("span",{className:"jsx-2444115128 navbar-toggler-icon"})),i.createElement("div",{id:"navbarNav",className:"jsx-2444115128 collapse navbar-collapse justify-content-end"},i.createElement("ul",{className:"jsx-2444115128 navbar-nav"},i.createElement("li",{className:"jsx-2444115128 nav-item"},i.createElement(a(),{className:"nav-link",href:"/about"},"About Us")),i.createElement("li",{className:"jsx-2444115128 nav-item"},i.createElement(a(),{className:"nav-link",href:"/contactUs"},"Contact Us")),i.createElement("li",{className:"jsx-2444115128 nav-item"},i.createElement(a(),{className:"nav-link",href:"/services"},"Our Services")))))),i.createElement("div",{className:"jsx-2444115128 container mt-4"},i.createElement("div",{className:"jsx-2444115128 card"},i.createElement("div",{className:"jsx-2444115128 row g-0"},i.createElement("div",{className:"jsx-2444115128 col-md-3"},i.createElement(l(),{src:"/Tarot Card Readings.jpeg",alt:"Tarot Card Readings",width:300,height:400,className:"card-img"})),i.createElement("div",{className:"jsx-2444115128 col-md-8"},i.createElement("div",{className:"jsx-2444115128 card-body"},i.createElement("h5",{className:"jsx-2444115128 card-title"},"Tarot Card Readings"),i.createElement("p",{className:"jsx-2444115128 card-text"},"Tarot Card Readings provide insight into your past, present, and future. Our experienced readers interpret the cards to uncover hidden truths and guide you on your spiritual journey."),i.createElement("p",{className:"jsx-2444115128 card-text"},"Discover the dynamics of your relationships with Astrological Compatibility Analysis. Our expert astrologers analyze the alignment of celestial bodies to provide insights into the compatibility between you and your partner."),i.createElement("p",{className:"jsx-2444115128 card-text"},"Uncover potential challenges and strengths in your relationship, and gain a deeper understanding of each other's personalities and needs."),i.createElement("p",{className:"jsx-2444115128 card-text"},"Whether you're seeking clarity on love, career, or personal growth, our Tarot Card Readings offer valuable perspectives and empower you to make informed decisions."),i.createElement("p",{className:"jsx-2444115128 card-text"},"Whether you're seeking clarity on love, career, or personal growth, our Tarot Card Readings offer valuable perspectives and empower you to make informed decisions."),i.createElement(a(),{href:"/service/tarot-card-readings-details"},i.createElement("legacyBehavior",{className:"jsx-2444115128 btn btn-primary me-2"},"Learn More")),i.createElement(a(),{href:"/service/tarot-card-readings-booking"},i.createElement("legacyBehavior",{className:"jsx-2444115128 btn btn-secondary"},"Book Now"))))))),i.createElement(s(),{id:"2444115128"},[".card-img.jsx-2444115128{border-top-left-radius:8px;border-bottom-left-radius:8px;}",".card-body.jsx-2444115128{padding:1.25rem;}",".card-title.jsx-2444115128{font-size:1.25rem;font-weight:bold;margin-bottom:0.75rem;}",".card-text.jsx-2444115128{font-size:1rem;color:#555;margin-bottom:0.75rem;}",".btn-primary.jsx-2444115128{background-color:#007bff;border-color:#007bff;}",".btn-primary.jsx-2444115128:hover{background-color:#0056b3;border-color:#0056b3;}",".btn-secondary.jsx-2444115128{background-color:#6c757d;border-color:#6c757d;}",".btn-secondary.jsx-2444115128:hover{background-color:#5a6268;border-color:#5a6268;}"]))}},83454:function(e,t,r){"use strict";var n,s;e.exports=(null==(n=r.g.process)?void 0:n.env)&&"object"==typeof(null==(s=r.g.process)?void 0:s.env)?r.g.process:r(77663)},42616:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/service/TarotCardReadings",function(){return r(97049)}])},91479:function(){},77663:function(e){!function(){var t={229:function(e){var t,r,n,s=e.exports={};function i(){throw Error("setTimeout has not been defined")}function o(){throw Error("clearTimeout has not been defined")}function a(e){if(t===setTimeout)return setTimeout(e,0);if((t===i||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(r){try{return t.call(null,e,0)}catch(r){return t.call(this,e,0)}}}!function(){try{t="function"==typeof setTimeout?setTimeout:i}catch(e){t=i}try{r="function"==typeof clearTimeout?clearTimeout:o}catch(e){r=o}}();var c=[],l=!1,u=-1;function d(){l&&n&&(l=!1,n.length?c=n.concat(c):u=-1,c.length&&h())}function h(){if(!l){var e=a(d);l=!0;for(var t=c.length;t;){for(n=c,c=[];++u<t;)n&&n[u].run();u=-1,t=c.length}n=null,l=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===o||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function m(e,t){this.fun=e,this.array=t}function f(){}s.nextTick=function(e){var t=Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)t[r-1]=arguments[r];c.push(new m(e,t)),1!==c.length||l||a(h)},m.prototype.run=function(){this.fun.apply(null,this.array)},s.title="browser",s.browser=!0,s.env={},s.argv=[],s.version="",s.versions={},s.on=f,s.addListener=f,s.once=f,s.off=f,s.removeListener=f,s.removeAllListeners=f,s.emit=f,s.prependListener=f,s.prependOnceListener=f,s.listeners=function(e){return[]},s.binding=function(e){throw Error("process.binding is not supported")},s.cwd=function(){return"/"},s.chdir=function(e){throw Error("process.chdir is not supported")},s.umask=function(){return 0}}},r={};function n(e){var s=r[e];if(void 0!==s)return s.exports;var i=r[e]={exports:{}},o=!0;try{t[e](i,i.exports,n),o=!1}finally{o&&delete r[e]}return i.exports}n.ab="//";var s=n(229);e.exports=s}()}},function(e){e.O(0,[61,888,774,179],function(){return e(e.s=42616)}),_N_E=e.O()}]);