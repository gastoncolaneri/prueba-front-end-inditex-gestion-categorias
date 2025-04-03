import { useEffect } from "react";
import { DndContext, closestCenter, DragEndEvent } from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { AddRow } from "../components/addRow/AddRow";
import { CategoryRow } from "../components/categoryRow";
import { AddProductModal, DeleteModal } from "../components/modals";
import { Zoom } from "../components/zoom";
import { useProductsStore } from "../store/productsStore";
import { getProducts } from "../api/getProducts";
import { Toast } from "../components/modals/Toast";
import { GetProduct } from "../types/apiTypes";

const Home = () => {
  const {
    addProductModalState,
    setProducts,
    toastState,
    rows,
    setRows,
    deleteModalState,
    products,
  } = useProductsStore();

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
        <Zoom />
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
        <div className="flex w-full flex-col">
          <SortableContext items={rows} strategy={verticalListSortingStrategy}>
            {rows.map((row) => (
              <CategoryRow id={row.id} key={row.id} products={row.products} />
            ))}
          </SortableContext>
        </div>
        <AddRow />
      </div>
    </DndContext>
  );
};

export { Home };
