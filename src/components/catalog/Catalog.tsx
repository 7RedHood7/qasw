import React from 'react';

export const Catalog: React.FC = () => {
    return (
        <div className="product-block">
            <img
                className="product-block__image"
                alt="product"
            />
            <h4 className="product-block__title">Product 1</h4>
            <div className="product-block__selector">
                <ul className="product-block__selector__color">
                    <li className="active"></li>
                    <li></li>
                    <li></li>
                </ul>
                <ul className="product-block__selector__size">
                    <li className="active">M</li>
                    <li>L</li>
                </ul>
            </div>
            <div className="product-block__bottom">
                <div className="product-block__price">11111</div>
                <div className="button button--outline button--add">
                    <span>Добавить</span>
                </div>
            </div>
        </div>
    );
};

