import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  addons: [],
};

const threeSlice = createSlice({
  name: "StepThree",
  initialState,
  reducers: {
    setAddon(state, action) {
      state.addons = action.payload;
    },
  },
});

export const { setAddon } = threeSlice.actions;
export default threeSlice.reducer;
