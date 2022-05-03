import { CategoriesContext } from '../contexts/categoriescontext';
import ProductCard from '../cards/product-card';
import { Fragment, useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './product-category.scss'

const ProductCategory = () => {
    const { categoryMap } = useContext(CategoriesContext);
    const { category } = useParams();
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        setCategories(categoryMap[category]);
    }, [category, categoryMap])
    return (
        <>
            <div className='cat-container'>
                <h1>{category.toUpperCase()}</h1>
                {categories && categories.map(product => {
                    return (<ProductCard product={product} key={product.id} />

                    )
                })}
            </div>
        </>
    )
}

export default ProductCategory;