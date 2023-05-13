import { LanguageContext } from "@/context/context";
import { useContext } from "react";

export const useLanguage = () => {
  return useContext(LanguageContext);
}