import { createSlice, PayloadAction, SliceCaseReducers } from '@reduxjs/toolkit'
import { Product, CartItem, TotalSum } from '../../lib/types/common.type'

export interface AppState {
  products: Product[]
  cartItems: CartItem[]
  totalSum?: TotalSum
  loadingState?: string
}

const initialState: AppState = {
  products: [],
  cartItems: [],
  totalSum: undefined,
  loadingState: undefined
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

      const item = state.cartItems.find(i => i.productId === action.payload.productId)

      if (item) {
        item.quantity = action.payload.quantity
      } else {
        state.cartItems.push(action.payload)
      }
    },
    calculateTotal: (state: AppState) => {
      state.loadingState = 'Processing...'
    },
    calculateTotalDone: (state: AppState, action: PayloadAction<any>) => {
      state.totalSum = action.payload.data.updateCart
      state.loadingState = undefined
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
