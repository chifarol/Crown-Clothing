import './product-card.scss';
import CustomButton from '../button/button';
import { CartContext } from '../contexts/cartcontext';
import { useContext } from 'react'

const ProductCard = ({ product }) => {
    const { name, price, imageUrl, id } = product;
    const { addItemToCart } = useContext(CartContext);

    const addOnCLick = () => {
        addItemToCart(product);
    };
    return (
        <div className="product-card-container">
            <img src={imageUrl} alt={name} />
            <div className="footer">
                <span className="name">{name}</span>
                <span className="price">{price}</span>
            </div>
            <CustomButton buttonType='inverted' label="Add to Cart" onClick={addOnCLick}></CustomButton>
        </div>
    )
}

export default ProductCard