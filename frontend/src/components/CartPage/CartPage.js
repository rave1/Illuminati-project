// CartPage.js
import React, { useEffect, useState } from 'react';
import Cart from '../cart/Cart';

const CartPage = () => {
  const initialCart = JSON.parse(localStorage.getItem('cart')) || [];
  const [cart, setCart] = useState(initialCart);

  const removeFromCart = (productId) => {
    const updatedCart = cart.filter(item => item.id !== productId);
    setCart(updatedCart);
  };

  const updateQuantity = (productId, newQuantity) => {
    if (newQuantity <= 0) {
      removeFromCart(productId);
    } else {
      const updatedCart = cart.map(item => {
        if (item.id === productId) {
          return { ...item, quantity: newQuantity };
        }
        return item;
      });
      setCart(updatedCart);
    }
  };

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  return (
    <div>
      <h2>Your Shopping Cart</h2>
      <Cart cart={cart} removeFromCart={removeFromCart} updateQuantity={updateQuantity} />
      {/* Dodaj tutaj dodatkowe elementy strony koszyka, jeśli są potrzebne */}
    </div>
  );
};

export default CartPage;
