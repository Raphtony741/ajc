import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend'; 

const resources = {
  en: {
    translation: require('./locales/en/translation.json')
  },
  fr: {
    translation: require('./locales/fr/translation.json')
  }
};

i18n
  .use(Backend)
  .use(initReactI18next)
  .init({
    resources,
    lng: 'fr',  // Default language
    fallbackLng: 'fr',  // In case the language is not available
    interpolation: {
      escapeValue: false, // React already does escaping
    },
  });

export default i18n;