import { createContext, useState, useEffect } from 'react';
// import shopData from '../../shop-data';
import { addCollectionAndDocuments, getCategoriesAndDocuments } from '../utils/firebase/firebase';

export const CategoriesContext = createContext();

export const CategoriesProvider = ({ children }) => {
    // useEffect(
    //     () => { addCollectionAndDocuments('categories', shopData) }, []);
    useEffect(() => {
        getCategoriesAndDocuments().then(res => {
            const categories = res;
            console.log('hey', categories);
            setcategoryMap(categories);
        })
    }, []);
    const [categoryMap, setcategoryMap] = useState({});
    const value = { categoryMap, setcategoryMap };
    return (
        <CategoriesContext.Provider value={value}>
            {children}
        </CategoriesContext.Provider>
    )
}