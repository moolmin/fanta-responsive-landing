import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector"; // 추가
import { translationKr } from "./translation/kr";
import { translationEn } from "./translation/en";

i18n
  .use(LanguageDetector) // LanguageDetector 사용
  .use(initReactI18next) 
  .init({
    resources: {
      kr: { translation: translationKr },
      en: { translation: translationEn },
    },
    fallbackLng: "en", // 설정한 언어가 없을 때 사용할 언어

    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
