<!-- AURO-GENERATED-CONTENT:START (FILE:src=./../docs/api.md) -->
<!-- The below content is automatically added from ./../docs/api.md -->

# auro-header

Renders a page or content heading with Auro typography, so you set the heading level and the visual style separately.

**Key capabilities**

- **Semantic level**: Sets the heading element, from `<h1>` to `<h6>`, with `level`.
- **Visual style**: Changes how the heading looks without changing its level, with `visualLevel`.
- **Display font**: Switches from heading styles to display styles with `typography="display"`.

**Example**

<pre class="language-html"><code class="language-html">&lt;auro-header level="2" visualLevel="4"&gt;Hello World!&lt;/auro-header&gt;</code></pre>

### Properties and attributes

| Properties  | Attributes  | Modifiers | Type   | Default   | Description                                                                                                                                                                                                                                                  |
| ----------- | ----------- | --------- | ------ | --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| level       | level       |           | number | `1`       | Sets the semantic heading level, from `1` for `<h1>` to `6` for `<h6>`. Use the level that fits the page outline, and use `visualLevel` to change how the header looks.                                                                                      |
| typography  | typography  |           | string | `heading` | Sets the typography family of the header: `heading` for heading styles or `display` for display styles. The `visualLevel` picks the size within that family.                                                                                                 |
| visualLevel | visualLevel |           | number |           | Sets the visual style of the header, from `1` (largest) to `6` (smallest), independent of its heading level. Uses the value of `level` when not set, unless the deprecated `display` is set.                                                                 |
| color       | color       |           | string |           | Deprecated: Use a parent element's CSS `color` instead; the header inherits it.<br>Sets the color of the header text with any CSS color value, such as a hex value or a custom property.                                                                     |
| display     | display     |           | string |           | Deprecated: Use `visualLevel` and `typography` instead.<br>Sets the visual style when `visualLevel` isn't set, using `800`, `700`, `600`, `500`, `400`, or `300`. The value `display` does not currently work.                                               |
| margin      | margin      |           | string |           | Deprecated: Use a CSS `margin` style on the element instead.<br>Sets which side `size` adds space to: `top`, `bottom`, or `both`.                                                                                                                            |
| size        | size        |           | string |           | Deprecated: Use a CSS `margin` style on the element instead.<br>Sets how much space `margin` adds, using `none`, `25`, `50`, `100`, `150`, `200`, `300`, `400`, `600`, or `800`. The value `600` does not currently work when `margin` is `top` or `bottom`. |

### Methods

| Name     | Parameters                                                    | Return | Description                                              |
| -------- | ------------------------------------------------------------- | ------ | -------------------------------------------------------- |
| register | `name` (string) - The tag name to register the element under. |        | Registers the element with the browser under a tag name. |
<!-- AURO-GENERATED-CONTENT:END -->

## Basic

<div class="exampleWrapper">
<!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/basic.html) -->
<!-- The below content is automatically added from ./../apiExamples/basic.html -->
<auro-header>Hello World!</auro-header>
<!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
<span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/basic.html) -->
<!-- The below code snippet is automatically added from ./../apiExamples/basic.html -->

<pre class="language-html"><code class="language-html">&lt;auro-header&gt;Hello World!&lt;/auro-header&gt;</code></pre>
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
<!-- The below content is automatically added from ../apiExamples/level.html -->
<auro-header level="3">Hello World!</auro-header>
<!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
<span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=../apiExamples/level.html) -->
<!-- The below code snippet is automatically added from ../apiExamples/level.html -->

<pre class="language-html"><code class="language-html">&lt;auro-header level="3"&gt;Hello World!&lt;/auro-header&gt;</code></pre>
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

#### Header style (visual appearance) <a name="visualLevel"></a>
Use the `visualLevel` attribute to control the visual style of the header.

<div class="exampleWrapper">
<!-- AURO-GENERATED-CONTENT:START (FILE:src=../apiExamples/visual-level.html) -->
<!-- The below content is automatically added from ../apiExamples/visual-level.html -->
<table>
<thead>
<tr>
<th><code>visualLevel</code></th>
<th><code>typography="heading"</code></th>
<th><code>typography="display"</code></th>
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
<auro-header visualLevel="1" typography="display">Double extra large display</auro-header>
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
<auro-header visualLevel="6">Double extra small heading</auro-header>
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
<!-- AURO-GENERATED-CONTENT:START (CODE:src=../apiExamples/visual-level.html) -->
<!-- The below code snippet is automatically added from ../apiExamples/visual-level.html -->

<pre class="language-html"><code class="language-html">&lt;table&gt;
  &lt;thead&gt;
    &lt;tr&gt;
      &lt;th&gt;&lt;code&gt;visualLevel&lt;/code&gt;&lt;/th&gt;
      &lt;th&gt;&lt;code&gt;typography="heading"&lt;/code&gt;&lt;/th&gt;
      &lt;th&gt;&lt;code&gt;typography="display"&lt;/code&gt;&lt;/th&gt;
    &lt;/tr&gt;
  &lt;/thead&gt;
  &lt;tr&gt;
    &lt;td&gt;
      1
    &lt;/td&gt;
    &lt;td&gt;
      &lt;auro-header visualLevel="1"&gt;Extra large heading&lt;/auro-header&gt;
    &lt;/td&gt;
    &lt;td&gt;
      &lt;auro-header visualLevel="1" typography="display"&gt;Double extra large display&lt;/auro-header&gt;
    &lt;/td&gt;
  &lt;/tr&gt;
  &lt;tr&gt;
    &lt;td&gt;
      2
    &lt;/td&gt;
    &lt;td&gt;
      &lt;auro-header visualLevel="2"&gt;Large heading&lt;/auro-header&gt;
    &lt;/td&gt;
    &lt;td&gt;
      &lt;auro-header visualLevel="2" typography="display"&gt;Extra large display&lt;/auro-header&gt;
    &lt;/td&gt;
  &lt;/tr&gt;
  &lt;tr&gt;
    &lt;td&gt;
      3
    &lt;/td&gt;
    &lt;td&gt;
      &lt;auro-header visualLevel="3"&gt;Medium heading&lt;/auro-header&gt;
    &lt;/td&gt;
    &lt;td&gt;
      &lt;auro-header visualLevel="3" typography="display"&gt;Large display&lt;/auro-header&gt;
    &lt;/td&gt;
  &lt;/tr&gt;
  &lt;tr&gt;
    &lt;td&gt;
      4
    &lt;/td&gt;
    &lt;td&gt;
      &lt;auro-header visualLevel="4"&gt;Small heading&lt;/auro-header&gt;
    &lt;/td&gt;
    &lt;td&gt;
      &lt;auro-header visualLevel="4" typography="display"&gt;Medium display&lt;/auro-header&gt;
    &lt;/td&gt;
  &lt;/tr&gt;
  &lt;tr&gt;
    &lt;td&gt;
      5
    &lt;/td&gt;
    &lt;td&gt;
      &lt;auro-header visualLevel="5"&gt;Extra small heading&lt;/auro-header&gt;
    &lt;/td&gt;
    &lt;td&gt;
      &lt;auro-header visualLevel="5" typography="display"&gt;Small display&lt;/auro-header&gt;
    &lt;/td&gt;
  &lt;/tr&gt;
  &lt;tr&gt;
    &lt;td&gt;
      6
    &lt;/td&gt;
    &lt;td&gt;
      &lt;auro-header visualLevel="6"&gt;Double extra small heading&lt;/auro-header&gt;
    &lt;/td&gt;
    &lt;td&gt;
      &lt;auro-header visualLevel="6" typography="display"&gt;Extra small display&lt;/auro-header&gt;
    &lt;/td&gt;
  &lt;/tr&gt;
&lt;/table&gt;</code></pre>
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

#### Typography <a name="typography"></a> to heading CSS class mapping

The `visualLevel` attribute controls the visual style of the header by mapping to specific <a href="https://auro.alaskaair.com/typography/usage" target="_blank">typography classes</a>.

Below is how each `visualLevel` value corresponds to a typography class:

| [visualLevel](#visualLevel) | `typography="heading"`    |  `typography="display"`  |
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
<!-- The below content is automatically added from ../apiExamples/additional-examples.html -->
<auro-header level="2" visualLevel="1">Hello World!</auro-header>
<auro-header level="2" visualLevel="2">Hello World!</auro-header>
<auro-header level="3" visualLevel="3">Hello World!</auro-header>
<auro-header level="4" visualLevel="3">Hello World!</auro-header>
<!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
<span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=../apiExamples/additional-examples.html) -->
<!-- The below code snippet is automatically added from ../apiExamples/additional-examples.html -->

<pre class="language-html"><code class="language-html">&lt;auro-header level="2" visualLevel="1"&gt;Hello World!&lt;/auro-header&gt;
&lt;auro-header level="2" visualLevel="2"&gt;Hello World!&lt;/auro-header&gt;
&lt;auro-header level="3" visualLevel="3"&gt;Hello World!&lt;/auro-header&gt;
&lt;auro-header level="4" visualLevel="3"&gt;Hello World!&lt;/auro-header&gt;</code></pre>
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

### Adjust margins

The header has no margin of its own. To change the space around it, add a `margin` style to the element.

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

<pre class="language-html"><code class="language-html">&lt;auro-header level="2" visualLevel="4" style="margin-bottom: var(--ds-size-400)"&gt;Hello World!&lt;/auro-header&gt;
&lt;ol&gt;
  &lt;li&gt;... thing&lt;/li&gt;
  &lt;li&gt;thing ...&lt;/li&gt;
&lt;/ol&gt;</code></pre>
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

### Color inheritance

To use a color from your page styles, wrap the header in a `div` or `span` that sets `color`. The header inherits it.

<div class="exampleWrapper">
<!-- AURO-GENERATED-CONTENT:START (FILE:src=../apiExamples/color-inheritance.html) -->
<!-- The below content is automatically added from ../apiExamples/color-inheritance.html -->
<div style="color: var(--ds-color-text-error-default)">
<auro-header level="3" visualLevel="2">There has been an error</auro-header>
</div>
<!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
<span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=../apiExamples/color-inheritance.html) -->
<!-- The below code snippet is automatically added from ../apiExamples/color-inheritance.html -->

<pre class="language-html"><code class="language-html">&lt;div style="color: var(--ds-color-text-error-default)"&gt;
  &lt;auro-header level="3" visualLevel="2"&gt;There has been an error&lt;/auro-header&gt;
&lt;/div&gt;</code></pre>
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>
