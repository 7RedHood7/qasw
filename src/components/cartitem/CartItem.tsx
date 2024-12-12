import React from 'react';
import './cartitem.scss'
import pic from '../../assets/img/logo.svg';

export const CartItem: React.FC = () => {
    return (
        <div>
            <div className="cart-item">
                <img className="cart-item__image" src={pic} alt="item"/>
                <div className="cart-item__details">
                    <h3 className="cart-item__title">title</h3>
                    <p className="cart-item__brand">brand</p>
                    <div className="cart-item__price">price ₽</div>
                </div>
                <div className="cart-item__quantity">
                    <button className="cart-item__button">-</button>
                    <span>1</span>
                    <button className="cart-item__button">+</button>
                </div>
                <button className="cart-item__remove">
                    Remove
                </button>
            </div>
        </div>
    );
};
