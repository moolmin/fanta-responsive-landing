import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { translationKr } from "./translation/kr";
import { translationEn } from "./translation/en";


i18n
  .use(initReactI18next) 
  .init({
    resources: {
      kr: { translation: translationKr },
      en: { translation: translationEn },
    },
    lng: "kr", 
    fallbackLng: "kr",

    interpolation: {
      escapeValue: false
    }
  });

export default i18n;