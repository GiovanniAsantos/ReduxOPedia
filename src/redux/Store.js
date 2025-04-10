import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slice/counterSlice"; 

export const Store = configureStore({
  reducer: {
    counterStore: counterReducer,
  },
});
