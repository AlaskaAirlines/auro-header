# auro-header

The `auro-header` element is a custom element to make using headers with the Auro Design System seamless and easy.

### Properties & Attributes

| Properties  | Attributes  | Modifiers | Type   | Default | Description                                                                                                                   |
| ----------- | ----------- | --------- | ------ | ------- | ----------------------------------------------------------------------------------------------------------------------------- |
| level       | level       |           | number |         | Determines the semantic heading level of the HTML element. Options are `1` - `6`.                                             |
| typography  | typography  |           | string |         | Determines the font of heading, Options are `heading` or `display`.                                                           |
| visualLevel | visualLevel |           | number | `1`     | Determines the visual appearance of the header. Options are `1` - `6`.                                                        |
| color       | color       |           | string |         | (Deprecated) Allows user to pass in CSS custom property or direct hex value to change the color of the header.                |
| display     | display     |           | string |         | (Deprecated) Determines the visual appearance of the header. Options are `display`, `800`, `700`, `600`, `500`, `400`, `300`. |
| margin      | margin      |           | string |         | (Deprecated) Specify the margin(s) to be altered. Options are `top`, `bottom`, or `both`.                                     |
| size        | size        |           | string |         | (Deprecated) Specify size of margin adjustment, either `none`, `25`, `50`, `100`, `150`, `200`, `300`, `400`, `600` or `800`. |

### Methods

| Name     | Parameters                                                          | Return | Description                                       |
| -------- | ------------------------------------------------------------------- | ------ | ------------------------------------------------- |
| register | `name` (string) - The name of element that you want to register to. |        | This will register this element with the browser. |