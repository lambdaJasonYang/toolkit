var T=Object.defineProperty;var g=(r,t,n)=>t in r?T(r,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):r[t]=n;var c=(r,t,n)=>(g(r,typeof t!="symbol"?t+"":t,n),n);import{s as w,i as R,x as m}from"./lit-element-56383946.js";import{s as I,t as N,h as A}from"./JSONastParser-c56fc221.js";import"./aws-login-34eefea2.js";import"./resize-controller-cde0d554.js";import"./_commonjsHelpers-23102255.js";const s={LPAREN:"LPAREN",RPAREN:"RPAREN",IDENTIFIER:"IDENTIFIER"};class h{constructor(t,n){this.type=t,this.name=n}}class v{constructor(t){this.input=t,this.position=0}getNextToken(){if(this.position>=this.input.length)return null;const t=this.input[this.position];if(t==="(")return this.position++,new h(s.LPAREN,"(");if(t===")")return this.position++,new h(s.RPAREN,")");if(/[a-zA-Z_]/.test(t)){let n="";for(;this.position<this.input.length&&/[a-zA-Z0-9_]/.test(this.input[this.position]);)n+=this.input[this.position],this.position++;return new h(s.IDENTIFIER,n)}if(/\s/.test(t))return this.position++,this.getNextToken();throw new Error(`Invalid character: ${t}`)}}class x{constructor(t,n){this.type=t,this.name=n,this.children=[]}addChild(t){this.children.push(t)}}class D{constructor(t){this.lexer=t,this.currentToken=this.lexer.getNextToken()}parse(){return this.parseExpression()}parseExpression(){if(this.currentToken.type===s.LPAREN){this.eat(s.LPAREN);const t=new x("Application",null);return t.addChild(this.parseExpression()),t.addChild(this.parseExpression()),this.eat(s.RPAREN),t}else if(this.currentToken.type===s.IDENTIFIER){const t=new x("Variable",this.currentToken.name);return this.eat(s.IDENTIFIER),t}else throw new Error("Invalid expression")}eat(t){if(this.currentToken.type===t)this.currentToken=this.lexer.getNextToken();else throw new Error(`Unexpected token: ${this.currentToken.type}`)}}class p extends w{constructor(){super(),this.textBoxData="(f (x y))"}render(){return m`
      <div>
        <textarea id="json-input" rows="6" .value="${this.textBoxData}" @input="${this.onJsonInput}"></textarea>
        <button @click="${this.renderTree}">Render Tree</button>
      </div>
      <div id="tree-container"></div>
    `}onJsonInput(t){this.textBoxData=t.target.value}renderTree(){const t=this.shadowRoot.querySelector("#tree-container");t.innerHTML="";const n=this.textBoxData,E=new v(n),f=new D(E).parse(),l=600,d=400,i={top:20,right:90,bottom:30,left:90},u=I(t).append("svg").attr("width",l).attr("height",d).append("g").attr("transform",`translate(${i.left},${i.top})`),k=N().size([l-i.left-i.right,d-i.top-i.bottom]),o=A(f);k(o),u.selectAll(".link").data(o.links()).enter().append("line").attr("x1",function(e){return e.source.x}).attr("y1",function(e){return e.source.y}).attr("x2",function(e){return e.target.x}).attr("y2",function(e){return e.target.y}).attr("stroke","darkgray").attr("stroke-width",2);const a=u.selectAll(".node").data(o.descendants()).enter().append("g").attr("class","node").attr("transform",e=>`translate(${e.x},${e.y})`);a.on("click",(e,y)=>{console.log(y.data.type)}),a.append("circle").attr("r",6),a.append("text").attr("dy",".35em").attr("y",e=>e.children?-13:13).attr("text-anchor","middle").text(e=>e.data.type)}}c(p,"styles",R`
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
  `),c(p,"properties",{textBoxData:{type:String}});customElements.define("tree-visualizer",p);
