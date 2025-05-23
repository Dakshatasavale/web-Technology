async function getWeather() {
  const city = document.getElementById("city-input").value;
  const unit = document.getElementById("unit-select").value;
  const apiKey = "YOUR_API_KEY_HERE"; // Replace this
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${unit}&appid=${apiKey}`;

  document.getElementById("error").innerText = "";
  document.getElementById("weather-info").innerHTML = "";

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("City not found");
    }

    const data = await response.json();
    const temperature = data.main.temp;
    const condition = data.weather[0].description;
    const icon = data.weather[0].icon;
    const unitSymbol = unit === "metric" ? "°C" : "°F";

    document.getElementById("weather-info").innerHTML = `
        <h2>${data.name}</h2>
        <p>Temperature: ${temperature}${unitSymbol}</p>
        <p>Condition: ${condition}</p>
        <img id="weather-icon" src="https://openweathermap.org/img/wn/${icon}@2x.png" alt="Weather icon">
      `;
  } catch (error) {
    document.getElementById("error").innerText = error.message;
  }
}
