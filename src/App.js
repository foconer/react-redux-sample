import React from 'react';
import './App.css';
import Greet from './components/Greet';

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
