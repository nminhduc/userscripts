// ==UserScript==
// @name        Next Navigation
// @version     1.0.1
// @author      Khoi-Phong Le
// @description Add Navigation Helpers
// @homepage    https://next.voz.vn/threads/userscript-sticker-cho-next.854/
// @supportURL  https://github.com/phonglk/userscripts/pulls
// @match       https://*.voz.vn/*
// @namespace   Next
// @updateURL   https://github.com/phonglk/userscripts/raw/master/dist/next-navigation.user.js
// @connect     https://unpkg.com/microtip/microtip.css
// @source      https://github.com/phonglk/userscripts/tree/master/src/next/sticker
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

!function(t){var e={};function n(a){if(e[a])return e[a].exports;var o=e[a]={i:a,l:!1,exports:{}};return t[a].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,a){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(a,o,function(e){return t[e]}.bind(null,o));return a},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e,n){"use strict";n.r(e);const a=GM_setValue,o=GM_getValue,r=(GM_deleteValue,GM_listValues,(t,e)=>{GM_addValueChangeListener(t,(t,n,a,o)=>e(a,o,n))});const i=[{title:"Đại sảnh",url:"/#dai-sanh.1",boxes:[{title:"Thông báo",url:"/f/thong-bao.2/"},{title:"Góp ý",url:"/f/gop-y.3/"}]},{title:"Khu vui chơi giải trí",url:"/#khu-vui-choi-giai-tri.16",boxes:[{title:"Chuyện trò linh tinh™",url:"/f/chuyen-tro-linh-tinh.17/"},{title:"Điểm báo",url:"/f/diem-bao.33/"}]}];function s(){const t=o("forum_structure",i);t===i&&async function(){const t=await(o="https://next.voz.vn/",r={doNotParse:!0},new Promise((t,e)=>{GM_xmlhttpRequest({method:"GET",...r,url:o,onload:function(n){if(4===n.readyState&&200===n.status){if(r.doNotParse)return t(n.responseText);t(JSON.parse(n.responseText))}else e(new Error(`Cannot load url ${o}`))}})})),e=$(t).find(".block.block--category"),n=[];var o,r;e.each((t,e)=>{const a=$(e).find("h2 a"),o={title:a.text(),url:a.attr("href"),boxes:[]};$(e).find("h3 a").each((t,e)=>{o.boxes.push({title:$(e).text(),url:$(e).attr("href")})}),n.push(o)}),a("forum_structure",n)}(),l(t),r(l),((t,e,n)=>{const a={attributes:!1,childList:!1,subtree:!1,...e};var o=new MutationObserver(n);o.observe(t,a)})(document.body,{childList:!0},t=>{$("#next-navigation-structure").length>0||t.forEach(t=>{t.addedNodes.forEach(t=>{if(t.classList.contains("offCanvasMenu--nav")){l(o("forum_structure",i))}})})})}function l(t){const e=$(".offCanvasMenu-list > li:first-child"),n=`<li id="next-navigation-structure">\n      <div class="offCanvasMenu-linkHolder">\n        <a href="https://next.voz.vn" class="offCanvasMenu-link" data-xf-key="1" data-nav-id="home">Home</a>\n        <a class="offCanvasMenu-link offCanvasMenu-link--splitToggle" data-xf-click="toggle" data-target="< :up :next" role="button" tabindex="0"></a>\n      </div>\n      <ul class="offCanvasMenu-subList" style="" tabindex="-1">\n      ${t.map(({url:t,title:e,boxes:n})=>`\n        <li>\n          <a\n            href="${t}"\n            class="u-indentDepth0 js-offCanvasCopy offCanvasMenu-link"\n            data-nav-id="${e}"\n            >${e}</a>\n        </li>\n        ${n.map(({url:t,title:e})=>`<li>\n          <a\n            href="${t}"\n            class="u-indentDepth1 js-offCanvasCopy offCanvasMenu-link"\n            data-nav-id="${e}"\n            >${e}</a>\n        </li>`).join("\n")}\n      `).join("\n")}\n      </ul>\n    </li>`;e.replaceWith($(n))}$(()=>{var t,e,n;k(d(),"Press -> to go to next page",{"data-microtip-position":"right"}),k(f(),"Press <- to go to previous page",{"data-microtip-position":"bottom-right"}),k(g(),"Press Ctrl/Cmd + -> to go to last page",{"data-microtip-position":"bottom-right"}),k(h(),"Press Ctrl/Cmd + <- to go to first page",{"data-microtip-position":"bottom-right"}),k(v(),"Press Ctrl/Cmd + ⬆ to go to top",{"data-microtip-position":"left"}),s(),t="https://unpkg.com/microtip/microtip.css",(e=document.getElementsByTagName("head")[0])&&((n=document.createElement("link")).type="text/css",n.rel="stylesheet",n.href=t,e.appendChild(n))});const u=39,c=37,p=8,f=()=>$(".pageNavWrapper .pageNav-jump.pageNav-jump--prev"),d=()=>$(".pageNavWrapper .pageNav-jump.pageNav-jump--next"),g=()=>$(".pageNavWrapper .pageNav-page:last-child a"),h=()=>$(".pageNavWrapper .pageNav-page:first-child a"),v=()=>$('a[href="#top"]'),m=()=>{M(h())},b=()=>{M(g())},y=()=>{M(d())},x=()=>{M(f())},C=()=>{M(v())};function M(t){t[0].click()}function k(t,e,n={}){t.attr({"data-microtip-position":"up",...n,"aria-label":e,role:"tooltip"})}$(document).keydown(t=>{if("INPUT"==t.target.tagName||"TEXTAREA"==t.target.tagName)return;const{keyCode:e,ctrlKey:n,metaKey:a}=t;switch(e){case c:n||a?m():x(),t.preventDefault();break;case u:n||a?b():y(),t.preventDefault();break;case p:if(n||a){C(),t.preventDefault();break}}})}]);