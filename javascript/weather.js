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

      conditionOfWeather(weather, weatherElement, temp);
      conditionOfCity(city, cityElement);

      city.innerText = city;
    });
}

function conditionOfWeather(weather, weatherElement, temp) {
  let nowWeather;
  switch (weather) {
    case "Haze":
      nowWeather = "안개";
      break;
    case "Clouds":
      nowWeather = "구름";
      break;
    case "Clear":
      nowWeather = "맑음";
      break;
    default:
      nowWeather = "데이터 불러오기 실패";
      break;
  }

  weatherElement.innerText = `날씨:${nowWeather} 평균 기온:${temp}도`;
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
