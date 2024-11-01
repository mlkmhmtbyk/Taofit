import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { NotificationsProvider } from "@toolpad/core/useNotifications";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <NotificationsProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </NotificationsProvider>
  </StrictMode>
);
