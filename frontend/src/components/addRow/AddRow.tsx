import { v4 as uuidv4 } from "uuid";
import { ADD, ROW } from "../../constants";
import { useProductsStore } from "../../store/productsStore";

const AddRow = () => {
  const { setRows, rows } = useProductsStore();
  return (
    <div
      className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10 cursor-pointer hover:text-zara-100 text-zara-200"
      role="button"
      onClick={() => setRows([...rows, { id: uuidv4(), products: [] }])}
    >
      <div className="text-center">
        <p>{`+ ${ADD} ${ROW}`}</p>
      </div>
    </div>
  );
};

export { AddRow };
