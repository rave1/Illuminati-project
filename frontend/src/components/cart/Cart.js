import React, { useState } from 'react'
// import './Cart.css'
import RemoveFromCartButton from './RemoveFromCartButton'
import QuantityControl from './QuantityControl'
import Cup from '../../images/Cup.png'
import { useCart } from './CartContext'
import { Outlet, Link } from 'react-router-dom'


const Cart = ({ cart, removeFromCart, updateQuantity }) => {
  console.log(cart)
  if (!cart) {
    return (
      <div>
      <p>Your cart is empty</p>;
      </div>
    )
  }

  const { cart: cartItems, totalPrice } = useCart()
  const [cartQuantity, setCartQuantity] = useState(0)

  function placeOrder (cart) {
    if (cart.length !== 0) {
      console.log(cart)
      console.log(cart.map(({ a }) => a))
    }
    localStorage.setItem('orderItems', JSON.stringify(cart));
  }

  return (
      <div className='bg-brown h-screen flex items-center justify-center text-black'>
      <div className='bg-white w-[1200px] py-8  mx-auto flex flex-row items-center justify-center drop-shadow-2xl rounded-md'>
      <ul className='rounded-md bg-white text-black drop-shadow-lg overflow-hidden w-[750px]'>
        {cart.map((item) => (
          <li className='rounded-md overflow-hidden bg-amber-100 border px-7 py-5 m-5 flex items-center justify-between drop-shadow-lg' key={item.id}>
            <div className="flex w-24 h-24 bg-white rounded-md items-center">
                <img className='' src={Cup} alt="Item photo" />
                <span className='px-4 font-bold font-mono'>{item.name}</span>
            </div>
            <div className='flex items-center '>
              <div className='m-5 font-bold px-4 font-mono'>{item.price} zł</div>
              <div>
              <QuantityControl
                  quantity={item.quantity}
                  onDecrease={() => updateQuantity(item.id, item.quantity - 1)}
                  onIncrease={() => updateQuantity(item.id, item.quantity + 1)}
                />
              </div>
              <div className='m-3 drop-shadow-lg'>
                <RemoveFromCartButton onClick={() => removeFromCart(item.id)} />
              </div>
            </div>
          </li>
        ))}
      </ul>
      <div className='bg-white rounded-md m-4 flex flex-col items-center drop-shadow-lg'>
        <div className='w-full p-3 border-b-4'>
          <span className='mx-4 font-bold'>Payment Details</span>
        </div>
        <div className='w-full p-3 flex justify-between border-b-4'>
          <span className='mx-4'>Total</span>
          <span className='mx-4'>{totalPrice.toFixed(2)} zł</span>
        </div>
        <Link to='order'>
        <button onClick={() => placeOrder(cart)} className="drop-shadow-lg m-6 transition ease-in-out rounded bg-amber-200 font-mono p-4 mx-8 text-xl hover:bg-amber-500">

          Złóż zamówienie
          </button></Link>
      </div>
    </div>
    </div>
  )
}

export default Cart
