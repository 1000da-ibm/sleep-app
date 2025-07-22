import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// HTMLElementの存在チェックと型アサーション
const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error("Root element not found");
}

const root = ReactDOM.createRoot(rootElement as HTMLElement);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
