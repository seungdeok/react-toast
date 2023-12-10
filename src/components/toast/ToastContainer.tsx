import { Itoast } from "./useToast";
import Toast from "./Toast";

type ToastContainerType = {
  toasts: Itoast[];
  removeToast: (id: string) => void;
};

const ToastContainer = ({ toasts, removeToast }: ToastContainerType) => {
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
            toast={toast}
            removeToast={removeToast}
          />
        </div>
      ))}
    </div>
  );
};

export default ToastContainer;
