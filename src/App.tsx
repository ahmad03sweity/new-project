import { useReducer } from "react";
import "./App.css";
import reducer from "./reducers/reducer";

const initialState = { counter: 0 };

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <h1 className="title">Vite + React</h1>
      <h2 className="counter">{state.counter}</h2>
      <div className="card">
      <button className="button increment" onClick={() => dispatch({ type: "increment" })}>
        Increment
      </button>
      <button className="button decrement" onClick={() => dispatch({ type: "decrement" })}>
        Decrement
      </button>
      <button className="button reset" onClick={() => dispatch({ type: "reset" })}>Reset</button>
      </div>
      <input className="input" type="number" onChange={(v) => dispatch({ type: 'set-value', payload: Number(v.currentTarget.value) })} />
    </>
  );
}

export default App;
