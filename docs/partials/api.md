<!-- AURO-GENERATED-CONTENT:START (FILE:src=./../docs/api.md) -->
<!-- AURO-GENERATED-CONTENT:END -->

## Basic

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/basic.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>

<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/basic.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

## Property and attribute examples

### Change header styles and sizes

Set the semantic heading level and the visual style of a header separately.

#### Header level (HTML semantics)

Use the `level` attribute to control the semantic heading level (`<h1>` through `<h6>`).

When you don't set `visualLevel`, it uses the value of `level`, including after `level` changes.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=../apiExamples/level.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=../apiExamples/level.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

#### Header style (visual appearance) <a name="visualLevel"></a>

Use the `visualLevel` attribute to control the visual style of the header.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=../apiExamples/visual-level.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=../apiExamples/visual-level.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

#### Typography <a name="typography"></a> to heading CSS class mapping

The `visualLevel` attribute controls the visual style of the header by mapping to specific <a href="https://auro.alaskaair.com/typography/usage" target="_blank">typography classes</a>.

Below is how each `visualLevel` value corresponds to a typography class:

| `visualLevel` | `typography="heading"`    |  `typography="display"`  |
|-----------------|---------------|---------------|
| `1`           | `heading-xl` | `display-2xl` |
| `2`           | `heading-lg`  | `display-xl`  |
| `3`           | `heading-md`  | `display-lg`   |
| `4`           | `heading-sm`  | `display-md`   |
| `5`           | `heading-xs`  | `display-sm`   |
| `6`           | `heading-2xs` | `display-xs`   |

These classes apply consistent typography styles, including font size, line height, font weight, and more, ensuring uniform header presentation across components.

## Common usage patterns

### Additional header examples

See more examples that combine `level` and `visualLevel`.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=../apiExamples/additional-examples.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=../apiExamples/additional-examples.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

### Adjust margins

The header has no margin of its own. To change the space around it, add a `margin` style to the element.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=../apiExamples/margins.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=../apiExamples/margins.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

### Color inheritance

To use a color from your page styles, wrap the header in a `div` or `span` that sets `color`. The header inherits it.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=../apiExamples/color-inheritance.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=../apiExamples/color-inheritance.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>
