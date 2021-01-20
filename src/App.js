import './App.css';
import {useState} from 'react'

function App() {
  const [Age, setAge] = useState(0);
  const [High, setHigh] = useState(0);
  const [Low, setLow] = useState(0);

  function handleSubmit(e) {
    e.preventDefault();
    const high = (220 - Age) * 0.85;
    const low = (220 - Age) * 0.65;
    setHigh(high);
    setLow(low);
  }

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <div>
          <label>Age</label>
          <input type='number' value={Age} onChange={e => setAge(e.target.value)}></input>
        </div>
        <div>
          <label>Heart rate limits</label>
          <output>{Low}-{High}</output>
        </div>
        <button>Calculate</button>
      </form>
    </div>
  );
}

export default App;
