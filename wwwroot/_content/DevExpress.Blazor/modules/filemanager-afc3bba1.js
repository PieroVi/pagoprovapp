import{D as e}from"./dx-html-element-base-bd3ae0fb.js";import{C as t}from"./custom-events-helper-18f7786a.js";import"./data-qa-utils-8be7c726.js";import"./dom-95153cd1.js";import"./browser-a3d50e79.js";import"./_tslib-158249d5.js";import"./eventhelper-8570b930.js";class n{constructor(e,t,n){this.Key=e.key,this.Code=e.code,this.CtrlKey=e.ctrlKey,this.AltKey=e.altKey,this.ShiftKey=e.shiftKey,this.MetaKey=e.metaKey,this.ThumbInRow=t,this.SeeingThumbInCol=n}}class o extends CustomEvent{constructor(e,t,s){super(o.eventName,{detail:new n(e,t,s),bubbles:!0,composed:!0,cancelable:!0})}}o.eventName="dxbl-file-manager.keup",t.register(o.eventName,(e=>e.detail));class s extends e{constructor(){super(),this.onKeyUpHandler=this.onKeyUp.bind(this),this.onKeyDownHandler=this.onKeyDown.bind(this),this.onMouseDownHandler=this.onMouseDown.bind(this),this.onMouseDownResizeHandler=this.onMouseDownResize.bind(this),this.onSplitterResizeHandler=this.onSplitterResize.bind(this),this.onMouseUpHandler=this.onMouseUp.bind(this)}initializeComponent(){super.initializeComponent(),this.addEvents()}disposeComponent(){this.removeEvents(),super.disposeComponent()}getResizeElement(){return this.querySelector("div.dxbs-splitter")}getPanel(){return this.querySelector(".dxbs-filemanager-dirs-panel")}addEvents(){this.addEventListener("keyup",this.onKeyUpHandler),this.addEventListener("keydown",this.onKeyDownHandler),this.addEventListener("mousedown",this.onMouseDownHandler),this.getResizeElement().addEventListener("mousedown",this.onMouseDownResizeHandler)}removeEvents(){this.removeEventListener("keyup",this.onKeyUpHandler),this.removeEventListener("keydown",this.onKeyDownHandler),this.removeEventListener("mousedown",this.onMouseDownHandler),this.removeEventListener("mousedown",this.onMouseDownResizeHandler)}onKeyUp(e){const t=this.needCalcSeeingThumbInCol(e),n=this.needCalculateThumnailsInRow(e)||t;if(this.isSupportedKey(e)||n){e.stopPropagation(),e.preventDefault();let s=-1,i=-1;const r=this.querySelector("div.dxbl-filemanager-thumbnails-container");if(r&&n){const e=r.children;e&&(s=this.calculateThumbnailsInRow(e),t&&(i=Math.floor(r.getBoundingClientRect().height/e[0].getBoundingClientRect().height)))}this.dispatchEvent(new o(e,s,i))}}onKeyDown(e){this.needEvtStopPropagation(e)&&(e.stopPropagation(),e.preventDefault())}onMouseDown(e){this.focus()}onMouseDownResize(e){e.preventDefault(),this.addEventListener("mousemove",this.onSplitterResizeHandler),this.addEventListener("mouseup",this.onMouseUpHandler)}onMouseUp(){this.removeEventListener("mousemove",this.onSplitterResizeHandler),this.removeEventListener("mouseup",this.onMouseUpHandler)}onSplitterResize(e){const t=this.getPanel();if(t){const n=window.getComputedStyle(t),o=this.getBoundingClientRect(),s=parseInt(n.paddingLeft,10);if(e.pageX>o.right)t.style.width="100%";else{let n=e.pageX-o.left;e.pageX<o.left&&(n=s),t.style.width=n+"px"}}}needEvtStopPropagation(e){return this.isSupportedKey(e)||this.needCalculateThumnailsInRow(e)||this.needCalcSeeingThumbInCol(e)}calculateThumbnailsInRow(e){let t=0;const n=e[t].getBoundingClientRect().top;let o=n;for(;n===o;){t++;if(!e[t])break;o=e[t].getBoundingClientRect().top}return t}isSupportedKey(e){return"ArrowLeft"===e.key||"ArrowRight"===e.key||"Enter"===e.key||"Space"===e.key||"Home"===e.key||"End"===e.key||"F2"===e.key||"F6"===e.key||"F7"===e.key||"Delete"===e.key}needCalculateThumnailsInRow(e){return"ArrowUp"===e.key||"ArrowDown"===e.key}needCalcSeeingThumbInCol(e){return"PageDown"===e.key||"PageUp"===e.key}downloadItems(e){e.length>0&&(e.forEach((e=>{this.downloadItem(e.ByteArray,e.Name)})),this.dispatchEvent(new Event("dxbl-file-manager.downloadcomplete",{composed:!0,bubbles:!0})))}downloadItem(e,t){const n="application/"+t.split(".").pop(),o=1024,s=atob(e),i=s.length,r=Math.ceil(i/o),a=new Array(r);for(let e=0;e<r;++e){const t=e*o,n=Math.min(t+o,i),r=new Array(n-t);for(let e=t,o=0;e<n;++o,++e)r[o]=s[e].charCodeAt(0);a[e]=new Uint8Array(r)}const l=new Blob(a,{type:n}),d=window.document.createElement("a");d.href=window.URL.createObjectURL(l),d.download=t,document.body.appendChild(d),d.click(),document.body.removeChild(d)}static get observedAttributes(){return["download-items"]}attributeChangedCallback(e,t,n){"download-items"===e&&this.downloadItems(JSON.parse(n))}}customElements.define("dxbl-file-manager",s);const i={loadModule:function(){}};export{s as DxFileManager,i as default};
