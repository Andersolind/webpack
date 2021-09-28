import {
  useState, useCallback,
} from 'react';
import s from './Counter.module.scss';

const QUANTITY_INIT = 0;
const QUANTITY_INC = 1;
const LABEL = 'Click Here';

const Counter = function CounterComponent() {
  const [quantity, setQuantity] = useState(QUANTITY_INIT);

  const handleClick = useCallback(() => {
    setQuantity(quantity + QUANTITY_INC);
  }, [quantity]);

  return (
    <div className={s.content}>
      <h1 className={s.title}>{quantity}</h1>
      <button className={s.button} onClick={handleClick} type="button">{LABEL}</button>
    </div>
  );
};

export default Counter;
