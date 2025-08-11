# Semantic Release Automated Changelog

## [4.0.3](https://github.com/AlaskaAirlines/auro-header/compare/v4.0.2...v4.0.3) (2025-08-11)


### Bug Fixes

* auro library was causing aqua scan failures ([d43312f](https://github.com/AlaskaAirlines/auro-header/commit/d43312fc5bc472f2441c35f51864e61f80dbc077))

## [4.0.2](https://github.com/AlaskaAirlines/auro-header/compare/v4.0.1...v4.0.2) (2025-07-09)


### Bug Fixes

* add themeable type classes ([5fe5656](https://github.com/AlaskaAirlines/auro-header/commit/5fe56560c4c247877eeea045d2c7a096cc55fe62))
* update docs head content ([e406d5a](https://github.com/AlaskaAirlines/auro-header/commit/e406d5ab3ee61ffae680fc0034f1b58289ad415f))

## [4.0.1](https://github.com/AlaskaAirlines/auro-header/compare/v4.0.0...v4.0.1) (2025-04-14)


### Performance Improvements

* update dependencies and tsconfig ([2ff7814](https://github.com/AlaskaAirlines/auro-header/commit/2ff78140e1db2fdfbef0613cc569ceb1eaa0ee2e))
* update to use new theming tokens [#154](https://github.com/AlaskaAirlines/auro-header/issues/154) ([aa92dcb](https://github.com/AlaskaAirlines/auro-header/commit/aa92dcbffed5e540e9da0588fa31489d55bd0eca))

# [4.0.0](https://github.com/AlaskaAirlines/auro-header/compare/v3.1.0...v4.0.0) (2025-02-28)


* feat!: move peer dependencies to "real" dependencies ([0f63b0d](https://github.com/AlaskaAirlines/auro-header/commit/0f63b0da4db64b4efce4df8ad7bb1f9ef0163c3a))


### BREAKING CHANGES

* last change was breaking _on a patch version_ because of peer dependencies

Summary:
  Our current build process relies on peer dependencies being present, but
  the peer dependency pipeline is causing far more issues than it's worth.
  Why not just make them regular dependencies? This is what this PR does :)

# [3.1.0](https://github.com/AlaskaAirlines/auro-header/compare/v3.0.1...v3.1.0) (2025-02-18)


### Features

* add `no-margin-block` attribute to remove `margin-block` ([17340a0](https://github.com/AlaskaAirlines/auro-header/commit/17340a0a7ad00f2362f4d34950e4cba1a61fda6b))

## [3.0.1](https://github.com/AlaskaAirlines/auro-header/compare/v3.0.0...v3.0.1) (2025-02-08)


### Performance Improvements

* update dependencies ([5074649](https://github.com/AlaskaAirlines/auro-header/commit/5074649f92a115bbea0fecf57d40f5eca9448816))

# [3.0.0](https://github.com/AlaskaAirlines/auro-header/compare/v2.4.1...v3.0.0) (2025-01-03)


### Performance Improvements

* remove deprecated code issues [#133](https://github.com/AlaskaAirlines/auro-header/issues/133) ([e52bfe1](https://github.com/AlaskaAirlines/auro-header/commit/e52bfe13422375be5eecdad1a8e145d1b3e3a71f))
* semantic release set to main ([e8d5cb3](https://github.com/AlaskaAirlines/auro-header/commit/e8d5cb337dba2e82cbd5661a2064bf1035c2c196))
* update dependencies ([50e644e](https://github.com/AlaskaAirlines/auro-header/commit/50e644ed178472f396e482760798638f8331e51d))
* update node to version 22 ([cb06869](https://github.com/AlaskaAirlines/auro-header/commit/cb068694ad71f37fae0670e4d12b9521c66ad455))


### BREAKING CHANGES

* This code update resolves issues with deprecated features and cleans up
the implementation of the `auro-header` component. The `fixed` attribute and legacy size
options (`xxxs` to `xxxl`) have been eliminated, along with related utility classes and
documentation references, simplifying margin handling to specified numeric
values (`none`, `25`, `50`, etc.).

Legacy styles and examples supporting pixel-based rendering are removed, aligning the
component with modern practices. Additionally, two lines in `.husky/pre-commit` that would
fail in version `v10.0.0`—`#!/usr/bin/env sh` and `. "$(dirname -- "$0")/_/husky.sh"`—were
removed to ensure compatibility.

Updates include revisions to documentation files, API examples, and the `auro-header.js` source code,
while dependencies in the `package.json` file are updated, reflecting the latest version of
`@aurodesignsystem/auro-library`. These changes streamline the codebase, remove outdated
functionality, and improve maintainability for future development.

## [2.4.1](https://github.com/AlaskaAirlines/auro-header/compare/v2.4.0...v2.4.1) (2024-11-12)


### Bug Fixes

* update markdown partial pathing to consume new auro lib [#129](https://github.com/AlaskaAirlines/auro-header/issues/129) ([687508c](https://github.com/AlaskaAirlines/auro-header/commit/687508c0648b644dfc117272adce541689dd7d2d))

# [2.4.0](https://github.com/AlaskaAirlines/auro-header/compare/v2.3.1...v2.4.0) (2024-10-21)


### Features

* **api:** add register static method [#127](https://github.com/AlaskaAirlines/auro-header/issues/127) ([8f6e9b1](https://github.com/AlaskaAirlines/auro-header/commit/8f6e9b14936cec3747faadc3c6fa1cd4802f6509))

## [2.3.1](https://github.com/AlaskaAirlines/auro-header/compare/v2.3.0...v2.3.1) (2024-10-08)


### Bug Fixes

* moves auro library to dependencies in package.json [#125](https://github.com/AlaskaAirlines/auro-header/issues/125) ([783fff7](https://github.com/AlaskaAirlines/auro-header/commit/783fff704d58d0838b802e3a49cd625ab5daf510))

# [2.3.0](https://github.com/AlaskaAirlines/auro-header/compare/v2.2.5...v2.3.0) (2024-09-17)


### Features

* add tag name as attribute functionality [#123](https://github.com/AlaskaAirlines/auro-header/issues/123) ([697e709](https://github.com/AlaskaAirlines/auro-header/commit/697e70925713648f8479c37ea249632ff0a7acab))

## [2.2.5](https://github.com/AlaskaAirlines/auro-header/compare/v2.2.4...v2.2.5) (2024-09-17)


### Performance Improvements

* **styles:** remove unnecessary sass imports that cause bloat ([bcb618d](https://github.com/AlaskaAirlines/auro-header/commit/bcb618d964ed9ea4c2f3bd4b1b8acc0abb3eaf53))
* update eslint config and dependencies ([693c70c](https://github.com/AlaskaAirlines/auro-header/commit/693c70c0a7f5704574afe41eac92a951e288cfea))

## [2.2.5-beta.1](https://github.com/AlaskaAirlines/auro-header/compare/v2.2.4...v2.2.5-beta.1) (2024-07-10)


### Performance Improvements

* **styles:** remove unnecessary sass imports that cause bloat ([9a6430f](https://github.com/AlaskaAirlines/auro-header/commit/9a6430f3ef0183253eeaea79beb473e32c1e581a))
* update eslint config and dependencies ([ab2034a](https://github.com/AlaskaAirlines/auro-header/commit/ab2034a65838a0756b8d21e57d77eba84a8f1b33))

## [2.2.4](https://github.com/AlaskaAirlines/auro-header/compare/v2.2.3...v2.2.4) (2024-02-19)


### Performance Improvements

* **demo:** update demo file structure [#116](https://github.com/AlaskaAirlines/auro-header/issues/116) ([bc47d06](https://github.com/AlaskaAirlines/auro-header/commit/bc47d067cdb63284efa2cde7c55292dcf64ffe7e))
* **release:** fix branch name for semantic release ([2d7f62c](https://github.com/AlaskaAirlines/auro-header/commit/2d7f62cbacf4800f264799e182af1e4372317c71))
* **styles:** update scss file to fix style issues ([c5b83ed](https://github.com/AlaskaAirlines/auro-header/commit/c5b83ed8e99f73ae44f9ef77bce1cbbbf5789d01))

## [2.2.3](https://github.com/AlaskaAirlines/auro-header/compare/v2.2.2...v2.2.3) (2024-02-13)


### Bug Fixes

* address broken build step ([b13710b](https://github.com/AlaskaAirlines/auro-header/commit/b13710bd65ea8e9d895e0064be4a262cd08431f8))


### Performance Improvements

* update auro dependencies ([dfa3f87](https://github.com/AlaskaAirlines/auro-header/commit/dfa3f8773837454366a75a78150e3c3bd002a844))

## [2.2.2](https://github.com/AlaskaAirlines/auro-header/compare/v2.2.1...v2.2.2) (2024-01-31)


### Performance Improvements

* alaskaairux ref updates ([26ef7be](https://github.com/AlaskaAirlines/auro-header/commit/26ef7be221acc3d2ed557084db091e45b75ce733))
* **cdn:** update links from unpkg to jsdelivr ([79eedb5](https://github.com/AlaskaAirlines/auro-header/commit/79eedb57c28ac591f42b280cf4493d73f25c5c6b))

## [2.2.1](https://github.com/AlaskaAirlines/auro-header/compare/v2.2.0...v2.2.1) (2024-01-27)


### Performance Improvements

* update index per SSR support ([02f3f54](https://github.com/AlaskaAirlines/auro-header/commit/02f3f54464150dcef295ca04f27d88e4b11266e4))

# [2.2.0](https://github.com/AlaskaAirlines/auro-header/compare/v2.1.0...v2.2.0) (2024-01-21)


### Features

* add suport for SSR projects [#113](https://github.com/AlaskaAirlines/auro-header/issues/113) ([084ebb4](https://github.com/AlaskaAirlines/auro-header/commit/084ebb40dbd232bc91d58d5eea0fd8f8c751011c))

# [2.1.0](https://github.com/AlaskaAirlines/auro-header/compare/v2.0.1...v2.1.0) (2024-01-08)


### Features

* update adjustable margin API ([407dd9d](https://github.com/AlaskaAirlines/auro-header/commit/407dd9dd8167a22d5b95350f30bb417cba72785b))


### Performance Improvements

* update to support new Node policy ([5b76187](https://github.com/AlaskaAirlines/auro-header/commit/5b76187cd8ea3c11c3b9215aec3841d3a444a944))
* update tokens per new theme spec [#44](https://github.com/AlaskaAirlines/auro-header/issues/44) ([f822501](https://github.com/AlaskaAirlines/auro-header/commit/f8225012dc7594fb38f8787d5b645823aacf19c6))

## [2.0.1](https://github.com/AlaskaAirlines/auro-header/compare/v2.0.0...v2.0.1) (2023-06-05)


### Performance Improvements

* update to gitignore & npmignore file [#97](https://github.com/AlaskaAirlines/auro-header/issues/97) ([70e6b7e](https://github.com/AlaskaAirlines/auro-header/commit/70e6b7e61fbf81bedf9ce6e5358a056a432f5973))

# [2.0.0](https://github.com/AlaskaAirlines/auro-header/compare/v1.5.5...v2.0.0) (2023-04-19)


### Bug Fixes

* misimport pathto 'lit' package in auro-header.js ([0536f41](https://github.com/AlaskaAirlines/auro-header/commit/0536f419f7fdb8271c5eb9222edfbf1a200d4532))


### Documentation

* **npm:** Update npm namespace [#70](https://github.com/AlaskaAirlines/auro-header/issues/70) ([663ad0f](https://github.com/AlaskaAirlines/auro-header/commit/663ad0f76c90cde357503ecc2deb1d9d1cd4f7d2))


### Features

* **typescript:** add typescript support [#68](https://github.com/AlaskaAirlines/auro-header/issues/68) ([9c76756](https://github.com/AlaskaAirlines/auro-header/commit/9c767563eaf41b34e89d29fe9ade1d6c5c44f0db))


### Performance Improvements

* **dev:** update run dev use single terminal [#65](https://github.com/AlaskaAirlines/auro-header/issues/65) ([0e37cf9](https://github.com/AlaskaAirlines/auro-header/commit/0e37cf9620f75ddc84f9a6ec5d3ae7c8da55ef75))
* **es5:** Remove legacy es5 bundling resources [#61](https://github.com/AlaskaAirlines/auro-header/issues/61) ([a5fb346](https://github.com/AlaskaAirlines/auro-header/commit/a5fb346084d0949d331df833b2b0cdf1eadb94de))
* **es5:** remove postinstall instrucions [#61](https://github.com/AlaskaAirlines/auro-header/issues/61) ([502cd66](https://github.com/AlaskaAirlines/auro-header/commit/502cd669da991caa2741892af685ab04cc9a8a6e))
* **husky:** Pre-commit and husky update [#63](https://github.com/AlaskaAirlines/auro-header/issues/63) ([2568b60](https://github.com/AlaskaAirlines/auro-header/commit/2568b607b1c0b9597916fbd49cd108906763e32b))
* **lit:** Update to Lit2.0 [#66](https://github.com/AlaskaAirlines/auro-header/issues/66) ([e9fa9ef](https://github.com/AlaskaAirlines/auro-header/commit/e9fa9ef5b429d4583ff9f5e769f9f66d279bcf14))
* **node18:** Update to support node 18++ [#64](https://github.com/AlaskaAirlines/auro-header/issues/64) ([9419a4d](https://github.com/AlaskaAirlines/auro-header/commit/9419a4d31030cc235af78c7c4031198cfcdb39d9))
* **postCss:** update to postCss.js & remove unused resource ([5e401a9](https://github.com/AlaskaAirlines/auro-header/commit/5e401a91a7bf1693491a371747c46e08386c739e))
* **sass:** Update Sass to use dart-sass dependency [#62](https://github.com/AlaskaAirlines/auro-header/issues/62) ([1a26b20](https://github.com/AlaskaAirlines/auro-header/commit/1a26b2006f005a5000e8699d6054c172f32f0ffd))


### BREAKING CHANGES

* **npm:** This update will redefine the npm namespace
for the auro-header element.

Changes to be committed:
modified:   README.md
modified:   package.json

## [1.5.5](https://github.com/AlaskaAirlines/auro-header/compare/v1.5.4...v1.5.5) (2023-04-18)


### Bug Fixes

* **resources:** update .npmignore ([ec53629](https://github.com/AlaskaAirlines/auro-header/commit/ec53629e383341a3a0e711f08163d0e55f7f92b8))

## [1.5.4](https://github.com/AlaskaAirlines/auro-header/compare/v1.5.3...v1.5.4) (2023-04-17)


### Bug Fixes

* **package:** update .npmignore confg file ([233365f](https://github.com/AlaskaAirlines/auro-header/commit/233365fb4f9c4eb0c77edf997adbd52f64ee34c1))

## [1.5.3](https://github.com/AlaskaAirlines/auro-header/compare/v1.5.2...v1.5.3) (2023-04-12)


### Performance Improvements

* **extend:** allow for custom component registration + extension ([3839c9d](https://github.com/AlaskaAirlines/auro-header/commit/3839c9dded2eae127715c703fdf9fef5c177381b))

## [1.5.2](https://github.com/AlaskaAirlines/auro-header/compare/v1.5.1...v1.5.2) (2022-01-10)


### Bug Fixes

* **bundle:** update dependencies to new tokens and wcss ([5dcf959](https://github.com/AlaskaAirlines/auro-header/commit/5dcf95913a95d93625aebc3e64e3d7a8b5a8281b))

## [1.5.1](https://github.com/AlaskaAirlines/auro-header/compare/v1.5.0...v1.5.1) (2021-01-23)


### Bug Fixes

* remove unused packages; update fixed style ([ce07aa0](https://github.com/AlaskaAirlines/auro-header/commit/ce07aa04c60eaed72e878d01a55a57ea3df9ddab))

# [1.5.0](https://github.com/AlaskaAirlines/auro-header/compare/v1.4.0...v1.5.0) (2021-01-23)


### Features

* upgrade to use markdown demo page ([e292451](https://github.com/AlaskaAirlines/auro-header/commit/e292451d0a6bfc21df386bb9072356d3378ac70f))
* upgrde to rollup bundle ([cac5b13](https://github.com/AlaskaAirlines/auro-header/commit/cac5b136cef96e53179f54c147638b315eb9c4b3))

# [1.4.0](https://github.com/AlaskaAirlines/auro-header/compare/v1.3.0...v1.4.0) (2020-10-30)


### Features

* add support for fixed px feature ([fa7108a](https://github.com/AlaskaAirlines/auro-header/commit/fa7108a469ca9ae25b52c3ddfa9b2f73188086ee))

# [1.3.0](https://github.com/AlaskaAirlines/auro-header/compare/v1.2.1...v1.3.0) (2020-09-16)


### Features

* [#4](https://github.com/AlaskaAirlines/auro-header/issues/4) add support for BOTH top and bottom margin adjustments at the same time ([0b69f87](https://github.com/AlaskaAirlines/auro-header/commit/0b69f874d2a571cc4e7a5ec90837049d8605993c))

## [1.2.1](https://github.com/AlaskaAirlines/auro-header/compare/v1.2.0...v1.2.1) (2020-07-31)


### Bug Fixes

* [#3](https://github.com/AlaskaAirlines/auro-header/issues/3) address issue with custom margins and px prop ([04be7e3](https://github.com/AlaskaAirlines/auro-header/commit/04be7e31ae81678cc8377b944094231c63f6fe3e))

# [1.2.0](https://github.com/AlaskaAirlines/auro-header/compare/v1.1.0...v1.2.0) (2020-07-16)


### Bug Fixes

* [#2](https://github.com/AlaskaAirlines/auro-header/issues/2) guard aginst removal of prop ([1a532af](https://github.com/AlaskaAirlines/auro-header/commit/1a532aff940f223fa1c02f02043bb7b4dd1ae858))


### Features

* add feature to support PX CSS type ([ec7149b](https://github.com/AlaskaAirlines/auro-header/commit/ec7149bbd54491d348da884aaa69eb6e796da161))

# [1.1.0](https://github.com/AlaskaAirlines/auro-header/compare/v1.0.0...v1.1.0) (2020-07-09)


### Features

* add support for margin adjustments ([43b6e0f](https://github.com/AlaskaAirlines/auro-header/commit/43b6e0fd3cba008563c330270fd9311fe4544603))

# 1.0.0 (2020-07-06)


### Features

* create new header component ([4a46b72](https://github.com/AlaskaAirlines/auro-header/commit/4a46b72746981c018ce03d8fd533c0e7400724a8))
