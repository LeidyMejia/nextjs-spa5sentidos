const NextI18Next = require('next-i18next').default

module.exports = new NextI18Next({
  defaultLanguage: 'es',
  otherLanguages: ['es', 'en'],
  defaultNS: 'common',
  localeSubpaths: {
    en: 'en'
  },
  localePath: typeof window === "undefined" ? "public/static/locales" : "/static/locales",
})