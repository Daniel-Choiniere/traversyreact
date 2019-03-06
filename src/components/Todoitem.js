import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Todoitem extends Component {
    
    // a function method thst gets called with render to put a line through the todo item if completed is true
    getStyle = () => {
            return {
                background: '#f4f4f4',
                padding: '10px',
                borderBottom: '1px #ccc dotted',
                // terenary opperator - if the props.todo.completed property is true (represented by ?) then toggle the line through property on. Else (represented by :) toggle the line through property off.
                textDecoration: this.props.todo.completed ?
                'line-through' : 'none'
        };
    }

    render() {
        // using destructuring, we can pull variables (i.e. id, title) to use from props.todo
        const { id, title } = this.props.todo;
        return (
            // when doing inline css you need to use double squiggly brackets, unless you are using a variable then it is single squiggly brackets
            // <div style={{ backgroundColor: "#f4f4f4" }}>
            <div style={ this.getStyle() }>
                <p>
                {/* when a checkbox is selected this.props.markComplete is called and goes up a level (using .props) to the Todos class in Todos file */}
                    <input type='checkbox' onChange={this.props.markComplete.bind(this, this.props.todo.id)} /> {' '}
                    { title }
                    
                    {/* create a button to be able to delete a task (button css below) */}
                    <button onClick={this.props.delTodo.bind(this, id)} style={btnStyle}>x</button>
                </p>
            </div>
            
        );
    }
}

// PropTypes
Todoitem.propTypes = {
  todos: PropTypes.array.isRequired,
  markComplete: PropTypes.func.isRequired,
  delTodo: PropTypes.func.isRequired
};

const btnStyle = {
    background: '#ff0000',
    color: '#fff',
    boreder: 'none',
    padding: '5px 9px',
    borderRadius: '50%',
    cursor: 'pointer',
    float: 'right'
};


export default Todoitem;