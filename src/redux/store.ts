import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { lockedBoxApi } from "./api";
import UserReducer, { userSlice } from "./reducer/auth";

export const store = configureStore({
  reducer: {
    [lockedBoxApi.reducerPath]: lockedBoxApi.reducer,
    [userSlice.reducerPath]: UserReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(lockedBoxApi.middleware),
});

setupListeners(store.dispatch);
