require('dotenv').config()
const path = require('path');
const { nextI18NextRewrites } = require('next-i18next/rewrites')

const localeSubpaths = {
  en: 'en',
}

module.exports = {
  rewrites: async () => nextI18NextRewrites(localeSubpaths),
  env: {
    API_URL: process.env.API_URL,
    IMAGES_URL: process.env.IMAGES_URL,
  },
  publicRuntimeConfig: {
    API_URL: process.env.API_URL
  },
  webpack: config => {
    config.resolve.alias['lib'] = path.resolve(__dirname, 'lib');
    config.resolve.alias['hoc'] = path.resolve(__dirname, 'hoc');
    config.resolve.alias['utils'] = path.resolve(__dirname, 'utils');
    config.resolve.alias['hooks'] = path.resolve(__dirname, 'hooks');
    config.resolve.alias['public'] = path.resolve(__dirname, 'public');
    config.resolve.alias['components'] = path.resolve(__dirname, 'components');

    return config;
  }
 }
