(()=>{var t={};t.id=636,t.ids=[636],t.modules={8432:t=>{"use strict";t.exports=require("bcryptjs")},5142:t=>{"use strict";t.exports=require("dotenv")},9344:t=>{"use strict";t.exports=require("jsonwebtoken")},8013:t=>{"use strict";t.exports=require("mongodb")},145:t=>{"use strict";t.exports=require("next/dist/compiled/next-server/pages-api.runtime.prod.js")},5505:(t,r,e)=>{function n(t){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function o(){"use strict";o=function(){return r};var t,r={},e=Object.prototype,i=e.hasOwnProperty,a=Object.defineProperty||function(t,r,e){t[r]=e.value},c="function"==typeof Symbol?Symbol:{},u=c.iterator||"@@iterator",s=c.asyncIterator||"@@asyncIterator",l=c.toStringTag||"@@toStringTag";function f(t,r,e){return Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}),t[r]}try{f({},"")}catch(t){f=function(t,r,e){return t[r]=e}}function h(r,e,n,o){var i,c,u=Object.create((e&&e.prototype instanceof m?e:m).prototype);return a(u,"_invoke",{value:(i=new S(o||[]),c=y,function(e,o){if(c===v)throw Error("Generator is already running");if(c===d){if("throw"===e)throw o;return{value:t,done:!0}}for(i.method=e,i.arg=o;;){var a=i.delegate;if(a){var u=function r(e,n){var o=n.method,i=e.iterator[o];if(i===t)return n.delegate=null,"throw"===o&&e.iterator.return&&(n.method="return",n.arg=t,r(e,n),"throw"===n.method)||"return"!==o&&(n.method="throw",n.arg=TypeError("The iterator does not provide a '"+o+"' method")),g;var a=p(i,e.iterator,n.arg);if("throw"===a.type)return n.method="throw",n.arg=a.arg,n.delegate=null,g;var c=a.arg;return c?c.done?(n[e.resultName]=c.value,n.next=e.nextLoc,"return"!==n.method&&(n.method="next",n.arg=t),n.delegate=null,g):c:(n.method="throw",n.arg=TypeError("iterator result is not an object"),n.delegate=null,g)}(a,i);if(u){if(u===g)continue;return u}}if("next"===i.method)i.sent=i._sent=i.arg;else if("throw"===i.method){if(c===y)throw c=d,i.arg;i.dispatchException(i.arg)}else"return"===i.method&&i.abrupt("return",i.arg);c=v;var s=p(r,n,i);if("normal"===s.type){if(c=i.done?d:"suspendedYield",s.arg===g)continue;return{value:s.arg,done:i.done}}"throw"===s.type&&(c=d,i.method="throw",i.arg=s.arg)}})}),u}function p(t,r,e){try{return{type:"normal",arg:t.call(r,e)}}catch(t){return{type:"throw",arg:t}}}r.wrap=h;var y="suspendedStart",v="executing",d="completed",g={};function m(){}function w(){}function b(){}var x={};f(x,u,function(){return this});var E=Object.getPrototypeOf,L=E&&E(E(G([])));L&&L!==e&&i.call(L,u)&&(x=L);var k=b.prototype=m.prototype=Object.create(x);function P(t){["next","throw","return"].forEach(function(r){f(t,r,function(t){return this._invoke(r,t)})})}function O(t,r){var e;a(this,"_invoke",{value:function(o,a){function c(){return new r(function(e,c){!function e(o,a,c,u){var s=p(t[o],t,a);if("throw"!==s.type){var l=s.arg,f=l.value;return f&&"object"==n(f)&&i.call(f,"__await")?r.resolve(f.__await).then(function(t){e("next",t,c,u)},function(t){e("throw",t,c,u)}):r.resolve(f).then(function(t){l.value=t,c(l)},function(t){return e("throw",t,c,u)})}u(s.arg)}(o,a,e,c)})}return e=e?e.then(c,c):c()}})}function _(t){var r={tryLoc:t[0]};1 in t&&(r.catchLoc=t[1]),2 in t&&(r.finallyLoc=t[2],r.afterLoc=t[3]),this.tryEntries.push(r)}function j(t){var r=t.completion||{};r.type="normal",delete r.arg,t.completion=r}function S(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(_,this),this.reset(!0)}function G(r){if(r||""===r){var e=r[u];if(e)return e.call(r);if("function"==typeof r.next)return r;if(!isNaN(r.length)){var o=-1,a=function e(){for(;++o<r.length;)if(i.call(r,o))return e.value=r[o],e.done=!1,e;return e.value=t,e.done=!0,e};return a.next=a}}throw TypeError(n(r)+" is not iterable")}return w.prototype=b,a(k,"constructor",{value:b,configurable:!0}),a(b,"constructor",{value:w,configurable:!0}),w.displayName=f(b,l,"GeneratorFunction"),r.isGeneratorFunction=function(t){var r="function"==typeof t&&t.constructor;return!!r&&(r===w||"GeneratorFunction"===(r.displayName||r.name))},r.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,b):(t.__proto__=b,f(t,l,"GeneratorFunction")),t.prototype=Object.create(k),t},r.awrap=function(t){return{__await:t}},P(O.prototype),f(O.prototype,s,function(){return this}),r.AsyncIterator=O,r.async=function(t,e,n,o,i){void 0===i&&(i=Promise);var a=new O(h(t,e,n,o),i);return r.isGeneratorFunction(e)?a:a.next().then(function(t){return t.done?t.value:a.next()})},P(k),f(k,l,"Generator"),f(k,u,function(){return this}),f(k,"toString",function(){return"[object Generator]"}),r.keys=function(t){var r=Object(t),e=[];for(var n in r)e.push(n);return e.reverse(),function t(){for(;e.length;){var n=e.pop();if(n in r)return t.value=n,t.done=!1,t}return t.done=!0,t}},r.values=G,S.prototype={constructor:S,reset:function(r){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(j),!r)for(var e in this)"t"===e.charAt(0)&&i.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(r){if(this.done)throw r;var e=this;function n(n,o){return c.type="throw",c.arg=r,e.next=n,o&&(e.method="next",e.arg=t),!!o}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],c=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var u=i.call(a,"catchLoc"),s=i.call(a,"finallyLoc");if(u&&s){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!s)throw Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(t,r){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc<=this.prev&&i.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=r&&r<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=t,a.arg=r,o?(this.method="next",this.next=o.finallyLoc,g):this.complete(a)},complete:function(t,r){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&r&&(this.next=r),g},finish:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),j(e),g}},catch:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.tryLoc===t){var n=e.completion;if("throw"===n.type){var o=n.arg;j(e)}return o}}throw Error("illegal catch attempt")},delegateYield:function(r,e,n){return this.delegate={iterator:G(r),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=t),g}},r}function i(t,r,e,n,o,i,a){try{var c=t[i](a),u=c.value}catch(t){e(t);return}c.done?r(u):Promise.resolve(u).then(n,o)}function a(t){return function(){var r=this,e=arguments;return new Promise(function(n,o){var a=t.apply(r,e);function c(t){i(a,n,o,c,u,"next",t)}function u(t){i(a,n,o,c,u,"throw",t)}c(void 0)})}}var c,u=e(8013),s=u.MongoClient;u.ObjectID;var l=e(8432);e(5142).config();var f=process.env.MONGODB_URI;t.exports.connect=a(o().mark(function t(){return o().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,s.connect(f,{useNewUrlParser:!0,useUnifiedTopology:!0});case 3:c=t.sent.db().collection("users-information"),console.log("Connected to MongoDB"),t.next=13;break;case 9:throw t.prev=9,t.t0=t.catch(0),console.error("Error connecting to MongoDB:",t.t0),t.t0;case 13:case"end":return t.stop()}},t,null,[[0,9]])})),t.exports.registerUser=function(){var t=a(o().mark(function t(r){var e;return o().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,l.hash(r.password,10);case 3:return e=t.sent,t.next=6,c.insertOne({name:r.name,email:r.email,password:e});case 6:console.log("User successfully registered"),t.next=13;break;case 9:throw t.prev=9,t.t0=t.catch(0),console.error("Error registering user:",t.t0),t.t0;case 13:case"end":return t.stop()}},t,null,[[0,9]])}));return function(r){return t.apply(this,arguments)}}(),t.exports.checkUser=function(){var t=a(o().mark(function t(r,e){var n;return o().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,c.findOne({email:r});case 3:if(n=t.sent,console.log(e),console.log(n),n){t.next=8;break}return t.abrupt("return",null);case 8:return t.next=10,l.compare(e,n.password);case 10:if(t.sent){t.next=13;break}throw Error("Incorrect password");case 13:return t.abrupt("return",n);case 16:throw t.prev=16,t.t0=t.catch(0),console.error("Error checking user:",t.t0),t.t0;case 20:case"end":return t.stop()}},t,null,[[0,16]])}));return function(r,e){return t.apply(this,arguments)}}(),t.exports.checkUserPassword=function(){var t=a(o().mark(function t(r,e){var n;return o().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,c.findOne({email:r});case 3:if(n=t.sent){t.next=6;break}return t.abrupt("return",null);case 6:return t.next=8,l.compare(e,n.password);case 8:if(t.sent){t.next=11;break}return t.abrupt("return",null);case 11:return t.abrupt("return",n);case 14:throw t.prev=14,t.t0=t.catch(0),console.error("Error checking user password:",t.t0),t.t0;case 18:case"end":return t.stop()}},t,null,[[0,14]])}));return function(r,e){return t.apply(this,arguments)}}(),t.exports.updateUserInfo=function(){var t=a(o().mark(function t(r,e){var n;return o().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,c.updateOne({email:r},{$set:e});case 3:if(0!==(n=t.sent).modifiedCount){t.next=6;break}throw Error("User not found or no changes were made");case 6:return console.log("User information updated successfully"),t.abrupt("return",n);case 10:throw t.prev=10,t.t0=t.catch(0),console.error("Error updating user information:",t.t0),t.t0;case 14:case"end":return t.stop()}},t,null,[[0,10]])}));return function(r,e){return t.apply(this,arguments)}}()},6249:(t,r)=>{"use strict";Object.defineProperty(r,"l",{enumerable:!0,get:function(){return function t(r,e){return e in r?r[e]:"then"in r&&"function"==typeof r.then?r.then(r=>t(r,e)):"function"==typeof r&&"default"===e?r:void 0}}})},4101:(t,r,e)=>{"use strict";e.r(r),e.d(r,{config:()=>g,default:()=>d,routeModule:()=>m});var n={};e.r(n),e.d(n,{default:()=>y});var o=e(1802),i=e(7153),a=e(6249),c=e(9344),u=e.n(c),s=e(5505);function l(t){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function f(){f=function(){return r};var t,r={},e=Object.prototype,n=e.hasOwnProperty,o=Object.defineProperty||function(t,r,e){t[r]=e.value},i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",c=i.asyncIterator||"@@asyncIterator",u=i.toStringTag||"@@toStringTag";function s(t,r,e){return Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}),t[r]}try{s({},"")}catch(t){s=function(t,r,e){return t[r]=e}}function h(r,e,n,i){var a,c,u=Object.create((e&&e.prototype instanceof m?e:m).prototype);return o(u,"_invoke",{value:(a=new S(i||[]),c=y,function(e,o){if(c===v)throw Error("Generator is already running");if(c===d){if("throw"===e)throw o;return{value:t,done:!0}}for(a.method=e,a.arg=o;;){var i=a.delegate;if(i){var u=function r(e,n){var o=n.method,i=e.iterator[o];if(i===t)return n.delegate=null,"throw"===o&&e.iterator.return&&(n.method="return",n.arg=t,r(e,n),"throw"===n.method)||"return"!==o&&(n.method="throw",n.arg=TypeError("The iterator does not provide a '"+o+"' method")),g;var a=p(i,e.iterator,n.arg);if("throw"===a.type)return n.method="throw",n.arg=a.arg,n.delegate=null,g;var c=a.arg;return c?c.done?(n[e.resultName]=c.value,n.next=e.nextLoc,"return"!==n.method&&(n.method="next",n.arg=t),n.delegate=null,g):c:(n.method="throw",n.arg=TypeError("iterator result is not an object"),n.delegate=null,g)}(i,a);if(u){if(u===g)continue;return u}}if("next"===a.method)a.sent=a._sent=a.arg;else if("throw"===a.method){if(c===y)throw c=d,a.arg;a.dispatchException(a.arg)}else"return"===a.method&&a.abrupt("return",a.arg);c=v;var s=p(r,n,a);if("normal"===s.type){if(c=a.done?d:"suspendedYield",s.arg===g)continue;return{value:s.arg,done:a.done}}"throw"===s.type&&(c=d,a.method="throw",a.arg=s.arg)}})}),u}function p(t,r,e){try{return{type:"normal",arg:t.call(r,e)}}catch(t){return{type:"throw",arg:t}}}r.wrap=h;var y="suspendedStart",v="executing",d="completed",g={};function m(){}function w(){}function b(){}var x={};s(x,a,function(){return this});var E=Object.getPrototypeOf,L=E&&E(E(G([])));L&&L!==e&&n.call(L,a)&&(x=L);var k=b.prototype=m.prototype=Object.create(x);function P(t){["next","throw","return"].forEach(function(r){s(t,r,function(t){return this._invoke(r,t)})})}function O(t,r){var e;o(this,"_invoke",{value:function(o,i){function a(){return new r(function(e,a){!function e(o,i,a,c){var u=p(t[o],t,i);if("throw"!==u.type){var s=u.arg,f=s.value;return f&&"object"==l(f)&&n.call(f,"__await")?r.resolve(f.__await).then(function(t){e("next",t,a,c)},function(t){e("throw",t,a,c)}):r.resolve(f).then(function(t){s.value=t,a(s)},function(t){return e("throw",t,a,c)})}c(u.arg)}(o,i,e,a)})}return e=e?e.then(a,a):a()}})}function _(t){var r={tryLoc:t[0]};1 in t&&(r.catchLoc=t[1]),2 in t&&(r.finallyLoc=t[2],r.afterLoc=t[3]),this.tryEntries.push(r)}function j(t){var r=t.completion||{};r.type="normal",delete r.arg,t.completion=r}function S(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(_,this),this.reset(!0)}function G(r){if(r||""===r){var e=r[a];if(e)return e.call(r);if("function"==typeof r.next)return r;if(!isNaN(r.length)){var o=-1,i=function e(){for(;++o<r.length;)if(n.call(r,o))return e.value=r[o],e.done=!1,e;return e.value=t,e.done=!0,e};return i.next=i}}throw TypeError(l(r)+" is not iterable")}return w.prototype=b,o(k,"constructor",{value:b,configurable:!0}),o(b,"constructor",{value:w,configurable:!0}),w.displayName=s(b,u,"GeneratorFunction"),r.isGeneratorFunction=function(t){var r="function"==typeof t&&t.constructor;return!!r&&(r===w||"GeneratorFunction"===(r.displayName||r.name))},r.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,b):(t.__proto__=b,s(t,u,"GeneratorFunction")),t.prototype=Object.create(k),t},r.awrap=function(t){return{__await:t}},P(O.prototype),s(O.prototype,c,function(){return this}),r.AsyncIterator=O,r.async=function(t,e,n,o,i){void 0===i&&(i=Promise);var a=new O(h(t,e,n,o),i);return r.isGeneratorFunction(e)?a:a.next().then(function(t){return t.done?t.value:a.next()})},P(k),s(k,u,"Generator"),s(k,a,function(){return this}),s(k,"toString",function(){return"[object Generator]"}),r.keys=function(t){var r=Object(t),e=[];for(var n in r)e.push(n);return e.reverse(),function t(){for(;e.length;){var n=e.pop();if(n in r)return t.value=n,t.done=!1,t}return t.done=!0,t}},r.values=G,S.prototype={constructor:S,reset:function(r){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(j),!r)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(r){if(this.done)throw r;var e=this;function o(n,o){return c.type="throw",c.arg=r,e.next=n,o&&(e.method="next",e.arg=t),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var u=n.call(a,"catchLoc"),s=n.call(a,"finallyLoc");if(u&&s){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!s)throw Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,r){for(var e=this.tryEntries.length-1;e>=0;--e){var o=this.tryEntries[e];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=r&&r<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=r,i?(this.method="next",this.next=i.finallyLoc,g):this.complete(a)},complete:function(t,r){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&r&&(this.next=r),g},finish:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),j(e),g}},catch:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.tryLoc===t){var n=e.completion;if("throw"===n.type){var o=n.arg;j(e)}return o}}throw Error("illegal catch attempt")},delegateYield:function(r,e,n){return this.delegate={iterator:G(r),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=t),g}},r}function h(t,r,e,n,o,i,a){try{var c=t[i](a),u=c.value}catch(t){e(t);return}c.done?r(u):Promise.resolve(u).then(n,o)}function p(t){return function(){var r=this,e=arguments;return new Promise(function(n,o){var i=t.apply(r,e);function a(t){h(i,n,o,a,c,"next",t)}function c(t){h(i,n,o,a,c,"throw",t)}a(void 0)})}}function y(t,r){return v.apply(this,arguments)}function v(){return(v=p(f().mark(function t(r,e){var n;return f().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(n=function(){var t=p(f().mark(function t(){var n,o,i,a,c,l;return f().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,o=(n=r.body).email,i=n.password,!(!o||!i)){t.next=4;break}return t.abrupt("return",e.status(400).json({success:!1,message:"Email and password are required"}));case 4:return t.next=6,(0,s.checkUser)(o,i);case 6:if(console.log(a=t.sent),!a){t.next=16;break}return c={id:a._id,name:a.name,email:a.email},t.next=12,u().sign(c,process.env.TOKEN_SECRET);case 12:l=t.sent,e.json({success:!0,message:"Login Successful",token:l}),t.next=17;break;case 16:e.status(401).json({success:!1,message:"Invalid email or password"});case 17:t.next=23;break;case 19:t.prev=19,t.t0=t.catch(0),console.log("Error logging in user:",t.t0),e.status(500).json({error:"Internal server error"});case 23:case"end":return t.stop()}},t,null,[[0,19]])}));return function(){return t.apply(this,arguments)}}(),"POST"!==r.method){t.next=6;break}return t.next=4,n();case 4:t.next=8;break;case 6:e.setHeader("Allow",["POST"]),e.status(405).end("Method ".concat(r.method," Not Allowed"));case 8:case"end":return t.stop()}},t)}))).apply(this,arguments)}let d=(0,a.l)(n,"default"),g=(0,a.l)(n,"config"),m=new o.PagesAPIRouteModule({definition:{kind:i.x.PAGES_API,page:"/api/get-user-info",pathname:"/api/get-user-info",bundlePath:"",filename:""},userland:n})},7153:(t,r)=>{"use strict";var e;Object.defineProperty(r,"x",{enumerable:!0,get:function(){return e}}),function(t){t.PAGES="PAGES",t.PAGES_API="PAGES_API",t.APP_PAGE="APP_PAGE",t.APP_ROUTE="APP_ROUTE"}(e||(e={}))},1802:(t,r,e)=>{"use strict";t.exports=e(145)}};var r=require("../../webpack-api-runtime.js");r.C(t);var e=r(r.s=4101);module.exports=e})();