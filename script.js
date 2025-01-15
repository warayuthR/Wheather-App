const apiKey = '0bdc967215c22a2d075c021a483a66cd'; // ใส่ API Key ของคุณที่นี่

const weatherResult = document.getElementById('weatherResult');
const searchBtn = document.getElementById('searchBtn');
const cityInput = document.getElementById('cityInput');

searchBtn.addEventListener('click', () => {
  const city = cityInput.value;
  if (city === '') {
    alert('Please enter a city name');
    return;
  }

  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
    .then(response => response.json())
    .then(data => {
      if (data.cod === '404') {
        weatherResult.innerHTML = `<p>City not found. Please try again.</p>`;
      } else {
        weatherResult.innerHTML = `
          <h2>${data.name}, ${data.sys.country}</h2>
          <p>Temperature: ${data.main.temp}°C</p>
          <p>Weather: ${data.weather[0].description}</p>
          <p>Humidity: ${data.main.humidity}%</p>
          <p>Wind Speed: ${data.wind.speed} m/s</p>
        `;
      }
    })
    .catch(error => {
      weatherResult.innerHTML = `<p>Error fetching weather data.</p>`;
    });
});
