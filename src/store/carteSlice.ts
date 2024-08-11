import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "@/Types";

interface cartItem {
  product: Product;
  quantity: number;
}

interface cartState {
  items: cartItem[];
}

const initialCartState: cartState = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState: initialCartState,
  reducers: {
    addToCart: (state, action: PayloadAction<Product>) => {
      const existingItem = state.items.find((item) => {
        item.product.id === action.payload.id;
      });
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ product: action.payload, quantity: 1 });
      }
    },

    removeFromCart: (state, action: PayloadAction<Product>) => {
      state.items = state.items.filter(
        (item) => item.product.id !== action.payload.id
      );
    },

    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;

const cartReducer = cartSlice.reducer;

export default cartReducer;

export type { cartItem };