import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';
import { defaultSettings } from '../config';
import huLocales from './hu';
import enLocales from './en';

const { language } = defaultSettings;

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      hu: { translations: huLocales },
      en: { translations: enLocales },
    },
    lng: localStorage.getItem('i18nextLng') || language,
    fallbackLng: language,
    debug: false,
    ns: ['translations'],
    defaultNS: 'translations',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
