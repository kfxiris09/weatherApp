import React from 'react';
import moment from 'moment';

class Forecast extends React.Component {
    render() {
        const forecastItems = this.props.forecast.map((f, i) => {
            const key = `forecast-item_${i}`;
            const iconurl = `http://openweathermap.org/img/wn/${f.weather[0].icon}@2x.png`
            const date = moment.unix(f.dt).format("DD/MM/YYYY")

            return (

                <div key={key} >
                    <div className='forecast-header'>
                        <div className='day'>
                            {date}
                        </div>
                    </div>
                    <div className='forecast-content'>
                        <div className='forecast-icon'>
                            <img src={iconurl} />
                        </div>
                        <br>
                        </br>
                        <br>
                        </br>
                        <div className='degree'>
                            <p className='forecast-item-temperature'>Max:{f.temp.max}°C</p>
                            <small className='forecast-item-temperature'>Min:{f.temp.min}°C</small>

                        </div>
                        <br>
                        </br>
                        <br>
                        </br>
                        <p className='forecast-item-'>Wind:{f.wind_speed}km/h</p>
                        <p className='forecast-item-'>Wind Direction:{f.wind_deg}º</p>

                    </div >
                </div>
            );
        });
        return (
            <div className='forecast'>

                {forecastItems}
            </div>);

    }
}


export default Forecast;