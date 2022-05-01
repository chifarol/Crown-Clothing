import './checkout-item.scss';
import { CartContext } from '../../components/contexts/cartcontext';
import { useContext } from 'react';

const CheckoutItem = ({ item }) => {
    const { imageUrl, name, quantity, price } = item;
    const { increment, decrement, removeItem } = useContext(CartContext);
    const onClickDecrement = () => {
        decrement(item)
    }
    const onClickRemove = () => {
        removeItem(item)
    }
    const onClickIncrement = () => {
        increment(item)
    }
    return (
        <div className='checkout-item-container'>
            <div><img src={imageUrl} alt={name} quantity />
            </div>
            <div className='details-wrapper'>
                <div>{name}</div>
                <div className='specialChar-container'>
                    <b className='specialChar' onClick={onClickDecrement}>&lsaquo;</b>
                    {quantity}
                    <b className='specialChar' onClick={onClickIncrement}>&rsaquo;</b>
                </div>
                <div>
                    {price}
                </div>
                <div className='specialChar-container'>
                    <span className='specialChar' onClick={onClickRemove}>&#x02A2F;</span>
                </div>
            </div>
        </div>
    )
}

export default CheckoutItem;