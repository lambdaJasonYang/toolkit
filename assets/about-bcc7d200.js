var Q=Object.defineProperty;var Z=(o,t,e)=>t in o?Q(o,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):o[t]=e;var C=(o,t,e)=>(Z(o,typeof t!="symbol"?t+"":t,e),e);import{s as z,i as p,x as m}from"./lit-element-56383946.js";import{n,_ as tt,l as c,s as M,t as et,o as st,i as T}from"./resize-controller-cde0d554.js";const F=new Set,it=()=>{const o=document.documentElement.dir==="rtl"?document.documentElement.dir:"ltr";F.forEach(t=>{t.setAttribute("dir",o)})},ot=new MutationObserver(it);ot.observe(document.documentElement,{attributes:!0,attributeFilter:["dir"]});const rt=o=>typeof o.startManagingContentDirection<"u"||o.tagName==="SP-THEME";function at(o){class t extends o{get isLTR(){return this.dir==="ltr"}hasVisibleFocusInTree(){const s=this.getRootNode().activeElement;if(!s)return!1;try{return s.matches(":focus-visible")||s.matches(".focus-visible")}catch{return s.matches(".focus-visible")}}connectedCallback(){if(!this.hasAttribute("dir")){let s=this.assignedSlot||this.parentNode;for(;s!==document.documentElement&&!rt(s);)s=s.assignedSlot||s.parentNode||s.host;if(this.dir=s.dir==="rtl"?s.dir:this.dir||"ltr",s===document.documentElement)F.add(this);else{const{localName:i}=s;i.search("-")>-1&&!customElements.get(i)?customElements.whenDefined(i).then(()=>{s.startManagingContentDirection(this)}):s.startManagingContentDirection(this)}this._dirParent=s}super.connectedCallback()}disconnectedCallback(){super.disconnectedCallback(),this._dirParent&&(this._dirParent===document.documentElement?F.delete(this):this._dirParent.stopManagingContentDirection(this),this.removeAttribute("dir"))}}return t}class O extends at(z){}var nt=Object.defineProperty,ct=Object.getOwnPropertyDescriptor,lt=(o,t,e,s)=>{for(var i=s>1?void 0:s?ct(t,e):t,r=o.length-1,a;r>=0;r--)(a=o[r])&&(i=(s?a(t,e,i):a(i))||i);return s&&i&&nt(t,e,i),i};function U(o,{validSizes:t=["s","m","l","xl"],noDefaultSize:e,defaultSize:s="m"}={}){class i extends o{constructor(){super(...arguments),this._size=s}get size(){return this._size||s}set size(a){const y=e?null:s,l=a&&a.toLocaleLowerCase(),d=t.includes(l)?l:y;if(d&&this.setAttribute("size",d),this._size===d)return;const f=this._size;this._size=d,this.requestUpdate("size",f)}update(a){!this.hasAttribute("size")&&!e&&this.setAttribute("size",this.size),super.update(a)}}return lt([n({type:String,reflect:!0})],i.prototype,"size",1),i}const dt=p`
:host([size=s]) #list{--spectrum-tabs-item-height:var(--spectrum-tab-item-height-small);--spectrum-tabs-item-horizontal-spacing:var(
--spectrum-tab-item-to-tab-item-horizontal-small
);--spectrum-tabs-item-vertical-spacing:var(
--spectrum-tab-item-to-tab-item-vertical-small
);--spectrum-tabs-start-to-edge:var(--spectrum-tab-item-start-to-edge-small);--spectrum-tabs-top-to-text:var(--spectrum-tab-item-top-to-text-small);--spectrum-tabs-bottom-to-text:var(
--spectrum-tab-item-bottom-to-text-small
);--spectrum-tabs-icon-size:var(--spectrum-workflow-icon-size-50);--spectrum-tabs-icon-to-text:var(--spectrum-text-to-visual-75);--spectrum-tabs-top-to-icon:var(
--spectrum-tab-item-top-to-workflow-icon-small
);--spectrum-tabs-focus-indicator-gap:var(
--spectrum-tab-item-focus-indicator-gap-small
);--spectrum-tabs-font-size:var(--spectrum-font-size-75)}:host([size=l]) #list{--spectrum-tabs-item-height:var(--spectrum-tab-item-height-large);--spectrum-tabs-item-horizontal-spacing:var(
--spectrum-tab-item-to-tab-item-horizontal-large
);--spectrum-tabs-item-vertical-spacing:var(
--spectrum-tab-item-to-tab-item-vertical-large
);--spectrum-tabs-start-to-edge:var(--spectrum-tab-item-start-to-edge-large);--spectrum-tabs-top-to-text:var(--spectrum-tab-item-top-to-text-large);--spectrum-tabs-bottom-to-text:var(
--spectrum-tab-item-bottom-to-text-large
);--spectrum-tabs-icon-size:var(--spectrum-workflow-icon-size-100);--spectrum-tabs-icon-to-text:var(--spectrum-text-to-visual-200);--spectrum-tabs-top-to-icon:var(
--spectrum-tab-item-top-to-workflow-icon-large
);--spectrum-tabs-focus-indicator-gap:var(
--spectrum-tab-item-focus-indicator-gap-large
);--spectrum-tabs-font-size:var(--spectrum-font-size-200)}:host([size=xl]) #list{--spectrum-tabs-item-height:var(--spectrum-tab-item-height-extra-large);--spectrum-tabs-item-horizontal-spacing:var(
--spectrum-tab-item-to-tab-item-horizontal-extra-large
);--spectrum-tabs-item-vertical-spacing:var(
--spectrum-tab-item-to-tab-item-vertical-extra-large
);--spectrum-tabs-start-to-edge:var(
--spectrum-tab-item-start-to-edge-extra-large
);--spectrum-tabs-top-to-text:var(
--spectrum-tab-item-top-to-text-extra-large
);--spectrum-tabs-bottom-to-text:var(
--spectrum-tab-item-bottom-to-text-extra-large
);--spectrum-tabs-icon-size:var(--spectrum-workflow-icon-size-200);--spectrum-tabs-icon-to-text:var(--spectrum-text-to-visual-300);--spectrum-tabs-top-to-icon:var(
--spectrum-tab-item-top-to-workflow-icon-extra-large
);--spectrum-tabs-focus-indicator-gap:var(
--spectrum-tab-item-focus-indicator-gap-extra-large
);--spectrum-tabs-font-size:var(--spectrum-font-size-300)}:host([size=s]) #list.spectrum-Tabs--compact{--mod-tabs-item-height:var(
--mod-tabs-item-height-compact,var(--spectrum-tab-item-compact-height-small)
);--mod-tabs-top-to-text:var(
--mod-tabs-top-to-text-compact,var(--spectrum-tab-item-top-to-text-compact-small)
);--mod-tabs-bottom-to-text:var(
--mod-tabs-bottom-to-text-compact,var(--spectrum-tab-item-top-to-text-compact-small)
);--mod-tabs-top-to-icon:var(
--mod-tabs-top-to-icon-compact,var(--spectrum-tab-item-top-to-workflow-icon-compact-small)
)}:host([size=l]) #list.spectrum-Tabs--compact{--mod-tabs-item-height:var(
--mod-tabs-item-height-compact,var(--spectrum-tab-item-compact-height-large)
);--mod-tabs-top-to-text:var(
--mod-tabs-top-to-text-compact,var(--spectrum-tab-item-top-to-text-compact-large)
);--mod-tabs-bottom-to-text:var(
--mod-tabs-bottom-to-text-compact,var(--spectrum-tab-item-top-to-text-compact-large)
);--mod-tabs-top-to-icon:var(
--mod-tabs-top-to-icon-compact,var(--spectrum-tab-item-top-to-workflow-icon-compact-large)
)}:host([size=xl]) #list.spectrum-Tabs--compact{--mod-tabs-item-height:var(
--mod-tabs-item-height-compact,var(--spectrum-tab-item-compact-height-extra-large)
);--mod-tabs-top-to-text:var(
--mod-tabs-top-to-text-compact,var(--spectrum-tab-item-top-to-text-compact-extra-large)
);--mod-tabs-bottom-to-text:var(
--mod-tabs-bottom-to-text-compact,var(--spectrum-tab-item-top-to-text-compact-extra-large)
);--mod-tabs-top-to-icon:var(
--mod-tabs-top-to-icon-compact,var(--spectrum-tab-item-top-to-workflow-icon-compact-extra-large)
)}
`,H=dt,mt=p`
#list{--spectrum-tabs-item-height:var(--spectrum-tab-item-height-medium);--spectrum-tabs-item-horizontal-spacing:var(
--spectrum-tab-item-to-tab-item-horizontal-medium
);--spectrum-tabs-item-vertical-spacing:var(
--spectrum-tab-item-to-tab-item-vertical-medium
);--spectrum-tabs-start-to-edge:var(
--spectrum-tab-item-start-to-edge-medium
);--spectrum-tabs-top-to-text:var(--spectrum-tab-item-top-to-text-medium);--spectrum-tabs-bottom-to-text:var(
--spectrum-tab-item-bottom-to-text-medium
);--spectrum-tabs-icon-size:var(--spectrum-workflow-icon-size-75);--spectrum-tabs-icon-to-text:var(--spectrum-text-to-visual-100);--spectrum-tabs-top-to-icon:var(
--spectrum-tab-item-top-to-workflow-icon-medium
);--spectrum-tabs-color:var(
--spectrum-neutral-subdued-content-color-default
);--spectrum-tabs-color-selected:var(
--spectrum-neutral-subdued-content-color-down
);--spectrum-tabs-color-hover:var(
--spectrum-neutral-subdued-content-color-hover
);--spectrum-tabs-color-key-focus:var(
--spectrum-neutral-subdued-content-color-key-focus
);--spectrum-tabs-color-disabled:var(--spectrum-gray-500);--spectrum-tabs-font-family:var(--spectrum-sans-font-family-stack);--spectrum-tabs-font-style:var(--spectrum-default-font-style);--spectrum-tabs-font-size:var(--spectrum-font-size-100);--spectrum-tabs-line-height:var(--spectrum-line-height-100);--spectrum-tabs-focus-indicator-width:var(
--spectrum-focus-indicator-thickness
);--spectrum-tabs-focus-indicator-border-radius:var(
--spectrum-corner-radius-100
);--spectrum-tabs-focus-indicator-gap:var(
--spectrum-tab-item-focus-indicator-gap-medium
);--spectrum-tabs-focus-indicator-color:var(
--spectrum-focus-indicator-color
);--spectrum-tabs-selection-indicator-color:var(
--spectrum-neutral-subdued-content-color-down
);--spectrum-tabs-list-background-direction:top;--spectrum-tabs-divider-background-color:var(--spectrum-gray-300);--spectrum-tabs-divider-size:var(--spectrum-border-width-200);--spectrum-tabs-divider-border-radius:1px;--spectrum-tabs-animation-duration:var(--spectrum-animation-duration-100);--spectrum-tabs-animation-ease:var(--spectrum-animation-ease-in-out)}:host([emphasized]) #list{--mod-tabs-color-selected:var(
--mod-tabs-color-selected-emphasized,var(--spectrum-accent-content-color-default)
);--mod-tabs-color-hover:var(
--mod-tabs-color-hover-emphasized,var(--spectrum-accent-content-color-hover)
);--mod-tabs-color-key-focus:var(
--mod-tabs-color-key-focus-emphasized,var(--spectrum-accent-content-color-key-focus)
);--mod-tabs-selection-indicator-color:var(
--mod-tabs-selection-indicator-color-emphasized,var(--spectrum-accent-content-color-default)
)}:host([direction^=vertical]) #list{--mod-tabs-list-background-direction:var(
--mod-tabs-list-background-direction-vertical,right
)}:host([direction^=vertical-right]) #list{--mod-tabs-list-background-direction:var(
--mod-tabs-list-background-direction-vertical-right,left
)}:host([dir=rtl][direction^=vertical]) #list{--mod-tabs-list-background-direction:var(
--mod-tabs-list-background-direction-vertical,left
)}:host([dir=rtl][direction^=vertical-right]) #list{--mod-tabs-list-background-direction:var(
--mod-tabs-list-background-direction-vertical,right
)}:host([compact]) #list{--mod-tabs-item-height:var(
--mod-tabs-item-height-compact,var(--spectrum-tab-item-compact-height-medium)
);--mod-tabs-top-to-text:var(
--mod-tabs-top-to-text-compact,var(--spectrum-tab-item-top-to-text-compact-medium)
);--mod-tabs-bottom-to-text:var(
--mod-tabs-bottom-to-text-compact,var(--spectrum-tab-item-top-to-text-compact-medium)
);--mod-tabs-top-to-icon:var(
--mod-tabs-top-to-icon-compact,var(--spectrum-tab-item-top-to-workflow-icon-compact-medium)
)}#list{background:linear-gradient(to var(
--mod-tabs-list-background-direction,var(--spectrum-tabs-list-background-direction)
),var(
--highcontrast-tabs-divider-background-color,var(
--mod-tabs-divider-background-color,var(--spectrum-tabs-divider-background-color)
)
) 0 var(--mod-tabs-divider-size,var(--spectrum-tabs-divider-size)),transparent var(--mod-tabs-divider-size,var(--spectrum-tabs-divider-size)));display:flex;margin:0;padding-block:0;position:relative;vertical-align:top;z-index:0}::slotted([selected]:not([slot])){color:var(
--highcontrast-tabs-color-selected,var(--mod-tabs-color-selected,var(--spectrum-tabs-color-selected))
)}::slotted(:not([slot])).is-disabled{color:var(
--highcontrast-tabs-color-disabled,var(--mod-tabs-color-disabled,var(--spectrum-tabs-color-disabled))
);cursor:default}::slotted(:not([slot])).focus-visible,::slotted(:not([slot])):focus{color:var(
--highcontrast-tabs-color-key-focus,var(--mod-tabs-color-key-focus,var(--spectrum-tabs-color-key-focus))
)}::slotted(:not([slot])):focus,::slotted(:not([slot])):focus-visible{color:var(
--highcontrast-tabs-color-key-focus,var(--mod-tabs-color-key-focus,var(--spectrum-tabs-color-key-focus))
)}::slotted(:not([slot])).focus-visible:before,::slotted(:not([slot])):focus:before{border-color:var(
--highcontrast-tabs-focus-indicator-color,var(
--mod-tabs-focus-indicator-color,var(--spectrum-tabs-focus-indicator-color)
)
)}::slotted(:not([slot])).focus-visible:before,::slotted(:not([slot])):focus:before{border-color:var(
--highcontrast-tabs-focus-indicator-color,var(
--mod-tabs-focus-indicator-color,var(--spectrum-tabs-focus-indicator-color)
)
)}::slotted(:not([slot])):focus-visible:before,::slotted(:not([slot])):focus:before{border-color:var(
--highcontrast-tabs-focus-indicator-color,var(
--mod-tabs-focus-indicator-color,var(--spectrum-tabs-focus-indicator-color)
)
)}#selection-indicator{background-color:var(
--highcontrast-tabs-selection-indicator-color,var(
--mod-tabs-selection-indicator-color,var(--spectrum-tabs-selection-indicator-color)
)
);border-radius:var(
--mod-tabs-divider-border-radius,var(--spectrum-tabs-divider-border-radius)
);inset-inline-start:0;position:absolute;transform-origin:0 0;transition:transform var(
--mod-tabs-animation-duration,var(--spectrum-tabs-animation-duration)
) var(--mod-tabs-animation-ease,var(--spectrum-tabs-animation-ease));z-index:0}:host([direction^=horizontal]) #list{align-items:center}:host([direction^=horizontal]) #list ::slotted(:not([slot])){vertical-align:top}:host([direction^=horizontal]) #list ::slotted(:not([slot]):not(:first-child)){margin-inline-start:var(
--mod-tabs-item-horizontal-spacing,var(--spectrum-tabs-item-horizontal-spacing)
)}:host([direction^=horizontal]) #list #selection-indicator{block-size:var(--mod-tabs-divider-size,var(--spectrum-tabs-divider-size));inset-block-end:0;position:absolute}:host([direction^=horizontal][compact]) #list{align-items:end;box-sizing:content-box}:host([quiet]) #list{background:none;border-color:#0000;display:inline-flex}:host([quiet]) #selection-indicator{padding-inline-start:var(
--mod-tabs-start-to-item-quiet,var(--spectrum-tabs-start-to-item-quiet)
)}:host([direction^=vertical-right]) #list,:host([direction^=vertical]) #list{display:inline-flex;flex-direction:column;padding:0}:host([direction^=vertical-right][quiet]) #list,:host([direction^=vertical][quiet]) #list{border-color:#0000}:host([direction^=vertical-right]) #list ::slotted(:not([slot])),:host([direction^=vertical]) #list ::slotted(:not([slot])){block-size:var(--mod-tabs-item-height,var(--spectrum-tabs-item-height));line-height:var(--mod-tabs-item-height,var(--spectrum-tabs-item-height));margin-block-end:var(
--mod-tabs-item-vertical-spacing,var(--spectrum-tabs-item-vertical-spacing)
);margin-inline-end:var(
--mod-tabs-start-to-edge,var(--spectrum-tabs-start-to-edge)
);margin-inline-start:var(
--mod-tabs-start-to-edge,var(--spectrum-tabs-start-to-edge)
);padding-block:0}:host([direction^=vertical-right]) #list ::slotted(:not([slot])):before,:host([direction^=vertical]) #list ::slotted(:not([slot])):before{inset-inline-start:calc(var(
--mod-tabs-focus-indicator-gap,
var(--spectrum-tabs-focus-indicator-gap)
)*-1)}:host([direction^=vertical-right]) #list #selection-indicator,:host([direction^=vertical]) #list #selection-indicator{inline-size:var(
--mod-tabs-divider-size,var(--spectrum-tabs-divider-size)
);inset-block-start:0;inset-inline-start:0;position:absolute}:host([direction^=vertical-right]) #list #selection-indicator{inset-inline:auto 0}@media (forced-colors:active){#list{--highcontrast-tabs-divider-background-color:var(--spectrum-gray-500);--highcontrast-tabs-selection-indicator-color:Highlight;--highcontrast-tabs-focus-indicator-color:CanvasText;--highcontrast-tabs-focus-indicator-background-color:Highlight;--highcontrast-tabs-color:ButtonText;--highcontrast-tabs-color-hover:ButtonText;--highcontrast-tabs-color-selected:HighlightText;--highcontrast-tabs-color-key-focus:ButtonText;--highcontrast-tabs-color-disabled:GrayText;forced-color-adjust:none}#list ::slotted([selected]:not([slot])):before{background-color:var(
--highcontrast-tabs-focus-indicator-background-color
)}#list ::slotted([selected]:not([slot])).focus-visible,#list ::slotted([selected]:not([slot])):focus{color:var(--highcontrast-tabs-color-selected)}#list ::slotted([selected]:not([slot])):focus,#list ::slotted([selected]:not([slot])):focus-visible{color:var(--highcontrast-tabs-color-selected)}:host([direction^=vertical][compact]) #list #list ::slotted(:not([slot])):before{block-size:100%;inset-block-start:0}:host([quiet]) #list{background:linear-gradient(to var(
--mod-tabs-list-background-direction,var(--spectrum-tabs-list-background-direction)
),var(
--highcontrast-tabs-divider-background-color,var(
--mod-tabs-divider-background-color,var(--spectrum-tabs-divider-background-color)
)
) 0 var(--mod-tabs-divider-size,var(--spectrum-tabs-divider-size)),transparent var(--mod-tabs-divider-size,var(--spectrum-tabs-divider-size)))}}#list{--spectrum-tabs-font-weight:var(--system-spectrum-tabs-font-weight)}:host{display:grid;grid-template-columns:100%;position:relative}:host(:not([direction^=vertical])){grid-template-rows:auto 1fr}:host([direction^=vertical]){grid-template-columns:auto 1fr}:host([dir=rtl]) #selection-indicator{left:0;right:auto}:host([direction=vertical-right]) #list #selection-indicator{inset-inline-end:0;inset-inline-start:auto}#list{justify-content:var(--swc-tabs-list-justify-content)}:host([disabled]) #list #selection-indicator{background-color:var(
--mod-tabs-color-disabled,var(--spectrum-tabs-color-disabled)
)}:host([disabled]) ::slotted(sp-tab){color:var(--mod-tabs-color-disabled,var(--spectrum-tabs-color-disabled))}:host([disabled]) #list{pointer-events:none}:host([direction=vertical-right]) #list #selection-indicator,:host([direction=vertical]) #list #selection-indicator{inset-block-start:0}#selection-indicator.first-position{transition:none}:host([dir][direction=horizontal]) #list.scroll{overflow-x:auto;scrollbar-width:none}:host([dir][direction=horizontal]) #list.scroll::-webkit-scrollbar{display:none}
`,R=mt;let L=!0;try{document.body.querySelector(":focus-visible")}catch{L=!1,tt(()=>import("./focus-visible-ef252b6c.js").then(t=>t.f),["assets/focus-visible-ef252b6c.js","assets/_commonjsHelpers-23102255.js"])}const ut=o=>{var t;const e=r=>{if(r.shadowRoot==null||r.hasAttribute("data-js-focus-visible"))return()=>{};if(self.applyFocusVisiblePolyfill)self.applyFocusVisiblePolyfill(r.shadowRoot),r.manageAutoFocus&&r.manageAutoFocus();else{const a=()=>{self.applyFocusVisiblePolyfill&&r.shadowRoot&&self.applyFocusVisiblePolyfill(r.shadowRoot),r.manageAutoFocus&&r.manageAutoFocus()};return self.addEventListener("focus-visible-polyfill-ready",a,{once:!0}),()=>{self.removeEventListener("focus-visible-polyfill-ready",a)}}return()=>{}},s=Symbol("endPolyfillCoordination");class i extends o{constructor(){super(...arguments),this[t]=null}connectedCallback(){super.connectedCallback&&super.connectedCallback(),L||requestAnimationFrame(()=>{this[s]==null&&(this[s]=e(this))})}disconnectedCallback(){super.disconnectedCallback&&super.disconnectedCallback(),L||requestAnimationFrame(()=>{this[s]!=null&&(this[s](),this[s]=null)})}}return t=s,i};var ht=Object.defineProperty,pt=Object.getOwnPropertyDescriptor,A=(o,t,e,s)=>{for(var i=s>1?void 0:s?pt(t,e):t,r=o.length-1,a;r>=0;r--)(a=o[r])&&(i=(s?a(t,e,i):a(i))||i);return s&&i&&ht(t,e,i),i};function B(){return new Promise(o=>requestAnimationFrame(()=>o()))}class g extends ut(O){constructor(){super(...arguments),this.disabled=!1,this.autofocus=!1,this._tabIndex=0,this.manipulatingTabindex=!1,this._recentlyConnected=!1}get tabIndex(){if(this.focusElement===this){const e=this.hasAttribute("tabindex")?Number(this.getAttribute("tabindex")):NaN;return isNaN(e)?-1:e}const t=parseFloat(this.hasAttribute("tabindex")&&this.getAttribute("tabindex")||"0");return this.disabled||t<0?-1:this.focusElement?this.focusElement.tabIndex:t}set tabIndex(t){if(this.manipulatingTabindex){this.manipulatingTabindex=!1;return}if(this.focusElement===this){if(t!==this._tabIndex){this._tabIndex=t;const e=this.disabled?"-1":""+t;this.manipulatingTabindex=!0,this.setAttribute("tabindex",e)}return}if(t===-1?this.addEventListener("pointerdown",this.onPointerdownManagementOfTabIndex):(this.manipulatingTabindex=!0,this.removeEventListener("pointerdown",this.onPointerdownManagementOfTabIndex)),t===-1||this.disabled){this.setAttribute("tabindex","-1"),this.removeAttribute("focusable"),t!==-1&&this.manageFocusElementTabindex(t);return}this.setAttribute("focusable",""),this.hasAttribute("tabindex")?this.removeAttribute("tabindex"):this.manipulatingTabindex=!1,this.manageFocusElementTabindex(t)}onPointerdownManagementOfTabIndex(){this.tabIndex===-1&&(this.tabIndex=0,this.focus({preventScroll:!0}))}async manageFocusElementTabindex(t){this.focusElement||await this.updateComplete,t===null?this.focusElement.removeAttribute("tabindex"):this.focusElement.tabIndex=t}get focusElement(){throw new Error("Must implement focusElement getter!")}focus(t){this.disabled||!this.focusElement||(this.focusElement!==this?this.focusElement.focus(t):HTMLElement.prototype.focus.apply(this,[t]))}blur(){const t=this.focusElement||this;t!==this?t.blur():HTMLElement.prototype.blur.apply(this)}click(){if(this.disabled)return;const t=this.focusElement||this;t!==this?t.click():HTMLElement.prototype.click.apply(this)}manageAutoFocus(){this.autofocus&&(this.dispatchEvent(new KeyboardEvent("keydown",{code:"Tab"})),this.focusElement.focus())}firstUpdated(t){super.firstUpdated(t),(!this.hasAttribute("tabindex")||this.getAttribute("tabindex")!=="-1")&&this.setAttribute("focusable","")}update(t){t.has("disabled")&&this.handleDisabledChanged(this.disabled,t.get("disabled")),super.update(t)}updated(t){super.updated(t),t.has("disabled")&&this.disabled&&this.blur()}async handleDisabledChanged(t,e){const s=()=>this.focusElement!==this&&typeof this.focusElement.disabled<"u";t?(this.manipulatingTabindex=!0,this.setAttribute("tabindex","-1"),await this.updateComplete,s()?this.focusElement.disabled=!0:this.setAttribute("aria-disabled","true")):e&&(this.manipulatingTabindex=!0,this.focusElement===this?this.setAttribute("tabindex",""+this._tabIndex):this.removeAttribute("tabindex"),await this.updateComplete,s()?this.focusElement.disabled=!1:this.removeAttribute("aria-disabled"))}async getUpdateComplete(){const t=await super.getUpdateComplete();return this._recentlyConnected&&(this._recentlyConnected=!1,await B(),await B()),t}connectedCallback(){super.connectedCallback(),this._recentlyConnected=!0,this.updateComplete.then(()=>{this.manageAutoFocus()})}}A([n({type:Boolean,reflect:!0})],g.prototype,"disabled",2),A([n({type:Boolean})],g.prototype,"autofocus",2),A([n({type:Number})],g.prototype,"tabIndex",1);var bt=Object.defineProperty,vt=Object.getOwnPropertyDescriptor,k=(o,t,e,s)=>{for(var i=s>1?void 0:s?vt(t,e):t,r=o.length-1,a;r>=0;r--)(a=o[r])&&(i=(s?a(t,e,i):a(i))||i);return s&&i&&bt(t,e,i),i};function X(o){class t extends o{renderAnchor({id:s,className:i,ariaHidden:r,labelledby:a,tabindex:y,anchorContent:l=m`<slot></slot>`}){return m`<a
                    id=${s}
                    class=${c(i)}
                    href=${c(this.href)}
                    download=${c(this.download)}
                    target=${c(this.target)}
                    aria-label=${c(this.label)}
                    aria-labelledby=${c(a)}
                    aria-hidden=${c(r?"true":void 0)}
                    tabindex=${c(y)}
                    rel=${c(this.rel)}
                >${l}</a>`}}return k([n({reflect:!0})],t.prototype,"download",2),k([n()],t.prototype,"label",2),k([n({reflect:!0})],t.prototype,"href",2),k([n({reflect:!0})],t.prototype,"target",2),k([n({reflect:!0})],t.prototype,"rel",2),t}function $(o,t,e){return typeof o===t?()=>o:typeof o=="function"?o:e}class gt{constructor(t,{direction:e,elementEnterAction:s,elements:i,focusInIndex:r,isFocusableElement:a,listenerScope:y}={elements:()=>[]}){this._currentIndex=-1,this._direction=()=>"both",this.directionLength=5,this.elementEnterAction=l=>{},this._focused=!1,this._focusInIndex=l=>0,this.isFocusableElement=l=>!0,this._listenerScope=()=>this.host,this.offset=0,this.handleFocusin=l=>{if(!this.isEventWithinListenerScope(l))return;this.isRelatedTargetAnElement(l)&&this.hostContainsFocus();const d=l.composedPath();let f=-1;d.find(J=>(f=this.elements.indexOf(J),f!==-1)),this.currentIndex=f>-1?f:this.currentIndex},this.handleFocusout=l=>{this.isRelatedTargetAnElement(l)&&this.hostNoLongerContainsFocus()},this.handleKeydown=l=>{if(!this.acceptsEventCode(l.code)||l.defaultPrevented)return;let d=0;switch(l.code){case"ArrowRight":d+=1;break;case"ArrowDown":d+=this.direction==="grid"?this.directionLength:1;break;case"ArrowLeft":d-=1;break;case"ArrowUp":d-=this.direction==="grid"?this.directionLength:1;break;case"End":this.currentIndex=0,d-=1;break;case"Home":this.currentIndex=this.elements.length-1,d+=1;break}l.preventDefault(),this.direction==="grid"&&this.currentIndex+d<0?this.currentIndex=0:this.direction==="grid"&&this.currentIndex+d>this.elements.length-1?this.currentIndex=this.elements.length-1:this.setCurrentIndexCircularly(d),this.elementEnterAction(this.elements[this.currentIndex]),this.focus()},this.host=t,this.host.addController(this),this._elements=i,this.isFocusableElement=a||this.isFocusableElement,this._direction=$(e,"string",this._direction),this.elementEnterAction=s||this.elementEnterAction,this._focusInIndex=$(r,"number",this._focusInIndex),this._listenerScope=$(y,"object",this._listenerScope)}get currentIndex(){return this._currentIndex===-1&&(this._currentIndex=this.focusInIndex),this._currentIndex-this.offset}set currentIndex(t){this._currentIndex=t+this.offset}get direction(){return this._direction()}get elements(){return this.cachedElements||(this.cachedElements=this._elements()),this.cachedElements}set focused(t){t!==this.focused&&(this._focused=t)}get focused(){return this._focused}get focusInElement(){return this.elements[this.focusInIndex]}get focusInIndex(){return this._focusInIndex(this.elements)}isEventWithinListenerScope(t){return this._listenerScope()===this.host?!0:t.composedPath().includes(this._listenerScope())}update({elements:t}={elements:()=>[]}){this.unmanage(),this._elements=t,this.clearElementCache(),this.manage()}focus(t){let e=this.elements[this.currentIndex];(!e||!this.isFocusableElement(e))&&(this.setCurrentIndexCircularly(1),e=this.elements[this.currentIndex]),e&&this.isFocusableElement(e)&&e.focus(t)}clearElementCache(t=0){delete this.cachedElements,this.offset=t}setCurrentIndexCircularly(t){const{length:e}=this.elements;let s=e,i=(e+this.currentIndex+t)%e;for(;s&&this.elements[i]&&!this.isFocusableElement(this.elements[i]);)i=(e+i+t)%e,s-=1;this.currentIndex=i}hostContainsFocus(){this.host.addEventListener("focusout",this.handleFocusout),this.host.addEventListener("keydown",this.handleKeydown),this.focused=!0}hostNoLongerContainsFocus(){this.host.addEventListener("focusin",this.handleFocusin),this.host.removeEventListener("focusout",this.handleFocusout),this.host.removeEventListener("keydown",this.handleKeydown),this.currentIndex=this.focusInIndex,this.focused=!1}isRelatedTargetAnElement(t){const e=t.relatedTarget;return!this.elements.includes(e)}acceptsEventCode(t){if(t==="End"||t==="Home")return!0;switch(this.direction){case"horizontal":return t==="ArrowLeft"||t==="ArrowRight";case"vertical":return t==="ArrowUp"||t==="ArrowDown";case"both":case"grid":return t.startsWith("Arrow")}}manage(){this.addEventListeners()}unmanage(){this.removeEventListeners()}addEventListeners(){this.host.addEventListener("focusin",this.handleFocusin)}removeEventListeners(){this.host.removeEventListener("focusin",this.handleFocusin),this.host.removeEventListener("focusout",this.handleFocusout),this.host.removeEventListener("keydown",this.handleKeydown)}hostConnected(){this.addEventListeners()}hostDisconnected(){this.removeEventListeners()}}class G extends gt{constructor(){super(...arguments),this.managed=!0,this.manageIndexesAnimationFrame=0}set focused(t){t!==this.focused&&(super.focused=t,this.manageTabindexes())}get focused(){return super.focused}clearElementCache(t=0){cancelAnimationFrame(this.manageIndexesAnimationFrame),super.clearElementCache(t),this.managed&&(this.manageIndexesAnimationFrame=requestAnimationFrame(()=>this.manageTabindexes()))}manageTabindexes(){this.focused?this.updateTabindexes(()=>({tabIndex:-1})):this.updateTabindexes(t=>({removeTabIndex:t.contains(this.focusInElement)&&t!==this.focusInElement,tabIndex:t===this.focusInElement?0:-1}))}updateTabindexes(t){this.elements.forEach(e=>{const{tabIndex:s,removeTabIndex:i}=t(e);if(!i){e.tabIndex=s;return}e.removeAttribute("tabindex");const r=e;r.requestUpdate&&r.requestUpdate()})}manage(){this.managed=!0,this.manageTabindexes(),super.manage()}unmanage(){this.managed=!1,this.updateTabindexes(()=>({tabIndex:0})),super.unmanage()}hostUpdated(){this.host.hasUpdated||this.manageTabindexes()}}var ft=Object.defineProperty,xt=Object.getOwnPropertyDescriptor,u=(o,t,e,s)=>{for(var i=s>1?void 0:s?xt(t,e):t,r=o.length-1,a;r>=0;r--)(a=o[r])&&(i=(s?a(t,e,i):a(i))||i);return s&&i&&ft(t,e,i),i};const v={baseSize:100,noSelectionStyle:"transform: translateX(0px) scaleX(0) scaleY(0)",transformX(o,t){const e=t/this.baseSize;return`transform: translateX(${o}px) scaleX(${e});`},transformY(o,t){const e=t/this.baseSize;return`transform: translateY(${o}px) scaleY(${e});`},baseStyles(){return p`
            :host([direction='vertical-right']) #selection-indicator,
            :host([direction='vertical']) #selection-indicator {
                height: ${this.baseSize}px;
            }
            :host([dir][direction='horizontal']) #selection-indicator {
                width: ${this.baseSize}px;
            }
        `}};class h extends U(g){constructor(){super(),this.auto=!1,this.compact=!1,this.direction="horizontal",this.emphasized=!1,this.label="",this.enableTabsScroll=!1,this.quiet=!1,this.selectionIndicatorStyle=v.noSelectionStyle,this.shouldAnimate=!1,this.selected="",this._tabs=[],this.resizeController=new M(this,{callback:()=>{this.updateSelectionIndicator()}}),this.rovingTabindexController=new G(this,{focusInIndex:t=>{let e=0;return t.find((s,i)=>{const r=this.selected?!s.disabled&&s.value===this.selected:!s.disabled;return e=i,r})?e:-1},direction:()=>this.direction==="horizontal"?"horizontal":"vertical",elementEnterAction:t=>{this.auto&&(this.shouldAnimate=!0,this.selectTarget(t))},elements:()=>this.tabs,isFocusableElement:t=>!t.disabled,listenerScope:()=>this.tabList}),this.onTabsScroll=()=>{this.dispatchEvent(new Event("sp-tabs-scroll",{bubbles:!0,composed:!0}))},this.onClick=t=>{if(this.disabled)return;const e=t.composedPath().find(s=>s.parentElement===this);!e||e.disabled||(this.shouldAnimate=!0,this.selectTarget(e))},this.onKeyDown=t=>{if(t.code==="Enter"||t.code==="Space"){t.preventDefault();const e=t.target;e&&this.selectTarget(e)}},this.updateCheckedState=()=>{if(this.tabs.forEach(t=>{t.removeAttribute("selected")}),this.selected){const t=this.tabs.find(e=>e.value===this.selected);t?t.selected=!0:this.selected=""}else{const t=this.tabs[0];t&&t.setAttribute("tabindex","0")}this.updateSelectionIndicator()},this.updateSelectionIndicator=async()=>{const t=this.tabs.find(i=>i.selected);if(!t){this.selectionIndicatorStyle=v.noSelectionStyle;return}await Promise.all([t.updateComplete,document.fonts?document.fonts.ready:Promise.resolve()]);const{width:e,height:s}=t.getBoundingClientRect();this.selectionIndicatorStyle=this.direction==="horizontal"?v.transformX(t.offsetLeft,e):v.transformY(t.offsetTop,s)},new et(this,{config:{root:null,rootMargin:"0px",threshold:[0,1]},callback:()=>{this.updateSelectionIndicator()}})}static get styles(){return[H,R,v.baseStyles()]}set tabs(t){t!==this.tabs&&(this._tabs.forEach(e=>{this.resizeController.unobserve(e)}),t.forEach(e=>{this.resizeController.observe(e)}),this._tabs=t,this.rovingTabindexController.clearElementCache())}get tabs(){return this._tabs}get focusElement(){return this.rovingTabindexController.focusInElement||this}scrollTabs(t,e="smooth"){var s;(s=this.tabList)==null||s.scrollBy({left:t,top:0,behavior:e})}get scrollState(){if(this.tabList){const{scrollLeft:t,clientWidth:e,scrollWidth:s}=this.tabList,i=Math.abs(t)>0,r=Math.ceil(Math.abs(t))<s-e;return{canScrollLeft:this.dir==="ltr"?i:r,canScrollRight:this.dir==="ltr"?r:i}}return{}}manageAutoFocus(){const t=[...this.children].map(e=>typeof e.updateComplete<"u"?e.updateComplete:Promise.resolve(!0));Promise.all(t).then(()=>super.manageAutoFocus())}managePanels({target:t}){t.assignedElements().map(e=>{const{value:s,id:i}=e,r=this.querySelector(`[role="tab"][value="${s}"]`);r&&(r.setAttribute("aria-controls",i),e.setAttribute("aria-labelledby",r.id)),e.selected=s===this.selected})}render(){return m`
            <div
                class=${st({scroll:this.enableTabsScroll})}
                aria-label=${c(this.label?this.label:void 0)}
                @click=${this.onClick}
                @keydown=${this.onKeyDown}
                @scroll=${this.onTabsScroll}
                id="list"
                role="tablist"
                part="tablist"
            >
                <slot @slotchange=${this.onSlotChange}></slot>
                <div
                    id="selection-indicator"
                    class=${c(this.shouldAnimate?void 0:"first-position")}
                    style=${this.selectionIndicatorStyle}
                    role="presentation"
                ></div>
            </div>
            <slot name="tab-panel" @slotchange=${this.managePanels}></slot>
        `}willUpdate(t){if(!this.hasUpdated){const e=this.querySelector(":scope > [selected]");e&&this.selectTarget(e)}if(super.willUpdate(t),t.has("selected")){if(this.tabs.length&&this.updateCheckedState(),t.get("selected")){const s=this.querySelector(`[role="tabpanel"][value="${t.get("selected")}"]`);s&&(s.selected=!1)}const e=this.querySelector(`[role="tabpanel"][value="${this.selected}"]`);e&&(e.selected=!0)}t.has("direction")&&(this.direction==="horizontal"?this.removeAttribute("aria-orientation"):this.setAttribute("aria-orientation","vertical")),t.has("dir")&&this.updateSelectionIndicator(),t.has("disabled")&&(this.disabled?this.setAttribute("aria-disabled","true"):this.removeAttribute("aria-disabled")),!this.shouldAnimate&&typeof t.get("shouldAnimate")<"u"&&(this.shouldAnimate=!0)}selectTarget(t){const e=t.getAttribute("value");if(e){const s=this.selected;this.selected=e,this.dispatchEvent(new Event("change",{cancelable:!0}))||(this.selected=s)}}onSlotChange(){this.tabs=this.slotEl.assignedElements().filter(t=>t.getAttribute("role")==="tab"),this.updateCheckedState()}connectedCallback(){super.connectedCallback(),window.addEventListener("resize",this.updateSelectionIndicator),"fonts"in document&&document.fonts.addEventListener("loadingdone",this.updateSelectionIndicator)}disconnectedCallback(){window.removeEventListener("resize",this.updateSelectionIndicator),"fonts"in document&&document.fonts.removeEventListener("loadingdone",this.updateSelectionIndicator),super.disconnectedCallback()}}u([n({type:Boolean})],h.prototype,"auto",2),u([n({type:Boolean,reflect:!0})],h.prototype,"compact",2),u([n({reflect:!0})],h.prototype,"dir",2),u([n({reflect:!0})],h.prototype,"direction",2),u([n({type:Boolean,reflect:!0})],h.prototype,"emphasized",2),u([n()],h.prototype,"label",2),u([n({type:Boolean})],h.prototype,"enableTabsScroll",2),u([n({type:Boolean,reflect:!0})],h.prototype,"quiet",2),u([n({attribute:!1})],h.prototype,"selectionIndicatorStyle",2),u([n({attribute:!1})],h.prototype,"shouldAnimate",2),u([T("slot")],h.prototype,"slotEl",2),u([T("#list")],h.prototype,"tabList",2),u([n({reflect:!0})],h.prototype,"selected",2);var yt=Object.defineProperty,kt=Object.getOwnPropertyDescriptor,x=(o,t,e,s)=>{for(var i=s>1?void 0:s?kt(t,e):t,r=o.length-1,a;r>=0;r--)(a=o[r])&&(i=(s?a(t,e,i):a(i))||i);return s&&i&&yt(t,e,i),i};const q="transform: translateX(0px) scaleX(0) scaleY(0)";class b extends U(O){constructor(){super(...arguments),this.selectionIndicatorStyle=q,this.shouldAnimate=!1,this.quiet=!1,this.onClick=t=>{const e=t.target;this.shouldAnimate=!0,this.selectTarget(e)},this._items=[],this.resizeController=new M(this,{callback:()=>{this.updateSelectionIndicator()}}),this.updateSelectionIndicator=async()=>{const t=this.items.find(s=>s.value===this.selected||s.value===window.location.href);if(!t){this.selectionIndicatorStyle=q;return}await Promise.all([t.updateComplete,document.fonts?document.fonts.ready:Promise.resolve()]);const{width:e}=t.getBoundingClientRect();this.selectionIndicatorStyle=v.transformX(t.offsetLeft,e)}}static get styles(){return[H,R,v.baseStyles()]}set selected(t){const e=this.selected;t!==e&&(this.updateCheckedState(t),this._selected=t,this.requestUpdate("selected",e))}get selected(){return this._selected}get items(){return this._items}set items(t){t!==this.items&&(this._items.forEach(e=>{this.resizeController.unobserve(e)}),t.forEach(e=>{this.resizeController.observe(e)}),this._items=t)}manageItems(){this.items=this.slotEl.assignedElements({flatten:!0}).filter(e=>e.localName==="sp-top-nav-item");const t=this.items.find(e=>e.value===window.location.href);t&&this.selectTarget(t)}render(){return m`
            <div @click=${this.onClick} id="list">
                <slot @slotchange=${this.onSlotChange}></slot>
                <div
                    id="selection-indicator"
                    class=${c(this.shouldAnimate?void 0:"first-position")}
                    style=${this.selectionIndicatorStyle}
                ></div>
            </div>
        `}firstUpdated(t){super.firstUpdated(t),this.setAttribute("direction","horizontal")}updated(t){super.updated(t),t.has("dir")&&this.updateSelectionIndicator(),!this.shouldAnimate&&typeof t.get("shouldAnimate")<"u"&&(this.shouldAnimate=!0)}selectTarget(t){const{value:e}=t;e&&(this.selected=e)}onSlotChange(){this.manageItems()}updateCheckedState(t){this.items.forEach(e=>{e.selected=!1}),requestAnimationFrame(()=>{if(t&&t.length){const e=this.items.find(s=>s.value===t||s.value===window.location.href);e?e.selected=!0:this.selected=""}this.updateSelectionIndicator()})}connectedCallback(){super.connectedCallback(),window.addEventListener("resize",this.updateSelectionIndicator),"fonts"in document&&document.fonts.addEventListener("loadingdone",this.updateSelectionIndicator)}disconnectedCallback(){window.removeEventListener("resize",this.updateSelectionIndicator),"fonts"in document&&document.fonts.removeEventListener("loadingdone",this.updateSelectionIndicator),super.disconnectedCallback()}}x([n({reflect:!0})],b.prototype,"dir",2),x([n()],b.prototype,"selectionIndicatorStyle",2),x([n({attribute:!1})],b.prototype,"shouldAnimate",2),x([n({type:Boolean,reflect:!0})],b.prototype,"quiet",2),x([n({reflect:!0})],b.prototype,"selected",1),x([T("slot")],b.prototype,"slotEl",2);function S(o,t){customElements.define(o,t)}S("sp-top-nav",b);const wt=p`
:host{block-size:calc(var(--mod-tabs-item-height, var(--spectrum-tabs-item-height)) - var(--mod-tabs-divider-size, var(--spectrum-tabs-divider-size)));box-sizing:border-box;color:var(
--highcontrast-tabs-color,var(--mod-tabs-color,var(--spectrum-tabs-color))
);cursor:pointer;outline:none;position:relative;-webkit-text-decoration:none;text-decoration:none;transition:color var(
--mod-tabs-animation-duration,var(--spectrum-tabs-animation-duration)
) ease-out;white-space:nowrap;z-index:1}::slotted([slot=icon]){block-size:var(--mod-tabs-icon-size,var(--spectrum-tabs-icon-size));inline-size:var(--mod-tabs-icon-size,var(--spectrum-tabs-icon-size));margin-block-start:var(
--mod-tabs-top-to-icon,var(--spectrum-tabs-top-to-icon)
)}[name=icon]+#item-label{margin-inline-start:var(
--mod-tabs-icon-to-text,var(--spectrum-tabs-icon-to-text)
)}:host:before{block-size:calc(100% - var(--mod-tabs-top-to-text, var(--spectrum-tabs-top-to-text)));border:var(
--mod-tabs-focus-indicator-width,var(--spectrum-tabs-focus-indicator-width)
) solid transparent;border-radius:var(
--mod-tabs-focus-indicator-border-radius,var(--spectrum-tabs-focus-indicator-border-radius)
);box-sizing:border-box;content:"";inline-size:calc(100% + var(
--mod-tabs-focus-indicator-gap,
var(--spectrum-tabs-focus-indicator-gap)
)*2);inset-block-start:calc(var(--mod-tabs-top-to-text, var(--spectrum-tabs-top-to-text))/2);inset-inline-end:calc(var(
--mod-tabs-focus-indicator-gap,
var(--spectrum-tabs-focus-indicator-gap)
)*-1);inset-inline-start:calc(var(
--mod-tabs-focus-indicator-gap,
var(--spectrum-tabs-focus-indicator-gap)
)*-1);pointer-events:none;position:absolute}:host(:hover){color:var(
--highcontrast-tabs-color-hover,var(--mod-tabs-color-hover,var(--spectrum-tabs-color-hover))
)}:host([selected]){color:var(
--highcontrast-tabs-color-selected,var(--mod-tabs-color-selected,var(--spectrum-tabs-color-selected))
)}:host([disabled]){color:var(
--highcontrast-tabs-color-disabled,var(--mod-tabs-color-disabled,var(--spectrum-tabs-color-disabled))
);cursor:default}:host([disabled]) #item-label{cursor:default}:host(:focus),:host.focus-visible{color:var(
--highcontrast-tabs-color-key-focus,var(--mod-tabs-color-key-focus,var(--spectrum-tabs-color-key-focus))
)}:host(:focus),:host:focus-visible{color:var(
--highcontrast-tabs-color-key-focus,var(--mod-tabs-color-key-focus,var(--spectrum-tabs-color-key-focus))
)}:host(:focus):before,:host.focus-visible:before{border-color:var(
--highcontrast-tabs-focus-indicator-color,var(
--mod-tabs-focus-indicator-color,var(--spectrum-tabs-focus-indicator-color)
)
)}:host(:focus):before,:host:focus-visible:before{border-color:var(
--highcontrast-tabs-focus-indicator-color,var(
--mod-tabs-focus-indicator-color,var(--spectrum-tabs-focus-indicator-color)
)
)}#item-label{cursor:pointer;display:inline-block;font-family:var(--mod-tabs-font-family,var(--spectrum-tabs-font-family));font-size:var(--mod-tabs-font-weight,var(--spectrum-tabs-font-size));font-style:var(--mod-tabs-font-style,var(--spectrum-tabs-font-style));font-weight:var(--mod-tabs-font-weight,var(--spectrum-tabs-font-weight));line-height:var(--mod-tabs-line-height,var(--spectrum-tabs-line-height));margin-block-end:var(
--mod-tabs-bottom-to-text,var(--spectrum-tabs-bottom-to-text)
);margin-block-start:var(
--mod-tabs-top-to-text,var(--spectrum-tabs-top-to-text)
);-webkit-text-decoration:none;text-decoration:none;vertical-align:top}#item-label:empty{display:none}:host([disabled]){pointer-events:none}#item-label[hidden]{display:none}@media (forced-colors:active){:host:before{background-color:ButtonFace}:host ::slotted([slot=icon]){color:inherit;position:relative;z-index:1}#item-label{position:relative;z-index:1}:host([selected]){color:HighlightText}:host([selected]) ::slotted([slot=icon]){color:HighlightText}:host([selected]) #item-label{color:HighlightText}}:host([vertical]){align-items:center;display:flex;flex-direction:column;height:auto;justify-content:center}:host([dir][vertical]) slot[name=icon]+#item-label{margin-block-end:calc(var(--mod-tabs-bottom-to-text, var(--spectrum-tabs-bottom-to-text))/2);margin-block-start:calc(var(--mod-tabs-top-to-text, var(--spectrum-tabs-top-to-text))/2);margin-inline-start:0}:host([vertical]) ::slotted([slot=icon]){margin-block-start:calc(var(--mod-tabs-top-to-icon, var(--spectrum-tabs-top-to-icon))/2)}
`,Et=wt,zt=p`
a{color:inherit}a:focus{outline:none}:host(:focus-within){color:var(
--mod-tabs-color-key-focus,var(--spectrum-tabs-color-key-focus)
)}:host(:focus-within):before{border-color:var(
--highcontrast-tabs-focus-indicator-color,var(
--mod-tabs-focus-indicator-color,var(--spectrum-tabs-focus-indicator-color)
)
)}:host(:focus-within) ::slotted([slot=icon]){color:var(
--mod-tabs-color-key-focus,var(--spectrum-tabs-color-key-focus)
)}@media (forced-colors:active){:host{--highcontrast-tabs-focus-indicator-color:canvastext}}
`,St=zt;var Ct=Object.defineProperty,It=Object.getOwnPropertyDescriptor,j=(o,t,e,s)=>{for(var i=s>1?void 0:s?It(t,e):t,r=o.length-1,a;r>=0;r--)(a=o[r])&&(i=(s?a(t,e,i):a(i))||i);return s&&i&&Ct(t,e,i),i};class P extends X(g){constructor(){super(...arguments),this.selected=!1,this.value=""}static get styles(){return[Et,St]}get focusElement(){return this.anchor}click(){this.anchor.click()}render(){return m`
            <a
                id="item-label"
                href=${c(this.href)}
                download=${c(this.download)}
                target=${c(this.target)}
                aria-label=${c(this.label)}
                aria-current=${c(this.selected&&this.href?"page":void 0)}
                rel=${c(this.rel)}
            >
                <slot></slot>
            </a>
        `}updated(t){super.updated(t),this.value=this.anchor.href}}j([T("a")],P.prototype,"anchor",2),j([n({type:Boolean,reflect:!0})],P.prototype,"selected",2);S("sp-top-nav-item",P);const Tt=p`
:host{--spectrum-sidenav-item-padding-y:var(--spectrum-global-dimension-size-65)}:host{list-style-type:none;margin:0;padding:0}:host([multilevel]){margin:0;padding:0}:host{--spectrum-web-component-sidenav-font-weight:var(
--spectrum-sidenav-item-font-weight,var(--spectrum-global-font-weight-regular)
);display:block;width:240px}:host([variant=multilevel]){--spectrum-web-component-sidenav-font-weight:var(
--spectrum-sidenav-multilevel-main-item-font-weight,var(--spectrum-global-font-weight-bold)
)}
`,At=Tt,$t=p`
#list{--spectrum-sidenav-item-padding-y:var(--spectrum-global-dimension-size-65);list-style-type:none;margin:0;padding:0}:host{list-style-type:none;margin-bottom:var(
--spectrum-sidenav-item-gap,var(--spectrum-global-dimension-size-50)
);margin-left:0;margin-right:0;margin-top:var(
--spectrum-sidenav-item-gap,var(--spectrum-global-dimension-size-50)
)}#item-link{align-items:center;border-radius:var(
--spectrum-sidenav-item-border-radius,var(--spectrum-alias-border-radius-regular)
);box-sizing:border-box;cursor:pointer;display:inline-flex;font-size:var(
--spectrum-sidenav-item-text-size,var(--spectrum-alias-font-size-default)
);font-style:normal;font-weight:var(
--spectrum-sidenav-item-text-font-weight,var(--spectrum-global-font-weight-regular)
);-webkit-hyphens:auto;hyphens:auto;min-height:var(
--spectrum-sidenav-item-height,var(--spectrum-alias-single-line-height)
);padding:var(--spectrum-sidenav-item-padding-y) var(
--spectrum-sidenav-item-padding-x,var(--spectrum-global-dimension-size-150)
);position:relative;-webkit-text-decoration:none;text-decoration:none;transition:background-color var(--spectrum-global-animation-duration-100,.13s) ease-out,color var(--spectrum-global-animation-duration-100,.13s) ease-out;width:100%;word-break:break-word}#item-link:focus{outline:none}#item-link:before{border:var(
--spectrum-alias-focus-ring-size,var(--spectrum-global-dimension-static-size-25)
) solid transparent;border-radius:var(
--spectrum-sidenav-item-border-radius,var(--spectrum-alias-border-radius-regular)
);content:"";inset:0;pointer-events:none;position:absolute;transition:border var(--spectrum-global-animation-duration-100,.13s) ease-out}:host([dir=ltr]) #item-link ::slotted([slot=icon]){margin-right:var(
--spectrum-sidenav-icon-gap,var(--spectrum-global-dimension-size-100)
)}:host([dir=rtl]) #item-link ::slotted([slot=icon]){margin-left:var(
--spectrum-sidenav-icon-gap,var(--spectrum-global-dimension-size-100)
)}#item-link ::slotted([slot=icon]){flex-shrink:0}:host([dir=ltr]) .spectrum-SideNav-heading{margin-right:0}:host([dir=ltr]) .spectrum-SideNav-heading,:host([dir=rtl]) .spectrum-SideNav-heading{margin-left:0}:host([dir=rtl]) .spectrum-SideNav-heading{margin-right:0}:host([selected])>#item-link{background-color:var(
--spectrum-sidenav-item-background-color-selected,var(--spectrum-alias-highlight-hover)
);color:var(
--spectrum-sidenav-item-text-color-selected,var(--spectrum-alias-text-color-hover)
)}.is-active>#item-link{background-color:var(
--spectrum-sidenav-item-background-color-down,var(--spectrum-alias-highlight-hover)
)}:host([disabled]) #item-link{background-color:var(
--spectrum-sidenav-item-background-color-disabled,var(--spectrum-alias-background-color-transparent)
);color:var(
--spectrum-sidenav-item-text-color-disabled,var(--spectrum-alias-text-color-disabled)
);cursor:default;pointer-events:none}#item-link{background-color:var(
--spectrum-sidenav-item-background-color,var(--spectrum-alias-background-color-transparent)
);color:var(
--spectrum-sidenav-item-text-color,var(--spectrum-alias-text-color)
)}#item-link:hover{background-color:var(
--spectrum-sidenav-item-background-color-hover,var(--spectrum-alias-highlight-hover)
);color:var(
--spectrum-sidenav-item-text-color-hover,var(--spectrum-alias-text-color-hover)
)}#item-link:active{background-color:var(
--spectrum-sidenav-item-background-color-down,var(--spectrum-alias-highlight-hover)
)}#item-link.focus-visible{background-color:var(
--spectrum-sidenav-item-background-color-key-focus,var(--spectrum-alias-highlight-hover)
);color:var(
--spectrum-sidenav-item-text-color-key-focus,var(--spectrum-alias-text-color-hover)
)}#item-link:focus-visible{background-color:var(
--spectrum-sidenav-item-background-color-key-focus,var(--spectrum-alias-highlight-hover)
);color:var(
--spectrum-sidenav-item-text-color-key-focus,var(--spectrum-alias-text-color-hover)
)}#item-link.focus-visible:before{border-color:var(
--spectrum-sidenav-item-border-color-key-focus,var(--spectrum-alias-border-color-key-focus)
)}#item-link.focus-visible:before{border-color:var(
--spectrum-sidenav-item-border-color-key-focus,var(--spectrum-alias-border-color-key-focus)
)}#item-link:focus-visible:before{border-color:var(
--spectrum-sidenav-item-border-color-key-focus,var(--spectrum-alias-border-color-key-focus)
)}@media (forced-colors:active){:host{--spectrum-sidenav-item-text-color-selected:HighlightText;--spectrum-sidenav-item-background-color-selected:Highlight;--spectrum-sidenav-item-background-color-disabled:ButtonFace;--spectrum-sidenav-item-text-color-disabled:GrayText;--spectrum-sidenav-item-background-color:ButtonFace;--spectrum-sidenav-item-text-color:ButtonText;--spectrum-sidenav-item-background-color-hover:ButtonFace;--spectrum-sidenav-item-text-color-hover:ButtonText;--spectrum-sidenav-item-background-color-down:ButtonFace;--spectrum-sidenav-item-background-color-key-focus:ButtonFace;--spectrum-sidenav-item-text-color-key-focus:ButtonText;--spectrum-sidenav-item-border-color-key-focus:ButtonText;forced-color-adjust:none}}:host{display:block}:host([disabled]){pointer-events:none}:host([multiLevel]){--spectrum-web-component-sidenav-font-weight:var(
--spectrum-sidenav-item-font-weight,700
)}::slotted(sp-sidenav-item:not([multiLevel])){--spectrum-web-component-sidenav-font-weight:var(
--spectrum-sidenav-item-font-weight,400
)}#item-link{font-weight:var(--spectrum-web-component-sidenav-font-weight);justify-content:start}:host([dir=ltr]) #item-link[data-level="1"]{padding-left:calc(var(
--spectrum-sidenav-multilevel-item-indentation-level1,
var(--spectrum-global-dimension-size-150)
) + var(
--spectrum-sidenav-item-padding-x,
var(--spectrum-global-dimension-size-150)
))}:host([dir=ltr]) #item-link[data-level="2"]{padding-left:calc(var(
--spectrum-sidenav-multilevel-item-indentation-level2,
var(--spectrum-global-dimension-size-300)
) + var(
--spectrum-sidenav-item-padding-x,
var(--spectrum-global-dimension-size-150)
))}:host([dir=rtl]) #item-link[data-level="1"]{padding-right:calc(var(
--spectrum-sidenav-multilevel-item-indentation-level1,
var(--spectrum-global-dimension-size-150)
) + var(
--spectrum-sidenav-item-padding-x,
var(--spectrum-global-dimension-size-150)
))}:host([dir=rtl]) #item-link[data-level="2"]{padding-right:calc(var(
--spectrum-sidenav-multilevel-item-indentation-level2,
var(--spectrum-global-dimension-size-300)
) + var(
--spectrum-sidenav-item-padding-x,
var(--spectrum-global-dimension-size-150)
))}a ::slotted(sp-sidenav-item){display:none}
`,V=$t;var _t=Object.defineProperty,Ft=Object.getOwnPropertyDescriptor,_=(o,t,e,s)=>{for(var i=s>1?void 0:s?Ft(t,e):t,r=o.length-1,a;r>=0;r--)(a=o[r])&&(i=(s?a(t,e,i):a(i))||i);return s&&i&&_t(t,e,i),i};const D=class extends X(g){constructor(){super(...arguments),this.value=void 0,this.selected=!1,this.expanded=!1}static get styles(){return[V]}get parentSideNav(){return this._parentSidenav||(this._parentSidenav=this.closest("sp-sidenav")),this._parentSidenav}get hasChildren(){return!!this.querySelector("sp-sidenav-item")}get depth(){let o=0,t=this.parentElement;for(;t instanceof D;)o++,t=t.parentElement;return o}handleSideNavSelect(o){this.selected=o.target===this}handleClick(o){!this.href&&o&&o.preventDefault(),!this.disabled&&(!this.href||o!=null&&o.defaultPrevented)&&(this.hasChildren?this.expanded=!this.expanded:this.value&&this.announceSelected(this.value))}announceSelected(o){const t={value:o},e=new CustomEvent("sidenav-select",{bubbles:!0,composed:!0,detail:t});this.dispatchEvent(e)}click(){this.handleClick()}get focusElement(){return this.shadowRoot.querySelector("#item-link")}update(o){this.hasAttribute("slot")||(this.slot="descendant"),super.update(o)}render(){return m`
            <a
                href=${this.href||"#"}
                target=${c(this.target)}
                download=${c(this.download)}
                rel=${c(this.rel)}
                data-level="${this.depth}"
                @click="${this.handleClick}"
                id="item-link"
                aria-current=${c(this.selected&&this.href?"page":void 0)}
                aria-expanded=${c(this.hasChildren?this.expanded:void 0)}
                aria-controls=${c(this.hasChildren&&this.expanded?"list":void 0)}
            >
                <slot name="icon"></slot>
                ${this.label}
                <slot></slot>
            </a>
            ${this.expanded?m`
                      <div id="list" aria-labelledby="item-link" role="list">
                          <slot name="descendant"></slot>
                      </div>
                  `:m``}
        `}updated(o){var t;this.hasChildren&&this.expanded&&!this.selected&&(t=this.parentSideNav)!=null&&t.manageTabIndex?this.focusElement.tabIndex=-1:this.focusElement.removeAttribute("tabindex"),super.updated(o)}connectedCallback(){super.connectedCallback(),this.startTrackingSelection()}disconnectedCallback(){this.stopTrackingSelection(),super.disconnectedCallback()}async startTrackingSelection(){const o=this.parentSideNav;if(o&&(await o.updateComplete,o.startTrackingSelectionForItem(this),this.selected=this.value!=null&&this.value===o.value,this.selected===!0&&o.variant==="multilevel")){let t=this.parentElement;for(;t instanceof D;)t.expanded=!0,t=t.parentElement}}stopTrackingSelection(){const o=this.parentSideNav;o&&o.stopTrackingSelectionForItem(this),this._parentSidenav=void 0}firstUpdated(o){super.firstUpdated(o),this.setAttribute("role","listitem")}};let E=D;_([n()],E.prototype,"value",2),_([n({type:Boolean,reflect:!0})],E.prototype,"selected",2),_([n({type:Boolean,reflect:!0})],E.prototype,"expanded",2);const Lt=p`
#list{--spectrum-sidenav-item-padding-y:var(--spectrum-global-dimension-size-65);list-style-type:none;margin:0;padding:0}:host([dir=ltr]) #heading{margin-right:0}:host([dir=ltr]) #heading,:host([dir=rtl]) #heading{margin-left:0}:host([dir=rtl]) #heading{margin-right:0}#heading{border-radius:var(
--spectrum-sidenav-heading-border-radius,var(--spectrum-alias-border-radius-regular)
);color:var(
--spectrum-sidenav-heading-text-color,var(--spectrum-global-color-gray-700)
);font-size:var(
--spectrum-sidenav-heading-text-size,var(--spectrum-global-dimension-font-size-50)
);font-style:normal;font-weight:var(
--spectrum-sidenav-heading-text-font-weight,var(--spectrum-global-font-weight-medium)
);height:var(
--spectrum-sidenav-heading-height,var(--spectrum-alias-single-line-height)
);letter-spacing:var(
--spectrum-sidenav-heading-text-letter-spacing,var(--spectrum-global-font-letter-spacing-medium)
);line-height:var(
--spectrum-sidenav-heading-height,var(--spectrum-alias-single-line-height)
);margin-bottom:var(
--spectrum-sidenav-heading-gap-bottom,var(--spectrum-global-dimension-size-50)
);margin-top:var(
--spectrum-sidenav-heading-gap-top,var(--spectrum-global-dimension-size-200)
);padding-bottom:0;padding-left:var(
--spectrum-sidenav-heading-padding-x,var(--spectrum-global-dimension-size-150)
);padding-right:var(
--spectrum-sidenav-heading-padding-x,var(--spectrum-global-dimension-size-150)
);padding-top:0;text-transform:uppercase}:host{display:block}
`,Pt=Lt;var Dt=Object.defineProperty,Ot=Object.getOwnPropertyDescriptor,Nt=(o,t,e,s)=>{for(var i=s>1?void 0:s?Ot(t,e):t,r=o.length-1,a;r>=0;r--)(a=o[r])&&(i=(s?a(t,e,i):a(i))||i);return s&&i&&Dt(t,e,i),i};class N extends O{constructor(){super(...arguments),this.label=""}static get styles(){return[V,Pt]}update(t){this.hasAttribute("slot")||(this.slot="descendant"),super.update(t)}render(){return m`
            <h2 id="heading">${this.label}</h2>
            <div id="list" aria-labelledby="heading" role="list">
                <slot name="descendant"></slot>
            </div>
        `}firstUpdated(t){super.firstUpdated(t),this.setAttribute("role","listitem")}}Nt([n({reflect:!0})],N.prototype,"label",2);var Bt=Object.defineProperty,qt=Object.getOwnPropertyDescriptor,I=(o,t,e,s)=>{for(var i=s>1?void 0:s?qt(t,e):t,r=o.length-1,a;r>=0;r--)(a=o[r])&&(i=(s?a(t,e,i):a(i))||i);return s&&i&&Bt(t,e,i),i};class w extends g{constructor(){super(...arguments),this.items=new Set,this.rovingTabindexController=new G(this,{focusInIndex:t=>{let e,s=t.findIndex(i=>(i.value===this.value&&this.isDisabledChild(i)&&(e=i.closest("sp-sidenav-item:not([expanded])")),this.value?!i.disabled&&!this.isDisabledChild(i)&&i.value===this.value:!i.disabled&&!this.isDisabledChild(i)));return s===-1&&e&&(s=t.findIndex(i=>i===e)),s},direction:"vertical",elements:()=>[...this.querySelectorAll("sp-sidenav-item")],isFocusableElement:t=>!t.disabled&&!this.isDisabledChild(t)}),this.manageTabIndex=!1,this.value=void 0,this.variant=void 0,this.label=void 0}static get styles(){return[At]}startTrackingSelectionForItem(t){this.items.add(t),this.rovingTabindexController.clearElementCache()}stopTrackingSelectionForItem(t){this.items.delete(t),this.rovingTabindexController.clearElementCache()}handleSelect(t){if(t.stopPropagation(),this.value===t.detail.value)return;const e=this.value;this.value=t.detail.value,this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0,cancelable:!0}))?this.items.forEach(s=>s.handleSideNavSelect(t)):(this.value=e,t.target.selected=!1,t.preventDefault())}focus(){this.rovingTabindexController.focus()}blur(){this.focusElement!==this&&super.blur()}click(){this.focusElement!==this&&super.click()}get focusElement(){return this.rovingTabindexController.focusInElement||this}isDisabledChild(t){if(t.disabled)return!0;let e=t.parentElement;for(;e instanceof N||!e.disabled&&e instanceof E&&e.expanded;)e=e.parentElement;return e!==this}handleSlotchange(){this.manageTabIndex?this.rovingTabindexController.manage():this.rovingTabindexController.unmanage()}render(){return m`
            <nav
                @sidenav-select=${this.handleSelect}
                aria-label=${c(this.label)}
            >
                <div role="list">
                    <slot
                        name="descendant"
                        @slotchange=${this.handleSlotchange}
                    ></slot>
                </div>
            </nav>
        `}willUpdate(){if(!this.hasUpdated){const t=this.querySelector("[selected]");t&&(this.value=t.value)}}updated(t){super.updated(t),t.has("manageTabIndex")&&(this.manageTabIndex?this.rovingTabindexController.manage():this.rovingTabindexController.unmanage())}}I([n({type:Boolean,reflect:!0,attribute:"manage-tab-index"})],w.prototype,"manageTabIndex",2),I([n({reflect:!0})],w.prototype,"value",2),I([n({reflect:!0})],w.prototype,"variant",2),I([n({reflect:!0})],w.prototype,"label",2);S("sp-sidenav",w);S("sp-sidenav-heading",N);S("sp-sidenav-item",E);class jt extends z{render(){return m`
            <!-- <sp-field-label for="name-0-m">Name</sp-field-label>
            <sp-textfield id="name-0-m" placeholder="Enter your name"></sp-textfield> -->
            <sp-field-label for="story-0-m">Background</sp-field-label>
            <sp-textfield
                
                readonly=true
                grows=false
                id="story-0-m"
                multiline
                placeholder="Enter your life story"
            >God</sp-textfield>
        `}}customElements.define("message-chat",jt);class K extends z{render(){return m`
            <div class="container">
            <div class="maincontent">
                <slot name="maincontent"></slot>
            </div>
            <div class="topbar"></div>
            <div class="sidebar">
                <slot name="sidebar"></slot>
            </div>
            
            </div>
        `}}C(K,"styles",p`
            .container {  display: grid;
            grid-template-columns: 0.4fr 1.6fr 1fr;
            grid-template-rows: 0.4fr 1.8fr 0.8fr;
            gap: 2px 0.7vw;
            grid-auto-flow: row;
            grid-template-areas:
                "sidebar topbar topbar"
                "sidebar maincontent maincontent"
                "sidebar maincontent maincontent";
            }

            .maincontent { grid-area: maincontent; }

            .topbar { grid-area: topbar; }

            .sidebar { grid-area: sidebar;
                }
    `);customElements.define("grid-temp",K);class W extends z{render(){return m`
            
            <a id="logo" href="/spectrum-web-components/index.html" > <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 30 26" width="36px" xml:space="preserve" aria-hidden="true"> <path fill="#FA0F00" d="M19 0h11v26zM11.1 0H0v26zM15 9.6L22.1 26h-4.6l-2.1-5.2h-5.2z"></path> </svg> 
            <h1 class="title logo"> Spectrum <br> Web&nbsp;Components </h1> </a>
            
                    <!-- <slot name ="side-nav"> -->
            <sp-sidenav slot="sidebar" defaultValue="Docs">
            <sp-sidenav-item value="Docs" href="/components/SideNav">
                Docs
            </sp-sidenav-item>
            <sp-sidenav-item value="Guides" href="/guides/getting_started">
                Guides
            </sp-sidenav-item>
            <sp-sidenav-item value="Community" href="/community">
                Community
            </sp-sidenav-item>
            <sp-sidenav-item value="Storybook" href="/storybook" target="_blank">
                Storybook
            </sp-sidenav-item>
            <sp-sidenav-item
                value="Releases"
                href="http://git.corp.adobe.com/React/react-spectrum/releases"
                target="_blank"
                disabled
            >
                Releases
            </sp-sidenav-item>
            <sp-sidenav-item
                value="GitHub"
                href="http://git.corp.adobe.com/React/react-spectrum"
                target="_blank"
            >
                GitHub
            </sp-sidenav-item>
        </sp-sidenav>

            <!-- </slot> -->
        `}}C(W,"styles",p`
            :host {
                display: flex;
                flex-direction: column;
            }
            #logo {
                display: flex;
                flex-direction: row;   
                padding: 10px;             
            }
            #logo .title{
                font-size: 18px;
                margin: 0px 0px 0px 10px;
            }
    `);customElements.define("sidebar-element",W);class Y extends z{render(){return m`
        
        <sp-theme
            theme="spectrum"
            color="light"
            scale="medium"
            style="background-color: var(--spectrum-gray-100)"
        >
        <grid-temp>
        <main slot="maincontent">
            <sp-top-nav >
            <sp-top-nav-item href="#Home" >Messages</sp-top-nav-item>
            <sp-top-nav-item href="#page-2">Payments</sp-top-nav-item>
            <sp-top-nav-item href="#page-2">Properties</sp-top-nav-item>
            <sp-top-nav-item href="#page-2">Handyman</sp-top-nav-item>
        
            </sp-top-nav>
            <message-chat></message-chat>
        </main>

        <sidebar-element slot="sidebar"></sidebar-element>
        </grid-temp>
            
            
        </sp-theme>
        `}}C(Y,"styles",p`

    `);customElements.define("my-page",Y);
