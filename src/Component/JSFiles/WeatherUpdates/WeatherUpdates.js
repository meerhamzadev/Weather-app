import React, { useContext } from 'react'
import CurrentWeather from './CurrentWeather';
import WeatherLocation from './WeatherLocation';
import WeatherConditions from './WeatherConditions';
import { WeatherContext } from '../WeatherContext';
import WeatherSearch from './WeatherSearch';

const WeatherUpdate = () => {

    const [weatherData, updateWeatherData] = useContext(WeatherContext);
    return (
        <section className="WeatherUpdates">
            <CurrentWeather current={weatherData.current} />
            <WeatherLocation weatherLocation={weatherData.location} />
            <WeatherConditions Condition={weatherData.current} />
            <WeatherSearch />
        </section>
    )
}

export default WeatherUpdate
