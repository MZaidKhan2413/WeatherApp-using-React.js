import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { useContext } from "react";
import { WeatherContext } from "../context/WeatherContext";
import weatherImg from "../assets/weather.jpg";
import WeatherDetails from "./WeatherDetails";

export default function WeatherBox() {
  const { weatherInfo } = useContext(WeatherContext);
  const weatherDetailArr = [
    { heading: "Feels Like", value: weatherInfo.feelsLike + "°c" },
    { heading: "Humidity", value: weatherInfo.humidity + "%" },
    { heading: "Wind Direction", value: weatherInfo.windDirection },
    { heading: "Wind Speed", value: weatherInfo.windSpeed + " km/h" },
    { heading: "Visibility", value: weatherInfo.visibility + " km" },
    { heading: "Air Pressure", value: weatherInfo.pressure + " hPa" },
  ];

  if (weatherInfo.feelsLike != null) {
    return (
      <Card className="weatherBox">
        <CardMedia
          sx={{ height: 200 }}
          component="img"
          image={weatherImg}
          title="weather-img"
          className="weatherBox-img"
        />
        <CardContent>
          <Typography gutterBottom variant="h4" component="div">
            <div className="fs-6">{weatherInfo.city}</div>
            <span className="me-2 fw-bold">{weatherInfo.dayEnv}</span>
            <span className="fw-bold">{weatherInfo.temp}&#176;c</span>
            <img src={weatherInfo.icon} alt="Day" className="weather-icon"/>
          </Typography>
          <h5>Weather Details</h5>
          <div className="weatherDetails">
            {weatherDetailArr.map((obj, idx) => (
              <WeatherDetails
                heading={obj.heading}
                value={obj.value}
                key={idx}
              />
            ))}
          </div>
        </CardContent>
      </Card>
    );
  }
}
