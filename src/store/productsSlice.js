import { createSlice } from "@reduxjs/toolkit";
import products from "../data/products";

const initialState = {
  products: products,
  selectedProduct: null,
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    selectedProduct: (state, action) => {
      const productId = action.payload;
      state.selectedProduct = state.products.find((p) => p.id === productId);
      //   console.log("state", state);
      //   console.log("action", action);
    },
  },
});
