import { html, css, LitElement } from 'lit';

class Header extends LitElement {
  static styles = css`
    header {
      background: #333;
      color: #fff;
      padding: 1rem;
      text-align: center;
    }
  `;

  render() {
    return html`
      <header>
        <h1>Authentification App</h1>
      </header>
    `;
  }
}

customElements.define('my-header', Header);
