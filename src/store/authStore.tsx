import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { argentBankApi } from "@src/services/argentBank";
import { ReactNode } from "react";
import { Provider } from "react-redux";
import authReducer from "./authReducer";

export const authStore = configureStore({
  reducer: {
    [argentBankApi.reducerPath]: argentBankApi.reducer,
    auth: authReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(argentBankApi.middleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof authStore.getState>;
export type AppDispatch = typeof authStore.dispatch;

setupListeners(authStore.dispatch);

const AuthProvider = ({ children }: { children: ReactNode }) => (
  <Provider store={authStore}>{children}</Provider>
);

export default AuthProvider;