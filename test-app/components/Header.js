import React from 'react';
import s from './Header.module.scss';

export default function Header({ title }) {
  return (
    <div className={s.content}>
      <a href="/" className={s.logo} suppressHydrationWarning>{title}</a>
    </div>
  );
}
