/* eslint-disable import/no-unresolved */
/* eslint-disable no-unused-expressions */
/* eslint-disable import/no-extraneous-dependencies */

import { html, fixture, expect, oneEvent } from '@open-wc/testing';
import "../components/Login.js";

describe('Login', () => {
  it('should render the login form', async () => {
    const el = await fixture(html`<login-component></login-component>`);
    expect(el.shadowRoot.querySelector('form')).to.exist;
    expect(el.shadowRoot.querySelector('lion-input[name="username"]')).to.exist;
    expect(el.shadowRoot.querySelector('lion-input[name="password"]')).to.exist;
  });

  it('should show error message if password is missing', async () => {
    const el = await fixture(html`<login-component></login-component>`);
    el.shadowRoot.querySelector('lion-input[name="username"]').modelValue = 'testuser';
    el.shadowRoot.querySelector('form').dispatchEvent(new Event('submit'));
    await el.updateComplete;
    const {shadowRoot} = el;

    expect(shadowRoot.querySelector('.error-message')).to.exist;
  });

  it('should dispatch login event on valid submit', async () => {
    const el = await fixture(html`<login-component></login-component>`);
    el.shadowRoot.querySelector('lion-input[name="username"]').modelValue = 'testuser';
    el.shadowRoot.querySelector('lion-input[name="password"]').modelValue = 'testpass';
    setTimeout(() => el.shadowRoot.querySelector('form').dispatchEvent(new Event('submit')));
    const { detail } = await oneEvent(el, 'login');
    expect(detail.username).to.equal('testuser');
    expect(detail.password).to.equal('testpass');
  });
});
