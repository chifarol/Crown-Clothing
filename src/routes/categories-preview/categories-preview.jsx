import { CategoriesContext } from '../../components/contexts/categoriescontext';
import ProductCard from '../../components/cards/product-card';
import { Fragment, useContext } from 'react';
import './categories-preview.scss'

const CategoriesPreview = () => {
    const { categoryMap } = useContext(CategoriesContext);
    return (
        <><div className='products-container'>
            {
                Object.keys(categoryMap).map(category => (
                    <Fragment key={category}>
                        <h1><a href={`/shop/${category}`}> {category.toUpperCase()}</a></h1>
                        {categoryMap[category].filter((_, index) => (index < 4)).map(product => {
                            return (<ProductCard product={product} key={product.id} />

                            )
                        })}
                    </Fragment>
                ))
            }
            {/* {
                products.map(product => {
                    return (
                        <ProductCard product={product} key={product.id} />
                    )
                })
            } */}
        </div>
        </>
    )
}

export default CategoriesPreview;