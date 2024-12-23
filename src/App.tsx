import './scss/app.scss'
import {Home} from "./pages/Home";
import {Cart} from "./pages/cart/Cart";
import {Route, Routes} from "react-router-dom";
import React from "react";
import {Header} from "./components/header/Header";


export const App: React.FC = () => {
    return (
        <div>
            <Header/>
            <div>
                <div>
                    <Routes>
                        <Route path="/" element={<Home/>}/>
                        <Route path="/cart" element={<Cart/>}/>
                    </Routes>
                </div>
            </div>
        </div>
    );
};


// <BrowserRouter>
//     <Routes>
//         <Route path="/" element={<MainLayout/>}>
//             <Route path="/" element={<Home/>}/>
//             <Route path="/cart" element={<Cart/>}/>
//         </Route>
//     </Routes>
// </BrowserRouter>