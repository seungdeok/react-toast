import { TOAST_TYPE } from "./atoms";
import ToastContainer from "./ToastContainer";

const ToastA = () => {
  return (
    <ToastContainer toastType={TOAST_TYPE.toastA}>
      <div className="Toast">Toast A</div>
    </ToastContainer>
  );
};

export default ToastA;