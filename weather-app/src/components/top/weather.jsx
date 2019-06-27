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
        const { location, temp_c, isDay, text, iconURL } = this.props;

        return (
            <div className="weather-container">
                
                <div className="header">{ location }</div>

                <div className="inner-container">
                    <div className="image">
                        {/* <i className="wi wi-day-sunny"/> */}
                        <img src={iconURL} />
                    </div>
                    <div className="current-weather">{ temp_c }&deg;C</div>
                </div>

                <div className="footer">{ text }</div>

            </div>
        );
    }
}