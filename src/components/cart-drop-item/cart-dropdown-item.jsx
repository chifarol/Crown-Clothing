import './cart-dropdown-item.scss';


const CartDropdownItem = ({ cartItem }) => {
    const { name, price, quantity, imageUrl } = cartItem;
    return (
        <div className='cartItem-container'>
            <div>
                <img src={imageUrl} alt={name} />
            </div>
            <div>
                <h2>{name}</h2>
                <span>{quantity} x ${price}</span>
            </div>
        </div>
    )
}

export default CartDropdownItem;