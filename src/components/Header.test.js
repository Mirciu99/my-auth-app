/* eslint-disable import/no-useless-path-segments */
/* eslint-disable no-unused-expressions */
/* eslint-disable import/no-extraneous-dependencies */

import { html, fixture, expect } from '@open-wc/testing';
import '../components/Header.js';

describe('Header', () => {
  it('should render the header with correct text', async () => {
    const el = await fixture(html`<my-header></my-header>`);
    const headerText = el.shadowRoot.querySelector('h1').textContent;
    expect(headerText).to.equal('Authentification App');
  });
});
