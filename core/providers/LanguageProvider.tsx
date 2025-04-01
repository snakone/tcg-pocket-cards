import React, { createContext, ReactNode, useContext, useMemo, useState } from 'react';
import { getLocales } from 'expo-localization';
import { I18n } from 'i18n-js';

import { TRANSLATIONS } from '@/shared/definitions/sentences/translations';
import { DEFAULT_LANG } from '@/shared/definitions/utils/constants';

const i18n = new I18n(TRANSLATIONS);

const I18nContext = createContext({
  i18n,
  setLocale: (locale: string) => i18n.locale = locale,
});

export const I18nProvider = ({ children }: {children: ReactNode}) => {
  const [locale, setLocale] = useState(getLocales()[0]?.languageCode ?? DEFAULT_LANG);

  const changeLocale = (newLocale: string) => {
    setLocale(newLocale);
    i18n.locale = newLocale;
    return newLocale;
  };

  const contextValue = useMemo(() => ({
    i18n,
    setLocale: changeLocale,
  }), [locale]); 

  return (
    <I18nContext.Provider value={contextValue}>
      {children}
    </I18nContext.Provider>
  );
};

export const useI18n = () => useContext(I18nContext);