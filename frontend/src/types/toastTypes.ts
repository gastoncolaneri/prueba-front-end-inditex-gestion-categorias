type ToastType = "success" | "error";

interface ToastProps {
  type: ToastType;
  title: string;
  message: string;
}

interface ToastState {
  isToastDisplayed: boolean;
  type: ToastType;
  title: string;
  message: string;
}

export type { ToastType, ToastProps, ToastState };
