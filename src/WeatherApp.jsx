
import SearchBox from './SearchBox';
import InfoBox from './InfoBox';
import { useState } from 'react';
import './WeatherApp.css';

export default function WeatherApp() {

    const [weatherInfo, setWeatherInfo] = useState(null);

    const updateInfo = (newinfo) => {
        setWeatherInfo(newinfo);
    };

    const getBackground = () => {


        return "default";
    };

    return (
        <div className={`weather-container ${getBackground()}`}>

            <h2>Weather App</h2>

            <SearchBox updateInfo={updateInfo} />

            <InfoBox info={weatherInfo} />

        </div>
    );
}
