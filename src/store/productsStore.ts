import { create } from "zustand";
import { ProductsStore } from "../types/productsStore";

const useProductsStore = create<ProductsStore>((set) => ({
  isAddProductModalOpen: false,
  setIsAddProductModalOpen: (isOpen: boolean) =>
    set({ isAddProductModalOpen: isOpen }),
  isDeleteModalOpen: false,
  setIsDeleteModalOpen: (isOpen: boolean) => set({ isDeleteModalOpen: isOpen }),
  isDeleteProductModalOpen: false,
  setIsDeleteProductModalOpen: (isOpen: boolean) =>
    set({ isDeleteProductModalOpen: isOpen }),
}));

export { useProductsStore };
