import React, { Component } from 'react';

class WeatherMessage extends Component {
  render() {
    let {temp, location} = this.props;

    return (
      <h3 className="WeatherMessage">It's {temp} in {location}.</h3>
    );
  }
}

export default WeatherMessage;
