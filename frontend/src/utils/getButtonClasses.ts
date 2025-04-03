import { VARIANT_CLASSES, STATUS_CLASSES } from "../constants";
import { ButtonProps } from "../types";

const getButtonClasses = ({
  variant = "primary",
  status = "default",
  className,
}: ButtonProps) => {
  return `${VARIANT_CLASSES[variant]}  ${STATUS_CLASSES[status]} ${
    className || ""
  }`;
};

export { getButtonClasses };
