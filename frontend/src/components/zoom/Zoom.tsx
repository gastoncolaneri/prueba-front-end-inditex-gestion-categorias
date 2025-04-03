import { MdOutlineZoomIn } from "react-icons/md";
import { MdOutlineZoomOut } from "react-icons/md";
import { MdYoutubeSearchedFor } from "react-icons/md";
import { ZOOM_IN, ZOOM_OUT, ZOOM_RESET } from "../../constants";
import { Button } from "../button";
import { Tooltip } from "../tooltip";
import { ZoomProps } from "../../types";

const Zoom = ({ zoomIn, zoomOut, resetZoom }: ZoomProps) => {
  return (
    <div className="flex flex-row gap-2 justify-start items-center">
      <div className="relative">
        <Button
          variant="primary"
          className="p-0! peer border-none focus:text-zara-100"
          onClick={zoomIn}
        >
          <MdOutlineZoomIn size={40} />
        </Button>
        <Tooltip>{ZOOM_IN}</Tooltip>
      </div>
      <div className="relative">
        <Button
          variant="primary"
          className="p-0! peer border-none  focus:text-zara-100"
          onClick={resetZoom}
        >
          <MdYoutubeSearchedFor size={40} />
        </Button>
        <Tooltip>{ZOOM_RESET}</Tooltip>
      </div>
      <div className="relative">
        <Button
          variant="primary"
          className="p-0! peer border-none  focus:text-zara-100"
          onClick={zoomOut}
        >
          <MdOutlineZoomOut size={40} />
        </Button>
        <Tooltip>{ZOOM_OUT}</Tooltip>
      </div>
    </div>
  );
};

export { Zoom };
