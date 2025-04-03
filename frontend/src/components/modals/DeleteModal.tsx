import { useProductsStore } from "../../store/productsStore";
import { DeleteModalProps } from "../../types/modalTypes";
import {
  THE_ROW,
  THE_PRODUCT,
  ROW,
  PRODUCT,
} from "../../constants/modalConstants";
import { deleteProduct } from "../../api/deleteProduct";
import { getProducts } from "../../api/getProducts";
import { Spinner } from "../spinner/Spinner";
import { ToastProps } from "../../types/toastTypes";

const DeleteModal = ({ type, id }: DeleteModalProps) => {
  const {
    setDeleteModalState,
    setIsDeleteProductModalOpen,
    setProducts,
    setToastState,
    setIsLoading,
    isLoading,
    deleteModalState,
    rows,
    setRows,
  } = useProductsStore();

  const handleModalClose = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setDeleteModalState({
      type,
      id,
      isOpen: false,
    });
  };

  const showToast = ({ type, title, message }: ToastProps) => {
    setToastState({
      isToastDisplayed: true,
      type,
      title,
      message,
    });
    setTimeout(() => {
      setToastState({
        isToastDisplayed: false,
        type,
        title: "",
        message: "",
      });
    }, 3000);
  };

  const handleDelete = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (type === "delete-row") {
      setRows(rows.filter((row) => row.id !== id));
      setDeleteModalState({
        type: "delete-row",
        id,
        isOpen: false,
      });
    } else {
      setIsLoading(true);
      (async () => {
        try {
          if (!deleteModalState?.id) return;
          await deleteProduct(deleteModalState.id as number);
          setIsDeleteProductModalOpen(false);
          const products = await getProducts();
          setProducts(products);
          showToast({
            type: "success",
            title: "Producto eliminado",
            message: "El producto se ha eliminado correctamente",
          });
          setDeleteModalState({
            type: "delete-product",
            id: 0,
            isOpen: false,
          });
        } catch (error: unknown) {
          showToast({
            type: "error",
            title: "Error al eliminar producto",
            message: "El producto no se ha podido eliminar",
          });
          if (error instanceof Error) {
            console.error("Error creating product:", error.message);
          } else {
            console.error("Error creating product:", String(error));
          }
        }
      })()
        .catch((error: unknown) => {
          if (error instanceof Error) {
            console.error("Unhandled promise rejection:", error.message);
          } else {
            console.error("Unhandled promise rejection:", String(error));
          }
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center backdrop-blur-sm z-40">
      {isLoading ? (
        <Spinner />
      ) : (
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
              onClick={handleModalClose}
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="rounded-md bg-zara-100 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-zara-200"
              onClick={handleDelete}
            >
              Eliminar {type === "delete-row" ? ROW : PRODUCT}
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export { DeleteModal };
