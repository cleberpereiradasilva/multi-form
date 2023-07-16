import { AddonProps } from "./types";

export const Addon = ({ children, className }: AddonProps) => (
  <>
    <div
      className={`border-[1px] w-full rounded-lg flex md:justify-between items-center flex-row border-blue-purplish ${className}`}
    >
      {children}
    </div>
    <div className="h-3" />
  </>
);
