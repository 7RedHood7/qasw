import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';

interface RegularPrice {
    currency: string;
    value: number;
}

interface ConfigurableOption {
    attribute_id: number;
    attribute_code: string;
    label: string;
    values: Array<{ label: string; value_index: number; value: string | number }>;
}

interface ProductVariant {
    attributes: Array<{ code: string; value_index: number }>;
    product: {
        id: number;
        sku: string;
        image: string;
    };
}

interface Product {
    type: string;
    id: number;
    sku: string;
    title: string;
    regular_price: RegularPrice;
    image: string;
    brand: number;
    configurable_options?: ConfigurableOption[];
    variants?: ProductVariant[];
}

interface ProductState {
    products: Product[];
}

const initialState: ProductState = {
    products: [],
};

export const fetchProducts = createAsyncThunk<Product[]>(
    'products/fetchProducts',
    async () => {
        const response = await fetch('/products.json');
        return await response.json();
    }
);

const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.fulfilled, (state, action: PayloadAction<Product[]>) => {
                state.products = action.payload;
            })
    },
});

export default productSlice.reducer;