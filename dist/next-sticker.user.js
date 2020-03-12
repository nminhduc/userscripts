// ==UserScript==
// @name        Next Sticker Dev
// @version     1.3.0
// @author      greans@voz
// @description Add Sticker to your post
// @homepage    https://next.voz.vn/threads/userscript-sticker-cho-next.854/
// @supportURL  https://next.voz.vn/threads/userscript-sticker-cho-next.854/
// @match       https://*.voz.vn/*
// @namespace   Next
// @updateURL   https://gist.githubusercontent.com/phonglk/915ecd87e1d14dfd25cecf6215571a9a/raw/next-sticker.user.js
// @connect     imgur.com
// @source      https://gist.github.com/phonglk/915ecd87e1d14dfd25cecf6215571a9a
// @grant       GM_getValue
// @grant       GM_setValue
// @grant       GM_deleteValue
// @grant       GM_listValues
// @grant       GM_notification
// @grant       GM_xmlhttpRequest
// @grant       GM_addValueChangeListener
// @grant       GM_removeValueChangeListener
// @grant       GM_log
// @require     https://cdn.jsdelivr.net/npm/cash-dom@6.0.2/dist/cash.min.js
// ==/UserScript==

!function(t){var n={};function e(r){if(n[r])return n[r].exports;var i=n[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,e),i.l=!0,i.exports}e.m=t,e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:r})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,n){if(1&n&&(t=e(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(e.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var i in t)e.d(r,i,function(n){return t[n]}.bind(null,i));return r},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},e.p="",e(e.s=5)}([function(t,n,e){!function(){"use strict";var n={class:"className",contenteditable:"contentEditable",for:"htmlFor",readonly:"readOnly",maxlength:"maxLength",tabindex:"tabIndex",colspan:"colSpan",rowspan:"rowSpan",usemap:"useMap"};function e(t,n){try{return t(n)}catch(t){return n}}var r=document,i=window,o=r.documentElement,u=r.createElement.bind(r),c=u("div"),s=u("table"),a=u("tbody"),l=u("tr"),f=Array.isArray,_=Array.prototype,d=_.concat,h=_.filter,p=_.indexOf,v=_.map,m=_.push,g=_.slice,y=_.some,b=_.splice,k=/^#[\w-]*$/,w=/^\.[\w-]*$/,x=/<.+>/,C=/^\w+$/;function S(t,n){return t&&(D(n)||j(n))?w.test(t)?n.getElementsByClassName(t.slice(1)):C.test(t)?n.getElementsByTagName(t):n.querySelectorAll(t):[]}var E=function(){function t(t,n){if(t){if(R(t))return t;var e=t;if(U(t)){var o=(R(n)?n[0]:n)||r;if(!(e=k.test(t)?o.getElementById(t.slice(1)):x.test(t)?Tt(t):S(t,o)))return}else if(W(t))return this.ready(t);(e.nodeType||e===i)&&(e=[e]),this.length=e.length;for(var u=0,c=this.length;u<c;u++)this[u]=e[u]}}return t.prototype.init=function(n,e){return new t(n,e)},t}(),N=E.prototype,T=N.init;T.fn=T.prototype=N,N.length=0,N.splice=b,"function"==typeof Symbol&&(N[Symbol.iterator]=_[Symbol.iterator]),N.map=function(t){return T(d.apply([],v.call(this,(function(n,e){return t.call(n,e,n)}))))},N.slice=function(t,n){return T(g.call(this,t,n))};var A=/-([a-z])/g;function M(t){return t.replace(A,(function(t,n){return n.toUpperCase()}))}function L(t,n,e){if(e){for(var r=t.length;r--;)if(!1===n.call(t[r],r,t[r]))return t}else{r=0;for(var i=t.length;r<i;r++)if(!1===n.call(t[r],r,t[r]))return t}return t}function P(t){for(var n=[],e=1;e<arguments.length;e++)n[e-1]=arguments[e];var r=arguments.length;if(!r)return{};if(1===r)return P(T,t);for(var i=1;i<r;i++)for(var o in arguments[i])t[o]=arguments[i][o];return t}function H(t,n){var e=t&&(t.matches||t.webkitMatchesSelector||t.msMatchesSelector);return!!e&&!!n&&e.call(t,n)}function R(t){return t instanceof E}function O(t){return!!t&&t===t.window}function D(t){return!!t&&9===t.nodeType}function j(t){return!!t&&1===t.nodeType}function W(t){return"function"==typeof t}function U(t){return"string"==typeof t}function B(t){return void 0===t}function I(t){return null===t}function $(t){return!isNaN(parseFloat(t))&&isFinite(t)}function F(t){return U(t)?function(n,e){return H(e,t)}:W(t)?t:R(t)?function(n,e){return t.is(e)}:t?function(n,e){return e===t}:function(){return!1}}function G(t,n){return n?t.filter(n):t}T.each=L,N.each=function(t){return L(this,t)},N.removeProp=function(t){return this.each((function(e,r){delete r[n[t]||t]}))},T.extend=P,N.extend=function(t){return P(N,t)},T.guid=1,T.isWindow=O,T.isFunction=W,T.isNumeric=$,T.isArray=f,N.prop=function(t,e){if(t){if(U(t))return t=n[t]||t,arguments.length<2?this[0]&&this[0][t]:this.each((function(n,r){r[t]=e}));for(var r in t)this.prop(r,t[r]);return this}},N.get=function(t){return B(t)?g.call(this):this[(t=Number(t))<0?t+this.length:t]},N.eq=function(t){return T(this.get(t))},N.first=function(){return this.eq(0)},N.last=function(){return this.eq(-1)},N.filter=function(t){var n=F(t);return T(h.call(this,(function(t,e){return n.call(t,e,t)})))};var q=/\S+/g;function z(t){return U(t)&&t.match(q)||[]}function V(t,n,e,r){for(var i=[],o=W(n),u=r&&F(r),c=0,s=t.length;c<s;c++)if(o){var a=n(t[c]);a.length&&m.apply(i,a)}else for(var l=t[c][n];!(null==l||r&&u(-1,l));)i.push(l),l=e?l[n]:null;return i}function J(t){return t.length>1?h.call(t,(function(t,n,e){return p.call(e,t)===n})):t}function Y(t,n,e){if(j(t)){var r=i.getComputedStyle(t,null);return e?r.getPropertyValue(n)||void 0:r[n]}}function K(t,n){return parseInt(Y(t,n),10)||0}N.hasClass=function(t){return!!t&&y.call(this,(function(n){return j(n)&&n.classList.contains(t)}))},N.removeAttr=function(t){var n=z(t);return this.each((function(t,e){j(e)&&L(n,(function(t,n){e.removeAttribute(n)}))}))},N.attr=function(t,n){if(t){if(U(t)){if(arguments.length<2){if(!this[0]||!j(this[0]))return;var e=this[0].getAttribute(t);return I(e)?void 0:e}return B(n)?this:I(n)?this.removeAttr(t):this.each((function(e,r){j(r)&&r.setAttribute(t,n)}))}for(var r in t)this.attr(r,t[r]);return this}},N.toggleClass=function(t,n){var e=z(t),r=!B(n);return this.each((function(t,i){j(i)&&L(e,(function(t,e){r?n?i.classList.add(e):i.classList.remove(e):i.classList.toggle(e)}))}))},N.addClass=function(t){return this.toggleClass(t,!0)},N.removeClass=function(t){return arguments.length?this.toggleClass(t,!1):this.attr("class","")},T.unique=J,N.add=function(t,n){return T(J(this.get().concat(T(t,n).get())))};var X=/^--/;function Z(t){return X.test(t)}var Q={},tt=c.style,nt=["webkit","moz","ms"];function et(t,n){if(void 0===n&&(n=Z(t)),n)return t;if(!Q[t]){var e=M(t),r=""+e[0].toUpperCase()+e.slice(1);L((e+" "+nt.join(r+" ")+r).split(" "),(function(n,e){if(e in tt)return Q[t]=e,!1}))}return Q[t]}var rt={animationIterationCount:!0,columnCount:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,gridArea:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnStart:!0,gridRow:!0,gridRowEnd:!0,gridRowStart:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0};function it(t,n,e){return void 0===e&&(e=Z(t)),e||rt[t]||!$(n)?n:n+"px"}N.css=function(t,n){if(U(t)){var e=Z(t);return t=et(t,e),arguments.length<2?this[0]&&Y(this[0],t,e):t?(n=it(t,n,e),this.each((function(r,i){j(i)&&(e?i.style.setProperty(t,n):i.style[t]=n)}))):this}for(var r in t)this.css(r,t[r]);return this};var ot=/^\s+|\s+$/;function ut(t,n){var r=t.dataset[n]||t.dataset[M(n)];return ot.test(r)?r:e(JSON.parse,r)}function ct(t,n,r){r=e(JSON.stringify,r),t.dataset[M(n)]=r}function st(t,n){var e=t.documentElement;return Math.max(t.body["scroll"+n],e["scroll"+n],t.body["offset"+n],e["offset"+n],e["client"+n])}function at(t,n){return K(t,"border"+(n?"Left":"Top")+"Width")+K(t,"padding"+(n?"Left":"Top"))+K(t,"padding"+(n?"Right":"Bottom"))+K(t,"border"+(n?"Right":"Bottom")+"Width")}N.data=function(t,n){if(!t){if(!this[0])return;var e={};for(var r in this[0].dataset)e[r]=ut(this[0],r);return e}if(U(t))return arguments.length<2?this[0]&&ut(this[0],t):B(n)?this:this.each((function(e,r){ct(r,t,n)}));for(var r in t)this.data(r,t[r]);return this},L([!0,!1],(function(t,n){L(["Width","Height"],(function(t,e){N[(n?"outer":"inner")+e]=function(r){if(this[0])return O(this[0])?n?this[0]["inner"+e]:this[0].document.documentElement["client"+e]:D(this[0])?st(this[0],e):this[0][(n?"offset":"client")+e]+(r&&n?K(this[0],"margin"+(t?"Top":"Left"))+K(this[0],"margin"+(t?"Bottom":"Right")):0)}}))})),L(["Width","Height"],(function(t,n){var e=n.toLowerCase();N[e]=function(r){if(!this[0])return B(r)?void 0:this;if(!arguments.length)return O(this[0])?this[0].document.documentElement["client"+n]:D(this[0])?st(this[0],n):this[0].getBoundingClientRect()[e]-at(this[0],!t);var i=parseInt(r,10);return this.each((function(n,r){if(j(r)){var o=Y(r,"boxSizing");r.style[e]=it(e,i+("border-box"===o?at(r,!t):0))}}))}}));var lt={};function ft(t){return"none"===Y(t,"display")}function _t(t,n){return!n||!y.call(n,(function(n){return t.indexOf(n)<0}))}N.toggle=function(t){return this.each((function(n,e){j(e)&&((B(t)?ft(e):t)?(e.style.display=e.___cd||"",ft(e)&&(e.style.display=function(t){if(lt[t])return lt[t];var n=u(t);r.body.insertBefore(n,null);var e=Y(n,"display");return r.body.removeChild(n),lt[t]="none"!==e?e:"block"}(e.tagName))):(e.___cd=Y(e,"display"),e.style.display="none"))}))},N.hide=function(){return this.toggle(!1)},N.show=function(){return this.toggle(!0)};var dt={focus:"focusin",blur:"focusout"},ht={mouseenter:"mouseover",mouseleave:"mouseout"},pt=/^(mouse|pointer|contextmenu|drag|drop|click|dblclick)/i;function vt(t){return ht[t]||dt[t]||t}function mt(t){return t.___ce=t.___ce||{}}function gt(t){var n=t.split(".");return[n[0],n.slice(1).sort()]}function yt(t,n,e,r,i){var o=mt(t);if(n)o[n]&&(o[n]=o[n].filter((function(o){var u=o[0],c=o[1],s=o[2];if(i&&s.guid!==i.guid||!_t(u,e)||r&&r!==c)return!0;t.removeEventListener(n,s)})));else for(n in o)yt(t,n,e,r,i)}function bt(t){return t.multiple&&t.options?V(h.call(t.options,(function(t){return t.selected&&!t.disabled&&!t.parentNode.disabled})),"value"):t.value||""}N.off=function(t,n,e){var r=this;if(B(t))this.each((function(t,n){(j(n)||D(n)||O(n))&&yt(n)}));else if(U(t))W(n)&&(e=n,n=""),L(z(t),(function(t,i){var o=gt(vt(i)),u=o[0],c=o[1];r.each((function(t,r){(j(r)||D(r)||O(r))&&yt(r,u,c,n,e)}))}));else for(var i in t)this.off(i,t[i]);return this},N.on=function(t,n,e,r,i){var o=this;if(!U(t)){for(var u in t)this.on(u,n,e,t[u],i);return this}return U(n)||(B(n)||I(n)?n="":B(e)?(e=n,n=""):(r=e,e=n,n="")),W(r)||(r=e,e=void 0),r?(L(z(t),(function(t,u){var c=gt(vt(u)),s=c[0],a=c[1];s&&o.each((function(t,o){if(j(o)||D(o)||O(o)){var u=function t(u){if(!u.namespace||_t(a,u.namespace.split("."))){var c=o;if(n){for(var l=u.target;!H(l,n);){if(l===o)return;if(!(l=l.parentNode))return}c=l,u.___cd=!0}u.___cd&&Object.defineProperty(u,"currentTarget",{configurable:!0,get:function(){return c}}),Object.defineProperty(u,"data",{configurable:!0,get:function(){return e}});var f=r.call(c,u,u.___td);i&&yt(o,s,a,n,t),!1===f&&(u.preventDefault(),u.stopPropagation())}};u.guid=r.guid=r.guid||T.guid++,function(t,n,e,r,i){var o=mt(t);o[n]=o[n]||[],o[n].push([e,r,i]),t.addEventListener(n,i)}(o,s,a,n,u)}}))})),this):this},N.one=function(t,n,e,r){return this.on(t,n,e,r,!0)},N.ready=function(t){var n=function(){return setTimeout(t,0,T)};return"loading"!==r.readyState?n():r.addEventListener("DOMContentLoaded",n),this},N.trigger=function(t,n){if(U(t)){var e=gt(t),i=e[0],o=e[1];if(!i)return this;var u=pt.test(i)?"MouseEvents":"HTMLEvents";(t=r.createEvent(u)).initEvent(i,!0,!0),t.namespace=o.join(".")}t.___td=n;var c=t.type in dt;return this.each((function(n,e){c&&W(e[t.type])?e[t.type]():e.dispatchEvent(t)}))};var kt=/%20/g,wt=/\r?\n/g;var xt=/file|reset|submit|button|image/i,Ct=/radio|checkbox/i;N.serialize=function(){var t="";return this.each((function(n,e){L(e.elements||[e],(function(n,e){if(!(e.disabled||!e.name||"FIELDSET"===e.tagName||xt.test(e.type)||Ct.test(e.type)&&!e.checked)){var r=bt(e);if(!B(r))L(f(r)?r:[r],(function(n,r){t+=function(t,n){return"&"+encodeURIComponent(t)+"="+encodeURIComponent(n.replace(wt,"\r\n")).replace(kt,"+")}(e.name,r)}))}}))})),t.slice(1)},N.val=function(t){return arguments.length?this.each((function(n,e){var r=e.multiple&&e.options;if(r||Ct.test(e.type)){var i=f(t)?v.call(t,String):I(t)?[]:[String(t)];r?L(e.options,(function(t,n){n.selected=i.indexOf(n.value)>=0}),!0):e.checked=i.indexOf(e.value)>=0}else e.value=B(t)||I(t)?"":t})):this[0]&&bt(this[0])},N.clone=function(){return this.map((function(t,n){return n.cloneNode(!0)}))},N.detach=function(t){return G(this,t).each((function(t,n){n.parentNode&&n.parentNode.removeChild(n)})),this};var St=/^\s*<(\w+)[^>]*>/,Et=/^<(\w+)\s*\/?>(?:<\/\1>)?$/,Nt={"*":c,tr:a,td:l,th:l,thead:s,tbody:s,tfoot:s};function Tt(t){if(!U(t))return[];if(Et.test(t))return[u(RegExp.$1)];var n=St.test(t)&&RegExp.$1,e=Nt[n]||Nt["*"];return e.innerHTML=t,T(e.childNodes).detach().get()}T.parseHTML=Tt,N.empty=function(){return this.each((function(t,n){for(;n.firstChild;)n.removeChild(n.firstChild)}))},N.html=function(t){return arguments.length?B(t)?this:this.each((function(n,e){j(e)&&(e.innerHTML=t)})):this[0]&&this[0].innerHTML},N.remove=function(t){return G(this,t).detach().off(),this},N.text=function(t){return B(t)?this[0]?this[0].textContent:"":this.each((function(n,e){j(e)&&(e.textContent=t)}))},N.unwrap=function(){return this.parent().each((function(t,n){if("BODY"!==n.tagName){var e=T(n);e.replaceWith(e.children())}})),this},N.offset=function(){var t=this[0];if(t){var n=t.getBoundingClientRect();return{top:n.top+i.pageYOffset,left:n.left+i.pageXOffset}}},N.offsetParent=function(){return this.map((function(t,n){for(var e=n.offsetParent;e&&"static"===Y(e,"position");)e=e.offsetParent;return e||o}))},N.position=function(){var t=this[0];if(t){var n="fixed"===Y(t,"position"),e=n?t.getBoundingClientRect():this.offset();if(!n){for(var r=t.ownerDocument,i=t.offsetParent||r.documentElement;(i===r.body||i===r.documentElement)&&"static"===Y(i,"position");)i=i.parentNode;if(i!==t&&j(i)){var o=T(i).offset();e.top-=o.top+K(i,"borderTopWidth"),e.left-=o.left+K(i,"borderLeftWidth")}}return{top:e.top-K(t,"marginTop"),left:e.left-K(t,"marginLeft")}}},N.children=function(t){return G(T(J(V(this,(function(t){return t.children})))),t)},N.contents=function(){return T(J(V(this,(function(t){return"IFRAME"===t.tagName?[t.contentDocument]:"TEMPLATE"===t.tagName?t.content.childNodes:t.childNodes}))))},N.find=function(t){return T(J(V(this,(function(n){return S(t,n)}))))};var At=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,Mt=/^$|^module$|\/(java|ecma)script/i,Lt=["type","src","nonce","noModule"];function Pt(t,n,e,r,i){r?t.insertBefore(n,e?t.firstChild:null):t.parentNode.insertBefore(n,e?t:t.nextSibling),i&&function(t,n){var e=T(t);e.filter("script").add(e.find("script")).each((function(t,e){if(Mt.test(e.type)&&o.contains(e)){var r=u("script");r.text=e.textContent.replace(At,""),L(Lt,(function(t,n){e[n]&&(r[n]=e[n])})),n.head.insertBefore(r,null),n.head.removeChild(r)}}))}(n,t.ownerDocument)}function Ht(t,n,e,r,i,o,u,c){return L(t,(function(t,o){L(T(o),(function(t,o){L(T(n),(function(n,u){var c=e?u:o,s=e?t:n;Pt(e?o:u,s?c.cloneNode(!0):c,r,i,!s)}),c)}),u)}),o),n}N.after=function(){return Ht(arguments,this,!1,!1,!1,!0,!0)},N.append=function(){return Ht(arguments,this,!1,!1,!0)},N.appendTo=function(t){return Ht(arguments,this,!0,!1,!0)},N.before=function(){return Ht(arguments,this,!1,!0)},N.insertAfter=function(t){return Ht(arguments,this,!0,!1,!1,!1,!1,!0)},N.insertBefore=function(t){return Ht(arguments,this,!0,!0)},N.prepend=function(){return Ht(arguments,this,!1,!0,!0,!0,!0)},N.prependTo=function(t){return Ht(arguments,this,!0,!0,!0,!1,!1,!0)},N.replaceWith=function(t){return this.before(t).remove()},N.replaceAll=function(t){return T(t).replaceWith(this),this},N.wrapAll=function(t){for(var n=T(t),e=n[0];e.children.length;)e=e.firstElementChild;return this.first().before(n),this.appendTo(e)},N.wrap=function(t){return this.each((function(n,e){var r=T(t)[0];T(e).wrapAll(n?r.cloneNode(!0):r)}))},N.wrapInner=function(t){return this.each((function(n,e){var r=T(e),i=r.contents();i.length?i.wrapAll(t):r.append(t)}))},N.has=function(t){var n=U(t)?function(n,e){return S(t,e).length}:function(n,e){return e.contains(t)};return this.filter(n)},N.is=function(t){var n=F(t);return y.call(this,(function(t,e){return n.call(t,e,t)}))},N.next=function(t,n,e){return G(T(J(V(this,"nextElementSibling",n,e))),t)},N.nextAll=function(t){return this.next(t,!0)},N.nextUntil=function(t,n){return this.next(n,!0,t)},N.not=function(t){var n=F(t);return this.filter((function(e,r){return(!U(t)||j(r))&&!n.call(r,e,r)}))},N.parent=function(t){return G(T(J(V(this,"parentNode"))),t)},N.index=function(t){var n=t?T(t)[0]:this[0],e=t?this:T(n).parent().children();return p.call(e,n)},N.closest=function(t){var n=this.filter(t);if(n.length)return n;var e=this.parent();return e.length?e.closest(t):n},N.parents=function(t,n){return G(T(J(V(this,"parentElement",!0,n))),t)},N.parentsUntil=function(t,n){return this.parents(n,t)},N.prev=function(t,n,e){return G(T(J(V(this,"previousElementSibling",n,e))),t)},N.prevAll=function(t){return this.prev(t,!0)},N.prevUntil=function(t,n){return this.prev(n,!0,t)},N.siblings=function(t){return G(T(J(V(this,(function(t){return T(t).parent().children().not(t)})))),t)},t.exports=T}()},function(t,n,e){var r=e(2),i=e(3);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[t.i,i,""]]);var o={insert:"head",singleton:!1},u=(r(i,o),i.locals?i.locals:{});t.exports=u},function(t,n,e){"use strict";var r,i=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},o=function(){var t={};return function(n){if(void 0===t[n]){var e=document.querySelector(n);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(t){e=null}t[n]=e}return t[n]}}(),u=[];function c(t){for(var n=-1,e=0;e<u.length;e++)if(u[e].identifier===t){n=e;break}return n}function s(t,n){for(var e={},r=[],i=0;i<t.length;i++){var o=t[i],s=n.base?o[0]+n.base:o[0],a=e[s]||0,l="".concat(s," ").concat(a);e[s]=a+1;var f=c(l),_={css:o[1],media:o[2],sourceMap:o[3]};-1!==f?(u[f].references++,u[f].updater(_)):u.push({identifier:l,updater:v(_,n),references:1}),r.push(l)}return r}function a(t){var n=document.createElement("style"),r=t.attributes||{};if(void 0===r.nonce){var i=e.nc;i&&(r.nonce=i)}if(Object.keys(r).forEach((function(t){n.setAttribute(t,r[t])})),"function"==typeof t.insert)t.insert(n);else{var u=o(t.insert||"head");if(!u)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");u.appendChild(n)}return n}var l,f=(l=[],function(t,n){return l[t]=n,l.filter(Boolean).join("\n")});function _(t,n,e,r){var i=e?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(t.styleSheet)t.styleSheet.cssText=f(n,i);else{var o=document.createTextNode(i),u=t.childNodes;u[n]&&t.removeChild(u[n]),u.length?t.insertBefore(o,u[n]):t.appendChild(o)}}function d(t,n,e){var r=e.css,i=e.media,o=e.sourceMap;if(i?t.setAttribute("media",i):t.removeAttribute("media"),o&&btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),t.styleSheet)t.styleSheet.cssText=r;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(r))}}var h=null,p=0;function v(t,n){var e,r,i;if(n.singleton){var o=p++;e=h||(h=a(n)),r=_.bind(null,e,o,!1),i=_.bind(null,e,o,!0)}else e=a(n),r=d.bind(null,e,n),i=function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)};return r(t),function(n){if(n){if(n.css===t.css&&n.media===t.media&&n.sourceMap===t.sourceMap)return;r(t=n)}else i()}}t.exports=function(t,n){(n=n||{}).singleton||"boolean"==typeof n.singleton||(n.singleton=i());var e=s(t=t||[],n);return function(t){if(t=t||[],"[object Array]"===Object.prototype.toString.call(t)){for(var r=0;r<e.length;r++){var i=c(e[r]);u[i].references--}for(var o=s(t,n),a=0;a<e.length;a++){var l=c(e[a]);0===u[l].references&&(u[l].updater(),u.splice(l,1))}e=o}}}},function(t,n,e){(n=e(4)(!1)).push([t.i,"#ns {\n  margin-top: 10px;\n}\n#ns a.button {\n  display: inline-block;\n  text-decoration: none;\n  border: 1px solid rgba(0, 0, 0, 0.5);\n  padding: 2px;\n  cursor: pointer;\n  min-width: auto;\n  border-radius: 0;\n}\n#ns .btn-add {\n  padding-left: 5px;\n  padding-right: 5px;\n}\n#ns .btn-sticker {\n  margin-left: 3px;\n}\n#ns .sticker-wrapper {\n  background: white;\n  height: 200px;\n  overflow-y: auto;\n  overflow-x: hidden;\n  position: relative;\n  transition: all 0.3s;\n}\n#ns .sticker-img {\n  border: 1px solid transparent;\n  transition: all 0.3s;\n  cursor: pointer;\n  display: inline-block;\n}\n#ns .sticker-img:hover {\n  border: 1px solid rgba(0, 0, 0, 0.5);\n}\n",""]),t.exports=n},function(t,n,e){"use strict";t.exports=function(t){var n=[];return n.toString=function(){return this.map((function(n){var e=function(t,n){var e=t[1]||"",r=t[3];if(!r)return e;if(n&&"function"==typeof btoa){var i=(u=r,c=btoa(unescape(encodeURIComponent(JSON.stringify(u)))),s="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(c),"/*# ".concat(s," */")),o=r.sources.map((function(t){return"/*# sourceURL=".concat(r.sourceRoot||"").concat(t," */")}));return[e].concat(o).concat([i]).join("\n")}var u,c,s;return[e].join("\n")}(n,t);return n[2]?"@media ".concat(n[2]," {").concat(e,"}"):e})).join("")},n.i=function(t,e,r){"string"==typeof t&&(t=[[null,t,""]]);var i={};if(r)for(var o=0;o<this.length;o++){var u=this[o][0];null!=u&&(i[u]=!0)}for(var c=0;c<t.length;c++){var s=[].concat(t[c]);r&&i[s[0]]||(e&&(s[2]?s[2]="".concat(e," and ").concat(s[2]):s[2]=e),n.push(s))}},n}},function(t,n,e){"use strict";e.r(n),e.d(n,"default",(function(){return ct}));var r,i,o,u,c,s,a={},l=[],f=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord/i;function _(t,n){for(var e in n)t[e]=n[e];return t}function d(t){var n=t.parentNode;n&&n.removeChild(t)}function h(t,n,e){var r,i=arguments,o={};for(r in n)"key"!==r&&"ref"!==r&&(o[r]=n[r]);if(arguments.length>3)for(e=[e],r=3;r<arguments.length;r++)e.push(i[r]);if(null!=e&&(o.children=e),"function"==typeof t&&null!=t.defaultProps)for(r in t.defaultProps)void 0===o[r]&&(o[r]=t.defaultProps[r]);return p(t,o,n&&n.key,n&&n.ref)}function p(t,n,e,i){var o={type:t,props:n,key:e,ref:i,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0};return r.vnode&&r.vnode(o),o}function v(t){return t.children}function m(t,n){this.props=t,this.context=n}function g(t,n){if(null==n)return t.__?g(t.__,t.__.__k.indexOf(t)+1):null;for(var e;n<t.__k.length;n++)if(null!=(e=t.__k[n])&&null!=e.__e)return e.__e;return"function"==typeof t.type?g(t):null}function y(t){var n,e;if(null!=(t=t.__)&&null!=t.__c){for(t.__e=t.__c.base=null,n=0;n<t.__k.length;n++)if(null!=(e=t.__k[n])&&null!=e.__e){t.__e=t.__c.base=e.__e;break}return y(t)}}function b(t){(!t.__d&&(t.__d=!0)&&i.push(t)&&!o++||c!==r.debounceRendering)&&((c=r.debounceRendering)||u)(k)}function k(){for(var t;o=i.length;)t=i.sort((function(t,n){return t.__v.__b-n.__v.__b})),i=[],t.some((function(t){var n,e,r,i,o,u;t.__d&&(o=(i=(n=t).__v).__e,(u=n.__P)&&(e=[],r=N(u,i,_({},i),n.__n,void 0!==u.ownerSVGElement,null,e,null==o?g(i):o),T(e,i),r!=o&&y(i)))}))}function w(t,n,e,r,i,o,u,c,s){var f,_,h,p,v,m,y,b=e&&e.__k||l,k=b.length;if(c==a&&(c=null!=o?o[0]:k?g(e,0):null),f=0,n.__k=x(n.__k,(function(e){if(null!=e){if(e.__=n,e.__b=n.__b+1,null===(h=b[f])||h&&e.key==h.key&&e.type===h.type)b[f]=void 0;else for(_=0;_<k;_++){if((h=b[_])&&e.key==h.key&&e.type===h.type){b[_]=void 0;break}h=null}if(p=N(t,e,h=h||a,r,i,o,u,c,s),(_=e.ref)&&h.ref!=_&&(y||(y=[]),h.ref&&y.push(h.ref,null,e),y.push(_,e.__c||p,e)),null!=p){var l;if(null==m&&(m=p),void 0!==e.__d)l=e.__d,e.__d=void 0;else if(o==h||p!=c||null==p.parentNode){t:if(null==c||c.parentNode!==t)t.appendChild(p),l=null;else{for(v=c,_=0;(v=v.nextSibling)&&_<k;_+=2)if(v==p)break t;t.insertBefore(p,c),l=c}"option"==n.type&&(t.value="")}c=void 0!==l?l:p.nextSibling,"function"==typeof n.type&&(n.__d=c)}else c&&h.__e==c&&c.parentNode!=t&&(c=g(h))}return f++,e})),n.__e=m,null!=o&&"function"!=typeof n.type)for(f=o.length;f--;)null!=o[f]&&d(o[f]);for(f=k;f--;)null!=b[f]&&L(b[f],b[f]);if(y)for(f=0;f<y.length;f++)M(y[f],y[++f],y[++f])}function x(t,n,e){if(null==e&&(e=[]),null==t||"boolean"==typeof t)n&&e.push(n(null));else if(Array.isArray(t))for(var r=0;r<t.length;r++)x(t[r],n,e);else e.push(n?n("string"==typeof t||"number"==typeof t?p(null,t,null,null):null!=t.__e||null!=t.__c?p(t.type,t.props,t.key,null):t):t);return e}function C(t,n,e){"-"===n[0]?t.setProperty(n,e):t[n]="number"==typeof e&&!1===f.test(n)?e+"px":null==e?"":e}function S(t,n,e,r,i){var o,u,c,s,a;if(i?"className"===n&&(n="class"):"class"===n&&(n="className"),"key"===n||"children"===n);else if("style"===n)if(o=t.style,"string"==typeof e)o.cssText=e;else{if("string"==typeof r&&(o.cssText="",r=null),r)for(u in r)e&&u in e||C(o,u,"");if(e)for(c in e)r&&e[c]===r[c]||C(o,c,e[c])}else"o"===n[0]&&"n"===n[1]?(s=n!==(n=n.replace(/Capture$/,"")),a=n.toLowerCase(),n=(a in t?a:n).slice(2),e?(r||t.addEventListener(n,E,s),(t.l||(t.l={}))[n]=e):t.removeEventListener(n,E,s)):"list"!==n&&"tagName"!==n&&"form"!==n&&"type"!==n&&"size"!==n&&!i&&n in t?t[n]=null==e?"":e:"function"!=typeof e&&"dangerouslySetInnerHTML"!==n&&(n!==(n=n.replace(/^xlink:?/,""))?null==e||!1===e?t.removeAttributeNS("http://www.w3.org/1999/xlink",n.toLowerCase()):t.setAttributeNS("http://www.w3.org/1999/xlink",n.toLowerCase(),e):null==e||!1===e&&!/^ar/.test(n)?t.removeAttribute(n):t.setAttribute(n,e))}function E(t){this.l[t.type](r.event?r.event(t):t)}function N(t,n,e,i,o,u,c,s,a){var l,f,d,h,p,g,y,b,k,x,C=n.type;if(void 0!==n.constructor)return null;(l=r.__b)&&l(n);try{t:if("function"==typeof C){if(b=n.props,k=(l=C.contextType)&&i[l.__c],x=l?k?k.props.value:l.__:i,e.__c?y=(f=n.__c=e.__c).__=f.__E:("prototype"in C&&C.prototype.render?n.__c=f=new C(b,x):(n.__c=f=new m(b,x),f.constructor=C,f.render=P),k&&k.sub(f),f.props=b,f.state||(f.state={}),f.context=x,f.__n=i,d=f.__d=!0,f.__h=[]),null==f.__s&&(f.__s=f.state),null!=C.getDerivedStateFromProps&&(f.__s==f.state&&(f.__s=_({},f.__s)),_(f.__s,C.getDerivedStateFromProps(b,f.__s))),h=f.props,p=f.state,d)null==C.getDerivedStateFromProps&&null!=f.componentWillMount&&f.componentWillMount(),null!=f.componentDidMount&&f.__h.push(f.componentDidMount);else{if(null==C.getDerivedStateFromProps&&b!==h&&null!=f.componentWillReceiveProps&&f.componentWillReceiveProps(b,x),!f.__e&&null!=f.shouldComponentUpdate&&!1===f.shouldComponentUpdate(b,f.__s,x)){for(f.props=b,f.state=f.__s,f.__d=!1,f.__v=n,n.__e=e.__e,n.__k=e.__k,f.__h.length&&c.push(f),l=0;l<n.__k.length;l++)n.__k[l]&&(n.__k[l].__=n);break t}null!=f.componentWillUpdate&&f.componentWillUpdate(b,f.__s,x),null!=f.componentDidUpdate&&f.__h.push((function(){f.componentDidUpdate(h,p,g)}))}f.context=x,f.props=b,f.state=f.__s,(l=r.__r)&&l(n),f.__d=!1,f.__v=n,f.__P=t,l=f.render(f.props,f.state,f.context),n.__k=null!=l&&l.type==v&&null==l.key?l.props.children:Array.isArray(l)?l:[l],null!=f.getChildContext&&(i=_(_({},i),f.getChildContext())),d||null==f.getSnapshotBeforeUpdate||(g=f.getSnapshotBeforeUpdate(h,p)),w(t,n,e,i,o,u,c,s,a),f.base=n.__e,f.__h.length&&c.push(f),y&&(f.__E=f.__=null),f.__e=!1}else n.__e=A(e.__e,n,e,i,o,u,c,a);(l=r.diffed)&&l(n)}catch(t){r.__e(t,n,e)}return n.__e}function T(t,n){r.__c&&r.__c(n,t),t.some((function(n){try{t=n.__h,n.__h=[],t.some((function(t){t.call(n)}))}catch(t){r.__e(t,n.__v)}}))}function A(t,n,e,r,i,o,u,c){var s,f,_,d,h,p=e.props,v=n.props;if(i="svg"===n.type||i,null!=o)for(s=0;s<o.length;s++)if(null!=(f=o[s])&&((null===n.type?3===f.nodeType:f.localName===n.type)||t==f)){t=f,o[s]=null;break}if(null==t){if(null===n.type)return document.createTextNode(v);t=i?document.createElementNS("http://www.w3.org/2000/svg",n.type):document.createElement(n.type,v.is&&{is:v.is}),o=null}if(null===n.type)p!==v&&t.data!=v&&(t.data=v);else if(n!==e){if(null!=o&&(o=l.slice.call(t.childNodes)),_=(p=e.props||a).dangerouslySetInnerHTML,d=v.dangerouslySetInnerHTML,!c){if(p===a)for(p={},h=0;h<t.attributes.length;h++)p[t.attributes[h].name]=t.attributes[h].value;(d||_)&&(d&&_&&d.__html==_.__html||(t.innerHTML=d&&d.__html||""))}(function(t,n,e,r,i){var o;for(o in e)o in n||S(t,o,null,e[o],r);for(o in n)i&&"function"!=typeof n[o]||"value"===o||"checked"===o||e[o]===n[o]||S(t,o,n[o],e[o],r)})(t,v,p,i,c),n.__k=n.props.children,d||w(t,n,e,r,"foreignObject"!==n.type&&i,o,u,a,c),c||("value"in v&&void 0!==v.value&&v.value!==t.value&&(t.value=null==v.value?"":v.value),"checked"in v&&void 0!==v.checked&&v.checked!==t.checked&&(t.checked=v.checked))}return t}function M(t,n,e){try{"function"==typeof t?t(n):t.current=n}catch(t){r.__e(t,e)}}function L(t,n,e){var i,o,u;if(r.unmount&&r.unmount(t),(i=t.ref)&&(i.current&&i.current!==t.__e||M(i,null,n)),e||"function"==typeof t.type||(e=null!=(o=t.__e)),t.__e=t.__d=void 0,null!=(i=t.__c)){if(i.componentWillUnmount)try{i.componentWillUnmount()}catch(t){r.__e(t,n)}i.base=i.__P=null}if(i=t.__k)for(u=0;u<i.length;u++)i[u]&&L(i[u],n,e);null!=o&&d(o)}function P(t,n,e){return this.constructor(t,e)}function H(t,n,e){var i,o,u;r.__&&r.__(t,n),o=(i=e===s)?null:e&&e.__k||n.__k,t=h(v,null,[t]),u=[],N(n,(i?n:e||n).__k=t,o||a,a,void 0!==n.ownerSVGElement,e&&!i?[e]:o?null:l.slice.call(n.childNodes),u,e||a,i),T(u,t)}r={__e:function(t,n){for(var e,r;n=n.__;)if((e=n.__c)&&!e.__)try{if(e.constructor&&null!=e.constructor.getDerivedStateFromError&&(r=!0,e.setState(e.constructor.getDerivedStateFromError(t))),null!=e.componentDidCatch&&(r=!0,e.componentDidCatch(t)),r)return b(e.__E=e)}catch(n){t=n}throw t}},m.prototype.setState=function(t,n){var e;e=this.__s!==this.state?this.__s:this.__s=_({},this.state),"function"==typeof t&&(t=t(e,this.props)),t&&_(e,t),null!=t&&this.__v&&(n&&this.__h.push(n),b(this))},m.prototype.forceUpdate=function(t){this.__v&&(this.__e=!0,t&&this.__h.push(t),b(this))},m.prototype.render=v,i=[],o=0,u="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,s=a;var R,O,D,j=e(0),W=e.n(j),U=(e(1),[]),B=r.__r,I=r.diffed,$=r.__c,F=r.unmount;function G(t){r.__h&&r.__h(O);var n=O.__H||(O.__H={__:[],__h:[]});return t>=n.__.length&&n.__.push({}),n.__[t]}function q(t){return function(t,n,e){var r=G(R++);return r.__c||(r.__c=O,r.__=[e?e(n):X(void 0,n),function(n){var e=t(r.__[0],n);r.__[0]!==e&&(r.__[0]=e,r.__c.setState({}))}]),r.__}(X,t)}function z(t,n){var e=G(R++);K(e.__H,n)&&(e.__=t,e.__H=n,O.__H.__h.push(e))}function V(){U.some((function(t){if(t.__P)try{t.__H.__h.forEach(J),t.__H.__h.forEach(Y),t.__H.__h=[]}catch(n){return r.__e(n,t.__v),!0}})),U=[]}function J(t){t.t&&t.t()}function Y(t){var n=t.__();"function"==typeof n&&(t.t=n)}function K(t,n){return!t||n.some((function(n,e){return n!==t[e]}))}function X(t,n){return"function"==typeof n?n(t):n}r.__r=function(t){B&&B(t),R=0,(O=t.__c).__H&&(O.__H.__h.forEach(J),O.__H.__h.forEach(Y),O.__H.__h=[])},r.diffed=function(t){I&&I(t);var n=t.__c;if(n){var e=n.__H;e&&e.__h.length&&(1!==U.push(n)&&D===r.requestAnimationFrame||((D=r.requestAnimationFrame)||function(t){var n,e=function(){clearTimeout(r),cancelAnimationFrame(n),setTimeout(t)},r=setTimeout(e,100);"undefined"!=typeof window&&(n=requestAnimationFrame(e))})(V))}},r.__c=function(t,n){n.some((function(t){try{t.__h.forEach(J),t.__h=t.__h.filter((function(t){return!t.__||Y(t)}))}catch(e){n.some((function(t){t.__h&&(t.__h=[])})),n=[],r.__e(e,t.__v)}})),$&&$(t,n)},r.unmount=function(t){F&&F(t);var n=t.__c;if(n){var e=n.__H;if(e)try{e.__.forEach((function(t){return t.t&&t.t()}))}catch(t){r.__e(t,n.__v)}}};const Z=GM_setValue,Q=GM_getValue,tt=GM_deleteValue,nt=(GM_listValues,(t,n)=>{GM_addValueChangeListener(t,(t,e,r,i)=>n(r,i,e))}),et=(t,n,e)=>{Z(t,e(Q(t,n)))};function rt(){const[t,n]=q(Q("sticker_set_list",[])),[e,r]=q(Q("selected_sticker_set",null)),i=t=>{r(t),Z("selected_sticker_set",t)};return z(()=>{nt("sticker_set_list",n),nt("selected_sticker_set",(t,n)=>{n||r(t)})},[]),z(()=>{!t.find(({url:t})=>t===e)&&t.length>0&&i(t[0].url)},[t,e]),h("div",null,h("a",{className:"btn-add button button--primary",onClick:()=>{const{url:t,name:n}=function(){let t=prompt("imgur album url or id","https://imgur.com/a/");t.startsWith("http")||(t="https://imgur.com/a/"+t);const n=t.match(/a\/([^ ]*)/)[1],e=prompt("Sticker name",n);return{url:t,name:e}}();et("sticker_set_list",[],e=>e.concat({url:t,name:n})),i(t)}},"ADD STICKER"),h("span",{className:"ss-list"},t.map(({url:t,name:n})=>h("a",{className:`button btn-sticker ${e===t?"button--primary":"button--link"}`,onClick:()=>i(t)},n))))}const it=atob("NTEzZWE3MDk5YWIzYWNi"),ot=t=>`sticker_set_${t}`;function ut(){const[t,n]=q(!0),[e,r]=q([]),[i,o]=q(Q("selected_sticker_set",null));z(()=>{nt("selected_sticker_set",(t,n)=>{n||o(t)})},[]),z(()=>{n(!0),async function(t){let n=Q(ot(t),null);if(null===n){const e=t.match(/a\/([^ ]*)/)[1];n=await async function(t){return(await((t,n)=>new Promise((e,r)=>{GM_xmlhttpRequest({method:"GET",...n,url:t,onload:function(n){4===n.readyState&&200===n.status?e(JSON.parse(n.responseText)):r(new Error(`Cannot load url ${t}`))}})}))(`https://api.imgur.com/3/album/${t}/images`,{headers:{Authorization:`Client-ID ${it}`,Accept:"application/json"}})).data.map(({link:t})=>t)}(e),Z(ot(t),n)}return n}(i).then(t=>{r(t),n(!1)}).catch(()=>{r([]),n(!1)})},[i]);const u=t=>{!function(t){const n=window.getSelection(),e=W()(`<img src="${t}" />`)[0],r=W()("div.fr-view[contenteditable=true] > *"),i=3===n.anchorNode.nodeType?n.anchorNode.parentElement:n.anchorNode;if(n.getRangeAt&&n.rangeCount&&i.matches("div[contenteditable=true] *")){const t=n.getRangeAt(0);t.deleteContents(),t.insertNode(e),n.modify("move","right","character")}else r.length>0&&r.last()[0].appendChild(e)}(t)},c=h("div",{className:"sticker-wrapper"},e.map(t=>h("div",{key:t,className:"sticker-img",onClick:()=>u(t)},h("img",{src:t}))));return h("div",{className:"sticker-panel"},h("div",{className:"sticker-panel-toolbar"},h("a",{className:"button btn-delete",onClick:async()=>{tt(ot(i)),et("sticker_set_list",[],t=>t.filter(({url:t})=>t!==i))}},"Delete")),t&&"Loading sticker ...",!t&&0===e.length&&"Cannot load sticker set or empty",e.length>0&&c)}function ct(){const t=function(){if(0===W()(".js-previewContainer").length)return;let t=W()("#ns");return t.length>0||(t=W()('<div id="ns"></div>'),t.insertBefore(".js-previewContainer")),t[0]}();t&&H(h(st,null),t)}function st(){return h("div",null,h(ut,null),h(rt,null))}ct(),W()('iframe[src*="://imgur.com/a/"]').add('a[href*="://imgur.com/a/"]').each((t,n)=>{const e=n.src||n.href;n.parentElement.classList.contains("imgur-embed-pub")&&(n=n.parentElement.parentElement);const r=n.previousSibling,i=r.textContent;if(i.length>20)return;const o=W()(`<a class="button button--link">Add Sticker ${i}</a>`);W()(r).replaceWith(o),o.on("click",()=>function(t,n){var e;et("sticker_set_list",[],e=>e.concat({name:n,url:t})),e={text:`Added ${n} from ${t}`,title:"Add Sticker",timeout:4e3},new Promise(t=>{GM_notification(e,t)})}(e.trim(),i.trim()))})}]);