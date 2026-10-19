import {useRouter} from 'next/router';
import {useMemo} from 'react';

import {getLocaleData} from '../data/data';
import {Translations, translations} from '../data/translations';

export function useLocale(): string {
  const {locale = 'en'} = useRouter();
  return locale;
}

export function useTranslations(): Translations {
  const locale = useLocale();
  return useMemo(() => translations[locale as keyof typeof translations] ?? translations.en, [locale]);
}

export function useLocaleData() {
  const locale = useLocale();
  return useMemo(() => getLocaleData(locale), [locale]);
}
