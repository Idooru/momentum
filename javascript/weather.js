const API_KEY = "7196fafe1803dddb44ff441e30b07bc2";
const weatherElement = document.querySelector("#now-weather span");
const weatherImage = document.querySelector("#now-weather img");

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`;

  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      const temp = data.main.temp;
      const city = data.name;
      const weatherDescription = data.weather[0].description;
      const weatherIcon = data.weather[0].icon;
      const weatherIconAddress = `https://openweathermap.org/img/wn/${weatherIcon}@2x.png`;

      weatherElement.innerText = `${temp} °C / @${city} / ${weatherDescription}`;
      weatherImage.setAttribute("src", weatherIconAddress);
    })
    .catch((err) => console.error(err));
}

function onGeoErr() {
  alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoErr);
