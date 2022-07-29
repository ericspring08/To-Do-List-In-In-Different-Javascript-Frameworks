import './App.css';
import { useState } from 'react';

function App() {
  const [items, setItems] = useState([])
  const [input, setInput] = useState("")
  const handleChange = (e) => {
    setInput(e.target.value)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    setItems([...items, input])
    setInput("")
  }
  return (
    <div className="App">
      <h1>React</h1>
      <input onChange={handleChange}/>
      <button onClick={handleSubmit}>Add</button>
      {
        items.map((item, index) => (
          <div key={index}>
            {item}
          </div>
        ))
      }
    </div>
  );
}

export default App;
