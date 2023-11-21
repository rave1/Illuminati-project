import React from 'react'
import './Cart.css'
import RemoveFromCartButton from './RemoveFromCartButton'
import QuantityControl from './QuantityControl'

const Cart = ({ cart, removeFromCart, updateQuantity }) => {
  if (!cart) {
    return (
      <div>
      <p>Your cart is empty</p>;
      <p>Your cart is empty</p>;
      <p>Your cart is empty</p>;
      <p>Your cart is empty</p>;
      <p>Your cart is empty</p>;
      <p>Your cart is empty</p>;
      </div>
    )
  }

  return (
    <div className="cart">
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
    </div>
  )
}

export default Cart
