import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./app/Layout/Header";
import { Store } from "./redux/Store";
import { Provider } from "react-redux";
import Counter from "./app/components/Counter";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={Store}>
      <Header />
      <Counter />
    </Provider>
  </React.StrictMode>
);
