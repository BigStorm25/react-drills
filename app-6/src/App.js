import React, { Component } from 'react';
import './App.css';
import Todo from './Todo';

class App extends Component {
  constructor() {
    super();
    this.state = {
      todoList: [],
      input: ''
    }
    this.handleAddTask = this.handleAddTask.bind(this);
  }
  handleInputChange(value) {
    this.setState({ input: value })
  }
  handleAddTask() {
    this.setState({
      todoList: [...this.state.todoList, this.state.input],
      input: ''
    })
  }
  render() {
    let todoList = this.state.todoList.map((element, index) => {
      return <Todo key={index} task={element} />
    })
    return (
      <div className='App'>
        <h1>My to-do list:</h1>
        <div>
          <input
            value={this.state.input}
            placeholder='Enter new task'
            onChange={e => this.handleInputChange(e.target.value)} />
          <button onClick={this.handleAddTask}>Add</button>
        </div>
        <br />
        {todoList}
      </div>
    )
  }
}

export default App;
