import express from 'express';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { addAsync } from '@awaitjs/express';
import axios from 'axios';
import Base from './Base.jsx';
import { removeRawText } from './RawText.jsx';
import Root from '../components/Root';

const { SERVER_PORT, CLIENT_PORT } = process.env;
const app = addAsync(express());

app.listen(SERVER_PORT);

// TODO: move static assets somewhere so favicon.ico can be picked up

// server-side rendering and rehydration
app.getAsync('/', async (req, res) => {
  // example calling for json
  const { data } = await axios.get('https://jsonplaceholder.typicode.com/posts/1');

  const tags = [];
  // data fetched server-side and passed client-side
  tags.push(`<script>window.APP_DATA = ${JSON.stringify(data)};</script>`);
  // TODO: remove setTimeout - bundle added after page load, with delay for demonstration
  tags.push(`
  <script>
    window.addEventListener("load", function() {
      const script = document.createElement("script");
      script.src = "http://localhost:${CLIENT_PORT}/bundle.js";
      setTimeout(() => {
        document.body.appendChild(script);
      }, 2000);
    });
  </script>
  `);
  tags.push(`<link rel="stylesheet" href="http://localhost:${CLIENT_PORT}/css/bundle.css">`);
  // combine scripts into one string
  const rawText = tags.join('');

  const htmlOutput = ReactDOMServer.renderToString(
    <Base title="Test App" rawText={rawText}>
      <Root
        title="Server-Side Rendered"
        subTitle="Data fetched and rendered server-side"
        body={data.body}
        ssrData={data}
      />
    </Base>,
  );
  return res.send(removeRawText(htmlOutput));
});

// TODO: error handling middleware
// app.use((error, req, res, next) => {
//   res.send(error.message);
// });
