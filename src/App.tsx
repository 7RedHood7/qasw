import './scss/app.scss'
import {MainLayout} from "./components/mainlayouts/MainLayout";
import {Home} from "./pages/Home";
import {Cart} from "./pages/cart/Cart";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import React from "react";


export const App: React.FC = () => {
    return (
        <BrowserRouter>
                <Routes>
                    <Route path="/" element={<MainLayout/>}>
                        <Route path="/" element={<Home/>}/>
                        <Route path="/cart" element={<Cart/>}/>
                    </Route>
                </Routes>
        </BrowserRouter>
    );
};
