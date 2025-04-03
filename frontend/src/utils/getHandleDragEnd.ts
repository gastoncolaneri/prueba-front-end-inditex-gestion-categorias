import { arrayMove } from "@dnd-kit/sortable";
import { DragEndEvent } from "@dnd-kit/core";
import { Row } from "../types";

interface HandleDragEndProps {
  event: DragEndEvent;
  rows: Row[];
  setRows: (rows: Row[]) => void;
}

const handleDragEnd = ({ event, rows, setRows }: HandleDragEndProps) => {
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
    if (targetRow.products.length > 2 && sourceRow.id !== targetRow.id) return;

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

export { handleDragEnd };
