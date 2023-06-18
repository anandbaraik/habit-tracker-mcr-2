import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {BrowserRouter as Router} from "react-router-dom";
import { HabbitProvider } from "./context/HabbitContext";

import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Router>
      <HabbitProvider>
        <App />
      </HabbitProvider>
    </Router>
  </StrictMode>
);
