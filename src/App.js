import React, { Component } from 'react';
import './App.css';
import MainComponent from './components/MainComponent'
import 'antd/dist/antd.css';

class App extends Component {
  render(){

    return (
      <div className="App">
        <MainComponent />
      </div>
    );
  }
}

export default App;
