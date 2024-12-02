import React, { createContext, ReactNode, useContext, useState } from 'react';
import { getLocales } from 'expo-localization';
import { I18n } from 'i18n-js';

import { TRANSLATIONS } from '@/shared/definitions/sentences/translations';
import { DEFAULT_LANG } from '@/shared/definitions/utils/contants';

const i18n = new I18n(TRANSLATIONS);

const I18nContext = createContext({
  i18n,
  setLocale: (locale: string) => {},
});

export const I18nProvider = ({ children }: {children: ReactNode}) => {
  const [locale, setLocale] = useState(getLocales()[0].languageCode ?? DEFAULT_LANG);

  const changeLocale = (newLocale: string) => {
    i18n.locale = newLocale;
    setLocale(newLocale);
  };

  i18n.locale = locale;
  // i18n.locale = 'ja';

  return (
    <I18nContext.Provider value={{ i18n, setLocale: changeLocale }}>
      {children}
    </I18nContext.Provider>
  );
};

export const useI18n = () => useContext(I18nContext);