import React, { Component } from 'react';
import './App.css';
import NavBar from './components/navbar';
import Counters from './components/counters';

class App extends Component {
  state = { 
    counters: [
        {id: 1, value: 0},
        {id: 2, value: 0},
        {id: 3, value: 0},
        {id: 4, value: 0}
    ]
  };

  handleDecrement = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = {...counter};
    const min = counters[index].value--;
    min >= 1 ? this.setState({ counters }) : this.setState({ min });
  };

  handleIncrement = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = {...counter};
    const max = counters[index].value++;
    max <= 9 ? this.setState({ counters }) : this.setState({ max });
  };

  handleDelete = counterId => {
    const counters = this.state.counters.filter( c => c.id !== counterId );
    this.setState({counters});
  };

  reset = () => {
    const counters = this.state.counters.map(c => {
        c.value = 0;
        return c;
    });
    this.setState({counters});
  };  

  render() {
    return (
      <React.Fragment>
        <NavBar totalItems = {this.state.counters.filter(c => c.value >0).length} />
        <main className = "Main-Centred">
          <Counters 
            counters = {this.state.counters}
            onDelete = {this.handleDelete}
            onIncrement = {this.handleIncrement}
            onReset = {this.reset}
            onDecrement = {this.handleDecrement}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;