import React, { useState, useEffect } from 'react'
import axios from 'axios';
import CurrentWeather from './CurrentWeather';

const WeatherUpdate = () => {
    const [weatherData, updateWeatherData] = useState({})
    const [state, updateState] = useState(false)
    useEffect(() => {
        axios.get('http://api.weatherapi.com/v1/forecast.json?key=b62e36f1e34345028c3164050202612&q=Lahore&days=10')
            .then(response => {
                updateWeatherData(response.data);
                updateState(true);
            })
    }, [])

    return (
        <section className="upperPortion">
            {
                state ?
                    <>
                        <CurrentWeather current={weatherData.current} />
                    </>
                    :
                    <>
                        <h1>Loading......</h1>
                    </>

            }
        </section>
    )
}

export default WeatherUpdate
