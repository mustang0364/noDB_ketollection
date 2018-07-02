import React, { Component } from 'react';
import logo from '../ketoLogo.png';

export default class Header extends Component {
  render() {
    return (
      <section className="Header__parent">
        <section className="Header__content">
          <div className="Header__company-info">
             <img src={logo} alt="" />
          </div>
          <div className="Header__right">
          </div>

        </section>
      </section>
    )
  }
}