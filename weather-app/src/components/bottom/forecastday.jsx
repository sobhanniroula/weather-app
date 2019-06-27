import React from 'react';

import './style.scss';


export default class Forecastday extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        const { day } = this.props;

        return(
            <div className="forecastday-container">
                <div className="inner-container">
                    <div className="local-container">
                        <div className="image">
                            <img src={day.condition.icon} alt="forecast" />
                        </div>
                        <div className="text">{day.avgtemp_c}</div>
                        <div className="muted-text">{day.condition.text}</div>
                    </div>
                    
                </div>
                
            </div>
        );
    }
}