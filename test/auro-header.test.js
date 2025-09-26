import { expect, fixture, html } from "@open-wc/testing";
import "../index";

describe("auro-header", () => {
  it("sets the default display CSS class on auro-header", async () => {
    const el = await fixture(html`
      <auro-header level="1" visualLevel="1">Hello World!</auro-header>
    `);

    const heading = el.shadowRoot.querySelector("h1");
    expect(heading.className).to.include("heading-xl");
  });

  it("sets correct heading element", async () => {
    const el = await fixture(html`
      <auro-header level="1" visualLevel="1" color="orange">Hello World!</auro-header>
      <auro-header level="2" visualLevel="1" color="orange">Hello World!</auro-header>
      <auro-header level="3" visualLevel="1" color="orange">Hello World!</auro-header>
      <auro-header level="4" visualLevel="1" color="orange">Hello World!</auro-header>
      <auro-header level="5" visualLevel="1" color="orange">Hello World!</auro-header>
      <auro-header level="6" visualLevel="1" color="orange">Hello World!</auro-header>
    `);

    const heading = el.shadowRoot.querySelector("h1");
    expect(heading.tagName).to.equal("H1");
  });

  it("sets display prop if empty string", async () => {
    const el = await fixture(html`
      <auro-header level="1" color="orange">Hello World!</auro-header>
    `);

    const heading = el.shadowRoot.querySelector("h1");
    expect(heading.className).to.include("heading-xl");
  });

  it("sets color to orange", async () => {
    const el = await fixture(html`
      <auro-header level="1" visualLevel="1" color="orange">Hello World!</auro-header>
    `);

    const heading = el.shadowRoot.querySelector("h1");
    expect(heading.style.color).to.equal("orange");
  });

  it("sets bottom margin CURRENT", async () => {
    const el = await fixture(html`
      <auro-header level="2" visualLevel="1" size="50" margin="bottom">Hello World!</auro-header>
      <auro-header level="2" visualLevel="1" size="100" margin="bottom">Hello World!</auro-header>
      <auro-header level="2" visualLevel="1" size="150" margin="bottom">Hello World!</auro-header>
      <auro-header level="2" visualLevel="1" size="200" margin="bottom">Hello World!</auro-header>
      <auro-header level="2" visualLevel="1" size="300" margin="bottom">Hello World!</auro-header>
      <auro-header level="2" visualLevel="1" size="400" margin="bottom">Hello World!</auro-header>
      <auro-header level="2" visualLevel="1" size="500" margin="bottom">Hello World!</auro-header>
      <auro-header level="2" visualLevel="1" size="600" margin="bottom">Hello World!</auro-header>
      <auro-header level="2" visualLevel="1" size="800" margin="bottom">Hello World!</auro-header>
      <auro-header level="2" visualLevel="1" size="none" margin="bottom">Hello World!</auro-header>
    `);

    const heading = el.shadowRoot.querySelector("h2");
    expect(heading.className).to.include("util_stackMargin50--bottom");
  });

  it("sets top and bottom margin CURRENT", async () => {
    const el = await fixture(html`
      <auro-header level="2" visualLevel="1" size="50" margin="both">Hello World!</auro-header>
      <auro-header level="2" visualLevel="1" size="100" margin="both">Hello World!</auro-header>
      <auro-header level="2" visualLevel="1" size="150" margin="both">Hello World!</auro-header>
      <auro-header level="2" visualLevel="1" size="200" margin="both">Hello World!</auro-header>
      <auro-header level="2" visualLevel="1" size="300" margin="both">Hello World!</auro-header>
      <auro-header level="2" visualLevel="1" size="400" margin="both">Hello World!</auro-header>
      <auro-header level="2" visualLevel="1" size="500" margin="both">Hello World!</auro-header>
      <auro-header level="2" visualLevel="1" size="600" margin="both">Hello World!</auro-header>
      <auro-header level="2" visualLevel="1" size="800" margin="both">Hello World!</auro-header>
      <auro-header level="2" visualLevel="1" size="none" margin="both">Hello World!</auro-header>
    `);

    const heading = el.shadowRoot.querySelector("h2");
    expect(heading.className).to.include(
      "util_stackMargin50--top util_stackMargin50--bottom",
    );
  });

  it("sets color no color", async () => {
    const el = await fixture(html`
      <auro-header level="1" visualLevel="1">Hello World!</auro-header>
      <auro-header level="2" visualLevel="1">Hello World!</auro-header>
      <auro-header level="3" visualLevel="1">Hello World!</auro-header>
      <auro-header level="4" visualLevel="1">Hello World!</auro-header>
      <auro-header level="5" visualLevel="1">Hello World!</auro-header>
      <auro-header level="6" visualLevel="1">Hello World!</auro-header>
    `);

    const heading = el.shadowRoot.querySelector("h1");
    expect(heading.style.color).to.equal("");
  });

  it("auro-header is accessible", async () => {
    const el = await fixture(html`
      <auro-header level="1" visualLevel="1">Hello World!</auro-header>
    `);

    await expect(el).to.be.accessible();
  });

  it("auro-header custom element is defined", async () => {
    const el = await !!customElements.get("auro-header");

    await expect(el).to.be.true;
  });
});
