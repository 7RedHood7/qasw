import React from 'react';
import cartLogo from '../../assets/img/cart.svg';
import logo from '../../assets/img/logo.svg';

export const Header: React.FC = () => {
    return (
        <div className="header">
            <div className="container">
                <div className="header__logo">
                    <img width="100" src={logo} alt="logo"/>
                    <div>
                        <h1>Магазин</h1>
                        <p>Чего-то там</p>
                    </div>
                </div>
                <div className="header__cart">
                    <img width="38" src={cartLogo} alt="cart"/>
                    <span>11</span>
                </div>
            </div>
        </div>
    );
};

