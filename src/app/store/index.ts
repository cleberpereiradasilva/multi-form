import { configureStore } from "@reduxjs/toolkit";
import stepOneReducer from "../../components/steps/one/one-slice";
import navidateSeps from "../../components/side/side-slice";
import plan from "../../components/steps/two/two-slice";
import adons from "../../components/steps/three/three-slice";

export const store = configureStore({
  reducer: {
    stepOne: stepOneReducer,
    navigate: navidateSeps,
    plan: plan,
    addons: adons,
  },
});
