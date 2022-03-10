import React from 'react';
import Logo from '../images/logo.png';
import { getCurrentWeather, getForecastWeather } from '../apis/openweather.js'


class SearchBar extends React.Component {

    constructor(props) {
        super(props);

    }

    onInputchange(e) {
        this.props.inputChange(e);

    }

    onFormSubmit(e) {
        e.preventDefault();
        this.props.formSubmitted();

    }


    // renderfunction is triggered whenever updating
    // the state using setState function

    render() {

        const onCoordsChange = (lat, long) => {
            this.props.onCoordsChange(lat, long);
        }

        const location = this.props.location;

        const getLocation = () => {
            if (!navigator.geolocation) {
                //setStatus('Geolocation is not supported by your browser');
            } else {
                //setStatus('Locating...');
                navigator.geolocation.getCurrentPosition((position) => {
                    //setStatus(null);
                    onCoordsChange(position.coords.latitude, position.coords.longitude)
                }, () => {
                    //setStatus('Unable to retrieve your location');
                });
            }
        }



        return (

            <div>
                <form onSubmit={(e) => this.onFormSubmit(e)}>
                    <div className="site-content">
                        <div className="site-header">
                            <div className="container">
                                <a href="index.html" className="branding">
                                    <img src={Logo} alt="" className="logo" />
                                    <div className="logo-type">
                                        <h1 className="site-title">XGeeks Weather</h1>
                                        <small className="site-description">Alexandre Renda</small>
                                    </div>
                                </a>
                                <ul className="menu">
                                    <button onClick={() => getLocation()}>Get my location</button>

                                </ul>
                                <div className="hero" data-bg-image="images/banner.png">
                                    <div className="container">
                                        <form action="#" className="find-location" />
                                        <input type="text" placeholder="A city name"

                                            onChange={(e) => this.onInputchange(e)}
                                            value={location}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </form >
            </div>

        )
    }
}
export default SearchBar;