import { TooltipProps } from "../../types";

const Tooltip = ({ className, children }: TooltipProps) => {
  return (
    <span
      className={`hidden absolute text-sm shadow-lg p-1 bg-white text-gray-400 border-1 peer-hover:block peer-hover:z-50 ${className}`}
    >
      {children}
    </span>
  );
};

export { Tooltip };
