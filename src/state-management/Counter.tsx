import { useReducer } from 'react';
import CounterReducer from './reducers/CounterReducer';

const Counter = () => {
  const [value , dispatch] = useReducer(CounterReducer , 0)

  return (
    <div>
      Counter ({value})
      <button
        onClick={() => dispatch({ type : "INCREMENT"})}
        className="btn btn-primary mx-1"
      >
        Increment
      </button>
      <button
        onClick={() => dispatch({ type : "REST"})}
        className="btn btn-primary mx-1"
      >
        Reset
      </button>
    </div>
  );
};

export default Counter;
