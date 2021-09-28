import PropTypes from 'prop-types';
import Base from '../components/Base';

// TODO: better separate server, client and universal components
import Root from '../../components/Root';

const Main = function mainComponent({
  ssrData,
}) {
  // TODO: add state management to avoid prop drilling
  return (
    <Base ssrData={ssrData} title="Test App">
      <Root
        body={ssrData.body}
        subTitle="Data fetched and rendered server-side"
        title="Server-Side Rendered"
      />
    </Base>
  );
};

Main.propTypes = {
  ssrData: PropTypes.object.isRequired,
};

export default Main;
