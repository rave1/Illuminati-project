import React from 'react'
import bag from '../../images/Bag.png'

const AddToCartButton = ({ onClick }) => {
  return (
    <div className='w-1/3 flex items-center justify-center'>
    <button onClick={onClick}>
      <img src={bag} alt="Add to Cart" />
    </button>
    </div>
  )
}

export default AddToCartButton
