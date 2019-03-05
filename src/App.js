// this the main App page where all JSX and React components will be rendered.  

import React, { Component } from 'react';
import Header from './components/layout/header'
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';

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
        completed: false
      },   
     {
        id: 3,
        title: 'Meeting with da boss',
        completed: false
      }
    ]
  }
    
    //toggles complete - when a task checkbox is selected a line goes through the task, or the line goes away if unselected
  markComplete = (id) => {
    this.setState({ todos: this.state.todos.map(todo => {
      if(todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    }) });
  }
  
    // delete a todo task -----------------------------------                                 
    delTodo = (id) => {
      this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id )] });
    }
  
    // Add a Todo
    addTodo = (title) => {
      const newTodo = {
        id: 4,
        title: title,
        completed: false
      };
      this.setState({ todos: [...this.state.todos, newTodo] });
    }
  
  render() {
    // console.log(this.state.todos);
    return (
      // in JSX cannot use class need to use className
      <div className="App">
        <div className="container">
          <Header />
          <AddTodo addTodo={ this.addTodo }/>
          {/* markComplete can now be called without .props and be defined in this file (see above) */}
          <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo} />
        </div>
        
      </div>
    );
  }
}

export default App;
