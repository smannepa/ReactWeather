var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var openweathermap = require('openweathermap');

var Weather = React.createClass({
  getDefaultProps: function () {
    return {
      location: 'Location'
    }
  },
  getInitialState: function () {
    return {
      location: 'Redmond, WA',
      temp: 41
    }
  },
  handleSearch: function (location) {
    var that = this;
    openweathermap.getTemp(location).then(function (temp) {
      that.setState({
        location: location,
        temp: temp
      });
    }, function (errorMessage) {
      alert(errorMessage);
    });
  },
  render: function () {
    var {location, temp} = this.state;
    return (
      <div>
        <WeatherForm onSearch={this.handleSearch}/>
        <WeatherMessage location={location} temp={temp}/>
      </div>
    );
  }
});

module.exports = Weather;
