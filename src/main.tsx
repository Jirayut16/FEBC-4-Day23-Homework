import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import Wrapped from "./pages/Wrapped";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Wrapped></Wrapped>
  </StrictMode>
);
