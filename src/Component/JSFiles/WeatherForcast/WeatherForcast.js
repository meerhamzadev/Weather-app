import React, { useContext } from 'react'
import { WeatherContext } from '../WeatherContext';

function WeatherForcast() {

    const [weatherData, updateWeatherData] = useContext(WeatherContext);

    let day = [
        'SUN',
        'MON',
        'TUE',
        'WED',
        'THU',
        'FRI',
        'SAT'
    ];
    return (
        <section className="forecastCardBody">
            {
                weatherData.forecast.forecastday.slice(1, weatherData.forecast.forecastday.length).map(forecastday => {
                    return (

                        <div className="forecastCard">
                            <h1 className="forecastCard__Day" >{day[new Date(forecastday.date).getDay()]}</h1>
                            <div className="forecastCard__Img">
                                <img src={forecastday.day.condition.icon}
                                    alt="not available"
                                />

                            </div>

                            <h3 className="forecastCard__temperature">{`${forecastday.day.avgtemp_c}°`}</h3>

                            <h4 className="forecastCard__Condition">{forecastday.day.condition.text}</h4>
                        </div>
                    );
                })
            }
        </section>
    )
}

export default WeatherForcast;
