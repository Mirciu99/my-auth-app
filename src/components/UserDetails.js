import { html, css, LitElement } from 'lit';

class UserDetails extends LitElement {
  static properties = {
    username: { type: String },
    password: { type: String }
  };

  static styles = css`
    :host {
      display: block;
      padding: 16px;
      max-width: 400px;
      margin: 0 auto;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
      background-color: #fff;
      border-radius: 8px;
    }

    .user-details {
      padding: 1.5rem;
      background-color: #fff;
      border: 1px solid #ccc;
      border-radius: 8px;
      max-width: 100%;
      text-align: center;
    }

    h2 {
      font-size: 1.8rem;
      color: #333;
    }

    p {
      font-size: 1.2rem;
      margin: 0.5rem 0;
      color: #555;
    }

    button {
      padding: 0.75rem 1.5rem;
      font-size: 1.2rem;
      background-color: #007bff;
      color: white;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      margin-top: 1rem;
    }

    button:hover {
      background-color: #0056b3;
    }
  `;

  render() {
    return html`
      <div class="user-details">
        <h2>Welcome to the User Details Page!</h2>
        <p>Your username: ${this.username}</p>
        <p>Your password: ${this.password}</p>
        <button @click="${this.handleLogout}">Logout</button>
      </div>
    `;
  }

  handleLogout() {
    this.dispatchEvent(new CustomEvent('logout', { bubbles: true, composed: true }));
  }
}

customElements.define('user-details', UserDetails);
