import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { LanguageProvider } from "./context/languageContext.jsx";
import "./index.css";
import App from "./App.jsx";
import { StrictMode } from "react";
import { CartProvider } from "./context/cardContext.jsx";
import { LikeProvider } from "./context/likeContext.jsx";
createRoot(document.getElementById("root")).render(
    <StrictMode>
        <LanguageProvider>
            <CartProvider>
                <LikeProvider>
                    <BrowserRouter>
                        <App />
                    </BrowserRouter>
                </LikeProvider>
            </CartProvider>
        </LanguageProvider>
    </StrictMode>,
);
