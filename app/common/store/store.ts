import {
  Action,
  AsyncThunkAction,
  configureStore,
  ThunkAction,
} from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/es/storage";

import { rootReducer } from "./rootReducer";

export const persistConfigRoot = {
  key: "root",
  storage,
  whitelist: ["allProducts", "products"],
};

const persistedReducer = persistReducer(persistConfigRoot, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat(),
  devTools: true,
});

export const persistor = persistStore(store);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof persistedReducer>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
export type AppAsyncThunkAction = ReturnType<AsyncThunkAction<any, any, any>>;
