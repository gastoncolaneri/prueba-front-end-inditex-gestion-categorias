import { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonVariant = "primary" | "secondary";
type ButtonStatus = "default" | "selected";

interface ZoomProps {
  zoomIn: () => void;
  zoomOut: () => void;
  resetZoom: () => void;
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  status?: ButtonStatus;
  variant?: ButtonVariant;
  className?: string;
  onClick?: () => void;
  children?: ReactNode;
}

interface AlignButtonProps {
  children: React.ReactNode;
  tooltipText: string;
  onClick: () => void;
}

export type { ButtonProps, AlignButtonProps, ZoomProps };
