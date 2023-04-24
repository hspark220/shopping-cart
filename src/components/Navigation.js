import "../css/navigation.css";
import {AiOutlineShoppingCart} from "react-icons/ai";

const Navigation = () => {

    return (
        <div className="navigation">
            <div id="logo">**logo**</div>
            <div id="home"><a href="/">Home</a></div>
            <div id="shop"><a href="/shop">Shop</a></div>
            <div id="cart"><AiOutlineShoppingCart size={30}/></div>
        </div>
    );
}

export default Navigation;