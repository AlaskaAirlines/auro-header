<!-- AURO-GENERATED-CONTENT:START (FILE:src=./../api.md) -->
<!-- The below content is automatically added from ./../api.md -->

# auro-header

The auro-header component is a custom element to make using headers with the Auro Design System seamless and easy.

## Attributes

| Attribute | Type      | Description                                      |
|-----------|-----------|--------------------------------------------------|
| [fixed](#fixed)   | `Boolean` | Uses px values instead of rem                    |
| [type](#type)    | `String`  | **DEPRECATED** Option, `px`. Legacy option for converting REMs to PX. Use `fixed` feature. |

## Properties

| Property  | Attribute | Type     | Default   | Description                                      |
|-----------|-----------|----------|-----------|--------------------------------------------------|
| [color](#color)   | `color`   | `String` |           | Allows user to pass in CSS custom property or direct hex value to change the color of the header |
| [display](#display) | `display` | `String` | "display" | Determines presentation of header. Options are `display`, `800`, `700`, `600`, `500`, `400`, `300`. |
| [level](#level)   | `level`   | `String` |           | Determines heading level for HTML element. Options are `1` - `6` |
| [margin](#margin)  | `margin`  | `String` |           | Specify the margin(s) to be altered. Options are `top`, `bottom`, or `both`. |
| [size](#size)    | `size`    | `String` |           | Specify size of margin adjustment, either `none`, `25`, `50`, `100`, `150`, `200`, `300`, `400`, `600` or `800`. **DEPRECATED** the `xxxs` - `xxxl` options. |
<!-- AURO-GENERATED-CONTENT:END -->

## API Examples

### Basic

The auro-header will default to the h1 element with the `header--display` style.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/basic.html) -->
  <!-- The below content is automatically added from ./../../apiExamples/basic.html -->
  <auro-header>Hello World!</auro-header>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/basic.html) -->
<!-- The below code snippet is automatically added from ./../../apiExamples/basic.html -->

```html
<auro-header>Hello World!</auro-header>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

### Changing Header Styles

#### Changing Header Size

Use the `level` attribute to change the size of the `auro-header`. 

**Note**: Changing the header level does not change the header style. This example will output an h3 header element with the default header--display style.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/level.html) -->
  <!-- The below content is automatically added from ./../../apiExamples/level.html -->
  <auro-header level="3">Hello World!</auro-header>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/level.html) -->
<!-- The below code snippet is automatically added from ./../../apiExamples/level.html -->

```html
<auro-header level="3">Hello World!</auro-header>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

#### Changing Header Font Weight

Use the `display` attribute to change the font weight of the `auro-header`.

**Note**: Changing the header style does not change the size of the header. This example will output an h1 header element with the `header--display` style.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/display.html) -->
  <!-- The below content is automatically added from ./../../apiExamples/display.html -->
  <auro-header display="800">Hello World!</auro-header>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/display.html) -->
<!-- The below code snippet is automatically added from ./../../apiExamples/display.html -->

```html
<auro-header display="800">Hello World!</auro-header>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

### Additional Header Examples

Additional examples with various header `level` and `display` options.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/additionalExamples.html) -->
  <!-- The below content is automatically added from ./../../apiExamples/additionalExamples.html -->
  <auro-header level="2" display="700">Hello World!</auro-header>
  <auro-header level="2" display="600">Hello World!</auro-header>
  <auro-header level="3" display="500">Hello World!</auro-header>
  <auro-header level="5" display="400">Hello World!</auro-header>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/additionalExamples.html) -->
<!-- The below code snippet is automatically added from ./../../apiExamples/additionalExamples.html -->

```html
<auro-header level="2" display="700">Hello World!</auro-header>
<auro-header level="2" display="600">Hello World!</auro-header>
<auro-header level="3" display="500">Hello World!</auro-header>
<auro-header level="5" display="400">Hello World!</auro-header>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

### Adjust Margins

In some cases the margin between elements may need to be adjusted. To do this, the `auro-header` component supports adjusting either the `top`, `bottom` or `both` margins. This coupled with the `size` prop, developers have a [full range of options](https://auro.alaskaair.com/components/auro/header/api).

The following example shows how you can update the `bottom` margin to use the `50` size setting.

Also note the use of the  util_stackMarginNone--top  utility selector on the ol from [Web Core Style Sheets](https://alaskaairlines.github.io/WebCoreStyleSheets/#utility-layout-mixin-auro_spacing).

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/margins.html) -->
  <!-- The below content is automatically added from ./../../apiExamples/margins.html -->
  <auro-header level="2" display="500" margin="bottom" size="50">Hello World!</auro-header>
  <ol className="util_stackMarginNone--top">
    <li>... thing</li>
    <li>thing ...</li>
  </ol>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/margins.html) -->
<!-- The below code snippet is automatically added from ./../../apiExamples/margins.html -->

```html
<auro-header level="2" display="500" margin="bottom" size="50">Hello World!</auro-header>
<ol className="util_stackMarginNone--top">
  <li>... thing</li>
  <li>thing ...</li>
</ol>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>
The following example shows how you can update both margins to use the 400 size setting.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/margins2.html) -->
  <!-- The below content is automatically added from ./../../apiExamples/margins2.html -->
  <auro-header level="2" display="500" margin="both" size="400">Hello World!</auro-header>
  <ol className="util_stackMarginNone--top">
    <li>... thing</li>
    <li>thing ...</li>
  </ol>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/margins2.html) -->
<!-- The below code snippet is automatically added from ./../../apiExamples/margins2.html -->

```html
<auro-header level="2" display="500" margin="both" size="400">Hello World!</auro-header>
<ol className="util_stackMarginNone--top">
  <li>... thing</li>
  <li>thing ...</li>
</ol>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

### Color Inheritance

If there is a CSS selector that has the color definition you want to use with the header, simply wrap the header in a `div` or `span` and the auro-header component will inherit the color.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/colorInheritance.html) -->
  <!-- The below content is automatically added from ./../../apiExamples/colorInheritance.html -->
  <div style="color: var(--ds-color-alert-error-default)">
    <auro-header level="3" display="700">There has been an error</auro-header>
  </div>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/colorInheritance.html) -->
<!-- The below code snippet is automatically added from ./../../apiExamples/colorInheritance.html -->

```html
<div style="color: var(--ds-color-alert-error-default)">
  <auro-header level="3" display="700">There has been an error</auro-header>
</div>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

### Direct Color Use

If it's preferred not to wrap the header component in another element, use the `color` property to set the color value directly on the header element.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/directColor.html) -->
  <!-- The below content is automatically added from ./../../apiExamples/directColor.html -->
  <auro-header level="3" display="700" color="var(--ds-color-border-active-default)">
    On the journey together
  </auro-header>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/directColor.html) -->
<!-- The below code snippet is automatically added from ./../../apiExamples/directColor.html -->

```html
<auro-header level="3" display="700" color="var(--ds-color-border-active-default)">
  On the journey together
</auro-header>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

### Classic Environment Support

One of the challenges of using a design system is coping with legacy CSS that surrounds the new component. While web components are encapsulated, things like `font-size` will pierce the shadow DOM. To help combat this, the `auro-header` component supports a fixed attribute. Setting `fixed` will over-ride the component's dependency on REM values and use pixel values instead.

This feature should only to be used within environments where the REM values cannot be used.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/fixed.html) -->
  <!-- The below content is automatically added from ./../../apiExamples/fixed.html -->
  <auro-header level="3" display="700" fixed>
    On the journey together
  </auro-header>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/fixed.html) -->
<!-- The below code snippet is automatically added from ./../../apiExamples/fixed.html -->

```html
<auro-header level="3" display="700" fixed>
  On the journey together
</auro-header>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>
