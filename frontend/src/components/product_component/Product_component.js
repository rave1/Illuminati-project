import './Product_component.css';
import bag from '../../images/Bag.png';


export default function ProductComponent(props) {
  const { name, price, image } = props;

  const handleAddToCart = () => {
  };

  return (
    <div className='product_component_box'>
      <a href=''><img src={image} alt="Product Image" /></a>
      <div className='product_component_box_info_all'>
        <div className='product_component_box_info_name_price'>
          <a href=''><h2>{name}</h2></a>
          <h3>{price} zł</h3>
        </div>
        <button onClick={handleAddToCart}>
            <img src={bag} />
          </button> 
      </div>
    </div>

    
    
  );
}