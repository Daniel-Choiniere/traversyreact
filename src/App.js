import React, { Component } from 'react';
import Todos from './components/Todos';


class App extends Component {
  render() {
    return (
      // JSX 
      // in JSX cannot use class need to use className
      <div className="App">
        < Todos />
      </div>
    );
  }
}

export default App;
