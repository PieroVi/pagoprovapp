import{D as e}from"./dx-html-element-base-bd3ae0fb.js";import"./data-qa-utils-8be7c726.js";import"./dom-95153cd1.js";import"./browser-a3d50e79.js";import"./_tslib-158249d5.js";import"./eventhelper-8570b930.js";customElements.define("dxbl-memo-editor",class extends e{constructor(){super(),this.textAreaObserver=new MutationObserver(this.textAreaSizeChanged.bind(this))}connectedCallback(){super.connectedCallback(),this.textAreaObserver.observe(this.getFieldElement(),{attributes:!0})}disconnectedCallback(){this.textAreaObserver.disconnect(),super.disconnectedCallback()}textAreaSizeChanged(e,t){const s=e[0].target,i=parseInt(s.style.width);if(!isNaN(i)){const e=this.offsetWidth-this.clientWidth+i;this.offsetWidth!==e&&(this.style.width=e+"px")}const r=parseInt(s.style.height);if(!isNaN(r)){const e=this.offsetHeight-this.clientHeight+r;this.offsetHeight!==e&&(this.style.height=e+"px")}}getFieldElement(){return this.querySelector("textarea")}});const t={loadModule:function(){}};export{t as default};
