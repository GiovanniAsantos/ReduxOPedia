// counterSlice.js
import { createSlice } from "@reduxjs/toolkit";
import { resetRdexOPedia } from "../action/action";

const initialState = () => {
  return {
    destinations: [
      { days: 1, name: "Paris", country: "Most romantic city in the world" },
      { days: 2, name: "Tokyo", country: "Japan is mostly moutains" },
      { days: 3, name: "New York", country: "Most stores in the world" },
    ],
    destinationSelected: null,
  };
};

export const destinationSlice = createSlice({
  name: "destination", // Note: You also have a typo here ("destiation" instead of "destination")
  initialState: initialState,
  reducers: {
    destinationClicked: (state, action) => {
      // Fixed the typo here
      state.destinationSelected = action.payload;
    },
    resetDestination: (state, action) => {
      state.destinationSelected = null;
    },
  },extraReducers: (builder) => {
      builder.addCase(resetRdexOPedia, (state) => {
        state.destinationSelected = null;
      });
    },
});
export const { destinationClicked, resetDestination } = destinationSlice.actions;
export const destinationReducer = destinationSlice.reducer;
