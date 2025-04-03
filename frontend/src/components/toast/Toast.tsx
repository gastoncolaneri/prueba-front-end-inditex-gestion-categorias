import { MdErrorOutline, MdCheckCircleOutline } from "react-icons/md";
import { ToastProps } from "../../types";

const Toast = ({ type, title, message }: ToastProps) => {
  return (
    <div className="absolute top-2/12 left-6/12 flex items-end justify-center z-40 mb-20">
      <div className="fixed z-50 bg-white justify-center items-center border-2 border-zara-100 flex-col p-4">
        <div className="flex items-center gap-2 mb-1">
          {type === "error" && (
            <MdErrorOutline className="text-zara-200" size={20} />
          )}
          {type === "success" && (
            <MdCheckCircleOutline className="text-zara-200" size={20} />
          )}
          <p className="text-sm font-bold text-left text-zara-200">{title}</p>
        </div>
        <p className="text-sm">{message}</p>
      </div>
    </div>
  );
};

export { Toast };
