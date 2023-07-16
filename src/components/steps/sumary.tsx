import Link from "next/link";
import { Typograph } from "../Typograph";
import { Footer } from "./footer";
import { Form } from "../form";
import { Content } from "./content";
import { useDispatch } from "react-redux";

import { nextPage, setPage } from "./../side/side-slice";
import { useSelector } from "react-redux";

export const Sumary = ({ className }: { className: string }) => {
  const dispatch = useDispatch();
  const totalPrice = useSelector((state: any) => state.plan.totalPrice);
  const addons = useSelector((state: any) => state.addons.addons);
  const activePeriod = useSelector((state: any) => state.plan.period);
  const shortPeriod = useSelector((state: any) => state.plan.shortPeriod);
  const activeName = useSelector((state: any) => state.plan.activePlan.name);
  const activePrice = useSelector(
    (state: any) => state.plan.activePlan.price[activePeriod]?.price
  );

  return (
    <div className={`${className} flex flex-col  h-full justify-between`}>
      <Content>
        <div className="sm:pr-30">
          <Typograph.Title>Finish up</Typograph.Title>
          <Typograph.Info>
            Double-check everything looks OK before confirming
          </Typograph.Info>
          <div className="pt-7">
            <div className="flex justify-between flex-col">
              <div className="bg-gray-100 rounded-lg pb-3">
                <div className="border-b-[1px] p-3 pt-5 pl-5 flex justify-between">
                  <div>
                    <div className="text-blue-marine font-bold capitalize">
                      {activeName} {activePeriod}
                    </div>
                    <div className="text-sm">
                      <Link
                        href="#"
                        className="underline"
                        onClick={() => {
                          dispatch(setPage({ activeStep: 2 }));
                        }}
                      >
                        Change
                      </Link>
                    </div>
                  </div>
                  <div className="text-blue-marine font-bold">
                    +${activePrice}/{shortPeriod}
                  </div>
                </div>

                {addons.map(({ id, title, price }) => (
                  <div
                    key={id}
                    className="flex justify-between p-3 pl-5  h-13 items-center"
                  >
                    <div className="text-sm">{title}</div>
                    <div className=" text-blue-800 text-sm font-bold">
                      +${price[activePeriod].price}/{shortPeriod}
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex justify-between pl-5 pt-5 pr-3 ">
                <div>Total (per {activePeriod})</div>
                <div className=" text-blue-700 text-2xl font-bold">
                  +${totalPrice}/{shortPeriod}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Content>
      <Footer>
        <div />
        <Form.PrimaryButton
          className="bg-blue-800"
          onClick={() => dispatch(nextPage())}
        >
          Confirm
        </Form.PrimaryButton>
      </Footer>
    </div>
  );
};
