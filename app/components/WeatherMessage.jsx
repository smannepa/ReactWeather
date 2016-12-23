var React = require('react');

var WeatherMessage = ({location, temp}) => {
  return (
    <div>
      <h3>It is {temp}&#176;F in {location}</h3>
    </div>
  );
};

module.exports = WeatherMessage;
