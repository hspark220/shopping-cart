import React, { useState } from "react";
import Navigation from "../components/Navigation";
import "../css/products.css"

const ShoppingCart = () => {
    const [products, setProducts] = useState([
        1,2,3,4,5,6,7,8,9,10
    ])

    return (
        <div className="shopping-page">
            <h1>Shoppage</h1>
            <Navigation />
            <div className="products">
                {products.map(product => {
                    return (
                        <div className="product">
                            <h1>{product}</h1>
                        </div>
                    )
                })}
            </div>
            
        </div>
    )
};

export default ShoppingCart;