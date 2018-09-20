import React, { Component } from 'react';
import CreditCard from './CreditCard'
import TermLoan from './TermLoan'

class Products extends Component {
  constructor(props) {
    super(props)
    this.updateScreen = this.updateScreen.bind(this)
    this.state = {
      screenIndex: 1
    }
  }

  updateScreen(newScreenIndex) {
    this.setState({
      screenIndex: newScreenIndex
    });
  }

  render() {

    let ActiveScreen
    if(this.state.screenIndex === 1) {
      ActiveScreen = <CreditCard />
    }
    if(this.state.screenIndex === 2) {
      ActiveScreen = <TermLoan />
    }

    return (
      <div className="products">
        <div className="button-wrapper">
          <button className="nav-buttons credit-card-button" onClick={() => { this.updateScreen(1)}}>Credit Card</button>
          <button className="nav-buttons term-loan-button" onClick={() => { this.updateScreen(2)}}>Term Loan</button>
        </div>
        <div className="screen-wrapper">
          {ActiveScreen}
        </div>
      </div>
    );
  }
}

export default Products;
