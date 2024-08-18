import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

// React Router

import { BrowserRouter } from "react-router-dom";

// Chakra UI

import { ChakraProvider } from "@chakra-ui/react";
import App from "./App";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ChakraProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ChakraProvider>
  </StrictMode>
);
