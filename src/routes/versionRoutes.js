const express = require('express');
const { getCachedVersions, updateCache } = require('../utils/cacheHandler');
const { fetchApacheVersion, fetchPHPVersion } = require('../services/versionService');

const router = express.Router();

router.get('/latest-versions', (req, res) => {
  const cachedVersions = getCachedVersions();
  res.json(cachedVersions);
});

router.get('/update-versions', async (req, res) => {
  console.log('Updating version cache...');
  const apacheVersion = await fetchApacheVersion();
  const phpVersion = await fetchPHPVersion();
  const now = new Date();

  if (apacheVersion && phpVersion) {
    const cachedVersions = {
      apache: apacheVersion,
      php: phpVersion,
      lastUpdated: now.toISOString(),
    };

    updateCache(cachedVersions);
    res.json({ message: 'Version cache updated successfully.', cachedVersions });
  } else {
    res.status(500).json({ message: 'Failed to update version cache.' });
  }
});

module.exports = router;
