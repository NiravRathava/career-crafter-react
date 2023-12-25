import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import userReducer from "./signup/userSlice";
export const store = configureStore({
  reducer: {
    User: userReducer,
  },
  middleware:(getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});
