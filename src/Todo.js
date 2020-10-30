import React from "react";
import { Button, List, ListItem, ListItemText } from "@material-ui/core";
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
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

        <Button onClick={deletetodo} variant="outlined"><HighlightOffIcon style={{ color: '#d51010' }} />&nbsp;&nbsp;Delete Me</Button>

      </List>
      {/* <li></li> */}
    </div>
  )
}

export default Todo;
