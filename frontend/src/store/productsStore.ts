import { create } from "zustand";
import {
  ProductsStore,
  GetProduct,
  ToastState,
  DeleteModalState,
  Row,
  AddProductModalState,
} from "../types";

const useProductsStore = create<ProductsStore>((set) => ({
  isEditModeEnabled: false,
  setIsEditModeEnabled: (isEditModeEnabled: boolean) =>
    set({ isEditModeEnabled }),
  products: [],
  setProducts: (products: GetProduct[]) => set({ products }),
  addProductModalState: null,
  setAddProductModalState: (addProductModalState: AddProductModalState) =>
    set({ addProductModalState }),
  deleteModalState: null,
  setDeleteModalState: (deleteModalState: DeleteModalState) =>
    set({ deleteModalState }),
  isDeleteProductModalOpen: false,
  setIsDeleteProductModalOpen: (isOpen: boolean) =>
    set({ isDeleteProductModalOpen: isOpen }),
  toastState: null,
  setToastState: ({ isToastDisplayed, type, title, message }: ToastState) =>
    set({ toastState: { isToastDisplayed, type, title, message } }),
  isLoading: false,
  setIsLoading: (isLoading: boolean) => set({ isLoading }),
  rows: [],
  setRows: (rows: Row[]) => set({ rows }),
}));

export { useProductsStore };
