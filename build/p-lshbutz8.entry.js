import{r as t,f as s,c as i,h as r,e,H as h}from"./p-b49b9ea2.js";import{h as o,a as n,b as a}from"./p-7a02f09d.js";const c=class{constructor(i){t(this,i),this.lastToIndex=-1,this.cachedHeights=[],this.scrollElTop=0,this.scrollElBottom=0,this.scrollElInitial=0,this.containerTop=0,this.containerBottom=0,this.state=0,this.disabled=!0,this.ionItemReorder=s(this,"ionItemReorder",7)}disabledChanged(){this.gesture&&this.gesture.setDisabled(this.disabled)}async connectedCallback(){const t=this.el.closest("ion-content");t&&(this.scrollEl=await t.getScrollElement()),this.gesture=(await __sc_import_app("./p-316cddd3.js")).createGesture({el:this.el,gestureName:"reorder",gesturePriority:110,threshold:0,direction:"y",passive:!1,canStart:t=>this.canStart(t),onStart:t=>this.onStart(t),onMove:t=>this.onMove(t),onEnd:()=>this.onEnd()}),this.disabledChanged()}disconnectedCallback(){this.onEnd(),this.gesture&&(this.gesture.destroy(),this.gesture=void 0)}complete(t){return Promise.resolve(this.completeSync(t))}canStart(t){if(this.selectedItemEl||0!==this.state)return!1;const s=t.event.target.closest("ion-reorder");if(!s)return!1;const i=l(s,this.el);return!!i&&(t.data=i,!0)}onStart(t){t.event.preventDefault();const s=this.selectedItemEl=t.data,i=this.cachedHeights;i.length=0;const r=this.el,e=r.children;if(!e||0===e.length)return;let h=0;for(let o=0;o<e.length;o++){const t=e[o];i.push(h+=t.offsetHeight),t.$ionIndex=o}const n=r.getBoundingClientRect();if(this.containerTop=n.top,this.containerBottom=n.bottom,this.scrollEl){const t=this.scrollEl.getBoundingClientRect();this.scrollElInitial=this.scrollEl.scrollTop,this.scrollElTop=t.top+u,this.scrollElBottom=t.bottom-u}else this.scrollElInitial=0,this.scrollElTop=0,this.scrollElBottom=0;this.lastToIndex=d(s),this.selectedItemHeight=s.offsetHeight,this.state=1,s.classList.add(p),o()}onMove(t){const s=this.selectedItemEl;if(!s)return;const i=this.autoscroll(t.currentY),r=this.containerTop-i,e=Math.max(r,Math.min(t.currentY,this.containerBottom-i)),h=i+e-t.startY,o=this.itemIndexForTop(e-r);if(o!==this.lastToIndex){const t=d(s);this.lastToIndex=o,n(),this.reorderMove(t,o)}s.style.transform=`translateY(${h}px)`}onEnd(){const t=this.selectedItemEl;if(this.state=2,!t)return void(this.state=0);const s=this.lastToIndex,i=d(t);s===i?this.completeSync():this.ionItemReorder.emit({from:i,to:s,complete:this.completeSync.bind(this)}),a()}completeSync(t){const s=this.selectedItemEl;if(s&&2===this.state){const i=this.el.children,r=i.length,e=this.lastToIndex,h=d(s);e===h||t&&!0!==t||this.el.insertBefore(s,h<e?i[e+1]:i[e]),Array.isArray(t)&&(t=m(t,h,e));for(let t=0;t<r;t++)i[t].style.transform="";s.style.transition="",s.classList.remove(p),this.selectedItemEl=void 0,this.state=0}return t}itemIndexForTop(t){const s=this.cachedHeights;let i=0;for(i=0;i<s.length&&!(s[i]>t);i++);return i}reorderMove(t,s){const i=this.selectedItemHeight,r=this.el.children;for(let e=0;e<r.length;e++){let h="";e>t&&e<=s?h=`translateY(${-i}px)`:e<t&&e>=s&&(h=`translateY(${i}px)`),r[e].style.transform=h}}autoscroll(t){if(!this.scrollEl)return 0;let s=0;return t<this.scrollElTop?s=-f:t>this.scrollElBottom&&(s=f),0!==s&&this.scrollEl.scrollBy(0,s),this.scrollEl.scrollTop-this.scrollElInitial}render(){const t=i(this);return r(h,{class:{[t]:!0,"reorder-enabled":!this.disabled,"reorder-list-active":0!==this.state}})}get el(){return e(this)}static get watchers(){return{disabled:["disabledChanged"]}}static get style(){return".reorder-list-active>*{-webkit-transition:-webkit-transform .3s;transition:-webkit-transform .3s;transition:transform .3s;transition:transform .3s,-webkit-transform .3s;will-change:transform}.reorder-enabled{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.reorder-enabled ion-reorder{display:block;cursor:-webkit-grab;cursor:grab;pointer-events:all;-ms-touch-action:none;touch-action:none}.reorder-selected,.reorder-selected ion-reorder{cursor:-webkit-grabbing;cursor:grabbing}.reorder-selected{position:relative;-webkit-transition:none!important;transition:none!important;-webkit-box-shadow:0 0 10px rgba(0,0,0,.4);box-shadow:0 0 10px rgba(0,0,0,.4);opacity:.8;z-index:100}.reorder-visible ion-reorder .reorder-icon{-webkit-transform:translateZ(0);transform:translateZ(0)}"}},d=t=>t.$ionIndex,l=(t,s)=>{let i;for(;t;){if((i=t.parentElement)===s)return t;t=i}},u=60,f=10,p="reorder-selected",m=(t,s,i)=>{const r=t[s];return t.splice(s,1),t.splice(i,0,r),t.slice()};export{c as ion_reorder_group};