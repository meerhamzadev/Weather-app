import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import $ from 'jquery';
const InputComponent = () => {
    const [state, updstate] = useState(null);
    const [loading, chloading] = useState(false);
    const [date, currentdate] = useState(" ");
    const [time, currenttime] = useState(" ")
    let info = (e) => {
        chloading(false);
        e.preventDefault();
        let data = e.target.data.value;
        axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${data}
       &units=metric&appid=d2dd372e6ab437ebf335f6caecfb6003`).then(resp => {
            updstate(resp.data);
            chloading(true);
            $('.data-body').fadeIn("slow")
        })
    }

    useEffect(() => {
        let today = new Date();
        let Time = today.toLocaleTimeString(undefined, {
            hour: '2-digit',
            minute: '2-digit',
        })
        currenttime(Time)
        let CrDate = today.toDateString('en-GB', {
            day: 'numeric',
            month: 'short',
            year: 'numeric'
        })
        currentdate(CrDate)
    })

    return (
        <>

            <form onSubmit={info} className="form-body" >
                <div className="time-date">
                    <h1>{date}</h1>
                    <h2>{time}</h2>
                </div>
                <div className="form-setup">
                    <input name="data" placeholder="Enter the name of city" /><br></br>
                    <button type="submit">Check</button>
                </div>
            </form>

            <div>
                {!loading ?
                    <h1> </h1>

                    : <div className="data">
                        <div className="data-body" >
                            <img src={`http://openweathermap.org/img/w/${state.weather[0].icon}.png`}
                                alt="something went wrong" />
                            <h3>{`Country / Region:  ${state.sys.country}`}</h3>
                            <h3>{`Maximum temperature:  ${state.main.temp_max} °C`}</h3>
                            <h3>{`Minimum temperature:   ${state.main.temp_min} °C`}</h3>
                            <h3>{`Feeling like:   ${state.main.feels_like} °C`}</h3>
                            <h3>{`Humidity level:  ${state.main.humidity}%`}</h3>
                            <h3>{`Weather Condition:  ${state.weather[0].main}`}</h3>
                        </div>
                    </div>
                }
            </div>
        </>
    );
}
export default InputComponent;
