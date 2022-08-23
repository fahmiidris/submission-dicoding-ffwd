class MyNav extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowDOM.innerHTML = `
      <style>
        nav {
          height: 64px;
          border-bottom: 1px solid #e2e8f0;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        #menu {
          display: flex;
          list-style: none;
        }

        #menu li {
          margin-left: 8px;
          margin-right: 8px;
        }
        
        a {
          text-decoration: none;
          color: #1e293b;
          font-weight: 600;
        }
      </style>
    
      <nav>
        <div class="logo">
          <a href="#home">Cuaca Indonesia</a>
        </div>
      </nav>
    `;
  }
}

customElements.define('my-nav', MyNav);
