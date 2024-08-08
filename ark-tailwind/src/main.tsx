import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import { LocaleProvider } from "@ark-ui/react";

import App from "./App.tsx";
import "./index.css";

const isRtl = localStorage.getItem("dir") !== "ltr";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter forceRefresh={true}>
      <LocaleProvider locale={isRtl ? "ar-AE" : "en-US"}>
        <App />
      </LocaleProvider>
    </BrowserRouter>
  </React.StrictMode>
);
