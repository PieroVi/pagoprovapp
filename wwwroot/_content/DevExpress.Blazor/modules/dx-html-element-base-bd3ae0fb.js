import{D as e}from"./data-qa-utils-8be7c726.js";import{D as t}from"./dom-95153cd1.js";import{E as n}from"./eventhelper-8570b930.js";const i=100;var o,s;!function(e){e[e.None=0]="None",e[e.Click=1]="Click",e[e.DblClick=2]="DblClick",e[e.Dragging=4]="Dragging"}(o||(o={})),function(e){e[e.Stopped=0]="Stopped",e[e.WaitingForDragging=1]="WaitingForDragging",e[e.Dragging=2]="Dragging"}(s||(s={}));class r extends CustomEvent{constructor(e){super(r.eventName,{detail:e,bubbles:!0,composed:!1,cancelable:!0})}}r.eventName="dxpointerdragstart";class a extends CustomEvent{constructor(e){super(a.eventName,{detail:e,bubbles:!0,composed:!1,cancelable:!0})}}a.eventName="dxpointerdragstop";class c extends Event{constructor(){super(c.eventName,{bubbles:!0,composed:!1,cancelable:!0})}}c.eventName="dxpointerdragcancel";class d extends CustomEvent{constructor(e){super(d.eventName,{detail:e,bubbles:!0,composed:!1,cancelable:!0})}}d.eventName="dxclick";class h extends CustomEvent{constructor(e){super(h.eventName,{detail:e,bubbles:!0,composed:!1,cancelable:!0})}}h.eventName="dxdblclick";class l{constructor(e){this.boundOnPointerDownHandler=this.onPointerDown.bind(this),this.boundOnPointerMoveHandler=this.onPointerMove.bind(this),this.boundOnPointerUpHandler=this.onPointerUp.bind(this),this.boundOnPointerCancelHandler=this.onPointerCancel.bind(this),this.boundOnDraggingKeyDownHandler=this.onDraggingKeyDown.bind(this),this.boundOnGotPointerCaptureHandler=this.onGotPointerCapture.bind(this),this.boundOnPointerClickHandler=this.onPointerClick.bind(this),this.boundOnPointerDblClickHandler=this.onPointerDblClick.bind(this),this.element=e,this.state=s.Stopped}initialize(){this.addPointerEventsSubscriptions()}dispose(){this.removePointerEventsSubscriptions()}static preventDefaultBrowserBehaviour(e){e.cancelable&&e.preventDefault()}onGotPointerCapture(e){if(!this.shouldProcessPointerEvent(e))return;if(!this.pointerDownContext||!this.pointerDownContext.isLongTap)return;const t=e.target;t&&t.hasPointerCapture(e.pointerId)&&t.releasePointerCapture(e.pointerId)}get handlePointerEventsMode(){return this.element.handlePointerEventsMode}get handlePointerEventsTarget(){return this.element.handlePointerEventsTarget}get handlePointerEventsDelay(){return this.element.handlePointerEventsDelay}shouldProcessPointerEvent(e){return n.containsInComposedPath(e,(e=>e===this.handlePointerEventsTarget))}addPointerEventsSubscriptions(){const e=this.handlePointerEventsTarget;if(e){if(this.element!==e&&this.element.contains(e))throw new Error("Specify the handlePointerEventsTarget property as web component or it parent.");e.addEventListener("click",this.boundOnPointerClickHandler),e.addEventListener("dblclick",this.boundOnPointerDblClickHandler),e.addEventListener("pointerdown",this.boundOnPointerDownHandler),e.addEventListener("gotpointercapture",this.boundOnGotPointerCaptureHandler)}}removePointerEventsSubscriptions(){const e=this.handlePointerEventsTarget;e&&(e.removeEventListener("click",this.boundOnPointerClickHandler),e.removeEventListener("dblclick",this.boundOnPointerDblClickHandler),e.removeEventListener("pointerdown",this.boundOnPointerDownHandler),e.removeEventListener("gotpointercapture",this.boundOnGotPointerCaptureHandler))}onPointerDown(e){var n;if(l.preventClickEvent=!1,!this.shouldProcessPointerEvent(e))return;const i="touch"===e.pointerType;i&&this.state===s.Dragging||(this.pointerDownContext={source:e,isTouch:i,isLongTap:!1},0!=(this.handlePointerEventsMode&o.Dragging)?0===e.button&&(this.state=s.WaitingForDragging,i&&(this.touchDeviceInteractionTimer=setTimeout(this.onTouchDeviceInteractionTimerTimeout.bind(this),this.handlePointerEventsDelay)),document.addEventListener("pointermove",this.boundOnPointerMoveHandler),document.addEventListener("pointerup",this.boundOnPointerUpHandler),document.addEventListener("pointercancel",this.boundOnPointerCancelHandler),document.addEventListener("keydown",this.boundOnDraggingKeyDownHandler),t.addClassName(document.body,"dx-prevent-selection")):e.shiftKey&&(null===(n=null===document||void 0===document?void 0:document.getSelection())||void 0===n||n.removeAllRanges()))}onPointerMove(e){var t;this.state!==s.Stopped&&this.state===s.WaitingForDragging&&((null===(t=this.pointerDownContext)||void 0===t?void 0:t.isTouch)?this.isDistanceExceedLimit(e)&&this.stopPointerInteraction():this.isDistanceExceedLimit(e)&&this.tryStartPointerInteraction())}onPointerCancel(e){if(this.state===s.Stopped)return;this.stopPointerInteraction();const t=new c;this.element.dispatchEvent(t)}onDraggingKeyDown(e){if(this.state!==s.Stopped&&"Escape"===e.key){this.stopPointerInteraction();const e=new c;this.element.dispatchEvent(e)}}onPointerUp(e){if(this.pointerDownContext&&this.state===s.Dragging){const t=new a({source:e,isTouch:this.pointerDownContext.isTouch,isLongTap:this.pointerDownContext.isLongTap});this.element.dispatchEvent(t),this.pointerDownContext.isTouch||(l.preventClickEvent=!0)}this.stopPointerInteraction(),this.element.releasePointerCapture(e.pointerId)}onPointerClick(e){0!=(this.handlePointerEventsMode&o.Click)&&this.shouldProcessPointerEvent(e)&&(l.preventClickEvent||0!==e.button||this.isDistanceExceedLimit(e)?e.stopPropagation():(this.raiseDxPointerEvent(e,new d({source:e,isTouch:!!this.pointerDownContext&&this.pointerDownContext.isTouch}),d.eventName),delete this.pointerDownContext))}onPointerDblClick(e){0!=(this.handlePointerEventsMode&o.DblClick)&&this.shouldProcessPointerEvent(e)&&(0!==e.button||this.isDistanceExceedLimit(e)?e.stopPropagation():this.raiseDxPointerEvent(e,new h({source:e,isTouch:!!this.pointerDownContext&&this.pointerDownContext.isTouch}),h.eventName))}raiseDxPointerEvent(e,t,n){e[n]||(this.element.dispatchEvent(t),e[n]=!0)}tryStartPointerInteraction(){l.pointerInteractionElement?this.state=s.Stopped:this.startPointerInteraction()}startPointerInteraction(){this.state=s.Dragging,l.pointerInteractionElement=this.element,document.addEventListener("touchmove",l.preventDefaultBrowserBehaviour,{passive:!1}),this.raisePointerDragStartEvent()}stopPointerInteraction(){this.clearTouchDeviceInteractionTimer(),this.state===s.Dragging&&(delete l.pointerInteractionElement,this.state=s.Stopped),document.removeEventListener("touchmove",l.preventDefaultBrowserBehaviour),document.removeEventListener("pointermove",this.boundOnPointerMoveHandler),document.removeEventListener("pointerup",this.boundOnPointerUpHandler),document.removeEventListener("pointercancel",this.boundOnPointerCancelHandler),document.removeEventListener("keydown",this.boundOnDraggingKeyDownHandler),t.removeClassName(document.body,"dx-prevent-selection"),delete this.pointerDownContext}clearTouchDeviceInteractionTimer(){this.touchDeviceInteractionTimer&&(clearTimeout(this.touchDeviceInteractionTimer),delete this.touchDeviceInteractionTimer)}onTouchDeviceInteractionTimerTimeout(){this.state===s.WaitingForDragging&&this.pointerDownContext&&this.pointerDownContext.isTouch&&(this.pointerDownContext.isLongTap=!0,this.tryStartPointerInteraction(),this.clearTouchDeviceInteractionTimer())}isDistanceExceedLimit(e){return!!this.pointerDownContext&&(Math.abs(this.pointerDownContext.source.clientX-e.clientX)>4||Math.abs(this.pointerDownContext.source.clientY-e.clientY)>4)}raisePointerDragStartEvent(){if(!this.pointerDownContext)return;const e=new r({source:this.pointerDownContext.source,isTouch:this.pointerDownContext.isTouch,isLongTap:this.pointerDownContext.isLongTap});this.element.dispatchEvent(e)}}l.preventClickEvent=!1;const p=document.createElement("template");p.innerHTML="<slot />";class u extends HTMLElement{constructor(){super(),this._handlePointerEventsMode=o.None,this._isInitialized=!1,this.pointerEventsHelper=new l(this),this.contentChangedObserver=null,this.prepareComponent()}get isInitialized(){return this._isInitialized}get useShadowDom(){return!0}connectedCallback(){!this.useShadowDom&&this.childElementCount>0&&this.componentContentChanged(),this.pointerEventsHelper.initialize(),e.setLoaded(this)}disconnectedCallback(){e.removeLoaded(this),this.pointerEventsHelper.dispose(),this.disposeComponent()}initializeComponent(){}afterInitialize(){}disposeComponent(){var e;null===(e=this.contentChangedObserver)||void 0===e||e.disconnect()}getContentTemplate(){return p}componentContentChanged(){this.initializeComponent(),this._isInitialized=!0,this.afterInitialize()}prepareComponent(){this.useShadowDom?this.prepareShadowDom():(this.contentChangedObserver=new MutationObserver(this.componentContentChanged.bind(this)),this.contentChangedObserver.observe(this,{childList:!0}))}prepareShadowDom(){const e=this.attachShadow({mode:"open"});e.appendChild(this.getContentTemplate().content.cloneNode(!0));e.querySelector("slot").addEventListener("slotchange",this.componentContentChanged.bind(this))}get handlePointerEventsMode(){return this._handlePointerEventsMode}set handlePointerEventsMode(e){this._handlePointerEventsMode=e}get handlePointerEventsTarget(){return this}get handlePointerEventsDelay(){return 500}}export{u as D,o as H,r as P,i as T,a,c as b,d as c,h as d};
