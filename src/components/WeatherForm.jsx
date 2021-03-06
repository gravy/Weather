import React, { Component } from 'react';

class WeatherForm extends Component {
  constructor(props) {
    super(props);
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
          <input type="search" value={this.state.location} onChange={this.handleChange} placeholder="Search weather by city" />
          <button className="button expanded hollow">Get Weather</button>
        </form>
      </div>
    );
  }
}

export default WeatherForm;
