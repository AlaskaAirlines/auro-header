// Copyright (c) 2020 Alaska Airlines. All right reserved. Licensed under the Apache-2.0 license
// See LICENSE in the project root for license information.

// ---------------------------------------------------------------------

import { LitElement, html, css } from "lit-element";
import { ifDefined } from 'lit-html/directives/if-defined.js';

// Import touch detection lib
import "focus-visible/dist/focus-visible.min.js";
import styleCss from "./style-css.js";

// build the component class
class AuroHeader extends LitElement {
  constructor() {
    super();

    this.display = 'display'
  }

  // function to define props used within the scope of this component
  static get properties() {
    return {
      level:    { type: String },
      display:  { type: String,
                  reflect: true },
      color:    { type: String },
      margin:   { type: String },
      size:     { type: String },
      type:     { type: String }
    };
  }

  static get styles() {
    return css`
      ${styleCss}
    `;
  }

  // Determines if the spacing is to be applied uniform or individual
  // Returns either selectors or function
  spacingDecision(arg) {
    if (this.margin === 'both') {
      switch (arg) {
        case 'none': return `util_stackMarginNone--top util_stackMarginNone--bottom`
        case 'xxxs': return `util_stackMarginXxxs--top util_stackMarginXxxs--bottom`
        case 'xxs': return `util_stackMarginXxs--top util_stackMarginXxs--bottom`
        case 'xs': return `util_stackMarginXs--top util_stackMarginXs--bottom`
        case 'sm': return `util_stackMarginSm--top util_stackMarginSm--bottom`
        case 'md': return `util_stackMarginMd--top util_stackMarginMd--bottom`
        case 'lg': return `util_stackMarginLg--top util_stackMarginLg--bottom`
        case 'xl': return `util_stackMarginXl--top util_stackMarginXl--bottom`
        case 'xxl': return `util_stackMarginXxl--top util_stackMarginXxl--bottom`
        case 'xxxl': return `util_stackMarginXxl--top util_stackMarginXxl--bottom`
        default: return ''
      }
    } else {
      return this.spacingApplied(arg)
    }
  }

  // If spacing is individual, return will be single selector based on input
  // Returns selector
  spacingApplied(arg) {
    switch (arg) {
      case 'none': return `util_stackMarginNone--${this.margin}`
      case 'xxxs': return `util_stackMarginXxxs--${this.margin}`
      case 'xxs': return `util_stackMarginXxs--${this.margin}`
      case 'xs': return `util_stackMarginXs--${this.margin}`
      case 'sm': return `util_stackMarginSm--${this.margin}`
      case 'md': return `util_stackMarginMd--${this.margin}`
      case 'lg': return `util_stackMarginLg--${this.margin}`
      case 'xl': return `util_stackMarginXl--${this.margin}`
      case 'xxl': return `util_stackMarginXxl--${this.margin}`
      case 'xxxl': return `util_stackMarginXxl--${this.margin}`
      default: return ''
    }
  }

  template(level) {
    if (this.display === '' || this.display === null) {
      this.display = 'display'
    }

    switch (level) {
      case '2': return html`<h2 class="heading heading--${this.display} ${this.spacingDecision(this.size)}" style="color: ${ifDefined(this.color ? this.color : undefined)}"><slot></slot></h2>`;
      case '3': return html`<h3 class="heading heading--${this.display} ${this.spacingDecision(this.size)}" style="color: ${ifDefined(this.color ? this.color : undefined)}"><slot></slot></h3>`;
      case '4': return html`<h4 class="heading heading--${this.display} ${this.spacingDecision(this.size)}" style="color: ${ifDefined(this.color ? this.color : undefined)}"><slot></slot></h4>`;
      case '5': return html`<h5 class="heading heading--${this.display} ${this.spacingDecision(this.size)}" style="color: ${ifDefined(this.color ? this.color : undefined)}"><slot></slot></h5>`;
      case '6': return html`<h6 class="heading heading--${this.display} ${this.spacingDecision(this.size)}" style="color: ${ifDefined(this.color ? this.color : undefined)}"><slot></slot></h6>`;
      default: return html`<h1 class="heading heading--${this.display} ${this.spacingDecision(this.size)}" style="color: ${ifDefined(this.color ? this.color : undefined)}"><slot></slot></h1>`;
    }
  }
  // function that renders the HTML and CSS into  the scope of the component

  render() {
    return this.template(this.level);
  }
}

/* istanbul ignore else */
// define the name of the custom component
if (!customElements.get("auro-header")) {
  customElements.define("auro-header", AuroHeader);
}
