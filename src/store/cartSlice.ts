import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "@/Types";
import { RootState } from "@/redux/store";

interface cartItem extends Product {
  quantity: number;
}

interface cartState {
  items: cartItem[];
}

interface AddToCartPayload {
  product: Product;
  quantity: number;
}

const initialCartState: cartState = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState: initialCartState,
  reducers: {
    addToCart: (state, action: PayloadAction<AddToCartPayload>) => {
      const { product, quantity } = action.payload;
      const existingItem = state.items.find((item) => item.id === product.id);

      if (existingItem) {
        // If the product already exists in the cart, increase its quantity by the selected amount
        existingItem.quantity += quantity;
      } else {
        // Otherwise, add it as a new item with the specified quantity
        state.items.push({ ...product, quantity });
      }
    },

    removeFromCart: (state, action: PayloadAction<Product>) => {
      state.items = state.items.filter((item) => item.id !== action.payload.id);
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

export const selectTotalPrice = (state: RootState) => {
  return state.cart.items.reduce(
    (total, item) => total + parseFloat(item.newPrice) * item.quantity,
    0
  );
};
