import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./pages/App";
import ShoppingCart from "./pages/ShoppingCart";

const RouteSwitch = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/ShoppingCart" element={<ShoppingCart />} />
            </Routes>
        </BrowserRouter>
    );
};

export default RouteSwitch;