import{P as t,N as e}from"./point-9c6ab88a.js";class i{constructor(t,e){this.widthField=t,this.heightField=e}get width(){return this.widthField}get height(){return this.heightField}}i.Empty=new i(0,0);class h{constructor(t,e){this._start=t,this._end=e}get end(){return this._end}get start(){return this._start}get size(){return Math.abs(this.end-this.start)}static rectToRange(t,e){return e?new h(t.left,t.right):new h(t.top,t.bottom)}}class s{constructor(t,e,i,h){this.xField=t,this.yField=e,this.widthField=i,this.heightField=h}get topLeft(){return new t(this.x,this.y)}get topRight(){return new t(this.x+this.width,this.y)}get bottomLeft(){return new t(this.x,this.y+this.height)}get bottomRight(){return new t(this.x+this.width,this.y+this.height)}get x(){return this.xField}get y(){return this.yField}get width(){return this.widthField}get height(){return this.heightField}get isEmpty(){return e.lessThanOrClose(this.width,0)||e.lessThanOrClose(this.height,0)}get left(){return this.x}get top(){return this.y}get right(){return this.isEmpty?Number.NEGATIVE_INFINITY:this.x+this.width}get bottom(){return this.isEmpty?Number.NEGATIVE_INFINITY:this.y+this.height}get size(){return new i(this.width,this.height)}static create(t,e){return new s(t.x,t.y,e.width,e.height)}static createFromPoints(t,e){return new s(Math.min(t.x,e.x),Math.min(t.y,e.y),Math.abs(t.x-e.x),Math.abs(t.y-e.y))}}s.Empty=new s(0,0,0,0);class r{static fromDomRect(t){return new s(t.left,t.top,t.width,t.height)}static offset(t,e){return new s(t.x+e.x,t.y+e.y,t.width,t.height)}static areSame(t,i){return e.areClose(t.x,i.x)&&e.areClose(t.y,i.y)&&e.areClose(t.width,i.width)&&e.areClose(t.height,i.height)}static intersectsWith(t,e){return!t.isEmpty&&!e.isEmpty&&(e.left<=t.right&&e.right>=t.left&&e.top<=t.bottom&&e.bottom>=t.top)}static intersect(t,e){if(!r.intersectsWith(t,e))return s.Empty;const i=Math.max(t.left,e.left),h=Math.max(t.top,e.top),n=Math.max(Math.min(t.right,e.right)-i,0),a=Math.max(Math.min(t.bottom,e.bottom)-h,0);return new s(i,h,n,a)}static contains(t,e){return!t.isEmpty&&(e.x>=t.x&&e.x-t.width<=t.x&&e.y>=t.y&&e.y-t.height<=t.y)}static parse(t){const e=t.split(",");if(4!==e.length)throw new Error("incorrect parameters number");return new s(parseFloat(e[0]),parseFloat(e[1]),parseFloat(e[2]),parseFloat(e[3]))}}export{r as R,i as S,s as a,h as b};
