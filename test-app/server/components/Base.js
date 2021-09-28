import PropTypes from 'prop-types';
import Head from './Head';

const Base = function baseComponent({
  title,
  ssrData,
  children,
}) {
  return (
    <html lang="en">
      <Head ssrData={ssrData} title={title} />
      <body>
        <div id="root">
          {children}
        </div>
      </body>
    </html>
  );
};

Base.propTypes = {
  children: PropTypes.node.isRequired,
  ssrData: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
};

export default Base;
