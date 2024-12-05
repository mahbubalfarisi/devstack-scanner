require('dotenv').config();

const config = {
  port: process.env.PORT,
  cacheFile: process.env.CACHE_FILE,
  apache: {
    url: process.env.APACHE_URL,
    regexPattern: process.env.APACHE_REGEX_PATTERN,
    regexFlags: process.env.APACHE_REGEX_FLAGS || '',
  },
  php: {
    url: process.env.PHP_URL,
    regexPattern: process.env.PHP_REGEX_PATTERN,
    regexFlags: process.env.PHP_REGEX_FLAGS || '',
  },
  metadata: {
    author: process.env.AUTHOR,
    version: process.env.APP_VERSION,
    releaseDate: process.env.RELEASE_DATE,
  },
};

module.exports = config;
