import { ButtonProps } from "../../types";
import { getButtonClasses } from "../../utils";

const Button = ({
  variant = "primary",
  size = "medium",
  status = "default",
  children,
  className,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={getButtonClasses({ variant, size, className, status })}
      onPointerDown={(event) => event.stopPropagation()}
      {...props}
    >
      {children}
    </button>
  );
};

export { Button };
