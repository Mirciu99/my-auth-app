import { html, css, LitElement } from 'lit';
import './components/Header.js';
import './components/Footer.js';
import './components/Login.js';
import './components/UserDetails.js';

class MyApp extends LitElement {
  static properties = {
    isAuthenticated: { type: Boolean },
    username: { type: String },
    password: { type: String }
  };

  static styles = css`
    main {
      padding: 1rem;
      min-height: calc(100vh - 100px); 
      box-sizing: border-box;
    }
  `;

  constructor() {
    super();
    this.isAuthenticated = false;
    this.username = '';
    this.password = '';
  }

  render() {
    return html`
      <my-header></my-header>
      <main>
        ${this.isAuthenticated 
          ? html`<user-details .username="${this.username}" .password="${this.password}" @logout="${this.handleLogout}"></user-details>`
          : html`<login-component @login="${this.handleLogin}"></login-component>`}
      </main>
      <my-footer></my-footer>
    `;
  }

  handleLogin(event) {
    this.username = event.detail.username;
    this.password = event.detail.password;
    this.isAuthenticated = true;
  }

  handleLogout() {
    this.isAuthenticated = false;
    this.username = '';
    this.password = '';

    localStorage.removeItem('username');
    localStorage.removeItem('password');
  }
}

customElements.define('my-app', MyApp);
