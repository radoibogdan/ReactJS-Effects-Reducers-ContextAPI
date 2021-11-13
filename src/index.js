import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import App from "./App";
import { AuthContextProvider } from "./store/auth-context";

ReactDOM.render(
  // Context - make variables and functions related to auth available everywhere in the app
  <AuthContextProvider>
    <App />
  </AuthContextProvider>,
  document.getElementById("root")
);
