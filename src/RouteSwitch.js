import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./pages/App";
import ShopPage from "./pages/ShopPage";
import ProductPage from "./pages/ProductPage";
import Cart from "./pages/Cart";

const RouteSwitch = () => {

    const products = [
        {
            title: "1",
            description: "just the number 1",
            price: 1
        },
        {
            title: "q2",
            description: "aluminium cased keyboard",
            price: 200
        },
        {
            title: "kodak ektar 35",
            description: "Small 35mm half film camera",
            price: 50
        },
        {
            title: "Canon AE-1",
            description: "35 mm film camera",
            price: 256
        }
    ];

    const [cart, setCart] = useState([]);

    const addToCart = item => {
        setCart(cart.concat(item));
    }

    const deleteItem = deleteIndex => {
        setCart(cart.filter((item, index) => {
            return index !== deleteIndex;
        }))
    }

    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App cart={cart}/>} />
                <Route path="/shop" element={<ShopPage products={products} cart={cart}/>} />
                <Route path={`/shop/:id`} element={<ProductPage onClick={addToCart} cart={cart} product={products}/>}/>
                <Route path={`/cart`} element={<Cart cart={cart} onClick={deleteItem}/>} />

            </Routes>
        </BrowserRouter>
    );
};

export default RouteSwitch;