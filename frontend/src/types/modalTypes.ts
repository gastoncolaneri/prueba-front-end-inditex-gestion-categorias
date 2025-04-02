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

export type { ModalType, ModalProps, DeleteModalState, DeleteModalProps };
