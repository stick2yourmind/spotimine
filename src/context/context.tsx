import { languageContextInitialValue } from "@/config/initialValues";
import { createContext, useState, ReactNode, useContext } from "react";
import { ContextProps, Language, LanguageContextType } from "./context.types";

export const LanguageContext = createContext<LanguageContextType>(languageContextInitialValue);

export const LanguageProvider = ({ children }: ContextProps) => {
  const [language, setLanguage] = useState<Language>(Language.SPANISH);

  const setEnglish = () => {
    setLanguage(Language.ENGLISH);
  };

  const setSpanish = () => {
    setLanguage(Language.SPANISH);
  };

  const value = {
    language,
    setEnglish,
    setSpanish,
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  )
}