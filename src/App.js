import React, { useState } from 'react'
import './App.css';

function App() {

  const [todos, setTodos] = useState(['microprocessor', 'analog']);
  const [input, setInput] = useState('')
  // console.log(input);

  const addtodo = (event) => {
    event.preventDefault();
    setTodos([...todos, input])
    setInput('')
  }
  return (
    <div className="App">
      <h1>My Event List !</h1>
      <form>
        <input type="text" value={input} onChange={event => setInput(event.target.value)} />
        <button type='submit' onClick={addtodo}>Add Todo</button>
      </form>

      <ul>
        {
          todos.map(todo => (
            <li>{todo}</li>
          ))
        }
      </ul>
    </div>
  );
}

export default App;
