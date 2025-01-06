// Copyright (c) 2020 Alaska Airlines. All right reserved. Licensed under the Apache-2.0 license
// See LICENSE in the project root for license information.

// ---------------------------------------------------------------------

import { LitElement, html } from "lit";
import { ifDefined } from 'lit/directives/if-defined.js';

import AuroLibraryRuntimeUtils from '@aurodesignsystem/auro-library/scripts/utils/runtimeUtils.mjs';

// Import touch detection lib
import styleCss from "./style-css.js";

/**
 * The auro-header component is a custom element to make using headers with the Auro Design System seamless and easy.
 *
 * @attr {String} level - Determines heading level for HTML element. Options are `none` - `6`. Default is `1`. If `none` is selected, the element will be a `span`.
 * @attr {String} display - Determines presentation of header. Options are `display`, `800`, `700`, `600`, `500`, `400`, `300`.
 * @attr {String} color - Allows user to pass in CSS custom property or direct hex value to change the color of the header
 * @attr {String} margin - Specify the margin(s) to be altered. Options are `top`, `bottom`, or `both`.
 * @attr {String} size - Specify size of margin adjustment, either `none`, `25`, `50`, `100`, `150`, `200`, `300`, `400`, `600` or `800`.
 */

/* eslint complexity: ["error", 21] */

// build the component class
export class AuroHeader extends LitElement {
  constructor() {
    super();

    this.display = 'display';

    /**
     * @private
     */
    this.runtimeUtils = new AuroLibraryRuntimeUtils();
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
   * This will register this element with the browser.
   * @param {string} [name="auro-header"] - The name of element that you want to register to.
   *
   * @example
   * AuroHeader.register("custom-header") // this will register this element to <custom-header/>
   *
   */
  static register(name = "auro-header") {
    AuroLibraryRuntimeUtils.prototype.registerComponent(name, AuroHeader);
  }

  firstUpdated() {
    // Add the tag name as an attribute if it is different than the component name
    this.runtimeUtils.handleComponentTagRename(this, 'auro-header');
  }

  /**
   * Determines spacing CSS classes.
   * @private
   * @returns {string} - Returns CSS class string.
   */
  get spacingClasses() {
    /* eslint-disable-next-line array-element-newline */
    const validSizes = ['none', '25', '50', '100', '150', '200', '300', '400', '600', '800'];

    if (!this.margin) {
      return '';
    }

    const baseClass = validSizes.includes(this.size) ? `util_stackMargin${this.size}` : '';
    if (!baseClass) {
      return '';
    }

    return this.margin === 'both'
      ? `${baseClass}--top ${baseClass}--bottom`
      : `${baseClass}--${this.margin}`;
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

    const spacingStyles = `heading heading--${this.display} ${this.spacingClasses}`;
    const colorStyles = ifDefined(this.color || undefined);

    switch (level) {
      case 'none': return html`<span class="${spacingStyles}" style="color: ${colorStyles}"><slot></slot></span>`;
      case '2': return html`<h2 class="${spacingStyles}" style="color: ${colorStyles}"><slot></slot></h2>`;
      case '3': return html`<h3 class="${spacingStyles}" style="color: ${colorStyles}"><slot></slot></h3>`;
      case '4': return html`<h4 class="${spacingStyles}" style="color: ${colorStyles}"><slot></slot></h4>`;
      case '5': return html`<h5 class="${spacingStyles}" style="color: ${colorStyles}"><slot></slot></h5>`;
      case '6': return html`<h6 class="${spacingStyles}" style="color: ${colorStyles}"><slot></slot></h6>`;
      default: return html`<h1 class="${spacingStyles}" style="color: ${colorStyles}"><slot></slot></h1>`;
    }
  }
  // function that renders the HTML and CSS into  the scope of the component

  render() {
    return this.template(this.level);
  }
}
