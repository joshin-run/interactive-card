import React, { Component } from 'react';

class CreditCard extends Component {
  constructor (props) {
    super(props)
    this.state = {
      creditScore: []
    }
  }

  componentDidMount () {
    fetch('https://api.myjson.com/bins/hsbc4')
    .then(res => res.json())
    .then(data => {
      console.log(JSON.stringify(data.creditScore))
      // var data = JSON.stringify(data)
      this.setState({
        creditScore: data.creditScore,
        creditAge: data.creditAge,
        inquiries: data.inquiries,
        bankruptcies: data.bankruptcies,
        creditUtilization: data.creditUtilization,
        creditLimit: data.creditLimit
      })
    })
  }

  render() {
    return (
      <div className="credit-card">
        <div className="notification">
          <p><strong>Yay! You qualify for a credit card.</strong></p>
          <p>A credit card is a great option for you right now.</p>
        </div>
        <div className="title">
          <p>Here's what issuers are looking for:</p>
        </div>
        <table>
          <tbody>
            <tr>
              <td>Personal credit score</td>
              <td>{this.state.creditScore}</td>

            </tr>
            <tr>
              <td>Personal credit age</td>
              <td>{this.state.creditAge}</td>

            </tr>
            <tr>
              <td>Personal inquiries</td>
              <td>{this.state.inquiries}</td>

            </tr>
            <tr>
              <td>Personal bankruptcies</td>
              <td>{this.state.bankruptcies}</td>

            </tr>
            <tr>
              <td>Personal credit utilization</td>
              <td>{this.state.creditUtilization}</td>

            </tr>
            <tr>
              <td>Personal credit limit</td>
              <td>{this.state.creditLimit}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default CreditCard;
