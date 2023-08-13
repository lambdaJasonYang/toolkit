var m=Object.defineProperty;var k=(a,e,r)=>e in a?m(a,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):a[e]=r;var o=(a,e,r)=>(k(a,typeof e!="symbol"?e+"":e,r),r);import{s as h,i as B,x as y}from"./lit-element-56383946.js";import{j as D,s as b,t as $,h as w}from"./JSONastParser-c56fc221.js";class g extends h{constructor(){super(),this.textBoxData=""}render(){return y`
    <div @god=${e=>{this.textBoxData=e.detail.key,this.textBoxData2=e.detail.val,console.log(e)}}>
    <p >${this.textBoxData}
  </p>
  <p >${this.textBoxData2}
  </p>
      <slot></slot>

    
  </div>
    `}}o(g,"properties",{textBoxData:{type:String},textBoxData2:{type:String}});customElements.define("node-cons",g);class c extends h{constructor(){super(),this.textBoxData='{"type":"Application","value":null,"children":[{"type":"Variable","value":"f","children":[]},{"type":"Application","value":null,"children":[{"type":"Variable","value":"x","children":[]},{"type":"Variable","value":"y","children":[]}]}]}'}render(){return y`
      <div>
        <textarea id="json-input" rows="6" .value=${this.textBoxData} @input=${this.onJsonInput}></textarea>
        <button @click="${this.renderTree}">Render Tree</button>
      </div>
      <div id="tree-container"></div>
    `}onJsonInput(e){this.textBoxData=e.target.value}renderTree(){const e=this.shadowRoot.querySelector("#tree-container");e.innerHTML="";const r=this.textBoxData,d=D(JSON.parse(r));console.log(d);const p=1e3,u=1e3,n={top:20,right:90,bottom:30,left:90},x=b(e).append("svg").attr("width",p).attr("height",u).append("g").attr("transform",`translate(${n.left},${n.top})`),v=$().nodeSize([50,10]).size([p-n.left-n.right,u-n.top-n.bottom]),s=w(d);v(s),x.selectAll(".link").data(s.links()).enter().append("line").attr("x1",function(t){return t.source.x}).attr("y1",function(t){return t.source.y}).attr("x2",function(t){return t.target.x}).attr("y2",function(t){return t.target.y}).attr("stroke","darkgray").attr("stroke-width",2);const i=x.selectAll(".node").data(s.descendants()).enter().append("g").attr("class","node").attr("transform",t=>`translate(${t.x},${t.y})`);i.on("click",(t,l)=>{const f=new CustomEvent("god",{detail:{key:l.data.key,val:l.data.val},bubbles:!0,composed:!0});this.dispatchEvent(f),console.log(l.data.key)}),i.append("circle").attr("r",6).attr("fill",t=>t.data.val===null&&!t.children?"grey":"green"),i.append("text").attr("dy",".35em").attr("y",t=>t.children?-1:1).attr("text-anchor","middle").attr("fill","red").text(t=>`${t.data.key}`).attr("fill",t=>t.data.val===null&&!t.children?"red":"black").attr("transform","rotate(90)")}}o(c,"styles",B`
    :host {
      display: block;
    }

    .link {
      fill: none;
      stroke: #ccc;
      stroke-width: 2px;
    }

    .node {
      font: 14px sans-serif;
      fill: steelblue;
    }

    #json-input {
      width: 100%;
    }
  `),o(c,"properties",{textBoxData:{type:String}});customElements.define("tree-visualizer",c);
