import PropTypes from 'prop-types';
import Counter from './Counter';
import Header from './Header';
import Footer from './Footer';
import Post from './Post';

const Root = function RootComponent({
  title, subTitle, body,
}) {
  return (
    <>
      <Header title={title} />
      <Counter />
      <Post body={body} subTitle={subTitle} />
      <Footer />
    </>
  );
};

Root.propTypes = {
  body: PropTypes.string.isRequired,
  subTitle: PropTypes.string,
  title: PropTypes.string,
};

Root.defaultProps = {
  subTitle: '',
  title: '',
};

export default Root;
