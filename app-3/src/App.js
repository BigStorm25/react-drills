import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      filterString: '',
      sports: ['Hockey', 'Basketball', 'Wrestling']
    }
  }
  handleChange(filter) {
    this.setState({ filterString: filter })
  }
  render() {
    const sportsILike = this.state.sports
      .filter((element, index) => {
        return element.includes(this.state.filterString)
      })
      .map((element, index) => {
        return <h2 key={index}>{element}</h2>
      })
    return (<div className='App'>
      <input onChange={e => this.handleChange(e.target.value)} type='text' />
      {sportsILike}
    </div>
    )
  }
}

export default App;
