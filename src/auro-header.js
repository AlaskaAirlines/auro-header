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

const MAX_LEVEL = 6;

/**
 * Renders a page or content heading with Auro typography, so you set the heading level and the visual style separately.
 *
 * **Key capabilities**
 *
 * - **Semantic level**: Sets the heading element, from `<h1>` to `<h6>`, with `level`.
 * - **Visual style**: Changes how the heading looks without changing its level, with `visualLevel`.
 * - **Display font**: Switches from heading styles to display styles with `typography="display"`.
 *
 * **Example**
 *
 * ```html
 * <auro-header level="2" visualLevel="4">Hello World!</auro-header>
 * ```
 * @summary An accessible heading with a separate semantic level and visual style, using Auro typography.
 * @customElement auro-header
 */
export class AuroHeader extends LitElement {
  constructor() {
    super();

    this._initializeDefaults();
  }

  _initializeDefaults() {
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
       * Deprecated: Use a parent element's CSS `color` instead; the header inherits it.
       * Sets the color of the header text with any CSS color value, such as a hex value or a custom property.
       * @deprecated Use a parent element's CSS `color` instead; the header inherits it.
       */
      color: {
        type: String,
        reflect: true
      },

      /**
       * Deprecated: Use `visualLevel` and `typography` instead.
       * Sets the visual style when `visualLevel` isn't set, using `800`, `700`, `600`, `500`, `400`, or `300`. The value `display` does not currently work.
       * @deprecated Use `visualLevel` and `typography` instead.
       */
      display: {
        type: String,
        reflect: true
      },

      /**
       * Sets the semantic heading level, from `1` for `<h1>` to `6` for `<h6>`. Use the level that fits the page outline, and use `visualLevel` to change how the header looks.
       * @default 1
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
        }
      },

      /**
       * Deprecated: Use a CSS `margin` style on the element instead.
       * Sets which side `size` adds space to: `top`, `bottom`, or `both`.
       * @deprecated Use a CSS `margin` style on the element instead.
       */
      margin: {
        type: String,
        reflect: true
      },

      /**
       * Deprecated: Use a CSS `margin` style on the element instead.
       * Sets how much space `margin` adds, using `none`, `25`, `50`, `100`, `150`, `200`, `300`, `400`, `600`, or `800`. The value `600` does not currently work when `margin` is `top` or `bottom`.
       * @deprecated Use a CSS `margin` style on the element instead.
       */
      size: {
        type: String,
        reflect: true
      },

      /**
       * Sets the typography family of the header: `heading` for heading styles or `display` for display styles. The `visualLevel` picks the size within that family.
       * @default heading
       */
      typography: {
        type: String,
        reflect: true
      },

      /**
       * Sets the visual style of the header, from `1` (largest) to `6` (smallest), independent of its heading level. Uses the value of `level` when not set.
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
   * Registers the element with the browser under a tag name.
   * @param {string} [name="auro-header"] - The tag name to register the element under.
   *
   * @example
   * AuroHeader.register("custom-header") // Registers the element as <custom-header>.
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
   * Gets the margin class names for the size, on both sides or on one side.
   * @deprecated Remove this with the deprecated `margin` and `size` properties.
   * @private
   * @param {string} size - The margin size, such as `none` or `25`.
   * @returns {string} - The margin class names, or an empty string when the size isn't recognized.
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
   * Gets the margin class name for the size on the side set by `margin`.
   * @deprecated Remove this with the deprecated `margin` and `size` properties.
   * @private
   * @param {string} size - The margin size, such as `none` or `25`.
   * @returns {string} - The margin class name, or an empty string when the size isn't recognized.
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
   * Creates the heading template that `render` uses.
   * @private
   * @param {number|string} [level] - The heading level, from `1` to `6`. Uses `1` when not set.
   * @returns {import("lit").TemplateResult} - The heading template.
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
