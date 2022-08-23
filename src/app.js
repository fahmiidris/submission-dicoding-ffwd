import './components/search-weather';
import './components/show-weather';

import axios from 'axios';

const app = () => {
  const searchWeatherElement = document.querySelector('search-weather');
  const showWeatherElement = document.querySelector('show-weather');

  const onButtonSearchClicked = async () => {
    if (searchWeatherElement.value) {
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${searchWeatherElement.value}&appid=7af85fa0c90a965e5b887987f8648b4e`
        );
        renderResult(response);
      } catch (error) {
        if (error.response) {
          fallbackResult(error.response.data.message);
        }
      }
    } else {
      fallbackResult(
        'Field tidak boleh kosong, pastikan kamu sudah mengisi dengan nama kota yang ingin kamu cari'
      );
    }
  };

  const renderResult = (result) => {
    showWeatherElement.weather = result;
  };

  const fallbackResult = (message) => {
    showWeatherElement.renderError(message);
  };

  searchWeatherElement.clickEvent = onButtonSearchClicked;
};

export default app;
