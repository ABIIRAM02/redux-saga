import { createSlice } from "@reduxjs/toolkit";
import { fetchPosts } from "./thunkAction/usersData";


const initialState = {
    value:0,
    userData:[],
    loading:false,
    error: null
}

export const counterSlice = createSlice({

    name:'counter',
    initialState,
    reducers:{
        increment: (state) =>{
            state.value += 1
        }
    },

    extraReducers: (builder) => {
        builder
          .addCase(fetchPosts.pending, (state) => {
            state.loading = true;
          })
          .addCase(fetchPosts.fulfilled, (state, action) => {
            state.loading = false;
            state.userData = action.payload;
          })
          .addCase(fetchPosts.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
          });
      }
})

export const { increment } = counterSlice.actions

export default counterSlice.reducer