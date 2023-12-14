import React from 'react'

const QuantityControl = ({ quantity, onDecrease, onIncrease }) => {
  return (
    <div className="quantity-controls">
      <button className='btn rounded-md p-1 px-3 m-2 bg-amber-200 hover:bg-amber-500 w-auto drop-shadow-2xl font-bold drop-shadow-lg' onClick={onDecrease}>-</button>
      <span className='font-bold'>{quantity}</span>
      <button className='btn rounded-md p-1 px-3 m-2 bg-amber-200 hover:bg-amber-500 w-auto drop-shadow-2xl font-bold drop-shadow-lg' onClick={onIncrease}>+</button>
    </div>
  )
}

export default QuantityControl
