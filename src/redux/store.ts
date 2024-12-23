import { configureStore } from '@reduxjs/toolkit';
import brand from './brands';
import product from './items'
import cart from "./cart";
import filter from "./filter";

export const store = configureStore({
    reducer: {
        brands: brand,
        products: product,
        cart: cart,
        filter: filter
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;