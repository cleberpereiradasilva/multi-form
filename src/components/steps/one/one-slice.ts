import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  email: "",
  phone: "",
};

const oneSlice = createSlice({
  name: "StepOne",
  initialState,
  reducers: {
    personalSave(state, action) {
      const { name, phone, email } = action.payload;
      state.name = name;
      state.email = email;
      state.phone = phone;
    },
  },
});

export const { personalSave } = oneSlice.actions;
export default oneSlice.reducer;
