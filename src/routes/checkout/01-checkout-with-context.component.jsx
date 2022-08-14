import './checkout.styles.scss'
import {useContext} from 'react';
import {CartContext} from '../../contexts/cart.context'
import CheckoutItem from '../../components/checkout-item/checkout-item.component'

const Checkout = () => {
    const {cartItems, addItemToCart, externalRemoveItemFromCart} = useContext(CartContext);
    
    return (
        <div className='checkout-container'>
                <div className='header-block'>
                    <span>Product</span>
                </div>
                <div className='header-block'>
                    <span>Description</span>
                </div>
                <div className='header-block'>
                    <span>Quantity</span>
                </div>
                <div className='header-block'>
                    <span>Price</span>
                </div>
                <div className='header-block'>
                    <span>Remove</span>
                </div>
            <div>
                {
                    cartItems.map((cartItem) => {
                        const {id, name, quantity} = cartItem
                     return (
                     <div key={id}>
                        <h2>{name}</h2>
                        <span>{quantity}</span>
                        <br/>
                        <span onClick={() => externalRemoveItemFromCart(cartItem)}>decrement</span>
                        <br/>
                        <span onClick={() => addItemToCart(cartItem)}>increment</span>
                    </div>
                     )
                    })}
                    <span className="total">Total: 0</span>
            </div>
        </div>
    )
}

export default Checkout;