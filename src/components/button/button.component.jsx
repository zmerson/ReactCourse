//three buttons in this app: defaul, inverted, and google-sign-in.
//we'll modify the styling based on what button we need
//and its stored in this re-usable component
import './button.styles.scss';

const BUTTON_TYPE_CLASSES = {
    google: 'google-sign-in',
    inverted: 'inverted',

}

const Button = ({children, buttonType, ...otherProps}) => {
    return (
        <button className={`button-container ${BUTTON_TYPE_CLASSES[buttonType]}`}>
            {children}
        </button>
    )
}
export default Button