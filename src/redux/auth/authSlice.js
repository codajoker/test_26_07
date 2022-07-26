import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: { name: null, email: null },
};

 const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
     addItems(state, action) {
      state.user = action.payload
    },
  }
  ,
  
 });
export const { addItems,  } = authSlice.actions;
export default authSlice.reducer;