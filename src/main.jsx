import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import StartProject from "./pages/StartProject";

// 👇 Import the new pages
import WebDev from "./pages/WebDev";
import AppDev from "./pages/AppDev";
import AISolutions from "./pages/AISolutions";

const theme = extendTheme({
  colors: {
    gold: { 500: "#D4AF37" },
    offwhite: { 500: "#FBF9F6" },
    black: { 500: "#000000" }
  },
  fonts: {
    body: "Inter, sans-serif",
    heading: "Inter, sans-serif"
  }
});

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/web-development" element={<WebDev />} />
          <Route path="/app-development" element={<AppDev />} />
          <Route path="/ai-solutions" element={<AISolutions />} />
          <Route path="/start-project" element={<StartProject />} />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  </React.StrictMode>
);
