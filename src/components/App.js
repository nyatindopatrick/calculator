import React, { Component } from 'react';
import ButtonPanel from './ButtonPanel';
import Display from './Display';
import calculate from '../logic/calculate';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null,
    };
  }

  handleClick = buttonName => {
    const { total, next, operation } = this.state;
    this.setState(calculate({ total, next, operation }, buttonName));
  };

  render() {
    const { total } = this.state;
    return (
      <div className="app">
        <Display data={total === null ? 0 : total} />
        <ButtonPanel handleClick={this.handleClick} />
      </div>
    );
  }
}

export default App;
