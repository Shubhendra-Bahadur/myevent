import React, { useState, useEffect } from 'react'
import './App.css';
import { Button, FormControl, Input, InputLabel } from '@material-ui/core'
import Todo from './Todo'
import db from './firebase'
import firebase from 'firebase';

function App() {

  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');
  useEffect(() => {
    return () => {
      db.collection('todos').orderBy('timestamp',"desc").onSnapshot(snapshot => {
         //console.log(snapshot.docs.map(doc => doc.data().todo));
        setTodos(snapshot.docs.map(doc => doc.data().todo))
      })
    }
  },[input])



  const addtodo = (event) => {
    event.preventDefault();
    console.log(input);
    console.log(todos);
    db.collection('todos').add(
      {
        todo:input,
        timestamp: firebase.firestore.FieldValue.serverTimestamp()
      }
    )
    //setTodos([...todos, input])
    setInput('')
  }
  return (
    <div className="App">
      <h1>My Event List !</h1>
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
            <Todo text={todo} />
          ))
        }
      </ul>
    </div>
  );
}

export default App;
