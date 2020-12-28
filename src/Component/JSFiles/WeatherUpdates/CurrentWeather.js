import React from 'react'

function CurrentWeather({ current }) {
    return (
        <div className="currentWeather">
            <h1 className="currentWeather__temperature">
                {`${current.temp_c}°`}
            </h1>
            <p className="currentWeather__conditions">
                {current.condition.text}
            </p>
        </div>

    )
}

export default CurrentWeather;
