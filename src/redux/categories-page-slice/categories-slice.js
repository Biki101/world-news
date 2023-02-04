import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  technology: [],
  politics: [],
  health: [],
  food: [],
  automobiles: [],
  realestate: [],
};

export const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    populateTechnology: (state, action) => {
      state.technology = action.payload;
    },
    populatePolitics: (state, action) => {
      state.politics = action.payload;
    },
    populateHealth: (state, action) => {
      state.health = action.payload;
    },
    populateFood: (state, action) => {
      state.food = action.payload;
    },
    populateAutomobiles: (state, action) => {
      state.automobiles = action.payload;
    },
    populateRealestate: (state, action) => {
      state.realestate = action.payload;
    },
  },
});

export const {
  populateTechnology,
  populatePolitics,
  populateHealth,
  populateFood,
  populateAutomobiles,
  populateRealestate,
} = categorySlice.actions;

export default categorySlice.reducer;
