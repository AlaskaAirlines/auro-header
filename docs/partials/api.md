<!-- AURO-GENERATED-CONTENT:START (FILE:src=../docs/api.md) -->
<!-- AURO-GENERATED-CONTENT:END -->

## API Examples

### Basic

The `auro-header` defaults to an `<h1>` element with the `display` visual appearance style.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=../apiExamples/basic.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=../apiExamples/basic.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

### Changing Header Styles and Sizes

The `auro-header` component allows for flexible customization of both HTML semantics and visual appearance styles.

#### Header Level (HTML Semantics)

Use the `level` attribute to control the semantic heading level (`<h1>` through `<h6>`) without affecting its visual style.

**Note**: Changing the `level` only affects the underlying HTML tag (e.g., `<h3>`). It does not change the visual style of the header. To change the appearance, use the `display` attribute.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=../apiExamples/level.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=../apiExamples/level.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

#### Header Style (Visual Appearance)

Use the `display` attribute to control the visual style of the header.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=../apiExamples/display.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=../apiExamples/display.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

##### Display to Heading CSS Class Mapping

The `display` attribute controls the visual style of the header by mapping to specific type heading classes.

Below is how each `display` value corresponds to a heading class:

| `display` Value | CSS Class     |
|-----------------|---------------|
| `display` (default)      | `heading-xl`  |
| `800`           | `heading-xl`  |
| `700`           | `heading-lg`  |
| `600`           | `heading-md`  |
| `500`           | `heading-sm`  |
| `400`           | `heading-xs`  |
| `300`           | `heading-2xs` |

These classes apply consistent typography styles, including font size, line height, font weight, and more, ensuring uniform header presentation across components.

### Additional Header Examples

Additional examples with various header `level` and `display` options.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=../apiExamples/additionalExamples.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=../apiExamples/additionalExamples.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

### Adjust Margins

In some cases the margin between elements may need to be adjusted. To do this, the `auro-header` component supports adjusting either the `top`, `bottom` or `both` margins. This coupled with the `size` prop, developers have a [full range of options](https://auro.alaskaair.com/components/auro/header/api).

The following example shows how you can update the `bottom` margin to use the `50` size setting.

Also note the use of the  util_stackMarginNone--top  utility selector on the ol from [Web Core Style Sheets](https://alaskaairlines.github.io/WebCoreStyleSheets/#utility-layout-mixin-auro_spacing).

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=../apiExamples/margins.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=../apiExamples/margins.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

The following example shows how you can update both margins to use the 400 size setting.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=../apiExamples/margins2.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=../apiExamples/margins2.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

### Color Inheritance

If there is a CSS selector that has the color definition you want to use with the header, simply wrap the header in a `div` or `span` and the auro-header component will inherit the color.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=../apiExamples/colorInheritance.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=../apiExamples/colorInheritance.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

### Direct Color Use

If it's preferred not to wrap the header component in another element, use the `color` property to set the color value directly on the header element.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=../apiExamples/directColor.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=../apiExamples/directColor.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>
