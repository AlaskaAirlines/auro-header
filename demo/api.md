<!-- AURO-GENERATED-CONTENT:START (FILE:src=../docs/api.md) -->
<!-- The below content is automatically added from ../docs/api.md -->

# auro-header

The auro-header component is a custom element to make using headers with the Auro Design System seamless and easy.

## Attributes

| Attribute         | Type      | Description                                  |
|-------------------|-----------|----------------------------------------------|
| `no-margin-block` | `Boolean` | if declared, margin-block will be set to `0` |

## Properties

| Property  | Attribute | Type     | Default   | Description                                      |
|-----------|-----------|----------|-----------|--------------------------------------------------|
| [color](#color)   | `color`   | `String` |           | Allows user to pass in CSS custom property or direct hex value to change the color of the header |
| [display](#display) | `display` | `String` | "display" | Determines the visual appearance of the header. Options are `display`, `800`, `700`, `600`, `500`, `400`, `300`. |
| [level](#level)   | `level`   | `String` |           | Determines the semantic heading level of the HTML element. Options are `1` - `6` |
| [margin](#margin)  | `margin`  | `String` |           | Specify the margin(s) to be altered. Options are `top`, `bottom`, or `both`. |
| [size](#size)    | `size`    | `String` |           | Specify size of margin adjustment, either `none`, `25`, `50`, `100`, `150`, `200`, `300`, `400`, `600` or `800`. |
<!-- AURO-GENERATED-CONTENT:END -->

## API Examples

### Basic

The `auro-header` defaults to an `<h1>` element with the `display` visual appearance style.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=../apiExamples/basic.html) -->
  <!-- The below content is automatically added from ../apiExamples/basic.html -->
  <auro-header>Hello World!</auro-header>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=../apiExamples/basic.html) -->
<!-- The below code snippet is automatically added from ../apiExamples/basic.html -->

```html
<auro-header>Hello World!</auro-header>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

### Changing Header Styles and Sizes

The `auro-header` component allows for flexible customization of both HTML semantics and visual appearance styles.

#### Header Level (HTML Semantics)

Use the `level` attribute to control the semantic heading level (`<h1>` through `<h6>`) without affecting its visual style.

**Note**: Changing the `level` only affects the underlying HTML tag (e.g., `<h3>`). It does not change the visual style of the header. To change the appearance, use the `display` attribute.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=../apiExamples/level.html) -->
  <!-- The below content is automatically added from ../apiExamples/level.html -->
  <auro-header level="3">Hello World!</auro-header>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=../apiExamples/level.html) -->
<!-- The below code snippet is automatically added from ../apiExamples/level.html -->

```html
<auro-header level="3">Hello World!</auro-header>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

#### Header Style (Visual Appearance)

Use the `display` attribute to control the visual style of the header.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=../apiExamples/display.html) -->
  <!-- The below content is automatically added from ../apiExamples/display.html -->
  <auro-header display="800">800 - Extra large heading</auro-header>
  <auro-header display="700">700 - Large heading</auro-header>
  <auro-header display="600">600 - Medium heading</auro-header>
  <auro-header display="500">500 - Small heading</auro-header>
  <auro-header display="400">400 - Extra small heading</auro-header>
  <auro-header display="300">300 - 2x small heading</auro-header>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=../apiExamples/display.html) -->
<!-- The below code snippet is automatically added from ../apiExamples/display.html -->

```html
<auro-header display="800">800 - Extra large heading</auro-header>
<auro-header display="700">700 - Large heading</auro-header>
<auro-header display="600">600 - Medium heading</auro-header>
<auro-header display="500">500 - Small heading</auro-header>
<auro-header display="400">400 - Extra small heading</auro-header>
<auro-header display="300">300 - 2x small heading</auro-header>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

##### Display to Heading CSS Class Mapping

The `display` attribute controls the visual style of the header by mapping to specific type heading classes.

Below is how each `display` value corresponds to a heading class:

| [display](#display) Value | CSS Class     |
|-----------------|---------------|
| [display](#display) (default)      | `heading-xl`  |
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
  <!-- The below content is automatically added from ../apiExamples/additionalExamples.html -->
  <auro-header level="2" display="700">Hello World!</auro-header>
  <auro-header level="2" display="600">Hello World!</auro-header>
  <auro-header level="3" display="500">Hello World!</auro-header>
  <auro-header level="5" display="400">Hello World!</auro-header>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=../apiExamples/additionalExamples.html) -->
<!-- The below code snippet is automatically added from ../apiExamples/additionalExamples.html -->

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
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=../apiExamples/margins.html) -->
  <!-- The below content is automatically added from ../apiExamples/margins.html -->
  <auro-header level="2" display="500" margin="bottom" size="50">Hello World!</auro-header>
  <ol>
    <li>... thing</li>
    <li>thing ...</li>
  </ol>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=../apiExamples/margins.html) -->
<!-- The below code snippet is automatically added from ../apiExamples/margins.html -->

```html
<auro-header level="2" display="500" margin="bottom" size="50">Hello World!</auro-header>
<ol>
  <li>... thing</li>
  <li>thing ...</li>
</ol>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>
The following example shows how you can update both margins to use the 400 size setting.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=../apiExamples/margins2.html) -->
  <!-- The below content is automatically added from ../apiExamples/margins2.html -->
  <auro-header level="2" display="500" margin="both" size="400">Hello World!</auro-header>
  <ol>
    <li>... thing</li>
    <li>thing ...</li>
  </ol>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=../apiExamples/margins2.html) -->
<!-- The below code snippet is automatically added from ../apiExamples/margins2.html -->

```html
<auro-header level="2" display="500" margin="both" size="400">Hello World!</auro-header>
<ol>
  <li>... thing</li>
  <li>thing ...</li>
</ol>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

### Color Inheritance

If there is a CSS selector that has the color definition you want to use with the header, simply wrap the header in a `div` or `span` and the auro-header component will inherit the color.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=../apiExamples/colorInheritance.html) -->
  <!-- The below content is automatically added from ../apiExamples/colorInheritance.html -->
  <div style="color: var(--ds-color-alert-error-default)">
    <auro-header level="3" display="700">There has been an error</auro-header>
  </div>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=../apiExamples/colorInheritance.html) -->
<!-- The below code snippet is automatically added from ../apiExamples/colorInheritance.html -->

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
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=../apiExamples/directColor.html) -->
  <!-- The below content is automatically added from ../apiExamples/directColor.html -->
  <auro-header level="3" display="700" color="var(--ds-color-border-active-default)">
    On the journey together
  </auro-header>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=../apiExamples/directColor.html) -->
<!-- The below code snippet is automatically added from ../apiExamples/directColor.html -->

```html
<auro-header level="3" display="700" color="var(--ds-color-border-active-default)">
  On the journey together
</auro-header>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>
