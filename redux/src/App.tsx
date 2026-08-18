import type { RootState } from './store/store';
import {useSelector} from "react-redux";

function App() {
  const count = useSelector((state: RootState) => state.counter.count);
  return (
      <div>
        <h1>Counter</h1>

        <h2>{count}</h2>
      </div>
  )
}

export default App
