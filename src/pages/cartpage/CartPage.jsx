import { TiShoppingCart } from "react-icons/ti";
import "./CartPage.css";

const CartPage = () => {

    return (
            <div className="auth-cart-container">
                <button className="cart-btn">
                    <TiShoppingCart className="cart-icon"/>
                </button>
            </div>
        
    );
};

export default CartPage;
