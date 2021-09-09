import React, { useContext } from 'react';
import axios from 'axios';
import { WeatherContext } from '../WeatherContext';

function WeatherSearch() {

    const [weatherData, updateWeatherData] = useContext(WeatherContext);

    const weatherSearchData = async e => {
        e.preventDefault();
        const response = await axios.get(`https://api.weatherapi.com/v1/forecast.json?key=b62e36f1e34345028c3164050202612&q=${e.target.scity.value.replace(/" "/g, "")}&days=10`);
        updateWeatherData(response.data)
    }
    return (
        <form className="weather-search" onSubmit={weatherSearchData} >
            <input type="text" placeholder="Enter the name of the city" name="scity" />
            <button type="submit"><i class="fa fa-search" aria-hidden="true"></i></button>
        </form>
    )
}

export default WeatherSearch
