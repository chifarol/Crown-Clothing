import './checkout.scss'
import CheckoutItem from './checkout-item'
import { Fragment, useContext, useEffect } from 'react'
import { CartContext } from '../../components/contexts/cartcontext'

const Checkout = () => {
    const { addedItems, setIsCartOpen } = useContext(CartContext);
    useEffect(e => setIsCartOpen(false), [])

    return (
        <Fragment>
            <div className='checkout-container-plus'>
                <div className='checkout-container'>
                    <span>Products</span>
                    <span>Description</span>
                    <span>Quantity</span>
                    <span>Price</span>
                    <span>Remove</span>
                </div>
                {
                    addedItems.map(e => { return <CheckoutItem item={e} key={e.id} /> })
                }
            </div>
        </Fragment>
    )
}

export default Checkout;