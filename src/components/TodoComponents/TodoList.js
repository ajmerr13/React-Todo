import React from "react";
import Chore from "./Todo";

const TodoList = props => {
  return (
    <div>
      {props.chores.map(chore => (
        <Chore
          key={chore.id}
          chore={chore}
          toggleFinished={props.toggleFinished}
        />
      ))}
      <button className="clear-btn" onClick={props.clearChore}>
        Clear Chore List
      </button>
    </div>
  );
};

export default TodoList;