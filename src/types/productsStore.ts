interface ProductsStore {
  isAddProductModalOpen: boolean;
  setIsAddProductModalOpen: (isOpen: boolean) => void;
  isDeleteModalOpen: boolean;
  setIsDeleteModalOpen: (isOpen: boolean) => void;
  isDeleteProductModalOpen: boolean;
  setIsDeleteProductModalOpen: (isOpen: boolean) => void;
}

export type { ProductsStore };
