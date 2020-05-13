// ==UserScript==
// @name    MTDeck4iOS
// @version 1.0.0
// @author  nakano57 <hiroto856@gmail.com>
// @match   https://tweetdeck.twitter.com
// ==/UserScript==

!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=3)}([function(e,t,n){var o={"./en/messages.json":1,"./ja/messages.json":2};function r(e){var t=i(e);return n(t)}function i(e){if(!n.o(o,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return o[e]}r.keys=function(){return Object.keys(o)},r.resolve=i,e.exports=r,r.id=0},function(e){e.exports=JSON.parse('{"configQuitLabel":{"message":"Quit"}}')},function(e){e.exports=JSON.parse('{"configQuitLabel":{"message":"終了"}}')},function(e,t,n){"use strict";n.r(t);var o=function(){function e(){}return e.prototype.init=function(){this.lockZoom()},e.prototype.lockZoom=function(){var e=document.querySelector("meta[name=viewport]");if(!e){var t=document.createElement("meta");t.name="viewport",document.querySelector("head").appendChild(t)}e.setAttribute("content","width=device-width, initial-scale=1, maximum-scale=1 user-scalable=no")},e}(),r=function(){function e(){}return e.prototype.init=function(){this.addButton()},e.prototype.addButton=function(){var e,t=this;document.querySelector(".mtdeck-config-footer").appendChild((e='\n        <button id="mtdeck-config-quit">'+function(e){if("undefined"!=typeof chrome&&void 0!==chrome.i18n)return chrome.i18n.getMessage(e);var t=/ja/.test(window.navigator.language)?"ja":"en";return n(0)("./"+t+"/messages.json")[e].message||""}("configQuitLabel")+"</button>\n    ",(new DOMParser).parseFromString(e,"text/html").querySelector("body").firstElementChild)),document.querySelector("#mtdeck-config-quit").addEventListener("click",(function(){t.quite(),location.reload()}))},e.prototype.quite=function(){location.href="pyto://x-callback/?code=[superview.close()]"},e}(),i=new o,u=new r;i.init(),u.init()}]);