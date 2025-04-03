import { GetProduct } from "./apiTypes";
import { ToastType } from "./toastTypes";
import { AddProductModalState, DeleteModalState } from "./modalTypes";
import { Row } from "./rowTypes";

interface ProductsStore {
  isEditModeEnabled: boolean;
  setIsEditModeEnabled: (isEditModeEnabled: boolean) => void;
  products: GetProduct[];
  setProducts: (products: GetProduct[]) => void;
  addProductModalState: AddProductModalState | null;
  setAddProductModalState: (addProductModalState: AddProductModalState) => void;
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
  rows: Row[];
  setRows: (rows: Row[]) => void;
}

export type { ProductsStore };
