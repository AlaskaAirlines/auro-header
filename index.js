import { AuroHeader } from './src/auro-header';

/**
 * Register Custom Element.
 * @param {Object} name - Name to use for custom element.
 * @returns {void}
 */
 const registerComponent = (name = 'custom-header') => {
  // alias definition
  if (!customElements.get(name)) {
    customElements.define(name, class extends AuroHeader {});
  }
}

export { registerComponent }
