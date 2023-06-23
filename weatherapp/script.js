const apiKey = '5a1f2479218d4ad5b4883824232306'; // Replace with your actual API key

document.getElementById('weatherForm').addEventListener('submit', function (e) {
  e.preventDefault();
  const city = document.getElementById('cityInput').value;
  getWeather(city);
});

function getWeather(city) {
  const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      const weatherInfo = document.getElementById('weatherInfo');
      weatherInfo.innerHTML = `
        <h2>${data.location.name}, ${data.location.country}</h2>
        <p>Current temperature: ${data.current.temp_c}°C</p>
        <p>Condition: ${data.current.condition.text}</p>
        <img src="${data.current.condition.icon}" alt="Weather Icon">
      `;
    })
    .catch(error => {
      const weatherInfo = document.getElementById('weatherInfo');
      weatherInfo.innerHTML = '<p>Error retrieving weather data</p>';
    });
}
