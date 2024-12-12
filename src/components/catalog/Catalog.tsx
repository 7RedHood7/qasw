import React from 'react';
import pic from '../../assets/img/logo.svg';

export const Catalog: React.FC = () => {
    return (
        <div>
            <div className="product-block">
                <img
                    className="product-block__image"
                    src={pic}
                    alt="product"
                />
                <div className="product-block__title">Product 1</div>
                <div className="product-block__brand">Brand</div>
                <div className="product-block__price">11111</div>
                <div className="product-block__selector">
                    <ul className="product-block__selector__color">
                        <li className="red"></li>
                        <li className="blue"></li>
                        <li className="black"></li>
                    </ul>
                    <ul className="product-block__selector__size">
                        <li className="active">M</li>
                        <li>L</li>
                    </ul>
                </div>
                <div className="product-block__bottom">
                    <div className="button">
                        <span>Добавить</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

