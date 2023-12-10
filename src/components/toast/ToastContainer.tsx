import { Itoast } from './useToast';
import Toast from './Toast';
import { useEffect, useRef } from 'react';

type ToastContainerType = {
  toasts: Itoast[];
  removeToast: (id: string) => void;
}

const ToastContainer = ({toasts, removeToast} : ToastContainerType) => {
  console.log(toasts);
  const toastRefs = useRef<HTMLDivElement[]>([]);

  // useEffect(() => {
  //   let yOffset = 0;
  //   // toastRefs.current?.style({})
  // }, [toasts]);

  return (
    <div className="toast-container">
      {toasts.map((toast, index) => (
        <Toast
          // ref={el => {
          //   if (!toastRefs.current[index]) {
          //     toastRefs.current[index] = React.createRef();
          //   }
          //   if (el) {
          //     toastRefs.current[index].current = el;
          //   }
          // }}
          key={toast.id}
          toast={toast}
          removeToast={removeToast}
        />
      ))}
    </div>
  );
};

export default ToastContainer;
