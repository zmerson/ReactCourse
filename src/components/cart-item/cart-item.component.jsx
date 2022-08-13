import './cart-item.styles.scss'

const CartItem = ({cartItem}) => {
    const {name, imageUrl, price, quantity} = cartItem
    
    return (
        <div className='cart-item-container'>
            <img src={imageUrl} alt={`${name}`} />
            <div className='item-datails'>
            <span className='name'>{name}</span>
            <span className='price'>{quantity} * {price}</span>
            </div>
            <h2>{name}</h2>
            <span>{quantity}</span>
        </div>
    )
}
export default CartItem;