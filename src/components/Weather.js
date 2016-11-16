import React, { Component } from 'react';
import WeatherForm from './WeatherForm';
import WeatherMessage from './WeatherMessage';

class Weather extends Component {
  constructor(props) {
    super(props);

    this.state = {
      location: 'Phoenix',
      temp: 92
    };

    this.handleSearch = this.handleSearch.bind(this);
  }

  handleSearch(location) {
    this.setState({
      location: location,
      temp: 72
    });
    console.log('app', this);
  }

  render() {
    let {temp, location} = this.state;

    return (
      <div className="Weather">
        <h3>Weather Component</h3>
        <WeatherForm onSearch={this.handleSearch} />
        <WeatherMessage temp={temp} location={location} />
      </div>
    );
  }
}

export default Weather;
