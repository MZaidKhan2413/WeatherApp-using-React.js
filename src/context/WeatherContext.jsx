import { createContext, useState } from "react";

export const WeatherContext = createContext();

export default function WeatherProvider({children}) {
    const [weatherInfo, setWeatherInfo] = useState({
        temp: "",
        humidity: "",
        feelsLike: "",
        cloud: "",
        dayEnv: "",
        icon: "",
    })

    const providerValue = {weatherInfo, setWeatherInfo}

    return (
        <WeatherContext.Provider value={providerValue}>
            {children}
        </WeatherContext.Provider>
    )
}