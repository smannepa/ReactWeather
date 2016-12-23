var React = require('react');
var {Link} = require('react-router');

var About = (props) => {
    return (
      <div>
        <h1 className="text-center">About</h1>
        <p>This is a weather search application built on React. I've built this for the React Web App developer course.</p>
        <p>
          Here are a few tools that I used to build this app:
        </p>
        <ul>
          <li>
            <a href="https://facebook.github.io/react">React</a> - Javascript framework
          </li>
          <li>
            <a href="http://openweathermap.org">Open Weather Map</a> - Used to search the weather data by city name.
          </li>
        </ul>
      </div>
    );
  };

module.exports = About;
