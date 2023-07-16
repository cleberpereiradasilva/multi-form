import { useState } from "react";
import { Typograph } from "../../Typograph";
import { Addon } from "../addon";
import { Footer } from "../footer";
import { Form } from "../../form";
import { Content } from "../content";
import { useDispatch, useSelector } from "react-redux";

import { nextPage, previewsPage } from "./../../side/side-slice";
import { setAddon as saveAddon } from "./three-slice";
import { addonList } from "./addon-list";
import { setTotalPrice } from "../two/two-slice";

export const Three = ({ className }: { className: string }) => {
  const [addons, setAddons] = useState([]);
  const dispatch = useDispatch();
  const activePeriod = useSelector((state: any) => state.plan.period);
  const shortPeriod = useSelector((state: any) => state.plan.shortPeriod);

  const handleAddons = (evt: {
    target: { value: string; checked: boolean };
  }) => {
    const { checked, value }: { checked: boolean; value: string } = evt.target;
    if (checked) {
      const newAddon = addonList.find((addon) => addon.id === Number(value));
      const auxAddons = [...addons];
      auxAddons.push({
        id: newAddon.id,
        title: newAddon.title,
        price: newAddon.price,
      });
      setAddons(auxAddons);
      dispatch(saveAddon(auxAddons));
    } else {
      const auxAddons = [...addons].filter(
        (addon) => addon.id !== Number(value)
      );
      setAddons(auxAddons);
      dispatch(saveAddon(auxAddons));
    }
  };

  const showAddons = () =>
    addonList.map(({ id, title, description, price }) => (
      <Addon
        key={id}
        className={
          addons.find((adon) => adon.id === id)
            ? "border-blue-purple bg-blue-purple-light"
            : ""
        }
      >
        <div className="p-7">
          <input
            type="checkbox"
            className="w-5 h-5"
            value={id}
            onChange={handleAddons}
          />
        </div>
        <div className="flex flex-col items-start w-full">
          <div className="font-bold text-blue-marine">{title}</div>
          <div className="text-sm">{description}</div>
        </div>
        <div className={` text-sm text-blue-purple font-bold pr-5`}>
          +${price[activePeriod]?.price}/{shortPeriod}
        </div>
      </Addon>
    ));
  return (
    <div className={` flex flex-col  h-full justify-between ${className}`}>
      <Content>
        <div className="sm:pr-30">
          <Typograph.Title>Pick add-ons</Typograph.Title>
          <Typograph.Info>
            Add-ons help enchnace your gaming experience.
          </Typograph.Info>
          <div className="pt-9">
            <div className="flex justify-between flex-col">{showAddons()}</div>
          </div>
        </div>
      </Content>
      <Footer>
        <Form.GostButton onClick={() => dispatch(previewsPage())}>
          Go Back
        </Form.GostButton>
        <Form.PrimaryButton onClick={() => dispatch(nextPage())}>
          Next 3
        </Form.PrimaryButton>
      </Footer>
    </div>
  );
};
