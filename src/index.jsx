import 'bootstrap/dist/css/bootstrap.min.css';
require('./roulette.styl');
import React from 'react';
import { render } from 'react-dom';
import styles from './styles.css';

var questions = {
  1: "Foo",
  2: "Bar",
  3: "Baz3",
  4: "Baz4",
  5: "Baz5",
  6: "Baz6",
  7: "Baz7",
  8: "Baz8",
  9: "Baz9",
};

class App extends React.Component {
  constructor (props){
    super(props);
    this.spin = this.spin.bind(this);
    this.state = {};
  }
  spin() {
    this.setState({curr: 1 + Math.round(Math.random() * 9), spinning: true});
    var _this = this;
    this.timer = setTimeout(() => {
      console.log('zzzz');
      _this.setState({spinning: false});
      _this.timer = null;
    }, 1800);
  }
  componentWillUnmount () {
    if(this.timer) {
      clearTimeout(this.timer);
      this.timer = null;
    }
  }
  render() {
    var title = '';
    if (this.state.spinning) {
      title = <h1>...</h1>;
    } else {
      title = <h1>{questions[this.state.curr]}</h1>;
    }

    return (
      <div className={styles.main}>
        <ul id="roulette" className={'number-' + this.state.curr}>
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
        {title}
      </div>
    )
  }
}

render(<App/>, document.querySelector("#app"));
