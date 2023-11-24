import React, { useEffect, useState } from 'react'
import ProductComponent from './Product_component'
import { Products } from './Products_data'
import '../product_component/Product_component.css'
import { CartProvider } from '../cart/CartContext'
import axios from "axios";

const AppContainer = () => {
  const initialCart = JSON.parse(localStorage.getItem('cart')) || []
  const [cart, setCart] = useState(initialCart)

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

  useEffect(() => {
    axios.get("http://127.0.0.1:8000/shop/products")
      .then((response) => {
        console.log(product);
      })
  }, []); 

  return (
    <CartProvider>
      <div className="app">
        <div className="products">
          {Products.map((product) => (
            <ProductComponent key={product.id} {...product} addToCart={addToCart} />
          ))}
        </div>
      </div>
    </CartProvider>
  )
}

export default AppContainer
