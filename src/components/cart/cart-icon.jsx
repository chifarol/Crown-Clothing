import './cart-icon.scss';
import { ReactComponent as ShoppingIcon } from '../assets/shopping-bag.svg';

const CartIcon = ({ total, ...onClick }) => {
    return (
        <div className="cart-icon-container" {...onClick}>
            <ShoppingIcon className="shopping-icon" />
            <span className="item-count">{total}</span>
        </div>
    )
}

export default CartIcon