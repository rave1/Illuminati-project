import React from 'react';
import logo from '../../images/main-logo.png';
import cart from '../../images/cart.png';
import search from '../../images/search-logo.png';
import phone from '../../images/phone-logo.png'
import './header.css';
import '../../index.css';

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
          <img src={cart} className='cart-logo' />
          <p>2</p>
        </div>
        <div className="cart-price">
          <p>Shopping cart:</p>
          <span>$57.00</span>
        </div>
      </div>
      <div className="navi-bar">
        <div className="navi-left-side">
          <div className="n-list">
            <ul style={{ listStyleType: 'none' }}>
              <li>Home</li>
              <li>Shop</li>
              <li>Pages</li>
              <li>About Us</li>
              <li>Contact Us</li>
            </ul>
          </div>
        </div>
        <div className="navi-right-side">
          <img src={phone} alt="" className="phone-logo" />
          <p>(21) 37 2115 997</p>
        </div>
      </div>
    </div>
  )
}

export default Header
