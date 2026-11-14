import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';
import "./SearchBox.css"
export default function SearchBox({updateInfo}){
    let [city,setCity]=useState("");
    let [error,setError] = useState(false);

  const API_URL="http://api.openweathermap.org/data/2.5/weather";
  const API_KEY = "adbe8deffbbf577d55b7f8a348b91d11";

  let getWeatherInfo = async()=>{
    try{

      let response =  await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
  let jsonResponse = await response.json();
  console.log(jsonResponse);

  let result = {
    city:city,
    temp:jsonResponse.main.temp,
    tempMin:jsonResponse.main.temp_min,
    tempMax:jsonResponse.main.temp_max,
    humidity:jsonResponse.main.humidity,
    feelsLike:jsonResponse.main.feels_like,
    weather:jsonResponse.weather[0].description
  };
  console.log(result)
  return result;
    }
    catch{
      setError(true);
    }
  };


  let handleChange= (event)=>{
    setCity(event.target.value)
  }


  let handleSubmit= async(event)=>{
    try{
      event.preventDefault();
    console.log(city);
    setCity("");
    let newinfo = await getWeatherInfo();
    updateInfo(newinfo);
    }
    catch(error){
      setError("No Such place In Our Api");
      console.log(error)
    }
  }
  return (
    <div className="SearchBox">
    <h3>Search For the Weather</h3>
    <form onSubmit={handleSubmit}>
      <TextField id="city" label="City Name" variant="outlined" required value={city} onChange={handleChange}/>
      <br></br><br></br>

      <Button variant="contained" type='submit'>
        Send
      </Button>
      {error && <p style={{color:"red"}}>No such place exist!</p>}
    </form>
    </div>
  );
}