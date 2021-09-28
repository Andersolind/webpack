import express from 'express';
import ReactDOMServer from 'react-dom/server';
import { addAsync } from '@awaitjs/express';
import axios from 'axios';
import removeRawText from './utils/remove-raw-text';
import Main from './views/Main';

const {
  SERVER_PORT,
} = process.env;
const app = addAsync(express());

app.listen(SERVER_PORT);

// TODO: move static assets somewhere so favicon.ico can be picked up
// TODO: create a public folder in build folder and copy contents
// app.use(express.static('public'));

// server-side rendering and rehydration
app.getAsync('/', async (req, res) => {
  // example calling for json
  const { data } = await axios.get('https://jsonplaceholder.typicode.com/posts/1');

  // pass data to
  const htmlOutput = ReactDOMServer.renderToString(<Main ssrData={data} />);

  return res.send(removeRawText(htmlOutput));
});

// TODO: error handling middleware
// app.use((error, req, res, next) => {
//   res.send(error.message);
// });
