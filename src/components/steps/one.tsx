import { Typograph } from "../Typograph";
import { Form } from "../form";

export const One = ({ className }: { className: string }) => (
  <div
    className={`${className} flex flex-col justify-center sm:pb-8 md:pb-3 sm:m-6 md:m-0 lg:w-form md:w-4/5 sm:p-5 md:pl-24 sm:pt-5 md:pt-11 md:pr-24 text-gray-cool bg-white sm:rounded-lg md:shadow-none sm:shadow-2xl`}
  >
    <div className="sm:pr-30">
      <Typograph.Title>Personal info</Typograph.Title>
      <Typograph.Info>
        Pelase provider your name, email address, and phone number.
      </Typograph.Info>
      <Form.Input
        label="Name"
        name="name"
        placeholder="e.g. Stephen King"
        message="Erro on validate"
      />
      <Form.Input
        label="Email"
        name="name"
        placeholder="e.g.stephenking@lorem.com"
      />
      <Form.Input
        label="Phone Number"
        name="phonenumber"
        placeholder="e.g. +1 23 456 7890"
      />
    </div>
  </div>
);
