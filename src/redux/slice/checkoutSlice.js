import { createSlice } from '@reduxjs/toolkit'

export const checkoutSlice = createSlice({
  name: 'checkout',
  initialState: {
    cart: {
      items: {},
      totalPrice: 0,
      totalItems: 0
    }
  },
  reducers: {
    incrementItem: (state, action) => {
      const itemKey = action.payload

      state.cart.items[itemKey].quantity++

      state.cart.totalPrice += state.cart.items[itemKey].price

      state.cart.totalItems++
    },
    decrementItem: (state, action) => {
      const itemKey = action.payload

      if(state.cart.items[itemKey].quantity > 1) {
        state.cart.items[itemKey].quantity--
  
        state.cart.totalPrice -= state.cart.items[itemKey].price

        state.cart.totalItems--
      }
    },
    deleteItem: (state, action) => {
      const itemKey = action.payload

      state.cart.totalPrice -= state.cart.items[itemKey].price * state.cart.items[itemKey].quantity
      state.cart.totalItems -= state.cart.items[itemKey].quantity

      delete state.cart.items[itemKey]
    },
    createItem: (state, action) => {
      const item = action.payload

      if(state.cart.items[`${item.id}-apparel`]) {
        state.cart.items[`${item.id}-apparel`].quantity++
      }
      else {
        state.cart.items[`${item.id}-apparel`] = { ...item, quantity: 1 }
      }

      state.cart.totalPrice += state.cart.items[`${item.id}-apparel`].price

      state.cart.totalItems += 1
    }
  }
})

// export actions
export const { incrementItem, decrementItem, deleteItem, createItem } = checkoutSlice.actions

// export reducer
export default checkoutSlice.reducer