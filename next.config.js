require('dotenv').config();
const path = require('path');
const nextTranslate = require('next-translate');
const { locales, defaultLocale } = require('./i18n.json');

module.exports = nextTranslate({
  i18n: { locales, defaultLocale },
  env: {
    API_URL: process.env.API_URL,
    IMAGES_URL: process.env.IMAGES_URL,
  },
  publicRuntimeConfig: {
    API_URL: process.env.API_URL,
  },
  images: {
    domains: ['localhost']
  },
  webpack: (config, { isServer, webpack }) => {
    config.resolve.alias['lib'] = path.resolve(__dirname, 'lib');
    config.resolve.alias['hoc'] = path.resolve(__dirname, 'hoc');
    config.resolve.alias['utils'] = path.resolve(__dirname, 'utils');
    config.resolve.alias['hooks'] = path.resolve(__dirname, 'hooks');
    config.resolve.alias['public'] = path.resolve(__dirname, 'public');
    config.resolve.alias['styles'] = path.resolve(__dirname, 'styles');
    config.resolve.alias['components'] = path.resolve(__dirname, 'components');

    return config;
  }
})