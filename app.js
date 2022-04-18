let weather = {
  apiKey: "1e18dd0ef375591c26f27198d3cd3d3f",
  fetchWeather: function (city) {
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=" +
        city +
        "&units=metric&appid=" +
        this.apiKey
    )
      .then((response) => {
        if(response.status === 200) {
        response.json().then((data) => console.log(this.displayWeather(data)));
        }
        else if(response.status === 404) {
          alert("City not found");
        }
      });
  },
  displayWeather: function (data) {
    const { name } = data;
    const { description, icon } = data.weather[0];
    const { temp, humidity } = data.main;
    const { speed } = data.wind;

    console.log(name, description, icon, temp, humidity, speed);
    document.querySelector(".city").innerText = "Weather in " + name;
    document.querySelector(".description").innerText = description;
    document.querySelector(".temp").innerText = temp + "°C";
    document.querySelector(".humidity").innerText =
      "Humidity: " + humidity + "%";
    document.querySelector(".wind").innerText = "Wind speed: " + speed + "m/s";
    document.querySelector(".icon").src =
      "https://openweathermap.org/img/wn/" + icon + ".png";
    document.querySelector(".weather").classList.remove("loading");
    document.body.style.backgroundImage =
      "url('https://source.unsplash.com/1600x900/?" + name + "')";
  },

  search: function () {
    this.fetchWeather(document.querySelector(".search_bar").value);
  },
};

document.querySelector(".search_button").addEventListener("click", () => {
  weather.search();
});
document.querySelector(".search_bar").addEventListener("keyup", (e) => {
  if (e.keyCode === 13) {
    weather.search();
  }
});
weather.fetchWeather("Sylhet");
