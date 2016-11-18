import React from 'react';

let WeatherMessage = ({temp, location}) => {
  return (
    <h3 className="WeatherMessage">It's {temp} in {location}.</h3>
  );
};

export default WeatherMessage;
