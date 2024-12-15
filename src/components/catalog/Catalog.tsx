import React, {useEffect} from 'react';
import {RootState} from "../../redux/store";
import {useSelector} from "react-redux";
import {fetchProducts} from "../../redux/items";
import {useAppDispatch} from "../../redux/hooks";
import {addItem} from "../../redux/cart";


export const Catalog: React.FC = () => {
    const products = useSelector((state: RootState) => state.products.products);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);

    const addToCart = (product: any) => {
        dispatch(
            addItem({
                id: product.id,
                title: product.title,
                brand: product.brand,
                price: product.regular_price.value,
                image: product.image,
                quantity: 1, // Начальное количество
            })
        );
    };

    return (
        <div className="catalog">
            {products.map((product) => (
                <div key={product.id} className="product-block">
                    <img
                        className="product-block__image"
                        src={product.image}
                        alt={product.title}
                    />
                    <div className="product-block__title">{product.title}</div>
                    <div className="product-block__brand">Brand: {product.brand}</div>
                    <div className="product-block__price">
                        {product.regular_price.currency} {product.regular_price.value}
                    </div>
                    {product.configurable_options && (
                        <div className="product-block__selector">
                            {product.configurable_options.map((option) => (
                                <div
                                    key={option.attribute_id}
                                    className={`option ${
                                        option.attribute_code === 'color' ? 'option--color' : 'option--size'
                                    }`}
                                >
                                    <div className="option__label">{option.label}</div>
                                    <ul className="option__values">
                                        {option.values.map((value) => (
                                            <li key={value.value_index} className="option__value">
                                                {value.label}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    )}
                    <div className="product-block__bottom">
                        <button className="button" onClick={() => addToCart(product)}>Добавить</button>
                    </div>
                </div>
            ))}
        </div>
    );
};
