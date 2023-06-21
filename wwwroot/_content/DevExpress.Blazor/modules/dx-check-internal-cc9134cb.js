import{a as e}from"./_tslib-158249d5.js";import{L as t}from"./lit-element-base-af247167.js";import{E as a}from"./elementobserver-5f004683.js";import{$ as n,s as c}from"./lit-element-b0a6fcba.js";import{e as s}from"./property-d3853089.js";import{n as h}from"./custom-element-bd7061f2.js";import"./data-qa-utils-8be7c726.js";var i;!function(e){e[e.Indeterminate=0]="Indeterminate",e[e.Checked=1]="Checked",e[e.Unchecked=2]="Unchecked"}(i||(i={}));let o=class extends t{constructor(){super(...arguments),this.slotChangedHandler=this.handleSlotChange.bind(this),this.check=null,this.observersStack=[],this.checkState=i.Unchecked,this.allowIndeterminateStateByClick=!1,this.actualCheckState=i.Unchecked,this.boundOnInputChangeHandler=this.onInputChange.bind(this)}get value(){return this.actualCheckState===i.Indeterminate?"":Boolean(this.actualCheckState===i.Checked).toString()}createObserver(e){return new a("input",this.inputCallback.bind(this))}getNextCheckState(){let e=this.checkState+1;return e>i.Unchecked&&(e=this.allowIndeterminateStateByClick?i.Indeterminate:i.Checked),e}onInputChange(e){this.actualCheckState=this.getNextCheckState(),this.dispatchEvent(new Event("change",{bubbles:!0}))}applyCheckStateToElements(){this.check&&(this.check.indeterminate=this.actualCheckState===i.Indeterminate,this.check.checked=this.actualCheckState===i.Checked)}render(){return n`
            <slot @slotchange=${this.slotChangedHandler}></slot>
        `}handleSlotChange(e){for(const e of this.observersStack)e.disconnect();this.observersStack=[];const t=e.target;for(const e of t.assignedNodes())if(e instanceof HTMLElement){const t=this.createObserver("input");t.observe(e),this.observersStack.push(t)}}updateCheck(e){this.check&&this.check.removeEventListener("change",this.boundOnInputChangeHandler),this.check=e,this.applyCheckStateToElements(),this.check&&this.check.addEventListener("change",this.boundOnInputChangeHandler)}inputCallback(e,t){this.updateCheck(e.element)}willUpdate(e){e.has("checkState")&&(this.actualCheckState=this.checkState)}updated(e){(e.has("actualCheckState")||e.has("allowIndeterminateStateByClick"))&&this.applyCheckStateToElements()}};o.shadowRootOptions={...c.shadowRootOptions,delegatesFocus:!0},e([s({type:Number,attribute:"check-state"})],o.prototype,"checkState",void 0),e([s({type:Boolean,attribute:"allow-indeterminate-state-by-click"})],o.prototype,"allowIndeterminateStateByClick",void 0),e([s({type:Boolean,reflect:!1})],o.prototype,"actualCheckState",void 0),o=e([h("dxbl-check")],o);const r={loadModule:function(){}};export{o as DxCheckInternal,r as default};
