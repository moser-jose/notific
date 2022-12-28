import { createSlice } from '@reduxjs/toolkit'

const initialState={
    items:[],
}

export const FavoriteSlice = createSlice({
  name: 'favorite',
  initialState,
  reducers: {
    addToFavorite: (state, actions) => {
      state.items = [...state.items, actions.payload]
    },
    removeFromFavorite: (state, actions) => {
      const index = state.items.findIndex(item => item.id === actions.payload.id);

      let newFavorite = [...state.items];

      if(index >= 0){
        newFavorite.splice(index, 1);
      }
      else{
        console.warn(`Cant remove favorite (id: ${actions.payload.id})`)
      }

      state.items= newFavorite;
    },
  }
})

export const { addToFavorite, removeFromFavorite } = FavoriteSlice.actions;

export const selectFavoriteItems = (state) => state.favorite.items;

export const selectFavoriteItemsWithId = (state, id)=>state.favorite.items.filter(item=>item.id === id);

export default FavoriteSlice.reducer