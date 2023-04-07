import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Test from "./components/test";
import Cars from "./components/cars";
// import Newclass from "./components/newclass";
import Texnikaota from "./components/texnika";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Test /> */}
    {/* <Cars /> */}
    {/* <Newclass /> */}
    {/* <Telephone /> */}
    <Texnikaota />
  </React.StrictMode>
);
