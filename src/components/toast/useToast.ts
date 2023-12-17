import { useState } from 'react';

export type ToastActionType = 'success' | 'error' | 'info' | 'loading';

export type ToastPosition =
  | 'top-left'
  | 'top-center'
  | 'top-right'
  | 'bottom-left'
  | 'bottom-center'
  | 'bottom-right'

export type ToastStackStylesTypes = (index:number) => {
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
  position: ToastPosition;
  stackStyle: ToastStackStylesTypes;
  factor: number;
  message: string;
  duration: number;
}

const toastStackStyles = {
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
    const stackStyle =  toastStackStyles[position];
    const factor = position.split('-')[0] === 'top' ? 1 : -1;

    setToasts([{ id, type, position, stackStyle, factor, message, duration}, ...toasts]);
  };

  const removeToast = (id: string) => {
    setToasts(prev => prev.filter(toast => toast.id !== id));
  };
   
  /* When Click Another Type of Position Button */
  const changAllToastsPos = (toasts : Itoast[], stackStyle: ToastStackStylesTypes, factor: number) => {
    toasts.map(v => {
        v.stackStyle = stackStyle;
        v.factor = factor;
    })

    return toasts;
  }


  return { toasts, addToast, removeToast };
};

export default useToast;