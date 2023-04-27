import "../css/navigation.css";
import {AiOutlineShoppingCart} from "react-icons/ai";
import { Link } from "react-router-dom";

const Navigation = props => {

    const showCart = () => {
        
    }

    return (
        <div className="navigation">
            <div id="logo">**logo**</div>
            <div id="home"><Link to="/">Home</Link></div>
            <div id="shop"><Link to="/shop">Shop</Link></div>
            <div id="cart" onClick={showCart}><AiOutlineShoppingCart size={35}/></div>
        </div>
    );
}

export default Navigation;