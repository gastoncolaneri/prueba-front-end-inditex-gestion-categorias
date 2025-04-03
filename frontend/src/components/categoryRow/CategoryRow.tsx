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
import {
  DELETE,
  ROW,
  PRODUCT,
  ADD,
  NOT_ADD_PRODUCT_ALLOWED,
  CENTER_ALIGN,
  END_ALIGN,
  START_ALIGN,
  LEFT,
  CENTER,
  RIGHT,
  ALIGN,
} from "../../constants";
import { useProductsStore } from "../../store/productsStore";
import { CategoryRowProps } from "../../types";

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
  const [alignItems, setAlignItems] = useState<string>(CENTER_ALIGN);
  const [alignText, setAlignText] = useState<string>(CENTER);

  const style = {
    transform: CSS.Transform.toString(transform),
    transition: transition,
    opacity: isDragging ? 0.8 : 1,
    scale: isDragging ? 1.03 : 1,
    boxShadow: isDragging ? "0px 10px 20px rgba(0, 0, 0, 0.2)" : "none",
    zIndex: isDragging ? 500 : "auto",
  };

  const getIsAddProductButtonDisabled = () => {
    return products.length >= 3;
  };

  const getAddProductButtonTooltipText = () => {
    return getIsAddProductButtonDisabled()
      ? NOT_ADD_PRODUCT_ALLOWED
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
                  setAlignItems(START_ALIGN);
                  setAlignText(LEFT);
                }}
              >
                <MdFormatAlignLeft size={20} />
              </AlignButton>
              <AlignButton
                tooltipText={`${ALIGN} ${CENTER}`}
                onClick={() => {
                  setAlignItems(CENTER_ALIGN);
                  setAlignText(CENTER);
                }}
              >
                <MdFormatAlignCenter size={20} />
              </AlignButton>
              <AlignButton
                tooltipText={`${ALIGN} ${RIGHT}`}
                onClick={() => {
                  setAlignItems(END_ALIGN);
                  setAlignText(RIGHT);
                }}
              >
                <MdFormatAlignRight size={20} />
              </AlignButton>
            </div>
          </div>
          <Button
            variant="secondary"
            className="absolute -right-3 -top-3 md:-right-4 md:-top-4 flex items-center justify-center p-0! peer border-none rounded-full!"
            onClick={() =>
              setDeleteModalState({
                type: "delete-row",
                id,
                isOpen: true,
              })
            }
          >
            <MdOutlineClose className="md:text-3xl text-xl" />
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
