import { ButtonProps } from "./types";

export const DefaultButton = ({
  children,
  className,
  ...props
}: ButtonProps) => (
  <button
    {...props}
    className={`p-2 sm:w-28 md:w-36 h-12 sm:rounded-md md:rounded-xl ${className}`}
  >
    {children}
  </button>
);
