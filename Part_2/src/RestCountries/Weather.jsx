import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import axios from "axios";

const baseURL = `${
  process.env.NODE_ENV === "development" ? "http" : "https"
}://api.weatherstack.com/current`;

function Weather({ name }) {
  const [weather, setWeather] = useState({
    temperature: "",
    icons: [],
    isData: false,
  });
  useEffect(() => {
    axios
      .get(
        `${baseURL}?access_key=${process.env.REACT_APP_WEATHERSTACK_KEY}&query=${name}`
      )
      .then((res) => res.data)
      .then((data) => {
        console.log(data);
        setWeather({
          temperature: data.current.temperature,
          icons: data.current.weather_icons,
          isData: true,
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }, [name]);
  return (
    <div>
      <h3>Weather</h3>
      {weather.isData && (
        <>
          <div>
            <strong>{weather.temperature} Celcius</strong>
          </div>
          {weather.icons.map((i) => (
            <img key={i} src={i} alt="weather" />
          ))}
        </>
      )}
    </div>
  );
}

Weather.propTypes = {
  name: PropTypes.string,
};

export default Weather;
