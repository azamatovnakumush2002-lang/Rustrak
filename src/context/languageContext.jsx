import { createContext, useContext, useState } from "react";

import { uzData } from "../context/uzData";
import { ruData } from "../context/ruData";
import { enData } from "../context/enData";

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState("ru");

    const languages = {
        uz: uzData.allData,
        ru: ruData.allData,
        en: enData.allData,
    };

    const data = languages[language];

    return (
        <LanguageContext.Provider
            value={{
                language,
                setLanguage,
                data,
            }}
        >
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => {
    return useContext(LanguageContext);
};
