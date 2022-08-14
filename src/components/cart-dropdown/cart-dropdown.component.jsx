import Button from '../button/button.component'
import './cart-dropdown.styles.scss'
import {useContext} from 'react';
import {CartContext} from '../../contexts/cart.context';
import CartItem from '../cart-item/cart-item.component'
import {useNavigate} from 'react-router-dom' //https://reactrouter.com/docs/en/v6/hooks/use-navigate



const CartDropdown = () => {

    const navigate = useNavigate(); //from the useNavigate import; we're using this in a function to turn a button into a link.

    const {cartItems} = useContext(CartContext);

    const goToCheckoutHandler = () =>{
        navigate('/checkout')
    }

    return (
        <div className='cart-dropdown-container'>
            <div className='cart-items'>
            {cartItems.map((item) => (
            <CartItem key={item.id} cartItem={item} />
            ))}
            </div>
            <Button onClick={goToCheckoutHandler}>go to checkout</Button>
        </div>
    )
}
export default CartDropdown