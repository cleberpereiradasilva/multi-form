import { ButtonHTMLAttributes } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export interface PrimaryProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export interface GostProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}
