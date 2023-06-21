import{L as e,D as t}from"./layouthelper-4b19d191.js";import{a as s,R as i}from"./rect-7fc5c2ef.js";import{R as r}from"./rafaction-bba7928b.js";import"./point-9c6ab88a.js";class n extends CustomEvent{constructor(e){super(n.eventName,{detail:e,bubbles:!0,cancelable:!0})}}n.eventName="dxbl-position-changing";class o extends CustomEvent{constructor(e){super(o.eventName,{detail:e,bubbles:!0,cancelable:!0})}}o.eventName="dxbl-position-changed";class a extends HTMLElement{constructor(){super(...arguments),this.observer=null,this.targetField="",this.listenedIdField="",this.elementScrollHandler=this.handleElementScroll.bind(this),this.resizeHandler=this.handleResize.bind(this),this.mutationObserver=new MutationObserver(this.handleMutations.bind(this)),this.overflows=[],this.resizing=[],this.targetElement=null,this.rafAction=new r}get target(){return this.targetField}set target(e){this.targetField=e}get listenerId(){return this.listenedIdField}set listenerId(e){this.listenedIdField=e}connectedCallback(){this.initializeObserver(),this.subscribeToOverflows()}getTargetBoundingClientRect(){return this.targetElement?i.fromDomRect(this.targetElement.getBoundingClientRect()):s.Empty}initializeObserver(){this.destroyObserver();const e=this.querySelector(this.target);if(!e)return void this.mutationObserver.observe(this,{childList:!0,subtree:!0});this.observer=new IntersectionObserver((function(e,t){}),{root:e,rootMargin:"0px",threshold:0}),this.observer.observe(this),this.targetElement=e}disconnectedCallback(){this.destroyObserver()}destroyObserver(){var e;this.mutationObserver.disconnect(),null===(e=this.observer)||void 0===e||e.disconnect(),this.observer=null}static get observedAttributes(){return["target","listener-id"]}attributeChangedCallback(e,t,s){switch(e){case"target":this.targetChanged(s);break;case"listener-id":this.listenerIdChanged(s)}}handleMutations(e){const t=this.querySelector(this.target);t&&(this.targetElement=t,this.mutationObserver.disconnect(),this.initializeObserver(),this.subscribeToOverflows())}handleResize(e,t){this.raisePositionChanging(),this.rafAction.execute((()=>this.raisePositionChanged()))}targetChanged(e){this.target=e,this.initializeObserver()}listenerIdChanged(e){this.listenerId=e}raisePositionChanging(){const e=new n({Tracker:this});this.dispatchEvent(e)}raisePositionChanged(){const e=new o({Tracker:this});this.dispatchEvent(e)}subscribeToOverflows(){if(!this.targetElement)return;const s=[],i=[];for(const r of e.getRootPath(this.targetElement)){const e=r;if(!e)return;new ResizeObserver(this.resizeHandler).observe(e,{box:"border-box"}),i.push(),t.isScrollable(e)&&(e.addEventListener("scroll",this.elementScrollHandler,{capture:!0}),s.push(e))}this.overflows=s,this.resizing=i}unsubscribeFromOverflows(){this.overflows.forEach((e=>{e.removeEventListener("scroll",this.elementScrollHandler)})),this.resizing.forEach((e=>{e.disconnect()}))}handleElementScroll(e){this.raisePositionChanging(),this.rafAction.execute((()=>this.raisePositionChanged()))}}function l(){}customElements.define("dxbl-position-tracker",a);const h={init:l,PositionTracker:a};export{o as PositionChangedEvent,n as PositionChangingEvent,a as PositionTracker,h as default,l as init};
