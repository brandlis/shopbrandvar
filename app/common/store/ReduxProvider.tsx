"use client";
import React from "react";

import { Provider as StoreProvider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "./store";

export const ReduxProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <StoreProvider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        {children}
      </PersistGate>
    </StoreProvider>
  );
};
