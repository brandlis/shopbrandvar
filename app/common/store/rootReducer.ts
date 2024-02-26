import { combineReducers } from "redux";

import dataReducer from "./redux";

export const rootReducer = combineReducers({
  products: dataReducer,
});
