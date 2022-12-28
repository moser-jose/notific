import { createSlice } from '@reduxjs/toolkit';
import {data} from '../../newsData'

const initialState={
    data:data.users,
}

export const UserSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    addUser: (state, actions) => {
      state.data = actions.payload;
    }
  }
})
export const { addUser } = UserSlice.actions;

export const selectUsers = (state) => state.users.data;

export default UserSlice.reducer