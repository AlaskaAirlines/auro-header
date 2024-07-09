// Copyright (c) 2020 Alaska Airlines. All right reserved. Licensed under the Apache-2.0 license
// See LICENSE in the project root for license information.

// ---------------------------------------------------------------------

import { LitElement, html } from "lit";
import { ifDefined } from 'lit/directives/if-defined.js';

// Import touch detection lib
import styleCss from "./style-css.js";

/**
 * The auro-header component is a custom element to make using headers with the Auro Design System seamless and easy.
 *
 * @attr {String} level - Determines heading level for HTML element. Options are `1` - `6`
 * @attr {String} display - Determines presentation of header. Options are `display`, `800`, `700`, `600`, `500`, `400`, `300`.
 * @attr {String} color - Allows user to pass in CSS custom property or direct hex value to change the color of the header
 * @attr {String} margin - Specify the margin(s) to be altered. Options are `top`, `bottom`, or `both`.
 * @attr {String} size - Specify size of margin adjustment, either `none`, `25`, `50`, `100`, `150`, `200`, `300`, `400`, `600` or `800`. **DEPRECATED** the `xxxs` - `xxxl` options.
 * @attr {String} type - **DEPRECATED** Option, `px`. Legacy option for converting REMs to PX. Use `fixed` feature.
 * @attr {Boolean} fixed - Uses px values instead of rem
 */

/* eslint complexity: ["error", 21] */

// build the component class
export class AuroHeader extends LitElement {
  constructor() {
    super();

    this.display = 'display';
  }

  // function to define props used within the scope of this component
  static get properties() {
    return {
      level:    { type: String },
      display:  {
        type: String,
        reflect: true
      },
      color:    { type: String },
      margin:   { type: String },
      size:     { type: String }
    };
  }

  static get styles() {
    return [styleCss];
  }

  /**
   * Determines if the spacing is to be applied uniform or individual.
   * @private
   * @param {string} size - Accepts string for size definition.
   * @returns {string} - Returns either selectors or function.
   */
  spacingDecision(size) {
    if (this.margin === 'both') {
      switch (size) {
        case 'none': return `util_stackMarginNone--top util_stackMarginNone--bottom`;
        case 'xxxs': return `util_stackMarginXxxs--top util_stackMarginXxxs--bottom`;
        case 'xxs': return `util_stackMarginXxs--top util_stackMarginXxs--bottom`;
        case 'xs': return `util_stackMarginXs--top util_stackMarginXs--bottom`;
        case 'sm': return `util_stackMarginSm--top util_stackMarginSm--bottom`;
        case 'md': return `util_stackMarginMd--top util_stackMarginMd--bottom`;
        case 'lg': return `util_stackMarginLg--top util_stackMarginLg--bottom`;
        case 'xl': return `util_stackMarginXl--top util_stackMarginXl--bottom`;
        case 'xxl': return `util_stackMarginXxl--top util_stackMarginXxl--bottom`;
        case 'xxxl': return `util_stackMarginXxl--top util_stackMarginXxl--bottom`;
        case '25': return `util_stackMargin25--top util_stackMargin25--bottom`;
        case '50': return `util_stackMargin50--top util_stackMargin50--bottom`;
        case '100': return `util_stackMargin100--top util_stackMargin100--bottom`;
        case '150': return `util_stackMargin150--top util_stackMargin150--bottom`;
        case '200': return `util_stackMargin200--top util_stackMargin200--bottom`;
        case '300': return `util_stackMargin300--top util_stackMargin300--bottom`;
        case '400': return `util_stackMargin400--top util_stackMargin400--bottom`;
        case '600': return `util_stackMargin600--top util_stackMargin600--bottom`;
        case '800': return `util_stackMargin800--top util_stackMargin800--bottom`;
        default: return '';
      }
    } else {
      return this.spacingApplied(size);
    }
  }

  /**
   * If spacing is individual, return will be single selector based on input.
   * @private
   * @param {string} size - Accepts string for size definition.
   * @returns {string} - Returns selector.
   */
  spacingApplied(size) {
    switch (size) {
      case 'none': return `util_stackMarginNone--${this.margin}`;
      case '25': return `util_stackMargin25--${this.margin}`;
      case '50': return `util_stackMargin50--${this.margin}`;
      case '100': return `util_stackMargin100--${this.margin}`;
      case '150': return `util_stackMargin150--${this.margin}`;
      case '200': return `util_stackMargin200--${this.margin}`;
      case '300': return `util_stackMargin300--${this.margin}`;
      case '400': return `util_stackMargin400--${this.margin}`;
      case '600': return `util_stackMarginX600--${this.margin}`;
      case '800': return `util_stackMargin800--${this.margin}`;
      case 'xxxs': return `util_stackMarginXxxs--${this.margin}`;
      case 'xxs': return `util_stackMarginXxs--${this.margin}`;
      case 'xs': return `util_stackMarginXs--${this.margin}`;
      case 'sm': return `util_stackMarginSm--${this.margin}`;
      case 'md': return `util_stackMarginMd--${this.margin}`;
      case 'lg': return `util_stackMarginLg--${this.margin}`;
      case 'xl': return `util_stackMarginXl--${this.margin}`;
      case 'xxl': return `util_stackMarginXxl--${this.margin}`;
      case 'xxxl': return `util_stackMarginXxl--${this.margin}`;
      default: return '';
    }
  }

  /**
   * Creates HTML template for use in render function.
   * @private
   * @param {string} level - Accepts string value.
   * @returns {string} - Returns HTML template.
   */
  template(level) {
    if (this.display === '' || this.display === null) {
      this.display = 'display';
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

// default internal definition
if (!customElements.get("auro-header")) {
  customElements.define("auro-header", AuroHeader);
}
