
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';
import "./SearchBox.css";

export default function SearchBox({ updateInfo }) {

    const [city, setCity] = useState("");
    const [error, setError] = useState(false);

    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "adbe8deffbbf577d55b7f8a348b91d11";

    const getWeatherInfo = async () => {

        let response = await fetch(
            `${API_URL}?q=${encodeURIComponent(city)}&appid=${API_KEY}&units=metric`
        );

        let jsonResponse = await response.json();

        if (!response.ok) {
            throw new Error(jsonResponse.message);
        }

        let result = {
            city: jsonResponse.name,
            temp: jsonResponse.main.temp,
            tempMin: jsonResponse.main.temp_min,
            tempMax: jsonResponse.main.temp_max,
            humidity: jsonResponse.main.humidity,
            feelsLike: jsonResponse.main.feels_like,
            weather: jsonResponse.weather[0].description
        };

        return result;
    };

    const handleChange = (event) => {
        setCity(event.target.value);
    };

    const handleSubmit = async (event) => {

        event.preventDefault();

        try {

            setError(false);

            let newinfo = await getWeatherInfo();

            updateInfo(newinfo);

            setCity("");

        } catch (err) {

            setError(true);

            console.log("Error:", err.message);
        }
    };

    return (
        <div className="SearchBox">

            <h3>Search For the Weather</h3>

            <form onSubmit={handleSubmit}>

                <TextField
                    id="city"
                    label="City Name"
                    variant="outlined"
                    required
                    value={city}
                    onChange={handleChange}
                />

                <br /><br />

                <Button variant="contained" type="submit">
                    Send
                </Button>

                {error && (
                    <p style={{ color: "red" }}>
                        No such place exist!
                    </p>
                )}

            </form>

        </div>
    );
}
