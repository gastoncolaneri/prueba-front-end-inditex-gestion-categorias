import { SIZE_CLASSES, VARIANT_CLASSES, STATUS_CLASSES } from "../constants";
import { ButtonProps } from "../types";

const getButtonClasses = ({
  variant = "primary",
  size = "medium",
  status = "default",
  className,
}: ButtonProps) => {
  return `${SIZE_CLASSES[size]} ${VARIANT_CLASSES[variant]}  ${
    STATUS_CLASSES[status]
  } ${className || ""}`;
};

export { getButtonClasses };
