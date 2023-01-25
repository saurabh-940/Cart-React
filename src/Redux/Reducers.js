import { createReducer } from "@reduxjs/toolkit";

export const cartReducer = createReducer(
  {
    cartItems: [],
    subtotal: 0,
    shipping: 0,
    tax: 0,
    total: 0,
  },
  {
    addToCart: (state, action) => {
      const item = action.payload;
      const ifItemExist = state.cartItems.find((i) => i.id === item.id);

      if (ifItemExist) {
        state.cartItems.forEach((i) => {
          if (i.id === item.id) i.quantity += 1;
        });
      } else {
        state.cartItems.push(item);
      }
    },
    decrement: (state, action) => {
      const item = state.cartItems.find((i) => i.id === action.payload);
      if (item.quantity > 1) {
        item.quantity -= 1;
      }
    },
    del: (state, action) => {
      state.cartItems = state.cartItems.filter((i) => i.id !== action.payload);
    },
    calculatePrice: (state) => {
      let  sum = 0;
      state.cartItems.map((i) => {
        sum += i.price * i.quantity;
      });
      state.shipping = sum > 1000 ? 0 : 200;
      state.subtotal = sum;
      state.tax=(sum*0.18).toFixed(2);
      state.total = state.subtotal + state.shipping + (sum*0.18).toFixed(2)
    },
  }
);
