import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { lockedBoxApi } from "./api";
import UserReducer, { userSlice } from "./reducer/auth";
import { adminApi } from "./api/admin";

export const store = configureStore({
  reducer: {
    [lockedBoxApi.reducerPath]: lockedBoxApi.reducer,
    [adminApi.reducerPath]: adminApi.reducer,
    [userSlice.reducerPath]: UserReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(lockedBoxApi.middleware)
      .concat(adminApi.middleware),
});

setupListeners(store.dispatch);
