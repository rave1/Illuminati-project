import React from 'react';
import logo from '../../images/main-logo.png';
import cart from '../../images/cart.png';
import search from '../../images/search-logo.png';
import phone from '../../images/phone-logo.png'
import './header.css';
import '../../index.css';
import { Outlet, Link } from "react-router-dom";



export const Header = () => {
  return (
    <>
    <div className="header">
      <div className="left-section">
        <Link to='/'><img src={logo} alt="" className="main-logo" /></Link>
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
              <li>
                <Link to='/'>Home</Link>
              </li>
              <li>
                <Link to='/shop'>Shop</Link>
              </li>
              <li>
                <Link to='/pages'>Pages</Link>
              </li>
              <li>
                <Link to='/aboutus'>About Us</Link>
              </li>
              <li>
                <Link to='/contactus'>Contact Us</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="navi-right-side">
          <img src={phone} alt="" className="phone-logo" />
          <p>(21) 372 115 997</p>
        </div>
      </div>
    </div>
    <Outlet />
    </>
  )
}

export default Header
