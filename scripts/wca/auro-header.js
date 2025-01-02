
import { AuroHeader } from '../../src/auro-header.js';

/**
 * The auro-header component is a custom element to make using headers with the Auro Design System seamless and easy.
 */
class AuroHeaderWCA extends AuroHeader {}

if (!customElements.get("auro-header")) {
  customElements.define("auro-header", AuroHeaderWCA);
}