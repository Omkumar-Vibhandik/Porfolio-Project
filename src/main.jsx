import { StrictMode } from "react";
import { createRoot } from "react-dom/client"; 
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import Stair from "./Components/Comman/Stair.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Stair>
        <App />
      </Stair>
    </BrowserRouter>
  </StrictMode>
);
