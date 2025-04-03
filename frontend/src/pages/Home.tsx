import { useEffect, useState } from "react";
import { DndContext, closestCenter, DragEndEvent } from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { MdEditNote, MdOutlineSave } from "react-icons/md";

import { AddRow } from "../components/addRow/AddRow";
import { CategoryRow } from "../components/categoryRow";
import { AddProductModal, DeleteModal } from "../components/modals";
import { Zoom } from "../components/zoom";
import { useProductsStore } from "../store/productsStore";
import { getProducts } from "../api/getProducts";
import { Toast } from "../components/modals/Toast";
import { GetProduct } from "../types/apiTypes";
import { Button } from "../components/button";
import { Tooltip } from "../components/tooltip";

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
    const fetchProducts = async () => {
      const products = await getProducts();
      setProducts(products);
    };
    void fetchProducts();
  }, [setProducts, setRows]);

  useEffect(() => {
    if (products.length === 0) return;
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

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    if (!over) return;

    const activeId = active.id;
    const overId = over.id;

    if (active.data.current?.type === "row") {
      if (activeId !== overId) {
        const oldIndex = rows.findIndex((row) => row.id === activeId);
        const newIndex = rows.findIndex((row) => row.id === overId);
        const newRows = arrayMove(rows, oldIndex, newIndex);
        setRows(newRows);
      }
    } else if (active.data.current?.type === "product") {
      const sourceRow = rows.find((row) =>
        row.products.some((p) => p.id === activeId)
      );
      const targetRow = rows.find(
        (row) => row.products.some((p) => p.id === overId) || row.id === overId
      );

      if (!sourceRow || !targetRow) return;
      if (targetRow.products.length > 2 && sourceRow.id !== targetRow.id)
        return;

      const oldIndex = sourceRow.products.findIndex((p) => p.id === activeId);
      const newIndex =
        targetRow.products.length === 0
          ? 0
          : targetRow.products.findIndex((p) => p.id === overId);

      const productToMove = sourceRow.products[oldIndex];
      sourceRow.products.splice(oldIndex, 1);
      targetRow.products.splice(newIndex, 0, productToMove);

      setRows([...rows]);
    }
  };

  return (
    <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
      <div className="py-10 flex justify-center flex-col relative">
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
          <DeleteModal type={deleteModalState.type} id={deleteModalState.id} />
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
          <SortableContext items={rows} strategy={verticalListSortingStrategy}>
            {rows.map((row) => (
              <CategoryRow id={row.id} key={row.id} products={row.products} />
            ))}
          </SortableContext>
        </div>
        {isEditModeEnabled && <AddRow />}
      </div>
    </DndContext>
  );
};

export { Home };
