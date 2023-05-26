import { useEffect, useState } from 'react';
import './Weather.css';
import axios from 'axios';

function Weather() {
  const [temperature, setTemperature] = useState(0);
  const [windspeed, setWindspeed] = useState(0);

  useEffect(() => {
    axios(
      'https://api.open-meteo.com/v1/forecast?latitude=48.28&longitude=25.98&current_weather=true'
    ).then(({ data }) => {
      const { temperature, windspeed } = data.current_weather;

      setTemperature(temperature);
      setWindspeed(windspeed);
    });
  }, []);

  return (
    <div className="weatherContainer">
      <span className="span">
        Сьогодні до {temperature} {'\u2103'}. Швидкість вітру наразі {windspeed}{' '}
        Гарного дня!
      </span>
    </div>
  );
}

export default Weather;
