import './scss/app.scss'
import {MainLayout} from "./components/mainlayouts/MainLayout";
import {Home} from "./pages/Home";
import {Cart} from "./pages/cart/Cart";
import {CartItem} from "./components/cartitem/CartItem";

export const App = () => {
    return (
        <div>
            <MainLayout/>
            <Cart/>
        </div>
    );
};
