import React from "react";
import { Button, List, ListItem, ListItemText } from "@material-ui/core";
import db from "./firebase";
function Todo(props) {
  //console.log(props);
  const deletetodo = (event) => {
    db.collection('todos').doc(props.todo.id).delete();
  }

  return (
    <div>
      <List>
        <ListItem>
          <ListItemText primary={props.todo.todo} secondary='active'></ListItemText>
        </ListItem>
        <div>
          <Button onClick={deletetodo} variant="outlined"><i className="fas fa-trash font-awsome-danger">&nbsp;&nbsp;</i>Delete Me</Button>
        </div>
      </List>
      {/* <li></li> */}
    </div>
  )
}

export default Todo;
