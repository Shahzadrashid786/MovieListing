import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import store from "./store/index.ts";
import "./index.css";
import App from "./App.tsx";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store} children={undefined}>
      <App />
    </Provider>
  </React.StrictMode>
);
