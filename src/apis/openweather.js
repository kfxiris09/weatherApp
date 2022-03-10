import axios from 'axios';


//deveria "esconder" a KEY, que seria acessival através de um process.env.REACT_APP_API_KEY mas não consegui 
const apikey = '16c776363fe73de3c96c4f0039a81099'

function getCurrentWeather(location) {
    return axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&APPID=${apikey}`
    );
}



function getForecastWeather(lat, lon) {
    return axios.get(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=metric&appid=${apikey}`
    )
}

function getCurrentWeather2(latitude, long) {
    return axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${long}&units=metric&appid=${apikey}`
    );
}


export {
    getCurrentWeather,
    getForecastWeather,
    getCurrentWeather2

}

