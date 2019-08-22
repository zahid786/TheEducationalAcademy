import React from "react";
import "./App.css";
import Routers from './component/Routes'
import store from "../src/component/Redux/Store";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <Provider store={store}>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnVisibilityChange
        draggable
        pauseOnHover
      />
      <Routers />
    </Provider>
  );
}

export default App;
