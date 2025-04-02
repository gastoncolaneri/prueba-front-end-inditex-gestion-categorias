import { create } from "zustand";
import { ProductsStore } from "../types/productsStore";
import { GetProduct } from "../types/apiTypes";
import { ToastState } from "../types/toastTypes";
import { DeleteModalState } from "../types/modalTypes";

const useProductsStore = create<ProductsStore>((set) => ({
  products: [],
  setProducts: (products: GetProduct[]) => set({ products }),
  isAddProductModalOpen: false,
  setIsAddProductModalOpen: (isOpen: boolean) =>
    set({ isAddProductModalOpen: isOpen }),
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
  setRows: (rows: string[]) => set({ rows }),
}));

export { useProductsStore };
