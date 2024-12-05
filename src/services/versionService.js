const axios = require('axios');
const config = require('src/config/appConfig');

const apacheRegex = new RegExp(config.apache.regexPattern, config.apache.regexFlags);
const phpRegex = new RegExp(config.php.regexPattern, config.php.regexFlags);

async function fetchApacheVersion() {
  try {
    const response = await axios.get(config.apache.url);
    const versionMatch = response.data.match(apacheRegex);
    return versionMatch ? versionMatch[0] : 'Apache Version not Found';
  } catch (error) {
    console.error('Error fetching Apache version:', error.message);
    return null;
  }
}

async function fetchPHPVersion() {
  try {
    const response = await axios.get(config.php.url);
    const versionMatch = response.data.match(phpRegex);
    return versionMatch ? versionMatch[0] : 'PHP Version not Found';
  } catch (error) {
    console.error('Error fetching PHP version:', error.message);
    return null;
  }
}

module.exports = { fetchApacheVersion, fetchPHPVersion };
