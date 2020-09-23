import { useContext, useEffect, useState } from 'react';
import { I18nContext } from 'next-i18next';

export function useI18n() {
  const { i18n } = useContext(I18nContext)
  const [lang, setLang] = useState(i18n.language || i18n.language);

  useEffect(() => {
    setLang(i18n.language);
  }, [i18n.language])

  const changeLanguage = async lang => {
    await i18n.changeLanguage(lang);
  }

  const isCurrent = (language) => {
    return language === lang;
  }

  return {
    lang,
    isCurrent,
    changeLanguage
  }
}