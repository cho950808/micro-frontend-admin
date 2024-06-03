import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import router from "./router";
import "./assets/styles/app.css";

export const mountAppHost = () => {
  const id = "app-host";
  const rootContainer =
    document.getElementById(id) ||
    document.body.appendChild(
      Object.assign(document.createElement("div"), { id })
    );
  const root = createRoot(rootContainer);
  
  root.render(
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>
  );
};
