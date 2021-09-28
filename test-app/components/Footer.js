import s from './Footer.module.scss';

const COPYRIGHT = '© Footer. All rights reserved.';

const Footer = function FooterComponent() {
  return (
    <div className={s.content}>{COPYRIGHT}</div>
  );
};

export default Footer;
