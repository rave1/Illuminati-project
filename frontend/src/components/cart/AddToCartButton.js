import React from 'react'
import bag from '../../images/Bag.png'

const AddToCartButton = ({ onClick }) => {
  return (
    <button onClick={onClick}>
      <img src={bag} alt="Add to Cart" />
    </button>
  )
}

export default AddToCartButton
