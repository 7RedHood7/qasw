import React from 'react';
import './cartitem.scss'
import pic from '../../assets/img/logo.svg';
import {useDispatch} from "react-redux";
import {addItem, decrementQuantity, removeItem} from "../../redux/cart";

interface CartItemProps {
    id: number;
    title: string;
    brand: string;
    price: number;
    quantity: number;
    image: string;
}

export const CartItem: React.FC<CartItemProps> = ({ id, title, brand, price, quantity, image }) => {

    const dispatch = useDispatch();

    return (
        <div>
            <div className="cart-item">
                <img className="cart-item__image" src={image } alt="item"/>
                <div className="cart-item__details">
                    <h3 className="cart-item__title">{title}</h3>
                    <p className="cart-item__brand">{brand}</p>
                    <div className="cart-item__price">{price}</div>
                </div>
                <div className="cart-item__quantity">
                    <button className="cart-item__button" onClick={() => dispatch(decrementQuantity(id))}>-</button>
                    <span>1</span>
                    <button className="cart-item__button" onClick={() => dispatch(addItem({ id, title, brand, price, quantity, image }))}>+</button>
                </div>
                <button className="cart-item__remove" onClick={() => dispatch(removeItem(id))}>
                    Remove
                </button>
            </div>
        </div>
    );
};
