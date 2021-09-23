import React from 'react';
import RawText from './RawText.jsx';

export default function Base({
  title, rawText, children,
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{title}</title>
        <RawText>
          {rawText}
        </RawText>
      </head>
      <body>
        <div id="root">
          {children}
        </div>
      </body>
    </html>
  );
}
