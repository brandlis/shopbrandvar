import { createReducer } from "@reduxjs/toolkit";
import { addToCart, getDataThunks } from "../actions";
import { Products, ResponseProducts } from "../../helpers/types";

export interface dataState {
  loading: boolean;
  allProducts: ResponseProducts | null;
  products: Products[];
}

const initialState: dataState = {
  loading: false,
  allProducts: null,
  products: [],
};

const dataReducer = createReducer(initialState, (builder) => {
  builder.addCase(getDataThunks.pending, (state) => {
    if (state.loading === false) {
      state.loading = true;
    }
  });
  builder.addCase(getDataThunks.rejected, (state) => {
    if (state.loading === true) {
      state.loading = false;
    }
  });
  builder.addCase(getDataThunks.fulfilled, (state, action) => {
    if (action.payload.response) {
      state.allProducts = action.payload.response;
      state.loading = false;
    }
  });
  builder.addCase(addToCart, (state, action) => {
    if (action.payload) {
      const productToAdd = action.payload;
      state.products.push(productToAdd);
    }
  });
});

export default dataReducer;

export type dataType = ReturnType<typeof dataReducer>;
