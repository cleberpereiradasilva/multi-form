"use client";
import { useEffect } from "react";
import { Side } from "@/components/side";
import { Steps } from "@/components/steps";
import { Form } from "@/components/form";
import { useSelector } from "react-redux";
import { setTotalPrice } from "../steps/two/two-slice";
import { useDispatch } from "react-redux";
import { Typograph } from "../Typograph";

export const MultiForm = () => {
  const handleSubmit = (event: any) => {
    event.preventDefault();
  };

  const fullState = useSelector((state: any) => JSON.stringify(state));
  const activeStep = useSelector((state: any) => state.navigate.step);
  const activeAddons = useSelector((state: any) => state.addons.addons);
  const activePlan = useSelector((state: any) => state.plan.activePlan);
  const activePeriod = useSelector((state: any) => state.plan.period);
  const dispatch = useDispatch();

  useEffect(() => {
    const totalPrice = activeAddons.reduce((acc: number, addon: any) => {
      acc = acc + addon.price[activePeriod].price;
      return acc;
    }, activePlan.price[activePeriod].price);
    dispatch(setTotalPrice(totalPrice));
  }, [activeAddons, activePeriod, activePlan, dispatch]);

  return (
    <main className="flex bg-blue-light font-ubuntu text-base min-h-screen sm:flex-row md:flex-col md:items-center sm:items-stretch  justify-center md:p-5 sm:p-0">
      <div className="sm:bg-sm-side items-stretch sm:bg-blue-light md:bg-none  bg-no-repeat bg-top lg:w-930 sm:w-full  md:w-full md:h-184 sm:min-h-full md:bg-white sm:p-0 md:p-2 rounded-lg flex sm:flex-col md:flex-row lg:flex-row">
        <Side.SideBar>
          <Side.SideStep stepNumber={1} active={activeStep === 1}>
            YOUR INFO
          </Side.SideStep>
          <Side.SideStep stepNumber={2} active={activeStep === 2}>
            SELECT PLAN
          </Side.SideStep>
          <Side.SideStep stepNumber={3} active={activeStep === 3}>
            ADD ONS
          </Side.SideStep>
          <Side.SideStep
            stepNumber={4}
            active={activeStep === 4 || activeStep === 5}
          >
            SUMARY
          </Side.SideStep>
        </Side.SideBar>
        <Form.Root className="w-full h-full" onSubmit={handleSubmit}>
          <div className="h-full w-full flex  flex-col justify-between">
            <Steps.One className={activeStep === 1 ? "" : "hidden"} />
            <Steps.Two className={activeStep === 2 ? "" : "hidden"} />
            <Steps.Three className={activeStep === 3 ? "" : "hidden"} />
            <Steps.Sumary className={activeStep === 4 ? "" : "hidden"} />
            <Steps.Thanks className={activeStep === 5 ? "" : "hidden"} />
          </div>
        </Form.Root>
      </div>
      <div className="mt-3 sm:hidden lg:w-930  md:w-full sm:min-h-full md:bg-white sm:p-0 md:p-2 flex sm:flex-col md:flex-row lg:flex-row">
        <Typograph.Title>Redux payload</Typograph.Title>
        <Typograph.Info className="flex sm:p-3 md:pl-10 md:pr-10">
          {fullState}
        </Typograph.Info>
      </div>
    </main>
  );
};
