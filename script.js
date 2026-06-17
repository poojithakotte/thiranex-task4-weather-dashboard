const cityInput = document.getElementById("cityInput");
const searchBtn = document.getElementById("searchBtn");
const weatherResult = document.getElementById("weatherResult");

const apiKey = "0940ac6c4f7b3d0c48da516f0bfeea00";

async function getWeather(city){

    try{

        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
        );

        if(!response.ok){
    const errorData = await response.json();
    console.log(errorData);
    throw new Error(errorData.message);
}

        const data = await response.json();
console.log(data);

        weatherResult.innerHTML = `
            <h2>${data.name}</h2>
            <p>Temperature: ${data.main.temp} °C</p>
            <p>Humidity: ${data.main.humidity}%</p>
            <p>Wind Speed: ${data.wind.speed} m/s</p>
            <p>Weather: ${data.weather[0].description}</p>
        `;

    }catch(error){

        weatherResult.innerHTML = `
            <p>${error.message}</p>
        `;

    }
}

searchBtn.addEventListener("click",()=>{

    const city = cityInput.value.trim();

    if(city){
        getWeather(city);
    }

});