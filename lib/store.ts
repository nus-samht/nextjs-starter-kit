import { combineSlices, configureStore } from '@reduxjs/toolkit'
import { persistReducer, persistStore } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import counterReducer from './redux/counter'

const rootReducer = combineSlices({
  counter: counterReducer
})

const persistConfig = {
  key: 'root',
  storage
  // whitelist: ['counter'], // persist reducers persist the counter reducer
  // blacklist: ['anotherReducer'], // Don't persist reducers
}

const persistedReducer = persistReducer<RootState>(persistConfig, rootReducer)

const makeStore = () => {
  return configureStore({
    reducer: persistedReducer
  })
}

const store = makeStore()
const persistedStore = persistStore(store)

export { store, persistedStore }

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof rootReducer>
export type AppDispatch = AppStore['dispatch']
