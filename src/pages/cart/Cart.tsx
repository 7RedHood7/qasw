import React from 'react';
import {CartItem} from "../../components/cartitem/CartItem";
import {useSelector} from "react-redux";
import {RootState} from "../../redux/store";

export const Cart: React.FC = () => {
    const cartItems = useSelector((state: RootState) => state.cart.items);
    return (
        <div>
            {cartItems.map(item => (
                <CartItem
                    key={item.id}
                    id={item.id}
                    title={item.title}
                    brand={item.brand}
                    price={item.price}
                    quantity={item.quantity}
                    image={item.image}
                />
            ))}
        </div>
    );
};

