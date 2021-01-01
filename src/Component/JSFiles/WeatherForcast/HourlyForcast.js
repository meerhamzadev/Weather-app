import React from 'react';
import { Link } from 'react-router-dom';

const HourlyForcast = () => (

    <section className="hourlyForeCast" style={{

    }}>

        <Link
            to="/HourlyForeCastGraph"
            className="hourlyForeCast__Button"
            style={{
            }}
        >
            View Today's Hourly ForeCast
            </Link>

    </section>
);

export default HourlyForcast;