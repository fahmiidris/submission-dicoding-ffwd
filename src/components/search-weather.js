class SearchWeather extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({mode: 'open'});
  }

  connectedCallback() {
    this.render();
  }

  set clickEvent(event) {
    this._clickEvent = event;
    this.render();
  }


  get value() {
    return this.shadowDOM.querySelector('#searchElement').value;
  }

  render() {
    this.shadowDOM.innerHTML = `
      <style>
        .search {
          display: flex;
          justify-content: center;
          align-items: center;
          margin: 0 auto;
          gap: 1rem;
          max-width: 720px;
        }

        input[type=search] {
          width: 100%;
          background-color: #FAFBFC;
          border: 1px solid rgba(27, 31, 35, 0.15);
          border-radius: 6px;
          box-shadow: rgba(27, 31, 35, 0.04) 0 1px 0, rgba(255, 255, 255, 0.25) 0 1px 0 inset;
          color: #24292E;
          margin: 8px 0;
          outline: none;
          padding: 8px;
          box-sizing: border-box;
          transition: 0.3s;
          font-size: 14px;
        }
        
        input[type=search]:focus {
          border-color: dodgerBlue;
          box-shadow: 0 0 8px 0 dodgerBlue;
        }

        button[type=submit] {
          appearance: none;
          background-color: #FAFBFC;
          border: 1px solid rgba(27, 31, 35, 0.15);
          border-radius: 6px;
          box-shadow: rgba(27, 31, 35, 0.04) 0 1px 0, rgba(255, 255, 255, 0.25) 0 1px 0 inset;
          box-sizing: border-box;
          color: #24292E;
          cursor: pointer;
          display: inline-block;
          font-size: 14px;
          padding: 9px 16px;
          position: relative;
          transition: background-color 0.2s cubic-bezier(0.3, 0, 0.5, 1);
          user-select: none;
          touch-action: manipulation;
          vertical-align: middle;
          white-space: nowrap;
          word-wrap: break-word;
        }

        button[type=submit]:hover {
          background-color: #F3F4F6;
          text-decoration: none;
          transition-duration: 0.1s;
        }

        button[type=submit]:disabled {
          background-color: #FAFBFC;
          border-color: rgba(27, 31, 35, 0.15);
          color: #959DA5;
          cursor: default;
        }

        button[type=submit]:active {
          background-color: #EDEFF2;
          box-shadow: rgba(225, 228, 232, 0.2) 0 1px 0 inset;
          transition: none 0s;
        }

        button[type=submit]:focus {
          outline: 1px transparent;
        }

        button[type=submit]:before {
          display: none;
        }
      </style>
      
      <div id="search" class="search">
        <input placeholder="Masukan nama daerah yang ingin kamu cari ..." id="searchElement" type="search">
        <div>
          <button id="searchButtonElement" type="submit">Search</button>
        </div>
      </div>
    `;

    this.shadowDOM.querySelector('#searchButtonElement').addEventListener('click', this._clickEvent);
  }
}

customElements.define('search-weather', SearchWeather);
