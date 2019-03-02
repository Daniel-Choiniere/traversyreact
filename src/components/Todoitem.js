import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Todoitem extends Component {
    
    // a function method thst gets called with render to put a line through the todo item if completed is true
    getStyle = () => {
        if(this.props.todo.completed) {
            return {
                background: '#f4f4f4',
                padding: '10px',
                borderBottom: '1px #ccc dotted',
                // terenary opperator - if the todo.completed property is true (represented by ?) then toggle the line through property on. Else (represented by :) toggle the line through property off.
                textDecoration: this.props.todo.completed ?
                'line-through' : 'none'
            }
        }
    }
    
    
    render() {
        return (
            // when doing inline css you need to use double squiggly brackets, unless you are using a variable then it is single squiggly brackets
            // <div style={{ backgroundColor: "#f4f4f4" }}>
            <div style={ this.getStyle() }>
                <p>
                    <input type='checkbox' /> {' '}
                    { this.props.todo.title }
                </p>
            </div>
            
        );
    }
}

// PropTypes
Todoitem.propTypes = {
  todo: PropTypes.object.isRequired
};


export default Todoitem;