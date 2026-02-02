import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import StartProject from "./pages/StartProject";

// 👇 Import the new pages
import WebDev from "./pages/WebDev";
import AppDev from "./pages/AppDev";
import AISolutions from "./pages/AISolutions";
import BasicFeatures from "./pages/BasicFeatures";
import ProFeatures from "./pages/ProFeatures";
import EnterpriseFeatures from "./pages/EnterpriseFeatures";
import TermsAndConditions from "./pages/TermsAndConditions";
import PrivacyAndPolicy from "./pages/PrivacyAndPolicy";
import ShopifyDev from "./pages/ShopifyDev";

function ScrollToTop() {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

const theme = extendTheme({
  colors: {
    gold: { 500: "#D4AF37" },
    offwhite: { 500: "#FBF9F6" },
    black: { 500: "#000000" }
  },
  fonts: {
    body: "Poppins, sans-serif",
    heading: "Poppins, sans-serif"
  },
  transitionDuration: {
    fast: "0.15s",
    normal: "0.25s",
    slow: "0.35s",
    slower: "0.5s"
  },
  transitionProperty: {
    common: "background-color, border-color, color, fill, stroke, opacity, box-shadow, transform"
  },
  styles: {
    global: {
      "html, body": {
        scrollBehavior: "smooth"
      },
      "*": {
        WebkitTapHighlightColor: "transparent"
      },
      "button:focus-visible, a:focus-visible, [role='button']:focus-visible": {
        outline: "2px solid",
        outlineColor: "gold.500",
        outlineOffset: "2px"
      }
    }
  }
});

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/web-development" element={<WebDev />} />
          <Route path="/app-development" element={<AppDev />} />
          <Route path="/ai-solutions" element={<AISolutions />} />
          <Route path="/shopify-development" element={<ShopifyDev />} />
          <Route path="/start-project" element={<StartProject />} />
          <Route path="/basic-features" element={<BasicFeatures />} />
          <Route path="/pro-features" element={<ProFeatures />} />
          <Route path="/enterprise-features" element={<EnterpriseFeatures />} />
          <Route path="/terms" element={<TermsAndConditions />} />
          <Route path="/privacy" element={<PrivacyAndPolicy />} />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  </React.StrictMode>
);
