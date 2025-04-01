import { MdOutlineZoomIn } from "react-icons/md";
import { MdOutlineZoomOut } from "react-icons/md";
import { MdYoutubeSearchedFor } from "react-icons/md";
import { ZOOM_IN, ZOOM_OUT, ZOOM_RESET } from "../../constants/buttonConstants";
import { Button } from "../button";
import { Tooltip } from "../tooltip";

const Zoom = () => {
  return (
    <div className="flex flex-row gap-2 justify-start items-center mb-2">
      <div className="relative">
        <Button
          variant="primary"
          size="small"
          className="p-0! peer border-none focus:text-zara-100"
        >
          <MdOutlineZoomIn size={40} />
        </Button>
        <Tooltip>{ZOOM_IN}</Tooltip>
      </div>
      <div className="relative">
        <Button
          variant="primary"
          size="small"
          className="p-0! peer border-none  focus:text-zara-100"
        >
          <MdYoutubeSearchedFor size={40} />
        </Button>
        <Tooltip>{ZOOM_RESET}</Tooltip>
      </div>
      <div className="relative">
        <Button
          variant="primary"
          size="small"
          className="p-0! peer border-none  focus:text-zara-100"
        >
          <MdOutlineZoomOut size={40} />
        </Button>
        <Tooltip>{ZOOM_OUT}</Tooltip>
      </div>
    </div>
  );
};

export { Zoom };
