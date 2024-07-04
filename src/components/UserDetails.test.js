/* eslint-disable import/no-extraneous-dependencies */

import { html, fixture, expect, oneEvent } from '@open-wc/testing';
import '../components/UserDetails.js';

describe('UserDetails', () => {
  it('should render user details correctly', async () => {
    const el = await fixture(html`<user-details username="testuser" password="testpass"></user-details>`);
    const usernameText = el.shadowRoot.querySelector('p:nth-child(2)').textContent;
    const passwordText = el.shadowRoot.querySelector('p:nth-child(3)').textContent;
    expect(usernameText).to.equal('Your username: testuser');
    expect(passwordText).to.equal('Your password: testpass');
  });

  it('should dispatch logout event on button click', async () => {
    const el = await fixture(html`<user-details username="testuser" password="testpass"></user-details>`);
    setTimeout(() => el.shadowRoot.querySelector('button').click());
    const { type } = await oneEvent(el, 'logout');
    expect(type).to.equal('logout');
  });
});
