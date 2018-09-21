import React, { Component } from 'react';
import bizImg from '../assets/business.svg'
import addIcon from '../assets/addIcon.svg'

class TermLoan extends Component {
  render() {
    return (
      <div className="term-loan">
        <div className="add-wrapper">
          <img className="biz-image" src={bizImg} />
          <h2>Add your business</h2>
          <p>For term loan options, add your business</p>
          <img className="add-icon" src={addIcon} />
          <p>Add</p>
        </div>
      </div>
    );
  }
}

export default TermLoan;
