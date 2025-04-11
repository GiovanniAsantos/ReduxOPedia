import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slice/counterSlice"; // Import as default
import { destinationReducer } from "./slice/destinationSlice";

export const Store = configureStore({
  reducer: {
    counterStore: counterReducer,
    destinationStore: destinationReducer,
  },
});
console.log(Store.getState());
