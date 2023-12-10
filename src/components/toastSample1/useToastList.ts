import { useCallback } from "react";
import { useRecoilState } from "recoil";
import { ToastList, ToastType } from "./atoms";

const useToastList = () => {
  const [toastList, setToastList] = useRecoilState<ToastType[]>(ToastList);

  const show = useCallback(
    (toastType: ToastType) => {
      setToastList((prev) => prev.concat(toastType));
    },
    [setToastList]
  );

  const close = useCallback(
    (toastType: ToastType) => {
      setToastList((prev) => prev.filter((t) => t !== toastType));
    },
    [setToastList]
  );

  const closeAll = () => {
    setToastList([]);
  };

  return {
    toastList,
    show,
    close,
    closeAll,
  };
};

export default useToastList;