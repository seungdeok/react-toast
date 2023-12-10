import { useState } from 'react';

export type ToastActionType = 'success' | 'error' | 'info' | 'loading';
export type ToastPosition =
  | 'top-left'
  | 'top-center'
  | 'top-right'
  | 'bottom-left'
  | 'bottom-center'
  | 'bottom-right';

export interface Itoast {
  id: string;
  type: ToastActionType;
  position: ToastPosition;
  message: string;
  duration: number;
}

const useToast = () => {
  const [toasts, setToasts] = useState<Itoast[]>([]);

  const addToast = (
      message: string, 
      type: ToastActionType = 'info',
      position: ToastPosition = 'top-left',
      duration = 3000) => {
    const id = Math.random().toString(36).substr(2, 9);
    setToasts([{ id, type, position, message, duration}, ...toasts]);
  };

  const removeToast = (id: string) => {
    setToasts(prev => prev.filter(toast => toast.id !== id));
  };



  return { toasts, addToast, removeToast };
};

export default useToast;
