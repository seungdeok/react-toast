import { type } from "os";
import "./App.css";
import ToastContainer from "./components/toast/ToastContainer";
import useToast from "./components/toast/useToast";

function App() {
  const { toasts, addToast, removeToast } = useToast();
  
  return (
    <div className="App">
      <div>
        <button onClick={() => addToast("Toast!!!", "info")}>Show Toast#1</button>
        <button onClick={() => addToast("Toast!!!", "error")}>Show Toast#2</button>
        <button onClick={() => addToast("Toast!!!", "success")}>Show Toast#3</button>
      </div>
      <ToastContainer toasts = {toasts} removeToast = {removeToast}/>
    </div>
  );
}

export default App;
