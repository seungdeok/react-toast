import "./App.css";
import ToastContainer from "./components/toast/ToastContainer";
import useToast3 from "./components/toast/useToast";

function App() {
  // sample3
  const { toasts, addToast, removeToast } = useToast3();
  
  return (
    <div className="App">
      <div>
        <button onClick={() => addToast("Toast!!!")}>Show Toast</button>
        <ToastContainer toasts = {toasts} removeToast = {removeToast}/>
      </div>
    </div>
  );
}

export default App;
