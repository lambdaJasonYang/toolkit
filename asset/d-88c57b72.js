var x=Object.defineProperty;var y=(a,e,r)=>e in a?x(a,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):a[e]=r;var s=(a,e,r)=>(y(a,typeof e!="symbol"?e+"":e,r),r);import{s as f,i as g,x as v}from"./lit-element-56383946.js";import{j as m,s as k,t as b,h as $}from"./JSONastParser-c56fc221.js";class i extends f{constructor(){super(),this.textBoxData='{"type":"Application","value":null,"children":[{"type":"Variable","value":"f","children":[]},{"type":"Application","value":null,"children":[{"type":"Variable","value":"x","children":[]},{"type":"Variable","value":"y","children":[]}]}]}'}render(){return v`
      <div>
        <textarea id="json-input" rows="6" .value="${this.textBoxData}" @input="${this.onJsonInput}"></textarea>
        <button @click="${this.renderTree}">Render Tree</button>
      </div>
      <div id="tree-container"></div>
    `}onJsonInput(e){this.textBoxData=e.target.value}renderTree(){const e=this.shadowRoot.querySelector("#tree-container");e.innerHTML="";const r=this.textBoxData,l=m(JSON.parse(r));console.log(l);const c=1e3,d=1e3,n={top:20,right:90,bottom:30,left:90},p=k(e).append("svg").attr("width",c).attr("height",d).append("g").attr("transform",`translate(${n.left},${n.top})`),h=b().size([c-n.left-n.right,d-n.top-n.bottom]),o=$(l);h(o),p.selectAll(".link").data(o.links()).enter().append("line").attr("x1",function(t){return t.source.x}).attr("y1",function(t){return t.source.y}).attr("x2",function(t){return t.target.x}).attr("y2",function(t){return t.target.y}).attr("stroke","darkgray").attr("stroke-width",2);const u=p.selectAll(".node").data(o.descendants()).enter().append("g").attr("class","node").attr("transform",t=>`translate(${t.x},${t.y})`);u.append("circle").attr("r",6),u.append("text").attr("dy",".35em").attr("y",t=>t.children?-13:13).attr("text-anchor","middle").attr("fill","red").text(t=>`${t.data.key}
: ${t.data.val}`)}}s(i,"styles",g`
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
  `),s(i,"properties",{textBoxData:{type:String}});customElements.define("tree-visualizer",i);
