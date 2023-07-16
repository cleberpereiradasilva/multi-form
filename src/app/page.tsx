"use client";
import { Provider } from "react-redux";
import { store } from "./store";
import { MultiForm } from "@/components/register/form";

export default function Home() {
  return (
    <Provider store={store}>
      <MultiForm />
    </Provider>
  );
}
