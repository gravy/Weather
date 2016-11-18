import React, { Component } from 'react';
import WeatherForm from 'WeatherForm';
import WeatherMessage from 'WeatherMessage';
import openWeatherMap from 'openWeatherMap';

class Weather extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: false
    };

    this.handleSearch = this.handleSearch.bind(this);
  }

  handleSearch(location) {
    let self = this;

    this.setState({isLoading: true});

    openWeatherMap.getTemp(location).then((temp) => {
      self.setState({
        isLoading: false,
        location: location,
        temp: temp
      });
    }, (errorMessage) => {
      self.setState({
        isLoading: false
      });
      alert(errorMessage);
    });
  }

  render() {
    let {isLoading, temp, location} = this.state;

    function renderMessage () {
      if (isLoading) {
        return <h3 className="text-center">Fetching weather...</h3>;
      } else if (temp && location) {
        return <WeatherMessage temp={temp} location={location} />;
      }
    }

    return (
      <div>
        <h1 className="text-center">Get Weather</h1>
        <WeatherForm onSearch={this.handleSearch} />
        {renderMessage()}
      </div>
    );
  }
}

export default Weather;
