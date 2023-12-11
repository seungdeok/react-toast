import { Itoast } from "./useToast";
import Toast from "./Toast";

type ToastContainerType = {
  toasts: Itoast[];
  removeToast: (id: string) => void;
};

const ToastContainer = ({ toasts, removeToast }: ToastContainerType) => {
  return (
    <div className="toast-container">
      {toasts.map((toast, index) => {
        const styles = toast.toastPosition;

        return (
          <div
            style={{
              position: "absolute",
              ...styles(index),
            }}
            key={toast.id}
          >
            <Toast
              toast={toast}
              removeToast={removeToast}
            />
          </div>
        )
      })}
    </div>
  );
};

export default ToastContainer;