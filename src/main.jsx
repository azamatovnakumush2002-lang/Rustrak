import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { LanguageProvider } from "./context/languageContext.jsx";
import "./index.css";
import App from "./App.jsx";
// import { CartProvider } from "./context/cartContext";
import { StrictMode } from "react";
import { CartProvider } from "./context/cardContext.jsx";
createRoot(document.getElementById("root")).render(
    <StrictMode>
        <LanguageProvider>
            <CartProvider>
                <BrowserRouter>
                    <App />
                </BrowserRouter>
            </CartProvider>
        </LanguageProvider>
    </StrictMode>,
);
