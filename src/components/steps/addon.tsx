import { AddonProps } from "./types";

export const Addon = ({ children, addons, addonName }: AddonProps) => (
  <>
    <div
      className={`border-[1px] w-full rounded-lg flex md:justify-between items-center flex-row border-blue-purplish ${
        addons.includes(addonName)
          ? "border-blue-purple bg-blue-purple-light"
          : ""
      }`}
    >
      {children}
    </div>
    <div className="h-3" />
  </>
);
