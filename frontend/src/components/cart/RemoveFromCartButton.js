import React from 'react'
import Trash from '../../images/Trash.svg'

const RemoveFromCartButton = ({ onClick }) => {
  return (
    <button className='py-2 px-3 rounded-md drop-shadow-lg bg-red-500 hover:bg-red-600' onClick={onClick}>
      <img className='invert' src={Trash}></img>
    </button>
  )
}

export default RemoveFromCartButton
