# auro-header

The auro-header component is a custom element to make using headers with the Auro Design System seamless and easy.

## Properties

| Property      | Attribute     | Type     | Default                 | Description                                      |
|---------------|---------------|----------|-------------------------|--------------------------------------------------|
| `color`       | `color`       | `string` |                         | (Deprecated) Allows user to pass in CSS custom property or direct hex value to change the color of the header. |
| `display`     | `display`     | `string` |                         | (Deprecated) Determines the visual appearance of the header. Options are `display`, `800`, `700`, `600`, `500`, `400`, `300`. |
| `level`       | `level`       | `number` | 1                       | Determines the semantic heading level of the HTML element. Options are `1` - `6`. |
| `margin`      | `margin`      | `string` |                         | (Deprecated) Specify the margin(s) to be altered. Options are `top`, `bottom`, or `both`. |
| `size`        | `size`        | `string` |                         | (Deprecated) Specify size of margin adjustment, either `none`, `25`, `50`, `100`, `150`, `200`, `300`, `400`, `600` or `800`. |
| `typography`  | `typography`  | `string` | "heading"               | Determines the font of heading, Options are `heading` or `display`. |
| `visualLevel` | `visualLevel` | `number` | "same value as `level`" | Determines the visual appearance of the header. Options are `1` - `6`. |
