export interface ButtonProps {
  text: string;
  type: ButtonTypes;
  link?: string;
}

type ButtonTypes = "primary" | "secondary" | "primary-link" | "secondary-link";
