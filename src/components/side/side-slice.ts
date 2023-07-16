import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  step: 1,
};

const sideSlice = createSlice({
  name: "activateStep",
  initialState,
  reducers: {
    nextPage(state) {
      if (state.step < 5) state.step += 1;
    },
    previewsPage(state) {
      if (state.step > 1) state.step -= 1;
    },
    setPage(state, action) {
      state.step = action.payload.activeStep;
    },
  },
});
export const { nextPage, previewsPage, setPage } = sideSlice.actions;
export default sideSlice.reducer;
