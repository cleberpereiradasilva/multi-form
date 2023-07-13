import { GostButton } from "./buttons/gost";
import { PrimaryButton } from "./buttons/primary";
import { Input } from "./input";
import { Mask } from "./mask";
import { Plan } from "./plan";
import * as FormRadix from "@radix-ui/react-form";

export const Form = {
  Root: FormRadix.Root,
  ValidityState: FormRadix.ValidityState,
  Mask,
  Input,
  Plan,
  GostButton,
  PrimaryButton,
};
