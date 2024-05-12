'use client'

import { persistedStore, store } from '@/lib/store'
import type { ReactNode } from 'react'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

interface Props {
  readonly children: ReactNode
}

const StoreProvider = ({ children }: Props) => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistedStore}>
        {children}
      </PersistGate>
    </Provider>
  )
}

export default StoreProvider
