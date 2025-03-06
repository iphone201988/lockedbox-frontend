import { createSlice } from "@reduxjs/toolkit";

type UserState = {
  isAuthenticated: boolean;
  token: string;
};
const initialState: UserState = {
  isAuthenticated: false,
  token: "",
};

export const userSlice: any = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserAuth: (state, action) => {
      state.isAuthenticated = true;
      state.token = action.payload;
    },
    resetState: () => {
      return initialState;
    },
  },
});

export const { setUserAuth, resetState } = userSlice.actions;
export default userSlice.reducer;
