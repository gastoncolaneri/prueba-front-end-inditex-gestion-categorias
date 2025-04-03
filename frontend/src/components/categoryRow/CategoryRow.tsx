import {
  MdOutlineClose,
  MdFormatAlignLeft,
  MdFormatAlignCenter,
  MdFormatAlignRight,
  MdPostAdd,
} from "react-icons/md";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

import { ProductCard } from "../productCard";
import { AlignButton, Button } from "../button";
import { Tooltip } from "../tooltip";
import { useProductsStore } from "../../store/productsStore";
import { DELETE, ROW, PRODUCT, ADD } from "../../constants/modalConstants";
import { LEFT, CENTER, RIGHT, ALIGN } from "../../constants/buttonConstants";
import { GetProduct } from "../../types/apiTypes";

interface CategoryRowProps {
  id: string;
  products: GetProduct[];
}

const CategoryRow = ({ id, products }: CategoryRowProps) => {
  const { setAddProductModalState, setDeleteModalState } = useProductsStore();

  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  const getIsAddProductButtonDisabled = () => {
    const productsQuantityByRow = products.filter(
      (product) => product.row_id === id
    );

    if (productsQuantityByRow.length < 3) {
      return false;
    }

    return true;
  };

  return (
    <div
      className="w-full h-full flex flex-col items-center p-7 rounded-md border-2 border-gray-200 mb-10 relative"
      style={style}
      ref={setNodeRef}
      {...attributes}
      {...listeners}
    >
      <div className="flex gap-2 self-end flex-row">
        <AlignButton tooltipText={`${ALIGN} ${LEFT}`}>
          <MdFormatAlignLeft size={20} />
        </AlignButton>
        <AlignButton tooltipText={`${ALIGN} ${CENTER}`}>
          <MdFormatAlignCenter size={20} />
        </AlignButton>
        <AlignButton tooltipText={`${ALIGN} ${RIGHT}`}>
          <MdFormatAlignRight size={20} />
        </AlignButton>
      </div>
      <Button
        variant="secondary"
        size="small"
        className="absolute -right-4 -top-4  flex items-center justify-center p-0! peer border-none rounded-full!"
        onClick={() =>
          setDeleteModalState({
            type: "delete-row",
            id,
            isOpen: true,
          })
        }
      >
        <MdOutlineClose size={30} />
      </Button>
      <Tooltip className="-right-10 -top-13">
        {DELETE} {ROW}
      </Tooltip>
      <div className="flex gap-2 mb-5">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            name={product.product_name}
            price={product.product_price.toString()}
            url={product.product_image_url}
          />
        ))}
      </div>
      <div className="flex w-full h-full flex-col relative justify-center items-end">
        <Button
          variant="primary"
          size="small"
          className="rounded-full! h-10! w-10! flex items-center justify-center p-0! peer border-none bg-transparent!"
          onClick={() => setAddProductModalState({ isOpen: true, rowId: id })}
          disabled={getIsAddProductButtonDisabled()}
        >
          <MdPostAdd size={40} />
        </Button>
        <Tooltip className="-right-10 -top-7 ">
          {ADD} {PRODUCT}
        </Tooltip>
      </div>
    </div>
  );
};

export { CategoryRow };
