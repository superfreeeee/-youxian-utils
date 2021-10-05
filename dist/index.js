!function(e,r){"object"==typeof exports&&"object"==typeof module?module.exports=r(require("react")):"function"==typeof define&&define.amd?define(["react"],r):"object"==typeof exports?exports.__youxian_utils=r(require("react")):e.__youxian_utils=r(e.react)}(self,(function(e){return(()=>{var r={849:(e,r,t)=>{var n;r.formatArgs=function(r){if(r[0]=(this.useColors?"%c":"")+this.namespace+(this.useColors?" %c":" ")+r[0]+(this.useColors?"%c ":" ")+"+"+e.exports.humanize(this.diff),this.useColors){var t="color: "+this.color;r.splice(1,0,t,"color: inherit");var n=0,o=0;r[0].replace(/%[a-zA-Z%]/g,(function(e){"%%"!==e&&(n++,"%c"===e&&(o=n))})),r.splice(o,0,t)}},r.save=function(e){try{e?r.storage.setItem("debug",e):r.storage.removeItem("debug")}catch(e){}},r.load=function(){var e;try{e=r.storage.getItem("debug")}catch(e){}return!e&&"undefined"!=typeof process&&"env"in process&&(e=process.env.DEBUG),e},r.useColors=function(){return!("undefined"==typeof window||!window.process||"renderer"!==window.process.type&&!window.process.__nwjs)||("undefined"==typeof navigator||!navigator.userAgent||!navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/))&&("undefined"!=typeof document&&document.documentElement&&document.documentElement.style&&document.documentElement.style.WebkitAppearance||"undefined"!=typeof window&&window.console&&(window.console.firebug||window.console.exception&&window.console.table)||"undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)&&parseInt(RegExp.$1,10)>=31||"undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/))},r.storage=function(){try{return localStorage}catch(e){}}(),r.destroy=(n=!1,function(){n||(n=!0,console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`."))}),r.colors=["#0000CC","#0000FF","#0033CC","#0033FF","#0066CC","#0066FF","#0099CC","#0099FF","#00CC00","#00CC33","#00CC66","#00CC99","#00CCCC","#00CCFF","#3300CC","#3300FF","#3333CC","#3333FF","#3366CC","#3366FF","#3399CC","#3399FF","#33CC00","#33CC33","#33CC66","#33CC99","#33CCCC","#33CCFF","#6600CC","#6600FF","#6633CC","#6633FF","#66CC00","#66CC33","#9900CC","#9900FF","#9933CC","#9933FF","#99CC00","#99CC33","#CC0000","#CC0033","#CC0066","#CC0099","#CC00CC","#CC00FF","#CC3300","#CC3333","#CC3366","#CC3399","#CC33CC","#CC33FF","#CC6600","#CC6633","#CC9900","#CC9933","#CCCC00","#CCCC33","#FF0000","#FF0033","#FF0066","#FF0099","#FF00CC","#FF00FF","#FF3300","#FF3333","#FF3366","#FF3399","#FF33CC","#FF33FF","#FF6600","#FF6633","#FF9900","#FF9933","#FFCC00","#FFCC33"],r.log=console.debug||console.log||function(){},e.exports=t(180)(r),e.exports.formatters.j=function(e){try{return JSON.stringify(e)}catch(e){return"[UnexpectedJSONParseError]: "+e.message}}},180:(e,r,t)=>{function n(e){return function(e){if(Array.isArray(e))return o(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,r){if(e){if("string"==typeof e)return o(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?o(e,r):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}e.exports=function(e){function r(e){var t,n,a,s=null;function i(){for(var e=arguments.length,n=new Array(e),o=0;o<e;o++)n[o]=arguments[o];if(i.enabled){var a=i,s=Number(new Date),u=s-(t||s);a.diff=u,a.prev=t,a.curr=s,t=s,n[0]=r.coerce(n[0]),"string"!=typeof n[0]&&n.unshift("%O");var c=0;n[0]=n[0].replace(/%([a-zA-Z%])/g,(function(e,t){if("%%"===e)return"%";c++;var o=r.formatters[t];if("function"==typeof o){var s=n[c];e=o.call(a,s),n.splice(c,1),c--}return e})),r.formatArgs.call(a,n);var l=a.log||r.log;l.apply(a,n)}}return i.namespace=e,i.useColors=r.useColors(),i.color=r.selectColor(e),i.extend=o,i.destroy=r.destroy,Object.defineProperty(i,"enabled",{enumerable:!0,configurable:!1,get:function(){return null!==s?s:(n!==r.namespaces&&(n=r.namespaces,a=r.enabled(e)),a)},set:function(e){s=e}}),"function"==typeof r.init&&r.init(i),i}function o(e,t){var n=r(this.namespace+(void 0===t?":":t)+e);return n.log=this.log,n}function a(e){return e.toString().substring(2,e.toString().length-2).replace(/\.\*\?$/,"*")}return r.debug=r,r.default=r,r.coerce=function(e){return e instanceof Error?e.stack||e.message:e},r.disable=function(){var e=[].concat(n(r.names.map(a)),n(r.skips.map(a).map((function(e){return"-"+e})))).join(",");return r.enable(""),e},r.enable=function(e){var t;r.save(e),r.namespaces=e,r.names=[],r.skips=[];var n=("string"==typeof e?e:"").split(/[\s,]+/),o=n.length;for(t=0;t<o;t++)n[t]&&("-"===(e=n[t].replace(/\*/g,".*?"))[0]?r.skips.push(new RegExp("^"+e.substr(1)+"$")):r.names.push(new RegExp("^"+e+"$")))},r.enabled=function(e){if("*"===e[e.length-1])return!0;var t,n;for(t=0,n=r.skips.length;t<n;t++)if(r.skips[t].test(e))return!1;for(t=0,n=r.names.length;t<n;t++)if(r.names[t].test(e))return!0;return!1},r.humanize=t(440),r.destroy=function(){console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.")},Object.keys(e).forEach((function(t){r[t]=e[t]})),r.names=[],r.skips=[],r.formatters={},r.selectColor=function(e){for(var t=0,n=0;n<e.length;n++)t=(t<<5)-t+e.charCodeAt(n),t|=0;return r.colors[Math.abs(t)%r.colors.length]},r.enable(r.load()),r}},440:e=>{function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}var t=1e3,n=60*t,o=60*n,a=24*o;function s(e,r,t,n){var o=r>=1.5*t;return Math.round(e/t)+" "+n+(o?"s":"")}e.exports=function(e,i){i=i||{};var u,c,l=r(e);if("string"===l&&e.length>0)return function(e){if(!((e=String(e)).length>100)){var r=/^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(e);if(r){var s=parseFloat(r[1]);switch((r[2]||"ms").toLowerCase()){case"years":case"year":case"yrs":case"yr":case"y":return 315576e5*s;case"weeks":case"week":case"w":return 6048e5*s;case"days":case"day":case"d":return s*a;case"hours":case"hour":case"hrs":case"hr":case"h":return s*o;case"minutes":case"minute":case"mins":case"min":case"m":return s*n;case"seconds":case"second":case"secs":case"sec":case"s":return s*t;case"milliseconds":case"millisecond":case"msecs":case"msec":case"ms":return s;default:return}}}}(e);if("number"===l&&isFinite(e))return i.long?(u=e,(c=Math.abs(u))>=a?s(u,c,a,"day"):c>=o?s(u,c,o,"hour"):c>=n?s(u,c,n,"minute"):c>=t?s(u,c,t,"second"):u+" ms"):function(e){var r=Math.abs(e);return r>=a?Math.round(e/a)+"d":r>=o?Math.round(e/o)+"h":r>=n?Math.round(e/n)+"m":r>=t?Math.round(e/t)+"s":e+"ms"}(e);throw new Error("val is not a non-empty string or a valid number. val="+JSON.stringify(e))}},156:r=>{"use strict";r.exports=e}},t={};function n(e){var o=t[e];if(void 0!==o)return o.exports;var a=t[e]={exports:{}};return r[e](a,a.exports,n),a.exports}n.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return n.d(r,{a:r}),r},n.d=(e,r)=>{for(var t in r)n.o(r,t)&&!n.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},n.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var o={};return(()=>{"use strict";n.r(o),n.d(o,{cache:()=>m,createSpecificTimer:()=>g,debounce:()=>p,throttle:()=>y,tryParse:()=>d,tryStringify:()=>C,useForceUpdate:()=>i,useMount:()=>r,useUnMount:()=>t,useUpdate:()=>a});var e=n(156);const r=function(r){(0,e.useEffect)(r,[])},t=function(r){(0,e.useEffect)((function(){return r}),[])},a=function(r,t){(0,e.useEffect)(r,t)};function s(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}const i=function(){var r,t,n=(r=(0,e.useState)(!1),t=2,function(e){if(Array.isArray(e))return e}(r)||function(e,r){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var n,o,a=[],s=!0,i=!1;try{for(t=t.call(e);!(s=(n=t.next()).done)&&(a.push(n.value),!r||a.length!==r);s=!0);}catch(e){i=!0,o=e}finally{try{s||null==t.return||t.return()}finally{if(i)throw o}}return a}}(r,t)||function(e,r){if(e){if("string"==typeof e)return s(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?s(e,r):void 0}}(r,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=n[0],a=n[1];return(0,e.useCallback)((function(){return a(!o)}),[o])};var u=n(849),c=n.n(u)()("utils:dev"),l={info:c,warn:function(e){for(var r=arguments.length,t=new Array(r>1?r-1:0),n=1;n<r;n++)t[n-1]=arguments[n];return c.apply(void 0,["[warn] ".concat(e)].concat(t))},error:function(e){for(var r=arguments.length,t=new Array(r>1?r-1:0),n=1;n<r;n++)t[n-1]=arguments[n];return c.apply(void 0,["[error] ".concat(e)].concat(t))}};const f=l;var d=function(e){try{return JSON.parse(e)}catch(e){return f.error("tryParse fail"),{}}},C=function(e){try{return JSON.stringify(e)}catch(e){return f.error("tryStringify fail"),{}}},p=function(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:300,t=null;return function(){for(var n=arguments.length,o=new Array(n),a=0;a<n;a++)o[a]=arguments[a];clearTimeout(t),t=setTimeout((function(){e.apply(void 0,o)}),r)}},y=function(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:300,t=!1;return function(){for(var n=arguments.length,o=new Array(n),a=0;a<n;a++)o[a]=arguments[a];t||(t=!0,setTimeout((function(){e.apply(void 0,o),t=!1}),r))}},m=function(e){var r=null,t=!1;return function(){return t||(r=e.apply(void 0,arguments),t=!0,e=null),r}},g=function(e){var r=Date.now();return{reset:function(){r=Date.now()},next:function(t){var n=Math.max(r+e-Date.now(),0),o=setTimeout(t,n);return function(){clearTimeout(o)}}}}})(),o})()}));