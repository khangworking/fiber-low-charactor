import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { AnimationProvider } from "./context/CharacterAnimation.jsx";
import { CharacterCustomizationProvider } from "./context/CharacterCustomization.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CharacterCustomizationProvider>
      <AnimationProvider>
        <App />
      </AnimationProvider>
    </CharacterCustomizationProvider>
  </StrictMode>
);
