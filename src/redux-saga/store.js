import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './counter'
import createSagaMiddleware from 'redux-saga'
import sagaAction from './sagaAction'

const sagaMiddleware = createSagaMiddleware()

export const store = configureStore({
  reducer: {
    counter : counterReducer,
  },
  middleware:(getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware)
})

sagaMiddleware.run(sagaAction)