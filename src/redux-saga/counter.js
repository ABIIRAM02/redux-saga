import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    books:{
      data:[],
      loading:false,
      error:null
    }
}

export const counterSlice = createSlice({

    name:'counter',
    initialState,
    reducers:{
        fetchBooks:(state , action) => {
          state.books.loading = true
        },
        fetchBooksSuccess:(state , action) => {
          state.books.loading = false
          state.books.data = action.payload
        },
        fetchBooksFail:(state , action) => {
          state.books.loading = false
          state.books.error = action.payload
        },
    },
      
})

export const { fetchBooks , fetchBooksSuccess , fetchBooksFail} = counterSlice.actions

export default counterSlice.reducer