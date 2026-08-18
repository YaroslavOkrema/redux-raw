import { increment , decrement, reset, incrementByAmount } from "./store/counterSlice.ts";
import { useState } from "react";
import {
    useAppDispatch,
    useAppSelector,
} from './store/hooks';

function App() {
  const count = useAppSelector((state) => state.counter.count);
  const dispatch = useAppDispatch();

  const [amount, setAmount] = useState<number>(0);

  return (
      <div>
          <h1>Counter</h1>
          <h2>{count}</h2>
          <button onClick={() => dispatch(increment())}>
              +1
          </button>
          <button onClick={() => dispatch(decrement())}>
              -1
          </button>
          <button onClick={() => dispatch(reset())}>
              reset
          </button>
          <button onClick={() => dispatch(incrementByAmount(5))}>
              +5
          </button>

          <div>
              <input
                  type="number"
                  value={amount}
                  onChange={(e) => setAmount(Number(e.target.value))}
              />

              <button onClick={() => dispatch(incrementByAmount(amount))}>
                  Add amount
              </button>
          </div>
      </div>
  )
}

export default App
