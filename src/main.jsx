import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./main.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import App from "./App.jsx";
import ReactGA from "react-ga4";
import { HelmetProvider } from "react-helmet-async";

ReactGA.initialize("G-DZWX8G2818");

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </StrictMode>,
);
