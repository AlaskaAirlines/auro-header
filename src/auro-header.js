// Copyright (c) 2020 Alaska Airlines. All right reserved. Licensed under the Apache-2.0 license
// See LICENSE in the project root for license information.

// ---------------------------------------------------------------------

import AuroLibraryRuntimeUtils from "@aurodesignsystem/auro-library/scripts/utils/runtimeUtils.mjs";
import { LitElement } from "lit";
import { classMap } from "lit/directives/class-map.js";
import { ifDefined } from "lit/directives/if-defined.js";
import { html as staticHtml, unsafeStatic } from "lit/static-html.js";

// Import touch detection lib
import styleCss from "./styles/style.scss";

/**
 * The auro-header component is a custom element to make using headers with the Auro Design System seamless and easy.
 */

const MAX_LEVEL = 6;

// build the component class
export class AuroHeader extends LitElement {
  constructor() {
    super();

    this.level = 1;
    this.typography = "heading";

    /**
     * @private
     */
    this.runtimeUtils = new AuroLibraryRuntimeUtils();
  }

  // function to define props used within the scope of this component
  static get properties() {
    return {
      /**
       *  Determines the semantic heading level of the HTML element. Options are `1` - `6`.
       */
      level: {
        type: Number,
        reflect: true,
        converter(value) {
          const num = Number(value);
          // Clamp value between 1 and 6, default to 1 if invalid
          if (Number.isNaN(num) || num < 1) {
            return 1;
          }
          if (num > MAX_LEVEL) {
            return MAX_LEVEL;
          }
          return num;
        },
      },

      /**
       * (Deprecated) Determines the visual appearance of the header. Options are `display`, `800`, `700`, `600`, `500`, `400`, `300`.
       * @deprecated
       */
      display: {
        type: String,
        reflect: true,
      },

      /**
       * Determines the visual appearance of the header. Options are `1` - `6`.
       * @default same value as `level`
       */
      visualLevel: {
        type: Number,
        reflect: true,
        converter(value) {
          const num = Number(value);
          // Clamp value between 1 and 6, default to 1 if invalid
          if (Number.isNaN(num) || num < 1) {
            return 1;
          }
          if (num > MAX_LEVEL) {
            return MAX_LEVEL;
          }
          return num;
        },
      },

      /**
       * Determines the font of heading, Options are `heading` or `display`.
       */
      typography: {
        type: String,
        reflect: true,
      },

      /**
       * (Deprecated) Allows user to pass in CSS custom property or direct hex value to change the color of the header.
       * @deprecated
       */
      color: {
        type: String,
        reflect: true,
      },

      /**
       * (Deprecated) Specify the margin(s) to be altered. Options are `top`, `bottom`, or `both`.
       * @deprecated
       */
      margin: {
        type: String,
        reflect: true,
      },

      /**
       * (Deprecated) Specify size of margin adjustment, either `none`, `25`, `50`, `100`, `150`, `200`, `300`, `400`, `600` or `800`.
       * @deprecated
       */
      size: {
        type: String,
        reflect: true,
      },
    };
  }

  static get styles() {
    return [styleCss];
  }

  /**
   * Mapping of display values to their corresponding CSS classes.
   * @private
   */
  static get displayClassMap() {
    return {
      // LEGACY MAP (SHOULD BE REMOVED)
      800: "heading-xl",
      700: "heading-lg",
      600: "heading-md",
      500: "heading-sm",
      400: "heading-xs",
      300: "heading-2xs",

      // NEW MAP WITH TYPOGRAPHY
      heading: {
        1: "heading-xl",
        2: "heading-lg",
        3: "heading-md",
        4: "heading-sm",
        5: "heading-xs",
        6: "heading-2xs",
      },
      display: {
        1: "display-2xl",
        2: "display-xl",
        3: "display-lg",
        4: "display-md",
        5: "display-sm",
        6: "display-xs",
      },
    };
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
    this.runtimeUtils.handleComponentTagRename(this, "auro-header");
  }

  /**
   * Determines if the spacing is to be applied uniform or individual.
   * @deprecated THiS SHOULD BE REMOVED.
   * @private
   * @param {string} size - Accepts string for size definition.
   * @returns {string} - Returns either selectors or function.
   */
  spacingDecision(size) {
    if (this.margin === "both") {
      switch (size) {
        case "none":
          return "util_stackMarginnone--top util_stackMarginnone--bottom";
        case "25":
          return "util_stackMargin25--top util_stackMargin25--bottom";
        case "50":
          return "util_stackMargin50--top util_stackMargin50--bottom";
        case "100":
          return "util_stackMargin100--top util_stackMargin100--bottom";
        case "150":
          return "util_stackMargin150--top util_stackMargin150--bottom";
        case "200":
          return "util_stackMargin200--top util_stackMargin200--bottom";
        case "300":
          return "util_stackMargin300--top util_stackMargin300--bottom";
        case "400":
          return "util_stackMargin400--top util_stackMargin400--bottom";
        case "600":
          return "util_stackMargin600--top util_stackMargin600--bottom";
        case "800":
          return "util_stackMargin800--top util_stackMargin800--bottom";
        default:
          return "";
      }
    }
    return this.spacingApplied(size);
  }

  /**
   * If spacing is individual, return will be single selector based on input.
   * @deprecated THiS SHOULD BE REMOVED.
   * @private
   * @param {string} size - Accepts string for size definition.
   * @returns {string} - Returns selector.
   */
  spacingApplied(size) {
    switch (size) {
      case "none":
        return `util_stackMarginnone--${this.margin}`;
      case "25":
        return `util_stackMargin25--${this.margin}`;
      case "50":
        return `util_stackMargin50--${this.margin}`;
      case "100":
        return `util_stackMargin100--${this.margin}`;
      case "150":
        return `util_stackMargin150--${this.margin}`;
      case "200":
        return `util_stackMargin200--${this.margin}`;
      case "300":
        return `util_stackMargin300--${this.margin}`;
      case "400":
        return `util_stackMargin400--${this.margin}`;
      case "600":
        return `util_stackMarginX600--${this.margin}`;
      case "800":
        return `util_stackMargin800--${this.margin}`;
      default:
        return "";
    }
  }

  /**
   * Creates HTML template for use in render function.
   * @private
   * @param {string} level - Accepts string value.
   * @returns {string} - Returns HTML template.
   */
  template(level) {
    if (!this.visualLevel && !this.display) {
      this.visualLevel = this.level;
    }

    const headingLevel = level || "1";
    // THIS SHOULD BE REMOVED AS MARGIN AND SIZE ARE DEPRECATED.
    const spacingClasses = this.spacingDecision(this.size);

    // Get the CSS class based on typography and display prop
    // THIS SHOULD BE CHANGED NOT TO USE `this.display` AS IT"S DEPRECATED.
    const headingClass = this.visualLevel
      ? AuroHeader.displayClassMap[this.typography][this.visualLevel]
      : AuroHeader.displayClassMap[this.display];

    const classObject = {
      heading: true,
      [headingClass]: true,
    };

    // Add spacing classes to the class object if they exist
    // THIS SHOULD BE REMOVED AS MARGIN AND SIZE ARE DEPRECATED.
    if (spacingClasses) {
      const spacingClassArray = spacingClasses.split(" ");
      spacingClassArray.forEach((cls) => {
        if (cls.trim()) {
          classObject[cls.trim()] = true;
        }
      });
    }

    const headerClasses = classMap(classObject);

    // unsafeStatic dynamically creates tag names at runtime
    const tag = unsafeStatic(`h${headingLevel}`);

    // COLOR SHOULD BE REMOVED AS IT IS DEPRECATED.
    return staticHtml`<${tag} class="${headerClasses}" style="color: ${ifDefined(this.color ? this.color : undefined)}"><slot></slot></${tag}>`;
  }

  // function that renders the HTML and CSS into  the scope of the component
  render() {
    return this.template(this.level);
  }
}
