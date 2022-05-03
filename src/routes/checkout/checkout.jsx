import './checkout.scss'
import CheckoutItem from './checkout-item'
import { Fragment, useContext, useEffect } from 'react'
import { CartContext } from '../../components/contexts/cartcontext'

const Checkout = () => {
    const { addedItems, setIsCartOpen } = useContext(CartContext);
    const totalPrice = addedItems.reduce((prev, curr) => {
        return prev + (curr.price * curr.quantity)
    }, 0)
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
                <div className='total'>Total: {totalPrice}</div>
            </div>

        </Fragment>
    )
}

export default Checkout;