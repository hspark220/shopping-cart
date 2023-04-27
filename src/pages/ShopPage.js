import React, { useState } from "react";
import uniqid from "uniqid";
import Navigation from "../components/Navigation";
import Product from "../components/Product";
import "../css/products.css"

const ShopPage = () => {
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
                        <Product product={product} key={uniqid()} />
                    )
                })}
            </div>
            
        </div>
    )
};

export default ShopPage;