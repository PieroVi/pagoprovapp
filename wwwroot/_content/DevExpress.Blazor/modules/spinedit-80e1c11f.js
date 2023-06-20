import{B as e}from"./browser-a3d50e79.js";import{D as t}from"./dom-95153cd1.js";import{k as n}from"./key-a83dbe57.js";import{DxInputEditorBase as i,EditorsProccessedEvents as s}from"./input-3f0baf75.js";import{E as o}from"./eventhelper-8570b930.js";import"./_tslib-158249d5.js";import"./dx-ui-handlers-bridge-4076ae57.js";import"./input-group-container-b4c66034.js";import"./dx-ui-element-de378e9d.js";import"./logicaltreehelper-15991dcb.js";import"./layouthelper-4b19d191.js";import"./rect-7fc5c2ef.js";import"./point-9c6ab88a.js";import"./lit-element-base-af247167.js";import"./data-qa-utils-8be7c726.js";import"./lit-element-b0a6fcba.js";import"./masks-e898ae04.js";import"./disposable-d2c2d283.js";import"./dom-utils-2919d18e.js";var r;!function(e){e[e.None=0]="None",e[e.ArrowUp=1]="ArrowUp",e[e.ArrowDown=2]="ArrowDown",e[e.SpinButton=3]="SpinButton"}(r||(r={}));customElements.define("dxbl-spinedit",class extends i{constructor(){super(...arguments),this.LongTapTrigger=r.None,this.needExponentialView=!1,this.useAdaptiveLayout=!1,this.regex=/^-?(\d)*$/,this.wheelTimerId=-1,this.pointerDownTimerId=-1,this.previousValue="",this.selectionStateBeforePaste={start:null,end:null},this.boundOnInputHandler=this.onInput.bind(this),this.boundOnPasteHandler=this.onPaste.bind(this),this.boundOnMouseWheelHandler=this.onMouseWheel.bind(this),this.boundOnKeyDownHandler=this.onKeyDown.bind(this),this.boundOnKeyUpHandler=this.onKeyUp.bind(this),this.boundButtonOnPointerDownHandler=this.onButtonPointerDown.bind(this),this.boundButtonOnPointerUpHandler=this.onButtonPointerUp.bind(this)}connectedCallback(){this.useAdaptiveLayout=this.useAdaptiveLayout||e.MobileUI,this.useAdaptiveLayout&&this.setAttribute("use-adaptive-layout",""),super.connectedCallback(),this.addEventSubscription()}disconnectedCallback(){this.removeEventListener("input",this.boundOnInputHandler),this.removeEventListener("paste",this.boundOnPasteHandler),this.removeEventListener("keydown",this.boundOnKeyDownHandler),this.removeEventListener("pointerdown",this.boundButtonOnPointerDownHandler),this.removeEventListener("keyup",this.boundOnKeyUpHandler),this.removeEventListener("wheel",this.boundOnMouseWheelHandler),super.disconnectedCallback()}addEventSubscription(){this.addEventListener("input",this.boundOnInputHandler),this.addEventListener("paste",this.boundOnPasteHandler),this.addEventListener("keydown",this.boundOnKeyDownHandler),this.addEventListener("pointerdown",this.boundButtonOnPointerDownHandler),this.addEventListener("keyup",this.boundOnKeyUpHandler),this.bitsHasEvent(this.proccessedEvents,s.Wheel)&&this.addEventListener("wheel",this.boundOnMouseWheelHandler,{passive:!1})}registerButton(e){(t.hasClassName(e,"inc")||t.hasClassName(e,"dec"))&&e.addEventListener("pointerdown",this.boundButtonOnPointerDownHandler)}unregisterButton(e){(t.hasClassName(e,"inc")||t.hasClassName(e,"dec"))&&(e.removeEventListener("pointerup",this.boundButtonOnPointerUpHandler),e.removeEventListener("pointerout",this.boundButtonOnPointerUpHandler),e.removeEventListener("pointerdown",this.boundButtonOnPointerDownHandler))}onInput(e){if(!this.bitsHasEvent(this.proccessedEvents,s.Input))return;if(!this.inputElement||!o.containsInComposedPath(e,(e=>e===this.inputElement)))return;let t=this.selectionStateBeforePaste.start?this.inputElement.value.trim():this.inputElement.value;this.decimalSeparator&&(t=t.replace(/[.|,]/g,this.decimalSeparator));let n=this.inputElement.selectionStart,i=this.inputElement.selectionEnd;this.regex.test(t)?(t!==this.inputElement.value&&(this.inputElement.value=t),this.previousValue=t):(this.selectionStateBeforePaste.start&&this.selectionStateBeforePaste.end?(n=this.selectionStateBeforePaste.start,i=this.selectionStateBeforePaste.end):n&&i&&this.previousValue&&(n--,i+=this.previousValue.length-t.length),this.inputElement.value=this.previousValue),this.selectionStateBeforePaste.start&&(this.selectionStateBeforePaste.start=null,this.selectionStateBeforePaste.end=null),this.inputElement.selectionStart=n,this.inputElement.selectionEnd=i}onPaste(e){this.bitsHasEvent(this.proccessedEvents,s.Paste)&&this.inputElement&&o.containsInComposedPath(e,(e=>e===this.inputElement))&&(this.selectionStateBeforePaste.start=this.inputElement.selectionStart,this.selectionStateBeforePaste.end=this.inputElement.selectionEnd)}onKeyDown(e){const t=this.getInputElement();if(o.containsInComposedPath(e,(e=>e===t))&&this.isNavigationKey(e)&&(this.LongTapTrigger===r.None||this.isButtonEqualLongTapTrigger(e.keyCode))){e.preventDefault();const t=e.keyCode===n.KeyCode.Up;this.LongTapTrigger===r.None&&(this.LongTapTrigger=t?r.ArrowUp:r.ArrowDown),this.sendChangeValue(t)}}onKeyUp(e){var t;this.inputElement&&o.containsInComposedPath(e,(e=>e===this.inputElement))&&this.isNavigationKey(e)&&this.isButtonEqualLongTapTrigger(e.keyCode)&&(this.LongTapTrigger=r.None,null===(t=this.uiHandlersBridge)||void 0===t||t.send("applyValue",null))}onInputFocusOut(e){var t,n,i;(null===(t=this.inputElement)||void 0===t?void 0:t.suppressFocusEvents)||(this.LongTapTrigger!==r.ArrowUp&&this.LongTapTrigger!==r.ArrowDown||(this.LongTapTrigger=r.None,null===(n=this.uiHandlersBridge)||void 0===n||n.send("applyValue",null)),this.bitsHasEvent(this.proccessedEvents,s.FocusOut)&&super.onInputFocusOut(e),null===(i=this.uiHandlersBridge)||void 0===i||i.send("refreshMask",null))}isButtonEqualLongTapTrigger(e){return e===n.KeyCode.Up&&this.LongTapTrigger===r.ArrowUp||e===n.KeyCode.Down&&this.LongTapTrigger===r.ArrowDown}onMouseWheel(e){if(!this.inputElement||!this.checkValidInput(this.inputElement)||document.activeElement!==this.inputElement)return;-1!==this.wheelTimerId&&clearTimeout(this.wheelTimerId),e.preventDefault(),this.sendChangeValue(e.deltaY<0);this.wheelTimerId=window.setTimeout((()=>{var e;null===(e=this.uiHandlersBridge)||void 0===e||e.send("applyValue",null)}).bind(this),500)}onButtonPointerDown(e){const n=this.getButton(e);if(!n||this.LongTapTrigger!==r.None||!this.inputElement)return;e.preventDefault(),this.LongTapTrigger=r.SpinButton,this.useAdaptiveLayout||t.setFocus(this.inputElement);const i=t.hasClassName(n,"inc");this.sendChangeValue(i),this.pointerDownTimerId=window.setTimeout(this.startPointerLongTap.bind(this),1e3,i),n.addEventListener("pointerup",this.boundButtonOnPointerUpHandler),n.addEventListener("pointerout",this.boundButtonOnPointerUpHandler)}getButton(e){const n=e.composedPath();for(const e in n){const i=n[e];if(i&&t.hasClassName(i,"dxbs-edit-btn"))return i}return null}startPointerLongTap(e){this.pointerDownTimerId=window.setInterval(this.sendChangeValue.bind(this),50,e)}onButtonPointerUp(e){var n;let i=e.target;t.hasClassName(i,"dxbs-edit-btn")||(i=t.getParentByTagName(i,"button")),clearTimeout(this.pointerDownTimerId),this.LongTapTrigger=r.None,i.removeEventListener("pointerup",this.boundButtonOnPointerUpHandler),i.removeEventListener("pointerout",this.boundButtonOnPointerUpHandler),null===(n=this.uiHandlersBridge)||void 0===n||n.send("applyValue",null)}sendChangeValue(e){var t;const n={increment:e,value:this.getCurrentInputValue()};null===(t=this.uiHandlersBridge)||void 0===t||t.send("changeValue",n)}getCurrentInputValue(){const e=this.getInputElement(),t=e.getAttribute("dx-mask-value");return null==t?e.value:t}checkValidInput(e){return!e.disabled&&!e.readOnly}isNavigationKey(e){return e.keyCode===n.KeyCode.Up||e.keyCode===n.KeyCode.Down}subscribeNewEvents(e){super.subscribeNewEvents(e);const t=this.getInputElement();e&&t&&(this.bitsHasEvent(e,s.Input)&&t.addEventListener("input",this.boundOnInputHandler),this.bitsHasEvent(e,s.Paste)&&t.addEventListener("paste",this.boundOnPasteHandler),this.bitsHasEvent(e,s.Wheel)&&this.addEventListener("wheel",this.boundOnMouseWheelHandler,{passive:!1}))}unsubscribeOldEvents(e){super.unsubscribeOldEvents(e),e&&this.inputElement&&(this.bitsHasEvent(e,s.Input)&&this.inputElement.removeEventListener("input",this.boundOnInputHandler),this.bitsHasEvent(e,s.Paste)&&this.inputElement.removeEventListener("paste",this.boundOnPasteHandler),this.bitsHasEvent(e,s.Wheel)&&this.removeEventListener("wheel",this.boundOnMouseWheelHandler))}static get observedAttributes(){return this.baseObservedAttributes.concat(["decimal-separator","need-exponential-view","use-adaptive-layout","previous-value"])}attributeChangedCallbackInternal(e,t,n){switch(e){case"decimal-separator":this.decimalSeparator=n,this.applyRegex();break;case"need-exponential-view":this.needExponentialView=null!==n,this.applyRegex();break;case"use-adaptive-layout":this.useAdaptiveLayout=null!==n;break;case"previous-value":this.previousValue=n}}applyRegex(){this.decimalSeparator&&(this.regex=this.needExponentialView?/^-?(\d+|[,.]\d+|\d+[,.]\d+|\d+[,.]|[,.])?([eE]?[+-]?(\d)*)?$/:/^-?(\d+|[,.]\d+|\d+[,.]\d+|\d+[,.]|[,.])?$/)}});const a={loadModule:function(){}};export{a as default};
