<!-- AURO-GENERATED-CONTENT:START (FILE:src=../docs/api.md) -->
<!-- AURO-GENERATED-CONTENT:END -->

## API Examples

### Basic

The auro-header will default to the h1 element with the `header--display` style.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=../apiExamples/basic.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=../apiExamples/basic.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

### Changing Header Styles

#### Changing Header Size

Use the `level` attribute to change the size of the `auro-header`. 

**Note**: Changing the header level does not change the header style. This example will output an h3 header element with the default header--display style.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=../apiExamples/level.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=../apiExamples/level.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

#### Changing Header Font Weight

Use the `display` attribute to change the font weight of the `auro-header`.

**Note**: Changing the header style does not change the size of the header. This example will output an h1 header element with the `header--display` style.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=../apiExamples/display.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=../apiExamples/display.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

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

### Classic Environment Support

One of the challenges of using a design system is coping with legacy CSS that surrounds the new component. While web components are encapsulated, things like `font-size` will pierce the shadow DOM. To help combat this, the `auro-header` component supports a fixed attribute. Setting `fixed` will over-ride the component's dependency on REM values and use pixel values instead.

This feature should only to be used within environments where the REM values cannot be used.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=../apiExamples/fixed.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=../apiExamples/fixed.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>
