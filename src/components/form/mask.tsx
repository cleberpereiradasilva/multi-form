import * as Form from "@radix-ui/react-form";

import InputMask from "react-input-mask";
import { MaskProps } from "./types";

export const Mask = ({
  label,
  name,
  id,
  mask,
  requiredMessage,
  typeMismatchMessage,
  ...otherProps
}: MaskProps) => {
  return (
    <div className="flex flex-col mt-7">
      <Form.Field name={name || "name"}>
        <div className="flex flex-row justify-between">
          <Form.Label className="FormLabel text-blue-marine font-bold">
            {label}
          </Form.Label>
          <Form.Message
            className="font-bold text-sm text-red-strawberry pr-1"
            match="valueMissing"
          >
            {requiredMessage || "This field is required"}
          </Form.Message>
          <Form.Message
            className="font-bold text-sm text-red-strawberry pr-1"
            match="typeMismatch"
          >
            {typeMismatchMessage || "Invalid value"}
          </Form.Message>
        </div>
        <Form.Control asChild>
          <InputMask
            mask={mask} //"+1 99 999 9999"
            className="border-2 rounded-lg p-2 w-full"
            {...otherProps}
          />
        </Form.Control>
      </Form.Field>
    </div>
  );
};
