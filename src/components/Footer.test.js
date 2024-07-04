/* eslint-disable no-unused-expressions */
/* eslint-disable import/no-extraneous-dependencies */
import { fixture, html, expect } from '@open-wc/testing';
import '../components/Footer.js';

describe('Footer Component', () => {
  it('should be defined', async () => {
    const el = await fixture(html`<my-footer></my-footer>`);
    expect(el).to.be.instanceOf(HTMLElement);
  });

  it('should have the correct structure', async () => {
    const el = await fixture(html`<my-footer></my-footer>`);
    const footer = el.shadowRoot.querySelector('footer');
    expect(footer).to.exist;
    expect(footer).to.have.trimmed.text('© 2024 My Application');
  });
});
