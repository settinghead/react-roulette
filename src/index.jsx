import 'bootstrap/dist/css/bootstrap.min.css';
require('./roulette.styl');
import React from 'react';
import { render } from 'react-dom';


class App extends React.Component {
  constructor (props){
    super(props);
    this.spin = this.spin.bind(this);
  }
  spin() {
    this.setState({curr: 1 + Math.round(Math.random() * 9)});
  }
  render() {
    return (
      <div>
        <ul id="roulette" className={this.state && 'number-' + this.state.curr}>
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
          <button type="button" id="rollRnd" className="rnd btn btn-primary btn-lg" onClick={this.spin}>Spin</button>
        </div>
      </div>
    )
  }
}

render(<App/>, document.querySelector("#app"));
