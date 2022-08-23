import moment from 'moment';
import { getCelciusFromKelvin } from '../utils/helpers';

class ShowWeather extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: 'open' });
  }

  set weather(weather) {
    console.log(weather);
    this._weather = weather.data;
    this.render();
  }

  render() {
    this.shadowDOM.innerHTML = `
      <style>
        .card {
          display: flex;
          flex-direction: column;
          margin-top: 16px;
          gap: 12px;
          border: 1px solid #22d3ee;
          background-image: linear-gradient(#06b6d4, #22d3ee);
          padding: 16px 24px;
          color: white;
          border-radius: 5px;
          position: relative;
        }

        h2, p {
          margin: 1px 0;
        }

        .celcius {
          font-size: 64px;
          font-weight: 700;
        }

        sup {
          font-size: 1.5rem;
          line-height: 2rem; 
          font-weight: 600; 
        }

        .main {
          font-size: 1.5rem;
          line-height: 2rem;
          font-weight: 600;
        }

        .icon {
          width: auto; 
          height: 8rem;
          position: absolute;
          right: 0;
          top: 0;
        }
      </style>

      <div class="card">
        <h2>Cuaca di ${this._weather.name}</h2>
        <p>${moment().format('DD/MM/YYYY hh:mm')}</p>

        <div class="celcius">
          ${getCelciusFromKelvin(this._weather.main.temp)}
          <sup>&#8451;</sup>
        </div>

        <div class="main">${this._weather.weather[0].main}</div>

        <img
          class="icon"
          src="http://openweathermap.org/img/wn/${this._weather.weather[0].icon}@2x.png"
          alt="icon"
        />
      </div>
    `;
  }

  renderError(message) {
    this.shadowDOM.innerHTML = `
      <style>
        .error {
          border: 1px solid;
          margin: 10px 0px;
          padding: 15px 10px 15px 50px;
          background-repeat: no-repeat;
          background-position: 10px center;
          color: white;
          text-align: center;
			    background-color: #FFBABA;
          border-radius: 5px
        }
      </style>

      <div class="error">
        ${message}
      </div>
    `;
  }
}

customElements.define('show-weather', ShowWeather);
