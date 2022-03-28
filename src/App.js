import './App.css';
import './style.css'
import React, { useEffect, useState } from "react";
import { getCurrentWeather, getForecastWeather, getCurrentWeather2 } from './apis/openweather';

import Forecast from './components/forecastweather';
import SearchBar from "./components/searchbar";
import CurrentWeather from "./components/currentweather";
import CitiesList from './components/citieslist';

class App extends React.Component {

  constructor(props) {
    super(props);


    this.state = {
      location: "",
      temp: "",
      city: "",
      country: "",
      humity: "",
      wind: "",
      direction: "",
      icon: "",
      dailyforecast: [],
      lat: "",
      long: "",
      locationsSet: new Set()
    }
  }



  onInputChange(e) {
    this.setState({
      location: e.target.value
    });
  }


  async onArrayDelete(e) {
    let copy = new Set(this.state.locationsSet)
    if (!copy.has("")) {
      copy.delete(e)

    }
    this.setState({
      locationsSet: copy
    })
  }


  async onCoordsChange(lat, long) {
    const weatherRes = await getCurrentWeather2(lat, long);
    const forecastRes = await getForecastWeather(lat, long);


    this.setState({
      lat: lat,
      long: long,
      temp: weatherRes.data.main.temp,
      city: weatherRes.data.name,
      country: weatherRes.data.sys.country,
      humity: weatherRes.data.main.humidity,
      wind: weatherRes.data.wind.speed,
      direction: weatherRes.data.wind.deg,
      icon: weatherRes.data.weather[0].icon,
      dailyforecast: forecastRes.data.daily,

    });


  }


  async onFormSubmit() {
    const weatherRes = await getCurrentWeather(this.state.location);
    const lat = weatherRes.data.coord.lat;
    const lon = weatherRes.data.coord.lon;
    const forecastRes = await getForecastWeather(lat, lon);
    let copy = new Set(this.state.locationsSet)

    if (!copy.has(weatherRes.data.name)) {
      copy.add(weatherRes.data.name)
    }

    this.setState({
      temp: Math.round(weatherRes.data.main.temp),
      city: weatherRes.data.name,
      country: weatherRes.data.sys.country,
      humity: Math.round(weatherRes.data.main.humidity),
      wind: Math.round(weatherRes.data.wind.speed),
      direction: Math.round(weatherRes.data.wind.deg),
      icon: weatherRes.data.weather[0].icon,
      dailyforecast: forecastRes.data.daily,
      locationsSet: copy
    });

  }



  render() {


    return (

      <div>
        <SearchBar
          location={this.state.location}
          inputChange={(e) => this.onInputChange(e)}
          formSubmitted={() => this.onFormSubmit()}
          onCoordsChange={(lat, long) => this.onCoordsChange(lat, long)}
        />

        <div className="forecast-table">
          <div className="container">
            <div className="forecast-container">
              <div className='today-forecast'>
                <CurrentWeather
                  currentTemperature={this.state.temp}
                  currentCity={this.state.city}
                  currentCountry={this.state.country}
                  currentHumity={this.state.humity}
                  currentWind={this.state.wind}
                  currentDirection={this.state.direction}
                  currenticon={this.state.icon}
                />
              </div>

              <Forecast forecast={this.state.dailyforecast} />



            </div>
          </div>


        </div>

      </div>


    );
  }
}

export default App;
