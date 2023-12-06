import React, { useEffect, useState } from 'react'
import logo from '../../images/main-logo.png'
import cart from '../../images/cart.png'
import search from '../../images/search-logo.png'
import phone from '../../images/phone-logo.png'
import './header.css'
import '../../index.css'
import { Outlet, Link } from 'react-router-dom'
import { useCart } from '../cart/CartContext'
import UserIcon from '../../icons/UserIcon'
import Dropdown from '../Dropdown/Dropdown'

export const Header = () => {
  const { cart: cartItems } = useCart()
  const [cartQuantity, setCartQuantity] = useState(0)

  useEffect(() => {
    const totalQuantity = cartItems.reduce((total, item) => total + item.quantity, 0)
    setCartQuantity(totalQuantity)
  }, [cartItems])

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
      <div className="grid grid-cols-2 gap-4 place-content-center">
        <Link to='cart'>
          <div className="cart-logo-container">
            <img src={cart} className='cart-logo' />
            <p id="cart-quantity">{cartQuantity}</p>
          </div>
          <span className="cart-price">$57.00</span>
        </Link>
        <button className='flex justify-items-center items-center w-full relative'>
          <UserIcon/>
          <Dropdown/>
        </button>
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
