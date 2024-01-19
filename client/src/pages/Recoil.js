// RecoilComponent.js
import React from 'react';
import { useRecoilState } from 'recoil';
import { countState } from '../pages/Rec';

const RecoilComponent = () => {
  const [count, setCount] = useRecoilState(countState);

  return (
    <div>
      <p>Note that the development build is not optimized</p>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  );
};

export default RecoilComponent;
