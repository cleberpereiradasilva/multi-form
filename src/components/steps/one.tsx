import { MouseEventHandler } from "react";
import { Typograph } from "../Typograph";
import { Form } from "../form";
import { Footer } from "./footer";
import { Content } from "./content";

export const One = ({
  className,
  handleNextClick,
}: {
  className: string;
  handleNextClick?: MouseEventHandler<HTMLButtonElement>;
}) => (
  <div className={`${className} flex flex-col  h-full justify-between`}>
    <Content>
      <div className="sm:pr-30">
        <Typograph.Title>Personal info</Typograph.Title>
        <Typograph.Info>
          Pelase provider your name, email address, and phone number.
        </Typograph.Info>
        <Form.Input
          requiredMessage="This field is required"
          required={true}
          type="name"
          label="Name"
          name="name"
          placeholder="e.g. Stephen King"
        />
        <Form.Input
          type="email"
          label="Email"
          name="email"
          required={true}
          placeholder="e.g.stephenking@lorem.com"
          requiredMessage="This field is required"
          typeMismatchMessage="This email is invalid"
        />
        <Form.Mask
          mask="+1 99 999 9999"
          type="text"
          label="Phone Number"
          name="phonenumber"
          required={true}
          placeholder="e.g. +1 23 456 7890"
        />
      </div>
    </Content>
    <Footer>
      <div></div>
      <Form.PrimaryButton onClick={handleNextClick}>Next</Form.PrimaryButton>
    </Footer>
  </div>
);
