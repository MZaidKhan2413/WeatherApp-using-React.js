import { useContext } from "react";
import { WeatherContext } from "../context/WeatherContext";

export default function WeatherBox() {
    const {weatherInfo} = useContext(WeatherContext);

    return (
        <div className="weatherBox">
            {weatherInfo.temp} <br />
            {weatherInfo.cloud} <br />
            {weatherInfo.humidity} <br />
            {weatherInfo.dayEnv} <br />
            {weatherInfo.feelsLike} <br />

            <img src={weatherInfo.icon} alt="Weather Icon" />
        </div>
    )
}
