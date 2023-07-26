var y=Object.defineProperty;var T=(n,t,e)=>t in n?y(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e;var a=(n,t,e)=>(T(n,typeof t!="symbol"?t+"":t,e),e);import{s as w,i as g,x as R}from"./lit-element-56383946.js";import{s as I,t as N,h as m}from"./JSONastParser-c56fc221.js";import"./aws-login-a22256e3.js";import"./_commonjsHelpers-23102255.js";const s={LPAREN:"LPAREN",RPAREN:"RPAREN",IDENTIFIER:"IDENTIFIER"};class h{constructor(t,e){this.type=t,this.name=e}}class A{constructor(t){this.input=t,this.position=0}getNextToken(){if(this.position>=this.input.length)return null;const t=this.input[this.position];if(t==="(")return this.position++,new h(s.LPAREN,"(");if(t===")")return this.position++,new h(s.RPAREN,")");if(/[a-zA-Z_]/.test(t)){let e="";for(;this.position<this.input.length&&/[a-zA-Z0-9_]/.test(this.input[this.position]);)e+=this.input[this.position],this.position++;return new h(s.IDENTIFIER,e)}if(/\s/.test(t))return this.position++,this.getNextToken();throw new Error(`Invalid character: ${t}`)}}class x{constructor(t,e){this.type=t,this.name=e,this.children=[]}addChild(t){this.children.push(t)}}class v{constructor(t){this.lexer=t,this.currentToken=this.lexer.getNextToken()}parse(){return this.parseExpression()}parseExpression(){if(this.currentToken.type===s.LPAREN){this.eat(s.LPAREN);const t=new x("Application",null);return t.addChild(this.parseExpression()),t.addChild(this.parseExpression()),this.eat(s.RPAREN),t}else if(this.currentToken.type===s.IDENTIFIER){const t=new x("Variable",this.currentToken.name);return this.eat(s.IDENTIFIER),t}else throw new Error("Invalid expression")}eat(t){if(this.currentToken.type===t)this.currentToken=this.lexer.getNextToken();else throw new Error(`Unexpected token: ${this.currentToken.type}`)}}class c extends w{constructor(){super(),this.textBoxData="(f (x y))"}render(){return R`
      <div>
        <textarea id="json-input" rows="6" .value="${this.textBoxData}" @input="${this.onJsonInput}"></textarea>
        <button @click="${this.renderTree}">Render Tree</button>
      </div>
      <div id="tree-container"></div>
    `}onJsonInput(t){this.textBoxData=t.target.value}renderTree(){const t=this.shadowRoot.querySelector("#tree-container");t.innerHTML="";const e=this.textBoxData,E=new A(e),f=new v(E).parse(),p=600,l=400,i={top:20,right:90,bottom:30,left:90},d=I(t).append("svg").attr("width",p).attr("height",l).append("g").attr("transform",`translate(${i.left},${i.top})`),k=N().size([p-i.left-i.right,l-i.top-i.bottom]),o=m(f);k(o),d.selectAll(".link").data(o.links()).enter().append("line").attr("x1",function(r){return r.source.x}).attr("y1",function(r){return r.source.y}).attr("x2",function(r){return r.target.x}).attr("y2",function(r){return r.target.y}).attr("stroke","darkgray").attr("stroke-width",2);const u=d.selectAll(".node").data(o.descendants()).enter().append("g").attr("class","node").attr("transform",r=>`translate(${r.x},${r.y})`);u.append("circle").attr("r",6),u.append("text").attr("dy",".35em").attr("y",r=>r.children?-13:13).attr("text-anchor","middle").text(r=>r.data.type)}}a(c,"styles",g`
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
  `),a(c,"properties",{textBoxData:{type:String}});customElements.define("tree-visualizer",c);
