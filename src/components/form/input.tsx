import * as Form from "@radix-ui/react-form";
import { useState } from "react";
import { InputProps } from "./types";
export const Input = ({
  label,
  placeholder,
  required = false,
  name,
  id,
  value,
  type,
  requiredMessage,
  typeMismatchMessage,
}: InputProps) => {
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
          <input
            className="border-2 rounded-lg p-2 w-full"
            type={type || ""}
            id={id || name}
            required={required}
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