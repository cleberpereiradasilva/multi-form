export type InputProps = {
  label?: string;
  placeholder?: string;
  name?: string;
  id?: string;
  value?: string;
  type?: string;
  typeMismatchMessage?: string;
  requiredMessage?: string;
  required?: boolean;
};

export type MaskProps = InputProps & { mask: string };
