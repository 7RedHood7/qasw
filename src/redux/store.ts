import { configureStore } from '@reduxjs/toolkit';
import brand from './brands';
import product from './items'

export const store = configureStore({
    reducer: {
        brands: brand,
        products: product,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;