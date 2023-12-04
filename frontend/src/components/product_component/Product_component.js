import React, { useState } from 'react'
import './Product_component.css'
import AddToCartButton from '../cart/AddToCartButton'
import QuantityControl from '../cart/QuantityControl'
import { useCart } from '../cart/CartContext'

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
    <div className='product_component_box flex flex-col rounded-lg'>
      <div className='image-container'>
         <a href=''><img src={image} alt="Product-Image" className='Product-Image'/></a>
      </div>

      <div className='product_component_box_info_all'>
        <div className='w-full'>
          <a href=''>
          <h2>{name}</h2></a>
          <h3>{price} zł</h3>
        </div>
      </div>
        <div className='product_component_box_info_buttons p-10'>
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
