import React from 'react';
import logo from '../../images/main-logo.png';
import cart from '../../images/cart.png';
import "./header.css";
import "../../index.css";

export const Header = () => {
  return (
    <div className="header">
      <div className="left-section">
       <img src={logo} alt="" className="main-logo" />
      </div>
      <div className="middle-section">
        <input type="text" placeholder='Search' className="search" />
        <button className="search-button">
          Search
        </button>
      </div>
      <div className="right-section">
        <div className="cart-logo-container">
          <img src={cart} className='cart-logo'/>
        </div>
        <div className="cart-price">
          <p>Shopping cart:</p>
          <span>$57.00</span>
        </div>
      </div>
    </div>
  )
}

export default Header 