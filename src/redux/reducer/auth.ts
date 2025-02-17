import { createSlice } from "@reduxjs/toolkit";

const initialState: UserState = {
  id: "",
  email: "",
  phone: "",
  countryCode: "",
};

export const authSlice = createSlice({
  name: "userAuth",
  initialState,
  reducers: {
    setUserData: (state, action) => {
      Object.assign(state, action.payload);
    },
    resetUserData: () => initialState,
  },
});

export const { setUserData, resetUserData } = authSlice.actions;
export default authSlice.reducer;
