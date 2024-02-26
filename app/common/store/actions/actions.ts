import { createAction } from "@reduxjs/toolkit";

import { Products } from "../../helpers/types";

export const addToCart = createAction<Products>("products/addToCart");

export const deleteToCart = createAction<Products>("products/deleteToCart");
