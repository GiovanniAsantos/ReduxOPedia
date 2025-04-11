// counterSlice.js
import { createSlice } from "@reduxjs/toolkit";

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
  },
});

export const { increment, decrement, decrementMultiplier, incrementMultiplier } = counterSlice.actions;
export default counterSlice.reducer; // Exportando como default
