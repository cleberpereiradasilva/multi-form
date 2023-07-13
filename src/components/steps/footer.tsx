import { FooterTProps } from "./types";

export const Footer = ({ children }: FooterTProps) => (
  <div className="flex flex-row justify-between justify-items-center  md:pb-3 lg:w-form md:w-4/5 sm:p-3 sm:pr-6  md:pr-24 md:pl-24 text-gray-cool bg-white">
    {children}
  </div>
);
