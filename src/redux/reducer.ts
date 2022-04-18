import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { OrderItem } from '@/schemas/Order'

export type GlobalState = {
  orders: OrderItem[]
}

const initialState: GlobalState = {
  orders: []
}

export const globalSlice = createSlice({
  name: 'global',
  initialState,
  reducers: {
    setOrders: (state, action: PayloadAction<OrderItem[]>) => {
      return {
        ...state,
        orders: action.payload
      }
    }
  }
})

export const { setOrders } = globalSlice.actions

export default globalSlice.reducer
