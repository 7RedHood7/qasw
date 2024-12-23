import React from 'react';
import styles from './cartitem.module.scss'
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
    console.log(styles);
    return (
        <div>
            <div className={styles.cart_item}>
                <img className={styles.cart_item__image} src={image} alt="item"/>
                <div className={styles.cart_item__details}>
                    <h3 className={styles.cart_item__title}>{title}</h3>
                    <p className={styles.cart_item__brand}>{brand}</p>
                    <div className={styles.cart_item__price}>{price}</div>
                </div>
                <div className={styles.item__quantity}>
                    <button className={styles.cart_item__button} onClick={() => dispatch(decrementQuantity(id))}>-</button>
                    <span>{quantity}</span>
                    <button className={styles.cart_item__button} onClick={() => dispatch(addItem({ id, title, brand, price, quantity, image }))}>+</button>
                </div>
                <button className={styles.cart_item__remove} onClick={() => dispatch(removeItem(id))}>
                    Remove
                </button>
            </div>
        </div>
    );
};
