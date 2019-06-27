import React from 'react';

import './style.scss';
import './css/weather-icons.min.css';
import './font/weathericons-regular-webfont.ttf';


export default class Weather extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

        };
    }

    render() {
        return (
            <div className="weather-container">
                
                <div className="header">Location Name</div>

                <div className="inner-container">
                    <div className="image"><i className="wi wi-day-sunny"/></div>
                    <div className="current-weather">18&deg;C</div>
                </div>

                <div className="footer">Sunny</div>

            </div>
        );
    }
}