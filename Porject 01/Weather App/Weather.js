const apiKey = "3d645684240f8ec832abf6e4efa6feab"
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q="
const searchBox = document.querySelector('.search input');
const searchBtn = document.querySelector('.search button');
const weatherIcon = document.querySelector('.weather-icon');
async function chechWeather(city) {
    const Response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    if (Response.status == 404) {
        document.querySelector('.error').style.display = "block";
        document.querySelector('.weather').style.display = "none";
    } else {


        var data = await Response.json();
        console.log(data);
        document.querySelector('.city').innerHTML = data.name;
        document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector('.humidity').innerHTML = data.main.humidity + "%";
        document.querySelector('.wind').innerHTML = data.wind.speed + "Km/h";

        if (data.weather[0].main == "Clouds") {
            weatherIcon.src = "images/clouds.png";
        } else if (data.weather[0].main == "Rain") {
            weatherIcon.src = "images/rain.png";
        }
        else if (data.weather[0].main == 'Clear') {
            weatherIcon.src = "images/clear.png";
        }
        else if (data.weather[0].main == "Drizzle") {
            weatherIcon.src = "images/drizzle.png";
        }
        else if (data.weather[0].main == "snow") {
            weatherIcon.src = "images/snow.png";
        }
        else if (data.weather[0].main == "mist") {
            weatherIcon.src = "images/mist.png";
        }
        document.querySelector('.weather').style.display = "block"
        document.querySelector('.error').style.display ="none"
    }
}
searchBtn.addEventListener("click", () => {
    chechWeather(searchBox.value);
})


// async function chechWeather(city){
//     const Response = await fetch(apiUrl +city+  `&appid=${apiKey}`);
//     var data = await Response.json();
//     console.log(data);
//     // document.querySelector('city').innerHTML = data.name;
//     // document.querySelector('temp').innerHTML = Math.round(data.main.temp) + "°C";
//     // document.querySelector('humidity').innerHTML= data.main.humidity +"%";
//     // document.querySelector('wind').innerHTML = data.wind.speed + "Km/h";
// }
// chechWeather("patna")