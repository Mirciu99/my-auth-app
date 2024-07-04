import { html, css, LitElement } from 'lit';

class Footer extends LitElement {
  static styles = css`
    footer {
      background: #333;
      color: #fff;
      padding: 1rem;
      text-align: center;
      position: fixed;
      bottom: 0;
      width: 100%;
    }
  `;

  render() {
    return html`
      <footer>
        <p>&copy; 2024 Application</p>
      </footer>
    `;
  }
}

customElements.define('my-footer', Footer);
