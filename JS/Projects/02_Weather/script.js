document.addEventListener("DOMContentLoaded", () => {
    let weatherBtn = document.querySelector("#get-weather-btn");
    let cityInput = document.querySelector("#city-input");
    let weatherInfoDisplay = document.querySelector("#weather-info");
    let cityName = document.querySelector("#city-name");
    let temperature = document.querySelector("#temperature");
    let description = document.querySelector("#description");


    weatherBtn.addEventListener("click", () => {
        // console.log("Clicked");
        let city = cityInput.value.trim();
        // console.log(city);
        if (!city) return;



    })

    function fetchWeatherData(city) {
        
    }

    function displayWeatherData() {
        
    }
})