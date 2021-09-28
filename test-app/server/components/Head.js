import PropTypes from 'prop-types';
import RawText from './RawText.js';

const { CLIENT_PORT } = process.env;

const Head = function HeadComponent({
  title, ssrData,
}) {
  const tags = [];

  // data fetched server-side and passed client-side
  tags.push(`<script>window.APP_DATA = ${JSON.stringify(ssrData)};</script>`);

  tags.push(`
  <script>
    window.addEventListener("load", function() {
      const script = document.createElement("script");
      script.src = "http://localhost:${CLIENT_PORT}/bundle.js";
      document.body.appendChild(script);
    });
  </script>
  `);
  tags.push(`<link rel="stylesheet" href="http://localhost:${CLIENT_PORT}/css/bundle.css">`);

  // combine scripts into one string
  const rawText = tags.join('');

  return (
    <head>
      <meta charSet="UTF-8" />
      <meta content="IE=edge" httpEquiv="X-UA-Compatible" />
      <meta content="width=device-width, initial-scale=1.0" name="viewport" />
      <title>{title}</title>
      <RawText>
        {rawText}
      </RawText>
    </head>
  );
};

Head.propTypes = {
  ssrData: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
};

export default Head;
