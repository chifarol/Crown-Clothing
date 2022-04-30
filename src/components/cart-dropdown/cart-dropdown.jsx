import './cart-dropdown.scss'
import CustomButton from '../button/button'

const CartDropdown = () => {
    return (
        <div className="cart-dropdown-container" >
            <div className="cart-item">

            </div>
            <CustomButton label="Checkout" />
        </div>
    )
}

export default CartDropdown;