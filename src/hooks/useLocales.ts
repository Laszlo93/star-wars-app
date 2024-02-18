import { useTranslation } from 'react-i18next';
import { defaultSettings } from '../config';
import i18n from '../locales/i18n';
import { Language } from '@/@types/types';

const useLocales = () => {
  const { t: translate } = useTranslation();

  const langStorage = localStorage.getItem('i18nextLng');

  const currentLang =
    Object.values(Language).find((language) => language === langStorage) ||
    defaultSettings.language;

  const handleChangeLanguage = (newlang: string) => {
    i18n.changeLanguage(newlang);
  };

  return {
    onChangeLang: handleChangeLanguage,
    translate: (text: any, options?: any) => translate(text, options) as string,
    currentLang,
  };
};

export default useLocales;
