import { ButtonProps } from "../../types";
import { getButtonClasses } from "../../utils";

const Button = ({
  variant = "primary",
  status = "default",
  children,
  className,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={getButtonClasses({ variant, className, status })}
      onPointerDown={(event) => event.stopPropagation()}
      {...props}
    >
      {children}
    </button>
  );
};

export { Button };
