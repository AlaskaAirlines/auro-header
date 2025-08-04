<!-- AURO-GENERATED-CONTENT:START (FILE:src=../docs/api.md) -->
<!-- AURO-GENERATED-CONTENT:END -->

## API Examples

### Basic

The `auro-header` defaults to an `<h1>` element.

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

Use the `level` attribute to control the semantic heading level (`<h1>` through `<h6>`).

If `visualLevel` is not specified, `visualLevel` will default to the same value as `level`.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=../apiExamples/level.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=../apiExamples/level.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

#### Header Style (Visual Appearance) <a name="visualLevel"></a>

Use the `visualLevel` attribute to control the visual style of the header.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=../apiExamples/visualLevel.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=../apiExamples/visualLevel.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

#### Typography <a name="typography"></a> to Heading CSS Class Mapping

The `visualLevel` attribute controls the visual style of the header by mapping to specific <a href="https://auro.alaskaair.com/typography/usage" target="_blank">typography classes</a>.

Below is how each `visualLevel` value corresponds to a typography class:

| visualLevel | `typography="heading"`    |  `typography="display"`  |
|-----------------|---------------|---------------|
| `1`           | `heading-xl` | `display-2xl` |
| `2`           | `heading-lg`  | `display-xl`  |
| `3`           | `heading-md`  | `display-lg`   |
| `4`           | `heading-sm`  | `display-md`   |
| `5`           | `heading-xs`  | `display-sm`   |
| `6`           | `heading-2xs` | `display-xs`   |

These classes apply consistent typography styles, including font size, line height, font weight, and more, ensuring uniform header presentation across components.

### Additional Header Examples

Additional examples with various header `level` and `visualLevel` options.

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

In some cases the margin between elements may need to be adjusted. To do this, add margin using css style.
<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=../apiExamples/margins.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=../apiExamples/margins.html) -->
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
