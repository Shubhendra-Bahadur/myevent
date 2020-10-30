import React from "react";
import { List, ListItem, ListItemText} from "@material-ui/core";
function Todo(props) {
 // console.log(props);
  return (
    <div>
        <List>
            <ListItem>
                <ListItemText primary={props.text} secondary='active'></ListItemText>
            </ListItem>
        </List>
      {/* <li></li> */}
    </div>
  )
}

export default Todo;
