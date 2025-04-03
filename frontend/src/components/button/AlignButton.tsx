import { Tooltip } from "../tooltip";
import { Button } from "./Button";

const AlignButton = ({
  children,
  tooltipText,
  onClick,
}: {
  children: React.ReactNode;
  tooltipText: string;
  onClick: () => void;
}) => {
  return (
    <div className="relative">
      <Button
        variant="primary"
        size="small"
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
