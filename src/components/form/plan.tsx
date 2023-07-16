import { PlanProps } from "./types";

export const Plan = ({
  children,
  name,
  className,
  ...otherProps
}: PlanProps) => (
  <button
    {...otherProps}
    className={`border-[1px] sm:w-full  md:w-1/3 rounded-lg flex md:justify-between md:flex-col sm:flex-row  md:pt-5 sm:p-3 ${className}`}
  >
    {children}
  </button>
);
