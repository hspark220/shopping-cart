import "../css/navigation.css";
import {AiOutlineShoppingCart} from "react-icons/ai";

const Navigation = () => {

    return (
        <div className="navigation">
            <div id="logo">**logo**</div>
            <div id="home">Home</div>
            <div id="shop">Shop</div>
            <div id="cart"><AiOutlineShoppingCart size={30}/></div>
        </div>
    );
}

export default Navigation;