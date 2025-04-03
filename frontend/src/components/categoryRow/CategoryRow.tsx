import {
  MdOutlineClose,
  MdFormatAlignLeft,
  MdFormatAlignCenter,
  MdFormatAlignRight,
  MdPostAdd,
} from "react-icons/md";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { useState } from "react";

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
  const { setAddProductModalState, setDeleteModalState, isEditModeEnabled } =
    useProductsStore();
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id, data: { type: "row" }, disabled: !isEditModeEnabled });
  const style = {
    transform: CSS.Transform.toString(transform),
    transition: transition,
    opacity: isDragging ? 0.8 : 1,
    scale: isDragging ? 1.03 : 1,
    boxShadow: isDragging ? "0px 10px 20px rgba(0, 0, 0, 0.2)" : "none",
    zIndex: isDragging ? 500 : "auto",
  };
  const [alignItems, setAlignItems] = useState<string>("center");
  const [alignText, setAlignText] = useState<string>("Centro");

  const getIsAddProductButtonDisabled = () => {
    return products.length >= 3;
  };

  const getAddProductButtonTooltipText = () => {
    return getIsAddProductButtonDisabled()
      ? "No se puede agregar más productos"
      : `${ADD} ${PRODUCT}`;
  };

  return (
    <div
      className={`w-full h-full flex flex-col items-${alignItems} p-7 rounded-md border-2 border-gray-200 mb-10 relative `}
      style={style}
      ref={setNodeRef}
      {...attributes}
      {...listeners}
    >
      {isEditModeEnabled && (
        <>
          <div className="flex flex-row justify-between items-center w-full mb-2">
            <p>
              Alineación: <span className="font-bold">{alignText}</span>
            </p>
            <div className="flex gap-2 self-end flex-row">
              <AlignButton
                tooltipText={`${ALIGN} ${LEFT}`}
                onClick={() => {
                  setAlignItems("start");
                  setAlignText("Izquierda");
                }}
              >
                <MdFormatAlignLeft size={20} />
              </AlignButton>
              <AlignButton
                tooltipText={`${ALIGN} ${CENTER}`}
                onClick={() => {
                  setAlignItems("center");
                  setAlignText("Centro");
                }}
              >
                <MdFormatAlignCenter size={20} />
              </AlignButton>
              <AlignButton
                tooltipText={`${ALIGN} ${RIGHT}`}
                onClick={() => {
                  setAlignItems("end");
                  setAlignText("Derecha");
                }}
              >
                <MdFormatAlignRight size={20} />
              </AlignButton>
            </div>
          </div>
          <Button
            variant="secondary"
            size="small"
            className="absolute -right-4 -top-4 flex items-center justify-center p-0! peer border-none rounded-full!"
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
        </>
      )}
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
      {isEditModeEnabled && (
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
          <Tooltip
            className={`${
              getIsAddProductButtonDisabled() ? "-right-25" : "-right-10"
            } -top-8`}
          >
            {getAddProductButtonTooltipText()}
          </Tooltip>
        </div>
      )}
    </div>
  );
};

export { CategoryRow };
