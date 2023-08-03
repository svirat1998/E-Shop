import App from "./App";
import {Provider} from "react-redux";
import store from "./store";
import ReactDOM from "react-dom/client";
import React from "react";


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App/>
    </Provider>
  </React.StrictMode>
)