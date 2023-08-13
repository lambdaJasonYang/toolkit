import{s as t,x as o}from"./lit-element-56383946.js";import"./aws-login-34eefea2.js";import"./resize-controller-cde0d554.js";import"./_commonjsHelpers-23102255.js";const i="/toolkit/assets/lit-c8dae599.svg",s="/toolkit/vite.svg";class e extends t{static get properties(){return{docsHint:{type:String},count:{type:Number}}}constructor(){super(),this.docsHint="Click on the Vite and Lit logos to learn more",this.count=0}render(){return o`
      <div>
        
        <a href="https://vitejs.dev" target="_blank">
          <img src=${s} class="logo" alt="Vite logo" />
        </a>
        <a href="https://lit.dev" target="_blank">
          <img src=${i} class="logo lit" alt="Lit logo" />
        </a>
      </div>
      <slot></slot>
      <div class="card">
        <button @click=${this._onClick} part="button">
          count is ${this.count}
        </button>
      </div>
      <div>
      <sum-registerlogin></sum-registerlogin>
      </div>
      <p class="read-the-docs">${this.docsHint}</p>
    `}_onClick(){this.count++}}window.customElements.define("my-element",e);
