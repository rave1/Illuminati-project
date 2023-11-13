import React from 'react'
import logo from '../../images/main-logo.png';
import './footer.css'


const footer = () => {
  return (
    <div className='footer'>
      <div className="container-footer">
        <div className="top-section">
          <div className="contact-box">
            <div>
             <img src={logo} alt="" className="logo" />
            </div>
            <div>
              <p>Contact us for more</p>
              <p>(21) 372 115 997 or z3kawki@gmail.com</p>
            </div>
          </div>
          <div className="info-footer">
            <p>My accounts</p>
            <p>Order Histroy</p>
            <p>Shoping Cart</p>
            <p>Wish List</p>
          </div>
          <div className="info-footer">
            <p>My accounts</p>
            <p>Order Histroy</p>
            <p>Shoping Cart</p>
            <p>Wish List</p>
          </div>
          <div className="info-footer">
            <p>My accounts</p>
            <p>Order Histroy</p>
            <p>Shoping Cart</p>
            <p>Wish List</p>
          </div>
          <div className="info-footer">
            <p>My accounts</p>
            <p>Order Histroy</p>
            <p>Shoping Cart</p>
            <p>Wish List</p>
          </div>
        </div>
        <div className="down-section">
          <p>Illuminati eCommerce @ 2023 All Right Reserved</p>
          
        </div>
      </div>
     
    </div>
  )
}

export default footer