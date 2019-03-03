import React, { Component } from 'react';
import Todoitem from './Todoitem';
import PropTypes from 'prop-types';


class Todos extends Component {
  render() {
    return this.props.todos.map((todo) => (
        // markComplete is sent up when called from Todoitem file when user selects a checkbox.
        // it will now be pushed up a level to the App.js file where it will be called and defined. 
        <Todoitem key={todo.id} todo={todo} markComplete={this.props.markComplete} />
      )); 
  }
}

// PropTypes
Todos.propTypes = {
  todos: PropTypes.array.isRequired
};

export default Todos;
