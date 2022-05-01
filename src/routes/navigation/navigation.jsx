import { Outlet, Link } from "react-router-dom";
import { Fragment, useContext } from "react";
import { ReactComponent as CrownLogo } from "../../components/assets/crown.svg";
import { UserContext } from '../../components/contexts/usercontext';
import { CartContext } from '../../components/contexts/cartcontext';
import { signOutUser } from '../../components/utils/firebase/firebase';
import CartIcon from '../../components/cart/cart-icon';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown';
import './navigation.scss'

const Navigation = () => {
    const { currentUser } = useContext(UserContext);
    const { isCartOpen, setIsCartOpen, addedItems } = useContext(CartContext);
    let totalItems = addedItems.reduce((previousValue, currentValue) => {
        return previousValue + currentValue.quantity
    }, 0);

    const toggleCart = () => setIsCartOpen(!isCartOpen);
    const finalizeSignOut = async () => {
        const out = await signOutUser();
    }

    return (
        <Fragment>
            <div className="navigation">

                <Link className="logo-container" to="/"><CrownLogo className="logo" /> </Link>

                <div className="nav-links-container">
                    <Link className="nav-link" to="/shop"> SHOP </Link>
                    {currentUser ? (
                        <span className="nav-link" onClick={finalizeSignOut}> SIGN OUT </span>
                    ) : (<Link className="nav-link" to="/auth"> SIGN IN/UP </Link>)
                    }
                    <div>
                        <CartIcon onClick={toggleCart} total={totalItems} />
                        {isCartOpen && <CartDropdown addedItems={addedItems} />}
                    </div>


                </div>

            </div>
            <Outlet />
        </Fragment>

    )
}

export default Navigation;