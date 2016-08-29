import 'bootstrap/dist/css/bootstrap.min.css';
require('./roulette.styl');
import React from 'react';
import { render } from 'react-dom';


class App extends React.Component {
  render() {
    return (
      <div>
        <ul id="roulette">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
        <div className="controller">
          <button type="button" id="rollRnd" className="rnd btn btn-primary btn-lg">Spin</button>
        </div>
      </div>
    )
  }
}

render(<App/>, document.querySelector("#app"));
