import react from 'react';
import wind from '../images/icon-wind.png'
import compass from '../images/icon-compass.png'
import umbrella from '../images/icon-umberella.png'
import moment from 'moment';

class CurrentWeather extends react.Component {

    render() {
        var CurrentDate = moment().format("DD/MM/YYYY");

        const iconurl = `http://openweathermap.org/img/wn/${this.props.currenticon}@4x.png`
        return (


            <div className="today forecast">
                <div className="forecast-header">
                    <div class="day">Current Weather</div>
                    <div className="date">{CurrentDate}
                    </div>
                </div>

                <div className="forecast-content">
                    <div className="location">{this.props.currentCity}</div>
                    <div className="location">{this.props.currentCountry}</div>
                    <div className="degree">
                        <div className="num">{this.props.currentTemperature}°C </div>
                        <div className="forecast-icon">
                            <img src={iconurl} />
                        </div>
                    </div>
                    <br>
                    </br>
                    <br>
                    </br>
                    <br>
                    </br>
                    <br>
                    </br>
                    <br>
                    </br>
                    <span><img src={umbrella} alt="" />{this.props.currentHumity} %</span>
                    <span><img src={wind} alt="" />{this.props.currentWind} km/h</span>
                    <span><img src={compass} alt="" />{this.props.currentDirection} °</span>
                </div>
            </div>




        )
    }
}

export default CurrentWeather;