// counterSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = () => {
  return {
    destinations: [
      { days: 1, name: "Paris", country: "Most romantic city in the world" },
      { days: 2, name: "Tokyo", country: "Japan is mostly moutains" },
      { days: 3, name: "New York", country: "Most stores in the world" },
    ],
  };
};

export const destinationSlice = createSlice({
  name: "destiation",
  initialState: initialState,
  reducers: {},
});

export const destinationReducer = destinationSlice.reducer;
