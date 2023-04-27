import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./pages/App";
import ShopPage from "./pages/ShopPage";
import ProductPage from "./pages/ProductPage";

const RouteSwitch = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/shop" element={<ShopPage />} />
                <Route path="/shop/:id" element={<ProductPage />} />
            </Routes>
        </BrowserRouter>
    );
};

export default RouteSwitch;