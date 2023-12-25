import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  loading: false,
  error: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    signupStart: (state) => {
      state.loading = true;
    },
    singupSuccess: (state, action) => {
      state.loading = false;
      state.user = action.payload;
    },
    signupFailure: (state, action) => {
      state.error = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { signupStart, singupSuccess, signupFailure } = userSlice.actions;

export default userSlice.reducer;
