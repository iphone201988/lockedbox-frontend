import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { lockedBoxApi } from "./api";
import userReducer, { authSlice } from "./reducer/auth";

export const store = configureStore({
  reducer: {
    [lockedBoxApi.reducerPath]: lockedBoxApi.reducer,
    [authSlice.name]: userReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(lockedBoxApi.middleware),
});

setupListeners(store.dispatch);
