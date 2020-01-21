import{r as t,k as s,w as i,h as e,H as h,e as n}from"./p-b49b9ea2.js";const r=(t,s)=>{const i=o(t,s);return i&&t.ownerDocument?t.ownerDocument.importNode(i.content,!0).children[0]:null},o=(t,s)=>{switch(s){case"item":return t.querySelector("template:not([name])");case"header":return t.querySelector("template[name=header]");case"footer":return t.querySelector("template[name=footer]")}},a=(t,s,i,e,h,n,r,o,a,l,c,u)=>{const d=[],f=u+c;for(let m=c;m<f;m++){const c=t[m];if(h){const s=h(c,m,t);null!=s&&d.push({i:l++,type:"header",value:s,index:m,height:i?i(s,m):r,reads:i?0:2,visible:!!i})}if(d.push({i:l++,type:"item",value:c,index:m,height:s?s(c,m):a,reads:s?0:2,visible:!!s}),n){const s=n(c,m,t);null!=s&&d.push({i:l++,type:"footer",value:s,index:m,height:e?e(s,m):o,reads:e?0:2,visible:!!e})}}return d},l=class{constructor(s){t(this,s),this.range={offset:0,length:0},this.viewportHeight=0,this.cells=[],this.virtualDom=[],this.isEnabled=!1,this.viewportOffset=0,this.currentScrollTop=0,this.indexDirty=0,this.lastItemLen=0,this.totalHeight=0,this.approxItemHeight=45,this.approxHeaderHeight=30,this.approxFooterHeight=30,this.onScroll=()=>{this.updateVirtualScroll()}}itemsChanged(){this.calcCells(),this.updateVirtualScroll()}async connectedCallback(){const t=this.el.closest("ion-content");t?(this.scrollEl=await t.getScrollElement(),this.contentEl=t,this.calcCells(),this.updateState()):console.error("<ion-virtual-scroll> must be used inside an <ion-content>")}componentDidUpdate(){this.updateState()}disconnectedCallback(){this.scrollEl=void 0}onResize(){this.calcCells(),this.updateVirtualScroll()}positionForItem(t){return Promise.resolve(((t,s,i)=>{const e=s.find(s=>"item"===s.type&&s.index===t);return e?i[e.i]:-1})(t,this.cells,this.getHeightIndex()))}async checkRange(t,s=-1){if(!this.items)return;const i=-1===s?this.items.length-t:s,e=((t,s)=>0===s?0:s===(t.length>0?t[t.length-1].index:0)+1?t.length:t.findIndex(t=>t.index===s))(this.cells,t),h=a(this.items,this.itemHeight,this.headerHeight,this.footerHeight,this.headerFn,this.footerFn,this.approxHeaderHeight,this.approxFooterHeight,this.approxItemHeight,e,t,i);this.cells=((t,s,i)=>{if(0===i&&s.length>=t.length)return s;for(let e=0;e<s.length;e++)t[e+i]=s[e];return t})(this.cells,h,e),this.lastItemLen=this.items.length,this.indexDirty=Math.max(t-1,0),this.scheduleUpdate()}async checkEnd(){this.items&&this.checkRange(this.lastItemLen)}updateVirtualScroll(){this.isEnabled&&this.scrollEl&&(this.timerUpdate&&(clearTimeout(this.timerUpdate),this.timerUpdate=void 0),s(this.readVS.bind(this)),i(this.writeVS.bind(this)))}readVS(){const{contentEl:t,scrollEl:s,el:i}=this;let e=0,h=i;for(;h&&h!==t;)e+=h.offsetTop,h=h.parentElement;this.viewportOffset=e,s&&(this.viewportHeight=s.offsetHeight,this.currentScrollTop=s.scrollTop)}writeVS(){const t=this.indexDirty,s=((t,s)=>({top:Math.max(t-100,0),bottom:t+s+100}))(this.currentScrollTop-this.viewportOffset,this.viewportHeight),i=this.getHeightIndex(),e=((t,s)=>{const i=s.top,e=s.bottom;let h=0;for(;h<t.length&&!(t[h]>i);h++);const n=Math.max(h-2-1,0);for(;h<t.length&&!(t[h]>=e);h++);return{offset:n,length:Math.min(h+2,t.length)-n}})(i,s);((t,s,i)=>t<=i.offset+i.length||s.offset!==i.offset||s.length!==i.length)(t,this.range,e)&&(this.range=e,((t,s,i,e)=>{for(const o of t)o.change=0,o.d=!0;const h=[],n=e.offset+e.length;for(let o=e.offset;o<n;o++){const e=i[o],n=t.find(t=>t.d&&t.cell===e);if(n){const t=s[o];t!==n.top&&(n.top=t,n.change=1),n.d=!1}else h.push(e)}const r=t.filter(t=>t.d);for(const o of h){const i=r.find(t=>t.d&&t.cell.type===o.type),e=o.i;i?(i.d=!1,i.change=2,i.cell=o,i.top=s[e]):t.push({d:!1,cell:o,visible:!0,change:2,top:s[e]})}t.filter(t=>t.d&&-9999!==t.top).forEach(t=>{t.change=1,t.top=-9999})})(this.virtualDom,i,this.cells,e),this.nodeRender?((t,s,i,e)=>{const h=Array.from(t.children).filter(t=>"TEMPLATE"!==t.tagName),n=h.length;let o;for(let a=0;a<i.length;a++){const l=i[a],c=l.cell;if(2===l.change){if(a<n)s(o=h[a],c,a);else{const i=r(t,c.type);(o=s(i,c,a)||i).classList.add("virtual-item"),t.appendChild(o)}o.$ionCell=c}else o=h[a];0!==l.change&&(o.style.transform=`translate3d(0,${l.top}px,0)`);const u=c.visible;l.visible!==u&&(u?o.classList.remove("virtual-loading"):o.classList.add("virtual-loading"),l.visible=u),c.reads>0&&(e(c,o),c.reads--)}})(this.el,this.nodeRender,this.virtualDom,this.updateCellHeight.bind(this)):this.domRender?this.domRender(this.virtualDom):this.renderItem&&this.el.forceUpdate())}updateCellHeight(t,s){const i=()=>{if(s.$ionCell===t){const i=window.getComputedStyle(s),e=s.offsetHeight+parseFloat(i.getPropertyValue("margin-bottom"));this.setCellHeight(t,e)}};s&&s.componentOnReady?s.componentOnReady().then(i):i()}setCellHeight(t,s){const i=t.i;t===this.cells[i]&&(t.height===s&&!0===t.visible||(t.visible=!0,t.height=s,this.indexDirty=Math.min(this.indexDirty,i),this.scheduleUpdate()))}scheduleUpdate(){clearTimeout(this.timerUpdate),this.timerUpdate=setTimeout(()=>this.updateVirtualScroll(),100)}updateState(){const t=!(!this.scrollEl||!this.cells);t!==this.isEnabled&&(this.enableScrollEvents(t),t&&this.updateVirtualScroll())}calcCells(){this.items&&(this.lastItemLen=this.items.length,this.cells=a(this.items,this.itemHeight,this.headerHeight,this.footerHeight,this.headerFn,this.footerFn,this.approxHeaderHeight,this.approxFooterHeight,this.approxItemHeight,0,0,this.lastItemLen),this.indexDirty=0)}getHeightIndex(){return this.indexDirty!==1/0&&this.calcHeightIndex(this.indexDirty),this.heightIndex}calcHeightIndex(t=0){this.heightIndex=((t,s)=>{if(!t)return new Uint32Array(s);if(t.length===s)return t;if(s>t.length){const i=new Uint32Array(s);return i.set(t),i}return t.subarray(0,s)})(this.heightIndex,this.cells.length),this.totalHeight=((t,s,i)=>{let e=t[i];for(let h=i;h<t.length;h++)t[h]=e,e+=s[h].height;return e})(this.heightIndex,this.cells,t),this.indexDirty=1/0}enableScrollEvents(t){this.rmEvent&&(this.rmEvent(),this.rmEvent=void 0);const s=this.scrollEl;s&&(this.isEnabled=t,s.addEventListener("scroll",this.onScroll),this.rmEvent=()=>{s.removeEventListener("scroll",this.onScroll)})}renderVirtualNode(t){const{type:s,value:i,index:e}=t.cell;switch(s){case"item":return this.renderItem(i,e);case"header":return this.renderHeader(i,e);case"footer":return this.renderFooter(i,e)}}render(){return e(h,{style:{height:`${this.totalHeight}px`}},this.renderItem&&e(c,{dom:this.virtualDom},this.virtualDom.map(t=>this.renderVirtualNode(t))))}get el(){return n(this)}static get watchers(){return{itemHeight:["itemsChanged"],headerHeight:["itemsChanged"],footerHeight:["itemsChanged"],items:["itemsChanged"]}}static get style(){return"ion-virtual-scroll{display:block;position:relative;width:100%;contain:strict;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}ion-virtual-scroll>.virtual-loading{opacity:0}ion-virtual-scroll>.virtual-item{position:absolute!important;top:0!important;right:0!important;left:0!important;-webkit-transition-duration:0ms;transition-duration:0ms;will-change:transform}"}},c=({dom:t},s,i)=>i.map(s,(s,i)=>{const e=t[i],h=s.vattrs||{};let n=h.class||"";return n+="virtual-item ",e.visible||(n+="virtual-loading"),Object.assign(Object.assign({},s),{vattrs:Object.assign(Object.assign({},h),{class:n,style:Object.assign(Object.assign({},h.style),{transform:`translate3d(0,${e.top}px,0)`})})})});export{l as ion_virtual_scroll};