import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { Count } from './components/count';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Count count={count} setCount={setCount} />
    </div >
  );
}

export default App;
