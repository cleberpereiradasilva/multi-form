import { DefaultButton } from "./default";
import { GostProps } from "./types";

export const GostButton = ({ children, className, ...props }: GostProps) => (
  <DefaultButton
    type="button"
    {...props}
    className={`text-gray-light font-bold hover:text-blue-marine text-left ${className}`}
  >
    {children}
  </DefaultButton>
);
