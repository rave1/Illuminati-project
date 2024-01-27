import React, { useEffect, useState } from 'react'
import { useAuth } from '../../context/useAuth'
import './Shop.css'
import axios from 'axios'
import ProductComponent from '../product_component/Product_component'

export const ShopPage = () => {
  const addToCart = (product) => {
    const existingItem = cart.find(item => item.id === product.id)

    if (existingItem) {
      updateQuantity(existingItem.id, existingItem.quantity + product.quantity)
    } else {
      setCart([...cart, product])
    }
  }

  const removeFromCart = (productId) => {
    const updatedCart = cart.filter(item => item.id !== productId)
    setCart(updatedCart)
  }

  const updateQuantity = (productId, newQuantity) => {
    if (newQuantity <= 0) {
      removeFromCart(productId)
    } else {
      const updatedCart = cart.map(item => {
        if (item.id === productId) {
          return { ...item, quantity: newQuantity }
        }
        return item
      })
      setCart(updatedCart)
    }
  }

  const [products, setProducts] = useState([])

  useEffect(() => {
    axios.get(`http://${process.env.REACT_APP_BACKEND}/shop/products/`)
      .then((result) => {
        console.log(result.data)
        setProducts(result.data.results)
      })
      .catch((error) => console.log(error))
  }, [])

  return (
        <div className='main-container w-screen'>
          {/* <div className='left-section'>
          </div> */}
          <div className="grid gap-4 mt-40 w-screen">
            <div className='items-center justify-center md '>
              <div className='flex items-center justify-center'>
                  <p className='info-p mx-10'>Popular categories</p>
              </div>
              <div className='container flex gap-4 w-screen '>
                  <div className='flex flex-col sm md:flex-row gap-4 grid-cols-5 w-screen mx-32'>
                    {products.map((products) => {
                      return (
                        <ProductComponent key={products.id} {...products} addToCart={addToCart} />
                      )
                    })}
                  </div>
              </div>
            </div>

              <div className='flex items-center justify-center'>
                  <p className='info-p'>Popular categories</p>
                </div>
                <div className='container grid gap-4 w-screen'>
                    <div className='flex flex-col sm md:flex-row gap-4 grid-cols-5 w-screen mx-32'>
                      {products.map((products) => {
                        return (
                          <ProductComponent key={products.id} {...products} addToCart={addToCart} />
                        )
                      })}
                    </div>
                </div>
            </div>
          {/* <div className='right-section'>
          </div> */}
        </div>
  )
}

export default ShopPage
