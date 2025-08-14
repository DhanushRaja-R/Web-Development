let weather = async (city) => {
    try {
        let response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=99c9c29c43601ad5ca2775e5573f8255&units=metric`
        );

        if (!response.ok) {
            throw new Error("City not found");
        }

        let data = await response.json();
        console.log(data);

        let weatherData = {
            city: data.name,
            country: data.sys.country,
            temperature: data.main.temp,
            description: data.weather[0].description,
            humidity: data.main.humidity,
            windSpeed: data.wind.speed,
        };
        return weatherData;
    } catch (error) {
        alert(error.message);
        return null;
    }
};

let displayWeather = async (city) => {
    let weatherData = await weather(city);
    if (!weatherData) return; // Stop if error happened

    document.getElementById("city").innerText = `City: ${weatherData.city}, ${weatherData.country}`;
    document.getElementById("temperature").innerText = `Temperature: ${weatherData.temperature}°C`;
    document.getElementById("description").innerText = `Description: ${weatherData.description}`;
    document.getElementById("humidity").innerText = `Humidity: ${weatherData.humidity}%`;
    document.getElementById("windSpeed").innerText = `Wind Speed: ${weatherData.windSpeed} m/s`;
};

// Search button click
document.getElementById("searchButton").addEventListener("click", () => {
    let city = document.getElementById("cityInput").value.trim();
    if (city) {
        displayWeather(city);
    } else {
        alert("Please enter a city name.");
    }
});

// Press Enter in input
document.getElementById("cityInput").addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        let city = document.getElementById("cityInput").value.trim();
        if (city) {
            displayWeather(city);
        } else {
            alert("Please enter a city name.");
        }
    }
});
