import React, { Component } from 'react';

class CreditCard extends Component {
  render() {

    // window.onload = function dataCollect () {
    //
    //
    //   $.ajax({url: "../data.json"}).done(function(mData) {
    //     console.log('url returned mData:', mData)
    //   })
    // }
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
          <tr>
            <td>Alfreds Futterkiste</td>
            <td>Maria Anders</td>

          </tr>
          <tr>
            <td>Centro comercial Moctezuma</td>
            <td>Francisco Chang</td>

          </tr>
          <tr>
            <td>Ernst Handel</td>
            <td>Roland Mendel</td>

          </tr>
          <tr>
            <td>Island Trading</td>
            <td>Helen Bennett</td>

          </tr>
          <tr>
            <td>Laughing Bacchus Winecellars</td>
            <td>Yoshi Tannamuri</td>

          </tr>
          <tr>
            <td>Magazzini Alimentari Riuniti</td>
            <td>Giovanni Rovelli</td>
          </tr>
          <tr>
            <td></td>
          </tr>
        </table>

      </div>
    );
  }
}

export default CreditCard;
