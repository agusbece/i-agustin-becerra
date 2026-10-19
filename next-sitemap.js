/* eslint-env node */
module.exports = {
  siteUrl: 'https://agustin-becerra.vercel.app',
  exclude: ['/404*', '/500*'],
  alternateRefs: [
    {href: 'https://agustin-becerra.vercel.app', hreflang: 'en'},
    {href: 'https://agustin-becerra.vercel.app/es', hreflang: 'es'},
  ],
  transform: async (config, path) => {
    return {
      loc: path,
      changefreq: config.changefreq,
      priority: path === '/' ? 1 : config.priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
    };
  },
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
      {
        userAgent: '*',
        disallow: ['/404', '/500'],
      },
    ],
  },
};
