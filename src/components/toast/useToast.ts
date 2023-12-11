import { useState } from 'react';

export type ToastActionType = 'success' | 'error' | 'info' | 'loading';

export type ToastPosition =
  | 'top-left'
  | 'top-center'
  | 'top-right'
  | 'bottom-left'
  | 'bottom-center'
  | 'bottom-right'

export type ToastAreaPosition = (index:number) => {
  top?: number | string;
  bottom?: number | string;
  left?: number | string;
  right?: number | string;
  transform?: string;
  transition: string;
}

export type AddToastType = { 
    message: string, 
    type?: ToastActionType,
    position?: ToastPosition,
    duration?: number
  }
export interface Itoast {
  id: string;
  type: ToastActionType;
  toastPosition: ToastAreaPosition;
  factor: number;
  message: string;
  duration: number;
}

const toastAreaPosition = {
    'top-left': (index : number) => ({
        top: 60 * index,
        left: 0,
        transition: "top 230ms cubic-bezier(0.21, 1.02, 0.73, 1) 0s",
    }),
    'top-center': (index : number) => ({
        top: 60 * index,
        left: '50%',
        transform: 'translate(-50%, 0)',
        transition: "top 230ms cubic-bezier(0.21, 1.02, 0.73, 1) 0s",
    }),
    'top-right': (index : number) => ({
        top: 60 * index,
        right : 0,
        transition: "top 230ms cubic-bezier(0.21, 1.02, 0.73, 1) 0s",
    }),
    'bottom-left': (index : number) => ({
        bottom: 60 * index,
        left : 0,
        transition: "bottom 230ms cubic-bezier(0.21, 1.02, 0.73, 1) 0s",
    }),
    'bottom-center': (index : number) => ({
        bottom: 60 * index,
        left: '50%',
        transform: 'translate(-50%, 0)',
        transition: "bottom 230ms cubic-bezier(0.21, 1.02, 0.73, 1) 0s",
    }),
    'bottom-right': (index : number) => ({
        bottom: 60 * index,
        right : 0,
        transition: "bottom 230ms cubic-bezier(0.21, 1.02, 0.73, 1) 0s",
    }) 
}

const useToast = () => {
  const [toasts, setToasts] = useState<Itoast[]>([]);

  const addToast = ({message, type= 'info',position= 'top-right', duration=3000}: AddToastType) => {
    const id = Math.random().toString(36).substr(2, 9);
    const toastPosition =  toastAreaPosition[position];
    const factor = position.split('-')[0] === 'top' ? 1 : -1;

    setToasts([{ id, type, toastPosition, factor, message, duration}, ...toasts]);
  };

  const removeToast = (id: string) => {
    setToasts(prev => prev.filter(toast => toast.id !== id));
  };


  return { toasts, addToast, removeToast };
};

export default useToast;