function e(e,t,n,i,o){var r=t;if(e<t||e>(t+n)/2){r=e;var s=n/2;(!o||r+s<i)&&(r-=o?s:n)}return r}function t(t,n,i,o,r){void 0===i&&(i=0),void 0===o&&(o=0),void 0===r&&(r=!1);var s=e(n.offsetLeft+i,t.scrollLeft,t.clientWidth,t.scrollWidth,r),d=e(n.offsetTop+o,t.scrollTop,t.clientHeight,t.scrollHeight,r);t.scrollTo?t.scrollTo({left:s,top:d}):(t.scrollLeft=s,t.scrollTop=d)}window._dxvPrint=function(e){var t=document.getElementById(e.formId);if(/Chrome/.test(navigator.userAgent)&&/Google Inc/.test(navigator.vendor)&&e.isPrint){var n=document.getElementById(e.frameId),i=function(){n.contentWindow&&(n.contentWindow.print(),n.removeEventListener("load",i))};n.addEventListener("load",i)}t.submit()},window._dxvGetPixelRatio=function(){return window.devicePixelRatio||1};window._dxvNavigateToBrick=function(e,n,i){var o=e.querySelector("[dxbrv-page-index='"+n+"']");if(o){var r,s,d,c=o.querySelector("[dxbrv-brick-index='"+i+"']");c&&(s=(r=c).closest(".dxbrv-surface-wrapper"),d=r.closest(".dxrd-report-preview-content"),t(s,r,d.offsetLeft,d.offsetTop,!0))}},window._dxvNavigateToPage=function(e,n){var i,o,r=e.querySelector("[dxbrv-page-index='"+n+"']");r&&t(o=(i=r).closest(".dxbrv-surface-wrapper"),i,o.clientWidth,o.clientHeight-76)};var n=function(e,t,n,i,o,r){var s=this;this.element=e,this.dropMarker=t,this.resizableClassName=n,this.component=r,this.currentPosition=0,this.previousPosition=0,this.resizing=!1,this.minWidth=i,this.maxWidth=o,this.closeDragElement=function(){s.resizing&&window._dxvOnAfterResize(s.component,Math.round(parseInt(s.element.style.left))),s.element.style.left="unset",s.element.style.setProperty("--rightpanel-resize-anchor-width","0px"),s.dropMarker.classList.remove("dxrbv-state-visible"),document.removeEventListener("mouseup",s.closeDragElement),document.removeEventListener("mousemove",s.elementDrag),document.removeEventListener("keydown",s.keydownEsc),document.onmouseup=null,document.onmousemove=null,document.onkeydown=null,s.resizing=!1},this.keydownEsc=function(e){s.resizing&&("key"in(e=e||window.event)?"Escape"===e.key||"Esc"===e.key:27===e.keyCode)&&(s.resizing=!1,s.closeDragElement())},this.elementDrag=function(e){s.dropMarker.classList.add("dxrbv-state-visible"),(e=e||window.event).preventDefault(),s.resizing=!0;var t=document.querySelectorAll(".dxbrv-wrapper ."+s.resizableClassName)[0],n=t.getBoundingClientRect();e.clientX>n.left-(s.maxWidth-n.width)&&e.clientX&&e.clientX<n.right-s.minWidth&&(s.currentPosition=s.previousPosition-e.clientX,s.previousPosition=e.clientX);var i=s.element.offsetLeft-s.currentPosition;if(t.clientWidth-i>s.minWidth&&t.clientWidth-i<s.maxWidth){s.element.style.left=i+"px";var o=-i;o<0&&(o=0),s.element.style.setProperty("--rightpanel-resize-anchor-width",o+"px")}document.addEventListener("keydown",s.keydownEsc)},this.dragMouseDown=function(e){(e=e||window.event).preventDefault(),s.previousPosition=e.clientX,document.addEventListener("mouseup",s.closeDragElement),document.addEventListener("mousemove",s.elementDrag)},e.addEventListener("mousedown",this.dragMouseDown)};window._dxvRegisterResize=function(e,t,i,o,r,s){window._dxvRisizeInstance=new n(e,t,i,o,r,s)},window._dxvOnAfterResize=function(e,t){return e.invokeMethodAsync("StopResize",t)},window._dxvDisposeResize=function(e){e&&e.removeEventListener("mousedown",window._dxvRisizeInstance.dragMouseDown)},window._dxvHandleCopyText=function(e,t){!function(e,t){e.removeAttribute?e.removeAttribute(t):e.removeProperty&&e.removeProperty(t)}(e,t),window.DxBlazor.Dom.focusElement(e).then((function(){!function(e){"string"==typeof e&&(e=document.querySelector(e));e&&e.select()}(e)}))},window._dxvCheckIntersectionPages=function(e,t){var n=t.querySelectorAll("[dxbrv-page-needsinvalidate]"),i=t.querySelector(".dxbrv-surface-wrapper").getBoundingClientRect();n.forEach((function(t){if(o=i,r=t.getBoundingClientRect(),o.left<r.left+r.width&&o.left+o.width>r.left&&o.top<r.bottom&&o.bottom>r.top){var n=Number(t.getAttribute("dxbrv-page-index"));e.invokeMethodAsync("JSUpdatePageImageAsync",n)}var o,r}))},window._dxvInitializePageForDocumentScroll=function(e,t,n){var i=t.querySelector("[dxbrv-page-index='"+n+"']"),o=t.querySelector(".dxbrv-surface-wrapper");if(i&&o){var r=t.id,s="_dxv_"+r+"_PagesObserver",d="_dxv_"+r+"_Pages",c=window[s];if(!c)c=function(e,t,n,i){var o;return o=new IntersectionObserver((function(t){t.forEach((function(t){var n=t.target;if(t.isIntersecting&&n.hasAttribute("dxbrv-page-needsinvalidate")){var i=Number(n.getAttribute("dxbrv-page-index"));e.invokeMethodAsync("JSUpdatePageImageAsync",i)}}))}),i),window[t]=o,window[n]=new Array,o}(e,s,d,{root:o,rootMargin:"20px",threshold:0});if(c)window[d].push(i),c.observe(i)}};
