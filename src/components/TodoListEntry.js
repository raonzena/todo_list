import React from 'react';

const TodoListEntry = (props) => (
    <div className="todo-entry">
        <input type="text" readOnly className="todo-entry-text" value={props.todo}
        onContextMenu={props.contextMenuHandler} onClick={props.completeTodoHandler}/>
        <button className="delete-todo-entry" onClick={(e)=>{props.deleteTodoHandler(e, props.todo)}}>DELETE</button>
    </div>
)

export default TodoListEntry;