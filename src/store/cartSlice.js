import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add(state, action) {
      const product = state.find(item => item.id === action.payload.id);
      if (product) {
        product.quantity += 1;
      } else {
        state.push({ ...action.payload, quantity: 1 });
      }
    },
    remove(state, action) {
      return state.filter(item => item.id !== action.payload.id);
    },
    updateQuantity(state, action) {
      const product = state.find(item => item.id === action.payload.product.id);
      if (product) {
        product.quantity = action.payload.quantity;
      }
    }
  }
});

export const { add, remove, updateQuantity } = cartSlice.actions;
export default cartSlice.reducer;
