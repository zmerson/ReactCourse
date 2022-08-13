// future me:
// please do a big think on this file 

import {createContext, useState, useEffect} from 'react';

const addCartItem = (cartItems, productToAdd) => {
    //find if cart items already contains the productToAdd
    const existingCartItem = cartItems.find((cartItem) => cartItem.id === productToAdd.id);
    //increment quantity if it already exists, else, add to cart.
    if (existingCartItem) {
        console.log('existing item')
        return cartItems.map((cartItem) => cartItem.id === productToAdd.id ? 
        {...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem);
    }
    console.log('new item added')
    //return new array with modified cartItems/new cart item
    return [...cartItems, { ...productToAdd, quantity: 1}];

}
export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () => {},
    cartItems: [],
    addItemToCart: () => {},
    cartCount: 0,
});


export const CartProvider = ({ children }) => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [cartCount, setCartCount] = useState(0);

    useEffect(() => {
        const newCartCount = cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0)
        setCartCount(newCartCount)
    }, [cartItems])
    
    const addItemToCart = (product) => {
        setCartItems(addCartItem(cartItems, product))
    }
    const value = { isCartOpen, setIsCartOpen, addItemToCart, cartItems, cartCount};

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
  };
 

  /* object structure
products {
    id,
    name,
    price,
    imageUrl
}
cartItem {
    id,
    name,
    price,
    imageUrl,
    quantity
}
*/