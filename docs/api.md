# auro-header

Renders a page or content heading with Auro typography, so you set the heading level and the visual style separately.

**Key capabilities**

- **Semantic level**: Sets the heading element, from `<h1>` to `<h6>`, with `level`.
- **Visual style**: Changes how the heading looks without changing its level, with `visualLevel`.
- **Display font**: Switches from heading styles to display styles with `typography="display"`.

**Example**

```html
<auro-header level="2" visualLevel="4">Hello World!</auro-header>
```

### Properties and attributes

| Properties  | Attributes  | Modifiers | Type   | Default   | Description                                                                                                                                                                                                                                                  |
| ----------- | ----------- | --------- | ------ | --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| level       | level       |           | number | `1`       | Sets the semantic heading level, from `1` for `<h1>` to `6` for `<h6>`. Use the level that fits the page outline, and use `visualLevel` to change how the header looks.                                                                                      |
| typography  | typography  |           | string | `heading` | Sets the typography family of the header: `heading` for heading styles or `display` for display styles. The `visualLevel` picks the size within that family.                                                                                                 |
| visualLevel | visualLevel |           | number |           | Sets the visual style of the header, from `1` (largest) to `6` (smallest), independent of its heading level. Uses the value of `level` when not set.                                                                                                         |
| color       | color       |           | string |           | Deprecated: Use a parent element's CSS `color` instead; the header inherits it.<br>Sets the color of the header text with any CSS color value, such as a hex value or a custom property.                                                                     |
| display     | display     |           | string |           | Deprecated: Use `visualLevel` and `typography` instead.<br>Sets the visual style when `visualLevel` isn't set, using `800`, `700`, `600`, `500`, `400`, or `300`. The value `display` does not currently work.                                               |
| margin      | margin      |           | string |           | Deprecated: Use a CSS `margin` style on the element instead.<br>Sets which side `size` adds space to: `top`, `bottom`, or `both`.                                                                                                                            |
| size        | size        |           | string |           | Deprecated: Use a CSS `margin` style on the element instead.<br>Sets how much space `margin` adds, using `none`, `25`, `50`, `100`, `150`, `200`, `300`, `400`, `600`, or `800`. The value `600` does not currently work when `margin` is `top` or `bottom`. |

### Methods

| Name     | Parameters                                                    | Return | Description                                              |
| -------- | ------------------------------------------------------------- | ------ | -------------------------------------------------------- |
| register | `name` (string) - The tag name to register the element under. |        | Registers the element with the browser under a tag name. |