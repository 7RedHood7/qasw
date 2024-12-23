import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface CartItem {
    id: number;
    title: string;
    brand: string;
    price: number;
    quantity: number;
    image: string;
}

interface CartState {
    items: CartItem[];
    totalQuantity: number;
}

const initialState: CartState = {
    items: [],
    totalQuantity: 0,
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem(state, action: PayloadAction<CartItem>) {
            const plusItem = state.items.find(item => item.id === action.payload.id);
            if (plusItem) {
                plusItem.quantity += 1;
            } else {
                state.items.push({ ...action.payload, quantity: 1 });
            }
            state.totalQuantity += 1;
        },
        // addItem(state, action: PayloadAction<CartItem>) {
        //     const findItem = state.items.find(obj => obj.id === action.payload.id);
        //     if (findItem) {
        //         findItem.count++;
        //     } else {
        //         state.items.push({...action.payload, count: 1});
        //     }
        //     state.totalPrice = calcTotalPrice(state.items);
        // }
        removeItem(state, action: PayloadAction<number>) {
            const index = state.items.findIndex(item => item.id === action.payload);
            if (index !== -1) {
                state.totalQuantity -= state.items[index].quantity;
                state.items.splice(index, 1);
            }
        },
        decrementQuantity(state, action: PayloadAction<number>) {
            const existingItem = state.items.find(item => item.id === action.payload);
            if (existingItem) {
                existingItem.quantity -= 1;
                state.totalQuantity -= 1;
                if (existingItem.quantity <= 0) {
                    state.items = state.items.filter(item => item.id !== action.payload);
                }
            }
        },
    },
});

export const { addItem, removeItem, decrementQuantity } = cartSlice.actions;
export default cartSlice.reducer;