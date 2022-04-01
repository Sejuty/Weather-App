let weather = {
  apiKey: "1e18dd0ef375591c26f27198d3cd3d3f",
  fetchWeather: function (city) {
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q="
      +city
      +"&units=metric&appid="
      +this.apiKey
    )
      .then((response) => response.json())
      .then((data) => console.log(data));
  },
  displayWeather: function () {
    //this.fetchWeather();
  }
      
};
