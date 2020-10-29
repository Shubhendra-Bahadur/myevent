import React, { useState } from 'react'
import './App.css';
import { Button, FormControl, Input, InputLabel } from '@material-ui/core'

function App() {

  const [todos, setTodos] = useState([]);
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
      {/* <form>
        <input type="text" value={input} onChange={event => setInput(event.target.value)} />
        <Button disabled={!input} type='submit' onClick={addtodo} variant="contained" color="primary">
          Add Todo
        </Button>
        <button type='submit' onClick={addtodo}>Add Todo</button>
      </form> */}
      <form>
        <FormControl onSubmit={addtodo}>
          <InputLabel><i className="fas fa-check font-awsome-success"></i> Write Todo</InputLabel>
          <Input type="text" value={input} onChange={event => setInput(event.target.value)}></Input>
        </FormControl>
        <Button disabled={!input} type='submit' onClick={addtodo} variant="contained" color="primary">
          Add Todo
      </Button>
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
