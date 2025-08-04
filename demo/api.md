<!-- AURO-GENERATED-CONTENT:START (FILE:src=../docs/api.md) -->
<!-- The below content is automatically added from ../docs/api.md -->

# auro-header

The auro-header component is a custom element to make using headers with the Auro Design System seamless and easy.

## Properties

| Property      | Attribute     | Type     | Default                 | Description                                      |
|---------------|---------------|----------|-------------------------|--------------------------------------------------|
| [color](#color)       | `color`       | `string` |                         | (Deprecated) Allows user to pass in CSS custom property or direct hex value to change the color of the header. |
| [display](#display)     | `display`     | `string` |                         | (Deprecated) Determines the visual appearance of the header. Options are `display`, `800`, `700`, `600`, `500`, `400`, `300`. |
| [level](#level)       | `level`       | `number` | 1                       | Determines the semantic heading level of the HTML element. Options are `1` - `6`. |
| [margin](#margin)      | `margin`      | `string` |                         | (Deprecated) Specify the margin(s) to be altered. Options are `top`, `bottom`, or `both`. |
| [size](#size)        | `size`        | `string` |                         | (Deprecated) Specify size of margin adjustment, either `none`, `25`, `50`, `100`, `150`, `200`, `300`, `400`, `600` or `800`. |
| [typography](#typography)  | `typography`  | `string` | "heading"               | Determines the font of heading, Options are `heading` or `display`. |
| [visualLevel](#visualLevel) | `visualLevel` | `number` | "same value as `level`" | Determines the visual appearance of the header. Options are `1` - `6`. |
<!-- AURO-GENERATED-CONTENT:END -->

## API Examples

### Basic

The `auro-header` defaults to an `<h1>` element.

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

Use the `level` attribute to control the semantic heading level (`<h1>` through `<h6>`).

If `visualLevel` is not specified, `visualLevel` will default to the same value as `level`.

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

#### Header Style (Visual Appearance) <a name="visualLevel"></a>
Use the `visualLevel` attribute to control the visual style of the header.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=../apiExamples/visualLevel.html) -->
  <!-- The below content is automatically added from ../apiExamples/visualLevel.html -->
  <table>
    <thead>
      <tr>
        <th>visualLevel</th>
        <th>typography="heading"</th>
        <th>typography="display"</th>
      </tr>
    </thead>
    <tr>
      <td>
        1
      </td>
      <td>
        <auro-header visualLevel="1">Extra large heading</auro-header>
      </td>
      <td>
        <auro-header visualLevel="1" typography="display">2 Extra large display</auro-header>
      </td>
    </tr>
    <tr>
      <td>
        2
      </td>
      <td>
        <auro-header visualLevel="2">Large heading</auro-header>
      </td>
      <td>
        <auro-header visualLevel="2" typography="display">Extra large display</auro-header>
      </td>
    </tr>
    <tr>
      <td>
        3
      </td>
      <td>
        <auro-header visualLevel="3">Medium heading</auro-header>
      </td>
      <td>
        <auro-header visualLevel="3" typography="display">Large display</auro-header>
      </td>
    </tr>
    <tr>
      <td>
        4
      </td>
      <td>
        <auro-header visualLevel="4">Small heading</auro-header>
      </td>
      <td>
        <auro-header visualLevel="4" typography="display">Medium display</auro-header>
      </td>
    </tr>
    <tr>
      <td>
        5
      </td>
      <td>
        <auro-header visualLevel="5">Extra small heading</auro-header>
      </td>
      <td>
        <auro-header visualLevel="5" typography="display">Small display</auro-header>
      </td>
    </tr>
    <tr>
      <td>
        6
      </td>
      <td>
        <auro-header visualLevel="6">2 Extra small heading</auro-header>
      </td>
      <td>
        <auro-header visualLevel="6" typography="display">Extra small display</auro-header>
      </td>
    </tr>
  </table>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=../apiExamples/visualLevel.html) -->
<!-- The below code snippet is automatically added from ../apiExamples/visualLevel.html -->

```html
<table>
  <thead>
    <tr>
      <th>visualLevel</th>
      <th>typography="heading"</th>
      <th>typography="display"</th>
    </tr>
  </thead>
  <tr>
    <td>
      1
    </td>
    <td>
      <auro-header visualLevel="1">Extra large heading</auro-header>
    </td>
    <td>
      <auro-header visualLevel="1" typography="display">2 Extra large display</auro-header>
    </td>
  </tr>
  <tr>
    <td>
      2
    </td>
    <td>
      <auro-header visualLevel="2">Large heading</auro-header>
    </td>
    <td>
      <auro-header visualLevel="2" typography="display">Extra large display</auro-header>
    </td>
  </tr>
  <tr>
    <td>
      3
    </td>
    <td>
      <auro-header visualLevel="3">Medium heading</auro-header>
    </td>
    <td>
      <auro-header visualLevel="3" typography="display">Large display</auro-header>
    </td>
  </tr>
  <tr>
    <td>
      4
    </td>
    <td>
      <auro-header visualLevel="4">Small heading</auro-header>
    </td>
    <td>
      <auro-header visualLevel="4" typography="display">Medium display</auro-header>
    </td>
  </tr>
  <tr>
    <td>
      5
    </td>
    <td>
      <auro-header visualLevel="5">Extra small heading</auro-header>
    </td>
    <td>
      <auro-header visualLevel="5" typography="display">Small display</auro-header>
    </td>
  </tr>
  <tr>
    <td>
      6
    </td>
    <td>
      <auro-header visualLevel="6">2 Extra small heading</auro-header>
    </td>
    <td>
      <auro-header visualLevel="6" typography="display">Extra small display</auro-header>
    </td>
  </tr>
</table>
```
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
  <!-- The below content is automatically added from ../apiExamples/additionalExamples.html -->
  <auro-header level="2" visualLevel="1">Hello World!</auro-header>
  <auro-header level="2" visualLevel="2">Hello World!</auro-header>
  <auro-header level="3" visualLevel="3">Hello World!</auro-header>
  <auro-header level="5" visualLevel="4">Hello World!</auro-header>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=../apiExamples/additionalExamples.html) -->
<!-- The below code snippet is automatically added from ../apiExamples/additionalExamples.html -->

```html
<auro-header level="2" visualLevel="1">Hello World!</auro-header>
<auro-header level="2" visualLevel="2">Hello World!</auro-header>
<auro-header level="3" visualLevel="3">Hello World!</auro-header>
<auro-header level="5" visualLevel="4">Hello World!</auro-header>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

### Adjust Margins

In some cases the margin between elements may need to be adjusted. To do this, add margin using css style.
<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=../apiExamples/margins.html) -->
  <!-- The below content is automatically added from ../apiExamples/margins.html -->
  <auro-header level="2" visualLevel="4" style="margin-bottom: var(--ds-size-400)">Hello World!</auro-header>
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
<auro-header level="2" visualLevel="4" style="margin-bottom: var(--ds-size-400)">Hello World!</auro-header>
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
    <auro-header level="3" visualLevel="2">There has been an error</auro-header>
  </div>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=../apiExamples/colorInheritance.html) -->
<!-- The below code snippet is automatically added from ../apiExamples/colorInheritance.html -->

```html
<div style="color: var(--ds-color-alert-error-default)">
  <auro-header level="3" visualLevel="2">There has been an error</auro-header>
</div>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>
