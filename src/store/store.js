import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice';
import favoriteReducer from './favoriteSlice';
import userReducer from './userSlice';

const store = configureStore({
    reducer: {
        cart: cartReducer,
        favorites: favoriteReducer,
        user: userReducer,
    },
});

export default store;