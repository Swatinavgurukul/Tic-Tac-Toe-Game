// import React from 'react';
// import './css';
import React, { Component } from 'react';

class ShoppingList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      something: '123'
    };
  }
    render() {
      return (
        <div className="shopping-list">
          <h1>Shopping List for {this.props.name}</h1>
          <ul>
            <li>Instagram</li>
            <li>WhatsApp</li>
            <li>Oculus</li>
          </ul>
        </div>
      );
    }
  }

  export default ShoppingList;