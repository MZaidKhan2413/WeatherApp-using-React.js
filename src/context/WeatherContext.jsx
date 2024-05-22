import { createContext, useState } from "react";

export const WeatherContext = createContext();

export default function WeatherProvider({children}) {
    const [weatherInfo, setWeatherInfo] = useState({
        city: "Bikaner",
        temp: "45",
        humidity: "10",
        feelsLike: "46",
        windSpeed: "10",
        visibility: "16",
        pressure: "997",
        windDirection: "NNE",
        dayEnv: "Sunny",
        icon: "//cdn.weatherapi.com/weather/64x64/day/113.png",
    })

    const providerValue = {weatherInfo, setWeatherInfo}

    return (
        <WeatherContext.Provider value={providerValue}>
            {children}
        </WeatherContext.Provider>
    )
}