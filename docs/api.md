# auro-header

auro-header is a custom element to make using headers with the Auro Design System seamless and easy.

## Attributes

| Attribute | Type      | Description                                      |
|-----------|-----------|--------------------------------------------------|
| `fixed`   | `Boolean` | Uses px values instead of rem                    |
| `type`    | `String`  | **DEPRECATED** Option, `px`. Legacy option for converting REMs to PX. Use `fixed` feature. |

## Properties

| Property  | Attribute | Type     | Default   | Description                                      |
|-----------|-----------|----------|-----------|--------------------------------------------------|
| `color`   | `color`   | `String` |           | Allows user to pass in CSS custom property or direct hex value to change the color of the header |
| `display` | `display` | `String` | "display" | Determines presentation of header. Options are `display`, `800`, `700`, `600`, `500`, `400`, `300`. |
| `level`   | `level`   | `String` |           | Determines heading level for HTML element. Options are `1` - `6` |
| `margin`  | `margin`  | `String` |           | Specify the margin(s) to be altered. Options are `top`, `bottom`, or `both`. |
| `size`    | `size`    | `String` |           | Specify size of margin adjustment, either `none`, `xxxs`, `xxs`, `xs`, `sm`, `md`, `lg`, `xl`, `xxl` or `xxxl` |
