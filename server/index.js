import express from 'express';
import cors from 'cors';
import ReactDOM from 'react-dom/server';
import App from '../src/shared/App/App';
import router from '../routes/router';

const app = express();
const tempPort = 5000;

const port = tempPort;

app.use(cors());
app.use(express.static('dist'));

app.get('*', (req, res, next) => {
  const markup = ReactDOM.renderToString(<App />);

  res.send(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>Indigo JS SSR</title>
        <script src="/bundle.js" defer></script>
        <link href="/main.css" rel="stylesheet">
      </head>

      <body>
        <div id="app">${markup}</div>
      </body>
    </html>
  `);
});

app.listen(port, () => {
  const section = 'IndigoJS';

  // eslint-disable-next-line no-console
  return console.log(`${section} is running on port: ${port}`);
});
app.use(router);

app.use((req, res) => {
  res.send('404');
});
