import { Route, Routes } from 'react-router-dom';
import CategoriesPreview from '../categories-preview/categories-preview';
import ProductCategory from '../../components/productCategory/product-category';
import './shop.scss'

const Shop = () => {

    return (
        <Routes>
            <Route index element={<CategoriesPreview />} />
            <Route path=":category" element={<ProductCategory />} />
        </Routes>

    )
}

export default Shop;