const express = require('express');
const morgan = require('morgan');
const router = require('./routes/router');

const app = express();

// TODO: Determine pro's and con's between json configuration file
// vs .env file for dynamic environment variables
// https://indigoca.atlassian.net/browse/STAR-170
const port = 3000;

app.listen(port, () => {
  const section = 'IndigoJS';

  // eslint-disable-next-line no-console
  return console.log(`${section} is running on port: ${port}`);
});

// define static files folder
app.use(express.static('public'));

// TODO: create a indigo-js logger
// https://indigoca.atlassian.net/browse/STAR-149
app.use(morgan('dev'));

app.use(router);

app.use((req, res) => {
  res.send('404');
});

module.exports = {
  app,
  router,
};
