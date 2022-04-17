import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type GlobalState = {
  cart: string
}

const initialState = {
  cart: ''
}

export const globalSlice = createSlice({
  name: 'global',
  initialState,
  reducers: {
    setState: (state, action: PayloadAction<GlobalState>) => {
      return {
        ...state,
        ...action.payload
      }
    }
  }
})

export const { setState } = globalSlice.actions

export default globalSlice.reducer
