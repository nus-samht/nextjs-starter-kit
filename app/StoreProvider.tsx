'use client'

import { store } from '@/lib/store'
import type { ReactNode } from 'react'
import { Provider } from 'react-redux'

interface Props {
  readonly children: ReactNode
}

const StoreProvider = ({ children }: Props) => {
  return <Provider store={store}>{children}</Provider>
}

export default StoreProvider
