import Link from "next/link";
import { Typograph } from "../Typograph";
import { Footer } from "./footer";
import { MouseEventHandler } from "react";
import { Form } from "../form";
import { Content } from "./content";

export const Sumary = ({
  className,
  changePlan,
  handleNextClick,
  handleBackClick,
}: {
  className: string;
  changePlan: any;
  handleNextClick?: MouseEventHandler<HTMLButtonElement>;
  handleBackClick?: MouseEventHandler<HTMLButtonElement>;
}) => {
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
                    <div className="text-blue-marine font-bold">
                      Arcade (Yearly)
                    </div>
                    <div className="text-sm">
                      <Link href="#" className="underline" onClick={changePlan}>
                        Change
                      </Link>
                    </div>
                  </div>
                  <div className="text-blue-marine font-bold">$90/yr</div>
                </div>

                <div className="flex justify-between p-3 pl-5  h-13 items-center">
                  <div className="text-sm">Online service</div>
                  <div className=" text-blue-800 text-sm font-bold">$90/yr</div>
                </div>

                <div className="flex justify-between p-3 pl-5 h-13 items-center">
                  <div className="text-sm">Larger storage</div>
                  <div className=" text-blue-800 text-sm font-bold">$90/yr</div>
                </div>
              </div>
              <div className="flex justify-between pl-5 pt-5 pr-3 ">
                <div>Total(per year)</div>
                <div className=" text-blue-700 text-2xl font-bold">$120/yr</div>
              </div>
            </div>
          </div>
        </div>
      </Content>
      <Footer>
        {handleBackClick && (
          <Form.GostButton onClick={handleBackClick}>Go Back</Form.GostButton>
        )}
        {handleNextClick && (
          <Form.PrimaryButton className="bg-blue-800" onClick={handleNextClick}>
            Confirm
          </Form.PrimaryButton>
        )}
      </Footer>
    </div>
  );
};
