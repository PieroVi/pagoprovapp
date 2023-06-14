import{v as e,p as s}from"./popuproot-d37b16a2.js";import{L as t,i as a}from"./logicaltreehelper-15991dcb.js";import{D as o}from"./dx-ui-element-de378e9d.js";class i{}i.visible="visible",i.hidden="hidden",i.collapse="collapse";class l{}l.block="block",l.inline="inline",l.inlineBlock="inline-block",l.inlineTable="inline-table",l.listItem="list-item",l.none="none",l.runIn="run-in",l.table="table",l.tableCaption="table-caption",l.tableCell="table-cell",l.tableColumnGroup="table-column-group",l.tableColumn="table-column",l.tableFooterGroup="table-footer-group",l.tableHeaderGroup="table-header-group",l.tableRow="table-row",l.tableRowGroup="table-row-group",l.flex="flex";class r{}r.input="INPUT",r.video="VIDEO",r.audio="AUDIO",r.details="DETAILS";class n{}n.hidden="hidden";class c{constructor(){this._promise=new Promise(((e,s)=>{this._resolve=e,this._reject=s}))}get promise(){return this._promise}resolve(e){this._resolve(e)}reject(e){this._reject(e)}}var u;!function(e){e.OutsideClick="OutsideClick",e.EscapePress="EscapePress",e.Programmatically="Programmatically"}(u||(u={}));class d{static async closeHierarchyAsync(t,a,o,i){var l;let r=!0;if(o.requestClose||t.closeOnOutsideClick)for(const a of e.iterateBranch(t.branchId)){const e=s.getPopup(a);if(r=null===(l=await(null==e?void 0:e.closeAsync(o,i)))||void 0===l||l,!r)break}r&&t.closeOnOutsideClick&&await t.closeAsync(o,i)}static async closeRootAsync(e,s,o,i){const l=t.findParent(e,(e=>a(e,(()=>["processCapturedPointerDownAsync","processCapturedKeyDownAsync"]))));if(l){if(o.requestClose=o.requestClose||e.closeOnOutsideClick,await l.processCapturedPointerDownAsync(s,o),o.handled)return}await d.closeHierarchyAsync(e,s,o,i)}static async processCapturedPointerDown(e,s,t){if(t.nextInteractionHandled){if(!e.closeOnOutsideClick)return;await d.closeHierarchyAsync(e,s,t,u.OutsideClick)}else await d.closeRootAsync(e,s,t,u.OutsideClick)}}class p{static containsInComposedPath(e,s){const t=e.composedPath();for(const e in t)if(t[e]===s)return!0;return!1}}class b extends o{constructor(){super(...arguments),this._isCaptured=!1}get isCaptured(){return this._isCaptured}gotCapture(){this._isCaptured=!0}lostCapture(){this._isCaptured=!1}}export{l as D,n as I,p as P,r as T,i as V,b as a,c as b,d as c,u as d};
