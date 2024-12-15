import React from 'react';
import cartLogo from '../../assets/img/cart.svg';
import logo from '../../assets/img/logo.svg';
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";
import {RootState} from "../../redux/store";

export const Header: React.FC = () => {

    const totalQuantity = useSelector((state: RootState) => state.cart.totalQuantity);

    return (
        <div className="header">
            <div className="container">
                <Link to="/">
                    <div className="header__logo">
                        <img width="100" src={logo} alt="logo"/>
                        <div>
                            <h1>Магазин</h1>
                            <p>Чего-то там</p>
                        </div>
                    </div>
                </Link>
                <Link to="/cart">
                    <div className="header__cart">
                        <img width="38" src={cartLogo} alt="cart"/>
                        <span>{totalQuantity}</span>
                    </div>
                </Link>
            </div>
        </div>
    );
};

