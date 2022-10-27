const API_KEY = "7196fafe1803dddb44ff441e30b07bc2";

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      const weatherElement = document.querySelector(
        "#weather span:first-child"
      );
      const cityElement = document.querySelector("#weather span:last-child");
      const weather = data.weather[0].main;
      const temp = data.main.temp;
      const city = data.name;

      console.log(data);

      conditionOfWeather(weather, weatherElement, temp);
      conditionOfCity(city, cityElement);

      city.innerText = city;
    });
}

function conditionOfWeather(weather, weatherElement, temp) {
  weatherElement.classList = "material-symbols-outlined button";

  switch (weather) {
    case "Haze":
      weatherElement.innerText = "Cloudy Filled";
      break;
    case "Clouds":
      weatherElement.innerText = "Cloudy";
      break;
    case "Clear":
      weatherElement.innerText = "Sunny";
      break;
    case "Rain":
      weatherElement.innerText = "Rainy";
      break;
    case "Snow":
      weatherElement.innerText = "Snowing";
    default:
      weatherElement.classList = "none";
      weatherElement.innerText = "데이터 불러오기 실패";
      break;
  }
}

function conditionOfCity(city, cityElement) {
  let nowCity;
  switch (city) {
    case "Hanam":
      nowCity = "하남시";
      break;
    case "Seoul":
      nowCity = "서울시";
      break;
    default:
      nowCity = "데이터 불러오기 실패";
      break;
  }

  cityElement.innerText = nowCity;
}

function onGeoErr() {
  alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoErr);
