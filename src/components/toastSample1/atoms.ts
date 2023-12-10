import { atom } from "recoil";

export const TOAST_TYPE = {
    toastA: "toastA",
    toastB: "toastB",
    toastC: "toastC",
  } as const;
  
  export type ToastType = keyof typeof TOAST_TYPE;
  
  export const ToastList = atom<ToastType[]>({
    key: "ToastList",
    default: [],
  });