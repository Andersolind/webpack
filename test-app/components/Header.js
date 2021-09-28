import PropTypes from 'prop-types';
import s from './Header.module.scss';

const Header = function HeaderComponent({ title }) {
  return (
    <div className={s.content}>
      <a className={s.logo} href="/" suppressHydrationWarning>{title}</a>
    </div>
  );
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
