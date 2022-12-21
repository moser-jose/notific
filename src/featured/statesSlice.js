import { createSlice } from '@reduxjs/toolkit'

const initialState={
    item:{
      id:1,
      name:"Todos 📰"
    },
}

export const StateSlice = createSlice({
  name: 'state',
  initialState,
  reducers: {
    addToState: (state, actions) => {
      state.item = actions.payload;
    }
  }
})

// Action creators are generated for each case reducer function
export const { addToState } = StateSlice.actions;

export const selectStateWithId = (state, id)=>state.state.item.id == id;

export default StateSlice.reducer