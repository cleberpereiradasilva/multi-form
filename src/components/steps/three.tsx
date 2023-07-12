import { useState } from "react";
import { Typograph } from "../Typograph";
import { Addon } from "./addon";

export const Three = ({ className }: { className: string }) => {
  const [addons, setAddons] = useState([]);
  const handleAddons = (evt: {
    target: { value: string; checked: boolean };
  }) => {
    const { checked, value }: { checked: boolean; value: string } = evt.target;
    if (checked) {
      setAddons([...addons, value]);
    } else {
      const auxAddons = [...addons];
      const auxIndex = auxAddons.indexOf(value);
      auxAddons.splice(auxIndex, 1);
      setAddons(auxAddons);
    }
  };
  return (
    <div
      className={`${className} flex flex-col justify-center sm:pb-8 md:pb-3 sm:m-6 md:m-0 lg:w-form md:w-4/5 sm:p-5 md:pl-24 sm:pt-5 md:pt-11 md:pr-24 text-gray-cool bg-white sm:rounded-lg md:shadow-none sm:shadow-2xl`}
    >
      <div className="sm:pr-30">
        <Typograph.Title>Pick add-ons</Typograph.Title>
        <Typograph.Info>
          Add-ons help enchnace your gaming experience.
        </Typograph.Info>
        <div className="pt-9">
          <div className="flex justify-between flex-col">
            <Addon addons={addons} addonName={`online`}>
              <div className="p-7">
                <input
                  type="checkbox"
                  className="w-5 h-5"
                  value={`online`}
                  onChange={handleAddons}
                />
              </div>
              <div className="flex flex-col items-start w-full">
                <div className="font-bold text-blue-marine">Online service</div>
                <div className="text-sm">Access to multiplayer games</div>
              </div>
              <div className="text-sm text-blue-purple font-bold pr-5">
                +$9/mo
              </div>
            </Addon>

            <Addon addons={addons} addonName={`storage`}>
              <div className="p-7 ">
                <input
                  type="checkbox"
                  className="w-5 h-5"
                  value={`storage`}
                  onChange={handleAddons}
                />
              </div>
              <div className="flex flex-col items-start  w-full">
                <div className="font-bold text-blue-marine">Larger storage</div>
                <div className="text-sm">Extra 1TB of cloud save</div>
              </div>
              <div className="text-sm text-blue-purple font-bold pr-5">
                +$2/mo
              </div>
            </Addon>

            <Addon addons={addons} addonName={`custom`}>
              <div className="p-7 ">
                <input
                  type="checkbox"
                  className="w-5 h-5"
                  value={`custom`}
                  onChange={handleAddons}
                />
              </div>
              <div className="flex flex-col items-start  w-full">
                <div className="font-bold text-blue-marine">
                  Customizable profile
                </div>
                <div className="text-sm">Custom theme on your profile</div>
              </div>
              <div className="text-sm text-blue-purple font-bold pr-5">
                +$2/mo
              </div>
            </Addon>
          </div>
        </div>
      </div>
    </div>
  );
};
