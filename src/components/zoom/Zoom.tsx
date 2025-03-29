import { MdOutlineZoomIn } from "react-icons/md";
import { MdOutlineZoomOut } from "react-icons/md";
import { Button } from "../button";
import { Tooltip } from "../tooltip";

const Zoom = () => {
  return (
    <div className="flex flex-row gap-2 justify-start items-center mb-2">
      <div className="relative">
        <Button
          variant="primary"
          size="small"
          className="p-0! peer border-none"
        >
          <MdOutlineZoomIn size={40} />
        </Button>
        <Tooltip>Acercar</Tooltip>
      </div>

      <div className="relative">
        <Button
          variant="primary"
          size="small"
          className="p-0! peer border-none"
        >
          <MdOutlineZoomOut size={40} />
        </Button>
        <Tooltip>Alejar</Tooltip>
      </div>
    </div>
  );
};

export { Zoom };
