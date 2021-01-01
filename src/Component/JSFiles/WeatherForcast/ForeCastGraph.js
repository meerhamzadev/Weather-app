import React, { useContext } from 'react';
import { WeatherContext } from '../WeatherContext';
import { Link } from 'react-router-dom';
import { Line } from 'react-chartjs-2';

const ForeCastGraph = () => {
    const [weatherData, updateWeatherData] = useContext(WeatherContext);

    let dummyData = [];
    let dummyLabel = [];

    weatherData.forecast.forecastday[0].hour.map(hours => {
        dummyData.push(hours.temp_c)
        dummyLabel.push(`At ${hours.time.slice(hours.time.indexOf(' ') + 1, hours.time.length)}`)
    })


    let data = {
        labels: [...dummyLabel],
        datasets: [{
            label: 'temprature is ',
            data: [...dummyData],
            borderWidth: 2,
            backgroundColor: 'transparent',
            borderColor: 'blue',
            pointBorderColor: 'red',
            pointBackgroundColor: 'red',
            pointRadius: 5,

        }]
    };

    let options = {
        responsive: true,
        showLine: true,
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    };

    return (
        <section className="Graph">
            <Line
                data={data}
                options={options}

            />
            <Link to="/" className="Graph__Button"> Back </Link>
        </section>
    )

}

export default ForeCastGraph;
