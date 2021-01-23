# auro-header

`<auro-header>` is a [HTML custom element](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_custom_elements) for the purpose of quickly creating page and content headers.

## Docs

All information regarding Project Setup, Technical Details, Tests and information regarding Auro Stateless Components can be found in the [docs](https://auro.alaskaair.com/components/auro/header) project documentation site.

## UI development browser support

For the most up to date information on UI development [browser support](https://auro.alaskaair.com/support/browsersSupport)

## Install
[![Build Status](https://img.shields.io/github/workflow/status/AlaskaAirlines/auro-header/Test%20and%20publish?branch=master&style=for-the-badge)](https://github.com/AlaskaAirlines/auro-header/actions?query=workflow%3A%22test+and+publish%22)
[![See it on NPM!](https://img.shields.io/npm/v/@alaskaairux/auro-header?style=for-the-badge&color=orange)](https://www.npmjs.com/package/@alaskaairux/auro-header)
[![License](https://img.shields.io/npm/l/@alaskaairux/auro-header?color=blue&style=for-the-badge)](https://www.apache.org/licenses/LICENSE-2.0)

```shell
$ npm i @alaskaairux/auro-header
```

Installing as a direct, dev or peer dependency is up to the user installing the package. If you are unsure as to what type of dependency you should use, consider reading this [stack overflow](https://stackoverflow.com/questions/18875674/whats-the-difference-between-dependencies-devdependencies-and-peerdependencies) answer.

### Design Token CSS Custom Property dependency

The use of any Auro custom element has a dependency on the [Auro Design Tokens](https://auro.alaskaair.com/getting-started/developers/design-tokens/install).

### Heading styles

All Auro heading styles are packaged with this component. There is no need to reference WCSS header styles in your project.

### Define dependency in project component

Defining the component dependency within each component that is using the `<auro-header>` component.

```javascript
import "@alaskaairux/auro-header";
```

**Reference component in HTML**

```html
<auro-header>Hello World</auro-header>
```

## SEO / a11y

The auro-header component follows all best practices for SEO and accessibility standards. This component places all content within the scope of the [slot element](https://auro.alaskaair.com/support/slots) to ensure discoverability of content regardless of JavaScript support.

## Install bundled assets from CDN

In cases where the project is not able to process JS assets, there are pre-processed assets available for use. Two bundles are available -- `auro-header__bundled.js` for modern browsers and `auro-header__bundled.es5.js` for legacy browsers (including IE11).

Since the legacy bundle includes many polyfills that are not needed by modern browsers, we recommend you load these bundles using [differential serving](https://philipwalton.com/articles/deploying-es2015-code-in-production-today/) so that the browser only loads the bundle it needs. To accomplish this, the script tag for the modern bundle should have `type="module"` and the script tag for the legacy bundle should have the `nomodule` attribute. See the example below.

**NOTE:** Be sure to replace `@latest` in the URL with the version of the asset you want. @latest is NOT aware of any MAJOR releases, use at your own risk.

```html
<link rel="stylesheet" href="https://unpkg.com/@alaskaairux/design-tokens@latest/dist/tokens/CSSCustomProperties.css" />
<link rel="stylesheet" href="https://unpkg.com/@alaskaairux/webcorestylesheets@latest/dist/bundled/essentials.css" />

<script src="https://unpkg.com/@alaskaairux/auro-header@latest/dist/auro-header__bundled.js" type="module"></script>
<script src="https://unpkg.com/@alaskaairux/auro-header@latest/dist/auro-header__bundled.es5.js" nomodule></script>
```

### polyfills.js

The `polyfills.js` is packaged with this component, but **IT IS NOT NEEDED** to load a polyfill per component. The `polyfills.js` will work for all additional components added to the project.


## auro-header use cases

The `<auro-header>` element should be used in situations where users may:

* page header
* content / paragraph header

## API Code Examples

Default auro-header

```html
<auro-header level="1" display="display">Hello World</auro-header>
```

## Development

In order to develop against this project, if you are not part of the core team, you will be required to fork the project prior to submitting a pull request.

Please be sure to review the [contribution guidelines](https://github.com/AlaskaAirlines/auro_docs/blob/master/src/CONTRIBUTING.md) for this project. Please make sure to **pay special attention** to the [conventional commits](https://github.com/AlaskaAirlines/auro_docs/blob/master/src/CONTRIBUTING.md#conventional-commits) section of the document.

### Start development environment

Once the project has been cloned to your local resource and you have installed all the dependencies you will need to open three different shell sessions. One is for the **Gulp tasks**, the second is for a series of **npm tasks** and the last is to run the **Polymer server**.

**Peer dependency:** Please make sure Polymer is installed globally in order to run the Polymer server. See [Auro Stateless Component Development Details](https://github.com/AlaskaAirlines/auro_docs/blob/master/src/TECH_DETAILS.md) for more information.

```bash
$ npm i polymer-cli -g
```

```shell
// shell terminal one
$ npm run dev

// shell terminal two
$ npm run serve
```

Open [localhost:8000](http://localhost:8000/)

### Testing
Automated tests are required for every Auro component. See `.\test\auro-header.test.js` for the tests for this component. Run `npm test` to run the tests and check code coverage. Tests must pass and meet a certain coverage threshold to commit. See [the testing documentation](https://github.com/AlaskaAirlines/auro_docs/blob/master/src/TESTS.md) for more details.
