import { createSlice } from '@reduxjs/toolkit';
import {data} from '../../newsData'

const initialState={
    data:data.category,
}

export const CategorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    addCategory: (state, actions) => {
      state.data = actions.payload;
    }
  }
})
export const { addCategory } = CategorySlice.actions;

export const selectCategories = (state) => state.category.data;

export default CategorySlice.reducer