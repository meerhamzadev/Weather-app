import React from 'react'

function WeatherLocation({ weatherLocation }) {
    return (
        <div className="Location">
            <h1 className="Location__City">
                {weatherLocation.name}
            </h1>
            <h4 className="Location__Country">
                {weatherLocation.country}
            </h4>
        </div>
    )
}

export default WeatherLocation
