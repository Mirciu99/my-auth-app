/* eslint-disable import/no-unresolved */
/* eslint-disable no-unused-expressions */
/* eslint-disable import/no-extraneous-dependencies */

import { html, fixture, expect } from '@open-wc/testing';
import '../src/my-app.js';

describe('MyApp', () => {
  it('should render the login component when not authenticated', async () => {
    const el = await fixture(html`<my-app></my-app>`);
    expect(el.shadowRoot.querySelector('login-component')).to.exist;
    expect(el.shadowRoot.querySelector('user-details')).to.not.exist;
  });

  it('should render the user details component when authenticated', async () => {
    const el = await fixture(html`<my-app></my-app>`);
    el.handleLogin({ detail: { username: 'testuser', password: 'testpass' } });
    await el.updateComplete;
    expect(el.shadowRoot.querySelector('user-details')).to.exist;
    expect(el.shadowRoot.querySelector('login-component')).to.not.exist;
  });

  it('should log out and show login component again', async () => {
    const el = await fixture(html`<my-app></my-app>`);
    el.handleLogin({ detail: { username: 'testuser', password: 'testpass' } });
    await el.updateComplete;
    el.handleLogout();
    await el.updateComplete;
    expect(el.shadowRoot.querySelector('login-component')).to.exist;
    expect(el.shadowRoot.querySelector('user-details')).to.not.exist;
  });
});
