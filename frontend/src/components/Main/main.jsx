import React, { useEffect, useState } from 'react'
import './main.css'
import AppContainer from '../product_component/ProductsBox'
import axios from 'axios'
import ProductComponent from '../product_component/Product_component'

const main = () => {


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
      console.log(result.data);
      setProducts(result.data.results);
    })
    .catch((error) => console.log(error))
  }, [])

  return (
    <div className='h-screen flex items-center justify-center flex-col  '>
           <div className='bg-white w-[1200px] py-8  mx-auto- flex justify-center drop-shadow-2xl rounded-md mt-24 mb-10'>
            </div>
            </div>
  )
}

export default main
