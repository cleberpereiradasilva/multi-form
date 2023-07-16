import { useState } from "react";
import { Typograph } from "../../Typograph";
import { Form } from "../../form";
import { Footer } from "../footer";
import { Content } from "../content";
import { useDispatch } from "react-redux";
import { nextPage } from "./../../side/side-slice";
import { personalSave } from "./../../steps/one/one-slice";

export const One = ({ className }: { className: string }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const dispatch = useDispatch();
  const handleSubmit = () => {
    dispatch(
      personalSave({
        name,
        email,
        phone,
      })
    );
    dispatch(nextPage());
  };
  return (
    <div className={`${className} flex flex-col  h-full justify-between`}>
      <Content>
        <div className="sm:pr-30 w-full">
          <Typograph.Title>Personal info</Typograph.Title>
          <Typograph.Info>
            Pelase provider your name, email address, and phone number.
          </Typograph.Info>
          <Form.Input
            value={name}
            requiredMessage="This field is required"
            required={true}
            label="Name"
            name="name"
            placeholder="e.g. Stephen King"
            onChange={(e: any) => {
              setName(e.target.value);
            }}
          />
          <Form.Input
            value={email}
            type="email"
            label="Email"
            name="email"
            required={true}
            placeholder="e.g.stephenking@lorem.com"
            requiredMessage="This field is required"
            typeMismatchMessage="This email is invalid"
            onChange={(e: any) => {
              setEmail(e.target.value);
            }}
          />
          <Form.Mask
            value={phone}
            mask="+1 99 999 9999"
            type="text"
            label="Phone Number"
            name="phonenumber"
            required={true}
            placeholder="e.g. +1 23 456 7890"
            onChange={(e: any) => {
              setPhone(e.target.value);
            }}
          />
        </div>
      </Content>
      <Footer>
        <div></div>
        <Form.PrimaryButton type="submit" onClick={handleSubmit}>
          Next
        </Form.PrimaryButton>
      </Footer>
    </div>
  );
};
