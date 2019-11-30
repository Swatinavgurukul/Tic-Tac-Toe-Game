
import React, { Component } from 'react';
import './App.css';
import Game from './game';
// import ShoppingList from './shoppingList';

class App extends Component {

  render() {
    return (
      <div className="App">
        {/* <ShoppingList name="swati"/> */}
        <Game/>
      </div>
      );
  }
}
export default App;
