
import uniqid from "uniqid";
import Navigation from "../components/Navigation";
import Product from "../components/Product";
import "../css/products.css"

const ShopPage = (props) => {
    

    return (
        <div className="shopping-page">
            <h1>Shoppage</h1>
            <Navigation cart={props.cart }/>
            <div className="products">
                {props.products.map(product => {
                    return (
                        <Product product={product} key={uniqid()} />
                    )
                })}
            </div>
            
        </div>
    )
};

export default ShopPage;