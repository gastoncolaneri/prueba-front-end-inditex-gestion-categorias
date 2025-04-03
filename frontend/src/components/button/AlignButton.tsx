import { Tooltip } from "../tooltip";
import { Button } from "./Button";
import { AlignButtonProps } from "../../types";

const AlignButton = ({ children, tooltipText, onClick }: AlignButtonProps) => {
  return (
    <div className="relative">
      <Button
        variant="primary"
        className="p-2! peer focus:bg-black focus:text-white mb-1"
        onClick={onClick}
      >
        {children}
      </Button>
      <Tooltip>{tooltipText}</Tooltip>
    </div>
  );
};

export { AlignButton };
