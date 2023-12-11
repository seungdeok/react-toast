import "./App.css";
import "./Button.css"
import ToastContainer from "./components/toast/ToastContainer";
import useToast from "./components/toast/useToast";

function App() {
  const { toasts, addToast, removeToast } = useToast();
  
  return (
    <div className="App">
      <div className="toast-example-area">
        <div className="toast-example-type">
          <button className="action-btn" onClick={() => addToast({message:"INFO", type:"info", position:"top-right"})}>INFO</button>
          <button className="action-btn" onClick={() => addToast({message:"ERROR", type:"error", position:"top-right"})}>ERROR</button>
          <button className="action-btn" onClick={() => addToast({message:"SUCCRESS", type:"success", position:"top-right"})}>SUCCESS</button>
        </div>
        <div className="toast-example-position">
          <button className="action-btn" onClick={() => addToast({message:"Top-Right", type:"info", position:"top-right"})}>Top-Right</button>
          <button className="action-btn" onClick={() => addToast({message:"Top-Center", type:"info", position:"top-center"})}>Top-Center</button>
          <button className="action-btn" onClick={() => addToast({message:"Top-Left", type:"info", position:"top-left"})}>Top-Left</button>
          <button className="action-btn" onClick={() => addToast({message:"Bottom-Right", type:"info", position:"bottom-right"})}>Bottom-Right</button>
          <button className="action-btn" onClick={() => addToast({message:"Bottom-Center", type:"info", position:"bottom-center"})}>Bottom-Center</button>
          <button className="action-btn" onClick={() => addToast({message:"Bottom-Left", type:"info", position:"bottom-left"})}>Bottom-Left</button>
        </div>
      </div>
      <ToastContainer toasts = {toasts} removeToast = {removeToast}/>
    </div>
  );
}

export default App;