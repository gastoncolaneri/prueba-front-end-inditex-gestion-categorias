import { useEffect, useState } from "react";
import { DndContext, closestCenter } from "@dnd-kit/core";
import {
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { MdEditNote, MdOutlineSave } from "react-icons/md";

import { getProducts } from "../api";
import { AddRow } from "../components/addRow";
import { CategoryRow } from "../components/categoryRow";
import { Button } from "../components/button";
import { Tooltip } from "../components/tooltip";
import { Spinner } from "../components/spinner";
import { AddProductModal, DeleteModal } from "../components/modals";
import { Zoom } from "../components/zoom";
import { Toast } from "../components/toast";
import { useProductsStore } from "../store/productsStore";
import { GetProduct } from "../types";
import { handleDragEnd } from "../utils/getHandleDragEnd";
import { NO_PRODUCTS_IN_TEMPLATE } from "../constants/modalConstants";

const Home = () => {
  const {
    addProductModalState,
    setProducts,
    toastState,
    rows,
    setRows,
    deleteModalState,
    products,
    isEditModeEnabled,
    setIsEditModeEnabled,
    isLoading,
    setIsLoading,
  } = useProductsStore();

  const [scale, setScale] = useState(1);

  const handleZoomIn = () => {
    setScale((prev) => Math.min(prev + 0.1, 2));
  };

  const handleZoomOut = () => {
    setScale((prev) => Math.max(prev - 0.1, 0.5));
  };

  const handleResetZoom = () => {
    setScale(1);
  };

  useEffect(() => {
    setIsLoading(true);
    const fetchProducts = async () => {
      const products = await getProducts();
      setProducts(products);
      setIsLoading(false);
    };
    void fetchProducts();
  }, [setIsLoading, setProducts, setRows]);

  useEffect(() => {
    if (products.length === 0) {
      setRows([]);
      return;
    }
    const grouped = products.reduce<{ [key: string]: GetProduct[] }>(
      (acc: { [key: string]: GetProduct[] }, product) => {
        const rowId = product.row_id;
        if (!acc[rowId]) {
          acc[rowId] = [];
        }
        acc[rowId].push(product);
        return acc;
      },
      {}
    );

    setRows(
      Object.keys(grouped).map((key) => ({
        id: key,
        products: grouped[key],
      }))
    );
  }, [products, setRows]);

  return (
    <DndContext
      collisionDetection={closestCenter}
      onDragEnd={(event) => {
        void handleDragEnd({ event, rows, setRows });
      }}
    >
      <div className="py-10 flex justify-center flex-col relative">
        {isLoading ? (
          <Spinner />
        ) : (
          <>
            <div
              className={`self-end mb-5 flex flex-row ${
                isEditModeEnabled ? "justify-between" : "justify-end"
              } items-center w-full`}
            >
              {isEditModeEnabled && (
                <Zoom
                  zoomIn={handleZoomIn}
                  zoomOut={handleZoomOut}
                  resetZoom={handleResetZoom}
                />
              )}
              <Button
                onClick={() => setIsEditModeEnabled(!isEditModeEnabled)}
                variant="primary"
                className="peer"
              >
                {isEditModeEnabled ? (
                  <MdOutlineSave size={30} />
                ) : (
                  <MdEditNote size={30} />
                )}
              </Button>
              <Tooltip className="-right-4 -top-0 z-50">
                {isEditModeEnabled ? "Guardar plantilla" : "Editar plantilla"}
              </Tooltip>
            </div>

            {addProductModalState?.isOpen && <AddProductModal />}
            {deleteModalState?.isOpen && (
              <DeleteModal
                type={deleteModalState.type}
                id={deleteModalState.id}
              />
            )}
            {toastState?.isToastDisplayed && (
              <Toast
                type={toastState.type}
                title={toastState.title}
                message={toastState.message}
              />
            )}
            <div
              className="flex w-full flex-col origin-top transition-transform duration-200 ease-in-out scale-100"
              style={{
                transform: `scale(${isEditModeEnabled ? scale : 1})`,
              }}
            >
              <SortableContext
                items={rows}
                strategy={verticalListSortingStrategy}
              >
                {rows?.length === 0 && (
                  <p className="text-zara-100">{NO_PRODUCTS_IN_TEMPLATE}</p>
                )}
                {rows.map((row) => (
                  <CategoryRow
                    id={row.id}
                    key={row.id}
                    products={row.products}
                  />
                ))}
              </SortableContext>
              {isEditModeEnabled && <AddRow />}
            </div>
          </>
        )}
      </div>
    </DndContext>
  );
};

export { Home };
