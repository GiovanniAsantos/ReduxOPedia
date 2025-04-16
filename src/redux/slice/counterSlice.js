// counterSlice.js
import { createSlice } from "@reduxjs/toolkit";
import resetDestination from "./destinationSlice"
import { resetRdexOPedia } from "../action/action";
const initialState = {
  count: 10,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState: initialState,
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
    decrementMultiplier: (state, action) => {
      state.count -= Number(action.payload);
    },
    incrementMultiplier: (state, action) => {
      state.count += Number(action.payload);
    },
    resetCounter: (state) => {
      state.count = 10;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(resetRdexOPedia, (state) => {
      state.count = 10;
    });
  },
});

export const {
  increment,
  decrement,
  decrementMultiplier,
  incrementMultiplier,
  resetCounter,
} = counterSlice.actions;
export default counterSlice.reducer; // Exportando como default
