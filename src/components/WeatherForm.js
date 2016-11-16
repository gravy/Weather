import React, { Component } from 'react';

class WeatherForm extends Component {
  constructor(props) {
    super(props);
    console.log('form', this);
    this.state = {location: ''};

    this.handleChange = this.handleChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({location: event.target.value});
  }

  onFormSubmit(e) {
    e.preventDefault();

    let location = this.state.location;

    if (location.length > 0) {
      this.setState({location: ''});
      this.props.onSearch(location);
    }
  }

  render() {
    return (
      <div>
        <form onSubmit={this.onFormSubmit}>
          <input type="text" value={this.state.location} onChange={this.handleChange} placeholder="Enter city name" />
          <input type="submit" value="Get Weather" />
        </form>
      </div>
    );
  }
}

export default WeatherForm;
