import React, { Component } from 'react';
import Products from './Products'

class Card extends Component {
  render() {
    return (
      <div className="card">
        <Products />
      </div>
    );
  }
}

export default Card;
