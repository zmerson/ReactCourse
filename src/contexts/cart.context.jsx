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

const removeItemFromCart = (cartItems, cartItemToRemove) => {
    const existingCartItem = cartItems.find(
        (cartItem) => cartItem.id === cartItemToRemove.id);

    if (existingCartItem.quantity == 1) { //if there is only 1 item, return an array with the item removed. Else, decrement the item.
        return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id);
    }

    return cartItems.map((cartItem) => cartItem.id === cartItemToRemove.id ? 
        {...cartItem, quantity: cartItem.quantity - 1 }
        : cartItem);
};

const clearCartItem = (cartItems, cartItemToClear) =>
  cartItems.filter((cartItem) => cartItem.id !== cartItemToClear.id);


export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () => {},
    cartItems: [],
    addItemToCart: () => {},
    removeItemFromCart: () => {},
    clearItemFromCart: () => {},
    cartCount: 0,
    cartTotal: 0,
});


export const CartProvider = ({ children }) => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [cartCount, setCartCount] = useState(0);
    const [cartTotal, setCartTotal] = useState(0);

    useEffect(() => {
        const newCartCount = cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0)
        setCartCount(newCartCount)
    }, [cartItems])
    
    useEffect(() => {
        const newCartTotal = cartItems.reduce(
            (total, cartItem) => total + cartItem.quantity * cartItem.price, 0)
        setCartTotal(newCartTotal)
    }, [cartItems])

    const addItemToCart = (productToAdd) => {
        setCartItems(addCartItem(cartItems, productToAdd))
    }
    const externalRemoveItemFromCart = (productToRemove) => {
        setCartItems(removeItemFromCart(cartItems, productToRemove));
    }

    const clearItemFromCart = (cartItemToClear) => {
        setCartItems(clearCartItem(cartItems, cartItemToClear));
      };

    const value = { 
        isCartOpen,
        setIsCartOpen,
        addItemToCart, 
        cartItems,
        cartCount,
        externalRemoveItemFromCart,
        clearItemFromCart,
        cartTotal
    };

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