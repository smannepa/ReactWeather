var React = require('react');
var {Link} = require('react-router');

var Examples = (props) => {
    return (
      <div>
        <h1 className="text-center">Examples</h1>
        <p>A few example locations to try out.</p>
        <ol>
          <li>
            <Link to='/?location=Redmond, WA'>Redmond, WA</Link>
          </li>
          <li>
            <Link to='/?location=Rio, Brazil'>Rio, Brazil</Link>
          </li>
        </ol>
      </div>
    );
  };

module.exports = Examples;

var Examples = React.createClass({
  render: function () {

  }
});
