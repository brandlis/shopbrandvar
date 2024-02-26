import { createReducer } from "@reduxjs/toolkit";
import { toast } from "sonner";

import { addToCart, deleteToCart, getDataThunks } from "../actions";
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
      const existingProduct = state.products.find(
        (product) => product.id === productToAdd.id
      );
      if (!existingProduct) {
        toast.success(`Product added to cart`);
        state.products.push(productToAdd);
      } else {
        toast.warning(`The product is already in the cart`);
      }
    }
  });
  builder.addCase(deleteToCart, (state, action) => {
    if (action.payload) {
      const productId = action.payload.id;
      state.products = state.products.filter(
        (product) => product.id !== productId
      );
    }
  });
});

export default dataReducer;

export type dataType = ReturnType<typeof dataReducer>;
