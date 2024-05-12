import { configureStore } from '@reduxjs/toolkit'

import counterReducer from './redux/counter'

const makeStore = () => {
  return configureStore({
    reducer: {
      counter: counterReducer
    }
  })
}

export const store = makeStore()

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']
