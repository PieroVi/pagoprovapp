import{l as e}from"./dom-utils-2919d18e.js";import{P as t}from"./masks-e898ae04.js";import{I as o}from"./input-group-container-b4c66034.js";import"./dom-95153cd1.js";import"./browser-a3d50e79.js";import"./_tslib-158249d5.js";import"./key-a83dbe57.js";import"./disposable-d2c2d283.js";import"./dx-ui-element-de378e9d.js";import"./logicaltreehelper-15991dcb.js";import"./layouthelper-4b19d191.js";import"./rect-7fc5c2ef.js";import"./point-9c6ab88a.js";import"./lit-element-base-af247167.js";import"./data-qa-utils-8be7c726.js";import"./lit-element-b0a6fcba.js";class n extends o{recalculateInputPadding(e,t,o){super.recalculateInputPadding(e,t,o),o||this.checkLoader(t)}checkLoader(o){const i=this.getInputElement(),r=e(i,".dxbs-input-group");if(r){const e=t.get(r.querySelector(".dxbs-preloader-container"));if(e){e.changeInitialPaddingRight(o);const t=r.querySelectorAll("button");t&&(t.forEach((e=>{e.addEventListener("click",n.blockEvent),e.addEventListener("mousedown",n.blockEvent),e.addEventListener("mouseup",n.blockEvent)})),e.registerOnHideAction((function(){t.forEach((e=>{e.removeEventListener("click",n.blockEvent),e.removeEventListener("mousedown",n.blockEvent),e.removeEventListener("mouseup",n.blockEvent)}))})))}}}static blockEvent(e){e.preventDefault(),e.stopPropagation()}}function i(e){return new Promise(((t,o)=>{e||t(!1);t(0===e.selectionStart&&e.selectionEnd===(e.value?e.value.length:0)&&document.activeElement===e)}))}function r(e){e&&document.activeElement===e&&e.select()}customElements.define("dxbl-button-edit-input-group",n);const s={loadModule:function(){},isInputValueHighlighted:i,highlightInputValue:r};export{s as default,r as highlightInputValue,i as isInputValueHighlighted};
