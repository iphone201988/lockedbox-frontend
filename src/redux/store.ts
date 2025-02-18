import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { lockedBoxApi } from "./api";

export const store = configureStore({
  reducer: {
    [lockedBoxApi.reducerPath]: lockedBoxApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(lockedBoxApi.middleware),
});

setupListeners(store.dispatch);
