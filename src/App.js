import React from 'react';
import './App.css'
import HourlyForcast from './Component/JSFiles/WeatherForcast/HourlyForcast';
import WeatherForcast from './Component/JSFiles/WeatherForcast/WeatherForcast';
import WeatherUpdate from './Component/JSFiles/WeatherUpdates/WeatherUpdates';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ForeCastGraph from './Component/JSFiles/WeatherForcast/ForeCastGraph';

const App = () => (
  <Router>

    <Switch>
      <Route path="/HourlyForeCastGraph" component={ForeCastGraph} exact />

      <Route path="/">
        <WeatherUpdate />
        <section className="WeatherForecastPortion">
          <HourlyForcast />
          <WeatherForcast />
        </section>
      </Route>

    </Switch>

  </Router>
);


export default App;
