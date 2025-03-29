import { ButtonProps } from "../../types";
import { getButtonClasses } from "../../utils/getButtonClasses";

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
      {...props}
    >
      {children}
    </button>
  );
};

export { Button };
