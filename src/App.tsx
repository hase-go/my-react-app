import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Counter from "./components/Counter";

function App() {
  const [count, setCount] = useState(0);
  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>React + TypeScript</h1>
      <Counter />
      <p>カウント: {count}</p>
      <button onClick={() => setCount(count + 1)}>+1</button>
    </div>
  );
}


export default App
