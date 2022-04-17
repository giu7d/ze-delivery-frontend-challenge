import { createStore } from '@reduxjs/toolkit'

import reducers from '@/redux/reducer'

export const store = createStore(reducers)

export type GlobalDispatch = typeof store.dispatch

export type RootState = ReturnType<typeof store.getState>
