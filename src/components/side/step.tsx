import { StepProps } from "./types";

export const SideStep = ({ children, stepNumber, active }: StepProps) => (
  <div className="flex items-center mb-5">
    <div>
      <div
        className={`md:h-8 md:w-8 sm:w-8 sm:h-8 font-bold text-sm ${
          active
            ? "bg-blue-light"
            : " text-gray-light border-2 border-gray-cool"
        } rounded-full flex items-center justify-center mr-3`}
      >
        {stepNumber}
      </div>
    </div>
    <div className="sm:hidden md:block">
      <div className="text-gray-cool text-sm">STEP {stepNumber}</div>
      <div className="font-bold text-gray-light -tracking-tighter text-sm">
        {children}
      </div>
    </div>
  </div>
);
