import React from 'react';
import './main.css';
import AppContainer from '../product_component/ProductsBox';

function Product({ image, name }) {
  return (
    <div className='product'>
      <img src={image} alt="" className="product-picture" />
      <div className='product-name'>
        <p>{name}</p>
      </div>
    </div>
  );
}

const Main = () => {
  return (
    <div className='main-container'>
      <div className='left-section'></div>
      <div className="center-section">
        <div>
          <div className='info-bar'>
            <p className='info-p'>Popular categories</p>
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

        <div>
          <div className='info-bar'>
            <p className='info-p'>Popular Product</p>
          </div>
          <div className='container'>
            <div className='popular-main'>
              <AppContainer />
            </div>
          </div>
        </div>
      </div>

      <div className='right-section'></div>
    </div>
  );
};

export default Main;
