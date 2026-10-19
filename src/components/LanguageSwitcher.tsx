import Link from 'next/link';
import {useRouter} from 'next/router';
import {FC, memo} from 'react';

const LanguageSwitcher: FC = memo(() => {
  const {locale, asPath} = useRouter();
  const nextLocale = locale === 'en' ? 'es' : 'en';
  const label = locale === 'en' ? '🇪🇸 ES' : '🇺🇸 EN';

  return (
    <Link
      className="rounded-md px-2 py-1 text-sm font-bold text-neutral-100 ring-orange-500 transition-colors duration-300 hover:text-orange-500 focus:outline-none focus-visible:ring-2"
      href={asPath}
      locale={nextLocale}>
      {label}
    </Link>
  );
});

LanguageSwitcher.displayName = 'LanguageSwitcher';
export default LanguageSwitcher;
