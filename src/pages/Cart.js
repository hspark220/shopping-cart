import uniqid from "uniqid";
import Navigation from "../components/Navigation";
import Item from "../components/Item";
import "../css/item.css";

const Cart = props => {
    
    return (
        <>
            <h1>Cart</h1>
            <Navigation cart={props.cart}/>
            <ul>
                {props.cart.map((item, index) => {
                    return <Item item={item} onClick={props.onClick} index={index} key={uniqid()}/>
                })}
            </ul>
        </>
    )
}

export default Cart;