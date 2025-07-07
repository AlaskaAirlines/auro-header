# auro-header

The auro-header component is a custom element to make using headers with the Auro Design System seamless and easy.

## Attributes

| Attribute         | Type      | Description                                  |
|-------------------|-----------|----------------------------------------------|
| `no-margin-block` | `Boolean` | if declared, margin-block will be set to `0` |

## Properties

| Property  | Attribute | Type     | Default   | Description                                      |
|-----------|-----------|----------|-----------|--------------------------------------------------|
| `color`   | `color`   | `String` |           | Allows user to pass in CSS custom property or direct hex value to change the color of the header |
| `display` | `display` | `String` | "display" | Determines the visual appearance of the header. Options are `display`, `800`, `700`, `600`, `500`, `400`, `300`. |
| `level`   | `level`   | `String` |           | Determines the semantic heading level of the HTML element. Options are `1` - `6` |
| `margin`  | `margin`  | `String` |           | Specify the margin(s) to be altered. Options are `top`, `bottom`, or `both`. |
| `size`    | `size`    | `String` |           | Specify size of margin adjustment, either `none`, `25`, `50`, `100`, `150`, `200`, `300`, `400`, `600` or `800`. |
