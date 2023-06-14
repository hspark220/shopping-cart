import uniqid from "uniqid";
import Navigation from "../components/Navigation";
import Item from "../components/Item";
import "../css/item.css";

const Cart = props => {
    
    return (
        <>
            <Navigation cart={props.cart}/>
            <h1>Cart</h1>
            <ul>
                {props.cart.map((item, index) => {
                    return <Item item={item} onClick={props.onClick} index={index} key={uniqid()}/>
                })}
            </ul>
        </>
    )
}

export default Cart;