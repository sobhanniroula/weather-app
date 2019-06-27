import React, { Component } from 'react';
import axios from 'axios';

import './App.css';
import './sass/app.scss';
import TopSection from './components/top';
import BottomSection from './components/bottom';

const WEATHER_KEY = '3f6d43cfd24c4eeb8d4235426192606';


export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cityName: 'Biratnagar',
      numForecastDays: 4,
      isLoading: true,
    };
  }

  updateWeather() {
    const { cityName, forecastDays } = this.state;

    const URL = `http://api.apixu.com/v1/forecast.json?key=${WEATHER_KEY}&q=${cityName}&days=${forecastDays}`;

    axios.get(URL)
      .then((res) => {
        return res.data;
      }).then((data) => {
          this.setState({
            isLoading: false,
            temp_c: data.current.temp_c,
            isDay: data.current.is_day,
            text: data.current.condition.text,
            iconURL: data.current.condition.icon,
            forecastdays: data.forecast.forecastday
          });
      }).catch((err) => {
        if(err)
          console.error("Cannot fetch the Weather Data, ", err);
      });
  }

  componentDidMount() {
    const { eventEmitter } = this.props;
    
    this.updateWeather();

      eventEmitter.on('updateWeather', (data) => {
        this.setState({ cityName: data }, () => this.updateWeather());
      });
  }


  render() {

    const { isLoading, cityName, temp_c, isDay, text, iconURL, forecastdays } = this.state;

    return (
      <div className="app-container">
        <div className="main-container">
          {isLoading && <h3>Loading Weather...</h3>}
          {!isLoading && 
            <div className="top-section">
              <TopSection 
                  location={cityName} 
                  temp_c={temp_c} 
                  isDay={isDay} 
                  text={text} 
                  iconURL={iconURL} 
                  eventEmitter={this.props.eventEmitter}
                />
            </div>
          }

          <div className="bottom-section">
              <BottomSection forecastdays={forecastdays} />
          </div>
        </div>
      </div>
    );
  }
  
}


