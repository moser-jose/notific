import { configureStore } from '@reduxjs/toolkit';
import favoriteReducer from './src/featured/favoriteSlice';
import stateReducer from './src/featured/statesSlice';
export const store = configureStore({
    reducer: {
        favorite:favoriteReducer,
        state:stateReducer,
    },
});