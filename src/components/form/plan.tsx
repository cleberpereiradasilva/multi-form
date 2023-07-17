import { PlanProps } from "./types";

export const Plan = ({
  children,
  name,
  className,
  ...otherProps
}: PlanProps) => (
  <button
    {...otherProps}
    className={`border-[1px] w-full rounded-lg flex md:justify-between md:flex-col sm:flex-row md:pt-5 sm:p-3 ${className}`}
  >
    {children}
  </button>
);
