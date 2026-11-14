import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css"

export default function InfoBox({info}){

  //const INIT_URL = "https://images.unsplash.com/photo-1673191898695-8252d409d82c?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"
  
  if (!info) {
        return <h3>Please search for a city to see weather information.</h3>;
    }

  const HOT_URL = "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1000";

const COLD_URL = "https://images.unsplash.com/photo-1517299321609-52687d1bc55a?w=1000";

const RAIN_URL = "https://images.unsplash.com/photo-1519692933481-e162a57d6721?w=1000";
  
  return (
    <div className="InfoBox">
      <div className='cardContainer'>
      <Card sx={{ maxWidth: 345 }}>
      <CardMedia
    sx={{ height: 140 }}
    image={
        info.humidity > 80
        ? RAIN_URL
        : info.temp > 15
        ? HOT_URL
        : COLD_URL
    }
    title="Weather"
/>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}component={"span"}>

          <p> Temperature : {info.temp}&deg;C</p>
          <p> Humidity : {info.humidity}</p>
          <p> Min Temp : {info.tempMin}&deg;C</p>
          <p> Max Temp : {info.tempMax}&deg;C</p>
          <div> The weather can be described as {info.weather} feels like : {info.feelsLike}&deg;C</div>
        </Typography>
      </CardContent>
    </Card>
    </div>

    </div>
  )
}