// cartSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface CartItem {
    id: number;
    brand: string;
    name: string;
    image: string;
    size: number;
    price: string;
    quantity: number;
}

interface CartState {
    items: CartItem[];
}

const initialState: CartState = {
    items: [],
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<CartItem>) => {
            const existingItem = state.items.find(
                (item) =>
                    item.id === action.payload.id && item.size === action.payload.size
            );
            if (existingItem) {
                existingItem.quantity += action.payload.quantity;
            } else {
                state.items.push(action.payload);
            }
        },
        removeFromCart: (state, action: PayloadAction<{ id: number; size: number }>) => {
            state.items = state.items.filter(
                (item) =>
                    item.id !== action.payload.id || item.size !== action.payload.size
            );
        },
    },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
export type { CartState };