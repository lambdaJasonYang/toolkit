import{s as t,x as o,i as e}from"./lit-element-56383946.js";import"./aws-login-34eefea2.js";import"./resize-controller-cde0d554.js";import"./_commonjsHelpers-23102255.js";class i extends t{static get properties(){return{docsHint:{type:String},count:{type:Number},x:{type:String},y:{type:String}}}constructor(){super(),this.docsHint="Click on the Vite and Lit logos to learn more",this.count=0}render(){return o`
          <svg height="700" width="700">
          
          <circle cx=${this.x} cy=${this.x} r="10" stroke="black" stroke-width="3" fill="red" />
          <foreignObject x="0" y="0" width="100%" height="100%">
            <slot ></slot>
          </foreignObject>
        </svg>
    `}_onClick(){this.count++}static get styles(){return e`
      :host {
        max-width: 1280px;
        margin: 0 auto;
        padding: 2rem;
        text-align: center;
      }

      .logo {
        height: 6em;
        padding: 1.5em;
        will-change: filter;
        transition: filter 300ms;
      }
      .logo:hover {
        filter: drop-shadow(0 0 2em #646cffaa);
      }
      .logo.lit:hover {
        filter: drop-shadow(0 0 2em #325cffaa);
      }

      .card {
        padding: 2em;
      }

      .read-the-docs {
        color: #888;
      }

      a {
        font-weight: 500;
        color: #646cff;
        text-decoration: inherit;
      }
      a:hover {
        color: #535bf2;
      }

      ::slotted(h1) {
        font-size: 3.2em;
        line-height: 1.1;
      }

      button {
        border-radius: 8px;
        border: 1px solid transparent;
        padding: 0.6em 1.2em;
        font-size: 1em;
        font-weight: 500;
        font-family: inherit;
        background-color: #1a1a1a;
        cursor: pointer;
        transition: border-color 0.25s;
      }
      button:hover {
        border-color: #646cff;
      }
      button:focus,
      button:focus-visible {
        outline: 4px auto -webkit-focus-ring-color;
      }

      @media (prefers-color-scheme: light) {
        a:hover {
          color: #747bff;
        }
        button {
          background-color: #f9f9f9;
        }
      }
    `}}window.customElements.define("my-node",i);class n extends t{static get properties(){return{docsHint:{type:String},count:{type:Number},x:{type:String},y:{type:String}}}constructor(){super(),this.docsHint="Click on the Vite and Lit logos to learn more",this.count=0}render(){return o`
          <svg height="700" width="700">
          
          <circle cx=${this.x} cy=${this.x} r="40" stroke="black" stroke-width="3" fill="red" />
          <foreignObject x="0" y="0" width="100%" height="100%">
            <slot name="left"></slot>
          </foreignObject>
        </svg>
    `}_onClick(){this.count++}static get styles(){return e`
      :host {
        max-width: 1280px;
        margin: 0 auto;
        padding: 2rem;
        text-align: center;
      }

      .logo {
        height: 6em;
        padding: 1.5em;
        will-change: filter;
        transition: filter 300ms;
      }
      .logo:hover {
        filter: drop-shadow(0 0 2em #646cffaa);
      }
      .logo.lit:hover {
        filter: drop-shadow(0 0 2em #325cffaa);
      }

      .card {
        padding: 2em;
      }

      .read-the-docs {
        color: #888;
      }

      a {
        font-weight: 500;
        color: #646cff;
        text-decoration: inherit;
      }
      a:hover {
        color: #535bf2;
      }

      ::slotted(h1) {
        font-size: 3.2em;
        line-height: 1.1;
      }

      button {
        border-radius: 8px;
        border: 1px solid transparent;
        padding: 0.6em 1.2em;
        font-size: 1em;
        font-weight: 500;
        font-family: inherit;
        background-color: #1a1a1a;
        cursor: pointer;
        transition: border-color 0.25s;
      }
      button:hover {
        border-color: #646cff;
      }
      button:focus,
      button:focus-visible {
        outline: 4px auto -webkit-focus-ring-color;
      }

      @media (prefers-color-scheme: light) {
        a:hover {
          color: #747bff;
        }
        button {
          background-color: #f9f9f9;
        }
      }
    `}}window.customElements.define("my-tree",n);
