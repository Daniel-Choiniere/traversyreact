import React, { Component } from 'react';
import Todos from './components/Todos';
import './App.css';


class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: 'Take out the trash',
        completed: false
      }, 
     {
        id: 2,
        title: 'Dinner with the wifey',
        completed: true
      },   
     {
        id: 3,
        title: 'Meeting with da boss',
        completed: false
      }
    ]
  }
  
  markComplete = () => {
    console.log("Hello");
  }
  
  render() {
    // console.log(this.state.todos);
    return (
      // in JSX cannot use class need to use className
      <div className="App">
        <Todos todos={this.state.todos} markComplete={this.markComplete}/>
      </div>
    );
  }
}

export default App;
