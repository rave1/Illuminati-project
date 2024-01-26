import React, { useState } from 'react'
import './Product_component.css'
import AddToCartButton from '../cart/AddToCartButton'
import QuantityControl from '../cart/QuantityControl'
import { useCart } from '../cart/CartContext'
import cup from '../../images/Cup.png'

export const ProductComponent = (props) => {
  const { id, name, price, quantity, description, image } = props
  const [productQuantity, setProductQuantity] = useState(1)
  const { addToCart } = useCart()

  const handleAddToCart = () => {
    const product = {
      id,
      name,
      price,
      quantity: productQuantity,
      description,
      image
    }
    addToCart(product)
  }

  const handleIncreaseQuantity = () => {
    setProductQuantity(productQuantity + 1)
  }

  const handleDecreaseQuantity = () => {
    if (productQuantity > 1) {
      setProductQuantity(productQuantity - 1)
    }
  }

  return (
    <div className='product_component_box flex flex-col rounded-lg text-black drop-shadow-lg'>
      <div className='image-container'>
         <a href=''>
          <img src={`/static/${image}`} /*src={cup}*/ alt="Product-Image" className='Product-Image'/>
         </a>
      </div>


        <div className='w-full flex items-center justify-evenly h-16 font-bold'>
          <a href=''>
          <h2>{name}</h2></a>
          <h3>{price} zł</h3>
        </div>

        <div className='flex flex-row items-center  m-3 w-full'>
          <QuantityControl
          quantity={productQuantity}
          onDecrease={handleDecreaseQuantity}
          onIncrease={handleIncreaseQuantity}
          />
          <AddToCartButton onClick={handleAddToCart} />
        </div>
    </div>
  )
}

export default ProductComponent
