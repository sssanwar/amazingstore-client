import { createSlice, PayloadAction, SliceCaseReducers } from '@reduxjs/toolkit'
import { Product, CartItem, TotalSum } from '../../lib/types/common.type'
import update from 'immutability-helper'

export interface AppState {
  products: Product[]
  cartItems: CartItem[]
  totalSum?: TotalSum
}

const initialState: AppState = {
  products: [],
  cartItems: [],
  totalSum: undefined
}

const appSlice = createSlice<AppState, SliceCaseReducers<AppState>, string>({
  name: 'appSlice',
  initialState,
  reducers: {
    retrieveProducts: () => {},
    retrieveProductsDone: (state: AppState, action: PayloadAction<any>) => {
      state.products = action.payload.data.products
    },
    updateCartItem: (state: AppState, action: PayloadAction<CartItem>) => {
      state.totalSum = undefined
      if (action.payload.quantity < 0) return
      const itemIndex = state.cartItems.findIndex(i => i.productId === action.payload.productId)
      if (itemIndex >= 0) {
        state.cartItems = update(state.cartItems, { [itemIndex]: { quantity: { $set: action.payload.quantity } } })
      } else {
        state.cartItems = update(state.cartItems, { $push: [action.payload] })
      }
    },
    calculateTotal: () => {},
    calculateTotalDone: (state: AppState, action: PayloadAction<any>) => {
      state.totalSum = action.payload.data.updateCart
    }
  }
})

export const {
  retrieveProducts,
  retrieveProductsDone,
  updateCartItem,
  calculateTotal,
  calculateTotalDone
} = appSlice.actions

export default appSlice.reducer
