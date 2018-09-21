import React, { Component } from 'react';
import CreditCard from './CreditCard'
import TermLoan from './TermLoan'
import creditCard from '../assets/creditCard2-bk.png'
import moneyBag from '../assets/moneyBag2-bk.png'

class Products extends Component {
  constructor(props) {
    super(props)
    this.state = {
      screenIndex: 1,
      active: false
    }
    this.updateScreen = this.updateScreen.bind(this),
    this.setButtonColor = this.setButtonColor.bind(this),
    this.buttonClick = this.buttonClick.bind(this)
  }

  setButtonColor() {
    this.setState({active: !this.state.active})
  }

  updateScreen(newScreenIndex) {
    this.setState({
      screenIndex: newScreenIndex
    });
  }

  buttonClick(newScreenIndex) {
    this.setButtonColor();
    this.updateScreen(newScreenIndex)
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
          <button id="credit-card-button" className={`nav-buttons ${this.state.screenIndex == 1 ? 'active' : ''}`} onClick={() => {
            this.buttonClick(1);
          }}>
            <img className="cc-icon button-icons" src={creditCard} />
            Credit Card
          </button>
          <button id="term-loan-button" className={`nav-buttons ${this.state.screenIndex == 2 ? 'active' : ''}`} onClick={() => { this.buttonClick(2)}}>
            <img className="mb-icon button-icons" src={moneyBag} />
          Term Loan</button>
        </div>
        <div className="screen-wrapper">
          {ActiveScreen}
        </div>
      </div>
    );
  }
}

export default Products;
