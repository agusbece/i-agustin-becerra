import {NextPage} from 'next';
import Head from 'next/head';
import {useRouter} from 'next/router';
import {memo, PropsWithChildren} from 'react';

import {HomepageMeta} from '../../data/dataDef';

const SITE_URL = 'https://agustin-becerra.vercel.app';

const Page: NextPage<PropsWithChildren<HomepageMeta>> = memo(({children, title, description}) => {
  const {asPath: pathname, locale} = useRouter();
  const webThumbnailImage = `${SITE_URL}/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fprofilepic.7d8610ec.jpg&w=1080&q=75`;

  const localePath = locale && locale !== 'en' ? `/${locale}` : '';
  const canonicalUrl = `${SITE_URL}${localePath}${pathname}`;

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta content={description} name="description" />

        {/* Canonical */}
        <link href={canonicalUrl} key="canonical" rel="canonical" />

        {/* hreflang alternates for SEO */}
        <link href={`${SITE_URL}${pathname}`} hrefLang="en" key="hreflang-en" rel="alternate" />
        <link href={`${SITE_URL}/es${pathname}`} hrefLang="es" key="hreflang-es" rel="alternate" />
        <link href={`${SITE_URL}${pathname}`} hrefLang="x-default" key="hreflang-default" rel="alternate" />

        <link href="/favicon.ico" rel="icon" sizes="any" />
        <link href="/apple-touch-icon.png" rel="apple-touch-icon" />
        <link href="/site.webmanifest" rel="manifest" />

        {/* Open Graph : https://ogp.me/ */}
        <meta content={title} property="og:title" />
        <meta content={description} property="og:description" />
        <meta content={webThumbnailImage} property="og:image" />
        <meta content={canonicalUrl} property="og:url" />
        <meta content={locale || 'en'} property="og:locale" />

        {/* Twitter: https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/markup */}
        <meta content={title} name="twitter:title" />
        <meta content={description} name="twitter:description" />
      </Head>
      {children}
    </>
  );
});

Page.displayName = 'Page';
export default Page;
