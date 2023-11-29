import { RouterProvider } from "react-router";
import "./App.css";
import router from "./router";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div>
      <RouterProvider router={router}/>
      <ToastContainer theme="colored"/>
    </div>
  );
}

export default App;
