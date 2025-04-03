type ModalType = "delete-row" | "delete-product";

interface DeleteModalState {
  type: ModalType;
  id: number | string;
  isOpen: boolean;
}

interface DeleteModalProps {
  type: ModalType;
  id: number | string;
}

interface ModalProps {
  type: ModalType;
}

interface AddProductModalState {
  isOpen: boolean;
  rowId: string;
}

export type {
  ModalType,
  ModalProps,
  DeleteModalState,
  DeleteModalProps,
  AddProductModalState,
};
