export interface ButtonProps {
  text: string;
  type: ButtonTypes;
  link?: string;
  onClick?: (e, params = {}) => void;
}

type ButtonTypes = "primary" | "secondary" | "primary-link" | "secondary-link";
