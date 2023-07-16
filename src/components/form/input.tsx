import * as Form from "@radix-ui/react-form";
import { InputProps } from "./types";
import { useState } from "react";
export const Input = ({
  label,
  required = false,
  requiredMessage,
  typeMismatchMessage,
  ...otherProps
}: InputProps) => {
  const [errors, setErrors] = useState(null);

  const handleValidation = (evt) => {
    if (!evt.target.validity.valid) {
      for (const key in evt.target.validity) {
        if (evt.target.validity[key]) {
          setErrors(key);
        }
      }
    }
  };
  return (
    <div className="flex flex-col mt-7">
      <Form.Field name={otherProps?.name || "name"}>
        <div className="flex flex-row justify-between">
          <Form.Label className="FormLabel">{label}</Form.Label>
          <div
            className={`font-bold text-sm text-red-strawberry pr-1 ${
              errors === "valueMissing" ? "block" : "hidden"
            }`}
          >
            {requiredMessage || "This field is required"}
          </div>
          <div
            className={`font-bold text-sm text-red-strawberry pr-1 ${
              errors === "typeMismatch" ? "block" : "hidden"
            }`}
          >
            {typeMismatchMessage || "Invalid value"}
          </div>
        </div>
        <Form.Control asChild>
          <input
            {...otherProps}
            className="border-2 rounded-lg p-2 w-full"
            id={otherProps?.id || otherProps?.name}
            required={required}
            onBlur={handleValidation}
            onFocus={() => {
              setErrors(null);
            }}
          />
        </Form.Control>
      </Form.Field>
    </div>
  );
};
