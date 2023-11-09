import React from 'react'
import './main.css'
import cup from '../../images/Cup.png'

function Product ({ image, name }) {
  return (
    <div className='product'>
             <img src={image} alt="" className="product-picture" />
            <div className='product-name'>
              <p>{name}</p>
            </div>
          </div>
  )
}

const main = () => {
  return (
    <div>
      <div className='info-bar'>
        <p>Popular categories</p>
        <button>View all</button>
      </div>
      <div className='container'>
        <div className='main'>
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
        </div>
      </div>
    </div>
  )
}

export default main
