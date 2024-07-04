import { html, css, LitElement } from 'lit';
import '@lion/form/define';
import '@lion/input/define';
import '@lion/button/define';

class Login extends LitElement {
  static properties = {
    errorMessage: { type: String }
  };

  static styles = css`
  :host {
    display: block;
    padding: 16px;
    max-width: 400px;
    margin: 0 auto;
    margin-top: 4rem;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    background-color: #fff;
    border-radius: 8px;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  button {
      padding: 0.75rem 1.5rem;
      font-size: 1.2rem;
      background-color: #007bff;
      color: white;
      border: none;
      border-radius: 2px;
      cursor: pointer;
      margin-top: 0.5rem;
    }

    button:hover {
      background-color: #0056b3;
    }

  .error-message {
    color: red;
    font-size: 1rem;
    margin-top: -1rem;
    margin-bottom: 1rem;
  }

  h2 {
    text-align: center;
    margin-bottom: 1rem;
    font-size: 2rem;
    color: #333;
  }
`;

  constructor() {
    super();
    this.errorMessage = '';
  }

  connectedCallback() {
    super.connectedCallback();

    const username = localStorage.getItem('username');
    const password = localStorage.getItem('password');

    if (username && password) {
      this.dispatchEvent(new CustomEvent('login', {
        detail: { username, password },
        bubbles: true,
        composed: true
      }));
    }
  }

  render() {
    return html`
      <lion-form>
        <form @submit="${this.handleSubmit}">
          <lion-input name="username" label="Username"></lion-input>
          <lion-input type="password" name="password" label="Password"></lion-input>
          ${this.errorMessage ? html`<div class="error-message">${this.errorMessage}</div>` : ''}
          <button>Login</button>
        </form>
      </lion-form>
    `;
  }

  handleSubmit(event) {
    event.preventDefault();
    const form = this.shadowRoot.querySelector('form');
    const formData = new FormData(form);
    const username = formData.get('username');
    const password = formData.get('password');

    if (!password) {
      this.errorMessage = 'Password is required.';
      return;
    }

    this.errorMessage = '';

    console.log(`Username: ${username}, Password: ${password}`);

    localStorage.setItem('username', username);
    localStorage.setItem('password', password);

    this.dispatchEvent(new CustomEvent('login', {
      detail: { username, password },
      bubbles: true,
      composed: true
    }));
  }
}

customElements.define('login-component', Login);
