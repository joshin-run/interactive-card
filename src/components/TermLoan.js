import React, { Component } from 'react';
import bizImg from '../assets/business.svg'

class TermLoan extends Component {
  render() {
    return (
      <div className="term-loan">
        <div className="add-wrapper">
          <img className="biz-img" src={bizImg} />
        </div>
      </div>
    );
  }
}

export default TermLoan;
