!function e(t,n,o){function i(s,a){if(!n[s]){if(!t[s]){var c="function"==typeof require&&require;if(!a&&c)return c(s,!0);if(r)return r(s,!0);var l=new Error("Cannot find module '"+s+"'");throw l.code="MODULE_NOT_FOUND",l}var u=n[s]={exports:{}};t[s][0].call(u.exports,function(e){var n=t[s][1][e];return i(n||e)},u,u.exports,e,t,n,o)}return n[s].exports}for(var r="function"==typeof require&&require,s=0;s<o.length;s++)i(o[s]);return i}({1:[function(e,t,n){t.exports=function(){return function(e){function t(t){if(t){var r=i.indexOf(t),s=e.slide();n(t,"active"),n(t,"inactive"),n(t,"before"),n(t,"after"),r!==s?(o(t,"inactive"),o(t,r<s?"before":"after")):o(t,"active")}}function n(e,t){e.classList.remove("bespoke-backdrop-"+t)}function o(e,t){e.classList.add("bespoke-backdrop-"+t)}var i;i=e.slides.map(function(t){var n=t.getAttribute("data-bespoke-backdrop");if(n){var o=document.createElement("div");return o.className=n,o.classList.add("bespoke-backdrop"),e.parent.appendChild(o),o}}),e.on("activate",function(){i.forEach(t)})}}},{}],2:[function(e,t,n){t.exports=function(e){return function(t){var n,o,i=t.slides.map(function(t){return[].slice.call(t.querySelectorAll("string"==typeof e?e:"[data-bespoke-bullet]"),0)}),r=function(e,t){n=e,o=t,i.forEach(function(n,o){n.forEach(function(n,i){n.classList.add("bespoke-bullet"),o<e||o===e&&i<=t?(n.classList.add("bespoke-bullet-active"),n.classList.remove("bespoke-bullet-inactive")):(n.classList.add("bespoke-bullet-inactive"),n.classList.remove("bespoke-bullet-active")),o===e&&i===t?n.classList.add("bespoke-bullet-current"):n.classList.remove("bespoke-bullet-current")})})},s=function(e){return void 0!==i[n][o+e]};t.on("next",function(){var e=n+1;if(s(1))return r(n,o+1),!1;i[e]&&r(e,0)}),t.on("prev",function(){var e=n-1;if(s(-1))return r(n,o-1),!1;i[e]&&r(e,i[e].length-1)}),t.on("slide",function(e){r(e.index,0)}),r(0,0)}}},{}],3:[function(e,t,n){t.exports=function(e){return function(t){var n="vertical"!==e;document.addEventListener("keydown",function(e){(34==e.which||32==e.which&&!e.shiftKey||n&&39==e.which||!n&&40==e.which)&&t.next(),(33==e.which||32==e.which&&e.shiftKey||n&&37==e.which||!n&&38==e.which)&&t.prev()})}}},{}],4:[function(e,t,n){t.exports=function(e){return function(t){var n=document.createElement("div"),o=document.createElement("div"),i="vertical"===e?"height":"width";n.className="bespoke-progress-parent",o.className="bespoke-progress-bar",n.appendChild(o),t.parent.appendChild(n),t.on("activate",function(e){o.style[i]=100*e.index/(t.slides.length-1)+"%"})}}},{}],5:[function(e,t,n){t.exports=function(e){return function(t){var n=t.parent,o=t.slides[0],i=o.offsetHeight,r=o.offsetWidth,s="zoom"===e||"zoom"in n.style&&"transform"!==e,a=s?t.slides:t.slides.map(function(e){var t=document.createElement("div");return t.className="bespoke-scale-parent",e.parentNode.insertBefore(t,e),t.appendChild(e),t}),c="Moz Webkit O ms".split(" ").reduce(function(e,t){return t+"Transform"in n.style?t+"Transform":e},"Transform".toLowerCase()),l=s?function(e,t){t.style.zoom=e}:function(e,t){t.style[c]="scale("+e+")"},u=function(){var e=n.offsetWidth/r,t=n.offsetHeight/i;a.forEach(l.bind(null,Math.min(e,t)))};window.addEventListener("resize",u),u()}}},{}],6:[function(e,t,n){(function(o){!function(e){if("object"==typeof n)t.exports=e();else if("function"==typeof define&&define.amd)define(e);else{var i;"undefined"!=typeof window?i=window:void 0!==o?i=o:"undefined"!=typeof self&&(i=self);var r=i;(r=(r=r.bespoke||(r.bespoke={})).themes||(r.themes={})).nebula=e()}}(function(){return function t(n,o,i){function r(a,c){if(!o[a]){if(!n[a]){var l="function"==typeof e&&e;if(!c&&l)return l(a,!0);if(s)return s(a,!0);throw new Error("Cannot find module '"+a+"'")}var u=o[a]={exports:{}};n[a][0].call(u.exports,function(e){var t=n[a][1][e];return r(t||e)},u,u.exports,t,n,o,i)}return o[a].exports}for(var s="function"==typeof e&&e,a=0;a<i.length;a++)r(i[a]);return r}({1:[function(e,t,n){var o=e("bespoke-classes"),i=e("insert-css");t.exports=function(){return i('/*! normalize.css v3.0.0 | MIT License | git.io/normalize */html{font-family:sans-serif;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%}body{margin:0}article,aside,details,figcaption,figure,footer,header,hgroup,main,nav,section,summary{display:block}audio,canvas,progress,video{display:inline-block;vertical-align:baseline}audio:not([controls]){display:none;height:0}[hidden],template{display:none}a{background:0 0}a:active,a:hover{outline:0}abbr[title]{border-bottom:1px dotted}b{font-weight:700}dfn{font-style:italic}h1{font-size:2em}mark{background:#ff0;color:#000}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sup{top:-.5em}sub{bottom:-.25em}img{border:0}svg:not(:root){overflow:hidden}figure{margin:1em 40px}hr{box-sizing:content-box}pre{overflow:auto}code,kbd,pre,samp{font-size:1em}kbd,pre,samp{font-family:monospace,monospace}button,input,optgroup,select,textarea{color:inherit;font:inherit;margin:0}button{overflow:visible}button,select{text-transform:none}button,html input[type="button"],input[type="reset"],input[type="submit"]{-webkit-appearance:button;cursor:pointer}button[disabled],html input[disabled]{cursor:default}button::-moz-focus-inner,input::-moz-focus-inner{border:0;padding:0}input{line-height:normal}input[type="checkbox"],input[type="radio"]{box-sizing:border-box;padding:0}input[type="number"]::-webkit-inner-spin-button,input[type="number"]::-webkit-outer-spin-button{height:auto}input[type="search"]{-webkit-appearance:textfield;box-sizing:content-box}input[type="search"]::-webkit-search-cancel-button,input[type="search"]::-webkit-search-decoration{-webkit-appearance:none}fieldset{border:1px solid silver;margin:0 2px;padding:.35em .625em .75em}legend{border:0;padding:0}textarea{overflow:auto}optgroup{font-weight:700}table{border-collapse:collapse;border-spacing:0}td,th,*{padding:0}*{margin:0}html{-webkit-text-size-adjust:auto;-ms-text-size-adjust:auto;text-size-adjust:auto}.bespoke-parent{font-size:1.5em;background:#111;color:#ddd;font-family:futura,helvetica,arial,arial,sans-serif;overflow:hidden;text-align:center;-webkit-transition:background 1s ease;transition:background 1s ease;background-position:50% 50%}.bespoke-parent,.bespoke-scale-parent{position:absolute;top:0;left:0;right:0;bottom:0}.bespoke-scale-parent{pointer-events:none;z-index:1}.bespoke-scale-parent .bespoke-active{pointer-events:auto}.bespoke-slide{-webkit-transition:opacity .5s ease;transition:opacity .5s ease;width:940px;height:480px;position:absolute;top:50%;left:50%;margin-left:-470px;margin-top:-240px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;z-index:1}.bespoke-active{-webkit-transition-delay:.5s;transition-delay:.5s}.bespoke-active[data-bespoke-backdrop]{-webkit-transition-delay:.75s;transition-delay:.75s}.bespoke-inactive{opacity:0;pointer-events:none}.bespoke-backdrop{-webkit-transition:opacity 1s ease;position:absolute;top:0;left:0;right:0;bottom:0}.bespoke-progress-parent{position:absolute;top:0;left:0;right:0;height:.3vw;z-index:1}.bespoke-progress-bar{background:#ddd;position:absolute;top:0;left:0;height:100%;-webkit-transition:width 1s ease;transition:width 1s ease}.bespoke-bullet{-webkit-transition:opacity .3s ease;transition:opacity .3s ease}.bespoke-bullet-inactive{opacity:0}strong{font-weight:400}hr{width:50%;margin:1rem auto;height:1px;border:0;background:#ddd}h3,p,li{padding-left:20px;padding-right:20px}h3,h4,p,li,pre{font-weight:200}h1{line-height:1.4em;padding:1em;border:1px solid #ddd;border-left-width:0;border-right-width:0;min-width:8em}h1,h2{letter-spacing:.3em;text-transform:uppercase;font-weight:400;margin:.17em 0;position:relative}h2{line-height:1.1em;padding:0 0 0 .3em}h3{font-family:didot,times new roman,serif;font-style:italic;font-size:1.2em;line-height:1.6em;margin:.5em 0}h4{text-transform:uppercase;font-size:.8em;line-height:1.8em;letter-spacing:.3em;margin:1em 0}ul,ol{padding:0;margin:0;text-align:left}li{list-style:none;margin:.2em;font-style:normal;-webkit-transform:translateX(-6px);-ms-transform:translateX(-6px);transform:translateX(-6px)}li:before{content:\'\\2014\';margin-right:4px}pre{background:none!important}code{font-family:prestige elite std,consolas,courier new,monospace!important;font-style:normal;font-weight:200!important;text-align:left}a{padding-left:.3em;color:currentColor;text-decoration:none;border-bottom:1px solid currentColor}.emphatic{background:#f30}.single-words{word-spacing:9999px;line-height:2.9em;overflow:hidden}.bespoke-backdrop{opacity:0;-webkit-transition:opacity 1s ease,-webkit-transform 6s ease;transition:opacity 1s ease,transform 6s ease;background-size:cover;background-position:50% 50%;-webkit-transform:translateZ(0)scale(1.3);transform:translateZ(0)scale(1.3)}.bespoke-backdrop-active,.bespoke-backdrop-before{-webkit-transform:translateZ(0);transform:translateZ(0)}.bespoke-backdrop-before{-webkit-transition-delay:.2s;transition-delay:.2s}.bespoke-backdrop-active{opacity:.5}',{prepend:!0}),function(e){o()(e)}}},{"bespoke-classes":2,"insert-css":3}],2:[function(e,t,n){t.exports=function(){return function(e){var t=function(e,t){e.classList.add("bespoke-"+t)},n=function(e,t){e.className=e.className.replace(new RegExp("bespoke-"+t+"(\\s|$)","g")," ").trim()},o=function(o,i){var r=e.slides[e.slide()],s=i-e.slide(),a=s>0?"after":"before";["before(-\\d+)?","after(-\\d+)?","active","inactive"].map(n.bind(null,o)),o!==r&&["inactive",a,a+"-"+Math.abs(s)].map(t.bind(null,o))};t(e.parent,"parent"),e.slides.map(function(e){t(e,"slide")}),e.on("activate",function(i){e.slides.map(o),t(i.slide,"active"),n(i.slide,"inactive")})}}},{}],3:[function(e,t,n){var o={};t.exports=function(e,t){if(!o[e]){o[e]=!0;var n=document.createElement("style");n.setAttribute("type","text/css"),"textContent"in n?n.textContent=e:n.styleSheet.cssText=e;var i=document.getElementsByTagName("head")[0];t&&t.prepend?i.insertBefore(n,i.childNodes[0]):i.appendChild(n)}}},{}]},{},[1])(1)})}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],7:[function(e,t,n){t.exports=function(e){return function(t){var n,o,i="vertical"==e?"Y":"X";t.parent.addEventListener("touchstart",function(e){1==e.touches.length&&(n=e.touches[0]["page"+i],o=0)}),t.parent.addEventListener("touchmove",function(e){1==e.touches.length&&(e.preventDefault(),o=e.touches[0]["page"+i]-n)}),t.parent.addEventListener("touchend",function(){Math.abs(o)>50&&t[o>0?"prev":"next"]()})}}},{}],8:[function(e,t,n){t.exports={from:function(e,t){var n=1===(e.parent||e).nodeType?e.parent||e:document.querySelector(e.parent||e),o=[].filter.call("string"==typeof e.slides?n.querySelectorAll(e.slides):e.slides||n.children,function(e){return"SCRIPT"!==e.nodeName}),i=o[0],r={},s=function(e,t){o[e]&&(l("deactivate",u(i,t)),i=o[e],l("activate",u(i,t)))},a=function(e,t){var n=o.indexOf(i)+e;l(e>0?"next":"prev",u(i,t))&&s(n,t)},c=function(e,t){r[e]=(r[e]||[]).filter(function(e){return e!==t})},l=function(e,t){return(r[e]||[]).reduce(function(e,n){return e&&!1!==n(t)},!0)},u=function(e,t){return t=t||{},t.index=o.indexOf(e),t.slide=e,t},d={on:function(e,t){return(r[e]||(r[e]=[])).push(t),c.bind(null,e,t)},off:c,fire:l,slide:function(e,t){if(!arguments.length)return o.indexOf(i);l("slide",u(o[e],t))&&s(e,t)},next:a.bind(null,1),prev:a.bind(null,-1),parent:n,slides:o};return(t||[]).forEach(function(e){e(d)}),s(0),d}}},{}],9:[function(e,t,n){(function(){var t,n;n=e("./hideIdleCursor"),t=e("./handleFullscreen"),e("./startPresentation"),n(),t()}).call(this)},{"./handleFullscreen":10,"./hideIdleCursor":11,"./startPresentation":12}],10:[function(e,t,n){(function(){var e;e=function(){var e,t;t=document.getElementById("presentation"),e=function(e){return null==e&&(e=t),document.getElementsByTagName("body")[0].style.cursor="none",e.requestFullscreen(e.requestFullscreen?void 0:e.msRequestFullscreen(e.msRequestFullscreen?void 0:e.mozRequestFullScreen(e.mozRequestFullScreen?void 0:e.webkitRequestFullscreen?e.webkitRequestFullscreen():void 0)())())()},window.addEventListener("keydown",function(t){if(t.ctrlKey&&70===t.keyCode)return t.preventDefault(),e()},!1)},t.exports=e}).call(this)},{}],11:[function(e,t,n){(function(){var e;e=function(){var e,t,n,o,i,r;return i=void 0,e=document.getElementsByTagName("body")[0],t=function(){return e.style.cursor="none"},r=function(){return e.style.cursor="auto"},o=function(){i=setTimeout(t,3e3)},n=function(){clearTimeout(i),r(),o()},window.addEventListener?document.documentElement.addEventListener("mousemove",n,!0):document.documentElement.attachEvent("onmousemove",n,!0)},t.exports=e}).call(this)},{}],12:[function(e,t,n){(function(){var n,o,i,r,s,a,c,l,u;o=e("bespoke"),l=e("bespoke-theme-nebula"),r=e("bespoke-keys"),i=e("bespoke-bullets"),a=e("bespoke-scale"),s=e("bespoke-progress"),n=e("bespoke-backdrop"),u=e("bespoke-touch"),c=function(){window.deck=o.from("#presentation",[i("li, .bullet"),l(),r(),u(),a(),s(),n()])},window.startPresentation=c,t.exports=c}).call(this)},{bespoke:8,"bespoke-backdrop":1,"bespoke-bullets":2,"bespoke-keys":3,"bespoke-progress":4,"bespoke-scale":5,"bespoke-theme-nebula":6,"bespoke-touch":7}]},{},[9]);