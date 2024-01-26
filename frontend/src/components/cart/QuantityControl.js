import React from 'react'

const QuantityControl = ({ quantity, onDecrease, onIncrease }) => {
  return (
    <div className="quantity-controls flex flex-row items-center justify-evenly w-2/3">
      <button className='py-2 px-3 btn rounded-md bg-amber-200 hover:bg-amber-500 drop-shadow-2xl font-bold drop-shadow-lg' onClick={onDecrease}>-</button>
      <span className='font-bold'>{quantity}</span>
      <button className='py-2 px-3 btn rounded-md bg-amber-200 hover:bg-amber-500 drop-shadow-2xl font-bold drop-shadow-lg' onClick={onIncrease}>+</button>
    </div>
  )
}

export default QuantityControl
