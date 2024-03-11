import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './counter'
import { thunk } from 'redux-thunk'

export const store = configureStore({
  reducer: {
    counter : counterReducer,
  },
  middleware:(getDefaultMiddleware) => getDefaultMiddleware().concat(thunk)
})