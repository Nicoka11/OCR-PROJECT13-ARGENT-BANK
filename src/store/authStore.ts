import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { argentBankApi } from "@src/services/argentBank";

const authStore = configureStore({
  reducer: {
    [argentBankApi.reducerPath]: argentBankApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(argentBankApi.middleware),
});

setupListeners(authStore.dispatch);

export default authStore;
