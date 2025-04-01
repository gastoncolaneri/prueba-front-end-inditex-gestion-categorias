import { useProductsStore } from "../../store/productsStore";
import { ModalProps } from "../../types/modalTypes";
import { THE_ROW, THE_PRODUCT, ROW, PRODUCT } from "../../constants/modalConstants";

const DeleteModal = ({ type }: ModalProps) => {
  const { setIsDeleteModalOpen, setIsDeleteProductModalOpen } =
    useProductsStore();
  return (
    <div className="fixed inset-0 flex items-center justify-center backdrop-blur-sm z-40">
      <form className="fixed z-50 bg-white justify-center items-center border-2 border-gray-200 flex-col p-10">
        <div className="space-y-5">
          <div className="border-b border-gray-900/10">
            <h2 className="text-base/7 font-semibold text-gray-900">
              Eliminar {type === "delete-row" ? ROW : PRODUCT}
            </h2>
          </div>

          <div className="col-span-full">
            <div className="mt-2 flex justify-center">
              <div className="text-center">
                <p className="text-xs/5 text-gray-600">
                  ¿Estás seguro de querer eliminar{" "}
                  {type === "delete-row" ? THE_ROW : THE_PRODUCT}?
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 flex items-center justify-end gap-x-6">
          <button
            type="button"
            className="text-sm/6 font-semibold text-gray-900 hover:text-zara-100"
            onClick={() =>
              type === "delete-row"
                ? setIsDeleteModalOpen(false)
                : setIsDeleteProductModalOpen(false)
            }
          >
            Cancelar
          </button>
          <button
            type="submit"
            className="rounded-md bg-zara-100 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-zara-200"
          >
            Eliminar {type === "delete-row" ? ROW : PRODUCT}
          </button>
        </div>
      </form>
    </div>
  );
};

export { DeleteModal };
