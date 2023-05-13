import { ReactNode } from "react"

export type ContextProps = {
  children: ReactNode;
};

export enum Language {
  SPANISH = "SPANISH",
  ENGLISH = "ENGLISH"
}  

export type LanguageContextType = {
  language: Language;
  setEnglish: () => void;
  setSpanish: () => void;
};
