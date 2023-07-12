import { FooterTProps } from "./types";

export const Footer = ({ step, setStep }: FooterTProps) => (
  <div className="flex flex-row justify-between justify-items-center  md:pb-3 lg:w-form md:w-4/5 sm:p-3 sm:pr-6  md:pr-24 md:pl-24 text-gray-cool bg-white">
    {step > 1 && (
      <button
        onClick={() => step - 1 >= 1 && setStep(step - 1)}
        className="p-2 sm:w-28 md:w-36 h-12 text-left hover:text-blue-marine font-bold sm:rounded-md md:rounded-xl"
      >
        Go Back
      </button>
    )}
    &nbsp;
    <button
      onClick={() => step + 1 <= 4 && setStep(step + 1)}
      className="p-2 sm:w-28 md:w-36 h-12 text-gray-light bg-blue-marine sm:rounded-md md:rounded-xl"
    >
      Next Step
    </button>
  </div>
);
