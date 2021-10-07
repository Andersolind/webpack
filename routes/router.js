const express = require('express');
const childProcess = require('child_process');
const { version } = require('../package.json');

const router = express.Router();

router.get('/ping', (req, res) => {
  res.send('pong');
});

router.get('/', (req, res) => {
  res.send('Hello World!');
});

// TODO: Populate the git sha and version variables from an environment file to populate the build info route
// https://indigoca.atlassian.net/browse/STAR-169
router.get('/build-info', (req, res) => {
  const sha = childProcess
    .execSync('git rev-parse --short HEAD')
    .toString()
    .trim();

  res.json({
    version,
    sha,
  });
});

module.exports = router;
