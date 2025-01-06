import { fixture, html, expect } from '@open-wc/testing';
import '../index';

describe('auro-header', () => {
  it('sets the CSS class on auro-header', async () => {
    const el = await fixture(html`
      <auro-header level="h1" display="display">Hello World!</auro-header>
    `);

    const heading = el.shadowRoot.querySelector('h1');
    expect(heading.className).to.equal('heading heading--display ');
  });

  it('sets correct heading element', async () => {
    const el = await fixture(html`
      <auro-header level="1" display="display" color="orange">Hello World!</auro-header>
      <auro-header level="2" display="display" color="orange">Hello World!</auro-header>
      <auro-header level="3" display="display" color="orange">Hello World!</auro-header>
      <auro-header level="4" display="display" color="orange">Hello World!</auro-header>
      <auro-header level="5" display="display" color="orange">Hello World!</auro-header>
      <auro-header level="6" display="display" color="orange">Hello World!</auro-header>
    `);

    const heading = el.shadowRoot.querySelector('h1');
    expect(heading.tagName).to.equal('H1');
  });

  it('sets non-semantic element', async () => {
    const el = await fixture(html`
      <auro-header level="none" display="display" color="orange">Hello World!</auro-header>
    `);

    const heading = el.shadowRoot.querySelector('span');
    expect(heading.tagName).to.equal('SPAN');
  });

  it('sets display prop if empty string', async () => {
    const el = await fixture(html`
      <auro-header level="1" display="" color="orange">Hello World!</auro-header>
    `);

    const heading = el.shadowRoot.querySelector('h1');
    expect(heading.className).to.equal('heading heading--display ');
  });

  it('sets color to orange', async () => {
    const el = await fixture(html`
      <auro-header level="1" display="display" color="orange">Hello World!</auro-header>
    `);

    const heading = el.shadowRoot.querySelector('h1');
    expect(heading.style.color).to.equal('orange');
  });

  it('checks invalid size value', async () => {
    const el = await fixture(html`
      <auro-header level="2" display="display" size="66" margin="bottom">Hello World!</auro-header>
    `);

    const heading = el.shadowRoot.querySelector('h2');
    expect(heading.className).to.equal('heading heading--display ');
  });

  it('sets bottom margin CURRENT', async () => {
    const el = await fixture(html`
      <auro-header level="2" display="display" size="50" margin="bottom">Hello World!</auro-header>
      <auro-header level="2" display="display" size="100" margin="bottom">Hello World!</auro-header>
      <auro-header level="2" display="display" size="150" margin="bottom">Hello World!</auro-header>
      <auro-header level="2" display="display" size="200" margin="bottom">Hello World!</auro-header>
      <auro-header level="2" display="display" size="300" margin="bottom">Hello World!</auro-header>
      <auro-header level="2" display="display" size="400" margin="bottom">Hello World!</auro-header>
      <auro-header level="2" display="display" size="500" margin="bottom">Hello World!</auro-header>
      <auro-header level="2" display="display" size="600" margin="bottom">Hello World!</auro-header>
      <auro-header level="2" display="display" size="800" margin="bottom">Hello World!</auro-header>
      <auro-header level="2" display="display" size="none" margin="bottom">Hello World!</auro-header>
    `);

    const heading = el.shadowRoot.querySelector('h2');
    expect(heading.className).to.equal('heading heading--display util_stackMargin50--bottom');
  });

  it('sets top and bottom margin CURRENT', async () => {
    const el = await fixture(html`
      <auro-header level="2" display="display" size="50" margin="both">Hello World!</auro-header>
      <auro-header level="2" display="display" size="100" margin="both">Hello World!</auro-header>
      <auro-header level="2" display="display" size="150" margin="both">Hello World!</auro-header>
      <auro-header level="2" display="display" size="200" margin="both">Hello World!</auro-header>
      <auro-header level="2" display="display" size="300" margin="both">Hello World!</auro-header>
      <auro-header level="2" display="display" size="400" margin="both">Hello World!</auro-header>
      <auro-header level="2" display="display" size="500" margin="both">Hello World!</auro-header>
      <auro-header level="2" display="display" size="600" margin="both">Hello World!</auro-header>
      <auro-header level="2" display="display" size="800" margin="both">Hello World!</auro-header>
      <auro-header level="2" display="display" size="none" margin="both">Hello World!</auro-header>
    `);

    const heading = el.shadowRoot.querySelector('h2');
    expect(heading.className).to.equal('heading heading--display util_stackMargin50--top util_stackMargin50--bottom');
  });

  it('sets color no color', async () => {
    const el = await fixture(html`
      <auro-header level="1" display="display">Hello World!</auro-header>
      <auro-header level="2" display="display">Hello World!</auro-header>
      <auro-header level="3" display="display">Hello World!</auro-header>
      <auro-header level="4" display="display">Hello World!</auro-header>
      <auro-header level="5" display="display">Hello World!</auro-header>
      <auro-header level="6" display="display">Hello World!</auro-header>
    `);

    const heading = el.shadowRoot.querySelector('h1');
    expect(heading.style.color).to.equal('');
  });

  it('auro-header is accessible', async () => {
    const el = await fixture(html`
      <auro-header level="h1" display="display">Hello World!</auro-header>
    `);

    await expect(el).to.be.accessible();
  });

  it('auro-header custom element is defined', async () => {
    const el = await !!customElements.get("auro-header");

    await expect(el).to.be.true;
  });
});
