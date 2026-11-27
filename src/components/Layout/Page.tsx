import {NextPage} from 'next';
import Head from 'next/head';
import {useRouter} from 'next/router';
import {memo, PropsWithChildren} from 'react';

import {HomepageMeta} from '../../data/dataDef';

const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? 'https://agustin-becerra.com').replace(/\/$/, '');

const SAME_AS = [
  'https://www.linkedin.com/in/agustin-becerra-gonzalez/',
  'https://github.com/agusbece',
];

const localizedPath = (locale: string | undefined, asPath: string): string => {
  const raw = asPath.split('#')[0].split('?')[0];
  const normalized = raw === '/' ? '' : raw.replace(/\/$/, '');
  const prefix = locale && locale !== 'en' ? `/${locale}` : '';
  return `${prefix}${normalized}` || '/';
};

const absolutize = (path: string): string => `${SITE_URL}${path === '/' ? '/' : path}`;

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Person',
      name: 'Agustín Becerra',
      url: SITE_URL,
      jobTitle: 'Full Stack Software Engineer',
      address: {
        '@type': 'PostalAddress',
        addressCountry: 'UY',
        addressLocality: 'Uruguay',
      },
      sameAs: SAME_AS,
    },
    {
      '@type': 'WebSite',
      name: 'Agustín Becerra',
      url: SITE_URL,
    },
  ],
};

const Page: NextPage<PropsWithChildren<HomepageMeta>> = memo(({children, title, description}) => {
  const {asPath, locale} = useRouter();
  const ogImage = `${SITE_URL}/og-image.jpg`;
  const canonicalUrl = absolutize(localizedPath(locale, asPath));
  const englishUrl = absolutize(localizedPath('en', asPath));
  const spanishUrl = absolutize(localizedPath('es', asPath));

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta content={description} name="description" />

        {/* Canonical */}
        <link href={canonicalUrl} key="canonical" rel="canonical" />

        {/* hreflang alternates for SEO */}
        <link href={englishUrl} hrefLang="en" key="hreflang-en" rel="alternate" />
        <link href={spanishUrl} hrefLang="es" key="hreflang-es" rel="alternate" />
        <link href={englishUrl} hrefLang="x-default" key="hreflang-default" rel="alternate" />

        <link href="/favicon.ico" rel="icon" sizes="any" />
        <link href="/apple-touch-icon.png" rel="apple-touch-icon" />
        <link href="/site.webmanifest" rel="manifest" />

        {/* Open Graph : https://ogp.me/ */}
        <meta content="website" property="og:type" />
        <meta content={title} property="og:title" />
        <meta content={description} property="og:description" />
        <meta content={ogImage} property="og:image" />
        <meta content="1200" property="og:image:width" />
        <meta content="630" property="og:image:height" />
        <meta content="image/jpeg" property="og:image:type" />
        <meta content="Agustín Becerra, Full Stack Software Engineer" property="og:image:alt" />
        <meta content={canonicalUrl} property="og:url" />
        <meta content={locale || 'en'} property="og:locale" />

        {/* Twitter: https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/markup */}
        <meta content="summary_large_image" name="twitter:card" />
        <meta content={title} name="twitter:title" />
        <meta content={description} name="twitter:description" />
        <meta content={ogImage} name="twitter:image" />

        <script
          dangerouslySetInnerHTML={{__html: JSON.stringify(jsonLd)}}
          key="jsonld"
          type="application/ld+json"
        />
      </Head>
      {children}
    </>
  );
});

Page.displayName = 'Page';
export default Page;
