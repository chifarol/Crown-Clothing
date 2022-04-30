import { createContext, useState, useEffect } from 'react';
import shopdata from '../../shop-data.json';

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
    const [products, setProducts] = useState(shopdata);
    const value = { products, setProducts };
    return (
        <ProductContext.Provider value={value}>
            {children}
        </ProductContext.Provider>
    )
}