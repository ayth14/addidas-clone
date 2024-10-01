import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },

  reducers: {
    addToCart: (state, action) => {
      const product = action.payload.product;
      const quantity = action.payload.quantity;

      console.log("Current cart items before adding:", state.items);
      // console.log('Adding product:', product, 'with quantity:', quantity);
      const existingProduct = state.items.find(
        (item) => item.id === product.id
      );
      if (existingProduct) {
        console.log("Product already exists in cart, updating quantity.");
        return {
          ...state,
          items: state.items.map((item) =>
            item.id === product.id
              ? { ...item, quantity: item.quantity + quantity }
              : item
          ),
        };
      } else {
        console.log("Product does not exist in cart, adding new product.");
        return {
          ...state,
          items: [...state.items, { ...product, quantity }],
        };
      }
    },
    removeFromCart: (state, action) => {
      state.items.filter((item) => item.id !== action.payload);
    },
  },
});

export const { addToCart, removeFromCart } = CartSlice.actions;
export default CartSlice.reducer;
