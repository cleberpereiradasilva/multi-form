import { createSlice } from "@reduxjs/toolkit";
import { Plan, planList } from "./price-list";

const initialPlan: Plan = planList.find((plan: Plan) => plan.id === 1) as Plan;
const initialState = {
  period: "monthly",
  shortPeriod: "mo",
  totalPrice: initialPlan.price.monthly.price,
  activePlan: {
    id: initialPlan.id,
    name: initialPlan.name,
    price: initialPlan.price,
  },
};

const twoSlice = createSlice({
  name: "StepTwo",
  initialState,
  reducers: {
    planSave(state, action) {
      state.activePlan.name = action.payload.name;
      state.activePlan.id = action.payload.id;
      state.activePlan.price = action.payload.price;
    },
    setPeriod(state, action) {
      state.period = action.payload;
      state.shortPeriod = action.payload === "yearly" ? "yr" : "mo";
    },
    setTotalPrice(state, action) {
      state.totalPrice = action.payload;
    },
  },
});

export const { planSave, setPeriod, setTotalPrice } = twoSlice.actions;
export default twoSlice.reducer;
