import * as Form from "@radix-ui/react-form";
import { useState } from "react";

import InputMask from "react-input-mask";
import { MaskProps } from "./types";

export const Mask = ({
  label,
  placeholder,
  required = false,
  name,
  id,
  value,
  type,
  mask,
  requiredMessage,
  typeMismatchMessage,
}: MaskProps) => {
  const [thisValue, setThisValue] = useState(value || "");
  return (
    <div className="flex flex-col mt-7">
      <Form.Field name={name || "name"}>
        <div className="flex flex-row justify-between">
          <Form.Label className="FormLabel">{label}</Form.Label>
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
            mask="+1 99 999 9999"
            required={required}
            className="border-2 rounded-lg p-2 w-full"
            type={type || ""}
            id={id || name}
            placeholder={placeholder}
            value={thisValue}
            onChange={(evt: any) => {
              setThisValue(evt.target.value);
            }}
          />
        </Form.Control>
      </Form.Field>
    </div>
  );
};
