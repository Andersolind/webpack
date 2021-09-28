import PropTypes from 'prop-types';
import s from './Post.module.scss';

const Post = function PostComponent({
  title, subTitle, body,
}) {
  return (
    <div className={s.content}>
      {title && <h1 suppressHydrationWarning>{title}</h1>}
      {subTitle && <h3 suppressHydrationWarning>{subTitle}</h3>}
      <p className={s.body} suppressHydrationWarning>{body}</p>
    </div>
  );
};

Post.propTypes = {
  body: PropTypes.string.isRequired,
  subTitle: PropTypes.string,
  title: PropTypes.string,
};

Post.defaultProps = {
  subTitle: '',
  title: '',
};

export default Post;
