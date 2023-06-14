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
            description: "This item is called 1"
        },
        {
            title: "q1",
            description: "This is the name of the keyboard"
        },
        {
            title: "v1",
            description: "This is the name of another keyboard"
        },
        {
            title: "Canon AE-1",
            description: "Sick film camera"
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