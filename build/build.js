!function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="build/",n(n.s=0)}([function(t,e,n){"use strict";n.r(e);n(1);var r=function(t){var e=document.createElement("button");e.className="button-with-counter",e.textContent=t,document.querySelector("body").append(e)},o=document.querySelector("body"),u=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=["клик","клика","кликов"],n=[2,0,1,1,1,2];return t+" "+e[t%100>4&&t%100<20?2:n[t%10<5?t%10:5]]};r(u()),r(u(2)),r(u(5)),o.addEventListener("click",(function(t){if(console.log(t),t.target.querySelector=".button-with-counter"){var e=parseInt(t.target.textContent)+1;t.target.textContent=u(e)}}))},function(t,e){}]);