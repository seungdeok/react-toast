import { useState } from 'react';

export type ToastActionType = 'success' | 'error' | 'info';

export interface Itoast {
  id: string;
  type: ToastActionType;
  message: string;
  duration: number;
}

const useToast = () => {
  const [toasts, setToasts] = useState<Itoast[]>([]);

  const addToast = (message: string, type: ToastActionType = 'info', duration = 3000) => {
    const id = Math.random().toString(36).substr(2, 9);
    setToasts([{ id, type, message, duration}, ...toasts]);
  };

  const removeToast = (id: string) => {
    setToasts(prev => prev.filter(toast => toast.id !== id));
  };

  return { toasts, addToast, removeToast };
};

export default useToast;
