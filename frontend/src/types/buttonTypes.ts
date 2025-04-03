import { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonVariant = "primary" | "secondary";
type ButtonSize = "small" | "medium" | "large";
type ButtonStatus = "default" | "selected";

interface ZoomProps {
  zoomIn: () => void;
  zoomOut: () => void;
  resetZoom: () => void;
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  status?: ButtonStatus;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  onClick?: () => void;
  children?: ReactNode;
}

export type { ButtonProps, ZoomProps };
