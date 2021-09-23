import React from 'react';
import ReactDOM from 'react-dom';
import Root from '../components/Root';

import '@fontsource/roboto';
import '@fontsource/roboto/700.css';
import '../styles/bundle.scss';

// check if root node has been populated with markup
const isMarkupPresent = document.getElementById('root').hasChildNodes();
// choose to hydrate if ssr
const renderMethod = isMarkupPresent ? ReactDOM.hydrate : ReactDOM.render;

// data passed to the client
const data = window.APP_DATA;

renderMethod(
  <Root
    title="Rehydration"
    subTitle="Data fetched server-side, passed to and rendered client-side"
    body={data.body}
  />,
  document.getElementById('root'),
);
