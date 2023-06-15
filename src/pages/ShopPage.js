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
                {props.products.map((product, index) => {
                    return (
                        <Product product={product} key={uniqid()} index={index} />
                    )
                })}
            </div>
            
        </div>
    )
};

export default ShopPage;