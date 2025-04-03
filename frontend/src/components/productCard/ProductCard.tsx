import { Button } from "../button";
import { MdDeleteForever } from "react-icons/md";
import { Tooltip } from "../tooltip";
import { useProductsStore } from "../../store/productsStore";
import { DELETE, PRODUCT } from "../../constants/modalConstants";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

interface ProductCardProps {
  id: number;
  name: string;
  price: string;
  url: string;
}

const ProductCard = ({ id, name, price, url }: ProductCardProps) => {
  const { setDeleteModalState, isEditModeEnabled } = useProductsStore();
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({
    id,
    data: { type: "product" },
    disabled: !isEditModeEnabled,
  });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition: transition,
    opacity: isDragging ? 0.8 : 1,
    scale: isDragging ? 1.1 : 1,
    boxShadow: isDragging
      ? "0px 15px 25px rgba(0, 0, 0, 0.3)"
      : "0px 5px 10px rgba(0, 0, 0, 0.1)",
    zIndex: isDragging ? 1000 : "auto",
  };
  const handleDeleteProduct = (id: number) => {
    setDeleteModalState({
      type: "delete-product",
      id,
      isOpen: true,
    });
  };

  return (
    <div
      className={`p-2 rounded shadow-md bg-white ${
        isEditModeEnabled && "cursor-pointer"
      } transition-transform flex flex-col`}
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
    >
      {isEditModeEnabled && (
        <>
          <Button
            variant="primary"
            size="small"
            className="absolute right-0 top-0 sm:right-2 sm:top-2 rounded-full! h-10! w-10! flex items-center justify-center p-0! peer border-none bg-transparent!"
            onClick={() => handleDeleteProduct(id)}
          >
            <MdDeleteForever className="sm:text-3xl text-xl" />
          </Button>
          <Tooltip className="-right-5 -top-6 z-50">
            {DELETE} {PRODUCT}
          </Tooltip>
        </>
      )}

      <div className="w-full h-full">
        <img
          className="h-30 w-30 object-fill md:h-70 md:w-100 sm:h-50 sm:w-80 lg:w-100 lg:h-100"
          alt={name}
          src={url}
        />
      </div>
      <div className="flex flex-col justify-center items-start mt-2 gap-1 uppercase">
        <p>{name}</p>
        <p>{price} EUR</p>
      </div>
    </div>
  );
};

export { ProductCard };
