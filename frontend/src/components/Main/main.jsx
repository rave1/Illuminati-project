import React from 'react';
import './main.css';
import cup from '../../images/Cup.png';


function Product ({ image, name }) {
  return (
    <div className='product'>
             <img src={cup} alt="" className="product-picture" />
            <div className='product-name'>
              <p>lorem</p>
            </div>
          </div>
  )
}

function PopularProduct({image, name}) {
  return (
    <div className='popular-product'>
             <img src={cup} alt="" className="popular-product-picture" />
            <div className='popular-product-name'>
              <p>Lorem</p>
            </div>
          </div>
  );
}


const main = () => {
  return (
<<<<<<< HEAD
    <div className='main-container'>
      <div className='left-section'>

=======
    <div>
      <div className='info-bar'>
        <p>Popular categories</p>
        <button>View all</button>
>>>>>>> c194312e0a8f4dcfeb14be6a2ed4379f3dcb22eb
      </div>
      <div className="center-section">
        <div>
          <div className='info-bar'>
              <p>Popular categories</p>
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
              <p>Popular Product</p>
            </div>
            <div className='container'>
                <div className='popular-main'>
                  <PopularProduct />
                  <PopularProduct />
                  <PopularProduct />
                  <PopularProduct />
                  <PopularProduct />
                  <PopularProduct />
                  <PopularProduct />
                  <PopularProduct />
                  <PopularProduct />
                  <PopularProduct />
                </div>
            </div>
          </div>
        </div>
      
       
      <div className='right-section'>

      </div>
    </div>
  )
}

export default main
