import React from 'react';
import s from './Post.module.scss';

export default function Post({ title, subTitle, body }) {
  return (
    <div className={s.content}>
      {title && <h1 suppressHydrationWarning>{title}</h1>}
      {subTitle && <h3 suppressHydrationWarning>{subTitle}</h3>}
      <p className={s.body} suppressHydrationWarning>{body}</p>
    </div>
  );
}
