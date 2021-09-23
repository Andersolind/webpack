import React, { useState } from 'react';
import s from './Counter.module.scss';

export default function Counter() {
  const [quantity, setQuantity] = useState(0);

  const onClick = () => {
    return setQuantity(quantity + 1);
  };

  return (
    <div className={s.content}>
      <h1 className={s.title}>{quantity}</h1>
      <button className={s.button} type="button" onClick={onClick}>Click Here</button>
    </div>
  );
}
