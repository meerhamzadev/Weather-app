import React from 'react'

function WeatherConditions({ Condition }) {

    return (
        <section className="weatherCondition">
            <h4 className="weatherCondition__Humidity">{`${Condition.humidity} %`}</h4>
            <span className="weatherCondition__Line"></span>
            <h4 className="weatherCondition__Wind">{`${Condition.wind_kph} km/h`}</h4>
        </section>
    )
}

export default WeatherConditions
