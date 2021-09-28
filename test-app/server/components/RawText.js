import PropTypes from 'prop-types';

// https://kentcdodds.com/blog/react-jsx-as-a-server-side-templating-language
const RawText = function rawTextComponent({ children }) {
  // eslint-disable-next-line react/no-danger
  return <raw-text dangerouslySetInnerHTML={{ __html: children }} />;
};

RawText.propTypes = {
  children: PropTypes.node.isRequired,
};


export default RawText;
