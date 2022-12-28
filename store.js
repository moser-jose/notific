import { configureStore } from '@reduxjs/toolkit';
import favoriteReducer from './src/featured/favoriteSlice';
import stateReducer from './src/featured/statesSlice';
import newsReducer from './src/featured/newsSlice';
import usersReducer from './src/featured/userSlice';
export const store = configureStore({
    reducer: {
        favorite:favoriteReducer,
        state:stateReducer,
        news:newsReducer,
        users:usersReducer,
    },
});