import React from 'react';
import './App.css';
import Greet from './components/Greet';
import GreetProps from './components/GreetProps'

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <Greet user={{first:'John', last:'Doe'}} />
      </div>
    );
  }
}

export default App;
