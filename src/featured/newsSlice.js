import { createSlice } from '@reduxjs/toolkit';
import {data} from '../../newsData'

const initialState={
    data:data.data,
}

export const NewsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {
    addNews: (state, actions) => {
      state.data = actions.payload;
    },
  }
})
export const { addNews } = NewsSlice.actions;

export const selectNews = (state) => state.news.data;

export const selectNewsForUser = (state) => state.news.data.filter(item =>item.user.id === id);

export const selectNewsForCategory = (state) => state.news.data.filter(item =>item.category.id === id);

export default NewsSlice.reducer