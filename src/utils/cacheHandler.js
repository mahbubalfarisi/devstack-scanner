const fs = require('fs');
const config = require('src/config/appConfig');

function getCachedVersions() {
  if (fs.existsSync(config.cacheFile)) {
    return JSON.parse(fs.readFileSync(config.cacheFile, 'utf-8'));
  }
  return { message: 'Version information is not available yet.' };
}

function updateCache(data) {
  fs.writeFileSync(config.cacheFile, JSON.stringify(data, null, 2), 'utf-8');
}

module.exports = { getCachedVersions, updateCache };
