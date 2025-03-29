import { Tooltip } from "../tooltip";
import { Button } from "./Button";

const AlignButton = ({
  children,
  tooltipText,
}: {
  children: React.ReactNode;
  tooltipText: string;
}) => {
  return (
    <div className="relative">
      <Button
        variant="primary"
        size="small"
        className="p-2! peer focus:bg-black focus:text-white mb-1"
      >
        {children}
      </Button>
      <Tooltip>{tooltipText}</Tooltip>
    </div>
  );
};

export { AlignButton };
