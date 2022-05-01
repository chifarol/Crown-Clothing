import { ProductContext } from '../../components/contexts/productcontext';
import ProductCard from '../../components/cards/product-card';
import { useContext } from 'react';
import './shop.scss'

const Shop = () => {
    const { products } = useContext(ProductContext);
    return (
        <div className='products-container'>
            {
                products.map(product => {
                    return (
                        <ProductCard product={product} key={product.id} />
                    )
                })
            }
        </div>
    )
}

export default Shop;