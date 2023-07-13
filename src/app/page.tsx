"use client";
import { useState } from "react";
import { Side } from "@/components/side";
import { Steps } from "@/components/steps";
import { Form } from "@/components/form";

export default function Home() {
  const [step, setStep] = useState(1);
  const [plan, setPlan] = useState("Pro");

  const handleSubmit = (event: any) => {
    event.preventDefault();
    console.log(event.target);
  };

  return (
    <main className="flex bg-blue-light font-ubuntu text-base min-h-screen sm:flex-row md:flex-col md:items-center sm:items-stretch  justify-center md:p-5 sm:p-0">
      <div className="sm:bg-sm-side items-stretch sm:bg-blue-light md:bg-none  bg-no-repeat bg-top lg:w-930 sm:w-full  md:w-full md:h-184 sm:min-h-full md:bg-white sm:p-0 md:p-2 rounded-lg flex sm:flex-col md:flex-row lg:flex-row">
        <Side.SideBar>
          <Side.SideStep stepNumber={1} active={step === 1}>
            YOUR INFO
          </Side.SideStep>
          <Side.SideStep stepNumber={2} active={step === 2}>
            SELECT PLAN
          </Side.SideStep>
          <Side.SideStep stepNumber={3} active={step === 3}>
            ADD ONS
          </Side.SideStep>
          <Side.SideStep stepNumber={4} active={step === 4 || step === 5}>
            SUMARY
          </Side.SideStep>
        </Side.SideBar>
        <Form.Root className="h-full" onSubmit={handleSubmit}>
          <div className="h-full w-full flex  flex-col justify-between">
            <Steps.One
              className={step === 1 ? "" : "hidden"}
              handleNextClick={() => setStep(step + 1)}
            />
            <Steps.Two
              className={step === 2 ? "" : "hidden"}
              plan={plan}
              setPlan={setPlan}
              handleNextClick={() => setStep(step + 1)}
              handleBackClick={() => setStep(step - 1)}
            />
            <Steps.Three
              className={step === 3 ? "" : "hidden"}
              handleNextClick={() => setStep(step + 1)}
              handleBackClick={() => setStep(step - 1)}
            />
            <Steps.Sumary
              className={step === 4 ? "" : "hidden"}
              changePlan={() => setStep(2)}
              handleBackClick={() => setStep(step - 1)}
              handleNextClick={() => setStep(step + 1)}
            />

            <Steps.Thanks className={step === 5 ? "" : "hidden"} />
          </div>
        </Form.Root>
      </div>
    </main>
  );
}
