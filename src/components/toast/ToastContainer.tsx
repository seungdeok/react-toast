import { Itoast } from "./useToast";
import Toast from "./Toast";
import { useEffect, useRef } from "react";

type ToastContainerType = {
  toasts: Itoast[];
  removeToast: (id: string) => void;
};

const ToastContainer = ({ toasts, removeToast }: ToastContainerType) => {
  console.log(toasts);
  const toastRefs = useRef<HTMLDivElement[]>([]);

  // useEffect(() => {
  //   let yOffset = 0;
  //   // toastRefs.current?.style({})
  // }, [toasts]);

  return (
    <div className="toast-container">
      {toasts.map((toast, index) => (
        <div
          style={{
            position: "absolute",
            top: 55 * index,
            transition: "top 230ms cubic-bezier(0.21, 1.02, 0.73, 1) 0s",
          }}
          key={toast.id}
        >
          <Toast
            // ref={el => {
            //   if (!toastRefs.current[index]) {
            //     toastRefs.current[index] = React.createRef();
            //   }
            //   if (el) {
            //     toastRefs.current[index].current = el;
            //   }
            // }}
            toast={toast}
            removeToast={removeToast}
          />
        </div>
      ))}
    </div>
  );
};

export default ToastContainer;
