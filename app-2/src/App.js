import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      sports: ['Hockey', 'Basketball', 'Wrestling']
    }
  }
  render() {
    const sportsILike = this.state.sports.map((sport, index) => {
      return <h2 key={index}>{sport}</h2>
    })

    return <div className='App'>{sportsILike}</div>
  }
}

export default App;
