var __awaiter=this&&this.__awaiter||function(e,t,n,r){function o(e){return e instanceof n?e:new n((function(t){t(e)}))}return new(n||(n=Promise))((function(n,i){function u(e){try{c(r.next(e))}catch(t){i(t)}}function a(e){try{c(r["throw"](e))}catch(t){i(t)}}function c(e){e.done?n(e.value):o(e.value).then(u,a)}c((r=r.apply(e,t||[])).next())}))};var __generator=this&&this.__generator||function(e,t){var n={label:0,sent:function(){if(i[0]&1)throw i[1];return i[1]},trys:[],ops:[]},r,o,i,u;return u={next:a(0),throw:a(1),return:a(2)},typeof Symbol==="function"&&(u[Symbol.iterator]=function(){return this}),u;function a(e){return function(t){return c([e,t])}}function c(u){if(r)throw new TypeError("Generator is already executing.");while(n)try{if(r=1,o&&(i=u[0]&2?o["return"]:u[0]?o["throw"]||((i=o["return"])&&i.call(o),0):o.next)&&!(i=i.call(o,u[1])).done)return i;if(o=0,i)u=[u[0]&2,i.value];switch(u[0]){case 0:case 1:i=u;break;case 4:n.label++;return{value:u[1],done:false};case 5:n.label++;o=u[1];u=[0];continue;case 7:u=n.ops.pop();n.trys.pop();continue;default:if(!(i=n.trys,i=i.length>0&&i[i.length-1])&&(u[0]===6||u[0]===2)){n=0;continue}if(u[0]===3&&(!i||u[1]>i[0]&&u[1]<i[3])){n.label=u[1];break}if(u[0]===6&&n.label<i[1]){n.label=i[1];i=u;break}if(i&&n.label<i[2]){n.label=i[2];n.ops.push(u);break}if(i[2])n.ops.pop();n.trys.pop();continue}u=t.call(e,n)}catch(a){u=[6,a];o=0}finally{r=i=0}if(u[0]&5)throw u[1];return{value:u[0]?u[1]:void 0,done:true}}};System.register(["./p-97191e2f.system.js"],(function(e){"use strict";var t,n,r,o,i,u,a;return{setters:[function(e){t=e.r;n=e.k;r=e.w;o=e.c;i=e.h;u=e.e;a=e.H}],execute:function(){var c=e("ion_ripple_effect",function(){function e(e){t(this,e);this.type="bounded"}e.prototype.addRipple=function(e,t){return __awaiter(this,void 0,void 0,(function(){var o=this;return __generator(this,(function(i){return[2,new Promise((function(i){n((function(){var n=o.el.getBoundingClientRect();var u=n.width;var a=n.height;var c=Math.sqrt(u*u+a*a);var p=Math.max(a,u);var d=o.unbounded?p:c+l;var h=Math.floor(p*s);var v=d/h;var b=e-n.left;var y=t-n.top;if(o.unbounded){b=u*.5;y=a*.5}var w=b-h*.5;var g=y-h*.5;var _=u*.5-b;var m=a*.5-y;r((function(){var e=document.createElement("div");e.classList.add("ripple-effect");var t=e.style;t.top=g+"px";t.left=w+"px";t.width=t.height=h+"px";t.setProperty("--final-scale",""+v);t.setProperty("--translate-end",_+"px, "+m+"px");var n=o.el.shadowRoot||o.el;n.appendChild(e);setTimeout((function(){i((function(){f(e)}))}),225+100)}))}))}))]}))}))};Object.defineProperty(e.prototype,"unbounded",{get:function(){return this.type==="unbounded"},enumerable:true,configurable:true});e.prototype.render=function(){var e;var t=o(this);return i(a,{role:"presentation",class:(e={},e[t]=true,e["unbounded"]=this.unbounded,e)})};Object.defineProperty(e.prototype,"el",{get:function(){return u(this)},enumerable:true,configurable:true});Object.defineProperty(e,"style",{get:function(){return":host{left:0;right:0;top:0;bottom:0;position:absolute;contain:strict;pointer-events:none}:host(.unbounded){contain:layout size style}.ripple-effect{border-radius:50%;position:absolute;background-color:currentColor;color:inherit;contain:strict;opacity:0;-webkit-animation:rippleAnimation 225ms forwards,fadeInAnimation 75ms forwards;animation:rippleAnimation 225ms forwards,fadeInAnimation 75ms forwards;will-change:transform,opacity;pointer-events:none}.fade-out{-webkit-transform:translate(var(--translate-end)) scale(var(--final-scale,1));transform:translate(var(--translate-end)) scale(var(--final-scale,1));-webkit-animation:fadeOutAnimation .15s forwards;animation:fadeOutAnimation .15s forwards}\@-webkit-keyframes rippleAnimation{0%{-webkit-animation-timing-function:cubic-bezier(.4,0,.2,1);animation-timing-function:cubic-bezier(.4,0,.2,1);-webkit-transform:scale(1);transform:scale(1)}to{-webkit-transform:translate(var(--translate-end)) scale(var(--final-scale,1));transform:translate(var(--translate-end)) scale(var(--final-scale,1))}}\@keyframes rippleAnimation{0%{-webkit-animation-timing-function:cubic-bezier(.4,0,.2,1);animation-timing-function:cubic-bezier(.4,0,.2,1);-webkit-transform:scale(1);transform:scale(1)}to{-webkit-transform:translate(var(--translate-end)) scale(var(--final-scale,1));transform:translate(var(--translate-end)) scale(var(--final-scale,1))}}\@-webkit-keyframes fadeInAnimation{0%{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:0}to{opacity:.16}}\@keyframes fadeInAnimation{0%{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:0}to{opacity:.16}}\@-webkit-keyframes fadeOutAnimation{0%{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:.16}to{opacity:0}}\@keyframes fadeOutAnimation{0%{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:.16}to{opacity:0}}"},enumerable:true,configurable:true});return e}());var f=function(e){e.classList.add("fade-out");setTimeout((function(){e.remove()}),200)};var l=10;var s=.5}}}));