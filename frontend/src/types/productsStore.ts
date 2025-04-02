import { GetProduct } from "./apiTypes";
import { ToastType } from "./toastTypes";
import { DeleteModalState } from "./modalTypes";

interface ProductsStore {
  products: GetProduct[];
  setProducts: (products: GetProduct[]) => void;
  isAddProductModalOpen: boolean;
  setIsAddProductModalOpen: (isOpen: boolean) => void;
  deleteModalState: DeleteModalState | null;
  setDeleteModalState: (deleteModalState: DeleteModalState) => void;
  isDeleteProductModalOpen: boolean;
  setIsDeleteProductModalOpen: (isOpen: boolean) => void;
  toastState: {
    isToastDisplayed: boolean;
    type: ToastType;
    title: string;
    message: string;
  } | null;
  setToastState: (toastState: {
    isToastDisplayed: boolean;
    type: ToastType;
    title: string;
    message: string;
  }) => void;
  isLoading: boolean;
  setIsLoading: (isLoading: boolean) => void;
  rows: string[];
  setRows: (rows: string[]) => void;
}

export type { ProductsStore };
