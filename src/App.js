import React, { Component } from 'react';
import data from './data/data';
import Joblist from './components/Joblist';
class App extends Component {
  render() {
    return (
      <Joblist data = {data}/>
    );
  }
}

export default App;
