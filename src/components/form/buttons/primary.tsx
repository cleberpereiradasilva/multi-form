import { DefaultButton } from "./default";
import { PrimaryProps } from "./types";

export const PrimaryButton = ({
  children,
  className,
  ...props
}: PrimaryProps) => (
  <DefaultButton
    type="button"
    {...props}
    className={`text-gray-light bg-blue-marine ${className}`}
  >
    {children}
  </DefaultButton>
);
