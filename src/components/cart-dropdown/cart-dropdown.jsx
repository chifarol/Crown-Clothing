import CustomButton from '../button/button';
import CartDropdownItem from '../cart-drop-item/cart-dropdown-item';
import { Link } from 'react-router-dom'
import './cart-dropdown.scss';

const CartDropdown = ({ addedItems }) => {
    return (
        <div className="cart-dropdown-container" >
            <div className="cart-items">
                {/* <CartDropdownItem cartItem={addedItems[0]} /> */}
                {

                    addedItems.map(elem => { return (<CartDropdownItem cartItem={elem} key={elem.id} />) })

                }

            </div>


            <Link to='/checkout' className='button-container'>Go to Checkout</Link>


        </div>
    )
}

export default CartDropdown;