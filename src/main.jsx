import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./css/index.css";
// import First from './First.jsx'
// import Navbar from './components/Navbar.jsx'
import Yellow from "./components/Yellow.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Yellow />
  </StrictMode>
);
