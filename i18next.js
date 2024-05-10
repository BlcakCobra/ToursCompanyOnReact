import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector  from "i18next-browser-languagedetector";
import translationAM  from "./src/locales/am/translation.json"
import translationEN from "./src/locales/en/translation.json"
import translationRU from "./src/locales/ru/translation.json"

const resources = {
    en: {
        translation: translationEN
    },
    am: {
        translation: translationAM
    },
    ru: {
        translation: translationRU
    },
}

i18n.use(LanguageDetector).use(initReactI18next).init({
    fallbackLng: "en",
    resources,
    detection: {
        caches: ['cookie']
    }
})

export default i18n