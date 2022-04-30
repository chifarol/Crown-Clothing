import './product-card.scss';
import CustomButton from '../button/button';

const ProductCard = ({ product }) => {
    const { name, price, imageUrl } = product
    return (
        <div className="product-card-container">
            <img src={imageUrl} alt={name} />
            <div className="footer">
                <span className="name">{name}</span>
                <span className="price">{price}</span>
            </div>
            <CustomButton buttonType='inverted' label="Add to Cart"></CustomButton>
        </div>
    )
}

export default ProductCard