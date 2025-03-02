import { configureStore } from "@reduxjs/toolkit";
import chartAccount from "./accountSlice";
export const store = configureStore({
  reducer: {
    chartAccount,
  },
});
