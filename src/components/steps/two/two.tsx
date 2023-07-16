import { Typograph } from "../../Typograph";
import { Form } from "../../form";
import * as Switch from "@radix-ui/react-switch";
import { Footer } from "../footer";
import { Content } from "../content";
import { useDispatch } from "react-redux";
import { nextPage, previewsPage } from "./../../side/side-slice";
import { planSave, setPeriod, setTotalPrice } from "./two-slice";
import { useSelector } from "react-redux";
import { planList } from "./price-list";

export const Two = ({ className }: { className: string }) => {
  const dispatch = useDispatch();

  const activePlan = useSelector((state: any) => state.plan.activePlan);
  const activePeriod = useSelector((state: any) => state.plan.period);
  const shortPeriod = useSelector((state: any) => state.plan.shortPeriod);
  const addons = useSelector((state: any) => state.addons.addons);

  const updatePrices = ({
    name,
    id,
    price: price,
  }: {
    name: string;
    id: number;
    price: {
      monthly: {
        price: number;
        message: string;
      };
      yearly: {
        price: number;
        message: string;
      };
    };
  }) => {
    dispatch(planSave({ name, id, price: price }));
    const totalPrice = addons.reduce((acc: number, addon: any) => {
      acc = acc + addon.price[activePeriod].price;
      return acc;
    }, price[activePeriod].price);
    dispatch(setTotalPrice(totalPrice));
  };

  const showPlans = () => {
    return planList.map(({ id, name, image, price }) => (
      <>
        <Form.Plan
          key={id}
          name={name}
          onClick={() => updatePrices({ name, id, price: price })}
          className={
            activePlan.id === id ? "border-blue-marine bg-blue-50" : ""
          }
        >
          <div className="pr-3 md:pb-9 sm:pb-3">{image}</div>
          <div className="flex flex-col items-start">
            <div className="font-bold text-blue-marine">{name}</div>
            <div className={`text-sm`}>
              +${price[activePeriod]?.price}/{shortPeriod}
            </div>
            <div className={` text-blue-marine`}>
              {price[activePeriod].message}
            </div>
          </div>
        </Form.Plan>
        <div className="w-3 h-2 last:hidden" />
      </>
    ));
  };

  return (
    <div
      className={`${className}  flex flex-col w-full h-full justify-between `}
    >
      <Content>
        <div className="sm:pr-30">
          <Typograph.Title>Select your plan</Typograph.Title>
          <Typograph.Info>
            You have the option monthly or yearly billing
          </Typograph.Info>
          <div className="lg:pt-6 md:pt-0 sm:mt-8">
            <div className="flex justify-between lg:flex-row md:flex-row sm:flex-col sm:pb-2 md:pb-5">
              {showPlans()}
            </div>
            <div className="bg-blue-50 rounded-lg h-10 font-bold flex justify-center items-center">
              <span className={`${activePeriod ? "text-blue-marine" : ""}`}>
                Monthly
              </span>
              <div className="w-20 text-center">
                <Switch.Root
                  className="w-11 h-5 relative bg-blue-marine rounded-full"
                  id="airplane-mode"
                >
                  <Switch.Thumb
                    onClick={() =>
                      dispatch(
                        setPeriod(
                          activePeriod === "yearly" ? "monthly" : "yearly"
                        )
                      )
                    }
                    className={`w-3 h-3 ${
                      activePeriod !== "yearly"
                        ? "translate-x-[4px]"
                        : "translate-x-[27px]"
                    }   will-change-transform transition-transform  block bg-white rounded-full shadow-xl`}
                  />
                </Switch.Root>
              </div>
              <span className={`${activePeriod ? "text-blue-marine" : ""}`}>
                Yearly
              </span>
            </div>
          </div>
        </div>
      </Content>
      <Footer>
        <Form.GostButton onClick={() => dispatch(previewsPage())}>
          Go Back
        </Form.GostButton>
        <Form.PrimaryButton onClick={() => dispatch(nextPage())}>
          Next
        </Form.PrimaryButton>
      </Footer>
    </div>
  );
};
