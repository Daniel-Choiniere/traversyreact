// this the main App page where all JSX and React components will be rendered.  

import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/layout/header';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import About from './components/pages/about';
import uuid from 'uuid';
import axios from 'axios';

import './App.css';


class App extends Component {
  state = {
    todos: []
  }
    
  componentDidMount() {
    axios.get("https://jsonplaceholder.typicode.com/todos?_limit=10")
      .then(res => this.setState({ todos: res.data }));
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
  
    // Add a Todo -------------------------------------------
    addTodo = (title) => {
      const newTodo = {
        id: uuid.v4(),
        title: title,
        completed: false
      };
      this.setState({ todos: [...this.state.todos, newTodo] });
    }
  
  render() {
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Header />
            {/* adding exact to the path makes only the selected paths show up. i.e. when you go to /about path only abput info is displayed */}
            <Route exact path="/" render={props => (
            <React.Fragment>
               <AddTodo addTodo={ this.addTodo }/>
              {/* markComplete can now be called without .props and be defined in this file (see above) */}
              <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo} />
            </React.Fragment>
          )} />
            <Route path="/about" component={About} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
