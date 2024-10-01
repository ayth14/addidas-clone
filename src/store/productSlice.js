import { createSlice } from "@reduxjs/toolkit";
import { products } from "../assets/dummy/products";  
const productSlice = createSlice({
  name: "product",
  initialState: {
    productList: [],
    selectedProduct: null,
  },
  reducers: {
    fetchProducts: (state) => {
      state.productList = products;
    },
    selectProduct: (state, action) => {
      state.selectedProduct = action.payload;
    },
  },
});

export const { fetchProducts, selectProduct } = productSlice.actions;
export default productSlice.reducer;
