import React, { Component } from 'react';
import FoodBox from './components/FoodBox';
import 'bulma/css/bulma.css';
import './App.css';

import foodList from './foods.json';

class App extends Component {
  render() {
    return (
      <div id="root" className="App">
        <FoodBox food={foodList[0]} />
      </div>
    );
  }
}

export default App;
