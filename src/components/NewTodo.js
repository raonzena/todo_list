import React from 'react';

const NewTodo = (props) => (
    <input type="text" className="todo-entry" 
    onChange={(e)=>{props.insertTodoHandler(e, props.subject)}} 
    onFocusOut={props.onFocusOutHandler}/>
)

export default NewTodo;