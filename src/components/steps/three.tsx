import { MouseEventHandler, useState } from "react";
import { Typograph } from "../Typograph";
import { Addon } from "./addon";
import { Footer } from "./footer";
import { Form } from "../form";
import { Content } from "./content";

export const Three = ({
  className,
  handleNextClick,
  handleBackClick,
}: {
  className: string;
  handleNextClick?: MouseEventHandler<HTMLButtonElement>;
  handleBackClick?: MouseEventHandler<HTMLButtonElement>;
}) => {
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
    <div className={`${className} flex flex-col  h-full justify-between`}>
      <Content>
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
                  <div className="font-bold text-blue-marine">
                    Online service
                  </div>
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
                  <div className="font-bold text-blue-marine">
                    Larger storage
                  </div>
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
      </Content>
      <Footer>
        {handleBackClick && (
          <Form.GostButton onClick={handleBackClick}>Go Back</Form.GostButton>
        )}
        {handleNextClick && (
          <Form.PrimaryButton onClick={handleNextClick}>
            Next
          </Form.PrimaryButton>
        )}
      </Footer>
    </div>
  );
};
