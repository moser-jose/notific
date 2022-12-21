import { configureStore } from '@reduxjs/toolkit';
import favoriteReducer from './src/featured/favoriteSlice';
export const store = configureStore({
    reducer: {
        favorite:favoriteReducer,
    },
});