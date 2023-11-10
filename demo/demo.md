# Header

The `auro-header` component is a simple component for rendering page or content headers without having to deal with font styling. Simply choose the level of the header want and the style type.

The auro-header component is able to take any combination of options for heading levels and display options. See [Auro's header usage guidlines](https://auro.alaskaair.com/typography/usage) for additional examples sans web component dependency.

## auro-header use cases

The `auro-header` element should be used in situations where users may:

* page header
* content / paragraph header

## Defaults

The auro-header will default to the h1 element with the `header--display` style.

<div class="exampleWrapper">
  <auro-header>Hello World!</auro-header>
</div>

<auro-accordion alignRight>
  <span slot="trigger">See code</span>

  ```html
  <auro-header>Hello World!</auro-header>
  ```

</auro-accordion>

Changing the header level does not change the header style. This example will output an h3 header element with the default `header--display` style.

<div class="exampleWrapper">
  <auro-header level="3">Hello World!</auro-header>
</div>

<auro-accordion alignRight>
  <span slot="trigger">See code</span>

  ```html
  <auro-header level="3">Hello World!</auro-header>
  ```

</auro-accordion>

Or vice-versa. This example will output an h1 header element with the `header--800` style.

<div class="exampleWrapper">
  <auro-header display="800">Hello World!</auro-header>
</div>

<auro-accordion alignRight>
  <span slot="trigger">See code</span>

  ```html
  <auro-header display="800">Hello World!</auro-header>
  ```

</auro-accordion>

## Header examples

<div class="exampleWrapper">
  <auro-header level="2" display="700">Hello World!</auro-header>
</div>

<auro-accordion alignRight>
  <span slot="trigger">See code</span>

  ```html
  <auro-header level="2" display="700">Hello World!</auro-header>
  ```

</auro-accordion>

<div class="exampleWrapper">
  <auro-header level="2" display="600">Hello World!</auro-header>
</div>

<auro-accordion alignRight>
  <span slot="trigger">See code</span>

  ```html
  <auro-header level="2" display="600">Hello World!</auro-header>
  ```

</auro-accordion>

<div class="exampleWrapper">
  <auro-header level="3" display="500">Hello World!</auro-header>
</div>

<auro-accordion alignRight>
  <span slot="trigger">See code</span>

  ```html
  <auro-header level="3" display="500">Hello World!</auro-header>
  ```

</auro-accordion>

<div class="exampleWrapper">
  <auro-header level="5" display="400">Hello World!</auro-header>
</div>

<auro-accordion alignRight>
  <span slot="trigger">See code</span>

  ```html
  <auro-header level="5" display="400">Hello World!</auro-header>
  ```

</auro-accordion>

### Adjust margins

In some cases the margin between elements may need to be adjusted. To do this, the `auro-header` component supports adjusting either the `top`, `bottom` or `both` margins. This coupled with the `size` prop, developers have a [full range of options](https://auro.alaskaair.com/components/auro/header/api).

The following example shows how you can update the `bottom` margin to use the `50` size setting.

Also note the use of the  util_stackMarginNone--top  utility selector on the ol from [Web Core Style Sheets](https://alaskaairlines.github.io/WebCoreStyleSheets/#utility-layout-mixin-auro_spacing).

<div class="exampleWrapper">
  <auro-header level="2" display="500" margin="bottom" size="50">Hello World!</auro-header>
  <ol className="util_stackMarginNone--top">
    <li>... thing</li>
    <li>thing ...</li>
  </ol>
</div>

<auro-accordion alignRight>
  <span slot="trigger">See code</span>

  ```html
  <auro-header level="2" display="500" margin="bottom" size="50">Hello World!</auro-header>
  <ol className="util_stackMarginNone--top">
    <li>... thing</li>
    <li>thing ...</li>
  </ol>
  ```

</auro-accordion>

The following example shows how you can update `both` margins to use the `400` size setting.

<div class="exampleWrapper">
  <auro-header level="2" display="500" margin="both" size="400">Hello World!</auro-header>
  <ol className="util_stackMarginNone--top">
    <li>... thing</li>
    <li>thing ...</li>
  </ol>
</div>

<auro-accordion alignRight>
  <span slot="trigger">See code</span>

  ```html
  <auro-header level="2" display="500" margin="both" size="400">Hello World!</auro-header>
  <ol className="util_stackMarginNone--top">
    <li>... thing</li>
    <li>thing ...</li>
  </ol>
  ```

</auro-accordion>

### Color inheritance

If there is a CSS selector that has the color definition you want to use with the header, simply wrap the header in a `div` or `span` and the auro-header component will inherit the color.

<div class="exampleWrapper">
  <div style="color: var(--auro-color-alert-error-on-light)">
    <auro-header level="3" display="700">There has been an error</auro-header>
  </div>
</div>

<auro-accordion alignRight>
  <span slot="trigger">See code</span>

  ```html
  <div style="color: var(--auro-color-alert-error-on-light)">
    <auro-header level="3" display="700">There has been an error</auro-header>
  </div>
  ```

</auro-accordion>

### Direct color use

If it's preferred not to wrap the header component in another element, use the `color` property to set the color value directly on the header element.

<div class="exampleWrapper">
  <auro-header level="3" display="700" color="var(--auro-color-border-active-on-light)">
    On the journey together
  </auro-header>
</div>

<auro-accordion alignRight>
  <span slot="trigger">See code</span>

  ```html
  <auro-header level="3" display="700" color="var(--auro-color-border-active-on-light)">
    On the journey together
  </auro-header>
  ```

</auro-accordion>

### Classic environment support

One of the challenges of using a design system is coping with legacy CSS that surrounds the new component. While web components are encapsulated, things like `font-size` will pierce the shadow DOM. To help combat this, the `auro-header` component supports a fixed attribute. Setting `fixed` will over-ride the component's dependency on REM values and use pixel values instead.

This feature should only to be used within environments where the REM values cannot be used.

<div class="exampleWrapper">
  <auro-header level="3" display="700" fixed>
    On the journey together
  </auro-header>
</div>

<auro-accordion alignRight>
  <span slot="trigger">See code</span>

  ```html
  <auro-header level="3" display="700" fixed>
    On the journey together
  </auro-header>
  ```

</auro-accordion>

## Recommended Use and Version Control

There are two important parts of every Auro component. The <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes">class</a> and the custom clement. The class is exported and then used as part of defining the Web Component. When importing this component as described in the <a href="#install">install</a> section, the class is imported and the `auro-header` custom element is defined automatically.

To protect from versioning conflicts with other instances of the component being loaded, it is recommended to use our `registerComponent(name)` method and pass in a unique name.

```js
import './node_modules/@alaskaairux/auro-header';
registerComponent('custom-header');
```

This will create a new custom element that you can use in your HTML that will function identically to the `auro-header` element.

<div class="exampleWrapper">
  <custom-header display="display">Salutations World!</custom-header>
</div>

<auro-accordion alignRight>
  <span slot="trigger">See code</span>

  ```html
  <custom-header display="display">Salutations World!</custom-header>
  ```

</auro-accordion>
