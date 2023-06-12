import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./pages/App";
import ShopPage from "./pages/ShopPage";
import ProductPage from "./pages/ProductPage";

const RouteSwitch = () => {

    const [products, setProducts] = useState([
        1,2,3,4,5,6,7,8,9,10,'q1'
    ]);

    const [cart, setCart] = useState([]);

    const addToCart = id => {
        console.log(id);
        setCart(cart.concat(id));
    }

    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/shop" element={<ShopPage products={products}/>} />
                <Route path={`/shop/:id`} element={<ProductPage onClick={addToCart}/>}/>

            </Routes>
        </BrowserRouter>
    );
};

export default RouteSwitch;