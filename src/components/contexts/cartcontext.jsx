import { createContext, useState } from 'react';

export const CartContext = createContext();

const verifyAndAddToCart = (addedItems, productToAdd) => {

    let addedItemsClone = addedItems.map(e => e);
    if (addedItemsClone.find(e => e.id === productToAdd.id)) {
        let existingItemIndex = addedItemsClone.findIndex(e => e.id == productToAdd.id);
        addedItemsClone[existingItemIndex].quantity++;
        return addedItemsClone;
    }
    else {
        productToAdd.quantity = 1;
        addedItemsClone.push(productToAdd);
        return addedItemsClone;
    }

}
const incrementQuantity = (addedItems, productToIncrement) => {
    let addedItemsClone = addedItems.map(e => e);
    let existingItemIndex = addedItemsClone.findIndex(e => e.id == productToIncrement.id);
    if (addedItemsClone[existingItemIndex].quantity < 100) {
        addedItemsClone[existingItemIndex].quantity++;
        return addedItemsClone;
    }
    else {
        return addedItemsClone
    }

}
const decrementQuantity = (addedItems, productToDecrement) => {
    let addedItemsClone = addedItems.map(e => e);
    let existingItemIndex = addedItemsClone.findIndex(e => e.id == productToDecrement.id);
    if (addedItemsClone[existingItemIndex].quantity > 0) {
        addedItemsClone[existingItemIndex].quantity--;
        return addedItemsClone;
    }
    else {
        return addedItemsClone
    }

}
const removeItemFromCart = (addedItems, productToRemove) => {
    let addedItemsClone = addedItems.filter(e => e.id !== productToRemove.id);
    return addedItemsClone;
}
export const CartContextProvider = ({ children }) => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [addedItems, setAddedItems] = useState([]);
    const addItemToCart = (productToAdd) => {
        setAddedItems(verifyAndAddToCart(addedItems, productToAdd));
        console.log(addedItems);
    };
    const removeItem = (productToRemove) => {
        setAddedItems(removeItemFromCart(addedItems, productToRemove));
    }
    const decrement = (productTodecrement) => {
        setAddedItems(decrementQuantity(addedItems, productTodecrement));
    }
    const increment = (productToIncrement) => {
        setAddedItems(incrementQuantity(addedItems, productToIncrement));
    }
    const value = { isCartOpen, setIsCartOpen, addedItems, setAddedItems, addItemToCart, increment, decrement, removeItem };
    return (
        <CartContext.Provider value={value} > {children}</CartContext.Provider>
    )
}