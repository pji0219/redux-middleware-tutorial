import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Counter from '../components/counter';
import { increaseAsync, decreaseAsync } from '../modules/counter';

function CounterContainer() {
  const number = useSelector((state) => {
    return state.counter;
  });

  const dispatch = useDispatch();
  const onIncrease = () => dispatch(increaseAsync());
  const onDecrease = () => dispatch(decreaseAsync());

  return (
    <div>
      <Counter
        number={number}
        onIncrease={onIncrease}
        onDecrease={onDecrease}
      />
    </div>
  );
}

export default CounterContainer;
