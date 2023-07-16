export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  typeMismatchMessage?: string;
  requiredMessage?: string;
  required?: boolean;
}

export type MaskProps = InputProps & { mask: string };

export interface PlanProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {}
