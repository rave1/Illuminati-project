import React from 'react'
import './Cart.css'
import RemoveFromCartButton from './RemoveFromCartButton'
import QuantityControl from './QuantityControl'

const Cart = ({ cart, removeFromCart, updateQuantity }) => {
  console.log(cart)
  if (!cart) {
    return (
      <div>
      <p>Your cart is empty</p>;
      </div>
    )
  }

  function placeOrder(cart){
    if (cart.length !== 0){
      console.log(cart)
      console.log(cart.map(({a}) => a))
    }
  }

  return (
    <div className="cart mt-10 grid gap-4 h-screen">
      <h2>Cart</h2>
      <ul className='cart_box'>
        {cart.map((item) => (
          <li className='cart_item' key={item.id}>
            {item.name} - Price: {item.price} zł | {item.description}
            <div className='cart_item_buttons'>
              <QuantityControl
                quantity={item.quantity}
                onDecrease={() => updateQuantity(item.id, item.quantity - 1)}
                onIncrease={() => updateQuantity(item.id, item.quantity + 1)}
              />
              <RemoveFromCartButton onClick={() => removeFromCart(item.id)} />
            </div>
          </li>
        ))}
      </ul>
      <button onClick={() => placeOrder(cart)} className="transition ease-in-out rounded outline outline-1 bg-amber-200 font-serif p-4 mx-8 text-xl hover:bg-amber-500">Złóż zamówienie</button>
    </div>
  )
}

export default Cart
