import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useContext, useState } from 'react';
import { WeatherContext } from '../context/WeatherContext';
import axios from "axios";

export default function SearchBox(){
    const [city, setCity] = useState("");
    const {weatherInfo, setWeatherInfo} = useContext(WeatherContext);
    const API_KEY = "60a5618e81a8422dbcd92740242205";
    const API_URL = "https://api.weatherapi.com/v1/current.json?"

    async function searchWeather() {
        try {
            let res = await axios.get(`${API_URL}key=${API_KEY}&q=${city}&aqi=no`);
            let data = res.data.current;
            console.log(data);
            setWeatherInfo({
                ...weatherInfo,
                city: city,
                temp: data.temp_c,
                humidity: data.humidity,
                feelsLike: data.feelslike_c,
                dayEnv: data.condition.text,
                icon: data.condition.icon,
                windSpeed: data.wind_kph,
                visibility: data.vis_km,
                pressure: data.pressure_mb,
                windDirection: data.wind_dir,
            })

        } catch (error) {
            console.error("Error fetching weather data:", error);
        }
    }
    
    const handleSubmit = async (evt)=>{
        evt.preventDefault();
        await searchWeather();
        setCity("")
    }

    const handleChange = (evt)=>{
        setCity(evt.target.value)
    }

    return (
        <form className="searchBox d-flex flex-column align-items-center p-2" onSubmit={handleSubmit}>
            <TextField id="city" label="City Name" variant="standard" value={city} className='p-1 my-3'  onChange={handleChange}/>
            <Button variant="contained" className='searchBtn' type='Submit'>search</Button>
        </form>
    )
}